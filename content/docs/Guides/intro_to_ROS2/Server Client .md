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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AKQYG5H%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIkpogBr2pfLIzxdMDWJjDbj%2BDBDyl1Jfhu%2BQ%2BGb3n6AiEAoJeOTV9vT%2BjM4GlcP%2B43SynXgiX%2B3dhFcqva%2BFT9nHIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG8JYuRDaFMw3SYZaCrcA9WKHNqOau50P7mbnDeYYjoS1P55XXz7RaVw2F25ogOkpzWd2JxQnThFEwP1262CMHBc9D8zPIkokuhDTRZ0cjrn1GGardbn3BcYPdnnLl06%2Fe9Kw%2BwefZZ7NUc5aqyOg8D4mUs8rg%2BIB9%2FZzcso7R1fOl3OqFH5L090cikClH52FAPVQae53dDsoCmQIvJXCcm84EP%2Fw%2FwMS3XbVcnFYUCwabJp5XZnn6hdgtlC2X%2FF%2Fd7o1ambZe0t9qaX1JzM3lPf1AQMcwtsq48bw9th7MSpeYGigbPzAX06weXs%2F%2Bc53P6ZU%2BKe3NhdNE8nbLTDF9IK1PTqT6P57FiLx945vFSkLc7GdZQ5%2B9eAYmo5z2Q0wGTj%2Fip%2FCM%2Bo4jGxwITh9JxxYTiFj2tbv8OSXliX1L0nSoKQ9JWxMU9MLBVwT1IKKQy%2Bn86dGyrwcEgYVIgr%2Bo%2FZI4u0pKij3f2UlYFdekhvf4h%2BniY%2B%2B07V3fXvTXEobxJnCSqM%2B5Ku2TWnHNt%2FYDffM3XA691Cga4wpEi0P7lCnKlcPAcDnQYxVpXmU9aoeCElaxd%2Fksyy1O4Fi5vDiLY68DHxIeWswh%2FO23L%2F8AQlEt9zPYmi2crPxpK6LIzY01Fp7oIUQLmzhyQNMIe5kL8GOqUB9rpQTZtBEUGfIqPle6T%2BX%2FQE%2FHTNNgEdvK36pfwXPf70x2iG8dyeEQxURq5L9oZB0tsOlqbnhHje6VArjF7tQU0a4TAm9FWhOn5jgBCtZyv9MQp937E30iO6yDGWg5WR11QIZdCZJmrfqey%2F4PE%2F0DF9oMHmJWd090iigC1buMXEBt3U2MABNCNLs0aK6ysbRApSXuTebW42gJlBOPIDYU%2B1R9i1&X-Amz-Signature=0ccd710ed173e3a0995ef02bb6359bba47be9c105d89cb06daf438a356ad3a63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AKQYG5H%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIkpogBr2pfLIzxdMDWJjDbj%2BDBDyl1Jfhu%2BQ%2BGb3n6AiEAoJeOTV9vT%2BjM4GlcP%2B43SynXgiX%2B3dhFcqva%2BFT9nHIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG8JYuRDaFMw3SYZaCrcA9WKHNqOau50P7mbnDeYYjoS1P55XXz7RaVw2F25ogOkpzWd2JxQnThFEwP1262CMHBc9D8zPIkokuhDTRZ0cjrn1GGardbn3BcYPdnnLl06%2Fe9Kw%2BwefZZ7NUc5aqyOg8D4mUs8rg%2BIB9%2FZzcso7R1fOl3OqFH5L090cikClH52FAPVQae53dDsoCmQIvJXCcm84EP%2Fw%2FwMS3XbVcnFYUCwabJp5XZnn6hdgtlC2X%2FF%2Fd7o1ambZe0t9qaX1JzM3lPf1AQMcwtsq48bw9th7MSpeYGigbPzAX06weXs%2F%2Bc53P6ZU%2BKe3NhdNE8nbLTDF9IK1PTqT6P57FiLx945vFSkLc7GdZQ5%2B9eAYmo5z2Q0wGTj%2Fip%2FCM%2Bo4jGxwITh9JxxYTiFj2tbv8OSXliX1L0nSoKQ9JWxMU9MLBVwT1IKKQy%2Bn86dGyrwcEgYVIgr%2Bo%2FZI4u0pKij3f2UlYFdekhvf4h%2BniY%2B%2B07V3fXvTXEobxJnCSqM%2B5Ku2TWnHNt%2FYDffM3XA691Cga4wpEi0P7lCnKlcPAcDnQYxVpXmU9aoeCElaxd%2Fksyy1O4Fi5vDiLY68DHxIeWswh%2FO23L%2F8AQlEt9zPYmi2crPxpK6LIzY01Fp7oIUQLmzhyQNMIe5kL8GOqUB9rpQTZtBEUGfIqPle6T%2BX%2FQE%2FHTNNgEdvK36pfwXPf70x2iG8dyeEQxURq5L9oZB0tsOlqbnhHje6VArjF7tQU0a4TAm9FWhOn5jgBCtZyv9MQp937E30iO6yDGWg5WR11QIZdCZJmrfqey%2F4PE%2F0DF9oMHmJWd090iigC1buMXEBt3U2MABNCNLs0aK6ysbRApSXuTebW42gJlBOPIDYU%2B1R9i1&X-Amz-Signature=78378badf97edbd822ce254d645dd02011e869a7783a7697ed300fd5f0eabd76&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AKQYG5H%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIkpogBr2pfLIzxdMDWJjDbj%2BDBDyl1Jfhu%2BQ%2BGb3n6AiEAoJeOTV9vT%2BjM4GlcP%2B43SynXgiX%2B3dhFcqva%2BFT9nHIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG8JYuRDaFMw3SYZaCrcA9WKHNqOau50P7mbnDeYYjoS1P55XXz7RaVw2F25ogOkpzWd2JxQnThFEwP1262CMHBc9D8zPIkokuhDTRZ0cjrn1GGardbn3BcYPdnnLl06%2Fe9Kw%2BwefZZ7NUc5aqyOg8D4mUs8rg%2BIB9%2FZzcso7R1fOl3OqFH5L090cikClH52FAPVQae53dDsoCmQIvJXCcm84EP%2Fw%2FwMS3XbVcnFYUCwabJp5XZnn6hdgtlC2X%2FF%2Fd7o1ambZe0t9qaX1JzM3lPf1AQMcwtsq48bw9th7MSpeYGigbPzAX06weXs%2F%2Bc53P6ZU%2BKe3NhdNE8nbLTDF9IK1PTqT6P57FiLx945vFSkLc7GdZQ5%2B9eAYmo5z2Q0wGTj%2Fip%2FCM%2Bo4jGxwITh9JxxYTiFj2tbv8OSXliX1L0nSoKQ9JWxMU9MLBVwT1IKKQy%2Bn86dGyrwcEgYVIgr%2Bo%2FZI4u0pKij3f2UlYFdekhvf4h%2BniY%2B%2B07V3fXvTXEobxJnCSqM%2B5Ku2TWnHNt%2FYDffM3XA691Cga4wpEi0P7lCnKlcPAcDnQYxVpXmU9aoeCElaxd%2Fksyy1O4Fi5vDiLY68DHxIeWswh%2FO23L%2F8AQlEt9zPYmi2crPxpK6LIzY01Fp7oIUQLmzhyQNMIe5kL8GOqUB9rpQTZtBEUGfIqPle6T%2BX%2FQE%2FHTNNgEdvK36pfwXPf70x2iG8dyeEQxURq5L9oZB0tsOlqbnhHje6VArjF7tQU0a4TAm9FWhOn5jgBCtZyv9MQp937E30iO6yDGWg5WR11QIZdCZJmrfqey%2F4PE%2F0DF9oMHmJWd090iigC1buMXEBt3U2MABNCNLs0aK6ysbRApSXuTebW42gJlBOPIDYU%2B1R9i1&X-Amz-Signature=c5fa25ef19e6e73572497568f64ba4c2e343003e372e448bcc64be1e1e457cde&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AKQYG5H%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIkpogBr2pfLIzxdMDWJjDbj%2BDBDyl1Jfhu%2BQ%2BGb3n6AiEAoJeOTV9vT%2BjM4GlcP%2B43SynXgiX%2B3dhFcqva%2BFT9nHIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG8JYuRDaFMw3SYZaCrcA9WKHNqOau50P7mbnDeYYjoS1P55XXz7RaVw2F25ogOkpzWd2JxQnThFEwP1262CMHBc9D8zPIkokuhDTRZ0cjrn1GGardbn3BcYPdnnLl06%2Fe9Kw%2BwefZZ7NUc5aqyOg8D4mUs8rg%2BIB9%2FZzcso7R1fOl3OqFH5L090cikClH52FAPVQae53dDsoCmQIvJXCcm84EP%2Fw%2FwMS3XbVcnFYUCwabJp5XZnn6hdgtlC2X%2FF%2Fd7o1ambZe0t9qaX1JzM3lPf1AQMcwtsq48bw9th7MSpeYGigbPzAX06weXs%2F%2Bc53P6ZU%2BKe3NhdNE8nbLTDF9IK1PTqT6P57FiLx945vFSkLc7GdZQ5%2B9eAYmo5z2Q0wGTj%2Fip%2FCM%2Bo4jGxwITh9JxxYTiFj2tbv8OSXliX1L0nSoKQ9JWxMU9MLBVwT1IKKQy%2Bn86dGyrwcEgYVIgr%2Bo%2FZI4u0pKij3f2UlYFdekhvf4h%2BniY%2B%2B07V3fXvTXEobxJnCSqM%2B5Ku2TWnHNt%2FYDffM3XA691Cga4wpEi0P7lCnKlcPAcDnQYxVpXmU9aoeCElaxd%2Fksyy1O4Fi5vDiLY68DHxIeWswh%2FO23L%2F8AQlEt9zPYmi2crPxpK6LIzY01Fp7oIUQLmzhyQNMIe5kL8GOqUB9rpQTZtBEUGfIqPle6T%2BX%2FQE%2FHTNNgEdvK36pfwXPf70x2iG8dyeEQxURq5L9oZB0tsOlqbnhHje6VArjF7tQU0a4TAm9FWhOn5jgBCtZyv9MQp937E30iO6yDGWg5WR11QIZdCZJmrfqey%2F4PE%2F0DF9oMHmJWd090iigC1buMXEBt3U2MABNCNLs0aK6ysbRApSXuTebW42gJlBOPIDYU%2B1R9i1&X-Amz-Signature=f488b5419149ecd1f0c907a292d582cbda2edf19aabab777e91a9a6d23954e80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AKQYG5H%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIkpogBr2pfLIzxdMDWJjDbj%2BDBDyl1Jfhu%2BQ%2BGb3n6AiEAoJeOTV9vT%2BjM4GlcP%2B43SynXgiX%2B3dhFcqva%2BFT9nHIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG8JYuRDaFMw3SYZaCrcA9WKHNqOau50P7mbnDeYYjoS1P55XXz7RaVw2F25ogOkpzWd2JxQnThFEwP1262CMHBc9D8zPIkokuhDTRZ0cjrn1GGardbn3BcYPdnnLl06%2Fe9Kw%2BwefZZ7NUc5aqyOg8D4mUs8rg%2BIB9%2FZzcso7R1fOl3OqFH5L090cikClH52FAPVQae53dDsoCmQIvJXCcm84EP%2Fw%2FwMS3XbVcnFYUCwabJp5XZnn6hdgtlC2X%2FF%2Fd7o1ambZe0t9qaX1JzM3lPf1AQMcwtsq48bw9th7MSpeYGigbPzAX06weXs%2F%2Bc53P6ZU%2BKe3NhdNE8nbLTDF9IK1PTqT6P57FiLx945vFSkLc7GdZQ5%2B9eAYmo5z2Q0wGTj%2Fip%2FCM%2Bo4jGxwITh9JxxYTiFj2tbv8OSXliX1L0nSoKQ9JWxMU9MLBVwT1IKKQy%2Bn86dGyrwcEgYVIgr%2Bo%2FZI4u0pKij3f2UlYFdekhvf4h%2BniY%2B%2B07V3fXvTXEobxJnCSqM%2B5Ku2TWnHNt%2FYDffM3XA691Cga4wpEi0P7lCnKlcPAcDnQYxVpXmU9aoeCElaxd%2Fksyy1O4Fi5vDiLY68DHxIeWswh%2FO23L%2F8AQlEt9zPYmi2crPxpK6LIzY01Fp7oIUQLmzhyQNMIe5kL8GOqUB9rpQTZtBEUGfIqPle6T%2BX%2FQE%2FHTNNgEdvK36pfwXPf70x2iG8dyeEQxURq5L9oZB0tsOlqbnhHje6VArjF7tQU0a4TAm9FWhOn5jgBCtZyv9MQp937E30iO6yDGWg5WR11QIZdCZJmrfqey%2F4PE%2F0DF9oMHmJWd090iigC1buMXEBt3U2MABNCNLs0aK6ysbRApSXuTebW42gJlBOPIDYU%2B1R9i1&X-Amz-Signature=51031dbd6dad1c974c6346f3871b449e08e0e799f4849f24042cd1bebcc90ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
