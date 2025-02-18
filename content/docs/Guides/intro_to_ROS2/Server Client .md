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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLH3GOL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDr%2BvIWWF5l5S1dxB97JxxZhS4hJmO95%2Fi17jdlyajWSgIgPf97dmTT2Y5QJzc%2FZyDEdemFVFdD%2B%2FRvWtQiBeXqd8UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjXpZZFPhbPKYS9UCrcA4tXkuSXNtUUiv3lMC%2FWTxnhw%2BJedim%2BuHnlfHUZKwHTXeD121p1z4Hw4IExN97rsAy2TYPhmL7fGidwk%2F2Wslwu%2BEr9BcqAQYP4fxw%2BpiZhsyDfRqfy%2BZPOiVOyYP1x%2FbJYoi4B2EgF%2B7kl%2BWL3wLytFHN5zpiC%2FHOprkDjuZgLrSPPrEPCejLguX8KuhE8LfC%2Ff3kXrsZtmR826Wr1O7OIY1sPEd33%2BttgmT%2FlIUe3Jp4DhySVXwH5Rz83nFyCgjb3jO1w5goUdU8RFPDm6WUdd64kAP4DFtOBGJWrp4dMIyWiMcrL9aLzoVRSjpwpdUQJgl9Bex02SkgRqm6t33If7vDMNiTGMm4nlIJLScQ9g6FPQqoIwg2DtpD1Hov2ypanPbTWLsrIqmvby4w6mHuNX55rKR1iYj1QaFnHH5eQG59IRStxfaR8YEJ9Ps0Uf9n0%2BtVKolcbQZFZoJsjvjLA%2BFnnqvOkFc6BqBQ3iPnVl2Wl7xE%2FBlGIxuvKkx4WVMUmKZ91Xoffa7ZbWfwQyroBdXe2eTaxVQSgFgObx8n1FQgxkrEZgkiGSwmGST8FqX5ZGWS0zcANV6NNsH7y%2BXcqghu5Dr93NYDoqOI%2B9YoQYDIBfiDLjf69kOePMKCmz70GOqUBxTc6jjYocFWU51iosBgMAhhgkLJPTgexdwTMlFmZnKXAQJ8d5sRZgwaDsE7VLdBKMT3H66Xb08ckupVoPLkXRSiezQOl%2BK1K4SHtcMzTWOn2jtaf3%2BEtul6BtB5vBO0YNd0mR182vzdKj%2FbLNAKg0sJYDdHa66NS%2B4NOpx67QiGSL8VwF4kM46SX1fFsKa4aPMzIdeHskltFERF2uAPr5N6Sc4%2Fi&X-Amz-Signature=00dc880e50195af5147c7cc388fbb05c9d999705d61529b19c719f353a678abd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLH3GOL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDr%2BvIWWF5l5S1dxB97JxxZhS4hJmO95%2Fi17jdlyajWSgIgPf97dmTT2Y5QJzc%2FZyDEdemFVFdD%2B%2FRvWtQiBeXqd8UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjXpZZFPhbPKYS9UCrcA4tXkuSXNtUUiv3lMC%2FWTxnhw%2BJedim%2BuHnlfHUZKwHTXeD121p1z4Hw4IExN97rsAy2TYPhmL7fGidwk%2F2Wslwu%2BEr9BcqAQYP4fxw%2BpiZhsyDfRqfy%2BZPOiVOyYP1x%2FbJYoi4B2EgF%2B7kl%2BWL3wLytFHN5zpiC%2FHOprkDjuZgLrSPPrEPCejLguX8KuhE8LfC%2Ff3kXrsZtmR826Wr1O7OIY1sPEd33%2BttgmT%2FlIUe3Jp4DhySVXwH5Rz83nFyCgjb3jO1w5goUdU8RFPDm6WUdd64kAP4DFtOBGJWrp4dMIyWiMcrL9aLzoVRSjpwpdUQJgl9Bex02SkgRqm6t33If7vDMNiTGMm4nlIJLScQ9g6FPQqoIwg2DtpD1Hov2ypanPbTWLsrIqmvby4w6mHuNX55rKR1iYj1QaFnHH5eQG59IRStxfaR8YEJ9Ps0Uf9n0%2BtVKolcbQZFZoJsjvjLA%2BFnnqvOkFc6BqBQ3iPnVl2Wl7xE%2FBlGIxuvKkx4WVMUmKZ91Xoffa7ZbWfwQyroBdXe2eTaxVQSgFgObx8n1FQgxkrEZgkiGSwmGST8FqX5ZGWS0zcANV6NNsH7y%2BXcqghu5Dr93NYDoqOI%2B9YoQYDIBfiDLjf69kOePMKCmz70GOqUBxTc6jjYocFWU51iosBgMAhhgkLJPTgexdwTMlFmZnKXAQJ8d5sRZgwaDsE7VLdBKMT3H66Xb08ckupVoPLkXRSiezQOl%2BK1K4SHtcMzTWOn2jtaf3%2BEtul6BtB5vBO0YNd0mR182vzdKj%2FbLNAKg0sJYDdHa66NS%2B4NOpx67QiGSL8VwF4kM46SX1fFsKa4aPMzIdeHskltFERF2uAPr5N6Sc4%2Fi&X-Amz-Signature=7e0e8125b908b5134f3c6c8c274401b8f317add9a548d201f7bfd39e11b2cf6d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLH3GOL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDr%2BvIWWF5l5S1dxB97JxxZhS4hJmO95%2Fi17jdlyajWSgIgPf97dmTT2Y5QJzc%2FZyDEdemFVFdD%2B%2FRvWtQiBeXqd8UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjXpZZFPhbPKYS9UCrcA4tXkuSXNtUUiv3lMC%2FWTxnhw%2BJedim%2BuHnlfHUZKwHTXeD121p1z4Hw4IExN97rsAy2TYPhmL7fGidwk%2F2Wslwu%2BEr9BcqAQYP4fxw%2BpiZhsyDfRqfy%2BZPOiVOyYP1x%2FbJYoi4B2EgF%2B7kl%2BWL3wLytFHN5zpiC%2FHOprkDjuZgLrSPPrEPCejLguX8KuhE8LfC%2Ff3kXrsZtmR826Wr1O7OIY1sPEd33%2BttgmT%2FlIUe3Jp4DhySVXwH5Rz83nFyCgjb3jO1w5goUdU8RFPDm6WUdd64kAP4DFtOBGJWrp4dMIyWiMcrL9aLzoVRSjpwpdUQJgl9Bex02SkgRqm6t33If7vDMNiTGMm4nlIJLScQ9g6FPQqoIwg2DtpD1Hov2ypanPbTWLsrIqmvby4w6mHuNX55rKR1iYj1QaFnHH5eQG59IRStxfaR8YEJ9Ps0Uf9n0%2BtVKolcbQZFZoJsjvjLA%2BFnnqvOkFc6BqBQ3iPnVl2Wl7xE%2FBlGIxuvKkx4WVMUmKZ91Xoffa7ZbWfwQyroBdXe2eTaxVQSgFgObx8n1FQgxkrEZgkiGSwmGST8FqX5ZGWS0zcANV6NNsH7y%2BXcqghu5Dr93NYDoqOI%2B9YoQYDIBfiDLjf69kOePMKCmz70GOqUBxTc6jjYocFWU51iosBgMAhhgkLJPTgexdwTMlFmZnKXAQJ8d5sRZgwaDsE7VLdBKMT3H66Xb08ckupVoPLkXRSiezQOl%2BK1K4SHtcMzTWOn2jtaf3%2BEtul6BtB5vBO0YNd0mR182vzdKj%2FbLNAKg0sJYDdHa66NS%2B4NOpx67QiGSL8VwF4kM46SX1fFsKa4aPMzIdeHskltFERF2uAPr5N6Sc4%2Fi&X-Amz-Signature=babeb2821b3e83324f94d6387a3313bba63cefdf708c524534324c937c3f4160&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLH3GOL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDr%2BvIWWF5l5S1dxB97JxxZhS4hJmO95%2Fi17jdlyajWSgIgPf97dmTT2Y5QJzc%2FZyDEdemFVFdD%2B%2FRvWtQiBeXqd8UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjXpZZFPhbPKYS9UCrcA4tXkuSXNtUUiv3lMC%2FWTxnhw%2BJedim%2BuHnlfHUZKwHTXeD121p1z4Hw4IExN97rsAy2TYPhmL7fGidwk%2F2Wslwu%2BEr9BcqAQYP4fxw%2BpiZhsyDfRqfy%2BZPOiVOyYP1x%2FbJYoi4B2EgF%2B7kl%2BWL3wLytFHN5zpiC%2FHOprkDjuZgLrSPPrEPCejLguX8KuhE8LfC%2Ff3kXrsZtmR826Wr1O7OIY1sPEd33%2BttgmT%2FlIUe3Jp4DhySVXwH5Rz83nFyCgjb3jO1w5goUdU8RFPDm6WUdd64kAP4DFtOBGJWrp4dMIyWiMcrL9aLzoVRSjpwpdUQJgl9Bex02SkgRqm6t33If7vDMNiTGMm4nlIJLScQ9g6FPQqoIwg2DtpD1Hov2ypanPbTWLsrIqmvby4w6mHuNX55rKR1iYj1QaFnHH5eQG59IRStxfaR8YEJ9Ps0Uf9n0%2BtVKolcbQZFZoJsjvjLA%2BFnnqvOkFc6BqBQ3iPnVl2Wl7xE%2FBlGIxuvKkx4WVMUmKZ91Xoffa7ZbWfwQyroBdXe2eTaxVQSgFgObx8n1FQgxkrEZgkiGSwmGST8FqX5ZGWS0zcANV6NNsH7y%2BXcqghu5Dr93NYDoqOI%2B9YoQYDIBfiDLjf69kOePMKCmz70GOqUBxTc6jjYocFWU51iosBgMAhhgkLJPTgexdwTMlFmZnKXAQJ8d5sRZgwaDsE7VLdBKMT3H66Xb08ckupVoPLkXRSiezQOl%2BK1K4SHtcMzTWOn2jtaf3%2BEtul6BtB5vBO0YNd0mR182vzdKj%2FbLNAKg0sJYDdHa66NS%2B4NOpx67QiGSL8VwF4kM46SX1fFsKa4aPMzIdeHskltFERF2uAPr5N6Sc4%2Fi&X-Amz-Signature=af3770d6e114f7b8b5f3816e6f82941896ac9331a70ac4b007aca0a94485aa26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLH3GOL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDr%2BvIWWF5l5S1dxB97JxxZhS4hJmO95%2Fi17jdlyajWSgIgPf97dmTT2Y5QJzc%2FZyDEdemFVFdD%2B%2FRvWtQiBeXqd8UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjXpZZFPhbPKYS9UCrcA4tXkuSXNtUUiv3lMC%2FWTxnhw%2BJedim%2BuHnlfHUZKwHTXeD121p1z4Hw4IExN97rsAy2TYPhmL7fGidwk%2F2Wslwu%2BEr9BcqAQYP4fxw%2BpiZhsyDfRqfy%2BZPOiVOyYP1x%2FbJYoi4B2EgF%2B7kl%2BWL3wLytFHN5zpiC%2FHOprkDjuZgLrSPPrEPCejLguX8KuhE8LfC%2Ff3kXrsZtmR826Wr1O7OIY1sPEd33%2BttgmT%2FlIUe3Jp4DhySVXwH5Rz83nFyCgjb3jO1w5goUdU8RFPDm6WUdd64kAP4DFtOBGJWrp4dMIyWiMcrL9aLzoVRSjpwpdUQJgl9Bex02SkgRqm6t33If7vDMNiTGMm4nlIJLScQ9g6FPQqoIwg2DtpD1Hov2ypanPbTWLsrIqmvby4w6mHuNX55rKR1iYj1QaFnHH5eQG59IRStxfaR8YEJ9Ps0Uf9n0%2BtVKolcbQZFZoJsjvjLA%2BFnnqvOkFc6BqBQ3iPnVl2Wl7xE%2FBlGIxuvKkx4WVMUmKZ91Xoffa7ZbWfwQyroBdXe2eTaxVQSgFgObx8n1FQgxkrEZgkiGSwmGST8FqX5ZGWS0zcANV6NNsH7y%2BXcqghu5Dr93NYDoqOI%2B9YoQYDIBfiDLjf69kOePMKCmz70GOqUBxTc6jjYocFWU51iosBgMAhhgkLJPTgexdwTMlFmZnKXAQJ8d5sRZgwaDsE7VLdBKMT3H66Xb08ckupVoPLkXRSiezQOl%2BK1K4SHtcMzTWOn2jtaf3%2BEtul6BtB5vBO0YNd0mR182vzdKj%2FbLNAKg0sJYDdHa66NS%2B4NOpx67QiGSL8VwF4kM46SX1fFsKa4aPMzIdeHskltFERF2uAPr5N6Sc4%2Fi&X-Amz-Signature=97e999692a4e78862dae3301e397c86b32b7b66fd006227619307dcc04cad516&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
