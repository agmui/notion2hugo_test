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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWBMY4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujxMbNAxpwJCq6dJk4D9BsMRvskkQ%2FHbxwDBNO%2BCyQQIhANX9Sf67qlxGzmTtu%2F7Gd9uQMIfPOSE%2Bh4GUKIuAVk9fKv8DCBMQABoMNjM3NDIzMTgzODA1IgyicmkURNRO24yAWs0q3ANNJCYvfKkcW52RmNPi6JgGkrXtoXaxH%2F9wYs812MDeTGMrgqN4C%2BprTuYnRvSzQQnT2IW208zL5m1nvK0UTtFpzOWd3biDpf2Wo5vMXNgN2XjiGbuoZWrMaLbcApm2b22RgjBVy94Qyz8gvYuEYhIiMlee5hNUMPXA1MrMvCSrO%2Bt6zbMeVxpLLhzbt2c8qj0ud6lHKh9wlCYi4euQ7p19iIa0w%2FZE03Ii8R4i6guzVLVrCK4dpSsCghetRvgJ1PO%2F0TlFI9phAbi9aAAPXW%2FafZi5zazjDE%2FF1s4ofTMD88fqn5hTVhgOR83FKly6EFGH3nNfBTbLHWrRUCpeqc3mj16%2B6QotN9w8NVYnFyRBXMLB4DTv1TtVnSv42FjaeHUK1j3sE1Q%2Bklwe%2BY3UObKdZQv3N3BpA8q7TO00haWhNewFtWiGDAYxSrrPe8v8V6ogNAjuj65l9FFOPtdsvucqa0NLMKRwpNvZmzypqCBWZeGcQriVEO3ZtTaHtz53lUJRblLM0ZRrIPocsAF53Xb5RvC3Rb%2FMt%2F0QYZyaQ3V9fK%2FuFmQQ%2FSe3g3g2%2Fyg%2BF%2FnKbwcs58%2BYAat4JiWFihKzTXq4Nnd6rkUAM15v5JolFnkLurD9XHoFua3BODDkwPO%2FBjqkATtM%2BzyHw1AM3rH1Y2JkTUF9KekB7YZCNJdbpbo%2Fx9uyTWSr9MhBY9Uy0dY0TnwKY1QXjzgNnVZcozLxSX59dulCMtZA5iQ3HKNCQofc5X%2FKI7BVx%2FUIH1wHxsAHfTeRDiZmU4e%2BM6cnWleqM2cSoR5UH16fCLH7O6He8SAi8aB1rdjh2%2BXA7tLo1DrVrCNtTflk8Q7mYGOA73GYV8OarKqlWRdh&X-Amz-Signature=fd7b9f349cbfffcd34e1e8e62c22686657f6a28ac417a35c612aeec0572c8863&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWBMY4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujxMbNAxpwJCq6dJk4D9BsMRvskkQ%2FHbxwDBNO%2BCyQQIhANX9Sf67qlxGzmTtu%2F7Gd9uQMIfPOSE%2Bh4GUKIuAVk9fKv8DCBMQABoMNjM3NDIzMTgzODA1IgyicmkURNRO24yAWs0q3ANNJCYvfKkcW52RmNPi6JgGkrXtoXaxH%2F9wYs812MDeTGMrgqN4C%2BprTuYnRvSzQQnT2IW208zL5m1nvK0UTtFpzOWd3biDpf2Wo5vMXNgN2XjiGbuoZWrMaLbcApm2b22RgjBVy94Qyz8gvYuEYhIiMlee5hNUMPXA1MrMvCSrO%2Bt6zbMeVxpLLhzbt2c8qj0ud6lHKh9wlCYi4euQ7p19iIa0w%2FZE03Ii8R4i6guzVLVrCK4dpSsCghetRvgJ1PO%2F0TlFI9phAbi9aAAPXW%2FafZi5zazjDE%2FF1s4ofTMD88fqn5hTVhgOR83FKly6EFGH3nNfBTbLHWrRUCpeqc3mj16%2B6QotN9w8NVYnFyRBXMLB4DTv1TtVnSv42FjaeHUK1j3sE1Q%2Bklwe%2BY3UObKdZQv3N3BpA8q7TO00haWhNewFtWiGDAYxSrrPe8v8V6ogNAjuj65l9FFOPtdsvucqa0NLMKRwpNvZmzypqCBWZeGcQriVEO3ZtTaHtz53lUJRblLM0ZRrIPocsAF53Xb5RvC3Rb%2FMt%2F0QYZyaQ3V9fK%2FuFmQQ%2FSe3g3g2%2Fyg%2BF%2FnKbwcs58%2BYAat4JiWFihKzTXq4Nnd6rkUAM15v5JolFnkLurD9XHoFua3BODDkwPO%2FBjqkATtM%2BzyHw1AM3rH1Y2JkTUF9KekB7YZCNJdbpbo%2Fx9uyTWSr9MhBY9Uy0dY0TnwKY1QXjzgNnVZcozLxSX59dulCMtZA5iQ3HKNCQofc5X%2FKI7BVx%2FUIH1wHxsAHfTeRDiZmU4e%2BM6cnWleqM2cSoR5UH16fCLH7O6He8SAi8aB1rdjh2%2BXA7tLo1DrVrCNtTflk8Q7mYGOA73GYV8OarKqlWRdh&X-Amz-Signature=5b39d521df8d2d4bc222efb9164f88e609ee2b1087209af2873f07e66931d781&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWBMY4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujxMbNAxpwJCq6dJk4D9BsMRvskkQ%2FHbxwDBNO%2BCyQQIhANX9Sf67qlxGzmTtu%2F7Gd9uQMIfPOSE%2Bh4GUKIuAVk9fKv8DCBMQABoMNjM3NDIzMTgzODA1IgyicmkURNRO24yAWs0q3ANNJCYvfKkcW52RmNPi6JgGkrXtoXaxH%2F9wYs812MDeTGMrgqN4C%2BprTuYnRvSzQQnT2IW208zL5m1nvK0UTtFpzOWd3biDpf2Wo5vMXNgN2XjiGbuoZWrMaLbcApm2b22RgjBVy94Qyz8gvYuEYhIiMlee5hNUMPXA1MrMvCSrO%2Bt6zbMeVxpLLhzbt2c8qj0ud6lHKh9wlCYi4euQ7p19iIa0w%2FZE03Ii8R4i6guzVLVrCK4dpSsCghetRvgJ1PO%2F0TlFI9phAbi9aAAPXW%2FafZi5zazjDE%2FF1s4ofTMD88fqn5hTVhgOR83FKly6EFGH3nNfBTbLHWrRUCpeqc3mj16%2B6QotN9w8NVYnFyRBXMLB4DTv1TtVnSv42FjaeHUK1j3sE1Q%2Bklwe%2BY3UObKdZQv3N3BpA8q7TO00haWhNewFtWiGDAYxSrrPe8v8V6ogNAjuj65l9FFOPtdsvucqa0NLMKRwpNvZmzypqCBWZeGcQriVEO3ZtTaHtz53lUJRblLM0ZRrIPocsAF53Xb5RvC3Rb%2FMt%2F0QYZyaQ3V9fK%2FuFmQQ%2FSe3g3g2%2Fyg%2BF%2FnKbwcs58%2BYAat4JiWFihKzTXq4Nnd6rkUAM15v5JolFnkLurD9XHoFua3BODDkwPO%2FBjqkATtM%2BzyHw1AM3rH1Y2JkTUF9KekB7YZCNJdbpbo%2Fx9uyTWSr9MhBY9Uy0dY0TnwKY1QXjzgNnVZcozLxSX59dulCMtZA5iQ3HKNCQofc5X%2FKI7BVx%2FUIH1wHxsAHfTeRDiZmU4e%2BM6cnWleqM2cSoR5UH16fCLH7O6He8SAi8aB1rdjh2%2BXA7tLo1DrVrCNtTflk8Q7mYGOA73GYV8OarKqlWRdh&X-Amz-Signature=294ea6299fc9ad908ddd5160942630994c55574137a1a0a0235014bba0d983b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWBMY4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujxMbNAxpwJCq6dJk4D9BsMRvskkQ%2FHbxwDBNO%2BCyQQIhANX9Sf67qlxGzmTtu%2F7Gd9uQMIfPOSE%2Bh4GUKIuAVk9fKv8DCBMQABoMNjM3NDIzMTgzODA1IgyicmkURNRO24yAWs0q3ANNJCYvfKkcW52RmNPi6JgGkrXtoXaxH%2F9wYs812MDeTGMrgqN4C%2BprTuYnRvSzQQnT2IW208zL5m1nvK0UTtFpzOWd3biDpf2Wo5vMXNgN2XjiGbuoZWrMaLbcApm2b22RgjBVy94Qyz8gvYuEYhIiMlee5hNUMPXA1MrMvCSrO%2Bt6zbMeVxpLLhzbt2c8qj0ud6lHKh9wlCYi4euQ7p19iIa0w%2FZE03Ii8R4i6guzVLVrCK4dpSsCghetRvgJ1PO%2F0TlFI9phAbi9aAAPXW%2FafZi5zazjDE%2FF1s4ofTMD88fqn5hTVhgOR83FKly6EFGH3nNfBTbLHWrRUCpeqc3mj16%2B6QotN9w8NVYnFyRBXMLB4DTv1TtVnSv42FjaeHUK1j3sE1Q%2Bklwe%2BY3UObKdZQv3N3BpA8q7TO00haWhNewFtWiGDAYxSrrPe8v8V6ogNAjuj65l9FFOPtdsvucqa0NLMKRwpNvZmzypqCBWZeGcQriVEO3ZtTaHtz53lUJRblLM0ZRrIPocsAF53Xb5RvC3Rb%2FMt%2F0QYZyaQ3V9fK%2FuFmQQ%2FSe3g3g2%2Fyg%2BF%2FnKbwcs58%2BYAat4JiWFihKzTXq4Nnd6rkUAM15v5JolFnkLurD9XHoFua3BODDkwPO%2FBjqkATtM%2BzyHw1AM3rH1Y2JkTUF9KekB7YZCNJdbpbo%2Fx9uyTWSr9MhBY9Uy0dY0TnwKY1QXjzgNnVZcozLxSX59dulCMtZA5iQ3HKNCQofc5X%2FKI7BVx%2FUIH1wHxsAHfTeRDiZmU4e%2BM6cnWleqM2cSoR5UH16fCLH7O6He8SAi8aB1rdjh2%2BXA7tLo1DrVrCNtTflk8Q7mYGOA73GYV8OarKqlWRdh&X-Amz-Signature=a62fdbc76376fa643fafc9881f984349f3902d598812aac68686cefd6af009be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWBMY4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujxMbNAxpwJCq6dJk4D9BsMRvskkQ%2FHbxwDBNO%2BCyQQIhANX9Sf67qlxGzmTtu%2F7Gd9uQMIfPOSE%2Bh4GUKIuAVk9fKv8DCBMQABoMNjM3NDIzMTgzODA1IgyicmkURNRO24yAWs0q3ANNJCYvfKkcW52RmNPi6JgGkrXtoXaxH%2F9wYs812MDeTGMrgqN4C%2BprTuYnRvSzQQnT2IW208zL5m1nvK0UTtFpzOWd3biDpf2Wo5vMXNgN2XjiGbuoZWrMaLbcApm2b22RgjBVy94Qyz8gvYuEYhIiMlee5hNUMPXA1MrMvCSrO%2Bt6zbMeVxpLLhzbt2c8qj0ud6lHKh9wlCYi4euQ7p19iIa0w%2FZE03Ii8R4i6guzVLVrCK4dpSsCghetRvgJ1PO%2F0TlFI9phAbi9aAAPXW%2FafZi5zazjDE%2FF1s4ofTMD88fqn5hTVhgOR83FKly6EFGH3nNfBTbLHWrRUCpeqc3mj16%2B6QotN9w8NVYnFyRBXMLB4DTv1TtVnSv42FjaeHUK1j3sE1Q%2Bklwe%2BY3UObKdZQv3N3BpA8q7TO00haWhNewFtWiGDAYxSrrPe8v8V6ogNAjuj65l9FFOPtdsvucqa0NLMKRwpNvZmzypqCBWZeGcQriVEO3ZtTaHtz53lUJRblLM0ZRrIPocsAF53Xb5RvC3Rb%2FMt%2F0QYZyaQ3V9fK%2FuFmQQ%2FSe3g3g2%2Fyg%2BF%2FnKbwcs58%2BYAat4JiWFihKzTXq4Nnd6rkUAM15v5JolFnkLurD9XHoFua3BODDkwPO%2FBjqkATtM%2BzyHw1AM3rH1Y2JkTUF9KekB7YZCNJdbpbo%2Fx9uyTWSr9MhBY9Uy0dY0TnwKY1QXjzgNnVZcozLxSX59dulCMtZA5iQ3HKNCQofc5X%2FKI7BVx%2FUIH1wHxsAHfTeRDiZmU4e%2BM6cnWleqM2cSoR5UH16fCLH7O6He8SAi8aB1rdjh2%2BXA7tLo1DrVrCNtTflk8Q7mYGOA73GYV8OarKqlWRdh&X-Amz-Signature=b081c0c995de0b3f1061ea9c3edec76bfe6ca3a2969aa530bc1a9b574ea664f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
