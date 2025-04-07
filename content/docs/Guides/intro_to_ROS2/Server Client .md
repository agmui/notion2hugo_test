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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTWLJM5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDieXXdVyG01zubany5yecDNg%2BTxu7rEa%2FwFj48CaiIkQIgAP%2F6eyTdQwWQ9ogmR1NVY00Nq9Ao4YkIGQn3Tqmmy6Iq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBVLnwfJcYH03PgnUircAyjwFgOZqSwi7bu6nTlxsjqdy6PxFdM7QeauTo40hkeIGBiy%2Fhztb3Tt5K%2FUdVmAS4AwqOGleOGcALust0rSRLLGRABRDtZysScwmhFftEyd6sd1I%2FEOwNojc8kiN7tuju0E5WpYGvatbZhlqLAT9M4TLIcUaaPZj8zwbU0Mgy4NAn1Vfs068uzBVtk9AOtM2cnZjLaEJOS97Km0aS7wMXV%2F9KP7KXy9zsigbkY8Wepyg0lQnTpQBbBv1j4kylWtb0aqxh4TZAlPbNverzD37EBg37E3UnVnDKjZ0UufqGaEm3RLoLdOZNPwuTlcO%2Bj1AnIqzfNNKb0IFuY56lnibGezvmXx5W%2Bdm9p9J5YvdzV3itRcet9O%2FGDq2XJO47lIsDQW4C9ba%2FmOWmD57V3pJNxLINjOFwM98rmsUOddKD%2FWqiLkb9wJnxTBodVZeZpzmRlQJKKRAv1BusdA6HSRvRk5JhueKeHeQmRXZjDwm3%2BPKDmVV9sHD1x6M%2BlGzOKCMXD3X2%2F2L0pk8WOE7t0JgaC2i1WgTJaxoPfeJdSikYkgI5rPQcVaKjg0qOqn5DcGm7TLMi2XXTG7e2t%2B2NKpkUqOIDjUb%2BdQDrxrYs3IsIm5wyLetKq8m8c3sF6UMLqI0L8GOqUBOthQg2ZMuC9bmjHLhsU1tckyMe5qZ6QofDDmr7gSJDaP2YgpGIXYa8cGwW09e8rbgbLoOgOuUTKNyOuNKg7Mtv345DlyCeOU5PitbhMicGahnfbvUVQBnkNypVV2JvtRG7%2BmCiNHRcrCh2Pt6BkXNx%2FrU55qVkaEgXd%2BwqyVC%2FpXra2Mm0vSzztzlGKO1Fy5HXnmnykqdthcQLb6kaqdQDzK4E3%2B&X-Amz-Signature=5a485a7376c96a090993e8c2533956c0ab4dc849bbce1adaa42a621b5281da94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTWLJM5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDieXXdVyG01zubany5yecDNg%2BTxu7rEa%2FwFj48CaiIkQIgAP%2F6eyTdQwWQ9ogmR1NVY00Nq9Ao4YkIGQn3Tqmmy6Iq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBVLnwfJcYH03PgnUircAyjwFgOZqSwi7bu6nTlxsjqdy6PxFdM7QeauTo40hkeIGBiy%2Fhztb3Tt5K%2FUdVmAS4AwqOGleOGcALust0rSRLLGRABRDtZysScwmhFftEyd6sd1I%2FEOwNojc8kiN7tuju0E5WpYGvatbZhlqLAT9M4TLIcUaaPZj8zwbU0Mgy4NAn1Vfs068uzBVtk9AOtM2cnZjLaEJOS97Km0aS7wMXV%2F9KP7KXy9zsigbkY8Wepyg0lQnTpQBbBv1j4kylWtb0aqxh4TZAlPbNverzD37EBg37E3UnVnDKjZ0UufqGaEm3RLoLdOZNPwuTlcO%2Bj1AnIqzfNNKb0IFuY56lnibGezvmXx5W%2Bdm9p9J5YvdzV3itRcet9O%2FGDq2XJO47lIsDQW4C9ba%2FmOWmD57V3pJNxLINjOFwM98rmsUOddKD%2FWqiLkb9wJnxTBodVZeZpzmRlQJKKRAv1BusdA6HSRvRk5JhueKeHeQmRXZjDwm3%2BPKDmVV9sHD1x6M%2BlGzOKCMXD3X2%2F2L0pk8WOE7t0JgaC2i1WgTJaxoPfeJdSikYkgI5rPQcVaKjg0qOqn5DcGm7TLMi2XXTG7e2t%2B2NKpkUqOIDjUb%2BdQDrxrYs3IsIm5wyLetKq8m8c3sF6UMLqI0L8GOqUBOthQg2ZMuC9bmjHLhsU1tckyMe5qZ6QofDDmr7gSJDaP2YgpGIXYa8cGwW09e8rbgbLoOgOuUTKNyOuNKg7Mtv345DlyCeOU5PitbhMicGahnfbvUVQBnkNypVV2JvtRG7%2BmCiNHRcrCh2Pt6BkXNx%2FrU55qVkaEgXd%2BwqyVC%2FpXra2Mm0vSzztzlGKO1Fy5HXnmnykqdthcQLb6kaqdQDzK4E3%2B&X-Amz-Signature=e81c660252fb64ae1cadc522ef88057b6fa44db7b27f490f5c9e2df583f85d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTWLJM5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDieXXdVyG01zubany5yecDNg%2BTxu7rEa%2FwFj48CaiIkQIgAP%2F6eyTdQwWQ9ogmR1NVY00Nq9Ao4YkIGQn3Tqmmy6Iq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBVLnwfJcYH03PgnUircAyjwFgOZqSwi7bu6nTlxsjqdy6PxFdM7QeauTo40hkeIGBiy%2Fhztb3Tt5K%2FUdVmAS4AwqOGleOGcALust0rSRLLGRABRDtZysScwmhFftEyd6sd1I%2FEOwNojc8kiN7tuju0E5WpYGvatbZhlqLAT9M4TLIcUaaPZj8zwbU0Mgy4NAn1Vfs068uzBVtk9AOtM2cnZjLaEJOS97Km0aS7wMXV%2F9KP7KXy9zsigbkY8Wepyg0lQnTpQBbBv1j4kylWtb0aqxh4TZAlPbNverzD37EBg37E3UnVnDKjZ0UufqGaEm3RLoLdOZNPwuTlcO%2Bj1AnIqzfNNKb0IFuY56lnibGezvmXx5W%2Bdm9p9J5YvdzV3itRcet9O%2FGDq2XJO47lIsDQW4C9ba%2FmOWmD57V3pJNxLINjOFwM98rmsUOddKD%2FWqiLkb9wJnxTBodVZeZpzmRlQJKKRAv1BusdA6HSRvRk5JhueKeHeQmRXZjDwm3%2BPKDmVV9sHD1x6M%2BlGzOKCMXD3X2%2F2L0pk8WOE7t0JgaC2i1WgTJaxoPfeJdSikYkgI5rPQcVaKjg0qOqn5DcGm7TLMi2XXTG7e2t%2B2NKpkUqOIDjUb%2BdQDrxrYs3IsIm5wyLetKq8m8c3sF6UMLqI0L8GOqUBOthQg2ZMuC9bmjHLhsU1tckyMe5qZ6QofDDmr7gSJDaP2YgpGIXYa8cGwW09e8rbgbLoOgOuUTKNyOuNKg7Mtv345DlyCeOU5PitbhMicGahnfbvUVQBnkNypVV2JvtRG7%2BmCiNHRcrCh2Pt6BkXNx%2FrU55qVkaEgXd%2BwqyVC%2FpXra2Mm0vSzztzlGKO1Fy5HXnmnykqdthcQLb6kaqdQDzK4E3%2B&X-Amz-Signature=b3b8f589c8d0d79a50a8c8b7360177109bdae766c9fdaf11b1bba51dc433806f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTWLJM5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDieXXdVyG01zubany5yecDNg%2BTxu7rEa%2FwFj48CaiIkQIgAP%2F6eyTdQwWQ9ogmR1NVY00Nq9Ao4YkIGQn3Tqmmy6Iq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBVLnwfJcYH03PgnUircAyjwFgOZqSwi7bu6nTlxsjqdy6PxFdM7QeauTo40hkeIGBiy%2Fhztb3Tt5K%2FUdVmAS4AwqOGleOGcALust0rSRLLGRABRDtZysScwmhFftEyd6sd1I%2FEOwNojc8kiN7tuju0E5WpYGvatbZhlqLAT9M4TLIcUaaPZj8zwbU0Mgy4NAn1Vfs068uzBVtk9AOtM2cnZjLaEJOS97Km0aS7wMXV%2F9KP7KXy9zsigbkY8Wepyg0lQnTpQBbBv1j4kylWtb0aqxh4TZAlPbNverzD37EBg37E3UnVnDKjZ0UufqGaEm3RLoLdOZNPwuTlcO%2Bj1AnIqzfNNKb0IFuY56lnibGezvmXx5W%2Bdm9p9J5YvdzV3itRcet9O%2FGDq2XJO47lIsDQW4C9ba%2FmOWmD57V3pJNxLINjOFwM98rmsUOddKD%2FWqiLkb9wJnxTBodVZeZpzmRlQJKKRAv1BusdA6HSRvRk5JhueKeHeQmRXZjDwm3%2BPKDmVV9sHD1x6M%2BlGzOKCMXD3X2%2F2L0pk8WOE7t0JgaC2i1WgTJaxoPfeJdSikYkgI5rPQcVaKjg0qOqn5DcGm7TLMi2XXTG7e2t%2B2NKpkUqOIDjUb%2BdQDrxrYs3IsIm5wyLetKq8m8c3sF6UMLqI0L8GOqUBOthQg2ZMuC9bmjHLhsU1tckyMe5qZ6QofDDmr7gSJDaP2YgpGIXYa8cGwW09e8rbgbLoOgOuUTKNyOuNKg7Mtv345DlyCeOU5PitbhMicGahnfbvUVQBnkNypVV2JvtRG7%2BmCiNHRcrCh2Pt6BkXNx%2FrU55qVkaEgXd%2BwqyVC%2FpXra2Mm0vSzztzlGKO1Fy5HXnmnykqdthcQLb6kaqdQDzK4E3%2B&X-Amz-Signature=cd78cea818e0390139136fb2f6450148998119ccbd6072e3e2bf44f7748ca99b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTWLJM5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDieXXdVyG01zubany5yecDNg%2BTxu7rEa%2FwFj48CaiIkQIgAP%2F6eyTdQwWQ9ogmR1NVY00Nq9Ao4YkIGQn3Tqmmy6Iq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBVLnwfJcYH03PgnUircAyjwFgOZqSwi7bu6nTlxsjqdy6PxFdM7QeauTo40hkeIGBiy%2Fhztb3Tt5K%2FUdVmAS4AwqOGleOGcALust0rSRLLGRABRDtZysScwmhFftEyd6sd1I%2FEOwNojc8kiN7tuju0E5WpYGvatbZhlqLAT9M4TLIcUaaPZj8zwbU0Mgy4NAn1Vfs068uzBVtk9AOtM2cnZjLaEJOS97Km0aS7wMXV%2F9KP7KXy9zsigbkY8Wepyg0lQnTpQBbBv1j4kylWtb0aqxh4TZAlPbNverzD37EBg37E3UnVnDKjZ0UufqGaEm3RLoLdOZNPwuTlcO%2Bj1AnIqzfNNKb0IFuY56lnibGezvmXx5W%2Bdm9p9J5YvdzV3itRcet9O%2FGDq2XJO47lIsDQW4C9ba%2FmOWmD57V3pJNxLINjOFwM98rmsUOddKD%2FWqiLkb9wJnxTBodVZeZpzmRlQJKKRAv1BusdA6HSRvRk5JhueKeHeQmRXZjDwm3%2BPKDmVV9sHD1x6M%2BlGzOKCMXD3X2%2F2L0pk8WOE7t0JgaC2i1WgTJaxoPfeJdSikYkgI5rPQcVaKjg0qOqn5DcGm7TLMi2XXTG7e2t%2B2NKpkUqOIDjUb%2BdQDrxrYs3IsIm5wyLetKq8m8c3sF6UMLqI0L8GOqUBOthQg2ZMuC9bmjHLhsU1tckyMe5qZ6QofDDmr7gSJDaP2YgpGIXYa8cGwW09e8rbgbLoOgOuUTKNyOuNKg7Mtv345DlyCeOU5PitbhMicGahnfbvUVQBnkNypVV2JvtRG7%2BmCiNHRcrCh2Pt6BkXNx%2FrU55qVkaEgXd%2BwqyVC%2FpXra2Mm0vSzztzlGKO1Fy5HXnmnykqdthcQLb6kaqdQDzK4E3%2B&X-Amz-Signature=44c1846c0e361b5df19ec7a3d608c8aa83f051f764c397f257fbef0ade973245&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
