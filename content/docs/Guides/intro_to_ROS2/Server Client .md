---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5AYKJW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEPITEzc2j0p9mdn2cVWTBgUfIgRlJD9H4yp8yKZy%2F2QAiEAuIaH2SjlD1wpZGXHdzs0iA837W01uUQ53Xj3w60K9mMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDc3UWUorsdAncodiCrcA0q2Wqa%2FHBfP%2B%2FSO2niynT75okLU%2BaC4biyvwIHZn69dCkeIrfYT8kxPz27gRGVuaWinYpCB%2Fa0tneQBSail4%2FzhWi5dfR6pAOgnXKuj73tmzbBFWypqYkCiwl%2BRkiCxeQJSTVtLDgeHdAcR8pZCMXXJ22TIHo4wBfwbnv%2FItQJO6c2Hq1jVUIisI6XUN6La2%2FDIz4LOIxAUtj7mYDM9bo1wTYKtX2x8TRbPuKhRd6R5if3P6Mstos0JRQpL%2FtuzEjKttmStfLbtsAoxHYXezgpIgK7frdaUX3N9ydanU61OkT52%2FWtXc%2FogatF6gQSKYNuRaGP8%2FaQ9pU7GBHaMBj0gl%2F%2B8NPHQUbb2J6dXv%2FGRSh1vW3CfBwc%2B4JK2dm9q7iGKpGmDM%2BMZwkZ%2BapCgtoCxWMx%2F%2B8fi6ueRpG04pl0iXVwvciNbJrTpEu%2B7AYQ8fG34vXCoKrUPrmZj%2FbE59T70OU0q59mU19g74lGj4V77PwPXEk6q9FFFL%2FwJjz5n8tY3qSS%2B0Yp%2FvZPoFnKcKShinbLJZD4qyIdjzjYxDLnthjPMR7sVVXYc51BiB3a13Ie3PZfBafMNTlK%2FPzRvOSxCWkwCA6EovbQxLDwZ4Ikbr%2Fw3zBcRoJWtrer5MK3o%2BMQGOqUBhjJBBzktF3%2FsPl5aQz65OQClKLib51sA975L1PfMRk%2FrbQOO5D5RslIPGVyeGegHhYTtW72CTJNbqv%2BGUwuklmHQqoqvUumXGMe4h%2FoJDd9u3t0L1x2YElkN%2FvOh0ALAIU0PPLfUsBw0ncRrFUNVr5B90tNSy%2FXKGNuJIC0bJsNc3MMzKTjrR662Cr5uROLB2A7%2FSxwktcU8ac6JQ1iGfHgbcLPv&X-Amz-Signature=74e377117137fa6e8008639ee21bb76b7b7b62b780c8ca7f6957da3bc3e69e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5AYKJW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEPITEzc2j0p9mdn2cVWTBgUfIgRlJD9H4yp8yKZy%2F2QAiEAuIaH2SjlD1wpZGXHdzs0iA837W01uUQ53Xj3w60K9mMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDc3UWUorsdAncodiCrcA0q2Wqa%2FHBfP%2B%2FSO2niynT75okLU%2BaC4biyvwIHZn69dCkeIrfYT8kxPz27gRGVuaWinYpCB%2Fa0tneQBSail4%2FzhWi5dfR6pAOgnXKuj73tmzbBFWypqYkCiwl%2BRkiCxeQJSTVtLDgeHdAcR8pZCMXXJ22TIHo4wBfwbnv%2FItQJO6c2Hq1jVUIisI6XUN6La2%2FDIz4LOIxAUtj7mYDM9bo1wTYKtX2x8TRbPuKhRd6R5if3P6Mstos0JRQpL%2FtuzEjKttmStfLbtsAoxHYXezgpIgK7frdaUX3N9ydanU61OkT52%2FWtXc%2FogatF6gQSKYNuRaGP8%2FaQ9pU7GBHaMBj0gl%2F%2B8NPHQUbb2J6dXv%2FGRSh1vW3CfBwc%2B4JK2dm9q7iGKpGmDM%2BMZwkZ%2BapCgtoCxWMx%2F%2B8fi6ueRpG04pl0iXVwvciNbJrTpEu%2B7AYQ8fG34vXCoKrUPrmZj%2FbE59T70OU0q59mU19g74lGj4V77PwPXEk6q9FFFL%2FwJjz5n8tY3qSS%2B0Yp%2FvZPoFnKcKShinbLJZD4qyIdjzjYxDLnthjPMR7sVVXYc51BiB3a13Ie3PZfBafMNTlK%2FPzRvOSxCWkwCA6EovbQxLDwZ4Ikbr%2Fw3zBcRoJWtrer5MK3o%2BMQGOqUBhjJBBzktF3%2FsPl5aQz65OQClKLib51sA975L1PfMRk%2FrbQOO5D5RslIPGVyeGegHhYTtW72CTJNbqv%2BGUwuklmHQqoqvUumXGMe4h%2FoJDd9u3t0L1x2YElkN%2FvOh0ALAIU0PPLfUsBw0ncRrFUNVr5B90tNSy%2FXKGNuJIC0bJsNc3MMzKTjrR662Cr5uROLB2A7%2FSxwktcU8ac6JQ1iGfHgbcLPv&X-Amz-Signature=9df05bd305f60c3a5f01a52d47f7abc9221272932e3a0005d877a78ac2c651b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5AYKJW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEPITEzc2j0p9mdn2cVWTBgUfIgRlJD9H4yp8yKZy%2F2QAiEAuIaH2SjlD1wpZGXHdzs0iA837W01uUQ53Xj3w60K9mMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDc3UWUorsdAncodiCrcA0q2Wqa%2FHBfP%2B%2FSO2niynT75okLU%2BaC4biyvwIHZn69dCkeIrfYT8kxPz27gRGVuaWinYpCB%2Fa0tneQBSail4%2FzhWi5dfR6pAOgnXKuj73tmzbBFWypqYkCiwl%2BRkiCxeQJSTVtLDgeHdAcR8pZCMXXJ22TIHo4wBfwbnv%2FItQJO6c2Hq1jVUIisI6XUN6La2%2FDIz4LOIxAUtj7mYDM9bo1wTYKtX2x8TRbPuKhRd6R5if3P6Mstos0JRQpL%2FtuzEjKttmStfLbtsAoxHYXezgpIgK7frdaUX3N9ydanU61OkT52%2FWtXc%2FogatF6gQSKYNuRaGP8%2FaQ9pU7GBHaMBj0gl%2F%2B8NPHQUbb2J6dXv%2FGRSh1vW3CfBwc%2B4JK2dm9q7iGKpGmDM%2BMZwkZ%2BapCgtoCxWMx%2F%2B8fi6ueRpG04pl0iXVwvciNbJrTpEu%2B7AYQ8fG34vXCoKrUPrmZj%2FbE59T70OU0q59mU19g74lGj4V77PwPXEk6q9FFFL%2FwJjz5n8tY3qSS%2B0Yp%2FvZPoFnKcKShinbLJZD4qyIdjzjYxDLnthjPMR7sVVXYc51BiB3a13Ie3PZfBafMNTlK%2FPzRvOSxCWkwCA6EovbQxLDwZ4Ikbr%2Fw3zBcRoJWtrer5MK3o%2BMQGOqUBhjJBBzktF3%2FsPl5aQz65OQClKLib51sA975L1PfMRk%2FrbQOO5D5RslIPGVyeGegHhYTtW72CTJNbqv%2BGUwuklmHQqoqvUumXGMe4h%2FoJDd9u3t0L1x2YElkN%2FvOh0ALAIU0PPLfUsBw0ncRrFUNVr5B90tNSy%2FXKGNuJIC0bJsNc3MMzKTjrR662Cr5uROLB2A7%2FSxwktcU8ac6JQ1iGfHgbcLPv&X-Amz-Signature=21ef64b589a1441b229c3271adca24f2b897c6cea52edf7c39229fd89f39811b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5AYKJW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEPITEzc2j0p9mdn2cVWTBgUfIgRlJD9H4yp8yKZy%2F2QAiEAuIaH2SjlD1wpZGXHdzs0iA837W01uUQ53Xj3w60K9mMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDc3UWUorsdAncodiCrcA0q2Wqa%2FHBfP%2B%2FSO2niynT75okLU%2BaC4biyvwIHZn69dCkeIrfYT8kxPz27gRGVuaWinYpCB%2Fa0tneQBSail4%2FzhWi5dfR6pAOgnXKuj73tmzbBFWypqYkCiwl%2BRkiCxeQJSTVtLDgeHdAcR8pZCMXXJ22TIHo4wBfwbnv%2FItQJO6c2Hq1jVUIisI6XUN6La2%2FDIz4LOIxAUtj7mYDM9bo1wTYKtX2x8TRbPuKhRd6R5if3P6Mstos0JRQpL%2FtuzEjKttmStfLbtsAoxHYXezgpIgK7frdaUX3N9ydanU61OkT52%2FWtXc%2FogatF6gQSKYNuRaGP8%2FaQ9pU7GBHaMBj0gl%2F%2B8NPHQUbb2J6dXv%2FGRSh1vW3CfBwc%2B4JK2dm9q7iGKpGmDM%2BMZwkZ%2BapCgtoCxWMx%2F%2B8fi6ueRpG04pl0iXVwvciNbJrTpEu%2B7AYQ8fG34vXCoKrUPrmZj%2FbE59T70OU0q59mU19g74lGj4V77PwPXEk6q9FFFL%2FwJjz5n8tY3qSS%2B0Yp%2FvZPoFnKcKShinbLJZD4qyIdjzjYxDLnthjPMR7sVVXYc51BiB3a13Ie3PZfBafMNTlK%2FPzRvOSxCWkwCA6EovbQxLDwZ4Ikbr%2Fw3zBcRoJWtrer5MK3o%2BMQGOqUBhjJBBzktF3%2FsPl5aQz65OQClKLib51sA975L1PfMRk%2FrbQOO5D5RslIPGVyeGegHhYTtW72CTJNbqv%2BGUwuklmHQqoqvUumXGMe4h%2FoJDd9u3t0L1x2YElkN%2FvOh0ALAIU0PPLfUsBw0ncRrFUNVr5B90tNSy%2FXKGNuJIC0bJsNc3MMzKTjrR662Cr5uROLB2A7%2FSxwktcU8ac6JQ1iGfHgbcLPv&X-Amz-Signature=75068e875990f84316b64c9d1bb816224e393b62e49799c5b40860b580700dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5AYKJW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEPITEzc2j0p9mdn2cVWTBgUfIgRlJD9H4yp8yKZy%2F2QAiEAuIaH2SjlD1wpZGXHdzs0iA837W01uUQ53Xj3w60K9mMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDc3UWUorsdAncodiCrcA0q2Wqa%2FHBfP%2B%2FSO2niynT75okLU%2BaC4biyvwIHZn69dCkeIrfYT8kxPz27gRGVuaWinYpCB%2Fa0tneQBSail4%2FzhWi5dfR6pAOgnXKuj73tmzbBFWypqYkCiwl%2BRkiCxeQJSTVtLDgeHdAcR8pZCMXXJ22TIHo4wBfwbnv%2FItQJO6c2Hq1jVUIisI6XUN6La2%2FDIz4LOIxAUtj7mYDM9bo1wTYKtX2x8TRbPuKhRd6R5if3P6Mstos0JRQpL%2FtuzEjKttmStfLbtsAoxHYXezgpIgK7frdaUX3N9ydanU61OkT52%2FWtXc%2FogatF6gQSKYNuRaGP8%2FaQ9pU7GBHaMBj0gl%2F%2B8NPHQUbb2J6dXv%2FGRSh1vW3CfBwc%2B4JK2dm9q7iGKpGmDM%2BMZwkZ%2BapCgtoCxWMx%2F%2B8fi6ueRpG04pl0iXVwvciNbJrTpEu%2B7AYQ8fG34vXCoKrUPrmZj%2FbE59T70OU0q59mU19g74lGj4V77PwPXEk6q9FFFL%2FwJjz5n8tY3qSS%2B0Yp%2FvZPoFnKcKShinbLJZD4qyIdjzjYxDLnthjPMR7sVVXYc51BiB3a13Ie3PZfBafMNTlK%2FPzRvOSxCWkwCA6EovbQxLDwZ4Ikbr%2Fw3zBcRoJWtrer5MK3o%2BMQGOqUBhjJBBzktF3%2FsPl5aQz65OQClKLib51sA975L1PfMRk%2FrbQOO5D5RslIPGVyeGegHhYTtW72CTJNbqv%2BGUwuklmHQqoqvUumXGMe4h%2FoJDd9u3t0L1x2YElkN%2FvOh0ALAIU0PPLfUsBw0ncRrFUNVr5B90tNSy%2FXKGNuJIC0bJsNc3MMzKTjrR662Cr5uROLB2A7%2FSxwktcU8ac6JQ1iGfHgbcLPv&X-Amz-Signature=c54596ac06ba39cf455923eb01fb74c6f0fb037357c62b00e9dc4adb40af2f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
