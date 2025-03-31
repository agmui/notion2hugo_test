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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ3BDZF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDq4wBrjiIMiLxlGH%2FubdpxZXAyi6XfKisl9lBkIOfjQgIhAPZ%2BywBgNy6R6TzZnZGD0uMtPQRjEoF%2FjId9MG%2BkC%2FGEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXmPYBxbAJ5KO0%2B%2B4q3ANNDlvk0YuvYvf6fRJET07rBPdwQs3ncLCmrepfFObUwFn46m1e3Hu%2FKm3zbEU5RxTtcWOsKQJIYOv%2BDFAhpjMb%2FHPSaDMe1lHjeraXdtxXPJO0jPYrdTTDtlpD08K6kYNTAKc9ZTqvYpmiBAFLgcIOWBArisc0BT8KN6IvH766lLL5bd6VazP%2BpIdNCO1vHt%2FiqF0P7z2DtNBnnz6KbjkBuKXKauHg%2F5B3bAVoHSH84%2BU1gYkYNyvIWXQBBUZ07g8t3DjU2P4pa1QQr%2FiyYEkqsN7JG3pAF0eqLA1rBB%2Fxv%2FN5EWTDtVQIr7EjNlLlIDqFK69KrfUnDcgnOd7YRMGgSTlIARfPBB4ywoX9umS8LpeTqXL8LBRYwxm%2F8WfMXvGb21LRcaSl8yw%2B%2BxOBNlsR5DbQnp6udvunuHeoiqrZwozlY77oXbuoVz%2BxK2rwt7fQKw7vU%2FjG%2Fkd4tOc9CYKxQXoSyKInDeAoYgA0atno4Mb95K9O53zvbiV3gMv7nMgAUz5fHdEYPMWiqc6hGnYvLh8hr6LqlqM4gzz0LzKxXSnyY7SLCou1lhf11mOJ9VgxN%2FjOzUEqc4ts%2Fc%2F8xdlVENomdLW%2FUlmhRo5z0krRkU3Lj9dnbAuyvQhWCDDfiKq%2FBjqkAaz%2Bl2tZ2XC1OTpmvQd1xzsuq0h7%2B5BRv1Qy9%2BkTeiRj6Y2CSqo0xrSA2Og6rpQRohYMoh3qyPXn7iibLAoeZJ275DB5nOvJMDt3St5%2FiCvI77%2FnJmvuM7sRt0vMxHAa9Vi9xINjFTzkNE58xs%2BzfKOgBCGNnGn20MQEzWCq%2B33bJdHEEdycFqjshOOjQ2jynN6SnqNBDjAHMrt2%2FfF%2BXl6F6VMX&X-Amz-Signature=0ed5c173264d012165713f8d80fe1b8b8186ec17ec85799a48d992600ca7bd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ3BDZF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDq4wBrjiIMiLxlGH%2FubdpxZXAyi6XfKisl9lBkIOfjQgIhAPZ%2BywBgNy6R6TzZnZGD0uMtPQRjEoF%2FjId9MG%2BkC%2FGEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXmPYBxbAJ5KO0%2B%2B4q3ANNDlvk0YuvYvf6fRJET07rBPdwQs3ncLCmrepfFObUwFn46m1e3Hu%2FKm3zbEU5RxTtcWOsKQJIYOv%2BDFAhpjMb%2FHPSaDMe1lHjeraXdtxXPJO0jPYrdTTDtlpD08K6kYNTAKc9ZTqvYpmiBAFLgcIOWBArisc0BT8KN6IvH766lLL5bd6VazP%2BpIdNCO1vHt%2FiqF0P7z2DtNBnnz6KbjkBuKXKauHg%2F5B3bAVoHSH84%2BU1gYkYNyvIWXQBBUZ07g8t3DjU2P4pa1QQr%2FiyYEkqsN7JG3pAF0eqLA1rBB%2Fxv%2FN5EWTDtVQIr7EjNlLlIDqFK69KrfUnDcgnOd7YRMGgSTlIARfPBB4ywoX9umS8LpeTqXL8LBRYwxm%2F8WfMXvGb21LRcaSl8yw%2B%2BxOBNlsR5DbQnp6udvunuHeoiqrZwozlY77oXbuoVz%2BxK2rwt7fQKw7vU%2FjG%2Fkd4tOc9CYKxQXoSyKInDeAoYgA0atno4Mb95K9O53zvbiV3gMv7nMgAUz5fHdEYPMWiqc6hGnYvLh8hr6LqlqM4gzz0LzKxXSnyY7SLCou1lhf11mOJ9VgxN%2FjOzUEqc4ts%2Fc%2F8xdlVENomdLW%2FUlmhRo5z0krRkU3Lj9dnbAuyvQhWCDDfiKq%2FBjqkAaz%2Bl2tZ2XC1OTpmvQd1xzsuq0h7%2B5BRv1Qy9%2BkTeiRj6Y2CSqo0xrSA2Og6rpQRohYMoh3qyPXn7iibLAoeZJ275DB5nOvJMDt3St5%2FiCvI77%2FnJmvuM7sRt0vMxHAa9Vi9xINjFTzkNE58xs%2BzfKOgBCGNnGn20MQEzWCq%2B33bJdHEEdycFqjshOOjQ2jynN6SnqNBDjAHMrt2%2FfF%2BXl6F6VMX&X-Amz-Signature=83977f0ad9aadd832fde6ed2be5c569ea76ea6cd2fbe63478669de2ce89a2f61&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ3BDZF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDq4wBrjiIMiLxlGH%2FubdpxZXAyi6XfKisl9lBkIOfjQgIhAPZ%2BywBgNy6R6TzZnZGD0uMtPQRjEoF%2FjId9MG%2BkC%2FGEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXmPYBxbAJ5KO0%2B%2B4q3ANNDlvk0YuvYvf6fRJET07rBPdwQs3ncLCmrepfFObUwFn46m1e3Hu%2FKm3zbEU5RxTtcWOsKQJIYOv%2BDFAhpjMb%2FHPSaDMe1lHjeraXdtxXPJO0jPYrdTTDtlpD08K6kYNTAKc9ZTqvYpmiBAFLgcIOWBArisc0BT8KN6IvH766lLL5bd6VazP%2BpIdNCO1vHt%2FiqF0P7z2DtNBnnz6KbjkBuKXKauHg%2F5B3bAVoHSH84%2BU1gYkYNyvIWXQBBUZ07g8t3DjU2P4pa1QQr%2FiyYEkqsN7JG3pAF0eqLA1rBB%2Fxv%2FN5EWTDtVQIr7EjNlLlIDqFK69KrfUnDcgnOd7YRMGgSTlIARfPBB4ywoX9umS8LpeTqXL8LBRYwxm%2F8WfMXvGb21LRcaSl8yw%2B%2BxOBNlsR5DbQnp6udvunuHeoiqrZwozlY77oXbuoVz%2BxK2rwt7fQKw7vU%2FjG%2Fkd4tOc9CYKxQXoSyKInDeAoYgA0atno4Mb95K9O53zvbiV3gMv7nMgAUz5fHdEYPMWiqc6hGnYvLh8hr6LqlqM4gzz0LzKxXSnyY7SLCou1lhf11mOJ9VgxN%2FjOzUEqc4ts%2Fc%2F8xdlVENomdLW%2FUlmhRo5z0krRkU3Lj9dnbAuyvQhWCDDfiKq%2FBjqkAaz%2Bl2tZ2XC1OTpmvQd1xzsuq0h7%2B5BRv1Qy9%2BkTeiRj6Y2CSqo0xrSA2Og6rpQRohYMoh3qyPXn7iibLAoeZJ275DB5nOvJMDt3St5%2FiCvI77%2FnJmvuM7sRt0vMxHAa9Vi9xINjFTzkNE58xs%2BzfKOgBCGNnGn20MQEzWCq%2B33bJdHEEdycFqjshOOjQ2jynN6SnqNBDjAHMrt2%2FfF%2BXl6F6VMX&X-Amz-Signature=ee831348390f339fa6fe5e18de3300fac0791cec9f02768459a160461a598b69&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ3BDZF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDq4wBrjiIMiLxlGH%2FubdpxZXAyi6XfKisl9lBkIOfjQgIhAPZ%2BywBgNy6R6TzZnZGD0uMtPQRjEoF%2FjId9MG%2BkC%2FGEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXmPYBxbAJ5KO0%2B%2B4q3ANNDlvk0YuvYvf6fRJET07rBPdwQs3ncLCmrepfFObUwFn46m1e3Hu%2FKm3zbEU5RxTtcWOsKQJIYOv%2BDFAhpjMb%2FHPSaDMe1lHjeraXdtxXPJO0jPYrdTTDtlpD08K6kYNTAKc9ZTqvYpmiBAFLgcIOWBArisc0BT8KN6IvH766lLL5bd6VazP%2BpIdNCO1vHt%2FiqF0P7z2DtNBnnz6KbjkBuKXKauHg%2F5B3bAVoHSH84%2BU1gYkYNyvIWXQBBUZ07g8t3DjU2P4pa1QQr%2FiyYEkqsN7JG3pAF0eqLA1rBB%2Fxv%2FN5EWTDtVQIr7EjNlLlIDqFK69KrfUnDcgnOd7YRMGgSTlIARfPBB4ywoX9umS8LpeTqXL8LBRYwxm%2F8WfMXvGb21LRcaSl8yw%2B%2BxOBNlsR5DbQnp6udvunuHeoiqrZwozlY77oXbuoVz%2BxK2rwt7fQKw7vU%2FjG%2Fkd4tOc9CYKxQXoSyKInDeAoYgA0atno4Mb95K9O53zvbiV3gMv7nMgAUz5fHdEYPMWiqc6hGnYvLh8hr6LqlqM4gzz0LzKxXSnyY7SLCou1lhf11mOJ9VgxN%2FjOzUEqc4ts%2Fc%2F8xdlVENomdLW%2FUlmhRo5z0krRkU3Lj9dnbAuyvQhWCDDfiKq%2FBjqkAaz%2Bl2tZ2XC1OTpmvQd1xzsuq0h7%2B5BRv1Qy9%2BkTeiRj6Y2CSqo0xrSA2Og6rpQRohYMoh3qyPXn7iibLAoeZJ275DB5nOvJMDt3St5%2FiCvI77%2FnJmvuM7sRt0vMxHAa9Vi9xINjFTzkNE58xs%2BzfKOgBCGNnGn20MQEzWCq%2B33bJdHEEdycFqjshOOjQ2jynN6SnqNBDjAHMrt2%2FfF%2BXl6F6VMX&X-Amz-Signature=653133844c06c00fd047b057add602d88017fc79772b8a121f7a26eeb72c9be5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ3BDZF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDq4wBrjiIMiLxlGH%2FubdpxZXAyi6XfKisl9lBkIOfjQgIhAPZ%2BywBgNy6R6TzZnZGD0uMtPQRjEoF%2FjId9MG%2BkC%2FGEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXmPYBxbAJ5KO0%2B%2B4q3ANNDlvk0YuvYvf6fRJET07rBPdwQs3ncLCmrepfFObUwFn46m1e3Hu%2FKm3zbEU5RxTtcWOsKQJIYOv%2BDFAhpjMb%2FHPSaDMe1lHjeraXdtxXPJO0jPYrdTTDtlpD08K6kYNTAKc9ZTqvYpmiBAFLgcIOWBArisc0BT8KN6IvH766lLL5bd6VazP%2BpIdNCO1vHt%2FiqF0P7z2DtNBnnz6KbjkBuKXKauHg%2F5B3bAVoHSH84%2BU1gYkYNyvIWXQBBUZ07g8t3DjU2P4pa1QQr%2FiyYEkqsN7JG3pAF0eqLA1rBB%2Fxv%2FN5EWTDtVQIr7EjNlLlIDqFK69KrfUnDcgnOd7YRMGgSTlIARfPBB4ywoX9umS8LpeTqXL8LBRYwxm%2F8WfMXvGb21LRcaSl8yw%2B%2BxOBNlsR5DbQnp6udvunuHeoiqrZwozlY77oXbuoVz%2BxK2rwt7fQKw7vU%2FjG%2Fkd4tOc9CYKxQXoSyKInDeAoYgA0atno4Mb95K9O53zvbiV3gMv7nMgAUz5fHdEYPMWiqc6hGnYvLh8hr6LqlqM4gzz0LzKxXSnyY7SLCou1lhf11mOJ9VgxN%2FjOzUEqc4ts%2Fc%2F8xdlVENomdLW%2FUlmhRo5z0krRkU3Lj9dnbAuyvQhWCDDfiKq%2FBjqkAaz%2Bl2tZ2XC1OTpmvQd1xzsuq0h7%2B5BRv1Qy9%2BkTeiRj6Y2CSqo0xrSA2Og6rpQRohYMoh3qyPXn7iibLAoeZJ275DB5nOvJMDt3St5%2FiCvI77%2FnJmvuM7sRt0vMxHAa9Vi9xINjFTzkNE58xs%2BzfKOgBCGNnGn20MQEzWCq%2B33bJdHEEdycFqjshOOjQ2jynN6SnqNBDjAHMrt2%2FfF%2BXl6F6VMX&X-Amz-Signature=ce002e615e79d4d5c414563e7af2e36c21e0200f5e87dd6a3caec4aa17e144c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
