---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKO2CX2Y%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAL7bi6JjwVKEE3z3tR3KGAMmmSQu4Dj8xFg11mMYvcbAiEAg5szVxL4YsifWHp2YizbZtqiN7oyCtwEqXgeZJKoSloq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJTP4HYs6eZ4ZnZ9BircA645zLJ0T2ciqAiuKVgy%2Fcoyj8M5s0dd%2FagY80hGzcnIrtPVOYIlaFr0mz4%2F0hXLaerY9i%2BRXgeE5ls%2B32hoAy9EPqxxuF7IEHYewWiMhuC8mBcr1lHaSZYrr4RZ0AF%2B3HklkINocnkjsBvAUCb7gssCXyhGZGam5c2IwgOmrD2jzGtCzrBJA0Kb0FfRg0835WczpmhzFsTMklH4fHcz%2BEEXUWPD0kU6KCGd77%2BpxZUkDkaoPAT9QGLQgIiskVNz3lVD6EOXwuspb0WA4ReyBeQI1JcMjKQSSJj7LjJALui7mwGwTkbK9t%2BtWqiq1arPt%2BbRftW5vVji0s4VWdrunIS6I7xnvvu%2FA%2FEiwYcTX10a%2BawwAIBZM8XGEGiGn4TmPvMBl3riH94egyWC7MfV0CpQqy7JjEmB6lHw122PYquHInxa9FERVcepSNuw5EzUcS0QxJpWUxjVwuABgcEr16vV8rM1dUquWkVH5CdSj2RPKHA%2BzfD9Yc4CLrSUQFXQIZ%2B%2FGcEZMtcQfPAHC2qZ4AsuujNIcDLAixLyy%2FoV2zSXu90CW0RzpSAqLJANawCw39Kwk9C8QZZMoj8E%2FSGspHZZVMZ1oxtSTMZKCyizP2GxsMkSTukYRxpuOJg0MODOm8sGOqUBpnpAyYPCzMhgwbUA1OLHqiN2U6%2F5tw5EyoVCyZyeaPxnA4YfVN30w04u1JM6dCbeVYPdL4UqLJfSN4SYBygW0RaFPeZTtMOEqbUMgrzXft1BrRuO7bgDZ5HvLxGPIOoimdj6245I8%2B2QKCSwrt7CpIbrirdsbB5miYIE0agq4EsoJw4sDR4iLJFymav1V0rFTJihkSFcNuzIFRdHp5%2BMgENLPrrT&X-Amz-Signature=6a371cda750bce5b31938aad0505b4ec2570e48f4d62d0f3a44d240652ef5baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKO2CX2Y%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAL7bi6JjwVKEE3z3tR3KGAMmmSQu4Dj8xFg11mMYvcbAiEAg5szVxL4YsifWHp2YizbZtqiN7oyCtwEqXgeZJKoSloq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJTP4HYs6eZ4ZnZ9BircA645zLJ0T2ciqAiuKVgy%2Fcoyj8M5s0dd%2FagY80hGzcnIrtPVOYIlaFr0mz4%2F0hXLaerY9i%2BRXgeE5ls%2B32hoAy9EPqxxuF7IEHYewWiMhuC8mBcr1lHaSZYrr4RZ0AF%2B3HklkINocnkjsBvAUCb7gssCXyhGZGam5c2IwgOmrD2jzGtCzrBJA0Kb0FfRg0835WczpmhzFsTMklH4fHcz%2BEEXUWPD0kU6KCGd77%2BpxZUkDkaoPAT9QGLQgIiskVNz3lVD6EOXwuspb0WA4ReyBeQI1JcMjKQSSJj7LjJALui7mwGwTkbK9t%2BtWqiq1arPt%2BbRftW5vVji0s4VWdrunIS6I7xnvvu%2FA%2FEiwYcTX10a%2BawwAIBZM8XGEGiGn4TmPvMBl3riH94egyWC7MfV0CpQqy7JjEmB6lHw122PYquHInxa9FERVcepSNuw5EzUcS0QxJpWUxjVwuABgcEr16vV8rM1dUquWkVH5CdSj2RPKHA%2BzfD9Yc4CLrSUQFXQIZ%2B%2FGcEZMtcQfPAHC2qZ4AsuujNIcDLAixLyy%2FoV2zSXu90CW0RzpSAqLJANawCw39Kwk9C8QZZMoj8E%2FSGspHZZVMZ1oxtSTMZKCyizP2GxsMkSTukYRxpuOJg0MODOm8sGOqUBpnpAyYPCzMhgwbUA1OLHqiN2U6%2F5tw5EyoVCyZyeaPxnA4YfVN30w04u1JM6dCbeVYPdL4UqLJfSN4SYBygW0RaFPeZTtMOEqbUMgrzXft1BrRuO7bgDZ5HvLxGPIOoimdj6245I8%2B2QKCSwrt7CpIbrirdsbB5miYIE0agq4EsoJw4sDR4iLJFymav1V0rFTJihkSFcNuzIFRdHp5%2BMgENLPrrT&X-Amz-Signature=1079904180bed4a88e2e39d4b43a15c5340c926977afd7b498881d766eb76def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKO2CX2Y%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAL7bi6JjwVKEE3z3tR3KGAMmmSQu4Dj8xFg11mMYvcbAiEAg5szVxL4YsifWHp2YizbZtqiN7oyCtwEqXgeZJKoSloq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJTP4HYs6eZ4ZnZ9BircA645zLJ0T2ciqAiuKVgy%2Fcoyj8M5s0dd%2FagY80hGzcnIrtPVOYIlaFr0mz4%2F0hXLaerY9i%2BRXgeE5ls%2B32hoAy9EPqxxuF7IEHYewWiMhuC8mBcr1lHaSZYrr4RZ0AF%2B3HklkINocnkjsBvAUCb7gssCXyhGZGam5c2IwgOmrD2jzGtCzrBJA0Kb0FfRg0835WczpmhzFsTMklH4fHcz%2BEEXUWPD0kU6KCGd77%2BpxZUkDkaoPAT9QGLQgIiskVNz3lVD6EOXwuspb0WA4ReyBeQI1JcMjKQSSJj7LjJALui7mwGwTkbK9t%2BtWqiq1arPt%2BbRftW5vVji0s4VWdrunIS6I7xnvvu%2FA%2FEiwYcTX10a%2BawwAIBZM8XGEGiGn4TmPvMBl3riH94egyWC7MfV0CpQqy7JjEmB6lHw122PYquHInxa9FERVcepSNuw5EzUcS0QxJpWUxjVwuABgcEr16vV8rM1dUquWkVH5CdSj2RPKHA%2BzfD9Yc4CLrSUQFXQIZ%2B%2FGcEZMtcQfPAHC2qZ4AsuujNIcDLAixLyy%2FoV2zSXu90CW0RzpSAqLJANawCw39Kwk9C8QZZMoj8E%2FSGspHZZVMZ1oxtSTMZKCyizP2GxsMkSTukYRxpuOJg0MODOm8sGOqUBpnpAyYPCzMhgwbUA1OLHqiN2U6%2F5tw5EyoVCyZyeaPxnA4YfVN30w04u1JM6dCbeVYPdL4UqLJfSN4SYBygW0RaFPeZTtMOEqbUMgrzXft1BrRuO7bgDZ5HvLxGPIOoimdj6245I8%2B2QKCSwrt7CpIbrirdsbB5miYIE0agq4EsoJw4sDR4iLJFymav1V0rFTJihkSFcNuzIFRdHp5%2BMgENLPrrT&X-Amz-Signature=b059b0c2a830e9551bc374ff1b552428ec40b0cf0377e3c7870d6241c0d9cb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKO2CX2Y%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAL7bi6JjwVKEE3z3tR3KGAMmmSQu4Dj8xFg11mMYvcbAiEAg5szVxL4YsifWHp2YizbZtqiN7oyCtwEqXgeZJKoSloq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJTP4HYs6eZ4ZnZ9BircA645zLJ0T2ciqAiuKVgy%2Fcoyj8M5s0dd%2FagY80hGzcnIrtPVOYIlaFr0mz4%2F0hXLaerY9i%2BRXgeE5ls%2B32hoAy9EPqxxuF7IEHYewWiMhuC8mBcr1lHaSZYrr4RZ0AF%2B3HklkINocnkjsBvAUCb7gssCXyhGZGam5c2IwgOmrD2jzGtCzrBJA0Kb0FfRg0835WczpmhzFsTMklH4fHcz%2BEEXUWPD0kU6KCGd77%2BpxZUkDkaoPAT9QGLQgIiskVNz3lVD6EOXwuspb0WA4ReyBeQI1JcMjKQSSJj7LjJALui7mwGwTkbK9t%2BtWqiq1arPt%2BbRftW5vVji0s4VWdrunIS6I7xnvvu%2FA%2FEiwYcTX10a%2BawwAIBZM8XGEGiGn4TmPvMBl3riH94egyWC7MfV0CpQqy7JjEmB6lHw122PYquHInxa9FERVcepSNuw5EzUcS0QxJpWUxjVwuABgcEr16vV8rM1dUquWkVH5CdSj2RPKHA%2BzfD9Yc4CLrSUQFXQIZ%2B%2FGcEZMtcQfPAHC2qZ4AsuujNIcDLAixLyy%2FoV2zSXu90CW0RzpSAqLJANawCw39Kwk9C8QZZMoj8E%2FSGspHZZVMZ1oxtSTMZKCyizP2GxsMkSTukYRxpuOJg0MODOm8sGOqUBpnpAyYPCzMhgwbUA1OLHqiN2U6%2F5tw5EyoVCyZyeaPxnA4YfVN30w04u1JM6dCbeVYPdL4UqLJfSN4SYBygW0RaFPeZTtMOEqbUMgrzXft1BrRuO7bgDZ5HvLxGPIOoimdj6245I8%2B2QKCSwrt7CpIbrirdsbB5miYIE0agq4EsoJw4sDR4iLJFymav1V0rFTJihkSFcNuzIFRdHp5%2BMgENLPrrT&X-Amz-Signature=433cc7d0b2ff434fe5eedb95944ff70bc2b9843698734502561c2735ab21e13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKO2CX2Y%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAL7bi6JjwVKEE3z3tR3KGAMmmSQu4Dj8xFg11mMYvcbAiEAg5szVxL4YsifWHp2YizbZtqiN7oyCtwEqXgeZJKoSloq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJTP4HYs6eZ4ZnZ9BircA645zLJ0T2ciqAiuKVgy%2Fcoyj8M5s0dd%2FagY80hGzcnIrtPVOYIlaFr0mz4%2F0hXLaerY9i%2BRXgeE5ls%2B32hoAy9EPqxxuF7IEHYewWiMhuC8mBcr1lHaSZYrr4RZ0AF%2B3HklkINocnkjsBvAUCb7gssCXyhGZGam5c2IwgOmrD2jzGtCzrBJA0Kb0FfRg0835WczpmhzFsTMklH4fHcz%2BEEXUWPD0kU6KCGd77%2BpxZUkDkaoPAT9QGLQgIiskVNz3lVD6EOXwuspb0WA4ReyBeQI1JcMjKQSSJj7LjJALui7mwGwTkbK9t%2BtWqiq1arPt%2BbRftW5vVji0s4VWdrunIS6I7xnvvu%2FA%2FEiwYcTX10a%2BawwAIBZM8XGEGiGn4TmPvMBl3riH94egyWC7MfV0CpQqy7JjEmB6lHw122PYquHInxa9FERVcepSNuw5EzUcS0QxJpWUxjVwuABgcEr16vV8rM1dUquWkVH5CdSj2RPKHA%2BzfD9Yc4CLrSUQFXQIZ%2B%2FGcEZMtcQfPAHC2qZ4AsuujNIcDLAixLyy%2FoV2zSXu90CW0RzpSAqLJANawCw39Kwk9C8QZZMoj8E%2FSGspHZZVMZ1oxtSTMZKCyizP2GxsMkSTukYRxpuOJg0MODOm8sGOqUBpnpAyYPCzMhgwbUA1OLHqiN2U6%2F5tw5EyoVCyZyeaPxnA4YfVN30w04u1JM6dCbeVYPdL4UqLJfSN4SYBygW0RaFPeZTtMOEqbUMgrzXft1BrRuO7bgDZ5HvLxGPIOoimdj6245I8%2B2QKCSwrt7CpIbrirdsbB5miYIE0agq4EsoJw4sDR4iLJFymav1V0rFTJihkSFcNuzIFRdHp5%2BMgENLPrrT&X-Amz-Signature=538636807820d68bf6820d62decd91c400ca2e2e4d3b125208d3fc8ef81b214b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
