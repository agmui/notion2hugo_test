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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5PMH3Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehUKnola%2BrImuM%2Fx8pyEiDqxBzejYB2mztOY1F5PjXgIhAMlJlz51ezb29OWOECI5Dplciz48WFKgB9%2BHJQLU0dlnKv8DCBEQABoMNjM3NDIzMTgzODA1Igy38tyLOdWMi5zvg2cq3AOvtbIq20GhkG7MbZX0jI65lKsaH4Tmi156yV7hhvCGYYWpIuub8ZlF6W1iekI3X%2FEM8CepXkUEGAS1vQPpuZPC4Ch0BAcSNciPt9gTkriOGC5mz%2B8K%2BpRW1RTncOVhNPHv%2FuKOi3sgb0XAPacGfpj9%2B%2F5i2X%2FZV6kPqhhkecHV%2B4uSXvPixE4LPDxLXoq6t6jlXWF2tbj4TqrjBBxaHHH%2BKDEYR%2BBdDe6X70UjLAfJFZW8PLK93OeJCVFOLmqF04hgfiSpzPUB4yxo97v2EcDtYY1Tdvanp7Bcm96llrYWMaztGD39fR%2BG%2Fy30VdVawZ%2FhKbOnHS2qUG2SIQfGdiq9aFR7q0B9aS5eT74Bzxh%2F5cNBTMjHKKAz1lj2wEJ0NgNvAKQ7vUzbtzptZHvERQKcHu8SrmTs3hUTjgsxNSYNmiffy8exy7JwU639s%2BfR0nF7WabwAdarl4xX48Eu2PTX7D957%2BezOd2ERoW8mqkTUhD2e%2FvilvoeMmwbVRYAJsDw%2Fds0mbQxtT5zrCxl%2BwG7uoRZrWGMo%2BQeiExMVVw7DlnrIQVokDacY1b64jYRwWWFhFgOaQnj9ASQVHSKYYndhTTu8ro7y5IFUvfs941ffVZ4UH%2FIO1wuxLN9KzDZ4dS%2BBjqkAcvssFxuQLdMwhw%2FOZE%2FxLQyCwpMTZkDdumWz61uLGQTvGNNTpSBYpHAkcJVorLVnLzuC8L05JlT0nhbQXbCFUDAUgtBl4SLpyKny6oNbl3GSApYithurdFLSSNtPd3PfVfcIVXJnxu9QFUat3LM%2BCv%2F4K0xTVellew8RzokSHSVaWeEjpWkpE1y73HvIeZFkHsw962p3H1Rwv3FSA77X0IRnqiP&X-Amz-Signature=3dd7037fdb92d2f6c560987ec4b4e646df94fc7dc1de301988a15eb207b3eaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5PMH3Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehUKnola%2BrImuM%2Fx8pyEiDqxBzejYB2mztOY1F5PjXgIhAMlJlz51ezb29OWOECI5Dplciz48WFKgB9%2BHJQLU0dlnKv8DCBEQABoMNjM3NDIzMTgzODA1Igy38tyLOdWMi5zvg2cq3AOvtbIq20GhkG7MbZX0jI65lKsaH4Tmi156yV7hhvCGYYWpIuub8ZlF6W1iekI3X%2FEM8CepXkUEGAS1vQPpuZPC4Ch0BAcSNciPt9gTkriOGC5mz%2B8K%2BpRW1RTncOVhNPHv%2FuKOi3sgb0XAPacGfpj9%2B%2F5i2X%2FZV6kPqhhkecHV%2B4uSXvPixE4LPDxLXoq6t6jlXWF2tbj4TqrjBBxaHHH%2BKDEYR%2BBdDe6X70UjLAfJFZW8PLK93OeJCVFOLmqF04hgfiSpzPUB4yxo97v2EcDtYY1Tdvanp7Bcm96llrYWMaztGD39fR%2BG%2Fy30VdVawZ%2FhKbOnHS2qUG2SIQfGdiq9aFR7q0B9aS5eT74Bzxh%2F5cNBTMjHKKAz1lj2wEJ0NgNvAKQ7vUzbtzptZHvERQKcHu8SrmTs3hUTjgsxNSYNmiffy8exy7JwU639s%2BfR0nF7WabwAdarl4xX48Eu2PTX7D957%2BezOd2ERoW8mqkTUhD2e%2FvilvoeMmwbVRYAJsDw%2Fds0mbQxtT5zrCxl%2BwG7uoRZrWGMo%2BQeiExMVVw7DlnrIQVokDacY1b64jYRwWWFhFgOaQnj9ASQVHSKYYndhTTu8ro7y5IFUvfs941ffVZ4UH%2FIO1wuxLN9KzDZ4dS%2BBjqkAcvssFxuQLdMwhw%2FOZE%2FxLQyCwpMTZkDdumWz61uLGQTvGNNTpSBYpHAkcJVorLVnLzuC8L05JlT0nhbQXbCFUDAUgtBl4SLpyKny6oNbl3GSApYithurdFLSSNtPd3PfVfcIVXJnxu9QFUat3LM%2BCv%2F4K0xTVellew8RzokSHSVaWeEjpWkpE1y73HvIeZFkHsw962p3H1Rwv3FSA77X0IRnqiP&X-Amz-Signature=373cda80e6aa61c03463ee1895cb02874e816c3aee1cfe16c39100b871047dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5PMH3Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehUKnola%2BrImuM%2Fx8pyEiDqxBzejYB2mztOY1F5PjXgIhAMlJlz51ezb29OWOECI5Dplciz48WFKgB9%2BHJQLU0dlnKv8DCBEQABoMNjM3NDIzMTgzODA1Igy38tyLOdWMi5zvg2cq3AOvtbIq20GhkG7MbZX0jI65lKsaH4Tmi156yV7hhvCGYYWpIuub8ZlF6W1iekI3X%2FEM8CepXkUEGAS1vQPpuZPC4Ch0BAcSNciPt9gTkriOGC5mz%2B8K%2BpRW1RTncOVhNPHv%2FuKOi3sgb0XAPacGfpj9%2B%2F5i2X%2FZV6kPqhhkecHV%2B4uSXvPixE4LPDxLXoq6t6jlXWF2tbj4TqrjBBxaHHH%2BKDEYR%2BBdDe6X70UjLAfJFZW8PLK93OeJCVFOLmqF04hgfiSpzPUB4yxo97v2EcDtYY1Tdvanp7Bcm96llrYWMaztGD39fR%2BG%2Fy30VdVawZ%2FhKbOnHS2qUG2SIQfGdiq9aFR7q0B9aS5eT74Bzxh%2F5cNBTMjHKKAz1lj2wEJ0NgNvAKQ7vUzbtzptZHvERQKcHu8SrmTs3hUTjgsxNSYNmiffy8exy7JwU639s%2BfR0nF7WabwAdarl4xX48Eu2PTX7D957%2BezOd2ERoW8mqkTUhD2e%2FvilvoeMmwbVRYAJsDw%2Fds0mbQxtT5zrCxl%2BwG7uoRZrWGMo%2BQeiExMVVw7DlnrIQVokDacY1b64jYRwWWFhFgOaQnj9ASQVHSKYYndhTTu8ro7y5IFUvfs941ffVZ4UH%2FIO1wuxLN9KzDZ4dS%2BBjqkAcvssFxuQLdMwhw%2FOZE%2FxLQyCwpMTZkDdumWz61uLGQTvGNNTpSBYpHAkcJVorLVnLzuC8L05JlT0nhbQXbCFUDAUgtBl4SLpyKny6oNbl3GSApYithurdFLSSNtPd3PfVfcIVXJnxu9QFUat3LM%2BCv%2F4K0xTVellew8RzokSHSVaWeEjpWkpE1y73HvIeZFkHsw962p3H1Rwv3FSA77X0IRnqiP&X-Amz-Signature=698d48a2d1660ec89fc5fb68a0a61ea14e0d996dc0287353986449ee8e868868&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5PMH3Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehUKnola%2BrImuM%2Fx8pyEiDqxBzejYB2mztOY1F5PjXgIhAMlJlz51ezb29OWOECI5Dplciz48WFKgB9%2BHJQLU0dlnKv8DCBEQABoMNjM3NDIzMTgzODA1Igy38tyLOdWMi5zvg2cq3AOvtbIq20GhkG7MbZX0jI65lKsaH4Tmi156yV7hhvCGYYWpIuub8ZlF6W1iekI3X%2FEM8CepXkUEGAS1vQPpuZPC4Ch0BAcSNciPt9gTkriOGC5mz%2B8K%2BpRW1RTncOVhNPHv%2FuKOi3sgb0XAPacGfpj9%2B%2F5i2X%2FZV6kPqhhkecHV%2B4uSXvPixE4LPDxLXoq6t6jlXWF2tbj4TqrjBBxaHHH%2BKDEYR%2BBdDe6X70UjLAfJFZW8PLK93OeJCVFOLmqF04hgfiSpzPUB4yxo97v2EcDtYY1Tdvanp7Bcm96llrYWMaztGD39fR%2BG%2Fy30VdVawZ%2FhKbOnHS2qUG2SIQfGdiq9aFR7q0B9aS5eT74Bzxh%2F5cNBTMjHKKAz1lj2wEJ0NgNvAKQ7vUzbtzptZHvERQKcHu8SrmTs3hUTjgsxNSYNmiffy8exy7JwU639s%2BfR0nF7WabwAdarl4xX48Eu2PTX7D957%2BezOd2ERoW8mqkTUhD2e%2FvilvoeMmwbVRYAJsDw%2Fds0mbQxtT5zrCxl%2BwG7uoRZrWGMo%2BQeiExMVVw7DlnrIQVokDacY1b64jYRwWWFhFgOaQnj9ASQVHSKYYndhTTu8ro7y5IFUvfs941ffVZ4UH%2FIO1wuxLN9KzDZ4dS%2BBjqkAcvssFxuQLdMwhw%2FOZE%2FxLQyCwpMTZkDdumWz61uLGQTvGNNTpSBYpHAkcJVorLVnLzuC8L05JlT0nhbQXbCFUDAUgtBl4SLpyKny6oNbl3GSApYithurdFLSSNtPd3PfVfcIVXJnxu9QFUat3LM%2BCv%2F4K0xTVellew8RzokSHSVaWeEjpWkpE1y73HvIeZFkHsw962p3H1Rwv3FSA77X0IRnqiP&X-Amz-Signature=999df350537499a2aec4d9ec1cd9cabcd6e040ed9de359d82003bc610c10b83f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5PMH3Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehUKnola%2BrImuM%2Fx8pyEiDqxBzejYB2mztOY1F5PjXgIhAMlJlz51ezb29OWOECI5Dplciz48WFKgB9%2BHJQLU0dlnKv8DCBEQABoMNjM3NDIzMTgzODA1Igy38tyLOdWMi5zvg2cq3AOvtbIq20GhkG7MbZX0jI65lKsaH4Tmi156yV7hhvCGYYWpIuub8ZlF6W1iekI3X%2FEM8CepXkUEGAS1vQPpuZPC4Ch0BAcSNciPt9gTkriOGC5mz%2B8K%2BpRW1RTncOVhNPHv%2FuKOi3sgb0XAPacGfpj9%2B%2F5i2X%2FZV6kPqhhkecHV%2B4uSXvPixE4LPDxLXoq6t6jlXWF2tbj4TqrjBBxaHHH%2BKDEYR%2BBdDe6X70UjLAfJFZW8PLK93OeJCVFOLmqF04hgfiSpzPUB4yxo97v2EcDtYY1Tdvanp7Bcm96llrYWMaztGD39fR%2BG%2Fy30VdVawZ%2FhKbOnHS2qUG2SIQfGdiq9aFR7q0B9aS5eT74Bzxh%2F5cNBTMjHKKAz1lj2wEJ0NgNvAKQ7vUzbtzptZHvERQKcHu8SrmTs3hUTjgsxNSYNmiffy8exy7JwU639s%2BfR0nF7WabwAdarl4xX48Eu2PTX7D957%2BezOd2ERoW8mqkTUhD2e%2FvilvoeMmwbVRYAJsDw%2Fds0mbQxtT5zrCxl%2BwG7uoRZrWGMo%2BQeiExMVVw7DlnrIQVokDacY1b64jYRwWWFhFgOaQnj9ASQVHSKYYndhTTu8ro7y5IFUvfs941ffVZ4UH%2FIO1wuxLN9KzDZ4dS%2BBjqkAcvssFxuQLdMwhw%2FOZE%2FxLQyCwpMTZkDdumWz61uLGQTvGNNTpSBYpHAkcJVorLVnLzuC8L05JlT0nhbQXbCFUDAUgtBl4SLpyKny6oNbl3GSApYithurdFLSSNtPd3PfVfcIVXJnxu9QFUat3LM%2BCv%2F4K0xTVellew8RzokSHSVaWeEjpWkpE1y73HvIeZFkHsw962p3H1Rwv3FSA77X0IRnqiP&X-Amz-Signature=94ee318c4d0f7c0f7f525e4f9b43188b2f275f4ba4d85b50c0b629ef924d5ece&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
