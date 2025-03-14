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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=08dfb6e09e87c8c01da6f13e1ad74136618a4ef23064f324d74b7008313c6abe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=0e4544b1551ef402632c00952d6e966cb7d8d7c13e8121a929781ac525f5aa87&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=cca8055bc6b8a6382d2a61b979f02c5b083c3b98667c6f24d5a64adfdb68201c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=3b2033f096dfafe091afe8692e03cfea675b230ef50ab1c6657ea7890abe3f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=44603da65ca2a233acb027f71fcd59d394db4e8cfb8b57f26462964eb5886746&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
