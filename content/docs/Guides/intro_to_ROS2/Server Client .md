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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPTCVXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEyWFv1KP%2FqwdHTTAoVTBzD39jmcs4gpRLVIWd0nWkS4AiASrUq3WB1XXQGnjs0rK%2F6Mt%2Baf%2FAu3ITh284gkey1XWyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMdaxjfH70ETQidYXjKtwDa15fRk3QGDoqI7yXw6Qd%2FDosNoQaNGmb4ZUKGblh7uyj%2B9%2FBPnJrBCQ1svXO%2BAaWrpAxXt6jlRP84HJVY0mFw24mCi63Rp18cPcFRQODQ8lpXczNpDwOYX4EKnC9UPUs52ckxNsHyy11NFG9pkOYLNk9YcoyX98FnsxHQ0jQZx8QSgMRagPJlteTA1rJOpMxJXDpI1REGLMASB9HsCtw1jhM65hHLdOotZwbzEIe17q9pmCjHpuxF32tqytnXnsTDd5r40I5d7D0SunSBDJ2J28hnUu9%2BKYsp8m1%2B2l8VuX7mvyjujBrepwf6ZBktDNEsR4vnnODb6CHjPrDxMJMDR3VQ0rcqU2ogIAhi0uVenTpy7i9zQAp4m%2Bv1yzPhBLa1RT%2FWqKg8woRNYuYH2T6u9UH98yDg0G0ywLHaZcf1tU3b0bLdCyG3faOh2cDobfv1XEjjpNp5wAy6KsLJWkY2ka6%2FTn6%2Bn75Xy3Il12pmtHTV4L37N%2FiPMsitmFjxAaSbQ%2FcgG8pGrLxk%2FRHSixid5uRpwgOD3kQUoOy0ZIQaPzcPoRpMAiXwb%2B5%2BsvFVrFM8abbF3uJ02VL9rl%2B2yQyOzvsa6Rst4UKhWCZ0eP9g3GczsLirGEK1H0dqA4w9JCbwwY6pgG661rfF29By5Ssudgt4fSljJJwi3TfInILWNME2tOt7cBB9QACwHlnoO9kmpK6p88dvm5medRbPk9wdQk%2BSXL9%2FHbhIc09d6%2FTdShagKwtPThQsRv%2BbMgQnnYtSjfQGd0uVqj417et%2FcrCAZON%2FEAItbKNEXBY3slpLTHJJXZzMrjKLKFcQs8Xbrbx4AutM9ieEnylt%2BNEHt33xglG%2FvDjwzMK8iK7&X-Amz-Signature=fe54ec0fd8452cd07cf67a358885f4362cc4009827eab4be0b312686dd4e9c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPTCVXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEyWFv1KP%2FqwdHTTAoVTBzD39jmcs4gpRLVIWd0nWkS4AiASrUq3WB1XXQGnjs0rK%2F6Mt%2Baf%2FAu3ITh284gkey1XWyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMdaxjfH70ETQidYXjKtwDa15fRk3QGDoqI7yXw6Qd%2FDosNoQaNGmb4ZUKGblh7uyj%2B9%2FBPnJrBCQ1svXO%2BAaWrpAxXt6jlRP84HJVY0mFw24mCi63Rp18cPcFRQODQ8lpXczNpDwOYX4EKnC9UPUs52ckxNsHyy11NFG9pkOYLNk9YcoyX98FnsxHQ0jQZx8QSgMRagPJlteTA1rJOpMxJXDpI1REGLMASB9HsCtw1jhM65hHLdOotZwbzEIe17q9pmCjHpuxF32tqytnXnsTDd5r40I5d7D0SunSBDJ2J28hnUu9%2BKYsp8m1%2B2l8VuX7mvyjujBrepwf6ZBktDNEsR4vnnODb6CHjPrDxMJMDR3VQ0rcqU2ogIAhi0uVenTpy7i9zQAp4m%2Bv1yzPhBLa1RT%2FWqKg8woRNYuYH2T6u9UH98yDg0G0ywLHaZcf1tU3b0bLdCyG3faOh2cDobfv1XEjjpNp5wAy6KsLJWkY2ka6%2FTn6%2Bn75Xy3Il12pmtHTV4L37N%2FiPMsitmFjxAaSbQ%2FcgG8pGrLxk%2FRHSixid5uRpwgOD3kQUoOy0ZIQaPzcPoRpMAiXwb%2B5%2BsvFVrFM8abbF3uJ02VL9rl%2B2yQyOzvsa6Rst4UKhWCZ0eP9g3GczsLirGEK1H0dqA4w9JCbwwY6pgG661rfF29By5Ssudgt4fSljJJwi3TfInILWNME2tOt7cBB9QACwHlnoO9kmpK6p88dvm5medRbPk9wdQk%2BSXL9%2FHbhIc09d6%2FTdShagKwtPThQsRv%2BbMgQnnYtSjfQGd0uVqj417et%2FcrCAZON%2FEAItbKNEXBY3slpLTHJJXZzMrjKLKFcQs8Xbrbx4AutM9ieEnylt%2BNEHt33xglG%2FvDjwzMK8iK7&X-Amz-Signature=5c13c5151605958bd90c1c79345fb2ad149c7c16625d9f909e9bae4ce2061732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPTCVXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEyWFv1KP%2FqwdHTTAoVTBzD39jmcs4gpRLVIWd0nWkS4AiASrUq3WB1XXQGnjs0rK%2F6Mt%2Baf%2FAu3ITh284gkey1XWyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMdaxjfH70ETQidYXjKtwDa15fRk3QGDoqI7yXw6Qd%2FDosNoQaNGmb4ZUKGblh7uyj%2B9%2FBPnJrBCQ1svXO%2BAaWrpAxXt6jlRP84HJVY0mFw24mCi63Rp18cPcFRQODQ8lpXczNpDwOYX4EKnC9UPUs52ckxNsHyy11NFG9pkOYLNk9YcoyX98FnsxHQ0jQZx8QSgMRagPJlteTA1rJOpMxJXDpI1REGLMASB9HsCtw1jhM65hHLdOotZwbzEIe17q9pmCjHpuxF32tqytnXnsTDd5r40I5d7D0SunSBDJ2J28hnUu9%2BKYsp8m1%2B2l8VuX7mvyjujBrepwf6ZBktDNEsR4vnnODb6CHjPrDxMJMDR3VQ0rcqU2ogIAhi0uVenTpy7i9zQAp4m%2Bv1yzPhBLa1RT%2FWqKg8woRNYuYH2T6u9UH98yDg0G0ywLHaZcf1tU3b0bLdCyG3faOh2cDobfv1XEjjpNp5wAy6KsLJWkY2ka6%2FTn6%2Bn75Xy3Il12pmtHTV4L37N%2FiPMsitmFjxAaSbQ%2FcgG8pGrLxk%2FRHSixid5uRpwgOD3kQUoOy0ZIQaPzcPoRpMAiXwb%2B5%2BsvFVrFM8abbF3uJ02VL9rl%2B2yQyOzvsa6Rst4UKhWCZ0eP9g3GczsLirGEK1H0dqA4w9JCbwwY6pgG661rfF29By5Ssudgt4fSljJJwi3TfInILWNME2tOt7cBB9QACwHlnoO9kmpK6p88dvm5medRbPk9wdQk%2BSXL9%2FHbhIc09d6%2FTdShagKwtPThQsRv%2BbMgQnnYtSjfQGd0uVqj417et%2FcrCAZON%2FEAItbKNEXBY3slpLTHJJXZzMrjKLKFcQs8Xbrbx4AutM9ieEnylt%2BNEHt33xglG%2FvDjwzMK8iK7&X-Amz-Signature=115ad835afe3cfac0954f402653488ed7b1c2d64604ca38310bfc01a013acebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPTCVXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEyWFv1KP%2FqwdHTTAoVTBzD39jmcs4gpRLVIWd0nWkS4AiASrUq3WB1XXQGnjs0rK%2F6Mt%2Baf%2FAu3ITh284gkey1XWyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMdaxjfH70ETQidYXjKtwDa15fRk3QGDoqI7yXw6Qd%2FDosNoQaNGmb4ZUKGblh7uyj%2B9%2FBPnJrBCQ1svXO%2BAaWrpAxXt6jlRP84HJVY0mFw24mCi63Rp18cPcFRQODQ8lpXczNpDwOYX4EKnC9UPUs52ckxNsHyy11NFG9pkOYLNk9YcoyX98FnsxHQ0jQZx8QSgMRagPJlteTA1rJOpMxJXDpI1REGLMASB9HsCtw1jhM65hHLdOotZwbzEIe17q9pmCjHpuxF32tqytnXnsTDd5r40I5d7D0SunSBDJ2J28hnUu9%2BKYsp8m1%2B2l8VuX7mvyjujBrepwf6ZBktDNEsR4vnnODb6CHjPrDxMJMDR3VQ0rcqU2ogIAhi0uVenTpy7i9zQAp4m%2Bv1yzPhBLa1RT%2FWqKg8woRNYuYH2T6u9UH98yDg0G0ywLHaZcf1tU3b0bLdCyG3faOh2cDobfv1XEjjpNp5wAy6KsLJWkY2ka6%2FTn6%2Bn75Xy3Il12pmtHTV4L37N%2FiPMsitmFjxAaSbQ%2FcgG8pGrLxk%2FRHSixid5uRpwgOD3kQUoOy0ZIQaPzcPoRpMAiXwb%2B5%2BsvFVrFM8abbF3uJ02VL9rl%2B2yQyOzvsa6Rst4UKhWCZ0eP9g3GczsLirGEK1H0dqA4w9JCbwwY6pgG661rfF29By5Ssudgt4fSljJJwi3TfInILWNME2tOt7cBB9QACwHlnoO9kmpK6p88dvm5medRbPk9wdQk%2BSXL9%2FHbhIc09d6%2FTdShagKwtPThQsRv%2BbMgQnnYtSjfQGd0uVqj417et%2FcrCAZON%2FEAItbKNEXBY3slpLTHJJXZzMrjKLKFcQs8Xbrbx4AutM9ieEnylt%2BNEHt33xglG%2FvDjwzMK8iK7&X-Amz-Signature=e7c9812c38d9ab7da18fb9b4e2278ff7feedc7e287c058e661c4135355ec8f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPTCVXW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEyWFv1KP%2FqwdHTTAoVTBzD39jmcs4gpRLVIWd0nWkS4AiASrUq3WB1XXQGnjs0rK%2F6Mt%2Baf%2FAu3ITh284gkey1XWyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMdaxjfH70ETQidYXjKtwDa15fRk3QGDoqI7yXw6Qd%2FDosNoQaNGmb4ZUKGblh7uyj%2B9%2FBPnJrBCQ1svXO%2BAaWrpAxXt6jlRP84HJVY0mFw24mCi63Rp18cPcFRQODQ8lpXczNpDwOYX4EKnC9UPUs52ckxNsHyy11NFG9pkOYLNk9YcoyX98FnsxHQ0jQZx8QSgMRagPJlteTA1rJOpMxJXDpI1REGLMASB9HsCtw1jhM65hHLdOotZwbzEIe17q9pmCjHpuxF32tqytnXnsTDd5r40I5d7D0SunSBDJ2J28hnUu9%2BKYsp8m1%2B2l8VuX7mvyjujBrepwf6ZBktDNEsR4vnnODb6CHjPrDxMJMDR3VQ0rcqU2ogIAhi0uVenTpy7i9zQAp4m%2Bv1yzPhBLa1RT%2FWqKg8woRNYuYH2T6u9UH98yDg0G0ywLHaZcf1tU3b0bLdCyG3faOh2cDobfv1XEjjpNp5wAy6KsLJWkY2ka6%2FTn6%2Bn75Xy3Il12pmtHTV4L37N%2FiPMsitmFjxAaSbQ%2FcgG8pGrLxk%2FRHSixid5uRpwgOD3kQUoOy0ZIQaPzcPoRpMAiXwb%2B5%2BsvFVrFM8abbF3uJ02VL9rl%2B2yQyOzvsa6Rst4UKhWCZ0eP9g3GczsLirGEK1H0dqA4w9JCbwwY6pgG661rfF29By5Ssudgt4fSljJJwi3TfInILWNME2tOt7cBB9QACwHlnoO9kmpK6p88dvm5medRbPk9wdQk%2BSXL9%2FHbhIc09d6%2FTdShagKwtPThQsRv%2BbMgQnnYtSjfQGd0uVqj417et%2FcrCAZON%2FEAItbKNEXBY3slpLTHJJXZzMrjKLKFcQs8Xbrbx4AutM9ieEnylt%2BNEHt33xglG%2FvDjwzMK8iK7&X-Amz-Signature=a32b55b938f0400134a4c9c9aff293df114a02980db09948e6c76f2ff4be039c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
