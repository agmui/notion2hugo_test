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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVV2FZ4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGahOTDudisvdpXS6tMalqhFl3UCPKfIvpsvqd5LTrRcAiEA5l6iHO1pQKm1FCjeL1tJbzmQPhhGfczIDaTf2eHkTSQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiYwjJGYuvTOJFp8yrcAxA4%2Bz0NWaYF68jyBfx03GWfrN%2BJhd%2BamN0fXmEu3mHqi1bCpR%2BBbxHWHXtFt5lfJ2uhdUGdLyuDNOV%2FAL5LmpORBESmoelLxNBJMMSg2zV%2F2blNjSOtcS72ac25ihqJb%2B1XLm2%2Bq%2B6nkb6IOmF%2BUvjE%2B%2F71VD2duh0HyK0mh47sPCHkBKjhgS07E80HnXkylkaMTzpIGr89XZ6Pv6kmxP1hagzzY%2FLZc77YVFhWgSBbv0OXEDa27Gt8vJQc1cTZAUuOZopEWgv9LTi9VLkFnYctBXV21w%2FtMUq9ntgROESApJRuTvyryWUTe83foc5VNMCO0f4ALSp8wdiApT65VEricwcp5cso3ppWZedA%2B%2Fq%2B8E%2FGW7jbWW2cCIFgwOcQlaroJbgdmzC%2F%2FTIJkaJT4LgQ0ucU7Tam4TLQmvWHm0zUkGqyLgHoD85kuKxU9NfPVZotmsA9oJDR6%2FVC%2BZVc44fDZBkmqODkjYjCv0sQ9hEvQzVDhsLmzSKYafZ35bZasDaguo3x1HwhaTLTvC1B7Jrw0H%2BeLS5%2B0PU8d%2BkxD1gj2UWPQIspctWeJD%2FJb1jZ3rF0zeSVTxdW5%2Fe5Ic44DRGxfyP6yOfR%2F5hcMlpPbIa%2FtQg47ZtxuK47uxC2MKnMpsAGOqUBAH1tqGeke2avpjMVxwbUpRrmhOhnKgGqMLqbJb79o5%2FvulI4WfJOKwvaCr8kyKL2ZiRjkCS3SKR7NEF%2Fe4%2FuqSWwRQDO3GHToDOhzbR415b%2BYzLBP1boYP%2Bg1lB7ZGn3gl3RTgS3RFH9bPpPAp9opxAuCmgMPf7JGdBodVKlzbBTGKg74xIiqVkS%2BCGBrytZB85vnfDpn3r%2BwAeP9P6CvNx6DpyB&X-Amz-Signature=e7e74b847b9a9710e648f097c8f1f47aa42935d0bfc7e650b7a1599eb64d1e66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVV2FZ4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGahOTDudisvdpXS6tMalqhFl3UCPKfIvpsvqd5LTrRcAiEA5l6iHO1pQKm1FCjeL1tJbzmQPhhGfczIDaTf2eHkTSQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiYwjJGYuvTOJFp8yrcAxA4%2Bz0NWaYF68jyBfx03GWfrN%2BJhd%2BamN0fXmEu3mHqi1bCpR%2BBbxHWHXtFt5lfJ2uhdUGdLyuDNOV%2FAL5LmpORBESmoelLxNBJMMSg2zV%2F2blNjSOtcS72ac25ihqJb%2B1XLm2%2Bq%2B6nkb6IOmF%2BUvjE%2B%2F71VD2duh0HyK0mh47sPCHkBKjhgS07E80HnXkylkaMTzpIGr89XZ6Pv6kmxP1hagzzY%2FLZc77YVFhWgSBbv0OXEDa27Gt8vJQc1cTZAUuOZopEWgv9LTi9VLkFnYctBXV21w%2FtMUq9ntgROESApJRuTvyryWUTe83foc5VNMCO0f4ALSp8wdiApT65VEricwcp5cso3ppWZedA%2B%2Fq%2B8E%2FGW7jbWW2cCIFgwOcQlaroJbgdmzC%2F%2FTIJkaJT4LgQ0ucU7Tam4TLQmvWHm0zUkGqyLgHoD85kuKxU9NfPVZotmsA9oJDR6%2FVC%2BZVc44fDZBkmqODkjYjCv0sQ9hEvQzVDhsLmzSKYafZ35bZasDaguo3x1HwhaTLTvC1B7Jrw0H%2BeLS5%2B0PU8d%2BkxD1gj2UWPQIspctWeJD%2FJb1jZ3rF0zeSVTxdW5%2Fe5Ic44DRGxfyP6yOfR%2F5hcMlpPbIa%2FtQg47ZtxuK47uxC2MKnMpsAGOqUBAH1tqGeke2avpjMVxwbUpRrmhOhnKgGqMLqbJb79o5%2FvulI4WfJOKwvaCr8kyKL2ZiRjkCS3SKR7NEF%2Fe4%2FuqSWwRQDO3GHToDOhzbR415b%2BYzLBP1boYP%2Bg1lB7ZGn3gl3RTgS3RFH9bPpPAp9opxAuCmgMPf7JGdBodVKlzbBTGKg74xIiqVkS%2BCGBrytZB85vnfDpn3r%2BwAeP9P6CvNx6DpyB&X-Amz-Signature=e16e86a488e4678df588564d52624b797c5e61a31e8425ee94bfcee09eec1796&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVV2FZ4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGahOTDudisvdpXS6tMalqhFl3UCPKfIvpsvqd5LTrRcAiEA5l6iHO1pQKm1FCjeL1tJbzmQPhhGfczIDaTf2eHkTSQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiYwjJGYuvTOJFp8yrcAxA4%2Bz0NWaYF68jyBfx03GWfrN%2BJhd%2BamN0fXmEu3mHqi1bCpR%2BBbxHWHXtFt5lfJ2uhdUGdLyuDNOV%2FAL5LmpORBESmoelLxNBJMMSg2zV%2F2blNjSOtcS72ac25ihqJb%2B1XLm2%2Bq%2B6nkb6IOmF%2BUvjE%2B%2F71VD2duh0HyK0mh47sPCHkBKjhgS07E80HnXkylkaMTzpIGr89XZ6Pv6kmxP1hagzzY%2FLZc77YVFhWgSBbv0OXEDa27Gt8vJQc1cTZAUuOZopEWgv9LTi9VLkFnYctBXV21w%2FtMUq9ntgROESApJRuTvyryWUTe83foc5VNMCO0f4ALSp8wdiApT65VEricwcp5cso3ppWZedA%2B%2Fq%2B8E%2FGW7jbWW2cCIFgwOcQlaroJbgdmzC%2F%2FTIJkaJT4LgQ0ucU7Tam4TLQmvWHm0zUkGqyLgHoD85kuKxU9NfPVZotmsA9oJDR6%2FVC%2BZVc44fDZBkmqODkjYjCv0sQ9hEvQzVDhsLmzSKYafZ35bZasDaguo3x1HwhaTLTvC1B7Jrw0H%2BeLS5%2B0PU8d%2BkxD1gj2UWPQIspctWeJD%2FJb1jZ3rF0zeSVTxdW5%2Fe5Ic44DRGxfyP6yOfR%2F5hcMlpPbIa%2FtQg47ZtxuK47uxC2MKnMpsAGOqUBAH1tqGeke2avpjMVxwbUpRrmhOhnKgGqMLqbJb79o5%2FvulI4WfJOKwvaCr8kyKL2ZiRjkCS3SKR7NEF%2Fe4%2FuqSWwRQDO3GHToDOhzbR415b%2BYzLBP1boYP%2Bg1lB7ZGn3gl3RTgS3RFH9bPpPAp9opxAuCmgMPf7JGdBodVKlzbBTGKg74xIiqVkS%2BCGBrytZB85vnfDpn3r%2BwAeP9P6CvNx6DpyB&X-Amz-Signature=73e9bbbd93b40128ce060868b8029ef4473f753a0e4992fc1a862f372eb1611e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVV2FZ4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGahOTDudisvdpXS6tMalqhFl3UCPKfIvpsvqd5LTrRcAiEA5l6iHO1pQKm1FCjeL1tJbzmQPhhGfczIDaTf2eHkTSQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiYwjJGYuvTOJFp8yrcAxA4%2Bz0NWaYF68jyBfx03GWfrN%2BJhd%2BamN0fXmEu3mHqi1bCpR%2BBbxHWHXtFt5lfJ2uhdUGdLyuDNOV%2FAL5LmpORBESmoelLxNBJMMSg2zV%2F2blNjSOtcS72ac25ihqJb%2B1XLm2%2Bq%2B6nkb6IOmF%2BUvjE%2B%2F71VD2duh0HyK0mh47sPCHkBKjhgS07E80HnXkylkaMTzpIGr89XZ6Pv6kmxP1hagzzY%2FLZc77YVFhWgSBbv0OXEDa27Gt8vJQc1cTZAUuOZopEWgv9LTi9VLkFnYctBXV21w%2FtMUq9ntgROESApJRuTvyryWUTe83foc5VNMCO0f4ALSp8wdiApT65VEricwcp5cso3ppWZedA%2B%2Fq%2B8E%2FGW7jbWW2cCIFgwOcQlaroJbgdmzC%2F%2FTIJkaJT4LgQ0ucU7Tam4TLQmvWHm0zUkGqyLgHoD85kuKxU9NfPVZotmsA9oJDR6%2FVC%2BZVc44fDZBkmqODkjYjCv0sQ9hEvQzVDhsLmzSKYafZ35bZasDaguo3x1HwhaTLTvC1B7Jrw0H%2BeLS5%2B0PU8d%2BkxD1gj2UWPQIspctWeJD%2FJb1jZ3rF0zeSVTxdW5%2Fe5Ic44DRGxfyP6yOfR%2F5hcMlpPbIa%2FtQg47ZtxuK47uxC2MKnMpsAGOqUBAH1tqGeke2avpjMVxwbUpRrmhOhnKgGqMLqbJb79o5%2FvulI4WfJOKwvaCr8kyKL2ZiRjkCS3SKR7NEF%2Fe4%2FuqSWwRQDO3GHToDOhzbR415b%2BYzLBP1boYP%2Bg1lB7ZGn3gl3RTgS3RFH9bPpPAp9opxAuCmgMPf7JGdBodVKlzbBTGKg74xIiqVkS%2BCGBrytZB85vnfDpn3r%2BwAeP9P6CvNx6DpyB&X-Amz-Signature=7f2d9c8bb26ef8968f4679489847835d20bafe7b728d3f1fadfa8aeb3c5bd202&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVV2FZ4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGahOTDudisvdpXS6tMalqhFl3UCPKfIvpsvqd5LTrRcAiEA5l6iHO1pQKm1FCjeL1tJbzmQPhhGfczIDaTf2eHkTSQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiYwjJGYuvTOJFp8yrcAxA4%2Bz0NWaYF68jyBfx03GWfrN%2BJhd%2BamN0fXmEu3mHqi1bCpR%2BBbxHWHXtFt5lfJ2uhdUGdLyuDNOV%2FAL5LmpORBESmoelLxNBJMMSg2zV%2F2blNjSOtcS72ac25ihqJb%2B1XLm2%2Bq%2B6nkb6IOmF%2BUvjE%2B%2F71VD2duh0HyK0mh47sPCHkBKjhgS07E80HnXkylkaMTzpIGr89XZ6Pv6kmxP1hagzzY%2FLZc77YVFhWgSBbv0OXEDa27Gt8vJQc1cTZAUuOZopEWgv9LTi9VLkFnYctBXV21w%2FtMUq9ntgROESApJRuTvyryWUTe83foc5VNMCO0f4ALSp8wdiApT65VEricwcp5cso3ppWZedA%2B%2Fq%2B8E%2FGW7jbWW2cCIFgwOcQlaroJbgdmzC%2F%2FTIJkaJT4LgQ0ucU7Tam4TLQmvWHm0zUkGqyLgHoD85kuKxU9NfPVZotmsA9oJDR6%2FVC%2BZVc44fDZBkmqODkjYjCv0sQ9hEvQzVDhsLmzSKYafZ35bZasDaguo3x1HwhaTLTvC1B7Jrw0H%2BeLS5%2B0PU8d%2BkxD1gj2UWPQIspctWeJD%2FJb1jZ3rF0zeSVTxdW5%2Fe5Ic44DRGxfyP6yOfR%2F5hcMlpPbIa%2FtQg47ZtxuK47uxC2MKnMpsAGOqUBAH1tqGeke2avpjMVxwbUpRrmhOhnKgGqMLqbJb79o5%2FvulI4WfJOKwvaCr8kyKL2ZiRjkCS3SKR7NEF%2Fe4%2FuqSWwRQDO3GHToDOhzbR415b%2BYzLBP1boYP%2Bg1lB7ZGn3gl3RTgS3RFH9bPpPAp9opxAuCmgMPf7JGdBodVKlzbBTGKg74xIiqVkS%2BCGBrytZB85vnfDpn3r%2BwAeP9P6CvNx6DpyB&X-Amz-Signature=df4073ed5d54d25837b701367c454e732ea3814054a774a08b191973c952563c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
