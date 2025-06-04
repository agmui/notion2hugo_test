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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQNNWHA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDOxJ2D7AwnRmQKHi04Yuk9Ryg6ufbD9jSCbTB1yklA8gIhAI4wW7OCYgqJNDkvT3CqatKcAP3VezKcZZBZ0xpS1A6WKv8DCCwQABoMNjM3NDIzMTgzODA1IgyB1W6XnCZX2cozEQAq3APPvUzaTqpLJxJC4WaW9DO969%2BD5ruQQ7MEQu%2BBVl%2Bamp4w%2BFD7Tqbw6AwSXOqmrnqhDwlNpGYvd0ElL%2B%2Fmkl1ctBwi9l9%2B3tT9yVxmFcF%2FXEGrWnm6W%2BLF8n37WLqjyUGLgrUr4KwAlIy4AQJfr8CIWX1MX68B8JI00Me%2BwVHEZ91gIzxysJCkMgn4uJNadF8GFUjklWwOSjz6d7MkhIlwoT9SS1Ckn2jrGEV%2Fn5WRSIY7DKjAwfKWOPoTxrxL1v6sHZPMxLbUrWoy59QKfLusmaXInSwXQh0gs6F2y7sDrmHVezjTQRGTxccBg1v3a3d3df0J8kMbmuCGXhKlz%2B1RKotuXoC2XdrcTHnXKf6%2BV6CKHOEUCXC5udioC4hfN%2B3BBTN9T%2FreK5d65mzFLRyqzQaQr17NHiOywQWLX0AOH%2Fhf4IzWieKsVOGmedxRyUDIHSnhfEwsM7Kc77htYbo5lTVXWHTCv%2F1zUdn%2Bi7TSShQquOkdO72xRRqLK47RF202tbddkpfmbj1TsHemGdyDpySn23i2AN1lgtQwDtZgyiYqKQXwdzYL59pM9Ene4yH1L3Nxf0n0ugYDyYBbHdwUj5GxMOMG1pqW7fEQbTQwvjSuQcnXixN7g8jflzCF0IDCBjqkARYoLhoyRiLIkA8QbGmADCDgno0yLXOZ477NGlfb0jNKQlK8lpr%2FbQTcBvlB7pcBY9tA1XznpFutUXKCxT9Vj6rx4mz%2FHAsJzdFFrpWtD36y6qkHV2L9tdwiR50v6cj2lX4QQYWG2n4JHMiwow57yAr6oDo1WGXteYwM4mTni7IR1LniIMhBRyG8E61%2FTnMRVAw0Xt1TlMC%2BZ6Okdd%2BXaIqi8pdB&X-Amz-Signature=117a36331433edd4fd6d1b66ad51c8580625182d55364954d64317e88f1c526a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQNNWHA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDOxJ2D7AwnRmQKHi04Yuk9Ryg6ufbD9jSCbTB1yklA8gIhAI4wW7OCYgqJNDkvT3CqatKcAP3VezKcZZBZ0xpS1A6WKv8DCCwQABoMNjM3NDIzMTgzODA1IgyB1W6XnCZX2cozEQAq3APPvUzaTqpLJxJC4WaW9DO969%2BD5ruQQ7MEQu%2BBVl%2Bamp4w%2BFD7Tqbw6AwSXOqmrnqhDwlNpGYvd0ElL%2B%2Fmkl1ctBwi9l9%2B3tT9yVxmFcF%2FXEGrWnm6W%2BLF8n37WLqjyUGLgrUr4KwAlIy4AQJfr8CIWX1MX68B8JI00Me%2BwVHEZ91gIzxysJCkMgn4uJNadF8GFUjklWwOSjz6d7MkhIlwoT9SS1Ckn2jrGEV%2Fn5WRSIY7DKjAwfKWOPoTxrxL1v6sHZPMxLbUrWoy59QKfLusmaXInSwXQh0gs6F2y7sDrmHVezjTQRGTxccBg1v3a3d3df0J8kMbmuCGXhKlz%2B1RKotuXoC2XdrcTHnXKf6%2BV6CKHOEUCXC5udioC4hfN%2B3BBTN9T%2FreK5d65mzFLRyqzQaQr17NHiOywQWLX0AOH%2Fhf4IzWieKsVOGmedxRyUDIHSnhfEwsM7Kc77htYbo5lTVXWHTCv%2F1zUdn%2Bi7TSShQquOkdO72xRRqLK47RF202tbddkpfmbj1TsHemGdyDpySn23i2AN1lgtQwDtZgyiYqKQXwdzYL59pM9Ene4yH1L3Nxf0n0ugYDyYBbHdwUj5GxMOMG1pqW7fEQbTQwvjSuQcnXixN7g8jflzCF0IDCBjqkARYoLhoyRiLIkA8QbGmADCDgno0yLXOZ477NGlfb0jNKQlK8lpr%2FbQTcBvlB7pcBY9tA1XznpFutUXKCxT9Vj6rx4mz%2FHAsJzdFFrpWtD36y6qkHV2L9tdwiR50v6cj2lX4QQYWG2n4JHMiwow57yAr6oDo1WGXteYwM4mTni7IR1LniIMhBRyG8E61%2FTnMRVAw0Xt1TlMC%2BZ6Okdd%2BXaIqi8pdB&X-Amz-Signature=c9e9081fba0b85b9df52fc0449b4bb671f42818f1ec9140691c94a7b92cfba98&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQNNWHA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDOxJ2D7AwnRmQKHi04Yuk9Ryg6ufbD9jSCbTB1yklA8gIhAI4wW7OCYgqJNDkvT3CqatKcAP3VezKcZZBZ0xpS1A6WKv8DCCwQABoMNjM3NDIzMTgzODA1IgyB1W6XnCZX2cozEQAq3APPvUzaTqpLJxJC4WaW9DO969%2BD5ruQQ7MEQu%2BBVl%2Bamp4w%2BFD7Tqbw6AwSXOqmrnqhDwlNpGYvd0ElL%2B%2Fmkl1ctBwi9l9%2B3tT9yVxmFcF%2FXEGrWnm6W%2BLF8n37WLqjyUGLgrUr4KwAlIy4AQJfr8CIWX1MX68B8JI00Me%2BwVHEZ91gIzxysJCkMgn4uJNadF8GFUjklWwOSjz6d7MkhIlwoT9SS1Ckn2jrGEV%2Fn5WRSIY7DKjAwfKWOPoTxrxL1v6sHZPMxLbUrWoy59QKfLusmaXInSwXQh0gs6F2y7sDrmHVezjTQRGTxccBg1v3a3d3df0J8kMbmuCGXhKlz%2B1RKotuXoC2XdrcTHnXKf6%2BV6CKHOEUCXC5udioC4hfN%2B3BBTN9T%2FreK5d65mzFLRyqzQaQr17NHiOywQWLX0AOH%2Fhf4IzWieKsVOGmedxRyUDIHSnhfEwsM7Kc77htYbo5lTVXWHTCv%2F1zUdn%2Bi7TSShQquOkdO72xRRqLK47RF202tbddkpfmbj1TsHemGdyDpySn23i2AN1lgtQwDtZgyiYqKQXwdzYL59pM9Ene4yH1L3Nxf0n0ugYDyYBbHdwUj5GxMOMG1pqW7fEQbTQwvjSuQcnXixN7g8jflzCF0IDCBjqkARYoLhoyRiLIkA8QbGmADCDgno0yLXOZ477NGlfb0jNKQlK8lpr%2FbQTcBvlB7pcBY9tA1XznpFutUXKCxT9Vj6rx4mz%2FHAsJzdFFrpWtD36y6qkHV2L9tdwiR50v6cj2lX4QQYWG2n4JHMiwow57yAr6oDo1WGXteYwM4mTni7IR1LniIMhBRyG8E61%2FTnMRVAw0Xt1TlMC%2BZ6Okdd%2BXaIqi8pdB&X-Amz-Signature=3ae990055cc68b73421b74714003fda5f91431282a494d71ca97ef06a0de4293&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQNNWHA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDOxJ2D7AwnRmQKHi04Yuk9Ryg6ufbD9jSCbTB1yklA8gIhAI4wW7OCYgqJNDkvT3CqatKcAP3VezKcZZBZ0xpS1A6WKv8DCCwQABoMNjM3NDIzMTgzODA1IgyB1W6XnCZX2cozEQAq3APPvUzaTqpLJxJC4WaW9DO969%2BD5ruQQ7MEQu%2BBVl%2Bamp4w%2BFD7Tqbw6AwSXOqmrnqhDwlNpGYvd0ElL%2B%2Fmkl1ctBwi9l9%2B3tT9yVxmFcF%2FXEGrWnm6W%2BLF8n37WLqjyUGLgrUr4KwAlIy4AQJfr8CIWX1MX68B8JI00Me%2BwVHEZ91gIzxysJCkMgn4uJNadF8GFUjklWwOSjz6d7MkhIlwoT9SS1Ckn2jrGEV%2Fn5WRSIY7DKjAwfKWOPoTxrxL1v6sHZPMxLbUrWoy59QKfLusmaXInSwXQh0gs6F2y7sDrmHVezjTQRGTxccBg1v3a3d3df0J8kMbmuCGXhKlz%2B1RKotuXoC2XdrcTHnXKf6%2BV6CKHOEUCXC5udioC4hfN%2B3BBTN9T%2FreK5d65mzFLRyqzQaQr17NHiOywQWLX0AOH%2Fhf4IzWieKsVOGmedxRyUDIHSnhfEwsM7Kc77htYbo5lTVXWHTCv%2F1zUdn%2Bi7TSShQquOkdO72xRRqLK47RF202tbddkpfmbj1TsHemGdyDpySn23i2AN1lgtQwDtZgyiYqKQXwdzYL59pM9Ene4yH1L3Nxf0n0ugYDyYBbHdwUj5GxMOMG1pqW7fEQbTQwvjSuQcnXixN7g8jflzCF0IDCBjqkARYoLhoyRiLIkA8QbGmADCDgno0yLXOZ477NGlfb0jNKQlK8lpr%2FbQTcBvlB7pcBY9tA1XznpFutUXKCxT9Vj6rx4mz%2FHAsJzdFFrpWtD36y6qkHV2L9tdwiR50v6cj2lX4QQYWG2n4JHMiwow57yAr6oDo1WGXteYwM4mTni7IR1LniIMhBRyG8E61%2FTnMRVAw0Xt1TlMC%2BZ6Okdd%2BXaIqi8pdB&X-Amz-Signature=42b6b245ae5ce43a4fd57115812cd2dc86e7bff4c910065375505d2419c55d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQNNWHA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDOxJ2D7AwnRmQKHi04Yuk9Ryg6ufbD9jSCbTB1yklA8gIhAI4wW7OCYgqJNDkvT3CqatKcAP3VezKcZZBZ0xpS1A6WKv8DCCwQABoMNjM3NDIzMTgzODA1IgyB1W6XnCZX2cozEQAq3APPvUzaTqpLJxJC4WaW9DO969%2BD5ruQQ7MEQu%2BBVl%2Bamp4w%2BFD7Tqbw6AwSXOqmrnqhDwlNpGYvd0ElL%2B%2Fmkl1ctBwi9l9%2B3tT9yVxmFcF%2FXEGrWnm6W%2BLF8n37WLqjyUGLgrUr4KwAlIy4AQJfr8CIWX1MX68B8JI00Me%2BwVHEZ91gIzxysJCkMgn4uJNadF8GFUjklWwOSjz6d7MkhIlwoT9SS1Ckn2jrGEV%2Fn5WRSIY7DKjAwfKWOPoTxrxL1v6sHZPMxLbUrWoy59QKfLusmaXInSwXQh0gs6F2y7sDrmHVezjTQRGTxccBg1v3a3d3df0J8kMbmuCGXhKlz%2B1RKotuXoC2XdrcTHnXKf6%2BV6CKHOEUCXC5udioC4hfN%2B3BBTN9T%2FreK5d65mzFLRyqzQaQr17NHiOywQWLX0AOH%2Fhf4IzWieKsVOGmedxRyUDIHSnhfEwsM7Kc77htYbo5lTVXWHTCv%2F1zUdn%2Bi7TSShQquOkdO72xRRqLK47RF202tbddkpfmbj1TsHemGdyDpySn23i2AN1lgtQwDtZgyiYqKQXwdzYL59pM9Ene4yH1L3Nxf0n0ugYDyYBbHdwUj5GxMOMG1pqW7fEQbTQwvjSuQcnXixN7g8jflzCF0IDCBjqkARYoLhoyRiLIkA8QbGmADCDgno0yLXOZ477NGlfb0jNKQlK8lpr%2FbQTcBvlB7pcBY9tA1XznpFutUXKCxT9Vj6rx4mz%2FHAsJzdFFrpWtD36y6qkHV2L9tdwiR50v6cj2lX4QQYWG2n4JHMiwow57yAr6oDo1WGXteYwM4mTni7IR1LniIMhBRyG8E61%2FTnMRVAw0Xt1TlMC%2BZ6Okdd%2BXaIqi8pdB&X-Amz-Signature=69105fb6e61209bbb0c3d4e188c453d723e2253d7b68e2012506aec2e3a42895&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
