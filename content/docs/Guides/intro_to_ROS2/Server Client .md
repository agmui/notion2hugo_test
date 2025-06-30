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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QN56SAR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9z5NVK6%2Fg%2BvfQ19mHoJS58IGGDrGyJqQuTwOKBX5ORAiEAgJM7gVp0Yktw680HtafnsxmYOMDtU8nOTBTNOrG2MI4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgBR%2B9NsPfBJN4HcSrcA%2BbeAu8KsC%2FNHq%2Fe8sKIdBcUGp4uHfjaceTzJa7I7YgmGIvOXXRRluQaxRCXmfH6QKHm6hA40v6xTLQbZPwdEdmS4RifGamwx6B98pMcB47TBnpHuf0Vqhr8h8cWsxDW60yufgD7sEnJBBBtx%2Fl0ferYKF63RBf8QJtjRnUU5l7QqgiVuPGb0QdTo7xnmbKyDxogkU1pqZLWZ7METfWnPCtFsh%2FEBUraLkLTSmiyepPokwtnS85CxoGjLCQ3rD1v3pUIAjEbYequ5cI8qQiBBtsdH%2BY0hxoF4r2dHoVWEjyK4ANi4k1v2tFMySRT3MHs5jEpjwgMh%2BpY3Qcz02C%2BTjANH3YN86VihKSsfr6QVtlZ3GhGgRDcokmtc%2FtD7FHtEv4fESjoV4Y%2FtGTQi4M6BrLUiMZ%2BzAttUKVL5xtuqOCgmYqtVjghc8kiiToRuRsFpo3J1cA2D35Q0NZaFMYpdUqdrMOm3LQLQWIP8kRFlAftQdAqsVefxWsokEXrMRMFVA4TJrczZBrGgN0TLvA%2BaTnEzDTvKn6o5SU6cFhwuiIxKS4BZgAAD%2BZrMgMxE7egnpxwFXFPKks7amqZbtSMbRQ90DX1tZxPXzRuQFRrVaqXkkbf0r5HPpMUnd%2BhMNeji8MGOqUBocIW6ZkihvyfNXZBcuaCJWadRTKU6u6s76NLjcA1UU59UpBYd%2Bg8At3qi1JNAgdsYLsrSVZIeDBz8Yi7qb1F1xMUfRuseHROaWMeITRN%2FHsvMZWyoGuBvUc113vUZIKJw3rpRd2huUhzaw0ArVKWyR3xD%2BvY6gLKIB1VH1NUXJHNQWjVEkBOJXfycFo0bziBlVlXWiT6PlNKDd3b%2FXGf8kczBDpb&X-Amz-Signature=3d47e0e358508fc0eb34da30afb8996143ef081751e0ffd5a9226e56a59be1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QN56SAR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9z5NVK6%2Fg%2BvfQ19mHoJS58IGGDrGyJqQuTwOKBX5ORAiEAgJM7gVp0Yktw680HtafnsxmYOMDtU8nOTBTNOrG2MI4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgBR%2B9NsPfBJN4HcSrcA%2BbeAu8KsC%2FNHq%2Fe8sKIdBcUGp4uHfjaceTzJa7I7YgmGIvOXXRRluQaxRCXmfH6QKHm6hA40v6xTLQbZPwdEdmS4RifGamwx6B98pMcB47TBnpHuf0Vqhr8h8cWsxDW60yufgD7sEnJBBBtx%2Fl0ferYKF63RBf8QJtjRnUU5l7QqgiVuPGb0QdTo7xnmbKyDxogkU1pqZLWZ7METfWnPCtFsh%2FEBUraLkLTSmiyepPokwtnS85CxoGjLCQ3rD1v3pUIAjEbYequ5cI8qQiBBtsdH%2BY0hxoF4r2dHoVWEjyK4ANi4k1v2tFMySRT3MHs5jEpjwgMh%2BpY3Qcz02C%2BTjANH3YN86VihKSsfr6QVtlZ3GhGgRDcokmtc%2FtD7FHtEv4fESjoV4Y%2FtGTQi4M6BrLUiMZ%2BzAttUKVL5xtuqOCgmYqtVjghc8kiiToRuRsFpo3J1cA2D35Q0NZaFMYpdUqdrMOm3LQLQWIP8kRFlAftQdAqsVefxWsokEXrMRMFVA4TJrczZBrGgN0TLvA%2BaTnEzDTvKn6o5SU6cFhwuiIxKS4BZgAAD%2BZrMgMxE7egnpxwFXFPKks7amqZbtSMbRQ90DX1tZxPXzRuQFRrVaqXkkbf0r5HPpMUnd%2BhMNeji8MGOqUBocIW6ZkihvyfNXZBcuaCJWadRTKU6u6s76NLjcA1UU59UpBYd%2Bg8At3qi1JNAgdsYLsrSVZIeDBz8Yi7qb1F1xMUfRuseHROaWMeITRN%2FHsvMZWyoGuBvUc113vUZIKJw3rpRd2huUhzaw0ArVKWyR3xD%2BvY6gLKIB1VH1NUXJHNQWjVEkBOJXfycFo0bziBlVlXWiT6PlNKDd3b%2FXGf8kczBDpb&X-Amz-Signature=92da3a0baf96d7ef9b9dff40fbfe01751d9b7a03b4aa535e7c9b080619b8f586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QN56SAR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9z5NVK6%2Fg%2BvfQ19mHoJS58IGGDrGyJqQuTwOKBX5ORAiEAgJM7gVp0Yktw680HtafnsxmYOMDtU8nOTBTNOrG2MI4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgBR%2B9NsPfBJN4HcSrcA%2BbeAu8KsC%2FNHq%2Fe8sKIdBcUGp4uHfjaceTzJa7I7YgmGIvOXXRRluQaxRCXmfH6QKHm6hA40v6xTLQbZPwdEdmS4RifGamwx6B98pMcB47TBnpHuf0Vqhr8h8cWsxDW60yufgD7sEnJBBBtx%2Fl0ferYKF63RBf8QJtjRnUU5l7QqgiVuPGb0QdTo7xnmbKyDxogkU1pqZLWZ7METfWnPCtFsh%2FEBUraLkLTSmiyepPokwtnS85CxoGjLCQ3rD1v3pUIAjEbYequ5cI8qQiBBtsdH%2BY0hxoF4r2dHoVWEjyK4ANi4k1v2tFMySRT3MHs5jEpjwgMh%2BpY3Qcz02C%2BTjANH3YN86VihKSsfr6QVtlZ3GhGgRDcokmtc%2FtD7FHtEv4fESjoV4Y%2FtGTQi4M6BrLUiMZ%2BzAttUKVL5xtuqOCgmYqtVjghc8kiiToRuRsFpo3J1cA2D35Q0NZaFMYpdUqdrMOm3LQLQWIP8kRFlAftQdAqsVefxWsokEXrMRMFVA4TJrczZBrGgN0TLvA%2BaTnEzDTvKn6o5SU6cFhwuiIxKS4BZgAAD%2BZrMgMxE7egnpxwFXFPKks7amqZbtSMbRQ90DX1tZxPXzRuQFRrVaqXkkbf0r5HPpMUnd%2BhMNeji8MGOqUBocIW6ZkihvyfNXZBcuaCJWadRTKU6u6s76NLjcA1UU59UpBYd%2Bg8At3qi1JNAgdsYLsrSVZIeDBz8Yi7qb1F1xMUfRuseHROaWMeITRN%2FHsvMZWyoGuBvUc113vUZIKJw3rpRd2huUhzaw0ArVKWyR3xD%2BvY6gLKIB1VH1NUXJHNQWjVEkBOJXfycFo0bziBlVlXWiT6PlNKDd3b%2FXGf8kczBDpb&X-Amz-Signature=943366e4d06730a51bf8a0e15edeeef38614509bba383618fa036c06e32aafe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QN56SAR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9z5NVK6%2Fg%2BvfQ19mHoJS58IGGDrGyJqQuTwOKBX5ORAiEAgJM7gVp0Yktw680HtafnsxmYOMDtU8nOTBTNOrG2MI4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgBR%2B9NsPfBJN4HcSrcA%2BbeAu8KsC%2FNHq%2Fe8sKIdBcUGp4uHfjaceTzJa7I7YgmGIvOXXRRluQaxRCXmfH6QKHm6hA40v6xTLQbZPwdEdmS4RifGamwx6B98pMcB47TBnpHuf0Vqhr8h8cWsxDW60yufgD7sEnJBBBtx%2Fl0ferYKF63RBf8QJtjRnUU5l7QqgiVuPGb0QdTo7xnmbKyDxogkU1pqZLWZ7METfWnPCtFsh%2FEBUraLkLTSmiyepPokwtnS85CxoGjLCQ3rD1v3pUIAjEbYequ5cI8qQiBBtsdH%2BY0hxoF4r2dHoVWEjyK4ANi4k1v2tFMySRT3MHs5jEpjwgMh%2BpY3Qcz02C%2BTjANH3YN86VihKSsfr6QVtlZ3GhGgRDcokmtc%2FtD7FHtEv4fESjoV4Y%2FtGTQi4M6BrLUiMZ%2BzAttUKVL5xtuqOCgmYqtVjghc8kiiToRuRsFpo3J1cA2D35Q0NZaFMYpdUqdrMOm3LQLQWIP8kRFlAftQdAqsVefxWsokEXrMRMFVA4TJrczZBrGgN0TLvA%2BaTnEzDTvKn6o5SU6cFhwuiIxKS4BZgAAD%2BZrMgMxE7egnpxwFXFPKks7amqZbtSMbRQ90DX1tZxPXzRuQFRrVaqXkkbf0r5HPpMUnd%2BhMNeji8MGOqUBocIW6ZkihvyfNXZBcuaCJWadRTKU6u6s76NLjcA1UU59UpBYd%2Bg8At3qi1JNAgdsYLsrSVZIeDBz8Yi7qb1F1xMUfRuseHROaWMeITRN%2FHsvMZWyoGuBvUc113vUZIKJw3rpRd2huUhzaw0ArVKWyR3xD%2BvY6gLKIB1VH1NUXJHNQWjVEkBOJXfycFo0bziBlVlXWiT6PlNKDd3b%2FXGf8kczBDpb&X-Amz-Signature=43ac5d9dc37b0d66bc2e906c45c21445825408bb64a0d574d806f441e5a4c511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QN56SAR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9z5NVK6%2Fg%2BvfQ19mHoJS58IGGDrGyJqQuTwOKBX5ORAiEAgJM7gVp0Yktw680HtafnsxmYOMDtU8nOTBTNOrG2MI4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgBR%2B9NsPfBJN4HcSrcA%2BbeAu8KsC%2FNHq%2Fe8sKIdBcUGp4uHfjaceTzJa7I7YgmGIvOXXRRluQaxRCXmfH6QKHm6hA40v6xTLQbZPwdEdmS4RifGamwx6B98pMcB47TBnpHuf0Vqhr8h8cWsxDW60yufgD7sEnJBBBtx%2Fl0ferYKF63RBf8QJtjRnUU5l7QqgiVuPGb0QdTo7xnmbKyDxogkU1pqZLWZ7METfWnPCtFsh%2FEBUraLkLTSmiyepPokwtnS85CxoGjLCQ3rD1v3pUIAjEbYequ5cI8qQiBBtsdH%2BY0hxoF4r2dHoVWEjyK4ANi4k1v2tFMySRT3MHs5jEpjwgMh%2BpY3Qcz02C%2BTjANH3YN86VihKSsfr6QVtlZ3GhGgRDcokmtc%2FtD7FHtEv4fESjoV4Y%2FtGTQi4M6BrLUiMZ%2BzAttUKVL5xtuqOCgmYqtVjghc8kiiToRuRsFpo3J1cA2D35Q0NZaFMYpdUqdrMOm3LQLQWIP8kRFlAftQdAqsVefxWsokEXrMRMFVA4TJrczZBrGgN0TLvA%2BaTnEzDTvKn6o5SU6cFhwuiIxKS4BZgAAD%2BZrMgMxE7egnpxwFXFPKks7amqZbtSMbRQ90DX1tZxPXzRuQFRrVaqXkkbf0r5HPpMUnd%2BhMNeji8MGOqUBocIW6ZkihvyfNXZBcuaCJWadRTKU6u6s76NLjcA1UU59UpBYd%2Bg8At3qi1JNAgdsYLsrSVZIeDBz8Yi7qb1F1xMUfRuseHROaWMeITRN%2FHsvMZWyoGuBvUc113vUZIKJw3rpRd2huUhzaw0ArVKWyR3xD%2BvY6gLKIB1VH1NUXJHNQWjVEkBOJXfycFo0bziBlVlXWiT6PlNKDd3b%2FXGf8kczBDpb&X-Amz-Signature=3613367af07ea804c120aa402a5b336aac14eddab8cddeecf363599efa32f666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
