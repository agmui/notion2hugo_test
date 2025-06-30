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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHI25GAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0LhCj9RXTsS17vjfr3fFEih1eVXAouCUTXjV3Xj4qgAIgZc4Mjk6y64MMZ072S93SIjI17JVMU9%2BoZAtusnQnUv8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCedeWNWYN74cOBnoSrcA4Ya8Gnr78L9jncp3SE1wHLQx99abYrYr8UXct6rG4EVfsUg9999ususatxTGZ4n20evwYAMG5s1ypFnzIeiW67YSD6S7dpZZ5L4%2FDeJ3wZv32P7wSfJfJipELKiE53SHN8vdHWW5Q8qmROLV%2BbEexKnftl3AzZSLLClLnLcklpEHV0xHEYLxOFmifFhKCm%2FihT1qRVJGkULDu%2Fu7lZrWMX3Bos%2FkG6JCxst44fKltmNio7WrOx2XTT5TUbnqI4DdMFEW%2B%2FZGg5H6IMBDpB0%2F4VIaa9SAYoJgV4yWTV4ckwGOKST%2BHmFND8Xwzoi01FzY4NXtkdqOUAfr21WKhtRq0Yv0SA72kQp7v%2Ff%2BGbkhqCkCCOb8olggpMxfgDsy0CJBdrsTmpgus37nbTa1k9EDp3tYvgPJihT5liOcx5z29sjAp0r7iaYMnmI%2BZbT8BsJewIld0kCQiAKHV%2FpWmWhG9nVCe2oo16FhqMYH62VvOkKXsQstR4EeUv4N0GKA4cBju0knyR4ffWQhYq8QLVZL0jxcLHqCppmTDnUHXS2r56kkTYXlJHzagN7EQ8q68B1aVM6bn2LEKVKsS%2BJSEMm14Y3BpZl4e0Kom7nvtkiCfLnc%2Bf8WDGy1qiv8ANCMMiEisMGOqUBUOy8ErAIxx2XEx9F5ecPOSMCxxBYdPPoG3ABBH6IrekvkWbi%2B5prNId6416p%2FVCW4G%2B2ZrRT7AzWCZVPcNfI%2FtJI%2Bfqzd%2BVM3KsBHgsGoYihY3tXEFvG2%2BT8XimycphQ4SvXtNOQPWO0e49a3Dwr6Vvif3c65h5lgVe9Wly52eZCHI5Gf%2BUbjJNWmr%2FOlw0Yc3%2FeVJGgkKrcY4xi4%2BpDo5OJbkKR&X-Amz-Signature=73e1ec9b0de4e029fdc850b5a0646bed8514ce3bef81ac3025ff8d98e814efcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHI25GAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0LhCj9RXTsS17vjfr3fFEih1eVXAouCUTXjV3Xj4qgAIgZc4Mjk6y64MMZ072S93SIjI17JVMU9%2BoZAtusnQnUv8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCedeWNWYN74cOBnoSrcA4Ya8Gnr78L9jncp3SE1wHLQx99abYrYr8UXct6rG4EVfsUg9999ususatxTGZ4n20evwYAMG5s1ypFnzIeiW67YSD6S7dpZZ5L4%2FDeJ3wZv32P7wSfJfJipELKiE53SHN8vdHWW5Q8qmROLV%2BbEexKnftl3AzZSLLClLnLcklpEHV0xHEYLxOFmifFhKCm%2FihT1qRVJGkULDu%2Fu7lZrWMX3Bos%2FkG6JCxst44fKltmNio7WrOx2XTT5TUbnqI4DdMFEW%2B%2FZGg5H6IMBDpB0%2F4VIaa9SAYoJgV4yWTV4ckwGOKST%2BHmFND8Xwzoi01FzY4NXtkdqOUAfr21WKhtRq0Yv0SA72kQp7v%2Ff%2BGbkhqCkCCOb8olggpMxfgDsy0CJBdrsTmpgus37nbTa1k9EDp3tYvgPJihT5liOcx5z29sjAp0r7iaYMnmI%2BZbT8BsJewIld0kCQiAKHV%2FpWmWhG9nVCe2oo16FhqMYH62VvOkKXsQstR4EeUv4N0GKA4cBju0knyR4ffWQhYq8QLVZL0jxcLHqCppmTDnUHXS2r56kkTYXlJHzagN7EQ8q68B1aVM6bn2LEKVKsS%2BJSEMm14Y3BpZl4e0Kom7nvtkiCfLnc%2Bf8WDGy1qiv8ANCMMiEisMGOqUBUOy8ErAIxx2XEx9F5ecPOSMCxxBYdPPoG3ABBH6IrekvkWbi%2B5prNId6416p%2FVCW4G%2B2ZrRT7AzWCZVPcNfI%2FtJI%2Bfqzd%2BVM3KsBHgsGoYihY3tXEFvG2%2BT8XimycphQ4SvXtNOQPWO0e49a3Dwr6Vvif3c65h5lgVe9Wly52eZCHI5Gf%2BUbjJNWmr%2FOlw0Yc3%2FeVJGgkKrcY4xi4%2BpDo5OJbkKR&X-Amz-Signature=ea16d1b31b648c63430ce44f893b5f344c6d232bfc0458b9b7524116d8496fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHI25GAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0LhCj9RXTsS17vjfr3fFEih1eVXAouCUTXjV3Xj4qgAIgZc4Mjk6y64MMZ072S93SIjI17JVMU9%2BoZAtusnQnUv8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCedeWNWYN74cOBnoSrcA4Ya8Gnr78L9jncp3SE1wHLQx99abYrYr8UXct6rG4EVfsUg9999ususatxTGZ4n20evwYAMG5s1ypFnzIeiW67YSD6S7dpZZ5L4%2FDeJ3wZv32P7wSfJfJipELKiE53SHN8vdHWW5Q8qmROLV%2BbEexKnftl3AzZSLLClLnLcklpEHV0xHEYLxOFmifFhKCm%2FihT1qRVJGkULDu%2Fu7lZrWMX3Bos%2FkG6JCxst44fKltmNio7WrOx2XTT5TUbnqI4DdMFEW%2B%2FZGg5H6IMBDpB0%2F4VIaa9SAYoJgV4yWTV4ckwGOKST%2BHmFND8Xwzoi01FzY4NXtkdqOUAfr21WKhtRq0Yv0SA72kQp7v%2Ff%2BGbkhqCkCCOb8olggpMxfgDsy0CJBdrsTmpgus37nbTa1k9EDp3tYvgPJihT5liOcx5z29sjAp0r7iaYMnmI%2BZbT8BsJewIld0kCQiAKHV%2FpWmWhG9nVCe2oo16FhqMYH62VvOkKXsQstR4EeUv4N0GKA4cBju0knyR4ffWQhYq8QLVZL0jxcLHqCppmTDnUHXS2r56kkTYXlJHzagN7EQ8q68B1aVM6bn2LEKVKsS%2BJSEMm14Y3BpZl4e0Kom7nvtkiCfLnc%2Bf8WDGy1qiv8ANCMMiEisMGOqUBUOy8ErAIxx2XEx9F5ecPOSMCxxBYdPPoG3ABBH6IrekvkWbi%2B5prNId6416p%2FVCW4G%2B2ZrRT7AzWCZVPcNfI%2FtJI%2Bfqzd%2BVM3KsBHgsGoYihY3tXEFvG2%2BT8XimycphQ4SvXtNOQPWO0e49a3Dwr6Vvif3c65h5lgVe9Wly52eZCHI5Gf%2BUbjJNWmr%2FOlw0Yc3%2FeVJGgkKrcY4xi4%2BpDo5OJbkKR&X-Amz-Signature=40eb510b08abe1450397e0ed3ca73f0e6a767b572db409ac45120cac9f215e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHI25GAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0LhCj9RXTsS17vjfr3fFEih1eVXAouCUTXjV3Xj4qgAIgZc4Mjk6y64MMZ072S93SIjI17JVMU9%2BoZAtusnQnUv8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCedeWNWYN74cOBnoSrcA4Ya8Gnr78L9jncp3SE1wHLQx99abYrYr8UXct6rG4EVfsUg9999ususatxTGZ4n20evwYAMG5s1ypFnzIeiW67YSD6S7dpZZ5L4%2FDeJ3wZv32P7wSfJfJipELKiE53SHN8vdHWW5Q8qmROLV%2BbEexKnftl3AzZSLLClLnLcklpEHV0xHEYLxOFmifFhKCm%2FihT1qRVJGkULDu%2Fu7lZrWMX3Bos%2FkG6JCxst44fKltmNio7WrOx2XTT5TUbnqI4DdMFEW%2B%2FZGg5H6IMBDpB0%2F4VIaa9SAYoJgV4yWTV4ckwGOKST%2BHmFND8Xwzoi01FzY4NXtkdqOUAfr21WKhtRq0Yv0SA72kQp7v%2Ff%2BGbkhqCkCCOb8olggpMxfgDsy0CJBdrsTmpgus37nbTa1k9EDp3tYvgPJihT5liOcx5z29sjAp0r7iaYMnmI%2BZbT8BsJewIld0kCQiAKHV%2FpWmWhG9nVCe2oo16FhqMYH62VvOkKXsQstR4EeUv4N0GKA4cBju0knyR4ffWQhYq8QLVZL0jxcLHqCppmTDnUHXS2r56kkTYXlJHzagN7EQ8q68B1aVM6bn2LEKVKsS%2BJSEMm14Y3BpZl4e0Kom7nvtkiCfLnc%2Bf8WDGy1qiv8ANCMMiEisMGOqUBUOy8ErAIxx2XEx9F5ecPOSMCxxBYdPPoG3ABBH6IrekvkWbi%2B5prNId6416p%2FVCW4G%2B2ZrRT7AzWCZVPcNfI%2FtJI%2Bfqzd%2BVM3KsBHgsGoYihY3tXEFvG2%2BT8XimycphQ4SvXtNOQPWO0e49a3Dwr6Vvif3c65h5lgVe9Wly52eZCHI5Gf%2BUbjJNWmr%2FOlw0Yc3%2FeVJGgkKrcY4xi4%2BpDo5OJbkKR&X-Amz-Signature=1c22e58b4f5d9584608b61103232f9b900d81dd0b4a9dafdc48292bf7eab0644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHI25GAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0LhCj9RXTsS17vjfr3fFEih1eVXAouCUTXjV3Xj4qgAIgZc4Mjk6y64MMZ072S93SIjI17JVMU9%2BoZAtusnQnUv8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCedeWNWYN74cOBnoSrcA4Ya8Gnr78L9jncp3SE1wHLQx99abYrYr8UXct6rG4EVfsUg9999ususatxTGZ4n20evwYAMG5s1ypFnzIeiW67YSD6S7dpZZ5L4%2FDeJ3wZv32P7wSfJfJipELKiE53SHN8vdHWW5Q8qmROLV%2BbEexKnftl3AzZSLLClLnLcklpEHV0xHEYLxOFmifFhKCm%2FihT1qRVJGkULDu%2Fu7lZrWMX3Bos%2FkG6JCxst44fKltmNio7WrOx2XTT5TUbnqI4DdMFEW%2B%2FZGg5H6IMBDpB0%2F4VIaa9SAYoJgV4yWTV4ckwGOKST%2BHmFND8Xwzoi01FzY4NXtkdqOUAfr21WKhtRq0Yv0SA72kQp7v%2Ff%2BGbkhqCkCCOb8olggpMxfgDsy0CJBdrsTmpgus37nbTa1k9EDp3tYvgPJihT5liOcx5z29sjAp0r7iaYMnmI%2BZbT8BsJewIld0kCQiAKHV%2FpWmWhG9nVCe2oo16FhqMYH62VvOkKXsQstR4EeUv4N0GKA4cBju0knyR4ffWQhYq8QLVZL0jxcLHqCppmTDnUHXS2r56kkTYXlJHzagN7EQ8q68B1aVM6bn2LEKVKsS%2BJSEMm14Y3BpZl4e0Kom7nvtkiCfLnc%2Bf8WDGy1qiv8ANCMMiEisMGOqUBUOy8ErAIxx2XEx9F5ecPOSMCxxBYdPPoG3ABBH6IrekvkWbi%2B5prNId6416p%2FVCW4G%2B2ZrRT7AzWCZVPcNfI%2FtJI%2Bfqzd%2BVM3KsBHgsGoYihY3tXEFvG2%2BT8XimycphQ4SvXtNOQPWO0e49a3Dwr6Vvif3c65h5lgVe9Wly52eZCHI5Gf%2BUbjJNWmr%2FOlw0Yc3%2FeVJGgkKrcY4xi4%2BpDo5OJbkKR&X-Amz-Signature=03bb53f089a82355ab29305231c1da45713622b7005e2d273f011848bbda69ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
