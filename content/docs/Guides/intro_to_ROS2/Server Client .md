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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GA5HJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZSOg09Eref6bEYUr3p56SBdbA0x5D9OusccXdzJHzXAIhAKTIxKQ8e38BeiGTo4Eb7WKSHgIWHaxi6CP1tHUqZHguKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHRIW8penwZIHUa5Mq3APnmDvMxFy2tvSldb4XotsumqWxp%2FfIVbeA7LKIv%2F%2F1W2l1Y8roD4skwAncX6WLbNUgzlxvpiZbQjOcNawVDyBrtdNlFJj9lNAKqqYBtSr806Dn2217%2Fo4Nl%2B0I3rPxsDr%2BuR1kN6N7ecxWt6yDcGeurmJjFRM3HKji5W4xloqfnHRgmRZxf9j4J%2FgptW%2FSgmQKhzdpf3JPz7%2B94UuL5TZAG14as8e7DWIAyGtb6mOKPp%2FSz7YgtPhc3h7164K%2BpUoMlNwlf0TK7FGZOC5shbuAloRLGKuO8yJ3xqAxyJmguFKnfoBmG4DP5CrxxskjSX0f9vTeaxfgmpXULACIJonGF7blVUAvRkSiujxdRCG4VH%2B%2BRhjR0RuciOL2S33H%2BPjMhcx1xMlDtP%2Bmc1tLKa2HJqU69YDdcv2VnIzwNL7d%2FR7pVs6z4R01jhFa7fK3FkS%2BrgDUiVV%2BBwppKGFihMxkE5gaLSdNT2Qqcg%2FcNirIV8c7sP%2FfL38ODI4xZWxhPHF2WWy6KAXL4Nx%2FcBi1anEq%2FrWtgfPkX3VLc%2FEPWpiE%2BU267s4IAJtuBtHTGgB0EtSGYiN96Ue3A2Ayv2YppfUSF3Fvo0m%2FVB2MZ8ay5BS2SyTkk0WqCLD45AUjZTCq06W%2FBjqkAU9BTPh1OUfhGKk2hngHZQwll0E%2FFSMB8hVq%2FeryOvkVfSDwrMwgBGA3FB%2FOfR3Zx5zJ1ymVJ0gI3RX%2FKTiUYZ1vEG9yzsd1shkPg%2FZ1hwjUY2zrf7lTFBGZ4ngnuItrjwSOk2K%2FK9Ad0rpzRLaTezLaGi6sPjmcMXyNqM2hDc9LbBQzC658AG%2BsKyJQpoXpzpmWJX1RxO2mY4BQzLXGNFoZ%2Bkfp&X-Amz-Signature=17fad441a636ae8da003caa914dfb8c3978a4a5c4f41c650452a9e5ed5a768d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GA5HJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZSOg09Eref6bEYUr3p56SBdbA0x5D9OusccXdzJHzXAIhAKTIxKQ8e38BeiGTo4Eb7WKSHgIWHaxi6CP1tHUqZHguKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHRIW8penwZIHUa5Mq3APnmDvMxFy2tvSldb4XotsumqWxp%2FfIVbeA7LKIv%2F%2F1W2l1Y8roD4skwAncX6WLbNUgzlxvpiZbQjOcNawVDyBrtdNlFJj9lNAKqqYBtSr806Dn2217%2Fo4Nl%2B0I3rPxsDr%2BuR1kN6N7ecxWt6yDcGeurmJjFRM3HKji5W4xloqfnHRgmRZxf9j4J%2FgptW%2FSgmQKhzdpf3JPz7%2B94UuL5TZAG14as8e7DWIAyGtb6mOKPp%2FSz7YgtPhc3h7164K%2BpUoMlNwlf0TK7FGZOC5shbuAloRLGKuO8yJ3xqAxyJmguFKnfoBmG4DP5CrxxskjSX0f9vTeaxfgmpXULACIJonGF7blVUAvRkSiujxdRCG4VH%2B%2BRhjR0RuciOL2S33H%2BPjMhcx1xMlDtP%2Bmc1tLKa2HJqU69YDdcv2VnIzwNL7d%2FR7pVs6z4R01jhFa7fK3FkS%2BrgDUiVV%2BBwppKGFihMxkE5gaLSdNT2Qqcg%2FcNirIV8c7sP%2FfL38ODI4xZWxhPHF2WWy6KAXL4Nx%2FcBi1anEq%2FrWtgfPkX3VLc%2FEPWpiE%2BU267s4IAJtuBtHTGgB0EtSGYiN96Ue3A2Ayv2YppfUSF3Fvo0m%2FVB2MZ8ay5BS2SyTkk0WqCLD45AUjZTCq06W%2FBjqkAU9BTPh1OUfhGKk2hngHZQwll0E%2FFSMB8hVq%2FeryOvkVfSDwrMwgBGA3FB%2FOfR3Zx5zJ1ymVJ0gI3RX%2FKTiUYZ1vEG9yzsd1shkPg%2FZ1hwjUY2zrf7lTFBGZ4ngnuItrjwSOk2K%2FK9Ad0rpzRLaTezLaGi6sPjmcMXyNqM2hDc9LbBQzC658AG%2BsKyJQpoXpzpmWJX1RxO2mY4BQzLXGNFoZ%2Bkfp&X-Amz-Signature=2078209a14149b1918c5bcf8922c7b25c73661d6243e9355dc59423212217ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GA5HJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZSOg09Eref6bEYUr3p56SBdbA0x5D9OusccXdzJHzXAIhAKTIxKQ8e38BeiGTo4Eb7WKSHgIWHaxi6CP1tHUqZHguKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHRIW8penwZIHUa5Mq3APnmDvMxFy2tvSldb4XotsumqWxp%2FfIVbeA7LKIv%2F%2F1W2l1Y8roD4skwAncX6WLbNUgzlxvpiZbQjOcNawVDyBrtdNlFJj9lNAKqqYBtSr806Dn2217%2Fo4Nl%2B0I3rPxsDr%2BuR1kN6N7ecxWt6yDcGeurmJjFRM3HKji5W4xloqfnHRgmRZxf9j4J%2FgptW%2FSgmQKhzdpf3JPz7%2B94UuL5TZAG14as8e7DWIAyGtb6mOKPp%2FSz7YgtPhc3h7164K%2BpUoMlNwlf0TK7FGZOC5shbuAloRLGKuO8yJ3xqAxyJmguFKnfoBmG4DP5CrxxskjSX0f9vTeaxfgmpXULACIJonGF7blVUAvRkSiujxdRCG4VH%2B%2BRhjR0RuciOL2S33H%2BPjMhcx1xMlDtP%2Bmc1tLKa2HJqU69YDdcv2VnIzwNL7d%2FR7pVs6z4R01jhFa7fK3FkS%2BrgDUiVV%2BBwppKGFihMxkE5gaLSdNT2Qqcg%2FcNirIV8c7sP%2FfL38ODI4xZWxhPHF2WWy6KAXL4Nx%2FcBi1anEq%2FrWtgfPkX3VLc%2FEPWpiE%2BU267s4IAJtuBtHTGgB0EtSGYiN96Ue3A2Ayv2YppfUSF3Fvo0m%2FVB2MZ8ay5BS2SyTkk0WqCLD45AUjZTCq06W%2FBjqkAU9BTPh1OUfhGKk2hngHZQwll0E%2FFSMB8hVq%2FeryOvkVfSDwrMwgBGA3FB%2FOfR3Zx5zJ1ymVJ0gI3RX%2FKTiUYZ1vEG9yzsd1shkPg%2FZ1hwjUY2zrf7lTFBGZ4ngnuItrjwSOk2K%2FK9Ad0rpzRLaTezLaGi6sPjmcMXyNqM2hDc9LbBQzC658AG%2BsKyJQpoXpzpmWJX1RxO2mY4BQzLXGNFoZ%2Bkfp&X-Amz-Signature=f972d5b5ec997a13cea120df78a704133f272820b87a084e534b5b837b3e1670&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GA5HJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZSOg09Eref6bEYUr3p56SBdbA0x5D9OusccXdzJHzXAIhAKTIxKQ8e38BeiGTo4Eb7WKSHgIWHaxi6CP1tHUqZHguKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHRIW8penwZIHUa5Mq3APnmDvMxFy2tvSldb4XotsumqWxp%2FfIVbeA7LKIv%2F%2F1W2l1Y8roD4skwAncX6WLbNUgzlxvpiZbQjOcNawVDyBrtdNlFJj9lNAKqqYBtSr806Dn2217%2Fo4Nl%2B0I3rPxsDr%2BuR1kN6N7ecxWt6yDcGeurmJjFRM3HKji5W4xloqfnHRgmRZxf9j4J%2FgptW%2FSgmQKhzdpf3JPz7%2B94UuL5TZAG14as8e7DWIAyGtb6mOKPp%2FSz7YgtPhc3h7164K%2BpUoMlNwlf0TK7FGZOC5shbuAloRLGKuO8yJ3xqAxyJmguFKnfoBmG4DP5CrxxskjSX0f9vTeaxfgmpXULACIJonGF7blVUAvRkSiujxdRCG4VH%2B%2BRhjR0RuciOL2S33H%2BPjMhcx1xMlDtP%2Bmc1tLKa2HJqU69YDdcv2VnIzwNL7d%2FR7pVs6z4R01jhFa7fK3FkS%2BrgDUiVV%2BBwppKGFihMxkE5gaLSdNT2Qqcg%2FcNirIV8c7sP%2FfL38ODI4xZWxhPHF2WWy6KAXL4Nx%2FcBi1anEq%2FrWtgfPkX3VLc%2FEPWpiE%2BU267s4IAJtuBtHTGgB0EtSGYiN96Ue3A2Ayv2YppfUSF3Fvo0m%2FVB2MZ8ay5BS2SyTkk0WqCLD45AUjZTCq06W%2FBjqkAU9BTPh1OUfhGKk2hngHZQwll0E%2FFSMB8hVq%2FeryOvkVfSDwrMwgBGA3FB%2FOfR3Zx5zJ1ymVJ0gI3RX%2FKTiUYZ1vEG9yzsd1shkPg%2FZ1hwjUY2zrf7lTFBGZ4ngnuItrjwSOk2K%2FK9Ad0rpzRLaTezLaGi6sPjmcMXyNqM2hDc9LbBQzC658AG%2BsKyJQpoXpzpmWJX1RxO2mY4BQzLXGNFoZ%2Bkfp&X-Amz-Signature=894a39d7557e22c254306e10148a47eb44cc3f06eb3859319e761d61e31fd464&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GA5HJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZSOg09Eref6bEYUr3p56SBdbA0x5D9OusccXdzJHzXAIhAKTIxKQ8e38BeiGTo4Eb7WKSHgIWHaxi6CP1tHUqZHguKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHRIW8penwZIHUa5Mq3APnmDvMxFy2tvSldb4XotsumqWxp%2FfIVbeA7LKIv%2F%2F1W2l1Y8roD4skwAncX6WLbNUgzlxvpiZbQjOcNawVDyBrtdNlFJj9lNAKqqYBtSr806Dn2217%2Fo4Nl%2B0I3rPxsDr%2BuR1kN6N7ecxWt6yDcGeurmJjFRM3HKji5W4xloqfnHRgmRZxf9j4J%2FgptW%2FSgmQKhzdpf3JPz7%2B94UuL5TZAG14as8e7DWIAyGtb6mOKPp%2FSz7YgtPhc3h7164K%2BpUoMlNwlf0TK7FGZOC5shbuAloRLGKuO8yJ3xqAxyJmguFKnfoBmG4DP5CrxxskjSX0f9vTeaxfgmpXULACIJonGF7blVUAvRkSiujxdRCG4VH%2B%2BRhjR0RuciOL2S33H%2BPjMhcx1xMlDtP%2Bmc1tLKa2HJqU69YDdcv2VnIzwNL7d%2FR7pVs6z4R01jhFa7fK3FkS%2BrgDUiVV%2BBwppKGFihMxkE5gaLSdNT2Qqcg%2FcNirIV8c7sP%2FfL38ODI4xZWxhPHF2WWy6KAXL4Nx%2FcBi1anEq%2FrWtgfPkX3VLc%2FEPWpiE%2BU267s4IAJtuBtHTGgB0EtSGYiN96Ue3A2Ayv2YppfUSF3Fvo0m%2FVB2MZ8ay5BS2SyTkk0WqCLD45AUjZTCq06W%2FBjqkAU9BTPh1OUfhGKk2hngHZQwll0E%2FFSMB8hVq%2FeryOvkVfSDwrMwgBGA3FB%2FOfR3Zx5zJ1ymVJ0gI3RX%2FKTiUYZ1vEG9yzsd1shkPg%2FZ1hwjUY2zrf7lTFBGZ4ngnuItrjwSOk2K%2FK9Ad0rpzRLaTezLaGi6sPjmcMXyNqM2hDc9LbBQzC658AG%2BsKyJQpoXpzpmWJX1RxO2mY4BQzLXGNFoZ%2Bkfp&X-Amz-Signature=a3e00cdc9e8f186b9d03a2a81efd43500841470eb5b17104305b652f61250ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
