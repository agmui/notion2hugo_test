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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YO3BLXA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDvdnaqzSJBuFML95i3ZsL43SiLDet5wnl7Xyidzl18RwIhAOaLCqvpwTAPCBcX24aWlBn46BXUBiTJ7b0mRMz%2FxbW0Kv8DCHAQABoMNjM3NDIzMTgzODA1IgySu67Im%2F2CXLI%2BhMIq3AOfuriMLyWJDbLX%2FcdMtkvYcv4aHaprfW7jDTs6wXQbTMLI%2FmGit1n4lEibTPLom6kEeJejq3PmqkpNOBRwS7NIQK0KmpAequ%2FnWB9%2BHZ%2BDXqGIzitoq5OA%2BT5s5%2FjVApnBTJFGwjPFONc2%2BdzXkVm6liwvlPPIBWuku3%2BSeucYdxj6BirXPcJi%2BBMqiJ4CzfHRH9p5AQm25ZJQuBAt8qn%2FDV46YZ80TfHWSKgZeKT2JeT14E%2FOH4febsDeXO%2FiJCxUnK2Bt%2Bz3vAaziTgYzmQOmU%2B7NSe57hIi1O3kYI1rY1vRjwXnulJSiWxpQeZbwjfANpzJCSUxxm2NhnPwT1b4%2FwM3sdVGw5fzV8HSC%2B82E0qAPZCnuYc1fry%2BTh%2B6vgztSoFp%2BDSSkZoqGT0n%2FS7YrkH8n3KH0drRRkdY0TTD3kX1N%2B5hZf6nvbu%2FfwGOgtaZlrAdPG231a0eShuicIPdVoDedGzD60pDswdWAWZ5%2BaVzLVhuTwGba3kZ2jfL8Vw73EL7b0FvSlV0j%2BRAbZ1fgXKbJ5SPeIrYrktuF8r3PmceLkepJrm2xtKjaxYRQfEAAD3Re%2BIVWmvBXODacO2chZFb793eHXQ6%2FfL%2Bfuwv5NP%2FDTz4Sge3CzxafzCr67S%2BBjqkAfNExiSRmdKtO8C8olbQrTnsHQGxjQ9yRfYIDjl%2F61VxdgQrkE1NUmRU14qZY3yY%2BIzCXanXiI%2F4ovNY0EJbgxKWhCOU7CpOfBhdPzIMg7TkPOHWiddVh%2F8Du6uE6fjPe4o6EKdKcmtQZCyPkId%2BocKrncKSHU63X%2FsZd1UDlHG185sMIrHkHTJbprGB%2FmS%2FTN2M2udki5D%2BXZ3pmlPsmyH1OaAU&X-Amz-Signature=8911bfc7a89c2b27e175993b7b1719045c5a1612fed89d37f5d27a96e08bfd58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YO3BLXA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDvdnaqzSJBuFML95i3ZsL43SiLDet5wnl7Xyidzl18RwIhAOaLCqvpwTAPCBcX24aWlBn46BXUBiTJ7b0mRMz%2FxbW0Kv8DCHAQABoMNjM3NDIzMTgzODA1IgySu67Im%2F2CXLI%2BhMIq3AOfuriMLyWJDbLX%2FcdMtkvYcv4aHaprfW7jDTs6wXQbTMLI%2FmGit1n4lEibTPLom6kEeJejq3PmqkpNOBRwS7NIQK0KmpAequ%2FnWB9%2BHZ%2BDXqGIzitoq5OA%2BT5s5%2FjVApnBTJFGwjPFONc2%2BdzXkVm6liwvlPPIBWuku3%2BSeucYdxj6BirXPcJi%2BBMqiJ4CzfHRH9p5AQm25ZJQuBAt8qn%2FDV46YZ80TfHWSKgZeKT2JeT14E%2FOH4febsDeXO%2FiJCxUnK2Bt%2Bz3vAaziTgYzmQOmU%2B7NSe57hIi1O3kYI1rY1vRjwXnulJSiWxpQeZbwjfANpzJCSUxxm2NhnPwT1b4%2FwM3sdVGw5fzV8HSC%2B82E0qAPZCnuYc1fry%2BTh%2B6vgztSoFp%2BDSSkZoqGT0n%2FS7YrkH8n3KH0drRRkdY0TTD3kX1N%2B5hZf6nvbu%2FfwGOgtaZlrAdPG231a0eShuicIPdVoDedGzD60pDswdWAWZ5%2BaVzLVhuTwGba3kZ2jfL8Vw73EL7b0FvSlV0j%2BRAbZ1fgXKbJ5SPeIrYrktuF8r3PmceLkepJrm2xtKjaxYRQfEAAD3Re%2BIVWmvBXODacO2chZFb793eHXQ6%2FfL%2Bfuwv5NP%2FDTz4Sge3CzxafzCr67S%2BBjqkAfNExiSRmdKtO8C8olbQrTnsHQGxjQ9yRfYIDjl%2F61VxdgQrkE1NUmRU14qZY3yY%2BIzCXanXiI%2F4ovNY0EJbgxKWhCOU7CpOfBhdPzIMg7TkPOHWiddVh%2F8Du6uE6fjPe4o6EKdKcmtQZCyPkId%2BocKrncKSHU63X%2FsZd1UDlHG185sMIrHkHTJbprGB%2FmS%2FTN2M2udki5D%2BXZ3pmlPsmyH1OaAU&X-Amz-Signature=63768a79878617d09209f59a7cebb8fe74ad5eeba19711da04e9a65bd0333912&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YO3BLXA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDvdnaqzSJBuFML95i3ZsL43SiLDet5wnl7Xyidzl18RwIhAOaLCqvpwTAPCBcX24aWlBn46BXUBiTJ7b0mRMz%2FxbW0Kv8DCHAQABoMNjM3NDIzMTgzODA1IgySu67Im%2F2CXLI%2BhMIq3AOfuriMLyWJDbLX%2FcdMtkvYcv4aHaprfW7jDTs6wXQbTMLI%2FmGit1n4lEibTPLom6kEeJejq3PmqkpNOBRwS7NIQK0KmpAequ%2FnWB9%2BHZ%2BDXqGIzitoq5OA%2BT5s5%2FjVApnBTJFGwjPFONc2%2BdzXkVm6liwvlPPIBWuku3%2BSeucYdxj6BirXPcJi%2BBMqiJ4CzfHRH9p5AQm25ZJQuBAt8qn%2FDV46YZ80TfHWSKgZeKT2JeT14E%2FOH4febsDeXO%2FiJCxUnK2Bt%2Bz3vAaziTgYzmQOmU%2B7NSe57hIi1O3kYI1rY1vRjwXnulJSiWxpQeZbwjfANpzJCSUxxm2NhnPwT1b4%2FwM3sdVGw5fzV8HSC%2B82E0qAPZCnuYc1fry%2BTh%2B6vgztSoFp%2BDSSkZoqGT0n%2FS7YrkH8n3KH0drRRkdY0TTD3kX1N%2B5hZf6nvbu%2FfwGOgtaZlrAdPG231a0eShuicIPdVoDedGzD60pDswdWAWZ5%2BaVzLVhuTwGba3kZ2jfL8Vw73EL7b0FvSlV0j%2BRAbZ1fgXKbJ5SPeIrYrktuF8r3PmceLkepJrm2xtKjaxYRQfEAAD3Re%2BIVWmvBXODacO2chZFb793eHXQ6%2FfL%2Bfuwv5NP%2FDTz4Sge3CzxafzCr67S%2BBjqkAfNExiSRmdKtO8C8olbQrTnsHQGxjQ9yRfYIDjl%2F61VxdgQrkE1NUmRU14qZY3yY%2BIzCXanXiI%2F4ovNY0EJbgxKWhCOU7CpOfBhdPzIMg7TkPOHWiddVh%2F8Du6uE6fjPe4o6EKdKcmtQZCyPkId%2BocKrncKSHU63X%2FsZd1UDlHG185sMIrHkHTJbprGB%2FmS%2FTN2M2udki5D%2BXZ3pmlPsmyH1OaAU&X-Amz-Signature=cced70ad7625d9a0f9d184b0a5277de1d53991e4efd95574dc343908dec175a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YO3BLXA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDvdnaqzSJBuFML95i3ZsL43SiLDet5wnl7Xyidzl18RwIhAOaLCqvpwTAPCBcX24aWlBn46BXUBiTJ7b0mRMz%2FxbW0Kv8DCHAQABoMNjM3NDIzMTgzODA1IgySu67Im%2F2CXLI%2BhMIq3AOfuriMLyWJDbLX%2FcdMtkvYcv4aHaprfW7jDTs6wXQbTMLI%2FmGit1n4lEibTPLom6kEeJejq3PmqkpNOBRwS7NIQK0KmpAequ%2FnWB9%2BHZ%2BDXqGIzitoq5OA%2BT5s5%2FjVApnBTJFGwjPFONc2%2BdzXkVm6liwvlPPIBWuku3%2BSeucYdxj6BirXPcJi%2BBMqiJ4CzfHRH9p5AQm25ZJQuBAt8qn%2FDV46YZ80TfHWSKgZeKT2JeT14E%2FOH4febsDeXO%2FiJCxUnK2Bt%2Bz3vAaziTgYzmQOmU%2B7NSe57hIi1O3kYI1rY1vRjwXnulJSiWxpQeZbwjfANpzJCSUxxm2NhnPwT1b4%2FwM3sdVGw5fzV8HSC%2B82E0qAPZCnuYc1fry%2BTh%2B6vgztSoFp%2BDSSkZoqGT0n%2FS7YrkH8n3KH0drRRkdY0TTD3kX1N%2B5hZf6nvbu%2FfwGOgtaZlrAdPG231a0eShuicIPdVoDedGzD60pDswdWAWZ5%2BaVzLVhuTwGba3kZ2jfL8Vw73EL7b0FvSlV0j%2BRAbZ1fgXKbJ5SPeIrYrktuF8r3PmceLkepJrm2xtKjaxYRQfEAAD3Re%2BIVWmvBXODacO2chZFb793eHXQ6%2FfL%2Bfuwv5NP%2FDTz4Sge3CzxafzCr67S%2BBjqkAfNExiSRmdKtO8C8olbQrTnsHQGxjQ9yRfYIDjl%2F61VxdgQrkE1NUmRU14qZY3yY%2BIzCXanXiI%2F4ovNY0EJbgxKWhCOU7CpOfBhdPzIMg7TkPOHWiddVh%2F8Du6uE6fjPe4o6EKdKcmtQZCyPkId%2BocKrncKSHU63X%2FsZd1UDlHG185sMIrHkHTJbprGB%2FmS%2FTN2M2udki5D%2BXZ3pmlPsmyH1OaAU&X-Amz-Signature=16663ebe5a78bdfe5e217866ab50bb84a26e717152c4323ba8de94e9882e6f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YO3BLXA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDvdnaqzSJBuFML95i3ZsL43SiLDet5wnl7Xyidzl18RwIhAOaLCqvpwTAPCBcX24aWlBn46BXUBiTJ7b0mRMz%2FxbW0Kv8DCHAQABoMNjM3NDIzMTgzODA1IgySu67Im%2F2CXLI%2BhMIq3AOfuriMLyWJDbLX%2FcdMtkvYcv4aHaprfW7jDTs6wXQbTMLI%2FmGit1n4lEibTPLom6kEeJejq3PmqkpNOBRwS7NIQK0KmpAequ%2FnWB9%2BHZ%2BDXqGIzitoq5OA%2BT5s5%2FjVApnBTJFGwjPFONc2%2BdzXkVm6liwvlPPIBWuku3%2BSeucYdxj6BirXPcJi%2BBMqiJ4CzfHRH9p5AQm25ZJQuBAt8qn%2FDV46YZ80TfHWSKgZeKT2JeT14E%2FOH4febsDeXO%2FiJCxUnK2Bt%2Bz3vAaziTgYzmQOmU%2B7NSe57hIi1O3kYI1rY1vRjwXnulJSiWxpQeZbwjfANpzJCSUxxm2NhnPwT1b4%2FwM3sdVGw5fzV8HSC%2B82E0qAPZCnuYc1fry%2BTh%2B6vgztSoFp%2BDSSkZoqGT0n%2FS7YrkH8n3KH0drRRkdY0TTD3kX1N%2B5hZf6nvbu%2FfwGOgtaZlrAdPG231a0eShuicIPdVoDedGzD60pDswdWAWZ5%2BaVzLVhuTwGba3kZ2jfL8Vw73EL7b0FvSlV0j%2BRAbZ1fgXKbJ5SPeIrYrktuF8r3PmceLkepJrm2xtKjaxYRQfEAAD3Re%2BIVWmvBXODacO2chZFb793eHXQ6%2FfL%2Bfuwv5NP%2FDTz4Sge3CzxafzCr67S%2BBjqkAfNExiSRmdKtO8C8olbQrTnsHQGxjQ9yRfYIDjl%2F61VxdgQrkE1NUmRU14qZY3yY%2BIzCXanXiI%2F4ovNY0EJbgxKWhCOU7CpOfBhdPzIMg7TkPOHWiddVh%2F8Du6uE6fjPe4o6EKdKcmtQZCyPkId%2BocKrncKSHU63X%2FsZd1UDlHG185sMIrHkHTJbprGB%2FmS%2FTN2M2udki5D%2BXZ3pmlPsmyH1OaAU&X-Amz-Signature=10cd2e9f5a4089db4fbf45c3f50046ab9ea75ff5a09c631101c1c14688eb7c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
