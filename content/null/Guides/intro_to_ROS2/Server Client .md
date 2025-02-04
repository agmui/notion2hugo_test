---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTAE65C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDcMYOhvV024WfNBCosp0GV9pBArmUR5XSXrnkgdW3fzgIhAO4t4OW7CaLsR3nh3G5cG3k23L6SYMZOE2LR8kZkTq0sKv8DCDYQABoMNjM3NDIzMTgzODA1Igw1VLvQ9yJbEohD93cq3AM%2FiOEYG3hR%2F1sDV6ba3r%2Fv7%2FwRyfzwnLqp4ZhpekT1HVXzhK53PAr5EzQcXUs3ZO725nam17QQp1ZuLkQcq9x9QbPWpFaHZ0nIIj8WKYeSjTUExm%2B2bNqOBwYj9Qk1SUjLQFTBHUBX8Vfw20RAtp5RKGh4GbbJb1%2F85cJUdnqqGx62FpL8n5B7q4AObWZO8mhrWkPjC5HiKjeB6cuByoNIW9lsxsQ2qpt9tZfLK37ep%2FvNGywhDlC2l58ogKjF6bLYnOJv%2FREeER2cli4Uaf4%2B6dCxT32liZO1z6YWq2X%2FVZwD%2Br%2FIEN%2F8l%2BurgoV7z5djBZEADu%2F0rBgpRU9JCPmsftvIpelmI42sISTNegLUXplompQAlXjBJNRsp2nHKpcj9Wggz88L1bIK8bawD19YPuQrMn8IrX4iPoDxjlCzKpxsca9MwBKFZLsdA7ayKCF7vQ1AOFKzMYy2sZ4sIH%2BGZiKzFG4AAr7DFJtAZBaDLd2xP4DKSbts2A9bzO5DL2J1qBePWtsxbHqZO3bfkUputZkhqU4yIJ0vFwiT2%2FLqHqj%2B3U52OhfrMWZN4ugwxYXmO9DBav5T1URY9sn7uxLwM18UWqOvR8%2BinEXZqH8xliZGSVvrtbiFD2Li9zD5%2FYm9BjqkAdnhEw8eBgUrkPxpTl2IL2k5h14y4jAZZDfkB0WIpHoBV0ql0abqF3lY5fI7uyaA1y1f7zgc37XT6kWYTMS%2FAPvMKX8kgKWljgkqxaRRXX1IqyvOfYME3Vo5xjJM%2FxImiTrXKdbWN%2F8qRZmVodO8EPvRV1t%2B7CLIjwFuKPln8TtwoA34%2B3i0og0487aRZY2sQ%2FYk55gAcOLuCkS8vu9gi74f2Pv4&X-Amz-Signature=546fcb69f25846b462df1ac13502c94042d4fc5c3f8f17302c826488b3f3b4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTAE65C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDcMYOhvV024WfNBCosp0GV9pBArmUR5XSXrnkgdW3fzgIhAO4t4OW7CaLsR3nh3G5cG3k23L6SYMZOE2LR8kZkTq0sKv8DCDYQABoMNjM3NDIzMTgzODA1Igw1VLvQ9yJbEohD93cq3AM%2FiOEYG3hR%2F1sDV6ba3r%2Fv7%2FwRyfzwnLqp4ZhpekT1HVXzhK53PAr5EzQcXUs3ZO725nam17QQp1ZuLkQcq9x9QbPWpFaHZ0nIIj8WKYeSjTUExm%2B2bNqOBwYj9Qk1SUjLQFTBHUBX8Vfw20RAtp5RKGh4GbbJb1%2F85cJUdnqqGx62FpL8n5B7q4AObWZO8mhrWkPjC5HiKjeB6cuByoNIW9lsxsQ2qpt9tZfLK37ep%2FvNGywhDlC2l58ogKjF6bLYnOJv%2FREeER2cli4Uaf4%2B6dCxT32liZO1z6YWq2X%2FVZwD%2Br%2FIEN%2F8l%2BurgoV7z5djBZEADu%2F0rBgpRU9JCPmsftvIpelmI42sISTNegLUXplompQAlXjBJNRsp2nHKpcj9Wggz88L1bIK8bawD19YPuQrMn8IrX4iPoDxjlCzKpxsca9MwBKFZLsdA7ayKCF7vQ1AOFKzMYy2sZ4sIH%2BGZiKzFG4AAr7DFJtAZBaDLd2xP4DKSbts2A9bzO5DL2J1qBePWtsxbHqZO3bfkUputZkhqU4yIJ0vFwiT2%2FLqHqj%2B3U52OhfrMWZN4ugwxYXmO9DBav5T1URY9sn7uxLwM18UWqOvR8%2BinEXZqH8xliZGSVvrtbiFD2Li9zD5%2FYm9BjqkAdnhEw8eBgUrkPxpTl2IL2k5h14y4jAZZDfkB0WIpHoBV0ql0abqF3lY5fI7uyaA1y1f7zgc37XT6kWYTMS%2FAPvMKX8kgKWljgkqxaRRXX1IqyvOfYME3Vo5xjJM%2FxImiTrXKdbWN%2F8qRZmVodO8EPvRV1t%2B7CLIjwFuKPln8TtwoA34%2B3i0og0487aRZY2sQ%2FYk55gAcOLuCkS8vu9gi74f2Pv4&X-Amz-Signature=4e3eecad6c6ea03b8e4d7b121fb0508622dd646471481b474d7d5b251a14606f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTAE65C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDcMYOhvV024WfNBCosp0GV9pBArmUR5XSXrnkgdW3fzgIhAO4t4OW7CaLsR3nh3G5cG3k23L6SYMZOE2LR8kZkTq0sKv8DCDYQABoMNjM3NDIzMTgzODA1Igw1VLvQ9yJbEohD93cq3AM%2FiOEYG3hR%2F1sDV6ba3r%2Fv7%2FwRyfzwnLqp4ZhpekT1HVXzhK53PAr5EzQcXUs3ZO725nam17QQp1ZuLkQcq9x9QbPWpFaHZ0nIIj8WKYeSjTUExm%2B2bNqOBwYj9Qk1SUjLQFTBHUBX8Vfw20RAtp5RKGh4GbbJb1%2F85cJUdnqqGx62FpL8n5B7q4AObWZO8mhrWkPjC5HiKjeB6cuByoNIW9lsxsQ2qpt9tZfLK37ep%2FvNGywhDlC2l58ogKjF6bLYnOJv%2FREeER2cli4Uaf4%2B6dCxT32liZO1z6YWq2X%2FVZwD%2Br%2FIEN%2F8l%2BurgoV7z5djBZEADu%2F0rBgpRU9JCPmsftvIpelmI42sISTNegLUXplompQAlXjBJNRsp2nHKpcj9Wggz88L1bIK8bawD19YPuQrMn8IrX4iPoDxjlCzKpxsca9MwBKFZLsdA7ayKCF7vQ1AOFKzMYy2sZ4sIH%2BGZiKzFG4AAr7DFJtAZBaDLd2xP4DKSbts2A9bzO5DL2J1qBePWtsxbHqZO3bfkUputZkhqU4yIJ0vFwiT2%2FLqHqj%2B3U52OhfrMWZN4ugwxYXmO9DBav5T1URY9sn7uxLwM18UWqOvR8%2BinEXZqH8xliZGSVvrtbiFD2Li9zD5%2FYm9BjqkAdnhEw8eBgUrkPxpTl2IL2k5h14y4jAZZDfkB0WIpHoBV0ql0abqF3lY5fI7uyaA1y1f7zgc37XT6kWYTMS%2FAPvMKX8kgKWljgkqxaRRXX1IqyvOfYME3Vo5xjJM%2FxImiTrXKdbWN%2F8qRZmVodO8EPvRV1t%2B7CLIjwFuKPln8TtwoA34%2B3i0og0487aRZY2sQ%2FYk55gAcOLuCkS8vu9gi74f2Pv4&X-Amz-Signature=74538bf19498e5e586719f1f52111fb09e26c2e8663446efd628eaa473f6085b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTAE65C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDcMYOhvV024WfNBCosp0GV9pBArmUR5XSXrnkgdW3fzgIhAO4t4OW7CaLsR3nh3G5cG3k23L6SYMZOE2LR8kZkTq0sKv8DCDYQABoMNjM3NDIzMTgzODA1Igw1VLvQ9yJbEohD93cq3AM%2FiOEYG3hR%2F1sDV6ba3r%2Fv7%2FwRyfzwnLqp4ZhpekT1HVXzhK53PAr5EzQcXUs3ZO725nam17QQp1ZuLkQcq9x9QbPWpFaHZ0nIIj8WKYeSjTUExm%2B2bNqOBwYj9Qk1SUjLQFTBHUBX8Vfw20RAtp5RKGh4GbbJb1%2F85cJUdnqqGx62FpL8n5B7q4AObWZO8mhrWkPjC5HiKjeB6cuByoNIW9lsxsQ2qpt9tZfLK37ep%2FvNGywhDlC2l58ogKjF6bLYnOJv%2FREeER2cli4Uaf4%2B6dCxT32liZO1z6YWq2X%2FVZwD%2Br%2FIEN%2F8l%2BurgoV7z5djBZEADu%2F0rBgpRU9JCPmsftvIpelmI42sISTNegLUXplompQAlXjBJNRsp2nHKpcj9Wggz88L1bIK8bawD19YPuQrMn8IrX4iPoDxjlCzKpxsca9MwBKFZLsdA7ayKCF7vQ1AOFKzMYy2sZ4sIH%2BGZiKzFG4AAr7DFJtAZBaDLd2xP4DKSbts2A9bzO5DL2J1qBePWtsxbHqZO3bfkUputZkhqU4yIJ0vFwiT2%2FLqHqj%2B3U52OhfrMWZN4ugwxYXmO9DBav5T1URY9sn7uxLwM18UWqOvR8%2BinEXZqH8xliZGSVvrtbiFD2Li9zD5%2FYm9BjqkAdnhEw8eBgUrkPxpTl2IL2k5h14y4jAZZDfkB0WIpHoBV0ql0abqF3lY5fI7uyaA1y1f7zgc37XT6kWYTMS%2FAPvMKX8kgKWljgkqxaRRXX1IqyvOfYME3Vo5xjJM%2FxImiTrXKdbWN%2F8qRZmVodO8EPvRV1t%2B7CLIjwFuKPln8TtwoA34%2B3i0og0487aRZY2sQ%2FYk55gAcOLuCkS8vu9gi74f2Pv4&X-Amz-Signature=6ae2ca1b14b9a14e98c5573dff18a651f6e03237d4d04dc4bfae23dae952c9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTAE65C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDcMYOhvV024WfNBCosp0GV9pBArmUR5XSXrnkgdW3fzgIhAO4t4OW7CaLsR3nh3G5cG3k23L6SYMZOE2LR8kZkTq0sKv8DCDYQABoMNjM3NDIzMTgzODA1Igw1VLvQ9yJbEohD93cq3AM%2FiOEYG3hR%2F1sDV6ba3r%2Fv7%2FwRyfzwnLqp4ZhpekT1HVXzhK53PAr5EzQcXUs3ZO725nam17QQp1ZuLkQcq9x9QbPWpFaHZ0nIIj8WKYeSjTUExm%2B2bNqOBwYj9Qk1SUjLQFTBHUBX8Vfw20RAtp5RKGh4GbbJb1%2F85cJUdnqqGx62FpL8n5B7q4AObWZO8mhrWkPjC5HiKjeB6cuByoNIW9lsxsQ2qpt9tZfLK37ep%2FvNGywhDlC2l58ogKjF6bLYnOJv%2FREeER2cli4Uaf4%2B6dCxT32liZO1z6YWq2X%2FVZwD%2Br%2FIEN%2F8l%2BurgoV7z5djBZEADu%2F0rBgpRU9JCPmsftvIpelmI42sISTNegLUXplompQAlXjBJNRsp2nHKpcj9Wggz88L1bIK8bawD19YPuQrMn8IrX4iPoDxjlCzKpxsca9MwBKFZLsdA7ayKCF7vQ1AOFKzMYy2sZ4sIH%2BGZiKzFG4AAr7DFJtAZBaDLd2xP4DKSbts2A9bzO5DL2J1qBePWtsxbHqZO3bfkUputZkhqU4yIJ0vFwiT2%2FLqHqj%2B3U52OhfrMWZN4ugwxYXmO9DBav5T1URY9sn7uxLwM18UWqOvR8%2BinEXZqH8xliZGSVvrtbiFD2Li9zD5%2FYm9BjqkAdnhEw8eBgUrkPxpTl2IL2k5h14y4jAZZDfkB0WIpHoBV0ql0abqF3lY5fI7uyaA1y1f7zgc37XT6kWYTMS%2FAPvMKX8kgKWljgkqxaRRXX1IqyvOfYME3Vo5xjJM%2FxImiTrXKdbWN%2F8qRZmVodO8EPvRV1t%2B7CLIjwFuKPln8TtwoA34%2B3i0og0487aRZY2sQ%2FYk55gAcOLuCkS8vu9gi74f2Pv4&X-Amz-Signature=c6ce79372aec538a62e4d4cfffc28751b20a2a44d478d1016ac2e33c73c21ede&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
