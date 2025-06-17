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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSEMWKJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO2x2YzB7XmvxzVw1iVqamutoi8QfAhni72WtvhyVOsAiAMWGMTDRLmzb83tOMZj2NPZoGNPQq6E1aDMHQ6SPvShyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMLNom1EWJFFxUWVxeKtwDmMov52FPuSuqfOBy%2F2CCUbtLE0K2HemayxTA2SO5zjm8phNXrMpk%2F6Ux72Daho3d2ftuMV%2F4nvwUrgEtJIeLYJ2jKtc0IEBwzZOqQdYL0R%2BoIHhfJ2yPkGJ0QBywRjZb8Blr4V%2Fp5Nmu1sxjSopUrjGLthD0iFcFAJlV4i1TyVFX8ufD%2BnAPJCgHwL8y2%2B3%2FC4XyyOsBxqLXrk%2BzPfdRwZTAGu7Swb%2BSF3uAxCye7yJWYt2ZHV42PSFZlD80%2BsEsTwxC%2FjzGAWDJpSwZAI01%2FXdO7fXdj3TNIArJWzGZGeHIcYbCh2zDfpPbkMR9vsi8yonCPo5PK%2BP3p%2BdFF3Bkn5xGb4s8ibEIzhi2wysfRMOIYulMHqmfyXMG6MDesw40cz1f%2FGZSQwTyFEH5t4C5CdR%2BvSxAANAGeA%2BUWv3pfFxQbocaIXOh41ZLSGA0FxFVBw7F9roEe53z0KUdX2QDd1Uy4LdKGs1zU5ZDGp0JnNIp6s3f2IgPwvVJQZFoIcrad%2F2Jl49ex5%2B5SruIBMeARb9DHHVL%2BklK%2B%2FYwTcFvuoGH%2FdfuOzqCHTUWIC%2FrOsT6Eep2s17BFD6vR9Z4ODIUKcv%2F2R44dTb4elnbJLvh4Wf8shQzdfW2fYFAk1MwqODGwgY6pgGIyM7Cnhy%2Fp90J22tIGsrD5KqEt6dM2wAEav8kVUWFbJEGI9%2Fj8gucJmjxvf4OpHRIkfqiBwiGFTtQr1IpJLRgkbmkRb96CdmDie2MAYatgKDlHVISS7L3H6KkaAJjbrRAgeTEPqu1I9OMVZWF4ttxfpo69yDdHy5df6SjzHiOSso%2BY7y3JIE3arcWFdWBGaj4Cg7FzAJSHV4JPpzSigl4NOTTqViu&X-Amz-Signature=0872681cb38fe12490c1d3e31970204b40bb21a8d5bd5eb1f831e4130c51db44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSEMWKJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO2x2YzB7XmvxzVw1iVqamutoi8QfAhni72WtvhyVOsAiAMWGMTDRLmzb83tOMZj2NPZoGNPQq6E1aDMHQ6SPvShyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMLNom1EWJFFxUWVxeKtwDmMov52FPuSuqfOBy%2F2CCUbtLE0K2HemayxTA2SO5zjm8phNXrMpk%2F6Ux72Daho3d2ftuMV%2F4nvwUrgEtJIeLYJ2jKtc0IEBwzZOqQdYL0R%2BoIHhfJ2yPkGJ0QBywRjZb8Blr4V%2Fp5Nmu1sxjSopUrjGLthD0iFcFAJlV4i1TyVFX8ufD%2BnAPJCgHwL8y2%2B3%2FC4XyyOsBxqLXrk%2BzPfdRwZTAGu7Swb%2BSF3uAxCye7yJWYt2ZHV42PSFZlD80%2BsEsTwxC%2FjzGAWDJpSwZAI01%2FXdO7fXdj3TNIArJWzGZGeHIcYbCh2zDfpPbkMR9vsi8yonCPo5PK%2BP3p%2BdFF3Bkn5xGb4s8ibEIzhi2wysfRMOIYulMHqmfyXMG6MDesw40cz1f%2FGZSQwTyFEH5t4C5CdR%2BvSxAANAGeA%2BUWv3pfFxQbocaIXOh41ZLSGA0FxFVBw7F9roEe53z0KUdX2QDd1Uy4LdKGs1zU5ZDGp0JnNIp6s3f2IgPwvVJQZFoIcrad%2F2Jl49ex5%2B5SruIBMeARb9DHHVL%2BklK%2B%2FYwTcFvuoGH%2FdfuOzqCHTUWIC%2FrOsT6Eep2s17BFD6vR9Z4ODIUKcv%2F2R44dTb4elnbJLvh4Wf8shQzdfW2fYFAk1MwqODGwgY6pgGIyM7Cnhy%2Fp90J22tIGsrD5KqEt6dM2wAEav8kVUWFbJEGI9%2Fj8gucJmjxvf4OpHRIkfqiBwiGFTtQr1IpJLRgkbmkRb96CdmDie2MAYatgKDlHVISS7L3H6KkaAJjbrRAgeTEPqu1I9OMVZWF4ttxfpo69yDdHy5df6SjzHiOSso%2BY7y3JIE3arcWFdWBGaj4Cg7FzAJSHV4JPpzSigl4NOTTqViu&X-Amz-Signature=31cd4cc600d00f2c0ba41ce655c0b6755021103ef98d046d1e1ba5b71566ccf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSEMWKJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO2x2YzB7XmvxzVw1iVqamutoi8QfAhni72WtvhyVOsAiAMWGMTDRLmzb83tOMZj2NPZoGNPQq6E1aDMHQ6SPvShyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMLNom1EWJFFxUWVxeKtwDmMov52FPuSuqfOBy%2F2CCUbtLE0K2HemayxTA2SO5zjm8phNXrMpk%2F6Ux72Daho3d2ftuMV%2F4nvwUrgEtJIeLYJ2jKtc0IEBwzZOqQdYL0R%2BoIHhfJ2yPkGJ0QBywRjZb8Blr4V%2Fp5Nmu1sxjSopUrjGLthD0iFcFAJlV4i1TyVFX8ufD%2BnAPJCgHwL8y2%2B3%2FC4XyyOsBxqLXrk%2BzPfdRwZTAGu7Swb%2BSF3uAxCye7yJWYt2ZHV42PSFZlD80%2BsEsTwxC%2FjzGAWDJpSwZAI01%2FXdO7fXdj3TNIArJWzGZGeHIcYbCh2zDfpPbkMR9vsi8yonCPo5PK%2BP3p%2BdFF3Bkn5xGb4s8ibEIzhi2wysfRMOIYulMHqmfyXMG6MDesw40cz1f%2FGZSQwTyFEH5t4C5CdR%2BvSxAANAGeA%2BUWv3pfFxQbocaIXOh41ZLSGA0FxFVBw7F9roEe53z0KUdX2QDd1Uy4LdKGs1zU5ZDGp0JnNIp6s3f2IgPwvVJQZFoIcrad%2F2Jl49ex5%2B5SruIBMeARb9DHHVL%2BklK%2B%2FYwTcFvuoGH%2FdfuOzqCHTUWIC%2FrOsT6Eep2s17BFD6vR9Z4ODIUKcv%2F2R44dTb4elnbJLvh4Wf8shQzdfW2fYFAk1MwqODGwgY6pgGIyM7Cnhy%2Fp90J22tIGsrD5KqEt6dM2wAEav8kVUWFbJEGI9%2Fj8gucJmjxvf4OpHRIkfqiBwiGFTtQr1IpJLRgkbmkRb96CdmDie2MAYatgKDlHVISS7L3H6KkaAJjbrRAgeTEPqu1I9OMVZWF4ttxfpo69yDdHy5df6SjzHiOSso%2BY7y3JIE3arcWFdWBGaj4Cg7FzAJSHV4JPpzSigl4NOTTqViu&X-Amz-Signature=d51c32836deae391702491c8867e20e365b7d40bfa1ccca39af33f70415a4d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSEMWKJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO2x2YzB7XmvxzVw1iVqamutoi8QfAhni72WtvhyVOsAiAMWGMTDRLmzb83tOMZj2NPZoGNPQq6E1aDMHQ6SPvShyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMLNom1EWJFFxUWVxeKtwDmMov52FPuSuqfOBy%2F2CCUbtLE0K2HemayxTA2SO5zjm8phNXrMpk%2F6Ux72Daho3d2ftuMV%2F4nvwUrgEtJIeLYJ2jKtc0IEBwzZOqQdYL0R%2BoIHhfJ2yPkGJ0QBywRjZb8Blr4V%2Fp5Nmu1sxjSopUrjGLthD0iFcFAJlV4i1TyVFX8ufD%2BnAPJCgHwL8y2%2B3%2FC4XyyOsBxqLXrk%2BzPfdRwZTAGu7Swb%2BSF3uAxCye7yJWYt2ZHV42PSFZlD80%2BsEsTwxC%2FjzGAWDJpSwZAI01%2FXdO7fXdj3TNIArJWzGZGeHIcYbCh2zDfpPbkMR9vsi8yonCPo5PK%2BP3p%2BdFF3Bkn5xGb4s8ibEIzhi2wysfRMOIYulMHqmfyXMG6MDesw40cz1f%2FGZSQwTyFEH5t4C5CdR%2BvSxAANAGeA%2BUWv3pfFxQbocaIXOh41ZLSGA0FxFVBw7F9roEe53z0KUdX2QDd1Uy4LdKGs1zU5ZDGp0JnNIp6s3f2IgPwvVJQZFoIcrad%2F2Jl49ex5%2B5SruIBMeARb9DHHVL%2BklK%2B%2FYwTcFvuoGH%2FdfuOzqCHTUWIC%2FrOsT6Eep2s17BFD6vR9Z4ODIUKcv%2F2R44dTb4elnbJLvh4Wf8shQzdfW2fYFAk1MwqODGwgY6pgGIyM7Cnhy%2Fp90J22tIGsrD5KqEt6dM2wAEav8kVUWFbJEGI9%2Fj8gucJmjxvf4OpHRIkfqiBwiGFTtQr1IpJLRgkbmkRb96CdmDie2MAYatgKDlHVISS7L3H6KkaAJjbrRAgeTEPqu1I9OMVZWF4ttxfpo69yDdHy5df6SjzHiOSso%2BY7y3JIE3arcWFdWBGaj4Cg7FzAJSHV4JPpzSigl4NOTTqViu&X-Amz-Signature=bcec5e42feaf2924e066dbabad28b639a28d2f7732688562b5b66401df0552c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSEMWKJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO2x2YzB7XmvxzVw1iVqamutoi8QfAhni72WtvhyVOsAiAMWGMTDRLmzb83tOMZj2NPZoGNPQq6E1aDMHQ6SPvShyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMLNom1EWJFFxUWVxeKtwDmMov52FPuSuqfOBy%2F2CCUbtLE0K2HemayxTA2SO5zjm8phNXrMpk%2F6Ux72Daho3d2ftuMV%2F4nvwUrgEtJIeLYJ2jKtc0IEBwzZOqQdYL0R%2BoIHhfJ2yPkGJ0QBywRjZb8Blr4V%2Fp5Nmu1sxjSopUrjGLthD0iFcFAJlV4i1TyVFX8ufD%2BnAPJCgHwL8y2%2B3%2FC4XyyOsBxqLXrk%2BzPfdRwZTAGu7Swb%2BSF3uAxCye7yJWYt2ZHV42PSFZlD80%2BsEsTwxC%2FjzGAWDJpSwZAI01%2FXdO7fXdj3TNIArJWzGZGeHIcYbCh2zDfpPbkMR9vsi8yonCPo5PK%2BP3p%2BdFF3Bkn5xGb4s8ibEIzhi2wysfRMOIYulMHqmfyXMG6MDesw40cz1f%2FGZSQwTyFEH5t4C5CdR%2BvSxAANAGeA%2BUWv3pfFxQbocaIXOh41ZLSGA0FxFVBw7F9roEe53z0KUdX2QDd1Uy4LdKGs1zU5ZDGp0JnNIp6s3f2IgPwvVJQZFoIcrad%2F2Jl49ex5%2B5SruIBMeARb9DHHVL%2BklK%2B%2FYwTcFvuoGH%2FdfuOzqCHTUWIC%2FrOsT6Eep2s17BFD6vR9Z4ODIUKcv%2F2R44dTb4elnbJLvh4Wf8shQzdfW2fYFAk1MwqODGwgY6pgGIyM7Cnhy%2Fp90J22tIGsrD5KqEt6dM2wAEav8kVUWFbJEGI9%2Fj8gucJmjxvf4OpHRIkfqiBwiGFTtQr1IpJLRgkbmkRb96CdmDie2MAYatgKDlHVISS7L3H6KkaAJjbrRAgeTEPqu1I9OMVZWF4ttxfpo69yDdHy5df6SjzHiOSso%2BY7y3JIE3arcWFdWBGaj4Cg7FzAJSHV4JPpzSigl4NOTTqViu&X-Amz-Signature=a1615976f669680d800ea2cce6b5ca85c24732115a1cb4a802f29e774cd3b9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
