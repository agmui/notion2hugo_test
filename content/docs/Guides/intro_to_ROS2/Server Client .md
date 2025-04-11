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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZH6VARB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGuKXJTB1zEmtE30ZVkqyMjl8Pk%2BRDl0QfQxEMYanPZIAiAFEPULdA0gT8%2BYx3yf3AWmW0f4Ev%2BqZsKg699S05l%2BxSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYVasHrnpFmKDTXxLKtwDjTVidgPXXs%2FavBPgAKGWIXCCVHy6vNdEo15iMfLGcHqAxrT8Y%2F88QZ0w9chHELzUBqpulgjR9Iz1auxRr7v64LsZhEnqXBaxHy%2BXq8dgzihgwLHZALivPmepPAj5Y1LSK4WXBRum7ReiY79Ko5IiTyP70u%2FnFxbNGfSepFlJh67pzMyHhHoECU6h99nxaSoMo%2F7dkWalXM3LIDVf7ZxJt3MiIeGeTDArVVMMfOX87c1X4w%2FcKlvSKyRMOIaajZf%2B6cQJx%2Fe6quVi7pySaCM3X5sbr3A1TlW3aNzbjqJGxi9zpegi9vcL5A%2Bp%2FQYpBSmPVvPvA%2B40oKAGlxqCUjpl1d94FmNykBQCK5N4cCopa3CFrP4ecxZqgBkGrgOpEjmEAjrIUb4hxU5GQukV02pKWIoqvyujax8gg%2BMQjvc91B2ZLDyJxjPMef45%2B5QwcSI7NLyHRac%2B71EkP9wB4HejC92aYynwGeQPf2k2d%2BvrJ4SJIs87r8FN7HgM4rWKEcEFiA%2FOF1qF0EkLOGVGj%2FeCinTnSZgkVcLoCh%2BANYn90dMy6cvEcCCLtvRQNrQ%2F%2F15GarrHPN3vrz3dMMD1Z%2Bjbw0vVL5PXwywM%2BJC%2FYpNY5mWJmGCEwZ8MJ4WrsQgwxMvjvwY6pgEfVVSWw7GJrYm8IEH7bkG9hwU1p0RzbDHGFKP%2FmGzwIkpc0lcqSwD8b%2FcwJIA9vUQ%2BDWhjnBr81zPxNa%2BebZcaviOSMT%2FaVJpTFdEGKOQvb266Il0G0Ajw7XIy3gMuBe99aJggf4o%2B72GTdwTR%2BfCwn1JNOoXjMLJ%2BgJYSFFVTObiVHBB4Q8UIgPdYiAUY%2BY4nr2bagHyZxYoQ4kBypMlzOKtLt14w&X-Amz-Signature=7477ad2d33f9bcb6ad4ade93358c0901d1c121bd512febfa57eede21f84c832e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZH6VARB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGuKXJTB1zEmtE30ZVkqyMjl8Pk%2BRDl0QfQxEMYanPZIAiAFEPULdA0gT8%2BYx3yf3AWmW0f4Ev%2BqZsKg699S05l%2BxSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYVasHrnpFmKDTXxLKtwDjTVidgPXXs%2FavBPgAKGWIXCCVHy6vNdEo15iMfLGcHqAxrT8Y%2F88QZ0w9chHELzUBqpulgjR9Iz1auxRr7v64LsZhEnqXBaxHy%2BXq8dgzihgwLHZALivPmepPAj5Y1LSK4WXBRum7ReiY79Ko5IiTyP70u%2FnFxbNGfSepFlJh67pzMyHhHoECU6h99nxaSoMo%2F7dkWalXM3LIDVf7ZxJt3MiIeGeTDArVVMMfOX87c1X4w%2FcKlvSKyRMOIaajZf%2B6cQJx%2Fe6quVi7pySaCM3X5sbr3A1TlW3aNzbjqJGxi9zpegi9vcL5A%2Bp%2FQYpBSmPVvPvA%2B40oKAGlxqCUjpl1d94FmNykBQCK5N4cCopa3CFrP4ecxZqgBkGrgOpEjmEAjrIUb4hxU5GQukV02pKWIoqvyujax8gg%2BMQjvc91B2ZLDyJxjPMef45%2B5QwcSI7NLyHRac%2B71EkP9wB4HejC92aYynwGeQPf2k2d%2BvrJ4SJIs87r8FN7HgM4rWKEcEFiA%2FOF1qF0EkLOGVGj%2FeCinTnSZgkVcLoCh%2BANYn90dMy6cvEcCCLtvRQNrQ%2F%2F15GarrHPN3vrz3dMMD1Z%2Bjbw0vVL5PXwywM%2BJC%2FYpNY5mWJmGCEwZ8MJ4WrsQgwxMvjvwY6pgEfVVSWw7GJrYm8IEH7bkG9hwU1p0RzbDHGFKP%2FmGzwIkpc0lcqSwD8b%2FcwJIA9vUQ%2BDWhjnBr81zPxNa%2BebZcaviOSMT%2FaVJpTFdEGKOQvb266Il0G0Ajw7XIy3gMuBe99aJggf4o%2B72GTdwTR%2BfCwn1JNOoXjMLJ%2BgJYSFFVTObiVHBB4Q8UIgPdYiAUY%2BY4nr2bagHyZxYoQ4kBypMlzOKtLt14w&X-Amz-Signature=691d3763ad4d9d4608f5522e9668a3bc8832c86737f0cb071c16af3cc23a9bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZH6VARB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGuKXJTB1zEmtE30ZVkqyMjl8Pk%2BRDl0QfQxEMYanPZIAiAFEPULdA0gT8%2BYx3yf3AWmW0f4Ev%2BqZsKg699S05l%2BxSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYVasHrnpFmKDTXxLKtwDjTVidgPXXs%2FavBPgAKGWIXCCVHy6vNdEo15iMfLGcHqAxrT8Y%2F88QZ0w9chHELzUBqpulgjR9Iz1auxRr7v64LsZhEnqXBaxHy%2BXq8dgzihgwLHZALivPmepPAj5Y1LSK4WXBRum7ReiY79Ko5IiTyP70u%2FnFxbNGfSepFlJh67pzMyHhHoECU6h99nxaSoMo%2F7dkWalXM3LIDVf7ZxJt3MiIeGeTDArVVMMfOX87c1X4w%2FcKlvSKyRMOIaajZf%2B6cQJx%2Fe6quVi7pySaCM3X5sbr3A1TlW3aNzbjqJGxi9zpegi9vcL5A%2Bp%2FQYpBSmPVvPvA%2B40oKAGlxqCUjpl1d94FmNykBQCK5N4cCopa3CFrP4ecxZqgBkGrgOpEjmEAjrIUb4hxU5GQukV02pKWIoqvyujax8gg%2BMQjvc91B2ZLDyJxjPMef45%2B5QwcSI7NLyHRac%2B71EkP9wB4HejC92aYynwGeQPf2k2d%2BvrJ4SJIs87r8FN7HgM4rWKEcEFiA%2FOF1qF0EkLOGVGj%2FeCinTnSZgkVcLoCh%2BANYn90dMy6cvEcCCLtvRQNrQ%2F%2F15GarrHPN3vrz3dMMD1Z%2Bjbw0vVL5PXwywM%2BJC%2FYpNY5mWJmGCEwZ8MJ4WrsQgwxMvjvwY6pgEfVVSWw7GJrYm8IEH7bkG9hwU1p0RzbDHGFKP%2FmGzwIkpc0lcqSwD8b%2FcwJIA9vUQ%2BDWhjnBr81zPxNa%2BebZcaviOSMT%2FaVJpTFdEGKOQvb266Il0G0Ajw7XIy3gMuBe99aJggf4o%2B72GTdwTR%2BfCwn1JNOoXjMLJ%2BgJYSFFVTObiVHBB4Q8UIgPdYiAUY%2BY4nr2bagHyZxYoQ4kBypMlzOKtLt14w&X-Amz-Signature=c535023dedfa2f7708a421edb43371576c59f483e1fea4c2758967d3bc53e8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZH6VARB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGuKXJTB1zEmtE30ZVkqyMjl8Pk%2BRDl0QfQxEMYanPZIAiAFEPULdA0gT8%2BYx3yf3AWmW0f4Ev%2BqZsKg699S05l%2BxSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYVasHrnpFmKDTXxLKtwDjTVidgPXXs%2FavBPgAKGWIXCCVHy6vNdEo15iMfLGcHqAxrT8Y%2F88QZ0w9chHELzUBqpulgjR9Iz1auxRr7v64LsZhEnqXBaxHy%2BXq8dgzihgwLHZALivPmepPAj5Y1LSK4WXBRum7ReiY79Ko5IiTyP70u%2FnFxbNGfSepFlJh67pzMyHhHoECU6h99nxaSoMo%2F7dkWalXM3LIDVf7ZxJt3MiIeGeTDArVVMMfOX87c1X4w%2FcKlvSKyRMOIaajZf%2B6cQJx%2Fe6quVi7pySaCM3X5sbr3A1TlW3aNzbjqJGxi9zpegi9vcL5A%2Bp%2FQYpBSmPVvPvA%2B40oKAGlxqCUjpl1d94FmNykBQCK5N4cCopa3CFrP4ecxZqgBkGrgOpEjmEAjrIUb4hxU5GQukV02pKWIoqvyujax8gg%2BMQjvc91B2ZLDyJxjPMef45%2B5QwcSI7NLyHRac%2B71EkP9wB4HejC92aYynwGeQPf2k2d%2BvrJ4SJIs87r8FN7HgM4rWKEcEFiA%2FOF1qF0EkLOGVGj%2FeCinTnSZgkVcLoCh%2BANYn90dMy6cvEcCCLtvRQNrQ%2F%2F15GarrHPN3vrz3dMMD1Z%2Bjbw0vVL5PXwywM%2BJC%2FYpNY5mWJmGCEwZ8MJ4WrsQgwxMvjvwY6pgEfVVSWw7GJrYm8IEH7bkG9hwU1p0RzbDHGFKP%2FmGzwIkpc0lcqSwD8b%2FcwJIA9vUQ%2BDWhjnBr81zPxNa%2BebZcaviOSMT%2FaVJpTFdEGKOQvb266Il0G0Ajw7XIy3gMuBe99aJggf4o%2B72GTdwTR%2BfCwn1JNOoXjMLJ%2BgJYSFFVTObiVHBB4Q8UIgPdYiAUY%2BY4nr2bagHyZxYoQ4kBypMlzOKtLt14w&X-Amz-Signature=230c51b2cd49cab80854eac6b82af8e320ca67322d75380e11b7496bdb8ab46e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZH6VARB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGuKXJTB1zEmtE30ZVkqyMjl8Pk%2BRDl0QfQxEMYanPZIAiAFEPULdA0gT8%2BYx3yf3AWmW0f4Ev%2BqZsKg699S05l%2BxSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYVasHrnpFmKDTXxLKtwDjTVidgPXXs%2FavBPgAKGWIXCCVHy6vNdEo15iMfLGcHqAxrT8Y%2F88QZ0w9chHELzUBqpulgjR9Iz1auxRr7v64LsZhEnqXBaxHy%2BXq8dgzihgwLHZALivPmepPAj5Y1LSK4WXBRum7ReiY79Ko5IiTyP70u%2FnFxbNGfSepFlJh67pzMyHhHoECU6h99nxaSoMo%2F7dkWalXM3LIDVf7ZxJt3MiIeGeTDArVVMMfOX87c1X4w%2FcKlvSKyRMOIaajZf%2B6cQJx%2Fe6quVi7pySaCM3X5sbr3A1TlW3aNzbjqJGxi9zpegi9vcL5A%2Bp%2FQYpBSmPVvPvA%2B40oKAGlxqCUjpl1d94FmNykBQCK5N4cCopa3CFrP4ecxZqgBkGrgOpEjmEAjrIUb4hxU5GQukV02pKWIoqvyujax8gg%2BMQjvc91B2ZLDyJxjPMef45%2B5QwcSI7NLyHRac%2B71EkP9wB4HejC92aYynwGeQPf2k2d%2BvrJ4SJIs87r8FN7HgM4rWKEcEFiA%2FOF1qF0EkLOGVGj%2FeCinTnSZgkVcLoCh%2BANYn90dMy6cvEcCCLtvRQNrQ%2F%2F15GarrHPN3vrz3dMMD1Z%2Bjbw0vVL5PXwywM%2BJC%2FYpNY5mWJmGCEwZ8MJ4WrsQgwxMvjvwY6pgEfVVSWw7GJrYm8IEH7bkG9hwU1p0RzbDHGFKP%2FmGzwIkpc0lcqSwD8b%2FcwJIA9vUQ%2BDWhjnBr81zPxNa%2BebZcaviOSMT%2FaVJpTFdEGKOQvb266Il0G0Ajw7XIy3gMuBe99aJggf4o%2B72GTdwTR%2BfCwn1JNOoXjMLJ%2BgJYSFFVTObiVHBB4Q8UIgPdYiAUY%2BY4nr2bagHyZxYoQ4kBypMlzOKtLt14w&X-Amz-Signature=3563f01cad1de1100f0b532e28f4ee385c647f1a90106b269fc4b59d18a2af7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
