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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5G6AQW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDYC7EKhlvypmC7q2P8F06sZqmp5S6d6PfwHIC%2BWP3zkAiEAll18FpfJ17bKdQoCIm2KVKETtjyKCV7lrscCig1SBI0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHz%2FWwzZkCFYOFTdbCrcAxErWCKq92vY8IiyObYIm6%2FVE0AH6YCVN%2FPR7uTKNCkggsdWmTy9IDbOqWVs4bud3sZ3ECfwzOoWaqwVDEQruuWSjXqhRKUXpI2%2FPSrgBkvpkl8Ay2oQLd%2BYxk%2Fsd4j0ocsmhOLf1%2B9t5FE4cphlbVXT2ElyjYe2rMlwIKruCSLOFEk7%2Bx1Ciky61ihNC%2By2D6mZ3q4yTLy304dj6hMPHQ4sGhmTmWm0hF5YbxtMX0HNr8yuIyBAArXQXllgcbE0YAd3U3gPkKU8HIgcNi8Q095Tfzeoc0oN1gaotjQoiE1Ak9Tkf3t0z1AsVLXG%2FA86WP3BbQ47ufnKnSiFeiO%2FPawXutduLOf0O6ybVhyplKhiG1CDhcdrHhFao%2B4YEBjEgPA1s2K%2B%2Bd7qV1wryD7WtkrqSJqPxfYl27%2Fy0gHYw4Uzg02lTdCI6pDWT6gr%2BfuAdizuuWf4nIOzvX9SwWBiQPnhomOA0cK3sVoH1i%2Bz%2B2jVjZ9%2FUbUhHDUBW6rmr%2FRoely90iJZ%2F20LRFzVwXwimZkdGi3pVP8EAsAflcZ37EZJLmyQdPioUKA66POgCgBU0EXHp%2BqqOdz0GRyd%2FFfz5u4vbxakxkKx4egfDcGZTqxnS3BfjFeZDJKln%2BfXMLHAhr0GOqUBG3ZJKw9JUwK8u29N9g%2FGWoM8gYR%2B49Hc3oXdL0kz7JeThXm4kYFpxbvl0UBrKov%2BTEN5WiyQaKnS7Ab5%2FFHP751UYKNRwvICHHUtY63vO4MjDeucTKr64bOSulOg6SowG4CV%2FY2D4ST2VyVX2pP0a%2FUYEw8d%2FLYEIyevnPftzIEboG%2BioL3MZ4VcpP6%2F7GaYmvavmBbKd5cZH9n%2FdXJkuVEjTQT6&X-Amz-Signature=e4b42a146d4314c0314b1f596f37bf417787c44d84bcfd0b37dcec7ccdf540fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5G6AQW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDYC7EKhlvypmC7q2P8F06sZqmp5S6d6PfwHIC%2BWP3zkAiEAll18FpfJ17bKdQoCIm2KVKETtjyKCV7lrscCig1SBI0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHz%2FWwzZkCFYOFTdbCrcAxErWCKq92vY8IiyObYIm6%2FVE0AH6YCVN%2FPR7uTKNCkggsdWmTy9IDbOqWVs4bud3sZ3ECfwzOoWaqwVDEQruuWSjXqhRKUXpI2%2FPSrgBkvpkl8Ay2oQLd%2BYxk%2Fsd4j0ocsmhOLf1%2B9t5FE4cphlbVXT2ElyjYe2rMlwIKruCSLOFEk7%2Bx1Ciky61ihNC%2By2D6mZ3q4yTLy304dj6hMPHQ4sGhmTmWm0hF5YbxtMX0HNr8yuIyBAArXQXllgcbE0YAd3U3gPkKU8HIgcNi8Q095Tfzeoc0oN1gaotjQoiE1Ak9Tkf3t0z1AsVLXG%2FA86WP3BbQ47ufnKnSiFeiO%2FPawXutduLOf0O6ybVhyplKhiG1CDhcdrHhFao%2B4YEBjEgPA1s2K%2B%2Bd7qV1wryD7WtkrqSJqPxfYl27%2Fy0gHYw4Uzg02lTdCI6pDWT6gr%2BfuAdizuuWf4nIOzvX9SwWBiQPnhomOA0cK3sVoH1i%2Bz%2B2jVjZ9%2FUbUhHDUBW6rmr%2FRoely90iJZ%2F20LRFzVwXwimZkdGi3pVP8EAsAflcZ37EZJLmyQdPioUKA66POgCgBU0EXHp%2BqqOdz0GRyd%2FFfz5u4vbxakxkKx4egfDcGZTqxnS3BfjFeZDJKln%2BfXMLHAhr0GOqUBG3ZJKw9JUwK8u29N9g%2FGWoM8gYR%2B49Hc3oXdL0kz7JeThXm4kYFpxbvl0UBrKov%2BTEN5WiyQaKnS7Ab5%2FFHP751UYKNRwvICHHUtY63vO4MjDeucTKr64bOSulOg6SowG4CV%2FY2D4ST2VyVX2pP0a%2FUYEw8d%2FLYEIyevnPftzIEboG%2BioL3MZ4VcpP6%2F7GaYmvavmBbKd5cZH9n%2FdXJkuVEjTQT6&X-Amz-Signature=c0f29059b4cfec452adc5590426c21affc519d8628f81071a23b6564cbd1ace1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5G6AQW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDYC7EKhlvypmC7q2P8F06sZqmp5S6d6PfwHIC%2BWP3zkAiEAll18FpfJ17bKdQoCIm2KVKETtjyKCV7lrscCig1SBI0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHz%2FWwzZkCFYOFTdbCrcAxErWCKq92vY8IiyObYIm6%2FVE0AH6YCVN%2FPR7uTKNCkggsdWmTy9IDbOqWVs4bud3sZ3ECfwzOoWaqwVDEQruuWSjXqhRKUXpI2%2FPSrgBkvpkl8Ay2oQLd%2BYxk%2Fsd4j0ocsmhOLf1%2B9t5FE4cphlbVXT2ElyjYe2rMlwIKruCSLOFEk7%2Bx1Ciky61ihNC%2By2D6mZ3q4yTLy304dj6hMPHQ4sGhmTmWm0hF5YbxtMX0HNr8yuIyBAArXQXllgcbE0YAd3U3gPkKU8HIgcNi8Q095Tfzeoc0oN1gaotjQoiE1Ak9Tkf3t0z1AsVLXG%2FA86WP3BbQ47ufnKnSiFeiO%2FPawXutduLOf0O6ybVhyplKhiG1CDhcdrHhFao%2B4YEBjEgPA1s2K%2B%2Bd7qV1wryD7WtkrqSJqPxfYl27%2Fy0gHYw4Uzg02lTdCI6pDWT6gr%2BfuAdizuuWf4nIOzvX9SwWBiQPnhomOA0cK3sVoH1i%2Bz%2B2jVjZ9%2FUbUhHDUBW6rmr%2FRoely90iJZ%2F20LRFzVwXwimZkdGi3pVP8EAsAflcZ37EZJLmyQdPioUKA66POgCgBU0EXHp%2BqqOdz0GRyd%2FFfz5u4vbxakxkKx4egfDcGZTqxnS3BfjFeZDJKln%2BfXMLHAhr0GOqUBG3ZJKw9JUwK8u29N9g%2FGWoM8gYR%2B49Hc3oXdL0kz7JeThXm4kYFpxbvl0UBrKov%2BTEN5WiyQaKnS7Ab5%2FFHP751UYKNRwvICHHUtY63vO4MjDeucTKr64bOSulOg6SowG4CV%2FY2D4ST2VyVX2pP0a%2FUYEw8d%2FLYEIyevnPftzIEboG%2BioL3MZ4VcpP6%2F7GaYmvavmBbKd5cZH9n%2FdXJkuVEjTQT6&X-Amz-Signature=a0a189af685fe887b08a0cfd8a04dd35b9a9080a1da219b1734b94b7c0f45cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5G6AQW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDYC7EKhlvypmC7q2P8F06sZqmp5S6d6PfwHIC%2BWP3zkAiEAll18FpfJ17bKdQoCIm2KVKETtjyKCV7lrscCig1SBI0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHz%2FWwzZkCFYOFTdbCrcAxErWCKq92vY8IiyObYIm6%2FVE0AH6YCVN%2FPR7uTKNCkggsdWmTy9IDbOqWVs4bud3sZ3ECfwzOoWaqwVDEQruuWSjXqhRKUXpI2%2FPSrgBkvpkl8Ay2oQLd%2BYxk%2Fsd4j0ocsmhOLf1%2B9t5FE4cphlbVXT2ElyjYe2rMlwIKruCSLOFEk7%2Bx1Ciky61ihNC%2By2D6mZ3q4yTLy304dj6hMPHQ4sGhmTmWm0hF5YbxtMX0HNr8yuIyBAArXQXllgcbE0YAd3U3gPkKU8HIgcNi8Q095Tfzeoc0oN1gaotjQoiE1Ak9Tkf3t0z1AsVLXG%2FA86WP3BbQ47ufnKnSiFeiO%2FPawXutduLOf0O6ybVhyplKhiG1CDhcdrHhFao%2B4YEBjEgPA1s2K%2B%2Bd7qV1wryD7WtkrqSJqPxfYl27%2Fy0gHYw4Uzg02lTdCI6pDWT6gr%2BfuAdizuuWf4nIOzvX9SwWBiQPnhomOA0cK3sVoH1i%2Bz%2B2jVjZ9%2FUbUhHDUBW6rmr%2FRoely90iJZ%2F20LRFzVwXwimZkdGi3pVP8EAsAflcZ37EZJLmyQdPioUKA66POgCgBU0EXHp%2BqqOdz0GRyd%2FFfz5u4vbxakxkKx4egfDcGZTqxnS3BfjFeZDJKln%2BfXMLHAhr0GOqUBG3ZJKw9JUwK8u29N9g%2FGWoM8gYR%2B49Hc3oXdL0kz7JeThXm4kYFpxbvl0UBrKov%2BTEN5WiyQaKnS7Ab5%2FFHP751UYKNRwvICHHUtY63vO4MjDeucTKr64bOSulOg6SowG4CV%2FY2D4ST2VyVX2pP0a%2FUYEw8d%2FLYEIyevnPftzIEboG%2BioL3MZ4VcpP6%2F7GaYmvavmBbKd5cZH9n%2FdXJkuVEjTQT6&X-Amz-Signature=bfb4567aabe37b59b38238f3207b8ee028dc9b417fa34279876e4c4fef5ccead&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5G6AQW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDYC7EKhlvypmC7q2P8F06sZqmp5S6d6PfwHIC%2BWP3zkAiEAll18FpfJ17bKdQoCIm2KVKETtjyKCV7lrscCig1SBI0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHz%2FWwzZkCFYOFTdbCrcAxErWCKq92vY8IiyObYIm6%2FVE0AH6YCVN%2FPR7uTKNCkggsdWmTy9IDbOqWVs4bud3sZ3ECfwzOoWaqwVDEQruuWSjXqhRKUXpI2%2FPSrgBkvpkl8Ay2oQLd%2BYxk%2Fsd4j0ocsmhOLf1%2B9t5FE4cphlbVXT2ElyjYe2rMlwIKruCSLOFEk7%2Bx1Ciky61ihNC%2By2D6mZ3q4yTLy304dj6hMPHQ4sGhmTmWm0hF5YbxtMX0HNr8yuIyBAArXQXllgcbE0YAd3U3gPkKU8HIgcNi8Q095Tfzeoc0oN1gaotjQoiE1Ak9Tkf3t0z1AsVLXG%2FA86WP3BbQ47ufnKnSiFeiO%2FPawXutduLOf0O6ybVhyplKhiG1CDhcdrHhFao%2B4YEBjEgPA1s2K%2B%2Bd7qV1wryD7WtkrqSJqPxfYl27%2Fy0gHYw4Uzg02lTdCI6pDWT6gr%2BfuAdizuuWf4nIOzvX9SwWBiQPnhomOA0cK3sVoH1i%2Bz%2B2jVjZ9%2FUbUhHDUBW6rmr%2FRoely90iJZ%2F20LRFzVwXwimZkdGi3pVP8EAsAflcZ37EZJLmyQdPioUKA66POgCgBU0EXHp%2BqqOdz0GRyd%2FFfz5u4vbxakxkKx4egfDcGZTqxnS3BfjFeZDJKln%2BfXMLHAhr0GOqUBG3ZJKw9JUwK8u29N9g%2FGWoM8gYR%2B49Hc3oXdL0kz7JeThXm4kYFpxbvl0UBrKov%2BTEN5WiyQaKnS7Ab5%2FFHP751UYKNRwvICHHUtY63vO4MjDeucTKr64bOSulOg6SowG4CV%2FY2D4ST2VyVX2pP0a%2FUYEw8d%2FLYEIyevnPftzIEboG%2BioL3MZ4VcpP6%2F7GaYmvavmBbKd5cZH9n%2FdXJkuVEjTQT6&X-Amz-Signature=f9b86b614e4e4f177398dd5b985640443d078665c20683a03b551ad6ee8a1454&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
