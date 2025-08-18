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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDOPDFA%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCID6TTrxzzoAci%2BKRVUVv72c2GM%2FoYTJG3iy%2F2Mdc%2FwFcAiAGhCGHRWRyEe%2Fnx4O6zAmvB1vcRXAs4vB454t2yaOLPCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQPeXSIosXOrMg1ZKtwDg4fEYLOYUQioyIUO%2F%2BChEl1chMUv80W%2BkFsmzuT8OnRJJgR52YGDlVUqkk3niL9tv%2FJD9wcRdIK%2FWmMY3DRW6D7ncSYB7zwbnZhnxZAnUgWEWR9ePIrS%2BEG3WxrAGPtKv0C3FL%2BoppPPwgQl46kuQCR9D%2BpJ4GWS2fG0XqJWQ55OIfrFjXNZZmvual%2BKaqaXuhoUapsEjWS66RXlfqHw6ebCWEGrA0SPQI02Ne7N2YHFJrVXu6F1OVg3BIuP28pOjyM5UCFqNgxdLAtddsFDNqU0wol6aZFsLO1lnlA1OC0bKjtF6uwvzBq53WzJBfaZi5nq1WTvQZ91n97IwUIswWnlxsaGWe7LbEhlh2RMN36LSWhsGEOWbyVGdSa9smalZEsTj1nCR1OyKzr8UVd06XCEOzVgwXNxwV66SMKYG1vBwzDPk0OvzqCfNPc7Y6t1DwdBzrM4SrhBHwrSmeaifez7rDYceitRn2Ef8YboTlYyyS8aV02YcKVWePU6v5As6bDsH%2B4cKeVqUUu6GhST2RBjC2s5n6cQ%2FFMHoZSk13%2BfbFKHUzLPzXtYyZWgiSonfT2zC2jEw2XnkEWVb0xvebS2deaKUvQP2K2yJ7jJpyDhQHPIkr0zJZZbPGkw8OuJxQY6pgHpUMo6F2l6bkb%2FlrJlyapCfPDs2699S6H%2B72TE4EU%2F21oxkgbbwpM%2BYhZOSFD1damdivzpcWZQyJg4ziY7C%2BqqNvRf7T2%2B9Qz0Oy%2FDBXUdbO9X3Crd9TMbOTf6VDOYddKHEneyBSiNwKl%2BkrYZ7BJSk1CqXIs5JKj%2BcTD4BjGXupUFyRdySW%2FRwXDjoqcAGxM6ZZut%2Fz4funR6deKnxYXS4hFIpft8&X-Amz-Signature=ee9c56f6c73ddb2df6bc133ef39ae0986650408b4b27c7628b29d8c2d5eb0d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDOPDFA%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCID6TTrxzzoAci%2BKRVUVv72c2GM%2FoYTJG3iy%2F2Mdc%2FwFcAiAGhCGHRWRyEe%2Fnx4O6zAmvB1vcRXAs4vB454t2yaOLPCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQPeXSIosXOrMg1ZKtwDg4fEYLOYUQioyIUO%2F%2BChEl1chMUv80W%2BkFsmzuT8OnRJJgR52YGDlVUqkk3niL9tv%2FJD9wcRdIK%2FWmMY3DRW6D7ncSYB7zwbnZhnxZAnUgWEWR9ePIrS%2BEG3WxrAGPtKv0C3FL%2BoppPPwgQl46kuQCR9D%2BpJ4GWS2fG0XqJWQ55OIfrFjXNZZmvual%2BKaqaXuhoUapsEjWS66RXlfqHw6ebCWEGrA0SPQI02Ne7N2YHFJrVXu6F1OVg3BIuP28pOjyM5UCFqNgxdLAtddsFDNqU0wol6aZFsLO1lnlA1OC0bKjtF6uwvzBq53WzJBfaZi5nq1WTvQZ91n97IwUIswWnlxsaGWe7LbEhlh2RMN36LSWhsGEOWbyVGdSa9smalZEsTj1nCR1OyKzr8UVd06XCEOzVgwXNxwV66SMKYG1vBwzDPk0OvzqCfNPc7Y6t1DwdBzrM4SrhBHwrSmeaifez7rDYceitRn2Ef8YboTlYyyS8aV02YcKVWePU6v5As6bDsH%2B4cKeVqUUu6GhST2RBjC2s5n6cQ%2FFMHoZSk13%2BfbFKHUzLPzXtYyZWgiSonfT2zC2jEw2XnkEWVb0xvebS2deaKUvQP2K2yJ7jJpyDhQHPIkr0zJZZbPGkw8OuJxQY6pgHpUMo6F2l6bkb%2FlrJlyapCfPDs2699S6H%2B72TE4EU%2F21oxkgbbwpM%2BYhZOSFD1damdivzpcWZQyJg4ziY7C%2BqqNvRf7T2%2B9Qz0Oy%2FDBXUdbO9X3Crd9TMbOTf6VDOYddKHEneyBSiNwKl%2BkrYZ7BJSk1CqXIs5JKj%2BcTD4BjGXupUFyRdySW%2FRwXDjoqcAGxM6ZZut%2Fz4funR6deKnxYXS4hFIpft8&X-Amz-Signature=c8e54c64183b6c955311302cde4cbb3857b5b074fb3b84bf5b1306e260d83364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDOPDFA%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCID6TTrxzzoAci%2BKRVUVv72c2GM%2FoYTJG3iy%2F2Mdc%2FwFcAiAGhCGHRWRyEe%2Fnx4O6zAmvB1vcRXAs4vB454t2yaOLPCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQPeXSIosXOrMg1ZKtwDg4fEYLOYUQioyIUO%2F%2BChEl1chMUv80W%2BkFsmzuT8OnRJJgR52YGDlVUqkk3niL9tv%2FJD9wcRdIK%2FWmMY3DRW6D7ncSYB7zwbnZhnxZAnUgWEWR9ePIrS%2BEG3WxrAGPtKv0C3FL%2BoppPPwgQl46kuQCR9D%2BpJ4GWS2fG0XqJWQ55OIfrFjXNZZmvual%2BKaqaXuhoUapsEjWS66RXlfqHw6ebCWEGrA0SPQI02Ne7N2YHFJrVXu6F1OVg3BIuP28pOjyM5UCFqNgxdLAtddsFDNqU0wol6aZFsLO1lnlA1OC0bKjtF6uwvzBq53WzJBfaZi5nq1WTvQZ91n97IwUIswWnlxsaGWe7LbEhlh2RMN36LSWhsGEOWbyVGdSa9smalZEsTj1nCR1OyKzr8UVd06XCEOzVgwXNxwV66SMKYG1vBwzDPk0OvzqCfNPc7Y6t1DwdBzrM4SrhBHwrSmeaifez7rDYceitRn2Ef8YboTlYyyS8aV02YcKVWePU6v5As6bDsH%2B4cKeVqUUu6GhST2RBjC2s5n6cQ%2FFMHoZSk13%2BfbFKHUzLPzXtYyZWgiSonfT2zC2jEw2XnkEWVb0xvebS2deaKUvQP2K2yJ7jJpyDhQHPIkr0zJZZbPGkw8OuJxQY6pgHpUMo6F2l6bkb%2FlrJlyapCfPDs2699S6H%2B72TE4EU%2F21oxkgbbwpM%2BYhZOSFD1damdivzpcWZQyJg4ziY7C%2BqqNvRf7T2%2B9Qz0Oy%2FDBXUdbO9X3Crd9TMbOTf6VDOYddKHEneyBSiNwKl%2BkrYZ7BJSk1CqXIs5JKj%2BcTD4BjGXupUFyRdySW%2FRwXDjoqcAGxM6ZZut%2Fz4funR6deKnxYXS4hFIpft8&X-Amz-Signature=478b12182bb03887e5d922be605f54baba92238fd133266c256a49885eebe349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDOPDFA%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCID6TTrxzzoAci%2BKRVUVv72c2GM%2FoYTJG3iy%2F2Mdc%2FwFcAiAGhCGHRWRyEe%2Fnx4O6zAmvB1vcRXAs4vB454t2yaOLPCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQPeXSIosXOrMg1ZKtwDg4fEYLOYUQioyIUO%2F%2BChEl1chMUv80W%2BkFsmzuT8OnRJJgR52YGDlVUqkk3niL9tv%2FJD9wcRdIK%2FWmMY3DRW6D7ncSYB7zwbnZhnxZAnUgWEWR9ePIrS%2BEG3WxrAGPtKv0C3FL%2BoppPPwgQl46kuQCR9D%2BpJ4GWS2fG0XqJWQ55OIfrFjXNZZmvual%2BKaqaXuhoUapsEjWS66RXlfqHw6ebCWEGrA0SPQI02Ne7N2YHFJrVXu6F1OVg3BIuP28pOjyM5UCFqNgxdLAtddsFDNqU0wol6aZFsLO1lnlA1OC0bKjtF6uwvzBq53WzJBfaZi5nq1WTvQZ91n97IwUIswWnlxsaGWe7LbEhlh2RMN36LSWhsGEOWbyVGdSa9smalZEsTj1nCR1OyKzr8UVd06XCEOzVgwXNxwV66SMKYG1vBwzDPk0OvzqCfNPc7Y6t1DwdBzrM4SrhBHwrSmeaifez7rDYceitRn2Ef8YboTlYyyS8aV02YcKVWePU6v5As6bDsH%2B4cKeVqUUu6GhST2RBjC2s5n6cQ%2FFMHoZSk13%2BfbFKHUzLPzXtYyZWgiSonfT2zC2jEw2XnkEWVb0xvebS2deaKUvQP2K2yJ7jJpyDhQHPIkr0zJZZbPGkw8OuJxQY6pgHpUMo6F2l6bkb%2FlrJlyapCfPDs2699S6H%2B72TE4EU%2F21oxkgbbwpM%2BYhZOSFD1damdivzpcWZQyJg4ziY7C%2BqqNvRf7T2%2B9Qz0Oy%2FDBXUdbO9X3Crd9TMbOTf6VDOYddKHEneyBSiNwKl%2BkrYZ7BJSk1CqXIs5JKj%2BcTD4BjGXupUFyRdySW%2FRwXDjoqcAGxM6ZZut%2Fz4funR6deKnxYXS4hFIpft8&X-Amz-Signature=3c6c7478273dfdfb032be87bd62053d91ae9cfb9baf4315064eb55470896d56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDOPDFA%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCID6TTrxzzoAci%2BKRVUVv72c2GM%2FoYTJG3iy%2F2Mdc%2FwFcAiAGhCGHRWRyEe%2Fnx4O6zAmvB1vcRXAs4vB454t2yaOLPCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQPeXSIosXOrMg1ZKtwDg4fEYLOYUQioyIUO%2F%2BChEl1chMUv80W%2BkFsmzuT8OnRJJgR52YGDlVUqkk3niL9tv%2FJD9wcRdIK%2FWmMY3DRW6D7ncSYB7zwbnZhnxZAnUgWEWR9ePIrS%2BEG3WxrAGPtKv0C3FL%2BoppPPwgQl46kuQCR9D%2BpJ4GWS2fG0XqJWQ55OIfrFjXNZZmvual%2BKaqaXuhoUapsEjWS66RXlfqHw6ebCWEGrA0SPQI02Ne7N2YHFJrVXu6F1OVg3BIuP28pOjyM5UCFqNgxdLAtddsFDNqU0wol6aZFsLO1lnlA1OC0bKjtF6uwvzBq53WzJBfaZi5nq1WTvQZ91n97IwUIswWnlxsaGWe7LbEhlh2RMN36LSWhsGEOWbyVGdSa9smalZEsTj1nCR1OyKzr8UVd06XCEOzVgwXNxwV66SMKYG1vBwzDPk0OvzqCfNPc7Y6t1DwdBzrM4SrhBHwrSmeaifez7rDYceitRn2Ef8YboTlYyyS8aV02YcKVWePU6v5As6bDsH%2B4cKeVqUUu6GhST2RBjC2s5n6cQ%2FFMHoZSk13%2BfbFKHUzLPzXtYyZWgiSonfT2zC2jEw2XnkEWVb0xvebS2deaKUvQP2K2yJ7jJpyDhQHPIkr0zJZZbPGkw8OuJxQY6pgHpUMo6F2l6bkb%2FlrJlyapCfPDs2699S6H%2B72TE4EU%2F21oxkgbbwpM%2BYhZOSFD1damdivzpcWZQyJg4ziY7C%2BqqNvRf7T2%2B9Qz0Oy%2FDBXUdbO9X3Crd9TMbOTf6VDOYddKHEneyBSiNwKl%2BkrYZ7BJSk1CqXIs5JKj%2BcTD4BjGXupUFyRdySW%2FRwXDjoqcAGxM6ZZut%2Fz4funR6deKnxYXS4hFIpft8&X-Amz-Signature=6b6f63d782b1421524d64c59ec22b9ffdcb0403447c7b0b3ec3e1871dc20c322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
