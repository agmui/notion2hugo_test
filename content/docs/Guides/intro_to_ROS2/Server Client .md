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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SIVYOL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDMmAqJQqIVBCflHV5nizW9b54AaLMFlkpFpVX%2FjzbGEAIhAIxabCDuzPOUd214L99J9bKlwffsRK0dUlpM%2FOO0SelaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG%2FxPTzu%2FwlXbeOwq3AObypdIxa1KJZxm2x2dHRbCen4KGniQ1kfHlz9%2BpdyccQmayHGAkcxA6texPoOnrLJzz7e1KhD7IKeD4BTIiL%2B%2FFPhd%2FdxtVEV38hT94wcNoFhncy5TyZ46RdEbwT%2FodGQ%2Bz2G53VwJ8p2CKcT1tN4fsRfb35Adt32O67XbhZObFjsnRMGt8gj4PRO%2BFp69%2FP0ioMh9kz6%2Fp%2B2phZM3lnNldegbkAiZlJ%2Frnq9tDZXxLl5LPnNKfgo%2Fq1Nh%2FLIr89RqGkwfwtdEf1AjhKUfoBjVucz9qSFpceOhGhDY6ZJ6rZjdTxTLltbw%2BA7CQs5BVRHvNRE9RdJWkqzlHD4KnpzwqTa75nJRH%2BQV0VboIO%2Fl%2FvHuR3nflcA5wE%2BxwIwLXlx5dsethdykDAb2mkYwveIpLo7N0IfD1%2BGEdLSKcETB9cQCRGLE6dLdSHgGVMVbVBVd6IAb0%2BJwBdFe%2BR3Xel0FiMA%2FLPooQIbc1XuyD%2F8IkP9Ytb6PJBYqvoM8R2tqscvSNVAOShn2Z3RXaxCw46sSsEu02b0A6QQrNTajwsJCCIURx1h85HB8h5zx6mqeAPqsb4hovMfxJUNDGK4Yf7bBC7XzSayS%2BaWRiWi6kTD%2F1F317moJHYdCxWkchzDE8qDABjqkAQqkx4MJlimkvUORX429N%2Bp8tYQW%2F2nfqtdhP8xAUppO70eGRK0U273x4uc7s5CmxrOC10U82gpRWnmsXa99xGrBlLHfCs%2BuB86LbSUgod7d0Ujh6aEw9gUghen1T02xdF5w74SIV5H4Xewb4emI%2FvppS%2B3fQFRhVb8oTiXM3ZJwAct4u6rj9hW8ZVPjTYp%2FgQBTWKDbWKRbZOb%2Fwnf%2F6En9kRWZ&X-Amz-Signature=e884bcd37c5daa0bf35d7fd211ffb8d009e170bf0eafca6e4a3705945e05c51d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SIVYOL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDMmAqJQqIVBCflHV5nizW9b54AaLMFlkpFpVX%2FjzbGEAIhAIxabCDuzPOUd214L99J9bKlwffsRK0dUlpM%2FOO0SelaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG%2FxPTzu%2FwlXbeOwq3AObypdIxa1KJZxm2x2dHRbCen4KGniQ1kfHlz9%2BpdyccQmayHGAkcxA6texPoOnrLJzz7e1KhD7IKeD4BTIiL%2B%2FFPhd%2FdxtVEV38hT94wcNoFhncy5TyZ46RdEbwT%2FodGQ%2Bz2G53VwJ8p2CKcT1tN4fsRfb35Adt32O67XbhZObFjsnRMGt8gj4PRO%2BFp69%2FP0ioMh9kz6%2Fp%2B2phZM3lnNldegbkAiZlJ%2Frnq9tDZXxLl5LPnNKfgo%2Fq1Nh%2FLIr89RqGkwfwtdEf1AjhKUfoBjVucz9qSFpceOhGhDY6ZJ6rZjdTxTLltbw%2BA7CQs5BVRHvNRE9RdJWkqzlHD4KnpzwqTa75nJRH%2BQV0VboIO%2Fl%2FvHuR3nflcA5wE%2BxwIwLXlx5dsethdykDAb2mkYwveIpLo7N0IfD1%2BGEdLSKcETB9cQCRGLE6dLdSHgGVMVbVBVd6IAb0%2BJwBdFe%2BR3Xel0FiMA%2FLPooQIbc1XuyD%2F8IkP9Ytb6PJBYqvoM8R2tqscvSNVAOShn2Z3RXaxCw46sSsEu02b0A6QQrNTajwsJCCIURx1h85HB8h5zx6mqeAPqsb4hovMfxJUNDGK4Yf7bBC7XzSayS%2BaWRiWi6kTD%2F1F317moJHYdCxWkchzDE8qDABjqkAQqkx4MJlimkvUORX429N%2Bp8tYQW%2F2nfqtdhP8xAUppO70eGRK0U273x4uc7s5CmxrOC10U82gpRWnmsXa99xGrBlLHfCs%2BuB86LbSUgod7d0Ujh6aEw9gUghen1T02xdF5w74SIV5H4Xewb4emI%2FvppS%2B3fQFRhVb8oTiXM3ZJwAct4u6rj9hW8ZVPjTYp%2FgQBTWKDbWKRbZOb%2Fwnf%2F6En9kRWZ&X-Amz-Signature=e08bc33e945a5a51a53beee34120f093612b3aaea87ce48bebe2b66162d5da52&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SIVYOL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDMmAqJQqIVBCflHV5nizW9b54AaLMFlkpFpVX%2FjzbGEAIhAIxabCDuzPOUd214L99J9bKlwffsRK0dUlpM%2FOO0SelaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG%2FxPTzu%2FwlXbeOwq3AObypdIxa1KJZxm2x2dHRbCen4KGniQ1kfHlz9%2BpdyccQmayHGAkcxA6texPoOnrLJzz7e1KhD7IKeD4BTIiL%2B%2FFPhd%2FdxtVEV38hT94wcNoFhncy5TyZ46RdEbwT%2FodGQ%2Bz2G53VwJ8p2CKcT1tN4fsRfb35Adt32O67XbhZObFjsnRMGt8gj4PRO%2BFp69%2FP0ioMh9kz6%2Fp%2B2phZM3lnNldegbkAiZlJ%2Frnq9tDZXxLl5LPnNKfgo%2Fq1Nh%2FLIr89RqGkwfwtdEf1AjhKUfoBjVucz9qSFpceOhGhDY6ZJ6rZjdTxTLltbw%2BA7CQs5BVRHvNRE9RdJWkqzlHD4KnpzwqTa75nJRH%2BQV0VboIO%2Fl%2FvHuR3nflcA5wE%2BxwIwLXlx5dsethdykDAb2mkYwveIpLo7N0IfD1%2BGEdLSKcETB9cQCRGLE6dLdSHgGVMVbVBVd6IAb0%2BJwBdFe%2BR3Xel0FiMA%2FLPooQIbc1XuyD%2F8IkP9Ytb6PJBYqvoM8R2tqscvSNVAOShn2Z3RXaxCw46sSsEu02b0A6QQrNTajwsJCCIURx1h85HB8h5zx6mqeAPqsb4hovMfxJUNDGK4Yf7bBC7XzSayS%2BaWRiWi6kTD%2F1F317moJHYdCxWkchzDE8qDABjqkAQqkx4MJlimkvUORX429N%2Bp8tYQW%2F2nfqtdhP8xAUppO70eGRK0U273x4uc7s5CmxrOC10U82gpRWnmsXa99xGrBlLHfCs%2BuB86LbSUgod7d0Ujh6aEw9gUghen1T02xdF5w74SIV5H4Xewb4emI%2FvppS%2B3fQFRhVb8oTiXM3ZJwAct4u6rj9hW8ZVPjTYp%2FgQBTWKDbWKRbZOb%2Fwnf%2F6En9kRWZ&X-Amz-Signature=c1514b1bcbea824592b5c10b51fbe4d7513fa0f3e0625bcaec4207c1ba4afece&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SIVYOL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDMmAqJQqIVBCflHV5nizW9b54AaLMFlkpFpVX%2FjzbGEAIhAIxabCDuzPOUd214L99J9bKlwffsRK0dUlpM%2FOO0SelaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG%2FxPTzu%2FwlXbeOwq3AObypdIxa1KJZxm2x2dHRbCen4KGniQ1kfHlz9%2BpdyccQmayHGAkcxA6texPoOnrLJzz7e1KhD7IKeD4BTIiL%2B%2FFPhd%2FdxtVEV38hT94wcNoFhncy5TyZ46RdEbwT%2FodGQ%2Bz2G53VwJ8p2CKcT1tN4fsRfb35Adt32O67XbhZObFjsnRMGt8gj4PRO%2BFp69%2FP0ioMh9kz6%2Fp%2B2phZM3lnNldegbkAiZlJ%2Frnq9tDZXxLl5LPnNKfgo%2Fq1Nh%2FLIr89RqGkwfwtdEf1AjhKUfoBjVucz9qSFpceOhGhDY6ZJ6rZjdTxTLltbw%2BA7CQs5BVRHvNRE9RdJWkqzlHD4KnpzwqTa75nJRH%2BQV0VboIO%2Fl%2FvHuR3nflcA5wE%2BxwIwLXlx5dsethdykDAb2mkYwveIpLo7N0IfD1%2BGEdLSKcETB9cQCRGLE6dLdSHgGVMVbVBVd6IAb0%2BJwBdFe%2BR3Xel0FiMA%2FLPooQIbc1XuyD%2F8IkP9Ytb6PJBYqvoM8R2tqscvSNVAOShn2Z3RXaxCw46sSsEu02b0A6QQrNTajwsJCCIURx1h85HB8h5zx6mqeAPqsb4hovMfxJUNDGK4Yf7bBC7XzSayS%2BaWRiWi6kTD%2F1F317moJHYdCxWkchzDE8qDABjqkAQqkx4MJlimkvUORX429N%2Bp8tYQW%2F2nfqtdhP8xAUppO70eGRK0U273x4uc7s5CmxrOC10U82gpRWnmsXa99xGrBlLHfCs%2BuB86LbSUgod7d0Ujh6aEw9gUghen1T02xdF5w74SIV5H4Xewb4emI%2FvppS%2B3fQFRhVb8oTiXM3ZJwAct4u6rj9hW8ZVPjTYp%2FgQBTWKDbWKRbZOb%2Fwnf%2F6En9kRWZ&X-Amz-Signature=af3fa76632aa9d1d4ceded8cccd878c93c9752fa99964cb4cf17eea8517c17cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SIVYOL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDMmAqJQqIVBCflHV5nizW9b54AaLMFlkpFpVX%2FjzbGEAIhAIxabCDuzPOUd214L99J9bKlwffsRK0dUlpM%2FOO0SelaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG%2FxPTzu%2FwlXbeOwq3AObypdIxa1KJZxm2x2dHRbCen4KGniQ1kfHlz9%2BpdyccQmayHGAkcxA6texPoOnrLJzz7e1KhD7IKeD4BTIiL%2B%2FFPhd%2FdxtVEV38hT94wcNoFhncy5TyZ46RdEbwT%2FodGQ%2Bz2G53VwJ8p2CKcT1tN4fsRfb35Adt32O67XbhZObFjsnRMGt8gj4PRO%2BFp69%2FP0ioMh9kz6%2Fp%2B2phZM3lnNldegbkAiZlJ%2Frnq9tDZXxLl5LPnNKfgo%2Fq1Nh%2FLIr89RqGkwfwtdEf1AjhKUfoBjVucz9qSFpceOhGhDY6ZJ6rZjdTxTLltbw%2BA7CQs5BVRHvNRE9RdJWkqzlHD4KnpzwqTa75nJRH%2BQV0VboIO%2Fl%2FvHuR3nflcA5wE%2BxwIwLXlx5dsethdykDAb2mkYwveIpLo7N0IfD1%2BGEdLSKcETB9cQCRGLE6dLdSHgGVMVbVBVd6IAb0%2BJwBdFe%2BR3Xel0FiMA%2FLPooQIbc1XuyD%2F8IkP9Ytb6PJBYqvoM8R2tqscvSNVAOShn2Z3RXaxCw46sSsEu02b0A6QQrNTajwsJCCIURx1h85HB8h5zx6mqeAPqsb4hovMfxJUNDGK4Yf7bBC7XzSayS%2BaWRiWi6kTD%2F1F317moJHYdCxWkchzDE8qDABjqkAQqkx4MJlimkvUORX429N%2Bp8tYQW%2F2nfqtdhP8xAUppO70eGRK0U273x4uc7s5CmxrOC10U82gpRWnmsXa99xGrBlLHfCs%2BuB86LbSUgod7d0Ujh6aEw9gUghen1T02xdF5w74SIV5H4Xewb4emI%2FvppS%2B3fQFRhVb8oTiXM3ZJwAct4u6rj9hW8ZVPjTYp%2FgQBTWKDbWKRbZOb%2Fwnf%2F6En9kRWZ&X-Amz-Signature=4888a61cf62f04892f70b674542dbfc046362800c622eafcbd0af75717175f96&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
