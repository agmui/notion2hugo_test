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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7XPFAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCeZg7yLpXo9e7I%2BnrcptvVdYFbXc2cVE%2FfSA%2FlZYEX1wIgQG7ySdN1HXNKXlHil4%2BkkhctURarbncVRyYUt7KMBmUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBlQWF5qbXfqXE33qyrcAysrBblKlZiplp84upoVT%2FXd1PqbWoGK4lYgwcTcXIzG9%2FwvripZsMw3yBhsXP4UTqbifNAKog6GECDdgoyWoQzBJfyQ%2FEot0LLihi0fbWYw8y2uYDMyVoexrf%2FmAIIPq8vrV5UkXjfitjmbLDHk6h37M03heygQT9Au8pejslEe5VWmU9mp9Vm8SBnEE1wRgpQZtJEZa4SU8%2FA4oVU9F9tm3vWmukRYCpUJCUN1qFT4vb8qpyp4sSxUCNRuVrcaxt2r71IJx3fmNc7Gx%2BpBtHUsUYCZrPIEODMDob8hGJWkwtkWx5k7ewyHBaEaJv8AdmUrbNjD2OTM1i9zPJGkzL9%2Ba6JGsXvyIgktmlu2uuAzcjn7EfzE6rhDaV0Mq7iUpR43mME8ryfCvYRLLMff5pZ0cNqsYD4Ann67n4Dw21iLUMVXwKh9V1nW6J9i7Y%2FqswjKLB%2FSong%2B%2BIwV0WFciW8wqgIDYdGp1xectdRsKHhdWkD%2BYPEOKUWluMj2cI%2B8z1HNopfna7ZURyUz31RhwPREBfMt6cT6W32oXuRurqGfAhEVWwPfK%2BxFKIL6%2F4bNI4yhoXRyrdrd0BGsYCZYl2Ua0sapZ3my%2FlmOTaapTAPmrMPbIBFo91xn8PHcMJLqvL0GOqUBf3WB3rctrs%2FnW7s3bBHXbDy63NAAC7fW0ey%2Fh4WegTdl7Brtz2Kr7GMo6gi47TxRxu4xB0dETUFpf8puMXHh%2Fsh5zbrk0VAH1vel1HVxxi27CxsBhqVX48OEs1pRv9ce3SaG2iwBD6nXqNagVKy%2FKgJsT0z8WFGDNySngVpL3atxEeo1FQB69NhXsWSFXA87TVz4GqudUVlkX7YhdKflSMeQWzRA&X-Amz-Signature=5209a69614cef11cf7191875cf02c0382c4c530ff21157df601f920bba19c2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7XPFAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCeZg7yLpXo9e7I%2BnrcptvVdYFbXc2cVE%2FfSA%2FlZYEX1wIgQG7ySdN1HXNKXlHil4%2BkkhctURarbncVRyYUt7KMBmUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBlQWF5qbXfqXE33qyrcAysrBblKlZiplp84upoVT%2FXd1PqbWoGK4lYgwcTcXIzG9%2FwvripZsMw3yBhsXP4UTqbifNAKog6GECDdgoyWoQzBJfyQ%2FEot0LLihi0fbWYw8y2uYDMyVoexrf%2FmAIIPq8vrV5UkXjfitjmbLDHk6h37M03heygQT9Au8pejslEe5VWmU9mp9Vm8SBnEE1wRgpQZtJEZa4SU8%2FA4oVU9F9tm3vWmukRYCpUJCUN1qFT4vb8qpyp4sSxUCNRuVrcaxt2r71IJx3fmNc7Gx%2BpBtHUsUYCZrPIEODMDob8hGJWkwtkWx5k7ewyHBaEaJv8AdmUrbNjD2OTM1i9zPJGkzL9%2Ba6JGsXvyIgktmlu2uuAzcjn7EfzE6rhDaV0Mq7iUpR43mME8ryfCvYRLLMff5pZ0cNqsYD4Ann67n4Dw21iLUMVXwKh9V1nW6J9i7Y%2FqswjKLB%2FSong%2B%2BIwV0WFciW8wqgIDYdGp1xectdRsKHhdWkD%2BYPEOKUWluMj2cI%2B8z1HNopfna7ZURyUz31RhwPREBfMt6cT6W32oXuRurqGfAhEVWwPfK%2BxFKIL6%2F4bNI4yhoXRyrdrd0BGsYCZYl2Ua0sapZ3my%2FlmOTaapTAPmrMPbIBFo91xn8PHcMJLqvL0GOqUBf3WB3rctrs%2FnW7s3bBHXbDy63NAAC7fW0ey%2Fh4WegTdl7Brtz2Kr7GMo6gi47TxRxu4xB0dETUFpf8puMXHh%2Fsh5zbrk0VAH1vel1HVxxi27CxsBhqVX48OEs1pRv9ce3SaG2iwBD6nXqNagVKy%2FKgJsT0z8WFGDNySngVpL3atxEeo1FQB69NhXsWSFXA87TVz4GqudUVlkX7YhdKflSMeQWzRA&X-Amz-Signature=06dbdd8731b60283be12f66e148e035a628d9105432bce10ae9f8c4fd5c18949&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7XPFAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCeZg7yLpXo9e7I%2BnrcptvVdYFbXc2cVE%2FfSA%2FlZYEX1wIgQG7ySdN1HXNKXlHil4%2BkkhctURarbncVRyYUt7KMBmUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBlQWF5qbXfqXE33qyrcAysrBblKlZiplp84upoVT%2FXd1PqbWoGK4lYgwcTcXIzG9%2FwvripZsMw3yBhsXP4UTqbifNAKog6GECDdgoyWoQzBJfyQ%2FEot0LLihi0fbWYw8y2uYDMyVoexrf%2FmAIIPq8vrV5UkXjfitjmbLDHk6h37M03heygQT9Au8pejslEe5VWmU9mp9Vm8SBnEE1wRgpQZtJEZa4SU8%2FA4oVU9F9tm3vWmukRYCpUJCUN1qFT4vb8qpyp4sSxUCNRuVrcaxt2r71IJx3fmNc7Gx%2BpBtHUsUYCZrPIEODMDob8hGJWkwtkWx5k7ewyHBaEaJv8AdmUrbNjD2OTM1i9zPJGkzL9%2Ba6JGsXvyIgktmlu2uuAzcjn7EfzE6rhDaV0Mq7iUpR43mME8ryfCvYRLLMff5pZ0cNqsYD4Ann67n4Dw21iLUMVXwKh9V1nW6J9i7Y%2FqswjKLB%2FSong%2B%2BIwV0WFciW8wqgIDYdGp1xectdRsKHhdWkD%2BYPEOKUWluMj2cI%2B8z1HNopfna7ZURyUz31RhwPREBfMt6cT6W32oXuRurqGfAhEVWwPfK%2BxFKIL6%2F4bNI4yhoXRyrdrd0BGsYCZYl2Ua0sapZ3my%2FlmOTaapTAPmrMPbIBFo91xn8PHcMJLqvL0GOqUBf3WB3rctrs%2FnW7s3bBHXbDy63NAAC7fW0ey%2Fh4WegTdl7Brtz2Kr7GMo6gi47TxRxu4xB0dETUFpf8puMXHh%2Fsh5zbrk0VAH1vel1HVxxi27CxsBhqVX48OEs1pRv9ce3SaG2iwBD6nXqNagVKy%2FKgJsT0z8WFGDNySngVpL3atxEeo1FQB69NhXsWSFXA87TVz4GqudUVlkX7YhdKflSMeQWzRA&X-Amz-Signature=08d79998e6f82635c63d98bbba6d17ac4e2ea0654793c0e809b55110758de801&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7XPFAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCeZg7yLpXo9e7I%2BnrcptvVdYFbXc2cVE%2FfSA%2FlZYEX1wIgQG7ySdN1HXNKXlHil4%2BkkhctURarbncVRyYUt7KMBmUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBlQWF5qbXfqXE33qyrcAysrBblKlZiplp84upoVT%2FXd1PqbWoGK4lYgwcTcXIzG9%2FwvripZsMw3yBhsXP4UTqbifNAKog6GECDdgoyWoQzBJfyQ%2FEot0LLihi0fbWYw8y2uYDMyVoexrf%2FmAIIPq8vrV5UkXjfitjmbLDHk6h37M03heygQT9Au8pejslEe5VWmU9mp9Vm8SBnEE1wRgpQZtJEZa4SU8%2FA4oVU9F9tm3vWmukRYCpUJCUN1qFT4vb8qpyp4sSxUCNRuVrcaxt2r71IJx3fmNc7Gx%2BpBtHUsUYCZrPIEODMDob8hGJWkwtkWx5k7ewyHBaEaJv8AdmUrbNjD2OTM1i9zPJGkzL9%2Ba6JGsXvyIgktmlu2uuAzcjn7EfzE6rhDaV0Mq7iUpR43mME8ryfCvYRLLMff5pZ0cNqsYD4Ann67n4Dw21iLUMVXwKh9V1nW6J9i7Y%2FqswjKLB%2FSong%2B%2BIwV0WFciW8wqgIDYdGp1xectdRsKHhdWkD%2BYPEOKUWluMj2cI%2B8z1HNopfna7ZURyUz31RhwPREBfMt6cT6W32oXuRurqGfAhEVWwPfK%2BxFKIL6%2F4bNI4yhoXRyrdrd0BGsYCZYl2Ua0sapZ3my%2FlmOTaapTAPmrMPbIBFo91xn8PHcMJLqvL0GOqUBf3WB3rctrs%2FnW7s3bBHXbDy63NAAC7fW0ey%2Fh4WegTdl7Brtz2Kr7GMo6gi47TxRxu4xB0dETUFpf8puMXHh%2Fsh5zbrk0VAH1vel1HVxxi27CxsBhqVX48OEs1pRv9ce3SaG2iwBD6nXqNagVKy%2FKgJsT0z8WFGDNySngVpL3atxEeo1FQB69NhXsWSFXA87TVz4GqudUVlkX7YhdKflSMeQWzRA&X-Amz-Signature=18c5acb67b8a37ecf0a8ba0bb3fe4f5990dfd41bc05f011851a3d206d698daa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7XPFAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCeZg7yLpXo9e7I%2BnrcptvVdYFbXc2cVE%2FfSA%2FlZYEX1wIgQG7ySdN1HXNKXlHil4%2BkkhctURarbncVRyYUt7KMBmUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBlQWF5qbXfqXE33qyrcAysrBblKlZiplp84upoVT%2FXd1PqbWoGK4lYgwcTcXIzG9%2FwvripZsMw3yBhsXP4UTqbifNAKog6GECDdgoyWoQzBJfyQ%2FEot0LLihi0fbWYw8y2uYDMyVoexrf%2FmAIIPq8vrV5UkXjfitjmbLDHk6h37M03heygQT9Au8pejslEe5VWmU9mp9Vm8SBnEE1wRgpQZtJEZa4SU8%2FA4oVU9F9tm3vWmukRYCpUJCUN1qFT4vb8qpyp4sSxUCNRuVrcaxt2r71IJx3fmNc7Gx%2BpBtHUsUYCZrPIEODMDob8hGJWkwtkWx5k7ewyHBaEaJv8AdmUrbNjD2OTM1i9zPJGkzL9%2Ba6JGsXvyIgktmlu2uuAzcjn7EfzE6rhDaV0Mq7iUpR43mME8ryfCvYRLLMff5pZ0cNqsYD4Ann67n4Dw21iLUMVXwKh9V1nW6J9i7Y%2FqswjKLB%2FSong%2B%2BIwV0WFciW8wqgIDYdGp1xectdRsKHhdWkD%2BYPEOKUWluMj2cI%2B8z1HNopfna7ZURyUz31RhwPREBfMt6cT6W32oXuRurqGfAhEVWwPfK%2BxFKIL6%2F4bNI4yhoXRyrdrd0BGsYCZYl2Ua0sapZ3my%2FlmOTaapTAPmrMPbIBFo91xn8PHcMJLqvL0GOqUBf3WB3rctrs%2FnW7s3bBHXbDy63NAAC7fW0ey%2Fh4WegTdl7Brtz2Kr7GMo6gi47TxRxu4xB0dETUFpf8puMXHh%2Fsh5zbrk0VAH1vel1HVxxi27CxsBhqVX48OEs1pRv9ce3SaG2iwBD6nXqNagVKy%2FKgJsT0z8WFGDNySngVpL3atxEeo1FQB69NhXsWSFXA87TVz4GqudUVlkX7YhdKflSMeQWzRA&X-Amz-Signature=d6110c9a91330c1069c5e59c78d06f867d9e8b13d7eeafc36cc8d1325e5287f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
