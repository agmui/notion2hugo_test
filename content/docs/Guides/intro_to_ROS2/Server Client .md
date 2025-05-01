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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=5fe4bae851e2ff7b9841d9f3c0425d1d2f399fb12b5313e3520b43bdb2281fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=fc576c52034a431224b8284a59faeafb60c4e8c58bc779cdef7a5dbba8cc9fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=6b9a55819b6ebb641e0c0fa8c799de7ed87d67deded48da10751d4e841a64c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=fb90a6def38ddea588390fbd00907ba2a78c2c614ad085fc60cc49ddb7a399cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=64b5c8fd0b6b90e5be3e31313b18a40e0d8e7105cb584fb37f799a61cf3858a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
