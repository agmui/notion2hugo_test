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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ7UEIK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7K3Z1vXVTcY6j8PCaSE9qr5CoHjQh2F5o7RT9%2Fon2kQIhAIDlsmMqQgCD5eMbVoRzWget6Acuhpt%2BZ6GtXvZCOGACKv8DCFMQABoMNjM3NDIzMTgzODA1IgwaNOi4QE3RGPWctssq3AOXlF86o2TZWfTG2cvn6KkCJ1rVPT1QCN6%2BSO6qL%2FKPUJ5WhotJtrmr7%2BGbfNl0r27h%2FjWjhLCQQNF11I5I%2FtXN6tx%2Bp6hdLp0GHCzx%2BxteSqVMYwi5Z2h3b4ngTZtGJNyc%2FMXfab7Wu1eLjC%2F2HRinPZzHLkYqcEDhNG1p8v7wVfVa6Kh60YAPvRiMR1bybLso7U8I8vJPSA0e0engnW4AxrU2mwzKez%2FfUPd7p3bcPwkeN5VSckLUFWOj%2FbLykevixLn2IggW03KZXmVQg6q7iTWnHG0yY4yd2TafWe6GA9Z7AtpWarbvNk96JUS64lW916VX8UCBWqxLFMMqXCeWoJbU6DW0biP9sfO2qlWoauXgq6vGkH7tkUKGsXs7ynr4zjjCNKDNdWhKHsdQ91gGx%2F%2BcbOYPWh5EoazIri74uCpy1RPpnOrdqIkySmam5C1I76nEdIifLjtMS7YdOS0ZmmOF1rqUZhyDPh%2FB5R39q9eadPcawoAqBrzZqJeEiFy5D5513Xwi7%2BBpsMRi7TdS6ru2qjzeVfzbAxWW8auGMt%2BVCAB1KnBipMVh2YcNYYHuJRBLlILHZ%2BMHkWazJcfn4LpwXNuTcds8henWeyIF5f5j62Ls3SUzQjtSBTCm3J%2FBBjqkAZibrfv07TjmRHmSacp2ig4QoaVB40j0f1C1god19a46fdhN%2FC2yYVvX5pzqc6xKWbB4geD%2FpH6g0fYS4HOfpji4M4kD44q3HtJcjT4nxtJrX52V5yY2Ch9HGArwFLfWDurb06ioMBHJzq5RzEb7IRhd%2Fhrf6%2BMoq9Ehk7GQZQz%2BFdjNy42Ww6gc8OyskqA%2BnIQcbC174YMApcpCEI%2Fz6oWAfFBm&X-Amz-Signature=1eb963e30fb0d3bc13645da48f9c24e88ec24de62ee5553e2bb807635ea3f9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ7UEIK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7K3Z1vXVTcY6j8PCaSE9qr5CoHjQh2F5o7RT9%2Fon2kQIhAIDlsmMqQgCD5eMbVoRzWget6Acuhpt%2BZ6GtXvZCOGACKv8DCFMQABoMNjM3NDIzMTgzODA1IgwaNOi4QE3RGPWctssq3AOXlF86o2TZWfTG2cvn6KkCJ1rVPT1QCN6%2BSO6qL%2FKPUJ5WhotJtrmr7%2BGbfNl0r27h%2FjWjhLCQQNF11I5I%2FtXN6tx%2Bp6hdLp0GHCzx%2BxteSqVMYwi5Z2h3b4ngTZtGJNyc%2FMXfab7Wu1eLjC%2F2HRinPZzHLkYqcEDhNG1p8v7wVfVa6Kh60YAPvRiMR1bybLso7U8I8vJPSA0e0engnW4AxrU2mwzKez%2FfUPd7p3bcPwkeN5VSckLUFWOj%2FbLykevixLn2IggW03KZXmVQg6q7iTWnHG0yY4yd2TafWe6GA9Z7AtpWarbvNk96JUS64lW916VX8UCBWqxLFMMqXCeWoJbU6DW0biP9sfO2qlWoauXgq6vGkH7tkUKGsXs7ynr4zjjCNKDNdWhKHsdQ91gGx%2F%2BcbOYPWh5EoazIri74uCpy1RPpnOrdqIkySmam5C1I76nEdIifLjtMS7YdOS0ZmmOF1rqUZhyDPh%2FB5R39q9eadPcawoAqBrzZqJeEiFy5D5513Xwi7%2BBpsMRi7TdS6ru2qjzeVfzbAxWW8auGMt%2BVCAB1KnBipMVh2YcNYYHuJRBLlILHZ%2BMHkWazJcfn4LpwXNuTcds8henWeyIF5f5j62Ls3SUzQjtSBTCm3J%2FBBjqkAZibrfv07TjmRHmSacp2ig4QoaVB40j0f1C1god19a46fdhN%2FC2yYVvX5pzqc6xKWbB4geD%2FpH6g0fYS4HOfpji4M4kD44q3HtJcjT4nxtJrX52V5yY2Ch9HGArwFLfWDurb06ioMBHJzq5RzEb7IRhd%2Fhrf6%2BMoq9Ehk7GQZQz%2BFdjNy42Ww6gc8OyskqA%2BnIQcbC174YMApcpCEI%2Fz6oWAfFBm&X-Amz-Signature=0f66a2588627a13fe3359f8955c0368455748371811e06135fd0a653e753c0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ7UEIK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7K3Z1vXVTcY6j8PCaSE9qr5CoHjQh2F5o7RT9%2Fon2kQIhAIDlsmMqQgCD5eMbVoRzWget6Acuhpt%2BZ6GtXvZCOGACKv8DCFMQABoMNjM3NDIzMTgzODA1IgwaNOi4QE3RGPWctssq3AOXlF86o2TZWfTG2cvn6KkCJ1rVPT1QCN6%2BSO6qL%2FKPUJ5WhotJtrmr7%2BGbfNl0r27h%2FjWjhLCQQNF11I5I%2FtXN6tx%2Bp6hdLp0GHCzx%2BxteSqVMYwi5Z2h3b4ngTZtGJNyc%2FMXfab7Wu1eLjC%2F2HRinPZzHLkYqcEDhNG1p8v7wVfVa6Kh60YAPvRiMR1bybLso7U8I8vJPSA0e0engnW4AxrU2mwzKez%2FfUPd7p3bcPwkeN5VSckLUFWOj%2FbLykevixLn2IggW03KZXmVQg6q7iTWnHG0yY4yd2TafWe6GA9Z7AtpWarbvNk96JUS64lW916VX8UCBWqxLFMMqXCeWoJbU6DW0biP9sfO2qlWoauXgq6vGkH7tkUKGsXs7ynr4zjjCNKDNdWhKHsdQ91gGx%2F%2BcbOYPWh5EoazIri74uCpy1RPpnOrdqIkySmam5C1I76nEdIifLjtMS7YdOS0ZmmOF1rqUZhyDPh%2FB5R39q9eadPcawoAqBrzZqJeEiFy5D5513Xwi7%2BBpsMRi7TdS6ru2qjzeVfzbAxWW8auGMt%2BVCAB1KnBipMVh2YcNYYHuJRBLlILHZ%2BMHkWazJcfn4LpwXNuTcds8henWeyIF5f5j62Ls3SUzQjtSBTCm3J%2FBBjqkAZibrfv07TjmRHmSacp2ig4QoaVB40j0f1C1god19a46fdhN%2FC2yYVvX5pzqc6xKWbB4geD%2FpH6g0fYS4HOfpji4M4kD44q3HtJcjT4nxtJrX52V5yY2Ch9HGArwFLfWDurb06ioMBHJzq5RzEb7IRhd%2Fhrf6%2BMoq9Ehk7GQZQz%2BFdjNy42Ww6gc8OyskqA%2BnIQcbC174YMApcpCEI%2Fz6oWAfFBm&X-Amz-Signature=6e4b58a2c241d204536f8b8a29cd72452bb53451ab19b386f8587e95f9defd37&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ7UEIK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7K3Z1vXVTcY6j8PCaSE9qr5CoHjQh2F5o7RT9%2Fon2kQIhAIDlsmMqQgCD5eMbVoRzWget6Acuhpt%2BZ6GtXvZCOGACKv8DCFMQABoMNjM3NDIzMTgzODA1IgwaNOi4QE3RGPWctssq3AOXlF86o2TZWfTG2cvn6KkCJ1rVPT1QCN6%2BSO6qL%2FKPUJ5WhotJtrmr7%2BGbfNl0r27h%2FjWjhLCQQNF11I5I%2FtXN6tx%2Bp6hdLp0GHCzx%2BxteSqVMYwi5Z2h3b4ngTZtGJNyc%2FMXfab7Wu1eLjC%2F2HRinPZzHLkYqcEDhNG1p8v7wVfVa6Kh60YAPvRiMR1bybLso7U8I8vJPSA0e0engnW4AxrU2mwzKez%2FfUPd7p3bcPwkeN5VSckLUFWOj%2FbLykevixLn2IggW03KZXmVQg6q7iTWnHG0yY4yd2TafWe6GA9Z7AtpWarbvNk96JUS64lW916VX8UCBWqxLFMMqXCeWoJbU6DW0biP9sfO2qlWoauXgq6vGkH7tkUKGsXs7ynr4zjjCNKDNdWhKHsdQ91gGx%2F%2BcbOYPWh5EoazIri74uCpy1RPpnOrdqIkySmam5C1I76nEdIifLjtMS7YdOS0ZmmOF1rqUZhyDPh%2FB5R39q9eadPcawoAqBrzZqJeEiFy5D5513Xwi7%2BBpsMRi7TdS6ru2qjzeVfzbAxWW8auGMt%2BVCAB1KnBipMVh2YcNYYHuJRBLlILHZ%2BMHkWazJcfn4LpwXNuTcds8henWeyIF5f5j62Ls3SUzQjtSBTCm3J%2FBBjqkAZibrfv07TjmRHmSacp2ig4QoaVB40j0f1C1god19a46fdhN%2FC2yYVvX5pzqc6xKWbB4geD%2FpH6g0fYS4HOfpji4M4kD44q3HtJcjT4nxtJrX52V5yY2Ch9HGArwFLfWDurb06ioMBHJzq5RzEb7IRhd%2Fhrf6%2BMoq9Ehk7GQZQz%2BFdjNy42Ww6gc8OyskqA%2BnIQcbC174YMApcpCEI%2Fz6oWAfFBm&X-Amz-Signature=8be324864e09216663dbbc927dc06cb1e3a7362118c5ae09f684e5a1fe058343&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ7UEIK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7K3Z1vXVTcY6j8PCaSE9qr5CoHjQh2F5o7RT9%2Fon2kQIhAIDlsmMqQgCD5eMbVoRzWget6Acuhpt%2BZ6GtXvZCOGACKv8DCFMQABoMNjM3NDIzMTgzODA1IgwaNOi4QE3RGPWctssq3AOXlF86o2TZWfTG2cvn6KkCJ1rVPT1QCN6%2BSO6qL%2FKPUJ5WhotJtrmr7%2BGbfNl0r27h%2FjWjhLCQQNF11I5I%2FtXN6tx%2Bp6hdLp0GHCzx%2BxteSqVMYwi5Z2h3b4ngTZtGJNyc%2FMXfab7Wu1eLjC%2F2HRinPZzHLkYqcEDhNG1p8v7wVfVa6Kh60YAPvRiMR1bybLso7U8I8vJPSA0e0engnW4AxrU2mwzKez%2FfUPd7p3bcPwkeN5VSckLUFWOj%2FbLykevixLn2IggW03KZXmVQg6q7iTWnHG0yY4yd2TafWe6GA9Z7AtpWarbvNk96JUS64lW916VX8UCBWqxLFMMqXCeWoJbU6DW0biP9sfO2qlWoauXgq6vGkH7tkUKGsXs7ynr4zjjCNKDNdWhKHsdQ91gGx%2F%2BcbOYPWh5EoazIri74uCpy1RPpnOrdqIkySmam5C1I76nEdIifLjtMS7YdOS0ZmmOF1rqUZhyDPh%2FB5R39q9eadPcawoAqBrzZqJeEiFy5D5513Xwi7%2BBpsMRi7TdS6ru2qjzeVfzbAxWW8auGMt%2BVCAB1KnBipMVh2YcNYYHuJRBLlILHZ%2BMHkWazJcfn4LpwXNuTcds8henWeyIF5f5j62Ls3SUzQjtSBTCm3J%2FBBjqkAZibrfv07TjmRHmSacp2ig4QoaVB40j0f1C1god19a46fdhN%2FC2yYVvX5pzqc6xKWbB4geD%2FpH6g0fYS4HOfpji4M4kD44q3HtJcjT4nxtJrX52V5yY2Ch9HGArwFLfWDurb06ioMBHJzq5RzEb7IRhd%2Fhrf6%2BMoq9Ehk7GQZQz%2BFdjNy42Ww6gc8OyskqA%2BnIQcbC174YMApcpCEI%2Fz6oWAfFBm&X-Amz-Signature=75a76d264dfcccf48d82b4c797a09c411942cf287d0bac97b387897996edd6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
