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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NERKCOE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0m31vl0oo60mKd2VPri1PxDXkc446iZvM4WykVRnQzAiAj13MO7k1yYxwRdj8uOZVNCndbXd8mpu7pkih2%2FVComSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfNQiYcYWF4Iuj5ZKtwDIRkMZKlFIXxpUGbeFRyn4H6x82G%2FivhoFTFWH80R%2FQtrmyUZ3zboEFO7SadKfWWP2%2FaZ9%2BlqDvu5FIv4wIQIjVsvrxyVVVy32T46gSMEE%2FndWi%2BnbCyMJVIj8Uwh7XTe%2BNhTvjB8OQvtTnGlJvTNqc%2FbIrcRIUW1%2BpSEPYzRX%2Fs3ojampfHphbA8uLGuRz22A3GKv93kPgji%2BJxsCfXc%2BCohZFshTjQbaMdLGGeuXRidLyKF3NQqYcLe%2B0VxF3BnHep4kTdR87rQ5eX8ELENvng0WhOBet86C1%2Bl8OdQDiNBvNHBJbnivDGKRf8uL8vU9L%2FcM3bS5APpkVZYPx4Rjk1vb1OV9yZltnT1YXM8%2BeivMZ0Ppuvmz5ihMtLxq02rROfOGh7p5kbfNSZDfPQuHBsN1XreJcJF2J8MHy%2BnjLDB5lD85m7%2FW2HbprBLjvfo77GeIvP86kW5qP01sq8w2tX2kDB0iCumJtKL23jxxFDBD%2BIbSLi8bl%2BL9eFgNgxmABEh06CYnGWO2VmWZDZLc2oEbBLu%2BvGfiAO0VsXbX3syP5lXFJ1Ig0ZPRAc0zRdqecIQvyXEW92wA4q8Eeot2tzaVSm84pSAK8XcuV%2B0tQZUE2f0Pi7HEHj%2Bs2owotzrwQY6pgFxfBg3cIGOH1PI%2FtHNctg2GoIgJPk6I5CnHAZIUuBEHI%2FPFMtECnyJhXfZJHGjZ6EsaSp2tjeWTWLJV6Oid6I6hv%2F72TJoNVpqdBRp%2Bi5MQvoQT8NMtZD82gcktBliE4m2GGqMsTZptVZziOpbOCjeQB6GTGPmEPVjchhhSvxyILnx2LI7vlG5wU74jds9uDQ0%2Fc9pBzz4%2BdRj5QHotJnSDQQ%2FJXHh&X-Amz-Signature=ae38db7aba0f30d0a605780231f243118a72eac46b0592f3c104bf09ebf24388&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NERKCOE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0m31vl0oo60mKd2VPri1PxDXkc446iZvM4WykVRnQzAiAj13MO7k1yYxwRdj8uOZVNCndbXd8mpu7pkih2%2FVComSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfNQiYcYWF4Iuj5ZKtwDIRkMZKlFIXxpUGbeFRyn4H6x82G%2FivhoFTFWH80R%2FQtrmyUZ3zboEFO7SadKfWWP2%2FaZ9%2BlqDvu5FIv4wIQIjVsvrxyVVVy32T46gSMEE%2FndWi%2BnbCyMJVIj8Uwh7XTe%2BNhTvjB8OQvtTnGlJvTNqc%2FbIrcRIUW1%2BpSEPYzRX%2Fs3ojampfHphbA8uLGuRz22A3GKv93kPgji%2BJxsCfXc%2BCohZFshTjQbaMdLGGeuXRidLyKF3NQqYcLe%2B0VxF3BnHep4kTdR87rQ5eX8ELENvng0WhOBet86C1%2Bl8OdQDiNBvNHBJbnivDGKRf8uL8vU9L%2FcM3bS5APpkVZYPx4Rjk1vb1OV9yZltnT1YXM8%2BeivMZ0Ppuvmz5ihMtLxq02rROfOGh7p5kbfNSZDfPQuHBsN1XreJcJF2J8MHy%2BnjLDB5lD85m7%2FW2HbprBLjvfo77GeIvP86kW5qP01sq8w2tX2kDB0iCumJtKL23jxxFDBD%2BIbSLi8bl%2BL9eFgNgxmABEh06CYnGWO2VmWZDZLc2oEbBLu%2BvGfiAO0VsXbX3syP5lXFJ1Ig0ZPRAc0zRdqecIQvyXEW92wA4q8Eeot2tzaVSm84pSAK8XcuV%2B0tQZUE2f0Pi7HEHj%2Bs2owotzrwQY6pgFxfBg3cIGOH1PI%2FtHNctg2GoIgJPk6I5CnHAZIUuBEHI%2FPFMtECnyJhXfZJHGjZ6EsaSp2tjeWTWLJV6Oid6I6hv%2F72TJoNVpqdBRp%2Bi5MQvoQT8NMtZD82gcktBliE4m2GGqMsTZptVZziOpbOCjeQB6GTGPmEPVjchhhSvxyILnx2LI7vlG5wU74jds9uDQ0%2Fc9pBzz4%2BdRj5QHotJnSDQQ%2FJXHh&X-Amz-Signature=367a0f72069b0e27d9fcae8ff641ab0ceb7690c4a7895bd8cdbf0b0cb437b535&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NERKCOE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0m31vl0oo60mKd2VPri1PxDXkc446iZvM4WykVRnQzAiAj13MO7k1yYxwRdj8uOZVNCndbXd8mpu7pkih2%2FVComSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfNQiYcYWF4Iuj5ZKtwDIRkMZKlFIXxpUGbeFRyn4H6x82G%2FivhoFTFWH80R%2FQtrmyUZ3zboEFO7SadKfWWP2%2FaZ9%2BlqDvu5FIv4wIQIjVsvrxyVVVy32T46gSMEE%2FndWi%2BnbCyMJVIj8Uwh7XTe%2BNhTvjB8OQvtTnGlJvTNqc%2FbIrcRIUW1%2BpSEPYzRX%2Fs3ojampfHphbA8uLGuRz22A3GKv93kPgji%2BJxsCfXc%2BCohZFshTjQbaMdLGGeuXRidLyKF3NQqYcLe%2B0VxF3BnHep4kTdR87rQ5eX8ELENvng0WhOBet86C1%2Bl8OdQDiNBvNHBJbnivDGKRf8uL8vU9L%2FcM3bS5APpkVZYPx4Rjk1vb1OV9yZltnT1YXM8%2BeivMZ0Ppuvmz5ihMtLxq02rROfOGh7p5kbfNSZDfPQuHBsN1XreJcJF2J8MHy%2BnjLDB5lD85m7%2FW2HbprBLjvfo77GeIvP86kW5qP01sq8w2tX2kDB0iCumJtKL23jxxFDBD%2BIbSLi8bl%2BL9eFgNgxmABEh06CYnGWO2VmWZDZLc2oEbBLu%2BvGfiAO0VsXbX3syP5lXFJ1Ig0ZPRAc0zRdqecIQvyXEW92wA4q8Eeot2tzaVSm84pSAK8XcuV%2B0tQZUE2f0Pi7HEHj%2Bs2owotzrwQY6pgFxfBg3cIGOH1PI%2FtHNctg2GoIgJPk6I5CnHAZIUuBEHI%2FPFMtECnyJhXfZJHGjZ6EsaSp2tjeWTWLJV6Oid6I6hv%2F72TJoNVpqdBRp%2Bi5MQvoQT8NMtZD82gcktBliE4m2GGqMsTZptVZziOpbOCjeQB6GTGPmEPVjchhhSvxyILnx2LI7vlG5wU74jds9uDQ0%2Fc9pBzz4%2BdRj5QHotJnSDQQ%2FJXHh&X-Amz-Signature=cca8f70a0dd009e4c38a806e398452b49cd76784423c3a82e295be37976b38d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NERKCOE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0m31vl0oo60mKd2VPri1PxDXkc446iZvM4WykVRnQzAiAj13MO7k1yYxwRdj8uOZVNCndbXd8mpu7pkih2%2FVComSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfNQiYcYWF4Iuj5ZKtwDIRkMZKlFIXxpUGbeFRyn4H6x82G%2FivhoFTFWH80R%2FQtrmyUZ3zboEFO7SadKfWWP2%2FaZ9%2BlqDvu5FIv4wIQIjVsvrxyVVVy32T46gSMEE%2FndWi%2BnbCyMJVIj8Uwh7XTe%2BNhTvjB8OQvtTnGlJvTNqc%2FbIrcRIUW1%2BpSEPYzRX%2Fs3ojampfHphbA8uLGuRz22A3GKv93kPgji%2BJxsCfXc%2BCohZFshTjQbaMdLGGeuXRidLyKF3NQqYcLe%2B0VxF3BnHep4kTdR87rQ5eX8ELENvng0WhOBet86C1%2Bl8OdQDiNBvNHBJbnivDGKRf8uL8vU9L%2FcM3bS5APpkVZYPx4Rjk1vb1OV9yZltnT1YXM8%2BeivMZ0Ppuvmz5ihMtLxq02rROfOGh7p5kbfNSZDfPQuHBsN1XreJcJF2J8MHy%2BnjLDB5lD85m7%2FW2HbprBLjvfo77GeIvP86kW5qP01sq8w2tX2kDB0iCumJtKL23jxxFDBD%2BIbSLi8bl%2BL9eFgNgxmABEh06CYnGWO2VmWZDZLc2oEbBLu%2BvGfiAO0VsXbX3syP5lXFJ1Ig0ZPRAc0zRdqecIQvyXEW92wA4q8Eeot2tzaVSm84pSAK8XcuV%2B0tQZUE2f0Pi7HEHj%2Bs2owotzrwQY6pgFxfBg3cIGOH1PI%2FtHNctg2GoIgJPk6I5CnHAZIUuBEHI%2FPFMtECnyJhXfZJHGjZ6EsaSp2tjeWTWLJV6Oid6I6hv%2F72TJoNVpqdBRp%2Bi5MQvoQT8NMtZD82gcktBliE4m2GGqMsTZptVZziOpbOCjeQB6GTGPmEPVjchhhSvxyILnx2LI7vlG5wU74jds9uDQ0%2Fc9pBzz4%2BdRj5QHotJnSDQQ%2FJXHh&X-Amz-Signature=39bed1f34857c17be14c403ab39ef21d51f1e84ab150cc08e6a0751a5045bb03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NERKCOE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0m31vl0oo60mKd2VPri1PxDXkc446iZvM4WykVRnQzAiAj13MO7k1yYxwRdj8uOZVNCndbXd8mpu7pkih2%2FVComSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfNQiYcYWF4Iuj5ZKtwDIRkMZKlFIXxpUGbeFRyn4H6x82G%2FivhoFTFWH80R%2FQtrmyUZ3zboEFO7SadKfWWP2%2FaZ9%2BlqDvu5FIv4wIQIjVsvrxyVVVy32T46gSMEE%2FndWi%2BnbCyMJVIj8Uwh7XTe%2BNhTvjB8OQvtTnGlJvTNqc%2FbIrcRIUW1%2BpSEPYzRX%2Fs3ojampfHphbA8uLGuRz22A3GKv93kPgji%2BJxsCfXc%2BCohZFshTjQbaMdLGGeuXRidLyKF3NQqYcLe%2B0VxF3BnHep4kTdR87rQ5eX8ELENvng0WhOBet86C1%2Bl8OdQDiNBvNHBJbnivDGKRf8uL8vU9L%2FcM3bS5APpkVZYPx4Rjk1vb1OV9yZltnT1YXM8%2BeivMZ0Ppuvmz5ihMtLxq02rROfOGh7p5kbfNSZDfPQuHBsN1XreJcJF2J8MHy%2BnjLDB5lD85m7%2FW2HbprBLjvfo77GeIvP86kW5qP01sq8w2tX2kDB0iCumJtKL23jxxFDBD%2BIbSLi8bl%2BL9eFgNgxmABEh06CYnGWO2VmWZDZLc2oEbBLu%2BvGfiAO0VsXbX3syP5lXFJ1Ig0ZPRAc0zRdqecIQvyXEW92wA4q8Eeot2tzaVSm84pSAK8XcuV%2B0tQZUE2f0Pi7HEHj%2Bs2owotzrwQY6pgFxfBg3cIGOH1PI%2FtHNctg2GoIgJPk6I5CnHAZIUuBEHI%2FPFMtECnyJhXfZJHGjZ6EsaSp2tjeWTWLJV6Oid6I6hv%2F72TJoNVpqdBRp%2Bi5MQvoQT8NMtZD82gcktBliE4m2GGqMsTZptVZziOpbOCjeQB6GTGPmEPVjchhhSvxyILnx2LI7vlG5wU74jds9uDQ0%2Fc9pBzz4%2BdRj5QHotJnSDQQ%2FJXHh&X-Amz-Signature=dde389884d90c751aa7f3a14d48aa0447b25db0199e4e93e1a93fdb7ba51d9da&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
