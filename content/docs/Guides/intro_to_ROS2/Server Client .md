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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6GCDWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCnL6DpHrYLz1%2BJEDt6eVB9B3CsBztnpeaBmSeMl45gFAIgchU31vtHAjGT0txXUruG42G2nj%2Bp%2F2JhUf75bO9CGKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNdYoV2K4WU8tQOxBCrcA88%2FYpGWEToDK4n4eZYR9dMHcjA1dJoJDiDQV48pmidy0otQ%2B951qMvQdrt5ALC8UfqCxtjleRMPG28aBUIO5ayOz1A3lCfa%2Bc9W7a%2B7A0mKNUvC3GiByUaXu8sb2PPF6p1L8FtXkIexURgMuiPP3o7GWiJKqIzfnH%2FO7eVlWXdg%2BVY7VQBtiD8Sx%2FifOIfhi5QA49Qxy7rPW6NdLhMwR9qykvb2vJ5UcbwnMO11dsZ7eUJ3y7bH13ca7vPIWuEKyoWM9dfr2AN9Lzf6jrn%2Fvis01Kj04fj2o45BcGtAnZaa3v%2FeKkcZ7vS1ZfI7%2B8imfbfg0d6TMhFw7ltYwE%2F%2BKXQIMNKJ0D%2FaaeDbEHN7DccgkVNhY2FvCuwM%2BUu1ZwiYxyUBR%2FLCJ%2BVhcTYWyfXKNh%2FP1DvncQQVzFaKEa6kCTS8xnJ8svzB2qUHlsDIImr6zsUq7mL1ReyVJnLO1uIg%2BLoTR4fH7xvGq6juQP4TXo6fuYm3nxCD0ndKpTwSCB%2FQ2nb35PSvXgNjlQUmhjH13ysyXcXLb3OsGM9RpP0yDJJflhZw2UXdwxKByTscXTo1cP8Xe9Fqqnj3nq6QVpKfeyZIAHrxTSdy5fBMeGz2s0mdJ9xAten5mkshvguAMNqWzMQGOqUB0q80U0FFlRfp%2Fhle%2FbUMiOo6GMQ45oEnXJAcRJHsF1luZeYZxFFSSStL10oDfXS9sgQxKzrea%2FRF67dAA04cYHErl3CUFkeCkLbcRuE1uhn2pQ1MNvxQ7gGZt52Dt8BtKRwr4K%2BggfgzDZiip0egPQrfJLAO9COJ%2FzkR7f4a04P4PYGYrBxGt7GwytMmoJNOauvwWHjzxnmdHzeNaph3W9WYqpbU&X-Amz-Signature=3cb70c659fc587e2181a1e67b48f5f0b05c3ff978f94c1a8ea34e238f4e24f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6GCDWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCnL6DpHrYLz1%2BJEDt6eVB9B3CsBztnpeaBmSeMl45gFAIgchU31vtHAjGT0txXUruG42G2nj%2Bp%2F2JhUf75bO9CGKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNdYoV2K4WU8tQOxBCrcA88%2FYpGWEToDK4n4eZYR9dMHcjA1dJoJDiDQV48pmidy0otQ%2B951qMvQdrt5ALC8UfqCxtjleRMPG28aBUIO5ayOz1A3lCfa%2Bc9W7a%2B7A0mKNUvC3GiByUaXu8sb2PPF6p1L8FtXkIexURgMuiPP3o7GWiJKqIzfnH%2FO7eVlWXdg%2BVY7VQBtiD8Sx%2FifOIfhi5QA49Qxy7rPW6NdLhMwR9qykvb2vJ5UcbwnMO11dsZ7eUJ3y7bH13ca7vPIWuEKyoWM9dfr2AN9Lzf6jrn%2Fvis01Kj04fj2o45BcGtAnZaa3v%2FeKkcZ7vS1ZfI7%2B8imfbfg0d6TMhFw7ltYwE%2F%2BKXQIMNKJ0D%2FaaeDbEHN7DccgkVNhY2FvCuwM%2BUu1ZwiYxyUBR%2FLCJ%2BVhcTYWyfXKNh%2FP1DvncQQVzFaKEa6kCTS8xnJ8svzB2qUHlsDIImr6zsUq7mL1ReyVJnLO1uIg%2BLoTR4fH7xvGq6juQP4TXo6fuYm3nxCD0ndKpTwSCB%2FQ2nb35PSvXgNjlQUmhjH13ysyXcXLb3OsGM9RpP0yDJJflhZw2UXdwxKByTscXTo1cP8Xe9Fqqnj3nq6QVpKfeyZIAHrxTSdy5fBMeGz2s0mdJ9xAten5mkshvguAMNqWzMQGOqUB0q80U0FFlRfp%2Fhle%2FbUMiOo6GMQ45oEnXJAcRJHsF1luZeYZxFFSSStL10oDfXS9sgQxKzrea%2FRF67dAA04cYHErl3CUFkeCkLbcRuE1uhn2pQ1MNvxQ7gGZt52Dt8BtKRwr4K%2BggfgzDZiip0egPQrfJLAO9COJ%2FzkR7f4a04P4PYGYrBxGt7GwytMmoJNOauvwWHjzxnmdHzeNaph3W9WYqpbU&X-Amz-Signature=ea553aba638f1c9935cac1419b0b2b19640c2bfbc42c3e90c6a8c4f698b76b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6GCDWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCnL6DpHrYLz1%2BJEDt6eVB9B3CsBztnpeaBmSeMl45gFAIgchU31vtHAjGT0txXUruG42G2nj%2Bp%2F2JhUf75bO9CGKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNdYoV2K4WU8tQOxBCrcA88%2FYpGWEToDK4n4eZYR9dMHcjA1dJoJDiDQV48pmidy0otQ%2B951qMvQdrt5ALC8UfqCxtjleRMPG28aBUIO5ayOz1A3lCfa%2Bc9W7a%2B7A0mKNUvC3GiByUaXu8sb2PPF6p1L8FtXkIexURgMuiPP3o7GWiJKqIzfnH%2FO7eVlWXdg%2BVY7VQBtiD8Sx%2FifOIfhi5QA49Qxy7rPW6NdLhMwR9qykvb2vJ5UcbwnMO11dsZ7eUJ3y7bH13ca7vPIWuEKyoWM9dfr2AN9Lzf6jrn%2Fvis01Kj04fj2o45BcGtAnZaa3v%2FeKkcZ7vS1ZfI7%2B8imfbfg0d6TMhFw7ltYwE%2F%2BKXQIMNKJ0D%2FaaeDbEHN7DccgkVNhY2FvCuwM%2BUu1ZwiYxyUBR%2FLCJ%2BVhcTYWyfXKNh%2FP1DvncQQVzFaKEa6kCTS8xnJ8svzB2qUHlsDIImr6zsUq7mL1ReyVJnLO1uIg%2BLoTR4fH7xvGq6juQP4TXo6fuYm3nxCD0ndKpTwSCB%2FQ2nb35PSvXgNjlQUmhjH13ysyXcXLb3OsGM9RpP0yDJJflhZw2UXdwxKByTscXTo1cP8Xe9Fqqnj3nq6QVpKfeyZIAHrxTSdy5fBMeGz2s0mdJ9xAten5mkshvguAMNqWzMQGOqUB0q80U0FFlRfp%2Fhle%2FbUMiOo6GMQ45oEnXJAcRJHsF1luZeYZxFFSSStL10oDfXS9sgQxKzrea%2FRF67dAA04cYHErl3CUFkeCkLbcRuE1uhn2pQ1MNvxQ7gGZt52Dt8BtKRwr4K%2BggfgzDZiip0egPQrfJLAO9COJ%2FzkR7f4a04P4PYGYrBxGt7GwytMmoJNOauvwWHjzxnmdHzeNaph3W9WYqpbU&X-Amz-Signature=d062bafae868478afee0403280ef9d391c31558775bc6e659f201f2fdb5b114e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6GCDWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCnL6DpHrYLz1%2BJEDt6eVB9B3CsBztnpeaBmSeMl45gFAIgchU31vtHAjGT0txXUruG42G2nj%2Bp%2F2JhUf75bO9CGKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNdYoV2K4WU8tQOxBCrcA88%2FYpGWEToDK4n4eZYR9dMHcjA1dJoJDiDQV48pmidy0otQ%2B951qMvQdrt5ALC8UfqCxtjleRMPG28aBUIO5ayOz1A3lCfa%2Bc9W7a%2B7A0mKNUvC3GiByUaXu8sb2PPF6p1L8FtXkIexURgMuiPP3o7GWiJKqIzfnH%2FO7eVlWXdg%2BVY7VQBtiD8Sx%2FifOIfhi5QA49Qxy7rPW6NdLhMwR9qykvb2vJ5UcbwnMO11dsZ7eUJ3y7bH13ca7vPIWuEKyoWM9dfr2AN9Lzf6jrn%2Fvis01Kj04fj2o45BcGtAnZaa3v%2FeKkcZ7vS1ZfI7%2B8imfbfg0d6TMhFw7ltYwE%2F%2BKXQIMNKJ0D%2FaaeDbEHN7DccgkVNhY2FvCuwM%2BUu1ZwiYxyUBR%2FLCJ%2BVhcTYWyfXKNh%2FP1DvncQQVzFaKEa6kCTS8xnJ8svzB2qUHlsDIImr6zsUq7mL1ReyVJnLO1uIg%2BLoTR4fH7xvGq6juQP4TXo6fuYm3nxCD0ndKpTwSCB%2FQ2nb35PSvXgNjlQUmhjH13ysyXcXLb3OsGM9RpP0yDJJflhZw2UXdwxKByTscXTo1cP8Xe9Fqqnj3nq6QVpKfeyZIAHrxTSdy5fBMeGz2s0mdJ9xAten5mkshvguAMNqWzMQGOqUB0q80U0FFlRfp%2Fhle%2FbUMiOo6GMQ45oEnXJAcRJHsF1luZeYZxFFSSStL10oDfXS9sgQxKzrea%2FRF67dAA04cYHErl3CUFkeCkLbcRuE1uhn2pQ1MNvxQ7gGZt52Dt8BtKRwr4K%2BggfgzDZiip0egPQrfJLAO9COJ%2FzkR7f4a04P4PYGYrBxGt7GwytMmoJNOauvwWHjzxnmdHzeNaph3W9WYqpbU&X-Amz-Signature=30b175405dec74bf118d0bcd8eb96802df37b54338997f3e0abccc181ee97516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6GCDWD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCnL6DpHrYLz1%2BJEDt6eVB9B3CsBztnpeaBmSeMl45gFAIgchU31vtHAjGT0txXUruG42G2nj%2Bp%2F2JhUf75bO9CGKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNdYoV2K4WU8tQOxBCrcA88%2FYpGWEToDK4n4eZYR9dMHcjA1dJoJDiDQV48pmidy0otQ%2B951qMvQdrt5ALC8UfqCxtjleRMPG28aBUIO5ayOz1A3lCfa%2Bc9W7a%2B7A0mKNUvC3GiByUaXu8sb2PPF6p1L8FtXkIexURgMuiPP3o7GWiJKqIzfnH%2FO7eVlWXdg%2BVY7VQBtiD8Sx%2FifOIfhi5QA49Qxy7rPW6NdLhMwR9qykvb2vJ5UcbwnMO11dsZ7eUJ3y7bH13ca7vPIWuEKyoWM9dfr2AN9Lzf6jrn%2Fvis01Kj04fj2o45BcGtAnZaa3v%2FeKkcZ7vS1ZfI7%2B8imfbfg0d6TMhFw7ltYwE%2F%2BKXQIMNKJ0D%2FaaeDbEHN7DccgkVNhY2FvCuwM%2BUu1ZwiYxyUBR%2FLCJ%2BVhcTYWyfXKNh%2FP1DvncQQVzFaKEa6kCTS8xnJ8svzB2qUHlsDIImr6zsUq7mL1ReyVJnLO1uIg%2BLoTR4fH7xvGq6juQP4TXo6fuYm3nxCD0ndKpTwSCB%2FQ2nb35PSvXgNjlQUmhjH13ysyXcXLb3OsGM9RpP0yDJJflhZw2UXdwxKByTscXTo1cP8Xe9Fqqnj3nq6QVpKfeyZIAHrxTSdy5fBMeGz2s0mdJ9xAten5mkshvguAMNqWzMQGOqUB0q80U0FFlRfp%2Fhle%2FbUMiOo6GMQ45oEnXJAcRJHsF1luZeYZxFFSSStL10oDfXS9sgQxKzrea%2FRF67dAA04cYHErl3CUFkeCkLbcRuE1uhn2pQ1MNvxQ7gGZt52Dt8BtKRwr4K%2BggfgzDZiip0egPQrfJLAO9COJ%2FzkR7f4a04P4PYGYrBxGt7GwytMmoJNOauvwWHjzxnmdHzeNaph3W9WYqpbU&X-Amz-Signature=f55ba28c554dae0f6dd77797b0d3bebacc7627154f87e144ad6e0f99fc3c5501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
