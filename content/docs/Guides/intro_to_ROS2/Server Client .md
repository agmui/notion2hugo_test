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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK6L6FV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC8p%2BFyt23gjxD7r8x92TFqhZO9epN8I4feQLIg38Z4JQIhAOnfKnxZRST%2F1lCpqIB3JA60vt40xZaIGnyGjbGJTQz%2FKv8DCF4QABoMNjM3NDIzMTgzODA1IgzyEOGbUlf0x8akzhgq3ANsJWWXmzmk%2Bes66odByLBoudkjWX%2FwicLbD8%2BFYQKXthahwbYkDiA8uaGqU8tAvOsnoXrR9ep5bewMo37cvmAvxZI0%2FYxyUST2lHuhlaVOv2pVUbwmpIqUbFIQo3Jaa2MN5ZMrYcbITqwXAVr28Sp6Igs8gSNj6AR%2Fq8XchohzxBOHDx7WoquTl3PN60SIrZuCtf7%2BQgZIwQD8bRIJmZ9vguq6YZSO1FmPTahSHnbxKPF8vDFjbPPInIoLtIm5aUwGt%2By6%2FrbzIbDWiSiqAX2VFrXDz9mxDA0xnEbpDPIjSQBwiEYmXzwDAycilWEqIxlvJYXAdeCnIPoWRFRBw1%2F6YPNniBfiw9FeSjw9WLLFp13JmlVFxWVpAPZJLsiMGqOZ3z96UuoLmIN3I5vh6ukI6KINIDNXWRnd%2FrwFFjGqkPr8i4Cm%2BPkJqnSC1E1bFWTuNCfP5K27mcH05UDursy8eQ9rocXxT%2FNW2zarI0jYmy3CxXE0ezADXylEAdJMGNey0pewUu2g2ZpzP17%2Fk6o1DibIxGac6piRhFfOx152nOmm%2BD1ztjyXWFHuvZ6Ki2dJ%2FOa78B0b0torzrBtRaRLpim3LWaRN1ZlaEB8RgHyFOCwJAE%2FmWAeiheFaTCK4KnDBjqkAd5tzCsV5xbIzLEkvPbDIbfA3kwQ54rtdCnfX1bGa%2B4QLGvmIlGRO3XXvSHBA2VA685mhOJAA6qVAA6fvw77jXtm9DFuBpEJO4mu0FZq2tz48L%2B%2F7MxlETnt1Kw21vytHpozmgj4MbziCsTSs4NXUvqSRUmRpHVoU%2Big7uN2msbczm1nr3qkTA2wLeuiqajQJF5l08RpfOhdzPAoTw5CvAifP0pt&X-Amz-Signature=313943e04a5c320b90624f26848c48f78f4455c26f5a711f78085cf951f1a02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK6L6FV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC8p%2BFyt23gjxD7r8x92TFqhZO9epN8I4feQLIg38Z4JQIhAOnfKnxZRST%2F1lCpqIB3JA60vt40xZaIGnyGjbGJTQz%2FKv8DCF4QABoMNjM3NDIzMTgzODA1IgzyEOGbUlf0x8akzhgq3ANsJWWXmzmk%2Bes66odByLBoudkjWX%2FwicLbD8%2BFYQKXthahwbYkDiA8uaGqU8tAvOsnoXrR9ep5bewMo37cvmAvxZI0%2FYxyUST2lHuhlaVOv2pVUbwmpIqUbFIQo3Jaa2MN5ZMrYcbITqwXAVr28Sp6Igs8gSNj6AR%2Fq8XchohzxBOHDx7WoquTl3PN60SIrZuCtf7%2BQgZIwQD8bRIJmZ9vguq6YZSO1FmPTahSHnbxKPF8vDFjbPPInIoLtIm5aUwGt%2By6%2FrbzIbDWiSiqAX2VFrXDz9mxDA0xnEbpDPIjSQBwiEYmXzwDAycilWEqIxlvJYXAdeCnIPoWRFRBw1%2F6YPNniBfiw9FeSjw9WLLFp13JmlVFxWVpAPZJLsiMGqOZ3z96UuoLmIN3I5vh6ukI6KINIDNXWRnd%2FrwFFjGqkPr8i4Cm%2BPkJqnSC1E1bFWTuNCfP5K27mcH05UDursy8eQ9rocXxT%2FNW2zarI0jYmy3CxXE0ezADXylEAdJMGNey0pewUu2g2ZpzP17%2Fk6o1DibIxGac6piRhFfOx152nOmm%2BD1ztjyXWFHuvZ6Ki2dJ%2FOa78B0b0torzrBtRaRLpim3LWaRN1ZlaEB8RgHyFOCwJAE%2FmWAeiheFaTCK4KnDBjqkAd5tzCsV5xbIzLEkvPbDIbfA3kwQ54rtdCnfX1bGa%2B4QLGvmIlGRO3XXvSHBA2VA685mhOJAA6qVAA6fvw77jXtm9DFuBpEJO4mu0FZq2tz48L%2B%2F7MxlETnt1Kw21vytHpozmgj4MbziCsTSs4NXUvqSRUmRpHVoU%2Big7uN2msbczm1nr3qkTA2wLeuiqajQJF5l08RpfOhdzPAoTw5CvAifP0pt&X-Amz-Signature=bbed74a51f98a70cf00df1e1274808273a06be20dbb60d8df019e57badd5c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK6L6FV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC8p%2BFyt23gjxD7r8x92TFqhZO9epN8I4feQLIg38Z4JQIhAOnfKnxZRST%2F1lCpqIB3JA60vt40xZaIGnyGjbGJTQz%2FKv8DCF4QABoMNjM3NDIzMTgzODA1IgzyEOGbUlf0x8akzhgq3ANsJWWXmzmk%2Bes66odByLBoudkjWX%2FwicLbD8%2BFYQKXthahwbYkDiA8uaGqU8tAvOsnoXrR9ep5bewMo37cvmAvxZI0%2FYxyUST2lHuhlaVOv2pVUbwmpIqUbFIQo3Jaa2MN5ZMrYcbITqwXAVr28Sp6Igs8gSNj6AR%2Fq8XchohzxBOHDx7WoquTl3PN60SIrZuCtf7%2BQgZIwQD8bRIJmZ9vguq6YZSO1FmPTahSHnbxKPF8vDFjbPPInIoLtIm5aUwGt%2By6%2FrbzIbDWiSiqAX2VFrXDz9mxDA0xnEbpDPIjSQBwiEYmXzwDAycilWEqIxlvJYXAdeCnIPoWRFRBw1%2F6YPNniBfiw9FeSjw9WLLFp13JmlVFxWVpAPZJLsiMGqOZ3z96UuoLmIN3I5vh6ukI6KINIDNXWRnd%2FrwFFjGqkPr8i4Cm%2BPkJqnSC1E1bFWTuNCfP5K27mcH05UDursy8eQ9rocXxT%2FNW2zarI0jYmy3CxXE0ezADXylEAdJMGNey0pewUu2g2ZpzP17%2Fk6o1DibIxGac6piRhFfOx152nOmm%2BD1ztjyXWFHuvZ6Ki2dJ%2FOa78B0b0torzrBtRaRLpim3LWaRN1ZlaEB8RgHyFOCwJAE%2FmWAeiheFaTCK4KnDBjqkAd5tzCsV5xbIzLEkvPbDIbfA3kwQ54rtdCnfX1bGa%2B4QLGvmIlGRO3XXvSHBA2VA685mhOJAA6qVAA6fvw77jXtm9DFuBpEJO4mu0FZq2tz48L%2B%2F7MxlETnt1Kw21vytHpozmgj4MbziCsTSs4NXUvqSRUmRpHVoU%2Big7uN2msbczm1nr3qkTA2wLeuiqajQJF5l08RpfOhdzPAoTw5CvAifP0pt&X-Amz-Signature=5262f6101e6ff233725e3e1e79ed4af14243bc959206cb2f717d6b30546683a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK6L6FV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC8p%2BFyt23gjxD7r8x92TFqhZO9epN8I4feQLIg38Z4JQIhAOnfKnxZRST%2F1lCpqIB3JA60vt40xZaIGnyGjbGJTQz%2FKv8DCF4QABoMNjM3NDIzMTgzODA1IgzyEOGbUlf0x8akzhgq3ANsJWWXmzmk%2Bes66odByLBoudkjWX%2FwicLbD8%2BFYQKXthahwbYkDiA8uaGqU8tAvOsnoXrR9ep5bewMo37cvmAvxZI0%2FYxyUST2lHuhlaVOv2pVUbwmpIqUbFIQo3Jaa2MN5ZMrYcbITqwXAVr28Sp6Igs8gSNj6AR%2Fq8XchohzxBOHDx7WoquTl3PN60SIrZuCtf7%2BQgZIwQD8bRIJmZ9vguq6YZSO1FmPTahSHnbxKPF8vDFjbPPInIoLtIm5aUwGt%2By6%2FrbzIbDWiSiqAX2VFrXDz9mxDA0xnEbpDPIjSQBwiEYmXzwDAycilWEqIxlvJYXAdeCnIPoWRFRBw1%2F6YPNniBfiw9FeSjw9WLLFp13JmlVFxWVpAPZJLsiMGqOZ3z96UuoLmIN3I5vh6ukI6KINIDNXWRnd%2FrwFFjGqkPr8i4Cm%2BPkJqnSC1E1bFWTuNCfP5K27mcH05UDursy8eQ9rocXxT%2FNW2zarI0jYmy3CxXE0ezADXylEAdJMGNey0pewUu2g2ZpzP17%2Fk6o1DibIxGac6piRhFfOx152nOmm%2BD1ztjyXWFHuvZ6Ki2dJ%2FOa78B0b0torzrBtRaRLpim3LWaRN1ZlaEB8RgHyFOCwJAE%2FmWAeiheFaTCK4KnDBjqkAd5tzCsV5xbIzLEkvPbDIbfA3kwQ54rtdCnfX1bGa%2B4QLGvmIlGRO3XXvSHBA2VA685mhOJAA6qVAA6fvw77jXtm9DFuBpEJO4mu0FZq2tz48L%2B%2F7MxlETnt1Kw21vytHpozmgj4MbziCsTSs4NXUvqSRUmRpHVoU%2Big7uN2msbczm1nr3qkTA2wLeuiqajQJF5l08RpfOhdzPAoTw5CvAifP0pt&X-Amz-Signature=48da187f20511dd5eef02cebbd7af8ff3694638bba958e5216f5aa2a94524cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK6L6FV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC8p%2BFyt23gjxD7r8x92TFqhZO9epN8I4feQLIg38Z4JQIhAOnfKnxZRST%2F1lCpqIB3JA60vt40xZaIGnyGjbGJTQz%2FKv8DCF4QABoMNjM3NDIzMTgzODA1IgzyEOGbUlf0x8akzhgq3ANsJWWXmzmk%2Bes66odByLBoudkjWX%2FwicLbD8%2BFYQKXthahwbYkDiA8uaGqU8tAvOsnoXrR9ep5bewMo37cvmAvxZI0%2FYxyUST2lHuhlaVOv2pVUbwmpIqUbFIQo3Jaa2MN5ZMrYcbITqwXAVr28Sp6Igs8gSNj6AR%2Fq8XchohzxBOHDx7WoquTl3PN60SIrZuCtf7%2BQgZIwQD8bRIJmZ9vguq6YZSO1FmPTahSHnbxKPF8vDFjbPPInIoLtIm5aUwGt%2By6%2FrbzIbDWiSiqAX2VFrXDz9mxDA0xnEbpDPIjSQBwiEYmXzwDAycilWEqIxlvJYXAdeCnIPoWRFRBw1%2F6YPNniBfiw9FeSjw9WLLFp13JmlVFxWVpAPZJLsiMGqOZ3z96UuoLmIN3I5vh6ukI6KINIDNXWRnd%2FrwFFjGqkPr8i4Cm%2BPkJqnSC1E1bFWTuNCfP5K27mcH05UDursy8eQ9rocXxT%2FNW2zarI0jYmy3CxXE0ezADXylEAdJMGNey0pewUu2g2ZpzP17%2Fk6o1DibIxGac6piRhFfOx152nOmm%2BD1ztjyXWFHuvZ6Ki2dJ%2FOa78B0b0torzrBtRaRLpim3LWaRN1ZlaEB8RgHyFOCwJAE%2FmWAeiheFaTCK4KnDBjqkAd5tzCsV5xbIzLEkvPbDIbfA3kwQ54rtdCnfX1bGa%2B4QLGvmIlGRO3XXvSHBA2VA685mhOJAA6qVAA6fvw77jXtm9DFuBpEJO4mu0FZq2tz48L%2B%2F7MxlETnt1Kw21vytHpozmgj4MbziCsTSs4NXUvqSRUmRpHVoU%2Big7uN2msbczm1nr3qkTA2wLeuiqajQJF5l08RpfOhdzPAoTw5CvAifP0pt&X-Amz-Signature=7c44050a6e09c5efe63790005d8eae9cfcf6967df73d5dfac33c4e39aca4f1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
