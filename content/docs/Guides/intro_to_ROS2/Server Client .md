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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHX5VE5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqYg7q%2BaNSLGVMcPmTGvFdoo%2FE1piYjW5jrRN%2BWMlYqAIgfeE%2BFY7J52SX5R075y3rZU6tJFSpzzi9rUOY3NqerBQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWLNiSnIINBPnbnDCrcA6PAdkh1ZFqVKMV9GFrB0ZOp8OD8fFez%2FLgp0tiVv3lInlBEu7TUo%2FQKq6gGKi5fb8RHIr1rowQPL9w8n3sVFVnI2ltSi0zZWZC9Row9og6%2FyDCgpBctrX6oQFT%2F9m59qMgN3%2FoGTiIVSGxAwfVETGdmFyWGNvaqMrW86c0OTWLjqm1RZJxYb4Xvi1Xzc3Oj9%2FasKavtqlSvxqTEzRoBzDb4vIYeuloVQCXYBmCyxJ8t%2F1rBqSYqyk%2BSFyNmQ5hOsL3pBRGvpx9OhCvMRrnxxU6fkjNn5tQiixtP%2F1Jgpc16%2BzTIyUYN4fzlaAOfQF4S47LHB9CBKW1IdE8sTrSdCiQIovPBr5TB8OZnZrlY%2BCt6GaUhJ6L6LjPCABfMNQGAPkF%2B0kFbuY5LtO01QgVREuMQWIXZKOmCq8%2BlitPwHTwVn4IzWFa75OLGiZyXYkuMgALAZUFI5rr2%2FNKs9%2FwAaQN0qO2GTYseSIERrchMiWJoxT0S3TTtGXyS5%2BcCSagrs6TNjdzMGF%2Fkw9o03hsXsAoOnm6c0Mz9lQK41lEOHoPHhykN9K4INqOcMlY9BM6VkTCrcaUYOYpUwmYMlH0muBoDSwIyar2j85MegOGQuyZbK06EN3RrCelFtnuDMJyAhMMGOqUB2lckZxBmEYSM2iqHPaT97bPRVEuz%2F%2Fm4sXw0IkSy%2FjhQLJXGTMG4Rv7M%2FMilyHHbimf8jIBvvuId4RoF5%2BmcS8nvBURV1INuIZMtY74ZEUSGt0CX%2FANnFQGA7yOfMRtZUDZnt07Ox4a5QPp6hZDwQ7ECG0AIT7HYUx1%2Bi0oZwhGnvZpgXbWL%2BIEBbGpSdgyIbP3%2FBG%2B2OIhqLc91aodcNr00dkCh&X-Amz-Signature=75a85c8f84e88fde2119761860cd7fad89590b6be656f8958a0323addfa4c075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHX5VE5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqYg7q%2BaNSLGVMcPmTGvFdoo%2FE1piYjW5jrRN%2BWMlYqAIgfeE%2BFY7J52SX5R075y3rZU6tJFSpzzi9rUOY3NqerBQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWLNiSnIINBPnbnDCrcA6PAdkh1ZFqVKMV9GFrB0ZOp8OD8fFez%2FLgp0tiVv3lInlBEu7TUo%2FQKq6gGKi5fb8RHIr1rowQPL9w8n3sVFVnI2ltSi0zZWZC9Row9og6%2FyDCgpBctrX6oQFT%2F9m59qMgN3%2FoGTiIVSGxAwfVETGdmFyWGNvaqMrW86c0OTWLjqm1RZJxYb4Xvi1Xzc3Oj9%2FasKavtqlSvxqTEzRoBzDb4vIYeuloVQCXYBmCyxJ8t%2F1rBqSYqyk%2BSFyNmQ5hOsL3pBRGvpx9OhCvMRrnxxU6fkjNn5tQiixtP%2F1Jgpc16%2BzTIyUYN4fzlaAOfQF4S47LHB9CBKW1IdE8sTrSdCiQIovPBr5TB8OZnZrlY%2BCt6GaUhJ6L6LjPCABfMNQGAPkF%2B0kFbuY5LtO01QgVREuMQWIXZKOmCq8%2BlitPwHTwVn4IzWFa75OLGiZyXYkuMgALAZUFI5rr2%2FNKs9%2FwAaQN0qO2GTYseSIERrchMiWJoxT0S3TTtGXyS5%2BcCSagrs6TNjdzMGF%2Fkw9o03hsXsAoOnm6c0Mz9lQK41lEOHoPHhykN9K4INqOcMlY9BM6VkTCrcaUYOYpUwmYMlH0muBoDSwIyar2j85MegOGQuyZbK06EN3RrCelFtnuDMJyAhMMGOqUB2lckZxBmEYSM2iqHPaT97bPRVEuz%2F%2Fm4sXw0IkSy%2FjhQLJXGTMG4Rv7M%2FMilyHHbimf8jIBvvuId4RoF5%2BmcS8nvBURV1INuIZMtY74ZEUSGt0CX%2FANnFQGA7yOfMRtZUDZnt07Ox4a5QPp6hZDwQ7ECG0AIT7HYUx1%2Bi0oZwhGnvZpgXbWL%2BIEBbGpSdgyIbP3%2FBG%2B2OIhqLc91aodcNr00dkCh&X-Amz-Signature=ff2a7f298e8991208dea829094f8f244cc69d676bf6bb2cf0f2a57821e558394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHX5VE5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqYg7q%2BaNSLGVMcPmTGvFdoo%2FE1piYjW5jrRN%2BWMlYqAIgfeE%2BFY7J52SX5R075y3rZU6tJFSpzzi9rUOY3NqerBQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWLNiSnIINBPnbnDCrcA6PAdkh1ZFqVKMV9GFrB0ZOp8OD8fFez%2FLgp0tiVv3lInlBEu7TUo%2FQKq6gGKi5fb8RHIr1rowQPL9w8n3sVFVnI2ltSi0zZWZC9Row9og6%2FyDCgpBctrX6oQFT%2F9m59qMgN3%2FoGTiIVSGxAwfVETGdmFyWGNvaqMrW86c0OTWLjqm1RZJxYb4Xvi1Xzc3Oj9%2FasKavtqlSvxqTEzRoBzDb4vIYeuloVQCXYBmCyxJ8t%2F1rBqSYqyk%2BSFyNmQ5hOsL3pBRGvpx9OhCvMRrnxxU6fkjNn5tQiixtP%2F1Jgpc16%2BzTIyUYN4fzlaAOfQF4S47LHB9CBKW1IdE8sTrSdCiQIovPBr5TB8OZnZrlY%2BCt6GaUhJ6L6LjPCABfMNQGAPkF%2B0kFbuY5LtO01QgVREuMQWIXZKOmCq8%2BlitPwHTwVn4IzWFa75OLGiZyXYkuMgALAZUFI5rr2%2FNKs9%2FwAaQN0qO2GTYseSIERrchMiWJoxT0S3TTtGXyS5%2BcCSagrs6TNjdzMGF%2Fkw9o03hsXsAoOnm6c0Mz9lQK41lEOHoPHhykN9K4INqOcMlY9BM6VkTCrcaUYOYpUwmYMlH0muBoDSwIyar2j85MegOGQuyZbK06EN3RrCelFtnuDMJyAhMMGOqUB2lckZxBmEYSM2iqHPaT97bPRVEuz%2F%2Fm4sXw0IkSy%2FjhQLJXGTMG4Rv7M%2FMilyHHbimf8jIBvvuId4RoF5%2BmcS8nvBURV1INuIZMtY74ZEUSGt0CX%2FANnFQGA7yOfMRtZUDZnt07Ox4a5QPp6hZDwQ7ECG0AIT7HYUx1%2Bi0oZwhGnvZpgXbWL%2BIEBbGpSdgyIbP3%2FBG%2B2OIhqLc91aodcNr00dkCh&X-Amz-Signature=daf7f120b8e8355732bff0526357d6e77e0a43be556840bcbbe22c69f20f7f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHX5VE5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqYg7q%2BaNSLGVMcPmTGvFdoo%2FE1piYjW5jrRN%2BWMlYqAIgfeE%2BFY7J52SX5R075y3rZU6tJFSpzzi9rUOY3NqerBQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWLNiSnIINBPnbnDCrcA6PAdkh1ZFqVKMV9GFrB0ZOp8OD8fFez%2FLgp0tiVv3lInlBEu7TUo%2FQKq6gGKi5fb8RHIr1rowQPL9w8n3sVFVnI2ltSi0zZWZC9Row9og6%2FyDCgpBctrX6oQFT%2F9m59qMgN3%2FoGTiIVSGxAwfVETGdmFyWGNvaqMrW86c0OTWLjqm1RZJxYb4Xvi1Xzc3Oj9%2FasKavtqlSvxqTEzRoBzDb4vIYeuloVQCXYBmCyxJ8t%2F1rBqSYqyk%2BSFyNmQ5hOsL3pBRGvpx9OhCvMRrnxxU6fkjNn5tQiixtP%2F1Jgpc16%2BzTIyUYN4fzlaAOfQF4S47LHB9CBKW1IdE8sTrSdCiQIovPBr5TB8OZnZrlY%2BCt6GaUhJ6L6LjPCABfMNQGAPkF%2B0kFbuY5LtO01QgVREuMQWIXZKOmCq8%2BlitPwHTwVn4IzWFa75OLGiZyXYkuMgALAZUFI5rr2%2FNKs9%2FwAaQN0qO2GTYseSIERrchMiWJoxT0S3TTtGXyS5%2BcCSagrs6TNjdzMGF%2Fkw9o03hsXsAoOnm6c0Mz9lQK41lEOHoPHhykN9K4INqOcMlY9BM6VkTCrcaUYOYpUwmYMlH0muBoDSwIyar2j85MegOGQuyZbK06EN3RrCelFtnuDMJyAhMMGOqUB2lckZxBmEYSM2iqHPaT97bPRVEuz%2F%2Fm4sXw0IkSy%2FjhQLJXGTMG4Rv7M%2FMilyHHbimf8jIBvvuId4RoF5%2BmcS8nvBURV1INuIZMtY74ZEUSGt0CX%2FANnFQGA7yOfMRtZUDZnt07Ox4a5QPp6hZDwQ7ECG0AIT7HYUx1%2Bi0oZwhGnvZpgXbWL%2BIEBbGpSdgyIbP3%2FBG%2B2OIhqLc91aodcNr00dkCh&X-Amz-Signature=d3117f30c9c6474da80d0cceed5d7853dcdc0f966bd6cec1e421cedbe742b869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHX5VE5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqYg7q%2BaNSLGVMcPmTGvFdoo%2FE1piYjW5jrRN%2BWMlYqAIgfeE%2BFY7J52SX5R075y3rZU6tJFSpzzi9rUOY3NqerBQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWLNiSnIINBPnbnDCrcA6PAdkh1ZFqVKMV9GFrB0ZOp8OD8fFez%2FLgp0tiVv3lInlBEu7TUo%2FQKq6gGKi5fb8RHIr1rowQPL9w8n3sVFVnI2ltSi0zZWZC9Row9og6%2FyDCgpBctrX6oQFT%2F9m59qMgN3%2FoGTiIVSGxAwfVETGdmFyWGNvaqMrW86c0OTWLjqm1RZJxYb4Xvi1Xzc3Oj9%2FasKavtqlSvxqTEzRoBzDb4vIYeuloVQCXYBmCyxJ8t%2F1rBqSYqyk%2BSFyNmQ5hOsL3pBRGvpx9OhCvMRrnxxU6fkjNn5tQiixtP%2F1Jgpc16%2BzTIyUYN4fzlaAOfQF4S47LHB9CBKW1IdE8sTrSdCiQIovPBr5TB8OZnZrlY%2BCt6GaUhJ6L6LjPCABfMNQGAPkF%2B0kFbuY5LtO01QgVREuMQWIXZKOmCq8%2BlitPwHTwVn4IzWFa75OLGiZyXYkuMgALAZUFI5rr2%2FNKs9%2FwAaQN0qO2GTYseSIERrchMiWJoxT0S3TTtGXyS5%2BcCSagrs6TNjdzMGF%2Fkw9o03hsXsAoOnm6c0Mz9lQK41lEOHoPHhykN9K4INqOcMlY9BM6VkTCrcaUYOYpUwmYMlH0muBoDSwIyar2j85MegOGQuyZbK06EN3RrCelFtnuDMJyAhMMGOqUB2lckZxBmEYSM2iqHPaT97bPRVEuz%2F%2Fm4sXw0IkSy%2FjhQLJXGTMG4Rv7M%2FMilyHHbimf8jIBvvuId4RoF5%2BmcS8nvBURV1INuIZMtY74ZEUSGt0CX%2FANnFQGA7yOfMRtZUDZnt07Ox4a5QPp6hZDwQ7ECG0AIT7HYUx1%2Bi0oZwhGnvZpgXbWL%2BIEBbGpSdgyIbP3%2FBG%2B2OIhqLc91aodcNr00dkCh&X-Amz-Signature=e48d7df7aaef23d3e823713a28ba4348e53e853da9c95a9e8052c68ba447ddb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
