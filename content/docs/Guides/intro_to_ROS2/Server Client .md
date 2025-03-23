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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MTYI6J%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEljcQJzeI063VutDhUC6OfORFtr8H%2BQbjCoZ4KIEab7AiEAzvUSHw3%2BJtM2vBfzxmxnr5zlKgURrn%2FxW25WpOqMPZUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSLYv119XQXN%2F0z7ircA1gI8dkYdrAuMfnxiqYVYODIEvtgwiD7Tq4fAnVMveWbo0MWUtRtqRt5mp1XGGpfZCDnQlMJlD0xWXKK93t6yvgRn50ZacSoFbic%2B00sN1fQYU693cGcxRx%2BX6LRcIVDPNQ4TDslnSxbmk996pTqRqNjVNypkt5L2lkQbd1h4h9l5Wj29wM3VXKYsA3FQUouORUHPLkqfaj4WOLlYC1K6b0GRqOgc1ecVscbFXNHtF%2FpPmRpEsSOPeT6fceouH%2FOFNu93OXvUdEbwBkrA0n26%2FdWaF%2BPd1XwSU25zyspAnjj04kNRp6JGNT0GhQuvI997gZky7l3uue7sua6nshHl5SM%2F5mj%2FNBOic1bJL7UiemMKJvKWa51Nfe%2FXa%2Fg%2Fj0cqeRHr8R21LRNX7uesAyIUnECOq1FzmHqJntXhQ%2FqKMEolEPpUd3J0mvjbVwFqzQY%2BlaXh3gdPPbNvRH0%2FVfFoXEl428PrEBYaG9iQcW9bK%2Fc8l3LsqAxydmLriAK2mMg0nIWYDKMPgks9j5V6qkN1dxsPG%2FWHA1Y46yz78gM%2Ftz0hk%2BUwZOufjV%2BQnwck7kBxxCROnqb0ZhNVmvAKqRsDOFiQbc9UjzJG3fCAj91vU6Z6XeFnmtJqJXdrZCjMM7Kgb8GOqUBbl8rZEh6vVMPOUZOyszHDWarwb8DynW1%2BpvlzRoGI7CkHs4elXG852g2WpcsqFkIVaHhAQYQC%2F7dCZaT4mbZUsMp150R7MPXvcwzpdpl0MjyfGdhvAdmpocpeh22o6E0eZvVWK4XnoiVv9F0qbUo44Hl7Ybd77LnCJ%2BJ4H0lDeo%2FJYLm%2Fehbn0ia1AUJzlszPIC44jFNCnaPGzdN%2FWJDG4%2Fe%2BwVq&X-Amz-Signature=39cc557b7156bb182f19217159796331d856c2628d0d1346caedbb1a1ec2733c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MTYI6J%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEljcQJzeI063VutDhUC6OfORFtr8H%2BQbjCoZ4KIEab7AiEAzvUSHw3%2BJtM2vBfzxmxnr5zlKgURrn%2FxW25WpOqMPZUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSLYv119XQXN%2F0z7ircA1gI8dkYdrAuMfnxiqYVYODIEvtgwiD7Tq4fAnVMveWbo0MWUtRtqRt5mp1XGGpfZCDnQlMJlD0xWXKK93t6yvgRn50ZacSoFbic%2B00sN1fQYU693cGcxRx%2BX6LRcIVDPNQ4TDslnSxbmk996pTqRqNjVNypkt5L2lkQbd1h4h9l5Wj29wM3VXKYsA3FQUouORUHPLkqfaj4WOLlYC1K6b0GRqOgc1ecVscbFXNHtF%2FpPmRpEsSOPeT6fceouH%2FOFNu93OXvUdEbwBkrA0n26%2FdWaF%2BPd1XwSU25zyspAnjj04kNRp6JGNT0GhQuvI997gZky7l3uue7sua6nshHl5SM%2F5mj%2FNBOic1bJL7UiemMKJvKWa51Nfe%2FXa%2Fg%2Fj0cqeRHr8R21LRNX7uesAyIUnECOq1FzmHqJntXhQ%2FqKMEolEPpUd3J0mvjbVwFqzQY%2BlaXh3gdPPbNvRH0%2FVfFoXEl428PrEBYaG9iQcW9bK%2Fc8l3LsqAxydmLriAK2mMg0nIWYDKMPgks9j5V6qkN1dxsPG%2FWHA1Y46yz78gM%2Ftz0hk%2BUwZOufjV%2BQnwck7kBxxCROnqb0ZhNVmvAKqRsDOFiQbc9UjzJG3fCAj91vU6Z6XeFnmtJqJXdrZCjMM7Kgb8GOqUBbl8rZEh6vVMPOUZOyszHDWarwb8DynW1%2BpvlzRoGI7CkHs4elXG852g2WpcsqFkIVaHhAQYQC%2F7dCZaT4mbZUsMp150R7MPXvcwzpdpl0MjyfGdhvAdmpocpeh22o6E0eZvVWK4XnoiVv9F0qbUo44Hl7Ybd77LnCJ%2BJ4H0lDeo%2FJYLm%2Fehbn0ia1AUJzlszPIC44jFNCnaPGzdN%2FWJDG4%2Fe%2BwVq&X-Amz-Signature=b3a9f13b05e9aefc6bf46c99a5575f476650a5be1e59f7da9ed68771c16299b8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MTYI6J%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEljcQJzeI063VutDhUC6OfORFtr8H%2BQbjCoZ4KIEab7AiEAzvUSHw3%2BJtM2vBfzxmxnr5zlKgURrn%2FxW25WpOqMPZUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSLYv119XQXN%2F0z7ircA1gI8dkYdrAuMfnxiqYVYODIEvtgwiD7Tq4fAnVMveWbo0MWUtRtqRt5mp1XGGpfZCDnQlMJlD0xWXKK93t6yvgRn50ZacSoFbic%2B00sN1fQYU693cGcxRx%2BX6LRcIVDPNQ4TDslnSxbmk996pTqRqNjVNypkt5L2lkQbd1h4h9l5Wj29wM3VXKYsA3FQUouORUHPLkqfaj4WOLlYC1K6b0GRqOgc1ecVscbFXNHtF%2FpPmRpEsSOPeT6fceouH%2FOFNu93OXvUdEbwBkrA0n26%2FdWaF%2BPd1XwSU25zyspAnjj04kNRp6JGNT0GhQuvI997gZky7l3uue7sua6nshHl5SM%2F5mj%2FNBOic1bJL7UiemMKJvKWa51Nfe%2FXa%2Fg%2Fj0cqeRHr8R21LRNX7uesAyIUnECOq1FzmHqJntXhQ%2FqKMEolEPpUd3J0mvjbVwFqzQY%2BlaXh3gdPPbNvRH0%2FVfFoXEl428PrEBYaG9iQcW9bK%2Fc8l3LsqAxydmLriAK2mMg0nIWYDKMPgks9j5V6qkN1dxsPG%2FWHA1Y46yz78gM%2Ftz0hk%2BUwZOufjV%2BQnwck7kBxxCROnqb0ZhNVmvAKqRsDOFiQbc9UjzJG3fCAj91vU6Z6XeFnmtJqJXdrZCjMM7Kgb8GOqUBbl8rZEh6vVMPOUZOyszHDWarwb8DynW1%2BpvlzRoGI7CkHs4elXG852g2WpcsqFkIVaHhAQYQC%2F7dCZaT4mbZUsMp150R7MPXvcwzpdpl0MjyfGdhvAdmpocpeh22o6E0eZvVWK4XnoiVv9F0qbUo44Hl7Ybd77LnCJ%2BJ4H0lDeo%2FJYLm%2Fehbn0ia1AUJzlszPIC44jFNCnaPGzdN%2FWJDG4%2Fe%2BwVq&X-Amz-Signature=66073e40a3b578dd43901be361b5cea463f27c8f5fc52cbbddf25d9552a5172a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MTYI6J%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEljcQJzeI063VutDhUC6OfORFtr8H%2BQbjCoZ4KIEab7AiEAzvUSHw3%2BJtM2vBfzxmxnr5zlKgURrn%2FxW25WpOqMPZUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSLYv119XQXN%2F0z7ircA1gI8dkYdrAuMfnxiqYVYODIEvtgwiD7Tq4fAnVMveWbo0MWUtRtqRt5mp1XGGpfZCDnQlMJlD0xWXKK93t6yvgRn50ZacSoFbic%2B00sN1fQYU693cGcxRx%2BX6LRcIVDPNQ4TDslnSxbmk996pTqRqNjVNypkt5L2lkQbd1h4h9l5Wj29wM3VXKYsA3FQUouORUHPLkqfaj4WOLlYC1K6b0GRqOgc1ecVscbFXNHtF%2FpPmRpEsSOPeT6fceouH%2FOFNu93OXvUdEbwBkrA0n26%2FdWaF%2BPd1XwSU25zyspAnjj04kNRp6JGNT0GhQuvI997gZky7l3uue7sua6nshHl5SM%2F5mj%2FNBOic1bJL7UiemMKJvKWa51Nfe%2FXa%2Fg%2Fj0cqeRHr8R21LRNX7uesAyIUnECOq1FzmHqJntXhQ%2FqKMEolEPpUd3J0mvjbVwFqzQY%2BlaXh3gdPPbNvRH0%2FVfFoXEl428PrEBYaG9iQcW9bK%2Fc8l3LsqAxydmLriAK2mMg0nIWYDKMPgks9j5V6qkN1dxsPG%2FWHA1Y46yz78gM%2Ftz0hk%2BUwZOufjV%2BQnwck7kBxxCROnqb0ZhNVmvAKqRsDOFiQbc9UjzJG3fCAj91vU6Z6XeFnmtJqJXdrZCjMM7Kgb8GOqUBbl8rZEh6vVMPOUZOyszHDWarwb8DynW1%2BpvlzRoGI7CkHs4elXG852g2WpcsqFkIVaHhAQYQC%2F7dCZaT4mbZUsMp150R7MPXvcwzpdpl0MjyfGdhvAdmpocpeh22o6E0eZvVWK4XnoiVv9F0qbUo44Hl7Ybd77LnCJ%2BJ4H0lDeo%2FJYLm%2Fehbn0ia1AUJzlszPIC44jFNCnaPGzdN%2FWJDG4%2Fe%2BwVq&X-Amz-Signature=f54357236faea87840f0f3c79e9b3f495fc75fa6d35ef44f772d96f1a6881b90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MTYI6J%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEljcQJzeI063VutDhUC6OfORFtr8H%2BQbjCoZ4KIEab7AiEAzvUSHw3%2BJtM2vBfzxmxnr5zlKgURrn%2FxW25WpOqMPZUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSLYv119XQXN%2F0z7ircA1gI8dkYdrAuMfnxiqYVYODIEvtgwiD7Tq4fAnVMveWbo0MWUtRtqRt5mp1XGGpfZCDnQlMJlD0xWXKK93t6yvgRn50ZacSoFbic%2B00sN1fQYU693cGcxRx%2BX6LRcIVDPNQ4TDslnSxbmk996pTqRqNjVNypkt5L2lkQbd1h4h9l5Wj29wM3VXKYsA3FQUouORUHPLkqfaj4WOLlYC1K6b0GRqOgc1ecVscbFXNHtF%2FpPmRpEsSOPeT6fceouH%2FOFNu93OXvUdEbwBkrA0n26%2FdWaF%2BPd1XwSU25zyspAnjj04kNRp6JGNT0GhQuvI997gZky7l3uue7sua6nshHl5SM%2F5mj%2FNBOic1bJL7UiemMKJvKWa51Nfe%2FXa%2Fg%2Fj0cqeRHr8R21LRNX7uesAyIUnECOq1FzmHqJntXhQ%2FqKMEolEPpUd3J0mvjbVwFqzQY%2BlaXh3gdPPbNvRH0%2FVfFoXEl428PrEBYaG9iQcW9bK%2Fc8l3LsqAxydmLriAK2mMg0nIWYDKMPgks9j5V6qkN1dxsPG%2FWHA1Y46yz78gM%2Ftz0hk%2BUwZOufjV%2BQnwck7kBxxCROnqb0ZhNVmvAKqRsDOFiQbc9UjzJG3fCAj91vU6Z6XeFnmtJqJXdrZCjMM7Kgb8GOqUBbl8rZEh6vVMPOUZOyszHDWarwb8DynW1%2BpvlzRoGI7CkHs4elXG852g2WpcsqFkIVaHhAQYQC%2F7dCZaT4mbZUsMp150R7MPXvcwzpdpl0MjyfGdhvAdmpocpeh22o6E0eZvVWK4XnoiVv9F0qbUo44Hl7Ybd77LnCJ%2BJ4H0lDeo%2FJYLm%2Fehbn0ia1AUJzlszPIC44jFNCnaPGzdN%2FWJDG4%2Fe%2BwVq&X-Amz-Signature=01e47e3c9f2f50d040595b93e6ada4520abcd2e88181979e600327b3873ff3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
