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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTK2CAHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELLSkaM1ds4BtpSFk3x9ZDGbP2eoWGZu11o7f9P6vnyAiACD14buUSrjxCsEw%2BrW70XlEoB6yRfZC8nqpSYZVQu7Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMduzOkdo4ydIGcB8xKtwDR2NSL%2BJovnvhlgNU0UzckpCjPPYoI9brnJ1QiwB%2BkIhhx6KEGm%2BadU5vwLf%2BRvei%2BPcmVKDrAvl%2FI2dDW6T8CZaeXRtlUnV5FSqvlTkh6KrhokLqbRWc5TngxMcIjqKuCGgKISVsYP0SwN0SzW1R1iyWaZ7M%2FyjiPdyWmYc2BWVQ5BDiqL%2FxaVVIcalPMmgoMXdkZ8i6CthMZEHSnQPlnarhNHRItu8yNxfWRKAUUxLMHbUQub%2B%2Fu%2F4i8BCorsxZjkc4p4Q4vNqF%2FmWBhlniS%2Fv3vcrIFhxPxsLvsAuKthjNiVxRtMjtbWWpwR9wSZYlFDo2dkWD%2FqBwDH3bmUl5OoH%2BlXi0urCv%2FS1vjpC9kmCHaibc%2BNw5tG9xIsU%2BX7MLohMWnExuy764Re8VtgH4oIkEi7fJMwGpkGzrI7S%2BFbFmfuRs%2FKG95J%2FnZu3YFdzbFS9OidQBtV6F2oHaCpeh%2BhvkSAwOa3XUGkC6PRQJ6GjqVfsvZ%2BaaxFT9dexHwin8HTiWYi3qm82lb8%2FrAv2sUq8VH1OxtEejykGAsBTz%2BCECSWQ2OP4hHPPdTKr5bq68qRrhtwdO0ybld2lKcO2yL%2BucrEBbz0X53zzCumVeeM5%2FUI79huiePzEv1kwwo4LtvQY6pgEDFGI2XVWAc4VIa39V%2BpOdOJrYmBynVgcPM73gC2nqtT5mFmgQAlFbBuW0BijQpZU4fSLIgWzex2hCBB8mgZMKy7PC4fKthG0o7BZZNbqD%2Bry0JfeQahjLcze0ZOshFlqvkjvpfdZ2X8pTtBmT4BTqH9eFi1CsYeGVy%2Boe5tdFpHsA7ItVOFH0wYDscZr%2Bqbajk7m%2FbmxKJBBJHxMXOhfdaFNvPqiH&X-Amz-Signature=94be5fb0e8c1a48b7d54115aa252d6298ba616ba090229b78085cf8607f546db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTK2CAHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELLSkaM1ds4BtpSFk3x9ZDGbP2eoWGZu11o7f9P6vnyAiACD14buUSrjxCsEw%2BrW70XlEoB6yRfZC8nqpSYZVQu7Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMduzOkdo4ydIGcB8xKtwDR2NSL%2BJovnvhlgNU0UzckpCjPPYoI9brnJ1QiwB%2BkIhhx6KEGm%2BadU5vwLf%2BRvei%2BPcmVKDrAvl%2FI2dDW6T8CZaeXRtlUnV5FSqvlTkh6KrhokLqbRWc5TngxMcIjqKuCGgKISVsYP0SwN0SzW1R1iyWaZ7M%2FyjiPdyWmYc2BWVQ5BDiqL%2FxaVVIcalPMmgoMXdkZ8i6CthMZEHSnQPlnarhNHRItu8yNxfWRKAUUxLMHbUQub%2B%2Fu%2F4i8BCorsxZjkc4p4Q4vNqF%2FmWBhlniS%2Fv3vcrIFhxPxsLvsAuKthjNiVxRtMjtbWWpwR9wSZYlFDo2dkWD%2FqBwDH3bmUl5OoH%2BlXi0urCv%2FS1vjpC9kmCHaibc%2BNw5tG9xIsU%2BX7MLohMWnExuy764Re8VtgH4oIkEi7fJMwGpkGzrI7S%2BFbFmfuRs%2FKG95J%2FnZu3YFdzbFS9OidQBtV6F2oHaCpeh%2BhvkSAwOa3XUGkC6PRQJ6GjqVfsvZ%2BaaxFT9dexHwin8HTiWYi3qm82lb8%2FrAv2sUq8VH1OxtEejykGAsBTz%2BCECSWQ2OP4hHPPdTKr5bq68qRrhtwdO0ybld2lKcO2yL%2BucrEBbz0X53zzCumVeeM5%2FUI79huiePzEv1kwwo4LtvQY6pgEDFGI2XVWAc4VIa39V%2BpOdOJrYmBynVgcPM73gC2nqtT5mFmgQAlFbBuW0BijQpZU4fSLIgWzex2hCBB8mgZMKy7PC4fKthG0o7BZZNbqD%2Bry0JfeQahjLcze0ZOshFlqvkjvpfdZ2X8pTtBmT4BTqH9eFi1CsYeGVy%2Boe5tdFpHsA7ItVOFH0wYDscZr%2Bqbajk7m%2FbmxKJBBJHxMXOhfdaFNvPqiH&X-Amz-Signature=c7b5065b2a8b1a0553644193574e6ee3bfee806267bdc0b484f8f4de3bc94bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTK2CAHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELLSkaM1ds4BtpSFk3x9ZDGbP2eoWGZu11o7f9P6vnyAiACD14buUSrjxCsEw%2BrW70XlEoB6yRfZC8nqpSYZVQu7Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMduzOkdo4ydIGcB8xKtwDR2NSL%2BJovnvhlgNU0UzckpCjPPYoI9brnJ1QiwB%2BkIhhx6KEGm%2BadU5vwLf%2BRvei%2BPcmVKDrAvl%2FI2dDW6T8CZaeXRtlUnV5FSqvlTkh6KrhokLqbRWc5TngxMcIjqKuCGgKISVsYP0SwN0SzW1R1iyWaZ7M%2FyjiPdyWmYc2BWVQ5BDiqL%2FxaVVIcalPMmgoMXdkZ8i6CthMZEHSnQPlnarhNHRItu8yNxfWRKAUUxLMHbUQub%2B%2Fu%2F4i8BCorsxZjkc4p4Q4vNqF%2FmWBhlniS%2Fv3vcrIFhxPxsLvsAuKthjNiVxRtMjtbWWpwR9wSZYlFDo2dkWD%2FqBwDH3bmUl5OoH%2BlXi0urCv%2FS1vjpC9kmCHaibc%2BNw5tG9xIsU%2BX7MLohMWnExuy764Re8VtgH4oIkEi7fJMwGpkGzrI7S%2BFbFmfuRs%2FKG95J%2FnZu3YFdzbFS9OidQBtV6F2oHaCpeh%2BhvkSAwOa3XUGkC6PRQJ6GjqVfsvZ%2BaaxFT9dexHwin8HTiWYi3qm82lb8%2FrAv2sUq8VH1OxtEejykGAsBTz%2BCECSWQ2OP4hHPPdTKr5bq68qRrhtwdO0ybld2lKcO2yL%2BucrEBbz0X53zzCumVeeM5%2FUI79huiePzEv1kwwo4LtvQY6pgEDFGI2XVWAc4VIa39V%2BpOdOJrYmBynVgcPM73gC2nqtT5mFmgQAlFbBuW0BijQpZU4fSLIgWzex2hCBB8mgZMKy7PC4fKthG0o7BZZNbqD%2Bry0JfeQahjLcze0ZOshFlqvkjvpfdZ2X8pTtBmT4BTqH9eFi1CsYeGVy%2Boe5tdFpHsA7ItVOFH0wYDscZr%2Bqbajk7m%2FbmxKJBBJHxMXOhfdaFNvPqiH&X-Amz-Signature=b6fcf951fb9071a85a73358691bcb45a7e1c26a7e53df53adaa2fd0113576e57&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTK2CAHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELLSkaM1ds4BtpSFk3x9ZDGbP2eoWGZu11o7f9P6vnyAiACD14buUSrjxCsEw%2BrW70XlEoB6yRfZC8nqpSYZVQu7Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMduzOkdo4ydIGcB8xKtwDR2NSL%2BJovnvhlgNU0UzckpCjPPYoI9brnJ1QiwB%2BkIhhx6KEGm%2BadU5vwLf%2BRvei%2BPcmVKDrAvl%2FI2dDW6T8CZaeXRtlUnV5FSqvlTkh6KrhokLqbRWc5TngxMcIjqKuCGgKISVsYP0SwN0SzW1R1iyWaZ7M%2FyjiPdyWmYc2BWVQ5BDiqL%2FxaVVIcalPMmgoMXdkZ8i6CthMZEHSnQPlnarhNHRItu8yNxfWRKAUUxLMHbUQub%2B%2Fu%2F4i8BCorsxZjkc4p4Q4vNqF%2FmWBhlniS%2Fv3vcrIFhxPxsLvsAuKthjNiVxRtMjtbWWpwR9wSZYlFDo2dkWD%2FqBwDH3bmUl5OoH%2BlXi0urCv%2FS1vjpC9kmCHaibc%2BNw5tG9xIsU%2BX7MLohMWnExuy764Re8VtgH4oIkEi7fJMwGpkGzrI7S%2BFbFmfuRs%2FKG95J%2FnZu3YFdzbFS9OidQBtV6F2oHaCpeh%2BhvkSAwOa3XUGkC6PRQJ6GjqVfsvZ%2BaaxFT9dexHwin8HTiWYi3qm82lb8%2FrAv2sUq8VH1OxtEejykGAsBTz%2BCECSWQ2OP4hHPPdTKr5bq68qRrhtwdO0ybld2lKcO2yL%2BucrEBbz0X53zzCumVeeM5%2FUI79huiePzEv1kwwo4LtvQY6pgEDFGI2XVWAc4VIa39V%2BpOdOJrYmBynVgcPM73gC2nqtT5mFmgQAlFbBuW0BijQpZU4fSLIgWzex2hCBB8mgZMKy7PC4fKthG0o7BZZNbqD%2Bry0JfeQahjLcze0ZOshFlqvkjvpfdZ2X8pTtBmT4BTqH9eFi1CsYeGVy%2Boe5tdFpHsA7ItVOFH0wYDscZr%2Bqbajk7m%2FbmxKJBBJHxMXOhfdaFNvPqiH&X-Amz-Signature=2b6deddca1d1f128ee9f23b965c0d269106384194de02c90ed1ccf9fef71aa52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTK2CAHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELLSkaM1ds4BtpSFk3x9ZDGbP2eoWGZu11o7f9P6vnyAiACD14buUSrjxCsEw%2BrW70XlEoB6yRfZC8nqpSYZVQu7Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMduzOkdo4ydIGcB8xKtwDR2NSL%2BJovnvhlgNU0UzckpCjPPYoI9brnJ1QiwB%2BkIhhx6KEGm%2BadU5vwLf%2BRvei%2BPcmVKDrAvl%2FI2dDW6T8CZaeXRtlUnV5FSqvlTkh6KrhokLqbRWc5TngxMcIjqKuCGgKISVsYP0SwN0SzW1R1iyWaZ7M%2FyjiPdyWmYc2BWVQ5BDiqL%2FxaVVIcalPMmgoMXdkZ8i6CthMZEHSnQPlnarhNHRItu8yNxfWRKAUUxLMHbUQub%2B%2Fu%2F4i8BCorsxZjkc4p4Q4vNqF%2FmWBhlniS%2Fv3vcrIFhxPxsLvsAuKthjNiVxRtMjtbWWpwR9wSZYlFDo2dkWD%2FqBwDH3bmUl5OoH%2BlXi0urCv%2FS1vjpC9kmCHaibc%2BNw5tG9xIsU%2BX7MLohMWnExuy764Re8VtgH4oIkEi7fJMwGpkGzrI7S%2BFbFmfuRs%2FKG95J%2FnZu3YFdzbFS9OidQBtV6F2oHaCpeh%2BhvkSAwOa3XUGkC6PRQJ6GjqVfsvZ%2BaaxFT9dexHwin8HTiWYi3qm82lb8%2FrAv2sUq8VH1OxtEejykGAsBTz%2BCECSWQ2OP4hHPPdTKr5bq68qRrhtwdO0ybld2lKcO2yL%2BucrEBbz0X53zzCumVeeM5%2FUI79huiePzEv1kwwo4LtvQY6pgEDFGI2XVWAc4VIa39V%2BpOdOJrYmBynVgcPM73gC2nqtT5mFmgQAlFbBuW0BijQpZU4fSLIgWzex2hCBB8mgZMKy7PC4fKthG0o7BZZNbqD%2Bry0JfeQahjLcze0ZOshFlqvkjvpfdZ2X8pTtBmT4BTqH9eFi1CsYeGVy%2Boe5tdFpHsA7ItVOFH0wYDscZr%2Bqbajk7m%2FbmxKJBBJHxMXOhfdaFNvPqiH&X-Amz-Signature=94cba8d58962c7f77cf6efa85b429ce6c74f00c695bd0e6d9385758fe7099006&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
