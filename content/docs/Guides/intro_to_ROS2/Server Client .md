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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ABUPYE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCgrRqX98vukWW2PCia1Mb0f3IXC%2B2kGLHu6wKQfcj1GAIhAJM7PkfU22pEheqQIxWPtrmtwtx7deAsgw2FbG3byDuGKv8DCCkQABoMNjM3NDIzMTgzODA1IgwlhsEYYga2mnNd5UUq3AMxJ4efknhTVuhmzQsQxc%2FYYsEtLXzAADr6NZjD7GM%2BBfxaf9MvXIPbT%2BfzpyHiqZk7nmtbSePa4jcxTLMC7qKl6khaoJHoJYhjxFFBaWZcjlpMWngbfSR8yALXBMzGIXDqOoXbPkap77Ihjix0PFpsci35toV4F0kACdPXLHfWW%2BVHTv%2F3TEurN5N2zi06Hgr4FEOmg243z9zQ9PKMsaIfYTF5HQhGv%2BC3U3j2sICSkSlrhnZFUGR1HsLrFOH5j1roQeRxJKhdEj9HgFeZtsds7tjTLeupCjT8tbg%2FZ2svK5r35OjkciEQHNMXNUt5G1wFpBGq0LXvTL0FmkYzYnlXb1qeAroki%2BBPbyf40OMEaGa9JbqoYexOZ0uKn9mTwfVIW4bTOYgulCR06C4PstqaMr7SR4iChOFwsmrzm5ouea7jgxfHlFoVDlwqV09mcnftaZOK5ZuAVEAApH2tBKR13DAs974PswSnpGSCvAQnY46F4c7tA2ddPXE7B%2Fod47AItLw%2FTJgMM%2FXpvqGszW7iERE6svNDIW%2BryEL8AnNqVpX%2BkTlbbiOdHmWRvEK2XQejQ0PXV5OGzgvMHs2XmOcrfZ98z8F0eRNMe28E6dkr6zWJqL1ezyR8t%2BadozCnsunCBjqkAcvJii8W6ljh6Q8%2FNgAuWs4usRQ9ZgYO1Mz0eBGcgRYNqqXIPPvRRxV4P6EE3Bht3YT7FZpi5aUKvbPwBp8griE6CrmTYUzvVm5QyTHAblGLzJTO05raUnx8J35Ab4056PHdaNAnnHyoNqmMH0QjlmXXu1D18B1JuKtytyoo1ACUaur00G%2B%2Bl%2BaoKapuHX3cSzGoECMTWolFx4JASP7gcyU6ZIcw&X-Amz-Signature=5305f8cab16277037f6296df087b41d22caf0bda03a05e4a684dd47d26de104c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ABUPYE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCgrRqX98vukWW2PCia1Mb0f3IXC%2B2kGLHu6wKQfcj1GAIhAJM7PkfU22pEheqQIxWPtrmtwtx7deAsgw2FbG3byDuGKv8DCCkQABoMNjM3NDIzMTgzODA1IgwlhsEYYga2mnNd5UUq3AMxJ4efknhTVuhmzQsQxc%2FYYsEtLXzAADr6NZjD7GM%2BBfxaf9MvXIPbT%2BfzpyHiqZk7nmtbSePa4jcxTLMC7qKl6khaoJHoJYhjxFFBaWZcjlpMWngbfSR8yALXBMzGIXDqOoXbPkap77Ihjix0PFpsci35toV4F0kACdPXLHfWW%2BVHTv%2F3TEurN5N2zi06Hgr4FEOmg243z9zQ9PKMsaIfYTF5HQhGv%2BC3U3j2sICSkSlrhnZFUGR1HsLrFOH5j1roQeRxJKhdEj9HgFeZtsds7tjTLeupCjT8tbg%2FZ2svK5r35OjkciEQHNMXNUt5G1wFpBGq0LXvTL0FmkYzYnlXb1qeAroki%2BBPbyf40OMEaGa9JbqoYexOZ0uKn9mTwfVIW4bTOYgulCR06C4PstqaMr7SR4iChOFwsmrzm5ouea7jgxfHlFoVDlwqV09mcnftaZOK5ZuAVEAApH2tBKR13DAs974PswSnpGSCvAQnY46F4c7tA2ddPXE7B%2Fod47AItLw%2FTJgMM%2FXpvqGszW7iERE6svNDIW%2BryEL8AnNqVpX%2BkTlbbiOdHmWRvEK2XQejQ0PXV5OGzgvMHs2XmOcrfZ98z8F0eRNMe28E6dkr6zWJqL1ezyR8t%2BadozCnsunCBjqkAcvJii8W6ljh6Q8%2FNgAuWs4usRQ9ZgYO1Mz0eBGcgRYNqqXIPPvRRxV4P6EE3Bht3YT7FZpi5aUKvbPwBp8griE6CrmTYUzvVm5QyTHAblGLzJTO05raUnx8J35Ab4056PHdaNAnnHyoNqmMH0QjlmXXu1D18B1JuKtytyoo1ACUaur00G%2B%2Bl%2BaoKapuHX3cSzGoECMTWolFx4JASP7gcyU6ZIcw&X-Amz-Signature=5353f945eb69ca90b7786ed219d7ee4fecacdeec6ecec43bcd262743bd9cea80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ABUPYE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCgrRqX98vukWW2PCia1Mb0f3IXC%2B2kGLHu6wKQfcj1GAIhAJM7PkfU22pEheqQIxWPtrmtwtx7deAsgw2FbG3byDuGKv8DCCkQABoMNjM3NDIzMTgzODA1IgwlhsEYYga2mnNd5UUq3AMxJ4efknhTVuhmzQsQxc%2FYYsEtLXzAADr6NZjD7GM%2BBfxaf9MvXIPbT%2BfzpyHiqZk7nmtbSePa4jcxTLMC7qKl6khaoJHoJYhjxFFBaWZcjlpMWngbfSR8yALXBMzGIXDqOoXbPkap77Ihjix0PFpsci35toV4F0kACdPXLHfWW%2BVHTv%2F3TEurN5N2zi06Hgr4FEOmg243z9zQ9PKMsaIfYTF5HQhGv%2BC3U3j2sICSkSlrhnZFUGR1HsLrFOH5j1roQeRxJKhdEj9HgFeZtsds7tjTLeupCjT8tbg%2FZ2svK5r35OjkciEQHNMXNUt5G1wFpBGq0LXvTL0FmkYzYnlXb1qeAroki%2BBPbyf40OMEaGa9JbqoYexOZ0uKn9mTwfVIW4bTOYgulCR06C4PstqaMr7SR4iChOFwsmrzm5ouea7jgxfHlFoVDlwqV09mcnftaZOK5ZuAVEAApH2tBKR13DAs974PswSnpGSCvAQnY46F4c7tA2ddPXE7B%2Fod47AItLw%2FTJgMM%2FXpvqGszW7iERE6svNDIW%2BryEL8AnNqVpX%2BkTlbbiOdHmWRvEK2XQejQ0PXV5OGzgvMHs2XmOcrfZ98z8F0eRNMe28E6dkr6zWJqL1ezyR8t%2BadozCnsunCBjqkAcvJii8W6ljh6Q8%2FNgAuWs4usRQ9ZgYO1Mz0eBGcgRYNqqXIPPvRRxV4P6EE3Bht3YT7FZpi5aUKvbPwBp8griE6CrmTYUzvVm5QyTHAblGLzJTO05raUnx8J35Ab4056PHdaNAnnHyoNqmMH0QjlmXXu1D18B1JuKtytyoo1ACUaur00G%2B%2Bl%2BaoKapuHX3cSzGoECMTWolFx4JASP7gcyU6ZIcw&X-Amz-Signature=9844b09834ef49a685b32cfa17f9ebb41f5ca0fa9ef9a553d5b384956bd3741f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ABUPYE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCgrRqX98vukWW2PCia1Mb0f3IXC%2B2kGLHu6wKQfcj1GAIhAJM7PkfU22pEheqQIxWPtrmtwtx7deAsgw2FbG3byDuGKv8DCCkQABoMNjM3NDIzMTgzODA1IgwlhsEYYga2mnNd5UUq3AMxJ4efknhTVuhmzQsQxc%2FYYsEtLXzAADr6NZjD7GM%2BBfxaf9MvXIPbT%2BfzpyHiqZk7nmtbSePa4jcxTLMC7qKl6khaoJHoJYhjxFFBaWZcjlpMWngbfSR8yALXBMzGIXDqOoXbPkap77Ihjix0PFpsci35toV4F0kACdPXLHfWW%2BVHTv%2F3TEurN5N2zi06Hgr4FEOmg243z9zQ9PKMsaIfYTF5HQhGv%2BC3U3j2sICSkSlrhnZFUGR1HsLrFOH5j1roQeRxJKhdEj9HgFeZtsds7tjTLeupCjT8tbg%2FZ2svK5r35OjkciEQHNMXNUt5G1wFpBGq0LXvTL0FmkYzYnlXb1qeAroki%2BBPbyf40OMEaGa9JbqoYexOZ0uKn9mTwfVIW4bTOYgulCR06C4PstqaMr7SR4iChOFwsmrzm5ouea7jgxfHlFoVDlwqV09mcnftaZOK5ZuAVEAApH2tBKR13DAs974PswSnpGSCvAQnY46F4c7tA2ddPXE7B%2Fod47AItLw%2FTJgMM%2FXpvqGszW7iERE6svNDIW%2BryEL8AnNqVpX%2BkTlbbiOdHmWRvEK2XQejQ0PXV5OGzgvMHs2XmOcrfZ98z8F0eRNMe28E6dkr6zWJqL1ezyR8t%2BadozCnsunCBjqkAcvJii8W6ljh6Q8%2FNgAuWs4usRQ9ZgYO1Mz0eBGcgRYNqqXIPPvRRxV4P6EE3Bht3YT7FZpi5aUKvbPwBp8griE6CrmTYUzvVm5QyTHAblGLzJTO05raUnx8J35Ab4056PHdaNAnnHyoNqmMH0QjlmXXu1D18B1JuKtytyoo1ACUaur00G%2B%2Bl%2BaoKapuHX3cSzGoECMTWolFx4JASP7gcyU6ZIcw&X-Amz-Signature=2c6f310c700d6f0356a0d0ae94ec5e9daaddaa7d29871112a8dc524dc1da0fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ABUPYE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCgrRqX98vukWW2PCia1Mb0f3IXC%2B2kGLHu6wKQfcj1GAIhAJM7PkfU22pEheqQIxWPtrmtwtx7deAsgw2FbG3byDuGKv8DCCkQABoMNjM3NDIzMTgzODA1IgwlhsEYYga2mnNd5UUq3AMxJ4efknhTVuhmzQsQxc%2FYYsEtLXzAADr6NZjD7GM%2BBfxaf9MvXIPbT%2BfzpyHiqZk7nmtbSePa4jcxTLMC7qKl6khaoJHoJYhjxFFBaWZcjlpMWngbfSR8yALXBMzGIXDqOoXbPkap77Ihjix0PFpsci35toV4F0kACdPXLHfWW%2BVHTv%2F3TEurN5N2zi06Hgr4FEOmg243z9zQ9PKMsaIfYTF5HQhGv%2BC3U3j2sICSkSlrhnZFUGR1HsLrFOH5j1roQeRxJKhdEj9HgFeZtsds7tjTLeupCjT8tbg%2FZ2svK5r35OjkciEQHNMXNUt5G1wFpBGq0LXvTL0FmkYzYnlXb1qeAroki%2BBPbyf40OMEaGa9JbqoYexOZ0uKn9mTwfVIW4bTOYgulCR06C4PstqaMr7SR4iChOFwsmrzm5ouea7jgxfHlFoVDlwqV09mcnftaZOK5ZuAVEAApH2tBKR13DAs974PswSnpGSCvAQnY46F4c7tA2ddPXE7B%2Fod47AItLw%2FTJgMM%2FXpvqGszW7iERE6svNDIW%2BryEL8AnNqVpX%2BkTlbbiOdHmWRvEK2XQejQ0PXV5OGzgvMHs2XmOcrfZ98z8F0eRNMe28E6dkr6zWJqL1ezyR8t%2BadozCnsunCBjqkAcvJii8W6ljh6Q8%2FNgAuWs4usRQ9ZgYO1Mz0eBGcgRYNqqXIPPvRRxV4P6EE3Bht3YT7FZpi5aUKvbPwBp8griE6CrmTYUzvVm5QyTHAblGLzJTO05raUnx8J35Ab4056PHdaNAnnHyoNqmMH0QjlmXXu1D18B1JuKtytyoo1ACUaur00G%2B%2Bl%2BaoKapuHX3cSzGoECMTWolFx4JASP7gcyU6ZIcw&X-Amz-Signature=b426ece4275d40fdeca6c65e46d3d952b4e3c9085466c16373a8b1f6a178604a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
