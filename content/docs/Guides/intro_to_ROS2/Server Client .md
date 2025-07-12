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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GZHY24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc6wB2kWsrpxsftD0DURnoDhe4b2P057%2BIHbzLELIcNAIgIYyQUutNhOP%2FbBYLXHG6Bd9INEA2KOx%2BYdWf%2BNpKNTsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJ%2FF%2BPGJ9%2BAweu6CrcA%2F28%2Fbx7Y690mNY5tugzi5xmznGI8LBB%2BwecBb6bROFOEMlPez9abZTKB8z3KsObaBIIzRcBa5J7icy%2Frp4VbintvbC1krhUreJPXx%2B8f%2BnSA7J385pqfFgtWyJN%2FIwpyIC5QeoApkamB3ZH2ZFe0OieV5T%2BlidpHZyt5AfLe3ncMHoaWh0eyrEUxPez2yBaZvQpZcZN0WuGc1reoerw%2BeT8VR6QzegQCHadiuunCEwiVdMWkKfkasDRg8CfYSNTdJ%2Bs2FkzdCQEj5jId%2B7UYIbf%2BNMTUqDJoEPESFfGp4LXAmdY0An2HOZa0S%2FX8zxJZyFOpPb1xyEE%2FhL8wj1Ld%2B7AuVusuhkJiyCn0I8ruGkOhzuqSDpEaVXgg9lmdrkuCcmFa1QTSwsV6deU6mhV2tuEtl5NapRlTHOiP6Jfm0pXB%2FgizrJ%2Fan1clH8bTDhlS2GhUQQvHCWG9jFDKtZQ10npYtcFdui%2BZQoPFwBV84wv9GpebRadHPjpZcxE2rZfF6obdBAK5hY%2F5KWgcvZVfQ9yCuHZNWpxDVE6zYU087%2FnLS0suFhXh8hktV%2Bb9%2FRWD%2FPFulBClnm1cV1Gx2r%2BBs77%2B49HZIdPZ201x94TQtJ%2FE82PNlXB2K5Y0NWoMID5x8MGOqUBch5NR0fCO4DKM5m5L8EyVB4PXZi27eBcqVt%2BkS5Ov8O48Mz2XLe8xAUFaxrsO0ETVbF5PcwHi4wVVtL70KHwnR09AxgqKTcFM9Ogcoic4MtyvlBAxaS0xkZYBbjEH%2BfLhznWPBgnsUrl7%2BUv%2FaSFAP5Wbn%2FWJbKZ%2BGuxcg2voh%2FSapUGRNHA1kkc%2BMFT1q1nq6d0uE0rhRFLOiyW5dUaLacrXi%2FT&X-Amz-Signature=d811779022a1e54f3fae9ae915cd816b2c3612f7993e527c751164ba9a61a601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GZHY24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc6wB2kWsrpxsftD0DURnoDhe4b2P057%2BIHbzLELIcNAIgIYyQUutNhOP%2FbBYLXHG6Bd9INEA2KOx%2BYdWf%2BNpKNTsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJ%2FF%2BPGJ9%2BAweu6CrcA%2F28%2Fbx7Y690mNY5tugzi5xmznGI8LBB%2BwecBb6bROFOEMlPez9abZTKB8z3KsObaBIIzRcBa5J7icy%2Frp4VbintvbC1krhUreJPXx%2B8f%2BnSA7J385pqfFgtWyJN%2FIwpyIC5QeoApkamB3ZH2ZFe0OieV5T%2BlidpHZyt5AfLe3ncMHoaWh0eyrEUxPez2yBaZvQpZcZN0WuGc1reoerw%2BeT8VR6QzegQCHadiuunCEwiVdMWkKfkasDRg8CfYSNTdJ%2Bs2FkzdCQEj5jId%2B7UYIbf%2BNMTUqDJoEPESFfGp4LXAmdY0An2HOZa0S%2FX8zxJZyFOpPb1xyEE%2FhL8wj1Ld%2B7AuVusuhkJiyCn0I8ruGkOhzuqSDpEaVXgg9lmdrkuCcmFa1QTSwsV6deU6mhV2tuEtl5NapRlTHOiP6Jfm0pXB%2FgizrJ%2Fan1clH8bTDhlS2GhUQQvHCWG9jFDKtZQ10npYtcFdui%2BZQoPFwBV84wv9GpebRadHPjpZcxE2rZfF6obdBAK5hY%2F5KWgcvZVfQ9yCuHZNWpxDVE6zYU087%2FnLS0suFhXh8hktV%2Bb9%2FRWD%2FPFulBClnm1cV1Gx2r%2BBs77%2B49HZIdPZ201x94TQtJ%2FE82PNlXB2K5Y0NWoMID5x8MGOqUBch5NR0fCO4DKM5m5L8EyVB4PXZi27eBcqVt%2BkS5Ov8O48Mz2XLe8xAUFaxrsO0ETVbF5PcwHi4wVVtL70KHwnR09AxgqKTcFM9Ogcoic4MtyvlBAxaS0xkZYBbjEH%2BfLhznWPBgnsUrl7%2BUv%2FaSFAP5Wbn%2FWJbKZ%2BGuxcg2voh%2FSapUGRNHA1kkc%2BMFT1q1nq6d0uE0rhRFLOiyW5dUaLacrXi%2FT&X-Amz-Signature=84bfcd9e579a5267742bc0d5e5d35040c7d2c740eb8c53c957ff18dcb28bb7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GZHY24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc6wB2kWsrpxsftD0DURnoDhe4b2P057%2BIHbzLELIcNAIgIYyQUutNhOP%2FbBYLXHG6Bd9INEA2KOx%2BYdWf%2BNpKNTsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJ%2FF%2BPGJ9%2BAweu6CrcA%2F28%2Fbx7Y690mNY5tugzi5xmznGI8LBB%2BwecBb6bROFOEMlPez9abZTKB8z3KsObaBIIzRcBa5J7icy%2Frp4VbintvbC1krhUreJPXx%2B8f%2BnSA7J385pqfFgtWyJN%2FIwpyIC5QeoApkamB3ZH2ZFe0OieV5T%2BlidpHZyt5AfLe3ncMHoaWh0eyrEUxPez2yBaZvQpZcZN0WuGc1reoerw%2BeT8VR6QzegQCHadiuunCEwiVdMWkKfkasDRg8CfYSNTdJ%2Bs2FkzdCQEj5jId%2B7UYIbf%2BNMTUqDJoEPESFfGp4LXAmdY0An2HOZa0S%2FX8zxJZyFOpPb1xyEE%2FhL8wj1Ld%2B7AuVusuhkJiyCn0I8ruGkOhzuqSDpEaVXgg9lmdrkuCcmFa1QTSwsV6deU6mhV2tuEtl5NapRlTHOiP6Jfm0pXB%2FgizrJ%2Fan1clH8bTDhlS2GhUQQvHCWG9jFDKtZQ10npYtcFdui%2BZQoPFwBV84wv9GpebRadHPjpZcxE2rZfF6obdBAK5hY%2F5KWgcvZVfQ9yCuHZNWpxDVE6zYU087%2FnLS0suFhXh8hktV%2Bb9%2FRWD%2FPFulBClnm1cV1Gx2r%2BBs77%2B49HZIdPZ201x94TQtJ%2FE82PNlXB2K5Y0NWoMID5x8MGOqUBch5NR0fCO4DKM5m5L8EyVB4PXZi27eBcqVt%2BkS5Ov8O48Mz2XLe8xAUFaxrsO0ETVbF5PcwHi4wVVtL70KHwnR09AxgqKTcFM9Ogcoic4MtyvlBAxaS0xkZYBbjEH%2BfLhznWPBgnsUrl7%2BUv%2FaSFAP5Wbn%2FWJbKZ%2BGuxcg2voh%2FSapUGRNHA1kkc%2BMFT1q1nq6d0uE0rhRFLOiyW5dUaLacrXi%2FT&X-Amz-Signature=e1bcef7f1d66ea6f82bc5a457af13e7ad7e1a7a10327b223032d91e3507805ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GZHY24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc6wB2kWsrpxsftD0DURnoDhe4b2P057%2BIHbzLELIcNAIgIYyQUutNhOP%2FbBYLXHG6Bd9INEA2KOx%2BYdWf%2BNpKNTsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJ%2FF%2BPGJ9%2BAweu6CrcA%2F28%2Fbx7Y690mNY5tugzi5xmznGI8LBB%2BwecBb6bROFOEMlPez9abZTKB8z3KsObaBIIzRcBa5J7icy%2Frp4VbintvbC1krhUreJPXx%2B8f%2BnSA7J385pqfFgtWyJN%2FIwpyIC5QeoApkamB3ZH2ZFe0OieV5T%2BlidpHZyt5AfLe3ncMHoaWh0eyrEUxPez2yBaZvQpZcZN0WuGc1reoerw%2BeT8VR6QzegQCHadiuunCEwiVdMWkKfkasDRg8CfYSNTdJ%2Bs2FkzdCQEj5jId%2B7UYIbf%2BNMTUqDJoEPESFfGp4LXAmdY0An2HOZa0S%2FX8zxJZyFOpPb1xyEE%2FhL8wj1Ld%2B7AuVusuhkJiyCn0I8ruGkOhzuqSDpEaVXgg9lmdrkuCcmFa1QTSwsV6deU6mhV2tuEtl5NapRlTHOiP6Jfm0pXB%2FgizrJ%2Fan1clH8bTDhlS2GhUQQvHCWG9jFDKtZQ10npYtcFdui%2BZQoPFwBV84wv9GpebRadHPjpZcxE2rZfF6obdBAK5hY%2F5KWgcvZVfQ9yCuHZNWpxDVE6zYU087%2FnLS0suFhXh8hktV%2Bb9%2FRWD%2FPFulBClnm1cV1Gx2r%2BBs77%2B49HZIdPZ201x94TQtJ%2FE82PNlXB2K5Y0NWoMID5x8MGOqUBch5NR0fCO4DKM5m5L8EyVB4PXZi27eBcqVt%2BkS5Ov8O48Mz2XLe8xAUFaxrsO0ETVbF5PcwHi4wVVtL70KHwnR09AxgqKTcFM9Ogcoic4MtyvlBAxaS0xkZYBbjEH%2BfLhznWPBgnsUrl7%2BUv%2FaSFAP5Wbn%2FWJbKZ%2BGuxcg2voh%2FSapUGRNHA1kkc%2BMFT1q1nq6d0uE0rhRFLOiyW5dUaLacrXi%2FT&X-Amz-Signature=cf8b0750420822c6d549ad9149e1f040c1a9aede9605e8f8857b402eb9da0a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GZHY24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc6wB2kWsrpxsftD0DURnoDhe4b2P057%2BIHbzLELIcNAIgIYyQUutNhOP%2FbBYLXHG6Bd9INEA2KOx%2BYdWf%2BNpKNTsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJ%2FF%2BPGJ9%2BAweu6CrcA%2F28%2Fbx7Y690mNY5tugzi5xmznGI8LBB%2BwecBb6bROFOEMlPez9abZTKB8z3KsObaBIIzRcBa5J7icy%2Frp4VbintvbC1krhUreJPXx%2B8f%2BnSA7J385pqfFgtWyJN%2FIwpyIC5QeoApkamB3ZH2ZFe0OieV5T%2BlidpHZyt5AfLe3ncMHoaWh0eyrEUxPez2yBaZvQpZcZN0WuGc1reoerw%2BeT8VR6QzegQCHadiuunCEwiVdMWkKfkasDRg8CfYSNTdJ%2Bs2FkzdCQEj5jId%2B7UYIbf%2BNMTUqDJoEPESFfGp4LXAmdY0An2HOZa0S%2FX8zxJZyFOpPb1xyEE%2FhL8wj1Ld%2B7AuVusuhkJiyCn0I8ruGkOhzuqSDpEaVXgg9lmdrkuCcmFa1QTSwsV6deU6mhV2tuEtl5NapRlTHOiP6Jfm0pXB%2FgizrJ%2Fan1clH8bTDhlS2GhUQQvHCWG9jFDKtZQ10npYtcFdui%2BZQoPFwBV84wv9GpebRadHPjpZcxE2rZfF6obdBAK5hY%2F5KWgcvZVfQ9yCuHZNWpxDVE6zYU087%2FnLS0suFhXh8hktV%2Bb9%2FRWD%2FPFulBClnm1cV1Gx2r%2BBs77%2B49HZIdPZ201x94TQtJ%2FE82PNlXB2K5Y0NWoMID5x8MGOqUBch5NR0fCO4DKM5m5L8EyVB4PXZi27eBcqVt%2BkS5Ov8O48Mz2XLe8xAUFaxrsO0ETVbF5PcwHi4wVVtL70KHwnR09AxgqKTcFM9Ogcoic4MtyvlBAxaS0xkZYBbjEH%2BfLhznWPBgnsUrl7%2BUv%2FaSFAP5Wbn%2FWJbKZ%2BGuxcg2voh%2FSapUGRNHA1kkc%2BMFT1q1nq6d0uE0rhRFLOiyW5dUaLacrXi%2FT&X-Amz-Signature=0882a2a5d348290d3c8aa3aa973fba85f4102989a545bdbc7610a6716b558eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
