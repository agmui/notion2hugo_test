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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XPSQZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFra1lVs5zRwnFmMEjS6Zvx3P%2Bcyqn0Wi%2ByrD8mQ%2BfH7AiEAm2mpcJHi%2F1Nx%2FWLAv%2F1n6Pmeq6JRjbtlfblXSve2%2B4Qq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHDxw5aLbf2vGzEgASrcA5BMwHBk%2F0%2FMpekVfGSyw%2Bu69IrQ9XwKcNvsN2Fzq%2F3dVG1EOPDLzeplvR3so1GUadJMJg%2B6W%2FVcKiz06sB%2BLHPQUjMWPJ%2FNvCTfdPjEyKZkGN2htcwsXs%2BQkR5LwEeLrW4%2BvdZebYsXu%2Bj9gEhhRk7C4vRi%2FCCuGSmb7%2FY0itv2v6IPeji6a74sSEawNa6DEQyj3oiLptueE65Hc5ccU08G%2FouReQlHQD3oZnhFnjFwyp4Dcm3odgzkn7eO2NI%2BS306GYMxPsd50IAk2LmZqDHJZ6V7GoSqve%2FpOC0T%2Fg2iO5RnJHP%2BRivktDRbIBrTAc28qhcTqOF2M5V8CFHku74PxLYAKv6JAKEzgPopnDC7KrtLy4T2AzkJqIvdNsICgaEQih0cwuB4X8hwogu5As5KKGdvEUNEwVgwx65l2BqJZTYnhzmiccf%2BjgxPuvHd8L82Ij9hERMkFDcTkRjMcDG2rLdLETCQGpfwRG5u3papWlO%2F6QC6wmp0SDdoyuXgdbRYZh%2FzpornhidwU%2FTt2c0LulKf%2Bixmr2Xr7QugL83PI2IIY2KJELbpoL7VT03l%2FfURa9aEMLIbYlsaIAztAcqairKf%2FkvMX%2Fni8q8uGKnOy8l7sWdtyon1i3vuMOWB2L4GOqUBmAhfAP%2BzHJ4fVFnSgDQKNVDf9OVMwSl%2Fg4zv6UJ%2BfK%2BNWR9%2FKZa8fyQUufAAAKo0zvGFzHNJXrSjEwgyrYY1w5OFOl7UqRoXPm3Mush%2FgZE%2F8skUmkn8F2ZCKgSQJLXEVp76Sgm8zQ6KsYIRuoFeDFzFhE14E4n7zEuNlQDBgUlNSbHRoNu1KssDkPyfkYNGJ8pbmy9ZnYk1fV9qmBsvl4Rf6DwC&X-Amz-Signature=703a00aee8ffd021d11f0cbba95317ecf776694a93f9aaa54a58f82df979e657&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XPSQZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFra1lVs5zRwnFmMEjS6Zvx3P%2Bcyqn0Wi%2ByrD8mQ%2BfH7AiEAm2mpcJHi%2F1Nx%2FWLAv%2F1n6Pmeq6JRjbtlfblXSve2%2B4Qq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHDxw5aLbf2vGzEgASrcA5BMwHBk%2F0%2FMpekVfGSyw%2Bu69IrQ9XwKcNvsN2Fzq%2F3dVG1EOPDLzeplvR3so1GUadJMJg%2B6W%2FVcKiz06sB%2BLHPQUjMWPJ%2FNvCTfdPjEyKZkGN2htcwsXs%2BQkR5LwEeLrW4%2BvdZebYsXu%2Bj9gEhhRk7C4vRi%2FCCuGSmb7%2FY0itv2v6IPeji6a74sSEawNa6DEQyj3oiLptueE65Hc5ccU08G%2FouReQlHQD3oZnhFnjFwyp4Dcm3odgzkn7eO2NI%2BS306GYMxPsd50IAk2LmZqDHJZ6V7GoSqve%2FpOC0T%2Fg2iO5RnJHP%2BRivktDRbIBrTAc28qhcTqOF2M5V8CFHku74PxLYAKv6JAKEzgPopnDC7KrtLy4T2AzkJqIvdNsICgaEQih0cwuB4X8hwogu5As5KKGdvEUNEwVgwx65l2BqJZTYnhzmiccf%2BjgxPuvHd8L82Ij9hERMkFDcTkRjMcDG2rLdLETCQGpfwRG5u3papWlO%2F6QC6wmp0SDdoyuXgdbRYZh%2FzpornhidwU%2FTt2c0LulKf%2Bixmr2Xr7QugL83PI2IIY2KJELbpoL7VT03l%2FfURa9aEMLIbYlsaIAztAcqairKf%2FkvMX%2Fni8q8uGKnOy8l7sWdtyon1i3vuMOWB2L4GOqUBmAhfAP%2BzHJ4fVFnSgDQKNVDf9OVMwSl%2Fg4zv6UJ%2BfK%2BNWR9%2FKZa8fyQUufAAAKo0zvGFzHNJXrSjEwgyrYY1w5OFOl7UqRoXPm3Mush%2FgZE%2F8skUmkn8F2ZCKgSQJLXEVp76Sgm8zQ6KsYIRuoFeDFzFhE14E4n7zEuNlQDBgUlNSbHRoNu1KssDkPyfkYNGJ8pbmy9ZnYk1fV9qmBsvl4Rf6DwC&X-Amz-Signature=6721dbb6c9c999ccdc324bead5d4282930fb57e429fa939dd2a867879ab59995&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XPSQZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFra1lVs5zRwnFmMEjS6Zvx3P%2Bcyqn0Wi%2ByrD8mQ%2BfH7AiEAm2mpcJHi%2F1Nx%2FWLAv%2F1n6Pmeq6JRjbtlfblXSve2%2B4Qq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHDxw5aLbf2vGzEgASrcA5BMwHBk%2F0%2FMpekVfGSyw%2Bu69IrQ9XwKcNvsN2Fzq%2F3dVG1EOPDLzeplvR3so1GUadJMJg%2B6W%2FVcKiz06sB%2BLHPQUjMWPJ%2FNvCTfdPjEyKZkGN2htcwsXs%2BQkR5LwEeLrW4%2BvdZebYsXu%2Bj9gEhhRk7C4vRi%2FCCuGSmb7%2FY0itv2v6IPeji6a74sSEawNa6DEQyj3oiLptueE65Hc5ccU08G%2FouReQlHQD3oZnhFnjFwyp4Dcm3odgzkn7eO2NI%2BS306GYMxPsd50IAk2LmZqDHJZ6V7GoSqve%2FpOC0T%2Fg2iO5RnJHP%2BRivktDRbIBrTAc28qhcTqOF2M5V8CFHku74PxLYAKv6JAKEzgPopnDC7KrtLy4T2AzkJqIvdNsICgaEQih0cwuB4X8hwogu5As5KKGdvEUNEwVgwx65l2BqJZTYnhzmiccf%2BjgxPuvHd8L82Ij9hERMkFDcTkRjMcDG2rLdLETCQGpfwRG5u3papWlO%2F6QC6wmp0SDdoyuXgdbRYZh%2FzpornhidwU%2FTt2c0LulKf%2Bixmr2Xr7QugL83PI2IIY2KJELbpoL7VT03l%2FfURa9aEMLIbYlsaIAztAcqairKf%2FkvMX%2Fni8q8uGKnOy8l7sWdtyon1i3vuMOWB2L4GOqUBmAhfAP%2BzHJ4fVFnSgDQKNVDf9OVMwSl%2Fg4zv6UJ%2BfK%2BNWR9%2FKZa8fyQUufAAAKo0zvGFzHNJXrSjEwgyrYY1w5OFOl7UqRoXPm3Mush%2FgZE%2F8skUmkn8F2ZCKgSQJLXEVp76Sgm8zQ6KsYIRuoFeDFzFhE14E4n7zEuNlQDBgUlNSbHRoNu1KssDkPyfkYNGJ8pbmy9ZnYk1fV9qmBsvl4Rf6DwC&X-Amz-Signature=83a5be8c563952b898e3b70136ae9363b97c1d9631d6aa4de04f40446a8c7756&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XPSQZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFra1lVs5zRwnFmMEjS6Zvx3P%2Bcyqn0Wi%2ByrD8mQ%2BfH7AiEAm2mpcJHi%2F1Nx%2FWLAv%2F1n6Pmeq6JRjbtlfblXSve2%2B4Qq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHDxw5aLbf2vGzEgASrcA5BMwHBk%2F0%2FMpekVfGSyw%2Bu69IrQ9XwKcNvsN2Fzq%2F3dVG1EOPDLzeplvR3so1GUadJMJg%2B6W%2FVcKiz06sB%2BLHPQUjMWPJ%2FNvCTfdPjEyKZkGN2htcwsXs%2BQkR5LwEeLrW4%2BvdZebYsXu%2Bj9gEhhRk7C4vRi%2FCCuGSmb7%2FY0itv2v6IPeji6a74sSEawNa6DEQyj3oiLptueE65Hc5ccU08G%2FouReQlHQD3oZnhFnjFwyp4Dcm3odgzkn7eO2NI%2BS306GYMxPsd50IAk2LmZqDHJZ6V7GoSqve%2FpOC0T%2Fg2iO5RnJHP%2BRivktDRbIBrTAc28qhcTqOF2M5V8CFHku74PxLYAKv6JAKEzgPopnDC7KrtLy4T2AzkJqIvdNsICgaEQih0cwuB4X8hwogu5As5KKGdvEUNEwVgwx65l2BqJZTYnhzmiccf%2BjgxPuvHd8L82Ij9hERMkFDcTkRjMcDG2rLdLETCQGpfwRG5u3papWlO%2F6QC6wmp0SDdoyuXgdbRYZh%2FzpornhidwU%2FTt2c0LulKf%2Bixmr2Xr7QugL83PI2IIY2KJELbpoL7VT03l%2FfURa9aEMLIbYlsaIAztAcqairKf%2FkvMX%2Fni8q8uGKnOy8l7sWdtyon1i3vuMOWB2L4GOqUBmAhfAP%2BzHJ4fVFnSgDQKNVDf9OVMwSl%2Fg4zv6UJ%2BfK%2BNWR9%2FKZa8fyQUufAAAKo0zvGFzHNJXrSjEwgyrYY1w5OFOl7UqRoXPm3Mush%2FgZE%2F8skUmkn8F2ZCKgSQJLXEVp76Sgm8zQ6KsYIRuoFeDFzFhE14E4n7zEuNlQDBgUlNSbHRoNu1KssDkPyfkYNGJ8pbmy9ZnYk1fV9qmBsvl4Rf6DwC&X-Amz-Signature=6f0ca884b715ba9d325dfde59aa7c49cd72ca72a227a5e1c5426dca04a700f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XPSQZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFra1lVs5zRwnFmMEjS6Zvx3P%2Bcyqn0Wi%2ByrD8mQ%2BfH7AiEAm2mpcJHi%2F1Nx%2FWLAv%2F1n6Pmeq6JRjbtlfblXSve2%2B4Qq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHDxw5aLbf2vGzEgASrcA5BMwHBk%2F0%2FMpekVfGSyw%2Bu69IrQ9XwKcNvsN2Fzq%2F3dVG1EOPDLzeplvR3so1GUadJMJg%2B6W%2FVcKiz06sB%2BLHPQUjMWPJ%2FNvCTfdPjEyKZkGN2htcwsXs%2BQkR5LwEeLrW4%2BvdZebYsXu%2Bj9gEhhRk7C4vRi%2FCCuGSmb7%2FY0itv2v6IPeji6a74sSEawNa6DEQyj3oiLptueE65Hc5ccU08G%2FouReQlHQD3oZnhFnjFwyp4Dcm3odgzkn7eO2NI%2BS306GYMxPsd50IAk2LmZqDHJZ6V7GoSqve%2FpOC0T%2Fg2iO5RnJHP%2BRivktDRbIBrTAc28qhcTqOF2M5V8CFHku74PxLYAKv6JAKEzgPopnDC7KrtLy4T2AzkJqIvdNsICgaEQih0cwuB4X8hwogu5As5KKGdvEUNEwVgwx65l2BqJZTYnhzmiccf%2BjgxPuvHd8L82Ij9hERMkFDcTkRjMcDG2rLdLETCQGpfwRG5u3papWlO%2F6QC6wmp0SDdoyuXgdbRYZh%2FzpornhidwU%2FTt2c0LulKf%2Bixmr2Xr7QugL83PI2IIY2KJELbpoL7VT03l%2FfURa9aEMLIbYlsaIAztAcqairKf%2FkvMX%2Fni8q8uGKnOy8l7sWdtyon1i3vuMOWB2L4GOqUBmAhfAP%2BzHJ4fVFnSgDQKNVDf9OVMwSl%2Fg4zv6UJ%2BfK%2BNWR9%2FKZa8fyQUufAAAKo0zvGFzHNJXrSjEwgyrYY1w5OFOl7UqRoXPm3Mush%2FgZE%2F8skUmkn8F2ZCKgSQJLXEVp76Sgm8zQ6KsYIRuoFeDFzFhE14E4n7zEuNlQDBgUlNSbHRoNu1KssDkPyfkYNGJ8pbmy9ZnYk1fV9qmBsvl4Rf6DwC&X-Amz-Signature=c57eacc5d5625209da146ae55ecc3b13a86925269a7cda4adb3d523f9597c39e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
