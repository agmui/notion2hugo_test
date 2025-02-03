---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TRWMRJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBa2%2Bd2QFhYMkmZUvH7e8kUz1elZzMzj4yOYoFT9uOuOAiEAq3WaWsaJBapRlHnlnFoARztD4liYcKXGePdkpZKvaAMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ3cCsfiOwtfShG81CrcA1HZU%2Ft2LfFFPd%2BKxugyyxvS2%2BJZb5whKivj5NvLDfOHbj%2F6OSkbVQoXybzN5xvlEnIUw6KErczA1eo%2F8e86f3%2F7boLz76XerLy%2BDPX%2FbGIlJTSorml4xMfCy4uVfzY%2BJJPNG70W%2FaUzDdidTieNVx3DwFtD39tin0lzykW3VMGRP0buCJAJyDXlVxQcwkXENEDFz6JYKXWCpnXsgGGyqJ8pw%2FzlISra8pcqZInYG2BXEuYqz693mCmiAqH37eVoke4uF9IHLqgbgGwGMdQc6YIizsFRppwiVxMufX6ezeqXX4StYnaGZqirAPcR4Rda%2B778ziUdbBUXXy2M4FoxlizHenq8sj8wcgWFdvbOtE4Cpc4mF82LIzYr%2FWusEWCk2SMqoZ3ohnEAWV%2B5QusJpC7DlkKT4LEEISngUXUmXeU7dVhji30SYC4mKUUvfzqHtbJ7xCZMEkT0NgKM3S8ixOEE6tfc%2BMpHP85FZgYq6fjxaTGwBfHnv76yAqz6uR5zfPoFCc8PXLqXjFFoxMeFaXU15abTfs3LLVn3z0eotSHqOr1wq7x2XpkurPj2TapHvH6lJGAhfKDpbpGIgBIDteYASCis%2FfyWTBd%2BakDTtC%2BIWcilTlHgtVCrbxZ9MJqVhb0GOqUBHCscS4kAQLkYPpxT%2BLTIJTelJmR8ykCd%2FogD99sJWzp79fU5ziWC3UAjijPnE1KvNpOwGyRFBNlAtwxFxFji6KjXyGd0Nf1BbQFEO%2B%2BMTy9bdldti6ONQ36v07T2Y8PsZuO9xEve0%2FUXBe3EJYpQ%2B8DajgVHyx%2FQ3sbgvNHORfx1k%2B4G5Ar07x63%2FzwPqt5HRABtqDPC%2FaQFP9%2B%2FwbG4fi%2FvWqoh&X-Amz-Signature=5846e37ec5a7f9c8e58a4922f41faed6f60cd885bf17e72ae91ae8e1c035ecaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TRWMRJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBa2%2Bd2QFhYMkmZUvH7e8kUz1elZzMzj4yOYoFT9uOuOAiEAq3WaWsaJBapRlHnlnFoARztD4liYcKXGePdkpZKvaAMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ3cCsfiOwtfShG81CrcA1HZU%2Ft2LfFFPd%2BKxugyyxvS2%2BJZb5whKivj5NvLDfOHbj%2F6OSkbVQoXybzN5xvlEnIUw6KErczA1eo%2F8e86f3%2F7boLz76XerLy%2BDPX%2FbGIlJTSorml4xMfCy4uVfzY%2BJJPNG70W%2FaUzDdidTieNVx3DwFtD39tin0lzykW3VMGRP0buCJAJyDXlVxQcwkXENEDFz6JYKXWCpnXsgGGyqJ8pw%2FzlISra8pcqZInYG2BXEuYqz693mCmiAqH37eVoke4uF9IHLqgbgGwGMdQc6YIizsFRppwiVxMufX6ezeqXX4StYnaGZqirAPcR4Rda%2B778ziUdbBUXXy2M4FoxlizHenq8sj8wcgWFdvbOtE4Cpc4mF82LIzYr%2FWusEWCk2SMqoZ3ohnEAWV%2B5QusJpC7DlkKT4LEEISngUXUmXeU7dVhji30SYC4mKUUvfzqHtbJ7xCZMEkT0NgKM3S8ixOEE6tfc%2BMpHP85FZgYq6fjxaTGwBfHnv76yAqz6uR5zfPoFCc8PXLqXjFFoxMeFaXU15abTfs3LLVn3z0eotSHqOr1wq7x2XpkurPj2TapHvH6lJGAhfKDpbpGIgBIDteYASCis%2FfyWTBd%2BakDTtC%2BIWcilTlHgtVCrbxZ9MJqVhb0GOqUBHCscS4kAQLkYPpxT%2BLTIJTelJmR8ykCd%2FogD99sJWzp79fU5ziWC3UAjijPnE1KvNpOwGyRFBNlAtwxFxFji6KjXyGd0Nf1BbQFEO%2B%2BMTy9bdldti6ONQ36v07T2Y8PsZuO9xEve0%2FUXBe3EJYpQ%2B8DajgVHyx%2FQ3sbgvNHORfx1k%2B4G5Ar07x63%2FzwPqt5HRABtqDPC%2FaQFP9%2B%2FwbG4fi%2FvWqoh&X-Amz-Signature=9c76d2e5904fa3a882a240914b6939b3d95ac66df9db60e856360b4145588180&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TRWMRJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBa2%2Bd2QFhYMkmZUvH7e8kUz1elZzMzj4yOYoFT9uOuOAiEAq3WaWsaJBapRlHnlnFoARztD4liYcKXGePdkpZKvaAMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ3cCsfiOwtfShG81CrcA1HZU%2Ft2LfFFPd%2BKxugyyxvS2%2BJZb5whKivj5NvLDfOHbj%2F6OSkbVQoXybzN5xvlEnIUw6KErczA1eo%2F8e86f3%2F7boLz76XerLy%2BDPX%2FbGIlJTSorml4xMfCy4uVfzY%2BJJPNG70W%2FaUzDdidTieNVx3DwFtD39tin0lzykW3VMGRP0buCJAJyDXlVxQcwkXENEDFz6JYKXWCpnXsgGGyqJ8pw%2FzlISra8pcqZInYG2BXEuYqz693mCmiAqH37eVoke4uF9IHLqgbgGwGMdQc6YIizsFRppwiVxMufX6ezeqXX4StYnaGZqirAPcR4Rda%2B778ziUdbBUXXy2M4FoxlizHenq8sj8wcgWFdvbOtE4Cpc4mF82LIzYr%2FWusEWCk2SMqoZ3ohnEAWV%2B5QusJpC7DlkKT4LEEISngUXUmXeU7dVhji30SYC4mKUUvfzqHtbJ7xCZMEkT0NgKM3S8ixOEE6tfc%2BMpHP85FZgYq6fjxaTGwBfHnv76yAqz6uR5zfPoFCc8PXLqXjFFoxMeFaXU15abTfs3LLVn3z0eotSHqOr1wq7x2XpkurPj2TapHvH6lJGAhfKDpbpGIgBIDteYASCis%2FfyWTBd%2BakDTtC%2BIWcilTlHgtVCrbxZ9MJqVhb0GOqUBHCscS4kAQLkYPpxT%2BLTIJTelJmR8ykCd%2FogD99sJWzp79fU5ziWC3UAjijPnE1KvNpOwGyRFBNlAtwxFxFji6KjXyGd0Nf1BbQFEO%2B%2BMTy9bdldti6ONQ36v07T2Y8PsZuO9xEve0%2FUXBe3EJYpQ%2B8DajgVHyx%2FQ3sbgvNHORfx1k%2B4G5Ar07x63%2FzwPqt5HRABtqDPC%2FaQFP9%2B%2FwbG4fi%2FvWqoh&X-Amz-Signature=d790a6ce4944ff404d4eac1ea0fc0861359e0d5d9f3ec416a9540869ba52f1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TRWMRJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBa2%2Bd2QFhYMkmZUvH7e8kUz1elZzMzj4yOYoFT9uOuOAiEAq3WaWsaJBapRlHnlnFoARztD4liYcKXGePdkpZKvaAMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ3cCsfiOwtfShG81CrcA1HZU%2Ft2LfFFPd%2BKxugyyxvS2%2BJZb5whKivj5NvLDfOHbj%2F6OSkbVQoXybzN5xvlEnIUw6KErczA1eo%2F8e86f3%2F7boLz76XerLy%2BDPX%2FbGIlJTSorml4xMfCy4uVfzY%2BJJPNG70W%2FaUzDdidTieNVx3DwFtD39tin0lzykW3VMGRP0buCJAJyDXlVxQcwkXENEDFz6JYKXWCpnXsgGGyqJ8pw%2FzlISra8pcqZInYG2BXEuYqz693mCmiAqH37eVoke4uF9IHLqgbgGwGMdQc6YIizsFRppwiVxMufX6ezeqXX4StYnaGZqirAPcR4Rda%2B778ziUdbBUXXy2M4FoxlizHenq8sj8wcgWFdvbOtE4Cpc4mF82LIzYr%2FWusEWCk2SMqoZ3ohnEAWV%2B5QusJpC7DlkKT4LEEISngUXUmXeU7dVhji30SYC4mKUUvfzqHtbJ7xCZMEkT0NgKM3S8ixOEE6tfc%2BMpHP85FZgYq6fjxaTGwBfHnv76yAqz6uR5zfPoFCc8PXLqXjFFoxMeFaXU15abTfs3LLVn3z0eotSHqOr1wq7x2XpkurPj2TapHvH6lJGAhfKDpbpGIgBIDteYASCis%2FfyWTBd%2BakDTtC%2BIWcilTlHgtVCrbxZ9MJqVhb0GOqUBHCscS4kAQLkYPpxT%2BLTIJTelJmR8ykCd%2FogD99sJWzp79fU5ziWC3UAjijPnE1KvNpOwGyRFBNlAtwxFxFji6KjXyGd0Nf1BbQFEO%2B%2BMTy9bdldti6ONQ36v07T2Y8PsZuO9xEve0%2FUXBe3EJYpQ%2B8DajgVHyx%2FQ3sbgvNHORfx1k%2B4G5Ar07x63%2FzwPqt5HRABtqDPC%2FaQFP9%2B%2FwbG4fi%2FvWqoh&X-Amz-Signature=121bd21b7ff6eb8c486f6ccc4694e1f729e3193147d3face0de5102049062056&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TRWMRJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBa2%2Bd2QFhYMkmZUvH7e8kUz1elZzMzj4yOYoFT9uOuOAiEAq3WaWsaJBapRlHnlnFoARztD4liYcKXGePdkpZKvaAMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ3cCsfiOwtfShG81CrcA1HZU%2Ft2LfFFPd%2BKxugyyxvS2%2BJZb5whKivj5NvLDfOHbj%2F6OSkbVQoXybzN5xvlEnIUw6KErczA1eo%2F8e86f3%2F7boLz76XerLy%2BDPX%2FbGIlJTSorml4xMfCy4uVfzY%2BJJPNG70W%2FaUzDdidTieNVx3DwFtD39tin0lzykW3VMGRP0buCJAJyDXlVxQcwkXENEDFz6JYKXWCpnXsgGGyqJ8pw%2FzlISra8pcqZInYG2BXEuYqz693mCmiAqH37eVoke4uF9IHLqgbgGwGMdQc6YIizsFRppwiVxMufX6ezeqXX4StYnaGZqirAPcR4Rda%2B778ziUdbBUXXy2M4FoxlizHenq8sj8wcgWFdvbOtE4Cpc4mF82LIzYr%2FWusEWCk2SMqoZ3ohnEAWV%2B5QusJpC7DlkKT4LEEISngUXUmXeU7dVhji30SYC4mKUUvfzqHtbJ7xCZMEkT0NgKM3S8ixOEE6tfc%2BMpHP85FZgYq6fjxaTGwBfHnv76yAqz6uR5zfPoFCc8PXLqXjFFoxMeFaXU15abTfs3LLVn3z0eotSHqOr1wq7x2XpkurPj2TapHvH6lJGAhfKDpbpGIgBIDteYASCis%2FfyWTBd%2BakDTtC%2BIWcilTlHgtVCrbxZ9MJqVhb0GOqUBHCscS4kAQLkYPpxT%2BLTIJTelJmR8ykCd%2FogD99sJWzp79fU5ziWC3UAjijPnE1KvNpOwGyRFBNlAtwxFxFji6KjXyGd0Nf1BbQFEO%2B%2BMTy9bdldti6ONQ36v07T2Y8PsZuO9xEve0%2FUXBe3EJYpQ%2B8DajgVHyx%2FQ3sbgvNHORfx1k%2B4G5Ar07x63%2FzwPqt5HRABtqDPC%2FaQFP9%2B%2FwbG4fi%2FvWqoh&X-Amz-Signature=c0a0ac286d89d8b7d11fad59ef6be2fedaf6fec2c18665b1406c1a4f6e94252b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
