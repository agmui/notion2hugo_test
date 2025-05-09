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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVWXDYQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkrMlo%2BwG3LlkvING3gJVsJ7K%2FanrV%2BGzms00%2B4Z7vVAIgMD24fXSd%2BKuLDCl3C62zKeMa86HulfxfgD0xCfbJDr0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC11BikKtipQ6gP6pircA%2FK2UKjBaPrOz0LgkpK7sdg3xgrB%2FWaGIvC5JFmwFLAyqGq9JBW2uimvXkdk1AlUMyOv9SiqTyTUUDHUeoVZnJ7HHmj7qC5pTw4aqGvNzNGfvVmEIV9Gwjup92uOvntyaMkTvq9kt9wyAX2HlVWoL4pwDgjGSvLZLQ2nklvPbymgMeP0g3lO6%2F%2B05Mex5DVS3nZVqtxKUT%2FLzX6eWO0dRXnmnFlXedl%2BCD%2FHlQEueUttfi6GJ2ziqQnTD9%2Fys1xa5bORZuvUe4R8jvjyGQcuJ1erkwRL%2FeSr6jRCm5LNrtJAu6gkKqezoq6lnWKJ4dv2dVQdJLWKb6YJwr0yTnKJpqzEzzcBNQR3CLX8aufmpCVaY09AKF8uTzqY%2BfdT5%2FMixQe%2BNxRwH4Kuel8QvCTTksqQLHKePOt0Mwk7HmwDVa7ARbe2mF%2FqR%2BrPfe7951Gn%2B43M6xhyiFjKNzGrIfVIQZdkPRilMo0e8%2FrVyvG03m0ViELdiy1AUobm1UMtte3PAiXiTEiKWH%2Fs096h16j97gppdRHE0ppgWNzMJUXrlW%2FGkq9WrV1X51ZUhcL5HhN1ncL%2BB6X14%2BIVOGSi0c%2Fu%2BesgjKOK0JIxTGqzUj6DQqkOOy1fMS95D3Mqqgf7MJLj9MAGOqUBq0xDpItgtaF19VBJpjqsWl%2FI71DWZTJuMvMvKfqlVNE7HCgvmYlkT69VkU62jS2osoZCSflInUZtADd9i7lVl0X3MGXK26GrJBl%2FDzq9C5Q%2Bi0pcKFtNMwU2v%2BLDIWFFl3OMY83pTEKYZ0IhQRABN4ykb4cUxGGmeBp%2BmdIqfkggDYpVD1qFs3cZbAWcifLVEC7A4x4V4xvKOkou1hD8kQR8kHdX&X-Amz-Signature=5f45fb541370c709c27b6392c67baeb8f60c3861d948d034a78ac5b43faed0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVWXDYQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkrMlo%2BwG3LlkvING3gJVsJ7K%2FanrV%2BGzms00%2B4Z7vVAIgMD24fXSd%2BKuLDCl3C62zKeMa86HulfxfgD0xCfbJDr0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC11BikKtipQ6gP6pircA%2FK2UKjBaPrOz0LgkpK7sdg3xgrB%2FWaGIvC5JFmwFLAyqGq9JBW2uimvXkdk1AlUMyOv9SiqTyTUUDHUeoVZnJ7HHmj7qC5pTw4aqGvNzNGfvVmEIV9Gwjup92uOvntyaMkTvq9kt9wyAX2HlVWoL4pwDgjGSvLZLQ2nklvPbymgMeP0g3lO6%2F%2B05Mex5DVS3nZVqtxKUT%2FLzX6eWO0dRXnmnFlXedl%2BCD%2FHlQEueUttfi6GJ2ziqQnTD9%2Fys1xa5bORZuvUe4R8jvjyGQcuJ1erkwRL%2FeSr6jRCm5LNrtJAu6gkKqezoq6lnWKJ4dv2dVQdJLWKb6YJwr0yTnKJpqzEzzcBNQR3CLX8aufmpCVaY09AKF8uTzqY%2BfdT5%2FMixQe%2BNxRwH4Kuel8QvCTTksqQLHKePOt0Mwk7HmwDVa7ARbe2mF%2FqR%2BrPfe7951Gn%2B43M6xhyiFjKNzGrIfVIQZdkPRilMo0e8%2FrVyvG03m0ViELdiy1AUobm1UMtte3PAiXiTEiKWH%2Fs096h16j97gppdRHE0ppgWNzMJUXrlW%2FGkq9WrV1X51ZUhcL5HhN1ncL%2BB6X14%2BIVOGSi0c%2Fu%2BesgjKOK0JIxTGqzUj6DQqkOOy1fMS95D3Mqqgf7MJLj9MAGOqUBq0xDpItgtaF19VBJpjqsWl%2FI71DWZTJuMvMvKfqlVNE7HCgvmYlkT69VkU62jS2osoZCSflInUZtADd9i7lVl0X3MGXK26GrJBl%2FDzq9C5Q%2Bi0pcKFtNMwU2v%2BLDIWFFl3OMY83pTEKYZ0IhQRABN4ykb4cUxGGmeBp%2BmdIqfkggDYpVD1qFs3cZbAWcifLVEC7A4x4V4xvKOkou1hD8kQR8kHdX&X-Amz-Signature=b0ea30cf2cb9812bab3577b1a6db7847ee670601254863abc86ead5110e53406&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVWXDYQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkrMlo%2BwG3LlkvING3gJVsJ7K%2FanrV%2BGzms00%2B4Z7vVAIgMD24fXSd%2BKuLDCl3C62zKeMa86HulfxfgD0xCfbJDr0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC11BikKtipQ6gP6pircA%2FK2UKjBaPrOz0LgkpK7sdg3xgrB%2FWaGIvC5JFmwFLAyqGq9JBW2uimvXkdk1AlUMyOv9SiqTyTUUDHUeoVZnJ7HHmj7qC5pTw4aqGvNzNGfvVmEIV9Gwjup92uOvntyaMkTvq9kt9wyAX2HlVWoL4pwDgjGSvLZLQ2nklvPbymgMeP0g3lO6%2F%2B05Mex5DVS3nZVqtxKUT%2FLzX6eWO0dRXnmnFlXedl%2BCD%2FHlQEueUttfi6GJ2ziqQnTD9%2Fys1xa5bORZuvUe4R8jvjyGQcuJ1erkwRL%2FeSr6jRCm5LNrtJAu6gkKqezoq6lnWKJ4dv2dVQdJLWKb6YJwr0yTnKJpqzEzzcBNQR3CLX8aufmpCVaY09AKF8uTzqY%2BfdT5%2FMixQe%2BNxRwH4Kuel8QvCTTksqQLHKePOt0Mwk7HmwDVa7ARbe2mF%2FqR%2BrPfe7951Gn%2B43M6xhyiFjKNzGrIfVIQZdkPRilMo0e8%2FrVyvG03m0ViELdiy1AUobm1UMtte3PAiXiTEiKWH%2Fs096h16j97gppdRHE0ppgWNzMJUXrlW%2FGkq9WrV1X51ZUhcL5HhN1ncL%2BB6X14%2BIVOGSi0c%2Fu%2BesgjKOK0JIxTGqzUj6DQqkOOy1fMS95D3Mqqgf7MJLj9MAGOqUBq0xDpItgtaF19VBJpjqsWl%2FI71DWZTJuMvMvKfqlVNE7HCgvmYlkT69VkU62jS2osoZCSflInUZtADd9i7lVl0X3MGXK26GrJBl%2FDzq9C5Q%2Bi0pcKFtNMwU2v%2BLDIWFFl3OMY83pTEKYZ0IhQRABN4ykb4cUxGGmeBp%2BmdIqfkggDYpVD1qFs3cZbAWcifLVEC7A4x4V4xvKOkou1hD8kQR8kHdX&X-Amz-Signature=bb25e015b528c042c5ac6742b36f47f36b4129b2d3d6a3bc822e991f849dca71&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVWXDYQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkrMlo%2BwG3LlkvING3gJVsJ7K%2FanrV%2BGzms00%2B4Z7vVAIgMD24fXSd%2BKuLDCl3C62zKeMa86HulfxfgD0xCfbJDr0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC11BikKtipQ6gP6pircA%2FK2UKjBaPrOz0LgkpK7sdg3xgrB%2FWaGIvC5JFmwFLAyqGq9JBW2uimvXkdk1AlUMyOv9SiqTyTUUDHUeoVZnJ7HHmj7qC5pTw4aqGvNzNGfvVmEIV9Gwjup92uOvntyaMkTvq9kt9wyAX2HlVWoL4pwDgjGSvLZLQ2nklvPbymgMeP0g3lO6%2F%2B05Mex5DVS3nZVqtxKUT%2FLzX6eWO0dRXnmnFlXedl%2BCD%2FHlQEueUttfi6GJ2ziqQnTD9%2Fys1xa5bORZuvUe4R8jvjyGQcuJ1erkwRL%2FeSr6jRCm5LNrtJAu6gkKqezoq6lnWKJ4dv2dVQdJLWKb6YJwr0yTnKJpqzEzzcBNQR3CLX8aufmpCVaY09AKF8uTzqY%2BfdT5%2FMixQe%2BNxRwH4Kuel8QvCTTksqQLHKePOt0Mwk7HmwDVa7ARbe2mF%2FqR%2BrPfe7951Gn%2B43M6xhyiFjKNzGrIfVIQZdkPRilMo0e8%2FrVyvG03m0ViELdiy1AUobm1UMtte3PAiXiTEiKWH%2Fs096h16j97gppdRHE0ppgWNzMJUXrlW%2FGkq9WrV1X51ZUhcL5HhN1ncL%2BB6X14%2BIVOGSi0c%2Fu%2BesgjKOK0JIxTGqzUj6DQqkOOy1fMS95D3Mqqgf7MJLj9MAGOqUBq0xDpItgtaF19VBJpjqsWl%2FI71DWZTJuMvMvKfqlVNE7HCgvmYlkT69VkU62jS2osoZCSflInUZtADd9i7lVl0X3MGXK26GrJBl%2FDzq9C5Q%2Bi0pcKFtNMwU2v%2BLDIWFFl3OMY83pTEKYZ0IhQRABN4ykb4cUxGGmeBp%2BmdIqfkggDYpVD1qFs3cZbAWcifLVEC7A4x4V4xvKOkou1hD8kQR8kHdX&X-Amz-Signature=e1e8344e82f0595c4f03ac4409529bf1cacb185c0a76f8d06eba98483e9d022b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVWXDYQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkrMlo%2BwG3LlkvING3gJVsJ7K%2FanrV%2BGzms00%2B4Z7vVAIgMD24fXSd%2BKuLDCl3C62zKeMa86HulfxfgD0xCfbJDr0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC11BikKtipQ6gP6pircA%2FK2UKjBaPrOz0LgkpK7sdg3xgrB%2FWaGIvC5JFmwFLAyqGq9JBW2uimvXkdk1AlUMyOv9SiqTyTUUDHUeoVZnJ7HHmj7qC5pTw4aqGvNzNGfvVmEIV9Gwjup92uOvntyaMkTvq9kt9wyAX2HlVWoL4pwDgjGSvLZLQ2nklvPbymgMeP0g3lO6%2F%2B05Mex5DVS3nZVqtxKUT%2FLzX6eWO0dRXnmnFlXedl%2BCD%2FHlQEueUttfi6GJ2ziqQnTD9%2Fys1xa5bORZuvUe4R8jvjyGQcuJ1erkwRL%2FeSr6jRCm5LNrtJAu6gkKqezoq6lnWKJ4dv2dVQdJLWKb6YJwr0yTnKJpqzEzzcBNQR3CLX8aufmpCVaY09AKF8uTzqY%2BfdT5%2FMixQe%2BNxRwH4Kuel8QvCTTksqQLHKePOt0Mwk7HmwDVa7ARbe2mF%2FqR%2BrPfe7951Gn%2B43M6xhyiFjKNzGrIfVIQZdkPRilMo0e8%2FrVyvG03m0ViELdiy1AUobm1UMtte3PAiXiTEiKWH%2Fs096h16j97gppdRHE0ppgWNzMJUXrlW%2FGkq9WrV1X51ZUhcL5HhN1ncL%2BB6X14%2BIVOGSi0c%2Fu%2BesgjKOK0JIxTGqzUj6DQqkOOy1fMS95D3Mqqgf7MJLj9MAGOqUBq0xDpItgtaF19VBJpjqsWl%2FI71DWZTJuMvMvKfqlVNE7HCgvmYlkT69VkU62jS2osoZCSflInUZtADd9i7lVl0X3MGXK26GrJBl%2FDzq9C5Q%2Bi0pcKFtNMwU2v%2BLDIWFFl3OMY83pTEKYZ0IhQRABN4ykb4cUxGGmeBp%2BmdIqfkggDYpVD1qFs3cZbAWcifLVEC7A4x4V4xvKOkou1hD8kQR8kHdX&X-Amz-Signature=d13deb195ade8628265ed47aa3286f2b625920b48175201cc59e28e25acc7613&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
