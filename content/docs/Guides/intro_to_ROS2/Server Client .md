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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGKFJNU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4WWCiwzzgu4ZUjPztbE8Qgw6VHv3jkJqjQlvSGS9x6AiAkLXgeQG35%2FTeJSep6WpG2OLbI%2FOh2wA70ishT9EEEqyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6phxOiLR31sv7UaGKtwD4PSFEEOfNrRiQGmrGzJ%2Fl0fkq9hP3D9V5igkaSFnlTx%2BSu%2FLv7a46F9hAXnqDIlY%2Bj%2FwWEYYdZVPyRoFC3D3px9yuhrRoVhlArnyxkY0YR161MPU8OIjD5tUefd9EPWxfejmYq7Z%2BiBkXb%2BD1AWqL%2BSMvfcslS2kEk6hI2jxFGCVZGZVxy4oOaAqo4xBu8LTjPD1Q6oD9oPG3RfjyrgRDaeKtBp4mqlLlFjaQePMb1LH7m43sQ6HD6dJC%2BXfpG8PrbABno%2F7mC1M8ZuxFKSXBQsMS87MsX%2BjCodNmV4sTa%2FZWYSRUdFelPtY3W35%2FrROuTkuZs7s%2BQWiA2ia9wP92Nrvw1rhLeYKjVkfzbObnn6Onz6gm24uYfk5YNXIpDD%2Fvkbm7gjpE8uksX2gA2dpahfKPg6cgWfeXrnOuZwj3QnrisrZwU0wybu88x6ft9YoHPnYu%2B383W58N3lSl6AUw6SSvn5S2cC61kbGa3lxp%2BFEVQw3PyJTECOhW%2Fnj17TDbNwHormFrG%2BiCVUvtTFZeuDpygjbfgupksIkSgdk27VsFcXx4Npz0pV%2Bta0qlbE85h9MsZoGwrFLUXHA6mJi3jF6zT4%2FzU1QaWssr9jyxf78iLseK5j0Hegx3tYw2vbjvQY6pgFajQBHjcrmP2gUHSNRuEfctQXd3LjTnWjyir%2BlB%2BiUruJ2eoOlqEzLoUEUHCsA%2BBqqJowz2DAh1%2BWto3e4pzccI5HXy8u6xNs9zlU5p7icSGIydrcpbHyZQtV9zzmCAThpT110M37hKypmaF1lDrBUo6vtFxumEVAOfQagK4koueV10HC7PQh0VoQ2173aQojXaBI8y9SHYD4ObcbVGqa8%2FEBywkJg&X-Amz-Signature=ba5bdcba3461e1f7847f951510435f40d7cef2157d9500f29d9915d9ea6ab438&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGKFJNU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4WWCiwzzgu4ZUjPztbE8Qgw6VHv3jkJqjQlvSGS9x6AiAkLXgeQG35%2FTeJSep6WpG2OLbI%2FOh2wA70ishT9EEEqyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6phxOiLR31sv7UaGKtwD4PSFEEOfNrRiQGmrGzJ%2Fl0fkq9hP3D9V5igkaSFnlTx%2BSu%2FLv7a46F9hAXnqDIlY%2Bj%2FwWEYYdZVPyRoFC3D3px9yuhrRoVhlArnyxkY0YR161MPU8OIjD5tUefd9EPWxfejmYq7Z%2BiBkXb%2BD1AWqL%2BSMvfcslS2kEk6hI2jxFGCVZGZVxy4oOaAqo4xBu8LTjPD1Q6oD9oPG3RfjyrgRDaeKtBp4mqlLlFjaQePMb1LH7m43sQ6HD6dJC%2BXfpG8PrbABno%2F7mC1M8ZuxFKSXBQsMS87MsX%2BjCodNmV4sTa%2FZWYSRUdFelPtY3W35%2FrROuTkuZs7s%2BQWiA2ia9wP92Nrvw1rhLeYKjVkfzbObnn6Onz6gm24uYfk5YNXIpDD%2Fvkbm7gjpE8uksX2gA2dpahfKPg6cgWfeXrnOuZwj3QnrisrZwU0wybu88x6ft9YoHPnYu%2B383W58N3lSl6AUw6SSvn5S2cC61kbGa3lxp%2BFEVQw3PyJTECOhW%2Fnj17TDbNwHormFrG%2BiCVUvtTFZeuDpygjbfgupksIkSgdk27VsFcXx4Npz0pV%2Bta0qlbE85h9MsZoGwrFLUXHA6mJi3jF6zT4%2FzU1QaWssr9jyxf78iLseK5j0Hegx3tYw2vbjvQY6pgFajQBHjcrmP2gUHSNRuEfctQXd3LjTnWjyir%2BlB%2BiUruJ2eoOlqEzLoUEUHCsA%2BBqqJowz2DAh1%2BWto3e4pzccI5HXy8u6xNs9zlU5p7icSGIydrcpbHyZQtV9zzmCAThpT110M37hKypmaF1lDrBUo6vtFxumEVAOfQagK4koueV10HC7PQh0VoQ2173aQojXaBI8y9SHYD4ObcbVGqa8%2FEBywkJg&X-Amz-Signature=57ac3f242f44d4f55580d1095e9c03a7c3cdc9e1ac7bd968d9595d4042833f12&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGKFJNU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4WWCiwzzgu4ZUjPztbE8Qgw6VHv3jkJqjQlvSGS9x6AiAkLXgeQG35%2FTeJSep6WpG2OLbI%2FOh2wA70ishT9EEEqyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6phxOiLR31sv7UaGKtwD4PSFEEOfNrRiQGmrGzJ%2Fl0fkq9hP3D9V5igkaSFnlTx%2BSu%2FLv7a46F9hAXnqDIlY%2Bj%2FwWEYYdZVPyRoFC3D3px9yuhrRoVhlArnyxkY0YR161MPU8OIjD5tUefd9EPWxfejmYq7Z%2BiBkXb%2BD1AWqL%2BSMvfcslS2kEk6hI2jxFGCVZGZVxy4oOaAqo4xBu8LTjPD1Q6oD9oPG3RfjyrgRDaeKtBp4mqlLlFjaQePMb1LH7m43sQ6HD6dJC%2BXfpG8PrbABno%2F7mC1M8ZuxFKSXBQsMS87MsX%2BjCodNmV4sTa%2FZWYSRUdFelPtY3W35%2FrROuTkuZs7s%2BQWiA2ia9wP92Nrvw1rhLeYKjVkfzbObnn6Onz6gm24uYfk5YNXIpDD%2Fvkbm7gjpE8uksX2gA2dpahfKPg6cgWfeXrnOuZwj3QnrisrZwU0wybu88x6ft9YoHPnYu%2B383W58N3lSl6AUw6SSvn5S2cC61kbGa3lxp%2BFEVQw3PyJTECOhW%2Fnj17TDbNwHormFrG%2BiCVUvtTFZeuDpygjbfgupksIkSgdk27VsFcXx4Npz0pV%2Bta0qlbE85h9MsZoGwrFLUXHA6mJi3jF6zT4%2FzU1QaWssr9jyxf78iLseK5j0Hegx3tYw2vbjvQY6pgFajQBHjcrmP2gUHSNRuEfctQXd3LjTnWjyir%2BlB%2BiUruJ2eoOlqEzLoUEUHCsA%2BBqqJowz2DAh1%2BWto3e4pzccI5HXy8u6xNs9zlU5p7icSGIydrcpbHyZQtV9zzmCAThpT110M37hKypmaF1lDrBUo6vtFxumEVAOfQagK4koueV10HC7PQh0VoQ2173aQojXaBI8y9SHYD4ObcbVGqa8%2FEBywkJg&X-Amz-Signature=ba7c028c04dbee6da99175ced455a009952fddd569307b609d3eba0b8d080dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGKFJNU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4WWCiwzzgu4ZUjPztbE8Qgw6VHv3jkJqjQlvSGS9x6AiAkLXgeQG35%2FTeJSep6WpG2OLbI%2FOh2wA70ishT9EEEqyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6phxOiLR31sv7UaGKtwD4PSFEEOfNrRiQGmrGzJ%2Fl0fkq9hP3D9V5igkaSFnlTx%2BSu%2FLv7a46F9hAXnqDIlY%2Bj%2FwWEYYdZVPyRoFC3D3px9yuhrRoVhlArnyxkY0YR161MPU8OIjD5tUefd9EPWxfejmYq7Z%2BiBkXb%2BD1AWqL%2BSMvfcslS2kEk6hI2jxFGCVZGZVxy4oOaAqo4xBu8LTjPD1Q6oD9oPG3RfjyrgRDaeKtBp4mqlLlFjaQePMb1LH7m43sQ6HD6dJC%2BXfpG8PrbABno%2F7mC1M8ZuxFKSXBQsMS87MsX%2BjCodNmV4sTa%2FZWYSRUdFelPtY3W35%2FrROuTkuZs7s%2BQWiA2ia9wP92Nrvw1rhLeYKjVkfzbObnn6Onz6gm24uYfk5YNXIpDD%2Fvkbm7gjpE8uksX2gA2dpahfKPg6cgWfeXrnOuZwj3QnrisrZwU0wybu88x6ft9YoHPnYu%2B383W58N3lSl6AUw6SSvn5S2cC61kbGa3lxp%2BFEVQw3PyJTECOhW%2Fnj17TDbNwHormFrG%2BiCVUvtTFZeuDpygjbfgupksIkSgdk27VsFcXx4Npz0pV%2Bta0qlbE85h9MsZoGwrFLUXHA6mJi3jF6zT4%2FzU1QaWssr9jyxf78iLseK5j0Hegx3tYw2vbjvQY6pgFajQBHjcrmP2gUHSNRuEfctQXd3LjTnWjyir%2BlB%2BiUruJ2eoOlqEzLoUEUHCsA%2BBqqJowz2DAh1%2BWto3e4pzccI5HXy8u6xNs9zlU5p7icSGIydrcpbHyZQtV9zzmCAThpT110M37hKypmaF1lDrBUo6vtFxumEVAOfQagK4koueV10HC7PQh0VoQ2173aQojXaBI8y9SHYD4ObcbVGqa8%2FEBywkJg&X-Amz-Signature=f74b32031177ad28d45734ce33bdaf0643f560ca529d72cf365e923e23b0c679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGKFJNU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4WWCiwzzgu4ZUjPztbE8Qgw6VHv3jkJqjQlvSGS9x6AiAkLXgeQG35%2FTeJSep6WpG2OLbI%2FOh2wA70ishT9EEEqyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6phxOiLR31sv7UaGKtwD4PSFEEOfNrRiQGmrGzJ%2Fl0fkq9hP3D9V5igkaSFnlTx%2BSu%2FLv7a46F9hAXnqDIlY%2Bj%2FwWEYYdZVPyRoFC3D3px9yuhrRoVhlArnyxkY0YR161MPU8OIjD5tUefd9EPWxfejmYq7Z%2BiBkXb%2BD1AWqL%2BSMvfcslS2kEk6hI2jxFGCVZGZVxy4oOaAqo4xBu8LTjPD1Q6oD9oPG3RfjyrgRDaeKtBp4mqlLlFjaQePMb1LH7m43sQ6HD6dJC%2BXfpG8PrbABno%2F7mC1M8ZuxFKSXBQsMS87MsX%2BjCodNmV4sTa%2FZWYSRUdFelPtY3W35%2FrROuTkuZs7s%2BQWiA2ia9wP92Nrvw1rhLeYKjVkfzbObnn6Onz6gm24uYfk5YNXIpDD%2Fvkbm7gjpE8uksX2gA2dpahfKPg6cgWfeXrnOuZwj3QnrisrZwU0wybu88x6ft9YoHPnYu%2B383W58N3lSl6AUw6SSvn5S2cC61kbGa3lxp%2BFEVQw3PyJTECOhW%2Fnj17TDbNwHormFrG%2BiCVUvtTFZeuDpygjbfgupksIkSgdk27VsFcXx4Npz0pV%2Bta0qlbE85h9MsZoGwrFLUXHA6mJi3jF6zT4%2FzU1QaWssr9jyxf78iLseK5j0Hegx3tYw2vbjvQY6pgFajQBHjcrmP2gUHSNRuEfctQXd3LjTnWjyir%2BlB%2BiUruJ2eoOlqEzLoUEUHCsA%2BBqqJowz2DAh1%2BWto3e4pzccI5HXy8u6xNs9zlU5p7icSGIydrcpbHyZQtV9zzmCAThpT110M37hKypmaF1lDrBUo6vtFxumEVAOfQagK4koueV10HC7PQh0VoQ2173aQojXaBI8y9SHYD4ObcbVGqa8%2FEBywkJg&X-Amz-Signature=92c86ffed7404576b342ef9abe3219ce257d1836494e700576d789c4b3e12fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
