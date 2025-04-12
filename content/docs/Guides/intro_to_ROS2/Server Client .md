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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYUVXVM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG1oWD6JFN8TU%2BsObvG%2FzPVZDv9kpyDdFs45WUPlxhMZAiEArIhFAugHTfqgxS9L8K9ML%2FHmVvnyxb3gLIW9tNkE68YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqIvBjUbE2TGd%2BtWyrcA7X7hwSUtXm6puOfLWDaHIhmuI%2B1vo33d9Zyj6Iy2yjtMzV5KoXsx3CUbOuS4ho5SUBuUIqDF4l%2BeUheTJ4XxhTq9av0E1ilEqEy1K4ChU56ZI0o87NmHR3MgX5zXmTr642HZjrSVVF4Km2qDq%2Fn1q1cwWqgSDXZFP3tRgCaucTFrVg0HzomkZUIsBEmYEYG7e%2F81ixnZ0SGEKQRoIA36GtROaLYIp%2FP9vX9bXmlnRSRCiqJw3S%2Fxf9%2FUVBuJUEB9lcBUyPSrVPLXO268LjES770imLuANbd6%2BiyFD8X8ukA5dtbv1728D7riT40lIDIEiLnoa6RKIr4rsM75Wb7W%2B%2FHfo2wfcCjujuGsFfnMFKfc34eY25GdAeJGdcMhGuamfvF%2FMSqwoy%2BfQitJiePkhuBapaYy1SHkkLbzg%2FCEY54JsTYwRcn4ra%2BUSivN6IJAmkNcXLnsxdQCGpa386PtCG0iR%2FGWn9c5NltGxus2kDzmmsSnpiBe6alwHZbHqjAkmcXERFNBYMrBKbcEDI6zKKJbWMM%2Bhel1dmjI%2F4Py8evhrLmxSFIwsz7rO%2BcV7Z3Au1RQjDEkS%2BCDKLHlTOGMp7vQrDTeBXquPIJEy%2BjN4dx%2BxAIoZd7DKRSDnDdMMDE6b8GOqUBM%2BSXo1uQPjcU7RWx%2F97CUVDqkMKOOSckwWebn6AyHPohGVSwO%2FLkd8K%2FGyzz2%2FDiTv8J0TFOAIhBgLaNFv8bLvHz0PTsrdSdnM4BI4oQMYKsa1YS4%2BR%2FiKdVhE3bR46HSfrzXm57fMJP3Q%2BhCglgWRTLcKPHeNPMFEeXYuv2q3%2FPYWxGmgUng0sLdJYFde%2B%2B%2BZEVNmXraoS6tvarY3XU%2BGR2rBTa&X-Amz-Signature=b50f835c56933547606e3a3b3c9294f1391f3f4d34ceb81d308160a9f37781a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYUVXVM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG1oWD6JFN8TU%2BsObvG%2FzPVZDv9kpyDdFs45WUPlxhMZAiEArIhFAugHTfqgxS9L8K9ML%2FHmVvnyxb3gLIW9tNkE68YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqIvBjUbE2TGd%2BtWyrcA7X7hwSUtXm6puOfLWDaHIhmuI%2B1vo33d9Zyj6Iy2yjtMzV5KoXsx3CUbOuS4ho5SUBuUIqDF4l%2BeUheTJ4XxhTq9av0E1ilEqEy1K4ChU56ZI0o87NmHR3MgX5zXmTr642HZjrSVVF4Km2qDq%2Fn1q1cwWqgSDXZFP3tRgCaucTFrVg0HzomkZUIsBEmYEYG7e%2F81ixnZ0SGEKQRoIA36GtROaLYIp%2FP9vX9bXmlnRSRCiqJw3S%2Fxf9%2FUVBuJUEB9lcBUyPSrVPLXO268LjES770imLuANbd6%2BiyFD8X8ukA5dtbv1728D7riT40lIDIEiLnoa6RKIr4rsM75Wb7W%2B%2FHfo2wfcCjujuGsFfnMFKfc34eY25GdAeJGdcMhGuamfvF%2FMSqwoy%2BfQitJiePkhuBapaYy1SHkkLbzg%2FCEY54JsTYwRcn4ra%2BUSivN6IJAmkNcXLnsxdQCGpa386PtCG0iR%2FGWn9c5NltGxus2kDzmmsSnpiBe6alwHZbHqjAkmcXERFNBYMrBKbcEDI6zKKJbWMM%2Bhel1dmjI%2F4Py8evhrLmxSFIwsz7rO%2BcV7Z3Au1RQjDEkS%2BCDKLHlTOGMp7vQrDTeBXquPIJEy%2BjN4dx%2BxAIoZd7DKRSDnDdMMDE6b8GOqUBM%2BSXo1uQPjcU7RWx%2F97CUVDqkMKOOSckwWebn6AyHPohGVSwO%2FLkd8K%2FGyzz2%2FDiTv8J0TFOAIhBgLaNFv8bLvHz0PTsrdSdnM4BI4oQMYKsa1YS4%2BR%2FiKdVhE3bR46HSfrzXm57fMJP3Q%2BhCglgWRTLcKPHeNPMFEeXYuv2q3%2FPYWxGmgUng0sLdJYFde%2B%2B%2BZEVNmXraoS6tvarY3XU%2BGR2rBTa&X-Amz-Signature=6ea50a55f1e77f6cabaca674491afa2b365de28e8f242fd888cffd8cc6c00903&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYUVXVM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG1oWD6JFN8TU%2BsObvG%2FzPVZDv9kpyDdFs45WUPlxhMZAiEArIhFAugHTfqgxS9L8K9ML%2FHmVvnyxb3gLIW9tNkE68YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqIvBjUbE2TGd%2BtWyrcA7X7hwSUtXm6puOfLWDaHIhmuI%2B1vo33d9Zyj6Iy2yjtMzV5KoXsx3CUbOuS4ho5SUBuUIqDF4l%2BeUheTJ4XxhTq9av0E1ilEqEy1K4ChU56ZI0o87NmHR3MgX5zXmTr642HZjrSVVF4Km2qDq%2Fn1q1cwWqgSDXZFP3tRgCaucTFrVg0HzomkZUIsBEmYEYG7e%2F81ixnZ0SGEKQRoIA36GtROaLYIp%2FP9vX9bXmlnRSRCiqJw3S%2Fxf9%2FUVBuJUEB9lcBUyPSrVPLXO268LjES770imLuANbd6%2BiyFD8X8ukA5dtbv1728D7riT40lIDIEiLnoa6RKIr4rsM75Wb7W%2B%2FHfo2wfcCjujuGsFfnMFKfc34eY25GdAeJGdcMhGuamfvF%2FMSqwoy%2BfQitJiePkhuBapaYy1SHkkLbzg%2FCEY54JsTYwRcn4ra%2BUSivN6IJAmkNcXLnsxdQCGpa386PtCG0iR%2FGWn9c5NltGxus2kDzmmsSnpiBe6alwHZbHqjAkmcXERFNBYMrBKbcEDI6zKKJbWMM%2Bhel1dmjI%2F4Py8evhrLmxSFIwsz7rO%2BcV7Z3Au1RQjDEkS%2BCDKLHlTOGMp7vQrDTeBXquPIJEy%2BjN4dx%2BxAIoZd7DKRSDnDdMMDE6b8GOqUBM%2BSXo1uQPjcU7RWx%2F97CUVDqkMKOOSckwWebn6AyHPohGVSwO%2FLkd8K%2FGyzz2%2FDiTv8J0TFOAIhBgLaNFv8bLvHz0PTsrdSdnM4BI4oQMYKsa1YS4%2BR%2FiKdVhE3bR46HSfrzXm57fMJP3Q%2BhCglgWRTLcKPHeNPMFEeXYuv2q3%2FPYWxGmgUng0sLdJYFde%2B%2B%2BZEVNmXraoS6tvarY3XU%2BGR2rBTa&X-Amz-Signature=891c66ba11644e2ac81301f5b8fd67c0d19eb28fbe0415b9c3760db3c20f593c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYUVXVM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG1oWD6JFN8TU%2BsObvG%2FzPVZDv9kpyDdFs45WUPlxhMZAiEArIhFAugHTfqgxS9L8K9ML%2FHmVvnyxb3gLIW9tNkE68YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqIvBjUbE2TGd%2BtWyrcA7X7hwSUtXm6puOfLWDaHIhmuI%2B1vo33d9Zyj6Iy2yjtMzV5KoXsx3CUbOuS4ho5SUBuUIqDF4l%2BeUheTJ4XxhTq9av0E1ilEqEy1K4ChU56ZI0o87NmHR3MgX5zXmTr642HZjrSVVF4Km2qDq%2Fn1q1cwWqgSDXZFP3tRgCaucTFrVg0HzomkZUIsBEmYEYG7e%2F81ixnZ0SGEKQRoIA36GtROaLYIp%2FP9vX9bXmlnRSRCiqJw3S%2Fxf9%2FUVBuJUEB9lcBUyPSrVPLXO268LjES770imLuANbd6%2BiyFD8X8ukA5dtbv1728D7riT40lIDIEiLnoa6RKIr4rsM75Wb7W%2B%2FHfo2wfcCjujuGsFfnMFKfc34eY25GdAeJGdcMhGuamfvF%2FMSqwoy%2BfQitJiePkhuBapaYy1SHkkLbzg%2FCEY54JsTYwRcn4ra%2BUSivN6IJAmkNcXLnsxdQCGpa386PtCG0iR%2FGWn9c5NltGxus2kDzmmsSnpiBe6alwHZbHqjAkmcXERFNBYMrBKbcEDI6zKKJbWMM%2Bhel1dmjI%2F4Py8evhrLmxSFIwsz7rO%2BcV7Z3Au1RQjDEkS%2BCDKLHlTOGMp7vQrDTeBXquPIJEy%2BjN4dx%2BxAIoZd7DKRSDnDdMMDE6b8GOqUBM%2BSXo1uQPjcU7RWx%2F97CUVDqkMKOOSckwWebn6AyHPohGVSwO%2FLkd8K%2FGyzz2%2FDiTv8J0TFOAIhBgLaNFv8bLvHz0PTsrdSdnM4BI4oQMYKsa1YS4%2BR%2FiKdVhE3bR46HSfrzXm57fMJP3Q%2BhCglgWRTLcKPHeNPMFEeXYuv2q3%2FPYWxGmgUng0sLdJYFde%2B%2B%2BZEVNmXraoS6tvarY3XU%2BGR2rBTa&X-Amz-Signature=90c28a45733f874167e44f394a1cfe952ac4d084d53a6afe429cb5012195ee1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYUVXVM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG1oWD6JFN8TU%2BsObvG%2FzPVZDv9kpyDdFs45WUPlxhMZAiEArIhFAugHTfqgxS9L8K9ML%2FHmVvnyxb3gLIW9tNkE68YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqIvBjUbE2TGd%2BtWyrcA7X7hwSUtXm6puOfLWDaHIhmuI%2B1vo33d9Zyj6Iy2yjtMzV5KoXsx3CUbOuS4ho5SUBuUIqDF4l%2BeUheTJ4XxhTq9av0E1ilEqEy1K4ChU56ZI0o87NmHR3MgX5zXmTr642HZjrSVVF4Km2qDq%2Fn1q1cwWqgSDXZFP3tRgCaucTFrVg0HzomkZUIsBEmYEYG7e%2F81ixnZ0SGEKQRoIA36GtROaLYIp%2FP9vX9bXmlnRSRCiqJw3S%2Fxf9%2FUVBuJUEB9lcBUyPSrVPLXO268LjES770imLuANbd6%2BiyFD8X8ukA5dtbv1728D7riT40lIDIEiLnoa6RKIr4rsM75Wb7W%2B%2FHfo2wfcCjujuGsFfnMFKfc34eY25GdAeJGdcMhGuamfvF%2FMSqwoy%2BfQitJiePkhuBapaYy1SHkkLbzg%2FCEY54JsTYwRcn4ra%2BUSivN6IJAmkNcXLnsxdQCGpa386PtCG0iR%2FGWn9c5NltGxus2kDzmmsSnpiBe6alwHZbHqjAkmcXERFNBYMrBKbcEDI6zKKJbWMM%2Bhel1dmjI%2F4Py8evhrLmxSFIwsz7rO%2BcV7Z3Au1RQjDEkS%2BCDKLHlTOGMp7vQrDTeBXquPIJEy%2BjN4dx%2BxAIoZd7DKRSDnDdMMDE6b8GOqUBM%2BSXo1uQPjcU7RWx%2F97CUVDqkMKOOSckwWebn6AyHPohGVSwO%2FLkd8K%2FGyzz2%2FDiTv8J0TFOAIhBgLaNFv8bLvHz0PTsrdSdnM4BI4oQMYKsa1YS4%2BR%2FiKdVhE3bR46HSfrzXm57fMJP3Q%2BhCglgWRTLcKPHeNPMFEeXYuv2q3%2FPYWxGmgUng0sLdJYFde%2B%2B%2BZEVNmXraoS6tvarY3XU%2BGR2rBTa&X-Amz-Signature=a8300a0039be3f1a4bf66ebb0b00a109a7db3e16209b87b73bafe33817b1a51a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
