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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBKRAW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyuC%2FKeVAYUZD%2BEOTI7bUeyXVVKZ9TzhTcAbwyjn5XZAIhAN8SRQwPMezLrKLhKipzPI9wwqr64pz3wbF12kahZ0RTKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywhLeNbs2u%2FmXXK6Mq3AMM87bAvOfEpHUZ6QLDLDx8OeiOJpaub6L9CnNMLQKbgtYTO%2BBEgTfAhQrr237DRwqO17%2F1rfpFHRDn0dMi8qFvOu%2FaHncDyQI9vTPWUT6O9LaEB4TsHGSQmAQ6In7pc7prBxyVs3Kvr0ygOlnrpLiW3AfWKe%2BrE1RFNuqkv3GjHfnRX%2FH%2FtU08WHwWNqw2Oiyg8qzfFA2KKUg1sNmWF5EIAAH396Vsp1zAQV9%2BCXONFe0vNEB%2FiQrcKIO4vndFDEKjoHRw%2BwtcKpETwKrFmRITivSWhEqHgoPOkcEbJc8RbtdiMnBQXnp%2FzFxo3jRLblWYnhHVx5%2Bm%2BGMt%2FwVp4L4pggLf%2BtvHP6N8roAGWeWhfd4lrNS34WFlQ1W21bYh%2BM902I6ov2gebahzerqvn0oZzocOjE%2BtZ7tW5jBapDPswq%2F9wIcxi7QYBLeFRRZYq7JjWw%2FI0QHlM1BcHpZ7NraY4q3krGxASMBrFuNa29i%2F%2Fm0jvuH0%2F%2Bt8BOPd1V9pdMyROmgwdjpjRyYdt0ehyu%2Fx4Bs3QJbAv7GoSTu2oqoIAP1a7UvIq7NvSrIGVTNtkA5zuIjK5sA2pok3I9ngFDO7jEbgmHXgY6lFLtirqK2uGzYntZfrbawa383a1zC10t29BjqkAf0e2NXWlgXk0Js5Qsny4Jx53MyTa4A6bsx%2FZVwv52mITzUcX%2BGc%2B2W00o39C9xxC3kJi8tUDVDIOXiqx0pNT6bGqc2KisUkGfJy%2Ffk0%2B5u5uXQtPenWLhL6tSiylS1H0XOoh86f0r%2BCSRf3Zc2sHj6iVSXZ3NlVGpwm8n8RMJUy1w77TN1VwraAlwWNwSs6GcFQwsO4olO1%2Bqs728C7oGLa9rVF&X-Amz-Signature=cc5409ff05d6e515d1a59fa63513c1feb3b31c5e9c8958b95e201ce8a6652fec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBKRAW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyuC%2FKeVAYUZD%2BEOTI7bUeyXVVKZ9TzhTcAbwyjn5XZAIhAN8SRQwPMezLrKLhKipzPI9wwqr64pz3wbF12kahZ0RTKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywhLeNbs2u%2FmXXK6Mq3AMM87bAvOfEpHUZ6QLDLDx8OeiOJpaub6L9CnNMLQKbgtYTO%2BBEgTfAhQrr237DRwqO17%2F1rfpFHRDn0dMi8qFvOu%2FaHncDyQI9vTPWUT6O9LaEB4TsHGSQmAQ6In7pc7prBxyVs3Kvr0ygOlnrpLiW3AfWKe%2BrE1RFNuqkv3GjHfnRX%2FH%2FtU08WHwWNqw2Oiyg8qzfFA2KKUg1sNmWF5EIAAH396Vsp1zAQV9%2BCXONFe0vNEB%2FiQrcKIO4vndFDEKjoHRw%2BwtcKpETwKrFmRITivSWhEqHgoPOkcEbJc8RbtdiMnBQXnp%2FzFxo3jRLblWYnhHVx5%2Bm%2BGMt%2FwVp4L4pggLf%2BtvHP6N8roAGWeWhfd4lrNS34WFlQ1W21bYh%2BM902I6ov2gebahzerqvn0oZzocOjE%2BtZ7tW5jBapDPswq%2F9wIcxi7QYBLeFRRZYq7JjWw%2FI0QHlM1BcHpZ7NraY4q3krGxASMBrFuNa29i%2F%2Fm0jvuH0%2F%2Bt8BOPd1V9pdMyROmgwdjpjRyYdt0ehyu%2Fx4Bs3QJbAv7GoSTu2oqoIAP1a7UvIq7NvSrIGVTNtkA5zuIjK5sA2pok3I9ngFDO7jEbgmHXgY6lFLtirqK2uGzYntZfrbawa383a1zC10t29BjqkAf0e2NXWlgXk0Js5Qsny4Jx53MyTa4A6bsx%2FZVwv52mITzUcX%2BGc%2B2W00o39C9xxC3kJi8tUDVDIOXiqx0pNT6bGqc2KisUkGfJy%2Ffk0%2B5u5uXQtPenWLhL6tSiylS1H0XOoh86f0r%2BCSRf3Zc2sHj6iVSXZ3NlVGpwm8n8RMJUy1w77TN1VwraAlwWNwSs6GcFQwsO4olO1%2Bqs728C7oGLa9rVF&X-Amz-Signature=7a8f946c8c844dd9777fb54634fc4972cc268c674890cade665c26790e25cbad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBKRAW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyuC%2FKeVAYUZD%2BEOTI7bUeyXVVKZ9TzhTcAbwyjn5XZAIhAN8SRQwPMezLrKLhKipzPI9wwqr64pz3wbF12kahZ0RTKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywhLeNbs2u%2FmXXK6Mq3AMM87bAvOfEpHUZ6QLDLDx8OeiOJpaub6L9CnNMLQKbgtYTO%2BBEgTfAhQrr237DRwqO17%2F1rfpFHRDn0dMi8qFvOu%2FaHncDyQI9vTPWUT6O9LaEB4TsHGSQmAQ6In7pc7prBxyVs3Kvr0ygOlnrpLiW3AfWKe%2BrE1RFNuqkv3GjHfnRX%2FH%2FtU08WHwWNqw2Oiyg8qzfFA2KKUg1sNmWF5EIAAH396Vsp1zAQV9%2BCXONFe0vNEB%2FiQrcKIO4vndFDEKjoHRw%2BwtcKpETwKrFmRITivSWhEqHgoPOkcEbJc8RbtdiMnBQXnp%2FzFxo3jRLblWYnhHVx5%2Bm%2BGMt%2FwVp4L4pggLf%2BtvHP6N8roAGWeWhfd4lrNS34WFlQ1W21bYh%2BM902I6ov2gebahzerqvn0oZzocOjE%2BtZ7tW5jBapDPswq%2F9wIcxi7QYBLeFRRZYq7JjWw%2FI0QHlM1BcHpZ7NraY4q3krGxASMBrFuNa29i%2F%2Fm0jvuH0%2F%2Bt8BOPd1V9pdMyROmgwdjpjRyYdt0ehyu%2Fx4Bs3QJbAv7GoSTu2oqoIAP1a7UvIq7NvSrIGVTNtkA5zuIjK5sA2pok3I9ngFDO7jEbgmHXgY6lFLtirqK2uGzYntZfrbawa383a1zC10t29BjqkAf0e2NXWlgXk0Js5Qsny4Jx53MyTa4A6bsx%2FZVwv52mITzUcX%2BGc%2B2W00o39C9xxC3kJi8tUDVDIOXiqx0pNT6bGqc2KisUkGfJy%2Ffk0%2B5u5uXQtPenWLhL6tSiylS1H0XOoh86f0r%2BCSRf3Zc2sHj6iVSXZ3NlVGpwm8n8RMJUy1w77TN1VwraAlwWNwSs6GcFQwsO4olO1%2Bqs728C7oGLa9rVF&X-Amz-Signature=c0133bc005a3aa359582cfc2fc69ace0811a36d6d4e65b7da8c9c9377de1a84e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBKRAW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyuC%2FKeVAYUZD%2BEOTI7bUeyXVVKZ9TzhTcAbwyjn5XZAIhAN8SRQwPMezLrKLhKipzPI9wwqr64pz3wbF12kahZ0RTKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywhLeNbs2u%2FmXXK6Mq3AMM87bAvOfEpHUZ6QLDLDx8OeiOJpaub6L9CnNMLQKbgtYTO%2BBEgTfAhQrr237DRwqO17%2F1rfpFHRDn0dMi8qFvOu%2FaHncDyQI9vTPWUT6O9LaEB4TsHGSQmAQ6In7pc7prBxyVs3Kvr0ygOlnrpLiW3AfWKe%2BrE1RFNuqkv3GjHfnRX%2FH%2FtU08WHwWNqw2Oiyg8qzfFA2KKUg1sNmWF5EIAAH396Vsp1zAQV9%2BCXONFe0vNEB%2FiQrcKIO4vndFDEKjoHRw%2BwtcKpETwKrFmRITivSWhEqHgoPOkcEbJc8RbtdiMnBQXnp%2FzFxo3jRLblWYnhHVx5%2Bm%2BGMt%2FwVp4L4pggLf%2BtvHP6N8roAGWeWhfd4lrNS34WFlQ1W21bYh%2BM902I6ov2gebahzerqvn0oZzocOjE%2BtZ7tW5jBapDPswq%2F9wIcxi7QYBLeFRRZYq7JjWw%2FI0QHlM1BcHpZ7NraY4q3krGxASMBrFuNa29i%2F%2Fm0jvuH0%2F%2Bt8BOPd1V9pdMyROmgwdjpjRyYdt0ehyu%2Fx4Bs3QJbAv7GoSTu2oqoIAP1a7UvIq7NvSrIGVTNtkA5zuIjK5sA2pok3I9ngFDO7jEbgmHXgY6lFLtirqK2uGzYntZfrbawa383a1zC10t29BjqkAf0e2NXWlgXk0Js5Qsny4Jx53MyTa4A6bsx%2FZVwv52mITzUcX%2BGc%2B2W00o39C9xxC3kJi8tUDVDIOXiqx0pNT6bGqc2KisUkGfJy%2Ffk0%2B5u5uXQtPenWLhL6tSiylS1H0XOoh86f0r%2BCSRf3Zc2sHj6iVSXZ3NlVGpwm8n8RMJUy1w77TN1VwraAlwWNwSs6GcFQwsO4olO1%2Bqs728C7oGLa9rVF&X-Amz-Signature=6caa198ebfeb5d1adec7700d94e680df7e7c9c620fe8bd493a833bbdd96b85c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBKRAW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyuC%2FKeVAYUZD%2BEOTI7bUeyXVVKZ9TzhTcAbwyjn5XZAIhAN8SRQwPMezLrKLhKipzPI9wwqr64pz3wbF12kahZ0RTKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywhLeNbs2u%2FmXXK6Mq3AMM87bAvOfEpHUZ6QLDLDx8OeiOJpaub6L9CnNMLQKbgtYTO%2BBEgTfAhQrr237DRwqO17%2F1rfpFHRDn0dMi8qFvOu%2FaHncDyQI9vTPWUT6O9LaEB4TsHGSQmAQ6In7pc7prBxyVs3Kvr0ygOlnrpLiW3AfWKe%2BrE1RFNuqkv3GjHfnRX%2FH%2FtU08WHwWNqw2Oiyg8qzfFA2KKUg1sNmWF5EIAAH396Vsp1zAQV9%2BCXONFe0vNEB%2FiQrcKIO4vndFDEKjoHRw%2BwtcKpETwKrFmRITivSWhEqHgoPOkcEbJc8RbtdiMnBQXnp%2FzFxo3jRLblWYnhHVx5%2Bm%2BGMt%2FwVp4L4pggLf%2BtvHP6N8roAGWeWhfd4lrNS34WFlQ1W21bYh%2BM902I6ov2gebahzerqvn0oZzocOjE%2BtZ7tW5jBapDPswq%2F9wIcxi7QYBLeFRRZYq7JjWw%2FI0QHlM1BcHpZ7NraY4q3krGxASMBrFuNa29i%2F%2Fm0jvuH0%2F%2Bt8BOPd1V9pdMyROmgwdjpjRyYdt0ehyu%2Fx4Bs3QJbAv7GoSTu2oqoIAP1a7UvIq7NvSrIGVTNtkA5zuIjK5sA2pok3I9ngFDO7jEbgmHXgY6lFLtirqK2uGzYntZfrbawa383a1zC10t29BjqkAf0e2NXWlgXk0Js5Qsny4Jx53MyTa4A6bsx%2FZVwv52mITzUcX%2BGc%2B2W00o39C9xxC3kJi8tUDVDIOXiqx0pNT6bGqc2KisUkGfJy%2Ffk0%2B5u5uXQtPenWLhL6tSiylS1H0XOoh86f0r%2BCSRf3Zc2sHj6iVSXZ3NlVGpwm8n8RMJUy1w77TN1VwraAlwWNwSs6GcFQwsO4olO1%2Bqs728C7oGLa9rVF&X-Amz-Signature=22e080803ad262a75c5cb0263bae0e23116bece4f9fcc7404dd2465536a4aba0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
