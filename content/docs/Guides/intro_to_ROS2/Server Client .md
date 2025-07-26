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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IVBCH3U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFLwJopa0qCVaVFxFWfqfUUopJNlpFegI3SXRpFKoyc2AiEAozo%2FlLVP4D9zA9heDzOBcWUHW1voDarsJMWLLwROdrMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLV4Jg2d79NOY3AZ7SrcA3HJL5XNtoNXhDNPIdDK0aQ914lCTXGLOt40D1g24wKuDzNCdWvDX6rQEkY60ZB7zKOCCK77flpLXBYrhTRhNObsEQPvnFm9Ts8DjMOmsk21RbUdyg3lD3lhWxP1k1gjenWZ%2BARb80lItPJj1XxJd07%2FjtR%2Bz8PIArKj2lSi9wvFUpncHBHkzBuKShixFLY44q3hOlkZvJP98LBH1vT8W1jXdhPgCTJGOji8o%2BdCX6evLOHGQQ8SvG%2Fw2r2iOZRxwjgGimEQop5VAEnOY0z6slh3n4O2X6XIqqF2L8iM%2BFJan0xpVjXj0Wg3hRJfQGUWxkGbkWw0DaR0cquuxchuoNhmwO4XN5Fn6cQu1NwUznUXG%2F83G2qh1UGU4SzJ6vzyGFzeCztnnCsdkWow6XziV65LM2EGwvTSV4NhWi5UGLsGUf8PXezP8g5Sd71KHgOeXpB%2BM0T7mn%2Fg4X0BNL9K9kata1eYQKEFxIFpYpVoxVdZgerWdAQ389lmJfcDbSm0fR2YO50Wsiz2e1wXgcfBk%2FXVDSENjdHTQEgTYACsY5ZIA0pCIR49NB95nz%2FAT31pAOF68n53mENKQl3qn3Ha%2BAU%2B1Iv%2B7AQ6zcCFTh5PoaU9InP6x2CBpW072FBLMOasksQGOqUB0PfVlL2FCf1qSQGDmOxhbpEYADZAIajdVhA63E9g%2BbhphP9HnGH6ORiaAk0gsXbSXiJiyXo9dALJdcxRd7t2bOH92F3lrt6%2BvulS%2FRmCyBZEoUbEHrJpNksbfVfZ87vEeb7%2FEFYz7GB%2Bc25Rf6%2BunFaa%2Bj%2FOHSy3teJmFSH%2B%2FpNK1RvA4mZN3DUQArm8V1ukTnH%2FsrP9BIPoInqUoL0Lr7pFPPXG&X-Amz-Signature=e3a11439d682a1d60d2b81907ea7cfbc8c4f2c044983a3e2327c944c03056727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IVBCH3U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFLwJopa0qCVaVFxFWfqfUUopJNlpFegI3SXRpFKoyc2AiEAozo%2FlLVP4D9zA9heDzOBcWUHW1voDarsJMWLLwROdrMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLV4Jg2d79NOY3AZ7SrcA3HJL5XNtoNXhDNPIdDK0aQ914lCTXGLOt40D1g24wKuDzNCdWvDX6rQEkY60ZB7zKOCCK77flpLXBYrhTRhNObsEQPvnFm9Ts8DjMOmsk21RbUdyg3lD3lhWxP1k1gjenWZ%2BARb80lItPJj1XxJd07%2FjtR%2Bz8PIArKj2lSi9wvFUpncHBHkzBuKShixFLY44q3hOlkZvJP98LBH1vT8W1jXdhPgCTJGOji8o%2BdCX6evLOHGQQ8SvG%2Fw2r2iOZRxwjgGimEQop5VAEnOY0z6slh3n4O2X6XIqqF2L8iM%2BFJan0xpVjXj0Wg3hRJfQGUWxkGbkWw0DaR0cquuxchuoNhmwO4XN5Fn6cQu1NwUznUXG%2F83G2qh1UGU4SzJ6vzyGFzeCztnnCsdkWow6XziV65LM2EGwvTSV4NhWi5UGLsGUf8PXezP8g5Sd71KHgOeXpB%2BM0T7mn%2Fg4X0BNL9K9kata1eYQKEFxIFpYpVoxVdZgerWdAQ389lmJfcDbSm0fR2YO50Wsiz2e1wXgcfBk%2FXVDSENjdHTQEgTYACsY5ZIA0pCIR49NB95nz%2FAT31pAOF68n53mENKQl3qn3Ha%2BAU%2B1Iv%2B7AQ6zcCFTh5PoaU9InP6x2CBpW072FBLMOasksQGOqUB0PfVlL2FCf1qSQGDmOxhbpEYADZAIajdVhA63E9g%2BbhphP9HnGH6ORiaAk0gsXbSXiJiyXo9dALJdcxRd7t2bOH92F3lrt6%2BvulS%2FRmCyBZEoUbEHrJpNksbfVfZ87vEeb7%2FEFYz7GB%2Bc25Rf6%2BunFaa%2Bj%2FOHSy3teJmFSH%2B%2FpNK1RvA4mZN3DUQArm8V1ukTnH%2FsrP9BIPoInqUoL0Lr7pFPPXG&X-Amz-Signature=0a73a77b89e272bd4f13dad6e2b3d7652c20b0b7d40289048789a94b5430c576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IVBCH3U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFLwJopa0qCVaVFxFWfqfUUopJNlpFegI3SXRpFKoyc2AiEAozo%2FlLVP4D9zA9heDzOBcWUHW1voDarsJMWLLwROdrMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLV4Jg2d79NOY3AZ7SrcA3HJL5XNtoNXhDNPIdDK0aQ914lCTXGLOt40D1g24wKuDzNCdWvDX6rQEkY60ZB7zKOCCK77flpLXBYrhTRhNObsEQPvnFm9Ts8DjMOmsk21RbUdyg3lD3lhWxP1k1gjenWZ%2BARb80lItPJj1XxJd07%2FjtR%2Bz8PIArKj2lSi9wvFUpncHBHkzBuKShixFLY44q3hOlkZvJP98LBH1vT8W1jXdhPgCTJGOji8o%2BdCX6evLOHGQQ8SvG%2Fw2r2iOZRxwjgGimEQop5VAEnOY0z6slh3n4O2X6XIqqF2L8iM%2BFJan0xpVjXj0Wg3hRJfQGUWxkGbkWw0DaR0cquuxchuoNhmwO4XN5Fn6cQu1NwUznUXG%2F83G2qh1UGU4SzJ6vzyGFzeCztnnCsdkWow6XziV65LM2EGwvTSV4NhWi5UGLsGUf8PXezP8g5Sd71KHgOeXpB%2BM0T7mn%2Fg4X0BNL9K9kata1eYQKEFxIFpYpVoxVdZgerWdAQ389lmJfcDbSm0fR2YO50Wsiz2e1wXgcfBk%2FXVDSENjdHTQEgTYACsY5ZIA0pCIR49NB95nz%2FAT31pAOF68n53mENKQl3qn3Ha%2BAU%2B1Iv%2B7AQ6zcCFTh5PoaU9InP6x2CBpW072FBLMOasksQGOqUB0PfVlL2FCf1qSQGDmOxhbpEYADZAIajdVhA63E9g%2BbhphP9HnGH6ORiaAk0gsXbSXiJiyXo9dALJdcxRd7t2bOH92F3lrt6%2BvulS%2FRmCyBZEoUbEHrJpNksbfVfZ87vEeb7%2FEFYz7GB%2Bc25Rf6%2BunFaa%2Bj%2FOHSy3teJmFSH%2B%2FpNK1RvA4mZN3DUQArm8V1ukTnH%2FsrP9BIPoInqUoL0Lr7pFPPXG&X-Amz-Signature=dc92fac14e7d0c87bcd7845827644e83def53abeed080e29ecb8b5cd6e434173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IVBCH3U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFLwJopa0qCVaVFxFWfqfUUopJNlpFegI3SXRpFKoyc2AiEAozo%2FlLVP4D9zA9heDzOBcWUHW1voDarsJMWLLwROdrMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLV4Jg2d79NOY3AZ7SrcA3HJL5XNtoNXhDNPIdDK0aQ914lCTXGLOt40D1g24wKuDzNCdWvDX6rQEkY60ZB7zKOCCK77flpLXBYrhTRhNObsEQPvnFm9Ts8DjMOmsk21RbUdyg3lD3lhWxP1k1gjenWZ%2BARb80lItPJj1XxJd07%2FjtR%2Bz8PIArKj2lSi9wvFUpncHBHkzBuKShixFLY44q3hOlkZvJP98LBH1vT8W1jXdhPgCTJGOji8o%2BdCX6evLOHGQQ8SvG%2Fw2r2iOZRxwjgGimEQop5VAEnOY0z6slh3n4O2X6XIqqF2L8iM%2BFJan0xpVjXj0Wg3hRJfQGUWxkGbkWw0DaR0cquuxchuoNhmwO4XN5Fn6cQu1NwUznUXG%2F83G2qh1UGU4SzJ6vzyGFzeCztnnCsdkWow6XziV65LM2EGwvTSV4NhWi5UGLsGUf8PXezP8g5Sd71KHgOeXpB%2BM0T7mn%2Fg4X0BNL9K9kata1eYQKEFxIFpYpVoxVdZgerWdAQ389lmJfcDbSm0fR2YO50Wsiz2e1wXgcfBk%2FXVDSENjdHTQEgTYACsY5ZIA0pCIR49NB95nz%2FAT31pAOF68n53mENKQl3qn3Ha%2BAU%2B1Iv%2B7AQ6zcCFTh5PoaU9InP6x2CBpW072FBLMOasksQGOqUB0PfVlL2FCf1qSQGDmOxhbpEYADZAIajdVhA63E9g%2BbhphP9HnGH6ORiaAk0gsXbSXiJiyXo9dALJdcxRd7t2bOH92F3lrt6%2BvulS%2FRmCyBZEoUbEHrJpNksbfVfZ87vEeb7%2FEFYz7GB%2Bc25Rf6%2BunFaa%2Bj%2FOHSy3teJmFSH%2B%2FpNK1RvA4mZN3DUQArm8V1ukTnH%2FsrP9BIPoInqUoL0Lr7pFPPXG&X-Amz-Signature=f7f8fd0b527d267fc13ff09045e7352ca0d1237f10989e56e414332e42f9b252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IVBCH3U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFLwJopa0qCVaVFxFWfqfUUopJNlpFegI3SXRpFKoyc2AiEAozo%2FlLVP4D9zA9heDzOBcWUHW1voDarsJMWLLwROdrMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLV4Jg2d79NOY3AZ7SrcA3HJL5XNtoNXhDNPIdDK0aQ914lCTXGLOt40D1g24wKuDzNCdWvDX6rQEkY60ZB7zKOCCK77flpLXBYrhTRhNObsEQPvnFm9Ts8DjMOmsk21RbUdyg3lD3lhWxP1k1gjenWZ%2BARb80lItPJj1XxJd07%2FjtR%2Bz8PIArKj2lSi9wvFUpncHBHkzBuKShixFLY44q3hOlkZvJP98LBH1vT8W1jXdhPgCTJGOji8o%2BdCX6evLOHGQQ8SvG%2Fw2r2iOZRxwjgGimEQop5VAEnOY0z6slh3n4O2X6XIqqF2L8iM%2BFJan0xpVjXj0Wg3hRJfQGUWxkGbkWw0DaR0cquuxchuoNhmwO4XN5Fn6cQu1NwUznUXG%2F83G2qh1UGU4SzJ6vzyGFzeCztnnCsdkWow6XziV65LM2EGwvTSV4NhWi5UGLsGUf8PXezP8g5Sd71KHgOeXpB%2BM0T7mn%2Fg4X0BNL9K9kata1eYQKEFxIFpYpVoxVdZgerWdAQ389lmJfcDbSm0fR2YO50Wsiz2e1wXgcfBk%2FXVDSENjdHTQEgTYACsY5ZIA0pCIR49NB95nz%2FAT31pAOF68n53mENKQl3qn3Ha%2BAU%2B1Iv%2B7AQ6zcCFTh5PoaU9InP6x2CBpW072FBLMOasksQGOqUB0PfVlL2FCf1qSQGDmOxhbpEYADZAIajdVhA63E9g%2BbhphP9HnGH6ORiaAk0gsXbSXiJiyXo9dALJdcxRd7t2bOH92F3lrt6%2BvulS%2FRmCyBZEoUbEHrJpNksbfVfZ87vEeb7%2FEFYz7GB%2Bc25Rf6%2BunFaa%2Bj%2FOHSy3teJmFSH%2B%2FpNK1RvA4mZN3DUQArm8V1ukTnH%2FsrP9BIPoInqUoL0Lr7pFPPXG&X-Amz-Signature=421ed776ef0ccf78ff12454101eb3961eaf0a7a4528b463a95f312c4a0b7c087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
