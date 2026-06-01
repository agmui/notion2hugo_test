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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRJDTEG%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD3FiJFqkCRpQzwLrYFgmqKGbZpHHq19gP1tjKZQrfblAIhAM616c6kw8vgKkpAqqpC%2BeQ%2BiY2Lce4omf2wO2NAUC2iKv8DCAIQABoMNjM3NDIzMTgzODA1IgwDGF0j%2Bz2yZoqAKrcq3AMwK82lMMsNXJskqGcDf51oG8YIeG%2Ftk9G7ZjWx33zcdeEzHLB4lnuLfIIkvNrL4S7NS%2FXagI5sF5T7npd1CyNBTKaGHLwXm9KXxaD2lTwbLH8gsaUqX2nHsNVVK0zbXaeJsTBPI4Jj%2Bg%2Fcd0Wn6wfxdn0wRYtiYjObfx9lOjgTN12av6ovAu86Xu%2FVkjggGVCGwiwZK9BUPlFRF3iPw8J3UtgJMUt1NAfHpINwSiRgNqhx9eBEDK%2F%2FBM5MyFttY0I7L7Ys%2BRl6uQ6ql5f8iWhR6K3nSumtA7qvyiGB4MR7AgE%2Fet3NIwtvr0l4VPfCI7oO2qIPVeOCDTW2Q4nkFEAAYuxGxjZqSFZsTTVUDyTiRcngcW7f3twS9Zv6ZPmXQZ3eCiRCu36dWoxod8BLuMGz%2F0CJqf0QXGRAB6pYjAu8n1wMj896KqrBfYbH8D9dDF%2BOXq%2BlrIvjNH%2BNFUqAGXg9oz4zEEGHmsC%2B0HMoZr6Bxedqowr6ziYtkF3FXi3PpFdfsJheg%2Bc2lmnNld4lXfL2YgmvqX%2BkbzLBHvybSYoIOUMIPeKH0bVmkTizxRcsKPYPchT6XbFzFgpdyDc0DlI%2FOJf1kzD8SGZ5OlnU5a1anm0Fy6u3Gw%2Bvd1U7LDDBp%2FPQBjqkAfd3%2BXhMBDSvC2Hf6SFatuckvu3Gy9O%2BMrXE1TInoP89wI3p88YRZVX9TnaY3mn10y9DizSobKTrRNf%2BREltTjM%2BrRpEqIWtDhe4ISLgcknDCKybZ0kAVCNUhuHnRXW12A3f5NtT3UmetrIun1nHpeR%2BcDrsi%2BukCzyCl%2F446BMl9RLPfCOAf3Gd5q6u1fd1%2BQ5xaAU0uncgEBgIs5SlaNeQKLkQ&X-Amz-Signature=18ad6827a122f6457ea3412e97830e939650d35e6602cdd67821cf80e3e705ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRJDTEG%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD3FiJFqkCRpQzwLrYFgmqKGbZpHHq19gP1tjKZQrfblAIhAM616c6kw8vgKkpAqqpC%2BeQ%2BiY2Lce4omf2wO2NAUC2iKv8DCAIQABoMNjM3NDIzMTgzODA1IgwDGF0j%2Bz2yZoqAKrcq3AMwK82lMMsNXJskqGcDf51oG8YIeG%2Ftk9G7ZjWx33zcdeEzHLB4lnuLfIIkvNrL4S7NS%2FXagI5sF5T7npd1CyNBTKaGHLwXm9KXxaD2lTwbLH8gsaUqX2nHsNVVK0zbXaeJsTBPI4Jj%2Bg%2Fcd0Wn6wfxdn0wRYtiYjObfx9lOjgTN12av6ovAu86Xu%2FVkjggGVCGwiwZK9BUPlFRF3iPw8J3UtgJMUt1NAfHpINwSiRgNqhx9eBEDK%2F%2FBM5MyFttY0I7L7Ys%2BRl6uQ6ql5f8iWhR6K3nSumtA7qvyiGB4MR7AgE%2Fet3NIwtvr0l4VPfCI7oO2qIPVeOCDTW2Q4nkFEAAYuxGxjZqSFZsTTVUDyTiRcngcW7f3twS9Zv6ZPmXQZ3eCiRCu36dWoxod8BLuMGz%2F0CJqf0QXGRAB6pYjAu8n1wMj896KqrBfYbH8D9dDF%2BOXq%2BlrIvjNH%2BNFUqAGXg9oz4zEEGHmsC%2B0HMoZr6Bxedqowr6ziYtkF3FXi3PpFdfsJheg%2Bc2lmnNld4lXfL2YgmvqX%2BkbzLBHvybSYoIOUMIPeKH0bVmkTizxRcsKPYPchT6XbFzFgpdyDc0DlI%2FOJf1kzD8SGZ5OlnU5a1anm0Fy6u3Gw%2Bvd1U7LDDBp%2FPQBjqkAfd3%2BXhMBDSvC2Hf6SFatuckvu3Gy9O%2BMrXE1TInoP89wI3p88YRZVX9TnaY3mn10y9DizSobKTrRNf%2BREltTjM%2BrRpEqIWtDhe4ISLgcknDCKybZ0kAVCNUhuHnRXW12A3f5NtT3UmetrIun1nHpeR%2BcDrsi%2BukCzyCl%2F446BMl9RLPfCOAf3Gd5q6u1fd1%2BQ5xaAU0uncgEBgIs5SlaNeQKLkQ&X-Amz-Signature=dfd63fa3e8df707ded1c452051d145d9e50e5e8fd5d9d0923118c72620217c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRJDTEG%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD3FiJFqkCRpQzwLrYFgmqKGbZpHHq19gP1tjKZQrfblAIhAM616c6kw8vgKkpAqqpC%2BeQ%2BiY2Lce4omf2wO2NAUC2iKv8DCAIQABoMNjM3NDIzMTgzODA1IgwDGF0j%2Bz2yZoqAKrcq3AMwK82lMMsNXJskqGcDf51oG8YIeG%2Ftk9G7ZjWx33zcdeEzHLB4lnuLfIIkvNrL4S7NS%2FXagI5sF5T7npd1CyNBTKaGHLwXm9KXxaD2lTwbLH8gsaUqX2nHsNVVK0zbXaeJsTBPI4Jj%2Bg%2Fcd0Wn6wfxdn0wRYtiYjObfx9lOjgTN12av6ovAu86Xu%2FVkjggGVCGwiwZK9BUPlFRF3iPw8J3UtgJMUt1NAfHpINwSiRgNqhx9eBEDK%2F%2FBM5MyFttY0I7L7Ys%2BRl6uQ6ql5f8iWhR6K3nSumtA7qvyiGB4MR7AgE%2Fet3NIwtvr0l4VPfCI7oO2qIPVeOCDTW2Q4nkFEAAYuxGxjZqSFZsTTVUDyTiRcngcW7f3twS9Zv6ZPmXQZ3eCiRCu36dWoxod8BLuMGz%2F0CJqf0QXGRAB6pYjAu8n1wMj896KqrBfYbH8D9dDF%2BOXq%2BlrIvjNH%2BNFUqAGXg9oz4zEEGHmsC%2B0HMoZr6Bxedqowr6ziYtkF3FXi3PpFdfsJheg%2Bc2lmnNld4lXfL2YgmvqX%2BkbzLBHvybSYoIOUMIPeKH0bVmkTizxRcsKPYPchT6XbFzFgpdyDc0DlI%2FOJf1kzD8SGZ5OlnU5a1anm0Fy6u3Gw%2Bvd1U7LDDBp%2FPQBjqkAfd3%2BXhMBDSvC2Hf6SFatuckvu3Gy9O%2BMrXE1TInoP89wI3p88YRZVX9TnaY3mn10y9DizSobKTrRNf%2BREltTjM%2BrRpEqIWtDhe4ISLgcknDCKybZ0kAVCNUhuHnRXW12A3f5NtT3UmetrIun1nHpeR%2BcDrsi%2BukCzyCl%2F446BMl9RLPfCOAf3Gd5q6u1fd1%2BQ5xaAU0uncgEBgIs5SlaNeQKLkQ&X-Amz-Signature=2ed6b8e4a5426de89d75b10c569fafb62795bc684bcbc2ddde21e99eca9bf391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRJDTEG%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD3FiJFqkCRpQzwLrYFgmqKGbZpHHq19gP1tjKZQrfblAIhAM616c6kw8vgKkpAqqpC%2BeQ%2BiY2Lce4omf2wO2NAUC2iKv8DCAIQABoMNjM3NDIzMTgzODA1IgwDGF0j%2Bz2yZoqAKrcq3AMwK82lMMsNXJskqGcDf51oG8YIeG%2Ftk9G7ZjWx33zcdeEzHLB4lnuLfIIkvNrL4S7NS%2FXagI5sF5T7npd1CyNBTKaGHLwXm9KXxaD2lTwbLH8gsaUqX2nHsNVVK0zbXaeJsTBPI4Jj%2Bg%2Fcd0Wn6wfxdn0wRYtiYjObfx9lOjgTN12av6ovAu86Xu%2FVkjggGVCGwiwZK9BUPlFRF3iPw8J3UtgJMUt1NAfHpINwSiRgNqhx9eBEDK%2F%2FBM5MyFttY0I7L7Ys%2BRl6uQ6ql5f8iWhR6K3nSumtA7qvyiGB4MR7AgE%2Fet3NIwtvr0l4VPfCI7oO2qIPVeOCDTW2Q4nkFEAAYuxGxjZqSFZsTTVUDyTiRcngcW7f3twS9Zv6ZPmXQZ3eCiRCu36dWoxod8BLuMGz%2F0CJqf0QXGRAB6pYjAu8n1wMj896KqrBfYbH8D9dDF%2BOXq%2BlrIvjNH%2BNFUqAGXg9oz4zEEGHmsC%2B0HMoZr6Bxedqowr6ziYtkF3FXi3PpFdfsJheg%2Bc2lmnNld4lXfL2YgmvqX%2BkbzLBHvybSYoIOUMIPeKH0bVmkTizxRcsKPYPchT6XbFzFgpdyDc0DlI%2FOJf1kzD8SGZ5OlnU5a1anm0Fy6u3Gw%2Bvd1U7LDDBp%2FPQBjqkAfd3%2BXhMBDSvC2Hf6SFatuckvu3Gy9O%2BMrXE1TInoP89wI3p88YRZVX9TnaY3mn10y9DizSobKTrRNf%2BREltTjM%2BrRpEqIWtDhe4ISLgcknDCKybZ0kAVCNUhuHnRXW12A3f5NtT3UmetrIun1nHpeR%2BcDrsi%2BukCzyCl%2F446BMl9RLPfCOAf3Gd5q6u1fd1%2BQ5xaAU0uncgEBgIs5SlaNeQKLkQ&X-Amz-Signature=43249c94bf92e48d8f7591d2ed69e1bbc78c26af7ccfac00a66b922dadc0846d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRJDTEG%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD3FiJFqkCRpQzwLrYFgmqKGbZpHHq19gP1tjKZQrfblAIhAM616c6kw8vgKkpAqqpC%2BeQ%2BiY2Lce4omf2wO2NAUC2iKv8DCAIQABoMNjM3NDIzMTgzODA1IgwDGF0j%2Bz2yZoqAKrcq3AMwK82lMMsNXJskqGcDf51oG8YIeG%2Ftk9G7ZjWx33zcdeEzHLB4lnuLfIIkvNrL4S7NS%2FXagI5sF5T7npd1CyNBTKaGHLwXm9KXxaD2lTwbLH8gsaUqX2nHsNVVK0zbXaeJsTBPI4Jj%2Bg%2Fcd0Wn6wfxdn0wRYtiYjObfx9lOjgTN12av6ovAu86Xu%2FVkjggGVCGwiwZK9BUPlFRF3iPw8J3UtgJMUt1NAfHpINwSiRgNqhx9eBEDK%2F%2FBM5MyFttY0I7L7Ys%2BRl6uQ6ql5f8iWhR6K3nSumtA7qvyiGB4MR7AgE%2Fet3NIwtvr0l4VPfCI7oO2qIPVeOCDTW2Q4nkFEAAYuxGxjZqSFZsTTVUDyTiRcngcW7f3twS9Zv6ZPmXQZ3eCiRCu36dWoxod8BLuMGz%2F0CJqf0QXGRAB6pYjAu8n1wMj896KqrBfYbH8D9dDF%2BOXq%2BlrIvjNH%2BNFUqAGXg9oz4zEEGHmsC%2B0HMoZr6Bxedqowr6ziYtkF3FXi3PpFdfsJheg%2Bc2lmnNld4lXfL2YgmvqX%2BkbzLBHvybSYoIOUMIPeKH0bVmkTizxRcsKPYPchT6XbFzFgpdyDc0DlI%2FOJf1kzD8SGZ5OlnU5a1anm0Fy6u3Gw%2Bvd1U7LDDBp%2FPQBjqkAfd3%2BXhMBDSvC2Hf6SFatuckvu3Gy9O%2BMrXE1TInoP89wI3p88YRZVX9TnaY3mn10y9DizSobKTrRNf%2BREltTjM%2BrRpEqIWtDhe4ISLgcknDCKybZ0kAVCNUhuHnRXW12A3f5NtT3UmetrIun1nHpeR%2BcDrsi%2BukCzyCl%2F446BMl9RLPfCOAf3Gd5q6u1fd1%2BQ5xaAU0uncgEBgIs5SlaNeQKLkQ&X-Amz-Signature=ed5eb7ceba954481a214bbcd489bcf1f2e87a6aae1c229425763642fdb47594b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
