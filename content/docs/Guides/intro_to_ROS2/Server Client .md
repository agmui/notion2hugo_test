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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV5XS57%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBrdPeVas7Vxh7OoncXF0X3qffbh68xfDtz3RNitvV7IAiAo1x%2Bs6CHFIryWHyMCe%2B45K2Zars5RZrXRFKI5HVyXEyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqBUiE9SjOFoqYlSKtwD7rXdM8EytP6AIP8hLi4K8DodwkQiJKGQVC%2ByrPTPemmqXoVNQykw3gAv8ygJTawD2xid4o%2BWsR6NK%2BlvFUAVqWRdG7YfYfnDB4jQdz5EIdAt7pNuPw1l4FF3sC0Cl8sNqZVda71%2BE6IsA%2ByEVCz8T80gseohsI%2FQwkAmticu6SjdOEmMUFkLYy6FaMVCtPKFvzpUSo9pK5zOiuaWxmhsteOZimdNNlo9L7IO519cvrLe3%2FkR7tq4x0jwVl8%2B5haaE4rGkOmjhbAT5iM%2FoK3Tzg6A0E6a5ZbEmfjwogmiKwRjIzZNGuEMR6MNc9BQCVImplHf%2B37GbQUswT%2BMxqr%2FxIueCLbaubaYVjkYccN2OpdXIzKA0Vwmtbfv9WxgQRUHqoAzZ72ryiEsU3cr9NO%2Fp1HAz4FsBCuxfpgYJQ9wbpH25jyu2%2Frm6qLlR9maxbjYc91BszI5wK6Ampx7ZDn0fBqCvvytKyGFtsNFLiEetnIwJJkQ6AzNKWiM%2FpRVZ%2BPatryIrsmAPZAyy5tttLUXHOdtsGegz78ckcc3sakIcis%2FLA2CASJ535Kfjq8Frx39tVGClBmCd0fFtCqvw6pXDLKHG3zUsLrmqZEYMYLTzbPffEMZ9gELDwq17d4wiuXTwAY6pgE%2BKdOYf%2FKYo3Ghd8%2F8%2BKmVeLJe8Rb%2BztbkjvhLuEWJ9boAFhiupzA9IAUJPIlackf%2FC1nKBbOkUd3HP%2BpLtbLKwN%2FV4vMPsuqM7oQJeFhALUlmSl0JAYbkLAE53ghOM9uImhWbQBX85mBgOFI7P0%2BoYSWrDYklIZT2ItjmGoR92ExMPx69nMnRZPHvtVDAp17ke2WLP6eDhmoV6me9bQEEKqUieHNU&X-Amz-Signature=1023ee6c7d7374cfcd16b126ae758680f9e6d5a761cfae5e32b48cc1e53e77da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV5XS57%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBrdPeVas7Vxh7OoncXF0X3qffbh68xfDtz3RNitvV7IAiAo1x%2Bs6CHFIryWHyMCe%2B45K2Zars5RZrXRFKI5HVyXEyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqBUiE9SjOFoqYlSKtwD7rXdM8EytP6AIP8hLi4K8DodwkQiJKGQVC%2ByrPTPemmqXoVNQykw3gAv8ygJTawD2xid4o%2BWsR6NK%2BlvFUAVqWRdG7YfYfnDB4jQdz5EIdAt7pNuPw1l4FF3sC0Cl8sNqZVda71%2BE6IsA%2ByEVCz8T80gseohsI%2FQwkAmticu6SjdOEmMUFkLYy6FaMVCtPKFvzpUSo9pK5zOiuaWxmhsteOZimdNNlo9L7IO519cvrLe3%2FkR7tq4x0jwVl8%2B5haaE4rGkOmjhbAT5iM%2FoK3Tzg6A0E6a5ZbEmfjwogmiKwRjIzZNGuEMR6MNc9BQCVImplHf%2B37GbQUswT%2BMxqr%2FxIueCLbaubaYVjkYccN2OpdXIzKA0Vwmtbfv9WxgQRUHqoAzZ72ryiEsU3cr9NO%2Fp1HAz4FsBCuxfpgYJQ9wbpH25jyu2%2Frm6qLlR9maxbjYc91BszI5wK6Ampx7ZDn0fBqCvvytKyGFtsNFLiEetnIwJJkQ6AzNKWiM%2FpRVZ%2BPatryIrsmAPZAyy5tttLUXHOdtsGegz78ckcc3sakIcis%2FLA2CASJ535Kfjq8Frx39tVGClBmCd0fFtCqvw6pXDLKHG3zUsLrmqZEYMYLTzbPffEMZ9gELDwq17d4wiuXTwAY6pgE%2BKdOYf%2FKYo3Ghd8%2F8%2BKmVeLJe8Rb%2BztbkjvhLuEWJ9boAFhiupzA9IAUJPIlackf%2FC1nKBbOkUd3HP%2BpLtbLKwN%2FV4vMPsuqM7oQJeFhALUlmSl0JAYbkLAE53ghOM9uImhWbQBX85mBgOFI7P0%2BoYSWrDYklIZT2ItjmGoR92ExMPx69nMnRZPHvtVDAp17ke2WLP6eDhmoV6me9bQEEKqUieHNU&X-Amz-Signature=18955f1ce58fc5148aec90c54f0ea088648a22cf310e3c0509d0b2d35b750ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV5XS57%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBrdPeVas7Vxh7OoncXF0X3qffbh68xfDtz3RNitvV7IAiAo1x%2Bs6CHFIryWHyMCe%2B45K2Zars5RZrXRFKI5HVyXEyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqBUiE9SjOFoqYlSKtwD7rXdM8EytP6AIP8hLi4K8DodwkQiJKGQVC%2ByrPTPemmqXoVNQykw3gAv8ygJTawD2xid4o%2BWsR6NK%2BlvFUAVqWRdG7YfYfnDB4jQdz5EIdAt7pNuPw1l4FF3sC0Cl8sNqZVda71%2BE6IsA%2ByEVCz8T80gseohsI%2FQwkAmticu6SjdOEmMUFkLYy6FaMVCtPKFvzpUSo9pK5zOiuaWxmhsteOZimdNNlo9L7IO519cvrLe3%2FkR7tq4x0jwVl8%2B5haaE4rGkOmjhbAT5iM%2FoK3Tzg6A0E6a5ZbEmfjwogmiKwRjIzZNGuEMR6MNc9BQCVImplHf%2B37GbQUswT%2BMxqr%2FxIueCLbaubaYVjkYccN2OpdXIzKA0Vwmtbfv9WxgQRUHqoAzZ72ryiEsU3cr9NO%2Fp1HAz4FsBCuxfpgYJQ9wbpH25jyu2%2Frm6qLlR9maxbjYc91BszI5wK6Ampx7ZDn0fBqCvvytKyGFtsNFLiEetnIwJJkQ6AzNKWiM%2FpRVZ%2BPatryIrsmAPZAyy5tttLUXHOdtsGegz78ckcc3sakIcis%2FLA2CASJ535Kfjq8Frx39tVGClBmCd0fFtCqvw6pXDLKHG3zUsLrmqZEYMYLTzbPffEMZ9gELDwq17d4wiuXTwAY6pgE%2BKdOYf%2FKYo3Ghd8%2F8%2BKmVeLJe8Rb%2BztbkjvhLuEWJ9boAFhiupzA9IAUJPIlackf%2FC1nKBbOkUd3HP%2BpLtbLKwN%2FV4vMPsuqM7oQJeFhALUlmSl0JAYbkLAE53ghOM9uImhWbQBX85mBgOFI7P0%2BoYSWrDYklIZT2ItjmGoR92ExMPx69nMnRZPHvtVDAp17ke2WLP6eDhmoV6me9bQEEKqUieHNU&X-Amz-Signature=5b44494bfb2f22fdedb650e9e667988e3e387e4f77ce56869f1ea3534b7058b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV5XS57%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBrdPeVas7Vxh7OoncXF0X3qffbh68xfDtz3RNitvV7IAiAo1x%2Bs6CHFIryWHyMCe%2B45K2Zars5RZrXRFKI5HVyXEyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqBUiE9SjOFoqYlSKtwD7rXdM8EytP6AIP8hLi4K8DodwkQiJKGQVC%2ByrPTPemmqXoVNQykw3gAv8ygJTawD2xid4o%2BWsR6NK%2BlvFUAVqWRdG7YfYfnDB4jQdz5EIdAt7pNuPw1l4FF3sC0Cl8sNqZVda71%2BE6IsA%2ByEVCz8T80gseohsI%2FQwkAmticu6SjdOEmMUFkLYy6FaMVCtPKFvzpUSo9pK5zOiuaWxmhsteOZimdNNlo9L7IO519cvrLe3%2FkR7tq4x0jwVl8%2B5haaE4rGkOmjhbAT5iM%2FoK3Tzg6A0E6a5ZbEmfjwogmiKwRjIzZNGuEMR6MNc9BQCVImplHf%2B37GbQUswT%2BMxqr%2FxIueCLbaubaYVjkYccN2OpdXIzKA0Vwmtbfv9WxgQRUHqoAzZ72ryiEsU3cr9NO%2Fp1HAz4FsBCuxfpgYJQ9wbpH25jyu2%2Frm6qLlR9maxbjYc91BszI5wK6Ampx7ZDn0fBqCvvytKyGFtsNFLiEetnIwJJkQ6AzNKWiM%2FpRVZ%2BPatryIrsmAPZAyy5tttLUXHOdtsGegz78ckcc3sakIcis%2FLA2CASJ535Kfjq8Frx39tVGClBmCd0fFtCqvw6pXDLKHG3zUsLrmqZEYMYLTzbPffEMZ9gELDwq17d4wiuXTwAY6pgE%2BKdOYf%2FKYo3Ghd8%2F8%2BKmVeLJe8Rb%2BztbkjvhLuEWJ9boAFhiupzA9IAUJPIlackf%2FC1nKBbOkUd3HP%2BpLtbLKwN%2FV4vMPsuqM7oQJeFhALUlmSl0JAYbkLAE53ghOM9uImhWbQBX85mBgOFI7P0%2BoYSWrDYklIZT2ItjmGoR92ExMPx69nMnRZPHvtVDAp17ke2WLP6eDhmoV6me9bQEEKqUieHNU&X-Amz-Signature=271363abf7ec16195d39b1600182b7637b270b715ba0e6d4e74adbd4d0066d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV5XS57%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBrdPeVas7Vxh7OoncXF0X3qffbh68xfDtz3RNitvV7IAiAo1x%2Bs6CHFIryWHyMCe%2B45K2Zars5RZrXRFKI5HVyXEyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqBUiE9SjOFoqYlSKtwD7rXdM8EytP6AIP8hLi4K8DodwkQiJKGQVC%2ByrPTPemmqXoVNQykw3gAv8ygJTawD2xid4o%2BWsR6NK%2BlvFUAVqWRdG7YfYfnDB4jQdz5EIdAt7pNuPw1l4FF3sC0Cl8sNqZVda71%2BE6IsA%2ByEVCz8T80gseohsI%2FQwkAmticu6SjdOEmMUFkLYy6FaMVCtPKFvzpUSo9pK5zOiuaWxmhsteOZimdNNlo9L7IO519cvrLe3%2FkR7tq4x0jwVl8%2B5haaE4rGkOmjhbAT5iM%2FoK3Tzg6A0E6a5ZbEmfjwogmiKwRjIzZNGuEMR6MNc9BQCVImplHf%2B37GbQUswT%2BMxqr%2FxIueCLbaubaYVjkYccN2OpdXIzKA0Vwmtbfv9WxgQRUHqoAzZ72ryiEsU3cr9NO%2Fp1HAz4FsBCuxfpgYJQ9wbpH25jyu2%2Frm6qLlR9maxbjYc91BszI5wK6Ampx7ZDn0fBqCvvytKyGFtsNFLiEetnIwJJkQ6AzNKWiM%2FpRVZ%2BPatryIrsmAPZAyy5tttLUXHOdtsGegz78ckcc3sakIcis%2FLA2CASJ535Kfjq8Frx39tVGClBmCd0fFtCqvw6pXDLKHG3zUsLrmqZEYMYLTzbPffEMZ9gELDwq17d4wiuXTwAY6pgE%2BKdOYf%2FKYo3Ghd8%2F8%2BKmVeLJe8Rb%2BztbkjvhLuEWJ9boAFhiupzA9IAUJPIlackf%2FC1nKBbOkUd3HP%2BpLtbLKwN%2FV4vMPsuqM7oQJeFhALUlmSl0JAYbkLAE53ghOM9uImhWbQBX85mBgOFI7P0%2BoYSWrDYklIZT2ItjmGoR92ExMPx69nMnRZPHvtVDAp17ke2WLP6eDhmoV6me9bQEEKqUieHNU&X-Amz-Signature=2d7377486b437e0a692321178a4780d208dfb29e5fd660295bc5dc3f3bc2d710&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
