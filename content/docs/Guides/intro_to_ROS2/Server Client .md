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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7ZG7M7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBaJ6xQgaZ%2B9ZOEVmnDOZcxbal4J4wCnu1TaHvdKi4h7AiANEZan5TzJ9lv2OUVt3Al46Yipk9Lcq2B7uMSmnwRj4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMCwYRIek3JBgRmjSeKtwDStHUpqI4mr8NLie1PuySZWiRdUgr6m%2FCLzmdZiSguYFbqdeuz8FIGA0yFaiH9pCuP28Oitnip6SY2vF5wO%2BGQ%2BNpk47qATwhkV%2BLI4lxkIayamb2jyYbqQFpFqhep2at%2BCTm6HJ7Luu4BaDQJdfa0xFNzwqcZ21krHjaRNS5PLiLfR1IBDzdUv6kPXvidR%2BJwhhG3EqhAvz4PUEygKdrOmnlQcAAprXg00nDt0NBd%2F6F7tNV6fhbSJZxDTs4wYmP8NPAOTxhkN98xyjfKUSCfgqVdFVlWTYCPTgICkZXfqu87pyc%2FqZyDNYUOe6tKfDeTFJPWsdni0uskw0m59lbI1uKg5vS%2BoVJryk30u%2B%2FJzFW7J6cTmf%2F88QuCBHVxo7HL3inpDbSBXE5WwublWeqEML2iRSMr8F8WTcTUDjNwP7UO8cs8t7Gm2Y8W2R5QbsFlzKNCT6SuvzWKyRzWvNPBVgK6wvd4pcO9PJ9NT8dfVH5%2FU7kL2TTs%2FWrNurIyJ7I%2FITTN00lFUT%2BCQV6KL0Nla4IYvTixBTo%2FGt1jomdfFIbhPybUFWdhwqrgM%2BdXl8o0kXu2%2BqfZ1kJgBWP3kLxgan8%2BrDqFO8jWZEditAgKTk32MLQ5kagkk7AzN4wxOH%2BwQY6pgGp7D%2BMvjWONqJ7wlw4eqC0ynZ7TpRInObzpH2Ik6Hc7zuKgbE1VWJ%2FvvuM%2BJMIzxYoBEyQlbWb06qS%2FCSs41PLsufDAyje36zBR57z5k%2BiWJc9B6%2BwWGv2wd2w8Oo0i4v%2BKmDg9hZEDNL42eme7XO%2FrMWqO4Kre6iP9S46tFuVXuoVdw1%2Fd%2FefmrnbL3QU%2BLjpUV9Su%2FQ%2BC191lUEg1Z%2FitokBh%2Fi4&X-Amz-Signature=ddcafa5d5d90c28528829b5f390a9403bbd5732366e4d6e0f9e5720549c0fc41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7ZG7M7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBaJ6xQgaZ%2B9ZOEVmnDOZcxbal4J4wCnu1TaHvdKi4h7AiANEZan5TzJ9lv2OUVt3Al46Yipk9Lcq2B7uMSmnwRj4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMCwYRIek3JBgRmjSeKtwDStHUpqI4mr8NLie1PuySZWiRdUgr6m%2FCLzmdZiSguYFbqdeuz8FIGA0yFaiH9pCuP28Oitnip6SY2vF5wO%2BGQ%2BNpk47qATwhkV%2BLI4lxkIayamb2jyYbqQFpFqhep2at%2BCTm6HJ7Luu4BaDQJdfa0xFNzwqcZ21krHjaRNS5PLiLfR1IBDzdUv6kPXvidR%2BJwhhG3EqhAvz4PUEygKdrOmnlQcAAprXg00nDt0NBd%2F6F7tNV6fhbSJZxDTs4wYmP8NPAOTxhkN98xyjfKUSCfgqVdFVlWTYCPTgICkZXfqu87pyc%2FqZyDNYUOe6tKfDeTFJPWsdni0uskw0m59lbI1uKg5vS%2BoVJryk30u%2B%2FJzFW7J6cTmf%2F88QuCBHVxo7HL3inpDbSBXE5WwublWeqEML2iRSMr8F8WTcTUDjNwP7UO8cs8t7Gm2Y8W2R5QbsFlzKNCT6SuvzWKyRzWvNPBVgK6wvd4pcO9PJ9NT8dfVH5%2FU7kL2TTs%2FWrNurIyJ7I%2FITTN00lFUT%2BCQV6KL0Nla4IYvTixBTo%2FGt1jomdfFIbhPybUFWdhwqrgM%2BdXl8o0kXu2%2BqfZ1kJgBWP3kLxgan8%2BrDqFO8jWZEditAgKTk32MLQ5kagkk7AzN4wxOH%2BwQY6pgGp7D%2BMvjWONqJ7wlw4eqC0ynZ7TpRInObzpH2Ik6Hc7zuKgbE1VWJ%2FvvuM%2BJMIzxYoBEyQlbWb06qS%2FCSs41PLsufDAyje36zBR57z5k%2BiWJc9B6%2BwWGv2wd2w8Oo0i4v%2BKmDg9hZEDNL42eme7XO%2FrMWqO4Kre6iP9S46tFuVXuoVdw1%2Fd%2FefmrnbL3QU%2BLjpUV9Su%2FQ%2BC191lUEg1Z%2FitokBh%2Fi4&X-Amz-Signature=902164abe40a7141bd2f2319af21dc98e94eff2a67e11e81b9ddbea662c74ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7ZG7M7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBaJ6xQgaZ%2B9ZOEVmnDOZcxbal4J4wCnu1TaHvdKi4h7AiANEZan5TzJ9lv2OUVt3Al46Yipk9Lcq2B7uMSmnwRj4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMCwYRIek3JBgRmjSeKtwDStHUpqI4mr8NLie1PuySZWiRdUgr6m%2FCLzmdZiSguYFbqdeuz8FIGA0yFaiH9pCuP28Oitnip6SY2vF5wO%2BGQ%2BNpk47qATwhkV%2BLI4lxkIayamb2jyYbqQFpFqhep2at%2BCTm6HJ7Luu4BaDQJdfa0xFNzwqcZ21krHjaRNS5PLiLfR1IBDzdUv6kPXvidR%2BJwhhG3EqhAvz4PUEygKdrOmnlQcAAprXg00nDt0NBd%2F6F7tNV6fhbSJZxDTs4wYmP8NPAOTxhkN98xyjfKUSCfgqVdFVlWTYCPTgICkZXfqu87pyc%2FqZyDNYUOe6tKfDeTFJPWsdni0uskw0m59lbI1uKg5vS%2BoVJryk30u%2B%2FJzFW7J6cTmf%2F88QuCBHVxo7HL3inpDbSBXE5WwublWeqEML2iRSMr8F8WTcTUDjNwP7UO8cs8t7Gm2Y8W2R5QbsFlzKNCT6SuvzWKyRzWvNPBVgK6wvd4pcO9PJ9NT8dfVH5%2FU7kL2TTs%2FWrNurIyJ7I%2FITTN00lFUT%2BCQV6KL0Nla4IYvTixBTo%2FGt1jomdfFIbhPybUFWdhwqrgM%2BdXl8o0kXu2%2BqfZ1kJgBWP3kLxgan8%2BrDqFO8jWZEditAgKTk32MLQ5kagkk7AzN4wxOH%2BwQY6pgGp7D%2BMvjWONqJ7wlw4eqC0ynZ7TpRInObzpH2Ik6Hc7zuKgbE1VWJ%2FvvuM%2BJMIzxYoBEyQlbWb06qS%2FCSs41PLsufDAyje36zBR57z5k%2BiWJc9B6%2BwWGv2wd2w8Oo0i4v%2BKmDg9hZEDNL42eme7XO%2FrMWqO4Kre6iP9S46tFuVXuoVdw1%2Fd%2FefmrnbL3QU%2BLjpUV9Su%2FQ%2BC191lUEg1Z%2FitokBh%2Fi4&X-Amz-Signature=bc75bf3b755d2835d4f2711efb24ec14d8c0e2e4ee6e4c778bfca04cc22a248a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7ZG7M7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBaJ6xQgaZ%2B9ZOEVmnDOZcxbal4J4wCnu1TaHvdKi4h7AiANEZan5TzJ9lv2OUVt3Al46Yipk9Lcq2B7uMSmnwRj4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMCwYRIek3JBgRmjSeKtwDStHUpqI4mr8NLie1PuySZWiRdUgr6m%2FCLzmdZiSguYFbqdeuz8FIGA0yFaiH9pCuP28Oitnip6SY2vF5wO%2BGQ%2BNpk47qATwhkV%2BLI4lxkIayamb2jyYbqQFpFqhep2at%2BCTm6HJ7Luu4BaDQJdfa0xFNzwqcZ21krHjaRNS5PLiLfR1IBDzdUv6kPXvidR%2BJwhhG3EqhAvz4PUEygKdrOmnlQcAAprXg00nDt0NBd%2F6F7tNV6fhbSJZxDTs4wYmP8NPAOTxhkN98xyjfKUSCfgqVdFVlWTYCPTgICkZXfqu87pyc%2FqZyDNYUOe6tKfDeTFJPWsdni0uskw0m59lbI1uKg5vS%2BoVJryk30u%2B%2FJzFW7J6cTmf%2F88QuCBHVxo7HL3inpDbSBXE5WwublWeqEML2iRSMr8F8WTcTUDjNwP7UO8cs8t7Gm2Y8W2R5QbsFlzKNCT6SuvzWKyRzWvNPBVgK6wvd4pcO9PJ9NT8dfVH5%2FU7kL2TTs%2FWrNurIyJ7I%2FITTN00lFUT%2BCQV6KL0Nla4IYvTixBTo%2FGt1jomdfFIbhPybUFWdhwqrgM%2BdXl8o0kXu2%2BqfZ1kJgBWP3kLxgan8%2BrDqFO8jWZEditAgKTk32MLQ5kagkk7AzN4wxOH%2BwQY6pgGp7D%2BMvjWONqJ7wlw4eqC0ynZ7TpRInObzpH2Ik6Hc7zuKgbE1VWJ%2FvvuM%2BJMIzxYoBEyQlbWb06qS%2FCSs41PLsufDAyje36zBR57z5k%2BiWJc9B6%2BwWGv2wd2w8Oo0i4v%2BKmDg9hZEDNL42eme7XO%2FrMWqO4Kre6iP9S46tFuVXuoVdw1%2Fd%2FefmrnbL3QU%2BLjpUV9Su%2FQ%2BC191lUEg1Z%2FitokBh%2Fi4&X-Amz-Signature=c3228678f41b5e5de134c225a0f0d10b20462e9903ba9b7998db79340e9c653e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7ZG7M7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBaJ6xQgaZ%2B9ZOEVmnDOZcxbal4J4wCnu1TaHvdKi4h7AiANEZan5TzJ9lv2OUVt3Al46Yipk9Lcq2B7uMSmnwRj4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMCwYRIek3JBgRmjSeKtwDStHUpqI4mr8NLie1PuySZWiRdUgr6m%2FCLzmdZiSguYFbqdeuz8FIGA0yFaiH9pCuP28Oitnip6SY2vF5wO%2BGQ%2BNpk47qATwhkV%2BLI4lxkIayamb2jyYbqQFpFqhep2at%2BCTm6HJ7Luu4BaDQJdfa0xFNzwqcZ21krHjaRNS5PLiLfR1IBDzdUv6kPXvidR%2BJwhhG3EqhAvz4PUEygKdrOmnlQcAAprXg00nDt0NBd%2F6F7tNV6fhbSJZxDTs4wYmP8NPAOTxhkN98xyjfKUSCfgqVdFVlWTYCPTgICkZXfqu87pyc%2FqZyDNYUOe6tKfDeTFJPWsdni0uskw0m59lbI1uKg5vS%2BoVJryk30u%2B%2FJzFW7J6cTmf%2F88QuCBHVxo7HL3inpDbSBXE5WwublWeqEML2iRSMr8F8WTcTUDjNwP7UO8cs8t7Gm2Y8W2R5QbsFlzKNCT6SuvzWKyRzWvNPBVgK6wvd4pcO9PJ9NT8dfVH5%2FU7kL2TTs%2FWrNurIyJ7I%2FITTN00lFUT%2BCQV6KL0Nla4IYvTixBTo%2FGt1jomdfFIbhPybUFWdhwqrgM%2BdXl8o0kXu2%2BqfZ1kJgBWP3kLxgan8%2BrDqFO8jWZEditAgKTk32MLQ5kagkk7AzN4wxOH%2BwQY6pgGp7D%2BMvjWONqJ7wlw4eqC0ynZ7TpRInObzpH2Ik6Hc7zuKgbE1VWJ%2FvvuM%2BJMIzxYoBEyQlbWb06qS%2FCSs41PLsufDAyje36zBR57z5k%2BiWJc9B6%2BwWGv2wd2w8Oo0i4v%2BKmDg9hZEDNL42eme7XO%2FrMWqO4Kre6iP9S46tFuVXuoVdw1%2Fd%2FefmrnbL3QU%2BLjpUV9Su%2FQ%2BC191lUEg1Z%2FitokBh%2Fi4&X-Amz-Signature=19cac89e0d118999939ef4346b00cbc05dd6a1f6846aaf3b9f72d4035e58f0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
