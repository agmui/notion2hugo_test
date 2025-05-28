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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIFHKJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSXhcaQVA9e7YSnhYr9d9runSkxtpg0gEp2OWI1ud6XAiA%2BoxeEiz5qjCJCpX0QEDTsz6aVBA0jSUiYFUbrS4JaLCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2%2F7xj1rQbO2g15eqKtwDcY7qdmdcbdVXevDZCPhpytYxzhygaYg1Lozt%2BEAy14O088iYhMT3F3MIk5%2FyH3YZ3fYhbYKKJyowQekUCfcAUZP9uOyBJjC1%2BIXSiOgIXm5NvU%2By9n%2B36dvlSryjw2XKhHIH7%2F9O3x0XzuVJ6cgRie99eQff2SXV%2BI3uFIsnN%2BjFVTBpI5CfOcN%2FjfQMpp0vt194x8hUUTywoEvyYolLCFyte980XeQ39%2F2sSR835WUv8RvNIgKs%2FeCtOEdVLp46qaf2U1kiuxrhmm8987Gv8ELY45wW6Dfb%2B6U0CE16VYsSHCwZoEaYbCLCL%2F8G2AWbL005HtgDH4fl16%2Bocn1K%2FH7FxnR6W4L%2BlQ01%2BZ575isGNWFK9EsotrChJCT36RbrTR%2BzZIKaKnvr0r29I45iuGwRLBdR79jf6FsWranFSMHpbD2vkoUE9K1Q9pAl551Z29flJhjdWrQ5RCM3O7t%2ByJ71QIQWxGZ60UuZtct3N5rGjSrTmy2Sze688FNJjj%2FeBeyI%2Fx5NW%2FXCddAInbto0tiBggphvpuLWxvRoi6Y62Ik7ViaKYEJP7hQGVqMtpKtOBT5O3HDIo8BFRaoMoqnpWO1cB0R%2BlYf4CUJ4BwuOBYfuhDGYfNmRnhtKEEw88XcwQY6pgG9kBS3eJyzouSEhNDZgnATKzv8CSXevOQ%2F9KGQf5CVVA%2BhXfzkqnTP8cxqNV7bPvxh6kYXiqRbRmoGzR%2FoMmUeoC92lQCFjfhe3BfWgU20oofeCQk2gd0O3LxP%2Bz%2By4bSWwQsYQgelu6OAoUhiawrFm6TSno9KuA7h1f%2Bonn0DoiLVSsBy%2BkPc5CMuWP8i2EcY0Q94xcE31bCfyb83e4o8QudHJYmd&X-Amz-Signature=b558a8735023396f70136c1c201494d071333ee1013eea286d720556a703b7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIFHKJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSXhcaQVA9e7YSnhYr9d9runSkxtpg0gEp2OWI1ud6XAiA%2BoxeEiz5qjCJCpX0QEDTsz6aVBA0jSUiYFUbrS4JaLCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2%2F7xj1rQbO2g15eqKtwDcY7qdmdcbdVXevDZCPhpytYxzhygaYg1Lozt%2BEAy14O088iYhMT3F3MIk5%2FyH3YZ3fYhbYKKJyowQekUCfcAUZP9uOyBJjC1%2BIXSiOgIXm5NvU%2By9n%2B36dvlSryjw2XKhHIH7%2F9O3x0XzuVJ6cgRie99eQff2SXV%2BI3uFIsnN%2BjFVTBpI5CfOcN%2FjfQMpp0vt194x8hUUTywoEvyYolLCFyte980XeQ39%2F2sSR835WUv8RvNIgKs%2FeCtOEdVLp46qaf2U1kiuxrhmm8987Gv8ELY45wW6Dfb%2B6U0CE16VYsSHCwZoEaYbCLCL%2F8G2AWbL005HtgDH4fl16%2Bocn1K%2FH7FxnR6W4L%2BlQ01%2BZ575isGNWFK9EsotrChJCT36RbrTR%2BzZIKaKnvr0r29I45iuGwRLBdR79jf6FsWranFSMHpbD2vkoUE9K1Q9pAl551Z29flJhjdWrQ5RCM3O7t%2ByJ71QIQWxGZ60UuZtct3N5rGjSrTmy2Sze688FNJjj%2FeBeyI%2Fx5NW%2FXCddAInbto0tiBggphvpuLWxvRoi6Y62Ik7ViaKYEJP7hQGVqMtpKtOBT5O3HDIo8BFRaoMoqnpWO1cB0R%2BlYf4CUJ4BwuOBYfuhDGYfNmRnhtKEEw88XcwQY6pgG9kBS3eJyzouSEhNDZgnATKzv8CSXevOQ%2F9KGQf5CVVA%2BhXfzkqnTP8cxqNV7bPvxh6kYXiqRbRmoGzR%2FoMmUeoC92lQCFjfhe3BfWgU20oofeCQk2gd0O3LxP%2Bz%2By4bSWwQsYQgelu6OAoUhiawrFm6TSno9KuA7h1f%2Bonn0DoiLVSsBy%2BkPc5CMuWP8i2EcY0Q94xcE31bCfyb83e4o8QudHJYmd&X-Amz-Signature=5129de18bb351ef6653b06188372ecaad96ec9d0851fc33600e3c6674b5ed13f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIFHKJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSXhcaQVA9e7YSnhYr9d9runSkxtpg0gEp2OWI1ud6XAiA%2BoxeEiz5qjCJCpX0QEDTsz6aVBA0jSUiYFUbrS4JaLCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2%2F7xj1rQbO2g15eqKtwDcY7qdmdcbdVXevDZCPhpytYxzhygaYg1Lozt%2BEAy14O088iYhMT3F3MIk5%2FyH3YZ3fYhbYKKJyowQekUCfcAUZP9uOyBJjC1%2BIXSiOgIXm5NvU%2By9n%2B36dvlSryjw2XKhHIH7%2F9O3x0XzuVJ6cgRie99eQff2SXV%2BI3uFIsnN%2BjFVTBpI5CfOcN%2FjfQMpp0vt194x8hUUTywoEvyYolLCFyte980XeQ39%2F2sSR835WUv8RvNIgKs%2FeCtOEdVLp46qaf2U1kiuxrhmm8987Gv8ELY45wW6Dfb%2B6U0CE16VYsSHCwZoEaYbCLCL%2F8G2AWbL005HtgDH4fl16%2Bocn1K%2FH7FxnR6W4L%2BlQ01%2BZ575isGNWFK9EsotrChJCT36RbrTR%2BzZIKaKnvr0r29I45iuGwRLBdR79jf6FsWranFSMHpbD2vkoUE9K1Q9pAl551Z29flJhjdWrQ5RCM3O7t%2ByJ71QIQWxGZ60UuZtct3N5rGjSrTmy2Sze688FNJjj%2FeBeyI%2Fx5NW%2FXCddAInbto0tiBggphvpuLWxvRoi6Y62Ik7ViaKYEJP7hQGVqMtpKtOBT5O3HDIo8BFRaoMoqnpWO1cB0R%2BlYf4CUJ4BwuOBYfuhDGYfNmRnhtKEEw88XcwQY6pgG9kBS3eJyzouSEhNDZgnATKzv8CSXevOQ%2F9KGQf5CVVA%2BhXfzkqnTP8cxqNV7bPvxh6kYXiqRbRmoGzR%2FoMmUeoC92lQCFjfhe3BfWgU20oofeCQk2gd0O3LxP%2Bz%2By4bSWwQsYQgelu6OAoUhiawrFm6TSno9KuA7h1f%2Bonn0DoiLVSsBy%2BkPc5CMuWP8i2EcY0Q94xcE31bCfyb83e4o8QudHJYmd&X-Amz-Signature=bb240713bbf24134365f760e36fc5eca94b169d19212b84d5c5d714d07a8f257&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIFHKJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSXhcaQVA9e7YSnhYr9d9runSkxtpg0gEp2OWI1ud6XAiA%2BoxeEiz5qjCJCpX0QEDTsz6aVBA0jSUiYFUbrS4JaLCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2%2F7xj1rQbO2g15eqKtwDcY7qdmdcbdVXevDZCPhpytYxzhygaYg1Lozt%2BEAy14O088iYhMT3F3MIk5%2FyH3YZ3fYhbYKKJyowQekUCfcAUZP9uOyBJjC1%2BIXSiOgIXm5NvU%2By9n%2B36dvlSryjw2XKhHIH7%2F9O3x0XzuVJ6cgRie99eQff2SXV%2BI3uFIsnN%2BjFVTBpI5CfOcN%2FjfQMpp0vt194x8hUUTywoEvyYolLCFyte980XeQ39%2F2sSR835WUv8RvNIgKs%2FeCtOEdVLp46qaf2U1kiuxrhmm8987Gv8ELY45wW6Dfb%2B6U0CE16VYsSHCwZoEaYbCLCL%2F8G2AWbL005HtgDH4fl16%2Bocn1K%2FH7FxnR6W4L%2BlQ01%2BZ575isGNWFK9EsotrChJCT36RbrTR%2BzZIKaKnvr0r29I45iuGwRLBdR79jf6FsWranFSMHpbD2vkoUE9K1Q9pAl551Z29flJhjdWrQ5RCM3O7t%2ByJ71QIQWxGZ60UuZtct3N5rGjSrTmy2Sze688FNJjj%2FeBeyI%2Fx5NW%2FXCddAInbto0tiBggphvpuLWxvRoi6Y62Ik7ViaKYEJP7hQGVqMtpKtOBT5O3HDIo8BFRaoMoqnpWO1cB0R%2BlYf4CUJ4BwuOBYfuhDGYfNmRnhtKEEw88XcwQY6pgG9kBS3eJyzouSEhNDZgnATKzv8CSXevOQ%2F9KGQf5CVVA%2BhXfzkqnTP8cxqNV7bPvxh6kYXiqRbRmoGzR%2FoMmUeoC92lQCFjfhe3BfWgU20oofeCQk2gd0O3LxP%2Bz%2By4bSWwQsYQgelu6OAoUhiawrFm6TSno9KuA7h1f%2Bonn0DoiLVSsBy%2BkPc5CMuWP8i2EcY0Q94xcE31bCfyb83e4o8QudHJYmd&X-Amz-Signature=9fae018387b8a809f9f17b6307e9d63226c49e68b3cee70dd83e6b877e30d8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIFHKJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSXhcaQVA9e7YSnhYr9d9runSkxtpg0gEp2OWI1ud6XAiA%2BoxeEiz5qjCJCpX0QEDTsz6aVBA0jSUiYFUbrS4JaLCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2%2F7xj1rQbO2g15eqKtwDcY7qdmdcbdVXevDZCPhpytYxzhygaYg1Lozt%2BEAy14O088iYhMT3F3MIk5%2FyH3YZ3fYhbYKKJyowQekUCfcAUZP9uOyBJjC1%2BIXSiOgIXm5NvU%2By9n%2B36dvlSryjw2XKhHIH7%2F9O3x0XzuVJ6cgRie99eQff2SXV%2BI3uFIsnN%2BjFVTBpI5CfOcN%2FjfQMpp0vt194x8hUUTywoEvyYolLCFyte980XeQ39%2F2sSR835WUv8RvNIgKs%2FeCtOEdVLp46qaf2U1kiuxrhmm8987Gv8ELY45wW6Dfb%2B6U0CE16VYsSHCwZoEaYbCLCL%2F8G2AWbL005HtgDH4fl16%2Bocn1K%2FH7FxnR6W4L%2BlQ01%2BZ575isGNWFK9EsotrChJCT36RbrTR%2BzZIKaKnvr0r29I45iuGwRLBdR79jf6FsWranFSMHpbD2vkoUE9K1Q9pAl551Z29flJhjdWrQ5RCM3O7t%2ByJ71QIQWxGZ60UuZtct3N5rGjSrTmy2Sze688FNJjj%2FeBeyI%2Fx5NW%2FXCddAInbto0tiBggphvpuLWxvRoi6Y62Ik7ViaKYEJP7hQGVqMtpKtOBT5O3HDIo8BFRaoMoqnpWO1cB0R%2BlYf4CUJ4BwuOBYfuhDGYfNmRnhtKEEw88XcwQY6pgG9kBS3eJyzouSEhNDZgnATKzv8CSXevOQ%2F9KGQf5CVVA%2BhXfzkqnTP8cxqNV7bPvxh6kYXiqRbRmoGzR%2FoMmUeoC92lQCFjfhe3BfWgU20oofeCQk2gd0O3LxP%2Bz%2By4bSWwQsYQgelu6OAoUhiawrFm6TSno9KuA7h1f%2Bonn0DoiLVSsBy%2BkPc5CMuWP8i2EcY0Q94xcE31bCfyb83e4o8QudHJYmd&X-Amz-Signature=c90b52e578436051bd3429eb375b4bd32e43a19192fb8939b560505d6b615c09&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
