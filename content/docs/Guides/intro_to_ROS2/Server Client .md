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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN6IUNC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXwWKti5CWOVXN7%2B6kdCbg2936FcTziorRvQsyguLL7AiEAiBhBuTtaNuET%2Bh4PJDrpBOFWKvxy4ob8bicxyE5o7kIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBlG3DJUaMN58mAg5SrcAz%2B2upyetnMp9ufrfS8%2BMmOMrCMV8nkLZgAjYgnj9aj6kuSM4sUyKA7wVlUpcr0ycSt0AZ%2Fd9Lfr8pTXynuBZcSpnZDeOTJDpdGHVRjed6tK2arvUtxtG6A1w1%2BaF85jffhYUs2v28F6%2BQCu%2Bh1LvSgG9FRxfsNJk5%2FGca56adhYxYId7bx0mtX%2BFd%2FXZ3%2BOoVqM7rox9jbLNJSWw7E6PxlxJ3lZaXGOQj818qW4MDOqyuagJ%2Fx%2BRDbVS%2BDw2A6VZP8y9syC85%2FqbYxFoRU9fBymXVoX37S6V0bPzEdRvTyMyzy4SSMcUvBnz7wNpH1JkdWt6PJJ1U%2FKenkzS0YDcgfOe1np0%2Fp04bI%2By1016XKfaV2z89FTqkUMCcfx2YhgcebPbstFnrlz0W00XMJd6%2BkQywmgjsN%2B6r9gwQtqXdfN5jWB8A%2BJhVV7h42sA3gfs61Zbpzb%2FqWO1CxZijOqAeuxabzyQ4h3gSlSXTf%2FQ48yWilrNYVnOaxRHTw2eHeMGnLfd8HZkMzOKuH8mH6mRpUiWDE8CBSvK7QQ8GG1jhcbQYqkVnRCmmFdPk71QhuX936mD9GdvWNmnHwKtBPW%2B68XLuN3IhEWBcOVVexWnqKiduoTbljxIEDeJiTcMNaFusIGOqUB9I3jXjPk8MCRjcA69e7sGr32wHn2cvoclKv153bOmgXuY%2FWUGAGU4vRoT2%2Fk7FGLMkZ7S52LMa9BgHW%2BsArhiq38Czp07iBW6%2FFhTT8Ow6%2BJN793D1C3achqKA29cGoQUXjdULsSxsYf6ZFi9JTZygEbVZqyt5zMXplRNxU6LgoYtzUbUnwdsXztIVpxt0j2saVL%2BeLvQ16lNYNFGSWewpmPUd%2Fx&X-Amz-Signature=dd196d5423f37471cd3ca6789500cbd2cbb827e496bd2cccbdc2153b7ba2c1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN6IUNC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXwWKti5CWOVXN7%2B6kdCbg2936FcTziorRvQsyguLL7AiEAiBhBuTtaNuET%2Bh4PJDrpBOFWKvxy4ob8bicxyE5o7kIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBlG3DJUaMN58mAg5SrcAz%2B2upyetnMp9ufrfS8%2BMmOMrCMV8nkLZgAjYgnj9aj6kuSM4sUyKA7wVlUpcr0ycSt0AZ%2Fd9Lfr8pTXynuBZcSpnZDeOTJDpdGHVRjed6tK2arvUtxtG6A1w1%2BaF85jffhYUs2v28F6%2BQCu%2Bh1LvSgG9FRxfsNJk5%2FGca56adhYxYId7bx0mtX%2BFd%2FXZ3%2BOoVqM7rox9jbLNJSWw7E6PxlxJ3lZaXGOQj818qW4MDOqyuagJ%2Fx%2BRDbVS%2BDw2A6VZP8y9syC85%2FqbYxFoRU9fBymXVoX37S6V0bPzEdRvTyMyzy4SSMcUvBnz7wNpH1JkdWt6PJJ1U%2FKenkzS0YDcgfOe1np0%2Fp04bI%2By1016XKfaV2z89FTqkUMCcfx2YhgcebPbstFnrlz0W00XMJd6%2BkQywmgjsN%2B6r9gwQtqXdfN5jWB8A%2BJhVV7h42sA3gfs61Zbpzb%2FqWO1CxZijOqAeuxabzyQ4h3gSlSXTf%2FQ48yWilrNYVnOaxRHTw2eHeMGnLfd8HZkMzOKuH8mH6mRpUiWDE8CBSvK7QQ8GG1jhcbQYqkVnRCmmFdPk71QhuX936mD9GdvWNmnHwKtBPW%2B68XLuN3IhEWBcOVVexWnqKiduoTbljxIEDeJiTcMNaFusIGOqUB9I3jXjPk8MCRjcA69e7sGr32wHn2cvoclKv153bOmgXuY%2FWUGAGU4vRoT2%2Fk7FGLMkZ7S52LMa9BgHW%2BsArhiq38Czp07iBW6%2FFhTT8Ow6%2BJN793D1C3achqKA29cGoQUXjdULsSxsYf6ZFi9JTZygEbVZqyt5zMXplRNxU6LgoYtzUbUnwdsXztIVpxt0j2saVL%2BeLvQ16lNYNFGSWewpmPUd%2Fx&X-Amz-Signature=00e409324c124e67d907298c2c89749f71baac3cedc93dc20f02516ef1c0ffb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN6IUNC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXwWKti5CWOVXN7%2B6kdCbg2936FcTziorRvQsyguLL7AiEAiBhBuTtaNuET%2Bh4PJDrpBOFWKvxy4ob8bicxyE5o7kIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBlG3DJUaMN58mAg5SrcAz%2B2upyetnMp9ufrfS8%2BMmOMrCMV8nkLZgAjYgnj9aj6kuSM4sUyKA7wVlUpcr0ycSt0AZ%2Fd9Lfr8pTXynuBZcSpnZDeOTJDpdGHVRjed6tK2arvUtxtG6A1w1%2BaF85jffhYUs2v28F6%2BQCu%2Bh1LvSgG9FRxfsNJk5%2FGca56adhYxYId7bx0mtX%2BFd%2FXZ3%2BOoVqM7rox9jbLNJSWw7E6PxlxJ3lZaXGOQj818qW4MDOqyuagJ%2Fx%2BRDbVS%2BDw2A6VZP8y9syC85%2FqbYxFoRU9fBymXVoX37S6V0bPzEdRvTyMyzy4SSMcUvBnz7wNpH1JkdWt6PJJ1U%2FKenkzS0YDcgfOe1np0%2Fp04bI%2By1016XKfaV2z89FTqkUMCcfx2YhgcebPbstFnrlz0W00XMJd6%2BkQywmgjsN%2B6r9gwQtqXdfN5jWB8A%2BJhVV7h42sA3gfs61Zbpzb%2FqWO1CxZijOqAeuxabzyQ4h3gSlSXTf%2FQ48yWilrNYVnOaxRHTw2eHeMGnLfd8HZkMzOKuH8mH6mRpUiWDE8CBSvK7QQ8GG1jhcbQYqkVnRCmmFdPk71QhuX936mD9GdvWNmnHwKtBPW%2B68XLuN3IhEWBcOVVexWnqKiduoTbljxIEDeJiTcMNaFusIGOqUB9I3jXjPk8MCRjcA69e7sGr32wHn2cvoclKv153bOmgXuY%2FWUGAGU4vRoT2%2Fk7FGLMkZ7S52LMa9BgHW%2BsArhiq38Czp07iBW6%2FFhTT8Ow6%2BJN793D1C3achqKA29cGoQUXjdULsSxsYf6ZFi9JTZygEbVZqyt5zMXplRNxU6LgoYtzUbUnwdsXztIVpxt0j2saVL%2BeLvQ16lNYNFGSWewpmPUd%2Fx&X-Amz-Signature=99d4c1767ca34cf43111b10cc32fb81d5f270b1e7585b6de8dfa8f26e43e1432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN6IUNC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXwWKti5CWOVXN7%2B6kdCbg2936FcTziorRvQsyguLL7AiEAiBhBuTtaNuET%2Bh4PJDrpBOFWKvxy4ob8bicxyE5o7kIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBlG3DJUaMN58mAg5SrcAz%2B2upyetnMp9ufrfS8%2BMmOMrCMV8nkLZgAjYgnj9aj6kuSM4sUyKA7wVlUpcr0ycSt0AZ%2Fd9Lfr8pTXynuBZcSpnZDeOTJDpdGHVRjed6tK2arvUtxtG6A1w1%2BaF85jffhYUs2v28F6%2BQCu%2Bh1LvSgG9FRxfsNJk5%2FGca56adhYxYId7bx0mtX%2BFd%2FXZ3%2BOoVqM7rox9jbLNJSWw7E6PxlxJ3lZaXGOQj818qW4MDOqyuagJ%2Fx%2BRDbVS%2BDw2A6VZP8y9syC85%2FqbYxFoRU9fBymXVoX37S6V0bPzEdRvTyMyzy4SSMcUvBnz7wNpH1JkdWt6PJJ1U%2FKenkzS0YDcgfOe1np0%2Fp04bI%2By1016XKfaV2z89FTqkUMCcfx2YhgcebPbstFnrlz0W00XMJd6%2BkQywmgjsN%2B6r9gwQtqXdfN5jWB8A%2BJhVV7h42sA3gfs61Zbpzb%2FqWO1CxZijOqAeuxabzyQ4h3gSlSXTf%2FQ48yWilrNYVnOaxRHTw2eHeMGnLfd8HZkMzOKuH8mH6mRpUiWDE8CBSvK7QQ8GG1jhcbQYqkVnRCmmFdPk71QhuX936mD9GdvWNmnHwKtBPW%2B68XLuN3IhEWBcOVVexWnqKiduoTbljxIEDeJiTcMNaFusIGOqUB9I3jXjPk8MCRjcA69e7sGr32wHn2cvoclKv153bOmgXuY%2FWUGAGU4vRoT2%2Fk7FGLMkZ7S52LMa9BgHW%2BsArhiq38Czp07iBW6%2FFhTT8Ow6%2BJN793D1C3achqKA29cGoQUXjdULsSxsYf6ZFi9JTZygEbVZqyt5zMXplRNxU6LgoYtzUbUnwdsXztIVpxt0j2saVL%2BeLvQ16lNYNFGSWewpmPUd%2Fx&X-Amz-Signature=12ee68d702c52ac80a65e2d7b0c76a284e8c8463c3e3c0921455a99361733ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN6IUNC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXwWKti5CWOVXN7%2B6kdCbg2936FcTziorRvQsyguLL7AiEAiBhBuTtaNuET%2Bh4PJDrpBOFWKvxy4ob8bicxyE5o7kIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBlG3DJUaMN58mAg5SrcAz%2B2upyetnMp9ufrfS8%2BMmOMrCMV8nkLZgAjYgnj9aj6kuSM4sUyKA7wVlUpcr0ycSt0AZ%2Fd9Lfr8pTXynuBZcSpnZDeOTJDpdGHVRjed6tK2arvUtxtG6A1w1%2BaF85jffhYUs2v28F6%2BQCu%2Bh1LvSgG9FRxfsNJk5%2FGca56adhYxYId7bx0mtX%2BFd%2FXZ3%2BOoVqM7rox9jbLNJSWw7E6PxlxJ3lZaXGOQj818qW4MDOqyuagJ%2Fx%2BRDbVS%2BDw2A6VZP8y9syC85%2FqbYxFoRU9fBymXVoX37S6V0bPzEdRvTyMyzy4SSMcUvBnz7wNpH1JkdWt6PJJ1U%2FKenkzS0YDcgfOe1np0%2Fp04bI%2By1016XKfaV2z89FTqkUMCcfx2YhgcebPbstFnrlz0W00XMJd6%2BkQywmgjsN%2B6r9gwQtqXdfN5jWB8A%2BJhVV7h42sA3gfs61Zbpzb%2FqWO1CxZijOqAeuxabzyQ4h3gSlSXTf%2FQ48yWilrNYVnOaxRHTw2eHeMGnLfd8HZkMzOKuH8mH6mRpUiWDE8CBSvK7QQ8GG1jhcbQYqkVnRCmmFdPk71QhuX936mD9GdvWNmnHwKtBPW%2B68XLuN3IhEWBcOVVexWnqKiduoTbljxIEDeJiTcMNaFusIGOqUB9I3jXjPk8MCRjcA69e7sGr32wHn2cvoclKv153bOmgXuY%2FWUGAGU4vRoT2%2Fk7FGLMkZ7S52LMa9BgHW%2BsArhiq38Czp07iBW6%2FFhTT8Ow6%2BJN793D1C3achqKA29cGoQUXjdULsSxsYf6ZFi9JTZygEbVZqyt5zMXplRNxU6LgoYtzUbUnwdsXztIVpxt0j2saVL%2BeLvQ16lNYNFGSWewpmPUd%2Fx&X-Amz-Signature=dbdb86e31ff52ff9a78dd0ec93b46d9fad12cd93258403ddc663654a6592187a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
