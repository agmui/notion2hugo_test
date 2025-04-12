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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDHCSB3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDSlW7pKdbHYJNUv2fiHoY04dT5PfaUCo017B%2BuKoJZMgIgeIaG86YkPSpeK76EGfPlY9Qourvt%2FOv2VcIxdwZnSGoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW7rNhkVXEbpV4XkircA%2BPUQSSF53U87pl0O17On5d%2BlQgr9w17EqyJxRdORn8Bw3md%2BsL%2FnmTW3Hd%2Bunji0QewasWzDceiKNrBefjrVoe8prHPC%2FcScEVZTTRSA4aLraAlOklrcOjD%2FZXekCP4UCaj5aiTXznumns9ANPoN8%2Fsg6JjhkTVdo6qHbJ9V1yxvgw9rC2YC0Mg2jFMXSSu9T7UuBENwKFBurgzgITcIOfBFzyrCsU7gTNg7olArL6uP1EzYrzxxOiaVtAzath%2FSnDNUa%2BRkCqp9ZmOsD1DKwRWRZCQk5gpeP8J6EB8takcuSH2wR%2F4RlmPdA5OryLOeSP6Me9rYKjtKc5Fy9sepuLqQH5UN%2BAZzXwC4v9DMfCPUXUaiTXFuTJBlHNlvxBbAukhQI0uFJNB0uJz%2BuDIlxWkxk1fxhhT%2BmBtlPdI94M0090bLqyUAH5ESUf6hwUpPbWSEkSggO%2BacjtDvJgQ9%2FKvlBEvrXb%2FdC72iAs6X%2Frakq2wi%2Fy3HIVSVlZInsPNT6iuCUOPKW0oCCiwtmyAMMdq0yjf5jZjQcD2wqev0yl1OB7eurlngkHK%2Fl02g%2FN5UM2BB%2FXsBBpPnASS3ybh4BGSnL5ESQE9PMffRyw4d4jV80pFnLqB%2FxyQYzcsMIzU578GOqUB6Rhv8I%2BnngzO2yyQN1rzX0iwm%2Bfa7P8PFrswrF3oVquchJzjDocTaqroVGsljSiGpEIet%2F30Y0siWVrb3ae1I%2FPJ9jM1CsrEZNO8NhiDrg%2F5nF%2BcW2%2B%2FNJ4zFzk%2FTfBe9E3R60bpn78HaSLZBnc%2BaCuaifSJyuk%2Fz%2F%2FA%2Bh6UrawYZnzoR6UZUooEnnFGrqXTTZRfA7PphteDqWvOkGEP0D71i3PX&X-Amz-Signature=a4ae3f1a8b7a75cc1c19aa9c6f696ffaf0e3c096c6b74a8e84dfbbd15834a976&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDHCSB3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDSlW7pKdbHYJNUv2fiHoY04dT5PfaUCo017B%2BuKoJZMgIgeIaG86YkPSpeK76EGfPlY9Qourvt%2FOv2VcIxdwZnSGoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW7rNhkVXEbpV4XkircA%2BPUQSSF53U87pl0O17On5d%2BlQgr9w17EqyJxRdORn8Bw3md%2BsL%2FnmTW3Hd%2Bunji0QewasWzDceiKNrBefjrVoe8prHPC%2FcScEVZTTRSA4aLraAlOklrcOjD%2FZXekCP4UCaj5aiTXznumns9ANPoN8%2Fsg6JjhkTVdo6qHbJ9V1yxvgw9rC2YC0Mg2jFMXSSu9T7UuBENwKFBurgzgITcIOfBFzyrCsU7gTNg7olArL6uP1EzYrzxxOiaVtAzath%2FSnDNUa%2BRkCqp9ZmOsD1DKwRWRZCQk5gpeP8J6EB8takcuSH2wR%2F4RlmPdA5OryLOeSP6Me9rYKjtKc5Fy9sepuLqQH5UN%2BAZzXwC4v9DMfCPUXUaiTXFuTJBlHNlvxBbAukhQI0uFJNB0uJz%2BuDIlxWkxk1fxhhT%2BmBtlPdI94M0090bLqyUAH5ESUf6hwUpPbWSEkSggO%2BacjtDvJgQ9%2FKvlBEvrXb%2FdC72iAs6X%2Frakq2wi%2Fy3HIVSVlZInsPNT6iuCUOPKW0oCCiwtmyAMMdq0yjf5jZjQcD2wqev0yl1OB7eurlngkHK%2Fl02g%2FN5UM2BB%2FXsBBpPnASS3ybh4BGSnL5ESQE9PMffRyw4d4jV80pFnLqB%2FxyQYzcsMIzU578GOqUB6Rhv8I%2BnngzO2yyQN1rzX0iwm%2Bfa7P8PFrswrF3oVquchJzjDocTaqroVGsljSiGpEIet%2F30Y0siWVrb3ae1I%2FPJ9jM1CsrEZNO8NhiDrg%2F5nF%2BcW2%2B%2FNJ4zFzk%2FTfBe9E3R60bpn78HaSLZBnc%2BaCuaifSJyuk%2Fz%2F%2FA%2Bh6UrawYZnzoR6UZUooEnnFGrqXTTZRfA7PphteDqWvOkGEP0D71i3PX&X-Amz-Signature=05a607a2b150f4f97998f249881c39cd3a2e2260db6ae7688553f98c555156b9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDHCSB3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDSlW7pKdbHYJNUv2fiHoY04dT5PfaUCo017B%2BuKoJZMgIgeIaG86YkPSpeK76EGfPlY9Qourvt%2FOv2VcIxdwZnSGoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW7rNhkVXEbpV4XkircA%2BPUQSSF53U87pl0O17On5d%2BlQgr9w17EqyJxRdORn8Bw3md%2BsL%2FnmTW3Hd%2Bunji0QewasWzDceiKNrBefjrVoe8prHPC%2FcScEVZTTRSA4aLraAlOklrcOjD%2FZXekCP4UCaj5aiTXznumns9ANPoN8%2Fsg6JjhkTVdo6qHbJ9V1yxvgw9rC2YC0Mg2jFMXSSu9T7UuBENwKFBurgzgITcIOfBFzyrCsU7gTNg7olArL6uP1EzYrzxxOiaVtAzath%2FSnDNUa%2BRkCqp9ZmOsD1DKwRWRZCQk5gpeP8J6EB8takcuSH2wR%2F4RlmPdA5OryLOeSP6Me9rYKjtKc5Fy9sepuLqQH5UN%2BAZzXwC4v9DMfCPUXUaiTXFuTJBlHNlvxBbAukhQI0uFJNB0uJz%2BuDIlxWkxk1fxhhT%2BmBtlPdI94M0090bLqyUAH5ESUf6hwUpPbWSEkSggO%2BacjtDvJgQ9%2FKvlBEvrXb%2FdC72iAs6X%2Frakq2wi%2Fy3HIVSVlZInsPNT6iuCUOPKW0oCCiwtmyAMMdq0yjf5jZjQcD2wqev0yl1OB7eurlngkHK%2Fl02g%2FN5UM2BB%2FXsBBpPnASS3ybh4BGSnL5ESQE9PMffRyw4d4jV80pFnLqB%2FxyQYzcsMIzU578GOqUB6Rhv8I%2BnngzO2yyQN1rzX0iwm%2Bfa7P8PFrswrF3oVquchJzjDocTaqroVGsljSiGpEIet%2F30Y0siWVrb3ae1I%2FPJ9jM1CsrEZNO8NhiDrg%2F5nF%2BcW2%2B%2FNJ4zFzk%2FTfBe9E3R60bpn78HaSLZBnc%2BaCuaifSJyuk%2Fz%2F%2FA%2Bh6UrawYZnzoR6UZUooEnnFGrqXTTZRfA7PphteDqWvOkGEP0D71i3PX&X-Amz-Signature=d12a2543f2e4da455fcfeba62e2f2db509009fac25bb156a91c35f271a686bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDHCSB3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDSlW7pKdbHYJNUv2fiHoY04dT5PfaUCo017B%2BuKoJZMgIgeIaG86YkPSpeK76EGfPlY9Qourvt%2FOv2VcIxdwZnSGoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW7rNhkVXEbpV4XkircA%2BPUQSSF53U87pl0O17On5d%2BlQgr9w17EqyJxRdORn8Bw3md%2BsL%2FnmTW3Hd%2Bunji0QewasWzDceiKNrBefjrVoe8prHPC%2FcScEVZTTRSA4aLraAlOklrcOjD%2FZXekCP4UCaj5aiTXznumns9ANPoN8%2Fsg6JjhkTVdo6qHbJ9V1yxvgw9rC2YC0Mg2jFMXSSu9T7UuBENwKFBurgzgITcIOfBFzyrCsU7gTNg7olArL6uP1EzYrzxxOiaVtAzath%2FSnDNUa%2BRkCqp9ZmOsD1DKwRWRZCQk5gpeP8J6EB8takcuSH2wR%2F4RlmPdA5OryLOeSP6Me9rYKjtKc5Fy9sepuLqQH5UN%2BAZzXwC4v9DMfCPUXUaiTXFuTJBlHNlvxBbAukhQI0uFJNB0uJz%2BuDIlxWkxk1fxhhT%2BmBtlPdI94M0090bLqyUAH5ESUf6hwUpPbWSEkSggO%2BacjtDvJgQ9%2FKvlBEvrXb%2FdC72iAs6X%2Frakq2wi%2Fy3HIVSVlZInsPNT6iuCUOPKW0oCCiwtmyAMMdq0yjf5jZjQcD2wqev0yl1OB7eurlngkHK%2Fl02g%2FN5UM2BB%2FXsBBpPnASS3ybh4BGSnL5ESQE9PMffRyw4d4jV80pFnLqB%2FxyQYzcsMIzU578GOqUB6Rhv8I%2BnngzO2yyQN1rzX0iwm%2Bfa7P8PFrswrF3oVquchJzjDocTaqroVGsljSiGpEIet%2F30Y0siWVrb3ae1I%2FPJ9jM1CsrEZNO8NhiDrg%2F5nF%2BcW2%2B%2FNJ4zFzk%2FTfBe9E3R60bpn78HaSLZBnc%2BaCuaifSJyuk%2Fz%2F%2FA%2Bh6UrawYZnzoR6UZUooEnnFGrqXTTZRfA7PphteDqWvOkGEP0D71i3PX&X-Amz-Signature=330cf803100d0e7e54c8e49c94bbae4fec93ec35eec7065bb50675a25423e5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDHCSB3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDSlW7pKdbHYJNUv2fiHoY04dT5PfaUCo017B%2BuKoJZMgIgeIaG86YkPSpeK76EGfPlY9Qourvt%2FOv2VcIxdwZnSGoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW7rNhkVXEbpV4XkircA%2BPUQSSF53U87pl0O17On5d%2BlQgr9w17EqyJxRdORn8Bw3md%2BsL%2FnmTW3Hd%2Bunji0QewasWzDceiKNrBefjrVoe8prHPC%2FcScEVZTTRSA4aLraAlOklrcOjD%2FZXekCP4UCaj5aiTXznumns9ANPoN8%2Fsg6JjhkTVdo6qHbJ9V1yxvgw9rC2YC0Mg2jFMXSSu9T7UuBENwKFBurgzgITcIOfBFzyrCsU7gTNg7olArL6uP1EzYrzxxOiaVtAzath%2FSnDNUa%2BRkCqp9ZmOsD1DKwRWRZCQk5gpeP8J6EB8takcuSH2wR%2F4RlmPdA5OryLOeSP6Me9rYKjtKc5Fy9sepuLqQH5UN%2BAZzXwC4v9DMfCPUXUaiTXFuTJBlHNlvxBbAukhQI0uFJNB0uJz%2BuDIlxWkxk1fxhhT%2BmBtlPdI94M0090bLqyUAH5ESUf6hwUpPbWSEkSggO%2BacjtDvJgQ9%2FKvlBEvrXb%2FdC72iAs6X%2Frakq2wi%2Fy3HIVSVlZInsPNT6iuCUOPKW0oCCiwtmyAMMdq0yjf5jZjQcD2wqev0yl1OB7eurlngkHK%2Fl02g%2FN5UM2BB%2FXsBBpPnASS3ybh4BGSnL5ESQE9PMffRyw4d4jV80pFnLqB%2FxyQYzcsMIzU578GOqUB6Rhv8I%2BnngzO2yyQN1rzX0iwm%2Bfa7P8PFrswrF3oVquchJzjDocTaqroVGsljSiGpEIet%2F30Y0siWVrb3ae1I%2FPJ9jM1CsrEZNO8NhiDrg%2F5nF%2BcW2%2B%2FNJ4zFzk%2FTfBe9E3R60bpn78HaSLZBnc%2BaCuaifSJyuk%2Fz%2F%2FA%2Bh6UrawYZnzoR6UZUooEnnFGrqXTTZRfA7PphteDqWvOkGEP0D71i3PX&X-Amz-Signature=7ade9f9aaa6a4e6f9ad282ea7ddc6edd02f3198737d4934403b5a78b3cb44409&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
