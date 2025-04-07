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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5FIGUC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbH4Oq%2Fo3nKC2wPFpbkDB3S9GluSgsQldWDuIJZ5G9RAIgCO82vp0gcD2YHq9Ct2W7EqhnAdHuY8S6IK1T9v78NiYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPJ2NI39BmxQzDJHuCrcA9NtEQz9Uc%2FwjVlmO1nmGeqQKMifaZHdp686rZROJTfyipt9UPCj2pJM7i8U593WseNdnKIWP8YNoJ1XJvOyfEX0SKgMqENvgRRh7GQPlJJIdL9qLoOYf%2FJW9dcNZlLbsAPdeAadSKpXi6swVB4j3IoYpv%2FUO%2BdpA%2BUFTPWH5Yj0D%2F0bn7r2%2Fw%2BQaF6XsrxAQOWXh%2FcXfkABOCAY6iDAI3IL%2FzCHlurzddtf6rY%2FSveSQ%2F5r%2BKgdkTTH%2FGOPhf2kUFgSPsfsPkwAJnB3RAoKUJiQVe4O1V%2FBPs2a548YycqYT4yG8YlrzSfh0Wpr%2FaFmOPndqoDSr0CxJwscoeDWBZ7KPLlroy2vh2k7GkGn4TpMpmKv1AGwNYK%2BCxQ6Zfoc%2FQamir0tu2OmHHspRyGx3B%2BL3Qkrry4z3q0gjjmnA0LLSnxTz5RqSsdgroZgBBoAabV9CEbchOvN03E8QQkk7gG%2FXmgdNzh%2F6ZjnuiwY4OGwb%2B19QtipyqiehgBobeN4wgEMsEhfOzN06PciXrfhH%2FVRtjSfBwmZPuo%2FMb8cq9w8OWxo3%2Ba7VtMN96kevNhC2ZkuUbM6oFliNsCtEjrWpn8pT%2Bt5q8Mt96qBmuzCvQbJc0dP4jQgZOmMo3QoMPSk0L8GOqUBNvkU5oZInKV2LseWHSTLwU6ioO4%2FX3RNBg1EJoXRm7kpbokW5%2F1JVmPjgJG4utqRQRttp6eRxn41vUVBKe8h7iIh0kzJsG%2BSjfJYYV%2FzFk2aId%2FG%2FHRHIvnLxnQ95R0Ri5ow5HxCC5J5m%2FBAHtgZE6cx2RjMUKSAelQUDIOTD8Nq3mjM49hHKG5GWWP0yR4MF%2FrPZ1aLKOC4dzboRJngb9R6xVMx&X-Amz-Signature=74b58fe43ad955894b68b01164deceb1f1fd3d920ac540613d1ecb18c8a07f90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5FIGUC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbH4Oq%2Fo3nKC2wPFpbkDB3S9GluSgsQldWDuIJZ5G9RAIgCO82vp0gcD2YHq9Ct2W7EqhnAdHuY8S6IK1T9v78NiYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPJ2NI39BmxQzDJHuCrcA9NtEQz9Uc%2FwjVlmO1nmGeqQKMifaZHdp686rZROJTfyipt9UPCj2pJM7i8U593WseNdnKIWP8YNoJ1XJvOyfEX0SKgMqENvgRRh7GQPlJJIdL9qLoOYf%2FJW9dcNZlLbsAPdeAadSKpXi6swVB4j3IoYpv%2FUO%2BdpA%2BUFTPWH5Yj0D%2F0bn7r2%2Fw%2BQaF6XsrxAQOWXh%2FcXfkABOCAY6iDAI3IL%2FzCHlurzddtf6rY%2FSveSQ%2F5r%2BKgdkTTH%2FGOPhf2kUFgSPsfsPkwAJnB3RAoKUJiQVe4O1V%2FBPs2a548YycqYT4yG8YlrzSfh0Wpr%2FaFmOPndqoDSr0CxJwscoeDWBZ7KPLlroy2vh2k7GkGn4TpMpmKv1AGwNYK%2BCxQ6Zfoc%2FQamir0tu2OmHHspRyGx3B%2BL3Qkrry4z3q0gjjmnA0LLSnxTz5RqSsdgroZgBBoAabV9CEbchOvN03E8QQkk7gG%2FXmgdNzh%2F6ZjnuiwY4OGwb%2B19QtipyqiehgBobeN4wgEMsEhfOzN06PciXrfhH%2FVRtjSfBwmZPuo%2FMb8cq9w8OWxo3%2Ba7VtMN96kevNhC2ZkuUbM6oFliNsCtEjrWpn8pT%2Bt5q8Mt96qBmuzCvQbJc0dP4jQgZOmMo3QoMPSk0L8GOqUBNvkU5oZInKV2LseWHSTLwU6ioO4%2FX3RNBg1EJoXRm7kpbokW5%2F1JVmPjgJG4utqRQRttp6eRxn41vUVBKe8h7iIh0kzJsG%2BSjfJYYV%2FzFk2aId%2FG%2FHRHIvnLxnQ95R0Ri5ow5HxCC5J5m%2FBAHtgZE6cx2RjMUKSAelQUDIOTD8Nq3mjM49hHKG5GWWP0yR4MF%2FrPZ1aLKOC4dzboRJngb9R6xVMx&X-Amz-Signature=46bc9345ea6a218bf3ba899bb99327e09c7ac62e14efaca5dff5d8327e0141cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5FIGUC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbH4Oq%2Fo3nKC2wPFpbkDB3S9GluSgsQldWDuIJZ5G9RAIgCO82vp0gcD2YHq9Ct2W7EqhnAdHuY8S6IK1T9v78NiYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPJ2NI39BmxQzDJHuCrcA9NtEQz9Uc%2FwjVlmO1nmGeqQKMifaZHdp686rZROJTfyipt9UPCj2pJM7i8U593WseNdnKIWP8YNoJ1XJvOyfEX0SKgMqENvgRRh7GQPlJJIdL9qLoOYf%2FJW9dcNZlLbsAPdeAadSKpXi6swVB4j3IoYpv%2FUO%2BdpA%2BUFTPWH5Yj0D%2F0bn7r2%2Fw%2BQaF6XsrxAQOWXh%2FcXfkABOCAY6iDAI3IL%2FzCHlurzddtf6rY%2FSveSQ%2F5r%2BKgdkTTH%2FGOPhf2kUFgSPsfsPkwAJnB3RAoKUJiQVe4O1V%2FBPs2a548YycqYT4yG8YlrzSfh0Wpr%2FaFmOPndqoDSr0CxJwscoeDWBZ7KPLlroy2vh2k7GkGn4TpMpmKv1AGwNYK%2BCxQ6Zfoc%2FQamir0tu2OmHHspRyGx3B%2BL3Qkrry4z3q0gjjmnA0LLSnxTz5RqSsdgroZgBBoAabV9CEbchOvN03E8QQkk7gG%2FXmgdNzh%2F6ZjnuiwY4OGwb%2B19QtipyqiehgBobeN4wgEMsEhfOzN06PciXrfhH%2FVRtjSfBwmZPuo%2FMb8cq9w8OWxo3%2Ba7VtMN96kevNhC2ZkuUbM6oFliNsCtEjrWpn8pT%2Bt5q8Mt96qBmuzCvQbJc0dP4jQgZOmMo3QoMPSk0L8GOqUBNvkU5oZInKV2LseWHSTLwU6ioO4%2FX3RNBg1EJoXRm7kpbokW5%2F1JVmPjgJG4utqRQRttp6eRxn41vUVBKe8h7iIh0kzJsG%2BSjfJYYV%2FzFk2aId%2FG%2FHRHIvnLxnQ95R0Ri5ow5HxCC5J5m%2FBAHtgZE6cx2RjMUKSAelQUDIOTD8Nq3mjM49hHKG5GWWP0yR4MF%2FrPZ1aLKOC4dzboRJngb9R6xVMx&X-Amz-Signature=6de8f8588851cddd76bccde7e31d5d5bd29491b6ab9a6f2172816f76f120517b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5FIGUC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbH4Oq%2Fo3nKC2wPFpbkDB3S9GluSgsQldWDuIJZ5G9RAIgCO82vp0gcD2YHq9Ct2W7EqhnAdHuY8S6IK1T9v78NiYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPJ2NI39BmxQzDJHuCrcA9NtEQz9Uc%2FwjVlmO1nmGeqQKMifaZHdp686rZROJTfyipt9UPCj2pJM7i8U593WseNdnKIWP8YNoJ1XJvOyfEX0SKgMqENvgRRh7GQPlJJIdL9qLoOYf%2FJW9dcNZlLbsAPdeAadSKpXi6swVB4j3IoYpv%2FUO%2BdpA%2BUFTPWH5Yj0D%2F0bn7r2%2Fw%2BQaF6XsrxAQOWXh%2FcXfkABOCAY6iDAI3IL%2FzCHlurzddtf6rY%2FSveSQ%2F5r%2BKgdkTTH%2FGOPhf2kUFgSPsfsPkwAJnB3RAoKUJiQVe4O1V%2FBPs2a548YycqYT4yG8YlrzSfh0Wpr%2FaFmOPndqoDSr0CxJwscoeDWBZ7KPLlroy2vh2k7GkGn4TpMpmKv1AGwNYK%2BCxQ6Zfoc%2FQamir0tu2OmHHspRyGx3B%2BL3Qkrry4z3q0gjjmnA0LLSnxTz5RqSsdgroZgBBoAabV9CEbchOvN03E8QQkk7gG%2FXmgdNzh%2F6ZjnuiwY4OGwb%2B19QtipyqiehgBobeN4wgEMsEhfOzN06PciXrfhH%2FVRtjSfBwmZPuo%2FMb8cq9w8OWxo3%2Ba7VtMN96kevNhC2ZkuUbM6oFliNsCtEjrWpn8pT%2Bt5q8Mt96qBmuzCvQbJc0dP4jQgZOmMo3QoMPSk0L8GOqUBNvkU5oZInKV2LseWHSTLwU6ioO4%2FX3RNBg1EJoXRm7kpbokW5%2F1JVmPjgJG4utqRQRttp6eRxn41vUVBKe8h7iIh0kzJsG%2BSjfJYYV%2FzFk2aId%2FG%2FHRHIvnLxnQ95R0Ri5ow5HxCC5J5m%2FBAHtgZE6cx2RjMUKSAelQUDIOTD8Nq3mjM49hHKG5GWWP0yR4MF%2FrPZ1aLKOC4dzboRJngb9R6xVMx&X-Amz-Signature=f8888bc3cf9b04e96cde4f2f95a70bbfc401c563084c09506f9d46e6409aa579&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5FIGUC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbH4Oq%2Fo3nKC2wPFpbkDB3S9GluSgsQldWDuIJZ5G9RAIgCO82vp0gcD2YHq9Ct2W7EqhnAdHuY8S6IK1T9v78NiYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPJ2NI39BmxQzDJHuCrcA9NtEQz9Uc%2FwjVlmO1nmGeqQKMifaZHdp686rZROJTfyipt9UPCj2pJM7i8U593WseNdnKIWP8YNoJ1XJvOyfEX0SKgMqENvgRRh7GQPlJJIdL9qLoOYf%2FJW9dcNZlLbsAPdeAadSKpXi6swVB4j3IoYpv%2FUO%2BdpA%2BUFTPWH5Yj0D%2F0bn7r2%2Fw%2BQaF6XsrxAQOWXh%2FcXfkABOCAY6iDAI3IL%2FzCHlurzddtf6rY%2FSveSQ%2F5r%2BKgdkTTH%2FGOPhf2kUFgSPsfsPkwAJnB3RAoKUJiQVe4O1V%2FBPs2a548YycqYT4yG8YlrzSfh0Wpr%2FaFmOPndqoDSr0CxJwscoeDWBZ7KPLlroy2vh2k7GkGn4TpMpmKv1AGwNYK%2BCxQ6Zfoc%2FQamir0tu2OmHHspRyGx3B%2BL3Qkrry4z3q0gjjmnA0LLSnxTz5RqSsdgroZgBBoAabV9CEbchOvN03E8QQkk7gG%2FXmgdNzh%2F6ZjnuiwY4OGwb%2B19QtipyqiehgBobeN4wgEMsEhfOzN06PciXrfhH%2FVRtjSfBwmZPuo%2FMb8cq9w8OWxo3%2Ba7VtMN96kevNhC2ZkuUbM6oFliNsCtEjrWpn8pT%2Bt5q8Mt96qBmuzCvQbJc0dP4jQgZOmMo3QoMPSk0L8GOqUBNvkU5oZInKV2LseWHSTLwU6ioO4%2FX3RNBg1EJoXRm7kpbokW5%2F1JVmPjgJG4utqRQRttp6eRxn41vUVBKe8h7iIh0kzJsG%2BSjfJYYV%2FzFk2aId%2FG%2FHRHIvnLxnQ95R0Ri5ow5HxCC5J5m%2FBAHtgZE6cx2RjMUKSAelQUDIOTD8Nq3mjM49hHKG5GWWP0yR4MF%2FrPZ1aLKOC4dzboRJngb9R6xVMx&X-Amz-Signature=f441fa0fab0d2ab97ee8376a513ec36b5c360a243fedd7df841301345d8838ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
