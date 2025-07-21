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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMR7HQ7W%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F%2F51czZ0stwkuKycJU%2F6sKKgzCKsndp%2BUibh8Y6OOPAiEArmSQ2GykM3ZURs7sowyHzq4%2F2iDGPovEKPRAHV4LOm0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBobPHiHO0bpXf6ToSrcA3V7A91hYd%2FbwBGKQvyAGfNf2KQpDAxdGL%2FMj9geFfIPoZq96GOlYi0SBm7Kvre2wv67zvnUfJ7KTn3joNXizqVRhGxmDAYSIMA5ahMpXCjHeEJbF%2FEO9iWmN090j6DiHQSpNVjvgEd6HStvHJplkJx0EGIkNVZcw7z4JS8bza3%2Frbop6rmmOJLRvW4AnY3LMLUiWdbh55qMNay2DZbXbYxPIT4wHkRb%2BqLsj32IFR3RQSLcyTSdsPz5otdaHdQP%2FDUHTyUmqqoWWVkoZPvKfbWUlNCWFuPAMd1ariU04iVa%2BHij21Q%2BfAxkebkSNKLd4tX4kmjK8XGiLBdNku8noLZjHPQVC%2Bl3GKopCXTp4MzUDXbTlW%2B98abyKK8yU3wPhG%2FemrYpv%2FteH97xr0vQbkBXYw9SUyboAmvJU8eZN55RaD8Xypyv4MxVWJev3cx88MDvCfsSdsF0YvigZyUazgM0FNS%2BNzq2RquRAA48S2dlIfxMf0C%2F9YZNLoqT8fPJZC4cwn%2BvY1NZHEj7Zdx3nHcQwYNCbY0ODEpoxBh8FbXLfzIOjG38nlVaiVUnI2XPCimx%2FJBEybNPQ4VH4qA5jmPZihzZO9l9wYh%2FZjAuysmt%2B1CZcTKDlgzGU0SsMOj5%2BMMGOqUBXp1YQ2ESzqPhHNVFnqmc%2FA5Trbh0KheXIfuwWKzQRqJzs%2FXzBl5%2FVFdbg8RMsoTrI%2FMIkxeVNhsLE9WEnsLA9%2Ffx0cFSY%2B1ATiI9gn9SXHp4AB8XRbDkeZ6a78HAU6Regjd3IdmZJ3IrXHWf9dS6MrV8DyQbs1dH%2BRpCMCP5QRvsJQ0u62xTSUzXkdH6FK7WyMSc2Mdp5rLUq8Na0QzCyCH%2BIANH&X-Amz-Signature=7a55b90f217ff73059987a64920bc4d5182b2f42d60de8c7879407f98152c69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMR7HQ7W%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F%2F51czZ0stwkuKycJU%2F6sKKgzCKsndp%2BUibh8Y6OOPAiEArmSQ2GykM3ZURs7sowyHzq4%2F2iDGPovEKPRAHV4LOm0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBobPHiHO0bpXf6ToSrcA3V7A91hYd%2FbwBGKQvyAGfNf2KQpDAxdGL%2FMj9geFfIPoZq96GOlYi0SBm7Kvre2wv67zvnUfJ7KTn3joNXizqVRhGxmDAYSIMA5ahMpXCjHeEJbF%2FEO9iWmN090j6DiHQSpNVjvgEd6HStvHJplkJx0EGIkNVZcw7z4JS8bza3%2Frbop6rmmOJLRvW4AnY3LMLUiWdbh55qMNay2DZbXbYxPIT4wHkRb%2BqLsj32IFR3RQSLcyTSdsPz5otdaHdQP%2FDUHTyUmqqoWWVkoZPvKfbWUlNCWFuPAMd1ariU04iVa%2BHij21Q%2BfAxkebkSNKLd4tX4kmjK8XGiLBdNku8noLZjHPQVC%2Bl3GKopCXTp4MzUDXbTlW%2B98abyKK8yU3wPhG%2FemrYpv%2FteH97xr0vQbkBXYw9SUyboAmvJU8eZN55RaD8Xypyv4MxVWJev3cx88MDvCfsSdsF0YvigZyUazgM0FNS%2BNzq2RquRAA48S2dlIfxMf0C%2F9YZNLoqT8fPJZC4cwn%2BvY1NZHEj7Zdx3nHcQwYNCbY0ODEpoxBh8FbXLfzIOjG38nlVaiVUnI2XPCimx%2FJBEybNPQ4VH4qA5jmPZihzZO9l9wYh%2FZjAuysmt%2B1CZcTKDlgzGU0SsMOj5%2BMMGOqUBXp1YQ2ESzqPhHNVFnqmc%2FA5Trbh0KheXIfuwWKzQRqJzs%2FXzBl5%2FVFdbg8RMsoTrI%2FMIkxeVNhsLE9WEnsLA9%2Ffx0cFSY%2B1ATiI9gn9SXHp4AB8XRbDkeZ6a78HAU6Regjd3IdmZJ3IrXHWf9dS6MrV8DyQbs1dH%2BRpCMCP5QRvsJQ0u62xTSUzXkdH6FK7WyMSc2Mdp5rLUq8Na0QzCyCH%2BIANH&X-Amz-Signature=5b8019b2b3d3636572412a2c2901ed5117726726e48beefc4919fb521ddf168f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMR7HQ7W%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F%2F51czZ0stwkuKycJU%2F6sKKgzCKsndp%2BUibh8Y6OOPAiEArmSQ2GykM3ZURs7sowyHzq4%2F2iDGPovEKPRAHV4LOm0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBobPHiHO0bpXf6ToSrcA3V7A91hYd%2FbwBGKQvyAGfNf2KQpDAxdGL%2FMj9geFfIPoZq96GOlYi0SBm7Kvre2wv67zvnUfJ7KTn3joNXizqVRhGxmDAYSIMA5ahMpXCjHeEJbF%2FEO9iWmN090j6DiHQSpNVjvgEd6HStvHJplkJx0EGIkNVZcw7z4JS8bza3%2Frbop6rmmOJLRvW4AnY3LMLUiWdbh55qMNay2DZbXbYxPIT4wHkRb%2BqLsj32IFR3RQSLcyTSdsPz5otdaHdQP%2FDUHTyUmqqoWWVkoZPvKfbWUlNCWFuPAMd1ariU04iVa%2BHij21Q%2BfAxkebkSNKLd4tX4kmjK8XGiLBdNku8noLZjHPQVC%2Bl3GKopCXTp4MzUDXbTlW%2B98abyKK8yU3wPhG%2FemrYpv%2FteH97xr0vQbkBXYw9SUyboAmvJU8eZN55RaD8Xypyv4MxVWJev3cx88MDvCfsSdsF0YvigZyUazgM0FNS%2BNzq2RquRAA48S2dlIfxMf0C%2F9YZNLoqT8fPJZC4cwn%2BvY1NZHEj7Zdx3nHcQwYNCbY0ODEpoxBh8FbXLfzIOjG38nlVaiVUnI2XPCimx%2FJBEybNPQ4VH4qA5jmPZihzZO9l9wYh%2FZjAuysmt%2B1CZcTKDlgzGU0SsMOj5%2BMMGOqUBXp1YQ2ESzqPhHNVFnqmc%2FA5Trbh0KheXIfuwWKzQRqJzs%2FXzBl5%2FVFdbg8RMsoTrI%2FMIkxeVNhsLE9WEnsLA9%2Ffx0cFSY%2B1ATiI9gn9SXHp4AB8XRbDkeZ6a78HAU6Regjd3IdmZJ3IrXHWf9dS6MrV8DyQbs1dH%2BRpCMCP5QRvsJQ0u62xTSUzXkdH6FK7WyMSc2Mdp5rLUq8Na0QzCyCH%2BIANH&X-Amz-Signature=4fd58dad1ed5502ca3198eb0af21f0d0e85618e2f2c1bb9aca164dea65671c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMR7HQ7W%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F%2F51czZ0stwkuKycJU%2F6sKKgzCKsndp%2BUibh8Y6OOPAiEArmSQ2GykM3ZURs7sowyHzq4%2F2iDGPovEKPRAHV4LOm0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBobPHiHO0bpXf6ToSrcA3V7A91hYd%2FbwBGKQvyAGfNf2KQpDAxdGL%2FMj9geFfIPoZq96GOlYi0SBm7Kvre2wv67zvnUfJ7KTn3joNXizqVRhGxmDAYSIMA5ahMpXCjHeEJbF%2FEO9iWmN090j6DiHQSpNVjvgEd6HStvHJplkJx0EGIkNVZcw7z4JS8bza3%2Frbop6rmmOJLRvW4AnY3LMLUiWdbh55qMNay2DZbXbYxPIT4wHkRb%2BqLsj32IFR3RQSLcyTSdsPz5otdaHdQP%2FDUHTyUmqqoWWVkoZPvKfbWUlNCWFuPAMd1ariU04iVa%2BHij21Q%2BfAxkebkSNKLd4tX4kmjK8XGiLBdNku8noLZjHPQVC%2Bl3GKopCXTp4MzUDXbTlW%2B98abyKK8yU3wPhG%2FemrYpv%2FteH97xr0vQbkBXYw9SUyboAmvJU8eZN55RaD8Xypyv4MxVWJev3cx88MDvCfsSdsF0YvigZyUazgM0FNS%2BNzq2RquRAA48S2dlIfxMf0C%2F9YZNLoqT8fPJZC4cwn%2BvY1NZHEj7Zdx3nHcQwYNCbY0ODEpoxBh8FbXLfzIOjG38nlVaiVUnI2XPCimx%2FJBEybNPQ4VH4qA5jmPZihzZO9l9wYh%2FZjAuysmt%2B1CZcTKDlgzGU0SsMOj5%2BMMGOqUBXp1YQ2ESzqPhHNVFnqmc%2FA5Trbh0KheXIfuwWKzQRqJzs%2FXzBl5%2FVFdbg8RMsoTrI%2FMIkxeVNhsLE9WEnsLA9%2Ffx0cFSY%2B1ATiI9gn9SXHp4AB8XRbDkeZ6a78HAU6Regjd3IdmZJ3IrXHWf9dS6MrV8DyQbs1dH%2BRpCMCP5QRvsJQ0u62xTSUzXkdH6FK7WyMSc2Mdp5rLUq8Na0QzCyCH%2BIANH&X-Amz-Signature=ad189d44351ca9b6d4ad27590a240b9c8dd5f8c7497bb1c08cd8369d939bd067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMR7HQ7W%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F%2F51czZ0stwkuKycJU%2F6sKKgzCKsndp%2BUibh8Y6OOPAiEArmSQ2GykM3ZURs7sowyHzq4%2F2iDGPovEKPRAHV4LOm0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBobPHiHO0bpXf6ToSrcA3V7A91hYd%2FbwBGKQvyAGfNf2KQpDAxdGL%2FMj9geFfIPoZq96GOlYi0SBm7Kvre2wv67zvnUfJ7KTn3joNXizqVRhGxmDAYSIMA5ahMpXCjHeEJbF%2FEO9iWmN090j6DiHQSpNVjvgEd6HStvHJplkJx0EGIkNVZcw7z4JS8bza3%2Frbop6rmmOJLRvW4AnY3LMLUiWdbh55qMNay2DZbXbYxPIT4wHkRb%2BqLsj32IFR3RQSLcyTSdsPz5otdaHdQP%2FDUHTyUmqqoWWVkoZPvKfbWUlNCWFuPAMd1ariU04iVa%2BHij21Q%2BfAxkebkSNKLd4tX4kmjK8XGiLBdNku8noLZjHPQVC%2Bl3GKopCXTp4MzUDXbTlW%2B98abyKK8yU3wPhG%2FemrYpv%2FteH97xr0vQbkBXYw9SUyboAmvJU8eZN55RaD8Xypyv4MxVWJev3cx88MDvCfsSdsF0YvigZyUazgM0FNS%2BNzq2RquRAA48S2dlIfxMf0C%2F9YZNLoqT8fPJZC4cwn%2BvY1NZHEj7Zdx3nHcQwYNCbY0ODEpoxBh8FbXLfzIOjG38nlVaiVUnI2XPCimx%2FJBEybNPQ4VH4qA5jmPZihzZO9l9wYh%2FZjAuysmt%2B1CZcTKDlgzGU0SsMOj5%2BMMGOqUBXp1YQ2ESzqPhHNVFnqmc%2FA5Trbh0KheXIfuwWKzQRqJzs%2FXzBl5%2FVFdbg8RMsoTrI%2FMIkxeVNhsLE9WEnsLA9%2Ffx0cFSY%2B1ATiI9gn9SXHp4AB8XRbDkeZ6a78HAU6Regjd3IdmZJ3IrXHWf9dS6MrV8DyQbs1dH%2BRpCMCP5QRvsJQ0u62xTSUzXkdH6FK7WyMSc2Mdp5rLUq8Na0QzCyCH%2BIANH&X-Amz-Signature=de8ff37eee05b3c7b7085f9659160d296ef28a957becdaf512afd0d85df0e98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
