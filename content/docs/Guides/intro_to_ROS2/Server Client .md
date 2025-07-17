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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4OUYT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGFfrdf6XWdZU1MLMwMwZAEQLTJ9nbt4JntQLHs21crgAiA79SnFKCMK0pC7PMp%2Biasj7ljDyFkAqvu4Dwc1ia8u6Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMEbx1Acovu22YBKNEKtwDLqn%2Bsr5xT1H9vJB2c7QgKTUpu55DPbb99G0yqGX%2FNDCRN6sSocwchHsbyAsa9Wmqx1GajqA2flZPaXUDzUyWAltJVYsyrFtRSYe1xvQ7av4RGgAoikgGbb9ZJJWnsidh11bPXML6xSqoCz1i0zaERRwxhX9jHefBB7P24Pg9dPx6RgZgvVHwzUk7WmBGOBZ%2BEPHYZ5576KBbn6vIvAyUBjszQVJg2SGeqYg1FLzZgEOn3g7lV%2FjBQaQtZa7Jkeexz%2FobBHK8qdENWBJKYcBDK%2BvDp%2BYIuzv17n24EhK9MBnhjY2dOqwIvZiJpSZxuqQEE2iHhWs%2FMNDCtVdboqQNWepDA0o4Iui0XIu7Hzi2%2FjAKv1WEu8gkyP5XtinOpP7PjpMcBG0PzD%2FPpadW85Q924W3iL0H%2Bm%2Be%2Ft%2BsJuf7WjLu9Dzy17uVCtANhhUpfsfqGeI3OLNsgcbG6raIDPkDfVkhcWvqq2IK8zqUrZx3lzcJ8yneT%2Bh4yaxrW4aq4P7v%2FVBIQQQif6ZsT%2BBNKB6%2B5R3MXDPhy0LGwMN6wgqKdAF5XTj%2Bpc7xvIY0ib83RJKc8r%2BrsCm%2FTkqAUKOVo2abfPSERwn%2FF9sD66mGHQSoT1aSM931P2tbkrgcq%2BMwluziwwY6pgFQjHkodt%2BQz2q%2Bf%2Fz8Hnw%2F53O8AgPvPAsrA5vSCloqWSQLS6dBqwWNTCnCCOYc6Jbi5FjiEcMiEG%2BvsuEwZlEM5nkGIQyrMNaxmHIgKpAj1aL0ECc3IhfS9zV%2Bbcs7%2FtusGpsJEBosUm4gaDbDlPdyUC6yu%2F2VQrB8q7JFBxL%2FVl15eZ%2FWq4CeGOuc3VKfrpmPX28OBrSllj0Jbi1T5oIAyiHEqoO9&X-Amz-Signature=d6010e6b1ba8d95e974eaeccecb444e434fed4ee09dfdc449eac7e5dfdcffb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4OUYT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGFfrdf6XWdZU1MLMwMwZAEQLTJ9nbt4JntQLHs21crgAiA79SnFKCMK0pC7PMp%2Biasj7ljDyFkAqvu4Dwc1ia8u6Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMEbx1Acovu22YBKNEKtwDLqn%2Bsr5xT1H9vJB2c7QgKTUpu55DPbb99G0yqGX%2FNDCRN6sSocwchHsbyAsa9Wmqx1GajqA2flZPaXUDzUyWAltJVYsyrFtRSYe1xvQ7av4RGgAoikgGbb9ZJJWnsidh11bPXML6xSqoCz1i0zaERRwxhX9jHefBB7P24Pg9dPx6RgZgvVHwzUk7WmBGOBZ%2BEPHYZ5576KBbn6vIvAyUBjszQVJg2SGeqYg1FLzZgEOn3g7lV%2FjBQaQtZa7Jkeexz%2FobBHK8qdENWBJKYcBDK%2BvDp%2BYIuzv17n24EhK9MBnhjY2dOqwIvZiJpSZxuqQEE2iHhWs%2FMNDCtVdboqQNWepDA0o4Iui0XIu7Hzi2%2FjAKv1WEu8gkyP5XtinOpP7PjpMcBG0PzD%2FPpadW85Q924W3iL0H%2Bm%2Be%2Ft%2BsJuf7WjLu9Dzy17uVCtANhhUpfsfqGeI3OLNsgcbG6raIDPkDfVkhcWvqq2IK8zqUrZx3lzcJ8yneT%2Bh4yaxrW4aq4P7v%2FVBIQQQif6ZsT%2BBNKB6%2B5R3MXDPhy0LGwMN6wgqKdAF5XTj%2Bpc7xvIY0ib83RJKc8r%2BrsCm%2FTkqAUKOVo2abfPSERwn%2FF9sD66mGHQSoT1aSM931P2tbkrgcq%2BMwluziwwY6pgFQjHkodt%2BQz2q%2Bf%2Fz8Hnw%2F53O8AgPvPAsrA5vSCloqWSQLS6dBqwWNTCnCCOYc6Jbi5FjiEcMiEG%2BvsuEwZlEM5nkGIQyrMNaxmHIgKpAj1aL0ECc3IhfS9zV%2Bbcs7%2FtusGpsJEBosUm4gaDbDlPdyUC6yu%2F2VQrB8q7JFBxL%2FVl15eZ%2FWq4CeGOuc3VKfrpmPX28OBrSllj0Jbi1T5oIAyiHEqoO9&X-Amz-Signature=47cdb146c5a1728158b300a8fcc4650f618bca59d1e3ce9dba51912292f7da9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4OUYT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGFfrdf6XWdZU1MLMwMwZAEQLTJ9nbt4JntQLHs21crgAiA79SnFKCMK0pC7PMp%2Biasj7ljDyFkAqvu4Dwc1ia8u6Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMEbx1Acovu22YBKNEKtwDLqn%2Bsr5xT1H9vJB2c7QgKTUpu55DPbb99G0yqGX%2FNDCRN6sSocwchHsbyAsa9Wmqx1GajqA2flZPaXUDzUyWAltJVYsyrFtRSYe1xvQ7av4RGgAoikgGbb9ZJJWnsidh11bPXML6xSqoCz1i0zaERRwxhX9jHefBB7P24Pg9dPx6RgZgvVHwzUk7WmBGOBZ%2BEPHYZ5576KBbn6vIvAyUBjszQVJg2SGeqYg1FLzZgEOn3g7lV%2FjBQaQtZa7Jkeexz%2FobBHK8qdENWBJKYcBDK%2BvDp%2BYIuzv17n24EhK9MBnhjY2dOqwIvZiJpSZxuqQEE2iHhWs%2FMNDCtVdboqQNWepDA0o4Iui0XIu7Hzi2%2FjAKv1WEu8gkyP5XtinOpP7PjpMcBG0PzD%2FPpadW85Q924W3iL0H%2Bm%2Be%2Ft%2BsJuf7WjLu9Dzy17uVCtANhhUpfsfqGeI3OLNsgcbG6raIDPkDfVkhcWvqq2IK8zqUrZx3lzcJ8yneT%2Bh4yaxrW4aq4P7v%2FVBIQQQif6ZsT%2BBNKB6%2B5R3MXDPhy0LGwMN6wgqKdAF5XTj%2Bpc7xvIY0ib83RJKc8r%2BrsCm%2FTkqAUKOVo2abfPSERwn%2FF9sD66mGHQSoT1aSM931P2tbkrgcq%2BMwluziwwY6pgFQjHkodt%2BQz2q%2Bf%2Fz8Hnw%2F53O8AgPvPAsrA5vSCloqWSQLS6dBqwWNTCnCCOYc6Jbi5FjiEcMiEG%2BvsuEwZlEM5nkGIQyrMNaxmHIgKpAj1aL0ECc3IhfS9zV%2Bbcs7%2FtusGpsJEBosUm4gaDbDlPdyUC6yu%2F2VQrB8q7JFBxL%2FVl15eZ%2FWq4CeGOuc3VKfrpmPX28OBrSllj0Jbi1T5oIAyiHEqoO9&X-Amz-Signature=e82ec0c37289528c97b5e124b81d99c305b2295eaf1d6ba317eeb79148612c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4OUYT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGFfrdf6XWdZU1MLMwMwZAEQLTJ9nbt4JntQLHs21crgAiA79SnFKCMK0pC7PMp%2Biasj7ljDyFkAqvu4Dwc1ia8u6Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMEbx1Acovu22YBKNEKtwDLqn%2Bsr5xT1H9vJB2c7QgKTUpu55DPbb99G0yqGX%2FNDCRN6sSocwchHsbyAsa9Wmqx1GajqA2flZPaXUDzUyWAltJVYsyrFtRSYe1xvQ7av4RGgAoikgGbb9ZJJWnsidh11bPXML6xSqoCz1i0zaERRwxhX9jHefBB7P24Pg9dPx6RgZgvVHwzUk7WmBGOBZ%2BEPHYZ5576KBbn6vIvAyUBjszQVJg2SGeqYg1FLzZgEOn3g7lV%2FjBQaQtZa7Jkeexz%2FobBHK8qdENWBJKYcBDK%2BvDp%2BYIuzv17n24EhK9MBnhjY2dOqwIvZiJpSZxuqQEE2iHhWs%2FMNDCtVdboqQNWepDA0o4Iui0XIu7Hzi2%2FjAKv1WEu8gkyP5XtinOpP7PjpMcBG0PzD%2FPpadW85Q924W3iL0H%2Bm%2Be%2Ft%2BsJuf7WjLu9Dzy17uVCtANhhUpfsfqGeI3OLNsgcbG6raIDPkDfVkhcWvqq2IK8zqUrZx3lzcJ8yneT%2Bh4yaxrW4aq4P7v%2FVBIQQQif6ZsT%2BBNKB6%2B5R3MXDPhy0LGwMN6wgqKdAF5XTj%2Bpc7xvIY0ib83RJKc8r%2BrsCm%2FTkqAUKOVo2abfPSERwn%2FF9sD66mGHQSoT1aSM931P2tbkrgcq%2BMwluziwwY6pgFQjHkodt%2BQz2q%2Bf%2Fz8Hnw%2F53O8AgPvPAsrA5vSCloqWSQLS6dBqwWNTCnCCOYc6Jbi5FjiEcMiEG%2BvsuEwZlEM5nkGIQyrMNaxmHIgKpAj1aL0ECc3IhfS9zV%2Bbcs7%2FtusGpsJEBosUm4gaDbDlPdyUC6yu%2F2VQrB8q7JFBxL%2FVl15eZ%2FWq4CeGOuc3VKfrpmPX28OBrSllj0Jbi1T5oIAyiHEqoO9&X-Amz-Signature=c41470679188dbed1b9b9c891975b52212b39c29a6e1837cf215ba99fefc3aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4OUYT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGFfrdf6XWdZU1MLMwMwZAEQLTJ9nbt4JntQLHs21crgAiA79SnFKCMK0pC7PMp%2Biasj7ljDyFkAqvu4Dwc1ia8u6Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMEbx1Acovu22YBKNEKtwDLqn%2Bsr5xT1H9vJB2c7QgKTUpu55DPbb99G0yqGX%2FNDCRN6sSocwchHsbyAsa9Wmqx1GajqA2flZPaXUDzUyWAltJVYsyrFtRSYe1xvQ7av4RGgAoikgGbb9ZJJWnsidh11bPXML6xSqoCz1i0zaERRwxhX9jHefBB7P24Pg9dPx6RgZgvVHwzUk7WmBGOBZ%2BEPHYZ5576KBbn6vIvAyUBjszQVJg2SGeqYg1FLzZgEOn3g7lV%2FjBQaQtZa7Jkeexz%2FobBHK8qdENWBJKYcBDK%2BvDp%2BYIuzv17n24EhK9MBnhjY2dOqwIvZiJpSZxuqQEE2iHhWs%2FMNDCtVdboqQNWepDA0o4Iui0XIu7Hzi2%2FjAKv1WEu8gkyP5XtinOpP7PjpMcBG0PzD%2FPpadW85Q924W3iL0H%2Bm%2Be%2Ft%2BsJuf7WjLu9Dzy17uVCtANhhUpfsfqGeI3OLNsgcbG6raIDPkDfVkhcWvqq2IK8zqUrZx3lzcJ8yneT%2Bh4yaxrW4aq4P7v%2FVBIQQQif6ZsT%2BBNKB6%2B5R3MXDPhy0LGwMN6wgqKdAF5XTj%2Bpc7xvIY0ib83RJKc8r%2BrsCm%2FTkqAUKOVo2abfPSERwn%2FF9sD66mGHQSoT1aSM931P2tbkrgcq%2BMwluziwwY6pgFQjHkodt%2BQz2q%2Bf%2Fz8Hnw%2F53O8AgPvPAsrA5vSCloqWSQLS6dBqwWNTCnCCOYc6Jbi5FjiEcMiEG%2BvsuEwZlEM5nkGIQyrMNaxmHIgKpAj1aL0ECc3IhfS9zV%2Bbcs7%2FtusGpsJEBosUm4gaDbDlPdyUC6yu%2F2VQrB8q7JFBxL%2FVl15eZ%2FWq4CeGOuc3VKfrpmPX28OBrSllj0Jbi1T5oIAyiHEqoO9&X-Amz-Signature=2da1c29490830133cc47d734ac9715e0a52bad1c5889e02ba2a95a6ad75b8e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
