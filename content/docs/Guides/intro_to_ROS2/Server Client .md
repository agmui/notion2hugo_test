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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA2PSO7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BtPoVQFSt9AABJ6GfDT4ilxRRKgkgggWoktGwyACKgIhAJJmtOFYWcg8o0IwiJqwtMC2Jpdony5y3jmGUpU4CO7XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGwySDkopul2ONq3cq3AOR3TSMUjRbbIvRZEwEvYHbI6bDmEbm6T%2Fx3i8bIYI0n2UcqfDZJrg%2BhPxmS%2F0gXJ0k7BEcrOp5oszVMw%2BIvdsoTlC9nm6eC2lHn3uuBHIBfXhzfPqGCHl3IiP50bd1QpIA5O8C9AUXoGXKuqhsbi1ZWO5CGx30pNgcHLUjwCmt84h0z3iUFDHucsEsgqGXCHfk403F4by3UPP9BxN%2B8wzrRXLmc0YGdCEEkwcppSmj3dn9HvL%2FumN2Mh8xpLoWYCj89Q1u0iV5VLGkdY64kOdEzGSNsEeJEwwPc4XVwNNmZp1ayZ3e%2FAE6%2FHvokAuczMwuvB2fWaX9%2F33VOmeMv6L%2Fv02w%2BJwPlFG8s%2BtpUKfOcwEN5CNAjtePQimx3EMlymxOD5d3Zc4n27H8GH37EW4n%2Fz8TTrsW%2FGx7fucY%2BieHNpW1bljKZkwtmLOcLEwktarHomRBKgl7rvOctaU87w6UCT6%2Fe68KHGBGs4gsrSzbmF4vK9LoUzzX16kCDC2zTGxvSwCmRGAeAGMnb1KL2Xqa132qTwNpDIdfhpo5WGW1eFd8VNGdwEUdTMlWwG9h1I%2FG%2FiNRLKr0nuE2OuIQzD7goB7pruYSX8WiY7nWl07qOcMovR%2BHxA2P8nAbRTCG44O%2FBjqkAXzpi9J8ob1TnoJalmTWXBEy%2FCFkGs8XxeQCpgjCRYuJxQou8YQlV5VDrczabEnsAEgS5qnN20X9y93AZEXJ7KbvwZCjWSfnaNGWTHVeeeMN5zaANVIUZOgL5cBCJDDlfVXHhdQvlxRjzwpEj8gcAmQY%2B1lcpXLoZjf6d6a61f9S%2FEpIQ5YIHTpSwSfwIL1XE42kv%2F3yTKg1roqpukTjfsrdG2ID&X-Amz-Signature=3d2ff4770a50a58622bc7ff738dd0220f85d54211f3c556c50ca35bb7f125a80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA2PSO7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BtPoVQFSt9AABJ6GfDT4ilxRRKgkgggWoktGwyACKgIhAJJmtOFYWcg8o0IwiJqwtMC2Jpdony5y3jmGUpU4CO7XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGwySDkopul2ONq3cq3AOR3TSMUjRbbIvRZEwEvYHbI6bDmEbm6T%2Fx3i8bIYI0n2UcqfDZJrg%2BhPxmS%2F0gXJ0k7BEcrOp5oszVMw%2BIvdsoTlC9nm6eC2lHn3uuBHIBfXhzfPqGCHl3IiP50bd1QpIA5O8C9AUXoGXKuqhsbi1ZWO5CGx30pNgcHLUjwCmt84h0z3iUFDHucsEsgqGXCHfk403F4by3UPP9BxN%2B8wzrRXLmc0YGdCEEkwcppSmj3dn9HvL%2FumN2Mh8xpLoWYCj89Q1u0iV5VLGkdY64kOdEzGSNsEeJEwwPc4XVwNNmZp1ayZ3e%2FAE6%2FHvokAuczMwuvB2fWaX9%2F33VOmeMv6L%2Fv02w%2BJwPlFG8s%2BtpUKfOcwEN5CNAjtePQimx3EMlymxOD5d3Zc4n27H8GH37EW4n%2Fz8TTrsW%2FGx7fucY%2BieHNpW1bljKZkwtmLOcLEwktarHomRBKgl7rvOctaU87w6UCT6%2Fe68KHGBGs4gsrSzbmF4vK9LoUzzX16kCDC2zTGxvSwCmRGAeAGMnb1KL2Xqa132qTwNpDIdfhpo5WGW1eFd8VNGdwEUdTMlWwG9h1I%2FG%2FiNRLKr0nuE2OuIQzD7goB7pruYSX8WiY7nWl07qOcMovR%2BHxA2P8nAbRTCG44O%2FBjqkAXzpi9J8ob1TnoJalmTWXBEy%2FCFkGs8XxeQCpgjCRYuJxQou8YQlV5VDrczabEnsAEgS5qnN20X9y93AZEXJ7KbvwZCjWSfnaNGWTHVeeeMN5zaANVIUZOgL5cBCJDDlfVXHhdQvlxRjzwpEj8gcAmQY%2B1lcpXLoZjf6d6a61f9S%2FEpIQ5YIHTpSwSfwIL1XE42kv%2F3yTKg1roqpukTjfsrdG2ID&X-Amz-Signature=d28cb6afb36f34f76fd1c3f3474258c3162264e5e9889315789f2de3dc6767b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA2PSO7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BtPoVQFSt9AABJ6GfDT4ilxRRKgkgggWoktGwyACKgIhAJJmtOFYWcg8o0IwiJqwtMC2Jpdony5y3jmGUpU4CO7XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGwySDkopul2ONq3cq3AOR3TSMUjRbbIvRZEwEvYHbI6bDmEbm6T%2Fx3i8bIYI0n2UcqfDZJrg%2BhPxmS%2F0gXJ0k7BEcrOp5oszVMw%2BIvdsoTlC9nm6eC2lHn3uuBHIBfXhzfPqGCHl3IiP50bd1QpIA5O8C9AUXoGXKuqhsbi1ZWO5CGx30pNgcHLUjwCmt84h0z3iUFDHucsEsgqGXCHfk403F4by3UPP9BxN%2B8wzrRXLmc0YGdCEEkwcppSmj3dn9HvL%2FumN2Mh8xpLoWYCj89Q1u0iV5VLGkdY64kOdEzGSNsEeJEwwPc4XVwNNmZp1ayZ3e%2FAE6%2FHvokAuczMwuvB2fWaX9%2F33VOmeMv6L%2Fv02w%2BJwPlFG8s%2BtpUKfOcwEN5CNAjtePQimx3EMlymxOD5d3Zc4n27H8GH37EW4n%2Fz8TTrsW%2FGx7fucY%2BieHNpW1bljKZkwtmLOcLEwktarHomRBKgl7rvOctaU87w6UCT6%2Fe68KHGBGs4gsrSzbmF4vK9LoUzzX16kCDC2zTGxvSwCmRGAeAGMnb1KL2Xqa132qTwNpDIdfhpo5WGW1eFd8VNGdwEUdTMlWwG9h1I%2FG%2FiNRLKr0nuE2OuIQzD7goB7pruYSX8WiY7nWl07qOcMovR%2BHxA2P8nAbRTCG44O%2FBjqkAXzpi9J8ob1TnoJalmTWXBEy%2FCFkGs8XxeQCpgjCRYuJxQou8YQlV5VDrczabEnsAEgS5qnN20X9y93AZEXJ7KbvwZCjWSfnaNGWTHVeeeMN5zaANVIUZOgL5cBCJDDlfVXHhdQvlxRjzwpEj8gcAmQY%2B1lcpXLoZjf6d6a61f9S%2FEpIQ5YIHTpSwSfwIL1XE42kv%2F3yTKg1roqpukTjfsrdG2ID&X-Amz-Signature=c7e22769ef4baadfdb3f6cf6b7ec922e972967b7436ce601eb5693224436a602&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA2PSO7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BtPoVQFSt9AABJ6GfDT4ilxRRKgkgggWoktGwyACKgIhAJJmtOFYWcg8o0IwiJqwtMC2Jpdony5y3jmGUpU4CO7XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGwySDkopul2ONq3cq3AOR3TSMUjRbbIvRZEwEvYHbI6bDmEbm6T%2Fx3i8bIYI0n2UcqfDZJrg%2BhPxmS%2F0gXJ0k7BEcrOp5oszVMw%2BIvdsoTlC9nm6eC2lHn3uuBHIBfXhzfPqGCHl3IiP50bd1QpIA5O8C9AUXoGXKuqhsbi1ZWO5CGx30pNgcHLUjwCmt84h0z3iUFDHucsEsgqGXCHfk403F4by3UPP9BxN%2B8wzrRXLmc0YGdCEEkwcppSmj3dn9HvL%2FumN2Mh8xpLoWYCj89Q1u0iV5VLGkdY64kOdEzGSNsEeJEwwPc4XVwNNmZp1ayZ3e%2FAE6%2FHvokAuczMwuvB2fWaX9%2F33VOmeMv6L%2Fv02w%2BJwPlFG8s%2BtpUKfOcwEN5CNAjtePQimx3EMlymxOD5d3Zc4n27H8GH37EW4n%2Fz8TTrsW%2FGx7fucY%2BieHNpW1bljKZkwtmLOcLEwktarHomRBKgl7rvOctaU87w6UCT6%2Fe68KHGBGs4gsrSzbmF4vK9LoUzzX16kCDC2zTGxvSwCmRGAeAGMnb1KL2Xqa132qTwNpDIdfhpo5WGW1eFd8VNGdwEUdTMlWwG9h1I%2FG%2FiNRLKr0nuE2OuIQzD7goB7pruYSX8WiY7nWl07qOcMovR%2BHxA2P8nAbRTCG44O%2FBjqkAXzpi9J8ob1TnoJalmTWXBEy%2FCFkGs8XxeQCpgjCRYuJxQou8YQlV5VDrczabEnsAEgS5qnN20X9y93AZEXJ7KbvwZCjWSfnaNGWTHVeeeMN5zaANVIUZOgL5cBCJDDlfVXHhdQvlxRjzwpEj8gcAmQY%2B1lcpXLoZjf6d6a61f9S%2FEpIQ5YIHTpSwSfwIL1XE42kv%2F3yTKg1roqpukTjfsrdG2ID&X-Amz-Signature=5c3d76d7e297bf344934a3ef2baae9797e0c98a7e5b9ba63ef10a68c1a03bc36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA2PSO7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BtPoVQFSt9AABJ6GfDT4ilxRRKgkgggWoktGwyACKgIhAJJmtOFYWcg8o0IwiJqwtMC2Jpdony5y3jmGUpU4CO7XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGwySDkopul2ONq3cq3AOR3TSMUjRbbIvRZEwEvYHbI6bDmEbm6T%2Fx3i8bIYI0n2UcqfDZJrg%2BhPxmS%2F0gXJ0k7BEcrOp5oszVMw%2BIvdsoTlC9nm6eC2lHn3uuBHIBfXhzfPqGCHl3IiP50bd1QpIA5O8C9AUXoGXKuqhsbi1ZWO5CGx30pNgcHLUjwCmt84h0z3iUFDHucsEsgqGXCHfk403F4by3UPP9BxN%2B8wzrRXLmc0YGdCEEkwcppSmj3dn9HvL%2FumN2Mh8xpLoWYCj89Q1u0iV5VLGkdY64kOdEzGSNsEeJEwwPc4XVwNNmZp1ayZ3e%2FAE6%2FHvokAuczMwuvB2fWaX9%2F33VOmeMv6L%2Fv02w%2BJwPlFG8s%2BtpUKfOcwEN5CNAjtePQimx3EMlymxOD5d3Zc4n27H8GH37EW4n%2Fz8TTrsW%2FGx7fucY%2BieHNpW1bljKZkwtmLOcLEwktarHomRBKgl7rvOctaU87w6UCT6%2Fe68KHGBGs4gsrSzbmF4vK9LoUzzX16kCDC2zTGxvSwCmRGAeAGMnb1KL2Xqa132qTwNpDIdfhpo5WGW1eFd8VNGdwEUdTMlWwG9h1I%2FG%2FiNRLKr0nuE2OuIQzD7goB7pruYSX8WiY7nWl07qOcMovR%2BHxA2P8nAbRTCG44O%2FBjqkAXzpi9J8ob1TnoJalmTWXBEy%2FCFkGs8XxeQCpgjCRYuJxQou8YQlV5VDrczabEnsAEgS5qnN20X9y93AZEXJ7KbvwZCjWSfnaNGWTHVeeeMN5zaANVIUZOgL5cBCJDDlfVXHhdQvlxRjzwpEj8gcAmQY%2B1lcpXLoZjf6d6a61f9S%2FEpIQ5YIHTpSwSfwIL1XE42kv%2F3yTKg1roqpukTjfsrdG2ID&X-Amz-Signature=4eef57c0a58c4e63580f0795dba9914c7bfcc07d37313b15ac257ad637a841e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
