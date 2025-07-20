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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEAYDJY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdQbLznSlC4zghTuxlr4AuX9fCytVENK1p%2FRifOI8rgIgOKeehShN8ttx23VEIzKRSlr8wu4MkbRnPFX%2BM9q%2FYXwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsy6klRSIWF5XJVQSrcA0WO2Ebth7T8iUzm3aEMp3m51mPrDkOyM8mFhTItp0WPx05MBQPgDJNewohbLb29x8MadHF6hv02ICzlz7IFMPVKUxwZMrxIWrtwQirAsBT2HpPYILJGPeKUW90xoGkcOaD0EauOO3VZ8tm2E%2BLVXZrl1BagJ2Q2mKqoROuAgCp0ffK5WxcDHDB9b0UrAQ9%2FA3SGFzd82fEve6jbu75KLpk7seFsUFA8%2B2GTfk70a53MC%2Fq8EqSsWevkyF%2BfXNKDAqCoH5w9rsFgvPtoeKBeIw7ssKbfHduidQij14TS37gEM9Wur2gY7EaCWx36VcAFr9SugJBuw8ZfrUbs%2Bus%2FpgxrRhx6J3xKE5Bcqv6r9MJr51jBvd%2F7zb5Y9EW%2FHUzXAHt3kKU2LLwOmdRlyKbLgSR01%2B%2B4whb15H0LopJFawyWgstRQqNgIunmPRkElQj36Bc23c4dEsuLd%2FwhfE4tugHV7dyxnoWCHjRiuEKV2ayMp0Y%2FXpKekKb%2B849ekBp2nIkynfsOfQ3yErI5xwzQg%2BVy6obtx8o6TDfYztL4MILezmxOItXn%2FB7XEv8NBL0q0S71jg5bNHobozz%2F45XV2IDSI1TptC%2BhE%2FQMECz3PMH07WNuILriuzEwJWDfMMH19MMGOqUBGa5SR8La4tE5uatztzGateyF0cHFqZyuTK6KkJfokCNqEFgkJ5A2iPOAvAPIYe7sD%2BojzzsdQQEg0RXJuuqaFX9w1%2F%2FvwbKgUNwdn8KvPKEL6NhIGq8BKGZu%2BguCwXqRyqlks2iR68a8tyeqeCeaB%2FBeK%2BfXyYgK4vJ3RHVlofIt5Z6Nxd7eU7%2BsE5W6AJU1CmMNa%2FJbhYM0PZxPZKLMTvCdDAPR&X-Amz-Signature=dd9ab995375cd2e985250b5209c3d9c076b900c4a3af60a5b3cc8d904de49a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEAYDJY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdQbLznSlC4zghTuxlr4AuX9fCytVENK1p%2FRifOI8rgIgOKeehShN8ttx23VEIzKRSlr8wu4MkbRnPFX%2BM9q%2FYXwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsy6klRSIWF5XJVQSrcA0WO2Ebth7T8iUzm3aEMp3m51mPrDkOyM8mFhTItp0WPx05MBQPgDJNewohbLb29x8MadHF6hv02ICzlz7IFMPVKUxwZMrxIWrtwQirAsBT2HpPYILJGPeKUW90xoGkcOaD0EauOO3VZ8tm2E%2BLVXZrl1BagJ2Q2mKqoROuAgCp0ffK5WxcDHDB9b0UrAQ9%2FA3SGFzd82fEve6jbu75KLpk7seFsUFA8%2B2GTfk70a53MC%2Fq8EqSsWevkyF%2BfXNKDAqCoH5w9rsFgvPtoeKBeIw7ssKbfHduidQij14TS37gEM9Wur2gY7EaCWx36VcAFr9SugJBuw8ZfrUbs%2Bus%2FpgxrRhx6J3xKE5Bcqv6r9MJr51jBvd%2F7zb5Y9EW%2FHUzXAHt3kKU2LLwOmdRlyKbLgSR01%2B%2B4whb15H0LopJFawyWgstRQqNgIunmPRkElQj36Bc23c4dEsuLd%2FwhfE4tugHV7dyxnoWCHjRiuEKV2ayMp0Y%2FXpKekKb%2B849ekBp2nIkynfsOfQ3yErI5xwzQg%2BVy6obtx8o6TDfYztL4MILezmxOItXn%2FB7XEv8NBL0q0S71jg5bNHobozz%2F45XV2IDSI1TptC%2BhE%2FQMECz3PMH07WNuILriuzEwJWDfMMH19MMGOqUBGa5SR8La4tE5uatztzGateyF0cHFqZyuTK6KkJfokCNqEFgkJ5A2iPOAvAPIYe7sD%2BojzzsdQQEg0RXJuuqaFX9w1%2F%2FvwbKgUNwdn8KvPKEL6NhIGq8BKGZu%2BguCwXqRyqlks2iR68a8tyeqeCeaB%2FBeK%2BfXyYgK4vJ3RHVlofIt5Z6Nxd7eU7%2BsE5W6AJU1CmMNa%2FJbhYM0PZxPZKLMTvCdDAPR&X-Amz-Signature=0bd0533d995c86bcd6a17e5b75512b2a07cf06b9d0d8ba74b75cd2a382130e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEAYDJY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdQbLznSlC4zghTuxlr4AuX9fCytVENK1p%2FRifOI8rgIgOKeehShN8ttx23VEIzKRSlr8wu4MkbRnPFX%2BM9q%2FYXwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsy6klRSIWF5XJVQSrcA0WO2Ebth7T8iUzm3aEMp3m51mPrDkOyM8mFhTItp0WPx05MBQPgDJNewohbLb29x8MadHF6hv02ICzlz7IFMPVKUxwZMrxIWrtwQirAsBT2HpPYILJGPeKUW90xoGkcOaD0EauOO3VZ8tm2E%2BLVXZrl1BagJ2Q2mKqoROuAgCp0ffK5WxcDHDB9b0UrAQ9%2FA3SGFzd82fEve6jbu75KLpk7seFsUFA8%2B2GTfk70a53MC%2Fq8EqSsWevkyF%2BfXNKDAqCoH5w9rsFgvPtoeKBeIw7ssKbfHduidQij14TS37gEM9Wur2gY7EaCWx36VcAFr9SugJBuw8ZfrUbs%2Bus%2FpgxrRhx6J3xKE5Bcqv6r9MJr51jBvd%2F7zb5Y9EW%2FHUzXAHt3kKU2LLwOmdRlyKbLgSR01%2B%2B4whb15H0LopJFawyWgstRQqNgIunmPRkElQj36Bc23c4dEsuLd%2FwhfE4tugHV7dyxnoWCHjRiuEKV2ayMp0Y%2FXpKekKb%2B849ekBp2nIkynfsOfQ3yErI5xwzQg%2BVy6obtx8o6TDfYztL4MILezmxOItXn%2FB7XEv8NBL0q0S71jg5bNHobozz%2F45XV2IDSI1TptC%2BhE%2FQMECz3PMH07WNuILriuzEwJWDfMMH19MMGOqUBGa5SR8La4tE5uatztzGateyF0cHFqZyuTK6KkJfokCNqEFgkJ5A2iPOAvAPIYe7sD%2BojzzsdQQEg0RXJuuqaFX9w1%2F%2FvwbKgUNwdn8KvPKEL6NhIGq8BKGZu%2BguCwXqRyqlks2iR68a8tyeqeCeaB%2FBeK%2BfXyYgK4vJ3RHVlofIt5Z6Nxd7eU7%2BsE5W6AJU1CmMNa%2FJbhYM0PZxPZKLMTvCdDAPR&X-Amz-Signature=5225be393b29f2a64efb7dcfc8d91f6730a52882d073325ba627375f5bbf75c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEAYDJY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdQbLznSlC4zghTuxlr4AuX9fCytVENK1p%2FRifOI8rgIgOKeehShN8ttx23VEIzKRSlr8wu4MkbRnPFX%2BM9q%2FYXwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsy6klRSIWF5XJVQSrcA0WO2Ebth7T8iUzm3aEMp3m51mPrDkOyM8mFhTItp0WPx05MBQPgDJNewohbLb29x8MadHF6hv02ICzlz7IFMPVKUxwZMrxIWrtwQirAsBT2HpPYILJGPeKUW90xoGkcOaD0EauOO3VZ8tm2E%2BLVXZrl1BagJ2Q2mKqoROuAgCp0ffK5WxcDHDB9b0UrAQ9%2FA3SGFzd82fEve6jbu75KLpk7seFsUFA8%2B2GTfk70a53MC%2Fq8EqSsWevkyF%2BfXNKDAqCoH5w9rsFgvPtoeKBeIw7ssKbfHduidQij14TS37gEM9Wur2gY7EaCWx36VcAFr9SugJBuw8ZfrUbs%2Bus%2FpgxrRhx6J3xKE5Bcqv6r9MJr51jBvd%2F7zb5Y9EW%2FHUzXAHt3kKU2LLwOmdRlyKbLgSR01%2B%2B4whb15H0LopJFawyWgstRQqNgIunmPRkElQj36Bc23c4dEsuLd%2FwhfE4tugHV7dyxnoWCHjRiuEKV2ayMp0Y%2FXpKekKb%2B849ekBp2nIkynfsOfQ3yErI5xwzQg%2BVy6obtx8o6TDfYztL4MILezmxOItXn%2FB7XEv8NBL0q0S71jg5bNHobozz%2F45XV2IDSI1TptC%2BhE%2FQMECz3PMH07WNuILriuzEwJWDfMMH19MMGOqUBGa5SR8La4tE5uatztzGateyF0cHFqZyuTK6KkJfokCNqEFgkJ5A2iPOAvAPIYe7sD%2BojzzsdQQEg0RXJuuqaFX9w1%2F%2FvwbKgUNwdn8KvPKEL6NhIGq8BKGZu%2BguCwXqRyqlks2iR68a8tyeqeCeaB%2FBeK%2BfXyYgK4vJ3RHVlofIt5Z6Nxd7eU7%2BsE5W6AJU1CmMNa%2FJbhYM0PZxPZKLMTvCdDAPR&X-Amz-Signature=7b927d9987b9a0b6f6c3b210ed0908f0ebe2f713c7333dbcc614fd0eac855916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEAYDJY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdQbLznSlC4zghTuxlr4AuX9fCytVENK1p%2FRifOI8rgIgOKeehShN8ttx23VEIzKRSlr8wu4MkbRnPFX%2BM9q%2FYXwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsy6klRSIWF5XJVQSrcA0WO2Ebth7T8iUzm3aEMp3m51mPrDkOyM8mFhTItp0WPx05MBQPgDJNewohbLb29x8MadHF6hv02ICzlz7IFMPVKUxwZMrxIWrtwQirAsBT2HpPYILJGPeKUW90xoGkcOaD0EauOO3VZ8tm2E%2BLVXZrl1BagJ2Q2mKqoROuAgCp0ffK5WxcDHDB9b0UrAQ9%2FA3SGFzd82fEve6jbu75KLpk7seFsUFA8%2B2GTfk70a53MC%2Fq8EqSsWevkyF%2BfXNKDAqCoH5w9rsFgvPtoeKBeIw7ssKbfHduidQij14TS37gEM9Wur2gY7EaCWx36VcAFr9SugJBuw8ZfrUbs%2Bus%2FpgxrRhx6J3xKE5Bcqv6r9MJr51jBvd%2F7zb5Y9EW%2FHUzXAHt3kKU2LLwOmdRlyKbLgSR01%2B%2B4whb15H0LopJFawyWgstRQqNgIunmPRkElQj36Bc23c4dEsuLd%2FwhfE4tugHV7dyxnoWCHjRiuEKV2ayMp0Y%2FXpKekKb%2B849ekBp2nIkynfsOfQ3yErI5xwzQg%2BVy6obtx8o6TDfYztL4MILezmxOItXn%2FB7XEv8NBL0q0S71jg5bNHobozz%2F45XV2IDSI1TptC%2BhE%2FQMECz3PMH07WNuILriuzEwJWDfMMH19MMGOqUBGa5SR8La4tE5uatztzGateyF0cHFqZyuTK6KkJfokCNqEFgkJ5A2iPOAvAPIYe7sD%2BojzzsdQQEg0RXJuuqaFX9w1%2F%2FvwbKgUNwdn8KvPKEL6NhIGq8BKGZu%2BguCwXqRyqlks2iR68a8tyeqeCeaB%2FBeK%2BfXyYgK4vJ3RHVlofIt5Z6Nxd7eU7%2BsE5W6AJU1CmMNa%2FJbhYM0PZxPZKLMTvCdDAPR&X-Amz-Signature=ac284e1c604fb6b96988e3a2e4882a465ac0e7f79396275024edb77910464cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
