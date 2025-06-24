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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA67TR2R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFWAvPNQqSv1pwLEyF%2FMI5gK0NtAUnNOGTHnCzpRc3ZAiEA3Jk1eXsZu2n67ICqprQwdisNaWv950LjdJqb2OaF3jIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDP2nefBb2WfdkwJu6CrcA%2FABUl4YYljF00YVjuFNwXCXP20BsZNs4JMOWzII0cqlnplWiLZEtcm2wo9AapG33z%2BvTrA2V08Ps4Mt0t5Y%2FqsajUoYQX4PfvBGhgMU%2FomjrQ4GiyxRbcMLYY%2BRWIvXZ2ww%2Bj5N54eWuoW7gN4OWM3qg1l2dxOqQ2si90UnGOskRk5aCVX1sYHo%2BfSzF6QIk6llzCBLn7IziLg71Aa9QH1IDVczJnTA1xnqhJJDIB%2FAZ5wihsoAzFUnmHP6AOf6WGceutM%2FwEFr%2FELhgUu7KMaXohWsEC9yjG%2F23EtrEKBS5BtEk6%2BjTafrEsVX5KIRR4Eco1LpOMRf7TnEmyhvoReNdZpU9pSTnwF1hSy%2BE%2F8c1l9LK2f8sNfzx33p%2BEOaWVD4VHCSwBB%2FzI73SkYqEFRZplEYF0FbtWwXJOaqBeA0tIyxBSgngwX8vsbd%2Be45OVrYfroTUaqDwALRERc3SZlDG5P7IZ88Is7ltt9lqCtsh07YS4Y%2FgCjyWuUisS%2Fi1qwlnabebUqolgXutF4Dctwg4GjljhhQZUYLwHMYHXKx%2FX7y7mvOQNOz5R4q%2Fb8a1Aphj%2BgM8wiOc16eCv5l2Qg1b0iLt682yAeAGFXlg1FRI%2B%2Fzh7R4eTuFRJQbMLDc6sIGOqUBdE0f2nNgUjT%2Fwx%2FyXvW3D7KcuFqMtWplOygOyRrOXKazq52Wo3j1iW0j522jvO8AuAgIaniibfy8V5JCCfq27ekGGWQagnuf9HyYzN32kczqGGGvjfarI9%2FPJ5gCB9qj%2B9hrg50faWJqf8fzyzCzWBZrVzV6jAyuUYDX1Xwk0KqZTGhdgQruEy09yyxWrZmkXdEhFHlJQxICHdIFmSVe4ccR96DF&X-Amz-Signature=bf9e0dc39126fb66eaa33eb5e5abefbb799fd8f8cfe730564edd9188eb91485f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA67TR2R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFWAvPNQqSv1pwLEyF%2FMI5gK0NtAUnNOGTHnCzpRc3ZAiEA3Jk1eXsZu2n67ICqprQwdisNaWv950LjdJqb2OaF3jIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDP2nefBb2WfdkwJu6CrcA%2FABUl4YYljF00YVjuFNwXCXP20BsZNs4JMOWzII0cqlnplWiLZEtcm2wo9AapG33z%2BvTrA2V08Ps4Mt0t5Y%2FqsajUoYQX4PfvBGhgMU%2FomjrQ4GiyxRbcMLYY%2BRWIvXZ2ww%2Bj5N54eWuoW7gN4OWM3qg1l2dxOqQ2si90UnGOskRk5aCVX1sYHo%2BfSzF6QIk6llzCBLn7IziLg71Aa9QH1IDVczJnTA1xnqhJJDIB%2FAZ5wihsoAzFUnmHP6AOf6WGceutM%2FwEFr%2FELhgUu7KMaXohWsEC9yjG%2F23EtrEKBS5BtEk6%2BjTafrEsVX5KIRR4Eco1LpOMRf7TnEmyhvoReNdZpU9pSTnwF1hSy%2BE%2F8c1l9LK2f8sNfzx33p%2BEOaWVD4VHCSwBB%2FzI73SkYqEFRZplEYF0FbtWwXJOaqBeA0tIyxBSgngwX8vsbd%2Be45OVrYfroTUaqDwALRERc3SZlDG5P7IZ88Is7ltt9lqCtsh07YS4Y%2FgCjyWuUisS%2Fi1qwlnabebUqolgXutF4Dctwg4GjljhhQZUYLwHMYHXKx%2FX7y7mvOQNOz5R4q%2Fb8a1Aphj%2BgM8wiOc16eCv5l2Qg1b0iLt682yAeAGFXlg1FRI%2B%2Fzh7R4eTuFRJQbMLDc6sIGOqUBdE0f2nNgUjT%2Fwx%2FyXvW3D7KcuFqMtWplOygOyRrOXKazq52Wo3j1iW0j522jvO8AuAgIaniibfy8V5JCCfq27ekGGWQagnuf9HyYzN32kczqGGGvjfarI9%2FPJ5gCB9qj%2B9hrg50faWJqf8fzyzCzWBZrVzV6jAyuUYDX1Xwk0KqZTGhdgQruEy09yyxWrZmkXdEhFHlJQxICHdIFmSVe4ccR96DF&X-Amz-Signature=0a686fad5f76c2e6e1d39bb118affc7e7777d919856909856a487bb4cd02f577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA67TR2R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFWAvPNQqSv1pwLEyF%2FMI5gK0NtAUnNOGTHnCzpRc3ZAiEA3Jk1eXsZu2n67ICqprQwdisNaWv950LjdJqb2OaF3jIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDP2nefBb2WfdkwJu6CrcA%2FABUl4YYljF00YVjuFNwXCXP20BsZNs4JMOWzII0cqlnplWiLZEtcm2wo9AapG33z%2BvTrA2V08Ps4Mt0t5Y%2FqsajUoYQX4PfvBGhgMU%2FomjrQ4GiyxRbcMLYY%2BRWIvXZ2ww%2Bj5N54eWuoW7gN4OWM3qg1l2dxOqQ2si90UnGOskRk5aCVX1sYHo%2BfSzF6QIk6llzCBLn7IziLg71Aa9QH1IDVczJnTA1xnqhJJDIB%2FAZ5wihsoAzFUnmHP6AOf6WGceutM%2FwEFr%2FELhgUu7KMaXohWsEC9yjG%2F23EtrEKBS5BtEk6%2BjTafrEsVX5KIRR4Eco1LpOMRf7TnEmyhvoReNdZpU9pSTnwF1hSy%2BE%2F8c1l9LK2f8sNfzx33p%2BEOaWVD4VHCSwBB%2FzI73SkYqEFRZplEYF0FbtWwXJOaqBeA0tIyxBSgngwX8vsbd%2Be45OVrYfroTUaqDwALRERc3SZlDG5P7IZ88Is7ltt9lqCtsh07YS4Y%2FgCjyWuUisS%2Fi1qwlnabebUqolgXutF4Dctwg4GjljhhQZUYLwHMYHXKx%2FX7y7mvOQNOz5R4q%2Fb8a1Aphj%2BgM8wiOc16eCv5l2Qg1b0iLt682yAeAGFXlg1FRI%2B%2Fzh7R4eTuFRJQbMLDc6sIGOqUBdE0f2nNgUjT%2Fwx%2FyXvW3D7KcuFqMtWplOygOyRrOXKazq52Wo3j1iW0j522jvO8AuAgIaniibfy8V5JCCfq27ekGGWQagnuf9HyYzN32kczqGGGvjfarI9%2FPJ5gCB9qj%2B9hrg50faWJqf8fzyzCzWBZrVzV6jAyuUYDX1Xwk0KqZTGhdgQruEy09yyxWrZmkXdEhFHlJQxICHdIFmSVe4ccR96DF&X-Amz-Signature=b77963fe6570c3bb15f0adab82872e249bbb4c69c023df95d748fe0d598e8b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA67TR2R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFWAvPNQqSv1pwLEyF%2FMI5gK0NtAUnNOGTHnCzpRc3ZAiEA3Jk1eXsZu2n67ICqprQwdisNaWv950LjdJqb2OaF3jIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDP2nefBb2WfdkwJu6CrcA%2FABUl4YYljF00YVjuFNwXCXP20BsZNs4JMOWzII0cqlnplWiLZEtcm2wo9AapG33z%2BvTrA2V08Ps4Mt0t5Y%2FqsajUoYQX4PfvBGhgMU%2FomjrQ4GiyxRbcMLYY%2BRWIvXZ2ww%2Bj5N54eWuoW7gN4OWM3qg1l2dxOqQ2si90UnGOskRk5aCVX1sYHo%2BfSzF6QIk6llzCBLn7IziLg71Aa9QH1IDVczJnTA1xnqhJJDIB%2FAZ5wihsoAzFUnmHP6AOf6WGceutM%2FwEFr%2FELhgUu7KMaXohWsEC9yjG%2F23EtrEKBS5BtEk6%2BjTafrEsVX5KIRR4Eco1LpOMRf7TnEmyhvoReNdZpU9pSTnwF1hSy%2BE%2F8c1l9LK2f8sNfzx33p%2BEOaWVD4VHCSwBB%2FzI73SkYqEFRZplEYF0FbtWwXJOaqBeA0tIyxBSgngwX8vsbd%2Be45OVrYfroTUaqDwALRERc3SZlDG5P7IZ88Is7ltt9lqCtsh07YS4Y%2FgCjyWuUisS%2Fi1qwlnabebUqolgXutF4Dctwg4GjljhhQZUYLwHMYHXKx%2FX7y7mvOQNOz5R4q%2Fb8a1Aphj%2BgM8wiOc16eCv5l2Qg1b0iLt682yAeAGFXlg1FRI%2B%2Fzh7R4eTuFRJQbMLDc6sIGOqUBdE0f2nNgUjT%2Fwx%2FyXvW3D7KcuFqMtWplOygOyRrOXKazq52Wo3j1iW0j522jvO8AuAgIaniibfy8V5JCCfq27ekGGWQagnuf9HyYzN32kczqGGGvjfarI9%2FPJ5gCB9qj%2B9hrg50faWJqf8fzyzCzWBZrVzV6jAyuUYDX1Xwk0KqZTGhdgQruEy09yyxWrZmkXdEhFHlJQxICHdIFmSVe4ccR96DF&X-Amz-Signature=d8d58de5d95d464e9c4d15506814309ee46e22f964fe3a1bc0f98ee772882c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA67TR2R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFWAvPNQqSv1pwLEyF%2FMI5gK0NtAUnNOGTHnCzpRc3ZAiEA3Jk1eXsZu2n67ICqprQwdisNaWv950LjdJqb2OaF3jIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDP2nefBb2WfdkwJu6CrcA%2FABUl4YYljF00YVjuFNwXCXP20BsZNs4JMOWzII0cqlnplWiLZEtcm2wo9AapG33z%2BvTrA2V08Ps4Mt0t5Y%2FqsajUoYQX4PfvBGhgMU%2FomjrQ4GiyxRbcMLYY%2BRWIvXZ2ww%2Bj5N54eWuoW7gN4OWM3qg1l2dxOqQ2si90UnGOskRk5aCVX1sYHo%2BfSzF6QIk6llzCBLn7IziLg71Aa9QH1IDVczJnTA1xnqhJJDIB%2FAZ5wihsoAzFUnmHP6AOf6WGceutM%2FwEFr%2FELhgUu7KMaXohWsEC9yjG%2F23EtrEKBS5BtEk6%2BjTafrEsVX5KIRR4Eco1LpOMRf7TnEmyhvoReNdZpU9pSTnwF1hSy%2BE%2F8c1l9LK2f8sNfzx33p%2BEOaWVD4VHCSwBB%2FzI73SkYqEFRZplEYF0FbtWwXJOaqBeA0tIyxBSgngwX8vsbd%2Be45OVrYfroTUaqDwALRERc3SZlDG5P7IZ88Is7ltt9lqCtsh07YS4Y%2FgCjyWuUisS%2Fi1qwlnabebUqolgXutF4Dctwg4GjljhhQZUYLwHMYHXKx%2FX7y7mvOQNOz5R4q%2Fb8a1Aphj%2BgM8wiOc16eCv5l2Qg1b0iLt682yAeAGFXlg1FRI%2B%2Fzh7R4eTuFRJQbMLDc6sIGOqUBdE0f2nNgUjT%2Fwx%2FyXvW3D7KcuFqMtWplOygOyRrOXKazq52Wo3j1iW0j522jvO8AuAgIaniibfy8V5JCCfq27ekGGWQagnuf9HyYzN32kczqGGGvjfarI9%2FPJ5gCB9qj%2B9hrg50faWJqf8fzyzCzWBZrVzV6jAyuUYDX1Xwk0KqZTGhdgQruEy09yyxWrZmkXdEhFHlJQxICHdIFmSVe4ccR96DF&X-Amz-Signature=19856679722c933b5d4c5c8b6af8c90f8f3cac4ca67fc88167541e2f0c1c8fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
