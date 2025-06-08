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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJDZB5L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7%2Fn5k9BHmxrLZ6zxm%2FIY9qcDn2xYj0iKDGyvKZCFTDAiEA430xSADGLWpcsaSZXEbF6sXXW4w4U2oGHrcVWQj05YEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUsAl2WZjhnqzo1dircA9Yc7lGZW%2FpVgvIWhYuJrOJAgR3bce%2FYYaG4dp%2Fe0ZncBkx1PzxEGTPhptxzrr0biX0vQC3VPGmebBOaLUzm1eTMRCSPFgs%2BIOOYija5qcKHYKrjXd1DPswTp%2BDSmymTTmyZ5uxJl9Ya5nqIj28RqbQxzsgrt19NUmOs4QCVCFvrwKUqy7Tlugb5tdkBu2zDmDYfybedmd50Wh3NE9MXrK9GLlR1%2Frn3rPD6sV86hqpyNXhV3%2BVdm%2Fdy49QTX2t8872gsjkLrNfDQvaUON9Hl7UHgW2ZToBbir0%2F8%2B8A2hCCqIHpVYtaZFfjViyJ1PXWoEpimHSvcMqXNB6lx8tkO%2FdQo01OwW2uk35rLaNLOlulchMds0KAo6gRx%2B8uiE1eM95HI6Cpxf%2Foe91%2Fnjz7rd%2BWhZV3wjI6Ggp5JX15KMtVh%2BkryCXvLTW4pm0gZh7OcWNGWip2okzNgls2OK6nSrukAxkkPlQ5GD8LDJnF2y0IDf8HMueZ2MckHq49LRhfhTd%2Fhx6FA%2F0jaYzBR8qhL4gow1WgD10v4d3B51zXXfIwdf53OacRJe4kcjQvt%2FVpqVrjwIHybhJJaHQN4hynVYjJnrtt9DC%2BW9M3%2FQDnbfjJqLXukC5Wr2UuiwrfMInil8IGOqUBWorvt4GtpYHyRFBa1OVBK825DY8kX7jaYrAyudToDNfsax7QB6gKi11Sj8z1zrvBdXuqDpRaZ%2F%2BRJDspymnWLALabGNnstqyI8BfykNhtWAW6sOZXtGBGsUNH4KQMW3aNSaj0lWByIy50Gj%2BN1DslBeEAl8xmDVrDOsBG7ytss0KaTn2TH5g1stCQl8zBpQGOfHI%2FUoTFfWDap8bNl9yjLCYD20x&X-Amz-Signature=2263d34edfdbcc656f3f3ba2f432796817b231a7ed38a8bc272f59c4cd5101a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJDZB5L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7%2Fn5k9BHmxrLZ6zxm%2FIY9qcDn2xYj0iKDGyvKZCFTDAiEA430xSADGLWpcsaSZXEbF6sXXW4w4U2oGHrcVWQj05YEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUsAl2WZjhnqzo1dircA9Yc7lGZW%2FpVgvIWhYuJrOJAgR3bce%2FYYaG4dp%2Fe0ZncBkx1PzxEGTPhptxzrr0biX0vQC3VPGmebBOaLUzm1eTMRCSPFgs%2BIOOYija5qcKHYKrjXd1DPswTp%2BDSmymTTmyZ5uxJl9Ya5nqIj28RqbQxzsgrt19NUmOs4QCVCFvrwKUqy7Tlugb5tdkBu2zDmDYfybedmd50Wh3NE9MXrK9GLlR1%2Frn3rPD6sV86hqpyNXhV3%2BVdm%2Fdy49QTX2t8872gsjkLrNfDQvaUON9Hl7UHgW2ZToBbir0%2F8%2B8A2hCCqIHpVYtaZFfjViyJ1PXWoEpimHSvcMqXNB6lx8tkO%2FdQo01OwW2uk35rLaNLOlulchMds0KAo6gRx%2B8uiE1eM95HI6Cpxf%2Foe91%2Fnjz7rd%2BWhZV3wjI6Ggp5JX15KMtVh%2BkryCXvLTW4pm0gZh7OcWNGWip2okzNgls2OK6nSrukAxkkPlQ5GD8LDJnF2y0IDf8HMueZ2MckHq49LRhfhTd%2Fhx6FA%2F0jaYzBR8qhL4gow1WgD10v4d3B51zXXfIwdf53OacRJe4kcjQvt%2FVpqVrjwIHybhJJaHQN4hynVYjJnrtt9DC%2BW9M3%2FQDnbfjJqLXukC5Wr2UuiwrfMInil8IGOqUBWorvt4GtpYHyRFBa1OVBK825DY8kX7jaYrAyudToDNfsax7QB6gKi11Sj8z1zrvBdXuqDpRaZ%2F%2BRJDspymnWLALabGNnstqyI8BfykNhtWAW6sOZXtGBGsUNH4KQMW3aNSaj0lWByIy50Gj%2BN1DslBeEAl8xmDVrDOsBG7ytss0KaTn2TH5g1stCQl8zBpQGOfHI%2FUoTFfWDap8bNl9yjLCYD20x&X-Amz-Signature=3cd85626e74fdb6e0432750f64512c97edc3217ee1d15b5bbd6ef26270202bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJDZB5L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7%2Fn5k9BHmxrLZ6zxm%2FIY9qcDn2xYj0iKDGyvKZCFTDAiEA430xSADGLWpcsaSZXEbF6sXXW4w4U2oGHrcVWQj05YEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUsAl2WZjhnqzo1dircA9Yc7lGZW%2FpVgvIWhYuJrOJAgR3bce%2FYYaG4dp%2Fe0ZncBkx1PzxEGTPhptxzrr0biX0vQC3VPGmebBOaLUzm1eTMRCSPFgs%2BIOOYija5qcKHYKrjXd1DPswTp%2BDSmymTTmyZ5uxJl9Ya5nqIj28RqbQxzsgrt19NUmOs4QCVCFvrwKUqy7Tlugb5tdkBu2zDmDYfybedmd50Wh3NE9MXrK9GLlR1%2Frn3rPD6sV86hqpyNXhV3%2BVdm%2Fdy49QTX2t8872gsjkLrNfDQvaUON9Hl7UHgW2ZToBbir0%2F8%2B8A2hCCqIHpVYtaZFfjViyJ1PXWoEpimHSvcMqXNB6lx8tkO%2FdQo01OwW2uk35rLaNLOlulchMds0KAo6gRx%2B8uiE1eM95HI6Cpxf%2Foe91%2Fnjz7rd%2BWhZV3wjI6Ggp5JX15KMtVh%2BkryCXvLTW4pm0gZh7OcWNGWip2okzNgls2OK6nSrukAxkkPlQ5GD8LDJnF2y0IDf8HMueZ2MckHq49LRhfhTd%2Fhx6FA%2F0jaYzBR8qhL4gow1WgD10v4d3B51zXXfIwdf53OacRJe4kcjQvt%2FVpqVrjwIHybhJJaHQN4hynVYjJnrtt9DC%2BW9M3%2FQDnbfjJqLXukC5Wr2UuiwrfMInil8IGOqUBWorvt4GtpYHyRFBa1OVBK825DY8kX7jaYrAyudToDNfsax7QB6gKi11Sj8z1zrvBdXuqDpRaZ%2F%2BRJDspymnWLALabGNnstqyI8BfykNhtWAW6sOZXtGBGsUNH4KQMW3aNSaj0lWByIy50Gj%2BN1DslBeEAl8xmDVrDOsBG7ytss0KaTn2TH5g1stCQl8zBpQGOfHI%2FUoTFfWDap8bNl9yjLCYD20x&X-Amz-Signature=b9f31ad5b863993c2d20f773c20ef3e3707a218a22595571b4803136af5dd50b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJDZB5L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7%2Fn5k9BHmxrLZ6zxm%2FIY9qcDn2xYj0iKDGyvKZCFTDAiEA430xSADGLWpcsaSZXEbF6sXXW4w4U2oGHrcVWQj05YEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUsAl2WZjhnqzo1dircA9Yc7lGZW%2FpVgvIWhYuJrOJAgR3bce%2FYYaG4dp%2Fe0ZncBkx1PzxEGTPhptxzrr0biX0vQC3VPGmebBOaLUzm1eTMRCSPFgs%2BIOOYija5qcKHYKrjXd1DPswTp%2BDSmymTTmyZ5uxJl9Ya5nqIj28RqbQxzsgrt19NUmOs4QCVCFvrwKUqy7Tlugb5tdkBu2zDmDYfybedmd50Wh3NE9MXrK9GLlR1%2Frn3rPD6sV86hqpyNXhV3%2BVdm%2Fdy49QTX2t8872gsjkLrNfDQvaUON9Hl7UHgW2ZToBbir0%2F8%2B8A2hCCqIHpVYtaZFfjViyJ1PXWoEpimHSvcMqXNB6lx8tkO%2FdQo01OwW2uk35rLaNLOlulchMds0KAo6gRx%2B8uiE1eM95HI6Cpxf%2Foe91%2Fnjz7rd%2BWhZV3wjI6Ggp5JX15KMtVh%2BkryCXvLTW4pm0gZh7OcWNGWip2okzNgls2OK6nSrukAxkkPlQ5GD8LDJnF2y0IDf8HMueZ2MckHq49LRhfhTd%2Fhx6FA%2F0jaYzBR8qhL4gow1WgD10v4d3B51zXXfIwdf53OacRJe4kcjQvt%2FVpqVrjwIHybhJJaHQN4hynVYjJnrtt9DC%2BW9M3%2FQDnbfjJqLXukC5Wr2UuiwrfMInil8IGOqUBWorvt4GtpYHyRFBa1OVBK825DY8kX7jaYrAyudToDNfsax7QB6gKi11Sj8z1zrvBdXuqDpRaZ%2F%2BRJDspymnWLALabGNnstqyI8BfykNhtWAW6sOZXtGBGsUNH4KQMW3aNSaj0lWByIy50Gj%2BN1DslBeEAl8xmDVrDOsBG7ytss0KaTn2TH5g1stCQl8zBpQGOfHI%2FUoTFfWDap8bNl9yjLCYD20x&X-Amz-Signature=66da7f70359380e82b653285a0a7d09a336f651ba2c7f99d419debfc705faec8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJDZB5L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7%2Fn5k9BHmxrLZ6zxm%2FIY9qcDn2xYj0iKDGyvKZCFTDAiEA430xSADGLWpcsaSZXEbF6sXXW4w4U2oGHrcVWQj05YEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUsAl2WZjhnqzo1dircA9Yc7lGZW%2FpVgvIWhYuJrOJAgR3bce%2FYYaG4dp%2Fe0ZncBkx1PzxEGTPhptxzrr0biX0vQC3VPGmebBOaLUzm1eTMRCSPFgs%2BIOOYija5qcKHYKrjXd1DPswTp%2BDSmymTTmyZ5uxJl9Ya5nqIj28RqbQxzsgrt19NUmOs4QCVCFvrwKUqy7Tlugb5tdkBu2zDmDYfybedmd50Wh3NE9MXrK9GLlR1%2Frn3rPD6sV86hqpyNXhV3%2BVdm%2Fdy49QTX2t8872gsjkLrNfDQvaUON9Hl7UHgW2ZToBbir0%2F8%2B8A2hCCqIHpVYtaZFfjViyJ1PXWoEpimHSvcMqXNB6lx8tkO%2FdQo01OwW2uk35rLaNLOlulchMds0KAo6gRx%2B8uiE1eM95HI6Cpxf%2Foe91%2Fnjz7rd%2BWhZV3wjI6Ggp5JX15KMtVh%2BkryCXvLTW4pm0gZh7OcWNGWip2okzNgls2OK6nSrukAxkkPlQ5GD8LDJnF2y0IDf8HMueZ2MckHq49LRhfhTd%2Fhx6FA%2F0jaYzBR8qhL4gow1WgD10v4d3B51zXXfIwdf53OacRJe4kcjQvt%2FVpqVrjwIHybhJJaHQN4hynVYjJnrtt9DC%2BW9M3%2FQDnbfjJqLXukC5Wr2UuiwrfMInil8IGOqUBWorvt4GtpYHyRFBa1OVBK825DY8kX7jaYrAyudToDNfsax7QB6gKi11Sj8z1zrvBdXuqDpRaZ%2F%2BRJDspymnWLALabGNnstqyI8BfykNhtWAW6sOZXtGBGsUNH4KQMW3aNSaj0lWByIy50Gj%2BN1DslBeEAl8xmDVrDOsBG7ytss0KaTn2TH5g1stCQl8zBpQGOfHI%2FUoTFfWDap8bNl9yjLCYD20x&X-Amz-Signature=8b65103dee53c55044fa5a67227ec09aa2899f9eecbdedbd3c5d44e990b98239&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
