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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PGTB2B%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDM4grPl57D5kGATc0LDiifNh46iegzP8w%2Bm7WN7m%2F6IgIhAI77ONBf%2FM8uluWGSabl3NwEKkZkBfb0BN91xae%2Bv2AxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5VjFMexc2e0yUFEq3AODyB0MJq%2Bcl8ZELZy1dp6LgkWefupvvW9R0Fi5v5lE2qyqa%2FMgcjUrtG6E%2FiwjMh0vFxqHixTQmqNWwq4fieZ0I7DDf4EMOIaq5I37KiA6h7pOKWQ%2FXedjAk9xT0goJjrBj%2BC2a1LZTGUSCi5TOOLz%2BwLjBNeCguoIfwBg0Bj7ueu3R1csUUxm8TCcO6nt4SyQ432HhdYLZUSlFh9HpQVRtdPHI9KknFabQ8tcCN88CnFs86N0QbcUjb%2F%2F31HRV5VxxQntK%2BJXmWDwWQjCPlMOtYAi1EjPONatlA4BmuJgOWyIgo7txSC92Q6C4wKCWpanhOtIubifA8cxIX9WKluZyPpkDdXueKQuN1DuA9fR6OAn1KFuORpvkbVW2gBY4e7lTvy7C5nv%2FC8z7qltSWRtCiAW8Cf7TL8eAfba4JLKwjnI%2BA1%2FuLUrL2UbouQInr4Q2vhiSzKA%2Bp%2FSmIzch2MZECRb%2B8JiQsjM4ajmPV64CGxG8TbR%2BJPHbdYZ68bQ4VCcuKaaB3jScxcWCLdrMOL6TIeMzc8%2Fsbp338V4U9uGjGYc9650jGb%2FDZDaP1wXZ0z%2B15j12%2BVYzSneUtamUgN6ktW17Re4DBLeLj8%2BPUdvELv01HrcKa5HNNz70DD7iPbBBjqkAQkEzipPnwEk28XhPZz74sqCzzrwq%2FuJJaJhhSNW6IWTqke94QMT%2BtD56KM68gpAZuGxxYKwvya1Nug7oXt3qmlPdBsenNlBwimGSOn7g0VmIc10MVGHBA3heJPfxiGQbUdD%2FJC%2BqyV2a7wx958q0gQ6VyHNXi6XuBB4rfvJIkfEBeSfj2skEzC75CTOlvel9hUNdL9nuQD3N6R1ypsRBct1I28q&X-Amz-Signature=e821fd0de04e8027b4faa8352eae2953f79caae713d467bb55e6827544ee4b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PGTB2B%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDM4grPl57D5kGATc0LDiifNh46iegzP8w%2Bm7WN7m%2F6IgIhAI77ONBf%2FM8uluWGSabl3NwEKkZkBfb0BN91xae%2Bv2AxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5VjFMexc2e0yUFEq3AODyB0MJq%2Bcl8ZELZy1dp6LgkWefupvvW9R0Fi5v5lE2qyqa%2FMgcjUrtG6E%2FiwjMh0vFxqHixTQmqNWwq4fieZ0I7DDf4EMOIaq5I37KiA6h7pOKWQ%2FXedjAk9xT0goJjrBj%2BC2a1LZTGUSCi5TOOLz%2BwLjBNeCguoIfwBg0Bj7ueu3R1csUUxm8TCcO6nt4SyQ432HhdYLZUSlFh9HpQVRtdPHI9KknFabQ8tcCN88CnFs86N0QbcUjb%2F%2F31HRV5VxxQntK%2BJXmWDwWQjCPlMOtYAi1EjPONatlA4BmuJgOWyIgo7txSC92Q6C4wKCWpanhOtIubifA8cxIX9WKluZyPpkDdXueKQuN1DuA9fR6OAn1KFuORpvkbVW2gBY4e7lTvy7C5nv%2FC8z7qltSWRtCiAW8Cf7TL8eAfba4JLKwjnI%2BA1%2FuLUrL2UbouQInr4Q2vhiSzKA%2Bp%2FSmIzch2MZECRb%2B8JiQsjM4ajmPV64CGxG8TbR%2BJPHbdYZ68bQ4VCcuKaaB3jScxcWCLdrMOL6TIeMzc8%2Fsbp338V4U9uGjGYc9650jGb%2FDZDaP1wXZ0z%2B15j12%2BVYzSneUtamUgN6ktW17Re4DBLeLj8%2BPUdvELv01HrcKa5HNNz70DD7iPbBBjqkAQkEzipPnwEk28XhPZz74sqCzzrwq%2FuJJaJhhSNW6IWTqke94QMT%2BtD56KM68gpAZuGxxYKwvya1Nug7oXt3qmlPdBsenNlBwimGSOn7g0VmIc10MVGHBA3heJPfxiGQbUdD%2FJC%2BqyV2a7wx958q0gQ6VyHNXi6XuBB4rfvJIkfEBeSfj2skEzC75CTOlvel9hUNdL9nuQD3N6R1ypsRBct1I28q&X-Amz-Signature=98b095a06e986c9fdd49b447939b7ff4ed80cac87a572cdd26f600c5bb6c4ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PGTB2B%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDM4grPl57D5kGATc0LDiifNh46iegzP8w%2Bm7WN7m%2F6IgIhAI77ONBf%2FM8uluWGSabl3NwEKkZkBfb0BN91xae%2Bv2AxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5VjFMexc2e0yUFEq3AODyB0MJq%2Bcl8ZELZy1dp6LgkWefupvvW9R0Fi5v5lE2qyqa%2FMgcjUrtG6E%2FiwjMh0vFxqHixTQmqNWwq4fieZ0I7DDf4EMOIaq5I37KiA6h7pOKWQ%2FXedjAk9xT0goJjrBj%2BC2a1LZTGUSCi5TOOLz%2BwLjBNeCguoIfwBg0Bj7ueu3R1csUUxm8TCcO6nt4SyQ432HhdYLZUSlFh9HpQVRtdPHI9KknFabQ8tcCN88CnFs86N0QbcUjb%2F%2F31HRV5VxxQntK%2BJXmWDwWQjCPlMOtYAi1EjPONatlA4BmuJgOWyIgo7txSC92Q6C4wKCWpanhOtIubifA8cxIX9WKluZyPpkDdXueKQuN1DuA9fR6OAn1KFuORpvkbVW2gBY4e7lTvy7C5nv%2FC8z7qltSWRtCiAW8Cf7TL8eAfba4JLKwjnI%2BA1%2FuLUrL2UbouQInr4Q2vhiSzKA%2Bp%2FSmIzch2MZECRb%2B8JiQsjM4ajmPV64CGxG8TbR%2BJPHbdYZ68bQ4VCcuKaaB3jScxcWCLdrMOL6TIeMzc8%2Fsbp338V4U9uGjGYc9650jGb%2FDZDaP1wXZ0z%2B15j12%2BVYzSneUtamUgN6ktW17Re4DBLeLj8%2BPUdvELv01HrcKa5HNNz70DD7iPbBBjqkAQkEzipPnwEk28XhPZz74sqCzzrwq%2FuJJaJhhSNW6IWTqke94QMT%2BtD56KM68gpAZuGxxYKwvya1Nug7oXt3qmlPdBsenNlBwimGSOn7g0VmIc10MVGHBA3heJPfxiGQbUdD%2FJC%2BqyV2a7wx958q0gQ6VyHNXi6XuBB4rfvJIkfEBeSfj2skEzC75CTOlvel9hUNdL9nuQD3N6R1ypsRBct1I28q&X-Amz-Signature=e34cd02b83ec654bf2b7a056d633d590401675ec288f87aff4f1a5586f2f1d18&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PGTB2B%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDM4grPl57D5kGATc0LDiifNh46iegzP8w%2Bm7WN7m%2F6IgIhAI77ONBf%2FM8uluWGSabl3NwEKkZkBfb0BN91xae%2Bv2AxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5VjFMexc2e0yUFEq3AODyB0MJq%2Bcl8ZELZy1dp6LgkWefupvvW9R0Fi5v5lE2qyqa%2FMgcjUrtG6E%2FiwjMh0vFxqHixTQmqNWwq4fieZ0I7DDf4EMOIaq5I37KiA6h7pOKWQ%2FXedjAk9xT0goJjrBj%2BC2a1LZTGUSCi5TOOLz%2BwLjBNeCguoIfwBg0Bj7ueu3R1csUUxm8TCcO6nt4SyQ432HhdYLZUSlFh9HpQVRtdPHI9KknFabQ8tcCN88CnFs86N0QbcUjb%2F%2F31HRV5VxxQntK%2BJXmWDwWQjCPlMOtYAi1EjPONatlA4BmuJgOWyIgo7txSC92Q6C4wKCWpanhOtIubifA8cxIX9WKluZyPpkDdXueKQuN1DuA9fR6OAn1KFuORpvkbVW2gBY4e7lTvy7C5nv%2FC8z7qltSWRtCiAW8Cf7TL8eAfba4JLKwjnI%2BA1%2FuLUrL2UbouQInr4Q2vhiSzKA%2Bp%2FSmIzch2MZECRb%2B8JiQsjM4ajmPV64CGxG8TbR%2BJPHbdYZ68bQ4VCcuKaaB3jScxcWCLdrMOL6TIeMzc8%2Fsbp338V4U9uGjGYc9650jGb%2FDZDaP1wXZ0z%2B15j12%2BVYzSneUtamUgN6ktW17Re4DBLeLj8%2BPUdvELv01HrcKa5HNNz70DD7iPbBBjqkAQkEzipPnwEk28XhPZz74sqCzzrwq%2FuJJaJhhSNW6IWTqke94QMT%2BtD56KM68gpAZuGxxYKwvya1Nug7oXt3qmlPdBsenNlBwimGSOn7g0VmIc10MVGHBA3heJPfxiGQbUdD%2FJC%2BqyV2a7wx958q0gQ6VyHNXi6XuBB4rfvJIkfEBeSfj2skEzC75CTOlvel9hUNdL9nuQD3N6R1ypsRBct1I28q&X-Amz-Signature=3266ca441465eeec0ed3e1d2ac0d366cb3e17c4509f40b1ffb639a76c7191f94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PGTB2B%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDM4grPl57D5kGATc0LDiifNh46iegzP8w%2Bm7WN7m%2F6IgIhAI77ONBf%2FM8uluWGSabl3NwEKkZkBfb0BN91xae%2Bv2AxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5VjFMexc2e0yUFEq3AODyB0MJq%2Bcl8ZELZy1dp6LgkWefupvvW9R0Fi5v5lE2qyqa%2FMgcjUrtG6E%2FiwjMh0vFxqHixTQmqNWwq4fieZ0I7DDf4EMOIaq5I37KiA6h7pOKWQ%2FXedjAk9xT0goJjrBj%2BC2a1LZTGUSCi5TOOLz%2BwLjBNeCguoIfwBg0Bj7ueu3R1csUUxm8TCcO6nt4SyQ432HhdYLZUSlFh9HpQVRtdPHI9KknFabQ8tcCN88CnFs86N0QbcUjb%2F%2F31HRV5VxxQntK%2BJXmWDwWQjCPlMOtYAi1EjPONatlA4BmuJgOWyIgo7txSC92Q6C4wKCWpanhOtIubifA8cxIX9WKluZyPpkDdXueKQuN1DuA9fR6OAn1KFuORpvkbVW2gBY4e7lTvy7C5nv%2FC8z7qltSWRtCiAW8Cf7TL8eAfba4JLKwjnI%2BA1%2FuLUrL2UbouQInr4Q2vhiSzKA%2Bp%2FSmIzch2MZECRb%2B8JiQsjM4ajmPV64CGxG8TbR%2BJPHbdYZ68bQ4VCcuKaaB3jScxcWCLdrMOL6TIeMzc8%2Fsbp338V4U9uGjGYc9650jGb%2FDZDaP1wXZ0z%2B15j12%2BVYzSneUtamUgN6ktW17Re4DBLeLj8%2BPUdvELv01HrcKa5HNNz70DD7iPbBBjqkAQkEzipPnwEk28XhPZz74sqCzzrwq%2FuJJaJhhSNW6IWTqke94QMT%2BtD56KM68gpAZuGxxYKwvya1Nug7oXt3qmlPdBsenNlBwimGSOn7g0VmIc10MVGHBA3heJPfxiGQbUdD%2FJC%2BqyV2a7wx958q0gQ6VyHNXi6XuBB4rfvJIkfEBeSfj2skEzC75CTOlvel9hUNdL9nuQD3N6R1ypsRBct1I28q&X-Amz-Signature=c7c3cca430e83d8e150c2163df16841ae0da6031f8e2a9cfe606af6beb80013b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
