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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOJSOFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8YmwBLiJKursPDIWMwbSguFCjYjwmY8lPibYA2D8xIQIhANpXTKWedI7a9Wtevel792QhVx1XtnPfB3hCo48inCfWKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr6npqWmODVqHThz0q3APP7Vm%2BOrJ2c9cRV3tfT2hrks66TXafRXcF5GI%2FUzisFEEe1ayJZ824uxmTNwFOagEqrE%2Fw3qG8Tn7UQC%2FOiPipVuC1r3NCYWJdz7e8wimotdW4ClbKT0HC8c1t1e6AM5TDozjODiyvfYokXa5x2Iy%2BUJIRgx9AekTpT8i6X1mftn07ozPDweJ%2FlPbEarZeloue0xlBLGDjLRPEffPYAjhPKTGsHHuqKKH6uW5LCxAF4uF3ct1r%2Fh%2FvUuSSaGnsqEfpC994jw%2BnCF3FcEMPmoAIYDyjy9vQnhLGPcZjKb5Tj0JiZe9WdVMkBArKOBiK%2FHzD%2BXB1k7Kk9PApQ58O7X%2BlqdyI%2FxlVToxdPaJNYvEfHivjx6pbtY0iajf4N9rLgV07ewIZwIDTjpCfAcxYnLU0u99Ori2rDmK7SDQ7PDFaZuFQzUvoWUX%2BFWUXKTPjlk16iQ%2FTANTEaYg9nDjR110miwBNRXnhLBrLriHelHy0DsSYJLGIb4MAkproCVfDB%2FD%2FA3se8t%2BA8Dz2rDX8u1gp92o87abYiCYd3C6QTt%2BXTWP9PzCir7CE1T7TLJAWKSwam%2B83HInRv4oni%2F%2B75aoYa3da6fBEqNxeUEDIJudHNzySIvVZEhcxTNS%2FkTCoxPnABjqkAcACauj8oI%2BOKsUu699kabO8Tj1WzGD1mwXLh56WTvFrH5aAaJhEkjzMdtsu599WtEKH%2FJQUVLj%2FFI9pVurHxYXoW%2Bu4RgD6azx%2FCLP%2FUp3ltTdEPFjygMbqe%2FH7CCwAHOXh9s%2BhebZV8pkM5wMx469Iess0t4%2F8mVR2FunurrYolmXNs7MUPYBid1mcyMBHqAQCHTOZ4LqupDg1OCQh5sKh5CBv&X-Amz-Signature=0c67e3228776859bf2517ba85c63c208cc42477d7f27c9bdfcc50d285db15483&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOJSOFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8YmwBLiJKursPDIWMwbSguFCjYjwmY8lPibYA2D8xIQIhANpXTKWedI7a9Wtevel792QhVx1XtnPfB3hCo48inCfWKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr6npqWmODVqHThz0q3APP7Vm%2BOrJ2c9cRV3tfT2hrks66TXafRXcF5GI%2FUzisFEEe1ayJZ824uxmTNwFOagEqrE%2Fw3qG8Tn7UQC%2FOiPipVuC1r3NCYWJdz7e8wimotdW4ClbKT0HC8c1t1e6AM5TDozjODiyvfYokXa5x2Iy%2BUJIRgx9AekTpT8i6X1mftn07ozPDweJ%2FlPbEarZeloue0xlBLGDjLRPEffPYAjhPKTGsHHuqKKH6uW5LCxAF4uF3ct1r%2Fh%2FvUuSSaGnsqEfpC994jw%2BnCF3FcEMPmoAIYDyjy9vQnhLGPcZjKb5Tj0JiZe9WdVMkBArKOBiK%2FHzD%2BXB1k7Kk9PApQ58O7X%2BlqdyI%2FxlVToxdPaJNYvEfHivjx6pbtY0iajf4N9rLgV07ewIZwIDTjpCfAcxYnLU0u99Ori2rDmK7SDQ7PDFaZuFQzUvoWUX%2BFWUXKTPjlk16iQ%2FTANTEaYg9nDjR110miwBNRXnhLBrLriHelHy0DsSYJLGIb4MAkproCVfDB%2FD%2FA3se8t%2BA8Dz2rDX8u1gp92o87abYiCYd3C6QTt%2BXTWP9PzCir7CE1T7TLJAWKSwam%2B83HInRv4oni%2F%2B75aoYa3da6fBEqNxeUEDIJudHNzySIvVZEhcxTNS%2FkTCoxPnABjqkAcACauj8oI%2BOKsUu699kabO8Tj1WzGD1mwXLh56WTvFrH5aAaJhEkjzMdtsu599WtEKH%2FJQUVLj%2FFI9pVurHxYXoW%2Bu4RgD6azx%2FCLP%2FUp3ltTdEPFjygMbqe%2FH7CCwAHOXh9s%2BhebZV8pkM5wMx469Iess0t4%2F8mVR2FunurrYolmXNs7MUPYBid1mcyMBHqAQCHTOZ4LqupDg1OCQh5sKh5CBv&X-Amz-Signature=43b7aca14ceca558afdae4f4cf4ca2b0df83341727f3f0c36a7460bf367295c1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOJSOFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8YmwBLiJKursPDIWMwbSguFCjYjwmY8lPibYA2D8xIQIhANpXTKWedI7a9Wtevel792QhVx1XtnPfB3hCo48inCfWKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr6npqWmODVqHThz0q3APP7Vm%2BOrJ2c9cRV3tfT2hrks66TXafRXcF5GI%2FUzisFEEe1ayJZ824uxmTNwFOagEqrE%2Fw3qG8Tn7UQC%2FOiPipVuC1r3NCYWJdz7e8wimotdW4ClbKT0HC8c1t1e6AM5TDozjODiyvfYokXa5x2Iy%2BUJIRgx9AekTpT8i6X1mftn07ozPDweJ%2FlPbEarZeloue0xlBLGDjLRPEffPYAjhPKTGsHHuqKKH6uW5LCxAF4uF3ct1r%2Fh%2FvUuSSaGnsqEfpC994jw%2BnCF3FcEMPmoAIYDyjy9vQnhLGPcZjKb5Tj0JiZe9WdVMkBArKOBiK%2FHzD%2BXB1k7Kk9PApQ58O7X%2BlqdyI%2FxlVToxdPaJNYvEfHivjx6pbtY0iajf4N9rLgV07ewIZwIDTjpCfAcxYnLU0u99Ori2rDmK7SDQ7PDFaZuFQzUvoWUX%2BFWUXKTPjlk16iQ%2FTANTEaYg9nDjR110miwBNRXnhLBrLriHelHy0DsSYJLGIb4MAkproCVfDB%2FD%2FA3se8t%2BA8Dz2rDX8u1gp92o87abYiCYd3C6QTt%2BXTWP9PzCir7CE1T7TLJAWKSwam%2B83HInRv4oni%2F%2B75aoYa3da6fBEqNxeUEDIJudHNzySIvVZEhcxTNS%2FkTCoxPnABjqkAcACauj8oI%2BOKsUu699kabO8Tj1WzGD1mwXLh56WTvFrH5aAaJhEkjzMdtsu599WtEKH%2FJQUVLj%2FFI9pVurHxYXoW%2Bu4RgD6azx%2FCLP%2FUp3ltTdEPFjygMbqe%2FH7CCwAHOXh9s%2BhebZV8pkM5wMx469Iess0t4%2F8mVR2FunurrYolmXNs7MUPYBid1mcyMBHqAQCHTOZ4LqupDg1OCQh5sKh5CBv&X-Amz-Signature=042da2fee22f32809c4b27f4b4c010239b3a1aaece400f6fbba3c3d310caaff8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOJSOFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8YmwBLiJKursPDIWMwbSguFCjYjwmY8lPibYA2D8xIQIhANpXTKWedI7a9Wtevel792QhVx1XtnPfB3hCo48inCfWKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr6npqWmODVqHThz0q3APP7Vm%2BOrJ2c9cRV3tfT2hrks66TXafRXcF5GI%2FUzisFEEe1ayJZ824uxmTNwFOagEqrE%2Fw3qG8Tn7UQC%2FOiPipVuC1r3NCYWJdz7e8wimotdW4ClbKT0HC8c1t1e6AM5TDozjODiyvfYokXa5x2Iy%2BUJIRgx9AekTpT8i6X1mftn07ozPDweJ%2FlPbEarZeloue0xlBLGDjLRPEffPYAjhPKTGsHHuqKKH6uW5LCxAF4uF3ct1r%2Fh%2FvUuSSaGnsqEfpC994jw%2BnCF3FcEMPmoAIYDyjy9vQnhLGPcZjKb5Tj0JiZe9WdVMkBArKOBiK%2FHzD%2BXB1k7Kk9PApQ58O7X%2BlqdyI%2FxlVToxdPaJNYvEfHivjx6pbtY0iajf4N9rLgV07ewIZwIDTjpCfAcxYnLU0u99Ori2rDmK7SDQ7PDFaZuFQzUvoWUX%2BFWUXKTPjlk16iQ%2FTANTEaYg9nDjR110miwBNRXnhLBrLriHelHy0DsSYJLGIb4MAkproCVfDB%2FD%2FA3se8t%2BA8Dz2rDX8u1gp92o87abYiCYd3C6QTt%2BXTWP9PzCir7CE1T7TLJAWKSwam%2B83HInRv4oni%2F%2B75aoYa3da6fBEqNxeUEDIJudHNzySIvVZEhcxTNS%2FkTCoxPnABjqkAcACauj8oI%2BOKsUu699kabO8Tj1WzGD1mwXLh56WTvFrH5aAaJhEkjzMdtsu599WtEKH%2FJQUVLj%2FFI9pVurHxYXoW%2Bu4RgD6azx%2FCLP%2FUp3ltTdEPFjygMbqe%2FH7CCwAHOXh9s%2BhebZV8pkM5wMx469Iess0t4%2F8mVR2FunurrYolmXNs7MUPYBid1mcyMBHqAQCHTOZ4LqupDg1OCQh5sKh5CBv&X-Amz-Signature=02b6c7efed63e64045cdf351ecedc04152fdf61b015737f867f6a3d820b66530&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOJSOFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8YmwBLiJKursPDIWMwbSguFCjYjwmY8lPibYA2D8xIQIhANpXTKWedI7a9Wtevel792QhVx1XtnPfB3hCo48inCfWKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr6npqWmODVqHThz0q3APP7Vm%2BOrJ2c9cRV3tfT2hrks66TXafRXcF5GI%2FUzisFEEe1ayJZ824uxmTNwFOagEqrE%2Fw3qG8Tn7UQC%2FOiPipVuC1r3NCYWJdz7e8wimotdW4ClbKT0HC8c1t1e6AM5TDozjODiyvfYokXa5x2Iy%2BUJIRgx9AekTpT8i6X1mftn07ozPDweJ%2FlPbEarZeloue0xlBLGDjLRPEffPYAjhPKTGsHHuqKKH6uW5LCxAF4uF3ct1r%2Fh%2FvUuSSaGnsqEfpC994jw%2BnCF3FcEMPmoAIYDyjy9vQnhLGPcZjKb5Tj0JiZe9WdVMkBArKOBiK%2FHzD%2BXB1k7Kk9PApQ58O7X%2BlqdyI%2FxlVToxdPaJNYvEfHivjx6pbtY0iajf4N9rLgV07ewIZwIDTjpCfAcxYnLU0u99Ori2rDmK7SDQ7PDFaZuFQzUvoWUX%2BFWUXKTPjlk16iQ%2FTANTEaYg9nDjR110miwBNRXnhLBrLriHelHy0DsSYJLGIb4MAkproCVfDB%2FD%2FA3se8t%2BA8Dz2rDX8u1gp92o87abYiCYd3C6QTt%2BXTWP9PzCir7CE1T7TLJAWKSwam%2B83HInRv4oni%2F%2B75aoYa3da6fBEqNxeUEDIJudHNzySIvVZEhcxTNS%2FkTCoxPnABjqkAcACauj8oI%2BOKsUu699kabO8Tj1WzGD1mwXLh56WTvFrH5aAaJhEkjzMdtsu599WtEKH%2FJQUVLj%2FFI9pVurHxYXoW%2Bu4RgD6azx%2FCLP%2FUp3ltTdEPFjygMbqe%2FH7CCwAHOXh9s%2BhebZV8pkM5wMx469Iess0t4%2F8mVR2FunurrYolmXNs7MUPYBid1mcyMBHqAQCHTOZ4LqupDg1OCQh5sKh5CBv&X-Amz-Signature=5a27d72d90fca4f028e10e3ca5cabd6ca6846311f6f9a7b4f4561a1bb68c0718&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
