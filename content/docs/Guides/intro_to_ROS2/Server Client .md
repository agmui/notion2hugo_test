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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5XASFC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ2SG%2B87vevGd%2FztyokmCOKb1oU4XyBHdnhy9%2Fyyo1gAiAYpQjDxxLep4fLywx%2FdzwoChPVvkIO%2BjuySQsn1qwyvSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMlhv0vET7oqTtt%2BBIKtwDhnHHRV9VuPLjCDxSbpzUr1im9lHi7xSzTca1ZP4R89bhqtMhpgSuY5fZdh%2BrhfjYHR7gC2df1FlzMxX9ohUoflm%2FCkTaoFn0OTtIhk5sbj9dEcncDCSFBXEiJ4fTr9E3P1fwmbB9JKCCk7tWplPwht1P1IBjQuv7kJtgkfkhQFwRTZ%2FhyCttzXYPcomqscjUV5xczy22Ut9dYP3I2wOftGgA861zLVFs6zg%2FQz8WyWgeLITHkXhOr%2FOkTh7x%2FttzS216wPvkt5B5dRbZIyTXfap9UrkzVjFG4c9LsHtLtv2yVdby%2BZ0La0s9DimNKy7jkz95O6MopJO9flYrv%2BXEsfkuhJorLb4KS3Fp87dWPoLPf6z3upsAJpiSkRT7Zq55COXjgAwntbo%2FMrP1T0UiQls1nB33Ek%2BAFVUmaC0Cak2QJXCW0QayHCU4pZWIJm%2BOJ3HrCvPeHSepRVNzVtOVlpRpoSmFcpF0vPh3JoOPhOLtof26fu3j3EUWbLIMT8B26sLfP8IkzbAAeH8RCsfsQkyXckx%2B6bXfP2JsHAQWE%2Bc0IqeXtcZk6Gk6aCrEHqEajmDn%2FoqexmvfvVVhaZUlBfTEB3GnQ%2BCSmH02mtiml2GwwxNC5xUlkIK%2Fd6Iwwu%2FVvgY6pgG%2BltT%2F3fdr1mWm%2FU1214%2FXGcusz1MwhrSA5I4RAWaKY0tvj0wPbDGgeQ%2F49HdB%2FP7slJYQopIgj%2Fuz5pch9T78STNumTwis38IpG2aPmHWg%2FPJyBde5iJzq9vyoTcMnqndY9iw2pkoZE0TEMMsOZkhINA0%2FWjHzVyLDw%2BYrZWsTTonmtZfKt63tr46IAVmxlj%2FQuSs3gHhhHxW%2BwlK9ahMR3cmmyLi&X-Amz-Signature=60e4a231c664940de23b43142ff5d0ac490ff9124f916b73b65986daf6738425&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5XASFC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ2SG%2B87vevGd%2FztyokmCOKb1oU4XyBHdnhy9%2Fyyo1gAiAYpQjDxxLep4fLywx%2FdzwoChPVvkIO%2BjuySQsn1qwyvSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMlhv0vET7oqTtt%2BBIKtwDhnHHRV9VuPLjCDxSbpzUr1im9lHi7xSzTca1ZP4R89bhqtMhpgSuY5fZdh%2BrhfjYHR7gC2df1FlzMxX9ohUoflm%2FCkTaoFn0OTtIhk5sbj9dEcncDCSFBXEiJ4fTr9E3P1fwmbB9JKCCk7tWplPwht1P1IBjQuv7kJtgkfkhQFwRTZ%2FhyCttzXYPcomqscjUV5xczy22Ut9dYP3I2wOftGgA861zLVFs6zg%2FQz8WyWgeLITHkXhOr%2FOkTh7x%2FttzS216wPvkt5B5dRbZIyTXfap9UrkzVjFG4c9LsHtLtv2yVdby%2BZ0La0s9DimNKy7jkz95O6MopJO9flYrv%2BXEsfkuhJorLb4KS3Fp87dWPoLPf6z3upsAJpiSkRT7Zq55COXjgAwntbo%2FMrP1T0UiQls1nB33Ek%2BAFVUmaC0Cak2QJXCW0QayHCU4pZWIJm%2BOJ3HrCvPeHSepRVNzVtOVlpRpoSmFcpF0vPh3JoOPhOLtof26fu3j3EUWbLIMT8B26sLfP8IkzbAAeH8RCsfsQkyXckx%2B6bXfP2JsHAQWE%2Bc0IqeXtcZk6Gk6aCrEHqEajmDn%2FoqexmvfvVVhaZUlBfTEB3GnQ%2BCSmH02mtiml2GwwxNC5xUlkIK%2Fd6Iwwu%2FVvgY6pgG%2BltT%2F3fdr1mWm%2FU1214%2FXGcusz1MwhrSA5I4RAWaKY0tvj0wPbDGgeQ%2F49HdB%2FP7slJYQopIgj%2Fuz5pch9T78STNumTwis38IpG2aPmHWg%2FPJyBde5iJzq9vyoTcMnqndY9iw2pkoZE0TEMMsOZkhINA0%2FWjHzVyLDw%2BYrZWsTTonmtZfKt63tr46IAVmxlj%2FQuSs3gHhhHxW%2BwlK9ahMR3cmmyLi&X-Amz-Signature=5c381cdefaef4718df1d60028e069c235640d543c1eeb2bc4260b2fbf7c70090&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5XASFC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ2SG%2B87vevGd%2FztyokmCOKb1oU4XyBHdnhy9%2Fyyo1gAiAYpQjDxxLep4fLywx%2FdzwoChPVvkIO%2BjuySQsn1qwyvSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMlhv0vET7oqTtt%2BBIKtwDhnHHRV9VuPLjCDxSbpzUr1im9lHi7xSzTca1ZP4R89bhqtMhpgSuY5fZdh%2BrhfjYHR7gC2df1FlzMxX9ohUoflm%2FCkTaoFn0OTtIhk5sbj9dEcncDCSFBXEiJ4fTr9E3P1fwmbB9JKCCk7tWplPwht1P1IBjQuv7kJtgkfkhQFwRTZ%2FhyCttzXYPcomqscjUV5xczy22Ut9dYP3I2wOftGgA861zLVFs6zg%2FQz8WyWgeLITHkXhOr%2FOkTh7x%2FttzS216wPvkt5B5dRbZIyTXfap9UrkzVjFG4c9LsHtLtv2yVdby%2BZ0La0s9DimNKy7jkz95O6MopJO9flYrv%2BXEsfkuhJorLb4KS3Fp87dWPoLPf6z3upsAJpiSkRT7Zq55COXjgAwntbo%2FMrP1T0UiQls1nB33Ek%2BAFVUmaC0Cak2QJXCW0QayHCU4pZWIJm%2BOJ3HrCvPeHSepRVNzVtOVlpRpoSmFcpF0vPh3JoOPhOLtof26fu3j3EUWbLIMT8B26sLfP8IkzbAAeH8RCsfsQkyXckx%2B6bXfP2JsHAQWE%2Bc0IqeXtcZk6Gk6aCrEHqEajmDn%2FoqexmvfvVVhaZUlBfTEB3GnQ%2BCSmH02mtiml2GwwxNC5xUlkIK%2Fd6Iwwu%2FVvgY6pgG%2BltT%2F3fdr1mWm%2FU1214%2FXGcusz1MwhrSA5I4RAWaKY0tvj0wPbDGgeQ%2F49HdB%2FP7slJYQopIgj%2Fuz5pch9T78STNumTwis38IpG2aPmHWg%2FPJyBde5iJzq9vyoTcMnqndY9iw2pkoZE0TEMMsOZkhINA0%2FWjHzVyLDw%2BYrZWsTTonmtZfKt63tr46IAVmxlj%2FQuSs3gHhhHxW%2BwlK9ahMR3cmmyLi&X-Amz-Signature=2ef9fe8d95dbbbe3b97538cabd89a46156326bba1aa66a8b855ef1e012706d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5XASFC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ2SG%2B87vevGd%2FztyokmCOKb1oU4XyBHdnhy9%2Fyyo1gAiAYpQjDxxLep4fLywx%2FdzwoChPVvkIO%2BjuySQsn1qwyvSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMlhv0vET7oqTtt%2BBIKtwDhnHHRV9VuPLjCDxSbpzUr1im9lHi7xSzTca1ZP4R89bhqtMhpgSuY5fZdh%2BrhfjYHR7gC2df1FlzMxX9ohUoflm%2FCkTaoFn0OTtIhk5sbj9dEcncDCSFBXEiJ4fTr9E3P1fwmbB9JKCCk7tWplPwht1P1IBjQuv7kJtgkfkhQFwRTZ%2FhyCttzXYPcomqscjUV5xczy22Ut9dYP3I2wOftGgA861zLVFs6zg%2FQz8WyWgeLITHkXhOr%2FOkTh7x%2FttzS216wPvkt5B5dRbZIyTXfap9UrkzVjFG4c9LsHtLtv2yVdby%2BZ0La0s9DimNKy7jkz95O6MopJO9flYrv%2BXEsfkuhJorLb4KS3Fp87dWPoLPf6z3upsAJpiSkRT7Zq55COXjgAwntbo%2FMrP1T0UiQls1nB33Ek%2BAFVUmaC0Cak2QJXCW0QayHCU4pZWIJm%2BOJ3HrCvPeHSepRVNzVtOVlpRpoSmFcpF0vPh3JoOPhOLtof26fu3j3EUWbLIMT8B26sLfP8IkzbAAeH8RCsfsQkyXckx%2B6bXfP2JsHAQWE%2Bc0IqeXtcZk6Gk6aCrEHqEajmDn%2FoqexmvfvVVhaZUlBfTEB3GnQ%2BCSmH02mtiml2GwwxNC5xUlkIK%2Fd6Iwwu%2FVvgY6pgG%2BltT%2F3fdr1mWm%2FU1214%2FXGcusz1MwhrSA5I4RAWaKY0tvj0wPbDGgeQ%2F49HdB%2FP7slJYQopIgj%2Fuz5pch9T78STNumTwis38IpG2aPmHWg%2FPJyBde5iJzq9vyoTcMnqndY9iw2pkoZE0TEMMsOZkhINA0%2FWjHzVyLDw%2BYrZWsTTonmtZfKt63tr46IAVmxlj%2FQuSs3gHhhHxW%2BwlK9ahMR3cmmyLi&X-Amz-Signature=f3cd1ae169b853d0e4b1faedfc84189940655b9f99e06de40a5521ce75fdb00a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5XASFC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ2SG%2B87vevGd%2FztyokmCOKb1oU4XyBHdnhy9%2Fyyo1gAiAYpQjDxxLep4fLywx%2FdzwoChPVvkIO%2BjuySQsn1qwyvSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMlhv0vET7oqTtt%2BBIKtwDhnHHRV9VuPLjCDxSbpzUr1im9lHi7xSzTca1ZP4R89bhqtMhpgSuY5fZdh%2BrhfjYHR7gC2df1FlzMxX9ohUoflm%2FCkTaoFn0OTtIhk5sbj9dEcncDCSFBXEiJ4fTr9E3P1fwmbB9JKCCk7tWplPwht1P1IBjQuv7kJtgkfkhQFwRTZ%2FhyCttzXYPcomqscjUV5xczy22Ut9dYP3I2wOftGgA861zLVFs6zg%2FQz8WyWgeLITHkXhOr%2FOkTh7x%2FttzS216wPvkt5B5dRbZIyTXfap9UrkzVjFG4c9LsHtLtv2yVdby%2BZ0La0s9DimNKy7jkz95O6MopJO9flYrv%2BXEsfkuhJorLb4KS3Fp87dWPoLPf6z3upsAJpiSkRT7Zq55COXjgAwntbo%2FMrP1T0UiQls1nB33Ek%2BAFVUmaC0Cak2QJXCW0QayHCU4pZWIJm%2BOJ3HrCvPeHSepRVNzVtOVlpRpoSmFcpF0vPh3JoOPhOLtof26fu3j3EUWbLIMT8B26sLfP8IkzbAAeH8RCsfsQkyXckx%2B6bXfP2JsHAQWE%2Bc0IqeXtcZk6Gk6aCrEHqEajmDn%2FoqexmvfvVVhaZUlBfTEB3GnQ%2BCSmH02mtiml2GwwxNC5xUlkIK%2Fd6Iwwu%2FVvgY6pgG%2BltT%2F3fdr1mWm%2FU1214%2FXGcusz1MwhrSA5I4RAWaKY0tvj0wPbDGgeQ%2F49HdB%2FP7slJYQopIgj%2Fuz5pch9T78STNumTwis38IpG2aPmHWg%2FPJyBde5iJzq9vyoTcMnqndY9iw2pkoZE0TEMMsOZkhINA0%2FWjHzVyLDw%2BYrZWsTTonmtZfKt63tr46IAVmxlj%2FQuSs3gHhhHxW%2BwlK9ahMR3cmmyLi&X-Amz-Signature=976c915c0761d1123e84fd3cf97c6f12a9cf898e8d041a65f3ef9c2bdd32f96b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
