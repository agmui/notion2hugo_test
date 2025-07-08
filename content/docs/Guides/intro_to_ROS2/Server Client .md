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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEFSECS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwQB9hfO8cuVxTflVZcBGGaymDw3%2FwiITeERfv97QKSQIgHjZYepka7A597MI0cexxBe75lSOGM4jmPWqwE6sJWr8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpdvp0YR3MLvYh%2FlircA2dzE94rK6RViNw6xa4xHCQZT4sKMncptbL1tgrCetwvX1wduz6VDX%2FoI5IpQmPnDODXGJiJvzBFgYOqou8w5GTdC18I7GWuKCk3DeD0W%2BgexAXTG6G6%2BmTIO98yfSgGPMvlE0aoAzoi0tva%2BlI8uwWxT%2BtQ2a6nrlxjUnCEDPDUdmiY2xS1KavFksj9kbNWVnghvjQ8SDZ9p2uaVFvdK0ukO3u0aT3YuYPd2bHVaIeJ7Y00QeYhIELutu5mVMHlqT%2BdLWrBlJyyR3Tsp%2BqQ4OJx0wAwwhPpFc9dRo4abPqdrZ9RqiglLjmZJbx3toeBi48x%2BmnAGEEcXI5VbjNwq%2FGpdlPgy%2FIvTAQCKZJvuVbs9nIhSvmmhVH47VS4KQ4tMouGEVvRWmKDglQjikV00VhBNnhvhuLXDJVyz%2Frj721Kcg05OVnUrWCB6miAGCR9jywrFBHteYFAFg8IEjqmKkQwyJ9FhUm1c9RpeXC3UWFEc6%2Fzunxtl0%2FwBQqn9B%2Fx%2F%2Fc90AmIkiag%2BWE6CUzxCIxU%2B7FfZ7vRa%2FDALNZAMzT%2FF26uzns6UPE3OKfGoPC8YIpB3rBchJOjUi52mB61nqgttAniG7%2FUdfTKij9XsvcaVNVhTjq0pU9gvw%2BxMM%2BztsMGOqUB7U7o0OlDSvGb6GPm3sEr5ERqF%2FLNm4n%2BGC4TkJqAq8dw1ICM6xTG4iPbuJn2DgxlZhquYiqreSZBZybSfCmLFWRAcdZSISL8trkj1L7i1%2FoBT80aMd%2FHRlASrH5MewZ4CVC7pB%2FkLuBr4MfvGW5HHEynjUwz25i1kvcxU44wUhwUC3MxVnb%2FFt0TL4oBux%2BXRntjbyCaZePIrKeFdFgP3d4V%2FlRW&X-Amz-Signature=50a606407b91644a5d88507ca39d3385884f32b50dd46bf393f2a562d449aa4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEFSECS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwQB9hfO8cuVxTflVZcBGGaymDw3%2FwiITeERfv97QKSQIgHjZYepka7A597MI0cexxBe75lSOGM4jmPWqwE6sJWr8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpdvp0YR3MLvYh%2FlircA2dzE94rK6RViNw6xa4xHCQZT4sKMncptbL1tgrCetwvX1wduz6VDX%2FoI5IpQmPnDODXGJiJvzBFgYOqou8w5GTdC18I7GWuKCk3DeD0W%2BgexAXTG6G6%2BmTIO98yfSgGPMvlE0aoAzoi0tva%2BlI8uwWxT%2BtQ2a6nrlxjUnCEDPDUdmiY2xS1KavFksj9kbNWVnghvjQ8SDZ9p2uaVFvdK0ukO3u0aT3YuYPd2bHVaIeJ7Y00QeYhIELutu5mVMHlqT%2BdLWrBlJyyR3Tsp%2BqQ4OJx0wAwwhPpFc9dRo4abPqdrZ9RqiglLjmZJbx3toeBi48x%2BmnAGEEcXI5VbjNwq%2FGpdlPgy%2FIvTAQCKZJvuVbs9nIhSvmmhVH47VS4KQ4tMouGEVvRWmKDglQjikV00VhBNnhvhuLXDJVyz%2Frj721Kcg05OVnUrWCB6miAGCR9jywrFBHteYFAFg8IEjqmKkQwyJ9FhUm1c9RpeXC3UWFEc6%2Fzunxtl0%2FwBQqn9B%2Fx%2F%2Fc90AmIkiag%2BWE6CUzxCIxU%2B7FfZ7vRa%2FDALNZAMzT%2FF26uzns6UPE3OKfGoPC8YIpB3rBchJOjUi52mB61nqgttAniG7%2FUdfTKij9XsvcaVNVhTjq0pU9gvw%2BxMM%2BztsMGOqUB7U7o0OlDSvGb6GPm3sEr5ERqF%2FLNm4n%2BGC4TkJqAq8dw1ICM6xTG4iPbuJn2DgxlZhquYiqreSZBZybSfCmLFWRAcdZSISL8trkj1L7i1%2FoBT80aMd%2FHRlASrH5MewZ4CVC7pB%2FkLuBr4MfvGW5HHEynjUwz25i1kvcxU44wUhwUC3MxVnb%2FFt0TL4oBux%2BXRntjbyCaZePIrKeFdFgP3d4V%2FlRW&X-Amz-Signature=5206bbacd2339b3c093f2ae4376b217ffdad0ae4c0a675171f4ed82abe92d12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEFSECS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwQB9hfO8cuVxTflVZcBGGaymDw3%2FwiITeERfv97QKSQIgHjZYepka7A597MI0cexxBe75lSOGM4jmPWqwE6sJWr8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpdvp0YR3MLvYh%2FlircA2dzE94rK6RViNw6xa4xHCQZT4sKMncptbL1tgrCetwvX1wduz6VDX%2FoI5IpQmPnDODXGJiJvzBFgYOqou8w5GTdC18I7GWuKCk3DeD0W%2BgexAXTG6G6%2BmTIO98yfSgGPMvlE0aoAzoi0tva%2BlI8uwWxT%2BtQ2a6nrlxjUnCEDPDUdmiY2xS1KavFksj9kbNWVnghvjQ8SDZ9p2uaVFvdK0ukO3u0aT3YuYPd2bHVaIeJ7Y00QeYhIELutu5mVMHlqT%2BdLWrBlJyyR3Tsp%2BqQ4OJx0wAwwhPpFc9dRo4abPqdrZ9RqiglLjmZJbx3toeBi48x%2BmnAGEEcXI5VbjNwq%2FGpdlPgy%2FIvTAQCKZJvuVbs9nIhSvmmhVH47VS4KQ4tMouGEVvRWmKDglQjikV00VhBNnhvhuLXDJVyz%2Frj721Kcg05OVnUrWCB6miAGCR9jywrFBHteYFAFg8IEjqmKkQwyJ9FhUm1c9RpeXC3UWFEc6%2Fzunxtl0%2FwBQqn9B%2Fx%2F%2Fc90AmIkiag%2BWE6CUzxCIxU%2B7FfZ7vRa%2FDALNZAMzT%2FF26uzns6UPE3OKfGoPC8YIpB3rBchJOjUi52mB61nqgttAniG7%2FUdfTKij9XsvcaVNVhTjq0pU9gvw%2BxMM%2BztsMGOqUB7U7o0OlDSvGb6GPm3sEr5ERqF%2FLNm4n%2BGC4TkJqAq8dw1ICM6xTG4iPbuJn2DgxlZhquYiqreSZBZybSfCmLFWRAcdZSISL8trkj1L7i1%2FoBT80aMd%2FHRlASrH5MewZ4CVC7pB%2FkLuBr4MfvGW5HHEynjUwz25i1kvcxU44wUhwUC3MxVnb%2FFt0TL4oBux%2BXRntjbyCaZePIrKeFdFgP3d4V%2FlRW&X-Amz-Signature=15b39c8784e457fec3061560248e2be8b0e9ec35aecf718071a167b106cc0af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEFSECS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwQB9hfO8cuVxTflVZcBGGaymDw3%2FwiITeERfv97QKSQIgHjZYepka7A597MI0cexxBe75lSOGM4jmPWqwE6sJWr8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpdvp0YR3MLvYh%2FlircA2dzE94rK6RViNw6xa4xHCQZT4sKMncptbL1tgrCetwvX1wduz6VDX%2FoI5IpQmPnDODXGJiJvzBFgYOqou8w5GTdC18I7GWuKCk3DeD0W%2BgexAXTG6G6%2BmTIO98yfSgGPMvlE0aoAzoi0tva%2BlI8uwWxT%2BtQ2a6nrlxjUnCEDPDUdmiY2xS1KavFksj9kbNWVnghvjQ8SDZ9p2uaVFvdK0ukO3u0aT3YuYPd2bHVaIeJ7Y00QeYhIELutu5mVMHlqT%2BdLWrBlJyyR3Tsp%2BqQ4OJx0wAwwhPpFc9dRo4abPqdrZ9RqiglLjmZJbx3toeBi48x%2BmnAGEEcXI5VbjNwq%2FGpdlPgy%2FIvTAQCKZJvuVbs9nIhSvmmhVH47VS4KQ4tMouGEVvRWmKDglQjikV00VhBNnhvhuLXDJVyz%2Frj721Kcg05OVnUrWCB6miAGCR9jywrFBHteYFAFg8IEjqmKkQwyJ9FhUm1c9RpeXC3UWFEc6%2Fzunxtl0%2FwBQqn9B%2Fx%2F%2Fc90AmIkiag%2BWE6CUzxCIxU%2B7FfZ7vRa%2FDALNZAMzT%2FF26uzns6UPE3OKfGoPC8YIpB3rBchJOjUi52mB61nqgttAniG7%2FUdfTKij9XsvcaVNVhTjq0pU9gvw%2BxMM%2BztsMGOqUB7U7o0OlDSvGb6GPm3sEr5ERqF%2FLNm4n%2BGC4TkJqAq8dw1ICM6xTG4iPbuJn2DgxlZhquYiqreSZBZybSfCmLFWRAcdZSISL8trkj1L7i1%2FoBT80aMd%2FHRlASrH5MewZ4CVC7pB%2FkLuBr4MfvGW5HHEynjUwz25i1kvcxU44wUhwUC3MxVnb%2FFt0TL4oBux%2BXRntjbyCaZePIrKeFdFgP3d4V%2FlRW&X-Amz-Signature=1c00401182ffa6b53bc132b5e8c5a8e887506a6b204f67187e5d3ca6538b6a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEFSECS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwQB9hfO8cuVxTflVZcBGGaymDw3%2FwiITeERfv97QKSQIgHjZYepka7A597MI0cexxBe75lSOGM4jmPWqwE6sJWr8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpdvp0YR3MLvYh%2FlircA2dzE94rK6RViNw6xa4xHCQZT4sKMncptbL1tgrCetwvX1wduz6VDX%2FoI5IpQmPnDODXGJiJvzBFgYOqou8w5GTdC18I7GWuKCk3DeD0W%2BgexAXTG6G6%2BmTIO98yfSgGPMvlE0aoAzoi0tva%2BlI8uwWxT%2BtQ2a6nrlxjUnCEDPDUdmiY2xS1KavFksj9kbNWVnghvjQ8SDZ9p2uaVFvdK0ukO3u0aT3YuYPd2bHVaIeJ7Y00QeYhIELutu5mVMHlqT%2BdLWrBlJyyR3Tsp%2BqQ4OJx0wAwwhPpFc9dRo4abPqdrZ9RqiglLjmZJbx3toeBi48x%2BmnAGEEcXI5VbjNwq%2FGpdlPgy%2FIvTAQCKZJvuVbs9nIhSvmmhVH47VS4KQ4tMouGEVvRWmKDglQjikV00VhBNnhvhuLXDJVyz%2Frj721Kcg05OVnUrWCB6miAGCR9jywrFBHteYFAFg8IEjqmKkQwyJ9FhUm1c9RpeXC3UWFEc6%2Fzunxtl0%2FwBQqn9B%2Fx%2F%2Fc90AmIkiag%2BWE6CUzxCIxU%2B7FfZ7vRa%2FDALNZAMzT%2FF26uzns6UPE3OKfGoPC8YIpB3rBchJOjUi52mB61nqgttAniG7%2FUdfTKij9XsvcaVNVhTjq0pU9gvw%2BxMM%2BztsMGOqUB7U7o0OlDSvGb6GPm3sEr5ERqF%2FLNm4n%2BGC4TkJqAq8dw1ICM6xTG4iPbuJn2DgxlZhquYiqreSZBZybSfCmLFWRAcdZSISL8trkj1L7i1%2FoBT80aMd%2FHRlASrH5MewZ4CVC7pB%2FkLuBr4MfvGW5HHEynjUwz25i1kvcxU44wUhwUC3MxVnb%2FFt0TL4oBux%2BXRntjbyCaZePIrKeFdFgP3d4V%2FlRW&X-Amz-Signature=90815ac1f3865d1a4eef452b3e92d695732b8217c16a2755fd9d75e2946e3cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
