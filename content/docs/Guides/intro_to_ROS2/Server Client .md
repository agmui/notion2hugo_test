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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDF74NS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG5lxbriPIC%2FBjA9%2Fn5pN7cne9N0hHGju%2F1kbMR4bHYjAiAfcH%2BzHLS6srZ%2BMhtkIH%2BTNeDIThZW0ZC0EdZANtFF3Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZm8ppCCzdkS4%2FetoKtwDtWI%2Fl%2FS1WMwJEpQE%2Fz%2BiAEk57T9wmlHUhx2DTdnO5QdwaSpJq9jrwhZX3Ut1b3bzMCeQkXVnDw%2F%2F2RfpWno%2F9xOo8xdC4Cm%2FcTO%2BB3bMsT8Ui%2FfgwADE%2Fi7ewxAyEK%2Fno7Kf9NXSh0VzzJChvfUQN6SggSwwLUBCsGwIzc7JFAQKyOpGV52HWX273FYEbKJvO83frDzQtTufNZbojfQFGGHojIv0RDizsH6%2FfVOL9oRKNdt%2FcajfdrmmfrOz0rcusYOZogMBnTcXj3IYk45XeUacuXhiH18As1lzPwrFMoO7qXO2Zfi6YUb6P0JtEz0kXlM3YnJe56estgkr5%2BUxRdtKDqbLrVRXroBVnqEvyAX%2Bs7qYkteMGEw2dXCZWGqogDUsV6xdXdVa%2BZioABQ3q6VTHvrlrqOiFn%2FzL8Xu9qIPUXgLRPzZvzM6u3q03ZpOmmm%2F%2BnUYSHgGtHHhQG2pyHjSZd3vvik6brLPqGVYf4gL9k43nQChartp9UDpOvrGo6%2Fd5YZ1PWuMyKuB%2FvzREJtrvJHSDT%2BmYilB7%2Fsoye2N1idTrdT5nGHcDNVYkskZL71Zv2qtgPnyUx6XpcvPYPoQnndBdax%2FzUi8RUJKQge2RUfaa9mmFGqcdQsw%2Ft2BwgY6pgHpHhDXIXgeCdf5Dg59OYW4ZqJYHyKOr5jMBSRsJYBrHDEvCDyTjewzA4pFKEP%2B%2B6jXeMLIJe9AM5ilOeSAGtjBUivrhxVI%2FDdH6lb6VEzgH9Fp5HS9AnSHnKmshflpgWlShSKkdhY8jotBaP7uCpTaPUWIdDtf3zet%2FLBq3vPoABLPEddx14Lwi3Nwia2f9DJojdxBvPy7Yt%2Fm07MozchnqnRigF2z&X-Amz-Signature=2ec23b0478f63f07e6a17ca00ae68804fcceb328de75c17271d9070514ed5ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDF74NS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG5lxbriPIC%2FBjA9%2Fn5pN7cne9N0hHGju%2F1kbMR4bHYjAiAfcH%2BzHLS6srZ%2BMhtkIH%2BTNeDIThZW0ZC0EdZANtFF3Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZm8ppCCzdkS4%2FetoKtwDtWI%2Fl%2FS1WMwJEpQE%2Fz%2BiAEk57T9wmlHUhx2DTdnO5QdwaSpJq9jrwhZX3Ut1b3bzMCeQkXVnDw%2F%2F2RfpWno%2F9xOo8xdC4Cm%2FcTO%2BB3bMsT8Ui%2FfgwADE%2Fi7ewxAyEK%2Fno7Kf9NXSh0VzzJChvfUQN6SggSwwLUBCsGwIzc7JFAQKyOpGV52HWX273FYEbKJvO83frDzQtTufNZbojfQFGGHojIv0RDizsH6%2FfVOL9oRKNdt%2FcajfdrmmfrOz0rcusYOZogMBnTcXj3IYk45XeUacuXhiH18As1lzPwrFMoO7qXO2Zfi6YUb6P0JtEz0kXlM3YnJe56estgkr5%2BUxRdtKDqbLrVRXroBVnqEvyAX%2Bs7qYkteMGEw2dXCZWGqogDUsV6xdXdVa%2BZioABQ3q6VTHvrlrqOiFn%2FzL8Xu9qIPUXgLRPzZvzM6u3q03ZpOmmm%2F%2BnUYSHgGtHHhQG2pyHjSZd3vvik6brLPqGVYf4gL9k43nQChartp9UDpOvrGo6%2Fd5YZ1PWuMyKuB%2FvzREJtrvJHSDT%2BmYilB7%2Fsoye2N1idTrdT5nGHcDNVYkskZL71Zv2qtgPnyUx6XpcvPYPoQnndBdax%2FzUi8RUJKQge2RUfaa9mmFGqcdQsw%2Ft2BwgY6pgHpHhDXIXgeCdf5Dg59OYW4ZqJYHyKOr5jMBSRsJYBrHDEvCDyTjewzA4pFKEP%2B%2B6jXeMLIJe9AM5ilOeSAGtjBUivrhxVI%2FDdH6lb6VEzgH9Fp5HS9AnSHnKmshflpgWlShSKkdhY8jotBaP7uCpTaPUWIdDtf3zet%2FLBq3vPoABLPEddx14Lwi3Nwia2f9DJojdxBvPy7Yt%2Fm07MozchnqnRigF2z&X-Amz-Signature=cc35c1b3fd9da11908b4ea4d8b0749c0404bcc887240580e95b023d3ca709816&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDF74NS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG5lxbriPIC%2FBjA9%2Fn5pN7cne9N0hHGju%2F1kbMR4bHYjAiAfcH%2BzHLS6srZ%2BMhtkIH%2BTNeDIThZW0ZC0EdZANtFF3Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZm8ppCCzdkS4%2FetoKtwDtWI%2Fl%2FS1WMwJEpQE%2Fz%2BiAEk57T9wmlHUhx2DTdnO5QdwaSpJq9jrwhZX3Ut1b3bzMCeQkXVnDw%2F%2F2RfpWno%2F9xOo8xdC4Cm%2FcTO%2BB3bMsT8Ui%2FfgwADE%2Fi7ewxAyEK%2Fno7Kf9NXSh0VzzJChvfUQN6SggSwwLUBCsGwIzc7JFAQKyOpGV52HWX273FYEbKJvO83frDzQtTufNZbojfQFGGHojIv0RDizsH6%2FfVOL9oRKNdt%2FcajfdrmmfrOz0rcusYOZogMBnTcXj3IYk45XeUacuXhiH18As1lzPwrFMoO7qXO2Zfi6YUb6P0JtEz0kXlM3YnJe56estgkr5%2BUxRdtKDqbLrVRXroBVnqEvyAX%2Bs7qYkteMGEw2dXCZWGqogDUsV6xdXdVa%2BZioABQ3q6VTHvrlrqOiFn%2FzL8Xu9qIPUXgLRPzZvzM6u3q03ZpOmmm%2F%2BnUYSHgGtHHhQG2pyHjSZd3vvik6brLPqGVYf4gL9k43nQChartp9UDpOvrGo6%2Fd5YZ1PWuMyKuB%2FvzREJtrvJHSDT%2BmYilB7%2Fsoye2N1idTrdT5nGHcDNVYkskZL71Zv2qtgPnyUx6XpcvPYPoQnndBdax%2FzUi8RUJKQge2RUfaa9mmFGqcdQsw%2Ft2BwgY6pgHpHhDXIXgeCdf5Dg59OYW4ZqJYHyKOr5jMBSRsJYBrHDEvCDyTjewzA4pFKEP%2B%2B6jXeMLIJe9AM5ilOeSAGtjBUivrhxVI%2FDdH6lb6VEzgH9Fp5HS9AnSHnKmshflpgWlShSKkdhY8jotBaP7uCpTaPUWIdDtf3zet%2FLBq3vPoABLPEddx14Lwi3Nwia2f9DJojdxBvPy7Yt%2Fm07MozchnqnRigF2z&X-Amz-Signature=35eb8a9aedc75d5729f1330eab1c45333cca31fd49b21e30d3b3f520de8941ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDF74NS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG5lxbriPIC%2FBjA9%2Fn5pN7cne9N0hHGju%2F1kbMR4bHYjAiAfcH%2BzHLS6srZ%2BMhtkIH%2BTNeDIThZW0ZC0EdZANtFF3Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZm8ppCCzdkS4%2FetoKtwDtWI%2Fl%2FS1WMwJEpQE%2Fz%2BiAEk57T9wmlHUhx2DTdnO5QdwaSpJq9jrwhZX3Ut1b3bzMCeQkXVnDw%2F%2F2RfpWno%2F9xOo8xdC4Cm%2FcTO%2BB3bMsT8Ui%2FfgwADE%2Fi7ewxAyEK%2Fno7Kf9NXSh0VzzJChvfUQN6SggSwwLUBCsGwIzc7JFAQKyOpGV52HWX273FYEbKJvO83frDzQtTufNZbojfQFGGHojIv0RDizsH6%2FfVOL9oRKNdt%2FcajfdrmmfrOz0rcusYOZogMBnTcXj3IYk45XeUacuXhiH18As1lzPwrFMoO7qXO2Zfi6YUb6P0JtEz0kXlM3YnJe56estgkr5%2BUxRdtKDqbLrVRXroBVnqEvyAX%2Bs7qYkteMGEw2dXCZWGqogDUsV6xdXdVa%2BZioABQ3q6VTHvrlrqOiFn%2FzL8Xu9qIPUXgLRPzZvzM6u3q03ZpOmmm%2F%2BnUYSHgGtHHhQG2pyHjSZd3vvik6brLPqGVYf4gL9k43nQChartp9UDpOvrGo6%2Fd5YZ1PWuMyKuB%2FvzREJtrvJHSDT%2BmYilB7%2Fsoye2N1idTrdT5nGHcDNVYkskZL71Zv2qtgPnyUx6XpcvPYPoQnndBdax%2FzUi8RUJKQge2RUfaa9mmFGqcdQsw%2Ft2BwgY6pgHpHhDXIXgeCdf5Dg59OYW4ZqJYHyKOr5jMBSRsJYBrHDEvCDyTjewzA4pFKEP%2B%2B6jXeMLIJe9AM5ilOeSAGtjBUivrhxVI%2FDdH6lb6VEzgH9Fp5HS9AnSHnKmshflpgWlShSKkdhY8jotBaP7uCpTaPUWIdDtf3zet%2FLBq3vPoABLPEddx14Lwi3Nwia2f9DJojdxBvPy7Yt%2Fm07MozchnqnRigF2z&X-Amz-Signature=9b5cb0f920015d6565ad90dfe806bbfd8a91502b798b7d6c1f5587062484dba3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDF74NS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG5lxbriPIC%2FBjA9%2Fn5pN7cne9N0hHGju%2F1kbMR4bHYjAiAfcH%2BzHLS6srZ%2BMhtkIH%2BTNeDIThZW0ZC0EdZANtFF3Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZm8ppCCzdkS4%2FetoKtwDtWI%2Fl%2FS1WMwJEpQE%2Fz%2BiAEk57T9wmlHUhx2DTdnO5QdwaSpJq9jrwhZX3Ut1b3bzMCeQkXVnDw%2F%2F2RfpWno%2F9xOo8xdC4Cm%2FcTO%2BB3bMsT8Ui%2FfgwADE%2Fi7ewxAyEK%2Fno7Kf9NXSh0VzzJChvfUQN6SggSwwLUBCsGwIzc7JFAQKyOpGV52HWX273FYEbKJvO83frDzQtTufNZbojfQFGGHojIv0RDizsH6%2FfVOL9oRKNdt%2FcajfdrmmfrOz0rcusYOZogMBnTcXj3IYk45XeUacuXhiH18As1lzPwrFMoO7qXO2Zfi6YUb6P0JtEz0kXlM3YnJe56estgkr5%2BUxRdtKDqbLrVRXroBVnqEvyAX%2Bs7qYkteMGEw2dXCZWGqogDUsV6xdXdVa%2BZioABQ3q6VTHvrlrqOiFn%2FzL8Xu9qIPUXgLRPzZvzM6u3q03ZpOmmm%2F%2BnUYSHgGtHHhQG2pyHjSZd3vvik6brLPqGVYf4gL9k43nQChartp9UDpOvrGo6%2Fd5YZ1PWuMyKuB%2FvzREJtrvJHSDT%2BmYilB7%2Fsoye2N1idTrdT5nGHcDNVYkskZL71Zv2qtgPnyUx6XpcvPYPoQnndBdax%2FzUi8RUJKQge2RUfaa9mmFGqcdQsw%2Ft2BwgY6pgHpHhDXIXgeCdf5Dg59OYW4ZqJYHyKOr5jMBSRsJYBrHDEvCDyTjewzA4pFKEP%2B%2B6jXeMLIJe9AM5ilOeSAGtjBUivrhxVI%2FDdH6lb6VEzgH9Fp5HS9AnSHnKmshflpgWlShSKkdhY8jotBaP7uCpTaPUWIdDtf3zet%2FLBq3vPoABLPEddx14Lwi3Nwia2f9DJojdxBvPy7Yt%2Fm07MozchnqnRigF2z&X-Amz-Signature=4a77f80504c038dc9dae49293b28eeb76cc71c31224a5496de2e1b1da173c309&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
