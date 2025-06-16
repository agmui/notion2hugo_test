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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZMEAU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFKrppsGIj2LLnNjOHeTix7q3jfhAR6eMFb3%2FNgpqTYzAiBzoG68VC9zRqwJu2hbLWYLpkuZ4rGPudw%2BZixBR73%2B6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMRFh4jTfEUEeUqw6hKtwDHsCrbSeDSJUE72bYJexK1CfiB2ExiZ7uLk2MOAKzbi5H681vEXp9t4YgnFe1i724ZpzknkdhEzmuWxudkKCfw8sFBU5xSRmyj7G2JLZA9GvCl%2Bt1kmS0WXIL06jVwaiXm6%2FWkWImLABpsUvw9IbtQOLR8FNJTRfqRQHd7QxRbaXYlFX%2BvanGB2hx0TZzdko65kfEJx8uDQnxYSj%2Bq9QAfcoxs5CorwwwHld1gVC5neZa7bjfa51VRjQMgbFiyJA%2Fc3QjamxKdsO6u5wujNNkpMjE2phefuOqQPQ%2FebmAL7Slib%2BZqYNx829xDOKaiN3bogstNUkh27Tokve%2B1dEBSUPOlxmuOVjf6%2BJNXsOumROK4YqzGgKiUBsTBOtEo10hz3HXYOxnE1Th9xCPC%2FxWeKd%2B8gEitGf5YLrWmmgQ3wKIZdNC7GhYzyE25IDRpIXJlgrXKajpTSp9DKJ9pew6BKIZ29z34ncXFWkHduBJ8mU%2ByPMRqVDvuozME4YlnT04b8uGJ%2BjDZe0ScxOO6gqfud058aDXSLPdt%2FSnUe7y8%2F5oNAtqPgnC45Hme0rx1vdWlBsB%2BXGKQ6Z7ZZC2jas3QG9SNVzqXBwpfpjK2bi45r4HAySpTh9hFtd3Le0wybfBwgY6pgFEvhtGEKMw%2FOzNgAeYoJiAj9PPWintq%2BeWusKRy8T7p6naohSjmaVVFX4ITI5n32JN76cNEIvgcpeE2YVqJeSq%2FFV1r2dKfUIM6BCT7S30LRYELMHTYFWTQybt0ubNr6j%2FS80QfgHtvK%2FeD6qj67YmFr5PWyJW3CzDI6pUS9eetBRjQmZnWOs0MNhemUeTK2UzDSutqUXX%2Bzv6%2FG9TK7atQFJFpW%2F4&X-Amz-Signature=5872622cd1f3af9fac2589739164cbc699d14add5fe1d3a99e880ebcd926e268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZMEAU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFKrppsGIj2LLnNjOHeTix7q3jfhAR6eMFb3%2FNgpqTYzAiBzoG68VC9zRqwJu2hbLWYLpkuZ4rGPudw%2BZixBR73%2B6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMRFh4jTfEUEeUqw6hKtwDHsCrbSeDSJUE72bYJexK1CfiB2ExiZ7uLk2MOAKzbi5H681vEXp9t4YgnFe1i724ZpzknkdhEzmuWxudkKCfw8sFBU5xSRmyj7G2JLZA9GvCl%2Bt1kmS0WXIL06jVwaiXm6%2FWkWImLABpsUvw9IbtQOLR8FNJTRfqRQHd7QxRbaXYlFX%2BvanGB2hx0TZzdko65kfEJx8uDQnxYSj%2Bq9QAfcoxs5CorwwwHld1gVC5neZa7bjfa51VRjQMgbFiyJA%2Fc3QjamxKdsO6u5wujNNkpMjE2phefuOqQPQ%2FebmAL7Slib%2BZqYNx829xDOKaiN3bogstNUkh27Tokve%2B1dEBSUPOlxmuOVjf6%2BJNXsOumROK4YqzGgKiUBsTBOtEo10hz3HXYOxnE1Th9xCPC%2FxWeKd%2B8gEitGf5YLrWmmgQ3wKIZdNC7GhYzyE25IDRpIXJlgrXKajpTSp9DKJ9pew6BKIZ29z34ncXFWkHduBJ8mU%2ByPMRqVDvuozME4YlnT04b8uGJ%2BjDZe0ScxOO6gqfud058aDXSLPdt%2FSnUe7y8%2F5oNAtqPgnC45Hme0rx1vdWlBsB%2BXGKQ6Z7ZZC2jas3QG9SNVzqXBwpfpjK2bi45r4HAySpTh9hFtd3Le0wybfBwgY6pgFEvhtGEKMw%2FOzNgAeYoJiAj9PPWintq%2BeWusKRy8T7p6naohSjmaVVFX4ITI5n32JN76cNEIvgcpeE2YVqJeSq%2FFV1r2dKfUIM6BCT7S30LRYELMHTYFWTQybt0ubNr6j%2FS80QfgHtvK%2FeD6qj67YmFr5PWyJW3CzDI6pUS9eetBRjQmZnWOs0MNhemUeTK2UzDSutqUXX%2Bzv6%2FG9TK7atQFJFpW%2F4&X-Amz-Signature=ee71de8fb66c4a215fc13080d832eee28048ab85ae800673e2557af8e18056f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZMEAU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFKrppsGIj2LLnNjOHeTix7q3jfhAR6eMFb3%2FNgpqTYzAiBzoG68VC9zRqwJu2hbLWYLpkuZ4rGPudw%2BZixBR73%2B6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMRFh4jTfEUEeUqw6hKtwDHsCrbSeDSJUE72bYJexK1CfiB2ExiZ7uLk2MOAKzbi5H681vEXp9t4YgnFe1i724ZpzknkdhEzmuWxudkKCfw8sFBU5xSRmyj7G2JLZA9GvCl%2Bt1kmS0WXIL06jVwaiXm6%2FWkWImLABpsUvw9IbtQOLR8FNJTRfqRQHd7QxRbaXYlFX%2BvanGB2hx0TZzdko65kfEJx8uDQnxYSj%2Bq9QAfcoxs5CorwwwHld1gVC5neZa7bjfa51VRjQMgbFiyJA%2Fc3QjamxKdsO6u5wujNNkpMjE2phefuOqQPQ%2FebmAL7Slib%2BZqYNx829xDOKaiN3bogstNUkh27Tokve%2B1dEBSUPOlxmuOVjf6%2BJNXsOumROK4YqzGgKiUBsTBOtEo10hz3HXYOxnE1Th9xCPC%2FxWeKd%2B8gEitGf5YLrWmmgQ3wKIZdNC7GhYzyE25IDRpIXJlgrXKajpTSp9DKJ9pew6BKIZ29z34ncXFWkHduBJ8mU%2ByPMRqVDvuozME4YlnT04b8uGJ%2BjDZe0ScxOO6gqfud058aDXSLPdt%2FSnUe7y8%2F5oNAtqPgnC45Hme0rx1vdWlBsB%2BXGKQ6Z7ZZC2jas3QG9SNVzqXBwpfpjK2bi45r4HAySpTh9hFtd3Le0wybfBwgY6pgFEvhtGEKMw%2FOzNgAeYoJiAj9PPWintq%2BeWusKRy8T7p6naohSjmaVVFX4ITI5n32JN76cNEIvgcpeE2YVqJeSq%2FFV1r2dKfUIM6BCT7S30LRYELMHTYFWTQybt0ubNr6j%2FS80QfgHtvK%2FeD6qj67YmFr5PWyJW3CzDI6pUS9eetBRjQmZnWOs0MNhemUeTK2UzDSutqUXX%2Bzv6%2FG9TK7atQFJFpW%2F4&X-Amz-Signature=a14c6ecc583d1c6fa4edd704c65fcb7ac24ec1ca40a182d8923ad0d8496dcd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZMEAU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFKrppsGIj2LLnNjOHeTix7q3jfhAR6eMFb3%2FNgpqTYzAiBzoG68VC9zRqwJu2hbLWYLpkuZ4rGPudw%2BZixBR73%2B6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMRFh4jTfEUEeUqw6hKtwDHsCrbSeDSJUE72bYJexK1CfiB2ExiZ7uLk2MOAKzbi5H681vEXp9t4YgnFe1i724ZpzknkdhEzmuWxudkKCfw8sFBU5xSRmyj7G2JLZA9GvCl%2Bt1kmS0WXIL06jVwaiXm6%2FWkWImLABpsUvw9IbtQOLR8FNJTRfqRQHd7QxRbaXYlFX%2BvanGB2hx0TZzdko65kfEJx8uDQnxYSj%2Bq9QAfcoxs5CorwwwHld1gVC5neZa7bjfa51VRjQMgbFiyJA%2Fc3QjamxKdsO6u5wujNNkpMjE2phefuOqQPQ%2FebmAL7Slib%2BZqYNx829xDOKaiN3bogstNUkh27Tokve%2B1dEBSUPOlxmuOVjf6%2BJNXsOumROK4YqzGgKiUBsTBOtEo10hz3HXYOxnE1Th9xCPC%2FxWeKd%2B8gEitGf5YLrWmmgQ3wKIZdNC7GhYzyE25IDRpIXJlgrXKajpTSp9DKJ9pew6BKIZ29z34ncXFWkHduBJ8mU%2ByPMRqVDvuozME4YlnT04b8uGJ%2BjDZe0ScxOO6gqfud058aDXSLPdt%2FSnUe7y8%2F5oNAtqPgnC45Hme0rx1vdWlBsB%2BXGKQ6Z7ZZC2jas3QG9SNVzqXBwpfpjK2bi45r4HAySpTh9hFtd3Le0wybfBwgY6pgFEvhtGEKMw%2FOzNgAeYoJiAj9PPWintq%2BeWusKRy8T7p6naohSjmaVVFX4ITI5n32JN76cNEIvgcpeE2YVqJeSq%2FFV1r2dKfUIM6BCT7S30LRYELMHTYFWTQybt0ubNr6j%2FS80QfgHtvK%2FeD6qj67YmFr5PWyJW3CzDI6pUS9eetBRjQmZnWOs0MNhemUeTK2UzDSutqUXX%2Bzv6%2FG9TK7atQFJFpW%2F4&X-Amz-Signature=f336ce34d6abb9aa9786e5c9bee296078e8452665c4f0ca5acf28c1489ba3912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZMEAU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFKrppsGIj2LLnNjOHeTix7q3jfhAR6eMFb3%2FNgpqTYzAiBzoG68VC9zRqwJu2hbLWYLpkuZ4rGPudw%2BZixBR73%2B6Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMRFh4jTfEUEeUqw6hKtwDHsCrbSeDSJUE72bYJexK1CfiB2ExiZ7uLk2MOAKzbi5H681vEXp9t4YgnFe1i724ZpzknkdhEzmuWxudkKCfw8sFBU5xSRmyj7G2JLZA9GvCl%2Bt1kmS0WXIL06jVwaiXm6%2FWkWImLABpsUvw9IbtQOLR8FNJTRfqRQHd7QxRbaXYlFX%2BvanGB2hx0TZzdko65kfEJx8uDQnxYSj%2Bq9QAfcoxs5CorwwwHld1gVC5neZa7bjfa51VRjQMgbFiyJA%2Fc3QjamxKdsO6u5wujNNkpMjE2phefuOqQPQ%2FebmAL7Slib%2BZqYNx829xDOKaiN3bogstNUkh27Tokve%2B1dEBSUPOlxmuOVjf6%2BJNXsOumROK4YqzGgKiUBsTBOtEo10hz3HXYOxnE1Th9xCPC%2FxWeKd%2B8gEitGf5YLrWmmgQ3wKIZdNC7GhYzyE25IDRpIXJlgrXKajpTSp9DKJ9pew6BKIZ29z34ncXFWkHduBJ8mU%2ByPMRqVDvuozME4YlnT04b8uGJ%2BjDZe0ScxOO6gqfud058aDXSLPdt%2FSnUe7y8%2F5oNAtqPgnC45Hme0rx1vdWlBsB%2BXGKQ6Z7ZZC2jas3QG9SNVzqXBwpfpjK2bi45r4HAySpTh9hFtd3Le0wybfBwgY6pgFEvhtGEKMw%2FOzNgAeYoJiAj9PPWintq%2BeWusKRy8T7p6naohSjmaVVFX4ITI5n32JN76cNEIvgcpeE2YVqJeSq%2FFV1r2dKfUIM6BCT7S30LRYELMHTYFWTQybt0ubNr6j%2FS80QfgHtvK%2FeD6qj67YmFr5PWyJW3CzDI6pUS9eetBRjQmZnWOs0MNhemUeTK2UzDSutqUXX%2Bzv6%2FG9TK7atQFJFpW%2F4&X-Amz-Signature=1b83f0d0f3dd39f0644cb45e7eaeaf01085ae55942f7c2138275f4e586a14487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
