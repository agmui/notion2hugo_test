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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4G2SIQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDok2SyhsmnOJofpVxvhKYAjMb1sp7lxBgP%2Boi2Iv2fSwIgLWTxE%2FcXdRg6b9AI%2BSDrTrxXPc8Iks1sT4emgnet0NQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdKuuO1UWBejmeNSrcA7szjrJZ1eT4vHU57OBEccp2UuB%2Fu%2FfVtX%2BYXmhII6MLjCoiOVYI8NtZYL%2FOv2C%2FvtT27tYzxqOUYb2zy9iio2n0OjFdF2w6OSIUq67DXtx%2FoNA%2BtGVE1ZitmKyyhf12YKpjfUf2%2F95fevYSffNtBxWg8p2j%2B771nS2wbsAzn%2BWLie2SS0k%2BfyDgcimueotb9RSkegRaQNw%2BPD2QHH%2FYZYWT7QCuvHp5Cu5cdtEh8ZOevEHbVeHNPoYHl%2B1CgVoClNrQBUubM5CX1JF78PAl06729tSsoGqOO4BvxXvbUb0o7ezbY%2FhWmWIQye7Q%2Fuzz20RLjBhQmVRCzRVETse8S4ghRbDdVCg9RH0ZeLJFc1HclLhuQkK0tY12%2Fqr3b8%2B3NVJMU2HYDIARm8LfBr%2FGvrA7ORNitPHaxbHs3JYj5yrWSrbSdEsCvWL1oHAwbrSFrqKTwFmg5LeqTBi3ugIRkGgMXJC%2B1vVHGyxyCxUlIH94p7CTlDtEM0poNcLbS%2FOcKX3LAd9rdtj3Yc4pg7lPztKnZFevmG19Afg0uiNU%2BYj81CtDtj7naAA7ih%2B8b%2FRMXI0i2Tf0oZSW7k7YnQ1%2BA1akU0%2FKnNkC%2FHugNbFNf63eG7UYT%2BRgr13abN6WMPilk74GOqUBVXj9a%2F4FMOUB8qR47O7Wt%2FZ%2FaU%2FBj%2F9%2BSbQ5zNkDzY8NuaMMS97l7sXL9U2NmUCqzt%2BtiMljF00geNQv4EeRsOxwRatmb2igD8ekzds%2BjjJHREGDjvrOOGPL5mTIvXVc5p%2FTZjX2a2o6sL6SM3g6CcEm0Dh78HUwfMauFjy%2BYjwJ1mp6F2quC9q5MCC6%2Brnts2CW0%2Fxfdf%2FQYS29dxxPz1DOLHQm&X-Amz-Signature=386db1894cc306aa4e89ac342aa568142ef655bbe2f6228015238a73f75fbf60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4G2SIQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDok2SyhsmnOJofpVxvhKYAjMb1sp7lxBgP%2Boi2Iv2fSwIgLWTxE%2FcXdRg6b9AI%2BSDrTrxXPc8Iks1sT4emgnet0NQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdKuuO1UWBejmeNSrcA7szjrJZ1eT4vHU57OBEccp2UuB%2Fu%2FfVtX%2BYXmhII6MLjCoiOVYI8NtZYL%2FOv2C%2FvtT27tYzxqOUYb2zy9iio2n0OjFdF2w6OSIUq67DXtx%2FoNA%2BtGVE1ZitmKyyhf12YKpjfUf2%2F95fevYSffNtBxWg8p2j%2B771nS2wbsAzn%2BWLie2SS0k%2BfyDgcimueotb9RSkegRaQNw%2BPD2QHH%2FYZYWT7QCuvHp5Cu5cdtEh8ZOevEHbVeHNPoYHl%2B1CgVoClNrQBUubM5CX1JF78PAl06729tSsoGqOO4BvxXvbUb0o7ezbY%2FhWmWIQye7Q%2Fuzz20RLjBhQmVRCzRVETse8S4ghRbDdVCg9RH0ZeLJFc1HclLhuQkK0tY12%2Fqr3b8%2B3NVJMU2HYDIARm8LfBr%2FGvrA7ORNitPHaxbHs3JYj5yrWSrbSdEsCvWL1oHAwbrSFrqKTwFmg5LeqTBi3ugIRkGgMXJC%2B1vVHGyxyCxUlIH94p7CTlDtEM0poNcLbS%2FOcKX3LAd9rdtj3Yc4pg7lPztKnZFevmG19Afg0uiNU%2BYj81CtDtj7naAA7ih%2B8b%2FRMXI0i2Tf0oZSW7k7YnQ1%2BA1akU0%2FKnNkC%2FHugNbFNf63eG7UYT%2BRgr13abN6WMPilk74GOqUBVXj9a%2F4FMOUB8qR47O7Wt%2FZ%2FaU%2FBj%2F9%2BSbQ5zNkDzY8NuaMMS97l7sXL9U2NmUCqzt%2BtiMljF00geNQv4EeRsOxwRatmb2igD8ekzds%2BjjJHREGDjvrOOGPL5mTIvXVc5p%2FTZjX2a2o6sL6SM3g6CcEm0Dh78HUwfMauFjy%2BYjwJ1mp6F2quC9q5MCC6%2Brnts2CW0%2Fxfdf%2FQYS29dxxPz1DOLHQm&X-Amz-Signature=8f2fce4666f6c09c3c720961993caea451deec33b9c97f76c96bdfbb00143225&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4G2SIQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDok2SyhsmnOJofpVxvhKYAjMb1sp7lxBgP%2Boi2Iv2fSwIgLWTxE%2FcXdRg6b9AI%2BSDrTrxXPc8Iks1sT4emgnet0NQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdKuuO1UWBejmeNSrcA7szjrJZ1eT4vHU57OBEccp2UuB%2Fu%2FfVtX%2BYXmhII6MLjCoiOVYI8NtZYL%2FOv2C%2FvtT27tYzxqOUYb2zy9iio2n0OjFdF2w6OSIUq67DXtx%2FoNA%2BtGVE1ZitmKyyhf12YKpjfUf2%2F95fevYSffNtBxWg8p2j%2B771nS2wbsAzn%2BWLie2SS0k%2BfyDgcimueotb9RSkegRaQNw%2BPD2QHH%2FYZYWT7QCuvHp5Cu5cdtEh8ZOevEHbVeHNPoYHl%2B1CgVoClNrQBUubM5CX1JF78PAl06729tSsoGqOO4BvxXvbUb0o7ezbY%2FhWmWIQye7Q%2Fuzz20RLjBhQmVRCzRVETse8S4ghRbDdVCg9RH0ZeLJFc1HclLhuQkK0tY12%2Fqr3b8%2B3NVJMU2HYDIARm8LfBr%2FGvrA7ORNitPHaxbHs3JYj5yrWSrbSdEsCvWL1oHAwbrSFrqKTwFmg5LeqTBi3ugIRkGgMXJC%2B1vVHGyxyCxUlIH94p7CTlDtEM0poNcLbS%2FOcKX3LAd9rdtj3Yc4pg7lPztKnZFevmG19Afg0uiNU%2BYj81CtDtj7naAA7ih%2B8b%2FRMXI0i2Tf0oZSW7k7YnQ1%2BA1akU0%2FKnNkC%2FHugNbFNf63eG7UYT%2BRgr13abN6WMPilk74GOqUBVXj9a%2F4FMOUB8qR47O7Wt%2FZ%2FaU%2FBj%2F9%2BSbQ5zNkDzY8NuaMMS97l7sXL9U2NmUCqzt%2BtiMljF00geNQv4EeRsOxwRatmb2igD8ekzds%2BjjJHREGDjvrOOGPL5mTIvXVc5p%2FTZjX2a2o6sL6SM3g6CcEm0Dh78HUwfMauFjy%2BYjwJ1mp6F2quC9q5MCC6%2Brnts2CW0%2Fxfdf%2FQYS29dxxPz1DOLHQm&X-Amz-Signature=6a88ce647ca12e5503cd9d8d34283848355adefa1dc66e534c5f90fc19c51225&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4G2SIQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDok2SyhsmnOJofpVxvhKYAjMb1sp7lxBgP%2Boi2Iv2fSwIgLWTxE%2FcXdRg6b9AI%2BSDrTrxXPc8Iks1sT4emgnet0NQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdKuuO1UWBejmeNSrcA7szjrJZ1eT4vHU57OBEccp2UuB%2Fu%2FfVtX%2BYXmhII6MLjCoiOVYI8NtZYL%2FOv2C%2FvtT27tYzxqOUYb2zy9iio2n0OjFdF2w6OSIUq67DXtx%2FoNA%2BtGVE1ZitmKyyhf12YKpjfUf2%2F95fevYSffNtBxWg8p2j%2B771nS2wbsAzn%2BWLie2SS0k%2BfyDgcimueotb9RSkegRaQNw%2BPD2QHH%2FYZYWT7QCuvHp5Cu5cdtEh8ZOevEHbVeHNPoYHl%2B1CgVoClNrQBUubM5CX1JF78PAl06729tSsoGqOO4BvxXvbUb0o7ezbY%2FhWmWIQye7Q%2Fuzz20RLjBhQmVRCzRVETse8S4ghRbDdVCg9RH0ZeLJFc1HclLhuQkK0tY12%2Fqr3b8%2B3NVJMU2HYDIARm8LfBr%2FGvrA7ORNitPHaxbHs3JYj5yrWSrbSdEsCvWL1oHAwbrSFrqKTwFmg5LeqTBi3ugIRkGgMXJC%2B1vVHGyxyCxUlIH94p7CTlDtEM0poNcLbS%2FOcKX3LAd9rdtj3Yc4pg7lPztKnZFevmG19Afg0uiNU%2BYj81CtDtj7naAA7ih%2B8b%2FRMXI0i2Tf0oZSW7k7YnQ1%2BA1akU0%2FKnNkC%2FHugNbFNf63eG7UYT%2BRgr13abN6WMPilk74GOqUBVXj9a%2F4FMOUB8qR47O7Wt%2FZ%2FaU%2FBj%2F9%2BSbQ5zNkDzY8NuaMMS97l7sXL9U2NmUCqzt%2BtiMljF00geNQv4EeRsOxwRatmb2igD8ekzds%2BjjJHREGDjvrOOGPL5mTIvXVc5p%2FTZjX2a2o6sL6SM3g6CcEm0Dh78HUwfMauFjy%2BYjwJ1mp6F2quC9q5MCC6%2Brnts2CW0%2Fxfdf%2FQYS29dxxPz1DOLHQm&X-Amz-Signature=eb3bd30e3933e523d41b319e5fa9da8d5454d3ea7a00671e77368c1c8787992f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4G2SIQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDok2SyhsmnOJofpVxvhKYAjMb1sp7lxBgP%2Boi2Iv2fSwIgLWTxE%2FcXdRg6b9AI%2BSDrTrxXPc8Iks1sT4emgnet0NQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdKuuO1UWBejmeNSrcA7szjrJZ1eT4vHU57OBEccp2UuB%2Fu%2FfVtX%2BYXmhII6MLjCoiOVYI8NtZYL%2FOv2C%2FvtT27tYzxqOUYb2zy9iio2n0OjFdF2w6OSIUq67DXtx%2FoNA%2BtGVE1ZitmKyyhf12YKpjfUf2%2F95fevYSffNtBxWg8p2j%2B771nS2wbsAzn%2BWLie2SS0k%2BfyDgcimueotb9RSkegRaQNw%2BPD2QHH%2FYZYWT7QCuvHp5Cu5cdtEh8ZOevEHbVeHNPoYHl%2B1CgVoClNrQBUubM5CX1JF78PAl06729tSsoGqOO4BvxXvbUb0o7ezbY%2FhWmWIQye7Q%2Fuzz20RLjBhQmVRCzRVETse8S4ghRbDdVCg9RH0ZeLJFc1HclLhuQkK0tY12%2Fqr3b8%2B3NVJMU2HYDIARm8LfBr%2FGvrA7ORNitPHaxbHs3JYj5yrWSrbSdEsCvWL1oHAwbrSFrqKTwFmg5LeqTBi3ugIRkGgMXJC%2B1vVHGyxyCxUlIH94p7CTlDtEM0poNcLbS%2FOcKX3LAd9rdtj3Yc4pg7lPztKnZFevmG19Afg0uiNU%2BYj81CtDtj7naAA7ih%2B8b%2FRMXI0i2Tf0oZSW7k7YnQ1%2BA1akU0%2FKnNkC%2FHugNbFNf63eG7UYT%2BRgr13abN6WMPilk74GOqUBVXj9a%2F4FMOUB8qR47O7Wt%2FZ%2FaU%2FBj%2F9%2BSbQ5zNkDzY8NuaMMS97l7sXL9U2NmUCqzt%2BtiMljF00geNQv4EeRsOxwRatmb2igD8ekzds%2BjjJHREGDjvrOOGPL5mTIvXVc5p%2FTZjX2a2o6sL6SM3g6CcEm0Dh78HUwfMauFjy%2BYjwJ1mp6F2quC9q5MCC6%2Brnts2CW0%2Fxfdf%2FQYS29dxxPz1DOLHQm&X-Amz-Signature=6d2d9014d53705022d56da1634934971aca2fa66cffd3f03fcd98d9ad47985aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
