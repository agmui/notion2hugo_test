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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTZNLTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFGiMTPnnwbX%2F4QtZ2b40Po2CXxntefGx01uflaUWF4jAiACsHpWWTaErVbCHdCZSZlK5uanIyS566RaFjmJpcTmpiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgsYYG%2BLXX1pIO5pKtwDwffRO4YdSTKFhimNdN3eqlwSeRhVAYg8yZJ7QtYW9FLI9HIS7evAQS5WdX0EqNH3LM5IBpTZxP6Ncskf%2Fz3DvuFOmGIEPlt3MQv7dRZJ1HUwIZ2vferuiJGYknAJPHy5J8LX0xq6DtX14CPTg%2ByQZjxf84kq018LhTNwbIzS33FlOJlvl6s1A%2BFGBTu2cBkYCPDFdPQIoSv5xMkJi0z0RR8Un9GeA83OZNgnlVo5uGXWn2oKUsXKSbNG1%2BGv2Dg8d0pSUffbZaIInxNsgLwsw7l1kTumz0H0bcHwQXZNE1uB7jF5MMQ5qpriMtxwvLPOsAP%2BE%2Bp%2BSyqIUcoduzJmks%2Bub%2BdcwyVzCVsHVChlrEu6VcEYirDzkynwqaEI210h4YgKjX7VKcQ0NqtHotrVr2QlPCn%2F3wy5%2FwnleDsGgf1y%2FyXoMFHwvZmskWztSk3np4wBF%2FGcgX1cmjh4YFWhjUidARWAPFJiYy2vgXu22X5fSh9pIAhO%2FCusdsQCKCZUx%2FF748n39nsv0Tiw2Op3Bknzak6oOKCuTTHUdCPtcLJIXQMXDa1f668nc8rJhSHc1mofbjvGSTEPLjC1s6DYc56827CeHcKsg%2F8%2FvGXyGnRmOyBPPGUOVT8kG%2Fwwm62AvwY6pgGTm4j3xADvFroteHuriP128%2B3AbcsJopVXCO66ERZaNnGfxWDJ6PiaYYnhX0G5gFZLOxgXGhfdFMDKeImBj1S7D5Y2WuvPuNdf5mW1goBwypz9HEtmIvNw1baXlcysZK5Q00jCplO5N9X5WwIPIXm%2FyH703PaCV4cR2O0yxF3CDyIwSzw3HhfbymMZtYtdZgtsblwV2ZfAeltnbbIYxM5mnLHAJewq&X-Amz-Signature=f15e8890e86292fd5380e081c8fd19532679d273b4334d993d8c9bbb56ecfffa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTZNLTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFGiMTPnnwbX%2F4QtZ2b40Po2CXxntefGx01uflaUWF4jAiACsHpWWTaErVbCHdCZSZlK5uanIyS566RaFjmJpcTmpiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgsYYG%2BLXX1pIO5pKtwDwffRO4YdSTKFhimNdN3eqlwSeRhVAYg8yZJ7QtYW9FLI9HIS7evAQS5WdX0EqNH3LM5IBpTZxP6Ncskf%2Fz3DvuFOmGIEPlt3MQv7dRZJ1HUwIZ2vferuiJGYknAJPHy5J8LX0xq6DtX14CPTg%2ByQZjxf84kq018LhTNwbIzS33FlOJlvl6s1A%2BFGBTu2cBkYCPDFdPQIoSv5xMkJi0z0RR8Un9GeA83OZNgnlVo5uGXWn2oKUsXKSbNG1%2BGv2Dg8d0pSUffbZaIInxNsgLwsw7l1kTumz0H0bcHwQXZNE1uB7jF5MMQ5qpriMtxwvLPOsAP%2BE%2Bp%2BSyqIUcoduzJmks%2Bub%2BdcwyVzCVsHVChlrEu6VcEYirDzkynwqaEI210h4YgKjX7VKcQ0NqtHotrVr2QlPCn%2F3wy5%2FwnleDsGgf1y%2FyXoMFHwvZmskWztSk3np4wBF%2FGcgX1cmjh4YFWhjUidARWAPFJiYy2vgXu22X5fSh9pIAhO%2FCusdsQCKCZUx%2FF748n39nsv0Tiw2Op3Bknzak6oOKCuTTHUdCPtcLJIXQMXDa1f668nc8rJhSHc1mofbjvGSTEPLjC1s6DYc56827CeHcKsg%2F8%2FvGXyGnRmOyBPPGUOVT8kG%2Fwwm62AvwY6pgGTm4j3xADvFroteHuriP128%2B3AbcsJopVXCO66ERZaNnGfxWDJ6PiaYYnhX0G5gFZLOxgXGhfdFMDKeImBj1S7D5Y2WuvPuNdf5mW1goBwypz9HEtmIvNw1baXlcysZK5Q00jCplO5N9X5WwIPIXm%2FyH703PaCV4cR2O0yxF3CDyIwSzw3HhfbymMZtYtdZgtsblwV2ZfAeltnbbIYxM5mnLHAJewq&X-Amz-Signature=8f4269c23b791b9c76ac02a41b041ee813e99acacd0a95326bc158356266b2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTZNLTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFGiMTPnnwbX%2F4QtZ2b40Po2CXxntefGx01uflaUWF4jAiACsHpWWTaErVbCHdCZSZlK5uanIyS566RaFjmJpcTmpiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgsYYG%2BLXX1pIO5pKtwDwffRO4YdSTKFhimNdN3eqlwSeRhVAYg8yZJ7QtYW9FLI9HIS7evAQS5WdX0EqNH3LM5IBpTZxP6Ncskf%2Fz3DvuFOmGIEPlt3MQv7dRZJ1HUwIZ2vferuiJGYknAJPHy5J8LX0xq6DtX14CPTg%2ByQZjxf84kq018LhTNwbIzS33FlOJlvl6s1A%2BFGBTu2cBkYCPDFdPQIoSv5xMkJi0z0RR8Un9GeA83OZNgnlVo5uGXWn2oKUsXKSbNG1%2BGv2Dg8d0pSUffbZaIInxNsgLwsw7l1kTumz0H0bcHwQXZNE1uB7jF5MMQ5qpriMtxwvLPOsAP%2BE%2Bp%2BSyqIUcoduzJmks%2Bub%2BdcwyVzCVsHVChlrEu6VcEYirDzkynwqaEI210h4YgKjX7VKcQ0NqtHotrVr2QlPCn%2F3wy5%2FwnleDsGgf1y%2FyXoMFHwvZmskWztSk3np4wBF%2FGcgX1cmjh4YFWhjUidARWAPFJiYy2vgXu22X5fSh9pIAhO%2FCusdsQCKCZUx%2FF748n39nsv0Tiw2Op3Bknzak6oOKCuTTHUdCPtcLJIXQMXDa1f668nc8rJhSHc1mofbjvGSTEPLjC1s6DYc56827CeHcKsg%2F8%2FvGXyGnRmOyBPPGUOVT8kG%2Fwwm62AvwY6pgGTm4j3xADvFroteHuriP128%2B3AbcsJopVXCO66ERZaNnGfxWDJ6PiaYYnhX0G5gFZLOxgXGhfdFMDKeImBj1S7D5Y2WuvPuNdf5mW1goBwypz9HEtmIvNw1baXlcysZK5Q00jCplO5N9X5WwIPIXm%2FyH703PaCV4cR2O0yxF3CDyIwSzw3HhfbymMZtYtdZgtsblwV2ZfAeltnbbIYxM5mnLHAJewq&X-Amz-Signature=dccb2968f9c96137227dc6e20c8a727ef1858abf7aa412f3f347fed9683b76a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTZNLTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFGiMTPnnwbX%2F4QtZ2b40Po2CXxntefGx01uflaUWF4jAiACsHpWWTaErVbCHdCZSZlK5uanIyS566RaFjmJpcTmpiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgsYYG%2BLXX1pIO5pKtwDwffRO4YdSTKFhimNdN3eqlwSeRhVAYg8yZJ7QtYW9FLI9HIS7evAQS5WdX0EqNH3LM5IBpTZxP6Ncskf%2Fz3DvuFOmGIEPlt3MQv7dRZJ1HUwIZ2vferuiJGYknAJPHy5J8LX0xq6DtX14CPTg%2ByQZjxf84kq018LhTNwbIzS33FlOJlvl6s1A%2BFGBTu2cBkYCPDFdPQIoSv5xMkJi0z0RR8Un9GeA83OZNgnlVo5uGXWn2oKUsXKSbNG1%2BGv2Dg8d0pSUffbZaIInxNsgLwsw7l1kTumz0H0bcHwQXZNE1uB7jF5MMQ5qpriMtxwvLPOsAP%2BE%2Bp%2BSyqIUcoduzJmks%2Bub%2BdcwyVzCVsHVChlrEu6VcEYirDzkynwqaEI210h4YgKjX7VKcQ0NqtHotrVr2QlPCn%2F3wy5%2FwnleDsGgf1y%2FyXoMFHwvZmskWztSk3np4wBF%2FGcgX1cmjh4YFWhjUidARWAPFJiYy2vgXu22X5fSh9pIAhO%2FCusdsQCKCZUx%2FF748n39nsv0Tiw2Op3Bknzak6oOKCuTTHUdCPtcLJIXQMXDa1f668nc8rJhSHc1mofbjvGSTEPLjC1s6DYc56827CeHcKsg%2F8%2FvGXyGnRmOyBPPGUOVT8kG%2Fwwm62AvwY6pgGTm4j3xADvFroteHuriP128%2B3AbcsJopVXCO66ERZaNnGfxWDJ6PiaYYnhX0G5gFZLOxgXGhfdFMDKeImBj1S7D5Y2WuvPuNdf5mW1goBwypz9HEtmIvNw1baXlcysZK5Q00jCplO5N9X5WwIPIXm%2FyH703PaCV4cR2O0yxF3CDyIwSzw3HhfbymMZtYtdZgtsblwV2ZfAeltnbbIYxM5mnLHAJewq&X-Amz-Signature=6d94a5460044fcd3ca388b2498b184ad8b601fc7f669b64a2a922c6af1e8e990&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTZNLTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFGiMTPnnwbX%2F4QtZ2b40Po2CXxntefGx01uflaUWF4jAiACsHpWWTaErVbCHdCZSZlK5uanIyS566RaFjmJpcTmpiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgsYYG%2BLXX1pIO5pKtwDwffRO4YdSTKFhimNdN3eqlwSeRhVAYg8yZJ7QtYW9FLI9HIS7evAQS5WdX0EqNH3LM5IBpTZxP6Ncskf%2Fz3DvuFOmGIEPlt3MQv7dRZJ1HUwIZ2vferuiJGYknAJPHy5J8LX0xq6DtX14CPTg%2ByQZjxf84kq018LhTNwbIzS33FlOJlvl6s1A%2BFGBTu2cBkYCPDFdPQIoSv5xMkJi0z0RR8Un9GeA83OZNgnlVo5uGXWn2oKUsXKSbNG1%2BGv2Dg8d0pSUffbZaIInxNsgLwsw7l1kTumz0H0bcHwQXZNE1uB7jF5MMQ5qpriMtxwvLPOsAP%2BE%2Bp%2BSyqIUcoduzJmks%2Bub%2BdcwyVzCVsHVChlrEu6VcEYirDzkynwqaEI210h4YgKjX7VKcQ0NqtHotrVr2QlPCn%2F3wy5%2FwnleDsGgf1y%2FyXoMFHwvZmskWztSk3np4wBF%2FGcgX1cmjh4YFWhjUidARWAPFJiYy2vgXu22X5fSh9pIAhO%2FCusdsQCKCZUx%2FF748n39nsv0Tiw2Op3Bknzak6oOKCuTTHUdCPtcLJIXQMXDa1f668nc8rJhSHc1mofbjvGSTEPLjC1s6DYc56827CeHcKsg%2F8%2FvGXyGnRmOyBPPGUOVT8kG%2Fwwm62AvwY6pgGTm4j3xADvFroteHuriP128%2B3AbcsJopVXCO66ERZaNnGfxWDJ6PiaYYnhX0G5gFZLOxgXGhfdFMDKeImBj1S7D5Y2WuvPuNdf5mW1goBwypz9HEtmIvNw1baXlcysZK5Q00jCplO5N9X5WwIPIXm%2FyH703PaCV4cR2O0yxF3CDyIwSzw3HhfbymMZtYtdZgtsblwV2ZfAeltnbbIYxM5mnLHAJewq&X-Amz-Signature=07018ec4b9507f8422972721b63cce9caa5bae3937589ddec7cd362b4bf4a7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
