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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2TICGK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChlTpzY9WFk4Jnc7Qhmvg7P1Rw01mkwKCCW%2FhE2HRFhQIhAMj1v1cCzCHRpLFryBpxAIPHAC%2F4YFNiaxFtaXxgqCv5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgxvlPVAmOZXS1AF1okq3AOGbDlv2ngjJ5r6mwsPJ6%2Fdwey5e5HWpLDtK3l7dVCoxqxiEAxTypsqTnkV2yNRXUlWE%2Fmp58PluTgosEezuIhGWHu4GdaMoHgca8IaE%2Fj%2BOmwEEdvKKC07blewnP4ZtJePif%2Bsrfx5NfP46gNeNJCrEl7kHK05RwLHwCRL3rE%2B5Lm6TdMrevzb%2Fe43MCTDPaZzX9C%2FY%2Bd%2BuM6isdeh997UJD26l0r0ML4gAh1eKbms5EGKl1PyKoF6ao4ZqKz8cWrUaRUXFLgUK2w5vIiK7KHNZgD3Tm4AmeVmOMPTNC9ooXDux%2BKhKygPAAFOa%2BsroT9B7mhmWjAeDv1iUC6gr9z37mGuc7evL9gbuBJN01bUHXtSw7zd%2B2ZPkVaBui8Jmy7cCoiW%2BPjQiIbrXjeFVo6K57igHE0FhCb6beHrMP7xKIuIMX8RViFUfPnEnoCXPmue08zSB9vfmpslKNbZulQtYDQlm%2BFemLWqg%2BxU9pTAm05DZ4kj3Re7ngIGaObr6Oj%2Fxbrzk8MW5qyPaSR%2BPGVmPuRcN%2BI4OY8rvq7bp4uQRP%2BZh4h8VweoG%2F1NdAposqUu4IxJvON5tlGsik5DkxbK8CqZkZavqCqUHSiw2HSq%2F80SQD3glSOI%2FMtAnzC205LCBjqkAZkIFXK5UIUxpP%2BQRfpXl%2BxBsuMjggkpIezW2foiw6eoUlQLLKjvRCBcGuJF9pFo8OX7vnLJC6%2BLOs3RchmY9t4cVf1Tu47G22Sfi%2BblpJd5or6imZ0ANXfd6t2H8I1Kb3psHRq1qKPXv2YI%2BW5y2lrQl5vw71FFAjQHkdwBGQ2gcng8qmur%2Fy1PRFMZjec8TaMUCVZH%2B5ZP0bIzcWXHk%2Ba6eOtC&X-Amz-Signature=7fb16f689d2348e50e766efd9dc18c2c04a80395771ae280973009de75c69925&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2TICGK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChlTpzY9WFk4Jnc7Qhmvg7P1Rw01mkwKCCW%2FhE2HRFhQIhAMj1v1cCzCHRpLFryBpxAIPHAC%2F4YFNiaxFtaXxgqCv5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgxvlPVAmOZXS1AF1okq3AOGbDlv2ngjJ5r6mwsPJ6%2Fdwey5e5HWpLDtK3l7dVCoxqxiEAxTypsqTnkV2yNRXUlWE%2Fmp58PluTgosEezuIhGWHu4GdaMoHgca8IaE%2Fj%2BOmwEEdvKKC07blewnP4ZtJePif%2Bsrfx5NfP46gNeNJCrEl7kHK05RwLHwCRL3rE%2B5Lm6TdMrevzb%2Fe43MCTDPaZzX9C%2FY%2Bd%2BuM6isdeh997UJD26l0r0ML4gAh1eKbms5EGKl1PyKoF6ao4ZqKz8cWrUaRUXFLgUK2w5vIiK7KHNZgD3Tm4AmeVmOMPTNC9ooXDux%2BKhKygPAAFOa%2BsroT9B7mhmWjAeDv1iUC6gr9z37mGuc7evL9gbuBJN01bUHXtSw7zd%2B2ZPkVaBui8Jmy7cCoiW%2BPjQiIbrXjeFVo6K57igHE0FhCb6beHrMP7xKIuIMX8RViFUfPnEnoCXPmue08zSB9vfmpslKNbZulQtYDQlm%2BFemLWqg%2BxU9pTAm05DZ4kj3Re7ngIGaObr6Oj%2Fxbrzk8MW5qyPaSR%2BPGVmPuRcN%2BI4OY8rvq7bp4uQRP%2BZh4h8VweoG%2F1NdAposqUu4IxJvON5tlGsik5DkxbK8CqZkZavqCqUHSiw2HSq%2F80SQD3glSOI%2FMtAnzC205LCBjqkAZkIFXK5UIUxpP%2BQRfpXl%2BxBsuMjggkpIezW2foiw6eoUlQLLKjvRCBcGuJF9pFo8OX7vnLJC6%2BLOs3RchmY9t4cVf1Tu47G22Sfi%2BblpJd5or6imZ0ANXfd6t2H8I1Kb3psHRq1qKPXv2YI%2BW5y2lrQl5vw71FFAjQHkdwBGQ2gcng8qmur%2Fy1PRFMZjec8TaMUCVZH%2B5ZP0bIzcWXHk%2Ba6eOtC&X-Amz-Signature=5ce551f76f89afeaeedcc0a26ff430a6e24df7bad39ca9cc81cfd92f16c587ba&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2TICGK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChlTpzY9WFk4Jnc7Qhmvg7P1Rw01mkwKCCW%2FhE2HRFhQIhAMj1v1cCzCHRpLFryBpxAIPHAC%2F4YFNiaxFtaXxgqCv5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgxvlPVAmOZXS1AF1okq3AOGbDlv2ngjJ5r6mwsPJ6%2Fdwey5e5HWpLDtK3l7dVCoxqxiEAxTypsqTnkV2yNRXUlWE%2Fmp58PluTgosEezuIhGWHu4GdaMoHgca8IaE%2Fj%2BOmwEEdvKKC07blewnP4ZtJePif%2Bsrfx5NfP46gNeNJCrEl7kHK05RwLHwCRL3rE%2B5Lm6TdMrevzb%2Fe43MCTDPaZzX9C%2FY%2Bd%2BuM6isdeh997UJD26l0r0ML4gAh1eKbms5EGKl1PyKoF6ao4ZqKz8cWrUaRUXFLgUK2w5vIiK7KHNZgD3Tm4AmeVmOMPTNC9ooXDux%2BKhKygPAAFOa%2BsroT9B7mhmWjAeDv1iUC6gr9z37mGuc7evL9gbuBJN01bUHXtSw7zd%2B2ZPkVaBui8Jmy7cCoiW%2BPjQiIbrXjeFVo6K57igHE0FhCb6beHrMP7xKIuIMX8RViFUfPnEnoCXPmue08zSB9vfmpslKNbZulQtYDQlm%2BFemLWqg%2BxU9pTAm05DZ4kj3Re7ngIGaObr6Oj%2Fxbrzk8MW5qyPaSR%2BPGVmPuRcN%2BI4OY8rvq7bp4uQRP%2BZh4h8VweoG%2F1NdAposqUu4IxJvON5tlGsik5DkxbK8CqZkZavqCqUHSiw2HSq%2F80SQD3glSOI%2FMtAnzC205LCBjqkAZkIFXK5UIUxpP%2BQRfpXl%2BxBsuMjggkpIezW2foiw6eoUlQLLKjvRCBcGuJF9pFo8OX7vnLJC6%2BLOs3RchmY9t4cVf1Tu47G22Sfi%2BblpJd5or6imZ0ANXfd6t2H8I1Kb3psHRq1qKPXv2YI%2BW5y2lrQl5vw71FFAjQHkdwBGQ2gcng8qmur%2Fy1PRFMZjec8TaMUCVZH%2B5ZP0bIzcWXHk%2Ba6eOtC&X-Amz-Signature=89113fa0934e8c620c25134bc41115c69d48306be5fbc553b8a54538b0e68766&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2TICGK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChlTpzY9WFk4Jnc7Qhmvg7P1Rw01mkwKCCW%2FhE2HRFhQIhAMj1v1cCzCHRpLFryBpxAIPHAC%2F4YFNiaxFtaXxgqCv5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgxvlPVAmOZXS1AF1okq3AOGbDlv2ngjJ5r6mwsPJ6%2Fdwey5e5HWpLDtK3l7dVCoxqxiEAxTypsqTnkV2yNRXUlWE%2Fmp58PluTgosEezuIhGWHu4GdaMoHgca8IaE%2Fj%2BOmwEEdvKKC07blewnP4ZtJePif%2Bsrfx5NfP46gNeNJCrEl7kHK05RwLHwCRL3rE%2B5Lm6TdMrevzb%2Fe43MCTDPaZzX9C%2FY%2Bd%2BuM6isdeh997UJD26l0r0ML4gAh1eKbms5EGKl1PyKoF6ao4ZqKz8cWrUaRUXFLgUK2w5vIiK7KHNZgD3Tm4AmeVmOMPTNC9ooXDux%2BKhKygPAAFOa%2BsroT9B7mhmWjAeDv1iUC6gr9z37mGuc7evL9gbuBJN01bUHXtSw7zd%2B2ZPkVaBui8Jmy7cCoiW%2BPjQiIbrXjeFVo6K57igHE0FhCb6beHrMP7xKIuIMX8RViFUfPnEnoCXPmue08zSB9vfmpslKNbZulQtYDQlm%2BFemLWqg%2BxU9pTAm05DZ4kj3Re7ngIGaObr6Oj%2Fxbrzk8MW5qyPaSR%2BPGVmPuRcN%2BI4OY8rvq7bp4uQRP%2BZh4h8VweoG%2F1NdAposqUu4IxJvON5tlGsik5DkxbK8CqZkZavqCqUHSiw2HSq%2F80SQD3glSOI%2FMtAnzC205LCBjqkAZkIFXK5UIUxpP%2BQRfpXl%2BxBsuMjggkpIezW2foiw6eoUlQLLKjvRCBcGuJF9pFo8OX7vnLJC6%2BLOs3RchmY9t4cVf1Tu47G22Sfi%2BblpJd5or6imZ0ANXfd6t2H8I1Kb3psHRq1qKPXv2YI%2BW5y2lrQl5vw71FFAjQHkdwBGQ2gcng8qmur%2Fy1PRFMZjec8TaMUCVZH%2B5ZP0bIzcWXHk%2Ba6eOtC&X-Amz-Signature=b4a65905f378a89d506a37a0dcb7e5a479f321e4beae42a0e79cb39b04ad3338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2TICGK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChlTpzY9WFk4Jnc7Qhmvg7P1Rw01mkwKCCW%2FhE2HRFhQIhAMj1v1cCzCHRpLFryBpxAIPHAC%2F4YFNiaxFtaXxgqCv5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgxvlPVAmOZXS1AF1okq3AOGbDlv2ngjJ5r6mwsPJ6%2Fdwey5e5HWpLDtK3l7dVCoxqxiEAxTypsqTnkV2yNRXUlWE%2Fmp58PluTgosEezuIhGWHu4GdaMoHgca8IaE%2Fj%2BOmwEEdvKKC07blewnP4ZtJePif%2Bsrfx5NfP46gNeNJCrEl7kHK05RwLHwCRL3rE%2B5Lm6TdMrevzb%2Fe43MCTDPaZzX9C%2FY%2Bd%2BuM6isdeh997UJD26l0r0ML4gAh1eKbms5EGKl1PyKoF6ao4ZqKz8cWrUaRUXFLgUK2w5vIiK7KHNZgD3Tm4AmeVmOMPTNC9ooXDux%2BKhKygPAAFOa%2BsroT9B7mhmWjAeDv1iUC6gr9z37mGuc7evL9gbuBJN01bUHXtSw7zd%2B2ZPkVaBui8Jmy7cCoiW%2BPjQiIbrXjeFVo6K57igHE0FhCb6beHrMP7xKIuIMX8RViFUfPnEnoCXPmue08zSB9vfmpslKNbZulQtYDQlm%2BFemLWqg%2BxU9pTAm05DZ4kj3Re7ngIGaObr6Oj%2Fxbrzk8MW5qyPaSR%2BPGVmPuRcN%2BI4OY8rvq7bp4uQRP%2BZh4h8VweoG%2F1NdAposqUu4IxJvON5tlGsik5DkxbK8CqZkZavqCqUHSiw2HSq%2F80SQD3glSOI%2FMtAnzC205LCBjqkAZkIFXK5UIUxpP%2BQRfpXl%2BxBsuMjggkpIezW2foiw6eoUlQLLKjvRCBcGuJF9pFo8OX7vnLJC6%2BLOs3RchmY9t4cVf1Tu47G22Sfi%2BblpJd5or6imZ0ANXfd6t2H8I1Kb3psHRq1qKPXv2YI%2BW5y2lrQl5vw71FFAjQHkdwBGQ2gcng8qmur%2Fy1PRFMZjec8TaMUCVZH%2B5ZP0bIzcWXHk%2Ba6eOtC&X-Amz-Signature=154efc93471a8c0cfa1427edf84f36895a5e07f29accc2ee5021e6d5ab6aef1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
