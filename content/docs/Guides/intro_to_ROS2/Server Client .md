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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVR4DJV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkuqgfqqJi0g4KypKakZmkeP1GMDfXA041EqAi6YQjCAiEAynkxLNp7Vt%2F%2BqJtY7w%2FZFqkhGej120Vo7vRoPhmZDxoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8HtA2lUiS%2BsurQDCrcA7tZCpg0Bgn7S3OmBdH468AYuz14XWqpSsYzJvkO35MAIp4Wd%2FiCgam6BRzT9bRa8ZJx2OCCgcHlbIpmUksyR6bDsmQlRHnLrROFmUHxJPVspjQh2O4pIPlCVSEC1ugPQYmORH0Vfwo8yHu19fN%2FukJLMj4pFeB0HCrXLwuiPlyTKIFa1tO4pEDMCWBn9KSTu8zpGRiqrzlEFPHPzAfR%2F%2BRQr2KWpHY5QyvaiDr6rzMnaKGx05I9pQNqigf7uqHh3L7M92uVGzgLOP7GPhjyG%2FyqijqMB0w8zYnewC1DawL3xi4TuzIhaYClwjygNqXLoFGCoaPqwK6UI5JuoiAAqFeZV1zzrpEQa8JkU%2FMUHqknsOUQhKb3xDfny920R58JB2xA3BpfXhqF31UUIsVSBWKpvmE6EctTeehi1vlu20DBgs7OqXzj9b0NGjpFEpgrV13mHtN44Mlb%2FqIbNnk%2BDztA0pUTrayLUPF7bdQcfhEktXctll0dUZJnvVhUoImQ%2BYRP8vtsPpYSAXcGiN9L9f7j5b25d1OcsF3E90FWudrT7WMPjS3%2FTKp79YUXWT4yXgRP6g0yD0a0Kdp%2FEdc5bC%2FlM9dYjRk9a5GV5NZ3nc%2BKprLMIlXjUiIYU7UvMNXF7MMGOqUBZG38VX8vzKgh7%2BHzAwFQJbLb3hzgrUq8gnl5Cct0AtAQK1J8IOIAHUldgUXL36OcEr%2FUCA8nqlFTZCXEla0Gw%2BmXj2aFWkvBA2oV4v4PdR6FblJ8eMz%2BbF%2Fenkc4HIEaH7wuip6SSzlZWj6dtr83zPdIixKzqOHf61YlNvGLKDJo79zZv%2BrbzJce1WF4U6Jd0X4v8E9QpUuUh%2F%2FhgjOhSuWAIwx6&X-Amz-Signature=e367352d5fd0c8d32c0df2d380a0ac20597ff59535d99e626f10ae63e08c3485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVR4DJV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkuqgfqqJi0g4KypKakZmkeP1GMDfXA041EqAi6YQjCAiEAynkxLNp7Vt%2F%2BqJtY7w%2FZFqkhGej120Vo7vRoPhmZDxoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8HtA2lUiS%2BsurQDCrcA7tZCpg0Bgn7S3OmBdH468AYuz14XWqpSsYzJvkO35MAIp4Wd%2FiCgam6BRzT9bRa8ZJx2OCCgcHlbIpmUksyR6bDsmQlRHnLrROFmUHxJPVspjQh2O4pIPlCVSEC1ugPQYmORH0Vfwo8yHu19fN%2FukJLMj4pFeB0HCrXLwuiPlyTKIFa1tO4pEDMCWBn9KSTu8zpGRiqrzlEFPHPzAfR%2F%2BRQr2KWpHY5QyvaiDr6rzMnaKGx05I9pQNqigf7uqHh3L7M92uVGzgLOP7GPhjyG%2FyqijqMB0w8zYnewC1DawL3xi4TuzIhaYClwjygNqXLoFGCoaPqwK6UI5JuoiAAqFeZV1zzrpEQa8JkU%2FMUHqknsOUQhKb3xDfny920R58JB2xA3BpfXhqF31UUIsVSBWKpvmE6EctTeehi1vlu20DBgs7OqXzj9b0NGjpFEpgrV13mHtN44Mlb%2FqIbNnk%2BDztA0pUTrayLUPF7bdQcfhEktXctll0dUZJnvVhUoImQ%2BYRP8vtsPpYSAXcGiN9L9f7j5b25d1OcsF3E90FWudrT7WMPjS3%2FTKp79YUXWT4yXgRP6g0yD0a0Kdp%2FEdc5bC%2FlM9dYjRk9a5GV5NZ3nc%2BKprLMIlXjUiIYU7UvMNXF7MMGOqUBZG38VX8vzKgh7%2BHzAwFQJbLb3hzgrUq8gnl5Cct0AtAQK1J8IOIAHUldgUXL36OcEr%2FUCA8nqlFTZCXEla0Gw%2BmXj2aFWkvBA2oV4v4PdR6FblJ8eMz%2BbF%2Fenkc4HIEaH7wuip6SSzlZWj6dtr83zPdIixKzqOHf61YlNvGLKDJo79zZv%2BrbzJce1WF4U6Jd0X4v8E9QpUuUh%2F%2FhgjOhSuWAIwx6&X-Amz-Signature=756edf997f65acb3b226d2d0c77f7f98986e52daadd49adf86987587577dcb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVR4DJV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkuqgfqqJi0g4KypKakZmkeP1GMDfXA041EqAi6YQjCAiEAynkxLNp7Vt%2F%2BqJtY7w%2FZFqkhGej120Vo7vRoPhmZDxoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8HtA2lUiS%2BsurQDCrcA7tZCpg0Bgn7S3OmBdH468AYuz14XWqpSsYzJvkO35MAIp4Wd%2FiCgam6BRzT9bRa8ZJx2OCCgcHlbIpmUksyR6bDsmQlRHnLrROFmUHxJPVspjQh2O4pIPlCVSEC1ugPQYmORH0Vfwo8yHu19fN%2FukJLMj4pFeB0HCrXLwuiPlyTKIFa1tO4pEDMCWBn9KSTu8zpGRiqrzlEFPHPzAfR%2F%2BRQr2KWpHY5QyvaiDr6rzMnaKGx05I9pQNqigf7uqHh3L7M92uVGzgLOP7GPhjyG%2FyqijqMB0w8zYnewC1DawL3xi4TuzIhaYClwjygNqXLoFGCoaPqwK6UI5JuoiAAqFeZV1zzrpEQa8JkU%2FMUHqknsOUQhKb3xDfny920R58JB2xA3BpfXhqF31UUIsVSBWKpvmE6EctTeehi1vlu20DBgs7OqXzj9b0NGjpFEpgrV13mHtN44Mlb%2FqIbNnk%2BDztA0pUTrayLUPF7bdQcfhEktXctll0dUZJnvVhUoImQ%2BYRP8vtsPpYSAXcGiN9L9f7j5b25d1OcsF3E90FWudrT7WMPjS3%2FTKp79YUXWT4yXgRP6g0yD0a0Kdp%2FEdc5bC%2FlM9dYjRk9a5GV5NZ3nc%2BKprLMIlXjUiIYU7UvMNXF7MMGOqUBZG38VX8vzKgh7%2BHzAwFQJbLb3hzgrUq8gnl5Cct0AtAQK1J8IOIAHUldgUXL36OcEr%2FUCA8nqlFTZCXEla0Gw%2BmXj2aFWkvBA2oV4v4PdR6FblJ8eMz%2BbF%2Fenkc4HIEaH7wuip6SSzlZWj6dtr83zPdIixKzqOHf61YlNvGLKDJo79zZv%2BrbzJce1WF4U6Jd0X4v8E9QpUuUh%2F%2FhgjOhSuWAIwx6&X-Amz-Signature=e7f82dced8c7dc2332fafb5d4e9f7c60ddbfc8c98c1c5cf3a665461c6ad71987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVR4DJV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkuqgfqqJi0g4KypKakZmkeP1GMDfXA041EqAi6YQjCAiEAynkxLNp7Vt%2F%2BqJtY7w%2FZFqkhGej120Vo7vRoPhmZDxoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8HtA2lUiS%2BsurQDCrcA7tZCpg0Bgn7S3OmBdH468AYuz14XWqpSsYzJvkO35MAIp4Wd%2FiCgam6BRzT9bRa8ZJx2OCCgcHlbIpmUksyR6bDsmQlRHnLrROFmUHxJPVspjQh2O4pIPlCVSEC1ugPQYmORH0Vfwo8yHu19fN%2FukJLMj4pFeB0HCrXLwuiPlyTKIFa1tO4pEDMCWBn9KSTu8zpGRiqrzlEFPHPzAfR%2F%2BRQr2KWpHY5QyvaiDr6rzMnaKGx05I9pQNqigf7uqHh3L7M92uVGzgLOP7GPhjyG%2FyqijqMB0w8zYnewC1DawL3xi4TuzIhaYClwjygNqXLoFGCoaPqwK6UI5JuoiAAqFeZV1zzrpEQa8JkU%2FMUHqknsOUQhKb3xDfny920R58JB2xA3BpfXhqF31UUIsVSBWKpvmE6EctTeehi1vlu20DBgs7OqXzj9b0NGjpFEpgrV13mHtN44Mlb%2FqIbNnk%2BDztA0pUTrayLUPF7bdQcfhEktXctll0dUZJnvVhUoImQ%2BYRP8vtsPpYSAXcGiN9L9f7j5b25d1OcsF3E90FWudrT7WMPjS3%2FTKp79YUXWT4yXgRP6g0yD0a0Kdp%2FEdc5bC%2FlM9dYjRk9a5GV5NZ3nc%2BKprLMIlXjUiIYU7UvMNXF7MMGOqUBZG38VX8vzKgh7%2BHzAwFQJbLb3hzgrUq8gnl5Cct0AtAQK1J8IOIAHUldgUXL36OcEr%2FUCA8nqlFTZCXEla0Gw%2BmXj2aFWkvBA2oV4v4PdR6FblJ8eMz%2BbF%2Fenkc4HIEaH7wuip6SSzlZWj6dtr83zPdIixKzqOHf61YlNvGLKDJo79zZv%2BrbzJce1WF4U6Jd0X4v8E9QpUuUh%2F%2FhgjOhSuWAIwx6&X-Amz-Signature=2e306e40eeb457680bd1f7dedd231c2c0e6ef03b9308d66ceb4fc5a9355d9ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVR4DJV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkuqgfqqJi0g4KypKakZmkeP1GMDfXA041EqAi6YQjCAiEAynkxLNp7Vt%2F%2BqJtY7w%2FZFqkhGej120Vo7vRoPhmZDxoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8HtA2lUiS%2BsurQDCrcA7tZCpg0Bgn7S3OmBdH468AYuz14XWqpSsYzJvkO35MAIp4Wd%2FiCgam6BRzT9bRa8ZJx2OCCgcHlbIpmUksyR6bDsmQlRHnLrROFmUHxJPVspjQh2O4pIPlCVSEC1ugPQYmORH0Vfwo8yHu19fN%2FukJLMj4pFeB0HCrXLwuiPlyTKIFa1tO4pEDMCWBn9KSTu8zpGRiqrzlEFPHPzAfR%2F%2BRQr2KWpHY5QyvaiDr6rzMnaKGx05I9pQNqigf7uqHh3L7M92uVGzgLOP7GPhjyG%2FyqijqMB0w8zYnewC1DawL3xi4TuzIhaYClwjygNqXLoFGCoaPqwK6UI5JuoiAAqFeZV1zzrpEQa8JkU%2FMUHqknsOUQhKb3xDfny920R58JB2xA3BpfXhqF31UUIsVSBWKpvmE6EctTeehi1vlu20DBgs7OqXzj9b0NGjpFEpgrV13mHtN44Mlb%2FqIbNnk%2BDztA0pUTrayLUPF7bdQcfhEktXctll0dUZJnvVhUoImQ%2BYRP8vtsPpYSAXcGiN9L9f7j5b25d1OcsF3E90FWudrT7WMPjS3%2FTKp79YUXWT4yXgRP6g0yD0a0Kdp%2FEdc5bC%2FlM9dYjRk9a5GV5NZ3nc%2BKprLMIlXjUiIYU7UvMNXF7MMGOqUBZG38VX8vzKgh7%2BHzAwFQJbLb3hzgrUq8gnl5Cct0AtAQK1J8IOIAHUldgUXL36OcEr%2FUCA8nqlFTZCXEla0Gw%2BmXj2aFWkvBA2oV4v4PdR6FblJ8eMz%2BbF%2Fenkc4HIEaH7wuip6SSzlZWj6dtr83zPdIixKzqOHf61YlNvGLKDJo79zZv%2BrbzJce1WF4U6Jd0X4v8E9QpUuUh%2F%2FhgjOhSuWAIwx6&X-Amz-Signature=bc35160f5cd46e37fc50cfde53e5fd1e9b7045b4ab77729bab427be5a4f5b814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
