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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBE3LPPI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnbbKJ2KUtWTTi%2FhlzAYtvrmIGUHCAkez3nB4WHaaH1AiA5e2BeJ3CG89IyqtltnVqgfgQWUFiTy%2BUtRK7fNAeaXSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMMjo02nxNiNTiOPHEKtwDWuBwYJ7%2B98B2y4b%2BKNphgkg2J99%2FgiGSg7oyaCroBhJRHZC4dNZ5J13HSArYDJ4C%2F2g56myjIccRH8L9Pwf10yfJHkwMH7fljIoMWzc%2FzHTBBozMJf4QWP5GzWsLw1zeQcbkfhkdOdB0f06dT79iWy9e3Bsgwbyzm%2Fo2fcfgWAzssGgQGtUNMVoOS6%2Bf%2B3u0ivn96OilAGSKCJT2r1ScIWYkt22JPz6HxoKhdB1B6tl2OcCtEUe2lOP4K7%2FR8WeTh7SbCb3ZJphoeBcHM5DWSvPBg2RlUtFd6Ivg8%2FtAvEq380RnJzynWbJ3yZnUlsWqjRd1w8OL0rQWZkePffJsJlB9bZ5YWxhGvOZa5ShKe76yjhmwr1ikXflmnwuuUzsDJtQYiWnjN58s5QT21SBiTzSGwnhZGUjqVCzYhYt8f2teggnhm7M6n4svXDX5M655g2Le8JXc84gkRncsT%2F4KhIlMwul8XtsMvVY9sYHZedqpqbuu6XmR9GNrXHkjiliG8cA8xp5Ys%2FrbNBnug4nfpdmay1gFtXeK2nmw30Dy7ghedaLyefC%2BYKZbnBuH5vCj6KVnkzaS1KuaCXQorU5VmMatFx6cqH2OR1PloCz4GSeWwllOAcWefbCWyZwwqdqbvwY6pgG%2FWkv9HGbL2HTLvhXSprp1dkUVMLgxbDR1o7a7O5zt8IX0WvU8gLb1iMJq92FJomR5M%2BHWa0NQ0SmU3hpaJjnWg6UlLpL%2B36u3McAYRpVzNsriWQ9e3rGNWrjpP5oO5cFyFiR2XOl%2BIELxXe7zK4xhFGh%2BBUHvylTYpVnWZhXF1F8lNruTyoeTdFJEe0pzBhpgw6bOTA6IdXbsIfnux6G2OvVB%2Be8q&X-Amz-Signature=bae79cd2a86b2882c22d622e0308eb9870dc0531bebad03f7ad2e3fc69346003&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBE3LPPI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnbbKJ2KUtWTTi%2FhlzAYtvrmIGUHCAkez3nB4WHaaH1AiA5e2BeJ3CG89IyqtltnVqgfgQWUFiTy%2BUtRK7fNAeaXSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMMjo02nxNiNTiOPHEKtwDWuBwYJ7%2B98B2y4b%2BKNphgkg2J99%2FgiGSg7oyaCroBhJRHZC4dNZ5J13HSArYDJ4C%2F2g56myjIccRH8L9Pwf10yfJHkwMH7fljIoMWzc%2FzHTBBozMJf4QWP5GzWsLw1zeQcbkfhkdOdB0f06dT79iWy9e3Bsgwbyzm%2Fo2fcfgWAzssGgQGtUNMVoOS6%2Bf%2B3u0ivn96OilAGSKCJT2r1ScIWYkt22JPz6HxoKhdB1B6tl2OcCtEUe2lOP4K7%2FR8WeTh7SbCb3ZJphoeBcHM5DWSvPBg2RlUtFd6Ivg8%2FtAvEq380RnJzynWbJ3yZnUlsWqjRd1w8OL0rQWZkePffJsJlB9bZ5YWxhGvOZa5ShKe76yjhmwr1ikXflmnwuuUzsDJtQYiWnjN58s5QT21SBiTzSGwnhZGUjqVCzYhYt8f2teggnhm7M6n4svXDX5M655g2Le8JXc84gkRncsT%2F4KhIlMwul8XtsMvVY9sYHZedqpqbuu6XmR9GNrXHkjiliG8cA8xp5Ys%2FrbNBnug4nfpdmay1gFtXeK2nmw30Dy7ghedaLyefC%2BYKZbnBuH5vCj6KVnkzaS1KuaCXQorU5VmMatFx6cqH2OR1PloCz4GSeWwllOAcWefbCWyZwwqdqbvwY6pgG%2FWkv9HGbL2HTLvhXSprp1dkUVMLgxbDR1o7a7O5zt8IX0WvU8gLb1iMJq92FJomR5M%2BHWa0NQ0SmU3hpaJjnWg6UlLpL%2B36u3McAYRpVzNsriWQ9e3rGNWrjpP5oO5cFyFiR2XOl%2BIELxXe7zK4xhFGh%2BBUHvylTYpVnWZhXF1F8lNruTyoeTdFJEe0pzBhpgw6bOTA6IdXbsIfnux6G2OvVB%2Be8q&X-Amz-Signature=2a6923ef0f9951409d35891cf290254828044e5a14f1eeeb5331e44b0069f7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBE3LPPI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnbbKJ2KUtWTTi%2FhlzAYtvrmIGUHCAkez3nB4WHaaH1AiA5e2BeJ3CG89IyqtltnVqgfgQWUFiTy%2BUtRK7fNAeaXSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMMjo02nxNiNTiOPHEKtwDWuBwYJ7%2B98B2y4b%2BKNphgkg2J99%2FgiGSg7oyaCroBhJRHZC4dNZ5J13HSArYDJ4C%2F2g56myjIccRH8L9Pwf10yfJHkwMH7fljIoMWzc%2FzHTBBozMJf4QWP5GzWsLw1zeQcbkfhkdOdB0f06dT79iWy9e3Bsgwbyzm%2Fo2fcfgWAzssGgQGtUNMVoOS6%2Bf%2B3u0ivn96OilAGSKCJT2r1ScIWYkt22JPz6HxoKhdB1B6tl2OcCtEUe2lOP4K7%2FR8WeTh7SbCb3ZJphoeBcHM5DWSvPBg2RlUtFd6Ivg8%2FtAvEq380RnJzynWbJ3yZnUlsWqjRd1w8OL0rQWZkePffJsJlB9bZ5YWxhGvOZa5ShKe76yjhmwr1ikXflmnwuuUzsDJtQYiWnjN58s5QT21SBiTzSGwnhZGUjqVCzYhYt8f2teggnhm7M6n4svXDX5M655g2Le8JXc84gkRncsT%2F4KhIlMwul8XtsMvVY9sYHZedqpqbuu6XmR9GNrXHkjiliG8cA8xp5Ys%2FrbNBnug4nfpdmay1gFtXeK2nmw30Dy7ghedaLyefC%2BYKZbnBuH5vCj6KVnkzaS1KuaCXQorU5VmMatFx6cqH2OR1PloCz4GSeWwllOAcWefbCWyZwwqdqbvwY6pgG%2FWkv9HGbL2HTLvhXSprp1dkUVMLgxbDR1o7a7O5zt8IX0WvU8gLb1iMJq92FJomR5M%2BHWa0NQ0SmU3hpaJjnWg6UlLpL%2B36u3McAYRpVzNsriWQ9e3rGNWrjpP5oO5cFyFiR2XOl%2BIELxXe7zK4xhFGh%2BBUHvylTYpVnWZhXF1F8lNruTyoeTdFJEe0pzBhpgw6bOTA6IdXbsIfnux6G2OvVB%2Be8q&X-Amz-Signature=f149935ce4ab4a4f2bbeeb1955f673777d5b31a30eef229a7ddb3d32aba988c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBE3LPPI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnbbKJ2KUtWTTi%2FhlzAYtvrmIGUHCAkez3nB4WHaaH1AiA5e2BeJ3CG89IyqtltnVqgfgQWUFiTy%2BUtRK7fNAeaXSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMMjo02nxNiNTiOPHEKtwDWuBwYJ7%2B98B2y4b%2BKNphgkg2J99%2FgiGSg7oyaCroBhJRHZC4dNZ5J13HSArYDJ4C%2F2g56myjIccRH8L9Pwf10yfJHkwMH7fljIoMWzc%2FzHTBBozMJf4QWP5GzWsLw1zeQcbkfhkdOdB0f06dT79iWy9e3Bsgwbyzm%2Fo2fcfgWAzssGgQGtUNMVoOS6%2Bf%2B3u0ivn96OilAGSKCJT2r1ScIWYkt22JPz6HxoKhdB1B6tl2OcCtEUe2lOP4K7%2FR8WeTh7SbCb3ZJphoeBcHM5DWSvPBg2RlUtFd6Ivg8%2FtAvEq380RnJzynWbJ3yZnUlsWqjRd1w8OL0rQWZkePffJsJlB9bZ5YWxhGvOZa5ShKe76yjhmwr1ikXflmnwuuUzsDJtQYiWnjN58s5QT21SBiTzSGwnhZGUjqVCzYhYt8f2teggnhm7M6n4svXDX5M655g2Le8JXc84gkRncsT%2F4KhIlMwul8XtsMvVY9sYHZedqpqbuu6XmR9GNrXHkjiliG8cA8xp5Ys%2FrbNBnug4nfpdmay1gFtXeK2nmw30Dy7ghedaLyefC%2BYKZbnBuH5vCj6KVnkzaS1KuaCXQorU5VmMatFx6cqH2OR1PloCz4GSeWwllOAcWefbCWyZwwqdqbvwY6pgG%2FWkv9HGbL2HTLvhXSprp1dkUVMLgxbDR1o7a7O5zt8IX0WvU8gLb1iMJq92FJomR5M%2BHWa0NQ0SmU3hpaJjnWg6UlLpL%2B36u3McAYRpVzNsriWQ9e3rGNWrjpP5oO5cFyFiR2XOl%2BIELxXe7zK4xhFGh%2BBUHvylTYpVnWZhXF1F8lNruTyoeTdFJEe0pzBhpgw6bOTA6IdXbsIfnux6G2OvVB%2Be8q&X-Amz-Signature=cfd4bcf6dcd9be01bc5b4e222428dc4ea094bc9cf3f95f81e70bf2aaa5edb478&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBE3LPPI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnbbKJ2KUtWTTi%2FhlzAYtvrmIGUHCAkez3nB4WHaaH1AiA5e2BeJ3CG89IyqtltnVqgfgQWUFiTy%2BUtRK7fNAeaXSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMMjo02nxNiNTiOPHEKtwDWuBwYJ7%2B98B2y4b%2BKNphgkg2J99%2FgiGSg7oyaCroBhJRHZC4dNZ5J13HSArYDJ4C%2F2g56myjIccRH8L9Pwf10yfJHkwMH7fljIoMWzc%2FzHTBBozMJf4QWP5GzWsLw1zeQcbkfhkdOdB0f06dT79iWy9e3Bsgwbyzm%2Fo2fcfgWAzssGgQGtUNMVoOS6%2Bf%2B3u0ivn96OilAGSKCJT2r1ScIWYkt22JPz6HxoKhdB1B6tl2OcCtEUe2lOP4K7%2FR8WeTh7SbCb3ZJphoeBcHM5DWSvPBg2RlUtFd6Ivg8%2FtAvEq380RnJzynWbJ3yZnUlsWqjRd1w8OL0rQWZkePffJsJlB9bZ5YWxhGvOZa5ShKe76yjhmwr1ikXflmnwuuUzsDJtQYiWnjN58s5QT21SBiTzSGwnhZGUjqVCzYhYt8f2teggnhm7M6n4svXDX5M655g2Le8JXc84gkRncsT%2F4KhIlMwul8XtsMvVY9sYHZedqpqbuu6XmR9GNrXHkjiliG8cA8xp5Ys%2FrbNBnug4nfpdmay1gFtXeK2nmw30Dy7ghedaLyefC%2BYKZbnBuH5vCj6KVnkzaS1KuaCXQorU5VmMatFx6cqH2OR1PloCz4GSeWwllOAcWefbCWyZwwqdqbvwY6pgG%2FWkv9HGbL2HTLvhXSprp1dkUVMLgxbDR1o7a7O5zt8IX0WvU8gLb1iMJq92FJomR5M%2BHWa0NQ0SmU3hpaJjnWg6UlLpL%2B36u3McAYRpVzNsriWQ9e3rGNWrjpP5oO5cFyFiR2XOl%2BIELxXe7zK4xhFGh%2BBUHvylTYpVnWZhXF1F8lNruTyoeTdFJEe0pzBhpgw6bOTA6IdXbsIfnux6G2OvVB%2Be8q&X-Amz-Signature=455d50d01657c1b007f495c19d937e05ff7947de00221611631d0cf8f08b9a98&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
