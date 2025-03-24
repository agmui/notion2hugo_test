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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOJNTPX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUaG7urxQGkSJNv8YggKnwIYVOD6X4IQjklUKYpYX6%2FAiBkBAAt0uFO08ERrTyZ8NjhlrsqHzYQeYkZ3PO8oSLoJiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmLh3fWI6HpxbiCfKtwD3%2BiPfJz6Yz4Fo1mKiUJu%2F%2B8oZd3m7luf1kRDQQ9iXVdL%2FadIvnlwpEPeipuQHs8C%2FlJAP2u8EuYT%2BpeSXDmfF539gndji2lJHukC18wGhKT4nBcEXbgUfWoyMGLXmnyH6Jt9ugFsP1kB8chyDdZM3P1lNL4hehTGrFlwvDEa6dOiywpBBSSy81mXsLKG70Z%2FyP4IMCRitySPUMGnGaSGXeX8OfhpuK9NZaACLFl4LavP0BBkK1V7KCkURL3B0VO3%2FKeouN4VRDTX0%2BTQj0cNEmjZhJnG5dAoIFtn73iNi4P%2FTc10hhiGhKQ2NFSK1b6K2iFotBH4yggxzEzTYWnjjnuLxyBJs4kkTC%2FNSO1UuJkV290RnwY1C3u0oF5ti%2BOqFyr7cy2Avr4ivHIO%2FodYjCqcfxfOIHiD5RBAr16EIye5VGKOSTHom8BoNoTNhv3OWqVww83fTVG0hGdSR03sIGbGE7tFMOeY61OMUKJzAmwOlStsRa6ZfS%2BEI%2FHuquOC3aAqLwA2ANoTN2aiJmXtTDoJkgtyOgkWcQ7r1uub5xc8pJ5ioA4OX8fQGgumvDv9RW2KJBEWwnA9whHmlAkOKcL67bhSTtexjSq6Q84Vc%2FnDUejagbL84DTwqVIw2eKDvwY6pgG2I5IB9cn5HgJ15yDCmmeJLxlKU7zWoz2zogj0IXCQphXKYcU3Gw4jtWJkIlyFj5NOhG29H315lI5pI6Rg9hKSyLteiof%2B5cyRAkKKX1rIDEhwEk7ndI474K%2F%2BKiMEmKpv%2FYzFDAl3lb%2FFoOI7VJuWBJcEX5yWag4CGWWcNiaMwrcpWEeEkI47RNqmuE3GYhATroMls69dnqplXCuvE34QT2R%2B0o6M&X-Amz-Signature=71ca16305ebe1bc94a60c1656d032c69b7ea32487a3936ee1557cb1e52ebbb7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOJNTPX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUaG7urxQGkSJNv8YggKnwIYVOD6X4IQjklUKYpYX6%2FAiBkBAAt0uFO08ERrTyZ8NjhlrsqHzYQeYkZ3PO8oSLoJiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmLh3fWI6HpxbiCfKtwD3%2BiPfJz6Yz4Fo1mKiUJu%2F%2B8oZd3m7luf1kRDQQ9iXVdL%2FadIvnlwpEPeipuQHs8C%2FlJAP2u8EuYT%2BpeSXDmfF539gndji2lJHukC18wGhKT4nBcEXbgUfWoyMGLXmnyH6Jt9ugFsP1kB8chyDdZM3P1lNL4hehTGrFlwvDEa6dOiywpBBSSy81mXsLKG70Z%2FyP4IMCRitySPUMGnGaSGXeX8OfhpuK9NZaACLFl4LavP0BBkK1V7KCkURL3B0VO3%2FKeouN4VRDTX0%2BTQj0cNEmjZhJnG5dAoIFtn73iNi4P%2FTc10hhiGhKQ2NFSK1b6K2iFotBH4yggxzEzTYWnjjnuLxyBJs4kkTC%2FNSO1UuJkV290RnwY1C3u0oF5ti%2BOqFyr7cy2Avr4ivHIO%2FodYjCqcfxfOIHiD5RBAr16EIye5VGKOSTHom8BoNoTNhv3OWqVww83fTVG0hGdSR03sIGbGE7tFMOeY61OMUKJzAmwOlStsRa6ZfS%2BEI%2FHuquOC3aAqLwA2ANoTN2aiJmXtTDoJkgtyOgkWcQ7r1uub5xc8pJ5ioA4OX8fQGgumvDv9RW2KJBEWwnA9whHmlAkOKcL67bhSTtexjSq6Q84Vc%2FnDUejagbL84DTwqVIw2eKDvwY6pgG2I5IB9cn5HgJ15yDCmmeJLxlKU7zWoz2zogj0IXCQphXKYcU3Gw4jtWJkIlyFj5NOhG29H315lI5pI6Rg9hKSyLteiof%2B5cyRAkKKX1rIDEhwEk7ndI474K%2F%2BKiMEmKpv%2FYzFDAl3lb%2FFoOI7VJuWBJcEX5yWag4CGWWcNiaMwrcpWEeEkI47RNqmuE3GYhATroMls69dnqplXCuvE34QT2R%2B0o6M&X-Amz-Signature=be3b3a17e00c576e259ca97c297bb32427b922bdf952eb32532b35a2ecb82bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOJNTPX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUaG7urxQGkSJNv8YggKnwIYVOD6X4IQjklUKYpYX6%2FAiBkBAAt0uFO08ERrTyZ8NjhlrsqHzYQeYkZ3PO8oSLoJiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmLh3fWI6HpxbiCfKtwD3%2BiPfJz6Yz4Fo1mKiUJu%2F%2B8oZd3m7luf1kRDQQ9iXVdL%2FadIvnlwpEPeipuQHs8C%2FlJAP2u8EuYT%2BpeSXDmfF539gndji2lJHukC18wGhKT4nBcEXbgUfWoyMGLXmnyH6Jt9ugFsP1kB8chyDdZM3P1lNL4hehTGrFlwvDEa6dOiywpBBSSy81mXsLKG70Z%2FyP4IMCRitySPUMGnGaSGXeX8OfhpuK9NZaACLFl4LavP0BBkK1V7KCkURL3B0VO3%2FKeouN4VRDTX0%2BTQj0cNEmjZhJnG5dAoIFtn73iNi4P%2FTc10hhiGhKQ2NFSK1b6K2iFotBH4yggxzEzTYWnjjnuLxyBJs4kkTC%2FNSO1UuJkV290RnwY1C3u0oF5ti%2BOqFyr7cy2Avr4ivHIO%2FodYjCqcfxfOIHiD5RBAr16EIye5VGKOSTHom8BoNoTNhv3OWqVww83fTVG0hGdSR03sIGbGE7tFMOeY61OMUKJzAmwOlStsRa6ZfS%2BEI%2FHuquOC3aAqLwA2ANoTN2aiJmXtTDoJkgtyOgkWcQ7r1uub5xc8pJ5ioA4OX8fQGgumvDv9RW2KJBEWwnA9whHmlAkOKcL67bhSTtexjSq6Q84Vc%2FnDUejagbL84DTwqVIw2eKDvwY6pgG2I5IB9cn5HgJ15yDCmmeJLxlKU7zWoz2zogj0IXCQphXKYcU3Gw4jtWJkIlyFj5NOhG29H315lI5pI6Rg9hKSyLteiof%2B5cyRAkKKX1rIDEhwEk7ndI474K%2F%2BKiMEmKpv%2FYzFDAl3lb%2FFoOI7VJuWBJcEX5yWag4CGWWcNiaMwrcpWEeEkI47RNqmuE3GYhATroMls69dnqplXCuvE34QT2R%2B0o6M&X-Amz-Signature=31503375042d275d6476ad838a7657d71769ea68c9cb6ea021889ad15c85faa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOJNTPX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUaG7urxQGkSJNv8YggKnwIYVOD6X4IQjklUKYpYX6%2FAiBkBAAt0uFO08ERrTyZ8NjhlrsqHzYQeYkZ3PO8oSLoJiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmLh3fWI6HpxbiCfKtwD3%2BiPfJz6Yz4Fo1mKiUJu%2F%2B8oZd3m7luf1kRDQQ9iXVdL%2FadIvnlwpEPeipuQHs8C%2FlJAP2u8EuYT%2BpeSXDmfF539gndji2lJHukC18wGhKT4nBcEXbgUfWoyMGLXmnyH6Jt9ugFsP1kB8chyDdZM3P1lNL4hehTGrFlwvDEa6dOiywpBBSSy81mXsLKG70Z%2FyP4IMCRitySPUMGnGaSGXeX8OfhpuK9NZaACLFl4LavP0BBkK1V7KCkURL3B0VO3%2FKeouN4VRDTX0%2BTQj0cNEmjZhJnG5dAoIFtn73iNi4P%2FTc10hhiGhKQ2NFSK1b6K2iFotBH4yggxzEzTYWnjjnuLxyBJs4kkTC%2FNSO1UuJkV290RnwY1C3u0oF5ti%2BOqFyr7cy2Avr4ivHIO%2FodYjCqcfxfOIHiD5RBAr16EIye5VGKOSTHom8BoNoTNhv3OWqVww83fTVG0hGdSR03sIGbGE7tFMOeY61OMUKJzAmwOlStsRa6ZfS%2BEI%2FHuquOC3aAqLwA2ANoTN2aiJmXtTDoJkgtyOgkWcQ7r1uub5xc8pJ5ioA4OX8fQGgumvDv9RW2KJBEWwnA9whHmlAkOKcL67bhSTtexjSq6Q84Vc%2FnDUejagbL84DTwqVIw2eKDvwY6pgG2I5IB9cn5HgJ15yDCmmeJLxlKU7zWoz2zogj0IXCQphXKYcU3Gw4jtWJkIlyFj5NOhG29H315lI5pI6Rg9hKSyLteiof%2B5cyRAkKKX1rIDEhwEk7ndI474K%2F%2BKiMEmKpv%2FYzFDAl3lb%2FFoOI7VJuWBJcEX5yWag4CGWWcNiaMwrcpWEeEkI47RNqmuE3GYhATroMls69dnqplXCuvE34QT2R%2B0o6M&X-Amz-Signature=0f26eb322ffb4c46ae6a5967b2c27415c096984ce3dc6279f281ff62988e7f96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOJNTPX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUaG7urxQGkSJNv8YggKnwIYVOD6X4IQjklUKYpYX6%2FAiBkBAAt0uFO08ERrTyZ8NjhlrsqHzYQeYkZ3PO8oSLoJiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmLh3fWI6HpxbiCfKtwD3%2BiPfJz6Yz4Fo1mKiUJu%2F%2B8oZd3m7luf1kRDQQ9iXVdL%2FadIvnlwpEPeipuQHs8C%2FlJAP2u8EuYT%2BpeSXDmfF539gndji2lJHukC18wGhKT4nBcEXbgUfWoyMGLXmnyH6Jt9ugFsP1kB8chyDdZM3P1lNL4hehTGrFlwvDEa6dOiywpBBSSy81mXsLKG70Z%2FyP4IMCRitySPUMGnGaSGXeX8OfhpuK9NZaACLFl4LavP0BBkK1V7KCkURL3B0VO3%2FKeouN4VRDTX0%2BTQj0cNEmjZhJnG5dAoIFtn73iNi4P%2FTc10hhiGhKQ2NFSK1b6K2iFotBH4yggxzEzTYWnjjnuLxyBJs4kkTC%2FNSO1UuJkV290RnwY1C3u0oF5ti%2BOqFyr7cy2Avr4ivHIO%2FodYjCqcfxfOIHiD5RBAr16EIye5VGKOSTHom8BoNoTNhv3OWqVww83fTVG0hGdSR03sIGbGE7tFMOeY61OMUKJzAmwOlStsRa6ZfS%2BEI%2FHuquOC3aAqLwA2ANoTN2aiJmXtTDoJkgtyOgkWcQ7r1uub5xc8pJ5ioA4OX8fQGgumvDv9RW2KJBEWwnA9whHmlAkOKcL67bhSTtexjSq6Q84Vc%2FnDUejagbL84DTwqVIw2eKDvwY6pgG2I5IB9cn5HgJ15yDCmmeJLxlKU7zWoz2zogj0IXCQphXKYcU3Gw4jtWJkIlyFj5NOhG29H315lI5pI6Rg9hKSyLteiof%2B5cyRAkKKX1rIDEhwEk7ndI474K%2F%2BKiMEmKpv%2FYzFDAl3lb%2FFoOI7VJuWBJcEX5yWag4CGWWcNiaMwrcpWEeEkI47RNqmuE3GYhATroMls69dnqplXCuvE34QT2R%2B0o6M&X-Amz-Signature=ee77fb1a521bc50b721dfc6ac1c78571a3e348910a36008ad6e376a7e84328a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
