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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KRCHGV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBuYnM%2BbF2OIUjLnNffGLtMBotNSCPFww9Rok55j%2BQFgIhAN%2B5TAjvKQ13ptu8EqFe2De16mgmN0hrPjXLx0%2FJCk9EKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLFtj3q8kyUtovIHgq3AO4%2F6NEorJ9HCx7Sjf01EkVcKOmOQ8om0Wx6MQSPtwXY1SD8K9wTFYUpK0q6rnRU4OL07C9ptmVhPPnbSnijAsKb%2B2E0NcoHzxr0OwkyJU3VsCzZfE4qaHuwof8ir87%2FsvQV5rI9Iulj%2BzBX1PvQu0acufrioRPk8z%2BaLhVEkuA6xlZPVGDIB6l9%2BGwi%2FaJnHzvnJJawmssSA4eI5L2cDZPpQTbROJzCkgW%2F522Nfft51nZX52R1PO9fBWwC8XKXiyKvHjA6Vkqf77y9ncA%2B%2B0aI0%2Fc7%2BZjgcev7B%2FXdVheuUi9dUCPYgsG%2BFTQF4GGMqKoIKgB746pWFtutUXqr9nPvH9qz3UgqBMGGmN4MPxhIkqOcuuHnZayUByyfw1L2KQ5tz1ec0ShcDOZ0Q2P0rHsFOhQjCjVmJU8ewJ17VOysxtU0gID8JSqW%2FJraVdIvpX6laRP5BUHFXoFpfBWb5QVGh1DyuSwqZXyh4DPs2CAOfeY%2B%2BOSaGkJqh8p6HMrfis3CkcYRdLVmYWq%2BAZGhK4gY8qMHLp5e7%2BMZkAsgVX0koBBNItG5FgkPXvl439IC%2BFp9p5prkNl%2FPbCOL8Obw21EXCwNaXqUYmYl2chyVmsYUKu1%2FrrZ60ZnjBI8TC9vNu9BjqkAXu78BcPMS4Knism4N3J%2FZg10g%2F660Ky5XfRXh6oBojltg08LsqIU%2BWCtOPHgbnyR7azYisfrQ9mZgx3%2FuII%2BuE%2FrrzX0fthul5baHY1JTRnN4b7EycwVQZYxg4SKArl2XIgZwjiEsqEPe7YB2uJBINphwm1Ps8%2FJAgsg5rfMBt6PMH7VmvwDBuxSoZAFiFFqbxJM7Q%2FnzDXvFIBNsFnyvbf%2Bzgo&X-Amz-Signature=57a3ea0a586e687547d0e426907a912abda5bfb6265a5b47e6fd32586a6c7f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KRCHGV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBuYnM%2BbF2OIUjLnNffGLtMBotNSCPFww9Rok55j%2BQFgIhAN%2B5TAjvKQ13ptu8EqFe2De16mgmN0hrPjXLx0%2FJCk9EKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLFtj3q8kyUtovIHgq3AO4%2F6NEorJ9HCx7Sjf01EkVcKOmOQ8om0Wx6MQSPtwXY1SD8K9wTFYUpK0q6rnRU4OL07C9ptmVhPPnbSnijAsKb%2B2E0NcoHzxr0OwkyJU3VsCzZfE4qaHuwof8ir87%2FsvQV5rI9Iulj%2BzBX1PvQu0acufrioRPk8z%2BaLhVEkuA6xlZPVGDIB6l9%2BGwi%2FaJnHzvnJJawmssSA4eI5L2cDZPpQTbROJzCkgW%2F522Nfft51nZX52R1PO9fBWwC8XKXiyKvHjA6Vkqf77y9ncA%2B%2B0aI0%2Fc7%2BZjgcev7B%2FXdVheuUi9dUCPYgsG%2BFTQF4GGMqKoIKgB746pWFtutUXqr9nPvH9qz3UgqBMGGmN4MPxhIkqOcuuHnZayUByyfw1L2KQ5tz1ec0ShcDOZ0Q2P0rHsFOhQjCjVmJU8ewJ17VOysxtU0gID8JSqW%2FJraVdIvpX6laRP5BUHFXoFpfBWb5QVGh1DyuSwqZXyh4DPs2CAOfeY%2B%2BOSaGkJqh8p6HMrfis3CkcYRdLVmYWq%2BAZGhK4gY8qMHLp5e7%2BMZkAsgVX0koBBNItG5FgkPXvl439IC%2BFp9p5prkNl%2FPbCOL8Obw21EXCwNaXqUYmYl2chyVmsYUKu1%2FrrZ60ZnjBI8TC9vNu9BjqkAXu78BcPMS4Knism4N3J%2FZg10g%2F660Ky5XfRXh6oBojltg08LsqIU%2BWCtOPHgbnyR7azYisfrQ9mZgx3%2FuII%2BuE%2FrrzX0fthul5baHY1JTRnN4b7EycwVQZYxg4SKArl2XIgZwjiEsqEPe7YB2uJBINphwm1Ps8%2FJAgsg5rfMBt6PMH7VmvwDBuxSoZAFiFFqbxJM7Q%2FnzDXvFIBNsFnyvbf%2Bzgo&X-Amz-Signature=9b83d5f5db60ac9b69d6256de8efc245af5caf6f9a45843c87944dae5333444a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KRCHGV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBuYnM%2BbF2OIUjLnNffGLtMBotNSCPFww9Rok55j%2BQFgIhAN%2B5TAjvKQ13ptu8EqFe2De16mgmN0hrPjXLx0%2FJCk9EKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLFtj3q8kyUtovIHgq3AO4%2F6NEorJ9HCx7Sjf01EkVcKOmOQ8om0Wx6MQSPtwXY1SD8K9wTFYUpK0q6rnRU4OL07C9ptmVhPPnbSnijAsKb%2B2E0NcoHzxr0OwkyJU3VsCzZfE4qaHuwof8ir87%2FsvQV5rI9Iulj%2BzBX1PvQu0acufrioRPk8z%2BaLhVEkuA6xlZPVGDIB6l9%2BGwi%2FaJnHzvnJJawmssSA4eI5L2cDZPpQTbROJzCkgW%2F522Nfft51nZX52R1PO9fBWwC8XKXiyKvHjA6Vkqf77y9ncA%2B%2B0aI0%2Fc7%2BZjgcev7B%2FXdVheuUi9dUCPYgsG%2BFTQF4GGMqKoIKgB746pWFtutUXqr9nPvH9qz3UgqBMGGmN4MPxhIkqOcuuHnZayUByyfw1L2KQ5tz1ec0ShcDOZ0Q2P0rHsFOhQjCjVmJU8ewJ17VOysxtU0gID8JSqW%2FJraVdIvpX6laRP5BUHFXoFpfBWb5QVGh1DyuSwqZXyh4DPs2CAOfeY%2B%2BOSaGkJqh8p6HMrfis3CkcYRdLVmYWq%2BAZGhK4gY8qMHLp5e7%2BMZkAsgVX0koBBNItG5FgkPXvl439IC%2BFp9p5prkNl%2FPbCOL8Obw21EXCwNaXqUYmYl2chyVmsYUKu1%2FrrZ60ZnjBI8TC9vNu9BjqkAXu78BcPMS4Knism4N3J%2FZg10g%2F660Ky5XfRXh6oBojltg08LsqIU%2BWCtOPHgbnyR7azYisfrQ9mZgx3%2FuII%2BuE%2FrrzX0fthul5baHY1JTRnN4b7EycwVQZYxg4SKArl2XIgZwjiEsqEPe7YB2uJBINphwm1Ps8%2FJAgsg5rfMBt6PMH7VmvwDBuxSoZAFiFFqbxJM7Q%2FnzDXvFIBNsFnyvbf%2Bzgo&X-Amz-Signature=29ac4ee8a76bed07886e0dbb80b5eac3035194f8b69cbebaeb90cf4dac24c25f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KRCHGV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBuYnM%2BbF2OIUjLnNffGLtMBotNSCPFww9Rok55j%2BQFgIhAN%2B5TAjvKQ13ptu8EqFe2De16mgmN0hrPjXLx0%2FJCk9EKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLFtj3q8kyUtovIHgq3AO4%2F6NEorJ9HCx7Sjf01EkVcKOmOQ8om0Wx6MQSPtwXY1SD8K9wTFYUpK0q6rnRU4OL07C9ptmVhPPnbSnijAsKb%2B2E0NcoHzxr0OwkyJU3VsCzZfE4qaHuwof8ir87%2FsvQV5rI9Iulj%2BzBX1PvQu0acufrioRPk8z%2BaLhVEkuA6xlZPVGDIB6l9%2BGwi%2FaJnHzvnJJawmssSA4eI5L2cDZPpQTbROJzCkgW%2F522Nfft51nZX52R1PO9fBWwC8XKXiyKvHjA6Vkqf77y9ncA%2B%2B0aI0%2Fc7%2BZjgcev7B%2FXdVheuUi9dUCPYgsG%2BFTQF4GGMqKoIKgB746pWFtutUXqr9nPvH9qz3UgqBMGGmN4MPxhIkqOcuuHnZayUByyfw1L2KQ5tz1ec0ShcDOZ0Q2P0rHsFOhQjCjVmJU8ewJ17VOysxtU0gID8JSqW%2FJraVdIvpX6laRP5BUHFXoFpfBWb5QVGh1DyuSwqZXyh4DPs2CAOfeY%2B%2BOSaGkJqh8p6HMrfis3CkcYRdLVmYWq%2BAZGhK4gY8qMHLp5e7%2BMZkAsgVX0koBBNItG5FgkPXvl439IC%2BFp9p5prkNl%2FPbCOL8Obw21EXCwNaXqUYmYl2chyVmsYUKu1%2FrrZ60ZnjBI8TC9vNu9BjqkAXu78BcPMS4Knism4N3J%2FZg10g%2F660Ky5XfRXh6oBojltg08LsqIU%2BWCtOPHgbnyR7azYisfrQ9mZgx3%2FuII%2BuE%2FrrzX0fthul5baHY1JTRnN4b7EycwVQZYxg4SKArl2XIgZwjiEsqEPe7YB2uJBINphwm1Ps8%2FJAgsg5rfMBt6PMH7VmvwDBuxSoZAFiFFqbxJM7Q%2FnzDXvFIBNsFnyvbf%2Bzgo&X-Amz-Signature=18b75ab2413c7de43772372d15476a611e876374390ebe86f159b7bbe87ca7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KRCHGV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBuYnM%2BbF2OIUjLnNffGLtMBotNSCPFww9Rok55j%2BQFgIhAN%2B5TAjvKQ13ptu8EqFe2De16mgmN0hrPjXLx0%2FJCk9EKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLFtj3q8kyUtovIHgq3AO4%2F6NEorJ9HCx7Sjf01EkVcKOmOQ8om0Wx6MQSPtwXY1SD8K9wTFYUpK0q6rnRU4OL07C9ptmVhPPnbSnijAsKb%2B2E0NcoHzxr0OwkyJU3VsCzZfE4qaHuwof8ir87%2FsvQV5rI9Iulj%2BzBX1PvQu0acufrioRPk8z%2BaLhVEkuA6xlZPVGDIB6l9%2BGwi%2FaJnHzvnJJawmssSA4eI5L2cDZPpQTbROJzCkgW%2F522Nfft51nZX52R1PO9fBWwC8XKXiyKvHjA6Vkqf77y9ncA%2B%2B0aI0%2Fc7%2BZjgcev7B%2FXdVheuUi9dUCPYgsG%2BFTQF4GGMqKoIKgB746pWFtutUXqr9nPvH9qz3UgqBMGGmN4MPxhIkqOcuuHnZayUByyfw1L2KQ5tz1ec0ShcDOZ0Q2P0rHsFOhQjCjVmJU8ewJ17VOysxtU0gID8JSqW%2FJraVdIvpX6laRP5BUHFXoFpfBWb5QVGh1DyuSwqZXyh4DPs2CAOfeY%2B%2BOSaGkJqh8p6HMrfis3CkcYRdLVmYWq%2BAZGhK4gY8qMHLp5e7%2BMZkAsgVX0koBBNItG5FgkPXvl439IC%2BFp9p5prkNl%2FPbCOL8Obw21EXCwNaXqUYmYl2chyVmsYUKu1%2FrrZ60ZnjBI8TC9vNu9BjqkAXu78BcPMS4Knism4N3J%2FZg10g%2F660Ky5XfRXh6oBojltg08LsqIU%2BWCtOPHgbnyR7azYisfrQ9mZgx3%2FuII%2BuE%2FrrzX0fthul5baHY1JTRnN4b7EycwVQZYxg4SKArl2XIgZwjiEsqEPe7YB2uJBINphwm1Ps8%2FJAgsg5rfMBt6PMH7VmvwDBuxSoZAFiFFqbxJM7Q%2FnzDXvFIBNsFnyvbf%2Bzgo&X-Amz-Signature=039a24af6121476c87f0c1f24e6d74ae3ecb99f12cd6073fa0ca0d0b13e1e0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
