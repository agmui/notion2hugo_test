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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTM6MJXT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDwC641kHcmYxIXer5UOGuQ9EYiQvh5rM76bhX8QPy5NQIgUFRYfbe5NKsNY1ajmK1YPf1uasmTPwrV2sXeRhugxdYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHl7r%2BsIXmzZ0dwECrcAyw7oJqHX7n6zu%2B%2FIHGlc6S8EFPlrHHAfTs8wqxNGvqDIMA7INx0NtAx9NNXsS9lkLlfLjb7WOiHXmEe9pxa051hdxo4L36jj6BuJT0VUHOmf57yQIegn0dth6IzHFHUMcc316RVnuMyI3vd6PQOs1BBIGIom%2B7wrFZ9tm%2B8%2FVZnEIF3lsNRg0TSqTWHemgQ7ydC4wMp8pVTt0dC%2FyOdFKP0rr6n2wTFk45pihdaw07aMhLAdNdbOxqEKhbJYu6nMpJS5hJZwCFZdf%2BgVL2F2xVYuePNjDte%2BNKBGw2uF6B0CxjiPyubSZgOauwYxB%2BOz8v1ueQGw1sJ7gAxPhoVTUrVeEi2aQrMEenKpB3utfRxpfcM5VHt1XLs%2F%2F8GbRgNv2qrJSJC7BXSUPQLhv7XXJ7S2Fe9gcz4Oi0w5A0bVPNyO8xCetaqqHFpRoPURBl3yta2a99qo3r0X0fhbPuNiAGOMlTJ4d6E3f8jGIu%2F%2FOKTeQ0icvGm52QgGngybIKpa9pAZUT59LVj%2BtR6LhDl1fKLlk3YVMAOnGN4pLixZ7wfD1bdx54cbyW0DwoyqXxnXa%2BnGp76kq6Md3goCWXL%2FZcwv4u4N6iBmYIpyAM7MNV7WnpaGOGgeWWVJDQmMKOuq8IGOqUBYPbp9N3XSxRc8tGv6%2Fk%2FWV0azdqxUdGP89Rq6hYE3IbqerVuc7vJdu3RZBSmlsjolEMZqL0HKfV2NGdO9ZTsbLnBcEROPe57w9fh1y7ZdEP0mjEvsTFBwXPE7jaeRpWxnF7T%2ByguTh6GqD0zCwHgU7jD%2FhsRy00nG6Lj7tthVbxAwkcfQ0xBn%2B9rzlf5MjF1z7RBytiFdYB9see65bOOkPa11FcI&X-Amz-Signature=4ae80156cc5d57457b78272b23ca3e3811ca85fdf876c21efad7688c3d704405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTM6MJXT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDwC641kHcmYxIXer5UOGuQ9EYiQvh5rM76bhX8QPy5NQIgUFRYfbe5NKsNY1ajmK1YPf1uasmTPwrV2sXeRhugxdYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHl7r%2BsIXmzZ0dwECrcAyw7oJqHX7n6zu%2B%2FIHGlc6S8EFPlrHHAfTs8wqxNGvqDIMA7INx0NtAx9NNXsS9lkLlfLjb7WOiHXmEe9pxa051hdxo4L36jj6BuJT0VUHOmf57yQIegn0dth6IzHFHUMcc316RVnuMyI3vd6PQOs1BBIGIom%2B7wrFZ9tm%2B8%2FVZnEIF3lsNRg0TSqTWHemgQ7ydC4wMp8pVTt0dC%2FyOdFKP0rr6n2wTFk45pihdaw07aMhLAdNdbOxqEKhbJYu6nMpJS5hJZwCFZdf%2BgVL2F2xVYuePNjDte%2BNKBGw2uF6B0CxjiPyubSZgOauwYxB%2BOz8v1ueQGw1sJ7gAxPhoVTUrVeEi2aQrMEenKpB3utfRxpfcM5VHt1XLs%2F%2F8GbRgNv2qrJSJC7BXSUPQLhv7XXJ7S2Fe9gcz4Oi0w5A0bVPNyO8xCetaqqHFpRoPURBl3yta2a99qo3r0X0fhbPuNiAGOMlTJ4d6E3f8jGIu%2F%2FOKTeQ0icvGm52QgGngybIKpa9pAZUT59LVj%2BtR6LhDl1fKLlk3YVMAOnGN4pLixZ7wfD1bdx54cbyW0DwoyqXxnXa%2BnGp76kq6Md3goCWXL%2FZcwv4u4N6iBmYIpyAM7MNV7WnpaGOGgeWWVJDQmMKOuq8IGOqUBYPbp9N3XSxRc8tGv6%2Fk%2FWV0azdqxUdGP89Rq6hYE3IbqerVuc7vJdu3RZBSmlsjolEMZqL0HKfV2NGdO9ZTsbLnBcEROPe57w9fh1y7ZdEP0mjEvsTFBwXPE7jaeRpWxnF7T%2ByguTh6GqD0zCwHgU7jD%2FhsRy00nG6Lj7tthVbxAwkcfQ0xBn%2B9rzlf5MjF1z7RBytiFdYB9see65bOOkPa11FcI&X-Amz-Signature=0371ab8ea4e780d83d848fcdada4f386a9b41f2c3fc32ffadde64e5ff03f9e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTM6MJXT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDwC641kHcmYxIXer5UOGuQ9EYiQvh5rM76bhX8QPy5NQIgUFRYfbe5NKsNY1ajmK1YPf1uasmTPwrV2sXeRhugxdYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHl7r%2BsIXmzZ0dwECrcAyw7oJqHX7n6zu%2B%2FIHGlc6S8EFPlrHHAfTs8wqxNGvqDIMA7INx0NtAx9NNXsS9lkLlfLjb7WOiHXmEe9pxa051hdxo4L36jj6BuJT0VUHOmf57yQIegn0dth6IzHFHUMcc316RVnuMyI3vd6PQOs1BBIGIom%2B7wrFZ9tm%2B8%2FVZnEIF3lsNRg0TSqTWHemgQ7ydC4wMp8pVTt0dC%2FyOdFKP0rr6n2wTFk45pihdaw07aMhLAdNdbOxqEKhbJYu6nMpJS5hJZwCFZdf%2BgVL2F2xVYuePNjDte%2BNKBGw2uF6B0CxjiPyubSZgOauwYxB%2BOz8v1ueQGw1sJ7gAxPhoVTUrVeEi2aQrMEenKpB3utfRxpfcM5VHt1XLs%2F%2F8GbRgNv2qrJSJC7BXSUPQLhv7XXJ7S2Fe9gcz4Oi0w5A0bVPNyO8xCetaqqHFpRoPURBl3yta2a99qo3r0X0fhbPuNiAGOMlTJ4d6E3f8jGIu%2F%2FOKTeQ0icvGm52QgGngybIKpa9pAZUT59LVj%2BtR6LhDl1fKLlk3YVMAOnGN4pLixZ7wfD1bdx54cbyW0DwoyqXxnXa%2BnGp76kq6Md3goCWXL%2FZcwv4u4N6iBmYIpyAM7MNV7WnpaGOGgeWWVJDQmMKOuq8IGOqUBYPbp9N3XSxRc8tGv6%2Fk%2FWV0azdqxUdGP89Rq6hYE3IbqerVuc7vJdu3RZBSmlsjolEMZqL0HKfV2NGdO9ZTsbLnBcEROPe57w9fh1y7ZdEP0mjEvsTFBwXPE7jaeRpWxnF7T%2ByguTh6GqD0zCwHgU7jD%2FhsRy00nG6Lj7tthVbxAwkcfQ0xBn%2B9rzlf5MjF1z7RBytiFdYB9see65bOOkPa11FcI&X-Amz-Signature=995ca71391efea737326cf7409835f609dbd9b420d1cfaf3fe06907d03c20226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTM6MJXT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDwC641kHcmYxIXer5UOGuQ9EYiQvh5rM76bhX8QPy5NQIgUFRYfbe5NKsNY1ajmK1YPf1uasmTPwrV2sXeRhugxdYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHl7r%2BsIXmzZ0dwECrcAyw7oJqHX7n6zu%2B%2FIHGlc6S8EFPlrHHAfTs8wqxNGvqDIMA7INx0NtAx9NNXsS9lkLlfLjb7WOiHXmEe9pxa051hdxo4L36jj6BuJT0VUHOmf57yQIegn0dth6IzHFHUMcc316RVnuMyI3vd6PQOs1BBIGIom%2B7wrFZ9tm%2B8%2FVZnEIF3lsNRg0TSqTWHemgQ7ydC4wMp8pVTt0dC%2FyOdFKP0rr6n2wTFk45pihdaw07aMhLAdNdbOxqEKhbJYu6nMpJS5hJZwCFZdf%2BgVL2F2xVYuePNjDte%2BNKBGw2uF6B0CxjiPyubSZgOauwYxB%2BOz8v1ueQGw1sJ7gAxPhoVTUrVeEi2aQrMEenKpB3utfRxpfcM5VHt1XLs%2F%2F8GbRgNv2qrJSJC7BXSUPQLhv7XXJ7S2Fe9gcz4Oi0w5A0bVPNyO8xCetaqqHFpRoPURBl3yta2a99qo3r0X0fhbPuNiAGOMlTJ4d6E3f8jGIu%2F%2FOKTeQ0icvGm52QgGngybIKpa9pAZUT59LVj%2BtR6LhDl1fKLlk3YVMAOnGN4pLixZ7wfD1bdx54cbyW0DwoyqXxnXa%2BnGp76kq6Md3goCWXL%2FZcwv4u4N6iBmYIpyAM7MNV7WnpaGOGgeWWVJDQmMKOuq8IGOqUBYPbp9N3XSxRc8tGv6%2Fk%2FWV0azdqxUdGP89Rq6hYE3IbqerVuc7vJdu3RZBSmlsjolEMZqL0HKfV2NGdO9ZTsbLnBcEROPe57w9fh1y7ZdEP0mjEvsTFBwXPE7jaeRpWxnF7T%2ByguTh6GqD0zCwHgU7jD%2FhsRy00nG6Lj7tthVbxAwkcfQ0xBn%2B9rzlf5MjF1z7RBytiFdYB9see65bOOkPa11FcI&X-Amz-Signature=fce5d7014a36f61a1613457aba0d1ff129038c78d1fd503948c23f4c6fc87235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTM6MJXT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDwC641kHcmYxIXer5UOGuQ9EYiQvh5rM76bhX8QPy5NQIgUFRYfbe5NKsNY1ajmK1YPf1uasmTPwrV2sXeRhugxdYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHl7r%2BsIXmzZ0dwECrcAyw7oJqHX7n6zu%2B%2FIHGlc6S8EFPlrHHAfTs8wqxNGvqDIMA7INx0NtAx9NNXsS9lkLlfLjb7WOiHXmEe9pxa051hdxo4L36jj6BuJT0VUHOmf57yQIegn0dth6IzHFHUMcc316RVnuMyI3vd6PQOs1BBIGIom%2B7wrFZ9tm%2B8%2FVZnEIF3lsNRg0TSqTWHemgQ7ydC4wMp8pVTt0dC%2FyOdFKP0rr6n2wTFk45pihdaw07aMhLAdNdbOxqEKhbJYu6nMpJS5hJZwCFZdf%2BgVL2F2xVYuePNjDte%2BNKBGw2uF6B0CxjiPyubSZgOauwYxB%2BOz8v1ueQGw1sJ7gAxPhoVTUrVeEi2aQrMEenKpB3utfRxpfcM5VHt1XLs%2F%2F8GbRgNv2qrJSJC7BXSUPQLhv7XXJ7S2Fe9gcz4Oi0w5A0bVPNyO8xCetaqqHFpRoPURBl3yta2a99qo3r0X0fhbPuNiAGOMlTJ4d6E3f8jGIu%2F%2FOKTeQ0icvGm52QgGngybIKpa9pAZUT59LVj%2BtR6LhDl1fKLlk3YVMAOnGN4pLixZ7wfD1bdx54cbyW0DwoyqXxnXa%2BnGp76kq6Md3goCWXL%2FZcwv4u4N6iBmYIpyAM7MNV7WnpaGOGgeWWVJDQmMKOuq8IGOqUBYPbp9N3XSxRc8tGv6%2Fk%2FWV0azdqxUdGP89Rq6hYE3IbqerVuc7vJdu3RZBSmlsjolEMZqL0HKfV2NGdO9ZTsbLnBcEROPe57w9fh1y7ZdEP0mjEvsTFBwXPE7jaeRpWxnF7T%2ByguTh6GqD0zCwHgU7jD%2FhsRy00nG6Lj7tthVbxAwkcfQ0xBn%2B9rzlf5MjF1z7RBytiFdYB9see65bOOkPa11FcI&X-Amz-Signature=043161a4db3c444e29ee802a099c33b7b45c47f706158bbf373f209ea3d182ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
