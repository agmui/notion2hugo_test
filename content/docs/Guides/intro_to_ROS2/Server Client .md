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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU5T7WK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD5ynbPOSvWIugfAMS1ZnYwtPElIK04%2Fb62%2FNidLyhpdgIhAME0flu1GQrsI1x86Rz%2FDQdOa2wNvTme0y%2B%2FQi8%2FxpiZKv8DCCkQABoMNjM3NDIzMTgzODA1Igwth35vpGsQXStFx38q3APzKZqecYe2MR%2FB1C%2BrgYDQHGYvV%2BeZPAi8OIKzAnjYMJhLvpTsuowx2iyA4lEiNM%2BLS8W4tcb10JMrSmO0uoKHGmOQQLwE7Ju76LBZ4tgK0CAVkdNnCZoEssMXYiPPeOAX2f737%2FkVwEftKq1L9Eils%2FhOCFknlPXH6%2BP%2F5REosl20N6XgYenCMP6ycmOR392KgXukmDbca83HX39qHT9EF8FWKfrvxodNLpUMb%2Fl%2FTva7loyyBUO643%2FkxoiHHjtJjVyYpn4PbIoT0dlWjgsIbmDxXqF1hVQAc8dRLUHTIRMUnetgeKPcksPU6VowFp96KJFcEwOPqcGHgttsxcBTZ%2BOtTzvvyoXFYcpEgLkSQRpRjFFI0TQw48U61b99sO2LXEvBa0JWkbSIKZniHZwZf8ApP4MNZcjl%2FAkIXM2YmmJMbSw%2FAL4MfqETOz9oa1truxLSusjqV36OnktGcr%2F2xNDV2KdbBvZZwagmL9WTXt51B8ElSu8GBROjezi3DHv9omcLk0mH7yMieWVWYyTEDesUX7wP0mH6WIapyjRVfIlu1Zgk7qBQerYpENhqNVtQthKFOWKPfUFOolQxFcbExzUhFiUsj%2FaQgC6Bkw8C5IRLjjv9g1giThvHJjC1tpbBBjqkASTUhvEJoqH04QMycrXi8G6MZy78Vp3pVndR9KVk7523hP58lvHJhPKukOm9wbSiBH9KnGBP02yaBt7NWYjd920tHt96joxhyng%2Bhl88yC%2FK%2BA5KIVNuGYAe31mzOqfP%2B7Hb0uNpYZr1n3aS1ZuT2Ulkq2Hk2HdC1t8raWsyA78AO72p9O4ysEoMCIGDgCe3%2F2iIMQRjFAQCwDTAuM64WY2qPmT%2F&X-Amz-Signature=76c1e5529ddc83727f41d849721f3f33840885a81711f8b8636964d44fd92770&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU5T7WK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD5ynbPOSvWIugfAMS1ZnYwtPElIK04%2Fb62%2FNidLyhpdgIhAME0flu1GQrsI1x86Rz%2FDQdOa2wNvTme0y%2B%2FQi8%2FxpiZKv8DCCkQABoMNjM3NDIzMTgzODA1Igwth35vpGsQXStFx38q3APzKZqecYe2MR%2FB1C%2BrgYDQHGYvV%2BeZPAi8OIKzAnjYMJhLvpTsuowx2iyA4lEiNM%2BLS8W4tcb10JMrSmO0uoKHGmOQQLwE7Ju76LBZ4tgK0CAVkdNnCZoEssMXYiPPeOAX2f737%2FkVwEftKq1L9Eils%2FhOCFknlPXH6%2BP%2F5REosl20N6XgYenCMP6ycmOR392KgXukmDbca83HX39qHT9EF8FWKfrvxodNLpUMb%2Fl%2FTva7loyyBUO643%2FkxoiHHjtJjVyYpn4PbIoT0dlWjgsIbmDxXqF1hVQAc8dRLUHTIRMUnetgeKPcksPU6VowFp96KJFcEwOPqcGHgttsxcBTZ%2BOtTzvvyoXFYcpEgLkSQRpRjFFI0TQw48U61b99sO2LXEvBa0JWkbSIKZniHZwZf8ApP4MNZcjl%2FAkIXM2YmmJMbSw%2FAL4MfqETOz9oa1truxLSusjqV36OnktGcr%2F2xNDV2KdbBvZZwagmL9WTXt51B8ElSu8GBROjezi3DHv9omcLk0mH7yMieWVWYyTEDesUX7wP0mH6WIapyjRVfIlu1Zgk7qBQerYpENhqNVtQthKFOWKPfUFOolQxFcbExzUhFiUsj%2FaQgC6Bkw8C5IRLjjv9g1giThvHJjC1tpbBBjqkASTUhvEJoqH04QMycrXi8G6MZy78Vp3pVndR9KVk7523hP58lvHJhPKukOm9wbSiBH9KnGBP02yaBt7NWYjd920tHt96joxhyng%2Bhl88yC%2FK%2BA5KIVNuGYAe31mzOqfP%2B7Hb0uNpYZr1n3aS1ZuT2Ulkq2Hk2HdC1t8raWsyA78AO72p9O4ysEoMCIGDgCe3%2F2iIMQRjFAQCwDTAuM64WY2qPmT%2F&X-Amz-Signature=f4a764725e6232ad89e36cb50e3bdb593eca09754b3ccd2e556c54367cb87e46&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU5T7WK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD5ynbPOSvWIugfAMS1ZnYwtPElIK04%2Fb62%2FNidLyhpdgIhAME0flu1GQrsI1x86Rz%2FDQdOa2wNvTme0y%2B%2FQi8%2FxpiZKv8DCCkQABoMNjM3NDIzMTgzODA1Igwth35vpGsQXStFx38q3APzKZqecYe2MR%2FB1C%2BrgYDQHGYvV%2BeZPAi8OIKzAnjYMJhLvpTsuowx2iyA4lEiNM%2BLS8W4tcb10JMrSmO0uoKHGmOQQLwE7Ju76LBZ4tgK0CAVkdNnCZoEssMXYiPPeOAX2f737%2FkVwEftKq1L9Eils%2FhOCFknlPXH6%2BP%2F5REosl20N6XgYenCMP6ycmOR392KgXukmDbca83HX39qHT9EF8FWKfrvxodNLpUMb%2Fl%2FTva7loyyBUO643%2FkxoiHHjtJjVyYpn4PbIoT0dlWjgsIbmDxXqF1hVQAc8dRLUHTIRMUnetgeKPcksPU6VowFp96KJFcEwOPqcGHgttsxcBTZ%2BOtTzvvyoXFYcpEgLkSQRpRjFFI0TQw48U61b99sO2LXEvBa0JWkbSIKZniHZwZf8ApP4MNZcjl%2FAkIXM2YmmJMbSw%2FAL4MfqETOz9oa1truxLSusjqV36OnktGcr%2F2xNDV2KdbBvZZwagmL9WTXt51B8ElSu8GBROjezi3DHv9omcLk0mH7yMieWVWYyTEDesUX7wP0mH6WIapyjRVfIlu1Zgk7qBQerYpENhqNVtQthKFOWKPfUFOolQxFcbExzUhFiUsj%2FaQgC6Bkw8C5IRLjjv9g1giThvHJjC1tpbBBjqkASTUhvEJoqH04QMycrXi8G6MZy78Vp3pVndR9KVk7523hP58lvHJhPKukOm9wbSiBH9KnGBP02yaBt7NWYjd920tHt96joxhyng%2Bhl88yC%2FK%2BA5KIVNuGYAe31mzOqfP%2B7Hb0uNpYZr1n3aS1ZuT2Ulkq2Hk2HdC1t8raWsyA78AO72p9O4ysEoMCIGDgCe3%2F2iIMQRjFAQCwDTAuM64WY2qPmT%2F&X-Amz-Signature=9f9f78566ecbdb49e3b5d118efb5ba0c71dc13db3a693ee060f5cef4ee0667f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU5T7WK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD5ynbPOSvWIugfAMS1ZnYwtPElIK04%2Fb62%2FNidLyhpdgIhAME0flu1GQrsI1x86Rz%2FDQdOa2wNvTme0y%2B%2FQi8%2FxpiZKv8DCCkQABoMNjM3NDIzMTgzODA1Igwth35vpGsQXStFx38q3APzKZqecYe2MR%2FB1C%2BrgYDQHGYvV%2BeZPAi8OIKzAnjYMJhLvpTsuowx2iyA4lEiNM%2BLS8W4tcb10JMrSmO0uoKHGmOQQLwE7Ju76LBZ4tgK0CAVkdNnCZoEssMXYiPPeOAX2f737%2FkVwEftKq1L9Eils%2FhOCFknlPXH6%2BP%2F5REosl20N6XgYenCMP6ycmOR392KgXukmDbca83HX39qHT9EF8FWKfrvxodNLpUMb%2Fl%2FTva7loyyBUO643%2FkxoiHHjtJjVyYpn4PbIoT0dlWjgsIbmDxXqF1hVQAc8dRLUHTIRMUnetgeKPcksPU6VowFp96KJFcEwOPqcGHgttsxcBTZ%2BOtTzvvyoXFYcpEgLkSQRpRjFFI0TQw48U61b99sO2LXEvBa0JWkbSIKZniHZwZf8ApP4MNZcjl%2FAkIXM2YmmJMbSw%2FAL4MfqETOz9oa1truxLSusjqV36OnktGcr%2F2xNDV2KdbBvZZwagmL9WTXt51B8ElSu8GBROjezi3DHv9omcLk0mH7yMieWVWYyTEDesUX7wP0mH6WIapyjRVfIlu1Zgk7qBQerYpENhqNVtQthKFOWKPfUFOolQxFcbExzUhFiUsj%2FaQgC6Bkw8C5IRLjjv9g1giThvHJjC1tpbBBjqkASTUhvEJoqH04QMycrXi8G6MZy78Vp3pVndR9KVk7523hP58lvHJhPKukOm9wbSiBH9KnGBP02yaBt7NWYjd920tHt96joxhyng%2Bhl88yC%2FK%2BA5KIVNuGYAe31mzOqfP%2B7Hb0uNpYZr1n3aS1ZuT2Ulkq2Hk2HdC1t8raWsyA78AO72p9O4ysEoMCIGDgCe3%2F2iIMQRjFAQCwDTAuM64WY2qPmT%2F&X-Amz-Signature=9c86f1d5e2940731fb21c097301fdb51b2db37209975523d51ece7b7c9b4a571&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU5T7WK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD5ynbPOSvWIugfAMS1ZnYwtPElIK04%2Fb62%2FNidLyhpdgIhAME0flu1GQrsI1x86Rz%2FDQdOa2wNvTme0y%2B%2FQi8%2FxpiZKv8DCCkQABoMNjM3NDIzMTgzODA1Igwth35vpGsQXStFx38q3APzKZqecYe2MR%2FB1C%2BrgYDQHGYvV%2BeZPAi8OIKzAnjYMJhLvpTsuowx2iyA4lEiNM%2BLS8W4tcb10JMrSmO0uoKHGmOQQLwE7Ju76LBZ4tgK0CAVkdNnCZoEssMXYiPPeOAX2f737%2FkVwEftKq1L9Eils%2FhOCFknlPXH6%2BP%2F5REosl20N6XgYenCMP6ycmOR392KgXukmDbca83HX39qHT9EF8FWKfrvxodNLpUMb%2Fl%2FTva7loyyBUO643%2FkxoiHHjtJjVyYpn4PbIoT0dlWjgsIbmDxXqF1hVQAc8dRLUHTIRMUnetgeKPcksPU6VowFp96KJFcEwOPqcGHgttsxcBTZ%2BOtTzvvyoXFYcpEgLkSQRpRjFFI0TQw48U61b99sO2LXEvBa0JWkbSIKZniHZwZf8ApP4MNZcjl%2FAkIXM2YmmJMbSw%2FAL4MfqETOz9oa1truxLSusjqV36OnktGcr%2F2xNDV2KdbBvZZwagmL9WTXt51B8ElSu8GBROjezi3DHv9omcLk0mH7yMieWVWYyTEDesUX7wP0mH6WIapyjRVfIlu1Zgk7qBQerYpENhqNVtQthKFOWKPfUFOolQxFcbExzUhFiUsj%2FaQgC6Bkw8C5IRLjjv9g1giThvHJjC1tpbBBjqkASTUhvEJoqH04QMycrXi8G6MZy78Vp3pVndR9KVk7523hP58lvHJhPKukOm9wbSiBH9KnGBP02yaBt7NWYjd920tHt96joxhyng%2Bhl88yC%2FK%2BA5KIVNuGYAe31mzOqfP%2B7Hb0uNpYZr1n3aS1ZuT2Ulkq2Hk2HdC1t8raWsyA78AO72p9O4ysEoMCIGDgCe3%2F2iIMQRjFAQCwDTAuM64WY2qPmT%2F&X-Amz-Signature=7943b0664e685510d94a828052083fa0caff3ab9c8c8db52c659a9e9f6046803&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
