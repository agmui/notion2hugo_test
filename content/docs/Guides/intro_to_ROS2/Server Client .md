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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCOFAUX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDk3d8YxHP5p76eEwApCzswZ%2F3mKOr%2FqFM0R%2BxftNsxUAIgW2X3ypjU%2BjbbjB9IhnkUnirKHgyvDEzMqeyr6Q0Q1%2Fgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLwVEjt9cVe67a%2BNKCrcAxQYadG5q87piMBAiB2ygg8azp2IC%2F04gSJ4bxtOuN2gYIDAfL8FaYkwTtmwQjW5dFIwFvOtR9zJ1E2tcEhdlVZKtic6G0lhsyDY1fNdA632rpB4NJULXYPuEdZX9gaCzmSlgZ6i7OMybT1o52U53XCSs%2FDODpXKKMONYS3cmVFczdGuuIszYMBUujkmOEnB0%2Fww3RwaQxYofNIJAKF3pY%2FfBc9brbTtYD4tA80P%2F8HsfCTfP%2FfBU6hadcxJkCLe0Wqp3O14lfu0oOonmd5HU2J0f8iPv8SLxaVU3Joi3lkc18mj3%2BXq8bu8BRSPy3lrNFtcsmjPgSa89KS9MKW%2F5Nk1%2BjKFUZGV6aEzqlZCaFr5sWj215vAQ4ok8hhrgKcm%2FnuADSZ%2FfkhfmV3Be9%2BFh8uOjbnddy88VBMuL75NyNd%2BYm88e9XZhj4CSBYV3wkGzqW3YCPUHovWu6osLPugLQHNxhpwq2%2BgkwixOQ7xzAPsn9DzHQdBqp6JfM4NQnj2r%2BJGaH1y21%2BPrOvVE0weOjiGUbcSgdWMk8P7fL0ekDt6W5KpZ0QqNsyGGzs%2F9uG%2FC8r8WZw9%2BJsXbfeqQSVCT65VUrrVHmqz0OlAddNVlXiEuAmoEJe1j6e%2BMW7ZMOfnoMMGOqUBUYoKIfks8wt45s8jd2RiW8CBcxjaUd%2BRZhZ6rYbD633RHtic59rJlCbac1B30bzB28dIM61Ft1DWYGGp5QXht6cY79xrcQ9D7hCXh6aEFbrhrX8DE7e5HYUH1TmB7CajHe3Ch7Q1OKaaUcRk5YySE%2FKIQIt6ExYvrlKNHjzV4EB2sFHNSdSEuCf47UoQFByvU3FPU1EmBiI4gVmaBaVbGAI5vTOy&X-Amz-Signature=ed61e9e009ecc4f40357950ca37956b309f2c96b6e693cbf40689e163f608303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCOFAUX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDk3d8YxHP5p76eEwApCzswZ%2F3mKOr%2FqFM0R%2BxftNsxUAIgW2X3ypjU%2BjbbjB9IhnkUnirKHgyvDEzMqeyr6Q0Q1%2Fgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLwVEjt9cVe67a%2BNKCrcAxQYadG5q87piMBAiB2ygg8azp2IC%2F04gSJ4bxtOuN2gYIDAfL8FaYkwTtmwQjW5dFIwFvOtR9zJ1E2tcEhdlVZKtic6G0lhsyDY1fNdA632rpB4NJULXYPuEdZX9gaCzmSlgZ6i7OMybT1o52U53XCSs%2FDODpXKKMONYS3cmVFczdGuuIszYMBUujkmOEnB0%2Fww3RwaQxYofNIJAKF3pY%2FfBc9brbTtYD4tA80P%2F8HsfCTfP%2FfBU6hadcxJkCLe0Wqp3O14lfu0oOonmd5HU2J0f8iPv8SLxaVU3Joi3lkc18mj3%2BXq8bu8BRSPy3lrNFtcsmjPgSa89KS9MKW%2F5Nk1%2BjKFUZGV6aEzqlZCaFr5sWj215vAQ4ok8hhrgKcm%2FnuADSZ%2FfkhfmV3Be9%2BFh8uOjbnddy88VBMuL75NyNd%2BYm88e9XZhj4CSBYV3wkGzqW3YCPUHovWu6osLPugLQHNxhpwq2%2BgkwixOQ7xzAPsn9DzHQdBqp6JfM4NQnj2r%2BJGaH1y21%2BPrOvVE0weOjiGUbcSgdWMk8P7fL0ekDt6W5KpZ0QqNsyGGzs%2F9uG%2FC8r8WZw9%2BJsXbfeqQSVCT65VUrrVHmqz0OlAddNVlXiEuAmoEJe1j6e%2BMW7ZMOfnoMMGOqUBUYoKIfks8wt45s8jd2RiW8CBcxjaUd%2BRZhZ6rYbD633RHtic59rJlCbac1B30bzB28dIM61Ft1DWYGGp5QXht6cY79xrcQ9D7hCXh6aEFbrhrX8DE7e5HYUH1TmB7CajHe3Ch7Q1OKaaUcRk5YySE%2FKIQIt6ExYvrlKNHjzV4EB2sFHNSdSEuCf47UoQFByvU3FPU1EmBiI4gVmaBaVbGAI5vTOy&X-Amz-Signature=18695a7d3970f825eed7d9bfd00743a10b6ca26090c657526b37b5364d6d2f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCOFAUX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDk3d8YxHP5p76eEwApCzswZ%2F3mKOr%2FqFM0R%2BxftNsxUAIgW2X3ypjU%2BjbbjB9IhnkUnirKHgyvDEzMqeyr6Q0Q1%2Fgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLwVEjt9cVe67a%2BNKCrcAxQYadG5q87piMBAiB2ygg8azp2IC%2F04gSJ4bxtOuN2gYIDAfL8FaYkwTtmwQjW5dFIwFvOtR9zJ1E2tcEhdlVZKtic6G0lhsyDY1fNdA632rpB4NJULXYPuEdZX9gaCzmSlgZ6i7OMybT1o52U53XCSs%2FDODpXKKMONYS3cmVFczdGuuIszYMBUujkmOEnB0%2Fww3RwaQxYofNIJAKF3pY%2FfBc9brbTtYD4tA80P%2F8HsfCTfP%2FfBU6hadcxJkCLe0Wqp3O14lfu0oOonmd5HU2J0f8iPv8SLxaVU3Joi3lkc18mj3%2BXq8bu8BRSPy3lrNFtcsmjPgSa89KS9MKW%2F5Nk1%2BjKFUZGV6aEzqlZCaFr5sWj215vAQ4ok8hhrgKcm%2FnuADSZ%2FfkhfmV3Be9%2BFh8uOjbnddy88VBMuL75NyNd%2BYm88e9XZhj4CSBYV3wkGzqW3YCPUHovWu6osLPugLQHNxhpwq2%2BgkwixOQ7xzAPsn9DzHQdBqp6JfM4NQnj2r%2BJGaH1y21%2BPrOvVE0weOjiGUbcSgdWMk8P7fL0ekDt6W5KpZ0QqNsyGGzs%2F9uG%2FC8r8WZw9%2BJsXbfeqQSVCT65VUrrVHmqz0OlAddNVlXiEuAmoEJe1j6e%2BMW7ZMOfnoMMGOqUBUYoKIfks8wt45s8jd2RiW8CBcxjaUd%2BRZhZ6rYbD633RHtic59rJlCbac1B30bzB28dIM61Ft1DWYGGp5QXht6cY79xrcQ9D7hCXh6aEFbrhrX8DE7e5HYUH1TmB7CajHe3Ch7Q1OKaaUcRk5YySE%2FKIQIt6ExYvrlKNHjzV4EB2sFHNSdSEuCf47UoQFByvU3FPU1EmBiI4gVmaBaVbGAI5vTOy&X-Amz-Signature=3652110dd673d25959a956a7f47a57ac265c932e5c3e459aba4af8f027256688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCOFAUX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDk3d8YxHP5p76eEwApCzswZ%2F3mKOr%2FqFM0R%2BxftNsxUAIgW2X3ypjU%2BjbbjB9IhnkUnirKHgyvDEzMqeyr6Q0Q1%2Fgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLwVEjt9cVe67a%2BNKCrcAxQYadG5q87piMBAiB2ygg8azp2IC%2F04gSJ4bxtOuN2gYIDAfL8FaYkwTtmwQjW5dFIwFvOtR9zJ1E2tcEhdlVZKtic6G0lhsyDY1fNdA632rpB4NJULXYPuEdZX9gaCzmSlgZ6i7OMybT1o52U53XCSs%2FDODpXKKMONYS3cmVFczdGuuIszYMBUujkmOEnB0%2Fww3RwaQxYofNIJAKF3pY%2FfBc9brbTtYD4tA80P%2F8HsfCTfP%2FfBU6hadcxJkCLe0Wqp3O14lfu0oOonmd5HU2J0f8iPv8SLxaVU3Joi3lkc18mj3%2BXq8bu8BRSPy3lrNFtcsmjPgSa89KS9MKW%2F5Nk1%2BjKFUZGV6aEzqlZCaFr5sWj215vAQ4ok8hhrgKcm%2FnuADSZ%2FfkhfmV3Be9%2BFh8uOjbnddy88VBMuL75NyNd%2BYm88e9XZhj4CSBYV3wkGzqW3YCPUHovWu6osLPugLQHNxhpwq2%2BgkwixOQ7xzAPsn9DzHQdBqp6JfM4NQnj2r%2BJGaH1y21%2BPrOvVE0weOjiGUbcSgdWMk8P7fL0ekDt6W5KpZ0QqNsyGGzs%2F9uG%2FC8r8WZw9%2BJsXbfeqQSVCT65VUrrVHmqz0OlAddNVlXiEuAmoEJe1j6e%2BMW7ZMOfnoMMGOqUBUYoKIfks8wt45s8jd2RiW8CBcxjaUd%2BRZhZ6rYbD633RHtic59rJlCbac1B30bzB28dIM61Ft1DWYGGp5QXht6cY79xrcQ9D7hCXh6aEFbrhrX8DE7e5HYUH1TmB7CajHe3Ch7Q1OKaaUcRk5YySE%2FKIQIt6ExYvrlKNHjzV4EB2sFHNSdSEuCf47UoQFByvU3FPU1EmBiI4gVmaBaVbGAI5vTOy&X-Amz-Signature=424c05fa9216388948cb27cc81394135db0908a8617f006de2bc267d2408b07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCOFAUX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDk3d8YxHP5p76eEwApCzswZ%2F3mKOr%2FqFM0R%2BxftNsxUAIgW2X3ypjU%2BjbbjB9IhnkUnirKHgyvDEzMqeyr6Q0Q1%2Fgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLwVEjt9cVe67a%2BNKCrcAxQYadG5q87piMBAiB2ygg8azp2IC%2F04gSJ4bxtOuN2gYIDAfL8FaYkwTtmwQjW5dFIwFvOtR9zJ1E2tcEhdlVZKtic6G0lhsyDY1fNdA632rpB4NJULXYPuEdZX9gaCzmSlgZ6i7OMybT1o52U53XCSs%2FDODpXKKMONYS3cmVFczdGuuIszYMBUujkmOEnB0%2Fww3RwaQxYofNIJAKF3pY%2FfBc9brbTtYD4tA80P%2F8HsfCTfP%2FfBU6hadcxJkCLe0Wqp3O14lfu0oOonmd5HU2J0f8iPv8SLxaVU3Joi3lkc18mj3%2BXq8bu8BRSPy3lrNFtcsmjPgSa89KS9MKW%2F5Nk1%2BjKFUZGV6aEzqlZCaFr5sWj215vAQ4ok8hhrgKcm%2FnuADSZ%2FfkhfmV3Be9%2BFh8uOjbnddy88VBMuL75NyNd%2BYm88e9XZhj4CSBYV3wkGzqW3YCPUHovWu6osLPugLQHNxhpwq2%2BgkwixOQ7xzAPsn9DzHQdBqp6JfM4NQnj2r%2BJGaH1y21%2BPrOvVE0weOjiGUbcSgdWMk8P7fL0ekDt6W5KpZ0QqNsyGGzs%2F9uG%2FC8r8WZw9%2BJsXbfeqQSVCT65VUrrVHmqz0OlAddNVlXiEuAmoEJe1j6e%2BMW7ZMOfnoMMGOqUBUYoKIfks8wt45s8jd2RiW8CBcxjaUd%2BRZhZ6rYbD633RHtic59rJlCbac1B30bzB28dIM61Ft1DWYGGp5QXht6cY79xrcQ9D7hCXh6aEFbrhrX8DE7e5HYUH1TmB7CajHe3Ch7Q1OKaaUcRk5YySE%2FKIQIt6ExYvrlKNHjzV4EB2sFHNSdSEuCf47UoQFByvU3FPU1EmBiI4gVmaBaVbGAI5vTOy&X-Amz-Signature=35fd18a2ffc70dbd9a47d71f3f4223bbc4d9200bd3d6ea19e2686ccacd4fca42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
