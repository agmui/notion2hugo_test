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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XVOLLW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOGhloTY9OMnvFYL7Zo%2FeEr8O6IM4fpJcTWXGdL5TtoAiEAjBUFEb%2BOMmliGK1fpJCVozqQIL8wpOqb15VZYZlbeNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnShO%2Blq38QSxOTAircA3UQiqHwR8JwkFjQvqNun916NqLsM3NLNkld9k%2BgPWMuFA6OqaNTv2pVeqAPnm4usCLrzpgO7Y4SD1JIYQhGu2eb1qUy%2BqbDJMOCdASzGIdJa3HuJ9oyE25TynYsjb%2BoGaysdXCz%2BPnRQtL1Acb5bkW4rOfeNnxvewsEI9w1YLtppF12aWBTFPDcI7ovc8s4B6VNaWmUmmg0yxiN0ksOouA4nMPdonRaGI0c3v5y2Iy%2BqPJnOKxfBd6z4NBG0PThBdUmIc3UT21TClI%2FbWPYBUQPEJrr28qhKiPI3LwjwiiU68I%2FFJ%2BKv5dmUZxr%2FFW4tHFkQ%2B4PsA%2FSVbbnFtMGWCBKIkNDg3A%2BwNGr2aTS%2FGarkg4kYvHq9qTMV2sDz%2F2e9lfWh5f7bGuCaDI1xi06g2eI%2Bu4EUnptyuRuurkSBPf8OiikJvuP0HqmOvM7FAavjUyOcMxb7wUpbW7y4R%2Bq0AWORKQHxFAmmg5j%2B8QynrMQxb2dT8akYkgY7rMbpVWZDtlXDuY8cpqKu%2F3fpXLzRtK7POafQZNjSSlFrz7W7%2BQ04HfsRu4aCQspYRJGTNOuQeN%2FzzNC3rbRc%2BwIg3GVf2Ij70rdhDZqfUNi9%2BD%2Bptp9YCcfuuD278iEbHQ%2FML7AscQGOqUB6r%2FRCTUH4Q6f64zyr6DOPMqMeCqAOrSvJO0HYDbnxzP%2Bj63u8ViTp4Mp1jVhl2H%2FFWrgKTs11j41grTzVwtjqaNeJCWEpeyFb5maJCxgRs8ipU017vKQJEgl42cLc2M%2FmPjTmqk6cnosbs0ygn1ZXY2sk0jEWpiWWmuOC7SxwwXZVjXO0Qw6Vl%2BXKX%2BefAHpEX%2BsmGJJ09QonJgIlZudIvrgknF8&X-Amz-Signature=da708ebb7eb82c9e32bb90bfc18c1c5401c760b33ea745cc36368bc895690078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XVOLLW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOGhloTY9OMnvFYL7Zo%2FeEr8O6IM4fpJcTWXGdL5TtoAiEAjBUFEb%2BOMmliGK1fpJCVozqQIL8wpOqb15VZYZlbeNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnShO%2Blq38QSxOTAircA3UQiqHwR8JwkFjQvqNun916NqLsM3NLNkld9k%2BgPWMuFA6OqaNTv2pVeqAPnm4usCLrzpgO7Y4SD1JIYQhGu2eb1qUy%2BqbDJMOCdASzGIdJa3HuJ9oyE25TynYsjb%2BoGaysdXCz%2BPnRQtL1Acb5bkW4rOfeNnxvewsEI9w1YLtppF12aWBTFPDcI7ovc8s4B6VNaWmUmmg0yxiN0ksOouA4nMPdonRaGI0c3v5y2Iy%2BqPJnOKxfBd6z4NBG0PThBdUmIc3UT21TClI%2FbWPYBUQPEJrr28qhKiPI3LwjwiiU68I%2FFJ%2BKv5dmUZxr%2FFW4tHFkQ%2B4PsA%2FSVbbnFtMGWCBKIkNDg3A%2BwNGr2aTS%2FGarkg4kYvHq9qTMV2sDz%2F2e9lfWh5f7bGuCaDI1xi06g2eI%2Bu4EUnptyuRuurkSBPf8OiikJvuP0HqmOvM7FAavjUyOcMxb7wUpbW7y4R%2Bq0AWORKQHxFAmmg5j%2B8QynrMQxb2dT8akYkgY7rMbpVWZDtlXDuY8cpqKu%2F3fpXLzRtK7POafQZNjSSlFrz7W7%2BQ04HfsRu4aCQspYRJGTNOuQeN%2FzzNC3rbRc%2BwIg3GVf2Ij70rdhDZqfUNi9%2BD%2Bptp9YCcfuuD278iEbHQ%2FML7AscQGOqUB6r%2FRCTUH4Q6f64zyr6DOPMqMeCqAOrSvJO0HYDbnxzP%2Bj63u8ViTp4Mp1jVhl2H%2FFWrgKTs11j41grTzVwtjqaNeJCWEpeyFb5maJCxgRs8ipU017vKQJEgl42cLc2M%2FmPjTmqk6cnosbs0ygn1ZXY2sk0jEWpiWWmuOC7SxwwXZVjXO0Qw6Vl%2BXKX%2BefAHpEX%2BsmGJJ09QonJgIlZudIvrgknF8&X-Amz-Signature=630fda816c3f903c8932c1269b68355472e132606f20fc50fbbed42d4252a908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XVOLLW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOGhloTY9OMnvFYL7Zo%2FeEr8O6IM4fpJcTWXGdL5TtoAiEAjBUFEb%2BOMmliGK1fpJCVozqQIL8wpOqb15VZYZlbeNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnShO%2Blq38QSxOTAircA3UQiqHwR8JwkFjQvqNun916NqLsM3NLNkld9k%2BgPWMuFA6OqaNTv2pVeqAPnm4usCLrzpgO7Y4SD1JIYQhGu2eb1qUy%2BqbDJMOCdASzGIdJa3HuJ9oyE25TynYsjb%2BoGaysdXCz%2BPnRQtL1Acb5bkW4rOfeNnxvewsEI9w1YLtppF12aWBTFPDcI7ovc8s4B6VNaWmUmmg0yxiN0ksOouA4nMPdonRaGI0c3v5y2Iy%2BqPJnOKxfBd6z4NBG0PThBdUmIc3UT21TClI%2FbWPYBUQPEJrr28qhKiPI3LwjwiiU68I%2FFJ%2BKv5dmUZxr%2FFW4tHFkQ%2B4PsA%2FSVbbnFtMGWCBKIkNDg3A%2BwNGr2aTS%2FGarkg4kYvHq9qTMV2sDz%2F2e9lfWh5f7bGuCaDI1xi06g2eI%2Bu4EUnptyuRuurkSBPf8OiikJvuP0HqmOvM7FAavjUyOcMxb7wUpbW7y4R%2Bq0AWORKQHxFAmmg5j%2B8QynrMQxb2dT8akYkgY7rMbpVWZDtlXDuY8cpqKu%2F3fpXLzRtK7POafQZNjSSlFrz7W7%2BQ04HfsRu4aCQspYRJGTNOuQeN%2FzzNC3rbRc%2BwIg3GVf2Ij70rdhDZqfUNi9%2BD%2Bptp9YCcfuuD278iEbHQ%2FML7AscQGOqUB6r%2FRCTUH4Q6f64zyr6DOPMqMeCqAOrSvJO0HYDbnxzP%2Bj63u8ViTp4Mp1jVhl2H%2FFWrgKTs11j41grTzVwtjqaNeJCWEpeyFb5maJCxgRs8ipU017vKQJEgl42cLc2M%2FmPjTmqk6cnosbs0ygn1ZXY2sk0jEWpiWWmuOC7SxwwXZVjXO0Qw6Vl%2BXKX%2BefAHpEX%2BsmGJJ09QonJgIlZudIvrgknF8&X-Amz-Signature=d04ee371aed5407b28bfc74b9618e31c4b92a44bcf6a887903f3efb887b85446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XVOLLW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOGhloTY9OMnvFYL7Zo%2FeEr8O6IM4fpJcTWXGdL5TtoAiEAjBUFEb%2BOMmliGK1fpJCVozqQIL8wpOqb15VZYZlbeNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnShO%2Blq38QSxOTAircA3UQiqHwR8JwkFjQvqNun916NqLsM3NLNkld9k%2BgPWMuFA6OqaNTv2pVeqAPnm4usCLrzpgO7Y4SD1JIYQhGu2eb1qUy%2BqbDJMOCdASzGIdJa3HuJ9oyE25TynYsjb%2BoGaysdXCz%2BPnRQtL1Acb5bkW4rOfeNnxvewsEI9w1YLtppF12aWBTFPDcI7ovc8s4B6VNaWmUmmg0yxiN0ksOouA4nMPdonRaGI0c3v5y2Iy%2BqPJnOKxfBd6z4NBG0PThBdUmIc3UT21TClI%2FbWPYBUQPEJrr28qhKiPI3LwjwiiU68I%2FFJ%2BKv5dmUZxr%2FFW4tHFkQ%2B4PsA%2FSVbbnFtMGWCBKIkNDg3A%2BwNGr2aTS%2FGarkg4kYvHq9qTMV2sDz%2F2e9lfWh5f7bGuCaDI1xi06g2eI%2Bu4EUnptyuRuurkSBPf8OiikJvuP0HqmOvM7FAavjUyOcMxb7wUpbW7y4R%2Bq0AWORKQHxFAmmg5j%2B8QynrMQxb2dT8akYkgY7rMbpVWZDtlXDuY8cpqKu%2F3fpXLzRtK7POafQZNjSSlFrz7W7%2BQ04HfsRu4aCQspYRJGTNOuQeN%2FzzNC3rbRc%2BwIg3GVf2Ij70rdhDZqfUNi9%2BD%2Bptp9YCcfuuD278iEbHQ%2FML7AscQGOqUB6r%2FRCTUH4Q6f64zyr6DOPMqMeCqAOrSvJO0HYDbnxzP%2Bj63u8ViTp4Mp1jVhl2H%2FFWrgKTs11j41grTzVwtjqaNeJCWEpeyFb5maJCxgRs8ipU017vKQJEgl42cLc2M%2FmPjTmqk6cnosbs0ygn1ZXY2sk0jEWpiWWmuOC7SxwwXZVjXO0Qw6Vl%2BXKX%2BefAHpEX%2BsmGJJ09QonJgIlZudIvrgknF8&X-Amz-Signature=1c5720bc7668d05bd8af068b284611d3aa252c5e4306c0b227c688635fb1b872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XVOLLW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOGhloTY9OMnvFYL7Zo%2FeEr8O6IM4fpJcTWXGdL5TtoAiEAjBUFEb%2BOMmliGK1fpJCVozqQIL8wpOqb15VZYZlbeNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnShO%2Blq38QSxOTAircA3UQiqHwR8JwkFjQvqNun916NqLsM3NLNkld9k%2BgPWMuFA6OqaNTv2pVeqAPnm4usCLrzpgO7Y4SD1JIYQhGu2eb1qUy%2BqbDJMOCdASzGIdJa3HuJ9oyE25TynYsjb%2BoGaysdXCz%2BPnRQtL1Acb5bkW4rOfeNnxvewsEI9w1YLtppF12aWBTFPDcI7ovc8s4B6VNaWmUmmg0yxiN0ksOouA4nMPdonRaGI0c3v5y2Iy%2BqPJnOKxfBd6z4NBG0PThBdUmIc3UT21TClI%2FbWPYBUQPEJrr28qhKiPI3LwjwiiU68I%2FFJ%2BKv5dmUZxr%2FFW4tHFkQ%2B4PsA%2FSVbbnFtMGWCBKIkNDg3A%2BwNGr2aTS%2FGarkg4kYvHq9qTMV2sDz%2F2e9lfWh5f7bGuCaDI1xi06g2eI%2Bu4EUnptyuRuurkSBPf8OiikJvuP0HqmOvM7FAavjUyOcMxb7wUpbW7y4R%2Bq0AWORKQHxFAmmg5j%2B8QynrMQxb2dT8akYkgY7rMbpVWZDtlXDuY8cpqKu%2F3fpXLzRtK7POafQZNjSSlFrz7W7%2BQ04HfsRu4aCQspYRJGTNOuQeN%2FzzNC3rbRc%2BwIg3GVf2Ij70rdhDZqfUNi9%2BD%2Bptp9YCcfuuD278iEbHQ%2FML7AscQGOqUB6r%2FRCTUH4Q6f64zyr6DOPMqMeCqAOrSvJO0HYDbnxzP%2Bj63u8ViTp4Mp1jVhl2H%2FFWrgKTs11j41grTzVwtjqaNeJCWEpeyFb5maJCxgRs8ipU017vKQJEgl42cLc2M%2FmPjTmqk6cnosbs0ygn1ZXY2sk0jEWpiWWmuOC7SxwwXZVjXO0Qw6Vl%2BXKX%2BefAHpEX%2BsmGJJ09QonJgIlZudIvrgknF8&X-Amz-Signature=ffc6b675e9856d4c8b1dd19153bfca4470943fc93902bfb915368ed04c90e957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
