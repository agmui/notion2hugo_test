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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A64NAKR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICswPUjnjj0dG8YTsACQie8konWfI7D4MT9BkQQZiKU7AiEAgz7hq7u6CHdH6cn3QZZNKyHunAiIf%2FDCCM5B%2BRSAj4wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv0PPlykIH%2BSC%2B8oircA5hCfKihOfGdWzfNQoDXlC1cexl%2FchUxzOhsjmdKOp%2BzKH4U3%2B53%2BQjGYLd6EXfOoHcO1MLARJWkVmKqm9KlAlABWzXlTE5OXuRahxz3jvAchZyopwv4v41GV7G04XkVKU7WEMKdl%2F%2FOvDLyqsEPTlOn7nOr22OHSljTgrdBjCjYEvL0QJ9sz8G7nc5L5SGe%2Fxy%2BSD%2B76ZJsCbrQsMOldPfxaXmGIuNww9CY46EWlAaijOEY%2BVXug6vcSProkaLy%2F7KuMvIcEOOWKsGYDfebKmPtCdGTnrR%2BrhcqqMC4HPgcaEvnRvGI%2BdNiud9gEUTPrN2Gw8cRqhKS2CoHXUrTVfSl3gJcCA08yACoI7SB6hHi%2FVDK47KotXwcihI35%2FQ37s1Mv5pbTpHFWJmfloGNIfEsXoe3H0HWj2wORQD0QM8qQpZCJsNudTflqXhYQRyD4ToOSlmEveWQknAhwqb8DuTaAyylviL7xDwIsLBjxyUOIzVGgBsvTyevJ1FF5cKH6%2B%2BD9hLPmNv7lsdbQqQ0k23zl9Rgj34l%2B5J5Lum%2BSwHsSvLao48YjtN%2FO%2B0ErVnSBp%2BEnoYW54VzhITQ%2BG97BZqsCYNz8jU%2BF54pFn8leQ10wrRivT3%2BZ7FcXOBXMPKovcMGOqUBr9Gq%2FuwUKnaeDhDnK5QZ6n0MDfp%2FiwmPEvPRxEfhgXoX5%2BJgJwc%2Fxzb%2BmRA7I3VE%2FnOGai6UktPBzvLKhhQ%2BT2u5vE5fL%2FRAWBHey8hTXT0IkYsI9m6x9F3JrhgtS5g%2FCoddrQe79ObG3sx3Ecu5HyP8QvQg0J17LYgb5CsquztACFO5x36BJZ2wfN4jYONJv9gCmYmbu%2B9J9113KM%2FFuLD19ca1&X-Amz-Signature=36742b11e3e1ea44c5813cbd7516e57dd5a44019349eec4e848a5bc0330ffe49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A64NAKR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICswPUjnjj0dG8YTsACQie8konWfI7D4MT9BkQQZiKU7AiEAgz7hq7u6CHdH6cn3QZZNKyHunAiIf%2FDCCM5B%2BRSAj4wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv0PPlykIH%2BSC%2B8oircA5hCfKihOfGdWzfNQoDXlC1cexl%2FchUxzOhsjmdKOp%2BzKH4U3%2B53%2BQjGYLd6EXfOoHcO1MLARJWkVmKqm9KlAlABWzXlTE5OXuRahxz3jvAchZyopwv4v41GV7G04XkVKU7WEMKdl%2F%2FOvDLyqsEPTlOn7nOr22OHSljTgrdBjCjYEvL0QJ9sz8G7nc5L5SGe%2Fxy%2BSD%2B76ZJsCbrQsMOldPfxaXmGIuNww9CY46EWlAaijOEY%2BVXug6vcSProkaLy%2F7KuMvIcEOOWKsGYDfebKmPtCdGTnrR%2BrhcqqMC4HPgcaEvnRvGI%2BdNiud9gEUTPrN2Gw8cRqhKS2CoHXUrTVfSl3gJcCA08yACoI7SB6hHi%2FVDK47KotXwcihI35%2FQ37s1Mv5pbTpHFWJmfloGNIfEsXoe3H0HWj2wORQD0QM8qQpZCJsNudTflqXhYQRyD4ToOSlmEveWQknAhwqb8DuTaAyylviL7xDwIsLBjxyUOIzVGgBsvTyevJ1FF5cKH6%2B%2BD9hLPmNv7lsdbQqQ0k23zl9Rgj34l%2B5J5Lum%2BSwHsSvLao48YjtN%2FO%2B0ErVnSBp%2BEnoYW54VzhITQ%2BG97BZqsCYNz8jU%2BF54pFn8leQ10wrRivT3%2BZ7FcXOBXMPKovcMGOqUBr9Gq%2FuwUKnaeDhDnK5QZ6n0MDfp%2FiwmPEvPRxEfhgXoX5%2BJgJwc%2Fxzb%2BmRA7I3VE%2FnOGai6UktPBzvLKhhQ%2BT2u5vE5fL%2FRAWBHey8hTXT0IkYsI9m6x9F3JrhgtS5g%2FCoddrQe79ObG3sx3Ecu5HyP8QvQg0J17LYgb5CsquztACFO5x36BJZ2wfN4jYONJv9gCmYmbu%2B9J9113KM%2FFuLD19ca1&X-Amz-Signature=6e5ab46a6d761b3d5ce9c2a2fe5c01add935c63911a0a84f41814fab88134c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A64NAKR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICswPUjnjj0dG8YTsACQie8konWfI7D4MT9BkQQZiKU7AiEAgz7hq7u6CHdH6cn3QZZNKyHunAiIf%2FDCCM5B%2BRSAj4wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv0PPlykIH%2BSC%2B8oircA5hCfKihOfGdWzfNQoDXlC1cexl%2FchUxzOhsjmdKOp%2BzKH4U3%2B53%2BQjGYLd6EXfOoHcO1MLARJWkVmKqm9KlAlABWzXlTE5OXuRahxz3jvAchZyopwv4v41GV7G04XkVKU7WEMKdl%2F%2FOvDLyqsEPTlOn7nOr22OHSljTgrdBjCjYEvL0QJ9sz8G7nc5L5SGe%2Fxy%2BSD%2B76ZJsCbrQsMOldPfxaXmGIuNww9CY46EWlAaijOEY%2BVXug6vcSProkaLy%2F7KuMvIcEOOWKsGYDfebKmPtCdGTnrR%2BrhcqqMC4HPgcaEvnRvGI%2BdNiud9gEUTPrN2Gw8cRqhKS2CoHXUrTVfSl3gJcCA08yACoI7SB6hHi%2FVDK47KotXwcihI35%2FQ37s1Mv5pbTpHFWJmfloGNIfEsXoe3H0HWj2wORQD0QM8qQpZCJsNudTflqXhYQRyD4ToOSlmEveWQknAhwqb8DuTaAyylviL7xDwIsLBjxyUOIzVGgBsvTyevJ1FF5cKH6%2B%2BD9hLPmNv7lsdbQqQ0k23zl9Rgj34l%2B5J5Lum%2BSwHsSvLao48YjtN%2FO%2B0ErVnSBp%2BEnoYW54VzhITQ%2BG97BZqsCYNz8jU%2BF54pFn8leQ10wrRivT3%2BZ7FcXOBXMPKovcMGOqUBr9Gq%2FuwUKnaeDhDnK5QZ6n0MDfp%2FiwmPEvPRxEfhgXoX5%2BJgJwc%2Fxzb%2BmRA7I3VE%2FnOGai6UktPBzvLKhhQ%2BT2u5vE5fL%2FRAWBHey8hTXT0IkYsI9m6x9F3JrhgtS5g%2FCoddrQe79ObG3sx3Ecu5HyP8QvQg0J17LYgb5CsquztACFO5x36BJZ2wfN4jYONJv9gCmYmbu%2B9J9113KM%2FFuLD19ca1&X-Amz-Signature=4d5d1ca2f0ddbf57c784abc09fea5a5bed74030513fdf2aa91e93a090ad1e7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A64NAKR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICswPUjnjj0dG8YTsACQie8konWfI7D4MT9BkQQZiKU7AiEAgz7hq7u6CHdH6cn3QZZNKyHunAiIf%2FDCCM5B%2BRSAj4wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv0PPlykIH%2BSC%2B8oircA5hCfKihOfGdWzfNQoDXlC1cexl%2FchUxzOhsjmdKOp%2BzKH4U3%2B53%2BQjGYLd6EXfOoHcO1MLARJWkVmKqm9KlAlABWzXlTE5OXuRahxz3jvAchZyopwv4v41GV7G04XkVKU7WEMKdl%2F%2FOvDLyqsEPTlOn7nOr22OHSljTgrdBjCjYEvL0QJ9sz8G7nc5L5SGe%2Fxy%2BSD%2B76ZJsCbrQsMOldPfxaXmGIuNww9CY46EWlAaijOEY%2BVXug6vcSProkaLy%2F7KuMvIcEOOWKsGYDfebKmPtCdGTnrR%2BrhcqqMC4HPgcaEvnRvGI%2BdNiud9gEUTPrN2Gw8cRqhKS2CoHXUrTVfSl3gJcCA08yACoI7SB6hHi%2FVDK47KotXwcihI35%2FQ37s1Mv5pbTpHFWJmfloGNIfEsXoe3H0HWj2wORQD0QM8qQpZCJsNudTflqXhYQRyD4ToOSlmEveWQknAhwqb8DuTaAyylviL7xDwIsLBjxyUOIzVGgBsvTyevJ1FF5cKH6%2B%2BD9hLPmNv7lsdbQqQ0k23zl9Rgj34l%2B5J5Lum%2BSwHsSvLao48YjtN%2FO%2B0ErVnSBp%2BEnoYW54VzhITQ%2BG97BZqsCYNz8jU%2BF54pFn8leQ10wrRivT3%2BZ7FcXOBXMPKovcMGOqUBr9Gq%2FuwUKnaeDhDnK5QZ6n0MDfp%2FiwmPEvPRxEfhgXoX5%2BJgJwc%2Fxzb%2BmRA7I3VE%2FnOGai6UktPBzvLKhhQ%2BT2u5vE5fL%2FRAWBHey8hTXT0IkYsI9m6x9F3JrhgtS5g%2FCoddrQe79ObG3sx3Ecu5HyP8QvQg0J17LYgb5CsquztACFO5x36BJZ2wfN4jYONJv9gCmYmbu%2B9J9113KM%2FFuLD19ca1&X-Amz-Signature=d2c9af588666a0e9ab99413fa9b294b822bc7c454e1e6f9782210ca686f1579e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A64NAKR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICswPUjnjj0dG8YTsACQie8konWfI7D4MT9BkQQZiKU7AiEAgz7hq7u6CHdH6cn3QZZNKyHunAiIf%2FDCCM5B%2BRSAj4wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv0PPlykIH%2BSC%2B8oircA5hCfKihOfGdWzfNQoDXlC1cexl%2FchUxzOhsjmdKOp%2BzKH4U3%2B53%2BQjGYLd6EXfOoHcO1MLARJWkVmKqm9KlAlABWzXlTE5OXuRahxz3jvAchZyopwv4v41GV7G04XkVKU7WEMKdl%2F%2FOvDLyqsEPTlOn7nOr22OHSljTgrdBjCjYEvL0QJ9sz8G7nc5L5SGe%2Fxy%2BSD%2B76ZJsCbrQsMOldPfxaXmGIuNww9CY46EWlAaijOEY%2BVXug6vcSProkaLy%2F7KuMvIcEOOWKsGYDfebKmPtCdGTnrR%2BrhcqqMC4HPgcaEvnRvGI%2BdNiud9gEUTPrN2Gw8cRqhKS2CoHXUrTVfSl3gJcCA08yACoI7SB6hHi%2FVDK47KotXwcihI35%2FQ37s1Mv5pbTpHFWJmfloGNIfEsXoe3H0HWj2wORQD0QM8qQpZCJsNudTflqXhYQRyD4ToOSlmEveWQknAhwqb8DuTaAyylviL7xDwIsLBjxyUOIzVGgBsvTyevJ1FF5cKH6%2B%2BD9hLPmNv7lsdbQqQ0k23zl9Rgj34l%2B5J5Lum%2BSwHsSvLao48YjtN%2FO%2B0ErVnSBp%2BEnoYW54VzhITQ%2BG97BZqsCYNz8jU%2BF54pFn8leQ10wrRivT3%2BZ7FcXOBXMPKovcMGOqUBr9Gq%2FuwUKnaeDhDnK5QZ6n0MDfp%2FiwmPEvPRxEfhgXoX5%2BJgJwc%2Fxzb%2BmRA7I3VE%2FnOGai6UktPBzvLKhhQ%2BT2u5vE5fL%2FRAWBHey8hTXT0IkYsI9m6x9F3JrhgtS5g%2FCoddrQe79ObG3sx3Ecu5HyP8QvQg0J17LYgb5CsquztACFO5x36BJZ2wfN4jYONJv9gCmYmbu%2B9J9113KM%2FFuLD19ca1&X-Amz-Signature=6f65ff12a2f3eb3c290bbbea77eb871152f83a441df1099b35ecb677b7867fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
