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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSOYOWK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEew7ntzqzF8TU%2FK1nyYsBKoPPNEc%2BxznL4x%2Bb6eXmGJAiEArYA1XpPtcPMo63uiRMo1usNxFeGrTwijo%2BwwDkAx%2Fiwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHzWAopbqCGZhgLJ5yrcAydzZtEvYeyFDMpDpUslImFTDH2CW%2FxxW8Fy22nPK8IvU3fo9yCO2686SRyF1qCyLwWhaEs%2FDk1GJdARA56IkeJEhKe9q38GfcxALwrYw%2FV%2BL0wIYWd2BCqbMLXaUgfnF1N2jwCCFT8fbaSiXZE3M47kWKM5PMx2O7knMfuSVr98Tn3SJjucsOvyyI4STXtHa4PV%2FZGDeh25HFvb6ktvc72Ocd3x2e%2BOWOGa8OWAWTQ9glxBgNXxIOcPTpfEoJvfbYukKCS4lrpVBB9J%2Bd7bNXqGjFDfBTyDs6dVyd6xiSa38Pkn269hUWRfuEbj2Y%2FHJy2Rna%2BRaThbUGi1uGUFMExuO16Ap0u9WI20kOuVOVrLfGYLbD3I%2FYFo62zI%2F0%2FTBeHxuKiWBOvJJeFnoVkVV7A9UHkZWrfzb9bRxfqLGrnY6sZ%2FIH4x0mPy%2F9BfBUSRVeCwNh4LzKxOoLnSZOm2teQI7sl9x6XEdMAdvWiVf4AK4T%2BVuiybIM2TgOfXQvOAAErWoQqa6P5nBWNTeULpMZrY30M0Jru16asl7GvFmbtxgGIY6DMU3ZGEsOWFvRJDZL7bHfd20ny%2FBRecJtXKZN4D%2BqMdfeS87KKwlI4BJvYn9Kfhe%2BPYp4PdqppVMNSD9L0GOqUBYkqixQkF66XhBmjGgHLSIC8fQajnSaoV6pt%2BTyJUK1hARujKKtrXqxsl4E5ZNIvSDu0n06uiBZwFL8JlcC44htwj5JGXGY54h38kLElvZDAPTi3BTzaOQ1UgZRvCIYMdj9AIFFrXaxaLR5ZGHVsgN1GdCg5d1cN2cfXjs9eQwnu6bxVmkqnXTDm24zUgpxWV2GleKKDit8a9gW2W4mOiNeG0g1cU&X-Amz-Signature=3abbdea300faca535f483857db3117d421b0834b8782de83fc918e11407114f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSOYOWK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEew7ntzqzF8TU%2FK1nyYsBKoPPNEc%2BxznL4x%2Bb6eXmGJAiEArYA1XpPtcPMo63uiRMo1usNxFeGrTwijo%2BwwDkAx%2Fiwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHzWAopbqCGZhgLJ5yrcAydzZtEvYeyFDMpDpUslImFTDH2CW%2FxxW8Fy22nPK8IvU3fo9yCO2686SRyF1qCyLwWhaEs%2FDk1GJdARA56IkeJEhKe9q38GfcxALwrYw%2FV%2BL0wIYWd2BCqbMLXaUgfnF1N2jwCCFT8fbaSiXZE3M47kWKM5PMx2O7knMfuSVr98Tn3SJjucsOvyyI4STXtHa4PV%2FZGDeh25HFvb6ktvc72Ocd3x2e%2BOWOGa8OWAWTQ9glxBgNXxIOcPTpfEoJvfbYukKCS4lrpVBB9J%2Bd7bNXqGjFDfBTyDs6dVyd6xiSa38Pkn269hUWRfuEbj2Y%2FHJy2Rna%2BRaThbUGi1uGUFMExuO16Ap0u9WI20kOuVOVrLfGYLbD3I%2FYFo62zI%2F0%2FTBeHxuKiWBOvJJeFnoVkVV7A9UHkZWrfzb9bRxfqLGrnY6sZ%2FIH4x0mPy%2F9BfBUSRVeCwNh4LzKxOoLnSZOm2teQI7sl9x6XEdMAdvWiVf4AK4T%2BVuiybIM2TgOfXQvOAAErWoQqa6P5nBWNTeULpMZrY30M0Jru16asl7GvFmbtxgGIY6DMU3ZGEsOWFvRJDZL7bHfd20ny%2FBRecJtXKZN4D%2BqMdfeS87KKwlI4BJvYn9Kfhe%2BPYp4PdqppVMNSD9L0GOqUBYkqixQkF66XhBmjGgHLSIC8fQajnSaoV6pt%2BTyJUK1hARujKKtrXqxsl4E5ZNIvSDu0n06uiBZwFL8JlcC44htwj5JGXGY54h38kLElvZDAPTi3BTzaOQ1UgZRvCIYMdj9AIFFrXaxaLR5ZGHVsgN1GdCg5d1cN2cfXjs9eQwnu6bxVmkqnXTDm24zUgpxWV2GleKKDit8a9gW2W4mOiNeG0g1cU&X-Amz-Signature=e190bc360df49d6ca0ef56807f3a069493c7401e7bc72405d76bf37d5a840573&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSOYOWK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEew7ntzqzF8TU%2FK1nyYsBKoPPNEc%2BxznL4x%2Bb6eXmGJAiEArYA1XpPtcPMo63uiRMo1usNxFeGrTwijo%2BwwDkAx%2Fiwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHzWAopbqCGZhgLJ5yrcAydzZtEvYeyFDMpDpUslImFTDH2CW%2FxxW8Fy22nPK8IvU3fo9yCO2686SRyF1qCyLwWhaEs%2FDk1GJdARA56IkeJEhKe9q38GfcxALwrYw%2FV%2BL0wIYWd2BCqbMLXaUgfnF1N2jwCCFT8fbaSiXZE3M47kWKM5PMx2O7knMfuSVr98Tn3SJjucsOvyyI4STXtHa4PV%2FZGDeh25HFvb6ktvc72Ocd3x2e%2BOWOGa8OWAWTQ9glxBgNXxIOcPTpfEoJvfbYukKCS4lrpVBB9J%2Bd7bNXqGjFDfBTyDs6dVyd6xiSa38Pkn269hUWRfuEbj2Y%2FHJy2Rna%2BRaThbUGi1uGUFMExuO16Ap0u9WI20kOuVOVrLfGYLbD3I%2FYFo62zI%2F0%2FTBeHxuKiWBOvJJeFnoVkVV7A9UHkZWrfzb9bRxfqLGrnY6sZ%2FIH4x0mPy%2F9BfBUSRVeCwNh4LzKxOoLnSZOm2teQI7sl9x6XEdMAdvWiVf4AK4T%2BVuiybIM2TgOfXQvOAAErWoQqa6P5nBWNTeULpMZrY30M0Jru16asl7GvFmbtxgGIY6DMU3ZGEsOWFvRJDZL7bHfd20ny%2FBRecJtXKZN4D%2BqMdfeS87KKwlI4BJvYn9Kfhe%2BPYp4PdqppVMNSD9L0GOqUBYkqixQkF66XhBmjGgHLSIC8fQajnSaoV6pt%2BTyJUK1hARujKKtrXqxsl4E5ZNIvSDu0n06uiBZwFL8JlcC44htwj5JGXGY54h38kLElvZDAPTi3BTzaOQ1UgZRvCIYMdj9AIFFrXaxaLR5ZGHVsgN1GdCg5d1cN2cfXjs9eQwnu6bxVmkqnXTDm24zUgpxWV2GleKKDit8a9gW2W4mOiNeG0g1cU&X-Amz-Signature=bc465ad1d06fefdfb234fe2b4317c507cf5e0055b9b6689494083e5b0250e028&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSOYOWK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEew7ntzqzF8TU%2FK1nyYsBKoPPNEc%2BxznL4x%2Bb6eXmGJAiEArYA1XpPtcPMo63uiRMo1usNxFeGrTwijo%2BwwDkAx%2Fiwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHzWAopbqCGZhgLJ5yrcAydzZtEvYeyFDMpDpUslImFTDH2CW%2FxxW8Fy22nPK8IvU3fo9yCO2686SRyF1qCyLwWhaEs%2FDk1GJdARA56IkeJEhKe9q38GfcxALwrYw%2FV%2BL0wIYWd2BCqbMLXaUgfnF1N2jwCCFT8fbaSiXZE3M47kWKM5PMx2O7knMfuSVr98Tn3SJjucsOvyyI4STXtHa4PV%2FZGDeh25HFvb6ktvc72Ocd3x2e%2BOWOGa8OWAWTQ9glxBgNXxIOcPTpfEoJvfbYukKCS4lrpVBB9J%2Bd7bNXqGjFDfBTyDs6dVyd6xiSa38Pkn269hUWRfuEbj2Y%2FHJy2Rna%2BRaThbUGi1uGUFMExuO16Ap0u9WI20kOuVOVrLfGYLbD3I%2FYFo62zI%2F0%2FTBeHxuKiWBOvJJeFnoVkVV7A9UHkZWrfzb9bRxfqLGrnY6sZ%2FIH4x0mPy%2F9BfBUSRVeCwNh4LzKxOoLnSZOm2teQI7sl9x6XEdMAdvWiVf4AK4T%2BVuiybIM2TgOfXQvOAAErWoQqa6P5nBWNTeULpMZrY30M0Jru16asl7GvFmbtxgGIY6DMU3ZGEsOWFvRJDZL7bHfd20ny%2FBRecJtXKZN4D%2BqMdfeS87KKwlI4BJvYn9Kfhe%2BPYp4PdqppVMNSD9L0GOqUBYkqixQkF66XhBmjGgHLSIC8fQajnSaoV6pt%2BTyJUK1hARujKKtrXqxsl4E5ZNIvSDu0n06uiBZwFL8JlcC44htwj5JGXGY54h38kLElvZDAPTi3BTzaOQ1UgZRvCIYMdj9AIFFrXaxaLR5ZGHVsgN1GdCg5d1cN2cfXjs9eQwnu6bxVmkqnXTDm24zUgpxWV2GleKKDit8a9gW2W4mOiNeG0g1cU&X-Amz-Signature=63145bfd4483042368d42650bd1b0b9c74b8de6a8ffe281a41f8ea13bbdb508f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSOYOWK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEew7ntzqzF8TU%2FK1nyYsBKoPPNEc%2BxznL4x%2Bb6eXmGJAiEArYA1XpPtcPMo63uiRMo1usNxFeGrTwijo%2BwwDkAx%2Fiwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHzWAopbqCGZhgLJ5yrcAydzZtEvYeyFDMpDpUslImFTDH2CW%2FxxW8Fy22nPK8IvU3fo9yCO2686SRyF1qCyLwWhaEs%2FDk1GJdARA56IkeJEhKe9q38GfcxALwrYw%2FV%2BL0wIYWd2BCqbMLXaUgfnF1N2jwCCFT8fbaSiXZE3M47kWKM5PMx2O7knMfuSVr98Tn3SJjucsOvyyI4STXtHa4PV%2FZGDeh25HFvb6ktvc72Ocd3x2e%2BOWOGa8OWAWTQ9glxBgNXxIOcPTpfEoJvfbYukKCS4lrpVBB9J%2Bd7bNXqGjFDfBTyDs6dVyd6xiSa38Pkn269hUWRfuEbj2Y%2FHJy2Rna%2BRaThbUGi1uGUFMExuO16Ap0u9WI20kOuVOVrLfGYLbD3I%2FYFo62zI%2F0%2FTBeHxuKiWBOvJJeFnoVkVV7A9UHkZWrfzb9bRxfqLGrnY6sZ%2FIH4x0mPy%2F9BfBUSRVeCwNh4LzKxOoLnSZOm2teQI7sl9x6XEdMAdvWiVf4AK4T%2BVuiybIM2TgOfXQvOAAErWoQqa6P5nBWNTeULpMZrY30M0Jru16asl7GvFmbtxgGIY6DMU3ZGEsOWFvRJDZL7bHfd20ny%2FBRecJtXKZN4D%2BqMdfeS87KKwlI4BJvYn9Kfhe%2BPYp4PdqppVMNSD9L0GOqUBYkqixQkF66XhBmjGgHLSIC8fQajnSaoV6pt%2BTyJUK1hARujKKtrXqxsl4E5ZNIvSDu0n06uiBZwFL8JlcC44htwj5JGXGY54h38kLElvZDAPTi3BTzaOQ1UgZRvCIYMdj9AIFFrXaxaLR5ZGHVsgN1GdCg5d1cN2cfXjs9eQwnu6bxVmkqnXTDm24zUgpxWV2GleKKDit8a9gW2W4mOiNeG0g1cU&X-Amz-Signature=89ae219634c58f7fd444db3941c2e418f8c6f0d9be6a5843ccdc94eb13154586&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
