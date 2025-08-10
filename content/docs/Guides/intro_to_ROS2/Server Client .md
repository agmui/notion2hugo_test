---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNTQXZ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKiEmlNl8WBgPtur%2FJuOnylzNmNjIpD%2B%2BXe6BG6736kAIhAKhRvNL7%2BR0puSBH8Upm%2FZ9cWvT%2FtHdYZUUYsK3uPum6KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJNln%2BdqA62nsbQHYq3APu6Wq1bOOapV2XFktS55VFRup7%2FAIM17fIX7JIEDvk4I68MrOrVhTL7pEVelu92L2OKOdhHevZXfDtWbUGd3p6QozcvzsthdZOXvUfiALVzJVJuboCZrePIq4ZK86pCnkDuGxoh3aHMKwi6KCAv00lPfsFYQSjGNkeVZtsvYOzNi0qYada24DvOeggycqTwuIQUYXhQ7pquTpAs7Hdg1UAsh3acjwRe5%2BGOk8iLnUTWX9Yn1gr6wr9erQVFEk13wiLv%2Bn7P6%2B%2B5yGMEvdL6HXowy1cUBANjfcYo0mfnGT6B%2BxzA%2B1r0NlaasreDFTBs3WJjhLpvFsCIyPSWRPOmGmU5Yu%2BtGV0NsHhO2TkisXI35CkqlxM3Da8s4zWJsgGAVvUbLebZ%2BYdjVFWq%2F1t1cka3KupD7uhG8iOksnIHXL5a%2Fl42MfA5QHyh8DzwsnhP%2FIds5nFZoHPKo%2FidjjZFUHxx5ICzTVp%2FI3wNaI9SrBVoUsnmR0WdsgRlLcRGq0u359EkTHqIqG%2BWwrSKT6wc1TxdFBWF3Phs51gO0kiiPIknVA6bA6TidxM5m7C9kSjuNyB4%2FoDEL99ypgzFu4nAMwjFhSUcbcFjIjQn6cOSFByyY9iqr%2BahBmHRfJGHzDFuuPEBjqkARdv%2BzRQ%2F1I3IvIxyBnk8UQ58%2F1SI4ZK5bdwxyTIgilR4u5KXtfSbNKdcuC3gLYuMlOumOuxEwSScNXZFkUqoGb1izWE0V2pUzjrnkeGs6mCtR4robmuSmDCFXcAOCuO5Q5%2F8QVKpamvGkHoIwYsOD3NfE8yYlPU1gmp2Q3kn4UuHlf%2BDmCZQdZtJA6nBhwzEM%2BLolVvGlXYgc8jkRTmxjTeYPtf&X-Amz-Signature=81ad983a0efd53eed895af17875e093a0d693be8bc33b5731257572f11074bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNTQXZ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKiEmlNl8WBgPtur%2FJuOnylzNmNjIpD%2B%2BXe6BG6736kAIhAKhRvNL7%2BR0puSBH8Upm%2FZ9cWvT%2FtHdYZUUYsK3uPum6KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJNln%2BdqA62nsbQHYq3APu6Wq1bOOapV2XFktS55VFRup7%2FAIM17fIX7JIEDvk4I68MrOrVhTL7pEVelu92L2OKOdhHevZXfDtWbUGd3p6QozcvzsthdZOXvUfiALVzJVJuboCZrePIq4ZK86pCnkDuGxoh3aHMKwi6KCAv00lPfsFYQSjGNkeVZtsvYOzNi0qYada24DvOeggycqTwuIQUYXhQ7pquTpAs7Hdg1UAsh3acjwRe5%2BGOk8iLnUTWX9Yn1gr6wr9erQVFEk13wiLv%2Bn7P6%2B%2B5yGMEvdL6HXowy1cUBANjfcYo0mfnGT6B%2BxzA%2B1r0NlaasreDFTBs3WJjhLpvFsCIyPSWRPOmGmU5Yu%2BtGV0NsHhO2TkisXI35CkqlxM3Da8s4zWJsgGAVvUbLebZ%2BYdjVFWq%2F1t1cka3KupD7uhG8iOksnIHXL5a%2Fl42MfA5QHyh8DzwsnhP%2FIds5nFZoHPKo%2FidjjZFUHxx5ICzTVp%2FI3wNaI9SrBVoUsnmR0WdsgRlLcRGq0u359EkTHqIqG%2BWwrSKT6wc1TxdFBWF3Phs51gO0kiiPIknVA6bA6TidxM5m7C9kSjuNyB4%2FoDEL99ypgzFu4nAMwjFhSUcbcFjIjQn6cOSFByyY9iqr%2BahBmHRfJGHzDFuuPEBjqkARdv%2BzRQ%2F1I3IvIxyBnk8UQ58%2F1SI4ZK5bdwxyTIgilR4u5KXtfSbNKdcuC3gLYuMlOumOuxEwSScNXZFkUqoGb1izWE0V2pUzjrnkeGs6mCtR4robmuSmDCFXcAOCuO5Q5%2F8QVKpamvGkHoIwYsOD3NfE8yYlPU1gmp2Q3kn4UuHlf%2BDmCZQdZtJA6nBhwzEM%2BLolVvGlXYgc8jkRTmxjTeYPtf&X-Amz-Signature=553bfaea877b405e809a0ca671aa0168d04f2e316e48118c135fe4b4893fbcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNTQXZ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKiEmlNl8WBgPtur%2FJuOnylzNmNjIpD%2B%2BXe6BG6736kAIhAKhRvNL7%2BR0puSBH8Upm%2FZ9cWvT%2FtHdYZUUYsK3uPum6KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJNln%2BdqA62nsbQHYq3APu6Wq1bOOapV2XFktS55VFRup7%2FAIM17fIX7JIEDvk4I68MrOrVhTL7pEVelu92L2OKOdhHevZXfDtWbUGd3p6QozcvzsthdZOXvUfiALVzJVJuboCZrePIq4ZK86pCnkDuGxoh3aHMKwi6KCAv00lPfsFYQSjGNkeVZtsvYOzNi0qYada24DvOeggycqTwuIQUYXhQ7pquTpAs7Hdg1UAsh3acjwRe5%2BGOk8iLnUTWX9Yn1gr6wr9erQVFEk13wiLv%2Bn7P6%2B%2B5yGMEvdL6HXowy1cUBANjfcYo0mfnGT6B%2BxzA%2B1r0NlaasreDFTBs3WJjhLpvFsCIyPSWRPOmGmU5Yu%2BtGV0NsHhO2TkisXI35CkqlxM3Da8s4zWJsgGAVvUbLebZ%2BYdjVFWq%2F1t1cka3KupD7uhG8iOksnIHXL5a%2Fl42MfA5QHyh8DzwsnhP%2FIds5nFZoHPKo%2FidjjZFUHxx5ICzTVp%2FI3wNaI9SrBVoUsnmR0WdsgRlLcRGq0u359EkTHqIqG%2BWwrSKT6wc1TxdFBWF3Phs51gO0kiiPIknVA6bA6TidxM5m7C9kSjuNyB4%2FoDEL99ypgzFu4nAMwjFhSUcbcFjIjQn6cOSFByyY9iqr%2BahBmHRfJGHzDFuuPEBjqkARdv%2BzRQ%2F1I3IvIxyBnk8UQ58%2F1SI4ZK5bdwxyTIgilR4u5KXtfSbNKdcuC3gLYuMlOumOuxEwSScNXZFkUqoGb1izWE0V2pUzjrnkeGs6mCtR4robmuSmDCFXcAOCuO5Q5%2F8QVKpamvGkHoIwYsOD3NfE8yYlPU1gmp2Q3kn4UuHlf%2BDmCZQdZtJA6nBhwzEM%2BLolVvGlXYgc8jkRTmxjTeYPtf&X-Amz-Signature=e32d66033c123cdd92a4b3f9bc5c7176172ae529d4cf2fa5b4a58b2768e4b0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNTQXZ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKiEmlNl8WBgPtur%2FJuOnylzNmNjIpD%2B%2BXe6BG6736kAIhAKhRvNL7%2BR0puSBH8Upm%2FZ9cWvT%2FtHdYZUUYsK3uPum6KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJNln%2BdqA62nsbQHYq3APu6Wq1bOOapV2XFktS55VFRup7%2FAIM17fIX7JIEDvk4I68MrOrVhTL7pEVelu92L2OKOdhHevZXfDtWbUGd3p6QozcvzsthdZOXvUfiALVzJVJuboCZrePIq4ZK86pCnkDuGxoh3aHMKwi6KCAv00lPfsFYQSjGNkeVZtsvYOzNi0qYada24DvOeggycqTwuIQUYXhQ7pquTpAs7Hdg1UAsh3acjwRe5%2BGOk8iLnUTWX9Yn1gr6wr9erQVFEk13wiLv%2Bn7P6%2B%2B5yGMEvdL6HXowy1cUBANjfcYo0mfnGT6B%2BxzA%2B1r0NlaasreDFTBs3WJjhLpvFsCIyPSWRPOmGmU5Yu%2BtGV0NsHhO2TkisXI35CkqlxM3Da8s4zWJsgGAVvUbLebZ%2BYdjVFWq%2F1t1cka3KupD7uhG8iOksnIHXL5a%2Fl42MfA5QHyh8DzwsnhP%2FIds5nFZoHPKo%2FidjjZFUHxx5ICzTVp%2FI3wNaI9SrBVoUsnmR0WdsgRlLcRGq0u359EkTHqIqG%2BWwrSKT6wc1TxdFBWF3Phs51gO0kiiPIknVA6bA6TidxM5m7C9kSjuNyB4%2FoDEL99ypgzFu4nAMwjFhSUcbcFjIjQn6cOSFByyY9iqr%2BahBmHRfJGHzDFuuPEBjqkARdv%2BzRQ%2F1I3IvIxyBnk8UQ58%2F1SI4ZK5bdwxyTIgilR4u5KXtfSbNKdcuC3gLYuMlOumOuxEwSScNXZFkUqoGb1izWE0V2pUzjrnkeGs6mCtR4robmuSmDCFXcAOCuO5Q5%2F8QVKpamvGkHoIwYsOD3NfE8yYlPU1gmp2Q3kn4UuHlf%2BDmCZQdZtJA6nBhwzEM%2BLolVvGlXYgc8jkRTmxjTeYPtf&X-Amz-Signature=16a781b482ce8e90f0597e9c32c64ede884d2d6c7f083d12ba334cbd4c3bad3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNTQXZ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKiEmlNl8WBgPtur%2FJuOnylzNmNjIpD%2B%2BXe6BG6736kAIhAKhRvNL7%2BR0puSBH8Upm%2FZ9cWvT%2FtHdYZUUYsK3uPum6KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJNln%2BdqA62nsbQHYq3APu6Wq1bOOapV2XFktS55VFRup7%2FAIM17fIX7JIEDvk4I68MrOrVhTL7pEVelu92L2OKOdhHevZXfDtWbUGd3p6QozcvzsthdZOXvUfiALVzJVJuboCZrePIq4ZK86pCnkDuGxoh3aHMKwi6KCAv00lPfsFYQSjGNkeVZtsvYOzNi0qYada24DvOeggycqTwuIQUYXhQ7pquTpAs7Hdg1UAsh3acjwRe5%2BGOk8iLnUTWX9Yn1gr6wr9erQVFEk13wiLv%2Bn7P6%2B%2B5yGMEvdL6HXowy1cUBANjfcYo0mfnGT6B%2BxzA%2B1r0NlaasreDFTBs3WJjhLpvFsCIyPSWRPOmGmU5Yu%2BtGV0NsHhO2TkisXI35CkqlxM3Da8s4zWJsgGAVvUbLebZ%2BYdjVFWq%2F1t1cka3KupD7uhG8iOksnIHXL5a%2Fl42MfA5QHyh8DzwsnhP%2FIds5nFZoHPKo%2FidjjZFUHxx5ICzTVp%2FI3wNaI9SrBVoUsnmR0WdsgRlLcRGq0u359EkTHqIqG%2BWwrSKT6wc1TxdFBWF3Phs51gO0kiiPIknVA6bA6TidxM5m7C9kSjuNyB4%2FoDEL99ypgzFu4nAMwjFhSUcbcFjIjQn6cOSFByyY9iqr%2BahBmHRfJGHzDFuuPEBjqkARdv%2BzRQ%2F1I3IvIxyBnk8UQ58%2F1SI4ZK5bdwxyTIgilR4u5KXtfSbNKdcuC3gLYuMlOumOuxEwSScNXZFkUqoGb1izWE0V2pUzjrnkeGs6mCtR4robmuSmDCFXcAOCuO5Q5%2F8QVKpamvGkHoIwYsOD3NfE8yYlPU1gmp2Q3kn4UuHlf%2BDmCZQdZtJA6nBhwzEM%2BLolVvGlXYgc8jkRTmxjTeYPtf&X-Amz-Signature=c1fc5ac7453a6bf804ffb925b8b79df443067cc65abdf8dcd3e8e02047af2ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
