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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXECXPDM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBysEhuDGE%2FrEnKWM2N0ASQdVc3c0VGV5S8rABfUW1qUAiEA21VC9GQAaYcO0JrIsvl5IlM5%2BKbB0ZjcYJU16O2uycoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFfM%2BCAwgtRdbScdUSrcAxm6Tp96TWgR9axp3XYYmoCuzDXq%2BEA6Tl7GzW8vxRpey%2F9gMnqXk4qFl1z6kG4NWaud8sVTAXji1%2BEnCRt4KRbq6rRYJH%2BMAWaOvBWeVC0FTL9f18GZq%2FKM0eKF5LyCb7hdtVfOXcgaF%2BxrtgkG6ay6YDbt4c53scUCSWCkVq1kLyypbeqojUzNUTdXBOVkH%2BC7Kj9Ozyx5QePKTe5th37KrUIbqSmPWcKH%2BXzdXiw6tgZ8uX3waB7bPkGOPxZ6n0niVb5n8PkWU4g%2BWTVqMNTIMs1QIX7Fjw6W%2F1Y1OT92ze%2FDlZqR6EANl2IJoiDdF7w9ZEvDXKUhflaTFQZJ3LGjcNaM4KzIdl1VP%2FFIKWnUfRKt0PwQXdRfy%2BGxNlEE8RvJY%2FYL97vZjzRRtVoX74mDUsu70hB32B0cBhURJahFsf%2FiqrNpz%2Fr3ClfA4PE6GtMkzqYee5ZeqL9jEQryTEh98JgMXhMwLkLCRHkqR2Lr5k10bzZTdPlQOsHDdnDFFiD9Y8uukJ1gZVJn7cm2IACPJmQzkjv%2Bwuz%2FESU%2BpVn6JSKBDy7aR9ppRQJlrTCGMXsTlmGyZbb49fxAFpyCy0NvCbOXJBQ7PdrKxoXlBzGY%2FsuOLrykbiS77hOdMILIxb8GOqUBCP1aFWur9MVucDSSbncpHltcctO%2FjUCrclWOFU2u0VSegnAkjRBZtFEUxKYVsc4CyloTCB6ZaNkCRq%2BJ4ZZVOinUIetlHPbXNM2mD6gHom1lYADxFULmd%2Fti5xoVhyyX11VeFJ17um6zB3D3yO0SRpsX59xFDcN4ED5rl4NyIs42EqqX0C2D1tHd2J98NQzZ5z6UDycagN5j7Q%2BTZDdw1gTkHXOE&X-Amz-Signature=de240c3f8111723bddafc235fa10bb9f745e5d54e08d1e56bdd2a64dab24ef28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXECXPDM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBysEhuDGE%2FrEnKWM2N0ASQdVc3c0VGV5S8rABfUW1qUAiEA21VC9GQAaYcO0JrIsvl5IlM5%2BKbB0ZjcYJU16O2uycoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFfM%2BCAwgtRdbScdUSrcAxm6Tp96TWgR9axp3XYYmoCuzDXq%2BEA6Tl7GzW8vxRpey%2F9gMnqXk4qFl1z6kG4NWaud8sVTAXji1%2BEnCRt4KRbq6rRYJH%2BMAWaOvBWeVC0FTL9f18GZq%2FKM0eKF5LyCb7hdtVfOXcgaF%2BxrtgkG6ay6YDbt4c53scUCSWCkVq1kLyypbeqojUzNUTdXBOVkH%2BC7Kj9Ozyx5QePKTe5th37KrUIbqSmPWcKH%2BXzdXiw6tgZ8uX3waB7bPkGOPxZ6n0niVb5n8PkWU4g%2BWTVqMNTIMs1QIX7Fjw6W%2F1Y1OT92ze%2FDlZqR6EANl2IJoiDdF7w9ZEvDXKUhflaTFQZJ3LGjcNaM4KzIdl1VP%2FFIKWnUfRKt0PwQXdRfy%2BGxNlEE8RvJY%2FYL97vZjzRRtVoX74mDUsu70hB32B0cBhURJahFsf%2FiqrNpz%2Fr3ClfA4PE6GtMkzqYee5ZeqL9jEQryTEh98JgMXhMwLkLCRHkqR2Lr5k10bzZTdPlQOsHDdnDFFiD9Y8uukJ1gZVJn7cm2IACPJmQzkjv%2Bwuz%2FESU%2BpVn6JSKBDy7aR9ppRQJlrTCGMXsTlmGyZbb49fxAFpyCy0NvCbOXJBQ7PdrKxoXlBzGY%2FsuOLrykbiS77hOdMILIxb8GOqUBCP1aFWur9MVucDSSbncpHltcctO%2FjUCrclWOFU2u0VSegnAkjRBZtFEUxKYVsc4CyloTCB6ZaNkCRq%2BJ4ZZVOinUIetlHPbXNM2mD6gHom1lYADxFULmd%2Fti5xoVhyyX11VeFJ17um6zB3D3yO0SRpsX59xFDcN4ED5rl4NyIs42EqqX0C2D1tHd2J98NQzZ5z6UDycagN5j7Q%2BTZDdw1gTkHXOE&X-Amz-Signature=40a2188dbda26530c0c9c6c8d6a75690baaa5497c3433b5a22dbc8f11609546a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXECXPDM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBysEhuDGE%2FrEnKWM2N0ASQdVc3c0VGV5S8rABfUW1qUAiEA21VC9GQAaYcO0JrIsvl5IlM5%2BKbB0ZjcYJU16O2uycoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFfM%2BCAwgtRdbScdUSrcAxm6Tp96TWgR9axp3XYYmoCuzDXq%2BEA6Tl7GzW8vxRpey%2F9gMnqXk4qFl1z6kG4NWaud8sVTAXji1%2BEnCRt4KRbq6rRYJH%2BMAWaOvBWeVC0FTL9f18GZq%2FKM0eKF5LyCb7hdtVfOXcgaF%2BxrtgkG6ay6YDbt4c53scUCSWCkVq1kLyypbeqojUzNUTdXBOVkH%2BC7Kj9Ozyx5QePKTe5th37KrUIbqSmPWcKH%2BXzdXiw6tgZ8uX3waB7bPkGOPxZ6n0niVb5n8PkWU4g%2BWTVqMNTIMs1QIX7Fjw6W%2F1Y1OT92ze%2FDlZqR6EANl2IJoiDdF7w9ZEvDXKUhflaTFQZJ3LGjcNaM4KzIdl1VP%2FFIKWnUfRKt0PwQXdRfy%2BGxNlEE8RvJY%2FYL97vZjzRRtVoX74mDUsu70hB32B0cBhURJahFsf%2FiqrNpz%2Fr3ClfA4PE6GtMkzqYee5ZeqL9jEQryTEh98JgMXhMwLkLCRHkqR2Lr5k10bzZTdPlQOsHDdnDFFiD9Y8uukJ1gZVJn7cm2IACPJmQzkjv%2Bwuz%2FESU%2BpVn6JSKBDy7aR9ppRQJlrTCGMXsTlmGyZbb49fxAFpyCy0NvCbOXJBQ7PdrKxoXlBzGY%2FsuOLrykbiS77hOdMILIxb8GOqUBCP1aFWur9MVucDSSbncpHltcctO%2FjUCrclWOFU2u0VSegnAkjRBZtFEUxKYVsc4CyloTCB6ZaNkCRq%2BJ4ZZVOinUIetlHPbXNM2mD6gHom1lYADxFULmd%2Fti5xoVhyyX11VeFJ17um6zB3D3yO0SRpsX59xFDcN4ED5rl4NyIs42EqqX0C2D1tHd2J98NQzZ5z6UDycagN5j7Q%2BTZDdw1gTkHXOE&X-Amz-Signature=9b9408fc93f848913e9803bc1ce7eecad9733870a27e41b01c84dbca4b01102d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXECXPDM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBysEhuDGE%2FrEnKWM2N0ASQdVc3c0VGV5S8rABfUW1qUAiEA21VC9GQAaYcO0JrIsvl5IlM5%2BKbB0ZjcYJU16O2uycoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFfM%2BCAwgtRdbScdUSrcAxm6Tp96TWgR9axp3XYYmoCuzDXq%2BEA6Tl7GzW8vxRpey%2F9gMnqXk4qFl1z6kG4NWaud8sVTAXji1%2BEnCRt4KRbq6rRYJH%2BMAWaOvBWeVC0FTL9f18GZq%2FKM0eKF5LyCb7hdtVfOXcgaF%2BxrtgkG6ay6YDbt4c53scUCSWCkVq1kLyypbeqojUzNUTdXBOVkH%2BC7Kj9Ozyx5QePKTe5th37KrUIbqSmPWcKH%2BXzdXiw6tgZ8uX3waB7bPkGOPxZ6n0niVb5n8PkWU4g%2BWTVqMNTIMs1QIX7Fjw6W%2F1Y1OT92ze%2FDlZqR6EANl2IJoiDdF7w9ZEvDXKUhflaTFQZJ3LGjcNaM4KzIdl1VP%2FFIKWnUfRKt0PwQXdRfy%2BGxNlEE8RvJY%2FYL97vZjzRRtVoX74mDUsu70hB32B0cBhURJahFsf%2FiqrNpz%2Fr3ClfA4PE6GtMkzqYee5ZeqL9jEQryTEh98JgMXhMwLkLCRHkqR2Lr5k10bzZTdPlQOsHDdnDFFiD9Y8uukJ1gZVJn7cm2IACPJmQzkjv%2Bwuz%2FESU%2BpVn6JSKBDy7aR9ppRQJlrTCGMXsTlmGyZbb49fxAFpyCy0NvCbOXJBQ7PdrKxoXlBzGY%2FsuOLrykbiS77hOdMILIxb8GOqUBCP1aFWur9MVucDSSbncpHltcctO%2FjUCrclWOFU2u0VSegnAkjRBZtFEUxKYVsc4CyloTCB6ZaNkCRq%2BJ4ZZVOinUIetlHPbXNM2mD6gHom1lYADxFULmd%2Fti5xoVhyyX11VeFJ17um6zB3D3yO0SRpsX59xFDcN4ED5rl4NyIs42EqqX0C2D1tHd2J98NQzZ5z6UDycagN5j7Q%2BTZDdw1gTkHXOE&X-Amz-Signature=a80e4533f87f3bb328e839c03236afe32a65f6b6f4d087a4a98d816cd6ca9dee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXECXPDM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBysEhuDGE%2FrEnKWM2N0ASQdVc3c0VGV5S8rABfUW1qUAiEA21VC9GQAaYcO0JrIsvl5IlM5%2BKbB0ZjcYJU16O2uycoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFfM%2BCAwgtRdbScdUSrcAxm6Tp96TWgR9axp3XYYmoCuzDXq%2BEA6Tl7GzW8vxRpey%2F9gMnqXk4qFl1z6kG4NWaud8sVTAXji1%2BEnCRt4KRbq6rRYJH%2BMAWaOvBWeVC0FTL9f18GZq%2FKM0eKF5LyCb7hdtVfOXcgaF%2BxrtgkG6ay6YDbt4c53scUCSWCkVq1kLyypbeqojUzNUTdXBOVkH%2BC7Kj9Ozyx5QePKTe5th37KrUIbqSmPWcKH%2BXzdXiw6tgZ8uX3waB7bPkGOPxZ6n0niVb5n8PkWU4g%2BWTVqMNTIMs1QIX7Fjw6W%2F1Y1OT92ze%2FDlZqR6EANl2IJoiDdF7w9ZEvDXKUhflaTFQZJ3LGjcNaM4KzIdl1VP%2FFIKWnUfRKt0PwQXdRfy%2BGxNlEE8RvJY%2FYL97vZjzRRtVoX74mDUsu70hB32B0cBhURJahFsf%2FiqrNpz%2Fr3ClfA4PE6GtMkzqYee5ZeqL9jEQryTEh98JgMXhMwLkLCRHkqR2Lr5k10bzZTdPlQOsHDdnDFFiD9Y8uukJ1gZVJn7cm2IACPJmQzkjv%2Bwuz%2FESU%2BpVn6JSKBDy7aR9ppRQJlrTCGMXsTlmGyZbb49fxAFpyCy0NvCbOXJBQ7PdrKxoXlBzGY%2FsuOLrykbiS77hOdMILIxb8GOqUBCP1aFWur9MVucDSSbncpHltcctO%2FjUCrclWOFU2u0VSegnAkjRBZtFEUxKYVsc4CyloTCB6ZaNkCRq%2BJ4ZZVOinUIetlHPbXNM2mD6gHom1lYADxFULmd%2Fti5xoVhyyX11VeFJ17um6zB3D3yO0SRpsX59xFDcN4ED5rl4NyIs42EqqX0C2D1tHd2J98NQzZ5z6UDycagN5j7Q%2BTZDdw1gTkHXOE&X-Amz-Signature=9b9b3abcc0277000ca96709337f653048ec9e4d0cf348f96a8cf54b3640a8b55&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
