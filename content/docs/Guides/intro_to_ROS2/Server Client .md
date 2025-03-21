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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJVAIIC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEJVPxxIjwIMOEbZUqnY7kanSXkXh3VlipL57G6j7kMdAiEA5qN1Hvd6qyPsr2KG2ASb%2FeWL4uwdfHFEz03SDoB9p0AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOh6OqcSfFeQBKHQircA1cDxb6AUo0cYidHHdbcCsMmwugZb1PRvclXOizEoa7set7FUQjA4uuseLip9zBK4DRwS9aZkUbYJtBW9uPhUoseOpCVgeGrfInnI9jDyUb9M%2B0Z86ykxmjxI9%2BkhlFE9UK0eJAyBzwO7nOoB%2FC27LF3zcujIE2w5RsqgbumamXNsbO1faVOwpv9tuTGShO5od7qYqiaALN0kylrv7GRkncf%2FsR7GMC5lKbNT4X8ooccSmLd1i3xJJdvNj2tkaGcZ0k1YFuTUjKbTnwvK7WMO3RqcBaA1MnMZ2U63Q%2FJpe4sNbrXPfyWHsK8YevwKc%2BpKpF2zn9LndeP0jEyiGexr%2F%2BffbCBJAsw1CzYM0RmAunEACEsrLjF6WQkWyjdGI0OqjcCkUXMQcEQZQfL7G0Je9h1DFZzpQz4r5wqf8XWu1muqWolH8nmQikM%2Bgp3blJxcqgJGbnvfbmhC%2FvZx2Bi35IxSswnaNrzMD70ZRARMr0H1yi2eEQkb01yrzs8k%2Fi2aJ%2FpBhzXPNZam2NpW3v9q6t9oI6Za065viXar6rCZjEVPx1T8CeySDXyHZloe2MfwoRzjqinxdDhljro4xSY6miAiw%2Bw7udsYOP0ZylWZErpnRlgCv2cLrvbVtGdMKb58r4GOqUBV0j4q0dfbNnOHVHrzAoEAnffxo9H28v8%2BAmmOGmLMl9d1PwIvsu5xIItaf7BuNZS0s%2FX1%2FkVApnEIPJo%2BOvcoIPow%2Fkc577p9zKPBSGwAampG8yCuXL4jH18ueJTivdw8gB5FRGKjmDAcNBeGlO3qjE%2FMITUhJPfQv3gaXxS4SJ7eBCP1SDKHPQOqH629WmGDPdJ5jTZ2y5vYaACWzaKoohExUnF&X-Amz-Signature=d7d6afed31a5e83424549d42292435921b50a27e188f7f05b76d7a9aece5d4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJVAIIC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEJVPxxIjwIMOEbZUqnY7kanSXkXh3VlipL57G6j7kMdAiEA5qN1Hvd6qyPsr2KG2ASb%2FeWL4uwdfHFEz03SDoB9p0AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOh6OqcSfFeQBKHQircA1cDxb6AUo0cYidHHdbcCsMmwugZb1PRvclXOizEoa7set7FUQjA4uuseLip9zBK4DRwS9aZkUbYJtBW9uPhUoseOpCVgeGrfInnI9jDyUb9M%2B0Z86ykxmjxI9%2BkhlFE9UK0eJAyBzwO7nOoB%2FC27LF3zcujIE2w5RsqgbumamXNsbO1faVOwpv9tuTGShO5od7qYqiaALN0kylrv7GRkncf%2FsR7GMC5lKbNT4X8ooccSmLd1i3xJJdvNj2tkaGcZ0k1YFuTUjKbTnwvK7WMO3RqcBaA1MnMZ2U63Q%2FJpe4sNbrXPfyWHsK8YevwKc%2BpKpF2zn9LndeP0jEyiGexr%2F%2BffbCBJAsw1CzYM0RmAunEACEsrLjF6WQkWyjdGI0OqjcCkUXMQcEQZQfL7G0Je9h1DFZzpQz4r5wqf8XWu1muqWolH8nmQikM%2Bgp3blJxcqgJGbnvfbmhC%2FvZx2Bi35IxSswnaNrzMD70ZRARMr0H1yi2eEQkb01yrzs8k%2Fi2aJ%2FpBhzXPNZam2NpW3v9q6t9oI6Za065viXar6rCZjEVPx1T8CeySDXyHZloe2MfwoRzjqinxdDhljro4xSY6miAiw%2Bw7udsYOP0ZylWZErpnRlgCv2cLrvbVtGdMKb58r4GOqUBV0j4q0dfbNnOHVHrzAoEAnffxo9H28v8%2BAmmOGmLMl9d1PwIvsu5xIItaf7BuNZS0s%2FX1%2FkVApnEIPJo%2BOvcoIPow%2Fkc577p9zKPBSGwAampG8yCuXL4jH18ueJTivdw8gB5FRGKjmDAcNBeGlO3qjE%2FMITUhJPfQv3gaXxS4SJ7eBCP1SDKHPQOqH629WmGDPdJ5jTZ2y5vYaACWzaKoohExUnF&X-Amz-Signature=4259d2c7a39eab63aca9e9bdbe1ee83f7548c8d1c5c2c86232479e44ab49b5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJVAIIC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEJVPxxIjwIMOEbZUqnY7kanSXkXh3VlipL57G6j7kMdAiEA5qN1Hvd6qyPsr2KG2ASb%2FeWL4uwdfHFEz03SDoB9p0AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOh6OqcSfFeQBKHQircA1cDxb6AUo0cYidHHdbcCsMmwugZb1PRvclXOizEoa7set7FUQjA4uuseLip9zBK4DRwS9aZkUbYJtBW9uPhUoseOpCVgeGrfInnI9jDyUb9M%2B0Z86ykxmjxI9%2BkhlFE9UK0eJAyBzwO7nOoB%2FC27LF3zcujIE2w5RsqgbumamXNsbO1faVOwpv9tuTGShO5od7qYqiaALN0kylrv7GRkncf%2FsR7GMC5lKbNT4X8ooccSmLd1i3xJJdvNj2tkaGcZ0k1YFuTUjKbTnwvK7WMO3RqcBaA1MnMZ2U63Q%2FJpe4sNbrXPfyWHsK8YevwKc%2BpKpF2zn9LndeP0jEyiGexr%2F%2BffbCBJAsw1CzYM0RmAunEACEsrLjF6WQkWyjdGI0OqjcCkUXMQcEQZQfL7G0Je9h1DFZzpQz4r5wqf8XWu1muqWolH8nmQikM%2Bgp3blJxcqgJGbnvfbmhC%2FvZx2Bi35IxSswnaNrzMD70ZRARMr0H1yi2eEQkb01yrzs8k%2Fi2aJ%2FpBhzXPNZam2NpW3v9q6t9oI6Za065viXar6rCZjEVPx1T8CeySDXyHZloe2MfwoRzjqinxdDhljro4xSY6miAiw%2Bw7udsYOP0ZylWZErpnRlgCv2cLrvbVtGdMKb58r4GOqUBV0j4q0dfbNnOHVHrzAoEAnffxo9H28v8%2BAmmOGmLMl9d1PwIvsu5xIItaf7BuNZS0s%2FX1%2FkVApnEIPJo%2BOvcoIPow%2Fkc577p9zKPBSGwAampG8yCuXL4jH18ueJTivdw8gB5FRGKjmDAcNBeGlO3qjE%2FMITUhJPfQv3gaXxS4SJ7eBCP1SDKHPQOqH629WmGDPdJ5jTZ2y5vYaACWzaKoohExUnF&X-Amz-Signature=78370a40edb6b08cb9c18455bc7fdac6443bbaa19abc5d6bcbe4ddb0c15c8695&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJVAIIC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEJVPxxIjwIMOEbZUqnY7kanSXkXh3VlipL57G6j7kMdAiEA5qN1Hvd6qyPsr2KG2ASb%2FeWL4uwdfHFEz03SDoB9p0AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOh6OqcSfFeQBKHQircA1cDxb6AUo0cYidHHdbcCsMmwugZb1PRvclXOizEoa7set7FUQjA4uuseLip9zBK4DRwS9aZkUbYJtBW9uPhUoseOpCVgeGrfInnI9jDyUb9M%2B0Z86ykxmjxI9%2BkhlFE9UK0eJAyBzwO7nOoB%2FC27LF3zcujIE2w5RsqgbumamXNsbO1faVOwpv9tuTGShO5od7qYqiaALN0kylrv7GRkncf%2FsR7GMC5lKbNT4X8ooccSmLd1i3xJJdvNj2tkaGcZ0k1YFuTUjKbTnwvK7WMO3RqcBaA1MnMZ2U63Q%2FJpe4sNbrXPfyWHsK8YevwKc%2BpKpF2zn9LndeP0jEyiGexr%2F%2BffbCBJAsw1CzYM0RmAunEACEsrLjF6WQkWyjdGI0OqjcCkUXMQcEQZQfL7G0Je9h1DFZzpQz4r5wqf8XWu1muqWolH8nmQikM%2Bgp3blJxcqgJGbnvfbmhC%2FvZx2Bi35IxSswnaNrzMD70ZRARMr0H1yi2eEQkb01yrzs8k%2Fi2aJ%2FpBhzXPNZam2NpW3v9q6t9oI6Za065viXar6rCZjEVPx1T8CeySDXyHZloe2MfwoRzjqinxdDhljro4xSY6miAiw%2Bw7udsYOP0ZylWZErpnRlgCv2cLrvbVtGdMKb58r4GOqUBV0j4q0dfbNnOHVHrzAoEAnffxo9H28v8%2BAmmOGmLMl9d1PwIvsu5xIItaf7BuNZS0s%2FX1%2FkVApnEIPJo%2BOvcoIPow%2Fkc577p9zKPBSGwAampG8yCuXL4jH18ueJTivdw8gB5FRGKjmDAcNBeGlO3qjE%2FMITUhJPfQv3gaXxS4SJ7eBCP1SDKHPQOqH629WmGDPdJ5jTZ2y5vYaACWzaKoohExUnF&X-Amz-Signature=2f98dbaf802c8ddf7deeacc0cf1e14429e1471777f5d4916846fac54177f1a13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJVAIIC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEJVPxxIjwIMOEbZUqnY7kanSXkXh3VlipL57G6j7kMdAiEA5qN1Hvd6qyPsr2KG2ASb%2FeWL4uwdfHFEz03SDoB9p0AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOh6OqcSfFeQBKHQircA1cDxb6AUo0cYidHHdbcCsMmwugZb1PRvclXOizEoa7set7FUQjA4uuseLip9zBK4DRwS9aZkUbYJtBW9uPhUoseOpCVgeGrfInnI9jDyUb9M%2B0Z86ykxmjxI9%2BkhlFE9UK0eJAyBzwO7nOoB%2FC27LF3zcujIE2w5RsqgbumamXNsbO1faVOwpv9tuTGShO5od7qYqiaALN0kylrv7GRkncf%2FsR7GMC5lKbNT4X8ooccSmLd1i3xJJdvNj2tkaGcZ0k1YFuTUjKbTnwvK7WMO3RqcBaA1MnMZ2U63Q%2FJpe4sNbrXPfyWHsK8YevwKc%2BpKpF2zn9LndeP0jEyiGexr%2F%2BffbCBJAsw1CzYM0RmAunEACEsrLjF6WQkWyjdGI0OqjcCkUXMQcEQZQfL7G0Je9h1DFZzpQz4r5wqf8XWu1muqWolH8nmQikM%2Bgp3blJxcqgJGbnvfbmhC%2FvZx2Bi35IxSswnaNrzMD70ZRARMr0H1yi2eEQkb01yrzs8k%2Fi2aJ%2FpBhzXPNZam2NpW3v9q6t9oI6Za065viXar6rCZjEVPx1T8CeySDXyHZloe2MfwoRzjqinxdDhljro4xSY6miAiw%2Bw7udsYOP0ZylWZErpnRlgCv2cLrvbVtGdMKb58r4GOqUBV0j4q0dfbNnOHVHrzAoEAnffxo9H28v8%2BAmmOGmLMl9d1PwIvsu5xIItaf7BuNZS0s%2FX1%2FkVApnEIPJo%2BOvcoIPow%2Fkc577p9zKPBSGwAampG8yCuXL4jH18ueJTivdw8gB5FRGKjmDAcNBeGlO3qjE%2FMITUhJPfQv3gaXxS4SJ7eBCP1SDKHPQOqH629WmGDPdJ5jTZ2y5vYaACWzaKoohExUnF&X-Amz-Signature=c1cc6fb5721da4f040e1850a82e9a1f63e7a7c422faa2f9469bc33e62db170e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
