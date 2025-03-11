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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUBLGQT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOBPYO6d%2FaNf0cV9HqmcHoEnhTc3sVgR96FG%2BVuQenTQIhAL7QoKIRmdaBbnSLBCCKkamaEsRl1uXveKchmlhpIGD8KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMvPZ6acbUWvA7LAsq3AMWl5TqkdWkT2n%2Fdpc3vK8XwxBocrd%2BfiGv5TlDZJ46TogNMRgWGWf0WN5htw24KFvl4%2BPDUSjg%2B8PDStViZERBjCETSCryocDxePBXA0ciuTxHAqTnsSr27T0CYzCNhtuTboGwlceO28M5nKrl1%2FY%2Bu7A35eL9TX1AEiaI9yfiJ7i7kI0SDUJJn%2BSCDA4Y8rcB%2BSMq3lnBq9QmUAyYH4oMGcdv8wGXeCd3IFgutK6gRJY6Kb4aZnqCYsgmD58BDn8vvZLcrrMIXNFuPXQQInd9Mq81svI8UFdJD0AnjA0Qn7vRdMqRwEHHYavuSyOrSN4tSA%2BNUkxQRIpOn4%2FJaXqFgWKQZvZoOhi2g%2BlUrnAFa6BFLLF%2FaXIcMc7gm1QhqLPozMCHsiF9%2F1GOZHzyRdH9RaXT12Mm4riKzzXQeOzorB3cEpQkL1luwmREwV06B9Yq3WkXL%2Funuwybh9LxgFalsK7ZA%2FRlJuBx9AWK0FUjHI6JpOguCqZQyDB%2BuxB9HmmBR6vSDBY8S84eVA2YtgMj%2FvarUDLbDbkDQk%2FWy26MShWgb%2B%2Bi15YR4sxUgy20UPNpy2B%2FIjdZPtuf%2F3DCa23AVUXUCCoQIo0ZAy9ou193meTQy%2FChy7AhGiNo%2BjDfz76%2BBjqkAblmco2wsDWJp3%2BorEoBYRsB8fM2NhJlSmcoG5mfVswIqdJFmA2O2URoslDMZAfnKi5HNBS9fH9%2B01Ee6hCqeN2XLTYodVDVBWovn4xiQ0V0HYlie6vGv6wonQ4vaR27A%2FKxDQMJN9Gav1XxF1t%2BDA%2BaaN78mQ8qr%2FQphWESYsilqHxUmtzqf03USBBB9HUZzm%2Fjkv6mjZ5kD9RqK4zWQWgKehi1&X-Amz-Signature=b1625ed1a3c07e48d426d0f0c8bff22c3e6cd6e679ab8d3ae56bb37c01b07777&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUBLGQT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOBPYO6d%2FaNf0cV9HqmcHoEnhTc3sVgR96FG%2BVuQenTQIhAL7QoKIRmdaBbnSLBCCKkamaEsRl1uXveKchmlhpIGD8KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMvPZ6acbUWvA7LAsq3AMWl5TqkdWkT2n%2Fdpc3vK8XwxBocrd%2BfiGv5TlDZJ46TogNMRgWGWf0WN5htw24KFvl4%2BPDUSjg%2B8PDStViZERBjCETSCryocDxePBXA0ciuTxHAqTnsSr27T0CYzCNhtuTboGwlceO28M5nKrl1%2FY%2Bu7A35eL9TX1AEiaI9yfiJ7i7kI0SDUJJn%2BSCDA4Y8rcB%2BSMq3lnBq9QmUAyYH4oMGcdv8wGXeCd3IFgutK6gRJY6Kb4aZnqCYsgmD58BDn8vvZLcrrMIXNFuPXQQInd9Mq81svI8UFdJD0AnjA0Qn7vRdMqRwEHHYavuSyOrSN4tSA%2BNUkxQRIpOn4%2FJaXqFgWKQZvZoOhi2g%2BlUrnAFa6BFLLF%2FaXIcMc7gm1QhqLPozMCHsiF9%2F1GOZHzyRdH9RaXT12Mm4riKzzXQeOzorB3cEpQkL1luwmREwV06B9Yq3WkXL%2Funuwybh9LxgFalsK7ZA%2FRlJuBx9AWK0FUjHI6JpOguCqZQyDB%2BuxB9HmmBR6vSDBY8S84eVA2YtgMj%2FvarUDLbDbkDQk%2FWy26MShWgb%2B%2Bi15YR4sxUgy20UPNpy2B%2FIjdZPtuf%2F3DCa23AVUXUCCoQIo0ZAy9ou193meTQy%2FChy7AhGiNo%2BjDfz76%2BBjqkAblmco2wsDWJp3%2BorEoBYRsB8fM2NhJlSmcoG5mfVswIqdJFmA2O2URoslDMZAfnKi5HNBS9fH9%2B01Ee6hCqeN2XLTYodVDVBWovn4xiQ0V0HYlie6vGv6wonQ4vaR27A%2FKxDQMJN9Gav1XxF1t%2BDA%2BaaN78mQ8qr%2FQphWESYsilqHxUmtzqf03USBBB9HUZzm%2Fjkv6mjZ5kD9RqK4zWQWgKehi1&X-Amz-Signature=adfd7a58671f3f1ffae3bcb24cb95a7e9c795c3d6df091b9a96e180e7487ea0a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUBLGQT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOBPYO6d%2FaNf0cV9HqmcHoEnhTc3sVgR96FG%2BVuQenTQIhAL7QoKIRmdaBbnSLBCCKkamaEsRl1uXveKchmlhpIGD8KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMvPZ6acbUWvA7LAsq3AMWl5TqkdWkT2n%2Fdpc3vK8XwxBocrd%2BfiGv5TlDZJ46TogNMRgWGWf0WN5htw24KFvl4%2BPDUSjg%2B8PDStViZERBjCETSCryocDxePBXA0ciuTxHAqTnsSr27T0CYzCNhtuTboGwlceO28M5nKrl1%2FY%2Bu7A35eL9TX1AEiaI9yfiJ7i7kI0SDUJJn%2BSCDA4Y8rcB%2BSMq3lnBq9QmUAyYH4oMGcdv8wGXeCd3IFgutK6gRJY6Kb4aZnqCYsgmD58BDn8vvZLcrrMIXNFuPXQQInd9Mq81svI8UFdJD0AnjA0Qn7vRdMqRwEHHYavuSyOrSN4tSA%2BNUkxQRIpOn4%2FJaXqFgWKQZvZoOhi2g%2BlUrnAFa6BFLLF%2FaXIcMc7gm1QhqLPozMCHsiF9%2F1GOZHzyRdH9RaXT12Mm4riKzzXQeOzorB3cEpQkL1luwmREwV06B9Yq3WkXL%2Funuwybh9LxgFalsK7ZA%2FRlJuBx9AWK0FUjHI6JpOguCqZQyDB%2BuxB9HmmBR6vSDBY8S84eVA2YtgMj%2FvarUDLbDbkDQk%2FWy26MShWgb%2B%2Bi15YR4sxUgy20UPNpy2B%2FIjdZPtuf%2F3DCa23AVUXUCCoQIo0ZAy9ou193meTQy%2FChy7AhGiNo%2BjDfz76%2BBjqkAblmco2wsDWJp3%2BorEoBYRsB8fM2NhJlSmcoG5mfVswIqdJFmA2O2URoslDMZAfnKi5HNBS9fH9%2B01Ee6hCqeN2XLTYodVDVBWovn4xiQ0V0HYlie6vGv6wonQ4vaR27A%2FKxDQMJN9Gav1XxF1t%2BDA%2BaaN78mQ8qr%2FQphWESYsilqHxUmtzqf03USBBB9HUZzm%2Fjkv6mjZ5kD9RqK4zWQWgKehi1&X-Amz-Signature=c5fd089511b7f42b07cc8e6c977be0bd9f08cbe802f8ed13216459935f4708aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUBLGQT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOBPYO6d%2FaNf0cV9HqmcHoEnhTc3sVgR96FG%2BVuQenTQIhAL7QoKIRmdaBbnSLBCCKkamaEsRl1uXveKchmlhpIGD8KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMvPZ6acbUWvA7LAsq3AMWl5TqkdWkT2n%2Fdpc3vK8XwxBocrd%2BfiGv5TlDZJ46TogNMRgWGWf0WN5htw24KFvl4%2BPDUSjg%2B8PDStViZERBjCETSCryocDxePBXA0ciuTxHAqTnsSr27T0CYzCNhtuTboGwlceO28M5nKrl1%2FY%2Bu7A35eL9TX1AEiaI9yfiJ7i7kI0SDUJJn%2BSCDA4Y8rcB%2BSMq3lnBq9QmUAyYH4oMGcdv8wGXeCd3IFgutK6gRJY6Kb4aZnqCYsgmD58BDn8vvZLcrrMIXNFuPXQQInd9Mq81svI8UFdJD0AnjA0Qn7vRdMqRwEHHYavuSyOrSN4tSA%2BNUkxQRIpOn4%2FJaXqFgWKQZvZoOhi2g%2BlUrnAFa6BFLLF%2FaXIcMc7gm1QhqLPozMCHsiF9%2F1GOZHzyRdH9RaXT12Mm4riKzzXQeOzorB3cEpQkL1luwmREwV06B9Yq3WkXL%2Funuwybh9LxgFalsK7ZA%2FRlJuBx9AWK0FUjHI6JpOguCqZQyDB%2BuxB9HmmBR6vSDBY8S84eVA2YtgMj%2FvarUDLbDbkDQk%2FWy26MShWgb%2B%2Bi15YR4sxUgy20UPNpy2B%2FIjdZPtuf%2F3DCa23AVUXUCCoQIo0ZAy9ou193meTQy%2FChy7AhGiNo%2BjDfz76%2BBjqkAblmco2wsDWJp3%2BorEoBYRsB8fM2NhJlSmcoG5mfVswIqdJFmA2O2URoslDMZAfnKi5HNBS9fH9%2B01Ee6hCqeN2XLTYodVDVBWovn4xiQ0V0HYlie6vGv6wonQ4vaR27A%2FKxDQMJN9Gav1XxF1t%2BDA%2BaaN78mQ8qr%2FQphWESYsilqHxUmtzqf03USBBB9HUZzm%2Fjkv6mjZ5kD9RqK4zWQWgKehi1&X-Amz-Signature=2218434bd4cbcc897bdf6cc0561cce0654ba06e2b624c0acd4f0cc5e55d060ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUBLGQT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOBPYO6d%2FaNf0cV9HqmcHoEnhTc3sVgR96FG%2BVuQenTQIhAL7QoKIRmdaBbnSLBCCKkamaEsRl1uXveKchmlhpIGD8KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMvPZ6acbUWvA7LAsq3AMWl5TqkdWkT2n%2Fdpc3vK8XwxBocrd%2BfiGv5TlDZJ46TogNMRgWGWf0WN5htw24KFvl4%2BPDUSjg%2B8PDStViZERBjCETSCryocDxePBXA0ciuTxHAqTnsSr27T0CYzCNhtuTboGwlceO28M5nKrl1%2FY%2Bu7A35eL9TX1AEiaI9yfiJ7i7kI0SDUJJn%2BSCDA4Y8rcB%2BSMq3lnBq9QmUAyYH4oMGcdv8wGXeCd3IFgutK6gRJY6Kb4aZnqCYsgmD58BDn8vvZLcrrMIXNFuPXQQInd9Mq81svI8UFdJD0AnjA0Qn7vRdMqRwEHHYavuSyOrSN4tSA%2BNUkxQRIpOn4%2FJaXqFgWKQZvZoOhi2g%2BlUrnAFa6BFLLF%2FaXIcMc7gm1QhqLPozMCHsiF9%2F1GOZHzyRdH9RaXT12Mm4riKzzXQeOzorB3cEpQkL1luwmREwV06B9Yq3WkXL%2Funuwybh9LxgFalsK7ZA%2FRlJuBx9AWK0FUjHI6JpOguCqZQyDB%2BuxB9HmmBR6vSDBY8S84eVA2YtgMj%2FvarUDLbDbkDQk%2FWy26MShWgb%2B%2Bi15YR4sxUgy20UPNpy2B%2FIjdZPtuf%2F3DCa23AVUXUCCoQIo0ZAy9ou193meTQy%2FChy7AhGiNo%2BjDfz76%2BBjqkAblmco2wsDWJp3%2BorEoBYRsB8fM2NhJlSmcoG5mfVswIqdJFmA2O2URoslDMZAfnKi5HNBS9fH9%2B01Ee6hCqeN2XLTYodVDVBWovn4xiQ0V0HYlie6vGv6wonQ4vaR27A%2FKxDQMJN9Gav1XxF1t%2BDA%2BaaN78mQ8qr%2FQphWESYsilqHxUmtzqf03USBBB9HUZzm%2Fjkv6mjZ5kD9RqK4zWQWgKehi1&X-Amz-Signature=6150a1672d675face4112f14fb0d06d0fc600498a5e0d0f98075476e9a55097b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
