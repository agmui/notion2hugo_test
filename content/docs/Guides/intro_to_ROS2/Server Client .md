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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYUJLPP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpG7NtxNOmow00aaFAT%2BsKYBPOAtD7Fh6ZLYTal2v%2FowIhAIYaCOzzirVCCAUih30jn9hnexbiLTmpzA0tUMxmYPgMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4oWlrIcxXY0tmLcq3ANBrQnAGJbOm0jQyj1lNVgmm44Knr%2FarooDM55CAI5Hwyaq3lh5WbT2%2BYf0UkNRs25JNu7FDP5BuDYEkZNyMpVPQ9WtDo9juqgSDIU0OuStpR436%2Fhpn5kOGmIGjtrJLOoaAe9Fdk8E4dTlA44BhCcgMO1AC5xdeFmGXka2qZMZC%2FFZhizAgKEUFA7ygjtZWL9JHmNw1q0p8RlXR1YZGWYHAvN0hLlSKmPgm%2BoAmaRRcB81yzdz8oxpRs8qB%2FBw4Vz5faN%2BEQ%2Fajclwf7G9R3K5ywkDoI%2FuDsxUWGntEQPRRiXmLC7c4oqDpSnQnnbQ7xnHwIiT0OwhTfIoIuNUKE98i9V1zlCyIFmPx6wr9DbDaSvUTfATFyydO5ndfsm0tbYUhd8p28eANG2seMSB%2F2oIm9iWIjloN6%2Bb1tCrnkqLQwyNi%2F9SYIWh69YAT%2B%2FsN%2FkzYrGx8UaX8kxGGQ8Xu4mhjrOJKrDCemQkzT4pa0Dhp5AkL8cKeja3RHcfV1uQTiMxJhVIB0PJXIG0PXf%2FFM5F3rVgykNx1CyyhlLAq8JaZ%2B13NvAzg17YPtrobnV%2BZMQhUqB%2BKItN8PeAYY0lYrBP8f9skI3f9tnysVbqnEPdc6pxNZ9PRTqbYIv57zDj2Nu9BjqkAY%2BUrUyAhR9hcC3Zti%2FPSJWcBRZWYCGsGAav19vBGwpEUz1hxSK1LUxfMV%2B877vL%2Fi%2BWw7aI7tLTEUW0g6gOA3Bqb%2BQ3KgSLXjQe%2BMw1pNn%2BrgztRS47PALDg3EW69eYPIO6e95%2B8H4njbREkX9uRgiCvrVwPCCotAXmi%2BcHzWCGf%2Finmih2di8HLhy3%2FIPSoUS6QIGogXEGfRGsWcjt%2BR2Q9WeM&X-Amz-Signature=fe33798ec48c031b07895a2caa01269708102c178ee6278e9d24204c5af474be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYUJLPP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpG7NtxNOmow00aaFAT%2BsKYBPOAtD7Fh6ZLYTal2v%2FowIhAIYaCOzzirVCCAUih30jn9hnexbiLTmpzA0tUMxmYPgMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4oWlrIcxXY0tmLcq3ANBrQnAGJbOm0jQyj1lNVgmm44Knr%2FarooDM55CAI5Hwyaq3lh5WbT2%2BYf0UkNRs25JNu7FDP5BuDYEkZNyMpVPQ9WtDo9juqgSDIU0OuStpR436%2Fhpn5kOGmIGjtrJLOoaAe9Fdk8E4dTlA44BhCcgMO1AC5xdeFmGXka2qZMZC%2FFZhizAgKEUFA7ygjtZWL9JHmNw1q0p8RlXR1YZGWYHAvN0hLlSKmPgm%2BoAmaRRcB81yzdz8oxpRs8qB%2FBw4Vz5faN%2BEQ%2Fajclwf7G9R3K5ywkDoI%2FuDsxUWGntEQPRRiXmLC7c4oqDpSnQnnbQ7xnHwIiT0OwhTfIoIuNUKE98i9V1zlCyIFmPx6wr9DbDaSvUTfATFyydO5ndfsm0tbYUhd8p28eANG2seMSB%2F2oIm9iWIjloN6%2Bb1tCrnkqLQwyNi%2F9SYIWh69YAT%2B%2FsN%2FkzYrGx8UaX8kxGGQ8Xu4mhjrOJKrDCemQkzT4pa0Dhp5AkL8cKeja3RHcfV1uQTiMxJhVIB0PJXIG0PXf%2FFM5F3rVgykNx1CyyhlLAq8JaZ%2B13NvAzg17YPtrobnV%2BZMQhUqB%2BKItN8PeAYY0lYrBP8f9skI3f9tnysVbqnEPdc6pxNZ9PRTqbYIv57zDj2Nu9BjqkAY%2BUrUyAhR9hcC3Zti%2FPSJWcBRZWYCGsGAav19vBGwpEUz1hxSK1LUxfMV%2B877vL%2Fi%2BWw7aI7tLTEUW0g6gOA3Bqb%2BQ3KgSLXjQe%2BMw1pNn%2BrgztRS47PALDg3EW69eYPIO6e95%2B8H4njbREkX9uRgiCvrVwPCCotAXmi%2BcHzWCGf%2Finmih2di8HLhy3%2FIPSoUS6QIGogXEGfRGsWcjt%2BR2Q9WeM&X-Amz-Signature=c1135cf8f96a1e2a521f9d5118aed24a32e5827511c44cf2b44056cda1c7d48e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYUJLPP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpG7NtxNOmow00aaFAT%2BsKYBPOAtD7Fh6ZLYTal2v%2FowIhAIYaCOzzirVCCAUih30jn9hnexbiLTmpzA0tUMxmYPgMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4oWlrIcxXY0tmLcq3ANBrQnAGJbOm0jQyj1lNVgmm44Knr%2FarooDM55CAI5Hwyaq3lh5WbT2%2BYf0UkNRs25JNu7FDP5BuDYEkZNyMpVPQ9WtDo9juqgSDIU0OuStpR436%2Fhpn5kOGmIGjtrJLOoaAe9Fdk8E4dTlA44BhCcgMO1AC5xdeFmGXka2qZMZC%2FFZhizAgKEUFA7ygjtZWL9JHmNw1q0p8RlXR1YZGWYHAvN0hLlSKmPgm%2BoAmaRRcB81yzdz8oxpRs8qB%2FBw4Vz5faN%2BEQ%2Fajclwf7G9R3K5ywkDoI%2FuDsxUWGntEQPRRiXmLC7c4oqDpSnQnnbQ7xnHwIiT0OwhTfIoIuNUKE98i9V1zlCyIFmPx6wr9DbDaSvUTfATFyydO5ndfsm0tbYUhd8p28eANG2seMSB%2F2oIm9iWIjloN6%2Bb1tCrnkqLQwyNi%2F9SYIWh69YAT%2B%2FsN%2FkzYrGx8UaX8kxGGQ8Xu4mhjrOJKrDCemQkzT4pa0Dhp5AkL8cKeja3RHcfV1uQTiMxJhVIB0PJXIG0PXf%2FFM5F3rVgykNx1CyyhlLAq8JaZ%2B13NvAzg17YPtrobnV%2BZMQhUqB%2BKItN8PeAYY0lYrBP8f9skI3f9tnysVbqnEPdc6pxNZ9PRTqbYIv57zDj2Nu9BjqkAY%2BUrUyAhR9hcC3Zti%2FPSJWcBRZWYCGsGAav19vBGwpEUz1hxSK1LUxfMV%2B877vL%2Fi%2BWw7aI7tLTEUW0g6gOA3Bqb%2BQ3KgSLXjQe%2BMw1pNn%2BrgztRS47PALDg3EW69eYPIO6e95%2B8H4njbREkX9uRgiCvrVwPCCotAXmi%2BcHzWCGf%2Finmih2di8HLhy3%2FIPSoUS6QIGogXEGfRGsWcjt%2BR2Q9WeM&X-Amz-Signature=0015cdba6f7b35e993045820b3f847482e5f4b54a10be885b0bf9f25dae43a67&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYUJLPP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpG7NtxNOmow00aaFAT%2BsKYBPOAtD7Fh6ZLYTal2v%2FowIhAIYaCOzzirVCCAUih30jn9hnexbiLTmpzA0tUMxmYPgMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4oWlrIcxXY0tmLcq3ANBrQnAGJbOm0jQyj1lNVgmm44Knr%2FarooDM55CAI5Hwyaq3lh5WbT2%2BYf0UkNRs25JNu7FDP5BuDYEkZNyMpVPQ9WtDo9juqgSDIU0OuStpR436%2Fhpn5kOGmIGjtrJLOoaAe9Fdk8E4dTlA44BhCcgMO1AC5xdeFmGXka2qZMZC%2FFZhizAgKEUFA7ygjtZWL9JHmNw1q0p8RlXR1YZGWYHAvN0hLlSKmPgm%2BoAmaRRcB81yzdz8oxpRs8qB%2FBw4Vz5faN%2BEQ%2Fajclwf7G9R3K5ywkDoI%2FuDsxUWGntEQPRRiXmLC7c4oqDpSnQnnbQ7xnHwIiT0OwhTfIoIuNUKE98i9V1zlCyIFmPx6wr9DbDaSvUTfATFyydO5ndfsm0tbYUhd8p28eANG2seMSB%2F2oIm9iWIjloN6%2Bb1tCrnkqLQwyNi%2F9SYIWh69YAT%2B%2FsN%2FkzYrGx8UaX8kxGGQ8Xu4mhjrOJKrDCemQkzT4pa0Dhp5AkL8cKeja3RHcfV1uQTiMxJhVIB0PJXIG0PXf%2FFM5F3rVgykNx1CyyhlLAq8JaZ%2B13NvAzg17YPtrobnV%2BZMQhUqB%2BKItN8PeAYY0lYrBP8f9skI3f9tnysVbqnEPdc6pxNZ9PRTqbYIv57zDj2Nu9BjqkAY%2BUrUyAhR9hcC3Zti%2FPSJWcBRZWYCGsGAav19vBGwpEUz1hxSK1LUxfMV%2B877vL%2Fi%2BWw7aI7tLTEUW0g6gOA3Bqb%2BQ3KgSLXjQe%2BMw1pNn%2BrgztRS47PALDg3EW69eYPIO6e95%2B8H4njbREkX9uRgiCvrVwPCCotAXmi%2BcHzWCGf%2Finmih2di8HLhy3%2FIPSoUS6QIGogXEGfRGsWcjt%2BR2Q9WeM&X-Amz-Signature=3c94fb25e4d916bc46315d417701669338470fa303e3cfd031aab97b9a0bb2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYUJLPP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpG7NtxNOmow00aaFAT%2BsKYBPOAtD7Fh6ZLYTal2v%2FowIhAIYaCOzzirVCCAUih30jn9hnexbiLTmpzA0tUMxmYPgMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4oWlrIcxXY0tmLcq3ANBrQnAGJbOm0jQyj1lNVgmm44Knr%2FarooDM55CAI5Hwyaq3lh5WbT2%2BYf0UkNRs25JNu7FDP5BuDYEkZNyMpVPQ9WtDo9juqgSDIU0OuStpR436%2Fhpn5kOGmIGjtrJLOoaAe9Fdk8E4dTlA44BhCcgMO1AC5xdeFmGXka2qZMZC%2FFZhizAgKEUFA7ygjtZWL9JHmNw1q0p8RlXR1YZGWYHAvN0hLlSKmPgm%2BoAmaRRcB81yzdz8oxpRs8qB%2FBw4Vz5faN%2BEQ%2Fajclwf7G9R3K5ywkDoI%2FuDsxUWGntEQPRRiXmLC7c4oqDpSnQnnbQ7xnHwIiT0OwhTfIoIuNUKE98i9V1zlCyIFmPx6wr9DbDaSvUTfATFyydO5ndfsm0tbYUhd8p28eANG2seMSB%2F2oIm9iWIjloN6%2Bb1tCrnkqLQwyNi%2F9SYIWh69YAT%2B%2FsN%2FkzYrGx8UaX8kxGGQ8Xu4mhjrOJKrDCemQkzT4pa0Dhp5AkL8cKeja3RHcfV1uQTiMxJhVIB0PJXIG0PXf%2FFM5F3rVgykNx1CyyhlLAq8JaZ%2B13NvAzg17YPtrobnV%2BZMQhUqB%2BKItN8PeAYY0lYrBP8f9skI3f9tnysVbqnEPdc6pxNZ9PRTqbYIv57zDj2Nu9BjqkAY%2BUrUyAhR9hcC3Zti%2FPSJWcBRZWYCGsGAav19vBGwpEUz1hxSK1LUxfMV%2B877vL%2Fi%2BWw7aI7tLTEUW0g6gOA3Bqb%2BQ3KgSLXjQe%2BMw1pNn%2BrgztRS47PALDg3EW69eYPIO6e95%2B8H4njbREkX9uRgiCvrVwPCCotAXmi%2BcHzWCGf%2Finmih2di8HLhy3%2FIPSoUS6QIGogXEGfRGsWcjt%2BR2Q9WeM&X-Amz-Signature=2950fad1e57eb657012e1bcf93dd1c817c02ba4ecc41827dc6c574bca2201274&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
