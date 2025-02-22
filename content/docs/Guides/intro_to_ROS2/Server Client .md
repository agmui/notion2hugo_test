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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7J7JQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6iS6X1Dv1YxnMS5xig%2BZYZQDyQNe1Amlcb%2FwR1P4HTAiEAx3z7zLfj6W9%2FZ5YDsOm77H3rMYpakGH15%2FTABbuToMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK32UO1BFv56YbqTJyrcAwIZDLTfTRD5LbuUAm4Z9%2B%2BrV9n6u%2Bp1UjYZVvEIsFSUAqFtRUPNfDo6sOgf0HiiXBhZ4qrb80%2FXIaafwi68Z8O3uccoA6msE1W4PhXimtkdW%2BQ%2FaHBgzuk12nMgM3FE51w%2B2MhQPqX%2Bf4gzIRchF%2BtsRTfFO7NE6Yg5Kb6GnfQjUf%2FMYf3xaIarM%2BCGNZTsnihkWmS9PmuNlldEF4e6cjv%2BwkS6QWWgrUQ6CIygdElLi5Jb5aZLZTGKLTpEyRSqmVPRv%2FmtRMuxlIbQ%2FJhhSBuuELHb6nYx5kTZJV4vyWBa5s677dPiI5YiPCfECfuy2%2FztSsUk1MsstYPG8FXujBw55EXBeC541sIGWkdW96xQySrfTO1eFnPUVba%2BUpLZa04JaynN12chsKzX8bxUzExEEENK5UClkyX29XIFzhdm4IXOzuVdy6%2B1F6b%2B%2BSkq77KH0TFoAQiV4XgVU3Oqz6LcjtJFUOUtpcnrKkVzduvNzIgL370WnraYuIw17kkvbFZUGieKZH8pinz%2BFtT3mVGup2CYeWSHrnZ2euFYJpcj6l%2Bw%2BIpDJDhoR7TZarCvlnBcO7BLTk3XU2nXJv%2F2TISTAspJbPLKnBzzE7DL0WwpAG3Nv7nrH3XpYVA9MM7H5b0GOqUBngoUQVLtX4ld7K1vwnpznUu6zp2qpawHlBSAqjX0s66Vu2Xxy2xrkskzxOzY27jC9j%2Fo5pvUgaXdttATdrQZgUYqCL4oU3uZSLaGvfXPwVaUms%2F9qEBxaqRM0IlNdP7v7IH06Cpc%2BztpvGAibZQgTP%2FSkfWe2p6OhnJJBj5ul6Rj1MBoHb3jeiZqCg9C3O%2BhnnjXm%2BX59qxCfYSoMP8vthRGM1Mp&X-Amz-Signature=5ba748eca290f7a1b858620653623c8a0eb878b50489e871080b5784d306ab6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7J7JQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6iS6X1Dv1YxnMS5xig%2BZYZQDyQNe1Amlcb%2FwR1P4HTAiEAx3z7zLfj6W9%2FZ5YDsOm77H3rMYpakGH15%2FTABbuToMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK32UO1BFv56YbqTJyrcAwIZDLTfTRD5LbuUAm4Z9%2B%2BrV9n6u%2Bp1UjYZVvEIsFSUAqFtRUPNfDo6sOgf0HiiXBhZ4qrb80%2FXIaafwi68Z8O3uccoA6msE1W4PhXimtkdW%2BQ%2FaHBgzuk12nMgM3FE51w%2B2MhQPqX%2Bf4gzIRchF%2BtsRTfFO7NE6Yg5Kb6GnfQjUf%2FMYf3xaIarM%2BCGNZTsnihkWmS9PmuNlldEF4e6cjv%2BwkS6QWWgrUQ6CIygdElLi5Jb5aZLZTGKLTpEyRSqmVPRv%2FmtRMuxlIbQ%2FJhhSBuuELHb6nYx5kTZJV4vyWBa5s677dPiI5YiPCfECfuy2%2FztSsUk1MsstYPG8FXujBw55EXBeC541sIGWkdW96xQySrfTO1eFnPUVba%2BUpLZa04JaynN12chsKzX8bxUzExEEENK5UClkyX29XIFzhdm4IXOzuVdy6%2B1F6b%2B%2BSkq77KH0TFoAQiV4XgVU3Oqz6LcjtJFUOUtpcnrKkVzduvNzIgL370WnraYuIw17kkvbFZUGieKZH8pinz%2BFtT3mVGup2CYeWSHrnZ2euFYJpcj6l%2Bw%2BIpDJDhoR7TZarCvlnBcO7BLTk3XU2nXJv%2F2TISTAspJbPLKnBzzE7DL0WwpAG3Nv7nrH3XpYVA9MM7H5b0GOqUBngoUQVLtX4ld7K1vwnpznUu6zp2qpawHlBSAqjX0s66Vu2Xxy2xrkskzxOzY27jC9j%2Fo5pvUgaXdttATdrQZgUYqCL4oU3uZSLaGvfXPwVaUms%2F9qEBxaqRM0IlNdP7v7IH06Cpc%2BztpvGAibZQgTP%2FSkfWe2p6OhnJJBj5ul6Rj1MBoHb3jeiZqCg9C3O%2BhnnjXm%2BX59qxCfYSoMP8vthRGM1Mp&X-Amz-Signature=b5a26830576675f58f6de2117dbc0dd04c99d26b50ebf8b413d531ed85a236cb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7J7JQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6iS6X1Dv1YxnMS5xig%2BZYZQDyQNe1Amlcb%2FwR1P4HTAiEAx3z7zLfj6W9%2FZ5YDsOm77H3rMYpakGH15%2FTABbuToMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK32UO1BFv56YbqTJyrcAwIZDLTfTRD5LbuUAm4Z9%2B%2BrV9n6u%2Bp1UjYZVvEIsFSUAqFtRUPNfDo6sOgf0HiiXBhZ4qrb80%2FXIaafwi68Z8O3uccoA6msE1W4PhXimtkdW%2BQ%2FaHBgzuk12nMgM3FE51w%2B2MhQPqX%2Bf4gzIRchF%2BtsRTfFO7NE6Yg5Kb6GnfQjUf%2FMYf3xaIarM%2BCGNZTsnihkWmS9PmuNlldEF4e6cjv%2BwkS6QWWgrUQ6CIygdElLi5Jb5aZLZTGKLTpEyRSqmVPRv%2FmtRMuxlIbQ%2FJhhSBuuELHb6nYx5kTZJV4vyWBa5s677dPiI5YiPCfECfuy2%2FztSsUk1MsstYPG8FXujBw55EXBeC541sIGWkdW96xQySrfTO1eFnPUVba%2BUpLZa04JaynN12chsKzX8bxUzExEEENK5UClkyX29XIFzhdm4IXOzuVdy6%2B1F6b%2B%2BSkq77KH0TFoAQiV4XgVU3Oqz6LcjtJFUOUtpcnrKkVzduvNzIgL370WnraYuIw17kkvbFZUGieKZH8pinz%2BFtT3mVGup2CYeWSHrnZ2euFYJpcj6l%2Bw%2BIpDJDhoR7TZarCvlnBcO7BLTk3XU2nXJv%2F2TISTAspJbPLKnBzzE7DL0WwpAG3Nv7nrH3XpYVA9MM7H5b0GOqUBngoUQVLtX4ld7K1vwnpznUu6zp2qpawHlBSAqjX0s66Vu2Xxy2xrkskzxOzY27jC9j%2Fo5pvUgaXdttATdrQZgUYqCL4oU3uZSLaGvfXPwVaUms%2F9qEBxaqRM0IlNdP7v7IH06Cpc%2BztpvGAibZQgTP%2FSkfWe2p6OhnJJBj5ul6Rj1MBoHb3jeiZqCg9C3O%2BhnnjXm%2BX59qxCfYSoMP8vthRGM1Mp&X-Amz-Signature=6b0f4d38fc80ed3d080d1ad8c51483ab7fa4d660b32947f9b00780b5f2df16e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7J7JQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6iS6X1Dv1YxnMS5xig%2BZYZQDyQNe1Amlcb%2FwR1P4HTAiEAx3z7zLfj6W9%2FZ5YDsOm77H3rMYpakGH15%2FTABbuToMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK32UO1BFv56YbqTJyrcAwIZDLTfTRD5LbuUAm4Z9%2B%2BrV9n6u%2Bp1UjYZVvEIsFSUAqFtRUPNfDo6sOgf0HiiXBhZ4qrb80%2FXIaafwi68Z8O3uccoA6msE1W4PhXimtkdW%2BQ%2FaHBgzuk12nMgM3FE51w%2B2MhQPqX%2Bf4gzIRchF%2BtsRTfFO7NE6Yg5Kb6GnfQjUf%2FMYf3xaIarM%2BCGNZTsnihkWmS9PmuNlldEF4e6cjv%2BwkS6QWWgrUQ6CIygdElLi5Jb5aZLZTGKLTpEyRSqmVPRv%2FmtRMuxlIbQ%2FJhhSBuuELHb6nYx5kTZJV4vyWBa5s677dPiI5YiPCfECfuy2%2FztSsUk1MsstYPG8FXujBw55EXBeC541sIGWkdW96xQySrfTO1eFnPUVba%2BUpLZa04JaynN12chsKzX8bxUzExEEENK5UClkyX29XIFzhdm4IXOzuVdy6%2B1F6b%2B%2BSkq77KH0TFoAQiV4XgVU3Oqz6LcjtJFUOUtpcnrKkVzduvNzIgL370WnraYuIw17kkvbFZUGieKZH8pinz%2BFtT3mVGup2CYeWSHrnZ2euFYJpcj6l%2Bw%2BIpDJDhoR7TZarCvlnBcO7BLTk3XU2nXJv%2F2TISTAspJbPLKnBzzE7DL0WwpAG3Nv7nrH3XpYVA9MM7H5b0GOqUBngoUQVLtX4ld7K1vwnpznUu6zp2qpawHlBSAqjX0s66Vu2Xxy2xrkskzxOzY27jC9j%2Fo5pvUgaXdttATdrQZgUYqCL4oU3uZSLaGvfXPwVaUms%2F9qEBxaqRM0IlNdP7v7IH06Cpc%2BztpvGAibZQgTP%2FSkfWe2p6OhnJJBj5ul6Rj1MBoHb3jeiZqCg9C3O%2BhnnjXm%2BX59qxCfYSoMP8vthRGM1Mp&X-Amz-Signature=105d6ca211ae0d8f8d75315d8016a77482bcec7ca536c5a781163c29903e697d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7J7JQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6iS6X1Dv1YxnMS5xig%2BZYZQDyQNe1Amlcb%2FwR1P4HTAiEAx3z7zLfj6W9%2FZ5YDsOm77H3rMYpakGH15%2FTABbuToMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK32UO1BFv56YbqTJyrcAwIZDLTfTRD5LbuUAm4Z9%2B%2BrV9n6u%2Bp1UjYZVvEIsFSUAqFtRUPNfDo6sOgf0HiiXBhZ4qrb80%2FXIaafwi68Z8O3uccoA6msE1W4PhXimtkdW%2BQ%2FaHBgzuk12nMgM3FE51w%2B2MhQPqX%2Bf4gzIRchF%2BtsRTfFO7NE6Yg5Kb6GnfQjUf%2FMYf3xaIarM%2BCGNZTsnihkWmS9PmuNlldEF4e6cjv%2BwkS6QWWgrUQ6CIygdElLi5Jb5aZLZTGKLTpEyRSqmVPRv%2FmtRMuxlIbQ%2FJhhSBuuELHb6nYx5kTZJV4vyWBa5s677dPiI5YiPCfECfuy2%2FztSsUk1MsstYPG8FXujBw55EXBeC541sIGWkdW96xQySrfTO1eFnPUVba%2BUpLZa04JaynN12chsKzX8bxUzExEEENK5UClkyX29XIFzhdm4IXOzuVdy6%2B1F6b%2B%2BSkq77KH0TFoAQiV4XgVU3Oqz6LcjtJFUOUtpcnrKkVzduvNzIgL370WnraYuIw17kkvbFZUGieKZH8pinz%2BFtT3mVGup2CYeWSHrnZ2euFYJpcj6l%2Bw%2BIpDJDhoR7TZarCvlnBcO7BLTk3XU2nXJv%2F2TISTAspJbPLKnBzzE7DL0WwpAG3Nv7nrH3XpYVA9MM7H5b0GOqUBngoUQVLtX4ld7K1vwnpznUu6zp2qpawHlBSAqjX0s66Vu2Xxy2xrkskzxOzY27jC9j%2Fo5pvUgaXdttATdrQZgUYqCL4oU3uZSLaGvfXPwVaUms%2F9qEBxaqRM0IlNdP7v7IH06Cpc%2BztpvGAibZQgTP%2FSkfWe2p6OhnJJBj5ul6Rj1MBoHb3jeiZqCg9C3O%2BhnnjXm%2BX59qxCfYSoMP8vthRGM1Mp&X-Amz-Signature=1e90b54404638aea49d9765dded0a52b51cfab499b7cd99e1c50ea6d0674c487&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
