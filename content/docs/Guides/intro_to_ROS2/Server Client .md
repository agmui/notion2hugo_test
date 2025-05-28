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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPQLIGY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeSJzM875hqftEz%2BameI2x1i4w7jLMNNOMTXe5A7NPkwIgecvbEck041q%2BSfJeHcYknUBRDkd0pl9PLx%2Bupx7B9hIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMQHOx9yV0KAvVLdbircAxBIsa0JWdPqTrUGhwi0QK1CmqEUiIlWkDHQNUgz51txOkA3WLbsmxVVDjE1XzlwqPtS2vXLqCMLtelu98fijAT8fgwGUFStvhSAgKaPcLSxM6XQCZIPqVE%2FKG4inS5OKEIfMsUCzn96iPyt08e36fcBsPsv3U1%2BclgAkVZTQLdqVFc620O1epvkL%2F9r97MG4ZpOvazwmgB3F4fIXxW%2FLJEdraEi8eMteuZ6OfgCqYQ2SUkTTDfSUQZ61BUdcDZzXNs%2FQrb56VVesePUZ7Jilh0LhU6MRAJztxA0tPHKxb%2FUSv4tlqIz4w9kk%2BU10uLCpeACKQpMkq5twNfVdpN%2BrpJMAZnhZ8zqqFs05RL5oAfPvAcW9gK8MOjBozEDHE%2BDa0RwfWvcQA2wgYpbrA1%2B%2FEE2q32auNJ2vMp%2FAdQCF9BFAG2uY2IhWjXKwo53WYavLa5MtFq5fpqG03zcwjMftR1WTeXQCpXHG1BN9mdJvAJ2yMc9xRsnGtSTwH9jG4XvqNkNc6RxqxpVVVJK4x%2B9VL6XYT330ZYlZuBT5XassLpmESRb9X3RpIOJ95bPxA9wy79V4RTIgeHACAlipjiuE8SRgSutnWsUbkQT1O3bDKekGykztMCLO6lTntmQMO2X2sEGOqUB0D55pGe3Mh%2F2A5ignq5Z4Z6f8QVbi9Qa7oRkSDuHHwOU1p4f65Ho6%2BnZ1ZxEwo6f1f%2B%2Bco5%2FUReJyV6To9woA%2FIhRXfQvYJp35e1MBGgZIGYt4%2FOoJLAc3OnQAbtiPEBWJfGmJT0eGQKfELiNmj8waw1dvuhLZbvIijgvG7EjJCOrkdz3Z83tXLqVZqLQ8WR%2FaOYFCkVVAPrFxgS%2FFs8%2BWrVJ8Pi&X-Amz-Signature=3598faecca3fc5f237e8fb4632fcf48295267bdeb9e0b794117f4cfaccc3bca7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPQLIGY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeSJzM875hqftEz%2BameI2x1i4w7jLMNNOMTXe5A7NPkwIgecvbEck041q%2BSfJeHcYknUBRDkd0pl9PLx%2Bupx7B9hIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMQHOx9yV0KAvVLdbircAxBIsa0JWdPqTrUGhwi0QK1CmqEUiIlWkDHQNUgz51txOkA3WLbsmxVVDjE1XzlwqPtS2vXLqCMLtelu98fijAT8fgwGUFStvhSAgKaPcLSxM6XQCZIPqVE%2FKG4inS5OKEIfMsUCzn96iPyt08e36fcBsPsv3U1%2BclgAkVZTQLdqVFc620O1epvkL%2F9r97MG4ZpOvazwmgB3F4fIXxW%2FLJEdraEi8eMteuZ6OfgCqYQ2SUkTTDfSUQZ61BUdcDZzXNs%2FQrb56VVesePUZ7Jilh0LhU6MRAJztxA0tPHKxb%2FUSv4tlqIz4w9kk%2BU10uLCpeACKQpMkq5twNfVdpN%2BrpJMAZnhZ8zqqFs05RL5oAfPvAcW9gK8MOjBozEDHE%2BDa0RwfWvcQA2wgYpbrA1%2B%2FEE2q32auNJ2vMp%2FAdQCF9BFAG2uY2IhWjXKwo53WYavLa5MtFq5fpqG03zcwjMftR1WTeXQCpXHG1BN9mdJvAJ2yMc9xRsnGtSTwH9jG4XvqNkNc6RxqxpVVVJK4x%2B9VL6XYT330ZYlZuBT5XassLpmESRb9X3RpIOJ95bPxA9wy79V4RTIgeHACAlipjiuE8SRgSutnWsUbkQT1O3bDKekGykztMCLO6lTntmQMO2X2sEGOqUB0D55pGe3Mh%2F2A5ignq5Z4Z6f8QVbi9Qa7oRkSDuHHwOU1p4f65Ho6%2BnZ1ZxEwo6f1f%2B%2Bco5%2FUReJyV6To9woA%2FIhRXfQvYJp35e1MBGgZIGYt4%2FOoJLAc3OnQAbtiPEBWJfGmJT0eGQKfELiNmj8waw1dvuhLZbvIijgvG7EjJCOrkdz3Z83tXLqVZqLQ8WR%2FaOYFCkVVAPrFxgS%2FFs8%2BWrVJ8Pi&X-Amz-Signature=ce7fbf196958e88e726a626a54843c8375f489e94c0e74c01ec6e40efd1ccb93&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPQLIGY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeSJzM875hqftEz%2BameI2x1i4w7jLMNNOMTXe5A7NPkwIgecvbEck041q%2BSfJeHcYknUBRDkd0pl9PLx%2Bupx7B9hIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMQHOx9yV0KAvVLdbircAxBIsa0JWdPqTrUGhwi0QK1CmqEUiIlWkDHQNUgz51txOkA3WLbsmxVVDjE1XzlwqPtS2vXLqCMLtelu98fijAT8fgwGUFStvhSAgKaPcLSxM6XQCZIPqVE%2FKG4inS5OKEIfMsUCzn96iPyt08e36fcBsPsv3U1%2BclgAkVZTQLdqVFc620O1epvkL%2F9r97MG4ZpOvazwmgB3F4fIXxW%2FLJEdraEi8eMteuZ6OfgCqYQ2SUkTTDfSUQZ61BUdcDZzXNs%2FQrb56VVesePUZ7Jilh0LhU6MRAJztxA0tPHKxb%2FUSv4tlqIz4w9kk%2BU10uLCpeACKQpMkq5twNfVdpN%2BrpJMAZnhZ8zqqFs05RL5oAfPvAcW9gK8MOjBozEDHE%2BDa0RwfWvcQA2wgYpbrA1%2B%2FEE2q32auNJ2vMp%2FAdQCF9BFAG2uY2IhWjXKwo53WYavLa5MtFq5fpqG03zcwjMftR1WTeXQCpXHG1BN9mdJvAJ2yMc9xRsnGtSTwH9jG4XvqNkNc6RxqxpVVVJK4x%2B9VL6XYT330ZYlZuBT5XassLpmESRb9X3RpIOJ95bPxA9wy79V4RTIgeHACAlipjiuE8SRgSutnWsUbkQT1O3bDKekGykztMCLO6lTntmQMO2X2sEGOqUB0D55pGe3Mh%2F2A5ignq5Z4Z6f8QVbi9Qa7oRkSDuHHwOU1p4f65Ho6%2BnZ1ZxEwo6f1f%2B%2Bco5%2FUReJyV6To9woA%2FIhRXfQvYJp35e1MBGgZIGYt4%2FOoJLAc3OnQAbtiPEBWJfGmJT0eGQKfELiNmj8waw1dvuhLZbvIijgvG7EjJCOrkdz3Z83tXLqVZqLQ8WR%2FaOYFCkVVAPrFxgS%2FFs8%2BWrVJ8Pi&X-Amz-Signature=6f5fbfd57dcd12a19af3592c8d5e3a99ad5acff63254af37b8556c6960dd5f82&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPQLIGY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeSJzM875hqftEz%2BameI2x1i4w7jLMNNOMTXe5A7NPkwIgecvbEck041q%2BSfJeHcYknUBRDkd0pl9PLx%2Bupx7B9hIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMQHOx9yV0KAvVLdbircAxBIsa0JWdPqTrUGhwi0QK1CmqEUiIlWkDHQNUgz51txOkA3WLbsmxVVDjE1XzlwqPtS2vXLqCMLtelu98fijAT8fgwGUFStvhSAgKaPcLSxM6XQCZIPqVE%2FKG4inS5OKEIfMsUCzn96iPyt08e36fcBsPsv3U1%2BclgAkVZTQLdqVFc620O1epvkL%2F9r97MG4ZpOvazwmgB3F4fIXxW%2FLJEdraEi8eMteuZ6OfgCqYQ2SUkTTDfSUQZ61BUdcDZzXNs%2FQrb56VVesePUZ7Jilh0LhU6MRAJztxA0tPHKxb%2FUSv4tlqIz4w9kk%2BU10uLCpeACKQpMkq5twNfVdpN%2BrpJMAZnhZ8zqqFs05RL5oAfPvAcW9gK8MOjBozEDHE%2BDa0RwfWvcQA2wgYpbrA1%2B%2FEE2q32auNJ2vMp%2FAdQCF9BFAG2uY2IhWjXKwo53WYavLa5MtFq5fpqG03zcwjMftR1WTeXQCpXHG1BN9mdJvAJ2yMc9xRsnGtSTwH9jG4XvqNkNc6RxqxpVVVJK4x%2B9VL6XYT330ZYlZuBT5XassLpmESRb9X3RpIOJ95bPxA9wy79V4RTIgeHACAlipjiuE8SRgSutnWsUbkQT1O3bDKekGykztMCLO6lTntmQMO2X2sEGOqUB0D55pGe3Mh%2F2A5ignq5Z4Z6f8QVbi9Qa7oRkSDuHHwOU1p4f65Ho6%2BnZ1ZxEwo6f1f%2B%2Bco5%2FUReJyV6To9woA%2FIhRXfQvYJp35e1MBGgZIGYt4%2FOoJLAc3OnQAbtiPEBWJfGmJT0eGQKfELiNmj8waw1dvuhLZbvIijgvG7EjJCOrkdz3Z83tXLqVZqLQ8WR%2FaOYFCkVVAPrFxgS%2FFs8%2BWrVJ8Pi&X-Amz-Signature=b57df5a9b4080b2fa93f8e139ae73237ce70faca4d760d8805a842c962a7154a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPQLIGY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeSJzM875hqftEz%2BameI2x1i4w7jLMNNOMTXe5A7NPkwIgecvbEck041q%2BSfJeHcYknUBRDkd0pl9PLx%2Bupx7B9hIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMQHOx9yV0KAvVLdbircAxBIsa0JWdPqTrUGhwi0QK1CmqEUiIlWkDHQNUgz51txOkA3WLbsmxVVDjE1XzlwqPtS2vXLqCMLtelu98fijAT8fgwGUFStvhSAgKaPcLSxM6XQCZIPqVE%2FKG4inS5OKEIfMsUCzn96iPyt08e36fcBsPsv3U1%2BclgAkVZTQLdqVFc620O1epvkL%2F9r97MG4ZpOvazwmgB3F4fIXxW%2FLJEdraEi8eMteuZ6OfgCqYQ2SUkTTDfSUQZ61BUdcDZzXNs%2FQrb56VVesePUZ7Jilh0LhU6MRAJztxA0tPHKxb%2FUSv4tlqIz4w9kk%2BU10uLCpeACKQpMkq5twNfVdpN%2BrpJMAZnhZ8zqqFs05RL5oAfPvAcW9gK8MOjBozEDHE%2BDa0RwfWvcQA2wgYpbrA1%2B%2FEE2q32auNJ2vMp%2FAdQCF9BFAG2uY2IhWjXKwo53WYavLa5MtFq5fpqG03zcwjMftR1WTeXQCpXHG1BN9mdJvAJ2yMc9xRsnGtSTwH9jG4XvqNkNc6RxqxpVVVJK4x%2B9VL6XYT330ZYlZuBT5XassLpmESRb9X3RpIOJ95bPxA9wy79V4RTIgeHACAlipjiuE8SRgSutnWsUbkQT1O3bDKekGykztMCLO6lTntmQMO2X2sEGOqUB0D55pGe3Mh%2F2A5ignq5Z4Z6f8QVbi9Qa7oRkSDuHHwOU1p4f65Ho6%2BnZ1ZxEwo6f1f%2B%2Bco5%2FUReJyV6To9woA%2FIhRXfQvYJp35e1MBGgZIGYt4%2FOoJLAc3OnQAbtiPEBWJfGmJT0eGQKfELiNmj8waw1dvuhLZbvIijgvG7EjJCOrkdz3Z83tXLqVZqLQ8WR%2FaOYFCkVVAPrFxgS%2FFs8%2BWrVJ8Pi&X-Amz-Signature=c6e4c3e8765fa85346b0cfca8819b812f8ffb83e7a07450ae2443290cefa336a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
