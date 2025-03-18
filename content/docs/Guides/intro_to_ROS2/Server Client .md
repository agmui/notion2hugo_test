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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6QK52E%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlfy6UEkkuRl3FSqZOehShGf8aa8Ji4gzih%2FsGq6%2BRZAiEAnJVgZzdiI%2FBV%2BGgXafW0GvuFUAVzXB7m42iJTO4FeIEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPzfi0TIOhjwBoFCaCrcA0GFzy7JhAOkfcyVobbXqmP1HLDcgmFo33naxChkSz78xocag9azDqanpO%2Bc5bVj%2FQ%2FGWCTOrghH2FVE6vSR4TmyrhmfxaTW%2FF%2FIE4EiZedAO0SI54R%2F2HKAINeg5GdRfEdsAWrFpXitdsTvLC8krkNuH3GJF%2B68VP%2ForFzUVNPGY8IoGIoxnoINZBVHQOqsKvGlWnr8w5fvsj0CIBhMUr0MQqrMpITzH%2BbfV8%2Fkz%2BnkKkHZ%2BTSJyMKACV4cLciuHqL8q38%2FOMD%2BMZHSbBmf9DNwe8B0s%2FZS3pOPpeomQuwgbdBhy0cw4XK%2Bs69yJFTR0%2Bn68jaO6aUGHCoLqHSYW28AEoLWsHnU6cDbZzU2OYO5QS6KBgDA0AozEbta1EadBmUdVAbdFkhEuyimfLzIfSSMbLuQ2yurhb1nFnq2eR0f0RPq4ymTn9Mw%2BX380uKu3AoaU30HSb1aremga8Tpdc0CFlOdjh5UJK1k2Vb%2F9ZxAMkfdaXif7GQ2WSS0J%2FrYCa6oh1LQQOsxhnUlm2pRZwc1H1361uxp%2Btny3KQPwfZhxZs7bpwaI3VP1tkA3mZd8qD0mXKIUdfbjc0T86GhKR%2Bo1%2FqYKwy4KoqZryCzag2rhVOmaZmNPpFu%2BfS5MPTn474GOqUBDdIfaDItfrNRepxhJFBEZezv9FGGIZEaiXR5xAcu5oMxc48QCKTdHm3EgNlv9je2DsfX%2FprE06hAf6LLav%2BHnkkQ72HboAfixMvLjmbvti3GU9yxJSdPl4O7Xn%2F2JDh1A9a0vhUHkecVMbmIq4KB3Rj%2FgDunH79DUlw%2Fz3Dq8lcKXiU28HsjYwbQ%2FBp6Kuy5ZUE6ODYu8j15AcBAAsyslSys7U1j&X-Amz-Signature=922bd47b2897a02573ef0884a7d8e7d640917fb0a97ef9d31d6ea4032952f419&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6QK52E%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlfy6UEkkuRl3FSqZOehShGf8aa8Ji4gzih%2FsGq6%2BRZAiEAnJVgZzdiI%2FBV%2BGgXafW0GvuFUAVzXB7m42iJTO4FeIEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPzfi0TIOhjwBoFCaCrcA0GFzy7JhAOkfcyVobbXqmP1HLDcgmFo33naxChkSz78xocag9azDqanpO%2Bc5bVj%2FQ%2FGWCTOrghH2FVE6vSR4TmyrhmfxaTW%2FF%2FIE4EiZedAO0SI54R%2F2HKAINeg5GdRfEdsAWrFpXitdsTvLC8krkNuH3GJF%2B68VP%2ForFzUVNPGY8IoGIoxnoINZBVHQOqsKvGlWnr8w5fvsj0CIBhMUr0MQqrMpITzH%2BbfV8%2Fkz%2BnkKkHZ%2BTSJyMKACV4cLciuHqL8q38%2FOMD%2BMZHSbBmf9DNwe8B0s%2FZS3pOPpeomQuwgbdBhy0cw4XK%2Bs69yJFTR0%2Bn68jaO6aUGHCoLqHSYW28AEoLWsHnU6cDbZzU2OYO5QS6KBgDA0AozEbta1EadBmUdVAbdFkhEuyimfLzIfSSMbLuQ2yurhb1nFnq2eR0f0RPq4ymTn9Mw%2BX380uKu3AoaU30HSb1aremga8Tpdc0CFlOdjh5UJK1k2Vb%2F9ZxAMkfdaXif7GQ2WSS0J%2FrYCa6oh1LQQOsxhnUlm2pRZwc1H1361uxp%2Btny3KQPwfZhxZs7bpwaI3VP1tkA3mZd8qD0mXKIUdfbjc0T86GhKR%2Bo1%2FqYKwy4KoqZryCzag2rhVOmaZmNPpFu%2BfS5MPTn474GOqUBDdIfaDItfrNRepxhJFBEZezv9FGGIZEaiXR5xAcu5oMxc48QCKTdHm3EgNlv9je2DsfX%2FprE06hAf6LLav%2BHnkkQ72HboAfixMvLjmbvti3GU9yxJSdPl4O7Xn%2F2JDh1A9a0vhUHkecVMbmIq4KB3Rj%2FgDunH79DUlw%2Fz3Dq8lcKXiU28HsjYwbQ%2FBp6Kuy5ZUE6ODYu8j15AcBAAsyslSys7U1j&X-Amz-Signature=76c9bccebbc3339cada62939987ec8f67292ddf2e8b3810ceec8e5f790fad50d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6QK52E%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlfy6UEkkuRl3FSqZOehShGf8aa8Ji4gzih%2FsGq6%2BRZAiEAnJVgZzdiI%2FBV%2BGgXafW0GvuFUAVzXB7m42iJTO4FeIEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPzfi0TIOhjwBoFCaCrcA0GFzy7JhAOkfcyVobbXqmP1HLDcgmFo33naxChkSz78xocag9azDqanpO%2Bc5bVj%2FQ%2FGWCTOrghH2FVE6vSR4TmyrhmfxaTW%2FF%2FIE4EiZedAO0SI54R%2F2HKAINeg5GdRfEdsAWrFpXitdsTvLC8krkNuH3GJF%2B68VP%2ForFzUVNPGY8IoGIoxnoINZBVHQOqsKvGlWnr8w5fvsj0CIBhMUr0MQqrMpITzH%2BbfV8%2Fkz%2BnkKkHZ%2BTSJyMKACV4cLciuHqL8q38%2FOMD%2BMZHSbBmf9DNwe8B0s%2FZS3pOPpeomQuwgbdBhy0cw4XK%2Bs69yJFTR0%2Bn68jaO6aUGHCoLqHSYW28AEoLWsHnU6cDbZzU2OYO5QS6KBgDA0AozEbta1EadBmUdVAbdFkhEuyimfLzIfSSMbLuQ2yurhb1nFnq2eR0f0RPq4ymTn9Mw%2BX380uKu3AoaU30HSb1aremga8Tpdc0CFlOdjh5UJK1k2Vb%2F9ZxAMkfdaXif7GQ2WSS0J%2FrYCa6oh1LQQOsxhnUlm2pRZwc1H1361uxp%2Btny3KQPwfZhxZs7bpwaI3VP1tkA3mZd8qD0mXKIUdfbjc0T86GhKR%2Bo1%2FqYKwy4KoqZryCzag2rhVOmaZmNPpFu%2BfS5MPTn474GOqUBDdIfaDItfrNRepxhJFBEZezv9FGGIZEaiXR5xAcu5oMxc48QCKTdHm3EgNlv9je2DsfX%2FprE06hAf6LLav%2BHnkkQ72HboAfixMvLjmbvti3GU9yxJSdPl4O7Xn%2F2JDh1A9a0vhUHkecVMbmIq4KB3Rj%2FgDunH79DUlw%2Fz3Dq8lcKXiU28HsjYwbQ%2FBp6Kuy5ZUE6ODYu8j15AcBAAsyslSys7U1j&X-Amz-Signature=9ece44bf0ee71bbe751681bb665249626456859dc941f9b03227c5d0e854d826&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6QK52E%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlfy6UEkkuRl3FSqZOehShGf8aa8Ji4gzih%2FsGq6%2BRZAiEAnJVgZzdiI%2FBV%2BGgXafW0GvuFUAVzXB7m42iJTO4FeIEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPzfi0TIOhjwBoFCaCrcA0GFzy7JhAOkfcyVobbXqmP1HLDcgmFo33naxChkSz78xocag9azDqanpO%2Bc5bVj%2FQ%2FGWCTOrghH2FVE6vSR4TmyrhmfxaTW%2FF%2FIE4EiZedAO0SI54R%2F2HKAINeg5GdRfEdsAWrFpXitdsTvLC8krkNuH3GJF%2B68VP%2ForFzUVNPGY8IoGIoxnoINZBVHQOqsKvGlWnr8w5fvsj0CIBhMUr0MQqrMpITzH%2BbfV8%2Fkz%2BnkKkHZ%2BTSJyMKACV4cLciuHqL8q38%2FOMD%2BMZHSbBmf9DNwe8B0s%2FZS3pOPpeomQuwgbdBhy0cw4XK%2Bs69yJFTR0%2Bn68jaO6aUGHCoLqHSYW28AEoLWsHnU6cDbZzU2OYO5QS6KBgDA0AozEbta1EadBmUdVAbdFkhEuyimfLzIfSSMbLuQ2yurhb1nFnq2eR0f0RPq4ymTn9Mw%2BX380uKu3AoaU30HSb1aremga8Tpdc0CFlOdjh5UJK1k2Vb%2F9ZxAMkfdaXif7GQ2WSS0J%2FrYCa6oh1LQQOsxhnUlm2pRZwc1H1361uxp%2Btny3KQPwfZhxZs7bpwaI3VP1tkA3mZd8qD0mXKIUdfbjc0T86GhKR%2Bo1%2FqYKwy4KoqZryCzag2rhVOmaZmNPpFu%2BfS5MPTn474GOqUBDdIfaDItfrNRepxhJFBEZezv9FGGIZEaiXR5xAcu5oMxc48QCKTdHm3EgNlv9je2DsfX%2FprE06hAf6LLav%2BHnkkQ72HboAfixMvLjmbvti3GU9yxJSdPl4O7Xn%2F2JDh1A9a0vhUHkecVMbmIq4KB3Rj%2FgDunH79DUlw%2Fz3Dq8lcKXiU28HsjYwbQ%2FBp6Kuy5ZUE6ODYu8j15AcBAAsyslSys7U1j&X-Amz-Signature=4590d74bdc2236c55398a50eb28755cf387267b8254f1e6446a87c5b36213587&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6QK52E%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlfy6UEkkuRl3FSqZOehShGf8aa8Ji4gzih%2FsGq6%2BRZAiEAnJVgZzdiI%2FBV%2BGgXafW0GvuFUAVzXB7m42iJTO4FeIEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPzfi0TIOhjwBoFCaCrcA0GFzy7JhAOkfcyVobbXqmP1HLDcgmFo33naxChkSz78xocag9azDqanpO%2Bc5bVj%2FQ%2FGWCTOrghH2FVE6vSR4TmyrhmfxaTW%2FF%2FIE4EiZedAO0SI54R%2F2HKAINeg5GdRfEdsAWrFpXitdsTvLC8krkNuH3GJF%2B68VP%2ForFzUVNPGY8IoGIoxnoINZBVHQOqsKvGlWnr8w5fvsj0CIBhMUr0MQqrMpITzH%2BbfV8%2Fkz%2BnkKkHZ%2BTSJyMKACV4cLciuHqL8q38%2FOMD%2BMZHSbBmf9DNwe8B0s%2FZS3pOPpeomQuwgbdBhy0cw4XK%2Bs69yJFTR0%2Bn68jaO6aUGHCoLqHSYW28AEoLWsHnU6cDbZzU2OYO5QS6KBgDA0AozEbta1EadBmUdVAbdFkhEuyimfLzIfSSMbLuQ2yurhb1nFnq2eR0f0RPq4ymTn9Mw%2BX380uKu3AoaU30HSb1aremga8Tpdc0CFlOdjh5UJK1k2Vb%2F9ZxAMkfdaXif7GQ2WSS0J%2FrYCa6oh1LQQOsxhnUlm2pRZwc1H1361uxp%2Btny3KQPwfZhxZs7bpwaI3VP1tkA3mZd8qD0mXKIUdfbjc0T86GhKR%2Bo1%2FqYKwy4KoqZryCzag2rhVOmaZmNPpFu%2BfS5MPTn474GOqUBDdIfaDItfrNRepxhJFBEZezv9FGGIZEaiXR5xAcu5oMxc48QCKTdHm3EgNlv9je2DsfX%2FprE06hAf6LLav%2BHnkkQ72HboAfixMvLjmbvti3GU9yxJSdPl4O7Xn%2F2JDh1A9a0vhUHkecVMbmIq4KB3Rj%2FgDunH79DUlw%2Fz3Dq8lcKXiU28HsjYwbQ%2FBp6Kuy5ZUE6ODYu8j15AcBAAsyslSys7U1j&X-Amz-Signature=01fe4d85e36965625e2f6b4cd114c86f6acd7c5ba7cb01b225b4ad0cc91a5623&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
