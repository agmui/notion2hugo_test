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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2Q6HNU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE%2B1wThoPkf8Y470YIWFDG77tIQfPpZv2MkZUoLWZ%2BqLAiEA72%2BTcG%2Ba0tNg%2Fi2d01US8cNXvJEk1flRU87P1fcNO6Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP57ljP6qZEJzVG29ircAxfON7Hl8qsPvoQRuoKrXYPYIzeN7sNfRz4GaRBW1aNi0%2B6nJbIqR6xjh22IiUWpD8FLbiMSL2Pen%2Fzp8A%2BXzk1tT66WperT0ZRhCE%2BO9qBwjr3EMc2%2BVkY1wT6BV%2FqCYx%2Bz%2FRCtHt43vVGkC8sukQmlW2LjpF6NV0d6Anwx1BgS91n3wap%2FCaVTyXHZhD7q4HUSN6owA44mYNafZkH4Mb5%2Fcgk85RfKbPeNgSL%2FNkkJvyzQmkjY2NLPCie6JpBIHdyDrcbK0kMapscrtnhxarOFM5ZysGhEKNTcGNyjow5vbYL20azUobFJIQtwe%2F8vhVdg%2FO7daiUMKIpaClrSUuB6xGjcFFWHWnNWZv7GdppcevSWj66wSB3Rh538C82CwisQNYEFN9Z3sND7RPAi19ZJuk%2BJULu0KARmMRw8jOpW2Jf0BzExN3N0aEvddMVBQmGV2OlylFKGV3O64t%2FrPF0TMR2gydGoFIjBuGtHa186Bnz2q0qK%2BnfGkuK1XAmFBShlh8RhYHYRDbgXLJP%2BPYM3RYTdP1xUhKQksL3kFt3d8dy6w5YM3IGXPRlMybNM%2FzbQlcNKrKCZH3iJT7Go7DRdtzC4KGxlE2Lvd5gDgkvT%2B0qfeRcWQ1a70FToMPLqu70GOqUBTqsLu0bn3LWc4MT%2F5mEP04hgxwnYhU8weS9%2FsupBSKsvUyy3UM2Sf7UGInF%2BeX76FLZiLoJsAntXKxWAsLwk0M%2FLWmouzSjiQPVNvGc6DmcJUZT2MRW639%2F7wOj8MtkettAu0qbosmkQx1CfvOjH3Qu43tHDX7l9C%2FctmtZziY7mWDpW%2FDV4YYs8m1FMGa4uKpIjNyX%2FEKUNvOfE4eVXnj4K4%2FlY&X-Amz-Signature=3a895ffb28048f1b107b12901886c637b533ec0ef1e8b84dbfb63eb63246c418&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2Q6HNU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE%2B1wThoPkf8Y470YIWFDG77tIQfPpZv2MkZUoLWZ%2BqLAiEA72%2BTcG%2Ba0tNg%2Fi2d01US8cNXvJEk1flRU87P1fcNO6Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP57ljP6qZEJzVG29ircAxfON7Hl8qsPvoQRuoKrXYPYIzeN7sNfRz4GaRBW1aNi0%2B6nJbIqR6xjh22IiUWpD8FLbiMSL2Pen%2Fzp8A%2BXzk1tT66WperT0ZRhCE%2BO9qBwjr3EMc2%2BVkY1wT6BV%2FqCYx%2Bz%2FRCtHt43vVGkC8sukQmlW2LjpF6NV0d6Anwx1BgS91n3wap%2FCaVTyXHZhD7q4HUSN6owA44mYNafZkH4Mb5%2Fcgk85RfKbPeNgSL%2FNkkJvyzQmkjY2NLPCie6JpBIHdyDrcbK0kMapscrtnhxarOFM5ZysGhEKNTcGNyjow5vbYL20azUobFJIQtwe%2F8vhVdg%2FO7daiUMKIpaClrSUuB6xGjcFFWHWnNWZv7GdppcevSWj66wSB3Rh538C82CwisQNYEFN9Z3sND7RPAi19ZJuk%2BJULu0KARmMRw8jOpW2Jf0BzExN3N0aEvddMVBQmGV2OlylFKGV3O64t%2FrPF0TMR2gydGoFIjBuGtHa186Bnz2q0qK%2BnfGkuK1XAmFBShlh8RhYHYRDbgXLJP%2BPYM3RYTdP1xUhKQksL3kFt3d8dy6w5YM3IGXPRlMybNM%2FzbQlcNKrKCZH3iJT7Go7DRdtzC4KGxlE2Lvd5gDgkvT%2B0qfeRcWQ1a70FToMPLqu70GOqUBTqsLu0bn3LWc4MT%2F5mEP04hgxwnYhU8weS9%2FsupBSKsvUyy3UM2Sf7UGInF%2BeX76FLZiLoJsAntXKxWAsLwk0M%2FLWmouzSjiQPVNvGc6DmcJUZT2MRW639%2F7wOj8MtkettAu0qbosmkQx1CfvOjH3Qu43tHDX7l9C%2FctmtZziY7mWDpW%2FDV4YYs8m1FMGa4uKpIjNyX%2FEKUNvOfE4eVXnj4K4%2FlY&X-Amz-Signature=8bb20dd0870c1b486f7fd97d07848db39c2fb6f0a1ded90cd3d2ba7e034d05ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2Q6HNU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE%2B1wThoPkf8Y470YIWFDG77tIQfPpZv2MkZUoLWZ%2BqLAiEA72%2BTcG%2Ba0tNg%2Fi2d01US8cNXvJEk1flRU87P1fcNO6Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP57ljP6qZEJzVG29ircAxfON7Hl8qsPvoQRuoKrXYPYIzeN7sNfRz4GaRBW1aNi0%2B6nJbIqR6xjh22IiUWpD8FLbiMSL2Pen%2Fzp8A%2BXzk1tT66WperT0ZRhCE%2BO9qBwjr3EMc2%2BVkY1wT6BV%2FqCYx%2Bz%2FRCtHt43vVGkC8sukQmlW2LjpF6NV0d6Anwx1BgS91n3wap%2FCaVTyXHZhD7q4HUSN6owA44mYNafZkH4Mb5%2Fcgk85RfKbPeNgSL%2FNkkJvyzQmkjY2NLPCie6JpBIHdyDrcbK0kMapscrtnhxarOFM5ZysGhEKNTcGNyjow5vbYL20azUobFJIQtwe%2F8vhVdg%2FO7daiUMKIpaClrSUuB6xGjcFFWHWnNWZv7GdppcevSWj66wSB3Rh538C82CwisQNYEFN9Z3sND7RPAi19ZJuk%2BJULu0KARmMRw8jOpW2Jf0BzExN3N0aEvddMVBQmGV2OlylFKGV3O64t%2FrPF0TMR2gydGoFIjBuGtHa186Bnz2q0qK%2BnfGkuK1XAmFBShlh8RhYHYRDbgXLJP%2BPYM3RYTdP1xUhKQksL3kFt3d8dy6w5YM3IGXPRlMybNM%2FzbQlcNKrKCZH3iJT7Go7DRdtzC4KGxlE2Lvd5gDgkvT%2B0qfeRcWQ1a70FToMPLqu70GOqUBTqsLu0bn3LWc4MT%2F5mEP04hgxwnYhU8weS9%2FsupBSKsvUyy3UM2Sf7UGInF%2BeX76FLZiLoJsAntXKxWAsLwk0M%2FLWmouzSjiQPVNvGc6DmcJUZT2MRW639%2F7wOj8MtkettAu0qbosmkQx1CfvOjH3Qu43tHDX7l9C%2FctmtZziY7mWDpW%2FDV4YYs8m1FMGa4uKpIjNyX%2FEKUNvOfE4eVXnj4K4%2FlY&X-Amz-Signature=eea184d7353205aa817d2cc0593f6791610d5fa8ec9786785575ad7049f8f85b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2Q6HNU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE%2B1wThoPkf8Y470YIWFDG77tIQfPpZv2MkZUoLWZ%2BqLAiEA72%2BTcG%2Ba0tNg%2Fi2d01US8cNXvJEk1flRU87P1fcNO6Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP57ljP6qZEJzVG29ircAxfON7Hl8qsPvoQRuoKrXYPYIzeN7sNfRz4GaRBW1aNi0%2B6nJbIqR6xjh22IiUWpD8FLbiMSL2Pen%2Fzp8A%2BXzk1tT66WperT0ZRhCE%2BO9qBwjr3EMc2%2BVkY1wT6BV%2FqCYx%2Bz%2FRCtHt43vVGkC8sukQmlW2LjpF6NV0d6Anwx1BgS91n3wap%2FCaVTyXHZhD7q4HUSN6owA44mYNafZkH4Mb5%2Fcgk85RfKbPeNgSL%2FNkkJvyzQmkjY2NLPCie6JpBIHdyDrcbK0kMapscrtnhxarOFM5ZysGhEKNTcGNyjow5vbYL20azUobFJIQtwe%2F8vhVdg%2FO7daiUMKIpaClrSUuB6xGjcFFWHWnNWZv7GdppcevSWj66wSB3Rh538C82CwisQNYEFN9Z3sND7RPAi19ZJuk%2BJULu0KARmMRw8jOpW2Jf0BzExN3N0aEvddMVBQmGV2OlylFKGV3O64t%2FrPF0TMR2gydGoFIjBuGtHa186Bnz2q0qK%2BnfGkuK1XAmFBShlh8RhYHYRDbgXLJP%2BPYM3RYTdP1xUhKQksL3kFt3d8dy6w5YM3IGXPRlMybNM%2FzbQlcNKrKCZH3iJT7Go7DRdtzC4KGxlE2Lvd5gDgkvT%2B0qfeRcWQ1a70FToMPLqu70GOqUBTqsLu0bn3LWc4MT%2F5mEP04hgxwnYhU8weS9%2FsupBSKsvUyy3UM2Sf7UGInF%2BeX76FLZiLoJsAntXKxWAsLwk0M%2FLWmouzSjiQPVNvGc6DmcJUZT2MRW639%2F7wOj8MtkettAu0qbosmkQx1CfvOjH3Qu43tHDX7l9C%2FctmtZziY7mWDpW%2FDV4YYs8m1FMGa4uKpIjNyX%2FEKUNvOfE4eVXnj4K4%2FlY&X-Amz-Signature=650ad03047b2b297840138bb67f8db9773f57ef3b894d993a170317021958f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2Q6HNU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE%2B1wThoPkf8Y470YIWFDG77tIQfPpZv2MkZUoLWZ%2BqLAiEA72%2BTcG%2Ba0tNg%2Fi2d01US8cNXvJEk1flRU87P1fcNO6Eq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP57ljP6qZEJzVG29ircAxfON7Hl8qsPvoQRuoKrXYPYIzeN7sNfRz4GaRBW1aNi0%2B6nJbIqR6xjh22IiUWpD8FLbiMSL2Pen%2Fzp8A%2BXzk1tT66WperT0ZRhCE%2BO9qBwjr3EMc2%2BVkY1wT6BV%2FqCYx%2Bz%2FRCtHt43vVGkC8sukQmlW2LjpF6NV0d6Anwx1BgS91n3wap%2FCaVTyXHZhD7q4HUSN6owA44mYNafZkH4Mb5%2Fcgk85RfKbPeNgSL%2FNkkJvyzQmkjY2NLPCie6JpBIHdyDrcbK0kMapscrtnhxarOFM5ZysGhEKNTcGNyjow5vbYL20azUobFJIQtwe%2F8vhVdg%2FO7daiUMKIpaClrSUuB6xGjcFFWHWnNWZv7GdppcevSWj66wSB3Rh538C82CwisQNYEFN9Z3sND7RPAi19ZJuk%2BJULu0KARmMRw8jOpW2Jf0BzExN3N0aEvddMVBQmGV2OlylFKGV3O64t%2FrPF0TMR2gydGoFIjBuGtHa186Bnz2q0qK%2BnfGkuK1XAmFBShlh8RhYHYRDbgXLJP%2BPYM3RYTdP1xUhKQksL3kFt3d8dy6w5YM3IGXPRlMybNM%2FzbQlcNKrKCZH3iJT7Go7DRdtzC4KGxlE2Lvd5gDgkvT%2B0qfeRcWQ1a70FToMPLqu70GOqUBTqsLu0bn3LWc4MT%2F5mEP04hgxwnYhU8weS9%2FsupBSKsvUyy3UM2Sf7UGInF%2BeX76FLZiLoJsAntXKxWAsLwk0M%2FLWmouzSjiQPVNvGc6DmcJUZT2MRW639%2F7wOj8MtkettAu0qbosmkQx1CfvOjH3Qu43tHDX7l9C%2FctmtZziY7mWDpW%2FDV4YYs8m1FMGa4uKpIjNyX%2FEKUNvOfE4eVXnj4K4%2FlY&X-Amz-Signature=4d547a6e5ac388d5468fc16f6dfd1f9e0eefad5bb939f2ba1d99c098a1d88552&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
