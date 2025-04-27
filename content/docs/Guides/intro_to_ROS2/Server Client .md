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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMCPOP6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChfINHevomWtcAgrSpuXOW9AsnyNsI%2B%2Feh8IcSYq7SIgIhAKLmXRakOCI0MHxJ%2Fg9ib%2FshQ60co3F010Q7LW4LgHTNKv8DCGQQABoMNjM3NDIzMTgzODA1Igz%2Fm4GYJZUp5EpQ220q3AMqyCcAoBxk6GZ56iI5EyDOZKlfm6JoR%2BVa%2Faul9ZUBVq7fANMTCAqmvBCaqu8BoT90%2BmqelHUg7AEjPU%2BSJjp5wWV321mD3gEzF3kIkE0DavNTDL3xL9eS%2BYMBP047FEOv2iUeWMCy8KzrlBW9ZY%2FF%2FEchHw5s7XPnHY0Ev1eUlzJluknC5hTGNTwVK2ne0O7L5cvkMm641JP5pHo383yVbY8CmUy27PUYqDc1mPUkOZnW6QuV4Xm2oPH3xPDKA%2FDy5CHtcORJCxgZwyGjKJjlNW1djLoAMC1aumX6mXYbl%2FeEGhCL3%2Bkxkw8KEac9ZH1ib7kdscuJffpfuOrQK4PiIGwb6Ue3SJCPLFwcH7uQRLju3TD%2BLYWaQlVjoVcpKC1u5v2zPYdKssn%2FI3Day%2B144eOQDiB92AxPQm7swMtfpfGQjDgkEbmOupxFGu2Eee0Kr4eoDjeoV1zrN4gMnKYNfG01i0Jm2Q3o8wr05Nr1Zxt%2FR6MkS3igvfLq6Mwp1WLXGYOb19JhBJ%2FpHhdRi%2BjxSgJ9O336TGW2cVsIkw1XukjvW2Igzsqt%2FT5ij1ybuxPFmoZtgI1TaKtkw3UiOD4W3ugLvs3C6khtzGxrNbrlSol3T969efhRpTB3LzCW8bnABjqkARTeV3hCDcy6GuRN9nIrb9whNHC4MesmpHUbfUAQ4DISnQCgALNWkSkqcwYrAYnuv9MqfZcUteuEapP5%2BvvYRZ2cgjeIhiloib4t7%2Fkp0Hhgw0OhPKZoqWvSTxxa8dgou%2BQz92MnsS4XTeZ2uDRdgVWq3sOjP7psCcVE%2B5%2B%2BwdkG9n1lDZKl7tF%2F9OEOF77Z9BCeiry%2FVFyeayxvjp1sqwGSRKwh&X-Amz-Signature=3bf9977fe2d7fecbec010945d548a8d1fc3922b22974744fe5d463c41d46f9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMCPOP6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChfINHevomWtcAgrSpuXOW9AsnyNsI%2B%2Feh8IcSYq7SIgIhAKLmXRakOCI0MHxJ%2Fg9ib%2FshQ60co3F010Q7LW4LgHTNKv8DCGQQABoMNjM3NDIzMTgzODA1Igz%2Fm4GYJZUp5EpQ220q3AMqyCcAoBxk6GZ56iI5EyDOZKlfm6JoR%2BVa%2Faul9ZUBVq7fANMTCAqmvBCaqu8BoT90%2BmqelHUg7AEjPU%2BSJjp5wWV321mD3gEzF3kIkE0DavNTDL3xL9eS%2BYMBP047FEOv2iUeWMCy8KzrlBW9ZY%2FF%2FEchHw5s7XPnHY0Ev1eUlzJluknC5hTGNTwVK2ne0O7L5cvkMm641JP5pHo383yVbY8CmUy27PUYqDc1mPUkOZnW6QuV4Xm2oPH3xPDKA%2FDy5CHtcORJCxgZwyGjKJjlNW1djLoAMC1aumX6mXYbl%2FeEGhCL3%2Bkxkw8KEac9ZH1ib7kdscuJffpfuOrQK4PiIGwb6Ue3SJCPLFwcH7uQRLju3TD%2BLYWaQlVjoVcpKC1u5v2zPYdKssn%2FI3Day%2B144eOQDiB92AxPQm7swMtfpfGQjDgkEbmOupxFGu2Eee0Kr4eoDjeoV1zrN4gMnKYNfG01i0Jm2Q3o8wr05Nr1Zxt%2FR6MkS3igvfLq6Mwp1WLXGYOb19JhBJ%2FpHhdRi%2BjxSgJ9O336TGW2cVsIkw1XukjvW2Igzsqt%2FT5ij1ybuxPFmoZtgI1TaKtkw3UiOD4W3ugLvs3C6khtzGxrNbrlSol3T969efhRpTB3LzCW8bnABjqkARTeV3hCDcy6GuRN9nIrb9whNHC4MesmpHUbfUAQ4DISnQCgALNWkSkqcwYrAYnuv9MqfZcUteuEapP5%2BvvYRZ2cgjeIhiloib4t7%2Fkp0Hhgw0OhPKZoqWvSTxxa8dgou%2BQz92MnsS4XTeZ2uDRdgVWq3sOjP7psCcVE%2B5%2B%2BwdkG9n1lDZKl7tF%2F9OEOF77Z9BCeiry%2FVFyeayxvjp1sqwGSRKwh&X-Amz-Signature=79cc5a73a86ddefbeac1108f67911a6c659f2e3632cb83eba358a41902dbd432&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMCPOP6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChfINHevomWtcAgrSpuXOW9AsnyNsI%2B%2Feh8IcSYq7SIgIhAKLmXRakOCI0MHxJ%2Fg9ib%2FshQ60co3F010Q7LW4LgHTNKv8DCGQQABoMNjM3NDIzMTgzODA1Igz%2Fm4GYJZUp5EpQ220q3AMqyCcAoBxk6GZ56iI5EyDOZKlfm6JoR%2BVa%2Faul9ZUBVq7fANMTCAqmvBCaqu8BoT90%2BmqelHUg7AEjPU%2BSJjp5wWV321mD3gEzF3kIkE0DavNTDL3xL9eS%2BYMBP047FEOv2iUeWMCy8KzrlBW9ZY%2FF%2FEchHw5s7XPnHY0Ev1eUlzJluknC5hTGNTwVK2ne0O7L5cvkMm641JP5pHo383yVbY8CmUy27PUYqDc1mPUkOZnW6QuV4Xm2oPH3xPDKA%2FDy5CHtcORJCxgZwyGjKJjlNW1djLoAMC1aumX6mXYbl%2FeEGhCL3%2Bkxkw8KEac9ZH1ib7kdscuJffpfuOrQK4PiIGwb6Ue3SJCPLFwcH7uQRLju3TD%2BLYWaQlVjoVcpKC1u5v2zPYdKssn%2FI3Day%2B144eOQDiB92AxPQm7swMtfpfGQjDgkEbmOupxFGu2Eee0Kr4eoDjeoV1zrN4gMnKYNfG01i0Jm2Q3o8wr05Nr1Zxt%2FR6MkS3igvfLq6Mwp1WLXGYOb19JhBJ%2FpHhdRi%2BjxSgJ9O336TGW2cVsIkw1XukjvW2Igzsqt%2FT5ij1ybuxPFmoZtgI1TaKtkw3UiOD4W3ugLvs3C6khtzGxrNbrlSol3T969efhRpTB3LzCW8bnABjqkARTeV3hCDcy6GuRN9nIrb9whNHC4MesmpHUbfUAQ4DISnQCgALNWkSkqcwYrAYnuv9MqfZcUteuEapP5%2BvvYRZ2cgjeIhiloib4t7%2Fkp0Hhgw0OhPKZoqWvSTxxa8dgou%2BQz92MnsS4XTeZ2uDRdgVWq3sOjP7psCcVE%2B5%2B%2BwdkG9n1lDZKl7tF%2F9OEOF77Z9BCeiry%2FVFyeayxvjp1sqwGSRKwh&X-Amz-Signature=6e4869f96707bc4024057cdccad9a6f6393af564d708cd6c8b0d722066240821&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMCPOP6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChfINHevomWtcAgrSpuXOW9AsnyNsI%2B%2Feh8IcSYq7SIgIhAKLmXRakOCI0MHxJ%2Fg9ib%2FshQ60co3F010Q7LW4LgHTNKv8DCGQQABoMNjM3NDIzMTgzODA1Igz%2Fm4GYJZUp5EpQ220q3AMqyCcAoBxk6GZ56iI5EyDOZKlfm6JoR%2BVa%2Faul9ZUBVq7fANMTCAqmvBCaqu8BoT90%2BmqelHUg7AEjPU%2BSJjp5wWV321mD3gEzF3kIkE0DavNTDL3xL9eS%2BYMBP047FEOv2iUeWMCy8KzrlBW9ZY%2FF%2FEchHw5s7XPnHY0Ev1eUlzJluknC5hTGNTwVK2ne0O7L5cvkMm641JP5pHo383yVbY8CmUy27PUYqDc1mPUkOZnW6QuV4Xm2oPH3xPDKA%2FDy5CHtcORJCxgZwyGjKJjlNW1djLoAMC1aumX6mXYbl%2FeEGhCL3%2Bkxkw8KEac9ZH1ib7kdscuJffpfuOrQK4PiIGwb6Ue3SJCPLFwcH7uQRLju3TD%2BLYWaQlVjoVcpKC1u5v2zPYdKssn%2FI3Day%2B144eOQDiB92AxPQm7swMtfpfGQjDgkEbmOupxFGu2Eee0Kr4eoDjeoV1zrN4gMnKYNfG01i0Jm2Q3o8wr05Nr1Zxt%2FR6MkS3igvfLq6Mwp1WLXGYOb19JhBJ%2FpHhdRi%2BjxSgJ9O336TGW2cVsIkw1XukjvW2Igzsqt%2FT5ij1ybuxPFmoZtgI1TaKtkw3UiOD4W3ugLvs3C6khtzGxrNbrlSol3T969efhRpTB3LzCW8bnABjqkARTeV3hCDcy6GuRN9nIrb9whNHC4MesmpHUbfUAQ4DISnQCgALNWkSkqcwYrAYnuv9MqfZcUteuEapP5%2BvvYRZ2cgjeIhiloib4t7%2Fkp0Hhgw0OhPKZoqWvSTxxa8dgou%2BQz92MnsS4XTeZ2uDRdgVWq3sOjP7psCcVE%2B5%2B%2BwdkG9n1lDZKl7tF%2F9OEOF77Z9BCeiry%2FVFyeayxvjp1sqwGSRKwh&X-Amz-Signature=feef4f45363c684b9edf340ab5a9898b02d2bed19995132404ee93514b4b5182&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMCPOP6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChfINHevomWtcAgrSpuXOW9AsnyNsI%2B%2Feh8IcSYq7SIgIhAKLmXRakOCI0MHxJ%2Fg9ib%2FshQ60co3F010Q7LW4LgHTNKv8DCGQQABoMNjM3NDIzMTgzODA1Igz%2Fm4GYJZUp5EpQ220q3AMqyCcAoBxk6GZ56iI5EyDOZKlfm6JoR%2BVa%2Faul9ZUBVq7fANMTCAqmvBCaqu8BoT90%2BmqelHUg7AEjPU%2BSJjp5wWV321mD3gEzF3kIkE0DavNTDL3xL9eS%2BYMBP047FEOv2iUeWMCy8KzrlBW9ZY%2FF%2FEchHw5s7XPnHY0Ev1eUlzJluknC5hTGNTwVK2ne0O7L5cvkMm641JP5pHo383yVbY8CmUy27PUYqDc1mPUkOZnW6QuV4Xm2oPH3xPDKA%2FDy5CHtcORJCxgZwyGjKJjlNW1djLoAMC1aumX6mXYbl%2FeEGhCL3%2Bkxkw8KEac9ZH1ib7kdscuJffpfuOrQK4PiIGwb6Ue3SJCPLFwcH7uQRLju3TD%2BLYWaQlVjoVcpKC1u5v2zPYdKssn%2FI3Day%2B144eOQDiB92AxPQm7swMtfpfGQjDgkEbmOupxFGu2Eee0Kr4eoDjeoV1zrN4gMnKYNfG01i0Jm2Q3o8wr05Nr1Zxt%2FR6MkS3igvfLq6Mwp1WLXGYOb19JhBJ%2FpHhdRi%2BjxSgJ9O336TGW2cVsIkw1XukjvW2Igzsqt%2FT5ij1ybuxPFmoZtgI1TaKtkw3UiOD4W3ugLvs3C6khtzGxrNbrlSol3T969efhRpTB3LzCW8bnABjqkARTeV3hCDcy6GuRN9nIrb9whNHC4MesmpHUbfUAQ4DISnQCgALNWkSkqcwYrAYnuv9MqfZcUteuEapP5%2BvvYRZ2cgjeIhiloib4t7%2Fkp0Hhgw0OhPKZoqWvSTxxa8dgou%2BQz92MnsS4XTeZ2uDRdgVWq3sOjP7psCcVE%2B5%2B%2BwdkG9n1lDZKl7tF%2F9OEOF77Z9BCeiry%2FVFyeayxvjp1sqwGSRKwh&X-Amz-Signature=6704081003cb9dc9b1aa364c51e34f17b557c7bd5e2fdc0918b6db26264fb77d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
