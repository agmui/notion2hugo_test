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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOXTFXT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICjBuldOnx25RSQY63NcrBd1X6tjt5HslpBZ%2FIaDWuVFAiEA%2BH%2BaD2gsFaFDOtSQzSYY8Vy7jKo%2FN0d%2BAl0fSr6IuyEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgszG7Jt6jYXkqSXircA0Fb6IcyJMR%2BIQO%2BTK1Ou2eWt9m%2Fqsrseql9F4qhdVGh%2FGcsP3hjvDKGVrfL%2B2XdTKGFSvFKp8xZ97yHs1DzE%2BBa3k%2B4XJwXKs0n8Lf2a3U5s4qj%2BouKTN3JDyYNf%2BJGp3Qel9wJ6SWlZV9tbzSdSR1wq%2BRojWilc16G2ui6n1SXudYz%2Bwp1N682Hj9NN4qgVan9PjvG2NBR0vnrN4a3skf910K7XHAKWevh3hlDjut%2BnYhKSUktEAyNGWTJhTpsfTYZO3s2dA49qqrGqmxUf52enc65%2FK4%2BSUEWdk1oC8RUsgUgfP4s1N5Mev43W3sktrEmp3Z06S7rlqNwRtoGWMfz1wlCY6epQK96q%2Fn7ruScRfcKD8%2FVYpPsy8c99H%2BClVUaWctrHldgh4pTxV6L5Ikvn%2BGWfEH0Rl4QQdFlrMaOGqu7lRmcNWsuwJ7fDEH0dqy4peGeR8Vsp0qd9X8b9yuU2U%2BybcKIW3SvJQ2rjEZ1V4nOr%2FKTeN75pE3KFmyMRY0jX3xivhgnJzxeuv%2BWdTBLFgLsWLXt0UorHiE3BG87YBBvqOZwbsCH1GPztd66MDX74yCzGin4D%2FDgB9IMq5zm5%2Bx7Wn2ZDtoN6wBTHB%2B2TJEWxq43wK53vUfJMMXn%2BMEGOqUBeu7r4kNilE58KIYoKqlBm7pdVs4eSII%2FQJLA2ePaBEcg3w0OeE4pqtov61urnsyH8XAraFXntEiNB%2BX6qXe0khvOClO3RcH2oCkPmZ8OzTgoMG4jE%2BarZ4NFormv58RdT%2BpAUxmgXgh%2FnkSuHJFdJXSH%2FMgsnDgnRYrtu%2BWXcht%2BQYVlPGEthF5pj8kGHM4Nn68Jjk2VeV2x0JMup2z42YIp75%2BQ&X-Amz-Signature=01526cc6645eeab9279d4900810ca32ada6cdf78fb43c006d8390beedd649b50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOXTFXT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICjBuldOnx25RSQY63NcrBd1X6tjt5HslpBZ%2FIaDWuVFAiEA%2BH%2BaD2gsFaFDOtSQzSYY8Vy7jKo%2FN0d%2BAl0fSr6IuyEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgszG7Jt6jYXkqSXircA0Fb6IcyJMR%2BIQO%2BTK1Ou2eWt9m%2Fqsrseql9F4qhdVGh%2FGcsP3hjvDKGVrfL%2B2XdTKGFSvFKp8xZ97yHs1DzE%2BBa3k%2B4XJwXKs0n8Lf2a3U5s4qj%2BouKTN3JDyYNf%2BJGp3Qel9wJ6SWlZV9tbzSdSR1wq%2BRojWilc16G2ui6n1SXudYz%2Bwp1N682Hj9NN4qgVan9PjvG2NBR0vnrN4a3skf910K7XHAKWevh3hlDjut%2BnYhKSUktEAyNGWTJhTpsfTYZO3s2dA49qqrGqmxUf52enc65%2FK4%2BSUEWdk1oC8RUsgUgfP4s1N5Mev43W3sktrEmp3Z06S7rlqNwRtoGWMfz1wlCY6epQK96q%2Fn7ruScRfcKD8%2FVYpPsy8c99H%2BClVUaWctrHldgh4pTxV6L5Ikvn%2BGWfEH0Rl4QQdFlrMaOGqu7lRmcNWsuwJ7fDEH0dqy4peGeR8Vsp0qd9X8b9yuU2U%2BybcKIW3SvJQ2rjEZ1V4nOr%2FKTeN75pE3KFmyMRY0jX3xivhgnJzxeuv%2BWdTBLFgLsWLXt0UorHiE3BG87YBBvqOZwbsCH1GPztd66MDX74yCzGin4D%2FDgB9IMq5zm5%2Bx7Wn2ZDtoN6wBTHB%2B2TJEWxq43wK53vUfJMMXn%2BMEGOqUBeu7r4kNilE58KIYoKqlBm7pdVs4eSII%2FQJLA2ePaBEcg3w0OeE4pqtov61urnsyH8XAraFXntEiNB%2BX6qXe0khvOClO3RcH2oCkPmZ8OzTgoMG4jE%2BarZ4NFormv58RdT%2BpAUxmgXgh%2FnkSuHJFdJXSH%2FMgsnDgnRYrtu%2BWXcht%2BQYVlPGEthF5pj8kGHM4Nn68Jjk2VeV2x0JMup2z42YIp75%2BQ&X-Amz-Signature=d31aeb1f8f18d9c315499e111d568a348bf4c4ceb7ff87fa74a427dfcf71ef45&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOXTFXT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICjBuldOnx25RSQY63NcrBd1X6tjt5HslpBZ%2FIaDWuVFAiEA%2BH%2BaD2gsFaFDOtSQzSYY8Vy7jKo%2FN0d%2BAl0fSr6IuyEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgszG7Jt6jYXkqSXircA0Fb6IcyJMR%2BIQO%2BTK1Ou2eWt9m%2Fqsrseql9F4qhdVGh%2FGcsP3hjvDKGVrfL%2B2XdTKGFSvFKp8xZ97yHs1DzE%2BBa3k%2B4XJwXKs0n8Lf2a3U5s4qj%2BouKTN3JDyYNf%2BJGp3Qel9wJ6SWlZV9tbzSdSR1wq%2BRojWilc16G2ui6n1SXudYz%2Bwp1N682Hj9NN4qgVan9PjvG2NBR0vnrN4a3skf910K7XHAKWevh3hlDjut%2BnYhKSUktEAyNGWTJhTpsfTYZO3s2dA49qqrGqmxUf52enc65%2FK4%2BSUEWdk1oC8RUsgUgfP4s1N5Mev43W3sktrEmp3Z06S7rlqNwRtoGWMfz1wlCY6epQK96q%2Fn7ruScRfcKD8%2FVYpPsy8c99H%2BClVUaWctrHldgh4pTxV6L5Ikvn%2BGWfEH0Rl4QQdFlrMaOGqu7lRmcNWsuwJ7fDEH0dqy4peGeR8Vsp0qd9X8b9yuU2U%2BybcKIW3SvJQ2rjEZ1V4nOr%2FKTeN75pE3KFmyMRY0jX3xivhgnJzxeuv%2BWdTBLFgLsWLXt0UorHiE3BG87YBBvqOZwbsCH1GPztd66MDX74yCzGin4D%2FDgB9IMq5zm5%2Bx7Wn2ZDtoN6wBTHB%2B2TJEWxq43wK53vUfJMMXn%2BMEGOqUBeu7r4kNilE58KIYoKqlBm7pdVs4eSII%2FQJLA2ePaBEcg3w0OeE4pqtov61urnsyH8XAraFXntEiNB%2BX6qXe0khvOClO3RcH2oCkPmZ8OzTgoMG4jE%2BarZ4NFormv58RdT%2BpAUxmgXgh%2FnkSuHJFdJXSH%2FMgsnDgnRYrtu%2BWXcht%2BQYVlPGEthF5pj8kGHM4Nn68Jjk2VeV2x0JMup2z42YIp75%2BQ&X-Amz-Signature=b7b3dea4e9261528579f3c813d6ba27f01888c7a6a62047818a7129937fe4272&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOXTFXT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICjBuldOnx25RSQY63NcrBd1X6tjt5HslpBZ%2FIaDWuVFAiEA%2BH%2BaD2gsFaFDOtSQzSYY8Vy7jKo%2FN0d%2BAl0fSr6IuyEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgszG7Jt6jYXkqSXircA0Fb6IcyJMR%2BIQO%2BTK1Ou2eWt9m%2Fqsrseql9F4qhdVGh%2FGcsP3hjvDKGVrfL%2B2XdTKGFSvFKp8xZ97yHs1DzE%2BBa3k%2B4XJwXKs0n8Lf2a3U5s4qj%2BouKTN3JDyYNf%2BJGp3Qel9wJ6SWlZV9tbzSdSR1wq%2BRojWilc16G2ui6n1SXudYz%2Bwp1N682Hj9NN4qgVan9PjvG2NBR0vnrN4a3skf910K7XHAKWevh3hlDjut%2BnYhKSUktEAyNGWTJhTpsfTYZO3s2dA49qqrGqmxUf52enc65%2FK4%2BSUEWdk1oC8RUsgUgfP4s1N5Mev43W3sktrEmp3Z06S7rlqNwRtoGWMfz1wlCY6epQK96q%2Fn7ruScRfcKD8%2FVYpPsy8c99H%2BClVUaWctrHldgh4pTxV6L5Ikvn%2BGWfEH0Rl4QQdFlrMaOGqu7lRmcNWsuwJ7fDEH0dqy4peGeR8Vsp0qd9X8b9yuU2U%2BybcKIW3SvJQ2rjEZ1V4nOr%2FKTeN75pE3KFmyMRY0jX3xivhgnJzxeuv%2BWdTBLFgLsWLXt0UorHiE3BG87YBBvqOZwbsCH1GPztd66MDX74yCzGin4D%2FDgB9IMq5zm5%2Bx7Wn2ZDtoN6wBTHB%2B2TJEWxq43wK53vUfJMMXn%2BMEGOqUBeu7r4kNilE58KIYoKqlBm7pdVs4eSII%2FQJLA2ePaBEcg3w0OeE4pqtov61urnsyH8XAraFXntEiNB%2BX6qXe0khvOClO3RcH2oCkPmZ8OzTgoMG4jE%2BarZ4NFormv58RdT%2BpAUxmgXgh%2FnkSuHJFdJXSH%2FMgsnDgnRYrtu%2BWXcht%2BQYVlPGEthF5pj8kGHM4Nn68Jjk2VeV2x0JMup2z42YIp75%2BQ&X-Amz-Signature=3c924fc4bb1c4e8dd9001e3cb11695c69462db0e739214e5c7c37cfc470c45a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOXTFXT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICjBuldOnx25RSQY63NcrBd1X6tjt5HslpBZ%2FIaDWuVFAiEA%2BH%2BaD2gsFaFDOtSQzSYY8Vy7jKo%2FN0d%2BAl0fSr6IuyEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgszG7Jt6jYXkqSXircA0Fb6IcyJMR%2BIQO%2BTK1Ou2eWt9m%2Fqsrseql9F4qhdVGh%2FGcsP3hjvDKGVrfL%2B2XdTKGFSvFKp8xZ97yHs1DzE%2BBa3k%2B4XJwXKs0n8Lf2a3U5s4qj%2BouKTN3JDyYNf%2BJGp3Qel9wJ6SWlZV9tbzSdSR1wq%2BRojWilc16G2ui6n1SXudYz%2Bwp1N682Hj9NN4qgVan9PjvG2NBR0vnrN4a3skf910K7XHAKWevh3hlDjut%2BnYhKSUktEAyNGWTJhTpsfTYZO3s2dA49qqrGqmxUf52enc65%2FK4%2BSUEWdk1oC8RUsgUgfP4s1N5Mev43W3sktrEmp3Z06S7rlqNwRtoGWMfz1wlCY6epQK96q%2Fn7ruScRfcKD8%2FVYpPsy8c99H%2BClVUaWctrHldgh4pTxV6L5Ikvn%2BGWfEH0Rl4QQdFlrMaOGqu7lRmcNWsuwJ7fDEH0dqy4peGeR8Vsp0qd9X8b9yuU2U%2BybcKIW3SvJQ2rjEZ1V4nOr%2FKTeN75pE3KFmyMRY0jX3xivhgnJzxeuv%2BWdTBLFgLsWLXt0UorHiE3BG87YBBvqOZwbsCH1GPztd66MDX74yCzGin4D%2FDgB9IMq5zm5%2Bx7Wn2ZDtoN6wBTHB%2B2TJEWxq43wK53vUfJMMXn%2BMEGOqUBeu7r4kNilE58KIYoKqlBm7pdVs4eSII%2FQJLA2ePaBEcg3w0OeE4pqtov61urnsyH8XAraFXntEiNB%2BX6qXe0khvOClO3RcH2oCkPmZ8OzTgoMG4jE%2BarZ4NFormv58RdT%2BpAUxmgXgh%2FnkSuHJFdJXSH%2FMgsnDgnRYrtu%2BWXcht%2BQYVlPGEthF5pj8kGHM4Nn68Jjk2VeV2x0JMup2z42YIp75%2BQ&X-Amz-Signature=27312ff3f989a43c3dba5d5aa44ca3a6e2bac92cb30b2b56ff5e597acf2cdf24&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
