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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCBBSFJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqO%2B35xsUC7aT6n7CRR7gAQv3KkchtPiUTnx2YDMekAiEAqPPG4oRFOvLrYGs1LargoQ56KVxftU%2BccWu1eq%2BQbFkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJYf7IR6FzJLdDRg9ircA66YoNjtkYRPsr%2BJDTH1RizPNTQRIqzLZ6lDb9y6gwJFcsjAakbrmWt3R1kMJRgW2bYSCZxvgCNmE0I1mGjoaACDTbLYzpMhDmuG3Pxpv4ldMDQOUEQ88nhbQFIDpdEugDqwc2XLcwqscPuYA7JSGbI4TLT9relG6l7O3CSv03seK2SmvXh%2BptPvPzUw%2FFyZH9yNgBqbIm5Y1WFotVnMe3CXBzammazKxZGVcUKkEvwZoZfZKOqtPTBBqf%2FDUdw6h8RFJpTPVXjTS3n5Z8T%2F2XpvQeBlMLuojhW1kEQfhp5jufeDHWbxyv84IrsQdCRGXAs7j%2B17g9Rie%2FXsOOUoYEe069ZrxYluhng8Ft%2FPvrf7%2F51%2FbUSUzDBn%2BQ7vPebmA%2B19ZdpyDQf2gd7gR28rnG2MK8Mf7F%2FYCHyoRN0Lbvb3NTFxLaMQj7SMZv7TMFd4D6r5J0W2oB6FGjWi5mOLCNxmS%2Bytt%2Fmxn%2F%2F4manW09%2B8N7Sp6lEygE1gUvTKjmgMSAmOCJO02d6dT5WRFQ1hwfFtAm8kMxAKvUUVaYEa5X2ao3uPMw6dfHn98%2FJMIkQvUgOIXPgfLPA6nEqfEJhIKzyqhzo0RDOWAbVTqrf5YSkvHv%2BqzhczLUMBvlYnMJrx670GOqUBILWvS5Vm89iSk046ClxYwSZJiGRZBOVyIFmijy0igYvEDmiSH1cHbqMEoCfpzQs%2B2knOJnZvQGQDqjNmEOAST8RVBK%2BsUGuN6ub5Hya2LthIwpO5FREm2yrtM%2FgZDN71OwjDXygF%2BiCIGJFE2S7a1w7WnGVkktvKOTmgkl2IVXJdc8NIzea7Dou3PZ6GKOcZprb7CIrSXOLDsepuy4x%2Bl8xjptzm&X-Amz-Signature=3e0df6722557775c38833db3e3b2fcf3f48a259c114d3929cb3d73e6aa96d33d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCBBSFJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqO%2B35xsUC7aT6n7CRR7gAQv3KkchtPiUTnx2YDMekAiEAqPPG4oRFOvLrYGs1LargoQ56KVxftU%2BccWu1eq%2BQbFkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJYf7IR6FzJLdDRg9ircA66YoNjtkYRPsr%2BJDTH1RizPNTQRIqzLZ6lDb9y6gwJFcsjAakbrmWt3R1kMJRgW2bYSCZxvgCNmE0I1mGjoaACDTbLYzpMhDmuG3Pxpv4ldMDQOUEQ88nhbQFIDpdEugDqwc2XLcwqscPuYA7JSGbI4TLT9relG6l7O3CSv03seK2SmvXh%2BptPvPzUw%2FFyZH9yNgBqbIm5Y1WFotVnMe3CXBzammazKxZGVcUKkEvwZoZfZKOqtPTBBqf%2FDUdw6h8RFJpTPVXjTS3n5Z8T%2F2XpvQeBlMLuojhW1kEQfhp5jufeDHWbxyv84IrsQdCRGXAs7j%2B17g9Rie%2FXsOOUoYEe069ZrxYluhng8Ft%2FPvrf7%2F51%2FbUSUzDBn%2BQ7vPebmA%2B19ZdpyDQf2gd7gR28rnG2MK8Mf7F%2FYCHyoRN0Lbvb3NTFxLaMQj7SMZv7TMFd4D6r5J0W2oB6FGjWi5mOLCNxmS%2Bytt%2Fmxn%2F%2F4manW09%2B8N7Sp6lEygE1gUvTKjmgMSAmOCJO02d6dT5WRFQ1hwfFtAm8kMxAKvUUVaYEa5X2ao3uPMw6dfHn98%2FJMIkQvUgOIXPgfLPA6nEqfEJhIKzyqhzo0RDOWAbVTqrf5YSkvHv%2BqzhczLUMBvlYnMJrx670GOqUBILWvS5Vm89iSk046ClxYwSZJiGRZBOVyIFmijy0igYvEDmiSH1cHbqMEoCfpzQs%2B2knOJnZvQGQDqjNmEOAST8RVBK%2BsUGuN6ub5Hya2LthIwpO5FREm2yrtM%2FgZDN71OwjDXygF%2BiCIGJFE2S7a1w7WnGVkktvKOTmgkl2IVXJdc8NIzea7Dou3PZ6GKOcZprb7CIrSXOLDsepuy4x%2Bl8xjptzm&X-Amz-Signature=40dd933b94b33799dc47bb80bfabf351e1ad31ab9c570228dbc39a1df5a9e97e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCBBSFJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqO%2B35xsUC7aT6n7CRR7gAQv3KkchtPiUTnx2YDMekAiEAqPPG4oRFOvLrYGs1LargoQ56KVxftU%2BccWu1eq%2BQbFkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJYf7IR6FzJLdDRg9ircA66YoNjtkYRPsr%2BJDTH1RizPNTQRIqzLZ6lDb9y6gwJFcsjAakbrmWt3R1kMJRgW2bYSCZxvgCNmE0I1mGjoaACDTbLYzpMhDmuG3Pxpv4ldMDQOUEQ88nhbQFIDpdEugDqwc2XLcwqscPuYA7JSGbI4TLT9relG6l7O3CSv03seK2SmvXh%2BptPvPzUw%2FFyZH9yNgBqbIm5Y1WFotVnMe3CXBzammazKxZGVcUKkEvwZoZfZKOqtPTBBqf%2FDUdw6h8RFJpTPVXjTS3n5Z8T%2F2XpvQeBlMLuojhW1kEQfhp5jufeDHWbxyv84IrsQdCRGXAs7j%2B17g9Rie%2FXsOOUoYEe069ZrxYluhng8Ft%2FPvrf7%2F51%2FbUSUzDBn%2BQ7vPebmA%2B19ZdpyDQf2gd7gR28rnG2MK8Mf7F%2FYCHyoRN0Lbvb3NTFxLaMQj7SMZv7TMFd4D6r5J0W2oB6FGjWi5mOLCNxmS%2Bytt%2Fmxn%2F%2F4manW09%2B8N7Sp6lEygE1gUvTKjmgMSAmOCJO02d6dT5WRFQ1hwfFtAm8kMxAKvUUVaYEa5X2ao3uPMw6dfHn98%2FJMIkQvUgOIXPgfLPA6nEqfEJhIKzyqhzo0RDOWAbVTqrf5YSkvHv%2BqzhczLUMBvlYnMJrx670GOqUBILWvS5Vm89iSk046ClxYwSZJiGRZBOVyIFmijy0igYvEDmiSH1cHbqMEoCfpzQs%2B2knOJnZvQGQDqjNmEOAST8RVBK%2BsUGuN6ub5Hya2LthIwpO5FREm2yrtM%2FgZDN71OwjDXygF%2BiCIGJFE2S7a1w7WnGVkktvKOTmgkl2IVXJdc8NIzea7Dou3PZ6GKOcZprb7CIrSXOLDsepuy4x%2Bl8xjptzm&X-Amz-Signature=1d36f3718df886091b0b1e135824c9f5689d9f247e220320553a8c2a0da5ba44&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCBBSFJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqO%2B35xsUC7aT6n7CRR7gAQv3KkchtPiUTnx2YDMekAiEAqPPG4oRFOvLrYGs1LargoQ56KVxftU%2BccWu1eq%2BQbFkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJYf7IR6FzJLdDRg9ircA66YoNjtkYRPsr%2BJDTH1RizPNTQRIqzLZ6lDb9y6gwJFcsjAakbrmWt3R1kMJRgW2bYSCZxvgCNmE0I1mGjoaACDTbLYzpMhDmuG3Pxpv4ldMDQOUEQ88nhbQFIDpdEugDqwc2XLcwqscPuYA7JSGbI4TLT9relG6l7O3CSv03seK2SmvXh%2BptPvPzUw%2FFyZH9yNgBqbIm5Y1WFotVnMe3CXBzammazKxZGVcUKkEvwZoZfZKOqtPTBBqf%2FDUdw6h8RFJpTPVXjTS3n5Z8T%2F2XpvQeBlMLuojhW1kEQfhp5jufeDHWbxyv84IrsQdCRGXAs7j%2B17g9Rie%2FXsOOUoYEe069ZrxYluhng8Ft%2FPvrf7%2F51%2FbUSUzDBn%2BQ7vPebmA%2B19ZdpyDQf2gd7gR28rnG2MK8Mf7F%2FYCHyoRN0Lbvb3NTFxLaMQj7SMZv7TMFd4D6r5J0W2oB6FGjWi5mOLCNxmS%2Bytt%2Fmxn%2F%2F4manW09%2B8N7Sp6lEygE1gUvTKjmgMSAmOCJO02d6dT5WRFQ1hwfFtAm8kMxAKvUUVaYEa5X2ao3uPMw6dfHn98%2FJMIkQvUgOIXPgfLPA6nEqfEJhIKzyqhzo0RDOWAbVTqrf5YSkvHv%2BqzhczLUMBvlYnMJrx670GOqUBILWvS5Vm89iSk046ClxYwSZJiGRZBOVyIFmijy0igYvEDmiSH1cHbqMEoCfpzQs%2B2knOJnZvQGQDqjNmEOAST8RVBK%2BsUGuN6ub5Hya2LthIwpO5FREm2yrtM%2FgZDN71OwjDXygF%2BiCIGJFE2S7a1w7WnGVkktvKOTmgkl2IVXJdc8NIzea7Dou3PZ6GKOcZprb7CIrSXOLDsepuy4x%2Bl8xjptzm&X-Amz-Signature=f854d39659e0021c815ea1521b262d0bd2e987c02d2cc06e581ba1be46398b25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCBBSFJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqO%2B35xsUC7aT6n7CRR7gAQv3KkchtPiUTnx2YDMekAiEAqPPG4oRFOvLrYGs1LargoQ56KVxftU%2BccWu1eq%2BQbFkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJYf7IR6FzJLdDRg9ircA66YoNjtkYRPsr%2BJDTH1RizPNTQRIqzLZ6lDb9y6gwJFcsjAakbrmWt3R1kMJRgW2bYSCZxvgCNmE0I1mGjoaACDTbLYzpMhDmuG3Pxpv4ldMDQOUEQ88nhbQFIDpdEugDqwc2XLcwqscPuYA7JSGbI4TLT9relG6l7O3CSv03seK2SmvXh%2BptPvPzUw%2FFyZH9yNgBqbIm5Y1WFotVnMe3CXBzammazKxZGVcUKkEvwZoZfZKOqtPTBBqf%2FDUdw6h8RFJpTPVXjTS3n5Z8T%2F2XpvQeBlMLuojhW1kEQfhp5jufeDHWbxyv84IrsQdCRGXAs7j%2B17g9Rie%2FXsOOUoYEe069ZrxYluhng8Ft%2FPvrf7%2F51%2FbUSUzDBn%2BQ7vPebmA%2B19ZdpyDQf2gd7gR28rnG2MK8Mf7F%2FYCHyoRN0Lbvb3NTFxLaMQj7SMZv7TMFd4D6r5J0W2oB6FGjWi5mOLCNxmS%2Bytt%2Fmxn%2F%2F4manW09%2B8N7Sp6lEygE1gUvTKjmgMSAmOCJO02d6dT5WRFQ1hwfFtAm8kMxAKvUUVaYEa5X2ao3uPMw6dfHn98%2FJMIkQvUgOIXPgfLPA6nEqfEJhIKzyqhzo0RDOWAbVTqrf5YSkvHv%2BqzhczLUMBvlYnMJrx670GOqUBILWvS5Vm89iSk046ClxYwSZJiGRZBOVyIFmijy0igYvEDmiSH1cHbqMEoCfpzQs%2B2knOJnZvQGQDqjNmEOAST8RVBK%2BsUGuN6ub5Hya2LthIwpO5FREm2yrtM%2FgZDN71OwjDXygF%2BiCIGJFE2S7a1w7WnGVkktvKOTmgkl2IVXJdc8NIzea7Dou3PZ6GKOcZprb7CIrSXOLDsepuy4x%2Bl8xjptzm&X-Amz-Signature=d2fad0afa5d97092761acbcd3ce24ea3f7e0c22107f3a605187c61ef65ea0d80&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
