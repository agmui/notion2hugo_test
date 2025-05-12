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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCJ7KJM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGZPHG6GQ3J8KKTfHnBz%2FxOElR7YvSRJ4DAXPKajTjd4AiEApwGaAMv7zKPoGPosn3xo2duEeNZEjxfsUzXom8zvToUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKucKWlo0Vkp3xReUSrcAyNu78wy35j0ROxUc8eymxeoxaOgfvH9gEAuO5UHnhLyFbCet%2BqfJh3MKAiIR7F0v2JR9Gl6WVs73uFxHdiZEsnmzs237t8fGNIWThJXfX0712vuiQFRTEy4tYIlH1y6tC0n7IpRXBxm96I3ZmTLzrEZ8nby5j1PXEgOFaaTov4qkhQyUR6Qhg%2BylXmp%2FLgP1DPIPEswXOuIQQxG4zE2VmGdrjt8Pf11WHtLSPI68ZXavz1%2B5x6wzas6sKbEyR7cbtPbHz5t7PlGqVFwVvqlam5Hy%2FOhZQ6Q4wLdo8SPGTecvRGNTd%2Flv%2FdKBzDO9WypKkFJw2pKzlG3p6eVwYIJpTND0yvTRxhcvgtDteVeZHVyKE%2FFKJluNq51cqCKApIwfDGIZ9CjzTTCCCbg9hl5pfjHYmdmijC3uKLNJ7ZjGInajPXWgi%2BV85NKxvxbnkPbUJIpNWr3cn0%2FtdCnTki%2B97ZiLC7H8iO7Ue%2FS8Jpf%2B50mXsRDNjOfHOcNIMH0PoZQEHwen%2B%2FCY4w2epcjauDHlFULZxLifxwyKfCJ2zZ7FGLxnD%2Fph0FMwZYELw6%2FJt442%2Brt0UgEzGiRjdv1az5poBK4eDG9GUnbDsIVILnj8ixwvTzaZ5PQOKUcabpTMOyEhcEGOqUBqPsgtN7w7XNMNKgsBYxaRwp0u5%2F%2F3UeBeKnD9MWgS0I2qI%2BCa9yXXdjGhqpZFVKmUyjMznVYaTg%2BPHMEiycQYaHJreSdXKvXIPXg%2BevgoTt0w27BSSHajt1ffLq4dVZWkh8H8qFRB0i%2Be7vK7VY%2BOOhUm0zPOmL98UNS7UmXyv2DCg0XSYwZ%2BzFf477t3gTzgo2%2BunWvRFtk9QI6MSmm4M9ry3jS&X-Amz-Signature=3268e68e730a6aa2aafb6aaa498d84ea3c4827a21d263e36b84e7cc9a450df1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCJ7KJM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGZPHG6GQ3J8KKTfHnBz%2FxOElR7YvSRJ4DAXPKajTjd4AiEApwGaAMv7zKPoGPosn3xo2duEeNZEjxfsUzXom8zvToUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKucKWlo0Vkp3xReUSrcAyNu78wy35j0ROxUc8eymxeoxaOgfvH9gEAuO5UHnhLyFbCet%2BqfJh3MKAiIR7F0v2JR9Gl6WVs73uFxHdiZEsnmzs237t8fGNIWThJXfX0712vuiQFRTEy4tYIlH1y6tC0n7IpRXBxm96I3ZmTLzrEZ8nby5j1PXEgOFaaTov4qkhQyUR6Qhg%2BylXmp%2FLgP1DPIPEswXOuIQQxG4zE2VmGdrjt8Pf11WHtLSPI68ZXavz1%2B5x6wzas6sKbEyR7cbtPbHz5t7PlGqVFwVvqlam5Hy%2FOhZQ6Q4wLdo8SPGTecvRGNTd%2Flv%2FdKBzDO9WypKkFJw2pKzlG3p6eVwYIJpTND0yvTRxhcvgtDteVeZHVyKE%2FFKJluNq51cqCKApIwfDGIZ9CjzTTCCCbg9hl5pfjHYmdmijC3uKLNJ7ZjGInajPXWgi%2BV85NKxvxbnkPbUJIpNWr3cn0%2FtdCnTki%2B97ZiLC7H8iO7Ue%2FS8Jpf%2B50mXsRDNjOfHOcNIMH0PoZQEHwen%2B%2FCY4w2epcjauDHlFULZxLifxwyKfCJ2zZ7FGLxnD%2Fph0FMwZYELw6%2FJt442%2Brt0UgEzGiRjdv1az5poBK4eDG9GUnbDsIVILnj8ixwvTzaZ5PQOKUcabpTMOyEhcEGOqUBqPsgtN7w7XNMNKgsBYxaRwp0u5%2F%2F3UeBeKnD9MWgS0I2qI%2BCa9yXXdjGhqpZFVKmUyjMznVYaTg%2BPHMEiycQYaHJreSdXKvXIPXg%2BevgoTt0w27BSSHajt1ffLq4dVZWkh8H8qFRB0i%2Be7vK7VY%2BOOhUm0zPOmL98UNS7UmXyv2DCg0XSYwZ%2BzFf477t3gTzgo2%2BunWvRFtk9QI6MSmm4M9ry3jS&X-Amz-Signature=90c02e4e68f1f4a41073a1fcf70ce5f3c6c87d7def4de5aaa2fcf6044269f5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCJ7KJM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGZPHG6GQ3J8KKTfHnBz%2FxOElR7YvSRJ4DAXPKajTjd4AiEApwGaAMv7zKPoGPosn3xo2duEeNZEjxfsUzXom8zvToUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKucKWlo0Vkp3xReUSrcAyNu78wy35j0ROxUc8eymxeoxaOgfvH9gEAuO5UHnhLyFbCet%2BqfJh3MKAiIR7F0v2JR9Gl6WVs73uFxHdiZEsnmzs237t8fGNIWThJXfX0712vuiQFRTEy4tYIlH1y6tC0n7IpRXBxm96I3ZmTLzrEZ8nby5j1PXEgOFaaTov4qkhQyUR6Qhg%2BylXmp%2FLgP1DPIPEswXOuIQQxG4zE2VmGdrjt8Pf11WHtLSPI68ZXavz1%2B5x6wzas6sKbEyR7cbtPbHz5t7PlGqVFwVvqlam5Hy%2FOhZQ6Q4wLdo8SPGTecvRGNTd%2Flv%2FdKBzDO9WypKkFJw2pKzlG3p6eVwYIJpTND0yvTRxhcvgtDteVeZHVyKE%2FFKJluNq51cqCKApIwfDGIZ9CjzTTCCCbg9hl5pfjHYmdmijC3uKLNJ7ZjGInajPXWgi%2BV85NKxvxbnkPbUJIpNWr3cn0%2FtdCnTki%2B97ZiLC7H8iO7Ue%2FS8Jpf%2B50mXsRDNjOfHOcNIMH0PoZQEHwen%2B%2FCY4w2epcjauDHlFULZxLifxwyKfCJ2zZ7FGLxnD%2Fph0FMwZYELw6%2FJt442%2Brt0UgEzGiRjdv1az5poBK4eDG9GUnbDsIVILnj8ixwvTzaZ5PQOKUcabpTMOyEhcEGOqUBqPsgtN7w7XNMNKgsBYxaRwp0u5%2F%2F3UeBeKnD9MWgS0I2qI%2BCa9yXXdjGhqpZFVKmUyjMznVYaTg%2BPHMEiycQYaHJreSdXKvXIPXg%2BevgoTt0w27BSSHajt1ffLq4dVZWkh8H8qFRB0i%2Be7vK7VY%2BOOhUm0zPOmL98UNS7UmXyv2DCg0XSYwZ%2BzFf477t3gTzgo2%2BunWvRFtk9QI6MSmm4M9ry3jS&X-Amz-Signature=ec702d306c117299e38268bf1df19e5d87f08e0b428efb13c94e79da74e23ace&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCJ7KJM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGZPHG6GQ3J8KKTfHnBz%2FxOElR7YvSRJ4DAXPKajTjd4AiEApwGaAMv7zKPoGPosn3xo2duEeNZEjxfsUzXom8zvToUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKucKWlo0Vkp3xReUSrcAyNu78wy35j0ROxUc8eymxeoxaOgfvH9gEAuO5UHnhLyFbCet%2BqfJh3MKAiIR7F0v2JR9Gl6WVs73uFxHdiZEsnmzs237t8fGNIWThJXfX0712vuiQFRTEy4tYIlH1y6tC0n7IpRXBxm96I3ZmTLzrEZ8nby5j1PXEgOFaaTov4qkhQyUR6Qhg%2BylXmp%2FLgP1DPIPEswXOuIQQxG4zE2VmGdrjt8Pf11WHtLSPI68ZXavz1%2B5x6wzas6sKbEyR7cbtPbHz5t7PlGqVFwVvqlam5Hy%2FOhZQ6Q4wLdo8SPGTecvRGNTd%2Flv%2FdKBzDO9WypKkFJw2pKzlG3p6eVwYIJpTND0yvTRxhcvgtDteVeZHVyKE%2FFKJluNq51cqCKApIwfDGIZ9CjzTTCCCbg9hl5pfjHYmdmijC3uKLNJ7ZjGInajPXWgi%2BV85NKxvxbnkPbUJIpNWr3cn0%2FtdCnTki%2B97ZiLC7H8iO7Ue%2FS8Jpf%2B50mXsRDNjOfHOcNIMH0PoZQEHwen%2B%2FCY4w2epcjauDHlFULZxLifxwyKfCJ2zZ7FGLxnD%2Fph0FMwZYELw6%2FJt442%2Brt0UgEzGiRjdv1az5poBK4eDG9GUnbDsIVILnj8ixwvTzaZ5PQOKUcabpTMOyEhcEGOqUBqPsgtN7w7XNMNKgsBYxaRwp0u5%2F%2F3UeBeKnD9MWgS0I2qI%2BCa9yXXdjGhqpZFVKmUyjMznVYaTg%2BPHMEiycQYaHJreSdXKvXIPXg%2BevgoTt0w27BSSHajt1ffLq4dVZWkh8H8qFRB0i%2Be7vK7VY%2BOOhUm0zPOmL98UNS7UmXyv2DCg0XSYwZ%2BzFf477t3gTzgo2%2BunWvRFtk9QI6MSmm4M9ry3jS&X-Amz-Signature=7aa7d5c83da4952d0ca93fa17f0293510774b9971acc442bb2ce6abf53a2803a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCJ7KJM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGZPHG6GQ3J8KKTfHnBz%2FxOElR7YvSRJ4DAXPKajTjd4AiEApwGaAMv7zKPoGPosn3xo2duEeNZEjxfsUzXom8zvToUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKucKWlo0Vkp3xReUSrcAyNu78wy35j0ROxUc8eymxeoxaOgfvH9gEAuO5UHnhLyFbCet%2BqfJh3MKAiIR7F0v2JR9Gl6WVs73uFxHdiZEsnmzs237t8fGNIWThJXfX0712vuiQFRTEy4tYIlH1y6tC0n7IpRXBxm96I3ZmTLzrEZ8nby5j1PXEgOFaaTov4qkhQyUR6Qhg%2BylXmp%2FLgP1DPIPEswXOuIQQxG4zE2VmGdrjt8Pf11WHtLSPI68ZXavz1%2B5x6wzas6sKbEyR7cbtPbHz5t7PlGqVFwVvqlam5Hy%2FOhZQ6Q4wLdo8SPGTecvRGNTd%2Flv%2FdKBzDO9WypKkFJw2pKzlG3p6eVwYIJpTND0yvTRxhcvgtDteVeZHVyKE%2FFKJluNq51cqCKApIwfDGIZ9CjzTTCCCbg9hl5pfjHYmdmijC3uKLNJ7ZjGInajPXWgi%2BV85NKxvxbnkPbUJIpNWr3cn0%2FtdCnTki%2B97ZiLC7H8iO7Ue%2FS8Jpf%2B50mXsRDNjOfHOcNIMH0PoZQEHwen%2B%2FCY4w2epcjauDHlFULZxLifxwyKfCJ2zZ7FGLxnD%2Fph0FMwZYELw6%2FJt442%2Brt0UgEzGiRjdv1az5poBK4eDG9GUnbDsIVILnj8ixwvTzaZ5PQOKUcabpTMOyEhcEGOqUBqPsgtN7w7XNMNKgsBYxaRwp0u5%2F%2F3UeBeKnD9MWgS0I2qI%2BCa9yXXdjGhqpZFVKmUyjMznVYaTg%2BPHMEiycQYaHJreSdXKvXIPXg%2BevgoTt0w27BSSHajt1ffLq4dVZWkh8H8qFRB0i%2Be7vK7VY%2BOOhUm0zPOmL98UNS7UmXyv2DCg0XSYwZ%2BzFf477t3gTzgo2%2BunWvRFtk9QI6MSmm4M9ry3jS&X-Amz-Signature=9c6438ce167abb076a5c792b936cf48604a0472f7346dd81f56b66c75647e6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
