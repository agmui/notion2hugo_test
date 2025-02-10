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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEKFPKW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK9oXyxl%2FEr9JA21J11GtZ8r%2FK1NCD7YhyW5eWfUJCUAiEAwIlRx%2FwxxvajWnTR8b4BTj%2BwqgdV0ZpAOr9czmmZfaoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkCUZCbws9piGCv%2FyrcA5%2BHPI80ZMBsrNUfefm1IkapBqeosW7XUnd9WXuQl7HkPE2SUSGHGukYvxqa3Ha8TD3nlVMPtFC33j7YbXAxMYvIkvvqHXD6h0RTzVOGOJDr6Zn7hlp5UvSHNb4%2FgV8lwFNCoM4gm%2F6v6b%2BtHVpNFEI5DcNi87Tig7IqZCUUlTlsn%2FGuK1myrjbUadGPmgCeT7P5IQTrnujAh3wWb%2FA7pE31%2BQ7eLpqLyAHHQ3Ilm9I0ueFfLffoD6YxuhRPufgog9oqON6RctmwsgE6WnDRohtIz4gMXZmSGwQzfAQ9Dq5N%2Bm2JqhB%2FjP7QLqY5Iqjxel5LqHlz5IVSQa%2BNWUnVrjKNgmtppO%2FCTXE%2B524usQE1rcpVbF8%2BoyUnLrth4yW1FfTd6MKC9ewDvqn%2Fao3z1S324WrxpAHn4Frm0hpSvcWpP8Dg1Lt1rW3J3XlCsXevnNj1Wgt4qOefUy4N5Z1CKMgHUl9wQzcybuQRo0JHPA%2F1oIaufDGeaNGFR8Rum2w2JYajCXh277NBZOfInxY0UwTlYo3ymgelRRHW9olPZM6iiaBxxZuFry2W3SHEKSMNLNIwgBzom4R2OEneq7Zfnpn0CyNqDuaMmrCPLpkXbrhU8OCTtNysk9PhyACoMI2zqb0GOqUBFnsttAacTcpPqnbsSndnOXD2WxUPhneq5vwWaop4LfxBU%2BrcFPjGqpge88yUyIrC%2FlzQJriLrdOrS230bOu%2Bch82xv%2FxUjQMoQwaHMsHvsmZqO1JWBmSbrJYJwTWqeiF1zY63Y%2BPFL%2FzOtbaYMRWLc3amrIZFgzjkf7Ap8HFZ4Alu2VjfF1Den3rdUl4vDC6wXZvez5I0t7NunUZ9i5d%2FEXwk9qb&X-Amz-Signature=be7df39a10f9c75a45e0e60b91155fd8a777cf3b844bfcd8d2e87d91cabcd34b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEKFPKW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK9oXyxl%2FEr9JA21J11GtZ8r%2FK1NCD7YhyW5eWfUJCUAiEAwIlRx%2FwxxvajWnTR8b4BTj%2BwqgdV0ZpAOr9czmmZfaoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkCUZCbws9piGCv%2FyrcA5%2BHPI80ZMBsrNUfefm1IkapBqeosW7XUnd9WXuQl7HkPE2SUSGHGukYvxqa3Ha8TD3nlVMPtFC33j7YbXAxMYvIkvvqHXD6h0RTzVOGOJDr6Zn7hlp5UvSHNb4%2FgV8lwFNCoM4gm%2F6v6b%2BtHVpNFEI5DcNi87Tig7IqZCUUlTlsn%2FGuK1myrjbUadGPmgCeT7P5IQTrnujAh3wWb%2FA7pE31%2BQ7eLpqLyAHHQ3Ilm9I0ueFfLffoD6YxuhRPufgog9oqON6RctmwsgE6WnDRohtIz4gMXZmSGwQzfAQ9Dq5N%2Bm2JqhB%2FjP7QLqY5Iqjxel5LqHlz5IVSQa%2BNWUnVrjKNgmtppO%2FCTXE%2B524usQE1rcpVbF8%2BoyUnLrth4yW1FfTd6MKC9ewDvqn%2Fao3z1S324WrxpAHn4Frm0hpSvcWpP8Dg1Lt1rW3J3XlCsXevnNj1Wgt4qOefUy4N5Z1CKMgHUl9wQzcybuQRo0JHPA%2F1oIaufDGeaNGFR8Rum2w2JYajCXh277NBZOfInxY0UwTlYo3ymgelRRHW9olPZM6iiaBxxZuFry2W3SHEKSMNLNIwgBzom4R2OEneq7Zfnpn0CyNqDuaMmrCPLpkXbrhU8OCTtNysk9PhyACoMI2zqb0GOqUBFnsttAacTcpPqnbsSndnOXD2WxUPhneq5vwWaop4LfxBU%2BrcFPjGqpge88yUyIrC%2FlzQJriLrdOrS230bOu%2Bch82xv%2FxUjQMoQwaHMsHvsmZqO1JWBmSbrJYJwTWqeiF1zY63Y%2BPFL%2FzOtbaYMRWLc3amrIZFgzjkf7Ap8HFZ4Alu2VjfF1Den3rdUl4vDC6wXZvez5I0t7NunUZ9i5d%2FEXwk9qb&X-Amz-Signature=8340d0cc04a7bd1e748c3e16b2d4c2aae5d82d80f9f88bd5b95fc5b83c396c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEKFPKW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK9oXyxl%2FEr9JA21J11GtZ8r%2FK1NCD7YhyW5eWfUJCUAiEAwIlRx%2FwxxvajWnTR8b4BTj%2BwqgdV0ZpAOr9czmmZfaoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkCUZCbws9piGCv%2FyrcA5%2BHPI80ZMBsrNUfefm1IkapBqeosW7XUnd9WXuQl7HkPE2SUSGHGukYvxqa3Ha8TD3nlVMPtFC33j7YbXAxMYvIkvvqHXD6h0RTzVOGOJDr6Zn7hlp5UvSHNb4%2FgV8lwFNCoM4gm%2F6v6b%2BtHVpNFEI5DcNi87Tig7IqZCUUlTlsn%2FGuK1myrjbUadGPmgCeT7P5IQTrnujAh3wWb%2FA7pE31%2BQ7eLpqLyAHHQ3Ilm9I0ueFfLffoD6YxuhRPufgog9oqON6RctmwsgE6WnDRohtIz4gMXZmSGwQzfAQ9Dq5N%2Bm2JqhB%2FjP7QLqY5Iqjxel5LqHlz5IVSQa%2BNWUnVrjKNgmtppO%2FCTXE%2B524usQE1rcpVbF8%2BoyUnLrth4yW1FfTd6MKC9ewDvqn%2Fao3z1S324WrxpAHn4Frm0hpSvcWpP8Dg1Lt1rW3J3XlCsXevnNj1Wgt4qOefUy4N5Z1CKMgHUl9wQzcybuQRo0JHPA%2F1oIaufDGeaNGFR8Rum2w2JYajCXh277NBZOfInxY0UwTlYo3ymgelRRHW9olPZM6iiaBxxZuFry2W3SHEKSMNLNIwgBzom4R2OEneq7Zfnpn0CyNqDuaMmrCPLpkXbrhU8OCTtNysk9PhyACoMI2zqb0GOqUBFnsttAacTcpPqnbsSndnOXD2WxUPhneq5vwWaop4LfxBU%2BrcFPjGqpge88yUyIrC%2FlzQJriLrdOrS230bOu%2Bch82xv%2FxUjQMoQwaHMsHvsmZqO1JWBmSbrJYJwTWqeiF1zY63Y%2BPFL%2FzOtbaYMRWLc3amrIZFgzjkf7Ap8HFZ4Alu2VjfF1Den3rdUl4vDC6wXZvez5I0t7NunUZ9i5d%2FEXwk9qb&X-Amz-Signature=1892d2ab2c1aa1970c1b3690435bf56741a4a6b1301b476e20958b494d84d3a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEKFPKW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK9oXyxl%2FEr9JA21J11GtZ8r%2FK1NCD7YhyW5eWfUJCUAiEAwIlRx%2FwxxvajWnTR8b4BTj%2BwqgdV0ZpAOr9czmmZfaoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkCUZCbws9piGCv%2FyrcA5%2BHPI80ZMBsrNUfefm1IkapBqeosW7XUnd9WXuQl7HkPE2SUSGHGukYvxqa3Ha8TD3nlVMPtFC33j7YbXAxMYvIkvvqHXD6h0RTzVOGOJDr6Zn7hlp5UvSHNb4%2FgV8lwFNCoM4gm%2F6v6b%2BtHVpNFEI5DcNi87Tig7IqZCUUlTlsn%2FGuK1myrjbUadGPmgCeT7P5IQTrnujAh3wWb%2FA7pE31%2BQ7eLpqLyAHHQ3Ilm9I0ueFfLffoD6YxuhRPufgog9oqON6RctmwsgE6WnDRohtIz4gMXZmSGwQzfAQ9Dq5N%2Bm2JqhB%2FjP7QLqY5Iqjxel5LqHlz5IVSQa%2BNWUnVrjKNgmtppO%2FCTXE%2B524usQE1rcpVbF8%2BoyUnLrth4yW1FfTd6MKC9ewDvqn%2Fao3z1S324WrxpAHn4Frm0hpSvcWpP8Dg1Lt1rW3J3XlCsXevnNj1Wgt4qOefUy4N5Z1CKMgHUl9wQzcybuQRo0JHPA%2F1oIaufDGeaNGFR8Rum2w2JYajCXh277NBZOfInxY0UwTlYo3ymgelRRHW9olPZM6iiaBxxZuFry2W3SHEKSMNLNIwgBzom4R2OEneq7Zfnpn0CyNqDuaMmrCPLpkXbrhU8OCTtNysk9PhyACoMI2zqb0GOqUBFnsttAacTcpPqnbsSndnOXD2WxUPhneq5vwWaop4LfxBU%2BrcFPjGqpge88yUyIrC%2FlzQJriLrdOrS230bOu%2Bch82xv%2FxUjQMoQwaHMsHvsmZqO1JWBmSbrJYJwTWqeiF1zY63Y%2BPFL%2FzOtbaYMRWLc3amrIZFgzjkf7Ap8HFZ4Alu2VjfF1Den3rdUl4vDC6wXZvez5I0t7NunUZ9i5d%2FEXwk9qb&X-Amz-Signature=fdc791f9c62b636533959950d821c299fc771a3b63260e6906cb0633220e00d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEKFPKW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK9oXyxl%2FEr9JA21J11GtZ8r%2FK1NCD7YhyW5eWfUJCUAiEAwIlRx%2FwxxvajWnTR8b4BTj%2BwqgdV0ZpAOr9czmmZfaoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkCUZCbws9piGCv%2FyrcA5%2BHPI80ZMBsrNUfefm1IkapBqeosW7XUnd9WXuQl7HkPE2SUSGHGukYvxqa3Ha8TD3nlVMPtFC33j7YbXAxMYvIkvvqHXD6h0RTzVOGOJDr6Zn7hlp5UvSHNb4%2FgV8lwFNCoM4gm%2F6v6b%2BtHVpNFEI5DcNi87Tig7IqZCUUlTlsn%2FGuK1myrjbUadGPmgCeT7P5IQTrnujAh3wWb%2FA7pE31%2BQ7eLpqLyAHHQ3Ilm9I0ueFfLffoD6YxuhRPufgog9oqON6RctmwsgE6WnDRohtIz4gMXZmSGwQzfAQ9Dq5N%2Bm2JqhB%2FjP7QLqY5Iqjxel5LqHlz5IVSQa%2BNWUnVrjKNgmtppO%2FCTXE%2B524usQE1rcpVbF8%2BoyUnLrth4yW1FfTd6MKC9ewDvqn%2Fao3z1S324WrxpAHn4Frm0hpSvcWpP8Dg1Lt1rW3J3XlCsXevnNj1Wgt4qOefUy4N5Z1CKMgHUl9wQzcybuQRo0JHPA%2F1oIaufDGeaNGFR8Rum2w2JYajCXh277NBZOfInxY0UwTlYo3ymgelRRHW9olPZM6iiaBxxZuFry2W3SHEKSMNLNIwgBzom4R2OEneq7Zfnpn0CyNqDuaMmrCPLpkXbrhU8OCTtNysk9PhyACoMI2zqb0GOqUBFnsttAacTcpPqnbsSndnOXD2WxUPhneq5vwWaop4LfxBU%2BrcFPjGqpge88yUyIrC%2FlzQJriLrdOrS230bOu%2Bch82xv%2FxUjQMoQwaHMsHvsmZqO1JWBmSbrJYJwTWqeiF1zY63Y%2BPFL%2FzOtbaYMRWLc3amrIZFgzjkf7Ap8HFZ4Alu2VjfF1Den3rdUl4vDC6wXZvez5I0t7NunUZ9i5d%2FEXwk9qb&X-Amz-Signature=8d94d1ba8da86c626fb5c358a3b055e8f83cc6f8bf69da62c5d8ed3004628369&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
