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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJHH6EA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASz0L6tAopQ0sq20QGcAJTqTqaIA63Yuqmvo9GgReAlAiEA%2FAASictDHRCIJRKj%2BTe0RkU1TQotHJ5V%2B%2FWrmBFeDtoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYxTb51T6v74e8ULyrcA7wmcYju3aGt6HpNIOguCfJyIBHamdSXEHbBYwS%2ByKT%2BipLk%2FH3VnDwc2eXrNuuhnK%2FyGNp8W7g3E%2B5HnY14do8jZEdGa%2Fq0%2FCVdaGgM3jfi7477yjNruIOOT2XVVWNLmHFhSloJEQKFoejjL4GmLUysYkbQuaTHGvDtAZCl6fGlsw4PL4CNHtNMDxxp3xKN3p2s8de%2BPn6RM1yIxKqptsl4dym37%2FQSdm%2BKCi33UiQIcGzg4FsFcQp2Xo2m0emH96J1Z62NdYDJBWa64RmNXqLHlBKllUnkHE6Nav%2Bq2bT5Q6Z57J2UDCtIMNLytn8VuSF18yk9f2JpKlqLNLm%2F0ztvEP%2BZbqWEUWSGUwu9zDZjUUtWKaoRY4lbWu2uYRZUR1r7OW1rccSCkd2JNhMBiuV0hkoDTUZShSz%2FYxdXIOoovHgl5CXcntUeWqBemuu%2BThYCNpp3lAZnpZpTNfsjAWpBB%2Fr1Uhnc31a%2Bcu3lQzOngkCU9f%2FYunEGd66da9c3Rkul8wo%2B68GPrn8PlYAbDfhwnezPdwgaMx96IkhVz%2BHZQ%2FJCj4bQGeIcEC%2BSq%2B5ND50Ji3w%2FXspQHDjZX2YlubVEYuFfJddLn5N8ehJNAYhhlkqRtGQBPkljuwylMMm18sMGOqUBMkef1zWY1gDYrQug0Nn3G5VcEeXT%2BtslqMDOw1jziv05lx9FN4j09SDfajRWml2Y9NhTZ0teMjX%2Bny2GkYyRX8%2BF0sDWMEyJn89M%2F7UpYbJQXfuBe0TmBjDTZXz%2FpSH7R2jyVN61SrLblcidx1aOcRKu48XwXfPqOSRlcmWESYI9RtIlyipaCvkBjf5qjq3w237BvQGNSkaDtBdQ2VsjNElB4jDs&X-Amz-Signature=913600dffa9189f4feb5c72705c6d048277211cc077473581554fc48da707c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJHH6EA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASz0L6tAopQ0sq20QGcAJTqTqaIA63Yuqmvo9GgReAlAiEA%2FAASictDHRCIJRKj%2BTe0RkU1TQotHJ5V%2B%2FWrmBFeDtoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYxTb51T6v74e8ULyrcA7wmcYju3aGt6HpNIOguCfJyIBHamdSXEHbBYwS%2ByKT%2BipLk%2FH3VnDwc2eXrNuuhnK%2FyGNp8W7g3E%2B5HnY14do8jZEdGa%2Fq0%2FCVdaGgM3jfi7477yjNruIOOT2XVVWNLmHFhSloJEQKFoejjL4GmLUysYkbQuaTHGvDtAZCl6fGlsw4PL4CNHtNMDxxp3xKN3p2s8de%2BPn6RM1yIxKqptsl4dym37%2FQSdm%2BKCi33UiQIcGzg4FsFcQp2Xo2m0emH96J1Z62NdYDJBWa64RmNXqLHlBKllUnkHE6Nav%2Bq2bT5Q6Z57J2UDCtIMNLytn8VuSF18yk9f2JpKlqLNLm%2F0ztvEP%2BZbqWEUWSGUwu9zDZjUUtWKaoRY4lbWu2uYRZUR1r7OW1rccSCkd2JNhMBiuV0hkoDTUZShSz%2FYxdXIOoovHgl5CXcntUeWqBemuu%2BThYCNpp3lAZnpZpTNfsjAWpBB%2Fr1Uhnc31a%2Bcu3lQzOngkCU9f%2FYunEGd66da9c3Rkul8wo%2B68GPrn8PlYAbDfhwnezPdwgaMx96IkhVz%2BHZQ%2FJCj4bQGeIcEC%2BSq%2B5ND50Ji3w%2FXspQHDjZX2YlubVEYuFfJddLn5N8ehJNAYhhlkqRtGQBPkljuwylMMm18sMGOqUBMkef1zWY1gDYrQug0Nn3G5VcEeXT%2BtslqMDOw1jziv05lx9FN4j09SDfajRWml2Y9NhTZ0teMjX%2Bny2GkYyRX8%2BF0sDWMEyJn89M%2F7UpYbJQXfuBe0TmBjDTZXz%2FpSH7R2jyVN61SrLblcidx1aOcRKu48XwXfPqOSRlcmWESYI9RtIlyipaCvkBjf5qjq3w237BvQGNSkaDtBdQ2VsjNElB4jDs&X-Amz-Signature=3d334dadbd8359574a7e44fb77721da7dffc937d7dd2215b2ddbf44b6a698de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJHH6EA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASz0L6tAopQ0sq20QGcAJTqTqaIA63Yuqmvo9GgReAlAiEA%2FAASictDHRCIJRKj%2BTe0RkU1TQotHJ5V%2B%2FWrmBFeDtoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYxTb51T6v74e8ULyrcA7wmcYju3aGt6HpNIOguCfJyIBHamdSXEHbBYwS%2ByKT%2BipLk%2FH3VnDwc2eXrNuuhnK%2FyGNp8W7g3E%2B5HnY14do8jZEdGa%2Fq0%2FCVdaGgM3jfi7477yjNruIOOT2XVVWNLmHFhSloJEQKFoejjL4GmLUysYkbQuaTHGvDtAZCl6fGlsw4PL4CNHtNMDxxp3xKN3p2s8de%2BPn6RM1yIxKqptsl4dym37%2FQSdm%2BKCi33UiQIcGzg4FsFcQp2Xo2m0emH96J1Z62NdYDJBWa64RmNXqLHlBKllUnkHE6Nav%2Bq2bT5Q6Z57J2UDCtIMNLytn8VuSF18yk9f2JpKlqLNLm%2F0ztvEP%2BZbqWEUWSGUwu9zDZjUUtWKaoRY4lbWu2uYRZUR1r7OW1rccSCkd2JNhMBiuV0hkoDTUZShSz%2FYxdXIOoovHgl5CXcntUeWqBemuu%2BThYCNpp3lAZnpZpTNfsjAWpBB%2Fr1Uhnc31a%2Bcu3lQzOngkCU9f%2FYunEGd66da9c3Rkul8wo%2B68GPrn8PlYAbDfhwnezPdwgaMx96IkhVz%2BHZQ%2FJCj4bQGeIcEC%2BSq%2B5ND50Ji3w%2FXspQHDjZX2YlubVEYuFfJddLn5N8ehJNAYhhlkqRtGQBPkljuwylMMm18sMGOqUBMkef1zWY1gDYrQug0Nn3G5VcEeXT%2BtslqMDOw1jziv05lx9FN4j09SDfajRWml2Y9NhTZ0teMjX%2Bny2GkYyRX8%2BF0sDWMEyJn89M%2F7UpYbJQXfuBe0TmBjDTZXz%2FpSH7R2jyVN61SrLblcidx1aOcRKu48XwXfPqOSRlcmWESYI9RtIlyipaCvkBjf5qjq3w237BvQGNSkaDtBdQ2VsjNElB4jDs&X-Amz-Signature=dcabad4d419eb22c1599910ebbcf2be7e6b761183d310dd8dc2af6dbd2476a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJHH6EA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASz0L6tAopQ0sq20QGcAJTqTqaIA63Yuqmvo9GgReAlAiEA%2FAASictDHRCIJRKj%2BTe0RkU1TQotHJ5V%2B%2FWrmBFeDtoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYxTb51T6v74e8ULyrcA7wmcYju3aGt6HpNIOguCfJyIBHamdSXEHbBYwS%2ByKT%2BipLk%2FH3VnDwc2eXrNuuhnK%2FyGNp8W7g3E%2B5HnY14do8jZEdGa%2Fq0%2FCVdaGgM3jfi7477yjNruIOOT2XVVWNLmHFhSloJEQKFoejjL4GmLUysYkbQuaTHGvDtAZCl6fGlsw4PL4CNHtNMDxxp3xKN3p2s8de%2BPn6RM1yIxKqptsl4dym37%2FQSdm%2BKCi33UiQIcGzg4FsFcQp2Xo2m0emH96J1Z62NdYDJBWa64RmNXqLHlBKllUnkHE6Nav%2Bq2bT5Q6Z57J2UDCtIMNLytn8VuSF18yk9f2JpKlqLNLm%2F0ztvEP%2BZbqWEUWSGUwu9zDZjUUtWKaoRY4lbWu2uYRZUR1r7OW1rccSCkd2JNhMBiuV0hkoDTUZShSz%2FYxdXIOoovHgl5CXcntUeWqBemuu%2BThYCNpp3lAZnpZpTNfsjAWpBB%2Fr1Uhnc31a%2Bcu3lQzOngkCU9f%2FYunEGd66da9c3Rkul8wo%2B68GPrn8PlYAbDfhwnezPdwgaMx96IkhVz%2BHZQ%2FJCj4bQGeIcEC%2BSq%2B5ND50Ji3w%2FXspQHDjZX2YlubVEYuFfJddLn5N8ehJNAYhhlkqRtGQBPkljuwylMMm18sMGOqUBMkef1zWY1gDYrQug0Nn3G5VcEeXT%2BtslqMDOw1jziv05lx9FN4j09SDfajRWml2Y9NhTZ0teMjX%2Bny2GkYyRX8%2BF0sDWMEyJn89M%2F7UpYbJQXfuBe0TmBjDTZXz%2FpSH7R2jyVN61SrLblcidx1aOcRKu48XwXfPqOSRlcmWESYI9RtIlyipaCvkBjf5qjq3w237BvQGNSkaDtBdQ2VsjNElB4jDs&X-Amz-Signature=00cccc53f375bd2c9d4cf53d047b0ad0164a92017509ebb34bbcb9f495870865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJHH6EA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASz0L6tAopQ0sq20QGcAJTqTqaIA63Yuqmvo9GgReAlAiEA%2FAASictDHRCIJRKj%2BTe0RkU1TQotHJ5V%2B%2FWrmBFeDtoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYxTb51T6v74e8ULyrcA7wmcYju3aGt6HpNIOguCfJyIBHamdSXEHbBYwS%2ByKT%2BipLk%2FH3VnDwc2eXrNuuhnK%2FyGNp8W7g3E%2B5HnY14do8jZEdGa%2Fq0%2FCVdaGgM3jfi7477yjNruIOOT2XVVWNLmHFhSloJEQKFoejjL4GmLUysYkbQuaTHGvDtAZCl6fGlsw4PL4CNHtNMDxxp3xKN3p2s8de%2BPn6RM1yIxKqptsl4dym37%2FQSdm%2BKCi33UiQIcGzg4FsFcQp2Xo2m0emH96J1Z62NdYDJBWa64RmNXqLHlBKllUnkHE6Nav%2Bq2bT5Q6Z57J2UDCtIMNLytn8VuSF18yk9f2JpKlqLNLm%2F0ztvEP%2BZbqWEUWSGUwu9zDZjUUtWKaoRY4lbWu2uYRZUR1r7OW1rccSCkd2JNhMBiuV0hkoDTUZShSz%2FYxdXIOoovHgl5CXcntUeWqBemuu%2BThYCNpp3lAZnpZpTNfsjAWpBB%2Fr1Uhnc31a%2Bcu3lQzOngkCU9f%2FYunEGd66da9c3Rkul8wo%2B68GPrn8PlYAbDfhwnezPdwgaMx96IkhVz%2BHZQ%2FJCj4bQGeIcEC%2BSq%2B5ND50Ji3w%2FXspQHDjZX2YlubVEYuFfJddLn5N8ehJNAYhhlkqRtGQBPkljuwylMMm18sMGOqUBMkef1zWY1gDYrQug0Nn3G5VcEeXT%2BtslqMDOw1jziv05lx9FN4j09SDfajRWml2Y9NhTZ0teMjX%2Bny2GkYyRX8%2BF0sDWMEyJn89M%2F7UpYbJQXfuBe0TmBjDTZXz%2FpSH7R2jyVN61SrLblcidx1aOcRKu48XwXfPqOSRlcmWESYI9RtIlyipaCvkBjf5qjq3w237BvQGNSkaDtBdQ2VsjNElB4jDs&X-Amz-Signature=0c72420076fea40977abc3d64bbd3114799870952095354c79a14f50626b1398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
