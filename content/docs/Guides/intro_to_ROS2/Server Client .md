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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGATB3EQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtMpIBxiwXoIRLFMF1GydF53sRsGJe9o%2BfRGWSk7Z%2FNgIgYDe0FGiGju6rz%2BwR3d9siCwdY1OdDeFHBDUOgp1PSIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAJowB8Yn9WdFSnuLyrcAxGsEiOx2yGo6%2FrO1QN%2FkwzQH2QNp9jLEdA2hODJsfXJJgMZCj6m0jUDqb17qriZpD2rvdil%2BdmmBcNzGSbbGQwBp8OQFvkhBnoRcT0SBnIkXz%2BUEvcHbM7aj93qETVuQjP0R2eYCRXxcYCPJKD%2BGKv5%2FCPkg5%2B5753HOYns7zz33PU5KYZmIpRpwMy1HlazoEM%2Bqeq1fzMSZwEfZeMm8%2BBXQgahq4EFQ4ENKUOl6FsvI%2F7y2YWELcGWIS5g54fMfPhVW9GtSsYv%2FB37rnARuPKa17rGM%2FIB9wxP53xov30nUpNrGPT7fp%2FQdh2XcuVQN7otaVt1H8xLskt3n5zTDH00A%2BJ%2FJQgirGqTAQuLkLV5iaC0tMrZDhlCv4kiZTn2u7Wtkoaf4rKOQaCCZUkb3mTjWl%2BDvxmx2eOdSWY%2BLX%2FKRgy%2BtEqfjMYREVC3ExNk4D8J0AT6Y%2B8SjhYw%2BCBEl1GF%2FYOWjTLG079T8TVJzy280tkcp1YANcJ0MLfwkjFBSbBOPyOlwsv6J1zOSCrJPeQAENmSk0%2Beb24eSgZ%2F4DBRn5NZILh%2FcbUgvEGas32cDZY%2BeoXnr6VWO79ZufvhcykaYneYmY%2FbPqrUuo4S1FyGwOLkD%2FMClLVvYmHbMIOG8MQGOqUBH2fUhRnsan%2BprKOqCnfLSGgEZO9HfcN47q6PbtgoY40JUZ6L6NN%2FoU5jIzo30rX9CETAv4SUfT8cO2rU0LrtRfKH6Dt7WquWdb5RJPq7ykNUU5Q9OLzQbE2NvfgLNlwXDF80%2FQ7gLv1SmMROxO2BGpG57shIHnR3eH7SFoerG1Xk5AurstO%2BNjxXcMxkissJREWfavzcpiDT1RuO367dkhcTyJtX&X-Amz-Signature=5e71eafea69422ad5fb5eec9ebd4f63ff629a9febc1977cdc696e146814c22e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGATB3EQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtMpIBxiwXoIRLFMF1GydF53sRsGJe9o%2BfRGWSk7Z%2FNgIgYDe0FGiGju6rz%2BwR3d9siCwdY1OdDeFHBDUOgp1PSIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAJowB8Yn9WdFSnuLyrcAxGsEiOx2yGo6%2FrO1QN%2FkwzQH2QNp9jLEdA2hODJsfXJJgMZCj6m0jUDqb17qriZpD2rvdil%2BdmmBcNzGSbbGQwBp8OQFvkhBnoRcT0SBnIkXz%2BUEvcHbM7aj93qETVuQjP0R2eYCRXxcYCPJKD%2BGKv5%2FCPkg5%2B5753HOYns7zz33PU5KYZmIpRpwMy1HlazoEM%2Bqeq1fzMSZwEfZeMm8%2BBXQgahq4EFQ4ENKUOl6FsvI%2F7y2YWELcGWIS5g54fMfPhVW9GtSsYv%2FB37rnARuPKa17rGM%2FIB9wxP53xov30nUpNrGPT7fp%2FQdh2XcuVQN7otaVt1H8xLskt3n5zTDH00A%2BJ%2FJQgirGqTAQuLkLV5iaC0tMrZDhlCv4kiZTn2u7Wtkoaf4rKOQaCCZUkb3mTjWl%2BDvxmx2eOdSWY%2BLX%2FKRgy%2BtEqfjMYREVC3ExNk4D8J0AT6Y%2B8SjhYw%2BCBEl1GF%2FYOWjTLG079T8TVJzy280tkcp1YANcJ0MLfwkjFBSbBOPyOlwsv6J1zOSCrJPeQAENmSk0%2Beb24eSgZ%2F4DBRn5NZILh%2FcbUgvEGas32cDZY%2BeoXnr6VWO79ZufvhcykaYneYmY%2FbPqrUuo4S1FyGwOLkD%2FMClLVvYmHbMIOG8MQGOqUBH2fUhRnsan%2BprKOqCnfLSGgEZO9HfcN47q6PbtgoY40JUZ6L6NN%2FoU5jIzo30rX9CETAv4SUfT8cO2rU0LrtRfKH6Dt7WquWdb5RJPq7ykNUU5Q9OLzQbE2NvfgLNlwXDF80%2FQ7gLv1SmMROxO2BGpG57shIHnR3eH7SFoerG1Xk5AurstO%2BNjxXcMxkissJREWfavzcpiDT1RuO367dkhcTyJtX&X-Amz-Signature=c43d7058d5776bac69ecf421ae2881b3b06867bc06aed208b4999f200360af34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGATB3EQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtMpIBxiwXoIRLFMF1GydF53sRsGJe9o%2BfRGWSk7Z%2FNgIgYDe0FGiGju6rz%2BwR3d9siCwdY1OdDeFHBDUOgp1PSIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAJowB8Yn9WdFSnuLyrcAxGsEiOx2yGo6%2FrO1QN%2FkwzQH2QNp9jLEdA2hODJsfXJJgMZCj6m0jUDqb17qriZpD2rvdil%2BdmmBcNzGSbbGQwBp8OQFvkhBnoRcT0SBnIkXz%2BUEvcHbM7aj93qETVuQjP0R2eYCRXxcYCPJKD%2BGKv5%2FCPkg5%2B5753HOYns7zz33PU5KYZmIpRpwMy1HlazoEM%2Bqeq1fzMSZwEfZeMm8%2BBXQgahq4EFQ4ENKUOl6FsvI%2F7y2YWELcGWIS5g54fMfPhVW9GtSsYv%2FB37rnARuPKa17rGM%2FIB9wxP53xov30nUpNrGPT7fp%2FQdh2XcuVQN7otaVt1H8xLskt3n5zTDH00A%2BJ%2FJQgirGqTAQuLkLV5iaC0tMrZDhlCv4kiZTn2u7Wtkoaf4rKOQaCCZUkb3mTjWl%2BDvxmx2eOdSWY%2BLX%2FKRgy%2BtEqfjMYREVC3ExNk4D8J0AT6Y%2B8SjhYw%2BCBEl1GF%2FYOWjTLG079T8TVJzy280tkcp1YANcJ0MLfwkjFBSbBOPyOlwsv6J1zOSCrJPeQAENmSk0%2Beb24eSgZ%2F4DBRn5NZILh%2FcbUgvEGas32cDZY%2BeoXnr6VWO79ZufvhcykaYneYmY%2FbPqrUuo4S1FyGwOLkD%2FMClLVvYmHbMIOG8MQGOqUBH2fUhRnsan%2BprKOqCnfLSGgEZO9HfcN47q6PbtgoY40JUZ6L6NN%2FoU5jIzo30rX9CETAv4SUfT8cO2rU0LrtRfKH6Dt7WquWdb5RJPq7ykNUU5Q9OLzQbE2NvfgLNlwXDF80%2FQ7gLv1SmMROxO2BGpG57shIHnR3eH7SFoerG1Xk5AurstO%2BNjxXcMxkissJREWfavzcpiDT1RuO367dkhcTyJtX&X-Amz-Signature=28c7a502ca81ed158299d9cc94e59de98e670bc2d04567c5ddb831b87d0d096c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGATB3EQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtMpIBxiwXoIRLFMF1GydF53sRsGJe9o%2BfRGWSk7Z%2FNgIgYDe0FGiGju6rz%2BwR3d9siCwdY1OdDeFHBDUOgp1PSIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAJowB8Yn9WdFSnuLyrcAxGsEiOx2yGo6%2FrO1QN%2FkwzQH2QNp9jLEdA2hODJsfXJJgMZCj6m0jUDqb17qriZpD2rvdil%2BdmmBcNzGSbbGQwBp8OQFvkhBnoRcT0SBnIkXz%2BUEvcHbM7aj93qETVuQjP0R2eYCRXxcYCPJKD%2BGKv5%2FCPkg5%2B5753HOYns7zz33PU5KYZmIpRpwMy1HlazoEM%2Bqeq1fzMSZwEfZeMm8%2BBXQgahq4EFQ4ENKUOl6FsvI%2F7y2YWELcGWIS5g54fMfPhVW9GtSsYv%2FB37rnARuPKa17rGM%2FIB9wxP53xov30nUpNrGPT7fp%2FQdh2XcuVQN7otaVt1H8xLskt3n5zTDH00A%2BJ%2FJQgirGqTAQuLkLV5iaC0tMrZDhlCv4kiZTn2u7Wtkoaf4rKOQaCCZUkb3mTjWl%2BDvxmx2eOdSWY%2BLX%2FKRgy%2BtEqfjMYREVC3ExNk4D8J0AT6Y%2B8SjhYw%2BCBEl1GF%2FYOWjTLG079T8TVJzy280tkcp1YANcJ0MLfwkjFBSbBOPyOlwsv6J1zOSCrJPeQAENmSk0%2Beb24eSgZ%2F4DBRn5NZILh%2FcbUgvEGas32cDZY%2BeoXnr6VWO79ZufvhcykaYneYmY%2FbPqrUuo4S1FyGwOLkD%2FMClLVvYmHbMIOG8MQGOqUBH2fUhRnsan%2BprKOqCnfLSGgEZO9HfcN47q6PbtgoY40JUZ6L6NN%2FoU5jIzo30rX9CETAv4SUfT8cO2rU0LrtRfKH6Dt7WquWdb5RJPq7ykNUU5Q9OLzQbE2NvfgLNlwXDF80%2FQ7gLv1SmMROxO2BGpG57shIHnR3eH7SFoerG1Xk5AurstO%2BNjxXcMxkissJREWfavzcpiDT1RuO367dkhcTyJtX&X-Amz-Signature=b54768bbdb0500a96e23cafa63c2792e7329dc231acdf1cb2a889e8498f04394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGATB3EQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtMpIBxiwXoIRLFMF1GydF53sRsGJe9o%2BfRGWSk7Z%2FNgIgYDe0FGiGju6rz%2BwR3d9siCwdY1OdDeFHBDUOgp1PSIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAJowB8Yn9WdFSnuLyrcAxGsEiOx2yGo6%2FrO1QN%2FkwzQH2QNp9jLEdA2hODJsfXJJgMZCj6m0jUDqb17qriZpD2rvdil%2BdmmBcNzGSbbGQwBp8OQFvkhBnoRcT0SBnIkXz%2BUEvcHbM7aj93qETVuQjP0R2eYCRXxcYCPJKD%2BGKv5%2FCPkg5%2B5753HOYns7zz33PU5KYZmIpRpwMy1HlazoEM%2Bqeq1fzMSZwEfZeMm8%2BBXQgahq4EFQ4ENKUOl6FsvI%2F7y2YWELcGWIS5g54fMfPhVW9GtSsYv%2FB37rnARuPKa17rGM%2FIB9wxP53xov30nUpNrGPT7fp%2FQdh2XcuVQN7otaVt1H8xLskt3n5zTDH00A%2BJ%2FJQgirGqTAQuLkLV5iaC0tMrZDhlCv4kiZTn2u7Wtkoaf4rKOQaCCZUkb3mTjWl%2BDvxmx2eOdSWY%2BLX%2FKRgy%2BtEqfjMYREVC3ExNk4D8J0AT6Y%2B8SjhYw%2BCBEl1GF%2FYOWjTLG079T8TVJzy280tkcp1YANcJ0MLfwkjFBSbBOPyOlwsv6J1zOSCrJPeQAENmSk0%2Beb24eSgZ%2F4DBRn5NZILh%2FcbUgvEGas32cDZY%2BeoXnr6VWO79ZufvhcykaYneYmY%2FbPqrUuo4S1FyGwOLkD%2FMClLVvYmHbMIOG8MQGOqUBH2fUhRnsan%2BprKOqCnfLSGgEZO9HfcN47q6PbtgoY40JUZ6L6NN%2FoU5jIzo30rX9CETAv4SUfT8cO2rU0LrtRfKH6Dt7WquWdb5RJPq7ykNUU5Q9OLzQbE2NvfgLNlwXDF80%2FQ7gLv1SmMROxO2BGpG57shIHnR3eH7SFoerG1Xk5AurstO%2BNjxXcMxkissJREWfavzcpiDT1RuO367dkhcTyJtX&X-Amz-Signature=74f63ce11cc81d33dacbc3f47418d7dcb5b8a52e80b897c514291e4c5a57c2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
