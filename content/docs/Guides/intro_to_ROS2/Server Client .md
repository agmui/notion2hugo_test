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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UMAZGX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6E6UrB5dYCJnMr6SkDxGQyol0ApnxpR24zgNao6xy6AiBgfypBNJ%2F1TFYZr5Pf%2Fz88hdbD7lxbjxJs1nb%2FK5DB5ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMj6BfX7ThAyoghchWKtwDM6NaxxDmr74yA%2FqyZREFcljSAYDZ6fCmRxEekDXDKBfcwBuVEMozBra75LykskIuKR%2FJP6y%2BomzVlyUsc7sulPD1vEDBijBCu4jskbaah0mbFCBNsMHxOJ4DR1ZFik8zpwY1mIhk6PlpQtVcSXbt6h3xvEQuADPkPLuwh58ejIJxtWRpMuBejumczxK3nXFxuGfNnpTS6Oudsgxe8F44L1pFrKJOJ0qdmZjvCXx5dRsuhhrqnQKzaSB0E7UAG2k1yViCIx%2Fdr5azR5J%2BbSgz2WibtOxdbcid1A0wzPWjjuh6iQqbmoAAdB6F9Ea%2Fpd5VpU9rCgZ9KUvDrfyUwukGous4Yfn3gcO8TCj3W%2B64Wtwt1IdHXaqsXmj4i5EgDMPKywqbIPBfKo2ADaOvSBSfW2pgZPwtDT1OeELHul3m6xgiNhZZMb0Sd2B6Qr8PPX3yib%2F4bxtcjL7Tgc5OJFm8lOhZ0dHd1fE6WfrokEOTExDuX1uyqDg9Y5ao3k8rBfDwm8aOj8tXe7HZpGOqI7qHXPHF7yf00qPXwZ3gPbfbLCIAkQDtWo7joMYQqCMEjK%2Fll8fZ5CJa8nAPxHi1HlKPkpna4AsHelSIvokg9%2B3nVkNPOAnkZvmCV86Ut%2BAwmO%2FCvwY6pgF8sjapQjbW0pIUB6lXsza3kLGUn3w%2B2wLtNh5%2FoxK7b6zoMBT60qqV9gew4TtiWIdRdzLtZkSL3EsMPqtKnU6ljAvyPobhQFLgk%2BMABW0EwaxixC6l8ldULVSbTgXD16FF079oRonXCfVvKIhp7d5oDrMcqby62OX%2FX35YP%2F6WF9%2B1zi%2BGccyC4Ypgc%2F19lf5BDmT%2Bg%2B57hnj475KJTqo1iBS6%2B0F8&X-Amz-Signature=7d843c2970ab78e7cb847ebde0397a3baf1674a6a8bda812a2922898636ce015&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UMAZGX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6E6UrB5dYCJnMr6SkDxGQyol0ApnxpR24zgNao6xy6AiBgfypBNJ%2F1TFYZr5Pf%2Fz88hdbD7lxbjxJs1nb%2FK5DB5ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMj6BfX7ThAyoghchWKtwDM6NaxxDmr74yA%2FqyZREFcljSAYDZ6fCmRxEekDXDKBfcwBuVEMozBra75LykskIuKR%2FJP6y%2BomzVlyUsc7sulPD1vEDBijBCu4jskbaah0mbFCBNsMHxOJ4DR1ZFik8zpwY1mIhk6PlpQtVcSXbt6h3xvEQuADPkPLuwh58ejIJxtWRpMuBejumczxK3nXFxuGfNnpTS6Oudsgxe8F44L1pFrKJOJ0qdmZjvCXx5dRsuhhrqnQKzaSB0E7UAG2k1yViCIx%2Fdr5azR5J%2BbSgz2WibtOxdbcid1A0wzPWjjuh6iQqbmoAAdB6F9Ea%2Fpd5VpU9rCgZ9KUvDrfyUwukGous4Yfn3gcO8TCj3W%2B64Wtwt1IdHXaqsXmj4i5EgDMPKywqbIPBfKo2ADaOvSBSfW2pgZPwtDT1OeELHul3m6xgiNhZZMb0Sd2B6Qr8PPX3yib%2F4bxtcjL7Tgc5OJFm8lOhZ0dHd1fE6WfrokEOTExDuX1uyqDg9Y5ao3k8rBfDwm8aOj8tXe7HZpGOqI7qHXPHF7yf00qPXwZ3gPbfbLCIAkQDtWo7joMYQqCMEjK%2Fll8fZ5CJa8nAPxHi1HlKPkpna4AsHelSIvokg9%2B3nVkNPOAnkZvmCV86Ut%2BAwmO%2FCvwY6pgF8sjapQjbW0pIUB6lXsza3kLGUn3w%2B2wLtNh5%2FoxK7b6zoMBT60qqV9gew4TtiWIdRdzLtZkSL3EsMPqtKnU6ljAvyPobhQFLgk%2BMABW0EwaxixC6l8ldULVSbTgXD16FF079oRonXCfVvKIhp7d5oDrMcqby62OX%2FX35YP%2F6WF9%2B1zi%2BGccyC4Ypgc%2F19lf5BDmT%2Bg%2B57hnj475KJTqo1iBS6%2B0F8&X-Amz-Signature=92226484f709fb39e649cda1e0f82ce0d0ed2ce1d7c786a565cb52e000091e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UMAZGX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6E6UrB5dYCJnMr6SkDxGQyol0ApnxpR24zgNao6xy6AiBgfypBNJ%2F1TFYZr5Pf%2Fz88hdbD7lxbjxJs1nb%2FK5DB5ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMj6BfX7ThAyoghchWKtwDM6NaxxDmr74yA%2FqyZREFcljSAYDZ6fCmRxEekDXDKBfcwBuVEMozBra75LykskIuKR%2FJP6y%2BomzVlyUsc7sulPD1vEDBijBCu4jskbaah0mbFCBNsMHxOJ4DR1ZFik8zpwY1mIhk6PlpQtVcSXbt6h3xvEQuADPkPLuwh58ejIJxtWRpMuBejumczxK3nXFxuGfNnpTS6Oudsgxe8F44L1pFrKJOJ0qdmZjvCXx5dRsuhhrqnQKzaSB0E7UAG2k1yViCIx%2Fdr5azR5J%2BbSgz2WibtOxdbcid1A0wzPWjjuh6iQqbmoAAdB6F9Ea%2Fpd5VpU9rCgZ9KUvDrfyUwukGous4Yfn3gcO8TCj3W%2B64Wtwt1IdHXaqsXmj4i5EgDMPKywqbIPBfKo2ADaOvSBSfW2pgZPwtDT1OeELHul3m6xgiNhZZMb0Sd2B6Qr8PPX3yib%2F4bxtcjL7Tgc5OJFm8lOhZ0dHd1fE6WfrokEOTExDuX1uyqDg9Y5ao3k8rBfDwm8aOj8tXe7HZpGOqI7qHXPHF7yf00qPXwZ3gPbfbLCIAkQDtWo7joMYQqCMEjK%2Fll8fZ5CJa8nAPxHi1HlKPkpna4AsHelSIvokg9%2B3nVkNPOAnkZvmCV86Ut%2BAwmO%2FCvwY6pgF8sjapQjbW0pIUB6lXsza3kLGUn3w%2B2wLtNh5%2FoxK7b6zoMBT60qqV9gew4TtiWIdRdzLtZkSL3EsMPqtKnU6ljAvyPobhQFLgk%2BMABW0EwaxixC6l8ldULVSbTgXD16FF079oRonXCfVvKIhp7d5oDrMcqby62OX%2FX35YP%2F6WF9%2B1zi%2BGccyC4Ypgc%2F19lf5BDmT%2Bg%2B57hnj475KJTqo1iBS6%2B0F8&X-Amz-Signature=129646a333fc146a30bd045a9c1b76f3beef53f430b60ed9bfd8abddc3b8f50c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UMAZGX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6E6UrB5dYCJnMr6SkDxGQyol0ApnxpR24zgNao6xy6AiBgfypBNJ%2F1TFYZr5Pf%2Fz88hdbD7lxbjxJs1nb%2FK5DB5ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMj6BfX7ThAyoghchWKtwDM6NaxxDmr74yA%2FqyZREFcljSAYDZ6fCmRxEekDXDKBfcwBuVEMozBra75LykskIuKR%2FJP6y%2BomzVlyUsc7sulPD1vEDBijBCu4jskbaah0mbFCBNsMHxOJ4DR1ZFik8zpwY1mIhk6PlpQtVcSXbt6h3xvEQuADPkPLuwh58ejIJxtWRpMuBejumczxK3nXFxuGfNnpTS6Oudsgxe8F44L1pFrKJOJ0qdmZjvCXx5dRsuhhrqnQKzaSB0E7UAG2k1yViCIx%2Fdr5azR5J%2BbSgz2WibtOxdbcid1A0wzPWjjuh6iQqbmoAAdB6F9Ea%2Fpd5VpU9rCgZ9KUvDrfyUwukGous4Yfn3gcO8TCj3W%2B64Wtwt1IdHXaqsXmj4i5EgDMPKywqbIPBfKo2ADaOvSBSfW2pgZPwtDT1OeELHul3m6xgiNhZZMb0Sd2B6Qr8PPX3yib%2F4bxtcjL7Tgc5OJFm8lOhZ0dHd1fE6WfrokEOTExDuX1uyqDg9Y5ao3k8rBfDwm8aOj8tXe7HZpGOqI7qHXPHF7yf00qPXwZ3gPbfbLCIAkQDtWo7joMYQqCMEjK%2Fll8fZ5CJa8nAPxHi1HlKPkpna4AsHelSIvokg9%2B3nVkNPOAnkZvmCV86Ut%2BAwmO%2FCvwY6pgF8sjapQjbW0pIUB6lXsza3kLGUn3w%2B2wLtNh5%2FoxK7b6zoMBT60qqV9gew4TtiWIdRdzLtZkSL3EsMPqtKnU6ljAvyPobhQFLgk%2BMABW0EwaxixC6l8ldULVSbTgXD16FF079oRonXCfVvKIhp7d5oDrMcqby62OX%2FX35YP%2F6WF9%2B1zi%2BGccyC4Ypgc%2F19lf5BDmT%2Bg%2B57hnj475KJTqo1iBS6%2B0F8&X-Amz-Signature=28f9f9404d1c9514a09cd45bca0c8e4aa3558475f05fddd0870ea15e6dd5107a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UMAZGX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6E6UrB5dYCJnMr6SkDxGQyol0ApnxpR24zgNao6xy6AiBgfypBNJ%2F1TFYZr5Pf%2Fz88hdbD7lxbjxJs1nb%2FK5DB5ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMj6BfX7ThAyoghchWKtwDM6NaxxDmr74yA%2FqyZREFcljSAYDZ6fCmRxEekDXDKBfcwBuVEMozBra75LykskIuKR%2FJP6y%2BomzVlyUsc7sulPD1vEDBijBCu4jskbaah0mbFCBNsMHxOJ4DR1ZFik8zpwY1mIhk6PlpQtVcSXbt6h3xvEQuADPkPLuwh58ejIJxtWRpMuBejumczxK3nXFxuGfNnpTS6Oudsgxe8F44L1pFrKJOJ0qdmZjvCXx5dRsuhhrqnQKzaSB0E7UAG2k1yViCIx%2Fdr5azR5J%2BbSgz2WibtOxdbcid1A0wzPWjjuh6iQqbmoAAdB6F9Ea%2Fpd5VpU9rCgZ9KUvDrfyUwukGous4Yfn3gcO8TCj3W%2B64Wtwt1IdHXaqsXmj4i5EgDMPKywqbIPBfKo2ADaOvSBSfW2pgZPwtDT1OeELHul3m6xgiNhZZMb0Sd2B6Qr8PPX3yib%2F4bxtcjL7Tgc5OJFm8lOhZ0dHd1fE6WfrokEOTExDuX1uyqDg9Y5ao3k8rBfDwm8aOj8tXe7HZpGOqI7qHXPHF7yf00qPXwZ3gPbfbLCIAkQDtWo7joMYQqCMEjK%2Fll8fZ5CJa8nAPxHi1HlKPkpna4AsHelSIvokg9%2B3nVkNPOAnkZvmCV86Ut%2BAwmO%2FCvwY6pgF8sjapQjbW0pIUB6lXsza3kLGUn3w%2B2wLtNh5%2FoxK7b6zoMBT60qqV9gew4TtiWIdRdzLtZkSL3EsMPqtKnU6ljAvyPobhQFLgk%2BMABW0EwaxixC6l8ldULVSbTgXD16FF079oRonXCfVvKIhp7d5oDrMcqby62OX%2FX35YP%2F6WF9%2B1zi%2BGccyC4Ypgc%2F19lf5BDmT%2Bg%2B57hnj475KJTqo1iBS6%2B0F8&X-Amz-Signature=707d9c4a5baba775f0d0298c6395e0e81acba6631e13dbbe2bea30fbca07fc84&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
