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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV434BTK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF79AhHjWLqmduTcWCJppkazxbibX84VRLy52R2xbjs0AiBf06GDgwbKr%2Bl8xn7xqFsQbPTN0jatdF1NNoWf0N6Xhyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWvvI%2FUzAs47ChWazKtwDiDnqyoSHmwCg9vw6ReVQQsbSvLaCq5CaynzvQsju0OIt8a22N60iB8WcikcGb%2FsciyzOV4r3w8ai3cYZTiFB%2Fc1fdMTU9jQcaqY3AofBESlI%2BuF4g29uM99hMnPWoBlgHZ8WmzoW84XGr6%2F830ZAdDIxaKfpi2uDWpC1C%2BA4q1eSb42fNL8%2FOY0GL2C1vYRtNuVy4vOZPyw1U4WL0b6vsfOOJ%2BGKLCIpOlwVva1AbzLLPG4bo0uhLeHKyGdYDiWSrXIduuRmWep1gcYos%2BFJcR8Vzl2SYl17uhObzaLZLL0DkoiHpXtK3s1B6bwpczyyVlUnmyiNAgmNtdHB1GitlO%2Bj3nAF1uXURIxrRouykCo%2FzpJk6e8nFiPqT%2B6dgazwDYlUhrdw5pzWAX1KuOsYzQxFcRZo5qP1h%2FluY%2FBO1UwkkyzCjE2393JWPBTtjDjRx5Te8LkNhCGjJnVFuOpvGHpN%2Fs8IBOLiewHG8zAZYP9M4GA2hNI5%2FQxT1Tl8I4uOf3y8NwJG8fI4THz%2FXRmuYmIK1PIt5JynMqY092Zc9OuMvf%2F009nYOrx08McOydvbioE5W%2FLreQiYkLeztbO84%2FvP74a%2Br0FUs0P7%2BlDVNFZDwzjFLxm3lxBHrxsw8%2BzOvwY6pgGWtUd3ZRl0d3XXHbf7uHBOYV4I5jL9ulHJfd0tD2yQtmKYwe1PvBfCp%2F4JcxRWb1nF2WdtSj8HP4%2BY0lZyFUJw3HEPZJ5RbnLHPPHeDZtvQOAVLb1NCPvO9CPnaRFPwv2Ik2INO5X19GQcyY54QBwR2%2FeOVVgtGDCGcU2VTHB3NzEVIB2Zv1VEaV2JWYbqFK3thPUZLXpoU6FjyuWpJHz505xYdDxK&X-Amz-Signature=1892438a7999b4e9bd3dd4c95a02565b653f34fca9e3f52a2c59432b2ee6dff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV434BTK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF79AhHjWLqmduTcWCJppkazxbibX84VRLy52R2xbjs0AiBf06GDgwbKr%2Bl8xn7xqFsQbPTN0jatdF1NNoWf0N6Xhyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWvvI%2FUzAs47ChWazKtwDiDnqyoSHmwCg9vw6ReVQQsbSvLaCq5CaynzvQsju0OIt8a22N60iB8WcikcGb%2FsciyzOV4r3w8ai3cYZTiFB%2Fc1fdMTU9jQcaqY3AofBESlI%2BuF4g29uM99hMnPWoBlgHZ8WmzoW84XGr6%2F830ZAdDIxaKfpi2uDWpC1C%2BA4q1eSb42fNL8%2FOY0GL2C1vYRtNuVy4vOZPyw1U4WL0b6vsfOOJ%2BGKLCIpOlwVva1AbzLLPG4bo0uhLeHKyGdYDiWSrXIduuRmWep1gcYos%2BFJcR8Vzl2SYl17uhObzaLZLL0DkoiHpXtK3s1B6bwpczyyVlUnmyiNAgmNtdHB1GitlO%2Bj3nAF1uXURIxrRouykCo%2FzpJk6e8nFiPqT%2B6dgazwDYlUhrdw5pzWAX1KuOsYzQxFcRZo5qP1h%2FluY%2FBO1UwkkyzCjE2393JWPBTtjDjRx5Te8LkNhCGjJnVFuOpvGHpN%2Fs8IBOLiewHG8zAZYP9M4GA2hNI5%2FQxT1Tl8I4uOf3y8NwJG8fI4THz%2FXRmuYmIK1PIt5JynMqY092Zc9OuMvf%2F009nYOrx08McOydvbioE5W%2FLreQiYkLeztbO84%2FvP74a%2Br0FUs0P7%2BlDVNFZDwzjFLxm3lxBHrxsw8%2BzOvwY6pgGWtUd3ZRl0d3XXHbf7uHBOYV4I5jL9ulHJfd0tD2yQtmKYwe1PvBfCp%2F4JcxRWb1nF2WdtSj8HP4%2BY0lZyFUJw3HEPZJ5RbnLHPPHeDZtvQOAVLb1NCPvO9CPnaRFPwv2Ik2INO5X19GQcyY54QBwR2%2FeOVVgtGDCGcU2VTHB3NzEVIB2Zv1VEaV2JWYbqFK3thPUZLXpoU6FjyuWpJHz505xYdDxK&X-Amz-Signature=a0f710672eb418ed36c9135c27dc24dd56978ad83f0ec4235853ad9fc8be07c8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV434BTK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF79AhHjWLqmduTcWCJppkazxbibX84VRLy52R2xbjs0AiBf06GDgwbKr%2Bl8xn7xqFsQbPTN0jatdF1NNoWf0N6Xhyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWvvI%2FUzAs47ChWazKtwDiDnqyoSHmwCg9vw6ReVQQsbSvLaCq5CaynzvQsju0OIt8a22N60iB8WcikcGb%2FsciyzOV4r3w8ai3cYZTiFB%2Fc1fdMTU9jQcaqY3AofBESlI%2BuF4g29uM99hMnPWoBlgHZ8WmzoW84XGr6%2F830ZAdDIxaKfpi2uDWpC1C%2BA4q1eSb42fNL8%2FOY0GL2C1vYRtNuVy4vOZPyw1U4WL0b6vsfOOJ%2BGKLCIpOlwVva1AbzLLPG4bo0uhLeHKyGdYDiWSrXIduuRmWep1gcYos%2BFJcR8Vzl2SYl17uhObzaLZLL0DkoiHpXtK3s1B6bwpczyyVlUnmyiNAgmNtdHB1GitlO%2Bj3nAF1uXURIxrRouykCo%2FzpJk6e8nFiPqT%2B6dgazwDYlUhrdw5pzWAX1KuOsYzQxFcRZo5qP1h%2FluY%2FBO1UwkkyzCjE2393JWPBTtjDjRx5Te8LkNhCGjJnVFuOpvGHpN%2Fs8IBOLiewHG8zAZYP9M4GA2hNI5%2FQxT1Tl8I4uOf3y8NwJG8fI4THz%2FXRmuYmIK1PIt5JynMqY092Zc9OuMvf%2F009nYOrx08McOydvbioE5W%2FLreQiYkLeztbO84%2FvP74a%2Br0FUs0P7%2BlDVNFZDwzjFLxm3lxBHrxsw8%2BzOvwY6pgGWtUd3ZRl0d3XXHbf7uHBOYV4I5jL9ulHJfd0tD2yQtmKYwe1PvBfCp%2F4JcxRWb1nF2WdtSj8HP4%2BY0lZyFUJw3HEPZJ5RbnLHPPHeDZtvQOAVLb1NCPvO9CPnaRFPwv2Ik2INO5X19GQcyY54QBwR2%2FeOVVgtGDCGcU2VTHB3NzEVIB2Zv1VEaV2JWYbqFK3thPUZLXpoU6FjyuWpJHz505xYdDxK&X-Amz-Signature=416feaa429b1c91b5f301110b57a32340ebeab3435b224269515eea574ca853d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV434BTK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF79AhHjWLqmduTcWCJppkazxbibX84VRLy52R2xbjs0AiBf06GDgwbKr%2Bl8xn7xqFsQbPTN0jatdF1NNoWf0N6Xhyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWvvI%2FUzAs47ChWazKtwDiDnqyoSHmwCg9vw6ReVQQsbSvLaCq5CaynzvQsju0OIt8a22N60iB8WcikcGb%2FsciyzOV4r3w8ai3cYZTiFB%2Fc1fdMTU9jQcaqY3AofBESlI%2BuF4g29uM99hMnPWoBlgHZ8WmzoW84XGr6%2F830ZAdDIxaKfpi2uDWpC1C%2BA4q1eSb42fNL8%2FOY0GL2C1vYRtNuVy4vOZPyw1U4WL0b6vsfOOJ%2BGKLCIpOlwVva1AbzLLPG4bo0uhLeHKyGdYDiWSrXIduuRmWep1gcYos%2BFJcR8Vzl2SYl17uhObzaLZLL0DkoiHpXtK3s1B6bwpczyyVlUnmyiNAgmNtdHB1GitlO%2Bj3nAF1uXURIxrRouykCo%2FzpJk6e8nFiPqT%2B6dgazwDYlUhrdw5pzWAX1KuOsYzQxFcRZo5qP1h%2FluY%2FBO1UwkkyzCjE2393JWPBTtjDjRx5Te8LkNhCGjJnVFuOpvGHpN%2Fs8IBOLiewHG8zAZYP9M4GA2hNI5%2FQxT1Tl8I4uOf3y8NwJG8fI4THz%2FXRmuYmIK1PIt5JynMqY092Zc9OuMvf%2F009nYOrx08McOydvbioE5W%2FLreQiYkLeztbO84%2FvP74a%2Br0FUs0P7%2BlDVNFZDwzjFLxm3lxBHrxsw8%2BzOvwY6pgGWtUd3ZRl0d3XXHbf7uHBOYV4I5jL9ulHJfd0tD2yQtmKYwe1PvBfCp%2F4JcxRWb1nF2WdtSj8HP4%2BY0lZyFUJw3HEPZJ5RbnLHPPHeDZtvQOAVLb1NCPvO9CPnaRFPwv2Ik2INO5X19GQcyY54QBwR2%2FeOVVgtGDCGcU2VTHB3NzEVIB2Zv1VEaV2JWYbqFK3thPUZLXpoU6FjyuWpJHz505xYdDxK&X-Amz-Signature=8ad9f6bd2ae37bd6f5cf36b1bffad161b6972ad15eba47ed296f6a46ae584608&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV434BTK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF79AhHjWLqmduTcWCJppkazxbibX84VRLy52R2xbjs0AiBf06GDgwbKr%2Bl8xn7xqFsQbPTN0jatdF1NNoWf0N6Xhyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWvvI%2FUzAs47ChWazKtwDiDnqyoSHmwCg9vw6ReVQQsbSvLaCq5CaynzvQsju0OIt8a22N60iB8WcikcGb%2FsciyzOV4r3w8ai3cYZTiFB%2Fc1fdMTU9jQcaqY3AofBESlI%2BuF4g29uM99hMnPWoBlgHZ8WmzoW84XGr6%2F830ZAdDIxaKfpi2uDWpC1C%2BA4q1eSb42fNL8%2FOY0GL2C1vYRtNuVy4vOZPyw1U4WL0b6vsfOOJ%2BGKLCIpOlwVva1AbzLLPG4bo0uhLeHKyGdYDiWSrXIduuRmWep1gcYos%2BFJcR8Vzl2SYl17uhObzaLZLL0DkoiHpXtK3s1B6bwpczyyVlUnmyiNAgmNtdHB1GitlO%2Bj3nAF1uXURIxrRouykCo%2FzpJk6e8nFiPqT%2B6dgazwDYlUhrdw5pzWAX1KuOsYzQxFcRZo5qP1h%2FluY%2FBO1UwkkyzCjE2393JWPBTtjDjRx5Te8LkNhCGjJnVFuOpvGHpN%2Fs8IBOLiewHG8zAZYP9M4GA2hNI5%2FQxT1Tl8I4uOf3y8NwJG8fI4THz%2FXRmuYmIK1PIt5JynMqY092Zc9OuMvf%2F009nYOrx08McOydvbioE5W%2FLreQiYkLeztbO84%2FvP74a%2Br0FUs0P7%2BlDVNFZDwzjFLxm3lxBHrxsw8%2BzOvwY6pgGWtUd3ZRl0d3XXHbf7uHBOYV4I5jL9ulHJfd0tD2yQtmKYwe1PvBfCp%2F4JcxRWb1nF2WdtSj8HP4%2BY0lZyFUJw3HEPZJ5RbnLHPPHeDZtvQOAVLb1NCPvO9CPnaRFPwv2Ik2INO5X19GQcyY54QBwR2%2FeOVVgtGDCGcU2VTHB3NzEVIB2Zv1VEaV2JWYbqFK3thPUZLXpoU6FjyuWpJHz505xYdDxK&X-Amz-Signature=c9a59ece217b0a8dff736ef05b9261b1e2d4238957683b19ba778fc9b8ee85f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
