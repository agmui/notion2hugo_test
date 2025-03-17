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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULTS4TL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaIFeai8lXJcgRT%2B4LXg3BnxOKk3gZUIgPaC7I3xMZNAiEAj86Oi6DuXz0HhCPtHwyvXiY%2FQarP0%2FyqMfG8Bv%2FfR4Uq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEsKh4YgUcqPhEuOeSrcA1vsqFg4A%2Bpdl8pqd1%2FnLOQjxE7BBzbgG6DWp4koPR%2FwkIWqCdX8e9fcjx8f5MQehj8JDA9CtLT0Uob0XV4gzzN%2BDX1KbwsviMUvp%2F1JMSzs6YGGvkDBUTJb5sl5xIN5yIjvC8M6CoPvih8BogV97bPUD7KNHeDC1uZ6puCcH0f1Fo%2Bs0tCIz4hlFFLpoMnKotxCvXXsRHJyU1waT3oyQYFPiJ70fivu2gBfjJRexdGPANE3oIeiLQT%2BdfxAsVEu5CVhtYjxR%2BTsQpLNzHGK6M9xHdb8b1kfZcYTD9uwtz3E%2BSnJ9OkLn0F%2BYRftOi70k7MKt%2B9w6CBUiejN9TEqW1HUQiFoBpkUxODboi4ZNWFROzhWzxI7RfdZo3bBUweei0Zt1JnJ4Nr052Bdl%2F566KhHJ%2FASM%2BQ3b8uL%2Bn0hd49H18T%2Fzpi3M6xgjFoSLn8PXwIpjT%2Bs6dx8PtWKGQMkO49fKyydlNTotvPh4EY6Cagaz6NULGfQF9lqyEpNhYpPVpkN2ChxxT7IgUv1Ap%2B4FfhXzHPFqHyd%2F7YRdTivWAyiPvFiSj9GQmvEihwDul%2FscW4w897j%2FHVl0UsbiPS%2B9VWul6nC5WBh0ICQbh7w%2BvKdcLmQH8mk6TZMVczFMM7A4r4GOqUBCDBj0hcSxTdYCphfB45pS%2Bz%2FqcBHgEKpJ8tZ48uXI1VHjv6%2FDzg1ahzq6M%2F7jH2poYReWELJQfUvRoMvR%2Ffl0teDspST1i56EaoW1DvPJVabEnu3gZkqmI%2F%2BVm0QApuODSh9uWr%2FXpFOkmvlMwq1V1GncFKyizrk1xY8h%2BkcIadAUs%2F1%2B%2BbmnKLsdYOjcQUH8rtcezbfMw24%2FumpAS2FK6g3XBR0&X-Amz-Signature=54d46778188768e08fda327ea7ccc14983f3d74ad548b4b7b34df01629e16b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULTS4TL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaIFeai8lXJcgRT%2B4LXg3BnxOKk3gZUIgPaC7I3xMZNAiEAj86Oi6DuXz0HhCPtHwyvXiY%2FQarP0%2FyqMfG8Bv%2FfR4Uq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEsKh4YgUcqPhEuOeSrcA1vsqFg4A%2Bpdl8pqd1%2FnLOQjxE7BBzbgG6DWp4koPR%2FwkIWqCdX8e9fcjx8f5MQehj8JDA9CtLT0Uob0XV4gzzN%2BDX1KbwsviMUvp%2F1JMSzs6YGGvkDBUTJb5sl5xIN5yIjvC8M6CoPvih8BogV97bPUD7KNHeDC1uZ6puCcH0f1Fo%2Bs0tCIz4hlFFLpoMnKotxCvXXsRHJyU1waT3oyQYFPiJ70fivu2gBfjJRexdGPANE3oIeiLQT%2BdfxAsVEu5CVhtYjxR%2BTsQpLNzHGK6M9xHdb8b1kfZcYTD9uwtz3E%2BSnJ9OkLn0F%2BYRftOi70k7MKt%2B9w6CBUiejN9TEqW1HUQiFoBpkUxODboi4ZNWFROzhWzxI7RfdZo3bBUweei0Zt1JnJ4Nr052Bdl%2F566KhHJ%2FASM%2BQ3b8uL%2Bn0hd49H18T%2Fzpi3M6xgjFoSLn8PXwIpjT%2Bs6dx8PtWKGQMkO49fKyydlNTotvPh4EY6Cagaz6NULGfQF9lqyEpNhYpPVpkN2ChxxT7IgUv1Ap%2B4FfhXzHPFqHyd%2F7YRdTivWAyiPvFiSj9GQmvEihwDul%2FscW4w897j%2FHVl0UsbiPS%2B9VWul6nC5WBh0ICQbh7w%2BvKdcLmQH8mk6TZMVczFMM7A4r4GOqUBCDBj0hcSxTdYCphfB45pS%2Bz%2FqcBHgEKpJ8tZ48uXI1VHjv6%2FDzg1ahzq6M%2F7jH2poYReWELJQfUvRoMvR%2Ffl0teDspST1i56EaoW1DvPJVabEnu3gZkqmI%2F%2BVm0QApuODSh9uWr%2FXpFOkmvlMwq1V1GncFKyizrk1xY8h%2BkcIadAUs%2F1%2B%2BbmnKLsdYOjcQUH8rtcezbfMw24%2FumpAS2FK6g3XBR0&X-Amz-Signature=75a947711dce90e9b17dc4b4a90f49044b1d722b81c5ab34d0ccf458a77b5bca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULTS4TL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaIFeai8lXJcgRT%2B4LXg3BnxOKk3gZUIgPaC7I3xMZNAiEAj86Oi6DuXz0HhCPtHwyvXiY%2FQarP0%2FyqMfG8Bv%2FfR4Uq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEsKh4YgUcqPhEuOeSrcA1vsqFg4A%2Bpdl8pqd1%2FnLOQjxE7BBzbgG6DWp4koPR%2FwkIWqCdX8e9fcjx8f5MQehj8JDA9CtLT0Uob0XV4gzzN%2BDX1KbwsviMUvp%2F1JMSzs6YGGvkDBUTJb5sl5xIN5yIjvC8M6CoPvih8BogV97bPUD7KNHeDC1uZ6puCcH0f1Fo%2Bs0tCIz4hlFFLpoMnKotxCvXXsRHJyU1waT3oyQYFPiJ70fivu2gBfjJRexdGPANE3oIeiLQT%2BdfxAsVEu5CVhtYjxR%2BTsQpLNzHGK6M9xHdb8b1kfZcYTD9uwtz3E%2BSnJ9OkLn0F%2BYRftOi70k7MKt%2B9w6CBUiejN9TEqW1HUQiFoBpkUxODboi4ZNWFROzhWzxI7RfdZo3bBUweei0Zt1JnJ4Nr052Bdl%2F566KhHJ%2FASM%2BQ3b8uL%2Bn0hd49H18T%2Fzpi3M6xgjFoSLn8PXwIpjT%2Bs6dx8PtWKGQMkO49fKyydlNTotvPh4EY6Cagaz6NULGfQF9lqyEpNhYpPVpkN2ChxxT7IgUv1Ap%2B4FfhXzHPFqHyd%2F7YRdTivWAyiPvFiSj9GQmvEihwDul%2FscW4w897j%2FHVl0UsbiPS%2B9VWul6nC5WBh0ICQbh7w%2BvKdcLmQH8mk6TZMVczFMM7A4r4GOqUBCDBj0hcSxTdYCphfB45pS%2Bz%2FqcBHgEKpJ8tZ48uXI1VHjv6%2FDzg1ahzq6M%2F7jH2poYReWELJQfUvRoMvR%2Ffl0teDspST1i56EaoW1DvPJVabEnu3gZkqmI%2F%2BVm0QApuODSh9uWr%2FXpFOkmvlMwq1V1GncFKyizrk1xY8h%2BkcIadAUs%2F1%2B%2BbmnKLsdYOjcQUH8rtcezbfMw24%2FumpAS2FK6g3XBR0&X-Amz-Signature=2d1241fabe9c9b29ad5a52128c5fb3771c8e1cc8e0453004ef409d602c36d1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULTS4TL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaIFeai8lXJcgRT%2B4LXg3BnxOKk3gZUIgPaC7I3xMZNAiEAj86Oi6DuXz0HhCPtHwyvXiY%2FQarP0%2FyqMfG8Bv%2FfR4Uq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEsKh4YgUcqPhEuOeSrcA1vsqFg4A%2Bpdl8pqd1%2FnLOQjxE7BBzbgG6DWp4koPR%2FwkIWqCdX8e9fcjx8f5MQehj8JDA9CtLT0Uob0XV4gzzN%2BDX1KbwsviMUvp%2F1JMSzs6YGGvkDBUTJb5sl5xIN5yIjvC8M6CoPvih8BogV97bPUD7KNHeDC1uZ6puCcH0f1Fo%2Bs0tCIz4hlFFLpoMnKotxCvXXsRHJyU1waT3oyQYFPiJ70fivu2gBfjJRexdGPANE3oIeiLQT%2BdfxAsVEu5CVhtYjxR%2BTsQpLNzHGK6M9xHdb8b1kfZcYTD9uwtz3E%2BSnJ9OkLn0F%2BYRftOi70k7MKt%2B9w6CBUiejN9TEqW1HUQiFoBpkUxODboi4ZNWFROzhWzxI7RfdZo3bBUweei0Zt1JnJ4Nr052Bdl%2F566KhHJ%2FASM%2BQ3b8uL%2Bn0hd49H18T%2Fzpi3M6xgjFoSLn8PXwIpjT%2Bs6dx8PtWKGQMkO49fKyydlNTotvPh4EY6Cagaz6NULGfQF9lqyEpNhYpPVpkN2ChxxT7IgUv1Ap%2B4FfhXzHPFqHyd%2F7YRdTivWAyiPvFiSj9GQmvEihwDul%2FscW4w897j%2FHVl0UsbiPS%2B9VWul6nC5WBh0ICQbh7w%2BvKdcLmQH8mk6TZMVczFMM7A4r4GOqUBCDBj0hcSxTdYCphfB45pS%2Bz%2FqcBHgEKpJ8tZ48uXI1VHjv6%2FDzg1ahzq6M%2F7jH2poYReWELJQfUvRoMvR%2Ffl0teDspST1i56EaoW1DvPJVabEnu3gZkqmI%2F%2BVm0QApuODSh9uWr%2FXpFOkmvlMwq1V1GncFKyizrk1xY8h%2BkcIadAUs%2F1%2B%2BbmnKLsdYOjcQUH8rtcezbfMw24%2FumpAS2FK6g3XBR0&X-Amz-Signature=82fe096e1225f1f1fa31a704d62b588b48aaacb935a8c689cb5021a4b5219e52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULTS4TL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaIFeai8lXJcgRT%2B4LXg3BnxOKk3gZUIgPaC7I3xMZNAiEAj86Oi6DuXz0HhCPtHwyvXiY%2FQarP0%2FyqMfG8Bv%2FfR4Uq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEsKh4YgUcqPhEuOeSrcA1vsqFg4A%2Bpdl8pqd1%2FnLOQjxE7BBzbgG6DWp4koPR%2FwkIWqCdX8e9fcjx8f5MQehj8JDA9CtLT0Uob0XV4gzzN%2BDX1KbwsviMUvp%2F1JMSzs6YGGvkDBUTJb5sl5xIN5yIjvC8M6CoPvih8BogV97bPUD7KNHeDC1uZ6puCcH0f1Fo%2Bs0tCIz4hlFFLpoMnKotxCvXXsRHJyU1waT3oyQYFPiJ70fivu2gBfjJRexdGPANE3oIeiLQT%2BdfxAsVEu5CVhtYjxR%2BTsQpLNzHGK6M9xHdb8b1kfZcYTD9uwtz3E%2BSnJ9OkLn0F%2BYRftOi70k7MKt%2B9w6CBUiejN9TEqW1HUQiFoBpkUxODboi4ZNWFROzhWzxI7RfdZo3bBUweei0Zt1JnJ4Nr052Bdl%2F566KhHJ%2FASM%2BQ3b8uL%2Bn0hd49H18T%2Fzpi3M6xgjFoSLn8PXwIpjT%2Bs6dx8PtWKGQMkO49fKyydlNTotvPh4EY6Cagaz6NULGfQF9lqyEpNhYpPVpkN2ChxxT7IgUv1Ap%2B4FfhXzHPFqHyd%2F7YRdTivWAyiPvFiSj9GQmvEihwDul%2FscW4w897j%2FHVl0UsbiPS%2B9VWul6nC5WBh0ICQbh7w%2BvKdcLmQH8mk6TZMVczFMM7A4r4GOqUBCDBj0hcSxTdYCphfB45pS%2Bz%2FqcBHgEKpJ8tZ48uXI1VHjv6%2FDzg1ahzq6M%2F7jH2poYReWELJQfUvRoMvR%2Ffl0teDspST1i56EaoW1DvPJVabEnu3gZkqmI%2F%2BVm0QApuODSh9uWr%2FXpFOkmvlMwq1V1GncFKyizrk1xY8h%2BkcIadAUs%2F1%2B%2BbmnKLsdYOjcQUH8rtcezbfMw24%2FumpAS2FK6g3XBR0&X-Amz-Signature=f9eda7dcd2f62880c62444d2cb07049610bbe9b9096379b31c0cabe893d1fb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
