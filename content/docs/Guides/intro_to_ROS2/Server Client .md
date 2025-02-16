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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SOABUC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCwLoO5r9yaGONnxEIfE1qQnWXvHW06ZKLiAlfJVfmOCgIgGJjFrWo2NCFvuBhSUk1pjrkEZ5wGNX9Xg12dVxV6uTkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF3v53%2B1M%2Bow64SA0SrcA2Uu0%2FeJ9fIW2D6rEvvxxtGiIrNBwl7ckWp%2FGCDDE7xickAMspH%2BXEhJngls81%2FYAeFMUOf1RxboWnYUHydm5BNFLyQXQ3QLjs9lg%2Bb%2F4HoqZcHo4EX2n3zqsnhyzz8MNDx6WvlfQmU%2BZ3ZsV2rKBhDsZsv9RBVmo61Imh8lT1ZZWb37LHjSiWzUy33IUml00OkfzplDt%2Bin2t7waLk2X7rRT7W9wuwpQhkgkhBftSjWIGDnoiRzTCoFSBimk99c4xtcWh%2Fd6HBZj4dP2TtSh%2Fn1H8t0V%2BB2VmSmmS9vpbviSpW4Pf0H5YSBZQkuADMbgdq%2FwqHvUtoTk2TNdGCfpTjRtCriBfsVo5sw5U1lWlIIfYaruGLUcnX1yR3x%2BLbGCE%2FE%2Fva6FZUCqaT6oQY01EO06bdF%2Fe7%2FmJ2jrLNn%2FbRTrNfPCe42PKfiLn%2BsPMrL4jdqBfP%2BKl%2BnXbKTam82j816bEjhH3wzmrsNtuOIN%2BLg6Ct1%2BIhNh3jwaoNAMpx%2BVhwwa5C%2FkS56Azule0sMgUPTr%2BaRB7pSF7bg8gv5nAcp4Duj8KLZm62aDhV6kAumxVCLpahNKMj0kNLDMIrX9zzvXXo3EsGfO1k9ChUA6i4XWIFmHL5trrkT1%2FQIMI3%2Bxb0GOqUBqdkw8b7U4Vp6CJ9ryedMu0Q354tw7gfjkIrxtisrkRt2D8iWLECPiFagcuEsQVqpJC%2FfdygQfLqsRC9bwAsGUVlXmG0M5pZWBXcjH44rCBMMqnsG8PlV9CMj695JHtU1swUN0zTjl723IvuhbCQCdw0S%2BgHxuZTSCKmiSS%2B%2BX1Ndqx4Ynrqxt9g%2BDF2ASit%2BCebrczMddyOOvtRZooYQSnSqSkMz&X-Amz-Signature=e60af5cd5961f03aaa44dab1454c037c02aac37fdd10c6206f90bded8f0c0964&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SOABUC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCwLoO5r9yaGONnxEIfE1qQnWXvHW06ZKLiAlfJVfmOCgIgGJjFrWo2NCFvuBhSUk1pjrkEZ5wGNX9Xg12dVxV6uTkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF3v53%2B1M%2Bow64SA0SrcA2Uu0%2FeJ9fIW2D6rEvvxxtGiIrNBwl7ckWp%2FGCDDE7xickAMspH%2BXEhJngls81%2FYAeFMUOf1RxboWnYUHydm5BNFLyQXQ3QLjs9lg%2Bb%2F4HoqZcHo4EX2n3zqsnhyzz8MNDx6WvlfQmU%2BZ3ZsV2rKBhDsZsv9RBVmo61Imh8lT1ZZWb37LHjSiWzUy33IUml00OkfzplDt%2Bin2t7waLk2X7rRT7W9wuwpQhkgkhBftSjWIGDnoiRzTCoFSBimk99c4xtcWh%2Fd6HBZj4dP2TtSh%2Fn1H8t0V%2BB2VmSmmS9vpbviSpW4Pf0H5YSBZQkuADMbgdq%2FwqHvUtoTk2TNdGCfpTjRtCriBfsVo5sw5U1lWlIIfYaruGLUcnX1yR3x%2BLbGCE%2FE%2Fva6FZUCqaT6oQY01EO06bdF%2Fe7%2FmJ2jrLNn%2FbRTrNfPCe42PKfiLn%2BsPMrL4jdqBfP%2BKl%2BnXbKTam82j816bEjhH3wzmrsNtuOIN%2BLg6Ct1%2BIhNh3jwaoNAMpx%2BVhwwa5C%2FkS56Azule0sMgUPTr%2BaRB7pSF7bg8gv5nAcp4Duj8KLZm62aDhV6kAumxVCLpahNKMj0kNLDMIrX9zzvXXo3EsGfO1k9ChUA6i4XWIFmHL5trrkT1%2FQIMI3%2Bxb0GOqUBqdkw8b7U4Vp6CJ9ryedMu0Q354tw7gfjkIrxtisrkRt2D8iWLECPiFagcuEsQVqpJC%2FfdygQfLqsRC9bwAsGUVlXmG0M5pZWBXcjH44rCBMMqnsG8PlV9CMj695JHtU1swUN0zTjl723IvuhbCQCdw0S%2BgHxuZTSCKmiSS%2B%2BX1Ndqx4Ynrqxt9g%2BDF2ASit%2BCebrczMddyOOvtRZooYQSnSqSkMz&X-Amz-Signature=a43a36f6d0f6bb81e84a5f39951e62c68a00c88cd780b918a7b6e53af78c9413&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SOABUC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCwLoO5r9yaGONnxEIfE1qQnWXvHW06ZKLiAlfJVfmOCgIgGJjFrWo2NCFvuBhSUk1pjrkEZ5wGNX9Xg12dVxV6uTkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF3v53%2B1M%2Bow64SA0SrcA2Uu0%2FeJ9fIW2D6rEvvxxtGiIrNBwl7ckWp%2FGCDDE7xickAMspH%2BXEhJngls81%2FYAeFMUOf1RxboWnYUHydm5BNFLyQXQ3QLjs9lg%2Bb%2F4HoqZcHo4EX2n3zqsnhyzz8MNDx6WvlfQmU%2BZ3ZsV2rKBhDsZsv9RBVmo61Imh8lT1ZZWb37LHjSiWzUy33IUml00OkfzplDt%2Bin2t7waLk2X7rRT7W9wuwpQhkgkhBftSjWIGDnoiRzTCoFSBimk99c4xtcWh%2Fd6HBZj4dP2TtSh%2Fn1H8t0V%2BB2VmSmmS9vpbviSpW4Pf0H5YSBZQkuADMbgdq%2FwqHvUtoTk2TNdGCfpTjRtCriBfsVo5sw5U1lWlIIfYaruGLUcnX1yR3x%2BLbGCE%2FE%2Fva6FZUCqaT6oQY01EO06bdF%2Fe7%2FmJ2jrLNn%2FbRTrNfPCe42PKfiLn%2BsPMrL4jdqBfP%2BKl%2BnXbKTam82j816bEjhH3wzmrsNtuOIN%2BLg6Ct1%2BIhNh3jwaoNAMpx%2BVhwwa5C%2FkS56Azule0sMgUPTr%2BaRB7pSF7bg8gv5nAcp4Duj8KLZm62aDhV6kAumxVCLpahNKMj0kNLDMIrX9zzvXXo3EsGfO1k9ChUA6i4XWIFmHL5trrkT1%2FQIMI3%2Bxb0GOqUBqdkw8b7U4Vp6CJ9ryedMu0Q354tw7gfjkIrxtisrkRt2D8iWLECPiFagcuEsQVqpJC%2FfdygQfLqsRC9bwAsGUVlXmG0M5pZWBXcjH44rCBMMqnsG8PlV9CMj695JHtU1swUN0zTjl723IvuhbCQCdw0S%2BgHxuZTSCKmiSS%2B%2BX1Ndqx4Ynrqxt9g%2BDF2ASit%2BCebrczMddyOOvtRZooYQSnSqSkMz&X-Amz-Signature=557c718b93d1576e6a912ce6b0395496f6115e1ddb10ddadba83eba09f445958&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SOABUC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCwLoO5r9yaGONnxEIfE1qQnWXvHW06ZKLiAlfJVfmOCgIgGJjFrWo2NCFvuBhSUk1pjrkEZ5wGNX9Xg12dVxV6uTkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF3v53%2B1M%2Bow64SA0SrcA2Uu0%2FeJ9fIW2D6rEvvxxtGiIrNBwl7ckWp%2FGCDDE7xickAMspH%2BXEhJngls81%2FYAeFMUOf1RxboWnYUHydm5BNFLyQXQ3QLjs9lg%2Bb%2F4HoqZcHo4EX2n3zqsnhyzz8MNDx6WvlfQmU%2BZ3ZsV2rKBhDsZsv9RBVmo61Imh8lT1ZZWb37LHjSiWzUy33IUml00OkfzplDt%2Bin2t7waLk2X7rRT7W9wuwpQhkgkhBftSjWIGDnoiRzTCoFSBimk99c4xtcWh%2Fd6HBZj4dP2TtSh%2Fn1H8t0V%2BB2VmSmmS9vpbviSpW4Pf0H5YSBZQkuADMbgdq%2FwqHvUtoTk2TNdGCfpTjRtCriBfsVo5sw5U1lWlIIfYaruGLUcnX1yR3x%2BLbGCE%2FE%2Fva6FZUCqaT6oQY01EO06bdF%2Fe7%2FmJ2jrLNn%2FbRTrNfPCe42PKfiLn%2BsPMrL4jdqBfP%2BKl%2BnXbKTam82j816bEjhH3wzmrsNtuOIN%2BLg6Ct1%2BIhNh3jwaoNAMpx%2BVhwwa5C%2FkS56Azule0sMgUPTr%2BaRB7pSF7bg8gv5nAcp4Duj8KLZm62aDhV6kAumxVCLpahNKMj0kNLDMIrX9zzvXXo3EsGfO1k9ChUA6i4XWIFmHL5trrkT1%2FQIMI3%2Bxb0GOqUBqdkw8b7U4Vp6CJ9ryedMu0Q354tw7gfjkIrxtisrkRt2D8iWLECPiFagcuEsQVqpJC%2FfdygQfLqsRC9bwAsGUVlXmG0M5pZWBXcjH44rCBMMqnsG8PlV9CMj695JHtU1swUN0zTjl723IvuhbCQCdw0S%2BgHxuZTSCKmiSS%2B%2BX1Ndqx4Ynrqxt9g%2BDF2ASit%2BCebrczMddyOOvtRZooYQSnSqSkMz&X-Amz-Signature=f15420919388d365baa80b750cca767642c6026acf2dd1017d25199023915d50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SOABUC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCwLoO5r9yaGONnxEIfE1qQnWXvHW06ZKLiAlfJVfmOCgIgGJjFrWo2NCFvuBhSUk1pjrkEZ5wGNX9Xg12dVxV6uTkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF3v53%2B1M%2Bow64SA0SrcA2Uu0%2FeJ9fIW2D6rEvvxxtGiIrNBwl7ckWp%2FGCDDE7xickAMspH%2BXEhJngls81%2FYAeFMUOf1RxboWnYUHydm5BNFLyQXQ3QLjs9lg%2Bb%2F4HoqZcHo4EX2n3zqsnhyzz8MNDx6WvlfQmU%2BZ3ZsV2rKBhDsZsv9RBVmo61Imh8lT1ZZWb37LHjSiWzUy33IUml00OkfzplDt%2Bin2t7waLk2X7rRT7W9wuwpQhkgkhBftSjWIGDnoiRzTCoFSBimk99c4xtcWh%2Fd6HBZj4dP2TtSh%2Fn1H8t0V%2BB2VmSmmS9vpbviSpW4Pf0H5YSBZQkuADMbgdq%2FwqHvUtoTk2TNdGCfpTjRtCriBfsVo5sw5U1lWlIIfYaruGLUcnX1yR3x%2BLbGCE%2FE%2Fva6FZUCqaT6oQY01EO06bdF%2Fe7%2FmJ2jrLNn%2FbRTrNfPCe42PKfiLn%2BsPMrL4jdqBfP%2BKl%2BnXbKTam82j816bEjhH3wzmrsNtuOIN%2BLg6Ct1%2BIhNh3jwaoNAMpx%2BVhwwa5C%2FkS56Azule0sMgUPTr%2BaRB7pSF7bg8gv5nAcp4Duj8KLZm62aDhV6kAumxVCLpahNKMj0kNLDMIrX9zzvXXo3EsGfO1k9ChUA6i4XWIFmHL5trrkT1%2FQIMI3%2Bxb0GOqUBqdkw8b7U4Vp6CJ9ryedMu0Q354tw7gfjkIrxtisrkRt2D8iWLECPiFagcuEsQVqpJC%2FfdygQfLqsRC9bwAsGUVlXmG0M5pZWBXcjH44rCBMMqnsG8PlV9CMj695JHtU1swUN0zTjl723IvuhbCQCdw0S%2BgHxuZTSCKmiSS%2B%2BX1Ndqx4Ynrqxt9g%2BDF2ASit%2BCebrczMddyOOvtRZooYQSnSqSkMz&X-Amz-Signature=a2f20d67fc51799d9ea42fc3884f781a11677f1f1f116f7db59108fb71b1043e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
