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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSQNXLH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwvdG2aFDlAtwP6GXbkcqBJRt7UaSJLXMQFBaoLHrPQIgSiOwx5cSJPevC4TOqDOWNVeXZF0W1AW01rb8%2FUxpheMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVOxO3vpNNCHVJ8EyrcA3ZH5kkN7i9SQ3BRz%2F1zv0ALpHNFTVhcRO14LkhobxzflPjXN%2Fb%2BHvs0jwEmBQlfG%2Bp7C9f2IYs0%2B5WqZ0e51v0IQJ8Cs1Gs5hKlmcEoVM2g6xO2%2FdklotrEG9LNhzKN6xtRRdbZlnxsmoj%2BprH40Kt3MNjgsiBva94niOwXqoghhK%2FLi3wNPKVR%2BFFnkTyGsFqlwGCYBbdTdrUbtOpBSHMXxSLyM%2B5zpyLx9yxoBTObEw5mDK7dvdTbJiNnxVwBopZFBvCOzB0uLuIsCG6Q7SS0qmv4VGHTz0VFbQQGpGs3F5uW0lndEpGYk%2BiExDmrPgt1PCxJ7E1TqQS%2F7QGZE3SvnhLmZyV8IxQavTA27jMNTUjHAKbqu5ueuMn4tuW074%2FMuT%2B81vl%2BM2aRxDe6M255chu2hwpZulnpkI%2BG7nQydmdd2JYFPVx3leF7kmfhA8AeCCMQdjOdECiLoLbwx856pTJtnhs4HVcxiS%2BRElTe0ig%2B1Aup7xsTT%2FlVHMzNBdEcHgzOKnN2qeQROOKxZMMNKbHJ1rfGZZpRf9h7kQs4G36y3%2Fbe%2BvPvkqHB%2FIcoFvZKXlkXZAD1kE6TgYT95qE3Y8lnWchg0lcvP7FdVWQXQ4NizD1plje6rZspMJ%2FI5b0GOqUBo9cDS%2FbAa%2B6kfjkeleu27y%2Fts8chj3ckkF1%2BimwFxHvTsDJygC4vh46U0ouHL408CJq%2BYfc5UQD28ASCUfbRIDW2TT6V0GBSFHyvtqr0Mwelq15A2Ftqr%2FemL5r4uxD%2F73RClv9A2L7rTujLy%2B0svRQ5ybqdQjs7hjpKHBkHYgZrNOmOjTS1hnaq9WMs6Xkxxl1SSBndK76nsn6wK7ouI4y0gvuo&X-Amz-Signature=806f549bd167d5598570d3d7599cf0807de86d1dca70529caa54368fdc6588b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSQNXLH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwvdG2aFDlAtwP6GXbkcqBJRt7UaSJLXMQFBaoLHrPQIgSiOwx5cSJPevC4TOqDOWNVeXZF0W1AW01rb8%2FUxpheMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVOxO3vpNNCHVJ8EyrcA3ZH5kkN7i9SQ3BRz%2F1zv0ALpHNFTVhcRO14LkhobxzflPjXN%2Fb%2BHvs0jwEmBQlfG%2Bp7C9f2IYs0%2B5WqZ0e51v0IQJ8Cs1Gs5hKlmcEoVM2g6xO2%2FdklotrEG9LNhzKN6xtRRdbZlnxsmoj%2BprH40Kt3MNjgsiBva94niOwXqoghhK%2FLi3wNPKVR%2BFFnkTyGsFqlwGCYBbdTdrUbtOpBSHMXxSLyM%2B5zpyLx9yxoBTObEw5mDK7dvdTbJiNnxVwBopZFBvCOzB0uLuIsCG6Q7SS0qmv4VGHTz0VFbQQGpGs3F5uW0lndEpGYk%2BiExDmrPgt1PCxJ7E1TqQS%2F7QGZE3SvnhLmZyV8IxQavTA27jMNTUjHAKbqu5ueuMn4tuW074%2FMuT%2B81vl%2BM2aRxDe6M255chu2hwpZulnpkI%2BG7nQydmdd2JYFPVx3leF7kmfhA8AeCCMQdjOdECiLoLbwx856pTJtnhs4HVcxiS%2BRElTe0ig%2B1Aup7xsTT%2FlVHMzNBdEcHgzOKnN2qeQROOKxZMMNKbHJ1rfGZZpRf9h7kQs4G36y3%2Fbe%2BvPvkqHB%2FIcoFvZKXlkXZAD1kE6TgYT95qE3Y8lnWchg0lcvP7FdVWQXQ4NizD1plje6rZspMJ%2FI5b0GOqUBo9cDS%2FbAa%2B6kfjkeleu27y%2Fts8chj3ckkF1%2BimwFxHvTsDJygC4vh46U0ouHL408CJq%2BYfc5UQD28ASCUfbRIDW2TT6V0GBSFHyvtqr0Mwelq15A2Ftqr%2FemL5r4uxD%2F73RClv9A2L7rTujLy%2B0svRQ5ybqdQjs7hjpKHBkHYgZrNOmOjTS1hnaq9WMs6Xkxxl1SSBndK76nsn6wK7ouI4y0gvuo&X-Amz-Signature=fd7f17545aefecb35c942238b84885edad7cf326c0d0e3ed4c28834744654b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSQNXLH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwvdG2aFDlAtwP6GXbkcqBJRt7UaSJLXMQFBaoLHrPQIgSiOwx5cSJPevC4TOqDOWNVeXZF0W1AW01rb8%2FUxpheMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVOxO3vpNNCHVJ8EyrcA3ZH5kkN7i9SQ3BRz%2F1zv0ALpHNFTVhcRO14LkhobxzflPjXN%2Fb%2BHvs0jwEmBQlfG%2Bp7C9f2IYs0%2B5WqZ0e51v0IQJ8Cs1Gs5hKlmcEoVM2g6xO2%2FdklotrEG9LNhzKN6xtRRdbZlnxsmoj%2BprH40Kt3MNjgsiBva94niOwXqoghhK%2FLi3wNPKVR%2BFFnkTyGsFqlwGCYBbdTdrUbtOpBSHMXxSLyM%2B5zpyLx9yxoBTObEw5mDK7dvdTbJiNnxVwBopZFBvCOzB0uLuIsCG6Q7SS0qmv4VGHTz0VFbQQGpGs3F5uW0lndEpGYk%2BiExDmrPgt1PCxJ7E1TqQS%2F7QGZE3SvnhLmZyV8IxQavTA27jMNTUjHAKbqu5ueuMn4tuW074%2FMuT%2B81vl%2BM2aRxDe6M255chu2hwpZulnpkI%2BG7nQydmdd2JYFPVx3leF7kmfhA8AeCCMQdjOdECiLoLbwx856pTJtnhs4HVcxiS%2BRElTe0ig%2B1Aup7xsTT%2FlVHMzNBdEcHgzOKnN2qeQROOKxZMMNKbHJ1rfGZZpRf9h7kQs4G36y3%2Fbe%2BvPvkqHB%2FIcoFvZKXlkXZAD1kE6TgYT95qE3Y8lnWchg0lcvP7FdVWQXQ4NizD1plje6rZspMJ%2FI5b0GOqUBo9cDS%2FbAa%2B6kfjkeleu27y%2Fts8chj3ckkF1%2BimwFxHvTsDJygC4vh46U0ouHL408CJq%2BYfc5UQD28ASCUfbRIDW2TT6V0GBSFHyvtqr0Mwelq15A2Ftqr%2FemL5r4uxD%2F73RClv9A2L7rTujLy%2B0svRQ5ybqdQjs7hjpKHBkHYgZrNOmOjTS1hnaq9WMs6Xkxxl1SSBndK76nsn6wK7ouI4y0gvuo&X-Amz-Signature=7fe577e3738e1f1931b742eba5dfea3ecbb66f00663af5febf466f7b4a014fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSQNXLH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwvdG2aFDlAtwP6GXbkcqBJRt7UaSJLXMQFBaoLHrPQIgSiOwx5cSJPevC4TOqDOWNVeXZF0W1AW01rb8%2FUxpheMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVOxO3vpNNCHVJ8EyrcA3ZH5kkN7i9SQ3BRz%2F1zv0ALpHNFTVhcRO14LkhobxzflPjXN%2Fb%2BHvs0jwEmBQlfG%2Bp7C9f2IYs0%2B5WqZ0e51v0IQJ8Cs1Gs5hKlmcEoVM2g6xO2%2FdklotrEG9LNhzKN6xtRRdbZlnxsmoj%2BprH40Kt3MNjgsiBva94niOwXqoghhK%2FLi3wNPKVR%2BFFnkTyGsFqlwGCYBbdTdrUbtOpBSHMXxSLyM%2B5zpyLx9yxoBTObEw5mDK7dvdTbJiNnxVwBopZFBvCOzB0uLuIsCG6Q7SS0qmv4VGHTz0VFbQQGpGs3F5uW0lndEpGYk%2BiExDmrPgt1PCxJ7E1TqQS%2F7QGZE3SvnhLmZyV8IxQavTA27jMNTUjHAKbqu5ueuMn4tuW074%2FMuT%2B81vl%2BM2aRxDe6M255chu2hwpZulnpkI%2BG7nQydmdd2JYFPVx3leF7kmfhA8AeCCMQdjOdECiLoLbwx856pTJtnhs4HVcxiS%2BRElTe0ig%2B1Aup7xsTT%2FlVHMzNBdEcHgzOKnN2qeQROOKxZMMNKbHJ1rfGZZpRf9h7kQs4G36y3%2Fbe%2BvPvkqHB%2FIcoFvZKXlkXZAD1kE6TgYT95qE3Y8lnWchg0lcvP7FdVWQXQ4NizD1plje6rZspMJ%2FI5b0GOqUBo9cDS%2FbAa%2B6kfjkeleu27y%2Fts8chj3ckkF1%2BimwFxHvTsDJygC4vh46U0ouHL408CJq%2BYfc5UQD28ASCUfbRIDW2TT6V0GBSFHyvtqr0Mwelq15A2Ftqr%2FemL5r4uxD%2F73RClv9A2L7rTujLy%2B0svRQ5ybqdQjs7hjpKHBkHYgZrNOmOjTS1hnaq9WMs6Xkxxl1SSBndK76nsn6wK7ouI4y0gvuo&X-Amz-Signature=397a71f37ae9c99dc781008f8b70be3030c4b34e8b8b46ebb9faaf710a5ce77f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSQNXLH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwvdG2aFDlAtwP6GXbkcqBJRt7UaSJLXMQFBaoLHrPQIgSiOwx5cSJPevC4TOqDOWNVeXZF0W1AW01rb8%2FUxpheMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVOxO3vpNNCHVJ8EyrcA3ZH5kkN7i9SQ3BRz%2F1zv0ALpHNFTVhcRO14LkhobxzflPjXN%2Fb%2BHvs0jwEmBQlfG%2Bp7C9f2IYs0%2B5WqZ0e51v0IQJ8Cs1Gs5hKlmcEoVM2g6xO2%2FdklotrEG9LNhzKN6xtRRdbZlnxsmoj%2BprH40Kt3MNjgsiBva94niOwXqoghhK%2FLi3wNPKVR%2BFFnkTyGsFqlwGCYBbdTdrUbtOpBSHMXxSLyM%2B5zpyLx9yxoBTObEw5mDK7dvdTbJiNnxVwBopZFBvCOzB0uLuIsCG6Q7SS0qmv4VGHTz0VFbQQGpGs3F5uW0lndEpGYk%2BiExDmrPgt1PCxJ7E1TqQS%2F7QGZE3SvnhLmZyV8IxQavTA27jMNTUjHAKbqu5ueuMn4tuW074%2FMuT%2B81vl%2BM2aRxDe6M255chu2hwpZulnpkI%2BG7nQydmdd2JYFPVx3leF7kmfhA8AeCCMQdjOdECiLoLbwx856pTJtnhs4HVcxiS%2BRElTe0ig%2B1Aup7xsTT%2FlVHMzNBdEcHgzOKnN2qeQROOKxZMMNKbHJ1rfGZZpRf9h7kQs4G36y3%2Fbe%2BvPvkqHB%2FIcoFvZKXlkXZAD1kE6TgYT95qE3Y8lnWchg0lcvP7FdVWQXQ4NizD1plje6rZspMJ%2FI5b0GOqUBo9cDS%2FbAa%2B6kfjkeleu27y%2Fts8chj3ckkF1%2BimwFxHvTsDJygC4vh46U0ouHL408CJq%2BYfc5UQD28ASCUfbRIDW2TT6V0GBSFHyvtqr0Mwelq15A2Ftqr%2FemL5r4uxD%2F73RClv9A2L7rTujLy%2B0svRQ5ybqdQjs7hjpKHBkHYgZrNOmOjTS1hnaq9WMs6Xkxxl1SSBndK76nsn6wK7ouI4y0gvuo&X-Amz-Signature=dd5ef1cb2efbb8ffa52385e513f0a5e2ce077d36ba9f7ab6121bd86ccd6aa6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
