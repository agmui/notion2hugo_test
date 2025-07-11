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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K2BDKJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsbXj%2BwNMiTF8y6x1BKAchC6HyTDZkPMmx%2F4cEmC%2FueAiAFEtkIlD%2Fv3V38AwMw5ciBt8OrdiFYSuW7lOPjunqQsSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rK3SsJpQFEdst57KtwDH2%2BdqHCGh4f2amhWvuv%2BjB17enR2rWiAchZT39I3GgpctyN%2FBByEW42izCoTNquy8aRerU2ocTWoFZWiYch4e6WV46D37llvoJIHFBikeraet9YcKssPTegfLesxV2dhazTX%2Bk8hy9UO72RHw%2BID4rDcr8hLSk0nmstszB4IqaKz7KZGi%2BqLkTLVWudIFnlGUYFobhagBOTpIJmHm6N2Ddq%2FJBOt8tGc97WZItp%2Fl0FFdZ%2FPcfomNdCgGJAbOpPOe4ywsKqlzt3ZjLbXn84aH3Aaofsxh2cWK3fi0bNtphmmsAf8oljhh8m1AAz24JC1bgEnBUniotW6OWv0egLPG%2BIf6MmX8%2FOn5Vem06X3Y3zek6HZzGsN0UQIO9PJ4%2F89jR%2F%2BK%2FvIb8ela7xVi0APvMH0JaThgAe7be7gR3Q8XsEfThdBgSrsVTxMHgSvK7JjzLfDhEMrtePcgjMzB5zVBRFsF1D2s%2Bw8JeOlrhQKg4rVDAs8o64RGosBhSqcCEIeO1TJxB3JjZNszEAiwZ%2BdcnYsBaOV%2BqQ7MPR2Y5rmK2rkDccLpBI0zuntGCrrVACH6ygyNvP3RHZe64cvz%2B12Qud0l8V3z7fmI9qpqX8F%2FLW%2F3XfSgDpyJUb49Wkw0P7CwwY6pgH8WWinRZajsgCt8pB%2FT3iBVf32AspAyxzcnG2vfwcHDXe5%2BX3xHzt8%2Bh6LP37sNFMGpnXohv5d3o9p30kHkHllBbDhXhcMt047QJ5koQidhrduJOfte8RL1jvHfvpWq8KppV3dpTUB9%2BmYqtx83hrv6KBK5zunAkuP6NROAOHnugmQVy04JsPg54kf8XCBfhfYL56ePxyN%2FAfWG9vjUz2Qo4xcrmEY&X-Amz-Signature=c3c5822a3b5dd4cb98c4f0680b06decac46fd947df1f7fed66c44fb64af2313d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K2BDKJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsbXj%2BwNMiTF8y6x1BKAchC6HyTDZkPMmx%2F4cEmC%2FueAiAFEtkIlD%2Fv3V38AwMw5ciBt8OrdiFYSuW7lOPjunqQsSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rK3SsJpQFEdst57KtwDH2%2BdqHCGh4f2amhWvuv%2BjB17enR2rWiAchZT39I3GgpctyN%2FBByEW42izCoTNquy8aRerU2ocTWoFZWiYch4e6WV46D37llvoJIHFBikeraet9YcKssPTegfLesxV2dhazTX%2Bk8hy9UO72RHw%2BID4rDcr8hLSk0nmstszB4IqaKz7KZGi%2BqLkTLVWudIFnlGUYFobhagBOTpIJmHm6N2Ddq%2FJBOt8tGc97WZItp%2Fl0FFdZ%2FPcfomNdCgGJAbOpPOe4ywsKqlzt3ZjLbXn84aH3Aaofsxh2cWK3fi0bNtphmmsAf8oljhh8m1AAz24JC1bgEnBUniotW6OWv0egLPG%2BIf6MmX8%2FOn5Vem06X3Y3zek6HZzGsN0UQIO9PJ4%2F89jR%2F%2BK%2FvIb8ela7xVi0APvMH0JaThgAe7be7gR3Q8XsEfThdBgSrsVTxMHgSvK7JjzLfDhEMrtePcgjMzB5zVBRFsF1D2s%2Bw8JeOlrhQKg4rVDAs8o64RGosBhSqcCEIeO1TJxB3JjZNszEAiwZ%2BdcnYsBaOV%2BqQ7MPR2Y5rmK2rkDccLpBI0zuntGCrrVACH6ygyNvP3RHZe64cvz%2B12Qud0l8V3z7fmI9qpqX8F%2FLW%2F3XfSgDpyJUb49Wkw0P7CwwY6pgH8WWinRZajsgCt8pB%2FT3iBVf32AspAyxzcnG2vfwcHDXe5%2BX3xHzt8%2Bh6LP37sNFMGpnXohv5d3o9p30kHkHllBbDhXhcMt047QJ5koQidhrduJOfte8RL1jvHfvpWq8KppV3dpTUB9%2BmYqtx83hrv6KBK5zunAkuP6NROAOHnugmQVy04JsPg54kf8XCBfhfYL56ePxyN%2FAfWG9vjUz2Qo4xcrmEY&X-Amz-Signature=5b4d194ab66132980387da80631a685b67b881b66a60996e7d6161df5b042708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K2BDKJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsbXj%2BwNMiTF8y6x1BKAchC6HyTDZkPMmx%2F4cEmC%2FueAiAFEtkIlD%2Fv3V38AwMw5ciBt8OrdiFYSuW7lOPjunqQsSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rK3SsJpQFEdst57KtwDH2%2BdqHCGh4f2amhWvuv%2BjB17enR2rWiAchZT39I3GgpctyN%2FBByEW42izCoTNquy8aRerU2ocTWoFZWiYch4e6WV46D37llvoJIHFBikeraet9YcKssPTegfLesxV2dhazTX%2Bk8hy9UO72RHw%2BID4rDcr8hLSk0nmstszB4IqaKz7KZGi%2BqLkTLVWudIFnlGUYFobhagBOTpIJmHm6N2Ddq%2FJBOt8tGc97WZItp%2Fl0FFdZ%2FPcfomNdCgGJAbOpPOe4ywsKqlzt3ZjLbXn84aH3Aaofsxh2cWK3fi0bNtphmmsAf8oljhh8m1AAz24JC1bgEnBUniotW6OWv0egLPG%2BIf6MmX8%2FOn5Vem06X3Y3zek6HZzGsN0UQIO9PJ4%2F89jR%2F%2BK%2FvIb8ela7xVi0APvMH0JaThgAe7be7gR3Q8XsEfThdBgSrsVTxMHgSvK7JjzLfDhEMrtePcgjMzB5zVBRFsF1D2s%2Bw8JeOlrhQKg4rVDAs8o64RGosBhSqcCEIeO1TJxB3JjZNszEAiwZ%2BdcnYsBaOV%2BqQ7MPR2Y5rmK2rkDccLpBI0zuntGCrrVACH6ygyNvP3RHZe64cvz%2B12Qud0l8V3z7fmI9qpqX8F%2FLW%2F3XfSgDpyJUb49Wkw0P7CwwY6pgH8WWinRZajsgCt8pB%2FT3iBVf32AspAyxzcnG2vfwcHDXe5%2BX3xHzt8%2Bh6LP37sNFMGpnXohv5d3o9p30kHkHllBbDhXhcMt047QJ5koQidhrduJOfte8RL1jvHfvpWq8KppV3dpTUB9%2BmYqtx83hrv6KBK5zunAkuP6NROAOHnugmQVy04JsPg54kf8XCBfhfYL56ePxyN%2FAfWG9vjUz2Qo4xcrmEY&X-Amz-Signature=2346f7d197835aed1d7bd94ede2c40fc2d6b9cbdb715c68bf6026ceeaad2e6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K2BDKJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsbXj%2BwNMiTF8y6x1BKAchC6HyTDZkPMmx%2F4cEmC%2FueAiAFEtkIlD%2Fv3V38AwMw5ciBt8OrdiFYSuW7lOPjunqQsSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rK3SsJpQFEdst57KtwDH2%2BdqHCGh4f2amhWvuv%2BjB17enR2rWiAchZT39I3GgpctyN%2FBByEW42izCoTNquy8aRerU2ocTWoFZWiYch4e6WV46D37llvoJIHFBikeraet9YcKssPTegfLesxV2dhazTX%2Bk8hy9UO72RHw%2BID4rDcr8hLSk0nmstszB4IqaKz7KZGi%2BqLkTLVWudIFnlGUYFobhagBOTpIJmHm6N2Ddq%2FJBOt8tGc97WZItp%2Fl0FFdZ%2FPcfomNdCgGJAbOpPOe4ywsKqlzt3ZjLbXn84aH3Aaofsxh2cWK3fi0bNtphmmsAf8oljhh8m1AAz24JC1bgEnBUniotW6OWv0egLPG%2BIf6MmX8%2FOn5Vem06X3Y3zek6HZzGsN0UQIO9PJ4%2F89jR%2F%2BK%2FvIb8ela7xVi0APvMH0JaThgAe7be7gR3Q8XsEfThdBgSrsVTxMHgSvK7JjzLfDhEMrtePcgjMzB5zVBRFsF1D2s%2Bw8JeOlrhQKg4rVDAs8o64RGosBhSqcCEIeO1TJxB3JjZNszEAiwZ%2BdcnYsBaOV%2BqQ7MPR2Y5rmK2rkDccLpBI0zuntGCrrVACH6ygyNvP3RHZe64cvz%2B12Qud0l8V3z7fmI9qpqX8F%2FLW%2F3XfSgDpyJUb49Wkw0P7CwwY6pgH8WWinRZajsgCt8pB%2FT3iBVf32AspAyxzcnG2vfwcHDXe5%2BX3xHzt8%2Bh6LP37sNFMGpnXohv5d3o9p30kHkHllBbDhXhcMt047QJ5koQidhrduJOfte8RL1jvHfvpWq8KppV3dpTUB9%2BmYqtx83hrv6KBK5zunAkuP6NROAOHnugmQVy04JsPg54kf8XCBfhfYL56ePxyN%2FAfWG9vjUz2Qo4xcrmEY&X-Amz-Signature=7e75f54b2a2ae7547f64e2f3eb158562c33ad5af5592e73659733b20506329b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K2BDKJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsbXj%2BwNMiTF8y6x1BKAchC6HyTDZkPMmx%2F4cEmC%2FueAiAFEtkIlD%2Fv3V38AwMw5ciBt8OrdiFYSuW7lOPjunqQsSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rK3SsJpQFEdst57KtwDH2%2BdqHCGh4f2amhWvuv%2BjB17enR2rWiAchZT39I3GgpctyN%2FBByEW42izCoTNquy8aRerU2ocTWoFZWiYch4e6WV46D37llvoJIHFBikeraet9YcKssPTegfLesxV2dhazTX%2Bk8hy9UO72RHw%2BID4rDcr8hLSk0nmstszB4IqaKz7KZGi%2BqLkTLVWudIFnlGUYFobhagBOTpIJmHm6N2Ddq%2FJBOt8tGc97WZItp%2Fl0FFdZ%2FPcfomNdCgGJAbOpPOe4ywsKqlzt3ZjLbXn84aH3Aaofsxh2cWK3fi0bNtphmmsAf8oljhh8m1AAz24JC1bgEnBUniotW6OWv0egLPG%2BIf6MmX8%2FOn5Vem06X3Y3zek6HZzGsN0UQIO9PJ4%2F89jR%2F%2BK%2FvIb8ela7xVi0APvMH0JaThgAe7be7gR3Q8XsEfThdBgSrsVTxMHgSvK7JjzLfDhEMrtePcgjMzB5zVBRFsF1D2s%2Bw8JeOlrhQKg4rVDAs8o64RGosBhSqcCEIeO1TJxB3JjZNszEAiwZ%2BdcnYsBaOV%2BqQ7MPR2Y5rmK2rkDccLpBI0zuntGCrrVACH6ygyNvP3RHZe64cvz%2B12Qud0l8V3z7fmI9qpqX8F%2FLW%2F3XfSgDpyJUb49Wkw0P7CwwY6pgH8WWinRZajsgCt8pB%2FT3iBVf32AspAyxzcnG2vfwcHDXe5%2BX3xHzt8%2Bh6LP37sNFMGpnXohv5d3o9p30kHkHllBbDhXhcMt047QJ5koQidhrduJOfte8RL1jvHfvpWq8KppV3dpTUB9%2BmYqtx83hrv6KBK5zunAkuP6NROAOHnugmQVy04JsPg54kf8XCBfhfYL56ePxyN%2FAfWG9vjUz2Qo4xcrmEY&X-Amz-Signature=5089967d7981083ccfa411959d28438a30f77181f21b9c81bae2fb6785ff9f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
