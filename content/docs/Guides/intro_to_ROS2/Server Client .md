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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5D7MPX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVxLpORi50mZt6kCVqx1lIf058ho%2FkWyUVYQYpBALiQIhALBy0c3V%2FbSgQ0SR9vAxWLDXg9eNTFaokNjA%2FHz3CC6vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx8PLq899h5AdT%2BCjAq3ANzOAf%2BwZ00FR5VtlTQZLb6tBx9k7x9IjqKsl4%2FtSPk6ztnspW9Bp5Y7dpWMN3WlY9qBfD8xipHjUEHf0nk9I%2BE2rf%2F4QgQEKU5P7jq5sxute2vXnXOgCu%2BZ5NgHUGQejVtW5tP6ARB2AQjiYpkt9WvEMH1h0Vr80IgWFHTJUXt36jPsKDDcNfd%2Bs1q4wI46W%2BYkH1%2FX0155lZRt3SudAbxpM6NJDeI%2BZiNXBDwAor0WQNLD05%2Bo6EFBruoPHDNBVQ9xXasULAiMvE1DtZLjso8s8MJU2rGaCaFHNoDrkrL9r99Qz1BJ7j%2F18ij074kbH2tkUitXoz%2FH6sTGYk6X3uiX6bwTGUICalS8IbC9Gv29PFzEtbGWF5GQy%2FQxs1T9xaqI6pKK%2Bf3vZC0mRANBFEIo1mPvolZoOx%2FoQLnPw1AM1%2B8ObAzG2EqI5fLcs6LG2HPM%2FhsmvM0fdx5MKTrFco19BTAi9Jr3%2BLEmUyp9HkYDwzIohi3VuKmztV62mV2yJJi1VL9pmEyOIqhXs3zKy%2FyvB9%2FA%2BfOekOI3xVeXlaXinmDepIxcr5QEGcaQr4akFnmpnpCaOEVx9E%2FT5x6%2B%2FCJVo%2F0wjnsSmq%2BMugwDPjRqNaFVB8D7qhMX8X43zDS05vBBjqkAWsxKeihezKmUnecKsF57wldjJxeazCs1hsYHMt%2FdfLWUtUvx%2F9GggvbrzZhi7J40pnowfOiuhJESRexz13ZP3A4c8VpQNAjsDjwVdnMT1UHOdu7GWUz%2FPm6OSBOoygbfXk7gE4nL15Oa%2F01V1J7uTy7kOapR%2FUi6GSWVdbeV3Hi95Njd8%2Bs%2Baoo4T9zd0GMFZqOmQcAOFkRU%2BjliaEHsoXmhBzZ&X-Amz-Signature=048394ef69621a64a37e1ec36a69edc613824fabf06db406e12fbfdecffa11b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5D7MPX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVxLpORi50mZt6kCVqx1lIf058ho%2FkWyUVYQYpBALiQIhALBy0c3V%2FbSgQ0SR9vAxWLDXg9eNTFaokNjA%2FHz3CC6vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx8PLq899h5AdT%2BCjAq3ANzOAf%2BwZ00FR5VtlTQZLb6tBx9k7x9IjqKsl4%2FtSPk6ztnspW9Bp5Y7dpWMN3WlY9qBfD8xipHjUEHf0nk9I%2BE2rf%2F4QgQEKU5P7jq5sxute2vXnXOgCu%2BZ5NgHUGQejVtW5tP6ARB2AQjiYpkt9WvEMH1h0Vr80IgWFHTJUXt36jPsKDDcNfd%2Bs1q4wI46W%2BYkH1%2FX0155lZRt3SudAbxpM6NJDeI%2BZiNXBDwAor0WQNLD05%2Bo6EFBruoPHDNBVQ9xXasULAiMvE1DtZLjso8s8MJU2rGaCaFHNoDrkrL9r99Qz1BJ7j%2F18ij074kbH2tkUitXoz%2FH6sTGYk6X3uiX6bwTGUICalS8IbC9Gv29PFzEtbGWF5GQy%2FQxs1T9xaqI6pKK%2Bf3vZC0mRANBFEIo1mPvolZoOx%2FoQLnPw1AM1%2B8ObAzG2EqI5fLcs6LG2HPM%2FhsmvM0fdx5MKTrFco19BTAi9Jr3%2BLEmUyp9HkYDwzIohi3VuKmztV62mV2yJJi1VL9pmEyOIqhXs3zKy%2FyvB9%2FA%2BfOekOI3xVeXlaXinmDepIxcr5QEGcaQr4akFnmpnpCaOEVx9E%2FT5x6%2B%2FCJVo%2F0wjnsSmq%2BMugwDPjRqNaFVB8D7qhMX8X43zDS05vBBjqkAWsxKeihezKmUnecKsF57wldjJxeazCs1hsYHMt%2FdfLWUtUvx%2F9GggvbrzZhi7J40pnowfOiuhJESRexz13ZP3A4c8VpQNAjsDjwVdnMT1UHOdu7GWUz%2FPm6OSBOoygbfXk7gE4nL15Oa%2F01V1J7uTy7kOapR%2FUi6GSWVdbeV3Hi95Njd8%2Bs%2Baoo4T9zd0GMFZqOmQcAOFkRU%2BjliaEHsoXmhBzZ&X-Amz-Signature=473cc9e93203ee71375c68041fc190e0b89a2bba9b0aa141cb6e324f8e2814b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5D7MPX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVxLpORi50mZt6kCVqx1lIf058ho%2FkWyUVYQYpBALiQIhALBy0c3V%2FbSgQ0SR9vAxWLDXg9eNTFaokNjA%2FHz3CC6vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx8PLq899h5AdT%2BCjAq3ANzOAf%2BwZ00FR5VtlTQZLb6tBx9k7x9IjqKsl4%2FtSPk6ztnspW9Bp5Y7dpWMN3WlY9qBfD8xipHjUEHf0nk9I%2BE2rf%2F4QgQEKU5P7jq5sxute2vXnXOgCu%2BZ5NgHUGQejVtW5tP6ARB2AQjiYpkt9WvEMH1h0Vr80IgWFHTJUXt36jPsKDDcNfd%2Bs1q4wI46W%2BYkH1%2FX0155lZRt3SudAbxpM6NJDeI%2BZiNXBDwAor0WQNLD05%2Bo6EFBruoPHDNBVQ9xXasULAiMvE1DtZLjso8s8MJU2rGaCaFHNoDrkrL9r99Qz1BJ7j%2F18ij074kbH2tkUitXoz%2FH6sTGYk6X3uiX6bwTGUICalS8IbC9Gv29PFzEtbGWF5GQy%2FQxs1T9xaqI6pKK%2Bf3vZC0mRANBFEIo1mPvolZoOx%2FoQLnPw1AM1%2B8ObAzG2EqI5fLcs6LG2HPM%2FhsmvM0fdx5MKTrFco19BTAi9Jr3%2BLEmUyp9HkYDwzIohi3VuKmztV62mV2yJJi1VL9pmEyOIqhXs3zKy%2FyvB9%2FA%2BfOekOI3xVeXlaXinmDepIxcr5QEGcaQr4akFnmpnpCaOEVx9E%2FT5x6%2B%2FCJVo%2F0wjnsSmq%2BMugwDPjRqNaFVB8D7qhMX8X43zDS05vBBjqkAWsxKeihezKmUnecKsF57wldjJxeazCs1hsYHMt%2FdfLWUtUvx%2F9GggvbrzZhi7J40pnowfOiuhJESRexz13ZP3A4c8VpQNAjsDjwVdnMT1UHOdu7GWUz%2FPm6OSBOoygbfXk7gE4nL15Oa%2F01V1J7uTy7kOapR%2FUi6GSWVdbeV3Hi95Njd8%2Bs%2Baoo4T9zd0GMFZqOmQcAOFkRU%2BjliaEHsoXmhBzZ&X-Amz-Signature=c4e52731d678b0fc7d3df6f890bc80a421018cc7edc8161fa283c7005f26e3b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5D7MPX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVxLpORi50mZt6kCVqx1lIf058ho%2FkWyUVYQYpBALiQIhALBy0c3V%2FbSgQ0SR9vAxWLDXg9eNTFaokNjA%2FHz3CC6vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx8PLq899h5AdT%2BCjAq3ANzOAf%2BwZ00FR5VtlTQZLb6tBx9k7x9IjqKsl4%2FtSPk6ztnspW9Bp5Y7dpWMN3WlY9qBfD8xipHjUEHf0nk9I%2BE2rf%2F4QgQEKU5P7jq5sxute2vXnXOgCu%2BZ5NgHUGQejVtW5tP6ARB2AQjiYpkt9WvEMH1h0Vr80IgWFHTJUXt36jPsKDDcNfd%2Bs1q4wI46W%2BYkH1%2FX0155lZRt3SudAbxpM6NJDeI%2BZiNXBDwAor0WQNLD05%2Bo6EFBruoPHDNBVQ9xXasULAiMvE1DtZLjso8s8MJU2rGaCaFHNoDrkrL9r99Qz1BJ7j%2F18ij074kbH2tkUitXoz%2FH6sTGYk6X3uiX6bwTGUICalS8IbC9Gv29PFzEtbGWF5GQy%2FQxs1T9xaqI6pKK%2Bf3vZC0mRANBFEIo1mPvolZoOx%2FoQLnPw1AM1%2B8ObAzG2EqI5fLcs6LG2HPM%2FhsmvM0fdx5MKTrFco19BTAi9Jr3%2BLEmUyp9HkYDwzIohi3VuKmztV62mV2yJJi1VL9pmEyOIqhXs3zKy%2FyvB9%2FA%2BfOekOI3xVeXlaXinmDepIxcr5QEGcaQr4akFnmpnpCaOEVx9E%2FT5x6%2B%2FCJVo%2F0wjnsSmq%2BMugwDPjRqNaFVB8D7qhMX8X43zDS05vBBjqkAWsxKeihezKmUnecKsF57wldjJxeazCs1hsYHMt%2FdfLWUtUvx%2F9GggvbrzZhi7J40pnowfOiuhJESRexz13ZP3A4c8VpQNAjsDjwVdnMT1UHOdu7GWUz%2FPm6OSBOoygbfXk7gE4nL15Oa%2F01V1J7uTy7kOapR%2FUi6GSWVdbeV3Hi95Njd8%2Bs%2Baoo4T9zd0GMFZqOmQcAOFkRU%2BjliaEHsoXmhBzZ&X-Amz-Signature=fbb53e605618db59384aa70619d259c99f7305256fad2e4a24e4e9bef88bb513&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5D7MPX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVxLpORi50mZt6kCVqx1lIf058ho%2FkWyUVYQYpBALiQIhALBy0c3V%2FbSgQ0SR9vAxWLDXg9eNTFaokNjA%2FHz3CC6vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx8PLq899h5AdT%2BCjAq3ANzOAf%2BwZ00FR5VtlTQZLb6tBx9k7x9IjqKsl4%2FtSPk6ztnspW9Bp5Y7dpWMN3WlY9qBfD8xipHjUEHf0nk9I%2BE2rf%2F4QgQEKU5P7jq5sxute2vXnXOgCu%2BZ5NgHUGQejVtW5tP6ARB2AQjiYpkt9WvEMH1h0Vr80IgWFHTJUXt36jPsKDDcNfd%2Bs1q4wI46W%2BYkH1%2FX0155lZRt3SudAbxpM6NJDeI%2BZiNXBDwAor0WQNLD05%2Bo6EFBruoPHDNBVQ9xXasULAiMvE1DtZLjso8s8MJU2rGaCaFHNoDrkrL9r99Qz1BJ7j%2F18ij074kbH2tkUitXoz%2FH6sTGYk6X3uiX6bwTGUICalS8IbC9Gv29PFzEtbGWF5GQy%2FQxs1T9xaqI6pKK%2Bf3vZC0mRANBFEIo1mPvolZoOx%2FoQLnPw1AM1%2B8ObAzG2EqI5fLcs6LG2HPM%2FhsmvM0fdx5MKTrFco19BTAi9Jr3%2BLEmUyp9HkYDwzIohi3VuKmztV62mV2yJJi1VL9pmEyOIqhXs3zKy%2FyvB9%2FA%2BfOekOI3xVeXlaXinmDepIxcr5QEGcaQr4akFnmpnpCaOEVx9E%2FT5x6%2B%2FCJVo%2F0wjnsSmq%2BMugwDPjRqNaFVB8D7qhMX8X43zDS05vBBjqkAWsxKeihezKmUnecKsF57wldjJxeazCs1hsYHMt%2FdfLWUtUvx%2F9GggvbrzZhi7J40pnowfOiuhJESRexz13ZP3A4c8VpQNAjsDjwVdnMT1UHOdu7GWUz%2FPm6OSBOoygbfXk7gE4nL15Oa%2F01V1J7uTy7kOapR%2FUi6GSWVdbeV3Hi95Njd8%2Bs%2Baoo4T9zd0GMFZqOmQcAOFkRU%2BjliaEHsoXmhBzZ&X-Amz-Signature=f61611c1c2fd8274a5dc6c6bfad184774df6a99e9a86bd620e4f36106717ca61&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
