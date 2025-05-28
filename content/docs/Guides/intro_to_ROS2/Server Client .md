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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ74MDAZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9fmwmK7nVzkkBCR9iEXbA7U%2Fdv0DlYJ2RYJquo9mpzAiAiA8azrV5KWyln1kBRPlMXmOhYItBi2W5vNYebcsIPoCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2B4gcF4d5KIl40n1mKtwDgyMCcBOKf5ZmiOi4EV%2B1x1ttnBrSf8VLlODA2%2FZjCaxrEee8iau5tHVN9dQM0wK3X7tT5W3Y6wZc%2BHszXmvjdtXCmN55eBa1qcSGIUGaHs%2F%2FYALid4mvQgQs9JWDYKfqojqGvRbd15xK7WBt8zwDEKowDV%2B9wbEZBuYDbfeAIxgxuByU58ygHhu4Oou9uavLZ6aWeGHdy902re83JNLNeqgs8Jb0g0FhhA07VF5%2FWuOTx9vPcGPSbcFTcdhy%2FH%2FuN5R9BrKtZuC1OUrCuZpggGt%2FnVLk5M%2BNvyWaiknhgv2PgYSpmpcFnv%2BC7ZcRuIGaJWlqfSafH%2FNY7gvi440%2BA0a06j2koCSw2xV0UhbXEFsMFEiztU8BJaKSJOrRlQ9rHAOLrxgL%2FPB6PhFOHSELO2IFHgF0PEp9GQDr1yldAO0KQDAcxmRZPVusNwUd3ulw%2FsqPvFpY%2FyZELrHTdh9oRzJEWK3O9W4Q9ZuqAftPPb8x5X7VbLJUn4WdOdpsQ19u0rQtVEKf%2BPCcGHmjSYXhlhze1JoJnId6sXC8Hpe8QazL2fSGgB14zvHVuQmu3P%2FQKQmauwJ5032fWEltZm14HuGapBD%2FnH2DRkUDR%2BNsMFapS0fUuFdHqFLIcIcwiPjcwQY6pgHPxmpPgh4AXTt7IdnI5GE66krLPMXQIZxfx%2F11TlklLDMiYIxeDU2VaylSD3t94S%2Fp1V4%2FegeYdHcd99M70ASQ6lQ1hTAkdsDk%2Fyph6UdnpFsDmAuaJ%2BsGFLISzMoV3TKF9QhBXOTtDYu9FpyLhziebng43%2BMi%2BfuHADKzatHcs3INXhbhYMuRW6LKl0fiSJhxAAJbu7uHAwDIL%2Fo2EVDBclGYE4jy&X-Amz-Signature=1b898b1334d5643aa76deec3a34eeb32eb59aab2adaef5960d2999361c0dec46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ74MDAZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9fmwmK7nVzkkBCR9iEXbA7U%2Fdv0DlYJ2RYJquo9mpzAiAiA8azrV5KWyln1kBRPlMXmOhYItBi2W5vNYebcsIPoCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2B4gcF4d5KIl40n1mKtwDgyMCcBOKf5ZmiOi4EV%2B1x1ttnBrSf8VLlODA2%2FZjCaxrEee8iau5tHVN9dQM0wK3X7tT5W3Y6wZc%2BHszXmvjdtXCmN55eBa1qcSGIUGaHs%2F%2FYALid4mvQgQs9JWDYKfqojqGvRbd15xK7WBt8zwDEKowDV%2B9wbEZBuYDbfeAIxgxuByU58ygHhu4Oou9uavLZ6aWeGHdy902re83JNLNeqgs8Jb0g0FhhA07VF5%2FWuOTx9vPcGPSbcFTcdhy%2FH%2FuN5R9BrKtZuC1OUrCuZpggGt%2FnVLk5M%2BNvyWaiknhgv2PgYSpmpcFnv%2BC7ZcRuIGaJWlqfSafH%2FNY7gvi440%2BA0a06j2koCSw2xV0UhbXEFsMFEiztU8BJaKSJOrRlQ9rHAOLrxgL%2FPB6PhFOHSELO2IFHgF0PEp9GQDr1yldAO0KQDAcxmRZPVusNwUd3ulw%2FsqPvFpY%2FyZELrHTdh9oRzJEWK3O9W4Q9ZuqAftPPb8x5X7VbLJUn4WdOdpsQ19u0rQtVEKf%2BPCcGHmjSYXhlhze1JoJnId6sXC8Hpe8QazL2fSGgB14zvHVuQmu3P%2FQKQmauwJ5032fWEltZm14HuGapBD%2FnH2DRkUDR%2BNsMFapS0fUuFdHqFLIcIcwiPjcwQY6pgHPxmpPgh4AXTt7IdnI5GE66krLPMXQIZxfx%2F11TlklLDMiYIxeDU2VaylSD3t94S%2Fp1V4%2FegeYdHcd99M70ASQ6lQ1hTAkdsDk%2Fyph6UdnpFsDmAuaJ%2BsGFLISzMoV3TKF9QhBXOTtDYu9FpyLhziebng43%2BMi%2BfuHADKzatHcs3INXhbhYMuRW6LKl0fiSJhxAAJbu7uHAwDIL%2Fo2EVDBclGYE4jy&X-Amz-Signature=6c945555f0b30d3afc7d5539e6ad7b42798364e65cc3f6d6d01cc4c4b09318b3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ74MDAZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9fmwmK7nVzkkBCR9iEXbA7U%2Fdv0DlYJ2RYJquo9mpzAiAiA8azrV5KWyln1kBRPlMXmOhYItBi2W5vNYebcsIPoCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2B4gcF4d5KIl40n1mKtwDgyMCcBOKf5ZmiOi4EV%2B1x1ttnBrSf8VLlODA2%2FZjCaxrEee8iau5tHVN9dQM0wK3X7tT5W3Y6wZc%2BHszXmvjdtXCmN55eBa1qcSGIUGaHs%2F%2FYALid4mvQgQs9JWDYKfqojqGvRbd15xK7WBt8zwDEKowDV%2B9wbEZBuYDbfeAIxgxuByU58ygHhu4Oou9uavLZ6aWeGHdy902re83JNLNeqgs8Jb0g0FhhA07VF5%2FWuOTx9vPcGPSbcFTcdhy%2FH%2FuN5R9BrKtZuC1OUrCuZpggGt%2FnVLk5M%2BNvyWaiknhgv2PgYSpmpcFnv%2BC7ZcRuIGaJWlqfSafH%2FNY7gvi440%2BA0a06j2koCSw2xV0UhbXEFsMFEiztU8BJaKSJOrRlQ9rHAOLrxgL%2FPB6PhFOHSELO2IFHgF0PEp9GQDr1yldAO0KQDAcxmRZPVusNwUd3ulw%2FsqPvFpY%2FyZELrHTdh9oRzJEWK3O9W4Q9ZuqAftPPb8x5X7VbLJUn4WdOdpsQ19u0rQtVEKf%2BPCcGHmjSYXhlhze1JoJnId6sXC8Hpe8QazL2fSGgB14zvHVuQmu3P%2FQKQmauwJ5032fWEltZm14HuGapBD%2FnH2DRkUDR%2BNsMFapS0fUuFdHqFLIcIcwiPjcwQY6pgHPxmpPgh4AXTt7IdnI5GE66krLPMXQIZxfx%2F11TlklLDMiYIxeDU2VaylSD3t94S%2Fp1V4%2FegeYdHcd99M70ASQ6lQ1hTAkdsDk%2Fyph6UdnpFsDmAuaJ%2BsGFLISzMoV3TKF9QhBXOTtDYu9FpyLhziebng43%2BMi%2BfuHADKzatHcs3INXhbhYMuRW6LKl0fiSJhxAAJbu7uHAwDIL%2Fo2EVDBclGYE4jy&X-Amz-Signature=c2a2231f4c901a191f56fb61c3005f9f0a4e87c4dd3621b3b6f813052007eafe&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ74MDAZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9fmwmK7nVzkkBCR9iEXbA7U%2Fdv0DlYJ2RYJquo9mpzAiAiA8azrV5KWyln1kBRPlMXmOhYItBi2W5vNYebcsIPoCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2B4gcF4d5KIl40n1mKtwDgyMCcBOKf5ZmiOi4EV%2B1x1ttnBrSf8VLlODA2%2FZjCaxrEee8iau5tHVN9dQM0wK3X7tT5W3Y6wZc%2BHszXmvjdtXCmN55eBa1qcSGIUGaHs%2F%2FYALid4mvQgQs9JWDYKfqojqGvRbd15xK7WBt8zwDEKowDV%2B9wbEZBuYDbfeAIxgxuByU58ygHhu4Oou9uavLZ6aWeGHdy902re83JNLNeqgs8Jb0g0FhhA07VF5%2FWuOTx9vPcGPSbcFTcdhy%2FH%2FuN5R9BrKtZuC1OUrCuZpggGt%2FnVLk5M%2BNvyWaiknhgv2PgYSpmpcFnv%2BC7ZcRuIGaJWlqfSafH%2FNY7gvi440%2BA0a06j2koCSw2xV0UhbXEFsMFEiztU8BJaKSJOrRlQ9rHAOLrxgL%2FPB6PhFOHSELO2IFHgF0PEp9GQDr1yldAO0KQDAcxmRZPVusNwUd3ulw%2FsqPvFpY%2FyZELrHTdh9oRzJEWK3O9W4Q9ZuqAftPPb8x5X7VbLJUn4WdOdpsQ19u0rQtVEKf%2BPCcGHmjSYXhlhze1JoJnId6sXC8Hpe8QazL2fSGgB14zvHVuQmu3P%2FQKQmauwJ5032fWEltZm14HuGapBD%2FnH2DRkUDR%2BNsMFapS0fUuFdHqFLIcIcwiPjcwQY6pgHPxmpPgh4AXTt7IdnI5GE66krLPMXQIZxfx%2F11TlklLDMiYIxeDU2VaylSD3t94S%2Fp1V4%2FegeYdHcd99M70ASQ6lQ1hTAkdsDk%2Fyph6UdnpFsDmAuaJ%2BsGFLISzMoV3TKF9QhBXOTtDYu9FpyLhziebng43%2BMi%2BfuHADKzatHcs3INXhbhYMuRW6LKl0fiSJhxAAJbu7uHAwDIL%2Fo2EVDBclGYE4jy&X-Amz-Signature=0b952058145c94d76bcc39ed228fe270e7a48f292be459444f816a0c49b9a97c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ74MDAZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9fmwmK7nVzkkBCR9iEXbA7U%2Fdv0DlYJ2RYJquo9mpzAiAiA8azrV5KWyln1kBRPlMXmOhYItBi2W5vNYebcsIPoCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2B4gcF4d5KIl40n1mKtwDgyMCcBOKf5ZmiOi4EV%2B1x1ttnBrSf8VLlODA2%2FZjCaxrEee8iau5tHVN9dQM0wK3X7tT5W3Y6wZc%2BHszXmvjdtXCmN55eBa1qcSGIUGaHs%2F%2FYALid4mvQgQs9JWDYKfqojqGvRbd15xK7WBt8zwDEKowDV%2B9wbEZBuYDbfeAIxgxuByU58ygHhu4Oou9uavLZ6aWeGHdy902re83JNLNeqgs8Jb0g0FhhA07VF5%2FWuOTx9vPcGPSbcFTcdhy%2FH%2FuN5R9BrKtZuC1OUrCuZpggGt%2FnVLk5M%2BNvyWaiknhgv2PgYSpmpcFnv%2BC7ZcRuIGaJWlqfSafH%2FNY7gvi440%2BA0a06j2koCSw2xV0UhbXEFsMFEiztU8BJaKSJOrRlQ9rHAOLrxgL%2FPB6PhFOHSELO2IFHgF0PEp9GQDr1yldAO0KQDAcxmRZPVusNwUd3ulw%2FsqPvFpY%2FyZELrHTdh9oRzJEWK3O9W4Q9ZuqAftPPb8x5X7VbLJUn4WdOdpsQ19u0rQtVEKf%2BPCcGHmjSYXhlhze1JoJnId6sXC8Hpe8QazL2fSGgB14zvHVuQmu3P%2FQKQmauwJ5032fWEltZm14HuGapBD%2FnH2DRkUDR%2BNsMFapS0fUuFdHqFLIcIcwiPjcwQY6pgHPxmpPgh4AXTt7IdnI5GE66krLPMXQIZxfx%2F11TlklLDMiYIxeDU2VaylSD3t94S%2Fp1V4%2FegeYdHcd99M70ASQ6lQ1hTAkdsDk%2Fyph6UdnpFsDmAuaJ%2BsGFLISzMoV3TKF9QhBXOTtDYu9FpyLhziebng43%2BMi%2BfuHADKzatHcs3INXhbhYMuRW6LKl0fiSJhxAAJbu7uHAwDIL%2Fo2EVDBclGYE4jy&X-Amz-Signature=7592332e914dec23152a5c17573189c1fd13b6ef33c70d027d36771819850e43&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
