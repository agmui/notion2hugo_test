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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UNG4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVxbMlta6BK0yHa%2FvMJrVPF%2B2BL3ZOZPk%2FsQeVYi1HSwIhAMiQjF5jGw9Pv2Xj%2F3PY5qWSsK67BS7PaKyPtUxDrY7KKv8DCBkQABoMNjM3NDIzMTgzODA1Igw09WD4wEr6O%2B59m5Eq3APIC3ReKaASaB%2FNLOTbLvq%2Bj2QVCq3jOngvkS35ZwqP4ImrftUyKRrlbaheezmCb3ZyyNdayey2wyPdT1cA%2Fh8qY99BoJsI9lyJS9adAQPepiQcJMwi8ppTarH3AXm7Vdb3gZ7p78qvEKZxfQNX3FQqSfVLPy6zmFCkDiClXWPYydXfLtAguA5knsS%2Bb8imaZAEFJI7C3dsHB0l%2BQy46qKOgJ9qsaVU2rlEEVdBIDg98x2NBxFzBdu%2Bo4NqjkyHtlTqAgRlAFgB8KU0qUElhCg3SiJscAhttuiiKoH8DOJTtDQi9ALZX7WlOROFmQiqnhOIUQBhYFF2%2BQ9XZ13ZYjtGyKUkTZrva1RfJweBF%2FxMzsoqAdr19jLTE%2FtssD9wJUo7JLiV7y4DmiQ4CK1PLx4K7g%2FKj2QnUn5JEZVmoqzOGXqjlfD4GA%2F1oZHH9lO5P81kRY2J7y9s3i1VVj9nJazOxc8Afl4p7W8mHaM0mOSrxyHDRcRfs9IHZSJ6t3AFTR%2Fnw7VnWlEkImVtgjYHkMfFCyMHPITHH%2FwRbf2hZjJXTKfPtl1NHrBN65%2BcpaeXCrahOrKUQ75ND06euYBAiIj4BJT8UonDj2vWFAX3O%2FhKkrFkbRLUsqd19JfP6jCviO29BjqkAUpsZ27%2Bti4qeV%2BfAOauG783m6NvFjVXiuaGvtYfinKllUq1PFKb2pRYKMbEWeIPJ49V2qGTu1YmBh8YBWZC4W0aipbU9aYys%2FADMG6cQLqqCpYKIIgSBMOSLdmmve3GSxY%2BcwZ4Hj1Pll0s179cDr753hxGUqgMLKbI6m954F9YMwn1%2BlaiQJLG8A9D7EJ%2FGtytD%2B8gCmGywf%2Fvk%2BcEL%2FHTA6go&X-Amz-Signature=82979f89850a7750bc4d838173b626a961ce3b79be99a8f714eaa176619e7e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UNG4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVxbMlta6BK0yHa%2FvMJrVPF%2B2BL3ZOZPk%2FsQeVYi1HSwIhAMiQjF5jGw9Pv2Xj%2F3PY5qWSsK67BS7PaKyPtUxDrY7KKv8DCBkQABoMNjM3NDIzMTgzODA1Igw09WD4wEr6O%2B59m5Eq3APIC3ReKaASaB%2FNLOTbLvq%2Bj2QVCq3jOngvkS35ZwqP4ImrftUyKRrlbaheezmCb3ZyyNdayey2wyPdT1cA%2Fh8qY99BoJsI9lyJS9adAQPepiQcJMwi8ppTarH3AXm7Vdb3gZ7p78qvEKZxfQNX3FQqSfVLPy6zmFCkDiClXWPYydXfLtAguA5knsS%2Bb8imaZAEFJI7C3dsHB0l%2BQy46qKOgJ9qsaVU2rlEEVdBIDg98x2NBxFzBdu%2Bo4NqjkyHtlTqAgRlAFgB8KU0qUElhCg3SiJscAhttuiiKoH8DOJTtDQi9ALZX7WlOROFmQiqnhOIUQBhYFF2%2BQ9XZ13ZYjtGyKUkTZrva1RfJweBF%2FxMzsoqAdr19jLTE%2FtssD9wJUo7JLiV7y4DmiQ4CK1PLx4K7g%2FKj2QnUn5JEZVmoqzOGXqjlfD4GA%2F1oZHH9lO5P81kRY2J7y9s3i1VVj9nJazOxc8Afl4p7W8mHaM0mOSrxyHDRcRfs9IHZSJ6t3AFTR%2Fnw7VnWlEkImVtgjYHkMfFCyMHPITHH%2FwRbf2hZjJXTKfPtl1NHrBN65%2BcpaeXCrahOrKUQ75ND06euYBAiIj4BJT8UonDj2vWFAX3O%2FhKkrFkbRLUsqd19JfP6jCviO29BjqkAUpsZ27%2Bti4qeV%2BfAOauG783m6NvFjVXiuaGvtYfinKllUq1PFKb2pRYKMbEWeIPJ49V2qGTu1YmBh8YBWZC4W0aipbU9aYys%2FADMG6cQLqqCpYKIIgSBMOSLdmmve3GSxY%2BcwZ4Hj1Pll0s179cDr753hxGUqgMLKbI6m954F9YMwn1%2BlaiQJLG8A9D7EJ%2FGtytD%2B8gCmGywf%2Fvk%2BcEL%2FHTA6go&X-Amz-Signature=df68343c86132ab6ef7bdc45cbeaee3e55b63b7c5153f7a0037bef77f1c8799f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UNG4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVxbMlta6BK0yHa%2FvMJrVPF%2B2BL3ZOZPk%2FsQeVYi1HSwIhAMiQjF5jGw9Pv2Xj%2F3PY5qWSsK67BS7PaKyPtUxDrY7KKv8DCBkQABoMNjM3NDIzMTgzODA1Igw09WD4wEr6O%2B59m5Eq3APIC3ReKaASaB%2FNLOTbLvq%2Bj2QVCq3jOngvkS35ZwqP4ImrftUyKRrlbaheezmCb3ZyyNdayey2wyPdT1cA%2Fh8qY99BoJsI9lyJS9adAQPepiQcJMwi8ppTarH3AXm7Vdb3gZ7p78qvEKZxfQNX3FQqSfVLPy6zmFCkDiClXWPYydXfLtAguA5knsS%2Bb8imaZAEFJI7C3dsHB0l%2BQy46qKOgJ9qsaVU2rlEEVdBIDg98x2NBxFzBdu%2Bo4NqjkyHtlTqAgRlAFgB8KU0qUElhCg3SiJscAhttuiiKoH8DOJTtDQi9ALZX7WlOROFmQiqnhOIUQBhYFF2%2BQ9XZ13ZYjtGyKUkTZrva1RfJweBF%2FxMzsoqAdr19jLTE%2FtssD9wJUo7JLiV7y4DmiQ4CK1PLx4K7g%2FKj2QnUn5JEZVmoqzOGXqjlfD4GA%2F1oZHH9lO5P81kRY2J7y9s3i1VVj9nJazOxc8Afl4p7W8mHaM0mOSrxyHDRcRfs9IHZSJ6t3AFTR%2Fnw7VnWlEkImVtgjYHkMfFCyMHPITHH%2FwRbf2hZjJXTKfPtl1NHrBN65%2BcpaeXCrahOrKUQ75ND06euYBAiIj4BJT8UonDj2vWFAX3O%2FhKkrFkbRLUsqd19JfP6jCviO29BjqkAUpsZ27%2Bti4qeV%2BfAOauG783m6NvFjVXiuaGvtYfinKllUq1PFKb2pRYKMbEWeIPJ49V2qGTu1YmBh8YBWZC4W0aipbU9aYys%2FADMG6cQLqqCpYKIIgSBMOSLdmmve3GSxY%2BcwZ4Hj1Pll0s179cDr753hxGUqgMLKbI6m954F9YMwn1%2BlaiQJLG8A9D7EJ%2FGtytD%2B8gCmGywf%2Fvk%2BcEL%2FHTA6go&X-Amz-Signature=11cb577e99b38b98e42989310531040882016d9dad18e46908a7d6bdd8b32397&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UNG4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVxbMlta6BK0yHa%2FvMJrVPF%2B2BL3ZOZPk%2FsQeVYi1HSwIhAMiQjF5jGw9Pv2Xj%2F3PY5qWSsK67BS7PaKyPtUxDrY7KKv8DCBkQABoMNjM3NDIzMTgzODA1Igw09WD4wEr6O%2B59m5Eq3APIC3ReKaASaB%2FNLOTbLvq%2Bj2QVCq3jOngvkS35ZwqP4ImrftUyKRrlbaheezmCb3ZyyNdayey2wyPdT1cA%2Fh8qY99BoJsI9lyJS9adAQPepiQcJMwi8ppTarH3AXm7Vdb3gZ7p78qvEKZxfQNX3FQqSfVLPy6zmFCkDiClXWPYydXfLtAguA5knsS%2Bb8imaZAEFJI7C3dsHB0l%2BQy46qKOgJ9qsaVU2rlEEVdBIDg98x2NBxFzBdu%2Bo4NqjkyHtlTqAgRlAFgB8KU0qUElhCg3SiJscAhttuiiKoH8DOJTtDQi9ALZX7WlOROFmQiqnhOIUQBhYFF2%2BQ9XZ13ZYjtGyKUkTZrva1RfJweBF%2FxMzsoqAdr19jLTE%2FtssD9wJUo7JLiV7y4DmiQ4CK1PLx4K7g%2FKj2QnUn5JEZVmoqzOGXqjlfD4GA%2F1oZHH9lO5P81kRY2J7y9s3i1VVj9nJazOxc8Afl4p7W8mHaM0mOSrxyHDRcRfs9IHZSJ6t3AFTR%2Fnw7VnWlEkImVtgjYHkMfFCyMHPITHH%2FwRbf2hZjJXTKfPtl1NHrBN65%2BcpaeXCrahOrKUQ75ND06euYBAiIj4BJT8UonDj2vWFAX3O%2FhKkrFkbRLUsqd19JfP6jCviO29BjqkAUpsZ27%2Bti4qeV%2BfAOauG783m6NvFjVXiuaGvtYfinKllUq1PFKb2pRYKMbEWeIPJ49V2qGTu1YmBh8YBWZC4W0aipbU9aYys%2FADMG6cQLqqCpYKIIgSBMOSLdmmve3GSxY%2BcwZ4Hj1Pll0s179cDr753hxGUqgMLKbI6m954F9YMwn1%2BlaiQJLG8A9D7EJ%2FGtytD%2B8gCmGywf%2Fvk%2BcEL%2FHTA6go&X-Amz-Signature=7d8e79f5de0e424b6fbc3aa2d5347cfebbf37d625a8e62975583176869d57b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UNG4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVxbMlta6BK0yHa%2FvMJrVPF%2B2BL3ZOZPk%2FsQeVYi1HSwIhAMiQjF5jGw9Pv2Xj%2F3PY5qWSsK67BS7PaKyPtUxDrY7KKv8DCBkQABoMNjM3NDIzMTgzODA1Igw09WD4wEr6O%2B59m5Eq3APIC3ReKaASaB%2FNLOTbLvq%2Bj2QVCq3jOngvkS35ZwqP4ImrftUyKRrlbaheezmCb3ZyyNdayey2wyPdT1cA%2Fh8qY99BoJsI9lyJS9adAQPepiQcJMwi8ppTarH3AXm7Vdb3gZ7p78qvEKZxfQNX3FQqSfVLPy6zmFCkDiClXWPYydXfLtAguA5knsS%2Bb8imaZAEFJI7C3dsHB0l%2BQy46qKOgJ9qsaVU2rlEEVdBIDg98x2NBxFzBdu%2Bo4NqjkyHtlTqAgRlAFgB8KU0qUElhCg3SiJscAhttuiiKoH8DOJTtDQi9ALZX7WlOROFmQiqnhOIUQBhYFF2%2BQ9XZ13ZYjtGyKUkTZrva1RfJweBF%2FxMzsoqAdr19jLTE%2FtssD9wJUo7JLiV7y4DmiQ4CK1PLx4K7g%2FKj2QnUn5JEZVmoqzOGXqjlfD4GA%2F1oZHH9lO5P81kRY2J7y9s3i1VVj9nJazOxc8Afl4p7W8mHaM0mOSrxyHDRcRfs9IHZSJ6t3AFTR%2Fnw7VnWlEkImVtgjYHkMfFCyMHPITHH%2FwRbf2hZjJXTKfPtl1NHrBN65%2BcpaeXCrahOrKUQ75ND06euYBAiIj4BJT8UonDj2vWFAX3O%2FhKkrFkbRLUsqd19JfP6jCviO29BjqkAUpsZ27%2Bti4qeV%2BfAOauG783m6NvFjVXiuaGvtYfinKllUq1PFKb2pRYKMbEWeIPJ49V2qGTu1YmBh8YBWZC4W0aipbU9aYys%2FADMG6cQLqqCpYKIIgSBMOSLdmmve3GSxY%2BcwZ4Hj1Pll0s179cDr753hxGUqgMLKbI6m954F9YMwn1%2BlaiQJLG8A9D7EJ%2FGtytD%2B8gCmGywf%2Fvk%2BcEL%2FHTA6go&X-Amz-Signature=9ace1840f7cb409499a159b1deef8063f7818f690f7c7d087fc8217c1872f726&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
