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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636E2S22S%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICHHRlONCObNdu27v65CceYXmP%2F4PZho1deEzRebLtNLAiBI7p3FTw%2BzfsktWb7zbu6jo3bRF8fc2j4NCexZbVWlYiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2FTTe4V9nBxLDCJXKtwDNCuoZqq3wNwg%2BtV2xwQGsFHuk1bVAdTa5HZDhebuaSHKqE5Hs43pSiaMkGCV0dK4UR9mKW1VpyGQQxnuttU0FwEnx49S%2Bgq8vhJeNOwxri0qbRw50FaAoZzc1aK5jQOGMSTua997Yxxdo796LGQyFyJIVqK1OTgpRgWzpXblqYxSQXD%2BfLJ3zajNAf1qsfmATegF3%2BnZPUVt0B15GCUHxUrzzPe%2FWkZSU3vXH0qLJdF1ovmAiemkO%2BJYLSbqdCkX0xp8z7QndG%2BJb8lCUCgcLUcNFc9yuJfp0cAj3YO%2Bwy6q46TMNt5sIVBe3DhjAufAeKQkwG%2FppAQA999sTxbZ8WYHS5M5yDZwD%2FtvtcBkeDkwkkHlMdnJQBxPyBmNpF1jEG6%2BOhh2DZNknG1Z1apoSUIydRwTOhpQfFhURI5yy3xcbq7UhivFCyH4X7mFi%2Bbv2AJP5PHj0VqJ9tFJBfk47DOYr458wkuNuDP4fRKQzgQXHYVnA%2B%2Bzoo956j%2BAHzltd0D51o%2FrTFtQq6UN972KWGY60e5ZCirjrzbrOaI5ZpGX83s0yH%2F7FjGuNuGe2K2PJH3sT5VDLgzD0p%2BaSj4Gkq2Ti3E8Z8bDTj%2FbgVv7V7xp1%2F7J19EL86x23Cwwtsu9vgY6pgGGcrRRV92HUFo4eAuxTJsGjTf4Hxo4jzEeMbuQqxzWmFqSj4ZmihmLMTnLgYhdxwnwLvEMZjm%2F5t9Td0Y3TsF1ABXRq57h5X34v4Nzemzk%2FeWX%2BEr1LfMkIduyWeYuosdc9RYQMuBqAeTHRQvrwh6nrewEabyFP7bp4%2F%2BveAH3nRPQm6otSy4BE%2BUQxbii2lmXgo%2B%2BS7Kw1p7KnfVfGCL8jBSMwpWI&X-Amz-Signature=d58f642b3878763cc0623b4678b0ef1ca0d82f97bffb4a02c4d57105e944fa9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636E2S22S%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICHHRlONCObNdu27v65CceYXmP%2F4PZho1deEzRebLtNLAiBI7p3FTw%2BzfsktWb7zbu6jo3bRF8fc2j4NCexZbVWlYiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2FTTe4V9nBxLDCJXKtwDNCuoZqq3wNwg%2BtV2xwQGsFHuk1bVAdTa5HZDhebuaSHKqE5Hs43pSiaMkGCV0dK4UR9mKW1VpyGQQxnuttU0FwEnx49S%2Bgq8vhJeNOwxri0qbRw50FaAoZzc1aK5jQOGMSTua997Yxxdo796LGQyFyJIVqK1OTgpRgWzpXblqYxSQXD%2BfLJ3zajNAf1qsfmATegF3%2BnZPUVt0B15GCUHxUrzzPe%2FWkZSU3vXH0qLJdF1ovmAiemkO%2BJYLSbqdCkX0xp8z7QndG%2BJb8lCUCgcLUcNFc9yuJfp0cAj3YO%2Bwy6q46TMNt5sIVBe3DhjAufAeKQkwG%2FppAQA999sTxbZ8WYHS5M5yDZwD%2FtvtcBkeDkwkkHlMdnJQBxPyBmNpF1jEG6%2BOhh2DZNknG1Z1apoSUIydRwTOhpQfFhURI5yy3xcbq7UhivFCyH4X7mFi%2Bbv2AJP5PHj0VqJ9tFJBfk47DOYr458wkuNuDP4fRKQzgQXHYVnA%2B%2Bzoo956j%2BAHzltd0D51o%2FrTFtQq6UN972KWGY60e5ZCirjrzbrOaI5ZpGX83s0yH%2F7FjGuNuGe2K2PJH3sT5VDLgzD0p%2BaSj4Gkq2Ti3E8Z8bDTj%2FbgVv7V7xp1%2F7J19EL86x23Cwwtsu9vgY6pgGGcrRRV92HUFo4eAuxTJsGjTf4Hxo4jzEeMbuQqxzWmFqSj4ZmihmLMTnLgYhdxwnwLvEMZjm%2F5t9Td0Y3TsF1ABXRq57h5X34v4Nzemzk%2FeWX%2BEr1LfMkIduyWeYuosdc9RYQMuBqAeTHRQvrwh6nrewEabyFP7bp4%2F%2BveAH3nRPQm6otSy4BE%2BUQxbii2lmXgo%2B%2BS7Kw1p7KnfVfGCL8jBSMwpWI&X-Amz-Signature=bed2d22648e9b4374861c02a0a2d41b0e7335a084211ec152d525a0907b634d7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636E2S22S%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICHHRlONCObNdu27v65CceYXmP%2F4PZho1deEzRebLtNLAiBI7p3FTw%2BzfsktWb7zbu6jo3bRF8fc2j4NCexZbVWlYiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2FTTe4V9nBxLDCJXKtwDNCuoZqq3wNwg%2BtV2xwQGsFHuk1bVAdTa5HZDhebuaSHKqE5Hs43pSiaMkGCV0dK4UR9mKW1VpyGQQxnuttU0FwEnx49S%2Bgq8vhJeNOwxri0qbRw50FaAoZzc1aK5jQOGMSTua997Yxxdo796LGQyFyJIVqK1OTgpRgWzpXblqYxSQXD%2BfLJ3zajNAf1qsfmATegF3%2BnZPUVt0B15GCUHxUrzzPe%2FWkZSU3vXH0qLJdF1ovmAiemkO%2BJYLSbqdCkX0xp8z7QndG%2BJb8lCUCgcLUcNFc9yuJfp0cAj3YO%2Bwy6q46TMNt5sIVBe3DhjAufAeKQkwG%2FppAQA999sTxbZ8WYHS5M5yDZwD%2FtvtcBkeDkwkkHlMdnJQBxPyBmNpF1jEG6%2BOhh2DZNknG1Z1apoSUIydRwTOhpQfFhURI5yy3xcbq7UhivFCyH4X7mFi%2Bbv2AJP5PHj0VqJ9tFJBfk47DOYr458wkuNuDP4fRKQzgQXHYVnA%2B%2Bzoo956j%2BAHzltd0D51o%2FrTFtQq6UN972KWGY60e5ZCirjrzbrOaI5ZpGX83s0yH%2F7FjGuNuGe2K2PJH3sT5VDLgzD0p%2BaSj4Gkq2Ti3E8Z8bDTj%2FbgVv7V7xp1%2F7J19EL86x23Cwwtsu9vgY6pgGGcrRRV92HUFo4eAuxTJsGjTf4Hxo4jzEeMbuQqxzWmFqSj4ZmihmLMTnLgYhdxwnwLvEMZjm%2F5t9Td0Y3TsF1ABXRq57h5X34v4Nzemzk%2FeWX%2BEr1LfMkIduyWeYuosdc9RYQMuBqAeTHRQvrwh6nrewEabyFP7bp4%2F%2BveAH3nRPQm6otSy4BE%2BUQxbii2lmXgo%2B%2BS7Kw1p7KnfVfGCL8jBSMwpWI&X-Amz-Signature=83c07542effd22d0a5baf1c77cdccdc269101dfaf646df5b041eeeeb9d1b6ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636E2S22S%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICHHRlONCObNdu27v65CceYXmP%2F4PZho1deEzRebLtNLAiBI7p3FTw%2BzfsktWb7zbu6jo3bRF8fc2j4NCexZbVWlYiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2FTTe4V9nBxLDCJXKtwDNCuoZqq3wNwg%2BtV2xwQGsFHuk1bVAdTa5HZDhebuaSHKqE5Hs43pSiaMkGCV0dK4UR9mKW1VpyGQQxnuttU0FwEnx49S%2Bgq8vhJeNOwxri0qbRw50FaAoZzc1aK5jQOGMSTua997Yxxdo796LGQyFyJIVqK1OTgpRgWzpXblqYxSQXD%2BfLJ3zajNAf1qsfmATegF3%2BnZPUVt0B15GCUHxUrzzPe%2FWkZSU3vXH0qLJdF1ovmAiemkO%2BJYLSbqdCkX0xp8z7QndG%2BJb8lCUCgcLUcNFc9yuJfp0cAj3YO%2Bwy6q46TMNt5sIVBe3DhjAufAeKQkwG%2FppAQA999sTxbZ8WYHS5M5yDZwD%2FtvtcBkeDkwkkHlMdnJQBxPyBmNpF1jEG6%2BOhh2DZNknG1Z1apoSUIydRwTOhpQfFhURI5yy3xcbq7UhivFCyH4X7mFi%2Bbv2AJP5PHj0VqJ9tFJBfk47DOYr458wkuNuDP4fRKQzgQXHYVnA%2B%2Bzoo956j%2BAHzltd0D51o%2FrTFtQq6UN972KWGY60e5ZCirjrzbrOaI5ZpGX83s0yH%2F7FjGuNuGe2K2PJH3sT5VDLgzD0p%2BaSj4Gkq2Ti3E8Z8bDTj%2FbgVv7V7xp1%2F7J19EL86x23Cwwtsu9vgY6pgGGcrRRV92HUFo4eAuxTJsGjTf4Hxo4jzEeMbuQqxzWmFqSj4ZmihmLMTnLgYhdxwnwLvEMZjm%2F5t9Td0Y3TsF1ABXRq57h5X34v4Nzemzk%2FeWX%2BEr1LfMkIduyWeYuosdc9RYQMuBqAeTHRQvrwh6nrewEabyFP7bp4%2F%2BveAH3nRPQm6otSy4BE%2BUQxbii2lmXgo%2B%2BS7Kw1p7KnfVfGCL8jBSMwpWI&X-Amz-Signature=b4cacebe4ca0aae6df95cf0bdfec701d19f8a673caa1cab3c143ea47db9e4491&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636E2S22S%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICHHRlONCObNdu27v65CceYXmP%2F4PZho1deEzRebLtNLAiBI7p3FTw%2BzfsktWb7zbu6jo3bRF8fc2j4NCexZbVWlYiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2FTTe4V9nBxLDCJXKtwDNCuoZqq3wNwg%2BtV2xwQGsFHuk1bVAdTa5HZDhebuaSHKqE5Hs43pSiaMkGCV0dK4UR9mKW1VpyGQQxnuttU0FwEnx49S%2Bgq8vhJeNOwxri0qbRw50FaAoZzc1aK5jQOGMSTua997Yxxdo796LGQyFyJIVqK1OTgpRgWzpXblqYxSQXD%2BfLJ3zajNAf1qsfmATegF3%2BnZPUVt0B15GCUHxUrzzPe%2FWkZSU3vXH0qLJdF1ovmAiemkO%2BJYLSbqdCkX0xp8z7QndG%2BJb8lCUCgcLUcNFc9yuJfp0cAj3YO%2Bwy6q46TMNt5sIVBe3DhjAufAeKQkwG%2FppAQA999sTxbZ8WYHS5M5yDZwD%2FtvtcBkeDkwkkHlMdnJQBxPyBmNpF1jEG6%2BOhh2DZNknG1Z1apoSUIydRwTOhpQfFhURI5yy3xcbq7UhivFCyH4X7mFi%2Bbv2AJP5PHj0VqJ9tFJBfk47DOYr458wkuNuDP4fRKQzgQXHYVnA%2B%2Bzoo956j%2BAHzltd0D51o%2FrTFtQq6UN972KWGY60e5ZCirjrzbrOaI5ZpGX83s0yH%2F7FjGuNuGe2K2PJH3sT5VDLgzD0p%2BaSj4Gkq2Ti3E8Z8bDTj%2FbgVv7V7xp1%2F7J19EL86x23Cwwtsu9vgY6pgGGcrRRV92HUFo4eAuxTJsGjTf4Hxo4jzEeMbuQqxzWmFqSj4ZmihmLMTnLgYhdxwnwLvEMZjm%2F5t9Td0Y3TsF1ABXRq57h5X34v4Nzemzk%2FeWX%2BEr1LfMkIduyWeYuosdc9RYQMuBqAeTHRQvrwh6nrewEabyFP7bp4%2F%2BveAH3nRPQm6otSy4BE%2BUQxbii2lmXgo%2B%2BS7Kw1p7KnfVfGCL8jBSMwpWI&X-Amz-Signature=cc92e6d77b5fe9ba497bb06ab3470716a04e30350cc4e4118b055b32e0e57953&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
