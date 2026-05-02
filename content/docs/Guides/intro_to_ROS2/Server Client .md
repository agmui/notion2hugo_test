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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAIKPGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPnAqMv5g5rHnYWVryDA9ayk2Ggq4Tc3d9Z9rQ2GfC3AIhALaAcNzPRZoOC%2FHyVGKgp4PCt4uKmc1t8jjz3yjG0dSEKv8DCDQQABoMNjM3NDIzMTgzODA1Igxn41PIDp0POPLDVswq3APIn5RSGzLPNq%2Br6tDhFV01tdyC%2BoyNOI79gWAKirPVwscorFMTp5zc%2FCWeo7uwddglBEExs7cHdLNSGdIVqkJSuFhFak4Km5qs3VGjQoZtciNcbn8f3GKHd5yEIbNuXPWNwE63Hiy75r6Vls7csOH9wbihp9myU68iVIArP8kyCTCPc9MT5RwAV1UtnWgp2Q9AuOozGeix8pVJBUNYBV3Vr3g8lTKHO7wn4sxxkyFzG8R9Pks%2BKMbgLBWJLnwgHKykvYV35pDCYL49WyOcVkBGBgk2jhJIYHoC1flHtBc7%2BZa53pLdOGpQUlZTUqYXHV%2FhlWiUVGOsrp7xsXLt9nmAit4WDvqxHin49Fw4R7KeDhMozzEOyIeC1EJOWKMlt4CWtpYJ9XyyYjjsvxZ8TDvL1nKQR4Is4%2Bv%2Bh%2FzUda1uAVwT1B5VYNKScSoUJU3nwam9d6YuSK3ScGKs3JWBCBvF%2FjkZ9wpR1fZle8EX7uj1BktGaLIWARq9iuIbRRNpKrBDmMHSYWKJvrjG%2BKQOvk0K%2FdY4YUWLba0RobUw8F7ur9dfcbVzK730NilOlyEHxIv%2F3Zu30ULSHo3Lirsd5T29zDIGsqHF1r9wydsR34IJeahl%2Fs9nQ01xtx5sLTDdydXPBjqkAcT%2Bjn4ma2MnCIGnhNsRMXUlf0qQtGWh0CiVBnDdom5%2BQ4eXosLdszRO4CKqMGRQdW5vUBrVqsOEO4LPcl%2Fa5uO7raHKZtg7CYd0OEqfEo9qWMt7EfL%2BeSNP9dcT1GbzHJN3ub%2FQ5qoP7LbPmN2L131QSv1ES4anJsB3ITwlV8XxGKAzEXUeVPBVCVh9v5eb2%2FHseGAx1hndeOVdCzC%2FpTqVdJU%2B&X-Amz-Signature=a0110dc6b2b90ee16eb183d53a93e475089d85ca32522b6289a12135b5bbd446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAIKPGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPnAqMv5g5rHnYWVryDA9ayk2Ggq4Tc3d9Z9rQ2GfC3AIhALaAcNzPRZoOC%2FHyVGKgp4PCt4uKmc1t8jjz3yjG0dSEKv8DCDQQABoMNjM3NDIzMTgzODA1Igxn41PIDp0POPLDVswq3APIn5RSGzLPNq%2Br6tDhFV01tdyC%2BoyNOI79gWAKirPVwscorFMTp5zc%2FCWeo7uwddglBEExs7cHdLNSGdIVqkJSuFhFak4Km5qs3VGjQoZtciNcbn8f3GKHd5yEIbNuXPWNwE63Hiy75r6Vls7csOH9wbihp9myU68iVIArP8kyCTCPc9MT5RwAV1UtnWgp2Q9AuOozGeix8pVJBUNYBV3Vr3g8lTKHO7wn4sxxkyFzG8R9Pks%2BKMbgLBWJLnwgHKykvYV35pDCYL49WyOcVkBGBgk2jhJIYHoC1flHtBc7%2BZa53pLdOGpQUlZTUqYXHV%2FhlWiUVGOsrp7xsXLt9nmAit4WDvqxHin49Fw4R7KeDhMozzEOyIeC1EJOWKMlt4CWtpYJ9XyyYjjsvxZ8TDvL1nKQR4Is4%2Bv%2Bh%2FzUda1uAVwT1B5VYNKScSoUJU3nwam9d6YuSK3ScGKs3JWBCBvF%2FjkZ9wpR1fZle8EX7uj1BktGaLIWARq9iuIbRRNpKrBDmMHSYWKJvrjG%2BKQOvk0K%2FdY4YUWLba0RobUw8F7ur9dfcbVzK730NilOlyEHxIv%2F3Zu30ULSHo3Lirsd5T29zDIGsqHF1r9wydsR34IJeahl%2Fs9nQ01xtx5sLTDdydXPBjqkAcT%2Bjn4ma2MnCIGnhNsRMXUlf0qQtGWh0CiVBnDdom5%2BQ4eXosLdszRO4CKqMGRQdW5vUBrVqsOEO4LPcl%2Fa5uO7raHKZtg7CYd0OEqfEo9qWMt7EfL%2BeSNP9dcT1GbzHJN3ub%2FQ5qoP7LbPmN2L131QSv1ES4anJsB3ITwlV8XxGKAzEXUeVPBVCVh9v5eb2%2FHseGAx1hndeOVdCzC%2FpTqVdJU%2B&X-Amz-Signature=6d6832f17ab98951f317bd5155bdf80d6275951926a02df3d8b0481341126998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAIKPGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPnAqMv5g5rHnYWVryDA9ayk2Ggq4Tc3d9Z9rQ2GfC3AIhALaAcNzPRZoOC%2FHyVGKgp4PCt4uKmc1t8jjz3yjG0dSEKv8DCDQQABoMNjM3NDIzMTgzODA1Igxn41PIDp0POPLDVswq3APIn5RSGzLPNq%2Br6tDhFV01tdyC%2BoyNOI79gWAKirPVwscorFMTp5zc%2FCWeo7uwddglBEExs7cHdLNSGdIVqkJSuFhFak4Km5qs3VGjQoZtciNcbn8f3GKHd5yEIbNuXPWNwE63Hiy75r6Vls7csOH9wbihp9myU68iVIArP8kyCTCPc9MT5RwAV1UtnWgp2Q9AuOozGeix8pVJBUNYBV3Vr3g8lTKHO7wn4sxxkyFzG8R9Pks%2BKMbgLBWJLnwgHKykvYV35pDCYL49WyOcVkBGBgk2jhJIYHoC1flHtBc7%2BZa53pLdOGpQUlZTUqYXHV%2FhlWiUVGOsrp7xsXLt9nmAit4WDvqxHin49Fw4R7KeDhMozzEOyIeC1EJOWKMlt4CWtpYJ9XyyYjjsvxZ8TDvL1nKQR4Is4%2Bv%2Bh%2FzUda1uAVwT1B5VYNKScSoUJU3nwam9d6YuSK3ScGKs3JWBCBvF%2FjkZ9wpR1fZle8EX7uj1BktGaLIWARq9iuIbRRNpKrBDmMHSYWKJvrjG%2BKQOvk0K%2FdY4YUWLba0RobUw8F7ur9dfcbVzK730NilOlyEHxIv%2F3Zu30ULSHo3Lirsd5T29zDIGsqHF1r9wydsR34IJeahl%2Fs9nQ01xtx5sLTDdydXPBjqkAcT%2Bjn4ma2MnCIGnhNsRMXUlf0qQtGWh0CiVBnDdom5%2BQ4eXosLdszRO4CKqMGRQdW5vUBrVqsOEO4LPcl%2Fa5uO7raHKZtg7CYd0OEqfEo9qWMt7EfL%2BeSNP9dcT1GbzHJN3ub%2FQ5qoP7LbPmN2L131QSv1ES4anJsB3ITwlV8XxGKAzEXUeVPBVCVh9v5eb2%2FHseGAx1hndeOVdCzC%2FpTqVdJU%2B&X-Amz-Signature=5f98310165656de4cb4cec26ec72fc867f17c193ec0b0dbc2fbbb41072c5fbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAIKPGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPnAqMv5g5rHnYWVryDA9ayk2Ggq4Tc3d9Z9rQ2GfC3AIhALaAcNzPRZoOC%2FHyVGKgp4PCt4uKmc1t8jjz3yjG0dSEKv8DCDQQABoMNjM3NDIzMTgzODA1Igxn41PIDp0POPLDVswq3APIn5RSGzLPNq%2Br6tDhFV01tdyC%2BoyNOI79gWAKirPVwscorFMTp5zc%2FCWeo7uwddglBEExs7cHdLNSGdIVqkJSuFhFak4Km5qs3VGjQoZtciNcbn8f3GKHd5yEIbNuXPWNwE63Hiy75r6Vls7csOH9wbihp9myU68iVIArP8kyCTCPc9MT5RwAV1UtnWgp2Q9AuOozGeix8pVJBUNYBV3Vr3g8lTKHO7wn4sxxkyFzG8R9Pks%2BKMbgLBWJLnwgHKykvYV35pDCYL49WyOcVkBGBgk2jhJIYHoC1flHtBc7%2BZa53pLdOGpQUlZTUqYXHV%2FhlWiUVGOsrp7xsXLt9nmAit4WDvqxHin49Fw4R7KeDhMozzEOyIeC1EJOWKMlt4CWtpYJ9XyyYjjsvxZ8TDvL1nKQR4Is4%2Bv%2Bh%2FzUda1uAVwT1B5VYNKScSoUJU3nwam9d6YuSK3ScGKs3JWBCBvF%2FjkZ9wpR1fZle8EX7uj1BktGaLIWARq9iuIbRRNpKrBDmMHSYWKJvrjG%2BKQOvk0K%2FdY4YUWLba0RobUw8F7ur9dfcbVzK730NilOlyEHxIv%2F3Zu30ULSHo3Lirsd5T29zDIGsqHF1r9wydsR34IJeahl%2Fs9nQ01xtx5sLTDdydXPBjqkAcT%2Bjn4ma2MnCIGnhNsRMXUlf0qQtGWh0CiVBnDdom5%2BQ4eXosLdszRO4CKqMGRQdW5vUBrVqsOEO4LPcl%2Fa5uO7raHKZtg7CYd0OEqfEo9qWMt7EfL%2BeSNP9dcT1GbzHJN3ub%2FQ5qoP7LbPmN2L131QSv1ES4anJsB3ITwlV8XxGKAzEXUeVPBVCVh9v5eb2%2FHseGAx1hndeOVdCzC%2FpTqVdJU%2B&X-Amz-Signature=7bb66d2ab0b7758525083c34e4b0c1486da499e6ded1ba54583835ebfb27b7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAIKPGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPnAqMv5g5rHnYWVryDA9ayk2Ggq4Tc3d9Z9rQ2GfC3AIhALaAcNzPRZoOC%2FHyVGKgp4PCt4uKmc1t8jjz3yjG0dSEKv8DCDQQABoMNjM3NDIzMTgzODA1Igxn41PIDp0POPLDVswq3APIn5RSGzLPNq%2Br6tDhFV01tdyC%2BoyNOI79gWAKirPVwscorFMTp5zc%2FCWeo7uwddglBEExs7cHdLNSGdIVqkJSuFhFak4Km5qs3VGjQoZtciNcbn8f3GKHd5yEIbNuXPWNwE63Hiy75r6Vls7csOH9wbihp9myU68iVIArP8kyCTCPc9MT5RwAV1UtnWgp2Q9AuOozGeix8pVJBUNYBV3Vr3g8lTKHO7wn4sxxkyFzG8R9Pks%2BKMbgLBWJLnwgHKykvYV35pDCYL49WyOcVkBGBgk2jhJIYHoC1flHtBc7%2BZa53pLdOGpQUlZTUqYXHV%2FhlWiUVGOsrp7xsXLt9nmAit4WDvqxHin49Fw4R7KeDhMozzEOyIeC1EJOWKMlt4CWtpYJ9XyyYjjsvxZ8TDvL1nKQR4Is4%2Bv%2Bh%2FzUda1uAVwT1B5VYNKScSoUJU3nwam9d6YuSK3ScGKs3JWBCBvF%2FjkZ9wpR1fZle8EX7uj1BktGaLIWARq9iuIbRRNpKrBDmMHSYWKJvrjG%2BKQOvk0K%2FdY4YUWLba0RobUw8F7ur9dfcbVzK730NilOlyEHxIv%2F3Zu30ULSHo3Lirsd5T29zDIGsqHF1r9wydsR34IJeahl%2Fs9nQ01xtx5sLTDdydXPBjqkAcT%2Bjn4ma2MnCIGnhNsRMXUlf0qQtGWh0CiVBnDdom5%2BQ4eXosLdszRO4CKqMGRQdW5vUBrVqsOEO4LPcl%2Fa5uO7raHKZtg7CYd0OEqfEo9qWMt7EfL%2BeSNP9dcT1GbzHJN3ub%2FQ5qoP7LbPmN2L131QSv1ES4anJsB3ITwlV8XxGKAzEXUeVPBVCVh9v5eb2%2FHseGAx1hndeOVdCzC%2FpTqVdJU%2B&X-Amz-Signature=b3bb261746f3765386e63b6ff913347c3280f9bc47037901bb4ac4ee6447c86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
