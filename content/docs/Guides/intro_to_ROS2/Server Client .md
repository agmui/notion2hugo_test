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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5JC3TP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDUpaDv68FsjRngyLwv67GMJaqiRyzctez7WDtiSOdyAiEAtn%2Bxa2I9RJ7OdneAd0qLjgkngR4GAy6wPoOLAWr4YeMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKPofjeWARTSHyFNMircA89Bwq2LJl%2FZE5Vf7dRE5xgE0Cetm1CT80SnYXMo9D2WYjOQijsh0LHDymzw5jY8LTLK%2FzCTc95vMzmFRoeiNLc9fHEcxrVUitpTw6hGIzb4p6W6ZanaRSeum%2BYyY1zh%2FombufY1q6%2Bl2I5sTL5v9Hxro3im2Ck0JJi2iZZ9fQ3qxLahgim3S1xTnVrV%2BUPSPGW6RhEFKbmvr81LXxvVQ4stIPX4h%2F3mFCdd8w8HYleezMMDiNefjvwqgrgX1XmoZvVlu%2FGxTJq7MnhkqWKCozQqEluBBzsNxI2S4BsLv48R9XJB%2BI%2B2AgKscugZbkzvB470PJxgmKN4uoiS70Sk%2B7OsQEkunl52v02nBgk44V2xI%2Fkqt%2BjbPwSSXCdgLhRoRp%2FHwDxQsCq5cCPygY7284ZfQcgkpN5m8ZE0nZvSjGsznzRC585c%2FB%2BYYDzWevP%2F3dZokH55Jrhji%2F6sMDkudJ%2FDiA%2BKD2%2BFFRuN4aqfn9o%2FNh6DnenfC9XC%2BQUCXSFwql%2B8ipymKCKEYWtCewPx1cPohuY7hH8lx9v4B0OTZ64sNJzzPctampxZQTZHEbLqjT65QNoMBdtl6qaGHPotO3J%2BvN2MUWtDfcjgTEsru1m7goC3cEoi9q3xahgHMObE8cAGOqUB%2BduPpEiX6qnPUMkIp8%2FSJgHbBqrn2THUinWTKoxReEIoxUNHTSoiE%2FPJlz8tAarO3jlpe%2FRtYP6BHK7wMcB09weAEI7MYOHUcJGRX8ZiiXWGQ3PsNNMGu6zSkqbR17yIxNtqywtogNg5S2uxDuI%2Fe%2BhwpBHCq%2FfANsUGuBps9jNmdTXpCfPY%2FBu%2BDrH3a3tqqnNhjjDNizmr%2FpU4HE9p4OSLuIfA&X-Amz-Signature=db5281cb9990a336a3667821f9eba9cf6821b64431f999ccc8bdb86f98b6ebfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5JC3TP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDUpaDv68FsjRngyLwv67GMJaqiRyzctez7WDtiSOdyAiEAtn%2Bxa2I9RJ7OdneAd0qLjgkngR4GAy6wPoOLAWr4YeMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKPofjeWARTSHyFNMircA89Bwq2LJl%2FZE5Vf7dRE5xgE0Cetm1CT80SnYXMo9D2WYjOQijsh0LHDymzw5jY8LTLK%2FzCTc95vMzmFRoeiNLc9fHEcxrVUitpTw6hGIzb4p6W6ZanaRSeum%2BYyY1zh%2FombufY1q6%2Bl2I5sTL5v9Hxro3im2Ck0JJi2iZZ9fQ3qxLahgim3S1xTnVrV%2BUPSPGW6RhEFKbmvr81LXxvVQ4stIPX4h%2F3mFCdd8w8HYleezMMDiNefjvwqgrgX1XmoZvVlu%2FGxTJq7MnhkqWKCozQqEluBBzsNxI2S4BsLv48R9XJB%2BI%2B2AgKscugZbkzvB470PJxgmKN4uoiS70Sk%2B7OsQEkunl52v02nBgk44V2xI%2Fkqt%2BjbPwSSXCdgLhRoRp%2FHwDxQsCq5cCPygY7284ZfQcgkpN5m8ZE0nZvSjGsznzRC585c%2FB%2BYYDzWevP%2F3dZokH55Jrhji%2F6sMDkudJ%2FDiA%2BKD2%2BFFRuN4aqfn9o%2FNh6DnenfC9XC%2BQUCXSFwql%2B8ipymKCKEYWtCewPx1cPohuY7hH8lx9v4B0OTZ64sNJzzPctampxZQTZHEbLqjT65QNoMBdtl6qaGHPotO3J%2BvN2MUWtDfcjgTEsru1m7goC3cEoi9q3xahgHMObE8cAGOqUB%2BduPpEiX6qnPUMkIp8%2FSJgHbBqrn2THUinWTKoxReEIoxUNHTSoiE%2FPJlz8tAarO3jlpe%2FRtYP6BHK7wMcB09weAEI7MYOHUcJGRX8ZiiXWGQ3PsNNMGu6zSkqbR17yIxNtqywtogNg5S2uxDuI%2Fe%2BhwpBHCq%2FfANsUGuBps9jNmdTXpCfPY%2FBu%2BDrH3a3tqqnNhjjDNizmr%2FpU4HE9p4OSLuIfA&X-Amz-Signature=1f2eabcd9d070e0faaf0bfbdb876b46318f627a21b11c872775ae0590a53f533&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5JC3TP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDUpaDv68FsjRngyLwv67GMJaqiRyzctez7WDtiSOdyAiEAtn%2Bxa2I9RJ7OdneAd0qLjgkngR4GAy6wPoOLAWr4YeMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKPofjeWARTSHyFNMircA89Bwq2LJl%2FZE5Vf7dRE5xgE0Cetm1CT80SnYXMo9D2WYjOQijsh0LHDymzw5jY8LTLK%2FzCTc95vMzmFRoeiNLc9fHEcxrVUitpTw6hGIzb4p6W6ZanaRSeum%2BYyY1zh%2FombufY1q6%2Bl2I5sTL5v9Hxro3im2Ck0JJi2iZZ9fQ3qxLahgim3S1xTnVrV%2BUPSPGW6RhEFKbmvr81LXxvVQ4stIPX4h%2F3mFCdd8w8HYleezMMDiNefjvwqgrgX1XmoZvVlu%2FGxTJq7MnhkqWKCozQqEluBBzsNxI2S4BsLv48R9XJB%2BI%2B2AgKscugZbkzvB470PJxgmKN4uoiS70Sk%2B7OsQEkunl52v02nBgk44V2xI%2Fkqt%2BjbPwSSXCdgLhRoRp%2FHwDxQsCq5cCPygY7284ZfQcgkpN5m8ZE0nZvSjGsznzRC585c%2FB%2BYYDzWevP%2F3dZokH55Jrhji%2F6sMDkudJ%2FDiA%2BKD2%2BFFRuN4aqfn9o%2FNh6DnenfC9XC%2BQUCXSFwql%2B8ipymKCKEYWtCewPx1cPohuY7hH8lx9v4B0OTZ64sNJzzPctampxZQTZHEbLqjT65QNoMBdtl6qaGHPotO3J%2BvN2MUWtDfcjgTEsru1m7goC3cEoi9q3xahgHMObE8cAGOqUB%2BduPpEiX6qnPUMkIp8%2FSJgHbBqrn2THUinWTKoxReEIoxUNHTSoiE%2FPJlz8tAarO3jlpe%2FRtYP6BHK7wMcB09weAEI7MYOHUcJGRX8ZiiXWGQ3PsNNMGu6zSkqbR17yIxNtqywtogNg5S2uxDuI%2Fe%2BhwpBHCq%2FfANsUGuBps9jNmdTXpCfPY%2FBu%2BDrH3a3tqqnNhjjDNizmr%2FpU4HE9p4OSLuIfA&X-Amz-Signature=40f042ca46672e08866f6f0724f202340a7cc6e4af29d53bed5a667ed005b135&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5JC3TP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDUpaDv68FsjRngyLwv67GMJaqiRyzctez7WDtiSOdyAiEAtn%2Bxa2I9RJ7OdneAd0qLjgkngR4GAy6wPoOLAWr4YeMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKPofjeWARTSHyFNMircA89Bwq2LJl%2FZE5Vf7dRE5xgE0Cetm1CT80SnYXMo9D2WYjOQijsh0LHDymzw5jY8LTLK%2FzCTc95vMzmFRoeiNLc9fHEcxrVUitpTw6hGIzb4p6W6ZanaRSeum%2BYyY1zh%2FombufY1q6%2Bl2I5sTL5v9Hxro3im2Ck0JJi2iZZ9fQ3qxLahgim3S1xTnVrV%2BUPSPGW6RhEFKbmvr81LXxvVQ4stIPX4h%2F3mFCdd8w8HYleezMMDiNefjvwqgrgX1XmoZvVlu%2FGxTJq7MnhkqWKCozQqEluBBzsNxI2S4BsLv48R9XJB%2BI%2B2AgKscugZbkzvB470PJxgmKN4uoiS70Sk%2B7OsQEkunl52v02nBgk44V2xI%2Fkqt%2BjbPwSSXCdgLhRoRp%2FHwDxQsCq5cCPygY7284ZfQcgkpN5m8ZE0nZvSjGsznzRC585c%2FB%2BYYDzWevP%2F3dZokH55Jrhji%2F6sMDkudJ%2FDiA%2BKD2%2BFFRuN4aqfn9o%2FNh6DnenfC9XC%2BQUCXSFwql%2B8ipymKCKEYWtCewPx1cPohuY7hH8lx9v4B0OTZ64sNJzzPctampxZQTZHEbLqjT65QNoMBdtl6qaGHPotO3J%2BvN2MUWtDfcjgTEsru1m7goC3cEoi9q3xahgHMObE8cAGOqUB%2BduPpEiX6qnPUMkIp8%2FSJgHbBqrn2THUinWTKoxReEIoxUNHTSoiE%2FPJlz8tAarO3jlpe%2FRtYP6BHK7wMcB09weAEI7MYOHUcJGRX8ZiiXWGQ3PsNNMGu6zSkqbR17yIxNtqywtogNg5S2uxDuI%2Fe%2BhwpBHCq%2FfANsUGuBps9jNmdTXpCfPY%2FBu%2BDrH3a3tqqnNhjjDNizmr%2FpU4HE9p4OSLuIfA&X-Amz-Signature=b2af385c2ee6bde292ba16bd34d67e1ad44ad481f83b8b788882fded69b4e308&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5JC3TP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDUpaDv68FsjRngyLwv67GMJaqiRyzctez7WDtiSOdyAiEAtn%2Bxa2I9RJ7OdneAd0qLjgkngR4GAy6wPoOLAWr4YeMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKPofjeWARTSHyFNMircA89Bwq2LJl%2FZE5Vf7dRE5xgE0Cetm1CT80SnYXMo9D2WYjOQijsh0LHDymzw5jY8LTLK%2FzCTc95vMzmFRoeiNLc9fHEcxrVUitpTw6hGIzb4p6W6ZanaRSeum%2BYyY1zh%2FombufY1q6%2Bl2I5sTL5v9Hxro3im2Ck0JJi2iZZ9fQ3qxLahgim3S1xTnVrV%2BUPSPGW6RhEFKbmvr81LXxvVQ4stIPX4h%2F3mFCdd8w8HYleezMMDiNefjvwqgrgX1XmoZvVlu%2FGxTJq7MnhkqWKCozQqEluBBzsNxI2S4BsLv48R9XJB%2BI%2B2AgKscugZbkzvB470PJxgmKN4uoiS70Sk%2B7OsQEkunl52v02nBgk44V2xI%2Fkqt%2BjbPwSSXCdgLhRoRp%2FHwDxQsCq5cCPygY7284ZfQcgkpN5m8ZE0nZvSjGsznzRC585c%2FB%2BYYDzWevP%2F3dZokH55Jrhji%2F6sMDkudJ%2FDiA%2BKD2%2BFFRuN4aqfn9o%2FNh6DnenfC9XC%2BQUCXSFwql%2B8ipymKCKEYWtCewPx1cPohuY7hH8lx9v4B0OTZ64sNJzzPctampxZQTZHEbLqjT65QNoMBdtl6qaGHPotO3J%2BvN2MUWtDfcjgTEsru1m7goC3cEoi9q3xahgHMObE8cAGOqUB%2BduPpEiX6qnPUMkIp8%2FSJgHbBqrn2THUinWTKoxReEIoxUNHTSoiE%2FPJlz8tAarO3jlpe%2FRtYP6BHK7wMcB09weAEI7MYOHUcJGRX8ZiiXWGQ3PsNNMGu6zSkqbR17yIxNtqywtogNg5S2uxDuI%2Fe%2BhwpBHCq%2FfANsUGuBps9jNmdTXpCfPY%2FBu%2BDrH3a3tqqnNhjjDNizmr%2FpU4HE9p4OSLuIfA&X-Amz-Signature=5383b196b4e40f3d6a2495b87efec778ec35074aa0d17998cf79136fd24d4c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
