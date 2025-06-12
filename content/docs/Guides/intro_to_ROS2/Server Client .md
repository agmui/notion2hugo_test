---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZC5RCT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxHhLzNpszPfDR4Jsp72SB4WiJXVPqRKbxH0vo%2FuFllgIgJEUyUpac9n3G0R0sDYWqyImEipRFOaaC%2F9njS7lpzZUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI%2B6Ea8GIDKxMycMCrcA2Oci1EkOyJ0MOUmtNmi3KlP56TMKNyHKx8cP4IB8NUo%2F3FDA92Jr0oaotYLMX27RK2X1Qy1ywMv23nTdb5ZQXeeLGXhTP%2BK4z1jSiQ39w5N3GOreIK5pBypcGpuXV68yPSkIpecW95OX0Ci4o5T2S6ODvrMnzsI8Z2wdfzGqbR5osAi%2BlkqTY9bE9d%2F%2FkLx9Lrkgkcc47SVHsc2LO%2BVd1rDgRWArxrU99I7m74lorgwEpPDULkhFsa723Crx9mvP2sqAOuqBdqlwFbz3Ou%2FYP66vgNStkkMqJ1OhZVh75S0urZZCTzSCCCY%2BcRkFYst1KQEjHnmfhjtwWwIXYxeqYNWpMuiA9PQnsO7AJsMzmsUdK9KRDwf4gIbQ8G41fYye6K5FNQJuKapg1Fqf7xz%2FiSb4KeOCw62ZmeyDRYqnLNa2gAhE3aOQNMEl%2Fse7cutoC9LIXR%2FJmYu%2Ft98wACGNB9K7HEngKfZnGJKQXf0famQBLP6vSgfOC2Ly%2BGllgVx7nMeHAgn6xZh3Xt5VBLuNdiqZMPwP6Dv9DQxae9DOUWiNPCuiGsC4DNSzGFTwX938LtLZmcYd9t1uMdhC2HNKSnDhnimUnkHdag%2BF8ZrJFIdXz8AKIDqhidr5UF2MN%2BHqsIGOqUB0AQlRPYpSbLAAYpWf%2F6RLq48qnBb6oSBc7ojLbJO4P4mtW8WPuKzGFKG9xXQInD0KtHijF%2F37dAblifCeq%2BvB7qUEMamftxqqtJS1jJrfQ9pB%2FMZXC386nZ9rki0wI%2B7g2H9W1VwOWmFGW0k%2BowcGQ52AXN3m4fRCPpWbGOkTNEg%2FqY24eUi99dpOikK5hKplBfikZkecPCGWCHi%2BdmIAB2rATDT&X-Amz-Signature=a7c319a3876cc7261fb2abd08a4785953556d9283b5707d2f42a65d20a4b30f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZC5RCT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxHhLzNpszPfDR4Jsp72SB4WiJXVPqRKbxH0vo%2FuFllgIgJEUyUpac9n3G0R0sDYWqyImEipRFOaaC%2F9njS7lpzZUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI%2B6Ea8GIDKxMycMCrcA2Oci1EkOyJ0MOUmtNmi3KlP56TMKNyHKx8cP4IB8NUo%2F3FDA92Jr0oaotYLMX27RK2X1Qy1ywMv23nTdb5ZQXeeLGXhTP%2BK4z1jSiQ39w5N3GOreIK5pBypcGpuXV68yPSkIpecW95OX0Ci4o5T2S6ODvrMnzsI8Z2wdfzGqbR5osAi%2BlkqTY9bE9d%2F%2FkLx9Lrkgkcc47SVHsc2LO%2BVd1rDgRWArxrU99I7m74lorgwEpPDULkhFsa723Crx9mvP2sqAOuqBdqlwFbz3Ou%2FYP66vgNStkkMqJ1OhZVh75S0urZZCTzSCCCY%2BcRkFYst1KQEjHnmfhjtwWwIXYxeqYNWpMuiA9PQnsO7AJsMzmsUdK9KRDwf4gIbQ8G41fYye6K5FNQJuKapg1Fqf7xz%2FiSb4KeOCw62ZmeyDRYqnLNa2gAhE3aOQNMEl%2Fse7cutoC9LIXR%2FJmYu%2Ft98wACGNB9K7HEngKfZnGJKQXf0famQBLP6vSgfOC2Ly%2BGllgVx7nMeHAgn6xZh3Xt5VBLuNdiqZMPwP6Dv9DQxae9DOUWiNPCuiGsC4DNSzGFTwX938LtLZmcYd9t1uMdhC2HNKSnDhnimUnkHdag%2BF8ZrJFIdXz8AKIDqhidr5UF2MN%2BHqsIGOqUB0AQlRPYpSbLAAYpWf%2F6RLq48qnBb6oSBc7ojLbJO4P4mtW8WPuKzGFKG9xXQInD0KtHijF%2F37dAblifCeq%2BvB7qUEMamftxqqtJS1jJrfQ9pB%2FMZXC386nZ9rki0wI%2B7g2H9W1VwOWmFGW0k%2BowcGQ52AXN3m4fRCPpWbGOkTNEg%2FqY24eUi99dpOikK5hKplBfikZkecPCGWCHi%2BdmIAB2rATDT&X-Amz-Signature=e868e0aed9a4f659200c52dce175508b444d2d1327780525c5b9aee9db46518f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZC5RCT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxHhLzNpszPfDR4Jsp72SB4WiJXVPqRKbxH0vo%2FuFllgIgJEUyUpac9n3G0R0sDYWqyImEipRFOaaC%2F9njS7lpzZUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI%2B6Ea8GIDKxMycMCrcA2Oci1EkOyJ0MOUmtNmi3KlP56TMKNyHKx8cP4IB8NUo%2F3FDA92Jr0oaotYLMX27RK2X1Qy1ywMv23nTdb5ZQXeeLGXhTP%2BK4z1jSiQ39w5N3GOreIK5pBypcGpuXV68yPSkIpecW95OX0Ci4o5T2S6ODvrMnzsI8Z2wdfzGqbR5osAi%2BlkqTY9bE9d%2F%2FkLx9Lrkgkcc47SVHsc2LO%2BVd1rDgRWArxrU99I7m74lorgwEpPDULkhFsa723Crx9mvP2sqAOuqBdqlwFbz3Ou%2FYP66vgNStkkMqJ1OhZVh75S0urZZCTzSCCCY%2BcRkFYst1KQEjHnmfhjtwWwIXYxeqYNWpMuiA9PQnsO7AJsMzmsUdK9KRDwf4gIbQ8G41fYye6K5FNQJuKapg1Fqf7xz%2FiSb4KeOCw62ZmeyDRYqnLNa2gAhE3aOQNMEl%2Fse7cutoC9LIXR%2FJmYu%2Ft98wACGNB9K7HEngKfZnGJKQXf0famQBLP6vSgfOC2Ly%2BGllgVx7nMeHAgn6xZh3Xt5VBLuNdiqZMPwP6Dv9DQxae9DOUWiNPCuiGsC4DNSzGFTwX938LtLZmcYd9t1uMdhC2HNKSnDhnimUnkHdag%2BF8ZrJFIdXz8AKIDqhidr5UF2MN%2BHqsIGOqUB0AQlRPYpSbLAAYpWf%2F6RLq48qnBb6oSBc7ojLbJO4P4mtW8WPuKzGFKG9xXQInD0KtHijF%2F37dAblifCeq%2BvB7qUEMamftxqqtJS1jJrfQ9pB%2FMZXC386nZ9rki0wI%2B7g2H9W1VwOWmFGW0k%2BowcGQ52AXN3m4fRCPpWbGOkTNEg%2FqY24eUi99dpOikK5hKplBfikZkecPCGWCHi%2BdmIAB2rATDT&X-Amz-Signature=0c298796780a463527749bf4e46ab93bc33eaa27555e8af5cabde09e51dfc010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZC5RCT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxHhLzNpszPfDR4Jsp72SB4WiJXVPqRKbxH0vo%2FuFllgIgJEUyUpac9n3G0R0sDYWqyImEipRFOaaC%2F9njS7lpzZUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI%2B6Ea8GIDKxMycMCrcA2Oci1EkOyJ0MOUmtNmi3KlP56TMKNyHKx8cP4IB8NUo%2F3FDA92Jr0oaotYLMX27RK2X1Qy1ywMv23nTdb5ZQXeeLGXhTP%2BK4z1jSiQ39w5N3GOreIK5pBypcGpuXV68yPSkIpecW95OX0Ci4o5T2S6ODvrMnzsI8Z2wdfzGqbR5osAi%2BlkqTY9bE9d%2F%2FkLx9Lrkgkcc47SVHsc2LO%2BVd1rDgRWArxrU99I7m74lorgwEpPDULkhFsa723Crx9mvP2sqAOuqBdqlwFbz3Ou%2FYP66vgNStkkMqJ1OhZVh75S0urZZCTzSCCCY%2BcRkFYst1KQEjHnmfhjtwWwIXYxeqYNWpMuiA9PQnsO7AJsMzmsUdK9KRDwf4gIbQ8G41fYye6K5FNQJuKapg1Fqf7xz%2FiSb4KeOCw62ZmeyDRYqnLNa2gAhE3aOQNMEl%2Fse7cutoC9LIXR%2FJmYu%2Ft98wACGNB9K7HEngKfZnGJKQXf0famQBLP6vSgfOC2Ly%2BGllgVx7nMeHAgn6xZh3Xt5VBLuNdiqZMPwP6Dv9DQxae9DOUWiNPCuiGsC4DNSzGFTwX938LtLZmcYd9t1uMdhC2HNKSnDhnimUnkHdag%2BF8ZrJFIdXz8AKIDqhidr5UF2MN%2BHqsIGOqUB0AQlRPYpSbLAAYpWf%2F6RLq48qnBb6oSBc7ojLbJO4P4mtW8WPuKzGFKG9xXQInD0KtHijF%2F37dAblifCeq%2BvB7qUEMamftxqqtJS1jJrfQ9pB%2FMZXC386nZ9rki0wI%2B7g2H9W1VwOWmFGW0k%2BowcGQ52AXN3m4fRCPpWbGOkTNEg%2FqY24eUi99dpOikK5hKplBfikZkecPCGWCHi%2BdmIAB2rATDT&X-Amz-Signature=3021cb4950b81aed373173e1ba27d5cbd922b476fddf3a1efc4bf8e65ab3c194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZC5RCT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxHhLzNpszPfDR4Jsp72SB4WiJXVPqRKbxH0vo%2FuFllgIgJEUyUpac9n3G0R0sDYWqyImEipRFOaaC%2F9njS7lpzZUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI%2B6Ea8GIDKxMycMCrcA2Oci1EkOyJ0MOUmtNmi3KlP56TMKNyHKx8cP4IB8NUo%2F3FDA92Jr0oaotYLMX27RK2X1Qy1ywMv23nTdb5ZQXeeLGXhTP%2BK4z1jSiQ39w5N3GOreIK5pBypcGpuXV68yPSkIpecW95OX0Ci4o5T2S6ODvrMnzsI8Z2wdfzGqbR5osAi%2BlkqTY9bE9d%2F%2FkLx9Lrkgkcc47SVHsc2LO%2BVd1rDgRWArxrU99I7m74lorgwEpPDULkhFsa723Crx9mvP2sqAOuqBdqlwFbz3Ou%2FYP66vgNStkkMqJ1OhZVh75S0urZZCTzSCCCY%2BcRkFYst1KQEjHnmfhjtwWwIXYxeqYNWpMuiA9PQnsO7AJsMzmsUdK9KRDwf4gIbQ8G41fYye6K5FNQJuKapg1Fqf7xz%2FiSb4KeOCw62ZmeyDRYqnLNa2gAhE3aOQNMEl%2Fse7cutoC9LIXR%2FJmYu%2Ft98wACGNB9K7HEngKfZnGJKQXf0famQBLP6vSgfOC2Ly%2BGllgVx7nMeHAgn6xZh3Xt5VBLuNdiqZMPwP6Dv9DQxae9DOUWiNPCuiGsC4DNSzGFTwX938LtLZmcYd9t1uMdhC2HNKSnDhnimUnkHdag%2BF8ZrJFIdXz8AKIDqhidr5UF2MN%2BHqsIGOqUB0AQlRPYpSbLAAYpWf%2F6RLq48qnBb6oSBc7ojLbJO4P4mtW8WPuKzGFKG9xXQInD0KtHijF%2F37dAblifCeq%2BvB7qUEMamftxqqtJS1jJrfQ9pB%2FMZXC386nZ9rki0wI%2B7g2H9W1VwOWmFGW0k%2BowcGQ52AXN3m4fRCPpWbGOkTNEg%2FqY24eUi99dpOikK5hKplBfikZkecPCGWCHi%2BdmIAB2rATDT&X-Amz-Signature=99e5739e7098c4c5d545fcb8d8abf5b679e1ddf749aef8ef4fc9f998e8b4271b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
