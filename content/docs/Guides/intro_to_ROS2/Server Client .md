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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LBZLWU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC0PxkH16iqiyvFybZfXWJFV0PbqMHyvCzWS5YjPh6u7wIgJE6tkWjB3UnRRsbJd4E87F6TVxEPw6CUtnQupBPoKnsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDiprPYJy9DjSlWz6SrcA%2BD2dMlcs1xCUdC6j2J%2F2dDuvxJIYpORgqUJ2x9Sj7yIzrd0WMSl0fqBstSEuKatpEhCIs0j1JyYMrwqs%2Bh4ZvfKvHAihxPYXoLoe5epyZx7E9QOoaFIwA1zSDSztELyxYAUnJtLdRrfRvrY1RmFp03cTcGrLoja%2BX49mFYoSLhJNg0jv3vIiGR6z5ZyxoVJaC8Yh41BEtf3T%2Feh7Zd7rHJwFwBtTPfHaoXrfg4%2FwPUSyiYfYdLGzBwFXetNvaq8kpOc5ChG70phWfSKTfBZVgYVsM9Z%2FPpisBzEbnbVz6nQiwI37V%2FAGQVcIjLySzB6MKx8ima%2FH2Y5R7MPArD67NXO%2FQ0uWYS1hiFL8lGjnvbfxQ6aPPdfRilG7o6jX8nStIWiZptvjmw0h2GqiNj2yHvXh6n0xqvH3srHkm80HbS3Dacn2j%2B2aX4Ag%2B%2BvqDl8hfq%2BxxD%2BGTERFcetfB4xd5nU2LYCpqyfYA9USUDmZRs4wl7iqFfrt8RunPrKVfl%2BTdck8E7FRWaOnG0EKrS6jZVY%2BSxf3NcV1tqhLHA1njD%2Fn%2FHit5UxXlAccoxoiOq5keN3vQHJKLkDtaF9fEi5Bi0Lc0fV%2Frn0UP38o9ZZBpAmdEtZxvR%2FbJZXPy1XMN6DiL0GOqUBa7i3mLGrzSP9O7LkaMyN3z0ZwmWdB6y4U1w1fo1Fu%2FAsdPtQwVUNiogQJO1BwjE5V%2B%2BhZU%2F6%2BBqmHgXML%2Bb5mCBOj3NZwoa1srIx4V4GoWh0ECDBwdwLgv6c%2FpqUYv40w1l34LwrYUsXgzPWdfpLQXi1KQlV8K9Wxui8802T991aL7HXBV%2F6qEnzqki%2FNQBpMQc%2FfWHBeHoCQRon7RUFrvb0EtMt&X-Amz-Signature=b1eb9802e5b0e8bd3e070ded045f75435b3411d95ccfffd59dfe9627d7bd3a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LBZLWU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC0PxkH16iqiyvFybZfXWJFV0PbqMHyvCzWS5YjPh6u7wIgJE6tkWjB3UnRRsbJd4E87F6TVxEPw6CUtnQupBPoKnsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDiprPYJy9DjSlWz6SrcA%2BD2dMlcs1xCUdC6j2J%2F2dDuvxJIYpORgqUJ2x9Sj7yIzrd0WMSl0fqBstSEuKatpEhCIs0j1JyYMrwqs%2Bh4ZvfKvHAihxPYXoLoe5epyZx7E9QOoaFIwA1zSDSztELyxYAUnJtLdRrfRvrY1RmFp03cTcGrLoja%2BX49mFYoSLhJNg0jv3vIiGR6z5ZyxoVJaC8Yh41BEtf3T%2Feh7Zd7rHJwFwBtTPfHaoXrfg4%2FwPUSyiYfYdLGzBwFXetNvaq8kpOc5ChG70phWfSKTfBZVgYVsM9Z%2FPpisBzEbnbVz6nQiwI37V%2FAGQVcIjLySzB6MKx8ima%2FH2Y5R7MPArD67NXO%2FQ0uWYS1hiFL8lGjnvbfxQ6aPPdfRilG7o6jX8nStIWiZptvjmw0h2GqiNj2yHvXh6n0xqvH3srHkm80HbS3Dacn2j%2B2aX4Ag%2B%2BvqDl8hfq%2BxxD%2BGTERFcetfB4xd5nU2LYCpqyfYA9USUDmZRs4wl7iqFfrt8RunPrKVfl%2BTdck8E7FRWaOnG0EKrS6jZVY%2BSxf3NcV1tqhLHA1njD%2Fn%2FHit5UxXlAccoxoiOq5keN3vQHJKLkDtaF9fEi5Bi0Lc0fV%2Frn0UP38o9ZZBpAmdEtZxvR%2FbJZXPy1XMN6DiL0GOqUBa7i3mLGrzSP9O7LkaMyN3z0ZwmWdB6y4U1w1fo1Fu%2FAsdPtQwVUNiogQJO1BwjE5V%2B%2BhZU%2F6%2BBqmHgXML%2Bb5mCBOj3NZwoa1srIx4V4GoWh0ECDBwdwLgv6c%2FpqUYv40w1l34LwrYUsXgzPWdfpLQXi1KQlV8K9Wxui8802T991aL7HXBV%2F6qEnzqki%2FNQBpMQc%2FfWHBeHoCQRon7RUFrvb0EtMt&X-Amz-Signature=2f7a6c256f3e619efd9acb9d14d6796fb64cb0ca2fe8a507ccbf5bfd94467bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LBZLWU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC0PxkH16iqiyvFybZfXWJFV0PbqMHyvCzWS5YjPh6u7wIgJE6tkWjB3UnRRsbJd4E87F6TVxEPw6CUtnQupBPoKnsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDiprPYJy9DjSlWz6SrcA%2BD2dMlcs1xCUdC6j2J%2F2dDuvxJIYpORgqUJ2x9Sj7yIzrd0WMSl0fqBstSEuKatpEhCIs0j1JyYMrwqs%2Bh4ZvfKvHAihxPYXoLoe5epyZx7E9QOoaFIwA1zSDSztELyxYAUnJtLdRrfRvrY1RmFp03cTcGrLoja%2BX49mFYoSLhJNg0jv3vIiGR6z5ZyxoVJaC8Yh41BEtf3T%2Feh7Zd7rHJwFwBtTPfHaoXrfg4%2FwPUSyiYfYdLGzBwFXetNvaq8kpOc5ChG70phWfSKTfBZVgYVsM9Z%2FPpisBzEbnbVz6nQiwI37V%2FAGQVcIjLySzB6MKx8ima%2FH2Y5R7MPArD67NXO%2FQ0uWYS1hiFL8lGjnvbfxQ6aPPdfRilG7o6jX8nStIWiZptvjmw0h2GqiNj2yHvXh6n0xqvH3srHkm80HbS3Dacn2j%2B2aX4Ag%2B%2BvqDl8hfq%2BxxD%2BGTERFcetfB4xd5nU2LYCpqyfYA9USUDmZRs4wl7iqFfrt8RunPrKVfl%2BTdck8E7FRWaOnG0EKrS6jZVY%2BSxf3NcV1tqhLHA1njD%2Fn%2FHit5UxXlAccoxoiOq5keN3vQHJKLkDtaF9fEi5Bi0Lc0fV%2Frn0UP38o9ZZBpAmdEtZxvR%2FbJZXPy1XMN6DiL0GOqUBa7i3mLGrzSP9O7LkaMyN3z0ZwmWdB6y4U1w1fo1Fu%2FAsdPtQwVUNiogQJO1BwjE5V%2B%2BhZU%2F6%2BBqmHgXML%2Bb5mCBOj3NZwoa1srIx4V4GoWh0ECDBwdwLgv6c%2FpqUYv40w1l34LwrYUsXgzPWdfpLQXi1KQlV8K9Wxui8802T991aL7HXBV%2F6qEnzqki%2FNQBpMQc%2FfWHBeHoCQRon7RUFrvb0EtMt&X-Amz-Signature=cb26f76cbfa53d8969081d9dfa4076af9ec4c983b1713a53825df0911f870622&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LBZLWU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC0PxkH16iqiyvFybZfXWJFV0PbqMHyvCzWS5YjPh6u7wIgJE6tkWjB3UnRRsbJd4E87F6TVxEPw6CUtnQupBPoKnsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDiprPYJy9DjSlWz6SrcA%2BD2dMlcs1xCUdC6j2J%2F2dDuvxJIYpORgqUJ2x9Sj7yIzrd0WMSl0fqBstSEuKatpEhCIs0j1JyYMrwqs%2Bh4ZvfKvHAihxPYXoLoe5epyZx7E9QOoaFIwA1zSDSztELyxYAUnJtLdRrfRvrY1RmFp03cTcGrLoja%2BX49mFYoSLhJNg0jv3vIiGR6z5ZyxoVJaC8Yh41BEtf3T%2Feh7Zd7rHJwFwBtTPfHaoXrfg4%2FwPUSyiYfYdLGzBwFXetNvaq8kpOc5ChG70phWfSKTfBZVgYVsM9Z%2FPpisBzEbnbVz6nQiwI37V%2FAGQVcIjLySzB6MKx8ima%2FH2Y5R7MPArD67NXO%2FQ0uWYS1hiFL8lGjnvbfxQ6aPPdfRilG7o6jX8nStIWiZptvjmw0h2GqiNj2yHvXh6n0xqvH3srHkm80HbS3Dacn2j%2B2aX4Ag%2B%2BvqDl8hfq%2BxxD%2BGTERFcetfB4xd5nU2LYCpqyfYA9USUDmZRs4wl7iqFfrt8RunPrKVfl%2BTdck8E7FRWaOnG0EKrS6jZVY%2BSxf3NcV1tqhLHA1njD%2Fn%2FHit5UxXlAccoxoiOq5keN3vQHJKLkDtaF9fEi5Bi0Lc0fV%2Frn0UP38o9ZZBpAmdEtZxvR%2FbJZXPy1XMN6DiL0GOqUBa7i3mLGrzSP9O7LkaMyN3z0ZwmWdB6y4U1w1fo1Fu%2FAsdPtQwVUNiogQJO1BwjE5V%2B%2BhZU%2F6%2BBqmHgXML%2Bb5mCBOj3NZwoa1srIx4V4GoWh0ECDBwdwLgv6c%2FpqUYv40w1l34LwrYUsXgzPWdfpLQXi1KQlV8K9Wxui8802T991aL7HXBV%2F6qEnzqki%2FNQBpMQc%2FfWHBeHoCQRon7RUFrvb0EtMt&X-Amz-Signature=9ff64bb5ab28c47e052e3f8bffa80f3f624d8af9cb80658627fda90980824dee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LBZLWU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC0PxkH16iqiyvFybZfXWJFV0PbqMHyvCzWS5YjPh6u7wIgJE6tkWjB3UnRRsbJd4E87F6TVxEPw6CUtnQupBPoKnsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDiprPYJy9DjSlWz6SrcA%2BD2dMlcs1xCUdC6j2J%2F2dDuvxJIYpORgqUJ2x9Sj7yIzrd0WMSl0fqBstSEuKatpEhCIs0j1JyYMrwqs%2Bh4ZvfKvHAihxPYXoLoe5epyZx7E9QOoaFIwA1zSDSztELyxYAUnJtLdRrfRvrY1RmFp03cTcGrLoja%2BX49mFYoSLhJNg0jv3vIiGR6z5ZyxoVJaC8Yh41BEtf3T%2Feh7Zd7rHJwFwBtTPfHaoXrfg4%2FwPUSyiYfYdLGzBwFXetNvaq8kpOc5ChG70phWfSKTfBZVgYVsM9Z%2FPpisBzEbnbVz6nQiwI37V%2FAGQVcIjLySzB6MKx8ima%2FH2Y5R7MPArD67NXO%2FQ0uWYS1hiFL8lGjnvbfxQ6aPPdfRilG7o6jX8nStIWiZptvjmw0h2GqiNj2yHvXh6n0xqvH3srHkm80HbS3Dacn2j%2B2aX4Ag%2B%2BvqDl8hfq%2BxxD%2BGTERFcetfB4xd5nU2LYCpqyfYA9USUDmZRs4wl7iqFfrt8RunPrKVfl%2BTdck8E7FRWaOnG0EKrS6jZVY%2BSxf3NcV1tqhLHA1njD%2Fn%2FHit5UxXlAccoxoiOq5keN3vQHJKLkDtaF9fEi5Bi0Lc0fV%2Frn0UP38o9ZZBpAmdEtZxvR%2FbJZXPy1XMN6DiL0GOqUBa7i3mLGrzSP9O7LkaMyN3z0ZwmWdB6y4U1w1fo1Fu%2FAsdPtQwVUNiogQJO1BwjE5V%2B%2BhZU%2F6%2BBqmHgXML%2Bb5mCBOj3NZwoa1srIx4V4GoWh0ECDBwdwLgv6c%2FpqUYv40w1l34LwrYUsXgzPWdfpLQXi1KQlV8K9Wxui8802T991aL7HXBV%2F6qEnzqki%2FNQBpMQc%2FfWHBeHoCQRon7RUFrvb0EtMt&X-Amz-Signature=efd3b091036c7c79946422aefd243bf9311954dad763b59373e12ccc3e5d9048&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
