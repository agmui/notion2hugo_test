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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGIVEZM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICHmvaD8PW1lrHXrLlM04VroRWBfksB534ia9SyEvKbeAiBKavvbpEooNAj3dBZuwUR%2FuZi4s%2FlcZsrOwdikEICkDCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcs2%2F7o%2B5cVNPiivKtwDJqzkF0YD9Wo1ILAJ8mccbJ2YDuPqLY286o9P8%2B2UcPI8qWW8GFWC7oj4eRPyEHM%2FPGfXeZr7vpR3UQdWEpauMeGnSOu%2FSrT5tfQsMB9nbIG1lEaIfU%2FzvBHQVWqj3vn7YsDxcQEQbrFA3Dq%2F3WP8nol8t5eSHH65O0fJoBq8S0bydCPPAcVuOxsxr4WoyT1HdAqAd1v9m9wXxrLfbrjPPHMMR1GF1BlBhq1C6n28CHtKGebe3ZENdW1dCA7ZaPNuE8c%2Bk%2Bb5xLx%2B0hZZRYt%2BaUsZyauvU%2BWbUVQDb33z0SPFKhivMZhOf16ILh1T6AMEKs%2B0LEsxpVQlYA6AnynF1DP%2BrhK2JMm1Vg1piiFYz%2BbNu4%2FDsQoLI6jjUWHI%2FFAFzEkf7uymV2mOfKViZB4W%2BmLvWKdPheapg9X1PsCox4FIfMwV%2FX9YJgtgRfO%2BZwgqCtIpSoqpaqfZRMr7kMY%2FshrnogExwp2g7SuxuU3hYvH6zq4h5hX1uZqKGj1mULJwLvxqT2%2BnBTZ0j1fKqXhWbzKwK1S9wEo6jZizJCn19jIjhbxI5etVucdXBZQspc3s15KHXlQ3KMQtJnoCeDwhL8tI2kqF8qCsGsel1eimysE8sBeRimvK0GuWOOAw%2BNjawAY6pgH2%2FGfw%2F5te0DS0bXtlx5isCJ8rJCRr%2B2%2Fzzyx9LfI6y0uslVJDfcgjbE62BXi2esCpoH2wSIiWRhexG%2BYuIcDMXgnzM2BnQ9Q1C57Xh0X2gckPd%2FAOMsHq2mpCdz%2BTe5yBAZD9F8u18%2F50kZFAfgym9Op3wRMPcggSSgzQwujQ6T0IqXa9fl7ucFlEZ9CzENjXwAJMyMj%2BeUMqdzyKMHIDF1VZPlHq&X-Amz-Signature=aff3f19eff8933df48ac7681df118e8491d994e6b9ebd09a110dcc247a44c15e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGIVEZM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICHmvaD8PW1lrHXrLlM04VroRWBfksB534ia9SyEvKbeAiBKavvbpEooNAj3dBZuwUR%2FuZi4s%2FlcZsrOwdikEICkDCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcs2%2F7o%2B5cVNPiivKtwDJqzkF0YD9Wo1ILAJ8mccbJ2YDuPqLY286o9P8%2B2UcPI8qWW8GFWC7oj4eRPyEHM%2FPGfXeZr7vpR3UQdWEpauMeGnSOu%2FSrT5tfQsMB9nbIG1lEaIfU%2FzvBHQVWqj3vn7YsDxcQEQbrFA3Dq%2F3WP8nol8t5eSHH65O0fJoBq8S0bydCPPAcVuOxsxr4WoyT1HdAqAd1v9m9wXxrLfbrjPPHMMR1GF1BlBhq1C6n28CHtKGebe3ZENdW1dCA7ZaPNuE8c%2Bk%2Bb5xLx%2B0hZZRYt%2BaUsZyauvU%2BWbUVQDb33z0SPFKhivMZhOf16ILh1T6AMEKs%2B0LEsxpVQlYA6AnynF1DP%2BrhK2JMm1Vg1piiFYz%2BbNu4%2FDsQoLI6jjUWHI%2FFAFzEkf7uymV2mOfKViZB4W%2BmLvWKdPheapg9X1PsCox4FIfMwV%2FX9YJgtgRfO%2BZwgqCtIpSoqpaqfZRMr7kMY%2FshrnogExwp2g7SuxuU3hYvH6zq4h5hX1uZqKGj1mULJwLvxqT2%2BnBTZ0j1fKqXhWbzKwK1S9wEo6jZizJCn19jIjhbxI5etVucdXBZQspc3s15KHXlQ3KMQtJnoCeDwhL8tI2kqF8qCsGsel1eimysE8sBeRimvK0GuWOOAw%2BNjawAY6pgH2%2FGfw%2F5te0DS0bXtlx5isCJ8rJCRr%2B2%2Fzzyx9LfI6y0uslVJDfcgjbE62BXi2esCpoH2wSIiWRhexG%2BYuIcDMXgnzM2BnQ9Q1C57Xh0X2gckPd%2FAOMsHq2mpCdz%2BTe5yBAZD9F8u18%2F50kZFAfgym9Op3wRMPcggSSgzQwujQ6T0IqXa9fl7ucFlEZ9CzENjXwAJMyMj%2BeUMqdzyKMHIDF1VZPlHq&X-Amz-Signature=0dd89438b24d81e2e03f16667166511504443f7f30a6a68c2dad653da513549d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGIVEZM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICHmvaD8PW1lrHXrLlM04VroRWBfksB534ia9SyEvKbeAiBKavvbpEooNAj3dBZuwUR%2FuZi4s%2FlcZsrOwdikEICkDCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcs2%2F7o%2B5cVNPiivKtwDJqzkF0YD9Wo1ILAJ8mccbJ2YDuPqLY286o9P8%2B2UcPI8qWW8GFWC7oj4eRPyEHM%2FPGfXeZr7vpR3UQdWEpauMeGnSOu%2FSrT5tfQsMB9nbIG1lEaIfU%2FzvBHQVWqj3vn7YsDxcQEQbrFA3Dq%2F3WP8nol8t5eSHH65O0fJoBq8S0bydCPPAcVuOxsxr4WoyT1HdAqAd1v9m9wXxrLfbrjPPHMMR1GF1BlBhq1C6n28CHtKGebe3ZENdW1dCA7ZaPNuE8c%2Bk%2Bb5xLx%2B0hZZRYt%2BaUsZyauvU%2BWbUVQDb33z0SPFKhivMZhOf16ILh1T6AMEKs%2B0LEsxpVQlYA6AnynF1DP%2BrhK2JMm1Vg1piiFYz%2BbNu4%2FDsQoLI6jjUWHI%2FFAFzEkf7uymV2mOfKViZB4W%2BmLvWKdPheapg9X1PsCox4FIfMwV%2FX9YJgtgRfO%2BZwgqCtIpSoqpaqfZRMr7kMY%2FshrnogExwp2g7SuxuU3hYvH6zq4h5hX1uZqKGj1mULJwLvxqT2%2BnBTZ0j1fKqXhWbzKwK1S9wEo6jZizJCn19jIjhbxI5etVucdXBZQspc3s15KHXlQ3KMQtJnoCeDwhL8tI2kqF8qCsGsel1eimysE8sBeRimvK0GuWOOAw%2BNjawAY6pgH2%2FGfw%2F5te0DS0bXtlx5isCJ8rJCRr%2B2%2Fzzyx9LfI6y0uslVJDfcgjbE62BXi2esCpoH2wSIiWRhexG%2BYuIcDMXgnzM2BnQ9Q1C57Xh0X2gckPd%2FAOMsHq2mpCdz%2BTe5yBAZD9F8u18%2F50kZFAfgym9Op3wRMPcggSSgzQwujQ6T0IqXa9fl7ucFlEZ9CzENjXwAJMyMj%2BeUMqdzyKMHIDF1VZPlHq&X-Amz-Signature=d2a99fad2ed85283abe8c0be8b332cfb1b25d63ff69db044426f27ad9ef552f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGIVEZM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICHmvaD8PW1lrHXrLlM04VroRWBfksB534ia9SyEvKbeAiBKavvbpEooNAj3dBZuwUR%2FuZi4s%2FlcZsrOwdikEICkDCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcs2%2F7o%2B5cVNPiivKtwDJqzkF0YD9Wo1ILAJ8mccbJ2YDuPqLY286o9P8%2B2UcPI8qWW8GFWC7oj4eRPyEHM%2FPGfXeZr7vpR3UQdWEpauMeGnSOu%2FSrT5tfQsMB9nbIG1lEaIfU%2FzvBHQVWqj3vn7YsDxcQEQbrFA3Dq%2F3WP8nol8t5eSHH65O0fJoBq8S0bydCPPAcVuOxsxr4WoyT1HdAqAd1v9m9wXxrLfbrjPPHMMR1GF1BlBhq1C6n28CHtKGebe3ZENdW1dCA7ZaPNuE8c%2Bk%2Bb5xLx%2B0hZZRYt%2BaUsZyauvU%2BWbUVQDb33z0SPFKhivMZhOf16ILh1T6AMEKs%2B0LEsxpVQlYA6AnynF1DP%2BrhK2JMm1Vg1piiFYz%2BbNu4%2FDsQoLI6jjUWHI%2FFAFzEkf7uymV2mOfKViZB4W%2BmLvWKdPheapg9X1PsCox4FIfMwV%2FX9YJgtgRfO%2BZwgqCtIpSoqpaqfZRMr7kMY%2FshrnogExwp2g7SuxuU3hYvH6zq4h5hX1uZqKGj1mULJwLvxqT2%2BnBTZ0j1fKqXhWbzKwK1S9wEo6jZizJCn19jIjhbxI5etVucdXBZQspc3s15KHXlQ3KMQtJnoCeDwhL8tI2kqF8qCsGsel1eimysE8sBeRimvK0GuWOOAw%2BNjawAY6pgH2%2FGfw%2F5te0DS0bXtlx5isCJ8rJCRr%2B2%2Fzzyx9LfI6y0uslVJDfcgjbE62BXi2esCpoH2wSIiWRhexG%2BYuIcDMXgnzM2BnQ9Q1C57Xh0X2gckPd%2FAOMsHq2mpCdz%2BTe5yBAZD9F8u18%2F50kZFAfgym9Op3wRMPcggSSgzQwujQ6T0IqXa9fl7ucFlEZ9CzENjXwAJMyMj%2BeUMqdzyKMHIDF1VZPlHq&X-Amz-Signature=dae02f2f2d3cd141ccfb88b059780bb36cdff6f86e8d92cb23c510439d6db6ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGIVEZM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICHmvaD8PW1lrHXrLlM04VroRWBfksB534ia9SyEvKbeAiBKavvbpEooNAj3dBZuwUR%2FuZi4s%2FlcZsrOwdikEICkDCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcs2%2F7o%2B5cVNPiivKtwDJqzkF0YD9Wo1ILAJ8mccbJ2YDuPqLY286o9P8%2B2UcPI8qWW8GFWC7oj4eRPyEHM%2FPGfXeZr7vpR3UQdWEpauMeGnSOu%2FSrT5tfQsMB9nbIG1lEaIfU%2FzvBHQVWqj3vn7YsDxcQEQbrFA3Dq%2F3WP8nol8t5eSHH65O0fJoBq8S0bydCPPAcVuOxsxr4WoyT1HdAqAd1v9m9wXxrLfbrjPPHMMR1GF1BlBhq1C6n28CHtKGebe3ZENdW1dCA7ZaPNuE8c%2Bk%2Bb5xLx%2B0hZZRYt%2BaUsZyauvU%2BWbUVQDb33z0SPFKhivMZhOf16ILh1T6AMEKs%2B0LEsxpVQlYA6AnynF1DP%2BrhK2JMm1Vg1piiFYz%2BbNu4%2FDsQoLI6jjUWHI%2FFAFzEkf7uymV2mOfKViZB4W%2BmLvWKdPheapg9X1PsCox4FIfMwV%2FX9YJgtgRfO%2BZwgqCtIpSoqpaqfZRMr7kMY%2FshrnogExwp2g7SuxuU3hYvH6zq4h5hX1uZqKGj1mULJwLvxqT2%2BnBTZ0j1fKqXhWbzKwK1S9wEo6jZizJCn19jIjhbxI5etVucdXBZQspc3s15KHXlQ3KMQtJnoCeDwhL8tI2kqF8qCsGsel1eimysE8sBeRimvK0GuWOOAw%2BNjawAY6pgH2%2FGfw%2F5te0DS0bXtlx5isCJ8rJCRr%2B2%2Fzzyx9LfI6y0uslVJDfcgjbE62BXi2esCpoH2wSIiWRhexG%2BYuIcDMXgnzM2BnQ9Q1C57Xh0X2gckPd%2FAOMsHq2mpCdz%2BTe5yBAZD9F8u18%2F50kZFAfgym9Op3wRMPcggSSgzQwujQ6T0IqXa9fl7ucFlEZ9CzENjXwAJMyMj%2BeUMqdzyKMHIDF1VZPlHq&X-Amz-Signature=78ce02b8a94fdb7fd7bcc498cd1200e535b2c2622802a2674a052425212821ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
