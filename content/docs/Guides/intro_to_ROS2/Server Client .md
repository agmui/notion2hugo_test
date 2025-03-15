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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYOF3PQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVExTXxpx8h%2FGAI9dAe7H2QnGAXQzo5gu1gwPUfq%2FbJAiAELCmo9nndH4gufDYoAd5D5Cc4Yy%2FpkTVa19qKVmBdfyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMhlKzpMYMJ06Eut5LKtwDbjDGb%2FXWe%2BYWTWX9mmetWM0mYPvJRYOZuiB76fRkFmIZ4cuNq7Mn9pVpebzXUu92I7REqR1Otr78jUWSz28L8CEWh6EHopja8qzgZ8TkO1Ykh7jURDe2zkal1VDM5GbNGYC98sHRhcJACgCjKll3IhL2yDH1C72k80PbCb27Q7F9YoTM7fUmkeeK0Sn%2FsTJ0OhI%2FB55WQnkoCvePrG6uTbkQCLiBuUm1ckGTMGSofac9gwGoUb%2FRS1hl72rmORuDQvTY7FKK1NVykj8FTP7QPlPop01GBx1d3ckBs3B18xNF6Df3GRz8KuJ%2F7RHWksaoqcBd70f3a2XrB3f7nPiQ4hP9Mq2hOfGk82AqTIqwb%2FojbFPbjSf9c6O75LDevqX8el0ggpv4gLYIOiq%2BnburKAW3wH%2BemeqgLgkhp6FMavdHzR2nNMywamIHqyzl4xGLH2hCjN%2Be5Mpe6k8cdgGMdCLHXc8laZzhxOMJkRQ6rxIN1PZtnW0EawLpcbZ1wX559dTBEZGgU9ybG5e8KkBXT4G65uiLRQqafXrNVqhgl%2FErZaRCzMTP%2F9%2Fgwh3DadDq944lRwC7e2zQqSgXjDC4i1Xd%2FsOObUl2LQAuLflmao7JPT3c46v1SJUNGHYwu4HYvgY6pgFmOZrOYtt7tOzV4aOwt7Y60N6RMTvttpD1%2B058muKdRM6Qm6UadC5YCGtZq2lfFoKMKR2IDqMqizH2hzo5OGHiUUIhi2pbHJOmbkA5hbAm8yD0eRZleekIcBN8HnRiX76ZvALbonUzA7NspxXYVgCyznV3vOP3zj72JqVZArPEPUw0QzjmhZeUSfOqtHGQLzaK4GKahU10d%2BUYhxIW6oIWZMjCE%2BiE&X-Amz-Signature=45fd38e3f06a3577fb07e6d9795104998544cb72336f98e3687972e2d2b31771&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYOF3PQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVExTXxpx8h%2FGAI9dAe7H2QnGAXQzo5gu1gwPUfq%2FbJAiAELCmo9nndH4gufDYoAd5D5Cc4Yy%2FpkTVa19qKVmBdfyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMhlKzpMYMJ06Eut5LKtwDbjDGb%2FXWe%2BYWTWX9mmetWM0mYPvJRYOZuiB76fRkFmIZ4cuNq7Mn9pVpebzXUu92I7REqR1Otr78jUWSz28L8CEWh6EHopja8qzgZ8TkO1Ykh7jURDe2zkal1VDM5GbNGYC98sHRhcJACgCjKll3IhL2yDH1C72k80PbCb27Q7F9YoTM7fUmkeeK0Sn%2FsTJ0OhI%2FB55WQnkoCvePrG6uTbkQCLiBuUm1ckGTMGSofac9gwGoUb%2FRS1hl72rmORuDQvTY7FKK1NVykj8FTP7QPlPop01GBx1d3ckBs3B18xNF6Df3GRz8KuJ%2F7RHWksaoqcBd70f3a2XrB3f7nPiQ4hP9Mq2hOfGk82AqTIqwb%2FojbFPbjSf9c6O75LDevqX8el0ggpv4gLYIOiq%2BnburKAW3wH%2BemeqgLgkhp6FMavdHzR2nNMywamIHqyzl4xGLH2hCjN%2Be5Mpe6k8cdgGMdCLHXc8laZzhxOMJkRQ6rxIN1PZtnW0EawLpcbZ1wX559dTBEZGgU9ybG5e8KkBXT4G65uiLRQqafXrNVqhgl%2FErZaRCzMTP%2F9%2Fgwh3DadDq944lRwC7e2zQqSgXjDC4i1Xd%2FsOObUl2LQAuLflmao7JPT3c46v1SJUNGHYwu4HYvgY6pgFmOZrOYtt7tOzV4aOwt7Y60N6RMTvttpD1%2B058muKdRM6Qm6UadC5YCGtZq2lfFoKMKR2IDqMqizH2hzo5OGHiUUIhi2pbHJOmbkA5hbAm8yD0eRZleekIcBN8HnRiX76ZvALbonUzA7NspxXYVgCyznV3vOP3zj72JqVZArPEPUw0QzjmhZeUSfOqtHGQLzaK4GKahU10d%2BUYhxIW6oIWZMjCE%2BiE&X-Amz-Signature=039179002d893e191494ab847d54cf9355e4f067feacb2155d320319bb51e500&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYOF3PQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVExTXxpx8h%2FGAI9dAe7H2QnGAXQzo5gu1gwPUfq%2FbJAiAELCmo9nndH4gufDYoAd5D5Cc4Yy%2FpkTVa19qKVmBdfyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMhlKzpMYMJ06Eut5LKtwDbjDGb%2FXWe%2BYWTWX9mmetWM0mYPvJRYOZuiB76fRkFmIZ4cuNq7Mn9pVpebzXUu92I7REqR1Otr78jUWSz28L8CEWh6EHopja8qzgZ8TkO1Ykh7jURDe2zkal1VDM5GbNGYC98sHRhcJACgCjKll3IhL2yDH1C72k80PbCb27Q7F9YoTM7fUmkeeK0Sn%2FsTJ0OhI%2FB55WQnkoCvePrG6uTbkQCLiBuUm1ckGTMGSofac9gwGoUb%2FRS1hl72rmORuDQvTY7FKK1NVykj8FTP7QPlPop01GBx1d3ckBs3B18xNF6Df3GRz8KuJ%2F7RHWksaoqcBd70f3a2XrB3f7nPiQ4hP9Mq2hOfGk82AqTIqwb%2FojbFPbjSf9c6O75LDevqX8el0ggpv4gLYIOiq%2BnburKAW3wH%2BemeqgLgkhp6FMavdHzR2nNMywamIHqyzl4xGLH2hCjN%2Be5Mpe6k8cdgGMdCLHXc8laZzhxOMJkRQ6rxIN1PZtnW0EawLpcbZ1wX559dTBEZGgU9ybG5e8KkBXT4G65uiLRQqafXrNVqhgl%2FErZaRCzMTP%2F9%2Fgwh3DadDq944lRwC7e2zQqSgXjDC4i1Xd%2FsOObUl2LQAuLflmao7JPT3c46v1SJUNGHYwu4HYvgY6pgFmOZrOYtt7tOzV4aOwt7Y60N6RMTvttpD1%2B058muKdRM6Qm6UadC5YCGtZq2lfFoKMKR2IDqMqizH2hzo5OGHiUUIhi2pbHJOmbkA5hbAm8yD0eRZleekIcBN8HnRiX76ZvALbonUzA7NspxXYVgCyznV3vOP3zj72JqVZArPEPUw0QzjmhZeUSfOqtHGQLzaK4GKahU10d%2BUYhxIW6oIWZMjCE%2BiE&X-Amz-Signature=b00982e84fab98372d41787ff313f065f4cba83d6ec4608cde54c5b2069c6b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYOF3PQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVExTXxpx8h%2FGAI9dAe7H2QnGAXQzo5gu1gwPUfq%2FbJAiAELCmo9nndH4gufDYoAd5D5Cc4Yy%2FpkTVa19qKVmBdfyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMhlKzpMYMJ06Eut5LKtwDbjDGb%2FXWe%2BYWTWX9mmetWM0mYPvJRYOZuiB76fRkFmIZ4cuNq7Mn9pVpebzXUu92I7REqR1Otr78jUWSz28L8CEWh6EHopja8qzgZ8TkO1Ykh7jURDe2zkal1VDM5GbNGYC98sHRhcJACgCjKll3IhL2yDH1C72k80PbCb27Q7F9YoTM7fUmkeeK0Sn%2FsTJ0OhI%2FB55WQnkoCvePrG6uTbkQCLiBuUm1ckGTMGSofac9gwGoUb%2FRS1hl72rmORuDQvTY7FKK1NVykj8FTP7QPlPop01GBx1d3ckBs3B18xNF6Df3GRz8KuJ%2F7RHWksaoqcBd70f3a2XrB3f7nPiQ4hP9Mq2hOfGk82AqTIqwb%2FojbFPbjSf9c6O75LDevqX8el0ggpv4gLYIOiq%2BnburKAW3wH%2BemeqgLgkhp6FMavdHzR2nNMywamIHqyzl4xGLH2hCjN%2Be5Mpe6k8cdgGMdCLHXc8laZzhxOMJkRQ6rxIN1PZtnW0EawLpcbZ1wX559dTBEZGgU9ybG5e8KkBXT4G65uiLRQqafXrNVqhgl%2FErZaRCzMTP%2F9%2Fgwh3DadDq944lRwC7e2zQqSgXjDC4i1Xd%2FsOObUl2LQAuLflmao7JPT3c46v1SJUNGHYwu4HYvgY6pgFmOZrOYtt7tOzV4aOwt7Y60N6RMTvttpD1%2B058muKdRM6Qm6UadC5YCGtZq2lfFoKMKR2IDqMqizH2hzo5OGHiUUIhi2pbHJOmbkA5hbAm8yD0eRZleekIcBN8HnRiX76ZvALbonUzA7NspxXYVgCyznV3vOP3zj72JqVZArPEPUw0QzjmhZeUSfOqtHGQLzaK4GKahU10d%2BUYhxIW6oIWZMjCE%2BiE&X-Amz-Signature=d6111c98974f44fa64df83e4802aa464db7a37f28a0495875b934fe29129aa98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYOF3PQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVExTXxpx8h%2FGAI9dAe7H2QnGAXQzo5gu1gwPUfq%2FbJAiAELCmo9nndH4gufDYoAd5D5Cc4Yy%2FpkTVa19qKVmBdfyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMhlKzpMYMJ06Eut5LKtwDbjDGb%2FXWe%2BYWTWX9mmetWM0mYPvJRYOZuiB76fRkFmIZ4cuNq7Mn9pVpebzXUu92I7REqR1Otr78jUWSz28L8CEWh6EHopja8qzgZ8TkO1Ykh7jURDe2zkal1VDM5GbNGYC98sHRhcJACgCjKll3IhL2yDH1C72k80PbCb27Q7F9YoTM7fUmkeeK0Sn%2FsTJ0OhI%2FB55WQnkoCvePrG6uTbkQCLiBuUm1ckGTMGSofac9gwGoUb%2FRS1hl72rmORuDQvTY7FKK1NVykj8FTP7QPlPop01GBx1d3ckBs3B18xNF6Df3GRz8KuJ%2F7RHWksaoqcBd70f3a2XrB3f7nPiQ4hP9Mq2hOfGk82AqTIqwb%2FojbFPbjSf9c6O75LDevqX8el0ggpv4gLYIOiq%2BnburKAW3wH%2BemeqgLgkhp6FMavdHzR2nNMywamIHqyzl4xGLH2hCjN%2Be5Mpe6k8cdgGMdCLHXc8laZzhxOMJkRQ6rxIN1PZtnW0EawLpcbZ1wX559dTBEZGgU9ybG5e8KkBXT4G65uiLRQqafXrNVqhgl%2FErZaRCzMTP%2F9%2Fgwh3DadDq944lRwC7e2zQqSgXjDC4i1Xd%2FsOObUl2LQAuLflmao7JPT3c46v1SJUNGHYwu4HYvgY6pgFmOZrOYtt7tOzV4aOwt7Y60N6RMTvttpD1%2B058muKdRM6Qm6UadC5YCGtZq2lfFoKMKR2IDqMqizH2hzo5OGHiUUIhi2pbHJOmbkA5hbAm8yD0eRZleekIcBN8HnRiX76ZvALbonUzA7NspxXYVgCyznV3vOP3zj72JqVZArPEPUw0QzjmhZeUSfOqtHGQLzaK4GKahU10d%2BUYhxIW6oIWZMjCE%2BiE&X-Amz-Signature=acc73755a045f236c4d9c7f0da75f7ec53b15fc5ac56af32d9f97def91d9b197&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
