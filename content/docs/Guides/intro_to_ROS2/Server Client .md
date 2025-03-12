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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOP23ZT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDajp2obVtNd%2F21J3gzPpi1GhHxg5h%2BA0%2FVR1pOO58cXgIgFcsoZ7OU29%2FD0rssRFasbqbHKDR0Vi5T1YA5L7qXwlIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC04juOuUcRFpPs%2BcircA%2Bis0bsaHsfreNYgJXq30XMG5yETh29OdaXeN%2FGLjdYMXqtY7WxkfX%2Bc47wb98WS4KHFLi%2B2mp%2FpOwlBA2bxKLjPlurqKKykY6nvP7TcNz7Hnpwex%2Fr4Tc%2BRtV2L%2BQqa%2FNQ71D0h2BjijGTKROiLtrb%2FVz%2FbhSd%2F6vyx7oEFe4w5apzrck223RNtYATH5l0cgPFG2wMKyTbQ82E3vVfBYHR%2B5AjsiSVcpDQY%2Bul9EpToyFeyxIbzvGqjeE8v4zU1b7zWrt77SFFTlwDQyORE4S6ozpKqAWb3wXhabz3ELc%2BSmVBsL48f4xu0neSIw5BJB1npA7BR30db8S2jmx3%2B7MX2v1lCuBiLPSF9R7sLouUxIc6xLbFX%2B%2F4gtvsstARtTFFD3k1dHrtNXIKCbiXC%2FstcRLfPVcxQCI6a6RRSxzR0uyzf4%2BGNGtz9IodvxaQ%2Ftf4XdkvBk63Dw%2BM8yASFa%2FpVS1o4329Fp%2BxqIIaLl%2F8sIQ2lFeKsT3lZO4tctrqWTU4VoNSYGR%2Bi9fXRHkXBMPjye3IcIp%2BcWI2kNAD2CE5HPjS1sCIAppgtdsZeHDdkSZFfOT3p5s6Ggu1pkeyR56liJ4ibjDkL4lYK3QSw%2FKOQWfElu%2BkOiEhlHsU6MMubxb4GOqUBOB87%2FHh9D2E8ujJJZw3Zdu4bK3DE3lFJztnDeFqyerfVHhTS7NyuxFhy6wzwe5kvk2KwIVEAv1OZlZehOjfFH%2FrHS5YKE%2BQ0GL77qvPcDcwOvtnJdIUaAyA4iFAyai34Mbn7gGR1068oRhCYwDPoepJOVvD1%2BsA1LIZuNBwzXWSVNK5wmpJl4AFFo6HK6Ap2h%2FIdUniR2uC4XneX%2B2gBjVEXNVd1&X-Amz-Signature=4af5e1a9055d8e1ae9adde72960ca4c6341f50ff68f0cdc8223e798d632b0d81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOP23ZT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDajp2obVtNd%2F21J3gzPpi1GhHxg5h%2BA0%2FVR1pOO58cXgIgFcsoZ7OU29%2FD0rssRFasbqbHKDR0Vi5T1YA5L7qXwlIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC04juOuUcRFpPs%2BcircA%2Bis0bsaHsfreNYgJXq30XMG5yETh29OdaXeN%2FGLjdYMXqtY7WxkfX%2Bc47wb98WS4KHFLi%2B2mp%2FpOwlBA2bxKLjPlurqKKykY6nvP7TcNz7Hnpwex%2Fr4Tc%2BRtV2L%2BQqa%2FNQ71D0h2BjijGTKROiLtrb%2FVz%2FbhSd%2F6vyx7oEFe4w5apzrck223RNtYATH5l0cgPFG2wMKyTbQ82E3vVfBYHR%2B5AjsiSVcpDQY%2Bul9EpToyFeyxIbzvGqjeE8v4zU1b7zWrt77SFFTlwDQyORE4S6ozpKqAWb3wXhabz3ELc%2BSmVBsL48f4xu0neSIw5BJB1npA7BR30db8S2jmx3%2B7MX2v1lCuBiLPSF9R7sLouUxIc6xLbFX%2B%2F4gtvsstARtTFFD3k1dHrtNXIKCbiXC%2FstcRLfPVcxQCI6a6RRSxzR0uyzf4%2BGNGtz9IodvxaQ%2Ftf4XdkvBk63Dw%2BM8yASFa%2FpVS1o4329Fp%2BxqIIaLl%2F8sIQ2lFeKsT3lZO4tctrqWTU4VoNSYGR%2Bi9fXRHkXBMPjye3IcIp%2BcWI2kNAD2CE5HPjS1sCIAppgtdsZeHDdkSZFfOT3p5s6Ggu1pkeyR56liJ4ibjDkL4lYK3QSw%2FKOQWfElu%2BkOiEhlHsU6MMubxb4GOqUBOB87%2FHh9D2E8ujJJZw3Zdu4bK3DE3lFJztnDeFqyerfVHhTS7NyuxFhy6wzwe5kvk2KwIVEAv1OZlZehOjfFH%2FrHS5YKE%2BQ0GL77qvPcDcwOvtnJdIUaAyA4iFAyai34Mbn7gGR1068oRhCYwDPoepJOVvD1%2BsA1LIZuNBwzXWSVNK5wmpJl4AFFo6HK6Ap2h%2FIdUniR2uC4XneX%2B2gBjVEXNVd1&X-Amz-Signature=ad9cb5deb8dd15baca61bf30f65b2288c06e33ade7b691938ce621eddf0beb38&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOP23ZT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDajp2obVtNd%2F21J3gzPpi1GhHxg5h%2BA0%2FVR1pOO58cXgIgFcsoZ7OU29%2FD0rssRFasbqbHKDR0Vi5T1YA5L7qXwlIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC04juOuUcRFpPs%2BcircA%2Bis0bsaHsfreNYgJXq30XMG5yETh29OdaXeN%2FGLjdYMXqtY7WxkfX%2Bc47wb98WS4KHFLi%2B2mp%2FpOwlBA2bxKLjPlurqKKykY6nvP7TcNz7Hnpwex%2Fr4Tc%2BRtV2L%2BQqa%2FNQ71D0h2BjijGTKROiLtrb%2FVz%2FbhSd%2F6vyx7oEFe4w5apzrck223RNtYATH5l0cgPFG2wMKyTbQ82E3vVfBYHR%2B5AjsiSVcpDQY%2Bul9EpToyFeyxIbzvGqjeE8v4zU1b7zWrt77SFFTlwDQyORE4S6ozpKqAWb3wXhabz3ELc%2BSmVBsL48f4xu0neSIw5BJB1npA7BR30db8S2jmx3%2B7MX2v1lCuBiLPSF9R7sLouUxIc6xLbFX%2B%2F4gtvsstARtTFFD3k1dHrtNXIKCbiXC%2FstcRLfPVcxQCI6a6RRSxzR0uyzf4%2BGNGtz9IodvxaQ%2Ftf4XdkvBk63Dw%2BM8yASFa%2FpVS1o4329Fp%2BxqIIaLl%2F8sIQ2lFeKsT3lZO4tctrqWTU4VoNSYGR%2Bi9fXRHkXBMPjye3IcIp%2BcWI2kNAD2CE5HPjS1sCIAppgtdsZeHDdkSZFfOT3p5s6Ggu1pkeyR56liJ4ibjDkL4lYK3QSw%2FKOQWfElu%2BkOiEhlHsU6MMubxb4GOqUBOB87%2FHh9D2E8ujJJZw3Zdu4bK3DE3lFJztnDeFqyerfVHhTS7NyuxFhy6wzwe5kvk2KwIVEAv1OZlZehOjfFH%2FrHS5YKE%2BQ0GL77qvPcDcwOvtnJdIUaAyA4iFAyai34Mbn7gGR1068oRhCYwDPoepJOVvD1%2BsA1LIZuNBwzXWSVNK5wmpJl4AFFo6HK6Ap2h%2FIdUniR2uC4XneX%2B2gBjVEXNVd1&X-Amz-Signature=3fea95cf796f93ac6f339bb5e2643c18c7b43e04b47a6a7f498fa76fbbe812f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOP23ZT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDajp2obVtNd%2F21J3gzPpi1GhHxg5h%2BA0%2FVR1pOO58cXgIgFcsoZ7OU29%2FD0rssRFasbqbHKDR0Vi5T1YA5L7qXwlIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC04juOuUcRFpPs%2BcircA%2Bis0bsaHsfreNYgJXq30XMG5yETh29OdaXeN%2FGLjdYMXqtY7WxkfX%2Bc47wb98WS4KHFLi%2B2mp%2FpOwlBA2bxKLjPlurqKKykY6nvP7TcNz7Hnpwex%2Fr4Tc%2BRtV2L%2BQqa%2FNQ71D0h2BjijGTKROiLtrb%2FVz%2FbhSd%2F6vyx7oEFe4w5apzrck223RNtYATH5l0cgPFG2wMKyTbQ82E3vVfBYHR%2B5AjsiSVcpDQY%2Bul9EpToyFeyxIbzvGqjeE8v4zU1b7zWrt77SFFTlwDQyORE4S6ozpKqAWb3wXhabz3ELc%2BSmVBsL48f4xu0neSIw5BJB1npA7BR30db8S2jmx3%2B7MX2v1lCuBiLPSF9R7sLouUxIc6xLbFX%2B%2F4gtvsstARtTFFD3k1dHrtNXIKCbiXC%2FstcRLfPVcxQCI6a6RRSxzR0uyzf4%2BGNGtz9IodvxaQ%2Ftf4XdkvBk63Dw%2BM8yASFa%2FpVS1o4329Fp%2BxqIIaLl%2F8sIQ2lFeKsT3lZO4tctrqWTU4VoNSYGR%2Bi9fXRHkXBMPjye3IcIp%2BcWI2kNAD2CE5HPjS1sCIAppgtdsZeHDdkSZFfOT3p5s6Ggu1pkeyR56liJ4ibjDkL4lYK3QSw%2FKOQWfElu%2BkOiEhlHsU6MMubxb4GOqUBOB87%2FHh9D2E8ujJJZw3Zdu4bK3DE3lFJztnDeFqyerfVHhTS7NyuxFhy6wzwe5kvk2KwIVEAv1OZlZehOjfFH%2FrHS5YKE%2BQ0GL77qvPcDcwOvtnJdIUaAyA4iFAyai34Mbn7gGR1068oRhCYwDPoepJOVvD1%2BsA1LIZuNBwzXWSVNK5wmpJl4AFFo6HK6Ap2h%2FIdUniR2uC4XneX%2B2gBjVEXNVd1&X-Amz-Signature=8ea30cd327ae6e63fbe2fc93be7e529664fa18b705f1ca70c470022f3e39f223&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOP23ZT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDajp2obVtNd%2F21J3gzPpi1GhHxg5h%2BA0%2FVR1pOO58cXgIgFcsoZ7OU29%2FD0rssRFasbqbHKDR0Vi5T1YA5L7qXwlIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC04juOuUcRFpPs%2BcircA%2Bis0bsaHsfreNYgJXq30XMG5yETh29OdaXeN%2FGLjdYMXqtY7WxkfX%2Bc47wb98WS4KHFLi%2B2mp%2FpOwlBA2bxKLjPlurqKKykY6nvP7TcNz7Hnpwex%2Fr4Tc%2BRtV2L%2BQqa%2FNQ71D0h2BjijGTKROiLtrb%2FVz%2FbhSd%2F6vyx7oEFe4w5apzrck223RNtYATH5l0cgPFG2wMKyTbQ82E3vVfBYHR%2B5AjsiSVcpDQY%2Bul9EpToyFeyxIbzvGqjeE8v4zU1b7zWrt77SFFTlwDQyORE4S6ozpKqAWb3wXhabz3ELc%2BSmVBsL48f4xu0neSIw5BJB1npA7BR30db8S2jmx3%2B7MX2v1lCuBiLPSF9R7sLouUxIc6xLbFX%2B%2F4gtvsstARtTFFD3k1dHrtNXIKCbiXC%2FstcRLfPVcxQCI6a6RRSxzR0uyzf4%2BGNGtz9IodvxaQ%2Ftf4XdkvBk63Dw%2BM8yASFa%2FpVS1o4329Fp%2BxqIIaLl%2F8sIQ2lFeKsT3lZO4tctrqWTU4VoNSYGR%2Bi9fXRHkXBMPjye3IcIp%2BcWI2kNAD2CE5HPjS1sCIAppgtdsZeHDdkSZFfOT3p5s6Ggu1pkeyR56liJ4ibjDkL4lYK3QSw%2FKOQWfElu%2BkOiEhlHsU6MMubxb4GOqUBOB87%2FHh9D2E8ujJJZw3Zdu4bK3DE3lFJztnDeFqyerfVHhTS7NyuxFhy6wzwe5kvk2KwIVEAv1OZlZehOjfFH%2FrHS5YKE%2BQ0GL77qvPcDcwOvtnJdIUaAyA4iFAyai34Mbn7gGR1068oRhCYwDPoepJOVvD1%2BsA1LIZuNBwzXWSVNK5wmpJl4AFFo6HK6Ap2h%2FIdUniR2uC4XneX%2B2gBjVEXNVd1&X-Amz-Signature=5fcb6cab3ce4d416e2a87adb9a70b7f2ee8ce48d8618c8431daa83f602246df5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
