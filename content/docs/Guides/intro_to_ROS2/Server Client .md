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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSMIOOH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAQ%2Fjrhkxs7W5odYdk30gcYn5Gm5bymp0iYbzMXKxOLgIhANUSmc5cBaU2bpag%2BnWU%2Br7j7DYy3v9Fx%2BypXZ7zhxMPKv8DCFAQABoMNjM3NDIzMTgzODA1IgyigzdSHuh6xjNkfQAq3AP6kVzEAz8dhxiIQ7fsK%2BAH3a4ArFZoOMS2GqXbLnsQ46wvSol0N4m68Mu67YTXlOZyNgdgaUeatbZlf3T0rm77s2s%2Bir24FA9HiW8LYePLRA0jEvL3IMfcAiE7IKQydLUmSTjandqqrEPz01Ks2GJDMknDKGgl9N6y0rZBMbwQUpZpjoDoAKeG9%2FNE%2FtSvUE3z4HLJ4hCfGI23k1OcQ%2FGQOSSVRNp%2Bey7AstxA7FvAtThY%2BBf2bQ7bH1bL7gQox3DTkngfJSAu3IgVNeuNyfw5fKZj2KNwDHeK%2FJYpTa%2B5qAP9LZzRvsqbHFTuWLo6LFLxD%2BpJpQnpchjH0ztQjw8iNs89%2BVbcOquMF06LtpKXWPlCEhNJov1%2FPVyrD8FWzdKVoiikEQnuhaNzAeFHEVCyChtvcxF%2FVjnsYGhkWeKgNoPNzhZiJkIRFkeIt%2F0XyOS5TB56hebImLRjLS3hbAqg8pP6cyHYE9%2FvXCbNaeB984w8deQr4gA2eLiOT2Qpn%2BJgWarS67VQgAsacKkj%2F9eQvWHJ9Tl1x4yd1R3%2BdlmqCB1om73krl4T9MRkMejTEOv2VdrzRZhKz%2FvRBcoY7qKZP7i%2FFlf1Cjuvzze4UNJpES780MramaK%2BTQOEHzDV34DABjqkARrjHokqY3DM86XZO80g4jQefuD6QVj8lhmSf2OvbfPMf4GmWd6K9g34YJbiWmvkdfe0oqnLVv0DogsijpjXaX%2FP0xc%2B%2F%2BiMzTHRYxMU%2FIqYJFpUhUDezewCbjpaQqpdyx0e4F%2BiYld3ioqzaSC07O3ubpt4KI5HCHQ0ddwsK1eiHGMiCQOQ90uGa8bAtYqQlOssgTR3Tayre7C9mnq0Izlnow7B&X-Amz-Signature=89ed076ccae39ee00f520426168eb8809aeff6886308787f4e1858c3c4813ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSMIOOH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAQ%2Fjrhkxs7W5odYdk30gcYn5Gm5bymp0iYbzMXKxOLgIhANUSmc5cBaU2bpag%2BnWU%2Br7j7DYy3v9Fx%2BypXZ7zhxMPKv8DCFAQABoMNjM3NDIzMTgzODA1IgyigzdSHuh6xjNkfQAq3AP6kVzEAz8dhxiIQ7fsK%2BAH3a4ArFZoOMS2GqXbLnsQ46wvSol0N4m68Mu67YTXlOZyNgdgaUeatbZlf3T0rm77s2s%2Bir24FA9HiW8LYePLRA0jEvL3IMfcAiE7IKQydLUmSTjandqqrEPz01Ks2GJDMknDKGgl9N6y0rZBMbwQUpZpjoDoAKeG9%2FNE%2FtSvUE3z4HLJ4hCfGI23k1OcQ%2FGQOSSVRNp%2Bey7AstxA7FvAtThY%2BBf2bQ7bH1bL7gQox3DTkngfJSAu3IgVNeuNyfw5fKZj2KNwDHeK%2FJYpTa%2B5qAP9LZzRvsqbHFTuWLo6LFLxD%2BpJpQnpchjH0ztQjw8iNs89%2BVbcOquMF06LtpKXWPlCEhNJov1%2FPVyrD8FWzdKVoiikEQnuhaNzAeFHEVCyChtvcxF%2FVjnsYGhkWeKgNoPNzhZiJkIRFkeIt%2F0XyOS5TB56hebImLRjLS3hbAqg8pP6cyHYE9%2FvXCbNaeB984w8deQr4gA2eLiOT2Qpn%2BJgWarS67VQgAsacKkj%2F9eQvWHJ9Tl1x4yd1R3%2BdlmqCB1om73krl4T9MRkMejTEOv2VdrzRZhKz%2FvRBcoY7qKZP7i%2FFlf1Cjuvzze4UNJpES780MramaK%2BTQOEHzDV34DABjqkARrjHokqY3DM86XZO80g4jQefuD6QVj8lhmSf2OvbfPMf4GmWd6K9g34YJbiWmvkdfe0oqnLVv0DogsijpjXaX%2FP0xc%2B%2F%2BiMzTHRYxMU%2FIqYJFpUhUDezewCbjpaQqpdyx0e4F%2BiYld3ioqzaSC07O3ubpt4KI5HCHQ0ddwsK1eiHGMiCQOQ90uGa8bAtYqQlOssgTR3Tayre7C9mnq0Izlnow7B&X-Amz-Signature=e324c75cffa16391c34b475de463e8593868fe6cbe315d486f997017cc587580&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSMIOOH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAQ%2Fjrhkxs7W5odYdk30gcYn5Gm5bymp0iYbzMXKxOLgIhANUSmc5cBaU2bpag%2BnWU%2Br7j7DYy3v9Fx%2BypXZ7zhxMPKv8DCFAQABoMNjM3NDIzMTgzODA1IgyigzdSHuh6xjNkfQAq3AP6kVzEAz8dhxiIQ7fsK%2BAH3a4ArFZoOMS2GqXbLnsQ46wvSol0N4m68Mu67YTXlOZyNgdgaUeatbZlf3T0rm77s2s%2Bir24FA9HiW8LYePLRA0jEvL3IMfcAiE7IKQydLUmSTjandqqrEPz01Ks2GJDMknDKGgl9N6y0rZBMbwQUpZpjoDoAKeG9%2FNE%2FtSvUE3z4HLJ4hCfGI23k1OcQ%2FGQOSSVRNp%2Bey7AstxA7FvAtThY%2BBf2bQ7bH1bL7gQox3DTkngfJSAu3IgVNeuNyfw5fKZj2KNwDHeK%2FJYpTa%2B5qAP9LZzRvsqbHFTuWLo6LFLxD%2BpJpQnpchjH0ztQjw8iNs89%2BVbcOquMF06LtpKXWPlCEhNJov1%2FPVyrD8FWzdKVoiikEQnuhaNzAeFHEVCyChtvcxF%2FVjnsYGhkWeKgNoPNzhZiJkIRFkeIt%2F0XyOS5TB56hebImLRjLS3hbAqg8pP6cyHYE9%2FvXCbNaeB984w8deQr4gA2eLiOT2Qpn%2BJgWarS67VQgAsacKkj%2F9eQvWHJ9Tl1x4yd1R3%2BdlmqCB1om73krl4T9MRkMejTEOv2VdrzRZhKz%2FvRBcoY7qKZP7i%2FFlf1Cjuvzze4UNJpES780MramaK%2BTQOEHzDV34DABjqkARrjHokqY3DM86XZO80g4jQefuD6QVj8lhmSf2OvbfPMf4GmWd6K9g34YJbiWmvkdfe0oqnLVv0DogsijpjXaX%2FP0xc%2B%2F%2BiMzTHRYxMU%2FIqYJFpUhUDezewCbjpaQqpdyx0e4F%2BiYld3ioqzaSC07O3ubpt4KI5HCHQ0ddwsK1eiHGMiCQOQ90uGa8bAtYqQlOssgTR3Tayre7C9mnq0Izlnow7B&X-Amz-Signature=2eb8ab483c3f1b680a6e2e437dffa2726d3e75abef0adbf2172c4ff7f77ef249&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSMIOOH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAQ%2Fjrhkxs7W5odYdk30gcYn5Gm5bymp0iYbzMXKxOLgIhANUSmc5cBaU2bpag%2BnWU%2Br7j7DYy3v9Fx%2BypXZ7zhxMPKv8DCFAQABoMNjM3NDIzMTgzODA1IgyigzdSHuh6xjNkfQAq3AP6kVzEAz8dhxiIQ7fsK%2BAH3a4ArFZoOMS2GqXbLnsQ46wvSol0N4m68Mu67YTXlOZyNgdgaUeatbZlf3T0rm77s2s%2Bir24FA9HiW8LYePLRA0jEvL3IMfcAiE7IKQydLUmSTjandqqrEPz01Ks2GJDMknDKGgl9N6y0rZBMbwQUpZpjoDoAKeG9%2FNE%2FtSvUE3z4HLJ4hCfGI23k1OcQ%2FGQOSSVRNp%2Bey7AstxA7FvAtThY%2BBf2bQ7bH1bL7gQox3DTkngfJSAu3IgVNeuNyfw5fKZj2KNwDHeK%2FJYpTa%2B5qAP9LZzRvsqbHFTuWLo6LFLxD%2BpJpQnpchjH0ztQjw8iNs89%2BVbcOquMF06LtpKXWPlCEhNJov1%2FPVyrD8FWzdKVoiikEQnuhaNzAeFHEVCyChtvcxF%2FVjnsYGhkWeKgNoPNzhZiJkIRFkeIt%2F0XyOS5TB56hebImLRjLS3hbAqg8pP6cyHYE9%2FvXCbNaeB984w8deQr4gA2eLiOT2Qpn%2BJgWarS67VQgAsacKkj%2F9eQvWHJ9Tl1x4yd1R3%2BdlmqCB1om73krl4T9MRkMejTEOv2VdrzRZhKz%2FvRBcoY7qKZP7i%2FFlf1Cjuvzze4UNJpES780MramaK%2BTQOEHzDV34DABjqkARrjHokqY3DM86XZO80g4jQefuD6QVj8lhmSf2OvbfPMf4GmWd6K9g34YJbiWmvkdfe0oqnLVv0DogsijpjXaX%2FP0xc%2B%2F%2BiMzTHRYxMU%2FIqYJFpUhUDezewCbjpaQqpdyx0e4F%2BiYld3ioqzaSC07O3ubpt4KI5HCHQ0ddwsK1eiHGMiCQOQ90uGa8bAtYqQlOssgTR3Tayre7C9mnq0Izlnow7B&X-Amz-Signature=b994fb065d450cbb761c83e98a586e071e9ae019c75ef917afc5b0c98fa4933c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSMIOOH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAQ%2Fjrhkxs7W5odYdk30gcYn5Gm5bymp0iYbzMXKxOLgIhANUSmc5cBaU2bpag%2BnWU%2Br7j7DYy3v9Fx%2BypXZ7zhxMPKv8DCFAQABoMNjM3NDIzMTgzODA1IgyigzdSHuh6xjNkfQAq3AP6kVzEAz8dhxiIQ7fsK%2BAH3a4ArFZoOMS2GqXbLnsQ46wvSol0N4m68Mu67YTXlOZyNgdgaUeatbZlf3T0rm77s2s%2Bir24FA9HiW8LYePLRA0jEvL3IMfcAiE7IKQydLUmSTjandqqrEPz01Ks2GJDMknDKGgl9N6y0rZBMbwQUpZpjoDoAKeG9%2FNE%2FtSvUE3z4HLJ4hCfGI23k1OcQ%2FGQOSSVRNp%2Bey7AstxA7FvAtThY%2BBf2bQ7bH1bL7gQox3DTkngfJSAu3IgVNeuNyfw5fKZj2KNwDHeK%2FJYpTa%2B5qAP9LZzRvsqbHFTuWLo6LFLxD%2BpJpQnpchjH0ztQjw8iNs89%2BVbcOquMF06LtpKXWPlCEhNJov1%2FPVyrD8FWzdKVoiikEQnuhaNzAeFHEVCyChtvcxF%2FVjnsYGhkWeKgNoPNzhZiJkIRFkeIt%2F0XyOS5TB56hebImLRjLS3hbAqg8pP6cyHYE9%2FvXCbNaeB984w8deQr4gA2eLiOT2Qpn%2BJgWarS67VQgAsacKkj%2F9eQvWHJ9Tl1x4yd1R3%2BdlmqCB1om73krl4T9MRkMejTEOv2VdrzRZhKz%2FvRBcoY7qKZP7i%2FFlf1Cjuvzze4UNJpES780MramaK%2BTQOEHzDV34DABjqkARrjHokqY3DM86XZO80g4jQefuD6QVj8lhmSf2OvbfPMf4GmWd6K9g34YJbiWmvkdfe0oqnLVv0DogsijpjXaX%2FP0xc%2B%2F%2BiMzTHRYxMU%2FIqYJFpUhUDezewCbjpaQqpdyx0e4F%2BiYld3ioqzaSC07O3ubpt4KI5HCHQ0ddwsK1eiHGMiCQOQ90uGa8bAtYqQlOssgTR3Tayre7C9mnq0Izlnow7B&X-Amz-Signature=0e7a8a8a45a833adc691d2039cc6f7486fce6101961ddb97ce2278e33f7d7517&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
