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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPMGSN6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDEPjwh9FgqVJO6DP6zEUAJ1YaxwMb36aI7m3MEwdi2XAiAqGB8dC6FxbQH6pGJZIhFH8oKoFQpHGZZbJnttviz3%2FyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJBl1FtW%2FMRip8mVKtwDxnC1bHraimRvlUiDPHj6%2FKFjiOWqkJYeg1qB2lC%2FgnN8zNg4TBfvHAT1gm1A9YNI0D3LTIU%2FzD2bLxHyrK3qGseMxv3ly8EtvYSvPwBZyKjMQanX3qbwPyPwq9FrE0T7mAk2UT0eSXhKPCtrer4POuwVIBwKWIHeAga1rYIb0CgPlrFfC17ImPjqiteNNP5SxGzwYT%2Bzdyjb4M61y63DJ9foeubX0G7ZCK5Sh4mhB2nANYOCwpJKuG8kjOi6kJQbbUeS5DIh3SM3vX%2FPQmTyOs1Mazppci7qqhhCDePVbAu70Aw9XXXGn64OwuDaQGikg3GOJRfFTyJnHVSXZ67sOCqiPmaf3UDzk98t4u8xrxQFEm9u72N1o9Ppo08YYZTq97Z2TEuKP%2B27z5%2FumBLQF%2FLoOJe%2B0bBOB0ZtN9H%2B%2F2p%2Fo2PfYE3Nyug3%2B9NsrajKnTAmNpxzV%2BeBJp1KC5myiDXPouY1ICiCEZ0%2BQFc2T%2Fm2xHGdaCpgLT6ZDbPSfRlHr8qliiEfDsYZIfGvs%2BhlzVKuSGVM89Sg4j1oVdXe83pGebpvO42OvG3%2B442KZEMTyhMKQGAmqR2rmEU30n%2FAca8r7LJeBzuy5DNcSTlWprTR99cjMggawhNqTAowr4ulvwY6pgH%2Fhd6P7cSIjNiU%2Bpv35jBlAPpccjG2rxygUmFCj%2BK7%2BXrYIquFRVYOh3h5CkMkYqRd5s8Yh%2FEcHqxbCeLPqy5doo0N%2F50VgJgQeAX%2FqCW5MxBa5HOKKbGVPH158RTIL7fE4PaJEt2p4PpiMT44Zz47uZXjFfIuX29lZzoT7%2BRpsh2BLftLZG7iRzcGVp2GhtMIl%2FuDKMNSd5SSflHxBMDRimdwLCJa&X-Amz-Signature=1a4ecfc84b9b8001fed669b679a1f460f2293dff33591458136b4fd42b1036ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPMGSN6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDEPjwh9FgqVJO6DP6zEUAJ1YaxwMb36aI7m3MEwdi2XAiAqGB8dC6FxbQH6pGJZIhFH8oKoFQpHGZZbJnttviz3%2FyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJBl1FtW%2FMRip8mVKtwDxnC1bHraimRvlUiDPHj6%2FKFjiOWqkJYeg1qB2lC%2FgnN8zNg4TBfvHAT1gm1A9YNI0D3LTIU%2FzD2bLxHyrK3qGseMxv3ly8EtvYSvPwBZyKjMQanX3qbwPyPwq9FrE0T7mAk2UT0eSXhKPCtrer4POuwVIBwKWIHeAga1rYIb0CgPlrFfC17ImPjqiteNNP5SxGzwYT%2Bzdyjb4M61y63DJ9foeubX0G7ZCK5Sh4mhB2nANYOCwpJKuG8kjOi6kJQbbUeS5DIh3SM3vX%2FPQmTyOs1Mazppci7qqhhCDePVbAu70Aw9XXXGn64OwuDaQGikg3GOJRfFTyJnHVSXZ67sOCqiPmaf3UDzk98t4u8xrxQFEm9u72N1o9Ppo08YYZTq97Z2TEuKP%2B27z5%2FumBLQF%2FLoOJe%2B0bBOB0ZtN9H%2B%2F2p%2Fo2PfYE3Nyug3%2B9NsrajKnTAmNpxzV%2BeBJp1KC5myiDXPouY1ICiCEZ0%2BQFc2T%2Fm2xHGdaCpgLT6ZDbPSfRlHr8qliiEfDsYZIfGvs%2BhlzVKuSGVM89Sg4j1oVdXe83pGebpvO42OvG3%2B442KZEMTyhMKQGAmqR2rmEU30n%2FAca8r7LJeBzuy5DNcSTlWprTR99cjMggawhNqTAowr4ulvwY6pgH%2Fhd6P7cSIjNiU%2Bpv35jBlAPpccjG2rxygUmFCj%2BK7%2BXrYIquFRVYOh3h5CkMkYqRd5s8Yh%2FEcHqxbCeLPqy5doo0N%2F50VgJgQeAX%2FqCW5MxBa5HOKKbGVPH158RTIL7fE4PaJEt2p4PpiMT44Zz47uZXjFfIuX29lZzoT7%2BRpsh2BLftLZG7iRzcGVp2GhtMIl%2FuDKMNSd5SSflHxBMDRimdwLCJa&X-Amz-Signature=fe2249223f684ab45c615d2dc5970e37826179f983b919d556ad8af91a3995d8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPMGSN6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDEPjwh9FgqVJO6DP6zEUAJ1YaxwMb36aI7m3MEwdi2XAiAqGB8dC6FxbQH6pGJZIhFH8oKoFQpHGZZbJnttviz3%2FyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJBl1FtW%2FMRip8mVKtwDxnC1bHraimRvlUiDPHj6%2FKFjiOWqkJYeg1qB2lC%2FgnN8zNg4TBfvHAT1gm1A9YNI0D3LTIU%2FzD2bLxHyrK3qGseMxv3ly8EtvYSvPwBZyKjMQanX3qbwPyPwq9FrE0T7mAk2UT0eSXhKPCtrer4POuwVIBwKWIHeAga1rYIb0CgPlrFfC17ImPjqiteNNP5SxGzwYT%2Bzdyjb4M61y63DJ9foeubX0G7ZCK5Sh4mhB2nANYOCwpJKuG8kjOi6kJQbbUeS5DIh3SM3vX%2FPQmTyOs1Mazppci7qqhhCDePVbAu70Aw9XXXGn64OwuDaQGikg3GOJRfFTyJnHVSXZ67sOCqiPmaf3UDzk98t4u8xrxQFEm9u72N1o9Ppo08YYZTq97Z2TEuKP%2B27z5%2FumBLQF%2FLoOJe%2B0bBOB0ZtN9H%2B%2F2p%2Fo2PfYE3Nyug3%2B9NsrajKnTAmNpxzV%2BeBJp1KC5myiDXPouY1ICiCEZ0%2BQFc2T%2Fm2xHGdaCpgLT6ZDbPSfRlHr8qliiEfDsYZIfGvs%2BhlzVKuSGVM89Sg4j1oVdXe83pGebpvO42OvG3%2B442KZEMTyhMKQGAmqR2rmEU30n%2FAca8r7LJeBzuy5DNcSTlWprTR99cjMggawhNqTAowr4ulvwY6pgH%2Fhd6P7cSIjNiU%2Bpv35jBlAPpccjG2rxygUmFCj%2BK7%2BXrYIquFRVYOh3h5CkMkYqRd5s8Yh%2FEcHqxbCeLPqy5doo0N%2F50VgJgQeAX%2FqCW5MxBa5HOKKbGVPH158RTIL7fE4PaJEt2p4PpiMT44Zz47uZXjFfIuX29lZzoT7%2BRpsh2BLftLZG7iRzcGVp2GhtMIl%2FuDKMNSd5SSflHxBMDRimdwLCJa&X-Amz-Signature=976a57db85d63228e40cff76f974af0993e15c7f55bae1a92baac942912fb757&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPMGSN6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDEPjwh9FgqVJO6DP6zEUAJ1YaxwMb36aI7m3MEwdi2XAiAqGB8dC6FxbQH6pGJZIhFH8oKoFQpHGZZbJnttviz3%2FyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJBl1FtW%2FMRip8mVKtwDxnC1bHraimRvlUiDPHj6%2FKFjiOWqkJYeg1qB2lC%2FgnN8zNg4TBfvHAT1gm1A9YNI0D3LTIU%2FzD2bLxHyrK3qGseMxv3ly8EtvYSvPwBZyKjMQanX3qbwPyPwq9FrE0T7mAk2UT0eSXhKPCtrer4POuwVIBwKWIHeAga1rYIb0CgPlrFfC17ImPjqiteNNP5SxGzwYT%2Bzdyjb4M61y63DJ9foeubX0G7ZCK5Sh4mhB2nANYOCwpJKuG8kjOi6kJQbbUeS5DIh3SM3vX%2FPQmTyOs1Mazppci7qqhhCDePVbAu70Aw9XXXGn64OwuDaQGikg3GOJRfFTyJnHVSXZ67sOCqiPmaf3UDzk98t4u8xrxQFEm9u72N1o9Ppo08YYZTq97Z2TEuKP%2B27z5%2FumBLQF%2FLoOJe%2B0bBOB0ZtN9H%2B%2F2p%2Fo2PfYE3Nyug3%2B9NsrajKnTAmNpxzV%2BeBJp1KC5myiDXPouY1ICiCEZ0%2BQFc2T%2Fm2xHGdaCpgLT6ZDbPSfRlHr8qliiEfDsYZIfGvs%2BhlzVKuSGVM89Sg4j1oVdXe83pGebpvO42OvG3%2B442KZEMTyhMKQGAmqR2rmEU30n%2FAca8r7LJeBzuy5DNcSTlWprTR99cjMggawhNqTAowr4ulvwY6pgH%2Fhd6P7cSIjNiU%2Bpv35jBlAPpccjG2rxygUmFCj%2BK7%2BXrYIquFRVYOh3h5CkMkYqRd5s8Yh%2FEcHqxbCeLPqy5doo0N%2F50VgJgQeAX%2FqCW5MxBa5HOKKbGVPH158RTIL7fE4PaJEt2p4PpiMT44Zz47uZXjFfIuX29lZzoT7%2BRpsh2BLftLZG7iRzcGVp2GhtMIl%2FuDKMNSd5SSflHxBMDRimdwLCJa&X-Amz-Signature=bff0548bb69385e1f0f655cee6e36c175198109e6f88451fe372ae47ae2bd98b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPMGSN6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDEPjwh9FgqVJO6DP6zEUAJ1YaxwMb36aI7m3MEwdi2XAiAqGB8dC6FxbQH6pGJZIhFH8oKoFQpHGZZbJnttviz3%2FyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJBl1FtW%2FMRip8mVKtwDxnC1bHraimRvlUiDPHj6%2FKFjiOWqkJYeg1qB2lC%2FgnN8zNg4TBfvHAT1gm1A9YNI0D3LTIU%2FzD2bLxHyrK3qGseMxv3ly8EtvYSvPwBZyKjMQanX3qbwPyPwq9FrE0T7mAk2UT0eSXhKPCtrer4POuwVIBwKWIHeAga1rYIb0CgPlrFfC17ImPjqiteNNP5SxGzwYT%2Bzdyjb4M61y63DJ9foeubX0G7ZCK5Sh4mhB2nANYOCwpJKuG8kjOi6kJQbbUeS5DIh3SM3vX%2FPQmTyOs1Mazppci7qqhhCDePVbAu70Aw9XXXGn64OwuDaQGikg3GOJRfFTyJnHVSXZ67sOCqiPmaf3UDzk98t4u8xrxQFEm9u72N1o9Ppo08YYZTq97Z2TEuKP%2B27z5%2FumBLQF%2FLoOJe%2B0bBOB0ZtN9H%2B%2F2p%2Fo2PfYE3Nyug3%2B9NsrajKnTAmNpxzV%2BeBJp1KC5myiDXPouY1ICiCEZ0%2BQFc2T%2Fm2xHGdaCpgLT6ZDbPSfRlHr8qliiEfDsYZIfGvs%2BhlzVKuSGVM89Sg4j1oVdXe83pGebpvO42OvG3%2B442KZEMTyhMKQGAmqR2rmEU30n%2FAca8r7LJeBzuy5DNcSTlWprTR99cjMggawhNqTAowr4ulvwY6pgH%2Fhd6P7cSIjNiU%2Bpv35jBlAPpccjG2rxygUmFCj%2BK7%2BXrYIquFRVYOh3h5CkMkYqRd5s8Yh%2FEcHqxbCeLPqy5doo0N%2F50VgJgQeAX%2FqCW5MxBa5HOKKbGVPH158RTIL7fE4PaJEt2p4PpiMT44Zz47uZXjFfIuX29lZzoT7%2BRpsh2BLftLZG7iRzcGVp2GhtMIl%2FuDKMNSd5SSflHxBMDRimdwLCJa&X-Amz-Signature=158864d29738cb4a4134b9324fff95956a22d2d8d963459764accbedba7ded58&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
