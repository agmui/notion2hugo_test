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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALYF4LW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDX7slk3Bm%2Fxc%2B9YWWgTU6czJGZNQdjnkA3SmrvNWlj9gIhAPnMoufZ%2FyHbLubadl10o%2BUWI1Y0AWzx%2BEDhk%2BlTxB5WKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhR7CJxAqIy2796aUq3APLy6O6WIQoInnBDB3oBz06e5fq%2FjIifEA%2BtMau2iyJtlShE1FoRUk6XMDQk39U8lOmoufdEGZF24UMorehjtv49Txt%2B8Q%2Fm9IyBMXrBFGPfCj9SJA9aZuk9mPHlOx5R2CEAldb37oI7vdoi%2FzlkRER38YsVj%2B5OwQzOPWpC%2FROhsVj0AkY1TaRii%2Fl3rPcxBxfl9q%2BBFfrf46F0%2FOnfkpJnSenhC2nY%2Bi7k%2F3ezDfLPHcQscr1cgZxHuLB%2FKScq4nCF8CSbTBWs0IjH5lIL1K5GY9wqoKY7nOtFaMsvjdhG5KYk6%2F7TD%2FMG4c6mRUuhBRIOG%2FlLxEqPU6P9%2Bn6FeCafkcH%2FxRsApEBMq1OxSKqbEWu8cmOCggN1K1wUFN1Pob6429n3Go79wbu0IjWsR4AClbVYURezO1OsFJ3lDfIiTqN94ntM5NJIzRB%2BdNmuq65h40dA%2B%2B2G%2BRHssTjqkxOL%2FfSct7AGBG3vr2xFWpZ8toDvvRhXbO%2FY68fCgfuD8nacG9RCUQc%2FTXKJq9lCXZKFlVlHb0xzAn8osrcvOkk3oWYKTLQgHDhd%2FLbCR2rS%2FJasL91T7H7rXN12PYlXn2YcEMsi7y3cVUCVdr3BkghGTLS4OSdRGaqpx7najDHhtbABjqkAbr%2BI26NM4GrXh0FsxN5owAu9cp5TKg1cNz5dgbhOXupAx%2FvkqyrQNQuv3Gpffi00cEcxFbdM1UUuSLX92H8NaA2ggydDL0if%2BeQsyXRRW7QjTqcIXxnP4c%2B1Ag9Ivs221a1jt0kU%2FSIBeiPXbbCRoI85UTXBFLvgd7I9zP2pXbrJKW%2FBUeMLg3drZyITaXOgjste6X0YXgcUxDif5R5llTaFLp6&X-Amz-Signature=93fe638ef164e1f86127126ca223aba6177f528aa9ccd2b5088a36a6dbbc9a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALYF4LW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDX7slk3Bm%2Fxc%2B9YWWgTU6czJGZNQdjnkA3SmrvNWlj9gIhAPnMoufZ%2FyHbLubadl10o%2BUWI1Y0AWzx%2BEDhk%2BlTxB5WKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhR7CJxAqIy2796aUq3APLy6O6WIQoInnBDB3oBz06e5fq%2FjIifEA%2BtMau2iyJtlShE1FoRUk6XMDQk39U8lOmoufdEGZF24UMorehjtv49Txt%2B8Q%2Fm9IyBMXrBFGPfCj9SJA9aZuk9mPHlOx5R2CEAldb37oI7vdoi%2FzlkRER38YsVj%2B5OwQzOPWpC%2FROhsVj0AkY1TaRii%2Fl3rPcxBxfl9q%2BBFfrf46F0%2FOnfkpJnSenhC2nY%2Bi7k%2F3ezDfLPHcQscr1cgZxHuLB%2FKScq4nCF8CSbTBWs0IjH5lIL1K5GY9wqoKY7nOtFaMsvjdhG5KYk6%2F7TD%2FMG4c6mRUuhBRIOG%2FlLxEqPU6P9%2Bn6FeCafkcH%2FxRsApEBMq1OxSKqbEWu8cmOCggN1K1wUFN1Pob6429n3Go79wbu0IjWsR4AClbVYURezO1OsFJ3lDfIiTqN94ntM5NJIzRB%2BdNmuq65h40dA%2B%2B2G%2BRHssTjqkxOL%2FfSct7AGBG3vr2xFWpZ8toDvvRhXbO%2FY68fCgfuD8nacG9RCUQc%2FTXKJq9lCXZKFlVlHb0xzAn8osrcvOkk3oWYKTLQgHDhd%2FLbCR2rS%2FJasL91T7H7rXN12PYlXn2YcEMsi7y3cVUCVdr3BkghGTLS4OSdRGaqpx7najDHhtbABjqkAbr%2BI26NM4GrXh0FsxN5owAu9cp5TKg1cNz5dgbhOXupAx%2FvkqyrQNQuv3Gpffi00cEcxFbdM1UUuSLX92H8NaA2ggydDL0if%2BeQsyXRRW7QjTqcIXxnP4c%2B1Ag9Ivs221a1jt0kU%2FSIBeiPXbbCRoI85UTXBFLvgd7I9zP2pXbrJKW%2FBUeMLg3drZyITaXOgjste6X0YXgcUxDif5R5llTaFLp6&X-Amz-Signature=ba1b4e8260d465e3918dfdee02db99813324a362204cadeade706a846310fae5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALYF4LW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDX7slk3Bm%2Fxc%2B9YWWgTU6czJGZNQdjnkA3SmrvNWlj9gIhAPnMoufZ%2FyHbLubadl10o%2BUWI1Y0AWzx%2BEDhk%2BlTxB5WKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhR7CJxAqIy2796aUq3APLy6O6WIQoInnBDB3oBz06e5fq%2FjIifEA%2BtMau2iyJtlShE1FoRUk6XMDQk39U8lOmoufdEGZF24UMorehjtv49Txt%2B8Q%2Fm9IyBMXrBFGPfCj9SJA9aZuk9mPHlOx5R2CEAldb37oI7vdoi%2FzlkRER38YsVj%2B5OwQzOPWpC%2FROhsVj0AkY1TaRii%2Fl3rPcxBxfl9q%2BBFfrf46F0%2FOnfkpJnSenhC2nY%2Bi7k%2F3ezDfLPHcQscr1cgZxHuLB%2FKScq4nCF8CSbTBWs0IjH5lIL1K5GY9wqoKY7nOtFaMsvjdhG5KYk6%2F7TD%2FMG4c6mRUuhBRIOG%2FlLxEqPU6P9%2Bn6FeCafkcH%2FxRsApEBMq1OxSKqbEWu8cmOCggN1K1wUFN1Pob6429n3Go79wbu0IjWsR4AClbVYURezO1OsFJ3lDfIiTqN94ntM5NJIzRB%2BdNmuq65h40dA%2B%2B2G%2BRHssTjqkxOL%2FfSct7AGBG3vr2xFWpZ8toDvvRhXbO%2FY68fCgfuD8nacG9RCUQc%2FTXKJq9lCXZKFlVlHb0xzAn8osrcvOkk3oWYKTLQgHDhd%2FLbCR2rS%2FJasL91T7H7rXN12PYlXn2YcEMsi7y3cVUCVdr3BkghGTLS4OSdRGaqpx7najDHhtbABjqkAbr%2BI26NM4GrXh0FsxN5owAu9cp5TKg1cNz5dgbhOXupAx%2FvkqyrQNQuv3Gpffi00cEcxFbdM1UUuSLX92H8NaA2ggydDL0if%2BeQsyXRRW7QjTqcIXxnP4c%2B1Ag9Ivs221a1jt0kU%2FSIBeiPXbbCRoI85UTXBFLvgd7I9zP2pXbrJKW%2FBUeMLg3drZyITaXOgjste6X0YXgcUxDif5R5llTaFLp6&X-Amz-Signature=681a8f2dfe0981f026b4198338d2ca81c4790d5514e3337cbcbd6f5a19c3738d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALYF4LW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDX7slk3Bm%2Fxc%2B9YWWgTU6czJGZNQdjnkA3SmrvNWlj9gIhAPnMoufZ%2FyHbLubadl10o%2BUWI1Y0AWzx%2BEDhk%2BlTxB5WKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhR7CJxAqIy2796aUq3APLy6O6WIQoInnBDB3oBz06e5fq%2FjIifEA%2BtMau2iyJtlShE1FoRUk6XMDQk39U8lOmoufdEGZF24UMorehjtv49Txt%2B8Q%2Fm9IyBMXrBFGPfCj9SJA9aZuk9mPHlOx5R2CEAldb37oI7vdoi%2FzlkRER38YsVj%2B5OwQzOPWpC%2FROhsVj0AkY1TaRii%2Fl3rPcxBxfl9q%2BBFfrf46F0%2FOnfkpJnSenhC2nY%2Bi7k%2F3ezDfLPHcQscr1cgZxHuLB%2FKScq4nCF8CSbTBWs0IjH5lIL1K5GY9wqoKY7nOtFaMsvjdhG5KYk6%2F7TD%2FMG4c6mRUuhBRIOG%2FlLxEqPU6P9%2Bn6FeCafkcH%2FxRsApEBMq1OxSKqbEWu8cmOCggN1K1wUFN1Pob6429n3Go79wbu0IjWsR4AClbVYURezO1OsFJ3lDfIiTqN94ntM5NJIzRB%2BdNmuq65h40dA%2B%2B2G%2BRHssTjqkxOL%2FfSct7AGBG3vr2xFWpZ8toDvvRhXbO%2FY68fCgfuD8nacG9RCUQc%2FTXKJq9lCXZKFlVlHb0xzAn8osrcvOkk3oWYKTLQgHDhd%2FLbCR2rS%2FJasL91T7H7rXN12PYlXn2YcEMsi7y3cVUCVdr3BkghGTLS4OSdRGaqpx7najDHhtbABjqkAbr%2BI26NM4GrXh0FsxN5owAu9cp5TKg1cNz5dgbhOXupAx%2FvkqyrQNQuv3Gpffi00cEcxFbdM1UUuSLX92H8NaA2ggydDL0if%2BeQsyXRRW7QjTqcIXxnP4c%2B1Ag9Ivs221a1jt0kU%2FSIBeiPXbbCRoI85UTXBFLvgd7I9zP2pXbrJKW%2FBUeMLg3drZyITaXOgjste6X0YXgcUxDif5R5llTaFLp6&X-Amz-Signature=06227cd4ed4dd7bea343deb5932c5ff84118fa5eb856e678990c3fac4b6ee88f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALYF4LW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDX7slk3Bm%2Fxc%2B9YWWgTU6czJGZNQdjnkA3SmrvNWlj9gIhAPnMoufZ%2FyHbLubadl10o%2BUWI1Y0AWzx%2BEDhk%2BlTxB5WKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhR7CJxAqIy2796aUq3APLy6O6WIQoInnBDB3oBz06e5fq%2FjIifEA%2BtMau2iyJtlShE1FoRUk6XMDQk39U8lOmoufdEGZF24UMorehjtv49Txt%2B8Q%2Fm9IyBMXrBFGPfCj9SJA9aZuk9mPHlOx5R2CEAldb37oI7vdoi%2FzlkRER38YsVj%2B5OwQzOPWpC%2FROhsVj0AkY1TaRii%2Fl3rPcxBxfl9q%2BBFfrf46F0%2FOnfkpJnSenhC2nY%2Bi7k%2F3ezDfLPHcQscr1cgZxHuLB%2FKScq4nCF8CSbTBWs0IjH5lIL1K5GY9wqoKY7nOtFaMsvjdhG5KYk6%2F7TD%2FMG4c6mRUuhBRIOG%2FlLxEqPU6P9%2Bn6FeCafkcH%2FxRsApEBMq1OxSKqbEWu8cmOCggN1K1wUFN1Pob6429n3Go79wbu0IjWsR4AClbVYURezO1OsFJ3lDfIiTqN94ntM5NJIzRB%2BdNmuq65h40dA%2B%2B2G%2BRHssTjqkxOL%2FfSct7AGBG3vr2xFWpZ8toDvvRhXbO%2FY68fCgfuD8nacG9RCUQc%2FTXKJq9lCXZKFlVlHb0xzAn8osrcvOkk3oWYKTLQgHDhd%2FLbCR2rS%2FJasL91T7H7rXN12PYlXn2YcEMsi7y3cVUCVdr3BkghGTLS4OSdRGaqpx7najDHhtbABjqkAbr%2BI26NM4GrXh0FsxN5owAu9cp5TKg1cNz5dgbhOXupAx%2FvkqyrQNQuv3Gpffi00cEcxFbdM1UUuSLX92H8NaA2ggydDL0if%2BeQsyXRRW7QjTqcIXxnP4c%2B1Ag9Ivs221a1jt0kU%2FSIBeiPXbbCRoI85UTXBFLvgd7I9zP2pXbrJKW%2FBUeMLg3drZyITaXOgjste6X0YXgcUxDif5R5llTaFLp6&X-Amz-Signature=4810bb7e3ce69ff605ab88825c69763c71f3db84dfc4873eef7dc0889447ed97&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
