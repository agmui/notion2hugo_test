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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EOY3JT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu9bapGMLls09xFr43odnigRp4VajNjwFw5TteBeUiEAiAhMTHXx4UkZZaeYZt9QIljFKlO2dNG1GNFM%2BkRi4Z0CCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMJfgcY%2BeCwPs5qrIwKtwDztBxOwcXcmRBw%2B53p8NVjaovBnu22WD%2F3zfvpUv%2BbnKskx3cxS%2FFtKV7cRfWZaW9UbM2eBZYPycnNH5VAmXxg%2Fa5PBm6%2F9KlgyARidhO44ZWwCemoTX1OreBRD8dch1QPWvHe%2FPilkw%2Fd1uU%2F%2BYSlqvwvn%2FcvRU54sYpYmnrKaTIkln0%2BIpylXzHiFWVClJoOCMbrlIAp4mipTOp8bH0z51oAxBWyfVmRpio5iqbKlaHkhMePjeqNMO4I90nMvrbGsndJ3Etm9muDJ88aglQv0xPcBU1FrkHnSP3atj05Zke0x%2Bz4mdPEWS63qrZvLk%2BBZLLmKG2eTYvFt7RfTe2c85wkoFRFu0t4T4J7paxM%2BWbvqhtCr9zFTLzyMAyKGUd%2BjgUWTKCAc%2Bcrcjn2qdoeaMa%2FyykuRKtHzCtmDP491%2BsaZDQdQcIxnr6cRP4qFKGzjMNTQhtSLW1TVgGUwZm0X0%2Fk275aQswEMA39BYfXXwUr3T5wwnfuLZovvM5eJZgIZjQohwD6l8258hmytqudHS1%2B%2BWvJ4BfG9nxytiuR9tyYkN9rJZ%2F1ekddv7f0k5kvM%2F%2BTuhVIHOPSVoG73qMprPaEb%2Fn2CzHXw4GIXGUYWE%2Favr%2B4MuCoXL6GQwwkaXNwwY6pgH3RZDG%2FFAqbup0kldK7Dp5jy8st3xQaRW7oDeZzr9jK69D09%2FFC%2B110FbHU5q8QmizKt8O%2FFbTZwNkyDyUkpFCiGFbyGDxDz2ReQNqeoLuGlpSHFA24Zq2W4e5j1gHq%2BMGx1FafTRrosU4j2R%2FZytcLzSTLjtMqxTPShdnaNecyed1gvzIX0bN6WWAq7dDuQ2w90SbgHqAcftbriltV3D219dyRm1g&X-Amz-Signature=ce9356707885449a125976f8789e3df7e21694ca384795d8dcaaf742070547ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EOY3JT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu9bapGMLls09xFr43odnigRp4VajNjwFw5TteBeUiEAiAhMTHXx4UkZZaeYZt9QIljFKlO2dNG1GNFM%2BkRi4Z0CCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMJfgcY%2BeCwPs5qrIwKtwDztBxOwcXcmRBw%2B53p8NVjaovBnu22WD%2F3zfvpUv%2BbnKskx3cxS%2FFtKV7cRfWZaW9UbM2eBZYPycnNH5VAmXxg%2Fa5PBm6%2F9KlgyARidhO44ZWwCemoTX1OreBRD8dch1QPWvHe%2FPilkw%2Fd1uU%2F%2BYSlqvwvn%2FcvRU54sYpYmnrKaTIkln0%2BIpylXzHiFWVClJoOCMbrlIAp4mipTOp8bH0z51oAxBWyfVmRpio5iqbKlaHkhMePjeqNMO4I90nMvrbGsndJ3Etm9muDJ88aglQv0xPcBU1FrkHnSP3atj05Zke0x%2Bz4mdPEWS63qrZvLk%2BBZLLmKG2eTYvFt7RfTe2c85wkoFRFu0t4T4J7paxM%2BWbvqhtCr9zFTLzyMAyKGUd%2BjgUWTKCAc%2Bcrcjn2qdoeaMa%2FyykuRKtHzCtmDP491%2BsaZDQdQcIxnr6cRP4qFKGzjMNTQhtSLW1TVgGUwZm0X0%2Fk275aQswEMA39BYfXXwUr3T5wwnfuLZovvM5eJZgIZjQohwD6l8258hmytqudHS1%2B%2BWvJ4BfG9nxytiuR9tyYkN9rJZ%2F1ekddv7f0k5kvM%2F%2BTuhVIHOPSVoG73qMprPaEb%2Fn2CzHXw4GIXGUYWE%2Favr%2B4MuCoXL6GQwwkaXNwwY6pgH3RZDG%2FFAqbup0kldK7Dp5jy8st3xQaRW7oDeZzr9jK69D09%2FFC%2B110FbHU5q8QmizKt8O%2FFbTZwNkyDyUkpFCiGFbyGDxDz2ReQNqeoLuGlpSHFA24Zq2W4e5j1gHq%2BMGx1FafTRrosU4j2R%2FZytcLzSTLjtMqxTPShdnaNecyed1gvzIX0bN6WWAq7dDuQ2w90SbgHqAcftbriltV3D219dyRm1g&X-Amz-Signature=b03f9d2abaa222f4227f7c6a4b1cc43fad38796e7009f80db79a9d5a1aaa8b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EOY3JT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu9bapGMLls09xFr43odnigRp4VajNjwFw5TteBeUiEAiAhMTHXx4UkZZaeYZt9QIljFKlO2dNG1GNFM%2BkRi4Z0CCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMJfgcY%2BeCwPs5qrIwKtwDztBxOwcXcmRBw%2B53p8NVjaovBnu22WD%2F3zfvpUv%2BbnKskx3cxS%2FFtKV7cRfWZaW9UbM2eBZYPycnNH5VAmXxg%2Fa5PBm6%2F9KlgyARidhO44ZWwCemoTX1OreBRD8dch1QPWvHe%2FPilkw%2Fd1uU%2F%2BYSlqvwvn%2FcvRU54sYpYmnrKaTIkln0%2BIpylXzHiFWVClJoOCMbrlIAp4mipTOp8bH0z51oAxBWyfVmRpio5iqbKlaHkhMePjeqNMO4I90nMvrbGsndJ3Etm9muDJ88aglQv0xPcBU1FrkHnSP3atj05Zke0x%2Bz4mdPEWS63qrZvLk%2BBZLLmKG2eTYvFt7RfTe2c85wkoFRFu0t4T4J7paxM%2BWbvqhtCr9zFTLzyMAyKGUd%2BjgUWTKCAc%2Bcrcjn2qdoeaMa%2FyykuRKtHzCtmDP491%2BsaZDQdQcIxnr6cRP4qFKGzjMNTQhtSLW1TVgGUwZm0X0%2Fk275aQswEMA39BYfXXwUr3T5wwnfuLZovvM5eJZgIZjQohwD6l8258hmytqudHS1%2B%2BWvJ4BfG9nxytiuR9tyYkN9rJZ%2F1ekddv7f0k5kvM%2F%2BTuhVIHOPSVoG73qMprPaEb%2Fn2CzHXw4GIXGUYWE%2Favr%2B4MuCoXL6GQwwkaXNwwY6pgH3RZDG%2FFAqbup0kldK7Dp5jy8st3xQaRW7oDeZzr9jK69D09%2FFC%2B110FbHU5q8QmizKt8O%2FFbTZwNkyDyUkpFCiGFbyGDxDz2ReQNqeoLuGlpSHFA24Zq2W4e5j1gHq%2BMGx1FafTRrosU4j2R%2FZytcLzSTLjtMqxTPShdnaNecyed1gvzIX0bN6WWAq7dDuQ2w90SbgHqAcftbriltV3D219dyRm1g&X-Amz-Signature=0b23f4950c2e5199c38f4586c9b1a39724f10fa911e28485ebcf575685a88b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EOY3JT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu9bapGMLls09xFr43odnigRp4VajNjwFw5TteBeUiEAiAhMTHXx4UkZZaeYZt9QIljFKlO2dNG1GNFM%2BkRi4Z0CCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMJfgcY%2BeCwPs5qrIwKtwDztBxOwcXcmRBw%2B53p8NVjaovBnu22WD%2F3zfvpUv%2BbnKskx3cxS%2FFtKV7cRfWZaW9UbM2eBZYPycnNH5VAmXxg%2Fa5PBm6%2F9KlgyARidhO44ZWwCemoTX1OreBRD8dch1QPWvHe%2FPilkw%2Fd1uU%2F%2BYSlqvwvn%2FcvRU54sYpYmnrKaTIkln0%2BIpylXzHiFWVClJoOCMbrlIAp4mipTOp8bH0z51oAxBWyfVmRpio5iqbKlaHkhMePjeqNMO4I90nMvrbGsndJ3Etm9muDJ88aglQv0xPcBU1FrkHnSP3atj05Zke0x%2Bz4mdPEWS63qrZvLk%2BBZLLmKG2eTYvFt7RfTe2c85wkoFRFu0t4T4J7paxM%2BWbvqhtCr9zFTLzyMAyKGUd%2BjgUWTKCAc%2Bcrcjn2qdoeaMa%2FyykuRKtHzCtmDP491%2BsaZDQdQcIxnr6cRP4qFKGzjMNTQhtSLW1TVgGUwZm0X0%2Fk275aQswEMA39BYfXXwUr3T5wwnfuLZovvM5eJZgIZjQohwD6l8258hmytqudHS1%2B%2BWvJ4BfG9nxytiuR9tyYkN9rJZ%2F1ekddv7f0k5kvM%2F%2BTuhVIHOPSVoG73qMprPaEb%2Fn2CzHXw4GIXGUYWE%2Favr%2B4MuCoXL6GQwwkaXNwwY6pgH3RZDG%2FFAqbup0kldK7Dp5jy8st3xQaRW7oDeZzr9jK69D09%2FFC%2B110FbHU5q8QmizKt8O%2FFbTZwNkyDyUkpFCiGFbyGDxDz2ReQNqeoLuGlpSHFA24Zq2W4e5j1gHq%2BMGx1FafTRrosU4j2R%2FZytcLzSTLjtMqxTPShdnaNecyed1gvzIX0bN6WWAq7dDuQ2w90SbgHqAcftbriltV3D219dyRm1g&X-Amz-Signature=6f645dbb263bcffeea26cb6e27a648ab0330fc5769418bcfbd44def381e6fc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EOY3JT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu9bapGMLls09xFr43odnigRp4VajNjwFw5TteBeUiEAiAhMTHXx4UkZZaeYZt9QIljFKlO2dNG1GNFM%2BkRi4Z0CCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMJfgcY%2BeCwPs5qrIwKtwDztBxOwcXcmRBw%2B53p8NVjaovBnu22WD%2F3zfvpUv%2BbnKskx3cxS%2FFtKV7cRfWZaW9UbM2eBZYPycnNH5VAmXxg%2Fa5PBm6%2F9KlgyARidhO44ZWwCemoTX1OreBRD8dch1QPWvHe%2FPilkw%2Fd1uU%2F%2BYSlqvwvn%2FcvRU54sYpYmnrKaTIkln0%2BIpylXzHiFWVClJoOCMbrlIAp4mipTOp8bH0z51oAxBWyfVmRpio5iqbKlaHkhMePjeqNMO4I90nMvrbGsndJ3Etm9muDJ88aglQv0xPcBU1FrkHnSP3atj05Zke0x%2Bz4mdPEWS63qrZvLk%2BBZLLmKG2eTYvFt7RfTe2c85wkoFRFu0t4T4J7paxM%2BWbvqhtCr9zFTLzyMAyKGUd%2BjgUWTKCAc%2Bcrcjn2qdoeaMa%2FyykuRKtHzCtmDP491%2BsaZDQdQcIxnr6cRP4qFKGzjMNTQhtSLW1TVgGUwZm0X0%2Fk275aQswEMA39BYfXXwUr3T5wwnfuLZovvM5eJZgIZjQohwD6l8258hmytqudHS1%2B%2BWvJ4BfG9nxytiuR9tyYkN9rJZ%2F1ekddv7f0k5kvM%2F%2BTuhVIHOPSVoG73qMprPaEb%2Fn2CzHXw4GIXGUYWE%2Favr%2B4MuCoXL6GQwwkaXNwwY6pgH3RZDG%2FFAqbup0kldK7Dp5jy8st3xQaRW7oDeZzr9jK69D09%2FFC%2B110FbHU5q8QmizKt8O%2FFbTZwNkyDyUkpFCiGFbyGDxDz2ReQNqeoLuGlpSHFA24Zq2W4e5j1gHq%2BMGx1FafTRrosU4j2R%2FZytcLzSTLjtMqxTPShdnaNecyed1gvzIX0bN6WWAq7dDuQ2w90SbgHqAcftbriltV3D219dyRm1g&X-Amz-Signature=69291ccca25a54dbcdf1dd11ff89b7d4e1dc928af9b24a69ee921fa3e85b5e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
