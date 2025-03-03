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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLGRCLF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsb5GEzVZfZTjcchgQvlomHA07uTiJhvx%2BYrJQGDI%2BwAiEA3mdQ1X7G%2BdV%2FvqfM5Cf3Sli5sJlmMAYIX9ZljZwJx04qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARnVQSMXgssORvZHircA5gCK0Nu0w32jcBxJeINbzjLYQjhEPNG6gxmYpuLoL7vRAAG0NrdCCdGmorhl8n%2FIKKLrFffUSeb6V0R0AO5roQRkmS1J2%2FslmEt24Yjq9i2olVOLA%2BuQbFBK%2FfJr0kx5dA%2F7KO2iFassBlwQXpzJccFtjTjM0A3aNuQ1FaUqgUvB6L23zX89512XVrr960qxXbhjV7gGlRiXuf6xo8VN%2BXe%2B2GOe0DZWdaIhA6kiwfFhotqhjOflHWI1FKebzlkkfjIPwWlSE1ziW7iluzK62vg%2BqzQpUhCsjygyYVivqEHBmUdEtOnFgGYYVPydf%2BDVhIijdwVLx7RnMOAMUYhyy4qItnKfjM2m38P6WC2aDmOuh77eJnFuP4%2B6A2gIBRuylWm10XmYOOoNOG%2BlkZ2zZYlm6z0YiJ8Go7NC4qfNYxVRqmRDtqgHWN770WUMFOsRton2EEHTrwp9tTuFEiv%2Benz7uo5lK7GmDXhOfEycliLH6M9DvxiWyQaAyqIaEMFlmbVntWyWp%2BfM3yNbFtQDqCdd0AURQN%2FbtN%2FYe3%2BUBqDO9Afvj26TJtC7FkiERgqneiFEKvn9bJFVB1KjgWAygzjzM5ecdMg9VATyL6wKs1SLa1DPBwvdOom8TjpMJGZmL4GOqUBJXkSRb0G%2FdQTE1WkggrJz11psFAXvtE6WS3nsYOxtcBo6pp9lpI5I86%2BbxCGnoGAeMknTTE73lU4ZMHjMDiikEYzxjtGmSwJswd20wB79kGfvfsYTpBkw6BZbWRiiqc2AGDyarqHe%2F2s5hXWqeWjoHoBlraxYCBDDD00ALBKLlIEShWX%2FR4HnZJW4bp8yrOnKgn1EN%2B9q6pJJ2ByWBMU2FzcZXRQ&X-Amz-Signature=7b0f1009bd8ab385fa228e3dd850d9f6c7561e1dc2ace22c54339752bc10e3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLGRCLF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsb5GEzVZfZTjcchgQvlomHA07uTiJhvx%2BYrJQGDI%2BwAiEA3mdQ1X7G%2BdV%2FvqfM5Cf3Sli5sJlmMAYIX9ZljZwJx04qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARnVQSMXgssORvZHircA5gCK0Nu0w32jcBxJeINbzjLYQjhEPNG6gxmYpuLoL7vRAAG0NrdCCdGmorhl8n%2FIKKLrFffUSeb6V0R0AO5roQRkmS1J2%2FslmEt24Yjq9i2olVOLA%2BuQbFBK%2FfJr0kx5dA%2F7KO2iFassBlwQXpzJccFtjTjM0A3aNuQ1FaUqgUvB6L23zX89512XVrr960qxXbhjV7gGlRiXuf6xo8VN%2BXe%2B2GOe0DZWdaIhA6kiwfFhotqhjOflHWI1FKebzlkkfjIPwWlSE1ziW7iluzK62vg%2BqzQpUhCsjygyYVivqEHBmUdEtOnFgGYYVPydf%2BDVhIijdwVLx7RnMOAMUYhyy4qItnKfjM2m38P6WC2aDmOuh77eJnFuP4%2B6A2gIBRuylWm10XmYOOoNOG%2BlkZ2zZYlm6z0YiJ8Go7NC4qfNYxVRqmRDtqgHWN770WUMFOsRton2EEHTrwp9tTuFEiv%2Benz7uo5lK7GmDXhOfEycliLH6M9DvxiWyQaAyqIaEMFlmbVntWyWp%2BfM3yNbFtQDqCdd0AURQN%2FbtN%2FYe3%2BUBqDO9Afvj26TJtC7FkiERgqneiFEKvn9bJFVB1KjgWAygzjzM5ecdMg9VATyL6wKs1SLa1DPBwvdOom8TjpMJGZmL4GOqUBJXkSRb0G%2FdQTE1WkggrJz11psFAXvtE6WS3nsYOxtcBo6pp9lpI5I86%2BbxCGnoGAeMknTTE73lU4ZMHjMDiikEYzxjtGmSwJswd20wB79kGfvfsYTpBkw6BZbWRiiqc2AGDyarqHe%2F2s5hXWqeWjoHoBlraxYCBDDD00ALBKLlIEShWX%2FR4HnZJW4bp8yrOnKgn1EN%2B9q6pJJ2ByWBMU2FzcZXRQ&X-Amz-Signature=2ba28e4311952e9667f43c899ae5e042c5e5a168405094601a415efd267cb50c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLGRCLF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsb5GEzVZfZTjcchgQvlomHA07uTiJhvx%2BYrJQGDI%2BwAiEA3mdQ1X7G%2BdV%2FvqfM5Cf3Sli5sJlmMAYIX9ZljZwJx04qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARnVQSMXgssORvZHircA5gCK0Nu0w32jcBxJeINbzjLYQjhEPNG6gxmYpuLoL7vRAAG0NrdCCdGmorhl8n%2FIKKLrFffUSeb6V0R0AO5roQRkmS1J2%2FslmEt24Yjq9i2olVOLA%2BuQbFBK%2FfJr0kx5dA%2F7KO2iFassBlwQXpzJccFtjTjM0A3aNuQ1FaUqgUvB6L23zX89512XVrr960qxXbhjV7gGlRiXuf6xo8VN%2BXe%2B2GOe0DZWdaIhA6kiwfFhotqhjOflHWI1FKebzlkkfjIPwWlSE1ziW7iluzK62vg%2BqzQpUhCsjygyYVivqEHBmUdEtOnFgGYYVPydf%2BDVhIijdwVLx7RnMOAMUYhyy4qItnKfjM2m38P6WC2aDmOuh77eJnFuP4%2B6A2gIBRuylWm10XmYOOoNOG%2BlkZ2zZYlm6z0YiJ8Go7NC4qfNYxVRqmRDtqgHWN770WUMFOsRton2EEHTrwp9tTuFEiv%2Benz7uo5lK7GmDXhOfEycliLH6M9DvxiWyQaAyqIaEMFlmbVntWyWp%2BfM3yNbFtQDqCdd0AURQN%2FbtN%2FYe3%2BUBqDO9Afvj26TJtC7FkiERgqneiFEKvn9bJFVB1KjgWAygzjzM5ecdMg9VATyL6wKs1SLa1DPBwvdOom8TjpMJGZmL4GOqUBJXkSRb0G%2FdQTE1WkggrJz11psFAXvtE6WS3nsYOxtcBo6pp9lpI5I86%2BbxCGnoGAeMknTTE73lU4ZMHjMDiikEYzxjtGmSwJswd20wB79kGfvfsYTpBkw6BZbWRiiqc2AGDyarqHe%2F2s5hXWqeWjoHoBlraxYCBDDD00ALBKLlIEShWX%2FR4HnZJW4bp8yrOnKgn1EN%2B9q6pJJ2ByWBMU2FzcZXRQ&X-Amz-Signature=42cb7ec325c026969fd0a948152e44488475f8b9906680565a2896bd7c4b2db3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLGRCLF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsb5GEzVZfZTjcchgQvlomHA07uTiJhvx%2BYrJQGDI%2BwAiEA3mdQ1X7G%2BdV%2FvqfM5Cf3Sli5sJlmMAYIX9ZljZwJx04qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARnVQSMXgssORvZHircA5gCK0Nu0w32jcBxJeINbzjLYQjhEPNG6gxmYpuLoL7vRAAG0NrdCCdGmorhl8n%2FIKKLrFffUSeb6V0R0AO5roQRkmS1J2%2FslmEt24Yjq9i2olVOLA%2BuQbFBK%2FfJr0kx5dA%2F7KO2iFassBlwQXpzJccFtjTjM0A3aNuQ1FaUqgUvB6L23zX89512XVrr960qxXbhjV7gGlRiXuf6xo8VN%2BXe%2B2GOe0DZWdaIhA6kiwfFhotqhjOflHWI1FKebzlkkfjIPwWlSE1ziW7iluzK62vg%2BqzQpUhCsjygyYVivqEHBmUdEtOnFgGYYVPydf%2BDVhIijdwVLx7RnMOAMUYhyy4qItnKfjM2m38P6WC2aDmOuh77eJnFuP4%2B6A2gIBRuylWm10XmYOOoNOG%2BlkZ2zZYlm6z0YiJ8Go7NC4qfNYxVRqmRDtqgHWN770WUMFOsRton2EEHTrwp9tTuFEiv%2Benz7uo5lK7GmDXhOfEycliLH6M9DvxiWyQaAyqIaEMFlmbVntWyWp%2BfM3yNbFtQDqCdd0AURQN%2FbtN%2FYe3%2BUBqDO9Afvj26TJtC7FkiERgqneiFEKvn9bJFVB1KjgWAygzjzM5ecdMg9VATyL6wKs1SLa1DPBwvdOom8TjpMJGZmL4GOqUBJXkSRb0G%2FdQTE1WkggrJz11psFAXvtE6WS3nsYOxtcBo6pp9lpI5I86%2BbxCGnoGAeMknTTE73lU4ZMHjMDiikEYzxjtGmSwJswd20wB79kGfvfsYTpBkw6BZbWRiiqc2AGDyarqHe%2F2s5hXWqeWjoHoBlraxYCBDDD00ALBKLlIEShWX%2FR4HnZJW4bp8yrOnKgn1EN%2B9q6pJJ2ByWBMU2FzcZXRQ&X-Amz-Signature=42cf55aa3afd826f675a4c941fe7f6209d7cf5e54e390adc3270d67532660e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLGRCLF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsb5GEzVZfZTjcchgQvlomHA07uTiJhvx%2BYrJQGDI%2BwAiEA3mdQ1X7G%2BdV%2FvqfM5Cf3Sli5sJlmMAYIX9ZljZwJx04qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARnVQSMXgssORvZHircA5gCK0Nu0w32jcBxJeINbzjLYQjhEPNG6gxmYpuLoL7vRAAG0NrdCCdGmorhl8n%2FIKKLrFffUSeb6V0R0AO5roQRkmS1J2%2FslmEt24Yjq9i2olVOLA%2BuQbFBK%2FfJr0kx5dA%2F7KO2iFassBlwQXpzJccFtjTjM0A3aNuQ1FaUqgUvB6L23zX89512XVrr960qxXbhjV7gGlRiXuf6xo8VN%2BXe%2B2GOe0DZWdaIhA6kiwfFhotqhjOflHWI1FKebzlkkfjIPwWlSE1ziW7iluzK62vg%2BqzQpUhCsjygyYVivqEHBmUdEtOnFgGYYVPydf%2BDVhIijdwVLx7RnMOAMUYhyy4qItnKfjM2m38P6WC2aDmOuh77eJnFuP4%2B6A2gIBRuylWm10XmYOOoNOG%2BlkZ2zZYlm6z0YiJ8Go7NC4qfNYxVRqmRDtqgHWN770WUMFOsRton2EEHTrwp9tTuFEiv%2Benz7uo5lK7GmDXhOfEycliLH6M9DvxiWyQaAyqIaEMFlmbVntWyWp%2BfM3yNbFtQDqCdd0AURQN%2FbtN%2FYe3%2BUBqDO9Afvj26TJtC7FkiERgqneiFEKvn9bJFVB1KjgWAygzjzM5ecdMg9VATyL6wKs1SLa1DPBwvdOom8TjpMJGZmL4GOqUBJXkSRb0G%2FdQTE1WkggrJz11psFAXvtE6WS3nsYOxtcBo6pp9lpI5I86%2BbxCGnoGAeMknTTE73lU4ZMHjMDiikEYzxjtGmSwJswd20wB79kGfvfsYTpBkw6BZbWRiiqc2AGDyarqHe%2F2s5hXWqeWjoHoBlraxYCBDDD00ALBKLlIEShWX%2FR4HnZJW4bp8yrOnKgn1EN%2B9q6pJJ2ByWBMU2FzcZXRQ&X-Amz-Signature=891c8cb4dc49cd941922481cbde4ca3ac97856c729b107680786aee438cd9e72&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
