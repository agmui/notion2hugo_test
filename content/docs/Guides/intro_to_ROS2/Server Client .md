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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNGB6J5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCq0uaZpEi8YsZ4SG%2BXun7z1ye%2FqFkcn%2BVBRQCYG7qdZAIgHk%2B7%2BPtwYsNE2D8%2BWkcJkSbcPDeExAH2%2Bvupbmewy0kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQmKlaSXOCVVGJjGyrcAx8XsJ657YSeKg0o4ocYcUEvOGr7wP4TTgqEKdE9aqfNpzEgOpcghUWv%2F%2FxIMD2qPEtlh3sYAf5nHsIwRwHLDXANwq24Ju3m3TXfeBp5dqPEZ3ywnxrWaOKyZhJAYt3iR6Pmb8cZs3Qy9bZPxn2%2FBnwIFAtQ%2BDKy1Ta2ePFHiGj%2FaL9wTr0ImR3F6YlCKkS1v%2Foseyoi%2BBRdgsw4s8Z8WkqLBuUT9XZhseZ1%2FdahAGo5KVAXqI1c4B5EzOPoHTJU%2FcoglGmmN06h%2Barf%2BqEjRC1yaLRq4hSeyPgpD9PudARm300TlTDUH0mKqh0JnB4ptf%2BG0zCp8iwgsu%2BHdrHQZYmL6O23rlKocBZC%2B74qW%2FdJuVNhb3Gk%2FNIPOCGDRTgFwAu7VcPvUbAseWS64txxUAoWNuHV7CjxiVBT4246d2GHL9601nc7Bxy%2FmRtiWFeOVciNfZTxV1tLA7iyMhGREuwUlwDY46h%2Boou3mwBto1tvQanPTIApe%2Fp8Gbdc%2BBI4bltztTBFCRy2vHulLbZrRG%2FWIjIzp1YeKZ3quTpMqormO2Y18u1A%2FpC6uYVA5fXOc2avOiiPEvtObmVHpS%2FMZ6Z82W%2FziSwf8fPNsCrjR3nkPpcVuRVOdzigKKUeMNT22sQGOqUB1dAz9UpVjYwMdjnRKGeIJYZkYcIU3VliUtLSJS0v8kRdBuixsCkXjjXqyASBtNL%2B03HOTpCaNLl8nso5HCSgbgHriIVYnIPcRSaO29l%2FQ8DjyRQDcwFjE9E6ua9k4%2FA3B7NBfxfdiVWClDQNQOfeGF5fsFM4zchXwz36NRgWe%2Bp49fX%2BYvIFHfQpjH8eeHknsEYCr%2FJdZ1m6xuoP6W3zehWT9AYK&X-Amz-Signature=cb47f69b847090a3f26e795b5538f4cbc7c519119af76ead31cc2abbc4e80ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNGB6J5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCq0uaZpEi8YsZ4SG%2BXun7z1ye%2FqFkcn%2BVBRQCYG7qdZAIgHk%2B7%2BPtwYsNE2D8%2BWkcJkSbcPDeExAH2%2Bvupbmewy0kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQmKlaSXOCVVGJjGyrcAx8XsJ657YSeKg0o4ocYcUEvOGr7wP4TTgqEKdE9aqfNpzEgOpcghUWv%2F%2FxIMD2qPEtlh3sYAf5nHsIwRwHLDXANwq24Ju3m3TXfeBp5dqPEZ3ywnxrWaOKyZhJAYt3iR6Pmb8cZs3Qy9bZPxn2%2FBnwIFAtQ%2BDKy1Ta2ePFHiGj%2FaL9wTr0ImR3F6YlCKkS1v%2Foseyoi%2BBRdgsw4s8Z8WkqLBuUT9XZhseZ1%2FdahAGo5KVAXqI1c4B5EzOPoHTJU%2FcoglGmmN06h%2Barf%2BqEjRC1yaLRq4hSeyPgpD9PudARm300TlTDUH0mKqh0JnB4ptf%2BG0zCp8iwgsu%2BHdrHQZYmL6O23rlKocBZC%2B74qW%2FdJuVNhb3Gk%2FNIPOCGDRTgFwAu7VcPvUbAseWS64txxUAoWNuHV7CjxiVBT4246d2GHL9601nc7Bxy%2FmRtiWFeOVciNfZTxV1tLA7iyMhGREuwUlwDY46h%2Boou3mwBto1tvQanPTIApe%2Fp8Gbdc%2BBI4bltztTBFCRy2vHulLbZrRG%2FWIjIzp1YeKZ3quTpMqormO2Y18u1A%2FpC6uYVA5fXOc2avOiiPEvtObmVHpS%2FMZ6Z82W%2FziSwf8fPNsCrjR3nkPpcVuRVOdzigKKUeMNT22sQGOqUB1dAz9UpVjYwMdjnRKGeIJYZkYcIU3VliUtLSJS0v8kRdBuixsCkXjjXqyASBtNL%2B03HOTpCaNLl8nso5HCSgbgHriIVYnIPcRSaO29l%2FQ8DjyRQDcwFjE9E6ua9k4%2FA3B7NBfxfdiVWClDQNQOfeGF5fsFM4zchXwz36NRgWe%2Bp49fX%2BYvIFHfQpjH8eeHknsEYCr%2FJdZ1m6xuoP6W3zehWT9AYK&X-Amz-Signature=8bc6e69d378cd4388685e204760c809d5bdef4e0e0324fcfaf7f32aad9990a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNGB6J5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCq0uaZpEi8YsZ4SG%2BXun7z1ye%2FqFkcn%2BVBRQCYG7qdZAIgHk%2B7%2BPtwYsNE2D8%2BWkcJkSbcPDeExAH2%2Bvupbmewy0kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQmKlaSXOCVVGJjGyrcAx8XsJ657YSeKg0o4ocYcUEvOGr7wP4TTgqEKdE9aqfNpzEgOpcghUWv%2F%2FxIMD2qPEtlh3sYAf5nHsIwRwHLDXANwq24Ju3m3TXfeBp5dqPEZ3ywnxrWaOKyZhJAYt3iR6Pmb8cZs3Qy9bZPxn2%2FBnwIFAtQ%2BDKy1Ta2ePFHiGj%2FaL9wTr0ImR3F6YlCKkS1v%2Foseyoi%2BBRdgsw4s8Z8WkqLBuUT9XZhseZ1%2FdahAGo5KVAXqI1c4B5EzOPoHTJU%2FcoglGmmN06h%2Barf%2BqEjRC1yaLRq4hSeyPgpD9PudARm300TlTDUH0mKqh0JnB4ptf%2BG0zCp8iwgsu%2BHdrHQZYmL6O23rlKocBZC%2B74qW%2FdJuVNhb3Gk%2FNIPOCGDRTgFwAu7VcPvUbAseWS64txxUAoWNuHV7CjxiVBT4246d2GHL9601nc7Bxy%2FmRtiWFeOVciNfZTxV1tLA7iyMhGREuwUlwDY46h%2Boou3mwBto1tvQanPTIApe%2Fp8Gbdc%2BBI4bltztTBFCRy2vHulLbZrRG%2FWIjIzp1YeKZ3quTpMqormO2Y18u1A%2FpC6uYVA5fXOc2avOiiPEvtObmVHpS%2FMZ6Z82W%2FziSwf8fPNsCrjR3nkPpcVuRVOdzigKKUeMNT22sQGOqUB1dAz9UpVjYwMdjnRKGeIJYZkYcIU3VliUtLSJS0v8kRdBuixsCkXjjXqyASBtNL%2B03HOTpCaNLl8nso5HCSgbgHriIVYnIPcRSaO29l%2FQ8DjyRQDcwFjE9E6ua9k4%2FA3B7NBfxfdiVWClDQNQOfeGF5fsFM4zchXwz36NRgWe%2Bp49fX%2BYvIFHfQpjH8eeHknsEYCr%2FJdZ1m6xuoP6W3zehWT9AYK&X-Amz-Signature=530130f9f218900424831a54040cf87391a771441f42c6854245411da1dd1370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNGB6J5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCq0uaZpEi8YsZ4SG%2BXun7z1ye%2FqFkcn%2BVBRQCYG7qdZAIgHk%2B7%2BPtwYsNE2D8%2BWkcJkSbcPDeExAH2%2Bvupbmewy0kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQmKlaSXOCVVGJjGyrcAx8XsJ657YSeKg0o4ocYcUEvOGr7wP4TTgqEKdE9aqfNpzEgOpcghUWv%2F%2FxIMD2qPEtlh3sYAf5nHsIwRwHLDXANwq24Ju3m3TXfeBp5dqPEZ3ywnxrWaOKyZhJAYt3iR6Pmb8cZs3Qy9bZPxn2%2FBnwIFAtQ%2BDKy1Ta2ePFHiGj%2FaL9wTr0ImR3F6YlCKkS1v%2Foseyoi%2BBRdgsw4s8Z8WkqLBuUT9XZhseZ1%2FdahAGo5KVAXqI1c4B5EzOPoHTJU%2FcoglGmmN06h%2Barf%2BqEjRC1yaLRq4hSeyPgpD9PudARm300TlTDUH0mKqh0JnB4ptf%2BG0zCp8iwgsu%2BHdrHQZYmL6O23rlKocBZC%2B74qW%2FdJuVNhb3Gk%2FNIPOCGDRTgFwAu7VcPvUbAseWS64txxUAoWNuHV7CjxiVBT4246d2GHL9601nc7Bxy%2FmRtiWFeOVciNfZTxV1tLA7iyMhGREuwUlwDY46h%2Boou3mwBto1tvQanPTIApe%2Fp8Gbdc%2BBI4bltztTBFCRy2vHulLbZrRG%2FWIjIzp1YeKZ3quTpMqormO2Y18u1A%2FpC6uYVA5fXOc2avOiiPEvtObmVHpS%2FMZ6Z82W%2FziSwf8fPNsCrjR3nkPpcVuRVOdzigKKUeMNT22sQGOqUB1dAz9UpVjYwMdjnRKGeIJYZkYcIU3VliUtLSJS0v8kRdBuixsCkXjjXqyASBtNL%2B03HOTpCaNLl8nso5HCSgbgHriIVYnIPcRSaO29l%2FQ8DjyRQDcwFjE9E6ua9k4%2FA3B7NBfxfdiVWClDQNQOfeGF5fsFM4zchXwz36NRgWe%2Bp49fX%2BYvIFHfQpjH8eeHknsEYCr%2FJdZ1m6xuoP6W3zehWT9AYK&X-Amz-Signature=661b685cd6788f146ce4781da6e89be1bd2b031486a533591e5ce361309dc45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNGB6J5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCq0uaZpEi8YsZ4SG%2BXun7z1ye%2FqFkcn%2BVBRQCYG7qdZAIgHk%2B7%2BPtwYsNE2D8%2BWkcJkSbcPDeExAH2%2Bvupbmewy0kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQmKlaSXOCVVGJjGyrcAx8XsJ657YSeKg0o4ocYcUEvOGr7wP4TTgqEKdE9aqfNpzEgOpcghUWv%2F%2FxIMD2qPEtlh3sYAf5nHsIwRwHLDXANwq24Ju3m3TXfeBp5dqPEZ3ywnxrWaOKyZhJAYt3iR6Pmb8cZs3Qy9bZPxn2%2FBnwIFAtQ%2BDKy1Ta2ePFHiGj%2FaL9wTr0ImR3F6YlCKkS1v%2Foseyoi%2BBRdgsw4s8Z8WkqLBuUT9XZhseZ1%2FdahAGo5KVAXqI1c4B5EzOPoHTJU%2FcoglGmmN06h%2Barf%2BqEjRC1yaLRq4hSeyPgpD9PudARm300TlTDUH0mKqh0JnB4ptf%2BG0zCp8iwgsu%2BHdrHQZYmL6O23rlKocBZC%2B74qW%2FdJuVNhb3Gk%2FNIPOCGDRTgFwAu7VcPvUbAseWS64txxUAoWNuHV7CjxiVBT4246d2GHL9601nc7Bxy%2FmRtiWFeOVciNfZTxV1tLA7iyMhGREuwUlwDY46h%2Boou3mwBto1tvQanPTIApe%2Fp8Gbdc%2BBI4bltztTBFCRy2vHulLbZrRG%2FWIjIzp1YeKZ3quTpMqormO2Y18u1A%2FpC6uYVA5fXOc2avOiiPEvtObmVHpS%2FMZ6Z82W%2FziSwf8fPNsCrjR3nkPpcVuRVOdzigKKUeMNT22sQGOqUB1dAz9UpVjYwMdjnRKGeIJYZkYcIU3VliUtLSJS0v8kRdBuixsCkXjjXqyASBtNL%2B03HOTpCaNLl8nso5HCSgbgHriIVYnIPcRSaO29l%2FQ8DjyRQDcwFjE9E6ua9k4%2FA3B7NBfxfdiVWClDQNQOfeGF5fsFM4zchXwz36NRgWe%2Bp49fX%2BYvIFHfQpjH8eeHknsEYCr%2FJdZ1m6xuoP6W3zehWT9AYK&X-Amz-Signature=199bdb5fc38ffdf12fd2776f85a10ff2a62d6f38224909ff6ad02ec75518497a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
