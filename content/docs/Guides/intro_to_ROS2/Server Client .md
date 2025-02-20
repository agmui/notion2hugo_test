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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUP5KJC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPZn%2FIJA0qfvP98VK8fPBTQGQX65wMF9oepdolf%2B2kcAiB2aL50hA1QDN5BpNumNF6p2K2MTGO1O4c2cTdgNwLn2yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOhhZZLB7retmyg8KtwDbcIJiGF6350N2XX55WOtLEldmeP5L7ndhc4GVQTGwQpe%2Bv1nKLn%2BwrovpFzZQT281W805LDqeFUwKaoIkJ4kk%2Bc77%2FSqqy8B2NsbSolkQTF6Gt5Jnazxdq3Kn13j3fXnVHO0BjKLdMSM7LbNsN4929aUN%2BkftjiMZtg1VoYg1XX%2FkDEGsunPGMnNp1ssR19Z4Mo4C4uHQeNy2pgKszog3LKwclnYVBpRBKhAwSegzdYvp8fqvRj78TDC1E4XGqRrIm%2BoksG2EEPF4ON21dJ6GW9yWgyxP78ueC5TjZ0TqwTtth%2FqIteosJtknvOYRkR7L%2BTezRH6gVR%2FMqMMPexV5T6WPsWojGuizizRJTCvw48YVcozkhQOFqXLEViWfIsM8oYy%2BvPDghUOTSpzDQ7hLjQefrgyzPINQ5RgTk592x9B39yKSpqYw4giqhDthHjQQnmE73wPBfPSd6kv3vGzSsh60UWUaHI3NKhwoZlG%2BqYLOyB3l5pnZSMEvOqEP8Axbt8hxEm9RsL1s24uAET1gzyV%2F7sASv5gkH%2FnwhWAIjB%2F%2F%2FqETMGMvwDiVAh54USTBCc5239hcLbrEF4uuK5FGDzc7oEbDsWRoAKm38dmwec9iUgwrHjXspvNhacwxo3evQY6pgGqXl0gjsb8AIUoCazT9VZa7FcamC1%2FFbGXzxMomqhOdku3BDw6T49uAudR2%2BbrxpSbHUAxmK8HBqmw%2FpvrwMzjmRw%2BpWcmqeCl7n9OermnK1EucFUm4FLes8EfBNuwjMLwMdu0xjBAxSSFzCKylzpeo0%2BuOhaEDtsH4y7q1GGapZocb7Yw1ODnhWv%2F%2FtFQxOnOkPlv6OeXh%2B5vQhKjP6N8uO4bTkQ2&X-Amz-Signature=389e64858c30d596d952397299bb344594b5de4f9138fc90d5326363b5ad7cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUP5KJC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPZn%2FIJA0qfvP98VK8fPBTQGQX65wMF9oepdolf%2B2kcAiB2aL50hA1QDN5BpNumNF6p2K2MTGO1O4c2cTdgNwLn2yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOhhZZLB7retmyg8KtwDbcIJiGF6350N2XX55WOtLEldmeP5L7ndhc4GVQTGwQpe%2Bv1nKLn%2BwrovpFzZQT281W805LDqeFUwKaoIkJ4kk%2Bc77%2FSqqy8B2NsbSolkQTF6Gt5Jnazxdq3Kn13j3fXnVHO0BjKLdMSM7LbNsN4929aUN%2BkftjiMZtg1VoYg1XX%2FkDEGsunPGMnNp1ssR19Z4Mo4C4uHQeNy2pgKszog3LKwclnYVBpRBKhAwSegzdYvp8fqvRj78TDC1E4XGqRrIm%2BoksG2EEPF4ON21dJ6GW9yWgyxP78ueC5TjZ0TqwTtth%2FqIteosJtknvOYRkR7L%2BTezRH6gVR%2FMqMMPexV5T6WPsWojGuizizRJTCvw48YVcozkhQOFqXLEViWfIsM8oYy%2BvPDghUOTSpzDQ7hLjQefrgyzPINQ5RgTk592x9B39yKSpqYw4giqhDthHjQQnmE73wPBfPSd6kv3vGzSsh60UWUaHI3NKhwoZlG%2BqYLOyB3l5pnZSMEvOqEP8Axbt8hxEm9RsL1s24uAET1gzyV%2F7sASv5gkH%2FnwhWAIjB%2F%2F%2FqETMGMvwDiVAh54USTBCc5239hcLbrEF4uuK5FGDzc7oEbDsWRoAKm38dmwec9iUgwrHjXspvNhacwxo3evQY6pgGqXl0gjsb8AIUoCazT9VZa7FcamC1%2FFbGXzxMomqhOdku3BDw6T49uAudR2%2BbrxpSbHUAxmK8HBqmw%2FpvrwMzjmRw%2BpWcmqeCl7n9OermnK1EucFUm4FLes8EfBNuwjMLwMdu0xjBAxSSFzCKylzpeo0%2BuOhaEDtsH4y7q1GGapZocb7Yw1ODnhWv%2F%2FtFQxOnOkPlv6OeXh%2B5vQhKjP6N8uO4bTkQ2&X-Amz-Signature=e0eb6e7b4590a08f16f029e18fd053faacb06206ee0870606851d9b4ab12a1b3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUP5KJC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPZn%2FIJA0qfvP98VK8fPBTQGQX65wMF9oepdolf%2B2kcAiB2aL50hA1QDN5BpNumNF6p2K2MTGO1O4c2cTdgNwLn2yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOhhZZLB7retmyg8KtwDbcIJiGF6350N2XX55WOtLEldmeP5L7ndhc4GVQTGwQpe%2Bv1nKLn%2BwrovpFzZQT281W805LDqeFUwKaoIkJ4kk%2Bc77%2FSqqy8B2NsbSolkQTF6Gt5Jnazxdq3Kn13j3fXnVHO0BjKLdMSM7LbNsN4929aUN%2BkftjiMZtg1VoYg1XX%2FkDEGsunPGMnNp1ssR19Z4Mo4C4uHQeNy2pgKszog3LKwclnYVBpRBKhAwSegzdYvp8fqvRj78TDC1E4XGqRrIm%2BoksG2EEPF4ON21dJ6GW9yWgyxP78ueC5TjZ0TqwTtth%2FqIteosJtknvOYRkR7L%2BTezRH6gVR%2FMqMMPexV5T6WPsWojGuizizRJTCvw48YVcozkhQOFqXLEViWfIsM8oYy%2BvPDghUOTSpzDQ7hLjQefrgyzPINQ5RgTk592x9B39yKSpqYw4giqhDthHjQQnmE73wPBfPSd6kv3vGzSsh60UWUaHI3NKhwoZlG%2BqYLOyB3l5pnZSMEvOqEP8Axbt8hxEm9RsL1s24uAET1gzyV%2F7sASv5gkH%2FnwhWAIjB%2F%2F%2FqETMGMvwDiVAh54USTBCc5239hcLbrEF4uuK5FGDzc7oEbDsWRoAKm38dmwec9iUgwrHjXspvNhacwxo3evQY6pgGqXl0gjsb8AIUoCazT9VZa7FcamC1%2FFbGXzxMomqhOdku3BDw6T49uAudR2%2BbrxpSbHUAxmK8HBqmw%2FpvrwMzjmRw%2BpWcmqeCl7n9OermnK1EucFUm4FLes8EfBNuwjMLwMdu0xjBAxSSFzCKylzpeo0%2BuOhaEDtsH4y7q1GGapZocb7Yw1ODnhWv%2F%2FtFQxOnOkPlv6OeXh%2B5vQhKjP6N8uO4bTkQ2&X-Amz-Signature=ede8149fb77e903ff73a28ebe4827d20dd7c1833f68c148693a5aaf1786bd15a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUP5KJC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPZn%2FIJA0qfvP98VK8fPBTQGQX65wMF9oepdolf%2B2kcAiB2aL50hA1QDN5BpNumNF6p2K2MTGO1O4c2cTdgNwLn2yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOhhZZLB7retmyg8KtwDbcIJiGF6350N2XX55WOtLEldmeP5L7ndhc4GVQTGwQpe%2Bv1nKLn%2BwrovpFzZQT281W805LDqeFUwKaoIkJ4kk%2Bc77%2FSqqy8B2NsbSolkQTF6Gt5Jnazxdq3Kn13j3fXnVHO0BjKLdMSM7LbNsN4929aUN%2BkftjiMZtg1VoYg1XX%2FkDEGsunPGMnNp1ssR19Z4Mo4C4uHQeNy2pgKszog3LKwclnYVBpRBKhAwSegzdYvp8fqvRj78TDC1E4XGqRrIm%2BoksG2EEPF4ON21dJ6GW9yWgyxP78ueC5TjZ0TqwTtth%2FqIteosJtknvOYRkR7L%2BTezRH6gVR%2FMqMMPexV5T6WPsWojGuizizRJTCvw48YVcozkhQOFqXLEViWfIsM8oYy%2BvPDghUOTSpzDQ7hLjQefrgyzPINQ5RgTk592x9B39yKSpqYw4giqhDthHjQQnmE73wPBfPSd6kv3vGzSsh60UWUaHI3NKhwoZlG%2BqYLOyB3l5pnZSMEvOqEP8Axbt8hxEm9RsL1s24uAET1gzyV%2F7sASv5gkH%2FnwhWAIjB%2F%2F%2FqETMGMvwDiVAh54USTBCc5239hcLbrEF4uuK5FGDzc7oEbDsWRoAKm38dmwec9iUgwrHjXspvNhacwxo3evQY6pgGqXl0gjsb8AIUoCazT9VZa7FcamC1%2FFbGXzxMomqhOdku3BDw6T49uAudR2%2BbrxpSbHUAxmK8HBqmw%2FpvrwMzjmRw%2BpWcmqeCl7n9OermnK1EucFUm4FLes8EfBNuwjMLwMdu0xjBAxSSFzCKylzpeo0%2BuOhaEDtsH4y7q1GGapZocb7Yw1ODnhWv%2F%2FtFQxOnOkPlv6OeXh%2B5vQhKjP6N8uO4bTkQ2&X-Amz-Signature=a946e040672c940387da7fbdb26223914cdb7a7720a5b3436114ef50f8070415&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUP5KJC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPZn%2FIJA0qfvP98VK8fPBTQGQX65wMF9oepdolf%2B2kcAiB2aL50hA1QDN5BpNumNF6p2K2MTGO1O4c2cTdgNwLn2yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOhhZZLB7retmyg8KtwDbcIJiGF6350N2XX55WOtLEldmeP5L7ndhc4GVQTGwQpe%2Bv1nKLn%2BwrovpFzZQT281W805LDqeFUwKaoIkJ4kk%2Bc77%2FSqqy8B2NsbSolkQTF6Gt5Jnazxdq3Kn13j3fXnVHO0BjKLdMSM7LbNsN4929aUN%2BkftjiMZtg1VoYg1XX%2FkDEGsunPGMnNp1ssR19Z4Mo4C4uHQeNy2pgKszog3LKwclnYVBpRBKhAwSegzdYvp8fqvRj78TDC1E4XGqRrIm%2BoksG2EEPF4ON21dJ6GW9yWgyxP78ueC5TjZ0TqwTtth%2FqIteosJtknvOYRkR7L%2BTezRH6gVR%2FMqMMPexV5T6WPsWojGuizizRJTCvw48YVcozkhQOFqXLEViWfIsM8oYy%2BvPDghUOTSpzDQ7hLjQefrgyzPINQ5RgTk592x9B39yKSpqYw4giqhDthHjQQnmE73wPBfPSd6kv3vGzSsh60UWUaHI3NKhwoZlG%2BqYLOyB3l5pnZSMEvOqEP8Axbt8hxEm9RsL1s24uAET1gzyV%2F7sASv5gkH%2FnwhWAIjB%2F%2F%2FqETMGMvwDiVAh54USTBCc5239hcLbrEF4uuK5FGDzc7oEbDsWRoAKm38dmwec9iUgwrHjXspvNhacwxo3evQY6pgGqXl0gjsb8AIUoCazT9VZa7FcamC1%2FFbGXzxMomqhOdku3BDw6T49uAudR2%2BbrxpSbHUAxmK8HBqmw%2FpvrwMzjmRw%2BpWcmqeCl7n9OermnK1EucFUm4FLes8EfBNuwjMLwMdu0xjBAxSSFzCKylzpeo0%2BuOhaEDtsH4y7q1GGapZocb7Yw1ODnhWv%2F%2FtFQxOnOkPlv6OeXh%2B5vQhKjP6N8uO4bTkQ2&X-Amz-Signature=83eb404a4d253765f844ca1e0be99d60537296c717cc79df0c703827c107661c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
