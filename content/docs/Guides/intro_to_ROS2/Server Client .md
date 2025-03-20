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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NO533FB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB179BTctDT8ZMFbAUp%2BcmjiJZIZAglV4ULLDLzjHdHKAiA1iRV%2BWuwdkJSxzPYRldXRIKCJv4TjkBLDdmAAHeDKkiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkVw%2Bhx83plUR5sqKtwDiXdFdg3%2BudgWGJwt0rapoWLS%2BSnx5sKDLSnx76RArHCeFXsG5rOvCc%2FZRybbmYK9hjt27eF%2FzYHIVSwaccAWyJI46sn4suUQoteZSZhAQS7d%2Bbh2gMq0DJc3%2BNiifqvPxyRPnL%2BVEDvFLRtmuPMQ39J7NHETZTWBudva6ZLP1yyPEJ1NspnVhzZm4XB2Xc5QTgM2zPdRfSiXwQF0hlOXNygLHsHICcJkuRDJkA64pzB%2BdBauMzuC3N7ucgfh0l9f3WN2ZjmdOt%2BRTjXTm3Xroic1QHS%2FQExMpfFyzRLNhrEGFnls29jGKE3hslt88Nb0Wy6SiEekcrZDRgXfw47SdvraKog9KLl4lz7woqpwQ1TwzxPkBqj7ClaxjyeLZR%2F7ZZ2A3QWb1djom0OaZ%2BDodQljYIub0dYZQLe7N9rAw0gvvCakRNFqm0tXsgqkyGIZN7rNWL4U6GAqNw%2Bope%2B%2Fj%2F4YubxShQBkTOuvD9IKgh7GgwngM00YYpo9fVXzyaiaEqfN2xvaOEAgeucVpx1lsVMKVwoKbeTaUwGndvKwFH1JgtXOZgP0F67xeXPlE3IAVPQjduSE5Eln2Hb6QU3dyTKpPY%2B28jPiHZulwmg6mLQj2eJULc7fGislSOUwxqbvvgY6pgGwS3fC6Akr0WY7JTR7BxcOEdzhCVCJMObC%2BmEs4QQGLZpixPM3fXZEB6hoZ0tboULXMEM2te9FAc3RsMFADSjjsKk2cgbVjIwgQW7UsnVpTl11lKbyiPx%2FulqDew2ynEmyrt2TW4q5Co%2BZh7mKDT0KVf7AeRhdBgxX9nxsE8vNX%2FpuoPrSXfRBhd%2F%2F9NFPPBC%2F7RQdUqtVlEd3d3tbUSfty4E0egm8&X-Amz-Signature=da31570fe158b0e31dc0aeff5eb981e28901d64be434148876dfa94cfe8de15d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NO533FB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB179BTctDT8ZMFbAUp%2BcmjiJZIZAglV4ULLDLzjHdHKAiA1iRV%2BWuwdkJSxzPYRldXRIKCJv4TjkBLDdmAAHeDKkiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkVw%2Bhx83plUR5sqKtwDiXdFdg3%2BudgWGJwt0rapoWLS%2BSnx5sKDLSnx76RArHCeFXsG5rOvCc%2FZRybbmYK9hjt27eF%2FzYHIVSwaccAWyJI46sn4suUQoteZSZhAQS7d%2Bbh2gMq0DJc3%2BNiifqvPxyRPnL%2BVEDvFLRtmuPMQ39J7NHETZTWBudva6ZLP1yyPEJ1NspnVhzZm4XB2Xc5QTgM2zPdRfSiXwQF0hlOXNygLHsHICcJkuRDJkA64pzB%2BdBauMzuC3N7ucgfh0l9f3WN2ZjmdOt%2BRTjXTm3Xroic1QHS%2FQExMpfFyzRLNhrEGFnls29jGKE3hslt88Nb0Wy6SiEekcrZDRgXfw47SdvraKog9KLl4lz7woqpwQ1TwzxPkBqj7ClaxjyeLZR%2F7ZZ2A3QWb1djom0OaZ%2BDodQljYIub0dYZQLe7N9rAw0gvvCakRNFqm0tXsgqkyGIZN7rNWL4U6GAqNw%2Bope%2B%2Fj%2F4YubxShQBkTOuvD9IKgh7GgwngM00YYpo9fVXzyaiaEqfN2xvaOEAgeucVpx1lsVMKVwoKbeTaUwGndvKwFH1JgtXOZgP0F67xeXPlE3IAVPQjduSE5Eln2Hb6QU3dyTKpPY%2B28jPiHZulwmg6mLQj2eJULc7fGislSOUwxqbvvgY6pgGwS3fC6Akr0WY7JTR7BxcOEdzhCVCJMObC%2BmEs4QQGLZpixPM3fXZEB6hoZ0tboULXMEM2te9FAc3RsMFADSjjsKk2cgbVjIwgQW7UsnVpTl11lKbyiPx%2FulqDew2ynEmyrt2TW4q5Co%2BZh7mKDT0KVf7AeRhdBgxX9nxsE8vNX%2FpuoPrSXfRBhd%2F%2F9NFPPBC%2F7RQdUqtVlEd3d3tbUSfty4E0egm8&X-Amz-Signature=9585bf27d1b6e65a1d9c6962e3b5aa16ba141f3c8a24357768d6e85482f30e19&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NO533FB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB179BTctDT8ZMFbAUp%2BcmjiJZIZAglV4ULLDLzjHdHKAiA1iRV%2BWuwdkJSxzPYRldXRIKCJv4TjkBLDdmAAHeDKkiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkVw%2Bhx83plUR5sqKtwDiXdFdg3%2BudgWGJwt0rapoWLS%2BSnx5sKDLSnx76RArHCeFXsG5rOvCc%2FZRybbmYK9hjt27eF%2FzYHIVSwaccAWyJI46sn4suUQoteZSZhAQS7d%2Bbh2gMq0DJc3%2BNiifqvPxyRPnL%2BVEDvFLRtmuPMQ39J7NHETZTWBudva6ZLP1yyPEJ1NspnVhzZm4XB2Xc5QTgM2zPdRfSiXwQF0hlOXNygLHsHICcJkuRDJkA64pzB%2BdBauMzuC3N7ucgfh0l9f3WN2ZjmdOt%2BRTjXTm3Xroic1QHS%2FQExMpfFyzRLNhrEGFnls29jGKE3hslt88Nb0Wy6SiEekcrZDRgXfw47SdvraKog9KLl4lz7woqpwQ1TwzxPkBqj7ClaxjyeLZR%2F7ZZ2A3QWb1djom0OaZ%2BDodQljYIub0dYZQLe7N9rAw0gvvCakRNFqm0tXsgqkyGIZN7rNWL4U6GAqNw%2Bope%2B%2Fj%2F4YubxShQBkTOuvD9IKgh7GgwngM00YYpo9fVXzyaiaEqfN2xvaOEAgeucVpx1lsVMKVwoKbeTaUwGndvKwFH1JgtXOZgP0F67xeXPlE3IAVPQjduSE5Eln2Hb6QU3dyTKpPY%2B28jPiHZulwmg6mLQj2eJULc7fGislSOUwxqbvvgY6pgGwS3fC6Akr0WY7JTR7BxcOEdzhCVCJMObC%2BmEs4QQGLZpixPM3fXZEB6hoZ0tboULXMEM2te9FAc3RsMFADSjjsKk2cgbVjIwgQW7UsnVpTl11lKbyiPx%2FulqDew2ynEmyrt2TW4q5Co%2BZh7mKDT0KVf7AeRhdBgxX9nxsE8vNX%2FpuoPrSXfRBhd%2F%2F9NFPPBC%2F7RQdUqtVlEd3d3tbUSfty4E0egm8&X-Amz-Signature=6e3bb8beff9b777c5d9472dc92d67cf202121d4e85d31c7be2defa00af8fcac4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NO533FB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB179BTctDT8ZMFbAUp%2BcmjiJZIZAglV4ULLDLzjHdHKAiA1iRV%2BWuwdkJSxzPYRldXRIKCJv4TjkBLDdmAAHeDKkiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkVw%2Bhx83plUR5sqKtwDiXdFdg3%2BudgWGJwt0rapoWLS%2BSnx5sKDLSnx76RArHCeFXsG5rOvCc%2FZRybbmYK9hjt27eF%2FzYHIVSwaccAWyJI46sn4suUQoteZSZhAQS7d%2Bbh2gMq0DJc3%2BNiifqvPxyRPnL%2BVEDvFLRtmuPMQ39J7NHETZTWBudva6ZLP1yyPEJ1NspnVhzZm4XB2Xc5QTgM2zPdRfSiXwQF0hlOXNygLHsHICcJkuRDJkA64pzB%2BdBauMzuC3N7ucgfh0l9f3WN2ZjmdOt%2BRTjXTm3Xroic1QHS%2FQExMpfFyzRLNhrEGFnls29jGKE3hslt88Nb0Wy6SiEekcrZDRgXfw47SdvraKog9KLl4lz7woqpwQ1TwzxPkBqj7ClaxjyeLZR%2F7ZZ2A3QWb1djom0OaZ%2BDodQljYIub0dYZQLe7N9rAw0gvvCakRNFqm0tXsgqkyGIZN7rNWL4U6GAqNw%2Bope%2B%2Fj%2F4YubxShQBkTOuvD9IKgh7GgwngM00YYpo9fVXzyaiaEqfN2xvaOEAgeucVpx1lsVMKVwoKbeTaUwGndvKwFH1JgtXOZgP0F67xeXPlE3IAVPQjduSE5Eln2Hb6QU3dyTKpPY%2B28jPiHZulwmg6mLQj2eJULc7fGislSOUwxqbvvgY6pgGwS3fC6Akr0WY7JTR7BxcOEdzhCVCJMObC%2BmEs4QQGLZpixPM3fXZEB6hoZ0tboULXMEM2te9FAc3RsMFADSjjsKk2cgbVjIwgQW7UsnVpTl11lKbyiPx%2FulqDew2ynEmyrt2TW4q5Co%2BZh7mKDT0KVf7AeRhdBgxX9nxsE8vNX%2FpuoPrSXfRBhd%2F%2F9NFPPBC%2F7RQdUqtVlEd3d3tbUSfty4E0egm8&X-Amz-Signature=3155de7d9dfe0ea2bec5f8152a44f9e573d996551d453ef684890f7b807739f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NO533FB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB179BTctDT8ZMFbAUp%2BcmjiJZIZAglV4ULLDLzjHdHKAiA1iRV%2BWuwdkJSxzPYRldXRIKCJv4TjkBLDdmAAHeDKkiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkVw%2Bhx83plUR5sqKtwDiXdFdg3%2BudgWGJwt0rapoWLS%2BSnx5sKDLSnx76RArHCeFXsG5rOvCc%2FZRybbmYK9hjt27eF%2FzYHIVSwaccAWyJI46sn4suUQoteZSZhAQS7d%2Bbh2gMq0DJc3%2BNiifqvPxyRPnL%2BVEDvFLRtmuPMQ39J7NHETZTWBudva6ZLP1yyPEJ1NspnVhzZm4XB2Xc5QTgM2zPdRfSiXwQF0hlOXNygLHsHICcJkuRDJkA64pzB%2BdBauMzuC3N7ucgfh0l9f3WN2ZjmdOt%2BRTjXTm3Xroic1QHS%2FQExMpfFyzRLNhrEGFnls29jGKE3hslt88Nb0Wy6SiEekcrZDRgXfw47SdvraKog9KLl4lz7woqpwQ1TwzxPkBqj7ClaxjyeLZR%2F7ZZ2A3QWb1djom0OaZ%2BDodQljYIub0dYZQLe7N9rAw0gvvCakRNFqm0tXsgqkyGIZN7rNWL4U6GAqNw%2Bope%2B%2Fj%2F4YubxShQBkTOuvD9IKgh7GgwngM00YYpo9fVXzyaiaEqfN2xvaOEAgeucVpx1lsVMKVwoKbeTaUwGndvKwFH1JgtXOZgP0F67xeXPlE3IAVPQjduSE5Eln2Hb6QU3dyTKpPY%2B28jPiHZulwmg6mLQj2eJULc7fGislSOUwxqbvvgY6pgGwS3fC6Akr0WY7JTR7BxcOEdzhCVCJMObC%2BmEs4QQGLZpixPM3fXZEB6hoZ0tboULXMEM2te9FAc3RsMFADSjjsKk2cgbVjIwgQW7UsnVpTl11lKbyiPx%2FulqDew2ynEmyrt2TW4q5Co%2BZh7mKDT0KVf7AeRhdBgxX9nxsE8vNX%2FpuoPrSXfRBhd%2F%2F9NFPPBC%2F7RQdUqtVlEd3d3tbUSfty4E0egm8&X-Amz-Signature=e8e7ff05daace37e9098b783cef6c9e1fbe44e769aafe32d3b5da302d8c50684&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
