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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJJNXBD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBUJqo0ukOGy6zHc92voYpIKtfvOl9XpDVIlmqosBMzMAiB%2FEtJ1lxkG004ZuNlKW8OxlJaEIQ9K9%2B01%2FtTQ7K2juyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4VGkzYEMdzjU%2Bf6zKtwDnUTxvxa8Q11reww3KjcHytXCf%2FYFRsa8OxOjJNY%2BPBy%2B2hkAjGP875cE77n3aO25t8V1SIGyuV3iK5N6r2pEYXM4ityuGvt4I%2FS7tK48mC2p9ngXhU%2Bk7SPU%2FG9r%2BCMJ5Egv%2FTNPoUiAMJcJocoRKGOM0UxUQ7F7I3JNlJbWxBEtsWm05A%2F8M27iCzI4uQPdY28qLkB9FMZo%2FcVGkc%2BLMtB3OVFT%2FHsDRmB5qce3ouBeR2W%2BhT9leQ1F9TQeaigOu9xniLXP%2FGnkjNL5eo0bCT5USK%2FqCdX5YSAy7K2E3uA51XptkvzQA0citkWNDD1bbGozlT7ccJRZFY8qa3LUzODkHhGqVMA6VQOv5W2zrTrv3of%2BsXI3UU2g3oYDlLQWo3q1CUHpSp5IvbXG6n%2FZgfRVY9GjzmTdSh9dJt4gyCz4mq7Djab3rp5%2BQL7Hk6i5c1tPUNgxWBLORrH%2FMYWzktbz%2BIXtgP2drop2Ds2X44mAp38BRgj79BO59EqmXBzEdwhI%2FgL1w8W9Hk37dnKpCGbj0%2Faw2xGs%2FjI4QCmClUu2SXDJCIiASm76Ntm4oVbGyrTpkZx%2FH0AUsUKqyYxYvC5TDFjIp8y3caTNcP4knhljVEXHEtpVVVsSUoYwm43tvwY6pgEbJmfM0Z25hBn0s496HeqrBDiI8paFWCpj65CxTRZ%2FksCGYu78JVFIWsiO5Z8669Eo2qT1PQvP%2FT2BXlK7wJndPQNyo9Wsi%2BltNE2q8H6GLg8KV%2F25rRGUtyquvVjvlnh%2FxDa6XWXrKtVy9A0ME1xJJJOZkNMPkWTnbo6ppZmnTz7KRwLJMH%2Brrk5krdEkI2YCsHMnInwkv8RM0%2FFFhQYgzxVZKQ9B&X-Amz-Signature=f74fc03ce432f382a1c96f47d87553d5aafcf6e69338689cbfaf1898718358c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJJNXBD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBUJqo0ukOGy6zHc92voYpIKtfvOl9XpDVIlmqosBMzMAiB%2FEtJ1lxkG004ZuNlKW8OxlJaEIQ9K9%2B01%2FtTQ7K2juyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4VGkzYEMdzjU%2Bf6zKtwDnUTxvxa8Q11reww3KjcHytXCf%2FYFRsa8OxOjJNY%2BPBy%2B2hkAjGP875cE77n3aO25t8V1SIGyuV3iK5N6r2pEYXM4ityuGvt4I%2FS7tK48mC2p9ngXhU%2Bk7SPU%2FG9r%2BCMJ5Egv%2FTNPoUiAMJcJocoRKGOM0UxUQ7F7I3JNlJbWxBEtsWm05A%2F8M27iCzI4uQPdY28qLkB9FMZo%2FcVGkc%2BLMtB3OVFT%2FHsDRmB5qce3ouBeR2W%2BhT9leQ1F9TQeaigOu9xniLXP%2FGnkjNL5eo0bCT5USK%2FqCdX5YSAy7K2E3uA51XptkvzQA0citkWNDD1bbGozlT7ccJRZFY8qa3LUzODkHhGqVMA6VQOv5W2zrTrv3of%2BsXI3UU2g3oYDlLQWo3q1CUHpSp5IvbXG6n%2FZgfRVY9GjzmTdSh9dJt4gyCz4mq7Djab3rp5%2BQL7Hk6i5c1tPUNgxWBLORrH%2FMYWzktbz%2BIXtgP2drop2Ds2X44mAp38BRgj79BO59EqmXBzEdwhI%2FgL1w8W9Hk37dnKpCGbj0%2Faw2xGs%2FjI4QCmClUu2SXDJCIiASm76Ntm4oVbGyrTpkZx%2FH0AUsUKqyYxYvC5TDFjIp8y3caTNcP4knhljVEXHEtpVVVsSUoYwm43tvwY6pgEbJmfM0Z25hBn0s496HeqrBDiI8paFWCpj65CxTRZ%2FksCGYu78JVFIWsiO5Z8669Eo2qT1PQvP%2FT2BXlK7wJndPQNyo9Wsi%2BltNE2q8H6GLg8KV%2F25rRGUtyquvVjvlnh%2FxDa6XWXrKtVy9A0ME1xJJJOZkNMPkWTnbo6ppZmnTz7KRwLJMH%2Brrk5krdEkI2YCsHMnInwkv8RM0%2FFFhQYgzxVZKQ9B&X-Amz-Signature=2c816d1e9cf8597c0a63605f8245233e58ac147f720eebc32d7303f1071db39b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJJNXBD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBUJqo0ukOGy6zHc92voYpIKtfvOl9XpDVIlmqosBMzMAiB%2FEtJ1lxkG004ZuNlKW8OxlJaEIQ9K9%2B01%2FtTQ7K2juyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4VGkzYEMdzjU%2Bf6zKtwDnUTxvxa8Q11reww3KjcHytXCf%2FYFRsa8OxOjJNY%2BPBy%2B2hkAjGP875cE77n3aO25t8V1SIGyuV3iK5N6r2pEYXM4ityuGvt4I%2FS7tK48mC2p9ngXhU%2Bk7SPU%2FG9r%2BCMJ5Egv%2FTNPoUiAMJcJocoRKGOM0UxUQ7F7I3JNlJbWxBEtsWm05A%2F8M27iCzI4uQPdY28qLkB9FMZo%2FcVGkc%2BLMtB3OVFT%2FHsDRmB5qce3ouBeR2W%2BhT9leQ1F9TQeaigOu9xniLXP%2FGnkjNL5eo0bCT5USK%2FqCdX5YSAy7K2E3uA51XptkvzQA0citkWNDD1bbGozlT7ccJRZFY8qa3LUzODkHhGqVMA6VQOv5W2zrTrv3of%2BsXI3UU2g3oYDlLQWo3q1CUHpSp5IvbXG6n%2FZgfRVY9GjzmTdSh9dJt4gyCz4mq7Djab3rp5%2BQL7Hk6i5c1tPUNgxWBLORrH%2FMYWzktbz%2BIXtgP2drop2Ds2X44mAp38BRgj79BO59EqmXBzEdwhI%2FgL1w8W9Hk37dnKpCGbj0%2Faw2xGs%2FjI4QCmClUu2SXDJCIiASm76Ntm4oVbGyrTpkZx%2FH0AUsUKqyYxYvC5TDFjIp8y3caTNcP4knhljVEXHEtpVVVsSUoYwm43tvwY6pgEbJmfM0Z25hBn0s496HeqrBDiI8paFWCpj65CxTRZ%2FksCGYu78JVFIWsiO5Z8669Eo2qT1PQvP%2FT2BXlK7wJndPQNyo9Wsi%2BltNE2q8H6GLg8KV%2F25rRGUtyquvVjvlnh%2FxDa6XWXrKtVy9A0ME1xJJJOZkNMPkWTnbo6ppZmnTz7KRwLJMH%2Brrk5krdEkI2YCsHMnInwkv8RM0%2FFFhQYgzxVZKQ9B&X-Amz-Signature=8c419cc58c52429795a0eeb58d4437865521a8dcedc311c1bbb72c74c3dfacf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJJNXBD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBUJqo0ukOGy6zHc92voYpIKtfvOl9XpDVIlmqosBMzMAiB%2FEtJ1lxkG004ZuNlKW8OxlJaEIQ9K9%2B01%2FtTQ7K2juyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4VGkzYEMdzjU%2Bf6zKtwDnUTxvxa8Q11reww3KjcHytXCf%2FYFRsa8OxOjJNY%2BPBy%2B2hkAjGP875cE77n3aO25t8V1SIGyuV3iK5N6r2pEYXM4ityuGvt4I%2FS7tK48mC2p9ngXhU%2Bk7SPU%2FG9r%2BCMJ5Egv%2FTNPoUiAMJcJocoRKGOM0UxUQ7F7I3JNlJbWxBEtsWm05A%2F8M27iCzI4uQPdY28qLkB9FMZo%2FcVGkc%2BLMtB3OVFT%2FHsDRmB5qce3ouBeR2W%2BhT9leQ1F9TQeaigOu9xniLXP%2FGnkjNL5eo0bCT5USK%2FqCdX5YSAy7K2E3uA51XptkvzQA0citkWNDD1bbGozlT7ccJRZFY8qa3LUzODkHhGqVMA6VQOv5W2zrTrv3of%2BsXI3UU2g3oYDlLQWo3q1CUHpSp5IvbXG6n%2FZgfRVY9GjzmTdSh9dJt4gyCz4mq7Djab3rp5%2BQL7Hk6i5c1tPUNgxWBLORrH%2FMYWzktbz%2BIXtgP2drop2Ds2X44mAp38BRgj79BO59EqmXBzEdwhI%2FgL1w8W9Hk37dnKpCGbj0%2Faw2xGs%2FjI4QCmClUu2SXDJCIiASm76Ntm4oVbGyrTpkZx%2FH0AUsUKqyYxYvC5TDFjIp8y3caTNcP4knhljVEXHEtpVVVsSUoYwm43tvwY6pgEbJmfM0Z25hBn0s496HeqrBDiI8paFWCpj65CxTRZ%2FksCGYu78JVFIWsiO5Z8669Eo2qT1PQvP%2FT2BXlK7wJndPQNyo9Wsi%2BltNE2q8H6GLg8KV%2F25rRGUtyquvVjvlnh%2FxDa6XWXrKtVy9A0ME1xJJJOZkNMPkWTnbo6ppZmnTz7KRwLJMH%2Brrk5krdEkI2YCsHMnInwkv8RM0%2FFFhQYgzxVZKQ9B&X-Amz-Signature=ce5c73685f25bf94443792ad158f1ccaa9b974d0398f0573677ba98bc09af02c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJJNXBD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBUJqo0ukOGy6zHc92voYpIKtfvOl9XpDVIlmqosBMzMAiB%2FEtJ1lxkG004ZuNlKW8OxlJaEIQ9K9%2B01%2FtTQ7K2juyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4VGkzYEMdzjU%2Bf6zKtwDnUTxvxa8Q11reww3KjcHytXCf%2FYFRsa8OxOjJNY%2BPBy%2B2hkAjGP875cE77n3aO25t8V1SIGyuV3iK5N6r2pEYXM4ityuGvt4I%2FS7tK48mC2p9ngXhU%2Bk7SPU%2FG9r%2BCMJ5Egv%2FTNPoUiAMJcJocoRKGOM0UxUQ7F7I3JNlJbWxBEtsWm05A%2F8M27iCzI4uQPdY28qLkB9FMZo%2FcVGkc%2BLMtB3OVFT%2FHsDRmB5qce3ouBeR2W%2BhT9leQ1F9TQeaigOu9xniLXP%2FGnkjNL5eo0bCT5USK%2FqCdX5YSAy7K2E3uA51XptkvzQA0citkWNDD1bbGozlT7ccJRZFY8qa3LUzODkHhGqVMA6VQOv5W2zrTrv3of%2BsXI3UU2g3oYDlLQWo3q1CUHpSp5IvbXG6n%2FZgfRVY9GjzmTdSh9dJt4gyCz4mq7Djab3rp5%2BQL7Hk6i5c1tPUNgxWBLORrH%2FMYWzktbz%2BIXtgP2drop2Ds2X44mAp38BRgj79BO59EqmXBzEdwhI%2FgL1w8W9Hk37dnKpCGbj0%2Faw2xGs%2FjI4QCmClUu2SXDJCIiASm76Ntm4oVbGyrTpkZx%2FH0AUsUKqyYxYvC5TDFjIp8y3caTNcP4knhljVEXHEtpVVVsSUoYwm43tvwY6pgEbJmfM0Z25hBn0s496HeqrBDiI8paFWCpj65CxTRZ%2FksCGYu78JVFIWsiO5Z8669Eo2qT1PQvP%2FT2BXlK7wJndPQNyo9Wsi%2BltNE2q8H6GLg8KV%2F25rRGUtyquvVjvlnh%2FxDa6XWXrKtVy9A0ME1xJJJOZkNMPkWTnbo6ppZmnTz7KRwLJMH%2Brrk5krdEkI2YCsHMnInwkv8RM0%2FFFhQYgzxVZKQ9B&X-Amz-Signature=afdedcb1d3117ba3a913aa1305884d701526e0881cb09be89c71201efa9cdc3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
