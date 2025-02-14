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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMKSQNN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD10Vpy%2FtRGtZRVBPMRznyTvDEFEk%2BccYOef5tRbVdJ8QIhAPp9IDbAQv8G3yVS1GKsM3i0CyV0DjCJcp7fF%2Bvvz9CtKv8DCCsQABoMNjM3NDIzMTgzODA1IgyFDUKTCQo%2F3GZZQUkq3AOM8LjpHkzLitbVOEoFAa3z4IMsBPOQ5fNBFM5fSIKyDzJsCkTlPjZqJHHugWNrGSfIHAnPd0CV7QLWpE6XyrA0K4khslXA9zdrPUW4h4dDc9eOqJNrZz8pXp6MOf8va6V3Ckt3GsbuIBw5FdZ7QtWguZt7TLTN2tKc2tx5TNrFyb7pGRY9971x7TMW6pp1%2BDaFFIyk%2FGNKAqB%2Bg5VNgrEnIYd3nfIkFMmfJVaokVuzYzVrzmW2zoOYGTZWPe441SUrVM8%2BJXLRi8fx5g9JPTqiTMM2wvxTBHdyYpFO1FrtfV6M5Qgj9p0y1dP1rLfzdpI6qdfvrvdt6iodR19Cx%2FvPF1Eu9gpD1TyuIzOPkxhpZMNegkOOHUA%2FI%2FBCcKfn4YeedKoVzEIY1YD2XOX7fbAWcglffooOdABR9%2FLXTA%2Fm%2Bh2dH5lnBlKlWZvc8eN%2BVB2cHiruQmwRZipcKmdWx5%2FszgE4y8MFcQecJWgKyvyScdCTNtAk05FB3d6ngvN%2FBVUHenhtQL405gkzq%2BF%2B52%2Bqvgt%2Bdqkre4zjHriM5dkEOcLt8jTW3RvMgNbJc9xMFR9hGp8ejesY6cimGfZZLTeDkuIsWLzRs4RAvpaXmUBoSAv2K2UoTkpvPCxMgTDasby9BjqkAZY76KG8%2FCCv38%2FCsKozvZsHXwqwLprha4Y0j7lmzkbcyb3GEYzk0kFL20CDw97oVWaOatLUq1u68loVSPLU2ExvT%2B1wHQWF%2BJIUwyayqP7dV73lneB8fO6y9vhsFaC%2FKPVZcgWYHSrkP8w2m8n7QjDmB5mt%2FhZJzWwRJoC%2FkptjbdeyvoHmf0SvEQ%2F0TuJy5HvZu54SQwVikLboGrXeigHtcSbS&X-Amz-Signature=cf4ce38865483c6f94fb50ebb84d0a46ab6b6b32638509d55b8e57731ac596a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMKSQNN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD10Vpy%2FtRGtZRVBPMRznyTvDEFEk%2BccYOef5tRbVdJ8QIhAPp9IDbAQv8G3yVS1GKsM3i0CyV0DjCJcp7fF%2Bvvz9CtKv8DCCsQABoMNjM3NDIzMTgzODA1IgyFDUKTCQo%2F3GZZQUkq3AOM8LjpHkzLitbVOEoFAa3z4IMsBPOQ5fNBFM5fSIKyDzJsCkTlPjZqJHHugWNrGSfIHAnPd0CV7QLWpE6XyrA0K4khslXA9zdrPUW4h4dDc9eOqJNrZz8pXp6MOf8va6V3Ckt3GsbuIBw5FdZ7QtWguZt7TLTN2tKc2tx5TNrFyb7pGRY9971x7TMW6pp1%2BDaFFIyk%2FGNKAqB%2Bg5VNgrEnIYd3nfIkFMmfJVaokVuzYzVrzmW2zoOYGTZWPe441SUrVM8%2BJXLRi8fx5g9JPTqiTMM2wvxTBHdyYpFO1FrtfV6M5Qgj9p0y1dP1rLfzdpI6qdfvrvdt6iodR19Cx%2FvPF1Eu9gpD1TyuIzOPkxhpZMNegkOOHUA%2FI%2FBCcKfn4YeedKoVzEIY1YD2XOX7fbAWcglffooOdABR9%2FLXTA%2Fm%2Bh2dH5lnBlKlWZvc8eN%2BVB2cHiruQmwRZipcKmdWx5%2FszgE4y8MFcQecJWgKyvyScdCTNtAk05FB3d6ngvN%2FBVUHenhtQL405gkzq%2BF%2B52%2Bqvgt%2Bdqkre4zjHriM5dkEOcLt8jTW3RvMgNbJc9xMFR9hGp8ejesY6cimGfZZLTeDkuIsWLzRs4RAvpaXmUBoSAv2K2UoTkpvPCxMgTDasby9BjqkAZY76KG8%2FCCv38%2FCsKozvZsHXwqwLprha4Y0j7lmzkbcyb3GEYzk0kFL20CDw97oVWaOatLUq1u68loVSPLU2ExvT%2B1wHQWF%2BJIUwyayqP7dV73lneB8fO6y9vhsFaC%2FKPVZcgWYHSrkP8w2m8n7QjDmB5mt%2FhZJzWwRJoC%2FkptjbdeyvoHmf0SvEQ%2F0TuJy5HvZu54SQwVikLboGrXeigHtcSbS&X-Amz-Signature=4f5fed4528652ad0488489c354d6db3ca9b6a4ef97eeedbce37e0fa8c011f4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMKSQNN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD10Vpy%2FtRGtZRVBPMRznyTvDEFEk%2BccYOef5tRbVdJ8QIhAPp9IDbAQv8G3yVS1GKsM3i0CyV0DjCJcp7fF%2Bvvz9CtKv8DCCsQABoMNjM3NDIzMTgzODA1IgyFDUKTCQo%2F3GZZQUkq3AOM8LjpHkzLitbVOEoFAa3z4IMsBPOQ5fNBFM5fSIKyDzJsCkTlPjZqJHHugWNrGSfIHAnPd0CV7QLWpE6XyrA0K4khslXA9zdrPUW4h4dDc9eOqJNrZz8pXp6MOf8va6V3Ckt3GsbuIBw5FdZ7QtWguZt7TLTN2tKc2tx5TNrFyb7pGRY9971x7TMW6pp1%2BDaFFIyk%2FGNKAqB%2Bg5VNgrEnIYd3nfIkFMmfJVaokVuzYzVrzmW2zoOYGTZWPe441SUrVM8%2BJXLRi8fx5g9JPTqiTMM2wvxTBHdyYpFO1FrtfV6M5Qgj9p0y1dP1rLfzdpI6qdfvrvdt6iodR19Cx%2FvPF1Eu9gpD1TyuIzOPkxhpZMNegkOOHUA%2FI%2FBCcKfn4YeedKoVzEIY1YD2XOX7fbAWcglffooOdABR9%2FLXTA%2Fm%2Bh2dH5lnBlKlWZvc8eN%2BVB2cHiruQmwRZipcKmdWx5%2FszgE4y8MFcQecJWgKyvyScdCTNtAk05FB3d6ngvN%2FBVUHenhtQL405gkzq%2BF%2B52%2Bqvgt%2Bdqkre4zjHriM5dkEOcLt8jTW3RvMgNbJc9xMFR9hGp8ejesY6cimGfZZLTeDkuIsWLzRs4RAvpaXmUBoSAv2K2UoTkpvPCxMgTDasby9BjqkAZY76KG8%2FCCv38%2FCsKozvZsHXwqwLprha4Y0j7lmzkbcyb3GEYzk0kFL20CDw97oVWaOatLUq1u68loVSPLU2ExvT%2B1wHQWF%2BJIUwyayqP7dV73lneB8fO6y9vhsFaC%2FKPVZcgWYHSrkP8w2m8n7QjDmB5mt%2FhZJzWwRJoC%2FkptjbdeyvoHmf0SvEQ%2F0TuJy5HvZu54SQwVikLboGrXeigHtcSbS&X-Amz-Signature=ce3436a2ca0f93a08e6eff16755a4b6dfe795efe32d1788e954d2682b6215b32&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMKSQNN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD10Vpy%2FtRGtZRVBPMRznyTvDEFEk%2BccYOef5tRbVdJ8QIhAPp9IDbAQv8G3yVS1GKsM3i0CyV0DjCJcp7fF%2Bvvz9CtKv8DCCsQABoMNjM3NDIzMTgzODA1IgyFDUKTCQo%2F3GZZQUkq3AOM8LjpHkzLitbVOEoFAa3z4IMsBPOQ5fNBFM5fSIKyDzJsCkTlPjZqJHHugWNrGSfIHAnPd0CV7QLWpE6XyrA0K4khslXA9zdrPUW4h4dDc9eOqJNrZz8pXp6MOf8va6V3Ckt3GsbuIBw5FdZ7QtWguZt7TLTN2tKc2tx5TNrFyb7pGRY9971x7TMW6pp1%2BDaFFIyk%2FGNKAqB%2Bg5VNgrEnIYd3nfIkFMmfJVaokVuzYzVrzmW2zoOYGTZWPe441SUrVM8%2BJXLRi8fx5g9JPTqiTMM2wvxTBHdyYpFO1FrtfV6M5Qgj9p0y1dP1rLfzdpI6qdfvrvdt6iodR19Cx%2FvPF1Eu9gpD1TyuIzOPkxhpZMNegkOOHUA%2FI%2FBCcKfn4YeedKoVzEIY1YD2XOX7fbAWcglffooOdABR9%2FLXTA%2Fm%2Bh2dH5lnBlKlWZvc8eN%2BVB2cHiruQmwRZipcKmdWx5%2FszgE4y8MFcQecJWgKyvyScdCTNtAk05FB3d6ngvN%2FBVUHenhtQL405gkzq%2BF%2B52%2Bqvgt%2Bdqkre4zjHriM5dkEOcLt8jTW3RvMgNbJc9xMFR9hGp8ejesY6cimGfZZLTeDkuIsWLzRs4RAvpaXmUBoSAv2K2UoTkpvPCxMgTDasby9BjqkAZY76KG8%2FCCv38%2FCsKozvZsHXwqwLprha4Y0j7lmzkbcyb3GEYzk0kFL20CDw97oVWaOatLUq1u68loVSPLU2ExvT%2B1wHQWF%2BJIUwyayqP7dV73lneB8fO6y9vhsFaC%2FKPVZcgWYHSrkP8w2m8n7QjDmB5mt%2FhZJzWwRJoC%2FkptjbdeyvoHmf0SvEQ%2F0TuJy5HvZu54SQwVikLboGrXeigHtcSbS&X-Amz-Signature=887f635c4b32ea5946764e4dfda3c1869da4a5d8e431d8ad988a20bdfc2c2a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMKSQNN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD10Vpy%2FtRGtZRVBPMRznyTvDEFEk%2BccYOef5tRbVdJ8QIhAPp9IDbAQv8G3yVS1GKsM3i0CyV0DjCJcp7fF%2Bvvz9CtKv8DCCsQABoMNjM3NDIzMTgzODA1IgyFDUKTCQo%2F3GZZQUkq3AOM8LjpHkzLitbVOEoFAa3z4IMsBPOQ5fNBFM5fSIKyDzJsCkTlPjZqJHHugWNrGSfIHAnPd0CV7QLWpE6XyrA0K4khslXA9zdrPUW4h4dDc9eOqJNrZz8pXp6MOf8va6V3Ckt3GsbuIBw5FdZ7QtWguZt7TLTN2tKc2tx5TNrFyb7pGRY9971x7TMW6pp1%2BDaFFIyk%2FGNKAqB%2Bg5VNgrEnIYd3nfIkFMmfJVaokVuzYzVrzmW2zoOYGTZWPe441SUrVM8%2BJXLRi8fx5g9JPTqiTMM2wvxTBHdyYpFO1FrtfV6M5Qgj9p0y1dP1rLfzdpI6qdfvrvdt6iodR19Cx%2FvPF1Eu9gpD1TyuIzOPkxhpZMNegkOOHUA%2FI%2FBCcKfn4YeedKoVzEIY1YD2XOX7fbAWcglffooOdABR9%2FLXTA%2Fm%2Bh2dH5lnBlKlWZvc8eN%2BVB2cHiruQmwRZipcKmdWx5%2FszgE4y8MFcQecJWgKyvyScdCTNtAk05FB3d6ngvN%2FBVUHenhtQL405gkzq%2BF%2B52%2Bqvgt%2Bdqkre4zjHriM5dkEOcLt8jTW3RvMgNbJc9xMFR9hGp8ejesY6cimGfZZLTeDkuIsWLzRs4RAvpaXmUBoSAv2K2UoTkpvPCxMgTDasby9BjqkAZY76KG8%2FCCv38%2FCsKozvZsHXwqwLprha4Y0j7lmzkbcyb3GEYzk0kFL20CDw97oVWaOatLUq1u68loVSPLU2ExvT%2B1wHQWF%2BJIUwyayqP7dV73lneB8fO6y9vhsFaC%2FKPVZcgWYHSrkP8w2m8n7QjDmB5mt%2FhZJzWwRJoC%2FkptjbdeyvoHmf0SvEQ%2F0TuJy5HvZu54SQwVikLboGrXeigHtcSbS&X-Amz-Signature=826b2d5dde2f794a0d2215c0b2df942b2f9e6a61358f71b8b0ed7b8765059958&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
