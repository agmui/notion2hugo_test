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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3KELWI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrAABrzs%2BbvLyRcL5ECv394y%2F2WoY7vk2uGXNlj18k0gIgDwGF%2BMc5Mk%2Fa%2Bp2%2BFVZKtoy1REYRphTUO1yvls7d16AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM6pTnm49Bx0AlybyrcA%2FTFS5rY%2F7SsO6S5KTGk7xOdrKMBPSYr3DvcY%2Bs3tXcUEyYZGDaPcnPXheL9PTuInh2lhSBRFhcFU%2FEj6o3urBrQ0KxjNuDhNsIWyaNbnAv5fVub3oc3lv%2Ba86f%2BjF6qnJgQOJpyiLvUzKlhADEGjTg4cSh0gDAHL%2BOJlAQ7jhj2SjGI6k%2B%2FuQt5qjjYtu2hb2fgtXyDVtwGhnC2MLyPVh%2B7kUmLROV6r3fErXEGRU003fpqiCOSNI8yvTdisl47tjrGBdYUwYgvuH%2BLOzIfN5YPvAGpNBvuyigcZcomHlsylFHouOPlm5IvFZpKAeyFkmaGH%2FgIlOffZS7hC%2BnteXNnBGaa9%2BudespTzJEQ29keDJX%2BA19h7%2BdZeGXIWjaHnefXcIg58EjZxwYzSkNfUTkv1d%2FdiDCziSgTXJosOx6WJU9WkMPW%2BxLl%2Ff0eTSBtp8xAbBTl1QIIKKPcjuNmXEWah4DB7%2F%2F63hQmZIVtPcq4VH7VfYw9TNOZzCqTOQ3qrP3K6DLgRqSZQkRVATKGPFqaAZEEAPhJlEVlu2uvtU1hSjCHh0IXHcpKU78RqtjKISmZ4liRKXQlKw0q3MuE3bb37YaChIBoNcOpxPRiDBVfQB1BT0rTlf%2BP%2FSnvMP%2Bv9sAGOqUB7pX5d3Vd1pn1vJZx7s4pc20tDQDOeyrZMPeo%2B2cdL%2Fxau6dbw93Vy8B%2BCw1M0XClLuIglHT4JQ7W51A%2FCvQwzNp3c7NmupE7xOYrGpg9jiykcN5rhxu9RnTUOHyoIthpHrNIXkDxmtYzrvInBssibjLreMiyTl3KVO7vaaPnJ6k2s%2BRFrX8nHSeFDzbey5bWFHr8x%2Fx3KlrnBx5IK26l%2B6DSlQat&X-Amz-Signature=a955480cbdafbe9e7b16ddf92b444470eaf98dd844ae41a86f015c77c1f78583&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3KELWI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrAABrzs%2BbvLyRcL5ECv394y%2F2WoY7vk2uGXNlj18k0gIgDwGF%2BMc5Mk%2Fa%2Bp2%2BFVZKtoy1REYRphTUO1yvls7d16AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM6pTnm49Bx0AlybyrcA%2FTFS5rY%2F7SsO6S5KTGk7xOdrKMBPSYr3DvcY%2Bs3tXcUEyYZGDaPcnPXheL9PTuInh2lhSBRFhcFU%2FEj6o3urBrQ0KxjNuDhNsIWyaNbnAv5fVub3oc3lv%2Ba86f%2BjF6qnJgQOJpyiLvUzKlhADEGjTg4cSh0gDAHL%2BOJlAQ7jhj2SjGI6k%2B%2FuQt5qjjYtu2hb2fgtXyDVtwGhnC2MLyPVh%2B7kUmLROV6r3fErXEGRU003fpqiCOSNI8yvTdisl47tjrGBdYUwYgvuH%2BLOzIfN5YPvAGpNBvuyigcZcomHlsylFHouOPlm5IvFZpKAeyFkmaGH%2FgIlOffZS7hC%2BnteXNnBGaa9%2BudespTzJEQ29keDJX%2BA19h7%2BdZeGXIWjaHnefXcIg58EjZxwYzSkNfUTkv1d%2FdiDCziSgTXJosOx6WJU9WkMPW%2BxLl%2Ff0eTSBtp8xAbBTl1QIIKKPcjuNmXEWah4DB7%2F%2F63hQmZIVtPcq4VH7VfYw9TNOZzCqTOQ3qrP3K6DLgRqSZQkRVATKGPFqaAZEEAPhJlEVlu2uvtU1hSjCHh0IXHcpKU78RqtjKISmZ4liRKXQlKw0q3MuE3bb37YaChIBoNcOpxPRiDBVfQB1BT0rTlf%2BP%2FSnvMP%2Bv9sAGOqUB7pX5d3Vd1pn1vJZx7s4pc20tDQDOeyrZMPeo%2B2cdL%2Fxau6dbw93Vy8B%2BCw1M0XClLuIglHT4JQ7W51A%2FCvQwzNp3c7NmupE7xOYrGpg9jiykcN5rhxu9RnTUOHyoIthpHrNIXkDxmtYzrvInBssibjLreMiyTl3KVO7vaaPnJ6k2s%2BRFrX8nHSeFDzbey5bWFHr8x%2Fx3KlrnBx5IK26l%2B6DSlQat&X-Amz-Signature=915ecf9a87d6a96080c4c4258f951133908ed299c079b78ae8417cea0f059621&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3KELWI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrAABrzs%2BbvLyRcL5ECv394y%2F2WoY7vk2uGXNlj18k0gIgDwGF%2BMc5Mk%2Fa%2Bp2%2BFVZKtoy1REYRphTUO1yvls7d16AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM6pTnm49Bx0AlybyrcA%2FTFS5rY%2F7SsO6S5KTGk7xOdrKMBPSYr3DvcY%2Bs3tXcUEyYZGDaPcnPXheL9PTuInh2lhSBRFhcFU%2FEj6o3urBrQ0KxjNuDhNsIWyaNbnAv5fVub3oc3lv%2Ba86f%2BjF6qnJgQOJpyiLvUzKlhADEGjTg4cSh0gDAHL%2BOJlAQ7jhj2SjGI6k%2B%2FuQt5qjjYtu2hb2fgtXyDVtwGhnC2MLyPVh%2B7kUmLROV6r3fErXEGRU003fpqiCOSNI8yvTdisl47tjrGBdYUwYgvuH%2BLOzIfN5YPvAGpNBvuyigcZcomHlsylFHouOPlm5IvFZpKAeyFkmaGH%2FgIlOffZS7hC%2BnteXNnBGaa9%2BudespTzJEQ29keDJX%2BA19h7%2BdZeGXIWjaHnefXcIg58EjZxwYzSkNfUTkv1d%2FdiDCziSgTXJosOx6WJU9WkMPW%2BxLl%2Ff0eTSBtp8xAbBTl1QIIKKPcjuNmXEWah4DB7%2F%2F63hQmZIVtPcq4VH7VfYw9TNOZzCqTOQ3qrP3K6DLgRqSZQkRVATKGPFqaAZEEAPhJlEVlu2uvtU1hSjCHh0IXHcpKU78RqtjKISmZ4liRKXQlKw0q3MuE3bb37YaChIBoNcOpxPRiDBVfQB1BT0rTlf%2BP%2FSnvMP%2Bv9sAGOqUB7pX5d3Vd1pn1vJZx7s4pc20tDQDOeyrZMPeo%2B2cdL%2Fxau6dbw93Vy8B%2BCw1M0XClLuIglHT4JQ7W51A%2FCvQwzNp3c7NmupE7xOYrGpg9jiykcN5rhxu9RnTUOHyoIthpHrNIXkDxmtYzrvInBssibjLreMiyTl3KVO7vaaPnJ6k2s%2BRFrX8nHSeFDzbey5bWFHr8x%2Fx3KlrnBx5IK26l%2B6DSlQat&X-Amz-Signature=5190b193efc46470467094b7edcfa695ea60cfcbc998dafada7074a75d317869&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3KELWI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrAABrzs%2BbvLyRcL5ECv394y%2F2WoY7vk2uGXNlj18k0gIgDwGF%2BMc5Mk%2Fa%2Bp2%2BFVZKtoy1REYRphTUO1yvls7d16AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM6pTnm49Bx0AlybyrcA%2FTFS5rY%2F7SsO6S5KTGk7xOdrKMBPSYr3DvcY%2Bs3tXcUEyYZGDaPcnPXheL9PTuInh2lhSBRFhcFU%2FEj6o3urBrQ0KxjNuDhNsIWyaNbnAv5fVub3oc3lv%2Ba86f%2BjF6qnJgQOJpyiLvUzKlhADEGjTg4cSh0gDAHL%2BOJlAQ7jhj2SjGI6k%2B%2FuQt5qjjYtu2hb2fgtXyDVtwGhnC2MLyPVh%2B7kUmLROV6r3fErXEGRU003fpqiCOSNI8yvTdisl47tjrGBdYUwYgvuH%2BLOzIfN5YPvAGpNBvuyigcZcomHlsylFHouOPlm5IvFZpKAeyFkmaGH%2FgIlOffZS7hC%2BnteXNnBGaa9%2BudespTzJEQ29keDJX%2BA19h7%2BdZeGXIWjaHnefXcIg58EjZxwYzSkNfUTkv1d%2FdiDCziSgTXJosOx6WJU9WkMPW%2BxLl%2Ff0eTSBtp8xAbBTl1QIIKKPcjuNmXEWah4DB7%2F%2F63hQmZIVtPcq4VH7VfYw9TNOZzCqTOQ3qrP3K6DLgRqSZQkRVATKGPFqaAZEEAPhJlEVlu2uvtU1hSjCHh0IXHcpKU78RqtjKISmZ4liRKXQlKw0q3MuE3bb37YaChIBoNcOpxPRiDBVfQB1BT0rTlf%2BP%2FSnvMP%2Bv9sAGOqUB7pX5d3Vd1pn1vJZx7s4pc20tDQDOeyrZMPeo%2B2cdL%2Fxau6dbw93Vy8B%2BCw1M0XClLuIglHT4JQ7W51A%2FCvQwzNp3c7NmupE7xOYrGpg9jiykcN5rhxu9RnTUOHyoIthpHrNIXkDxmtYzrvInBssibjLreMiyTl3KVO7vaaPnJ6k2s%2BRFrX8nHSeFDzbey5bWFHr8x%2Fx3KlrnBx5IK26l%2B6DSlQat&X-Amz-Signature=53b42f24be05208ea90c546fca10aa10dc0204868e110b8b11158ac19d3bbe1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3KELWI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrAABrzs%2BbvLyRcL5ECv394y%2F2WoY7vk2uGXNlj18k0gIgDwGF%2BMc5Mk%2Fa%2Bp2%2BFVZKtoy1REYRphTUO1yvls7d16AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM6pTnm49Bx0AlybyrcA%2FTFS5rY%2F7SsO6S5KTGk7xOdrKMBPSYr3DvcY%2Bs3tXcUEyYZGDaPcnPXheL9PTuInh2lhSBRFhcFU%2FEj6o3urBrQ0KxjNuDhNsIWyaNbnAv5fVub3oc3lv%2Ba86f%2BjF6qnJgQOJpyiLvUzKlhADEGjTg4cSh0gDAHL%2BOJlAQ7jhj2SjGI6k%2B%2FuQt5qjjYtu2hb2fgtXyDVtwGhnC2MLyPVh%2B7kUmLROV6r3fErXEGRU003fpqiCOSNI8yvTdisl47tjrGBdYUwYgvuH%2BLOzIfN5YPvAGpNBvuyigcZcomHlsylFHouOPlm5IvFZpKAeyFkmaGH%2FgIlOffZS7hC%2BnteXNnBGaa9%2BudespTzJEQ29keDJX%2BA19h7%2BdZeGXIWjaHnefXcIg58EjZxwYzSkNfUTkv1d%2FdiDCziSgTXJosOx6WJU9WkMPW%2BxLl%2Ff0eTSBtp8xAbBTl1QIIKKPcjuNmXEWah4DB7%2F%2F63hQmZIVtPcq4VH7VfYw9TNOZzCqTOQ3qrP3K6DLgRqSZQkRVATKGPFqaAZEEAPhJlEVlu2uvtU1hSjCHh0IXHcpKU78RqtjKISmZ4liRKXQlKw0q3MuE3bb37YaChIBoNcOpxPRiDBVfQB1BT0rTlf%2BP%2FSnvMP%2Bv9sAGOqUB7pX5d3Vd1pn1vJZx7s4pc20tDQDOeyrZMPeo%2B2cdL%2Fxau6dbw93Vy8B%2BCw1M0XClLuIglHT4JQ7W51A%2FCvQwzNp3c7NmupE7xOYrGpg9jiykcN5rhxu9RnTUOHyoIthpHrNIXkDxmtYzrvInBssibjLreMiyTl3KVO7vaaPnJ6k2s%2BRFrX8nHSeFDzbey5bWFHr8x%2Fx3KlrnBx5IK26l%2B6DSlQat&X-Amz-Signature=0bea222e9ab5924eef913db73126af9e5dbf2c015ac23f922e163cb2e546222c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
