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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3JA4NL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oyg%2BIMQEfHcYacOR8nFZORlz1b2jSGIgMX%2Fe3BppJQIhAKbYkGoRUC7N86Q7n%2FLqp4rzrInvNVGBO5TCOCIClastKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1U0WUjwrwKtQRfncq3AOwJd912UG%2BTZPM1K1UWInzEaW4OK6bhEH1q4QDvMCYBsdI0MeW7QTCjLJxMycs5RYhRwocSUkV7k7bL2uAnwqGZvfm8IgxOLnVzmi%2B%2BFqhmpHdH3qoxdz0mpS4Zw3Sw2DRfwoS1bCSLaw58siyQ%2FBvTQS7O9zPxJxWOrKkjCMkkYohKxh7lWAPYjtXlZM%2BiDLQ3BKoHQ25zyljtLRkTUJ3ybwMF6oAVWaHPCfjuQB%2BY3iX5mJBxHojlqY9ry3FVyIaoggIqhOn05Nv7HTQi6mTNOyM4n093EmluZS4JnHEbRcjt6idYrSzVD11KNCSnYqh59IJrrILpPU2HcJ%2BOaSgqXOBT9O7xy%2FqB5F%2BOz05uRUe9V4c91G3pCU4cDnDIDnqPjpl21DIbMy3y8pT8TDATrRTrl1gILHPo9OGS1wmbiwV2acX8SpMgQaHnz0KL90Li5bW4xTNnLm3hgMBojqQjtT6RFTZZjHlD1cCf58Fmp5i6UsQzHKWoxYw%2FQhA6rTfMheToUlzSyQGpi%2FZkD4CTtg%2FfWVrf%2BD4IVdRNYWB07kVg5TsrDedH8D1RujPmUr%2B1%2BCMRReCS7kfrOl%2FZqDhsOUXECKSgl3suinSwou%2Flc78YBDj1tNV0gfL7DDq46G9BjqkAd6ZvvCOoGlDJpF9Wli9B1l4xyDqnSALIC9gsHL5l1EkzqXYlE3MeMrDDxiGn8ZRXqQ1l4rBRQ%2BUOL7ek8uTuBIyKDBcH2Ou5Z9PZ%2B1HK%2B7aIXIkp43sbHIQ6yVmWav6YKDR79X%2FwFQDwrqISTfMfnNI9QbKxnjAVPHCyBYG8%2F%2Faft%2B2Ip9PzBy8W%2FnXNem55Z%2Bm8ljebaVyoDPVscdhUdpCHvIs&X-Amz-Signature=5f9d897a1f478a92903182b8fab09c8d7afefc396ccc080feb94a1d7bd41a123&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3JA4NL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oyg%2BIMQEfHcYacOR8nFZORlz1b2jSGIgMX%2Fe3BppJQIhAKbYkGoRUC7N86Q7n%2FLqp4rzrInvNVGBO5TCOCIClastKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1U0WUjwrwKtQRfncq3AOwJd912UG%2BTZPM1K1UWInzEaW4OK6bhEH1q4QDvMCYBsdI0MeW7QTCjLJxMycs5RYhRwocSUkV7k7bL2uAnwqGZvfm8IgxOLnVzmi%2B%2BFqhmpHdH3qoxdz0mpS4Zw3Sw2DRfwoS1bCSLaw58siyQ%2FBvTQS7O9zPxJxWOrKkjCMkkYohKxh7lWAPYjtXlZM%2BiDLQ3BKoHQ25zyljtLRkTUJ3ybwMF6oAVWaHPCfjuQB%2BY3iX5mJBxHojlqY9ry3FVyIaoggIqhOn05Nv7HTQi6mTNOyM4n093EmluZS4JnHEbRcjt6idYrSzVD11KNCSnYqh59IJrrILpPU2HcJ%2BOaSgqXOBT9O7xy%2FqB5F%2BOz05uRUe9V4c91G3pCU4cDnDIDnqPjpl21DIbMy3y8pT8TDATrRTrl1gILHPo9OGS1wmbiwV2acX8SpMgQaHnz0KL90Li5bW4xTNnLm3hgMBojqQjtT6RFTZZjHlD1cCf58Fmp5i6UsQzHKWoxYw%2FQhA6rTfMheToUlzSyQGpi%2FZkD4CTtg%2FfWVrf%2BD4IVdRNYWB07kVg5TsrDedH8D1RujPmUr%2B1%2BCMRReCS7kfrOl%2FZqDhsOUXECKSgl3suinSwou%2Flc78YBDj1tNV0gfL7DDq46G9BjqkAd6ZvvCOoGlDJpF9Wli9B1l4xyDqnSALIC9gsHL5l1EkzqXYlE3MeMrDDxiGn8ZRXqQ1l4rBRQ%2BUOL7ek8uTuBIyKDBcH2Ou5Z9PZ%2B1HK%2B7aIXIkp43sbHIQ6yVmWav6YKDR79X%2FwFQDwrqISTfMfnNI9QbKxnjAVPHCyBYG8%2F%2Faft%2B2Ip9PzBy8W%2FnXNem55Z%2Bm8ljebaVyoDPVscdhUdpCHvIs&X-Amz-Signature=e89cec38b8af7cc5a9605f844d3ec470c6b0613eca2f6774f7334d539a54be1b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3JA4NL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oyg%2BIMQEfHcYacOR8nFZORlz1b2jSGIgMX%2Fe3BppJQIhAKbYkGoRUC7N86Q7n%2FLqp4rzrInvNVGBO5TCOCIClastKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1U0WUjwrwKtQRfncq3AOwJd912UG%2BTZPM1K1UWInzEaW4OK6bhEH1q4QDvMCYBsdI0MeW7QTCjLJxMycs5RYhRwocSUkV7k7bL2uAnwqGZvfm8IgxOLnVzmi%2B%2BFqhmpHdH3qoxdz0mpS4Zw3Sw2DRfwoS1bCSLaw58siyQ%2FBvTQS7O9zPxJxWOrKkjCMkkYohKxh7lWAPYjtXlZM%2BiDLQ3BKoHQ25zyljtLRkTUJ3ybwMF6oAVWaHPCfjuQB%2BY3iX5mJBxHojlqY9ry3FVyIaoggIqhOn05Nv7HTQi6mTNOyM4n093EmluZS4JnHEbRcjt6idYrSzVD11KNCSnYqh59IJrrILpPU2HcJ%2BOaSgqXOBT9O7xy%2FqB5F%2BOz05uRUe9V4c91G3pCU4cDnDIDnqPjpl21DIbMy3y8pT8TDATrRTrl1gILHPo9OGS1wmbiwV2acX8SpMgQaHnz0KL90Li5bW4xTNnLm3hgMBojqQjtT6RFTZZjHlD1cCf58Fmp5i6UsQzHKWoxYw%2FQhA6rTfMheToUlzSyQGpi%2FZkD4CTtg%2FfWVrf%2BD4IVdRNYWB07kVg5TsrDedH8D1RujPmUr%2B1%2BCMRReCS7kfrOl%2FZqDhsOUXECKSgl3suinSwou%2Flc78YBDj1tNV0gfL7DDq46G9BjqkAd6ZvvCOoGlDJpF9Wli9B1l4xyDqnSALIC9gsHL5l1EkzqXYlE3MeMrDDxiGn8ZRXqQ1l4rBRQ%2BUOL7ek8uTuBIyKDBcH2Ou5Z9PZ%2B1HK%2B7aIXIkp43sbHIQ6yVmWav6YKDR79X%2FwFQDwrqISTfMfnNI9QbKxnjAVPHCyBYG8%2F%2Faft%2B2Ip9PzBy8W%2FnXNem55Z%2Bm8ljebaVyoDPVscdhUdpCHvIs&X-Amz-Signature=29dd99c8986556531b8dda65836d6729916e00a28d12f53463feb24b788a2e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3JA4NL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oyg%2BIMQEfHcYacOR8nFZORlz1b2jSGIgMX%2Fe3BppJQIhAKbYkGoRUC7N86Q7n%2FLqp4rzrInvNVGBO5TCOCIClastKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1U0WUjwrwKtQRfncq3AOwJd912UG%2BTZPM1K1UWInzEaW4OK6bhEH1q4QDvMCYBsdI0MeW7QTCjLJxMycs5RYhRwocSUkV7k7bL2uAnwqGZvfm8IgxOLnVzmi%2B%2BFqhmpHdH3qoxdz0mpS4Zw3Sw2DRfwoS1bCSLaw58siyQ%2FBvTQS7O9zPxJxWOrKkjCMkkYohKxh7lWAPYjtXlZM%2BiDLQ3BKoHQ25zyljtLRkTUJ3ybwMF6oAVWaHPCfjuQB%2BY3iX5mJBxHojlqY9ry3FVyIaoggIqhOn05Nv7HTQi6mTNOyM4n093EmluZS4JnHEbRcjt6idYrSzVD11KNCSnYqh59IJrrILpPU2HcJ%2BOaSgqXOBT9O7xy%2FqB5F%2BOz05uRUe9V4c91G3pCU4cDnDIDnqPjpl21DIbMy3y8pT8TDATrRTrl1gILHPo9OGS1wmbiwV2acX8SpMgQaHnz0KL90Li5bW4xTNnLm3hgMBojqQjtT6RFTZZjHlD1cCf58Fmp5i6UsQzHKWoxYw%2FQhA6rTfMheToUlzSyQGpi%2FZkD4CTtg%2FfWVrf%2BD4IVdRNYWB07kVg5TsrDedH8D1RujPmUr%2B1%2BCMRReCS7kfrOl%2FZqDhsOUXECKSgl3suinSwou%2Flc78YBDj1tNV0gfL7DDq46G9BjqkAd6ZvvCOoGlDJpF9Wli9B1l4xyDqnSALIC9gsHL5l1EkzqXYlE3MeMrDDxiGn8ZRXqQ1l4rBRQ%2BUOL7ek8uTuBIyKDBcH2Ou5Z9PZ%2B1HK%2B7aIXIkp43sbHIQ6yVmWav6YKDR79X%2FwFQDwrqISTfMfnNI9QbKxnjAVPHCyBYG8%2F%2Faft%2B2Ip9PzBy8W%2FnXNem55Z%2Bm8ljebaVyoDPVscdhUdpCHvIs&X-Amz-Signature=7dee105a794c880697e50134781e61146b7123b8fa2d81909b973a183fd67865&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3JA4NL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oyg%2BIMQEfHcYacOR8nFZORlz1b2jSGIgMX%2Fe3BppJQIhAKbYkGoRUC7N86Q7n%2FLqp4rzrInvNVGBO5TCOCIClastKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1U0WUjwrwKtQRfncq3AOwJd912UG%2BTZPM1K1UWInzEaW4OK6bhEH1q4QDvMCYBsdI0MeW7QTCjLJxMycs5RYhRwocSUkV7k7bL2uAnwqGZvfm8IgxOLnVzmi%2B%2BFqhmpHdH3qoxdz0mpS4Zw3Sw2DRfwoS1bCSLaw58siyQ%2FBvTQS7O9zPxJxWOrKkjCMkkYohKxh7lWAPYjtXlZM%2BiDLQ3BKoHQ25zyljtLRkTUJ3ybwMF6oAVWaHPCfjuQB%2BY3iX5mJBxHojlqY9ry3FVyIaoggIqhOn05Nv7HTQi6mTNOyM4n093EmluZS4JnHEbRcjt6idYrSzVD11KNCSnYqh59IJrrILpPU2HcJ%2BOaSgqXOBT9O7xy%2FqB5F%2BOz05uRUe9V4c91G3pCU4cDnDIDnqPjpl21DIbMy3y8pT8TDATrRTrl1gILHPo9OGS1wmbiwV2acX8SpMgQaHnz0KL90Li5bW4xTNnLm3hgMBojqQjtT6RFTZZjHlD1cCf58Fmp5i6UsQzHKWoxYw%2FQhA6rTfMheToUlzSyQGpi%2FZkD4CTtg%2FfWVrf%2BD4IVdRNYWB07kVg5TsrDedH8D1RujPmUr%2B1%2BCMRReCS7kfrOl%2FZqDhsOUXECKSgl3suinSwou%2Flc78YBDj1tNV0gfL7DDq46G9BjqkAd6ZvvCOoGlDJpF9Wli9B1l4xyDqnSALIC9gsHL5l1EkzqXYlE3MeMrDDxiGn8ZRXqQ1l4rBRQ%2BUOL7ek8uTuBIyKDBcH2Ou5Z9PZ%2B1HK%2B7aIXIkp43sbHIQ6yVmWav6YKDR79X%2FwFQDwrqISTfMfnNI9QbKxnjAVPHCyBYG8%2F%2Faft%2B2Ip9PzBy8W%2FnXNem55Z%2Bm8ljebaVyoDPVscdhUdpCHvIs&X-Amz-Signature=fda8bb79d50bba90b71321342bbba0e0fe559eb8df1c3c723186261b5889afb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
