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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG25MAZC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4xxHrh57uJMzCxGVtazTfDNwjbAKlemsF4OcpRNa9AIhAIvW4xWfF%2BR6O3A2JBHqFfpiwYfNvLGGBK1%2FJaRhuajYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqu8V4TAaimWXAgy0q3AP4N6J6%2BQoGNfbHqlIo0gKx%2ButC70dOADGRTh18OawUIieuJpd4Qsh85hHYLcEovKiwc3JITpF1zCToV7QAplLoVw8orTDpulRpY%2F8qHsR0qzcpN923Xhj5yX32L3ypKmQK2QTD08J5RltWa0MRfCr3l3ytm7Vn0NVREDerBpTkk%2BsXsT9h0YTXSOUONz48VQPNKzznCg9akybqzNjJreAr7FwiQdXgwuO6e4a0b8%2BN%2Bvga11D5il%2FKHuTdE05Pfq1cO9mKCLSppDymhGcPfYJnZ%2FvemaJAomRaOPnoYjEz4Fmejt63qXvdE2zZqKSwSB17Z%2BAeWY4fvyP55KLUhSenLIvvb%2FPc%2BkktihMlMU7pEebE6iY7XrWhGXY5%2B8GPNxFpMRX6jAeFZ6Ax9eHn43AA410xdfjBLpRxrpNVs8SaaYbqR3uO20HnNfCBySX7lMG7d7hWhYeQeUBHPggQPu%2FgpEfHayICrkXfKSxZLcZpm4NFje1McxmJ%2BlqjvpTckuI40%2BSj3AlSpqLz1Drri286Rcg0prqhy42MW0GWfOweDGnVMHsUNGdJE9Wlk9%2F4pylRvJFNklrzLoAwG5FxrgTk6Pi4JZk%2FEhCyZrNf3MeT5Xo5XCJ65I5loCa1wzDRzam9BjqkAYr1zvv1SSwAq73nnZ3pvyy7BjL2yN0R26Ea3ZT9L451mU2e%2FYE%2FPTP%2FwAPIjQ61eJIaBKbZ%2BWbw6hfcpk438ZFuxdScdbsjKQxBWtdAcU9NI9J%2BLNHA3060Z%2B7mvl86Pb268c%2FWJR9rjrJ6C1kJhkvdWMG3DJRxxMTIlL0A8yt%2BLFg5c9qN8gSi5E4qVmQkiWYfYznWVMDC%2BM8lmTI%2BWoBrr0OM&X-Amz-Signature=927cc64d53b9a84a80d65b1329d89ae693a069c4de587d19596320383cff73cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG25MAZC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4xxHrh57uJMzCxGVtazTfDNwjbAKlemsF4OcpRNa9AIhAIvW4xWfF%2BR6O3A2JBHqFfpiwYfNvLGGBK1%2FJaRhuajYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqu8V4TAaimWXAgy0q3AP4N6J6%2BQoGNfbHqlIo0gKx%2ButC70dOADGRTh18OawUIieuJpd4Qsh85hHYLcEovKiwc3JITpF1zCToV7QAplLoVw8orTDpulRpY%2F8qHsR0qzcpN923Xhj5yX32L3ypKmQK2QTD08J5RltWa0MRfCr3l3ytm7Vn0NVREDerBpTkk%2BsXsT9h0YTXSOUONz48VQPNKzznCg9akybqzNjJreAr7FwiQdXgwuO6e4a0b8%2BN%2Bvga11D5il%2FKHuTdE05Pfq1cO9mKCLSppDymhGcPfYJnZ%2FvemaJAomRaOPnoYjEz4Fmejt63qXvdE2zZqKSwSB17Z%2BAeWY4fvyP55KLUhSenLIvvb%2FPc%2BkktihMlMU7pEebE6iY7XrWhGXY5%2B8GPNxFpMRX6jAeFZ6Ax9eHn43AA410xdfjBLpRxrpNVs8SaaYbqR3uO20HnNfCBySX7lMG7d7hWhYeQeUBHPggQPu%2FgpEfHayICrkXfKSxZLcZpm4NFje1McxmJ%2BlqjvpTckuI40%2BSj3AlSpqLz1Drri286Rcg0prqhy42MW0GWfOweDGnVMHsUNGdJE9Wlk9%2F4pylRvJFNklrzLoAwG5FxrgTk6Pi4JZk%2FEhCyZrNf3MeT5Xo5XCJ65I5loCa1wzDRzam9BjqkAYr1zvv1SSwAq73nnZ3pvyy7BjL2yN0R26Ea3ZT9L451mU2e%2FYE%2FPTP%2FwAPIjQ61eJIaBKbZ%2BWbw6hfcpk438ZFuxdScdbsjKQxBWtdAcU9NI9J%2BLNHA3060Z%2B7mvl86Pb268c%2FWJR9rjrJ6C1kJhkvdWMG3DJRxxMTIlL0A8yt%2BLFg5c9qN8gSi5E4qVmQkiWYfYznWVMDC%2BM8lmTI%2BWoBrr0OM&X-Amz-Signature=218b4a18f6a84998b90f3c351b234d2aae0430d00e3863d191276e0c961003ce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG25MAZC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4xxHrh57uJMzCxGVtazTfDNwjbAKlemsF4OcpRNa9AIhAIvW4xWfF%2BR6O3A2JBHqFfpiwYfNvLGGBK1%2FJaRhuajYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqu8V4TAaimWXAgy0q3AP4N6J6%2BQoGNfbHqlIo0gKx%2ButC70dOADGRTh18OawUIieuJpd4Qsh85hHYLcEovKiwc3JITpF1zCToV7QAplLoVw8orTDpulRpY%2F8qHsR0qzcpN923Xhj5yX32L3ypKmQK2QTD08J5RltWa0MRfCr3l3ytm7Vn0NVREDerBpTkk%2BsXsT9h0YTXSOUONz48VQPNKzznCg9akybqzNjJreAr7FwiQdXgwuO6e4a0b8%2BN%2Bvga11D5il%2FKHuTdE05Pfq1cO9mKCLSppDymhGcPfYJnZ%2FvemaJAomRaOPnoYjEz4Fmejt63qXvdE2zZqKSwSB17Z%2BAeWY4fvyP55KLUhSenLIvvb%2FPc%2BkktihMlMU7pEebE6iY7XrWhGXY5%2B8GPNxFpMRX6jAeFZ6Ax9eHn43AA410xdfjBLpRxrpNVs8SaaYbqR3uO20HnNfCBySX7lMG7d7hWhYeQeUBHPggQPu%2FgpEfHayICrkXfKSxZLcZpm4NFje1McxmJ%2BlqjvpTckuI40%2BSj3AlSpqLz1Drri286Rcg0prqhy42MW0GWfOweDGnVMHsUNGdJE9Wlk9%2F4pylRvJFNklrzLoAwG5FxrgTk6Pi4JZk%2FEhCyZrNf3MeT5Xo5XCJ65I5loCa1wzDRzam9BjqkAYr1zvv1SSwAq73nnZ3pvyy7BjL2yN0R26Ea3ZT9L451mU2e%2FYE%2FPTP%2FwAPIjQ61eJIaBKbZ%2BWbw6hfcpk438ZFuxdScdbsjKQxBWtdAcU9NI9J%2BLNHA3060Z%2B7mvl86Pb268c%2FWJR9rjrJ6C1kJhkvdWMG3DJRxxMTIlL0A8yt%2BLFg5c9qN8gSi5E4qVmQkiWYfYznWVMDC%2BM8lmTI%2BWoBrr0OM&X-Amz-Signature=64c19043cbe8e0d87a5e2a92b3e3ba34a9e60d2571a862788fcb26d74727538d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG25MAZC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4xxHrh57uJMzCxGVtazTfDNwjbAKlemsF4OcpRNa9AIhAIvW4xWfF%2BR6O3A2JBHqFfpiwYfNvLGGBK1%2FJaRhuajYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqu8V4TAaimWXAgy0q3AP4N6J6%2BQoGNfbHqlIo0gKx%2ButC70dOADGRTh18OawUIieuJpd4Qsh85hHYLcEovKiwc3JITpF1zCToV7QAplLoVw8orTDpulRpY%2F8qHsR0qzcpN923Xhj5yX32L3ypKmQK2QTD08J5RltWa0MRfCr3l3ytm7Vn0NVREDerBpTkk%2BsXsT9h0YTXSOUONz48VQPNKzznCg9akybqzNjJreAr7FwiQdXgwuO6e4a0b8%2BN%2Bvga11D5il%2FKHuTdE05Pfq1cO9mKCLSppDymhGcPfYJnZ%2FvemaJAomRaOPnoYjEz4Fmejt63qXvdE2zZqKSwSB17Z%2BAeWY4fvyP55KLUhSenLIvvb%2FPc%2BkktihMlMU7pEebE6iY7XrWhGXY5%2B8GPNxFpMRX6jAeFZ6Ax9eHn43AA410xdfjBLpRxrpNVs8SaaYbqR3uO20HnNfCBySX7lMG7d7hWhYeQeUBHPggQPu%2FgpEfHayICrkXfKSxZLcZpm4NFje1McxmJ%2BlqjvpTckuI40%2BSj3AlSpqLz1Drri286Rcg0prqhy42MW0GWfOweDGnVMHsUNGdJE9Wlk9%2F4pylRvJFNklrzLoAwG5FxrgTk6Pi4JZk%2FEhCyZrNf3MeT5Xo5XCJ65I5loCa1wzDRzam9BjqkAYr1zvv1SSwAq73nnZ3pvyy7BjL2yN0R26Ea3ZT9L451mU2e%2FYE%2FPTP%2FwAPIjQ61eJIaBKbZ%2BWbw6hfcpk438ZFuxdScdbsjKQxBWtdAcU9NI9J%2BLNHA3060Z%2B7mvl86Pb268c%2FWJR9rjrJ6C1kJhkvdWMG3DJRxxMTIlL0A8yt%2BLFg5c9qN8gSi5E4qVmQkiWYfYznWVMDC%2BM8lmTI%2BWoBrr0OM&X-Amz-Signature=17bb8a6f114a194141b8553a3ab3378f81b913bd6e9311e37f0acdd240d14bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG25MAZC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4xxHrh57uJMzCxGVtazTfDNwjbAKlemsF4OcpRNa9AIhAIvW4xWfF%2BR6O3A2JBHqFfpiwYfNvLGGBK1%2FJaRhuajYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqu8V4TAaimWXAgy0q3AP4N6J6%2BQoGNfbHqlIo0gKx%2ButC70dOADGRTh18OawUIieuJpd4Qsh85hHYLcEovKiwc3JITpF1zCToV7QAplLoVw8orTDpulRpY%2F8qHsR0qzcpN923Xhj5yX32L3ypKmQK2QTD08J5RltWa0MRfCr3l3ytm7Vn0NVREDerBpTkk%2BsXsT9h0YTXSOUONz48VQPNKzznCg9akybqzNjJreAr7FwiQdXgwuO6e4a0b8%2BN%2Bvga11D5il%2FKHuTdE05Pfq1cO9mKCLSppDymhGcPfYJnZ%2FvemaJAomRaOPnoYjEz4Fmejt63qXvdE2zZqKSwSB17Z%2BAeWY4fvyP55KLUhSenLIvvb%2FPc%2BkktihMlMU7pEebE6iY7XrWhGXY5%2B8GPNxFpMRX6jAeFZ6Ax9eHn43AA410xdfjBLpRxrpNVs8SaaYbqR3uO20HnNfCBySX7lMG7d7hWhYeQeUBHPggQPu%2FgpEfHayICrkXfKSxZLcZpm4NFje1McxmJ%2BlqjvpTckuI40%2BSj3AlSpqLz1Drri286Rcg0prqhy42MW0GWfOweDGnVMHsUNGdJE9Wlk9%2F4pylRvJFNklrzLoAwG5FxrgTk6Pi4JZk%2FEhCyZrNf3MeT5Xo5XCJ65I5loCa1wzDRzam9BjqkAYr1zvv1SSwAq73nnZ3pvyy7BjL2yN0R26Ea3ZT9L451mU2e%2FYE%2FPTP%2FwAPIjQ61eJIaBKbZ%2BWbw6hfcpk438ZFuxdScdbsjKQxBWtdAcU9NI9J%2BLNHA3060Z%2B7mvl86Pb268c%2FWJR9rjrJ6C1kJhkvdWMG3DJRxxMTIlL0A8yt%2BLFg5c9qN8gSi5E4qVmQkiWYfYznWVMDC%2BM8lmTI%2BWoBrr0OM&X-Amz-Signature=e393a4b48b6b1e80804814a05ce92c0d94ad806d079192761ac69aee7e2b45a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
