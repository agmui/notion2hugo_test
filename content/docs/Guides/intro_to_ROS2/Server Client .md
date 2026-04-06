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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2UW5CB%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLsxgGg4ngekxEtCZZ7ysC4heL12YtA1%2F6A2DtVWxs4gIhAPwDy6hdzNxlRdklyFfjMJ6qyMbfIf3xuT6DN%2BPrltk5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLG7gSuVXx95Ibdgsq3AOOM5hQnOaUrigQnLdzXzOOf9KaLh1SapD%2BTLOxpnvbsDZ236Gm8%2FZNL3Zgk9tXCpYQ7jVaP4gwVJy3AMdDAstXHodeMSjEgDRJGTfDTNsuJxno7msEtWOmiDA587nipMdquh6e%2FHBphM9Mvfh09fRpIgiaINWw8rYda%2FfNaghT0m3W4slXhGNzfdN%2BlwxOSkmaRJWuBeYKlesDhFvnBbRqvFg3qZrjglopiHO87Zunc0OMmWeSKkHHIT4QTUsaK%2BG7k7jvfaI4p09TYv3SPszdsuUhETfhUyCLsOUO%2BuFn7BFlRjGBqpTBPdM%2BcKFx1kcTJX%2FwwFF%2B7wIs61A1D2BLzsrY0vBmJxrmUdgHr39kSmoCLIxFZDcfCz0zCOAu7uGADCDaJ6%2BuZi4bBmjSTyGOIEixbumZ5mxnjoCoxG4QS%2FGGtCkpR6Isi9iK3Yv9fiIL6mV26Xu%2FzeK9SAD7CKU585vB3JfwUs4VmnOETvCp1gCtOSFii%2Bd1Fj0aBaMn820jnixPMbqRzzi9QnD3q%2FtGoeDOOqlPVvm0qBaXkAA3uT1xZ1t%2BcqsrPa0r5XWB1tn4%2F9P0XU6onOh99kVY4BGCYW03iXUxpSYfXh6WiNQorEk61PFiRVXAcjDJajDRsczOBjqkAa4dQGtA9mDe5Gra%2FfGcZ%2F7w9lOI4s062jn1hIItqr%2B8HnEX65o9j3ALgwzkiu81MAHh7VJybV%2Fl%2BvNriSJ1YYrLtzS1ml9KP32l2an3UHXEcLMr1HmCrenxDQqu72orE6HquBLm9Gw%2Fi13ovhPkxGKRw%2FKEHYhnkFie4gNZnWiKkYCRmNA50gyy%2FnSrx7ytmWg%2Fd6micrRJeBDxyBhaZp75qSRG&X-Amz-Signature=a38cdc43af28680482babd3150e4c1cf2211c6ee39584b129382c183a9215c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2UW5CB%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLsxgGg4ngekxEtCZZ7ysC4heL12YtA1%2F6A2DtVWxs4gIhAPwDy6hdzNxlRdklyFfjMJ6qyMbfIf3xuT6DN%2BPrltk5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLG7gSuVXx95Ibdgsq3AOOM5hQnOaUrigQnLdzXzOOf9KaLh1SapD%2BTLOxpnvbsDZ236Gm8%2FZNL3Zgk9tXCpYQ7jVaP4gwVJy3AMdDAstXHodeMSjEgDRJGTfDTNsuJxno7msEtWOmiDA587nipMdquh6e%2FHBphM9Mvfh09fRpIgiaINWw8rYda%2FfNaghT0m3W4slXhGNzfdN%2BlwxOSkmaRJWuBeYKlesDhFvnBbRqvFg3qZrjglopiHO87Zunc0OMmWeSKkHHIT4QTUsaK%2BG7k7jvfaI4p09TYv3SPszdsuUhETfhUyCLsOUO%2BuFn7BFlRjGBqpTBPdM%2BcKFx1kcTJX%2FwwFF%2B7wIs61A1D2BLzsrY0vBmJxrmUdgHr39kSmoCLIxFZDcfCz0zCOAu7uGADCDaJ6%2BuZi4bBmjSTyGOIEixbumZ5mxnjoCoxG4QS%2FGGtCkpR6Isi9iK3Yv9fiIL6mV26Xu%2FzeK9SAD7CKU585vB3JfwUs4VmnOETvCp1gCtOSFii%2Bd1Fj0aBaMn820jnixPMbqRzzi9QnD3q%2FtGoeDOOqlPVvm0qBaXkAA3uT1xZ1t%2BcqsrPa0r5XWB1tn4%2F9P0XU6onOh99kVY4BGCYW03iXUxpSYfXh6WiNQorEk61PFiRVXAcjDJajDRsczOBjqkAa4dQGtA9mDe5Gra%2FfGcZ%2F7w9lOI4s062jn1hIItqr%2B8HnEX65o9j3ALgwzkiu81MAHh7VJybV%2Fl%2BvNriSJ1YYrLtzS1ml9KP32l2an3UHXEcLMr1HmCrenxDQqu72orE6HquBLm9Gw%2Fi13ovhPkxGKRw%2FKEHYhnkFie4gNZnWiKkYCRmNA50gyy%2FnSrx7ytmWg%2Fd6micrRJeBDxyBhaZp75qSRG&X-Amz-Signature=d8df7af681f33f832671077c9250cbed3c8a2e0c0a7c13ab5e42c2f5d58dbf86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2UW5CB%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLsxgGg4ngekxEtCZZ7ysC4heL12YtA1%2F6A2DtVWxs4gIhAPwDy6hdzNxlRdklyFfjMJ6qyMbfIf3xuT6DN%2BPrltk5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLG7gSuVXx95Ibdgsq3AOOM5hQnOaUrigQnLdzXzOOf9KaLh1SapD%2BTLOxpnvbsDZ236Gm8%2FZNL3Zgk9tXCpYQ7jVaP4gwVJy3AMdDAstXHodeMSjEgDRJGTfDTNsuJxno7msEtWOmiDA587nipMdquh6e%2FHBphM9Mvfh09fRpIgiaINWw8rYda%2FfNaghT0m3W4slXhGNzfdN%2BlwxOSkmaRJWuBeYKlesDhFvnBbRqvFg3qZrjglopiHO87Zunc0OMmWeSKkHHIT4QTUsaK%2BG7k7jvfaI4p09TYv3SPszdsuUhETfhUyCLsOUO%2BuFn7BFlRjGBqpTBPdM%2BcKFx1kcTJX%2FwwFF%2B7wIs61A1D2BLzsrY0vBmJxrmUdgHr39kSmoCLIxFZDcfCz0zCOAu7uGADCDaJ6%2BuZi4bBmjSTyGOIEixbumZ5mxnjoCoxG4QS%2FGGtCkpR6Isi9iK3Yv9fiIL6mV26Xu%2FzeK9SAD7CKU585vB3JfwUs4VmnOETvCp1gCtOSFii%2Bd1Fj0aBaMn820jnixPMbqRzzi9QnD3q%2FtGoeDOOqlPVvm0qBaXkAA3uT1xZ1t%2BcqsrPa0r5XWB1tn4%2F9P0XU6onOh99kVY4BGCYW03iXUxpSYfXh6WiNQorEk61PFiRVXAcjDJajDRsczOBjqkAa4dQGtA9mDe5Gra%2FfGcZ%2F7w9lOI4s062jn1hIItqr%2B8HnEX65o9j3ALgwzkiu81MAHh7VJybV%2Fl%2BvNriSJ1YYrLtzS1ml9KP32l2an3UHXEcLMr1HmCrenxDQqu72orE6HquBLm9Gw%2Fi13ovhPkxGKRw%2FKEHYhnkFie4gNZnWiKkYCRmNA50gyy%2FnSrx7ytmWg%2Fd6micrRJeBDxyBhaZp75qSRG&X-Amz-Signature=ae3a535ff830a929dc49cdce22cd01e828c546bf4b21611da203d05034e7b4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2UW5CB%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLsxgGg4ngekxEtCZZ7ysC4heL12YtA1%2F6A2DtVWxs4gIhAPwDy6hdzNxlRdklyFfjMJ6qyMbfIf3xuT6DN%2BPrltk5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLG7gSuVXx95Ibdgsq3AOOM5hQnOaUrigQnLdzXzOOf9KaLh1SapD%2BTLOxpnvbsDZ236Gm8%2FZNL3Zgk9tXCpYQ7jVaP4gwVJy3AMdDAstXHodeMSjEgDRJGTfDTNsuJxno7msEtWOmiDA587nipMdquh6e%2FHBphM9Mvfh09fRpIgiaINWw8rYda%2FfNaghT0m3W4slXhGNzfdN%2BlwxOSkmaRJWuBeYKlesDhFvnBbRqvFg3qZrjglopiHO87Zunc0OMmWeSKkHHIT4QTUsaK%2BG7k7jvfaI4p09TYv3SPszdsuUhETfhUyCLsOUO%2BuFn7BFlRjGBqpTBPdM%2BcKFx1kcTJX%2FwwFF%2B7wIs61A1D2BLzsrY0vBmJxrmUdgHr39kSmoCLIxFZDcfCz0zCOAu7uGADCDaJ6%2BuZi4bBmjSTyGOIEixbumZ5mxnjoCoxG4QS%2FGGtCkpR6Isi9iK3Yv9fiIL6mV26Xu%2FzeK9SAD7CKU585vB3JfwUs4VmnOETvCp1gCtOSFii%2Bd1Fj0aBaMn820jnixPMbqRzzi9QnD3q%2FtGoeDOOqlPVvm0qBaXkAA3uT1xZ1t%2BcqsrPa0r5XWB1tn4%2F9P0XU6onOh99kVY4BGCYW03iXUxpSYfXh6WiNQorEk61PFiRVXAcjDJajDRsczOBjqkAa4dQGtA9mDe5Gra%2FfGcZ%2F7w9lOI4s062jn1hIItqr%2B8HnEX65o9j3ALgwzkiu81MAHh7VJybV%2Fl%2BvNriSJ1YYrLtzS1ml9KP32l2an3UHXEcLMr1HmCrenxDQqu72orE6HquBLm9Gw%2Fi13ovhPkxGKRw%2FKEHYhnkFie4gNZnWiKkYCRmNA50gyy%2FnSrx7ytmWg%2Fd6micrRJeBDxyBhaZp75qSRG&X-Amz-Signature=8445bb53dd3ee0ffa55045e357aa272399b1a41e419bfb8d0b0d288106eed74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2UW5CB%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLsxgGg4ngekxEtCZZ7ysC4heL12YtA1%2F6A2DtVWxs4gIhAPwDy6hdzNxlRdklyFfjMJ6qyMbfIf3xuT6DN%2BPrltk5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLG7gSuVXx95Ibdgsq3AOOM5hQnOaUrigQnLdzXzOOf9KaLh1SapD%2BTLOxpnvbsDZ236Gm8%2FZNL3Zgk9tXCpYQ7jVaP4gwVJy3AMdDAstXHodeMSjEgDRJGTfDTNsuJxno7msEtWOmiDA587nipMdquh6e%2FHBphM9Mvfh09fRpIgiaINWw8rYda%2FfNaghT0m3W4slXhGNzfdN%2BlwxOSkmaRJWuBeYKlesDhFvnBbRqvFg3qZrjglopiHO87Zunc0OMmWeSKkHHIT4QTUsaK%2BG7k7jvfaI4p09TYv3SPszdsuUhETfhUyCLsOUO%2BuFn7BFlRjGBqpTBPdM%2BcKFx1kcTJX%2FwwFF%2B7wIs61A1D2BLzsrY0vBmJxrmUdgHr39kSmoCLIxFZDcfCz0zCOAu7uGADCDaJ6%2BuZi4bBmjSTyGOIEixbumZ5mxnjoCoxG4QS%2FGGtCkpR6Isi9iK3Yv9fiIL6mV26Xu%2FzeK9SAD7CKU585vB3JfwUs4VmnOETvCp1gCtOSFii%2Bd1Fj0aBaMn820jnixPMbqRzzi9QnD3q%2FtGoeDOOqlPVvm0qBaXkAA3uT1xZ1t%2BcqsrPa0r5XWB1tn4%2F9P0XU6onOh99kVY4BGCYW03iXUxpSYfXh6WiNQorEk61PFiRVXAcjDJajDRsczOBjqkAa4dQGtA9mDe5Gra%2FfGcZ%2F7w9lOI4s062jn1hIItqr%2B8HnEX65o9j3ALgwzkiu81MAHh7VJybV%2Fl%2BvNriSJ1YYrLtzS1ml9KP32l2an3UHXEcLMr1HmCrenxDQqu72orE6HquBLm9Gw%2Fi13ovhPkxGKRw%2FKEHYhnkFie4gNZnWiKkYCRmNA50gyy%2FnSrx7ytmWg%2Fd6micrRJeBDxyBhaZp75qSRG&X-Amz-Signature=b29cdbf0c0d9bd56cc5b965b75f94f0df2a9cc6e8149d08a998bf851425eb771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
