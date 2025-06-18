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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGC3LD6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOa9EzthKD%2BHI8CBE9AZTHGMMbbF6YIC7ru0j7llWSdwIhANMdc6jBmTdB1ahIaQz4P7Jf0SGhz2tlTljEQCuJgcLyKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMLfVzo0vqCWu5eAq3ANGEYYYnk25UX3m0J4pPVA4dxjYe6VMLiHXafdFthTI25Kfos9jwzrriehP2Qa9jEXnjx1rpihxIp447uRPvUOl31Fq1BkY3%2FnOGrPupdm3Qpd6gpOOI05EsX6VV8oC%2BMrhDusDGsdL1zZIJwO%2Fm37jzxeniFLbFD9zXClyql0CTl%2FAWG7%2FRD7fyfFcT54kKBzACBKLTkmhPzaysXocH8EGnyC29TYaVRFkazMiCcJMigto%2BM44ye%2FxmE2Xzw4i6vqbQb%2Fu56KZ26ZHBZvIBFEps9eA87KoWg6rRSD97VjVjCgvSwUhEVegQMWXLXfgdBAIojCBieXXKk33tABJ%2BfOYqPljIMRx66SjazeA1K6a878ER%2F9XLixhK6jJNsyNvMcXMs8a%2BVd6vi53hMT3FVbIQ004RJ%2F1eqEb3WpguaYwoNMWI%2BMAAAyNJbVItOHjUHm%2FSWkJNMT8JkB9KhcLC5y5Za8gz%2BMHmYI35VbPVWtPrSXQu%2Ftvh9l0xE1wzfnax54fkCM9uLNMuzdmvmh8LWj6rtmWS5ovJxOS9F7CSskayUJXjdlxE6Uot%2FNrSyf11tghQQiEeMf1CefyztC9zHZp%2BBK7DmGYroctFGWgaFIkJRTOzTRCvorBoGLnhTD6%2B8vCBjqkAYUpRUyjUjS68sP4pAar%2BF5mq24jZppgP7m3bwmdoPubdgAWfS8PYuLLP3A5GaO0bCpdV2J7QLa10EJi41kKZTYV%2FvnBTfteaEE18QnTfdlvxx1VMdjIpv0dXMu0xaWRNWnKdWGTlIpQtnL%2BC6aa%2FHslDNJCSWN2rCp%2B9uq0%2BRfbwRhAg%2BfkqDeh6WvSjP1TfHjJDEti%2FCloG2xBwlYuhB0bKwRx&X-Amz-Signature=0c2f4ca1a7d14331a8a99f22cd65a6605cbf60fabd59370e4a90cba5f9057a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGC3LD6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOa9EzthKD%2BHI8CBE9AZTHGMMbbF6YIC7ru0j7llWSdwIhANMdc6jBmTdB1ahIaQz4P7Jf0SGhz2tlTljEQCuJgcLyKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMLfVzo0vqCWu5eAq3ANGEYYYnk25UX3m0J4pPVA4dxjYe6VMLiHXafdFthTI25Kfos9jwzrriehP2Qa9jEXnjx1rpihxIp447uRPvUOl31Fq1BkY3%2FnOGrPupdm3Qpd6gpOOI05EsX6VV8oC%2BMrhDusDGsdL1zZIJwO%2Fm37jzxeniFLbFD9zXClyql0CTl%2FAWG7%2FRD7fyfFcT54kKBzACBKLTkmhPzaysXocH8EGnyC29TYaVRFkazMiCcJMigto%2BM44ye%2FxmE2Xzw4i6vqbQb%2Fu56KZ26ZHBZvIBFEps9eA87KoWg6rRSD97VjVjCgvSwUhEVegQMWXLXfgdBAIojCBieXXKk33tABJ%2BfOYqPljIMRx66SjazeA1K6a878ER%2F9XLixhK6jJNsyNvMcXMs8a%2BVd6vi53hMT3FVbIQ004RJ%2F1eqEb3WpguaYwoNMWI%2BMAAAyNJbVItOHjUHm%2FSWkJNMT8JkB9KhcLC5y5Za8gz%2BMHmYI35VbPVWtPrSXQu%2Ftvh9l0xE1wzfnax54fkCM9uLNMuzdmvmh8LWj6rtmWS5ovJxOS9F7CSskayUJXjdlxE6Uot%2FNrSyf11tghQQiEeMf1CefyztC9zHZp%2BBK7DmGYroctFGWgaFIkJRTOzTRCvorBoGLnhTD6%2B8vCBjqkAYUpRUyjUjS68sP4pAar%2BF5mq24jZppgP7m3bwmdoPubdgAWfS8PYuLLP3A5GaO0bCpdV2J7QLa10EJi41kKZTYV%2FvnBTfteaEE18QnTfdlvxx1VMdjIpv0dXMu0xaWRNWnKdWGTlIpQtnL%2BC6aa%2FHslDNJCSWN2rCp%2B9uq0%2BRfbwRhAg%2BfkqDeh6WvSjP1TfHjJDEti%2FCloG2xBwlYuhB0bKwRx&X-Amz-Signature=21256e5a67ab28a36bbac23b22f6ebe0c7af968065452eafaea1df4472aa7cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGC3LD6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOa9EzthKD%2BHI8CBE9AZTHGMMbbF6YIC7ru0j7llWSdwIhANMdc6jBmTdB1ahIaQz4P7Jf0SGhz2tlTljEQCuJgcLyKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMLfVzo0vqCWu5eAq3ANGEYYYnk25UX3m0J4pPVA4dxjYe6VMLiHXafdFthTI25Kfos9jwzrriehP2Qa9jEXnjx1rpihxIp447uRPvUOl31Fq1BkY3%2FnOGrPupdm3Qpd6gpOOI05EsX6VV8oC%2BMrhDusDGsdL1zZIJwO%2Fm37jzxeniFLbFD9zXClyql0CTl%2FAWG7%2FRD7fyfFcT54kKBzACBKLTkmhPzaysXocH8EGnyC29TYaVRFkazMiCcJMigto%2BM44ye%2FxmE2Xzw4i6vqbQb%2Fu56KZ26ZHBZvIBFEps9eA87KoWg6rRSD97VjVjCgvSwUhEVegQMWXLXfgdBAIojCBieXXKk33tABJ%2BfOYqPljIMRx66SjazeA1K6a878ER%2F9XLixhK6jJNsyNvMcXMs8a%2BVd6vi53hMT3FVbIQ004RJ%2F1eqEb3WpguaYwoNMWI%2BMAAAyNJbVItOHjUHm%2FSWkJNMT8JkB9KhcLC5y5Za8gz%2BMHmYI35VbPVWtPrSXQu%2Ftvh9l0xE1wzfnax54fkCM9uLNMuzdmvmh8LWj6rtmWS5ovJxOS9F7CSskayUJXjdlxE6Uot%2FNrSyf11tghQQiEeMf1CefyztC9zHZp%2BBK7DmGYroctFGWgaFIkJRTOzTRCvorBoGLnhTD6%2B8vCBjqkAYUpRUyjUjS68sP4pAar%2BF5mq24jZppgP7m3bwmdoPubdgAWfS8PYuLLP3A5GaO0bCpdV2J7QLa10EJi41kKZTYV%2FvnBTfteaEE18QnTfdlvxx1VMdjIpv0dXMu0xaWRNWnKdWGTlIpQtnL%2BC6aa%2FHslDNJCSWN2rCp%2B9uq0%2BRfbwRhAg%2BfkqDeh6WvSjP1TfHjJDEti%2FCloG2xBwlYuhB0bKwRx&X-Amz-Signature=00c1f1df27287ef8d8fd3d176752e35a3950b11249946a439f8bb5e086a4d918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGC3LD6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOa9EzthKD%2BHI8CBE9AZTHGMMbbF6YIC7ru0j7llWSdwIhANMdc6jBmTdB1ahIaQz4P7Jf0SGhz2tlTljEQCuJgcLyKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMLfVzo0vqCWu5eAq3ANGEYYYnk25UX3m0J4pPVA4dxjYe6VMLiHXafdFthTI25Kfos9jwzrriehP2Qa9jEXnjx1rpihxIp447uRPvUOl31Fq1BkY3%2FnOGrPupdm3Qpd6gpOOI05EsX6VV8oC%2BMrhDusDGsdL1zZIJwO%2Fm37jzxeniFLbFD9zXClyql0CTl%2FAWG7%2FRD7fyfFcT54kKBzACBKLTkmhPzaysXocH8EGnyC29TYaVRFkazMiCcJMigto%2BM44ye%2FxmE2Xzw4i6vqbQb%2Fu56KZ26ZHBZvIBFEps9eA87KoWg6rRSD97VjVjCgvSwUhEVegQMWXLXfgdBAIojCBieXXKk33tABJ%2BfOYqPljIMRx66SjazeA1K6a878ER%2F9XLixhK6jJNsyNvMcXMs8a%2BVd6vi53hMT3FVbIQ004RJ%2F1eqEb3WpguaYwoNMWI%2BMAAAyNJbVItOHjUHm%2FSWkJNMT8JkB9KhcLC5y5Za8gz%2BMHmYI35VbPVWtPrSXQu%2Ftvh9l0xE1wzfnax54fkCM9uLNMuzdmvmh8LWj6rtmWS5ovJxOS9F7CSskayUJXjdlxE6Uot%2FNrSyf11tghQQiEeMf1CefyztC9zHZp%2BBK7DmGYroctFGWgaFIkJRTOzTRCvorBoGLnhTD6%2B8vCBjqkAYUpRUyjUjS68sP4pAar%2BF5mq24jZppgP7m3bwmdoPubdgAWfS8PYuLLP3A5GaO0bCpdV2J7QLa10EJi41kKZTYV%2FvnBTfteaEE18QnTfdlvxx1VMdjIpv0dXMu0xaWRNWnKdWGTlIpQtnL%2BC6aa%2FHslDNJCSWN2rCp%2B9uq0%2BRfbwRhAg%2BfkqDeh6WvSjP1TfHjJDEti%2FCloG2xBwlYuhB0bKwRx&X-Amz-Signature=06c67996acf8aa09718ea14d3f4bc1959f879b33e419c68677883bddef0926a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGC3LD6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOa9EzthKD%2BHI8CBE9AZTHGMMbbF6YIC7ru0j7llWSdwIhANMdc6jBmTdB1ahIaQz4P7Jf0SGhz2tlTljEQCuJgcLyKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMLfVzo0vqCWu5eAq3ANGEYYYnk25UX3m0J4pPVA4dxjYe6VMLiHXafdFthTI25Kfos9jwzrriehP2Qa9jEXnjx1rpihxIp447uRPvUOl31Fq1BkY3%2FnOGrPupdm3Qpd6gpOOI05EsX6VV8oC%2BMrhDusDGsdL1zZIJwO%2Fm37jzxeniFLbFD9zXClyql0CTl%2FAWG7%2FRD7fyfFcT54kKBzACBKLTkmhPzaysXocH8EGnyC29TYaVRFkazMiCcJMigto%2BM44ye%2FxmE2Xzw4i6vqbQb%2Fu56KZ26ZHBZvIBFEps9eA87KoWg6rRSD97VjVjCgvSwUhEVegQMWXLXfgdBAIojCBieXXKk33tABJ%2BfOYqPljIMRx66SjazeA1K6a878ER%2F9XLixhK6jJNsyNvMcXMs8a%2BVd6vi53hMT3FVbIQ004RJ%2F1eqEb3WpguaYwoNMWI%2BMAAAyNJbVItOHjUHm%2FSWkJNMT8JkB9KhcLC5y5Za8gz%2BMHmYI35VbPVWtPrSXQu%2Ftvh9l0xE1wzfnax54fkCM9uLNMuzdmvmh8LWj6rtmWS5ovJxOS9F7CSskayUJXjdlxE6Uot%2FNrSyf11tghQQiEeMf1CefyztC9zHZp%2BBK7DmGYroctFGWgaFIkJRTOzTRCvorBoGLnhTD6%2B8vCBjqkAYUpRUyjUjS68sP4pAar%2BF5mq24jZppgP7m3bwmdoPubdgAWfS8PYuLLP3A5GaO0bCpdV2J7QLa10EJi41kKZTYV%2FvnBTfteaEE18QnTfdlvxx1VMdjIpv0dXMu0xaWRNWnKdWGTlIpQtnL%2BC6aa%2FHslDNJCSWN2rCp%2B9uq0%2BRfbwRhAg%2BfkqDeh6WvSjP1TfHjJDEti%2FCloG2xBwlYuhB0bKwRx&X-Amz-Signature=8cb78b461ebcb121f9e83ed76223fdef0efb701d32d945b715626fbc2b8b6821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
