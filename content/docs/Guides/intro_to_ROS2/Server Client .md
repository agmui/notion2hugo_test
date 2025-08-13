---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMO7EW44%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCixcCHNBh0UlyCIh7LpVITvDy01sr99YJyyaVUsdRJ9AIhANnTFAnZXwKS6rqt1ip%2Bwdqbo1Iq0g2xf9QaCK7uAhbdKv8DCCMQABoMNjM3NDIzMTgzODA1Igy6g%2FgrIlPQofCZNKYq3ANBjiGlYWotLl9AaonJ4LTCNX32drNOJRVN5axtDypVtMtFnquamLeB7Si%2B99Goin2bA9csJlYi71K5d%2BbmdNUFHC%2BxN%2Bg2bg6yYbXFhrxqw9ID%2Fas%2BVXlVDf9zvhB%2FL96dFYclXfxqZXoRvS2MFfp7KaU%2FfScqSitlMUMukzQSrR76SLjPDPFOlH7pj5G1Mp%2F4YP2Q4nyCIw3zEVReAHIWMqvitliXVzUgAoTZopM0pBvw8cSyEWQlvH8PwrwZi9bUHZKvipB3LGDpEuPnFYt9bSsN8c%2Fa1M5unKbTPFVk%2FjK1BlyhKOew2C5lmSi2Ad%2FSwB6O%2FrMxbwajOlfkutIo0UIBAkH627rEesTFNWlxnAyBWOddLbkPqrlqdL72ScjbkAGu8YlnzSeee0pLXF3817wbzYmvVoCKIB6Nu7V79DYeDB5XcOExAa4updi%2B4deEbLkdSItezkASPMg10VVUpyB6%2Bqa7lVOui1uATL9rRPXyjCDKg6BrLiOATjocF4TR0LeZbaVQLmF%2B0hLNG9pt6g7dgPEQTzpPVImbc%2Bl4BEE9P%2FLFvpRVC3hin%2FxkL%2FTxrqBlOv%2Fe%2BIa%2FK6q4gH%2F6fX21G9RMvelc6Ax3CjncqyQOzUbRG8DmxeWT1jCG2e%2FEBjqkAVQH%2BBE45CtSShzyD3LeN1T2alX4FemL3oUTmTvIBaSKDN%2FNK0x1xe%2BNSXlp3rSdGB7999PL%2F7u0iKPzYu4MDpxlPnTsMD7YiD0h929uxmvE%2F%2Fi5BqaWiLpODiGc7vUXhTclE31a20F3aubK1Ldzyrio6K3OzMwmICAmA5MajsqJWSuMsmD5SmrIa5%2BbtJldRdph%2BRfkR%2FfRZeit7sXQLzRN5jaN&X-Amz-Signature=e69453ae86c57e7d885720da720beb20d53636a5be2db873e987bed81f4365b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMO7EW44%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCixcCHNBh0UlyCIh7LpVITvDy01sr99YJyyaVUsdRJ9AIhANnTFAnZXwKS6rqt1ip%2Bwdqbo1Iq0g2xf9QaCK7uAhbdKv8DCCMQABoMNjM3NDIzMTgzODA1Igy6g%2FgrIlPQofCZNKYq3ANBjiGlYWotLl9AaonJ4LTCNX32drNOJRVN5axtDypVtMtFnquamLeB7Si%2B99Goin2bA9csJlYi71K5d%2BbmdNUFHC%2BxN%2Bg2bg6yYbXFhrxqw9ID%2Fas%2BVXlVDf9zvhB%2FL96dFYclXfxqZXoRvS2MFfp7KaU%2FfScqSitlMUMukzQSrR76SLjPDPFOlH7pj5G1Mp%2F4YP2Q4nyCIw3zEVReAHIWMqvitliXVzUgAoTZopM0pBvw8cSyEWQlvH8PwrwZi9bUHZKvipB3LGDpEuPnFYt9bSsN8c%2Fa1M5unKbTPFVk%2FjK1BlyhKOew2C5lmSi2Ad%2FSwB6O%2FrMxbwajOlfkutIo0UIBAkH627rEesTFNWlxnAyBWOddLbkPqrlqdL72ScjbkAGu8YlnzSeee0pLXF3817wbzYmvVoCKIB6Nu7V79DYeDB5XcOExAa4updi%2B4deEbLkdSItezkASPMg10VVUpyB6%2Bqa7lVOui1uATL9rRPXyjCDKg6BrLiOATjocF4TR0LeZbaVQLmF%2B0hLNG9pt6g7dgPEQTzpPVImbc%2Bl4BEE9P%2FLFvpRVC3hin%2FxkL%2FTxrqBlOv%2Fe%2BIa%2FK6q4gH%2F6fX21G9RMvelc6Ax3CjncqyQOzUbRG8DmxeWT1jCG2e%2FEBjqkAVQH%2BBE45CtSShzyD3LeN1T2alX4FemL3oUTmTvIBaSKDN%2FNK0x1xe%2BNSXlp3rSdGB7999PL%2F7u0iKPzYu4MDpxlPnTsMD7YiD0h929uxmvE%2F%2Fi5BqaWiLpODiGc7vUXhTclE31a20F3aubK1Ldzyrio6K3OzMwmICAmA5MajsqJWSuMsmD5SmrIa5%2BbtJldRdph%2BRfkR%2FfRZeit7sXQLzRN5jaN&X-Amz-Signature=e8e368609425aa847cc3063d1c88d684081b7289a21b7cc9ed4ba7e53a36d73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMO7EW44%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCixcCHNBh0UlyCIh7LpVITvDy01sr99YJyyaVUsdRJ9AIhANnTFAnZXwKS6rqt1ip%2Bwdqbo1Iq0g2xf9QaCK7uAhbdKv8DCCMQABoMNjM3NDIzMTgzODA1Igy6g%2FgrIlPQofCZNKYq3ANBjiGlYWotLl9AaonJ4LTCNX32drNOJRVN5axtDypVtMtFnquamLeB7Si%2B99Goin2bA9csJlYi71K5d%2BbmdNUFHC%2BxN%2Bg2bg6yYbXFhrxqw9ID%2Fas%2BVXlVDf9zvhB%2FL96dFYclXfxqZXoRvS2MFfp7KaU%2FfScqSitlMUMukzQSrR76SLjPDPFOlH7pj5G1Mp%2F4YP2Q4nyCIw3zEVReAHIWMqvitliXVzUgAoTZopM0pBvw8cSyEWQlvH8PwrwZi9bUHZKvipB3LGDpEuPnFYt9bSsN8c%2Fa1M5unKbTPFVk%2FjK1BlyhKOew2C5lmSi2Ad%2FSwB6O%2FrMxbwajOlfkutIo0UIBAkH627rEesTFNWlxnAyBWOddLbkPqrlqdL72ScjbkAGu8YlnzSeee0pLXF3817wbzYmvVoCKIB6Nu7V79DYeDB5XcOExAa4updi%2B4deEbLkdSItezkASPMg10VVUpyB6%2Bqa7lVOui1uATL9rRPXyjCDKg6BrLiOATjocF4TR0LeZbaVQLmF%2B0hLNG9pt6g7dgPEQTzpPVImbc%2Bl4BEE9P%2FLFvpRVC3hin%2FxkL%2FTxrqBlOv%2Fe%2BIa%2FK6q4gH%2F6fX21G9RMvelc6Ax3CjncqyQOzUbRG8DmxeWT1jCG2e%2FEBjqkAVQH%2BBE45CtSShzyD3LeN1T2alX4FemL3oUTmTvIBaSKDN%2FNK0x1xe%2BNSXlp3rSdGB7999PL%2F7u0iKPzYu4MDpxlPnTsMD7YiD0h929uxmvE%2F%2Fi5BqaWiLpODiGc7vUXhTclE31a20F3aubK1Ldzyrio6K3OzMwmICAmA5MajsqJWSuMsmD5SmrIa5%2BbtJldRdph%2BRfkR%2FfRZeit7sXQLzRN5jaN&X-Amz-Signature=85b700ad8b190e75670296de2efeb7827c91c601150a1e92d20a3251276c515e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMO7EW44%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCixcCHNBh0UlyCIh7LpVITvDy01sr99YJyyaVUsdRJ9AIhANnTFAnZXwKS6rqt1ip%2Bwdqbo1Iq0g2xf9QaCK7uAhbdKv8DCCMQABoMNjM3NDIzMTgzODA1Igy6g%2FgrIlPQofCZNKYq3ANBjiGlYWotLl9AaonJ4LTCNX32drNOJRVN5axtDypVtMtFnquamLeB7Si%2B99Goin2bA9csJlYi71K5d%2BbmdNUFHC%2BxN%2Bg2bg6yYbXFhrxqw9ID%2Fas%2BVXlVDf9zvhB%2FL96dFYclXfxqZXoRvS2MFfp7KaU%2FfScqSitlMUMukzQSrR76SLjPDPFOlH7pj5G1Mp%2F4YP2Q4nyCIw3zEVReAHIWMqvitliXVzUgAoTZopM0pBvw8cSyEWQlvH8PwrwZi9bUHZKvipB3LGDpEuPnFYt9bSsN8c%2Fa1M5unKbTPFVk%2FjK1BlyhKOew2C5lmSi2Ad%2FSwB6O%2FrMxbwajOlfkutIo0UIBAkH627rEesTFNWlxnAyBWOddLbkPqrlqdL72ScjbkAGu8YlnzSeee0pLXF3817wbzYmvVoCKIB6Nu7V79DYeDB5XcOExAa4updi%2B4deEbLkdSItezkASPMg10VVUpyB6%2Bqa7lVOui1uATL9rRPXyjCDKg6BrLiOATjocF4TR0LeZbaVQLmF%2B0hLNG9pt6g7dgPEQTzpPVImbc%2Bl4BEE9P%2FLFvpRVC3hin%2FxkL%2FTxrqBlOv%2Fe%2BIa%2FK6q4gH%2F6fX21G9RMvelc6Ax3CjncqyQOzUbRG8DmxeWT1jCG2e%2FEBjqkAVQH%2BBE45CtSShzyD3LeN1T2alX4FemL3oUTmTvIBaSKDN%2FNK0x1xe%2BNSXlp3rSdGB7999PL%2F7u0iKPzYu4MDpxlPnTsMD7YiD0h929uxmvE%2F%2Fi5BqaWiLpODiGc7vUXhTclE31a20F3aubK1Ldzyrio6K3OzMwmICAmA5MajsqJWSuMsmD5SmrIa5%2BbtJldRdph%2BRfkR%2FfRZeit7sXQLzRN5jaN&X-Amz-Signature=3829a010aee7e2ce09cd6b6bcf9ed1d3a5365879f4caaafb14cda895a0410355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMO7EW44%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCixcCHNBh0UlyCIh7LpVITvDy01sr99YJyyaVUsdRJ9AIhANnTFAnZXwKS6rqt1ip%2Bwdqbo1Iq0g2xf9QaCK7uAhbdKv8DCCMQABoMNjM3NDIzMTgzODA1Igy6g%2FgrIlPQofCZNKYq3ANBjiGlYWotLl9AaonJ4LTCNX32drNOJRVN5axtDypVtMtFnquamLeB7Si%2B99Goin2bA9csJlYi71K5d%2BbmdNUFHC%2BxN%2Bg2bg6yYbXFhrxqw9ID%2Fas%2BVXlVDf9zvhB%2FL96dFYclXfxqZXoRvS2MFfp7KaU%2FfScqSitlMUMukzQSrR76SLjPDPFOlH7pj5G1Mp%2F4YP2Q4nyCIw3zEVReAHIWMqvitliXVzUgAoTZopM0pBvw8cSyEWQlvH8PwrwZi9bUHZKvipB3LGDpEuPnFYt9bSsN8c%2Fa1M5unKbTPFVk%2FjK1BlyhKOew2C5lmSi2Ad%2FSwB6O%2FrMxbwajOlfkutIo0UIBAkH627rEesTFNWlxnAyBWOddLbkPqrlqdL72ScjbkAGu8YlnzSeee0pLXF3817wbzYmvVoCKIB6Nu7V79DYeDB5XcOExAa4updi%2B4deEbLkdSItezkASPMg10VVUpyB6%2Bqa7lVOui1uATL9rRPXyjCDKg6BrLiOATjocF4TR0LeZbaVQLmF%2B0hLNG9pt6g7dgPEQTzpPVImbc%2Bl4BEE9P%2FLFvpRVC3hin%2FxkL%2FTxrqBlOv%2Fe%2BIa%2FK6q4gH%2F6fX21G9RMvelc6Ax3CjncqyQOzUbRG8DmxeWT1jCG2e%2FEBjqkAVQH%2BBE45CtSShzyD3LeN1T2alX4FemL3oUTmTvIBaSKDN%2FNK0x1xe%2BNSXlp3rSdGB7999PL%2F7u0iKPzYu4MDpxlPnTsMD7YiD0h929uxmvE%2F%2Fi5BqaWiLpODiGc7vUXhTclE31a20F3aubK1Ldzyrio6K3OzMwmICAmA5MajsqJWSuMsmD5SmrIa5%2BbtJldRdph%2BRfkR%2FfRZeit7sXQLzRN5jaN&X-Amz-Signature=eebfcf10da1621d395d319af4e04b8c325da11fd5ee7af9b68b38c68e5354642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
