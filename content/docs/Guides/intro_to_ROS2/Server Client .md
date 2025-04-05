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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J7RKGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOB1Qg2twe6HL%2FQUejF3OvwUD%2FxZz96rAsRqSa5gnGlgIgHjdnK3dJWR31KNlwyeLZuM3j6UdPZ9zClomlwgd8xYcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEK0CedeA4obQWZCOCrcA6VeYzuHpcWyruv5GLhWxLsyHqrs3nE6MHFifquvJpQ%2FtCMrrCnar8shBgUg6N%2FJKvjeRoi9MjsIux%2BrK4qkynK4DMbDR8Mcw66tEhSeTHz3bw9osF5OqT%2FvZlxesgg7NZqgRq6gSVqUSUKAgVRjGqbUu%2FoTU15b73cAbLg5ybqLvtM7PIPhPImPGzwMt1F8iv1S8fzsNpmSw8h0JB%2BESDmzbHxPo2IQlpDAbNCPDFPQKMdCyomCl5t4ifYCldfbzkPbhIsviqXySrkFS%2FUJ3P%2Bbq%2FxHoFsFQAdv1vilj1V5NoxHp%2FgYfYDXu3Bx3IKsF9l5iQ54xyXgl26absUUK9h6IbGYsBXqDKGTe7BG2SjsUA1MwvqUCdmMoWFxKoP8QygSRJdvOr%2F1wowIvTqgnGcK8acXPwGIhkqjPRHkKMTsTh3MTQTz%2Bp1VUjlAlumdMLlAO2U1uGBzwmk%2F5X%2FpB8wbAFH5aMK0OJ9eg2csvOq1yrEq7rh4TspesTCT76IApOnAxFYpJyNdCSjmySyEUhx2dtlyEl%2FQ2r8LeMuIPQSFGtHhU9VI9fuICF1E%2B4itnvDgsKLdnlyblPfeK%2BKTJnGS8ytfKzvi6UrZdv2yKAwOmBoTiLdThiEjWb5AMNLCxr8GOqUBjgljwuPhKiciiQB%2FMxMv1hHNX8zdeIhFJhKnk4wtIbgWg3jy7NwBJkjZb7PzqGrbQ7OpDQ%2BUtyD%2Bc6AqDzzVpwQ1Sw%2BznKCkQkmhO892GiDZtacb401aUK1cRyn6ao%2F9dTkrV06OjHMASnjAa5oj7ZxRidnuhPX2w5zGxvu3fVmGydJY9u%2FoNYUMqzEXWbKZBgm%2FByUrLa0Tnn7zI1fl4gczIpQA&X-Amz-Signature=a587a41ee06321195891d6e1289baac18da45509c2b7eb27b1ecd12a1c6572c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J7RKGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOB1Qg2twe6HL%2FQUejF3OvwUD%2FxZz96rAsRqSa5gnGlgIgHjdnK3dJWR31KNlwyeLZuM3j6UdPZ9zClomlwgd8xYcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEK0CedeA4obQWZCOCrcA6VeYzuHpcWyruv5GLhWxLsyHqrs3nE6MHFifquvJpQ%2FtCMrrCnar8shBgUg6N%2FJKvjeRoi9MjsIux%2BrK4qkynK4DMbDR8Mcw66tEhSeTHz3bw9osF5OqT%2FvZlxesgg7NZqgRq6gSVqUSUKAgVRjGqbUu%2FoTU15b73cAbLg5ybqLvtM7PIPhPImPGzwMt1F8iv1S8fzsNpmSw8h0JB%2BESDmzbHxPo2IQlpDAbNCPDFPQKMdCyomCl5t4ifYCldfbzkPbhIsviqXySrkFS%2FUJ3P%2Bbq%2FxHoFsFQAdv1vilj1V5NoxHp%2FgYfYDXu3Bx3IKsF9l5iQ54xyXgl26absUUK9h6IbGYsBXqDKGTe7BG2SjsUA1MwvqUCdmMoWFxKoP8QygSRJdvOr%2F1wowIvTqgnGcK8acXPwGIhkqjPRHkKMTsTh3MTQTz%2Bp1VUjlAlumdMLlAO2U1uGBzwmk%2F5X%2FpB8wbAFH5aMK0OJ9eg2csvOq1yrEq7rh4TspesTCT76IApOnAxFYpJyNdCSjmySyEUhx2dtlyEl%2FQ2r8LeMuIPQSFGtHhU9VI9fuICF1E%2B4itnvDgsKLdnlyblPfeK%2BKTJnGS8ytfKzvi6UrZdv2yKAwOmBoTiLdThiEjWb5AMNLCxr8GOqUBjgljwuPhKiciiQB%2FMxMv1hHNX8zdeIhFJhKnk4wtIbgWg3jy7NwBJkjZb7PzqGrbQ7OpDQ%2BUtyD%2Bc6AqDzzVpwQ1Sw%2BznKCkQkmhO892GiDZtacb401aUK1cRyn6ao%2F9dTkrV06OjHMASnjAa5oj7ZxRidnuhPX2w5zGxvu3fVmGydJY9u%2FoNYUMqzEXWbKZBgm%2FByUrLa0Tnn7zI1fl4gczIpQA&X-Amz-Signature=3c09d3b572042c014cadbaf9ef6337d2da4f313c625f42ce31a93f4cdfca3509&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J7RKGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOB1Qg2twe6HL%2FQUejF3OvwUD%2FxZz96rAsRqSa5gnGlgIgHjdnK3dJWR31KNlwyeLZuM3j6UdPZ9zClomlwgd8xYcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEK0CedeA4obQWZCOCrcA6VeYzuHpcWyruv5GLhWxLsyHqrs3nE6MHFifquvJpQ%2FtCMrrCnar8shBgUg6N%2FJKvjeRoi9MjsIux%2BrK4qkynK4DMbDR8Mcw66tEhSeTHz3bw9osF5OqT%2FvZlxesgg7NZqgRq6gSVqUSUKAgVRjGqbUu%2FoTU15b73cAbLg5ybqLvtM7PIPhPImPGzwMt1F8iv1S8fzsNpmSw8h0JB%2BESDmzbHxPo2IQlpDAbNCPDFPQKMdCyomCl5t4ifYCldfbzkPbhIsviqXySrkFS%2FUJ3P%2Bbq%2FxHoFsFQAdv1vilj1V5NoxHp%2FgYfYDXu3Bx3IKsF9l5iQ54xyXgl26absUUK9h6IbGYsBXqDKGTe7BG2SjsUA1MwvqUCdmMoWFxKoP8QygSRJdvOr%2F1wowIvTqgnGcK8acXPwGIhkqjPRHkKMTsTh3MTQTz%2Bp1VUjlAlumdMLlAO2U1uGBzwmk%2F5X%2FpB8wbAFH5aMK0OJ9eg2csvOq1yrEq7rh4TspesTCT76IApOnAxFYpJyNdCSjmySyEUhx2dtlyEl%2FQ2r8LeMuIPQSFGtHhU9VI9fuICF1E%2B4itnvDgsKLdnlyblPfeK%2BKTJnGS8ytfKzvi6UrZdv2yKAwOmBoTiLdThiEjWb5AMNLCxr8GOqUBjgljwuPhKiciiQB%2FMxMv1hHNX8zdeIhFJhKnk4wtIbgWg3jy7NwBJkjZb7PzqGrbQ7OpDQ%2BUtyD%2Bc6AqDzzVpwQ1Sw%2BznKCkQkmhO892GiDZtacb401aUK1cRyn6ao%2F9dTkrV06OjHMASnjAa5oj7ZxRidnuhPX2w5zGxvu3fVmGydJY9u%2FoNYUMqzEXWbKZBgm%2FByUrLa0Tnn7zI1fl4gczIpQA&X-Amz-Signature=64b94813d7fa8139a794733e54aad540c10855f7a7ce8c5198168c5e48664f85&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J7RKGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOB1Qg2twe6HL%2FQUejF3OvwUD%2FxZz96rAsRqSa5gnGlgIgHjdnK3dJWR31KNlwyeLZuM3j6UdPZ9zClomlwgd8xYcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEK0CedeA4obQWZCOCrcA6VeYzuHpcWyruv5GLhWxLsyHqrs3nE6MHFifquvJpQ%2FtCMrrCnar8shBgUg6N%2FJKvjeRoi9MjsIux%2BrK4qkynK4DMbDR8Mcw66tEhSeTHz3bw9osF5OqT%2FvZlxesgg7NZqgRq6gSVqUSUKAgVRjGqbUu%2FoTU15b73cAbLg5ybqLvtM7PIPhPImPGzwMt1F8iv1S8fzsNpmSw8h0JB%2BESDmzbHxPo2IQlpDAbNCPDFPQKMdCyomCl5t4ifYCldfbzkPbhIsviqXySrkFS%2FUJ3P%2Bbq%2FxHoFsFQAdv1vilj1V5NoxHp%2FgYfYDXu3Bx3IKsF9l5iQ54xyXgl26absUUK9h6IbGYsBXqDKGTe7BG2SjsUA1MwvqUCdmMoWFxKoP8QygSRJdvOr%2F1wowIvTqgnGcK8acXPwGIhkqjPRHkKMTsTh3MTQTz%2Bp1VUjlAlumdMLlAO2U1uGBzwmk%2F5X%2FpB8wbAFH5aMK0OJ9eg2csvOq1yrEq7rh4TspesTCT76IApOnAxFYpJyNdCSjmySyEUhx2dtlyEl%2FQ2r8LeMuIPQSFGtHhU9VI9fuICF1E%2B4itnvDgsKLdnlyblPfeK%2BKTJnGS8ytfKzvi6UrZdv2yKAwOmBoTiLdThiEjWb5AMNLCxr8GOqUBjgljwuPhKiciiQB%2FMxMv1hHNX8zdeIhFJhKnk4wtIbgWg3jy7NwBJkjZb7PzqGrbQ7OpDQ%2BUtyD%2Bc6AqDzzVpwQ1Sw%2BznKCkQkmhO892GiDZtacb401aUK1cRyn6ao%2F9dTkrV06OjHMASnjAa5oj7ZxRidnuhPX2w5zGxvu3fVmGydJY9u%2FoNYUMqzEXWbKZBgm%2FByUrLa0Tnn7zI1fl4gczIpQA&X-Amz-Signature=d1f364df6290809aa62e69ab863508f80756c059692a1a1bb8584b979af0550e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J7RKGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOB1Qg2twe6HL%2FQUejF3OvwUD%2FxZz96rAsRqSa5gnGlgIgHjdnK3dJWR31KNlwyeLZuM3j6UdPZ9zClomlwgd8xYcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEK0CedeA4obQWZCOCrcA6VeYzuHpcWyruv5GLhWxLsyHqrs3nE6MHFifquvJpQ%2FtCMrrCnar8shBgUg6N%2FJKvjeRoi9MjsIux%2BrK4qkynK4DMbDR8Mcw66tEhSeTHz3bw9osF5OqT%2FvZlxesgg7NZqgRq6gSVqUSUKAgVRjGqbUu%2FoTU15b73cAbLg5ybqLvtM7PIPhPImPGzwMt1F8iv1S8fzsNpmSw8h0JB%2BESDmzbHxPo2IQlpDAbNCPDFPQKMdCyomCl5t4ifYCldfbzkPbhIsviqXySrkFS%2FUJ3P%2Bbq%2FxHoFsFQAdv1vilj1V5NoxHp%2FgYfYDXu3Bx3IKsF9l5iQ54xyXgl26absUUK9h6IbGYsBXqDKGTe7BG2SjsUA1MwvqUCdmMoWFxKoP8QygSRJdvOr%2F1wowIvTqgnGcK8acXPwGIhkqjPRHkKMTsTh3MTQTz%2Bp1VUjlAlumdMLlAO2U1uGBzwmk%2F5X%2FpB8wbAFH5aMK0OJ9eg2csvOq1yrEq7rh4TspesTCT76IApOnAxFYpJyNdCSjmySyEUhx2dtlyEl%2FQ2r8LeMuIPQSFGtHhU9VI9fuICF1E%2B4itnvDgsKLdnlyblPfeK%2BKTJnGS8ytfKzvi6UrZdv2yKAwOmBoTiLdThiEjWb5AMNLCxr8GOqUBjgljwuPhKiciiQB%2FMxMv1hHNX8zdeIhFJhKnk4wtIbgWg3jy7NwBJkjZb7PzqGrbQ7OpDQ%2BUtyD%2Bc6AqDzzVpwQ1Sw%2BznKCkQkmhO892GiDZtacb401aUK1cRyn6ao%2F9dTkrV06OjHMASnjAa5oj7ZxRidnuhPX2w5zGxvu3fVmGydJY9u%2FoNYUMqzEXWbKZBgm%2FByUrLa0Tnn7zI1fl4gczIpQA&X-Amz-Signature=d53a399657082eb9e56c2f175b493f86b0601ec97bd4d3bfc7a66bb0228527c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
