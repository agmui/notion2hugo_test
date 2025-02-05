---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JFKQC5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCqGKZXC6tLXuN5fFhpELb6vWAtVLhigWzpRiQXtHJMNAIgBy3N0E%2Bjer3gxApRAvSA1LF0TnMYMXoJ2puFVLDeO98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH%2Bj0Y2V8HNY2VgfcyrcA7DRqr4Jp279DcBOHYUoddNsUnlrYsE0KKnWiS2xdLZlS5nsYuyws4MDEKtI1cHVAPP63NTvq3KnPjUbVv0n2JCCON1ADLD9XSQldv1M39zcoD%2F9T0Lg1vOSvHmQIHL1J101UUHJcLsHEBtNCLXdUrQ4R9XUhN7DUJBIArNBH1FIJdRkGiKpkiS5ofz3RedJl%2B%2FXR5TN5ZgtdCOyavQ8BxvB0yynhWu01AZ%2FIvSlRuE%2Bld2%2Bnqv4lv4QhtPHxcSpvfrYVioiVmF6Rs9BgQpQh5AZ6iLnIqCKD%2FjiXtWiVxqvLNRQN9vmC%2B6nykzgkBHh83T2iCm6CAtc46NkGsywDRAlNjiTrRyBqK5WpVD%2FtyBV0TCdJD7Rn8esJxMlGv0O7djt%2BNAsX0RFJcxcNbXZjSSE5uyDtn3TWn0p9oNw%2FP3D3k87Xu2t3UhU5yujHoTmC3pw36%2BF%2FPDx3XbkADgVqMaT7YYm6V9eHqtEjDAAv8RbiXhuJgoZPf0UN3QnWqv845m%2FWm44PXjPDCJ%2FGI3B1LVFQz%2FMrColYaOULVuxcTjy02UjcvEWKDakVk6DjGN3JNOZOAcwST4S86eGR2YedcL%2BwAOj2ckxZU4wZcVEoJblGnIHuNq%2Bu1fmfgqpMLTPir0GOqUBD1dbCFinlm9i9pWjd0LGlge%2FzwzlOgZlvgNv01KvtrsB%2FuAX1Sjw3TpHoKC0NKPLNKviwQxlBugq0%2BHIg%2FJK3Vzhj%2BD8mKQAof5XwsKisrue5F%2B3IAOsHdn9sNvCD%2B6xFtt6wcZc8zLSkIKSEvFbwFlpMsq6r4kexDN2JsZV6IatoBKy1bBD9pGcQgD51KN4fV6UAmdKRQuRyHmF7iVMwsV73NSu&X-Amz-Signature=cabab805aeca584cdde59bcfdb2359583406040eaf61c90667aa2187e9fd4f44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JFKQC5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCqGKZXC6tLXuN5fFhpELb6vWAtVLhigWzpRiQXtHJMNAIgBy3N0E%2Bjer3gxApRAvSA1LF0TnMYMXoJ2puFVLDeO98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH%2Bj0Y2V8HNY2VgfcyrcA7DRqr4Jp279DcBOHYUoddNsUnlrYsE0KKnWiS2xdLZlS5nsYuyws4MDEKtI1cHVAPP63NTvq3KnPjUbVv0n2JCCON1ADLD9XSQldv1M39zcoD%2F9T0Lg1vOSvHmQIHL1J101UUHJcLsHEBtNCLXdUrQ4R9XUhN7DUJBIArNBH1FIJdRkGiKpkiS5ofz3RedJl%2B%2FXR5TN5ZgtdCOyavQ8BxvB0yynhWu01AZ%2FIvSlRuE%2Bld2%2Bnqv4lv4QhtPHxcSpvfrYVioiVmF6Rs9BgQpQh5AZ6iLnIqCKD%2FjiXtWiVxqvLNRQN9vmC%2B6nykzgkBHh83T2iCm6CAtc46NkGsywDRAlNjiTrRyBqK5WpVD%2FtyBV0TCdJD7Rn8esJxMlGv0O7djt%2BNAsX0RFJcxcNbXZjSSE5uyDtn3TWn0p9oNw%2FP3D3k87Xu2t3UhU5yujHoTmC3pw36%2BF%2FPDx3XbkADgVqMaT7YYm6V9eHqtEjDAAv8RbiXhuJgoZPf0UN3QnWqv845m%2FWm44PXjPDCJ%2FGI3B1LVFQz%2FMrColYaOULVuxcTjy02UjcvEWKDakVk6DjGN3JNOZOAcwST4S86eGR2YedcL%2BwAOj2ckxZU4wZcVEoJblGnIHuNq%2Bu1fmfgqpMLTPir0GOqUBD1dbCFinlm9i9pWjd0LGlge%2FzwzlOgZlvgNv01KvtrsB%2FuAX1Sjw3TpHoKC0NKPLNKviwQxlBugq0%2BHIg%2FJK3Vzhj%2BD8mKQAof5XwsKisrue5F%2B3IAOsHdn9sNvCD%2B6xFtt6wcZc8zLSkIKSEvFbwFlpMsq6r4kexDN2JsZV6IatoBKy1bBD9pGcQgD51KN4fV6UAmdKRQuRyHmF7iVMwsV73NSu&X-Amz-Signature=1848d291448cdf22f9e4edfcca59829d91d8f145674e07bcab3e14e6bf236bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JFKQC5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCqGKZXC6tLXuN5fFhpELb6vWAtVLhigWzpRiQXtHJMNAIgBy3N0E%2Bjer3gxApRAvSA1LF0TnMYMXoJ2puFVLDeO98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH%2Bj0Y2V8HNY2VgfcyrcA7DRqr4Jp279DcBOHYUoddNsUnlrYsE0KKnWiS2xdLZlS5nsYuyws4MDEKtI1cHVAPP63NTvq3KnPjUbVv0n2JCCON1ADLD9XSQldv1M39zcoD%2F9T0Lg1vOSvHmQIHL1J101UUHJcLsHEBtNCLXdUrQ4R9XUhN7DUJBIArNBH1FIJdRkGiKpkiS5ofz3RedJl%2B%2FXR5TN5ZgtdCOyavQ8BxvB0yynhWu01AZ%2FIvSlRuE%2Bld2%2Bnqv4lv4QhtPHxcSpvfrYVioiVmF6Rs9BgQpQh5AZ6iLnIqCKD%2FjiXtWiVxqvLNRQN9vmC%2B6nykzgkBHh83T2iCm6CAtc46NkGsywDRAlNjiTrRyBqK5WpVD%2FtyBV0TCdJD7Rn8esJxMlGv0O7djt%2BNAsX0RFJcxcNbXZjSSE5uyDtn3TWn0p9oNw%2FP3D3k87Xu2t3UhU5yujHoTmC3pw36%2BF%2FPDx3XbkADgVqMaT7YYm6V9eHqtEjDAAv8RbiXhuJgoZPf0UN3QnWqv845m%2FWm44PXjPDCJ%2FGI3B1LVFQz%2FMrColYaOULVuxcTjy02UjcvEWKDakVk6DjGN3JNOZOAcwST4S86eGR2YedcL%2BwAOj2ckxZU4wZcVEoJblGnIHuNq%2Bu1fmfgqpMLTPir0GOqUBD1dbCFinlm9i9pWjd0LGlge%2FzwzlOgZlvgNv01KvtrsB%2FuAX1Sjw3TpHoKC0NKPLNKviwQxlBugq0%2BHIg%2FJK3Vzhj%2BD8mKQAof5XwsKisrue5F%2B3IAOsHdn9sNvCD%2B6xFtt6wcZc8zLSkIKSEvFbwFlpMsq6r4kexDN2JsZV6IatoBKy1bBD9pGcQgD51KN4fV6UAmdKRQuRyHmF7iVMwsV73NSu&X-Amz-Signature=bc10c99d2a9975de21d1f1894fd47af25132525c858077778e196096ce461278&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JFKQC5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCqGKZXC6tLXuN5fFhpELb6vWAtVLhigWzpRiQXtHJMNAIgBy3N0E%2Bjer3gxApRAvSA1LF0TnMYMXoJ2puFVLDeO98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH%2Bj0Y2V8HNY2VgfcyrcA7DRqr4Jp279DcBOHYUoddNsUnlrYsE0KKnWiS2xdLZlS5nsYuyws4MDEKtI1cHVAPP63NTvq3KnPjUbVv0n2JCCON1ADLD9XSQldv1M39zcoD%2F9T0Lg1vOSvHmQIHL1J101UUHJcLsHEBtNCLXdUrQ4R9XUhN7DUJBIArNBH1FIJdRkGiKpkiS5ofz3RedJl%2B%2FXR5TN5ZgtdCOyavQ8BxvB0yynhWu01AZ%2FIvSlRuE%2Bld2%2Bnqv4lv4QhtPHxcSpvfrYVioiVmF6Rs9BgQpQh5AZ6iLnIqCKD%2FjiXtWiVxqvLNRQN9vmC%2B6nykzgkBHh83T2iCm6CAtc46NkGsywDRAlNjiTrRyBqK5WpVD%2FtyBV0TCdJD7Rn8esJxMlGv0O7djt%2BNAsX0RFJcxcNbXZjSSE5uyDtn3TWn0p9oNw%2FP3D3k87Xu2t3UhU5yujHoTmC3pw36%2BF%2FPDx3XbkADgVqMaT7YYm6V9eHqtEjDAAv8RbiXhuJgoZPf0UN3QnWqv845m%2FWm44PXjPDCJ%2FGI3B1LVFQz%2FMrColYaOULVuxcTjy02UjcvEWKDakVk6DjGN3JNOZOAcwST4S86eGR2YedcL%2BwAOj2ckxZU4wZcVEoJblGnIHuNq%2Bu1fmfgqpMLTPir0GOqUBD1dbCFinlm9i9pWjd0LGlge%2FzwzlOgZlvgNv01KvtrsB%2FuAX1Sjw3TpHoKC0NKPLNKviwQxlBugq0%2BHIg%2FJK3Vzhj%2BD8mKQAof5XwsKisrue5F%2B3IAOsHdn9sNvCD%2B6xFtt6wcZc8zLSkIKSEvFbwFlpMsq6r4kexDN2JsZV6IatoBKy1bBD9pGcQgD51KN4fV6UAmdKRQuRyHmF7iVMwsV73NSu&X-Amz-Signature=711e1e0b1fb46b7e6be0b03d762538d735149d482abff8c2121e3be2a9eb9108&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JFKQC5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCqGKZXC6tLXuN5fFhpELb6vWAtVLhigWzpRiQXtHJMNAIgBy3N0E%2Bjer3gxApRAvSA1LF0TnMYMXoJ2puFVLDeO98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH%2Bj0Y2V8HNY2VgfcyrcA7DRqr4Jp279DcBOHYUoddNsUnlrYsE0KKnWiS2xdLZlS5nsYuyws4MDEKtI1cHVAPP63NTvq3KnPjUbVv0n2JCCON1ADLD9XSQldv1M39zcoD%2F9T0Lg1vOSvHmQIHL1J101UUHJcLsHEBtNCLXdUrQ4R9XUhN7DUJBIArNBH1FIJdRkGiKpkiS5ofz3RedJl%2B%2FXR5TN5ZgtdCOyavQ8BxvB0yynhWu01AZ%2FIvSlRuE%2Bld2%2Bnqv4lv4QhtPHxcSpvfrYVioiVmF6Rs9BgQpQh5AZ6iLnIqCKD%2FjiXtWiVxqvLNRQN9vmC%2B6nykzgkBHh83T2iCm6CAtc46NkGsywDRAlNjiTrRyBqK5WpVD%2FtyBV0TCdJD7Rn8esJxMlGv0O7djt%2BNAsX0RFJcxcNbXZjSSE5uyDtn3TWn0p9oNw%2FP3D3k87Xu2t3UhU5yujHoTmC3pw36%2BF%2FPDx3XbkADgVqMaT7YYm6V9eHqtEjDAAv8RbiXhuJgoZPf0UN3QnWqv845m%2FWm44PXjPDCJ%2FGI3B1LVFQz%2FMrColYaOULVuxcTjy02UjcvEWKDakVk6DjGN3JNOZOAcwST4S86eGR2YedcL%2BwAOj2ckxZU4wZcVEoJblGnIHuNq%2Bu1fmfgqpMLTPir0GOqUBD1dbCFinlm9i9pWjd0LGlge%2FzwzlOgZlvgNv01KvtrsB%2FuAX1Sjw3TpHoKC0NKPLNKviwQxlBugq0%2BHIg%2FJK3Vzhj%2BD8mKQAof5XwsKisrue5F%2B3IAOsHdn9sNvCD%2B6xFtt6wcZc8zLSkIKSEvFbwFlpMsq6r4kexDN2JsZV6IatoBKy1bBD9pGcQgD51KN4fV6UAmdKRQuRyHmF7iVMwsV73NSu&X-Amz-Signature=23151fa320c4579674702a31ad2b7350214d949d66abf9ba31d77828ebf22805&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
