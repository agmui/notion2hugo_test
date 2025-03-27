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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDETHXS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAIFKOMp8%2BxmLzvxP7yJgsiYwlN0zNb8BXYH5qeRqogIhAK6ezIU3FidFiZbc%2BxMPj7Kbp%2BdVfV%2Fe3UXwAnUzpiGZKv8DCEUQABoMNjM3NDIzMTgzODA1IgySwMAPTmoW%2FRSZoHgq3AMrSEZnFieWn8qyW0vvBxQySbcschG%2FXa8waTJLi07UsPtQO8EvWaFCNcZKwpGhRXnjvUEkQfc73EEz%2BJByPfpdTcfXTl51eRdL1bDL66JFotMBOLquc5VSzEF8e1lm9Pt203JofcubZ0PbF%2FrVdKuDru5vOouLkAIKkTu%2F9D9EdPJMXzIYuCBtUYPfTD4yPMlL0NwWv8mbFS%2BX8L13Og%2F153%2BxQEEdCrWfbKI5UCp3s3NF5uuY2wckaj7zZpb4gpmJ1uaRQluf1guk4EJulfiF0o9AdSf%2B1CnUpf%2BzuQrrlxjDjS9ODPND8nwNlDb7hfl%2BwN%2B6r3%2FWa5DMd%2F5DBV26zBRqmPvwTXt5aq0rcCb9vWLaxnB5hYmh9YQJZup0CWqUIpwkKY6nR5UpJSI3x3mbFZx3GsbVfyio9ZvyYuJl2Bz4tBuziDiPjmp76w%2B6zOKzctGP6F4JPDS6ao8PqIhpck7VttrZOV4rCgORuIJOxTPOANQQ0ATGgjcObM6JXhXmIvoiQ2A%2BUx7R7Zn8mndohnprcbZvO5ub9C8BIGnIyUQoKrVy1gh9r5KXVwgyYVRsfX%2B08WoKaEBWint1kdvBdBJ%2BFDM6pqV1zludC8Zk0PBBlr3C5kMAcV5jJzCC95S%2FBjqkAVyEUTVccnu6CYpxucYK1nTkKCKiPpw2IGxShCVerXhzIC9YAHKPu9Dvnm%2FJdaseb5obGIsuxEZm1OUIomM73jPVKq4H9hfh0mNJYp292eXYnAcqj6U9E9Lsrv%2Bih9mlIvuctnbUA9xIAj%2BPF3U9o5mTUMHTqVI03tIiIP%2FOtyP6ucfz9RxitNWXLeYG1%2BEAsv8%2B0A7JZVCUvOeDlZT0yimZjilE&X-Amz-Signature=90809329b58f66e37c45de0eed79dbea11efb5400077edfac01b7902604e08f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDETHXS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAIFKOMp8%2BxmLzvxP7yJgsiYwlN0zNb8BXYH5qeRqogIhAK6ezIU3FidFiZbc%2BxMPj7Kbp%2BdVfV%2Fe3UXwAnUzpiGZKv8DCEUQABoMNjM3NDIzMTgzODA1IgySwMAPTmoW%2FRSZoHgq3AMrSEZnFieWn8qyW0vvBxQySbcschG%2FXa8waTJLi07UsPtQO8EvWaFCNcZKwpGhRXnjvUEkQfc73EEz%2BJByPfpdTcfXTl51eRdL1bDL66JFotMBOLquc5VSzEF8e1lm9Pt203JofcubZ0PbF%2FrVdKuDru5vOouLkAIKkTu%2F9D9EdPJMXzIYuCBtUYPfTD4yPMlL0NwWv8mbFS%2BX8L13Og%2F153%2BxQEEdCrWfbKI5UCp3s3NF5uuY2wckaj7zZpb4gpmJ1uaRQluf1guk4EJulfiF0o9AdSf%2B1CnUpf%2BzuQrrlxjDjS9ODPND8nwNlDb7hfl%2BwN%2B6r3%2FWa5DMd%2F5DBV26zBRqmPvwTXt5aq0rcCb9vWLaxnB5hYmh9YQJZup0CWqUIpwkKY6nR5UpJSI3x3mbFZx3GsbVfyio9ZvyYuJl2Bz4tBuziDiPjmp76w%2B6zOKzctGP6F4JPDS6ao8PqIhpck7VttrZOV4rCgORuIJOxTPOANQQ0ATGgjcObM6JXhXmIvoiQ2A%2BUx7R7Zn8mndohnprcbZvO5ub9C8BIGnIyUQoKrVy1gh9r5KXVwgyYVRsfX%2B08WoKaEBWint1kdvBdBJ%2BFDM6pqV1zludC8Zk0PBBlr3C5kMAcV5jJzCC95S%2FBjqkAVyEUTVccnu6CYpxucYK1nTkKCKiPpw2IGxShCVerXhzIC9YAHKPu9Dvnm%2FJdaseb5obGIsuxEZm1OUIomM73jPVKq4H9hfh0mNJYp292eXYnAcqj6U9E9Lsrv%2Bih9mlIvuctnbUA9xIAj%2BPF3U9o5mTUMHTqVI03tIiIP%2FOtyP6ucfz9RxitNWXLeYG1%2BEAsv8%2B0A7JZVCUvOeDlZT0yimZjilE&X-Amz-Signature=fde965fd637217fde38e32ddd5b5360466c0c33972de23df1c63bca405acc4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDETHXS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAIFKOMp8%2BxmLzvxP7yJgsiYwlN0zNb8BXYH5qeRqogIhAK6ezIU3FidFiZbc%2BxMPj7Kbp%2BdVfV%2Fe3UXwAnUzpiGZKv8DCEUQABoMNjM3NDIzMTgzODA1IgySwMAPTmoW%2FRSZoHgq3AMrSEZnFieWn8qyW0vvBxQySbcschG%2FXa8waTJLi07UsPtQO8EvWaFCNcZKwpGhRXnjvUEkQfc73EEz%2BJByPfpdTcfXTl51eRdL1bDL66JFotMBOLquc5VSzEF8e1lm9Pt203JofcubZ0PbF%2FrVdKuDru5vOouLkAIKkTu%2F9D9EdPJMXzIYuCBtUYPfTD4yPMlL0NwWv8mbFS%2BX8L13Og%2F153%2BxQEEdCrWfbKI5UCp3s3NF5uuY2wckaj7zZpb4gpmJ1uaRQluf1guk4EJulfiF0o9AdSf%2B1CnUpf%2BzuQrrlxjDjS9ODPND8nwNlDb7hfl%2BwN%2B6r3%2FWa5DMd%2F5DBV26zBRqmPvwTXt5aq0rcCb9vWLaxnB5hYmh9YQJZup0CWqUIpwkKY6nR5UpJSI3x3mbFZx3GsbVfyio9ZvyYuJl2Bz4tBuziDiPjmp76w%2B6zOKzctGP6F4JPDS6ao8PqIhpck7VttrZOV4rCgORuIJOxTPOANQQ0ATGgjcObM6JXhXmIvoiQ2A%2BUx7R7Zn8mndohnprcbZvO5ub9C8BIGnIyUQoKrVy1gh9r5KXVwgyYVRsfX%2B08WoKaEBWint1kdvBdBJ%2BFDM6pqV1zludC8Zk0PBBlr3C5kMAcV5jJzCC95S%2FBjqkAVyEUTVccnu6CYpxucYK1nTkKCKiPpw2IGxShCVerXhzIC9YAHKPu9Dvnm%2FJdaseb5obGIsuxEZm1OUIomM73jPVKq4H9hfh0mNJYp292eXYnAcqj6U9E9Lsrv%2Bih9mlIvuctnbUA9xIAj%2BPF3U9o5mTUMHTqVI03tIiIP%2FOtyP6ucfz9RxitNWXLeYG1%2BEAsv8%2B0A7JZVCUvOeDlZT0yimZjilE&X-Amz-Signature=ac76f2cf7e03fd8e75f4ae5cc8ef59d77019a4db9a1fa103d48169eda7d5b05a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDETHXS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAIFKOMp8%2BxmLzvxP7yJgsiYwlN0zNb8BXYH5qeRqogIhAK6ezIU3FidFiZbc%2BxMPj7Kbp%2BdVfV%2Fe3UXwAnUzpiGZKv8DCEUQABoMNjM3NDIzMTgzODA1IgySwMAPTmoW%2FRSZoHgq3AMrSEZnFieWn8qyW0vvBxQySbcschG%2FXa8waTJLi07UsPtQO8EvWaFCNcZKwpGhRXnjvUEkQfc73EEz%2BJByPfpdTcfXTl51eRdL1bDL66JFotMBOLquc5VSzEF8e1lm9Pt203JofcubZ0PbF%2FrVdKuDru5vOouLkAIKkTu%2F9D9EdPJMXzIYuCBtUYPfTD4yPMlL0NwWv8mbFS%2BX8L13Og%2F153%2BxQEEdCrWfbKI5UCp3s3NF5uuY2wckaj7zZpb4gpmJ1uaRQluf1guk4EJulfiF0o9AdSf%2B1CnUpf%2BzuQrrlxjDjS9ODPND8nwNlDb7hfl%2BwN%2B6r3%2FWa5DMd%2F5DBV26zBRqmPvwTXt5aq0rcCb9vWLaxnB5hYmh9YQJZup0CWqUIpwkKY6nR5UpJSI3x3mbFZx3GsbVfyio9ZvyYuJl2Bz4tBuziDiPjmp76w%2B6zOKzctGP6F4JPDS6ao8PqIhpck7VttrZOV4rCgORuIJOxTPOANQQ0ATGgjcObM6JXhXmIvoiQ2A%2BUx7R7Zn8mndohnprcbZvO5ub9C8BIGnIyUQoKrVy1gh9r5KXVwgyYVRsfX%2B08WoKaEBWint1kdvBdBJ%2BFDM6pqV1zludC8Zk0PBBlr3C5kMAcV5jJzCC95S%2FBjqkAVyEUTVccnu6CYpxucYK1nTkKCKiPpw2IGxShCVerXhzIC9YAHKPu9Dvnm%2FJdaseb5obGIsuxEZm1OUIomM73jPVKq4H9hfh0mNJYp292eXYnAcqj6U9E9Lsrv%2Bih9mlIvuctnbUA9xIAj%2BPF3U9o5mTUMHTqVI03tIiIP%2FOtyP6ucfz9RxitNWXLeYG1%2BEAsv8%2B0A7JZVCUvOeDlZT0yimZjilE&X-Amz-Signature=423513a63c0ac126c7116cbd79666adea48e1c8530c6987c486b05a03619d529&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDETHXS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAIFKOMp8%2BxmLzvxP7yJgsiYwlN0zNb8BXYH5qeRqogIhAK6ezIU3FidFiZbc%2BxMPj7Kbp%2BdVfV%2Fe3UXwAnUzpiGZKv8DCEUQABoMNjM3NDIzMTgzODA1IgySwMAPTmoW%2FRSZoHgq3AMrSEZnFieWn8qyW0vvBxQySbcschG%2FXa8waTJLi07UsPtQO8EvWaFCNcZKwpGhRXnjvUEkQfc73EEz%2BJByPfpdTcfXTl51eRdL1bDL66JFotMBOLquc5VSzEF8e1lm9Pt203JofcubZ0PbF%2FrVdKuDru5vOouLkAIKkTu%2F9D9EdPJMXzIYuCBtUYPfTD4yPMlL0NwWv8mbFS%2BX8L13Og%2F153%2BxQEEdCrWfbKI5UCp3s3NF5uuY2wckaj7zZpb4gpmJ1uaRQluf1guk4EJulfiF0o9AdSf%2B1CnUpf%2BzuQrrlxjDjS9ODPND8nwNlDb7hfl%2BwN%2B6r3%2FWa5DMd%2F5DBV26zBRqmPvwTXt5aq0rcCb9vWLaxnB5hYmh9YQJZup0CWqUIpwkKY6nR5UpJSI3x3mbFZx3GsbVfyio9ZvyYuJl2Bz4tBuziDiPjmp76w%2B6zOKzctGP6F4JPDS6ao8PqIhpck7VttrZOV4rCgORuIJOxTPOANQQ0ATGgjcObM6JXhXmIvoiQ2A%2BUx7R7Zn8mndohnprcbZvO5ub9C8BIGnIyUQoKrVy1gh9r5KXVwgyYVRsfX%2B08WoKaEBWint1kdvBdBJ%2BFDM6pqV1zludC8Zk0PBBlr3C5kMAcV5jJzCC95S%2FBjqkAVyEUTVccnu6CYpxucYK1nTkKCKiPpw2IGxShCVerXhzIC9YAHKPu9Dvnm%2FJdaseb5obGIsuxEZm1OUIomM73jPVKq4H9hfh0mNJYp292eXYnAcqj6U9E9Lsrv%2Bih9mlIvuctnbUA9xIAj%2BPF3U9o5mTUMHTqVI03tIiIP%2FOtyP6ucfz9RxitNWXLeYG1%2BEAsv8%2B0A7JZVCUvOeDlZT0yimZjilE&X-Amz-Signature=1382c798043802a16ee75018e5b7b2e524d7fdd75280d6afd592dda30700dabc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
