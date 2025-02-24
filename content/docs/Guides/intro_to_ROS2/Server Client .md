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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5VVMWP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5ZNuH0%2BF2cxiW2hdc0wg8ruvspShiF4rNm8pN4ypnAIgGOq3f%2BQGZd8i1KEkDc5YBD82DDaN6nMfrLmGgCu%2BJhoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPPv0ALS060fKU7mzyrcAxsjxnRb1IYS59jEl8wl0qjObKD1Wtd2UbOwAQ2dpO%2Fu%2BwKedIvPHGdvvA0Cj2Wq7egzRfCN%2FDFcIWBnSXUPSafpYUR%2FUOBsjieFtymITvAl%2FfykqnxYoLOuX6yDzl2HuIhEnbpsNjbR8TMkPECIS6aKDHz%2BjuhGGnmoj0qDqN5RAeetGaFTl0fpdODFFKSHD39vCG4wB%2BxWPZA64efOpgzvvKQfv8KPqtOxnYoOMOMa2%2B16xGe%2BNVzlGPR0vO6%2BSwz0cColMBHimVLqbIysb%2B4r6P1186DsRmpJSQMEv3R3A86K9K%2FVyv%2FSlQTCZMT95iVnfSEpwF0HbMDDh4YtIXwbyW1tOacCcknQ85bdhljyJuzj%2Btolu%2F3I0nT4KSvn97FEm0nik33APzXIm506AssVyrkFGIwlP9jnYgKQ4pxSuyY8q6Cnv7uTsmImSMUQz%2FVz6MlNVrM1tLoRIa1ZKxtdz7gkKooNnSsyr7vzKEp2ur%2FSxwt%2Bj3Klmk384vUS2jjuNenjb%2FKWqhSJK99rGdZj9JE2M622%2FoIRfCXYqxe7Ko4T9BAGqrpnOmbiNQoRhObCwrtQeOrK0zifsyJkZEcmKjaqqnIsWytyI2hFHr0jO%2F4Fuf39cNneDa0iMIGM8b0GOqUBD30YVotlxTDsWc8JVcB8mQT4IviYSAbqX4cA4EUw45es%2FngOPP25VrmG54VI7TL15oURYwZxJkRFUS%2BkiHRy2mYSepp1vttHcx0AwSXCyo6dKgzSHM7TQ5E3Ob8yjT%2BHnpxcQWqU5S6ius1me0tWWLzpLKb8829w6YwpXY9zZnya2G2DSkwzZ1UtyJRjGpd8bzwi%2FDWuPtzaVnVdd%2BhIK66SIrim&X-Amz-Signature=7dd67950cba38010fe0532e7fa3a638c6a6e0b99dec736781bbeefa2de3a61d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5VVMWP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5ZNuH0%2BF2cxiW2hdc0wg8ruvspShiF4rNm8pN4ypnAIgGOq3f%2BQGZd8i1KEkDc5YBD82DDaN6nMfrLmGgCu%2BJhoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPPv0ALS060fKU7mzyrcAxsjxnRb1IYS59jEl8wl0qjObKD1Wtd2UbOwAQ2dpO%2Fu%2BwKedIvPHGdvvA0Cj2Wq7egzRfCN%2FDFcIWBnSXUPSafpYUR%2FUOBsjieFtymITvAl%2FfykqnxYoLOuX6yDzl2HuIhEnbpsNjbR8TMkPECIS6aKDHz%2BjuhGGnmoj0qDqN5RAeetGaFTl0fpdODFFKSHD39vCG4wB%2BxWPZA64efOpgzvvKQfv8KPqtOxnYoOMOMa2%2B16xGe%2BNVzlGPR0vO6%2BSwz0cColMBHimVLqbIysb%2B4r6P1186DsRmpJSQMEv3R3A86K9K%2FVyv%2FSlQTCZMT95iVnfSEpwF0HbMDDh4YtIXwbyW1tOacCcknQ85bdhljyJuzj%2Btolu%2F3I0nT4KSvn97FEm0nik33APzXIm506AssVyrkFGIwlP9jnYgKQ4pxSuyY8q6Cnv7uTsmImSMUQz%2FVz6MlNVrM1tLoRIa1ZKxtdz7gkKooNnSsyr7vzKEp2ur%2FSxwt%2Bj3Klmk384vUS2jjuNenjb%2FKWqhSJK99rGdZj9JE2M622%2FoIRfCXYqxe7Ko4T9BAGqrpnOmbiNQoRhObCwrtQeOrK0zifsyJkZEcmKjaqqnIsWytyI2hFHr0jO%2F4Fuf39cNneDa0iMIGM8b0GOqUBD30YVotlxTDsWc8JVcB8mQT4IviYSAbqX4cA4EUw45es%2FngOPP25VrmG54VI7TL15oURYwZxJkRFUS%2BkiHRy2mYSepp1vttHcx0AwSXCyo6dKgzSHM7TQ5E3Ob8yjT%2BHnpxcQWqU5S6ius1me0tWWLzpLKb8829w6YwpXY9zZnya2G2DSkwzZ1UtyJRjGpd8bzwi%2FDWuPtzaVnVdd%2BhIK66SIrim&X-Amz-Signature=d9b74661d30e7e252f6a1d945b311cc3dfab4b705792c1c8561f6135b2df3fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5VVMWP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5ZNuH0%2BF2cxiW2hdc0wg8ruvspShiF4rNm8pN4ypnAIgGOq3f%2BQGZd8i1KEkDc5YBD82DDaN6nMfrLmGgCu%2BJhoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPPv0ALS060fKU7mzyrcAxsjxnRb1IYS59jEl8wl0qjObKD1Wtd2UbOwAQ2dpO%2Fu%2BwKedIvPHGdvvA0Cj2Wq7egzRfCN%2FDFcIWBnSXUPSafpYUR%2FUOBsjieFtymITvAl%2FfykqnxYoLOuX6yDzl2HuIhEnbpsNjbR8TMkPECIS6aKDHz%2BjuhGGnmoj0qDqN5RAeetGaFTl0fpdODFFKSHD39vCG4wB%2BxWPZA64efOpgzvvKQfv8KPqtOxnYoOMOMa2%2B16xGe%2BNVzlGPR0vO6%2BSwz0cColMBHimVLqbIysb%2B4r6P1186DsRmpJSQMEv3R3A86K9K%2FVyv%2FSlQTCZMT95iVnfSEpwF0HbMDDh4YtIXwbyW1tOacCcknQ85bdhljyJuzj%2Btolu%2F3I0nT4KSvn97FEm0nik33APzXIm506AssVyrkFGIwlP9jnYgKQ4pxSuyY8q6Cnv7uTsmImSMUQz%2FVz6MlNVrM1tLoRIa1ZKxtdz7gkKooNnSsyr7vzKEp2ur%2FSxwt%2Bj3Klmk384vUS2jjuNenjb%2FKWqhSJK99rGdZj9JE2M622%2FoIRfCXYqxe7Ko4T9BAGqrpnOmbiNQoRhObCwrtQeOrK0zifsyJkZEcmKjaqqnIsWytyI2hFHr0jO%2F4Fuf39cNneDa0iMIGM8b0GOqUBD30YVotlxTDsWc8JVcB8mQT4IviYSAbqX4cA4EUw45es%2FngOPP25VrmG54VI7TL15oURYwZxJkRFUS%2BkiHRy2mYSepp1vttHcx0AwSXCyo6dKgzSHM7TQ5E3Ob8yjT%2BHnpxcQWqU5S6ius1me0tWWLzpLKb8829w6YwpXY9zZnya2G2DSkwzZ1UtyJRjGpd8bzwi%2FDWuPtzaVnVdd%2BhIK66SIrim&X-Amz-Signature=63fec52ef522a3a02e31562ff6d3d77bdd96b579c4f3d60e18bfae93c18027d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5VVMWP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5ZNuH0%2BF2cxiW2hdc0wg8ruvspShiF4rNm8pN4ypnAIgGOq3f%2BQGZd8i1KEkDc5YBD82DDaN6nMfrLmGgCu%2BJhoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPPv0ALS060fKU7mzyrcAxsjxnRb1IYS59jEl8wl0qjObKD1Wtd2UbOwAQ2dpO%2Fu%2BwKedIvPHGdvvA0Cj2Wq7egzRfCN%2FDFcIWBnSXUPSafpYUR%2FUOBsjieFtymITvAl%2FfykqnxYoLOuX6yDzl2HuIhEnbpsNjbR8TMkPECIS6aKDHz%2BjuhGGnmoj0qDqN5RAeetGaFTl0fpdODFFKSHD39vCG4wB%2BxWPZA64efOpgzvvKQfv8KPqtOxnYoOMOMa2%2B16xGe%2BNVzlGPR0vO6%2BSwz0cColMBHimVLqbIysb%2B4r6P1186DsRmpJSQMEv3R3A86K9K%2FVyv%2FSlQTCZMT95iVnfSEpwF0HbMDDh4YtIXwbyW1tOacCcknQ85bdhljyJuzj%2Btolu%2F3I0nT4KSvn97FEm0nik33APzXIm506AssVyrkFGIwlP9jnYgKQ4pxSuyY8q6Cnv7uTsmImSMUQz%2FVz6MlNVrM1tLoRIa1ZKxtdz7gkKooNnSsyr7vzKEp2ur%2FSxwt%2Bj3Klmk384vUS2jjuNenjb%2FKWqhSJK99rGdZj9JE2M622%2FoIRfCXYqxe7Ko4T9BAGqrpnOmbiNQoRhObCwrtQeOrK0zifsyJkZEcmKjaqqnIsWytyI2hFHr0jO%2F4Fuf39cNneDa0iMIGM8b0GOqUBD30YVotlxTDsWc8JVcB8mQT4IviYSAbqX4cA4EUw45es%2FngOPP25VrmG54VI7TL15oURYwZxJkRFUS%2BkiHRy2mYSepp1vttHcx0AwSXCyo6dKgzSHM7TQ5E3Ob8yjT%2BHnpxcQWqU5S6ius1me0tWWLzpLKb8829w6YwpXY9zZnya2G2DSkwzZ1UtyJRjGpd8bzwi%2FDWuPtzaVnVdd%2BhIK66SIrim&X-Amz-Signature=8262d89250949b58d13a4ed8452c94666a7b18b56edb35d18f9f5f87c6d98467&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5VVMWP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5ZNuH0%2BF2cxiW2hdc0wg8ruvspShiF4rNm8pN4ypnAIgGOq3f%2BQGZd8i1KEkDc5YBD82DDaN6nMfrLmGgCu%2BJhoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPPv0ALS060fKU7mzyrcAxsjxnRb1IYS59jEl8wl0qjObKD1Wtd2UbOwAQ2dpO%2Fu%2BwKedIvPHGdvvA0Cj2Wq7egzRfCN%2FDFcIWBnSXUPSafpYUR%2FUOBsjieFtymITvAl%2FfykqnxYoLOuX6yDzl2HuIhEnbpsNjbR8TMkPECIS6aKDHz%2BjuhGGnmoj0qDqN5RAeetGaFTl0fpdODFFKSHD39vCG4wB%2BxWPZA64efOpgzvvKQfv8KPqtOxnYoOMOMa2%2B16xGe%2BNVzlGPR0vO6%2BSwz0cColMBHimVLqbIysb%2B4r6P1186DsRmpJSQMEv3R3A86K9K%2FVyv%2FSlQTCZMT95iVnfSEpwF0HbMDDh4YtIXwbyW1tOacCcknQ85bdhljyJuzj%2Btolu%2F3I0nT4KSvn97FEm0nik33APzXIm506AssVyrkFGIwlP9jnYgKQ4pxSuyY8q6Cnv7uTsmImSMUQz%2FVz6MlNVrM1tLoRIa1ZKxtdz7gkKooNnSsyr7vzKEp2ur%2FSxwt%2Bj3Klmk384vUS2jjuNenjb%2FKWqhSJK99rGdZj9JE2M622%2FoIRfCXYqxe7Ko4T9BAGqrpnOmbiNQoRhObCwrtQeOrK0zifsyJkZEcmKjaqqnIsWytyI2hFHr0jO%2F4Fuf39cNneDa0iMIGM8b0GOqUBD30YVotlxTDsWc8JVcB8mQT4IviYSAbqX4cA4EUw45es%2FngOPP25VrmG54VI7TL15oURYwZxJkRFUS%2BkiHRy2mYSepp1vttHcx0AwSXCyo6dKgzSHM7TQ5E3Ob8yjT%2BHnpxcQWqU5S6ius1me0tWWLzpLKb8829w6YwpXY9zZnya2G2DSkwzZ1UtyJRjGpd8bzwi%2FDWuPtzaVnVdd%2BhIK66SIrim&X-Amz-Signature=d0747dc50211ae20900ddf884cb981a04fac71a656956486b4707644fe7d2d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
