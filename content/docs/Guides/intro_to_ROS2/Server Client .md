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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5RIZAS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWnRfuCts2fsDP1ZusZFvWZxttiLggf%2BB69JOjDBm1OAiEAv%2FJxlZUPuBF2kZeFy04mV7ZB4cW4EbLGtpz81MXDvd0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMxnS9hLecwUv0ZgMCrcA2KtNEkjAV8vO0iZmXwUqhitLwDc%2BI7rFrxpah%2BLVH1G1u4r4ZCUp3UQCtRqNL47dfu6a5iLXsiF5T%2BZXdpzSvuWkEFYp6EikorVw4pK0przaOeui0XAi2aKKUA3Z8QM%2BEJ3LNdwoG9dR1cAiFOOpMncdD3RAF3J%2BcVi5kZqsHxPxQ%2FjiQ1KSZ5Wy9WVnENrfSGUABSsejKUx38TOs5QU9%2Bn1bxcm0ypWF1npm3HvjcCurTlvsvQMaX5Uz7bkZGtcb0Zi2TdMnvGY4qPx7gPOBpLqoRjJKtFCpYtJc2F8Z18S3AURIH0xss%2Fjrn%2BerMbXK%2BuXZ3vSfPbHO3OUdUr1wlzVf2RzMcOe6PCLT9ngZZsn7PUYMh5vtXZrXTGSQ7z0WJI%2FOK9ZP3D8CCX8i31NbsuiWCSNBycYgdUz8%2FGA0vFEnp9%2FOrBSkPgL6yQeGsSFiqeIuENy9MY1edo2%2BSEXzAXmk656v7hxtzwkOTUhWzYry5gwu4aIO7xUIysQOiU8YXA3oLbm%2BpWJOceQUn7Pwu6lNbTgwQnvSxfsjvv0eOKJZvaAVA0LFooQ1Tvq3FwHOyRS5VylaGiBKYxPAvMgZs7tf6oKwA7s6cduQlzVCov6Bgs01qmp0wGzMgdMOPv1b4GOqUBgDu5SoBHRm%2FurL3MbHzt4lZqh7blVU6FppxknVfkF5Uj3CMKdNUwB%2B97mUl%2FdbSBiRywrfARwrN1vwaVIeJYvwyfD5cVxEpPDr26U%2BQayxGmgk8zTCmkmWj1P5p3hjJ61YRmcftLTcpL6hdkTGOMZrdX9i43uWboIYmOqMXYW9D%2FonfoUBRfPe59Wj9BpK0206PJWFmkYFmMLwkAt5aXAQthP%2BEv&X-Amz-Signature=8678c4d5d98703b3956bb3d61b2ec5218d39a0a2f6daac9676630862bb6e26f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5RIZAS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWnRfuCts2fsDP1ZusZFvWZxttiLggf%2BB69JOjDBm1OAiEAv%2FJxlZUPuBF2kZeFy04mV7ZB4cW4EbLGtpz81MXDvd0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMxnS9hLecwUv0ZgMCrcA2KtNEkjAV8vO0iZmXwUqhitLwDc%2BI7rFrxpah%2BLVH1G1u4r4ZCUp3UQCtRqNL47dfu6a5iLXsiF5T%2BZXdpzSvuWkEFYp6EikorVw4pK0przaOeui0XAi2aKKUA3Z8QM%2BEJ3LNdwoG9dR1cAiFOOpMncdD3RAF3J%2BcVi5kZqsHxPxQ%2FjiQ1KSZ5Wy9WVnENrfSGUABSsejKUx38TOs5QU9%2Bn1bxcm0ypWF1npm3HvjcCurTlvsvQMaX5Uz7bkZGtcb0Zi2TdMnvGY4qPx7gPOBpLqoRjJKtFCpYtJc2F8Z18S3AURIH0xss%2Fjrn%2BerMbXK%2BuXZ3vSfPbHO3OUdUr1wlzVf2RzMcOe6PCLT9ngZZsn7PUYMh5vtXZrXTGSQ7z0WJI%2FOK9ZP3D8CCX8i31NbsuiWCSNBycYgdUz8%2FGA0vFEnp9%2FOrBSkPgL6yQeGsSFiqeIuENy9MY1edo2%2BSEXzAXmk656v7hxtzwkOTUhWzYry5gwu4aIO7xUIysQOiU8YXA3oLbm%2BpWJOceQUn7Pwu6lNbTgwQnvSxfsjvv0eOKJZvaAVA0LFooQ1Tvq3FwHOyRS5VylaGiBKYxPAvMgZs7tf6oKwA7s6cduQlzVCov6Bgs01qmp0wGzMgdMOPv1b4GOqUBgDu5SoBHRm%2FurL3MbHzt4lZqh7blVU6FppxknVfkF5Uj3CMKdNUwB%2B97mUl%2FdbSBiRywrfARwrN1vwaVIeJYvwyfD5cVxEpPDr26U%2BQayxGmgk8zTCmkmWj1P5p3hjJ61YRmcftLTcpL6hdkTGOMZrdX9i43uWboIYmOqMXYW9D%2FonfoUBRfPe59Wj9BpK0206PJWFmkYFmMLwkAt5aXAQthP%2BEv&X-Amz-Signature=4445c84428cd70649e144e1a0a7a499e441551c85e53a17f29511cf22a5d2afb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5RIZAS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWnRfuCts2fsDP1ZusZFvWZxttiLggf%2BB69JOjDBm1OAiEAv%2FJxlZUPuBF2kZeFy04mV7ZB4cW4EbLGtpz81MXDvd0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMxnS9hLecwUv0ZgMCrcA2KtNEkjAV8vO0iZmXwUqhitLwDc%2BI7rFrxpah%2BLVH1G1u4r4ZCUp3UQCtRqNL47dfu6a5iLXsiF5T%2BZXdpzSvuWkEFYp6EikorVw4pK0przaOeui0XAi2aKKUA3Z8QM%2BEJ3LNdwoG9dR1cAiFOOpMncdD3RAF3J%2BcVi5kZqsHxPxQ%2FjiQ1KSZ5Wy9WVnENrfSGUABSsejKUx38TOs5QU9%2Bn1bxcm0ypWF1npm3HvjcCurTlvsvQMaX5Uz7bkZGtcb0Zi2TdMnvGY4qPx7gPOBpLqoRjJKtFCpYtJc2F8Z18S3AURIH0xss%2Fjrn%2BerMbXK%2BuXZ3vSfPbHO3OUdUr1wlzVf2RzMcOe6PCLT9ngZZsn7PUYMh5vtXZrXTGSQ7z0WJI%2FOK9ZP3D8CCX8i31NbsuiWCSNBycYgdUz8%2FGA0vFEnp9%2FOrBSkPgL6yQeGsSFiqeIuENy9MY1edo2%2BSEXzAXmk656v7hxtzwkOTUhWzYry5gwu4aIO7xUIysQOiU8YXA3oLbm%2BpWJOceQUn7Pwu6lNbTgwQnvSxfsjvv0eOKJZvaAVA0LFooQ1Tvq3FwHOyRS5VylaGiBKYxPAvMgZs7tf6oKwA7s6cduQlzVCov6Bgs01qmp0wGzMgdMOPv1b4GOqUBgDu5SoBHRm%2FurL3MbHzt4lZqh7blVU6FppxknVfkF5Uj3CMKdNUwB%2B97mUl%2FdbSBiRywrfARwrN1vwaVIeJYvwyfD5cVxEpPDr26U%2BQayxGmgk8zTCmkmWj1P5p3hjJ61YRmcftLTcpL6hdkTGOMZrdX9i43uWboIYmOqMXYW9D%2FonfoUBRfPe59Wj9BpK0206PJWFmkYFmMLwkAt5aXAQthP%2BEv&X-Amz-Signature=4a59285344dc64d11caa98c33a50b284e004e98b2d56c2d40f58d610e86ced2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5RIZAS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWnRfuCts2fsDP1ZusZFvWZxttiLggf%2BB69JOjDBm1OAiEAv%2FJxlZUPuBF2kZeFy04mV7ZB4cW4EbLGtpz81MXDvd0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMxnS9hLecwUv0ZgMCrcA2KtNEkjAV8vO0iZmXwUqhitLwDc%2BI7rFrxpah%2BLVH1G1u4r4ZCUp3UQCtRqNL47dfu6a5iLXsiF5T%2BZXdpzSvuWkEFYp6EikorVw4pK0przaOeui0XAi2aKKUA3Z8QM%2BEJ3LNdwoG9dR1cAiFOOpMncdD3RAF3J%2BcVi5kZqsHxPxQ%2FjiQ1KSZ5Wy9WVnENrfSGUABSsejKUx38TOs5QU9%2Bn1bxcm0ypWF1npm3HvjcCurTlvsvQMaX5Uz7bkZGtcb0Zi2TdMnvGY4qPx7gPOBpLqoRjJKtFCpYtJc2F8Z18S3AURIH0xss%2Fjrn%2BerMbXK%2BuXZ3vSfPbHO3OUdUr1wlzVf2RzMcOe6PCLT9ngZZsn7PUYMh5vtXZrXTGSQ7z0WJI%2FOK9ZP3D8CCX8i31NbsuiWCSNBycYgdUz8%2FGA0vFEnp9%2FOrBSkPgL6yQeGsSFiqeIuENy9MY1edo2%2BSEXzAXmk656v7hxtzwkOTUhWzYry5gwu4aIO7xUIysQOiU8YXA3oLbm%2BpWJOceQUn7Pwu6lNbTgwQnvSxfsjvv0eOKJZvaAVA0LFooQ1Tvq3FwHOyRS5VylaGiBKYxPAvMgZs7tf6oKwA7s6cduQlzVCov6Bgs01qmp0wGzMgdMOPv1b4GOqUBgDu5SoBHRm%2FurL3MbHzt4lZqh7blVU6FppxknVfkF5Uj3CMKdNUwB%2B97mUl%2FdbSBiRywrfARwrN1vwaVIeJYvwyfD5cVxEpPDr26U%2BQayxGmgk8zTCmkmWj1P5p3hjJ61YRmcftLTcpL6hdkTGOMZrdX9i43uWboIYmOqMXYW9D%2FonfoUBRfPe59Wj9BpK0206PJWFmkYFmMLwkAt5aXAQthP%2BEv&X-Amz-Signature=f32d56d8987f31a8620ad383f5349c3f973e6f4fa71b11de2758f80a90cab03f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5RIZAS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWnRfuCts2fsDP1ZusZFvWZxttiLggf%2BB69JOjDBm1OAiEAv%2FJxlZUPuBF2kZeFy04mV7ZB4cW4EbLGtpz81MXDvd0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMxnS9hLecwUv0ZgMCrcA2KtNEkjAV8vO0iZmXwUqhitLwDc%2BI7rFrxpah%2BLVH1G1u4r4ZCUp3UQCtRqNL47dfu6a5iLXsiF5T%2BZXdpzSvuWkEFYp6EikorVw4pK0przaOeui0XAi2aKKUA3Z8QM%2BEJ3LNdwoG9dR1cAiFOOpMncdD3RAF3J%2BcVi5kZqsHxPxQ%2FjiQ1KSZ5Wy9WVnENrfSGUABSsejKUx38TOs5QU9%2Bn1bxcm0ypWF1npm3HvjcCurTlvsvQMaX5Uz7bkZGtcb0Zi2TdMnvGY4qPx7gPOBpLqoRjJKtFCpYtJc2F8Z18S3AURIH0xss%2Fjrn%2BerMbXK%2BuXZ3vSfPbHO3OUdUr1wlzVf2RzMcOe6PCLT9ngZZsn7PUYMh5vtXZrXTGSQ7z0WJI%2FOK9ZP3D8CCX8i31NbsuiWCSNBycYgdUz8%2FGA0vFEnp9%2FOrBSkPgL6yQeGsSFiqeIuENy9MY1edo2%2BSEXzAXmk656v7hxtzwkOTUhWzYry5gwu4aIO7xUIysQOiU8YXA3oLbm%2BpWJOceQUn7Pwu6lNbTgwQnvSxfsjvv0eOKJZvaAVA0LFooQ1Tvq3FwHOyRS5VylaGiBKYxPAvMgZs7tf6oKwA7s6cduQlzVCov6Bgs01qmp0wGzMgdMOPv1b4GOqUBgDu5SoBHRm%2FurL3MbHzt4lZqh7blVU6FppxknVfkF5Uj3CMKdNUwB%2B97mUl%2FdbSBiRywrfARwrN1vwaVIeJYvwyfD5cVxEpPDr26U%2BQayxGmgk8zTCmkmWj1P5p3hjJ61YRmcftLTcpL6hdkTGOMZrdX9i43uWboIYmOqMXYW9D%2FonfoUBRfPe59Wj9BpK0206PJWFmkYFmMLwkAt5aXAQthP%2BEv&X-Amz-Signature=7717fec716b7d4e0ed0e0375e406b682763a23e29851df63e955768042bb085f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
