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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5DBAUW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRY6J5jlZHiF34PiPbTIK%2FlntcgWErMZrtuxA4mLTyUwIgGxeBxas5jX%2BoGsd85VFkKbqFwP2U%2BfQsy9aLEtQm8bIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJnC9rh3T35A75PT5SrcAwMB2IHYjnj31nSj2S3F6zAdpxEdMGqnEzxbTtU%2BOtn%2B7h99gKYVWJ%2BEMjtlIxBFVKgA0Rs1AiYwVaEjjN1QV6MK2bKWwur0FVY%2BY2L65XmVDn3bqxMLETAJCDP%2B2%2Bm0ZLGjgCNckvetOgdid0HWOTyNk53V28EJWUxF7rwvgq1cAjIkwGnPLXRAeSQilIZtiz1JVAmOTivPD7jxlVA4VyXNhyp1%2FDUaMsBWTb6wsB9FIE2W3Gpp15Qw7Mx8xHPx8gPewQnug9HqiZsgSAsY9sEEvBz7aVYcUuCDfl0LBVrPaISMD5hKu1A6n%2Bk4InjwUJ4QeOlpO%2FcW4VQhMaF7Y%2BdCZtpoBbQvQ4kzXWO4eJRn7fdpwwcVAeSaCPbrYUKFQW5yjkOOCco51M3iuwvKVENRUFMHnUxjJMba4C%2BzuXgFIYwlQty56tAECx1zicDsIXj6GYX%2Bpx9%2FjCgO%2BCstGfIEOjnqqEHqBG0Kkww%2F5ZHKBfXrvYpvsGQDYSRSqDG1cg5N44e02KoaqjlJ2T72W6BdnCs36G9Wk6ZXD4zdtshJegH%2BdsA8CUs97t1sq8VWzXAW1yd5B5wNkN4W5nHl8a%2B8lYSfgnS8Tj2yi3jfkDrpZ%2BuAts9KIW7nTAzLMPr9xb0GOqUBvAFUBL9oBk%2FBGbMzeqOX1hwKtYToPcP4n%2FRIc%2Fa5pRdJumy7YnMcjiz8XHjSon8A2e%2Fa6OgAsRrrNlD8JfJLEJ%2FodM3C4Klf3QX7qrnqvAOeiLMS6JjAfZsHArlTt6fEljQ5df1G7KNcfpd6HyW5W1PcUB%2BNQMAXLIZKnffZY9n%2BQNFzWbbyJP0g2546FMdIjY5oodFFyfDod%2FiDWbNRbzfCMkdX&X-Amz-Signature=f47ce468216dabe3dc8f4402ba9fd2b1a79a03a8e0b774b74f0c443e576b8a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5DBAUW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRY6J5jlZHiF34PiPbTIK%2FlntcgWErMZrtuxA4mLTyUwIgGxeBxas5jX%2BoGsd85VFkKbqFwP2U%2BfQsy9aLEtQm8bIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJnC9rh3T35A75PT5SrcAwMB2IHYjnj31nSj2S3F6zAdpxEdMGqnEzxbTtU%2BOtn%2B7h99gKYVWJ%2BEMjtlIxBFVKgA0Rs1AiYwVaEjjN1QV6MK2bKWwur0FVY%2BY2L65XmVDn3bqxMLETAJCDP%2B2%2Bm0ZLGjgCNckvetOgdid0HWOTyNk53V28EJWUxF7rwvgq1cAjIkwGnPLXRAeSQilIZtiz1JVAmOTivPD7jxlVA4VyXNhyp1%2FDUaMsBWTb6wsB9FIE2W3Gpp15Qw7Mx8xHPx8gPewQnug9HqiZsgSAsY9sEEvBz7aVYcUuCDfl0LBVrPaISMD5hKu1A6n%2Bk4InjwUJ4QeOlpO%2FcW4VQhMaF7Y%2BdCZtpoBbQvQ4kzXWO4eJRn7fdpwwcVAeSaCPbrYUKFQW5yjkOOCco51M3iuwvKVENRUFMHnUxjJMba4C%2BzuXgFIYwlQty56tAECx1zicDsIXj6GYX%2Bpx9%2FjCgO%2BCstGfIEOjnqqEHqBG0Kkww%2F5ZHKBfXrvYpvsGQDYSRSqDG1cg5N44e02KoaqjlJ2T72W6BdnCs36G9Wk6ZXD4zdtshJegH%2BdsA8CUs97t1sq8VWzXAW1yd5B5wNkN4W5nHl8a%2B8lYSfgnS8Tj2yi3jfkDrpZ%2BuAts9KIW7nTAzLMPr9xb0GOqUBvAFUBL9oBk%2FBGbMzeqOX1hwKtYToPcP4n%2FRIc%2Fa5pRdJumy7YnMcjiz8XHjSon8A2e%2Fa6OgAsRrrNlD8JfJLEJ%2FodM3C4Klf3QX7qrnqvAOeiLMS6JjAfZsHArlTt6fEljQ5df1G7KNcfpd6HyW5W1PcUB%2BNQMAXLIZKnffZY9n%2BQNFzWbbyJP0g2546FMdIjY5oodFFyfDod%2FiDWbNRbzfCMkdX&X-Amz-Signature=5d5ad795dff731ac873feb9f83be6d151ab14b54b5f6aab984e3d8eb56382779&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5DBAUW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRY6J5jlZHiF34PiPbTIK%2FlntcgWErMZrtuxA4mLTyUwIgGxeBxas5jX%2BoGsd85VFkKbqFwP2U%2BfQsy9aLEtQm8bIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJnC9rh3T35A75PT5SrcAwMB2IHYjnj31nSj2S3F6zAdpxEdMGqnEzxbTtU%2BOtn%2B7h99gKYVWJ%2BEMjtlIxBFVKgA0Rs1AiYwVaEjjN1QV6MK2bKWwur0FVY%2BY2L65XmVDn3bqxMLETAJCDP%2B2%2Bm0ZLGjgCNckvetOgdid0HWOTyNk53V28EJWUxF7rwvgq1cAjIkwGnPLXRAeSQilIZtiz1JVAmOTivPD7jxlVA4VyXNhyp1%2FDUaMsBWTb6wsB9FIE2W3Gpp15Qw7Mx8xHPx8gPewQnug9HqiZsgSAsY9sEEvBz7aVYcUuCDfl0LBVrPaISMD5hKu1A6n%2Bk4InjwUJ4QeOlpO%2FcW4VQhMaF7Y%2BdCZtpoBbQvQ4kzXWO4eJRn7fdpwwcVAeSaCPbrYUKFQW5yjkOOCco51M3iuwvKVENRUFMHnUxjJMba4C%2BzuXgFIYwlQty56tAECx1zicDsIXj6GYX%2Bpx9%2FjCgO%2BCstGfIEOjnqqEHqBG0Kkww%2F5ZHKBfXrvYpvsGQDYSRSqDG1cg5N44e02KoaqjlJ2T72W6BdnCs36G9Wk6ZXD4zdtshJegH%2BdsA8CUs97t1sq8VWzXAW1yd5B5wNkN4W5nHl8a%2B8lYSfgnS8Tj2yi3jfkDrpZ%2BuAts9KIW7nTAzLMPr9xb0GOqUBvAFUBL9oBk%2FBGbMzeqOX1hwKtYToPcP4n%2FRIc%2Fa5pRdJumy7YnMcjiz8XHjSon8A2e%2Fa6OgAsRrrNlD8JfJLEJ%2FodM3C4Klf3QX7qrnqvAOeiLMS6JjAfZsHArlTt6fEljQ5df1G7KNcfpd6HyW5W1PcUB%2BNQMAXLIZKnffZY9n%2BQNFzWbbyJP0g2546FMdIjY5oodFFyfDod%2FiDWbNRbzfCMkdX&X-Amz-Signature=d3f112091e13accba72ed2bf7d300b27dff2d0c39696c27f4e2a3bfba5c5494e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5DBAUW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRY6J5jlZHiF34PiPbTIK%2FlntcgWErMZrtuxA4mLTyUwIgGxeBxas5jX%2BoGsd85VFkKbqFwP2U%2BfQsy9aLEtQm8bIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJnC9rh3T35A75PT5SrcAwMB2IHYjnj31nSj2S3F6zAdpxEdMGqnEzxbTtU%2BOtn%2B7h99gKYVWJ%2BEMjtlIxBFVKgA0Rs1AiYwVaEjjN1QV6MK2bKWwur0FVY%2BY2L65XmVDn3bqxMLETAJCDP%2B2%2Bm0ZLGjgCNckvetOgdid0HWOTyNk53V28EJWUxF7rwvgq1cAjIkwGnPLXRAeSQilIZtiz1JVAmOTivPD7jxlVA4VyXNhyp1%2FDUaMsBWTb6wsB9FIE2W3Gpp15Qw7Mx8xHPx8gPewQnug9HqiZsgSAsY9sEEvBz7aVYcUuCDfl0LBVrPaISMD5hKu1A6n%2Bk4InjwUJ4QeOlpO%2FcW4VQhMaF7Y%2BdCZtpoBbQvQ4kzXWO4eJRn7fdpwwcVAeSaCPbrYUKFQW5yjkOOCco51M3iuwvKVENRUFMHnUxjJMba4C%2BzuXgFIYwlQty56tAECx1zicDsIXj6GYX%2Bpx9%2FjCgO%2BCstGfIEOjnqqEHqBG0Kkww%2F5ZHKBfXrvYpvsGQDYSRSqDG1cg5N44e02KoaqjlJ2T72W6BdnCs36G9Wk6ZXD4zdtshJegH%2BdsA8CUs97t1sq8VWzXAW1yd5B5wNkN4W5nHl8a%2B8lYSfgnS8Tj2yi3jfkDrpZ%2BuAts9KIW7nTAzLMPr9xb0GOqUBvAFUBL9oBk%2FBGbMzeqOX1hwKtYToPcP4n%2FRIc%2Fa5pRdJumy7YnMcjiz8XHjSon8A2e%2Fa6OgAsRrrNlD8JfJLEJ%2FodM3C4Klf3QX7qrnqvAOeiLMS6JjAfZsHArlTt6fEljQ5df1G7KNcfpd6HyW5W1PcUB%2BNQMAXLIZKnffZY9n%2BQNFzWbbyJP0g2546FMdIjY5oodFFyfDod%2FiDWbNRbzfCMkdX&X-Amz-Signature=2506608fc6aee070a848ba090c7e88424b293ede2366947264f64e29e8bf3cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5DBAUW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRY6J5jlZHiF34PiPbTIK%2FlntcgWErMZrtuxA4mLTyUwIgGxeBxas5jX%2BoGsd85VFkKbqFwP2U%2BfQsy9aLEtQm8bIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJnC9rh3T35A75PT5SrcAwMB2IHYjnj31nSj2S3F6zAdpxEdMGqnEzxbTtU%2BOtn%2B7h99gKYVWJ%2BEMjtlIxBFVKgA0Rs1AiYwVaEjjN1QV6MK2bKWwur0FVY%2BY2L65XmVDn3bqxMLETAJCDP%2B2%2Bm0ZLGjgCNckvetOgdid0HWOTyNk53V28EJWUxF7rwvgq1cAjIkwGnPLXRAeSQilIZtiz1JVAmOTivPD7jxlVA4VyXNhyp1%2FDUaMsBWTb6wsB9FIE2W3Gpp15Qw7Mx8xHPx8gPewQnug9HqiZsgSAsY9sEEvBz7aVYcUuCDfl0LBVrPaISMD5hKu1A6n%2Bk4InjwUJ4QeOlpO%2FcW4VQhMaF7Y%2BdCZtpoBbQvQ4kzXWO4eJRn7fdpwwcVAeSaCPbrYUKFQW5yjkOOCco51M3iuwvKVENRUFMHnUxjJMba4C%2BzuXgFIYwlQty56tAECx1zicDsIXj6GYX%2Bpx9%2FjCgO%2BCstGfIEOjnqqEHqBG0Kkww%2F5ZHKBfXrvYpvsGQDYSRSqDG1cg5N44e02KoaqjlJ2T72W6BdnCs36G9Wk6ZXD4zdtshJegH%2BdsA8CUs97t1sq8VWzXAW1yd5B5wNkN4W5nHl8a%2B8lYSfgnS8Tj2yi3jfkDrpZ%2BuAts9KIW7nTAzLMPr9xb0GOqUBvAFUBL9oBk%2FBGbMzeqOX1hwKtYToPcP4n%2FRIc%2Fa5pRdJumy7YnMcjiz8XHjSon8A2e%2Fa6OgAsRrrNlD8JfJLEJ%2FodM3C4Klf3QX7qrnqvAOeiLMS6JjAfZsHArlTt6fEljQ5df1G7KNcfpd6HyW5W1PcUB%2BNQMAXLIZKnffZY9n%2BQNFzWbbyJP0g2546FMdIjY5oodFFyfDod%2FiDWbNRbzfCMkdX&X-Amz-Signature=aea217dc7f5bf7f15082bdfefafa9a880db12ce2c76585b6fbec6e5cf3d1f63c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
