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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2FMLPC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLAYSL%2FNfH1Kj0sNJKNxrFFRHwNYT74hl4xmHsR0H0zAiAAx8Je2q0TuxpTSLaE34IPrU6vzkEQUQ7GU243OXwO1Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMeb92vxowD9H8UsEJKtwDlUtdXEp%2BbrBIg0jminaNWkA5sY%2BjcKPbOP1ycKHkTMVQGE8OGvF90oP06cjsyb2T3FE8Dn9o8NeKwv6HLjtiGmzg9tG5iW7%2BwNjypSpOoNaKxBY9FX01SwmXu%2FbaisQ8KwwTliJ%2F4sbNMtzOFxoG3BhokSf9Jq0LZ4yQkCqG7JJTHroEZxkXiMS8NdQ1aozdZYUatwtsdpBapAn3wIjaqUE7f7i015X2eSAvBp%2FQCdWRlV2r9UOskQCVtQkcI6Kc%2FrI4qWsiGjXbl4Xls4stxXKw0sJ7JBYHmCWH4NOYsJ3wQnNoOO4xy6qqWjCJaPS9YEgWsLfbEln2%2B9SD47qvbQjPucv7OrgtJHsjteyK7dp4QTsa%2BPaf2rP6cMhufQIcMH8VN%2BFUSPU6r3kG93hfqFLqDkz5L0CHRHim%2FipHTxdnMzZ5iqTW5XMTS%2BS%2BuapZLc5u1DuN6GFdzWnlJL6Rydjlwyepxj6FnDtKB4yIcmBRhMkUVTUunpSDLT%2BQkaM6sptRbBCJEqQzFsC3H3%2FzqtK14njsG3Zd%2BQ%2B%2BsO427UWrHY5WYXXoHlYYyKefirgD0EGCfztPDkT6ed5PnUYw7p%2FHXTwady1LW3jOPTbLj%2FFYPul4GPEi4gZiMaEwm4y4wAY6pgEQ9sa9N9njtw6HRTPO%2FjYQjJM2wvtrRv%2B6lsDQy5JuiMAHBcNVTxIXrkmW6PzAfS2MljE4shGkMRHKNOjxVvmOmaf2RCCTR0AvQ65EDgQHbVtn%2BItxI%2BhpbCdIlvrI5XYdJHoxRzp0xWiKpFYiIwnxPFN8cprPdxyWYhznHNrxg2TEvi17nGMCcHc4AjaPzsUejVSgazuPk5%2FYW79thSKU%2BbxF7tDR&X-Amz-Signature=78e54d877f5e711e3a5decbadb801c31554ade8f5d697d9f4b9a8f9ab1c5f0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2FMLPC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLAYSL%2FNfH1Kj0sNJKNxrFFRHwNYT74hl4xmHsR0H0zAiAAx8Je2q0TuxpTSLaE34IPrU6vzkEQUQ7GU243OXwO1Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMeb92vxowD9H8UsEJKtwDlUtdXEp%2BbrBIg0jminaNWkA5sY%2BjcKPbOP1ycKHkTMVQGE8OGvF90oP06cjsyb2T3FE8Dn9o8NeKwv6HLjtiGmzg9tG5iW7%2BwNjypSpOoNaKxBY9FX01SwmXu%2FbaisQ8KwwTliJ%2F4sbNMtzOFxoG3BhokSf9Jq0LZ4yQkCqG7JJTHroEZxkXiMS8NdQ1aozdZYUatwtsdpBapAn3wIjaqUE7f7i015X2eSAvBp%2FQCdWRlV2r9UOskQCVtQkcI6Kc%2FrI4qWsiGjXbl4Xls4stxXKw0sJ7JBYHmCWH4NOYsJ3wQnNoOO4xy6qqWjCJaPS9YEgWsLfbEln2%2B9SD47qvbQjPucv7OrgtJHsjteyK7dp4QTsa%2BPaf2rP6cMhufQIcMH8VN%2BFUSPU6r3kG93hfqFLqDkz5L0CHRHim%2FipHTxdnMzZ5iqTW5XMTS%2BS%2BuapZLc5u1DuN6GFdzWnlJL6Rydjlwyepxj6FnDtKB4yIcmBRhMkUVTUunpSDLT%2BQkaM6sptRbBCJEqQzFsC3H3%2FzqtK14njsG3Zd%2BQ%2B%2BsO427UWrHY5WYXXoHlYYyKefirgD0EGCfztPDkT6ed5PnUYw7p%2FHXTwady1LW3jOPTbLj%2FFYPul4GPEi4gZiMaEwm4y4wAY6pgEQ9sa9N9njtw6HRTPO%2FjYQjJM2wvtrRv%2B6lsDQy5JuiMAHBcNVTxIXrkmW6PzAfS2MljE4shGkMRHKNOjxVvmOmaf2RCCTR0AvQ65EDgQHbVtn%2BItxI%2BhpbCdIlvrI5XYdJHoxRzp0xWiKpFYiIwnxPFN8cprPdxyWYhznHNrxg2TEvi17nGMCcHc4AjaPzsUejVSgazuPk5%2FYW79thSKU%2BbxF7tDR&X-Amz-Signature=87af197784edc48577f8b8dafc1fb7204171534e9765a5a5f69c98361e0dd13a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2FMLPC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLAYSL%2FNfH1Kj0sNJKNxrFFRHwNYT74hl4xmHsR0H0zAiAAx8Je2q0TuxpTSLaE34IPrU6vzkEQUQ7GU243OXwO1Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMeb92vxowD9H8UsEJKtwDlUtdXEp%2BbrBIg0jminaNWkA5sY%2BjcKPbOP1ycKHkTMVQGE8OGvF90oP06cjsyb2T3FE8Dn9o8NeKwv6HLjtiGmzg9tG5iW7%2BwNjypSpOoNaKxBY9FX01SwmXu%2FbaisQ8KwwTliJ%2F4sbNMtzOFxoG3BhokSf9Jq0LZ4yQkCqG7JJTHroEZxkXiMS8NdQ1aozdZYUatwtsdpBapAn3wIjaqUE7f7i015X2eSAvBp%2FQCdWRlV2r9UOskQCVtQkcI6Kc%2FrI4qWsiGjXbl4Xls4stxXKw0sJ7JBYHmCWH4NOYsJ3wQnNoOO4xy6qqWjCJaPS9YEgWsLfbEln2%2B9SD47qvbQjPucv7OrgtJHsjteyK7dp4QTsa%2BPaf2rP6cMhufQIcMH8VN%2BFUSPU6r3kG93hfqFLqDkz5L0CHRHim%2FipHTxdnMzZ5iqTW5XMTS%2BS%2BuapZLc5u1DuN6GFdzWnlJL6Rydjlwyepxj6FnDtKB4yIcmBRhMkUVTUunpSDLT%2BQkaM6sptRbBCJEqQzFsC3H3%2FzqtK14njsG3Zd%2BQ%2B%2BsO427UWrHY5WYXXoHlYYyKefirgD0EGCfztPDkT6ed5PnUYw7p%2FHXTwady1LW3jOPTbLj%2FFYPul4GPEi4gZiMaEwm4y4wAY6pgEQ9sa9N9njtw6HRTPO%2FjYQjJM2wvtrRv%2B6lsDQy5JuiMAHBcNVTxIXrkmW6PzAfS2MljE4shGkMRHKNOjxVvmOmaf2RCCTR0AvQ65EDgQHbVtn%2BItxI%2BhpbCdIlvrI5XYdJHoxRzp0xWiKpFYiIwnxPFN8cprPdxyWYhznHNrxg2TEvi17nGMCcHc4AjaPzsUejVSgazuPk5%2FYW79thSKU%2BbxF7tDR&X-Amz-Signature=3d92abd277c9932a8762bd3e23e8801f04017e9f784629fad23df15fd746c927&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2FMLPC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLAYSL%2FNfH1Kj0sNJKNxrFFRHwNYT74hl4xmHsR0H0zAiAAx8Je2q0TuxpTSLaE34IPrU6vzkEQUQ7GU243OXwO1Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMeb92vxowD9H8UsEJKtwDlUtdXEp%2BbrBIg0jminaNWkA5sY%2BjcKPbOP1ycKHkTMVQGE8OGvF90oP06cjsyb2T3FE8Dn9o8NeKwv6HLjtiGmzg9tG5iW7%2BwNjypSpOoNaKxBY9FX01SwmXu%2FbaisQ8KwwTliJ%2F4sbNMtzOFxoG3BhokSf9Jq0LZ4yQkCqG7JJTHroEZxkXiMS8NdQ1aozdZYUatwtsdpBapAn3wIjaqUE7f7i015X2eSAvBp%2FQCdWRlV2r9UOskQCVtQkcI6Kc%2FrI4qWsiGjXbl4Xls4stxXKw0sJ7JBYHmCWH4NOYsJ3wQnNoOO4xy6qqWjCJaPS9YEgWsLfbEln2%2B9SD47qvbQjPucv7OrgtJHsjteyK7dp4QTsa%2BPaf2rP6cMhufQIcMH8VN%2BFUSPU6r3kG93hfqFLqDkz5L0CHRHim%2FipHTxdnMzZ5iqTW5XMTS%2BS%2BuapZLc5u1DuN6GFdzWnlJL6Rydjlwyepxj6FnDtKB4yIcmBRhMkUVTUunpSDLT%2BQkaM6sptRbBCJEqQzFsC3H3%2FzqtK14njsG3Zd%2BQ%2B%2BsO427UWrHY5WYXXoHlYYyKefirgD0EGCfztPDkT6ed5PnUYw7p%2FHXTwady1LW3jOPTbLj%2FFYPul4GPEi4gZiMaEwm4y4wAY6pgEQ9sa9N9njtw6HRTPO%2FjYQjJM2wvtrRv%2B6lsDQy5JuiMAHBcNVTxIXrkmW6PzAfS2MljE4shGkMRHKNOjxVvmOmaf2RCCTR0AvQ65EDgQHbVtn%2BItxI%2BhpbCdIlvrI5XYdJHoxRzp0xWiKpFYiIwnxPFN8cprPdxyWYhznHNrxg2TEvi17nGMCcHc4AjaPzsUejVSgazuPk5%2FYW79thSKU%2BbxF7tDR&X-Amz-Signature=eb721752c50c09d2997e9146dd5a66144bf23cd20cb0525c4d4a31fc51705a89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2FMLPC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLAYSL%2FNfH1Kj0sNJKNxrFFRHwNYT74hl4xmHsR0H0zAiAAx8Je2q0TuxpTSLaE34IPrU6vzkEQUQ7GU243OXwO1Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMeb92vxowD9H8UsEJKtwDlUtdXEp%2BbrBIg0jminaNWkA5sY%2BjcKPbOP1ycKHkTMVQGE8OGvF90oP06cjsyb2T3FE8Dn9o8NeKwv6HLjtiGmzg9tG5iW7%2BwNjypSpOoNaKxBY9FX01SwmXu%2FbaisQ8KwwTliJ%2F4sbNMtzOFxoG3BhokSf9Jq0LZ4yQkCqG7JJTHroEZxkXiMS8NdQ1aozdZYUatwtsdpBapAn3wIjaqUE7f7i015X2eSAvBp%2FQCdWRlV2r9UOskQCVtQkcI6Kc%2FrI4qWsiGjXbl4Xls4stxXKw0sJ7JBYHmCWH4NOYsJ3wQnNoOO4xy6qqWjCJaPS9YEgWsLfbEln2%2B9SD47qvbQjPucv7OrgtJHsjteyK7dp4QTsa%2BPaf2rP6cMhufQIcMH8VN%2BFUSPU6r3kG93hfqFLqDkz5L0CHRHim%2FipHTxdnMzZ5iqTW5XMTS%2BS%2BuapZLc5u1DuN6GFdzWnlJL6Rydjlwyepxj6FnDtKB4yIcmBRhMkUVTUunpSDLT%2BQkaM6sptRbBCJEqQzFsC3H3%2FzqtK14njsG3Zd%2BQ%2B%2BsO427UWrHY5WYXXoHlYYyKefirgD0EGCfztPDkT6ed5PnUYw7p%2FHXTwady1LW3jOPTbLj%2FFYPul4GPEi4gZiMaEwm4y4wAY6pgEQ9sa9N9njtw6HRTPO%2FjYQjJM2wvtrRv%2B6lsDQy5JuiMAHBcNVTxIXrkmW6PzAfS2MljE4shGkMRHKNOjxVvmOmaf2RCCTR0AvQ65EDgQHbVtn%2BItxI%2BhpbCdIlvrI5XYdJHoxRzp0xWiKpFYiIwnxPFN8cprPdxyWYhznHNrxg2TEvi17nGMCcHc4AjaPzsUejVSgazuPk5%2FYW79thSKU%2BbxF7tDR&X-Amz-Signature=1218f5c8f969a581985f1e716da56c34ed95c8bdf44b71483217a7806683a83b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
