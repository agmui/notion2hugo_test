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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGM2YRNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkBEuaINGXVtMrgecB1c7zmZ3QtkNurhk1t5SlPBbnGAiEAmaDFewv1qf%2Foq017fsbFDVqMMYz8Bxup6cqq74kTkOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDes%2B3AjquZM%2FIrUoSrcA9xATAYBqqmvNAVcmDaJYeGcfyaPE%2FLHp%2FDTWKLCzU9kva5b351rpVT4g5BgEKG7G6SceIkV9wrEjzaxRzhokz6973vyG7a5gMAHjHtC95J9bNR3nk8LBLNkr353TB2S8eS4QGHY0Vt5Ye%2FuiCrDIaQNUSO6Jx17aAGCXxZtqPfLMgi05QmBamvgymQfKeIwq%2FsioQUiKVWLdGrvRnDu0MLUQXxK5fBcWuoT51LZmp%2FBYrgCLsRgtkYy9kbOSaFoDwj6PbnWyqV8ni7tf%2Fghovy9sewsDcxcZWmi%2Bk2cIpdkJ4k3hX%2FR2lfLT%2BYzKnN1jgd6VUhjQO7%2F1RxBa1xs9ZoVY1JBgMjoIh11%2FhJI3UmjOUZ%2BDpQ1ghxp2bxULAwdK6Ocgsvxfmq18zHk3LyI0OQZrRshwg7hi12KXxmmwGroOjslL%2FJ92KEijZjqfzGM5fwd0aIN4DorlxcCJIGcPv3X5ti2OKwoGYr6B95zaxzn5IdAuGh96cMYR0vJqEmx%2B1k1Tb3nbTR5%2FSM7%2FTq9FdWXhN93yB2X5OHVftLLlFzskgDj2ostPNIOC6AUpCGt7k3NUlRTcZu8zihMZcsUTYsOl465Kxjst%2BdeV3oRC%2F9b0wun8b%2BGnUY88zLrMP%2F858EGOqUBHpoC5vLFUnmnWMrTPq8JCg7GNNyKM7YO4hGs%2FAN%2BJXqZWokxSCxGUBU4IHrwhZEcvfW2CatbmudwN%2F3QVt%2FuWW4OpAtUKcBeNZ4m1Tll85Co2Dsl3xCImtIIaaNoLXS0D4NZOd8gEw1ITXEygKA%2F5syl6M5nw6pRuoCeH14DZGkIiB8f20jjjt4ccEVnkwJd9V8tz5BOJNdAXjn32lV3EmRUz2Qc&X-Amz-Signature=3e93874733299608dd391e26b69a1d69fc577b9b90014ae557599ad842d0de41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGM2YRNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkBEuaINGXVtMrgecB1c7zmZ3QtkNurhk1t5SlPBbnGAiEAmaDFewv1qf%2Foq017fsbFDVqMMYz8Bxup6cqq74kTkOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDes%2B3AjquZM%2FIrUoSrcA9xATAYBqqmvNAVcmDaJYeGcfyaPE%2FLHp%2FDTWKLCzU9kva5b351rpVT4g5BgEKG7G6SceIkV9wrEjzaxRzhokz6973vyG7a5gMAHjHtC95J9bNR3nk8LBLNkr353TB2S8eS4QGHY0Vt5Ye%2FuiCrDIaQNUSO6Jx17aAGCXxZtqPfLMgi05QmBamvgymQfKeIwq%2FsioQUiKVWLdGrvRnDu0MLUQXxK5fBcWuoT51LZmp%2FBYrgCLsRgtkYy9kbOSaFoDwj6PbnWyqV8ni7tf%2Fghovy9sewsDcxcZWmi%2Bk2cIpdkJ4k3hX%2FR2lfLT%2BYzKnN1jgd6VUhjQO7%2F1RxBa1xs9ZoVY1JBgMjoIh11%2FhJI3UmjOUZ%2BDpQ1ghxp2bxULAwdK6Ocgsvxfmq18zHk3LyI0OQZrRshwg7hi12KXxmmwGroOjslL%2FJ92KEijZjqfzGM5fwd0aIN4DorlxcCJIGcPv3X5ti2OKwoGYr6B95zaxzn5IdAuGh96cMYR0vJqEmx%2B1k1Tb3nbTR5%2FSM7%2FTq9FdWXhN93yB2X5OHVftLLlFzskgDj2ostPNIOC6AUpCGt7k3NUlRTcZu8zihMZcsUTYsOl465Kxjst%2BdeV3oRC%2F9b0wun8b%2BGnUY88zLrMP%2F858EGOqUBHpoC5vLFUnmnWMrTPq8JCg7GNNyKM7YO4hGs%2FAN%2BJXqZWokxSCxGUBU4IHrwhZEcvfW2CatbmudwN%2F3QVt%2FuWW4OpAtUKcBeNZ4m1Tll85Co2Dsl3xCImtIIaaNoLXS0D4NZOd8gEw1ITXEygKA%2F5syl6M5nw6pRuoCeH14DZGkIiB8f20jjjt4ccEVnkwJd9V8tz5BOJNdAXjn32lV3EmRUz2Qc&X-Amz-Signature=7733dc2c17d2cb24d090c0cd8180a7147140d0db358c26ab60062d03aa61348c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGM2YRNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkBEuaINGXVtMrgecB1c7zmZ3QtkNurhk1t5SlPBbnGAiEAmaDFewv1qf%2Foq017fsbFDVqMMYz8Bxup6cqq74kTkOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDes%2B3AjquZM%2FIrUoSrcA9xATAYBqqmvNAVcmDaJYeGcfyaPE%2FLHp%2FDTWKLCzU9kva5b351rpVT4g5BgEKG7G6SceIkV9wrEjzaxRzhokz6973vyG7a5gMAHjHtC95J9bNR3nk8LBLNkr353TB2S8eS4QGHY0Vt5Ye%2FuiCrDIaQNUSO6Jx17aAGCXxZtqPfLMgi05QmBamvgymQfKeIwq%2FsioQUiKVWLdGrvRnDu0MLUQXxK5fBcWuoT51LZmp%2FBYrgCLsRgtkYy9kbOSaFoDwj6PbnWyqV8ni7tf%2Fghovy9sewsDcxcZWmi%2Bk2cIpdkJ4k3hX%2FR2lfLT%2BYzKnN1jgd6VUhjQO7%2F1RxBa1xs9ZoVY1JBgMjoIh11%2FhJI3UmjOUZ%2BDpQ1ghxp2bxULAwdK6Ocgsvxfmq18zHk3LyI0OQZrRshwg7hi12KXxmmwGroOjslL%2FJ92KEijZjqfzGM5fwd0aIN4DorlxcCJIGcPv3X5ti2OKwoGYr6B95zaxzn5IdAuGh96cMYR0vJqEmx%2B1k1Tb3nbTR5%2FSM7%2FTq9FdWXhN93yB2X5OHVftLLlFzskgDj2ostPNIOC6AUpCGt7k3NUlRTcZu8zihMZcsUTYsOl465Kxjst%2BdeV3oRC%2F9b0wun8b%2BGnUY88zLrMP%2F858EGOqUBHpoC5vLFUnmnWMrTPq8JCg7GNNyKM7YO4hGs%2FAN%2BJXqZWokxSCxGUBU4IHrwhZEcvfW2CatbmudwN%2F3QVt%2FuWW4OpAtUKcBeNZ4m1Tll85Co2Dsl3xCImtIIaaNoLXS0D4NZOd8gEw1ITXEygKA%2F5syl6M5nw6pRuoCeH14DZGkIiB8f20jjjt4ccEVnkwJd9V8tz5BOJNdAXjn32lV3EmRUz2Qc&X-Amz-Signature=bc2b6a70ce3f98705b853f555f160a26f1f1a0f42ac3e1532504933b8ed16183&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGM2YRNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkBEuaINGXVtMrgecB1c7zmZ3QtkNurhk1t5SlPBbnGAiEAmaDFewv1qf%2Foq017fsbFDVqMMYz8Bxup6cqq74kTkOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDes%2B3AjquZM%2FIrUoSrcA9xATAYBqqmvNAVcmDaJYeGcfyaPE%2FLHp%2FDTWKLCzU9kva5b351rpVT4g5BgEKG7G6SceIkV9wrEjzaxRzhokz6973vyG7a5gMAHjHtC95J9bNR3nk8LBLNkr353TB2S8eS4QGHY0Vt5Ye%2FuiCrDIaQNUSO6Jx17aAGCXxZtqPfLMgi05QmBamvgymQfKeIwq%2FsioQUiKVWLdGrvRnDu0MLUQXxK5fBcWuoT51LZmp%2FBYrgCLsRgtkYy9kbOSaFoDwj6PbnWyqV8ni7tf%2Fghovy9sewsDcxcZWmi%2Bk2cIpdkJ4k3hX%2FR2lfLT%2BYzKnN1jgd6VUhjQO7%2F1RxBa1xs9ZoVY1JBgMjoIh11%2FhJI3UmjOUZ%2BDpQ1ghxp2bxULAwdK6Ocgsvxfmq18zHk3LyI0OQZrRshwg7hi12KXxmmwGroOjslL%2FJ92KEijZjqfzGM5fwd0aIN4DorlxcCJIGcPv3X5ti2OKwoGYr6B95zaxzn5IdAuGh96cMYR0vJqEmx%2B1k1Tb3nbTR5%2FSM7%2FTq9FdWXhN93yB2X5OHVftLLlFzskgDj2ostPNIOC6AUpCGt7k3NUlRTcZu8zihMZcsUTYsOl465Kxjst%2BdeV3oRC%2F9b0wun8b%2BGnUY88zLrMP%2F858EGOqUBHpoC5vLFUnmnWMrTPq8JCg7GNNyKM7YO4hGs%2FAN%2BJXqZWokxSCxGUBU4IHrwhZEcvfW2CatbmudwN%2F3QVt%2FuWW4OpAtUKcBeNZ4m1Tll85Co2Dsl3xCImtIIaaNoLXS0D4NZOd8gEw1ITXEygKA%2F5syl6M5nw6pRuoCeH14DZGkIiB8f20jjjt4ccEVnkwJd9V8tz5BOJNdAXjn32lV3EmRUz2Qc&X-Amz-Signature=b3cfa39472c5dfff8bcdafa59a91d6ee0a0733a3f64772fd5af24aaef41b11fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGM2YRNW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkBEuaINGXVtMrgecB1c7zmZ3QtkNurhk1t5SlPBbnGAiEAmaDFewv1qf%2Foq017fsbFDVqMMYz8Bxup6cqq74kTkOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDes%2B3AjquZM%2FIrUoSrcA9xATAYBqqmvNAVcmDaJYeGcfyaPE%2FLHp%2FDTWKLCzU9kva5b351rpVT4g5BgEKG7G6SceIkV9wrEjzaxRzhokz6973vyG7a5gMAHjHtC95J9bNR3nk8LBLNkr353TB2S8eS4QGHY0Vt5Ye%2FuiCrDIaQNUSO6Jx17aAGCXxZtqPfLMgi05QmBamvgymQfKeIwq%2FsioQUiKVWLdGrvRnDu0MLUQXxK5fBcWuoT51LZmp%2FBYrgCLsRgtkYy9kbOSaFoDwj6PbnWyqV8ni7tf%2Fghovy9sewsDcxcZWmi%2Bk2cIpdkJ4k3hX%2FR2lfLT%2BYzKnN1jgd6VUhjQO7%2F1RxBa1xs9ZoVY1JBgMjoIh11%2FhJI3UmjOUZ%2BDpQ1ghxp2bxULAwdK6Ocgsvxfmq18zHk3LyI0OQZrRshwg7hi12KXxmmwGroOjslL%2FJ92KEijZjqfzGM5fwd0aIN4DorlxcCJIGcPv3X5ti2OKwoGYr6B95zaxzn5IdAuGh96cMYR0vJqEmx%2B1k1Tb3nbTR5%2FSM7%2FTq9FdWXhN93yB2X5OHVftLLlFzskgDj2ostPNIOC6AUpCGt7k3NUlRTcZu8zihMZcsUTYsOl465Kxjst%2BdeV3oRC%2F9b0wun8b%2BGnUY88zLrMP%2F858EGOqUBHpoC5vLFUnmnWMrTPq8JCg7GNNyKM7YO4hGs%2FAN%2BJXqZWokxSCxGUBU4IHrwhZEcvfW2CatbmudwN%2F3QVt%2FuWW4OpAtUKcBeNZ4m1Tll85Co2Dsl3xCImtIIaaNoLXS0D4NZOd8gEw1ITXEygKA%2F5syl6M5nw6pRuoCeH14DZGkIiB8f20jjjt4ccEVnkwJd9V8tz5BOJNdAXjn32lV3EmRUz2Qc&X-Amz-Signature=e9d71fdfd3178f1233e4722ae43f73cb067f5db1e3a52775d661887462541f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
