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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGYTTQ6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugu3URpZR%2B6uyBlNrPTvtaHqm79EpGkIs7hksf%2BOEVAiAR5Xzo9LZod3jJBoP2%2BeNhjWgy9Wk2WPLguzTfwURWQSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQU1Lf994s0DHFAv%2FKtwDIsUzg0uUMw9A1HDi6aRyZid9ksIXiuVgdj0P17a5lxl%2FoOSBGiVzjb%2FHT1ZfoIF7S3kyYC25Ka01fP8tR8NfXcCGT9iIAZ%2FQrhc0ANQwQEF1S5cV%2FE%2FgQB4iUdbrczA89tGKbQEPXFb%2BKh4duZ1F1nbKP%2BR6VtmfgyxP%2BbMETGFhA%2F8z%2FHo%2BIljbexRt8JQViejVqBLCUhxp6Z9Gr%2Bl4DH7jjpOPER%2FKniD1kp3PKbtWyvbQFOOtwMEc0yifPp5GhbricRu1HHHiQ5OdxwQKjZ6kbunxWPb0muUyRlPYGXWhVEVQQUB6KusCyRHYu7tL%2Fi0Ho1n6i%2Bg8r%2BQ5R%2BPFibRSZcp2s5XnXofImrw%2FkvpNSYHKS3CZ8Dw7y%2FZNLhBIoB6MHNe9GbQa7rozSjZULph1uuVumqP%2F9DA5VSa67KWHzzNosO7GrZw1gAz5wz5j29iri5gysZgO8tYEcFxXbt8mBUvYtR%2F1XlIkkNaZrCNTPBYK9FLg8YmoO0D%2FzkS8gWDUmlg7lv7aENfP9dvpNnPEKMJAcglFg6Bwe4ZdGRU%2Fc50qNyGAyC48X0to4rJqTVd9ykIxs6wpnUvTgrh7UZHHvQJFeLAA86d1nhfVeA9Q51SqRi17akH8Vewwxv7TwQY6pgG9Pj%2FRi1H7ZGYMoOzwvM%2F5yw4PqvtJgeJwi%2F7yxP%2BT%2BY30yok1hZbF%2BvqMOUJPLnj86m2lvbAeX%2BIqHzQ030mglPFgjeZvB%2BcQG%2BsBkfEtJpYpxT11saHkJ%2FvWVpPDwnlAxej%2BkD8EHMRsCEeOKYELM7hhxAx9psp3af1blNLtRKa7H%2B0sYu3%2FKh1iA2EiIwdJArr62SlLNKDmPPu05HdKjazwEoqS&X-Amz-Signature=99a307646b49663035db770ddec4f2e9bc25bd946d9d2b2bec6960432bc41afc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGYTTQ6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugu3URpZR%2B6uyBlNrPTvtaHqm79EpGkIs7hksf%2BOEVAiAR5Xzo9LZod3jJBoP2%2BeNhjWgy9Wk2WPLguzTfwURWQSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQU1Lf994s0DHFAv%2FKtwDIsUzg0uUMw9A1HDi6aRyZid9ksIXiuVgdj0P17a5lxl%2FoOSBGiVzjb%2FHT1ZfoIF7S3kyYC25Ka01fP8tR8NfXcCGT9iIAZ%2FQrhc0ANQwQEF1S5cV%2FE%2FgQB4iUdbrczA89tGKbQEPXFb%2BKh4duZ1F1nbKP%2BR6VtmfgyxP%2BbMETGFhA%2F8z%2FHo%2BIljbexRt8JQViejVqBLCUhxp6Z9Gr%2Bl4DH7jjpOPER%2FKniD1kp3PKbtWyvbQFOOtwMEc0yifPp5GhbricRu1HHHiQ5OdxwQKjZ6kbunxWPb0muUyRlPYGXWhVEVQQUB6KusCyRHYu7tL%2Fi0Ho1n6i%2Bg8r%2BQ5R%2BPFibRSZcp2s5XnXofImrw%2FkvpNSYHKS3CZ8Dw7y%2FZNLhBIoB6MHNe9GbQa7rozSjZULph1uuVumqP%2F9DA5VSa67KWHzzNosO7GrZw1gAz5wz5j29iri5gysZgO8tYEcFxXbt8mBUvYtR%2F1XlIkkNaZrCNTPBYK9FLg8YmoO0D%2FzkS8gWDUmlg7lv7aENfP9dvpNnPEKMJAcglFg6Bwe4ZdGRU%2Fc50qNyGAyC48X0to4rJqTVd9ykIxs6wpnUvTgrh7UZHHvQJFeLAA86d1nhfVeA9Q51SqRi17akH8Vewwxv7TwQY6pgG9Pj%2FRi1H7ZGYMoOzwvM%2F5yw4PqvtJgeJwi%2F7yxP%2BT%2BY30yok1hZbF%2BvqMOUJPLnj86m2lvbAeX%2BIqHzQ030mglPFgjeZvB%2BcQG%2BsBkfEtJpYpxT11saHkJ%2FvWVpPDwnlAxej%2BkD8EHMRsCEeOKYELM7hhxAx9psp3af1blNLtRKa7H%2B0sYu3%2FKh1iA2EiIwdJArr62SlLNKDmPPu05HdKjazwEoqS&X-Amz-Signature=3008c25915f3ca27d5c3c3fd08e477d7af0c0a7c958dad0cfe15f540d7721536&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGYTTQ6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugu3URpZR%2B6uyBlNrPTvtaHqm79EpGkIs7hksf%2BOEVAiAR5Xzo9LZod3jJBoP2%2BeNhjWgy9Wk2WPLguzTfwURWQSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQU1Lf994s0DHFAv%2FKtwDIsUzg0uUMw9A1HDi6aRyZid9ksIXiuVgdj0P17a5lxl%2FoOSBGiVzjb%2FHT1ZfoIF7S3kyYC25Ka01fP8tR8NfXcCGT9iIAZ%2FQrhc0ANQwQEF1S5cV%2FE%2FgQB4iUdbrczA89tGKbQEPXFb%2BKh4duZ1F1nbKP%2BR6VtmfgyxP%2BbMETGFhA%2F8z%2FHo%2BIljbexRt8JQViejVqBLCUhxp6Z9Gr%2Bl4DH7jjpOPER%2FKniD1kp3PKbtWyvbQFOOtwMEc0yifPp5GhbricRu1HHHiQ5OdxwQKjZ6kbunxWPb0muUyRlPYGXWhVEVQQUB6KusCyRHYu7tL%2Fi0Ho1n6i%2Bg8r%2BQ5R%2BPFibRSZcp2s5XnXofImrw%2FkvpNSYHKS3CZ8Dw7y%2FZNLhBIoB6MHNe9GbQa7rozSjZULph1uuVumqP%2F9DA5VSa67KWHzzNosO7GrZw1gAz5wz5j29iri5gysZgO8tYEcFxXbt8mBUvYtR%2F1XlIkkNaZrCNTPBYK9FLg8YmoO0D%2FzkS8gWDUmlg7lv7aENfP9dvpNnPEKMJAcglFg6Bwe4ZdGRU%2Fc50qNyGAyC48X0to4rJqTVd9ykIxs6wpnUvTgrh7UZHHvQJFeLAA86d1nhfVeA9Q51SqRi17akH8Vewwxv7TwQY6pgG9Pj%2FRi1H7ZGYMoOzwvM%2F5yw4PqvtJgeJwi%2F7yxP%2BT%2BY30yok1hZbF%2BvqMOUJPLnj86m2lvbAeX%2BIqHzQ030mglPFgjeZvB%2BcQG%2BsBkfEtJpYpxT11saHkJ%2FvWVpPDwnlAxej%2BkD8EHMRsCEeOKYELM7hhxAx9psp3af1blNLtRKa7H%2B0sYu3%2FKh1iA2EiIwdJArr62SlLNKDmPPu05HdKjazwEoqS&X-Amz-Signature=93343b27dd33d8acc32545ca22254af7a3c98805575528bcda86f0da89ed557e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGYTTQ6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugu3URpZR%2B6uyBlNrPTvtaHqm79EpGkIs7hksf%2BOEVAiAR5Xzo9LZod3jJBoP2%2BeNhjWgy9Wk2WPLguzTfwURWQSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQU1Lf994s0DHFAv%2FKtwDIsUzg0uUMw9A1HDi6aRyZid9ksIXiuVgdj0P17a5lxl%2FoOSBGiVzjb%2FHT1ZfoIF7S3kyYC25Ka01fP8tR8NfXcCGT9iIAZ%2FQrhc0ANQwQEF1S5cV%2FE%2FgQB4iUdbrczA89tGKbQEPXFb%2BKh4duZ1F1nbKP%2BR6VtmfgyxP%2BbMETGFhA%2F8z%2FHo%2BIljbexRt8JQViejVqBLCUhxp6Z9Gr%2Bl4DH7jjpOPER%2FKniD1kp3PKbtWyvbQFOOtwMEc0yifPp5GhbricRu1HHHiQ5OdxwQKjZ6kbunxWPb0muUyRlPYGXWhVEVQQUB6KusCyRHYu7tL%2Fi0Ho1n6i%2Bg8r%2BQ5R%2BPFibRSZcp2s5XnXofImrw%2FkvpNSYHKS3CZ8Dw7y%2FZNLhBIoB6MHNe9GbQa7rozSjZULph1uuVumqP%2F9DA5VSa67KWHzzNosO7GrZw1gAz5wz5j29iri5gysZgO8tYEcFxXbt8mBUvYtR%2F1XlIkkNaZrCNTPBYK9FLg8YmoO0D%2FzkS8gWDUmlg7lv7aENfP9dvpNnPEKMJAcglFg6Bwe4ZdGRU%2Fc50qNyGAyC48X0to4rJqTVd9ykIxs6wpnUvTgrh7UZHHvQJFeLAA86d1nhfVeA9Q51SqRi17akH8Vewwxv7TwQY6pgG9Pj%2FRi1H7ZGYMoOzwvM%2F5yw4PqvtJgeJwi%2F7yxP%2BT%2BY30yok1hZbF%2BvqMOUJPLnj86m2lvbAeX%2BIqHzQ030mglPFgjeZvB%2BcQG%2BsBkfEtJpYpxT11saHkJ%2FvWVpPDwnlAxej%2BkD8EHMRsCEeOKYELM7hhxAx9psp3af1blNLtRKa7H%2B0sYu3%2FKh1iA2EiIwdJArr62SlLNKDmPPu05HdKjazwEoqS&X-Amz-Signature=be0c6cd530bc7ea607130fabec815152558d7910d7e767549638a8a9a8bcbd7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGYTTQ6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugu3URpZR%2B6uyBlNrPTvtaHqm79EpGkIs7hksf%2BOEVAiAR5Xzo9LZod3jJBoP2%2BeNhjWgy9Wk2WPLguzTfwURWQSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQU1Lf994s0DHFAv%2FKtwDIsUzg0uUMw9A1HDi6aRyZid9ksIXiuVgdj0P17a5lxl%2FoOSBGiVzjb%2FHT1ZfoIF7S3kyYC25Ka01fP8tR8NfXcCGT9iIAZ%2FQrhc0ANQwQEF1S5cV%2FE%2FgQB4iUdbrczA89tGKbQEPXFb%2BKh4duZ1F1nbKP%2BR6VtmfgyxP%2BbMETGFhA%2F8z%2FHo%2BIljbexRt8JQViejVqBLCUhxp6Z9Gr%2Bl4DH7jjpOPER%2FKniD1kp3PKbtWyvbQFOOtwMEc0yifPp5GhbricRu1HHHiQ5OdxwQKjZ6kbunxWPb0muUyRlPYGXWhVEVQQUB6KusCyRHYu7tL%2Fi0Ho1n6i%2Bg8r%2BQ5R%2BPFibRSZcp2s5XnXofImrw%2FkvpNSYHKS3CZ8Dw7y%2FZNLhBIoB6MHNe9GbQa7rozSjZULph1uuVumqP%2F9DA5VSa67KWHzzNosO7GrZw1gAz5wz5j29iri5gysZgO8tYEcFxXbt8mBUvYtR%2F1XlIkkNaZrCNTPBYK9FLg8YmoO0D%2FzkS8gWDUmlg7lv7aENfP9dvpNnPEKMJAcglFg6Bwe4ZdGRU%2Fc50qNyGAyC48X0to4rJqTVd9ykIxs6wpnUvTgrh7UZHHvQJFeLAA86d1nhfVeA9Q51SqRi17akH8Vewwxv7TwQY6pgG9Pj%2FRi1H7ZGYMoOzwvM%2F5yw4PqvtJgeJwi%2F7yxP%2BT%2BY30yok1hZbF%2BvqMOUJPLnj86m2lvbAeX%2BIqHzQ030mglPFgjeZvB%2BcQG%2BsBkfEtJpYpxT11saHkJ%2FvWVpPDwnlAxej%2BkD8EHMRsCEeOKYELM7hhxAx9psp3af1blNLtRKa7H%2B0sYu3%2FKh1iA2EiIwdJArr62SlLNKDmPPu05HdKjazwEoqS&X-Amz-Signature=36600e49e313a5c0a52bdd9caaea202b37dfdd3d35a6947e74eab752e2376baf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
