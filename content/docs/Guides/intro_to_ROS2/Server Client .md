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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2P4SX4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDeR0XviWVpQK7LhQ9wO%2FS60nwLPAbZi3R%2Bxd1jhCA6AiBJFPrXHeTXOtNEKma2FBhwyejHMMTE8fmV2Hdiw%2FSjcyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYLgQaOSODDCxQEpKtwDKnKv5sPPWWJ5c8s1VGD54o8HX8N5l%2FaCttfHQwtEkEt9yZyZMdeVfmO4uHMRksFJTATdB2ugSa6YCRvCgR94DZjqsfikKJF9a30Gj1ogPfxpkhQJ7f1PMvQhIYlMZdvYrgxQeC%2BSSuvJOWUH2simQCjocTxRBv1KDx2CnNEQehlomzwCznEg%2BEC%2BkBRGKakCwV3JktN%2Bi1q2OG1FSoBKb1rdqO6Bb4L%2BqY29EJHZUTKb7Q56%2BTJh4lmOU1EOu0G7HZZ8UzGZVGlifxJ0TFiR0TjvXyFMnYcAqszVuGqdFBQiKQnyW7vm5D32UNaWWJ3iE1JeaCQXXTHD6qJPwk%2F%2FWsZGASoQ3AmuQCcBG6ug8U%2BQuVAJQpWjn68UF5AvjtXm64dScBbPbZcuFnQOYHukbUh8yMpC03dZJj9eXhjW447mnQGfpN%2FSeXYH21uvNRhiBcVbnt4NvLmrC%2FwFgnZ1t3YtrO9hNozWuaApeST7hu%2Fpw%2BUdLNMAY4H6th5nMGWZZ1v8TI%2BwK7%2FgrLBS%2BAuNo%2F%2FNQqUD0ILYOtCER7PBydn%2FuDuwKbV7If6DZI4KU%2F%2BlLzf1vbGabBX%2BnGizw%2BNierPCBsl6neD7mUi9oMzlpO5FhmUY1AzOETW8Nh8w7eL9vgY6pgEL8vlP27TaKdisnlZxgnXYwq%2FMfW0yRr%2FyS2wT%2B2d2dRDHquPV8Lx%2BnB5tufgKhXjKaAF1leeVZKU2sulolk1G%2Bo0zih33Wkqhu%2BqLQSM8UYEyIZ0WsU%2FKeZzOHIeXtWiHuqDGGXRgVFbEpCX8xogWN2IPmsXxiMRmnM%2Buy0XqxC1aBr40QnZjA8azOGer37lVT5qbhFeDdZruPqqbINygInt%2FVbnr&X-Amz-Signature=f981005b92ddacf0ebc3677227eee7a352f6d2b1e1be7d06181cad0db5dcc25f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2P4SX4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDeR0XviWVpQK7LhQ9wO%2FS60nwLPAbZi3R%2Bxd1jhCA6AiBJFPrXHeTXOtNEKma2FBhwyejHMMTE8fmV2Hdiw%2FSjcyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYLgQaOSODDCxQEpKtwDKnKv5sPPWWJ5c8s1VGD54o8HX8N5l%2FaCttfHQwtEkEt9yZyZMdeVfmO4uHMRksFJTATdB2ugSa6YCRvCgR94DZjqsfikKJF9a30Gj1ogPfxpkhQJ7f1PMvQhIYlMZdvYrgxQeC%2BSSuvJOWUH2simQCjocTxRBv1KDx2CnNEQehlomzwCznEg%2BEC%2BkBRGKakCwV3JktN%2Bi1q2OG1FSoBKb1rdqO6Bb4L%2BqY29EJHZUTKb7Q56%2BTJh4lmOU1EOu0G7HZZ8UzGZVGlifxJ0TFiR0TjvXyFMnYcAqszVuGqdFBQiKQnyW7vm5D32UNaWWJ3iE1JeaCQXXTHD6qJPwk%2F%2FWsZGASoQ3AmuQCcBG6ug8U%2BQuVAJQpWjn68UF5AvjtXm64dScBbPbZcuFnQOYHukbUh8yMpC03dZJj9eXhjW447mnQGfpN%2FSeXYH21uvNRhiBcVbnt4NvLmrC%2FwFgnZ1t3YtrO9hNozWuaApeST7hu%2Fpw%2BUdLNMAY4H6th5nMGWZZ1v8TI%2BwK7%2FgrLBS%2BAuNo%2F%2FNQqUD0ILYOtCER7PBydn%2FuDuwKbV7If6DZI4KU%2F%2BlLzf1vbGabBX%2BnGizw%2BNierPCBsl6neD7mUi9oMzlpO5FhmUY1AzOETW8Nh8w7eL9vgY6pgEL8vlP27TaKdisnlZxgnXYwq%2FMfW0yRr%2FyS2wT%2B2d2dRDHquPV8Lx%2BnB5tufgKhXjKaAF1leeVZKU2sulolk1G%2Bo0zih33Wkqhu%2BqLQSM8UYEyIZ0WsU%2FKeZzOHIeXtWiHuqDGGXRgVFbEpCX8xogWN2IPmsXxiMRmnM%2Buy0XqxC1aBr40QnZjA8azOGer37lVT5qbhFeDdZruPqqbINygInt%2FVbnr&X-Amz-Signature=3e4c2e2be57a6a672f6f6cc64fc33cb95f553130ccf97025bed734bc57c84554&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2P4SX4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDeR0XviWVpQK7LhQ9wO%2FS60nwLPAbZi3R%2Bxd1jhCA6AiBJFPrXHeTXOtNEKma2FBhwyejHMMTE8fmV2Hdiw%2FSjcyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYLgQaOSODDCxQEpKtwDKnKv5sPPWWJ5c8s1VGD54o8HX8N5l%2FaCttfHQwtEkEt9yZyZMdeVfmO4uHMRksFJTATdB2ugSa6YCRvCgR94DZjqsfikKJF9a30Gj1ogPfxpkhQJ7f1PMvQhIYlMZdvYrgxQeC%2BSSuvJOWUH2simQCjocTxRBv1KDx2CnNEQehlomzwCznEg%2BEC%2BkBRGKakCwV3JktN%2Bi1q2OG1FSoBKb1rdqO6Bb4L%2BqY29EJHZUTKb7Q56%2BTJh4lmOU1EOu0G7HZZ8UzGZVGlifxJ0TFiR0TjvXyFMnYcAqszVuGqdFBQiKQnyW7vm5D32UNaWWJ3iE1JeaCQXXTHD6qJPwk%2F%2FWsZGASoQ3AmuQCcBG6ug8U%2BQuVAJQpWjn68UF5AvjtXm64dScBbPbZcuFnQOYHukbUh8yMpC03dZJj9eXhjW447mnQGfpN%2FSeXYH21uvNRhiBcVbnt4NvLmrC%2FwFgnZ1t3YtrO9hNozWuaApeST7hu%2Fpw%2BUdLNMAY4H6th5nMGWZZ1v8TI%2BwK7%2FgrLBS%2BAuNo%2F%2FNQqUD0ILYOtCER7PBydn%2FuDuwKbV7If6DZI4KU%2F%2BlLzf1vbGabBX%2BnGizw%2BNierPCBsl6neD7mUi9oMzlpO5FhmUY1AzOETW8Nh8w7eL9vgY6pgEL8vlP27TaKdisnlZxgnXYwq%2FMfW0yRr%2FyS2wT%2B2d2dRDHquPV8Lx%2BnB5tufgKhXjKaAF1leeVZKU2sulolk1G%2Bo0zih33Wkqhu%2BqLQSM8UYEyIZ0WsU%2FKeZzOHIeXtWiHuqDGGXRgVFbEpCX8xogWN2IPmsXxiMRmnM%2Buy0XqxC1aBr40QnZjA8azOGer37lVT5qbhFeDdZruPqqbINygInt%2FVbnr&X-Amz-Signature=5166a43a81cd3145dc72f3d9f171cd75093d21e4e150ce0f4ed9634ce28dc953&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2P4SX4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDeR0XviWVpQK7LhQ9wO%2FS60nwLPAbZi3R%2Bxd1jhCA6AiBJFPrXHeTXOtNEKma2FBhwyejHMMTE8fmV2Hdiw%2FSjcyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYLgQaOSODDCxQEpKtwDKnKv5sPPWWJ5c8s1VGD54o8HX8N5l%2FaCttfHQwtEkEt9yZyZMdeVfmO4uHMRksFJTATdB2ugSa6YCRvCgR94DZjqsfikKJF9a30Gj1ogPfxpkhQJ7f1PMvQhIYlMZdvYrgxQeC%2BSSuvJOWUH2simQCjocTxRBv1KDx2CnNEQehlomzwCznEg%2BEC%2BkBRGKakCwV3JktN%2Bi1q2OG1FSoBKb1rdqO6Bb4L%2BqY29EJHZUTKb7Q56%2BTJh4lmOU1EOu0G7HZZ8UzGZVGlifxJ0TFiR0TjvXyFMnYcAqszVuGqdFBQiKQnyW7vm5D32UNaWWJ3iE1JeaCQXXTHD6qJPwk%2F%2FWsZGASoQ3AmuQCcBG6ug8U%2BQuVAJQpWjn68UF5AvjtXm64dScBbPbZcuFnQOYHukbUh8yMpC03dZJj9eXhjW447mnQGfpN%2FSeXYH21uvNRhiBcVbnt4NvLmrC%2FwFgnZ1t3YtrO9hNozWuaApeST7hu%2Fpw%2BUdLNMAY4H6th5nMGWZZ1v8TI%2BwK7%2FgrLBS%2BAuNo%2F%2FNQqUD0ILYOtCER7PBydn%2FuDuwKbV7If6DZI4KU%2F%2BlLzf1vbGabBX%2BnGizw%2BNierPCBsl6neD7mUi9oMzlpO5FhmUY1AzOETW8Nh8w7eL9vgY6pgEL8vlP27TaKdisnlZxgnXYwq%2FMfW0yRr%2FyS2wT%2B2d2dRDHquPV8Lx%2BnB5tufgKhXjKaAF1leeVZKU2sulolk1G%2Bo0zih33Wkqhu%2BqLQSM8UYEyIZ0WsU%2FKeZzOHIeXtWiHuqDGGXRgVFbEpCX8xogWN2IPmsXxiMRmnM%2Buy0XqxC1aBr40QnZjA8azOGer37lVT5qbhFeDdZruPqqbINygInt%2FVbnr&X-Amz-Signature=2e9085bb6d98dc7ee657e0936f5af0e7abe512805f096f27386df0d1436f001f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2P4SX4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDeR0XviWVpQK7LhQ9wO%2FS60nwLPAbZi3R%2Bxd1jhCA6AiBJFPrXHeTXOtNEKma2FBhwyejHMMTE8fmV2Hdiw%2FSjcyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYLgQaOSODDCxQEpKtwDKnKv5sPPWWJ5c8s1VGD54o8HX8N5l%2FaCttfHQwtEkEt9yZyZMdeVfmO4uHMRksFJTATdB2ugSa6YCRvCgR94DZjqsfikKJF9a30Gj1ogPfxpkhQJ7f1PMvQhIYlMZdvYrgxQeC%2BSSuvJOWUH2simQCjocTxRBv1KDx2CnNEQehlomzwCznEg%2BEC%2BkBRGKakCwV3JktN%2Bi1q2OG1FSoBKb1rdqO6Bb4L%2BqY29EJHZUTKb7Q56%2BTJh4lmOU1EOu0G7HZZ8UzGZVGlifxJ0TFiR0TjvXyFMnYcAqszVuGqdFBQiKQnyW7vm5D32UNaWWJ3iE1JeaCQXXTHD6qJPwk%2F%2FWsZGASoQ3AmuQCcBG6ug8U%2BQuVAJQpWjn68UF5AvjtXm64dScBbPbZcuFnQOYHukbUh8yMpC03dZJj9eXhjW447mnQGfpN%2FSeXYH21uvNRhiBcVbnt4NvLmrC%2FwFgnZ1t3YtrO9hNozWuaApeST7hu%2Fpw%2BUdLNMAY4H6th5nMGWZZ1v8TI%2BwK7%2FgrLBS%2BAuNo%2F%2FNQqUD0ILYOtCER7PBydn%2FuDuwKbV7If6DZI4KU%2F%2BlLzf1vbGabBX%2BnGizw%2BNierPCBsl6neD7mUi9oMzlpO5FhmUY1AzOETW8Nh8w7eL9vgY6pgEL8vlP27TaKdisnlZxgnXYwq%2FMfW0yRr%2FyS2wT%2B2d2dRDHquPV8Lx%2BnB5tufgKhXjKaAF1leeVZKU2sulolk1G%2Bo0zih33Wkqhu%2BqLQSM8UYEyIZ0WsU%2FKeZzOHIeXtWiHuqDGGXRgVFbEpCX8xogWN2IPmsXxiMRmnM%2Buy0XqxC1aBr40QnZjA8azOGer37lVT5qbhFeDdZruPqqbINygInt%2FVbnr&X-Amz-Signature=1f67cc0da2ba4412c76ab66d27cb69394a0411eb72b7572be637b60f8e2ce0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
