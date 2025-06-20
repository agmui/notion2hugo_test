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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6VQO2B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM8%2BdD5RMtcepxd9MLtAktGXUK61LFQe%2BfGRULbfS8%2FAiA7uh8z%2FYjLxTeFFJJ4H6xBsAb%2FqkDfQkAj4T0Dd%2F5qACqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjlel8n%2FTINY6Yk2KtwDcG6veiRHgP1wUg7YRIsB4eb9D5wQ5FPrg6I4%2BHEWt%2BShhNrxrJmZ80dS1uJTfXPbDTlHuLEm73t%2BFUPlznUieVRnUeWFjv9T0sw7xF8jAbPMoNdKBbP9hZeM61guK%2BTTMd1m8KQvt8uCHIu3EwHN88XbB2tjno4b0vnKPXyZzROfD05fbo1OToS6Cq9cyDIMpNmpelgMtnwbH7vR0tV6xSFvwAThYwiABMToEy%2B9kxo1xc8p2MIkGENuqNqNP%2F5XDxy0B5o6k8p1Xo5JPBMreB6xBQs0jZ%2FZZwtCL%2FP0TW5P9rInbRgzk9HjWbLlp0Zz%2F%2F%2Bvp9pTbDJVYXCR9WFWNCY8VbMhRBZg2i%2B%2FVZV6fYFB1JK7MB0rJFIVdzZPr99z4UdhQcdAK8jF1gUtNR4rf31sKsMz1tPEv8YA2i1B3wciYeW0s%2FvKhjIAydTs4kmSA4wdGrxcTphzj0L7biiUkAXSDMh6yz1s5TcuTfmt0RVnV2LEwy5zeYzWKcuv7tI1veW8S1aN%2B5qiGeXEudVbPrHSW3cI4em%2FTzlcLaYU7rJ5QW%2BoJ5FKXAvOy2UptrWzqFFubTXjRwRSIDnFpj9lIaEH%2FcG9de1nMRzUW0GyLFvLMsqGHvy9VIyQvLAwsN%2FTwgY6pgG8ujUMOHwQqyv4BdydxVsW3BvEOlb3KNy6lOkE2Lkg%2BvDLG3JCQ2TbyzsuEkXbJZ7fDTXZ19aRwgJJ9NdvAEmVYrxqvLsrV6QcIT%2FFiUQqS%2BbAjhx5OqR0j%2BT%2BspwLcqM%2FZAhSRs6F0HRWFkdBhn3quHRbCiVqxSagOSpDbt7l8LPrVhr9AJRI1wGyzf0DqZXGwqOzNwUSgc1hEEhXTV4GLPykH%2FAN&X-Amz-Signature=7fc4a0d11f76a8f59e9ea7474de0c766e5bae148abd04eeacabef07a158eb06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6VQO2B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM8%2BdD5RMtcepxd9MLtAktGXUK61LFQe%2BfGRULbfS8%2FAiA7uh8z%2FYjLxTeFFJJ4H6xBsAb%2FqkDfQkAj4T0Dd%2F5qACqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjlel8n%2FTINY6Yk2KtwDcG6veiRHgP1wUg7YRIsB4eb9D5wQ5FPrg6I4%2BHEWt%2BShhNrxrJmZ80dS1uJTfXPbDTlHuLEm73t%2BFUPlznUieVRnUeWFjv9T0sw7xF8jAbPMoNdKBbP9hZeM61guK%2BTTMd1m8KQvt8uCHIu3EwHN88XbB2tjno4b0vnKPXyZzROfD05fbo1OToS6Cq9cyDIMpNmpelgMtnwbH7vR0tV6xSFvwAThYwiABMToEy%2B9kxo1xc8p2MIkGENuqNqNP%2F5XDxy0B5o6k8p1Xo5JPBMreB6xBQs0jZ%2FZZwtCL%2FP0TW5P9rInbRgzk9HjWbLlp0Zz%2F%2F%2Bvp9pTbDJVYXCR9WFWNCY8VbMhRBZg2i%2B%2FVZV6fYFB1JK7MB0rJFIVdzZPr99z4UdhQcdAK8jF1gUtNR4rf31sKsMz1tPEv8YA2i1B3wciYeW0s%2FvKhjIAydTs4kmSA4wdGrxcTphzj0L7biiUkAXSDMh6yz1s5TcuTfmt0RVnV2LEwy5zeYzWKcuv7tI1veW8S1aN%2B5qiGeXEudVbPrHSW3cI4em%2FTzlcLaYU7rJ5QW%2BoJ5FKXAvOy2UptrWzqFFubTXjRwRSIDnFpj9lIaEH%2FcG9de1nMRzUW0GyLFvLMsqGHvy9VIyQvLAwsN%2FTwgY6pgG8ujUMOHwQqyv4BdydxVsW3BvEOlb3KNy6lOkE2Lkg%2BvDLG3JCQ2TbyzsuEkXbJZ7fDTXZ19aRwgJJ9NdvAEmVYrxqvLsrV6QcIT%2FFiUQqS%2BbAjhx5OqR0j%2BT%2BspwLcqM%2FZAhSRs6F0HRWFkdBhn3quHRbCiVqxSagOSpDbt7l8LPrVhr9AJRI1wGyzf0DqZXGwqOzNwUSgc1hEEhXTV4GLPykH%2FAN&X-Amz-Signature=126747fefd40a216284fab1a232280854be914b65fe7597bdc51725b08321baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6VQO2B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM8%2BdD5RMtcepxd9MLtAktGXUK61LFQe%2BfGRULbfS8%2FAiA7uh8z%2FYjLxTeFFJJ4H6xBsAb%2FqkDfQkAj4T0Dd%2F5qACqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjlel8n%2FTINY6Yk2KtwDcG6veiRHgP1wUg7YRIsB4eb9D5wQ5FPrg6I4%2BHEWt%2BShhNrxrJmZ80dS1uJTfXPbDTlHuLEm73t%2BFUPlznUieVRnUeWFjv9T0sw7xF8jAbPMoNdKBbP9hZeM61guK%2BTTMd1m8KQvt8uCHIu3EwHN88XbB2tjno4b0vnKPXyZzROfD05fbo1OToS6Cq9cyDIMpNmpelgMtnwbH7vR0tV6xSFvwAThYwiABMToEy%2B9kxo1xc8p2MIkGENuqNqNP%2F5XDxy0B5o6k8p1Xo5JPBMreB6xBQs0jZ%2FZZwtCL%2FP0TW5P9rInbRgzk9HjWbLlp0Zz%2F%2F%2Bvp9pTbDJVYXCR9WFWNCY8VbMhRBZg2i%2B%2FVZV6fYFB1JK7MB0rJFIVdzZPr99z4UdhQcdAK8jF1gUtNR4rf31sKsMz1tPEv8YA2i1B3wciYeW0s%2FvKhjIAydTs4kmSA4wdGrxcTphzj0L7biiUkAXSDMh6yz1s5TcuTfmt0RVnV2LEwy5zeYzWKcuv7tI1veW8S1aN%2B5qiGeXEudVbPrHSW3cI4em%2FTzlcLaYU7rJ5QW%2BoJ5FKXAvOy2UptrWzqFFubTXjRwRSIDnFpj9lIaEH%2FcG9de1nMRzUW0GyLFvLMsqGHvy9VIyQvLAwsN%2FTwgY6pgG8ujUMOHwQqyv4BdydxVsW3BvEOlb3KNy6lOkE2Lkg%2BvDLG3JCQ2TbyzsuEkXbJZ7fDTXZ19aRwgJJ9NdvAEmVYrxqvLsrV6QcIT%2FFiUQqS%2BbAjhx5OqR0j%2BT%2BspwLcqM%2FZAhSRs6F0HRWFkdBhn3quHRbCiVqxSagOSpDbt7l8LPrVhr9AJRI1wGyzf0DqZXGwqOzNwUSgc1hEEhXTV4GLPykH%2FAN&X-Amz-Signature=729d75f57c641405fb1905e58a672e577220a879d049ecb97e1d6b180b52a866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6VQO2B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM8%2BdD5RMtcepxd9MLtAktGXUK61LFQe%2BfGRULbfS8%2FAiA7uh8z%2FYjLxTeFFJJ4H6xBsAb%2FqkDfQkAj4T0Dd%2F5qACqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjlel8n%2FTINY6Yk2KtwDcG6veiRHgP1wUg7YRIsB4eb9D5wQ5FPrg6I4%2BHEWt%2BShhNrxrJmZ80dS1uJTfXPbDTlHuLEm73t%2BFUPlznUieVRnUeWFjv9T0sw7xF8jAbPMoNdKBbP9hZeM61guK%2BTTMd1m8KQvt8uCHIu3EwHN88XbB2tjno4b0vnKPXyZzROfD05fbo1OToS6Cq9cyDIMpNmpelgMtnwbH7vR0tV6xSFvwAThYwiABMToEy%2B9kxo1xc8p2MIkGENuqNqNP%2F5XDxy0B5o6k8p1Xo5JPBMreB6xBQs0jZ%2FZZwtCL%2FP0TW5P9rInbRgzk9HjWbLlp0Zz%2F%2F%2Bvp9pTbDJVYXCR9WFWNCY8VbMhRBZg2i%2B%2FVZV6fYFB1JK7MB0rJFIVdzZPr99z4UdhQcdAK8jF1gUtNR4rf31sKsMz1tPEv8YA2i1B3wciYeW0s%2FvKhjIAydTs4kmSA4wdGrxcTphzj0L7biiUkAXSDMh6yz1s5TcuTfmt0RVnV2LEwy5zeYzWKcuv7tI1veW8S1aN%2B5qiGeXEudVbPrHSW3cI4em%2FTzlcLaYU7rJ5QW%2BoJ5FKXAvOy2UptrWzqFFubTXjRwRSIDnFpj9lIaEH%2FcG9de1nMRzUW0GyLFvLMsqGHvy9VIyQvLAwsN%2FTwgY6pgG8ujUMOHwQqyv4BdydxVsW3BvEOlb3KNy6lOkE2Lkg%2BvDLG3JCQ2TbyzsuEkXbJZ7fDTXZ19aRwgJJ9NdvAEmVYrxqvLsrV6QcIT%2FFiUQqS%2BbAjhx5OqR0j%2BT%2BspwLcqM%2FZAhSRs6F0HRWFkdBhn3quHRbCiVqxSagOSpDbt7l8LPrVhr9AJRI1wGyzf0DqZXGwqOzNwUSgc1hEEhXTV4GLPykH%2FAN&X-Amz-Signature=d76c3e8a4f3a786b8ef04666f5b91947b1ac7515d1de6bfa3f779700f1a942ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6VQO2B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM8%2BdD5RMtcepxd9MLtAktGXUK61LFQe%2BfGRULbfS8%2FAiA7uh8z%2FYjLxTeFFJJ4H6xBsAb%2FqkDfQkAj4T0Dd%2F5qACqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjlel8n%2FTINY6Yk2KtwDcG6veiRHgP1wUg7YRIsB4eb9D5wQ5FPrg6I4%2BHEWt%2BShhNrxrJmZ80dS1uJTfXPbDTlHuLEm73t%2BFUPlznUieVRnUeWFjv9T0sw7xF8jAbPMoNdKBbP9hZeM61guK%2BTTMd1m8KQvt8uCHIu3EwHN88XbB2tjno4b0vnKPXyZzROfD05fbo1OToS6Cq9cyDIMpNmpelgMtnwbH7vR0tV6xSFvwAThYwiABMToEy%2B9kxo1xc8p2MIkGENuqNqNP%2F5XDxy0B5o6k8p1Xo5JPBMreB6xBQs0jZ%2FZZwtCL%2FP0TW5P9rInbRgzk9HjWbLlp0Zz%2F%2F%2Bvp9pTbDJVYXCR9WFWNCY8VbMhRBZg2i%2B%2FVZV6fYFB1JK7MB0rJFIVdzZPr99z4UdhQcdAK8jF1gUtNR4rf31sKsMz1tPEv8YA2i1B3wciYeW0s%2FvKhjIAydTs4kmSA4wdGrxcTphzj0L7biiUkAXSDMh6yz1s5TcuTfmt0RVnV2LEwy5zeYzWKcuv7tI1veW8S1aN%2B5qiGeXEudVbPrHSW3cI4em%2FTzlcLaYU7rJ5QW%2BoJ5FKXAvOy2UptrWzqFFubTXjRwRSIDnFpj9lIaEH%2FcG9de1nMRzUW0GyLFvLMsqGHvy9VIyQvLAwsN%2FTwgY6pgG8ujUMOHwQqyv4BdydxVsW3BvEOlb3KNy6lOkE2Lkg%2BvDLG3JCQ2TbyzsuEkXbJZ7fDTXZ19aRwgJJ9NdvAEmVYrxqvLsrV6QcIT%2FFiUQqS%2BbAjhx5OqR0j%2BT%2BspwLcqM%2FZAhSRs6F0HRWFkdBhn3quHRbCiVqxSagOSpDbt7l8LPrVhr9AJRI1wGyzf0DqZXGwqOzNwUSgc1hEEhXTV4GLPykH%2FAN&X-Amz-Signature=dc6880b65f252133d5e22845216b1ee7fce8c5dfae76d8db149b9c02c89b2208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
