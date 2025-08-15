---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTC44QDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEYIsjo3RSxDd6ETLCGd1g1cXizkm7FqhGhFSiYzNtlOAiBnezv5xD8WArliIKGN%2BEIh8%2BFi0YM%2FQq2%2F%2BKAPNK51SSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMggP%2Fzr4mbJxHI4rhKtwDK84QhRjxmhJ%2B7%2BtqyhSUQgPb9a%2BTKQnZvtYGU17omIb4wyyjUn%2Fg1kT1ybQsZMdO73D8SXzKzQiWPu93ribaNOZEUdNEqZkH7t37m%2B7hikCgWMqTLO5IBfl1bYAGSBSW0IERqanTiIyH4EhcuS9AuY0xnXLhkXYE8wRUe36FR2NvI1tZc%2B8q%2FAoo6cg5y1EvToaKaq70ZQZ4Cx4wr%2BFjkyyPs5JtBCNr3EM%2BitfSW0VGO25DPkgk%2FCLVvUX%2FU455GsEvkRHEOPt5g2ZYRjnExkFrEBMqdo8H3VIxXH3AB0slA5zC5KdKnHKsnSsfvM7j8adanVATZlOWalSPbF5qDywZdfzSMdLH2x0zHJZdL0uaeNrgyRYUL5tt%2Ffv6u0x8CcQwzxklcGR1LjrJDHa1RvTKt2mrF%2BaCe0H%2B39rD%2BRg0hMABy78nO9Mw99qOk2O4ml2bbg7E0hrV3m%2BTH7yxQnZ1V7GBdxVujb9tlsAGOYmofQ%2F255IoUxMELlh7DjmCKXXmFKjY0pR5SXZpS%2FmhFC6pvc%2BPjFSB3x%2BlVWukfUpiBJoQJQlQHJmRqJpY4aIUzmLFZSuAVyb9EUp6YUiEV0ipnudwyvqM8CfvyHB3KXibqTlYgrQoDvrrzY8wz9v9xAY6pgG0cwjMfMhmOrBkRtCRDqVNiL9%2FObqzs8B43N7m0ULjcVkHA9P0ei6VctjVsd8n%2Frr0qInn9Wl7g9NEIco3zJvWsbzQQpjn0ozAMy%2Bpc9z1pUM7Y9jqKoKxf316B7YLy2cC5HxdgNOWn0Q8ggGY%2FhsNqzmozQcO%2B8B%2BPw0aFZNnqk3I%2Bbuk7ApIj0E0RwbxjS5b9llG6iFPS%2FeXQUKPRVaXEFl51All&X-Amz-Signature=2cd22533c3c7343a225198dc9f513cb02c1dc121a1c6515d12b29e0e9befa98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTC44QDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEYIsjo3RSxDd6ETLCGd1g1cXizkm7FqhGhFSiYzNtlOAiBnezv5xD8WArliIKGN%2BEIh8%2BFi0YM%2FQq2%2F%2BKAPNK51SSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMggP%2Fzr4mbJxHI4rhKtwDK84QhRjxmhJ%2B7%2BtqyhSUQgPb9a%2BTKQnZvtYGU17omIb4wyyjUn%2Fg1kT1ybQsZMdO73D8SXzKzQiWPu93ribaNOZEUdNEqZkH7t37m%2B7hikCgWMqTLO5IBfl1bYAGSBSW0IERqanTiIyH4EhcuS9AuY0xnXLhkXYE8wRUe36FR2NvI1tZc%2B8q%2FAoo6cg5y1EvToaKaq70ZQZ4Cx4wr%2BFjkyyPs5JtBCNr3EM%2BitfSW0VGO25DPkgk%2FCLVvUX%2FU455GsEvkRHEOPt5g2ZYRjnExkFrEBMqdo8H3VIxXH3AB0slA5zC5KdKnHKsnSsfvM7j8adanVATZlOWalSPbF5qDywZdfzSMdLH2x0zHJZdL0uaeNrgyRYUL5tt%2Ffv6u0x8CcQwzxklcGR1LjrJDHa1RvTKt2mrF%2BaCe0H%2B39rD%2BRg0hMABy78nO9Mw99qOk2O4ml2bbg7E0hrV3m%2BTH7yxQnZ1V7GBdxVujb9tlsAGOYmofQ%2F255IoUxMELlh7DjmCKXXmFKjY0pR5SXZpS%2FmhFC6pvc%2BPjFSB3x%2BlVWukfUpiBJoQJQlQHJmRqJpY4aIUzmLFZSuAVyb9EUp6YUiEV0ipnudwyvqM8CfvyHB3KXibqTlYgrQoDvrrzY8wz9v9xAY6pgG0cwjMfMhmOrBkRtCRDqVNiL9%2FObqzs8B43N7m0ULjcVkHA9P0ei6VctjVsd8n%2Frr0qInn9Wl7g9NEIco3zJvWsbzQQpjn0ozAMy%2Bpc9z1pUM7Y9jqKoKxf316B7YLy2cC5HxdgNOWn0Q8ggGY%2FhsNqzmozQcO%2B8B%2BPw0aFZNnqk3I%2Bbuk7ApIj0E0RwbxjS5b9llG6iFPS%2FeXQUKPRVaXEFl51All&X-Amz-Signature=9b898e1c0b8b65a4e68017edd4a8e6a6d6656bf1ea46fa187394144b7398a449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTC44QDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEYIsjo3RSxDd6ETLCGd1g1cXizkm7FqhGhFSiYzNtlOAiBnezv5xD8WArliIKGN%2BEIh8%2BFi0YM%2FQq2%2F%2BKAPNK51SSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMggP%2Fzr4mbJxHI4rhKtwDK84QhRjxmhJ%2B7%2BtqyhSUQgPb9a%2BTKQnZvtYGU17omIb4wyyjUn%2Fg1kT1ybQsZMdO73D8SXzKzQiWPu93ribaNOZEUdNEqZkH7t37m%2B7hikCgWMqTLO5IBfl1bYAGSBSW0IERqanTiIyH4EhcuS9AuY0xnXLhkXYE8wRUe36FR2NvI1tZc%2B8q%2FAoo6cg5y1EvToaKaq70ZQZ4Cx4wr%2BFjkyyPs5JtBCNr3EM%2BitfSW0VGO25DPkgk%2FCLVvUX%2FU455GsEvkRHEOPt5g2ZYRjnExkFrEBMqdo8H3VIxXH3AB0slA5zC5KdKnHKsnSsfvM7j8adanVATZlOWalSPbF5qDywZdfzSMdLH2x0zHJZdL0uaeNrgyRYUL5tt%2Ffv6u0x8CcQwzxklcGR1LjrJDHa1RvTKt2mrF%2BaCe0H%2B39rD%2BRg0hMABy78nO9Mw99qOk2O4ml2bbg7E0hrV3m%2BTH7yxQnZ1V7GBdxVujb9tlsAGOYmofQ%2F255IoUxMELlh7DjmCKXXmFKjY0pR5SXZpS%2FmhFC6pvc%2BPjFSB3x%2BlVWukfUpiBJoQJQlQHJmRqJpY4aIUzmLFZSuAVyb9EUp6YUiEV0ipnudwyvqM8CfvyHB3KXibqTlYgrQoDvrrzY8wz9v9xAY6pgG0cwjMfMhmOrBkRtCRDqVNiL9%2FObqzs8B43N7m0ULjcVkHA9P0ei6VctjVsd8n%2Frr0qInn9Wl7g9NEIco3zJvWsbzQQpjn0ozAMy%2Bpc9z1pUM7Y9jqKoKxf316B7YLy2cC5HxdgNOWn0Q8ggGY%2FhsNqzmozQcO%2B8B%2BPw0aFZNnqk3I%2Bbuk7ApIj0E0RwbxjS5b9llG6iFPS%2FeXQUKPRVaXEFl51All&X-Amz-Signature=2b127180b422fe749eb2b857e90464a6c08d8068f4387015df284a9b708128d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTC44QDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEYIsjo3RSxDd6ETLCGd1g1cXizkm7FqhGhFSiYzNtlOAiBnezv5xD8WArliIKGN%2BEIh8%2BFi0YM%2FQq2%2F%2BKAPNK51SSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMggP%2Fzr4mbJxHI4rhKtwDK84QhRjxmhJ%2B7%2BtqyhSUQgPb9a%2BTKQnZvtYGU17omIb4wyyjUn%2Fg1kT1ybQsZMdO73D8SXzKzQiWPu93ribaNOZEUdNEqZkH7t37m%2B7hikCgWMqTLO5IBfl1bYAGSBSW0IERqanTiIyH4EhcuS9AuY0xnXLhkXYE8wRUe36FR2NvI1tZc%2B8q%2FAoo6cg5y1EvToaKaq70ZQZ4Cx4wr%2BFjkyyPs5JtBCNr3EM%2BitfSW0VGO25DPkgk%2FCLVvUX%2FU455GsEvkRHEOPt5g2ZYRjnExkFrEBMqdo8H3VIxXH3AB0slA5zC5KdKnHKsnSsfvM7j8adanVATZlOWalSPbF5qDywZdfzSMdLH2x0zHJZdL0uaeNrgyRYUL5tt%2Ffv6u0x8CcQwzxklcGR1LjrJDHa1RvTKt2mrF%2BaCe0H%2B39rD%2BRg0hMABy78nO9Mw99qOk2O4ml2bbg7E0hrV3m%2BTH7yxQnZ1V7GBdxVujb9tlsAGOYmofQ%2F255IoUxMELlh7DjmCKXXmFKjY0pR5SXZpS%2FmhFC6pvc%2BPjFSB3x%2BlVWukfUpiBJoQJQlQHJmRqJpY4aIUzmLFZSuAVyb9EUp6YUiEV0ipnudwyvqM8CfvyHB3KXibqTlYgrQoDvrrzY8wz9v9xAY6pgG0cwjMfMhmOrBkRtCRDqVNiL9%2FObqzs8B43N7m0ULjcVkHA9P0ei6VctjVsd8n%2Frr0qInn9Wl7g9NEIco3zJvWsbzQQpjn0ozAMy%2Bpc9z1pUM7Y9jqKoKxf316B7YLy2cC5HxdgNOWn0Q8ggGY%2FhsNqzmozQcO%2B8B%2BPw0aFZNnqk3I%2Bbuk7ApIj0E0RwbxjS5b9llG6iFPS%2FeXQUKPRVaXEFl51All&X-Amz-Signature=c912f601c7eec0e8a41c12a261e6efb75fc1d32d13a9de0472701fc9687f11e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTC44QDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEYIsjo3RSxDd6ETLCGd1g1cXizkm7FqhGhFSiYzNtlOAiBnezv5xD8WArliIKGN%2BEIh8%2BFi0YM%2FQq2%2F%2BKAPNK51SSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMggP%2Fzr4mbJxHI4rhKtwDK84QhRjxmhJ%2B7%2BtqyhSUQgPb9a%2BTKQnZvtYGU17omIb4wyyjUn%2Fg1kT1ybQsZMdO73D8SXzKzQiWPu93ribaNOZEUdNEqZkH7t37m%2B7hikCgWMqTLO5IBfl1bYAGSBSW0IERqanTiIyH4EhcuS9AuY0xnXLhkXYE8wRUe36FR2NvI1tZc%2B8q%2FAoo6cg5y1EvToaKaq70ZQZ4Cx4wr%2BFjkyyPs5JtBCNr3EM%2BitfSW0VGO25DPkgk%2FCLVvUX%2FU455GsEvkRHEOPt5g2ZYRjnExkFrEBMqdo8H3VIxXH3AB0slA5zC5KdKnHKsnSsfvM7j8adanVATZlOWalSPbF5qDywZdfzSMdLH2x0zHJZdL0uaeNrgyRYUL5tt%2Ffv6u0x8CcQwzxklcGR1LjrJDHa1RvTKt2mrF%2BaCe0H%2B39rD%2BRg0hMABy78nO9Mw99qOk2O4ml2bbg7E0hrV3m%2BTH7yxQnZ1V7GBdxVujb9tlsAGOYmofQ%2F255IoUxMELlh7DjmCKXXmFKjY0pR5SXZpS%2FmhFC6pvc%2BPjFSB3x%2BlVWukfUpiBJoQJQlQHJmRqJpY4aIUzmLFZSuAVyb9EUp6YUiEV0ipnudwyvqM8CfvyHB3KXibqTlYgrQoDvrrzY8wz9v9xAY6pgG0cwjMfMhmOrBkRtCRDqVNiL9%2FObqzs8B43N7m0ULjcVkHA9P0ei6VctjVsd8n%2Frr0qInn9Wl7g9NEIco3zJvWsbzQQpjn0ozAMy%2Bpc9z1pUM7Y9jqKoKxf316B7YLy2cC5HxdgNOWn0Q8ggGY%2FhsNqzmozQcO%2B8B%2BPw0aFZNnqk3I%2Bbuk7ApIj0E0RwbxjS5b9llG6iFPS%2FeXQUKPRVaXEFl51All&X-Amz-Signature=a0fbe1f38084bb2f604e105dd94a5a51af660915ff62cb11eef7a832450eddf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
