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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTA3XDUM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGJbRUiqEpgNfZkO40myUgJsFuNOpt7o7tX53O37ckWwIgLGsuXKwuUm%2FeHXGR2PGibYs9onDLEhSdqAX2kU06%2BdEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCDqzcM7Ss1GH8IblSrcA32syaPyTP7vyKv8nVQOd%2FJ8GMtlRz%2B4ofzOxXkhN%2BY6Mzl52nA5LJfSiOddqf%2F4d2uC%2BwcbSXZkxHcAx4mAA0NTd%2BYYUyjMEjlxI9yBEsfcVSlK%2BTeWK1OdJBe%2Ba81nRQ95hoSI%2FDpotC8OmHt9dXUKGANpp4%2BIttUcLg1kMaa7L5QdN01MmlYWvUxmFkOwumujlsIlH27euSRgs3MAEGYHGDX4bFGSptkuy0myz98%2FgJSGpNCmzEWO%2BV8Z62Fq8AGk5pZX9PWAdqWT8%2B5m02kudbPF6IVQc3X1zutH80917nJaVu7le5Su3BFR6YyP84dQCVMuYp3Yc4QzbOoy6BEiP7Ds3Ihf%2BpyTftzZxR7DAB78cMMkUh0KySdh8CtFqYpxDig7MJgfzK4pFY%2FobwI%2FtoD3xonFvlKIkAvRqLieqPsWsjI%2BdybeFNofv6A55G0V4fnBlK3DgCwfYzp%2Bb2GlOTc%2Fk642zyD9A6sIprVLOrQ6GGNUXmP9eTmkX03Srg42rZoVDOb6LK65a%2BwzFRoTwVSAT9AQq228Z94DHYpW9F6nYsdhanzddPEKSNra7pFvyprDVO3dxJlNRMJzGeZ%2B6q6juNjKIKe4FM%2FFFmlw7PsTQQzl0Sbyxi0kMJTc3L4GOqUB0rOHi0oogO%2FlQTQAJetA57cMIxYrYbUstFKlAMKIt6pX4SLpyawcQKSf6xsTYNqzzCgLBiR31ZB1d14G2KJoNTpF0gHSadyg5X9X5NpRgXZDoyY7DGs54iUcciHkf3XX4n5KAgk8ug9DrEw2CaBEtriiAMD1O%2BhPC0v%2B6xdmMb3uAXENUQhQK4FHCluBcBmb6dzGnFpqcUoYisYL3zX3NjYgJw3u&X-Amz-Signature=9de8f345bf2401725c6987eb2307e1e32ca651c9992514906c1111d687b19e47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTA3XDUM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGJbRUiqEpgNfZkO40myUgJsFuNOpt7o7tX53O37ckWwIgLGsuXKwuUm%2FeHXGR2PGibYs9onDLEhSdqAX2kU06%2BdEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCDqzcM7Ss1GH8IblSrcA32syaPyTP7vyKv8nVQOd%2FJ8GMtlRz%2B4ofzOxXkhN%2BY6Mzl52nA5LJfSiOddqf%2F4d2uC%2BwcbSXZkxHcAx4mAA0NTd%2BYYUyjMEjlxI9yBEsfcVSlK%2BTeWK1OdJBe%2Ba81nRQ95hoSI%2FDpotC8OmHt9dXUKGANpp4%2BIttUcLg1kMaa7L5QdN01MmlYWvUxmFkOwumujlsIlH27euSRgs3MAEGYHGDX4bFGSptkuy0myz98%2FgJSGpNCmzEWO%2BV8Z62Fq8AGk5pZX9PWAdqWT8%2B5m02kudbPF6IVQc3X1zutH80917nJaVu7le5Su3BFR6YyP84dQCVMuYp3Yc4QzbOoy6BEiP7Ds3Ihf%2BpyTftzZxR7DAB78cMMkUh0KySdh8CtFqYpxDig7MJgfzK4pFY%2FobwI%2FtoD3xonFvlKIkAvRqLieqPsWsjI%2BdybeFNofv6A55G0V4fnBlK3DgCwfYzp%2Bb2GlOTc%2Fk642zyD9A6sIprVLOrQ6GGNUXmP9eTmkX03Srg42rZoVDOb6LK65a%2BwzFRoTwVSAT9AQq228Z94DHYpW9F6nYsdhanzddPEKSNra7pFvyprDVO3dxJlNRMJzGeZ%2B6q6juNjKIKe4FM%2FFFmlw7PsTQQzl0Sbyxi0kMJTc3L4GOqUB0rOHi0oogO%2FlQTQAJetA57cMIxYrYbUstFKlAMKIt6pX4SLpyawcQKSf6xsTYNqzzCgLBiR31ZB1d14G2KJoNTpF0gHSadyg5X9X5NpRgXZDoyY7DGs54iUcciHkf3XX4n5KAgk8ug9DrEw2CaBEtriiAMD1O%2BhPC0v%2B6xdmMb3uAXENUQhQK4FHCluBcBmb6dzGnFpqcUoYisYL3zX3NjYgJw3u&X-Amz-Signature=7024636a53d3d7bd3d1f032ffd084264734afe8732bff3f92463b5da750a8292&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTA3XDUM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGJbRUiqEpgNfZkO40myUgJsFuNOpt7o7tX53O37ckWwIgLGsuXKwuUm%2FeHXGR2PGibYs9onDLEhSdqAX2kU06%2BdEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCDqzcM7Ss1GH8IblSrcA32syaPyTP7vyKv8nVQOd%2FJ8GMtlRz%2B4ofzOxXkhN%2BY6Mzl52nA5LJfSiOddqf%2F4d2uC%2BwcbSXZkxHcAx4mAA0NTd%2BYYUyjMEjlxI9yBEsfcVSlK%2BTeWK1OdJBe%2Ba81nRQ95hoSI%2FDpotC8OmHt9dXUKGANpp4%2BIttUcLg1kMaa7L5QdN01MmlYWvUxmFkOwumujlsIlH27euSRgs3MAEGYHGDX4bFGSptkuy0myz98%2FgJSGpNCmzEWO%2BV8Z62Fq8AGk5pZX9PWAdqWT8%2B5m02kudbPF6IVQc3X1zutH80917nJaVu7le5Su3BFR6YyP84dQCVMuYp3Yc4QzbOoy6BEiP7Ds3Ihf%2BpyTftzZxR7DAB78cMMkUh0KySdh8CtFqYpxDig7MJgfzK4pFY%2FobwI%2FtoD3xonFvlKIkAvRqLieqPsWsjI%2BdybeFNofv6A55G0V4fnBlK3DgCwfYzp%2Bb2GlOTc%2Fk642zyD9A6sIprVLOrQ6GGNUXmP9eTmkX03Srg42rZoVDOb6LK65a%2BwzFRoTwVSAT9AQq228Z94DHYpW9F6nYsdhanzddPEKSNra7pFvyprDVO3dxJlNRMJzGeZ%2B6q6juNjKIKe4FM%2FFFmlw7PsTQQzl0Sbyxi0kMJTc3L4GOqUB0rOHi0oogO%2FlQTQAJetA57cMIxYrYbUstFKlAMKIt6pX4SLpyawcQKSf6xsTYNqzzCgLBiR31ZB1d14G2KJoNTpF0gHSadyg5X9X5NpRgXZDoyY7DGs54iUcciHkf3XX4n5KAgk8ug9DrEw2CaBEtriiAMD1O%2BhPC0v%2B6xdmMb3uAXENUQhQK4FHCluBcBmb6dzGnFpqcUoYisYL3zX3NjYgJw3u&X-Amz-Signature=41d784581bcd69c6174ad6ccdb39928abe5bdf0f72f444334bd3b432ec045b60&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTA3XDUM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGJbRUiqEpgNfZkO40myUgJsFuNOpt7o7tX53O37ckWwIgLGsuXKwuUm%2FeHXGR2PGibYs9onDLEhSdqAX2kU06%2BdEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCDqzcM7Ss1GH8IblSrcA32syaPyTP7vyKv8nVQOd%2FJ8GMtlRz%2B4ofzOxXkhN%2BY6Mzl52nA5LJfSiOddqf%2F4d2uC%2BwcbSXZkxHcAx4mAA0NTd%2BYYUyjMEjlxI9yBEsfcVSlK%2BTeWK1OdJBe%2Ba81nRQ95hoSI%2FDpotC8OmHt9dXUKGANpp4%2BIttUcLg1kMaa7L5QdN01MmlYWvUxmFkOwumujlsIlH27euSRgs3MAEGYHGDX4bFGSptkuy0myz98%2FgJSGpNCmzEWO%2BV8Z62Fq8AGk5pZX9PWAdqWT8%2B5m02kudbPF6IVQc3X1zutH80917nJaVu7le5Su3BFR6YyP84dQCVMuYp3Yc4QzbOoy6BEiP7Ds3Ihf%2BpyTftzZxR7DAB78cMMkUh0KySdh8CtFqYpxDig7MJgfzK4pFY%2FobwI%2FtoD3xonFvlKIkAvRqLieqPsWsjI%2BdybeFNofv6A55G0V4fnBlK3DgCwfYzp%2Bb2GlOTc%2Fk642zyD9A6sIprVLOrQ6GGNUXmP9eTmkX03Srg42rZoVDOb6LK65a%2BwzFRoTwVSAT9AQq228Z94DHYpW9F6nYsdhanzddPEKSNra7pFvyprDVO3dxJlNRMJzGeZ%2B6q6juNjKIKe4FM%2FFFmlw7PsTQQzl0Sbyxi0kMJTc3L4GOqUB0rOHi0oogO%2FlQTQAJetA57cMIxYrYbUstFKlAMKIt6pX4SLpyawcQKSf6xsTYNqzzCgLBiR31ZB1d14G2KJoNTpF0gHSadyg5X9X5NpRgXZDoyY7DGs54iUcciHkf3XX4n5KAgk8ug9DrEw2CaBEtriiAMD1O%2BhPC0v%2B6xdmMb3uAXENUQhQK4FHCluBcBmb6dzGnFpqcUoYisYL3zX3NjYgJw3u&X-Amz-Signature=17dd60de4195d9dc597d2e17ac3c62b3204a84061863d8abb896f661ef2c43ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTA3XDUM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGJbRUiqEpgNfZkO40myUgJsFuNOpt7o7tX53O37ckWwIgLGsuXKwuUm%2FeHXGR2PGibYs9onDLEhSdqAX2kU06%2BdEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCDqzcM7Ss1GH8IblSrcA32syaPyTP7vyKv8nVQOd%2FJ8GMtlRz%2B4ofzOxXkhN%2BY6Mzl52nA5LJfSiOddqf%2F4d2uC%2BwcbSXZkxHcAx4mAA0NTd%2BYYUyjMEjlxI9yBEsfcVSlK%2BTeWK1OdJBe%2Ba81nRQ95hoSI%2FDpotC8OmHt9dXUKGANpp4%2BIttUcLg1kMaa7L5QdN01MmlYWvUxmFkOwumujlsIlH27euSRgs3MAEGYHGDX4bFGSptkuy0myz98%2FgJSGpNCmzEWO%2BV8Z62Fq8AGk5pZX9PWAdqWT8%2B5m02kudbPF6IVQc3X1zutH80917nJaVu7le5Su3BFR6YyP84dQCVMuYp3Yc4QzbOoy6BEiP7Ds3Ihf%2BpyTftzZxR7DAB78cMMkUh0KySdh8CtFqYpxDig7MJgfzK4pFY%2FobwI%2FtoD3xonFvlKIkAvRqLieqPsWsjI%2BdybeFNofv6A55G0V4fnBlK3DgCwfYzp%2Bb2GlOTc%2Fk642zyD9A6sIprVLOrQ6GGNUXmP9eTmkX03Srg42rZoVDOb6LK65a%2BwzFRoTwVSAT9AQq228Z94DHYpW9F6nYsdhanzddPEKSNra7pFvyprDVO3dxJlNRMJzGeZ%2B6q6juNjKIKe4FM%2FFFmlw7PsTQQzl0Sbyxi0kMJTc3L4GOqUB0rOHi0oogO%2FlQTQAJetA57cMIxYrYbUstFKlAMKIt6pX4SLpyawcQKSf6xsTYNqzzCgLBiR31ZB1d14G2KJoNTpF0gHSadyg5X9X5NpRgXZDoyY7DGs54iUcciHkf3XX4n5KAgk8ug9DrEw2CaBEtriiAMD1O%2BhPC0v%2B6xdmMb3uAXENUQhQK4FHCluBcBmb6dzGnFpqcUoYisYL3zX3NjYgJw3u&X-Amz-Signature=0a2081728b2fb90b4c30a4c46c3d7d0274fbc08e6ac00b267ddc1b6bd32cf3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
