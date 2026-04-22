export type McpLoopbackRuntime = {
  port: number;
  token: string;
};

let activeRuntime: McpLoopbackRuntime | undefined;

export function getActiveMcpLoopbackRuntime(): McpLoopbackRuntime | undefined {
  return activeRuntime ? { ...activeRuntime } : undefined;
}

export function setActiveMcpLoopbackRuntime(runtime: McpLoopbackRuntime): void {
  activeRuntime = { ...runtime };
}

export function clearActiveMcpLoopbackRuntime(token: string): void {
  if (activeRuntime?.token === token) {
    activeRuntime = undefined;
  }
}

export function createMcpLoopbackServerConfig(port: number) {
  return {
    mcpServers: {
      susan: {
        type: "http",
        url: `http://127.0.0.1:${port}/mcp`,
        headers: {
          Authorization: "Bearer ${SUSAN_MCP_TOKEN}",
          "x-session-key": "${SUSAN_MCP_SESSION_KEY}",
          "x-susan-agent-id": "${SUSAN_MCP_AGENT_ID}",
          "x-susan-account-id": "${SUSAN_MCP_ACCOUNT_ID}",
          "x-susan-message-channel": "${SUSAN_MCP_MESSAGE_CHANNEL}",
          "x-susan-sender-is-owner": "${SUSAN_MCP_SENDER_IS_OWNER}",
        },
      },
    },
  };
}
