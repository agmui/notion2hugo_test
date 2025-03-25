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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMR4SXI6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOpESbgfirhdHHJtLOGtAZJq9lFe1BF2I7sWiMSM3duAiBgfLICq2pVQCznD6p9mnQX%2FjfFlKE9WOq9sps5605tbir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM51Pq5s5taB%2FjTH%2F6KtwDExb698Oh1bOnIpTg85CRrWPUI8L%2B1aPCE7%2BvPmx7SHqwDBovJ%2FACtgTxrbMBjVdxpVktPvXF1Vmc65XFWPUAUo6%2BNckwCSs%2FLMnkMFyHYQGIErso1fmwBdNIXgfVKr%2BVqvq5gwyCcCmIzVpxGZwJVsHv9RqpVvB0fCaOZrF3fKpmerB16XSyPoZ19g4m8GmztS%2B8sphxlFIXuW5rDw85GWDx%2BAaAmLib%2FXBYchccAxmH1k9QNz7plUuEdE3lUUHsEGo9DO5fi6Jx6bF6FyyumSmb0%2BZfgxxXyQQjHQ4r30NCWMsj0DCJOun%2BmrV9rwG9wlCWmrbmPifCrC%2FGiIn04WIkWlU069%2B2xDrDMIpl42BcAOHqURhQmw9m0LLZ%2ByQFP9BvP3laXJlJ%2Bh6eiTjLZ56ulw3JlUyjoikmHTpEl5HiDznceHlc4tzGGMspDvvLuBLGHWQDUPAwAo8hS61GIJlP8KxOg7VEXLDFQFNiIh%2FsHLorUJcbbn%2B2pBjKZuow5WfcgFCilNC95mum6X%2FlXACOr9FT62gm7Beq0ElM0SN6gjlmSmidTfh58xFs%2BNqCY0yjzb5PzgqGud2mDN%2FTLzYFZst4I81r3sAqA%2FXBXd1o6bbQyiAj9P77koMw6peMvwY6pgGO1eCBMYGenX4fuF1JWMzHOj8vku8lkQalaJknbBvsX8DnoxF%2F8%2FTszI0jafWExT%2Bm4ZWCDN9jOyeFBzukHhxEa2PUbTIwCBpEm1jQVu7DpSNeljIY4dhUNkYw5RBBvC%2F11yZjwEN2upHxvJbbYKUe9y7DlGi27nsZ47t5Qrc6PsizxHF7Lt0HUB9nzIQHGnIHO3H8apa4O%2FZjUWlxMjYFtZ3t3P7Q&X-Amz-Signature=186a0c9e44ca6cc04fc003f81ac36660bf6592dbd9f2bcdf354be147463fab70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMR4SXI6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOpESbgfirhdHHJtLOGtAZJq9lFe1BF2I7sWiMSM3duAiBgfLICq2pVQCznD6p9mnQX%2FjfFlKE9WOq9sps5605tbir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM51Pq5s5taB%2FjTH%2F6KtwDExb698Oh1bOnIpTg85CRrWPUI8L%2B1aPCE7%2BvPmx7SHqwDBovJ%2FACtgTxrbMBjVdxpVktPvXF1Vmc65XFWPUAUo6%2BNckwCSs%2FLMnkMFyHYQGIErso1fmwBdNIXgfVKr%2BVqvq5gwyCcCmIzVpxGZwJVsHv9RqpVvB0fCaOZrF3fKpmerB16XSyPoZ19g4m8GmztS%2B8sphxlFIXuW5rDw85GWDx%2BAaAmLib%2FXBYchccAxmH1k9QNz7plUuEdE3lUUHsEGo9DO5fi6Jx6bF6FyyumSmb0%2BZfgxxXyQQjHQ4r30NCWMsj0DCJOun%2BmrV9rwG9wlCWmrbmPifCrC%2FGiIn04WIkWlU069%2B2xDrDMIpl42BcAOHqURhQmw9m0LLZ%2ByQFP9BvP3laXJlJ%2Bh6eiTjLZ56ulw3JlUyjoikmHTpEl5HiDznceHlc4tzGGMspDvvLuBLGHWQDUPAwAo8hS61GIJlP8KxOg7VEXLDFQFNiIh%2FsHLorUJcbbn%2B2pBjKZuow5WfcgFCilNC95mum6X%2FlXACOr9FT62gm7Beq0ElM0SN6gjlmSmidTfh58xFs%2BNqCY0yjzb5PzgqGud2mDN%2FTLzYFZst4I81r3sAqA%2FXBXd1o6bbQyiAj9P77koMw6peMvwY6pgGO1eCBMYGenX4fuF1JWMzHOj8vku8lkQalaJknbBvsX8DnoxF%2F8%2FTszI0jafWExT%2Bm4ZWCDN9jOyeFBzukHhxEa2PUbTIwCBpEm1jQVu7DpSNeljIY4dhUNkYw5RBBvC%2F11yZjwEN2upHxvJbbYKUe9y7DlGi27nsZ47t5Qrc6PsizxHF7Lt0HUB9nzIQHGnIHO3H8apa4O%2FZjUWlxMjYFtZ3t3P7Q&X-Amz-Signature=fdc9ef87ffc7d652fa3a8297089b9d2b30d998ca4e7e32323f260dff5da69ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMR4SXI6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOpESbgfirhdHHJtLOGtAZJq9lFe1BF2I7sWiMSM3duAiBgfLICq2pVQCznD6p9mnQX%2FjfFlKE9WOq9sps5605tbir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM51Pq5s5taB%2FjTH%2F6KtwDExb698Oh1bOnIpTg85CRrWPUI8L%2B1aPCE7%2BvPmx7SHqwDBovJ%2FACtgTxrbMBjVdxpVktPvXF1Vmc65XFWPUAUo6%2BNckwCSs%2FLMnkMFyHYQGIErso1fmwBdNIXgfVKr%2BVqvq5gwyCcCmIzVpxGZwJVsHv9RqpVvB0fCaOZrF3fKpmerB16XSyPoZ19g4m8GmztS%2B8sphxlFIXuW5rDw85GWDx%2BAaAmLib%2FXBYchccAxmH1k9QNz7plUuEdE3lUUHsEGo9DO5fi6Jx6bF6FyyumSmb0%2BZfgxxXyQQjHQ4r30NCWMsj0DCJOun%2BmrV9rwG9wlCWmrbmPifCrC%2FGiIn04WIkWlU069%2B2xDrDMIpl42BcAOHqURhQmw9m0LLZ%2ByQFP9BvP3laXJlJ%2Bh6eiTjLZ56ulw3JlUyjoikmHTpEl5HiDznceHlc4tzGGMspDvvLuBLGHWQDUPAwAo8hS61GIJlP8KxOg7VEXLDFQFNiIh%2FsHLorUJcbbn%2B2pBjKZuow5WfcgFCilNC95mum6X%2FlXACOr9FT62gm7Beq0ElM0SN6gjlmSmidTfh58xFs%2BNqCY0yjzb5PzgqGud2mDN%2FTLzYFZst4I81r3sAqA%2FXBXd1o6bbQyiAj9P77koMw6peMvwY6pgGO1eCBMYGenX4fuF1JWMzHOj8vku8lkQalaJknbBvsX8DnoxF%2F8%2FTszI0jafWExT%2Bm4ZWCDN9jOyeFBzukHhxEa2PUbTIwCBpEm1jQVu7DpSNeljIY4dhUNkYw5RBBvC%2F11yZjwEN2upHxvJbbYKUe9y7DlGi27nsZ47t5Qrc6PsizxHF7Lt0HUB9nzIQHGnIHO3H8apa4O%2FZjUWlxMjYFtZ3t3P7Q&X-Amz-Signature=e8afb1c2169fc9adaea669eb025904d77b262313376f55c451944a22127b4f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMR4SXI6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOpESbgfirhdHHJtLOGtAZJq9lFe1BF2I7sWiMSM3duAiBgfLICq2pVQCznD6p9mnQX%2FjfFlKE9WOq9sps5605tbir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM51Pq5s5taB%2FjTH%2F6KtwDExb698Oh1bOnIpTg85CRrWPUI8L%2B1aPCE7%2BvPmx7SHqwDBovJ%2FACtgTxrbMBjVdxpVktPvXF1Vmc65XFWPUAUo6%2BNckwCSs%2FLMnkMFyHYQGIErso1fmwBdNIXgfVKr%2BVqvq5gwyCcCmIzVpxGZwJVsHv9RqpVvB0fCaOZrF3fKpmerB16XSyPoZ19g4m8GmztS%2B8sphxlFIXuW5rDw85GWDx%2BAaAmLib%2FXBYchccAxmH1k9QNz7plUuEdE3lUUHsEGo9DO5fi6Jx6bF6FyyumSmb0%2BZfgxxXyQQjHQ4r30NCWMsj0DCJOun%2BmrV9rwG9wlCWmrbmPifCrC%2FGiIn04WIkWlU069%2B2xDrDMIpl42BcAOHqURhQmw9m0LLZ%2ByQFP9BvP3laXJlJ%2Bh6eiTjLZ56ulw3JlUyjoikmHTpEl5HiDznceHlc4tzGGMspDvvLuBLGHWQDUPAwAo8hS61GIJlP8KxOg7VEXLDFQFNiIh%2FsHLorUJcbbn%2B2pBjKZuow5WfcgFCilNC95mum6X%2FlXACOr9FT62gm7Beq0ElM0SN6gjlmSmidTfh58xFs%2BNqCY0yjzb5PzgqGud2mDN%2FTLzYFZst4I81r3sAqA%2FXBXd1o6bbQyiAj9P77koMw6peMvwY6pgGO1eCBMYGenX4fuF1JWMzHOj8vku8lkQalaJknbBvsX8DnoxF%2F8%2FTszI0jafWExT%2Bm4ZWCDN9jOyeFBzukHhxEa2PUbTIwCBpEm1jQVu7DpSNeljIY4dhUNkYw5RBBvC%2F11yZjwEN2upHxvJbbYKUe9y7DlGi27nsZ47t5Qrc6PsizxHF7Lt0HUB9nzIQHGnIHO3H8apa4O%2FZjUWlxMjYFtZ3t3P7Q&X-Amz-Signature=fe8dde2e0bda466dff030e11600f1f600b1dd8fada79ca7b34d4cebc24669168&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMR4SXI6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOpESbgfirhdHHJtLOGtAZJq9lFe1BF2I7sWiMSM3duAiBgfLICq2pVQCznD6p9mnQX%2FjfFlKE9WOq9sps5605tbir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM51Pq5s5taB%2FjTH%2F6KtwDExb698Oh1bOnIpTg85CRrWPUI8L%2B1aPCE7%2BvPmx7SHqwDBovJ%2FACtgTxrbMBjVdxpVktPvXF1Vmc65XFWPUAUo6%2BNckwCSs%2FLMnkMFyHYQGIErso1fmwBdNIXgfVKr%2BVqvq5gwyCcCmIzVpxGZwJVsHv9RqpVvB0fCaOZrF3fKpmerB16XSyPoZ19g4m8GmztS%2B8sphxlFIXuW5rDw85GWDx%2BAaAmLib%2FXBYchccAxmH1k9QNz7plUuEdE3lUUHsEGo9DO5fi6Jx6bF6FyyumSmb0%2BZfgxxXyQQjHQ4r30NCWMsj0DCJOun%2BmrV9rwG9wlCWmrbmPifCrC%2FGiIn04WIkWlU069%2B2xDrDMIpl42BcAOHqURhQmw9m0LLZ%2ByQFP9BvP3laXJlJ%2Bh6eiTjLZ56ulw3JlUyjoikmHTpEl5HiDznceHlc4tzGGMspDvvLuBLGHWQDUPAwAo8hS61GIJlP8KxOg7VEXLDFQFNiIh%2FsHLorUJcbbn%2B2pBjKZuow5WfcgFCilNC95mum6X%2FlXACOr9FT62gm7Beq0ElM0SN6gjlmSmidTfh58xFs%2BNqCY0yjzb5PzgqGud2mDN%2FTLzYFZst4I81r3sAqA%2FXBXd1o6bbQyiAj9P77koMw6peMvwY6pgGO1eCBMYGenX4fuF1JWMzHOj8vku8lkQalaJknbBvsX8DnoxF%2F8%2FTszI0jafWExT%2Bm4ZWCDN9jOyeFBzukHhxEa2PUbTIwCBpEm1jQVu7DpSNeljIY4dhUNkYw5RBBvC%2F11yZjwEN2upHxvJbbYKUe9y7DlGi27nsZ47t5Qrc6PsizxHF7Lt0HUB9nzIQHGnIHO3H8apa4O%2FZjUWlxMjYFtZ3t3P7Q&X-Amz-Signature=254825a9c0f58680dceaf19d3e34efcf45d6d01d4caa7b1f0e5e2e2c90f61c92&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
