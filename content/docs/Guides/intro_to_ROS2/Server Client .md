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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675N6U2TC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwvt2%2F2LrKM6lHCd8iILssFa5XpjpQYvpLPQeGmzjXUAiBMQJH8V88spBZGGvbohjmUBwqcrqLuMed7SM%2BlvEqtOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZrOU8kiH%2BbUjZ8WvKtwDEcDAE6GyWfrceGcZWmL5nbRb5NanEGzZqZ%2Fb16R9ZwKXAnSBRnqlp1CpOc%2FlVKtXoicVsnupgr8EEaAydONJcu55A3cQoEakJC%2BrXsQ2vbM%2FybpOa9C3RcDSMMZNhKY%2FRtG2ASRh%2FDYgI9oea7NhbBpLmCNuxvwnwG068hpK1xzCwuSEqzGyD4j50Y%2BXMHwsD2EGqOja4JeSta2z%2FTpCIRO6vhn5slU3%2F1LeaPEseovA7lN7xW6Frkw90W62i%2FHp%2BU9IMe2poSqy7LPqJ8bXpxijYpIVsgL9vBDVtDixerwScbJ4InWhphxRK4whn4hivIXA7lgrft5%2FPfzHaEwaBUiB2ZRvKzX8zc%2B1GY7iWdnVmJAk4mg3VOesMyKuW0i5LP0cVIEmFClqe0jEoi%2B0qN7xdCrM3V3xxYYYpOB47HIbWjqPtMfqoKGHaVtJdizz%2Ft9PvzddWInB0tmEoqTf%2BW1ENZ1%2BKPDcm2JDJyvA46%2FfnaEBAJOqTGKH%2BjOwZToWI8CrISpYbGrsdz%2BoWmsCByGFSgCzQ0sJ9cQ%2FYU0HhbXsS2%2FgBkd25SDD3ZE6yDa31hJpGJg6F3ZF5A4BIwNQI7sR8EM0QjpNgsR4336P5UkLCTOMWmYo26%2FdklAwuLTGwgY6pgGAXNF5Q94%2BPiLbmtLInGhaHX%2BGHaFT3u2YBPyq9LZejS3Y3kKKyuZYdUrQpa1Z59JYE%2FxgxOgN1CRnR1%2B4qshT1s6Hg%2Fz1Hx0EFjho9xYoLGXduHyNt%2BCRx7zbeeZtQsk3mXr8L9EW%2Bxs7O9VYYDP6Q9fK9RgsCzIySOF9H8o15yg4HCQfcRerA0okKkqzM3UrNqSMEkwiTTXHwpbI83O1vDxaEMm9&X-Amz-Signature=e8d0cee4e0e5c6496b9babc4a4567807927bdcc40d7dc4bcaf94db2cfc4448a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675N6U2TC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwvt2%2F2LrKM6lHCd8iILssFa5XpjpQYvpLPQeGmzjXUAiBMQJH8V88spBZGGvbohjmUBwqcrqLuMed7SM%2BlvEqtOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZrOU8kiH%2BbUjZ8WvKtwDEcDAE6GyWfrceGcZWmL5nbRb5NanEGzZqZ%2Fb16R9ZwKXAnSBRnqlp1CpOc%2FlVKtXoicVsnupgr8EEaAydONJcu55A3cQoEakJC%2BrXsQ2vbM%2FybpOa9C3RcDSMMZNhKY%2FRtG2ASRh%2FDYgI9oea7NhbBpLmCNuxvwnwG068hpK1xzCwuSEqzGyD4j50Y%2BXMHwsD2EGqOja4JeSta2z%2FTpCIRO6vhn5slU3%2F1LeaPEseovA7lN7xW6Frkw90W62i%2FHp%2BU9IMe2poSqy7LPqJ8bXpxijYpIVsgL9vBDVtDixerwScbJ4InWhphxRK4whn4hivIXA7lgrft5%2FPfzHaEwaBUiB2ZRvKzX8zc%2B1GY7iWdnVmJAk4mg3VOesMyKuW0i5LP0cVIEmFClqe0jEoi%2B0qN7xdCrM3V3xxYYYpOB47HIbWjqPtMfqoKGHaVtJdizz%2Ft9PvzddWInB0tmEoqTf%2BW1ENZ1%2BKPDcm2JDJyvA46%2FfnaEBAJOqTGKH%2BjOwZToWI8CrISpYbGrsdz%2BoWmsCByGFSgCzQ0sJ9cQ%2FYU0HhbXsS2%2FgBkd25SDD3ZE6yDa31hJpGJg6F3ZF5A4BIwNQI7sR8EM0QjpNgsR4336P5UkLCTOMWmYo26%2FdklAwuLTGwgY6pgGAXNF5Q94%2BPiLbmtLInGhaHX%2BGHaFT3u2YBPyq9LZejS3Y3kKKyuZYdUrQpa1Z59JYE%2FxgxOgN1CRnR1%2B4qshT1s6Hg%2Fz1Hx0EFjho9xYoLGXduHyNt%2BCRx7zbeeZtQsk3mXr8L9EW%2Bxs7O9VYYDP6Q9fK9RgsCzIySOF9H8o15yg4HCQfcRerA0okKkqzM3UrNqSMEkwiTTXHwpbI83O1vDxaEMm9&X-Amz-Signature=39d78ed046bad56817d2e519c613dbfc3231e10e444a758a49850c14f2b947a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675N6U2TC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwvt2%2F2LrKM6lHCd8iILssFa5XpjpQYvpLPQeGmzjXUAiBMQJH8V88spBZGGvbohjmUBwqcrqLuMed7SM%2BlvEqtOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZrOU8kiH%2BbUjZ8WvKtwDEcDAE6GyWfrceGcZWmL5nbRb5NanEGzZqZ%2Fb16R9ZwKXAnSBRnqlp1CpOc%2FlVKtXoicVsnupgr8EEaAydONJcu55A3cQoEakJC%2BrXsQ2vbM%2FybpOa9C3RcDSMMZNhKY%2FRtG2ASRh%2FDYgI9oea7NhbBpLmCNuxvwnwG068hpK1xzCwuSEqzGyD4j50Y%2BXMHwsD2EGqOja4JeSta2z%2FTpCIRO6vhn5slU3%2F1LeaPEseovA7lN7xW6Frkw90W62i%2FHp%2BU9IMe2poSqy7LPqJ8bXpxijYpIVsgL9vBDVtDixerwScbJ4InWhphxRK4whn4hivIXA7lgrft5%2FPfzHaEwaBUiB2ZRvKzX8zc%2B1GY7iWdnVmJAk4mg3VOesMyKuW0i5LP0cVIEmFClqe0jEoi%2B0qN7xdCrM3V3xxYYYpOB47HIbWjqPtMfqoKGHaVtJdizz%2Ft9PvzddWInB0tmEoqTf%2BW1ENZ1%2BKPDcm2JDJyvA46%2FfnaEBAJOqTGKH%2BjOwZToWI8CrISpYbGrsdz%2BoWmsCByGFSgCzQ0sJ9cQ%2FYU0HhbXsS2%2FgBkd25SDD3ZE6yDa31hJpGJg6F3ZF5A4BIwNQI7sR8EM0QjpNgsR4336P5UkLCTOMWmYo26%2FdklAwuLTGwgY6pgGAXNF5Q94%2BPiLbmtLInGhaHX%2BGHaFT3u2YBPyq9LZejS3Y3kKKyuZYdUrQpa1Z59JYE%2FxgxOgN1CRnR1%2B4qshT1s6Hg%2Fz1Hx0EFjho9xYoLGXduHyNt%2BCRx7zbeeZtQsk3mXr8L9EW%2Bxs7O9VYYDP6Q9fK9RgsCzIySOF9H8o15yg4HCQfcRerA0okKkqzM3UrNqSMEkwiTTXHwpbI83O1vDxaEMm9&X-Amz-Signature=00ebb2515ca8c738c352416aa1b020167d24e6d851cce715cfde721886b45564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675N6U2TC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwvt2%2F2LrKM6lHCd8iILssFa5XpjpQYvpLPQeGmzjXUAiBMQJH8V88spBZGGvbohjmUBwqcrqLuMed7SM%2BlvEqtOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZrOU8kiH%2BbUjZ8WvKtwDEcDAE6GyWfrceGcZWmL5nbRb5NanEGzZqZ%2Fb16R9ZwKXAnSBRnqlp1CpOc%2FlVKtXoicVsnupgr8EEaAydONJcu55A3cQoEakJC%2BrXsQ2vbM%2FybpOa9C3RcDSMMZNhKY%2FRtG2ASRh%2FDYgI9oea7NhbBpLmCNuxvwnwG068hpK1xzCwuSEqzGyD4j50Y%2BXMHwsD2EGqOja4JeSta2z%2FTpCIRO6vhn5slU3%2F1LeaPEseovA7lN7xW6Frkw90W62i%2FHp%2BU9IMe2poSqy7LPqJ8bXpxijYpIVsgL9vBDVtDixerwScbJ4InWhphxRK4whn4hivIXA7lgrft5%2FPfzHaEwaBUiB2ZRvKzX8zc%2B1GY7iWdnVmJAk4mg3VOesMyKuW0i5LP0cVIEmFClqe0jEoi%2B0qN7xdCrM3V3xxYYYpOB47HIbWjqPtMfqoKGHaVtJdizz%2Ft9PvzddWInB0tmEoqTf%2BW1ENZ1%2BKPDcm2JDJyvA46%2FfnaEBAJOqTGKH%2BjOwZToWI8CrISpYbGrsdz%2BoWmsCByGFSgCzQ0sJ9cQ%2FYU0HhbXsS2%2FgBkd25SDD3ZE6yDa31hJpGJg6F3ZF5A4BIwNQI7sR8EM0QjpNgsR4336P5UkLCTOMWmYo26%2FdklAwuLTGwgY6pgGAXNF5Q94%2BPiLbmtLInGhaHX%2BGHaFT3u2YBPyq9LZejS3Y3kKKyuZYdUrQpa1Z59JYE%2FxgxOgN1CRnR1%2B4qshT1s6Hg%2Fz1Hx0EFjho9xYoLGXduHyNt%2BCRx7zbeeZtQsk3mXr8L9EW%2Bxs7O9VYYDP6Q9fK9RgsCzIySOF9H8o15yg4HCQfcRerA0okKkqzM3UrNqSMEkwiTTXHwpbI83O1vDxaEMm9&X-Amz-Signature=c743442c1831c321580087d6ce5ccf341687cc9aab390c86a33b347eb42ddbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675N6U2TC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwvt2%2F2LrKM6lHCd8iILssFa5XpjpQYvpLPQeGmzjXUAiBMQJH8V88spBZGGvbohjmUBwqcrqLuMed7SM%2BlvEqtOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZrOU8kiH%2BbUjZ8WvKtwDEcDAE6GyWfrceGcZWmL5nbRb5NanEGzZqZ%2Fb16R9ZwKXAnSBRnqlp1CpOc%2FlVKtXoicVsnupgr8EEaAydONJcu55A3cQoEakJC%2BrXsQ2vbM%2FybpOa9C3RcDSMMZNhKY%2FRtG2ASRh%2FDYgI9oea7NhbBpLmCNuxvwnwG068hpK1xzCwuSEqzGyD4j50Y%2BXMHwsD2EGqOja4JeSta2z%2FTpCIRO6vhn5slU3%2F1LeaPEseovA7lN7xW6Frkw90W62i%2FHp%2BU9IMe2poSqy7LPqJ8bXpxijYpIVsgL9vBDVtDixerwScbJ4InWhphxRK4whn4hivIXA7lgrft5%2FPfzHaEwaBUiB2ZRvKzX8zc%2B1GY7iWdnVmJAk4mg3VOesMyKuW0i5LP0cVIEmFClqe0jEoi%2B0qN7xdCrM3V3xxYYYpOB47HIbWjqPtMfqoKGHaVtJdizz%2Ft9PvzddWInB0tmEoqTf%2BW1ENZ1%2BKPDcm2JDJyvA46%2FfnaEBAJOqTGKH%2BjOwZToWI8CrISpYbGrsdz%2BoWmsCByGFSgCzQ0sJ9cQ%2FYU0HhbXsS2%2FgBkd25SDD3ZE6yDa31hJpGJg6F3ZF5A4BIwNQI7sR8EM0QjpNgsR4336P5UkLCTOMWmYo26%2FdklAwuLTGwgY6pgGAXNF5Q94%2BPiLbmtLInGhaHX%2BGHaFT3u2YBPyq9LZejS3Y3kKKyuZYdUrQpa1Z59JYE%2FxgxOgN1CRnR1%2B4qshT1s6Hg%2Fz1Hx0EFjho9xYoLGXduHyNt%2BCRx7zbeeZtQsk3mXr8L9EW%2Bxs7O9VYYDP6Q9fK9RgsCzIySOF9H8o15yg4HCQfcRerA0okKkqzM3UrNqSMEkwiTTXHwpbI83O1vDxaEMm9&X-Amz-Signature=46e4b8c0f0e23ed912d369871852c6726a41a86ab4c60b6273b6a6f730934a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
