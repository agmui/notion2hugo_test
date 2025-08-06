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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEFCAKQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGb3rIk8ssKJLWvJYgpDxFCbB%2FsyEI3H8yS3pqkMCTsCAiEA3wW8hNKnjWxHKXlOw4wJS%2F%2BBKyt2Ne8Z7XWYp2E21u4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJGAzDwF4gChr1cS%2FCrcA0pcWFHg1KM5M3TfUdrRh5fxeyROcfiVQ8jJDaAlbnfQbnhhqafuHacuVtVAgs80iQqOZNWMD7mJNAzuHEeoQ%2BXDqUniSMUig8CGTC%2FEzAGi74%2BKGi6KjL%2FP8jeTc9w0Sq6wrhX2wSxYxsTse6nq1w8OM42eWICzCP3h1Cf6LyufDqBZ28RYDFdW4NMwCCTTTLEp3wHLtH%2FVOdHwmJad6npPBpKz%2FUYW8JWGNok9K9DSFxupTdeYLWuk5NWt06%2FPee1Oa1edAkFp9w%2B00h1gwpZEEKdpwJhEDvVIZyDFaTuojHcNSD0yWyaFSXfj0fAiYRRik0DmuiwKch4qTDpHMmyoC5kng3Y7WeHfCNhiWTlRFXTkyPc39aDiqdliWozJzpTTOJ1NSllgfPsiGpuG3VrrpkzIKMdGlawdwFQKHCx1paG5hyv7LG58HAHrGpt41B45cIGmSh2nuxc59ojiA4ynLYzuWMQdSxNiXFZ2LUAR%2BFfEwnRZGX90Gx7d8FSaO19Vna6Qnm3XlTIkrBZ75SjpQhBZg8BGlRLvlHQb1pjbcv1xm1XpBpsgTpQBXRSOlp6yDBKYKYjpjfKMHqOyCNaW4Z%2FPzxXumUe4WZUCMXUO340rEnJn3Gvpk1CdMITPzMQGOqUB9VGIdk109uT4F5%2BQaWJ9qh5%2BsEi3wQoV9aVBWjkeMLTIE06iqQQhcTyUWczpwhLkyyqVpOjrxRsnjenaT5k6qG7ipkR4YO2BbLilkvoBXJwJcQSJE%2BoIZvL0uRvVc%2BzOAz3zXljTmc7HBlvfB8bxAX%2Bcu3Gmwbrip9Bha0d%2BkiVkCG24bmdQ0QCVLKvginHFqz1rckmJgbiEQnIqHaVg5zAuKwst&X-Amz-Signature=0dca1df0cebd41b1bfe18e2dd4817814ce41842b7acd87dfe5cf08849f2f6526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEFCAKQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGb3rIk8ssKJLWvJYgpDxFCbB%2FsyEI3H8yS3pqkMCTsCAiEA3wW8hNKnjWxHKXlOw4wJS%2F%2BBKyt2Ne8Z7XWYp2E21u4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJGAzDwF4gChr1cS%2FCrcA0pcWFHg1KM5M3TfUdrRh5fxeyROcfiVQ8jJDaAlbnfQbnhhqafuHacuVtVAgs80iQqOZNWMD7mJNAzuHEeoQ%2BXDqUniSMUig8CGTC%2FEzAGi74%2BKGi6KjL%2FP8jeTc9w0Sq6wrhX2wSxYxsTse6nq1w8OM42eWICzCP3h1Cf6LyufDqBZ28RYDFdW4NMwCCTTTLEp3wHLtH%2FVOdHwmJad6npPBpKz%2FUYW8JWGNok9K9DSFxupTdeYLWuk5NWt06%2FPee1Oa1edAkFp9w%2B00h1gwpZEEKdpwJhEDvVIZyDFaTuojHcNSD0yWyaFSXfj0fAiYRRik0DmuiwKch4qTDpHMmyoC5kng3Y7WeHfCNhiWTlRFXTkyPc39aDiqdliWozJzpTTOJ1NSllgfPsiGpuG3VrrpkzIKMdGlawdwFQKHCx1paG5hyv7LG58HAHrGpt41B45cIGmSh2nuxc59ojiA4ynLYzuWMQdSxNiXFZ2LUAR%2BFfEwnRZGX90Gx7d8FSaO19Vna6Qnm3XlTIkrBZ75SjpQhBZg8BGlRLvlHQb1pjbcv1xm1XpBpsgTpQBXRSOlp6yDBKYKYjpjfKMHqOyCNaW4Z%2FPzxXumUe4WZUCMXUO340rEnJn3Gvpk1CdMITPzMQGOqUB9VGIdk109uT4F5%2BQaWJ9qh5%2BsEi3wQoV9aVBWjkeMLTIE06iqQQhcTyUWczpwhLkyyqVpOjrxRsnjenaT5k6qG7ipkR4YO2BbLilkvoBXJwJcQSJE%2BoIZvL0uRvVc%2BzOAz3zXljTmc7HBlvfB8bxAX%2Bcu3Gmwbrip9Bha0d%2BkiVkCG24bmdQ0QCVLKvginHFqz1rckmJgbiEQnIqHaVg5zAuKwst&X-Amz-Signature=5c5a7e13d0002683cc094dda2b0c692c9474308ef899d4a573a2dbfa075a67e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEFCAKQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGb3rIk8ssKJLWvJYgpDxFCbB%2FsyEI3H8yS3pqkMCTsCAiEA3wW8hNKnjWxHKXlOw4wJS%2F%2BBKyt2Ne8Z7XWYp2E21u4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJGAzDwF4gChr1cS%2FCrcA0pcWFHg1KM5M3TfUdrRh5fxeyROcfiVQ8jJDaAlbnfQbnhhqafuHacuVtVAgs80iQqOZNWMD7mJNAzuHEeoQ%2BXDqUniSMUig8CGTC%2FEzAGi74%2BKGi6KjL%2FP8jeTc9w0Sq6wrhX2wSxYxsTse6nq1w8OM42eWICzCP3h1Cf6LyufDqBZ28RYDFdW4NMwCCTTTLEp3wHLtH%2FVOdHwmJad6npPBpKz%2FUYW8JWGNok9K9DSFxupTdeYLWuk5NWt06%2FPee1Oa1edAkFp9w%2B00h1gwpZEEKdpwJhEDvVIZyDFaTuojHcNSD0yWyaFSXfj0fAiYRRik0DmuiwKch4qTDpHMmyoC5kng3Y7WeHfCNhiWTlRFXTkyPc39aDiqdliWozJzpTTOJ1NSllgfPsiGpuG3VrrpkzIKMdGlawdwFQKHCx1paG5hyv7LG58HAHrGpt41B45cIGmSh2nuxc59ojiA4ynLYzuWMQdSxNiXFZ2LUAR%2BFfEwnRZGX90Gx7d8FSaO19Vna6Qnm3XlTIkrBZ75SjpQhBZg8BGlRLvlHQb1pjbcv1xm1XpBpsgTpQBXRSOlp6yDBKYKYjpjfKMHqOyCNaW4Z%2FPzxXumUe4WZUCMXUO340rEnJn3Gvpk1CdMITPzMQGOqUB9VGIdk109uT4F5%2BQaWJ9qh5%2BsEi3wQoV9aVBWjkeMLTIE06iqQQhcTyUWczpwhLkyyqVpOjrxRsnjenaT5k6qG7ipkR4YO2BbLilkvoBXJwJcQSJE%2BoIZvL0uRvVc%2BzOAz3zXljTmc7HBlvfB8bxAX%2Bcu3Gmwbrip9Bha0d%2BkiVkCG24bmdQ0QCVLKvginHFqz1rckmJgbiEQnIqHaVg5zAuKwst&X-Amz-Signature=af101e4fd142a64ca8817bd0e3d5b2bcf8ee6730a2ac8855f79f694d6b023e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEFCAKQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGb3rIk8ssKJLWvJYgpDxFCbB%2FsyEI3H8yS3pqkMCTsCAiEA3wW8hNKnjWxHKXlOw4wJS%2F%2BBKyt2Ne8Z7XWYp2E21u4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJGAzDwF4gChr1cS%2FCrcA0pcWFHg1KM5M3TfUdrRh5fxeyROcfiVQ8jJDaAlbnfQbnhhqafuHacuVtVAgs80iQqOZNWMD7mJNAzuHEeoQ%2BXDqUniSMUig8CGTC%2FEzAGi74%2BKGi6KjL%2FP8jeTc9w0Sq6wrhX2wSxYxsTse6nq1w8OM42eWICzCP3h1Cf6LyufDqBZ28RYDFdW4NMwCCTTTLEp3wHLtH%2FVOdHwmJad6npPBpKz%2FUYW8JWGNok9K9DSFxupTdeYLWuk5NWt06%2FPee1Oa1edAkFp9w%2B00h1gwpZEEKdpwJhEDvVIZyDFaTuojHcNSD0yWyaFSXfj0fAiYRRik0DmuiwKch4qTDpHMmyoC5kng3Y7WeHfCNhiWTlRFXTkyPc39aDiqdliWozJzpTTOJ1NSllgfPsiGpuG3VrrpkzIKMdGlawdwFQKHCx1paG5hyv7LG58HAHrGpt41B45cIGmSh2nuxc59ojiA4ynLYzuWMQdSxNiXFZ2LUAR%2BFfEwnRZGX90Gx7d8FSaO19Vna6Qnm3XlTIkrBZ75SjpQhBZg8BGlRLvlHQb1pjbcv1xm1XpBpsgTpQBXRSOlp6yDBKYKYjpjfKMHqOyCNaW4Z%2FPzxXumUe4WZUCMXUO340rEnJn3Gvpk1CdMITPzMQGOqUB9VGIdk109uT4F5%2BQaWJ9qh5%2BsEi3wQoV9aVBWjkeMLTIE06iqQQhcTyUWczpwhLkyyqVpOjrxRsnjenaT5k6qG7ipkR4YO2BbLilkvoBXJwJcQSJE%2BoIZvL0uRvVc%2BzOAz3zXljTmc7HBlvfB8bxAX%2Bcu3Gmwbrip9Bha0d%2BkiVkCG24bmdQ0QCVLKvginHFqz1rckmJgbiEQnIqHaVg5zAuKwst&X-Amz-Signature=b324ffcae052e8d573403e8e137b909fcd5a6942e85cc2c2d2984aae2fd15664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEFCAKQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGb3rIk8ssKJLWvJYgpDxFCbB%2FsyEI3H8yS3pqkMCTsCAiEA3wW8hNKnjWxHKXlOw4wJS%2F%2BBKyt2Ne8Z7XWYp2E21u4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJGAzDwF4gChr1cS%2FCrcA0pcWFHg1KM5M3TfUdrRh5fxeyROcfiVQ8jJDaAlbnfQbnhhqafuHacuVtVAgs80iQqOZNWMD7mJNAzuHEeoQ%2BXDqUniSMUig8CGTC%2FEzAGi74%2BKGi6KjL%2FP8jeTc9w0Sq6wrhX2wSxYxsTse6nq1w8OM42eWICzCP3h1Cf6LyufDqBZ28RYDFdW4NMwCCTTTLEp3wHLtH%2FVOdHwmJad6npPBpKz%2FUYW8JWGNok9K9DSFxupTdeYLWuk5NWt06%2FPee1Oa1edAkFp9w%2B00h1gwpZEEKdpwJhEDvVIZyDFaTuojHcNSD0yWyaFSXfj0fAiYRRik0DmuiwKch4qTDpHMmyoC5kng3Y7WeHfCNhiWTlRFXTkyPc39aDiqdliWozJzpTTOJ1NSllgfPsiGpuG3VrrpkzIKMdGlawdwFQKHCx1paG5hyv7LG58HAHrGpt41B45cIGmSh2nuxc59ojiA4ynLYzuWMQdSxNiXFZ2LUAR%2BFfEwnRZGX90Gx7d8FSaO19Vna6Qnm3XlTIkrBZ75SjpQhBZg8BGlRLvlHQb1pjbcv1xm1XpBpsgTpQBXRSOlp6yDBKYKYjpjfKMHqOyCNaW4Z%2FPzxXumUe4WZUCMXUO340rEnJn3Gvpk1CdMITPzMQGOqUB9VGIdk109uT4F5%2BQaWJ9qh5%2BsEi3wQoV9aVBWjkeMLTIE06iqQQhcTyUWczpwhLkyyqVpOjrxRsnjenaT5k6qG7ipkR4YO2BbLilkvoBXJwJcQSJE%2BoIZvL0uRvVc%2BzOAz3zXljTmc7HBlvfB8bxAX%2Bcu3Gmwbrip9Bha0d%2BkiVkCG24bmdQ0QCVLKvginHFqz1rckmJgbiEQnIqHaVg5zAuKwst&X-Amz-Signature=11d2acc2d1b6ceb761155ee45e8552bc084b4b55047a91bdb9e57e4df0388fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
