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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRETDSU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD6PDOPR6OjEU6X5xn1BCB3mGGnxUR6veUBS2ngDTWUgwIgcWkECKPHFVjHY%2Bz39eFAYv7Uy5UqytR1Cj1%2BOUfIVuEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe11EfFikjxngvIRSrcA%2F5%2FBS3lJ7NedjQdiMMtecqxBweRCvZb%2Ft1BiNCVVpCcvIG0LpLg2tJIKY2%2BpHi4mmrjvM1skPh1JF0ynk0SMrx8Q%2BMG4aaK6Ba1Nu5UYeVL4hOBm1PwNW%2Fjjh89brzAxO8djcR9xrmlYCXwJBLrsuiXNxhJHLxKJU%2F4%2Bpcca0b5AQd7cR9C00JDUVQW3TT7hjyeSwzafEyqGMaw3qNH7uLTNYXeNV0y7KsoO%2FhcW1l%2Fhtchy%2FaPglzf0q6AAZqu%2B1eFahjIhNyBjVBnN39R61alAXDSjh4gLnLSxhoLnbPAjSA2t%2FXEn0sBYetOeWDLTv4PhiqY4ExIdoTRRkqTDcYQpc%2BnwuEgde6jfLRGi9tZG%2FlGebn568EJ%2F1OPbALhdIIocpNxTdFPn%2F5cQzGr7AkWlLDKRsW1kJvA%2BHBmOJ68UNzl5FMYNsTe1NZQWC8cNzY%2FS4UmJb4r%2B%2BQr7%2FSIg2AUVCwWmux2%2Bw7MEhrNkj0ZMmvl2Qa%2BWAN5bfEgst9YcKZhKylz3TJMxqySA1a43QhbtqdWXSEG1des2jfWVv1pqU6rgt%2BWBTreMfSaivIWnqhLpbR%2Fy9I07lkqXXtQsZW7tWBmF36EJvdj7Gb5p76BJdUBdPR7LO1m%2BxpIMLvivMEGOqUByrtMH3lggEwfMT%2BxvpxTfNNb8mSmcgOZkO%2BL6WfEwh4triuhOXHTZBfHU1r3IgYR1YtcUDyxLSeYY9BoN8zSMuno6dGeM6QmOBhfPdFNXoLecMAgIOvntjPyDajCpTO1X63dIWoF2rHdDmu9JdYTjThf2htmj312xKgU9dsCZxs9MLR7R1kgBLoKaiZZ3tfQ37DHSVLAx6oI4IWY8W866MCu3Yja&X-Amz-Signature=33ee783cc73fcdefd924437b925b8d05200e2a53b11511a4e9ffd8547872cbe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRETDSU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD6PDOPR6OjEU6X5xn1BCB3mGGnxUR6veUBS2ngDTWUgwIgcWkECKPHFVjHY%2Bz39eFAYv7Uy5UqytR1Cj1%2BOUfIVuEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe11EfFikjxngvIRSrcA%2F5%2FBS3lJ7NedjQdiMMtecqxBweRCvZb%2Ft1BiNCVVpCcvIG0LpLg2tJIKY2%2BpHi4mmrjvM1skPh1JF0ynk0SMrx8Q%2BMG4aaK6Ba1Nu5UYeVL4hOBm1PwNW%2Fjjh89brzAxO8djcR9xrmlYCXwJBLrsuiXNxhJHLxKJU%2F4%2Bpcca0b5AQd7cR9C00JDUVQW3TT7hjyeSwzafEyqGMaw3qNH7uLTNYXeNV0y7KsoO%2FhcW1l%2Fhtchy%2FaPglzf0q6AAZqu%2B1eFahjIhNyBjVBnN39R61alAXDSjh4gLnLSxhoLnbPAjSA2t%2FXEn0sBYetOeWDLTv4PhiqY4ExIdoTRRkqTDcYQpc%2BnwuEgde6jfLRGi9tZG%2FlGebn568EJ%2F1OPbALhdIIocpNxTdFPn%2F5cQzGr7AkWlLDKRsW1kJvA%2BHBmOJ68UNzl5FMYNsTe1NZQWC8cNzY%2FS4UmJb4r%2B%2BQr7%2FSIg2AUVCwWmux2%2Bw7MEhrNkj0ZMmvl2Qa%2BWAN5bfEgst9YcKZhKylz3TJMxqySA1a43QhbtqdWXSEG1des2jfWVv1pqU6rgt%2BWBTreMfSaivIWnqhLpbR%2Fy9I07lkqXXtQsZW7tWBmF36EJvdj7Gb5p76BJdUBdPR7LO1m%2BxpIMLvivMEGOqUByrtMH3lggEwfMT%2BxvpxTfNNb8mSmcgOZkO%2BL6WfEwh4triuhOXHTZBfHU1r3IgYR1YtcUDyxLSeYY9BoN8zSMuno6dGeM6QmOBhfPdFNXoLecMAgIOvntjPyDajCpTO1X63dIWoF2rHdDmu9JdYTjThf2htmj312xKgU9dsCZxs9MLR7R1kgBLoKaiZZ3tfQ37DHSVLAx6oI4IWY8W866MCu3Yja&X-Amz-Signature=fe16975fb9967b54cc95730aa576f07bcdb7e11f794b0bc205acb5d108e67903&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRETDSU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD6PDOPR6OjEU6X5xn1BCB3mGGnxUR6veUBS2ngDTWUgwIgcWkECKPHFVjHY%2Bz39eFAYv7Uy5UqytR1Cj1%2BOUfIVuEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe11EfFikjxngvIRSrcA%2F5%2FBS3lJ7NedjQdiMMtecqxBweRCvZb%2Ft1BiNCVVpCcvIG0LpLg2tJIKY2%2BpHi4mmrjvM1skPh1JF0ynk0SMrx8Q%2BMG4aaK6Ba1Nu5UYeVL4hOBm1PwNW%2Fjjh89brzAxO8djcR9xrmlYCXwJBLrsuiXNxhJHLxKJU%2F4%2Bpcca0b5AQd7cR9C00JDUVQW3TT7hjyeSwzafEyqGMaw3qNH7uLTNYXeNV0y7KsoO%2FhcW1l%2Fhtchy%2FaPglzf0q6AAZqu%2B1eFahjIhNyBjVBnN39R61alAXDSjh4gLnLSxhoLnbPAjSA2t%2FXEn0sBYetOeWDLTv4PhiqY4ExIdoTRRkqTDcYQpc%2BnwuEgde6jfLRGi9tZG%2FlGebn568EJ%2F1OPbALhdIIocpNxTdFPn%2F5cQzGr7AkWlLDKRsW1kJvA%2BHBmOJ68UNzl5FMYNsTe1NZQWC8cNzY%2FS4UmJb4r%2B%2BQr7%2FSIg2AUVCwWmux2%2Bw7MEhrNkj0ZMmvl2Qa%2BWAN5bfEgst9YcKZhKylz3TJMxqySA1a43QhbtqdWXSEG1des2jfWVv1pqU6rgt%2BWBTreMfSaivIWnqhLpbR%2Fy9I07lkqXXtQsZW7tWBmF36EJvdj7Gb5p76BJdUBdPR7LO1m%2BxpIMLvivMEGOqUByrtMH3lggEwfMT%2BxvpxTfNNb8mSmcgOZkO%2BL6WfEwh4triuhOXHTZBfHU1r3IgYR1YtcUDyxLSeYY9BoN8zSMuno6dGeM6QmOBhfPdFNXoLecMAgIOvntjPyDajCpTO1X63dIWoF2rHdDmu9JdYTjThf2htmj312xKgU9dsCZxs9MLR7R1kgBLoKaiZZ3tfQ37DHSVLAx6oI4IWY8W866MCu3Yja&X-Amz-Signature=937b67faf3ff71598783645b5f86825aa4a3a48905ac5f712b3750014a16064f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRETDSU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD6PDOPR6OjEU6X5xn1BCB3mGGnxUR6veUBS2ngDTWUgwIgcWkECKPHFVjHY%2Bz39eFAYv7Uy5UqytR1Cj1%2BOUfIVuEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe11EfFikjxngvIRSrcA%2F5%2FBS3lJ7NedjQdiMMtecqxBweRCvZb%2Ft1BiNCVVpCcvIG0LpLg2tJIKY2%2BpHi4mmrjvM1skPh1JF0ynk0SMrx8Q%2BMG4aaK6Ba1Nu5UYeVL4hOBm1PwNW%2Fjjh89brzAxO8djcR9xrmlYCXwJBLrsuiXNxhJHLxKJU%2F4%2Bpcca0b5AQd7cR9C00JDUVQW3TT7hjyeSwzafEyqGMaw3qNH7uLTNYXeNV0y7KsoO%2FhcW1l%2Fhtchy%2FaPglzf0q6AAZqu%2B1eFahjIhNyBjVBnN39R61alAXDSjh4gLnLSxhoLnbPAjSA2t%2FXEn0sBYetOeWDLTv4PhiqY4ExIdoTRRkqTDcYQpc%2BnwuEgde6jfLRGi9tZG%2FlGebn568EJ%2F1OPbALhdIIocpNxTdFPn%2F5cQzGr7AkWlLDKRsW1kJvA%2BHBmOJ68UNzl5FMYNsTe1NZQWC8cNzY%2FS4UmJb4r%2B%2BQr7%2FSIg2AUVCwWmux2%2Bw7MEhrNkj0ZMmvl2Qa%2BWAN5bfEgst9YcKZhKylz3TJMxqySA1a43QhbtqdWXSEG1des2jfWVv1pqU6rgt%2BWBTreMfSaivIWnqhLpbR%2Fy9I07lkqXXtQsZW7tWBmF36EJvdj7Gb5p76BJdUBdPR7LO1m%2BxpIMLvivMEGOqUByrtMH3lggEwfMT%2BxvpxTfNNb8mSmcgOZkO%2BL6WfEwh4triuhOXHTZBfHU1r3IgYR1YtcUDyxLSeYY9BoN8zSMuno6dGeM6QmOBhfPdFNXoLecMAgIOvntjPyDajCpTO1X63dIWoF2rHdDmu9JdYTjThf2htmj312xKgU9dsCZxs9MLR7R1kgBLoKaiZZ3tfQ37DHSVLAx6oI4IWY8W866MCu3Yja&X-Amz-Signature=036ae46281b00f5cfddf5b8668d6a2cc4f54f8f36049629161ab5c3c2ed839bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRETDSU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD6PDOPR6OjEU6X5xn1BCB3mGGnxUR6veUBS2ngDTWUgwIgcWkECKPHFVjHY%2Bz39eFAYv7Uy5UqytR1Cj1%2BOUfIVuEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe11EfFikjxngvIRSrcA%2F5%2FBS3lJ7NedjQdiMMtecqxBweRCvZb%2Ft1BiNCVVpCcvIG0LpLg2tJIKY2%2BpHi4mmrjvM1skPh1JF0ynk0SMrx8Q%2BMG4aaK6Ba1Nu5UYeVL4hOBm1PwNW%2Fjjh89brzAxO8djcR9xrmlYCXwJBLrsuiXNxhJHLxKJU%2F4%2Bpcca0b5AQd7cR9C00JDUVQW3TT7hjyeSwzafEyqGMaw3qNH7uLTNYXeNV0y7KsoO%2FhcW1l%2Fhtchy%2FaPglzf0q6AAZqu%2B1eFahjIhNyBjVBnN39R61alAXDSjh4gLnLSxhoLnbPAjSA2t%2FXEn0sBYetOeWDLTv4PhiqY4ExIdoTRRkqTDcYQpc%2BnwuEgde6jfLRGi9tZG%2FlGebn568EJ%2F1OPbALhdIIocpNxTdFPn%2F5cQzGr7AkWlLDKRsW1kJvA%2BHBmOJ68UNzl5FMYNsTe1NZQWC8cNzY%2FS4UmJb4r%2B%2BQr7%2FSIg2AUVCwWmux2%2Bw7MEhrNkj0ZMmvl2Qa%2BWAN5bfEgst9YcKZhKylz3TJMxqySA1a43QhbtqdWXSEG1des2jfWVv1pqU6rgt%2BWBTreMfSaivIWnqhLpbR%2Fy9I07lkqXXtQsZW7tWBmF36EJvdj7Gb5p76BJdUBdPR7LO1m%2BxpIMLvivMEGOqUByrtMH3lggEwfMT%2BxvpxTfNNb8mSmcgOZkO%2BL6WfEwh4triuhOXHTZBfHU1r3IgYR1YtcUDyxLSeYY9BoN8zSMuno6dGeM6QmOBhfPdFNXoLecMAgIOvntjPyDajCpTO1X63dIWoF2rHdDmu9JdYTjThf2htmj312xKgU9dsCZxs9MLR7R1kgBLoKaiZZ3tfQ37DHSVLAx6oI4IWY8W866MCu3Yja&X-Amz-Signature=0c079deb8d942a15ca6ace42b1a5914907bf2fb1899e8b0a215ef1a47dc02232&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
