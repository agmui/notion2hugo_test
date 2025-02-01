---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVB4LWS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGopDDEJ0WrHwEfYsFEOMksVg2iBd8rUmR6IgyAHCkQNAiEA7pwzMWCM8NrEqfQKD%2BzGlGoCdPKYKESKbLTSDItqsv0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSR%2FLSaPQxnc%2BcKSrcA7PGLCvE1johh2N8DLVgYBnsPM73jEN7Jfb9U4SnvQH6tMqs6EjvsN9lYw0t8DVZcbSpkrKBUkIxd%2BsoN4EPv5YhZONeoM%2FSDiZVKgBu2mhdjTX%2FnxleKft1%2B%2BuwL%2F9lHUT0BtHeJtaSL8qZLJiMcEcWkGmA9V2Dg3M1y%2B70nIQ%2BQoPPeKCV%2FmFATEd096ohHW9XZernUe5MbO4aHGxUAWtNsf%2BTIIEnz8vUsRP7UnUd2kwLgFfTqt%2FL4BmhBmWDjaiDccqgsD0v2u0wZIa2xg460OBbTl6YT2DXd8OHbTmT7KiPF8ue3pQ6z2G1L4%2BoYZB1vDq3P2oKnXr%2BYRH9N8m%2Btfh3mi9J%2FROYdP8AZ0pZNf2zKwWGRVJn045RXaKS%2B0bKEu%2FHVDqDXjiAA5RddoG45pDD2VZml80AEdnD%2F7bCM02lEdeJ82Ono0pE9z%2BUkFs4H53cw5YjXYT9Tzl3xB1wgtNScg700bdeDZdBPCtglHGzOhDA1ox%2B7QEMwnQ7ZIBIPaWJU%2Bj62UA9yjm3GOrT05miZt6GbyD9UDUB%2B7FciXAHRFUv7QGnniDge6%2FcjYg3KPXel3vbl256oqJCbqkDlsj8nJHmSTGu5kbd6nmt1lQDQtJ9hSuOUA7UMI%2BV%2BrwGOqUBh%2BAOEzY%2Frl1mzjeZ10sVGDj6rY4sIf%2ByLgtGjY01tkVODw1gARby5rZ6lxmYkY9DZkjCboxxT%2B1yhgH90xL3gpeuibHGWXmucuNoa2Ul2V9GvsImdSzb3puzzrcB2DuuTRgH7AmMbSZhrBBikJEnEj9czsmVUyXTB0Q4%2B9J1WMJKeKtTa%2FefUITccl2nFXkuZtlJ4YfzgtjHd7iQIGCSJuRHOyla&X-Amz-Signature=1e467ab190bc13f1be40f685335ee2fabce76186b5e86fe9d9647b674bd4e34a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVB4LWS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGopDDEJ0WrHwEfYsFEOMksVg2iBd8rUmR6IgyAHCkQNAiEA7pwzMWCM8NrEqfQKD%2BzGlGoCdPKYKESKbLTSDItqsv0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSR%2FLSaPQxnc%2BcKSrcA7PGLCvE1johh2N8DLVgYBnsPM73jEN7Jfb9U4SnvQH6tMqs6EjvsN9lYw0t8DVZcbSpkrKBUkIxd%2BsoN4EPv5YhZONeoM%2FSDiZVKgBu2mhdjTX%2FnxleKft1%2B%2BuwL%2F9lHUT0BtHeJtaSL8qZLJiMcEcWkGmA9V2Dg3M1y%2B70nIQ%2BQoPPeKCV%2FmFATEd096ohHW9XZernUe5MbO4aHGxUAWtNsf%2BTIIEnz8vUsRP7UnUd2kwLgFfTqt%2FL4BmhBmWDjaiDccqgsD0v2u0wZIa2xg460OBbTl6YT2DXd8OHbTmT7KiPF8ue3pQ6z2G1L4%2BoYZB1vDq3P2oKnXr%2BYRH9N8m%2Btfh3mi9J%2FROYdP8AZ0pZNf2zKwWGRVJn045RXaKS%2B0bKEu%2FHVDqDXjiAA5RddoG45pDD2VZml80AEdnD%2F7bCM02lEdeJ82Ono0pE9z%2BUkFs4H53cw5YjXYT9Tzl3xB1wgtNScg700bdeDZdBPCtglHGzOhDA1ox%2B7QEMwnQ7ZIBIPaWJU%2Bj62UA9yjm3GOrT05miZt6GbyD9UDUB%2B7FciXAHRFUv7QGnniDge6%2FcjYg3KPXel3vbl256oqJCbqkDlsj8nJHmSTGu5kbd6nmt1lQDQtJ9hSuOUA7UMI%2BV%2BrwGOqUBh%2BAOEzY%2Frl1mzjeZ10sVGDj6rY4sIf%2ByLgtGjY01tkVODw1gARby5rZ6lxmYkY9DZkjCboxxT%2B1yhgH90xL3gpeuibHGWXmucuNoa2Ul2V9GvsImdSzb3puzzrcB2DuuTRgH7AmMbSZhrBBikJEnEj9czsmVUyXTB0Q4%2B9J1WMJKeKtTa%2FefUITccl2nFXkuZtlJ4YfzgtjHd7iQIGCSJuRHOyla&X-Amz-Signature=81537a3e2f780efb4e8a57dfd6e98510ad51ed165a4ebb5c55ac50219ca78dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVB4LWS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGopDDEJ0WrHwEfYsFEOMksVg2iBd8rUmR6IgyAHCkQNAiEA7pwzMWCM8NrEqfQKD%2BzGlGoCdPKYKESKbLTSDItqsv0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSR%2FLSaPQxnc%2BcKSrcA7PGLCvE1johh2N8DLVgYBnsPM73jEN7Jfb9U4SnvQH6tMqs6EjvsN9lYw0t8DVZcbSpkrKBUkIxd%2BsoN4EPv5YhZONeoM%2FSDiZVKgBu2mhdjTX%2FnxleKft1%2B%2BuwL%2F9lHUT0BtHeJtaSL8qZLJiMcEcWkGmA9V2Dg3M1y%2B70nIQ%2BQoPPeKCV%2FmFATEd096ohHW9XZernUe5MbO4aHGxUAWtNsf%2BTIIEnz8vUsRP7UnUd2kwLgFfTqt%2FL4BmhBmWDjaiDccqgsD0v2u0wZIa2xg460OBbTl6YT2DXd8OHbTmT7KiPF8ue3pQ6z2G1L4%2BoYZB1vDq3P2oKnXr%2BYRH9N8m%2Btfh3mi9J%2FROYdP8AZ0pZNf2zKwWGRVJn045RXaKS%2B0bKEu%2FHVDqDXjiAA5RddoG45pDD2VZml80AEdnD%2F7bCM02lEdeJ82Ono0pE9z%2BUkFs4H53cw5YjXYT9Tzl3xB1wgtNScg700bdeDZdBPCtglHGzOhDA1ox%2B7QEMwnQ7ZIBIPaWJU%2Bj62UA9yjm3GOrT05miZt6GbyD9UDUB%2B7FciXAHRFUv7QGnniDge6%2FcjYg3KPXel3vbl256oqJCbqkDlsj8nJHmSTGu5kbd6nmt1lQDQtJ9hSuOUA7UMI%2BV%2BrwGOqUBh%2BAOEzY%2Frl1mzjeZ10sVGDj6rY4sIf%2ByLgtGjY01tkVODw1gARby5rZ6lxmYkY9DZkjCboxxT%2B1yhgH90xL3gpeuibHGWXmucuNoa2Ul2V9GvsImdSzb3puzzrcB2DuuTRgH7AmMbSZhrBBikJEnEj9czsmVUyXTB0Q4%2B9J1WMJKeKtTa%2FefUITccl2nFXkuZtlJ4YfzgtjHd7iQIGCSJuRHOyla&X-Amz-Signature=db663a16cbec949cd0151113a585d023532cfb9634a4a20c6257c8c4ea1ca150&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVB4LWS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGopDDEJ0WrHwEfYsFEOMksVg2iBd8rUmR6IgyAHCkQNAiEA7pwzMWCM8NrEqfQKD%2BzGlGoCdPKYKESKbLTSDItqsv0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSR%2FLSaPQxnc%2BcKSrcA7PGLCvE1johh2N8DLVgYBnsPM73jEN7Jfb9U4SnvQH6tMqs6EjvsN9lYw0t8DVZcbSpkrKBUkIxd%2BsoN4EPv5YhZONeoM%2FSDiZVKgBu2mhdjTX%2FnxleKft1%2B%2BuwL%2F9lHUT0BtHeJtaSL8qZLJiMcEcWkGmA9V2Dg3M1y%2B70nIQ%2BQoPPeKCV%2FmFATEd096ohHW9XZernUe5MbO4aHGxUAWtNsf%2BTIIEnz8vUsRP7UnUd2kwLgFfTqt%2FL4BmhBmWDjaiDccqgsD0v2u0wZIa2xg460OBbTl6YT2DXd8OHbTmT7KiPF8ue3pQ6z2G1L4%2BoYZB1vDq3P2oKnXr%2BYRH9N8m%2Btfh3mi9J%2FROYdP8AZ0pZNf2zKwWGRVJn045RXaKS%2B0bKEu%2FHVDqDXjiAA5RddoG45pDD2VZml80AEdnD%2F7bCM02lEdeJ82Ono0pE9z%2BUkFs4H53cw5YjXYT9Tzl3xB1wgtNScg700bdeDZdBPCtglHGzOhDA1ox%2B7QEMwnQ7ZIBIPaWJU%2Bj62UA9yjm3GOrT05miZt6GbyD9UDUB%2B7FciXAHRFUv7QGnniDge6%2FcjYg3KPXel3vbl256oqJCbqkDlsj8nJHmSTGu5kbd6nmt1lQDQtJ9hSuOUA7UMI%2BV%2BrwGOqUBh%2BAOEzY%2Frl1mzjeZ10sVGDj6rY4sIf%2ByLgtGjY01tkVODw1gARby5rZ6lxmYkY9DZkjCboxxT%2B1yhgH90xL3gpeuibHGWXmucuNoa2Ul2V9GvsImdSzb3puzzrcB2DuuTRgH7AmMbSZhrBBikJEnEj9czsmVUyXTB0Q4%2B9J1WMJKeKtTa%2FefUITccl2nFXkuZtlJ4YfzgtjHd7iQIGCSJuRHOyla&X-Amz-Signature=499811d990a5d810d36bc0198b8c27192530871768fb81a402ec9dd58dcd34a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVB4LWS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGopDDEJ0WrHwEfYsFEOMksVg2iBd8rUmR6IgyAHCkQNAiEA7pwzMWCM8NrEqfQKD%2BzGlGoCdPKYKESKbLTSDItqsv0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSR%2FLSaPQxnc%2BcKSrcA7PGLCvE1johh2N8DLVgYBnsPM73jEN7Jfb9U4SnvQH6tMqs6EjvsN9lYw0t8DVZcbSpkrKBUkIxd%2BsoN4EPv5YhZONeoM%2FSDiZVKgBu2mhdjTX%2FnxleKft1%2B%2BuwL%2F9lHUT0BtHeJtaSL8qZLJiMcEcWkGmA9V2Dg3M1y%2B70nIQ%2BQoPPeKCV%2FmFATEd096ohHW9XZernUe5MbO4aHGxUAWtNsf%2BTIIEnz8vUsRP7UnUd2kwLgFfTqt%2FL4BmhBmWDjaiDccqgsD0v2u0wZIa2xg460OBbTl6YT2DXd8OHbTmT7KiPF8ue3pQ6z2G1L4%2BoYZB1vDq3P2oKnXr%2BYRH9N8m%2Btfh3mi9J%2FROYdP8AZ0pZNf2zKwWGRVJn045RXaKS%2B0bKEu%2FHVDqDXjiAA5RddoG45pDD2VZml80AEdnD%2F7bCM02lEdeJ82Ono0pE9z%2BUkFs4H53cw5YjXYT9Tzl3xB1wgtNScg700bdeDZdBPCtglHGzOhDA1ox%2B7QEMwnQ7ZIBIPaWJU%2Bj62UA9yjm3GOrT05miZt6GbyD9UDUB%2B7FciXAHRFUv7QGnniDge6%2FcjYg3KPXel3vbl256oqJCbqkDlsj8nJHmSTGu5kbd6nmt1lQDQtJ9hSuOUA7UMI%2BV%2BrwGOqUBh%2BAOEzY%2Frl1mzjeZ10sVGDj6rY4sIf%2ByLgtGjY01tkVODw1gARby5rZ6lxmYkY9DZkjCboxxT%2B1yhgH90xL3gpeuibHGWXmucuNoa2Ul2V9GvsImdSzb3puzzrcB2DuuTRgH7AmMbSZhrBBikJEnEj9czsmVUyXTB0Q4%2B9J1WMJKeKtTa%2FefUITccl2nFXkuZtlJ4YfzgtjHd7iQIGCSJuRHOyla&X-Amz-Signature=41d25a3efc425ed9f7c8d1bd30d70b247c9a80938b4e9f477c153d866bbd2865&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
