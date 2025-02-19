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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UJ625K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2gGlv%2B24TDDS8Y6%2Fkq7Kh9vEOL240FJ0pjWoogKyUdgIhAI8JxC5D8jKIlijGFbkPKVpa%2BmOBDutxD%2B8oDWOtBCWYKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxGeJnmfQxqpxU0Yq3APKmi50kAUwNTH8IqZ8TpjcMBPPcTgUT4pOdQijRdKX5Zj5nywhE0HlQtQdRgRfUHzETWIm1IPXKeOzWJNqsxjo9wyjN3zoahBXUDqWWBfd6ZH1xX48OPYdZ0%2FsjTtfz%2FcteSr%2F7wbiH3NUk4DyxlpAlOv0i4Y%2BUTvNQjPAW3WyTON%2BFrTUQgZb%2FePAiL34F0vlN5PMt1%2BNShxVHzcW49d2BpgrMKmnqx%2BwGpXffb2vi8bpP84pR%2BedECQh9CczwWbbwngV%2B9fpLOM18UxQqso%2BgS2aLzfaQ041m9rLDX7eI0S6hw7o9dJET9UA66M2lHEc%2B82B8x2EWNL%2FZDf9Cc0rmpZ4JhR1feQrsncPt2pSx%2BxjFcRr4ei2jAfstGY1CtoOqOqwoOBf2WlJbhRjvG6r28vkdJLA6D3KjvNVhv51HI8IZQdJsiUAXgk6WZrVied0%2B57cxCEzENPO9lVUpzv0MVty1DHHPihQtvO61yvZxVXcDXCMgLLQXbnuC44ufRgndpTiHLIR4ZCEqDTKmim4zb9LQcK5IrCdNYlNE7r%2Fp4fM6qqURJvdh4Iqd7r0%2F%2BARxzt7uAP4ZGueKgdlj69Pgth%2B43idCSO2Hi%2FdCFFZMmT93sHbgVlifDysejD10ti9BjqkAfbSFW8bWs6tU4k4%2BbRqnWiFMNkamdakfoHGeiHHB%2FWeqGrgNG750uxqJtXTq3QK%2BYAxxVGxawbvs3134wRaP58TrLNHpIkRp4vTCv1kRwjPoQ6BK4bM%2FSva%2F8ydAwUaiuOhyb8fOnRBq0qfYjXAZVYKvhNYvLypKy%2BJByagUpwZydztWXIlqBxh8fv2W6jf05SoEsaTRnsgWvXWmR9Jfk1YPOFn&X-Amz-Signature=d73e7eb56f58bb7e677f3b2ba42abf1c702f70defa5c21e001553405f904cd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UJ625K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2gGlv%2B24TDDS8Y6%2Fkq7Kh9vEOL240FJ0pjWoogKyUdgIhAI8JxC5D8jKIlijGFbkPKVpa%2BmOBDutxD%2B8oDWOtBCWYKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxGeJnmfQxqpxU0Yq3APKmi50kAUwNTH8IqZ8TpjcMBPPcTgUT4pOdQijRdKX5Zj5nywhE0HlQtQdRgRfUHzETWIm1IPXKeOzWJNqsxjo9wyjN3zoahBXUDqWWBfd6ZH1xX48OPYdZ0%2FsjTtfz%2FcteSr%2F7wbiH3NUk4DyxlpAlOv0i4Y%2BUTvNQjPAW3WyTON%2BFrTUQgZb%2FePAiL34F0vlN5PMt1%2BNShxVHzcW49d2BpgrMKmnqx%2BwGpXffb2vi8bpP84pR%2BedECQh9CczwWbbwngV%2B9fpLOM18UxQqso%2BgS2aLzfaQ041m9rLDX7eI0S6hw7o9dJET9UA66M2lHEc%2B82B8x2EWNL%2FZDf9Cc0rmpZ4JhR1feQrsncPt2pSx%2BxjFcRr4ei2jAfstGY1CtoOqOqwoOBf2WlJbhRjvG6r28vkdJLA6D3KjvNVhv51HI8IZQdJsiUAXgk6WZrVied0%2B57cxCEzENPO9lVUpzv0MVty1DHHPihQtvO61yvZxVXcDXCMgLLQXbnuC44ufRgndpTiHLIR4ZCEqDTKmim4zb9LQcK5IrCdNYlNE7r%2Fp4fM6qqURJvdh4Iqd7r0%2F%2BARxzt7uAP4ZGueKgdlj69Pgth%2B43idCSO2Hi%2FdCFFZMmT93sHbgVlifDysejD10ti9BjqkAfbSFW8bWs6tU4k4%2BbRqnWiFMNkamdakfoHGeiHHB%2FWeqGrgNG750uxqJtXTq3QK%2BYAxxVGxawbvs3134wRaP58TrLNHpIkRp4vTCv1kRwjPoQ6BK4bM%2FSva%2F8ydAwUaiuOhyb8fOnRBq0qfYjXAZVYKvhNYvLypKy%2BJByagUpwZydztWXIlqBxh8fv2W6jf05SoEsaTRnsgWvXWmR9Jfk1YPOFn&X-Amz-Signature=be9410cf6c4c949c72dcbcc4861fb94592782fd68bf14201485f914c988f0a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UJ625K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2gGlv%2B24TDDS8Y6%2Fkq7Kh9vEOL240FJ0pjWoogKyUdgIhAI8JxC5D8jKIlijGFbkPKVpa%2BmOBDutxD%2B8oDWOtBCWYKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxGeJnmfQxqpxU0Yq3APKmi50kAUwNTH8IqZ8TpjcMBPPcTgUT4pOdQijRdKX5Zj5nywhE0HlQtQdRgRfUHzETWIm1IPXKeOzWJNqsxjo9wyjN3zoahBXUDqWWBfd6ZH1xX48OPYdZ0%2FsjTtfz%2FcteSr%2F7wbiH3NUk4DyxlpAlOv0i4Y%2BUTvNQjPAW3WyTON%2BFrTUQgZb%2FePAiL34F0vlN5PMt1%2BNShxVHzcW49d2BpgrMKmnqx%2BwGpXffb2vi8bpP84pR%2BedECQh9CczwWbbwngV%2B9fpLOM18UxQqso%2BgS2aLzfaQ041m9rLDX7eI0S6hw7o9dJET9UA66M2lHEc%2B82B8x2EWNL%2FZDf9Cc0rmpZ4JhR1feQrsncPt2pSx%2BxjFcRr4ei2jAfstGY1CtoOqOqwoOBf2WlJbhRjvG6r28vkdJLA6D3KjvNVhv51HI8IZQdJsiUAXgk6WZrVied0%2B57cxCEzENPO9lVUpzv0MVty1DHHPihQtvO61yvZxVXcDXCMgLLQXbnuC44ufRgndpTiHLIR4ZCEqDTKmim4zb9LQcK5IrCdNYlNE7r%2Fp4fM6qqURJvdh4Iqd7r0%2F%2BARxzt7uAP4ZGueKgdlj69Pgth%2B43idCSO2Hi%2FdCFFZMmT93sHbgVlifDysejD10ti9BjqkAfbSFW8bWs6tU4k4%2BbRqnWiFMNkamdakfoHGeiHHB%2FWeqGrgNG750uxqJtXTq3QK%2BYAxxVGxawbvs3134wRaP58TrLNHpIkRp4vTCv1kRwjPoQ6BK4bM%2FSva%2F8ydAwUaiuOhyb8fOnRBq0qfYjXAZVYKvhNYvLypKy%2BJByagUpwZydztWXIlqBxh8fv2W6jf05SoEsaTRnsgWvXWmR9Jfk1YPOFn&X-Amz-Signature=a4336d9cc978057b19f4491cb83894d857868222a03c8f43fe0f12d29d781d97&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UJ625K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2gGlv%2B24TDDS8Y6%2Fkq7Kh9vEOL240FJ0pjWoogKyUdgIhAI8JxC5D8jKIlijGFbkPKVpa%2BmOBDutxD%2B8oDWOtBCWYKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxGeJnmfQxqpxU0Yq3APKmi50kAUwNTH8IqZ8TpjcMBPPcTgUT4pOdQijRdKX5Zj5nywhE0HlQtQdRgRfUHzETWIm1IPXKeOzWJNqsxjo9wyjN3zoahBXUDqWWBfd6ZH1xX48OPYdZ0%2FsjTtfz%2FcteSr%2F7wbiH3NUk4DyxlpAlOv0i4Y%2BUTvNQjPAW3WyTON%2BFrTUQgZb%2FePAiL34F0vlN5PMt1%2BNShxVHzcW49d2BpgrMKmnqx%2BwGpXffb2vi8bpP84pR%2BedECQh9CczwWbbwngV%2B9fpLOM18UxQqso%2BgS2aLzfaQ041m9rLDX7eI0S6hw7o9dJET9UA66M2lHEc%2B82B8x2EWNL%2FZDf9Cc0rmpZ4JhR1feQrsncPt2pSx%2BxjFcRr4ei2jAfstGY1CtoOqOqwoOBf2WlJbhRjvG6r28vkdJLA6D3KjvNVhv51HI8IZQdJsiUAXgk6WZrVied0%2B57cxCEzENPO9lVUpzv0MVty1DHHPihQtvO61yvZxVXcDXCMgLLQXbnuC44ufRgndpTiHLIR4ZCEqDTKmim4zb9LQcK5IrCdNYlNE7r%2Fp4fM6qqURJvdh4Iqd7r0%2F%2BARxzt7uAP4ZGueKgdlj69Pgth%2B43idCSO2Hi%2FdCFFZMmT93sHbgVlifDysejD10ti9BjqkAfbSFW8bWs6tU4k4%2BbRqnWiFMNkamdakfoHGeiHHB%2FWeqGrgNG750uxqJtXTq3QK%2BYAxxVGxawbvs3134wRaP58TrLNHpIkRp4vTCv1kRwjPoQ6BK4bM%2FSva%2F8ydAwUaiuOhyb8fOnRBq0qfYjXAZVYKvhNYvLypKy%2BJByagUpwZydztWXIlqBxh8fv2W6jf05SoEsaTRnsgWvXWmR9Jfk1YPOFn&X-Amz-Signature=29085b55cbf8fc63522c397240e1ab2e9c244b1bd6ab132738eab0dd0c9e0d44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UJ625K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2gGlv%2B24TDDS8Y6%2Fkq7Kh9vEOL240FJ0pjWoogKyUdgIhAI8JxC5D8jKIlijGFbkPKVpa%2BmOBDutxD%2B8oDWOtBCWYKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxGeJnmfQxqpxU0Yq3APKmi50kAUwNTH8IqZ8TpjcMBPPcTgUT4pOdQijRdKX5Zj5nywhE0HlQtQdRgRfUHzETWIm1IPXKeOzWJNqsxjo9wyjN3zoahBXUDqWWBfd6ZH1xX48OPYdZ0%2FsjTtfz%2FcteSr%2F7wbiH3NUk4DyxlpAlOv0i4Y%2BUTvNQjPAW3WyTON%2BFrTUQgZb%2FePAiL34F0vlN5PMt1%2BNShxVHzcW49d2BpgrMKmnqx%2BwGpXffb2vi8bpP84pR%2BedECQh9CczwWbbwngV%2B9fpLOM18UxQqso%2BgS2aLzfaQ041m9rLDX7eI0S6hw7o9dJET9UA66M2lHEc%2B82B8x2EWNL%2FZDf9Cc0rmpZ4JhR1feQrsncPt2pSx%2BxjFcRr4ei2jAfstGY1CtoOqOqwoOBf2WlJbhRjvG6r28vkdJLA6D3KjvNVhv51HI8IZQdJsiUAXgk6WZrVied0%2B57cxCEzENPO9lVUpzv0MVty1DHHPihQtvO61yvZxVXcDXCMgLLQXbnuC44ufRgndpTiHLIR4ZCEqDTKmim4zb9LQcK5IrCdNYlNE7r%2Fp4fM6qqURJvdh4Iqd7r0%2F%2BARxzt7uAP4ZGueKgdlj69Pgth%2B43idCSO2Hi%2FdCFFZMmT93sHbgVlifDysejD10ti9BjqkAfbSFW8bWs6tU4k4%2BbRqnWiFMNkamdakfoHGeiHHB%2FWeqGrgNG750uxqJtXTq3QK%2BYAxxVGxawbvs3134wRaP58TrLNHpIkRp4vTCv1kRwjPoQ6BK4bM%2FSva%2F8ydAwUaiuOhyb8fOnRBq0qfYjXAZVYKvhNYvLypKy%2BJByagUpwZydztWXIlqBxh8fv2W6jf05SoEsaTRnsgWvXWmR9Jfk1YPOFn&X-Amz-Signature=805836c267d0f14dc087a3ca1ae1e0bbd9363514aa95b911d6bf8b5366407c12&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
