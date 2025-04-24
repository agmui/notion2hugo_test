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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMY26OT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDJOnBvAnUc6SS1YL1HDPyVKKs8wGyOq8jTqis33BTdUAIhAPyrXHo5rlNVC0LSlim1YSgVWtrMP5hU0XJ%2BWiOcr5AYKv8DCBAQABoMNjM3NDIzMTgzODA1Igx6suQb%2FBV3%2B27diL4q3ANOZTKPi6ZBG%2Bk3UGh4kPlj45N6w6%2B9P6u5k4fi4HfIanpTnca616OffEmhVyXj7uhha56zm31A5b4f6srwA7uhwUBpKo%2FHda8TrcpMirLl8wTNsIAhaozIFRd4BijMFG6ATNT8mi%2FiTq2oGHngPRyGx0u7JWjY8MfwORTs4CWjvqtgnCVQl1YW%2F%2Bwiz%2FqdJmU5abfPIB391GzOyQ%2BkCajB7nJ0RqqeSWCd76A%2FE%2B4mqWGt%2Bbj5kjR6JhsnVZvgeHS1IWmaNz2zdu46ImruDnbbt33v0KO5H7AZwLhJ5JTqYSfCA9gJtq01QPhrol8%2F1DwYf5MChpbiuZw3uEzPjkdFTv9GVcKaQNSQXZYX7s3qA631kvFIigKWgpuHKT2OHUh%2BbCsVW0fa8b7kZKN15rQoTK2akiglc7VJwnNZYC2p7Nc%2BVJnZOyboWla3t8ap1rfm%2BhcJjePJpF5S9Jod4N1enF32xfeYdjr7%2FsKHasNQa6xw%2BbCuylA5EekovLrjiRrzBJcUPioAQkrIdOmYi0XBlOKUa9hI9uGzqbapYmzFsawU8XcsxY3Wp6PYgg4HFvPq719hno97RLl2WNIZ098a5XvkLBkPDYCkQ59Z2uBZ2SwH2Avt%2FtvxvsqO4TC5zqfABjqkAfzGr5jj1e3HnxYYOAChCXT37FmU5M5XAKNrBsL7kxBKWZ3c0cG%2BnhrM5keILrF6LP7TlymK3S419L1sFbTzvcerZ0K0qD8R%2F2yIoU2zx4rRpGl7PPfDCjgIbiG3F4Ls9Itgc1%2Fp0w7726BXLqsF0V6Gz878%2BuG%2F7tqaNAGEYMPDwzdSv2ymeRBjl3Yl1OMN1MoDgB5Za7AE66hWdsm%2FCR8HYMYs&X-Amz-Signature=66f3f09ba02fde462daaf690bb787f83483ad1576f429aa8288a6dc13ee37685&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMY26OT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDJOnBvAnUc6SS1YL1HDPyVKKs8wGyOq8jTqis33BTdUAIhAPyrXHo5rlNVC0LSlim1YSgVWtrMP5hU0XJ%2BWiOcr5AYKv8DCBAQABoMNjM3NDIzMTgzODA1Igx6suQb%2FBV3%2B27diL4q3ANOZTKPi6ZBG%2Bk3UGh4kPlj45N6w6%2B9P6u5k4fi4HfIanpTnca616OffEmhVyXj7uhha56zm31A5b4f6srwA7uhwUBpKo%2FHda8TrcpMirLl8wTNsIAhaozIFRd4BijMFG6ATNT8mi%2FiTq2oGHngPRyGx0u7JWjY8MfwORTs4CWjvqtgnCVQl1YW%2F%2Bwiz%2FqdJmU5abfPIB391GzOyQ%2BkCajB7nJ0RqqeSWCd76A%2FE%2B4mqWGt%2Bbj5kjR6JhsnVZvgeHS1IWmaNz2zdu46ImruDnbbt33v0KO5H7AZwLhJ5JTqYSfCA9gJtq01QPhrol8%2F1DwYf5MChpbiuZw3uEzPjkdFTv9GVcKaQNSQXZYX7s3qA631kvFIigKWgpuHKT2OHUh%2BbCsVW0fa8b7kZKN15rQoTK2akiglc7VJwnNZYC2p7Nc%2BVJnZOyboWla3t8ap1rfm%2BhcJjePJpF5S9Jod4N1enF32xfeYdjr7%2FsKHasNQa6xw%2BbCuylA5EekovLrjiRrzBJcUPioAQkrIdOmYi0XBlOKUa9hI9uGzqbapYmzFsawU8XcsxY3Wp6PYgg4HFvPq719hno97RLl2WNIZ098a5XvkLBkPDYCkQ59Z2uBZ2SwH2Avt%2FtvxvsqO4TC5zqfABjqkAfzGr5jj1e3HnxYYOAChCXT37FmU5M5XAKNrBsL7kxBKWZ3c0cG%2BnhrM5keILrF6LP7TlymK3S419L1sFbTzvcerZ0K0qD8R%2F2yIoU2zx4rRpGl7PPfDCjgIbiG3F4Ls9Itgc1%2Fp0w7726BXLqsF0V6Gz878%2BuG%2F7tqaNAGEYMPDwzdSv2ymeRBjl3Yl1OMN1MoDgB5Za7AE66hWdsm%2FCR8HYMYs&X-Amz-Signature=e991f03cf575279b34038e2bbfedaecb401a71d2303b559b0e20f8dfba46984c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMY26OT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDJOnBvAnUc6SS1YL1HDPyVKKs8wGyOq8jTqis33BTdUAIhAPyrXHo5rlNVC0LSlim1YSgVWtrMP5hU0XJ%2BWiOcr5AYKv8DCBAQABoMNjM3NDIzMTgzODA1Igx6suQb%2FBV3%2B27diL4q3ANOZTKPi6ZBG%2Bk3UGh4kPlj45N6w6%2B9P6u5k4fi4HfIanpTnca616OffEmhVyXj7uhha56zm31A5b4f6srwA7uhwUBpKo%2FHda8TrcpMirLl8wTNsIAhaozIFRd4BijMFG6ATNT8mi%2FiTq2oGHngPRyGx0u7JWjY8MfwORTs4CWjvqtgnCVQl1YW%2F%2Bwiz%2FqdJmU5abfPIB391GzOyQ%2BkCajB7nJ0RqqeSWCd76A%2FE%2B4mqWGt%2Bbj5kjR6JhsnVZvgeHS1IWmaNz2zdu46ImruDnbbt33v0KO5H7AZwLhJ5JTqYSfCA9gJtq01QPhrol8%2F1DwYf5MChpbiuZw3uEzPjkdFTv9GVcKaQNSQXZYX7s3qA631kvFIigKWgpuHKT2OHUh%2BbCsVW0fa8b7kZKN15rQoTK2akiglc7VJwnNZYC2p7Nc%2BVJnZOyboWla3t8ap1rfm%2BhcJjePJpF5S9Jod4N1enF32xfeYdjr7%2FsKHasNQa6xw%2BbCuylA5EekovLrjiRrzBJcUPioAQkrIdOmYi0XBlOKUa9hI9uGzqbapYmzFsawU8XcsxY3Wp6PYgg4HFvPq719hno97RLl2WNIZ098a5XvkLBkPDYCkQ59Z2uBZ2SwH2Avt%2FtvxvsqO4TC5zqfABjqkAfzGr5jj1e3HnxYYOAChCXT37FmU5M5XAKNrBsL7kxBKWZ3c0cG%2BnhrM5keILrF6LP7TlymK3S419L1sFbTzvcerZ0K0qD8R%2F2yIoU2zx4rRpGl7PPfDCjgIbiG3F4Ls9Itgc1%2Fp0w7726BXLqsF0V6Gz878%2BuG%2F7tqaNAGEYMPDwzdSv2ymeRBjl3Yl1OMN1MoDgB5Za7AE66hWdsm%2FCR8HYMYs&X-Amz-Signature=b70472d70a00cf4327fdcaa026056f7f582664c36512a8865e18ab799315da14&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMY26OT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDJOnBvAnUc6SS1YL1HDPyVKKs8wGyOq8jTqis33BTdUAIhAPyrXHo5rlNVC0LSlim1YSgVWtrMP5hU0XJ%2BWiOcr5AYKv8DCBAQABoMNjM3NDIzMTgzODA1Igx6suQb%2FBV3%2B27diL4q3ANOZTKPi6ZBG%2Bk3UGh4kPlj45N6w6%2B9P6u5k4fi4HfIanpTnca616OffEmhVyXj7uhha56zm31A5b4f6srwA7uhwUBpKo%2FHda8TrcpMirLl8wTNsIAhaozIFRd4BijMFG6ATNT8mi%2FiTq2oGHngPRyGx0u7JWjY8MfwORTs4CWjvqtgnCVQl1YW%2F%2Bwiz%2FqdJmU5abfPIB391GzOyQ%2BkCajB7nJ0RqqeSWCd76A%2FE%2B4mqWGt%2Bbj5kjR6JhsnVZvgeHS1IWmaNz2zdu46ImruDnbbt33v0KO5H7AZwLhJ5JTqYSfCA9gJtq01QPhrol8%2F1DwYf5MChpbiuZw3uEzPjkdFTv9GVcKaQNSQXZYX7s3qA631kvFIigKWgpuHKT2OHUh%2BbCsVW0fa8b7kZKN15rQoTK2akiglc7VJwnNZYC2p7Nc%2BVJnZOyboWla3t8ap1rfm%2BhcJjePJpF5S9Jod4N1enF32xfeYdjr7%2FsKHasNQa6xw%2BbCuylA5EekovLrjiRrzBJcUPioAQkrIdOmYi0XBlOKUa9hI9uGzqbapYmzFsawU8XcsxY3Wp6PYgg4HFvPq719hno97RLl2WNIZ098a5XvkLBkPDYCkQ59Z2uBZ2SwH2Avt%2FtvxvsqO4TC5zqfABjqkAfzGr5jj1e3HnxYYOAChCXT37FmU5M5XAKNrBsL7kxBKWZ3c0cG%2BnhrM5keILrF6LP7TlymK3S419L1sFbTzvcerZ0K0qD8R%2F2yIoU2zx4rRpGl7PPfDCjgIbiG3F4Ls9Itgc1%2Fp0w7726BXLqsF0V6Gz878%2BuG%2F7tqaNAGEYMPDwzdSv2ymeRBjl3Yl1OMN1MoDgB5Za7AE66hWdsm%2FCR8HYMYs&X-Amz-Signature=73beebb0adbe4257334831037da4773d973d42bef8a726013f40920358251311&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMY26OT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDJOnBvAnUc6SS1YL1HDPyVKKs8wGyOq8jTqis33BTdUAIhAPyrXHo5rlNVC0LSlim1YSgVWtrMP5hU0XJ%2BWiOcr5AYKv8DCBAQABoMNjM3NDIzMTgzODA1Igx6suQb%2FBV3%2B27diL4q3ANOZTKPi6ZBG%2Bk3UGh4kPlj45N6w6%2B9P6u5k4fi4HfIanpTnca616OffEmhVyXj7uhha56zm31A5b4f6srwA7uhwUBpKo%2FHda8TrcpMirLl8wTNsIAhaozIFRd4BijMFG6ATNT8mi%2FiTq2oGHngPRyGx0u7JWjY8MfwORTs4CWjvqtgnCVQl1YW%2F%2Bwiz%2FqdJmU5abfPIB391GzOyQ%2BkCajB7nJ0RqqeSWCd76A%2FE%2B4mqWGt%2Bbj5kjR6JhsnVZvgeHS1IWmaNz2zdu46ImruDnbbt33v0KO5H7AZwLhJ5JTqYSfCA9gJtq01QPhrol8%2F1DwYf5MChpbiuZw3uEzPjkdFTv9GVcKaQNSQXZYX7s3qA631kvFIigKWgpuHKT2OHUh%2BbCsVW0fa8b7kZKN15rQoTK2akiglc7VJwnNZYC2p7Nc%2BVJnZOyboWla3t8ap1rfm%2BhcJjePJpF5S9Jod4N1enF32xfeYdjr7%2FsKHasNQa6xw%2BbCuylA5EekovLrjiRrzBJcUPioAQkrIdOmYi0XBlOKUa9hI9uGzqbapYmzFsawU8XcsxY3Wp6PYgg4HFvPq719hno97RLl2WNIZ098a5XvkLBkPDYCkQ59Z2uBZ2SwH2Avt%2FtvxvsqO4TC5zqfABjqkAfzGr5jj1e3HnxYYOAChCXT37FmU5M5XAKNrBsL7kxBKWZ3c0cG%2BnhrM5keILrF6LP7TlymK3S419L1sFbTzvcerZ0K0qD8R%2F2yIoU2zx4rRpGl7PPfDCjgIbiG3F4Ls9Itgc1%2Fp0w7726BXLqsF0V6Gz878%2BuG%2F7tqaNAGEYMPDwzdSv2ymeRBjl3Yl1OMN1MoDgB5Za7AE66hWdsm%2FCR8HYMYs&X-Amz-Signature=cf561cfab15659cd5f46110432268ca5284682091223a9907bd27d930cd665f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
