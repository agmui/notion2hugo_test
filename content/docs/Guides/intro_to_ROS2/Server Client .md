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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDCWT6F%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWO%2BQIOptOj4DWyO9cLipU3CVamoRpEmCovcBmOo8RpAIhAMRY%2FgFoBJcMtWLiffOuLQWHu4OgGQ2GhbpJXIy0n%2FhqKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztJBRUp95ynPeOJYgq3AMFgECPOpRtNamdMsB9Sk9UtgHaQCIXSJlb%2FCz%2BLv30Tq2LazdwjI5IkgviVjnpT%2FZxHtjbol5ekDogzL96Ey1nZ8WNebpKHunKqOxHcuFoqk3hwubfkmBPomnPgVXmRoHdydN3Ay%2BczBQf%2F1iwsCMfMmojIIHuknNSS7%2B9Dur2Es57Dgf%2FxPxMjkChS4KWWb9SJZAjirPJrv%2FEU8kYMNA5oios9ChGkStnRpGRn4F0m%2BhfsKtIqqdlCrcEnB3vr30eoZW7N5UTAUk1OlEtNyAuLj%2Bun97Dt8Vami41yFqFZsDLn5OJHWTLt9NwzOx7bwLVYb1zK794oToMD%2F4AseuP7iyJBCQXQsGKLCiUXwm7x6vHzezGaio80OOYmmcjX4gWVXUzeNTMJ7Pk2R6YMmyojcROmkIQoedeJokvPw7fjhTVtfKySXx5rPf%2F%2BjjsU7ILIV9nboZ2sJXYX45MwkZqizkXnuvLhgcLthxc%2BVMl3N9j03Yu5SD4efVe1tkuLzRXh%2BodnHWy4z%2BBfKu1S9FqjzikQq14IpBlDYvnPTBbrxsIs796I0fCKs6OxEYv60hwLrf1Gw9fD3j7%2BqvsfNGBlofB7rcenzH%2B53uXU8ReWlLFNtbGaDj40JUzBzDDw9q9BjqkASLoDD%2BeeUH7q3LE8%2Bf%2B25X7x4lSbHVQ8bDNUGxmn2YGQFsnjCoPDwJzDUG3QhIN93ijd0NC%2FOxl%2BDlai01TYV5gzsB7k12cJYfazsogQuLR19SM6BGuicZ6r6bOuwOy8SknA6899b6MtDaknfjKqbKaFQwmOZbQY5Fzxqwmtnso0dKRfCdd7Fwh3PDR55FYovU7f%2FmiOrW9zxq1Pb8vHLVK7dVV&X-Amz-Signature=f2ae50ae873612d63d129fbabd8ad947f74ea9783fc6090183c7ff35abca641d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDCWT6F%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWO%2BQIOptOj4DWyO9cLipU3CVamoRpEmCovcBmOo8RpAIhAMRY%2FgFoBJcMtWLiffOuLQWHu4OgGQ2GhbpJXIy0n%2FhqKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztJBRUp95ynPeOJYgq3AMFgECPOpRtNamdMsB9Sk9UtgHaQCIXSJlb%2FCz%2BLv30Tq2LazdwjI5IkgviVjnpT%2FZxHtjbol5ekDogzL96Ey1nZ8WNebpKHunKqOxHcuFoqk3hwubfkmBPomnPgVXmRoHdydN3Ay%2BczBQf%2F1iwsCMfMmojIIHuknNSS7%2B9Dur2Es57Dgf%2FxPxMjkChS4KWWb9SJZAjirPJrv%2FEU8kYMNA5oios9ChGkStnRpGRn4F0m%2BhfsKtIqqdlCrcEnB3vr30eoZW7N5UTAUk1OlEtNyAuLj%2Bun97Dt8Vami41yFqFZsDLn5OJHWTLt9NwzOx7bwLVYb1zK794oToMD%2F4AseuP7iyJBCQXQsGKLCiUXwm7x6vHzezGaio80OOYmmcjX4gWVXUzeNTMJ7Pk2R6YMmyojcROmkIQoedeJokvPw7fjhTVtfKySXx5rPf%2F%2BjjsU7ILIV9nboZ2sJXYX45MwkZqizkXnuvLhgcLthxc%2BVMl3N9j03Yu5SD4efVe1tkuLzRXh%2BodnHWy4z%2BBfKu1S9FqjzikQq14IpBlDYvnPTBbrxsIs796I0fCKs6OxEYv60hwLrf1Gw9fD3j7%2BqvsfNGBlofB7rcenzH%2B53uXU8ReWlLFNtbGaDj40JUzBzDDw9q9BjqkASLoDD%2BeeUH7q3LE8%2Bf%2B25X7x4lSbHVQ8bDNUGxmn2YGQFsnjCoPDwJzDUG3QhIN93ijd0NC%2FOxl%2BDlai01TYV5gzsB7k12cJYfazsogQuLR19SM6BGuicZ6r6bOuwOy8SknA6899b6MtDaknfjKqbKaFQwmOZbQY5Fzxqwmtnso0dKRfCdd7Fwh3PDR55FYovU7f%2FmiOrW9zxq1Pb8vHLVK7dVV&X-Amz-Signature=cc0ee221ad29fc30c321f6c6a950429b78aafcaa685659c551bb337f7c254480&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDCWT6F%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWO%2BQIOptOj4DWyO9cLipU3CVamoRpEmCovcBmOo8RpAIhAMRY%2FgFoBJcMtWLiffOuLQWHu4OgGQ2GhbpJXIy0n%2FhqKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztJBRUp95ynPeOJYgq3AMFgECPOpRtNamdMsB9Sk9UtgHaQCIXSJlb%2FCz%2BLv30Tq2LazdwjI5IkgviVjnpT%2FZxHtjbol5ekDogzL96Ey1nZ8WNebpKHunKqOxHcuFoqk3hwubfkmBPomnPgVXmRoHdydN3Ay%2BczBQf%2F1iwsCMfMmojIIHuknNSS7%2B9Dur2Es57Dgf%2FxPxMjkChS4KWWb9SJZAjirPJrv%2FEU8kYMNA5oios9ChGkStnRpGRn4F0m%2BhfsKtIqqdlCrcEnB3vr30eoZW7N5UTAUk1OlEtNyAuLj%2Bun97Dt8Vami41yFqFZsDLn5OJHWTLt9NwzOx7bwLVYb1zK794oToMD%2F4AseuP7iyJBCQXQsGKLCiUXwm7x6vHzezGaio80OOYmmcjX4gWVXUzeNTMJ7Pk2R6YMmyojcROmkIQoedeJokvPw7fjhTVtfKySXx5rPf%2F%2BjjsU7ILIV9nboZ2sJXYX45MwkZqizkXnuvLhgcLthxc%2BVMl3N9j03Yu5SD4efVe1tkuLzRXh%2BodnHWy4z%2BBfKu1S9FqjzikQq14IpBlDYvnPTBbrxsIs796I0fCKs6OxEYv60hwLrf1Gw9fD3j7%2BqvsfNGBlofB7rcenzH%2B53uXU8ReWlLFNtbGaDj40JUzBzDDw9q9BjqkASLoDD%2BeeUH7q3LE8%2Bf%2B25X7x4lSbHVQ8bDNUGxmn2YGQFsnjCoPDwJzDUG3QhIN93ijd0NC%2FOxl%2BDlai01TYV5gzsB7k12cJYfazsogQuLR19SM6BGuicZ6r6bOuwOy8SknA6899b6MtDaknfjKqbKaFQwmOZbQY5Fzxqwmtnso0dKRfCdd7Fwh3PDR55FYovU7f%2FmiOrW9zxq1Pb8vHLVK7dVV&X-Amz-Signature=809aa800d57d74652cc3e2bc778f840893d324971d68e1a80bab586f105da8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDCWT6F%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWO%2BQIOptOj4DWyO9cLipU3CVamoRpEmCovcBmOo8RpAIhAMRY%2FgFoBJcMtWLiffOuLQWHu4OgGQ2GhbpJXIy0n%2FhqKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztJBRUp95ynPeOJYgq3AMFgECPOpRtNamdMsB9Sk9UtgHaQCIXSJlb%2FCz%2BLv30Tq2LazdwjI5IkgviVjnpT%2FZxHtjbol5ekDogzL96Ey1nZ8WNebpKHunKqOxHcuFoqk3hwubfkmBPomnPgVXmRoHdydN3Ay%2BczBQf%2F1iwsCMfMmojIIHuknNSS7%2B9Dur2Es57Dgf%2FxPxMjkChS4KWWb9SJZAjirPJrv%2FEU8kYMNA5oios9ChGkStnRpGRn4F0m%2BhfsKtIqqdlCrcEnB3vr30eoZW7N5UTAUk1OlEtNyAuLj%2Bun97Dt8Vami41yFqFZsDLn5OJHWTLt9NwzOx7bwLVYb1zK794oToMD%2F4AseuP7iyJBCQXQsGKLCiUXwm7x6vHzezGaio80OOYmmcjX4gWVXUzeNTMJ7Pk2R6YMmyojcROmkIQoedeJokvPw7fjhTVtfKySXx5rPf%2F%2BjjsU7ILIV9nboZ2sJXYX45MwkZqizkXnuvLhgcLthxc%2BVMl3N9j03Yu5SD4efVe1tkuLzRXh%2BodnHWy4z%2BBfKu1S9FqjzikQq14IpBlDYvnPTBbrxsIs796I0fCKs6OxEYv60hwLrf1Gw9fD3j7%2BqvsfNGBlofB7rcenzH%2B53uXU8ReWlLFNtbGaDj40JUzBzDDw9q9BjqkASLoDD%2BeeUH7q3LE8%2Bf%2B25X7x4lSbHVQ8bDNUGxmn2YGQFsnjCoPDwJzDUG3QhIN93ijd0NC%2FOxl%2BDlai01TYV5gzsB7k12cJYfazsogQuLR19SM6BGuicZ6r6bOuwOy8SknA6899b6MtDaknfjKqbKaFQwmOZbQY5Fzxqwmtnso0dKRfCdd7Fwh3PDR55FYovU7f%2FmiOrW9zxq1Pb8vHLVK7dVV&X-Amz-Signature=1f45efd78e68e4190429fd7e88c254c8ff2917b350b040d72aadb8c190b5aece&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDCWT6F%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWO%2BQIOptOj4DWyO9cLipU3CVamoRpEmCovcBmOo8RpAIhAMRY%2FgFoBJcMtWLiffOuLQWHu4OgGQ2GhbpJXIy0n%2FhqKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztJBRUp95ynPeOJYgq3AMFgECPOpRtNamdMsB9Sk9UtgHaQCIXSJlb%2FCz%2BLv30Tq2LazdwjI5IkgviVjnpT%2FZxHtjbol5ekDogzL96Ey1nZ8WNebpKHunKqOxHcuFoqk3hwubfkmBPomnPgVXmRoHdydN3Ay%2BczBQf%2F1iwsCMfMmojIIHuknNSS7%2B9Dur2Es57Dgf%2FxPxMjkChS4KWWb9SJZAjirPJrv%2FEU8kYMNA5oios9ChGkStnRpGRn4F0m%2BhfsKtIqqdlCrcEnB3vr30eoZW7N5UTAUk1OlEtNyAuLj%2Bun97Dt8Vami41yFqFZsDLn5OJHWTLt9NwzOx7bwLVYb1zK794oToMD%2F4AseuP7iyJBCQXQsGKLCiUXwm7x6vHzezGaio80OOYmmcjX4gWVXUzeNTMJ7Pk2R6YMmyojcROmkIQoedeJokvPw7fjhTVtfKySXx5rPf%2F%2BjjsU7ILIV9nboZ2sJXYX45MwkZqizkXnuvLhgcLthxc%2BVMl3N9j03Yu5SD4efVe1tkuLzRXh%2BodnHWy4z%2BBfKu1S9FqjzikQq14IpBlDYvnPTBbrxsIs796I0fCKs6OxEYv60hwLrf1Gw9fD3j7%2BqvsfNGBlofB7rcenzH%2B53uXU8ReWlLFNtbGaDj40JUzBzDDw9q9BjqkASLoDD%2BeeUH7q3LE8%2Bf%2B25X7x4lSbHVQ8bDNUGxmn2YGQFsnjCoPDwJzDUG3QhIN93ijd0NC%2FOxl%2BDlai01TYV5gzsB7k12cJYfazsogQuLR19SM6BGuicZ6r6bOuwOy8SknA6899b6MtDaknfjKqbKaFQwmOZbQY5Fzxqwmtnso0dKRfCdd7Fwh3PDR55FYovU7f%2FmiOrW9zxq1Pb8vHLVK7dVV&X-Amz-Signature=324b89bc293d2230619c5189e8e047b2bf4047aaac173d008a501b47423ab99e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
