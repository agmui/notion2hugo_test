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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ZRDB3P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeaXhISpjlHGCMehzQJriO5F2hj1e6mdqmbMwWsY%2BoOwIhAMFFYlDOB7OD8JLWMwoMnZsJCDmPA7Zhi8bUv7tJvjaFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt35OXRM4UXZRaC2wq3APDVaNN3Z%2FTbsz8svLR%2F%2Bbsc0LW8%2F%2FUQ%2Bs%2BZQ9WOwfIaSYRac%2FAXdf4QwZNRxwwlijMOLfCOQTUL31M%2FkP9dtkTcmqZwFvqO%2BKXn8%2F2vdXzlTdwbMafNlgRBM1JiyGRD8P4THi92oUCT55L%2Fo%2FXwnelBxAQ5pnhEcojR%2B69I9EVfKZFUXreFznTxcZVhgjYmHmxXP%2FhV7SXGuA%2BnT%2Ba3ADgL9JbbS1vEOr8GlLFqJSuTYf5ZoGIHrSGyo94uJObpFVXrVEQEjzGKAJpCPIlSqvdagIs%2FYPrFzvHXAq9Vo7lToT2woprTndcvjVyGVieU6WHSc1aml325FeHEE%2B8TIOpf2IKWK%2FJC5%2FoomaLyKTHU941Ivli%2FUsJU3kwfe8S1%2FL%2FsIydDBXGKdA4Kthc1a7HDtEjuC4h3cvlpBVfLQ8%2BtvPnhx9ENu5rim%2FHQO%2BCL4zw3TdSskhfrDC4w%2BZa37ccgGPsecRQF7rHTpwUwvTj6ZDv5mDsldbzpx6RxPAC0x4zWgS7ZdpCRkw9cUYOJ%2B1oK40xxsGoRgKS7dqikr5GI6MGxRRYgAs3uQa62Efm2pVwq7qUZWUiHAMe3fvkSAVdqS5syr8FcPglJ4byphZKLqP7BqgXb4c42V0lvjDBhrG9BjqkAQgY4KQq2S1MBntQ8xiwfw2iCRi%2FKJZV%2B1R%2BDCexOtdT36lgrgTQl9HmmqI37TIpi4BXBZ28jCBj6HRnH3fiXupdX0POchsSQcH%2FJbmR3J6xgsFa7fG0OVsZDOSbTymy%2FV5hSEKrbKDwN50zZw2g%2FWiAqwrq4AuTSNR%2BmZ03Jka1h5JinraSDfZLQIPq0fSyqGVtdnJzPToWhrlEddYC1U4KIC5c&X-Amz-Signature=dbff0234f71a6a8a17621dde8bae9543a44555821e1b737edda4f304c2e85ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ZRDB3P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeaXhISpjlHGCMehzQJriO5F2hj1e6mdqmbMwWsY%2BoOwIhAMFFYlDOB7OD8JLWMwoMnZsJCDmPA7Zhi8bUv7tJvjaFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt35OXRM4UXZRaC2wq3APDVaNN3Z%2FTbsz8svLR%2F%2Bbsc0LW8%2F%2FUQ%2Bs%2BZQ9WOwfIaSYRac%2FAXdf4QwZNRxwwlijMOLfCOQTUL31M%2FkP9dtkTcmqZwFvqO%2BKXn8%2F2vdXzlTdwbMafNlgRBM1JiyGRD8P4THi92oUCT55L%2Fo%2FXwnelBxAQ5pnhEcojR%2B69I9EVfKZFUXreFznTxcZVhgjYmHmxXP%2FhV7SXGuA%2BnT%2Ba3ADgL9JbbS1vEOr8GlLFqJSuTYf5ZoGIHrSGyo94uJObpFVXrVEQEjzGKAJpCPIlSqvdagIs%2FYPrFzvHXAq9Vo7lToT2woprTndcvjVyGVieU6WHSc1aml325FeHEE%2B8TIOpf2IKWK%2FJC5%2FoomaLyKTHU941Ivli%2FUsJU3kwfe8S1%2FL%2FsIydDBXGKdA4Kthc1a7HDtEjuC4h3cvlpBVfLQ8%2BtvPnhx9ENu5rim%2FHQO%2BCL4zw3TdSskhfrDC4w%2BZa37ccgGPsecRQF7rHTpwUwvTj6ZDv5mDsldbzpx6RxPAC0x4zWgS7ZdpCRkw9cUYOJ%2B1oK40xxsGoRgKS7dqikr5GI6MGxRRYgAs3uQa62Efm2pVwq7qUZWUiHAMe3fvkSAVdqS5syr8FcPglJ4byphZKLqP7BqgXb4c42V0lvjDBhrG9BjqkAQgY4KQq2S1MBntQ8xiwfw2iCRi%2FKJZV%2B1R%2BDCexOtdT36lgrgTQl9HmmqI37TIpi4BXBZ28jCBj6HRnH3fiXupdX0POchsSQcH%2FJbmR3J6xgsFa7fG0OVsZDOSbTymy%2FV5hSEKrbKDwN50zZw2g%2FWiAqwrq4AuTSNR%2BmZ03Jka1h5JinraSDfZLQIPq0fSyqGVtdnJzPToWhrlEddYC1U4KIC5c&X-Amz-Signature=91fdcd57aa875b30f039a4a447709b47c4fc642999b295c2f65a6276e88a8f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ZRDB3P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeaXhISpjlHGCMehzQJriO5F2hj1e6mdqmbMwWsY%2BoOwIhAMFFYlDOB7OD8JLWMwoMnZsJCDmPA7Zhi8bUv7tJvjaFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt35OXRM4UXZRaC2wq3APDVaNN3Z%2FTbsz8svLR%2F%2Bbsc0LW8%2F%2FUQ%2Bs%2BZQ9WOwfIaSYRac%2FAXdf4QwZNRxwwlijMOLfCOQTUL31M%2FkP9dtkTcmqZwFvqO%2BKXn8%2F2vdXzlTdwbMafNlgRBM1JiyGRD8P4THi92oUCT55L%2Fo%2FXwnelBxAQ5pnhEcojR%2B69I9EVfKZFUXreFznTxcZVhgjYmHmxXP%2FhV7SXGuA%2BnT%2Ba3ADgL9JbbS1vEOr8GlLFqJSuTYf5ZoGIHrSGyo94uJObpFVXrVEQEjzGKAJpCPIlSqvdagIs%2FYPrFzvHXAq9Vo7lToT2woprTndcvjVyGVieU6WHSc1aml325FeHEE%2B8TIOpf2IKWK%2FJC5%2FoomaLyKTHU941Ivli%2FUsJU3kwfe8S1%2FL%2FsIydDBXGKdA4Kthc1a7HDtEjuC4h3cvlpBVfLQ8%2BtvPnhx9ENu5rim%2FHQO%2BCL4zw3TdSskhfrDC4w%2BZa37ccgGPsecRQF7rHTpwUwvTj6ZDv5mDsldbzpx6RxPAC0x4zWgS7ZdpCRkw9cUYOJ%2B1oK40xxsGoRgKS7dqikr5GI6MGxRRYgAs3uQa62Efm2pVwq7qUZWUiHAMe3fvkSAVdqS5syr8FcPglJ4byphZKLqP7BqgXb4c42V0lvjDBhrG9BjqkAQgY4KQq2S1MBntQ8xiwfw2iCRi%2FKJZV%2B1R%2BDCexOtdT36lgrgTQl9HmmqI37TIpi4BXBZ28jCBj6HRnH3fiXupdX0POchsSQcH%2FJbmR3J6xgsFa7fG0OVsZDOSbTymy%2FV5hSEKrbKDwN50zZw2g%2FWiAqwrq4AuTSNR%2BmZ03Jka1h5JinraSDfZLQIPq0fSyqGVtdnJzPToWhrlEddYC1U4KIC5c&X-Amz-Signature=1e8c6c028b164030535284ff7fbc79afac9269af198da7b11be596a797e0118d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ZRDB3P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeaXhISpjlHGCMehzQJriO5F2hj1e6mdqmbMwWsY%2BoOwIhAMFFYlDOB7OD8JLWMwoMnZsJCDmPA7Zhi8bUv7tJvjaFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt35OXRM4UXZRaC2wq3APDVaNN3Z%2FTbsz8svLR%2F%2Bbsc0LW8%2F%2FUQ%2Bs%2BZQ9WOwfIaSYRac%2FAXdf4QwZNRxwwlijMOLfCOQTUL31M%2FkP9dtkTcmqZwFvqO%2BKXn8%2F2vdXzlTdwbMafNlgRBM1JiyGRD8P4THi92oUCT55L%2Fo%2FXwnelBxAQ5pnhEcojR%2B69I9EVfKZFUXreFznTxcZVhgjYmHmxXP%2FhV7SXGuA%2BnT%2Ba3ADgL9JbbS1vEOr8GlLFqJSuTYf5ZoGIHrSGyo94uJObpFVXrVEQEjzGKAJpCPIlSqvdagIs%2FYPrFzvHXAq9Vo7lToT2woprTndcvjVyGVieU6WHSc1aml325FeHEE%2B8TIOpf2IKWK%2FJC5%2FoomaLyKTHU941Ivli%2FUsJU3kwfe8S1%2FL%2FsIydDBXGKdA4Kthc1a7HDtEjuC4h3cvlpBVfLQ8%2BtvPnhx9ENu5rim%2FHQO%2BCL4zw3TdSskhfrDC4w%2BZa37ccgGPsecRQF7rHTpwUwvTj6ZDv5mDsldbzpx6RxPAC0x4zWgS7ZdpCRkw9cUYOJ%2B1oK40xxsGoRgKS7dqikr5GI6MGxRRYgAs3uQa62Efm2pVwq7qUZWUiHAMe3fvkSAVdqS5syr8FcPglJ4byphZKLqP7BqgXb4c42V0lvjDBhrG9BjqkAQgY4KQq2S1MBntQ8xiwfw2iCRi%2FKJZV%2B1R%2BDCexOtdT36lgrgTQl9HmmqI37TIpi4BXBZ28jCBj6HRnH3fiXupdX0POchsSQcH%2FJbmR3J6xgsFa7fG0OVsZDOSbTymy%2FV5hSEKrbKDwN50zZw2g%2FWiAqwrq4AuTSNR%2BmZ03Jka1h5JinraSDfZLQIPq0fSyqGVtdnJzPToWhrlEddYC1U4KIC5c&X-Amz-Signature=8d81ce2f3a21e8c506b21b078651b18d71ff547a907eed01f6f89dcd668833ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ZRDB3P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeaXhISpjlHGCMehzQJriO5F2hj1e6mdqmbMwWsY%2BoOwIhAMFFYlDOB7OD8JLWMwoMnZsJCDmPA7Zhi8bUv7tJvjaFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt35OXRM4UXZRaC2wq3APDVaNN3Z%2FTbsz8svLR%2F%2Bbsc0LW8%2F%2FUQ%2Bs%2BZQ9WOwfIaSYRac%2FAXdf4QwZNRxwwlijMOLfCOQTUL31M%2FkP9dtkTcmqZwFvqO%2BKXn8%2F2vdXzlTdwbMafNlgRBM1JiyGRD8P4THi92oUCT55L%2Fo%2FXwnelBxAQ5pnhEcojR%2B69I9EVfKZFUXreFznTxcZVhgjYmHmxXP%2FhV7SXGuA%2BnT%2Ba3ADgL9JbbS1vEOr8GlLFqJSuTYf5ZoGIHrSGyo94uJObpFVXrVEQEjzGKAJpCPIlSqvdagIs%2FYPrFzvHXAq9Vo7lToT2woprTndcvjVyGVieU6WHSc1aml325FeHEE%2B8TIOpf2IKWK%2FJC5%2FoomaLyKTHU941Ivli%2FUsJU3kwfe8S1%2FL%2FsIydDBXGKdA4Kthc1a7HDtEjuC4h3cvlpBVfLQ8%2BtvPnhx9ENu5rim%2FHQO%2BCL4zw3TdSskhfrDC4w%2BZa37ccgGPsecRQF7rHTpwUwvTj6ZDv5mDsldbzpx6RxPAC0x4zWgS7ZdpCRkw9cUYOJ%2B1oK40xxsGoRgKS7dqikr5GI6MGxRRYgAs3uQa62Efm2pVwq7qUZWUiHAMe3fvkSAVdqS5syr8FcPglJ4byphZKLqP7BqgXb4c42V0lvjDBhrG9BjqkAQgY4KQq2S1MBntQ8xiwfw2iCRi%2FKJZV%2B1R%2BDCexOtdT36lgrgTQl9HmmqI37TIpi4BXBZ28jCBj6HRnH3fiXupdX0POchsSQcH%2FJbmR3J6xgsFa7fG0OVsZDOSbTymy%2FV5hSEKrbKDwN50zZw2g%2FWiAqwrq4AuTSNR%2BmZ03Jka1h5JinraSDfZLQIPq0fSyqGVtdnJzPToWhrlEddYC1U4KIC5c&X-Amz-Signature=ac69e97fbe6ae369c2cdadca8bf4176e7a8d0e9c588616db2aa0f52252f62ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
