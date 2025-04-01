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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKC55FI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCNMvMQQgyEdo15AW0cMPkF5CdQtuF2eW90DQokBzQy4wIhAO6GZ85piWkX1TMkKp1XlEOyuSarxxVXXG7BpintNO1VKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJU5RD5j3AEzNLKtEq3ANnyiLcn9suXmQlNdhX%2BenSqIyjx1N3EVf4W9Os6cNtJCpedZDSZXkeGDdwujZwfp7Upkq2BEb%2BJmiksQe6dhhCgIv6Kiam59yDcH%2FJ3%2B1GnOYc1E96XvOPVUXfLTd8kb5GFRha%2F2JJUL1xL2f54dzbRpKOA%2BoIoWblm0nsSmzz8L8BRu1PhPLK%2FkxgO%2BUvbYsOqaX2NSLepf0AOQebevFxSNJlZCTdrfDy76pgWy2EuyuI3eldBNUZeOik0W3h6IGqJ14Cw9szcT3aAkOibUmhEuwACzajh0IdkZnJPANAEG0c3ApEhefj3E7DDC1WvwjtC8OiK%2FN%2F3eKyTzHxP8ygscARne7wKmoyLovUE0YscTY3U6VlbD8cIPJ7l2LOwfJwTSYNtrCgU4DiZAsz%2FVx5ZF4QHP3IYjbTB8AabRpBw3tKN3%2BH8zD1pn%2B%2B2Axix3q%2FLAxNMFXhoGqOoAK5xwNR24TTVzCVv%2F1%2FJLGcbXX5Q7djnhKzFB7N8H2MwasVrwGSecuJOJf8t6EPUe9S608wL4e8TK8CbDApfE92Jht7mb2fd5sDGsXd3TmptQbDOEscs%2FFSPLSO0T5aCuPZ7eCWQPMWYDDX89AaowEqJKceP3TYIm%2BuZk7xHdQhnTDV7K%2B%2FBjqkAVc0eqmtZ4GTDLSAK%2Fv9YC14mhqwT9koFLj%2BNF7XAiBTOdWRqsbrbii5VKxXEYqXzQWRgFGcfvPqFUIVJM2EK3ZO3nHxnvOfMmaRXVv1FA50Hfod1iY9AFEnyfjgC4tbVHbI3xuD47f%2BPutFOh44kReU6xIA7ti5g64u03h9BaG8cjtgBjnXCvZsdwpQrbxJl5E33MMcssrjd5BqoPFw6rq46xDd&X-Amz-Signature=8f1e4231cd40d602af315fb3285a05e96f18cc6dbb6541645eea462e46987662&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKC55FI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCNMvMQQgyEdo15AW0cMPkF5CdQtuF2eW90DQokBzQy4wIhAO6GZ85piWkX1TMkKp1XlEOyuSarxxVXXG7BpintNO1VKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJU5RD5j3AEzNLKtEq3ANnyiLcn9suXmQlNdhX%2BenSqIyjx1N3EVf4W9Os6cNtJCpedZDSZXkeGDdwujZwfp7Upkq2BEb%2BJmiksQe6dhhCgIv6Kiam59yDcH%2FJ3%2B1GnOYc1E96XvOPVUXfLTd8kb5GFRha%2F2JJUL1xL2f54dzbRpKOA%2BoIoWblm0nsSmzz8L8BRu1PhPLK%2FkxgO%2BUvbYsOqaX2NSLepf0AOQebevFxSNJlZCTdrfDy76pgWy2EuyuI3eldBNUZeOik0W3h6IGqJ14Cw9szcT3aAkOibUmhEuwACzajh0IdkZnJPANAEG0c3ApEhefj3E7DDC1WvwjtC8OiK%2FN%2F3eKyTzHxP8ygscARne7wKmoyLovUE0YscTY3U6VlbD8cIPJ7l2LOwfJwTSYNtrCgU4DiZAsz%2FVx5ZF4QHP3IYjbTB8AabRpBw3tKN3%2BH8zD1pn%2B%2B2Axix3q%2FLAxNMFXhoGqOoAK5xwNR24TTVzCVv%2F1%2FJLGcbXX5Q7djnhKzFB7N8H2MwasVrwGSecuJOJf8t6EPUe9S608wL4e8TK8CbDApfE92Jht7mb2fd5sDGsXd3TmptQbDOEscs%2FFSPLSO0T5aCuPZ7eCWQPMWYDDX89AaowEqJKceP3TYIm%2BuZk7xHdQhnTDV7K%2B%2FBjqkAVc0eqmtZ4GTDLSAK%2Fv9YC14mhqwT9koFLj%2BNF7XAiBTOdWRqsbrbii5VKxXEYqXzQWRgFGcfvPqFUIVJM2EK3ZO3nHxnvOfMmaRXVv1FA50Hfod1iY9AFEnyfjgC4tbVHbI3xuD47f%2BPutFOh44kReU6xIA7ti5g64u03h9BaG8cjtgBjnXCvZsdwpQrbxJl5E33MMcssrjd5BqoPFw6rq46xDd&X-Amz-Signature=d99cb6cf7fc8e15d68cce9b7c53d2b3a52f7e33a46cc70cba6111d37c2059d80&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKC55FI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCNMvMQQgyEdo15AW0cMPkF5CdQtuF2eW90DQokBzQy4wIhAO6GZ85piWkX1TMkKp1XlEOyuSarxxVXXG7BpintNO1VKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJU5RD5j3AEzNLKtEq3ANnyiLcn9suXmQlNdhX%2BenSqIyjx1N3EVf4W9Os6cNtJCpedZDSZXkeGDdwujZwfp7Upkq2BEb%2BJmiksQe6dhhCgIv6Kiam59yDcH%2FJ3%2B1GnOYc1E96XvOPVUXfLTd8kb5GFRha%2F2JJUL1xL2f54dzbRpKOA%2BoIoWblm0nsSmzz8L8BRu1PhPLK%2FkxgO%2BUvbYsOqaX2NSLepf0AOQebevFxSNJlZCTdrfDy76pgWy2EuyuI3eldBNUZeOik0W3h6IGqJ14Cw9szcT3aAkOibUmhEuwACzajh0IdkZnJPANAEG0c3ApEhefj3E7DDC1WvwjtC8OiK%2FN%2F3eKyTzHxP8ygscARne7wKmoyLovUE0YscTY3U6VlbD8cIPJ7l2LOwfJwTSYNtrCgU4DiZAsz%2FVx5ZF4QHP3IYjbTB8AabRpBw3tKN3%2BH8zD1pn%2B%2B2Axix3q%2FLAxNMFXhoGqOoAK5xwNR24TTVzCVv%2F1%2FJLGcbXX5Q7djnhKzFB7N8H2MwasVrwGSecuJOJf8t6EPUe9S608wL4e8TK8CbDApfE92Jht7mb2fd5sDGsXd3TmptQbDOEscs%2FFSPLSO0T5aCuPZ7eCWQPMWYDDX89AaowEqJKceP3TYIm%2BuZk7xHdQhnTDV7K%2B%2FBjqkAVc0eqmtZ4GTDLSAK%2Fv9YC14mhqwT9koFLj%2BNF7XAiBTOdWRqsbrbii5VKxXEYqXzQWRgFGcfvPqFUIVJM2EK3ZO3nHxnvOfMmaRXVv1FA50Hfod1iY9AFEnyfjgC4tbVHbI3xuD47f%2BPutFOh44kReU6xIA7ti5g64u03h9BaG8cjtgBjnXCvZsdwpQrbxJl5E33MMcssrjd5BqoPFw6rq46xDd&X-Amz-Signature=7b8a0ba7edbc59f940fb46f281f393a786ac46211543af702a35bbadcea3b1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKC55FI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCNMvMQQgyEdo15AW0cMPkF5CdQtuF2eW90DQokBzQy4wIhAO6GZ85piWkX1TMkKp1XlEOyuSarxxVXXG7BpintNO1VKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJU5RD5j3AEzNLKtEq3ANnyiLcn9suXmQlNdhX%2BenSqIyjx1N3EVf4W9Os6cNtJCpedZDSZXkeGDdwujZwfp7Upkq2BEb%2BJmiksQe6dhhCgIv6Kiam59yDcH%2FJ3%2B1GnOYc1E96XvOPVUXfLTd8kb5GFRha%2F2JJUL1xL2f54dzbRpKOA%2BoIoWblm0nsSmzz8L8BRu1PhPLK%2FkxgO%2BUvbYsOqaX2NSLepf0AOQebevFxSNJlZCTdrfDy76pgWy2EuyuI3eldBNUZeOik0W3h6IGqJ14Cw9szcT3aAkOibUmhEuwACzajh0IdkZnJPANAEG0c3ApEhefj3E7DDC1WvwjtC8OiK%2FN%2F3eKyTzHxP8ygscARne7wKmoyLovUE0YscTY3U6VlbD8cIPJ7l2LOwfJwTSYNtrCgU4DiZAsz%2FVx5ZF4QHP3IYjbTB8AabRpBw3tKN3%2BH8zD1pn%2B%2B2Axix3q%2FLAxNMFXhoGqOoAK5xwNR24TTVzCVv%2F1%2FJLGcbXX5Q7djnhKzFB7N8H2MwasVrwGSecuJOJf8t6EPUe9S608wL4e8TK8CbDApfE92Jht7mb2fd5sDGsXd3TmptQbDOEscs%2FFSPLSO0T5aCuPZ7eCWQPMWYDDX89AaowEqJKceP3TYIm%2BuZk7xHdQhnTDV7K%2B%2FBjqkAVc0eqmtZ4GTDLSAK%2Fv9YC14mhqwT9koFLj%2BNF7XAiBTOdWRqsbrbii5VKxXEYqXzQWRgFGcfvPqFUIVJM2EK3ZO3nHxnvOfMmaRXVv1FA50Hfod1iY9AFEnyfjgC4tbVHbI3xuD47f%2BPutFOh44kReU6xIA7ti5g64u03h9BaG8cjtgBjnXCvZsdwpQrbxJl5E33MMcssrjd5BqoPFw6rq46xDd&X-Amz-Signature=8c498474df39200444014eeb070437a81c889955b65eb84aab56e55c4e2c4ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKC55FI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCNMvMQQgyEdo15AW0cMPkF5CdQtuF2eW90DQokBzQy4wIhAO6GZ85piWkX1TMkKp1XlEOyuSarxxVXXG7BpintNO1VKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJU5RD5j3AEzNLKtEq3ANnyiLcn9suXmQlNdhX%2BenSqIyjx1N3EVf4W9Os6cNtJCpedZDSZXkeGDdwujZwfp7Upkq2BEb%2BJmiksQe6dhhCgIv6Kiam59yDcH%2FJ3%2B1GnOYc1E96XvOPVUXfLTd8kb5GFRha%2F2JJUL1xL2f54dzbRpKOA%2BoIoWblm0nsSmzz8L8BRu1PhPLK%2FkxgO%2BUvbYsOqaX2NSLepf0AOQebevFxSNJlZCTdrfDy76pgWy2EuyuI3eldBNUZeOik0W3h6IGqJ14Cw9szcT3aAkOibUmhEuwACzajh0IdkZnJPANAEG0c3ApEhefj3E7DDC1WvwjtC8OiK%2FN%2F3eKyTzHxP8ygscARne7wKmoyLovUE0YscTY3U6VlbD8cIPJ7l2LOwfJwTSYNtrCgU4DiZAsz%2FVx5ZF4QHP3IYjbTB8AabRpBw3tKN3%2BH8zD1pn%2B%2B2Axix3q%2FLAxNMFXhoGqOoAK5xwNR24TTVzCVv%2F1%2FJLGcbXX5Q7djnhKzFB7N8H2MwasVrwGSecuJOJf8t6EPUe9S608wL4e8TK8CbDApfE92Jht7mb2fd5sDGsXd3TmptQbDOEscs%2FFSPLSO0T5aCuPZ7eCWQPMWYDDX89AaowEqJKceP3TYIm%2BuZk7xHdQhnTDV7K%2B%2FBjqkAVc0eqmtZ4GTDLSAK%2Fv9YC14mhqwT9koFLj%2BNF7XAiBTOdWRqsbrbii5VKxXEYqXzQWRgFGcfvPqFUIVJM2EK3ZO3nHxnvOfMmaRXVv1FA50Hfod1iY9AFEnyfjgC4tbVHbI3xuD47f%2BPutFOh44kReU6xIA7ti5g64u03h9BaG8cjtgBjnXCvZsdwpQrbxJl5E33MMcssrjd5BqoPFw6rq46xDd&X-Amz-Signature=aab63d84969e99f566c4467df0e26bc7520f1292a3c576a33194a0c6dde6d2d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
