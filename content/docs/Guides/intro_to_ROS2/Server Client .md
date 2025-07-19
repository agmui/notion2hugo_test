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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHNTWSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtrUmyDMj48l9oO8ZN0VhrOanRaeY9wHWqMdfrGKy2YAiBTt1mMQAZLHF9hut9s8KfNMGcGTjy4esL8xiPuwzArqyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAcgALB07%2FTEVcPqtKtwDVLdc4B3UXW3A%2Bb4KvVcruDfi5ZMVqAhlpwhfj%2FTuPGrsQOS1xXOzAADaFkKFHpibBL22hu7K97Tnt8WXSUrUzv0vrdQxOv8%2FMa5wT8RMGqagl6cdCvtIbD1p790se%2FM3vSCp7NaEGJ%2FSETsjVC1PpyLCwjzlQxKTmJ5EZvpVtwxexqSLIDDO2ZVSIEDUbgtw5wsWQ%2B5WVupotyElkW%2BfzdJaJyB27hSBaOCvdK%2F6iMDz7hMz4QFyVDQHmgD%2BiPwoE1oRL0irJXe8ntxiOY9K3zjx%2BbKpgwBwmG42QKC25k9TtSAJ%2Fs0Nd%2BSReFhoyWRAwvFO6d8MxyQ5y3uqu69dM7RgjQzOx32Z2ge7%2FoM95u%2FK%2BUHXmNhX9jpvVoOQ0D7Wixbnco9RO96I1AZ5XyUX7WxhiKHuQFKTtC0RDwNmzmWjtmnq4q0YsyXq3YDGOxgA4RyVWhtfN8xPblGIr3RccJVuzp4Qp6uRYfAZyQoF6SugpMlgCTAW7fw0e8GmtdWBiuERlkgTvkH5OLzyntvWzpcF5F0OaqRv%2FMd3IDbVPZGWSPGpqZ%2FwF6JLFmcFtJVWKKs4ozm8ep3rYHLe4YqOgjmTptZVed6%2F9Gi8bxT7aiXXvgk%2BUh8hwyzv%2Bfcwn%2FXvwwY6pgFnMQKezjc2jqZDaqFvHRu4nRVssKB4eHQXO4bqAg4s1I4HFe9Ji3hXl%2BpzNndUyUH0%2B0XQ5btLFImq%2FWH1cWdrIWungYa2hduryRD2HlAhATCAyPSxHc47L4fyak0%2FgAHwgKbR0Md7WClHWGtW4M92mY7rzXdreluY087M7QFo%2Fk%2FaVvNhH884Aub6ptGMaoxzPkWN0of1PlHBjBrdq46CUvSV1Y9g&X-Amz-Signature=ab4d73f7dc6e8ba8fdc8f6ab4bcfe73fb516bda8fef360a5fc7b004c1baef523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHNTWSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtrUmyDMj48l9oO8ZN0VhrOanRaeY9wHWqMdfrGKy2YAiBTt1mMQAZLHF9hut9s8KfNMGcGTjy4esL8xiPuwzArqyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAcgALB07%2FTEVcPqtKtwDVLdc4B3UXW3A%2Bb4KvVcruDfi5ZMVqAhlpwhfj%2FTuPGrsQOS1xXOzAADaFkKFHpibBL22hu7K97Tnt8WXSUrUzv0vrdQxOv8%2FMa5wT8RMGqagl6cdCvtIbD1p790se%2FM3vSCp7NaEGJ%2FSETsjVC1PpyLCwjzlQxKTmJ5EZvpVtwxexqSLIDDO2ZVSIEDUbgtw5wsWQ%2B5WVupotyElkW%2BfzdJaJyB27hSBaOCvdK%2F6iMDz7hMz4QFyVDQHmgD%2BiPwoE1oRL0irJXe8ntxiOY9K3zjx%2BbKpgwBwmG42QKC25k9TtSAJ%2Fs0Nd%2BSReFhoyWRAwvFO6d8MxyQ5y3uqu69dM7RgjQzOx32Z2ge7%2FoM95u%2FK%2BUHXmNhX9jpvVoOQ0D7Wixbnco9RO96I1AZ5XyUX7WxhiKHuQFKTtC0RDwNmzmWjtmnq4q0YsyXq3YDGOxgA4RyVWhtfN8xPblGIr3RccJVuzp4Qp6uRYfAZyQoF6SugpMlgCTAW7fw0e8GmtdWBiuERlkgTvkH5OLzyntvWzpcF5F0OaqRv%2FMd3IDbVPZGWSPGpqZ%2FwF6JLFmcFtJVWKKs4ozm8ep3rYHLe4YqOgjmTptZVed6%2F9Gi8bxT7aiXXvgk%2BUh8hwyzv%2Bfcwn%2FXvwwY6pgFnMQKezjc2jqZDaqFvHRu4nRVssKB4eHQXO4bqAg4s1I4HFe9Ji3hXl%2BpzNndUyUH0%2B0XQ5btLFImq%2FWH1cWdrIWungYa2hduryRD2HlAhATCAyPSxHc47L4fyak0%2FgAHwgKbR0Md7WClHWGtW4M92mY7rzXdreluY087M7QFo%2Fk%2FaVvNhH884Aub6ptGMaoxzPkWN0of1PlHBjBrdq46CUvSV1Y9g&X-Amz-Signature=5d707e31c8913fbba7785a55e41533e5535e20be69f8fdaa18803df4f15b1619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHNTWSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtrUmyDMj48l9oO8ZN0VhrOanRaeY9wHWqMdfrGKy2YAiBTt1mMQAZLHF9hut9s8KfNMGcGTjy4esL8xiPuwzArqyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAcgALB07%2FTEVcPqtKtwDVLdc4B3UXW3A%2Bb4KvVcruDfi5ZMVqAhlpwhfj%2FTuPGrsQOS1xXOzAADaFkKFHpibBL22hu7K97Tnt8WXSUrUzv0vrdQxOv8%2FMa5wT8RMGqagl6cdCvtIbD1p790se%2FM3vSCp7NaEGJ%2FSETsjVC1PpyLCwjzlQxKTmJ5EZvpVtwxexqSLIDDO2ZVSIEDUbgtw5wsWQ%2B5WVupotyElkW%2BfzdJaJyB27hSBaOCvdK%2F6iMDz7hMz4QFyVDQHmgD%2BiPwoE1oRL0irJXe8ntxiOY9K3zjx%2BbKpgwBwmG42QKC25k9TtSAJ%2Fs0Nd%2BSReFhoyWRAwvFO6d8MxyQ5y3uqu69dM7RgjQzOx32Z2ge7%2FoM95u%2FK%2BUHXmNhX9jpvVoOQ0D7Wixbnco9RO96I1AZ5XyUX7WxhiKHuQFKTtC0RDwNmzmWjtmnq4q0YsyXq3YDGOxgA4RyVWhtfN8xPblGIr3RccJVuzp4Qp6uRYfAZyQoF6SugpMlgCTAW7fw0e8GmtdWBiuERlkgTvkH5OLzyntvWzpcF5F0OaqRv%2FMd3IDbVPZGWSPGpqZ%2FwF6JLFmcFtJVWKKs4ozm8ep3rYHLe4YqOgjmTptZVed6%2F9Gi8bxT7aiXXvgk%2BUh8hwyzv%2Bfcwn%2FXvwwY6pgFnMQKezjc2jqZDaqFvHRu4nRVssKB4eHQXO4bqAg4s1I4HFe9Ji3hXl%2BpzNndUyUH0%2B0XQ5btLFImq%2FWH1cWdrIWungYa2hduryRD2HlAhATCAyPSxHc47L4fyak0%2FgAHwgKbR0Md7WClHWGtW4M92mY7rzXdreluY087M7QFo%2Fk%2FaVvNhH884Aub6ptGMaoxzPkWN0of1PlHBjBrdq46CUvSV1Y9g&X-Amz-Signature=3fef5c01299d47a711db4ed69887fa7997950476b867cf51a454d8f690beeff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHNTWSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtrUmyDMj48l9oO8ZN0VhrOanRaeY9wHWqMdfrGKy2YAiBTt1mMQAZLHF9hut9s8KfNMGcGTjy4esL8xiPuwzArqyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAcgALB07%2FTEVcPqtKtwDVLdc4B3UXW3A%2Bb4KvVcruDfi5ZMVqAhlpwhfj%2FTuPGrsQOS1xXOzAADaFkKFHpibBL22hu7K97Tnt8WXSUrUzv0vrdQxOv8%2FMa5wT8RMGqagl6cdCvtIbD1p790se%2FM3vSCp7NaEGJ%2FSETsjVC1PpyLCwjzlQxKTmJ5EZvpVtwxexqSLIDDO2ZVSIEDUbgtw5wsWQ%2B5WVupotyElkW%2BfzdJaJyB27hSBaOCvdK%2F6iMDz7hMz4QFyVDQHmgD%2BiPwoE1oRL0irJXe8ntxiOY9K3zjx%2BbKpgwBwmG42QKC25k9TtSAJ%2Fs0Nd%2BSReFhoyWRAwvFO6d8MxyQ5y3uqu69dM7RgjQzOx32Z2ge7%2FoM95u%2FK%2BUHXmNhX9jpvVoOQ0D7Wixbnco9RO96I1AZ5XyUX7WxhiKHuQFKTtC0RDwNmzmWjtmnq4q0YsyXq3YDGOxgA4RyVWhtfN8xPblGIr3RccJVuzp4Qp6uRYfAZyQoF6SugpMlgCTAW7fw0e8GmtdWBiuERlkgTvkH5OLzyntvWzpcF5F0OaqRv%2FMd3IDbVPZGWSPGpqZ%2FwF6JLFmcFtJVWKKs4ozm8ep3rYHLe4YqOgjmTptZVed6%2F9Gi8bxT7aiXXvgk%2BUh8hwyzv%2Bfcwn%2FXvwwY6pgFnMQKezjc2jqZDaqFvHRu4nRVssKB4eHQXO4bqAg4s1I4HFe9Ji3hXl%2BpzNndUyUH0%2B0XQ5btLFImq%2FWH1cWdrIWungYa2hduryRD2HlAhATCAyPSxHc47L4fyak0%2FgAHwgKbR0Md7WClHWGtW4M92mY7rzXdreluY087M7QFo%2Fk%2FaVvNhH884Aub6ptGMaoxzPkWN0of1PlHBjBrdq46CUvSV1Y9g&X-Amz-Signature=3318da4c3475227541e4e15418c917de1094a3c2f58f2d08c1a916905c522461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHNTWSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtrUmyDMj48l9oO8ZN0VhrOanRaeY9wHWqMdfrGKy2YAiBTt1mMQAZLHF9hut9s8KfNMGcGTjy4esL8xiPuwzArqyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAcgALB07%2FTEVcPqtKtwDVLdc4B3UXW3A%2Bb4KvVcruDfi5ZMVqAhlpwhfj%2FTuPGrsQOS1xXOzAADaFkKFHpibBL22hu7K97Tnt8WXSUrUzv0vrdQxOv8%2FMa5wT8RMGqagl6cdCvtIbD1p790se%2FM3vSCp7NaEGJ%2FSETsjVC1PpyLCwjzlQxKTmJ5EZvpVtwxexqSLIDDO2ZVSIEDUbgtw5wsWQ%2B5WVupotyElkW%2BfzdJaJyB27hSBaOCvdK%2F6iMDz7hMz4QFyVDQHmgD%2BiPwoE1oRL0irJXe8ntxiOY9K3zjx%2BbKpgwBwmG42QKC25k9TtSAJ%2Fs0Nd%2BSReFhoyWRAwvFO6d8MxyQ5y3uqu69dM7RgjQzOx32Z2ge7%2FoM95u%2FK%2BUHXmNhX9jpvVoOQ0D7Wixbnco9RO96I1AZ5XyUX7WxhiKHuQFKTtC0RDwNmzmWjtmnq4q0YsyXq3YDGOxgA4RyVWhtfN8xPblGIr3RccJVuzp4Qp6uRYfAZyQoF6SugpMlgCTAW7fw0e8GmtdWBiuERlkgTvkH5OLzyntvWzpcF5F0OaqRv%2FMd3IDbVPZGWSPGpqZ%2FwF6JLFmcFtJVWKKs4ozm8ep3rYHLe4YqOgjmTptZVed6%2F9Gi8bxT7aiXXvgk%2BUh8hwyzv%2Bfcwn%2FXvwwY6pgFnMQKezjc2jqZDaqFvHRu4nRVssKB4eHQXO4bqAg4s1I4HFe9Ji3hXl%2BpzNndUyUH0%2B0XQ5btLFImq%2FWH1cWdrIWungYa2hduryRD2HlAhATCAyPSxHc47L4fyak0%2FgAHwgKbR0Md7WClHWGtW4M92mY7rzXdreluY087M7QFo%2Fk%2FaVvNhH884Aub6ptGMaoxzPkWN0of1PlHBjBrdq46CUvSV1Y9g&X-Amz-Signature=063e3f7d021fc7d33c323a62758680c78afae42b06c14c19b7631d9971f64b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
