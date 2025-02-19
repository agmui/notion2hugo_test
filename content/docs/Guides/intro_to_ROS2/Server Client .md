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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5XN5RN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC%2FZszSuZugJ5pd8lruacTFXxN3hYHMkW6tMUbONhIWlwIgQVbHyj6scoPCyN80ZZqcHWTVoivVQZVnQwGnkLkE%2BpQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPDwT9bUw4sJzC0kCrcA08EZE5vCu827YcP0DXIPqMIux%2BEw37hcHq34f8gPtL1DJPTH4pMl2BO4ydaDCSjF960ADLY6CPdpCBnwOTjL1QN%2Fol3XsSe%2BUIypVGsjuEiURibwj1Cbn0IlILtDvihG01%2Fr4871xiTHj%2BmnL7NIV59ICUDESGIaQ6WvDiQSGnMZr37%2FrPaG8HJLXzsFc0R2B%2Fbl%2F%2FUr9g3H%2BXyeHdciOFRxzAgW6e1aI5rWzDNPvEqGPFVoQts6DjMJF1LPw%2FCUW1zxfeUXtRmlRn3NUhbGLRHkuGNaS8SQTUeZCGn0K7d5zjBNldjpb02O0%2F54FpcJ%2B6vLAxfjF7%2FIndjQO0clTzii323AQewNwXExea3zYyvrQ3RdhGjJJUJmgEjgk%2BsxIDRrnKdQCcyuNra6SjyvYuyNcmexzA9jBVdAO6Hi3axWiglssNdVd%2FsURDit3NLfDXtaWkpBmYCkq6SDi3%2BUFrbxe%2F194CPfiMmvPSINPR6esoNFno8W%2FjiYkx07mN8NXXk%2FxliZiZMU%2Ft7ZtXPZbB5UWgmLQk4ExaGnJ5GZYOMoFBy6%2FXwxnlmEXdhSqeO3p1u7qHF5bt81LoMDywall514%2F6vUg9LXIhktofBg%2FBoA5wfQg91kg%2FPo%2FZKMLXM1L0GOqUBhjPh3dkkTbwY3OkHpNFZeHdKNINoTHcvcdbfFrC9zPPonD8Bx%2BfUevvEkcVMMnADOiwY6AY5zcii7ZTCxLxaoGSnb0PEaV8avYIbeoLHZUD3wVNyU2aahQtVTheVrrf09SwFpbC3eRkIx%2FuHt%2FHMgbscWikGd5NpWPSnn8X7Yzhii4s1KZ8wNwNtyQKMTnxaQWcstxxBsjhhLPYhCT%2FfGpJ%2BUW%2FL&X-Amz-Signature=0c0f16ce21fb161c9272b5d8edfb159fc44c4252f5dd2e104619af9dbd3765fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5XN5RN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC%2FZszSuZugJ5pd8lruacTFXxN3hYHMkW6tMUbONhIWlwIgQVbHyj6scoPCyN80ZZqcHWTVoivVQZVnQwGnkLkE%2BpQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPDwT9bUw4sJzC0kCrcA08EZE5vCu827YcP0DXIPqMIux%2BEw37hcHq34f8gPtL1DJPTH4pMl2BO4ydaDCSjF960ADLY6CPdpCBnwOTjL1QN%2Fol3XsSe%2BUIypVGsjuEiURibwj1Cbn0IlILtDvihG01%2Fr4871xiTHj%2BmnL7NIV59ICUDESGIaQ6WvDiQSGnMZr37%2FrPaG8HJLXzsFc0R2B%2Fbl%2F%2FUr9g3H%2BXyeHdciOFRxzAgW6e1aI5rWzDNPvEqGPFVoQts6DjMJF1LPw%2FCUW1zxfeUXtRmlRn3NUhbGLRHkuGNaS8SQTUeZCGn0K7d5zjBNldjpb02O0%2F54FpcJ%2B6vLAxfjF7%2FIndjQO0clTzii323AQewNwXExea3zYyvrQ3RdhGjJJUJmgEjgk%2BsxIDRrnKdQCcyuNra6SjyvYuyNcmexzA9jBVdAO6Hi3axWiglssNdVd%2FsURDit3NLfDXtaWkpBmYCkq6SDi3%2BUFrbxe%2F194CPfiMmvPSINPR6esoNFno8W%2FjiYkx07mN8NXXk%2FxliZiZMU%2Ft7ZtXPZbB5UWgmLQk4ExaGnJ5GZYOMoFBy6%2FXwxnlmEXdhSqeO3p1u7qHF5bt81LoMDywall514%2F6vUg9LXIhktofBg%2FBoA5wfQg91kg%2FPo%2FZKMLXM1L0GOqUBhjPh3dkkTbwY3OkHpNFZeHdKNINoTHcvcdbfFrC9zPPonD8Bx%2BfUevvEkcVMMnADOiwY6AY5zcii7ZTCxLxaoGSnb0PEaV8avYIbeoLHZUD3wVNyU2aahQtVTheVrrf09SwFpbC3eRkIx%2FuHt%2FHMgbscWikGd5NpWPSnn8X7Yzhii4s1KZ8wNwNtyQKMTnxaQWcstxxBsjhhLPYhCT%2FfGpJ%2BUW%2FL&X-Amz-Signature=23d72da735ed40434e14f4a25a4a97a7dadf3ebb4d3ae1b9c5b47ba070d07689&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5XN5RN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC%2FZszSuZugJ5pd8lruacTFXxN3hYHMkW6tMUbONhIWlwIgQVbHyj6scoPCyN80ZZqcHWTVoivVQZVnQwGnkLkE%2BpQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPDwT9bUw4sJzC0kCrcA08EZE5vCu827YcP0DXIPqMIux%2BEw37hcHq34f8gPtL1DJPTH4pMl2BO4ydaDCSjF960ADLY6CPdpCBnwOTjL1QN%2Fol3XsSe%2BUIypVGsjuEiURibwj1Cbn0IlILtDvihG01%2Fr4871xiTHj%2BmnL7NIV59ICUDESGIaQ6WvDiQSGnMZr37%2FrPaG8HJLXzsFc0R2B%2Fbl%2F%2FUr9g3H%2BXyeHdciOFRxzAgW6e1aI5rWzDNPvEqGPFVoQts6DjMJF1LPw%2FCUW1zxfeUXtRmlRn3NUhbGLRHkuGNaS8SQTUeZCGn0K7d5zjBNldjpb02O0%2F54FpcJ%2B6vLAxfjF7%2FIndjQO0clTzii323AQewNwXExea3zYyvrQ3RdhGjJJUJmgEjgk%2BsxIDRrnKdQCcyuNra6SjyvYuyNcmexzA9jBVdAO6Hi3axWiglssNdVd%2FsURDit3NLfDXtaWkpBmYCkq6SDi3%2BUFrbxe%2F194CPfiMmvPSINPR6esoNFno8W%2FjiYkx07mN8NXXk%2FxliZiZMU%2Ft7ZtXPZbB5UWgmLQk4ExaGnJ5GZYOMoFBy6%2FXwxnlmEXdhSqeO3p1u7qHF5bt81LoMDywall514%2F6vUg9LXIhktofBg%2FBoA5wfQg91kg%2FPo%2FZKMLXM1L0GOqUBhjPh3dkkTbwY3OkHpNFZeHdKNINoTHcvcdbfFrC9zPPonD8Bx%2BfUevvEkcVMMnADOiwY6AY5zcii7ZTCxLxaoGSnb0PEaV8avYIbeoLHZUD3wVNyU2aahQtVTheVrrf09SwFpbC3eRkIx%2FuHt%2FHMgbscWikGd5NpWPSnn8X7Yzhii4s1KZ8wNwNtyQKMTnxaQWcstxxBsjhhLPYhCT%2FfGpJ%2BUW%2FL&X-Amz-Signature=88ea86218b0faf48b1c0fd796f2abaa18623b48e46c554b6815b63693dda812d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5XN5RN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC%2FZszSuZugJ5pd8lruacTFXxN3hYHMkW6tMUbONhIWlwIgQVbHyj6scoPCyN80ZZqcHWTVoivVQZVnQwGnkLkE%2BpQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPDwT9bUw4sJzC0kCrcA08EZE5vCu827YcP0DXIPqMIux%2BEw37hcHq34f8gPtL1DJPTH4pMl2BO4ydaDCSjF960ADLY6CPdpCBnwOTjL1QN%2Fol3XsSe%2BUIypVGsjuEiURibwj1Cbn0IlILtDvihG01%2Fr4871xiTHj%2BmnL7NIV59ICUDESGIaQ6WvDiQSGnMZr37%2FrPaG8HJLXzsFc0R2B%2Fbl%2F%2FUr9g3H%2BXyeHdciOFRxzAgW6e1aI5rWzDNPvEqGPFVoQts6DjMJF1LPw%2FCUW1zxfeUXtRmlRn3NUhbGLRHkuGNaS8SQTUeZCGn0K7d5zjBNldjpb02O0%2F54FpcJ%2B6vLAxfjF7%2FIndjQO0clTzii323AQewNwXExea3zYyvrQ3RdhGjJJUJmgEjgk%2BsxIDRrnKdQCcyuNra6SjyvYuyNcmexzA9jBVdAO6Hi3axWiglssNdVd%2FsURDit3NLfDXtaWkpBmYCkq6SDi3%2BUFrbxe%2F194CPfiMmvPSINPR6esoNFno8W%2FjiYkx07mN8NXXk%2FxliZiZMU%2Ft7ZtXPZbB5UWgmLQk4ExaGnJ5GZYOMoFBy6%2FXwxnlmEXdhSqeO3p1u7qHF5bt81LoMDywall514%2F6vUg9LXIhktofBg%2FBoA5wfQg91kg%2FPo%2FZKMLXM1L0GOqUBhjPh3dkkTbwY3OkHpNFZeHdKNINoTHcvcdbfFrC9zPPonD8Bx%2BfUevvEkcVMMnADOiwY6AY5zcii7ZTCxLxaoGSnb0PEaV8avYIbeoLHZUD3wVNyU2aahQtVTheVrrf09SwFpbC3eRkIx%2FuHt%2FHMgbscWikGd5NpWPSnn8X7Yzhii4s1KZ8wNwNtyQKMTnxaQWcstxxBsjhhLPYhCT%2FfGpJ%2BUW%2FL&X-Amz-Signature=8d40ecd4eca7708381be806228bb227bf7004dbdd86b46551ec63e8ac3a3c86b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5XN5RN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC%2FZszSuZugJ5pd8lruacTFXxN3hYHMkW6tMUbONhIWlwIgQVbHyj6scoPCyN80ZZqcHWTVoivVQZVnQwGnkLkE%2BpQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPDwT9bUw4sJzC0kCrcA08EZE5vCu827YcP0DXIPqMIux%2BEw37hcHq34f8gPtL1DJPTH4pMl2BO4ydaDCSjF960ADLY6CPdpCBnwOTjL1QN%2Fol3XsSe%2BUIypVGsjuEiURibwj1Cbn0IlILtDvihG01%2Fr4871xiTHj%2BmnL7NIV59ICUDESGIaQ6WvDiQSGnMZr37%2FrPaG8HJLXzsFc0R2B%2Fbl%2F%2FUr9g3H%2BXyeHdciOFRxzAgW6e1aI5rWzDNPvEqGPFVoQts6DjMJF1LPw%2FCUW1zxfeUXtRmlRn3NUhbGLRHkuGNaS8SQTUeZCGn0K7d5zjBNldjpb02O0%2F54FpcJ%2B6vLAxfjF7%2FIndjQO0clTzii323AQewNwXExea3zYyvrQ3RdhGjJJUJmgEjgk%2BsxIDRrnKdQCcyuNra6SjyvYuyNcmexzA9jBVdAO6Hi3axWiglssNdVd%2FsURDit3NLfDXtaWkpBmYCkq6SDi3%2BUFrbxe%2F194CPfiMmvPSINPR6esoNFno8W%2FjiYkx07mN8NXXk%2FxliZiZMU%2Ft7ZtXPZbB5UWgmLQk4ExaGnJ5GZYOMoFBy6%2FXwxnlmEXdhSqeO3p1u7qHF5bt81LoMDywall514%2F6vUg9LXIhktofBg%2FBoA5wfQg91kg%2FPo%2FZKMLXM1L0GOqUBhjPh3dkkTbwY3OkHpNFZeHdKNINoTHcvcdbfFrC9zPPonD8Bx%2BfUevvEkcVMMnADOiwY6AY5zcii7ZTCxLxaoGSnb0PEaV8avYIbeoLHZUD3wVNyU2aahQtVTheVrrf09SwFpbC3eRkIx%2FuHt%2FHMgbscWikGd5NpWPSnn8X7Yzhii4s1KZ8wNwNtyQKMTnxaQWcstxxBsjhhLPYhCT%2FfGpJ%2BUW%2FL&X-Amz-Signature=af701a9487d9ec44dcfa8591619e253b434af1d42b72ceca7c9c3032bd1e1826&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
