---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3JIY5F%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FWi4EBHme0NKaG%2BR7IwVu91kroc8h%2BnXjgD%2Fs%2BX3N9AiAsTy41NmvzmERLys1AYGWo33sB%2FCtvJ023SdYkN1k0zSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFd2xhJk19JcO%2B6PDKtwDjWRf%2BLt%2B0uIxoiWl%2Fm7NL9FQTFKD8V6xuU3%2FRDvfuy%2BHtgoGaEs%2FzHp87Z2Qz6EjKeMqycI%2F6HwEBqQIeSQSkiIKLblnCsat6brxPmvkVBGF60aCsnwbUuCA0O%2FGM2I%2BM6UIOvC%2FpUCVJSeeqeGx1bBl%2Fw7AI5%2F5KSmsMSY%2B0HNuz6Ny9W%2BuuvwqovhkxFjnv5%2BI7L1JURw3LMFnqRLrTgLkZ4Fu8drQsoys9SIUIAeZRvNaEJo9K5g0gMX4BtfC9LGuuGMgvBd8WELzyNgMgqvCDFgx20E7vwv8ZCENycPb%2FK%2FMP%2B84GR%2F1xwPWMPSaEkNS%2BKCKOK0wypURDxa0fieX0dYFYmivmnuwB0sMIX5uaonHRE2iaCu%2BbRFWlTn182IyDe7mU1zWDrrdiyz4gi9iYmRT5vjc2MVNYIAHEQL5MJ2Epo9qaU85Kt9U4cXs2MAFlEz0s7IqXfKgjC3UuoyZTu4oHGRHxBKI51ZtrsZi18dn%2BU1A2ECCBANnIrTCnZQbhyGIO%2Bq1pkhzb1hlEwLejchkwBdFV0FF3eq1Qh%2FjHpwzo%2B5M%2B6v6iez5ibbWDxEIx4mP7axOBjQ8LEEGr49cqUEFk1m9%2BH5281cIbca%2FZy28COHU2qrfrqowzufezAY6pgE3wa1shJ1IxDrTtlTAkL3C8UG4HdzG%2Bv%2F5IXjX0WRTd553g0JMfwsSTgOqzZNUanwWAEInUvSrNPo353TLrU%2BNybHy4iNsl7pGImlGrWWcCZ4eN%2Fvss6xMXYwvuYV9WLQBo5GTcGFLwsYcTAwiCwrJyJdBYQU9dLZoVz6UwtI5catsAcD5LtUuXEOrG4T8hY9VgeDAdj%2F7seJ6qzAqixxuJXJnlM7F&X-Amz-Signature=a9af238d1a4f1f930394683a92c7570af4a1ef1e97c504c80bee2f03c144de2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3JIY5F%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FWi4EBHme0NKaG%2BR7IwVu91kroc8h%2BnXjgD%2Fs%2BX3N9AiAsTy41NmvzmERLys1AYGWo33sB%2FCtvJ023SdYkN1k0zSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFd2xhJk19JcO%2B6PDKtwDjWRf%2BLt%2B0uIxoiWl%2Fm7NL9FQTFKD8V6xuU3%2FRDvfuy%2BHtgoGaEs%2FzHp87Z2Qz6EjKeMqycI%2F6HwEBqQIeSQSkiIKLblnCsat6brxPmvkVBGF60aCsnwbUuCA0O%2FGM2I%2BM6UIOvC%2FpUCVJSeeqeGx1bBl%2Fw7AI5%2F5KSmsMSY%2B0HNuz6Ny9W%2BuuvwqovhkxFjnv5%2BI7L1JURw3LMFnqRLrTgLkZ4Fu8drQsoys9SIUIAeZRvNaEJo9K5g0gMX4BtfC9LGuuGMgvBd8WELzyNgMgqvCDFgx20E7vwv8ZCENycPb%2FK%2FMP%2B84GR%2F1xwPWMPSaEkNS%2BKCKOK0wypURDxa0fieX0dYFYmivmnuwB0sMIX5uaonHRE2iaCu%2BbRFWlTn182IyDe7mU1zWDrrdiyz4gi9iYmRT5vjc2MVNYIAHEQL5MJ2Epo9qaU85Kt9U4cXs2MAFlEz0s7IqXfKgjC3UuoyZTu4oHGRHxBKI51ZtrsZi18dn%2BU1A2ECCBANnIrTCnZQbhyGIO%2Bq1pkhzb1hlEwLejchkwBdFV0FF3eq1Qh%2FjHpwzo%2B5M%2B6v6iez5ibbWDxEIx4mP7axOBjQ8LEEGr49cqUEFk1m9%2BH5281cIbca%2FZy28COHU2qrfrqowzufezAY6pgE3wa1shJ1IxDrTtlTAkL3C8UG4HdzG%2Bv%2F5IXjX0WRTd553g0JMfwsSTgOqzZNUanwWAEInUvSrNPo353TLrU%2BNybHy4iNsl7pGImlGrWWcCZ4eN%2Fvss6xMXYwvuYV9WLQBo5GTcGFLwsYcTAwiCwrJyJdBYQU9dLZoVz6UwtI5catsAcD5LtUuXEOrG4T8hY9VgeDAdj%2F7seJ6qzAqixxuJXJnlM7F&X-Amz-Signature=daa9cbfedd25bf73294c9e07ddb580d38adfdc90976462078ee6f61a8c5bf213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3JIY5F%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FWi4EBHme0NKaG%2BR7IwVu91kroc8h%2BnXjgD%2Fs%2BX3N9AiAsTy41NmvzmERLys1AYGWo33sB%2FCtvJ023SdYkN1k0zSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFd2xhJk19JcO%2B6PDKtwDjWRf%2BLt%2B0uIxoiWl%2Fm7NL9FQTFKD8V6xuU3%2FRDvfuy%2BHtgoGaEs%2FzHp87Z2Qz6EjKeMqycI%2F6HwEBqQIeSQSkiIKLblnCsat6brxPmvkVBGF60aCsnwbUuCA0O%2FGM2I%2BM6UIOvC%2FpUCVJSeeqeGx1bBl%2Fw7AI5%2F5KSmsMSY%2B0HNuz6Ny9W%2BuuvwqovhkxFjnv5%2BI7L1JURw3LMFnqRLrTgLkZ4Fu8drQsoys9SIUIAeZRvNaEJo9K5g0gMX4BtfC9LGuuGMgvBd8WELzyNgMgqvCDFgx20E7vwv8ZCENycPb%2FK%2FMP%2B84GR%2F1xwPWMPSaEkNS%2BKCKOK0wypURDxa0fieX0dYFYmivmnuwB0sMIX5uaonHRE2iaCu%2BbRFWlTn182IyDe7mU1zWDrrdiyz4gi9iYmRT5vjc2MVNYIAHEQL5MJ2Epo9qaU85Kt9U4cXs2MAFlEz0s7IqXfKgjC3UuoyZTu4oHGRHxBKI51ZtrsZi18dn%2BU1A2ECCBANnIrTCnZQbhyGIO%2Bq1pkhzb1hlEwLejchkwBdFV0FF3eq1Qh%2FjHpwzo%2B5M%2B6v6iez5ibbWDxEIx4mP7axOBjQ8LEEGr49cqUEFk1m9%2BH5281cIbca%2FZy28COHU2qrfrqowzufezAY6pgE3wa1shJ1IxDrTtlTAkL3C8UG4HdzG%2Bv%2F5IXjX0WRTd553g0JMfwsSTgOqzZNUanwWAEInUvSrNPo353TLrU%2BNybHy4iNsl7pGImlGrWWcCZ4eN%2Fvss6xMXYwvuYV9WLQBo5GTcGFLwsYcTAwiCwrJyJdBYQU9dLZoVz6UwtI5catsAcD5LtUuXEOrG4T8hY9VgeDAdj%2F7seJ6qzAqixxuJXJnlM7F&X-Amz-Signature=7510e168f1cbc8b1b114e81051268115f48da2467cc87b1be1eac7a1f05185c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3JIY5F%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FWi4EBHme0NKaG%2BR7IwVu91kroc8h%2BnXjgD%2Fs%2BX3N9AiAsTy41NmvzmERLys1AYGWo33sB%2FCtvJ023SdYkN1k0zSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFd2xhJk19JcO%2B6PDKtwDjWRf%2BLt%2B0uIxoiWl%2Fm7NL9FQTFKD8V6xuU3%2FRDvfuy%2BHtgoGaEs%2FzHp87Z2Qz6EjKeMqycI%2F6HwEBqQIeSQSkiIKLblnCsat6brxPmvkVBGF60aCsnwbUuCA0O%2FGM2I%2BM6UIOvC%2FpUCVJSeeqeGx1bBl%2Fw7AI5%2F5KSmsMSY%2B0HNuz6Ny9W%2BuuvwqovhkxFjnv5%2BI7L1JURw3LMFnqRLrTgLkZ4Fu8drQsoys9SIUIAeZRvNaEJo9K5g0gMX4BtfC9LGuuGMgvBd8WELzyNgMgqvCDFgx20E7vwv8ZCENycPb%2FK%2FMP%2B84GR%2F1xwPWMPSaEkNS%2BKCKOK0wypURDxa0fieX0dYFYmivmnuwB0sMIX5uaonHRE2iaCu%2BbRFWlTn182IyDe7mU1zWDrrdiyz4gi9iYmRT5vjc2MVNYIAHEQL5MJ2Epo9qaU85Kt9U4cXs2MAFlEz0s7IqXfKgjC3UuoyZTu4oHGRHxBKI51ZtrsZi18dn%2BU1A2ECCBANnIrTCnZQbhyGIO%2Bq1pkhzb1hlEwLejchkwBdFV0FF3eq1Qh%2FjHpwzo%2B5M%2B6v6iez5ibbWDxEIx4mP7axOBjQ8LEEGr49cqUEFk1m9%2BH5281cIbca%2FZy28COHU2qrfrqowzufezAY6pgE3wa1shJ1IxDrTtlTAkL3C8UG4HdzG%2Bv%2F5IXjX0WRTd553g0JMfwsSTgOqzZNUanwWAEInUvSrNPo353TLrU%2BNybHy4iNsl7pGImlGrWWcCZ4eN%2Fvss6xMXYwvuYV9WLQBo5GTcGFLwsYcTAwiCwrJyJdBYQU9dLZoVz6UwtI5catsAcD5LtUuXEOrG4T8hY9VgeDAdj%2F7seJ6qzAqixxuJXJnlM7F&X-Amz-Signature=2b89584d07bbe6dcbf0df70256b5cae298974594fb52e7b28e7c3bffcea64485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3JIY5F%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FWi4EBHme0NKaG%2BR7IwVu91kroc8h%2BnXjgD%2Fs%2BX3N9AiAsTy41NmvzmERLys1AYGWo33sB%2FCtvJ023SdYkN1k0zSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFd2xhJk19JcO%2B6PDKtwDjWRf%2BLt%2B0uIxoiWl%2Fm7NL9FQTFKD8V6xuU3%2FRDvfuy%2BHtgoGaEs%2FzHp87Z2Qz6EjKeMqycI%2F6HwEBqQIeSQSkiIKLblnCsat6brxPmvkVBGF60aCsnwbUuCA0O%2FGM2I%2BM6UIOvC%2FpUCVJSeeqeGx1bBl%2Fw7AI5%2F5KSmsMSY%2B0HNuz6Ny9W%2BuuvwqovhkxFjnv5%2BI7L1JURw3LMFnqRLrTgLkZ4Fu8drQsoys9SIUIAeZRvNaEJo9K5g0gMX4BtfC9LGuuGMgvBd8WELzyNgMgqvCDFgx20E7vwv8ZCENycPb%2FK%2FMP%2B84GR%2F1xwPWMPSaEkNS%2BKCKOK0wypURDxa0fieX0dYFYmivmnuwB0sMIX5uaonHRE2iaCu%2BbRFWlTn182IyDe7mU1zWDrrdiyz4gi9iYmRT5vjc2MVNYIAHEQL5MJ2Epo9qaU85Kt9U4cXs2MAFlEz0s7IqXfKgjC3UuoyZTu4oHGRHxBKI51ZtrsZi18dn%2BU1A2ECCBANnIrTCnZQbhyGIO%2Bq1pkhzb1hlEwLejchkwBdFV0FF3eq1Qh%2FjHpwzo%2B5M%2B6v6iez5ibbWDxEIx4mP7axOBjQ8LEEGr49cqUEFk1m9%2BH5281cIbca%2FZy28COHU2qrfrqowzufezAY6pgE3wa1shJ1IxDrTtlTAkL3C8UG4HdzG%2Bv%2F5IXjX0WRTd553g0JMfwsSTgOqzZNUanwWAEInUvSrNPo353TLrU%2BNybHy4iNsl7pGImlGrWWcCZ4eN%2Fvss6xMXYwvuYV9WLQBo5GTcGFLwsYcTAwiCwrJyJdBYQU9dLZoVz6UwtI5catsAcD5LtUuXEOrG4T8hY9VgeDAdj%2F7seJ6qzAqixxuJXJnlM7F&X-Amz-Signature=a12c4f6120afcf0b312a2f3b3da228f030e5099f6943b2f8967b97035bee0ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
