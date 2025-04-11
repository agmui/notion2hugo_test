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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRXI65K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC0ZblN12HWwuYdtKs2CqRm8wmshgRvn87wKXAa47ZNOAIgJihta8UCf%2Fg5WkGw%2FsNHgDwliS%2BcX93Bs6MULjcy%2BUIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo86nLHWm%2BVFjwPPSrcA3e9s1dQaiO6dCik%2BQQDG14%2FriA%2BhJ24oOl%2BTF44l7FfdOqqIdfF6GGi7IufCkLbWTqeJpwGnDhjP57bAkF5Oc09cY3zR31%2FO3dYQkdwOqxAaRpFNgwq4EyMqJWldSUXZjAqT7KT2CFmjcnjDV%2FOKlUaftGCaiDyn5ap4FdHNHM8mKxPlhT8EpNePVLeQCQaFozguDmWrP9lC7wHUL12D7OkrtK1yPAr4IV40eFwgbvL634b9niN1U6h1yspWAW2%2FtZjbyQag3iFNeGn59xrR7bFfxX218IRAaz249Yu%2Bzw7CdyzEK2qWBVxDJh6HEdjlLOgNjgH5YRci%2B0O8X9lFOHkosXkV6qzhPe4YycYuRPbjwoXtHlAZOXyC2jTFk0uhoJBThrFcP2SiTdmbXkqOsrv%2BxUEIJwkUoColjPqxr6ainBAYZv%2FVj1F0RkD%2BKh%2FZVmncL1C2nLmytFQfdzI3qdbgrn1ISU%2Bmp25XjWg5pq5AopslJpWjOPMYQC%2F7xf873xY%2Bca%2B%2FEu30vExfR74xftTB6weRelj7%2BkgI4tjkpCdv3gaO6xwuPcvx94yV9PgA7UaPcIqbLaC9G9pZHYvWZ1K4Ee5%2FaAM8ubEPwLE2TI8ImJCZJ%2FrT9ICy2AXMOjP5L8GOqUBdS%2F9mIKcRuoj%2FQGPFQ%2BDmkjTTHUL3nbsfAYE5h%2BveEZ4wlgDP0lRrAO6gPQjxQ3Ykmi7n9V7o8rFwbxjTaNM9vdleLgidx6dubQwyEIm8WUJhTGZvb4xa%2FyixitcE8T%2BchpIDSeFvDRaGjSUG4JFPFGRU92vUPyD%2FsAe1zc6qxx2OGEondWKaXjWqeJwDmvOECcq%2FFTwUuLj4kWvdaYiHru%2BHdPp&X-Amz-Signature=634742c2d6a973a65c8755a3f640a491cea1485461fb10e3994b8c8b5ae8359d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRXI65K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC0ZblN12HWwuYdtKs2CqRm8wmshgRvn87wKXAa47ZNOAIgJihta8UCf%2Fg5WkGw%2FsNHgDwliS%2BcX93Bs6MULjcy%2BUIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo86nLHWm%2BVFjwPPSrcA3e9s1dQaiO6dCik%2BQQDG14%2FriA%2BhJ24oOl%2BTF44l7FfdOqqIdfF6GGi7IufCkLbWTqeJpwGnDhjP57bAkF5Oc09cY3zR31%2FO3dYQkdwOqxAaRpFNgwq4EyMqJWldSUXZjAqT7KT2CFmjcnjDV%2FOKlUaftGCaiDyn5ap4FdHNHM8mKxPlhT8EpNePVLeQCQaFozguDmWrP9lC7wHUL12D7OkrtK1yPAr4IV40eFwgbvL634b9niN1U6h1yspWAW2%2FtZjbyQag3iFNeGn59xrR7bFfxX218IRAaz249Yu%2Bzw7CdyzEK2qWBVxDJh6HEdjlLOgNjgH5YRci%2B0O8X9lFOHkosXkV6qzhPe4YycYuRPbjwoXtHlAZOXyC2jTFk0uhoJBThrFcP2SiTdmbXkqOsrv%2BxUEIJwkUoColjPqxr6ainBAYZv%2FVj1F0RkD%2BKh%2FZVmncL1C2nLmytFQfdzI3qdbgrn1ISU%2Bmp25XjWg5pq5AopslJpWjOPMYQC%2F7xf873xY%2Bca%2B%2FEu30vExfR74xftTB6weRelj7%2BkgI4tjkpCdv3gaO6xwuPcvx94yV9PgA7UaPcIqbLaC9G9pZHYvWZ1K4Ee5%2FaAM8ubEPwLE2TI8ImJCZJ%2FrT9ICy2AXMOjP5L8GOqUBdS%2F9mIKcRuoj%2FQGPFQ%2BDmkjTTHUL3nbsfAYE5h%2BveEZ4wlgDP0lRrAO6gPQjxQ3Ykmi7n9V7o8rFwbxjTaNM9vdleLgidx6dubQwyEIm8WUJhTGZvb4xa%2FyixitcE8T%2BchpIDSeFvDRaGjSUG4JFPFGRU92vUPyD%2FsAe1zc6qxx2OGEondWKaXjWqeJwDmvOECcq%2FFTwUuLj4kWvdaYiHru%2BHdPp&X-Amz-Signature=06303c4d70346dc1091ce38f1978f0496f66511d1ff4b56c6fe39b3f715f2708&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRXI65K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC0ZblN12HWwuYdtKs2CqRm8wmshgRvn87wKXAa47ZNOAIgJihta8UCf%2Fg5WkGw%2FsNHgDwliS%2BcX93Bs6MULjcy%2BUIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo86nLHWm%2BVFjwPPSrcA3e9s1dQaiO6dCik%2BQQDG14%2FriA%2BhJ24oOl%2BTF44l7FfdOqqIdfF6GGi7IufCkLbWTqeJpwGnDhjP57bAkF5Oc09cY3zR31%2FO3dYQkdwOqxAaRpFNgwq4EyMqJWldSUXZjAqT7KT2CFmjcnjDV%2FOKlUaftGCaiDyn5ap4FdHNHM8mKxPlhT8EpNePVLeQCQaFozguDmWrP9lC7wHUL12D7OkrtK1yPAr4IV40eFwgbvL634b9niN1U6h1yspWAW2%2FtZjbyQag3iFNeGn59xrR7bFfxX218IRAaz249Yu%2Bzw7CdyzEK2qWBVxDJh6HEdjlLOgNjgH5YRci%2B0O8X9lFOHkosXkV6qzhPe4YycYuRPbjwoXtHlAZOXyC2jTFk0uhoJBThrFcP2SiTdmbXkqOsrv%2BxUEIJwkUoColjPqxr6ainBAYZv%2FVj1F0RkD%2BKh%2FZVmncL1C2nLmytFQfdzI3qdbgrn1ISU%2Bmp25XjWg5pq5AopslJpWjOPMYQC%2F7xf873xY%2Bca%2B%2FEu30vExfR74xftTB6weRelj7%2BkgI4tjkpCdv3gaO6xwuPcvx94yV9PgA7UaPcIqbLaC9G9pZHYvWZ1K4Ee5%2FaAM8ubEPwLE2TI8ImJCZJ%2FrT9ICy2AXMOjP5L8GOqUBdS%2F9mIKcRuoj%2FQGPFQ%2BDmkjTTHUL3nbsfAYE5h%2BveEZ4wlgDP0lRrAO6gPQjxQ3Ykmi7n9V7o8rFwbxjTaNM9vdleLgidx6dubQwyEIm8WUJhTGZvb4xa%2FyixitcE8T%2BchpIDSeFvDRaGjSUG4JFPFGRU92vUPyD%2FsAe1zc6qxx2OGEondWKaXjWqeJwDmvOECcq%2FFTwUuLj4kWvdaYiHru%2BHdPp&X-Amz-Signature=3ba4a328f407747230545733d6b5fbf9ba337c6ceea463647fd30aad138eef1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRXI65K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC0ZblN12HWwuYdtKs2CqRm8wmshgRvn87wKXAa47ZNOAIgJihta8UCf%2Fg5WkGw%2FsNHgDwliS%2BcX93Bs6MULjcy%2BUIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo86nLHWm%2BVFjwPPSrcA3e9s1dQaiO6dCik%2BQQDG14%2FriA%2BhJ24oOl%2BTF44l7FfdOqqIdfF6GGi7IufCkLbWTqeJpwGnDhjP57bAkF5Oc09cY3zR31%2FO3dYQkdwOqxAaRpFNgwq4EyMqJWldSUXZjAqT7KT2CFmjcnjDV%2FOKlUaftGCaiDyn5ap4FdHNHM8mKxPlhT8EpNePVLeQCQaFozguDmWrP9lC7wHUL12D7OkrtK1yPAr4IV40eFwgbvL634b9niN1U6h1yspWAW2%2FtZjbyQag3iFNeGn59xrR7bFfxX218IRAaz249Yu%2Bzw7CdyzEK2qWBVxDJh6HEdjlLOgNjgH5YRci%2B0O8X9lFOHkosXkV6qzhPe4YycYuRPbjwoXtHlAZOXyC2jTFk0uhoJBThrFcP2SiTdmbXkqOsrv%2BxUEIJwkUoColjPqxr6ainBAYZv%2FVj1F0RkD%2BKh%2FZVmncL1C2nLmytFQfdzI3qdbgrn1ISU%2Bmp25XjWg5pq5AopslJpWjOPMYQC%2F7xf873xY%2Bca%2B%2FEu30vExfR74xftTB6weRelj7%2BkgI4tjkpCdv3gaO6xwuPcvx94yV9PgA7UaPcIqbLaC9G9pZHYvWZ1K4Ee5%2FaAM8ubEPwLE2TI8ImJCZJ%2FrT9ICy2AXMOjP5L8GOqUBdS%2F9mIKcRuoj%2FQGPFQ%2BDmkjTTHUL3nbsfAYE5h%2BveEZ4wlgDP0lRrAO6gPQjxQ3Ykmi7n9V7o8rFwbxjTaNM9vdleLgidx6dubQwyEIm8WUJhTGZvb4xa%2FyixitcE8T%2BchpIDSeFvDRaGjSUG4JFPFGRU92vUPyD%2FsAe1zc6qxx2OGEondWKaXjWqeJwDmvOECcq%2FFTwUuLj4kWvdaYiHru%2BHdPp&X-Amz-Signature=930424ce8cec9f9a689c20f1daf8ad5f5c26e1047045d484d52d6a37fbbb0750&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRXI65K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC0ZblN12HWwuYdtKs2CqRm8wmshgRvn87wKXAa47ZNOAIgJihta8UCf%2Fg5WkGw%2FsNHgDwliS%2BcX93Bs6MULjcy%2BUIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo86nLHWm%2BVFjwPPSrcA3e9s1dQaiO6dCik%2BQQDG14%2FriA%2BhJ24oOl%2BTF44l7FfdOqqIdfF6GGi7IufCkLbWTqeJpwGnDhjP57bAkF5Oc09cY3zR31%2FO3dYQkdwOqxAaRpFNgwq4EyMqJWldSUXZjAqT7KT2CFmjcnjDV%2FOKlUaftGCaiDyn5ap4FdHNHM8mKxPlhT8EpNePVLeQCQaFozguDmWrP9lC7wHUL12D7OkrtK1yPAr4IV40eFwgbvL634b9niN1U6h1yspWAW2%2FtZjbyQag3iFNeGn59xrR7bFfxX218IRAaz249Yu%2Bzw7CdyzEK2qWBVxDJh6HEdjlLOgNjgH5YRci%2B0O8X9lFOHkosXkV6qzhPe4YycYuRPbjwoXtHlAZOXyC2jTFk0uhoJBThrFcP2SiTdmbXkqOsrv%2BxUEIJwkUoColjPqxr6ainBAYZv%2FVj1F0RkD%2BKh%2FZVmncL1C2nLmytFQfdzI3qdbgrn1ISU%2Bmp25XjWg5pq5AopslJpWjOPMYQC%2F7xf873xY%2Bca%2B%2FEu30vExfR74xftTB6weRelj7%2BkgI4tjkpCdv3gaO6xwuPcvx94yV9PgA7UaPcIqbLaC9G9pZHYvWZ1K4Ee5%2FaAM8ubEPwLE2TI8ImJCZJ%2FrT9ICy2AXMOjP5L8GOqUBdS%2F9mIKcRuoj%2FQGPFQ%2BDmkjTTHUL3nbsfAYE5h%2BveEZ4wlgDP0lRrAO6gPQjxQ3Ykmi7n9V7o8rFwbxjTaNM9vdleLgidx6dubQwyEIm8WUJhTGZvb4xa%2FyixitcE8T%2BchpIDSeFvDRaGjSUG4JFPFGRU92vUPyD%2FsAe1zc6qxx2OGEondWKaXjWqeJwDmvOECcq%2FFTwUuLj4kWvdaYiHru%2BHdPp&X-Amz-Signature=fbee7b67a45df715184c527f42280e8796f2e8bc505728e017b2668768df2084&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
