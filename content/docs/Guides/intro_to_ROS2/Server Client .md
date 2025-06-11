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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LARNVHW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOmJ%2FDJxnM5lMelEyt57MCB9Xe%2BuU%2Bsq6%2FH4qtFvbbngIhALJiUTarePkCtp1X%2F%2BkUcwix3i4LLnGEorkZ70TfFWLcKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2BMHBO%2BmfIEzN%2B4wq3ANtMYLDdVjOr33BQB5SoUUt6AGFXXzHBTwuooWpLVMAuaGOB54hP01%2F5GK2KZO6XfVLLNnwevnpXPxB3LYeKxrETEBMCbKqTpFRI4bHG60QO4NHyEqBWvubDsA4mKXckwk0AI8cOhnZnbdcZN9UuQg0PPrE66Q%2BLhcxiImgzfY0LTQtmabsSi6oi%2BqrdqJPqiKsmp2eHfPE2ovxAM65maxQive4AcxyPl7nERMhbBou3OVUeMCZkZT9VNyGZT2PyEn%2FTBx1teDVdViQJ8kHajiIf0eBNWALqpsnnz3AHv8XwnK7N0V85WFu3zVLTn6djCjqPwgEScrhP%2F53JUTLdwUGBfTPmBkGT02oaAF4%2BdUFxXT%2F6cZ6MQZoc58lmE02LezU62XxhdTTDV5nAB9IyEVYntOOcQMvnRCXDZ7cHxkdggquox0JBdKl0BmGO1fLXnaxaq1v8t%2B0PLjkuoiDZPn8C741ZRX%2F59UFdiUto8O5QNhQwt0%2FaapNjbAa90U%2FGAZvWxYmwZb0bIF%2BX%2FCocdKn0b5w2MDaCuQIhUq59xAQRwINWkGf%2BLWC2%2Br%2FlG6XeclPVkPKEG9h2h14XaaGKXV0ct1KrJhEuCjqvdGBDaYc4Ng%2BXqS1BjcM9NSoMjDzuKXCBjqkATA7eYCmzQOvyOZQrE9oI9eye56J4lPLMzgBzIPc17XtaX2gYyFnDsEKZ4Mt7%2Fb92nfTJA%2FN5OpEPeazBWM6PrNLNkt9iN5hgtZqsRRPex3fOmUHDUgezdk7t%2FkLDoEJftEaxCivJSfH3jGwc6wRhub5fqDHNSLMjDHRqdvmOLPlwEoyMULg5MST%2FeeMeck43UcCFUlCJt%2Fq75NMNOl0%2F7q%2BShhi&X-Amz-Signature=fdc7006e31e29b5557b8796e68974ae5556206c78ff9b03a3d0ba051131b743f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LARNVHW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOmJ%2FDJxnM5lMelEyt57MCB9Xe%2BuU%2Bsq6%2FH4qtFvbbngIhALJiUTarePkCtp1X%2F%2BkUcwix3i4LLnGEorkZ70TfFWLcKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2BMHBO%2BmfIEzN%2B4wq3ANtMYLDdVjOr33BQB5SoUUt6AGFXXzHBTwuooWpLVMAuaGOB54hP01%2F5GK2KZO6XfVLLNnwevnpXPxB3LYeKxrETEBMCbKqTpFRI4bHG60QO4NHyEqBWvubDsA4mKXckwk0AI8cOhnZnbdcZN9UuQg0PPrE66Q%2BLhcxiImgzfY0LTQtmabsSi6oi%2BqrdqJPqiKsmp2eHfPE2ovxAM65maxQive4AcxyPl7nERMhbBou3OVUeMCZkZT9VNyGZT2PyEn%2FTBx1teDVdViQJ8kHajiIf0eBNWALqpsnnz3AHv8XwnK7N0V85WFu3zVLTn6djCjqPwgEScrhP%2F53JUTLdwUGBfTPmBkGT02oaAF4%2BdUFxXT%2F6cZ6MQZoc58lmE02LezU62XxhdTTDV5nAB9IyEVYntOOcQMvnRCXDZ7cHxkdggquox0JBdKl0BmGO1fLXnaxaq1v8t%2B0PLjkuoiDZPn8C741ZRX%2F59UFdiUto8O5QNhQwt0%2FaapNjbAa90U%2FGAZvWxYmwZb0bIF%2BX%2FCocdKn0b5w2MDaCuQIhUq59xAQRwINWkGf%2BLWC2%2Br%2FlG6XeclPVkPKEG9h2h14XaaGKXV0ct1KrJhEuCjqvdGBDaYc4Ng%2BXqS1BjcM9NSoMjDzuKXCBjqkATA7eYCmzQOvyOZQrE9oI9eye56J4lPLMzgBzIPc17XtaX2gYyFnDsEKZ4Mt7%2Fb92nfTJA%2FN5OpEPeazBWM6PrNLNkt9iN5hgtZqsRRPex3fOmUHDUgezdk7t%2FkLDoEJftEaxCivJSfH3jGwc6wRhub5fqDHNSLMjDHRqdvmOLPlwEoyMULg5MST%2FeeMeck43UcCFUlCJt%2Fq75NMNOl0%2F7q%2BShhi&X-Amz-Signature=b76dbed69716c5f2b2d825a6768df2ebdb9a9a08bb365aba2364099b3b2613c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LARNVHW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOmJ%2FDJxnM5lMelEyt57MCB9Xe%2BuU%2Bsq6%2FH4qtFvbbngIhALJiUTarePkCtp1X%2F%2BkUcwix3i4LLnGEorkZ70TfFWLcKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2BMHBO%2BmfIEzN%2B4wq3ANtMYLDdVjOr33BQB5SoUUt6AGFXXzHBTwuooWpLVMAuaGOB54hP01%2F5GK2KZO6XfVLLNnwevnpXPxB3LYeKxrETEBMCbKqTpFRI4bHG60QO4NHyEqBWvubDsA4mKXckwk0AI8cOhnZnbdcZN9UuQg0PPrE66Q%2BLhcxiImgzfY0LTQtmabsSi6oi%2BqrdqJPqiKsmp2eHfPE2ovxAM65maxQive4AcxyPl7nERMhbBou3OVUeMCZkZT9VNyGZT2PyEn%2FTBx1teDVdViQJ8kHajiIf0eBNWALqpsnnz3AHv8XwnK7N0V85WFu3zVLTn6djCjqPwgEScrhP%2F53JUTLdwUGBfTPmBkGT02oaAF4%2BdUFxXT%2F6cZ6MQZoc58lmE02LezU62XxhdTTDV5nAB9IyEVYntOOcQMvnRCXDZ7cHxkdggquox0JBdKl0BmGO1fLXnaxaq1v8t%2B0PLjkuoiDZPn8C741ZRX%2F59UFdiUto8O5QNhQwt0%2FaapNjbAa90U%2FGAZvWxYmwZb0bIF%2BX%2FCocdKn0b5w2MDaCuQIhUq59xAQRwINWkGf%2BLWC2%2Br%2FlG6XeclPVkPKEG9h2h14XaaGKXV0ct1KrJhEuCjqvdGBDaYc4Ng%2BXqS1BjcM9NSoMjDzuKXCBjqkATA7eYCmzQOvyOZQrE9oI9eye56J4lPLMzgBzIPc17XtaX2gYyFnDsEKZ4Mt7%2Fb92nfTJA%2FN5OpEPeazBWM6PrNLNkt9iN5hgtZqsRRPex3fOmUHDUgezdk7t%2FkLDoEJftEaxCivJSfH3jGwc6wRhub5fqDHNSLMjDHRqdvmOLPlwEoyMULg5MST%2FeeMeck43UcCFUlCJt%2Fq75NMNOl0%2F7q%2BShhi&X-Amz-Signature=afe55798f065fdad3f8254e33156a6e05efc2286f31fdc5d43760765faa3fce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LARNVHW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOmJ%2FDJxnM5lMelEyt57MCB9Xe%2BuU%2Bsq6%2FH4qtFvbbngIhALJiUTarePkCtp1X%2F%2BkUcwix3i4LLnGEorkZ70TfFWLcKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2BMHBO%2BmfIEzN%2B4wq3ANtMYLDdVjOr33BQB5SoUUt6AGFXXzHBTwuooWpLVMAuaGOB54hP01%2F5GK2KZO6XfVLLNnwevnpXPxB3LYeKxrETEBMCbKqTpFRI4bHG60QO4NHyEqBWvubDsA4mKXckwk0AI8cOhnZnbdcZN9UuQg0PPrE66Q%2BLhcxiImgzfY0LTQtmabsSi6oi%2BqrdqJPqiKsmp2eHfPE2ovxAM65maxQive4AcxyPl7nERMhbBou3OVUeMCZkZT9VNyGZT2PyEn%2FTBx1teDVdViQJ8kHajiIf0eBNWALqpsnnz3AHv8XwnK7N0V85WFu3zVLTn6djCjqPwgEScrhP%2F53JUTLdwUGBfTPmBkGT02oaAF4%2BdUFxXT%2F6cZ6MQZoc58lmE02LezU62XxhdTTDV5nAB9IyEVYntOOcQMvnRCXDZ7cHxkdggquox0JBdKl0BmGO1fLXnaxaq1v8t%2B0PLjkuoiDZPn8C741ZRX%2F59UFdiUto8O5QNhQwt0%2FaapNjbAa90U%2FGAZvWxYmwZb0bIF%2BX%2FCocdKn0b5w2MDaCuQIhUq59xAQRwINWkGf%2BLWC2%2Br%2FlG6XeclPVkPKEG9h2h14XaaGKXV0ct1KrJhEuCjqvdGBDaYc4Ng%2BXqS1BjcM9NSoMjDzuKXCBjqkATA7eYCmzQOvyOZQrE9oI9eye56J4lPLMzgBzIPc17XtaX2gYyFnDsEKZ4Mt7%2Fb92nfTJA%2FN5OpEPeazBWM6PrNLNkt9iN5hgtZqsRRPex3fOmUHDUgezdk7t%2FkLDoEJftEaxCivJSfH3jGwc6wRhub5fqDHNSLMjDHRqdvmOLPlwEoyMULg5MST%2FeeMeck43UcCFUlCJt%2Fq75NMNOl0%2F7q%2BShhi&X-Amz-Signature=34fbca9f0bcc8c61c894062c739f32bf57bca507cca1978ed7e7fc22f3ee5f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LARNVHW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOmJ%2FDJxnM5lMelEyt57MCB9Xe%2BuU%2Bsq6%2FH4qtFvbbngIhALJiUTarePkCtp1X%2F%2BkUcwix3i4LLnGEorkZ70TfFWLcKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2BMHBO%2BmfIEzN%2B4wq3ANtMYLDdVjOr33BQB5SoUUt6AGFXXzHBTwuooWpLVMAuaGOB54hP01%2F5GK2KZO6XfVLLNnwevnpXPxB3LYeKxrETEBMCbKqTpFRI4bHG60QO4NHyEqBWvubDsA4mKXckwk0AI8cOhnZnbdcZN9UuQg0PPrE66Q%2BLhcxiImgzfY0LTQtmabsSi6oi%2BqrdqJPqiKsmp2eHfPE2ovxAM65maxQive4AcxyPl7nERMhbBou3OVUeMCZkZT9VNyGZT2PyEn%2FTBx1teDVdViQJ8kHajiIf0eBNWALqpsnnz3AHv8XwnK7N0V85WFu3zVLTn6djCjqPwgEScrhP%2F53JUTLdwUGBfTPmBkGT02oaAF4%2BdUFxXT%2F6cZ6MQZoc58lmE02LezU62XxhdTTDV5nAB9IyEVYntOOcQMvnRCXDZ7cHxkdggquox0JBdKl0BmGO1fLXnaxaq1v8t%2B0PLjkuoiDZPn8C741ZRX%2F59UFdiUto8O5QNhQwt0%2FaapNjbAa90U%2FGAZvWxYmwZb0bIF%2BX%2FCocdKn0b5w2MDaCuQIhUq59xAQRwINWkGf%2BLWC2%2Br%2FlG6XeclPVkPKEG9h2h14XaaGKXV0ct1KrJhEuCjqvdGBDaYc4Ng%2BXqS1BjcM9NSoMjDzuKXCBjqkATA7eYCmzQOvyOZQrE9oI9eye56J4lPLMzgBzIPc17XtaX2gYyFnDsEKZ4Mt7%2Fb92nfTJA%2FN5OpEPeazBWM6PrNLNkt9iN5hgtZqsRRPex3fOmUHDUgezdk7t%2FkLDoEJftEaxCivJSfH3jGwc6wRhub5fqDHNSLMjDHRqdvmOLPlwEoyMULg5MST%2FeeMeck43UcCFUlCJt%2Fq75NMNOl0%2F7q%2BShhi&X-Amz-Signature=fd6fab0112bdb532ba1e881de6d8592e8929db3474b20fafaf2f5a9c11d59797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
