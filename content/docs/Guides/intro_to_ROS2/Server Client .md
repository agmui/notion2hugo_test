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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6HEOR4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCL28PUW3eSPDZwKv4kuQvChxW1mFLq7T3WTfHxD9NrAiEA7zMZ7cjvaDmRQOSUMeVdVnKO%2FqsV0EDqzWzpxTlto9sqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYGCufJqLkYiD%2FpiyrcAzq7LV20HfP9hbmWr%2FP5grJHkCwBb8jjtLkeDEnrexeO2DygDnE33Q4X58yYrL05cX1Sl1gukLyKzz28Esmpb8vlEajTkVtkBxJFYMf39m8crL8c4bgUiWoZbS9bEB6wiQFy7RomqFVPiD2idBb5AShWh1aGa4j3njdktFw%2B4kQHceMSAsJuoTYTzFW6MB0Py6XsumKc74L%2BrLePlHbo0flkx%2BJI9%2FS49LEZlMkm8KvFj1Bk7TfP%2BO6K8Iu1%2Fam1tczPVbY3%2BCAd%2Bb73ATZvcE774TZfpDxDwBJiiFB%2BekiPEQRntQazTjkMtKosyKXC1HFtAJ4CAXYpGIv0bvaTWKnVdgopoSSGcnr7zxbCkYGhQR5Wakm%2BQm4bzCW3OXpUBqSJCJ63UDo7XB9ffZfxlrNz3fOeA09Tc%2BlRzPfv19Rmm7W4lWNYj%2BwNDw%2FZG%2Fz9i2%2BsuD2%2B%2BgTDI%2BEWO4FbXw8k3Eu3R2u8LeAdsjNt4uqS287eBbFAeepqbGlTdLCMrHfSG59tr6Qmm0w%2FlAQDHJ2moiD9cIQuebyEg%2BevLLFxI8VwpvcGFLSRnrWQiIOrU2wi0Ssndw%2FERmre2fsu5CEmsw7hkoJbQt1mVr99Zsl4yncQ4PXnFQGNV9T9MOG94r0GOqUBYuHt7Yn2B6W0yX3zr3zkG4YKM8KV3%2FCoW1qvGFKWGu5lZ7EydC3mXSGxzOdHI5Ah33ewthMZ6ydBTGGLyGRlR868FCWJ5SK5wIMudHgC1z1SJhSaWmcNEjq%2BL33UFS3YsKm2F%2BTy2fzgNqUjQHFiUj2pybAg8KL3Lo%2BJ5SmuXCgaAbMrJorQTwftJWSObVltRHmuFrLk%2FxVrtGFKSgSMKzGXnWyS&X-Amz-Signature=a5bb9cb0c681aea5a23cb203fbdd2064c0b9dd2fbc628649a60d4827bdda3812&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6HEOR4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCL28PUW3eSPDZwKv4kuQvChxW1mFLq7T3WTfHxD9NrAiEA7zMZ7cjvaDmRQOSUMeVdVnKO%2FqsV0EDqzWzpxTlto9sqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYGCufJqLkYiD%2FpiyrcAzq7LV20HfP9hbmWr%2FP5grJHkCwBb8jjtLkeDEnrexeO2DygDnE33Q4X58yYrL05cX1Sl1gukLyKzz28Esmpb8vlEajTkVtkBxJFYMf39m8crL8c4bgUiWoZbS9bEB6wiQFy7RomqFVPiD2idBb5AShWh1aGa4j3njdktFw%2B4kQHceMSAsJuoTYTzFW6MB0Py6XsumKc74L%2BrLePlHbo0flkx%2BJI9%2FS49LEZlMkm8KvFj1Bk7TfP%2BO6K8Iu1%2Fam1tczPVbY3%2BCAd%2Bb73ATZvcE774TZfpDxDwBJiiFB%2BekiPEQRntQazTjkMtKosyKXC1HFtAJ4CAXYpGIv0bvaTWKnVdgopoSSGcnr7zxbCkYGhQR5Wakm%2BQm4bzCW3OXpUBqSJCJ63UDo7XB9ffZfxlrNz3fOeA09Tc%2BlRzPfv19Rmm7W4lWNYj%2BwNDw%2FZG%2Fz9i2%2BsuD2%2B%2BgTDI%2BEWO4FbXw8k3Eu3R2u8LeAdsjNt4uqS287eBbFAeepqbGlTdLCMrHfSG59tr6Qmm0w%2FlAQDHJ2moiD9cIQuebyEg%2BevLLFxI8VwpvcGFLSRnrWQiIOrU2wi0Ssndw%2FERmre2fsu5CEmsw7hkoJbQt1mVr99Zsl4yncQ4PXnFQGNV9T9MOG94r0GOqUBYuHt7Yn2B6W0yX3zr3zkG4YKM8KV3%2FCoW1qvGFKWGu5lZ7EydC3mXSGxzOdHI5Ah33ewthMZ6ydBTGGLyGRlR868FCWJ5SK5wIMudHgC1z1SJhSaWmcNEjq%2BL33UFS3YsKm2F%2BTy2fzgNqUjQHFiUj2pybAg8KL3Lo%2BJ5SmuXCgaAbMrJorQTwftJWSObVltRHmuFrLk%2FxVrtGFKSgSMKzGXnWyS&X-Amz-Signature=0473b3f397a83fbe6cad176e2e373f0006cfc457305a27cfb6315219b1783af9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6HEOR4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCL28PUW3eSPDZwKv4kuQvChxW1mFLq7T3WTfHxD9NrAiEA7zMZ7cjvaDmRQOSUMeVdVnKO%2FqsV0EDqzWzpxTlto9sqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYGCufJqLkYiD%2FpiyrcAzq7LV20HfP9hbmWr%2FP5grJHkCwBb8jjtLkeDEnrexeO2DygDnE33Q4X58yYrL05cX1Sl1gukLyKzz28Esmpb8vlEajTkVtkBxJFYMf39m8crL8c4bgUiWoZbS9bEB6wiQFy7RomqFVPiD2idBb5AShWh1aGa4j3njdktFw%2B4kQHceMSAsJuoTYTzFW6MB0Py6XsumKc74L%2BrLePlHbo0flkx%2BJI9%2FS49LEZlMkm8KvFj1Bk7TfP%2BO6K8Iu1%2Fam1tczPVbY3%2BCAd%2Bb73ATZvcE774TZfpDxDwBJiiFB%2BekiPEQRntQazTjkMtKosyKXC1HFtAJ4CAXYpGIv0bvaTWKnVdgopoSSGcnr7zxbCkYGhQR5Wakm%2BQm4bzCW3OXpUBqSJCJ63UDo7XB9ffZfxlrNz3fOeA09Tc%2BlRzPfv19Rmm7W4lWNYj%2BwNDw%2FZG%2Fz9i2%2BsuD2%2B%2BgTDI%2BEWO4FbXw8k3Eu3R2u8LeAdsjNt4uqS287eBbFAeepqbGlTdLCMrHfSG59tr6Qmm0w%2FlAQDHJ2moiD9cIQuebyEg%2BevLLFxI8VwpvcGFLSRnrWQiIOrU2wi0Ssndw%2FERmre2fsu5CEmsw7hkoJbQt1mVr99Zsl4yncQ4PXnFQGNV9T9MOG94r0GOqUBYuHt7Yn2B6W0yX3zr3zkG4YKM8KV3%2FCoW1qvGFKWGu5lZ7EydC3mXSGxzOdHI5Ah33ewthMZ6ydBTGGLyGRlR868FCWJ5SK5wIMudHgC1z1SJhSaWmcNEjq%2BL33UFS3YsKm2F%2BTy2fzgNqUjQHFiUj2pybAg8KL3Lo%2BJ5SmuXCgaAbMrJorQTwftJWSObVltRHmuFrLk%2FxVrtGFKSgSMKzGXnWyS&X-Amz-Signature=0ee2fd4a12d0ab471a2da13bf30f1f0d6814686f983e23f60cbcc183840a55a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6HEOR4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCL28PUW3eSPDZwKv4kuQvChxW1mFLq7T3WTfHxD9NrAiEA7zMZ7cjvaDmRQOSUMeVdVnKO%2FqsV0EDqzWzpxTlto9sqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYGCufJqLkYiD%2FpiyrcAzq7LV20HfP9hbmWr%2FP5grJHkCwBb8jjtLkeDEnrexeO2DygDnE33Q4X58yYrL05cX1Sl1gukLyKzz28Esmpb8vlEajTkVtkBxJFYMf39m8crL8c4bgUiWoZbS9bEB6wiQFy7RomqFVPiD2idBb5AShWh1aGa4j3njdktFw%2B4kQHceMSAsJuoTYTzFW6MB0Py6XsumKc74L%2BrLePlHbo0flkx%2BJI9%2FS49LEZlMkm8KvFj1Bk7TfP%2BO6K8Iu1%2Fam1tczPVbY3%2BCAd%2Bb73ATZvcE774TZfpDxDwBJiiFB%2BekiPEQRntQazTjkMtKosyKXC1HFtAJ4CAXYpGIv0bvaTWKnVdgopoSSGcnr7zxbCkYGhQR5Wakm%2BQm4bzCW3OXpUBqSJCJ63UDo7XB9ffZfxlrNz3fOeA09Tc%2BlRzPfv19Rmm7W4lWNYj%2BwNDw%2FZG%2Fz9i2%2BsuD2%2B%2BgTDI%2BEWO4FbXw8k3Eu3R2u8LeAdsjNt4uqS287eBbFAeepqbGlTdLCMrHfSG59tr6Qmm0w%2FlAQDHJ2moiD9cIQuebyEg%2BevLLFxI8VwpvcGFLSRnrWQiIOrU2wi0Ssndw%2FERmre2fsu5CEmsw7hkoJbQt1mVr99Zsl4yncQ4PXnFQGNV9T9MOG94r0GOqUBYuHt7Yn2B6W0yX3zr3zkG4YKM8KV3%2FCoW1qvGFKWGu5lZ7EydC3mXSGxzOdHI5Ah33ewthMZ6ydBTGGLyGRlR868FCWJ5SK5wIMudHgC1z1SJhSaWmcNEjq%2BL33UFS3YsKm2F%2BTy2fzgNqUjQHFiUj2pybAg8KL3Lo%2BJ5SmuXCgaAbMrJorQTwftJWSObVltRHmuFrLk%2FxVrtGFKSgSMKzGXnWyS&X-Amz-Signature=03b5d0fae33fb5251ad58484575ad34e8a7e7caff24cf676360889d8e6c0f009&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6HEOR4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCL28PUW3eSPDZwKv4kuQvChxW1mFLq7T3WTfHxD9NrAiEA7zMZ7cjvaDmRQOSUMeVdVnKO%2FqsV0EDqzWzpxTlto9sqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYGCufJqLkYiD%2FpiyrcAzq7LV20HfP9hbmWr%2FP5grJHkCwBb8jjtLkeDEnrexeO2DygDnE33Q4X58yYrL05cX1Sl1gukLyKzz28Esmpb8vlEajTkVtkBxJFYMf39m8crL8c4bgUiWoZbS9bEB6wiQFy7RomqFVPiD2idBb5AShWh1aGa4j3njdktFw%2B4kQHceMSAsJuoTYTzFW6MB0Py6XsumKc74L%2BrLePlHbo0flkx%2BJI9%2FS49LEZlMkm8KvFj1Bk7TfP%2BO6K8Iu1%2Fam1tczPVbY3%2BCAd%2Bb73ATZvcE774TZfpDxDwBJiiFB%2BekiPEQRntQazTjkMtKosyKXC1HFtAJ4CAXYpGIv0bvaTWKnVdgopoSSGcnr7zxbCkYGhQR5Wakm%2BQm4bzCW3OXpUBqSJCJ63UDo7XB9ffZfxlrNz3fOeA09Tc%2BlRzPfv19Rmm7W4lWNYj%2BwNDw%2FZG%2Fz9i2%2BsuD2%2B%2BgTDI%2BEWO4FbXw8k3Eu3R2u8LeAdsjNt4uqS287eBbFAeepqbGlTdLCMrHfSG59tr6Qmm0w%2FlAQDHJ2moiD9cIQuebyEg%2BevLLFxI8VwpvcGFLSRnrWQiIOrU2wi0Ssndw%2FERmre2fsu5CEmsw7hkoJbQt1mVr99Zsl4yncQ4PXnFQGNV9T9MOG94r0GOqUBYuHt7Yn2B6W0yX3zr3zkG4YKM8KV3%2FCoW1qvGFKWGu5lZ7EydC3mXSGxzOdHI5Ah33ewthMZ6ydBTGGLyGRlR868FCWJ5SK5wIMudHgC1z1SJhSaWmcNEjq%2BL33UFS3YsKm2F%2BTy2fzgNqUjQHFiUj2pybAg8KL3Lo%2BJ5SmuXCgaAbMrJorQTwftJWSObVltRHmuFrLk%2FxVrtGFKSgSMKzGXnWyS&X-Amz-Signature=8d0f2771dc91677cd9d44295527a8a1f09b37aee92d729854932597cceb683ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
