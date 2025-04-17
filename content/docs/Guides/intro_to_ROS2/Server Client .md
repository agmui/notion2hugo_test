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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDTKGKL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh%2B3tLPXXYu88uAHpQnPGnNlpEed2A0aZHz2h0j%2BniGAiAW%2BH1nanzlxoBxwjDtrAS0yYBrv52azD3QnFZvh2GzPyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMXaIMC9nF837HrV5EKtwDe2RmgihylluOPoBfGmGAauH%2FQLEUnI%2B11NtY2nIhsvAti7X2wfjRuzHE%2F8vjmeOkouTCZYlBGnpLBC40IlzaQpr6KahciBYvx9qmQndlsNNTsYewT2NAlmwqDJlZkZ2IrGfmnaBN4pZ0vvtPvUpf96yiN0eEBTHyPTfiq1p%2FKzhGP8cW7ysr%2FQ7xu8TRgI3H7M4YVKzK0C%2BuNrWZKftsWhj3JEuf6N3RIyd2yHU4OTVqeHM%2BeQkBmPH1g2rPOXv04Ik1%2F32oNBDieRlrzcecvzKXJBnofYwY%2BIFwocQgo0Y9%2Bedxv7Hknxba9PjurUvFAWlwH2vLngnowVW3Ot224KkG096KONTFAi6dSeE9hT9UdN6AVpC17iOACZJqSIY93xbkRy3HjFWa5O0vDvkeL%2BsU%2BXQmhU1uASB%2FmbcZ2hx3aWoIHycFZ4M%2F3y1wRosz0CYfVosPgzzMYvSXvgx4RDqibzn78a4MpkNdYpZ3wpdMl%2BRxBc1jo3ed3WkvRduBx7WvWZDUgtpdrSmvMXhfNFlI%2Fg8vap3GQLH3fRodn2Lubwe4GJ3uDBB4yKYZfOnQw8002AGr3sU5gxx%2B3vuZlCP7SoMeTbsXAuNBomOZp7u0Z0MYHzI%2Bfr9hS%2BUw1fyDwAY6pgGuhfvjfr8VF5RG%2BthehxTTeLN5XyxJ0i3QHtr2PkPh1HNxmi5GtElf1Bb1HGRr5ptgYzzs2yqX%2Fcraj95hayE%2BWQueV1nn6l4fIhXwXuyw6AYeHzDoa72UP1e9QKkFxqgT6iXZRSRif%2FSVh4HrKrUUw5qQwoJ2zF4pTIcWwYnpmawodrz8cwdwCWhSFkRxsU8K%2F67ozoxJAIYI8z96oOZ2mKtX8hJh&X-Amz-Signature=5c22ce69b4df04b53ad0e62eb0b91151c10b478a421b004aa1d725ff92e720ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDTKGKL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh%2B3tLPXXYu88uAHpQnPGnNlpEed2A0aZHz2h0j%2BniGAiAW%2BH1nanzlxoBxwjDtrAS0yYBrv52azD3QnFZvh2GzPyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMXaIMC9nF837HrV5EKtwDe2RmgihylluOPoBfGmGAauH%2FQLEUnI%2B11NtY2nIhsvAti7X2wfjRuzHE%2F8vjmeOkouTCZYlBGnpLBC40IlzaQpr6KahciBYvx9qmQndlsNNTsYewT2NAlmwqDJlZkZ2IrGfmnaBN4pZ0vvtPvUpf96yiN0eEBTHyPTfiq1p%2FKzhGP8cW7ysr%2FQ7xu8TRgI3H7M4YVKzK0C%2BuNrWZKftsWhj3JEuf6N3RIyd2yHU4OTVqeHM%2BeQkBmPH1g2rPOXv04Ik1%2F32oNBDieRlrzcecvzKXJBnofYwY%2BIFwocQgo0Y9%2Bedxv7Hknxba9PjurUvFAWlwH2vLngnowVW3Ot224KkG096KONTFAi6dSeE9hT9UdN6AVpC17iOACZJqSIY93xbkRy3HjFWa5O0vDvkeL%2BsU%2BXQmhU1uASB%2FmbcZ2hx3aWoIHycFZ4M%2F3y1wRosz0CYfVosPgzzMYvSXvgx4RDqibzn78a4MpkNdYpZ3wpdMl%2BRxBc1jo3ed3WkvRduBx7WvWZDUgtpdrSmvMXhfNFlI%2Fg8vap3GQLH3fRodn2Lubwe4GJ3uDBB4yKYZfOnQw8002AGr3sU5gxx%2B3vuZlCP7SoMeTbsXAuNBomOZp7u0Z0MYHzI%2Bfr9hS%2BUw1fyDwAY6pgGuhfvjfr8VF5RG%2BthehxTTeLN5XyxJ0i3QHtr2PkPh1HNxmi5GtElf1Bb1HGRr5ptgYzzs2yqX%2Fcraj95hayE%2BWQueV1nn6l4fIhXwXuyw6AYeHzDoa72UP1e9QKkFxqgT6iXZRSRif%2FSVh4HrKrUUw5qQwoJ2zF4pTIcWwYnpmawodrz8cwdwCWhSFkRxsU8K%2F67ozoxJAIYI8z96oOZ2mKtX8hJh&X-Amz-Signature=ae79fd795fbf5224955d50c73d44b00968be31e74be5dca98792ea9114d51b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDTKGKL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh%2B3tLPXXYu88uAHpQnPGnNlpEed2A0aZHz2h0j%2BniGAiAW%2BH1nanzlxoBxwjDtrAS0yYBrv52azD3QnFZvh2GzPyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMXaIMC9nF837HrV5EKtwDe2RmgihylluOPoBfGmGAauH%2FQLEUnI%2B11NtY2nIhsvAti7X2wfjRuzHE%2F8vjmeOkouTCZYlBGnpLBC40IlzaQpr6KahciBYvx9qmQndlsNNTsYewT2NAlmwqDJlZkZ2IrGfmnaBN4pZ0vvtPvUpf96yiN0eEBTHyPTfiq1p%2FKzhGP8cW7ysr%2FQ7xu8TRgI3H7M4YVKzK0C%2BuNrWZKftsWhj3JEuf6N3RIyd2yHU4OTVqeHM%2BeQkBmPH1g2rPOXv04Ik1%2F32oNBDieRlrzcecvzKXJBnofYwY%2BIFwocQgo0Y9%2Bedxv7Hknxba9PjurUvFAWlwH2vLngnowVW3Ot224KkG096KONTFAi6dSeE9hT9UdN6AVpC17iOACZJqSIY93xbkRy3HjFWa5O0vDvkeL%2BsU%2BXQmhU1uASB%2FmbcZ2hx3aWoIHycFZ4M%2F3y1wRosz0CYfVosPgzzMYvSXvgx4RDqibzn78a4MpkNdYpZ3wpdMl%2BRxBc1jo3ed3WkvRduBx7WvWZDUgtpdrSmvMXhfNFlI%2Fg8vap3GQLH3fRodn2Lubwe4GJ3uDBB4yKYZfOnQw8002AGr3sU5gxx%2B3vuZlCP7SoMeTbsXAuNBomOZp7u0Z0MYHzI%2Bfr9hS%2BUw1fyDwAY6pgGuhfvjfr8VF5RG%2BthehxTTeLN5XyxJ0i3QHtr2PkPh1HNxmi5GtElf1Bb1HGRr5ptgYzzs2yqX%2Fcraj95hayE%2BWQueV1nn6l4fIhXwXuyw6AYeHzDoa72UP1e9QKkFxqgT6iXZRSRif%2FSVh4HrKrUUw5qQwoJ2zF4pTIcWwYnpmawodrz8cwdwCWhSFkRxsU8K%2F67ozoxJAIYI8z96oOZ2mKtX8hJh&X-Amz-Signature=4709de6b5b4c787dd33655ffdd712353cc1ff155c3d5e41f65994d7f9c793234&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDTKGKL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh%2B3tLPXXYu88uAHpQnPGnNlpEed2A0aZHz2h0j%2BniGAiAW%2BH1nanzlxoBxwjDtrAS0yYBrv52azD3QnFZvh2GzPyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMXaIMC9nF837HrV5EKtwDe2RmgihylluOPoBfGmGAauH%2FQLEUnI%2B11NtY2nIhsvAti7X2wfjRuzHE%2F8vjmeOkouTCZYlBGnpLBC40IlzaQpr6KahciBYvx9qmQndlsNNTsYewT2NAlmwqDJlZkZ2IrGfmnaBN4pZ0vvtPvUpf96yiN0eEBTHyPTfiq1p%2FKzhGP8cW7ysr%2FQ7xu8TRgI3H7M4YVKzK0C%2BuNrWZKftsWhj3JEuf6N3RIyd2yHU4OTVqeHM%2BeQkBmPH1g2rPOXv04Ik1%2F32oNBDieRlrzcecvzKXJBnofYwY%2BIFwocQgo0Y9%2Bedxv7Hknxba9PjurUvFAWlwH2vLngnowVW3Ot224KkG096KONTFAi6dSeE9hT9UdN6AVpC17iOACZJqSIY93xbkRy3HjFWa5O0vDvkeL%2BsU%2BXQmhU1uASB%2FmbcZ2hx3aWoIHycFZ4M%2F3y1wRosz0CYfVosPgzzMYvSXvgx4RDqibzn78a4MpkNdYpZ3wpdMl%2BRxBc1jo3ed3WkvRduBx7WvWZDUgtpdrSmvMXhfNFlI%2Fg8vap3GQLH3fRodn2Lubwe4GJ3uDBB4yKYZfOnQw8002AGr3sU5gxx%2B3vuZlCP7SoMeTbsXAuNBomOZp7u0Z0MYHzI%2Bfr9hS%2BUw1fyDwAY6pgGuhfvjfr8VF5RG%2BthehxTTeLN5XyxJ0i3QHtr2PkPh1HNxmi5GtElf1Bb1HGRr5ptgYzzs2yqX%2Fcraj95hayE%2BWQueV1nn6l4fIhXwXuyw6AYeHzDoa72UP1e9QKkFxqgT6iXZRSRif%2FSVh4HrKrUUw5qQwoJ2zF4pTIcWwYnpmawodrz8cwdwCWhSFkRxsU8K%2F67ozoxJAIYI8z96oOZ2mKtX8hJh&X-Amz-Signature=a1ef54c8bd5b64da0a20621e23897343276f977e531ade3b31b1b9c7d49ad6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDTKGKL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh%2B3tLPXXYu88uAHpQnPGnNlpEed2A0aZHz2h0j%2BniGAiAW%2BH1nanzlxoBxwjDtrAS0yYBrv52azD3QnFZvh2GzPyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMXaIMC9nF837HrV5EKtwDe2RmgihylluOPoBfGmGAauH%2FQLEUnI%2B11NtY2nIhsvAti7X2wfjRuzHE%2F8vjmeOkouTCZYlBGnpLBC40IlzaQpr6KahciBYvx9qmQndlsNNTsYewT2NAlmwqDJlZkZ2IrGfmnaBN4pZ0vvtPvUpf96yiN0eEBTHyPTfiq1p%2FKzhGP8cW7ysr%2FQ7xu8TRgI3H7M4YVKzK0C%2BuNrWZKftsWhj3JEuf6N3RIyd2yHU4OTVqeHM%2BeQkBmPH1g2rPOXv04Ik1%2F32oNBDieRlrzcecvzKXJBnofYwY%2BIFwocQgo0Y9%2Bedxv7Hknxba9PjurUvFAWlwH2vLngnowVW3Ot224KkG096KONTFAi6dSeE9hT9UdN6AVpC17iOACZJqSIY93xbkRy3HjFWa5O0vDvkeL%2BsU%2BXQmhU1uASB%2FmbcZ2hx3aWoIHycFZ4M%2F3y1wRosz0CYfVosPgzzMYvSXvgx4RDqibzn78a4MpkNdYpZ3wpdMl%2BRxBc1jo3ed3WkvRduBx7WvWZDUgtpdrSmvMXhfNFlI%2Fg8vap3GQLH3fRodn2Lubwe4GJ3uDBB4yKYZfOnQw8002AGr3sU5gxx%2B3vuZlCP7SoMeTbsXAuNBomOZp7u0Z0MYHzI%2Bfr9hS%2BUw1fyDwAY6pgGuhfvjfr8VF5RG%2BthehxTTeLN5XyxJ0i3QHtr2PkPh1HNxmi5GtElf1Bb1HGRr5ptgYzzs2yqX%2Fcraj95hayE%2BWQueV1nn6l4fIhXwXuyw6AYeHzDoa72UP1e9QKkFxqgT6iXZRSRif%2FSVh4HrKrUUw5qQwoJ2zF4pTIcWwYnpmawodrz8cwdwCWhSFkRxsU8K%2F67ozoxJAIYI8z96oOZ2mKtX8hJh&X-Amz-Signature=f7cb445b0d42ae3c6008c1dbb37c92358fb1b7cf2d4d208a689d32794bd5e5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
