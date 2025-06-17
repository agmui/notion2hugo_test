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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUHQIF2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSK16NQdxWCyuZtiEzaHqBzNqGJIENPulbnF6sbABX%2FAiAvgkVdgyaYob%2BIdXIWPwZbOo39z6doj%2BKmH4RfCmziSSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO7Oq3MT%2BK0ic6OHCKtwD3EkDctMxeePw%2Bid1blyJE7ARttJ%2F%2FL%2F55YEdkYFg2Ji8g%2FyN4Y2sPrTWprSlI05tFO5SQG1l1pYms6Bd2tGF7kF5YEIwGjwJRydLYbYOmUaXKC9mEFacXpn2yh0lPt1Q%2B7Zm9GbvIute%2BIDlaUEhzWpyxkRTOa7Oa39uL%2Bq%2BiLaIVb4YZZ9TVY%2Fr%2FV2niFmzitgu6g7dTB8NCDooVn8ddYBwTRiDswJ9Fup7RArVvRQga6LUI%2FABmY0qBXuKJPDphmmYEk6NZ3q%2FrsSAILdFGWci60Sd2E2HR7Xx0bMkREcL34u20gGerE0hN1v7eTYyKlLfLyIcXuCxxwnrMoyBsH6aU9gfMlz6INSmpkCGchbYW%2BdnggpERi3RYVBvHoNlnkIepUzjUI%2BfzEaIuPZPe296QUyKMyJ5h%2FYBZOoOEWbgITgx00CtMTRfj9Xx35qTtcyawPhLSkI3Uav2zAZakNzpLX%2FQIid77%2BTNlcBgqx60gZEfCJ1jzhl7RMIkkPQrKo4MQvWDYgJmemFV3bxe8NMZw5xzII6%2FfEG%2B9hSvcepOw2qwkhrqnPKsg8Dqm7gTixifYPpfeYfoX8AaE8ijaEq67Od89MZdzRInUxyKyn3MWMcGcgqTVyvE6gMwuabFwgY6pgF4EZb2wZC7jACCs7zEVxN1Yu9AD9aiCg0OAhyR%2Bk%2F3bG50dTVdqppwfELBFAp%2FAbIKhp%2FAH1T951l0qvBYVqx%2BZTC2%2BFcIgRVg1DAnmMlW4Cx%2FHTz47Tk0nv0qqgv4bBXKfNFv3srYxhLzbSWFecEz4ssVjdeU3QAS%2BMVNBppeRo9KJu7LLqUmmqtbwCF9Tnf9Fxvo88mJzaE5tUjSWj7%2BSe1ELJbB&X-Amz-Signature=ca950efb9518823fc50f422470a3303b6d84425584b87218a642e363e406c68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUHQIF2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSK16NQdxWCyuZtiEzaHqBzNqGJIENPulbnF6sbABX%2FAiAvgkVdgyaYob%2BIdXIWPwZbOo39z6doj%2BKmH4RfCmziSSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO7Oq3MT%2BK0ic6OHCKtwD3EkDctMxeePw%2Bid1blyJE7ARttJ%2F%2FL%2F55YEdkYFg2Ji8g%2FyN4Y2sPrTWprSlI05tFO5SQG1l1pYms6Bd2tGF7kF5YEIwGjwJRydLYbYOmUaXKC9mEFacXpn2yh0lPt1Q%2B7Zm9GbvIute%2BIDlaUEhzWpyxkRTOa7Oa39uL%2Bq%2BiLaIVb4YZZ9TVY%2Fr%2FV2niFmzitgu6g7dTB8NCDooVn8ddYBwTRiDswJ9Fup7RArVvRQga6LUI%2FABmY0qBXuKJPDphmmYEk6NZ3q%2FrsSAILdFGWci60Sd2E2HR7Xx0bMkREcL34u20gGerE0hN1v7eTYyKlLfLyIcXuCxxwnrMoyBsH6aU9gfMlz6INSmpkCGchbYW%2BdnggpERi3RYVBvHoNlnkIepUzjUI%2BfzEaIuPZPe296QUyKMyJ5h%2FYBZOoOEWbgITgx00CtMTRfj9Xx35qTtcyawPhLSkI3Uav2zAZakNzpLX%2FQIid77%2BTNlcBgqx60gZEfCJ1jzhl7RMIkkPQrKo4MQvWDYgJmemFV3bxe8NMZw5xzII6%2FfEG%2B9hSvcepOw2qwkhrqnPKsg8Dqm7gTixifYPpfeYfoX8AaE8ijaEq67Od89MZdzRInUxyKyn3MWMcGcgqTVyvE6gMwuabFwgY6pgF4EZb2wZC7jACCs7zEVxN1Yu9AD9aiCg0OAhyR%2Bk%2F3bG50dTVdqppwfELBFAp%2FAbIKhp%2FAH1T951l0qvBYVqx%2BZTC2%2BFcIgRVg1DAnmMlW4Cx%2FHTz47Tk0nv0qqgv4bBXKfNFv3srYxhLzbSWFecEz4ssVjdeU3QAS%2BMVNBppeRo9KJu7LLqUmmqtbwCF9Tnf9Fxvo88mJzaE5tUjSWj7%2BSe1ELJbB&X-Amz-Signature=c72bcbeadb8b5b4931179ca55a0758f7aa4c223dea9e7a91b46bd769e0dc93e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUHQIF2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSK16NQdxWCyuZtiEzaHqBzNqGJIENPulbnF6sbABX%2FAiAvgkVdgyaYob%2BIdXIWPwZbOo39z6doj%2BKmH4RfCmziSSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO7Oq3MT%2BK0ic6OHCKtwD3EkDctMxeePw%2Bid1blyJE7ARttJ%2F%2FL%2F55YEdkYFg2Ji8g%2FyN4Y2sPrTWprSlI05tFO5SQG1l1pYms6Bd2tGF7kF5YEIwGjwJRydLYbYOmUaXKC9mEFacXpn2yh0lPt1Q%2B7Zm9GbvIute%2BIDlaUEhzWpyxkRTOa7Oa39uL%2Bq%2BiLaIVb4YZZ9TVY%2Fr%2FV2niFmzitgu6g7dTB8NCDooVn8ddYBwTRiDswJ9Fup7RArVvRQga6LUI%2FABmY0qBXuKJPDphmmYEk6NZ3q%2FrsSAILdFGWci60Sd2E2HR7Xx0bMkREcL34u20gGerE0hN1v7eTYyKlLfLyIcXuCxxwnrMoyBsH6aU9gfMlz6INSmpkCGchbYW%2BdnggpERi3RYVBvHoNlnkIepUzjUI%2BfzEaIuPZPe296QUyKMyJ5h%2FYBZOoOEWbgITgx00CtMTRfj9Xx35qTtcyawPhLSkI3Uav2zAZakNzpLX%2FQIid77%2BTNlcBgqx60gZEfCJ1jzhl7RMIkkPQrKo4MQvWDYgJmemFV3bxe8NMZw5xzII6%2FfEG%2B9hSvcepOw2qwkhrqnPKsg8Dqm7gTixifYPpfeYfoX8AaE8ijaEq67Od89MZdzRInUxyKyn3MWMcGcgqTVyvE6gMwuabFwgY6pgF4EZb2wZC7jACCs7zEVxN1Yu9AD9aiCg0OAhyR%2Bk%2F3bG50dTVdqppwfELBFAp%2FAbIKhp%2FAH1T951l0qvBYVqx%2BZTC2%2BFcIgRVg1DAnmMlW4Cx%2FHTz47Tk0nv0qqgv4bBXKfNFv3srYxhLzbSWFecEz4ssVjdeU3QAS%2BMVNBppeRo9KJu7LLqUmmqtbwCF9Tnf9Fxvo88mJzaE5tUjSWj7%2BSe1ELJbB&X-Amz-Signature=fceb1502b4ff2edf8fbabfc7c720acaa11758c8a501d8a84c587faecd89d3b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUHQIF2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSK16NQdxWCyuZtiEzaHqBzNqGJIENPulbnF6sbABX%2FAiAvgkVdgyaYob%2BIdXIWPwZbOo39z6doj%2BKmH4RfCmziSSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO7Oq3MT%2BK0ic6OHCKtwD3EkDctMxeePw%2Bid1blyJE7ARttJ%2F%2FL%2F55YEdkYFg2Ji8g%2FyN4Y2sPrTWprSlI05tFO5SQG1l1pYms6Bd2tGF7kF5YEIwGjwJRydLYbYOmUaXKC9mEFacXpn2yh0lPt1Q%2B7Zm9GbvIute%2BIDlaUEhzWpyxkRTOa7Oa39uL%2Bq%2BiLaIVb4YZZ9TVY%2Fr%2FV2niFmzitgu6g7dTB8NCDooVn8ddYBwTRiDswJ9Fup7RArVvRQga6LUI%2FABmY0qBXuKJPDphmmYEk6NZ3q%2FrsSAILdFGWci60Sd2E2HR7Xx0bMkREcL34u20gGerE0hN1v7eTYyKlLfLyIcXuCxxwnrMoyBsH6aU9gfMlz6INSmpkCGchbYW%2BdnggpERi3RYVBvHoNlnkIepUzjUI%2BfzEaIuPZPe296QUyKMyJ5h%2FYBZOoOEWbgITgx00CtMTRfj9Xx35qTtcyawPhLSkI3Uav2zAZakNzpLX%2FQIid77%2BTNlcBgqx60gZEfCJ1jzhl7RMIkkPQrKo4MQvWDYgJmemFV3bxe8NMZw5xzII6%2FfEG%2B9hSvcepOw2qwkhrqnPKsg8Dqm7gTixifYPpfeYfoX8AaE8ijaEq67Od89MZdzRInUxyKyn3MWMcGcgqTVyvE6gMwuabFwgY6pgF4EZb2wZC7jACCs7zEVxN1Yu9AD9aiCg0OAhyR%2Bk%2F3bG50dTVdqppwfELBFAp%2FAbIKhp%2FAH1T951l0qvBYVqx%2BZTC2%2BFcIgRVg1DAnmMlW4Cx%2FHTz47Tk0nv0qqgv4bBXKfNFv3srYxhLzbSWFecEz4ssVjdeU3QAS%2BMVNBppeRo9KJu7LLqUmmqtbwCF9Tnf9Fxvo88mJzaE5tUjSWj7%2BSe1ELJbB&X-Amz-Signature=adad97edac9b42470f3713a6a2e4d72f4fc5147a77b1782c40968ca6e60938c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUHQIF2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSK16NQdxWCyuZtiEzaHqBzNqGJIENPulbnF6sbABX%2FAiAvgkVdgyaYob%2BIdXIWPwZbOo39z6doj%2BKmH4RfCmziSSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO7Oq3MT%2BK0ic6OHCKtwD3EkDctMxeePw%2Bid1blyJE7ARttJ%2F%2FL%2F55YEdkYFg2Ji8g%2FyN4Y2sPrTWprSlI05tFO5SQG1l1pYms6Bd2tGF7kF5YEIwGjwJRydLYbYOmUaXKC9mEFacXpn2yh0lPt1Q%2B7Zm9GbvIute%2BIDlaUEhzWpyxkRTOa7Oa39uL%2Bq%2BiLaIVb4YZZ9TVY%2Fr%2FV2niFmzitgu6g7dTB8NCDooVn8ddYBwTRiDswJ9Fup7RArVvRQga6LUI%2FABmY0qBXuKJPDphmmYEk6NZ3q%2FrsSAILdFGWci60Sd2E2HR7Xx0bMkREcL34u20gGerE0hN1v7eTYyKlLfLyIcXuCxxwnrMoyBsH6aU9gfMlz6INSmpkCGchbYW%2BdnggpERi3RYVBvHoNlnkIepUzjUI%2BfzEaIuPZPe296QUyKMyJ5h%2FYBZOoOEWbgITgx00CtMTRfj9Xx35qTtcyawPhLSkI3Uav2zAZakNzpLX%2FQIid77%2BTNlcBgqx60gZEfCJ1jzhl7RMIkkPQrKo4MQvWDYgJmemFV3bxe8NMZw5xzII6%2FfEG%2B9hSvcepOw2qwkhrqnPKsg8Dqm7gTixifYPpfeYfoX8AaE8ijaEq67Od89MZdzRInUxyKyn3MWMcGcgqTVyvE6gMwuabFwgY6pgF4EZb2wZC7jACCs7zEVxN1Yu9AD9aiCg0OAhyR%2Bk%2F3bG50dTVdqppwfELBFAp%2FAbIKhp%2FAH1T951l0qvBYVqx%2BZTC2%2BFcIgRVg1DAnmMlW4Cx%2FHTz47Tk0nv0qqgv4bBXKfNFv3srYxhLzbSWFecEz4ssVjdeU3QAS%2BMVNBppeRo9KJu7LLqUmmqtbwCF9Tnf9Fxvo88mJzaE5tUjSWj7%2BSe1ELJbB&X-Amz-Signature=38a56f03f8a0b5db0098de4152f72bf1a0558725852d7f86e8dc5d3cbbc56cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
