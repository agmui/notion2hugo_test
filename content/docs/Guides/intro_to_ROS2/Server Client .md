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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TSZ5AW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC9IaN%2Bu6%2BVxM%2FdXT1KWzlujVmFTvuR%2B%2FTi9SLhpTtzVgIgN9JJZiKJFG7AR%2F1YYuebMlmxYmyyNU1VqsgUgyXYjP8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf4jDP5umXhMGvHoSrcA0POi2tYAAIru4ek7nKtgYLAm2j0FZFJAWBuwZNMLt4Sjjp3XCm35jahzp4Go61Og14E38LxRQlSGJVUbCbRJI0%2Ff5FB5tgmK30ygCIX8QSQlU46Ju%2F0u5bM96D2kbpxzDmB8AfolzBSQ3w3DzzAjC8BTkcpfiBghNwvTjZ4bO7KCWJAvvI6ALwbd5X6oDISom6FwSHxzQzTxzj6R4ejE1pie%2B5Ybe0I31xQLeca%2BZygjLhWGIBdk4n5g6x70Z6bsdlgZTlk09fR%2Fy88HJPaXlJ6mjDqnF%2B9x8Jz6dx%2BtW4TRcX13HgQ0OToC1akX10mYGPgx5JTIIzF5nTwBgyFhuZmH8xglmXaa3maUNJj1eRcSgBEXNftCu1DxA24dapdFOyh3C33zib696oNICyG%2FH%2Bss3quQo07blB0e8Hu8AKIgWNHz8g%2Bvyhb61lN5T%2BrvEkPFWyDS2M5ziu69JL4A4uH5OdYdan9aHmAz5K0n928Fzck8QKsAl1teEFtuZsMWqS9OmrZlaS%2BKJNq2qutBT25F5tAnrCsyi%2BgvoBBXyHrh6vrFN5AOOLcl%2FZcR36rDze8JqSIKKlgpOn2dyTOTeVhlmXOxQZNOjGgCo2nWR8uxqK%2BoKQ%2BHkOH58UEMIGy0r0GOqUByTFU87xzKZN4utEUnXWpbC%2FRk5WzSfBjjJfeOVL6B%2Bb%2Brnm4u6H2eNMrFkOKBWnxuyyWZjUayrk21kvkZ2w90K0P1Xs0omB8GRcGFWrngV%2BDHHgxq503%2FYN53zOAW%2F554xbAEXvlOCWINobf5q%2Bo0FX4oy3UQAbXrm0JTPAXsUr%2F3pFbqy9SFX38a1bHcqYJaJhAzzCUHOapDdZyN1ibnztsf0qP&X-Amz-Signature=ccd1860ab8c1900ed5b552751509a2dc5105097ef4846c725ae35de4780e0072&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TSZ5AW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC9IaN%2Bu6%2BVxM%2FdXT1KWzlujVmFTvuR%2B%2FTi9SLhpTtzVgIgN9JJZiKJFG7AR%2F1YYuebMlmxYmyyNU1VqsgUgyXYjP8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf4jDP5umXhMGvHoSrcA0POi2tYAAIru4ek7nKtgYLAm2j0FZFJAWBuwZNMLt4Sjjp3XCm35jahzp4Go61Og14E38LxRQlSGJVUbCbRJI0%2Ff5FB5tgmK30ygCIX8QSQlU46Ju%2F0u5bM96D2kbpxzDmB8AfolzBSQ3w3DzzAjC8BTkcpfiBghNwvTjZ4bO7KCWJAvvI6ALwbd5X6oDISom6FwSHxzQzTxzj6R4ejE1pie%2B5Ybe0I31xQLeca%2BZygjLhWGIBdk4n5g6x70Z6bsdlgZTlk09fR%2Fy88HJPaXlJ6mjDqnF%2B9x8Jz6dx%2BtW4TRcX13HgQ0OToC1akX10mYGPgx5JTIIzF5nTwBgyFhuZmH8xglmXaa3maUNJj1eRcSgBEXNftCu1DxA24dapdFOyh3C33zib696oNICyG%2FH%2Bss3quQo07blB0e8Hu8AKIgWNHz8g%2Bvyhb61lN5T%2BrvEkPFWyDS2M5ziu69JL4A4uH5OdYdan9aHmAz5K0n928Fzck8QKsAl1teEFtuZsMWqS9OmrZlaS%2BKJNq2qutBT25F5tAnrCsyi%2BgvoBBXyHrh6vrFN5AOOLcl%2FZcR36rDze8JqSIKKlgpOn2dyTOTeVhlmXOxQZNOjGgCo2nWR8uxqK%2BoKQ%2BHkOH58UEMIGy0r0GOqUByTFU87xzKZN4utEUnXWpbC%2FRk5WzSfBjjJfeOVL6B%2Bb%2Brnm4u6H2eNMrFkOKBWnxuyyWZjUayrk21kvkZ2w90K0P1Xs0omB8GRcGFWrngV%2BDHHgxq503%2FYN53zOAW%2F554xbAEXvlOCWINobf5q%2Bo0FX4oy3UQAbXrm0JTPAXsUr%2F3pFbqy9SFX38a1bHcqYJaJhAzzCUHOapDdZyN1ibnztsf0qP&X-Amz-Signature=26d8e304d9344bb022659e89cd70589b0d29c65b023f3c1b404a36a165f1136d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TSZ5AW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC9IaN%2Bu6%2BVxM%2FdXT1KWzlujVmFTvuR%2B%2FTi9SLhpTtzVgIgN9JJZiKJFG7AR%2F1YYuebMlmxYmyyNU1VqsgUgyXYjP8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf4jDP5umXhMGvHoSrcA0POi2tYAAIru4ek7nKtgYLAm2j0FZFJAWBuwZNMLt4Sjjp3XCm35jahzp4Go61Og14E38LxRQlSGJVUbCbRJI0%2Ff5FB5tgmK30ygCIX8QSQlU46Ju%2F0u5bM96D2kbpxzDmB8AfolzBSQ3w3DzzAjC8BTkcpfiBghNwvTjZ4bO7KCWJAvvI6ALwbd5X6oDISom6FwSHxzQzTxzj6R4ejE1pie%2B5Ybe0I31xQLeca%2BZygjLhWGIBdk4n5g6x70Z6bsdlgZTlk09fR%2Fy88HJPaXlJ6mjDqnF%2B9x8Jz6dx%2BtW4TRcX13HgQ0OToC1akX10mYGPgx5JTIIzF5nTwBgyFhuZmH8xglmXaa3maUNJj1eRcSgBEXNftCu1DxA24dapdFOyh3C33zib696oNICyG%2FH%2Bss3quQo07blB0e8Hu8AKIgWNHz8g%2Bvyhb61lN5T%2BrvEkPFWyDS2M5ziu69JL4A4uH5OdYdan9aHmAz5K0n928Fzck8QKsAl1teEFtuZsMWqS9OmrZlaS%2BKJNq2qutBT25F5tAnrCsyi%2BgvoBBXyHrh6vrFN5AOOLcl%2FZcR36rDze8JqSIKKlgpOn2dyTOTeVhlmXOxQZNOjGgCo2nWR8uxqK%2BoKQ%2BHkOH58UEMIGy0r0GOqUByTFU87xzKZN4utEUnXWpbC%2FRk5WzSfBjjJfeOVL6B%2Bb%2Brnm4u6H2eNMrFkOKBWnxuyyWZjUayrk21kvkZ2w90K0P1Xs0omB8GRcGFWrngV%2BDHHgxq503%2FYN53zOAW%2F554xbAEXvlOCWINobf5q%2Bo0FX4oy3UQAbXrm0JTPAXsUr%2F3pFbqy9SFX38a1bHcqYJaJhAzzCUHOapDdZyN1ibnztsf0qP&X-Amz-Signature=47b76e84ad61408415508203250b78fe4db78e3137e8a0db32cc70c81186c5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TSZ5AW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC9IaN%2Bu6%2BVxM%2FdXT1KWzlujVmFTvuR%2B%2FTi9SLhpTtzVgIgN9JJZiKJFG7AR%2F1YYuebMlmxYmyyNU1VqsgUgyXYjP8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf4jDP5umXhMGvHoSrcA0POi2tYAAIru4ek7nKtgYLAm2j0FZFJAWBuwZNMLt4Sjjp3XCm35jahzp4Go61Og14E38LxRQlSGJVUbCbRJI0%2Ff5FB5tgmK30ygCIX8QSQlU46Ju%2F0u5bM96D2kbpxzDmB8AfolzBSQ3w3DzzAjC8BTkcpfiBghNwvTjZ4bO7KCWJAvvI6ALwbd5X6oDISom6FwSHxzQzTxzj6R4ejE1pie%2B5Ybe0I31xQLeca%2BZygjLhWGIBdk4n5g6x70Z6bsdlgZTlk09fR%2Fy88HJPaXlJ6mjDqnF%2B9x8Jz6dx%2BtW4TRcX13HgQ0OToC1akX10mYGPgx5JTIIzF5nTwBgyFhuZmH8xglmXaa3maUNJj1eRcSgBEXNftCu1DxA24dapdFOyh3C33zib696oNICyG%2FH%2Bss3quQo07blB0e8Hu8AKIgWNHz8g%2Bvyhb61lN5T%2BrvEkPFWyDS2M5ziu69JL4A4uH5OdYdan9aHmAz5K0n928Fzck8QKsAl1teEFtuZsMWqS9OmrZlaS%2BKJNq2qutBT25F5tAnrCsyi%2BgvoBBXyHrh6vrFN5AOOLcl%2FZcR36rDze8JqSIKKlgpOn2dyTOTeVhlmXOxQZNOjGgCo2nWR8uxqK%2BoKQ%2BHkOH58UEMIGy0r0GOqUByTFU87xzKZN4utEUnXWpbC%2FRk5WzSfBjjJfeOVL6B%2Bb%2Brnm4u6H2eNMrFkOKBWnxuyyWZjUayrk21kvkZ2w90K0P1Xs0omB8GRcGFWrngV%2BDHHgxq503%2FYN53zOAW%2F554xbAEXvlOCWINobf5q%2Bo0FX4oy3UQAbXrm0JTPAXsUr%2F3pFbqy9SFX38a1bHcqYJaJhAzzCUHOapDdZyN1ibnztsf0qP&X-Amz-Signature=cd23143601a6c1b07afc5fcc6de6a2fcc532b011140390e84cdd7618a3e996aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TSZ5AW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC9IaN%2Bu6%2BVxM%2FdXT1KWzlujVmFTvuR%2B%2FTi9SLhpTtzVgIgN9JJZiKJFG7AR%2F1YYuebMlmxYmyyNU1VqsgUgyXYjP8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf4jDP5umXhMGvHoSrcA0POi2tYAAIru4ek7nKtgYLAm2j0FZFJAWBuwZNMLt4Sjjp3XCm35jahzp4Go61Og14E38LxRQlSGJVUbCbRJI0%2Ff5FB5tgmK30ygCIX8QSQlU46Ju%2F0u5bM96D2kbpxzDmB8AfolzBSQ3w3DzzAjC8BTkcpfiBghNwvTjZ4bO7KCWJAvvI6ALwbd5X6oDISom6FwSHxzQzTxzj6R4ejE1pie%2B5Ybe0I31xQLeca%2BZygjLhWGIBdk4n5g6x70Z6bsdlgZTlk09fR%2Fy88HJPaXlJ6mjDqnF%2B9x8Jz6dx%2BtW4TRcX13HgQ0OToC1akX10mYGPgx5JTIIzF5nTwBgyFhuZmH8xglmXaa3maUNJj1eRcSgBEXNftCu1DxA24dapdFOyh3C33zib696oNICyG%2FH%2Bss3quQo07blB0e8Hu8AKIgWNHz8g%2Bvyhb61lN5T%2BrvEkPFWyDS2M5ziu69JL4A4uH5OdYdan9aHmAz5K0n928Fzck8QKsAl1teEFtuZsMWqS9OmrZlaS%2BKJNq2qutBT25F5tAnrCsyi%2BgvoBBXyHrh6vrFN5AOOLcl%2FZcR36rDze8JqSIKKlgpOn2dyTOTeVhlmXOxQZNOjGgCo2nWR8uxqK%2BoKQ%2BHkOH58UEMIGy0r0GOqUByTFU87xzKZN4utEUnXWpbC%2FRk5WzSfBjjJfeOVL6B%2Bb%2Brnm4u6H2eNMrFkOKBWnxuyyWZjUayrk21kvkZ2w90K0P1Xs0omB8GRcGFWrngV%2BDHHgxq503%2FYN53zOAW%2F554xbAEXvlOCWINobf5q%2Bo0FX4oy3UQAbXrm0JTPAXsUr%2F3pFbqy9SFX38a1bHcqYJaJhAzzCUHOapDdZyN1ibnztsf0qP&X-Amz-Signature=f2e4622d38ec747541fd7466d5e28a46a042c6a1d83ab8c2c3c38ab875cf65c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
