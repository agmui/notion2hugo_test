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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4Y6N7F%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorCcWcm5wCZS5gkob%2B2mLVwluZ0FrII%2FlzkJjQxHl8wIgJvpr4vFlFAa5%2BEIBi6Fr91RiRudLK5U%2FHJTV%2FdCdWkEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIOkv7cbjk%2FMzn29OCrcAxBHqqWS7VqEXS8fMGS%2BTnG0E6s7w809bT3luAr%2BkTmdMtkNzE9wdR2tMv96CsFWV21ukNlO%2FZy0W5DogmiQioMBtJAOPZpETmSteEMit%2FeVp2K2K8r23YdX9Gfd%2Fbj4tLUp1ESg2wHy7oxEdb1ZyWStJUvVr8FF0wM00SB4F8QvuKmoX2x6ndTRqksmFOS3UaukWSfxtrAJMqrGKybu2lPYDH2mK9V0XnWuyMCGfxgq5UzpNohv%2FhP1vokVZIbgkt2wBiCZHUJ7olydE9IbjyjH2fgyyK1kJY%2FPE7%2BECGJkSgZcyZx95NVUYQTfkmWopYbPGgyWIBFq7M2K4YMTAMJ0wzdKcVwLqwVIa6cMbWTooXuLV%2BuBgS0SjEZeZIQBCqcYcJuSYgMcCeTSnPH35oLpzprlxbj8XSdBLwoTzmTo%2FgR5GeqentRL8OnQ3PdY%2BSK8Bbp7pUOB%2FFouihuo8QxPtnEwJKrOZXmxqzzZsPGjoBZe6UWow6l%2F%2BzwPXMGv39d3PFaaKSvx8SlQsCe9NzeZvkf3%2B0UGjrlsz32Y8429yeWt%2Bquq%2BGm7ypoh5J0xo3Ogd6v%2BgNBl2xU%2FExEJH8rpVDR0XB17w9eiPTWEzBviZUBGKTuWo9y99CwOMOik%2Bb8GOqUBBq%2BzWEbzUn7rPF7c9GvaQC9mJEvj70lO6dpmnfuFnCKfLFXIJYfpjDnMQBCM8HW51CUO7OahlhaYwbJ%2F5neYVevoE%2BppAXBU8P4WcKmxS%2F%2FJpaRiDwmwHM7FumFQ%2BIr2krZn54u%2BiF9xWS%2F36JOuETdFxYak3isFCSPpQeJ%2BcBME4fW%2Be1fe1VbB5x%2Fwe%2BmATE5HXl6SfHYi4cdRP%2BD2Ep1lXMHt&X-Amz-Signature=854208fee1bcd2918b0d3d66e0ebe37ac8fcf7b9dd32ec3960316f68e53a1bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4Y6N7F%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorCcWcm5wCZS5gkob%2B2mLVwluZ0FrII%2FlzkJjQxHl8wIgJvpr4vFlFAa5%2BEIBi6Fr91RiRudLK5U%2FHJTV%2FdCdWkEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIOkv7cbjk%2FMzn29OCrcAxBHqqWS7VqEXS8fMGS%2BTnG0E6s7w809bT3luAr%2BkTmdMtkNzE9wdR2tMv96CsFWV21ukNlO%2FZy0W5DogmiQioMBtJAOPZpETmSteEMit%2FeVp2K2K8r23YdX9Gfd%2Fbj4tLUp1ESg2wHy7oxEdb1ZyWStJUvVr8FF0wM00SB4F8QvuKmoX2x6ndTRqksmFOS3UaukWSfxtrAJMqrGKybu2lPYDH2mK9V0XnWuyMCGfxgq5UzpNohv%2FhP1vokVZIbgkt2wBiCZHUJ7olydE9IbjyjH2fgyyK1kJY%2FPE7%2BECGJkSgZcyZx95NVUYQTfkmWopYbPGgyWIBFq7M2K4YMTAMJ0wzdKcVwLqwVIa6cMbWTooXuLV%2BuBgS0SjEZeZIQBCqcYcJuSYgMcCeTSnPH35oLpzprlxbj8XSdBLwoTzmTo%2FgR5GeqentRL8OnQ3PdY%2BSK8Bbp7pUOB%2FFouihuo8QxPtnEwJKrOZXmxqzzZsPGjoBZe6UWow6l%2F%2BzwPXMGv39d3PFaaKSvx8SlQsCe9NzeZvkf3%2B0UGjrlsz32Y8429yeWt%2Bquq%2BGm7ypoh5J0xo3Ogd6v%2BgNBl2xU%2FExEJH8rpVDR0XB17w9eiPTWEzBviZUBGKTuWo9y99CwOMOik%2Bb8GOqUBBq%2BzWEbzUn7rPF7c9GvaQC9mJEvj70lO6dpmnfuFnCKfLFXIJYfpjDnMQBCM8HW51CUO7OahlhaYwbJ%2F5neYVevoE%2BppAXBU8P4WcKmxS%2F%2FJpaRiDwmwHM7FumFQ%2BIr2krZn54u%2BiF9xWS%2F36JOuETdFxYak3isFCSPpQeJ%2BcBME4fW%2Be1fe1VbB5x%2Fwe%2BmATE5HXl6SfHYi4cdRP%2BD2Ep1lXMHt&X-Amz-Signature=012b20be50d83c9bd6c56da71132c4d7aec4d6436dcca541f481eff8b7c3fc25&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4Y6N7F%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorCcWcm5wCZS5gkob%2B2mLVwluZ0FrII%2FlzkJjQxHl8wIgJvpr4vFlFAa5%2BEIBi6Fr91RiRudLK5U%2FHJTV%2FdCdWkEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIOkv7cbjk%2FMzn29OCrcAxBHqqWS7VqEXS8fMGS%2BTnG0E6s7w809bT3luAr%2BkTmdMtkNzE9wdR2tMv96CsFWV21ukNlO%2FZy0W5DogmiQioMBtJAOPZpETmSteEMit%2FeVp2K2K8r23YdX9Gfd%2Fbj4tLUp1ESg2wHy7oxEdb1ZyWStJUvVr8FF0wM00SB4F8QvuKmoX2x6ndTRqksmFOS3UaukWSfxtrAJMqrGKybu2lPYDH2mK9V0XnWuyMCGfxgq5UzpNohv%2FhP1vokVZIbgkt2wBiCZHUJ7olydE9IbjyjH2fgyyK1kJY%2FPE7%2BECGJkSgZcyZx95NVUYQTfkmWopYbPGgyWIBFq7M2K4YMTAMJ0wzdKcVwLqwVIa6cMbWTooXuLV%2BuBgS0SjEZeZIQBCqcYcJuSYgMcCeTSnPH35oLpzprlxbj8XSdBLwoTzmTo%2FgR5GeqentRL8OnQ3PdY%2BSK8Bbp7pUOB%2FFouihuo8QxPtnEwJKrOZXmxqzzZsPGjoBZe6UWow6l%2F%2BzwPXMGv39d3PFaaKSvx8SlQsCe9NzeZvkf3%2B0UGjrlsz32Y8429yeWt%2Bquq%2BGm7ypoh5J0xo3Ogd6v%2BgNBl2xU%2FExEJH8rpVDR0XB17w9eiPTWEzBviZUBGKTuWo9y99CwOMOik%2Bb8GOqUBBq%2BzWEbzUn7rPF7c9GvaQC9mJEvj70lO6dpmnfuFnCKfLFXIJYfpjDnMQBCM8HW51CUO7OahlhaYwbJ%2F5neYVevoE%2BppAXBU8P4WcKmxS%2F%2FJpaRiDwmwHM7FumFQ%2BIr2krZn54u%2BiF9xWS%2F36JOuETdFxYak3isFCSPpQeJ%2BcBME4fW%2Be1fe1VbB5x%2Fwe%2BmATE5HXl6SfHYi4cdRP%2BD2Ep1lXMHt&X-Amz-Signature=9a4eecd7ef95882012b44f5e2f12ee84a8f07b9e2bec5481f1f51aebca1e5313&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4Y6N7F%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorCcWcm5wCZS5gkob%2B2mLVwluZ0FrII%2FlzkJjQxHl8wIgJvpr4vFlFAa5%2BEIBi6Fr91RiRudLK5U%2FHJTV%2FdCdWkEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIOkv7cbjk%2FMzn29OCrcAxBHqqWS7VqEXS8fMGS%2BTnG0E6s7w809bT3luAr%2BkTmdMtkNzE9wdR2tMv96CsFWV21ukNlO%2FZy0W5DogmiQioMBtJAOPZpETmSteEMit%2FeVp2K2K8r23YdX9Gfd%2Fbj4tLUp1ESg2wHy7oxEdb1ZyWStJUvVr8FF0wM00SB4F8QvuKmoX2x6ndTRqksmFOS3UaukWSfxtrAJMqrGKybu2lPYDH2mK9V0XnWuyMCGfxgq5UzpNohv%2FhP1vokVZIbgkt2wBiCZHUJ7olydE9IbjyjH2fgyyK1kJY%2FPE7%2BECGJkSgZcyZx95NVUYQTfkmWopYbPGgyWIBFq7M2K4YMTAMJ0wzdKcVwLqwVIa6cMbWTooXuLV%2BuBgS0SjEZeZIQBCqcYcJuSYgMcCeTSnPH35oLpzprlxbj8XSdBLwoTzmTo%2FgR5GeqentRL8OnQ3PdY%2BSK8Bbp7pUOB%2FFouihuo8QxPtnEwJKrOZXmxqzzZsPGjoBZe6UWow6l%2F%2BzwPXMGv39d3PFaaKSvx8SlQsCe9NzeZvkf3%2B0UGjrlsz32Y8429yeWt%2Bquq%2BGm7ypoh5J0xo3Ogd6v%2BgNBl2xU%2FExEJH8rpVDR0XB17w9eiPTWEzBviZUBGKTuWo9y99CwOMOik%2Bb8GOqUBBq%2BzWEbzUn7rPF7c9GvaQC9mJEvj70lO6dpmnfuFnCKfLFXIJYfpjDnMQBCM8HW51CUO7OahlhaYwbJ%2F5neYVevoE%2BppAXBU8P4WcKmxS%2F%2FJpaRiDwmwHM7FumFQ%2BIr2krZn54u%2BiF9xWS%2F36JOuETdFxYak3isFCSPpQeJ%2BcBME4fW%2Be1fe1VbB5x%2Fwe%2BmATE5HXl6SfHYi4cdRP%2BD2Ep1lXMHt&X-Amz-Signature=5bf305cb8aa19f6881cdb4a4e8bc59c1ee46859d0dd848bc7838e0639e60225f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4Y6N7F%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorCcWcm5wCZS5gkob%2B2mLVwluZ0FrII%2FlzkJjQxHl8wIgJvpr4vFlFAa5%2BEIBi6Fr91RiRudLK5U%2FHJTV%2FdCdWkEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIOkv7cbjk%2FMzn29OCrcAxBHqqWS7VqEXS8fMGS%2BTnG0E6s7w809bT3luAr%2BkTmdMtkNzE9wdR2tMv96CsFWV21ukNlO%2FZy0W5DogmiQioMBtJAOPZpETmSteEMit%2FeVp2K2K8r23YdX9Gfd%2Fbj4tLUp1ESg2wHy7oxEdb1ZyWStJUvVr8FF0wM00SB4F8QvuKmoX2x6ndTRqksmFOS3UaukWSfxtrAJMqrGKybu2lPYDH2mK9V0XnWuyMCGfxgq5UzpNohv%2FhP1vokVZIbgkt2wBiCZHUJ7olydE9IbjyjH2fgyyK1kJY%2FPE7%2BECGJkSgZcyZx95NVUYQTfkmWopYbPGgyWIBFq7M2K4YMTAMJ0wzdKcVwLqwVIa6cMbWTooXuLV%2BuBgS0SjEZeZIQBCqcYcJuSYgMcCeTSnPH35oLpzprlxbj8XSdBLwoTzmTo%2FgR5GeqentRL8OnQ3PdY%2BSK8Bbp7pUOB%2FFouihuo8QxPtnEwJKrOZXmxqzzZsPGjoBZe6UWow6l%2F%2BzwPXMGv39d3PFaaKSvx8SlQsCe9NzeZvkf3%2B0UGjrlsz32Y8429yeWt%2Bquq%2BGm7ypoh5J0xo3Ogd6v%2BgNBl2xU%2FExEJH8rpVDR0XB17w9eiPTWEzBviZUBGKTuWo9y99CwOMOik%2Bb8GOqUBBq%2BzWEbzUn7rPF7c9GvaQC9mJEvj70lO6dpmnfuFnCKfLFXIJYfpjDnMQBCM8HW51CUO7OahlhaYwbJ%2F5neYVevoE%2BppAXBU8P4WcKmxS%2F%2FJpaRiDwmwHM7FumFQ%2BIr2krZn54u%2BiF9xWS%2F36JOuETdFxYak3isFCSPpQeJ%2BcBME4fW%2Be1fe1VbB5x%2Fwe%2BmATE5HXl6SfHYi4cdRP%2BD2Ep1lXMHt&X-Amz-Signature=7052b4991a722a5685b18ad38b52055fa6e88ca281f014c7681c12a61cef6ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
