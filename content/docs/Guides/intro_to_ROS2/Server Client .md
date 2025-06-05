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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XESNZ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLcIJC8ZcW%2BqJIGHydLCjc5VXcWUuf5wxaReze2t5PggIgdQ6Mf7fypYeZg6VXici2zN9XD%2BqavoqOQ1S3cDO5434q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDITBSB7RlN%2F3mDrszCrcAwdlxp2%2FUoU1VyAUs5lYvfaOk6cIIx9tzdw%2BrqFQ1mYlrpOKBciMWFm1IjnJqQvGbHzqHpDWTdQT0JHzZfNGIEG7UYCoMZUFmTC5uty2k%2FpIuLEI98i7m6Xce7Y3%2FiEQUcK5nQk6ba3EyBeAgzvcVK0HVXBVvn9vzHtoqCHZP7YTST0PKoXzOlfxFgGYFBfHUCL8qHskkPj6wYCzXsj%2B1niGxMIjXBgMwB96AMleV5XHZD0Yt0EBDjdc4j0VQl%2FTVWVufJEsu%2BFhoeaS4q5STtrpY5%2Bh8%2FAUugUMIg%2BzwXWoYX2EcmsmZiO%2FWzaU69%2BfEX66fOm51vFl3LNfULVR2wl5OmD3%2BW1I%2BOd5epZsY%2BRxwzaucRRdv6YUy6Eb7EjL9yQUdfcz8BuhiKEC6qHc4aa%2FS3rzKH%2FgKvcwCVbxqxzVL6gZvT7azRG0tx5zZSU%2FBmQpLjc%2BPz9EXnrNSXEviWMOaorBN%2BqU8JTCLt9mx5CswrDGRbHtMB%2FjzS1aKx%2FTN8oEkdGUItnuDLdwE69t8N%2FumtEPZhVgbtjdjUh43KRmIc5X4WJPLZ439rCuod%2FaGIi68Q%2Bp9c7RLFZrid5u49oXTY7dXPUrlp712HgLWS1d7AtkbCRL7CPxK%2B1QMNDEhsIGOqUBhKg%2Bo0KoyAbQP0xmg0XOn2gI3Mu%2F%2BKCi3TNplFTJUXtyPIEMVRqQhUUbtWthhTzmGzPA89vjsMKnTeLhWx0w5jZV29QCd4%2B2tpIGqv%2BtAd4nCd5WGC2w%2BeY%2BAwhYFV%2FO%2FIB4cSWGF3NNyqNtmWsClENtygg%2FuAumNYmiUWYmiJCiZSuCuk8bNK%2BxB8qVrmLPnZ79zw4M%2FdfKF7SM08HE2oVhG6Mz&X-Amz-Signature=0fe8b088df33425b529b1ac90b9fcd11506d80386139635b5dc2791593e25a61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XESNZ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLcIJC8ZcW%2BqJIGHydLCjc5VXcWUuf5wxaReze2t5PggIgdQ6Mf7fypYeZg6VXici2zN9XD%2BqavoqOQ1S3cDO5434q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDITBSB7RlN%2F3mDrszCrcAwdlxp2%2FUoU1VyAUs5lYvfaOk6cIIx9tzdw%2BrqFQ1mYlrpOKBciMWFm1IjnJqQvGbHzqHpDWTdQT0JHzZfNGIEG7UYCoMZUFmTC5uty2k%2FpIuLEI98i7m6Xce7Y3%2FiEQUcK5nQk6ba3EyBeAgzvcVK0HVXBVvn9vzHtoqCHZP7YTST0PKoXzOlfxFgGYFBfHUCL8qHskkPj6wYCzXsj%2B1niGxMIjXBgMwB96AMleV5XHZD0Yt0EBDjdc4j0VQl%2FTVWVufJEsu%2BFhoeaS4q5STtrpY5%2Bh8%2FAUugUMIg%2BzwXWoYX2EcmsmZiO%2FWzaU69%2BfEX66fOm51vFl3LNfULVR2wl5OmD3%2BW1I%2BOd5epZsY%2BRxwzaucRRdv6YUy6Eb7EjL9yQUdfcz8BuhiKEC6qHc4aa%2FS3rzKH%2FgKvcwCVbxqxzVL6gZvT7azRG0tx5zZSU%2FBmQpLjc%2BPz9EXnrNSXEviWMOaorBN%2BqU8JTCLt9mx5CswrDGRbHtMB%2FjzS1aKx%2FTN8oEkdGUItnuDLdwE69t8N%2FumtEPZhVgbtjdjUh43KRmIc5X4WJPLZ439rCuod%2FaGIi68Q%2Bp9c7RLFZrid5u49oXTY7dXPUrlp712HgLWS1d7AtkbCRL7CPxK%2B1QMNDEhsIGOqUBhKg%2Bo0KoyAbQP0xmg0XOn2gI3Mu%2F%2BKCi3TNplFTJUXtyPIEMVRqQhUUbtWthhTzmGzPA89vjsMKnTeLhWx0w5jZV29QCd4%2B2tpIGqv%2BtAd4nCd5WGC2w%2BeY%2BAwhYFV%2FO%2FIB4cSWGF3NNyqNtmWsClENtygg%2FuAumNYmiUWYmiJCiZSuCuk8bNK%2BxB8qVrmLPnZ79zw4M%2FdfKF7SM08HE2oVhG6Mz&X-Amz-Signature=5e908a576444f7f903248044934f61a9ae6b0c36756679b52cfd25c5a6072018&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XESNZ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLcIJC8ZcW%2BqJIGHydLCjc5VXcWUuf5wxaReze2t5PggIgdQ6Mf7fypYeZg6VXici2zN9XD%2BqavoqOQ1S3cDO5434q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDITBSB7RlN%2F3mDrszCrcAwdlxp2%2FUoU1VyAUs5lYvfaOk6cIIx9tzdw%2BrqFQ1mYlrpOKBciMWFm1IjnJqQvGbHzqHpDWTdQT0JHzZfNGIEG7UYCoMZUFmTC5uty2k%2FpIuLEI98i7m6Xce7Y3%2FiEQUcK5nQk6ba3EyBeAgzvcVK0HVXBVvn9vzHtoqCHZP7YTST0PKoXzOlfxFgGYFBfHUCL8qHskkPj6wYCzXsj%2B1niGxMIjXBgMwB96AMleV5XHZD0Yt0EBDjdc4j0VQl%2FTVWVufJEsu%2BFhoeaS4q5STtrpY5%2Bh8%2FAUugUMIg%2BzwXWoYX2EcmsmZiO%2FWzaU69%2BfEX66fOm51vFl3LNfULVR2wl5OmD3%2BW1I%2BOd5epZsY%2BRxwzaucRRdv6YUy6Eb7EjL9yQUdfcz8BuhiKEC6qHc4aa%2FS3rzKH%2FgKvcwCVbxqxzVL6gZvT7azRG0tx5zZSU%2FBmQpLjc%2BPz9EXnrNSXEviWMOaorBN%2BqU8JTCLt9mx5CswrDGRbHtMB%2FjzS1aKx%2FTN8oEkdGUItnuDLdwE69t8N%2FumtEPZhVgbtjdjUh43KRmIc5X4WJPLZ439rCuod%2FaGIi68Q%2Bp9c7RLFZrid5u49oXTY7dXPUrlp712HgLWS1d7AtkbCRL7CPxK%2B1QMNDEhsIGOqUBhKg%2Bo0KoyAbQP0xmg0XOn2gI3Mu%2F%2BKCi3TNplFTJUXtyPIEMVRqQhUUbtWthhTzmGzPA89vjsMKnTeLhWx0w5jZV29QCd4%2B2tpIGqv%2BtAd4nCd5WGC2w%2BeY%2BAwhYFV%2FO%2FIB4cSWGF3NNyqNtmWsClENtygg%2FuAumNYmiUWYmiJCiZSuCuk8bNK%2BxB8qVrmLPnZ79zw4M%2FdfKF7SM08HE2oVhG6Mz&X-Amz-Signature=f0e10465370b5af6ee0e5a197b5a20bd2bd7f2e2c28f05167b9ce406244df09b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XESNZ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLcIJC8ZcW%2BqJIGHydLCjc5VXcWUuf5wxaReze2t5PggIgdQ6Mf7fypYeZg6VXici2zN9XD%2BqavoqOQ1S3cDO5434q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDITBSB7RlN%2F3mDrszCrcAwdlxp2%2FUoU1VyAUs5lYvfaOk6cIIx9tzdw%2BrqFQ1mYlrpOKBciMWFm1IjnJqQvGbHzqHpDWTdQT0JHzZfNGIEG7UYCoMZUFmTC5uty2k%2FpIuLEI98i7m6Xce7Y3%2FiEQUcK5nQk6ba3EyBeAgzvcVK0HVXBVvn9vzHtoqCHZP7YTST0PKoXzOlfxFgGYFBfHUCL8qHskkPj6wYCzXsj%2B1niGxMIjXBgMwB96AMleV5XHZD0Yt0EBDjdc4j0VQl%2FTVWVufJEsu%2BFhoeaS4q5STtrpY5%2Bh8%2FAUugUMIg%2BzwXWoYX2EcmsmZiO%2FWzaU69%2BfEX66fOm51vFl3LNfULVR2wl5OmD3%2BW1I%2BOd5epZsY%2BRxwzaucRRdv6YUy6Eb7EjL9yQUdfcz8BuhiKEC6qHc4aa%2FS3rzKH%2FgKvcwCVbxqxzVL6gZvT7azRG0tx5zZSU%2FBmQpLjc%2BPz9EXnrNSXEviWMOaorBN%2BqU8JTCLt9mx5CswrDGRbHtMB%2FjzS1aKx%2FTN8oEkdGUItnuDLdwE69t8N%2FumtEPZhVgbtjdjUh43KRmIc5X4WJPLZ439rCuod%2FaGIi68Q%2Bp9c7RLFZrid5u49oXTY7dXPUrlp712HgLWS1d7AtkbCRL7CPxK%2B1QMNDEhsIGOqUBhKg%2Bo0KoyAbQP0xmg0XOn2gI3Mu%2F%2BKCi3TNplFTJUXtyPIEMVRqQhUUbtWthhTzmGzPA89vjsMKnTeLhWx0w5jZV29QCd4%2B2tpIGqv%2BtAd4nCd5WGC2w%2BeY%2BAwhYFV%2FO%2FIB4cSWGF3NNyqNtmWsClENtygg%2FuAumNYmiUWYmiJCiZSuCuk8bNK%2BxB8qVrmLPnZ79zw4M%2FdfKF7SM08HE2oVhG6Mz&X-Amz-Signature=ede9c68e836ac6b52db08f49043873977f9ad36d1e95f7b450aff40a314e432f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XESNZ2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLcIJC8ZcW%2BqJIGHydLCjc5VXcWUuf5wxaReze2t5PggIgdQ6Mf7fypYeZg6VXici2zN9XD%2BqavoqOQ1S3cDO5434q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDITBSB7RlN%2F3mDrszCrcAwdlxp2%2FUoU1VyAUs5lYvfaOk6cIIx9tzdw%2BrqFQ1mYlrpOKBciMWFm1IjnJqQvGbHzqHpDWTdQT0JHzZfNGIEG7UYCoMZUFmTC5uty2k%2FpIuLEI98i7m6Xce7Y3%2FiEQUcK5nQk6ba3EyBeAgzvcVK0HVXBVvn9vzHtoqCHZP7YTST0PKoXzOlfxFgGYFBfHUCL8qHskkPj6wYCzXsj%2B1niGxMIjXBgMwB96AMleV5XHZD0Yt0EBDjdc4j0VQl%2FTVWVufJEsu%2BFhoeaS4q5STtrpY5%2Bh8%2FAUugUMIg%2BzwXWoYX2EcmsmZiO%2FWzaU69%2BfEX66fOm51vFl3LNfULVR2wl5OmD3%2BW1I%2BOd5epZsY%2BRxwzaucRRdv6YUy6Eb7EjL9yQUdfcz8BuhiKEC6qHc4aa%2FS3rzKH%2FgKvcwCVbxqxzVL6gZvT7azRG0tx5zZSU%2FBmQpLjc%2BPz9EXnrNSXEviWMOaorBN%2BqU8JTCLt9mx5CswrDGRbHtMB%2FjzS1aKx%2FTN8oEkdGUItnuDLdwE69t8N%2FumtEPZhVgbtjdjUh43KRmIc5X4WJPLZ439rCuod%2FaGIi68Q%2Bp9c7RLFZrid5u49oXTY7dXPUrlp712HgLWS1d7AtkbCRL7CPxK%2B1QMNDEhsIGOqUBhKg%2Bo0KoyAbQP0xmg0XOn2gI3Mu%2F%2BKCi3TNplFTJUXtyPIEMVRqQhUUbtWthhTzmGzPA89vjsMKnTeLhWx0w5jZV29QCd4%2B2tpIGqv%2BtAd4nCd5WGC2w%2BeY%2BAwhYFV%2FO%2FIB4cSWGF3NNyqNtmWsClENtygg%2FuAumNYmiUWYmiJCiZSuCuk8bNK%2BxB8qVrmLPnZ79zw4M%2FdfKF7SM08HE2oVhG6Mz&X-Amz-Signature=948947f52c664ad36f62f3976bc0aea5d73a4ab4ec97f7ea6ecfb1cb5e59be37&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
