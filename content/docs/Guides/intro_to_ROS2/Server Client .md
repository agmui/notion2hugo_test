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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U422GPOC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXaQN%2BF9HAJe7%2BsBv0u5NuxUBy4rP2XG3YxhSzCQ7bgAiEA7ahvpZrlu6jBlOOhvnISFYGw4e87LGtCZ%2FQYBSH3EQQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsK%2BqVbZTzCS9CddyrcAwlXmKelvKLsshPIS5pmxapq6tSwgj8sZAoBkVByvrOmtd0ECTJ4zeeJiNyOG6cOZ7tC9V5mI02HA4VjsPY0sOQQcfWlewv5LKYzflo6wVVkM%2FpgsDSqWfeqk1GHkDXKqcH6j%2FTNdQV3tT8A69tOloNCbpdM7HnrKWXtYLGZtDS9%2BGK%2Fjha6zQcxK77yGOhMvcYDyecA8z2mcUmBR7ujy1CS7iupd9WHPlwS0ElI%2FjEORnR%2FCt7YYSOsCIuj8CYNqR3JrAGt4FiGWZyIB4bMJIrSIi8junsnV0H3DljXG4tKBlC%2BAv82GcJzj%2FfY%2B7%2Bo383MVYpJ7EkYBCYwVdIctMrxGx2EkN07W4PdEqR1Ga7BL%2FzuTqQUeXkeyX%2B3mboMe4YlbhwXoLkFiz39CHXY3%2BpqWSEU51nS9z0memwsZzqflN%2BljPuvgOhSE95YyFR70VeItMi%2Fev%2FvhXMAEmBSFB6RZuuEkDgsOtvJoAzj19HSd43JR9d2FwojGBbLPrAFHe%2B2it7Bc5OhrdAwECsxRPuez%2Fam4p0GokNZz1pano2N9hbtGCqW%2Bg7qynLoW9f9wkSuCMTIdUCXi%2B8UMLEon%2FDuBDPeh%2BQ1EV6mMz6bioBiGqeWHn6rNrD1wQIUMIyjw8AGOqUBsl3Q2GjhsZazzgVXQbKd8VqooVTsplDMIwZ%2FRoBFRc56brHZDJLq%2F04twm%2BgMutAtY1LaQUMwAUzamf%2FX3KpRFW02%2BSgcG5%2FcyAR3XRmJosupLrHxLQN00LFfcv0ZxbqC6zNWVJRIn7HbfYF%2BLNfx%2FcP2MIN1UKUc5sfbIZsrJQRf8A%2BroXm0JJd4c2WWNv1d4VX%2B3HAJGQq8BBoqzdDtj7ATUzl&X-Amz-Signature=a9df4bc85de4050d02fa13320997412a066127a569a884c3eb73c92b33a9ceef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U422GPOC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXaQN%2BF9HAJe7%2BsBv0u5NuxUBy4rP2XG3YxhSzCQ7bgAiEA7ahvpZrlu6jBlOOhvnISFYGw4e87LGtCZ%2FQYBSH3EQQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsK%2BqVbZTzCS9CddyrcAwlXmKelvKLsshPIS5pmxapq6tSwgj8sZAoBkVByvrOmtd0ECTJ4zeeJiNyOG6cOZ7tC9V5mI02HA4VjsPY0sOQQcfWlewv5LKYzflo6wVVkM%2FpgsDSqWfeqk1GHkDXKqcH6j%2FTNdQV3tT8A69tOloNCbpdM7HnrKWXtYLGZtDS9%2BGK%2Fjha6zQcxK77yGOhMvcYDyecA8z2mcUmBR7ujy1CS7iupd9WHPlwS0ElI%2FjEORnR%2FCt7YYSOsCIuj8CYNqR3JrAGt4FiGWZyIB4bMJIrSIi8junsnV0H3DljXG4tKBlC%2BAv82GcJzj%2FfY%2B7%2Bo383MVYpJ7EkYBCYwVdIctMrxGx2EkN07W4PdEqR1Ga7BL%2FzuTqQUeXkeyX%2B3mboMe4YlbhwXoLkFiz39CHXY3%2BpqWSEU51nS9z0memwsZzqflN%2BljPuvgOhSE95YyFR70VeItMi%2Fev%2FvhXMAEmBSFB6RZuuEkDgsOtvJoAzj19HSd43JR9d2FwojGBbLPrAFHe%2B2it7Bc5OhrdAwECsxRPuez%2Fam4p0GokNZz1pano2N9hbtGCqW%2Bg7qynLoW9f9wkSuCMTIdUCXi%2B8UMLEon%2FDuBDPeh%2BQ1EV6mMz6bioBiGqeWHn6rNrD1wQIUMIyjw8AGOqUBsl3Q2GjhsZazzgVXQbKd8VqooVTsplDMIwZ%2FRoBFRc56brHZDJLq%2F04twm%2BgMutAtY1LaQUMwAUzamf%2FX3KpRFW02%2BSgcG5%2FcyAR3XRmJosupLrHxLQN00LFfcv0ZxbqC6zNWVJRIn7HbfYF%2BLNfx%2FcP2MIN1UKUc5sfbIZsrJQRf8A%2BroXm0JJd4c2WWNv1d4VX%2B3HAJGQq8BBoqzdDtj7ATUzl&X-Amz-Signature=36b182fc1f00fa3ca405773512e284a416e436eba84ac97384149fbefbbbac1c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U422GPOC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXaQN%2BF9HAJe7%2BsBv0u5NuxUBy4rP2XG3YxhSzCQ7bgAiEA7ahvpZrlu6jBlOOhvnISFYGw4e87LGtCZ%2FQYBSH3EQQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsK%2BqVbZTzCS9CddyrcAwlXmKelvKLsshPIS5pmxapq6tSwgj8sZAoBkVByvrOmtd0ECTJ4zeeJiNyOG6cOZ7tC9V5mI02HA4VjsPY0sOQQcfWlewv5LKYzflo6wVVkM%2FpgsDSqWfeqk1GHkDXKqcH6j%2FTNdQV3tT8A69tOloNCbpdM7HnrKWXtYLGZtDS9%2BGK%2Fjha6zQcxK77yGOhMvcYDyecA8z2mcUmBR7ujy1CS7iupd9WHPlwS0ElI%2FjEORnR%2FCt7YYSOsCIuj8CYNqR3JrAGt4FiGWZyIB4bMJIrSIi8junsnV0H3DljXG4tKBlC%2BAv82GcJzj%2FfY%2B7%2Bo383MVYpJ7EkYBCYwVdIctMrxGx2EkN07W4PdEqR1Ga7BL%2FzuTqQUeXkeyX%2B3mboMe4YlbhwXoLkFiz39CHXY3%2BpqWSEU51nS9z0memwsZzqflN%2BljPuvgOhSE95YyFR70VeItMi%2Fev%2FvhXMAEmBSFB6RZuuEkDgsOtvJoAzj19HSd43JR9d2FwojGBbLPrAFHe%2B2it7Bc5OhrdAwECsxRPuez%2Fam4p0GokNZz1pano2N9hbtGCqW%2Bg7qynLoW9f9wkSuCMTIdUCXi%2B8UMLEon%2FDuBDPeh%2BQ1EV6mMz6bioBiGqeWHn6rNrD1wQIUMIyjw8AGOqUBsl3Q2GjhsZazzgVXQbKd8VqooVTsplDMIwZ%2FRoBFRc56brHZDJLq%2F04twm%2BgMutAtY1LaQUMwAUzamf%2FX3KpRFW02%2BSgcG5%2FcyAR3XRmJosupLrHxLQN00LFfcv0ZxbqC6zNWVJRIn7HbfYF%2BLNfx%2FcP2MIN1UKUc5sfbIZsrJQRf8A%2BroXm0JJd4c2WWNv1d4VX%2B3HAJGQq8BBoqzdDtj7ATUzl&X-Amz-Signature=3d8a3ea65cad10fdd6786f198dc513225f90c3d2989930fa77cdb8fb8c39a6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U422GPOC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXaQN%2BF9HAJe7%2BsBv0u5NuxUBy4rP2XG3YxhSzCQ7bgAiEA7ahvpZrlu6jBlOOhvnISFYGw4e87LGtCZ%2FQYBSH3EQQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsK%2BqVbZTzCS9CddyrcAwlXmKelvKLsshPIS5pmxapq6tSwgj8sZAoBkVByvrOmtd0ECTJ4zeeJiNyOG6cOZ7tC9V5mI02HA4VjsPY0sOQQcfWlewv5LKYzflo6wVVkM%2FpgsDSqWfeqk1GHkDXKqcH6j%2FTNdQV3tT8A69tOloNCbpdM7HnrKWXtYLGZtDS9%2BGK%2Fjha6zQcxK77yGOhMvcYDyecA8z2mcUmBR7ujy1CS7iupd9WHPlwS0ElI%2FjEORnR%2FCt7YYSOsCIuj8CYNqR3JrAGt4FiGWZyIB4bMJIrSIi8junsnV0H3DljXG4tKBlC%2BAv82GcJzj%2FfY%2B7%2Bo383MVYpJ7EkYBCYwVdIctMrxGx2EkN07W4PdEqR1Ga7BL%2FzuTqQUeXkeyX%2B3mboMe4YlbhwXoLkFiz39CHXY3%2BpqWSEU51nS9z0memwsZzqflN%2BljPuvgOhSE95YyFR70VeItMi%2Fev%2FvhXMAEmBSFB6RZuuEkDgsOtvJoAzj19HSd43JR9d2FwojGBbLPrAFHe%2B2it7Bc5OhrdAwECsxRPuez%2Fam4p0GokNZz1pano2N9hbtGCqW%2Bg7qynLoW9f9wkSuCMTIdUCXi%2B8UMLEon%2FDuBDPeh%2BQ1EV6mMz6bioBiGqeWHn6rNrD1wQIUMIyjw8AGOqUBsl3Q2GjhsZazzgVXQbKd8VqooVTsplDMIwZ%2FRoBFRc56brHZDJLq%2F04twm%2BgMutAtY1LaQUMwAUzamf%2FX3KpRFW02%2BSgcG5%2FcyAR3XRmJosupLrHxLQN00LFfcv0ZxbqC6zNWVJRIn7HbfYF%2BLNfx%2FcP2MIN1UKUc5sfbIZsrJQRf8A%2BroXm0JJd4c2WWNv1d4VX%2B3HAJGQq8BBoqzdDtj7ATUzl&X-Amz-Signature=2a17c278b21423f5bf507ba4cfb7c30c19261b720b8f457db513fa90c9c24347&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U422GPOC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXaQN%2BF9HAJe7%2BsBv0u5NuxUBy4rP2XG3YxhSzCQ7bgAiEA7ahvpZrlu6jBlOOhvnISFYGw4e87LGtCZ%2FQYBSH3EQQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsK%2BqVbZTzCS9CddyrcAwlXmKelvKLsshPIS5pmxapq6tSwgj8sZAoBkVByvrOmtd0ECTJ4zeeJiNyOG6cOZ7tC9V5mI02HA4VjsPY0sOQQcfWlewv5LKYzflo6wVVkM%2FpgsDSqWfeqk1GHkDXKqcH6j%2FTNdQV3tT8A69tOloNCbpdM7HnrKWXtYLGZtDS9%2BGK%2Fjha6zQcxK77yGOhMvcYDyecA8z2mcUmBR7ujy1CS7iupd9WHPlwS0ElI%2FjEORnR%2FCt7YYSOsCIuj8CYNqR3JrAGt4FiGWZyIB4bMJIrSIi8junsnV0H3DljXG4tKBlC%2BAv82GcJzj%2FfY%2B7%2Bo383MVYpJ7EkYBCYwVdIctMrxGx2EkN07W4PdEqR1Ga7BL%2FzuTqQUeXkeyX%2B3mboMe4YlbhwXoLkFiz39CHXY3%2BpqWSEU51nS9z0memwsZzqflN%2BljPuvgOhSE95YyFR70VeItMi%2Fev%2FvhXMAEmBSFB6RZuuEkDgsOtvJoAzj19HSd43JR9d2FwojGBbLPrAFHe%2B2it7Bc5OhrdAwECsxRPuez%2Fam4p0GokNZz1pano2N9hbtGCqW%2Bg7qynLoW9f9wkSuCMTIdUCXi%2B8UMLEon%2FDuBDPeh%2BQ1EV6mMz6bioBiGqeWHn6rNrD1wQIUMIyjw8AGOqUBsl3Q2GjhsZazzgVXQbKd8VqooVTsplDMIwZ%2FRoBFRc56brHZDJLq%2F04twm%2BgMutAtY1LaQUMwAUzamf%2FX3KpRFW02%2BSgcG5%2FcyAR3XRmJosupLrHxLQN00LFfcv0ZxbqC6zNWVJRIn7HbfYF%2BLNfx%2FcP2MIN1UKUc5sfbIZsrJQRf8A%2BroXm0JJd4c2WWNv1d4VX%2B3HAJGQq8BBoqzdDtj7ATUzl&X-Amz-Signature=facf830c8e7aa7ec1a63433e98f23e8e0fe14d43f508eea892a90d1b3ef67ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
