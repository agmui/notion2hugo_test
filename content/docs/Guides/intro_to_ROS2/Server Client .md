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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTDUGED%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAmtn4Z3lRB5N1ubQMnR2keJ9yvhE6xRTA5n3%2FYsmThKAiArQJNlTrrNw5MgNr54t%2B9zwhGj%2FXVMeISd2flFOY0RJyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFLqbGUI%2BVfVAWrMKtwDssx6Oyr4cVz%2FicG8h8M8AmY%2Bo3tUmBuVSCPt1jEk1cNAxhdaVr%2FQdvyvcqGYM0HCf7e1wZfRFVseqbOqLxybL%2FtCeuc2XLIbyH0W0l9OK41yevZ4oMOcqM3bnWWWeD17%2FdcfdoTPnQYOLFugRoffwRJ5XclUXBWoTlMkmDuwyqtlHMl9PacA3r1HdohvIgD3tXPglbFk0CSqmbzDA9rMtdxOqZliUlmtWOp2se9Knm6vK9To9tx4sygNLfrhUV%2F2ZzMLrtxdzUhP%2FE0pg43ejAaUfEMxK3Ut0DDmDykRSTP5apNfntFFJaij5r5QhdzQd4Zcm%2B6Uze3ufuuZFKGw8djMQ8TgfBaHkFuCi3P9CIKIiWX35SuWlzAOBZ6MxxYMCHVkgilgIpj2gl4Q4MzMXkW51Lh2tVM4VV5RmM4sfoNymo5LHTFufCoV17l2PjU20MjxhZXm%2F8OIEeJyjfDUTUPwCEtdABTNxQmaBEdGnsFpXO2H7kiLRc1QjL98Fn5CrT2Ct8lOE0Dg7zqtiAuy5lfzkj%2BDGz4zt4fZA32UXlDlUxEy0YxzE5LjYNiRnYvPBS6PfD08Gf4%2FL6H6PABPB0kUQbZYjO3ItDOKKbS6%2FcB%2FUQIkQdDsX7tnIyEwu8jQxAY6pgGWuv3wLLyp%2FxKgjUsD66DYn%2BL3IQTgl%2Bv8uNJUu2RF4z6Y0kJdurGPlutvKIw7gfxL3j3Mg4ZCMSNw3yNswxAZlk9rP5%2FJks9WLCBv1IrDZ1G6rb05bqaCVxNzNPBQWxqNVdUROzbK2%2Bv%2BJNHWuS8c5Z6VYLScUi6gm7nzvyAmhwysD7Opf9vdY8SoFM2dH7nBBC6XAZaUR9IpiiqM%2Bp8xQBbZmPlF&X-Amz-Signature=c96288182de1399103d689300d0bfec265c19ad678a268aece29a941c2d99ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTDUGED%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAmtn4Z3lRB5N1ubQMnR2keJ9yvhE6xRTA5n3%2FYsmThKAiArQJNlTrrNw5MgNr54t%2B9zwhGj%2FXVMeISd2flFOY0RJyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFLqbGUI%2BVfVAWrMKtwDssx6Oyr4cVz%2FicG8h8M8AmY%2Bo3tUmBuVSCPt1jEk1cNAxhdaVr%2FQdvyvcqGYM0HCf7e1wZfRFVseqbOqLxybL%2FtCeuc2XLIbyH0W0l9OK41yevZ4oMOcqM3bnWWWeD17%2FdcfdoTPnQYOLFugRoffwRJ5XclUXBWoTlMkmDuwyqtlHMl9PacA3r1HdohvIgD3tXPglbFk0CSqmbzDA9rMtdxOqZliUlmtWOp2se9Knm6vK9To9tx4sygNLfrhUV%2F2ZzMLrtxdzUhP%2FE0pg43ejAaUfEMxK3Ut0DDmDykRSTP5apNfntFFJaij5r5QhdzQd4Zcm%2B6Uze3ufuuZFKGw8djMQ8TgfBaHkFuCi3P9CIKIiWX35SuWlzAOBZ6MxxYMCHVkgilgIpj2gl4Q4MzMXkW51Lh2tVM4VV5RmM4sfoNymo5LHTFufCoV17l2PjU20MjxhZXm%2F8OIEeJyjfDUTUPwCEtdABTNxQmaBEdGnsFpXO2H7kiLRc1QjL98Fn5CrT2Ct8lOE0Dg7zqtiAuy5lfzkj%2BDGz4zt4fZA32UXlDlUxEy0YxzE5LjYNiRnYvPBS6PfD08Gf4%2FL6H6PABPB0kUQbZYjO3ItDOKKbS6%2FcB%2FUQIkQdDsX7tnIyEwu8jQxAY6pgGWuv3wLLyp%2FxKgjUsD66DYn%2BL3IQTgl%2Bv8uNJUu2RF4z6Y0kJdurGPlutvKIw7gfxL3j3Mg4ZCMSNw3yNswxAZlk9rP5%2FJks9WLCBv1IrDZ1G6rb05bqaCVxNzNPBQWxqNVdUROzbK2%2Bv%2BJNHWuS8c5Z6VYLScUi6gm7nzvyAmhwysD7Opf9vdY8SoFM2dH7nBBC6XAZaUR9IpiiqM%2Bp8xQBbZmPlF&X-Amz-Signature=3694ebb4d69d8d4c6b0c6ad97c31bed2deb187721c378e2e4c1203cdaa8b7a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTDUGED%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAmtn4Z3lRB5N1ubQMnR2keJ9yvhE6xRTA5n3%2FYsmThKAiArQJNlTrrNw5MgNr54t%2B9zwhGj%2FXVMeISd2flFOY0RJyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFLqbGUI%2BVfVAWrMKtwDssx6Oyr4cVz%2FicG8h8M8AmY%2Bo3tUmBuVSCPt1jEk1cNAxhdaVr%2FQdvyvcqGYM0HCf7e1wZfRFVseqbOqLxybL%2FtCeuc2XLIbyH0W0l9OK41yevZ4oMOcqM3bnWWWeD17%2FdcfdoTPnQYOLFugRoffwRJ5XclUXBWoTlMkmDuwyqtlHMl9PacA3r1HdohvIgD3tXPglbFk0CSqmbzDA9rMtdxOqZliUlmtWOp2se9Knm6vK9To9tx4sygNLfrhUV%2F2ZzMLrtxdzUhP%2FE0pg43ejAaUfEMxK3Ut0DDmDykRSTP5apNfntFFJaij5r5QhdzQd4Zcm%2B6Uze3ufuuZFKGw8djMQ8TgfBaHkFuCi3P9CIKIiWX35SuWlzAOBZ6MxxYMCHVkgilgIpj2gl4Q4MzMXkW51Lh2tVM4VV5RmM4sfoNymo5LHTFufCoV17l2PjU20MjxhZXm%2F8OIEeJyjfDUTUPwCEtdABTNxQmaBEdGnsFpXO2H7kiLRc1QjL98Fn5CrT2Ct8lOE0Dg7zqtiAuy5lfzkj%2BDGz4zt4fZA32UXlDlUxEy0YxzE5LjYNiRnYvPBS6PfD08Gf4%2FL6H6PABPB0kUQbZYjO3ItDOKKbS6%2FcB%2FUQIkQdDsX7tnIyEwu8jQxAY6pgGWuv3wLLyp%2FxKgjUsD66DYn%2BL3IQTgl%2Bv8uNJUu2RF4z6Y0kJdurGPlutvKIw7gfxL3j3Mg4ZCMSNw3yNswxAZlk9rP5%2FJks9WLCBv1IrDZ1G6rb05bqaCVxNzNPBQWxqNVdUROzbK2%2Bv%2BJNHWuS8c5Z6VYLScUi6gm7nzvyAmhwysD7Opf9vdY8SoFM2dH7nBBC6XAZaUR9IpiiqM%2Bp8xQBbZmPlF&X-Amz-Signature=917fa67b9cac49922e9b59ebc73e3b27d0e005be9ef5edf25bce0898b869d272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTDUGED%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAmtn4Z3lRB5N1ubQMnR2keJ9yvhE6xRTA5n3%2FYsmThKAiArQJNlTrrNw5MgNr54t%2B9zwhGj%2FXVMeISd2flFOY0RJyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFLqbGUI%2BVfVAWrMKtwDssx6Oyr4cVz%2FicG8h8M8AmY%2Bo3tUmBuVSCPt1jEk1cNAxhdaVr%2FQdvyvcqGYM0HCf7e1wZfRFVseqbOqLxybL%2FtCeuc2XLIbyH0W0l9OK41yevZ4oMOcqM3bnWWWeD17%2FdcfdoTPnQYOLFugRoffwRJ5XclUXBWoTlMkmDuwyqtlHMl9PacA3r1HdohvIgD3tXPglbFk0CSqmbzDA9rMtdxOqZliUlmtWOp2se9Knm6vK9To9tx4sygNLfrhUV%2F2ZzMLrtxdzUhP%2FE0pg43ejAaUfEMxK3Ut0DDmDykRSTP5apNfntFFJaij5r5QhdzQd4Zcm%2B6Uze3ufuuZFKGw8djMQ8TgfBaHkFuCi3P9CIKIiWX35SuWlzAOBZ6MxxYMCHVkgilgIpj2gl4Q4MzMXkW51Lh2tVM4VV5RmM4sfoNymo5LHTFufCoV17l2PjU20MjxhZXm%2F8OIEeJyjfDUTUPwCEtdABTNxQmaBEdGnsFpXO2H7kiLRc1QjL98Fn5CrT2Ct8lOE0Dg7zqtiAuy5lfzkj%2BDGz4zt4fZA32UXlDlUxEy0YxzE5LjYNiRnYvPBS6PfD08Gf4%2FL6H6PABPB0kUQbZYjO3ItDOKKbS6%2FcB%2FUQIkQdDsX7tnIyEwu8jQxAY6pgGWuv3wLLyp%2FxKgjUsD66DYn%2BL3IQTgl%2Bv8uNJUu2RF4z6Y0kJdurGPlutvKIw7gfxL3j3Mg4ZCMSNw3yNswxAZlk9rP5%2FJks9WLCBv1IrDZ1G6rb05bqaCVxNzNPBQWxqNVdUROzbK2%2Bv%2BJNHWuS8c5Z6VYLScUi6gm7nzvyAmhwysD7Opf9vdY8SoFM2dH7nBBC6XAZaUR9IpiiqM%2Bp8xQBbZmPlF&X-Amz-Signature=3d2f3869fca56ec8a6ac28f34b12cb6447ff96cac0564441ed203a9a99aea76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTDUGED%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAmtn4Z3lRB5N1ubQMnR2keJ9yvhE6xRTA5n3%2FYsmThKAiArQJNlTrrNw5MgNr54t%2B9zwhGj%2FXVMeISd2flFOY0RJyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFLqbGUI%2BVfVAWrMKtwDssx6Oyr4cVz%2FicG8h8M8AmY%2Bo3tUmBuVSCPt1jEk1cNAxhdaVr%2FQdvyvcqGYM0HCf7e1wZfRFVseqbOqLxybL%2FtCeuc2XLIbyH0W0l9OK41yevZ4oMOcqM3bnWWWeD17%2FdcfdoTPnQYOLFugRoffwRJ5XclUXBWoTlMkmDuwyqtlHMl9PacA3r1HdohvIgD3tXPglbFk0CSqmbzDA9rMtdxOqZliUlmtWOp2se9Knm6vK9To9tx4sygNLfrhUV%2F2ZzMLrtxdzUhP%2FE0pg43ejAaUfEMxK3Ut0DDmDykRSTP5apNfntFFJaij5r5QhdzQd4Zcm%2B6Uze3ufuuZFKGw8djMQ8TgfBaHkFuCi3P9CIKIiWX35SuWlzAOBZ6MxxYMCHVkgilgIpj2gl4Q4MzMXkW51Lh2tVM4VV5RmM4sfoNymo5LHTFufCoV17l2PjU20MjxhZXm%2F8OIEeJyjfDUTUPwCEtdABTNxQmaBEdGnsFpXO2H7kiLRc1QjL98Fn5CrT2Ct8lOE0Dg7zqtiAuy5lfzkj%2BDGz4zt4fZA32UXlDlUxEy0YxzE5LjYNiRnYvPBS6PfD08Gf4%2FL6H6PABPB0kUQbZYjO3ItDOKKbS6%2FcB%2FUQIkQdDsX7tnIyEwu8jQxAY6pgGWuv3wLLyp%2FxKgjUsD66DYn%2BL3IQTgl%2Bv8uNJUu2RF4z6Y0kJdurGPlutvKIw7gfxL3j3Mg4ZCMSNw3yNswxAZlk9rP5%2FJks9WLCBv1IrDZ1G6rb05bqaCVxNzNPBQWxqNVdUROzbK2%2Bv%2BJNHWuS8c5Z6VYLScUi6gm7nzvyAmhwysD7Opf9vdY8SoFM2dH7nBBC6XAZaUR9IpiiqM%2Bp8xQBbZmPlF&X-Amz-Signature=149f10629bbe422afb7d32a060dab20aa01478260d6540b4f460cda3202beca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
