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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ32UCRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAjS4afj5TVKOop5mKRG0q6Z71jZzTR7MYbFUxFX8d%2BMAiBGxfXpiimg4neAZffXVRq7PwgCK696kHKPX0RyXI%2FKbCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMDyPSES565mjZ429RKtwDWmILWqcVWurXX%2Fi%2BfkvgAxcyMrs0EG3sGmmgStzJ3039oiEBroN8XpuO0Fjs7VA39TPHuVkxDZV%2BjqTapC6F86T8gFddFP%2BZHHdPcWcbalTpQo0dOyqcIHGcUsuhXruL4xwl85liO5pX0lC%2BFuXCfPZfmUAZu1Hy2S6z%2BMKK5X%2BSPadJdSSS5gQUaFH8zaujx6yNxY%2BkHE9MaLNAWlyUwI1ta8zkAxavgwlISJs%2BLTGWgxv5nq%2FsegN2HMDxjmrQtkpzo0iW5CyNMER9eKeTp8jt1rLBd0i7oSxsTlBSTdxqtXJ4H53Eqw3NyjzhrksYh2gxczP5WrTYMPB4LLR7ZfSNIBBQh%2FO4p3QhdxrvBo9tim7s6%2Bxufq82WuMgaPD9f4okvjgkwzAA0RNWcGqm6OrjPUSZka7ZoH7qRyX%2BTkwdlMUkZETOreLu82R7SASSyjDjw8XGzp49avMyoxsYe6BUWU10tYUh8sLtrluVC4ozBRPDlybQtoKnQoQVWQZq0Up8h%2BjrmPTsTUceXfChWRrz3qpcW9iw7irCduLeCRsDQzutjAiacXdh5u9NvXQgoTzA7XPCjfu1vM7YV41AKx3WSL9138z9lGqr0PbvQ3NZg%2BOfUlJl%2FhxvFykwppbIwQY6pgHqrM8NyHXRZdOv5Jb%2F8Fvul%2FjwyG2OKZgnp8AHWAEEcfciyZHliXVvd7Qy7Co1jeM9gT99J258dATJmVfCtOxQB%2F%2Fufg3O6fbwiXfraYimJzKrh4%2F%2Fzl6inO7eiOOoHLzc0aGDEjA1Bp9%2FavjYuPf%2F5gfrC9wsbPAYk36YXIZD8BvM74O%2FRd8wSWjUephFF8YTnH4BXchU9VtDEKrAC5GWJAzFPIfN&X-Amz-Signature=ac246faf29e034614dbed8e167b94a735ed2629753f00cbb10fb14d7d7e9698a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ32UCRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAjS4afj5TVKOop5mKRG0q6Z71jZzTR7MYbFUxFX8d%2BMAiBGxfXpiimg4neAZffXVRq7PwgCK696kHKPX0RyXI%2FKbCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMDyPSES565mjZ429RKtwDWmILWqcVWurXX%2Fi%2BfkvgAxcyMrs0EG3sGmmgStzJ3039oiEBroN8XpuO0Fjs7VA39TPHuVkxDZV%2BjqTapC6F86T8gFddFP%2BZHHdPcWcbalTpQo0dOyqcIHGcUsuhXruL4xwl85liO5pX0lC%2BFuXCfPZfmUAZu1Hy2S6z%2BMKK5X%2BSPadJdSSS5gQUaFH8zaujx6yNxY%2BkHE9MaLNAWlyUwI1ta8zkAxavgwlISJs%2BLTGWgxv5nq%2FsegN2HMDxjmrQtkpzo0iW5CyNMER9eKeTp8jt1rLBd0i7oSxsTlBSTdxqtXJ4H53Eqw3NyjzhrksYh2gxczP5WrTYMPB4LLR7ZfSNIBBQh%2FO4p3QhdxrvBo9tim7s6%2Bxufq82WuMgaPD9f4okvjgkwzAA0RNWcGqm6OrjPUSZka7ZoH7qRyX%2BTkwdlMUkZETOreLu82R7SASSyjDjw8XGzp49avMyoxsYe6BUWU10tYUh8sLtrluVC4ozBRPDlybQtoKnQoQVWQZq0Up8h%2BjrmPTsTUceXfChWRrz3qpcW9iw7irCduLeCRsDQzutjAiacXdh5u9NvXQgoTzA7XPCjfu1vM7YV41AKx3WSL9138z9lGqr0PbvQ3NZg%2BOfUlJl%2FhxvFykwppbIwQY6pgHqrM8NyHXRZdOv5Jb%2F8Fvul%2FjwyG2OKZgnp8AHWAEEcfciyZHliXVvd7Qy7Co1jeM9gT99J258dATJmVfCtOxQB%2F%2Fufg3O6fbwiXfraYimJzKrh4%2F%2Fzl6inO7eiOOoHLzc0aGDEjA1Bp9%2FavjYuPf%2F5gfrC9wsbPAYk36YXIZD8BvM74O%2FRd8wSWjUephFF8YTnH4BXchU9VtDEKrAC5GWJAzFPIfN&X-Amz-Signature=056eb25110dbffbfae9a54fb77e5f6e22f263c8872735a28608403cb6d1afd57&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ32UCRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAjS4afj5TVKOop5mKRG0q6Z71jZzTR7MYbFUxFX8d%2BMAiBGxfXpiimg4neAZffXVRq7PwgCK696kHKPX0RyXI%2FKbCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMDyPSES565mjZ429RKtwDWmILWqcVWurXX%2Fi%2BfkvgAxcyMrs0EG3sGmmgStzJ3039oiEBroN8XpuO0Fjs7VA39TPHuVkxDZV%2BjqTapC6F86T8gFddFP%2BZHHdPcWcbalTpQo0dOyqcIHGcUsuhXruL4xwl85liO5pX0lC%2BFuXCfPZfmUAZu1Hy2S6z%2BMKK5X%2BSPadJdSSS5gQUaFH8zaujx6yNxY%2BkHE9MaLNAWlyUwI1ta8zkAxavgwlISJs%2BLTGWgxv5nq%2FsegN2HMDxjmrQtkpzo0iW5CyNMER9eKeTp8jt1rLBd0i7oSxsTlBSTdxqtXJ4H53Eqw3NyjzhrksYh2gxczP5WrTYMPB4LLR7ZfSNIBBQh%2FO4p3QhdxrvBo9tim7s6%2Bxufq82WuMgaPD9f4okvjgkwzAA0RNWcGqm6OrjPUSZka7ZoH7qRyX%2BTkwdlMUkZETOreLu82R7SASSyjDjw8XGzp49avMyoxsYe6BUWU10tYUh8sLtrluVC4ozBRPDlybQtoKnQoQVWQZq0Up8h%2BjrmPTsTUceXfChWRrz3qpcW9iw7irCduLeCRsDQzutjAiacXdh5u9NvXQgoTzA7XPCjfu1vM7YV41AKx3WSL9138z9lGqr0PbvQ3NZg%2BOfUlJl%2FhxvFykwppbIwQY6pgHqrM8NyHXRZdOv5Jb%2F8Fvul%2FjwyG2OKZgnp8AHWAEEcfciyZHliXVvd7Qy7Co1jeM9gT99J258dATJmVfCtOxQB%2F%2Fufg3O6fbwiXfraYimJzKrh4%2F%2Fzl6inO7eiOOoHLzc0aGDEjA1Bp9%2FavjYuPf%2F5gfrC9wsbPAYk36YXIZD8BvM74O%2FRd8wSWjUephFF8YTnH4BXchU9VtDEKrAC5GWJAzFPIfN&X-Amz-Signature=155d18bb5c0f72a3df0b2a1822d78121bbe45b89607c9a246c933b23dd4a8a85&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ32UCRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAjS4afj5TVKOop5mKRG0q6Z71jZzTR7MYbFUxFX8d%2BMAiBGxfXpiimg4neAZffXVRq7PwgCK696kHKPX0RyXI%2FKbCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMDyPSES565mjZ429RKtwDWmILWqcVWurXX%2Fi%2BfkvgAxcyMrs0EG3sGmmgStzJ3039oiEBroN8XpuO0Fjs7VA39TPHuVkxDZV%2BjqTapC6F86T8gFddFP%2BZHHdPcWcbalTpQo0dOyqcIHGcUsuhXruL4xwl85liO5pX0lC%2BFuXCfPZfmUAZu1Hy2S6z%2BMKK5X%2BSPadJdSSS5gQUaFH8zaujx6yNxY%2BkHE9MaLNAWlyUwI1ta8zkAxavgwlISJs%2BLTGWgxv5nq%2FsegN2HMDxjmrQtkpzo0iW5CyNMER9eKeTp8jt1rLBd0i7oSxsTlBSTdxqtXJ4H53Eqw3NyjzhrksYh2gxczP5WrTYMPB4LLR7ZfSNIBBQh%2FO4p3QhdxrvBo9tim7s6%2Bxufq82WuMgaPD9f4okvjgkwzAA0RNWcGqm6OrjPUSZka7ZoH7qRyX%2BTkwdlMUkZETOreLu82R7SASSyjDjw8XGzp49avMyoxsYe6BUWU10tYUh8sLtrluVC4ozBRPDlybQtoKnQoQVWQZq0Up8h%2BjrmPTsTUceXfChWRrz3qpcW9iw7irCduLeCRsDQzutjAiacXdh5u9NvXQgoTzA7XPCjfu1vM7YV41AKx3WSL9138z9lGqr0PbvQ3NZg%2BOfUlJl%2FhxvFykwppbIwQY6pgHqrM8NyHXRZdOv5Jb%2F8Fvul%2FjwyG2OKZgnp8AHWAEEcfciyZHliXVvd7Qy7Co1jeM9gT99J258dATJmVfCtOxQB%2F%2Fufg3O6fbwiXfraYimJzKrh4%2F%2Fzl6inO7eiOOoHLzc0aGDEjA1Bp9%2FavjYuPf%2F5gfrC9wsbPAYk36YXIZD8BvM74O%2FRd8wSWjUephFF8YTnH4BXchU9VtDEKrAC5GWJAzFPIfN&X-Amz-Signature=d2237b5e5b871bb0cd91118febecad30730a247f71c9bc8cfa9ce14db49e08b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ32UCRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAjS4afj5TVKOop5mKRG0q6Z71jZzTR7MYbFUxFX8d%2BMAiBGxfXpiimg4neAZffXVRq7PwgCK696kHKPX0RyXI%2FKbCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMDyPSES565mjZ429RKtwDWmILWqcVWurXX%2Fi%2BfkvgAxcyMrs0EG3sGmmgStzJ3039oiEBroN8XpuO0Fjs7VA39TPHuVkxDZV%2BjqTapC6F86T8gFddFP%2BZHHdPcWcbalTpQo0dOyqcIHGcUsuhXruL4xwl85liO5pX0lC%2BFuXCfPZfmUAZu1Hy2S6z%2BMKK5X%2BSPadJdSSS5gQUaFH8zaujx6yNxY%2BkHE9MaLNAWlyUwI1ta8zkAxavgwlISJs%2BLTGWgxv5nq%2FsegN2HMDxjmrQtkpzo0iW5CyNMER9eKeTp8jt1rLBd0i7oSxsTlBSTdxqtXJ4H53Eqw3NyjzhrksYh2gxczP5WrTYMPB4LLR7ZfSNIBBQh%2FO4p3QhdxrvBo9tim7s6%2Bxufq82WuMgaPD9f4okvjgkwzAA0RNWcGqm6OrjPUSZka7ZoH7qRyX%2BTkwdlMUkZETOreLu82R7SASSyjDjw8XGzp49avMyoxsYe6BUWU10tYUh8sLtrluVC4ozBRPDlybQtoKnQoQVWQZq0Up8h%2BjrmPTsTUceXfChWRrz3qpcW9iw7irCduLeCRsDQzutjAiacXdh5u9NvXQgoTzA7XPCjfu1vM7YV41AKx3WSL9138z9lGqr0PbvQ3NZg%2BOfUlJl%2FhxvFykwppbIwQY6pgHqrM8NyHXRZdOv5Jb%2F8Fvul%2FjwyG2OKZgnp8AHWAEEcfciyZHliXVvd7Qy7Co1jeM9gT99J258dATJmVfCtOxQB%2F%2Fufg3O6fbwiXfraYimJzKrh4%2F%2Fzl6inO7eiOOoHLzc0aGDEjA1Bp9%2FavjYuPf%2F5gfrC9wsbPAYk36YXIZD8BvM74O%2FRd8wSWjUephFF8YTnH4BXchU9VtDEKrAC5GWJAzFPIfN&X-Amz-Signature=9135350d723ba855845de9f1b0a9fdee2ec4d3d965094151c16637351fa79890&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
