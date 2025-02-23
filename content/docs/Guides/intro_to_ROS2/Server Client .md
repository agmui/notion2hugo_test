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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53BAHDD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaicYnYrKIC1DFu9gDOg6wIq69qN7tZfCPBXMW4%2FgVOwIhAPiA4WVVxtvlupUETQCPnexygsZOUsQXaPKgN%2F1xjE6%2BKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ7VF760TlCUbe0Qsq3AM9eEGTBy6LF5xBCEIJ6Hm%2FPUgJQVBSZfDBgpfLx1LxbH3%2Bu93hCm5d7mFm%2F9QGk%2Be6HnH8Ufr36qK8qV4EkwL0Ji57nY%2FWyz6UvB1acjrMFfj2LIir%2Bk7UUOQS4m8RI7O56Te8MvX7%2BVEO%2FMDJnmp7CaOg82PK5H0Y%2FDgSjxBNCivpGCr%2FL26Phho0QXs1wnCyACqDooQBbPbfdJl7UiOLRg9iup2GFIMlXrclV0E%2B3qhxGelwof6wkVxLIddUMUNeowbBFgcdfttaamp%2FHng0gDvb3H5%2BPf%2FP1lm31nR16puNJ9dKNPdMivW%2BAFfx01Uhs37tn0dm1srYR53A84zJhzjKdxWZQc8FSKDcZrT8klcH%2BFKUALdNKnLmsuT1pynBnstFmwlf%2F6M9BO0RLfllskZgD%2FgrwBVRgzdD7VI6kG2rXvViDQPOKTttzdzFA0rvyy4pDW7TRWgjFCB71SzXP1TZMxvrYgCONtCiIeVNGF%2BNRUOdIyXpt4it7dgpm8WTBQ78PevjqMOuBOz8YZwkqHvoahO4Ojyxpg6totf1r8G%2B5nUxIl2CLgNrRYWyvPt5VZdfz%2FbRMpgpYe%2Fy6EiTEgNy84VR%2B4BK33HOgZClKEeN5hc0qFx1hTAnuzDh2ey9BjqkAaGEih3oAvUDrsA72T8rAGElVf3VsueLtQN3l04vYkHQSvawOKlZySio92P%2B1cYWshHkboTtxV8JMtFF1veCD90VI67rAj1HhSj0ylSEdkY7MGFpFNQ0kC%2FTlJrGSc3edtUMiCZ0kEQFmPS%2Fw63Dkx1yK4b2k6rsXAYukwXEVidmstax2oEs04sy%2FAGQ6er6JSLpgHpyhKIPF%2BtHbXOw4E2Kzxik&X-Amz-Signature=7691dbfd098639a9d3fd16670e5cad1ea2239aa8b2b9485f73ec08433167966a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53BAHDD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaicYnYrKIC1DFu9gDOg6wIq69qN7tZfCPBXMW4%2FgVOwIhAPiA4WVVxtvlupUETQCPnexygsZOUsQXaPKgN%2F1xjE6%2BKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ7VF760TlCUbe0Qsq3AM9eEGTBy6LF5xBCEIJ6Hm%2FPUgJQVBSZfDBgpfLx1LxbH3%2Bu93hCm5d7mFm%2F9QGk%2Be6HnH8Ufr36qK8qV4EkwL0Ji57nY%2FWyz6UvB1acjrMFfj2LIir%2Bk7UUOQS4m8RI7O56Te8MvX7%2BVEO%2FMDJnmp7CaOg82PK5H0Y%2FDgSjxBNCivpGCr%2FL26Phho0QXs1wnCyACqDooQBbPbfdJl7UiOLRg9iup2GFIMlXrclV0E%2B3qhxGelwof6wkVxLIddUMUNeowbBFgcdfttaamp%2FHng0gDvb3H5%2BPf%2FP1lm31nR16puNJ9dKNPdMivW%2BAFfx01Uhs37tn0dm1srYR53A84zJhzjKdxWZQc8FSKDcZrT8klcH%2BFKUALdNKnLmsuT1pynBnstFmwlf%2F6M9BO0RLfllskZgD%2FgrwBVRgzdD7VI6kG2rXvViDQPOKTttzdzFA0rvyy4pDW7TRWgjFCB71SzXP1TZMxvrYgCONtCiIeVNGF%2BNRUOdIyXpt4it7dgpm8WTBQ78PevjqMOuBOz8YZwkqHvoahO4Ojyxpg6totf1r8G%2B5nUxIl2CLgNrRYWyvPt5VZdfz%2FbRMpgpYe%2Fy6EiTEgNy84VR%2B4BK33HOgZClKEeN5hc0qFx1hTAnuzDh2ey9BjqkAaGEih3oAvUDrsA72T8rAGElVf3VsueLtQN3l04vYkHQSvawOKlZySio92P%2B1cYWshHkboTtxV8JMtFF1veCD90VI67rAj1HhSj0ylSEdkY7MGFpFNQ0kC%2FTlJrGSc3edtUMiCZ0kEQFmPS%2Fw63Dkx1yK4b2k6rsXAYukwXEVidmstax2oEs04sy%2FAGQ6er6JSLpgHpyhKIPF%2BtHbXOw4E2Kzxik&X-Amz-Signature=88b0302f0948de8af821e4f658e0a438805c7bbc77db5b22612e0c813aece7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53BAHDD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaicYnYrKIC1DFu9gDOg6wIq69qN7tZfCPBXMW4%2FgVOwIhAPiA4WVVxtvlupUETQCPnexygsZOUsQXaPKgN%2F1xjE6%2BKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ7VF760TlCUbe0Qsq3AM9eEGTBy6LF5xBCEIJ6Hm%2FPUgJQVBSZfDBgpfLx1LxbH3%2Bu93hCm5d7mFm%2F9QGk%2Be6HnH8Ufr36qK8qV4EkwL0Ji57nY%2FWyz6UvB1acjrMFfj2LIir%2Bk7UUOQS4m8RI7O56Te8MvX7%2BVEO%2FMDJnmp7CaOg82PK5H0Y%2FDgSjxBNCivpGCr%2FL26Phho0QXs1wnCyACqDooQBbPbfdJl7UiOLRg9iup2GFIMlXrclV0E%2B3qhxGelwof6wkVxLIddUMUNeowbBFgcdfttaamp%2FHng0gDvb3H5%2BPf%2FP1lm31nR16puNJ9dKNPdMivW%2BAFfx01Uhs37tn0dm1srYR53A84zJhzjKdxWZQc8FSKDcZrT8klcH%2BFKUALdNKnLmsuT1pynBnstFmwlf%2F6M9BO0RLfllskZgD%2FgrwBVRgzdD7VI6kG2rXvViDQPOKTttzdzFA0rvyy4pDW7TRWgjFCB71SzXP1TZMxvrYgCONtCiIeVNGF%2BNRUOdIyXpt4it7dgpm8WTBQ78PevjqMOuBOz8YZwkqHvoahO4Ojyxpg6totf1r8G%2B5nUxIl2CLgNrRYWyvPt5VZdfz%2FbRMpgpYe%2Fy6EiTEgNy84VR%2B4BK33HOgZClKEeN5hc0qFx1hTAnuzDh2ey9BjqkAaGEih3oAvUDrsA72T8rAGElVf3VsueLtQN3l04vYkHQSvawOKlZySio92P%2B1cYWshHkboTtxV8JMtFF1veCD90VI67rAj1HhSj0ylSEdkY7MGFpFNQ0kC%2FTlJrGSc3edtUMiCZ0kEQFmPS%2Fw63Dkx1yK4b2k6rsXAYukwXEVidmstax2oEs04sy%2FAGQ6er6JSLpgHpyhKIPF%2BtHbXOw4E2Kzxik&X-Amz-Signature=e0869d10ac3e25a5f9ea80b3f9251a6cb22f6aedd6c8aba7941af4fde5ffff4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53BAHDD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaicYnYrKIC1DFu9gDOg6wIq69qN7tZfCPBXMW4%2FgVOwIhAPiA4WVVxtvlupUETQCPnexygsZOUsQXaPKgN%2F1xjE6%2BKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ7VF760TlCUbe0Qsq3AM9eEGTBy6LF5xBCEIJ6Hm%2FPUgJQVBSZfDBgpfLx1LxbH3%2Bu93hCm5d7mFm%2F9QGk%2Be6HnH8Ufr36qK8qV4EkwL0Ji57nY%2FWyz6UvB1acjrMFfj2LIir%2Bk7UUOQS4m8RI7O56Te8MvX7%2BVEO%2FMDJnmp7CaOg82PK5H0Y%2FDgSjxBNCivpGCr%2FL26Phho0QXs1wnCyACqDooQBbPbfdJl7UiOLRg9iup2GFIMlXrclV0E%2B3qhxGelwof6wkVxLIddUMUNeowbBFgcdfttaamp%2FHng0gDvb3H5%2BPf%2FP1lm31nR16puNJ9dKNPdMivW%2BAFfx01Uhs37tn0dm1srYR53A84zJhzjKdxWZQc8FSKDcZrT8klcH%2BFKUALdNKnLmsuT1pynBnstFmwlf%2F6M9BO0RLfllskZgD%2FgrwBVRgzdD7VI6kG2rXvViDQPOKTttzdzFA0rvyy4pDW7TRWgjFCB71SzXP1TZMxvrYgCONtCiIeVNGF%2BNRUOdIyXpt4it7dgpm8WTBQ78PevjqMOuBOz8YZwkqHvoahO4Ojyxpg6totf1r8G%2B5nUxIl2CLgNrRYWyvPt5VZdfz%2FbRMpgpYe%2Fy6EiTEgNy84VR%2B4BK33HOgZClKEeN5hc0qFx1hTAnuzDh2ey9BjqkAaGEih3oAvUDrsA72T8rAGElVf3VsueLtQN3l04vYkHQSvawOKlZySio92P%2B1cYWshHkboTtxV8JMtFF1veCD90VI67rAj1HhSj0ylSEdkY7MGFpFNQ0kC%2FTlJrGSc3edtUMiCZ0kEQFmPS%2Fw63Dkx1yK4b2k6rsXAYukwXEVidmstax2oEs04sy%2FAGQ6er6JSLpgHpyhKIPF%2BtHbXOw4E2Kzxik&X-Amz-Signature=6fd820fb6d3ae1977f0f3702e4db40b5738e8ebfb42d55afd0259f1ce91e79d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53BAHDD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaicYnYrKIC1DFu9gDOg6wIq69qN7tZfCPBXMW4%2FgVOwIhAPiA4WVVxtvlupUETQCPnexygsZOUsQXaPKgN%2F1xjE6%2BKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ7VF760TlCUbe0Qsq3AM9eEGTBy6LF5xBCEIJ6Hm%2FPUgJQVBSZfDBgpfLx1LxbH3%2Bu93hCm5d7mFm%2F9QGk%2Be6HnH8Ufr36qK8qV4EkwL0Ji57nY%2FWyz6UvB1acjrMFfj2LIir%2Bk7UUOQS4m8RI7O56Te8MvX7%2BVEO%2FMDJnmp7CaOg82PK5H0Y%2FDgSjxBNCivpGCr%2FL26Phho0QXs1wnCyACqDooQBbPbfdJl7UiOLRg9iup2GFIMlXrclV0E%2B3qhxGelwof6wkVxLIddUMUNeowbBFgcdfttaamp%2FHng0gDvb3H5%2BPf%2FP1lm31nR16puNJ9dKNPdMivW%2BAFfx01Uhs37tn0dm1srYR53A84zJhzjKdxWZQc8FSKDcZrT8klcH%2BFKUALdNKnLmsuT1pynBnstFmwlf%2F6M9BO0RLfllskZgD%2FgrwBVRgzdD7VI6kG2rXvViDQPOKTttzdzFA0rvyy4pDW7TRWgjFCB71SzXP1TZMxvrYgCONtCiIeVNGF%2BNRUOdIyXpt4it7dgpm8WTBQ78PevjqMOuBOz8YZwkqHvoahO4Ojyxpg6totf1r8G%2B5nUxIl2CLgNrRYWyvPt5VZdfz%2FbRMpgpYe%2Fy6EiTEgNy84VR%2B4BK33HOgZClKEeN5hc0qFx1hTAnuzDh2ey9BjqkAaGEih3oAvUDrsA72T8rAGElVf3VsueLtQN3l04vYkHQSvawOKlZySio92P%2B1cYWshHkboTtxV8JMtFF1veCD90VI67rAj1HhSj0ylSEdkY7MGFpFNQ0kC%2FTlJrGSc3edtUMiCZ0kEQFmPS%2Fw63Dkx1yK4b2k6rsXAYukwXEVidmstax2oEs04sy%2FAGQ6er6JSLpgHpyhKIPF%2BtHbXOw4E2Kzxik&X-Amz-Signature=48b8cd5dc2af401e0f65c09152f765863b5dbb9d63f32272f9c25f9b387b0708&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
