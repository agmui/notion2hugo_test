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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDUTCJX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCiBOC4rLqrO7lDCPetYVNcAwgvUoDQwzx%2FTDwwlQVDOwIhAKVClDH85IL0Og%2FNliIC6rdYwFvtoTJuhVJybzqVSPmPKv8DCHcQABoMNjM3NDIzMTgzODA1IgzeUPl6olLDEqz4hxcq3APIVq%2BjtMo20S7KHP%2F%2FBWup8qfvk2OES0HZPfMXe8UgizU3fzyEugmPhjcuDIG3z83QXVxQv7AXBjbzFINRKWuqHHG6suzW3UdO6RYUJwErpzEbKHwQQQxcQtXiF5duVt3uqdfP48g2suAiXcbMrx3rchM%2FaNM0kv3PBnT5CZcbHKbeo1XxAMd8EpxZoDGPMOMKuTCo8XDKjmfkvzVmMaSVL%2BnvJt%2FIeLLG3diEn1K5%2FnanL9nDMz8DOxq2CPLEszMf5r2ob3AqHFvuxN4zaEaG5%2FAcrnqNv%2BMqT3EJtK1G5c6uOi3LQbGTbGTNrW%2BVIdyBZUAgTKZWYRg9vTQQky0DwRoa7y7civ475tOCjIBvRM2g%2FYf4HU1id39N7WYJB46bFrCn2SW7%2FWC%2F%2BfR4CCUXCZH8xikpy4Dv3RugWgKsPrdU8m6sRIapHykcaCtKojErmfHBfG5nPEXmeTeNb%2FdXxqCRFwcZ%2Bvjb53AuTDgN5kTDpX4YD6NkI%2F35xck3XzLBbZsi6ipvEvUdk23JxhiYQfzFFhgXs2GD1%2BSL9GBZMBfRqpMqTOrB4SaSfNGleAEcMb6H%2BoF%2FLoPdp8jcUGQL0heD24Wjy7GeuzW6PNwKe7%2Bdzc9ZwMWTV6F4vjDJneu%2BBjqkAWgJDFSCoerXInBmMmirAd8ykAhvFHP7RsRzpPEeu3yhnKi4FK0b72Y0WcZhuPrDmJ36Rtzx6YMf6O3s43lTLCQ8FranmOHH4yv83c7avt0EqIiYNSrn6%2B1tdQiw96LE1LgZxt552o7BIZ1a8kcoKLQp4%2B%2BpeIdi8rgPsbUJnIDimIojg6Zged0CQgiQ1vsT8BjIme3TvVQBbOO16hA%2BKqPNN72p&X-Amz-Signature=686be4771d615903be3978bb4887fc3a3cfed51bd01a23733092381a627759d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDUTCJX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCiBOC4rLqrO7lDCPetYVNcAwgvUoDQwzx%2FTDwwlQVDOwIhAKVClDH85IL0Og%2FNliIC6rdYwFvtoTJuhVJybzqVSPmPKv8DCHcQABoMNjM3NDIzMTgzODA1IgzeUPl6olLDEqz4hxcq3APIVq%2BjtMo20S7KHP%2F%2FBWup8qfvk2OES0HZPfMXe8UgizU3fzyEugmPhjcuDIG3z83QXVxQv7AXBjbzFINRKWuqHHG6suzW3UdO6RYUJwErpzEbKHwQQQxcQtXiF5duVt3uqdfP48g2suAiXcbMrx3rchM%2FaNM0kv3PBnT5CZcbHKbeo1XxAMd8EpxZoDGPMOMKuTCo8XDKjmfkvzVmMaSVL%2BnvJt%2FIeLLG3diEn1K5%2FnanL9nDMz8DOxq2CPLEszMf5r2ob3AqHFvuxN4zaEaG5%2FAcrnqNv%2BMqT3EJtK1G5c6uOi3LQbGTbGTNrW%2BVIdyBZUAgTKZWYRg9vTQQky0DwRoa7y7civ475tOCjIBvRM2g%2FYf4HU1id39N7WYJB46bFrCn2SW7%2FWC%2F%2BfR4CCUXCZH8xikpy4Dv3RugWgKsPrdU8m6sRIapHykcaCtKojErmfHBfG5nPEXmeTeNb%2FdXxqCRFwcZ%2Bvjb53AuTDgN5kTDpX4YD6NkI%2F35xck3XzLBbZsi6ipvEvUdk23JxhiYQfzFFhgXs2GD1%2BSL9GBZMBfRqpMqTOrB4SaSfNGleAEcMb6H%2BoF%2FLoPdp8jcUGQL0heD24Wjy7GeuzW6PNwKe7%2Bdzc9ZwMWTV6F4vjDJneu%2BBjqkAWgJDFSCoerXInBmMmirAd8ykAhvFHP7RsRzpPEeu3yhnKi4FK0b72Y0WcZhuPrDmJ36Rtzx6YMf6O3s43lTLCQ8FranmOHH4yv83c7avt0EqIiYNSrn6%2B1tdQiw96LE1LgZxt552o7BIZ1a8kcoKLQp4%2B%2BpeIdi8rgPsbUJnIDimIojg6Zged0CQgiQ1vsT8BjIme3TvVQBbOO16hA%2BKqPNN72p&X-Amz-Signature=040a91d67fa01f6948136dd5f488755fca784b92d79edf455c21b9c142b9febf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDUTCJX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCiBOC4rLqrO7lDCPetYVNcAwgvUoDQwzx%2FTDwwlQVDOwIhAKVClDH85IL0Og%2FNliIC6rdYwFvtoTJuhVJybzqVSPmPKv8DCHcQABoMNjM3NDIzMTgzODA1IgzeUPl6olLDEqz4hxcq3APIVq%2BjtMo20S7KHP%2F%2FBWup8qfvk2OES0HZPfMXe8UgizU3fzyEugmPhjcuDIG3z83QXVxQv7AXBjbzFINRKWuqHHG6suzW3UdO6RYUJwErpzEbKHwQQQxcQtXiF5duVt3uqdfP48g2suAiXcbMrx3rchM%2FaNM0kv3PBnT5CZcbHKbeo1XxAMd8EpxZoDGPMOMKuTCo8XDKjmfkvzVmMaSVL%2BnvJt%2FIeLLG3diEn1K5%2FnanL9nDMz8DOxq2CPLEszMf5r2ob3AqHFvuxN4zaEaG5%2FAcrnqNv%2BMqT3EJtK1G5c6uOi3LQbGTbGTNrW%2BVIdyBZUAgTKZWYRg9vTQQky0DwRoa7y7civ475tOCjIBvRM2g%2FYf4HU1id39N7WYJB46bFrCn2SW7%2FWC%2F%2BfR4CCUXCZH8xikpy4Dv3RugWgKsPrdU8m6sRIapHykcaCtKojErmfHBfG5nPEXmeTeNb%2FdXxqCRFwcZ%2Bvjb53AuTDgN5kTDpX4YD6NkI%2F35xck3XzLBbZsi6ipvEvUdk23JxhiYQfzFFhgXs2GD1%2BSL9GBZMBfRqpMqTOrB4SaSfNGleAEcMb6H%2BoF%2FLoPdp8jcUGQL0heD24Wjy7GeuzW6PNwKe7%2Bdzc9ZwMWTV6F4vjDJneu%2BBjqkAWgJDFSCoerXInBmMmirAd8ykAhvFHP7RsRzpPEeu3yhnKi4FK0b72Y0WcZhuPrDmJ36Rtzx6YMf6O3s43lTLCQ8FranmOHH4yv83c7avt0EqIiYNSrn6%2B1tdQiw96LE1LgZxt552o7BIZ1a8kcoKLQp4%2B%2BpeIdi8rgPsbUJnIDimIojg6Zged0CQgiQ1vsT8BjIme3TvVQBbOO16hA%2BKqPNN72p&X-Amz-Signature=53a173c369b71f063fd6acb3a5b6d6143a2f0abf9ec87854230723554ce1eebd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDUTCJX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCiBOC4rLqrO7lDCPetYVNcAwgvUoDQwzx%2FTDwwlQVDOwIhAKVClDH85IL0Og%2FNliIC6rdYwFvtoTJuhVJybzqVSPmPKv8DCHcQABoMNjM3NDIzMTgzODA1IgzeUPl6olLDEqz4hxcq3APIVq%2BjtMo20S7KHP%2F%2FBWup8qfvk2OES0HZPfMXe8UgizU3fzyEugmPhjcuDIG3z83QXVxQv7AXBjbzFINRKWuqHHG6suzW3UdO6RYUJwErpzEbKHwQQQxcQtXiF5duVt3uqdfP48g2suAiXcbMrx3rchM%2FaNM0kv3PBnT5CZcbHKbeo1XxAMd8EpxZoDGPMOMKuTCo8XDKjmfkvzVmMaSVL%2BnvJt%2FIeLLG3diEn1K5%2FnanL9nDMz8DOxq2CPLEszMf5r2ob3AqHFvuxN4zaEaG5%2FAcrnqNv%2BMqT3EJtK1G5c6uOi3LQbGTbGTNrW%2BVIdyBZUAgTKZWYRg9vTQQky0DwRoa7y7civ475tOCjIBvRM2g%2FYf4HU1id39N7WYJB46bFrCn2SW7%2FWC%2F%2BfR4CCUXCZH8xikpy4Dv3RugWgKsPrdU8m6sRIapHykcaCtKojErmfHBfG5nPEXmeTeNb%2FdXxqCRFwcZ%2Bvjb53AuTDgN5kTDpX4YD6NkI%2F35xck3XzLBbZsi6ipvEvUdk23JxhiYQfzFFhgXs2GD1%2BSL9GBZMBfRqpMqTOrB4SaSfNGleAEcMb6H%2BoF%2FLoPdp8jcUGQL0heD24Wjy7GeuzW6PNwKe7%2Bdzc9ZwMWTV6F4vjDJneu%2BBjqkAWgJDFSCoerXInBmMmirAd8ykAhvFHP7RsRzpPEeu3yhnKi4FK0b72Y0WcZhuPrDmJ36Rtzx6YMf6O3s43lTLCQ8FranmOHH4yv83c7avt0EqIiYNSrn6%2B1tdQiw96LE1LgZxt552o7BIZ1a8kcoKLQp4%2B%2BpeIdi8rgPsbUJnIDimIojg6Zged0CQgiQ1vsT8BjIme3TvVQBbOO16hA%2BKqPNN72p&X-Amz-Signature=8d423e8e13f7bf3410b13b7ca921be41ae18bed0ac3147fae9a7e478d3dd4044&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDUTCJX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCiBOC4rLqrO7lDCPetYVNcAwgvUoDQwzx%2FTDwwlQVDOwIhAKVClDH85IL0Og%2FNliIC6rdYwFvtoTJuhVJybzqVSPmPKv8DCHcQABoMNjM3NDIzMTgzODA1IgzeUPl6olLDEqz4hxcq3APIVq%2BjtMo20S7KHP%2F%2FBWup8qfvk2OES0HZPfMXe8UgizU3fzyEugmPhjcuDIG3z83QXVxQv7AXBjbzFINRKWuqHHG6suzW3UdO6RYUJwErpzEbKHwQQQxcQtXiF5duVt3uqdfP48g2suAiXcbMrx3rchM%2FaNM0kv3PBnT5CZcbHKbeo1XxAMd8EpxZoDGPMOMKuTCo8XDKjmfkvzVmMaSVL%2BnvJt%2FIeLLG3diEn1K5%2FnanL9nDMz8DOxq2CPLEszMf5r2ob3AqHFvuxN4zaEaG5%2FAcrnqNv%2BMqT3EJtK1G5c6uOi3LQbGTbGTNrW%2BVIdyBZUAgTKZWYRg9vTQQky0DwRoa7y7civ475tOCjIBvRM2g%2FYf4HU1id39N7WYJB46bFrCn2SW7%2FWC%2F%2BfR4CCUXCZH8xikpy4Dv3RugWgKsPrdU8m6sRIapHykcaCtKojErmfHBfG5nPEXmeTeNb%2FdXxqCRFwcZ%2Bvjb53AuTDgN5kTDpX4YD6NkI%2F35xck3XzLBbZsi6ipvEvUdk23JxhiYQfzFFhgXs2GD1%2BSL9GBZMBfRqpMqTOrB4SaSfNGleAEcMb6H%2BoF%2FLoPdp8jcUGQL0heD24Wjy7GeuzW6PNwKe7%2Bdzc9ZwMWTV6F4vjDJneu%2BBjqkAWgJDFSCoerXInBmMmirAd8ykAhvFHP7RsRzpPEeu3yhnKi4FK0b72Y0WcZhuPrDmJ36Rtzx6YMf6O3s43lTLCQ8FranmOHH4yv83c7avt0EqIiYNSrn6%2B1tdQiw96LE1LgZxt552o7BIZ1a8kcoKLQp4%2B%2BpeIdi8rgPsbUJnIDimIojg6Zged0CQgiQ1vsT8BjIme3TvVQBbOO16hA%2BKqPNN72p&X-Amz-Signature=e84b5b479874a30dcecd6be090c0a0ba61e657a167a770bb2a8d5ff773e544fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
