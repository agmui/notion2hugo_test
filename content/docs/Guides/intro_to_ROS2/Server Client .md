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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYLEYJI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCoNpOYjrM5YffuzO7zbnxZoIurCITXf2tPsUChA8%2BTGQIgIEbUEEWsjcNVCpCzmOAnrmGGxYi%2BnwTvYM1ityxV7%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfZg6pyUdZ0iza5CSrcAzHxcaxHs8SVwzB9hKoHm0sR3pnOBotEITmAC51DSGPLUUdFUPYbTEZ%2BMjAbk%2FpTpHMciVduyY%2Bq8TAiNvZQoBOssmYc7M2%2BFft0IFvFB5z6XBnCgXm9QR6MbiwcExFJWZZVfe2QQKrhwKY2r0tq0vWO8UU3R7kI0NzFBeX9YzgPUfFlorYd%2B3RBIkuDK63dxb7wjnLRVc93boY5DAn6RFq0Aex65TnRjimnYSFpUu0%2BjxrRquGRA5s83UZPP5ocZj4pMZfUmKZ%2FaiPw%2FN6OvC3RAG7gHYlXyAok9htss77mYYxTb4HlRFGUITOG1FKVDaVndMjFI671CySyl1lzYHlKKyG8OMsGvY7QKidfXXbb0QU5h1Tr4sZ0aJI%2Fpo0CjGPUJIRQVPR2OiZ3m8FGvoHI5bgaOSPqy1Az%2F2cSL8znUkOox%2F7RvGns5oIczHdnSTPqf7qqiI6lMx3HVOr10xm273C3%2FjRGaCanLjB%2Bsfiw74SBJ20MXgiIlLP5P4njjMKQCrq1AseljYFIdYwr6dbBcCQnYVPYKyJmlWbWDzFYGnd4tYLfh82drrqLJqX8knbahBfGozHhZ0rcoQek9Mpj7mohxkFe7rQ58c4%2BQzSZDi8G3tyeAkerRkIMMJ7E8sUGOqUBVawzFDbyH%2Bk%2F%2FBa5bpPo1J0x0ZI4fxq%2FfumOV6Gz9NzVnqfgHjAJt0mW%2FPcSIRWwCEHoIun9UsP3G88D0bCCIx7hlklk6bAbvWpilIh6kzbfHcQ%2B9R7zwVTn3eePtG64uXFW2bt5kbEg8ljn%2BTgn7MKV%2FcVbNrlkUS0FpDFbgZoPKwHpkd3DibeVkLaoUtxS1KNGwAh21AUwR0Gi8Xu5YsrnmqyV&X-Amz-Signature=04f35f7ea9cca61a82bceaef8ff5de9d2359b791dbe990532d444ab9617f9320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYLEYJI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCoNpOYjrM5YffuzO7zbnxZoIurCITXf2tPsUChA8%2BTGQIgIEbUEEWsjcNVCpCzmOAnrmGGxYi%2BnwTvYM1ityxV7%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfZg6pyUdZ0iza5CSrcAzHxcaxHs8SVwzB9hKoHm0sR3pnOBotEITmAC51DSGPLUUdFUPYbTEZ%2BMjAbk%2FpTpHMciVduyY%2Bq8TAiNvZQoBOssmYc7M2%2BFft0IFvFB5z6XBnCgXm9QR6MbiwcExFJWZZVfe2QQKrhwKY2r0tq0vWO8UU3R7kI0NzFBeX9YzgPUfFlorYd%2B3RBIkuDK63dxb7wjnLRVc93boY5DAn6RFq0Aex65TnRjimnYSFpUu0%2BjxrRquGRA5s83UZPP5ocZj4pMZfUmKZ%2FaiPw%2FN6OvC3RAG7gHYlXyAok9htss77mYYxTb4HlRFGUITOG1FKVDaVndMjFI671CySyl1lzYHlKKyG8OMsGvY7QKidfXXbb0QU5h1Tr4sZ0aJI%2Fpo0CjGPUJIRQVPR2OiZ3m8FGvoHI5bgaOSPqy1Az%2F2cSL8znUkOox%2F7RvGns5oIczHdnSTPqf7qqiI6lMx3HVOr10xm273C3%2FjRGaCanLjB%2Bsfiw74SBJ20MXgiIlLP5P4njjMKQCrq1AseljYFIdYwr6dbBcCQnYVPYKyJmlWbWDzFYGnd4tYLfh82drrqLJqX8knbahBfGozHhZ0rcoQek9Mpj7mohxkFe7rQ58c4%2BQzSZDi8G3tyeAkerRkIMMJ7E8sUGOqUBVawzFDbyH%2Bk%2F%2FBa5bpPo1J0x0ZI4fxq%2FfumOV6Gz9NzVnqfgHjAJt0mW%2FPcSIRWwCEHoIun9UsP3G88D0bCCIx7hlklk6bAbvWpilIh6kzbfHcQ%2B9R7zwVTn3eePtG64uXFW2bt5kbEg8ljn%2BTgn7MKV%2FcVbNrlkUS0FpDFbgZoPKwHpkd3DibeVkLaoUtxS1KNGwAh21AUwR0Gi8Xu5YsrnmqyV&X-Amz-Signature=3f4d4e2239a48dbb5b92215889e7c433597a602f9dc4ed333a51e4e8c772a394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYLEYJI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCoNpOYjrM5YffuzO7zbnxZoIurCITXf2tPsUChA8%2BTGQIgIEbUEEWsjcNVCpCzmOAnrmGGxYi%2BnwTvYM1ityxV7%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfZg6pyUdZ0iza5CSrcAzHxcaxHs8SVwzB9hKoHm0sR3pnOBotEITmAC51DSGPLUUdFUPYbTEZ%2BMjAbk%2FpTpHMciVduyY%2Bq8TAiNvZQoBOssmYc7M2%2BFft0IFvFB5z6XBnCgXm9QR6MbiwcExFJWZZVfe2QQKrhwKY2r0tq0vWO8UU3R7kI0NzFBeX9YzgPUfFlorYd%2B3RBIkuDK63dxb7wjnLRVc93boY5DAn6RFq0Aex65TnRjimnYSFpUu0%2BjxrRquGRA5s83UZPP5ocZj4pMZfUmKZ%2FaiPw%2FN6OvC3RAG7gHYlXyAok9htss77mYYxTb4HlRFGUITOG1FKVDaVndMjFI671CySyl1lzYHlKKyG8OMsGvY7QKidfXXbb0QU5h1Tr4sZ0aJI%2Fpo0CjGPUJIRQVPR2OiZ3m8FGvoHI5bgaOSPqy1Az%2F2cSL8znUkOox%2F7RvGns5oIczHdnSTPqf7qqiI6lMx3HVOr10xm273C3%2FjRGaCanLjB%2Bsfiw74SBJ20MXgiIlLP5P4njjMKQCrq1AseljYFIdYwr6dbBcCQnYVPYKyJmlWbWDzFYGnd4tYLfh82drrqLJqX8knbahBfGozHhZ0rcoQek9Mpj7mohxkFe7rQ58c4%2BQzSZDi8G3tyeAkerRkIMMJ7E8sUGOqUBVawzFDbyH%2Bk%2F%2FBa5bpPo1J0x0ZI4fxq%2FfumOV6Gz9NzVnqfgHjAJt0mW%2FPcSIRWwCEHoIun9UsP3G88D0bCCIx7hlklk6bAbvWpilIh6kzbfHcQ%2B9R7zwVTn3eePtG64uXFW2bt5kbEg8ljn%2BTgn7MKV%2FcVbNrlkUS0FpDFbgZoPKwHpkd3DibeVkLaoUtxS1KNGwAh21AUwR0Gi8Xu5YsrnmqyV&X-Amz-Signature=9fbf0b7d512c3fdac489f3725d418c35e68e814e4739d942e2913cf555f8fff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYLEYJI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCoNpOYjrM5YffuzO7zbnxZoIurCITXf2tPsUChA8%2BTGQIgIEbUEEWsjcNVCpCzmOAnrmGGxYi%2BnwTvYM1ityxV7%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfZg6pyUdZ0iza5CSrcAzHxcaxHs8SVwzB9hKoHm0sR3pnOBotEITmAC51DSGPLUUdFUPYbTEZ%2BMjAbk%2FpTpHMciVduyY%2Bq8TAiNvZQoBOssmYc7M2%2BFft0IFvFB5z6XBnCgXm9QR6MbiwcExFJWZZVfe2QQKrhwKY2r0tq0vWO8UU3R7kI0NzFBeX9YzgPUfFlorYd%2B3RBIkuDK63dxb7wjnLRVc93boY5DAn6RFq0Aex65TnRjimnYSFpUu0%2BjxrRquGRA5s83UZPP5ocZj4pMZfUmKZ%2FaiPw%2FN6OvC3RAG7gHYlXyAok9htss77mYYxTb4HlRFGUITOG1FKVDaVndMjFI671CySyl1lzYHlKKyG8OMsGvY7QKidfXXbb0QU5h1Tr4sZ0aJI%2Fpo0CjGPUJIRQVPR2OiZ3m8FGvoHI5bgaOSPqy1Az%2F2cSL8znUkOox%2F7RvGns5oIczHdnSTPqf7qqiI6lMx3HVOr10xm273C3%2FjRGaCanLjB%2Bsfiw74SBJ20MXgiIlLP5P4njjMKQCrq1AseljYFIdYwr6dbBcCQnYVPYKyJmlWbWDzFYGnd4tYLfh82drrqLJqX8knbahBfGozHhZ0rcoQek9Mpj7mohxkFe7rQ58c4%2BQzSZDi8G3tyeAkerRkIMMJ7E8sUGOqUBVawzFDbyH%2Bk%2F%2FBa5bpPo1J0x0ZI4fxq%2FfumOV6Gz9NzVnqfgHjAJt0mW%2FPcSIRWwCEHoIun9UsP3G88D0bCCIx7hlklk6bAbvWpilIh6kzbfHcQ%2B9R7zwVTn3eePtG64uXFW2bt5kbEg8ljn%2BTgn7MKV%2FcVbNrlkUS0FpDFbgZoPKwHpkd3DibeVkLaoUtxS1KNGwAh21AUwR0Gi8Xu5YsrnmqyV&X-Amz-Signature=1ef355456eb020103c770fac461d57592c7eba5343e12aa4788e9adfcbb8ccb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYLEYJI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCoNpOYjrM5YffuzO7zbnxZoIurCITXf2tPsUChA8%2BTGQIgIEbUEEWsjcNVCpCzmOAnrmGGxYi%2BnwTvYM1ityxV7%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfZg6pyUdZ0iza5CSrcAzHxcaxHs8SVwzB9hKoHm0sR3pnOBotEITmAC51DSGPLUUdFUPYbTEZ%2BMjAbk%2FpTpHMciVduyY%2Bq8TAiNvZQoBOssmYc7M2%2BFft0IFvFB5z6XBnCgXm9QR6MbiwcExFJWZZVfe2QQKrhwKY2r0tq0vWO8UU3R7kI0NzFBeX9YzgPUfFlorYd%2B3RBIkuDK63dxb7wjnLRVc93boY5DAn6RFq0Aex65TnRjimnYSFpUu0%2BjxrRquGRA5s83UZPP5ocZj4pMZfUmKZ%2FaiPw%2FN6OvC3RAG7gHYlXyAok9htss77mYYxTb4HlRFGUITOG1FKVDaVndMjFI671CySyl1lzYHlKKyG8OMsGvY7QKidfXXbb0QU5h1Tr4sZ0aJI%2Fpo0CjGPUJIRQVPR2OiZ3m8FGvoHI5bgaOSPqy1Az%2F2cSL8znUkOox%2F7RvGns5oIczHdnSTPqf7qqiI6lMx3HVOr10xm273C3%2FjRGaCanLjB%2Bsfiw74SBJ20MXgiIlLP5P4njjMKQCrq1AseljYFIdYwr6dbBcCQnYVPYKyJmlWbWDzFYGnd4tYLfh82drrqLJqX8knbahBfGozHhZ0rcoQek9Mpj7mohxkFe7rQ58c4%2BQzSZDi8G3tyeAkerRkIMMJ7E8sUGOqUBVawzFDbyH%2Bk%2F%2FBa5bpPo1J0x0ZI4fxq%2FfumOV6Gz9NzVnqfgHjAJt0mW%2FPcSIRWwCEHoIun9UsP3G88D0bCCIx7hlklk6bAbvWpilIh6kzbfHcQ%2B9R7zwVTn3eePtG64uXFW2bt5kbEg8ljn%2BTgn7MKV%2FcVbNrlkUS0FpDFbgZoPKwHpkd3DibeVkLaoUtxS1KNGwAh21AUwR0Gi8Xu5YsrnmqyV&X-Amz-Signature=fa2de62e703dea1b3edf694878c79fe81d5e6adaf4be1010db0b50067c621e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
