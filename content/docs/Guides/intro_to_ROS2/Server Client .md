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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMO7CLW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDi%2FJGcB11YwB6alYO4Gj9JPkPO7ypC%2FMx5mwdeT4%2BOXAiEA51rp89iCCtcFxFxS8Iu54psSVKWSSNFGDWgj9X9zcF8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJcng81oxkvow2OWxircA3lqpRlY7QLtNNKWDcsiMpSrLYRr8UlSOhGj%2BPTNpercClNRQe2vgtZETmAsd%2FMU5HKAvqi2SCJ3xX1I0fVbP6BFtIzbMFM3l3nW2yb%2FV%2BJroj6GCPtLexEVfSh1%2FWb%2FFa8eiLs%2Fa7kOKTUy%2F8oUgWMBAUUa1ZA41ympQsxVl%2FgGA5gRzFpo7tIO4JRkqiX3JnzAZqWGR6ArqfLfXgNeE%2FEZ0npUKvJtX%2B2hGLqlaoTTvvR%2F4MI9GspKA7HIK6eatgXwZNQDES3hBx2CdEDgpYROyiuG29l1HWLq8httft6RSKDSjZ0UyAY1aiK%2B9mS%2FqLCPZuiDm0mBtMs1PkG78ISxNnaKTRf1D3EwS3%2FuJAP56qj06F2pLhGzACrEok2U7ryCsUmfMLZJEyD%2BSywm4u5yWTWUTRIRHOMrCbv5WM9VK1wBwMasYHFRNv01e47yZ3mL429wYq4tGT0V%2FiNSbBNM6XK3R4zfu5DdVDm9iQlKrfKzd%2FzA9v1j%2F4r5UQiI%2FOAgUjziX0RKSDo9WJutkk6MiBQsjr1VePmrB5cLdAp%2F9y9trTYk%2FKeS1ZY9K1rmd4kg5NNPc%2FHiBhQQq92zIKI6wr2o5s82dudYCxmGSOs9MdQwA88McxIKyQz1MPXImcEGOqUB%2FdsBItNj0e37dvGM2t0%2FnA6xor0CA4cjbEDtdJdDKc1xv2uUEE3SK5ZWGYDwOAL7W5DbcEZyd7AJL2fctemNNpLMF82NohbWNUJyuu9tr3wxTxmxcbNp1YczdfhTZY%2BuKfmMNsyNWzWUMrehkJBEuJWhSFeOVH8K9H%2FWTQMiza7bAfBasL3hMR98NR81LyCRoEfFnJ4CQ51U3raPEurNl1yP8zcT&X-Amz-Signature=101b92215858e4ad456b5c3793537e43ce44745ec095b4f24313ac5d0537d752&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMO7CLW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDi%2FJGcB11YwB6alYO4Gj9JPkPO7ypC%2FMx5mwdeT4%2BOXAiEA51rp89iCCtcFxFxS8Iu54psSVKWSSNFGDWgj9X9zcF8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJcng81oxkvow2OWxircA3lqpRlY7QLtNNKWDcsiMpSrLYRr8UlSOhGj%2BPTNpercClNRQe2vgtZETmAsd%2FMU5HKAvqi2SCJ3xX1I0fVbP6BFtIzbMFM3l3nW2yb%2FV%2BJroj6GCPtLexEVfSh1%2FWb%2FFa8eiLs%2Fa7kOKTUy%2F8oUgWMBAUUa1ZA41ympQsxVl%2FgGA5gRzFpo7tIO4JRkqiX3JnzAZqWGR6ArqfLfXgNeE%2FEZ0npUKvJtX%2B2hGLqlaoTTvvR%2F4MI9GspKA7HIK6eatgXwZNQDES3hBx2CdEDgpYROyiuG29l1HWLq8httft6RSKDSjZ0UyAY1aiK%2B9mS%2FqLCPZuiDm0mBtMs1PkG78ISxNnaKTRf1D3EwS3%2FuJAP56qj06F2pLhGzACrEok2U7ryCsUmfMLZJEyD%2BSywm4u5yWTWUTRIRHOMrCbv5WM9VK1wBwMasYHFRNv01e47yZ3mL429wYq4tGT0V%2FiNSbBNM6XK3R4zfu5DdVDm9iQlKrfKzd%2FzA9v1j%2F4r5UQiI%2FOAgUjziX0RKSDo9WJutkk6MiBQsjr1VePmrB5cLdAp%2F9y9trTYk%2FKeS1ZY9K1rmd4kg5NNPc%2FHiBhQQq92zIKI6wr2o5s82dudYCxmGSOs9MdQwA88McxIKyQz1MPXImcEGOqUB%2FdsBItNj0e37dvGM2t0%2FnA6xor0CA4cjbEDtdJdDKc1xv2uUEE3SK5ZWGYDwOAL7W5DbcEZyd7AJL2fctemNNpLMF82NohbWNUJyuu9tr3wxTxmxcbNp1YczdfhTZY%2BuKfmMNsyNWzWUMrehkJBEuJWhSFeOVH8K9H%2FWTQMiza7bAfBasL3hMR98NR81LyCRoEfFnJ4CQ51U3raPEurNl1yP8zcT&X-Amz-Signature=45b88af975ac8504ade9018d7655a591f3ac1091c0a3147df5ea49f85bc4e7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMO7CLW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDi%2FJGcB11YwB6alYO4Gj9JPkPO7ypC%2FMx5mwdeT4%2BOXAiEA51rp89iCCtcFxFxS8Iu54psSVKWSSNFGDWgj9X9zcF8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJcng81oxkvow2OWxircA3lqpRlY7QLtNNKWDcsiMpSrLYRr8UlSOhGj%2BPTNpercClNRQe2vgtZETmAsd%2FMU5HKAvqi2SCJ3xX1I0fVbP6BFtIzbMFM3l3nW2yb%2FV%2BJroj6GCPtLexEVfSh1%2FWb%2FFa8eiLs%2Fa7kOKTUy%2F8oUgWMBAUUa1ZA41ympQsxVl%2FgGA5gRzFpo7tIO4JRkqiX3JnzAZqWGR6ArqfLfXgNeE%2FEZ0npUKvJtX%2B2hGLqlaoTTvvR%2F4MI9GspKA7HIK6eatgXwZNQDES3hBx2CdEDgpYROyiuG29l1HWLq8httft6RSKDSjZ0UyAY1aiK%2B9mS%2FqLCPZuiDm0mBtMs1PkG78ISxNnaKTRf1D3EwS3%2FuJAP56qj06F2pLhGzACrEok2U7ryCsUmfMLZJEyD%2BSywm4u5yWTWUTRIRHOMrCbv5WM9VK1wBwMasYHFRNv01e47yZ3mL429wYq4tGT0V%2FiNSbBNM6XK3R4zfu5DdVDm9iQlKrfKzd%2FzA9v1j%2F4r5UQiI%2FOAgUjziX0RKSDo9WJutkk6MiBQsjr1VePmrB5cLdAp%2F9y9trTYk%2FKeS1ZY9K1rmd4kg5NNPc%2FHiBhQQq92zIKI6wr2o5s82dudYCxmGSOs9MdQwA88McxIKyQz1MPXImcEGOqUB%2FdsBItNj0e37dvGM2t0%2FnA6xor0CA4cjbEDtdJdDKc1xv2uUEE3SK5ZWGYDwOAL7W5DbcEZyd7AJL2fctemNNpLMF82NohbWNUJyuu9tr3wxTxmxcbNp1YczdfhTZY%2BuKfmMNsyNWzWUMrehkJBEuJWhSFeOVH8K9H%2FWTQMiza7bAfBasL3hMR98NR81LyCRoEfFnJ4CQ51U3raPEurNl1yP8zcT&X-Amz-Signature=da6b8a54f7749b3200c5748353810ea69173337018dee990ec7fa1df82d830e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMO7CLW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDi%2FJGcB11YwB6alYO4Gj9JPkPO7ypC%2FMx5mwdeT4%2BOXAiEA51rp89iCCtcFxFxS8Iu54psSVKWSSNFGDWgj9X9zcF8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJcng81oxkvow2OWxircA3lqpRlY7QLtNNKWDcsiMpSrLYRr8UlSOhGj%2BPTNpercClNRQe2vgtZETmAsd%2FMU5HKAvqi2SCJ3xX1I0fVbP6BFtIzbMFM3l3nW2yb%2FV%2BJroj6GCPtLexEVfSh1%2FWb%2FFa8eiLs%2Fa7kOKTUy%2F8oUgWMBAUUa1ZA41ympQsxVl%2FgGA5gRzFpo7tIO4JRkqiX3JnzAZqWGR6ArqfLfXgNeE%2FEZ0npUKvJtX%2B2hGLqlaoTTvvR%2F4MI9GspKA7HIK6eatgXwZNQDES3hBx2CdEDgpYROyiuG29l1HWLq8httft6RSKDSjZ0UyAY1aiK%2B9mS%2FqLCPZuiDm0mBtMs1PkG78ISxNnaKTRf1D3EwS3%2FuJAP56qj06F2pLhGzACrEok2U7ryCsUmfMLZJEyD%2BSywm4u5yWTWUTRIRHOMrCbv5WM9VK1wBwMasYHFRNv01e47yZ3mL429wYq4tGT0V%2FiNSbBNM6XK3R4zfu5DdVDm9iQlKrfKzd%2FzA9v1j%2F4r5UQiI%2FOAgUjziX0RKSDo9WJutkk6MiBQsjr1VePmrB5cLdAp%2F9y9trTYk%2FKeS1ZY9K1rmd4kg5NNPc%2FHiBhQQq92zIKI6wr2o5s82dudYCxmGSOs9MdQwA88McxIKyQz1MPXImcEGOqUB%2FdsBItNj0e37dvGM2t0%2FnA6xor0CA4cjbEDtdJdDKc1xv2uUEE3SK5ZWGYDwOAL7W5DbcEZyd7AJL2fctemNNpLMF82NohbWNUJyuu9tr3wxTxmxcbNp1YczdfhTZY%2BuKfmMNsyNWzWUMrehkJBEuJWhSFeOVH8K9H%2FWTQMiza7bAfBasL3hMR98NR81LyCRoEfFnJ4CQ51U3raPEurNl1yP8zcT&X-Amz-Signature=055cd15304018b8e8ed0a0b71b85a1013272b35d28c5aeb7e19f63d535b40940&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMO7CLW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDi%2FJGcB11YwB6alYO4Gj9JPkPO7ypC%2FMx5mwdeT4%2BOXAiEA51rp89iCCtcFxFxS8Iu54psSVKWSSNFGDWgj9X9zcF8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJcng81oxkvow2OWxircA3lqpRlY7QLtNNKWDcsiMpSrLYRr8UlSOhGj%2BPTNpercClNRQe2vgtZETmAsd%2FMU5HKAvqi2SCJ3xX1I0fVbP6BFtIzbMFM3l3nW2yb%2FV%2BJroj6GCPtLexEVfSh1%2FWb%2FFa8eiLs%2Fa7kOKTUy%2F8oUgWMBAUUa1ZA41ympQsxVl%2FgGA5gRzFpo7tIO4JRkqiX3JnzAZqWGR6ArqfLfXgNeE%2FEZ0npUKvJtX%2B2hGLqlaoTTvvR%2F4MI9GspKA7HIK6eatgXwZNQDES3hBx2CdEDgpYROyiuG29l1HWLq8httft6RSKDSjZ0UyAY1aiK%2B9mS%2FqLCPZuiDm0mBtMs1PkG78ISxNnaKTRf1D3EwS3%2FuJAP56qj06F2pLhGzACrEok2U7ryCsUmfMLZJEyD%2BSywm4u5yWTWUTRIRHOMrCbv5WM9VK1wBwMasYHFRNv01e47yZ3mL429wYq4tGT0V%2FiNSbBNM6XK3R4zfu5DdVDm9iQlKrfKzd%2FzA9v1j%2F4r5UQiI%2FOAgUjziX0RKSDo9WJutkk6MiBQsjr1VePmrB5cLdAp%2F9y9trTYk%2FKeS1ZY9K1rmd4kg5NNPc%2FHiBhQQq92zIKI6wr2o5s82dudYCxmGSOs9MdQwA88McxIKyQz1MPXImcEGOqUB%2FdsBItNj0e37dvGM2t0%2FnA6xor0CA4cjbEDtdJdDKc1xv2uUEE3SK5ZWGYDwOAL7W5DbcEZyd7AJL2fctemNNpLMF82NohbWNUJyuu9tr3wxTxmxcbNp1YczdfhTZY%2BuKfmMNsyNWzWUMrehkJBEuJWhSFeOVH8K9H%2FWTQMiza7bAfBasL3hMR98NR81LyCRoEfFnJ4CQ51U3raPEurNl1yP8zcT&X-Amz-Signature=469969bd7529d3dd3e747931cbc04c7089abf1bbdc3d2acc2716f5cfc8874a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
