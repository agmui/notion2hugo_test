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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOJGI3F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFk1SoYiLcJP0mrfQCdaTI9iFG6M3IQTX%2BaoaoAjyM%2FAiBQH9Okm9k8uqjWcMMPxBaQBQ5iBTIypDISE4VdKabcISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM63X%2FUHW6txP8Z0HuKtwD7uNeTLFq4F2ZzaRkSHlIHAiKqEs8UXKVMe3LN7kk8CytIU7w486fNrT8BWPZDz4rM2Z8ICAoFBQaVUF6kMKSQhopgbxQfMUCfTKoxaZBmKgk5sP8Gh6uxM1yOQcg5fHoRoiwZ98gYvgT5IZ8z0D5aGB7EDi3E6R3Kk%2BD2h74vNTj9Z2YMliB7NOavgV0uLSLoZheiFj%2FY9TZ7KUvN9OKgrNcH6WpXYJuV2MA9EAl0tnGJKcZNi%2FpZE2mu0NsOwbi5BIqqPz9D0rGPZXtw86EvGwQi60y31bsWCb35RcoLrWSLQjMQDlt%2BrBJIVkOsnrWR0ZwVcOccahLI6Joi63NUA3Cijlx2UX5klXW%2FiNP061Esy6p0v%2BOAWpRGUHaexchG841ucRuFytKY5UHqrAweu%2Bqq3R%2BwkV4xs1bkwHA8Z1RiCTUcKzO0fekJ82q3smOvfNPuAV9IFKpaQo7Jxd2I%2BS8x8cyNHPQUpTiMipRzNn6%2FOma1AJ3zzVsNa0K6WgLasL%2F1UPgpyKk%2FMxpkZMnAUliZQ6vHjx18FBrtz0koki0k6aItAM0UVITS5GV707JbcrZNBN%2BpizmmLlFUpjVzvJSyMggmz9yy%2FxoB3exwFxIC4pjGU%2BHDSpDhPgw0aK1wAY6pgEvp82waKtGCLHGSG3Fn4ky9eQNVd1VnFf6CFD56iHKboH9kJDAueHgespw%2F8NiLBNdKI%2FHDiQAz5q3zC0TLKpxYK5Lmq1W%2FKjkQQcPC%2FsHW04ugly9ZMWePjAU2cGNOgdYDXksAZgPxzqJxzltjJZ3vF5WWtWjrkyqRDMWHtUbh9FiyZB5Me7Q7HveCgI2Y0W5XnIUMR4AGYyVqVvnSnJnNF4xn%2BWi&X-Amz-Signature=f5392f1a5d03205322a85ae7776aa2d5b794e9a6e588cb2e5165a12df79a7d93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOJGI3F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFk1SoYiLcJP0mrfQCdaTI9iFG6M3IQTX%2BaoaoAjyM%2FAiBQH9Okm9k8uqjWcMMPxBaQBQ5iBTIypDISE4VdKabcISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM63X%2FUHW6txP8Z0HuKtwD7uNeTLFq4F2ZzaRkSHlIHAiKqEs8UXKVMe3LN7kk8CytIU7w486fNrT8BWPZDz4rM2Z8ICAoFBQaVUF6kMKSQhopgbxQfMUCfTKoxaZBmKgk5sP8Gh6uxM1yOQcg5fHoRoiwZ98gYvgT5IZ8z0D5aGB7EDi3E6R3Kk%2BD2h74vNTj9Z2YMliB7NOavgV0uLSLoZheiFj%2FY9TZ7KUvN9OKgrNcH6WpXYJuV2MA9EAl0tnGJKcZNi%2FpZE2mu0NsOwbi5BIqqPz9D0rGPZXtw86EvGwQi60y31bsWCb35RcoLrWSLQjMQDlt%2BrBJIVkOsnrWR0ZwVcOccahLI6Joi63NUA3Cijlx2UX5klXW%2FiNP061Esy6p0v%2BOAWpRGUHaexchG841ucRuFytKY5UHqrAweu%2Bqq3R%2BwkV4xs1bkwHA8Z1RiCTUcKzO0fekJ82q3smOvfNPuAV9IFKpaQo7Jxd2I%2BS8x8cyNHPQUpTiMipRzNn6%2FOma1AJ3zzVsNa0K6WgLasL%2F1UPgpyKk%2FMxpkZMnAUliZQ6vHjx18FBrtz0koki0k6aItAM0UVITS5GV707JbcrZNBN%2BpizmmLlFUpjVzvJSyMggmz9yy%2FxoB3exwFxIC4pjGU%2BHDSpDhPgw0aK1wAY6pgEvp82waKtGCLHGSG3Fn4ky9eQNVd1VnFf6CFD56iHKboH9kJDAueHgespw%2F8NiLBNdKI%2FHDiQAz5q3zC0TLKpxYK5Lmq1W%2FKjkQQcPC%2FsHW04ugly9ZMWePjAU2cGNOgdYDXksAZgPxzqJxzltjJZ3vF5WWtWjrkyqRDMWHtUbh9FiyZB5Me7Q7HveCgI2Y0W5XnIUMR4AGYyVqVvnSnJnNF4xn%2BWi&X-Amz-Signature=5b6543f1a32300af9ed552e7f523ed200ffe7f791dd390c57d5078e16ce89f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOJGI3F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFk1SoYiLcJP0mrfQCdaTI9iFG6M3IQTX%2BaoaoAjyM%2FAiBQH9Okm9k8uqjWcMMPxBaQBQ5iBTIypDISE4VdKabcISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM63X%2FUHW6txP8Z0HuKtwD7uNeTLFq4F2ZzaRkSHlIHAiKqEs8UXKVMe3LN7kk8CytIU7w486fNrT8BWPZDz4rM2Z8ICAoFBQaVUF6kMKSQhopgbxQfMUCfTKoxaZBmKgk5sP8Gh6uxM1yOQcg5fHoRoiwZ98gYvgT5IZ8z0D5aGB7EDi3E6R3Kk%2BD2h74vNTj9Z2YMliB7NOavgV0uLSLoZheiFj%2FY9TZ7KUvN9OKgrNcH6WpXYJuV2MA9EAl0tnGJKcZNi%2FpZE2mu0NsOwbi5BIqqPz9D0rGPZXtw86EvGwQi60y31bsWCb35RcoLrWSLQjMQDlt%2BrBJIVkOsnrWR0ZwVcOccahLI6Joi63NUA3Cijlx2UX5klXW%2FiNP061Esy6p0v%2BOAWpRGUHaexchG841ucRuFytKY5UHqrAweu%2Bqq3R%2BwkV4xs1bkwHA8Z1RiCTUcKzO0fekJ82q3smOvfNPuAV9IFKpaQo7Jxd2I%2BS8x8cyNHPQUpTiMipRzNn6%2FOma1AJ3zzVsNa0K6WgLasL%2F1UPgpyKk%2FMxpkZMnAUliZQ6vHjx18FBrtz0koki0k6aItAM0UVITS5GV707JbcrZNBN%2BpizmmLlFUpjVzvJSyMggmz9yy%2FxoB3exwFxIC4pjGU%2BHDSpDhPgw0aK1wAY6pgEvp82waKtGCLHGSG3Fn4ky9eQNVd1VnFf6CFD56iHKboH9kJDAueHgespw%2F8NiLBNdKI%2FHDiQAz5q3zC0TLKpxYK5Lmq1W%2FKjkQQcPC%2FsHW04ugly9ZMWePjAU2cGNOgdYDXksAZgPxzqJxzltjJZ3vF5WWtWjrkyqRDMWHtUbh9FiyZB5Me7Q7HveCgI2Y0W5XnIUMR4AGYyVqVvnSnJnNF4xn%2BWi&X-Amz-Signature=6f5029ab6c7a6b3f36056ec58ba6b7c93dc725951d350398c7df2fe9834579ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOJGI3F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFk1SoYiLcJP0mrfQCdaTI9iFG6M3IQTX%2BaoaoAjyM%2FAiBQH9Okm9k8uqjWcMMPxBaQBQ5iBTIypDISE4VdKabcISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM63X%2FUHW6txP8Z0HuKtwD7uNeTLFq4F2ZzaRkSHlIHAiKqEs8UXKVMe3LN7kk8CytIU7w486fNrT8BWPZDz4rM2Z8ICAoFBQaVUF6kMKSQhopgbxQfMUCfTKoxaZBmKgk5sP8Gh6uxM1yOQcg5fHoRoiwZ98gYvgT5IZ8z0D5aGB7EDi3E6R3Kk%2BD2h74vNTj9Z2YMliB7NOavgV0uLSLoZheiFj%2FY9TZ7KUvN9OKgrNcH6WpXYJuV2MA9EAl0tnGJKcZNi%2FpZE2mu0NsOwbi5BIqqPz9D0rGPZXtw86EvGwQi60y31bsWCb35RcoLrWSLQjMQDlt%2BrBJIVkOsnrWR0ZwVcOccahLI6Joi63NUA3Cijlx2UX5klXW%2FiNP061Esy6p0v%2BOAWpRGUHaexchG841ucRuFytKY5UHqrAweu%2Bqq3R%2BwkV4xs1bkwHA8Z1RiCTUcKzO0fekJ82q3smOvfNPuAV9IFKpaQo7Jxd2I%2BS8x8cyNHPQUpTiMipRzNn6%2FOma1AJ3zzVsNa0K6WgLasL%2F1UPgpyKk%2FMxpkZMnAUliZQ6vHjx18FBrtz0koki0k6aItAM0UVITS5GV707JbcrZNBN%2BpizmmLlFUpjVzvJSyMggmz9yy%2FxoB3exwFxIC4pjGU%2BHDSpDhPgw0aK1wAY6pgEvp82waKtGCLHGSG3Fn4ky9eQNVd1VnFf6CFD56iHKboH9kJDAueHgespw%2F8NiLBNdKI%2FHDiQAz5q3zC0TLKpxYK5Lmq1W%2FKjkQQcPC%2FsHW04ugly9ZMWePjAU2cGNOgdYDXksAZgPxzqJxzltjJZ3vF5WWtWjrkyqRDMWHtUbh9FiyZB5Me7Q7HveCgI2Y0W5XnIUMR4AGYyVqVvnSnJnNF4xn%2BWi&X-Amz-Signature=ee5b0e45b5fe8e3707719602b29a8e26c9a898cc74458e47e3fe305c26b4559e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOJGI3F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFk1SoYiLcJP0mrfQCdaTI9iFG6M3IQTX%2BaoaoAjyM%2FAiBQH9Okm9k8uqjWcMMPxBaQBQ5iBTIypDISE4VdKabcISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM63X%2FUHW6txP8Z0HuKtwD7uNeTLFq4F2ZzaRkSHlIHAiKqEs8UXKVMe3LN7kk8CytIU7w486fNrT8BWPZDz4rM2Z8ICAoFBQaVUF6kMKSQhopgbxQfMUCfTKoxaZBmKgk5sP8Gh6uxM1yOQcg5fHoRoiwZ98gYvgT5IZ8z0D5aGB7EDi3E6R3Kk%2BD2h74vNTj9Z2YMliB7NOavgV0uLSLoZheiFj%2FY9TZ7KUvN9OKgrNcH6WpXYJuV2MA9EAl0tnGJKcZNi%2FpZE2mu0NsOwbi5BIqqPz9D0rGPZXtw86EvGwQi60y31bsWCb35RcoLrWSLQjMQDlt%2BrBJIVkOsnrWR0ZwVcOccahLI6Joi63NUA3Cijlx2UX5klXW%2FiNP061Esy6p0v%2BOAWpRGUHaexchG841ucRuFytKY5UHqrAweu%2Bqq3R%2BwkV4xs1bkwHA8Z1RiCTUcKzO0fekJ82q3smOvfNPuAV9IFKpaQo7Jxd2I%2BS8x8cyNHPQUpTiMipRzNn6%2FOma1AJ3zzVsNa0K6WgLasL%2F1UPgpyKk%2FMxpkZMnAUliZQ6vHjx18FBrtz0koki0k6aItAM0UVITS5GV707JbcrZNBN%2BpizmmLlFUpjVzvJSyMggmz9yy%2FxoB3exwFxIC4pjGU%2BHDSpDhPgw0aK1wAY6pgEvp82waKtGCLHGSG3Fn4ky9eQNVd1VnFf6CFD56iHKboH9kJDAueHgespw%2F8NiLBNdKI%2FHDiQAz5q3zC0TLKpxYK5Lmq1W%2FKjkQQcPC%2FsHW04ugly9ZMWePjAU2cGNOgdYDXksAZgPxzqJxzltjJZ3vF5WWtWjrkyqRDMWHtUbh9FiyZB5Me7Q7HveCgI2Y0W5XnIUMR4AGYyVqVvnSnJnNF4xn%2BWi&X-Amz-Signature=63dff0fb129778cab3ce65686e3ff672827231348699e70e00fc50057dba726b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
