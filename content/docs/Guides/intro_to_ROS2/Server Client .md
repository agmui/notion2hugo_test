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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRSSCWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDS5lS7JKtzQR9NKPyN11jcPiWicF8jT8s2icPwb6cDuAiAJOLutww%2FQo3PHhAnJIr8zvZCzJ1odqXgs0nHfsKjLVSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMtDs9hmU77EdY%2BkleKtwDOn76XLmcMpiY7bgUvN5ray%2B30HgA4fNVPzb%2F3GOOUIDIwRluYHdeX14riUs5YuZnO3olET4A5Jn4RtsbMLmbomv8wDKSRLx1whdEQU26vIzP8UjWWhSTOzlnikMIGGrfgt9IXYIEyOIcqdbs4KtH0LP2HHhTYuBmDsX3ULEU6V4cDnbyKsdRVhlhCNcjyfPpCa8bl5gOqsX9fCd22t%2BfmguHJpUJcY9FJi0IlRZTKnvVxSNk6ZUoo4wcJawT7Ymq0bzsgST937So3TrFIO98VKEAs9cY7TEgnw58VsY1khw8I1BSDex9jfr0jV421f%2B9g2Nso%2B74w4I2%2B%2BlUQPTmg7MB9lm8NblyGVqMzJi8Czr9QVGDdzWCEjaUbUBop1dLALVdmEjJWG3ijYS%2Bf8SqCe3vE5d4wBBAT6usnmRkE5IS%2FSO3dreymVnODWycfQ4wX2FQEuHomZ1v1vBZmjZDWtU98uqXbKABCE1lf579eNwuRsb73ujBa0tS%2FZGS7Me0%2FLnZAP4iC5wQ63ctO1znSrGo7JtYgKGVaRj%2BkiZcfsDeo0bL0aGpMlzJvDurn94ioabiWcbSGcidlwcNOa6zBbZsZi8H7%2Fq9Ux25xNGMmrA%2FZwcvDnMYyKXgO78wp6OJvQY6pgF8z%2FFzylD0Gs0F3PhUtdSq5SVJZcQNhGI1X5lzKb67iw0ihiQI5z3KRPN0lMIMF6ac5UXS0pEBkIW7y%2F%2FpcQuSgwSDpuo0v4PdyuwWJUk%2BXkHZyqfxPS77w1abXaLaFdVR595whC3YoQ6rGtlCZFrBbNDV8v9DHBkeRcHveWx7EBgKhnuSU0u5M4mY3KacPsdpaMiANhyM2P1NUDf7QR8tQrpGswgK&X-Amz-Signature=2c622160d8ee60e391e22eb4a67f80ddc04a172195a2179466d763eba2865535&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRSSCWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDS5lS7JKtzQR9NKPyN11jcPiWicF8jT8s2icPwb6cDuAiAJOLutww%2FQo3PHhAnJIr8zvZCzJ1odqXgs0nHfsKjLVSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMtDs9hmU77EdY%2BkleKtwDOn76XLmcMpiY7bgUvN5ray%2B30HgA4fNVPzb%2F3GOOUIDIwRluYHdeX14riUs5YuZnO3olET4A5Jn4RtsbMLmbomv8wDKSRLx1whdEQU26vIzP8UjWWhSTOzlnikMIGGrfgt9IXYIEyOIcqdbs4KtH0LP2HHhTYuBmDsX3ULEU6V4cDnbyKsdRVhlhCNcjyfPpCa8bl5gOqsX9fCd22t%2BfmguHJpUJcY9FJi0IlRZTKnvVxSNk6ZUoo4wcJawT7Ymq0bzsgST937So3TrFIO98VKEAs9cY7TEgnw58VsY1khw8I1BSDex9jfr0jV421f%2B9g2Nso%2B74w4I2%2B%2BlUQPTmg7MB9lm8NblyGVqMzJi8Czr9QVGDdzWCEjaUbUBop1dLALVdmEjJWG3ijYS%2Bf8SqCe3vE5d4wBBAT6usnmRkE5IS%2FSO3dreymVnODWycfQ4wX2FQEuHomZ1v1vBZmjZDWtU98uqXbKABCE1lf579eNwuRsb73ujBa0tS%2FZGS7Me0%2FLnZAP4iC5wQ63ctO1znSrGo7JtYgKGVaRj%2BkiZcfsDeo0bL0aGpMlzJvDurn94ioabiWcbSGcidlwcNOa6zBbZsZi8H7%2Fq9Ux25xNGMmrA%2FZwcvDnMYyKXgO78wp6OJvQY6pgF8z%2FFzylD0Gs0F3PhUtdSq5SVJZcQNhGI1X5lzKb67iw0ihiQI5z3KRPN0lMIMF6ac5UXS0pEBkIW7y%2F%2FpcQuSgwSDpuo0v4PdyuwWJUk%2BXkHZyqfxPS77w1abXaLaFdVR595whC3YoQ6rGtlCZFrBbNDV8v9DHBkeRcHveWx7EBgKhnuSU0u5M4mY3KacPsdpaMiANhyM2P1NUDf7QR8tQrpGswgK&X-Amz-Signature=fa020dd34d64de40c521730446f83dc036d8a83e84e8242a164a384c77c63a30&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRSSCWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDS5lS7JKtzQR9NKPyN11jcPiWicF8jT8s2icPwb6cDuAiAJOLutww%2FQo3PHhAnJIr8zvZCzJ1odqXgs0nHfsKjLVSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMtDs9hmU77EdY%2BkleKtwDOn76XLmcMpiY7bgUvN5ray%2B30HgA4fNVPzb%2F3GOOUIDIwRluYHdeX14riUs5YuZnO3olET4A5Jn4RtsbMLmbomv8wDKSRLx1whdEQU26vIzP8UjWWhSTOzlnikMIGGrfgt9IXYIEyOIcqdbs4KtH0LP2HHhTYuBmDsX3ULEU6V4cDnbyKsdRVhlhCNcjyfPpCa8bl5gOqsX9fCd22t%2BfmguHJpUJcY9FJi0IlRZTKnvVxSNk6ZUoo4wcJawT7Ymq0bzsgST937So3TrFIO98VKEAs9cY7TEgnw58VsY1khw8I1BSDex9jfr0jV421f%2B9g2Nso%2B74w4I2%2B%2BlUQPTmg7MB9lm8NblyGVqMzJi8Czr9QVGDdzWCEjaUbUBop1dLALVdmEjJWG3ijYS%2Bf8SqCe3vE5d4wBBAT6usnmRkE5IS%2FSO3dreymVnODWycfQ4wX2FQEuHomZ1v1vBZmjZDWtU98uqXbKABCE1lf579eNwuRsb73ujBa0tS%2FZGS7Me0%2FLnZAP4iC5wQ63ctO1znSrGo7JtYgKGVaRj%2BkiZcfsDeo0bL0aGpMlzJvDurn94ioabiWcbSGcidlwcNOa6zBbZsZi8H7%2Fq9Ux25xNGMmrA%2FZwcvDnMYyKXgO78wp6OJvQY6pgF8z%2FFzylD0Gs0F3PhUtdSq5SVJZcQNhGI1X5lzKb67iw0ihiQI5z3KRPN0lMIMF6ac5UXS0pEBkIW7y%2F%2FpcQuSgwSDpuo0v4PdyuwWJUk%2BXkHZyqfxPS77w1abXaLaFdVR595whC3YoQ6rGtlCZFrBbNDV8v9DHBkeRcHveWx7EBgKhnuSU0u5M4mY3KacPsdpaMiANhyM2P1NUDf7QR8tQrpGswgK&X-Amz-Signature=d885c921e82575afa53927e5852e240d70709ed8e078799b134b2621da846181&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRSSCWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDS5lS7JKtzQR9NKPyN11jcPiWicF8jT8s2icPwb6cDuAiAJOLutww%2FQo3PHhAnJIr8zvZCzJ1odqXgs0nHfsKjLVSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMtDs9hmU77EdY%2BkleKtwDOn76XLmcMpiY7bgUvN5ray%2B30HgA4fNVPzb%2F3GOOUIDIwRluYHdeX14riUs5YuZnO3olET4A5Jn4RtsbMLmbomv8wDKSRLx1whdEQU26vIzP8UjWWhSTOzlnikMIGGrfgt9IXYIEyOIcqdbs4KtH0LP2HHhTYuBmDsX3ULEU6V4cDnbyKsdRVhlhCNcjyfPpCa8bl5gOqsX9fCd22t%2BfmguHJpUJcY9FJi0IlRZTKnvVxSNk6ZUoo4wcJawT7Ymq0bzsgST937So3TrFIO98VKEAs9cY7TEgnw58VsY1khw8I1BSDex9jfr0jV421f%2B9g2Nso%2B74w4I2%2B%2BlUQPTmg7MB9lm8NblyGVqMzJi8Czr9QVGDdzWCEjaUbUBop1dLALVdmEjJWG3ijYS%2Bf8SqCe3vE5d4wBBAT6usnmRkE5IS%2FSO3dreymVnODWycfQ4wX2FQEuHomZ1v1vBZmjZDWtU98uqXbKABCE1lf579eNwuRsb73ujBa0tS%2FZGS7Me0%2FLnZAP4iC5wQ63ctO1znSrGo7JtYgKGVaRj%2BkiZcfsDeo0bL0aGpMlzJvDurn94ioabiWcbSGcidlwcNOa6zBbZsZi8H7%2Fq9Ux25xNGMmrA%2FZwcvDnMYyKXgO78wp6OJvQY6pgF8z%2FFzylD0Gs0F3PhUtdSq5SVJZcQNhGI1X5lzKb67iw0ihiQI5z3KRPN0lMIMF6ac5UXS0pEBkIW7y%2F%2FpcQuSgwSDpuo0v4PdyuwWJUk%2BXkHZyqfxPS77w1abXaLaFdVR595whC3YoQ6rGtlCZFrBbNDV8v9DHBkeRcHveWx7EBgKhnuSU0u5M4mY3KacPsdpaMiANhyM2P1NUDf7QR8tQrpGswgK&X-Amz-Signature=0f5c70307b14f5d9edb7088dcdb16dd383eff0cf8bd1d56006edcd8ab74b9b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRSSCWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDS5lS7JKtzQR9NKPyN11jcPiWicF8jT8s2icPwb6cDuAiAJOLutww%2FQo3PHhAnJIr8zvZCzJ1odqXgs0nHfsKjLVSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMtDs9hmU77EdY%2BkleKtwDOn76XLmcMpiY7bgUvN5ray%2B30HgA4fNVPzb%2F3GOOUIDIwRluYHdeX14riUs5YuZnO3olET4A5Jn4RtsbMLmbomv8wDKSRLx1whdEQU26vIzP8UjWWhSTOzlnikMIGGrfgt9IXYIEyOIcqdbs4KtH0LP2HHhTYuBmDsX3ULEU6V4cDnbyKsdRVhlhCNcjyfPpCa8bl5gOqsX9fCd22t%2BfmguHJpUJcY9FJi0IlRZTKnvVxSNk6ZUoo4wcJawT7Ymq0bzsgST937So3TrFIO98VKEAs9cY7TEgnw58VsY1khw8I1BSDex9jfr0jV421f%2B9g2Nso%2B74w4I2%2B%2BlUQPTmg7MB9lm8NblyGVqMzJi8Czr9QVGDdzWCEjaUbUBop1dLALVdmEjJWG3ijYS%2Bf8SqCe3vE5d4wBBAT6usnmRkE5IS%2FSO3dreymVnODWycfQ4wX2FQEuHomZ1v1vBZmjZDWtU98uqXbKABCE1lf579eNwuRsb73ujBa0tS%2FZGS7Me0%2FLnZAP4iC5wQ63ctO1znSrGo7JtYgKGVaRj%2BkiZcfsDeo0bL0aGpMlzJvDurn94ioabiWcbSGcidlwcNOa6zBbZsZi8H7%2Fq9Ux25xNGMmrA%2FZwcvDnMYyKXgO78wp6OJvQY6pgF8z%2FFzylD0Gs0F3PhUtdSq5SVJZcQNhGI1X5lzKb67iw0ihiQI5z3KRPN0lMIMF6ac5UXS0pEBkIW7y%2F%2FpcQuSgwSDpuo0v4PdyuwWJUk%2BXkHZyqfxPS77w1abXaLaFdVR595whC3YoQ6rGtlCZFrBbNDV8v9DHBkeRcHveWx7EBgKhnuSU0u5M4mY3KacPsdpaMiANhyM2P1NUDf7QR8tQrpGswgK&X-Amz-Signature=2117eb7d956357a422c37b9dd7d4d558ba491493b49256861a884cab7961317b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
