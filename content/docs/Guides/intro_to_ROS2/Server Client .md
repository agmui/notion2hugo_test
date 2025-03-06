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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCYGYXQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbNgL2zXhpnWBYj88BaqsOwUDA5PMAfYUED1uo5BpJUAiEA1NN14YTP1EolWdPqFGvagKqQ1mvbRBqQspMpMp%2FMtxUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPivKmjHOnC5GTEvVCrcA5b5MKwshBIkzrI1JvfGCAvp8167Jr8zBMZ3H1r0SOS6PXq%2BbMVpvaRMn%2BGZfgtrh3jOxEOkOiFZBeOPY46Abu7mNL6HunNFKkHS9TBZOS7BSTtrNCLlKlq%2FjW%2FU%2FeyeLV9NYnDG92FO6GBpchZf9lUG5i9YaQGGSpqiogSPQoLniif20RfnvDrAgnilEYOtazd4UfagNPnWHlWmid9bVpGg4UjMexOE%2BB5fGbEthnrg19mayh%2Bjh8gL4rs3AdKDupwKTRnEkrmLS%2FNxkw9XvZIFMG%2FtP8YmnA3pFBezJozoXEBu3GZHtSPCWl%2B%2ByW1htQyaoip7UeLFw8aASQh%2Bl55XRZJh8fKJ%2F8v5eUnrnqmgrsHveOmFALKaLYh%2FF3RPfM0lLaOK1EQy9cwbmpTxV9V3%2B9YiRMYI55mCr5NnJe%2FCBq6gcIEl6pStcM5tDHxv%2FsxCgihsib4qiSmp6%2FU%2FwSoF9VOkvCfnLemaTcDCevi82TeMnoZB3k2HdcZyFXz8ADAUdiHqW2UZwSmQ6j%2FDYgu4dQL%2BnlZaTy9fvGiwuXE0vm%2FocxPkRgW8sGOHyqwpsDdDTe5bM6pN6gO%2FYnHx6VnuuF%2BqufcBC0C23tl4tbKdU8wRONo%2Ffb8G5RIDMKHxpr4GOqUBFm%2FCbm4R9j3t7SO5zzosN%2FBqRz%2Fx%2BPUTW%2B4NIcwxdFMKi4KVpZHVnqKRZX%2FbcFn3aQQfbR7DBRmdFbChECLbgoqNLPnJfGL%2BcMbLjlUQsC4MNFNw%2B2Bt2PTqDCwfVxFFJXqMJl7RU8mg0po4C%2B1EZ0flEiaYT2s8xUs5lBC3lC3JEQezfE8gzb0j82yoNs%2FqqAyvALXXSbUb%2FOD7GTVLSnSWLPYH&X-Amz-Signature=1d98b3230423bfec344b41854a2ddac22e73b7762e7402d6d193ab9e7db0f215&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCYGYXQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbNgL2zXhpnWBYj88BaqsOwUDA5PMAfYUED1uo5BpJUAiEA1NN14YTP1EolWdPqFGvagKqQ1mvbRBqQspMpMp%2FMtxUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPivKmjHOnC5GTEvVCrcA5b5MKwshBIkzrI1JvfGCAvp8167Jr8zBMZ3H1r0SOS6PXq%2BbMVpvaRMn%2BGZfgtrh3jOxEOkOiFZBeOPY46Abu7mNL6HunNFKkHS9TBZOS7BSTtrNCLlKlq%2FjW%2FU%2FeyeLV9NYnDG92FO6GBpchZf9lUG5i9YaQGGSpqiogSPQoLniif20RfnvDrAgnilEYOtazd4UfagNPnWHlWmid9bVpGg4UjMexOE%2BB5fGbEthnrg19mayh%2Bjh8gL4rs3AdKDupwKTRnEkrmLS%2FNxkw9XvZIFMG%2FtP8YmnA3pFBezJozoXEBu3GZHtSPCWl%2B%2ByW1htQyaoip7UeLFw8aASQh%2Bl55XRZJh8fKJ%2F8v5eUnrnqmgrsHveOmFALKaLYh%2FF3RPfM0lLaOK1EQy9cwbmpTxV9V3%2B9YiRMYI55mCr5NnJe%2FCBq6gcIEl6pStcM5tDHxv%2FsxCgihsib4qiSmp6%2FU%2FwSoF9VOkvCfnLemaTcDCevi82TeMnoZB3k2HdcZyFXz8ADAUdiHqW2UZwSmQ6j%2FDYgu4dQL%2BnlZaTy9fvGiwuXE0vm%2FocxPkRgW8sGOHyqwpsDdDTe5bM6pN6gO%2FYnHx6VnuuF%2BqufcBC0C23tl4tbKdU8wRONo%2Ffb8G5RIDMKHxpr4GOqUBFm%2FCbm4R9j3t7SO5zzosN%2FBqRz%2Fx%2BPUTW%2B4NIcwxdFMKi4KVpZHVnqKRZX%2FbcFn3aQQfbR7DBRmdFbChECLbgoqNLPnJfGL%2BcMbLjlUQsC4MNFNw%2B2Bt2PTqDCwfVxFFJXqMJl7RU8mg0po4C%2B1EZ0flEiaYT2s8xUs5lBC3lC3JEQezfE8gzb0j82yoNs%2FqqAyvALXXSbUb%2FOD7GTVLSnSWLPYH&X-Amz-Signature=6617ae8d32c7ac63cef308b3e2d06dc1b186bdffbef5f61691a8866dcf08b3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCYGYXQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbNgL2zXhpnWBYj88BaqsOwUDA5PMAfYUED1uo5BpJUAiEA1NN14YTP1EolWdPqFGvagKqQ1mvbRBqQspMpMp%2FMtxUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPivKmjHOnC5GTEvVCrcA5b5MKwshBIkzrI1JvfGCAvp8167Jr8zBMZ3H1r0SOS6PXq%2BbMVpvaRMn%2BGZfgtrh3jOxEOkOiFZBeOPY46Abu7mNL6HunNFKkHS9TBZOS7BSTtrNCLlKlq%2FjW%2FU%2FeyeLV9NYnDG92FO6GBpchZf9lUG5i9YaQGGSpqiogSPQoLniif20RfnvDrAgnilEYOtazd4UfagNPnWHlWmid9bVpGg4UjMexOE%2BB5fGbEthnrg19mayh%2Bjh8gL4rs3AdKDupwKTRnEkrmLS%2FNxkw9XvZIFMG%2FtP8YmnA3pFBezJozoXEBu3GZHtSPCWl%2B%2ByW1htQyaoip7UeLFw8aASQh%2Bl55XRZJh8fKJ%2F8v5eUnrnqmgrsHveOmFALKaLYh%2FF3RPfM0lLaOK1EQy9cwbmpTxV9V3%2B9YiRMYI55mCr5NnJe%2FCBq6gcIEl6pStcM5tDHxv%2FsxCgihsib4qiSmp6%2FU%2FwSoF9VOkvCfnLemaTcDCevi82TeMnoZB3k2HdcZyFXz8ADAUdiHqW2UZwSmQ6j%2FDYgu4dQL%2BnlZaTy9fvGiwuXE0vm%2FocxPkRgW8sGOHyqwpsDdDTe5bM6pN6gO%2FYnHx6VnuuF%2BqufcBC0C23tl4tbKdU8wRONo%2Ffb8G5RIDMKHxpr4GOqUBFm%2FCbm4R9j3t7SO5zzosN%2FBqRz%2Fx%2BPUTW%2B4NIcwxdFMKi4KVpZHVnqKRZX%2FbcFn3aQQfbR7DBRmdFbChECLbgoqNLPnJfGL%2BcMbLjlUQsC4MNFNw%2B2Bt2PTqDCwfVxFFJXqMJl7RU8mg0po4C%2B1EZ0flEiaYT2s8xUs5lBC3lC3JEQezfE8gzb0j82yoNs%2FqqAyvALXXSbUb%2FOD7GTVLSnSWLPYH&X-Amz-Signature=997e0e45b4fdb1f1e3a775118e1ee413cff82761e9df1e3af1707a2d5bdbbac6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCYGYXQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbNgL2zXhpnWBYj88BaqsOwUDA5PMAfYUED1uo5BpJUAiEA1NN14YTP1EolWdPqFGvagKqQ1mvbRBqQspMpMp%2FMtxUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPivKmjHOnC5GTEvVCrcA5b5MKwshBIkzrI1JvfGCAvp8167Jr8zBMZ3H1r0SOS6PXq%2BbMVpvaRMn%2BGZfgtrh3jOxEOkOiFZBeOPY46Abu7mNL6HunNFKkHS9TBZOS7BSTtrNCLlKlq%2FjW%2FU%2FeyeLV9NYnDG92FO6GBpchZf9lUG5i9YaQGGSpqiogSPQoLniif20RfnvDrAgnilEYOtazd4UfagNPnWHlWmid9bVpGg4UjMexOE%2BB5fGbEthnrg19mayh%2Bjh8gL4rs3AdKDupwKTRnEkrmLS%2FNxkw9XvZIFMG%2FtP8YmnA3pFBezJozoXEBu3GZHtSPCWl%2B%2ByW1htQyaoip7UeLFw8aASQh%2Bl55XRZJh8fKJ%2F8v5eUnrnqmgrsHveOmFALKaLYh%2FF3RPfM0lLaOK1EQy9cwbmpTxV9V3%2B9YiRMYI55mCr5NnJe%2FCBq6gcIEl6pStcM5tDHxv%2FsxCgihsib4qiSmp6%2FU%2FwSoF9VOkvCfnLemaTcDCevi82TeMnoZB3k2HdcZyFXz8ADAUdiHqW2UZwSmQ6j%2FDYgu4dQL%2BnlZaTy9fvGiwuXE0vm%2FocxPkRgW8sGOHyqwpsDdDTe5bM6pN6gO%2FYnHx6VnuuF%2BqufcBC0C23tl4tbKdU8wRONo%2Ffb8G5RIDMKHxpr4GOqUBFm%2FCbm4R9j3t7SO5zzosN%2FBqRz%2Fx%2BPUTW%2B4NIcwxdFMKi4KVpZHVnqKRZX%2FbcFn3aQQfbR7DBRmdFbChECLbgoqNLPnJfGL%2BcMbLjlUQsC4MNFNw%2B2Bt2PTqDCwfVxFFJXqMJl7RU8mg0po4C%2B1EZ0flEiaYT2s8xUs5lBC3lC3JEQezfE8gzb0j82yoNs%2FqqAyvALXXSbUb%2FOD7GTVLSnSWLPYH&X-Amz-Signature=367a23bf88c18737b1d7f945e4936c9a89a58b8ddc95bacd40e630b84cceb7be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCYGYXQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbNgL2zXhpnWBYj88BaqsOwUDA5PMAfYUED1uo5BpJUAiEA1NN14YTP1EolWdPqFGvagKqQ1mvbRBqQspMpMp%2FMtxUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPivKmjHOnC5GTEvVCrcA5b5MKwshBIkzrI1JvfGCAvp8167Jr8zBMZ3H1r0SOS6PXq%2BbMVpvaRMn%2BGZfgtrh3jOxEOkOiFZBeOPY46Abu7mNL6HunNFKkHS9TBZOS7BSTtrNCLlKlq%2FjW%2FU%2FeyeLV9NYnDG92FO6GBpchZf9lUG5i9YaQGGSpqiogSPQoLniif20RfnvDrAgnilEYOtazd4UfagNPnWHlWmid9bVpGg4UjMexOE%2BB5fGbEthnrg19mayh%2Bjh8gL4rs3AdKDupwKTRnEkrmLS%2FNxkw9XvZIFMG%2FtP8YmnA3pFBezJozoXEBu3GZHtSPCWl%2B%2ByW1htQyaoip7UeLFw8aASQh%2Bl55XRZJh8fKJ%2F8v5eUnrnqmgrsHveOmFALKaLYh%2FF3RPfM0lLaOK1EQy9cwbmpTxV9V3%2B9YiRMYI55mCr5NnJe%2FCBq6gcIEl6pStcM5tDHxv%2FsxCgihsib4qiSmp6%2FU%2FwSoF9VOkvCfnLemaTcDCevi82TeMnoZB3k2HdcZyFXz8ADAUdiHqW2UZwSmQ6j%2FDYgu4dQL%2BnlZaTy9fvGiwuXE0vm%2FocxPkRgW8sGOHyqwpsDdDTe5bM6pN6gO%2FYnHx6VnuuF%2BqufcBC0C23tl4tbKdU8wRONo%2Ffb8G5RIDMKHxpr4GOqUBFm%2FCbm4R9j3t7SO5zzosN%2FBqRz%2Fx%2BPUTW%2B4NIcwxdFMKi4KVpZHVnqKRZX%2FbcFn3aQQfbR7DBRmdFbChECLbgoqNLPnJfGL%2BcMbLjlUQsC4MNFNw%2B2Bt2PTqDCwfVxFFJXqMJl7RU8mg0po4C%2B1EZ0flEiaYT2s8xUs5lBC3lC3JEQezfE8gzb0j82yoNs%2FqqAyvALXXSbUb%2FOD7GTVLSnSWLPYH&X-Amz-Signature=725f4098abfa9eaadb92ebed06041a66a15c602fe1a8ab404ed2caeccceb85e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
