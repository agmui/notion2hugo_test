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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645H4QHWD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtUWTc%2B3B9d9NjFt0YHKEBdQoct8k%2FauK%2BIRO9wyxtCAiBKuQE1XEXAJJiMiFJ%2FZ8aBzKNDyykM1bWxlLO34C7z3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ZMnTUblM2jCtLUPKtwDGZpKCwGIqmElUffuSQ2IEjvXbE2bMi4c55XXBhAFZNv6yoJXDWmqokU3jaGDHQapQjKOktZq6HSZzT9eT3TB9HEsFslENN%2BMuN34ToiUyqDaDNGvI1zl7FeiJ4DGGr0KYkKmcpnQ5FwO7GvyFHgqKU5tP6DRScXkjZyaw28fznFnjsP5vPV5MASO0mnvUSgn1pv3ULi%2BDjhQl8gk5MGU5xniBemUz2hlwyosCZyQRyrGFmHaaaRiI47qKiRC1fUjSloaOKSb726%2Fcm70YsrwZzHxXfkH796nnZNjf59p8NNgaBzcfCIjnwGwInWOVX4kWSFY5ID%2FxTKuGUyHqzJfIWJEkS1Z%2BM5lGQ2I8caLJu8vm%2BNXcFrMJ%2Bktu%2BCnvkgu2g%2BtZPouhdH%2BraS8Bb5VyEDwW5z67JQRARMlT9gBZnHrNZ08U3mX8kWdq7mW%2FYRviPC0fFlm2wSn8QXRzP%2Brv%2FsiGc4Hd7eN8PYKK6zPLJYdSj0xCmr5rcxSsC901WID5ObvjEa8vzJhffGaAKN2inH0skwP5DLMQqYLnesBbgXqXdG4McYUXjZp0xTBR0mehRuUcTMRcRDBfzRtS9R0EooxDeliWVMGac2PGNNcfaxKFn1mmVEe48w27iAwjZDbwgY6pgEvn1nO0a57UDQR87EJyvhebOeAhVShxYLamvCnZTYgNL9Lq%2BNWj6bERK%2BxoJU8WFFbP7rZVXk7UNz19g%2FRdnbVyVjQxxwwrIPEJ2hDaiRDk8I%2BH4eMcHXQIC29LYodoYFdmXtqlCXn3ZguzGQVli14g25HzJ5jJMpsDs%2Bg%2FfBnbtLIpfHJ6kdy9bV05Ms6MtR%2B1jrznup7sobIsYaISBfRBwbgjLuU&X-Amz-Signature=40ef9aeb0f713f1e5994824493458d9e39d17ce7ef5f8680ed4303eee0e71fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645H4QHWD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtUWTc%2B3B9d9NjFt0YHKEBdQoct8k%2FauK%2BIRO9wyxtCAiBKuQE1XEXAJJiMiFJ%2FZ8aBzKNDyykM1bWxlLO34C7z3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ZMnTUblM2jCtLUPKtwDGZpKCwGIqmElUffuSQ2IEjvXbE2bMi4c55XXBhAFZNv6yoJXDWmqokU3jaGDHQapQjKOktZq6HSZzT9eT3TB9HEsFslENN%2BMuN34ToiUyqDaDNGvI1zl7FeiJ4DGGr0KYkKmcpnQ5FwO7GvyFHgqKU5tP6DRScXkjZyaw28fznFnjsP5vPV5MASO0mnvUSgn1pv3ULi%2BDjhQl8gk5MGU5xniBemUz2hlwyosCZyQRyrGFmHaaaRiI47qKiRC1fUjSloaOKSb726%2Fcm70YsrwZzHxXfkH796nnZNjf59p8NNgaBzcfCIjnwGwInWOVX4kWSFY5ID%2FxTKuGUyHqzJfIWJEkS1Z%2BM5lGQ2I8caLJu8vm%2BNXcFrMJ%2Bktu%2BCnvkgu2g%2BtZPouhdH%2BraS8Bb5VyEDwW5z67JQRARMlT9gBZnHrNZ08U3mX8kWdq7mW%2FYRviPC0fFlm2wSn8QXRzP%2Brv%2FsiGc4Hd7eN8PYKK6zPLJYdSj0xCmr5rcxSsC901WID5ObvjEa8vzJhffGaAKN2inH0skwP5DLMQqYLnesBbgXqXdG4McYUXjZp0xTBR0mehRuUcTMRcRDBfzRtS9R0EooxDeliWVMGac2PGNNcfaxKFn1mmVEe48w27iAwjZDbwgY6pgEvn1nO0a57UDQR87EJyvhebOeAhVShxYLamvCnZTYgNL9Lq%2BNWj6bERK%2BxoJU8WFFbP7rZVXk7UNz19g%2FRdnbVyVjQxxwwrIPEJ2hDaiRDk8I%2BH4eMcHXQIC29LYodoYFdmXtqlCXn3ZguzGQVli14g25HzJ5jJMpsDs%2Bg%2FfBnbtLIpfHJ6kdy9bV05Ms6MtR%2B1jrznup7sobIsYaISBfRBwbgjLuU&X-Amz-Signature=3ae9a28b408e4ab615550380ebdaf1c0e001d2ccfcfacc46cfa0afae5ec8f598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645H4QHWD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtUWTc%2B3B9d9NjFt0YHKEBdQoct8k%2FauK%2BIRO9wyxtCAiBKuQE1XEXAJJiMiFJ%2FZ8aBzKNDyykM1bWxlLO34C7z3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ZMnTUblM2jCtLUPKtwDGZpKCwGIqmElUffuSQ2IEjvXbE2bMi4c55XXBhAFZNv6yoJXDWmqokU3jaGDHQapQjKOktZq6HSZzT9eT3TB9HEsFslENN%2BMuN34ToiUyqDaDNGvI1zl7FeiJ4DGGr0KYkKmcpnQ5FwO7GvyFHgqKU5tP6DRScXkjZyaw28fznFnjsP5vPV5MASO0mnvUSgn1pv3ULi%2BDjhQl8gk5MGU5xniBemUz2hlwyosCZyQRyrGFmHaaaRiI47qKiRC1fUjSloaOKSb726%2Fcm70YsrwZzHxXfkH796nnZNjf59p8NNgaBzcfCIjnwGwInWOVX4kWSFY5ID%2FxTKuGUyHqzJfIWJEkS1Z%2BM5lGQ2I8caLJu8vm%2BNXcFrMJ%2Bktu%2BCnvkgu2g%2BtZPouhdH%2BraS8Bb5VyEDwW5z67JQRARMlT9gBZnHrNZ08U3mX8kWdq7mW%2FYRviPC0fFlm2wSn8QXRzP%2Brv%2FsiGc4Hd7eN8PYKK6zPLJYdSj0xCmr5rcxSsC901WID5ObvjEa8vzJhffGaAKN2inH0skwP5DLMQqYLnesBbgXqXdG4McYUXjZp0xTBR0mehRuUcTMRcRDBfzRtS9R0EooxDeliWVMGac2PGNNcfaxKFn1mmVEe48w27iAwjZDbwgY6pgEvn1nO0a57UDQR87EJyvhebOeAhVShxYLamvCnZTYgNL9Lq%2BNWj6bERK%2BxoJU8WFFbP7rZVXk7UNz19g%2FRdnbVyVjQxxwwrIPEJ2hDaiRDk8I%2BH4eMcHXQIC29LYodoYFdmXtqlCXn3ZguzGQVli14g25HzJ5jJMpsDs%2Bg%2FfBnbtLIpfHJ6kdy9bV05Ms6MtR%2B1jrznup7sobIsYaISBfRBwbgjLuU&X-Amz-Signature=1d6aff0419089dfa501baf78638119e8ecffaba3f6cf4e15b0143c04c8bed793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645H4QHWD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtUWTc%2B3B9d9NjFt0YHKEBdQoct8k%2FauK%2BIRO9wyxtCAiBKuQE1XEXAJJiMiFJ%2FZ8aBzKNDyykM1bWxlLO34C7z3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ZMnTUblM2jCtLUPKtwDGZpKCwGIqmElUffuSQ2IEjvXbE2bMi4c55XXBhAFZNv6yoJXDWmqokU3jaGDHQapQjKOktZq6HSZzT9eT3TB9HEsFslENN%2BMuN34ToiUyqDaDNGvI1zl7FeiJ4DGGr0KYkKmcpnQ5FwO7GvyFHgqKU5tP6DRScXkjZyaw28fznFnjsP5vPV5MASO0mnvUSgn1pv3ULi%2BDjhQl8gk5MGU5xniBemUz2hlwyosCZyQRyrGFmHaaaRiI47qKiRC1fUjSloaOKSb726%2Fcm70YsrwZzHxXfkH796nnZNjf59p8NNgaBzcfCIjnwGwInWOVX4kWSFY5ID%2FxTKuGUyHqzJfIWJEkS1Z%2BM5lGQ2I8caLJu8vm%2BNXcFrMJ%2Bktu%2BCnvkgu2g%2BtZPouhdH%2BraS8Bb5VyEDwW5z67JQRARMlT9gBZnHrNZ08U3mX8kWdq7mW%2FYRviPC0fFlm2wSn8QXRzP%2Brv%2FsiGc4Hd7eN8PYKK6zPLJYdSj0xCmr5rcxSsC901WID5ObvjEa8vzJhffGaAKN2inH0skwP5DLMQqYLnesBbgXqXdG4McYUXjZp0xTBR0mehRuUcTMRcRDBfzRtS9R0EooxDeliWVMGac2PGNNcfaxKFn1mmVEe48w27iAwjZDbwgY6pgEvn1nO0a57UDQR87EJyvhebOeAhVShxYLamvCnZTYgNL9Lq%2BNWj6bERK%2BxoJU8WFFbP7rZVXk7UNz19g%2FRdnbVyVjQxxwwrIPEJ2hDaiRDk8I%2BH4eMcHXQIC29LYodoYFdmXtqlCXn3ZguzGQVli14g25HzJ5jJMpsDs%2Bg%2FfBnbtLIpfHJ6kdy9bV05Ms6MtR%2B1jrznup7sobIsYaISBfRBwbgjLuU&X-Amz-Signature=a253b0af7e298cecb2fe001cc26ec61d1a1de38aad3d5a7f77b0e77025527459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645H4QHWD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtUWTc%2B3B9d9NjFt0YHKEBdQoct8k%2FauK%2BIRO9wyxtCAiBKuQE1XEXAJJiMiFJ%2FZ8aBzKNDyykM1bWxlLO34C7z3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ZMnTUblM2jCtLUPKtwDGZpKCwGIqmElUffuSQ2IEjvXbE2bMi4c55XXBhAFZNv6yoJXDWmqokU3jaGDHQapQjKOktZq6HSZzT9eT3TB9HEsFslENN%2BMuN34ToiUyqDaDNGvI1zl7FeiJ4DGGr0KYkKmcpnQ5FwO7GvyFHgqKU5tP6DRScXkjZyaw28fznFnjsP5vPV5MASO0mnvUSgn1pv3ULi%2BDjhQl8gk5MGU5xniBemUz2hlwyosCZyQRyrGFmHaaaRiI47qKiRC1fUjSloaOKSb726%2Fcm70YsrwZzHxXfkH796nnZNjf59p8NNgaBzcfCIjnwGwInWOVX4kWSFY5ID%2FxTKuGUyHqzJfIWJEkS1Z%2BM5lGQ2I8caLJu8vm%2BNXcFrMJ%2Bktu%2BCnvkgu2g%2BtZPouhdH%2BraS8Bb5VyEDwW5z67JQRARMlT9gBZnHrNZ08U3mX8kWdq7mW%2FYRviPC0fFlm2wSn8QXRzP%2Brv%2FsiGc4Hd7eN8PYKK6zPLJYdSj0xCmr5rcxSsC901WID5ObvjEa8vzJhffGaAKN2inH0skwP5DLMQqYLnesBbgXqXdG4McYUXjZp0xTBR0mehRuUcTMRcRDBfzRtS9R0EooxDeliWVMGac2PGNNcfaxKFn1mmVEe48w27iAwjZDbwgY6pgEvn1nO0a57UDQR87EJyvhebOeAhVShxYLamvCnZTYgNL9Lq%2BNWj6bERK%2BxoJU8WFFbP7rZVXk7UNz19g%2FRdnbVyVjQxxwwrIPEJ2hDaiRDk8I%2BH4eMcHXQIC29LYodoYFdmXtqlCXn3ZguzGQVli14g25HzJ5jJMpsDs%2Bg%2FfBnbtLIpfHJ6kdy9bV05Ms6MtR%2B1jrznup7sobIsYaISBfRBwbgjLuU&X-Amz-Signature=b808ba58e75f6a7a43387d95be5c71f9617a7b973b39a21fba6949475be43316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
