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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L6V7CJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDp29rs0wBz4uUCswdFGHkJMnoOeSK9QbJeJExtz94HPQIgCb8Mztf107EmLrSp3gWQ5eXcPhsn5f%2BQ%2BRmc4uh0riYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPobm7%2BggmHY4dNPbCrcA9jhyHLSmQH4wTStv2cB%2FFifrwEcduK%2FGs%2FWn72YY3KTIKDGyPK1GMea%2FKJuSVkXN4BBKBjp2uRNf4hxVAu7b2km%2Bfc6QGPDxJUGOVSE%2F0aT6%2Fh4D0oHUnGF6Bvkq0yIJRDsq5b0ASJ0d1m6KUMN6G05Nz7Iuoa2K%2FF5kpXbgVzH6c%2BabThItQl0EluUqAEVHFrfxQxYjF301d3gaeKtUXUaQ%2BbEQM3HXqnL218xmT2iyueE8vbW9DKJyG%2F2ECOBTPmfzvPnP9bp1%2Feeyydz4x%2FHgUNKYaV5DgkgB5iNTC7Bev0O5UStqjzl5hcxol3YdP0N6%2FdN3pYcBS0gko6mVeV6N7nq3IVNmO65wmw6Zq3BjDfhYnXi6Y%2BciAhsg3wg%2BBIAze4P8VsIBBorjTmAUsQm7jOjx7OGQh9U2C%2BWeyzSJOwX27RHuojvxE83sGLFotBeGLHEXbcKVRKgPOJUKQwpT8pSJQvEZHz7LxBIieb3jgc6bY%2FKU%2BsZX1lmk1TucDE4E%2FNOUGXUCFQzFLWjqvYxo5VBFTVA8s4jFMRbwmbFkN8Z8tJDZGPjDrRinl5DH9XMGPqWJFlSux4wira21de%2BuFVe1umU0xxdFFsOnHWznQ7ImK6TELtwFxrJMI7Ls74GOqUBw9uY9XWMS0A39wpSCPYhe3xY%2FSMQZkp3V%2FOm%2BFIrJJE1b26z6yX7zbLRbsf6Ugt3XrvUg0TqBlRoifwuoqpJGbOOBZK3DQ8iPVrRsQvy6KB7xOjkaJlCgzcqqffZTsNnkumj573MtaKakU%2BlxpbHXv4PkTPh3FSJ%2FflzlUfF%2Ftw1LUPdAGHVjV%2BbarR2g0QfoH%2FVlp9n6y5l1yG05NMwpqq9hahH&X-Amz-Signature=bb2027f33ea401980aefad3f979b6806eed40422dd87f5f9f8d7f4363375e0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L6V7CJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDp29rs0wBz4uUCswdFGHkJMnoOeSK9QbJeJExtz94HPQIgCb8Mztf107EmLrSp3gWQ5eXcPhsn5f%2BQ%2BRmc4uh0riYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPobm7%2BggmHY4dNPbCrcA9jhyHLSmQH4wTStv2cB%2FFifrwEcduK%2FGs%2FWn72YY3KTIKDGyPK1GMea%2FKJuSVkXN4BBKBjp2uRNf4hxVAu7b2km%2Bfc6QGPDxJUGOVSE%2F0aT6%2Fh4D0oHUnGF6Bvkq0yIJRDsq5b0ASJ0d1m6KUMN6G05Nz7Iuoa2K%2FF5kpXbgVzH6c%2BabThItQl0EluUqAEVHFrfxQxYjF301d3gaeKtUXUaQ%2BbEQM3HXqnL218xmT2iyueE8vbW9DKJyG%2F2ECOBTPmfzvPnP9bp1%2Feeyydz4x%2FHgUNKYaV5DgkgB5iNTC7Bev0O5UStqjzl5hcxol3YdP0N6%2FdN3pYcBS0gko6mVeV6N7nq3IVNmO65wmw6Zq3BjDfhYnXi6Y%2BciAhsg3wg%2BBIAze4P8VsIBBorjTmAUsQm7jOjx7OGQh9U2C%2BWeyzSJOwX27RHuojvxE83sGLFotBeGLHEXbcKVRKgPOJUKQwpT8pSJQvEZHz7LxBIieb3jgc6bY%2FKU%2BsZX1lmk1TucDE4E%2FNOUGXUCFQzFLWjqvYxo5VBFTVA8s4jFMRbwmbFkN8Z8tJDZGPjDrRinl5DH9XMGPqWJFlSux4wira21de%2BuFVe1umU0xxdFFsOnHWznQ7ImK6TELtwFxrJMI7Ls74GOqUBw9uY9XWMS0A39wpSCPYhe3xY%2FSMQZkp3V%2FOm%2BFIrJJE1b26z6yX7zbLRbsf6Ugt3XrvUg0TqBlRoifwuoqpJGbOOBZK3DQ8iPVrRsQvy6KB7xOjkaJlCgzcqqffZTsNnkumj573MtaKakU%2BlxpbHXv4PkTPh3FSJ%2FflzlUfF%2Ftw1LUPdAGHVjV%2BbarR2g0QfoH%2FVlp9n6y5l1yG05NMwpqq9hahH&X-Amz-Signature=57270763c0d1d7877781c7e86c9118a70f83fe5b6fc5b34492c66db0c8794592&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L6V7CJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDp29rs0wBz4uUCswdFGHkJMnoOeSK9QbJeJExtz94HPQIgCb8Mztf107EmLrSp3gWQ5eXcPhsn5f%2BQ%2BRmc4uh0riYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPobm7%2BggmHY4dNPbCrcA9jhyHLSmQH4wTStv2cB%2FFifrwEcduK%2FGs%2FWn72YY3KTIKDGyPK1GMea%2FKJuSVkXN4BBKBjp2uRNf4hxVAu7b2km%2Bfc6QGPDxJUGOVSE%2F0aT6%2Fh4D0oHUnGF6Bvkq0yIJRDsq5b0ASJ0d1m6KUMN6G05Nz7Iuoa2K%2FF5kpXbgVzH6c%2BabThItQl0EluUqAEVHFrfxQxYjF301d3gaeKtUXUaQ%2BbEQM3HXqnL218xmT2iyueE8vbW9DKJyG%2F2ECOBTPmfzvPnP9bp1%2Feeyydz4x%2FHgUNKYaV5DgkgB5iNTC7Bev0O5UStqjzl5hcxol3YdP0N6%2FdN3pYcBS0gko6mVeV6N7nq3IVNmO65wmw6Zq3BjDfhYnXi6Y%2BciAhsg3wg%2BBIAze4P8VsIBBorjTmAUsQm7jOjx7OGQh9U2C%2BWeyzSJOwX27RHuojvxE83sGLFotBeGLHEXbcKVRKgPOJUKQwpT8pSJQvEZHz7LxBIieb3jgc6bY%2FKU%2BsZX1lmk1TucDE4E%2FNOUGXUCFQzFLWjqvYxo5VBFTVA8s4jFMRbwmbFkN8Z8tJDZGPjDrRinl5DH9XMGPqWJFlSux4wira21de%2BuFVe1umU0xxdFFsOnHWznQ7ImK6TELtwFxrJMI7Ls74GOqUBw9uY9XWMS0A39wpSCPYhe3xY%2FSMQZkp3V%2FOm%2BFIrJJE1b26z6yX7zbLRbsf6Ugt3XrvUg0TqBlRoifwuoqpJGbOOBZK3DQ8iPVrRsQvy6KB7xOjkaJlCgzcqqffZTsNnkumj573MtaKakU%2BlxpbHXv4PkTPh3FSJ%2FflzlUfF%2Ftw1LUPdAGHVjV%2BbarR2g0QfoH%2FVlp9n6y5l1yG05NMwpqq9hahH&X-Amz-Signature=1f208ba2155f9674e7efd325f1580d583c0f42864bcb0f4096a5abca0f9df5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L6V7CJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDp29rs0wBz4uUCswdFGHkJMnoOeSK9QbJeJExtz94HPQIgCb8Mztf107EmLrSp3gWQ5eXcPhsn5f%2BQ%2BRmc4uh0riYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPobm7%2BggmHY4dNPbCrcA9jhyHLSmQH4wTStv2cB%2FFifrwEcduK%2FGs%2FWn72YY3KTIKDGyPK1GMea%2FKJuSVkXN4BBKBjp2uRNf4hxVAu7b2km%2Bfc6QGPDxJUGOVSE%2F0aT6%2Fh4D0oHUnGF6Bvkq0yIJRDsq5b0ASJ0d1m6KUMN6G05Nz7Iuoa2K%2FF5kpXbgVzH6c%2BabThItQl0EluUqAEVHFrfxQxYjF301d3gaeKtUXUaQ%2BbEQM3HXqnL218xmT2iyueE8vbW9DKJyG%2F2ECOBTPmfzvPnP9bp1%2Feeyydz4x%2FHgUNKYaV5DgkgB5iNTC7Bev0O5UStqjzl5hcxol3YdP0N6%2FdN3pYcBS0gko6mVeV6N7nq3IVNmO65wmw6Zq3BjDfhYnXi6Y%2BciAhsg3wg%2BBIAze4P8VsIBBorjTmAUsQm7jOjx7OGQh9U2C%2BWeyzSJOwX27RHuojvxE83sGLFotBeGLHEXbcKVRKgPOJUKQwpT8pSJQvEZHz7LxBIieb3jgc6bY%2FKU%2BsZX1lmk1TucDE4E%2FNOUGXUCFQzFLWjqvYxo5VBFTVA8s4jFMRbwmbFkN8Z8tJDZGPjDrRinl5DH9XMGPqWJFlSux4wira21de%2BuFVe1umU0xxdFFsOnHWznQ7ImK6TELtwFxrJMI7Ls74GOqUBw9uY9XWMS0A39wpSCPYhe3xY%2FSMQZkp3V%2FOm%2BFIrJJE1b26z6yX7zbLRbsf6Ugt3XrvUg0TqBlRoifwuoqpJGbOOBZK3DQ8iPVrRsQvy6KB7xOjkaJlCgzcqqffZTsNnkumj573MtaKakU%2BlxpbHXv4PkTPh3FSJ%2FflzlUfF%2Ftw1LUPdAGHVjV%2BbarR2g0QfoH%2FVlp9n6y5l1yG05NMwpqq9hahH&X-Amz-Signature=5aac82ff2226b5d97ea688a40970aa02ba359270c72c45767532a5e015c9884b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L6V7CJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDp29rs0wBz4uUCswdFGHkJMnoOeSK9QbJeJExtz94HPQIgCb8Mztf107EmLrSp3gWQ5eXcPhsn5f%2BQ%2BRmc4uh0riYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPobm7%2BggmHY4dNPbCrcA9jhyHLSmQH4wTStv2cB%2FFifrwEcduK%2FGs%2FWn72YY3KTIKDGyPK1GMea%2FKJuSVkXN4BBKBjp2uRNf4hxVAu7b2km%2Bfc6QGPDxJUGOVSE%2F0aT6%2Fh4D0oHUnGF6Bvkq0yIJRDsq5b0ASJ0d1m6KUMN6G05Nz7Iuoa2K%2FF5kpXbgVzH6c%2BabThItQl0EluUqAEVHFrfxQxYjF301d3gaeKtUXUaQ%2BbEQM3HXqnL218xmT2iyueE8vbW9DKJyG%2F2ECOBTPmfzvPnP9bp1%2Feeyydz4x%2FHgUNKYaV5DgkgB5iNTC7Bev0O5UStqjzl5hcxol3YdP0N6%2FdN3pYcBS0gko6mVeV6N7nq3IVNmO65wmw6Zq3BjDfhYnXi6Y%2BciAhsg3wg%2BBIAze4P8VsIBBorjTmAUsQm7jOjx7OGQh9U2C%2BWeyzSJOwX27RHuojvxE83sGLFotBeGLHEXbcKVRKgPOJUKQwpT8pSJQvEZHz7LxBIieb3jgc6bY%2FKU%2BsZX1lmk1TucDE4E%2FNOUGXUCFQzFLWjqvYxo5VBFTVA8s4jFMRbwmbFkN8Z8tJDZGPjDrRinl5DH9XMGPqWJFlSux4wira21de%2BuFVe1umU0xxdFFsOnHWznQ7ImK6TELtwFxrJMI7Ls74GOqUBw9uY9XWMS0A39wpSCPYhe3xY%2FSMQZkp3V%2FOm%2BFIrJJE1b26z6yX7zbLRbsf6Ugt3XrvUg0TqBlRoifwuoqpJGbOOBZK3DQ8iPVrRsQvy6KB7xOjkaJlCgzcqqffZTsNnkumj573MtaKakU%2BlxpbHXv4PkTPh3FSJ%2FflzlUfF%2Ftw1LUPdAGHVjV%2BbarR2g0QfoH%2FVlp9n6y5l1yG05NMwpqq9hahH&X-Amz-Signature=de079e3cb14db24646606351e76df09b802d05c6e8e491bf444d784c0cc31eea&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
