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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXF335J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3uHWC5Rr%2FROI6X0Sz9dTvZJCOmJ7jRTHIy%2B5CNNUoPAiBgW9LnvDw2WRWPdjn0rDZ0Ax9aqH%2Bqfl%2FyEoJkUL3CkCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMxlWb1KK3De3GrOJkKtwD5JVemj59FFBSLHMojuWqK2LfsfaK%2F7B6XewDKIKsC%2FVQJznYRIsxCrcXZlON8xWZ8j6%2BQ%2F1JJOpMYT0wbQliV2JXQkFbX1aceNaV%2BQis6TzPIGF6TVyU1Wvf3zjQNDi9U%2B7n78gc7jHgiXyYIMwqN9gRM25Ro5%2Fp4bTN7iW%2BbrhO6yPnwruwyxgcwqFRRvN6eQEftSpczgNQGFosyBCGtzDrgsOaUolLtYkLEejAhuy93H9yMjClPvKFCcVGoa5xeaO6MRQ%2F6x4niorgIEOW%2BfkRnZh7rye8E2Yh3s2wMwE5u3Wj3WWMJwWSK6r%2F7v%2BwMX9E6mHqs8lsjJlO0xxGY09iZu37FB5fVz8A469GDcxYjrMgpfygjJj%2BYTMEgoJbGdRKTCoVf7KFb2aknp5ltpv6CMlDbZeSi4OI2X17azUn7TxfbYynFC4Em%2BU%2FClDfOCTYVnzM1eCeNVP2s6UvELrtpkEmbzw0QBZsJpJbT8PrEiihi4fYBXloOFW7YJMEj0VMNzZTCiJdzKYkv2epBhj78XlufTbfrq%2F5yXDohiVEyNQj9BaSKbVy17%2F3tJkNxfPZh%2F0aOuOspIl6QopIGPGdCGjkcjG4vgDNxtLRlNa6i8HanfKPflmfToQw8bH0wAY6pgFErSqsNqKDLSaJ%2BqeP%2Bmgy7KpnxsdyMPhM%2BOTmbrxQ%2F4skxEyIXPO%2FTcooHbunc5Kr7Vf9%2FZLXAjD%2B5HBlrBts0PiWQhq9d9MGGds0gBKov%2Bz0XPSHRUZLZZnlGOB%2BC32%2FbjcUryJp00IcmtVqNfMtptgUpFbbNdxIICquv4FoDWbXzFqveaj%2FZ10SZb1VDA1MLGBDmvYcW6IuXJgyu9JlS3fiiGq8&X-Amz-Signature=c5b05842a303c157b1887f205066d9ec14e13d74653cd37fabba03a283b0f517&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXF335J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3uHWC5Rr%2FROI6X0Sz9dTvZJCOmJ7jRTHIy%2B5CNNUoPAiBgW9LnvDw2WRWPdjn0rDZ0Ax9aqH%2Bqfl%2FyEoJkUL3CkCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMxlWb1KK3De3GrOJkKtwD5JVemj59FFBSLHMojuWqK2LfsfaK%2F7B6XewDKIKsC%2FVQJznYRIsxCrcXZlON8xWZ8j6%2BQ%2F1JJOpMYT0wbQliV2JXQkFbX1aceNaV%2BQis6TzPIGF6TVyU1Wvf3zjQNDi9U%2B7n78gc7jHgiXyYIMwqN9gRM25Ro5%2Fp4bTN7iW%2BbrhO6yPnwruwyxgcwqFRRvN6eQEftSpczgNQGFosyBCGtzDrgsOaUolLtYkLEejAhuy93H9yMjClPvKFCcVGoa5xeaO6MRQ%2F6x4niorgIEOW%2BfkRnZh7rye8E2Yh3s2wMwE5u3Wj3WWMJwWSK6r%2F7v%2BwMX9E6mHqs8lsjJlO0xxGY09iZu37FB5fVz8A469GDcxYjrMgpfygjJj%2BYTMEgoJbGdRKTCoVf7KFb2aknp5ltpv6CMlDbZeSi4OI2X17azUn7TxfbYynFC4Em%2BU%2FClDfOCTYVnzM1eCeNVP2s6UvELrtpkEmbzw0QBZsJpJbT8PrEiihi4fYBXloOFW7YJMEj0VMNzZTCiJdzKYkv2epBhj78XlufTbfrq%2F5yXDohiVEyNQj9BaSKbVy17%2F3tJkNxfPZh%2F0aOuOspIl6QopIGPGdCGjkcjG4vgDNxtLRlNa6i8HanfKPflmfToQw8bH0wAY6pgFErSqsNqKDLSaJ%2BqeP%2Bmgy7KpnxsdyMPhM%2BOTmbrxQ%2F4skxEyIXPO%2FTcooHbunc5Kr7Vf9%2FZLXAjD%2B5HBlrBts0PiWQhq9d9MGGds0gBKov%2Bz0XPSHRUZLZZnlGOB%2BC32%2FbjcUryJp00IcmtVqNfMtptgUpFbbNdxIICquv4FoDWbXzFqveaj%2FZ10SZb1VDA1MLGBDmvYcW6IuXJgyu9JlS3fiiGq8&X-Amz-Signature=b18de1fdf279fa377f9d680ac335e17fd0b9e55638782dc36d2081c243ac0c41&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXF335J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3uHWC5Rr%2FROI6X0Sz9dTvZJCOmJ7jRTHIy%2B5CNNUoPAiBgW9LnvDw2WRWPdjn0rDZ0Ax9aqH%2Bqfl%2FyEoJkUL3CkCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMxlWb1KK3De3GrOJkKtwD5JVemj59FFBSLHMojuWqK2LfsfaK%2F7B6XewDKIKsC%2FVQJznYRIsxCrcXZlON8xWZ8j6%2BQ%2F1JJOpMYT0wbQliV2JXQkFbX1aceNaV%2BQis6TzPIGF6TVyU1Wvf3zjQNDi9U%2B7n78gc7jHgiXyYIMwqN9gRM25Ro5%2Fp4bTN7iW%2BbrhO6yPnwruwyxgcwqFRRvN6eQEftSpczgNQGFosyBCGtzDrgsOaUolLtYkLEejAhuy93H9yMjClPvKFCcVGoa5xeaO6MRQ%2F6x4niorgIEOW%2BfkRnZh7rye8E2Yh3s2wMwE5u3Wj3WWMJwWSK6r%2F7v%2BwMX9E6mHqs8lsjJlO0xxGY09iZu37FB5fVz8A469GDcxYjrMgpfygjJj%2BYTMEgoJbGdRKTCoVf7KFb2aknp5ltpv6CMlDbZeSi4OI2X17azUn7TxfbYynFC4Em%2BU%2FClDfOCTYVnzM1eCeNVP2s6UvELrtpkEmbzw0QBZsJpJbT8PrEiihi4fYBXloOFW7YJMEj0VMNzZTCiJdzKYkv2epBhj78XlufTbfrq%2F5yXDohiVEyNQj9BaSKbVy17%2F3tJkNxfPZh%2F0aOuOspIl6QopIGPGdCGjkcjG4vgDNxtLRlNa6i8HanfKPflmfToQw8bH0wAY6pgFErSqsNqKDLSaJ%2BqeP%2Bmgy7KpnxsdyMPhM%2BOTmbrxQ%2F4skxEyIXPO%2FTcooHbunc5Kr7Vf9%2FZLXAjD%2B5HBlrBts0PiWQhq9d9MGGds0gBKov%2Bz0XPSHRUZLZZnlGOB%2BC32%2FbjcUryJp00IcmtVqNfMtptgUpFbbNdxIICquv4FoDWbXzFqveaj%2FZ10SZb1VDA1MLGBDmvYcW6IuXJgyu9JlS3fiiGq8&X-Amz-Signature=7e086e6a47840f638e8b84abf0b6182bbc9ab4c5758026582de81117f9c0baa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXF335J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3uHWC5Rr%2FROI6X0Sz9dTvZJCOmJ7jRTHIy%2B5CNNUoPAiBgW9LnvDw2WRWPdjn0rDZ0Ax9aqH%2Bqfl%2FyEoJkUL3CkCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMxlWb1KK3De3GrOJkKtwD5JVemj59FFBSLHMojuWqK2LfsfaK%2F7B6XewDKIKsC%2FVQJznYRIsxCrcXZlON8xWZ8j6%2BQ%2F1JJOpMYT0wbQliV2JXQkFbX1aceNaV%2BQis6TzPIGF6TVyU1Wvf3zjQNDi9U%2B7n78gc7jHgiXyYIMwqN9gRM25Ro5%2Fp4bTN7iW%2BbrhO6yPnwruwyxgcwqFRRvN6eQEftSpczgNQGFosyBCGtzDrgsOaUolLtYkLEejAhuy93H9yMjClPvKFCcVGoa5xeaO6MRQ%2F6x4niorgIEOW%2BfkRnZh7rye8E2Yh3s2wMwE5u3Wj3WWMJwWSK6r%2F7v%2BwMX9E6mHqs8lsjJlO0xxGY09iZu37FB5fVz8A469GDcxYjrMgpfygjJj%2BYTMEgoJbGdRKTCoVf7KFb2aknp5ltpv6CMlDbZeSi4OI2X17azUn7TxfbYynFC4Em%2BU%2FClDfOCTYVnzM1eCeNVP2s6UvELrtpkEmbzw0QBZsJpJbT8PrEiihi4fYBXloOFW7YJMEj0VMNzZTCiJdzKYkv2epBhj78XlufTbfrq%2F5yXDohiVEyNQj9BaSKbVy17%2F3tJkNxfPZh%2F0aOuOspIl6QopIGPGdCGjkcjG4vgDNxtLRlNa6i8HanfKPflmfToQw8bH0wAY6pgFErSqsNqKDLSaJ%2BqeP%2Bmgy7KpnxsdyMPhM%2BOTmbrxQ%2F4skxEyIXPO%2FTcooHbunc5Kr7Vf9%2FZLXAjD%2B5HBlrBts0PiWQhq9d9MGGds0gBKov%2Bz0XPSHRUZLZZnlGOB%2BC32%2FbjcUryJp00IcmtVqNfMtptgUpFbbNdxIICquv4FoDWbXzFqveaj%2FZ10SZb1VDA1MLGBDmvYcW6IuXJgyu9JlS3fiiGq8&X-Amz-Signature=9e0037458920db7d9a97068aec579e1c83926735a9c314d7f3fb81020c632986&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXF335J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3uHWC5Rr%2FROI6X0Sz9dTvZJCOmJ7jRTHIy%2B5CNNUoPAiBgW9LnvDw2WRWPdjn0rDZ0Ax9aqH%2Bqfl%2FyEoJkUL3CkCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMxlWb1KK3De3GrOJkKtwD5JVemj59FFBSLHMojuWqK2LfsfaK%2F7B6XewDKIKsC%2FVQJznYRIsxCrcXZlON8xWZ8j6%2BQ%2F1JJOpMYT0wbQliV2JXQkFbX1aceNaV%2BQis6TzPIGF6TVyU1Wvf3zjQNDi9U%2B7n78gc7jHgiXyYIMwqN9gRM25Ro5%2Fp4bTN7iW%2BbrhO6yPnwruwyxgcwqFRRvN6eQEftSpczgNQGFosyBCGtzDrgsOaUolLtYkLEejAhuy93H9yMjClPvKFCcVGoa5xeaO6MRQ%2F6x4niorgIEOW%2BfkRnZh7rye8E2Yh3s2wMwE5u3Wj3WWMJwWSK6r%2F7v%2BwMX9E6mHqs8lsjJlO0xxGY09iZu37FB5fVz8A469GDcxYjrMgpfygjJj%2BYTMEgoJbGdRKTCoVf7KFb2aknp5ltpv6CMlDbZeSi4OI2X17azUn7TxfbYynFC4Em%2BU%2FClDfOCTYVnzM1eCeNVP2s6UvELrtpkEmbzw0QBZsJpJbT8PrEiihi4fYBXloOFW7YJMEj0VMNzZTCiJdzKYkv2epBhj78XlufTbfrq%2F5yXDohiVEyNQj9BaSKbVy17%2F3tJkNxfPZh%2F0aOuOspIl6QopIGPGdCGjkcjG4vgDNxtLRlNa6i8HanfKPflmfToQw8bH0wAY6pgFErSqsNqKDLSaJ%2BqeP%2Bmgy7KpnxsdyMPhM%2BOTmbrxQ%2F4skxEyIXPO%2FTcooHbunc5Kr7Vf9%2FZLXAjD%2B5HBlrBts0PiWQhq9d9MGGds0gBKov%2Bz0XPSHRUZLZZnlGOB%2BC32%2FbjcUryJp00IcmtVqNfMtptgUpFbbNdxIICquv4FoDWbXzFqveaj%2FZ10SZb1VDA1MLGBDmvYcW6IuXJgyu9JlS3fiiGq8&X-Amz-Signature=3514e5c77211dfaf8c905e14c53d25147c1f3e080a7e1f53251f5e7f530af3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
