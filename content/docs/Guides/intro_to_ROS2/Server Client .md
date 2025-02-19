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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWXVDBN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD5BijXD3d0TjPUGVW1HWtgOzHSnmfjqSj65J8MRIBqlAIgP98%2F2dq15%2BD5pOIQZk6Q9M75lvaQg9o1nPgAu0J4qCwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuo6v3zcvfDBYEKgyrcA4BUyaH0ocEGZGSFeNnekMxhMtC76DvWeZ9Ip5CLn6f7Yu0nAbFKRyuhPReCvpm3xNIF82XfgbWH9lme8oRwN3sLB0oR901umm1lcde2Fxv99Rba2KE0I%2BT5%2BjPM3LHhEaoCqq%2Ffdgmn3IZZOfj79sd8kMdDQTqe5SNAnzXZ2lWoM7olHlbFvg7MgVH%2BBT1B%2BI1aZl2J9AHvm7b4YueMicpl8547UTP2afE0CqIryS7jOI0Hm7ORCBnE6QAJbLKE%2BvbUd%2BZgi1YL4n1%2FHNrlrDucBDcjkiHL264EDzuxOAVkbOf%2BVg3PBwUbWLlWIfqTwQgFsOGJ9N0TrNt8zPzf8VZ3CPERXBBql405bG3qvAdFfmqyBzwjA%2BzqdKcOQ0d363OjVuoKvxbMzZv3Kv%2FumaqGhWN1zP%2BTmz9VCDXppUcItteag%2BszcXN00nypWgkhZNdzDmmp5IwXyjAJtq10sG9QBNUvWK%2B6rRPH6IwUBmZmZUAMl2CEs7kToKUSbhnYqkRKKCELNMQdunf%2BGZGJQv1FrcealXtSHHevV8%2FVISzAzqHNGXdXoU1E%2FRkzyYxCv2%2F%2FqHzCft19tjCezUIo7MgSzEg1Apoeh1ufTLXilRozvRqsI9%2FJype2lSySMOv61r0GOqUB0afVo80D1oSeHZitBelNIHSgGBMjCLja%2BxTuwPJV%2B1pdnZMeeitE1v8KfRY8cptHimKQlGMOQxo6KdUj%2FUartHXsg5AP%2B9WtulWa11Qdl20RdfZzQwGK1mRCJl7whj0LVVLlSNXPAH5xcHGm7H5D1t11ZQaygetha%2FEPAco1AyjG%2F5Faq9AaQK3gYxszHWpZ2J1lWnMMWHU%2FxD9z3Nre3VpXNXpE&X-Amz-Signature=19618c7cb49589b0c099e1a8905b26fc6611f3467a39d9cf53fbee78783efc57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWXVDBN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD5BijXD3d0TjPUGVW1HWtgOzHSnmfjqSj65J8MRIBqlAIgP98%2F2dq15%2BD5pOIQZk6Q9M75lvaQg9o1nPgAu0J4qCwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuo6v3zcvfDBYEKgyrcA4BUyaH0ocEGZGSFeNnekMxhMtC76DvWeZ9Ip5CLn6f7Yu0nAbFKRyuhPReCvpm3xNIF82XfgbWH9lme8oRwN3sLB0oR901umm1lcde2Fxv99Rba2KE0I%2BT5%2BjPM3LHhEaoCqq%2Ffdgmn3IZZOfj79sd8kMdDQTqe5SNAnzXZ2lWoM7olHlbFvg7MgVH%2BBT1B%2BI1aZl2J9AHvm7b4YueMicpl8547UTP2afE0CqIryS7jOI0Hm7ORCBnE6QAJbLKE%2BvbUd%2BZgi1YL4n1%2FHNrlrDucBDcjkiHL264EDzuxOAVkbOf%2BVg3PBwUbWLlWIfqTwQgFsOGJ9N0TrNt8zPzf8VZ3CPERXBBql405bG3qvAdFfmqyBzwjA%2BzqdKcOQ0d363OjVuoKvxbMzZv3Kv%2FumaqGhWN1zP%2BTmz9VCDXppUcItteag%2BszcXN00nypWgkhZNdzDmmp5IwXyjAJtq10sG9QBNUvWK%2B6rRPH6IwUBmZmZUAMl2CEs7kToKUSbhnYqkRKKCELNMQdunf%2BGZGJQv1FrcealXtSHHevV8%2FVISzAzqHNGXdXoU1E%2FRkzyYxCv2%2F%2FqHzCft19tjCezUIo7MgSzEg1Apoeh1ufTLXilRozvRqsI9%2FJype2lSySMOv61r0GOqUB0afVo80D1oSeHZitBelNIHSgGBMjCLja%2BxTuwPJV%2B1pdnZMeeitE1v8KfRY8cptHimKQlGMOQxo6KdUj%2FUartHXsg5AP%2B9WtulWa11Qdl20RdfZzQwGK1mRCJl7whj0LVVLlSNXPAH5xcHGm7H5D1t11ZQaygetha%2FEPAco1AyjG%2F5Faq9AaQK3gYxszHWpZ2J1lWnMMWHU%2FxD9z3Nre3VpXNXpE&X-Amz-Signature=4d214c307ca0229b4edad7ee55629a36f61de41605237671f3acbfe11b18071a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWXVDBN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD5BijXD3d0TjPUGVW1HWtgOzHSnmfjqSj65J8MRIBqlAIgP98%2F2dq15%2BD5pOIQZk6Q9M75lvaQg9o1nPgAu0J4qCwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuo6v3zcvfDBYEKgyrcA4BUyaH0ocEGZGSFeNnekMxhMtC76DvWeZ9Ip5CLn6f7Yu0nAbFKRyuhPReCvpm3xNIF82XfgbWH9lme8oRwN3sLB0oR901umm1lcde2Fxv99Rba2KE0I%2BT5%2BjPM3LHhEaoCqq%2Ffdgmn3IZZOfj79sd8kMdDQTqe5SNAnzXZ2lWoM7olHlbFvg7MgVH%2BBT1B%2BI1aZl2J9AHvm7b4YueMicpl8547UTP2afE0CqIryS7jOI0Hm7ORCBnE6QAJbLKE%2BvbUd%2BZgi1YL4n1%2FHNrlrDucBDcjkiHL264EDzuxOAVkbOf%2BVg3PBwUbWLlWIfqTwQgFsOGJ9N0TrNt8zPzf8VZ3CPERXBBql405bG3qvAdFfmqyBzwjA%2BzqdKcOQ0d363OjVuoKvxbMzZv3Kv%2FumaqGhWN1zP%2BTmz9VCDXppUcItteag%2BszcXN00nypWgkhZNdzDmmp5IwXyjAJtq10sG9QBNUvWK%2B6rRPH6IwUBmZmZUAMl2CEs7kToKUSbhnYqkRKKCELNMQdunf%2BGZGJQv1FrcealXtSHHevV8%2FVISzAzqHNGXdXoU1E%2FRkzyYxCv2%2F%2FqHzCft19tjCezUIo7MgSzEg1Apoeh1ufTLXilRozvRqsI9%2FJype2lSySMOv61r0GOqUB0afVo80D1oSeHZitBelNIHSgGBMjCLja%2BxTuwPJV%2B1pdnZMeeitE1v8KfRY8cptHimKQlGMOQxo6KdUj%2FUartHXsg5AP%2B9WtulWa11Qdl20RdfZzQwGK1mRCJl7whj0LVVLlSNXPAH5xcHGm7H5D1t11ZQaygetha%2FEPAco1AyjG%2F5Faq9AaQK3gYxszHWpZ2J1lWnMMWHU%2FxD9z3Nre3VpXNXpE&X-Amz-Signature=5441a765f59f29f826319f1158ab07d37f3ecc94959494b8f54be73024eeb1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWXVDBN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD5BijXD3d0TjPUGVW1HWtgOzHSnmfjqSj65J8MRIBqlAIgP98%2F2dq15%2BD5pOIQZk6Q9M75lvaQg9o1nPgAu0J4qCwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuo6v3zcvfDBYEKgyrcA4BUyaH0ocEGZGSFeNnekMxhMtC76DvWeZ9Ip5CLn6f7Yu0nAbFKRyuhPReCvpm3xNIF82XfgbWH9lme8oRwN3sLB0oR901umm1lcde2Fxv99Rba2KE0I%2BT5%2BjPM3LHhEaoCqq%2Ffdgmn3IZZOfj79sd8kMdDQTqe5SNAnzXZ2lWoM7olHlbFvg7MgVH%2BBT1B%2BI1aZl2J9AHvm7b4YueMicpl8547UTP2afE0CqIryS7jOI0Hm7ORCBnE6QAJbLKE%2BvbUd%2BZgi1YL4n1%2FHNrlrDucBDcjkiHL264EDzuxOAVkbOf%2BVg3PBwUbWLlWIfqTwQgFsOGJ9N0TrNt8zPzf8VZ3CPERXBBql405bG3qvAdFfmqyBzwjA%2BzqdKcOQ0d363OjVuoKvxbMzZv3Kv%2FumaqGhWN1zP%2BTmz9VCDXppUcItteag%2BszcXN00nypWgkhZNdzDmmp5IwXyjAJtq10sG9QBNUvWK%2B6rRPH6IwUBmZmZUAMl2CEs7kToKUSbhnYqkRKKCELNMQdunf%2BGZGJQv1FrcealXtSHHevV8%2FVISzAzqHNGXdXoU1E%2FRkzyYxCv2%2F%2FqHzCft19tjCezUIo7MgSzEg1Apoeh1ufTLXilRozvRqsI9%2FJype2lSySMOv61r0GOqUB0afVo80D1oSeHZitBelNIHSgGBMjCLja%2BxTuwPJV%2B1pdnZMeeitE1v8KfRY8cptHimKQlGMOQxo6KdUj%2FUartHXsg5AP%2B9WtulWa11Qdl20RdfZzQwGK1mRCJl7whj0LVVLlSNXPAH5xcHGm7H5D1t11ZQaygetha%2FEPAco1AyjG%2F5Faq9AaQK3gYxszHWpZ2J1lWnMMWHU%2FxD9z3Nre3VpXNXpE&X-Amz-Signature=44460b09dc8bdd655875bc18498d15dcb26e95ff050b158b150972307c1241d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWXVDBN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD5BijXD3d0TjPUGVW1HWtgOzHSnmfjqSj65J8MRIBqlAIgP98%2F2dq15%2BD5pOIQZk6Q9M75lvaQg9o1nPgAu0J4qCwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuo6v3zcvfDBYEKgyrcA4BUyaH0ocEGZGSFeNnekMxhMtC76DvWeZ9Ip5CLn6f7Yu0nAbFKRyuhPReCvpm3xNIF82XfgbWH9lme8oRwN3sLB0oR901umm1lcde2Fxv99Rba2KE0I%2BT5%2BjPM3LHhEaoCqq%2Ffdgmn3IZZOfj79sd8kMdDQTqe5SNAnzXZ2lWoM7olHlbFvg7MgVH%2BBT1B%2BI1aZl2J9AHvm7b4YueMicpl8547UTP2afE0CqIryS7jOI0Hm7ORCBnE6QAJbLKE%2BvbUd%2BZgi1YL4n1%2FHNrlrDucBDcjkiHL264EDzuxOAVkbOf%2BVg3PBwUbWLlWIfqTwQgFsOGJ9N0TrNt8zPzf8VZ3CPERXBBql405bG3qvAdFfmqyBzwjA%2BzqdKcOQ0d363OjVuoKvxbMzZv3Kv%2FumaqGhWN1zP%2BTmz9VCDXppUcItteag%2BszcXN00nypWgkhZNdzDmmp5IwXyjAJtq10sG9QBNUvWK%2B6rRPH6IwUBmZmZUAMl2CEs7kToKUSbhnYqkRKKCELNMQdunf%2BGZGJQv1FrcealXtSHHevV8%2FVISzAzqHNGXdXoU1E%2FRkzyYxCv2%2F%2FqHzCft19tjCezUIo7MgSzEg1Apoeh1ufTLXilRozvRqsI9%2FJype2lSySMOv61r0GOqUB0afVo80D1oSeHZitBelNIHSgGBMjCLja%2BxTuwPJV%2B1pdnZMeeitE1v8KfRY8cptHimKQlGMOQxo6KdUj%2FUartHXsg5AP%2B9WtulWa11Qdl20RdfZzQwGK1mRCJl7whj0LVVLlSNXPAH5xcHGm7H5D1t11ZQaygetha%2FEPAco1AyjG%2F5Faq9AaQK3gYxszHWpZ2J1lWnMMWHU%2FxD9z3Nre3VpXNXpE&X-Amz-Signature=a41f3de42614ccfee6ff7cff0644869654673c21d1016fd1d15e37800d1140b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
