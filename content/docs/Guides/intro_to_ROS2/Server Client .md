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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5VQRDY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD3KYgd28XSTIpXbtFqTfBvtCUMP%2BlvBQZIKffihMIS8QIgQcpEblYBAh8hwQJy6NYTA8V68PDEpFZ9XW5A2oJh3Toq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAdEs4dQh3GH2Yd0EircA43jYEFc4nh1ZFlsXCTeDP2fylW9aRYSeP3WIPsrayQnaPMdWaLSierIzM3k2OJf3z8PsAX4KrE6p1ynM5QAkDOUOThUu%2Ff%2BfCYzOmFhNIXV95fUT%2BRHnVg6jvPoRZruqQQ0%2FnZuCdmjL14aM5V5Oxx7GuAtckA9jEtOUzxQgdXYzmufm0u7yoPxkBDujiwZHbr4DzlssVrqPTU48kUYEFQoztcSyCUt5HEMuQ4Btx%2Bm1%2FS0sseDjPbfwzqilm7aZKbXgdEpQxngCc0SR7mUUAewfYHONvc0jn19I9yOIj6A81kqytMJM9Rir9x3QQmtUxDeDc%2FomO9Of1JAzWdRP82ySEVORbGv3zm2JvCoP0C6D4k4tj%2BpBrrse1Y%2FLEITKER1g1JKlqdUIDE%2FJOh1dk6OjbpYGzQK%2FKIvLemQnvRQ4zsKyCl0048xrPewC%2B0wtHBWBUn%2FWMT7fZdnaUpCquJ357Zor5IRBrvOyaq7AoHXxtbSsqPcmg9E0NFCOVGzvPlgJBjiuLNTSnH4wt2VAjsGJ88CFyxQiLlBZtJjy1DliqFo14VqJNmCsgWxKp%2FaFsude8JGW9cqm1oVomqIBAcQOAozBI40%2FLNrLVujG7ugh7JWEB5RTgygQ5bJMLmQ68IGOqUBGSEX%2Bthuz44J%2F3UlOTWhODLCMURcyu9VjRxGcXGLk3TyTH7XcrC1xOYbpWhCQ44Le4Jadc3VYeVSSnvJCdpeqq8uF%2F5kZrQKqigUpFY%2FJFqHIWAAcq02tSJjRITzp%2FFTTO1IbwelF9xCoXCb3gvAfOcka8K6S70XT46jdrSGGOqX5ooRqHpr3jZgrqpfzKBj7JKW9d2Ssmds5k1sOKderZr6VWzl&X-Amz-Signature=0288cc973e06e76f70199148f2a3bb3379f8aa54b4e5bf728a47a68995d8c91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5VQRDY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD3KYgd28XSTIpXbtFqTfBvtCUMP%2BlvBQZIKffihMIS8QIgQcpEblYBAh8hwQJy6NYTA8V68PDEpFZ9XW5A2oJh3Toq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAdEs4dQh3GH2Yd0EircA43jYEFc4nh1ZFlsXCTeDP2fylW9aRYSeP3WIPsrayQnaPMdWaLSierIzM3k2OJf3z8PsAX4KrE6p1ynM5QAkDOUOThUu%2Ff%2BfCYzOmFhNIXV95fUT%2BRHnVg6jvPoRZruqQQ0%2FnZuCdmjL14aM5V5Oxx7GuAtckA9jEtOUzxQgdXYzmufm0u7yoPxkBDujiwZHbr4DzlssVrqPTU48kUYEFQoztcSyCUt5HEMuQ4Btx%2Bm1%2FS0sseDjPbfwzqilm7aZKbXgdEpQxngCc0SR7mUUAewfYHONvc0jn19I9yOIj6A81kqytMJM9Rir9x3QQmtUxDeDc%2FomO9Of1JAzWdRP82ySEVORbGv3zm2JvCoP0C6D4k4tj%2BpBrrse1Y%2FLEITKER1g1JKlqdUIDE%2FJOh1dk6OjbpYGzQK%2FKIvLemQnvRQ4zsKyCl0048xrPewC%2B0wtHBWBUn%2FWMT7fZdnaUpCquJ357Zor5IRBrvOyaq7AoHXxtbSsqPcmg9E0NFCOVGzvPlgJBjiuLNTSnH4wt2VAjsGJ88CFyxQiLlBZtJjy1DliqFo14VqJNmCsgWxKp%2FaFsude8JGW9cqm1oVomqIBAcQOAozBI40%2FLNrLVujG7ugh7JWEB5RTgygQ5bJMLmQ68IGOqUBGSEX%2Bthuz44J%2F3UlOTWhODLCMURcyu9VjRxGcXGLk3TyTH7XcrC1xOYbpWhCQ44Le4Jadc3VYeVSSnvJCdpeqq8uF%2F5kZrQKqigUpFY%2FJFqHIWAAcq02tSJjRITzp%2FFTTO1IbwelF9xCoXCb3gvAfOcka8K6S70XT46jdrSGGOqX5ooRqHpr3jZgrqpfzKBj7JKW9d2Ssmds5k1sOKderZr6VWzl&X-Amz-Signature=79d534097e1d3989949ed2f2ad10498a14cc4f6ea16b21051c3864084871fac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5VQRDY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD3KYgd28XSTIpXbtFqTfBvtCUMP%2BlvBQZIKffihMIS8QIgQcpEblYBAh8hwQJy6NYTA8V68PDEpFZ9XW5A2oJh3Toq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAdEs4dQh3GH2Yd0EircA43jYEFc4nh1ZFlsXCTeDP2fylW9aRYSeP3WIPsrayQnaPMdWaLSierIzM3k2OJf3z8PsAX4KrE6p1ynM5QAkDOUOThUu%2Ff%2BfCYzOmFhNIXV95fUT%2BRHnVg6jvPoRZruqQQ0%2FnZuCdmjL14aM5V5Oxx7GuAtckA9jEtOUzxQgdXYzmufm0u7yoPxkBDujiwZHbr4DzlssVrqPTU48kUYEFQoztcSyCUt5HEMuQ4Btx%2Bm1%2FS0sseDjPbfwzqilm7aZKbXgdEpQxngCc0SR7mUUAewfYHONvc0jn19I9yOIj6A81kqytMJM9Rir9x3QQmtUxDeDc%2FomO9Of1JAzWdRP82ySEVORbGv3zm2JvCoP0C6D4k4tj%2BpBrrse1Y%2FLEITKER1g1JKlqdUIDE%2FJOh1dk6OjbpYGzQK%2FKIvLemQnvRQ4zsKyCl0048xrPewC%2B0wtHBWBUn%2FWMT7fZdnaUpCquJ357Zor5IRBrvOyaq7AoHXxtbSsqPcmg9E0NFCOVGzvPlgJBjiuLNTSnH4wt2VAjsGJ88CFyxQiLlBZtJjy1DliqFo14VqJNmCsgWxKp%2FaFsude8JGW9cqm1oVomqIBAcQOAozBI40%2FLNrLVujG7ugh7JWEB5RTgygQ5bJMLmQ68IGOqUBGSEX%2Bthuz44J%2F3UlOTWhODLCMURcyu9VjRxGcXGLk3TyTH7XcrC1xOYbpWhCQ44Le4Jadc3VYeVSSnvJCdpeqq8uF%2F5kZrQKqigUpFY%2FJFqHIWAAcq02tSJjRITzp%2FFTTO1IbwelF9xCoXCb3gvAfOcka8K6S70XT46jdrSGGOqX5ooRqHpr3jZgrqpfzKBj7JKW9d2Ssmds5k1sOKderZr6VWzl&X-Amz-Signature=2d94bd2a99d3484e91d747c4d95a772b556c929f4432f9424d1711a88bb811ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5VQRDY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD3KYgd28XSTIpXbtFqTfBvtCUMP%2BlvBQZIKffihMIS8QIgQcpEblYBAh8hwQJy6NYTA8V68PDEpFZ9XW5A2oJh3Toq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAdEs4dQh3GH2Yd0EircA43jYEFc4nh1ZFlsXCTeDP2fylW9aRYSeP3WIPsrayQnaPMdWaLSierIzM3k2OJf3z8PsAX4KrE6p1ynM5QAkDOUOThUu%2Ff%2BfCYzOmFhNIXV95fUT%2BRHnVg6jvPoRZruqQQ0%2FnZuCdmjL14aM5V5Oxx7GuAtckA9jEtOUzxQgdXYzmufm0u7yoPxkBDujiwZHbr4DzlssVrqPTU48kUYEFQoztcSyCUt5HEMuQ4Btx%2Bm1%2FS0sseDjPbfwzqilm7aZKbXgdEpQxngCc0SR7mUUAewfYHONvc0jn19I9yOIj6A81kqytMJM9Rir9x3QQmtUxDeDc%2FomO9Of1JAzWdRP82ySEVORbGv3zm2JvCoP0C6D4k4tj%2BpBrrse1Y%2FLEITKER1g1JKlqdUIDE%2FJOh1dk6OjbpYGzQK%2FKIvLemQnvRQ4zsKyCl0048xrPewC%2B0wtHBWBUn%2FWMT7fZdnaUpCquJ357Zor5IRBrvOyaq7AoHXxtbSsqPcmg9E0NFCOVGzvPlgJBjiuLNTSnH4wt2VAjsGJ88CFyxQiLlBZtJjy1DliqFo14VqJNmCsgWxKp%2FaFsude8JGW9cqm1oVomqIBAcQOAozBI40%2FLNrLVujG7ugh7JWEB5RTgygQ5bJMLmQ68IGOqUBGSEX%2Bthuz44J%2F3UlOTWhODLCMURcyu9VjRxGcXGLk3TyTH7XcrC1xOYbpWhCQ44Le4Jadc3VYeVSSnvJCdpeqq8uF%2F5kZrQKqigUpFY%2FJFqHIWAAcq02tSJjRITzp%2FFTTO1IbwelF9xCoXCb3gvAfOcka8K6S70XT46jdrSGGOqX5ooRqHpr3jZgrqpfzKBj7JKW9d2Ssmds5k1sOKderZr6VWzl&X-Amz-Signature=da812350f2f668a03907946153b8017ce79aa2646bd3c5ec1662cf9c9dab507e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5VQRDY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD3KYgd28XSTIpXbtFqTfBvtCUMP%2BlvBQZIKffihMIS8QIgQcpEblYBAh8hwQJy6NYTA8V68PDEpFZ9XW5A2oJh3Toq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAdEs4dQh3GH2Yd0EircA43jYEFc4nh1ZFlsXCTeDP2fylW9aRYSeP3WIPsrayQnaPMdWaLSierIzM3k2OJf3z8PsAX4KrE6p1ynM5QAkDOUOThUu%2Ff%2BfCYzOmFhNIXV95fUT%2BRHnVg6jvPoRZruqQQ0%2FnZuCdmjL14aM5V5Oxx7GuAtckA9jEtOUzxQgdXYzmufm0u7yoPxkBDujiwZHbr4DzlssVrqPTU48kUYEFQoztcSyCUt5HEMuQ4Btx%2Bm1%2FS0sseDjPbfwzqilm7aZKbXgdEpQxngCc0SR7mUUAewfYHONvc0jn19I9yOIj6A81kqytMJM9Rir9x3QQmtUxDeDc%2FomO9Of1JAzWdRP82ySEVORbGv3zm2JvCoP0C6D4k4tj%2BpBrrse1Y%2FLEITKER1g1JKlqdUIDE%2FJOh1dk6OjbpYGzQK%2FKIvLemQnvRQ4zsKyCl0048xrPewC%2B0wtHBWBUn%2FWMT7fZdnaUpCquJ357Zor5IRBrvOyaq7AoHXxtbSsqPcmg9E0NFCOVGzvPlgJBjiuLNTSnH4wt2VAjsGJ88CFyxQiLlBZtJjy1DliqFo14VqJNmCsgWxKp%2FaFsude8JGW9cqm1oVomqIBAcQOAozBI40%2FLNrLVujG7ugh7JWEB5RTgygQ5bJMLmQ68IGOqUBGSEX%2Bthuz44J%2F3UlOTWhODLCMURcyu9VjRxGcXGLk3TyTH7XcrC1xOYbpWhCQ44Le4Jadc3VYeVSSnvJCdpeqq8uF%2F5kZrQKqigUpFY%2FJFqHIWAAcq02tSJjRITzp%2FFTTO1IbwelF9xCoXCb3gvAfOcka8K6S70XT46jdrSGGOqX5ooRqHpr3jZgrqpfzKBj7JKW9d2Ssmds5k1sOKderZr6VWzl&X-Amz-Signature=ec7e901c7119e718ebc8e7a25c2bd26fba91778e72e2a2bd854af9135b669827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
