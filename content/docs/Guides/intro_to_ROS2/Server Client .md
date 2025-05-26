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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGQHRDO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHKaYP5KX67BT4bC8IHkB2izvQwIR%2BN6IlJVdn779eRAiEA%2FAZFMmA0hCCWgECPyzdaPsRpLnWQa1s9Sm3GDbv3gzAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCNEvZyh4ZuDPovmzSrcA8B92BVmhcOuBAjITQe4avLG%2FKQb9w0RTcLIJd%2FBv5L5D8A79rS2ybw62Ywt0LYFb3jTPuEUGVSrNmBSlEcRIU0mCZRRJefiYg68ouksjpiSWnID0%2FpprjUCOcQrqERIREwgbC2qWgWgE5BGpE1zz9CrXbOBKhPK3POlHd6CQowmaBm8U2k1P8iceGfwyiJqIjAKq4nABRswtm%2BZON%2BtoB5OS0pbfmMvhrcp46FT5OUl76lxteS6n%2BOY9S5CMKKYzHysGdgELgubksl7oCG8vxveDTliza%2F%2BMKF87fn4cP56JV7fZw4vO1PpXZMKyOi92dXVajKd%2FWBYl11U146DVlkiFcKlYFx0wsttIJZ8YHe3OYy0yQ9K0vIT8frI%2F4Iwao2O9AIdW6ooeOEy7%2FjTSPL5thlVwcX8nH6yezHg6jCHOEcf%2FDUJAWOR70e47I16ArUUpWZC9TmRgScfJPvVqnOYuLpv2RJADrJ58JeYAobLxKmbjH9khscDwBJP2gwGwpypScd71BmkyEKwHZK2wCp5mgXzmKtTayxx9eTa%2B3g4vq1%2FoicsgsFK375kVXWgb1Lqm9ZI89HJaEVENJl%2FvCWEpFoRnpvqPOyg75%2Bs%2FgepCCrkCGaFxboXN4e%2FMMGr08EGOqUBA%2FlVXvOenbwmqrqQ32cSkOzzm8p6YMEKM0wsitJOlY3DS51msFVRr7r384CItSZKYzPtnYylq1Xkc8IgVIM22KiPVvyMmhKrVDyk8OIXZDGy5ABk%2Fo51nJyywwtEuBJZxNhkRjpDw7LgWnAkvguY7VfVKv%2BZmn0OEJdRO3%2FMlzIFSgj9txJ8fzGmM8AwetvLfuhl8os9d7fzmR4AK3WL76xTD69U&X-Amz-Signature=7b4fb0fc5fe7059f361e3e320942d9526c0ac459ea22b0dd97baa84d03fffcdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGQHRDO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHKaYP5KX67BT4bC8IHkB2izvQwIR%2BN6IlJVdn779eRAiEA%2FAZFMmA0hCCWgECPyzdaPsRpLnWQa1s9Sm3GDbv3gzAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCNEvZyh4ZuDPovmzSrcA8B92BVmhcOuBAjITQe4avLG%2FKQb9w0RTcLIJd%2FBv5L5D8A79rS2ybw62Ywt0LYFb3jTPuEUGVSrNmBSlEcRIU0mCZRRJefiYg68ouksjpiSWnID0%2FpprjUCOcQrqERIREwgbC2qWgWgE5BGpE1zz9CrXbOBKhPK3POlHd6CQowmaBm8U2k1P8iceGfwyiJqIjAKq4nABRswtm%2BZON%2BtoB5OS0pbfmMvhrcp46FT5OUl76lxteS6n%2BOY9S5CMKKYzHysGdgELgubksl7oCG8vxveDTliza%2F%2BMKF87fn4cP56JV7fZw4vO1PpXZMKyOi92dXVajKd%2FWBYl11U146DVlkiFcKlYFx0wsttIJZ8YHe3OYy0yQ9K0vIT8frI%2F4Iwao2O9AIdW6ooeOEy7%2FjTSPL5thlVwcX8nH6yezHg6jCHOEcf%2FDUJAWOR70e47I16ArUUpWZC9TmRgScfJPvVqnOYuLpv2RJADrJ58JeYAobLxKmbjH9khscDwBJP2gwGwpypScd71BmkyEKwHZK2wCp5mgXzmKtTayxx9eTa%2B3g4vq1%2FoicsgsFK375kVXWgb1Lqm9ZI89HJaEVENJl%2FvCWEpFoRnpvqPOyg75%2Bs%2FgepCCrkCGaFxboXN4e%2FMMGr08EGOqUBA%2FlVXvOenbwmqrqQ32cSkOzzm8p6YMEKM0wsitJOlY3DS51msFVRr7r384CItSZKYzPtnYylq1Xkc8IgVIM22KiPVvyMmhKrVDyk8OIXZDGy5ABk%2Fo51nJyywwtEuBJZxNhkRjpDw7LgWnAkvguY7VfVKv%2BZmn0OEJdRO3%2FMlzIFSgj9txJ8fzGmM8AwetvLfuhl8os9d7fzmR4AK3WL76xTD69U&X-Amz-Signature=8123d03ba5dfd029b277c2f319e728335c42fa9325f50d1604d6489889856209&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGQHRDO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHKaYP5KX67BT4bC8IHkB2izvQwIR%2BN6IlJVdn779eRAiEA%2FAZFMmA0hCCWgECPyzdaPsRpLnWQa1s9Sm3GDbv3gzAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCNEvZyh4ZuDPovmzSrcA8B92BVmhcOuBAjITQe4avLG%2FKQb9w0RTcLIJd%2FBv5L5D8A79rS2ybw62Ywt0LYFb3jTPuEUGVSrNmBSlEcRIU0mCZRRJefiYg68ouksjpiSWnID0%2FpprjUCOcQrqERIREwgbC2qWgWgE5BGpE1zz9CrXbOBKhPK3POlHd6CQowmaBm8U2k1P8iceGfwyiJqIjAKq4nABRswtm%2BZON%2BtoB5OS0pbfmMvhrcp46FT5OUl76lxteS6n%2BOY9S5CMKKYzHysGdgELgubksl7oCG8vxveDTliza%2F%2BMKF87fn4cP56JV7fZw4vO1PpXZMKyOi92dXVajKd%2FWBYl11U146DVlkiFcKlYFx0wsttIJZ8YHe3OYy0yQ9K0vIT8frI%2F4Iwao2O9AIdW6ooeOEy7%2FjTSPL5thlVwcX8nH6yezHg6jCHOEcf%2FDUJAWOR70e47I16ArUUpWZC9TmRgScfJPvVqnOYuLpv2RJADrJ58JeYAobLxKmbjH9khscDwBJP2gwGwpypScd71BmkyEKwHZK2wCp5mgXzmKtTayxx9eTa%2B3g4vq1%2FoicsgsFK375kVXWgb1Lqm9ZI89HJaEVENJl%2FvCWEpFoRnpvqPOyg75%2Bs%2FgepCCrkCGaFxboXN4e%2FMMGr08EGOqUBA%2FlVXvOenbwmqrqQ32cSkOzzm8p6YMEKM0wsitJOlY3DS51msFVRr7r384CItSZKYzPtnYylq1Xkc8IgVIM22KiPVvyMmhKrVDyk8OIXZDGy5ABk%2Fo51nJyywwtEuBJZxNhkRjpDw7LgWnAkvguY7VfVKv%2BZmn0OEJdRO3%2FMlzIFSgj9txJ8fzGmM8AwetvLfuhl8os9d7fzmR4AK3WL76xTD69U&X-Amz-Signature=da984ed3ea56cab26b191337d682397c51ea3455bb1d119dbb04cb44939aa0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGQHRDO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHKaYP5KX67BT4bC8IHkB2izvQwIR%2BN6IlJVdn779eRAiEA%2FAZFMmA0hCCWgECPyzdaPsRpLnWQa1s9Sm3GDbv3gzAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCNEvZyh4ZuDPovmzSrcA8B92BVmhcOuBAjITQe4avLG%2FKQb9w0RTcLIJd%2FBv5L5D8A79rS2ybw62Ywt0LYFb3jTPuEUGVSrNmBSlEcRIU0mCZRRJefiYg68ouksjpiSWnID0%2FpprjUCOcQrqERIREwgbC2qWgWgE5BGpE1zz9CrXbOBKhPK3POlHd6CQowmaBm8U2k1P8iceGfwyiJqIjAKq4nABRswtm%2BZON%2BtoB5OS0pbfmMvhrcp46FT5OUl76lxteS6n%2BOY9S5CMKKYzHysGdgELgubksl7oCG8vxveDTliza%2F%2BMKF87fn4cP56JV7fZw4vO1PpXZMKyOi92dXVajKd%2FWBYl11U146DVlkiFcKlYFx0wsttIJZ8YHe3OYy0yQ9K0vIT8frI%2F4Iwao2O9AIdW6ooeOEy7%2FjTSPL5thlVwcX8nH6yezHg6jCHOEcf%2FDUJAWOR70e47I16ArUUpWZC9TmRgScfJPvVqnOYuLpv2RJADrJ58JeYAobLxKmbjH9khscDwBJP2gwGwpypScd71BmkyEKwHZK2wCp5mgXzmKtTayxx9eTa%2B3g4vq1%2FoicsgsFK375kVXWgb1Lqm9ZI89HJaEVENJl%2FvCWEpFoRnpvqPOyg75%2Bs%2FgepCCrkCGaFxboXN4e%2FMMGr08EGOqUBA%2FlVXvOenbwmqrqQ32cSkOzzm8p6YMEKM0wsitJOlY3DS51msFVRr7r384CItSZKYzPtnYylq1Xkc8IgVIM22KiPVvyMmhKrVDyk8OIXZDGy5ABk%2Fo51nJyywwtEuBJZxNhkRjpDw7LgWnAkvguY7VfVKv%2BZmn0OEJdRO3%2FMlzIFSgj9txJ8fzGmM8AwetvLfuhl8os9d7fzmR4AK3WL76xTD69U&X-Amz-Signature=026f9845d8300b3223c5cccbd1f52df14ef13a61976a6e3e094f41b11599dbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGQHRDO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHKaYP5KX67BT4bC8IHkB2izvQwIR%2BN6IlJVdn779eRAiEA%2FAZFMmA0hCCWgECPyzdaPsRpLnWQa1s9Sm3GDbv3gzAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCNEvZyh4ZuDPovmzSrcA8B92BVmhcOuBAjITQe4avLG%2FKQb9w0RTcLIJd%2FBv5L5D8A79rS2ybw62Ywt0LYFb3jTPuEUGVSrNmBSlEcRIU0mCZRRJefiYg68ouksjpiSWnID0%2FpprjUCOcQrqERIREwgbC2qWgWgE5BGpE1zz9CrXbOBKhPK3POlHd6CQowmaBm8U2k1P8iceGfwyiJqIjAKq4nABRswtm%2BZON%2BtoB5OS0pbfmMvhrcp46FT5OUl76lxteS6n%2BOY9S5CMKKYzHysGdgELgubksl7oCG8vxveDTliza%2F%2BMKF87fn4cP56JV7fZw4vO1PpXZMKyOi92dXVajKd%2FWBYl11U146DVlkiFcKlYFx0wsttIJZ8YHe3OYy0yQ9K0vIT8frI%2F4Iwao2O9AIdW6ooeOEy7%2FjTSPL5thlVwcX8nH6yezHg6jCHOEcf%2FDUJAWOR70e47I16ArUUpWZC9TmRgScfJPvVqnOYuLpv2RJADrJ58JeYAobLxKmbjH9khscDwBJP2gwGwpypScd71BmkyEKwHZK2wCp5mgXzmKtTayxx9eTa%2B3g4vq1%2FoicsgsFK375kVXWgb1Lqm9ZI89HJaEVENJl%2FvCWEpFoRnpvqPOyg75%2Bs%2FgepCCrkCGaFxboXN4e%2FMMGr08EGOqUBA%2FlVXvOenbwmqrqQ32cSkOzzm8p6YMEKM0wsitJOlY3DS51msFVRr7r384CItSZKYzPtnYylq1Xkc8IgVIM22KiPVvyMmhKrVDyk8OIXZDGy5ABk%2Fo51nJyywwtEuBJZxNhkRjpDw7LgWnAkvguY7VfVKv%2BZmn0OEJdRO3%2FMlzIFSgj9txJ8fzGmM8AwetvLfuhl8os9d7fzmR4AK3WL76xTD69U&X-Amz-Signature=f1fc862a5869d9503258590a1653ebe3c3631b2626191d46f27052dc976283a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
