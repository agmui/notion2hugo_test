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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376KW4UI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICKJrPkMOc5DdszUw%2FUHyaHuJ%2BBYp9535QbSbUj4DftVAiAyggnjnTRtl4zrNoIJfr0nUsZQqfoihiFI7LPWmzNqICr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMAm9%2Fsdi405HsByhNKtwDc7wVO%2F%2BqOwCXhzuSmWb6Pu%2FXPemqSK%2BNUC8dFVYLvvgFrQNQsS9OSUOaNi2wLmJEN8nR1tt1mdfn1%2FHDI38TRywjxk6I6pGcnIU9kSSqwrQFKMq4m6eH3%2B4kRuAA77072466clBFsR329mKST6kyij%2FPwIzDuCVWiB4KLb548JheUxuNYCLX%2B%2B8suedyWGGxypEGX5FkRfMJaoxvoF7EC9LP6DcOqkr8mT37m2Yunltqw%2FO6IVJ%2BMbmVkZCSRN0QxG60o4jLLgdRv3GM6Ja1%2BJY%2BiBgVA%2BTLni9uXfQFiLAJAmYPmKfUb3S8Y934MCAHoKyau%2F59hZf1vd4YB3fixz0b0W6o%2BAGS78RCATwjtHTI%2B8OerhjGzSBF%2F7c16RWrLWwaLAJC3WIffz6ELoyYHBcCQvqEy3HHzwrdGn0Bk8VNpSOcoiHOXnA5QqIxpH2JpBgRAZCcZwiz1gE1fBzMmI28BoiQjfZ01gtTcKU1233W1ij8RrBydVC12JX7UR0Kxqb%2B%2BfhlSIf62yg54rGitdv6NG6Bjx%2FyEjvpzD%2Bqs5iA28eKLg%2BEs2gTobJEJjvoLguj0dVjaCeJAyaOfxPvGxWA7PWTvizRG9S8vFTtmfCIhR4TNoEhG0zQ2p0wtISnwwY6pgHqP34d5MJNt19BnRI3Ts9IZbkHlJydw7YAFJ4zcaDsE7eFKdS4drFJmFcBOYfP2%2BsjHu3fCQPZeG6QhFxG4wONj9Nwq0nizoBNQqoFZY1T77nyVmOcc%2B5mWSDYZQhXw2uUWh268f4L0kSuKCUwfo3SICBFXLjKcZ62kgTa2Cg3Vi0X9Cr1FM4t1aGJcOXVwC9x4m5Am884qi4TOFVVAK9rvTjzjlHk&X-Amz-Signature=f5fcc001ac83277f25dbd4764891b63ab5bf6bebb980dd56075c8f2449224185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376KW4UI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICKJrPkMOc5DdszUw%2FUHyaHuJ%2BBYp9535QbSbUj4DftVAiAyggnjnTRtl4zrNoIJfr0nUsZQqfoihiFI7LPWmzNqICr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMAm9%2Fsdi405HsByhNKtwDc7wVO%2F%2BqOwCXhzuSmWb6Pu%2FXPemqSK%2BNUC8dFVYLvvgFrQNQsS9OSUOaNi2wLmJEN8nR1tt1mdfn1%2FHDI38TRywjxk6I6pGcnIU9kSSqwrQFKMq4m6eH3%2B4kRuAA77072466clBFsR329mKST6kyij%2FPwIzDuCVWiB4KLb548JheUxuNYCLX%2B%2B8suedyWGGxypEGX5FkRfMJaoxvoF7EC9LP6DcOqkr8mT37m2Yunltqw%2FO6IVJ%2BMbmVkZCSRN0QxG60o4jLLgdRv3GM6Ja1%2BJY%2BiBgVA%2BTLni9uXfQFiLAJAmYPmKfUb3S8Y934MCAHoKyau%2F59hZf1vd4YB3fixz0b0W6o%2BAGS78RCATwjtHTI%2B8OerhjGzSBF%2F7c16RWrLWwaLAJC3WIffz6ELoyYHBcCQvqEy3HHzwrdGn0Bk8VNpSOcoiHOXnA5QqIxpH2JpBgRAZCcZwiz1gE1fBzMmI28BoiQjfZ01gtTcKU1233W1ij8RrBydVC12JX7UR0Kxqb%2B%2BfhlSIf62yg54rGitdv6NG6Bjx%2FyEjvpzD%2Bqs5iA28eKLg%2BEs2gTobJEJjvoLguj0dVjaCeJAyaOfxPvGxWA7PWTvizRG9S8vFTtmfCIhR4TNoEhG0zQ2p0wtISnwwY6pgHqP34d5MJNt19BnRI3Ts9IZbkHlJydw7YAFJ4zcaDsE7eFKdS4drFJmFcBOYfP2%2BsjHu3fCQPZeG6QhFxG4wONj9Nwq0nizoBNQqoFZY1T77nyVmOcc%2B5mWSDYZQhXw2uUWh268f4L0kSuKCUwfo3SICBFXLjKcZ62kgTa2Cg3Vi0X9Cr1FM4t1aGJcOXVwC9x4m5Am884qi4TOFVVAK9rvTjzjlHk&X-Amz-Signature=28803483aa4bbd37570b3c2a4a037a77e288b104920c65e8288abd1282bdcd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376KW4UI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICKJrPkMOc5DdszUw%2FUHyaHuJ%2BBYp9535QbSbUj4DftVAiAyggnjnTRtl4zrNoIJfr0nUsZQqfoihiFI7LPWmzNqICr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMAm9%2Fsdi405HsByhNKtwDc7wVO%2F%2BqOwCXhzuSmWb6Pu%2FXPemqSK%2BNUC8dFVYLvvgFrQNQsS9OSUOaNi2wLmJEN8nR1tt1mdfn1%2FHDI38TRywjxk6I6pGcnIU9kSSqwrQFKMq4m6eH3%2B4kRuAA77072466clBFsR329mKST6kyij%2FPwIzDuCVWiB4KLb548JheUxuNYCLX%2B%2B8suedyWGGxypEGX5FkRfMJaoxvoF7EC9LP6DcOqkr8mT37m2Yunltqw%2FO6IVJ%2BMbmVkZCSRN0QxG60o4jLLgdRv3GM6Ja1%2BJY%2BiBgVA%2BTLni9uXfQFiLAJAmYPmKfUb3S8Y934MCAHoKyau%2F59hZf1vd4YB3fixz0b0W6o%2BAGS78RCATwjtHTI%2B8OerhjGzSBF%2F7c16RWrLWwaLAJC3WIffz6ELoyYHBcCQvqEy3HHzwrdGn0Bk8VNpSOcoiHOXnA5QqIxpH2JpBgRAZCcZwiz1gE1fBzMmI28BoiQjfZ01gtTcKU1233W1ij8RrBydVC12JX7UR0Kxqb%2B%2BfhlSIf62yg54rGitdv6NG6Bjx%2FyEjvpzD%2Bqs5iA28eKLg%2BEs2gTobJEJjvoLguj0dVjaCeJAyaOfxPvGxWA7PWTvizRG9S8vFTtmfCIhR4TNoEhG0zQ2p0wtISnwwY6pgHqP34d5MJNt19BnRI3Ts9IZbkHlJydw7YAFJ4zcaDsE7eFKdS4drFJmFcBOYfP2%2BsjHu3fCQPZeG6QhFxG4wONj9Nwq0nizoBNQqoFZY1T77nyVmOcc%2B5mWSDYZQhXw2uUWh268f4L0kSuKCUwfo3SICBFXLjKcZ62kgTa2Cg3Vi0X9Cr1FM4t1aGJcOXVwC9x4m5Am884qi4TOFVVAK9rvTjzjlHk&X-Amz-Signature=e16667ad1d152f0499045a1d8bdb4bae7ee2531465ec5994dce1a4440db5589b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376KW4UI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICKJrPkMOc5DdszUw%2FUHyaHuJ%2BBYp9535QbSbUj4DftVAiAyggnjnTRtl4zrNoIJfr0nUsZQqfoihiFI7LPWmzNqICr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMAm9%2Fsdi405HsByhNKtwDc7wVO%2F%2BqOwCXhzuSmWb6Pu%2FXPemqSK%2BNUC8dFVYLvvgFrQNQsS9OSUOaNi2wLmJEN8nR1tt1mdfn1%2FHDI38TRywjxk6I6pGcnIU9kSSqwrQFKMq4m6eH3%2B4kRuAA77072466clBFsR329mKST6kyij%2FPwIzDuCVWiB4KLb548JheUxuNYCLX%2B%2B8suedyWGGxypEGX5FkRfMJaoxvoF7EC9LP6DcOqkr8mT37m2Yunltqw%2FO6IVJ%2BMbmVkZCSRN0QxG60o4jLLgdRv3GM6Ja1%2BJY%2BiBgVA%2BTLni9uXfQFiLAJAmYPmKfUb3S8Y934MCAHoKyau%2F59hZf1vd4YB3fixz0b0W6o%2BAGS78RCATwjtHTI%2B8OerhjGzSBF%2F7c16RWrLWwaLAJC3WIffz6ELoyYHBcCQvqEy3HHzwrdGn0Bk8VNpSOcoiHOXnA5QqIxpH2JpBgRAZCcZwiz1gE1fBzMmI28BoiQjfZ01gtTcKU1233W1ij8RrBydVC12JX7UR0Kxqb%2B%2BfhlSIf62yg54rGitdv6NG6Bjx%2FyEjvpzD%2Bqs5iA28eKLg%2BEs2gTobJEJjvoLguj0dVjaCeJAyaOfxPvGxWA7PWTvizRG9S8vFTtmfCIhR4TNoEhG0zQ2p0wtISnwwY6pgHqP34d5MJNt19BnRI3Ts9IZbkHlJydw7YAFJ4zcaDsE7eFKdS4drFJmFcBOYfP2%2BsjHu3fCQPZeG6QhFxG4wONj9Nwq0nizoBNQqoFZY1T77nyVmOcc%2B5mWSDYZQhXw2uUWh268f4L0kSuKCUwfo3SICBFXLjKcZ62kgTa2Cg3Vi0X9Cr1FM4t1aGJcOXVwC9x4m5Am884qi4TOFVVAK9rvTjzjlHk&X-Amz-Signature=8e5a3d21aada87c014bed7eb59966bdfd7d4cb2eea54287a7dbdb946ca61f40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376KW4UI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICKJrPkMOc5DdszUw%2FUHyaHuJ%2BBYp9535QbSbUj4DftVAiAyggnjnTRtl4zrNoIJfr0nUsZQqfoihiFI7LPWmzNqICr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMAm9%2Fsdi405HsByhNKtwDc7wVO%2F%2BqOwCXhzuSmWb6Pu%2FXPemqSK%2BNUC8dFVYLvvgFrQNQsS9OSUOaNi2wLmJEN8nR1tt1mdfn1%2FHDI38TRywjxk6I6pGcnIU9kSSqwrQFKMq4m6eH3%2B4kRuAA77072466clBFsR329mKST6kyij%2FPwIzDuCVWiB4KLb548JheUxuNYCLX%2B%2B8suedyWGGxypEGX5FkRfMJaoxvoF7EC9LP6DcOqkr8mT37m2Yunltqw%2FO6IVJ%2BMbmVkZCSRN0QxG60o4jLLgdRv3GM6Ja1%2BJY%2BiBgVA%2BTLni9uXfQFiLAJAmYPmKfUb3S8Y934MCAHoKyau%2F59hZf1vd4YB3fixz0b0W6o%2BAGS78RCATwjtHTI%2B8OerhjGzSBF%2F7c16RWrLWwaLAJC3WIffz6ELoyYHBcCQvqEy3HHzwrdGn0Bk8VNpSOcoiHOXnA5QqIxpH2JpBgRAZCcZwiz1gE1fBzMmI28BoiQjfZ01gtTcKU1233W1ij8RrBydVC12JX7UR0Kxqb%2B%2BfhlSIf62yg54rGitdv6NG6Bjx%2FyEjvpzD%2Bqs5iA28eKLg%2BEs2gTobJEJjvoLguj0dVjaCeJAyaOfxPvGxWA7PWTvizRG9S8vFTtmfCIhR4TNoEhG0zQ2p0wtISnwwY6pgHqP34d5MJNt19BnRI3Ts9IZbkHlJydw7YAFJ4zcaDsE7eFKdS4drFJmFcBOYfP2%2BsjHu3fCQPZeG6QhFxG4wONj9Nwq0nizoBNQqoFZY1T77nyVmOcc%2B5mWSDYZQhXw2uUWh268f4L0kSuKCUwfo3SICBFXLjKcZ62kgTa2Cg3Vi0X9Cr1FM4t1aGJcOXVwC9x4m5Am884qi4TOFVVAK9rvTjzjlHk&X-Amz-Signature=8306f00549620bda0655593fbfe6d864c1ca139b082f7b6259408c097e609b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
