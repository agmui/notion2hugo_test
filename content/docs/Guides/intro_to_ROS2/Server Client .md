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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXGQRIF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGiRRvfClnQDdR3lqDtGo1VtTohb6C6h%2FmafZcgJywTVAiAwyKxglR57X7Nl27XcmR%2FIehdxExrRjYPRslRxEMERsCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eXKxgTyP4ll2k%2BXKtwD74Q9cEDUz1g4LVh4eweTBnD%2FFINIOMHUD%2FWFqyioG7mh1KxOdI1WKb3mtV8%2BBGSvvC2eAbPQjTZClXYH8Ki5%2BAO17VTKo%2FHPgbTIsh1RwyvBraKFr83fI2tXsdUtGSNIkK9DH%2BgmRjekGQBdEdwjvzpEXjnOJruWzYTP66aY0MP0V%2BNcJ%2FeCEjeVDeu3RybmdZWa3Pu%2BRF80LOkZoy%2BvaMS5lCyAa9hAccLBO22Eyxd7o3THmJ%2BQoXDZ4h5ebZ6kU4UeNqu%2Futc10Shs6dkUF8nMFGe%2BXUA2HiXLI8xlVUYMejEynhNSizqG5BmdyHA5B4nvi1Sq03Qfo%2FijEpWE3kxhIZwVuJqE6RxISFv39utyniMwclcxoG%2Fa7PtRmZR%2Fqh%2BX9OyTs8ph7fuzziFHHKw1fCtYvd1AQihXKS%2BJUpC%2FP9rNktYSfB8fTgakZ3oFjn9TAwNznLxErp4LJNYAxLjHQHZg2FN%2B2nBFFDxpsfK3mtJOOCJ4g%2BTWyldlvzNh%2F9Lk6w06JAIds5CdR4tu4ZCPSNPVwZo7b2AMfmLUVQl85AOyaypqdVqp%2F43PXL38OIrCUD%2FDqqIbcLrwcLNpD5BXNRcJC8AieMKnckXbMyKjhiPK2I0c5x%2BeeXkwqpCKvgY6pgENOm9iAsJTxphlStYS0UU3Xt87DcfK1TQqQeLke46L8tcSQFX%2Fn1qpvk4w1sKycELp1cRcvd58Vr1E7mogCynRKZCnQinN9AQxBLetKxVX7m8SBNscwui%2BpYEZO2%2FkhOQ3Rld2%2Bk%2FDRczG8QOF9U9ovi9LD0p0IJ3Cjn4Xw5GPUKgd3G7tIWD2GBCuXpVMno8ew07YFgA0hS9napvxEfCV16IbIRup&X-Amz-Signature=b1a38af527d237c465dd0f163daeed1f1ccc0495c52655a5951a0f93e05456a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXGQRIF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGiRRvfClnQDdR3lqDtGo1VtTohb6C6h%2FmafZcgJywTVAiAwyKxglR57X7Nl27XcmR%2FIehdxExrRjYPRslRxEMERsCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eXKxgTyP4ll2k%2BXKtwD74Q9cEDUz1g4LVh4eweTBnD%2FFINIOMHUD%2FWFqyioG7mh1KxOdI1WKb3mtV8%2BBGSvvC2eAbPQjTZClXYH8Ki5%2BAO17VTKo%2FHPgbTIsh1RwyvBraKFr83fI2tXsdUtGSNIkK9DH%2BgmRjekGQBdEdwjvzpEXjnOJruWzYTP66aY0MP0V%2BNcJ%2FeCEjeVDeu3RybmdZWa3Pu%2BRF80LOkZoy%2BvaMS5lCyAa9hAccLBO22Eyxd7o3THmJ%2BQoXDZ4h5ebZ6kU4UeNqu%2Futc10Shs6dkUF8nMFGe%2BXUA2HiXLI8xlVUYMejEynhNSizqG5BmdyHA5B4nvi1Sq03Qfo%2FijEpWE3kxhIZwVuJqE6RxISFv39utyniMwclcxoG%2Fa7PtRmZR%2Fqh%2BX9OyTs8ph7fuzziFHHKw1fCtYvd1AQihXKS%2BJUpC%2FP9rNktYSfB8fTgakZ3oFjn9TAwNznLxErp4LJNYAxLjHQHZg2FN%2B2nBFFDxpsfK3mtJOOCJ4g%2BTWyldlvzNh%2F9Lk6w06JAIds5CdR4tu4ZCPSNPVwZo7b2AMfmLUVQl85AOyaypqdVqp%2F43PXL38OIrCUD%2FDqqIbcLrwcLNpD5BXNRcJC8AieMKnckXbMyKjhiPK2I0c5x%2BeeXkwqpCKvgY6pgENOm9iAsJTxphlStYS0UU3Xt87DcfK1TQqQeLke46L8tcSQFX%2Fn1qpvk4w1sKycELp1cRcvd58Vr1E7mogCynRKZCnQinN9AQxBLetKxVX7m8SBNscwui%2BpYEZO2%2FkhOQ3Rld2%2Bk%2FDRczG8QOF9U9ovi9LD0p0IJ3Cjn4Xw5GPUKgd3G7tIWD2GBCuXpVMno8ew07YFgA0hS9napvxEfCV16IbIRup&X-Amz-Signature=1db6c6b49bb5dbb26eeb6fa579756a04ea8e9ae52a8a81fbe6236629fe4ae346&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXGQRIF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGiRRvfClnQDdR3lqDtGo1VtTohb6C6h%2FmafZcgJywTVAiAwyKxglR57X7Nl27XcmR%2FIehdxExrRjYPRslRxEMERsCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eXKxgTyP4ll2k%2BXKtwD74Q9cEDUz1g4LVh4eweTBnD%2FFINIOMHUD%2FWFqyioG7mh1KxOdI1WKb3mtV8%2BBGSvvC2eAbPQjTZClXYH8Ki5%2BAO17VTKo%2FHPgbTIsh1RwyvBraKFr83fI2tXsdUtGSNIkK9DH%2BgmRjekGQBdEdwjvzpEXjnOJruWzYTP66aY0MP0V%2BNcJ%2FeCEjeVDeu3RybmdZWa3Pu%2BRF80LOkZoy%2BvaMS5lCyAa9hAccLBO22Eyxd7o3THmJ%2BQoXDZ4h5ebZ6kU4UeNqu%2Futc10Shs6dkUF8nMFGe%2BXUA2HiXLI8xlVUYMejEynhNSizqG5BmdyHA5B4nvi1Sq03Qfo%2FijEpWE3kxhIZwVuJqE6RxISFv39utyniMwclcxoG%2Fa7PtRmZR%2Fqh%2BX9OyTs8ph7fuzziFHHKw1fCtYvd1AQihXKS%2BJUpC%2FP9rNktYSfB8fTgakZ3oFjn9TAwNznLxErp4LJNYAxLjHQHZg2FN%2B2nBFFDxpsfK3mtJOOCJ4g%2BTWyldlvzNh%2F9Lk6w06JAIds5CdR4tu4ZCPSNPVwZo7b2AMfmLUVQl85AOyaypqdVqp%2F43PXL38OIrCUD%2FDqqIbcLrwcLNpD5BXNRcJC8AieMKnckXbMyKjhiPK2I0c5x%2BeeXkwqpCKvgY6pgENOm9iAsJTxphlStYS0UU3Xt87DcfK1TQqQeLke46L8tcSQFX%2Fn1qpvk4w1sKycELp1cRcvd58Vr1E7mogCynRKZCnQinN9AQxBLetKxVX7m8SBNscwui%2BpYEZO2%2FkhOQ3Rld2%2Bk%2FDRczG8QOF9U9ovi9LD0p0IJ3Cjn4Xw5GPUKgd3G7tIWD2GBCuXpVMno8ew07YFgA0hS9napvxEfCV16IbIRup&X-Amz-Signature=6b7c4f0208242c14092bd5ea65f6ee396d393eba1f8beef1b9b9f35591979e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXGQRIF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGiRRvfClnQDdR3lqDtGo1VtTohb6C6h%2FmafZcgJywTVAiAwyKxglR57X7Nl27XcmR%2FIehdxExrRjYPRslRxEMERsCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eXKxgTyP4ll2k%2BXKtwD74Q9cEDUz1g4LVh4eweTBnD%2FFINIOMHUD%2FWFqyioG7mh1KxOdI1WKb3mtV8%2BBGSvvC2eAbPQjTZClXYH8Ki5%2BAO17VTKo%2FHPgbTIsh1RwyvBraKFr83fI2tXsdUtGSNIkK9DH%2BgmRjekGQBdEdwjvzpEXjnOJruWzYTP66aY0MP0V%2BNcJ%2FeCEjeVDeu3RybmdZWa3Pu%2BRF80LOkZoy%2BvaMS5lCyAa9hAccLBO22Eyxd7o3THmJ%2BQoXDZ4h5ebZ6kU4UeNqu%2Futc10Shs6dkUF8nMFGe%2BXUA2HiXLI8xlVUYMejEynhNSizqG5BmdyHA5B4nvi1Sq03Qfo%2FijEpWE3kxhIZwVuJqE6RxISFv39utyniMwclcxoG%2Fa7PtRmZR%2Fqh%2BX9OyTs8ph7fuzziFHHKw1fCtYvd1AQihXKS%2BJUpC%2FP9rNktYSfB8fTgakZ3oFjn9TAwNznLxErp4LJNYAxLjHQHZg2FN%2B2nBFFDxpsfK3mtJOOCJ4g%2BTWyldlvzNh%2F9Lk6w06JAIds5CdR4tu4ZCPSNPVwZo7b2AMfmLUVQl85AOyaypqdVqp%2F43PXL38OIrCUD%2FDqqIbcLrwcLNpD5BXNRcJC8AieMKnckXbMyKjhiPK2I0c5x%2BeeXkwqpCKvgY6pgENOm9iAsJTxphlStYS0UU3Xt87DcfK1TQqQeLke46L8tcSQFX%2Fn1qpvk4w1sKycELp1cRcvd58Vr1E7mogCynRKZCnQinN9AQxBLetKxVX7m8SBNscwui%2BpYEZO2%2FkhOQ3Rld2%2Bk%2FDRczG8QOF9U9ovi9LD0p0IJ3Cjn4Xw5GPUKgd3G7tIWD2GBCuXpVMno8ew07YFgA0hS9napvxEfCV16IbIRup&X-Amz-Signature=661fccab4463be76523859a8406c95a7cd3c05c48e132f6ac14576c1f6985d23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXGQRIF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGiRRvfClnQDdR3lqDtGo1VtTohb6C6h%2FmafZcgJywTVAiAwyKxglR57X7Nl27XcmR%2FIehdxExrRjYPRslRxEMERsCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eXKxgTyP4ll2k%2BXKtwD74Q9cEDUz1g4LVh4eweTBnD%2FFINIOMHUD%2FWFqyioG7mh1KxOdI1WKb3mtV8%2BBGSvvC2eAbPQjTZClXYH8Ki5%2BAO17VTKo%2FHPgbTIsh1RwyvBraKFr83fI2tXsdUtGSNIkK9DH%2BgmRjekGQBdEdwjvzpEXjnOJruWzYTP66aY0MP0V%2BNcJ%2FeCEjeVDeu3RybmdZWa3Pu%2BRF80LOkZoy%2BvaMS5lCyAa9hAccLBO22Eyxd7o3THmJ%2BQoXDZ4h5ebZ6kU4UeNqu%2Futc10Shs6dkUF8nMFGe%2BXUA2HiXLI8xlVUYMejEynhNSizqG5BmdyHA5B4nvi1Sq03Qfo%2FijEpWE3kxhIZwVuJqE6RxISFv39utyniMwclcxoG%2Fa7PtRmZR%2Fqh%2BX9OyTs8ph7fuzziFHHKw1fCtYvd1AQihXKS%2BJUpC%2FP9rNktYSfB8fTgakZ3oFjn9TAwNznLxErp4LJNYAxLjHQHZg2FN%2B2nBFFDxpsfK3mtJOOCJ4g%2BTWyldlvzNh%2F9Lk6w06JAIds5CdR4tu4ZCPSNPVwZo7b2AMfmLUVQl85AOyaypqdVqp%2F43PXL38OIrCUD%2FDqqIbcLrwcLNpD5BXNRcJC8AieMKnckXbMyKjhiPK2I0c5x%2BeeXkwqpCKvgY6pgENOm9iAsJTxphlStYS0UU3Xt87DcfK1TQqQeLke46L8tcSQFX%2Fn1qpvk4w1sKycELp1cRcvd58Vr1E7mogCynRKZCnQinN9AQxBLetKxVX7m8SBNscwui%2BpYEZO2%2FkhOQ3Rld2%2Bk%2FDRczG8QOF9U9ovi9LD0p0IJ3Cjn4Xw5GPUKgd3G7tIWD2GBCuXpVMno8ew07YFgA0hS9napvxEfCV16IbIRup&X-Amz-Signature=e2be3abe0de26edf9f1296328c39810fa025d8e9f9dd873c8e61e25223f33578&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
