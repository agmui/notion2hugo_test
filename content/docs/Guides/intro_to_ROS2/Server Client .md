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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHWG6Z6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICR6Q%2Fq2t7ir9cqo7Ksp%2BHTKdT%2FICaB8aQpncs8ONe8%2BAiAmgnmM%2BIpD1L%2BTX%2FYGFPwOKhSJ06L%2BKdnToI1tLm1IdCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtY8%2FOlIwlC3oErQPKtwD5DUOS0OSURMkpEuswrO%2FoQ2YkJAoR2opw9KZHiiSMiNj1EMbX1bFKqZj0STsLxUizvwgiPu%2F38pxTdme7nFLVOQkmkBkBp2bOq1TJ%2FA7wScn1B5vrHOdUALEeci%2FO%2BP3uPYO0gx8ALubIBA7WCRYYPxhsOIJVTCf6GEFDHB0mOxGKzyAQ2CrK1ZJ599qre1cFO4dhn8GgqLmLl23hd9ALf3bAtGAdkxrbzajcmpCnKc7pCHGiQNRsPNRW4Of74rja8AFJvgNeYJEPc0BJKtw%2Bqeu1J6gjkXDPddeubwbxIC42Bd5TGGCn7hthM6fIY%2BOVud%2F3k6sQZnAznYxenXFjT0H95fJzFNdKFvDLQbek12NeuoCbXNkd8GqQNVD9yY%2BVe3qxeS5r1v4L0an%2BykmsHEVCP%2FOzeLLuUNRU%2BcsoZ20NygYoC9AkkBo2rAfTp%2BV7%2FaWM%2BYlfiov8QxHl4d4W%2FVE1abEjHuvWiLQaypMYiE0%2Bq2KTy6Zlp6lVXAfdgEaJGtIJ7d%2FlqNy4sdgK7nU4Pqd6A5yDQ106NyG9Yivkg%2BoTUCKjEs%2FbCtjw8g3Mt8hLpNwdufyM74hQvdmAE8GP71fVrNmZc5wJR4LPZ9r3ooz%2FdK9she%2BH3yVeWQwjaq7vgY6pgFW3CMRRQoEMpo3k9lmFXa2SVK3FHqLEZZponoV4LUlCV%2B7vQ8LtESwDkC2DthRsun6Yi1SixoDgV%2Fupi5jVjRtxULCNCfQZSEGG0b1FLItAXFAmSyZX6DoiO1foOtA81IkRMAhkcKB9KgM2sKRmpBdtn8DYeCyijTycEE6ahYTlgIN5xaw%2BpG0dNAea16pY5cpekU3xn08PYxX15gJfXyX7ZuVhAue&X-Amz-Signature=1dc1554732723cb70205b9a4bcc716601c983d693c26ed780114a994f4f48701&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHWG6Z6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICR6Q%2Fq2t7ir9cqo7Ksp%2BHTKdT%2FICaB8aQpncs8ONe8%2BAiAmgnmM%2BIpD1L%2BTX%2FYGFPwOKhSJ06L%2BKdnToI1tLm1IdCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtY8%2FOlIwlC3oErQPKtwD5DUOS0OSURMkpEuswrO%2FoQ2YkJAoR2opw9KZHiiSMiNj1EMbX1bFKqZj0STsLxUizvwgiPu%2F38pxTdme7nFLVOQkmkBkBp2bOq1TJ%2FA7wScn1B5vrHOdUALEeci%2FO%2BP3uPYO0gx8ALubIBA7WCRYYPxhsOIJVTCf6GEFDHB0mOxGKzyAQ2CrK1ZJ599qre1cFO4dhn8GgqLmLl23hd9ALf3bAtGAdkxrbzajcmpCnKc7pCHGiQNRsPNRW4Of74rja8AFJvgNeYJEPc0BJKtw%2Bqeu1J6gjkXDPddeubwbxIC42Bd5TGGCn7hthM6fIY%2BOVud%2F3k6sQZnAznYxenXFjT0H95fJzFNdKFvDLQbek12NeuoCbXNkd8GqQNVD9yY%2BVe3qxeS5r1v4L0an%2BykmsHEVCP%2FOzeLLuUNRU%2BcsoZ20NygYoC9AkkBo2rAfTp%2BV7%2FaWM%2BYlfiov8QxHl4d4W%2FVE1abEjHuvWiLQaypMYiE0%2Bq2KTy6Zlp6lVXAfdgEaJGtIJ7d%2FlqNy4sdgK7nU4Pqd6A5yDQ106NyG9Yivkg%2BoTUCKjEs%2FbCtjw8g3Mt8hLpNwdufyM74hQvdmAE8GP71fVrNmZc5wJR4LPZ9r3ooz%2FdK9she%2BH3yVeWQwjaq7vgY6pgFW3CMRRQoEMpo3k9lmFXa2SVK3FHqLEZZponoV4LUlCV%2B7vQ8LtESwDkC2DthRsun6Yi1SixoDgV%2Fupi5jVjRtxULCNCfQZSEGG0b1FLItAXFAmSyZX6DoiO1foOtA81IkRMAhkcKB9KgM2sKRmpBdtn8DYeCyijTycEE6ahYTlgIN5xaw%2BpG0dNAea16pY5cpekU3xn08PYxX15gJfXyX7ZuVhAue&X-Amz-Signature=aa249066bc1f9f3abdcfb81cdddf33b6d15575cd2d25766c2a944fcac5afd99c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHWG6Z6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICR6Q%2Fq2t7ir9cqo7Ksp%2BHTKdT%2FICaB8aQpncs8ONe8%2BAiAmgnmM%2BIpD1L%2BTX%2FYGFPwOKhSJ06L%2BKdnToI1tLm1IdCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtY8%2FOlIwlC3oErQPKtwD5DUOS0OSURMkpEuswrO%2FoQ2YkJAoR2opw9KZHiiSMiNj1EMbX1bFKqZj0STsLxUizvwgiPu%2F38pxTdme7nFLVOQkmkBkBp2bOq1TJ%2FA7wScn1B5vrHOdUALEeci%2FO%2BP3uPYO0gx8ALubIBA7WCRYYPxhsOIJVTCf6GEFDHB0mOxGKzyAQ2CrK1ZJ599qre1cFO4dhn8GgqLmLl23hd9ALf3bAtGAdkxrbzajcmpCnKc7pCHGiQNRsPNRW4Of74rja8AFJvgNeYJEPc0BJKtw%2Bqeu1J6gjkXDPddeubwbxIC42Bd5TGGCn7hthM6fIY%2BOVud%2F3k6sQZnAznYxenXFjT0H95fJzFNdKFvDLQbek12NeuoCbXNkd8GqQNVD9yY%2BVe3qxeS5r1v4L0an%2BykmsHEVCP%2FOzeLLuUNRU%2BcsoZ20NygYoC9AkkBo2rAfTp%2BV7%2FaWM%2BYlfiov8QxHl4d4W%2FVE1abEjHuvWiLQaypMYiE0%2Bq2KTy6Zlp6lVXAfdgEaJGtIJ7d%2FlqNy4sdgK7nU4Pqd6A5yDQ106NyG9Yivkg%2BoTUCKjEs%2FbCtjw8g3Mt8hLpNwdufyM74hQvdmAE8GP71fVrNmZc5wJR4LPZ9r3ooz%2FdK9she%2BH3yVeWQwjaq7vgY6pgFW3CMRRQoEMpo3k9lmFXa2SVK3FHqLEZZponoV4LUlCV%2B7vQ8LtESwDkC2DthRsun6Yi1SixoDgV%2Fupi5jVjRtxULCNCfQZSEGG0b1FLItAXFAmSyZX6DoiO1foOtA81IkRMAhkcKB9KgM2sKRmpBdtn8DYeCyijTycEE6ahYTlgIN5xaw%2BpG0dNAea16pY5cpekU3xn08PYxX15gJfXyX7ZuVhAue&X-Amz-Signature=b6939a59927477efe38ad785ddac693ba610ebf4bdf4eff6c4a5ad71f6f10617&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHWG6Z6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICR6Q%2Fq2t7ir9cqo7Ksp%2BHTKdT%2FICaB8aQpncs8ONe8%2BAiAmgnmM%2BIpD1L%2BTX%2FYGFPwOKhSJ06L%2BKdnToI1tLm1IdCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtY8%2FOlIwlC3oErQPKtwD5DUOS0OSURMkpEuswrO%2FoQ2YkJAoR2opw9KZHiiSMiNj1EMbX1bFKqZj0STsLxUizvwgiPu%2F38pxTdme7nFLVOQkmkBkBp2bOq1TJ%2FA7wScn1B5vrHOdUALEeci%2FO%2BP3uPYO0gx8ALubIBA7WCRYYPxhsOIJVTCf6GEFDHB0mOxGKzyAQ2CrK1ZJ599qre1cFO4dhn8GgqLmLl23hd9ALf3bAtGAdkxrbzajcmpCnKc7pCHGiQNRsPNRW4Of74rja8AFJvgNeYJEPc0BJKtw%2Bqeu1J6gjkXDPddeubwbxIC42Bd5TGGCn7hthM6fIY%2BOVud%2F3k6sQZnAznYxenXFjT0H95fJzFNdKFvDLQbek12NeuoCbXNkd8GqQNVD9yY%2BVe3qxeS5r1v4L0an%2BykmsHEVCP%2FOzeLLuUNRU%2BcsoZ20NygYoC9AkkBo2rAfTp%2BV7%2FaWM%2BYlfiov8QxHl4d4W%2FVE1abEjHuvWiLQaypMYiE0%2Bq2KTy6Zlp6lVXAfdgEaJGtIJ7d%2FlqNy4sdgK7nU4Pqd6A5yDQ106NyG9Yivkg%2BoTUCKjEs%2FbCtjw8g3Mt8hLpNwdufyM74hQvdmAE8GP71fVrNmZc5wJR4LPZ9r3ooz%2FdK9she%2BH3yVeWQwjaq7vgY6pgFW3CMRRQoEMpo3k9lmFXa2SVK3FHqLEZZponoV4LUlCV%2B7vQ8LtESwDkC2DthRsun6Yi1SixoDgV%2Fupi5jVjRtxULCNCfQZSEGG0b1FLItAXFAmSyZX6DoiO1foOtA81IkRMAhkcKB9KgM2sKRmpBdtn8DYeCyijTycEE6ahYTlgIN5xaw%2BpG0dNAea16pY5cpekU3xn08PYxX15gJfXyX7ZuVhAue&X-Amz-Signature=d428a23864d5d5f9046e59c33425fb4cf17c45156322060f6e86490054b9b06c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHWG6Z6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICR6Q%2Fq2t7ir9cqo7Ksp%2BHTKdT%2FICaB8aQpncs8ONe8%2BAiAmgnmM%2BIpD1L%2BTX%2FYGFPwOKhSJ06L%2BKdnToI1tLm1IdCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtY8%2FOlIwlC3oErQPKtwD5DUOS0OSURMkpEuswrO%2FoQ2YkJAoR2opw9KZHiiSMiNj1EMbX1bFKqZj0STsLxUizvwgiPu%2F38pxTdme7nFLVOQkmkBkBp2bOq1TJ%2FA7wScn1B5vrHOdUALEeci%2FO%2BP3uPYO0gx8ALubIBA7WCRYYPxhsOIJVTCf6GEFDHB0mOxGKzyAQ2CrK1ZJ599qre1cFO4dhn8GgqLmLl23hd9ALf3bAtGAdkxrbzajcmpCnKc7pCHGiQNRsPNRW4Of74rja8AFJvgNeYJEPc0BJKtw%2Bqeu1J6gjkXDPddeubwbxIC42Bd5TGGCn7hthM6fIY%2BOVud%2F3k6sQZnAznYxenXFjT0H95fJzFNdKFvDLQbek12NeuoCbXNkd8GqQNVD9yY%2BVe3qxeS5r1v4L0an%2BykmsHEVCP%2FOzeLLuUNRU%2BcsoZ20NygYoC9AkkBo2rAfTp%2BV7%2FaWM%2BYlfiov8QxHl4d4W%2FVE1abEjHuvWiLQaypMYiE0%2Bq2KTy6Zlp6lVXAfdgEaJGtIJ7d%2FlqNy4sdgK7nU4Pqd6A5yDQ106NyG9Yivkg%2BoTUCKjEs%2FbCtjw8g3Mt8hLpNwdufyM74hQvdmAE8GP71fVrNmZc5wJR4LPZ9r3ooz%2FdK9she%2BH3yVeWQwjaq7vgY6pgFW3CMRRQoEMpo3k9lmFXa2SVK3FHqLEZZponoV4LUlCV%2B7vQ8LtESwDkC2DthRsun6Yi1SixoDgV%2Fupi5jVjRtxULCNCfQZSEGG0b1FLItAXFAmSyZX6DoiO1foOtA81IkRMAhkcKB9KgM2sKRmpBdtn8DYeCyijTycEE6ahYTlgIN5xaw%2BpG0dNAea16pY5cpekU3xn08PYxX15gJfXyX7ZuVhAue&X-Amz-Signature=bc1e996912050062351438021349d1fe0312013f15324155337601f486eb737e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
