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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XOXWJG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCE%2F1Z0Z3W4zReAag7jkkUB2XbPHTYw2Mv2tLQIfbTauAIhAIRmi4078tURgWEXYWo30K0qMC8mgS5fc2342Ug%2FIYOIKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrHqt1HGAL1hYqBkq3AMhujbGXsjtpZB4IOtdNjQSh8kSM3UIINFcl1VdOMLjVuGsCj%2B7xS7xpwJUxdLAr3eFBre8IHxVfmeLYFx%2B3NA9GLuh%2BlVPrj8lzubXXl57DZxCsqoJK%2B3Psytg%2FUZGTnlVvbDzzP50%2Fo9bxY8o1QgTNEMpZLlIOZ8X324vogawlV7oTItUlZI16n9eUpBlQTBCb3i%2FPCNTyq71x4UQoKGbobuLiAvapHpnBbzPO0JrXAH0YoSj3JaYOS4reQ6wB4BeFzofy1myIDR2FQhM7fTAkdZtbN2ZjFaXM2qXeE7fm7Yn0WTnZ1h1FsnwnlDdFa89A9BF2Qp3iuTL84ToDP3eC%2FwFpo3bowpneYa%2FNheFSKG7E1a86OGL1nXT5ghaa3m8Smj9Q92CpTzBRsaCS4os%2FWZmx5TCOOljwSGwB%2FtWlWR%2BHtj9cqjYB7dBjByxJmiXhVSz9OcXDxhj02G6u%2BdoDfVdfSlM4en8N%2Frb4q2MS3IUJD2Ci5qDSwTcq3S%2FGIlzHG1Czacg%2B%2BO%2F50BEGFF5xe5%2BPxsXikxV3cjQPJ0L%2FfdthSuEfNvz70F7O2hdS74gLhe2%2F%2FdoJ%2BiWDx%2BazqLT3pnGYiLAwoSI4BypAbXtvMjGecA4zqIazeShDzDD8KO%2FBjqkAWeksif8a9dt6Wg2xXSZr6Bb8JtgzaEZ4vqYs7egCGTSSj8v4ViiDQ1C9QFsKhWXaYq1YXU4%2FGR5hfuEEXxlXvm7KIy%2FcHL0Lwq6btqLrrcZFqBnbAbKnq8XExqA4oAiTKfC8N7Fm1XLxD5hti5hMfVsncUtlAU7tiIm1fnd4gt6%2BGbGMa3l8yYFE5%2FET17wg4DfnOxVKBsyBXGgr9r5LWigpRHu&X-Amz-Signature=6e2bb58ff7fb0e3c797a89e7ac4515ff91ceaab63314f93975309a3ec4e97a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XOXWJG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCE%2F1Z0Z3W4zReAag7jkkUB2XbPHTYw2Mv2tLQIfbTauAIhAIRmi4078tURgWEXYWo30K0qMC8mgS5fc2342Ug%2FIYOIKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrHqt1HGAL1hYqBkq3AMhujbGXsjtpZB4IOtdNjQSh8kSM3UIINFcl1VdOMLjVuGsCj%2B7xS7xpwJUxdLAr3eFBre8IHxVfmeLYFx%2B3NA9GLuh%2BlVPrj8lzubXXl57DZxCsqoJK%2B3Psytg%2FUZGTnlVvbDzzP50%2Fo9bxY8o1QgTNEMpZLlIOZ8X324vogawlV7oTItUlZI16n9eUpBlQTBCb3i%2FPCNTyq71x4UQoKGbobuLiAvapHpnBbzPO0JrXAH0YoSj3JaYOS4reQ6wB4BeFzofy1myIDR2FQhM7fTAkdZtbN2ZjFaXM2qXeE7fm7Yn0WTnZ1h1FsnwnlDdFa89A9BF2Qp3iuTL84ToDP3eC%2FwFpo3bowpneYa%2FNheFSKG7E1a86OGL1nXT5ghaa3m8Smj9Q92CpTzBRsaCS4os%2FWZmx5TCOOljwSGwB%2FtWlWR%2BHtj9cqjYB7dBjByxJmiXhVSz9OcXDxhj02G6u%2BdoDfVdfSlM4en8N%2Frb4q2MS3IUJD2Ci5qDSwTcq3S%2FGIlzHG1Czacg%2B%2BO%2F50BEGFF5xe5%2BPxsXikxV3cjQPJ0L%2FfdthSuEfNvz70F7O2hdS74gLhe2%2F%2FdoJ%2BiWDx%2BazqLT3pnGYiLAwoSI4BypAbXtvMjGecA4zqIazeShDzDD8KO%2FBjqkAWeksif8a9dt6Wg2xXSZr6Bb8JtgzaEZ4vqYs7egCGTSSj8v4ViiDQ1C9QFsKhWXaYq1YXU4%2FGR5hfuEEXxlXvm7KIy%2FcHL0Lwq6btqLrrcZFqBnbAbKnq8XExqA4oAiTKfC8N7Fm1XLxD5hti5hMfVsncUtlAU7tiIm1fnd4gt6%2BGbGMa3l8yYFE5%2FET17wg4DfnOxVKBsyBXGgr9r5LWigpRHu&X-Amz-Signature=5543d67324b8ee4cdbe8ac4cd6382af07672f53e6375c2066a422c4675194acb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XOXWJG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCE%2F1Z0Z3W4zReAag7jkkUB2XbPHTYw2Mv2tLQIfbTauAIhAIRmi4078tURgWEXYWo30K0qMC8mgS5fc2342Ug%2FIYOIKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrHqt1HGAL1hYqBkq3AMhujbGXsjtpZB4IOtdNjQSh8kSM3UIINFcl1VdOMLjVuGsCj%2B7xS7xpwJUxdLAr3eFBre8IHxVfmeLYFx%2B3NA9GLuh%2BlVPrj8lzubXXl57DZxCsqoJK%2B3Psytg%2FUZGTnlVvbDzzP50%2Fo9bxY8o1QgTNEMpZLlIOZ8X324vogawlV7oTItUlZI16n9eUpBlQTBCb3i%2FPCNTyq71x4UQoKGbobuLiAvapHpnBbzPO0JrXAH0YoSj3JaYOS4reQ6wB4BeFzofy1myIDR2FQhM7fTAkdZtbN2ZjFaXM2qXeE7fm7Yn0WTnZ1h1FsnwnlDdFa89A9BF2Qp3iuTL84ToDP3eC%2FwFpo3bowpneYa%2FNheFSKG7E1a86OGL1nXT5ghaa3m8Smj9Q92CpTzBRsaCS4os%2FWZmx5TCOOljwSGwB%2FtWlWR%2BHtj9cqjYB7dBjByxJmiXhVSz9OcXDxhj02G6u%2BdoDfVdfSlM4en8N%2Frb4q2MS3IUJD2Ci5qDSwTcq3S%2FGIlzHG1Czacg%2B%2BO%2F50BEGFF5xe5%2BPxsXikxV3cjQPJ0L%2FfdthSuEfNvz70F7O2hdS74gLhe2%2F%2FdoJ%2BiWDx%2BazqLT3pnGYiLAwoSI4BypAbXtvMjGecA4zqIazeShDzDD8KO%2FBjqkAWeksif8a9dt6Wg2xXSZr6Bb8JtgzaEZ4vqYs7egCGTSSj8v4ViiDQ1C9QFsKhWXaYq1YXU4%2FGR5hfuEEXxlXvm7KIy%2FcHL0Lwq6btqLrrcZFqBnbAbKnq8XExqA4oAiTKfC8N7Fm1XLxD5hti5hMfVsncUtlAU7tiIm1fnd4gt6%2BGbGMa3l8yYFE5%2FET17wg4DfnOxVKBsyBXGgr9r5LWigpRHu&X-Amz-Signature=afa718301b4c204d65e7c5be5e5e1e569c6fedd1712f4b0f76f3afefc40c5e62&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XOXWJG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCE%2F1Z0Z3W4zReAag7jkkUB2XbPHTYw2Mv2tLQIfbTauAIhAIRmi4078tURgWEXYWo30K0qMC8mgS5fc2342Ug%2FIYOIKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrHqt1HGAL1hYqBkq3AMhujbGXsjtpZB4IOtdNjQSh8kSM3UIINFcl1VdOMLjVuGsCj%2B7xS7xpwJUxdLAr3eFBre8IHxVfmeLYFx%2B3NA9GLuh%2BlVPrj8lzubXXl57DZxCsqoJK%2B3Psytg%2FUZGTnlVvbDzzP50%2Fo9bxY8o1QgTNEMpZLlIOZ8X324vogawlV7oTItUlZI16n9eUpBlQTBCb3i%2FPCNTyq71x4UQoKGbobuLiAvapHpnBbzPO0JrXAH0YoSj3JaYOS4reQ6wB4BeFzofy1myIDR2FQhM7fTAkdZtbN2ZjFaXM2qXeE7fm7Yn0WTnZ1h1FsnwnlDdFa89A9BF2Qp3iuTL84ToDP3eC%2FwFpo3bowpneYa%2FNheFSKG7E1a86OGL1nXT5ghaa3m8Smj9Q92CpTzBRsaCS4os%2FWZmx5TCOOljwSGwB%2FtWlWR%2BHtj9cqjYB7dBjByxJmiXhVSz9OcXDxhj02G6u%2BdoDfVdfSlM4en8N%2Frb4q2MS3IUJD2Ci5qDSwTcq3S%2FGIlzHG1Czacg%2B%2BO%2F50BEGFF5xe5%2BPxsXikxV3cjQPJ0L%2FfdthSuEfNvz70F7O2hdS74gLhe2%2F%2FdoJ%2BiWDx%2BazqLT3pnGYiLAwoSI4BypAbXtvMjGecA4zqIazeShDzDD8KO%2FBjqkAWeksif8a9dt6Wg2xXSZr6Bb8JtgzaEZ4vqYs7egCGTSSj8v4ViiDQ1C9QFsKhWXaYq1YXU4%2FGR5hfuEEXxlXvm7KIy%2FcHL0Lwq6btqLrrcZFqBnbAbKnq8XExqA4oAiTKfC8N7Fm1XLxD5hti5hMfVsncUtlAU7tiIm1fnd4gt6%2BGbGMa3l8yYFE5%2FET17wg4DfnOxVKBsyBXGgr9r5LWigpRHu&X-Amz-Signature=fc2ed4f0e43ce5b264bc6d5312359073d1323b44cc9896580e4c2f628225a68a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XOXWJG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCE%2F1Z0Z3W4zReAag7jkkUB2XbPHTYw2Mv2tLQIfbTauAIhAIRmi4078tURgWEXYWo30K0qMC8mgS5fc2342Ug%2FIYOIKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrHqt1HGAL1hYqBkq3AMhujbGXsjtpZB4IOtdNjQSh8kSM3UIINFcl1VdOMLjVuGsCj%2B7xS7xpwJUxdLAr3eFBre8IHxVfmeLYFx%2B3NA9GLuh%2BlVPrj8lzubXXl57DZxCsqoJK%2B3Psytg%2FUZGTnlVvbDzzP50%2Fo9bxY8o1QgTNEMpZLlIOZ8X324vogawlV7oTItUlZI16n9eUpBlQTBCb3i%2FPCNTyq71x4UQoKGbobuLiAvapHpnBbzPO0JrXAH0YoSj3JaYOS4reQ6wB4BeFzofy1myIDR2FQhM7fTAkdZtbN2ZjFaXM2qXeE7fm7Yn0WTnZ1h1FsnwnlDdFa89A9BF2Qp3iuTL84ToDP3eC%2FwFpo3bowpneYa%2FNheFSKG7E1a86OGL1nXT5ghaa3m8Smj9Q92CpTzBRsaCS4os%2FWZmx5TCOOljwSGwB%2FtWlWR%2BHtj9cqjYB7dBjByxJmiXhVSz9OcXDxhj02G6u%2BdoDfVdfSlM4en8N%2Frb4q2MS3IUJD2Ci5qDSwTcq3S%2FGIlzHG1Czacg%2B%2BO%2F50BEGFF5xe5%2BPxsXikxV3cjQPJ0L%2FfdthSuEfNvz70F7O2hdS74gLhe2%2F%2FdoJ%2BiWDx%2BazqLT3pnGYiLAwoSI4BypAbXtvMjGecA4zqIazeShDzDD8KO%2FBjqkAWeksif8a9dt6Wg2xXSZr6Bb8JtgzaEZ4vqYs7egCGTSSj8v4ViiDQ1C9QFsKhWXaYq1YXU4%2FGR5hfuEEXxlXvm7KIy%2FcHL0Lwq6btqLrrcZFqBnbAbKnq8XExqA4oAiTKfC8N7Fm1XLxD5hti5hMfVsncUtlAU7tiIm1fnd4gt6%2BGbGMa3l8yYFE5%2FET17wg4DfnOxVKBsyBXGgr9r5LWigpRHu&X-Amz-Signature=0d7d0e083b8a7447644a5a9f6f1210859dcad922e36cccdfdf5397659a0b1eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
