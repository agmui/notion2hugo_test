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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERD6VDJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ZT0sh8aASwrfXbxeH309XyqGHjf5FzD%2BE8NcXnFKngIgEwUHpPlyU4592wGuit8lEl1OeQGRIrAYgdvAWGBBQk8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZOHMpxJi2CLwO1DircA2Ml8KNsEe5%2BLoxMtXTYQ%2BWtGleErTNB8x25njbyjztl9ZHs0z8jsd7Z96Wtq9i0bgNRQTPi7mYNXt8mu%2Bh4jA%2FBIbej2SdG9HdFOO28E8iAtUNnUAEnDoMUa5OeNPsIvh9Jy4wfphH33ujlhtUw5wxZvv9QTvCKuhZYf%2FpQoOkH9yhEKlxICb3LNQ%2BXkt7hqTkeoB15CaIkGPaQD7CHkiYm5vzxz3WvG5gKmzQYeN0Gm0fG7dZTtmNE9%2Fx49RQT0JYgNZmt5orJXGdZcZABT95IcSEHaHyhqLUpTBt6IiAvUpJKai4tTw0oUmJX77%2BLIuoRCS6nfxgbNZxNcktQKHRww9vytellHNrM1fmDDqQSIad6BngLoScf2BqhC5zEdet76iIMVNuH14R1p4IXPEy7XVKVHqliqsAIhYhx2qaN5k8rlviKN3wuig72sl3M5Dn3%2F42MB7dzOxvaPAy1Ke50cJywbEgmiAPAA%2BFgFpx58ViPJ4%2FNgpBrJ3Qtm5OMtlvo87hXhKl9HjkirkxFnWSVXHRfh%2BYoHspapkSuZUe1CSLeQtu08JOa%2BWu%2BJCpRA8gMIOB61kZPY3o31OyqGnBHONA5D0z8LKl6nAfW9gvnK9H3jRGzETkzZ3g9MOuTlMMGOqUBqn521rYC2f0uyvljaM8HDXuIU98MTzFgv8My%2BmczSYdF9swKJ0MxkfxRqRza%2FqnYAuI63pd9WwgoC1aCyviOb5xoaQxM4cwDBMxCQX9xZ7dCpeysj465MhfXIfn0AhCas6PrLVPRzhaHmyikBK17Tsk%2BEGrADIzeRfQLO415nrA2P7bVA%2FAGJbBUj07X8wdOCj7ptpCw4Xnv4QXnngWzDmOLLcaI&X-Amz-Signature=cfe85a45dd1709c2faa2185eaf4fe6610e9bbfdd0bb0c2970fee91de9fadb1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERD6VDJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ZT0sh8aASwrfXbxeH309XyqGHjf5FzD%2BE8NcXnFKngIgEwUHpPlyU4592wGuit8lEl1OeQGRIrAYgdvAWGBBQk8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZOHMpxJi2CLwO1DircA2Ml8KNsEe5%2BLoxMtXTYQ%2BWtGleErTNB8x25njbyjztl9ZHs0z8jsd7Z96Wtq9i0bgNRQTPi7mYNXt8mu%2Bh4jA%2FBIbej2SdG9HdFOO28E8iAtUNnUAEnDoMUa5OeNPsIvh9Jy4wfphH33ujlhtUw5wxZvv9QTvCKuhZYf%2FpQoOkH9yhEKlxICb3LNQ%2BXkt7hqTkeoB15CaIkGPaQD7CHkiYm5vzxz3WvG5gKmzQYeN0Gm0fG7dZTtmNE9%2Fx49RQT0JYgNZmt5orJXGdZcZABT95IcSEHaHyhqLUpTBt6IiAvUpJKai4tTw0oUmJX77%2BLIuoRCS6nfxgbNZxNcktQKHRww9vytellHNrM1fmDDqQSIad6BngLoScf2BqhC5zEdet76iIMVNuH14R1p4IXPEy7XVKVHqliqsAIhYhx2qaN5k8rlviKN3wuig72sl3M5Dn3%2F42MB7dzOxvaPAy1Ke50cJywbEgmiAPAA%2BFgFpx58ViPJ4%2FNgpBrJ3Qtm5OMtlvo87hXhKl9HjkirkxFnWSVXHRfh%2BYoHspapkSuZUe1CSLeQtu08JOa%2BWu%2BJCpRA8gMIOB61kZPY3o31OyqGnBHONA5D0z8LKl6nAfW9gvnK9H3jRGzETkzZ3g9MOuTlMMGOqUBqn521rYC2f0uyvljaM8HDXuIU98MTzFgv8My%2BmczSYdF9swKJ0MxkfxRqRza%2FqnYAuI63pd9WwgoC1aCyviOb5xoaQxM4cwDBMxCQX9xZ7dCpeysj465MhfXIfn0AhCas6PrLVPRzhaHmyikBK17Tsk%2BEGrADIzeRfQLO415nrA2P7bVA%2FAGJbBUj07X8wdOCj7ptpCw4Xnv4QXnngWzDmOLLcaI&X-Amz-Signature=37b0834258454591cdb4402b50768a41281c008827cfe69bee1f7844cef1698b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERD6VDJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ZT0sh8aASwrfXbxeH309XyqGHjf5FzD%2BE8NcXnFKngIgEwUHpPlyU4592wGuit8lEl1OeQGRIrAYgdvAWGBBQk8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZOHMpxJi2CLwO1DircA2Ml8KNsEe5%2BLoxMtXTYQ%2BWtGleErTNB8x25njbyjztl9ZHs0z8jsd7Z96Wtq9i0bgNRQTPi7mYNXt8mu%2Bh4jA%2FBIbej2SdG9HdFOO28E8iAtUNnUAEnDoMUa5OeNPsIvh9Jy4wfphH33ujlhtUw5wxZvv9QTvCKuhZYf%2FpQoOkH9yhEKlxICb3LNQ%2BXkt7hqTkeoB15CaIkGPaQD7CHkiYm5vzxz3WvG5gKmzQYeN0Gm0fG7dZTtmNE9%2Fx49RQT0JYgNZmt5orJXGdZcZABT95IcSEHaHyhqLUpTBt6IiAvUpJKai4tTw0oUmJX77%2BLIuoRCS6nfxgbNZxNcktQKHRww9vytellHNrM1fmDDqQSIad6BngLoScf2BqhC5zEdet76iIMVNuH14R1p4IXPEy7XVKVHqliqsAIhYhx2qaN5k8rlviKN3wuig72sl3M5Dn3%2F42MB7dzOxvaPAy1Ke50cJywbEgmiAPAA%2BFgFpx58ViPJ4%2FNgpBrJ3Qtm5OMtlvo87hXhKl9HjkirkxFnWSVXHRfh%2BYoHspapkSuZUe1CSLeQtu08JOa%2BWu%2BJCpRA8gMIOB61kZPY3o31OyqGnBHONA5D0z8LKl6nAfW9gvnK9H3jRGzETkzZ3g9MOuTlMMGOqUBqn521rYC2f0uyvljaM8HDXuIU98MTzFgv8My%2BmczSYdF9swKJ0MxkfxRqRza%2FqnYAuI63pd9WwgoC1aCyviOb5xoaQxM4cwDBMxCQX9xZ7dCpeysj465MhfXIfn0AhCas6PrLVPRzhaHmyikBK17Tsk%2BEGrADIzeRfQLO415nrA2P7bVA%2FAGJbBUj07X8wdOCj7ptpCw4Xnv4QXnngWzDmOLLcaI&X-Amz-Signature=b4462dde8cc5d3258eb57498042b9cdb01156666f8a64fcab0e6c03a66f579d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERD6VDJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ZT0sh8aASwrfXbxeH309XyqGHjf5FzD%2BE8NcXnFKngIgEwUHpPlyU4592wGuit8lEl1OeQGRIrAYgdvAWGBBQk8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZOHMpxJi2CLwO1DircA2Ml8KNsEe5%2BLoxMtXTYQ%2BWtGleErTNB8x25njbyjztl9ZHs0z8jsd7Z96Wtq9i0bgNRQTPi7mYNXt8mu%2Bh4jA%2FBIbej2SdG9HdFOO28E8iAtUNnUAEnDoMUa5OeNPsIvh9Jy4wfphH33ujlhtUw5wxZvv9QTvCKuhZYf%2FpQoOkH9yhEKlxICb3LNQ%2BXkt7hqTkeoB15CaIkGPaQD7CHkiYm5vzxz3WvG5gKmzQYeN0Gm0fG7dZTtmNE9%2Fx49RQT0JYgNZmt5orJXGdZcZABT95IcSEHaHyhqLUpTBt6IiAvUpJKai4tTw0oUmJX77%2BLIuoRCS6nfxgbNZxNcktQKHRww9vytellHNrM1fmDDqQSIad6BngLoScf2BqhC5zEdet76iIMVNuH14R1p4IXPEy7XVKVHqliqsAIhYhx2qaN5k8rlviKN3wuig72sl3M5Dn3%2F42MB7dzOxvaPAy1Ke50cJywbEgmiAPAA%2BFgFpx58ViPJ4%2FNgpBrJ3Qtm5OMtlvo87hXhKl9HjkirkxFnWSVXHRfh%2BYoHspapkSuZUe1CSLeQtu08JOa%2BWu%2BJCpRA8gMIOB61kZPY3o31OyqGnBHONA5D0z8LKl6nAfW9gvnK9H3jRGzETkzZ3g9MOuTlMMGOqUBqn521rYC2f0uyvljaM8HDXuIU98MTzFgv8My%2BmczSYdF9swKJ0MxkfxRqRza%2FqnYAuI63pd9WwgoC1aCyviOb5xoaQxM4cwDBMxCQX9xZ7dCpeysj465MhfXIfn0AhCas6PrLVPRzhaHmyikBK17Tsk%2BEGrADIzeRfQLO415nrA2P7bVA%2FAGJbBUj07X8wdOCj7ptpCw4Xnv4QXnngWzDmOLLcaI&X-Amz-Signature=2f801503cecf2460e4076e109c47a95c94cb74c431438c9ccf223bd43add7aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERD6VDJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ZT0sh8aASwrfXbxeH309XyqGHjf5FzD%2BE8NcXnFKngIgEwUHpPlyU4592wGuit8lEl1OeQGRIrAYgdvAWGBBQk8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZOHMpxJi2CLwO1DircA2Ml8KNsEe5%2BLoxMtXTYQ%2BWtGleErTNB8x25njbyjztl9ZHs0z8jsd7Z96Wtq9i0bgNRQTPi7mYNXt8mu%2Bh4jA%2FBIbej2SdG9HdFOO28E8iAtUNnUAEnDoMUa5OeNPsIvh9Jy4wfphH33ujlhtUw5wxZvv9QTvCKuhZYf%2FpQoOkH9yhEKlxICb3LNQ%2BXkt7hqTkeoB15CaIkGPaQD7CHkiYm5vzxz3WvG5gKmzQYeN0Gm0fG7dZTtmNE9%2Fx49RQT0JYgNZmt5orJXGdZcZABT95IcSEHaHyhqLUpTBt6IiAvUpJKai4tTw0oUmJX77%2BLIuoRCS6nfxgbNZxNcktQKHRww9vytellHNrM1fmDDqQSIad6BngLoScf2BqhC5zEdet76iIMVNuH14R1p4IXPEy7XVKVHqliqsAIhYhx2qaN5k8rlviKN3wuig72sl3M5Dn3%2F42MB7dzOxvaPAy1Ke50cJywbEgmiAPAA%2BFgFpx58ViPJ4%2FNgpBrJ3Qtm5OMtlvo87hXhKl9HjkirkxFnWSVXHRfh%2BYoHspapkSuZUe1CSLeQtu08JOa%2BWu%2BJCpRA8gMIOB61kZPY3o31OyqGnBHONA5D0z8LKl6nAfW9gvnK9H3jRGzETkzZ3g9MOuTlMMGOqUBqn521rYC2f0uyvljaM8HDXuIU98MTzFgv8My%2BmczSYdF9swKJ0MxkfxRqRza%2FqnYAuI63pd9WwgoC1aCyviOb5xoaQxM4cwDBMxCQX9xZ7dCpeysj465MhfXIfn0AhCas6PrLVPRzhaHmyikBK17Tsk%2BEGrADIzeRfQLO415nrA2P7bVA%2FAGJbBUj07X8wdOCj7ptpCw4Xnv4QXnngWzDmOLLcaI&X-Amz-Signature=51eb98dc2f69035e51db655ca31ac4dbc6f1bca76ae0313ea44bccfa077088e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
