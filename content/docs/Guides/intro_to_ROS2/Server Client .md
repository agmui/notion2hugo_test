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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTECUXB6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygZTrLrzgeTLE3dVr3T9bZT%2B%2B3UeJVDZK50n9UcQcfAiEA2OA%2F3jO656gNGBXOunfq8S1Qy%2F83gUT3X%2BVOEqEyWt4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJSWtyst5HN6Kxo2MyrcA0fUkdONjyps%2BIDktiol%2FxaUdU5gqoMygA5B1KQR5dZGfYGtHyhwkZCoAP7V%2FxMRcVsUkbbd2QAattaMoy06SNNK7oeLNGZKG2U%2FJsdJ9yO%2BdkBi%2Fy4DorCUFQg4BYm1aA7OyOruLaBrx2C5KAL6kS1z3d3QPHTwvaHw%2F%2FbuuCUzvYLmnAc7XOi2IBAJoK6sEzxz%2FjZwpMIRiUH7AHWHw3LxnLOiOd8KYUfCqodX0sZnN0eF4oqh9N3jrwuqqQjFsFY04%2BL%2FfKfxenzXScbSsCxdPHeH7VGP3tkf8QggSRleGvC1w4uo62nX70EaYl32Dd%2F7akpK0AIjNsfqbALxjcUnnnKYgHKu2wr42oq5bITtoRGk52sbEpEi4czzR9AmlWWLc7fI%2B4wcCLbTqKQjijFzcHYAoMaaXViVWIO0h%2Bea%2FCC7hxWHqAVrNJ3HoIDGn53GVkS8Ma4FmcGZtyl3nnkCj0GtRH%2Fum5ew%2BsIl05AE586s9HInDH3sfbWa5iLNa%2F3lRhNvLbW3GksaA03%2BdMwrcH40xe4QBjJZpSitxxe%2FE3eI7YVQicoiso1SjyQu%2B5NDHJa6SkusE5kTXoFl0qgHWkYAGErxVZkApU%2BzIFZ3Pa4G2BfX9jFszNx3MMqRjcIGOqUBmZxs0sRq0AKXjEUj58Y7P6dmsSqJerrVrgctmN5DEFj5%2BvPo5RITGqNAHV%2BlrZSmO7Ao7L6lUL0i6vkqWZvaMUiGGSLlL7dWWIKDeDG2%2BLrxXp5SwSC3BxbOI%2B5w6W3rjpKqyST18s55WFaLYK9q7RyKdSjzFAZPSWLPWjpRQXxgyg7W8lrTyWBeD3OMKD3Ma0igOjEcrAS%2BLtk2hQc%2Fg57YUeFX&X-Amz-Signature=e91f974fc2823a76be596ca79691dd1bc8fee196ac402eca2275134f16633ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTECUXB6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygZTrLrzgeTLE3dVr3T9bZT%2B%2B3UeJVDZK50n9UcQcfAiEA2OA%2F3jO656gNGBXOunfq8S1Qy%2F83gUT3X%2BVOEqEyWt4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJSWtyst5HN6Kxo2MyrcA0fUkdONjyps%2BIDktiol%2FxaUdU5gqoMygA5B1KQR5dZGfYGtHyhwkZCoAP7V%2FxMRcVsUkbbd2QAattaMoy06SNNK7oeLNGZKG2U%2FJsdJ9yO%2BdkBi%2Fy4DorCUFQg4BYm1aA7OyOruLaBrx2C5KAL6kS1z3d3QPHTwvaHw%2F%2FbuuCUzvYLmnAc7XOi2IBAJoK6sEzxz%2FjZwpMIRiUH7AHWHw3LxnLOiOd8KYUfCqodX0sZnN0eF4oqh9N3jrwuqqQjFsFY04%2BL%2FfKfxenzXScbSsCxdPHeH7VGP3tkf8QggSRleGvC1w4uo62nX70EaYl32Dd%2F7akpK0AIjNsfqbALxjcUnnnKYgHKu2wr42oq5bITtoRGk52sbEpEi4czzR9AmlWWLc7fI%2B4wcCLbTqKQjijFzcHYAoMaaXViVWIO0h%2Bea%2FCC7hxWHqAVrNJ3HoIDGn53GVkS8Ma4FmcGZtyl3nnkCj0GtRH%2Fum5ew%2BsIl05AE586s9HInDH3sfbWa5iLNa%2F3lRhNvLbW3GksaA03%2BdMwrcH40xe4QBjJZpSitxxe%2FE3eI7YVQicoiso1SjyQu%2B5NDHJa6SkusE5kTXoFl0qgHWkYAGErxVZkApU%2BzIFZ3Pa4G2BfX9jFszNx3MMqRjcIGOqUBmZxs0sRq0AKXjEUj58Y7P6dmsSqJerrVrgctmN5DEFj5%2BvPo5RITGqNAHV%2BlrZSmO7Ao7L6lUL0i6vkqWZvaMUiGGSLlL7dWWIKDeDG2%2BLrxXp5SwSC3BxbOI%2B5w6W3rjpKqyST18s55WFaLYK9q7RyKdSjzFAZPSWLPWjpRQXxgyg7W8lrTyWBeD3OMKD3Ma0igOjEcrAS%2BLtk2hQc%2Fg57YUeFX&X-Amz-Signature=374497944db1a6e95b6f967b7e73ad071e4ae19d1292d663c59a5f11f0d29459&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTECUXB6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygZTrLrzgeTLE3dVr3T9bZT%2B%2B3UeJVDZK50n9UcQcfAiEA2OA%2F3jO656gNGBXOunfq8S1Qy%2F83gUT3X%2BVOEqEyWt4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJSWtyst5HN6Kxo2MyrcA0fUkdONjyps%2BIDktiol%2FxaUdU5gqoMygA5B1KQR5dZGfYGtHyhwkZCoAP7V%2FxMRcVsUkbbd2QAattaMoy06SNNK7oeLNGZKG2U%2FJsdJ9yO%2BdkBi%2Fy4DorCUFQg4BYm1aA7OyOruLaBrx2C5KAL6kS1z3d3QPHTwvaHw%2F%2FbuuCUzvYLmnAc7XOi2IBAJoK6sEzxz%2FjZwpMIRiUH7AHWHw3LxnLOiOd8KYUfCqodX0sZnN0eF4oqh9N3jrwuqqQjFsFY04%2BL%2FfKfxenzXScbSsCxdPHeH7VGP3tkf8QggSRleGvC1w4uo62nX70EaYl32Dd%2F7akpK0AIjNsfqbALxjcUnnnKYgHKu2wr42oq5bITtoRGk52sbEpEi4czzR9AmlWWLc7fI%2B4wcCLbTqKQjijFzcHYAoMaaXViVWIO0h%2Bea%2FCC7hxWHqAVrNJ3HoIDGn53GVkS8Ma4FmcGZtyl3nnkCj0GtRH%2Fum5ew%2BsIl05AE586s9HInDH3sfbWa5iLNa%2F3lRhNvLbW3GksaA03%2BdMwrcH40xe4QBjJZpSitxxe%2FE3eI7YVQicoiso1SjyQu%2B5NDHJa6SkusE5kTXoFl0qgHWkYAGErxVZkApU%2BzIFZ3Pa4G2BfX9jFszNx3MMqRjcIGOqUBmZxs0sRq0AKXjEUj58Y7P6dmsSqJerrVrgctmN5DEFj5%2BvPo5RITGqNAHV%2BlrZSmO7Ao7L6lUL0i6vkqWZvaMUiGGSLlL7dWWIKDeDG2%2BLrxXp5SwSC3BxbOI%2B5w6W3rjpKqyST18s55WFaLYK9q7RyKdSjzFAZPSWLPWjpRQXxgyg7W8lrTyWBeD3OMKD3Ma0igOjEcrAS%2BLtk2hQc%2Fg57YUeFX&X-Amz-Signature=d7db4bdadd01e1b018f55198a784ef45658134f3c9b1abf1022085e993065ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTECUXB6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygZTrLrzgeTLE3dVr3T9bZT%2B%2B3UeJVDZK50n9UcQcfAiEA2OA%2F3jO656gNGBXOunfq8S1Qy%2F83gUT3X%2BVOEqEyWt4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJSWtyst5HN6Kxo2MyrcA0fUkdONjyps%2BIDktiol%2FxaUdU5gqoMygA5B1KQR5dZGfYGtHyhwkZCoAP7V%2FxMRcVsUkbbd2QAattaMoy06SNNK7oeLNGZKG2U%2FJsdJ9yO%2BdkBi%2Fy4DorCUFQg4BYm1aA7OyOruLaBrx2C5KAL6kS1z3d3QPHTwvaHw%2F%2FbuuCUzvYLmnAc7XOi2IBAJoK6sEzxz%2FjZwpMIRiUH7AHWHw3LxnLOiOd8KYUfCqodX0sZnN0eF4oqh9N3jrwuqqQjFsFY04%2BL%2FfKfxenzXScbSsCxdPHeH7VGP3tkf8QggSRleGvC1w4uo62nX70EaYl32Dd%2F7akpK0AIjNsfqbALxjcUnnnKYgHKu2wr42oq5bITtoRGk52sbEpEi4czzR9AmlWWLc7fI%2B4wcCLbTqKQjijFzcHYAoMaaXViVWIO0h%2Bea%2FCC7hxWHqAVrNJ3HoIDGn53GVkS8Ma4FmcGZtyl3nnkCj0GtRH%2Fum5ew%2BsIl05AE586s9HInDH3sfbWa5iLNa%2F3lRhNvLbW3GksaA03%2BdMwrcH40xe4QBjJZpSitxxe%2FE3eI7YVQicoiso1SjyQu%2B5NDHJa6SkusE5kTXoFl0qgHWkYAGErxVZkApU%2BzIFZ3Pa4G2BfX9jFszNx3MMqRjcIGOqUBmZxs0sRq0AKXjEUj58Y7P6dmsSqJerrVrgctmN5DEFj5%2BvPo5RITGqNAHV%2BlrZSmO7Ao7L6lUL0i6vkqWZvaMUiGGSLlL7dWWIKDeDG2%2BLrxXp5SwSC3BxbOI%2B5w6W3rjpKqyST18s55WFaLYK9q7RyKdSjzFAZPSWLPWjpRQXxgyg7W8lrTyWBeD3OMKD3Ma0igOjEcrAS%2BLtk2hQc%2Fg57YUeFX&X-Amz-Signature=9929d6437be26224010ee449738e85fe5d14f55cdc559aa25b749ddd0f2dabba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTECUXB6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygZTrLrzgeTLE3dVr3T9bZT%2B%2B3UeJVDZK50n9UcQcfAiEA2OA%2F3jO656gNGBXOunfq8S1Qy%2F83gUT3X%2BVOEqEyWt4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJSWtyst5HN6Kxo2MyrcA0fUkdONjyps%2BIDktiol%2FxaUdU5gqoMygA5B1KQR5dZGfYGtHyhwkZCoAP7V%2FxMRcVsUkbbd2QAattaMoy06SNNK7oeLNGZKG2U%2FJsdJ9yO%2BdkBi%2Fy4DorCUFQg4BYm1aA7OyOruLaBrx2C5KAL6kS1z3d3QPHTwvaHw%2F%2FbuuCUzvYLmnAc7XOi2IBAJoK6sEzxz%2FjZwpMIRiUH7AHWHw3LxnLOiOd8KYUfCqodX0sZnN0eF4oqh9N3jrwuqqQjFsFY04%2BL%2FfKfxenzXScbSsCxdPHeH7VGP3tkf8QggSRleGvC1w4uo62nX70EaYl32Dd%2F7akpK0AIjNsfqbALxjcUnnnKYgHKu2wr42oq5bITtoRGk52sbEpEi4czzR9AmlWWLc7fI%2B4wcCLbTqKQjijFzcHYAoMaaXViVWIO0h%2Bea%2FCC7hxWHqAVrNJ3HoIDGn53GVkS8Ma4FmcGZtyl3nnkCj0GtRH%2Fum5ew%2BsIl05AE586s9HInDH3sfbWa5iLNa%2F3lRhNvLbW3GksaA03%2BdMwrcH40xe4QBjJZpSitxxe%2FE3eI7YVQicoiso1SjyQu%2B5NDHJa6SkusE5kTXoFl0qgHWkYAGErxVZkApU%2BzIFZ3Pa4G2BfX9jFszNx3MMqRjcIGOqUBmZxs0sRq0AKXjEUj58Y7P6dmsSqJerrVrgctmN5DEFj5%2BvPo5RITGqNAHV%2BlrZSmO7Ao7L6lUL0i6vkqWZvaMUiGGSLlL7dWWIKDeDG2%2BLrxXp5SwSC3BxbOI%2B5w6W3rjpKqyST18s55WFaLYK9q7RyKdSjzFAZPSWLPWjpRQXxgyg7W8lrTyWBeD3OMKD3Ma0igOjEcrAS%2BLtk2hQc%2Fg57YUeFX&X-Amz-Signature=61eadf2807d7d483e5662d69241894b1847128307691dbd186d7e5dcff3a17ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
