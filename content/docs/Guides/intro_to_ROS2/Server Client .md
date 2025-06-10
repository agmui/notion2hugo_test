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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZW4YHBD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7knxvkPmzmAxZmQ0IKyTw9Xh8%2FnrtF1sWdMWAi40MwIgJ21%2BTU22RdmzBG5ncQgdBSS9O8hR7kRMYGf%2BYxTfxhwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTl38gcNpfmq5%2BHYSrcA9UlMfXNAK7A8oNb1mcWRAk4sWdyWwEKXdBq%2FfJsZDmsmX%2FkkaiW1sEMHEYZddF0K0rriR%2F3CF4Y%2Bx8kRM%2Bd64xaA47XgwEQ5GhVYwPfbBXYp3WGttnzPOthVyjgw9F%2FLQyZyt6DABq5yhTJDEGpwJNRVn57k0pLss27yidEt9BIZ33XfLcOh7eDPHRvfZavNkIYlbz4YSEfkwx%2FA4%2Fday%2BLcDcyXLX3d6SylqTl7j3iUU7gfVeFkJCDBA0aEKSZw4g%2BVVCwbgiU%2BDdRC8jTlPi%2Bg5gzzN%2FWWoXZYvC4stsrUs2L0C03p4Y5SWIXM9FU2SdFvkz3l1kl5g%2BTLdbEPd%2Beuo7DXiwoJwFxfbq%2BjLpJRDdV8qGwH42xuDgN1BxsmuwZmrmZyD%2FBtPCPvCqmpwmmxfoBd%2Biz3iM0bZBeWo73BV89OSYC0kVEM3LLkRy%2FnAYcJLbFpxVehbtF5kWJ2p%2FuoSgYEG7XXGhSi%2Fy95YprywKUmp3z1DHw2IUalfuVQHEnoCSQTN%2FH5vw14srqDQf3in9xmx9puafuBDqc8b9twi%2BlyRHpKB3kLwlUMYOUcq%2F6aQDdNZHk0lvG9jHVVbixRKXFtBPqd8zH5PT9%2Bmm%2BkD5HBZ0rX%2B%2BMSO%2FIMLS%2BoMIGOqUBMyuN5Q73S2lAqYgDaQTSxJv3FlURFPUCw9CA0sJmopLNjTycKQoCR%2F8r3AuUwbWaYPh1p9ROCaPUjqhLYWCjQLacvtR7Oojj6UYzfwDKdpYp%2BvF0GM%2FORMKALtWqDaf5pjbUdhT2Xahhp2iLcSzySfxJJvpChYI3%2BGaQpyY5S%2BVU9kudOvK5LYyisA71fh0yl2LlvKSJDeFnvXf%2F5yhtiW0ZfkJi&X-Amz-Signature=128ac713dedaf7fbfef59975e8a1f4da4bce09bf17b1bffacade093ba7ab85eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZW4YHBD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7knxvkPmzmAxZmQ0IKyTw9Xh8%2FnrtF1sWdMWAi40MwIgJ21%2BTU22RdmzBG5ncQgdBSS9O8hR7kRMYGf%2BYxTfxhwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTl38gcNpfmq5%2BHYSrcA9UlMfXNAK7A8oNb1mcWRAk4sWdyWwEKXdBq%2FfJsZDmsmX%2FkkaiW1sEMHEYZddF0K0rriR%2F3CF4Y%2Bx8kRM%2Bd64xaA47XgwEQ5GhVYwPfbBXYp3WGttnzPOthVyjgw9F%2FLQyZyt6DABq5yhTJDEGpwJNRVn57k0pLss27yidEt9BIZ33XfLcOh7eDPHRvfZavNkIYlbz4YSEfkwx%2FA4%2Fday%2BLcDcyXLX3d6SylqTl7j3iUU7gfVeFkJCDBA0aEKSZw4g%2BVVCwbgiU%2BDdRC8jTlPi%2Bg5gzzN%2FWWoXZYvC4stsrUs2L0C03p4Y5SWIXM9FU2SdFvkz3l1kl5g%2BTLdbEPd%2Beuo7DXiwoJwFxfbq%2BjLpJRDdV8qGwH42xuDgN1BxsmuwZmrmZyD%2FBtPCPvCqmpwmmxfoBd%2Biz3iM0bZBeWo73BV89OSYC0kVEM3LLkRy%2FnAYcJLbFpxVehbtF5kWJ2p%2FuoSgYEG7XXGhSi%2Fy95YprywKUmp3z1DHw2IUalfuVQHEnoCSQTN%2FH5vw14srqDQf3in9xmx9puafuBDqc8b9twi%2BlyRHpKB3kLwlUMYOUcq%2F6aQDdNZHk0lvG9jHVVbixRKXFtBPqd8zH5PT9%2Bmm%2BkD5HBZ0rX%2B%2BMSO%2FIMLS%2BoMIGOqUBMyuN5Q73S2lAqYgDaQTSxJv3FlURFPUCw9CA0sJmopLNjTycKQoCR%2F8r3AuUwbWaYPh1p9ROCaPUjqhLYWCjQLacvtR7Oojj6UYzfwDKdpYp%2BvF0GM%2FORMKALtWqDaf5pjbUdhT2Xahhp2iLcSzySfxJJvpChYI3%2BGaQpyY5S%2BVU9kudOvK5LYyisA71fh0yl2LlvKSJDeFnvXf%2F5yhtiW0ZfkJi&X-Amz-Signature=86bec39302ae2ab644cdceae2571007848e137c3ec3bed89f5d4c948949180f5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZW4YHBD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7knxvkPmzmAxZmQ0IKyTw9Xh8%2FnrtF1sWdMWAi40MwIgJ21%2BTU22RdmzBG5ncQgdBSS9O8hR7kRMYGf%2BYxTfxhwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTl38gcNpfmq5%2BHYSrcA9UlMfXNAK7A8oNb1mcWRAk4sWdyWwEKXdBq%2FfJsZDmsmX%2FkkaiW1sEMHEYZddF0K0rriR%2F3CF4Y%2Bx8kRM%2Bd64xaA47XgwEQ5GhVYwPfbBXYp3WGttnzPOthVyjgw9F%2FLQyZyt6DABq5yhTJDEGpwJNRVn57k0pLss27yidEt9BIZ33XfLcOh7eDPHRvfZavNkIYlbz4YSEfkwx%2FA4%2Fday%2BLcDcyXLX3d6SylqTl7j3iUU7gfVeFkJCDBA0aEKSZw4g%2BVVCwbgiU%2BDdRC8jTlPi%2Bg5gzzN%2FWWoXZYvC4stsrUs2L0C03p4Y5SWIXM9FU2SdFvkz3l1kl5g%2BTLdbEPd%2Beuo7DXiwoJwFxfbq%2BjLpJRDdV8qGwH42xuDgN1BxsmuwZmrmZyD%2FBtPCPvCqmpwmmxfoBd%2Biz3iM0bZBeWo73BV89OSYC0kVEM3LLkRy%2FnAYcJLbFpxVehbtF5kWJ2p%2FuoSgYEG7XXGhSi%2Fy95YprywKUmp3z1DHw2IUalfuVQHEnoCSQTN%2FH5vw14srqDQf3in9xmx9puafuBDqc8b9twi%2BlyRHpKB3kLwlUMYOUcq%2F6aQDdNZHk0lvG9jHVVbixRKXFtBPqd8zH5PT9%2Bmm%2BkD5HBZ0rX%2B%2BMSO%2FIMLS%2BoMIGOqUBMyuN5Q73S2lAqYgDaQTSxJv3FlURFPUCw9CA0sJmopLNjTycKQoCR%2F8r3AuUwbWaYPh1p9ROCaPUjqhLYWCjQLacvtR7Oojj6UYzfwDKdpYp%2BvF0GM%2FORMKALtWqDaf5pjbUdhT2Xahhp2iLcSzySfxJJvpChYI3%2BGaQpyY5S%2BVU9kudOvK5LYyisA71fh0yl2LlvKSJDeFnvXf%2F5yhtiW0ZfkJi&X-Amz-Signature=6b26303328ea96f8ee42ef6f3eea6fd41a8bff42edee762f75c580b2ced49618&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZW4YHBD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7knxvkPmzmAxZmQ0IKyTw9Xh8%2FnrtF1sWdMWAi40MwIgJ21%2BTU22RdmzBG5ncQgdBSS9O8hR7kRMYGf%2BYxTfxhwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTl38gcNpfmq5%2BHYSrcA9UlMfXNAK7A8oNb1mcWRAk4sWdyWwEKXdBq%2FfJsZDmsmX%2FkkaiW1sEMHEYZddF0K0rriR%2F3CF4Y%2Bx8kRM%2Bd64xaA47XgwEQ5GhVYwPfbBXYp3WGttnzPOthVyjgw9F%2FLQyZyt6DABq5yhTJDEGpwJNRVn57k0pLss27yidEt9BIZ33XfLcOh7eDPHRvfZavNkIYlbz4YSEfkwx%2FA4%2Fday%2BLcDcyXLX3d6SylqTl7j3iUU7gfVeFkJCDBA0aEKSZw4g%2BVVCwbgiU%2BDdRC8jTlPi%2Bg5gzzN%2FWWoXZYvC4stsrUs2L0C03p4Y5SWIXM9FU2SdFvkz3l1kl5g%2BTLdbEPd%2Beuo7DXiwoJwFxfbq%2BjLpJRDdV8qGwH42xuDgN1BxsmuwZmrmZyD%2FBtPCPvCqmpwmmxfoBd%2Biz3iM0bZBeWo73BV89OSYC0kVEM3LLkRy%2FnAYcJLbFpxVehbtF5kWJ2p%2FuoSgYEG7XXGhSi%2Fy95YprywKUmp3z1DHw2IUalfuVQHEnoCSQTN%2FH5vw14srqDQf3in9xmx9puafuBDqc8b9twi%2BlyRHpKB3kLwlUMYOUcq%2F6aQDdNZHk0lvG9jHVVbixRKXFtBPqd8zH5PT9%2Bmm%2BkD5HBZ0rX%2B%2BMSO%2FIMLS%2BoMIGOqUBMyuN5Q73S2lAqYgDaQTSxJv3FlURFPUCw9CA0sJmopLNjTycKQoCR%2F8r3AuUwbWaYPh1p9ROCaPUjqhLYWCjQLacvtR7Oojj6UYzfwDKdpYp%2BvF0GM%2FORMKALtWqDaf5pjbUdhT2Xahhp2iLcSzySfxJJvpChYI3%2BGaQpyY5S%2BVU9kudOvK5LYyisA71fh0yl2LlvKSJDeFnvXf%2F5yhtiW0ZfkJi&X-Amz-Signature=0a1df593c92b5ca85944d315657f520d09964d50fe6df1d14d6e5ae386d20256&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZW4YHBD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7knxvkPmzmAxZmQ0IKyTw9Xh8%2FnrtF1sWdMWAi40MwIgJ21%2BTU22RdmzBG5ncQgdBSS9O8hR7kRMYGf%2BYxTfxhwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTl38gcNpfmq5%2BHYSrcA9UlMfXNAK7A8oNb1mcWRAk4sWdyWwEKXdBq%2FfJsZDmsmX%2FkkaiW1sEMHEYZddF0K0rriR%2F3CF4Y%2Bx8kRM%2Bd64xaA47XgwEQ5GhVYwPfbBXYp3WGttnzPOthVyjgw9F%2FLQyZyt6DABq5yhTJDEGpwJNRVn57k0pLss27yidEt9BIZ33XfLcOh7eDPHRvfZavNkIYlbz4YSEfkwx%2FA4%2Fday%2BLcDcyXLX3d6SylqTl7j3iUU7gfVeFkJCDBA0aEKSZw4g%2BVVCwbgiU%2BDdRC8jTlPi%2Bg5gzzN%2FWWoXZYvC4stsrUs2L0C03p4Y5SWIXM9FU2SdFvkz3l1kl5g%2BTLdbEPd%2Beuo7DXiwoJwFxfbq%2BjLpJRDdV8qGwH42xuDgN1BxsmuwZmrmZyD%2FBtPCPvCqmpwmmxfoBd%2Biz3iM0bZBeWo73BV89OSYC0kVEM3LLkRy%2FnAYcJLbFpxVehbtF5kWJ2p%2FuoSgYEG7XXGhSi%2Fy95YprywKUmp3z1DHw2IUalfuVQHEnoCSQTN%2FH5vw14srqDQf3in9xmx9puafuBDqc8b9twi%2BlyRHpKB3kLwlUMYOUcq%2F6aQDdNZHk0lvG9jHVVbixRKXFtBPqd8zH5PT9%2Bmm%2BkD5HBZ0rX%2B%2BMSO%2FIMLS%2BoMIGOqUBMyuN5Q73S2lAqYgDaQTSxJv3FlURFPUCw9CA0sJmopLNjTycKQoCR%2F8r3AuUwbWaYPh1p9ROCaPUjqhLYWCjQLacvtR7Oojj6UYzfwDKdpYp%2BvF0GM%2FORMKALtWqDaf5pjbUdhT2Xahhp2iLcSzySfxJJvpChYI3%2BGaQpyY5S%2BVU9kudOvK5LYyisA71fh0yl2LlvKSJDeFnvXf%2F5yhtiW0ZfkJi&X-Amz-Signature=ffb1bcc7a92b865cb51e7e49af43a9ead63f29705a2c2d062b252bfdd91bb59b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
