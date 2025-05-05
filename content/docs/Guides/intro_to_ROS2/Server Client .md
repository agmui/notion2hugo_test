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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FFMDL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9ZlihDI74j9YuN7KKcDls6KdoBs%2FFt0hWDwGdAoTz0AiEAt8hpDAdN1oO6aoJmudwa4x8MYhSUeUF26hBImbepngsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDO4KtOklmb861FeKICrcA35EPAk0ED2wM42%2BzpPNZmr1zpMNG6q9kObE%2BGlTmS6ItAg3hzNh6PR1QtBpfkQyC2i%2Bq1X%2FfaKTVdMsE1V6JgkWds4wQVNclUZAw4bkB0Kez3tp%2BlUWZBL1DCmkmKl2OkbyD%2BFFMFqphvTALkWwrOnVRkqaCD4erMtwxWhId5esdskCOuv4RwjsYxQU4JN7wXY4m5zZClW5%2BK7%2FpFc7h8tNWxk6yDoRQVLRXZjGXOzzd3F2z%2BZH%2FOWfSvKdydw8niQ8GWIGcDyxlc2mjE8A5FZke53mgm%2FFnoUViVaUzmDu0KZvB4c4cv90AaR4ry7gStwZNkvEpiytjLr8Yy%2BV%2FZ2KGmUG%2BZH4LNIEyKwJ%2BWq1qINLWqpyRU0h9TBADCd2nPU7TK%2Fd17OVhDRLiTY%2FlyrlKY%2Bz%2BsRFfvrkXvnY0DxOdxhS7AHaG0FnSLPcCLccfGkZ1vgNqjuTxmTDUi3zaXPTiT83cuS5SdPAN%2BvhLjrtolRZ%2FQJQoDjeQBq%2B3T14uCB3CBfkQfOoOg0I76T2JcICCvbB6C522yLfg0TAQSSzaewRm%2B107ky0ZUr0hozzXW8STjWwtIhJhcLULkxP6jdOz2x%2FA64OsoKtKXvyxn3j9xFS1qE1Ki2j2N5XMLvM5MAGOqUB6TRcBKA%2F38cG%2Fdrrwoca68RRtQp7caXxhITYO7g7kciUsdaOfSW8VGmNg6JG81mV%2B3phUcarArsQmfPMmrHBDocUNll9NOnERfHsZQ1Qq2AhONbdxStGt3UgzIPAVj3rYPddmf9Jm4Ionrj5yatMQFZoTY2NU3YpMtQdxPVj79qzGR3gYsKdvFX%2BTKt5sl24e6JCeyRA%2FR4Wq6ELeQ4EghwOF8ij&X-Amz-Signature=fbb080a79546b87d57173f22366cabfd0107d4f551141d4c2bd312163731652d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FFMDL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9ZlihDI74j9YuN7KKcDls6KdoBs%2FFt0hWDwGdAoTz0AiEAt8hpDAdN1oO6aoJmudwa4x8MYhSUeUF26hBImbepngsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDO4KtOklmb861FeKICrcA35EPAk0ED2wM42%2BzpPNZmr1zpMNG6q9kObE%2BGlTmS6ItAg3hzNh6PR1QtBpfkQyC2i%2Bq1X%2FfaKTVdMsE1V6JgkWds4wQVNclUZAw4bkB0Kez3tp%2BlUWZBL1DCmkmKl2OkbyD%2BFFMFqphvTALkWwrOnVRkqaCD4erMtwxWhId5esdskCOuv4RwjsYxQU4JN7wXY4m5zZClW5%2BK7%2FpFc7h8tNWxk6yDoRQVLRXZjGXOzzd3F2z%2BZH%2FOWfSvKdydw8niQ8GWIGcDyxlc2mjE8A5FZke53mgm%2FFnoUViVaUzmDu0KZvB4c4cv90AaR4ry7gStwZNkvEpiytjLr8Yy%2BV%2FZ2KGmUG%2BZH4LNIEyKwJ%2BWq1qINLWqpyRU0h9TBADCd2nPU7TK%2Fd17OVhDRLiTY%2FlyrlKY%2Bz%2BsRFfvrkXvnY0DxOdxhS7AHaG0FnSLPcCLccfGkZ1vgNqjuTxmTDUi3zaXPTiT83cuS5SdPAN%2BvhLjrtolRZ%2FQJQoDjeQBq%2B3T14uCB3CBfkQfOoOg0I76T2JcICCvbB6C522yLfg0TAQSSzaewRm%2B107ky0ZUr0hozzXW8STjWwtIhJhcLULkxP6jdOz2x%2FA64OsoKtKXvyxn3j9xFS1qE1Ki2j2N5XMLvM5MAGOqUB6TRcBKA%2F38cG%2Fdrrwoca68RRtQp7caXxhITYO7g7kciUsdaOfSW8VGmNg6JG81mV%2B3phUcarArsQmfPMmrHBDocUNll9NOnERfHsZQ1Qq2AhONbdxStGt3UgzIPAVj3rYPddmf9Jm4Ionrj5yatMQFZoTY2NU3YpMtQdxPVj79qzGR3gYsKdvFX%2BTKt5sl24e6JCeyRA%2FR4Wq6ELeQ4EghwOF8ij&X-Amz-Signature=e226e9721ba4115228833de94a37dba1cb132f0b3928a447f1917224ca0773ae&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FFMDL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9ZlihDI74j9YuN7KKcDls6KdoBs%2FFt0hWDwGdAoTz0AiEAt8hpDAdN1oO6aoJmudwa4x8MYhSUeUF26hBImbepngsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDO4KtOklmb861FeKICrcA35EPAk0ED2wM42%2BzpPNZmr1zpMNG6q9kObE%2BGlTmS6ItAg3hzNh6PR1QtBpfkQyC2i%2Bq1X%2FfaKTVdMsE1V6JgkWds4wQVNclUZAw4bkB0Kez3tp%2BlUWZBL1DCmkmKl2OkbyD%2BFFMFqphvTALkWwrOnVRkqaCD4erMtwxWhId5esdskCOuv4RwjsYxQU4JN7wXY4m5zZClW5%2BK7%2FpFc7h8tNWxk6yDoRQVLRXZjGXOzzd3F2z%2BZH%2FOWfSvKdydw8niQ8GWIGcDyxlc2mjE8A5FZke53mgm%2FFnoUViVaUzmDu0KZvB4c4cv90AaR4ry7gStwZNkvEpiytjLr8Yy%2BV%2FZ2KGmUG%2BZH4LNIEyKwJ%2BWq1qINLWqpyRU0h9TBADCd2nPU7TK%2Fd17OVhDRLiTY%2FlyrlKY%2Bz%2BsRFfvrkXvnY0DxOdxhS7AHaG0FnSLPcCLccfGkZ1vgNqjuTxmTDUi3zaXPTiT83cuS5SdPAN%2BvhLjrtolRZ%2FQJQoDjeQBq%2B3T14uCB3CBfkQfOoOg0I76T2JcICCvbB6C522yLfg0TAQSSzaewRm%2B107ky0ZUr0hozzXW8STjWwtIhJhcLULkxP6jdOz2x%2FA64OsoKtKXvyxn3j9xFS1qE1Ki2j2N5XMLvM5MAGOqUB6TRcBKA%2F38cG%2Fdrrwoca68RRtQp7caXxhITYO7g7kciUsdaOfSW8VGmNg6JG81mV%2B3phUcarArsQmfPMmrHBDocUNll9NOnERfHsZQ1Qq2AhONbdxStGt3UgzIPAVj3rYPddmf9Jm4Ionrj5yatMQFZoTY2NU3YpMtQdxPVj79qzGR3gYsKdvFX%2BTKt5sl24e6JCeyRA%2FR4Wq6ELeQ4EghwOF8ij&X-Amz-Signature=7abe75f9189c126cd66d96661eb0bec6b351d2657391f9db116712df8e11d8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FFMDL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9ZlihDI74j9YuN7KKcDls6KdoBs%2FFt0hWDwGdAoTz0AiEAt8hpDAdN1oO6aoJmudwa4x8MYhSUeUF26hBImbepngsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDO4KtOklmb861FeKICrcA35EPAk0ED2wM42%2BzpPNZmr1zpMNG6q9kObE%2BGlTmS6ItAg3hzNh6PR1QtBpfkQyC2i%2Bq1X%2FfaKTVdMsE1V6JgkWds4wQVNclUZAw4bkB0Kez3tp%2BlUWZBL1DCmkmKl2OkbyD%2BFFMFqphvTALkWwrOnVRkqaCD4erMtwxWhId5esdskCOuv4RwjsYxQU4JN7wXY4m5zZClW5%2BK7%2FpFc7h8tNWxk6yDoRQVLRXZjGXOzzd3F2z%2BZH%2FOWfSvKdydw8niQ8GWIGcDyxlc2mjE8A5FZke53mgm%2FFnoUViVaUzmDu0KZvB4c4cv90AaR4ry7gStwZNkvEpiytjLr8Yy%2BV%2FZ2KGmUG%2BZH4LNIEyKwJ%2BWq1qINLWqpyRU0h9TBADCd2nPU7TK%2Fd17OVhDRLiTY%2FlyrlKY%2Bz%2BsRFfvrkXvnY0DxOdxhS7AHaG0FnSLPcCLccfGkZ1vgNqjuTxmTDUi3zaXPTiT83cuS5SdPAN%2BvhLjrtolRZ%2FQJQoDjeQBq%2B3T14uCB3CBfkQfOoOg0I76T2JcICCvbB6C522yLfg0TAQSSzaewRm%2B107ky0ZUr0hozzXW8STjWwtIhJhcLULkxP6jdOz2x%2FA64OsoKtKXvyxn3j9xFS1qE1Ki2j2N5XMLvM5MAGOqUB6TRcBKA%2F38cG%2Fdrrwoca68RRtQp7caXxhITYO7g7kciUsdaOfSW8VGmNg6JG81mV%2B3phUcarArsQmfPMmrHBDocUNll9NOnERfHsZQ1Qq2AhONbdxStGt3UgzIPAVj3rYPddmf9Jm4Ionrj5yatMQFZoTY2NU3YpMtQdxPVj79qzGR3gYsKdvFX%2BTKt5sl24e6JCeyRA%2FR4Wq6ELeQ4EghwOF8ij&X-Amz-Signature=b8ce665b96c5a70725a7b009bbd0a0bbce635d28a0ff6da93fbd18ae8c669f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FFMDL2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9ZlihDI74j9YuN7KKcDls6KdoBs%2FFt0hWDwGdAoTz0AiEAt8hpDAdN1oO6aoJmudwa4x8MYhSUeUF26hBImbepngsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDO4KtOklmb861FeKICrcA35EPAk0ED2wM42%2BzpPNZmr1zpMNG6q9kObE%2BGlTmS6ItAg3hzNh6PR1QtBpfkQyC2i%2Bq1X%2FfaKTVdMsE1V6JgkWds4wQVNclUZAw4bkB0Kez3tp%2BlUWZBL1DCmkmKl2OkbyD%2BFFMFqphvTALkWwrOnVRkqaCD4erMtwxWhId5esdskCOuv4RwjsYxQU4JN7wXY4m5zZClW5%2BK7%2FpFc7h8tNWxk6yDoRQVLRXZjGXOzzd3F2z%2BZH%2FOWfSvKdydw8niQ8GWIGcDyxlc2mjE8A5FZke53mgm%2FFnoUViVaUzmDu0KZvB4c4cv90AaR4ry7gStwZNkvEpiytjLr8Yy%2BV%2FZ2KGmUG%2BZH4LNIEyKwJ%2BWq1qINLWqpyRU0h9TBADCd2nPU7TK%2Fd17OVhDRLiTY%2FlyrlKY%2Bz%2BsRFfvrkXvnY0DxOdxhS7AHaG0FnSLPcCLccfGkZ1vgNqjuTxmTDUi3zaXPTiT83cuS5SdPAN%2BvhLjrtolRZ%2FQJQoDjeQBq%2B3T14uCB3CBfkQfOoOg0I76T2JcICCvbB6C522yLfg0TAQSSzaewRm%2B107ky0ZUr0hozzXW8STjWwtIhJhcLULkxP6jdOz2x%2FA64OsoKtKXvyxn3j9xFS1qE1Ki2j2N5XMLvM5MAGOqUB6TRcBKA%2F38cG%2Fdrrwoca68RRtQp7caXxhITYO7g7kciUsdaOfSW8VGmNg6JG81mV%2B3phUcarArsQmfPMmrHBDocUNll9NOnERfHsZQ1Qq2AhONbdxStGt3UgzIPAVj3rYPddmf9Jm4Ionrj5yatMQFZoTY2NU3YpMtQdxPVj79qzGR3gYsKdvFX%2BTKt5sl24e6JCeyRA%2FR4Wq6ELeQ4EghwOF8ij&X-Amz-Signature=b050a41e68fbcb8bbcedec1bec42c38f71183179f7d78d5b6fc6753177c0d451&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
