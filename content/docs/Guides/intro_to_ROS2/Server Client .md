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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUQ6VKR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGNp5zk5f58BLS%2BUuFjJQ3kPmZsOcwRN1HibEk9K2BlQIhAJ7f2CeLqaHxSQdLB%2Buoaars%2BAUJ%2F69SwUzAIkzBZR8DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7D5kY9GN2xPg%2Bqd0q3AOVquJVjqKS5fsna9RAh4ltba46tvTXfVc3aj0pR8X0mc9%2FfMXHHPxxGNvZGnBf5ahM6IfxwhOq3K7FvmhXINcKMTNtmgnn%2BC6cdLuzpPmyG52DK9WFLt1ib8CefGZpFL3m5cFVY1m8s8roer%2F%2FB%2BfkpE1RcIoj6LnVE2AnKtKMt9Ff3hr8SEa9CAhyF7s3axJ6FC0gGiMa8PRQ%2FWK1FXi0TfAvGVgOqZhXEb7oMSdNMjQz9dg0D4JZMTuFEcKbW5XzWIqiJT0Skls03RDhdZLPMvzNQp1XwX8yKoyuX2DSKqDY1w0igajRWlOlk%2B5RviWF5oNZTYpVz1Ko4eEWcsDNZRbQquUO11UL6hE%2FL4Gdg7lPFDXIHYACSSrfhGfXchf2iyjesbhz0MerpIBTva2M8Zrdd0iPP0YK%2Bv%2FMrYJnT7%2Bae7WXx1lTABPaIX%2FHgpfabwUVxWlv2qjFNjlE7qKym5v%2BeehYftA8UeOysYIwYl2%2FKlElZQPQIO3I%2FZ7I3PG%2BRxD5BaWAzvkZxJJSmfrgvqIPcx4RpVjXo%2FStqDuBhJ6qVe9ESo5tbXmyeZta%2FgtmDENNwlZykKHxUjtI7oW1MHcOEB1cG58EIYoAyoZbm56xQCV7A5bGiIQ3TDCEm%2FHDBjqkAV2rrGcMKo9VhLdMQqtEfgCVlpVpqshrNifEDADIeTDTvOB3Lc0ea3IyPSrmJDi33VLZVWQtHoLd1pHQq94vyR6u6dzMTMUAs%2FmuNvs3GePcMYSbALWft%2FwkO%2BSzkcMtW8SA%2Bcv%2FTYxwssvPyZeuVYOtsb0asGoBqB03jXkrkqRQrHK4vSXuWMgD0XpkWVlHuEnrdU1OZr4Lc9NL13dEkw%2F%2BX6DH&X-Amz-Signature=28f464acee185d42c90fb2e53778b3f1c08d95421e560096eaf6185ee4b46117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUQ6VKR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGNp5zk5f58BLS%2BUuFjJQ3kPmZsOcwRN1HibEk9K2BlQIhAJ7f2CeLqaHxSQdLB%2Buoaars%2BAUJ%2F69SwUzAIkzBZR8DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7D5kY9GN2xPg%2Bqd0q3AOVquJVjqKS5fsna9RAh4ltba46tvTXfVc3aj0pR8X0mc9%2FfMXHHPxxGNvZGnBf5ahM6IfxwhOq3K7FvmhXINcKMTNtmgnn%2BC6cdLuzpPmyG52DK9WFLt1ib8CefGZpFL3m5cFVY1m8s8roer%2F%2FB%2BfkpE1RcIoj6LnVE2AnKtKMt9Ff3hr8SEa9CAhyF7s3axJ6FC0gGiMa8PRQ%2FWK1FXi0TfAvGVgOqZhXEb7oMSdNMjQz9dg0D4JZMTuFEcKbW5XzWIqiJT0Skls03RDhdZLPMvzNQp1XwX8yKoyuX2DSKqDY1w0igajRWlOlk%2B5RviWF5oNZTYpVz1Ko4eEWcsDNZRbQquUO11UL6hE%2FL4Gdg7lPFDXIHYACSSrfhGfXchf2iyjesbhz0MerpIBTva2M8Zrdd0iPP0YK%2Bv%2FMrYJnT7%2Bae7WXx1lTABPaIX%2FHgpfabwUVxWlv2qjFNjlE7qKym5v%2BeehYftA8UeOysYIwYl2%2FKlElZQPQIO3I%2FZ7I3PG%2BRxD5BaWAzvkZxJJSmfrgvqIPcx4RpVjXo%2FStqDuBhJ6qVe9ESo5tbXmyeZta%2FgtmDENNwlZykKHxUjtI7oW1MHcOEB1cG58EIYoAyoZbm56xQCV7A5bGiIQ3TDCEm%2FHDBjqkAV2rrGcMKo9VhLdMQqtEfgCVlpVpqshrNifEDADIeTDTvOB3Lc0ea3IyPSrmJDi33VLZVWQtHoLd1pHQq94vyR6u6dzMTMUAs%2FmuNvs3GePcMYSbALWft%2FwkO%2BSzkcMtW8SA%2Bcv%2FTYxwssvPyZeuVYOtsb0asGoBqB03jXkrkqRQrHK4vSXuWMgD0XpkWVlHuEnrdU1OZr4Lc9NL13dEkw%2F%2BX6DH&X-Amz-Signature=2f262cab15c22fe626fbfb63cfe0e2ce0e9b73bd2fffbd6a41d00ed03d9ace35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUQ6VKR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGNp5zk5f58BLS%2BUuFjJQ3kPmZsOcwRN1HibEk9K2BlQIhAJ7f2CeLqaHxSQdLB%2Buoaars%2BAUJ%2F69SwUzAIkzBZR8DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7D5kY9GN2xPg%2Bqd0q3AOVquJVjqKS5fsna9RAh4ltba46tvTXfVc3aj0pR8X0mc9%2FfMXHHPxxGNvZGnBf5ahM6IfxwhOq3K7FvmhXINcKMTNtmgnn%2BC6cdLuzpPmyG52DK9WFLt1ib8CefGZpFL3m5cFVY1m8s8roer%2F%2FB%2BfkpE1RcIoj6LnVE2AnKtKMt9Ff3hr8SEa9CAhyF7s3axJ6FC0gGiMa8PRQ%2FWK1FXi0TfAvGVgOqZhXEb7oMSdNMjQz9dg0D4JZMTuFEcKbW5XzWIqiJT0Skls03RDhdZLPMvzNQp1XwX8yKoyuX2DSKqDY1w0igajRWlOlk%2B5RviWF5oNZTYpVz1Ko4eEWcsDNZRbQquUO11UL6hE%2FL4Gdg7lPFDXIHYACSSrfhGfXchf2iyjesbhz0MerpIBTva2M8Zrdd0iPP0YK%2Bv%2FMrYJnT7%2Bae7WXx1lTABPaIX%2FHgpfabwUVxWlv2qjFNjlE7qKym5v%2BeehYftA8UeOysYIwYl2%2FKlElZQPQIO3I%2FZ7I3PG%2BRxD5BaWAzvkZxJJSmfrgvqIPcx4RpVjXo%2FStqDuBhJ6qVe9ESo5tbXmyeZta%2FgtmDENNwlZykKHxUjtI7oW1MHcOEB1cG58EIYoAyoZbm56xQCV7A5bGiIQ3TDCEm%2FHDBjqkAV2rrGcMKo9VhLdMQqtEfgCVlpVpqshrNifEDADIeTDTvOB3Lc0ea3IyPSrmJDi33VLZVWQtHoLd1pHQq94vyR6u6dzMTMUAs%2FmuNvs3GePcMYSbALWft%2FwkO%2BSzkcMtW8SA%2Bcv%2FTYxwssvPyZeuVYOtsb0asGoBqB03jXkrkqRQrHK4vSXuWMgD0XpkWVlHuEnrdU1OZr4Lc9NL13dEkw%2F%2BX6DH&X-Amz-Signature=bd065786ab35c454193f2b937a01808c68661d27051c2d4b02794ab414efd24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUQ6VKR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGNp5zk5f58BLS%2BUuFjJQ3kPmZsOcwRN1HibEk9K2BlQIhAJ7f2CeLqaHxSQdLB%2Buoaars%2BAUJ%2F69SwUzAIkzBZR8DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7D5kY9GN2xPg%2Bqd0q3AOVquJVjqKS5fsna9RAh4ltba46tvTXfVc3aj0pR8X0mc9%2FfMXHHPxxGNvZGnBf5ahM6IfxwhOq3K7FvmhXINcKMTNtmgnn%2BC6cdLuzpPmyG52DK9WFLt1ib8CefGZpFL3m5cFVY1m8s8roer%2F%2FB%2BfkpE1RcIoj6LnVE2AnKtKMt9Ff3hr8SEa9CAhyF7s3axJ6FC0gGiMa8PRQ%2FWK1FXi0TfAvGVgOqZhXEb7oMSdNMjQz9dg0D4JZMTuFEcKbW5XzWIqiJT0Skls03RDhdZLPMvzNQp1XwX8yKoyuX2DSKqDY1w0igajRWlOlk%2B5RviWF5oNZTYpVz1Ko4eEWcsDNZRbQquUO11UL6hE%2FL4Gdg7lPFDXIHYACSSrfhGfXchf2iyjesbhz0MerpIBTva2M8Zrdd0iPP0YK%2Bv%2FMrYJnT7%2Bae7WXx1lTABPaIX%2FHgpfabwUVxWlv2qjFNjlE7qKym5v%2BeehYftA8UeOysYIwYl2%2FKlElZQPQIO3I%2FZ7I3PG%2BRxD5BaWAzvkZxJJSmfrgvqIPcx4RpVjXo%2FStqDuBhJ6qVe9ESo5tbXmyeZta%2FgtmDENNwlZykKHxUjtI7oW1MHcOEB1cG58EIYoAyoZbm56xQCV7A5bGiIQ3TDCEm%2FHDBjqkAV2rrGcMKo9VhLdMQqtEfgCVlpVpqshrNifEDADIeTDTvOB3Lc0ea3IyPSrmJDi33VLZVWQtHoLd1pHQq94vyR6u6dzMTMUAs%2FmuNvs3GePcMYSbALWft%2FwkO%2BSzkcMtW8SA%2Bcv%2FTYxwssvPyZeuVYOtsb0asGoBqB03jXkrkqRQrHK4vSXuWMgD0XpkWVlHuEnrdU1OZr4Lc9NL13dEkw%2F%2BX6DH&X-Amz-Signature=1830f774e3deb8f4fb0b779d40dae4a86c359e9217233d7c7cf23df3fc8b14a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUQ6VKR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGNp5zk5f58BLS%2BUuFjJQ3kPmZsOcwRN1HibEk9K2BlQIhAJ7f2CeLqaHxSQdLB%2Buoaars%2BAUJ%2F69SwUzAIkzBZR8DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7D5kY9GN2xPg%2Bqd0q3AOVquJVjqKS5fsna9RAh4ltba46tvTXfVc3aj0pR8X0mc9%2FfMXHHPxxGNvZGnBf5ahM6IfxwhOq3K7FvmhXINcKMTNtmgnn%2BC6cdLuzpPmyG52DK9WFLt1ib8CefGZpFL3m5cFVY1m8s8roer%2F%2FB%2BfkpE1RcIoj6LnVE2AnKtKMt9Ff3hr8SEa9CAhyF7s3axJ6FC0gGiMa8PRQ%2FWK1FXi0TfAvGVgOqZhXEb7oMSdNMjQz9dg0D4JZMTuFEcKbW5XzWIqiJT0Skls03RDhdZLPMvzNQp1XwX8yKoyuX2DSKqDY1w0igajRWlOlk%2B5RviWF5oNZTYpVz1Ko4eEWcsDNZRbQquUO11UL6hE%2FL4Gdg7lPFDXIHYACSSrfhGfXchf2iyjesbhz0MerpIBTva2M8Zrdd0iPP0YK%2Bv%2FMrYJnT7%2Bae7WXx1lTABPaIX%2FHgpfabwUVxWlv2qjFNjlE7qKym5v%2BeehYftA8UeOysYIwYl2%2FKlElZQPQIO3I%2FZ7I3PG%2BRxD5BaWAzvkZxJJSmfrgvqIPcx4RpVjXo%2FStqDuBhJ6qVe9ESo5tbXmyeZta%2FgtmDENNwlZykKHxUjtI7oW1MHcOEB1cG58EIYoAyoZbm56xQCV7A5bGiIQ3TDCEm%2FHDBjqkAV2rrGcMKo9VhLdMQqtEfgCVlpVpqshrNifEDADIeTDTvOB3Lc0ea3IyPSrmJDi33VLZVWQtHoLd1pHQq94vyR6u6dzMTMUAs%2FmuNvs3GePcMYSbALWft%2FwkO%2BSzkcMtW8SA%2Bcv%2FTYxwssvPyZeuVYOtsb0asGoBqB03jXkrkqRQrHK4vSXuWMgD0XpkWVlHuEnrdU1OZr4Lc9NL13dEkw%2F%2BX6DH&X-Amz-Signature=efe46e90e6e4b439cec380809b0487f6f4414d7d74d91dd018dfa2fe7ba2866e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
