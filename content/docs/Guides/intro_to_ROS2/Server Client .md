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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZNXMCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFZP1TTI9M2q%2FbNyXiSCi0%2BbzcqqPtC4EXbwGIJpPB6yAiEA4471xqpdhvyteG2r8j%2FdHBbwKhapsroVbY%2BbjklCBxQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqpRD%2FqclVi8%2FtXYCrcA5bHIVlzB5HnA%2Fi6%2BHDxJYlIKNPMKYFkrbAEqDDGI4me%2F3uVWKYk5UkOGRR8%2BG5zwtqjMulzZaiIfIO0qToakT%2FRaBnfvHvTvj8ZTftIzQYH93VdYcEtsolRb6KE4OORbxVuuQILVeRGjfrxpR8i%2Bv5MoBMh7Jm1LiB6RiqYpOc5X5LaHcy0EJI9Q6gq3JrXRFOMU6OHDw5FiIeVwzSzidrE6ivQyr6L6zs2rwhnvX4HrRxn3rdb9q1847ElQSGsh5%2FSrWOW3LGfRUpnvbc6mlBAYeDuvfTAsfC42UzFzGA%2B9CsOugnpJbWUcf6YFqKDWY0EuLjS%2FY33ZUOe8iDzn%2FPSCcex2cfnMOgEwAg4D4jNQbiSYGf%2F4JcxKOsf1hZF3W0fiqjt3r%2FK%2BJBJYS0ZY3%2Bky8M4q1NMcEmknsGsdjHYv87QNS3zoPDf%2BsSkxjsU6SLfxnTLahr7witSt9r5s4N71t1Qe99Xql%2Fpev0TQQuWspRGwk2kBGG5gpfDxBOCuve6AMA3f33VOWQvnMAEa3nCj3A%2B1qFQ3qrN%2BibzT0RKK2w3i5USJlKiAaWM7tAWpYOM1WWLSxbniZx6dOgK6c7qNh4Gw7rRkxBgk%2B%2BfwRgzQitzqdWa95825vFTMJa2pr8GOqUBQ3%2FWEEVDLo0UZCdFahpvpDYNFg5Q2huJLWfbtn%2FMNuuRXrRO7TFuRXC3dkKDc0uxYBMaFU7QwD8Owr9H3iY4flc7f6HbzNnyhSTof%2ForR7hJ9fNAyzS2iFXLmQWX2tYtw7WpzDbyjCqyKlp2%2BNUOK%2BWb6fC%2F5k374R4pvResoM0rUAkG7%2FeTZ5hn1QP2jeweLtHmePj7Z9rnwzrtCWwriyJxXK41&X-Amz-Signature=5f1f381fd5646d30ec06518e25b2d986d87a4989774e6f2b8384561c4c797b48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZNXMCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFZP1TTI9M2q%2FbNyXiSCi0%2BbzcqqPtC4EXbwGIJpPB6yAiEA4471xqpdhvyteG2r8j%2FdHBbwKhapsroVbY%2BbjklCBxQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqpRD%2FqclVi8%2FtXYCrcA5bHIVlzB5HnA%2Fi6%2BHDxJYlIKNPMKYFkrbAEqDDGI4me%2F3uVWKYk5UkOGRR8%2BG5zwtqjMulzZaiIfIO0qToakT%2FRaBnfvHvTvj8ZTftIzQYH93VdYcEtsolRb6KE4OORbxVuuQILVeRGjfrxpR8i%2Bv5MoBMh7Jm1LiB6RiqYpOc5X5LaHcy0EJI9Q6gq3JrXRFOMU6OHDw5FiIeVwzSzidrE6ivQyr6L6zs2rwhnvX4HrRxn3rdb9q1847ElQSGsh5%2FSrWOW3LGfRUpnvbc6mlBAYeDuvfTAsfC42UzFzGA%2B9CsOugnpJbWUcf6YFqKDWY0EuLjS%2FY33ZUOe8iDzn%2FPSCcex2cfnMOgEwAg4D4jNQbiSYGf%2F4JcxKOsf1hZF3W0fiqjt3r%2FK%2BJBJYS0ZY3%2Bky8M4q1NMcEmknsGsdjHYv87QNS3zoPDf%2BsSkxjsU6SLfxnTLahr7witSt9r5s4N71t1Qe99Xql%2Fpev0TQQuWspRGwk2kBGG5gpfDxBOCuve6AMA3f33VOWQvnMAEa3nCj3A%2B1qFQ3qrN%2BibzT0RKK2w3i5USJlKiAaWM7tAWpYOM1WWLSxbniZx6dOgK6c7qNh4Gw7rRkxBgk%2B%2BfwRgzQitzqdWa95825vFTMJa2pr8GOqUBQ3%2FWEEVDLo0UZCdFahpvpDYNFg5Q2huJLWfbtn%2FMNuuRXrRO7TFuRXC3dkKDc0uxYBMaFU7QwD8Owr9H3iY4flc7f6HbzNnyhSTof%2ForR7hJ9fNAyzS2iFXLmQWX2tYtw7WpzDbyjCqyKlp2%2BNUOK%2BWb6fC%2F5k374R4pvResoM0rUAkG7%2FeTZ5hn1QP2jeweLtHmePj7Z9rnwzrtCWwriyJxXK41&X-Amz-Signature=e7745cc15c017b05339caca5feea66abd15b0c66eba7d8a94d0bae188a816f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZNXMCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFZP1TTI9M2q%2FbNyXiSCi0%2BbzcqqPtC4EXbwGIJpPB6yAiEA4471xqpdhvyteG2r8j%2FdHBbwKhapsroVbY%2BbjklCBxQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqpRD%2FqclVi8%2FtXYCrcA5bHIVlzB5HnA%2Fi6%2BHDxJYlIKNPMKYFkrbAEqDDGI4me%2F3uVWKYk5UkOGRR8%2BG5zwtqjMulzZaiIfIO0qToakT%2FRaBnfvHvTvj8ZTftIzQYH93VdYcEtsolRb6KE4OORbxVuuQILVeRGjfrxpR8i%2Bv5MoBMh7Jm1LiB6RiqYpOc5X5LaHcy0EJI9Q6gq3JrXRFOMU6OHDw5FiIeVwzSzidrE6ivQyr6L6zs2rwhnvX4HrRxn3rdb9q1847ElQSGsh5%2FSrWOW3LGfRUpnvbc6mlBAYeDuvfTAsfC42UzFzGA%2B9CsOugnpJbWUcf6YFqKDWY0EuLjS%2FY33ZUOe8iDzn%2FPSCcex2cfnMOgEwAg4D4jNQbiSYGf%2F4JcxKOsf1hZF3W0fiqjt3r%2FK%2BJBJYS0ZY3%2Bky8M4q1NMcEmknsGsdjHYv87QNS3zoPDf%2BsSkxjsU6SLfxnTLahr7witSt9r5s4N71t1Qe99Xql%2Fpev0TQQuWspRGwk2kBGG5gpfDxBOCuve6AMA3f33VOWQvnMAEa3nCj3A%2B1qFQ3qrN%2BibzT0RKK2w3i5USJlKiAaWM7tAWpYOM1WWLSxbniZx6dOgK6c7qNh4Gw7rRkxBgk%2B%2BfwRgzQitzqdWa95825vFTMJa2pr8GOqUBQ3%2FWEEVDLo0UZCdFahpvpDYNFg5Q2huJLWfbtn%2FMNuuRXrRO7TFuRXC3dkKDc0uxYBMaFU7QwD8Owr9H3iY4flc7f6HbzNnyhSTof%2ForR7hJ9fNAyzS2iFXLmQWX2tYtw7WpzDbyjCqyKlp2%2BNUOK%2BWb6fC%2F5k374R4pvResoM0rUAkG7%2FeTZ5hn1QP2jeweLtHmePj7Z9rnwzrtCWwriyJxXK41&X-Amz-Signature=fa64ef0a59fc305d501a9e945ebe1ca87285f76f8ef580c45cd29e1846fee038&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZNXMCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFZP1TTI9M2q%2FbNyXiSCi0%2BbzcqqPtC4EXbwGIJpPB6yAiEA4471xqpdhvyteG2r8j%2FdHBbwKhapsroVbY%2BbjklCBxQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqpRD%2FqclVi8%2FtXYCrcA5bHIVlzB5HnA%2Fi6%2BHDxJYlIKNPMKYFkrbAEqDDGI4me%2F3uVWKYk5UkOGRR8%2BG5zwtqjMulzZaiIfIO0qToakT%2FRaBnfvHvTvj8ZTftIzQYH93VdYcEtsolRb6KE4OORbxVuuQILVeRGjfrxpR8i%2Bv5MoBMh7Jm1LiB6RiqYpOc5X5LaHcy0EJI9Q6gq3JrXRFOMU6OHDw5FiIeVwzSzidrE6ivQyr6L6zs2rwhnvX4HrRxn3rdb9q1847ElQSGsh5%2FSrWOW3LGfRUpnvbc6mlBAYeDuvfTAsfC42UzFzGA%2B9CsOugnpJbWUcf6YFqKDWY0EuLjS%2FY33ZUOe8iDzn%2FPSCcex2cfnMOgEwAg4D4jNQbiSYGf%2F4JcxKOsf1hZF3W0fiqjt3r%2FK%2BJBJYS0ZY3%2Bky8M4q1NMcEmknsGsdjHYv87QNS3zoPDf%2BsSkxjsU6SLfxnTLahr7witSt9r5s4N71t1Qe99Xql%2Fpev0TQQuWspRGwk2kBGG5gpfDxBOCuve6AMA3f33VOWQvnMAEa3nCj3A%2B1qFQ3qrN%2BibzT0RKK2w3i5USJlKiAaWM7tAWpYOM1WWLSxbniZx6dOgK6c7qNh4Gw7rRkxBgk%2B%2BfwRgzQitzqdWa95825vFTMJa2pr8GOqUBQ3%2FWEEVDLo0UZCdFahpvpDYNFg5Q2huJLWfbtn%2FMNuuRXrRO7TFuRXC3dkKDc0uxYBMaFU7QwD8Owr9H3iY4flc7f6HbzNnyhSTof%2ForR7hJ9fNAyzS2iFXLmQWX2tYtw7WpzDbyjCqyKlp2%2BNUOK%2BWb6fC%2F5k374R4pvResoM0rUAkG7%2FeTZ5hn1QP2jeweLtHmePj7Z9rnwzrtCWwriyJxXK41&X-Amz-Signature=8d3ade793b520ea2d29621ba16860e12eb00f7e72f0aa79ee3f19ffe9a199d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZNXMCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFZP1TTI9M2q%2FbNyXiSCi0%2BbzcqqPtC4EXbwGIJpPB6yAiEA4471xqpdhvyteG2r8j%2FdHBbwKhapsroVbY%2BbjklCBxQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqpRD%2FqclVi8%2FtXYCrcA5bHIVlzB5HnA%2Fi6%2BHDxJYlIKNPMKYFkrbAEqDDGI4me%2F3uVWKYk5UkOGRR8%2BG5zwtqjMulzZaiIfIO0qToakT%2FRaBnfvHvTvj8ZTftIzQYH93VdYcEtsolRb6KE4OORbxVuuQILVeRGjfrxpR8i%2Bv5MoBMh7Jm1LiB6RiqYpOc5X5LaHcy0EJI9Q6gq3JrXRFOMU6OHDw5FiIeVwzSzidrE6ivQyr6L6zs2rwhnvX4HrRxn3rdb9q1847ElQSGsh5%2FSrWOW3LGfRUpnvbc6mlBAYeDuvfTAsfC42UzFzGA%2B9CsOugnpJbWUcf6YFqKDWY0EuLjS%2FY33ZUOe8iDzn%2FPSCcex2cfnMOgEwAg4D4jNQbiSYGf%2F4JcxKOsf1hZF3W0fiqjt3r%2FK%2BJBJYS0ZY3%2Bky8M4q1NMcEmknsGsdjHYv87QNS3zoPDf%2BsSkxjsU6SLfxnTLahr7witSt9r5s4N71t1Qe99Xql%2Fpev0TQQuWspRGwk2kBGG5gpfDxBOCuve6AMA3f33VOWQvnMAEa3nCj3A%2B1qFQ3qrN%2BibzT0RKK2w3i5USJlKiAaWM7tAWpYOM1WWLSxbniZx6dOgK6c7qNh4Gw7rRkxBgk%2B%2BfwRgzQitzqdWa95825vFTMJa2pr8GOqUBQ3%2FWEEVDLo0UZCdFahpvpDYNFg5Q2huJLWfbtn%2FMNuuRXrRO7TFuRXC3dkKDc0uxYBMaFU7QwD8Owr9H3iY4flc7f6HbzNnyhSTof%2ForR7hJ9fNAyzS2iFXLmQWX2tYtw7WpzDbyjCqyKlp2%2BNUOK%2BWb6fC%2F5k374R4pvResoM0rUAkG7%2FeTZ5hn1QP2jeweLtHmePj7Z9rnwzrtCWwriyJxXK41&X-Amz-Signature=40f128bb58b62d0b60f059914f10b8b2ab87fb98cb4f448e7882737547545f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
