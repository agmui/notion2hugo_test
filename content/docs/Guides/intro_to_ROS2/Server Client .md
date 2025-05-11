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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNLVKPN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC8OdugvE36ptNn0yW%2BkwOKQCqvOgjJ01ObwaLvtqA74AiA8Yh%2BW4G%2Fx0pmxAGWEaJm3PCCg6%2Bw8fjqbm9Vbef%2FhyiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarWg%2FZxsWw9cBxU7KtwDxpQkYdlJpnZeJJHg0TuFQ31Pqzz7n6pzE%2FjE6nYQm%2Bh%2Bupm8tN%2BoOABlV7etPd0%2BMs3RfnBcsOWhPC81wXFRcrZV50CfsV4L1XXI1rpFM2Y8W4RCfPrJ3HxMnmwa32CEeGHW9SXvB%2Bln%2BXo0oQr6oZDw%2BrDRwgwimNg83Cb37MbCtgnRYr1FxABQVjMcb1bUO4siyaHmzeGGdotRhtVyQAcgQrRZQWVRIRDsL6tATIInkPa6V4pQVh42p2NbfANSIqOe374f8a9ir5jwk1G8qwR6HfD5V8dnYQoj9B5jwymyIQjvTnpCQwGV27N%2BiDwQphMhSfjw5tg%2FAtzQ8uJJTGWIm7inPMh1vDlBfC5rNs%2FrNTs6x79CLyd5ItjbU2P8HHRWlWt4LGxohJrbdThCWpLnFEBJalk7yrCoqSxpDMVDIEno45jEgByjR%2FYA8apV%2B2FglkwP8a3wj84bV9K8f%2FwHNLYmQ8LemyZ04rIxTE1D4Xm%2BTsip%2FrcfIGOr9E4fQoZDtlOD%2BGhCcHxNZmGB%2Bitow%2F%2Fj6FwmGnkfu2y39lBgM0jZSQm%2BfFL4hXjMIyF83swMybpDb1NaZFu9l6wVsB2My5IIZZ2Uh8SDUdMkrzX5%2BURvRFoNWMk%2Bb14wm6KDwQY6pgHJM%2Bg4pWYkhpmusdSMBmePSkA2K%2FIbKAXBVBzPFK6j8rYKEtwpFR5LJ26oqrYA5Ax6junQ90IAi8M3y2uJmXQa0mPayiomQTGMgtozwctJTZTV4yWuYCTrn6eaUn8OvrATKmGsH5FdyUpblsKcqbC0je%2BMIBxwTr%2BP%2BfsVUMh6h3T8rORO2lQGRgzaRHuyDYTNMp%2Bq19S65xYtjv7PHpzl4YdJyg1h&X-Amz-Signature=507aacdc57d2f134554c5ccc321bd7c918d1c14614ea290638e70c5e5bc15154&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNLVKPN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC8OdugvE36ptNn0yW%2BkwOKQCqvOgjJ01ObwaLvtqA74AiA8Yh%2BW4G%2Fx0pmxAGWEaJm3PCCg6%2Bw8fjqbm9Vbef%2FhyiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarWg%2FZxsWw9cBxU7KtwDxpQkYdlJpnZeJJHg0TuFQ31Pqzz7n6pzE%2FjE6nYQm%2Bh%2Bupm8tN%2BoOABlV7etPd0%2BMs3RfnBcsOWhPC81wXFRcrZV50CfsV4L1XXI1rpFM2Y8W4RCfPrJ3HxMnmwa32CEeGHW9SXvB%2Bln%2BXo0oQr6oZDw%2BrDRwgwimNg83Cb37MbCtgnRYr1FxABQVjMcb1bUO4siyaHmzeGGdotRhtVyQAcgQrRZQWVRIRDsL6tATIInkPa6V4pQVh42p2NbfANSIqOe374f8a9ir5jwk1G8qwR6HfD5V8dnYQoj9B5jwymyIQjvTnpCQwGV27N%2BiDwQphMhSfjw5tg%2FAtzQ8uJJTGWIm7inPMh1vDlBfC5rNs%2FrNTs6x79CLyd5ItjbU2P8HHRWlWt4LGxohJrbdThCWpLnFEBJalk7yrCoqSxpDMVDIEno45jEgByjR%2FYA8apV%2B2FglkwP8a3wj84bV9K8f%2FwHNLYmQ8LemyZ04rIxTE1D4Xm%2BTsip%2FrcfIGOr9E4fQoZDtlOD%2BGhCcHxNZmGB%2Bitow%2F%2Fj6FwmGnkfu2y39lBgM0jZSQm%2BfFL4hXjMIyF83swMybpDb1NaZFu9l6wVsB2My5IIZZ2Uh8SDUdMkrzX5%2BURvRFoNWMk%2Bb14wm6KDwQY6pgHJM%2Bg4pWYkhpmusdSMBmePSkA2K%2FIbKAXBVBzPFK6j8rYKEtwpFR5LJ26oqrYA5Ax6junQ90IAi8M3y2uJmXQa0mPayiomQTGMgtozwctJTZTV4yWuYCTrn6eaUn8OvrATKmGsH5FdyUpblsKcqbC0je%2BMIBxwTr%2BP%2BfsVUMh6h3T8rORO2lQGRgzaRHuyDYTNMp%2Bq19S65xYtjv7PHpzl4YdJyg1h&X-Amz-Signature=d7dc92706592934e046f1b6dd92b8616ad877a5e1d2b7aa04a6c3177d1f40ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNLVKPN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC8OdugvE36ptNn0yW%2BkwOKQCqvOgjJ01ObwaLvtqA74AiA8Yh%2BW4G%2Fx0pmxAGWEaJm3PCCg6%2Bw8fjqbm9Vbef%2FhyiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarWg%2FZxsWw9cBxU7KtwDxpQkYdlJpnZeJJHg0TuFQ31Pqzz7n6pzE%2FjE6nYQm%2Bh%2Bupm8tN%2BoOABlV7etPd0%2BMs3RfnBcsOWhPC81wXFRcrZV50CfsV4L1XXI1rpFM2Y8W4RCfPrJ3HxMnmwa32CEeGHW9SXvB%2Bln%2BXo0oQr6oZDw%2BrDRwgwimNg83Cb37MbCtgnRYr1FxABQVjMcb1bUO4siyaHmzeGGdotRhtVyQAcgQrRZQWVRIRDsL6tATIInkPa6V4pQVh42p2NbfANSIqOe374f8a9ir5jwk1G8qwR6HfD5V8dnYQoj9B5jwymyIQjvTnpCQwGV27N%2BiDwQphMhSfjw5tg%2FAtzQ8uJJTGWIm7inPMh1vDlBfC5rNs%2FrNTs6x79CLyd5ItjbU2P8HHRWlWt4LGxohJrbdThCWpLnFEBJalk7yrCoqSxpDMVDIEno45jEgByjR%2FYA8apV%2B2FglkwP8a3wj84bV9K8f%2FwHNLYmQ8LemyZ04rIxTE1D4Xm%2BTsip%2FrcfIGOr9E4fQoZDtlOD%2BGhCcHxNZmGB%2Bitow%2F%2Fj6FwmGnkfu2y39lBgM0jZSQm%2BfFL4hXjMIyF83swMybpDb1NaZFu9l6wVsB2My5IIZZ2Uh8SDUdMkrzX5%2BURvRFoNWMk%2Bb14wm6KDwQY6pgHJM%2Bg4pWYkhpmusdSMBmePSkA2K%2FIbKAXBVBzPFK6j8rYKEtwpFR5LJ26oqrYA5Ax6junQ90IAi8M3y2uJmXQa0mPayiomQTGMgtozwctJTZTV4yWuYCTrn6eaUn8OvrATKmGsH5FdyUpblsKcqbC0je%2BMIBxwTr%2BP%2BfsVUMh6h3T8rORO2lQGRgzaRHuyDYTNMp%2Bq19S65xYtjv7PHpzl4YdJyg1h&X-Amz-Signature=5bb2f5ec9978e3daa7fe69b3fff0223191d5572ec1f618f3e6e13839524f5417&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNLVKPN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC8OdugvE36ptNn0yW%2BkwOKQCqvOgjJ01ObwaLvtqA74AiA8Yh%2BW4G%2Fx0pmxAGWEaJm3PCCg6%2Bw8fjqbm9Vbef%2FhyiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarWg%2FZxsWw9cBxU7KtwDxpQkYdlJpnZeJJHg0TuFQ31Pqzz7n6pzE%2FjE6nYQm%2Bh%2Bupm8tN%2BoOABlV7etPd0%2BMs3RfnBcsOWhPC81wXFRcrZV50CfsV4L1XXI1rpFM2Y8W4RCfPrJ3HxMnmwa32CEeGHW9SXvB%2Bln%2BXo0oQr6oZDw%2BrDRwgwimNg83Cb37MbCtgnRYr1FxABQVjMcb1bUO4siyaHmzeGGdotRhtVyQAcgQrRZQWVRIRDsL6tATIInkPa6V4pQVh42p2NbfANSIqOe374f8a9ir5jwk1G8qwR6HfD5V8dnYQoj9B5jwymyIQjvTnpCQwGV27N%2BiDwQphMhSfjw5tg%2FAtzQ8uJJTGWIm7inPMh1vDlBfC5rNs%2FrNTs6x79CLyd5ItjbU2P8HHRWlWt4LGxohJrbdThCWpLnFEBJalk7yrCoqSxpDMVDIEno45jEgByjR%2FYA8apV%2B2FglkwP8a3wj84bV9K8f%2FwHNLYmQ8LemyZ04rIxTE1D4Xm%2BTsip%2FrcfIGOr9E4fQoZDtlOD%2BGhCcHxNZmGB%2Bitow%2F%2Fj6FwmGnkfu2y39lBgM0jZSQm%2BfFL4hXjMIyF83swMybpDb1NaZFu9l6wVsB2My5IIZZ2Uh8SDUdMkrzX5%2BURvRFoNWMk%2Bb14wm6KDwQY6pgHJM%2Bg4pWYkhpmusdSMBmePSkA2K%2FIbKAXBVBzPFK6j8rYKEtwpFR5LJ26oqrYA5Ax6junQ90IAi8M3y2uJmXQa0mPayiomQTGMgtozwctJTZTV4yWuYCTrn6eaUn8OvrATKmGsH5FdyUpblsKcqbC0je%2BMIBxwTr%2BP%2BfsVUMh6h3T8rORO2lQGRgzaRHuyDYTNMp%2Bq19S65xYtjv7PHpzl4YdJyg1h&X-Amz-Signature=91bd5bf18ecd0c029df7cefd9f31f0c4b267d450b4f1913f102b014233eb32ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNLVKPN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC8OdugvE36ptNn0yW%2BkwOKQCqvOgjJ01ObwaLvtqA74AiA8Yh%2BW4G%2Fx0pmxAGWEaJm3PCCg6%2Bw8fjqbm9Vbef%2FhyiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarWg%2FZxsWw9cBxU7KtwDxpQkYdlJpnZeJJHg0TuFQ31Pqzz7n6pzE%2FjE6nYQm%2Bh%2Bupm8tN%2BoOABlV7etPd0%2BMs3RfnBcsOWhPC81wXFRcrZV50CfsV4L1XXI1rpFM2Y8W4RCfPrJ3HxMnmwa32CEeGHW9SXvB%2Bln%2BXo0oQr6oZDw%2BrDRwgwimNg83Cb37MbCtgnRYr1FxABQVjMcb1bUO4siyaHmzeGGdotRhtVyQAcgQrRZQWVRIRDsL6tATIInkPa6V4pQVh42p2NbfANSIqOe374f8a9ir5jwk1G8qwR6HfD5V8dnYQoj9B5jwymyIQjvTnpCQwGV27N%2BiDwQphMhSfjw5tg%2FAtzQ8uJJTGWIm7inPMh1vDlBfC5rNs%2FrNTs6x79CLyd5ItjbU2P8HHRWlWt4LGxohJrbdThCWpLnFEBJalk7yrCoqSxpDMVDIEno45jEgByjR%2FYA8apV%2B2FglkwP8a3wj84bV9K8f%2FwHNLYmQ8LemyZ04rIxTE1D4Xm%2BTsip%2FrcfIGOr9E4fQoZDtlOD%2BGhCcHxNZmGB%2Bitow%2F%2Fj6FwmGnkfu2y39lBgM0jZSQm%2BfFL4hXjMIyF83swMybpDb1NaZFu9l6wVsB2My5IIZZ2Uh8SDUdMkrzX5%2BURvRFoNWMk%2Bb14wm6KDwQY6pgHJM%2Bg4pWYkhpmusdSMBmePSkA2K%2FIbKAXBVBzPFK6j8rYKEtwpFR5LJ26oqrYA5Ax6junQ90IAi8M3y2uJmXQa0mPayiomQTGMgtozwctJTZTV4yWuYCTrn6eaUn8OvrATKmGsH5FdyUpblsKcqbC0je%2BMIBxwTr%2BP%2BfsVUMh6h3T8rORO2lQGRgzaRHuyDYTNMp%2Bq19S65xYtjv7PHpzl4YdJyg1h&X-Amz-Signature=571ae306c96d02133b72ae1fb82c4d15df8a302cc4a563bbc7a69cf177dadbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
