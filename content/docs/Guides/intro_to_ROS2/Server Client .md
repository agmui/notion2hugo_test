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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKUUDG5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCTdwgutClMmaBQN1xRoJTtWZDoitk9M73gEsL5RcWyrAIgIVZDbQmaneAKrvcIVo0Eh2XEQo3hvXI9fxfK%2FQIFR4MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqCh9BmbgFd1IiVQCrcA0e23LT65qLXklmGH9Rs8U0%2BDc4x3fztyi12%2FUTAf96KTccOjdt%2FKHz4XQFKNhtWYqR08O7olnZj%2BhljNFHCis%2B%2B5bhkYYY%2BD7mBoYgl4IDiWhaycWNMO3sXm6vudeazuiYtolmjP5CocmRqC3FJbtW%2Bm38W%2F1YqGWhIX4IuDRrr34pH4wN%2FZKrjcOrPgC%2BLmOWh%2BHHrhBqxb4gHzf9SqKuxvra%2FMMvmdSYnC3T7r2VhA6n%2BIE3h2D3H0W9S%2FFhq4uBsjz9mQQjCOjOIlHLmvuQXEPLoBcsuVpBXAWZ3WSXsBZv6lYdEy99R%2By9SNZrew90kJqTSItqXNCRJhyFFozNj7aBO9Dy92UQtZ91feU7VEFBuOxWp625eIcmCH4vVgq4um99la9npT2Go0IW1UmqJKK7Au4vcsKCLZ6EJDOJQrjMnuJZpCViuZFsGCW52OnhbY14kdR8uCQw8QXh0oWHFo8FF%2BtdvQSAG33pPT2t7ZQG56dIGaoSWY9Nafb4eUsRPjaaQ7h%2FJD70Ad6bpxno47DANXwkGW90kVOFBezSteWK6hPXDLtFWxNw8ZwaRZvvEZKx4Ycwkex0OGr6UNf%2B4ArJKpoNAeBOr8jAcHOI%2BPmw8Z%2BeZWgGadwVkMJqdiMEGOqUB7tlveqf6cTz7107jUveJuAnyQi80Oqb9UIol62nKQ3xYjXln5%2BAr8D3Sq9SZVqKLyPKxSca2p1luGjMfHotDrws7%2FUJWwYaIKP0%2Ffnkedzv97p2agaC8uGtuePfX%2BScc%2Fn7%2BwcXciPcX6dCpWuRKMclCyqtshXSuMlMVWws0hrkq%2FTUTb%2FPGub9czfZFegSf7CvhQ7kP4cASeMyhiCcisSxjuhMV&X-Amz-Signature=4f3c06180c47e61144494307b4c7adb2d93fd58f42b7d7a08e625ff135ddbc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKUUDG5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCTdwgutClMmaBQN1xRoJTtWZDoitk9M73gEsL5RcWyrAIgIVZDbQmaneAKrvcIVo0Eh2XEQo3hvXI9fxfK%2FQIFR4MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqCh9BmbgFd1IiVQCrcA0e23LT65qLXklmGH9Rs8U0%2BDc4x3fztyi12%2FUTAf96KTccOjdt%2FKHz4XQFKNhtWYqR08O7olnZj%2BhljNFHCis%2B%2B5bhkYYY%2BD7mBoYgl4IDiWhaycWNMO3sXm6vudeazuiYtolmjP5CocmRqC3FJbtW%2Bm38W%2F1YqGWhIX4IuDRrr34pH4wN%2FZKrjcOrPgC%2BLmOWh%2BHHrhBqxb4gHzf9SqKuxvra%2FMMvmdSYnC3T7r2VhA6n%2BIE3h2D3H0W9S%2FFhq4uBsjz9mQQjCOjOIlHLmvuQXEPLoBcsuVpBXAWZ3WSXsBZv6lYdEy99R%2By9SNZrew90kJqTSItqXNCRJhyFFozNj7aBO9Dy92UQtZ91feU7VEFBuOxWp625eIcmCH4vVgq4um99la9npT2Go0IW1UmqJKK7Au4vcsKCLZ6EJDOJQrjMnuJZpCViuZFsGCW52OnhbY14kdR8uCQw8QXh0oWHFo8FF%2BtdvQSAG33pPT2t7ZQG56dIGaoSWY9Nafb4eUsRPjaaQ7h%2FJD70Ad6bpxno47DANXwkGW90kVOFBezSteWK6hPXDLtFWxNw8ZwaRZvvEZKx4Ycwkex0OGr6UNf%2B4ArJKpoNAeBOr8jAcHOI%2BPmw8Z%2BeZWgGadwVkMJqdiMEGOqUB7tlveqf6cTz7107jUveJuAnyQi80Oqb9UIol62nKQ3xYjXln5%2BAr8D3Sq9SZVqKLyPKxSca2p1luGjMfHotDrws7%2FUJWwYaIKP0%2Ffnkedzv97p2agaC8uGtuePfX%2BScc%2Fn7%2BwcXciPcX6dCpWuRKMclCyqtshXSuMlMVWws0hrkq%2FTUTb%2FPGub9czfZFegSf7CvhQ7kP4cASeMyhiCcisSxjuhMV&X-Amz-Signature=5664b143af8a0347c29d25a79dd5a15994e5d8fb3d22af3fa26a7370782561c2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKUUDG5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCTdwgutClMmaBQN1xRoJTtWZDoitk9M73gEsL5RcWyrAIgIVZDbQmaneAKrvcIVo0Eh2XEQo3hvXI9fxfK%2FQIFR4MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqCh9BmbgFd1IiVQCrcA0e23LT65qLXklmGH9Rs8U0%2BDc4x3fztyi12%2FUTAf96KTccOjdt%2FKHz4XQFKNhtWYqR08O7olnZj%2BhljNFHCis%2B%2B5bhkYYY%2BD7mBoYgl4IDiWhaycWNMO3sXm6vudeazuiYtolmjP5CocmRqC3FJbtW%2Bm38W%2F1YqGWhIX4IuDRrr34pH4wN%2FZKrjcOrPgC%2BLmOWh%2BHHrhBqxb4gHzf9SqKuxvra%2FMMvmdSYnC3T7r2VhA6n%2BIE3h2D3H0W9S%2FFhq4uBsjz9mQQjCOjOIlHLmvuQXEPLoBcsuVpBXAWZ3WSXsBZv6lYdEy99R%2By9SNZrew90kJqTSItqXNCRJhyFFozNj7aBO9Dy92UQtZ91feU7VEFBuOxWp625eIcmCH4vVgq4um99la9npT2Go0IW1UmqJKK7Au4vcsKCLZ6EJDOJQrjMnuJZpCViuZFsGCW52OnhbY14kdR8uCQw8QXh0oWHFo8FF%2BtdvQSAG33pPT2t7ZQG56dIGaoSWY9Nafb4eUsRPjaaQ7h%2FJD70Ad6bpxno47DANXwkGW90kVOFBezSteWK6hPXDLtFWxNw8ZwaRZvvEZKx4Ycwkex0OGr6UNf%2B4ArJKpoNAeBOr8jAcHOI%2BPmw8Z%2BeZWgGadwVkMJqdiMEGOqUB7tlveqf6cTz7107jUveJuAnyQi80Oqb9UIol62nKQ3xYjXln5%2BAr8D3Sq9SZVqKLyPKxSca2p1luGjMfHotDrws7%2FUJWwYaIKP0%2Ffnkedzv97p2agaC8uGtuePfX%2BScc%2Fn7%2BwcXciPcX6dCpWuRKMclCyqtshXSuMlMVWws0hrkq%2FTUTb%2FPGub9czfZFegSf7CvhQ7kP4cASeMyhiCcisSxjuhMV&X-Amz-Signature=7b4148cb0a304bace52bcdde2c773a8326f59528b6b66510745b9bef8896b8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKUUDG5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCTdwgutClMmaBQN1xRoJTtWZDoitk9M73gEsL5RcWyrAIgIVZDbQmaneAKrvcIVo0Eh2XEQo3hvXI9fxfK%2FQIFR4MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqCh9BmbgFd1IiVQCrcA0e23LT65qLXklmGH9Rs8U0%2BDc4x3fztyi12%2FUTAf96KTccOjdt%2FKHz4XQFKNhtWYqR08O7olnZj%2BhljNFHCis%2B%2B5bhkYYY%2BD7mBoYgl4IDiWhaycWNMO3sXm6vudeazuiYtolmjP5CocmRqC3FJbtW%2Bm38W%2F1YqGWhIX4IuDRrr34pH4wN%2FZKrjcOrPgC%2BLmOWh%2BHHrhBqxb4gHzf9SqKuxvra%2FMMvmdSYnC3T7r2VhA6n%2BIE3h2D3H0W9S%2FFhq4uBsjz9mQQjCOjOIlHLmvuQXEPLoBcsuVpBXAWZ3WSXsBZv6lYdEy99R%2By9SNZrew90kJqTSItqXNCRJhyFFozNj7aBO9Dy92UQtZ91feU7VEFBuOxWp625eIcmCH4vVgq4um99la9npT2Go0IW1UmqJKK7Au4vcsKCLZ6EJDOJQrjMnuJZpCViuZFsGCW52OnhbY14kdR8uCQw8QXh0oWHFo8FF%2BtdvQSAG33pPT2t7ZQG56dIGaoSWY9Nafb4eUsRPjaaQ7h%2FJD70Ad6bpxno47DANXwkGW90kVOFBezSteWK6hPXDLtFWxNw8ZwaRZvvEZKx4Ycwkex0OGr6UNf%2B4ArJKpoNAeBOr8jAcHOI%2BPmw8Z%2BeZWgGadwVkMJqdiMEGOqUB7tlveqf6cTz7107jUveJuAnyQi80Oqb9UIol62nKQ3xYjXln5%2BAr8D3Sq9SZVqKLyPKxSca2p1luGjMfHotDrws7%2FUJWwYaIKP0%2Ffnkedzv97p2agaC8uGtuePfX%2BScc%2Fn7%2BwcXciPcX6dCpWuRKMclCyqtshXSuMlMVWws0hrkq%2FTUTb%2FPGub9czfZFegSf7CvhQ7kP4cASeMyhiCcisSxjuhMV&X-Amz-Signature=cf9d29aa62c73bbc1ea8c36befa02022804f30e6b4f410418e656ff7ddc8cecd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKUUDG5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCTdwgutClMmaBQN1xRoJTtWZDoitk9M73gEsL5RcWyrAIgIVZDbQmaneAKrvcIVo0Eh2XEQo3hvXI9fxfK%2FQIFR4MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqCh9BmbgFd1IiVQCrcA0e23LT65qLXklmGH9Rs8U0%2BDc4x3fztyi12%2FUTAf96KTccOjdt%2FKHz4XQFKNhtWYqR08O7olnZj%2BhljNFHCis%2B%2B5bhkYYY%2BD7mBoYgl4IDiWhaycWNMO3sXm6vudeazuiYtolmjP5CocmRqC3FJbtW%2Bm38W%2F1YqGWhIX4IuDRrr34pH4wN%2FZKrjcOrPgC%2BLmOWh%2BHHrhBqxb4gHzf9SqKuxvra%2FMMvmdSYnC3T7r2VhA6n%2BIE3h2D3H0W9S%2FFhq4uBsjz9mQQjCOjOIlHLmvuQXEPLoBcsuVpBXAWZ3WSXsBZv6lYdEy99R%2By9SNZrew90kJqTSItqXNCRJhyFFozNj7aBO9Dy92UQtZ91feU7VEFBuOxWp625eIcmCH4vVgq4um99la9npT2Go0IW1UmqJKK7Au4vcsKCLZ6EJDOJQrjMnuJZpCViuZFsGCW52OnhbY14kdR8uCQw8QXh0oWHFo8FF%2BtdvQSAG33pPT2t7ZQG56dIGaoSWY9Nafb4eUsRPjaaQ7h%2FJD70Ad6bpxno47DANXwkGW90kVOFBezSteWK6hPXDLtFWxNw8ZwaRZvvEZKx4Ycwkex0OGr6UNf%2B4ArJKpoNAeBOr8jAcHOI%2BPmw8Z%2BeZWgGadwVkMJqdiMEGOqUB7tlveqf6cTz7107jUveJuAnyQi80Oqb9UIol62nKQ3xYjXln5%2BAr8D3Sq9SZVqKLyPKxSca2p1luGjMfHotDrws7%2FUJWwYaIKP0%2Ffnkedzv97p2agaC8uGtuePfX%2BScc%2Fn7%2BwcXciPcX6dCpWuRKMclCyqtshXSuMlMVWws0hrkq%2FTUTb%2FPGub9czfZFegSf7CvhQ7kP4cASeMyhiCcisSxjuhMV&X-Amz-Signature=5e0d80a68b56c40db37e4356faede57eba4f6bd5e1881d9cfe677c685907ec2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
