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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVEK4O2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdkeHfHCRRrwMB8FylcOQzMBxJ0xA%2FRCXhdSeTuo2LoAiEA1zTFzcEy3vz5BKEpyogbetTHQg2LgB8U2gS2bY4SSRUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMF98DCDq%2BS8j3jSECrcA0GcDQL2m6bHNZVE749HriouDJR7SG9Pd4YNdKSRQluL125rCTgtaN%2BF8SCXhvo9LgCojqlMlVBUI3G6BUksyKcFlazsIYoYxGo0olBIQ2Ia4B%2FYZkGqByEVY6tJDhXZUc94Nw51E9texjkk0J4veBlg96LTs1iOkXi6HIXEt4XCYBkAmR73gyROEKUtpPvxkiDRUboTCfFw2d410FuOeMsyYDwHl6tmkZxgeuo3nBkaR%2FO4kouuzsOvHb8XqfccfM%2B4J6Ck8ybvgnn%2FtEGTJoxdl49e%2F%2BMaLZR66W98jrXLcIZFEfWdCNJYcJrampkD0agHmMa5jzr7oDp4%2FUR77ov%2BanFFc0jSomYnfKJimuqaIvlw4KZgyVzesQt68hCtZIuDZrd3Byft2cyHXPH0%2FUTEGcvMCya7hWlmmMWTiEmfN4CU6d%2BQ3F%2BwBtemakhttgMoM5Ww74yItvWFfvhqxHQh3Cuef8C2HUzDTjeUh%2FSqBkQ83Bi51%2FfEna%2FwzZg9XE9N15auMY9PdhajqYQrTf2ifs32i6HKRJoEyl3D%2BZZaRTn6FvMtdKBIU8hIZr7l4L3eRdNbL6kDxlVJJ7%2BRmYrEH%2BS32yFh%2FsZTWLk0jUHpTbJ2ggPPQa8MvkyyMLzewsIGOqUBFaHVSSS7Q%2BFRL27isuZrRbOIaLYpuMwWopytwFWt%2B9ZUuUXekxeFCC9%2F0H9frOt%2Bach8XIi7r5x03OjH%2BvJ8BnXzPWCQ%2F7iT0fFe%2BX6y%2F9G%2Bh9gDhvLIj%2BU0cGdYMJAltrtI15GyJy62jCJbEgsFfj0kZf6WCVq24zw%2BxcPG3UAao0q4qsiYfJS19EZwIN88xrwL28zdG9JfKf6HWZ5dbMSm%2Bh6j&X-Amz-Signature=9565cd7423fbb298d31006236161fdee1f02ecfd77e7059df80da69506146d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVEK4O2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdkeHfHCRRrwMB8FylcOQzMBxJ0xA%2FRCXhdSeTuo2LoAiEA1zTFzcEy3vz5BKEpyogbetTHQg2LgB8U2gS2bY4SSRUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMF98DCDq%2BS8j3jSECrcA0GcDQL2m6bHNZVE749HriouDJR7SG9Pd4YNdKSRQluL125rCTgtaN%2BF8SCXhvo9LgCojqlMlVBUI3G6BUksyKcFlazsIYoYxGo0olBIQ2Ia4B%2FYZkGqByEVY6tJDhXZUc94Nw51E9texjkk0J4veBlg96LTs1iOkXi6HIXEt4XCYBkAmR73gyROEKUtpPvxkiDRUboTCfFw2d410FuOeMsyYDwHl6tmkZxgeuo3nBkaR%2FO4kouuzsOvHb8XqfccfM%2B4J6Ck8ybvgnn%2FtEGTJoxdl49e%2F%2BMaLZR66W98jrXLcIZFEfWdCNJYcJrampkD0agHmMa5jzr7oDp4%2FUR77ov%2BanFFc0jSomYnfKJimuqaIvlw4KZgyVzesQt68hCtZIuDZrd3Byft2cyHXPH0%2FUTEGcvMCya7hWlmmMWTiEmfN4CU6d%2BQ3F%2BwBtemakhttgMoM5Ww74yItvWFfvhqxHQh3Cuef8C2HUzDTjeUh%2FSqBkQ83Bi51%2FfEna%2FwzZg9XE9N15auMY9PdhajqYQrTf2ifs32i6HKRJoEyl3D%2BZZaRTn6FvMtdKBIU8hIZr7l4L3eRdNbL6kDxlVJJ7%2BRmYrEH%2BS32yFh%2FsZTWLk0jUHpTbJ2ggPPQa8MvkyyMLzewsIGOqUBFaHVSSS7Q%2BFRL27isuZrRbOIaLYpuMwWopytwFWt%2B9ZUuUXekxeFCC9%2F0H9frOt%2Bach8XIi7r5x03OjH%2BvJ8BnXzPWCQ%2F7iT0fFe%2BX6y%2F9G%2Bh9gDhvLIj%2BU0cGdYMJAltrtI15GyJy62jCJbEgsFfj0kZf6WCVq24zw%2BxcPG3UAao0q4qsiYfJS19EZwIN88xrwL28zdG9JfKf6HWZ5dbMSm%2Bh6j&X-Amz-Signature=7e814c230190c36b9da7de6fcf7e45ec72cee05ad7b0e1c999b1e22571533746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVEK4O2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdkeHfHCRRrwMB8FylcOQzMBxJ0xA%2FRCXhdSeTuo2LoAiEA1zTFzcEy3vz5BKEpyogbetTHQg2LgB8U2gS2bY4SSRUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMF98DCDq%2BS8j3jSECrcA0GcDQL2m6bHNZVE749HriouDJR7SG9Pd4YNdKSRQluL125rCTgtaN%2BF8SCXhvo9LgCojqlMlVBUI3G6BUksyKcFlazsIYoYxGo0olBIQ2Ia4B%2FYZkGqByEVY6tJDhXZUc94Nw51E9texjkk0J4veBlg96LTs1iOkXi6HIXEt4XCYBkAmR73gyROEKUtpPvxkiDRUboTCfFw2d410FuOeMsyYDwHl6tmkZxgeuo3nBkaR%2FO4kouuzsOvHb8XqfccfM%2B4J6Ck8ybvgnn%2FtEGTJoxdl49e%2F%2BMaLZR66W98jrXLcIZFEfWdCNJYcJrampkD0agHmMa5jzr7oDp4%2FUR77ov%2BanFFc0jSomYnfKJimuqaIvlw4KZgyVzesQt68hCtZIuDZrd3Byft2cyHXPH0%2FUTEGcvMCya7hWlmmMWTiEmfN4CU6d%2BQ3F%2BwBtemakhttgMoM5Ww74yItvWFfvhqxHQh3Cuef8C2HUzDTjeUh%2FSqBkQ83Bi51%2FfEna%2FwzZg9XE9N15auMY9PdhajqYQrTf2ifs32i6HKRJoEyl3D%2BZZaRTn6FvMtdKBIU8hIZr7l4L3eRdNbL6kDxlVJJ7%2BRmYrEH%2BS32yFh%2FsZTWLk0jUHpTbJ2ggPPQa8MvkyyMLzewsIGOqUBFaHVSSS7Q%2BFRL27isuZrRbOIaLYpuMwWopytwFWt%2B9ZUuUXekxeFCC9%2F0H9frOt%2Bach8XIi7r5x03OjH%2BvJ8BnXzPWCQ%2F7iT0fFe%2BX6y%2F9G%2Bh9gDhvLIj%2BU0cGdYMJAltrtI15GyJy62jCJbEgsFfj0kZf6WCVq24zw%2BxcPG3UAao0q4qsiYfJS19EZwIN88xrwL28zdG9JfKf6HWZ5dbMSm%2Bh6j&X-Amz-Signature=24a49de2be07b794b69daa37caa2fa71b50796343641e4f3665ed6723d25d3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVEK4O2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdkeHfHCRRrwMB8FylcOQzMBxJ0xA%2FRCXhdSeTuo2LoAiEA1zTFzcEy3vz5BKEpyogbetTHQg2LgB8U2gS2bY4SSRUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMF98DCDq%2BS8j3jSECrcA0GcDQL2m6bHNZVE749HriouDJR7SG9Pd4YNdKSRQluL125rCTgtaN%2BF8SCXhvo9LgCojqlMlVBUI3G6BUksyKcFlazsIYoYxGo0olBIQ2Ia4B%2FYZkGqByEVY6tJDhXZUc94Nw51E9texjkk0J4veBlg96LTs1iOkXi6HIXEt4XCYBkAmR73gyROEKUtpPvxkiDRUboTCfFw2d410FuOeMsyYDwHl6tmkZxgeuo3nBkaR%2FO4kouuzsOvHb8XqfccfM%2B4J6Ck8ybvgnn%2FtEGTJoxdl49e%2F%2BMaLZR66W98jrXLcIZFEfWdCNJYcJrampkD0agHmMa5jzr7oDp4%2FUR77ov%2BanFFc0jSomYnfKJimuqaIvlw4KZgyVzesQt68hCtZIuDZrd3Byft2cyHXPH0%2FUTEGcvMCya7hWlmmMWTiEmfN4CU6d%2BQ3F%2BwBtemakhttgMoM5Ww74yItvWFfvhqxHQh3Cuef8C2HUzDTjeUh%2FSqBkQ83Bi51%2FfEna%2FwzZg9XE9N15auMY9PdhajqYQrTf2ifs32i6HKRJoEyl3D%2BZZaRTn6FvMtdKBIU8hIZr7l4L3eRdNbL6kDxlVJJ7%2BRmYrEH%2BS32yFh%2FsZTWLk0jUHpTbJ2ggPPQa8MvkyyMLzewsIGOqUBFaHVSSS7Q%2BFRL27isuZrRbOIaLYpuMwWopytwFWt%2B9ZUuUXekxeFCC9%2F0H9frOt%2Bach8XIi7r5x03OjH%2BvJ8BnXzPWCQ%2F7iT0fFe%2BX6y%2F9G%2Bh9gDhvLIj%2BU0cGdYMJAltrtI15GyJy62jCJbEgsFfj0kZf6WCVq24zw%2BxcPG3UAao0q4qsiYfJS19EZwIN88xrwL28zdG9JfKf6HWZ5dbMSm%2Bh6j&X-Amz-Signature=89507df9bd70626bbfa5e5cb83520090bb8b964b2bc407572d2c39ec6e86e3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVEK4O2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdkeHfHCRRrwMB8FylcOQzMBxJ0xA%2FRCXhdSeTuo2LoAiEA1zTFzcEy3vz5BKEpyogbetTHQg2LgB8U2gS2bY4SSRUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMF98DCDq%2BS8j3jSECrcA0GcDQL2m6bHNZVE749HriouDJR7SG9Pd4YNdKSRQluL125rCTgtaN%2BF8SCXhvo9LgCojqlMlVBUI3G6BUksyKcFlazsIYoYxGo0olBIQ2Ia4B%2FYZkGqByEVY6tJDhXZUc94Nw51E9texjkk0J4veBlg96LTs1iOkXi6HIXEt4XCYBkAmR73gyROEKUtpPvxkiDRUboTCfFw2d410FuOeMsyYDwHl6tmkZxgeuo3nBkaR%2FO4kouuzsOvHb8XqfccfM%2B4J6Ck8ybvgnn%2FtEGTJoxdl49e%2F%2BMaLZR66W98jrXLcIZFEfWdCNJYcJrampkD0agHmMa5jzr7oDp4%2FUR77ov%2BanFFc0jSomYnfKJimuqaIvlw4KZgyVzesQt68hCtZIuDZrd3Byft2cyHXPH0%2FUTEGcvMCya7hWlmmMWTiEmfN4CU6d%2BQ3F%2BwBtemakhttgMoM5Ww74yItvWFfvhqxHQh3Cuef8C2HUzDTjeUh%2FSqBkQ83Bi51%2FfEna%2FwzZg9XE9N15auMY9PdhajqYQrTf2ifs32i6HKRJoEyl3D%2BZZaRTn6FvMtdKBIU8hIZr7l4L3eRdNbL6kDxlVJJ7%2BRmYrEH%2BS32yFh%2FsZTWLk0jUHpTbJ2ggPPQa8MvkyyMLzewsIGOqUBFaHVSSS7Q%2BFRL27isuZrRbOIaLYpuMwWopytwFWt%2B9ZUuUXekxeFCC9%2F0H9frOt%2Bach8XIi7r5x03OjH%2BvJ8BnXzPWCQ%2F7iT0fFe%2BX6y%2F9G%2Bh9gDhvLIj%2BU0cGdYMJAltrtI15GyJy62jCJbEgsFfj0kZf6WCVq24zw%2BxcPG3UAao0q4qsiYfJS19EZwIN88xrwL28zdG9JfKf6HWZ5dbMSm%2Bh6j&X-Amz-Signature=fd3a8fee99fe454da503f25c48dd2a11221ac21c3547272b53eb0ad075bf5376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
