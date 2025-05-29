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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XOYLYGW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHI%2BNloIvEyVeEHcQqlNr5LpKX9UfZf4OVobeYZuszmAiEA%2FY%2Bb00uBu%2B8YK5YEqo09UrpmS5i21yO5Hu9uOJOwseIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6O9EBQ%2BC6hmR8jZSrcAzh6YBCTi0iI%2BU%2FazV88Btz997KDfjabYpk%2FcBq%2BV2ZFeR7%2FcTXNHIkfodNSnDHrINHUvWVeKV5yQYIS4h69i6SRtPmSfAH3kTnzwylVkHDprclWnmkUzlqhE2osyW0O5xuJOqqJIwCrUcABeFpyxadDGcbNFWbW1qYSwXw%2BE%2BuPBwXaLAnuTotIAOqu4i0bJmhc9uGFGLZj3SV0Osa459lJ0FUriEkseMUCB9D18dGqqNJ5pa7uALhN1nq0Of9X6nWbHqwxlSk3ZDqWye%2BtqJUAfswjTZg2ykfzy7pohJxhlgQQBYmzKJahNZgzceIXNaXRCzGeRW4d6qCAnfKsojJQ8HfQEM6YB6f8oJq0y5pmEUDNecCAEhmqZ1lHxNhdETDd76PK4TOraNjU%2FCAGtyUVl2CxOUODst%2BdMinIpnqE4mCbJXfsMgmr7hwWaM0220BKyZ15jbsFTzNvd44Lc5Je1sCMDHoItO2zMqNkzT%2BRG687vBxGlBG325a%2FHRMhM7WO21fQGbBTVpbR7Rqpw%2BgsTlzfBdQ1kcd4OjD5EcjaqOWtnn1P7SGwdTnglBsqhSs8ns2NR3rSyr82jv9BlhYHUwPU3jdztWbh%2BxVtVBVmz7a%2BUsmIbeVqFTShMOSv38EGOqUBJQHcrqwTOl%2Br%2FWr6nxkzq%2FeS3oMWyANzLCy8GpPCgkE%2Brtl%2Fc5bR8ewkHFSCd3BtCJseMcvYe%2F1FUtzs2BgAZ4vEYFZ7Ey0%2FV0GQ9fnz3CYjbBBrkGVLlz6xbZirH5vdBaNDyF5SaU9xgqEANg%2BNN5qmR0DUDyd5BCkV8fBnpeTS5uqt6UCQQ8X9wo9OBd8fK8xfOlNjkM4EviE7S3yDkEoCT8PZ&X-Amz-Signature=b9def05dffdc7f220f962d427f8f57ed33045ba0bce17312ce2923e657e88208&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XOYLYGW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHI%2BNloIvEyVeEHcQqlNr5LpKX9UfZf4OVobeYZuszmAiEA%2FY%2Bb00uBu%2B8YK5YEqo09UrpmS5i21yO5Hu9uOJOwseIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6O9EBQ%2BC6hmR8jZSrcAzh6YBCTi0iI%2BU%2FazV88Btz997KDfjabYpk%2FcBq%2BV2ZFeR7%2FcTXNHIkfodNSnDHrINHUvWVeKV5yQYIS4h69i6SRtPmSfAH3kTnzwylVkHDprclWnmkUzlqhE2osyW0O5xuJOqqJIwCrUcABeFpyxadDGcbNFWbW1qYSwXw%2BE%2BuPBwXaLAnuTotIAOqu4i0bJmhc9uGFGLZj3SV0Osa459lJ0FUriEkseMUCB9D18dGqqNJ5pa7uALhN1nq0Of9X6nWbHqwxlSk3ZDqWye%2BtqJUAfswjTZg2ykfzy7pohJxhlgQQBYmzKJahNZgzceIXNaXRCzGeRW4d6qCAnfKsojJQ8HfQEM6YB6f8oJq0y5pmEUDNecCAEhmqZ1lHxNhdETDd76PK4TOraNjU%2FCAGtyUVl2CxOUODst%2BdMinIpnqE4mCbJXfsMgmr7hwWaM0220BKyZ15jbsFTzNvd44Lc5Je1sCMDHoItO2zMqNkzT%2BRG687vBxGlBG325a%2FHRMhM7WO21fQGbBTVpbR7Rqpw%2BgsTlzfBdQ1kcd4OjD5EcjaqOWtnn1P7SGwdTnglBsqhSs8ns2NR3rSyr82jv9BlhYHUwPU3jdztWbh%2BxVtVBVmz7a%2BUsmIbeVqFTShMOSv38EGOqUBJQHcrqwTOl%2Br%2FWr6nxkzq%2FeS3oMWyANzLCy8GpPCgkE%2Brtl%2Fc5bR8ewkHFSCd3BtCJseMcvYe%2F1FUtzs2BgAZ4vEYFZ7Ey0%2FV0GQ9fnz3CYjbBBrkGVLlz6xbZirH5vdBaNDyF5SaU9xgqEANg%2BNN5qmR0DUDyd5BCkV8fBnpeTS5uqt6UCQQ8X9wo9OBd8fK8xfOlNjkM4EviE7S3yDkEoCT8PZ&X-Amz-Signature=b8e9b595592042d3cf2d775808befa7fee11ad435168dca1e785abf4840ec03a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XOYLYGW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHI%2BNloIvEyVeEHcQqlNr5LpKX9UfZf4OVobeYZuszmAiEA%2FY%2Bb00uBu%2B8YK5YEqo09UrpmS5i21yO5Hu9uOJOwseIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6O9EBQ%2BC6hmR8jZSrcAzh6YBCTi0iI%2BU%2FazV88Btz997KDfjabYpk%2FcBq%2BV2ZFeR7%2FcTXNHIkfodNSnDHrINHUvWVeKV5yQYIS4h69i6SRtPmSfAH3kTnzwylVkHDprclWnmkUzlqhE2osyW0O5xuJOqqJIwCrUcABeFpyxadDGcbNFWbW1qYSwXw%2BE%2BuPBwXaLAnuTotIAOqu4i0bJmhc9uGFGLZj3SV0Osa459lJ0FUriEkseMUCB9D18dGqqNJ5pa7uALhN1nq0Of9X6nWbHqwxlSk3ZDqWye%2BtqJUAfswjTZg2ykfzy7pohJxhlgQQBYmzKJahNZgzceIXNaXRCzGeRW4d6qCAnfKsojJQ8HfQEM6YB6f8oJq0y5pmEUDNecCAEhmqZ1lHxNhdETDd76PK4TOraNjU%2FCAGtyUVl2CxOUODst%2BdMinIpnqE4mCbJXfsMgmr7hwWaM0220BKyZ15jbsFTzNvd44Lc5Je1sCMDHoItO2zMqNkzT%2BRG687vBxGlBG325a%2FHRMhM7WO21fQGbBTVpbR7Rqpw%2BgsTlzfBdQ1kcd4OjD5EcjaqOWtnn1P7SGwdTnglBsqhSs8ns2NR3rSyr82jv9BlhYHUwPU3jdztWbh%2BxVtVBVmz7a%2BUsmIbeVqFTShMOSv38EGOqUBJQHcrqwTOl%2Br%2FWr6nxkzq%2FeS3oMWyANzLCy8GpPCgkE%2Brtl%2Fc5bR8ewkHFSCd3BtCJseMcvYe%2F1FUtzs2BgAZ4vEYFZ7Ey0%2FV0GQ9fnz3CYjbBBrkGVLlz6xbZirH5vdBaNDyF5SaU9xgqEANg%2BNN5qmR0DUDyd5BCkV8fBnpeTS5uqt6UCQQ8X9wo9OBd8fK8xfOlNjkM4EviE7S3yDkEoCT8PZ&X-Amz-Signature=078e234247541bace012fd68d031d6a20d004f5cd1579b98647520d4e9100acb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XOYLYGW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHI%2BNloIvEyVeEHcQqlNr5LpKX9UfZf4OVobeYZuszmAiEA%2FY%2Bb00uBu%2B8YK5YEqo09UrpmS5i21yO5Hu9uOJOwseIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6O9EBQ%2BC6hmR8jZSrcAzh6YBCTi0iI%2BU%2FazV88Btz997KDfjabYpk%2FcBq%2BV2ZFeR7%2FcTXNHIkfodNSnDHrINHUvWVeKV5yQYIS4h69i6SRtPmSfAH3kTnzwylVkHDprclWnmkUzlqhE2osyW0O5xuJOqqJIwCrUcABeFpyxadDGcbNFWbW1qYSwXw%2BE%2BuPBwXaLAnuTotIAOqu4i0bJmhc9uGFGLZj3SV0Osa459lJ0FUriEkseMUCB9D18dGqqNJ5pa7uALhN1nq0Of9X6nWbHqwxlSk3ZDqWye%2BtqJUAfswjTZg2ykfzy7pohJxhlgQQBYmzKJahNZgzceIXNaXRCzGeRW4d6qCAnfKsojJQ8HfQEM6YB6f8oJq0y5pmEUDNecCAEhmqZ1lHxNhdETDd76PK4TOraNjU%2FCAGtyUVl2CxOUODst%2BdMinIpnqE4mCbJXfsMgmr7hwWaM0220BKyZ15jbsFTzNvd44Lc5Je1sCMDHoItO2zMqNkzT%2BRG687vBxGlBG325a%2FHRMhM7WO21fQGbBTVpbR7Rqpw%2BgsTlzfBdQ1kcd4OjD5EcjaqOWtnn1P7SGwdTnglBsqhSs8ns2NR3rSyr82jv9BlhYHUwPU3jdztWbh%2BxVtVBVmz7a%2BUsmIbeVqFTShMOSv38EGOqUBJQHcrqwTOl%2Br%2FWr6nxkzq%2FeS3oMWyANzLCy8GpPCgkE%2Brtl%2Fc5bR8ewkHFSCd3BtCJseMcvYe%2F1FUtzs2BgAZ4vEYFZ7Ey0%2FV0GQ9fnz3CYjbBBrkGVLlz6xbZirH5vdBaNDyF5SaU9xgqEANg%2BNN5qmR0DUDyd5BCkV8fBnpeTS5uqt6UCQQ8X9wo9OBd8fK8xfOlNjkM4EviE7S3yDkEoCT8PZ&X-Amz-Signature=dbede86a75f0340956fcd1328524698a97c9755b19cec20e061e35c5102578ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XOYLYGW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHI%2BNloIvEyVeEHcQqlNr5LpKX9UfZf4OVobeYZuszmAiEA%2FY%2Bb00uBu%2B8YK5YEqo09UrpmS5i21yO5Hu9uOJOwseIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6O9EBQ%2BC6hmR8jZSrcAzh6YBCTi0iI%2BU%2FazV88Btz997KDfjabYpk%2FcBq%2BV2ZFeR7%2FcTXNHIkfodNSnDHrINHUvWVeKV5yQYIS4h69i6SRtPmSfAH3kTnzwylVkHDprclWnmkUzlqhE2osyW0O5xuJOqqJIwCrUcABeFpyxadDGcbNFWbW1qYSwXw%2BE%2BuPBwXaLAnuTotIAOqu4i0bJmhc9uGFGLZj3SV0Osa459lJ0FUriEkseMUCB9D18dGqqNJ5pa7uALhN1nq0Of9X6nWbHqwxlSk3ZDqWye%2BtqJUAfswjTZg2ykfzy7pohJxhlgQQBYmzKJahNZgzceIXNaXRCzGeRW4d6qCAnfKsojJQ8HfQEM6YB6f8oJq0y5pmEUDNecCAEhmqZ1lHxNhdETDd76PK4TOraNjU%2FCAGtyUVl2CxOUODst%2BdMinIpnqE4mCbJXfsMgmr7hwWaM0220BKyZ15jbsFTzNvd44Lc5Je1sCMDHoItO2zMqNkzT%2BRG687vBxGlBG325a%2FHRMhM7WO21fQGbBTVpbR7Rqpw%2BgsTlzfBdQ1kcd4OjD5EcjaqOWtnn1P7SGwdTnglBsqhSs8ns2NR3rSyr82jv9BlhYHUwPU3jdztWbh%2BxVtVBVmz7a%2BUsmIbeVqFTShMOSv38EGOqUBJQHcrqwTOl%2Br%2FWr6nxkzq%2FeS3oMWyANzLCy8GpPCgkE%2Brtl%2Fc5bR8ewkHFSCd3BtCJseMcvYe%2F1FUtzs2BgAZ4vEYFZ7Ey0%2FV0GQ9fnz3CYjbBBrkGVLlz6xbZirH5vdBaNDyF5SaU9xgqEANg%2BNN5qmR0DUDyd5BCkV8fBnpeTS5uqt6UCQQ8X9wo9OBd8fK8xfOlNjkM4EviE7S3yDkEoCT8PZ&X-Amz-Signature=697f4dd3864f1c010c361ddf8f0b9b13a464492300ea099c6c73f153399db768&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
