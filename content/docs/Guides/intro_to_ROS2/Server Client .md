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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX5IFU3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8iwPR%2FGJsDKya9BLwgDoSSAXk2fgnkS5TSil6YTRkRwIhAMxrew6dk18cqtqrr2dC1LKHGzfX7YznfPcItF7entKqKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0mtyY1e4KyY%2BXUnQq3ANoQww%2FVToFkC15WgaNocO86Ncukz6VIXj8klaXR%2BCDMKZoZsu%2Fr3Gx4HUrnI7D3K5YOF3BYul1zxFb9dmbQwcxa9spYHftLxV6S5sy9gNrPa9QB2q2EX%2BjLUKkCx6qs5kcwDywbjdTVSTVP%2BFaqemwNli8ycmzOJQDGQ%2B%2BJS8skH8Dc7HuvXbxM2D1qH0UyCeFeog6sedSRWNF2CoYPwaE8GGZx0Ac0CQZAWin1qFyGBI5jJK7AVETgLxZancrCL%2BwkxHi1DOqgZrefT3v5qh6nsXzHbY8pvfscJybAGZ7FR3KO%2Fy8wcKXOJInnzOT2y6rQYGOOK%2BgfD97MaxjI22OeeJq%2FH%2B%2Bk5GIeaoM0CTiFH7sTwq8xdu%2BqhoAWigDoB6ToXLKm9m6QEiJA8HgRVnXcrd0gcVNGKFuVi7GoQz%2BRHaUN3Ud8a3TOFSbbMg2IxjawUh0DCD2eQalXcwWBL5W1DoHmClj87Y9wIi1mn0emXqjgub%2BcM0wy1d2cbYu3h2ggBPVsM0vkqsE0S9okXWDjl%2BXpLgQYpdmkW2DBYmknr6ydFbAFAG%2BfGNW0uIL9hlzw7miYImqYdEV5yAkeZ%2FF3WRIm7g0W9Yn%2BEcuObBsZgjeAQnUDtgx5mALnjCA%2F4vLBjqkAXLLJuC6ToU7JqXEnRLfuZE9zKdFjOwMv%2F1FzsSc3xJlh13jF6hLwhCbtTQLVfKzicDjiDf3CORbwaDhgEyQxXXpm5rHZb%2BV%2FCmf4cLslfCVUvie0%2FYDM1YNVqJuxI3Duq0CbmeAjZnKsrpnMCRN3TSj9Matwf2DwacJBkuOM1%2FEg9sIJ0q0c90VPpW1k0tIxeg1PTbSA3PG2LBcC5pWu9l8ogTq&X-Amz-Signature=86fef785c33f3527dbfbee47d722dbaf8b76f3fcac912fd145995a19bc103049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX5IFU3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8iwPR%2FGJsDKya9BLwgDoSSAXk2fgnkS5TSil6YTRkRwIhAMxrew6dk18cqtqrr2dC1LKHGzfX7YznfPcItF7entKqKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0mtyY1e4KyY%2BXUnQq3ANoQww%2FVToFkC15WgaNocO86Ncukz6VIXj8klaXR%2BCDMKZoZsu%2Fr3Gx4HUrnI7D3K5YOF3BYul1zxFb9dmbQwcxa9spYHftLxV6S5sy9gNrPa9QB2q2EX%2BjLUKkCx6qs5kcwDywbjdTVSTVP%2BFaqemwNli8ycmzOJQDGQ%2B%2BJS8skH8Dc7HuvXbxM2D1qH0UyCeFeog6sedSRWNF2CoYPwaE8GGZx0Ac0CQZAWin1qFyGBI5jJK7AVETgLxZancrCL%2BwkxHi1DOqgZrefT3v5qh6nsXzHbY8pvfscJybAGZ7FR3KO%2Fy8wcKXOJInnzOT2y6rQYGOOK%2BgfD97MaxjI22OeeJq%2FH%2B%2Bk5GIeaoM0CTiFH7sTwq8xdu%2BqhoAWigDoB6ToXLKm9m6QEiJA8HgRVnXcrd0gcVNGKFuVi7GoQz%2BRHaUN3Ud8a3TOFSbbMg2IxjawUh0DCD2eQalXcwWBL5W1DoHmClj87Y9wIi1mn0emXqjgub%2BcM0wy1d2cbYu3h2ggBPVsM0vkqsE0S9okXWDjl%2BXpLgQYpdmkW2DBYmknr6ydFbAFAG%2BfGNW0uIL9hlzw7miYImqYdEV5yAkeZ%2FF3WRIm7g0W9Yn%2BEcuObBsZgjeAQnUDtgx5mALnjCA%2F4vLBjqkAXLLJuC6ToU7JqXEnRLfuZE9zKdFjOwMv%2F1FzsSc3xJlh13jF6hLwhCbtTQLVfKzicDjiDf3CORbwaDhgEyQxXXpm5rHZb%2BV%2FCmf4cLslfCVUvie0%2FYDM1YNVqJuxI3Duq0CbmeAjZnKsrpnMCRN3TSj9Matwf2DwacJBkuOM1%2FEg9sIJ0q0c90VPpW1k0tIxeg1PTbSA3PG2LBcC5pWu9l8ogTq&X-Amz-Signature=8916f2542e7ec9deb67ee3b16eb4f4aa5c8bf8bb9aca1d5d3c962d260585a02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX5IFU3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8iwPR%2FGJsDKya9BLwgDoSSAXk2fgnkS5TSil6YTRkRwIhAMxrew6dk18cqtqrr2dC1LKHGzfX7YznfPcItF7entKqKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0mtyY1e4KyY%2BXUnQq3ANoQww%2FVToFkC15WgaNocO86Ncukz6VIXj8klaXR%2BCDMKZoZsu%2Fr3Gx4HUrnI7D3K5YOF3BYul1zxFb9dmbQwcxa9spYHftLxV6S5sy9gNrPa9QB2q2EX%2BjLUKkCx6qs5kcwDywbjdTVSTVP%2BFaqemwNli8ycmzOJQDGQ%2B%2BJS8skH8Dc7HuvXbxM2D1qH0UyCeFeog6sedSRWNF2CoYPwaE8GGZx0Ac0CQZAWin1qFyGBI5jJK7AVETgLxZancrCL%2BwkxHi1DOqgZrefT3v5qh6nsXzHbY8pvfscJybAGZ7FR3KO%2Fy8wcKXOJInnzOT2y6rQYGOOK%2BgfD97MaxjI22OeeJq%2FH%2B%2Bk5GIeaoM0CTiFH7sTwq8xdu%2BqhoAWigDoB6ToXLKm9m6QEiJA8HgRVnXcrd0gcVNGKFuVi7GoQz%2BRHaUN3Ud8a3TOFSbbMg2IxjawUh0DCD2eQalXcwWBL5W1DoHmClj87Y9wIi1mn0emXqjgub%2BcM0wy1d2cbYu3h2ggBPVsM0vkqsE0S9okXWDjl%2BXpLgQYpdmkW2DBYmknr6ydFbAFAG%2BfGNW0uIL9hlzw7miYImqYdEV5yAkeZ%2FF3WRIm7g0W9Yn%2BEcuObBsZgjeAQnUDtgx5mALnjCA%2F4vLBjqkAXLLJuC6ToU7JqXEnRLfuZE9zKdFjOwMv%2F1FzsSc3xJlh13jF6hLwhCbtTQLVfKzicDjiDf3CORbwaDhgEyQxXXpm5rHZb%2BV%2FCmf4cLslfCVUvie0%2FYDM1YNVqJuxI3Duq0CbmeAjZnKsrpnMCRN3TSj9Matwf2DwacJBkuOM1%2FEg9sIJ0q0c90VPpW1k0tIxeg1PTbSA3PG2LBcC5pWu9l8ogTq&X-Amz-Signature=795bb3481fe316adfee0dcadd9ffa710b34075ac9142e1db56ae359ae6418859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX5IFU3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8iwPR%2FGJsDKya9BLwgDoSSAXk2fgnkS5TSil6YTRkRwIhAMxrew6dk18cqtqrr2dC1LKHGzfX7YznfPcItF7entKqKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0mtyY1e4KyY%2BXUnQq3ANoQww%2FVToFkC15WgaNocO86Ncukz6VIXj8klaXR%2BCDMKZoZsu%2Fr3Gx4HUrnI7D3K5YOF3BYul1zxFb9dmbQwcxa9spYHftLxV6S5sy9gNrPa9QB2q2EX%2BjLUKkCx6qs5kcwDywbjdTVSTVP%2BFaqemwNli8ycmzOJQDGQ%2B%2BJS8skH8Dc7HuvXbxM2D1qH0UyCeFeog6sedSRWNF2CoYPwaE8GGZx0Ac0CQZAWin1qFyGBI5jJK7AVETgLxZancrCL%2BwkxHi1DOqgZrefT3v5qh6nsXzHbY8pvfscJybAGZ7FR3KO%2Fy8wcKXOJInnzOT2y6rQYGOOK%2BgfD97MaxjI22OeeJq%2FH%2B%2Bk5GIeaoM0CTiFH7sTwq8xdu%2BqhoAWigDoB6ToXLKm9m6QEiJA8HgRVnXcrd0gcVNGKFuVi7GoQz%2BRHaUN3Ud8a3TOFSbbMg2IxjawUh0DCD2eQalXcwWBL5W1DoHmClj87Y9wIi1mn0emXqjgub%2BcM0wy1d2cbYu3h2ggBPVsM0vkqsE0S9okXWDjl%2BXpLgQYpdmkW2DBYmknr6ydFbAFAG%2BfGNW0uIL9hlzw7miYImqYdEV5yAkeZ%2FF3WRIm7g0W9Yn%2BEcuObBsZgjeAQnUDtgx5mALnjCA%2F4vLBjqkAXLLJuC6ToU7JqXEnRLfuZE9zKdFjOwMv%2F1FzsSc3xJlh13jF6hLwhCbtTQLVfKzicDjiDf3CORbwaDhgEyQxXXpm5rHZb%2BV%2FCmf4cLslfCVUvie0%2FYDM1YNVqJuxI3Duq0CbmeAjZnKsrpnMCRN3TSj9Matwf2DwacJBkuOM1%2FEg9sIJ0q0c90VPpW1k0tIxeg1PTbSA3PG2LBcC5pWu9l8ogTq&X-Amz-Signature=dee9834aaca1b7595e3e539bf1e0a51f8ff7fba2df2a53421ca22b2f3fbabb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX5IFU3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8iwPR%2FGJsDKya9BLwgDoSSAXk2fgnkS5TSil6YTRkRwIhAMxrew6dk18cqtqrr2dC1LKHGzfX7YznfPcItF7entKqKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0mtyY1e4KyY%2BXUnQq3ANoQww%2FVToFkC15WgaNocO86Ncukz6VIXj8klaXR%2BCDMKZoZsu%2Fr3Gx4HUrnI7D3K5YOF3BYul1zxFb9dmbQwcxa9spYHftLxV6S5sy9gNrPa9QB2q2EX%2BjLUKkCx6qs5kcwDywbjdTVSTVP%2BFaqemwNli8ycmzOJQDGQ%2B%2BJS8skH8Dc7HuvXbxM2D1qH0UyCeFeog6sedSRWNF2CoYPwaE8GGZx0Ac0CQZAWin1qFyGBI5jJK7AVETgLxZancrCL%2BwkxHi1DOqgZrefT3v5qh6nsXzHbY8pvfscJybAGZ7FR3KO%2Fy8wcKXOJInnzOT2y6rQYGOOK%2BgfD97MaxjI22OeeJq%2FH%2B%2Bk5GIeaoM0CTiFH7sTwq8xdu%2BqhoAWigDoB6ToXLKm9m6QEiJA8HgRVnXcrd0gcVNGKFuVi7GoQz%2BRHaUN3Ud8a3TOFSbbMg2IxjawUh0DCD2eQalXcwWBL5W1DoHmClj87Y9wIi1mn0emXqjgub%2BcM0wy1d2cbYu3h2ggBPVsM0vkqsE0S9okXWDjl%2BXpLgQYpdmkW2DBYmknr6ydFbAFAG%2BfGNW0uIL9hlzw7miYImqYdEV5yAkeZ%2FF3WRIm7g0W9Yn%2BEcuObBsZgjeAQnUDtgx5mALnjCA%2F4vLBjqkAXLLJuC6ToU7JqXEnRLfuZE9zKdFjOwMv%2F1FzsSc3xJlh13jF6hLwhCbtTQLVfKzicDjiDf3CORbwaDhgEyQxXXpm5rHZb%2BV%2FCmf4cLslfCVUvie0%2FYDM1YNVqJuxI3Duq0CbmeAjZnKsrpnMCRN3TSj9Matwf2DwacJBkuOM1%2FEg9sIJ0q0c90VPpW1k0tIxeg1PTbSA3PG2LBcC5pWu9l8ogTq&X-Amz-Signature=5f8c09c62d0e7026eb35392193c048b8f65c546b794ac2fe132e27bebe8ab46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
