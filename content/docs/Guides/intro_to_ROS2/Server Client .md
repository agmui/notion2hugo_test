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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNNZLD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0S8o5iK10%2Ff6tg3tLPcv7ILzQmpayA2jqTdSg3FY%2FgAiAj%2BV2jxFqd6byImaKAROU%2FX9XAZTiExSyjbphOTNcVcSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyi569rocMjJ%2FUU2GKtwDe%2FQ9oN%2F83R3HH%2BAw%2BpvRsbJc0NESiursi%2B0Q6XSvA61Jn58D7l%2FZRpoWCQ%2FLPr8UZt244hlZIN60JOHFmFkXXmhuWzN1gQCjiguBXWBmLuKvlcOiIZ%2BMQzQ6VVwhHkzLU8fQY0Eqoc6iSKVycJpa%2Fb0FYAseYuOJkUVmrmXcIkZGgsQc7CJ9gfJT4kGYn0RAPeIPBsCmm09UFSBfO83zZIYyM3nZSYOdE5%2FXbsjgx86wlTXVcdFOsDn6k4gOhDv%2Fvo5q9F%2BQb4WRnMInRO%2Fhtv%2BJGJyTRTJB1a7xbYX4GHSq5BUN2SjZt58%2FHw%2Bkcnc5E%2Bu6IfeGGp23PVn75zHNXZRAxrb3dlt04f%2BxuZvE5dB397ZN%2FX1UAxU1RFtwAQarr22zqsqYcdSZeK4KO1RdzRXXki04puy5mgeNTTSLKVPgTDKHodW8HIO%2Bn%2BuAkhj1D5H6YfTp75%2Bpo0B0f0aHjIH%2F5KA4upi%2Fs%2BcJfFpbnCHeECtRt76QbVBlkDKH0BFigwIDAJJ4MOk0eDwEdQsDdxwLTsJOvtfcZZBVCRrpjGd%2FA916LI5xKX06auKCePPAZX1q9wAromC47fQgj0ZCXPfkHQ%2Bv2n1114j2oXvFJ3r%2Fn5evkXktBb%2FG%2FREwwNm%2BxAY6pgHgATbq61UucV3SRKVmrEOhKUy74F2Q5AwRzYVzkugFQLr%2BMk1lCVTuZH4dYFyCgYo%2FqNjr05QMzFHnZ%2F%2FGkr2jk5%2BPtbolSro%2Bf0vm7ATbv3fVBlLUKkR1H15mGzzkTBBxPcd1zrpjg7YVxtygg0mhCp33E7h9I4U%2BruMWsqK8Cm5md7AlfPpN1cDVWUZXOhyd4dPJyfceKxvlSh6%2BgFHJB3RwRw2i&X-Amz-Signature=979aa8b926cdc421729a84589472d70bed126668a0fb5b4e17bd65460abc19db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNNZLD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0S8o5iK10%2Ff6tg3tLPcv7ILzQmpayA2jqTdSg3FY%2FgAiAj%2BV2jxFqd6byImaKAROU%2FX9XAZTiExSyjbphOTNcVcSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyi569rocMjJ%2FUU2GKtwDe%2FQ9oN%2F83R3HH%2BAw%2BpvRsbJc0NESiursi%2B0Q6XSvA61Jn58D7l%2FZRpoWCQ%2FLPr8UZt244hlZIN60JOHFmFkXXmhuWzN1gQCjiguBXWBmLuKvlcOiIZ%2BMQzQ6VVwhHkzLU8fQY0Eqoc6iSKVycJpa%2Fb0FYAseYuOJkUVmrmXcIkZGgsQc7CJ9gfJT4kGYn0RAPeIPBsCmm09UFSBfO83zZIYyM3nZSYOdE5%2FXbsjgx86wlTXVcdFOsDn6k4gOhDv%2Fvo5q9F%2BQb4WRnMInRO%2Fhtv%2BJGJyTRTJB1a7xbYX4GHSq5BUN2SjZt58%2FHw%2Bkcnc5E%2Bu6IfeGGp23PVn75zHNXZRAxrb3dlt04f%2BxuZvE5dB397ZN%2FX1UAxU1RFtwAQarr22zqsqYcdSZeK4KO1RdzRXXki04puy5mgeNTTSLKVPgTDKHodW8HIO%2Bn%2BuAkhj1D5H6YfTp75%2Bpo0B0f0aHjIH%2F5KA4upi%2Fs%2BcJfFpbnCHeECtRt76QbVBlkDKH0BFigwIDAJJ4MOk0eDwEdQsDdxwLTsJOvtfcZZBVCRrpjGd%2FA916LI5xKX06auKCePPAZX1q9wAromC47fQgj0ZCXPfkHQ%2Bv2n1114j2oXvFJ3r%2Fn5evkXktBb%2FG%2FREwwNm%2BxAY6pgHgATbq61UucV3SRKVmrEOhKUy74F2Q5AwRzYVzkugFQLr%2BMk1lCVTuZH4dYFyCgYo%2FqNjr05QMzFHnZ%2F%2FGkr2jk5%2BPtbolSro%2Bf0vm7ATbv3fVBlLUKkR1H15mGzzkTBBxPcd1zrpjg7YVxtygg0mhCp33E7h9I4U%2BruMWsqK8Cm5md7AlfPpN1cDVWUZXOhyd4dPJyfceKxvlSh6%2BgFHJB3RwRw2i&X-Amz-Signature=4ab02d0369b4e99bb00f8789e6b331a4a3a1bb89aceeb12e10ba5392cafbe53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNNZLD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0S8o5iK10%2Ff6tg3tLPcv7ILzQmpayA2jqTdSg3FY%2FgAiAj%2BV2jxFqd6byImaKAROU%2FX9XAZTiExSyjbphOTNcVcSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyi569rocMjJ%2FUU2GKtwDe%2FQ9oN%2F83R3HH%2BAw%2BpvRsbJc0NESiursi%2B0Q6XSvA61Jn58D7l%2FZRpoWCQ%2FLPr8UZt244hlZIN60JOHFmFkXXmhuWzN1gQCjiguBXWBmLuKvlcOiIZ%2BMQzQ6VVwhHkzLU8fQY0Eqoc6iSKVycJpa%2Fb0FYAseYuOJkUVmrmXcIkZGgsQc7CJ9gfJT4kGYn0RAPeIPBsCmm09UFSBfO83zZIYyM3nZSYOdE5%2FXbsjgx86wlTXVcdFOsDn6k4gOhDv%2Fvo5q9F%2BQb4WRnMInRO%2Fhtv%2BJGJyTRTJB1a7xbYX4GHSq5BUN2SjZt58%2FHw%2Bkcnc5E%2Bu6IfeGGp23PVn75zHNXZRAxrb3dlt04f%2BxuZvE5dB397ZN%2FX1UAxU1RFtwAQarr22zqsqYcdSZeK4KO1RdzRXXki04puy5mgeNTTSLKVPgTDKHodW8HIO%2Bn%2BuAkhj1D5H6YfTp75%2Bpo0B0f0aHjIH%2F5KA4upi%2Fs%2BcJfFpbnCHeECtRt76QbVBlkDKH0BFigwIDAJJ4MOk0eDwEdQsDdxwLTsJOvtfcZZBVCRrpjGd%2FA916LI5xKX06auKCePPAZX1q9wAromC47fQgj0ZCXPfkHQ%2Bv2n1114j2oXvFJ3r%2Fn5evkXktBb%2FG%2FREwwNm%2BxAY6pgHgATbq61UucV3SRKVmrEOhKUy74F2Q5AwRzYVzkugFQLr%2BMk1lCVTuZH4dYFyCgYo%2FqNjr05QMzFHnZ%2F%2FGkr2jk5%2BPtbolSro%2Bf0vm7ATbv3fVBlLUKkR1H15mGzzkTBBxPcd1zrpjg7YVxtygg0mhCp33E7h9I4U%2BruMWsqK8Cm5md7AlfPpN1cDVWUZXOhyd4dPJyfceKxvlSh6%2BgFHJB3RwRw2i&X-Amz-Signature=101a54e2732bc80c704569c1b432ce708c1d80f9392d71285b8128e5d6e7cff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNNZLD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0S8o5iK10%2Ff6tg3tLPcv7ILzQmpayA2jqTdSg3FY%2FgAiAj%2BV2jxFqd6byImaKAROU%2FX9XAZTiExSyjbphOTNcVcSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyi569rocMjJ%2FUU2GKtwDe%2FQ9oN%2F83R3HH%2BAw%2BpvRsbJc0NESiursi%2B0Q6XSvA61Jn58D7l%2FZRpoWCQ%2FLPr8UZt244hlZIN60JOHFmFkXXmhuWzN1gQCjiguBXWBmLuKvlcOiIZ%2BMQzQ6VVwhHkzLU8fQY0Eqoc6iSKVycJpa%2Fb0FYAseYuOJkUVmrmXcIkZGgsQc7CJ9gfJT4kGYn0RAPeIPBsCmm09UFSBfO83zZIYyM3nZSYOdE5%2FXbsjgx86wlTXVcdFOsDn6k4gOhDv%2Fvo5q9F%2BQb4WRnMInRO%2Fhtv%2BJGJyTRTJB1a7xbYX4GHSq5BUN2SjZt58%2FHw%2Bkcnc5E%2Bu6IfeGGp23PVn75zHNXZRAxrb3dlt04f%2BxuZvE5dB397ZN%2FX1UAxU1RFtwAQarr22zqsqYcdSZeK4KO1RdzRXXki04puy5mgeNTTSLKVPgTDKHodW8HIO%2Bn%2BuAkhj1D5H6YfTp75%2Bpo0B0f0aHjIH%2F5KA4upi%2Fs%2BcJfFpbnCHeECtRt76QbVBlkDKH0BFigwIDAJJ4MOk0eDwEdQsDdxwLTsJOvtfcZZBVCRrpjGd%2FA916LI5xKX06auKCePPAZX1q9wAromC47fQgj0ZCXPfkHQ%2Bv2n1114j2oXvFJ3r%2Fn5evkXktBb%2FG%2FREwwNm%2BxAY6pgHgATbq61UucV3SRKVmrEOhKUy74F2Q5AwRzYVzkugFQLr%2BMk1lCVTuZH4dYFyCgYo%2FqNjr05QMzFHnZ%2F%2FGkr2jk5%2BPtbolSro%2Bf0vm7ATbv3fVBlLUKkR1H15mGzzkTBBxPcd1zrpjg7YVxtygg0mhCp33E7h9I4U%2BruMWsqK8Cm5md7AlfPpN1cDVWUZXOhyd4dPJyfceKxvlSh6%2BgFHJB3RwRw2i&X-Amz-Signature=2b803c3dc3d91123f33e6f73c36391c4d7b0a56857b3dbb694d3ba0297573af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNNZLD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0S8o5iK10%2Ff6tg3tLPcv7ILzQmpayA2jqTdSg3FY%2FgAiAj%2BV2jxFqd6byImaKAROU%2FX9XAZTiExSyjbphOTNcVcSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyi569rocMjJ%2FUU2GKtwDe%2FQ9oN%2F83R3HH%2BAw%2BpvRsbJc0NESiursi%2B0Q6XSvA61Jn58D7l%2FZRpoWCQ%2FLPr8UZt244hlZIN60JOHFmFkXXmhuWzN1gQCjiguBXWBmLuKvlcOiIZ%2BMQzQ6VVwhHkzLU8fQY0Eqoc6iSKVycJpa%2Fb0FYAseYuOJkUVmrmXcIkZGgsQc7CJ9gfJT4kGYn0RAPeIPBsCmm09UFSBfO83zZIYyM3nZSYOdE5%2FXbsjgx86wlTXVcdFOsDn6k4gOhDv%2Fvo5q9F%2BQb4WRnMInRO%2Fhtv%2BJGJyTRTJB1a7xbYX4GHSq5BUN2SjZt58%2FHw%2Bkcnc5E%2Bu6IfeGGp23PVn75zHNXZRAxrb3dlt04f%2BxuZvE5dB397ZN%2FX1UAxU1RFtwAQarr22zqsqYcdSZeK4KO1RdzRXXki04puy5mgeNTTSLKVPgTDKHodW8HIO%2Bn%2BuAkhj1D5H6YfTp75%2Bpo0B0f0aHjIH%2F5KA4upi%2Fs%2BcJfFpbnCHeECtRt76QbVBlkDKH0BFigwIDAJJ4MOk0eDwEdQsDdxwLTsJOvtfcZZBVCRrpjGd%2FA916LI5xKX06auKCePPAZX1q9wAromC47fQgj0ZCXPfkHQ%2Bv2n1114j2oXvFJ3r%2Fn5evkXktBb%2FG%2FREwwNm%2BxAY6pgHgATbq61UucV3SRKVmrEOhKUy74F2Q5AwRzYVzkugFQLr%2BMk1lCVTuZH4dYFyCgYo%2FqNjr05QMzFHnZ%2F%2FGkr2jk5%2BPtbolSro%2Bf0vm7ATbv3fVBlLUKkR1H15mGzzkTBBxPcd1zrpjg7YVxtygg0mhCp33E7h9I4U%2BruMWsqK8Cm5md7AlfPpN1cDVWUZXOhyd4dPJyfceKxvlSh6%2BgFHJB3RwRw2i&X-Amz-Signature=f568544a7607381489f9014686d4f405d80ed8801929ff0ef73c924ae0f0ed58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
