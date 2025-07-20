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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UTYVIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCsUdUOBBi%2BWNWfBRjMIJiAvmFqQwtQR9pQVn6rmVTDQIhAJvhnaF3EtOqCJ0Q7S9O6XrS7Cqymn229gYOet7XTzG6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fql1xiQcqbC3GhLoq3APZfRTzwoJJgcxP2%2BOe2Tlf%2FAS%2FFutda1U0L6BV9XYlFX43193gPETYeOXpduqOtdGffdagM4arHgHRdMTchwP3y%2BSIu9JwCg%2B4MEXginp4sxCau0NRaJeW8LtQuNzb38HOTY2ahA7yuQ%2BeN8WYBG5wkH%2Bal2hO4LWmyCI2pJN3%2FW99nQI3Fej4wkU8S41%2BdKHbxksmIVBchV5EJ4gYAks1S6m4aHrXWSYgCcZvid7VhEXP2ql00jWg2kmsL9JbUkaECTqA3RDkHmhOm3LBieuv6o%2FYtelOSjmIUGL4I78PjPankE03kPOGfAuuVaeMNkOAJ4256Sklswn1Q6Yxw2JbycHtQKSsESBTpg2mpBjUdEaLcW9i85QhboFgsyuvodW7IDeXh6FIbCwoTsbGrntjzEMDBd0wrXGTGXQtgk5U%2FPGiPNBqfeLkBJwsQmgAMB1Dlfmqd8eGSHWBeLk8loBMrds%2B4jlHWKtpdtkOlS9xBknYu6jo11ei6C8vIBa78EQ9nMtPlgDGxbOzkDfjj972MxHi%2Fvtvl4G5xcf01jg2CkLrBVgTXzF5fHPmcuI%2Bp3PUBgBK162ySz3e7YTH2n6M8yiC8dznUgMOuOokrCKYAtnhr9G%2FfLs6pW3d3jDp4fPDBjqkAatw2q1pd5exYDP8UJIod301MwMPVrafgQa22D0LsdITvieOeSSV1%2FYG0rmV3%2BzGJbmN84SAb%2FlfV05lsjkJmso9KctSpOz28g%2FkD%2BS4FHiXb3iEDMDJHJiI%2FgIf7%2FUNG9IT%2F8Ziy6vbJoiLOFfkL33kiYzSS%2BAr7EI2zBKWMPy1uDVWS4aJ3N8kZVD8P5QOtKEd%2FhkyREHf3c%2FaVADztXhm%2BpRf&X-Amz-Signature=9a1aa5f0bebfa2a9df04f49978af15f6f7be467aa699d2fae683370c7e38c5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UTYVIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCsUdUOBBi%2BWNWfBRjMIJiAvmFqQwtQR9pQVn6rmVTDQIhAJvhnaF3EtOqCJ0Q7S9O6XrS7Cqymn229gYOet7XTzG6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fql1xiQcqbC3GhLoq3APZfRTzwoJJgcxP2%2BOe2Tlf%2FAS%2FFutda1U0L6BV9XYlFX43193gPETYeOXpduqOtdGffdagM4arHgHRdMTchwP3y%2BSIu9JwCg%2B4MEXginp4sxCau0NRaJeW8LtQuNzb38HOTY2ahA7yuQ%2BeN8WYBG5wkH%2Bal2hO4LWmyCI2pJN3%2FW99nQI3Fej4wkU8S41%2BdKHbxksmIVBchV5EJ4gYAks1S6m4aHrXWSYgCcZvid7VhEXP2ql00jWg2kmsL9JbUkaECTqA3RDkHmhOm3LBieuv6o%2FYtelOSjmIUGL4I78PjPankE03kPOGfAuuVaeMNkOAJ4256Sklswn1Q6Yxw2JbycHtQKSsESBTpg2mpBjUdEaLcW9i85QhboFgsyuvodW7IDeXh6FIbCwoTsbGrntjzEMDBd0wrXGTGXQtgk5U%2FPGiPNBqfeLkBJwsQmgAMB1Dlfmqd8eGSHWBeLk8loBMrds%2B4jlHWKtpdtkOlS9xBknYu6jo11ei6C8vIBa78EQ9nMtPlgDGxbOzkDfjj972MxHi%2Fvtvl4G5xcf01jg2CkLrBVgTXzF5fHPmcuI%2Bp3PUBgBK162ySz3e7YTH2n6M8yiC8dznUgMOuOokrCKYAtnhr9G%2FfLs6pW3d3jDp4fPDBjqkAatw2q1pd5exYDP8UJIod301MwMPVrafgQa22D0LsdITvieOeSSV1%2FYG0rmV3%2BzGJbmN84SAb%2FlfV05lsjkJmso9KctSpOz28g%2FkD%2BS4FHiXb3iEDMDJHJiI%2FgIf7%2FUNG9IT%2F8Ziy6vbJoiLOFfkL33kiYzSS%2BAr7EI2zBKWMPy1uDVWS4aJ3N8kZVD8P5QOtKEd%2FhkyREHf3c%2FaVADztXhm%2BpRf&X-Amz-Signature=f12474fa749026d0f60d2d2099fbc22f7f382b09074f57b3648168af87293b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UTYVIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCsUdUOBBi%2BWNWfBRjMIJiAvmFqQwtQR9pQVn6rmVTDQIhAJvhnaF3EtOqCJ0Q7S9O6XrS7Cqymn229gYOet7XTzG6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fql1xiQcqbC3GhLoq3APZfRTzwoJJgcxP2%2BOe2Tlf%2FAS%2FFutda1U0L6BV9XYlFX43193gPETYeOXpduqOtdGffdagM4arHgHRdMTchwP3y%2BSIu9JwCg%2B4MEXginp4sxCau0NRaJeW8LtQuNzb38HOTY2ahA7yuQ%2BeN8WYBG5wkH%2Bal2hO4LWmyCI2pJN3%2FW99nQI3Fej4wkU8S41%2BdKHbxksmIVBchV5EJ4gYAks1S6m4aHrXWSYgCcZvid7VhEXP2ql00jWg2kmsL9JbUkaECTqA3RDkHmhOm3LBieuv6o%2FYtelOSjmIUGL4I78PjPankE03kPOGfAuuVaeMNkOAJ4256Sklswn1Q6Yxw2JbycHtQKSsESBTpg2mpBjUdEaLcW9i85QhboFgsyuvodW7IDeXh6FIbCwoTsbGrntjzEMDBd0wrXGTGXQtgk5U%2FPGiPNBqfeLkBJwsQmgAMB1Dlfmqd8eGSHWBeLk8loBMrds%2B4jlHWKtpdtkOlS9xBknYu6jo11ei6C8vIBa78EQ9nMtPlgDGxbOzkDfjj972MxHi%2Fvtvl4G5xcf01jg2CkLrBVgTXzF5fHPmcuI%2Bp3PUBgBK162ySz3e7YTH2n6M8yiC8dznUgMOuOokrCKYAtnhr9G%2FfLs6pW3d3jDp4fPDBjqkAatw2q1pd5exYDP8UJIod301MwMPVrafgQa22D0LsdITvieOeSSV1%2FYG0rmV3%2BzGJbmN84SAb%2FlfV05lsjkJmso9KctSpOz28g%2FkD%2BS4FHiXb3iEDMDJHJiI%2FgIf7%2FUNG9IT%2F8Ziy6vbJoiLOFfkL33kiYzSS%2BAr7EI2zBKWMPy1uDVWS4aJ3N8kZVD8P5QOtKEd%2FhkyREHf3c%2FaVADztXhm%2BpRf&X-Amz-Signature=849b30c17c690a162588466ac0cfa99591829ea519ddf1706b0153169d5f8ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UTYVIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCsUdUOBBi%2BWNWfBRjMIJiAvmFqQwtQR9pQVn6rmVTDQIhAJvhnaF3EtOqCJ0Q7S9O6XrS7Cqymn229gYOet7XTzG6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fql1xiQcqbC3GhLoq3APZfRTzwoJJgcxP2%2BOe2Tlf%2FAS%2FFutda1U0L6BV9XYlFX43193gPETYeOXpduqOtdGffdagM4arHgHRdMTchwP3y%2BSIu9JwCg%2B4MEXginp4sxCau0NRaJeW8LtQuNzb38HOTY2ahA7yuQ%2BeN8WYBG5wkH%2Bal2hO4LWmyCI2pJN3%2FW99nQI3Fej4wkU8S41%2BdKHbxksmIVBchV5EJ4gYAks1S6m4aHrXWSYgCcZvid7VhEXP2ql00jWg2kmsL9JbUkaECTqA3RDkHmhOm3LBieuv6o%2FYtelOSjmIUGL4I78PjPankE03kPOGfAuuVaeMNkOAJ4256Sklswn1Q6Yxw2JbycHtQKSsESBTpg2mpBjUdEaLcW9i85QhboFgsyuvodW7IDeXh6FIbCwoTsbGrntjzEMDBd0wrXGTGXQtgk5U%2FPGiPNBqfeLkBJwsQmgAMB1Dlfmqd8eGSHWBeLk8loBMrds%2B4jlHWKtpdtkOlS9xBknYu6jo11ei6C8vIBa78EQ9nMtPlgDGxbOzkDfjj972MxHi%2Fvtvl4G5xcf01jg2CkLrBVgTXzF5fHPmcuI%2Bp3PUBgBK162ySz3e7YTH2n6M8yiC8dznUgMOuOokrCKYAtnhr9G%2FfLs6pW3d3jDp4fPDBjqkAatw2q1pd5exYDP8UJIod301MwMPVrafgQa22D0LsdITvieOeSSV1%2FYG0rmV3%2BzGJbmN84SAb%2FlfV05lsjkJmso9KctSpOz28g%2FkD%2BS4FHiXb3iEDMDJHJiI%2FgIf7%2FUNG9IT%2F8Ziy6vbJoiLOFfkL33kiYzSS%2BAr7EI2zBKWMPy1uDVWS4aJ3N8kZVD8P5QOtKEd%2FhkyREHf3c%2FaVADztXhm%2BpRf&X-Amz-Signature=a77c0f5b2b6b21cc0eb378c1ee0d7cbee26285a240affb5b1cea69e84339a2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UTYVIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCsUdUOBBi%2BWNWfBRjMIJiAvmFqQwtQR9pQVn6rmVTDQIhAJvhnaF3EtOqCJ0Q7S9O6XrS7Cqymn229gYOet7XTzG6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fql1xiQcqbC3GhLoq3APZfRTzwoJJgcxP2%2BOe2Tlf%2FAS%2FFutda1U0L6BV9XYlFX43193gPETYeOXpduqOtdGffdagM4arHgHRdMTchwP3y%2BSIu9JwCg%2B4MEXginp4sxCau0NRaJeW8LtQuNzb38HOTY2ahA7yuQ%2BeN8WYBG5wkH%2Bal2hO4LWmyCI2pJN3%2FW99nQI3Fej4wkU8S41%2BdKHbxksmIVBchV5EJ4gYAks1S6m4aHrXWSYgCcZvid7VhEXP2ql00jWg2kmsL9JbUkaECTqA3RDkHmhOm3LBieuv6o%2FYtelOSjmIUGL4I78PjPankE03kPOGfAuuVaeMNkOAJ4256Sklswn1Q6Yxw2JbycHtQKSsESBTpg2mpBjUdEaLcW9i85QhboFgsyuvodW7IDeXh6FIbCwoTsbGrntjzEMDBd0wrXGTGXQtgk5U%2FPGiPNBqfeLkBJwsQmgAMB1Dlfmqd8eGSHWBeLk8loBMrds%2B4jlHWKtpdtkOlS9xBknYu6jo11ei6C8vIBa78EQ9nMtPlgDGxbOzkDfjj972MxHi%2Fvtvl4G5xcf01jg2CkLrBVgTXzF5fHPmcuI%2Bp3PUBgBK162ySz3e7YTH2n6M8yiC8dznUgMOuOokrCKYAtnhr9G%2FfLs6pW3d3jDp4fPDBjqkAatw2q1pd5exYDP8UJIod301MwMPVrafgQa22D0LsdITvieOeSSV1%2FYG0rmV3%2BzGJbmN84SAb%2FlfV05lsjkJmso9KctSpOz28g%2FkD%2BS4FHiXb3iEDMDJHJiI%2FgIf7%2FUNG9IT%2F8Ziy6vbJoiLOFfkL33kiYzSS%2BAr7EI2zBKWMPy1uDVWS4aJ3N8kZVD8P5QOtKEd%2FhkyREHf3c%2FaVADztXhm%2BpRf&X-Amz-Signature=c2c3a8bd1cb70958fb62142e47747c5646fa09df2bedf7f1705c166e700ad613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
