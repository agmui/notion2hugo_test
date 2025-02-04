---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNSKA6N%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA4QlFp0mFYqpiVtAI3kyEnGbrLGTzLee5IxYZ3awObZAiBFGlzt0LhfyjdHlgcoPGEkl2pVCO8BXD7gPokpbOlx7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmz0NLdggUbUsl37qKtwDp9mUwmHKiORxWmPjkHzHNameQNA56misNUHsEKo45tmQtr2Axh8p7q74zfGiwUuwUIHHNM9nj6QesT379o9Sl%2B961sNqbjCUzPmRLtxDdrFEXUviNg4nW4iW07f7%2BPF2wBBbgExRj9iwKaD4zgaME4U9B5cI%2FlEGpQnEQdsKCqoFclsruVRPgy2ZtZ9rXOUPSBIpafNhvi8cq26dYz9xw54IAXApYQIJV4H9J0PhFCyI03KXJUUb36pw8pq4luk%2F66cuwYJUoU8TvcWCl%2BJVpAh7IzyCu5E5E9YtdTskY%2Bp4TZKd5%2BDHcm4N0JLLC6f749CcvyB5UQmeYi54kCfC3Bj3C3BXTxHdziydhEd6NMf9g21jnWuWfblKGydcqhF27l3r7fB9uI6wCFH8tdTiEvlQXLonmlTP9rYz4%2BZaz%2B0MYsydCN7FcPBnEFCZ8BxreXjsfgY%2FqDfTOBe2jcCrJihHBUe00RhBG84rm40Zk5cwTs7HV1MMgegYNQKg%2FKXDwDYKbo3UUdcWRptUUmtL%2B9z%2Fkb7pb9SAxj7HaIU2t9ZICkLOdRxzEX9iRqLvWeiLNitsyNMNfE5PT552wNHCPiLE6Wap9KhVnvTkZSTnVI6J2GWOc9e0tXRgOscwhJWKvQY6pgG1rtbkQm077KHTgcaOHRseL8dz7kLTRZJudYk8lRs357va09AE9HPKEcpQ6RiB05up2EeOsX8V0fxTbNPVDLd%2B5jR25kqc3jH%2B5vJpEzfTb1cEgvUL0cNDbHzxpLLyFySTp0X5E8a6Lvn7Ty7iov7YIxDvN0DFGYrohJ1SRiSPHAxm32BvFwMFV2BXPaZXh%2BKi1IOeblULNohz0yODNrk4JtQv26sF&X-Amz-Signature=55e9d3348a90b173c10bd86d9e27d2dad58f24aa1af46f14c14cd6940663de80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNSKA6N%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA4QlFp0mFYqpiVtAI3kyEnGbrLGTzLee5IxYZ3awObZAiBFGlzt0LhfyjdHlgcoPGEkl2pVCO8BXD7gPokpbOlx7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmz0NLdggUbUsl37qKtwDp9mUwmHKiORxWmPjkHzHNameQNA56misNUHsEKo45tmQtr2Axh8p7q74zfGiwUuwUIHHNM9nj6QesT379o9Sl%2B961sNqbjCUzPmRLtxDdrFEXUviNg4nW4iW07f7%2BPF2wBBbgExRj9iwKaD4zgaME4U9B5cI%2FlEGpQnEQdsKCqoFclsruVRPgy2ZtZ9rXOUPSBIpafNhvi8cq26dYz9xw54IAXApYQIJV4H9J0PhFCyI03KXJUUb36pw8pq4luk%2F66cuwYJUoU8TvcWCl%2BJVpAh7IzyCu5E5E9YtdTskY%2Bp4TZKd5%2BDHcm4N0JLLC6f749CcvyB5UQmeYi54kCfC3Bj3C3BXTxHdziydhEd6NMf9g21jnWuWfblKGydcqhF27l3r7fB9uI6wCFH8tdTiEvlQXLonmlTP9rYz4%2BZaz%2B0MYsydCN7FcPBnEFCZ8BxreXjsfgY%2FqDfTOBe2jcCrJihHBUe00RhBG84rm40Zk5cwTs7HV1MMgegYNQKg%2FKXDwDYKbo3UUdcWRptUUmtL%2B9z%2Fkb7pb9SAxj7HaIU2t9ZICkLOdRxzEX9iRqLvWeiLNitsyNMNfE5PT552wNHCPiLE6Wap9KhVnvTkZSTnVI6J2GWOc9e0tXRgOscwhJWKvQY6pgG1rtbkQm077KHTgcaOHRseL8dz7kLTRZJudYk8lRs357va09AE9HPKEcpQ6RiB05up2EeOsX8V0fxTbNPVDLd%2B5jR25kqc3jH%2B5vJpEzfTb1cEgvUL0cNDbHzxpLLyFySTp0X5E8a6Lvn7Ty7iov7YIxDvN0DFGYrohJ1SRiSPHAxm32BvFwMFV2BXPaZXh%2BKi1IOeblULNohz0yODNrk4JtQv26sF&X-Amz-Signature=b0222cc70bb2021256bf65f32aeba016e6d4f82a4338fd806254a5de2f063dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNSKA6N%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA4QlFp0mFYqpiVtAI3kyEnGbrLGTzLee5IxYZ3awObZAiBFGlzt0LhfyjdHlgcoPGEkl2pVCO8BXD7gPokpbOlx7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmz0NLdggUbUsl37qKtwDp9mUwmHKiORxWmPjkHzHNameQNA56misNUHsEKo45tmQtr2Axh8p7q74zfGiwUuwUIHHNM9nj6QesT379o9Sl%2B961sNqbjCUzPmRLtxDdrFEXUviNg4nW4iW07f7%2BPF2wBBbgExRj9iwKaD4zgaME4U9B5cI%2FlEGpQnEQdsKCqoFclsruVRPgy2ZtZ9rXOUPSBIpafNhvi8cq26dYz9xw54IAXApYQIJV4H9J0PhFCyI03KXJUUb36pw8pq4luk%2F66cuwYJUoU8TvcWCl%2BJVpAh7IzyCu5E5E9YtdTskY%2Bp4TZKd5%2BDHcm4N0JLLC6f749CcvyB5UQmeYi54kCfC3Bj3C3BXTxHdziydhEd6NMf9g21jnWuWfblKGydcqhF27l3r7fB9uI6wCFH8tdTiEvlQXLonmlTP9rYz4%2BZaz%2B0MYsydCN7FcPBnEFCZ8BxreXjsfgY%2FqDfTOBe2jcCrJihHBUe00RhBG84rm40Zk5cwTs7HV1MMgegYNQKg%2FKXDwDYKbo3UUdcWRptUUmtL%2B9z%2Fkb7pb9SAxj7HaIU2t9ZICkLOdRxzEX9iRqLvWeiLNitsyNMNfE5PT552wNHCPiLE6Wap9KhVnvTkZSTnVI6J2GWOc9e0tXRgOscwhJWKvQY6pgG1rtbkQm077KHTgcaOHRseL8dz7kLTRZJudYk8lRs357va09AE9HPKEcpQ6RiB05up2EeOsX8V0fxTbNPVDLd%2B5jR25kqc3jH%2B5vJpEzfTb1cEgvUL0cNDbHzxpLLyFySTp0X5E8a6Lvn7Ty7iov7YIxDvN0DFGYrohJ1SRiSPHAxm32BvFwMFV2BXPaZXh%2BKi1IOeblULNohz0yODNrk4JtQv26sF&X-Amz-Signature=55b1aecc6d07e35f15297f37d4858469b93194a14818fc9714a9fd56ac94c840&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNSKA6N%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA4QlFp0mFYqpiVtAI3kyEnGbrLGTzLee5IxYZ3awObZAiBFGlzt0LhfyjdHlgcoPGEkl2pVCO8BXD7gPokpbOlx7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmz0NLdggUbUsl37qKtwDp9mUwmHKiORxWmPjkHzHNameQNA56misNUHsEKo45tmQtr2Axh8p7q74zfGiwUuwUIHHNM9nj6QesT379o9Sl%2B961sNqbjCUzPmRLtxDdrFEXUviNg4nW4iW07f7%2BPF2wBBbgExRj9iwKaD4zgaME4U9B5cI%2FlEGpQnEQdsKCqoFclsruVRPgy2ZtZ9rXOUPSBIpafNhvi8cq26dYz9xw54IAXApYQIJV4H9J0PhFCyI03KXJUUb36pw8pq4luk%2F66cuwYJUoU8TvcWCl%2BJVpAh7IzyCu5E5E9YtdTskY%2Bp4TZKd5%2BDHcm4N0JLLC6f749CcvyB5UQmeYi54kCfC3Bj3C3BXTxHdziydhEd6NMf9g21jnWuWfblKGydcqhF27l3r7fB9uI6wCFH8tdTiEvlQXLonmlTP9rYz4%2BZaz%2B0MYsydCN7FcPBnEFCZ8BxreXjsfgY%2FqDfTOBe2jcCrJihHBUe00RhBG84rm40Zk5cwTs7HV1MMgegYNQKg%2FKXDwDYKbo3UUdcWRptUUmtL%2B9z%2Fkb7pb9SAxj7HaIU2t9ZICkLOdRxzEX9iRqLvWeiLNitsyNMNfE5PT552wNHCPiLE6Wap9KhVnvTkZSTnVI6J2GWOc9e0tXRgOscwhJWKvQY6pgG1rtbkQm077KHTgcaOHRseL8dz7kLTRZJudYk8lRs357va09AE9HPKEcpQ6RiB05up2EeOsX8V0fxTbNPVDLd%2B5jR25kqc3jH%2B5vJpEzfTb1cEgvUL0cNDbHzxpLLyFySTp0X5E8a6Lvn7Ty7iov7YIxDvN0DFGYrohJ1SRiSPHAxm32BvFwMFV2BXPaZXh%2BKi1IOeblULNohz0yODNrk4JtQv26sF&X-Amz-Signature=1c93523e17cacf2defe252089cfa859b518719f33f322c85052d4a31c623c943&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNSKA6N%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA4QlFp0mFYqpiVtAI3kyEnGbrLGTzLee5IxYZ3awObZAiBFGlzt0LhfyjdHlgcoPGEkl2pVCO8BXD7gPokpbOlx7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmz0NLdggUbUsl37qKtwDp9mUwmHKiORxWmPjkHzHNameQNA56misNUHsEKo45tmQtr2Axh8p7q74zfGiwUuwUIHHNM9nj6QesT379o9Sl%2B961sNqbjCUzPmRLtxDdrFEXUviNg4nW4iW07f7%2BPF2wBBbgExRj9iwKaD4zgaME4U9B5cI%2FlEGpQnEQdsKCqoFclsruVRPgy2ZtZ9rXOUPSBIpafNhvi8cq26dYz9xw54IAXApYQIJV4H9J0PhFCyI03KXJUUb36pw8pq4luk%2F66cuwYJUoU8TvcWCl%2BJVpAh7IzyCu5E5E9YtdTskY%2Bp4TZKd5%2BDHcm4N0JLLC6f749CcvyB5UQmeYi54kCfC3Bj3C3BXTxHdziydhEd6NMf9g21jnWuWfblKGydcqhF27l3r7fB9uI6wCFH8tdTiEvlQXLonmlTP9rYz4%2BZaz%2B0MYsydCN7FcPBnEFCZ8BxreXjsfgY%2FqDfTOBe2jcCrJihHBUe00RhBG84rm40Zk5cwTs7HV1MMgegYNQKg%2FKXDwDYKbo3UUdcWRptUUmtL%2B9z%2Fkb7pb9SAxj7HaIU2t9ZICkLOdRxzEX9iRqLvWeiLNitsyNMNfE5PT552wNHCPiLE6Wap9KhVnvTkZSTnVI6J2GWOc9e0tXRgOscwhJWKvQY6pgG1rtbkQm077KHTgcaOHRseL8dz7kLTRZJudYk8lRs357va09AE9HPKEcpQ6RiB05up2EeOsX8V0fxTbNPVDLd%2B5jR25kqc3jH%2B5vJpEzfTb1cEgvUL0cNDbHzxpLLyFySTp0X5E8a6Lvn7Ty7iov7YIxDvN0DFGYrohJ1SRiSPHAxm32BvFwMFV2BXPaZXh%2BKi1IOeblULNohz0yODNrk4JtQv26sF&X-Amz-Signature=33f7b479cce2f2ab0ca2243d398ca61a59e81b15267ce947764694a0bde3b9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
