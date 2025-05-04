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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WW6AGS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFqAcDD1la4T4cxLlN3Kx02io%2FndCwJr1bEnPT455u%2BUAiAoiIReW5gVKwPcZkCOlId1vQHDLV0GiehP2kGlkKX72ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM47sAIGgwqfGIL5HiKtwD90GwaqYw0QP5%2FHRa6v76%2BAPxiMFFU66LuywWYJLX04qGYtm2fiiSwN7QTQMLkloprjgCaMsZYSQLJsjpNq4kJTR4MNgZ75JlbE%2BZrLSZQPYXcMhX%2BCw9U2j1oiOnH7Grnt044BJUx0j5mA6Zxg7A0JR2jvAVwgZQp9Tja2XlGgIjQAwZOTTn%2Bz60jvkMbPGGW%2FqmLqlM8KqhfIf%2BLOGxPlq0tEkksk%2Bw0LiahXEbZZZpC0Jm5EfTq7u%2BFIuwvHaoPWg2BbZxMdgCFJMUTvr0TjosoJ0K6dLBCjVAQus9KgSXVqVrlilndVHDIJsp8XNvzhRt%2Fl9xthk0XClxhtxW5%2FNR5GDlmn%2BInx5ApG9CT3XAzLcoXt4bXXyjIMnh1zwgePqN1jMH1VB45gqDzy99JMXGygTbM7Q5JUBzVujsyRfAUI4gCk1OCn9gb2rmq%2F2zqCYkCjj%2BN2tnb7QHxDNMbClCq%2FtSmtOD7LYGkaP50IyaeE5cx%2FIxWdaNK2edIXkACfMwTbY83ultX68WzW8MOfcr0FdOsaLzw%2FPU0gJ%2Fh8riYnphXFgVBpVvShXQE68rprKtAJecTNpAjSYbTjRxzWUSB3j0AraILja5BVX7nsXBg3phdlLztuQq%2BFswqI%2FdwAY6pgE9mqCGSDYUaVm3L2o4m0pcG7lq3nHhae9nObeJIs%2BsJFUNupMYmutuVwGIdWj9cmMVVSqJ8WdK%2FjcYw%2FmLD%2FG%2FbGAS3hCaOfXgW8VDCqBFKwZvjumnRCyHmY23elGonlaNcARCV0kKMhSjs8KVhHnirnKnnAkhOrZZ91HLfAJHV%2B9WXWgpDrh2tHlNMk5IC3KITGA7aNNkSRgkCtwHQZLjI0WGRXs%2F&X-Amz-Signature=09384a3a4a2c06966f23bcf089cfb711e0c5b31df3b80233ebd02ba4174297af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WW6AGS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFqAcDD1la4T4cxLlN3Kx02io%2FndCwJr1bEnPT455u%2BUAiAoiIReW5gVKwPcZkCOlId1vQHDLV0GiehP2kGlkKX72ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM47sAIGgwqfGIL5HiKtwD90GwaqYw0QP5%2FHRa6v76%2BAPxiMFFU66LuywWYJLX04qGYtm2fiiSwN7QTQMLkloprjgCaMsZYSQLJsjpNq4kJTR4MNgZ75JlbE%2BZrLSZQPYXcMhX%2BCw9U2j1oiOnH7Grnt044BJUx0j5mA6Zxg7A0JR2jvAVwgZQp9Tja2XlGgIjQAwZOTTn%2Bz60jvkMbPGGW%2FqmLqlM8KqhfIf%2BLOGxPlq0tEkksk%2Bw0LiahXEbZZZpC0Jm5EfTq7u%2BFIuwvHaoPWg2BbZxMdgCFJMUTvr0TjosoJ0K6dLBCjVAQus9KgSXVqVrlilndVHDIJsp8XNvzhRt%2Fl9xthk0XClxhtxW5%2FNR5GDlmn%2BInx5ApG9CT3XAzLcoXt4bXXyjIMnh1zwgePqN1jMH1VB45gqDzy99JMXGygTbM7Q5JUBzVujsyRfAUI4gCk1OCn9gb2rmq%2F2zqCYkCjj%2BN2tnb7QHxDNMbClCq%2FtSmtOD7LYGkaP50IyaeE5cx%2FIxWdaNK2edIXkACfMwTbY83ultX68WzW8MOfcr0FdOsaLzw%2FPU0gJ%2Fh8riYnphXFgVBpVvShXQE68rprKtAJecTNpAjSYbTjRxzWUSB3j0AraILja5BVX7nsXBg3phdlLztuQq%2BFswqI%2FdwAY6pgE9mqCGSDYUaVm3L2o4m0pcG7lq3nHhae9nObeJIs%2BsJFUNupMYmutuVwGIdWj9cmMVVSqJ8WdK%2FjcYw%2FmLD%2FG%2FbGAS3hCaOfXgW8VDCqBFKwZvjumnRCyHmY23elGonlaNcARCV0kKMhSjs8KVhHnirnKnnAkhOrZZ91HLfAJHV%2B9WXWgpDrh2tHlNMk5IC3KITGA7aNNkSRgkCtwHQZLjI0WGRXs%2F&X-Amz-Signature=eddad1605a851f44e56b31755913d3c924f78f6d90842fbf344018ff9b848a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WW6AGS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFqAcDD1la4T4cxLlN3Kx02io%2FndCwJr1bEnPT455u%2BUAiAoiIReW5gVKwPcZkCOlId1vQHDLV0GiehP2kGlkKX72ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM47sAIGgwqfGIL5HiKtwD90GwaqYw0QP5%2FHRa6v76%2BAPxiMFFU66LuywWYJLX04qGYtm2fiiSwN7QTQMLkloprjgCaMsZYSQLJsjpNq4kJTR4MNgZ75JlbE%2BZrLSZQPYXcMhX%2BCw9U2j1oiOnH7Grnt044BJUx0j5mA6Zxg7A0JR2jvAVwgZQp9Tja2XlGgIjQAwZOTTn%2Bz60jvkMbPGGW%2FqmLqlM8KqhfIf%2BLOGxPlq0tEkksk%2Bw0LiahXEbZZZpC0Jm5EfTq7u%2BFIuwvHaoPWg2BbZxMdgCFJMUTvr0TjosoJ0K6dLBCjVAQus9KgSXVqVrlilndVHDIJsp8XNvzhRt%2Fl9xthk0XClxhtxW5%2FNR5GDlmn%2BInx5ApG9CT3XAzLcoXt4bXXyjIMnh1zwgePqN1jMH1VB45gqDzy99JMXGygTbM7Q5JUBzVujsyRfAUI4gCk1OCn9gb2rmq%2F2zqCYkCjj%2BN2tnb7QHxDNMbClCq%2FtSmtOD7LYGkaP50IyaeE5cx%2FIxWdaNK2edIXkACfMwTbY83ultX68WzW8MOfcr0FdOsaLzw%2FPU0gJ%2Fh8riYnphXFgVBpVvShXQE68rprKtAJecTNpAjSYbTjRxzWUSB3j0AraILja5BVX7nsXBg3phdlLztuQq%2BFswqI%2FdwAY6pgE9mqCGSDYUaVm3L2o4m0pcG7lq3nHhae9nObeJIs%2BsJFUNupMYmutuVwGIdWj9cmMVVSqJ8WdK%2FjcYw%2FmLD%2FG%2FbGAS3hCaOfXgW8VDCqBFKwZvjumnRCyHmY23elGonlaNcARCV0kKMhSjs8KVhHnirnKnnAkhOrZZ91HLfAJHV%2B9WXWgpDrh2tHlNMk5IC3KITGA7aNNkSRgkCtwHQZLjI0WGRXs%2F&X-Amz-Signature=e5ede3feb29b5d88387fd9ba58a8925f648fd5ccc48dd703efecfbca7e5390cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WW6AGS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFqAcDD1la4T4cxLlN3Kx02io%2FndCwJr1bEnPT455u%2BUAiAoiIReW5gVKwPcZkCOlId1vQHDLV0GiehP2kGlkKX72ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM47sAIGgwqfGIL5HiKtwD90GwaqYw0QP5%2FHRa6v76%2BAPxiMFFU66LuywWYJLX04qGYtm2fiiSwN7QTQMLkloprjgCaMsZYSQLJsjpNq4kJTR4MNgZ75JlbE%2BZrLSZQPYXcMhX%2BCw9U2j1oiOnH7Grnt044BJUx0j5mA6Zxg7A0JR2jvAVwgZQp9Tja2XlGgIjQAwZOTTn%2Bz60jvkMbPGGW%2FqmLqlM8KqhfIf%2BLOGxPlq0tEkksk%2Bw0LiahXEbZZZpC0Jm5EfTq7u%2BFIuwvHaoPWg2BbZxMdgCFJMUTvr0TjosoJ0K6dLBCjVAQus9KgSXVqVrlilndVHDIJsp8XNvzhRt%2Fl9xthk0XClxhtxW5%2FNR5GDlmn%2BInx5ApG9CT3XAzLcoXt4bXXyjIMnh1zwgePqN1jMH1VB45gqDzy99JMXGygTbM7Q5JUBzVujsyRfAUI4gCk1OCn9gb2rmq%2F2zqCYkCjj%2BN2tnb7QHxDNMbClCq%2FtSmtOD7LYGkaP50IyaeE5cx%2FIxWdaNK2edIXkACfMwTbY83ultX68WzW8MOfcr0FdOsaLzw%2FPU0gJ%2Fh8riYnphXFgVBpVvShXQE68rprKtAJecTNpAjSYbTjRxzWUSB3j0AraILja5BVX7nsXBg3phdlLztuQq%2BFswqI%2FdwAY6pgE9mqCGSDYUaVm3L2o4m0pcG7lq3nHhae9nObeJIs%2BsJFUNupMYmutuVwGIdWj9cmMVVSqJ8WdK%2FjcYw%2FmLD%2FG%2FbGAS3hCaOfXgW8VDCqBFKwZvjumnRCyHmY23elGonlaNcARCV0kKMhSjs8KVhHnirnKnnAkhOrZZ91HLfAJHV%2B9WXWgpDrh2tHlNMk5IC3KITGA7aNNkSRgkCtwHQZLjI0WGRXs%2F&X-Amz-Signature=d4edf7a58e6587525f164b0d0f5cebae29e28f688f108d94ef6c2e4a7878e53f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WW6AGS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFqAcDD1la4T4cxLlN3Kx02io%2FndCwJr1bEnPT455u%2BUAiAoiIReW5gVKwPcZkCOlId1vQHDLV0GiehP2kGlkKX72ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM47sAIGgwqfGIL5HiKtwD90GwaqYw0QP5%2FHRa6v76%2BAPxiMFFU66LuywWYJLX04qGYtm2fiiSwN7QTQMLkloprjgCaMsZYSQLJsjpNq4kJTR4MNgZ75JlbE%2BZrLSZQPYXcMhX%2BCw9U2j1oiOnH7Grnt044BJUx0j5mA6Zxg7A0JR2jvAVwgZQp9Tja2XlGgIjQAwZOTTn%2Bz60jvkMbPGGW%2FqmLqlM8KqhfIf%2BLOGxPlq0tEkksk%2Bw0LiahXEbZZZpC0Jm5EfTq7u%2BFIuwvHaoPWg2BbZxMdgCFJMUTvr0TjosoJ0K6dLBCjVAQus9KgSXVqVrlilndVHDIJsp8XNvzhRt%2Fl9xthk0XClxhtxW5%2FNR5GDlmn%2BInx5ApG9CT3XAzLcoXt4bXXyjIMnh1zwgePqN1jMH1VB45gqDzy99JMXGygTbM7Q5JUBzVujsyRfAUI4gCk1OCn9gb2rmq%2F2zqCYkCjj%2BN2tnb7QHxDNMbClCq%2FtSmtOD7LYGkaP50IyaeE5cx%2FIxWdaNK2edIXkACfMwTbY83ultX68WzW8MOfcr0FdOsaLzw%2FPU0gJ%2Fh8riYnphXFgVBpVvShXQE68rprKtAJecTNpAjSYbTjRxzWUSB3j0AraILja5BVX7nsXBg3phdlLztuQq%2BFswqI%2FdwAY6pgE9mqCGSDYUaVm3L2o4m0pcG7lq3nHhae9nObeJIs%2BsJFUNupMYmutuVwGIdWj9cmMVVSqJ8WdK%2FjcYw%2FmLD%2FG%2FbGAS3hCaOfXgW8VDCqBFKwZvjumnRCyHmY23elGonlaNcARCV0kKMhSjs8KVhHnirnKnnAkhOrZZ91HLfAJHV%2B9WXWgpDrh2tHlNMk5IC3KITGA7aNNkSRgkCtwHQZLjI0WGRXs%2F&X-Amz-Signature=6f57548802c928671fa2a7bd79805643e1acf974939b3ca8a4998c0ceb47b969&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
