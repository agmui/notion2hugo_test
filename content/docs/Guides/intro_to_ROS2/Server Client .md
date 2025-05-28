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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WJR2RJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwRvtHJ4taL%2Bv7PUaBDb9vKlNx%2B0zrrxr%2B8YxCL96QGAiARnYEVWRvpSVB6Ijt6Grn5WN0joCRny0WwLMPBdUFD2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG%2FxUhmpUl0CBpayLKtwDp3zBJwea8SZPHHNsAQxtHWIz1in6lZuDWIIRhkg1hz7R6dqtFHCO3kFuOhSQZ7oXbS8qY1ZQSJ0GTYl4Sdno14WkDqjwcw8OT6ykHj3rg0pE4cUrc4PAKMx0nfcOj3%2FTuZjGaoSHkBBR3Fsfvsgd6dH9tbDX38gmkJEYiAfqWmVHxahMR03okdJmCqWhVKiCLwCxrgkqAbv7mlDHoo7ojNpMTO8gnhYiroUSJp8qyP1XwL%2FEKDd7RsksQvG2Z25DrUg%2Bcqq4eXu1DFleuvHcDVasKHkytV3kszQZoLWPs0DL4go%2B8bNuFSAvOkoW4tOkRI1q38W9nd13dVskQUYNEN2sD%2F1BEYHWztmOEg8mt4NjgkwV28wik4u3eVqIknyxQzey%2FzksQwh95t1PpGb%2BGWtazEvEplUxPH68uYNKO7cbPSHy4eTtCVtbKPiO44J7A9mpI0rSpZxO%2F70lTSw5x%2FyY0HpSgCocC6ZzFVnl2LfqCzs%2FD7pnyJzqV%2Bhi9A4PrX%2FUXwnYTzedUbM5HODlFX54wjr2VLAfMtUdmnFDuQ1xQWix2tNU%2B0xxbnVB66Y%2FkcRLUfzEzNK90PR9cgwTAC9AIy2kU197HEgm0bpYK8o%2BeGqbo2BzOkWSL58w1%2FjcwQY6pgEu2Nd8xJaOf2y%2FG%2Bv2wx6BVovWgg9TweSJd5KxrbKZq6IIwP57WAzlwddgFeRrEyRJLq%2FgBCjp4CC3Y0N1%2FOTqOchTxolIiYuHACxQliOLgMqLU8gt9gByXf2U70PssATZD%2FZtvRpCAefvCGfzbvuBFbInZjRGjyHW4viYfYxmnrfwsS3juhJNv6uUbE%2FZGZ%2F4OoKNT0L5mdXQJOOieJI3aF7dOG35&X-Amz-Signature=bde0b1da5511c3dc2af5c9da1089361c6ebf05584d7066465726dc3fc674eb4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WJR2RJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwRvtHJ4taL%2Bv7PUaBDb9vKlNx%2B0zrrxr%2B8YxCL96QGAiARnYEVWRvpSVB6Ijt6Grn5WN0joCRny0WwLMPBdUFD2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG%2FxUhmpUl0CBpayLKtwDp3zBJwea8SZPHHNsAQxtHWIz1in6lZuDWIIRhkg1hz7R6dqtFHCO3kFuOhSQZ7oXbS8qY1ZQSJ0GTYl4Sdno14WkDqjwcw8OT6ykHj3rg0pE4cUrc4PAKMx0nfcOj3%2FTuZjGaoSHkBBR3Fsfvsgd6dH9tbDX38gmkJEYiAfqWmVHxahMR03okdJmCqWhVKiCLwCxrgkqAbv7mlDHoo7ojNpMTO8gnhYiroUSJp8qyP1XwL%2FEKDd7RsksQvG2Z25DrUg%2Bcqq4eXu1DFleuvHcDVasKHkytV3kszQZoLWPs0DL4go%2B8bNuFSAvOkoW4tOkRI1q38W9nd13dVskQUYNEN2sD%2F1BEYHWztmOEg8mt4NjgkwV28wik4u3eVqIknyxQzey%2FzksQwh95t1PpGb%2BGWtazEvEplUxPH68uYNKO7cbPSHy4eTtCVtbKPiO44J7A9mpI0rSpZxO%2F70lTSw5x%2FyY0HpSgCocC6ZzFVnl2LfqCzs%2FD7pnyJzqV%2Bhi9A4PrX%2FUXwnYTzedUbM5HODlFX54wjr2VLAfMtUdmnFDuQ1xQWix2tNU%2B0xxbnVB66Y%2FkcRLUfzEzNK90PR9cgwTAC9AIy2kU197HEgm0bpYK8o%2BeGqbo2BzOkWSL58w1%2FjcwQY6pgEu2Nd8xJaOf2y%2FG%2Bv2wx6BVovWgg9TweSJd5KxrbKZq6IIwP57WAzlwddgFeRrEyRJLq%2FgBCjp4CC3Y0N1%2FOTqOchTxolIiYuHACxQliOLgMqLU8gt9gByXf2U70PssATZD%2FZtvRpCAefvCGfzbvuBFbInZjRGjyHW4viYfYxmnrfwsS3juhJNv6uUbE%2FZGZ%2F4OoKNT0L5mdXQJOOieJI3aF7dOG35&X-Amz-Signature=0b8bd6a2ffef4666ef91c51e5b1db4ec3cc3664adaf08f8fbef6b76d38b76b67&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WJR2RJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwRvtHJ4taL%2Bv7PUaBDb9vKlNx%2B0zrrxr%2B8YxCL96QGAiARnYEVWRvpSVB6Ijt6Grn5WN0joCRny0WwLMPBdUFD2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG%2FxUhmpUl0CBpayLKtwDp3zBJwea8SZPHHNsAQxtHWIz1in6lZuDWIIRhkg1hz7R6dqtFHCO3kFuOhSQZ7oXbS8qY1ZQSJ0GTYl4Sdno14WkDqjwcw8OT6ykHj3rg0pE4cUrc4PAKMx0nfcOj3%2FTuZjGaoSHkBBR3Fsfvsgd6dH9tbDX38gmkJEYiAfqWmVHxahMR03okdJmCqWhVKiCLwCxrgkqAbv7mlDHoo7ojNpMTO8gnhYiroUSJp8qyP1XwL%2FEKDd7RsksQvG2Z25DrUg%2Bcqq4eXu1DFleuvHcDVasKHkytV3kszQZoLWPs0DL4go%2B8bNuFSAvOkoW4tOkRI1q38W9nd13dVskQUYNEN2sD%2F1BEYHWztmOEg8mt4NjgkwV28wik4u3eVqIknyxQzey%2FzksQwh95t1PpGb%2BGWtazEvEplUxPH68uYNKO7cbPSHy4eTtCVtbKPiO44J7A9mpI0rSpZxO%2F70lTSw5x%2FyY0HpSgCocC6ZzFVnl2LfqCzs%2FD7pnyJzqV%2Bhi9A4PrX%2FUXwnYTzedUbM5HODlFX54wjr2VLAfMtUdmnFDuQ1xQWix2tNU%2B0xxbnVB66Y%2FkcRLUfzEzNK90PR9cgwTAC9AIy2kU197HEgm0bpYK8o%2BeGqbo2BzOkWSL58w1%2FjcwQY6pgEu2Nd8xJaOf2y%2FG%2Bv2wx6BVovWgg9TweSJd5KxrbKZq6IIwP57WAzlwddgFeRrEyRJLq%2FgBCjp4CC3Y0N1%2FOTqOchTxolIiYuHACxQliOLgMqLU8gt9gByXf2U70PssATZD%2FZtvRpCAefvCGfzbvuBFbInZjRGjyHW4viYfYxmnrfwsS3juhJNv6uUbE%2FZGZ%2F4OoKNT0L5mdXQJOOieJI3aF7dOG35&X-Amz-Signature=cea637bba422152407d6330a071aaa613262392dab6b6a9e6aa49337caa3821d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WJR2RJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwRvtHJ4taL%2Bv7PUaBDb9vKlNx%2B0zrrxr%2B8YxCL96QGAiARnYEVWRvpSVB6Ijt6Grn5WN0joCRny0WwLMPBdUFD2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG%2FxUhmpUl0CBpayLKtwDp3zBJwea8SZPHHNsAQxtHWIz1in6lZuDWIIRhkg1hz7R6dqtFHCO3kFuOhSQZ7oXbS8qY1ZQSJ0GTYl4Sdno14WkDqjwcw8OT6ykHj3rg0pE4cUrc4PAKMx0nfcOj3%2FTuZjGaoSHkBBR3Fsfvsgd6dH9tbDX38gmkJEYiAfqWmVHxahMR03okdJmCqWhVKiCLwCxrgkqAbv7mlDHoo7ojNpMTO8gnhYiroUSJp8qyP1XwL%2FEKDd7RsksQvG2Z25DrUg%2Bcqq4eXu1DFleuvHcDVasKHkytV3kszQZoLWPs0DL4go%2B8bNuFSAvOkoW4tOkRI1q38W9nd13dVskQUYNEN2sD%2F1BEYHWztmOEg8mt4NjgkwV28wik4u3eVqIknyxQzey%2FzksQwh95t1PpGb%2BGWtazEvEplUxPH68uYNKO7cbPSHy4eTtCVtbKPiO44J7A9mpI0rSpZxO%2F70lTSw5x%2FyY0HpSgCocC6ZzFVnl2LfqCzs%2FD7pnyJzqV%2Bhi9A4PrX%2FUXwnYTzedUbM5HODlFX54wjr2VLAfMtUdmnFDuQ1xQWix2tNU%2B0xxbnVB66Y%2FkcRLUfzEzNK90PR9cgwTAC9AIy2kU197HEgm0bpYK8o%2BeGqbo2BzOkWSL58w1%2FjcwQY6pgEu2Nd8xJaOf2y%2FG%2Bv2wx6BVovWgg9TweSJd5KxrbKZq6IIwP57WAzlwddgFeRrEyRJLq%2FgBCjp4CC3Y0N1%2FOTqOchTxolIiYuHACxQliOLgMqLU8gt9gByXf2U70PssATZD%2FZtvRpCAefvCGfzbvuBFbInZjRGjyHW4viYfYxmnrfwsS3juhJNv6uUbE%2FZGZ%2F4OoKNT0L5mdXQJOOieJI3aF7dOG35&X-Amz-Signature=2ac0d0de056243860edbe49a8fb82634d85e20d8ee20b9a34db8161a19045bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WJR2RJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwRvtHJ4taL%2Bv7PUaBDb9vKlNx%2B0zrrxr%2B8YxCL96QGAiARnYEVWRvpSVB6Ijt6Grn5WN0joCRny0WwLMPBdUFD2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG%2FxUhmpUl0CBpayLKtwDp3zBJwea8SZPHHNsAQxtHWIz1in6lZuDWIIRhkg1hz7R6dqtFHCO3kFuOhSQZ7oXbS8qY1ZQSJ0GTYl4Sdno14WkDqjwcw8OT6ykHj3rg0pE4cUrc4PAKMx0nfcOj3%2FTuZjGaoSHkBBR3Fsfvsgd6dH9tbDX38gmkJEYiAfqWmVHxahMR03okdJmCqWhVKiCLwCxrgkqAbv7mlDHoo7ojNpMTO8gnhYiroUSJp8qyP1XwL%2FEKDd7RsksQvG2Z25DrUg%2Bcqq4eXu1DFleuvHcDVasKHkytV3kszQZoLWPs0DL4go%2B8bNuFSAvOkoW4tOkRI1q38W9nd13dVskQUYNEN2sD%2F1BEYHWztmOEg8mt4NjgkwV28wik4u3eVqIknyxQzey%2FzksQwh95t1PpGb%2BGWtazEvEplUxPH68uYNKO7cbPSHy4eTtCVtbKPiO44J7A9mpI0rSpZxO%2F70lTSw5x%2FyY0HpSgCocC6ZzFVnl2LfqCzs%2FD7pnyJzqV%2Bhi9A4PrX%2FUXwnYTzedUbM5HODlFX54wjr2VLAfMtUdmnFDuQ1xQWix2tNU%2B0xxbnVB66Y%2FkcRLUfzEzNK90PR9cgwTAC9AIy2kU197HEgm0bpYK8o%2BeGqbo2BzOkWSL58w1%2FjcwQY6pgEu2Nd8xJaOf2y%2FG%2Bv2wx6BVovWgg9TweSJd5KxrbKZq6IIwP57WAzlwddgFeRrEyRJLq%2FgBCjp4CC3Y0N1%2FOTqOchTxolIiYuHACxQliOLgMqLU8gt9gByXf2U70PssATZD%2FZtvRpCAefvCGfzbvuBFbInZjRGjyHW4viYfYxmnrfwsS3juhJNv6uUbE%2FZGZ%2F4OoKNT0L5mdXQJOOieJI3aF7dOG35&X-Amz-Signature=98b269cd3d3fc0750d5ed221bd5f6589513df1b353143b27df83c32e7f3b70fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
