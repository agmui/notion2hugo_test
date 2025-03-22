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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N46RJEI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDGYAcf6%2FFWLMKVipTyq3iUl1EvE3LVct%2FsZwFrbBrJewIhAOXgpX%2BNkdon%2BM2gT9x%2Ff7oBH5gt2l5mgxQefYzW8tfpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn1dUz5oMvq4LvBQgq3AMrqvIJdDA8dwuITtmqG5xBfwwfrp1Z3c35No%2Be1AUjRCLWfsZ80dhZMcZTMkAWrILh72mmUiwbhOT8gXgv09wrkpxKBEyB4wQsrgfbjMtdh%2BQslHNLqrMtiAC1H2vrZdH0zkGR4SitA2EK1LJQNNCU71lxoGvNzrn5MHlTcSAAAvJGr9uJCrwiMziRtBHgIrhSN6MSE%2F2uv38R%2Fe6IHmraX0CnFTiYt9SSRNYHwQjC9LHPAsFpieJApDtstiA1T4%2BboRLbvdi2FUDlZzPd2tw9fEYYiQL9A3bWYCM7qlUj7s0z3x90sUDPGBixeYppEUcY5bcVt9B%2FdPeFzAF%2B0wOl5M25myCWl3pgoGOveHrfQzPx2C4yQg%2BlsTuK%2F%2BiMA1LWxtkmjdfFHZnXJhFT2cxoyow0bC98RP3SXgSvmh5mmzntbmynBIJ6%2B%2Fc6nqGDs58L5HkcJJA12pRdgaU%2FO9oj%2FDYkskXd18ZNLEDkNDpcQwFi%2FsTs%2B4pWNFeQwg%2BUsY8VPUDBiaHE61Whs2bg%2B0MjZXsKkQX5364wT7EBn3XA%2Fvv8PGHpm%2BAuMHqHG1LWBhvpOJ6sg6I36DKe61Bl4yY5DA8NzHlQoYZXSWy0jubKB2Fh7engdwgJJB2rUzC36%2Fm%2BBjqkAaQgTph9VuIDMAJhO94ntnj13JWxu4CLfKGjlHncug%2FkPumOGdIjQRfx03Ua6v%2Fz9zIr3V%2F2lBMmoLWfPI13mi%2FccCY5t1BZ8YLJELtc0mBGsgbqaW3obyVz76DB1nAwrffrNMcrkUjJ7Myq4wSHkyh2p57Ehhk0%2Br%2BQNdlmCap00bbVuxudrXsKn4YvHIyFB8aLJEh2H%2F4nL%2FQdGruKN2UY0hR8&X-Amz-Signature=d008bd7ef418046088937f54c156f4fbf6745990570c68a4380c36b844d1b76d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N46RJEI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDGYAcf6%2FFWLMKVipTyq3iUl1EvE3LVct%2FsZwFrbBrJewIhAOXgpX%2BNkdon%2BM2gT9x%2Ff7oBH5gt2l5mgxQefYzW8tfpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn1dUz5oMvq4LvBQgq3AMrqvIJdDA8dwuITtmqG5xBfwwfrp1Z3c35No%2Be1AUjRCLWfsZ80dhZMcZTMkAWrILh72mmUiwbhOT8gXgv09wrkpxKBEyB4wQsrgfbjMtdh%2BQslHNLqrMtiAC1H2vrZdH0zkGR4SitA2EK1LJQNNCU71lxoGvNzrn5MHlTcSAAAvJGr9uJCrwiMziRtBHgIrhSN6MSE%2F2uv38R%2Fe6IHmraX0CnFTiYt9SSRNYHwQjC9LHPAsFpieJApDtstiA1T4%2BboRLbvdi2FUDlZzPd2tw9fEYYiQL9A3bWYCM7qlUj7s0z3x90sUDPGBixeYppEUcY5bcVt9B%2FdPeFzAF%2B0wOl5M25myCWl3pgoGOveHrfQzPx2C4yQg%2BlsTuK%2F%2BiMA1LWxtkmjdfFHZnXJhFT2cxoyow0bC98RP3SXgSvmh5mmzntbmynBIJ6%2B%2Fc6nqGDs58L5HkcJJA12pRdgaU%2FO9oj%2FDYkskXd18ZNLEDkNDpcQwFi%2FsTs%2B4pWNFeQwg%2BUsY8VPUDBiaHE61Whs2bg%2B0MjZXsKkQX5364wT7EBn3XA%2Fvv8PGHpm%2BAuMHqHG1LWBhvpOJ6sg6I36DKe61Bl4yY5DA8NzHlQoYZXSWy0jubKB2Fh7engdwgJJB2rUzC36%2Fm%2BBjqkAaQgTph9VuIDMAJhO94ntnj13JWxu4CLfKGjlHncug%2FkPumOGdIjQRfx03Ua6v%2Fz9zIr3V%2F2lBMmoLWfPI13mi%2FccCY5t1BZ8YLJELtc0mBGsgbqaW3obyVz76DB1nAwrffrNMcrkUjJ7Myq4wSHkyh2p57Ehhk0%2Br%2BQNdlmCap00bbVuxudrXsKn4YvHIyFB8aLJEh2H%2F4nL%2FQdGruKN2UY0hR8&X-Amz-Signature=f9f4620cfe63c31cd5f6079a99a66b1d1bdb588dee9ab9b2e70a7fd064e5554d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N46RJEI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDGYAcf6%2FFWLMKVipTyq3iUl1EvE3LVct%2FsZwFrbBrJewIhAOXgpX%2BNkdon%2BM2gT9x%2Ff7oBH5gt2l5mgxQefYzW8tfpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn1dUz5oMvq4LvBQgq3AMrqvIJdDA8dwuITtmqG5xBfwwfrp1Z3c35No%2Be1AUjRCLWfsZ80dhZMcZTMkAWrILh72mmUiwbhOT8gXgv09wrkpxKBEyB4wQsrgfbjMtdh%2BQslHNLqrMtiAC1H2vrZdH0zkGR4SitA2EK1LJQNNCU71lxoGvNzrn5MHlTcSAAAvJGr9uJCrwiMziRtBHgIrhSN6MSE%2F2uv38R%2Fe6IHmraX0CnFTiYt9SSRNYHwQjC9LHPAsFpieJApDtstiA1T4%2BboRLbvdi2FUDlZzPd2tw9fEYYiQL9A3bWYCM7qlUj7s0z3x90sUDPGBixeYppEUcY5bcVt9B%2FdPeFzAF%2B0wOl5M25myCWl3pgoGOveHrfQzPx2C4yQg%2BlsTuK%2F%2BiMA1LWxtkmjdfFHZnXJhFT2cxoyow0bC98RP3SXgSvmh5mmzntbmynBIJ6%2B%2Fc6nqGDs58L5HkcJJA12pRdgaU%2FO9oj%2FDYkskXd18ZNLEDkNDpcQwFi%2FsTs%2B4pWNFeQwg%2BUsY8VPUDBiaHE61Whs2bg%2B0MjZXsKkQX5364wT7EBn3XA%2Fvv8PGHpm%2BAuMHqHG1LWBhvpOJ6sg6I36DKe61Bl4yY5DA8NzHlQoYZXSWy0jubKB2Fh7engdwgJJB2rUzC36%2Fm%2BBjqkAaQgTph9VuIDMAJhO94ntnj13JWxu4CLfKGjlHncug%2FkPumOGdIjQRfx03Ua6v%2Fz9zIr3V%2F2lBMmoLWfPI13mi%2FccCY5t1BZ8YLJELtc0mBGsgbqaW3obyVz76DB1nAwrffrNMcrkUjJ7Myq4wSHkyh2p57Ehhk0%2Br%2BQNdlmCap00bbVuxudrXsKn4YvHIyFB8aLJEh2H%2F4nL%2FQdGruKN2UY0hR8&X-Amz-Signature=919047c95069165218f8b3997193a828b40bca37f779271b083eb6a40ad46b56&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N46RJEI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDGYAcf6%2FFWLMKVipTyq3iUl1EvE3LVct%2FsZwFrbBrJewIhAOXgpX%2BNkdon%2BM2gT9x%2Ff7oBH5gt2l5mgxQefYzW8tfpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn1dUz5oMvq4LvBQgq3AMrqvIJdDA8dwuITtmqG5xBfwwfrp1Z3c35No%2Be1AUjRCLWfsZ80dhZMcZTMkAWrILh72mmUiwbhOT8gXgv09wrkpxKBEyB4wQsrgfbjMtdh%2BQslHNLqrMtiAC1H2vrZdH0zkGR4SitA2EK1LJQNNCU71lxoGvNzrn5MHlTcSAAAvJGr9uJCrwiMziRtBHgIrhSN6MSE%2F2uv38R%2Fe6IHmraX0CnFTiYt9SSRNYHwQjC9LHPAsFpieJApDtstiA1T4%2BboRLbvdi2FUDlZzPd2tw9fEYYiQL9A3bWYCM7qlUj7s0z3x90sUDPGBixeYppEUcY5bcVt9B%2FdPeFzAF%2B0wOl5M25myCWl3pgoGOveHrfQzPx2C4yQg%2BlsTuK%2F%2BiMA1LWxtkmjdfFHZnXJhFT2cxoyow0bC98RP3SXgSvmh5mmzntbmynBIJ6%2B%2Fc6nqGDs58L5HkcJJA12pRdgaU%2FO9oj%2FDYkskXd18ZNLEDkNDpcQwFi%2FsTs%2B4pWNFeQwg%2BUsY8VPUDBiaHE61Whs2bg%2B0MjZXsKkQX5364wT7EBn3XA%2Fvv8PGHpm%2BAuMHqHG1LWBhvpOJ6sg6I36DKe61Bl4yY5DA8NzHlQoYZXSWy0jubKB2Fh7engdwgJJB2rUzC36%2Fm%2BBjqkAaQgTph9VuIDMAJhO94ntnj13JWxu4CLfKGjlHncug%2FkPumOGdIjQRfx03Ua6v%2Fz9zIr3V%2F2lBMmoLWfPI13mi%2FccCY5t1BZ8YLJELtc0mBGsgbqaW3obyVz76DB1nAwrffrNMcrkUjJ7Myq4wSHkyh2p57Ehhk0%2Br%2BQNdlmCap00bbVuxudrXsKn4YvHIyFB8aLJEh2H%2F4nL%2FQdGruKN2UY0hR8&X-Amz-Signature=a516f2ba9bee9deb27fb7f48a4e07aebf6ad310a57dae639ac3983d16aff9f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N46RJEI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDGYAcf6%2FFWLMKVipTyq3iUl1EvE3LVct%2FsZwFrbBrJewIhAOXgpX%2BNkdon%2BM2gT9x%2Ff7oBH5gt2l5mgxQefYzW8tfpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn1dUz5oMvq4LvBQgq3AMrqvIJdDA8dwuITtmqG5xBfwwfrp1Z3c35No%2Be1AUjRCLWfsZ80dhZMcZTMkAWrILh72mmUiwbhOT8gXgv09wrkpxKBEyB4wQsrgfbjMtdh%2BQslHNLqrMtiAC1H2vrZdH0zkGR4SitA2EK1LJQNNCU71lxoGvNzrn5MHlTcSAAAvJGr9uJCrwiMziRtBHgIrhSN6MSE%2F2uv38R%2Fe6IHmraX0CnFTiYt9SSRNYHwQjC9LHPAsFpieJApDtstiA1T4%2BboRLbvdi2FUDlZzPd2tw9fEYYiQL9A3bWYCM7qlUj7s0z3x90sUDPGBixeYppEUcY5bcVt9B%2FdPeFzAF%2B0wOl5M25myCWl3pgoGOveHrfQzPx2C4yQg%2BlsTuK%2F%2BiMA1LWxtkmjdfFHZnXJhFT2cxoyow0bC98RP3SXgSvmh5mmzntbmynBIJ6%2B%2Fc6nqGDs58L5HkcJJA12pRdgaU%2FO9oj%2FDYkskXd18ZNLEDkNDpcQwFi%2FsTs%2B4pWNFeQwg%2BUsY8VPUDBiaHE61Whs2bg%2B0MjZXsKkQX5364wT7EBn3XA%2Fvv8PGHpm%2BAuMHqHG1LWBhvpOJ6sg6I36DKe61Bl4yY5DA8NzHlQoYZXSWy0jubKB2Fh7engdwgJJB2rUzC36%2Fm%2BBjqkAaQgTph9VuIDMAJhO94ntnj13JWxu4CLfKGjlHncug%2FkPumOGdIjQRfx03Ua6v%2Fz9zIr3V%2F2lBMmoLWfPI13mi%2FccCY5t1BZ8YLJELtc0mBGsgbqaW3obyVz76DB1nAwrffrNMcrkUjJ7Myq4wSHkyh2p57Ehhk0%2Br%2BQNdlmCap00bbVuxudrXsKn4YvHIyFB8aLJEh2H%2F4nL%2FQdGruKN2UY0hR8&X-Amz-Signature=5d1b11e05b6c5ea75a2b5ff07ae4b1db8f0f3c6f72888c6a6f51b0d57a5acd57&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
