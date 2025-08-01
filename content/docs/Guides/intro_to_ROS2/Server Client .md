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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254XFXC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZf4YFJyn4Uj1rNyFaiocK12Lfb5kJ22fLhmGKTj3n5AiANeHqSNjrh8chG%2FEpJ0akkGadam6LO%2FI29g53Sbg2imyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVL3lj04ypUittXlKtwD5ercOHcXtb0Y121cmxbJk8ep5PWjG77WZPdqW1mTYzu5aw20yQPJi4w9HaO4NylbQ9Nqc0zz4CRtBIC2ZZZP6iZWc5a0rZagRsvtjdf6xYUJ4NJU3YTjY0cup7vfpTRnycuQYULo%2FrKgePCzI5hZe81xJTJ4UZC%2FbfNuE6TddWS4z5gAhRjqicMfTAZb7IjDEUAun50F286NQ4QZvHtlhAQA6oP1YAc6Cq3C6t9Tv9cgAtI4%2Fla1iJ3nWkzFBAImMfLi%2FsAfVinRWGNEmZaLPKhdhXDw7uYxXF0kA7jvVHTX1MptDt8Sjq4APbbFYMLoyjjT%2FjB%2BWdfcg2OzInMylJYBQ0G0zHdJJ4UC0RSeQhdjbblgYPjAWYIIBjH88C8e3Dv4XV2lZkh0ViFdYzPyOXr05Aj7o8%2Fa452F%2F5%2B99hommsyJkNllqN1PZPx%2FshD33YgkLWmsR%2BQreO1ZChcoDSl5XCesiMBmG2EbVn87L2uidwgVa559O3qQdS%2BmNGHvW5DkGxu9xYhkvrQjkePDcOlR%2BWzvpzlIefYR0LUW3cOHfwwmr%2Bwy0TW6%2FqRC3QdDrBm8ss%2F%2FKuZ9MOqhtEA3OpLlr3JJb2jQ4ViIJFtV6z4QViHf44Q8lHzUiE8w2KG0xAY6pgG958H57B3wmK90g36PVh06bzrHZQepUvjwb0syvZ5iezaAq3cgWSKBdMKL1FUUQ9qfYTFGn%2BlrLa%2BFZ%2F80vPMSSauKEHYK0%2FnrcaZ%2Bf%2Btk%2FkOftipI%2B1z%2FlKdb3eFkHpCLCswrMx5ha%2B%2BenurN95CtD%2F%2B6taj%2FuBXLG9c2lOnH1kqB%2B9OUQZ783L2IReLKtFPa4qthAS8eDLAM6ovljSU0N1gN2Zkz&X-Amz-Signature=838f0d174ac9457b222e07eccf6ec787ed86b22dc198e5de7e237652fa1b336c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254XFXC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZf4YFJyn4Uj1rNyFaiocK12Lfb5kJ22fLhmGKTj3n5AiANeHqSNjrh8chG%2FEpJ0akkGadam6LO%2FI29g53Sbg2imyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVL3lj04ypUittXlKtwD5ercOHcXtb0Y121cmxbJk8ep5PWjG77WZPdqW1mTYzu5aw20yQPJi4w9HaO4NylbQ9Nqc0zz4CRtBIC2ZZZP6iZWc5a0rZagRsvtjdf6xYUJ4NJU3YTjY0cup7vfpTRnycuQYULo%2FrKgePCzI5hZe81xJTJ4UZC%2FbfNuE6TddWS4z5gAhRjqicMfTAZb7IjDEUAun50F286NQ4QZvHtlhAQA6oP1YAc6Cq3C6t9Tv9cgAtI4%2Fla1iJ3nWkzFBAImMfLi%2FsAfVinRWGNEmZaLPKhdhXDw7uYxXF0kA7jvVHTX1MptDt8Sjq4APbbFYMLoyjjT%2FjB%2BWdfcg2OzInMylJYBQ0G0zHdJJ4UC0RSeQhdjbblgYPjAWYIIBjH88C8e3Dv4XV2lZkh0ViFdYzPyOXr05Aj7o8%2Fa452F%2F5%2B99hommsyJkNllqN1PZPx%2FshD33YgkLWmsR%2BQreO1ZChcoDSl5XCesiMBmG2EbVn87L2uidwgVa559O3qQdS%2BmNGHvW5DkGxu9xYhkvrQjkePDcOlR%2BWzvpzlIefYR0LUW3cOHfwwmr%2Bwy0TW6%2FqRC3QdDrBm8ss%2F%2FKuZ9MOqhtEA3OpLlr3JJb2jQ4ViIJFtV6z4QViHf44Q8lHzUiE8w2KG0xAY6pgG958H57B3wmK90g36PVh06bzrHZQepUvjwb0syvZ5iezaAq3cgWSKBdMKL1FUUQ9qfYTFGn%2BlrLa%2BFZ%2F80vPMSSauKEHYK0%2FnrcaZ%2Bf%2Btk%2FkOftipI%2B1z%2FlKdb3eFkHpCLCswrMx5ha%2B%2BenurN95CtD%2F%2B6taj%2FuBXLG9c2lOnH1kqB%2B9OUQZ783L2IReLKtFPa4qthAS8eDLAM6ovljSU0N1gN2Zkz&X-Amz-Signature=ec062600dbf152071fa5123b1aeeb5bd7066d038e82a0d1efa65fb0da30beb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254XFXC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZf4YFJyn4Uj1rNyFaiocK12Lfb5kJ22fLhmGKTj3n5AiANeHqSNjrh8chG%2FEpJ0akkGadam6LO%2FI29g53Sbg2imyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVL3lj04ypUittXlKtwD5ercOHcXtb0Y121cmxbJk8ep5PWjG77WZPdqW1mTYzu5aw20yQPJi4w9HaO4NylbQ9Nqc0zz4CRtBIC2ZZZP6iZWc5a0rZagRsvtjdf6xYUJ4NJU3YTjY0cup7vfpTRnycuQYULo%2FrKgePCzI5hZe81xJTJ4UZC%2FbfNuE6TddWS4z5gAhRjqicMfTAZb7IjDEUAun50F286NQ4QZvHtlhAQA6oP1YAc6Cq3C6t9Tv9cgAtI4%2Fla1iJ3nWkzFBAImMfLi%2FsAfVinRWGNEmZaLPKhdhXDw7uYxXF0kA7jvVHTX1MptDt8Sjq4APbbFYMLoyjjT%2FjB%2BWdfcg2OzInMylJYBQ0G0zHdJJ4UC0RSeQhdjbblgYPjAWYIIBjH88C8e3Dv4XV2lZkh0ViFdYzPyOXr05Aj7o8%2Fa452F%2F5%2B99hommsyJkNllqN1PZPx%2FshD33YgkLWmsR%2BQreO1ZChcoDSl5XCesiMBmG2EbVn87L2uidwgVa559O3qQdS%2BmNGHvW5DkGxu9xYhkvrQjkePDcOlR%2BWzvpzlIefYR0LUW3cOHfwwmr%2Bwy0TW6%2FqRC3QdDrBm8ss%2F%2FKuZ9MOqhtEA3OpLlr3JJb2jQ4ViIJFtV6z4QViHf44Q8lHzUiE8w2KG0xAY6pgG958H57B3wmK90g36PVh06bzrHZQepUvjwb0syvZ5iezaAq3cgWSKBdMKL1FUUQ9qfYTFGn%2BlrLa%2BFZ%2F80vPMSSauKEHYK0%2FnrcaZ%2Bf%2Btk%2FkOftipI%2B1z%2FlKdb3eFkHpCLCswrMx5ha%2B%2BenurN95CtD%2F%2B6taj%2FuBXLG9c2lOnH1kqB%2B9OUQZ783L2IReLKtFPa4qthAS8eDLAM6ovljSU0N1gN2Zkz&X-Amz-Signature=7107866ce0649313193c662c497d4767dec976c9fe3f16830b33db860db31ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254XFXC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZf4YFJyn4Uj1rNyFaiocK12Lfb5kJ22fLhmGKTj3n5AiANeHqSNjrh8chG%2FEpJ0akkGadam6LO%2FI29g53Sbg2imyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVL3lj04ypUittXlKtwD5ercOHcXtb0Y121cmxbJk8ep5PWjG77WZPdqW1mTYzu5aw20yQPJi4w9HaO4NylbQ9Nqc0zz4CRtBIC2ZZZP6iZWc5a0rZagRsvtjdf6xYUJ4NJU3YTjY0cup7vfpTRnycuQYULo%2FrKgePCzI5hZe81xJTJ4UZC%2FbfNuE6TddWS4z5gAhRjqicMfTAZb7IjDEUAun50F286NQ4QZvHtlhAQA6oP1YAc6Cq3C6t9Tv9cgAtI4%2Fla1iJ3nWkzFBAImMfLi%2FsAfVinRWGNEmZaLPKhdhXDw7uYxXF0kA7jvVHTX1MptDt8Sjq4APbbFYMLoyjjT%2FjB%2BWdfcg2OzInMylJYBQ0G0zHdJJ4UC0RSeQhdjbblgYPjAWYIIBjH88C8e3Dv4XV2lZkh0ViFdYzPyOXr05Aj7o8%2Fa452F%2F5%2B99hommsyJkNllqN1PZPx%2FshD33YgkLWmsR%2BQreO1ZChcoDSl5XCesiMBmG2EbVn87L2uidwgVa559O3qQdS%2BmNGHvW5DkGxu9xYhkvrQjkePDcOlR%2BWzvpzlIefYR0LUW3cOHfwwmr%2Bwy0TW6%2FqRC3QdDrBm8ss%2F%2FKuZ9MOqhtEA3OpLlr3JJb2jQ4ViIJFtV6z4QViHf44Q8lHzUiE8w2KG0xAY6pgG958H57B3wmK90g36PVh06bzrHZQepUvjwb0syvZ5iezaAq3cgWSKBdMKL1FUUQ9qfYTFGn%2BlrLa%2BFZ%2F80vPMSSauKEHYK0%2FnrcaZ%2Bf%2Btk%2FkOftipI%2B1z%2FlKdb3eFkHpCLCswrMx5ha%2B%2BenurN95CtD%2F%2B6taj%2FuBXLG9c2lOnH1kqB%2B9OUQZ783L2IReLKtFPa4qthAS8eDLAM6ovljSU0N1gN2Zkz&X-Amz-Signature=be1bcf34675a3f84ed4079a05b54335be1e17cabec09c2cdce89c6d406eb7aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254XFXC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZf4YFJyn4Uj1rNyFaiocK12Lfb5kJ22fLhmGKTj3n5AiANeHqSNjrh8chG%2FEpJ0akkGadam6LO%2FI29g53Sbg2imyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVL3lj04ypUittXlKtwD5ercOHcXtb0Y121cmxbJk8ep5PWjG77WZPdqW1mTYzu5aw20yQPJi4w9HaO4NylbQ9Nqc0zz4CRtBIC2ZZZP6iZWc5a0rZagRsvtjdf6xYUJ4NJU3YTjY0cup7vfpTRnycuQYULo%2FrKgePCzI5hZe81xJTJ4UZC%2FbfNuE6TddWS4z5gAhRjqicMfTAZb7IjDEUAun50F286NQ4QZvHtlhAQA6oP1YAc6Cq3C6t9Tv9cgAtI4%2Fla1iJ3nWkzFBAImMfLi%2FsAfVinRWGNEmZaLPKhdhXDw7uYxXF0kA7jvVHTX1MptDt8Sjq4APbbFYMLoyjjT%2FjB%2BWdfcg2OzInMylJYBQ0G0zHdJJ4UC0RSeQhdjbblgYPjAWYIIBjH88C8e3Dv4XV2lZkh0ViFdYzPyOXr05Aj7o8%2Fa452F%2F5%2B99hommsyJkNllqN1PZPx%2FshD33YgkLWmsR%2BQreO1ZChcoDSl5XCesiMBmG2EbVn87L2uidwgVa559O3qQdS%2BmNGHvW5DkGxu9xYhkvrQjkePDcOlR%2BWzvpzlIefYR0LUW3cOHfwwmr%2Bwy0TW6%2FqRC3QdDrBm8ss%2F%2FKuZ9MOqhtEA3OpLlr3JJb2jQ4ViIJFtV6z4QViHf44Q8lHzUiE8w2KG0xAY6pgG958H57B3wmK90g36PVh06bzrHZQepUvjwb0syvZ5iezaAq3cgWSKBdMKL1FUUQ9qfYTFGn%2BlrLa%2BFZ%2F80vPMSSauKEHYK0%2FnrcaZ%2Bf%2Btk%2FkOftipI%2B1z%2FlKdb3eFkHpCLCswrMx5ha%2B%2BenurN95CtD%2F%2B6taj%2FuBXLG9c2lOnH1kqB%2B9OUQZ783L2IReLKtFPa4qthAS8eDLAM6ovljSU0N1gN2Zkz&X-Amz-Signature=fec8f815976ad1ea277fc9e5352f3aefa8beb376101c87b6e75d065c3e29a83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
