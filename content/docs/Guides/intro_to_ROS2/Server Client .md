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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOKYKXEM%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjiSyBJmElXUI7N3oh7gK6T%2BJKiS4FL7T5E6GbdQEv0AiA44QY3eDZXajGuTaNPo5bMb2O8bQG0Zgl%2BmPo3LhFKBir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfiFvyM2xpErsIhHzKtwDtJmb0eies2x1oboLcL5vYMf1fAoKdxR1o505tUBTDTFjtP9ClMyZSzT1rRU1WMNtgivytApA5I2V7t5cClyQ2U%2Fp3N3R%2BjoIjzNL678Li6gtiEdj7XYYYRb6ZW6FGPd%2BMF4sq0xaisF4svBQHnn3UBel1Y1rZWwmLfSEPeTPa9y7TIbEwABRgiKAG8vDinTSwBPra6uhJv3DX5c2trSjNp8zYDCM%2FRLPs2FVqS7MwMRvJbaLSS41XSD9r6yxevht2AiR%2F%2B2Kk7ELdC2FqL%2BNCjCULYdrw8%2BkdB6AqOiOikjo80rDA%2BazsY9n8Nm5Bx0IQzTTVTfU76CzdN5WhFb%2Fh92Oy7RFTfay90s1RtqssP%2FcicK2y%2FY079wqjPpxHqHFYpyXGycNnicyRRNM9HKep70qgToKYdtmBZLmggCa6oCjWuhKC%2FeBpq8xRbCLf566WB%2Bue96rSMmtb4PtzxkZSZhK0hnV4GqxElgTMh7uCZJGne%2BObQ4Oxa1F30E77wUM6mg8gNW0QERAnljZXAmqAqcpDr9hTHP2C%2FhsiDIiHCRmF4lEMxj%2BfMTpaMvcbaWmAqVbLwe1NI0BO9gJbwb5Nn8oAsMMhXIskWaaQdXDsBbCsCi12FuK%2BXovnbsw246kxQY6pgGKCg7IGIiLyUST%2Br0bLhg%2FdR2oCQs9ul0wDwj1tE9C1w1YGC39ucUvwBqFEzt3yTH02O%2BEjqW0ltWLyIO1jw%2FSgFbgw3ffr%2BK45Pk2jShRyNpMmp1XrJ2ir3tyLuRM0FjoSpaYp%2Bb5hmb5LNtuGYL6EtcHQEaT0l1CKpCrOLW0aNC04XCHaSE5MfszWZbOy5Et0wz2fBzo%2BipBv%2FLh%2Bt%2Bt1POfY5Hq&X-Amz-Signature=7600e202e874e4fe3223b6a1c2fd8e49399e78a69f5279f2477c9dabf90aaac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOKYKXEM%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjiSyBJmElXUI7N3oh7gK6T%2BJKiS4FL7T5E6GbdQEv0AiA44QY3eDZXajGuTaNPo5bMb2O8bQG0Zgl%2BmPo3LhFKBir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfiFvyM2xpErsIhHzKtwDtJmb0eies2x1oboLcL5vYMf1fAoKdxR1o505tUBTDTFjtP9ClMyZSzT1rRU1WMNtgivytApA5I2V7t5cClyQ2U%2Fp3N3R%2BjoIjzNL678Li6gtiEdj7XYYYRb6ZW6FGPd%2BMF4sq0xaisF4svBQHnn3UBel1Y1rZWwmLfSEPeTPa9y7TIbEwABRgiKAG8vDinTSwBPra6uhJv3DX5c2trSjNp8zYDCM%2FRLPs2FVqS7MwMRvJbaLSS41XSD9r6yxevht2AiR%2F%2B2Kk7ELdC2FqL%2BNCjCULYdrw8%2BkdB6AqOiOikjo80rDA%2BazsY9n8Nm5Bx0IQzTTVTfU76CzdN5WhFb%2Fh92Oy7RFTfay90s1RtqssP%2FcicK2y%2FY079wqjPpxHqHFYpyXGycNnicyRRNM9HKep70qgToKYdtmBZLmggCa6oCjWuhKC%2FeBpq8xRbCLf566WB%2Bue96rSMmtb4PtzxkZSZhK0hnV4GqxElgTMh7uCZJGne%2BObQ4Oxa1F30E77wUM6mg8gNW0QERAnljZXAmqAqcpDr9hTHP2C%2FhsiDIiHCRmF4lEMxj%2BfMTpaMvcbaWmAqVbLwe1NI0BO9gJbwb5Nn8oAsMMhXIskWaaQdXDsBbCsCi12FuK%2BXovnbsw246kxQY6pgGKCg7IGIiLyUST%2Br0bLhg%2FdR2oCQs9ul0wDwj1tE9C1w1YGC39ucUvwBqFEzt3yTH02O%2BEjqW0ltWLyIO1jw%2FSgFbgw3ffr%2BK45Pk2jShRyNpMmp1XrJ2ir3tyLuRM0FjoSpaYp%2Bb5hmb5LNtuGYL6EtcHQEaT0l1CKpCrOLW0aNC04XCHaSE5MfszWZbOy5Et0wz2fBzo%2BipBv%2FLh%2Bt%2Bt1POfY5Hq&X-Amz-Signature=1e3392edbcc56acd2c71354b5f3ddff268eb0032498671aa8845d476329f328d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOKYKXEM%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjiSyBJmElXUI7N3oh7gK6T%2BJKiS4FL7T5E6GbdQEv0AiA44QY3eDZXajGuTaNPo5bMb2O8bQG0Zgl%2BmPo3LhFKBir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfiFvyM2xpErsIhHzKtwDtJmb0eies2x1oboLcL5vYMf1fAoKdxR1o505tUBTDTFjtP9ClMyZSzT1rRU1WMNtgivytApA5I2V7t5cClyQ2U%2Fp3N3R%2BjoIjzNL678Li6gtiEdj7XYYYRb6ZW6FGPd%2BMF4sq0xaisF4svBQHnn3UBel1Y1rZWwmLfSEPeTPa9y7TIbEwABRgiKAG8vDinTSwBPra6uhJv3DX5c2trSjNp8zYDCM%2FRLPs2FVqS7MwMRvJbaLSS41XSD9r6yxevht2AiR%2F%2B2Kk7ELdC2FqL%2BNCjCULYdrw8%2BkdB6AqOiOikjo80rDA%2BazsY9n8Nm5Bx0IQzTTVTfU76CzdN5WhFb%2Fh92Oy7RFTfay90s1RtqssP%2FcicK2y%2FY079wqjPpxHqHFYpyXGycNnicyRRNM9HKep70qgToKYdtmBZLmggCa6oCjWuhKC%2FeBpq8xRbCLf566WB%2Bue96rSMmtb4PtzxkZSZhK0hnV4GqxElgTMh7uCZJGne%2BObQ4Oxa1F30E77wUM6mg8gNW0QERAnljZXAmqAqcpDr9hTHP2C%2FhsiDIiHCRmF4lEMxj%2BfMTpaMvcbaWmAqVbLwe1NI0BO9gJbwb5Nn8oAsMMhXIskWaaQdXDsBbCsCi12FuK%2BXovnbsw246kxQY6pgGKCg7IGIiLyUST%2Br0bLhg%2FdR2oCQs9ul0wDwj1tE9C1w1YGC39ucUvwBqFEzt3yTH02O%2BEjqW0ltWLyIO1jw%2FSgFbgw3ffr%2BK45Pk2jShRyNpMmp1XrJ2ir3tyLuRM0FjoSpaYp%2Bb5hmb5LNtuGYL6EtcHQEaT0l1CKpCrOLW0aNC04XCHaSE5MfszWZbOy5Et0wz2fBzo%2BipBv%2FLh%2Bt%2Bt1POfY5Hq&X-Amz-Signature=d15db4a66af0c93d9ed2794243f5ed283a20fe2a4db3e150e9d59d7266b86ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOKYKXEM%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjiSyBJmElXUI7N3oh7gK6T%2BJKiS4FL7T5E6GbdQEv0AiA44QY3eDZXajGuTaNPo5bMb2O8bQG0Zgl%2BmPo3LhFKBir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfiFvyM2xpErsIhHzKtwDtJmb0eies2x1oboLcL5vYMf1fAoKdxR1o505tUBTDTFjtP9ClMyZSzT1rRU1WMNtgivytApA5I2V7t5cClyQ2U%2Fp3N3R%2BjoIjzNL678Li6gtiEdj7XYYYRb6ZW6FGPd%2BMF4sq0xaisF4svBQHnn3UBel1Y1rZWwmLfSEPeTPa9y7TIbEwABRgiKAG8vDinTSwBPra6uhJv3DX5c2trSjNp8zYDCM%2FRLPs2FVqS7MwMRvJbaLSS41XSD9r6yxevht2AiR%2F%2B2Kk7ELdC2FqL%2BNCjCULYdrw8%2BkdB6AqOiOikjo80rDA%2BazsY9n8Nm5Bx0IQzTTVTfU76CzdN5WhFb%2Fh92Oy7RFTfay90s1RtqssP%2FcicK2y%2FY079wqjPpxHqHFYpyXGycNnicyRRNM9HKep70qgToKYdtmBZLmggCa6oCjWuhKC%2FeBpq8xRbCLf566WB%2Bue96rSMmtb4PtzxkZSZhK0hnV4GqxElgTMh7uCZJGne%2BObQ4Oxa1F30E77wUM6mg8gNW0QERAnljZXAmqAqcpDr9hTHP2C%2FhsiDIiHCRmF4lEMxj%2BfMTpaMvcbaWmAqVbLwe1NI0BO9gJbwb5Nn8oAsMMhXIskWaaQdXDsBbCsCi12FuK%2BXovnbsw246kxQY6pgGKCg7IGIiLyUST%2Br0bLhg%2FdR2oCQs9ul0wDwj1tE9C1w1YGC39ucUvwBqFEzt3yTH02O%2BEjqW0ltWLyIO1jw%2FSgFbgw3ffr%2BK45Pk2jShRyNpMmp1XrJ2ir3tyLuRM0FjoSpaYp%2Bb5hmb5LNtuGYL6EtcHQEaT0l1CKpCrOLW0aNC04XCHaSE5MfszWZbOy5Et0wz2fBzo%2BipBv%2FLh%2Bt%2Bt1POfY5Hq&X-Amz-Signature=1c5c9cea18082958d41e245da06fcffd8ac661ac7cf5d0c3af54607638007ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOKYKXEM%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjiSyBJmElXUI7N3oh7gK6T%2BJKiS4FL7T5E6GbdQEv0AiA44QY3eDZXajGuTaNPo5bMb2O8bQG0Zgl%2BmPo3LhFKBir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfiFvyM2xpErsIhHzKtwDtJmb0eies2x1oboLcL5vYMf1fAoKdxR1o505tUBTDTFjtP9ClMyZSzT1rRU1WMNtgivytApA5I2V7t5cClyQ2U%2Fp3N3R%2BjoIjzNL678Li6gtiEdj7XYYYRb6ZW6FGPd%2BMF4sq0xaisF4svBQHnn3UBel1Y1rZWwmLfSEPeTPa9y7TIbEwABRgiKAG8vDinTSwBPra6uhJv3DX5c2trSjNp8zYDCM%2FRLPs2FVqS7MwMRvJbaLSS41XSD9r6yxevht2AiR%2F%2B2Kk7ELdC2FqL%2BNCjCULYdrw8%2BkdB6AqOiOikjo80rDA%2BazsY9n8Nm5Bx0IQzTTVTfU76CzdN5WhFb%2Fh92Oy7RFTfay90s1RtqssP%2FcicK2y%2FY079wqjPpxHqHFYpyXGycNnicyRRNM9HKep70qgToKYdtmBZLmggCa6oCjWuhKC%2FeBpq8xRbCLf566WB%2Bue96rSMmtb4PtzxkZSZhK0hnV4GqxElgTMh7uCZJGne%2BObQ4Oxa1F30E77wUM6mg8gNW0QERAnljZXAmqAqcpDr9hTHP2C%2FhsiDIiHCRmF4lEMxj%2BfMTpaMvcbaWmAqVbLwe1NI0BO9gJbwb5Nn8oAsMMhXIskWaaQdXDsBbCsCi12FuK%2BXovnbsw246kxQY6pgGKCg7IGIiLyUST%2Br0bLhg%2FdR2oCQs9ul0wDwj1tE9C1w1YGC39ucUvwBqFEzt3yTH02O%2BEjqW0ltWLyIO1jw%2FSgFbgw3ffr%2BK45Pk2jShRyNpMmp1XrJ2ir3tyLuRM0FjoSpaYp%2Bb5hmb5LNtuGYL6EtcHQEaT0l1CKpCrOLW0aNC04XCHaSE5MfszWZbOy5Et0wz2fBzo%2BipBv%2FLh%2Bt%2Bt1POfY5Hq&X-Amz-Signature=7ad97ab2d64ffb8855fadcec74e53815c58c6b4a99bf69c287ae2afb02ec93ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
