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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYANXQ6P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSx6dhlM3yZdW3XHUvPdKC9uu%2B6vmRmBRqk41QAitYewIgeKCMTlO189qprKzwiJMS7uSsZ8HBXxFuYTZRZmplKj4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLPKCRwA36CvSKnPsSrcA%2BV1659YeDYWcWd7tVRudVbo2yoRdX%2BZXj%2B28gmQtPtguiyk%2Bh8ySHySqn0Jf7XAKSZ7WwNAdlekoBLl6xho81BlOOajxx69CuJBqmFDvcMs%2FulsGfK7XOMvVbCvtRRcPHPlkyCXr8Itg2VH%2B41C1wQxMwQZNWLBYhtEjZmAGxo2Mm942h1iGwmhy2jRYYaTXawc5QyApjQqBVexPV1HRLwPAKuRigXd9OoK1H3B1U83c46qHJZnW4cEcu5ypdPahJGwvuVzuPPDooeN34se5HiBRzq3MBqhDhEvUFVkrJKVb13EGqBlbU%2F0BQ71sI83nK%2Bk6GP3Nwio56GjK9QEdI%2F1%2Blqd185fRAT0aM41BPIqvkMy%2F8QrPVVICX3OknG9qpph%2BLYbx2vlHUHpbNS76BoS6iBbh8zE6PkJG2YG5fTrKatI2gi0aWh%2FUjMI6q6IYAc0JAGFzzbnq1lkTOiu67z5xEaFu0AuTIm2jf754GDPZMU8mvl2vnuOYuGRzXlZ%2FTaECz4GgItWvN%2FCoHesIpn3WqkAbuEWmwxNqGSXqBB6UkzjIVS83PWaCXd9u8oBdgO%2BsOslGTH8Er%2BX%2BZ4BPYGBtT7OoxLQY7vJaixOosH6mtHvZ5MlVG88fqA%2FMNHE2sEGOqUBpS2ys8%2FtfiPmkJHmewXmUNi989%2FCGCwJyexfM9A79pGl2rjmRmsti1F7bzXRKnBj5Ewz6SsUc11MXwZCPHY4bgTY5WXkTNT6yQP0Zyi6tTLK%2FFyQ4CXAz5E07zuMYxUUmqVL2Jz7DNb5IgiCVAkb59KbuO%2BGcSrWwpLbR%2FM8wCQ329at5VifNxs0jB57SI%2BXjdNTT7GKaZldID3uK4meaKpAe4gO&X-Amz-Signature=5999dfcc879b9d8c77ceae6afd954474ffdc5845d4abf44da11a5aaeb13ee51f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYANXQ6P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSx6dhlM3yZdW3XHUvPdKC9uu%2B6vmRmBRqk41QAitYewIgeKCMTlO189qprKzwiJMS7uSsZ8HBXxFuYTZRZmplKj4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLPKCRwA36CvSKnPsSrcA%2BV1659YeDYWcWd7tVRudVbo2yoRdX%2BZXj%2B28gmQtPtguiyk%2Bh8ySHySqn0Jf7XAKSZ7WwNAdlekoBLl6xho81BlOOajxx69CuJBqmFDvcMs%2FulsGfK7XOMvVbCvtRRcPHPlkyCXr8Itg2VH%2B41C1wQxMwQZNWLBYhtEjZmAGxo2Mm942h1iGwmhy2jRYYaTXawc5QyApjQqBVexPV1HRLwPAKuRigXd9OoK1H3B1U83c46qHJZnW4cEcu5ypdPahJGwvuVzuPPDooeN34se5HiBRzq3MBqhDhEvUFVkrJKVb13EGqBlbU%2F0BQ71sI83nK%2Bk6GP3Nwio56GjK9QEdI%2F1%2Blqd185fRAT0aM41BPIqvkMy%2F8QrPVVICX3OknG9qpph%2BLYbx2vlHUHpbNS76BoS6iBbh8zE6PkJG2YG5fTrKatI2gi0aWh%2FUjMI6q6IYAc0JAGFzzbnq1lkTOiu67z5xEaFu0AuTIm2jf754GDPZMU8mvl2vnuOYuGRzXlZ%2FTaECz4GgItWvN%2FCoHesIpn3WqkAbuEWmwxNqGSXqBB6UkzjIVS83PWaCXd9u8oBdgO%2BsOslGTH8Er%2BX%2BZ4BPYGBtT7OoxLQY7vJaixOosH6mtHvZ5MlVG88fqA%2FMNHE2sEGOqUBpS2ys8%2FtfiPmkJHmewXmUNi989%2FCGCwJyexfM9A79pGl2rjmRmsti1F7bzXRKnBj5Ewz6SsUc11MXwZCPHY4bgTY5WXkTNT6yQP0Zyi6tTLK%2FFyQ4CXAz5E07zuMYxUUmqVL2Jz7DNb5IgiCVAkb59KbuO%2BGcSrWwpLbR%2FM8wCQ329at5VifNxs0jB57SI%2BXjdNTT7GKaZldID3uK4meaKpAe4gO&X-Amz-Signature=6b767f8c9a55c4f9ade95a360d32134be13a974ab13db6e2955b96670e4806b2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYANXQ6P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSx6dhlM3yZdW3XHUvPdKC9uu%2B6vmRmBRqk41QAitYewIgeKCMTlO189qprKzwiJMS7uSsZ8HBXxFuYTZRZmplKj4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLPKCRwA36CvSKnPsSrcA%2BV1659YeDYWcWd7tVRudVbo2yoRdX%2BZXj%2B28gmQtPtguiyk%2Bh8ySHySqn0Jf7XAKSZ7WwNAdlekoBLl6xho81BlOOajxx69CuJBqmFDvcMs%2FulsGfK7XOMvVbCvtRRcPHPlkyCXr8Itg2VH%2B41C1wQxMwQZNWLBYhtEjZmAGxo2Mm942h1iGwmhy2jRYYaTXawc5QyApjQqBVexPV1HRLwPAKuRigXd9OoK1H3B1U83c46qHJZnW4cEcu5ypdPahJGwvuVzuPPDooeN34se5HiBRzq3MBqhDhEvUFVkrJKVb13EGqBlbU%2F0BQ71sI83nK%2Bk6GP3Nwio56GjK9QEdI%2F1%2Blqd185fRAT0aM41BPIqvkMy%2F8QrPVVICX3OknG9qpph%2BLYbx2vlHUHpbNS76BoS6iBbh8zE6PkJG2YG5fTrKatI2gi0aWh%2FUjMI6q6IYAc0JAGFzzbnq1lkTOiu67z5xEaFu0AuTIm2jf754GDPZMU8mvl2vnuOYuGRzXlZ%2FTaECz4GgItWvN%2FCoHesIpn3WqkAbuEWmwxNqGSXqBB6UkzjIVS83PWaCXd9u8oBdgO%2BsOslGTH8Er%2BX%2BZ4BPYGBtT7OoxLQY7vJaixOosH6mtHvZ5MlVG88fqA%2FMNHE2sEGOqUBpS2ys8%2FtfiPmkJHmewXmUNi989%2FCGCwJyexfM9A79pGl2rjmRmsti1F7bzXRKnBj5Ewz6SsUc11MXwZCPHY4bgTY5WXkTNT6yQP0Zyi6tTLK%2FFyQ4CXAz5E07zuMYxUUmqVL2Jz7DNb5IgiCVAkb59KbuO%2BGcSrWwpLbR%2FM8wCQ329at5VifNxs0jB57SI%2BXjdNTT7GKaZldID3uK4meaKpAe4gO&X-Amz-Signature=dcad3ce34b326eff8385bf2c27cf83c3369ef0f9764e4941a7aa4edb63aa2b72&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYANXQ6P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSx6dhlM3yZdW3XHUvPdKC9uu%2B6vmRmBRqk41QAitYewIgeKCMTlO189qprKzwiJMS7uSsZ8HBXxFuYTZRZmplKj4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLPKCRwA36CvSKnPsSrcA%2BV1659YeDYWcWd7tVRudVbo2yoRdX%2BZXj%2B28gmQtPtguiyk%2Bh8ySHySqn0Jf7XAKSZ7WwNAdlekoBLl6xho81BlOOajxx69CuJBqmFDvcMs%2FulsGfK7XOMvVbCvtRRcPHPlkyCXr8Itg2VH%2B41C1wQxMwQZNWLBYhtEjZmAGxo2Mm942h1iGwmhy2jRYYaTXawc5QyApjQqBVexPV1HRLwPAKuRigXd9OoK1H3B1U83c46qHJZnW4cEcu5ypdPahJGwvuVzuPPDooeN34se5HiBRzq3MBqhDhEvUFVkrJKVb13EGqBlbU%2F0BQ71sI83nK%2Bk6GP3Nwio56GjK9QEdI%2F1%2Blqd185fRAT0aM41BPIqvkMy%2F8QrPVVICX3OknG9qpph%2BLYbx2vlHUHpbNS76BoS6iBbh8zE6PkJG2YG5fTrKatI2gi0aWh%2FUjMI6q6IYAc0JAGFzzbnq1lkTOiu67z5xEaFu0AuTIm2jf754GDPZMU8mvl2vnuOYuGRzXlZ%2FTaECz4GgItWvN%2FCoHesIpn3WqkAbuEWmwxNqGSXqBB6UkzjIVS83PWaCXd9u8oBdgO%2BsOslGTH8Er%2BX%2BZ4BPYGBtT7OoxLQY7vJaixOosH6mtHvZ5MlVG88fqA%2FMNHE2sEGOqUBpS2ys8%2FtfiPmkJHmewXmUNi989%2FCGCwJyexfM9A79pGl2rjmRmsti1F7bzXRKnBj5Ewz6SsUc11MXwZCPHY4bgTY5WXkTNT6yQP0Zyi6tTLK%2FFyQ4CXAz5E07zuMYxUUmqVL2Jz7DNb5IgiCVAkb59KbuO%2BGcSrWwpLbR%2FM8wCQ329at5VifNxs0jB57SI%2BXjdNTT7GKaZldID3uK4meaKpAe4gO&X-Amz-Signature=45fe16e2c093e2a65a2faa84f8b07be5d0a5f4d9b22181e449eef48fa7f87966&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYANXQ6P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSx6dhlM3yZdW3XHUvPdKC9uu%2B6vmRmBRqk41QAitYewIgeKCMTlO189qprKzwiJMS7uSsZ8HBXxFuYTZRZmplKj4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLPKCRwA36CvSKnPsSrcA%2BV1659YeDYWcWd7tVRudVbo2yoRdX%2BZXj%2B28gmQtPtguiyk%2Bh8ySHySqn0Jf7XAKSZ7WwNAdlekoBLl6xho81BlOOajxx69CuJBqmFDvcMs%2FulsGfK7XOMvVbCvtRRcPHPlkyCXr8Itg2VH%2B41C1wQxMwQZNWLBYhtEjZmAGxo2Mm942h1iGwmhy2jRYYaTXawc5QyApjQqBVexPV1HRLwPAKuRigXd9OoK1H3B1U83c46qHJZnW4cEcu5ypdPahJGwvuVzuPPDooeN34se5HiBRzq3MBqhDhEvUFVkrJKVb13EGqBlbU%2F0BQ71sI83nK%2Bk6GP3Nwio56GjK9QEdI%2F1%2Blqd185fRAT0aM41BPIqvkMy%2F8QrPVVICX3OknG9qpph%2BLYbx2vlHUHpbNS76BoS6iBbh8zE6PkJG2YG5fTrKatI2gi0aWh%2FUjMI6q6IYAc0JAGFzzbnq1lkTOiu67z5xEaFu0AuTIm2jf754GDPZMU8mvl2vnuOYuGRzXlZ%2FTaECz4GgItWvN%2FCoHesIpn3WqkAbuEWmwxNqGSXqBB6UkzjIVS83PWaCXd9u8oBdgO%2BsOslGTH8Er%2BX%2BZ4BPYGBtT7OoxLQY7vJaixOosH6mtHvZ5MlVG88fqA%2FMNHE2sEGOqUBpS2ys8%2FtfiPmkJHmewXmUNi989%2FCGCwJyexfM9A79pGl2rjmRmsti1F7bzXRKnBj5Ewz6SsUc11MXwZCPHY4bgTY5WXkTNT6yQP0Zyi6tTLK%2FFyQ4CXAz5E07zuMYxUUmqVL2Jz7DNb5IgiCVAkb59KbuO%2BGcSrWwpLbR%2FM8wCQ329at5VifNxs0jB57SI%2BXjdNTT7GKaZldID3uK4meaKpAe4gO&X-Amz-Signature=79c91b4f9d6e843668db6fcdce94778ba6c2640b3d7b304927e31d4ff6531682&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
