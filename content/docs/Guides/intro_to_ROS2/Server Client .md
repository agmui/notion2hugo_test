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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC7ISKM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGJiqEcfBbH8Z%2F8scC94y3Zj4PMzsSsqyjdbu617sstAiEAtmq2lvKKYym1GymZmz1fyMtlDnMduqNnw3VccTOhVA4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNCBF2RHCYcsPSU0ircAz6IJKPwZbcOPPjmUeNHe49ePF8snYRZqFAfbMRKV%2Bu57rUXlNshb8uZtVOmqajVXAmHeoaMaYb%2FjBiodR2tlIpdE0KeHlf09%2B3S8lNgkxBlcoYFKEA5GvZhGFJe%2B9UMbzWIZ17TG18YdY9AGhJDahKdpinxeUUEiaRpKg6lFQR%2Blaal6nJk4W7scc9lVv15JkYQirijNKWFoP5yh%2B12lTfkA9HD4BXHD%2BsgLXd3KDmPwVWVUeepfZx%2B0M%2Bx1rI89gC6sK7KyBQTbLj8I1CKmnR6cOj1O6NL1Beh0%2Bq8pa3aDA6%2B4cwO3k4weFlJsBY3HVqHSr6%2BXh4%2F0pvKs2hsOJ5ui4VGInMwD1sMCflm6yf1MhFDZJ7f5Q25YTNzRaJDPSlmRU8CLD8dFfPceypYKtqCsAs0cawH5vOiEaEOrFg2CQ9h1EIrhoouNy2pYU%2FBu7%2Bjuri%2BKNyH49%2BshjSmnITHXlKxXwcXT%2FohfJ5bmaARULEnImWWdXegm9cl04U9Ad7HLSy7fhBUgreNpKrqw0H0f8h9nfuDWVgGZdSOPtUA1POkFW3SFH%2FJ9FUL3CcBgJawTO3xqFma5FN4xC2wWFPFF8702LYOsNeMeZlIkIg4u2jkjZpGOt4sjzlJMI73tcQGOqUBcdWW2ddXvaMU43JGXccrZvUGHv%2F%2FbI3jH1lst1g59nyY24QH3y7Mjak%2B5%2FmGD5Ki9z%2BU1Ku7%2FZhnT%2Fu1uKCVptH%2FIUAqB8ugNYqPsmdYMHOBeeZFOXLScQYUVvi5sjLkjNIo6hqkilEacjI4lC9WnhofJ%2FuksUytMTjU0cAPLXLwKWRxVyuXE7AQliH0NMbasgrfBG3Y6e%2FupNSZxi0qIc11tMAn&X-Amz-Signature=ab451515a00934e6281dfdf6fdcdb4955b15d0a46b5833fa14cfb4321bfde889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC7ISKM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGJiqEcfBbH8Z%2F8scC94y3Zj4PMzsSsqyjdbu617sstAiEAtmq2lvKKYym1GymZmz1fyMtlDnMduqNnw3VccTOhVA4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNCBF2RHCYcsPSU0ircAz6IJKPwZbcOPPjmUeNHe49ePF8snYRZqFAfbMRKV%2Bu57rUXlNshb8uZtVOmqajVXAmHeoaMaYb%2FjBiodR2tlIpdE0KeHlf09%2B3S8lNgkxBlcoYFKEA5GvZhGFJe%2B9UMbzWIZ17TG18YdY9AGhJDahKdpinxeUUEiaRpKg6lFQR%2Blaal6nJk4W7scc9lVv15JkYQirijNKWFoP5yh%2B12lTfkA9HD4BXHD%2BsgLXd3KDmPwVWVUeepfZx%2B0M%2Bx1rI89gC6sK7KyBQTbLj8I1CKmnR6cOj1O6NL1Beh0%2Bq8pa3aDA6%2B4cwO3k4weFlJsBY3HVqHSr6%2BXh4%2F0pvKs2hsOJ5ui4VGInMwD1sMCflm6yf1MhFDZJ7f5Q25YTNzRaJDPSlmRU8CLD8dFfPceypYKtqCsAs0cawH5vOiEaEOrFg2CQ9h1EIrhoouNy2pYU%2FBu7%2Bjuri%2BKNyH49%2BshjSmnITHXlKxXwcXT%2FohfJ5bmaARULEnImWWdXegm9cl04U9Ad7HLSy7fhBUgreNpKrqw0H0f8h9nfuDWVgGZdSOPtUA1POkFW3SFH%2FJ9FUL3CcBgJawTO3xqFma5FN4xC2wWFPFF8702LYOsNeMeZlIkIg4u2jkjZpGOt4sjzlJMI73tcQGOqUBcdWW2ddXvaMU43JGXccrZvUGHv%2F%2FbI3jH1lst1g59nyY24QH3y7Mjak%2B5%2FmGD5Ki9z%2BU1Ku7%2FZhnT%2Fu1uKCVptH%2FIUAqB8ugNYqPsmdYMHOBeeZFOXLScQYUVvi5sjLkjNIo6hqkilEacjI4lC9WnhofJ%2FuksUytMTjU0cAPLXLwKWRxVyuXE7AQliH0NMbasgrfBG3Y6e%2FupNSZxi0qIc11tMAn&X-Amz-Signature=61cc65c1f3e82ff5d064c502a0d2d8127ba8a3ad6b167ca48679ba60a35a1c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC7ISKM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGJiqEcfBbH8Z%2F8scC94y3Zj4PMzsSsqyjdbu617sstAiEAtmq2lvKKYym1GymZmz1fyMtlDnMduqNnw3VccTOhVA4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNCBF2RHCYcsPSU0ircAz6IJKPwZbcOPPjmUeNHe49ePF8snYRZqFAfbMRKV%2Bu57rUXlNshb8uZtVOmqajVXAmHeoaMaYb%2FjBiodR2tlIpdE0KeHlf09%2B3S8lNgkxBlcoYFKEA5GvZhGFJe%2B9UMbzWIZ17TG18YdY9AGhJDahKdpinxeUUEiaRpKg6lFQR%2Blaal6nJk4W7scc9lVv15JkYQirijNKWFoP5yh%2B12lTfkA9HD4BXHD%2BsgLXd3KDmPwVWVUeepfZx%2B0M%2Bx1rI89gC6sK7KyBQTbLj8I1CKmnR6cOj1O6NL1Beh0%2Bq8pa3aDA6%2B4cwO3k4weFlJsBY3HVqHSr6%2BXh4%2F0pvKs2hsOJ5ui4VGInMwD1sMCflm6yf1MhFDZJ7f5Q25YTNzRaJDPSlmRU8CLD8dFfPceypYKtqCsAs0cawH5vOiEaEOrFg2CQ9h1EIrhoouNy2pYU%2FBu7%2Bjuri%2BKNyH49%2BshjSmnITHXlKxXwcXT%2FohfJ5bmaARULEnImWWdXegm9cl04U9Ad7HLSy7fhBUgreNpKrqw0H0f8h9nfuDWVgGZdSOPtUA1POkFW3SFH%2FJ9FUL3CcBgJawTO3xqFma5FN4xC2wWFPFF8702LYOsNeMeZlIkIg4u2jkjZpGOt4sjzlJMI73tcQGOqUBcdWW2ddXvaMU43JGXccrZvUGHv%2F%2FbI3jH1lst1g59nyY24QH3y7Mjak%2B5%2FmGD5Ki9z%2BU1Ku7%2FZhnT%2Fu1uKCVptH%2FIUAqB8ugNYqPsmdYMHOBeeZFOXLScQYUVvi5sjLkjNIo6hqkilEacjI4lC9WnhofJ%2FuksUytMTjU0cAPLXLwKWRxVyuXE7AQliH0NMbasgrfBG3Y6e%2FupNSZxi0qIc11tMAn&X-Amz-Signature=721649240ed189c00d07b06f6d3a6f52fc0156e08f2987d7a0c263a9714709f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC7ISKM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGJiqEcfBbH8Z%2F8scC94y3Zj4PMzsSsqyjdbu617sstAiEAtmq2lvKKYym1GymZmz1fyMtlDnMduqNnw3VccTOhVA4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNCBF2RHCYcsPSU0ircAz6IJKPwZbcOPPjmUeNHe49ePF8snYRZqFAfbMRKV%2Bu57rUXlNshb8uZtVOmqajVXAmHeoaMaYb%2FjBiodR2tlIpdE0KeHlf09%2B3S8lNgkxBlcoYFKEA5GvZhGFJe%2B9UMbzWIZ17TG18YdY9AGhJDahKdpinxeUUEiaRpKg6lFQR%2Blaal6nJk4W7scc9lVv15JkYQirijNKWFoP5yh%2B12lTfkA9HD4BXHD%2BsgLXd3KDmPwVWVUeepfZx%2B0M%2Bx1rI89gC6sK7KyBQTbLj8I1CKmnR6cOj1O6NL1Beh0%2Bq8pa3aDA6%2B4cwO3k4weFlJsBY3HVqHSr6%2BXh4%2F0pvKs2hsOJ5ui4VGInMwD1sMCflm6yf1MhFDZJ7f5Q25YTNzRaJDPSlmRU8CLD8dFfPceypYKtqCsAs0cawH5vOiEaEOrFg2CQ9h1EIrhoouNy2pYU%2FBu7%2Bjuri%2BKNyH49%2BshjSmnITHXlKxXwcXT%2FohfJ5bmaARULEnImWWdXegm9cl04U9Ad7HLSy7fhBUgreNpKrqw0H0f8h9nfuDWVgGZdSOPtUA1POkFW3SFH%2FJ9FUL3CcBgJawTO3xqFma5FN4xC2wWFPFF8702LYOsNeMeZlIkIg4u2jkjZpGOt4sjzlJMI73tcQGOqUBcdWW2ddXvaMU43JGXccrZvUGHv%2F%2FbI3jH1lst1g59nyY24QH3y7Mjak%2B5%2FmGD5Ki9z%2BU1Ku7%2FZhnT%2Fu1uKCVptH%2FIUAqB8ugNYqPsmdYMHOBeeZFOXLScQYUVvi5sjLkjNIo6hqkilEacjI4lC9WnhofJ%2FuksUytMTjU0cAPLXLwKWRxVyuXE7AQliH0NMbasgrfBG3Y6e%2FupNSZxi0qIc11tMAn&X-Amz-Signature=73df7085de78318a97fe322ff94503345a0544e6279ad09a49f8b39796842635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC7ISKM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGJiqEcfBbH8Z%2F8scC94y3Zj4PMzsSsqyjdbu617sstAiEAtmq2lvKKYym1GymZmz1fyMtlDnMduqNnw3VccTOhVA4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNCBF2RHCYcsPSU0ircAz6IJKPwZbcOPPjmUeNHe49ePF8snYRZqFAfbMRKV%2Bu57rUXlNshb8uZtVOmqajVXAmHeoaMaYb%2FjBiodR2tlIpdE0KeHlf09%2B3S8lNgkxBlcoYFKEA5GvZhGFJe%2B9UMbzWIZ17TG18YdY9AGhJDahKdpinxeUUEiaRpKg6lFQR%2Blaal6nJk4W7scc9lVv15JkYQirijNKWFoP5yh%2B12lTfkA9HD4BXHD%2BsgLXd3KDmPwVWVUeepfZx%2B0M%2Bx1rI89gC6sK7KyBQTbLj8I1CKmnR6cOj1O6NL1Beh0%2Bq8pa3aDA6%2B4cwO3k4weFlJsBY3HVqHSr6%2BXh4%2F0pvKs2hsOJ5ui4VGInMwD1sMCflm6yf1MhFDZJ7f5Q25YTNzRaJDPSlmRU8CLD8dFfPceypYKtqCsAs0cawH5vOiEaEOrFg2CQ9h1EIrhoouNy2pYU%2FBu7%2Bjuri%2BKNyH49%2BshjSmnITHXlKxXwcXT%2FohfJ5bmaARULEnImWWdXegm9cl04U9Ad7HLSy7fhBUgreNpKrqw0H0f8h9nfuDWVgGZdSOPtUA1POkFW3SFH%2FJ9FUL3CcBgJawTO3xqFma5FN4xC2wWFPFF8702LYOsNeMeZlIkIg4u2jkjZpGOt4sjzlJMI73tcQGOqUBcdWW2ddXvaMU43JGXccrZvUGHv%2F%2FbI3jH1lst1g59nyY24QH3y7Mjak%2B5%2FmGD5Ki9z%2BU1Ku7%2FZhnT%2Fu1uKCVptH%2FIUAqB8ugNYqPsmdYMHOBeeZFOXLScQYUVvi5sjLkjNIo6hqkilEacjI4lC9WnhofJ%2FuksUytMTjU0cAPLXLwKWRxVyuXE7AQliH0NMbasgrfBG3Y6e%2FupNSZxi0qIc11tMAn&X-Amz-Signature=74f7fca4c804971ef18b63598289ce72420b7e1a71dc46d6c04f25869800e5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
