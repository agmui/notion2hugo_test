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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KYXFPM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDbZ%2BuK5CXoZnjH5JjSxuFIC6fGdm2CTPING3S02cR3WAiEAxAw6466PKtRHVLa2Uwu8IPYa1O%2B0rVymCSpfHBhKNBIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtOqCW1r1sERoOFiSrcAzW00UNE6YCSt2X7mNtt6qCMc9gl%2BTvFyhC0hOO6VXJpy1eOG4nVrTAOXBe%2F2vlnmXIbAdQ1YwdGvQluUHCBAyf6%2BMvMsfKA%2FoiEXZ8H3WY2ZrCNXiDDQMEsyJA25tQZPrZwopXYac0Q8f2tiFickH5ZNzS61EBk3h5By8%2FXq7e95%2BlOW6LTrVM5RD7BlFXkJcJYwJZBoT9sTg7XI9XDxNdmp%2FFJjyPHBg6pIKFlz7sAliE3RW%2FIdoRu9h4VBOyzLZkhHDVVhnlud4QaDP6X4JqqZyQqY7Np0DIUCJ3IkKdYuSLBaUtxOK6b%2BwbBraciKfVIgqJvHPjnSkvnYMaqTZm%2Bxk7B%2BArBFHsnjzhWpfsDJTT%2FgyGLKREHnAVvBtFBieTQyzELUeIMB7sc%2FVRQBIpfgSkp9p%2B3S2moVe3GisVkspVYyb%2FaMmjGIKjlCF5Dg7mjF37bpegyTntYNSBTMkecgLDhdt6kDL0kMMkEEhc8VxN3gH8aeOm214jFQXin3Ut%2Fl7b%2BBIRGDee%2FJ3qnTw2PGSvPv7OR6t6dN1ZZaJA%2BdFFu5SsqjZPUe2x5BnjhZjWzWttOY12eI8SbUAeRXura54rnC5qBFLKJ2oVn3WGIPRao1qZLvf%2FGHzwzMOC4q78GOqUBAWgDGLsJcnHDaguyCrXYJ%2Fw%2FHbOIhIaF45P996nV2Egty%2BoT2tys1KQihMRPhhHTi%2BQaWolPizGXdRE8jtz9R45w%2B0wEZmWKElUUrAF7g0Bg3sBB1oxwshU8cjfbjiY%2BHF5plh%2FFChthfvdbaEFiYi%2F6AKqTY3hy6TJEEczkYtxEhj%2FBtV9dRgMRRjkvv3gH2%2FRJNsW0f8XZZehlPmLJsY0gMAw%2B&X-Amz-Signature=4b3d98511046b6e29fe71ad49439bcce3a95e238e055c6eb487f739f7961124c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KYXFPM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDbZ%2BuK5CXoZnjH5JjSxuFIC6fGdm2CTPING3S02cR3WAiEAxAw6466PKtRHVLa2Uwu8IPYa1O%2B0rVymCSpfHBhKNBIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtOqCW1r1sERoOFiSrcAzW00UNE6YCSt2X7mNtt6qCMc9gl%2BTvFyhC0hOO6VXJpy1eOG4nVrTAOXBe%2F2vlnmXIbAdQ1YwdGvQluUHCBAyf6%2BMvMsfKA%2FoiEXZ8H3WY2ZrCNXiDDQMEsyJA25tQZPrZwopXYac0Q8f2tiFickH5ZNzS61EBk3h5By8%2FXq7e95%2BlOW6LTrVM5RD7BlFXkJcJYwJZBoT9sTg7XI9XDxNdmp%2FFJjyPHBg6pIKFlz7sAliE3RW%2FIdoRu9h4VBOyzLZkhHDVVhnlud4QaDP6X4JqqZyQqY7Np0DIUCJ3IkKdYuSLBaUtxOK6b%2BwbBraciKfVIgqJvHPjnSkvnYMaqTZm%2Bxk7B%2BArBFHsnjzhWpfsDJTT%2FgyGLKREHnAVvBtFBieTQyzELUeIMB7sc%2FVRQBIpfgSkp9p%2B3S2moVe3GisVkspVYyb%2FaMmjGIKjlCF5Dg7mjF37bpegyTntYNSBTMkecgLDhdt6kDL0kMMkEEhc8VxN3gH8aeOm214jFQXin3Ut%2Fl7b%2BBIRGDee%2FJ3qnTw2PGSvPv7OR6t6dN1ZZaJA%2BdFFu5SsqjZPUe2x5BnjhZjWzWttOY12eI8SbUAeRXura54rnC5qBFLKJ2oVn3WGIPRao1qZLvf%2FGHzwzMOC4q78GOqUBAWgDGLsJcnHDaguyCrXYJ%2Fw%2FHbOIhIaF45P996nV2Egty%2BoT2tys1KQihMRPhhHTi%2BQaWolPizGXdRE8jtz9R45w%2B0wEZmWKElUUrAF7g0Bg3sBB1oxwshU8cjfbjiY%2BHF5plh%2FFChthfvdbaEFiYi%2F6AKqTY3hy6TJEEczkYtxEhj%2FBtV9dRgMRRjkvv3gH2%2FRJNsW0f8XZZehlPmLJsY0gMAw%2B&X-Amz-Signature=9b117e552da9483293898fcf7a982f3c9b6a474ad196576cfdbd516df5d6825d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KYXFPM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDbZ%2BuK5CXoZnjH5JjSxuFIC6fGdm2CTPING3S02cR3WAiEAxAw6466PKtRHVLa2Uwu8IPYa1O%2B0rVymCSpfHBhKNBIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtOqCW1r1sERoOFiSrcAzW00UNE6YCSt2X7mNtt6qCMc9gl%2BTvFyhC0hOO6VXJpy1eOG4nVrTAOXBe%2F2vlnmXIbAdQ1YwdGvQluUHCBAyf6%2BMvMsfKA%2FoiEXZ8H3WY2ZrCNXiDDQMEsyJA25tQZPrZwopXYac0Q8f2tiFickH5ZNzS61EBk3h5By8%2FXq7e95%2BlOW6LTrVM5RD7BlFXkJcJYwJZBoT9sTg7XI9XDxNdmp%2FFJjyPHBg6pIKFlz7sAliE3RW%2FIdoRu9h4VBOyzLZkhHDVVhnlud4QaDP6X4JqqZyQqY7Np0DIUCJ3IkKdYuSLBaUtxOK6b%2BwbBraciKfVIgqJvHPjnSkvnYMaqTZm%2Bxk7B%2BArBFHsnjzhWpfsDJTT%2FgyGLKREHnAVvBtFBieTQyzELUeIMB7sc%2FVRQBIpfgSkp9p%2B3S2moVe3GisVkspVYyb%2FaMmjGIKjlCF5Dg7mjF37bpegyTntYNSBTMkecgLDhdt6kDL0kMMkEEhc8VxN3gH8aeOm214jFQXin3Ut%2Fl7b%2BBIRGDee%2FJ3qnTw2PGSvPv7OR6t6dN1ZZaJA%2BdFFu5SsqjZPUe2x5BnjhZjWzWttOY12eI8SbUAeRXura54rnC5qBFLKJ2oVn3WGIPRao1qZLvf%2FGHzwzMOC4q78GOqUBAWgDGLsJcnHDaguyCrXYJ%2Fw%2FHbOIhIaF45P996nV2Egty%2BoT2tys1KQihMRPhhHTi%2BQaWolPizGXdRE8jtz9R45w%2B0wEZmWKElUUrAF7g0Bg3sBB1oxwshU8cjfbjiY%2BHF5plh%2FFChthfvdbaEFiYi%2F6AKqTY3hy6TJEEczkYtxEhj%2FBtV9dRgMRRjkvv3gH2%2FRJNsW0f8XZZehlPmLJsY0gMAw%2B&X-Amz-Signature=9f2d34d9a561bf7c62c7c542697ff293f95f0e488b247178f28d1cb1aae94ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KYXFPM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDbZ%2BuK5CXoZnjH5JjSxuFIC6fGdm2CTPING3S02cR3WAiEAxAw6466PKtRHVLa2Uwu8IPYa1O%2B0rVymCSpfHBhKNBIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtOqCW1r1sERoOFiSrcAzW00UNE6YCSt2X7mNtt6qCMc9gl%2BTvFyhC0hOO6VXJpy1eOG4nVrTAOXBe%2F2vlnmXIbAdQ1YwdGvQluUHCBAyf6%2BMvMsfKA%2FoiEXZ8H3WY2ZrCNXiDDQMEsyJA25tQZPrZwopXYac0Q8f2tiFickH5ZNzS61EBk3h5By8%2FXq7e95%2BlOW6LTrVM5RD7BlFXkJcJYwJZBoT9sTg7XI9XDxNdmp%2FFJjyPHBg6pIKFlz7sAliE3RW%2FIdoRu9h4VBOyzLZkhHDVVhnlud4QaDP6X4JqqZyQqY7Np0DIUCJ3IkKdYuSLBaUtxOK6b%2BwbBraciKfVIgqJvHPjnSkvnYMaqTZm%2Bxk7B%2BArBFHsnjzhWpfsDJTT%2FgyGLKREHnAVvBtFBieTQyzELUeIMB7sc%2FVRQBIpfgSkp9p%2B3S2moVe3GisVkspVYyb%2FaMmjGIKjlCF5Dg7mjF37bpegyTntYNSBTMkecgLDhdt6kDL0kMMkEEhc8VxN3gH8aeOm214jFQXin3Ut%2Fl7b%2BBIRGDee%2FJ3qnTw2PGSvPv7OR6t6dN1ZZaJA%2BdFFu5SsqjZPUe2x5BnjhZjWzWttOY12eI8SbUAeRXura54rnC5qBFLKJ2oVn3WGIPRao1qZLvf%2FGHzwzMOC4q78GOqUBAWgDGLsJcnHDaguyCrXYJ%2Fw%2FHbOIhIaF45P996nV2Egty%2BoT2tys1KQihMRPhhHTi%2BQaWolPizGXdRE8jtz9R45w%2B0wEZmWKElUUrAF7g0Bg3sBB1oxwshU8cjfbjiY%2BHF5plh%2FFChthfvdbaEFiYi%2F6AKqTY3hy6TJEEczkYtxEhj%2FBtV9dRgMRRjkvv3gH2%2FRJNsW0f8XZZehlPmLJsY0gMAw%2B&X-Amz-Signature=5e629ba10c7b82e251977d9cddedfcc38efeeebf56198e62cc9cbea398062bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KYXFPM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDbZ%2BuK5CXoZnjH5JjSxuFIC6fGdm2CTPING3S02cR3WAiEAxAw6466PKtRHVLa2Uwu8IPYa1O%2B0rVymCSpfHBhKNBIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtOqCW1r1sERoOFiSrcAzW00UNE6YCSt2X7mNtt6qCMc9gl%2BTvFyhC0hOO6VXJpy1eOG4nVrTAOXBe%2F2vlnmXIbAdQ1YwdGvQluUHCBAyf6%2BMvMsfKA%2FoiEXZ8H3WY2ZrCNXiDDQMEsyJA25tQZPrZwopXYac0Q8f2tiFickH5ZNzS61EBk3h5By8%2FXq7e95%2BlOW6LTrVM5RD7BlFXkJcJYwJZBoT9sTg7XI9XDxNdmp%2FFJjyPHBg6pIKFlz7sAliE3RW%2FIdoRu9h4VBOyzLZkhHDVVhnlud4QaDP6X4JqqZyQqY7Np0DIUCJ3IkKdYuSLBaUtxOK6b%2BwbBraciKfVIgqJvHPjnSkvnYMaqTZm%2Bxk7B%2BArBFHsnjzhWpfsDJTT%2FgyGLKREHnAVvBtFBieTQyzELUeIMB7sc%2FVRQBIpfgSkp9p%2B3S2moVe3GisVkspVYyb%2FaMmjGIKjlCF5Dg7mjF37bpegyTntYNSBTMkecgLDhdt6kDL0kMMkEEhc8VxN3gH8aeOm214jFQXin3Ut%2Fl7b%2BBIRGDee%2FJ3qnTw2PGSvPv7OR6t6dN1ZZaJA%2BdFFu5SsqjZPUe2x5BnjhZjWzWttOY12eI8SbUAeRXura54rnC5qBFLKJ2oVn3WGIPRao1qZLvf%2FGHzwzMOC4q78GOqUBAWgDGLsJcnHDaguyCrXYJ%2Fw%2FHbOIhIaF45P996nV2Egty%2BoT2tys1KQihMRPhhHTi%2BQaWolPizGXdRE8jtz9R45w%2B0wEZmWKElUUrAF7g0Bg3sBB1oxwshU8cjfbjiY%2BHF5plh%2FFChthfvdbaEFiYi%2F6AKqTY3hy6TJEEczkYtxEhj%2FBtV9dRgMRRjkvv3gH2%2FRJNsW0f8XZZehlPmLJsY0gMAw%2B&X-Amz-Signature=6a7ccf93f4e10a920d0b7ec1a165d4cfc86b26fba5feaf7e188d5ab1f8530bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
