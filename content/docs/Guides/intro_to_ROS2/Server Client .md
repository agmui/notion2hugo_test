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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOY3ELC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBUKoRVhcQaiVzGW8VgyMkd1L7fHx5CQBKuFdpevUnkDAiANjlqOF%2F3%2BlYKlt%2FZK7IsACdSm%2Bql0CSpWZsmHWQ7NVir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPGN935rPcnw9a8K6KtwDD83gTzxGKib21n4LSPaEzX00wsL0ipia3rV2x1CiJ1H0BtKrASu1F7y31WhffW1I%2B7pWSeh8yeJ9VtgDe28mA9j3zdqr39XtTX7c3Hf2p54XSt0JaXOF4CX%2BbYQ0NVoeYSePCZu2stW1tGisfYmbwdiF7j9qNWk4j3R3aDGC4RIqnWyh1UoUrLChBOtGfWtKYovUslsUyJDqeyPmroid20i7TSsZG5lyqVS0wtV6kdrtjr9bKpe54rGCi4nf7LGN8J4SbxDhzELfWs1XfVIs0gjJ%2BBkunCHPgMmx5OzBYU1GFMGZCfb%2BU6Yxb80sGPLEh9o%2F5Dt4u2ejkLIhB3lD4xXodu79plJRFprwGqlkQGaQKx39%2Bto5KEUsTmrTmxrzf9Y4R4XWZHVIXjFLXtRYAiFyyMJi3yDFvMB%2B%2F29aK08R9zIULFNAF2Za1fuP35BH0OFVHchuG%2Fo2D1lIVY7%2Bw4vSjQ1GHG7ZHaCc8dMgs36zfm9%2BCBVwLMjJeKy7cY4z5fKJAJCmptozbWiG%2FajHO2HuCEYZNe0t1t3bpUs6tgm%2FUPLu56BnSO6NvcrwL3QJ1JbgGlz9eB2YC%2FZLlV9rT2oP0GGC0QDAv9EVy1KN5RzwOi4nIyWzPBMoPPowkZXmvgY6pgEKs9Aqki2QSZuifCTclJ4MqCqtb4ZK%2F7NYXKIZutNNmOdoEH1%2Fez7mPbjzNMiW%2FLsl68Xf161Gd%2B6zqTBJLmhRTgWDYR8IAQqT%2FeYA%2FtzKdNCkkaAOPJdgnjfKwnSbYT2NXJbwBAj9HldRjVr48G8lL8HGfPqkSCQaTjrwilaMO8v9Q21tC8u7it0ipgf2JJ6YEQ3TmuedWWrVjQ7mhMsJ9lljdfzi&X-Amz-Signature=a714820c5ffd672674bb56801c5cc0dcd181e648d24af366e199ee62a826e521&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOY3ELC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBUKoRVhcQaiVzGW8VgyMkd1L7fHx5CQBKuFdpevUnkDAiANjlqOF%2F3%2BlYKlt%2FZK7IsACdSm%2Bql0CSpWZsmHWQ7NVir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPGN935rPcnw9a8K6KtwDD83gTzxGKib21n4LSPaEzX00wsL0ipia3rV2x1CiJ1H0BtKrASu1F7y31WhffW1I%2B7pWSeh8yeJ9VtgDe28mA9j3zdqr39XtTX7c3Hf2p54XSt0JaXOF4CX%2BbYQ0NVoeYSePCZu2stW1tGisfYmbwdiF7j9qNWk4j3R3aDGC4RIqnWyh1UoUrLChBOtGfWtKYovUslsUyJDqeyPmroid20i7TSsZG5lyqVS0wtV6kdrtjr9bKpe54rGCi4nf7LGN8J4SbxDhzELfWs1XfVIs0gjJ%2BBkunCHPgMmx5OzBYU1GFMGZCfb%2BU6Yxb80sGPLEh9o%2F5Dt4u2ejkLIhB3lD4xXodu79plJRFprwGqlkQGaQKx39%2Bto5KEUsTmrTmxrzf9Y4R4XWZHVIXjFLXtRYAiFyyMJi3yDFvMB%2B%2F29aK08R9zIULFNAF2Za1fuP35BH0OFVHchuG%2Fo2D1lIVY7%2Bw4vSjQ1GHG7ZHaCc8dMgs36zfm9%2BCBVwLMjJeKy7cY4z5fKJAJCmptozbWiG%2FajHO2HuCEYZNe0t1t3bpUs6tgm%2FUPLu56BnSO6NvcrwL3QJ1JbgGlz9eB2YC%2FZLlV9rT2oP0GGC0QDAv9EVy1KN5RzwOi4nIyWzPBMoPPowkZXmvgY6pgEKs9Aqki2QSZuifCTclJ4MqCqtb4ZK%2F7NYXKIZutNNmOdoEH1%2Fez7mPbjzNMiW%2FLsl68Xf161Gd%2B6zqTBJLmhRTgWDYR8IAQqT%2FeYA%2FtzKdNCkkaAOPJdgnjfKwnSbYT2NXJbwBAj9HldRjVr48G8lL8HGfPqkSCQaTjrwilaMO8v9Q21tC8u7it0ipgf2JJ6YEQ3TmuedWWrVjQ7mhMsJ9lljdfzi&X-Amz-Signature=10313973eccded16263b4b0b26ffbc5eb19ade28fbc4710eabb0a4779028430c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOY3ELC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBUKoRVhcQaiVzGW8VgyMkd1L7fHx5CQBKuFdpevUnkDAiANjlqOF%2F3%2BlYKlt%2FZK7IsACdSm%2Bql0CSpWZsmHWQ7NVir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPGN935rPcnw9a8K6KtwDD83gTzxGKib21n4LSPaEzX00wsL0ipia3rV2x1CiJ1H0BtKrASu1F7y31WhffW1I%2B7pWSeh8yeJ9VtgDe28mA9j3zdqr39XtTX7c3Hf2p54XSt0JaXOF4CX%2BbYQ0NVoeYSePCZu2stW1tGisfYmbwdiF7j9qNWk4j3R3aDGC4RIqnWyh1UoUrLChBOtGfWtKYovUslsUyJDqeyPmroid20i7TSsZG5lyqVS0wtV6kdrtjr9bKpe54rGCi4nf7LGN8J4SbxDhzELfWs1XfVIs0gjJ%2BBkunCHPgMmx5OzBYU1GFMGZCfb%2BU6Yxb80sGPLEh9o%2F5Dt4u2ejkLIhB3lD4xXodu79plJRFprwGqlkQGaQKx39%2Bto5KEUsTmrTmxrzf9Y4R4XWZHVIXjFLXtRYAiFyyMJi3yDFvMB%2B%2F29aK08R9zIULFNAF2Za1fuP35BH0OFVHchuG%2Fo2D1lIVY7%2Bw4vSjQ1GHG7ZHaCc8dMgs36zfm9%2BCBVwLMjJeKy7cY4z5fKJAJCmptozbWiG%2FajHO2HuCEYZNe0t1t3bpUs6tgm%2FUPLu56BnSO6NvcrwL3QJ1JbgGlz9eB2YC%2FZLlV9rT2oP0GGC0QDAv9EVy1KN5RzwOi4nIyWzPBMoPPowkZXmvgY6pgEKs9Aqki2QSZuifCTclJ4MqCqtb4ZK%2F7NYXKIZutNNmOdoEH1%2Fez7mPbjzNMiW%2FLsl68Xf161Gd%2B6zqTBJLmhRTgWDYR8IAQqT%2FeYA%2FtzKdNCkkaAOPJdgnjfKwnSbYT2NXJbwBAj9HldRjVr48G8lL8HGfPqkSCQaTjrwilaMO8v9Q21tC8u7it0ipgf2JJ6YEQ3TmuedWWrVjQ7mhMsJ9lljdfzi&X-Amz-Signature=9092f6a3801f3fd2ea64a1237fb6fd26c99c7559cbbc719d74e4881dbe5ce290&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOY3ELC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBUKoRVhcQaiVzGW8VgyMkd1L7fHx5CQBKuFdpevUnkDAiANjlqOF%2F3%2BlYKlt%2FZK7IsACdSm%2Bql0CSpWZsmHWQ7NVir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPGN935rPcnw9a8K6KtwDD83gTzxGKib21n4LSPaEzX00wsL0ipia3rV2x1CiJ1H0BtKrASu1F7y31WhffW1I%2B7pWSeh8yeJ9VtgDe28mA9j3zdqr39XtTX7c3Hf2p54XSt0JaXOF4CX%2BbYQ0NVoeYSePCZu2stW1tGisfYmbwdiF7j9qNWk4j3R3aDGC4RIqnWyh1UoUrLChBOtGfWtKYovUslsUyJDqeyPmroid20i7TSsZG5lyqVS0wtV6kdrtjr9bKpe54rGCi4nf7LGN8J4SbxDhzELfWs1XfVIs0gjJ%2BBkunCHPgMmx5OzBYU1GFMGZCfb%2BU6Yxb80sGPLEh9o%2F5Dt4u2ejkLIhB3lD4xXodu79plJRFprwGqlkQGaQKx39%2Bto5KEUsTmrTmxrzf9Y4R4XWZHVIXjFLXtRYAiFyyMJi3yDFvMB%2B%2F29aK08R9zIULFNAF2Za1fuP35BH0OFVHchuG%2Fo2D1lIVY7%2Bw4vSjQ1GHG7ZHaCc8dMgs36zfm9%2BCBVwLMjJeKy7cY4z5fKJAJCmptozbWiG%2FajHO2HuCEYZNe0t1t3bpUs6tgm%2FUPLu56BnSO6NvcrwL3QJ1JbgGlz9eB2YC%2FZLlV9rT2oP0GGC0QDAv9EVy1KN5RzwOi4nIyWzPBMoPPowkZXmvgY6pgEKs9Aqki2QSZuifCTclJ4MqCqtb4ZK%2F7NYXKIZutNNmOdoEH1%2Fez7mPbjzNMiW%2FLsl68Xf161Gd%2B6zqTBJLmhRTgWDYR8IAQqT%2FeYA%2FtzKdNCkkaAOPJdgnjfKwnSbYT2NXJbwBAj9HldRjVr48G8lL8HGfPqkSCQaTjrwilaMO8v9Q21tC8u7it0ipgf2JJ6YEQ3TmuedWWrVjQ7mhMsJ9lljdfzi&X-Amz-Signature=bb9ba04f89707a11f878087793c2a47fd42d99a73da9884ab3d0c6ed6f5d12f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOY3ELC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBUKoRVhcQaiVzGW8VgyMkd1L7fHx5CQBKuFdpevUnkDAiANjlqOF%2F3%2BlYKlt%2FZK7IsACdSm%2Bql0CSpWZsmHWQ7NVir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPGN935rPcnw9a8K6KtwDD83gTzxGKib21n4LSPaEzX00wsL0ipia3rV2x1CiJ1H0BtKrASu1F7y31WhffW1I%2B7pWSeh8yeJ9VtgDe28mA9j3zdqr39XtTX7c3Hf2p54XSt0JaXOF4CX%2BbYQ0NVoeYSePCZu2stW1tGisfYmbwdiF7j9qNWk4j3R3aDGC4RIqnWyh1UoUrLChBOtGfWtKYovUslsUyJDqeyPmroid20i7TSsZG5lyqVS0wtV6kdrtjr9bKpe54rGCi4nf7LGN8J4SbxDhzELfWs1XfVIs0gjJ%2BBkunCHPgMmx5OzBYU1GFMGZCfb%2BU6Yxb80sGPLEh9o%2F5Dt4u2ejkLIhB3lD4xXodu79plJRFprwGqlkQGaQKx39%2Bto5KEUsTmrTmxrzf9Y4R4XWZHVIXjFLXtRYAiFyyMJi3yDFvMB%2B%2F29aK08R9zIULFNAF2Za1fuP35BH0OFVHchuG%2Fo2D1lIVY7%2Bw4vSjQ1GHG7ZHaCc8dMgs36zfm9%2BCBVwLMjJeKy7cY4z5fKJAJCmptozbWiG%2FajHO2HuCEYZNe0t1t3bpUs6tgm%2FUPLu56BnSO6NvcrwL3QJ1JbgGlz9eB2YC%2FZLlV9rT2oP0GGC0QDAv9EVy1KN5RzwOi4nIyWzPBMoPPowkZXmvgY6pgEKs9Aqki2QSZuifCTclJ4MqCqtb4ZK%2F7NYXKIZutNNmOdoEH1%2Fez7mPbjzNMiW%2FLsl68Xf161Gd%2B6zqTBJLmhRTgWDYR8IAQqT%2FeYA%2FtzKdNCkkaAOPJdgnjfKwnSbYT2NXJbwBAj9HldRjVr48G8lL8HGfPqkSCQaTjrwilaMO8v9Q21tC8u7it0ipgf2JJ6YEQ3TmuedWWrVjQ7mhMsJ9lljdfzi&X-Amz-Signature=71a8115612be66df80e17713e602c72afd5249c78b4ed0db6bee51174d7e9931&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
