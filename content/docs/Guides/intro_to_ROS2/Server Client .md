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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWRRQAT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjgK%2FIau7BSl%2FmGkCAfjrESM1826u4WSoIHr%2FJvExleAIge6I1C3%2FTJHHEhRx5ffTGOgqk0woaXTSSe0ApgPytw3cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn6e%2BhsO8FhnYX7jSrcA5JW6jSgRcO9O1zMoFrcbGBERy2DqXPHBX2FTd7B%2BA7ZRlF7bvZzCcfLTW1PywA0XVovqd0gTgQIdI9B0ZjwqpfZajrV%2FFLFBjC%2BW4BSlLG0wLtjZ1d2IZhfCDdHIalEiiUspASEShhRgXzW1EMH3Fl3bdOwzP%2FpWNSUypPnJtFc5mEsHEhKkw41tLZDCrCSYlRC6AGkEShOOCJJPcIWapFqWYF6wvYeYWFVO7DlrTyvoGe2TyXkULicJCTMqI2rwq%2Bkc1%2FoGxQAgTuIj7atSaE2MnbEX9ldeWUCXpBAAxzqTy9tPBezBbX%2F9Xt1NYWtsD39fsTGA3bhqpU4SmTox6wx1lJMy%2FMZIfZ9ZFggPAeQKcxv3GygZTLHm%2FZGFZe6eatjWfozjnShGs2FJdDm7vNUU20Rcue6Zn52oM%2B%2Ff4H9UVuisXUcPQq%2FlNfDXwqWxbnxEmjcv3yA%2BcO1IfXV%2FNQKZ%2Bb9Crb4ODTYIY6%2Bu8NLqoNyQxM0uXTdVsVMhDWTrcgDy1n0fTKEXUj5rKryQYTNJdY1ItJAfiVT5naE0PySvLSGC7%2BDykUQJTP75UrQ2RxtIPkGqh0BEDFi5bMvqbUEqVErEv2xsgO6cPIyrHRmYsxp80rGcAkvJ%2FELMJaWnMIGOqUB3v9OQYBYONcLdcMOhd3uAFx9Hm8WviknQhNjHxNcvhoJpPPKolMUqfdij26UhXCMZ%2B1h%2FI0SYBBG19vurgHLB8%2FEDH%2FB3DjtaAmTki2%2FpNbvFNs4uEcxkNpgEEZDr1gajH84GGv6kWPqweR0u4i4Fb2hmK7sGyc6KjjRAPSpivW0B%2B23ZZP%2FVhJcFcH%2FO0miE%2B%2BCHxvLSEQ6S8IXziJctMX7LfzD&X-Amz-Signature=aab9661866a1478b1ed3ae85543c248dc569c0a5de149d487b531f76d170f60a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWRRQAT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjgK%2FIau7BSl%2FmGkCAfjrESM1826u4WSoIHr%2FJvExleAIge6I1C3%2FTJHHEhRx5ffTGOgqk0woaXTSSe0ApgPytw3cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn6e%2BhsO8FhnYX7jSrcA5JW6jSgRcO9O1zMoFrcbGBERy2DqXPHBX2FTd7B%2BA7ZRlF7bvZzCcfLTW1PywA0XVovqd0gTgQIdI9B0ZjwqpfZajrV%2FFLFBjC%2BW4BSlLG0wLtjZ1d2IZhfCDdHIalEiiUspASEShhRgXzW1EMH3Fl3bdOwzP%2FpWNSUypPnJtFc5mEsHEhKkw41tLZDCrCSYlRC6AGkEShOOCJJPcIWapFqWYF6wvYeYWFVO7DlrTyvoGe2TyXkULicJCTMqI2rwq%2Bkc1%2FoGxQAgTuIj7atSaE2MnbEX9ldeWUCXpBAAxzqTy9tPBezBbX%2F9Xt1NYWtsD39fsTGA3bhqpU4SmTox6wx1lJMy%2FMZIfZ9ZFggPAeQKcxv3GygZTLHm%2FZGFZe6eatjWfozjnShGs2FJdDm7vNUU20Rcue6Zn52oM%2B%2Ff4H9UVuisXUcPQq%2FlNfDXwqWxbnxEmjcv3yA%2BcO1IfXV%2FNQKZ%2Bb9Crb4ODTYIY6%2Bu8NLqoNyQxM0uXTdVsVMhDWTrcgDy1n0fTKEXUj5rKryQYTNJdY1ItJAfiVT5naE0PySvLSGC7%2BDykUQJTP75UrQ2RxtIPkGqh0BEDFi5bMvqbUEqVErEv2xsgO6cPIyrHRmYsxp80rGcAkvJ%2FELMJaWnMIGOqUB3v9OQYBYONcLdcMOhd3uAFx9Hm8WviknQhNjHxNcvhoJpPPKolMUqfdij26UhXCMZ%2B1h%2FI0SYBBG19vurgHLB8%2FEDH%2FB3DjtaAmTki2%2FpNbvFNs4uEcxkNpgEEZDr1gajH84GGv6kWPqweR0u4i4Fb2hmK7sGyc6KjjRAPSpivW0B%2B23ZZP%2FVhJcFcH%2FO0miE%2B%2BCHxvLSEQ6S8IXziJctMX7LfzD&X-Amz-Signature=6d6de5ec72c19991bd36969fe06b9fd84906af83200e57a806cb9a7af308fd66&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWRRQAT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjgK%2FIau7BSl%2FmGkCAfjrESM1826u4WSoIHr%2FJvExleAIge6I1C3%2FTJHHEhRx5ffTGOgqk0woaXTSSe0ApgPytw3cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn6e%2BhsO8FhnYX7jSrcA5JW6jSgRcO9O1zMoFrcbGBERy2DqXPHBX2FTd7B%2BA7ZRlF7bvZzCcfLTW1PywA0XVovqd0gTgQIdI9B0ZjwqpfZajrV%2FFLFBjC%2BW4BSlLG0wLtjZ1d2IZhfCDdHIalEiiUspASEShhRgXzW1EMH3Fl3bdOwzP%2FpWNSUypPnJtFc5mEsHEhKkw41tLZDCrCSYlRC6AGkEShOOCJJPcIWapFqWYF6wvYeYWFVO7DlrTyvoGe2TyXkULicJCTMqI2rwq%2Bkc1%2FoGxQAgTuIj7atSaE2MnbEX9ldeWUCXpBAAxzqTy9tPBezBbX%2F9Xt1NYWtsD39fsTGA3bhqpU4SmTox6wx1lJMy%2FMZIfZ9ZFggPAeQKcxv3GygZTLHm%2FZGFZe6eatjWfozjnShGs2FJdDm7vNUU20Rcue6Zn52oM%2B%2Ff4H9UVuisXUcPQq%2FlNfDXwqWxbnxEmjcv3yA%2BcO1IfXV%2FNQKZ%2Bb9Crb4ODTYIY6%2Bu8NLqoNyQxM0uXTdVsVMhDWTrcgDy1n0fTKEXUj5rKryQYTNJdY1ItJAfiVT5naE0PySvLSGC7%2BDykUQJTP75UrQ2RxtIPkGqh0BEDFi5bMvqbUEqVErEv2xsgO6cPIyrHRmYsxp80rGcAkvJ%2FELMJaWnMIGOqUB3v9OQYBYONcLdcMOhd3uAFx9Hm8WviknQhNjHxNcvhoJpPPKolMUqfdij26UhXCMZ%2B1h%2FI0SYBBG19vurgHLB8%2FEDH%2FB3DjtaAmTki2%2FpNbvFNs4uEcxkNpgEEZDr1gajH84GGv6kWPqweR0u4i4Fb2hmK7sGyc6KjjRAPSpivW0B%2B23ZZP%2FVhJcFcH%2FO0miE%2B%2BCHxvLSEQ6S8IXziJctMX7LfzD&X-Amz-Signature=51295988450f9ab52eea13e5d9641eeb3b63a4ccd596ec5f076057ba114750fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWRRQAT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjgK%2FIau7BSl%2FmGkCAfjrESM1826u4WSoIHr%2FJvExleAIge6I1C3%2FTJHHEhRx5ffTGOgqk0woaXTSSe0ApgPytw3cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn6e%2BhsO8FhnYX7jSrcA5JW6jSgRcO9O1zMoFrcbGBERy2DqXPHBX2FTd7B%2BA7ZRlF7bvZzCcfLTW1PywA0XVovqd0gTgQIdI9B0ZjwqpfZajrV%2FFLFBjC%2BW4BSlLG0wLtjZ1d2IZhfCDdHIalEiiUspASEShhRgXzW1EMH3Fl3bdOwzP%2FpWNSUypPnJtFc5mEsHEhKkw41tLZDCrCSYlRC6AGkEShOOCJJPcIWapFqWYF6wvYeYWFVO7DlrTyvoGe2TyXkULicJCTMqI2rwq%2Bkc1%2FoGxQAgTuIj7atSaE2MnbEX9ldeWUCXpBAAxzqTy9tPBezBbX%2F9Xt1NYWtsD39fsTGA3bhqpU4SmTox6wx1lJMy%2FMZIfZ9ZFggPAeQKcxv3GygZTLHm%2FZGFZe6eatjWfozjnShGs2FJdDm7vNUU20Rcue6Zn52oM%2B%2Ff4H9UVuisXUcPQq%2FlNfDXwqWxbnxEmjcv3yA%2BcO1IfXV%2FNQKZ%2Bb9Crb4ODTYIY6%2Bu8NLqoNyQxM0uXTdVsVMhDWTrcgDy1n0fTKEXUj5rKryQYTNJdY1ItJAfiVT5naE0PySvLSGC7%2BDykUQJTP75UrQ2RxtIPkGqh0BEDFi5bMvqbUEqVErEv2xsgO6cPIyrHRmYsxp80rGcAkvJ%2FELMJaWnMIGOqUB3v9OQYBYONcLdcMOhd3uAFx9Hm8WviknQhNjHxNcvhoJpPPKolMUqfdij26UhXCMZ%2B1h%2FI0SYBBG19vurgHLB8%2FEDH%2FB3DjtaAmTki2%2FpNbvFNs4uEcxkNpgEEZDr1gajH84GGv6kWPqweR0u4i4Fb2hmK7sGyc6KjjRAPSpivW0B%2B23ZZP%2FVhJcFcH%2FO0miE%2B%2BCHxvLSEQ6S8IXziJctMX7LfzD&X-Amz-Signature=855c6fbebaf5f2221daab20d5c6018633415f31c78509824fdd9d25c1bcb69be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWRRQAT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjgK%2FIau7BSl%2FmGkCAfjrESM1826u4WSoIHr%2FJvExleAIge6I1C3%2FTJHHEhRx5ffTGOgqk0woaXTSSe0ApgPytw3cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn6e%2BhsO8FhnYX7jSrcA5JW6jSgRcO9O1zMoFrcbGBERy2DqXPHBX2FTd7B%2BA7ZRlF7bvZzCcfLTW1PywA0XVovqd0gTgQIdI9B0ZjwqpfZajrV%2FFLFBjC%2BW4BSlLG0wLtjZ1d2IZhfCDdHIalEiiUspASEShhRgXzW1EMH3Fl3bdOwzP%2FpWNSUypPnJtFc5mEsHEhKkw41tLZDCrCSYlRC6AGkEShOOCJJPcIWapFqWYF6wvYeYWFVO7DlrTyvoGe2TyXkULicJCTMqI2rwq%2Bkc1%2FoGxQAgTuIj7atSaE2MnbEX9ldeWUCXpBAAxzqTy9tPBezBbX%2F9Xt1NYWtsD39fsTGA3bhqpU4SmTox6wx1lJMy%2FMZIfZ9ZFggPAeQKcxv3GygZTLHm%2FZGFZe6eatjWfozjnShGs2FJdDm7vNUU20Rcue6Zn52oM%2B%2Ff4H9UVuisXUcPQq%2FlNfDXwqWxbnxEmjcv3yA%2BcO1IfXV%2FNQKZ%2Bb9Crb4ODTYIY6%2Bu8NLqoNyQxM0uXTdVsVMhDWTrcgDy1n0fTKEXUj5rKryQYTNJdY1ItJAfiVT5naE0PySvLSGC7%2BDykUQJTP75UrQ2RxtIPkGqh0BEDFi5bMvqbUEqVErEv2xsgO6cPIyrHRmYsxp80rGcAkvJ%2FELMJaWnMIGOqUB3v9OQYBYONcLdcMOhd3uAFx9Hm8WviknQhNjHxNcvhoJpPPKolMUqfdij26UhXCMZ%2B1h%2FI0SYBBG19vurgHLB8%2FEDH%2FB3DjtaAmTki2%2FpNbvFNs4uEcxkNpgEEZDr1gajH84GGv6kWPqweR0u4i4Fb2hmK7sGyc6KjjRAPSpivW0B%2B23ZZP%2FVhJcFcH%2FO0miE%2B%2BCHxvLSEQ6S8IXziJctMX7LfzD&X-Amz-Signature=37467c46cef22c1053779f22242f89e98f756cbe4a240626aff6336968fe0484&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
