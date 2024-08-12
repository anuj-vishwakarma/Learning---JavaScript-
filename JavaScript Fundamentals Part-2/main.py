import networkx as nx
import matplotlib.pyplot as plt

# Create a directed graph
G = nx.DiGraph()

# Add nodes (vertices)
G.add_node("A")
G.add_node("B")
G.add_node("C")

# Add edges (directed edges)
G.add_edge("A", "B")
G.add_edge("B", "C")
G.add_edge("C", "A")

# Draw the graph
nx.draw(G, with_labels=True, node_color='lightblue', edge_color='gray')
plt.show()
