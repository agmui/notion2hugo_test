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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAGQ33CZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3ysbTcbfXxcI9dOB6q6q3Jn2EHOfoMZfiCMwypb0k1AiEAmfdYZ0VdB3KEEmrLN80mgVS2ndk1Fwn3W6IVGkos7c0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJY%2FmmRIzuZq8Ds%2BJCrcA1LEywRLl01y%2F9EX1dYQKchHYlOzXZrXDCSN12hl%2BbZ9yKdhP2EEOmL69lkX7UQsWUmgGYOm9F7CNsy8UmF1PSPOxDr3cWCLtBNWhJmj8lemHD8P5CyzhrXzKammMFfte%2B2EoFj1m0HXMejdnmci4hfC1OCmQYUGzyVONGAvApY7s1GJ6F1PscpJhVhYYPK4SH2L3tk6KhvIubBcgGn2nOXp5uiF%2BHVRs%2BjkTxXL8EewUEx%2Bche6ulQNYyesPnxqyK4zpjHOuLCAbrLkdR7V1p3L5Feh%2B7cZ7WJNIL6zG20T8IbUXToUtTY%2F%2BBcb5w3W0jucsclzoIunoMnojf0xGhxGMrWv0BAQI%2FLFx2cN8TyjW33Qx9GFerG1V%2Bg2UnXk0R7tu%2FfJd2W9jXd75MsXSe%2Flfyyh2zDbRKnKHChrb4F3%2FbtJHIuhGLfl%2BnB9QNxQ15uP1Xka5KuKJvqDFAK7Iaxffh9ZeF45atlMqTlEViJ07REkohps3l8wZzT7di01bmjYp55K84o7TjLgaCchKjM%2F9eYp2I63zUg3qN29L2FVZa677ECYrLA8bt78%2BePsqt%2B%2FPkA1Vp5devVOEEyYaDerbksvRBvaqQySFovsmXqMowjOMW37uWr3FPqBMPKIx8IGOqUBwl9Nep4AT8xf%2FYul%2F4ytnXSynSQcjuVosCn%2B7dUMNLrWFbZqET5LZxuW7p2OrkF02hQuHHjifni0ZLQR9UwDP%2FbzOZW9O3aj75cOtYpQ4dhoVWNTd94DgyAJDsfDlcMwyCme1rd7XWzMMj5pzaiJabSzS46que4ePvzhKODb0CO0mYayBYJTFU18Hgs8%2FCfHh4laO1GLKjxAACGxtuafDF%2Foc543&X-Amz-Signature=7a12b6ffd3ecce02be2456d4c86a0963cc6c881cc68c621acd668c7930b83bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAGQ33CZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3ysbTcbfXxcI9dOB6q6q3Jn2EHOfoMZfiCMwypb0k1AiEAmfdYZ0VdB3KEEmrLN80mgVS2ndk1Fwn3W6IVGkos7c0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJY%2FmmRIzuZq8Ds%2BJCrcA1LEywRLl01y%2F9EX1dYQKchHYlOzXZrXDCSN12hl%2BbZ9yKdhP2EEOmL69lkX7UQsWUmgGYOm9F7CNsy8UmF1PSPOxDr3cWCLtBNWhJmj8lemHD8P5CyzhrXzKammMFfte%2B2EoFj1m0HXMejdnmci4hfC1OCmQYUGzyVONGAvApY7s1GJ6F1PscpJhVhYYPK4SH2L3tk6KhvIubBcgGn2nOXp5uiF%2BHVRs%2BjkTxXL8EewUEx%2Bche6ulQNYyesPnxqyK4zpjHOuLCAbrLkdR7V1p3L5Feh%2B7cZ7WJNIL6zG20T8IbUXToUtTY%2F%2BBcb5w3W0jucsclzoIunoMnojf0xGhxGMrWv0BAQI%2FLFx2cN8TyjW33Qx9GFerG1V%2Bg2UnXk0R7tu%2FfJd2W9jXd75MsXSe%2Flfyyh2zDbRKnKHChrb4F3%2FbtJHIuhGLfl%2BnB9QNxQ15uP1Xka5KuKJvqDFAK7Iaxffh9ZeF45atlMqTlEViJ07REkohps3l8wZzT7di01bmjYp55K84o7TjLgaCchKjM%2F9eYp2I63zUg3qN29L2FVZa677ECYrLA8bt78%2BePsqt%2B%2FPkA1Vp5devVOEEyYaDerbksvRBvaqQySFovsmXqMowjOMW37uWr3FPqBMPKIx8IGOqUBwl9Nep4AT8xf%2FYul%2F4ytnXSynSQcjuVosCn%2B7dUMNLrWFbZqET5LZxuW7p2OrkF02hQuHHjifni0ZLQR9UwDP%2FbzOZW9O3aj75cOtYpQ4dhoVWNTd94DgyAJDsfDlcMwyCme1rd7XWzMMj5pzaiJabSzS46que4ePvzhKODb0CO0mYayBYJTFU18Hgs8%2FCfHh4laO1GLKjxAACGxtuafDF%2Foc543&X-Amz-Signature=55f45c2dfec53921f3c8080b4e038f421bef0a4de8384f2e2e0d051955d7205f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAGQ33CZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3ysbTcbfXxcI9dOB6q6q3Jn2EHOfoMZfiCMwypb0k1AiEAmfdYZ0VdB3KEEmrLN80mgVS2ndk1Fwn3W6IVGkos7c0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJY%2FmmRIzuZq8Ds%2BJCrcA1LEywRLl01y%2F9EX1dYQKchHYlOzXZrXDCSN12hl%2BbZ9yKdhP2EEOmL69lkX7UQsWUmgGYOm9F7CNsy8UmF1PSPOxDr3cWCLtBNWhJmj8lemHD8P5CyzhrXzKammMFfte%2B2EoFj1m0HXMejdnmci4hfC1OCmQYUGzyVONGAvApY7s1GJ6F1PscpJhVhYYPK4SH2L3tk6KhvIubBcgGn2nOXp5uiF%2BHVRs%2BjkTxXL8EewUEx%2Bche6ulQNYyesPnxqyK4zpjHOuLCAbrLkdR7V1p3L5Feh%2B7cZ7WJNIL6zG20T8IbUXToUtTY%2F%2BBcb5w3W0jucsclzoIunoMnojf0xGhxGMrWv0BAQI%2FLFx2cN8TyjW33Qx9GFerG1V%2Bg2UnXk0R7tu%2FfJd2W9jXd75MsXSe%2Flfyyh2zDbRKnKHChrb4F3%2FbtJHIuhGLfl%2BnB9QNxQ15uP1Xka5KuKJvqDFAK7Iaxffh9ZeF45atlMqTlEViJ07REkohps3l8wZzT7di01bmjYp55K84o7TjLgaCchKjM%2F9eYp2I63zUg3qN29L2FVZa677ECYrLA8bt78%2BePsqt%2B%2FPkA1Vp5devVOEEyYaDerbksvRBvaqQySFovsmXqMowjOMW37uWr3FPqBMPKIx8IGOqUBwl9Nep4AT8xf%2FYul%2F4ytnXSynSQcjuVosCn%2B7dUMNLrWFbZqET5LZxuW7p2OrkF02hQuHHjifni0ZLQR9UwDP%2FbzOZW9O3aj75cOtYpQ4dhoVWNTd94DgyAJDsfDlcMwyCme1rd7XWzMMj5pzaiJabSzS46que4ePvzhKODb0CO0mYayBYJTFU18Hgs8%2FCfHh4laO1GLKjxAACGxtuafDF%2Foc543&X-Amz-Signature=5a157f35bd098fd93b3a662d3c07856b7505e84944d7bd5bf4ef12938ec8ed0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAGQ33CZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3ysbTcbfXxcI9dOB6q6q3Jn2EHOfoMZfiCMwypb0k1AiEAmfdYZ0VdB3KEEmrLN80mgVS2ndk1Fwn3W6IVGkos7c0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJY%2FmmRIzuZq8Ds%2BJCrcA1LEywRLl01y%2F9EX1dYQKchHYlOzXZrXDCSN12hl%2BbZ9yKdhP2EEOmL69lkX7UQsWUmgGYOm9F7CNsy8UmF1PSPOxDr3cWCLtBNWhJmj8lemHD8P5CyzhrXzKammMFfte%2B2EoFj1m0HXMejdnmci4hfC1OCmQYUGzyVONGAvApY7s1GJ6F1PscpJhVhYYPK4SH2L3tk6KhvIubBcgGn2nOXp5uiF%2BHVRs%2BjkTxXL8EewUEx%2Bche6ulQNYyesPnxqyK4zpjHOuLCAbrLkdR7V1p3L5Feh%2B7cZ7WJNIL6zG20T8IbUXToUtTY%2F%2BBcb5w3W0jucsclzoIunoMnojf0xGhxGMrWv0BAQI%2FLFx2cN8TyjW33Qx9GFerG1V%2Bg2UnXk0R7tu%2FfJd2W9jXd75MsXSe%2Flfyyh2zDbRKnKHChrb4F3%2FbtJHIuhGLfl%2BnB9QNxQ15uP1Xka5KuKJvqDFAK7Iaxffh9ZeF45atlMqTlEViJ07REkohps3l8wZzT7di01bmjYp55K84o7TjLgaCchKjM%2F9eYp2I63zUg3qN29L2FVZa677ECYrLA8bt78%2BePsqt%2B%2FPkA1Vp5devVOEEyYaDerbksvRBvaqQySFovsmXqMowjOMW37uWr3FPqBMPKIx8IGOqUBwl9Nep4AT8xf%2FYul%2F4ytnXSynSQcjuVosCn%2B7dUMNLrWFbZqET5LZxuW7p2OrkF02hQuHHjifni0ZLQR9UwDP%2FbzOZW9O3aj75cOtYpQ4dhoVWNTd94DgyAJDsfDlcMwyCme1rd7XWzMMj5pzaiJabSzS46que4ePvzhKODb0CO0mYayBYJTFU18Hgs8%2FCfHh4laO1GLKjxAACGxtuafDF%2Foc543&X-Amz-Signature=0b3e1cdebb5352ed183950d21d5847b1eca4c3cc16a9440d5e5a82b127f10380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAGQ33CZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3ysbTcbfXxcI9dOB6q6q3Jn2EHOfoMZfiCMwypb0k1AiEAmfdYZ0VdB3KEEmrLN80mgVS2ndk1Fwn3W6IVGkos7c0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJY%2FmmRIzuZq8Ds%2BJCrcA1LEywRLl01y%2F9EX1dYQKchHYlOzXZrXDCSN12hl%2BbZ9yKdhP2EEOmL69lkX7UQsWUmgGYOm9F7CNsy8UmF1PSPOxDr3cWCLtBNWhJmj8lemHD8P5CyzhrXzKammMFfte%2B2EoFj1m0HXMejdnmci4hfC1OCmQYUGzyVONGAvApY7s1GJ6F1PscpJhVhYYPK4SH2L3tk6KhvIubBcgGn2nOXp5uiF%2BHVRs%2BjkTxXL8EewUEx%2Bche6ulQNYyesPnxqyK4zpjHOuLCAbrLkdR7V1p3L5Feh%2B7cZ7WJNIL6zG20T8IbUXToUtTY%2F%2BBcb5w3W0jucsclzoIunoMnojf0xGhxGMrWv0BAQI%2FLFx2cN8TyjW33Qx9GFerG1V%2Bg2UnXk0R7tu%2FfJd2W9jXd75MsXSe%2Flfyyh2zDbRKnKHChrb4F3%2FbtJHIuhGLfl%2BnB9QNxQ15uP1Xka5KuKJvqDFAK7Iaxffh9ZeF45atlMqTlEViJ07REkohps3l8wZzT7di01bmjYp55K84o7TjLgaCchKjM%2F9eYp2I63zUg3qN29L2FVZa677ECYrLA8bt78%2BePsqt%2B%2FPkA1Vp5devVOEEyYaDerbksvRBvaqQySFovsmXqMowjOMW37uWr3FPqBMPKIx8IGOqUBwl9Nep4AT8xf%2FYul%2F4ytnXSynSQcjuVosCn%2B7dUMNLrWFbZqET5LZxuW7p2OrkF02hQuHHjifni0ZLQR9UwDP%2FbzOZW9O3aj75cOtYpQ4dhoVWNTd94DgyAJDsfDlcMwyCme1rd7XWzMMj5pzaiJabSzS46que4ePvzhKODb0CO0mYayBYJTFU18Hgs8%2FCfHh4laO1GLKjxAACGxtuafDF%2Foc543&X-Amz-Signature=13d83121ff2370b361dd0fa37798861f5c0b95c8b60f3cc0a21ad740c0e99aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
