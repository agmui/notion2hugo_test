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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZ7N7BF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb6CrL%2BTipq4ZJZWiCJji3u8G8HTGmpKSaENaRo2wIOAiEArb4iG3bc5cJrzafoGCHE3x1ZcvD9ldsw7zT%2FgPKzYD0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPC944aW%2Bd5R6mm1jircA1VcVtQv4z5KSgW2VxIvT18DkBnuVWm4Po9eUhVLML9bq%2BI5PyuX6VPyS9pIFtmqPrxsHudUBHUDEpx%2FVatQWEC9L3FJLQw8TU0gVg4CYLncznI3SnHfR4b7kmTbqqE%2F13vc16%2FBaAEOipmA6FNJ45PZbKQ1ejIFqfT1UuYTg2uuyY%2FE5rjg%2BqSYYAwY8qf7jQiq7mMQ0RRZiQZtCB8yt%2BtrKLWTAivTypiOcy%2FJ%2F3zKUWigJkSiDxkbSvx%2FJ7C8kMpZuWFuPpYtBN3oPpK7beyi%2FihgRQi63OlJc8iK8V%2BGnzPmE8iipLXFL1y5P4wylhLyd5UA8usH%2BkQwTp9nJwTY1fDag0UJb9ALkL1V35t%2BCle34z48Bs7LOi3r%2FILhk8jpaxj%2Fvm0usAj7zfOh2I2cYYUIg6S0wwvqDkEE7U2JT4aMWsgX5T93dO4SDRbtWBXz7%2Br0v8ZwcU2fzcTCXIc7VrvBJdxRVdsz6Y9CY4HlCBepYUt%2BToHazlyNqAOQyRfCcR%2Bk1xVmc4Y8Kn9unJPideZL%2FG11TtfxG38DJ36ZG1vBKCKfnbq5iyP5hn%2FHU4oHYB3QWnH86%2FzcbQV%2BcRnG5VXp8VXsBfEREvDoNO%2FONRmgbazxKVXzONWoMODclr8GOqUB4e3tJFXSPwytXRGD5LuJzy1fauxLPKurCzXSkFYgAiEhPeWW8qk9I8yDzM8yVCjDC%2BfWLtnCgcrmgbprDi1hrqXoYJ7%2F1mgJz%2BTcI7NboE7k6F8We6t7sxLKFy981JDSi2yvaWU8r7bU4XO2YAwIkcY1ajkALq8elnHNJyxPxO0Pt4euVDGK%2Fttwod1UhpNUHsCFnhoFtSNA9VIn3hnKlcpmNfce&X-Amz-Signature=26ad0af96684fbf4005ebd5455bfe0dd32291d88a56309ece25e23ed63ea2a41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZ7N7BF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb6CrL%2BTipq4ZJZWiCJji3u8G8HTGmpKSaENaRo2wIOAiEArb4iG3bc5cJrzafoGCHE3x1ZcvD9ldsw7zT%2FgPKzYD0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPC944aW%2Bd5R6mm1jircA1VcVtQv4z5KSgW2VxIvT18DkBnuVWm4Po9eUhVLML9bq%2BI5PyuX6VPyS9pIFtmqPrxsHudUBHUDEpx%2FVatQWEC9L3FJLQw8TU0gVg4CYLncznI3SnHfR4b7kmTbqqE%2F13vc16%2FBaAEOipmA6FNJ45PZbKQ1ejIFqfT1UuYTg2uuyY%2FE5rjg%2BqSYYAwY8qf7jQiq7mMQ0RRZiQZtCB8yt%2BtrKLWTAivTypiOcy%2FJ%2F3zKUWigJkSiDxkbSvx%2FJ7C8kMpZuWFuPpYtBN3oPpK7beyi%2FihgRQi63OlJc8iK8V%2BGnzPmE8iipLXFL1y5P4wylhLyd5UA8usH%2BkQwTp9nJwTY1fDag0UJb9ALkL1V35t%2BCle34z48Bs7LOi3r%2FILhk8jpaxj%2Fvm0usAj7zfOh2I2cYYUIg6S0wwvqDkEE7U2JT4aMWsgX5T93dO4SDRbtWBXz7%2Br0v8ZwcU2fzcTCXIc7VrvBJdxRVdsz6Y9CY4HlCBepYUt%2BToHazlyNqAOQyRfCcR%2Bk1xVmc4Y8Kn9unJPideZL%2FG11TtfxG38DJ36ZG1vBKCKfnbq5iyP5hn%2FHU4oHYB3QWnH86%2FzcbQV%2BcRnG5VXp8VXsBfEREvDoNO%2FONRmgbazxKVXzONWoMODclr8GOqUB4e3tJFXSPwytXRGD5LuJzy1fauxLPKurCzXSkFYgAiEhPeWW8qk9I8yDzM8yVCjDC%2BfWLtnCgcrmgbprDi1hrqXoYJ7%2F1mgJz%2BTcI7NboE7k6F8We6t7sxLKFy981JDSi2yvaWU8r7bU4XO2YAwIkcY1ajkALq8elnHNJyxPxO0Pt4euVDGK%2Fttwod1UhpNUHsCFnhoFtSNA9VIn3hnKlcpmNfce&X-Amz-Signature=a7d449790665be2e06e1ea7600f7c692335fe260adbf5232b86f8db7c46a9007&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZ7N7BF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb6CrL%2BTipq4ZJZWiCJji3u8G8HTGmpKSaENaRo2wIOAiEArb4iG3bc5cJrzafoGCHE3x1ZcvD9ldsw7zT%2FgPKzYD0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPC944aW%2Bd5R6mm1jircA1VcVtQv4z5KSgW2VxIvT18DkBnuVWm4Po9eUhVLML9bq%2BI5PyuX6VPyS9pIFtmqPrxsHudUBHUDEpx%2FVatQWEC9L3FJLQw8TU0gVg4CYLncznI3SnHfR4b7kmTbqqE%2F13vc16%2FBaAEOipmA6FNJ45PZbKQ1ejIFqfT1UuYTg2uuyY%2FE5rjg%2BqSYYAwY8qf7jQiq7mMQ0RRZiQZtCB8yt%2BtrKLWTAivTypiOcy%2FJ%2F3zKUWigJkSiDxkbSvx%2FJ7C8kMpZuWFuPpYtBN3oPpK7beyi%2FihgRQi63OlJc8iK8V%2BGnzPmE8iipLXFL1y5P4wylhLyd5UA8usH%2BkQwTp9nJwTY1fDag0UJb9ALkL1V35t%2BCle34z48Bs7LOi3r%2FILhk8jpaxj%2Fvm0usAj7zfOh2I2cYYUIg6S0wwvqDkEE7U2JT4aMWsgX5T93dO4SDRbtWBXz7%2Br0v8ZwcU2fzcTCXIc7VrvBJdxRVdsz6Y9CY4HlCBepYUt%2BToHazlyNqAOQyRfCcR%2Bk1xVmc4Y8Kn9unJPideZL%2FG11TtfxG38DJ36ZG1vBKCKfnbq5iyP5hn%2FHU4oHYB3QWnH86%2FzcbQV%2BcRnG5VXp8VXsBfEREvDoNO%2FONRmgbazxKVXzONWoMODclr8GOqUB4e3tJFXSPwytXRGD5LuJzy1fauxLPKurCzXSkFYgAiEhPeWW8qk9I8yDzM8yVCjDC%2BfWLtnCgcrmgbprDi1hrqXoYJ7%2F1mgJz%2BTcI7NboE7k6F8We6t7sxLKFy981JDSi2yvaWU8r7bU4XO2YAwIkcY1ajkALq8elnHNJyxPxO0Pt4euVDGK%2Fttwod1UhpNUHsCFnhoFtSNA9VIn3hnKlcpmNfce&X-Amz-Signature=09f87975d0e281b258b303999a11d727ef906189a52bc21af274638007599f24&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZ7N7BF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb6CrL%2BTipq4ZJZWiCJji3u8G8HTGmpKSaENaRo2wIOAiEArb4iG3bc5cJrzafoGCHE3x1ZcvD9ldsw7zT%2FgPKzYD0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPC944aW%2Bd5R6mm1jircA1VcVtQv4z5KSgW2VxIvT18DkBnuVWm4Po9eUhVLML9bq%2BI5PyuX6VPyS9pIFtmqPrxsHudUBHUDEpx%2FVatQWEC9L3FJLQw8TU0gVg4CYLncznI3SnHfR4b7kmTbqqE%2F13vc16%2FBaAEOipmA6FNJ45PZbKQ1ejIFqfT1UuYTg2uuyY%2FE5rjg%2BqSYYAwY8qf7jQiq7mMQ0RRZiQZtCB8yt%2BtrKLWTAivTypiOcy%2FJ%2F3zKUWigJkSiDxkbSvx%2FJ7C8kMpZuWFuPpYtBN3oPpK7beyi%2FihgRQi63OlJc8iK8V%2BGnzPmE8iipLXFL1y5P4wylhLyd5UA8usH%2BkQwTp9nJwTY1fDag0UJb9ALkL1V35t%2BCle34z48Bs7LOi3r%2FILhk8jpaxj%2Fvm0usAj7zfOh2I2cYYUIg6S0wwvqDkEE7U2JT4aMWsgX5T93dO4SDRbtWBXz7%2Br0v8ZwcU2fzcTCXIc7VrvBJdxRVdsz6Y9CY4HlCBepYUt%2BToHazlyNqAOQyRfCcR%2Bk1xVmc4Y8Kn9unJPideZL%2FG11TtfxG38DJ36ZG1vBKCKfnbq5iyP5hn%2FHU4oHYB3QWnH86%2FzcbQV%2BcRnG5VXp8VXsBfEREvDoNO%2FONRmgbazxKVXzONWoMODclr8GOqUB4e3tJFXSPwytXRGD5LuJzy1fauxLPKurCzXSkFYgAiEhPeWW8qk9I8yDzM8yVCjDC%2BfWLtnCgcrmgbprDi1hrqXoYJ7%2F1mgJz%2BTcI7NboE7k6F8We6t7sxLKFy981JDSi2yvaWU8r7bU4XO2YAwIkcY1ajkALq8elnHNJyxPxO0Pt4euVDGK%2Fttwod1UhpNUHsCFnhoFtSNA9VIn3hnKlcpmNfce&X-Amz-Signature=770e410cf83aeb71466ee268e6a8f1c68d54258b14c669111437dfabe9b3915f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZ7N7BF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb6CrL%2BTipq4ZJZWiCJji3u8G8HTGmpKSaENaRo2wIOAiEArb4iG3bc5cJrzafoGCHE3x1ZcvD9ldsw7zT%2FgPKzYD0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPC944aW%2Bd5R6mm1jircA1VcVtQv4z5KSgW2VxIvT18DkBnuVWm4Po9eUhVLML9bq%2BI5PyuX6VPyS9pIFtmqPrxsHudUBHUDEpx%2FVatQWEC9L3FJLQw8TU0gVg4CYLncznI3SnHfR4b7kmTbqqE%2F13vc16%2FBaAEOipmA6FNJ45PZbKQ1ejIFqfT1UuYTg2uuyY%2FE5rjg%2BqSYYAwY8qf7jQiq7mMQ0RRZiQZtCB8yt%2BtrKLWTAivTypiOcy%2FJ%2F3zKUWigJkSiDxkbSvx%2FJ7C8kMpZuWFuPpYtBN3oPpK7beyi%2FihgRQi63OlJc8iK8V%2BGnzPmE8iipLXFL1y5P4wylhLyd5UA8usH%2BkQwTp9nJwTY1fDag0UJb9ALkL1V35t%2BCle34z48Bs7LOi3r%2FILhk8jpaxj%2Fvm0usAj7zfOh2I2cYYUIg6S0wwvqDkEE7U2JT4aMWsgX5T93dO4SDRbtWBXz7%2Br0v8ZwcU2fzcTCXIc7VrvBJdxRVdsz6Y9CY4HlCBepYUt%2BToHazlyNqAOQyRfCcR%2Bk1xVmc4Y8Kn9unJPideZL%2FG11TtfxG38DJ36ZG1vBKCKfnbq5iyP5hn%2FHU4oHYB3QWnH86%2FzcbQV%2BcRnG5VXp8VXsBfEREvDoNO%2FONRmgbazxKVXzONWoMODclr8GOqUB4e3tJFXSPwytXRGD5LuJzy1fauxLPKurCzXSkFYgAiEhPeWW8qk9I8yDzM8yVCjDC%2BfWLtnCgcrmgbprDi1hrqXoYJ7%2F1mgJz%2BTcI7NboE7k6F8We6t7sxLKFy981JDSi2yvaWU8r7bU4XO2YAwIkcY1ajkALq8elnHNJyxPxO0Pt4euVDGK%2Fttwod1UhpNUHsCFnhoFtSNA9VIn3hnKlcpmNfce&X-Amz-Signature=c3712a1a598b3f05c02bd174b22b9d52b2535ae52936e241abe1d27e1fa8f195&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
