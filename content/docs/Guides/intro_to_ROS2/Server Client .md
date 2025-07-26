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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HWALEB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCnTSVtEAVqWWTWLFXU9Ga3hG%2BOtiA6Dw6km8dgKiPy5AIhANBnwnoqFX0sf602b82XVfzS%2B%2FmcRVnex2PYoqC8LBFNKv8DCF8QABoMNjM3NDIzMTgzODA1IgyU0JgrzugKOgtWYqcq3ANfyYYbMVQ1AeVf70Ibm70fKfLMu%2FHN2MUTHi0luZeqxSel1g9huXv5gexYMWtwU2IwYFXzNQ6SAL9Y%2FVugTC%2Bgl58egOIOHZ7sSH2uTxDBeScTrgeTdWdM9VeAtRKrp%2FJ%2BKY1iqIYPGRnCCZdZe7M%2BI3B8YP0f2dixvY0Ch6k3MCcuHIGX0SQnln6oDrL4z8ai7ztFQSmUhiRcj29TNtW1TWCcfD4Z55bzuldxbBfdSoVZMnTcV%2B0zKChlNJ989fHxjO9XPbL7%2F9gyK02NkQz9Q2VnbQ4ogkAPW7BjwsWH9lvdf6qb0J5QmejrVfyPWc7WXeyEeZFF00%2Fi6hg4P2udGcwZwK%2FZzextyRvb%2Fns22n6D8j6WrbD6X%2BWwgM2EquWEBq7iNXmQVonThe4tSgnxs%2FonJ1foAX4i1%2B2w3TAjREqOYY7sgL5%2Bc0lT9oDbc0bqFFk4qgZCM171erMhKrfx75zBStLXGm5J3lrqD%2BwuP75OO1%2F6gMExcaiETmB3%2BL9qvL7mjaa7VTob9m7ptjANMjF2YJH6rcFSMJEmTF5Gl9QcQzP%2B0%2BTLV3cHxhWkDeFNKgs0rp%2FHn8tEkHyjgCMA67cjV107aORT85SxjFN%2BfgyUl0F3aUKZVK%2B84jDswJPEBjqkAdw4ZzKDZDtVqFD%2BumrR3YVRff6UzuwV94Mj%2BC6EDiiIkQK96P5X7%2BGn2Sq5tdz2x0k%2B8tNweYecZ27MarBI5hsL%2F0rZS4RHYuPjpukeifaiqMnY6W%2FBUZVi09jfL0xzR88eFdAJTORKAbp7bj15LtVu20vJdpStFLdzfrSBw746cFZsSCF3qnbPKndxu2XX03DUPfcLqI9CFPbTbWMeUJS2Ki0L&X-Amz-Signature=4f043a56db3089ab5e8756ffbc5577b9a2ded01f23ef8f0140e334a34f65333f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HWALEB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCnTSVtEAVqWWTWLFXU9Ga3hG%2BOtiA6Dw6km8dgKiPy5AIhANBnwnoqFX0sf602b82XVfzS%2B%2FmcRVnex2PYoqC8LBFNKv8DCF8QABoMNjM3NDIzMTgzODA1IgyU0JgrzugKOgtWYqcq3ANfyYYbMVQ1AeVf70Ibm70fKfLMu%2FHN2MUTHi0luZeqxSel1g9huXv5gexYMWtwU2IwYFXzNQ6SAL9Y%2FVugTC%2Bgl58egOIOHZ7sSH2uTxDBeScTrgeTdWdM9VeAtRKrp%2FJ%2BKY1iqIYPGRnCCZdZe7M%2BI3B8YP0f2dixvY0Ch6k3MCcuHIGX0SQnln6oDrL4z8ai7ztFQSmUhiRcj29TNtW1TWCcfD4Z55bzuldxbBfdSoVZMnTcV%2B0zKChlNJ989fHxjO9XPbL7%2F9gyK02NkQz9Q2VnbQ4ogkAPW7BjwsWH9lvdf6qb0J5QmejrVfyPWc7WXeyEeZFF00%2Fi6hg4P2udGcwZwK%2FZzextyRvb%2Fns22n6D8j6WrbD6X%2BWwgM2EquWEBq7iNXmQVonThe4tSgnxs%2FonJ1foAX4i1%2B2w3TAjREqOYY7sgL5%2Bc0lT9oDbc0bqFFk4qgZCM171erMhKrfx75zBStLXGm5J3lrqD%2BwuP75OO1%2F6gMExcaiETmB3%2BL9qvL7mjaa7VTob9m7ptjANMjF2YJH6rcFSMJEmTF5Gl9QcQzP%2B0%2BTLV3cHxhWkDeFNKgs0rp%2FHn8tEkHyjgCMA67cjV107aORT85SxjFN%2BfgyUl0F3aUKZVK%2B84jDswJPEBjqkAdw4ZzKDZDtVqFD%2BumrR3YVRff6UzuwV94Mj%2BC6EDiiIkQK96P5X7%2BGn2Sq5tdz2x0k%2B8tNweYecZ27MarBI5hsL%2F0rZS4RHYuPjpukeifaiqMnY6W%2FBUZVi09jfL0xzR88eFdAJTORKAbp7bj15LtVu20vJdpStFLdzfrSBw746cFZsSCF3qnbPKndxu2XX03DUPfcLqI9CFPbTbWMeUJS2Ki0L&X-Amz-Signature=d89a1ed9f43d9d9fd00c9fe01a4a58b044f1b970fb4ce6c2ff38ded57e5c1dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HWALEB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCnTSVtEAVqWWTWLFXU9Ga3hG%2BOtiA6Dw6km8dgKiPy5AIhANBnwnoqFX0sf602b82XVfzS%2B%2FmcRVnex2PYoqC8LBFNKv8DCF8QABoMNjM3NDIzMTgzODA1IgyU0JgrzugKOgtWYqcq3ANfyYYbMVQ1AeVf70Ibm70fKfLMu%2FHN2MUTHi0luZeqxSel1g9huXv5gexYMWtwU2IwYFXzNQ6SAL9Y%2FVugTC%2Bgl58egOIOHZ7sSH2uTxDBeScTrgeTdWdM9VeAtRKrp%2FJ%2BKY1iqIYPGRnCCZdZe7M%2BI3B8YP0f2dixvY0Ch6k3MCcuHIGX0SQnln6oDrL4z8ai7ztFQSmUhiRcj29TNtW1TWCcfD4Z55bzuldxbBfdSoVZMnTcV%2B0zKChlNJ989fHxjO9XPbL7%2F9gyK02NkQz9Q2VnbQ4ogkAPW7BjwsWH9lvdf6qb0J5QmejrVfyPWc7WXeyEeZFF00%2Fi6hg4P2udGcwZwK%2FZzextyRvb%2Fns22n6D8j6WrbD6X%2BWwgM2EquWEBq7iNXmQVonThe4tSgnxs%2FonJ1foAX4i1%2B2w3TAjREqOYY7sgL5%2Bc0lT9oDbc0bqFFk4qgZCM171erMhKrfx75zBStLXGm5J3lrqD%2BwuP75OO1%2F6gMExcaiETmB3%2BL9qvL7mjaa7VTob9m7ptjANMjF2YJH6rcFSMJEmTF5Gl9QcQzP%2B0%2BTLV3cHxhWkDeFNKgs0rp%2FHn8tEkHyjgCMA67cjV107aORT85SxjFN%2BfgyUl0F3aUKZVK%2B84jDswJPEBjqkAdw4ZzKDZDtVqFD%2BumrR3YVRff6UzuwV94Mj%2BC6EDiiIkQK96P5X7%2BGn2Sq5tdz2x0k%2B8tNweYecZ27MarBI5hsL%2F0rZS4RHYuPjpukeifaiqMnY6W%2FBUZVi09jfL0xzR88eFdAJTORKAbp7bj15LtVu20vJdpStFLdzfrSBw746cFZsSCF3qnbPKndxu2XX03DUPfcLqI9CFPbTbWMeUJS2Ki0L&X-Amz-Signature=1a278652907e900a449fb590b790ef84f2f3a7f26b6095375c87b123689ab849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HWALEB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCnTSVtEAVqWWTWLFXU9Ga3hG%2BOtiA6Dw6km8dgKiPy5AIhANBnwnoqFX0sf602b82XVfzS%2B%2FmcRVnex2PYoqC8LBFNKv8DCF8QABoMNjM3NDIzMTgzODA1IgyU0JgrzugKOgtWYqcq3ANfyYYbMVQ1AeVf70Ibm70fKfLMu%2FHN2MUTHi0luZeqxSel1g9huXv5gexYMWtwU2IwYFXzNQ6SAL9Y%2FVugTC%2Bgl58egOIOHZ7sSH2uTxDBeScTrgeTdWdM9VeAtRKrp%2FJ%2BKY1iqIYPGRnCCZdZe7M%2BI3B8YP0f2dixvY0Ch6k3MCcuHIGX0SQnln6oDrL4z8ai7ztFQSmUhiRcj29TNtW1TWCcfD4Z55bzuldxbBfdSoVZMnTcV%2B0zKChlNJ989fHxjO9XPbL7%2F9gyK02NkQz9Q2VnbQ4ogkAPW7BjwsWH9lvdf6qb0J5QmejrVfyPWc7WXeyEeZFF00%2Fi6hg4P2udGcwZwK%2FZzextyRvb%2Fns22n6D8j6WrbD6X%2BWwgM2EquWEBq7iNXmQVonThe4tSgnxs%2FonJ1foAX4i1%2B2w3TAjREqOYY7sgL5%2Bc0lT9oDbc0bqFFk4qgZCM171erMhKrfx75zBStLXGm5J3lrqD%2BwuP75OO1%2F6gMExcaiETmB3%2BL9qvL7mjaa7VTob9m7ptjANMjF2YJH6rcFSMJEmTF5Gl9QcQzP%2B0%2BTLV3cHxhWkDeFNKgs0rp%2FHn8tEkHyjgCMA67cjV107aORT85SxjFN%2BfgyUl0F3aUKZVK%2B84jDswJPEBjqkAdw4ZzKDZDtVqFD%2BumrR3YVRff6UzuwV94Mj%2BC6EDiiIkQK96P5X7%2BGn2Sq5tdz2x0k%2B8tNweYecZ27MarBI5hsL%2F0rZS4RHYuPjpukeifaiqMnY6W%2FBUZVi09jfL0xzR88eFdAJTORKAbp7bj15LtVu20vJdpStFLdzfrSBw746cFZsSCF3qnbPKndxu2XX03DUPfcLqI9CFPbTbWMeUJS2Ki0L&X-Amz-Signature=cc092b72b86ff25672cb861c5b26b1b3b25fffe3056d806ac55469cbbd96667f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HWALEB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCnTSVtEAVqWWTWLFXU9Ga3hG%2BOtiA6Dw6km8dgKiPy5AIhANBnwnoqFX0sf602b82XVfzS%2B%2FmcRVnex2PYoqC8LBFNKv8DCF8QABoMNjM3NDIzMTgzODA1IgyU0JgrzugKOgtWYqcq3ANfyYYbMVQ1AeVf70Ibm70fKfLMu%2FHN2MUTHi0luZeqxSel1g9huXv5gexYMWtwU2IwYFXzNQ6SAL9Y%2FVugTC%2Bgl58egOIOHZ7sSH2uTxDBeScTrgeTdWdM9VeAtRKrp%2FJ%2BKY1iqIYPGRnCCZdZe7M%2BI3B8YP0f2dixvY0Ch6k3MCcuHIGX0SQnln6oDrL4z8ai7ztFQSmUhiRcj29TNtW1TWCcfD4Z55bzuldxbBfdSoVZMnTcV%2B0zKChlNJ989fHxjO9XPbL7%2F9gyK02NkQz9Q2VnbQ4ogkAPW7BjwsWH9lvdf6qb0J5QmejrVfyPWc7WXeyEeZFF00%2Fi6hg4P2udGcwZwK%2FZzextyRvb%2Fns22n6D8j6WrbD6X%2BWwgM2EquWEBq7iNXmQVonThe4tSgnxs%2FonJ1foAX4i1%2B2w3TAjREqOYY7sgL5%2Bc0lT9oDbc0bqFFk4qgZCM171erMhKrfx75zBStLXGm5J3lrqD%2BwuP75OO1%2F6gMExcaiETmB3%2BL9qvL7mjaa7VTob9m7ptjANMjF2YJH6rcFSMJEmTF5Gl9QcQzP%2B0%2BTLV3cHxhWkDeFNKgs0rp%2FHn8tEkHyjgCMA67cjV107aORT85SxjFN%2BfgyUl0F3aUKZVK%2B84jDswJPEBjqkAdw4ZzKDZDtVqFD%2BumrR3YVRff6UzuwV94Mj%2BC6EDiiIkQK96P5X7%2BGn2Sq5tdz2x0k%2B8tNweYecZ27MarBI5hsL%2F0rZS4RHYuPjpukeifaiqMnY6W%2FBUZVi09jfL0xzR88eFdAJTORKAbp7bj15LtVu20vJdpStFLdzfrSBw746cFZsSCF3qnbPKndxu2XX03DUPfcLqI9CFPbTbWMeUJS2Ki0L&X-Amz-Signature=f1983b3fb6845e5d8a21fd0ebb3a15ef7c6df1797c8d85cd72d040f4e0b9177c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
