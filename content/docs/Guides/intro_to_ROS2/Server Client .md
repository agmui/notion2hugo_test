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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FXAFBZF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCALTBmvMdyHjE%2FnOmCdxtMTEpSvBKHq1gGeOoUmtdYKgIhALURpn2r%2BTUpcYrdldaOJR1rWQ4V%2FrbDq5mEDqR2AWTdKv8DCDYQABoMNjM3NDIzMTgzODA1Igx7XWl0ypGSKuRxq%2FYq3ANNcZ9uT%2BBtlUTK1yzUY9zjqulizXiQHHi3IMfsnIrhxpxefp4MUeW3%2Fv354Y88caHdSNLGGplJOJsSLPYsCYBhEte5iDRCd5QLBo%2F4fI2WXfswbBnuqL%2FTRiIAD1oGUxfEh7GFS1auq3K3L%2BxV3MWWv9Pbn56ZIVxevDA3oJZP788%2Fhzt6Es15b3ERPh2hJEi8TjVcq0%2BsggF5PVfvezYE50VsadZI9opNLOGfsP74h08E8JVao6YbLZjIcYQ0txZBIwBuQgZckCDVfgRxZZgNMR2%2FXuzlj3SVm68xxPTAZ%2B1TedL0WklTHYgGLwyhECySNXoH00B2kbJFzOmSUl1X5imyNGZbeepQFcftMFvnDlZrKY%2BliC8LAdjMq3GhK25Tv7eAJeRA0mkJNQaypeZmNjJ56gb5FSZ5I%2B7Fu1x%2B6W413zPjaZ5you9hJ8LdCITDht3ETh%2BHp%2B9dc1whGRO8TGDz2q1BHG4pvm2Ddbg%2BEdCrAiM3lVtLPe9kWZLxR1n10jwsnQHtvo2HJO3zZnNX1MNopztJN%2FCqeDqHvD4lKh0AIfbCAPj2o9%2B0tCRQcO9n9FHDQNkzJEmF7Gwf5eDghC5207c6Ni7MndkePE58MbPgJaJh5Ap15QJwKzC1tIrEBjqkAenCYHOOTEDOlJ9eVZbOv2k1MUNsYJBNc2OcIA0rpAzTSis2R%2BBihcQbUqxYxajNm9%2BDpj1UY45UcAejfYTScGZ4OVEot9O3QMQvkp64SqLB58T0haOnO5iZFvMMfdmsNiAkS2gqJJaVwSrpQn23VP%2BeLafDn1CFstdgvfHGpIh9FumUwHOwwYo9YH%2B4ON9Lgao8TD1EENpMJM%2FLvC7zN2%2FlEZNc&X-Amz-Signature=7e3346897a19061625d96048d7653761f197c1f2953e81ea5833f34b456ee497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FXAFBZF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCALTBmvMdyHjE%2FnOmCdxtMTEpSvBKHq1gGeOoUmtdYKgIhALURpn2r%2BTUpcYrdldaOJR1rWQ4V%2FrbDq5mEDqR2AWTdKv8DCDYQABoMNjM3NDIzMTgzODA1Igx7XWl0ypGSKuRxq%2FYq3ANNcZ9uT%2BBtlUTK1yzUY9zjqulizXiQHHi3IMfsnIrhxpxefp4MUeW3%2Fv354Y88caHdSNLGGplJOJsSLPYsCYBhEte5iDRCd5QLBo%2F4fI2WXfswbBnuqL%2FTRiIAD1oGUxfEh7GFS1auq3K3L%2BxV3MWWv9Pbn56ZIVxevDA3oJZP788%2Fhzt6Es15b3ERPh2hJEi8TjVcq0%2BsggF5PVfvezYE50VsadZI9opNLOGfsP74h08E8JVao6YbLZjIcYQ0txZBIwBuQgZckCDVfgRxZZgNMR2%2FXuzlj3SVm68xxPTAZ%2B1TedL0WklTHYgGLwyhECySNXoH00B2kbJFzOmSUl1X5imyNGZbeepQFcftMFvnDlZrKY%2BliC8LAdjMq3GhK25Tv7eAJeRA0mkJNQaypeZmNjJ56gb5FSZ5I%2B7Fu1x%2B6W413zPjaZ5you9hJ8LdCITDht3ETh%2BHp%2B9dc1whGRO8TGDz2q1BHG4pvm2Ddbg%2BEdCrAiM3lVtLPe9kWZLxR1n10jwsnQHtvo2HJO3zZnNX1MNopztJN%2FCqeDqHvD4lKh0AIfbCAPj2o9%2B0tCRQcO9n9FHDQNkzJEmF7Gwf5eDghC5207c6Ni7MndkePE58MbPgJaJh5Ap15QJwKzC1tIrEBjqkAenCYHOOTEDOlJ9eVZbOv2k1MUNsYJBNc2OcIA0rpAzTSis2R%2BBihcQbUqxYxajNm9%2BDpj1UY45UcAejfYTScGZ4OVEot9O3QMQvkp64SqLB58T0haOnO5iZFvMMfdmsNiAkS2gqJJaVwSrpQn23VP%2BeLafDn1CFstdgvfHGpIh9FumUwHOwwYo9YH%2B4ON9Lgao8TD1EENpMJM%2FLvC7zN2%2FlEZNc&X-Amz-Signature=3fbec019ed411c2ba4d03dfe12beab99a66e02b2c37e18ed7514a9a9c5724289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FXAFBZF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCALTBmvMdyHjE%2FnOmCdxtMTEpSvBKHq1gGeOoUmtdYKgIhALURpn2r%2BTUpcYrdldaOJR1rWQ4V%2FrbDq5mEDqR2AWTdKv8DCDYQABoMNjM3NDIzMTgzODA1Igx7XWl0ypGSKuRxq%2FYq3ANNcZ9uT%2BBtlUTK1yzUY9zjqulizXiQHHi3IMfsnIrhxpxefp4MUeW3%2Fv354Y88caHdSNLGGplJOJsSLPYsCYBhEte5iDRCd5QLBo%2F4fI2WXfswbBnuqL%2FTRiIAD1oGUxfEh7GFS1auq3K3L%2BxV3MWWv9Pbn56ZIVxevDA3oJZP788%2Fhzt6Es15b3ERPh2hJEi8TjVcq0%2BsggF5PVfvezYE50VsadZI9opNLOGfsP74h08E8JVao6YbLZjIcYQ0txZBIwBuQgZckCDVfgRxZZgNMR2%2FXuzlj3SVm68xxPTAZ%2B1TedL0WklTHYgGLwyhECySNXoH00B2kbJFzOmSUl1X5imyNGZbeepQFcftMFvnDlZrKY%2BliC8LAdjMq3GhK25Tv7eAJeRA0mkJNQaypeZmNjJ56gb5FSZ5I%2B7Fu1x%2B6W413zPjaZ5you9hJ8LdCITDht3ETh%2BHp%2B9dc1whGRO8TGDz2q1BHG4pvm2Ddbg%2BEdCrAiM3lVtLPe9kWZLxR1n10jwsnQHtvo2HJO3zZnNX1MNopztJN%2FCqeDqHvD4lKh0AIfbCAPj2o9%2B0tCRQcO9n9FHDQNkzJEmF7Gwf5eDghC5207c6Ni7MndkePE58MbPgJaJh5Ap15QJwKzC1tIrEBjqkAenCYHOOTEDOlJ9eVZbOv2k1MUNsYJBNc2OcIA0rpAzTSis2R%2BBihcQbUqxYxajNm9%2BDpj1UY45UcAejfYTScGZ4OVEot9O3QMQvkp64SqLB58T0haOnO5iZFvMMfdmsNiAkS2gqJJaVwSrpQn23VP%2BeLafDn1CFstdgvfHGpIh9FumUwHOwwYo9YH%2B4ON9Lgao8TD1EENpMJM%2FLvC7zN2%2FlEZNc&X-Amz-Signature=ea5dc75bf79101473edbb9ac504a3f4dc9a967fdc121795dd3ca183d066c6d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FXAFBZF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCALTBmvMdyHjE%2FnOmCdxtMTEpSvBKHq1gGeOoUmtdYKgIhALURpn2r%2BTUpcYrdldaOJR1rWQ4V%2FrbDq5mEDqR2AWTdKv8DCDYQABoMNjM3NDIzMTgzODA1Igx7XWl0ypGSKuRxq%2FYq3ANNcZ9uT%2BBtlUTK1yzUY9zjqulizXiQHHi3IMfsnIrhxpxefp4MUeW3%2Fv354Y88caHdSNLGGplJOJsSLPYsCYBhEte5iDRCd5QLBo%2F4fI2WXfswbBnuqL%2FTRiIAD1oGUxfEh7GFS1auq3K3L%2BxV3MWWv9Pbn56ZIVxevDA3oJZP788%2Fhzt6Es15b3ERPh2hJEi8TjVcq0%2BsggF5PVfvezYE50VsadZI9opNLOGfsP74h08E8JVao6YbLZjIcYQ0txZBIwBuQgZckCDVfgRxZZgNMR2%2FXuzlj3SVm68xxPTAZ%2B1TedL0WklTHYgGLwyhECySNXoH00B2kbJFzOmSUl1X5imyNGZbeepQFcftMFvnDlZrKY%2BliC8LAdjMq3GhK25Tv7eAJeRA0mkJNQaypeZmNjJ56gb5FSZ5I%2B7Fu1x%2B6W413zPjaZ5you9hJ8LdCITDht3ETh%2BHp%2B9dc1whGRO8TGDz2q1BHG4pvm2Ddbg%2BEdCrAiM3lVtLPe9kWZLxR1n10jwsnQHtvo2HJO3zZnNX1MNopztJN%2FCqeDqHvD4lKh0AIfbCAPj2o9%2B0tCRQcO9n9FHDQNkzJEmF7Gwf5eDghC5207c6Ni7MndkePE58MbPgJaJh5Ap15QJwKzC1tIrEBjqkAenCYHOOTEDOlJ9eVZbOv2k1MUNsYJBNc2OcIA0rpAzTSis2R%2BBihcQbUqxYxajNm9%2BDpj1UY45UcAejfYTScGZ4OVEot9O3QMQvkp64SqLB58T0haOnO5iZFvMMfdmsNiAkS2gqJJaVwSrpQn23VP%2BeLafDn1CFstdgvfHGpIh9FumUwHOwwYo9YH%2B4ON9Lgao8TD1EENpMJM%2FLvC7zN2%2FlEZNc&X-Amz-Signature=9514a4de20d223bb68ff57d4283fc3ca538c8b9ab4e444828a0eecb981d41e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FXAFBZF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCALTBmvMdyHjE%2FnOmCdxtMTEpSvBKHq1gGeOoUmtdYKgIhALURpn2r%2BTUpcYrdldaOJR1rWQ4V%2FrbDq5mEDqR2AWTdKv8DCDYQABoMNjM3NDIzMTgzODA1Igx7XWl0ypGSKuRxq%2FYq3ANNcZ9uT%2BBtlUTK1yzUY9zjqulizXiQHHi3IMfsnIrhxpxefp4MUeW3%2Fv354Y88caHdSNLGGplJOJsSLPYsCYBhEte5iDRCd5QLBo%2F4fI2WXfswbBnuqL%2FTRiIAD1oGUxfEh7GFS1auq3K3L%2BxV3MWWv9Pbn56ZIVxevDA3oJZP788%2Fhzt6Es15b3ERPh2hJEi8TjVcq0%2BsggF5PVfvezYE50VsadZI9opNLOGfsP74h08E8JVao6YbLZjIcYQ0txZBIwBuQgZckCDVfgRxZZgNMR2%2FXuzlj3SVm68xxPTAZ%2B1TedL0WklTHYgGLwyhECySNXoH00B2kbJFzOmSUl1X5imyNGZbeepQFcftMFvnDlZrKY%2BliC8LAdjMq3GhK25Tv7eAJeRA0mkJNQaypeZmNjJ56gb5FSZ5I%2B7Fu1x%2B6W413zPjaZ5you9hJ8LdCITDht3ETh%2BHp%2B9dc1whGRO8TGDz2q1BHG4pvm2Ddbg%2BEdCrAiM3lVtLPe9kWZLxR1n10jwsnQHtvo2HJO3zZnNX1MNopztJN%2FCqeDqHvD4lKh0AIfbCAPj2o9%2B0tCRQcO9n9FHDQNkzJEmF7Gwf5eDghC5207c6Ni7MndkePE58MbPgJaJh5Ap15QJwKzC1tIrEBjqkAenCYHOOTEDOlJ9eVZbOv2k1MUNsYJBNc2OcIA0rpAzTSis2R%2BBihcQbUqxYxajNm9%2BDpj1UY45UcAejfYTScGZ4OVEot9O3QMQvkp64SqLB58T0haOnO5iZFvMMfdmsNiAkS2gqJJaVwSrpQn23VP%2BeLafDn1CFstdgvfHGpIh9FumUwHOwwYo9YH%2B4ON9Lgao8TD1EENpMJM%2FLvC7zN2%2FlEZNc&X-Amz-Signature=8e015066feed9078bad8ccb25515520a26dc7b4acc41c65c4b4d2ef0f1f50df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
