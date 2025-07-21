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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HDUGA6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvln1e9%2B3DdVsQPkL9LsB%2BV1ByCr2U6KLlHrR7L6npAiEAmG7AM9LHKuRWjLYiDnR7mh8MltC%2Bl05qmsHdBEeKU5gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAH65XdJ1trASerN3ircA95K6BWTyjf6eN%2B0tFFKfUSjCp9ZqZpVkoIrYzzbO%2F4LE3sQY4s5x13yQXY4Pkqz9Isfdgwd9owbNM5tw7vRcJm5kFriYeisHEq9BNd0ANaphEENQJel%2FFTmwLEFdInGTcfJQUIoY%2B%2F1ghfiBQTSuADxQovidp28YAsp7mNd1SmwCwRDpAAyzk%2B8nzPSd7k5i7Gw6ufN119ZVrvxdBt9BTXcgagDDX0kWbeFkC91Re4q4kfhfhhMYzcIxdT6skIkA2ZcK6%2FvW79Mz5POb%2FZyvAp3bTAp7PykThBOupgwVuof5A%2B1UNdj9EI%2BK0R3%2FFy0G%2BV9REpQBa9ocl3kymczzLnYa2pgj2r5UltluJj7FDaeY2GsFzHZSg%2BjqtdhfmyWfYUmXuKInM7TIjkm%2BH0R7PZWswKd0JHfwf0Vqh4zXrQrDnTzLTW2Qj2c4el3KKKjat3M3XsogfFJjMYy43ppt50zsM2euK1SMksHNwY%2B6eHd5N%2B%2FYFnJs7xj0xYogFALSYSR3LuuOqkynm%2Bg4FugRbgQ7sl6Di4QSJJymVk%2FbemMvMne28nwFV0TBx6nDF%2BqFQHpCjWWO7%2B37w8xO3ezxCP6RpszfQCrTLYLUacnenZALlNzAK8ZrNkKvcTbML%2FU%2BMMGOqUBJXTYRdvs1ujSzf0JIj5eu0%2F7tzM0iY8AR5bsykmbly2cXzVlq5pRPl2sLTz0uHX7%2BQ4RbdhXeMP2ZZmIqdYC%2F9K4lgf2jO4vhQhK1tuyxwhWVJEdp7%2BpREaA9xzatuv7gFhYUlhKHWVAzWvdoRlH8%2BA7PQXua2ndde0HAivvB7M08v9HucmfFaEgFsu1LAW7MlvmdWx%2FbACw8va%2Bvter9Qza%2BeZ9&X-Amz-Signature=7016999c7ad42740676e90d9bd020433fc047a47e7bf739ba7433643100121ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HDUGA6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvln1e9%2B3DdVsQPkL9LsB%2BV1ByCr2U6KLlHrR7L6npAiEAmG7AM9LHKuRWjLYiDnR7mh8MltC%2Bl05qmsHdBEeKU5gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAH65XdJ1trASerN3ircA95K6BWTyjf6eN%2B0tFFKfUSjCp9ZqZpVkoIrYzzbO%2F4LE3sQY4s5x13yQXY4Pkqz9Isfdgwd9owbNM5tw7vRcJm5kFriYeisHEq9BNd0ANaphEENQJel%2FFTmwLEFdInGTcfJQUIoY%2B%2F1ghfiBQTSuADxQovidp28YAsp7mNd1SmwCwRDpAAyzk%2B8nzPSd7k5i7Gw6ufN119ZVrvxdBt9BTXcgagDDX0kWbeFkC91Re4q4kfhfhhMYzcIxdT6skIkA2ZcK6%2FvW79Mz5POb%2FZyvAp3bTAp7PykThBOupgwVuof5A%2B1UNdj9EI%2BK0R3%2FFy0G%2BV9REpQBa9ocl3kymczzLnYa2pgj2r5UltluJj7FDaeY2GsFzHZSg%2BjqtdhfmyWfYUmXuKInM7TIjkm%2BH0R7PZWswKd0JHfwf0Vqh4zXrQrDnTzLTW2Qj2c4el3KKKjat3M3XsogfFJjMYy43ppt50zsM2euK1SMksHNwY%2B6eHd5N%2B%2FYFnJs7xj0xYogFALSYSR3LuuOqkynm%2Bg4FugRbgQ7sl6Di4QSJJymVk%2FbemMvMne28nwFV0TBx6nDF%2BqFQHpCjWWO7%2B37w8xO3ezxCP6RpszfQCrTLYLUacnenZALlNzAK8ZrNkKvcTbML%2FU%2BMMGOqUBJXTYRdvs1ujSzf0JIj5eu0%2F7tzM0iY8AR5bsykmbly2cXzVlq5pRPl2sLTz0uHX7%2BQ4RbdhXeMP2ZZmIqdYC%2F9K4lgf2jO4vhQhK1tuyxwhWVJEdp7%2BpREaA9xzatuv7gFhYUlhKHWVAzWvdoRlH8%2BA7PQXua2ndde0HAivvB7M08v9HucmfFaEgFsu1LAW7MlvmdWx%2FbACw8va%2Bvter9Qza%2BeZ9&X-Amz-Signature=99d00e645e46408adf526456ef791e133d493495ca9614c502acd7b26752e10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HDUGA6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvln1e9%2B3DdVsQPkL9LsB%2BV1ByCr2U6KLlHrR7L6npAiEAmG7AM9LHKuRWjLYiDnR7mh8MltC%2Bl05qmsHdBEeKU5gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAH65XdJ1trASerN3ircA95K6BWTyjf6eN%2B0tFFKfUSjCp9ZqZpVkoIrYzzbO%2F4LE3sQY4s5x13yQXY4Pkqz9Isfdgwd9owbNM5tw7vRcJm5kFriYeisHEq9BNd0ANaphEENQJel%2FFTmwLEFdInGTcfJQUIoY%2B%2F1ghfiBQTSuADxQovidp28YAsp7mNd1SmwCwRDpAAyzk%2B8nzPSd7k5i7Gw6ufN119ZVrvxdBt9BTXcgagDDX0kWbeFkC91Re4q4kfhfhhMYzcIxdT6skIkA2ZcK6%2FvW79Mz5POb%2FZyvAp3bTAp7PykThBOupgwVuof5A%2B1UNdj9EI%2BK0R3%2FFy0G%2BV9REpQBa9ocl3kymczzLnYa2pgj2r5UltluJj7FDaeY2GsFzHZSg%2BjqtdhfmyWfYUmXuKInM7TIjkm%2BH0R7PZWswKd0JHfwf0Vqh4zXrQrDnTzLTW2Qj2c4el3KKKjat3M3XsogfFJjMYy43ppt50zsM2euK1SMksHNwY%2B6eHd5N%2B%2FYFnJs7xj0xYogFALSYSR3LuuOqkynm%2Bg4FugRbgQ7sl6Di4QSJJymVk%2FbemMvMne28nwFV0TBx6nDF%2BqFQHpCjWWO7%2B37w8xO3ezxCP6RpszfQCrTLYLUacnenZALlNzAK8ZrNkKvcTbML%2FU%2BMMGOqUBJXTYRdvs1ujSzf0JIj5eu0%2F7tzM0iY8AR5bsykmbly2cXzVlq5pRPl2sLTz0uHX7%2BQ4RbdhXeMP2ZZmIqdYC%2F9K4lgf2jO4vhQhK1tuyxwhWVJEdp7%2BpREaA9xzatuv7gFhYUlhKHWVAzWvdoRlH8%2BA7PQXua2ndde0HAivvB7M08v9HucmfFaEgFsu1LAW7MlvmdWx%2FbACw8va%2Bvter9Qza%2BeZ9&X-Amz-Signature=8dbe4fd6e36a1abc63c5b3825653c9536a745c8b2a67f882e333ed67d176a093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HDUGA6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvln1e9%2B3DdVsQPkL9LsB%2BV1ByCr2U6KLlHrR7L6npAiEAmG7AM9LHKuRWjLYiDnR7mh8MltC%2Bl05qmsHdBEeKU5gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAH65XdJ1trASerN3ircA95K6BWTyjf6eN%2B0tFFKfUSjCp9ZqZpVkoIrYzzbO%2F4LE3sQY4s5x13yQXY4Pkqz9Isfdgwd9owbNM5tw7vRcJm5kFriYeisHEq9BNd0ANaphEENQJel%2FFTmwLEFdInGTcfJQUIoY%2B%2F1ghfiBQTSuADxQovidp28YAsp7mNd1SmwCwRDpAAyzk%2B8nzPSd7k5i7Gw6ufN119ZVrvxdBt9BTXcgagDDX0kWbeFkC91Re4q4kfhfhhMYzcIxdT6skIkA2ZcK6%2FvW79Mz5POb%2FZyvAp3bTAp7PykThBOupgwVuof5A%2B1UNdj9EI%2BK0R3%2FFy0G%2BV9REpQBa9ocl3kymczzLnYa2pgj2r5UltluJj7FDaeY2GsFzHZSg%2BjqtdhfmyWfYUmXuKInM7TIjkm%2BH0R7PZWswKd0JHfwf0Vqh4zXrQrDnTzLTW2Qj2c4el3KKKjat3M3XsogfFJjMYy43ppt50zsM2euK1SMksHNwY%2B6eHd5N%2B%2FYFnJs7xj0xYogFALSYSR3LuuOqkynm%2Bg4FugRbgQ7sl6Di4QSJJymVk%2FbemMvMne28nwFV0TBx6nDF%2BqFQHpCjWWO7%2B37w8xO3ezxCP6RpszfQCrTLYLUacnenZALlNzAK8ZrNkKvcTbML%2FU%2BMMGOqUBJXTYRdvs1ujSzf0JIj5eu0%2F7tzM0iY8AR5bsykmbly2cXzVlq5pRPl2sLTz0uHX7%2BQ4RbdhXeMP2ZZmIqdYC%2F9K4lgf2jO4vhQhK1tuyxwhWVJEdp7%2BpREaA9xzatuv7gFhYUlhKHWVAzWvdoRlH8%2BA7PQXua2ndde0HAivvB7M08v9HucmfFaEgFsu1LAW7MlvmdWx%2FbACw8va%2Bvter9Qza%2BeZ9&X-Amz-Signature=917920c307d1780849169d1f61b0971b4cf71a3cc3a82cdf5365f384b7f28d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HDUGA6T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvln1e9%2B3DdVsQPkL9LsB%2BV1ByCr2U6KLlHrR7L6npAiEAmG7AM9LHKuRWjLYiDnR7mh8MltC%2Bl05qmsHdBEeKU5gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAH65XdJ1trASerN3ircA95K6BWTyjf6eN%2B0tFFKfUSjCp9ZqZpVkoIrYzzbO%2F4LE3sQY4s5x13yQXY4Pkqz9Isfdgwd9owbNM5tw7vRcJm5kFriYeisHEq9BNd0ANaphEENQJel%2FFTmwLEFdInGTcfJQUIoY%2B%2F1ghfiBQTSuADxQovidp28YAsp7mNd1SmwCwRDpAAyzk%2B8nzPSd7k5i7Gw6ufN119ZVrvxdBt9BTXcgagDDX0kWbeFkC91Re4q4kfhfhhMYzcIxdT6skIkA2ZcK6%2FvW79Mz5POb%2FZyvAp3bTAp7PykThBOupgwVuof5A%2B1UNdj9EI%2BK0R3%2FFy0G%2BV9REpQBa9ocl3kymczzLnYa2pgj2r5UltluJj7FDaeY2GsFzHZSg%2BjqtdhfmyWfYUmXuKInM7TIjkm%2BH0R7PZWswKd0JHfwf0Vqh4zXrQrDnTzLTW2Qj2c4el3KKKjat3M3XsogfFJjMYy43ppt50zsM2euK1SMksHNwY%2B6eHd5N%2B%2FYFnJs7xj0xYogFALSYSR3LuuOqkynm%2Bg4FugRbgQ7sl6Di4QSJJymVk%2FbemMvMne28nwFV0TBx6nDF%2BqFQHpCjWWO7%2B37w8xO3ezxCP6RpszfQCrTLYLUacnenZALlNzAK8ZrNkKvcTbML%2FU%2BMMGOqUBJXTYRdvs1ujSzf0JIj5eu0%2F7tzM0iY8AR5bsykmbly2cXzVlq5pRPl2sLTz0uHX7%2BQ4RbdhXeMP2ZZmIqdYC%2F9K4lgf2jO4vhQhK1tuyxwhWVJEdp7%2BpREaA9xzatuv7gFhYUlhKHWVAzWvdoRlH8%2BA7PQXua2ndde0HAivvB7M08v9HucmfFaEgFsu1LAW7MlvmdWx%2FbACw8va%2Bvter9Qza%2BeZ9&X-Amz-Signature=1c83ac9427ec6c555bbc861eea0eee2daa35cf795a5b16f0d550b2e214958d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
