---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQSVLRK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBC22t1ImW9AnjpAbWxXk2q0S%2BOax%2BgelTU0HKDqvtnnAiEA1EL6zFsJWjQVO7yYkuBv%2FksSANztD85S8K8%2BP9TJK2kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEMGp5R5eWg%2BNyIp1ircA9MeNlSvaqT63wt3ruh7xKPVPv%2Bszrj2S8lhxkl4zYJyWV%2FTLNvzZoiS3AJ3jIZ4A0ru1H%2FhEvdb7eOCp7QZqeQEF89%2FH9IwZInx61lEYHiuSPtvW4uQQkxHkUGTWzYkRdtyAdNtBaIUvPeap7qT7dE3oexnP2gcHsJhbKlqrnbc047ymeHUWPnmYnIwqMH%2FkcaZW79pkxiPXhcWyrtrno865IRF5ve6pEfydK0MGaizFUtgg5cuFfSieBfYcR%2FynT3Ok65lDfKRd73mAt%2BSWCByuPGAaut%2FhRHGS%2BXZPN8CWRZw6zx%2FdbLYroffAihKO4v1TItLbWnbu9aHZMv7JaEe9Lxde7da7yKWKmOqcenkP87L5%2BpUCvGIVCjAM8KdUwSkLpcn4VBg4vXuMLZjr5bcexkOlfPUL64pcB8JJntuEDaUPQDj9dAg6SQOI99TAVGn2FwbQqLasaMYqmimgmdnqE93SJrpE%2BEVDxJ%2BBTxmxIidNkW1%2BJrSzUuiPo7NCulIa%2BjeYtZ4Df%2BvUnPolAs1uB3U5uxtZRNkx%2FYxiLCi7N%2FYIEusVvXanqPO97Slx%2BAVJcQ6ABpV9Sb%2B6kqBwWowFSH3tJ4LPvB2vlx1VTb3t8hRjh%2FpO121OpJSMKej%2B8QGOqUBET1N1AxMBd5rCdqEyrzKg0ISu5m5z9OzLZOMOuZQSahNLXoOUiyNWMCRjLQDbbbS428r7JMW0PLyEK9lQOHpW2kVGB%2BAty14AnOYeba%2FeKLKUGkJ0eEKaiVig0fXF2%2Bs6ZVXmClNzaFmnvi9LSj%2F3ijbH1oyD9dQptjnc6gJI%2F2Z6Wf6GLGOGycaTNpedzajoP4v03tw5ziDhv%2FEBU%2Bqu3cRUuKF&X-Amz-Signature=dc147bdb3571748d62f494577944c27cc4526533ce59507d1df2cbbeaafb4780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQSVLRK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBC22t1ImW9AnjpAbWxXk2q0S%2BOax%2BgelTU0HKDqvtnnAiEA1EL6zFsJWjQVO7yYkuBv%2FksSANztD85S8K8%2BP9TJK2kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEMGp5R5eWg%2BNyIp1ircA9MeNlSvaqT63wt3ruh7xKPVPv%2Bszrj2S8lhxkl4zYJyWV%2FTLNvzZoiS3AJ3jIZ4A0ru1H%2FhEvdb7eOCp7QZqeQEF89%2FH9IwZInx61lEYHiuSPtvW4uQQkxHkUGTWzYkRdtyAdNtBaIUvPeap7qT7dE3oexnP2gcHsJhbKlqrnbc047ymeHUWPnmYnIwqMH%2FkcaZW79pkxiPXhcWyrtrno865IRF5ve6pEfydK0MGaizFUtgg5cuFfSieBfYcR%2FynT3Ok65lDfKRd73mAt%2BSWCByuPGAaut%2FhRHGS%2BXZPN8CWRZw6zx%2FdbLYroffAihKO4v1TItLbWnbu9aHZMv7JaEe9Lxde7da7yKWKmOqcenkP87L5%2BpUCvGIVCjAM8KdUwSkLpcn4VBg4vXuMLZjr5bcexkOlfPUL64pcB8JJntuEDaUPQDj9dAg6SQOI99TAVGn2FwbQqLasaMYqmimgmdnqE93SJrpE%2BEVDxJ%2BBTxmxIidNkW1%2BJrSzUuiPo7NCulIa%2BjeYtZ4Df%2BvUnPolAs1uB3U5uxtZRNkx%2FYxiLCi7N%2FYIEusVvXanqPO97Slx%2BAVJcQ6ABpV9Sb%2B6kqBwWowFSH3tJ4LPvB2vlx1VTb3t8hRjh%2FpO121OpJSMKej%2B8QGOqUBET1N1AxMBd5rCdqEyrzKg0ISu5m5z9OzLZOMOuZQSahNLXoOUiyNWMCRjLQDbbbS428r7JMW0PLyEK9lQOHpW2kVGB%2BAty14AnOYeba%2FeKLKUGkJ0eEKaiVig0fXF2%2Bs6ZVXmClNzaFmnvi9LSj%2F3ijbH1oyD9dQptjnc6gJI%2F2Z6Wf6GLGOGycaTNpedzajoP4v03tw5ziDhv%2FEBU%2Bqu3cRUuKF&X-Amz-Signature=39024b90d413b8c79c3b789f63f186b43371ede1d525b3001b817cd481334c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQSVLRK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBC22t1ImW9AnjpAbWxXk2q0S%2BOax%2BgelTU0HKDqvtnnAiEA1EL6zFsJWjQVO7yYkuBv%2FksSANztD85S8K8%2BP9TJK2kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEMGp5R5eWg%2BNyIp1ircA9MeNlSvaqT63wt3ruh7xKPVPv%2Bszrj2S8lhxkl4zYJyWV%2FTLNvzZoiS3AJ3jIZ4A0ru1H%2FhEvdb7eOCp7QZqeQEF89%2FH9IwZInx61lEYHiuSPtvW4uQQkxHkUGTWzYkRdtyAdNtBaIUvPeap7qT7dE3oexnP2gcHsJhbKlqrnbc047ymeHUWPnmYnIwqMH%2FkcaZW79pkxiPXhcWyrtrno865IRF5ve6pEfydK0MGaizFUtgg5cuFfSieBfYcR%2FynT3Ok65lDfKRd73mAt%2BSWCByuPGAaut%2FhRHGS%2BXZPN8CWRZw6zx%2FdbLYroffAihKO4v1TItLbWnbu9aHZMv7JaEe9Lxde7da7yKWKmOqcenkP87L5%2BpUCvGIVCjAM8KdUwSkLpcn4VBg4vXuMLZjr5bcexkOlfPUL64pcB8JJntuEDaUPQDj9dAg6SQOI99TAVGn2FwbQqLasaMYqmimgmdnqE93SJrpE%2BEVDxJ%2BBTxmxIidNkW1%2BJrSzUuiPo7NCulIa%2BjeYtZ4Df%2BvUnPolAs1uB3U5uxtZRNkx%2FYxiLCi7N%2FYIEusVvXanqPO97Slx%2BAVJcQ6ABpV9Sb%2B6kqBwWowFSH3tJ4LPvB2vlx1VTb3t8hRjh%2FpO121OpJSMKej%2B8QGOqUBET1N1AxMBd5rCdqEyrzKg0ISu5m5z9OzLZOMOuZQSahNLXoOUiyNWMCRjLQDbbbS428r7JMW0PLyEK9lQOHpW2kVGB%2BAty14AnOYeba%2FeKLKUGkJ0eEKaiVig0fXF2%2Bs6ZVXmClNzaFmnvi9LSj%2F3ijbH1oyD9dQptjnc6gJI%2F2Z6Wf6GLGOGycaTNpedzajoP4v03tw5ziDhv%2FEBU%2Bqu3cRUuKF&X-Amz-Signature=d0ab69baacf65bb69b6a124655fe515b72b04cf23c4b017b4ebbca041d4a8d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQSVLRK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBC22t1ImW9AnjpAbWxXk2q0S%2BOax%2BgelTU0HKDqvtnnAiEA1EL6zFsJWjQVO7yYkuBv%2FksSANztD85S8K8%2BP9TJK2kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEMGp5R5eWg%2BNyIp1ircA9MeNlSvaqT63wt3ruh7xKPVPv%2Bszrj2S8lhxkl4zYJyWV%2FTLNvzZoiS3AJ3jIZ4A0ru1H%2FhEvdb7eOCp7QZqeQEF89%2FH9IwZInx61lEYHiuSPtvW4uQQkxHkUGTWzYkRdtyAdNtBaIUvPeap7qT7dE3oexnP2gcHsJhbKlqrnbc047ymeHUWPnmYnIwqMH%2FkcaZW79pkxiPXhcWyrtrno865IRF5ve6pEfydK0MGaizFUtgg5cuFfSieBfYcR%2FynT3Ok65lDfKRd73mAt%2BSWCByuPGAaut%2FhRHGS%2BXZPN8CWRZw6zx%2FdbLYroffAihKO4v1TItLbWnbu9aHZMv7JaEe9Lxde7da7yKWKmOqcenkP87L5%2BpUCvGIVCjAM8KdUwSkLpcn4VBg4vXuMLZjr5bcexkOlfPUL64pcB8JJntuEDaUPQDj9dAg6SQOI99TAVGn2FwbQqLasaMYqmimgmdnqE93SJrpE%2BEVDxJ%2BBTxmxIidNkW1%2BJrSzUuiPo7NCulIa%2BjeYtZ4Df%2BvUnPolAs1uB3U5uxtZRNkx%2FYxiLCi7N%2FYIEusVvXanqPO97Slx%2BAVJcQ6ABpV9Sb%2B6kqBwWowFSH3tJ4LPvB2vlx1VTb3t8hRjh%2FpO121OpJSMKej%2B8QGOqUBET1N1AxMBd5rCdqEyrzKg0ISu5m5z9OzLZOMOuZQSahNLXoOUiyNWMCRjLQDbbbS428r7JMW0PLyEK9lQOHpW2kVGB%2BAty14AnOYeba%2FeKLKUGkJ0eEKaiVig0fXF2%2Bs6ZVXmClNzaFmnvi9LSj%2F3ijbH1oyD9dQptjnc6gJI%2F2Z6Wf6GLGOGycaTNpedzajoP4v03tw5ziDhv%2FEBU%2Bqu3cRUuKF&X-Amz-Signature=4a9c9f7e5c639ad4f0fdf9941fb7618853282d48b4736ecf81978fb35eb211a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQSVLRK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBC22t1ImW9AnjpAbWxXk2q0S%2BOax%2BgelTU0HKDqvtnnAiEA1EL6zFsJWjQVO7yYkuBv%2FksSANztD85S8K8%2BP9TJK2kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEMGp5R5eWg%2BNyIp1ircA9MeNlSvaqT63wt3ruh7xKPVPv%2Bszrj2S8lhxkl4zYJyWV%2FTLNvzZoiS3AJ3jIZ4A0ru1H%2FhEvdb7eOCp7QZqeQEF89%2FH9IwZInx61lEYHiuSPtvW4uQQkxHkUGTWzYkRdtyAdNtBaIUvPeap7qT7dE3oexnP2gcHsJhbKlqrnbc047ymeHUWPnmYnIwqMH%2FkcaZW79pkxiPXhcWyrtrno865IRF5ve6pEfydK0MGaizFUtgg5cuFfSieBfYcR%2FynT3Ok65lDfKRd73mAt%2BSWCByuPGAaut%2FhRHGS%2BXZPN8CWRZw6zx%2FdbLYroffAihKO4v1TItLbWnbu9aHZMv7JaEe9Lxde7da7yKWKmOqcenkP87L5%2BpUCvGIVCjAM8KdUwSkLpcn4VBg4vXuMLZjr5bcexkOlfPUL64pcB8JJntuEDaUPQDj9dAg6SQOI99TAVGn2FwbQqLasaMYqmimgmdnqE93SJrpE%2BEVDxJ%2BBTxmxIidNkW1%2BJrSzUuiPo7NCulIa%2BjeYtZ4Df%2BvUnPolAs1uB3U5uxtZRNkx%2FYxiLCi7N%2FYIEusVvXanqPO97Slx%2BAVJcQ6ABpV9Sb%2B6kqBwWowFSH3tJ4LPvB2vlx1VTb3t8hRjh%2FpO121OpJSMKej%2B8QGOqUBET1N1AxMBd5rCdqEyrzKg0ISu5m5z9OzLZOMOuZQSahNLXoOUiyNWMCRjLQDbbbS428r7JMW0PLyEK9lQOHpW2kVGB%2BAty14AnOYeba%2FeKLKUGkJ0eEKaiVig0fXF2%2Bs6ZVXmClNzaFmnvi9LSj%2F3ijbH1oyD9dQptjnc6gJI%2F2Z6Wf6GLGOGycaTNpedzajoP4v03tw5ziDhv%2FEBU%2Bqu3cRUuKF&X-Amz-Signature=69454850086341eae3f06d039b98cd2d79744eb8aef594b5d53d91205ac179df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
