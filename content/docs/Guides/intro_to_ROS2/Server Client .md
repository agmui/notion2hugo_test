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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRPY43X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH0C9su1Jyc3xbCHtqJCA3oWPOanYZvzu9fAIrJGcCEmAiEAqBKM6L8LfU7RhoFi9qgrp20qVRwJewgQWpB%2FY7hNzmYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOb2cdR836p3ybeHcCrcA%2FwnPJFDtE9PYkdJhttSZp%2F6jgaZsU2s6voDVKc8D6lDlczigMRhpTOt8hvF4Wghp%2FW0nbGD8n164Yf776Li4jIDKXC0rVSa3RlelQSo8g6bdds1rz9WEan%2BYTDvbk6rbaqOLFEz0VcA8XYhzcXkJJlfIrYme8I0IuV25KwiOVNSk9gaA0PCI1aT3mbA7AEvKKyt0%2FILGygdIoWpRlA8oXoCmXDyvaWrLQky5vMwo4oHj4DmimGyWbO7mZVwuHEE4hEUeVSiA90p29j%2B%2FRSlnlRGCzMLx%2Fi%2BRpAVZviwmsO1mTtVUmk5Lccqule5DIjE%2FD8uJLZfjkXQYMkNxPoWaNoOoPW0C7tAEXWsghINx%2Ba76Yl%2FdZ9BaAdmgc%2F%2BsRx%2F1BOIIuv9gTlSuHN0sM3ignGhGQVkUGs%2F%2BOwgAa9XoShS6wZzv4UwnL2g0UPkPRA4Mye1TmlmQBaXLu068F4dLXvUZ1u8cIKB8aimsLIIpnLdCKuDAigkwx%2BHK3KGUXqCKqfxhOLtUm%2BcIl40FIVhwiNrAF1dlZqEpdAFbR7v3poWtbhoS751tuSgPhoyHAIooVgH%2BL7zSJnlmZv%2BYkDCAm%2F0jfGzFBdbIostrVsIJw3SW0iQeuJWoXc%2BqyZpMP%2FX58IGOqUBbmgTQ0mfdOj3btRSYeBKy3kU3NVoG8EfmbzIoDsbur0%2BwEoPzN%2FBJLgRJMtCLoxdtYshy9uPV6Vl0APHSqOYbLSFxG8586SOnww1jHqU7dejFSGp4tVgMTRYT4dYXHF8qe4aWJ8cgbZ%2FLsrRLT091ErYyvhJFZVju55a0kWdnQK6niOH1sezixN9dmXwwLSOQyMBzoHPDAUVxBgO40AZ5v1a7nd%2F&X-Amz-Signature=b00121ce40b9de60070c0f3bb14c76cc4c10ee8e5029d28dfa37ccc3ffab887a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRPY43X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH0C9su1Jyc3xbCHtqJCA3oWPOanYZvzu9fAIrJGcCEmAiEAqBKM6L8LfU7RhoFi9qgrp20qVRwJewgQWpB%2FY7hNzmYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOb2cdR836p3ybeHcCrcA%2FwnPJFDtE9PYkdJhttSZp%2F6jgaZsU2s6voDVKc8D6lDlczigMRhpTOt8hvF4Wghp%2FW0nbGD8n164Yf776Li4jIDKXC0rVSa3RlelQSo8g6bdds1rz9WEan%2BYTDvbk6rbaqOLFEz0VcA8XYhzcXkJJlfIrYme8I0IuV25KwiOVNSk9gaA0PCI1aT3mbA7AEvKKyt0%2FILGygdIoWpRlA8oXoCmXDyvaWrLQky5vMwo4oHj4DmimGyWbO7mZVwuHEE4hEUeVSiA90p29j%2B%2FRSlnlRGCzMLx%2Fi%2BRpAVZviwmsO1mTtVUmk5Lccqule5DIjE%2FD8uJLZfjkXQYMkNxPoWaNoOoPW0C7tAEXWsghINx%2Ba76Yl%2FdZ9BaAdmgc%2F%2BsRx%2F1BOIIuv9gTlSuHN0sM3ignGhGQVkUGs%2F%2BOwgAa9XoShS6wZzv4UwnL2g0UPkPRA4Mye1TmlmQBaXLu068F4dLXvUZ1u8cIKB8aimsLIIpnLdCKuDAigkwx%2BHK3KGUXqCKqfxhOLtUm%2BcIl40FIVhwiNrAF1dlZqEpdAFbR7v3poWtbhoS751tuSgPhoyHAIooVgH%2BL7zSJnlmZv%2BYkDCAm%2F0jfGzFBdbIostrVsIJw3SW0iQeuJWoXc%2BqyZpMP%2FX58IGOqUBbmgTQ0mfdOj3btRSYeBKy3kU3NVoG8EfmbzIoDsbur0%2BwEoPzN%2FBJLgRJMtCLoxdtYshy9uPV6Vl0APHSqOYbLSFxG8586SOnww1jHqU7dejFSGp4tVgMTRYT4dYXHF8qe4aWJ8cgbZ%2FLsrRLT091ErYyvhJFZVju55a0kWdnQK6niOH1sezixN9dmXwwLSOQyMBzoHPDAUVxBgO40AZ5v1a7nd%2F&X-Amz-Signature=2a5fdffda52d276b618a9f5e63cb4c5cf42f1ab40829afe4bfeefc541d0613f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRPY43X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH0C9su1Jyc3xbCHtqJCA3oWPOanYZvzu9fAIrJGcCEmAiEAqBKM6L8LfU7RhoFi9qgrp20qVRwJewgQWpB%2FY7hNzmYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOb2cdR836p3ybeHcCrcA%2FwnPJFDtE9PYkdJhttSZp%2F6jgaZsU2s6voDVKc8D6lDlczigMRhpTOt8hvF4Wghp%2FW0nbGD8n164Yf776Li4jIDKXC0rVSa3RlelQSo8g6bdds1rz9WEan%2BYTDvbk6rbaqOLFEz0VcA8XYhzcXkJJlfIrYme8I0IuV25KwiOVNSk9gaA0PCI1aT3mbA7AEvKKyt0%2FILGygdIoWpRlA8oXoCmXDyvaWrLQky5vMwo4oHj4DmimGyWbO7mZVwuHEE4hEUeVSiA90p29j%2B%2FRSlnlRGCzMLx%2Fi%2BRpAVZviwmsO1mTtVUmk5Lccqule5DIjE%2FD8uJLZfjkXQYMkNxPoWaNoOoPW0C7tAEXWsghINx%2Ba76Yl%2FdZ9BaAdmgc%2F%2BsRx%2F1BOIIuv9gTlSuHN0sM3ignGhGQVkUGs%2F%2BOwgAa9XoShS6wZzv4UwnL2g0UPkPRA4Mye1TmlmQBaXLu068F4dLXvUZ1u8cIKB8aimsLIIpnLdCKuDAigkwx%2BHK3KGUXqCKqfxhOLtUm%2BcIl40FIVhwiNrAF1dlZqEpdAFbR7v3poWtbhoS751tuSgPhoyHAIooVgH%2BL7zSJnlmZv%2BYkDCAm%2F0jfGzFBdbIostrVsIJw3SW0iQeuJWoXc%2BqyZpMP%2FX58IGOqUBbmgTQ0mfdOj3btRSYeBKy3kU3NVoG8EfmbzIoDsbur0%2BwEoPzN%2FBJLgRJMtCLoxdtYshy9uPV6Vl0APHSqOYbLSFxG8586SOnww1jHqU7dejFSGp4tVgMTRYT4dYXHF8qe4aWJ8cgbZ%2FLsrRLT091ErYyvhJFZVju55a0kWdnQK6niOH1sezixN9dmXwwLSOQyMBzoHPDAUVxBgO40AZ5v1a7nd%2F&X-Amz-Signature=8efa087b35eedeac93a0b047d422b3ca9bc0051fe64a283fae8df0412894fa4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRPY43X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH0C9su1Jyc3xbCHtqJCA3oWPOanYZvzu9fAIrJGcCEmAiEAqBKM6L8LfU7RhoFi9qgrp20qVRwJewgQWpB%2FY7hNzmYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOb2cdR836p3ybeHcCrcA%2FwnPJFDtE9PYkdJhttSZp%2F6jgaZsU2s6voDVKc8D6lDlczigMRhpTOt8hvF4Wghp%2FW0nbGD8n164Yf776Li4jIDKXC0rVSa3RlelQSo8g6bdds1rz9WEan%2BYTDvbk6rbaqOLFEz0VcA8XYhzcXkJJlfIrYme8I0IuV25KwiOVNSk9gaA0PCI1aT3mbA7AEvKKyt0%2FILGygdIoWpRlA8oXoCmXDyvaWrLQky5vMwo4oHj4DmimGyWbO7mZVwuHEE4hEUeVSiA90p29j%2B%2FRSlnlRGCzMLx%2Fi%2BRpAVZviwmsO1mTtVUmk5Lccqule5DIjE%2FD8uJLZfjkXQYMkNxPoWaNoOoPW0C7tAEXWsghINx%2Ba76Yl%2FdZ9BaAdmgc%2F%2BsRx%2F1BOIIuv9gTlSuHN0sM3ignGhGQVkUGs%2F%2BOwgAa9XoShS6wZzv4UwnL2g0UPkPRA4Mye1TmlmQBaXLu068F4dLXvUZ1u8cIKB8aimsLIIpnLdCKuDAigkwx%2BHK3KGUXqCKqfxhOLtUm%2BcIl40FIVhwiNrAF1dlZqEpdAFbR7v3poWtbhoS751tuSgPhoyHAIooVgH%2BL7zSJnlmZv%2BYkDCAm%2F0jfGzFBdbIostrVsIJw3SW0iQeuJWoXc%2BqyZpMP%2FX58IGOqUBbmgTQ0mfdOj3btRSYeBKy3kU3NVoG8EfmbzIoDsbur0%2BwEoPzN%2FBJLgRJMtCLoxdtYshy9uPV6Vl0APHSqOYbLSFxG8586SOnww1jHqU7dejFSGp4tVgMTRYT4dYXHF8qe4aWJ8cgbZ%2FLsrRLT091ErYyvhJFZVju55a0kWdnQK6niOH1sezixN9dmXwwLSOQyMBzoHPDAUVxBgO40AZ5v1a7nd%2F&X-Amz-Signature=705f04bd561940c9c72e75c619a46ff33ff101d63544bced550fb146096eab3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRPY43X%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH0C9su1Jyc3xbCHtqJCA3oWPOanYZvzu9fAIrJGcCEmAiEAqBKM6L8LfU7RhoFi9qgrp20qVRwJewgQWpB%2FY7hNzmYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOb2cdR836p3ybeHcCrcA%2FwnPJFDtE9PYkdJhttSZp%2F6jgaZsU2s6voDVKc8D6lDlczigMRhpTOt8hvF4Wghp%2FW0nbGD8n164Yf776Li4jIDKXC0rVSa3RlelQSo8g6bdds1rz9WEan%2BYTDvbk6rbaqOLFEz0VcA8XYhzcXkJJlfIrYme8I0IuV25KwiOVNSk9gaA0PCI1aT3mbA7AEvKKyt0%2FILGygdIoWpRlA8oXoCmXDyvaWrLQky5vMwo4oHj4DmimGyWbO7mZVwuHEE4hEUeVSiA90p29j%2B%2FRSlnlRGCzMLx%2Fi%2BRpAVZviwmsO1mTtVUmk5Lccqule5DIjE%2FD8uJLZfjkXQYMkNxPoWaNoOoPW0C7tAEXWsghINx%2Ba76Yl%2FdZ9BaAdmgc%2F%2BsRx%2F1BOIIuv9gTlSuHN0sM3ignGhGQVkUGs%2F%2BOwgAa9XoShS6wZzv4UwnL2g0UPkPRA4Mye1TmlmQBaXLu068F4dLXvUZ1u8cIKB8aimsLIIpnLdCKuDAigkwx%2BHK3KGUXqCKqfxhOLtUm%2BcIl40FIVhwiNrAF1dlZqEpdAFbR7v3poWtbhoS751tuSgPhoyHAIooVgH%2BL7zSJnlmZv%2BYkDCAm%2F0jfGzFBdbIostrVsIJw3SW0iQeuJWoXc%2BqyZpMP%2FX58IGOqUBbmgTQ0mfdOj3btRSYeBKy3kU3NVoG8EfmbzIoDsbur0%2BwEoPzN%2FBJLgRJMtCLoxdtYshy9uPV6Vl0APHSqOYbLSFxG8586SOnww1jHqU7dejFSGp4tVgMTRYT4dYXHF8qe4aWJ8cgbZ%2FLsrRLT091ErYyvhJFZVju55a0kWdnQK6niOH1sezixN9dmXwwLSOQyMBzoHPDAUVxBgO40AZ5v1a7nd%2F&X-Amz-Signature=d3e8b026ffb5741651b3186785c0695ff0123690b128ad7a0ec4a649913b186c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
