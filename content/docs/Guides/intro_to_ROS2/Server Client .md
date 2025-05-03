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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRLA36J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCbczfxXO1PHtXm8dN%2BbWo0r9uhihrsR%2Fy84tpNat7xGwIgdRi7iv37FtupFieN1ng9%2FKFoBDm%2Fi8LNFV2ZicnD2gkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FxaOOWGY3VRw4QWCrcA58JB0TLNioMEffLoGBWRBeu4FMsRXZ0wP%2FFA9y2zzQwVmNurKffltvVntPrOCBHEzuBWGAElclL%2BXRwRDweIcaoTt4Z2K9EltHIJUFki7mTHzyv%2FARbLSZM4kHEg%2BLljtTHJWmIbNV4KfML5bAGSulyF7s05n4DCO3uG%2B5Q9od5mpCU2NCy5AH7WfHk5E6xVGCkD0mQJBXa%2Fq8NLEOpa7tXqbFnxnxS5mhikIQkzkSyTqVw5Osg4ctycioVnGHzM0E%2B1JQmTFQ7u9%2FtgizqLJPbnjalpczQUrudngvWW7EZeGJtsH3Oc%2Fg%2BBttdPmW4EUhjQnp0fHbQ1FVkMZWPOZ7f2Heji%2BhKe%2FFfm7UX1ZkypMLM%2FgtguFuV5H7C%2BGNnhcPZkt0KC4dP57mO9HgOH571XTtYggdcwgTaj0qSOao%2FsTfC4VU6Rj0%2BH9eF4fz%2FExPN5Mn%2BfC22Hyn64vWTRIAa74%2FndfkjmsbemTmya6F9KGnzlNVmr3eQEazlaVDS71at5pZXQKz%2B046jLZb2GbNR3N%2FW7ffek3kC%2BAf5lbXSvIIHjBP63J1iJWn9%2B2vb7316nUjRlJ%2BOrAZhWzNB8oiq6KUHJDqhRh8ZpqeKgpaqj5CGdFCHVwYOGliqMLuq2cAGOqUBJKN8XfZ3CQI31EF3biG8LkQwoLAN1YcKwXF9sHQeYMKnI9JUVwyopWPyWZK4WlNVF0MZolGBD0mwfJomY5%2FVhyucZwgicROIj1aA7%2FoPUeIDeVoGqO3A%2FvHOrPEsZP0UA03mzUI30n4ThBcRRtTPp%2BLP32KVR6IwRAH6BHzsFC9LIs3PbpqoCkLmTKfmVnTqez2YugTIN2cZonvNtbC9wg9vMjzG&X-Amz-Signature=2126cd539787519bdafdbbfb2796c7f82bd3e8dc72ee9621f6731d7545c3b54c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRLA36J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCbczfxXO1PHtXm8dN%2BbWo0r9uhihrsR%2Fy84tpNat7xGwIgdRi7iv37FtupFieN1ng9%2FKFoBDm%2Fi8LNFV2ZicnD2gkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FxaOOWGY3VRw4QWCrcA58JB0TLNioMEffLoGBWRBeu4FMsRXZ0wP%2FFA9y2zzQwVmNurKffltvVntPrOCBHEzuBWGAElclL%2BXRwRDweIcaoTt4Z2K9EltHIJUFki7mTHzyv%2FARbLSZM4kHEg%2BLljtTHJWmIbNV4KfML5bAGSulyF7s05n4DCO3uG%2B5Q9od5mpCU2NCy5AH7WfHk5E6xVGCkD0mQJBXa%2Fq8NLEOpa7tXqbFnxnxS5mhikIQkzkSyTqVw5Osg4ctycioVnGHzM0E%2B1JQmTFQ7u9%2FtgizqLJPbnjalpczQUrudngvWW7EZeGJtsH3Oc%2Fg%2BBttdPmW4EUhjQnp0fHbQ1FVkMZWPOZ7f2Heji%2BhKe%2FFfm7UX1ZkypMLM%2FgtguFuV5H7C%2BGNnhcPZkt0KC4dP57mO9HgOH571XTtYggdcwgTaj0qSOao%2FsTfC4VU6Rj0%2BH9eF4fz%2FExPN5Mn%2BfC22Hyn64vWTRIAa74%2FndfkjmsbemTmya6F9KGnzlNVmr3eQEazlaVDS71at5pZXQKz%2B046jLZb2GbNR3N%2FW7ffek3kC%2BAf5lbXSvIIHjBP63J1iJWn9%2B2vb7316nUjRlJ%2BOrAZhWzNB8oiq6KUHJDqhRh8ZpqeKgpaqj5CGdFCHVwYOGliqMLuq2cAGOqUBJKN8XfZ3CQI31EF3biG8LkQwoLAN1YcKwXF9sHQeYMKnI9JUVwyopWPyWZK4WlNVF0MZolGBD0mwfJomY5%2FVhyucZwgicROIj1aA7%2FoPUeIDeVoGqO3A%2FvHOrPEsZP0UA03mzUI30n4ThBcRRtTPp%2BLP32KVR6IwRAH6BHzsFC9LIs3PbpqoCkLmTKfmVnTqez2YugTIN2cZonvNtbC9wg9vMjzG&X-Amz-Signature=655c866c3b7364b4e6f64b2a39374c27bea0ce4f2b2d93fd3b63db57cc658ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRLA36J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCbczfxXO1PHtXm8dN%2BbWo0r9uhihrsR%2Fy84tpNat7xGwIgdRi7iv37FtupFieN1ng9%2FKFoBDm%2Fi8LNFV2ZicnD2gkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FxaOOWGY3VRw4QWCrcA58JB0TLNioMEffLoGBWRBeu4FMsRXZ0wP%2FFA9y2zzQwVmNurKffltvVntPrOCBHEzuBWGAElclL%2BXRwRDweIcaoTt4Z2K9EltHIJUFki7mTHzyv%2FARbLSZM4kHEg%2BLljtTHJWmIbNV4KfML5bAGSulyF7s05n4DCO3uG%2B5Q9od5mpCU2NCy5AH7WfHk5E6xVGCkD0mQJBXa%2Fq8NLEOpa7tXqbFnxnxS5mhikIQkzkSyTqVw5Osg4ctycioVnGHzM0E%2B1JQmTFQ7u9%2FtgizqLJPbnjalpczQUrudngvWW7EZeGJtsH3Oc%2Fg%2BBttdPmW4EUhjQnp0fHbQ1FVkMZWPOZ7f2Heji%2BhKe%2FFfm7UX1ZkypMLM%2FgtguFuV5H7C%2BGNnhcPZkt0KC4dP57mO9HgOH571XTtYggdcwgTaj0qSOao%2FsTfC4VU6Rj0%2BH9eF4fz%2FExPN5Mn%2BfC22Hyn64vWTRIAa74%2FndfkjmsbemTmya6F9KGnzlNVmr3eQEazlaVDS71at5pZXQKz%2B046jLZb2GbNR3N%2FW7ffek3kC%2BAf5lbXSvIIHjBP63J1iJWn9%2B2vb7316nUjRlJ%2BOrAZhWzNB8oiq6KUHJDqhRh8ZpqeKgpaqj5CGdFCHVwYOGliqMLuq2cAGOqUBJKN8XfZ3CQI31EF3biG8LkQwoLAN1YcKwXF9sHQeYMKnI9JUVwyopWPyWZK4WlNVF0MZolGBD0mwfJomY5%2FVhyucZwgicROIj1aA7%2FoPUeIDeVoGqO3A%2FvHOrPEsZP0UA03mzUI30n4ThBcRRtTPp%2BLP32KVR6IwRAH6BHzsFC9LIs3PbpqoCkLmTKfmVnTqez2YugTIN2cZonvNtbC9wg9vMjzG&X-Amz-Signature=366cb04ab38e5a15196dccfb07fb3dfb30acc98ecc372229dbca2e538feee2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRLA36J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCbczfxXO1PHtXm8dN%2BbWo0r9uhihrsR%2Fy84tpNat7xGwIgdRi7iv37FtupFieN1ng9%2FKFoBDm%2Fi8LNFV2ZicnD2gkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FxaOOWGY3VRw4QWCrcA58JB0TLNioMEffLoGBWRBeu4FMsRXZ0wP%2FFA9y2zzQwVmNurKffltvVntPrOCBHEzuBWGAElclL%2BXRwRDweIcaoTt4Z2K9EltHIJUFki7mTHzyv%2FARbLSZM4kHEg%2BLljtTHJWmIbNV4KfML5bAGSulyF7s05n4DCO3uG%2B5Q9od5mpCU2NCy5AH7WfHk5E6xVGCkD0mQJBXa%2Fq8NLEOpa7tXqbFnxnxS5mhikIQkzkSyTqVw5Osg4ctycioVnGHzM0E%2B1JQmTFQ7u9%2FtgizqLJPbnjalpczQUrudngvWW7EZeGJtsH3Oc%2Fg%2BBttdPmW4EUhjQnp0fHbQ1FVkMZWPOZ7f2Heji%2BhKe%2FFfm7UX1ZkypMLM%2FgtguFuV5H7C%2BGNnhcPZkt0KC4dP57mO9HgOH571XTtYggdcwgTaj0qSOao%2FsTfC4VU6Rj0%2BH9eF4fz%2FExPN5Mn%2BfC22Hyn64vWTRIAa74%2FndfkjmsbemTmya6F9KGnzlNVmr3eQEazlaVDS71at5pZXQKz%2B046jLZb2GbNR3N%2FW7ffek3kC%2BAf5lbXSvIIHjBP63J1iJWn9%2B2vb7316nUjRlJ%2BOrAZhWzNB8oiq6KUHJDqhRh8ZpqeKgpaqj5CGdFCHVwYOGliqMLuq2cAGOqUBJKN8XfZ3CQI31EF3biG8LkQwoLAN1YcKwXF9sHQeYMKnI9JUVwyopWPyWZK4WlNVF0MZolGBD0mwfJomY5%2FVhyucZwgicROIj1aA7%2FoPUeIDeVoGqO3A%2FvHOrPEsZP0UA03mzUI30n4ThBcRRtTPp%2BLP32KVR6IwRAH6BHzsFC9LIs3PbpqoCkLmTKfmVnTqez2YugTIN2cZonvNtbC9wg9vMjzG&X-Amz-Signature=e1d17b866cda463919e233a5eb3c4f922af31ce6e6a3ca487d9f977512c20338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRLA36J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCbczfxXO1PHtXm8dN%2BbWo0r9uhihrsR%2Fy84tpNat7xGwIgdRi7iv37FtupFieN1ng9%2FKFoBDm%2Fi8LNFV2ZicnD2gkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FxaOOWGY3VRw4QWCrcA58JB0TLNioMEffLoGBWRBeu4FMsRXZ0wP%2FFA9y2zzQwVmNurKffltvVntPrOCBHEzuBWGAElclL%2BXRwRDweIcaoTt4Z2K9EltHIJUFki7mTHzyv%2FARbLSZM4kHEg%2BLljtTHJWmIbNV4KfML5bAGSulyF7s05n4DCO3uG%2B5Q9od5mpCU2NCy5AH7WfHk5E6xVGCkD0mQJBXa%2Fq8NLEOpa7tXqbFnxnxS5mhikIQkzkSyTqVw5Osg4ctycioVnGHzM0E%2B1JQmTFQ7u9%2FtgizqLJPbnjalpczQUrudngvWW7EZeGJtsH3Oc%2Fg%2BBttdPmW4EUhjQnp0fHbQ1FVkMZWPOZ7f2Heji%2BhKe%2FFfm7UX1ZkypMLM%2FgtguFuV5H7C%2BGNnhcPZkt0KC4dP57mO9HgOH571XTtYggdcwgTaj0qSOao%2FsTfC4VU6Rj0%2BH9eF4fz%2FExPN5Mn%2BfC22Hyn64vWTRIAa74%2FndfkjmsbemTmya6F9KGnzlNVmr3eQEazlaVDS71at5pZXQKz%2B046jLZb2GbNR3N%2FW7ffek3kC%2BAf5lbXSvIIHjBP63J1iJWn9%2B2vb7316nUjRlJ%2BOrAZhWzNB8oiq6KUHJDqhRh8ZpqeKgpaqj5CGdFCHVwYOGliqMLuq2cAGOqUBJKN8XfZ3CQI31EF3biG8LkQwoLAN1YcKwXF9sHQeYMKnI9JUVwyopWPyWZK4WlNVF0MZolGBD0mwfJomY5%2FVhyucZwgicROIj1aA7%2FoPUeIDeVoGqO3A%2FvHOrPEsZP0UA03mzUI30n4ThBcRRtTPp%2BLP32KVR6IwRAH6BHzsFC9LIs3PbpqoCkLmTKfmVnTqez2YugTIN2cZonvNtbC9wg9vMjzG&X-Amz-Signature=363544346e0d4585efd045fe9aeb39d311fe2f9775697f20de1a4d37039b6e81&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
