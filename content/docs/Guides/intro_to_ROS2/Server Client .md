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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJEZNMB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGTq5rq1v6TmaZGdSWrDWGiFLVYBLrvekBLKBs93gMdwIhAO38ggWxvaQfPosWRrNcS60FD4dpE3HUCZmqajO4UX7uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3wdSfQCqLbKf%2Fn0q3ANfojK25ZfuNPrVLg7usC%2BAALu1jdpqIf%2FRjpNwvw2CVR7s7lYPVI8n%2B4PanDbqD3GDK%2BAWvY7Utae%2BaxdafTQqeGeHMrSbvMNT5qyMHqnxbV%2F9rHYgO8nVEXyhdVJ%2FS75Kni%2BAWKojCDkSq9b%2FaV0Rn%2BvXGd63fGJeRnz%2BlACHW92aeig8m81Wwls9WEI0xR58YUCfAIq%2BFh3527lE9QPxqTiIgZ8ueluwVeFs8sISBDmgDvPKlLOugzxrPh%2BQKDDXszeX1njdRtAWjE3GXoSKsClQLRwQGN%2FveYg8sgZWSXCuvqrfiDra67KuFJHQWjChUH82Km43ebeqfrAAbG88kG0w%2FjorBaldSamMuUo%2FVDOP2b36WAt%2FZW96QDa5SoscZ5GU4a6b%2BM4Dw7UikGzIORfhbxLY1wT%2FAbY5%2Fluw8dnRmlNIrOciSYTVxYSH%2FxuCv2UVqIMtrUdfSB3VcLlXjwCLJuK6j8NyPiCOs4ljLHplWULvEvxadtncBlL3aNhliLQEx16Jr2PC0FFVxaOG%2FHSbxrObN60dw0%2BdKM9c%2BqvtpEzm4zfcDYxXa%2BeeVs6jOhsgqU%2FMpKEOCSJwvYtG6L0O%2FVjRycHxv8C2Wk4VJ5Q8%2FmgvOQTuSJgitDCr1p7CBjqkAX4alMKqlf7xlLv51jS63eAZlEsQaZvTvTMO9R8p0YbthMSIWXEfq7HEnMUgYnNq%2FA5JpSu25Oy90%2B47LsV2Qkn4DJ08MeZBBR0%2BuWZ5%2FvAQ%2BV%2By4K6TD7dprOaiZnQzV5ukNENiOWnw8jXj%2FRNlfIEWDcAzQ%2F9nqohtcvKPW4vUTddgh2cqUu%2FOZQ1n5NGJkgSBCMAGpQtrkbpyZJdt1XdRXIpP&X-Amz-Signature=1423912377dcc1572e8b0c41518b5c6a7456ec439f4b5f57d8edcb697fb32eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJEZNMB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGTq5rq1v6TmaZGdSWrDWGiFLVYBLrvekBLKBs93gMdwIhAO38ggWxvaQfPosWRrNcS60FD4dpE3HUCZmqajO4UX7uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3wdSfQCqLbKf%2Fn0q3ANfojK25ZfuNPrVLg7usC%2BAALu1jdpqIf%2FRjpNwvw2CVR7s7lYPVI8n%2B4PanDbqD3GDK%2BAWvY7Utae%2BaxdafTQqeGeHMrSbvMNT5qyMHqnxbV%2F9rHYgO8nVEXyhdVJ%2FS75Kni%2BAWKojCDkSq9b%2FaV0Rn%2BvXGd63fGJeRnz%2BlACHW92aeig8m81Wwls9WEI0xR58YUCfAIq%2BFh3527lE9QPxqTiIgZ8ueluwVeFs8sISBDmgDvPKlLOugzxrPh%2BQKDDXszeX1njdRtAWjE3GXoSKsClQLRwQGN%2FveYg8sgZWSXCuvqrfiDra67KuFJHQWjChUH82Km43ebeqfrAAbG88kG0w%2FjorBaldSamMuUo%2FVDOP2b36WAt%2FZW96QDa5SoscZ5GU4a6b%2BM4Dw7UikGzIORfhbxLY1wT%2FAbY5%2Fluw8dnRmlNIrOciSYTVxYSH%2FxuCv2UVqIMtrUdfSB3VcLlXjwCLJuK6j8NyPiCOs4ljLHplWULvEvxadtncBlL3aNhliLQEx16Jr2PC0FFVxaOG%2FHSbxrObN60dw0%2BdKM9c%2BqvtpEzm4zfcDYxXa%2BeeVs6jOhsgqU%2FMpKEOCSJwvYtG6L0O%2FVjRycHxv8C2Wk4VJ5Q8%2FmgvOQTuSJgitDCr1p7CBjqkAX4alMKqlf7xlLv51jS63eAZlEsQaZvTvTMO9R8p0YbthMSIWXEfq7HEnMUgYnNq%2FA5JpSu25Oy90%2B47LsV2Qkn4DJ08MeZBBR0%2BuWZ5%2FvAQ%2BV%2By4K6TD7dprOaiZnQzV5ukNENiOWnw8jXj%2FRNlfIEWDcAzQ%2F9nqohtcvKPW4vUTddgh2cqUu%2FOZQ1n5NGJkgSBCMAGpQtrkbpyZJdt1XdRXIpP&X-Amz-Signature=dfca8f235fa899e416f416ab4f4d6ac73f254569855251dde4a3dc0914ee42e1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJEZNMB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGTq5rq1v6TmaZGdSWrDWGiFLVYBLrvekBLKBs93gMdwIhAO38ggWxvaQfPosWRrNcS60FD4dpE3HUCZmqajO4UX7uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3wdSfQCqLbKf%2Fn0q3ANfojK25ZfuNPrVLg7usC%2BAALu1jdpqIf%2FRjpNwvw2CVR7s7lYPVI8n%2B4PanDbqD3GDK%2BAWvY7Utae%2BaxdafTQqeGeHMrSbvMNT5qyMHqnxbV%2F9rHYgO8nVEXyhdVJ%2FS75Kni%2BAWKojCDkSq9b%2FaV0Rn%2BvXGd63fGJeRnz%2BlACHW92aeig8m81Wwls9WEI0xR58YUCfAIq%2BFh3527lE9QPxqTiIgZ8ueluwVeFs8sISBDmgDvPKlLOugzxrPh%2BQKDDXszeX1njdRtAWjE3GXoSKsClQLRwQGN%2FveYg8sgZWSXCuvqrfiDra67KuFJHQWjChUH82Km43ebeqfrAAbG88kG0w%2FjorBaldSamMuUo%2FVDOP2b36WAt%2FZW96QDa5SoscZ5GU4a6b%2BM4Dw7UikGzIORfhbxLY1wT%2FAbY5%2Fluw8dnRmlNIrOciSYTVxYSH%2FxuCv2UVqIMtrUdfSB3VcLlXjwCLJuK6j8NyPiCOs4ljLHplWULvEvxadtncBlL3aNhliLQEx16Jr2PC0FFVxaOG%2FHSbxrObN60dw0%2BdKM9c%2BqvtpEzm4zfcDYxXa%2BeeVs6jOhsgqU%2FMpKEOCSJwvYtG6L0O%2FVjRycHxv8C2Wk4VJ5Q8%2FmgvOQTuSJgitDCr1p7CBjqkAX4alMKqlf7xlLv51jS63eAZlEsQaZvTvTMO9R8p0YbthMSIWXEfq7HEnMUgYnNq%2FA5JpSu25Oy90%2B47LsV2Qkn4DJ08MeZBBR0%2BuWZ5%2FvAQ%2BV%2By4K6TD7dprOaiZnQzV5ukNENiOWnw8jXj%2FRNlfIEWDcAzQ%2F9nqohtcvKPW4vUTddgh2cqUu%2FOZQ1n5NGJkgSBCMAGpQtrkbpyZJdt1XdRXIpP&X-Amz-Signature=3cd3c9ee3e0a0f87566b4b40236bc97f9c302f76f4d8690d993e358e3ecac2a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJEZNMB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGTq5rq1v6TmaZGdSWrDWGiFLVYBLrvekBLKBs93gMdwIhAO38ggWxvaQfPosWRrNcS60FD4dpE3HUCZmqajO4UX7uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3wdSfQCqLbKf%2Fn0q3ANfojK25ZfuNPrVLg7usC%2BAALu1jdpqIf%2FRjpNwvw2CVR7s7lYPVI8n%2B4PanDbqD3GDK%2BAWvY7Utae%2BaxdafTQqeGeHMrSbvMNT5qyMHqnxbV%2F9rHYgO8nVEXyhdVJ%2FS75Kni%2BAWKojCDkSq9b%2FaV0Rn%2BvXGd63fGJeRnz%2BlACHW92aeig8m81Wwls9WEI0xR58YUCfAIq%2BFh3527lE9QPxqTiIgZ8ueluwVeFs8sISBDmgDvPKlLOugzxrPh%2BQKDDXszeX1njdRtAWjE3GXoSKsClQLRwQGN%2FveYg8sgZWSXCuvqrfiDra67KuFJHQWjChUH82Km43ebeqfrAAbG88kG0w%2FjorBaldSamMuUo%2FVDOP2b36WAt%2FZW96QDa5SoscZ5GU4a6b%2BM4Dw7UikGzIORfhbxLY1wT%2FAbY5%2Fluw8dnRmlNIrOciSYTVxYSH%2FxuCv2UVqIMtrUdfSB3VcLlXjwCLJuK6j8NyPiCOs4ljLHplWULvEvxadtncBlL3aNhliLQEx16Jr2PC0FFVxaOG%2FHSbxrObN60dw0%2BdKM9c%2BqvtpEzm4zfcDYxXa%2BeeVs6jOhsgqU%2FMpKEOCSJwvYtG6L0O%2FVjRycHxv8C2Wk4VJ5Q8%2FmgvOQTuSJgitDCr1p7CBjqkAX4alMKqlf7xlLv51jS63eAZlEsQaZvTvTMO9R8p0YbthMSIWXEfq7HEnMUgYnNq%2FA5JpSu25Oy90%2B47LsV2Qkn4DJ08MeZBBR0%2BuWZ5%2FvAQ%2BV%2By4K6TD7dprOaiZnQzV5ukNENiOWnw8jXj%2FRNlfIEWDcAzQ%2F9nqohtcvKPW4vUTddgh2cqUu%2FOZQ1n5NGJkgSBCMAGpQtrkbpyZJdt1XdRXIpP&X-Amz-Signature=57374f815ba6f7a677b627ef20613fc13a976df9ea31180fe40e52c3ce47f2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJEZNMB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGTq5rq1v6TmaZGdSWrDWGiFLVYBLrvekBLKBs93gMdwIhAO38ggWxvaQfPosWRrNcS60FD4dpE3HUCZmqajO4UX7uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3wdSfQCqLbKf%2Fn0q3ANfojK25ZfuNPrVLg7usC%2BAALu1jdpqIf%2FRjpNwvw2CVR7s7lYPVI8n%2B4PanDbqD3GDK%2BAWvY7Utae%2BaxdafTQqeGeHMrSbvMNT5qyMHqnxbV%2F9rHYgO8nVEXyhdVJ%2FS75Kni%2BAWKojCDkSq9b%2FaV0Rn%2BvXGd63fGJeRnz%2BlACHW92aeig8m81Wwls9WEI0xR58YUCfAIq%2BFh3527lE9QPxqTiIgZ8ueluwVeFs8sISBDmgDvPKlLOugzxrPh%2BQKDDXszeX1njdRtAWjE3GXoSKsClQLRwQGN%2FveYg8sgZWSXCuvqrfiDra67KuFJHQWjChUH82Km43ebeqfrAAbG88kG0w%2FjorBaldSamMuUo%2FVDOP2b36WAt%2FZW96QDa5SoscZ5GU4a6b%2BM4Dw7UikGzIORfhbxLY1wT%2FAbY5%2Fluw8dnRmlNIrOciSYTVxYSH%2FxuCv2UVqIMtrUdfSB3VcLlXjwCLJuK6j8NyPiCOs4ljLHplWULvEvxadtncBlL3aNhliLQEx16Jr2PC0FFVxaOG%2FHSbxrObN60dw0%2BdKM9c%2BqvtpEzm4zfcDYxXa%2BeeVs6jOhsgqU%2FMpKEOCSJwvYtG6L0O%2FVjRycHxv8C2Wk4VJ5Q8%2FmgvOQTuSJgitDCr1p7CBjqkAX4alMKqlf7xlLv51jS63eAZlEsQaZvTvTMO9R8p0YbthMSIWXEfq7HEnMUgYnNq%2FA5JpSu25Oy90%2B47LsV2Qkn4DJ08MeZBBR0%2BuWZ5%2FvAQ%2BV%2By4K6TD7dprOaiZnQzV5ukNENiOWnw8jXj%2FRNlfIEWDcAzQ%2F9nqohtcvKPW4vUTddgh2cqUu%2FOZQ1n5NGJkgSBCMAGpQtrkbpyZJdt1XdRXIpP&X-Amz-Signature=bf2bd3132d846fdcf8eb482aafbc155ba0ce2fddacd10a04602aa1c0bc3b0a05&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
