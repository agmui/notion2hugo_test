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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVADW3P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2FCfFtdz3yZ38c9AwU%2BoxIgpVr9slGQ%2F95LH1PH5RGAIhANyirjyFVLPtAIxW3ajLV8XFwcvlEfqS6Bw17LVIOGVWKv8DCHsQABoMNjM3NDIzMTgzODA1Igw13UUH%2FhmFs0ahOakq3AMSINUm3Wj0sI0pSaU0yiBXcgY9xO0hhxwjfu2CBjM2v83Z9gwTMTXHog%2BN12goWexks%2BOZCcZA%2FKewDmn8Em%2FtL8%2B%2BqdxvwhUFAHGdXW%2BbEopeiHvyRwxpmbZwWa1%2BR%2Fw4hfx22M8hdef7lC%2Fz2LMucLJTR0A6NJUKEo3apJcnjfyne2JmqmvsKDaSQMdeadiQ%2BgwBfquMl6rG9vetSiBHYcarLuC1eOMeQTeDVsjonct89TEH%2BUZd9fYJYIGuMqCyP8q%2BahJCGqaRkr4XC3%2Bus94tm1TW8PcRSeQNC0puzjRgeuZFkPhCJv88%2BTBKFIHeWx8f%2B%2ByVb%2FGu7Th7Rgjz5it1f1%2BoQ%2BoGg3kH3PHTdZxsHZnXtC3Y%2FsKrdEIx78CVG1b%2FUMdcwAb09IcvkSmwrLhdVEFlyUbf%2F4hCKnZap4JvRQcKZhpuiZve8PRXpotRGq%2Bu5T%2FLkVkiWQEUtvr%2FPv%2FLrEmVnAdVa5E4i0zS%2BJxmWIAePD2LS5bG5ngLCntW33ZiQnUBTPVW0OwrGKQjVSJs2EE6id50xBAUeqj%2F%2BQuozNQH3ba9aiyRBg8Y7vbQk0AjJvj0d3h16Kqvfz4rwhyu7wSj7ovF52%2BgyKWz9flO1SXAdc4zLJhqEDCCwqjBBjqkAe89FZhATyjtzX7xcqkcJxo2KokBCPl9vxY74zhggBOjWC3icV1%2BBzhCqW6a%2FvvekwQROp5BnAaDf%2F2wqId9fEt1AQ4vEb4T88jxQDBDziMh0TCkiBmt%2BcxY5p7T%2BuiLhjhUhv3TESHLQj%2BY1FXvQO81YaJI3%2FUlgj3tyyVWTp9M2pcWxxp13CaXKnkomukMpqPJ1TFSvFDc9Vk61xThi7AZ3MkL&X-Amz-Signature=44edbb8ccdc50b2f5181eecc8b0d87e0c940457c527fcb666a4247765ab6df95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVADW3P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2FCfFtdz3yZ38c9AwU%2BoxIgpVr9slGQ%2F95LH1PH5RGAIhANyirjyFVLPtAIxW3ajLV8XFwcvlEfqS6Bw17LVIOGVWKv8DCHsQABoMNjM3NDIzMTgzODA1Igw13UUH%2FhmFs0ahOakq3AMSINUm3Wj0sI0pSaU0yiBXcgY9xO0hhxwjfu2CBjM2v83Z9gwTMTXHog%2BN12goWexks%2BOZCcZA%2FKewDmn8Em%2FtL8%2B%2BqdxvwhUFAHGdXW%2BbEopeiHvyRwxpmbZwWa1%2BR%2Fw4hfx22M8hdef7lC%2Fz2LMucLJTR0A6NJUKEo3apJcnjfyne2JmqmvsKDaSQMdeadiQ%2BgwBfquMl6rG9vetSiBHYcarLuC1eOMeQTeDVsjonct89TEH%2BUZd9fYJYIGuMqCyP8q%2BahJCGqaRkr4XC3%2Bus94tm1TW8PcRSeQNC0puzjRgeuZFkPhCJv88%2BTBKFIHeWx8f%2B%2ByVb%2FGu7Th7Rgjz5it1f1%2BoQ%2BoGg3kH3PHTdZxsHZnXtC3Y%2FsKrdEIx78CVG1b%2FUMdcwAb09IcvkSmwrLhdVEFlyUbf%2F4hCKnZap4JvRQcKZhpuiZve8PRXpotRGq%2Bu5T%2FLkVkiWQEUtvr%2FPv%2FLrEmVnAdVa5E4i0zS%2BJxmWIAePD2LS5bG5ngLCntW33ZiQnUBTPVW0OwrGKQjVSJs2EE6id50xBAUeqj%2F%2BQuozNQH3ba9aiyRBg8Y7vbQk0AjJvj0d3h16Kqvfz4rwhyu7wSj7ovF52%2BgyKWz9flO1SXAdc4zLJhqEDCCwqjBBjqkAe89FZhATyjtzX7xcqkcJxo2KokBCPl9vxY74zhggBOjWC3icV1%2BBzhCqW6a%2FvvekwQROp5BnAaDf%2F2wqId9fEt1AQ4vEb4T88jxQDBDziMh0TCkiBmt%2BcxY5p7T%2BuiLhjhUhv3TESHLQj%2BY1FXvQO81YaJI3%2FUlgj3tyyVWTp9M2pcWxxp13CaXKnkomukMpqPJ1TFSvFDc9Vk61xThi7AZ3MkL&X-Amz-Signature=1e6ad1ff6a71e48d3b7f0a8ff3a902fd323f2a64dc05421b8332815a7dba68aa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVADW3P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2FCfFtdz3yZ38c9AwU%2BoxIgpVr9slGQ%2F95LH1PH5RGAIhANyirjyFVLPtAIxW3ajLV8XFwcvlEfqS6Bw17LVIOGVWKv8DCHsQABoMNjM3NDIzMTgzODA1Igw13UUH%2FhmFs0ahOakq3AMSINUm3Wj0sI0pSaU0yiBXcgY9xO0hhxwjfu2CBjM2v83Z9gwTMTXHog%2BN12goWexks%2BOZCcZA%2FKewDmn8Em%2FtL8%2B%2BqdxvwhUFAHGdXW%2BbEopeiHvyRwxpmbZwWa1%2BR%2Fw4hfx22M8hdef7lC%2Fz2LMucLJTR0A6NJUKEo3apJcnjfyne2JmqmvsKDaSQMdeadiQ%2BgwBfquMl6rG9vetSiBHYcarLuC1eOMeQTeDVsjonct89TEH%2BUZd9fYJYIGuMqCyP8q%2BahJCGqaRkr4XC3%2Bus94tm1TW8PcRSeQNC0puzjRgeuZFkPhCJv88%2BTBKFIHeWx8f%2B%2ByVb%2FGu7Th7Rgjz5it1f1%2BoQ%2BoGg3kH3PHTdZxsHZnXtC3Y%2FsKrdEIx78CVG1b%2FUMdcwAb09IcvkSmwrLhdVEFlyUbf%2F4hCKnZap4JvRQcKZhpuiZve8PRXpotRGq%2Bu5T%2FLkVkiWQEUtvr%2FPv%2FLrEmVnAdVa5E4i0zS%2BJxmWIAePD2LS5bG5ngLCntW33ZiQnUBTPVW0OwrGKQjVSJs2EE6id50xBAUeqj%2F%2BQuozNQH3ba9aiyRBg8Y7vbQk0AjJvj0d3h16Kqvfz4rwhyu7wSj7ovF52%2BgyKWz9flO1SXAdc4zLJhqEDCCwqjBBjqkAe89FZhATyjtzX7xcqkcJxo2KokBCPl9vxY74zhggBOjWC3icV1%2BBzhCqW6a%2FvvekwQROp5BnAaDf%2F2wqId9fEt1AQ4vEb4T88jxQDBDziMh0TCkiBmt%2BcxY5p7T%2BuiLhjhUhv3TESHLQj%2BY1FXvQO81YaJI3%2FUlgj3tyyVWTp9M2pcWxxp13CaXKnkomukMpqPJ1TFSvFDc9Vk61xThi7AZ3MkL&X-Amz-Signature=b97e895c9105c1b1e75969294ef11adfddfe25aa2e428d7f2753c2eb0a042527&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVADW3P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2FCfFtdz3yZ38c9AwU%2BoxIgpVr9slGQ%2F95LH1PH5RGAIhANyirjyFVLPtAIxW3ajLV8XFwcvlEfqS6Bw17LVIOGVWKv8DCHsQABoMNjM3NDIzMTgzODA1Igw13UUH%2FhmFs0ahOakq3AMSINUm3Wj0sI0pSaU0yiBXcgY9xO0hhxwjfu2CBjM2v83Z9gwTMTXHog%2BN12goWexks%2BOZCcZA%2FKewDmn8Em%2FtL8%2B%2BqdxvwhUFAHGdXW%2BbEopeiHvyRwxpmbZwWa1%2BR%2Fw4hfx22M8hdef7lC%2Fz2LMucLJTR0A6NJUKEo3apJcnjfyne2JmqmvsKDaSQMdeadiQ%2BgwBfquMl6rG9vetSiBHYcarLuC1eOMeQTeDVsjonct89TEH%2BUZd9fYJYIGuMqCyP8q%2BahJCGqaRkr4XC3%2Bus94tm1TW8PcRSeQNC0puzjRgeuZFkPhCJv88%2BTBKFIHeWx8f%2B%2ByVb%2FGu7Th7Rgjz5it1f1%2BoQ%2BoGg3kH3PHTdZxsHZnXtC3Y%2FsKrdEIx78CVG1b%2FUMdcwAb09IcvkSmwrLhdVEFlyUbf%2F4hCKnZap4JvRQcKZhpuiZve8PRXpotRGq%2Bu5T%2FLkVkiWQEUtvr%2FPv%2FLrEmVnAdVa5E4i0zS%2BJxmWIAePD2LS5bG5ngLCntW33ZiQnUBTPVW0OwrGKQjVSJs2EE6id50xBAUeqj%2F%2BQuozNQH3ba9aiyRBg8Y7vbQk0AjJvj0d3h16Kqvfz4rwhyu7wSj7ovF52%2BgyKWz9flO1SXAdc4zLJhqEDCCwqjBBjqkAe89FZhATyjtzX7xcqkcJxo2KokBCPl9vxY74zhggBOjWC3icV1%2BBzhCqW6a%2FvvekwQROp5BnAaDf%2F2wqId9fEt1AQ4vEb4T88jxQDBDziMh0TCkiBmt%2BcxY5p7T%2BuiLhjhUhv3TESHLQj%2BY1FXvQO81YaJI3%2FUlgj3tyyVWTp9M2pcWxxp13CaXKnkomukMpqPJ1TFSvFDc9Vk61xThi7AZ3MkL&X-Amz-Signature=853c7f70ef70fd240def57077d6e3ae1344084f98fa94f40da72eda9eda0be3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVADW3P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2FCfFtdz3yZ38c9AwU%2BoxIgpVr9slGQ%2F95LH1PH5RGAIhANyirjyFVLPtAIxW3ajLV8XFwcvlEfqS6Bw17LVIOGVWKv8DCHsQABoMNjM3NDIzMTgzODA1Igw13UUH%2FhmFs0ahOakq3AMSINUm3Wj0sI0pSaU0yiBXcgY9xO0hhxwjfu2CBjM2v83Z9gwTMTXHog%2BN12goWexks%2BOZCcZA%2FKewDmn8Em%2FtL8%2B%2BqdxvwhUFAHGdXW%2BbEopeiHvyRwxpmbZwWa1%2BR%2Fw4hfx22M8hdef7lC%2Fz2LMucLJTR0A6NJUKEo3apJcnjfyne2JmqmvsKDaSQMdeadiQ%2BgwBfquMl6rG9vetSiBHYcarLuC1eOMeQTeDVsjonct89TEH%2BUZd9fYJYIGuMqCyP8q%2BahJCGqaRkr4XC3%2Bus94tm1TW8PcRSeQNC0puzjRgeuZFkPhCJv88%2BTBKFIHeWx8f%2B%2ByVb%2FGu7Th7Rgjz5it1f1%2BoQ%2BoGg3kH3PHTdZxsHZnXtC3Y%2FsKrdEIx78CVG1b%2FUMdcwAb09IcvkSmwrLhdVEFlyUbf%2F4hCKnZap4JvRQcKZhpuiZve8PRXpotRGq%2Bu5T%2FLkVkiWQEUtvr%2FPv%2FLrEmVnAdVa5E4i0zS%2BJxmWIAePD2LS5bG5ngLCntW33ZiQnUBTPVW0OwrGKQjVSJs2EE6id50xBAUeqj%2F%2BQuozNQH3ba9aiyRBg8Y7vbQk0AjJvj0d3h16Kqvfz4rwhyu7wSj7ovF52%2BgyKWz9flO1SXAdc4zLJhqEDCCwqjBBjqkAe89FZhATyjtzX7xcqkcJxo2KokBCPl9vxY74zhggBOjWC3icV1%2BBzhCqW6a%2FvvekwQROp5BnAaDf%2F2wqId9fEt1AQ4vEb4T88jxQDBDziMh0TCkiBmt%2BcxY5p7T%2BuiLhjhUhv3TESHLQj%2BY1FXvQO81YaJI3%2FUlgj3tyyVWTp9M2pcWxxp13CaXKnkomukMpqPJ1TFSvFDc9Vk61xThi7AZ3MkL&X-Amz-Signature=8464eaa0addb96761e17c05b0266e977557cf1611e52fdf290292947aa10f647&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
