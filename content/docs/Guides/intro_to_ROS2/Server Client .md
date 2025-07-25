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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJKN6YB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJIKNvwxSIyqmKellqAbGpg%2BjxJpOSH1Jq8mzqv3vHiQIgJITjICAStBBYF87Ck9WPK3Ei9HPLv999GtNP0Pi4H7Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPRpUEu3cPkNO6fbeSrcAxjFmKznYr5GV8lZdR54ZsGXg9BNCWnAY06Y%2BtR1L9jvrpJdlDUituKoD4YIMjBUN0K%2F8PwkK5i8R5wyuJc74jIERaghCMPKuTgI99wIEt81bMdHPHp2SbKxpkQNYRD5fNMFiGxkUXTwwLl8zTZFCJTn18AmNEgEluBKem%2BhzrlTAb0ZO5nmxJtV459FMgw4AkYvWQw%2BGo4zzAOSAvNz%2FinO%2BFwGKutqeYLRVcJV6EXckB9sU4VNczSMYEU2fk0mpFSHSou7IZeJVKZP1mN6wMNWViEMH87peVnq%2FQLilbltyW297pBpmIUJqtsu3pRMoVhfY%2BV8mJ2WSHBDHCv%2Fc9M7d4NpkRfgi7SlDBfKKvl8hhz4jjqTU1mYCNe%2FPbveBPbgOvDnQg3Ig0J9UWAy0pVu8qFm0bDPfzyk%2FppvBImiEEY5vi1AsY5KZlnfJWurNnhfVWe5Ynn0bUmOxgi5bq6VWzzNXyKb7F0HB9AsehRO7aj3C8RUQ3X0l7bVMOPYauAmM0p1zxOUkrH7qv4tmhsjKVWY%2FwiuHWLqpPKpECN%2BWUYvFnzgDC9ONOr7Pnu%2BDGHW%2FkM9mcozFU9Zm%2BTmkqt%2FByOYMP4YlGbe3xSxIJu3ikYMXMwKMaKC4RpVMN%2BGjsQGOqUBAWOwz4e%2FAX%2BWs5SfHdlJziIS1Ou7fCGSNcYNSsaD%2Bn8Pt8eoNQKCkkNuQq0jpkLyx4nnCfIDK6MMcH68bYr5V5fLCTw0XF3QzV5PFqRc8A5MzWoDIr4JKMbzkn4yZRpUINhM45WEOYLn6%2F4AcOyk1m0Y1g0LD8%2B0Jwe2nTm6dzULqJWanSMRpxZxyVugjjxJuc2ijaHxb4%2F85V8%2FOFmCmSi42jTt&X-Amz-Signature=afeaa1a3230d0c1c6491573ae44857e3d90455558d81bb9b4f04de9b4c4e07b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJKN6YB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJIKNvwxSIyqmKellqAbGpg%2BjxJpOSH1Jq8mzqv3vHiQIgJITjICAStBBYF87Ck9WPK3Ei9HPLv999GtNP0Pi4H7Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPRpUEu3cPkNO6fbeSrcAxjFmKznYr5GV8lZdR54ZsGXg9BNCWnAY06Y%2BtR1L9jvrpJdlDUituKoD4YIMjBUN0K%2F8PwkK5i8R5wyuJc74jIERaghCMPKuTgI99wIEt81bMdHPHp2SbKxpkQNYRD5fNMFiGxkUXTwwLl8zTZFCJTn18AmNEgEluBKem%2BhzrlTAb0ZO5nmxJtV459FMgw4AkYvWQw%2BGo4zzAOSAvNz%2FinO%2BFwGKutqeYLRVcJV6EXckB9sU4VNczSMYEU2fk0mpFSHSou7IZeJVKZP1mN6wMNWViEMH87peVnq%2FQLilbltyW297pBpmIUJqtsu3pRMoVhfY%2BV8mJ2WSHBDHCv%2Fc9M7d4NpkRfgi7SlDBfKKvl8hhz4jjqTU1mYCNe%2FPbveBPbgOvDnQg3Ig0J9UWAy0pVu8qFm0bDPfzyk%2FppvBImiEEY5vi1AsY5KZlnfJWurNnhfVWe5Ynn0bUmOxgi5bq6VWzzNXyKb7F0HB9AsehRO7aj3C8RUQ3X0l7bVMOPYauAmM0p1zxOUkrH7qv4tmhsjKVWY%2FwiuHWLqpPKpECN%2BWUYvFnzgDC9ONOr7Pnu%2BDGHW%2FkM9mcozFU9Zm%2BTmkqt%2FByOYMP4YlGbe3xSxIJu3ikYMXMwKMaKC4RpVMN%2BGjsQGOqUBAWOwz4e%2FAX%2BWs5SfHdlJziIS1Ou7fCGSNcYNSsaD%2Bn8Pt8eoNQKCkkNuQq0jpkLyx4nnCfIDK6MMcH68bYr5V5fLCTw0XF3QzV5PFqRc8A5MzWoDIr4JKMbzkn4yZRpUINhM45WEOYLn6%2F4AcOyk1m0Y1g0LD8%2B0Jwe2nTm6dzULqJWanSMRpxZxyVugjjxJuc2ijaHxb4%2F85V8%2FOFmCmSi42jTt&X-Amz-Signature=b9dd952b4a56bb6a3775327abc78270c15f79142ca457993309fd07b6f1df0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJKN6YB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJIKNvwxSIyqmKellqAbGpg%2BjxJpOSH1Jq8mzqv3vHiQIgJITjICAStBBYF87Ck9WPK3Ei9HPLv999GtNP0Pi4H7Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPRpUEu3cPkNO6fbeSrcAxjFmKznYr5GV8lZdR54ZsGXg9BNCWnAY06Y%2BtR1L9jvrpJdlDUituKoD4YIMjBUN0K%2F8PwkK5i8R5wyuJc74jIERaghCMPKuTgI99wIEt81bMdHPHp2SbKxpkQNYRD5fNMFiGxkUXTwwLl8zTZFCJTn18AmNEgEluBKem%2BhzrlTAb0ZO5nmxJtV459FMgw4AkYvWQw%2BGo4zzAOSAvNz%2FinO%2BFwGKutqeYLRVcJV6EXckB9sU4VNczSMYEU2fk0mpFSHSou7IZeJVKZP1mN6wMNWViEMH87peVnq%2FQLilbltyW297pBpmIUJqtsu3pRMoVhfY%2BV8mJ2WSHBDHCv%2Fc9M7d4NpkRfgi7SlDBfKKvl8hhz4jjqTU1mYCNe%2FPbveBPbgOvDnQg3Ig0J9UWAy0pVu8qFm0bDPfzyk%2FppvBImiEEY5vi1AsY5KZlnfJWurNnhfVWe5Ynn0bUmOxgi5bq6VWzzNXyKb7F0HB9AsehRO7aj3C8RUQ3X0l7bVMOPYauAmM0p1zxOUkrH7qv4tmhsjKVWY%2FwiuHWLqpPKpECN%2BWUYvFnzgDC9ONOr7Pnu%2BDGHW%2FkM9mcozFU9Zm%2BTmkqt%2FByOYMP4YlGbe3xSxIJu3ikYMXMwKMaKC4RpVMN%2BGjsQGOqUBAWOwz4e%2FAX%2BWs5SfHdlJziIS1Ou7fCGSNcYNSsaD%2Bn8Pt8eoNQKCkkNuQq0jpkLyx4nnCfIDK6MMcH68bYr5V5fLCTw0XF3QzV5PFqRc8A5MzWoDIr4JKMbzkn4yZRpUINhM45WEOYLn6%2F4AcOyk1m0Y1g0LD8%2B0Jwe2nTm6dzULqJWanSMRpxZxyVugjjxJuc2ijaHxb4%2F85V8%2FOFmCmSi42jTt&X-Amz-Signature=d85d9cf81bd69532937ed1bb6cc1c0ccf6a12e5a03250d5aeb3e630e6e49d140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJKN6YB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJIKNvwxSIyqmKellqAbGpg%2BjxJpOSH1Jq8mzqv3vHiQIgJITjICAStBBYF87Ck9WPK3Ei9HPLv999GtNP0Pi4H7Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPRpUEu3cPkNO6fbeSrcAxjFmKznYr5GV8lZdR54ZsGXg9BNCWnAY06Y%2BtR1L9jvrpJdlDUituKoD4YIMjBUN0K%2F8PwkK5i8R5wyuJc74jIERaghCMPKuTgI99wIEt81bMdHPHp2SbKxpkQNYRD5fNMFiGxkUXTwwLl8zTZFCJTn18AmNEgEluBKem%2BhzrlTAb0ZO5nmxJtV459FMgw4AkYvWQw%2BGo4zzAOSAvNz%2FinO%2BFwGKutqeYLRVcJV6EXckB9sU4VNczSMYEU2fk0mpFSHSou7IZeJVKZP1mN6wMNWViEMH87peVnq%2FQLilbltyW297pBpmIUJqtsu3pRMoVhfY%2BV8mJ2WSHBDHCv%2Fc9M7d4NpkRfgi7SlDBfKKvl8hhz4jjqTU1mYCNe%2FPbveBPbgOvDnQg3Ig0J9UWAy0pVu8qFm0bDPfzyk%2FppvBImiEEY5vi1AsY5KZlnfJWurNnhfVWe5Ynn0bUmOxgi5bq6VWzzNXyKb7F0HB9AsehRO7aj3C8RUQ3X0l7bVMOPYauAmM0p1zxOUkrH7qv4tmhsjKVWY%2FwiuHWLqpPKpECN%2BWUYvFnzgDC9ONOr7Pnu%2BDGHW%2FkM9mcozFU9Zm%2BTmkqt%2FByOYMP4YlGbe3xSxIJu3ikYMXMwKMaKC4RpVMN%2BGjsQGOqUBAWOwz4e%2FAX%2BWs5SfHdlJziIS1Ou7fCGSNcYNSsaD%2Bn8Pt8eoNQKCkkNuQq0jpkLyx4nnCfIDK6MMcH68bYr5V5fLCTw0XF3QzV5PFqRc8A5MzWoDIr4JKMbzkn4yZRpUINhM45WEOYLn6%2F4AcOyk1m0Y1g0LD8%2B0Jwe2nTm6dzULqJWanSMRpxZxyVugjjxJuc2ijaHxb4%2F85V8%2FOFmCmSi42jTt&X-Amz-Signature=9a97c09040fc61efbde3f779dc415436910fc228fb04d311df98ed17bc3b8ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJKN6YB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJIKNvwxSIyqmKellqAbGpg%2BjxJpOSH1Jq8mzqv3vHiQIgJITjICAStBBYF87Ck9WPK3Ei9HPLv999GtNP0Pi4H7Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPRpUEu3cPkNO6fbeSrcAxjFmKznYr5GV8lZdR54ZsGXg9BNCWnAY06Y%2BtR1L9jvrpJdlDUituKoD4YIMjBUN0K%2F8PwkK5i8R5wyuJc74jIERaghCMPKuTgI99wIEt81bMdHPHp2SbKxpkQNYRD5fNMFiGxkUXTwwLl8zTZFCJTn18AmNEgEluBKem%2BhzrlTAb0ZO5nmxJtV459FMgw4AkYvWQw%2BGo4zzAOSAvNz%2FinO%2BFwGKutqeYLRVcJV6EXckB9sU4VNczSMYEU2fk0mpFSHSou7IZeJVKZP1mN6wMNWViEMH87peVnq%2FQLilbltyW297pBpmIUJqtsu3pRMoVhfY%2BV8mJ2WSHBDHCv%2Fc9M7d4NpkRfgi7SlDBfKKvl8hhz4jjqTU1mYCNe%2FPbveBPbgOvDnQg3Ig0J9UWAy0pVu8qFm0bDPfzyk%2FppvBImiEEY5vi1AsY5KZlnfJWurNnhfVWe5Ynn0bUmOxgi5bq6VWzzNXyKb7F0HB9AsehRO7aj3C8RUQ3X0l7bVMOPYauAmM0p1zxOUkrH7qv4tmhsjKVWY%2FwiuHWLqpPKpECN%2BWUYvFnzgDC9ONOr7Pnu%2BDGHW%2FkM9mcozFU9Zm%2BTmkqt%2FByOYMP4YlGbe3xSxIJu3ikYMXMwKMaKC4RpVMN%2BGjsQGOqUBAWOwz4e%2FAX%2BWs5SfHdlJziIS1Ou7fCGSNcYNSsaD%2Bn8Pt8eoNQKCkkNuQq0jpkLyx4nnCfIDK6MMcH68bYr5V5fLCTw0XF3QzV5PFqRc8A5MzWoDIr4JKMbzkn4yZRpUINhM45WEOYLn6%2F4AcOyk1m0Y1g0LD8%2B0Jwe2nTm6dzULqJWanSMRpxZxyVugjjxJuc2ijaHxb4%2F85V8%2FOFmCmSi42jTt&X-Amz-Signature=3fba7ffc5acad63a19232cf5cee043b68ba529f4f6914d4481ff9e3b3a31542f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
