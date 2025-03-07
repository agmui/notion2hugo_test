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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHD7B76I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvoSrQRaU3bcpw%2Fdm2YuHDdRZUOfWAWIah%2FsgdCg84bAiEAyei70ooHjbLRo%2FQxUWPe69%2Fh6VUtBkeyFFryUUgXvKQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBbHPuvY6OZqQvW%2FqyrcA%2F%2B7e%2BVikmsUs9C0711W89A1wN0dyCFqsCqYgHQ0SH%2BJhpL2Ko%2FTRAfkD%2B3UfBNMS2uLHUsHSMWp%2FKt0FYmA8AD2jhqpW9t7V6fsmrnu6yjXGUUXvLaP0aFQ4eepbAh5ksSfyt%2FMnH6sAw2kFrur%2BdUQfzaCDlGWW8y%2B9Rzfssdl2ZNLQVG3hPt9jRArsDUxyuGr%2FTm0q8nmPpDB6RTE01g2T48MLauUP7xH%2FV%2BvlW0%2Fe6rneycW%2F7vw%2BYMVsUlwoo6cQKq0wEuUactAfATpAdFOiw4XkZDrgP%2FGuP%2BPMuB3z6zCHYnVKIZcD8bRH9%2BzqcVQ5H0euC7LThEBCjPeIKt%2F4S3L3qC4k09pE7ZHyj7qfO3IVNxPVPCuSfPkqkpfU2hnfYepQh5Tjp2uEEu5Xl16GwplWn4pTRSuiIOhKUCL7wXX4xl5VKSJLWxAgXO2O2n6R7aDZlUyIVw%2FQ2xV4eIICxGyj4Rcl7spNKdznj%2B4G5Lp3SVPliXteEmNrwl3yxI1SX2428zkiZ0OTwXHQvYtKnQ7J%2Bgh%2BBu43nXideKedbcDdLYDErx7Ss%2FluYiN3uX0SY9oUgsPb01WzAWAs6zuXAE8clgZDdMIp7AZfEC9HQj9VxfAT9ikvVE%2BMJmpq74GOqUB6EHDwUlyyWcYIfTzPdJs5Gx3RfapSSbeykDTXGz9sdimdqa3w0gO4xO7yvG6e9Zh%2BqW48Pi%2B4axx2j5vYg%2FquLOnBias%2FhmcIwi4wg1LVWv7ik4I5Vw8JR4AXfUpoIi3N88UjIvZnN1UEVObMQBj8UOBLOSMAxP5pU0esZo%2F0JuIbSphfxFvybleVI1y6nDjEDXlCImxy7i%2BzTGtMeKI4qC17MXd&X-Amz-Signature=c85e2afef0f46bf83a75f3bb25be13f9520eee93c4e405065d1763cad74958b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHD7B76I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvoSrQRaU3bcpw%2Fdm2YuHDdRZUOfWAWIah%2FsgdCg84bAiEAyei70ooHjbLRo%2FQxUWPe69%2Fh6VUtBkeyFFryUUgXvKQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBbHPuvY6OZqQvW%2FqyrcA%2F%2B7e%2BVikmsUs9C0711W89A1wN0dyCFqsCqYgHQ0SH%2BJhpL2Ko%2FTRAfkD%2B3UfBNMS2uLHUsHSMWp%2FKt0FYmA8AD2jhqpW9t7V6fsmrnu6yjXGUUXvLaP0aFQ4eepbAh5ksSfyt%2FMnH6sAw2kFrur%2BdUQfzaCDlGWW8y%2B9Rzfssdl2ZNLQVG3hPt9jRArsDUxyuGr%2FTm0q8nmPpDB6RTE01g2T48MLauUP7xH%2FV%2BvlW0%2Fe6rneycW%2F7vw%2BYMVsUlwoo6cQKq0wEuUactAfATpAdFOiw4XkZDrgP%2FGuP%2BPMuB3z6zCHYnVKIZcD8bRH9%2BzqcVQ5H0euC7LThEBCjPeIKt%2F4S3L3qC4k09pE7ZHyj7qfO3IVNxPVPCuSfPkqkpfU2hnfYepQh5Tjp2uEEu5Xl16GwplWn4pTRSuiIOhKUCL7wXX4xl5VKSJLWxAgXO2O2n6R7aDZlUyIVw%2FQ2xV4eIICxGyj4Rcl7spNKdznj%2B4G5Lp3SVPliXteEmNrwl3yxI1SX2428zkiZ0OTwXHQvYtKnQ7J%2Bgh%2BBu43nXideKedbcDdLYDErx7Ss%2FluYiN3uX0SY9oUgsPb01WzAWAs6zuXAE8clgZDdMIp7AZfEC9HQj9VxfAT9ikvVE%2BMJmpq74GOqUB6EHDwUlyyWcYIfTzPdJs5Gx3RfapSSbeykDTXGz9sdimdqa3w0gO4xO7yvG6e9Zh%2BqW48Pi%2B4axx2j5vYg%2FquLOnBias%2FhmcIwi4wg1LVWv7ik4I5Vw8JR4AXfUpoIi3N88UjIvZnN1UEVObMQBj8UOBLOSMAxP5pU0esZo%2F0JuIbSphfxFvybleVI1y6nDjEDXlCImxy7i%2BzTGtMeKI4qC17MXd&X-Amz-Signature=7d3d5c12aa26a48efb1e93c87b0547913f2641889db47e9b8c0a705e6d2557f5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHD7B76I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvoSrQRaU3bcpw%2Fdm2YuHDdRZUOfWAWIah%2FsgdCg84bAiEAyei70ooHjbLRo%2FQxUWPe69%2Fh6VUtBkeyFFryUUgXvKQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBbHPuvY6OZqQvW%2FqyrcA%2F%2B7e%2BVikmsUs9C0711W89A1wN0dyCFqsCqYgHQ0SH%2BJhpL2Ko%2FTRAfkD%2B3UfBNMS2uLHUsHSMWp%2FKt0FYmA8AD2jhqpW9t7V6fsmrnu6yjXGUUXvLaP0aFQ4eepbAh5ksSfyt%2FMnH6sAw2kFrur%2BdUQfzaCDlGWW8y%2B9Rzfssdl2ZNLQVG3hPt9jRArsDUxyuGr%2FTm0q8nmPpDB6RTE01g2T48MLauUP7xH%2FV%2BvlW0%2Fe6rneycW%2F7vw%2BYMVsUlwoo6cQKq0wEuUactAfATpAdFOiw4XkZDrgP%2FGuP%2BPMuB3z6zCHYnVKIZcD8bRH9%2BzqcVQ5H0euC7LThEBCjPeIKt%2F4S3L3qC4k09pE7ZHyj7qfO3IVNxPVPCuSfPkqkpfU2hnfYepQh5Tjp2uEEu5Xl16GwplWn4pTRSuiIOhKUCL7wXX4xl5VKSJLWxAgXO2O2n6R7aDZlUyIVw%2FQ2xV4eIICxGyj4Rcl7spNKdznj%2B4G5Lp3SVPliXteEmNrwl3yxI1SX2428zkiZ0OTwXHQvYtKnQ7J%2Bgh%2BBu43nXideKedbcDdLYDErx7Ss%2FluYiN3uX0SY9oUgsPb01WzAWAs6zuXAE8clgZDdMIp7AZfEC9HQj9VxfAT9ikvVE%2BMJmpq74GOqUB6EHDwUlyyWcYIfTzPdJs5Gx3RfapSSbeykDTXGz9sdimdqa3w0gO4xO7yvG6e9Zh%2BqW48Pi%2B4axx2j5vYg%2FquLOnBias%2FhmcIwi4wg1LVWv7ik4I5Vw8JR4AXfUpoIi3N88UjIvZnN1UEVObMQBj8UOBLOSMAxP5pU0esZo%2F0JuIbSphfxFvybleVI1y6nDjEDXlCImxy7i%2BzTGtMeKI4qC17MXd&X-Amz-Signature=5f9883d20b047ee9683f34747dd43683d33c3c3fa910ff33d47d12525e68176b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHD7B76I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvoSrQRaU3bcpw%2Fdm2YuHDdRZUOfWAWIah%2FsgdCg84bAiEAyei70ooHjbLRo%2FQxUWPe69%2Fh6VUtBkeyFFryUUgXvKQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBbHPuvY6OZqQvW%2FqyrcA%2F%2B7e%2BVikmsUs9C0711W89A1wN0dyCFqsCqYgHQ0SH%2BJhpL2Ko%2FTRAfkD%2B3UfBNMS2uLHUsHSMWp%2FKt0FYmA8AD2jhqpW9t7V6fsmrnu6yjXGUUXvLaP0aFQ4eepbAh5ksSfyt%2FMnH6sAw2kFrur%2BdUQfzaCDlGWW8y%2B9Rzfssdl2ZNLQVG3hPt9jRArsDUxyuGr%2FTm0q8nmPpDB6RTE01g2T48MLauUP7xH%2FV%2BvlW0%2Fe6rneycW%2F7vw%2BYMVsUlwoo6cQKq0wEuUactAfATpAdFOiw4XkZDrgP%2FGuP%2BPMuB3z6zCHYnVKIZcD8bRH9%2BzqcVQ5H0euC7LThEBCjPeIKt%2F4S3L3qC4k09pE7ZHyj7qfO3IVNxPVPCuSfPkqkpfU2hnfYepQh5Tjp2uEEu5Xl16GwplWn4pTRSuiIOhKUCL7wXX4xl5VKSJLWxAgXO2O2n6R7aDZlUyIVw%2FQ2xV4eIICxGyj4Rcl7spNKdznj%2B4G5Lp3SVPliXteEmNrwl3yxI1SX2428zkiZ0OTwXHQvYtKnQ7J%2Bgh%2BBu43nXideKedbcDdLYDErx7Ss%2FluYiN3uX0SY9oUgsPb01WzAWAs6zuXAE8clgZDdMIp7AZfEC9HQj9VxfAT9ikvVE%2BMJmpq74GOqUB6EHDwUlyyWcYIfTzPdJs5Gx3RfapSSbeykDTXGz9sdimdqa3w0gO4xO7yvG6e9Zh%2BqW48Pi%2B4axx2j5vYg%2FquLOnBias%2FhmcIwi4wg1LVWv7ik4I5Vw8JR4AXfUpoIi3N88UjIvZnN1UEVObMQBj8UOBLOSMAxP5pU0esZo%2F0JuIbSphfxFvybleVI1y6nDjEDXlCImxy7i%2BzTGtMeKI4qC17MXd&X-Amz-Signature=64a8bf3187671493393e86dbb45037b420aa29e34539f65c94045e5defe696a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHD7B76I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvoSrQRaU3bcpw%2Fdm2YuHDdRZUOfWAWIah%2FsgdCg84bAiEAyei70ooHjbLRo%2FQxUWPe69%2Fh6VUtBkeyFFryUUgXvKQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBbHPuvY6OZqQvW%2FqyrcA%2F%2B7e%2BVikmsUs9C0711W89A1wN0dyCFqsCqYgHQ0SH%2BJhpL2Ko%2FTRAfkD%2B3UfBNMS2uLHUsHSMWp%2FKt0FYmA8AD2jhqpW9t7V6fsmrnu6yjXGUUXvLaP0aFQ4eepbAh5ksSfyt%2FMnH6sAw2kFrur%2BdUQfzaCDlGWW8y%2B9Rzfssdl2ZNLQVG3hPt9jRArsDUxyuGr%2FTm0q8nmPpDB6RTE01g2T48MLauUP7xH%2FV%2BvlW0%2Fe6rneycW%2F7vw%2BYMVsUlwoo6cQKq0wEuUactAfATpAdFOiw4XkZDrgP%2FGuP%2BPMuB3z6zCHYnVKIZcD8bRH9%2BzqcVQ5H0euC7LThEBCjPeIKt%2F4S3L3qC4k09pE7ZHyj7qfO3IVNxPVPCuSfPkqkpfU2hnfYepQh5Tjp2uEEu5Xl16GwplWn4pTRSuiIOhKUCL7wXX4xl5VKSJLWxAgXO2O2n6R7aDZlUyIVw%2FQ2xV4eIICxGyj4Rcl7spNKdznj%2B4G5Lp3SVPliXteEmNrwl3yxI1SX2428zkiZ0OTwXHQvYtKnQ7J%2Bgh%2BBu43nXideKedbcDdLYDErx7Ss%2FluYiN3uX0SY9oUgsPb01WzAWAs6zuXAE8clgZDdMIp7AZfEC9HQj9VxfAT9ikvVE%2BMJmpq74GOqUB6EHDwUlyyWcYIfTzPdJs5Gx3RfapSSbeykDTXGz9sdimdqa3w0gO4xO7yvG6e9Zh%2BqW48Pi%2B4axx2j5vYg%2FquLOnBias%2FhmcIwi4wg1LVWv7ik4I5Vw8JR4AXfUpoIi3N88UjIvZnN1UEVObMQBj8UOBLOSMAxP5pU0esZo%2F0JuIbSphfxFvybleVI1y6nDjEDXlCImxy7i%2BzTGtMeKI4qC17MXd&X-Amz-Signature=2eeb7a1b4c78b0bc09ba7fb894936b19b61cdac194e519fa41819ed678b617a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
