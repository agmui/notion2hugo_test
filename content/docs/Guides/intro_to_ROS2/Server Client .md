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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYW65LY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFJ3h9wK%2F9tZxzP0rNDn5rg5QBwwrdgvd9frv5Ym9BgIhAKU6APSGfj%2FT0Kafyk0%2Bo8xzxUNaDb3l%2FghkRHhkTlSpKv8DCH8QABoMNjM3NDIzMTgzODA1IgwR4jD9ct7BGDx7EXwq3AMz334MGXLBJjW0ppjLGTT0oM%2BexK7BEo5qbhLE1jFbSbsCc36uI%2FRJm7BMBth04MXwrrfNQKTz2E9DoBS5ejXKUbqPiMsw4oWQAuW24sLoXfGCXxqIBccH11EWgXmO2qQaufHeIQi03vqvszlO8Zem2Na%2FrsqzM26Rum%2FQK43ZZl1MgHOGabBz89GpKpAiOQOGZnk%2FfN%2BfZdporAupU%2Fjdj4lXzBCGDvuvRoaGVRQUzMlQSQ%2Fx%2BvXnI%2FLuVRknFILuqFVXUKW79Igv2J6pe5bzkWMXiF3okAMBS%2FMiWuYhvv65PW8vyarSoa0LwhgS8yHvL0Lf0JS7vbyRqfM%2FlaItus6x0tMyv1qcpDDbIKMPAzjM4Zv6WVkLjolsD%2Fuku%2FCG%2F1x5H0H2Zg14x%2Fn6hGVRqDX%2B5fxt%2FKaIPqoV7UcHUaahPe7Lj%2FJlUYBO2vj4PJhyG2YibeJsm3sRRCg174n8WBw99Jz4XCVWuvtyvMMbFm6LBbxIKepIQAE8mtF1Dklr2liDfkrRje%2Fl6coAE5jR5F7Ojfn2FDHjzMNw3CkAKCx7RtzWu%2BwPeILyiEbWBx%2F2TFaEvQjISZJzxLt60MwAgweE64HHc0JDc3Wh9gksSyxetVl9PDU1C35aizDU7L%2FABjqkAYU2Dwt20PQOdXplz%2BgCXUI485uoh%2BODGJO5GNHGMEOA6zVDyNnYgy6669bFMt1hYvrldgrWRWyi1DQfdnbW8anbevCc0UtDrDEI1yxjhb6%2FoZP%2Fi0xwS67nxnvAlTNSwcOLDSAaARsAjWpwQXHhNEQKptTbJZYpLeyQ%2F148YxdXBFd67O%2B%2B6NvsRVVd%2FQ%2BVR%2FP5uXuP5vh5LH9QGHW6D1OapF6n&X-Amz-Signature=bc0b2f98a69587e8a54c8fad57f56f65c847c06d35918b4e002130900936693f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYW65LY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFJ3h9wK%2F9tZxzP0rNDn5rg5QBwwrdgvd9frv5Ym9BgIhAKU6APSGfj%2FT0Kafyk0%2Bo8xzxUNaDb3l%2FghkRHhkTlSpKv8DCH8QABoMNjM3NDIzMTgzODA1IgwR4jD9ct7BGDx7EXwq3AMz334MGXLBJjW0ppjLGTT0oM%2BexK7BEo5qbhLE1jFbSbsCc36uI%2FRJm7BMBth04MXwrrfNQKTz2E9DoBS5ejXKUbqPiMsw4oWQAuW24sLoXfGCXxqIBccH11EWgXmO2qQaufHeIQi03vqvszlO8Zem2Na%2FrsqzM26Rum%2FQK43ZZl1MgHOGabBz89GpKpAiOQOGZnk%2FfN%2BfZdporAupU%2Fjdj4lXzBCGDvuvRoaGVRQUzMlQSQ%2Fx%2BvXnI%2FLuVRknFILuqFVXUKW79Igv2J6pe5bzkWMXiF3okAMBS%2FMiWuYhvv65PW8vyarSoa0LwhgS8yHvL0Lf0JS7vbyRqfM%2FlaItus6x0tMyv1qcpDDbIKMPAzjM4Zv6WVkLjolsD%2Fuku%2FCG%2F1x5H0H2Zg14x%2Fn6hGVRqDX%2B5fxt%2FKaIPqoV7UcHUaahPe7Lj%2FJlUYBO2vj4PJhyG2YibeJsm3sRRCg174n8WBw99Jz4XCVWuvtyvMMbFm6LBbxIKepIQAE8mtF1Dklr2liDfkrRje%2Fl6coAE5jR5F7Ojfn2FDHjzMNw3CkAKCx7RtzWu%2BwPeILyiEbWBx%2F2TFaEvQjISZJzxLt60MwAgweE64HHc0JDc3Wh9gksSyxetVl9PDU1C35aizDU7L%2FABjqkAYU2Dwt20PQOdXplz%2BgCXUI485uoh%2BODGJO5GNHGMEOA6zVDyNnYgy6669bFMt1hYvrldgrWRWyi1DQfdnbW8anbevCc0UtDrDEI1yxjhb6%2FoZP%2Fi0xwS67nxnvAlTNSwcOLDSAaARsAjWpwQXHhNEQKptTbJZYpLeyQ%2F148YxdXBFd67O%2B%2B6NvsRVVd%2FQ%2BVR%2FP5uXuP5vh5LH9QGHW6D1OapF6n&X-Amz-Signature=e0ed8a0ff838220c7a7bf467512a98e05a448ab80c9d5589194c01c8d122872c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYW65LY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFJ3h9wK%2F9tZxzP0rNDn5rg5QBwwrdgvd9frv5Ym9BgIhAKU6APSGfj%2FT0Kafyk0%2Bo8xzxUNaDb3l%2FghkRHhkTlSpKv8DCH8QABoMNjM3NDIzMTgzODA1IgwR4jD9ct7BGDx7EXwq3AMz334MGXLBJjW0ppjLGTT0oM%2BexK7BEo5qbhLE1jFbSbsCc36uI%2FRJm7BMBth04MXwrrfNQKTz2E9DoBS5ejXKUbqPiMsw4oWQAuW24sLoXfGCXxqIBccH11EWgXmO2qQaufHeIQi03vqvszlO8Zem2Na%2FrsqzM26Rum%2FQK43ZZl1MgHOGabBz89GpKpAiOQOGZnk%2FfN%2BfZdporAupU%2Fjdj4lXzBCGDvuvRoaGVRQUzMlQSQ%2Fx%2BvXnI%2FLuVRknFILuqFVXUKW79Igv2J6pe5bzkWMXiF3okAMBS%2FMiWuYhvv65PW8vyarSoa0LwhgS8yHvL0Lf0JS7vbyRqfM%2FlaItus6x0tMyv1qcpDDbIKMPAzjM4Zv6WVkLjolsD%2Fuku%2FCG%2F1x5H0H2Zg14x%2Fn6hGVRqDX%2B5fxt%2FKaIPqoV7UcHUaahPe7Lj%2FJlUYBO2vj4PJhyG2YibeJsm3sRRCg174n8WBw99Jz4XCVWuvtyvMMbFm6LBbxIKepIQAE8mtF1Dklr2liDfkrRje%2Fl6coAE5jR5F7Ojfn2FDHjzMNw3CkAKCx7RtzWu%2BwPeILyiEbWBx%2F2TFaEvQjISZJzxLt60MwAgweE64HHc0JDc3Wh9gksSyxetVl9PDU1C35aizDU7L%2FABjqkAYU2Dwt20PQOdXplz%2BgCXUI485uoh%2BODGJO5GNHGMEOA6zVDyNnYgy6669bFMt1hYvrldgrWRWyi1DQfdnbW8anbevCc0UtDrDEI1yxjhb6%2FoZP%2Fi0xwS67nxnvAlTNSwcOLDSAaARsAjWpwQXHhNEQKptTbJZYpLeyQ%2F148YxdXBFd67O%2B%2B6NvsRVVd%2FQ%2BVR%2FP5uXuP5vh5LH9QGHW6D1OapF6n&X-Amz-Signature=0dbd4e15a0fce9e70c003e2ef981927fc53a51922499b657c6b1a9cf5f0eba8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYW65LY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFJ3h9wK%2F9tZxzP0rNDn5rg5QBwwrdgvd9frv5Ym9BgIhAKU6APSGfj%2FT0Kafyk0%2Bo8xzxUNaDb3l%2FghkRHhkTlSpKv8DCH8QABoMNjM3NDIzMTgzODA1IgwR4jD9ct7BGDx7EXwq3AMz334MGXLBJjW0ppjLGTT0oM%2BexK7BEo5qbhLE1jFbSbsCc36uI%2FRJm7BMBth04MXwrrfNQKTz2E9DoBS5ejXKUbqPiMsw4oWQAuW24sLoXfGCXxqIBccH11EWgXmO2qQaufHeIQi03vqvszlO8Zem2Na%2FrsqzM26Rum%2FQK43ZZl1MgHOGabBz89GpKpAiOQOGZnk%2FfN%2BfZdporAupU%2Fjdj4lXzBCGDvuvRoaGVRQUzMlQSQ%2Fx%2BvXnI%2FLuVRknFILuqFVXUKW79Igv2J6pe5bzkWMXiF3okAMBS%2FMiWuYhvv65PW8vyarSoa0LwhgS8yHvL0Lf0JS7vbyRqfM%2FlaItus6x0tMyv1qcpDDbIKMPAzjM4Zv6WVkLjolsD%2Fuku%2FCG%2F1x5H0H2Zg14x%2Fn6hGVRqDX%2B5fxt%2FKaIPqoV7UcHUaahPe7Lj%2FJlUYBO2vj4PJhyG2YibeJsm3sRRCg174n8WBw99Jz4XCVWuvtyvMMbFm6LBbxIKepIQAE8mtF1Dklr2liDfkrRje%2Fl6coAE5jR5F7Ojfn2FDHjzMNw3CkAKCx7RtzWu%2BwPeILyiEbWBx%2F2TFaEvQjISZJzxLt60MwAgweE64HHc0JDc3Wh9gksSyxetVl9PDU1C35aizDU7L%2FABjqkAYU2Dwt20PQOdXplz%2BgCXUI485uoh%2BODGJO5GNHGMEOA6zVDyNnYgy6669bFMt1hYvrldgrWRWyi1DQfdnbW8anbevCc0UtDrDEI1yxjhb6%2FoZP%2Fi0xwS67nxnvAlTNSwcOLDSAaARsAjWpwQXHhNEQKptTbJZYpLeyQ%2F148YxdXBFd67O%2B%2B6NvsRVVd%2FQ%2BVR%2FP5uXuP5vh5LH9QGHW6D1OapF6n&X-Amz-Signature=e77f5cc3d63e01c5604ead73effd8a06fb8d99b82739d195a6313d5f0eb42fee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYW65LY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFJ3h9wK%2F9tZxzP0rNDn5rg5QBwwrdgvd9frv5Ym9BgIhAKU6APSGfj%2FT0Kafyk0%2Bo8xzxUNaDb3l%2FghkRHhkTlSpKv8DCH8QABoMNjM3NDIzMTgzODA1IgwR4jD9ct7BGDx7EXwq3AMz334MGXLBJjW0ppjLGTT0oM%2BexK7BEo5qbhLE1jFbSbsCc36uI%2FRJm7BMBth04MXwrrfNQKTz2E9DoBS5ejXKUbqPiMsw4oWQAuW24sLoXfGCXxqIBccH11EWgXmO2qQaufHeIQi03vqvszlO8Zem2Na%2FrsqzM26Rum%2FQK43ZZl1MgHOGabBz89GpKpAiOQOGZnk%2FfN%2BfZdporAupU%2Fjdj4lXzBCGDvuvRoaGVRQUzMlQSQ%2Fx%2BvXnI%2FLuVRknFILuqFVXUKW79Igv2J6pe5bzkWMXiF3okAMBS%2FMiWuYhvv65PW8vyarSoa0LwhgS8yHvL0Lf0JS7vbyRqfM%2FlaItus6x0tMyv1qcpDDbIKMPAzjM4Zv6WVkLjolsD%2Fuku%2FCG%2F1x5H0H2Zg14x%2Fn6hGVRqDX%2B5fxt%2FKaIPqoV7UcHUaahPe7Lj%2FJlUYBO2vj4PJhyG2YibeJsm3sRRCg174n8WBw99Jz4XCVWuvtyvMMbFm6LBbxIKepIQAE8mtF1Dklr2liDfkrRje%2Fl6coAE5jR5F7Ojfn2FDHjzMNw3CkAKCx7RtzWu%2BwPeILyiEbWBx%2F2TFaEvQjISZJzxLt60MwAgweE64HHc0JDc3Wh9gksSyxetVl9PDU1C35aizDU7L%2FABjqkAYU2Dwt20PQOdXplz%2BgCXUI485uoh%2BODGJO5GNHGMEOA6zVDyNnYgy6669bFMt1hYvrldgrWRWyi1DQfdnbW8anbevCc0UtDrDEI1yxjhb6%2FoZP%2Fi0xwS67nxnvAlTNSwcOLDSAaARsAjWpwQXHhNEQKptTbJZYpLeyQ%2F148YxdXBFd67O%2B%2B6NvsRVVd%2FQ%2BVR%2FP5uXuP5vh5LH9QGHW6D1OapF6n&X-Amz-Signature=0b78867115c6cc6b2a3b3e99976833a9c7552564741d680c0f88366e7a60cb07&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
