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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2PV5XK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID9YPCqcezTlAJGoXEhFzt0tEUEDaMEjvFd2P%2BALS9MFAiEAqD6DQ4Qw4I1auOLu%2FXHfxCop%2Fd0GD7BFoDIxn9oOsBEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDI3BJGcXeOZzWEodaSrcAwM3aGIXuXSQUuvgboY4jZHxpQCGA9afQlKTLeeZx1KcncH6PpEuP%2FqHXSbrCoSUYSf5vpzrXfMRJLF2F5yJ7HkroLVjWMXOXuXGzZNrAnOWscLP43zPgn%2FLhUsSVLee6ESmdWEc%2B6tA5DCrrz41EELK8WWD9oaUx8pazGpLSKlRYQ31GVuNPSK1kAtJjwuhfpj%2BUpF36lcXhltrOuozMTBaxTS%2FWTmn1yCLtej%2BJHtyUkmGwNnaxigaLJdA%2BevYHJfJz%2F7u0jRyw2HPd7C0sNnSdJBift%2BDgfBhgqh9OwDrlJ5ERoSyDsc66prVoxQ4ZjuaN2S1Gr74lSJxMLenEHTJEifK4VQNSQzkI3SiI%2F%2B9sfKB9qTeaXgiLbXFfd%2FwhNPXsfLEY4AhTun9DVyz9pdeahhku9YC30YTptCN%2ByqePDzbjR8bS%2FM1pUl%2BnzG10T%2B9OjgzUfwjLM%2BlWveYmuCMBJq042HJ5F99ViEwL81iRtOR4SsuGdrQLi5dIpPUrE82NbETu1HoJUQVaGC5H3A%2B3vp7pjFMnBJyWBQ%2BJeMcDve%2BNUY3%2BH9TuLPeoN1oQuUcNlNlSX7MWgY7%2BROPbTa2p9psKtIEQ2Z83Vh6%2BpJrhVx3oNM%2FAD1a3iQ5MJ3Y%2FsQGOqUBsSH%2FsCyKoJhbHBJAiRvlZLe2VvbkSBHokXd8vNuDono2Y4ewUN3as5B%2BHc8pdN6YuRUwQdAw38Pml4FN7AAfzjOivqK9pSovZgUUN4mcutMNsnzDz8p8k99E87vwqfg%2FaHAj7Yl5dOIIHjzWQkb6hIEHTXmij01BLlRLlLhCE955DOxJKejOYhT1lGq2bBBZSIMtjaBvR1u5lIgIYVX737pbNsBw&X-Amz-Signature=8e8bb1ebe73d9c207410d6e62101977e0e7328640f5cc30eb8668567fafefe74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2PV5XK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID9YPCqcezTlAJGoXEhFzt0tEUEDaMEjvFd2P%2BALS9MFAiEAqD6DQ4Qw4I1auOLu%2FXHfxCop%2Fd0GD7BFoDIxn9oOsBEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDI3BJGcXeOZzWEodaSrcAwM3aGIXuXSQUuvgboY4jZHxpQCGA9afQlKTLeeZx1KcncH6PpEuP%2FqHXSbrCoSUYSf5vpzrXfMRJLF2F5yJ7HkroLVjWMXOXuXGzZNrAnOWscLP43zPgn%2FLhUsSVLee6ESmdWEc%2B6tA5DCrrz41EELK8WWD9oaUx8pazGpLSKlRYQ31GVuNPSK1kAtJjwuhfpj%2BUpF36lcXhltrOuozMTBaxTS%2FWTmn1yCLtej%2BJHtyUkmGwNnaxigaLJdA%2BevYHJfJz%2F7u0jRyw2HPd7C0sNnSdJBift%2BDgfBhgqh9OwDrlJ5ERoSyDsc66prVoxQ4ZjuaN2S1Gr74lSJxMLenEHTJEifK4VQNSQzkI3SiI%2F%2B9sfKB9qTeaXgiLbXFfd%2FwhNPXsfLEY4AhTun9DVyz9pdeahhku9YC30YTptCN%2ByqePDzbjR8bS%2FM1pUl%2BnzG10T%2B9OjgzUfwjLM%2BlWveYmuCMBJq042HJ5F99ViEwL81iRtOR4SsuGdrQLi5dIpPUrE82NbETu1HoJUQVaGC5H3A%2B3vp7pjFMnBJyWBQ%2BJeMcDve%2BNUY3%2BH9TuLPeoN1oQuUcNlNlSX7MWgY7%2BROPbTa2p9psKtIEQ2Z83Vh6%2BpJrhVx3oNM%2FAD1a3iQ5MJ3Y%2FsQGOqUBsSH%2FsCyKoJhbHBJAiRvlZLe2VvbkSBHokXd8vNuDono2Y4ewUN3as5B%2BHc8pdN6YuRUwQdAw38Pml4FN7AAfzjOivqK9pSovZgUUN4mcutMNsnzDz8p8k99E87vwqfg%2FaHAj7Yl5dOIIHjzWQkb6hIEHTXmij01BLlRLlLhCE955DOxJKejOYhT1lGq2bBBZSIMtjaBvR1u5lIgIYVX737pbNsBw&X-Amz-Signature=45a1c587a3ed16ea3785e17e81a500417d5a8809632e51882020d5ff5f9114c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2PV5XK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID9YPCqcezTlAJGoXEhFzt0tEUEDaMEjvFd2P%2BALS9MFAiEAqD6DQ4Qw4I1auOLu%2FXHfxCop%2Fd0GD7BFoDIxn9oOsBEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDI3BJGcXeOZzWEodaSrcAwM3aGIXuXSQUuvgboY4jZHxpQCGA9afQlKTLeeZx1KcncH6PpEuP%2FqHXSbrCoSUYSf5vpzrXfMRJLF2F5yJ7HkroLVjWMXOXuXGzZNrAnOWscLP43zPgn%2FLhUsSVLee6ESmdWEc%2B6tA5DCrrz41EELK8WWD9oaUx8pazGpLSKlRYQ31GVuNPSK1kAtJjwuhfpj%2BUpF36lcXhltrOuozMTBaxTS%2FWTmn1yCLtej%2BJHtyUkmGwNnaxigaLJdA%2BevYHJfJz%2F7u0jRyw2HPd7C0sNnSdJBift%2BDgfBhgqh9OwDrlJ5ERoSyDsc66prVoxQ4ZjuaN2S1Gr74lSJxMLenEHTJEifK4VQNSQzkI3SiI%2F%2B9sfKB9qTeaXgiLbXFfd%2FwhNPXsfLEY4AhTun9DVyz9pdeahhku9YC30YTptCN%2ByqePDzbjR8bS%2FM1pUl%2BnzG10T%2B9OjgzUfwjLM%2BlWveYmuCMBJq042HJ5F99ViEwL81iRtOR4SsuGdrQLi5dIpPUrE82NbETu1HoJUQVaGC5H3A%2B3vp7pjFMnBJyWBQ%2BJeMcDve%2BNUY3%2BH9TuLPeoN1oQuUcNlNlSX7MWgY7%2BROPbTa2p9psKtIEQ2Z83Vh6%2BpJrhVx3oNM%2FAD1a3iQ5MJ3Y%2FsQGOqUBsSH%2FsCyKoJhbHBJAiRvlZLe2VvbkSBHokXd8vNuDono2Y4ewUN3as5B%2BHc8pdN6YuRUwQdAw38Pml4FN7AAfzjOivqK9pSovZgUUN4mcutMNsnzDz8p8k99E87vwqfg%2FaHAj7Yl5dOIIHjzWQkb6hIEHTXmij01BLlRLlLhCE955DOxJKejOYhT1lGq2bBBZSIMtjaBvR1u5lIgIYVX737pbNsBw&X-Amz-Signature=6e7b8d4fc6c0b9c720e8f9e778d106482ec03b99bb7e04cfeea5089c3014b726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2PV5XK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID9YPCqcezTlAJGoXEhFzt0tEUEDaMEjvFd2P%2BALS9MFAiEAqD6DQ4Qw4I1auOLu%2FXHfxCop%2Fd0GD7BFoDIxn9oOsBEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDI3BJGcXeOZzWEodaSrcAwM3aGIXuXSQUuvgboY4jZHxpQCGA9afQlKTLeeZx1KcncH6PpEuP%2FqHXSbrCoSUYSf5vpzrXfMRJLF2F5yJ7HkroLVjWMXOXuXGzZNrAnOWscLP43zPgn%2FLhUsSVLee6ESmdWEc%2B6tA5DCrrz41EELK8WWD9oaUx8pazGpLSKlRYQ31GVuNPSK1kAtJjwuhfpj%2BUpF36lcXhltrOuozMTBaxTS%2FWTmn1yCLtej%2BJHtyUkmGwNnaxigaLJdA%2BevYHJfJz%2F7u0jRyw2HPd7C0sNnSdJBift%2BDgfBhgqh9OwDrlJ5ERoSyDsc66prVoxQ4ZjuaN2S1Gr74lSJxMLenEHTJEifK4VQNSQzkI3SiI%2F%2B9sfKB9qTeaXgiLbXFfd%2FwhNPXsfLEY4AhTun9DVyz9pdeahhku9YC30YTptCN%2ByqePDzbjR8bS%2FM1pUl%2BnzG10T%2B9OjgzUfwjLM%2BlWveYmuCMBJq042HJ5F99ViEwL81iRtOR4SsuGdrQLi5dIpPUrE82NbETu1HoJUQVaGC5H3A%2B3vp7pjFMnBJyWBQ%2BJeMcDve%2BNUY3%2BH9TuLPeoN1oQuUcNlNlSX7MWgY7%2BROPbTa2p9psKtIEQ2Z83Vh6%2BpJrhVx3oNM%2FAD1a3iQ5MJ3Y%2FsQGOqUBsSH%2FsCyKoJhbHBJAiRvlZLe2VvbkSBHokXd8vNuDono2Y4ewUN3as5B%2BHc8pdN6YuRUwQdAw38Pml4FN7AAfzjOivqK9pSovZgUUN4mcutMNsnzDz8p8k99E87vwqfg%2FaHAj7Yl5dOIIHjzWQkb6hIEHTXmij01BLlRLlLhCE955DOxJKejOYhT1lGq2bBBZSIMtjaBvR1u5lIgIYVX737pbNsBw&X-Amz-Signature=5c8a2126ac49af955111b70047eb3b4ba3c93bf1c1d2fc514f24ceb08959951e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2PV5XK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID9YPCqcezTlAJGoXEhFzt0tEUEDaMEjvFd2P%2BALS9MFAiEAqD6DQ4Qw4I1auOLu%2FXHfxCop%2Fd0GD7BFoDIxn9oOsBEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDI3BJGcXeOZzWEodaSrcAwM3aGIXuXSQUuvgboY4jZHxpQCGA9afQlKTLeeZx1KcncH6PpEuP%2FqHXSbrCoSUYSf5vpzrXfMRJLF2F5yJ7HkroLVjWMXOXuXGzZNrAnOWscLP43zPgn%2FLhUsSVLee6ESmdWEc%2B6tA5DCrrz41EELK8WWD9oaUx8pazGpLSKlRYQ31GVuNPSK1kAtJjwuhfpj%2BUpF36lcXhltrOuozMTBaxTS%2FWTmn1yCLtej%2BJHtyUkmGwNnaxigaLJdA%2BevYHJfJz%2F7u0jRyw2HPd7C0sNnSdJBift%2BDgfBhgqh9OwDrlJ5ERoSyDsc66prVoxQ4ZjuaN2S1Gr74lSJxMLenEHTJEifK4VQNSQzkI3SiI%2F%2B9sfKB9qTeaXgiLbXFfd%2FwhNPXsfLEY4AhTun9DVyz9pdeahhku9YC30YTptCN%2ByqePDzbjR8bS%2FM1pUl%2BnzG10T%2B9OjgzUfwjLM%2BlWveYmuCMBJq042HJ5F99ViEwL81iRtOR4SsuGdrQLi5dIpPUrE82NbETu1HoJUQVaGC5H3A%2B3vp7pjFMnBJyWBQ%2BJeMcDve%2BNUY3%2BH9TuLPeoN1oQuUcNlNlSX7MWgY7%2BROPbTa2p9psKtIEQ2Z83Vh6%2BpJrhVx3oNM%2FAD1a3iQ5MJ3Y%2FsQGOqUBsSH%2FsCyKoJhbHBJAiRvlZLe2VvbkSBHokXd8vNuDono2Y4ewUN3as5B%2BHc8pdN6YuRUwQdAw38Pml4FN7AAfzjOivqK9pSovZgUUN4mcutMNsnzDz8p8k99E87vwqfg%2FaHAj7Yl5dOIIHjzWQkb6hIEHTXmij01BLlRLlLhCE955DOxJKejOYhT1lGq2bBBZSIMtjaBvR1u5lIgIYVX737pbNsBw&X-Amz-Signature=2404027dae33d8418b4199f43af40a35c1516e19df04df8dcc7dcd0a365a5fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
