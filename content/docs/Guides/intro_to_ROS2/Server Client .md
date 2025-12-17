---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56C6OS4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnmOsafV6GX2dwW4sn2rGOlL35RSeiK5IfOZvgw80CQIgRQK1N3EU0dwnsnq8xShOv0ivlHudtAirB%2FiUI2h4BOsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPlZrfNMeuQSgTkFWyrcA%2FeTw9twQho7tV0UeSyTQaLaIarJFegNkhnc9hPmV%2BzH%2F2DIby1VfBnoj6T0mqRXyRW4Z73Uyib1mi4zw9KwKN7LVBdvn3VEIwipwc4Ne8ZhInWVtTSsNXY7AK8%2BE0MoRKnZ2hi5hK8qT%2Fgd18OExbwVa%2FcQf3J8gXWVjgShphDmrJDqYr3clj6x2TsybHSJZzQR1PCNtudQP1wRFGIZWeJ4gy7DZ1zwAAUhPPNL9Er7ko5Ca4%2B2vTKwfJ2UTb%2Bsn8KVB6ANY3E4kwX5zNm1jquGgttQ5svgzSuXzy4yQ%2FVlfeJkludA0n0%2BCHRSni8eY%2FB0OkPaG15DHLk5UlFoo8JXaZQEBwyG%2FVHtwFTD1Z%2BJirNuCnxGBGo3ibQKPddm7frISaXHi%2Boa3vpfC9bC9BZ0OtqE4sJ%2FSoCJ7gmvKaaxHMOMbUEwg2hBFg%2FyBLJwkB9pQO0%2BHkZB4Bo1LbeqrpSI5ceFMjftykgtR%2BjbTD3KenKcaoeZ0ytIfjHQI6OvrYZhkQk%2FGkIfHOkj2tkLoQjW3bqbZEm3cTDjrE645eQA5Lsf5Sb2jFdZ19hl2iMA241xnEShrUsTnTxyhAccqRAnqYqohrC%2FR5bZDtlDLvcstmWHhDhbLg%2FO2Dd6MNr7h8oGOqUBlEnvwbDbL%2BYmG7WrS0TxO5rDcvWz3QGOdVF6C5JKttj96Ea4cnW9sKZrGbE%2FxAP9WkI%2FrjFqE38N7x4LaAoOhL76eKOf46phWxA7NbVqJW47E%2Bxxf8qWtt0CxCS8i7vKPWP%2FN%2FxY3McJbsHfbAkTIMojNQJOL5wwW0FrJhC8%2FfctLVwtYsYBryl7dUelDX9%2FZBWLzRs%2F%2Fufs7opmttAqtYG2Y%2Bwr&X-Amz-Signature=c34518e3479d36dc7adaccabc4ca886e8d694b89bd401b784e3b3068645454b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56C6OS4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnmOsafV6GX2dwW4sn2rGOlL35RSeiK5IfOZvgw80CQIgRQK1N3EU0dwnsnq8xShOv0ivlHudtAirB%2FiUI2h4BOsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPlZrfNMeuQSgTkFWyrcA%2FeTw9twQho7tV0UeSyTQaLaIarJFegNkhnc9hPmV%2BzH%2F2DIby1VfBnoj6T0mqRXyRW4Z73Uyib1mi4zw9KwKN7LVBdvn3VEIwipwc4Ne8ZhInWVtTSsNXY7AK8%2BE0MoRKnZ2hi5hK8qT%2Fgd18OExbwVa%2FcQf3J8gXWVjgShphDmrJDqYr3clj6x2TsybHSJZzQR1PCNtudQP1wRFGIZWeJ4gy7DZ1zwAAUhPPNL9Er7ko5Ca4%2B2vTKwfJ2UTb%2Bsn8KVB6ANY3E4kwX5zNm1jquGgttQ5svgzSuXzy4yQ%2FVlfeJkludA0n0%2BCHRSni8eY%2FB0OkPaG15DHLk5UlFoo8JXaZQEBwyG%2FVHtwFTD1Z%2BJirNuCnxGBGo3ibQKPddm7frISaXHi%2Boa3vpfC9bC9BZ0OtqE4sJ%2FSoCJ7gmvKaaxHMOMbUEwg2hBFg%2FyBLJwkB9pQO0%2BHkZB4Bo1LbeqrpSI5ceFMjftykgtR%2BjbTD3KenKcaoeZ0ytIfjHQI6OvrYZhkQk%2FGkIfHOkj2tkLoQjW3bqbZEm3cTDjrE645eQA5Lsf5Sb2jFdZ19hl2iMA241xnEShrUsTnTxyhAccqRAnqYqohrC%2FR5bZDtlDLvcstmWHhDhbLg%2FO2Dd6MNr7h8oGOqUBlEnvwbDbL%2BYmG7WrS0TxO5rDcvWz3QGOdVF6C5JKttj96Ea4cnW9sKZrGbE%2FxAP9WkI%2FrjFqE38N7x4LaAoOhL76eKOf46phWxA7NbVqJW47E%2Bxxf8qWtt0CxCS8i7vKPWP%2FN%2FxY3McJbsHfbAkTIMojNQJOL5wwW0FrJhC8%2FfctLVwtYsYBryl7dUelDX9%2FZBWLzRs%2F%2Fufs7opmttAqtYG2Y%2Bwr&X-Amz-Signature=6c8d6f9bd61cf9010145c0fcf97f2b4e1f91211dd6fa2c061dead099bdf0d86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56C6OS4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnmOsafV6GX2dwW4sn2rGOlL35RSeiK5IfOZvgw80CQIgRQK1N3EU0dwnsnq8xShOv0ivlHudtAirB%2FiUI2h4BOsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPlZrfNMeuQSgTkFWyrcA%2FeTw9twQho7tV0UeSyTQaLaIarJFegNkhnc9hPmV%2BzH%2F2DIby1VfBnoj6T0mqRXyRW4Z73Uyib1mi4zw9KwKN7LVBdvn3VEIwipwc4Ne8ZhInWVtTSsNXY7AK8%2BE0MoRKnZ2hi5hK8qT%2Fgd18OExbwVa%2FcQf3J8gXWVjgShphDmrJDqYr3clj6x2TsybHSJZzQR1PCNtudQP1wRFGIZWeJ4gy7DZ1zwAAUhPPNL9Er7ko5Ca4%2B2vTKwfJ2UTb%2Bsn8KVB6ANY3E4kwX5zNm1jquGgttQ5svgzSuXzy4yQ%2FVlfeJkludA0n0%2BCHRSni8eY%2FB0OkPaG15DHLk5UlFoo8JXaZQEBwyG%2FVHtwFTD1Z%2BJirNuCnxGBGo3ibQKPddm7frISaXHi%2Boa3vpfC9bC9BZ0OtqE4sJ%2FSoCJ7gmvKaaxHMOMbUEwg2hBFg%2FyBLJwkB9pQO0%2BHkZB4Bo1LbeqrpSI5ceFMjftykgtR%2BjbTD3KenKcaoeZ0ytIfjHQI6OvrYZhkQk%2FGkIfHOkj2tkLoQjW3bqbZEm3cTDjrE645eQA5Lsf5Sb2jFdZ19hl2iMA241xnEShrUsTnTxyhAccqRAnqYqohrC%2FR5bZDtlDLvcstmWHhDhbLg%2FO2Dd6MNr7h8oGOqUBlEnvwbDbL%2BYmG7WrS0TxO5rDcvWz3QGOdVF6C5JKttj96Ea4cnW9sKZrGbE%2FxAP9WkI%2FrjFqE38N7x4LaAoOhL76eKOf46phWxA7NbVqJW47E%2Bxxf8qWtt0CxCS8i7vKPWP%2FN%2FxY3McJbsHfbAkTIMojNQJOL5wwW0FrJhC8%2FfctLVwtYsYBryl7dUelDX9%2FZBWLzRs%2F%2Fufs7opmttAqtYG2Y%2Bwr&X-Amz-Signature=0b3118670047c15f1b2be21ff3a160d7161db414c9eb7bd2486fce61437d7838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56C6OS4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnmOsafV6GX2dwW4sn2rGOlL35RSeiK5IfOZvgw80CQIgRQK1N3EU0dwnsnq8xShOv0ivlHudtAirB%2FiUI2h4BOsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPlZrfNMeuQSgTkFWyrcA%2FeTw9twQho7tV0UeSyTQaLaIarJFegNkhnc9hPmV%2BzH%2F2DIby1VfBnoj6T0mqRXyRW4Z73Uyib1mi4zw9KwKN7LVBdvn3VEIwipwc4Ne8ZhInWVtTSsNXY7AK8%2BE0MoRKnZ2hi5hK8qT%2Fgd18OExbwVa%2FcQf3J8gXWVjgShphDmrJDqYr3clj6x2TsybHSJZzQR1PCNtudQP1wRFGIZWeJ4gy7DZ1zwAAUhPPNL9Er7ko5Ca4%2B2vTKwfJ2UTb%2Bsn8KVB6ANY3E4kwX5zNm1jquGgttQ5svgzSuXzy4yQ%2FVlfeJkludA0n0%2BCHRSni8eY%2FB0OkPaG15DHLk5UlFoo8JXaZQEBwyG%2FVHtwFTD1Z%2BJirNuCnxGBGo3ibQKPddm7frISaXHi%2Boa3vpfC9bC9BZ0OtqE4sJ%2FSoCJ7gmvKaaxHMOMbUEwg2hBFg%2FyBLJwkB9pQO0%2BHkZB4Bo1LbeqrpSI5ceFMjftykgtR%2BjbTD3KenKcaoeZ0ytIfjHQI6OvrYZhkQk%2FGkIfHOkj2tkLoQjW3bqbZEm3cTDjrE645eQA5Lsf5Sb2jFdZ19hl2iMA241xnEShrUsTnTxyhAccqRAnqYqohrC%2FR5bZDtlDLvcstmWHhDhbLg%2FO2Dd6MNr7h8oGOqUBlEnvwbDbL%2BYmG7WrS0TxO5rDcvWz3QGOdVF6C5JKttj96Ea4cnW9sKZrGbE%2FxAP9WkI%2FrjFqE38N7x4LaAoOhL76eKOf46phWxA7NbVqJW47E%2Bxxf8qWtt0CxCS8i7vKPWP%2FN%2FxY3McJbsHfbAkTIMojNQJOL5wwW0FrJhC8%2FfctLVwtYsYBryl7dUelDX9%2FZBWLzRs%2F%2Fufs7opmttAqtYG2Y%2Bwr&X-Amz-Signature=b6eb40ee4468159a0d64afde1f5002e3e4b4385920363ce94b4f7a5ba8c03258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56C6OS4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnmOsafV6GX2dwW4sn2rGOlL35RSeiK5IfOZvgw80CQIgRQK1N3EU0dwnsnq8xShOv0ivlHudtAirB%2FiUI2h4BOsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPlZrfNMeuQSgTkFWyrcA%2FeTw9twQho7tV0UeSyTQaLaIarJFegNkhnc9hPmV%2BzH%2F2DIby1VfBnoj6T0mqRXyRW4Z73Uyib1mi4zw9KwKN7LVBdvn3VEIwipwc4Ne8ZhInWVtTSsNXY7AK8%2BE0MoRKnZ2hi5hK8qT%2Fgd18OExbwVa%2FcQf3J8gXWVjgShphDmrJDqYr3clj6x2TsybHSJZzQR1PCNtudQP1wRFGIZWeJ4gy7DZ1zwAAUhPPNL9Er7ko5Ca4%2B2vTKwfJ2UTb%2Bsn8KVB6ANY3E4kwX5zNm1jquGgttQ5svgzSuXzy4yQ%2FVlfeJkludA0n0%2BCHRSni8eY%2FB0OkPaG15DHLk5UlFoo8JXaZQEBwyG%2FVHtwFTD1Z%2BJirNuCnxGBGo3ibQKPddm7frISaXHi%2Boa3vpfC9bC9BZ0OtqE4sJ%2FSoCJ7gmvKaaxHMOMbUEwg2hBFg%2FyBLJwkB9pQO0%2BHkZB4Bo1LbeqrpSI5ceFMjftykgtR%2BjbTD3KenKcaoeZ0ytIfjHQI6OvrYZhkQk%2FGkIfHOkj2tkLoQjW3bqbZEm3cTDjrE645eQA5Lsf5Sb2jFdZ19hl2iMA241xnEShrUsTnTxyhAccqRAnqYqohrC%2FR5bZDtlDLvcstmWHhDhbLg%2FO2Dd6MNr7h8oGOqUBlEnvwbDbL%2BYmG7WrS0TxO5rDcvWz3QGOdVF6C5JKttj96Ea4cnW9sKZrGbE%2FxAP9WkI%2FrjFqE38N7x4LaAoOhL76eKOf46phWxA7NbVqJW47E%2Bxxf8qWtt0CxCS8i7vKPWP%2FN%2FxY3McJbsHfbAkTIMojNQJOL5wwW0FrJhC8%2FfctLVwtYsYBryl7dUelDX9%2FZBWLzRs%2F%2Fufs7opmttAqtYG2Y%2Bwr&X-Amz-Signature=3a399b41a7158fa55b0fc8fa887a8e4fcd35d2adfad7fc40f07bee54b2942e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
