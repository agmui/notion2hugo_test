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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466742B7ZB3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9VIsG%2FT5PfIEdOGxDkstWmBCzHE5i4W%2BGU3CSwFT9uAiBjShTCtguUdACaYzx7N0ETZYtDNXh18qVdpQ4Nc591xyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDFoLItTaXdwMlTSKtwDBzWNQLGsUr%2FcJvFsHNAPZjZUbwmT%2BwfPX%2BY%2BhxiarzO3l1s0CA%2FNuo0nNs2MeEvLq0jj25U81cVvIb%2B2Wb7OyozY8g9H1UPu94iWT%2FMnEWcizwWgGnRK3%2Fv6qT4WOl%2Blpg8Y5wgyEvzLxEQG4msW8FB8yJoLvKs384yQHW2ccOQDPKF2oQo79f97%2BRKYNDgOZKC%2FhNog2kRuEKuCfThV2seIKy2D9%2BjMpVezDuY57kST%2FJWqx2IXm3gWLw4FOwaqKB%2BmOq0EBE3waPa0h0Q6cU1fOHLWk4C0MLqqiFiuEG5ncVj82zdfpjToXMqt7N2VsCXdsBOV5onqMAHN8%2BM4EAlkrCQPjndJGFLFHmeGITmrftBtbLMd%2BzHL3buDMTLt%2BVLoRoiomAvMqw25vrXAMSGrl%2Bm6FvgOnnMlrkXwGGmJNo7m0bmYxUFlrIErQ5MddB2VDXXwG3eycJAIhR2T3CfHO2kSGVSiRb%2F9vAbQniVxDLkA3ikRmsWCtQbsUVBI%2BE0L0vhG4t4XKJMLOyATK1JCrtZmOfqfuA1rxChYrZrppxEJfbu7pVu6OS42V60fL7MYVUNQeSsvAg3LNapDKPQ9rO%2Brp4Rf4GIAq3m5ArsKwQzAibqKqlfNkvYwnYzlvQY6pgH06D9zitN4iiaPYWc01mGxWUbtXNN%2F0n5R%2Fh56ItyfdKxSsPyc693aYmC4Sft3vASoetmMMUzINyjA4zU5GFxJWkOrPRTvU5VptWIWzh0COnqnK6uEsA30r0j323v2q24Ol%2BzbsPID0YLSVRaXofXuzOFj66McboRABKiN5C3p5TzIOuKd94COL%2FVJ2UwujkJMn8xGsxtFRgKV8mXFZ4rz%2FjJk%2FWXW&X-Amz-Signature=9e88bfc9015a02ba5f857781277687300be2b8c13213eacc54677ca0df04863a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466742B7ZB3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9VIsG%2FT5PfIEdOGxDkstWmBCzHE5i4W%2BGU3CSwFT9uAiBjShTCtguUdACaYzx7N0ETZYtDNXh18qVdpQ4Nc591xyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDFoLItTaXdwMlTSKtwDBzWNQLGsUr%2FcJvFsHNAPZjZUbwmT%2BwfPX%2BY%2BhxiarzO3l1s0CA%2FNuo0nNs2MeEvLq0jj25U81cVvIb%2B2Wb7OyozY8g9H1UPu94iWT%2FMnEWcizwWgGnRK3%2Fv6qT4WOl%2Blpg8Y5wgyEvzLxEQG4msW8FB8yJoLvKs384yQHW2ccOQDPKF2oQo79f97%2BRKYNDgOZKC%2FhNog2kRuEKuCfThV2seIKy2D9%2BjMpVezDuY57kST%2FJWqx2IXm3gWLw4FOwaqKB%2BmOq0EBE3waPa0h0Q6cU1fOHLWk4C0MLqqiFiuEG5ncVj82zdfpjToXMqt7N2VsCXdsBOV5onqMAHN8%2BM4EAlkrCQPjndJGFLFHmeGITmrftBtbLMd%2BzHL3buDMTLt%2BVLoRoiomAvMqw25vrXAMSGrl%2Bm6FvgOnnMlrkXwGGmJNo7m0bmYxUFlrIErQ5MddB2VDXXwG3eycJAIhR2T3CfHO2kSGVSiRb%2F9vAbQniVxDLkA3ikRmsWCtQbsUVBI%2BE0L0vhG4t4XKJMLOyATK1JCrtZmOfqfuA1rxChYrZrppxEJfbu7pVu6OS42V60fL7MYVUNQeSsvAg3LNapDKPQ9rO%2Brp4Rf4GIAq3m5ArsKwQzAibqKqlfNkvYwnYzlvQY6pgH06D9zitN4iiaPYWc01mGxWUbtXNN%2F0n5R%2Fh56ItyfdKxSsPyc693aYmC4Sft3vASoetmMMUzINyjA4zU5GFxJWkOrPRTvU5VptWIWzh0COnqnK6uEsA30r0j323v2q24Ol%2BzbsPID0YLSVRaXofXuzOFj66McboRABKiN5C3p5TzIOuKd94COL%2FVJ2UwujkJMn8xGsxtFRgKV8mXFZ4rz%2FjJk%2FWXW&X-Amz-Signature=3f87c91be070b9b55ea9d90c8c6889566ee991808644cbeaa9b02c2a8e387f00&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466742B7ZB3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9VIsG%2FT5PfIEdOGxDkstWmBCzHE5i4W%2BGU3CSwFT9uAiBjShTCtguUdACaYzx7N0ETZYtDNXh18qVdpQ4Nc591xyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDFoLItTaXdwMlTSKtwDBzWNQLGsUr%2FcJvFsHNAPZjZUbwmT%2BwfPX%2BY%2BhxiarzO3l1s0CA%2FNuo0nNs2MeEvLq0jj25U81cVvIb%2B2Wb7OyozY8g9H1UPu94iWT%2FMnEWcizwWgGnRK3%2Fv6qT4WOl%2Blpg8Y5wgyEvzLxEQG4msW8FB8yJoLvKs384yQHW2ccOQDPKF2oQo79f97%2BRKYNDgOZKC%2FhNog2kRuEKuCfThV2seIKy2D9%2BjMpVezDuY57kST%2FJWqx2IXm3gWLw4FOwaqKB%2BmOq0EBE3waPa0h0Q6cU1fOHLWk4C0MLqqiFiuEG5ncVj82zdfpjToXMqt7N2VsCXdsBOV5onqMAHN8%2BM4EAlkrCQPjndJGFLFHmeGITmrftBtbLMd%2BzHL3buDMTLt%2BVLoRoiomAvMqw25vrXAMSGrl%2Bm6FvgOnnMlrkXwGGmJNo7m0bmYxUFlrIErQ5MddB2VDXXwG3eycJAIhR2T3CfHO2kSGVSiRb%2F9vAbQniVxDLkA3ikRmsWCtQbsUVBI%2BE0L0vhG4t4XKJMLOyATK1JCrtZmOfqfuA1rxChYrZrppxEJfbu7pVu6OS42V60fL7MYVUNQeSsvAg3LNapDKPQ9rO%2Brp4Rf4GIAq3m5ArsKwQzAibqKqlfNkvYwnYzlvQY6pgH06D9zitN4iiaPYWc01mGxWUbtXNN%2F0n5R%2Fh56ItyfdKxSsPyc693aYmC4Sft3vASoetmMMUzINyjA4zU5GFxJWkOrPRTvU5VptWIWzh0COnqnK6uEsA30r0j323v2q24Ol%2BzbsPID0YLSVRaXofXuzOFj66McboRABKiN5C3p5TzIOuKd94COL%2FVJ2UwujkJMn8xGsxtFRgKV8mXFZ4rz%2FjJk%2FWXW&X-Amz-Signature=0ae34c7775423279e65cd8aa3e30978015461caa50c8cbfecc43950c6f8824eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466742B7ZB3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9VIsG%2FT5PfIEdOGxDkstWmBCzHE5i4W%2BGU3CSwFT9uAiBjShTCtguUdACaYzx7N0ETZYtDNXh18qVdpQ4Nc591xyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDFoLItTaXdwMlTSKtwDBzWNQLGsUr%2FcJvFsHNAPZjZUbwmT%2BwfPX%2BY%2BhxiarzO3l1s0CA%2FNuo0nNs2MeEvLq0jj25U81cVvIb%2B2Wb7OyozY8g9H1UPu94iWT%2FMnEWcizwWgGnRK3%2Fv6qT4WOl%2Blpg8Y5wgyEvzLxEQG4msW8FB8yJoLvKs384yQHW2ccOQDPKF2oQo79f97%2BRKYNDgOZKC%2FhNog2kRuEKuCfThV2seIKy2D9%2BjMpVezDuY57kST%2FJWqx2IXm3gWLw4FOwaqKB%2BmOq0EBE3waPa0h0Q6cU1fOHLWk4C0MLqqiFiuEG5ncVj82zdfpjToXMqt7N2VsCXdsBOV5onqMAHN8%2BM4EAlkrCQPjndJGFLFHmeGITmrftBtbLMd%2BzHL3buDMTLt%2BVLoRoiomAvMqw25vrXAMSGrl%2Bm6FvgOnnMlrkXwGGmJNo7m0bmYxUFlrIErQ5MddB2VDXXwG3eycJAIhR2T3CfHO2kSGVSiRb%2F9vAbQniVxDLkA3ikRmsWCtQbsUVBI%2BE0L0vhG4t4XKJMLOyATK1JCrtZmOfqfuA1rxChYrZrppxEJfbu7pVu6OS42V60fL7MYVUNQeSsvAg3LNapDKPQ9rO%2Brp4Rf4GIAq3m5ArsKwQzAibqKqlfNkvYwnYzlvQY6pgH06D9zitN4iiaPYWc01mGxWUbtXNN%2F0n5R%2Fh56ItyfdKxSsPyc693aYmC4Sft3vASoetmMMUzINyjA4zU5GFxJWkOrPRTvU5VptWIWzh0COnqnK6uEsA30r0j323v2q24Ol%2BzbsPID0YLSVRaXofXuzOFj66McboRABKiN5C3p5TzIOuKd94COL%2FVJ2UwujkJMn8xGsxtFRgKV8mXFZ4rz%2FjJk%2FWXW&X-Amz-Signature=e1776949c23e0598dd17798d7ee857ac0a2c0ef8beb433706098f90399d84708&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466742B7ZB3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9VIsG%2FT5PfIEdOGxDkstWmBCzHE5i4W%2BGU3CSwFT9uAiBjShTCtguUdACaYzx7N0ETZYtDNXh18qVdpQ4Nc591xyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDFoLItTaXdwMlTSKtwDBzWNQLGsUr%2FcJvFsHNAPZjZUbwmT%2BwfPX%2BY%2BhxiarzO3l1s0CA%2FNuo0nNs2MeEvLq0jj25U81cVvIb%2B2Wb7OyozY8g9H1UPu94iWT%2FMnEWcizwWgGnRK3%2Fv6qT4WOl%2Blpg8Y5wgyEvzLxEQG4msW8FB8yJoLvKs384yQHW2ccOQDPKF2oQo79f97%2BRKYNDgOZKC%2FhNog2kRuEKuCfThV2seIKy2D9%2BjMpVezDuY57kST%2FJWqx2IXm3gWLw4FOwaqKB%2BmOq0EBE3waPa0h0Q6cU1fOHLWk4C0MLqqiFiuEG5ncVj82zdfpjToXMqt7N2VsCXdsBOV5onqMAHN8%2BM4EAlkrCQPjndJGFLFHmeGITmrftBtbLMd%2BzHL3buDMTLt%2BVLoRoiomAvMqw25vrXAMSGrl%2Bm6FvgOnnMlrkXwGGmJNo7m0bmYxUFlrIErQ5MddB2VDXXwG3eycJAIhR2T3CfHO2kSGVSiRb%2F9vAbQniVxDLkA3ikRmsWCtQbsUVBI%2BE0L0vhG4t4XKJMLOyATK1JCrtZmOfqfuA1rxChYrZrppxEJfbu7pVu6OS42V60fL7MYVUNQeSsvAg3LNapDKPQ9rO%2Brp4Rf4GIAq3m5ArsKwQzAibqKqlfNkvYwnYzlvQY6pgH06D9zitN4iiaPYWc01mGxWUbtXNN%2F0n5R%2Fh56ItyfdKxSsPyc693aYmC4Sft3vASoetmMMUzINyjA4zU5GFxJWkOrPRTvU5VptWIWzh0COnqnK6uEsA30r0j323v2q24Ol%2BzbsPID0YLSVRaXofXuzOFj66McboRABKiN5C3p5TzIOuKd94COL%2FVJ2UwujkJMn8xGsxtFRgKV8mXFZ4rz%2FjJk%2FWXW&X-Amz-Signature=25a1462bc8d98b73ff10c42d6149749a1293019ff4783a7b683e774994d677f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
