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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEW2FXF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDwFXYX2sLeLa4pnDk8o7W9%2BfP3LJxCg68u%2BFydnLeJHAiEA6FR%2Fzq1aJdd8xU7MP0l%2Fp1IZ9oS3OaS%2F5kn44KAks04qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkNLK9C3KctWGhWhyrcA3FSvcqpdVtwepZ03Uz2SfKeVbnU052tw%2Fcslp00aT4z8oS0UUepRRd20RiWL4nIpFS6YZ18dDbjPvx2t3Nj1nGYdaxFMgccHxBsFe2ksYOKYq1J3RZWm5gk04R537fuyv%2FeTbGe1SL95YzGmv6qNIk8taw17HmV%2F5uDi8PDwqGBwri9kFRb1RegoAVT0YG1ZGKR%2BYh945heZwaTKLyr4JPlJlvwN9H1tuSwtXZMTIRyvfoYTw4G%2Byv2o2u2FkDPYcYwztgEijR7VhOOWzKqyd848Z8c8XeSfl8RhWNMOsUEpAft4vx5w3qmT4klYt91oc9Dtr5Pyq8BR4690MUX7bAavjKvGLSGy07NtP7JEpYmWKcsRlo8s6HxIz2bJ7JotTaz8M5RGEUYH%2Bnaj41Vn21cShYa%2Fou%2Fq24eqao4SWncsffGdgj1743OPS7htncIchFiEXti4mNwv0KJSqU0MDUGQXqMwMuH%2B118apM6k8hYiJJ6nsuX1Jk8%2BmVE0U8ZPQqSp7AX9xI28hlUDpYrHAEVfpy2P9om1QcrEcs8WMcE7HFzmPBRSEEgIEsoQiR84GoD%2FHd9V3w9YrUMsgXaHBR6WHd42%2BXIsEI7%2F0EVfYMkQZd2xkvlDsQKguVIMO3emr0GOqUBExRJHVNJHAvpIdfIYEBTrmtQyz%2FhN7SQ0BsJeBAkM%2BKq70ZcNZelFg%2BeChO46BdBXVox%2BHgk7MYGqtFBS2fKe6NYxZ17PKCv5GXuCkLaWOAFxXKx3svmLLwaLTebJkH5zLDmA6q1EBXkwqde3LbAuCOHPvFo96%2BjqiD9d386d4BmjhaPrM%2BoaoDcR213z9l9%2FQg9ikD49Cnv16ON3tKx2S8FkAoo&X-Amz-Signature=1b3d63d652966ef7faa8e9c57370881dc9610234a940ecfedbc75ab44682cd41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEW2FXF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDwFXYX2sLeLa4pnDk8o7W9%2BfP3LJxCg68u%2BFydnLeJHAiEA6FR%2Fzq1aJdd8xU7MP0l%2Fp1IZ9oS3OaS%2F5kn44KAks04qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkNLK9C3KctWGhWhyrcA3FSvcqpdVtwepZ03Uz2SfKeVbnU052tw%2Fcslp00aT4z8oS0UUepRRd20RiWL4nIpFS6YZ18dDbjPvx2t3Nj1nGYdaxFMgccHxBsFe2ksYOKYq1J3RZWm5gk04R537fuyv%2FeTbGe1SL95YzGmv6qNIk8taw17HmV%2F5uDi8PDwqGBwri9kFRb1RegoAVT0YG1ZGKR%2BYh945heZwaTKLyr4JPlJlvwN9H1tuSwtXZMTIRyvfoYTw4G%2Byv2o2u2FkDPYcYwztgEijR7VhOOWzKqyd848Z8c8XeSfl8RhWNMOsUEpAft4vx5w3qmT4klYt91oc9Dtr5Pyq8BR4690MUX7bAavjKvGLSGy07NtP7JEpYmWKcsRlo8s6HxIz2bJ7JotTaz8M5RGEUYH%2Bnaj41Vn21cShYa%2Fou%2Fq24eqao4SWncsffGdgj1743OPS7htncIchFiEXti4mNwv0KJSqU0MDUGQXqMwMuH%2B118apM6k8hYiJJ6nsuX1Jk8%2BmVE0U8ZPQqSp7AX9xI28hlUDpYrHAEVfpy2P9om1QcrEcs8WMcE7HFzmPBRSEEgIEsoQiR84GoD%2FHd9V3w9YrUMsgXaHBR6WHd42%2BXIsEI7%2F0EVfYMkQZd2xkvlDsQKguVIMO3emr0GOqUBExRJHVNJHAvpIdfIYEBTrmtQyz%2FhN7SQ0BsJeBAkM%2BKq70ZcNZelFg%2BeChO46BdBXVox%2BHgk7MYGqtFBS2fKe6NYxZ17PKCv5GXuCkLaWOAFxXKx3svmLLwaLTebJkH5zLDmA6q1EBXkwqde3LbAuCOHPvFo96%2BjqiD9d386d4BmjhaPrM%2BoaoDcR213z9l9%2FQg9ikD49Cnv16ON3tKx2S8FkAoo&X-Amz-Signature=66672773e4074845dd8ab0387bbad1101bb3430e66324e8564e38daf5b9776d7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEW2FXF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDwFXYX2sLeLa4pnDk8o7W9%2BfP3LJxCg68u%2BFydnLeJHAiEA6FR%2Fzq1aJdd8xU7MP0l%2Fp1IZ9oS3OaS%2F5kn44KAks04qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkNLK9C3KctWGhWhyrcA3FSvcqpdVtwepZ03Uz2SfKeVbnU052tw%2Fcslp00aT4z8oS0UUepRRd20RiWL4nIpFS6YZ18dDbjPvx2t3Nj1nGYdaxFMgccHxBsFe2ksYOKYq1J3RZWm5gk04R537fuyv%2FeTbGe1SL95YzGmv6qNIk8taw17HmV%2F5uDi8PDwqGBwri9kFRb1RegoAVT0YG1ZGKR%2BYh945heZwaTKLyr4JPlJlvwN9H1tuSwtXZMTIRyvfoYTw4G%2Byv2o2u2FkDPYcYwztgEijR7VhOOWzKqyd848Z8c8XeSfl8RhWNMOsUEpAft4vx5w3qmT4klYt91oc9Dtr5Pyq8BR4690MUX7bAavjKvGLSGy07NtP7JEpYmWKcsRlo8s6HxIz2bJ7JotTaz8M5RGEUYH%2Bnaj41Vn21cShYa%2Fou%2Fq24eqao4SWncsffGdgj1743OPS7htncIchFiEXti4mNwv0KJSqU0MDUGQXqMwMuH%2B118apM6k8hYiJJ6nsuX1Jk8%2BmVE0U8ZPQqSp7AX9xI28hlUDpYrHAEVfpy2P9om1QcrEcs8WMcE7HFzmPBRSEEgIEsoQiR84GoD%2FHd9V3w9YrUMsgXaHBR6WHd42%2BXIsEI7%2F0EVfYMkQZd2xkvlDsQKguVIMO3emr0GOqUBExRJHVNJHAvpIdfIYEBTrmtQyz%2FhN7SQ0BsJeBAkM%2BKq70ZcNZelFg%2BeChO46BdBXVox%2BHgk7MYGqtFBS2fKe6NYxZ17PKCv5GXuCkLaWOAFxXKx3svmLLwaLTebJkH5zLDmA6q1EBXkwqde3LbAuCOHPvFo96%2BjqiD9d386d4BmjhaPrM%2BoaoDcR213z9l9%2FQg9ikD49Cnv16ON3tKx2S8FkAoo&X-Amz-Signature=b8d5440c4d02e5fe37ba0bbd36ff203f5c9570b2d06ef1936a7988d073dd4721&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEW2FXF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDwFXYX2sLeLa4pnDk8o7W9%2BfP3LJxCg68u%2BFydnLeJHAiEA6FR%2Fzq1aJdd8xU7MP0l%2Fp1IZ9oS3OaS%2F5kn44KAks04qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkNLK9C3KctWGhWhyrcA3FSvcqpdVtwepZ03Uz2SfKeVbnU052tw%2Fcslp00aT4z8oS0UUepRRd20RiWL4nIpFS6YZ18dDbjPvx2t3Nj1nGYdaxFMgccHxBsFe2ksYOKYq1J3RZWm5gk04R537fuyv%2FeTbGe1SL95YzGmv6qNIk8taw17HmV%2F5uDi8PDwqGBwri9kFRb1RegoAVT0YG1ZGKR%2BYh945heZwaTKLyr4JPlJlvwN9H1tuSwtXZMTIRyvfoYTw4G%2Byv2o2u2FkDPYcYwztgEijR7VhOOWzKqyd848Z8c8XeSfl8RhWNMOsUEpAft4vx5w3qmT4klYt91oc9Dtr5Pyq8BR4690MUX7bAavjKvGLSGy07NtP7JEpYmWKcsRlo8s6HxIz2bJ7JotTaz8M5RGEUYH%2Bnaj41Vn21cShYa%2Fou%2Fq24eqao4SWncsffGdgj1743OPS7htncIchFiEXti4mNwv0KJSqU0MDUGQXqMwMuH%2B118apM6k8hYiJJ6nsuX1Jk8%2BmVE0U8ZPQqSp7AX9xI28hlUDpYrHAEVfpy2P9om1QcrEcs8WMcE7HFzmPBRSEEgIEsoQiR84GoD%2FHd9V3w9YrUMsgXaHBR6WHd42%2BXIsEI7%2F0EVfYMkQZd2xkvlDsQKguVIMO3emr0GOqUBExRJHVNJHAvpIdfIYEBTrmtQyz%2FhN7SQ0BsJeBAkM%2BKq70ZcNZelFg%2BeChO46BdBXVox%2BHgk7MYGqtFBS2fKe6NYxZ17PKCv5GXuCkLaWOAFxXKx3svmLLwaLTebJkH5zLDmA6q1EBXkwqde3LbAuCOHPvFo96%2BjqiD9d386d4BmjhaPrM%2BoaoDcR213z9l9%2FQg9ikD49Cnv16ON3tKx2S8FkAoo&X-Amz-Signature=059ef8009b764ed1d38b2c21cb67735e2201afa92401c710980b91327959af4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEW2FXF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDwFXYX2sLeLa4pnDk8o7W9%2BfP3LJxCg68u%2BFydnLeJHAiEA6FR%2Fzq1aJdd8xU7MP0l%2Fp1IZ9oS3OaS%2F5kn44KAks04qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkNLK9C3KctWGhWhyrcA3FSvcqpdVtwepZ03Uz2SfKeVbnU052tw%2Fcslp00aT4z8oS0UUepRRd20RiWL4nIpFS6YZ18dDbjPvx2t3Nj1nGYdaxFMgccHxBsFe2ksYOKYq1J3RZWm5gk04R537fuyv%2FeTbGe1SL95YzGmv6qNIk8taw17HmV%2F5uDi8PDwqGBwri9kFRb1RegoAVT0YG1ZGKR%2BYh945heZwaTKLyr4JPlJlvwN9H1tuSwtXZMTIRyvfoYTw4G%2Byv2o2u2FkDPYcYwztgEijR7VhOOWzKqyd848Z8c8XeSfl8RhWNMOsUEpAft4vx5w3qmT4klYt91oc9Dtr5Pyq8BR4690MUX7bAavjKvGLSGy07NtP7JEpYmWKcsRlo8s6HxIz2bJ7JotTaz8M5RGEUYH%2Bnaj41Vn21cShYa%2Fou%2Fq24eqao4SWncsffGdgj1743OPS7htncIchFiEXti4mNwv0KJSqU0MDUGQXqMwMuH%2B118apM6k8hYiJJ6nsuX1Jk8%2BmVE0U8ZPQqSp7AX9xI28hlUDpYrHAEVfpy2P9om1QcrEcs8WMcE7HFzmPBRSEEgIEsoQiR84GoD%2FHd9V3w9YrUMsgXaHBR6WHd42%2BXIsEI7%2F0EVfYMkQZd2xkvlDsQKguVIMO3emr0GOqUBExRJHVNJHAvpIdfIYEBTrmtQyz%2FhN7SQ0BsJeBAkM%2BKq70ZcNZelFg%2BeChO46BdBXVox%2BHgk7MYGqtFBS2fKe6NYxZ17PKCv5GXuCkLaWOAFxXKx3svmLLwaLTebJkH5zLDmA6q1EBXkwqde3LbAuCOHPvFo96%2BjqiD9d386d4BmjhaPrM%2BoaoDcR213z9l9%2FQg9ikD49Cnv16ON3tKx2S8FkAoo&X-Amz-Signature=31785f1294550a12830794b7deb3ac7afac9fa4cc07e69a60fa5e5a84a684d84&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
