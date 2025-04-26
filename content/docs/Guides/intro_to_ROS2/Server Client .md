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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTRIQZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHqX%2FwT4naOZh%2Bu%2F8ojHunskr90%2B38kxGDkWj4ejFIuAiB3hD8%2BnWPmLu%2FtTxoN0kea5DFJXkOmp3aXZLrXh04orSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMR8%2Bt99yMlQVO%2BVtzKtwD%2BC6ex3xNVvT%2FL5zuBvuL9J1RijnUoNNh8EmwigZH5%2FHJcAMzK1TnFPMegB%2B6rfkMLGB%2FldpUh5nx0EakYBqiUzWoXmjQM7wVZxebwYCkLqaQJf%2FFD0mYOa9SpV87xLNNAGP8qQeLdi0Nc%2FWhGig%2BUw7ujJ8xJTQWLjo87bajVoHQc6vIArCS6kORMU%2FudtZIJY3g2btt3NK%2BVm97s7RsfzdRih7sGLo5i04fWXi6UzoDG8aymiiMwxmsff2OqjmRMphvC%2F0F2fFbZCUk8JDClf%2F3iWV30O2GOTZmWtcCGeo1m7keEFxCntorTFuKheqhvjQXg%2FD0IIk9cyKtua2z%2BX55ZVZOZ2%2BwtkPgWgOiDi2okzwNGgrwBakknn2UZekGy56EaD3WCAueWLvYXtaqG0p9hU6dE%2B8liFMsWhPCaEyCNFvCA8Kq5q3dZ6LM4HJZbLRlXyW%2BpaB2eQogaLoN20AiUJB9gf43p550x9M0yO0qHsuvUeSuYbXDmiy9KyhGU2LnswMdnJ%2BaT6mvmIKisglsBKO013EaC6cNhPzTn%2BilF1IZ7Sq1vRr4v9%2BeECxXvwEvi4stqj4EHW6Y5TpSITWv8uusBAKWMf6G1zX8xT1Jl7rTitT4FvSbYZ8wgMC1wAY6pgHo6Z4VlxUw8pYNs7AiOs%2FdNmnRObD%2FzuJXJxK695EY%2FrR7Nc%2FR4dwHOtE6nQ0jkrB7dL8%2F%2BH593rM2PjKnSsVXJxZWYcW3RP%2FMpqf3vGLbAO69tk3kenvcMFVrR6miE%2BmE5JtLcXCV28OvXBBgjNeXiTKrxv19arAUgzG%2B1JQ5WNBfKXLB5EQ%2FsCtHDZLg8dEBonWs3yOleC5lIyHDOesI5RvVGySa&X-Amz-Signature=1e11a57fd7b3aa2187f10972c4ac0198a8a1650e0495f1dcbbe6576f899a2ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTRIQZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHqX%2FwT4naOZh%2Bu%2F8ojHunskr90%2B38kxGDkWj4ejFIuAiB3hD8%2BnWPmLu%2FtTxoN0kea5DFJXkOmp3aXZLrXh04orSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMR8%2Bt99yMlQVO%2BVtzKtwD%2BC6ex3xNVvT%2FL5zuBvuL9J1RijnUoNNh8EmwigZH5%2FHJcAMzK1TnFPMegB%2B6rfkMLGB%2FldpUh5nx0EakYBqiUzWoXmjQM7wVZxebwYCkLqaQJf%2FFD0mYOa9SpV87xLNNAGP8qQeLdi0Nc%2FWhGig%2BUw7ujJ8xJTQWLjo87bajVoHQc6vIArCS6kORMU%2FudtZIJY3g2btt3NK%2BVm97s7RsfzdRih7sGLo5i04fWXi6UzoDG8aymiiMwxmsff2OqjmRMphvC%2F0F2fFbZCUk8JDClf%2F3iWV30O2GOTZmWtcCGeo1m7keEFxCntorTFuKheqhvjQXg%2FD0IIk9cyKtua2z%2BX55ZVZOZ2%2BwtkPgWgOiDi2okzwNGgrwBakknn2UZekGy56EaD3WCAueWLvYXtaqG0p9hU6dE%2B8liFMsWhPCaEyCNFvCA8Kq5q3dZ6LM4HJZbLRlXyW%2BpaB2eQogaLoN20AiUJB9gf43p550x9M0yO0qHsuvUeSuYbXDmiy9KyhGU2LnswMdnJ%2BaT6mvmIKisglsBKO013EaC6cNhPzTn%2BilF1IZ7Sq1vRr4v9%2BeECxXvwEvi4stqj4EHW6Y5TpSITWv8uusBAKWMf6G1zX8xT1Jl7rTitT4FvSbYZ8wgMC1wAY6pgHo6Z4VlxUw8pYNs7AiOs%2FdNmnRObD%2FzuJXJxK695EY%2FrR7Nc%2FR4dwHOtE6nQ0jkrB7dL8%2F%2BH593rM2PjKnSsVXJxZWYcW3RP%2FMpqf3vGLbAO69tk3kenvcMFVrR6miE%2BmE5JtLcXCV28OvXBBgjNeXiTKrxv19arAUgzG%2B1JQ5WNBfKXLB5EQ%2FsCtHDZLg8dEBonWs3yOleC5lIyHDOesI5RvVGySa&X-Amz-Signature=bde2288cfbb05220cd5095bf1977b6b8b42067fef0cf61b603ebae9fa989f685&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTRIQZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHqX%2FwT4naOZh%2Bu%2F8ojHunskr90%2B38kxGDkWj4ejFIuAiB3hD8%2BnWPmLu%2FtTxoN0kea5DFJXkOmp3aXZLrXh04orSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMR8%2Bt99yMlQVO%2BVtzKtwD%2BC6ex3xNVvT%2FL5zuBvuL9J1RijnUoNNh8EmwigZH5%2FHJcAMzK1TnFPMegB%2B6rfkMLGB%2FldpUh5nx0EakYBqiUzWoXmjQM7wVZxebwYCkLqaQJf%2FFD0mYOa9SpV87xLNNAGP8qQeLdi0Nc%2FWhGig%2BUw7ujJ8xJTQWLjo87bajVoHQc6vIArCS6kORMU%2FudtZIJY3g2btt3NK%2BVm97s7RsfzdRih7sGLo5i04fWXi6UzoDG8aymiiMwxmsff2OqjmRMphvC%2F0F2fFbZCUk8JDClf%2F3iWV30O2GOTZmWtcCGeo1m7keEFxCntorTFuKheqhvjQXg%2FD0IIk9cyKtua2z%2BX55ZVZOZ2%2BwtkPgWgOiDi2okzwNGgrwBakknn2UZekGy56EaD3WCAueWLvYXtaqG0p9hU6dE%2B8liFMsWhPCaEyCNFvCA8Kq5q3dZ6LM4HJZbLRlXyW%2BpaB2eQogaLoN20AiUJB9gf43p550x9M0yO0qHsuvUeSuYbXDmiy9KyhGU2LnswMdnJ%2BaT6mvmIKisglsBKO013EaC6cNhPzTn%2BilF1IZ7Sq1vRr4v9%2BeECxXvwEvi4stqj4EHW6Y5TpSITWv8uusBAKWMf6G1zX8xT1Jl7rTitT4FvSbYZ8wgMC1wAY6pgHo6Z4VlxUw8pYNs7AiOs%2FdNmnRObD%2FzuJXJxK695EY%2FrR7Nc%2FR4dwHOtE6nQ0jkrB7dL8%2F%2BH593rM2PjKnSsVXJxZWYcW3RP%2FMpqf3vGLbAO69tk3kenvcMFVrR6miE%2BmE5JtLcXCV28OvXBBgjNeXiTKrxv19arAUgzG%2B1JQ5WNBfKXLB5EQ%2FsCtHDZLg8dEBonWs3yOleC5lIyHDOesI5RvVGySa&X-Amz-Signature=92333a216e0c2368b23ab860a9984f560289bd7846bb0ced9cc7bcea72cb0e15&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTRIQZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHqX%2FwT4naOZh%2Bu%2F8ojHunskr90%2B38kxGDkWj4ejFIuAiB3hD8%2BnWPmLu%2FtTxoN0kea5DFJXkOmp3aXZLrXh04orSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMR8%2Bt99yMlQVO%2BVtzKtwD%2BC6ex3xNVvT%2FL5zuBvuL9J1RijnUoNNh8EmwigZH5%2FHJcAMzK1TnFPMegB%2B6rfkMLGB%2FldpUh5nx0EakYBqiUzWoXmjQM7wVZxebwYCkLqaQJf%2FFD0mYOa9SpV87xLNNAGP8qQeLdi0Nc%2FWhGig%2BUw7ujJ8xJTQWLjo87bajVoHQc6vIArCS6kORMU%2FudtZIJY3g2btt3NK%2BVm97s7RsfzdRih7sGLo5i04fWXi6UzoDG8aymiiMwxmsff2OqjmRMphvC%2F0F2fFbZCUk8JDClf%2F3iWV30O2GOTZmWtcCGeo1m7keEFxCntorTFuKheqhvjQXg%2FD0IIk9cyKtua2z%2BX55ZVZOZ2%2BwtkPgWgOiDi2okzwNGgrwBakknn2UZekGy56EaD3WCAueWLvYXtaqG0p9hU6dE%2B8liFMsWhPCaEyCNFvCA8Kq5q3dZ6LM4HJZbLRlXyW%2BpaB2eQogaLoN20AiUJB9gf43p550x9M0yO0qHsuvUeSuYbXDmiy9KyhGU2LnswMdnJ%2BaT6mvmIKisglsBKO013EaC6cNhPzTn%2BilF1IZ7Sq1vRr4v9%2BeECxXvwEvi4stqj4EHW6Y5TpSITWv8uusBAKWMf6G1zX8xT1Jl7rTitT4FvSbYZ8wgMC1wAY6pgHo6Z4VlxUw8pYNs7AiOs%2FdNmnRObD%2FzuJXJxK695EY%2FrR7Nc%2FR4dwHOtE6nQ0jkrB7dL8%2F%2BH593rM2PjKnSsVXJxZWYcW3RP%2FMpqf3vGLbAO69tk3kenvcMFVrR6miE%2BmE5JtLcXCV28OvXBBgjNeXiTKrxv19arAUgzG%2B1JQ5WNBfKXLB5EQ%2FsCtHDZLg8dEBonWs3yOleC5lIyHDOesI5RvVGySa&X-Amz-Signature=787465ac52bc2d748b811751d7e7a15cd1176111e4176a19ce58c1f200dd51aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTRIQZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHqX%2FwT4naOZh%2Bu%2F8ojHunskr90%2B38kxGDkWj4ejFIuAiB3hD8%2BnWPmLu%2FtTxoN0kea5DFJXkOmp3aXZLrXh04orSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMR8%2Bt99yMlQVO%2BVtzKtwD%2BC6ex3xNVvT%2FL5zuBvuL9J1RijnUoNNh8EmwigZH5%2FHJcAMzK1TnFPMegB%2B6rfkMLGB%2FldpUh5nx0EakYBqiUzWoXmjQM7wVZxebwYCkLqaQJf%2FFD0mYOa9SpV87xLNNAGP8qQeLdi0Nc%2FWhGig%2BUw7ujJ8xJTQWLjo87bajVoHQc6vIArCS6kORMU%2FudtZIJY3g2btt3NK%2BVm97s7RsfzdRih7sGLo5i04fWXi6UzoDG8aymiiMwxmsff2OqjmRMphvC%2F0F2fFbZCUk8JDClf%2F3iWV30O2GOTZmWtcCGeo1m7keEFxCntorTFuKheqhvjQXg%2FD0IIk9cyKtua2z%2BX55ZVZOZ2%2BwtkPgWgOiDi2okzwNGgrwBakknn2UZekGy56EaD3WCAueWLvYXtaqG0p9hU6dE%2B8liFMsWhPCaEyCNFvCA8Kq5q3dZ6LM4HJZbLRlXyW%2BpaB2eQogaLoN20AiUJB9gf43p550x9M0yO0qHsuvUeSuYbXDmiy9KyhGU2LnswMdnJ%2BaT6mvmIKisglsBKO013EaC6cNhPzTn%2BilF1IZ7Sq1vRr4v9%2BeECxXvwEvi4stqj4EHW6Y5TpSITWv8uusBAKWMf6G1zX8xT1Jl7rTitT4FvSbYZ8wgMC1wAY6pgHo6Z4VlxUw8pYNs7AiOs%2FdNmnRObD%2FzuJXJxK695EY%2FrR7Nc%2FR4dwHOtE6nQ0jkrB7dL8%2F%2BH593rM2PjKnSsVXJxZWYcW3RP%2FMpqf3vGLbAO69tk3kenvcMFVrR6miE%2BmE5JtLcXCV28OvXBBgjNeXiTKrxv19arAUgzG%2B1JQ5WNBfKXLB5EQ%2FsCtHDZLg8dEBonWs3yOleC5lIyHDOesI5RvVGySa&X-Amz-Signature=316e393933862900c3bb9c3ce14ee7353f6672fc1e54ae8bfee7d8dc352a8c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
