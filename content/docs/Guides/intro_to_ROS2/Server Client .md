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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFIYTD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvdXlTHTQd1ulU%2BzzqfXuW6QGUCI4s1%2FjjjIBJhp9C7AiBjgh5hyiiFjhT23pcXaJhD%2F%2FomZZ8FRlSyssSR4JnPIyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM93n1PzGC8quZFd1DKtwDKTYmP%2F4oMQY%2BrKzgCJUjeR7orWq9qhRPqEdARk00sQYoBSCbAFWhUniyLjRh3lJq9WXLjcGgKe3g9WkHqYfP0mF0EV4scs%2BEefiFdzyAOyakSQktBc%2BXo13U4CDkUS1h2rVek04SqaSI9j%2Fz1%2FwyONkpAvoJJcney%2BCojbnpw35E7kkoTKLnVwhu9vSt3fxBcLxXqqC%2Fk22cZ5D4G%2BfIvmFUCoLf8c6Mr73KXJfctng4IyGcDOgGmqFUdXN721VH6cLdBcGE0FdtXDpnwJ%2BW9b5IH%2BngWNKu6eOApa0vZbp75ffdjnYYNt%2FrWMPXRry2s5pSYbqjmHKylxocPaoHWZkLZbwBTVRHYyMV%2BbNgl2rg09IP%2FDClWeHy7FdFpGtWQUF34kglEHuu2mUoPblFGXi3qcuSPd6qWCK%2BJg8dTR5pIttB2O0ead59MVZ8hJznf9k6seYUGXYQrTpSfAq3wQtOSplvO8HU8rZ%2BscNk93eeUQDej%2Fug6Bv6Xqd8mlj0JM6zM2hvl2cIppePcewnI1IVVeMxsHYErmhX0Ar2iJbRXrOIc9ZOAl2nNyE%2BCAoMghqW9EyPvAC2AG7SxVqzu%2B03rJDU916PFSFkkkkFHlUNUn0s3c0olZRA7rMw7%2FfVwwY6pgEPYwtPpFlYAATrcXdETe6dTXd26XnoVd1Y7JJdX87rAZn8%2BBaO%2FDMmhZkdu3ARasPZMJ4USZ2ZKs7Uej8VUm82Tgj6HUOV9%2BJnTMj9LVwzX4jDxMAzp29GTteVGtih0ZUoA6G7%2BRhS5zzMvVnHTjubiFhPDRpOqpWjJE2HUKysIqYWYMhHPNZEvotQaLglX6W9tUA720iTjBGtMfWZS3r1z0c9Li3C&X-Amz-Signature=e1fe0f556d56a37fb2316abec30a9f631929cf6d9ac06602801abfac5378e2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFIYTD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvdXlTHTQd1ulU%2BzzqfXuW6QGUCI4s1%2FjjjIBJhp9C7AiBjgh5hyiiFjhT23pcXaJhD%2F%2FomZZ8FRlSyssSR4JnPIyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM93n1PzGC8quZFd1DKtwDKTYmP%2F4oMQY%2BrKzgCJUjeR7orWq9qhRPqEdARk00sQYoBSCbAFWhUniyLjRh3lJq9WXLjcGgKe3g9WkHqYfP0mF0EV4scs%2BEefiFdzyAOyakSQktBc%2BXo13U4CDkUS1h2rVek04SqaSI9j%2Fz1%2FwyONkpAvoJJcney%2BCojbnpw35E7kkoTKLnVwhu9vSt3fxBcLxXqqC%2Fk22cZ5D4G%2BfIvmFUCoLf8c6Mr73KXJfctng4IyGcDOgGmqFUdXN721VH6cLdBcGE0FdtXDpnwJ%2BW9b5IH%2BngWNKu6eOApa0vZbp75ffdjnYYNt%2FrWMPXRry2s5pSYbqjmHKylxocPaoHWZkLZbwBTVRHYyMV%2BbNgl2rg09IP%2FDClWeHy7FdFpGtWQUF34kglEHuu2mUoPblFGXi3qcuSPd6qWCK%2BJg8dTR5pIttB2O0ead59MVZ8hJznf9k6seYUGXYQrTpSfAq3wQtOSplvO8HU8rZ%2BscNk93eeUQDej%2Fug6Bv6Xqd8mlj0JM6zM2hvl2cIppePcewnI1IVVeMxsHYErmhX0Ar2iJbRXrOIc9ZOAl2nNyE%2BCAoMghqW9EyPvAC2AG7SxVqzu%2B03rJDU916PFSFkkkkFHlUNUn0s3c0olZRA7rMw7%2FfVwwY6pgEPYwtPpFlYAATrcXdETe6dTXd26XnoVd1Y7JJdX87rAZn8%2BBaO%2FDMmhZkdu3ARasPZMJ4USZ2ZKs7Uej8VUm82Tgj6HUOV9%2BJnTMj9LVwzX4jDxMAzp29GTteVGtih0ZUoA6G7%2BRhS5zzMvVnHTjubiFhPDRpOqpWjJE2HUKysIqYWYMhHPNZEvotQaLglX6W9tUA720iTjBGtMfWZS3r1z0c9Li3C&X-Amz-Signature=84980b08510db86955a77a4f6019303c7ad6bfa7f56104797da073e7df66c596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFIYTD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvdXlTHTQd1ulU%2BzzqfXuW6QGUCI4s1%2FjjjIBJhp9C7AiBjgh5hyiiFjhT23pcXaJhD%2F%2FomZZ8FRlSyssSR4JnPIyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM93n1PzGC8quZFd1DKtwDKTYmP%2F4oMQY%2BrKzgCJUjeR7orWq9qhRPqEdARk00sQYoBSCbAFWhUniyLjRh3lJq9WXLjcGgKe3g9WkHqYfP0mF0EV4scs%2BEefiFdzyAOyakSQktBc%2BXo13U4CDkUS1h2rVek04SqaSI9j%2Fz1%2FwyONkpAvoJJcney%2BCojbnpw35E7kkoTKLnVwhu9vSt3fxBcLxXqqC%2Fk22cZ5D4G%2BfIvmFUCoLf8c6Mr73KXJfctng4IyGcDOgGmqFUdXN721VH6cLdBcGE0FdtXDpnwJ%2BW9b5IH%2BngWNKu6eOApa0vZbp75ffdjnYYNt%2FrWMPXRry2s5pSYbqjmHKylxocPaoHWZkLZbwBTVRHYyMV%2BbNgl2rg09IP%2FDClWeHy7FdFpGtWQUF34kglEHuu2mUoPblFGXi3qcuSPd6qWCK%2BJg8dTR5pIttB2O0ead59MVZ8hJznf9k6seYUGXYQrTpSfAq3wQtOSplvO8HU8rZ%2BscNk93eeUQDej%2Fug6Bv6Xqd8mlj0JM6zM2hvl2cIppePcewnI1IVVeMxsHYErmhX0Ar2iJbRXrOIc9ZOAl2nNyE%2BCAoMghqW9EyPvAC2AG7SxVqzu%2B03rJDU916PFSFkkkkFHlUNUn0s3c0olZRA7rMw7%2FfVwwY6pgEPYwtPpFlYAATrcXdETe6dTXd26XnoVd1Y7JJdX87rAZn8%2BBaO%2FDMmhZkdu3ARasPZMJ4USZ2ZKs7Uej8VUm82Tgj6HUOV9%2BJnTMj9LVwzX4jDxMAzp29GTteVGtih0ZUoA6G7%2BRhS5zzMvVnHTjubiFhPDRpOqpWjJE2HUKysIqYWYMhHPNZEvotQaLglX6W9tUA720iTjBGtMfWZS3r1z0c9Li3C&X-Amz-Signature=e907cfdbf3ddc45740ff926bdfe66bafc7941ebb26fa29776cbfb1fdf807fe57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFIYTD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvdXlTHTQd1ulU%2BzzqfXuW6QGUCI4s1%2FjjjIBJhp9C7AiBjgh5hyiiFjhT23pcXaJhD%2F%2FomZZ8FRlSyssSR4JnPIyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM93n1PzGC8quZFd1DKtwDKTYmP%2F4oMQY%2BrKzgCJUjeR7orWq9qhRPqEdARk00sQYoBSCbAFWhUniyLjRh3lJq9WXLjcGgKe3g9WkHqYfP0mF0EV4scs%2BEefiFdzyAOyakSQktBc%2BXo13U4CDkUS1h2rVek04SqaSI9j%2Fz1%2FwyONkpAvoJJcney%2BCojbnpw35E7kkoTKLnVwhu9vSt3fxBcLxXqqC%2Fk22cZ5D4G%2BfIvmFUCoLf8c6Mr73KXJfctng4IyGcDOgGmqFUdXN721VH6cLdBcGE0FdtXDpnwJ%2BW9b5IH%2BngWNKu6eOApa0vZbp75ffdjnYYNt%2FrWMPXRry2s5pSYbqjmHKylxocPaoHWZkLZbwBTVRHYyMV%2BbNgl2rg09IP%2FDClWeHy7FdFpGtWQUF34kglEHuu2mUoPblFGXi3qcuSPd6qWCK%2BJg8dTR5pIttB2O0ead59MVZ8hJznf9k6seYUGXYQrTpSfAq3wQtOSplvO8HU8rZ%2BscNk93eeUQDej%2Fug6Bv6Xqd8mlj0JM6zM2hvl2cIppePcewnI1IVVeMxsHYErmhX0Ar2iJbRXrOIc9ZOAl2nNyE%2BCAoMghqW9EyPvAC2AG7SxVqzu%2B03rJDU916PFSFkkkkFHlUNUn0s3c0olZRA7rMw7%2FfVwwY6pgEPYwtPpFlYAATrcXdETe6dTXd26XnoVd1Y7JJdX87rAZn8%2BBaO%2FDMmhZkdu3ARasPZMJ4USZ2ZKs7Uej8VUm82Tgj6HUOV9%2BJnTMj9LVwzX4jDxMAzp29GTteVGtih0ZUoA6G7%2BRhS5zzMvVnHTjubiFhPDRpOqpWjJE2HUKysIqYWYMhHPNZEvotQaLglX6W9tUA720iTjBGtMfWZS3r1z0c9Li3C&X-Amz-Signature=167fe871fe96d72a8eb02e4aface4788301c754334f089dad7dead45d66d2f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFIYTD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvdXlTHTQd1ulU%2BzzqfXuW6QGUCI4s1%2FjjjIBJhp9C7AiBjgh5hyiiFjhT23pcXaJhD%2F%2FomZZ8FRlSyssSR4JnPIyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM93n1PzGC8quZFd1DKtwDKTYmP%2F4oMQY%2BrKzgCJUjeR7orWq9qhRPqEdARk00sQYoBSCbAFWhUniyLjRh3lJq9WXLjcGgKe3g9WkHqYfP0mF0EV4scs%2BEefiFdzyAOyakSQktBc%2BXo13U4CDkUS1h2rVek04SqaSI9j%2Fz1%2FwyONkpAvoJJcney%2BCojbnpw35E7kkoTKLnVwhu9vSt3fxBcLxXqqC%2Fk22cZ5D4G%2BfIvmFUCoLf8c6Mr73KXJfctng4IyGcDOgGmqFUdXN721VH6cLdBcGE0FdtXDpnwJ%2BW9b5IH%2BngWNKu6eOApa0vZbp75ffdjnYYNt%2FrWMPXRry2s5pSYbqjmHKylxocPaoHWZkLZbwBTVRHYyMV%2BbNgl2rg09IP%2FDClWeHy7FdFpGtWQUF34kglEHuu2mUoPblFGXi3qcuSPd6qWCK%2BJg8dTR5pIttB2O0ead59MVZ8hJznf9k6seYUGXYQrTpSfAq3wQtOSplvO8HU8rZ%2BscNk93eeUQDej%2Fug6Bv6Xqd8mlj0JM6zM2hvl2cIppePcewnI1IVVeMxsHYErmhX0Ar2iJbRXrOIc9ZOAl2nNyE%2BCAoMghqW9EyPvAC2AG7SxVqzu%2B03rJDU916PFSFkkkkFHlUNUn0s3c0olZRA7rMw7%2FfVwwY6pgEPYwtPpFlYAATrcXdETe6dTXd26XnoVd1Y7JJdX87rAZn8%2BBaO%2FDMmhZkdu3ARasPZMJ4USZ2ZKs7Uej8VUm82Tgj6HUOV9%2BJnTMj9LVwzX4jDxMAzp29GTteVGtih0ZUoA6G7%2BRhS5zzMvVnHTjubiFhPDRpOqpWjJE2HUKysIqYWYMhHPNZEvotQaLglX6W9tUA720iTjBGtMfWZS3r1z0c9Li3C&X-Amz-Signature=891ca17d4119c3a7e15a8da53272018c5bbfbaf2d3ddd76a2cd6d740c074b124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
