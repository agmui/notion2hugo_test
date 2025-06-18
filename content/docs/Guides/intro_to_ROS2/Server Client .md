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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWYNNUV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAF99o6WC26IuqQHgceTeiKIIcYSey%2B0lRh1aUB47rJgIgf7dCb43Gea5x%2F5%2BZCnTa84j7DRoff13t4akxT09QEWYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoiqdM7BG49vxHQpCrcA%2FgV6mm%2FJCIuVj4qLy%2FxO90Mp%2FwWGLuE6ncmaMKY54rD1rEw%2Bbkhi%2BWiqPaAv%2BJjx7IikkH9mfwFGpCt07e7FJpFDW53I50Pl86yqDJeQn2cq6rvrSHBSUQWIgm1hs61fPjPB0zdsptO%2BtW81yrfC93xdDaTWZhVyP922PKzCujIjxZtXKv4M%2FoR3tAe%2FVxEAaiBRF5iQWnuvcSuT59eZ9IM%2FROrgMR8RdyDBTD3UGEUuih4EYFju9BTHhGwiC9HwQrl%2Ff%2FIDjvt93j0R5%2BER23mdupKSlWhVaBwOFd7bApTrl%2FkjMIN6SvUzP33TB%2FJ1lrVStx3AUDsX%2FWhimcPE2ynAYjUXRHhJ%2FXlwWD1jFp1Gf%2FMQuDefk7MZ5NxGsvaBTUZ0mX2MWKQTHj28p7WFfxbrVTHDdEsVoE1GZqDkeBB6PwfNemUC65GsIQGrvzQe945O4fkLvcfpPmND0SHuKm4RSxeTDYuC6dl%2FKi5boipdZtG4l9vC%2BhY3jGaJTxUvhvdXz5R1TLjWbhEyCo%2F1KumNhIq%2FGlcwEvfzW5ljz6mE2ytBmRgVbW0d3H8%2FfvGDdowPcmnPhcIbWJPiqbZxizT6EhVTQ%2BUoE8uPIut96z8uffOSE7cBLZbi4GTMNfOyMIGOqUBc4IcRnTLBSywP3IjF02KwOGuL2THDsVjGee%2BkwDOLDemRQfHrGtoJpt4kF9aK5h1d4Id%2BeytlAy%2B31cFtd9O8jq%2FhoRd8paKQGcUgXwt%2BoJSM9%2BgpuNqVu1Ok9d%2FlaYZSND4hRq9B5N7YbzcNPIQZVuOtHs%2BljdOc1WSe8pz1ZREvC8ozAJcg%2ByX0V%2Fum0fnnodPULt2sEpI%2FYnjCloGeS7ax8rE&X-Amz-Signature=07258becd5ce0f4a67309122092fd8931549471da46fd8d43e86de46b6015921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWYNNUV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAF99o6WC26IuqQHgceTeiKIIcYSey%2B0lRh1aUB47rJgIgf7dCb43Gea5x%2F5%2BZCnTa84j7DRoff13t4akxT09QEWYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoiqdM7BG49vxHQpCrcA%2FgV6mm%2FJCIuVj4qLy%2FxO90Mp%2FwWGLuE6ncmaMKY54rD1rEw%2Bbkhi%2BWiqPaAv%2BJjx7IikkH9mfwFGpCt07e7FJpFDW53I50Pl86yqDJeQn2cq6rvrSHBSUQWIgm1hs61fPjPB0zdsptO%2BtW81yrfC93xdDaTWZhVyP922PKzCujIjxZtXKv4M%2FoR3tAe%2FVxEAaiBRF5iQWnuvcSuT59eZ9IM%2FROrgMR8RdyDBTD3UGEUuih4EYFju9BTHhGwiC9HwQrl%2Ff%2FIDjvt93j0R5%2BER23mdupKSlWhVaBwOFd7bApTrl%2FkjMIN6SvUzP33TB%2FJ1lrVStx3AUDsX%2FWhimcPE2ynAYjUXRHhJ%2FXlwWD1jFp1Gf%2FMQuDefk7MZ5NxGsvaBTUZ0mX2MWKQTHj28p7WFfxbrVTHDdEsVoE1GZqDkeBB6PwfNemUC65GsIQGrvzQe945O4fkLvcfpPmND0SHuKm4RSxeTDYuC6dl%2FKi5boipdZtG4l9vC%2BhY3jGaJTxUvhvdXz5R1TLjWbhEyCo%2F1KumNhIq%2FGlcwEvfzW5ljz6mE2ytBmRgVbW0d3H8%2FfvGDdowPcmnPhcIbWJPiqbZxizT6EhVTQ%2BUoE8uPIut96z8uffOSE7cBLZbi4GTMNfOyMIGOqUBc4IcRnTLBSywP3IjF02KwOGuL2THDsVjGee%2BkwDOLDemRQfHrGtoJpt4kF9aK5h1d4Id%2BeytlAy%2B31cFtd9O8jq%2FhoRd8paKQGcUgXwt%2BoJSM9%2BgpuNqVu1Ok9d%2FlaYZSND4hRq9B5N7YbzcNPIQZVuOtHs%2BljdOc1WSe8pz1ZREvC8ozAJcg%2ByX0V%2Fum0fnnodPULt2sEpI%2FYnjCloGeS7ax8rE&X-Amz-Signature=04a9eb05a480a579e7c3f41d2e7affcb1d55af6c7dc357eb44ad77ab9c8cdbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWYNNUV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAF99o6WC26IuqQHgceTeiKIIcYSey%2B0lRh1aUB47rJgIgf7dCb43Gea5x%2F5%2BZCnTa84j7DRoff13t4akxT09QEWYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoiqdM7BG49vxHQpCrcA%2FgV6mm%2FJCIuVj4qLy%2FxO90Mp%2FwWGLuE6ncmaMKY54rD1rEw%2Bbkhi%2BWiqPaAv%2BJjx7IikkH9mfwFGpCt07e7FJpFDW53I50Pl86yqDJeQn2cq6rvrSHBSUQWIgm1hs61fPjPB0zdsptO%2BtW81yrfC93xdDaTWZhVyP922PKzCujIjxZtXKv4M%2FoR3tAe%2FVxEAaiBRF5iQWnuvcSuT59eZ9IM%2FROrgMR8RdyDBTD3UGEUuih4EYFju9BTHhGwiC9HwQrl%2Ff%2FIDjvt93j0R5%2BER23mdupKSlWhVaBwOFd7bApTrl%2FkjMIN6SvUzP33TB%2FJ1lrVStx3AUDsX%2FWhimcPE2ynAYjUXRHhJ%2FXlwWD1jFp1Gf%2FMQuDefk7MZ5NxGsvaBTUZ0mX2MWKQTHj28p7WFfxbrVTHDdEsVoE1GZqDkeBB6PwfNemUC65GsIQGrvzQe945O4fkLvcfpPmND0SHuKm4RSxeTDYuC6dl%2FKi5boipdZtG4l9vC%2BhY3jGaJTxUvhvdXz5R1TLjWbhEyCo%2F1KumNhIq%2FGlcwEvfzW5ljz6mE2ytBmRgVbW0d3H8%2FfvGDdowPcmnPhcIbWJPiqbZxizT6EhVTQ%2BUoE8uPIut96z8uffOSE7cBLZbi4GTMNfOyMIGOqUBc4IcRnTLBSywP3IjF02KwOGuL2THDsVjGee%2BkwDOLDemRQfHrGtoJpt4kF9aK5h1d4Id%2BeytlAy%2B31cFtd9O8jq%2FhoRd8paKQGcUgXwt%2BoJSM9%2BgpuNqVu1Ok9d%2FlaYZSND4hRq9B5N7YbzcNPIQZVuOtHs%2BljdOc1WSe8pz1ZREvC8ozAJcg%2ByX0V%2Fum0fnnodPULt2sEpI%2FYnjCloGeS7ax8rE&X-Amz-Signature=4275b9ea3db7cd78453ea42b7bc1057d161a436a22af09f603864ec20548b0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWYNNUV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAF99o6WC26IuqQHgceTeiKIIcYSey%2B0lRh1aUB47rJgIgf7dCb43Gea5x%2F5%2BZCnTa84j7DRoff13t4akxT09QEWYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoiqdM7BG49vxHQpCrcA%2FgV6mm%2FJCIuVj4qLy%2FxO90Mp%2FwWGLuE6ncmaMKY54rD1rEw%2Bbkhi%2BWiqPaAv%2BJjx7IikkH9mfwFGpCt07e7FJpFDW53I50Pl86yqDJeQn2cq6rvrSHBSUQWIgm1hs61fPjPB0zdsptO%2BtW81yrfC93xdDaTWZhVyP922PKzCujIjxZtXKv4M%2FoR3tAe%2FVxEAaiBRF5iQWnuvcSuT59eZ9IM%2FROrgMR8RdyDBTD3UGEUuih4EYFju9BTHhGwiC9HwQrl%2Ff%2FIDjvt93j0R5%2BER23mdupKSlWhVaBwOFd7bApTrl%2FkjMIN6SvUzP33TB%2FJ1lrVStx3AUDsX%2FWhimcPE2ynAYjUXRHhJ%2FXlwWD1jFp1Gf%2FMQuDefk7MZ5NxGsvaBTUZ0mX2MWKQTHj28p7WFfxbrVTHDdEsVoE1GZqDkeBB6PwfNemUC65GsIQGrvzQe945O4fkLvcfpPmND0SHuKm4RSxeTDYuC6dl%2FKi5boipdZtG4l9vC%2BhY3jGaJTxUvhvdXz5R1TLjWbhEyCo%2F1KumNhIq%2FGlcwEvfzW5ljz6mE2ytBmRgVbW0d3H8%2FfvGDdowPcmnPhcIbWJPiqbZxizT6EhVTQ%2BUoE8uPIut96z8uffOSE7cBLZbi4GTMNfOyMIGOqUBc4IcRnTLBSywP3IjF02KwOGuL2THDsVjGee%2BkwDOLDemRQfHrGtoJpt4kF9aK5h1d4Id%2BeytlAy%2B31cFtd9O8jq%2FhoRd8paKQGcUgXwt%2BoJSM9%2BgpuNqVu1Ok9d%2FlaYZSND4hRq9B5N7YbzcNPIQZVuOtHs%2BljdOc1WSe8pz1ZREvC8ozAJcg%2ByX0V%2Fum0fnnodPULt2sEpI%2FYnjCloGeS7ax8rE&X-Amz-Signature=f4099891479d747d54ee05c9250756ecf114fb0905f385d11cf0f52aa1c0a003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWYNNUV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAF99o6WC26IuqQHgceTeiKIIcYSey%2B0lRh1aUB47rJgIgf7dCb43Gea5x%2F5%2BZCnTa84j7DRoff13t4akxT09QEWYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoiqdM7BG49vxHQpCrcA%2FgV6mm%2FJCIuVj4qLy%2FxO90Mp%2FwWGLuE6ncmaMKY54rD1rEw%2Bbkhi%2BWiqPaAv%2BJjx7IikkH9mfwFGpCt07e7FJpFDW53I50Pl86yqDJeQn2cq6rvrSHBSUQWIgm1hs61fPjPB0zdsptO%2BtW81yrfC93xdDaTWZhVyP922PKzCujIjxZtXKv4M%2FoR3tAe%2FVxEAaiBRF5iQWnuvcSuT59eZ9IM%2FROrgMR8RdyDBTD3UGEUuih4EYFju9BTHhGwiC9HwQrl%2Ff%2FIDjvt93j0R5%2BER23mdupKSlWhVaBwOFd7bApTrl%2FkjMIN6SvUzP33TB%2FJ1lrVStx3AUDsX%2FWhimcPE2ynAYjUXRHhJ%2FXlwWD1jFp1Gf%2FMQuDefk7MZ5NxGsvaBTUZ0mX2MWKQTHj28p7WFfxbrVTHDdEsVoE1GZqDkeBB6PwfNemUC65GsIQGrvzQe945O4fkLvcfpPmND0SHuKm4RSxeTDYuC6dl%2FKi5boipdZtG4l9vC%2BhY3jGaJTxUvhvdXz5R1TLjWbhEyCo%2F1KumNhIq%2FGlcwEvfzW5ljz6mE2ytBmRgVbW0d3H8%2FfvGDdowPcmnPhcIbWJPiqbZxizT6EhVTQ%2BUoE8uPIut96z8uffOSE7cBLZbi4GTMNfOyMIGOqUBc4IcRnTLBSywP3IjF02KwOGuL2THDsVjGee%2BkwDOLDemRQfHrGtoJpt4kF9aK5h1d4Id%2BeytlAy%2B31cFtd9O8jq%2FhoRd8paKQGcUgXwt%2BoJSM9%2BgpuNqVu1Ok9d%2FlaYZSND4hRq9B5N7YbzcNPIQZVuOtHs%2BljdOc1WSe8pz1ZREvC8ozAJcg%2ByX0V%2Fum0fnnodPULt2sEpI%2FYnjCloGeS7ax8rE&X-Amz-Signature=be91c7293feb18fbc9540557034209405918d72b1912de25c33f37b7cba021c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
