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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPKED7W%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEQo3rC6CKuQwfQzJLK3Uxcfs2URBEPmhrZYU%2F5uJliBAiA1nFKZ%2FH2HFM4pXizBzGtqp276BfDBE%2FlBDs9QuFoRhyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyQR%2FEErBq09XFKtwDhJFOHL5%2B31SIad%2B3Vn0g2QCvhAwJTOuq7MrQygKwMTbubQ%2Fi354QO9Oskfsy9m33c6eO0Q5QVpiUbawg2px7E%2BO5pzpLOr4TTRAA3cQQbxgD5N%2Bk3tA%2BgHPdihtKXUOcMkMpg7LvvZBuKmLs98erbgKjj2%2BFyNfQt6TVHtuA359K92S7%2FzbaSD846JZWvj8zfeaf8x3xYxDBu2kw1ttI2z9Kktqrj5n9b8vaIU%2FUdckFMdFrw4taBhzQ7mT3ku5LrPLt45t99%2BRzvznd7plT9Uh%2F40uQpMasf9P%2FdUca0T7OFcqA05UeSEP2TddkiBChDBrLEZi3l71%2BnlWdz1zWbjKrfucABmH8YWe%2BG3D6YUMkrDbszBTkbJiApx1HDueKdiGx54NWthW%2BQj%2BB7xWPxakvulKR2xka2YTEQCJA3QSwPfJ51c9HTPvgpprlV8KTl6LENWT9jw7SqRiLweFh0ouBIlH3NQGdn8qxTbSXUgi2jDqJVu9tRemeNasDeup9aIqJwVku65h0ATtLOJpxRI7pPzP6pF78IrPrLJrAOQ2HTvm5yKBikKwCe2i7ogzbtaiTBThEBPGT8Wnh7f8%2Fwh3coCx%2B%2Ft3e0Hj1tc%2BQHgvc%2BWquoL0U4ViOVDUw3ImYwAY6pgE1kk%2Ff30kmT%2BsHetQhRZfIkvWxEfTm4XaB7%2BhbPmMFQDmayvqhQkSMIlVekLqDhvc3ZxJQ8%2BB07DaQVjJsoyrOP%2BTpzfCJnF1opUSx6A%2BwSzf5ckEswzfVfL7jx4nJf9IIbN6IYeWsneiKv9gUov3PWCOQAffAS5UWCDyQyykCvoDOhZYH4%2B2SsnNkv5KbQcZ6QrE%2FjRbslQyJSR0KPvnYUt08q56Q&X-Amz-Signature=097b7d7812f407064c8da7a81ce015ee05129d89653dad89cf3414216e64dea7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPKED7W%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEQo3rC6CKuQwfQzJLK3Uxcfs2URBEPmhrZYU%2F5uJliBAiA1nFKZ%2FH2HFM4pXizBzGtqp276BfDBE%2FlBDs9QuFoRhyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyQR%2FEErBq09XFKtwDhJFOHL5%2B31SIad%2B3Vn0g2QCvhAwJTOuq7MrQygKwMTbubQ%2Fi354QO9Oskfsy9m33c6eO0Q5QVpiUbawg2px7E%2BO5pzpLOr4TTRAA3cQQbxgD5N%2Bk3tA%2BgHPdihtKXUOcMkMpg7LvvZBuKmLs98erbgKjj2%2BFyNfQt6TVHtuA359K92S7%2FzbaSD846JZWvj8zfeaf8x3xYxDBu2kw1ttI2z9Kktqrj5n9b8vaIU%2FUdckFMdFrw4taBhzQ7mT3ku5LrPLt45t99%2BRzvznd7plT9Uh%2F40uQpMasf9P%2FdUca0T7OFcqA05UeSEP2TddkiBChDBrLEZi3l71%2BnlWdz1zWbjKrfucABmH8YWe%2BG3D6YUMkrDbszBTkbJiApx1HDueKdiGx54NWthW%2BQj%2BB7xWPxakvulKR2xka2YTEQCJA3QSwPfJ51c9HTPvgpprlV8KTl6LENWT9jw7SqRiLweFh0ouBIlH3NQGdn8qxTbSXUgi2jDqJVu9tRemeNasDeup9aIqJwVku65h0ATtLOJpxRI7pPzP6pF78IrPrLJrAOQ2HTvm5yKBikKwCe2i7ogzbtaiTBThEBPGT8Wnh7f8%2Fwh3coCx%2B%2Ft3e0Hj1tc%2BQHgvc%2BWquoL0U4ViOVDUw3ImYwAY6pgE1kk%2Ff30kmT%2BsHetQhRZfIkvWxEfTm4XaB7%2BhbPmMFQDmayvqhQkSMIlVekLqDhvc3ZxJQ8%2BB07DaQVjJsoyrOP%2BTpzfCJnF1opUSx6A%2BwSzf5ckEswzfVfL7jx4nJf9IIbN6IYeWsneiKv9gUov3PWCOQAffAS5UWCDyQyykCvoDOhZYH4%2B2SsnNkv5KbQcZ6QrE%2FjRbslQyJSR0KPvnYUt08q56Q&X-Amz-Signature=78349c6be02e246a769a0ee61faada3622bc22435610f678a486e939acc8072f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPKED7W%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEQo3rC6CKuQwfQzJLK3Uxcfs2URBEPmhrZYU%2F5uJliBAiA1nFKZ%2FH2HFM4pXizBzGtqp276BfDBE%2FlBDs9QuFoRhyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyQR%2FEErBq09XFKtwDhJFOHL5%2B31SIad%2B3Vn0g2QCvhAwJTOuq7MrQygKwMTbubQ%2Fi354QO9Oskfsy9m33c6eO0Q5QVpiUbawg2px7E%2BO5pzpLOr4TTRAA3cQQbxgD5N%2Bk3tA%2BgHPdihtKXUOcMkMpg7LvvZBuKmLs98erbgKjj2%2BFyNfQt6TVHtuA359K92S7%2FzbaSD846JZWvj8zfeaf8x3xYxDBu2kw1ttI2z9Kktqrj5n9b8vaIU%2FUdckFMdFrw4taBhzQ7mT3ku5LrPLt45t99%2BRzvznd7plT9Uh%2F40uQpMasf9P%2FdUca0T7OFcqA05UeSEP2TddkiBChDBrLEZi3l71%2BnlWdz1zWbjKrfucABmH8YWe%2BG3D6YUMkrDbszBTkbJiApx1HDueKdiGx54NWthW%2BQj%2BB7xWPxakvulKR2xka2YTEQCJA3QSwPfJ51c9HTPvgpprlV8KTl6LENWT9jw7SqRiLweFh0ouBIlH3NQGdn8qxTbSXUgi2jDqJVu9tRemeNasDeup9aIqJwVku65h0ATtLOJpxRI7pPzP6pF78IrPrLJrAOQ2HTvm5yKBikKwCe2i7ogzbtaiTBThEBPGT8Wnh7f8%2Fwh3coCx%2B%2Ft3e0Hj1tc%2BQHgvc%2BWquoL0U4ViOVDUw3ImYwAY6pgE1kk%2Ff30kmT%2BsHetQhRZfIkvWxEfTm4XaB7%2BhbPmMFQDmayvqhQkSMIlVekLqDhvc3ZxJQ8%2BB07DaQVjJsoyrOP%2BTpzfCJnF1opUSx6A%2BwSzf5ckEswzfVfL7jx4nJf9IIbN6IYeWsneiKv9gUov3PWCOQAffAS5UWCDyQyykCvoDOhZYH4%2B2SsnNkv5KbQcZ6QrE%2FjRbslQyJSR0KPvnYUt08q56Q&X-Amz-Signature=81c1059278bccbd8b3d2069216cf145fe86dd7f4dc34fc44228434c84132c863&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPKED7W%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEQo3rC6CKuQwfQzJLK3Uxcfs2URBEPmhrZYU%2F5uJliBAiA1nFKZ%2FH2HFM4pXizBzGtqp276BfDBE%2FlBDs9QuFoRhyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyQR%2FEErBq09XFKtwDhJFOHL5%2B31SIad%2B3Vn0g2QCvhAwJTOuq7MrQygKwMTbubQ%2Fi354QO9Oskfsy9m33c6eO0Q5QVpiUbawg2px7E%2BO5pzpLOr4TTRAA3cQQbxgD5N%2Bk3tA%2BgHPdihtKXUOcMkMpg7LvvZBuKmLs98erbgKjj2%2BFyNfQt6TVHtuA359K92S7%2FzbaSD846JZWvj8zfeaf8x3xYxDBu2kw1ttI2z9Kktqrj5n9b8vaIU%2FUdckFMdFrw4taBhzQ7mT3ku5LrPLt45t99%2BRzvznd7plT9Uh%2F40uQpMasf9P%2FdUca0T7OFcqA05UeSEP2TddkiBChDBrLEZi3l71%2BnlWdz1zWbjKrfucABmH8YWe%2BG3D6YUMkrDbszBTkbJiApx1HDueKdiGx54NWthW%2BQj%2BB7xWPxakvulKR2xka2YTEQCJA3QSwPfJ51c9HTPvgpprlV8KTl6LENWT9jw7SqRiLweFh0ouBIlH3NQGdn8qxTbSXUgi2jDqJVu9tRemeNasDeup9aIqJwVku65h0ATtLOJpxRI7pPzP6pF78IrPrLJrAOQ2HTvm5yKBikKwCe2i7ogzbtaiTBThEBPGT8Wnh7f8%2Fwh3coCx%2B%2Ft3e0Hj1tc%2BQHgvc%2BWquoL0U4ViOVDUw3ImYwAY6pgE1kk%2Ff30kmT%2BsHetQhRZfIkvWxEfTm4XaB7%2BhbPmMFQDmayvqhQkSMIlVekLqDhvc3ZxJQ8%2BB07DaQVjJsoyrOP%2BTpzfCJnF1opUSx6A%2BwSzf5ckEswzfVfL7jx4nJf9IIbN6IYeWsneiKv9gUov3PWCOQAffAS5UWCDyQyykCvoDOhZYH4%2B2SsnNkv5KbQcZ6QrE%2FjRbslQyJSR0KPvnYUt08q56Q&X-Amz-Signature=a5b300c4463d9ee1fb3dcf8172c2ee4c4bb4561db53d1bba8d878d5036908978&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPKED7W%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEQo3rC6CKuQwfQzJLK3Uxcfs2URBEPmhrZYU%2F5uJliBAiA1nFKZ%2FH2HFM4pXizBzGtqp276BfDBE%2FlBDs9QuFoRhyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyQR%2FEErBq09XFKtwDhJFOHL5%2B31SIad%2B3Vn0g2QCvhAwJTOuq7MrQygKwMTbubQ%2Fi354QO9Oskfsy9m33c6eO0Q5QVpiUbawg2px7E%2BO5pzpLOr4TTRAA3cQQbxgD5N%2Bk3tA%2BgHPdihtKXUOcMkMpg7LvvZBuKmLs98erbgKjj2%2BFyNfQt6TVHtuA359K92S7%2FzbaSD846JZWvj8zfeaf8x3xYxDBu2kw1ttI2z9Kktqrj5n9b8vaIU%2FUdckFMdFrw4taBhzQ7mT3ku5LrPLt45t99%2BRzvznd7plT9Uh%2F40uQpMasf9P%2FdUca0T7OFcqA05UeSEP2TddkiBChDBrLEZi3l71%2BnlWdz1zWbjKrfucABmH8YWe%2BG3D6YUMkrDbszBTkbJiApx1HDueKdiGx54NWthW%2BQj%2BB7xWPxakvulKR2xka2YTEQCJA3QSwPfJ51c9HTPvgpprlV8KTl6LENWT9jw7SqRiLweFh0ouBIlH3NQGdn8qxTbSXUgi2jDqJVu9tRemeNasDeup9aIqJwVku65h0ATtLOJpxRI7pPzP6pF78IrPrLJrAOQ2HTvm5yKBikKwCe2i7ogzbtaiTBThEBPGT8Wnh7f8%2Fwh3coCx%2B%2Ft3e0Hj1tc%2BQHgvc%2BWquoL0U4ViOVDUw3ImYwAY6pgE1kk%2Ff30kmT%2BsHetQhRZfIkvWxEfTm4XaB7%2BhbPmMFQDmayvqhQkSMIlVekLqDhvc3ZxJQ8%2BB07DaQVjJsoyrOP%2BTpzfCJnF1opUSx6A%2BwSzf5ckEswzfVfL7jx4nJf9IIbN6IYeWsneiKv9gUov3PWCOQAffAS5UWCDyQyykCvoDOhZYH4%2B2SsnNkv5KbQcZ6QrE%2FjRbslQyJSR0KPvnYUt08q56Q&X-Amz-Signature=db919cf3684d68af5565178358ae10f88f6570cd4817ec8418f2186ffe40db25&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
