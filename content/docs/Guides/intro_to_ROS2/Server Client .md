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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIEG5IV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmRA4BJhX8ICgpeZ6nmSgEGmoP1%2Fhw0arVe7dutBF8ugIgGWeT03Q3xONRIWNAoAeMOSkmO76pg5t7Iet6ClCRf2oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtjTNQXF3ykUUtD7yrcA0OJOOMiJOr9JyfTkQvjYkLUAqUeKu%2FhjFuJIhBI8t1OAlvfbzp6SjHMKV1G6L89jVDMRA8lYMROF5hg2kEvVkIZ2LkRmjIcrRRk8NTu6%2FcDg1OeyHMOGrZn7iFY9YnzPEUhGecMdQ%2F8gn4mJFhAIyFQljN5jD8%2FJmaMpd%2BDANlsePXL1oteXQ28dft37PD8Y8NgJqKtfUxXkSffD7%2B%2FUwSUPrXxbr3zc%2FSbDEnEzbeMIOwMfRoGXBt9U8ttRPnbt1S1VOGat0lU2V28nhzZNSHQdIZHjQZ9xFhgKjnVqc60eJbGe7Pw981qF5TpcmtQMkdcNcIRlJAhyLYoFz9JQTOOaiMpQNQAMWHp2vGZP4bdinbktG4etELKjzwyymN3cVaTlFEoSj8cwC%2BHPHrea%2Brhozylp9GfiZ7elUhWyGu%2B7zHCftKbR9UUnPhUygYjg8MB8QRUr2APosEIRx4f7lAa7%2F65liWr0CZTxHhz0GotNNig8N0nEcZ5fjMt0btXPe%2Fbo5F5D7XJ7FqJaBSGKyO2S2KSnIb7oZl66EvmPSlfhU5Chcb0voicjSqk%2BHmmc7c0chX6Wy3yvN3PZlx7w9pTi2Bqby8HlZY4wrh%2FE4yiUa2Xxfcni77NzDANMOetpMQGOqUB6EDNSaZsrvAJJ5mIvNGepmw6G2iQMq18hojEiZn1oaPco%2B5frNZhbHOW2YYZpwG8rPLCHa%2Bz1GtxRx%2F34s3q6ERAErRxgx2JWZm9Ag66vtCMQ3CaFjUIRXVRQVJysu0kULK1uJM2Q4xCpPyFaX3QMzw%2BEFWUSO%2BfrlfzqxzDj1RedZr9DwlN%2FhX%2BY7UfUyv1FNFWYoZMNj415l31gApw0vCXktO%2F&X-Amz-Signature=29ab4c2f74902412c0afec7a3c2c25d4f656c69ee5bcbf6dffd673ce8218dd2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIEG5IV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmRA4BJhX8ICgpeZ6nmSgEGmoP1%2Fhw0arVe7dutBF8ugIgGWeT03Q3xONRIWNAoAeMOSkmO76pg5t7Iet6ClCRf2oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtjTNQXF3ykUUtD7yrcA0OJOOMiJOr9JyfTkQvjYkLUAqUeKu%2FhjFuJIhBI8t1OAlvfbzp6SjHMKV1G6L89jVDMRA8lYMROF5hg2kEvVkIZ2LkRmjIcrRRk8NTu6%2FcDg1OeyHMOGrZn7iFY9YnzPEUhGecMdQ%2F8gn4mJFhAIyFQljN5jD8%2FJmaMpd%2BDANlsePXL1oteXQ28dft37PD8Y8NgJqKtfUxXkSffD7%2B%2FUwSUPrXxbr3zc%2FSbDEnEzbeMIOwMfRoGXBt9U8ttRPnbt1S1VOGat0lU2V28nhzZNSHQdIZHjQZ9xFhgKjnVqc60eJbGe7Pw981qF5TpcmtQMkdcNcIRlJAhyLYoFz9JQTOOaiMpQNQAMWHp2vGZP4bdinbktG4etELKjzwyymN3cVaTlFEoSj8cwC%2BHPHrea%2Brhozylp9GfiZ7elUhWyGu%2B7zHCftKbR9UUnPhUygYjg8MB8QRUr2APosEIRx4f7lAa7%2F65liWr0CZTxHhz0GotNNig8N0nEcZ5fjMt0btXPe%2Fbo5F5D7XJ7FqJaBSGKyO2S2KSnIb7oZl66EvmPSlfhU5Chcb0voicjSqk%2BHmmc7c0chX6Wy3yvN3PZlx7w9pTi2Bqby8HlZY4wrh%2FE4yiUa2Xxfcni77NzDANMOetpMQGOqUB6EDNSaZsrvAJJ5mIvNGepmw6G2iQMq18hojEiZn1oaPco%2B5frNZhbHOW2YYZpwG8rPLCHa%2Bz1GtxRx%2F34s3q6ERAErRxgx2JWZm9Ag66vtCMQ3CaFjUIRXVRQVJysu0kULK1uJM2Q4xCpPyFaX3QMzw%2BEFWUSO%2BfrlfzqxzDj1RedZr9DwlN%2FhX%2BY7UfUyv1FNFWYoZMNj415l31gApw0vCXktO%2F&X-Amz-Signature=3159012bb73d849f0b8047d45dfcf4b902090d5bb0d7cdd0da7934102c1cd1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIEG5IV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmRA4BJhX8ICgpeZ6nmSgEGmoP1%2Fhw0arVe7dutBF8ugIgGWeT03Q3xONRIWNAoAeMOSkmO76pg5t7Iet6ClCRf2oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtjTNQXF3ykUUtD7yrcA0OJOOMiJOr9JyfTkQvjYkLUAqUeKu%2FhjFuJIhBI8t1OAlvfbzp6SjHMKV1G6L89jVDMRA8lYMROF5hg2kEvVkIZ2LkRmjIcrRRk8NTu6%2FcDg1OeyHMOGrZn7iFY9YnzPEUhGecMdQ%2F8gn4mJFhAIyFQljN5jD8%2FJmaMpd%2BDANlsePXL1oteXQ28dft37PD8Y8NgJqKtfUxXkSffD7%2B%2FUwSUPrXxbr3zc%2FSbDEnEzbeMIOwMfRoGXBt9U8ttRPnbt1S1VOGat0lU2V28nhzZNSHQdIZHjQZ9xFhgKjnVqc60eJbGe7Pw981qF5TpcmtQMkdcNcIRlJAhyLYoFz9JQTOOaiMpQNQAMWHp2vGZP4bdinbktG4etELKjzwyymN3cVaTlFEoSj8cwC%2BHPHrea%2Brhozylp9GfiZ7elUhWyGu%2B7zHCftKbR9UUnPhUygYjg8MB8QRUr2APosEIRx4f7lAa7%2F65liWr0CZTxHhz0GotNNig8N0nEcZ5fjMt0btXPe%2Fbo5F5D7XJ7FqJaBSGKyO2S2KSnIb7oZl66EvmPSlfhU5Chcb0voicjSqk%2BHmmc7c0chX6Wy3yvN3PZlx7w9pTi2Bqby8HlZY4wrh%2FE4yiUa2Xxfcni77NzDANMOetpMQGOqUB6EDNSaZsrvAJJ5mIvNGepmw6G2iQMq18hojEiZn1oaPco%2B5frNZhbHOW2YYZpwG8rPLCHa%2Bz1GtxRx%2F34s3q6ERAErRxgx2JWZm9Ag66vtCMQ3CaFjUIRXVRQVJysu0kULK1uJM2Q4xCpPyFaX3QMzw%2BEFWUSO%2BfrlfzqxzDj1RedZr9DwlN%2FhX%2BY7UfUyv1FNFWYoZMNj415l31gApw0vCXktO%2F&X-Amz-Signature=eeecbedbe89b1348ca2757f09c932816a977b8962ddcaf42a04430c29027a232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIEG5IV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmRA4BJhX8ICgpeZ6nmSgEGmoP1%2Fhw0arVe7dutBF8ugIgGWeT03Q3xONRIWNAoAeMOSkmO76pg5t7Iet6ClCRf2oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtjTNQXF3ykUUtD7yrcA0OJOOMiJOr9JyfTkQvjYkLUAqUeKu%2FhjFuJIhBI8t1OAlvfbzp6SjHMKV1G6L89jVDMRA8lYMROF5hg2kEvVkIZ2LkRmjIcrRRk8NTu6%2FcDg1OeyHMOGrZn7iFY9YnzPEUhGecMdQ%2F8gn4mJFhAIyFQljN5jD8%2FJmaMpd%2BDANlsePXL1oteXQ28dft37PD8Y8NgJqKtfUxXkSffD7%2B%2FUwSUPrXxbr3zc%2FSbDEnEzbeMIOwMfRoGXBt9U8ttRPnbt1S1VOGat0lU2V28nhzZNSHQdIZHjQZ9xFhgKjnVqc60eJbGe7Pw981qF5TpcmtQMkdcNcIRlJAhyLYoFz9JQTOOaiMpQNQAMWHp2vGZP4bdinbktG4etELKjzwyymN3cVaTlFEoSj8cwC%2BHPHrea%2Brhozylp9GfiZ7elUhWyGu%2B7zHCftKbR9UUnPhUygYjg8MB8QRUr2APosEIRx4f7lAa7%2F65liWr0CZTxHhz0GotNNig8N0nEcZ5fjMt0btXPe%2Fbo5F5D7XJ7FqJaBSGKyO2S2KSnIb7oZl66EvmPSlfhU5Chcb0voicjSqk%2BHmmc7c0chX6Wy3yvN3PZlx7w9pTi2Bqby8HlZY4wrh%2FE4yiUa2Xxfcni77NzDANMOetpMQGOqUB6EDNSaZsrvAJJ5mIvNGepmw6G2iQMq18hojEiZn1oaPco%2B5frNZhbHOW2YYZpwG8rPLCHa%2Bz1GtxRx%2F34s3q6ERAErRxgx2JWZm9Ag66vtCMQ3CaFjUIRXVRQVJysu0kULK1uJM2Q4xCpPyFaX3QMzw%2BEFWUSO%2BfrlfzqxzDj1RedZr9DwlN%2FhX%2BY7UfUyv1FNFWYoZMNj415l31gApw0vCXktO%2F&X-Amz-Signature=01b6b50a1379675a7718fad6eab5797ccaed9c471ace854125feed28f6de0f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIEG5IV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmRA4BJhX8ICgpeZ6nmSgEGmoP1%2Fhw0arVe7dutBF8ugIgGWeT03Q3xONRIWNAoAeMOSkmO76pg5t7Iet6ClCRf2oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtjTNQXF3ykUUtD7yrcA0OJOOMiJOr9JyfTkQvjYkLUAqUeKu%2FhjFuJIhBI8t1OAlvfbzp6SjHMKV1G6L89jVDMRA8lYMROF5hg2kEvVkIZ2LkRmjIcrRRk8NTu6%2FcDg1OeyHMOGrZn7iFY9YnzPEUhGecMdQ%2F8gn4mJFhAIyFQljN5jD8%2FJmaMpd%2BDANlsePXL1oteXQ28dft37PD8Y8NgJqKtfUxXkSffD7%2B%2FUwSUPrXxbr3zc%2FSbDEnEzbeMIOwMfRoGXBt9U8ttRPnbt1S1VOGat0lU2V28nhzZNSHQdIZHjQZ9xFhgKjnVqc60eJbGe7Pw981qF5TpcmtQMkdcNcIRlJAhyLYoFz9JQTOOaiMpQNQAMWHp2vGZP4bdinbktG4etELKjzwyymN3cVaTlFEoSj8cwC%2BHPHrea%2Brhozylp9GfiZ7elUhWyGu%2B7zHCftKbR9UUnPhUygYjg8MB8QRUr2APosEIRx4f7lAa7%2F65liWr0CZTxHhz0GotNNig8N0nEcZ5fjMt0btXPe%2Fbo5F5D7XJ7FqJaBSGKyO2S2KSnIb7oZl66EvmPSlfhU5Chcb0voicjSqk%2BHmmc7c0chX6Wy3yvN3PZlx7w9pTi2Bqby8HlZY4wrh%2FE4yiUa2Xxfcni77NzDANMOetpMQGOqUB6EDNSaZsrvAJJ5mIvNGepmw6G2iQMq18hojEiZn1oaPco%2B5frNZhbHOW2YYZpwG8rPLCHa%2Bz1GtxRx%2F34s3q6ERAErRxgx2JWZm9Ag66vtCMQ3CaFjUIRXVRQVJysu0kULK1uJM2Q4xCpPyFaX3QMzw%2BEFWUSO%2BfrlfzqxzDj1RedZr9DwlN%2FhX%2BY7UfUyv1FNFWYoZMNj415l31gApw0vCXktO%2F&X-Amz-Signature=f9bcfc5a33b45c6edd99b42d3a11daa7170f12ef38c37efc80018dca176d80b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
