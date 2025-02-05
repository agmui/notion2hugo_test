---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHZRJGE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAmFjeXRTzCNtZtcHPvObWUr1J8dC%2Fd4WOgkW6vlrg9wIhAL9VthvUVXeloAZbXmo1PKHtikrkgHgK8LB9sGFWdr2CKv8DCEAQABoMNjM3NDIzMTgzODA1IgwgkIJLPl6ypR9%2B15cq3APHbqRIi87WtDKBOTtgCRHVs%2BNkMJFH7OsNHP9tV3M3pMqn30%2FLBq01HwY9aD2NmUE6w7x%2B3Mf%2FROTcfD%2BsSe7rJtCnmyRiNRLeiPKkBxwcbbzbDRHBoO9qP2%2BvNSSu4w0zxSRxkUhjGr4Hr1XWMDhi8ClhUP2BVyBz6c1k1xve0XJpQ0FHzci8daMvVRKPQkFen8dnB0rhuR6qvwBrEk9RTHTLHm85i4KJyXm4VeFjS6cT%2BWbGkbS%2BQrAj5z4se97GLEq6c4jPUYqkmt1RuddlsVEYxsZliGlWEX4EBFjghVSWAsEjrnjitiU1R1SW%2FKy7JKjyerBB%2FBysw61Ta%2FcBH7%2BJVv0PmOt8xNR78RXsqG73ToXeG%2FZz7qdn52IgYP5T28ryLwkxq9Gi2K3eIRw6OpRmzoOKyMDFrTH1FrSIPiSNUhH47NJqoYszvMWFFJJMHBYRRPQFuyD9QG3UvG7q4VXU9b5hhlFiKBAcl%2BNkV1RsAhqMQU6KxkveHHlkgn74MGeQeg7%2F13ExmPcbqAFzeYzRppDAYbyB7scordlal%2B9E2A3gPkVNQXdpZzhw%2FkkjGAbqn6khxf6nJ46aaG6uDmRBFn53IoJG31YxBslDbp1DVdfN1LZ66t88VTCUl4y9BjqkAS2Z3JEm7rvwHIV832G3vzyglNT6T7ngdk5ODyxI%2F%2BGoZvoqslz8fPWiJ2k6kDIE7xfn6GMIcBf1Ty9Tao3Zs2Nrt%2B7enpjKbm4Lzn2eK0qGFYTTGpvAS8vIJCzqFgrmoa4FantTnTFekQNJkVxSdgtlkTIIxALY7WAyPMBZICWpfVIuI5iI1msK%2Ff4%2BTSKBUuIPzKdp1GDXZOPUaXNVU1m1%2BlTv&X-Amz-Signature=acf7bea3e69c88e6a094f85e89b0473cb1134cc78ffd217a8463b6023f8784d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHZRJGE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAmFjeXRTzCNtZtcHPvObWUr1J8dC%2Fd4WOgkW6vlrg9wIhAL9VthvUVXeloAZbXmo1PKHtikrkgHgK8LB9sGFWdr2CKv8DCEAQABoMNjM3NDIzMTgzODA1IgwgkIJLPl6ypR9%2B15cq3APHbqRIi87WtDKBOTtgCRHVs%2BNkMJFH7OsNHP9tV3M3pMqn30%2FLBq01HwY9aD2NmUE6w7x%2B3Mf%2FROTcfD%2BsSe7rJtCnmyRiNRLeiPKkBxwcbbzbDRHBoO9qP2%2BvNSSu4w0zxSRxkUhjGr4Hr1XWMDhi8ClhUP2BVyBz6c1k1xve0XJpQ0FHzci8daMvVRKPQkFen8dnB0rhuR6qvwBrEk9RTHTLHm85i4KJyXm4VeFjS6cT%2BWbGkbS%2BQrAj5z4se97GLEq6c4jPUYqkmt1RuddlsVEYxsZliGlWEX4EBFjghVSWAsEjrnjitiU1R1SW%2FKy7JKjyerBB%2FBysw61Ta%2FcBH7%2BJVv0PmOt8xNR78RXsqG73ToXeG%2FZz7qdn52IgYP5T28ryLwkxq9Gi2K3eIRw6OpRmzoOKyMDFrTH1FrSIPiSNUhH47NJqoYszvMWFFJJMHBYRRPQFuyD9QG3UvG7q4VXU9b5hhlFiKBAcl%2BNkV1RsAhqMQU6KxkveHHlkgn74MGeQeg7%2F13ExmPcbqAFzeYzRppDAYbyB7scordlal%2B9E2A3gPkVNQXdpZzhw%2FkkjGAbqn6khxf6nJ46aaG6uDmRBFn53IoJG31YxBslDbp1DVdfN1LZ66t88VTCUl4y9BjqkAS2Z3JEm7rvwHIV832G3vzyglNT6T7ngdk5ODyxI%2F%2BGoZvoqslz8fPWiJ2k6kDIE7xfn6GMIcBf1Ty9Tao3Zs2Nrt%2B7enpjKbm4Lzn2eK0qGFYTTGpvAS8vIJCzqFgrmoa4FantTnTFekQNJkVxSdgtlkTIIxALY7WAyPMBZICWpfVIuI5iI1msK%2Ff4%2BTSKBUuIPzKdp1GDXZOPUaXNVU1m1%2BlTv&X-Amz-Signature=bdfa54bcc468df682976a163c418e0265ac2961cd221062bd538dbdd9c3cc225&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHZRJGE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAmFjeXRTzCNtZtcHPvObWUr1J8dC%2Fd4WOgkW6vlrg9wIhAL9VthvUVXeloAZbXmo1PKHtikrkgHgK8LB9sGFWdr2CKv8DCEAQABoMNjM3NDIzMTgzODA1IgwgkIJLPl6ypR9%2B15cq3APHbqRIi87WtDKBOTtgCRHVs%2BNkMJFH7OsNHP9tV3M3pMqn30%2FLBq01HwY9aD2NmUE6w7x%2B3Mf%2FROTcfD%2BsSe7rJtCnmyRiNRLeiPKkBxwcbbzbDRHBoO9qP2%2BvNSSu4w0zxSRxkUhjGr4Hr1XWMDhi8ClhUP2BVyBz6c1k1xve0XJpQ0FHzci8daMvVRKPQkFen8dnB0rhuR6qvwBrEk9RTHTLHm85i4KJyXm4VeFjS6cT%2BWbGkbS%2BQrAj5z4se97GLEq6c4jPUYqkmt1RuddlsVEYxsZliGlWEX4EBFjghVSWAsEjrnjitiU1R1SW%2FKy7JKjyerBB%2FBysw61Ta%2FcBH7%2BJVv0PmOt8xNR78RXsqG73ToXeG%2FZz7qdn52IgYP5T28ryLwkxq9Gi2K3eIRw6OpRmzoOKyMDFrTH1FrSIPiSNUhH47NJqoYszvMWFFJJMHBYRRPQFuyD9QG3UvG7q4VXU9b5hhlFiKBAcl%2BNkV1RsAhqMQU6KxkveHHlkgn74MGeQeg7%2F13ExmPcbqAFzeYzRppDAYbyB7scordlal%2B9E2A3gPkVNQXdpZzhw%2FkkjGAbqn6khxf6nJ46aaG6uDmRBFn53IoJG31YxBslDbp1DVdfN1LZ66t88VTCUl4y9BjqkAS2Z3JEm7rvwHIV832G3vzyglNT6T7ngdk5ODyxI%2F%2BGoZvoqslz8fPWiJ2k6kDIE7xfn6GMIcBf1Ty9Tao3Zs2Nrt%2B7enpjKbm4Lzn2eK0qGFYTTGpvAS8vIJCzqFgrmoa4FantTnTFekQNJkVxSdgtlkTIIxALY7WAyPMBZICWpfVIuI5iI1msK%2Ff4%2BTSKBUuIPzKdp1GDXZOPUaXNVU1m1%2BlTv&X-Amz-Signature=ac602a1a61afae4a17b0f46e3fafe59dfe3a98cbef22b23b5c0cf2739f391290&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHZRJGE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAmFjeXRTzCNtZtcHPvObWUr1J8dC%2Fd4WOgkW6vlrg9wIhAL9VthvUVXeloAZbXmo1PKHtikrkgHgK8LB9sGFWdr2CKv8DCEAQABoMNjM3NDIzMTgzODA1IgwgkIJLPl6ypR9%2B15cq3APHbqRIi87WtDKBOTtgCRHVs%2BNkMJFH7OsNHP9tV3M3pMqn30%2FLBq01HwY9aD2NmUE6w7x%2B3Mf%2FROTcfD%2BsSe7rJtCnmyRiNRLeiPKkBxwcbbzbDRHBoO9qP2%2BvNSSu4w0zxSRxkUhjGr4Hr1XWMDhi8ClhUP2BVyBz6c1k1xve0XJpQ0FHzci8daMvVRKPQkFen8dnB0rhuR6qvwBrEk9RTHTLHm85i4KJyXm4VeFjS6cT%2BWbGkbS%2BQrAj5z4se97GLEq6c4jPUYqkmt1RuddlsVEYxsZliGlWEX4EBFjghVSWAsEjrnjitiU1R1SW%2FKy7JKjyerBB%2FBysw61Ta%2FcBH7%2BJVv0PmOt8xNR78RXsqG73ToXeG%2FZz7qdn52IgYP5T28ryLwkxq9Gi2K3eIRw6OpRmzoOKyMDFrTH1FrSIPiSNUhH47NJqoYszvMWFFJJMHBYRRPQFuyD9QG3UvG7q4VXU9b5hhlFiKBAcl%2BNkV1RsAhqMQU6KxkveHHlkgn74MGeQeg7%2F13ExmPcbqAFzeYzRppDAYbyB7scordlal%2B9E2A3gPkVNQXdpZzhw%2FkkjGAbqn6khxf6nJ46aaG6uDmRBFn53IoJG31YxBslDbp1DVdfN1LZ66t88VTCUl4y9BjqkAS2Z3JEm7rvwHIV832G3vzyglNT6T7ngdk5ODyxI%2F%2BGoZvoqslz8fPWiJ2k6kDIE7xfn6GMIcBf1Ty9Tao3Zs2Nrt%2B7enpjKbm4Lzn2eK0qGFYTTGpvAS8vIJCzqFgrmoa4FantTnTFekQNJkVxSdgtlkTIIxALY7WAyPMBZICWpfVIuI5iI1msK%2Ff4%2BTSKBUuIPzKdp1GDXZOPUaXNVU1m1%2BlTv&X-Amz-Signature=35cf8a4a848703fe287e126d917fcf1d5e1e2891aeae2c9f99fe973c55dfeb97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHZRJGE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAmFjeXRTzCNtZtcHPvObWUr1J8dC%2Fd4WOgkW6vlrg9wIhAL9VthvUVXeloAZbXmo1PKHtikrkgHgK8LB9sGFWdr2CKv8DCEAQABoMNjM3NDIzMTgzODA1IgwgkIJLPl6ypR9%2B15cq3APHbqRIi87WtDKBOTtgCRHVs%2BNkMJFH7OsNHP9tV3M3pMqn30%2FLBq01HwY9aD2NmUE6w7x%2B3Mf%2FROTcfD%2BsSe7rJtCnmyRiNRLeiPKkBxwcbbzbDRHBoO9qP2%2BvNSSu4w0zxSRxkUhjGr4Hr1XWMDhi8ClhUP2BVyBz6c1k1xve0XJpQ0FHzci8daMvVRKPQkFen8dnB0rhuR6qvwBrEk9RTHTLHm85i4KJyXm4VeFjS6cT%2BWbGkbS%2BQrAj5z4se97GLEq6c4jPUYqkmt1RuddlsVEYxsZliGlWEX4EBFjghVSWAsEjrnjitiU1R1SW%2FKy7JKjyerBB%2FBysw61Ta%2FcBH7%2BJVv0PmOt8xNR78RXsqG73ToXeG%2FZz7qdn52IgYP5T28ryLwkxq9Gi2K3eIRw6OpRmzoOKyMDFrTH1FrSIPiSNUhH47NJqoYszvMWFFJJMHBYRRPQFuyD9QG3UvG7q4VXU9b5hhlFiKBAcl%2BNkV1RsAhqMQU6KxkveHHlkgn74MGeQeg7%2F13ExmPcbqAFzeYzRppDAYbyB7scordlal%2B9E2A3gPkVNQXdpZzhw%2FkkjGAbqn6khxf6nJ46aaG6uDmRBFn53IoJG31YxBslDbp1DVdfN1LZ66t88VTCUl4y9BjqkAS2Z3JEm7rvwHIV832G3vzyglNT6T7ngdk5ODyxI%2F%2BGoZvoqslz8fPWiJ2k6kDIE7xfn6GMIcBf1Ty9Tao3Zs2Nrt%2B7enpjKbm4Lzn2eK0qGFYTTGpvAS8vIJCzqFgrmoa4FantTnTFekQNJkVxSdgtlkTIIxALY7WAyPMBZICWpfVIuI5iI1msK%2Ff4%2BTSKBUuIPzKdp1GDXZOPUaXNVU1m1%2BlTv&X-Amz-Signature=883f4822ef9d2485bf4ce22e3d2218dbb530b523b92b4efc738490e571c95453&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
