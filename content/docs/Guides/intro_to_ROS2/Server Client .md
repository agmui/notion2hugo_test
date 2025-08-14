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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5RRXHF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5Cd%2BJ2jzBLBr6HXtA528q1%2FcdgJljTNB2TFIneifTtAiBJ6GqypMFRGOuQw2oQMBqa4dk%2FuaL8n0wy6iL2ji0diSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhpLQnstVfbMIQPa5KtwDp89WJEpWQPnHiALoUGV5fqkDx8FGYV%2ByRKHUlEonp1tgY4P3hbJX2VPkyaMtlgRck88Gy44gVGobEZv0HcxnihrgJJpBdeOOx9CirkR73mB23s72%2F1d%2BZG%2BzX1lSgVspjWoJa00UoKLyw0xscCF33W9DDEt6Nc62cCEskOX%2FQ540PEUDZvjQvp6BoyTPTOtVNjsqyTt%2FFIL9HgwR1gYipYDPZQkD4ZwbACJ%2FOPcdcyInEDkgZnuyjlHfSsX9EtI4QkT1TZeAiOkjC84Jc2Im%2Bj%2F7%2BiMeYGVlxItAr%2FUZYzvmV3nzNh66LcPirkM5xwbu5jMR9%2BnetQo9i41Sy3zp9RiLMP4drx8YS4QfGoTXSSIWdkiW3ddV78ENg5RMsXD5G4xeZlXpLHuXGCp94uVbNY6ua8UuFcTuG2wFaavMrlLuh611HJk0z8ZyzX6AnpEPac2Az4Jxj5dY2RINzwwJhF5jyppXlgDGFMRWpoigHsshbAsCJUGY2bye6o38I9JKCVEXL9cqu6a9QT4mnQKS9kfARpTHk9HKY69vKTXdwT4GhL6MyZz3lCh7UH0tRtblhy8s72W4Tfqa81mNS%2BJ56Mr1eHvK5EI5BfEvajBtGDzzsW0fAaieL2z5EnowvIn2xAY6pgFq69I%2BXeufT2Am%2FzZpbDC3qsN4QNCzvSjBbfwq8KKE2xC3KSS9mK%2B6mNkTcaKtWr0yAVIFRBp9%2FKRirg3ky%2FxPxNlPZvreRl2%2F5PFfoLu%2BqFAZeUNKQqqW5asAR4IQrihNaYR0pstUSR3mtbvJOfPbJswzJmNew9s%2BcNTXKC02FGuK5T8FsAcj%2FAIzDDB%2FTmlcDoHshiYZual%2Fj41dw0zKGe4bkZs5&X-Amz-Signature=0faea74a43f3cfe7a899521a57c8094d91020dc8552b0ce601b68a0f49dc58c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5RRXHF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5Cd%2BJ2jzBLBr6HXtA528q1%2FcdgJljTNB2TFIneifTtAiBJ6GqypMFRGOuQw2oQMBqa4dk%2FuaL8n0wy6iL2ji0diSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhpLQnstVfbMIQPa5KtwDp89WJEpWQPnHiALoUGV5fqkDx8FGYV%2ByRKHUlEonp1tgY4P3hbJX2VPkyaMtlgRck88Gy44gVGobEZv0HcxnihrgJJpBdeOOx9CirkR73mB23s72%2F1d%2BZG%2BzX1lSgVspjWoJa00UoKLyw0xscCF33W9DDEt6Nc62cCEskOX%2FQ540PEUDZvjQvp6BoyTPTOtVNjsqyTt%2FFIL9HgwR1gYipYDPZQkD4ZwbACJ%2FOPcdcyInEDkgZnuyjlHfSsX9EtI4QkT1TZeAiOkjC84Jc2Im%2Bj%2F7%2BiMeYGVlxItAr%2FUZYzvmV3nzNh66LcPirkM5xwbu5jMR9%2BnetQo9i41Sy3zp9RiLMP4drx8YS4QfGoTXSSIWdkiW3ddV78ENg5RMsXD5G4xeZlXpLHuXGCp94uVbNY6ua8UuFcTuG2wFaavMrlLuh611HJk0z8ZyzX6AnpEPac2Az4Jxj5dY2RINzwwJhF5jyppXlgDGFMRWpoigHsshbAsCJUGY2bye6o38I9JKCVEXL9cqu6a9QT4mnQKS9kfARpTHk9HKY69vKTXdwT4GhL6MyZz3lCh7UH0tRtblhy8s72W4Tfqa81mNS%2BJ56Mr1eHvK5EI5BfEvajBtGDzzsW0fAaieL2z5EnowvIn2xAY6pgFq69I%2BXeufT2Am%2FzZpbDC3qsN4QNCzvSjBbfwq8KKE2xC3KSS9mK%2B6mNkTcaKtWr0yAVIFRBp9%2FKRirg3ky%2FxPxNlPZvreRl2%2F5PFfoLu%2BqFAZeUNKQqqW5asAR4IQrihNaYR0pstUSR3mtbvJOfPbJswzJmNew9s%2BcNTXKC02FGuK5T8FsAcj%2FAIzDDB%2FTmlcDoHshiYZual%2Fj41dw0zKGe4bkZs5&X-Amz-Signature=ad404da1e4289f6fea49f0bf8cf220ed3cec31ef92dede27ace62d20ac006574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5RRXHF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5Cd%2BJ2jzBLBr6HXtA528q1%2FcdgJljTNB2TFIneifTtAiBJ6GqypMFRGOuQw2oQMBqa4dk%2FuaL8n0wy6iL2ji0diSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhpLQnstVfbMIQPa5KtwDp89WJEpWQPnHiALoUGV5fqkDx8FGYV%2ByRKHUlEonp1tgY4P3hbJX2VPkyaMtlgRck88Gy44gVGobEZv0HcxnihrgJJpBdeOOx9CirkR73mB23s72%2F1d%2BZG%2BzX1lSgVspjWoJa00UoKLyw0xscCF33W9DDEt6Nc62cCEskOX%2FQ540PEUDZvjQvp6BoyTPTOtVNjsqyTt%2FFIL9HgwR1gYipYDPZQkD4ZwbACJ%2FOPcdcyInEDkgZnuyjlHfSsX9EtI4QkT1TZeAiOkjC84Jc2Im%2Bj%2F7%2BiMeYGVlxItAr%2FUZYzvmV3nzNh66LcPirkM5xwbu5jMR9%2BnetQo9i41Sy3zp9RiLMP4drx8YS4QfGoTXSSIWdkiW3ddV78ENg5RMsXD5G4xeZlXpLHuXGCp94uVbNY6ua8UuFcTuG2wFaavMrlLuh611HJk0z8ZyzX6AnpEPac2Az4Jxj5dY2RINzwwJhF5jyppXlgDGFMRWpoigHsshbAsCJUGY2bye6o38I9JKCVEXL9cqu6a9QT4mnQKS9kfARpTHk9HKY69vKTXdwT4GhL6MyZz3lCh7UH0tRtblhy8s72W4Tfqa81mNS%2BJ56Mr1eHvK5EI5BfEvajBtGDzzsW0fAaieL2z5EnowvIn2xAY6pgFq69I%2BXeufT2Am%2FzZpbDC3qsN4QNCzvSjBbfwq8KKE2xC3KSS9mK%2B6mNkTcaKtWr0yAVIFRBp9%2FKRirg3ky%2FxPxNlPZvreRl2%2F5PFfoLu%2BqFAZeUNKQqqW5asAR4IQrihNaYR0pstUSR3mtbvJOfPbJswzJmNew9s%2BcNTXKC02FGuK5T8FsAcj%2FAIzDDB%2FTmlcDoHshiYZual%2Fj41dw0zKGe4bkZs5&X-Amz-Signature=d06a606edf528c3b18616b54d31b195243d6ac27f7f41f9a51d975870d0e4e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5RRXHF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5Cd%2BJ2jzBLBr6HXtA528q1%2FcdgJljTNB2TFIneifTtAiBJ6GqypMFRGOuQw2oQMBqa4dk%2FuaL8n0wy6iL2ji0diSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhpLQnstVfbMIQPa5KtwDp89WJEpWQPnHiALoUGV5fqkDx8FGYV%2ByRKHUlEonp1tgY4P3hbJX2VPkyaMtlgRck88Gy44gVGobEZv0HcxnihrgJJpBdeOOx9CirkR73mB23s72%2F1d%2BZG%2BzX1lSgVspjWoJa00UoKLyw0xscCF33W9DDEt6Nc62cCEskOX%2FQ540PEUDZvjQvp6BoyTPTOtVNjsqyTt%2FFIL9HgwR1gYipYDPZQkD4ZwbACJ%2FOPcdcyInEDkgZnuyjlHfSsX9EtI4QkT1TZeAiOkjC84Jc2Im%2Bj%2F7%2BiMeYGVlxItAr%2FUZYzvmV3nzNh66LcPirkM5xwbu5jMR9%2BnetQo9i41Sy3zp9RiLMP4drx8YS4QfGoTXSSIWdkiW3ddV78ENg5RMsXD5G4xeZlXpLHuXGCp94uVbNY6ua8UuFcTuG2wFaavMrlLuh611HJk0z8ZyzX6AnpEPac2Az4Jxj5dY2RINzwwJhF5jyppXlgDGFMRWpoigHsshbAsCJUGY2bye6o38I9JKCVEXL9cqu6a9QT4mnQKS9kfARpTHk9HKY69vKTXdwT4GhL6MyZz3lCh7UH0tRtblhy8s72W4Tfqa81mNS%2BJ56Mr1eHvK5EI5BfEvajBtGDzzsW0fAaieL2z5EnowvIn2xAY6pgFq69I%2BXeufT2Am%2FzZpbDC3qsN4QNCzvSjBbfwq8KKE2xC3KSS9mK%2B6mNkTcaKtWr0yAVIFRBp9%2FKRirg3ky%2FxPxNlPZvreRl2%2F5PFfoLu%2BqFAZeUNKQqqW5asAR4IQrihNaYR0pstUSR3mtbvJOfPbJswzJmNew9s%2BcNTXKC02FGuK5T8FsAcj%2FAIzDDB%2FTmlcDoHshiYZual%2Fj41dw0zKGe4bkZs5&X-Amz-Signature=96fefd89862ed675fab3c8557361fdd4ab5926ffde0c815a08bc1ef4c69f470d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5RRXHF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5Cd%2BJ2jzBLBr6HXtA528q1%2FcdgJljTNB2TFIneifTtAiBJ6GqypMFRGOuQw2oQMBqa4dk%2FuaL8n0wy6iL2ji0diSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhpLQnstVfbMIQPa5KtwDp89WJEpWQPnHiALoUGV5fqkDx8FGYV%2ByRKHUlEonp1tgY4P3hbJX2VPkyaMtlgRck88Gy44gVGobEZv0HcxnihrgJJpBdeOOx9CirkR73mB23s72%2F1d%2BZG%2BzX1lSgVspjWoJa00UoKLyw0xscCF33W9DDEt6Nc62cCEskOX%2FQ540PEUDZvjQvp6BoyTPTOtVNjsqyTt%2FFIL9HgwR1gYipYDPZQkD4ZwbACJ%2FOPcdcyInEDkgZnuyjlHfSsX9EtI4QkT1TZeAiOkjC84Jc2Im%2Bj%2F7%2BiMeYGVlxItAr%2FUZYzvmV3nzNh66LcPirkM5xwbu5jMR9%2BnetQo9i41Sy3zp9RiLMP4drx8YS4QfGoTXSSIWdkiW3ddV78ENg5RMsXD5G4xeZlXpLHuXGCp94uVbNY6ua8UuFcTuG2wFaavMrlLuh611HJk0z8ZyzX6AnpEPac2Az4Jxj5dY2RINzwwJhF5jyppXlgDGFMRWpoigHsshbAsCJUGY2bye6o38I9JKCVEXL9cqu6a9QT4mnQKS9kfARpTHk9HKY69vKTXdwT4GhL6MyZz3lCh7UH0tRtblhy8s72W4Tfqa81mNS%2BJ56Mr1eHvK5EI5BfEvajBtGDzzsW0fAaieL2z5EnowvIn2xAY6pgFq69I%2BXeufT2Am%2FzZpbDC3qsN4QNCzvSjBbfwq8KKE2xC3KSS9mK%2B6mNkTcaKtWr0yAVIFRBp9%2FKRirg3ky%2FxPxNlPZvreRl2%2F5PFfoLu%2BqFAZeUNKQqqW5asAR4IQrihNaYR0pstUSR3mtbvJOfPbJswzJmNew9s%2BcNTXKC02FGuK5T8FsAcj%2FAIzDDB%2FTmlcDoHshiYZual%2Fj41dw0zKGe4bkZs5&X-Amz-Signature=4171f94a99b6a5e156029691f67de04005df23641669c976c1123a505e92fd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
