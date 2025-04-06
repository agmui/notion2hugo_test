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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RITKMR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcRQVwh8N6OWPnj8HiSkku5DqC6ufYlbGUkyayU4fP7AiEA2PCUzqGGpFifZQ8cL%2BO%2FquUwuUX0VdAEYui4678njtAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDA8gP9qdfy5F4CMkuCrcA6CZuUptE32KOqxO2KAADWKORJ35sI2khYFlOGS%2FD2x%2FhizxS3YEQhisA7Chc8CPYJ3bOM1f9MeTZExaDJq2tyvxWu5yWmviITXiqsi29KjSeiqzWCnbBHTiKFwnHgLt%2FxYjItaReeqyMeNvvKvZAn33Msqri84bAlCDBddnIt3yH7J8KFKuMZfic50oZpxqzLhYj8MFR85sYahqjDGjqWqlDdcz3b2DnoqnKLSzscIL90yr%2BHqDD2IWHXiIMlm9zEhN27JlhZ641Rzqc6mNfHg5ZaOGMjflBnUGIBDRn2CMiv66R9GzI5D%2FhBBlOexWFtzNGDrpW7MLZajlu4rISJiNBluIKHCq%2FDjpG6WrGc73yAr%2BZEi%2B0ErUTY%2F4hmmnevwBGsoALsC0uGAnGMzuLIOu%2Bqu3vEjsyM14322i7Tal25dRQ%2BNbeijF36KDSR7WPJ4KiE2zUgS9h0gSWICZCgqd%2Bv8bn2EomyF6NyF8O%2BzFkYEpOcpZ0%2Bjmoat%2BJuBAyP71O3eUq7%2Fv63eccp1ayZ6hQR2Zs7%2BYGL%2Bg7V4bItVWj0rvto9WyDvX3hxPjc4E3TFMZjQg9kTAJHyW2DQlxQb0MBfr%2B865ZsQEl8hqOVjUIbOgPBZaavhJOMAzMOzAyL8GOqUBsJoI7tEWA1fietL7aNUtK4PaDY%2B9ueghqEIhAm6xX0MsJhzOB0jvwsv1eaOZ13QxAMEcnlmXjE79tYClVEPXnce2L64U0vM%2FD7IxOfren1TNLFkHkMXaoF5UC5jsGFhszmgMFpsHxW13eHNeWyHsTVHiKELAaMN6h%2BSFJ8kVdBu4qljj%2FD3Yz%2BVwEtre1e9x9vkdG5qN%2FRCmmvlZyip%2BdOpdXs%2Ft&X-Amz-Signature=86056e92ccafa47cf00476272c72a46165b8f4f7e8b0d80b11245dd80e055e49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RITKMR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcRQVwh8N6OWPnj8HiSkku5DqC6ufYlbGUkyayU4fP7AiEA2PCUzqGGpFifZQ8cL%2BO%2FquUwuUX0VdAEYui4678njtAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDA8gP9qdfy5F4CMkuCrcA6CZuUptE32KOqxO2KAADWKORJ35sI2khYFlOGS%2FD2x%2FhizxS3YEQhisA7Chc8CPYJ3bOM1f9MeTZExaDJq2tyvxWu5yWmviITXiqsi29KjSeiqzWCnbBHTiKFwnHgLt%2FxYjItaReeqyMeNvvKvZAn33Msqri84bAlCDBddnIt3yH7J8KFKuMZfic50oZpxqzLhYj8MFR85sYahqjDGjqWqlDdcz3b2DnoqnKLSzscIL90yr%2BHqDD2IWHXiIMlm9zEhN27JlhZ641Rzqc6mNfHg5ZaOGMjflBnUGIBDRn2CMiv66R9GzI5D%2FhBBlOexWFtzNGDrpW7MLZajlu4rISJiNBluIKHCq%2FDjpG6WrGc73yAr%2BZEi%2B0ErUTY%2F4hmmnevwBGsoALsC0uGAnGMzuLIOu%2Bqu3vEjsyM14322i7Tal25dRQ%2BNbeijF36KDSR7WPJ4KiE2zUgS9h0gSWICZCgqd%2Bv8bn2EomyF6NyF8O%2BzFkYEpOcpZ0%2Bjmoat%2BJuBAyP71O3eUq7%2Fv63eccp1ayZ6hQR2Zs7%2BYGL%2Bg7V4bItVWj0rvto9WyDvX3hxPjc4E3TFMZjQg9kTAJHyW2DQlxQb0MBfr%2B865ZsQEl8hqOVjUIbOgPBZaavhJOMAzMOzAyL8GOqUBsJoI7tEWA1fietL7aNUtK4PaDY%2B9ueghqEIhAm6xX0MsJhzOB0jvwsv1eaOZ13QxAMEcnlmXjE79tYClVEPXnce2L64U0vM%2FD7IxOfren1TNLFkHkMXaoF5UC5jsGFhszmgMFpsHxW13eHNeWyHsTVHiKELAaMN6h%2BSFJ8kVdBu4qljj%2FD3Yz%2BVwEtre1e9x9vkdG5qN%2FRCmmvlZyip%2BdOpdXs%2Ft&X-Amz-Signature=824d2cf57dd01a82e66aa762d7b325dcb966dd1b98d2ed7623c25a8922ac5570&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RITKMR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcRQVwh8N6OWPnj8HiSkku5DqC6ufYlbGUkyayU4fP7AiEA2PCUzqGGpFifZQ8cL%2BO%2FquUwuUX0VdAEYui4678njtAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDA8gP9qdfy5F4CMkuCrcA6CZuUptE32KOqxO2KAADWKORJ35sI2khYFlOGS%2FD2x%2FhizxS3YEQhisA7Chc8CPYJ3bOM1f9MeTZExaDJq2tyvxWu5yWmviITXiqsi29KjSeiqzWCnbBHTiKFwnHgLt%2FxYjItaReeqyMeNvvKvZAn33Msqri84bAlCDBddnIt3yH7J8KFKuMZfic50oZpxqzLhYj8MFR85sYahqjDGjqWqlDdcz3b2DnoqnKLSzscIL90yr%2BHqDD2IWHXiIMlm9zEhN27JlhZ641Rzqc6mNfHg5ZaOGMjflBnUGIBDRn2CMiv66R9GzI5D%2FhBBlOexWFtzNGDrpW7MLZajlu4rISJiNBluIKHCq%2FDjpG6WrGc73yAr%2BZEi%2B0ErUTY%2F4hmmnevwBGsoALsC0uGAnGMzuLIOu%2Bqu3vEjsyM14322i7Tal25dRQ%2BNbeijF36KDSR7WPJ4KiE2zUgS9h0gSWICZCgqd%2Bv8bn2EomyF6NyF8O%2BzFkYEpOcpZ0%2Bjmoat%2BJuBAyP71O3eUq7%2Fv63eccp1ayZ6hQR2Zs7%2BYGL%2Bg7V4bItVWj0rvto9WyDvX3hxPjc4E3TFMZjQg9kTAJHyW2DQlxQb0MBfr%2B865ZsQEl8hqOVjUIbOgPBZaavhJOMAzMOzAyL8GOqUBsJoI7tEWA1fietL7aNUtK4PaDY%2B9ueghqEIhAm6xX0MsJhzOB0jvwsv1eaOZ13QxAMEcnlmXjE79tYClVEPXnce2L64U0vM%2FD7IxOfren1TNLFkHkMXaoF5UC5jsGFhszmgMFpsHxW13eHNeWyHsTVHiKELAaMN6h%2BSFJ8kVdBu4qljj%2FD3Yz%2BVwEtre1e9x9vkdG5qN%2FRCmmvlZyip%2BdOpdXs%2Ft&X-Amz-Signature=6447efbf13a328d7624530a49920f8249ee0c9281dceb40a8239f18ec1dd1165&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RITKMR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcRQVwh8N6OWPnj8HiSkku5DqC6ufYlbGUkyayU4fP7AiEA2PCUzqGGpFifZQ8cL%2BO%2FquUwuUX0VdAEYui4678njtAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDA8gP9qdfy5F4CMkuCrcA6CZuUptE32KOqxO2KAADWKORJ35sI2khYFlOGS%2FD2x%2FhizxS3YEQhisA7Chc8CPYJ3bOM1f9MeTZExaDJq2tyvxWu5yWmviITXiqsi29KjSeiqzWCnbBHTiKFwnHgLt%2FxYjItaReeqyMeNvvKvZAn33Msqri84bAlCDBddnIt3yH7J8KFKuMZfic50oZpxqzLhYj8MFR85sYahqjDGjqWqlDdcz3b2DnoqnKLSzscIL90yr%2BHqDD2IWHXiIMlm9zEhN27JlhZ641Rzqc6mNfHg5ZaOGMjflBnUGIBDRn2CMiv66R9GzI5D%2FhBBlOexWFtzNGDrpW7MLZajlu4rISJiNBluIKHCq%2FDjpG6WrGc73yAr%2BZEi%2B0ErUTY%2F4hmmnevwBGsoALsC0uGAnGMzuLIOu%2Bqu3vEjsyM14322i7Tal25dRQ%2BNbeijF36KDSR7WPJ4KiE2zUgS9h0gSWICZCgqd%2Bv8bn2EomyF6NyF8O%2BzFkYEpOcpZ0%2Bjmoat%2BJuBAyP71O3eUq7%2Fv63eccp1ayZ6hQR2Zs7%2BYGL%2Bg7V4bItVWj0rvto9WyDvX3hxPjc4E3TFMZjQg9kTAJHyW2DQlxQb0MBfr%2B865ZsQEl8hqOVjUIbOgPBZaavhJOMAzMOzAyL8GOqUBsJoI7tEWA1fietL7aNUtK4PaDY%2B9ueghqEIhAm6xX0MsJhzOB0jvwsv1eaOZ13QxAMEcnlmXjE79tYClVEPXnce2L64U0vM%2FD7IxOfren1TNLFkHkMXaoF5UC5jsGFhszmgMFpsHxW13eHNeWyHsTVHiKELAaMN6h%2BSFJ8kVdBu4qljj%2FD3Yz%2BVwEtre1e9x9vkdG5qN%2FRCmmvlZyip%2BdOpdXs%2Ft&X-Amz-Signature=f33f15f8e93d66833a807fa34c18402287f58bb9b891778236778b18baa4035a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RITKMR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcRQVwh8N6OWPnj8HiSkku5DqC6ufYlbGUkyayU4fP7AiEA2PCUzqGGpFifZQ8cL%2BO%2FquUwuUX0VdAEYui4678njtAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDA8gP9qdfy5F4CMkuCrcA6CZuUptE32KOqxO2KAADWKORJ35sI2khYFlOGS%2FD2x%2FhizxS3YEQhisA7Chc8CPYJ3bOM1f9MeTZExaDJq2tyvxWu5yWmviITXiqsi29KjSeiqzWCnbBHTiKFwnHgLt%2FxYjItaReeqyMeNvvKvZAn33Msqri84bAlCDBddnIt3yH7J8KFKuMZfic50oZpxqzLhYj8MFR85sYahqjDGjqWqlDdcz3b2DnoqnKLSzscIL90yr%2BHqDD2IWHXiIMlm9zEhN27JlhZ641Rzqc6mNfHg5ZaOGMjflBnUGIBDRn2CMiv66R9GzI5D%2FhBBlOexWFtzNGDrpW7MLZajlu4rISJiNBluIKHCq%2FDjpG6WrGc73yAr%2BZEi%2B0ErUTY%2F4hmmnevwBGsoALsC0uGAnGMzuLIOu%2Bqu3vEjsyM14322i7Tal25dRQ%2BNbeijF36KDSR7WPJ4KiE2zUgS9h0gSWICZCgqd%2Bv8bn2EomyF6NyF8O%2BzFkYEpOcpZ0%2Bjmoat%2BJuBAyP71O3eUq7%2Fv63eccp1ayZ6hQR2Zs7%2BYGL%2Bg7V4bItVWj0rvto9WyDvX3hxPjc4E3TFMZjQg9kTAJHyW2DQlxQb0MBfr%2B865ZsQEl8hqOVjUIbOgPBZaavhJOMAzMOzAyL8GOqUBsJoI7tEWA1fietL7aNUtK4PaDY%2B9ueghqEIhAm6xX0MsJhzOB0jvwsv1eaOZ13QxAMEcnlmXjE79tYClVEPXnce2L64U0vM%2FD7IxOfren1TNLFkHkMXaoF5UC5jsGFhszmgMFpsHxW13eHNeWyHsTVHiKELAaMN6h%2BSFJ8kVdBu4qljj%2FD3Yz%2BVwEtre1e9x9vkdG5qN%2FRCmmvlZyip%2BdOpdXs%2Ft&X-Amz-Signature=1262d374eef096808374dbb186bde587b7598edc9019657267a0b41294962da2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
