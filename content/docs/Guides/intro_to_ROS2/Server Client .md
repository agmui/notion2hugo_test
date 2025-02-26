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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4KAWLX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAvxjbHbTq8swJHjQ7Qwkmyd9kY75JbtNDPSjD9M7AiQAiEA7%2FeHU1bhO4Ltrw%2F3033nzLOvu%2FIkTh3FfrrXi5blNNIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG8MYAFrueZBkP65TyrcAz5OpzvuE%2BbluAOLu3ijXSogbAIfxunahH%2B%2BS%2Bk3CxGfF1u4N%2FaobXPRN1KlAttKzaTfPu28lm5Pj2V6OUy0C9HxmhPLQXu3YTdot313fbsj%2FYoZNaxZklBi0R6m5QoEmaUBDnXTnPRpOKrdn81EXkiop9yy%2BCJwazFBgqvNsQZdbYSmHCzTWdqggjy5ElhgY8S41R6ud7MP1qWrnSbHLqAEPasJFMgGGMFbvCzk5TaAS7xVrf6U%2BtzxXFUT%2BXzH0j2w%2Fu78PSETn%2F1tMQ3lx2pkVePW8YP7mi7tBBLjwzX3rM1fMMQO%2F8WUUjZgjDWFtlXQcroUcKG0mVGLPw%2BP3QJ3xuOCkREkblQSFBE6%2BEogZ28eoeKFfwqgRGFdBQwuRTvzK6tjyvLp6Z08xkKkc%2F07%2B03R9CkFCrgKY%2Fzku4adTmxTr%2BDug7x7C%2BfI1cnClD6eIZDgpe6BlGTgBV8X2VziDUnSS3bW28ZikeMqxnc%2BX0hksotZKKZQLTO3IkmOCAfbP4dUnaN%2FbelD2kxsXDcAu7lsD0781FsR0yUVT1ftG6%2BnpgX2U4KFzbDPFQ0lVnn38vyK3Y%2Fb43rmD0gyBig7FwzkpeEuN5i1TKOTSuTtQd9cm1gwCJPc7n7nMNaH%2FL0GOqUBzucJ6mEYV12dn9%2BkCvGPFGbRh3NvsJkaeL2alGvD%2BHQN2SFGfmM32BYKAQcv2fTRq5EOvyEyVykfDU692pRINkf8cB%2BVABIfgvkmJyzGZt2xTYT%2BUppdz2Agrk6HjZSRsngL2rZ4wzdwygI7OYp5nvebcH%2FXnV53bzHZbC%2FlD5DmNwX2wLoPqJSfEr9M4Ydno7KuH0x%2BUElKR3syAHEX4xd87aNH&X-Amz-Signature=ad6d8eeecc5e5ec79da3f906e0350abe93742385b1101dda641999acb726fcb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4KAWLX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAvxjbHbTq8swJHjQ7Qwkmyd9kY75JbtNDPSjD9M7AiQAiEA7%2FeHU1bhO4Ltrw%2F3033nzLOvu%2FIkTh3FfrrXi5blNNIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG8MYAFrueZBkP65TyrcAz5OpzvuE%2BbluAOLu3ijXSogbAIfxunahH%2B%2BS%2Bk3CxGfF1u4N%2FaobXPRN1KlAttKzaTfPu28lm5Pj2V6OUy0C9HxmhPLQXu3YTdot313fbsj%2FYoZNaxZklBi0R6m5QoEmaUBDnXTnPRpOKrdn81EXkiop9yy%2BCJwazFBgqvNsQZdbYSmHCzTWdqggjy5ElhgY8S41R6ud7MP1qWrnSbHLqAEPasJFMgGGMFbvCzk5TaAS7xVrf6U%2BtzxXFUT%2BXzH0j2w%2Fu78PSETn%2F1tMQ3lx2pkVePW8YP7mi7tBBLjwzX3rM1fMMQO%2F8WUUjZgjDWFtlXQcroUcKG0mVGLPw%2BP3QJ3xuOCkREkblQSFBE6%2BEogZ28eoeKFfwqgRGFdBQwuRTvzK6tjyvLp6Z08xkKkc%2F07%2B03R9CkFCrgKY%2Fzku4adTmxTr%2BDug7x7C%2BfI1cnClD6eIZDgpe6BlGTgBV8X2VziDUnSS3bW28ZikeMqxnc%2BX0hksotZKKZQLTO3IkmOCAfbP4dUnaN%2FbelD2kxsXDcAu7lsD0781FsR0yUVT1ftG6%2BnpgX2U4KFzbDPFQ0lVnn38vyK3Y%2Fb43rmD0gyBig7FwzkpeEuN5i1TKOTSuTtQd9cm1gwCJPc7n7nMNaH%2FL0GOqUBzucJ6mEYV12dn9%2BkCvGPFGbRh3NvsJkaeL2alGvD%2BHQN2SFGfmM32BYKAQcv2fTRq5EOvyEyVykfDU692pRINkf8cB%2BVABIfgvkmJyzGZt2xTYT%2BUppdz2Agrk6HjZSRsngL2rZ4wzdwygI7OYp5nvebcH%2FXnV53bzHZbC%2FlD5DmNwX2wLoPqJSfEr9M4Ydno7KuH0x%2BUElKR3syAHEX4xd87aNH&X-Amz-Signature=5c75fd7fafb347008bd021321a6746509cdec27b2c74ee3a106521045d035e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4KAWLX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAvxjbHbTq8swJHjQ7Qwkmyd9kY75JbtNDPSjD9M7AiQAiEA7%2FeHU1bhO4Ltrw%2F3033nzLOvu%2FIkTh3FfrrXi5blNNIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG8MYAFrueZBkP65TyrcAz5OpzvuE%2BbluAOLu3ijXSogbAIfxunahH%2B%2BS%2Bk3CxGfF1u4N%2FaobXPRN1KlAttKzaTfPu28lm5Pj2V6OUy0C9HxmhPLQXu3YTdot313fbsj%2FYoZNaxZklBi0R6m5QoEmaUBDnXTnPRpOKrdn81EXkiop9yy%2BCJwazFBgqvNsQZdbYSmHCzTWdqggjy5ElhgY8S41R6ud7MP1qWrnSbHLqAEPasJFMgGGMFbvCzk5TaAS7xVrf6U%2BtzxXFUT%2BXzH0j2w%2Fu78PSETn%2F1tMQ3lx2pkVePW8YP7mi7tBBLjwzX3rM1fMMQO%2F8WUUjZgjDWFtlXQcroUcKG0mVGLPw%2BP3QJ3xuOCkREkblQSFBE6%2BEogZ28eoeKFfwqgRGFdBQwuRTvzK6tjyvLp6Z08xkKkc%2F07%2B03R9CkFCrgKY%2Fzku4adTmxTr%2BDug7x7C%2BfI1cnClD6eIZDgpe6BlGTgBV8X2VziDUnSS3bW28ZikeMqxnc%2BX0hksotZKKZQLTO3IkmOCAfbP4dUnaN%2FbelD2kxsXDcAu7lsD0781FsR0yUVT1ftG6%2BnpgX2U4KFzbDPFQ0lVnn38vyK3Y%2Fb43rmD0gyBig7FwzkpeEuN5i1TKOTSuTtQd9cm1gwCJPc7n7nMNaH%2FL0GOqUBzucJ6mEYV12dn9%2BkCvGPFGbRh3NvsJkaeL2alGvD%2BHQN2SFGfmM32BYKAQcv2fTRq5EOvyEyVykfDU692pRINkf8cB%2BVABIfgvkmJyzGZt2xTYT%2BUppdz2Agrk6HjZSRsngL2rZ4wzdwygI7OYp5nvebcH%2FXnV53bzHZbC%2FlD5DmNwX2wLoPqJSfEr9M4Ydno7KuH0x%2BUElKR3syAHEX4xd87aNH&X-Amz-Signature=533e411665f5fdab2605762a5f36a8f74323da1cbe41844e3caf4562778cf661&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4KAWLX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAvxjbHbTq8swJHjQ7Qwkmyd9kY75JbtNDPSjD9M7AiQAiEA7%2FeHU1bhO4Ltrw%2F3033nzLOvu%2FIkTh3FfrrXi5blNNIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG8MYAFrueZBkP65TyrcAz5OpzvuE%2BbluAOLu3ijXSogbAIfxunahH%2B%2BS%2Bk3CxGfF1u4N%2FaobXPRN1KlAttKzaTfPu28lm5Pj2V6OUy0C9HxmhPLQXu3YTdot313fbsj%2FYoZNaxZklBi0R6m5QoEmaUBDnXTnPRpOKrdn81EXkiop9yy%2BCJwazFBgqvNsQZdbYSmHCzTWdqggjy5ElhgY8S41R6ud7MP1qWrnSbHLqAEPasJFMgGGMFbvCzk5TaAS7xVrf6U%2BtzxXFUT%2BXzH0j2w%2Fu78PSETn%2F1tMQ3lx2pkVePW8YP7mi7tBBLjwzX3rM1fMMQO%2F8WUUjZgjDWFtlXQcroUcKG0mVGLPw%2BP3QJ3xuOCkREkblQSFBE6%2BEogZ28eoeKFfwqgRGFdBQwuRTvzK6tjyvLp6Z08xkKkc%2F07%2B03R9CkFCrgKY%2Fzku4adTmxTr%2BDug7x7C%2BfI1cnClD6eIZDgpe6BlGTgBV8X2VziDUnSS3bW28ZikeMqxnc%2BX0hksotZKKZQLTO3IkmOCAfbP4dUnaN%2FbelD2kxsXDcAu7lsD0781FsR0yUVT1ftG6%2BnpgX2U4KFzbDPFQ0lVnn38vyK3Y%2Fb43rmD0gyBig7FwzkpeEuN5i1TKOTSuTtQd9cm1gwCJPc7n7nMNaH%2FL0GOqUBzucJ6mEYV12dn9%2BkCvGPFGbRh3NvsJkaeL2alGvD%2BHQN2SFGfmM32BYKAQcv2fTRq5EOvyEyVykfDU692pRINkf8cB%2BVABIfgvkmJyzGZt2xTYT%2BUppdz2Agrk6HjZSRsngL2rZ4wzdwygI7OYp5nvebcH%2FXnV53bzHZbC%2FlD5DmNwX2wLoPqJSfEr9M4Ydno7KuH0x%2BUElKR3syAHEX4xd87aNH&X-Amz-Signature=72b5d3e56258abcb5adf96030a4eb5f09566072ba815b4153442423b5030985b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4KAWLX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAvxjbHbTq8swJHjQ7Qwkmyd9kY75JbtNDPSjD9M7AiQAiEA7%2FeHU1bhO4Ltrw%2F3033nzLOvu%2FIkTh3FfrrXi5blNNIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG8MYAFrueZBkP65TyrcAz5OpzvuE%2BbluAOLu3ijXSogbAIfxunahH%2B%2BS%2Bk3CxGfF1u4N%2FaobXPRN1KlAttKzaTfPu28lm5Pj2V6OUy0C9HxmhPLQXu3YTdot313fbsj%2FYoZNaxZklBi0R6m5QoEmaUBDnXTnPRpOKrdn81EXkiop9yy%2BCJwazFBgqvNsQZdbYSmHCzTWdqggjy5ElhgY8S41R6ud7MP1qWrnSbHLqAEPasJFMgGGMFbvCzk5TaAS7xVrf6U%2BtzxXFUT%2BXzH0j2w%2Fu78PSETn%2F1tMQ3lx2pkVePW8YP7mi7tBBLjwzX3rM1fMMQO%2F8WUUjZgjDWFtlXQcroUcKG0mVGLPw%2BP3QJ3xuOCkREkblQSFBE6%2BEogZ28eoeKFfwqgRGFdBQwuRTvzK6tjyvLp6Z08xkKkc%2F07%2B03R9CkFCrgKY%2Fzku4adTmxTr%2BDug7x7C%2BfI1cnClD6eIZDgpe6BlGTgBV8X2VziDUnSS3bW28ZikeMqxnc%2BX0hksotZKKZQLTO3IkmOCAfbP4dUnaN%2FbelD2kxsXDcAu7lsD0781FsR0yUVT1ftG6%2BnpgX2U4KFzbDPFQ0lVnn38vyK3Y%2Fb43rmD0gyBig7FwzkpeEuN5i1TKOTSuTtQd9cm1gwCJPc7n7nMNaH%2FL0GOqUBzucJ6mEYV12dn9%2BkCvGPFGbRh3NvsJkaeL2alGvD%2BHQN2SFGfmM32BYKAQcv2fTRq5EOvyEyVykfDU692pRINkf8cB%2BVABIfgvkmJyzGZt2xTYT%2BUppdz2Agrk6HjZSRsngL2rZ4wzdwygI7OYp5nvebcH%2FXnV53bzHZbC%2FlD5DmNwX2wLoPqJSfEr9M4Ydno7KuH0x%2BUElKR3syAHEX4xd87aNH&X-Amz-Signature=83cb7af7bef4d63adf4f8a7dafb2a231eecc1dfb7a47cfc87b99d14deaf4e105&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
