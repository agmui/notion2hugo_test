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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4L7AOR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCLOkEVxZpdQ9UDX7eMpGQQzYjH1YNDxZLWWbPJkGnxDQIgPTBYsfWvKpA%2BYjb%2Fk8OReBStMHwNsqaCHJ2lEHdajrQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL0F5GKPvfd8mwxe%2BSrcA5sgZAdnutazhRKopjsxe5KDCyE6nidfnfSS0O7mYEcpbyCuOXPwYdoKw081qGs983uvQVWjR2H1hOpMUha3tnZGuI2hsVuGgHwOTNOgVMPg8mYVzaiTUukLtBlbLa%2BM%2FO0VB%2FVskQvCD7AFhjQNBtJjhDljfajSH4Rd2CkuJniiMqrnVgF0mNo%2FFGeNSEzKWQJy64Ml0w4tpHfBfmM%2BZqvmtYvPuR3dg7pLX36lA1qWuKxbWF0GS%2Bfy4TYul%2FAfX%2BLX1qGmDFyq6ezBdtlq3PXbCXicq2IhhDIWcJoHyfdbbI0xVB1jIhDe9MReOB3YwYAw9w7IHP4WkZmmuKBcQSiWWV5eHRUBT34Np12roKwzc9y0cJ%2BLsq%2B1t%2BfAxNXoBgRzh9YdeDSG929ByH4mmVuxr%2FJpMGCIh%2B5OtiE4TkQ4PxzNbQhUknMOSNpN1FTodPmMoFHC1c3rXhlliYRfqnfxjCaW9m1jLltvPmy1Ri0e9d34Ol2aDOK4qYvqWnXLXsymukGj81jw2KGqQAMmSj09a4h6XGvYDUM4vc%2BVZ5FkMUShr3aQ7R14WQMtbLrhn%2F392k57rTOHxjU%2FJzPC4m8ewGjNfxIacEUkMIQOo070nuWfFUv3wnM6ar3DMOiCsr4GOqUBkT1Q1QlgHdUG6STDi5QuNOFQTVDWaOLFbYQySzkvse3g8Tx19pUskkW%2BXbE1cRHzcQyEI%2BRJFy0nfgN7G10x%2BSibE8JMk160cMl%2BTCAs%2BghJ%2Fv3WIe0gkr%2FtqHdELC%2BeuL4OiQAWHD9GF2fD%2BybL1g2x59ZLyjsIU%2FQT0QS18YLdsFAY63czcYDdN1lQiWjyj2RzAEkxdZkHLiQD6jKHUMvnrQt6&X-Amz-Signature=3070578a868e191cfc7346d83a838f58724cfce49e7a3e3752e6ab84e2a39e40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4L7AOR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCLOkEVxZpdQ9UDX7eMpGQQzYjH1YNDxZLWWbPJkGnxDQIgPTBYsfWvKpA%2BYjb%2Fk8OReBStMHwNsqaCHJ2lEHdajrQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL0F5GKPvfd8mwxe%2BSrcA5sgZAdnutazhRKopjsxe5KDCyE6nidfnfSS0O7mYEcpbyCuOXPwYdoKw081qGs983uvQVWjR2H1hOpMUha3tnZGuI2hsVuGgHwOTNOgVMPg8mYVzaiTUukLtBlbLa%2BM%2FO0VB%2FVskQvCD7AFhjQNBtJjhDljfajSH4Rd2CkuJniiMqrnVgF0mNo%2FFGeNSEzKWQJy64Ml0w4tpHfBfmM%2BZqvmtYvPuR3dg7pLX36lA1qWuKxbWF0GS%2Bfy4TYul%2FAfX%2BLX1qGmDFyq6ezBdtlq3PXbCXicq2IhhDIWcJoHyfdbbI0xVB1jIhDe9MReOB3YwYAw9w7IHP4WkZmmuKBcQSiWWV5eHRUBT34Np12roKwzc9y0cJ%2BLsq%2B1t%2BfAxNXoBgRzh9YdeDSG929ByH4mmVuxr%2FJpMGCIh%2B5OtiE4TkQ4PxzNbQhUknMOSNpN1FTodPmMoFHC1c3rXhlliYRfqnfxjCaW9m1jLltvPmy1Ri0e9d34Ol2aDOK4qYvqWnXLXsymukGj81jw2KGqQAMmSj09a4h6XGvYDUM4vc%2BVZ5FkMUShr3aQ7R14WQMtbLrhn%2F392k57rTOHxjU%2FJzPC4m8ewGjNfxIacEUkMIQOo070nuWfFUv3wnM6ar3DMOiCsr4GOqUBkT1Q1QlgHdUG6STDi5QuNOFQTVDWaOLFbYQySzkvse3g8Tx19pUskkW%2BXbE1cRHzcQyEI%2BRJFy0nfgN7G10x%2BSibE8JMk160cMl%2BTCAs%2BghJ%2Fv3WIe0gkr%2FtqHdELC%2BeuL4OiQAWHD9GF2fD%2BybL1g2x59ZLyjsIU%2FQT0QS18YLdsFAY63czcYDdN1lQiWjyj2RzAEkxdZkHLiQD6jKHUMvnrQt6&X-Amz-Signature=566b706f55b3a4fdfaa5eaa5236403930d2dc2168ad2892b7de268acfe533575&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4L7AOR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCLOkEVxZpdQ9UDX7eMpGQQzYjH1YNDxZLWWbPJkGnxDQIgPTBYsfWvKpA%2BYjb%2Fk8OReBStMHwNsqaCHJ2lEHdajrQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL0F5GKPvfd8mwxe%2BSrcA5sgZAdnutazhRKopjsxe5KDCyE6nidfnfSS0O7mYEcpbyCuOXPwYdoKw081qGs983uvQVWjR2H1hOpMUha3tnZGuI2hsVuGgHwOTNOgVMPg8mYVzaiTUukLtBlbLa%2BM%2FO0VB%2FVskQvCD7AFhjQNBtJjhDljfajSH4Rd2CkuJniiMqrnVgF0mNo%2FFGeNSEzKWQJy64Ml0w4tpHfBfmM%2BZqvmtYvPuR3dg7pLX36lA1qWuKxbWF0GS%2Bfy4TYul%2FAfX%2BLX1qGmDFyq6ezBdtlq3PXbCXicq2IhhDIWcJoHyfdbbI0xVB1jIhDe9MReOB3YwYAw9w7IHP4WkZmmuKBcQSiWWV5eHRUBT34Np12roKwzc9y0cJ%2BLsq%2B1t%2BfAxNXoBgRzh9YdeDSG929ByH4mmVuxr%2FJpMGCIh%2B5OtiE4TkQ4PxzNbQhUknMOSNpN1FTodPmMoFHC1c3rXhlliYRfqnfxjCaW9m1jLltvPmy1Ri0e9d34Ol2aDOK4qYvqWnXLXsymukGj81jw2KGqQAMmSj09a4h6XGvYDUM4vc%2BVZ5FkMUShr3aQ7R14WQMtbLrhn%2F392k57rTOHxjU%2FJzPC4m8ewGjNfxIacEUkMIQOo070nuWfFUv3wnM6ar3DMOiCsr4GOqUBkT1Q1QlgHdUG6STDi5QuNOFQTVDWaOLFbYQySzkvse3g8Tx19pUskkW%2BXbE1cRHzcQyEI%2BRJFy0nfgN7G10x%2BSibE8JMk160cMl%2BTCAs%2BghJ%2Fv3WIe0gkr%2FtqHdELC%2BeuL4OiQAWHD9GF2fD%2BybL1g2x59ZLyjsIU%2FQT0QS18YLdsFAY63czcYDdN1lQiWjyj2RzAEkxdZkHLiQD6jKHUMvnrQt6&X-Amz-Signature=3b453866b792fbc8c64f20d63fe2c4a1983e95d97a55de5043ed18d4fc649378&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4L7AOR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCLOkEVxZpdQ9UDX7eMpGQQzYjH1YNDxZLWWbPJkGnxDQIgPTBYsfWvKpA%2BYjb%2Fk8OReBStMHwNsqaCHJ2lEHdajrQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL0F5GKPvfd8mwxe%2BSrcA5sgZAdnutazhRKopjsxe5KDCyE6nidfnfSS0O7mYEcpbyCuOXPwYdoKw081qGs983uvQVWjR2H1hOpMUha3tnZGuI2hsVuGgHwOTNOgVMPg8mYVzaiTUukLtBlbLa%2BM%2FO0VB%2FVskQvCD7AFhjQNBtJjhDljfajSH4Rd2CkuJniiMqrnVgF0mNo%2FFGeNSEzKWQJy64Ml0w4tpHfBfmM%2BZqvmtYvPuR3dg7pLX36lA1qWuKxbWF0GS%2Bfy4TYul%2FAfX%2BLX1qGmDFyq6ezBdtlq3PXbCXicq2IhhDIWcJoHyfdbbI0xVB1jIhDe9MReOB3YwYAw9w7IHP4WkZmmuKBcQSiWWV5eHRUBT34Np12roKwzc9y0cJ%2BLsq%2B1t%2BfAxNXoBgRzh9YdeDSG929ByH4mmVuxr%2FJpMGCIh%2B5OtiE4TkQ4PxzNbQhUknMOSNpN1FTodPmMoFHC1c3rXhlliYRfqnfxjCaW9m1jLltvPmy1Ri0e9d34Ol2aDOK4qYvqWnXLXsymukGj81jw2KGqQAMmSj09a4h6XGvYDUM4vc%2BVZ5FkMUShr3aQ7R14WQMtbLrhn%2F392k57rTOHxjU%2FJzPC4m8ewGjNfxIacEUkMIQOo070nuWfFUv3wnM6ar3DMOiCsr4GOqUBkT1Q1QlgHdUG6STDi5QuNOFQTVDWaOLFbYQySzkvse3g8Tx19pUskkW%2BXbE1cRHzcQyEI%2BRJFy0nfgN7G10x%2BSibE8JMk160cMl%2BTCAs%2BghJ%2Fv3WIe0gkr%2FtqHdELC%2BeuL4OiQAWHD9GF2fD%2BybL1g2x59ZLyjsIU%2FQT0QS18YLdsFAY63czcYDdN1lQiWjyj2RzAEkxdZkHLiQD6jKHUMvnrQt6&X-Amz-Signature=204763f783b7d2db59250f2ed0c9369856c6ba3fbe0149c8235abf44ceceb67d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4L7AOR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCLOkEVxZpdQ9UDX7eMpGQQzYjH1YNDxZLWWbPJkGnxDQIgPTBYsfWvKpA%2BYjb%2Fk8OReBStMHwNsqaCHJ2lEHdajrQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL0F5GKPvfd8mwxe%2BSrcA5sgZAdnutazhRKopjsxe5KDCyE6nidfnfSS0O7mYEcpbyCuOXPwYdoKw081qGs983uvQVWjR2H1hOpMUha3tnZGuI2hsVuGgHwOTNOgVMPg8mYVzaiTUukLtBlbLa%2BM%2FO0VB%2FVskQvCD7AFhjQNBtJjhDljfajSH4Rd2CkuJniiMqrnVgF0mNo%2FFGeNSEzKWQJy64Ml0w4tpHfBfmM%2BZqvmtYvPuR3dg7pLX36lA1qWuKxbWF0GS%2Bfy4TYul%2FAfX%2BLX1qGmDFyq6ezBdtlq3PXbCXicq2IhhDIWcJoHyfdbbI0xVB1jIhDe9MReOB3YwYAw9w7IHP4WkZmmuKBcQSiWWV5eHRUBT34Np12roKwzc9y0cJ%2BLsq%2B1t%2BfAxNXoBgRzh9YdeDSG929ByH4mmVuxr%2FJpMGCIh%2B5OtiE4TkQ4PxzNbQhUknMOSNpN1FTodPmMoFHC1c3rXhlliYRfqnfxjCaW9m1jLltvPmy1Ri0e9d34Ol2aDOK4qYvqWnXLXsymukGj81jw2KGqQAMmSj09a4h6XGvYDUM4vc%2BVZ5FkMUShr3aQ7R14WQMtbLrhn%2F392k57rTOHxjU%2FJzPC4m8ewGjNfxIacEUkMIQOo070nuWfFUv3wnM6ar3DMOiCsr4GOqUBkT1Q1QlgHdUG6STDi5QuNOFQTVDWaOLFbYQySzkvse3g8Tx19pUskkW%2BXbE1cRHzcQyEI%2BRJFy0nfgN7G10x%2BSibE8JMk160cMl%2BTCAs%2BghJ%2Fv3WIe0gkr%2FtqHdELC%2BeuL4OiQAWHD9GF2fD%2BybL1g2x59ZLyjsIU%2FQT0QS18YLdsFAY63czcYDdN1lQiWjyj2RzAEkxdZkHLiQD6jKHUMvnrQt6&X-Amz-Signature=57d6af585eaedf6f82bf55401d2004424c7467330ae18d8c3a1493a596e19a16&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
