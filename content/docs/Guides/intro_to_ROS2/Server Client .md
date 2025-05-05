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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A5CUMD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDxzi%2F8Dkf82b9EJG4N3qInxIAhDhvPlW59O3R3vHFmvAiA%2FOaHP7jNQFoGGRR7mkcTuItZq7vzaMFUAcVAug1o7Dir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMy40g3agKOonvvgbhKtwDeVLLM%2FTREn%2F%2BpUlRS%2FcJaw3vNND5Gl9YhTPT1Xs3ZIhk0vq1FeTJUOOmGNPljDIzQvDGbppzeO5v5mdkHyQdRNGr75u%2Ffl0oDiNjvAgTfWqxpQZS5KF8xg7J07h1gu00Vt3rrOy57bQU26TKMms7M1ZHi4Xcrjj6o6KlRx7wnXJ3KeNXVh1O2VwIC91NF%2BpC7ghRfGUeL1lRiZpZ%2BiPgGbWC0V7ZYVrqyxpSKaQ7vv8sXmrNMCZQazOxtlFjQpGTFTmnsc7dPf6pLOLmG7rPrEjwt4fYnoqUYhLCSTsRDuZ1EF5FVIxKoXNdlJ36sgULlJpvYUsWXEthhk1XKFwuADDiHJDlo8oT7qHdDfM2ZbTYnrP5RuXFzGxxb5mcgEYBRvjOoqrmHRUP7W9SHdhvK5MYhj8CfJyH1z3hHuk13g0gs7GVB8pIUnCT60Bz2uv%2BQGIzNO%2FPbMDlgTXGj%2FL7st7xbdDW8Ec03xSVuYppAb7QZs2YxK9c6AMzA2oCssLIfytflwrTxcE%2Fn3HX3VQ1ewZF9BRrim8Gwhe9J1hLI9EDsJwqFZFpIOfb%2BbfM%2FfDF6g94lmHqtff14C4%2FOcfwkflHpLe0TKozfMbUsZerP2Fd6Bgm6uAhBXWHsc8wtqzfwAY6pgHoIdbzdTwAXWpl0mWKfsz%2FMhhPuHNxQL%2Be5GVdftSUwi1sTW76F4BN7Z69kdKdIKNdWOqXB4Ci5mqeBgzkh%2FdxLpxI3y3m6CirvapEWKwNmqPW61mqM4JSoixfY0aWnQsjBTmUBJE%2BgNKQgEdOZvtIAgdIB37rGWcKAfrerikBy3cgIUT7Sf%2BlrMzNrjagGmNRT5mgSgEW75YXKwk4By9WWd1j4xyq&X-Amz-Signature=7a0cfdaa428492c90fbe3729df2c0a8ea66cbf3d506551c9d25a7a9c820d3b31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A5CUMD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDxzi%2F8Dkf82b9EJG4N3qInxIAhDhvPlW59O3R3vHFmvAiA%2FOaHP7jNQFoGGRR7mkcTuItZq7vzaMFUAcVAug1o7Dir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMy40g3agKOonvvgbhKtwDeVLLM%2FTREn%2F%2BpUlRS%2FcJaw3vNND5Gl9YhTPT1Xs3ZIhk0vq1FeTJUOOmGNPljDIzQvDGbppzeO5v5mdkHyQdRNGr75u%2Ffl0oDiNjvAgTfWqxpQZS5KF8xg7J07h1gu00Vt3rrOy57bQU26TKMms7M1ZHi4Xcrjj6o6KlRx7wnXJ3KeNXVh1O2VwIC91NF%2BpC7ghRfGUeL1lRiZpZ%2BiPgGbWC0V7ZYVrqyxpSKaQ7vv8sXmrNMCZQazOxtlFjQpGTFTmnsc7dPf6pLOLmG7rPrEjwt4fYnoqUYhLCSTsRDuZ1EF5FVIxKoXNdlJ36sgULlJpvYUsWXEthhk1XKFwuADDiHJDlo8oT7qHdDfM2ZbTYnrP5RuXFzGxxb5mcgEYBRvjOoqrmHRUP7W9SHdhvK5MYhj8CfJyH1z3hHuk13g0gs7GVB8pIUnCT60Bz2uv%2BQGIzNO%2FPbMDlgTXGj%2FL7st7xbdDW8Ec03xSVuYppAb7QZs2YxK9c6AMzA2oCssLIfytflwrTxcE%2Fn3HX3VQ1ewZF9BRrim8Gwhe9J1hLI9EDsJwqFZFpIOfb%2BbfM%2FfDF6g94lmHqtff14C4%2FOcfwkflHpLe0TKozfMbUsZerP2Fd6Bgm6uAhBXWHsc8wtqzfwAY6pgHoIdbzdTwAXWpl0mWKfsz%2FMhhPuHNxQL%2Be5GVdftSUwi1sTW76F4BN7Z69kdKdIKNdWOqXB4Ci5mqeBgzkh%2FdxLpxI3y3m6CirvapEWKwNmqPW61mqM4JSoixfY0aWnQsjBTmUBJE%2BgNKQgEdOZvtIAgdIB37rGWcKAfrerikBy3cgIUT7Sf%2BlrMzNrjagGmNRT5mgSgEW75YXKwk4By9WWd1j4xyq&X-Amz-Signature=a18a59262a10e7eb8cf52f9910bcdbd1245f60a52b4f0c4a803e975fdae0c544&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A5CUMD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDxzi%2F8Dkf82b9EJG4N3qInxIAhDhvPlW59O3R3vHFmvAiA%2FOaHP7jNQFoGGRR7mkcTuItZq7vzaMFUAcVAug1o7Dir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMy40g3agKOonvvgbhKtwDeVLLM%2FTREn%2F%2BpUlRS%2FcJaw3vNND5Gl9YhTPT1Xs3ZIhk0vq1FeTJUOOmGNPljDIzQvDGbppzeO5v5mdkHyQdRNGr75u%2Ffl0oDiNjvAgTfWqxpQZS5KF8xg7J07h1gu00Vt3rrOy57bQU26TKMms7M1ZHi4Xcrjj6o6KlRx7wnXJ3KeNXVh1O2VwIC91NF%2BpC7ghRfGUeL1lRiZpZ%2BiPgGbWC0V7ZYVrqyxpSKaQ7vv8sXmrNMCZQazOxtlFjQpGTFTmnsc7dPf6pLOLmG7rPrEjwt4fYnoqUYhLCSTsRDuZ1EF5FVIxKoXNdlJ36sgULlJpvYUsWXEthhk1XKFwuADDiHJDlo8oT7qHdDfM2ZbTYnrP5RuXFzGxxb5mcgEYBRvjOoqrmHRUP7W9SHdhvK5MYhj8CfJyH1z3hHuk13g0gs7GVB8pIUnCT60Bz2uv%2BQGIzNO%2FPbMDlgTXGj%2FL7st7xbdDW8Ec03xSVuYppAb7QZs2YxK9c6AMzA2oCssLIfytflwrTxcE%2Fn3HX3VQ1ewZF9BRrim8Gwhe9J1hLI9EDsJwqFZFpIOfb%2BbfM%2FfDF6g94lmHqtff14C4%2FOcfwkflHpLe0TKozfMbUsZerP2Fd6Bgm6uAhBXWHsc8wtqzfwAY6pgHoIdbzdTwAXWpl0mWKfsz%2FMhhPuHNxQL%2Be5GVdftSUwi1sTW76F4BN7Z69kdKdIKNdWOqXB4Ci5mqeBgzkh%2FdxLpxI3y3m6CirvapEWKwNmqPW61mqM4JSoixfY0aWnQsjBTmUBJE%2BgNKQgEdOZvtIAgdIB37rGWcKAfrerikBy3cgIUT7Sf%2BlrMzNrjagGmNRT5mgSgEW75YXKwk4By9WWd1j4xyq&X-Amz-Signature=3a7c21108c04a98c65d80041391a5a3868e5ca45449e1ffc5f3742c0187a437c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A5CUMD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDxzi%2F8Dkf82b9EJG4N3qInxIAhDhvPlW59O3R3vHFmvAiA%2FOaHP7jNQFoGGRR7mkcTuItZq7vzaMFUAcVAug1o7Dir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMy40g3agKOonvvgbhKtwDeVLLM%2FTREn%2F%2BpUlRS%2FcJaw3vNND5Gl9YhTPT1Xs3ZIhk0vq1FeTJUOOmGNPljDIzQvDGbppzeO5v5mdkHyQdRNGr75u%2Ffl0oDiNjvAgTfWqxpQZS5KF8xg7J07h1gu00Vt3rrOy57bQU26TKMms7M1ZHi4Xcrjj6o6KlRx7wnXJ3KeNXVh1O2VwIC91NF%2BpC7ghRfGUeL1lRiZpZ%2BiPgGbWC0V7ZYVrqyxpSKaQ7vv8sXmrNMCZQazOxtlFjQpGTFTmnsc7dPf6pLOLmG7rPrEjwt4fYnoqUYhLCSTsRDuZ1EF5FVIxKoXNdlJ36sgULlJpvYUsWXEthhk1XKFwuADDiHJDlo8oT7qHdDfM2ZbTYnrP5RuXFzGxxb5mcgEYBRvjOoqrmHRUP7W9SHdhvK5MYhj8CfJyH1z3hHuk13g0gs7GVB8pIUnCT60Bz2uv%2BQGIzNO%2FPbMDlgTXGj%2FL7st7xbdDW8Ec03xSVuYppAb7QZs2YxK9c6AMzA2oCssLIfytflwrTxcE%2Fn3HX3VQ1ewZF9BRrim8Gwhe9J1hLI9EDsJwqFZFpIOfb%2BbfM%2FfDF6g94lmHqtff14C4%2FOcfwkflHpLe0TKozfMbUsZerP2Fd6Bgm6uAhBXWHsc8wtqzfwAY6pgHoIdbzdTwAXWpl0mWKfsz%2FMhhPuHNxQL%2Be5GVdftSUwi1sTW76F4BN7Z69kdKdIKNdWOqXB4Ci5mqeBgzkh%2FdxLpxI3y3m6CirvapEWKwNmqPW61mqM4JSoixfY0aWnQsjBTmUBJE%2BgNKQgEdOZvtIAgdIB37rGWcKAfrerikBy3cgIUT7Sf%2BlrMzNrjagGmNRT5mgSgEW75YXKwk4By9WWd1j4xyq&X-Amz-Signature=8bf455e97225e88bc0fd6a7c353fe615f9638ef88d86cf16bef4a9a116e62934&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A5CUMD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDxzi%2F8Dkf82b9EJG4N3qInxIAhDhvPlW59O3R3vHFmvAiA%2FOaHP7jNQFoGGRR7mkcTuItZq7vzaMFUAcVAug1o7Dir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMy40g3agKOonvvgbhKtwDeVLLM%2FTREn%2F%2BpUlRS%2FcJaw3vNND5Gl9YhTPT1Xs3ZIhk0vq1FeTJUOOmGNPljDIzQvDGbppzeO5v5mdkHyQdRNGr75u%2Ffl0oDiNjvAgTfWqxpQZS5KF8xg7J07h1gu00Vt3rrOy57bQU26TKMms7M1ZHi4Xcrjj6o6KlRx7wnXJ3KeNXVh1O2VwIC91NF%2BpC7ghRfGUeL1lRiZpZ%2BiPgGbWC0V7ZYVrqyxpSKaQ7vv8sXmrNMCZQazOxtlFjQpGTFTmnsc7dPf6pLOLmG7rPrEjwt4fYnoqUYhLCSTsRDuZ1EF5FVIxKoXNdlJ36sgULlJpvYUsWXEthhk1XKFwuADDiHJDlo8oT7qHdDfM2ZbTYnrP5RuXFzGxxb5mcgEYBRvjOoqrmHRUP7W9SHdhvK5MYhj8CfJyH1z3hHuk13g0gs7GVB8pIUnCT60Bz2uv%2BQGIzNO%2FPbMDlgTXGj%2FL7st7xbdDW8Ec03xSVuYppAb7QZs2YxK9c6AMzA2oCssLIfytflwrTxcE%2Fn3HX3VQ1ewZF9BRrim8Gwhe9J1hLI9EDsJwqFZFpIOfb%2BbfM%2FfDF6g94lmHqtff14C4%2FOcfwkflHpLe0TKozfMbUsZerP2Fd6Bgm6uAhBXWHsc8wtqzfwAY6pgHoIdbzdTwAXWpl0mWKfsz%2FMhhPuHNxQL%2Be5GVdftSUwi1sTW76F4BN7Z69kdKdIKNdWOqXB4Ci5mqeBgzkh%2FdxLpxI3y3m6CirvapEWKwNmqPW61mqM4JSoixfY0aWnQsjBTmUBJE%2BgNKQgEdOZvtIAgdIB37rGWcKAfrerikBy3cgIUT7Sf%2BlrMzNrjagGmNRT5mgSgEW75YXKwk4By9WWd1j4xyq&X-Amz-Signature=766272daa1c3332ac7ceb3d110db51087bd08a0b5f713a57aef292b9f57b52c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
