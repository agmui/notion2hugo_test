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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGAANF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCNfDBUDd%2FP7zY7VH66MDoYKXJ8bqDQKzK8pdHBecl4twIhAI6PLUj6tmtCGhMCkRUx2ypFa8R3OYpfFw5%2FlRwTNvO5Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz3sBkeVwYdfZUUoPoq3ANQ4Pbuj0riaMnQ9B4qTNsYq%2BGbTIAVv%2BZ5wKFNxm2nq3i53tTXSpYO4opcYHAVZwKx8n50pIlXPd8Rq6LzebviK2sGQGUgpkeVZxYbJsHmDRzA06d%2B2OvTGkHDXNk44jwkc6g%2Bk1NcxZ5OkzNnOQQMlUD2IbhB7VUvL3aQo4mnKc3DNDHCT82xwzTLuTVWjYqd%2FjkO1h9EUZsJnQHFRGcHUK0%2FGyoq2iQunpbyLvC7MLB1B0RPaQVvBYWHSjsrw8pdomPK4qVNo5d72IdGsLnACLUel45a2ppTfqsHaLPYSucQkvJ8AuIbpPSmJ6dJllQ%2FMci7aTHPPgcmIoVzJdh60qhSQipvzmfOzKhhQykz0qNuuyb0L5KC4YemRHmAW5ot6rzZZy5%2FhDZf6TEBR8hXaxMSFG%2BvIk7GFV04T6Dr9NJUEMLLK9oqhhQaW7rc83%2FOlGabDiDehE8qHTURj4CvlfqGH0eopupgb%2FU3U%2BdtDeD49CRCvxY%2BpwXottspHM4998d6ImDt90ClobkBe3yrq4fcoMzszgD%2F44lqirFuxDEZHWvj1fymrLKkjI6wGwCaCqYZrGunwiYY3Y1hbCaMGAq%2Bkw43evNIIA93wo%2FGpmC9JZEiAZ2AibdWCjCCiPy9BjqkAQQnbAdu8yY%2FHFhvWfJTys%2FOdpnhrR5uSH5cWCwjqwlic1V8Y9NcvhBh8xAYyXEenVl7Htm%2Fj3uZv55TLSUjrBiEe8RZtJLweNPnEHWplA4I5flp8yAo2GvrAw1mMOW%2F1qd7zoBabDCtowfoZyb4NIJ7ZwduL%2FF0otyECa2lHGPgpbwHm60rsn%2BtWW1NG85xGkicI79aNgMEujex9rGArMMerIZ5&X-Amz-Signature=6e1c6a9ead76a6e816b290c5b5df478faa769d103d4cd1f226a4ea4162f8868d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGAANF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCNfDBUDd%2FP7zY7VH66MDoYKXJ8bqDQKzK8pdHBecl4twIhAI6PLUj6tmtCGhMCkRUx2ypFa8R3OYpfFw5%2FlRwTNvO5Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz3sBkeVwYdfZUUoPoq3ANQ4Pbuj0riaMnQ9B4qTNsYq%2BGbTIAVv%2BZ5wKFNxm2nq3i53tTXSpYO4opcYHAVZwKx8n50pIlXPd8Rq6LzebviK2sGQGUgpkeVZxYbJsHmDRzA06d%2B2OvTGkHDXNk44jwkc6g%2Bk1NcxZ5OkzNnOQQMlUD2IbhB7VUvL3aQo4mnKc3DNDHCT82xwzTLuTVWjYqd%2FjkO1h9EUZsJnQHFRGcHUK0%2FGyoq2iQunpbyLvC7MLB1B0RPaQVvBYWHSjsrw8pdomPK4qVNo5d72IdGsLnACLUel45a2ppTfqsHaLPYSucQkvJ8AuIbpPSmJ6dJllQ%2FMci7aTHPPgcmIoVzJdh60qhSQipvzmfOzKhhQykz0qNuuyb0L5KC4YemRHmAW5ot6rzZZy5%2FhDZf6TEBR8hXaxMSFG%2BvIk7GFV04T6Dr9NJUEMLLK9oqhhQaW7rc83%2FOlGabDiDehE8qHTURj4CvlfqGH0eopupgb%2FU3U%2BdtDeD49CRCvxY%2BpwXottspHM4998d6ImDt90ClobkBe3yrq4fcoMzszgD%2F44lqirFuxDEZHWvj1fymrLKkjI6wGwCaCqYZrGunwiYY3Y1hbCaMGAq%2Bkw43evNIIA93wo%2FGpmC9JZEiAZ2AibdWCjCCiPy9BjqkAQQnbAdu8yY%2FHFhvWfJTys%2FOdpnhrR5uSH5cWCwjqwlic1V8Y9NcvhBh8xAYyXEenVl7Htm%2Fj3uZv55TLSUjrBiEe8RZtJLweNPnEHWplA4I5flp8yAo2GvrAw1mMOW%2F1qd7zoBabDCtowfoZyb4NIJ7ZwduL%2FF0otyECa2lHGPgpbwHm60rsn%2BtWW1NG85xGkicI79aNgMEujex9rGArMMerIZ5&X-Amz-Signature=48678e2ce30b6d9531ede2b536e61877231c4ed5c3f65fec87c23a65af3b816a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGAANF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCNfDBUDd%2FP7zY7VH66MDoYKXJ8bqDQKzK8pdHBecl4twIhAI6PLUj6tmtCGhMCkRUx2ypFa8R3OYpfFw5%2FlRwTNvO5Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz3sBkeVwYdfZUUoPoq3ANQ4Pbuj0riaMnQ9B4qTNsYq%2BGbTIAVv%2BZ5wKFNxm2nq3i53tTXSpYO4opcYHAVZwKx8n50pIlXPd8Rq6LzebviK2sGQGUgpkeVZxYbJsHmDRzA06d%2B2OvTGkHDXNk44jwkc6g%2Bk1NcxZ5OkzNnOQQMlUD2IbhB7VUvL3aQo4mnKc3DNDHCT82xwzTLuTVWjYqd%2FjkO1h9EUZsJnQHFRGcHUK0%2FGyoq2iQunpbyLvC7MLB1B0RPaQVvBYWHSjsrw8pdomPK4qVNo5d72IdGsLnACLUel45a2ppTfqsHaLPYSucQkvJ8AuIbpPSmJ6dJllQ%2FMci7aTHPPgcmIoVzJdh60qhSQipvzmfOzKhhQykz0qNuuyb0L5KC4YemRHmAW5ot6rzZZy5%2FhDZf6TEBR8hXaxMSFG%2BvIk7GFV04T6Dr9NJUEMLLK9oqhhQaW7rc83%2FOlGabDiDehE8qHTURj4CvlfqGH0eopupgb%2FU3U%2BdtDeD49CRCvxY%2BpwXottspHM4998d6ImDt90ClobkBe3yrq4fcoMzszgD%2F44lqirFuxDEZHWvj1fymrLKkjI6wGwCaCqYZrGunwiYY3Y1hbCaMGAq%2Bkw43evNIIA93wo%2FGpmC9JZEiAZ2AibdWCjCCiPy9BjqkAQQnbAdu8yY%2FHFhvWfJTys%2FOdpnhrR5uSH5cWCwjqwlic1V8Y9NcvhBh8xAYyXEenVl7Htm%2Fj3uZv55TLSUjrBiEe8RZtJLweNPnEHWplA4I5flp8yAo2GvrAw1mMOW%2F1qd7zoBabDCtowfoZyb4NIJ7ZwduL%2FF0otyECa2lHGPgpbwHm60rsn%2BtWW1NG85xGkicI79aNgMEujex9rGArMMerIZ5&X-Amz-Signature=158186ce5a20e9cfbd613b44c34c427ab8b1728ca7e2f4a1b5c81c31b05204b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGAANF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCNfDBUDd%2FP7zY7VH66MDoYKXJ8bqDQKzK8pdHBecl4twIhAI6PLUj6tmtCGhMCkRUx2ypFa8R3OYpfFw5%2FlRwTNvO5Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz3sBkeVwYdfZUUoPoq3ANQ4Pbuj0riaMnQ9B4qTNsYq%2BGbTIAVv%2BZ5wKFNxm2nq3i53tTXSpYO4opcYHAVZwKx8n50pIlXPd8Rq6LzebviK2sGQGUgpkeVZxYbJsHmDRzA06d%2B2OvTGkHDXNk44jwkc6g%2Bk1NcxZ5OkzNnOQQMlUD2IbhB7VUvL3aQo4mnKc3DNDHCT82xwzTLuTVWjYqd%2FjkO1h9EUZsJnQHFRGcHUK0%2FGyoq2iQunpbyLvC7MLB1B0RPaQVvBYWHSjsrw8pdomPK4qVNo5d72IdGsLnACLUel45a2ppTfqsHaLPYSucQkvJ8AuIbpPSmJ6dJllQ%2FMci7aTHPPgcmIoVzJdh60qhSQipvzmfOzKhhQykz0qNuuyb0L5KC4YemRHmAW5ot6rzZZy5%2FhDZf6TEBR8hXaxMSFG%2BvIk7GFV04T6Dr9NJUEMLLK9oqhhQaW7rc83%2FOlGabDiDehE8qHTURj4CvlfqGH0eopupgb%2FU3U%2BdtDeD49CRCvxY%2BpwXottspHM4998d6ImDt90ClobkBe3yrq4fcoMzszgD%2F44lqirFuxDEZHWvj1fymrLKkjI6wGwCaCqYZrGunwiYY3Y1hbCaMGAq%2Bkw43evNIIA93wo%2FGpmC9JZEiAZ2AibdWCjCCiPy9BjqkAQQnbAdu8yY%2FHFhvWfJTys%2FOdpnhrR5uSH5cWCwjqwlic1V8Y9NcvhBh8xAYyXEenVl7Htm%2Fj3uZv55TLSUjrBiEe8RZtJLweNPnEHWplA4I5flp8yAo2GvrAw1mMOW%2F1qd7zoBabDCtowfoZyb4NIJ7ZwduL%2FF0otyECa2lHGPgpbwHm60rsn%2BtWW1NG85xGkicI79aNgMEujex9rGArMMerIZ5&X-Amz-Signature=c6283d7ce2a447dde7efd84e1c57514f74431153e74b39a2a9c7490986db2f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGAANF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCNfDBUDd%2FP7zY7VH66MDoYKXJ8bqDQKzK8pdHBecl4twIhAI6PLUj6tmtCGhMCkRUx2ypFa8R3OYpfFw5%2FlRwTNvO5Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz3sBkeVwYdfZUUoPoq3ANQ4Pbuj0riaMnQ9B4qTNsYq%2BGbTIAVv%2BZ5wKFNxm2nq3i53tTXSpYO4opcYHAVZwKx8n50pIlXPd8Rq6LzebviK2sGQGUgpkeVZxYbJsHmDRzA06d%2B2OvTGkHDXNk44jwkc6g%2Bk1NcxZ5OkzNnOQQMlUD2IbhB7VUvL3aQo4mnKc3DNDHCT82xwzTLuTVWjYqd%2FjkO1h9EUZsJnQHFRGcHUK0%2FGyoq2iQunpbyLvC7MLB1B0RPaQVvBYWHSjsrw8pdomPK4qVNo5d72IdGsLnACLUel45a2ppTfqsHaLPYSucQkvJ8AuIbpPSmJ6dJllQ%2FMci7aTHPPgcmIoVzJdh60qhSQipvzmfOzKhhQykz0qNuuyb0L5KC4YemRHmAW5ot6rzZZy5%2FhDZf6TEBR8hXaxMSFG%2BvIk7GFV04T6Dr9NJUEMLLK9oqhhQaW7rc83%2FOlGabDiDehE8qHTURj4CvlfqGH0eopupgb%2FU3U%2BdtDeD49CRCvxY%2BpwXottspHM4998d6ImDt90ClobkBe3yrq4fcoMzszgD%2F44lqirFuxDEZHWvj1fymrLKkjI6wGwCaCqYZrGunwiYY3Y1hbCaMGAq%2Bkw43evNIIA93wo%2FGpmC9JZEiAZ2AibdWCjCCiPy9BjqkAQQnbAdu8yY%2FHFhvWfJTys%2FOdpnhrR5uSH5cWCwjqwlic1V8Y9NcvhBh8xAYyXEenVl7Htm%2Fj3uZv55TLSUjrBiEe8RZtJLweNPnEHWplA4I5flp8yAo2GvrAw1mMOW%2F1qd7zoBabDCtowfoZyb4NIJ7ZwduL%2FF0otyECa2lHGPgpbwHm60rsn%2BtWW1NG85xGkicI79aNgMEujex9rGArMMerIZ5&X-Amz-Signature=3e12b42633f37463831ab45c6c77a80a385c0a7db15dd2fc1599a39cc5595e47&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
