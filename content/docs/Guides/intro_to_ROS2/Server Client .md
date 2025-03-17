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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHL7MMO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0nyXhXyyLsB2NYfFy8iL%2F40T1mJn1NSHDFVokFCJtAiAndFQPh4cj9Lmuf6dHU4ReTP56woHFcgya79hXs6LVqyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrF17sOVFVFwbqsoaKtwDJJEajebaj1Pv%2FC6d6kvLABE3xpnBYHx7ibn3JOKhQB8uYGrkFnRfWsg9yHFZ0sMTfIxVTziRZO2nY9uTCMPFC1vOxreTHJd0e9lvCm313D5vaIzx%2Fxmvt2PNO8L%2F1SyMobxwj0S6N0TQqunFfX8QB%2Fwju89%2FKIYOq2DLKKPzgIKNNm2uQuyiv5MO6Wi0%2FpCc9yUw%2BkuANnGzRH5IYz1k%2BkP7fKyXvcqHgYEo7Jszgy9Jgo8qBLJ6mlz%2FWgDvV%2F8dZUk822FySJGa%2BB%2F8ysA77SBSxv60aCwENap6Fl6wtl4XDoQIi6iJnGm89RK88N6RA8h29vDwx3zCSn0WJ%2B998xjPqIgd66PAXyytuwnrsxKVZweM9CyrPympaHfVVN1E4JXz747v%2FdWDMpSqBqWQBlfrneA8xPcTQ2pbZxlrmPWeVPtfzC82aaYqI%2BdawHdjDrYUiJKL95TmCgtH4d%2FS3vmoqvAVJ%2FWNO%2Bij5%2BowmAl2WMYaOsUV8K8wovz65Ul07Hykj%2Fflt3w2pX9y0UZb3GU6zn89ec2kc63c3dN3Tauzs0JUbG5YN0Hs2nV7A50X2p9MN%2F40IUv8NSCaec9iuuwaihTmbKtiwBr3e3Of8vTNOEbS5OMu%2B%2BLcnXEwu6zhvgY6pgEROGawC6eWmVEHmWvyFihG01PaU7I31MftLQ0ot%2FDnTpda4rhsB%2B%2FA8y2Ly%2B8Oh0XUUx2t22cKBLyWqpvzDuyNPggVOf8NbLHAo1r%2FZZAa7i2s6qEysj0jNrr85ReElfljfehcJkTD01x24SF3lOjG%2B6LBGDtPng4ZX8IDaHnXCZ8Z7Rp5eQVmqUtff%2Bpz4rAgKkJ%2BDvDS7LIom8vGCAktpyFo2NAD&X-Amz-Signature=a6db9a6f5175fc4c38904d0c9e54d3da7939f01bf9c1aede51c2e74523440b78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHL7MMO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0nyXhXyyLsB2NYfFy8iL%2F40T1mJn1NSHDFVokFCJtAiAndFQPh4cj9Lmuf6dHU4ReTP56woHFcgya79hXs6LVqyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrF17sOVFVFwbqsoaKtwDJJEajebaj1Pv%2FC6d6kvLABE3xpnBYHx7ibn3JOKhQB8uYGrkFnRfWsg9yHFZ0sMTfIxVTziRZO2nY9uTCMPFC1vOxreTHJd0e9lvCm313D5vaIzx%2Fxmvt2PNO8L%2F1SyMobxwj0S6N0TQqunFfX8QB%2Fwju89%2FKIYOq2DLKKPzgIKNNm2uQuyiv5MO6Wi0%2FpCc9yUw%2BkuANnGzRH5IYz1k%2BkP7fKyXvcqHgYEo7Jszgy9Jgo8qBLJ6mlz%2FWgDvV%2F8dZUk822FySJGa%2BB%2F8ysA77SBSxv60aCwENap6Fl6wtl4XDoQIi6iJnGm89RK88N6RA8h29vDwx3zCSn0WJ%2B998xjPqIgd66PAXyytuwnrsxKVZweM9CyrPympaHfVVN1E4JXz747v%2FdWDMpSqBqWQBlfrneA8xPcTQ2pbZxlrmPWeVPtfzC82aaYqI%2BdawHdjDrYUiJKL95TmCgtH4d%2FS3vmoqvAVJ%2FWNO%2Bij5%2BowmAl2WMYaOsUV8K8wovz65Ul07Hykj%2Fflt3w2pX9y0UZb3GU6zn89ec2kc63c3dN3Tauzs0JUbG5YN0Hs2nV7A50X2p9MN%2F40IUv8NSCaec9iuuwaihTmbKtiwBr3e3Of8vTNOEbS5OMu%2B%2BLcnXEwu6zhvgY6pgEROGawC6eWmVEHmWvyFihG01PaU7I31MftLQ0ot%2FDnTpda4rhsB%2B%2FA8y2Ly%2B8Oh0XUUx2t22cKBLyWqpvzDuyNPggVOf8NbLHAo1r%2FZZAa7i2s6qEysj0jNrr85ReElfljfehcJkTD01x24SF3lOjG%2B6LBGDtPng4ZX8IDaHnXCZ8Z7Rp5eQVmqUtff%2Bpz4rAgKkJ%2BDvDS7LIom8vGCAktpyFo2NAD&X-Amz-Signature=74ef23df6090781cbee85d1315d86c3ba6949756d9cb9a121fcaa959313ffdd1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHL7MMO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0nyXhXyyLsB2NYfFy8iL%2F40T1mJn1NSHDFVokFCJtAiAndFQPh4cj9Lmuf6dHU4ReTP56woHFcgya79hXs6LVqyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrF17sOVFVFwbqsoaKtwDJJEajebaj1Pv%2FC6d6kvLABE3xpnBYHx7ibn3JOKhQB8uYGrkFnRfWsg9yHFZ0sMTfIxVTziRZO2nY9uTCMPFC1vOxreTHJd0e9lvCm313D5vaIzx%2Fxmvt2PNO8L%2F1SyMobxwj0S6N0TQqunFfX8QB%2Fwju89%2FKIYOq2DLKKPzgIKNNm2uQuyiv5MO6Wi0%2FpCc9yUw%2BkuANnGzRH5IYz1k%2BkP7fKyXvcqHgYEo7Jszgy9Jgo8qBLJ6mlz%2FWgDvV%2F8dZUk822FySJGa%2BB%2F8ysA77SBSxv60aCwENap6Fl6wtl4XDoQIi6iJnGm89RK88N6RA8h29vDwx3zCSn0WJ%2B998xjPqIgd66PAXyytuwnrsxKVZweM9CyrPympaHfVVN1E4JXz747v%2FdWDMpSqBqWQBlfrneA8xPcTQ2pbZxlrmPWeVPtfzC82aaYqI%2BdawHdjDrYUiJKL95TmCgtH4d%2FS3vmoqvAVJ%2FWNO%2Bij5%2BowmAl2WMYaOsUV8K8wovz65Ul07Hykj%2Fflt3w2pX9y0UZb3GU6zn89ec2kc63c3dN3Tauzs0JUbG5YN0Hs2nV7A50X2p9MN%2F40IUv8NSCaec9iuuwaihTmbKtiwBr3e3Of8vTNOEbS5OMu%2B%2BLcnXEwu6zhvgY6pgEROGawC6eWmVEHmWvyFihG01PaU7I31MftLQ0ot%2FDnTpda4rhsB%2B%2FA8y2Ly%2B8Oh0XUUx2t22cKBLyWqpvzDuyNPggVOf8NbLHAo1r%2FZZAa7i2s6qEysj0jNrr85ReElfljfehcJkTD01x24SF3lOjG%2B6LBGDtPng4ZX8IDaHnXCZ8Z7Rp5eQVmqUtff%2Bpz4rAgKkJ%2BDvDS7LIom8vGCAktpyFo2NAD&X-Amz-Signature=666475b88bafde6e1449e609fba7e1501fe468c528a5ad5a8cb174e6d2251b30&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHL7MMO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0nyXhXyyLsB2NYfFy8iL%2F40T1mJn1NSHDFVokFCJtAiAndFQPh4cj9Lmuf6dHU4ReTP56woHFcgya79hXs6LVqyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrF17sOVFVFwbqsoaKtwDJJEajebaj1Pv%2FC6d6kvLABE3xpnBYHx7ibn3JOKhQB8uYGrkFnRfWsg9yHFZ0sMTfIxVTziRZO2nY9uTCMPFC1vOxreTHJd0e9lvCm313D5vaIzx%2Fxmvt2PNO8L%2F1SyMobxwj0S6N0TQqunFfX8QB%2Fwju89%2FKIYOq2DLKKPzgIKNNm2uQuyiv5MO6Wi0%2FpCc9yUw%2BkuANnGzRH5IYz1k%2BkP7fKyXvcqHgYEo7Jszgy9Jgo8qBLJ6mlz%2FWgDvV%2F8dZUk822FySJGa%2BB%2F8ysA77SBSxv60aCwENap6Fl6wtl4XDoQIi6iJnGm89RK88N6RA8h29vDwx3zCSn0WJ%2B998xjPqIgd66PAXyytuwnrsxKVZweM9CyrPympaHfVVN1E4JXz747v%2FdWDMpSqBqWQBlfrneA8xPcTQ2pbZxlrmPWeVPtfzC82aaYqI%2BdawHdjDrYUiJKL95TmCgtH4d%2FS3vmoqvAVJ%2FWNO%2Bij5%2BowmAl2WMYaOsUV8K8wovz65Ul07Hykj%2Fflt3w2pX9y0UZb3GU6zn89ec2kc63c3dN3Tauzs0JUbG5YN0Hs2nV7A50X2p9MN%2F40IUv8NSCaec9iuuwaihTmbKtiwBr3e3Of8vTNOEbS5OMu%2B%2BLcnXEwu6zhvgY6pgEROGawC6eWmVEHmWvyFihG01PaU7I31MftLQ0ot%2FDnTpda4rhsB%2B%2FA8y2Ly%2B8Oh0XUUx2t22cKBLyWqpvzDuyNPggVOf8NbLHAo1r%2FZZAa7i2s6qEysj0jNrr85ReElfljfehcJkTD01x24SF3lOjG%2B6LBGDtPng4ZX8IDaHnXCZ8Z7Rp5eQVmqUtff%2Bpz4rAgKkJ%2BDvDS7LIom8vGCAktpyFo2NAD&X-Amz-Signature=be9e2b7d39b2e4d439f7f1c38a61e461524030085ab810bc8328b0e353a922ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHL7MMO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0nyXhXyyLsB2NYfFy8iL%2F40T1mJn1NSHDFVokFCJtAiAndFQPh4cj9Lmuf6dHU4ReTP56woHFcgya79hXs6LVqyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrF17sOVFVFwbqsoaKtwDJJEajebaj1Pv%2FC6d6kvLABE3xpnBYHx7ibn3JOKhQB8uYGrkFnRfWsg9yHFZ0sMTfIxVTziRZO2nY9uTCMPFC1vOxreTHJd0e9lvCm313D5vaIzx%2Fxmvt2PNO8L%2F1SyMobxwj0S6N0TQqunFfX8QB%2Fwju89%2FKIYOq2DLKKPzgIKNNm2uQuyiv5MO6Wi0%2FpCc9yUw%2BkuANnGzRH5IYz1k%2BkP7fKyXvcqHgYEo7Jszgy9Jgo8qBLJ6mlz%2FWgDvV%2F8dZUk822FySJGa%2BB%2F8ysA77SBSxv60aCwENap6Fl6wtl4XDoQIi6iJnGm89RK88N6RA8h29vDwx3zCSn0WJ%2B998xjPqIgd66PAXyytuwnrsxKVZweM9CyrPympaHfVVN1E4JXz747v%2FdWDMpSqBqWQBlfrneA8xPcTQ2pbZxlrmPWeVPtfzC82aaYqI%2BdawHdjDrYUiJKL95TmCgtH4d%2FS3vmoqvAVJ%2FWNO%2Bij5%2BowmAl2WMYaOsUV8K8wovz65Ul07Hykj%2Fflt3w2pX9y0UZb3GU6zn89ec2kc63c3dN3Tauzs0JUbG5YN0Hs2nV7A50X2p9MN%2F40IUv8NSCaec9iuuwaihTmbKtiwBr3e3Of8vTNOEbS5OMu%2B%2BLcnXEwu6zhvgY6pgEROGawC6eWmVEHmWvyFihG01PaU7I31MftLQ0ot%2FDnTpda4rhsB%2B%2FA8y2Ly%2B8Oh0XUUx2t22cKBLyWqpvzDuyNPggVOf8NbLHAo1r%2FZZAa7i2s6qEysj0jNrr85ReElfljfehcJkTD01x24SF3lOjG%2B6LBGDtPng4ZX8IDaHnXCZ8Z7Rp5eQVmqUtff%2Bpz4rAgKkJ%2BDvDS7LIom8vGCAktpyFo2NAD&X-Amz-Signature=c555a2002d4f197eea3a2a721f340196f09e4216378d623527585905c1be2b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
