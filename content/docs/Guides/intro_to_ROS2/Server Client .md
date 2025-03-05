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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66S2IDE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbaVlPowAPw27pkrQ50el4a3pdg6P563zcSdzvcAIawAiBNe5v6Nk5DBDs6Q053d0fCRExqrnV4mTCKJZrPcfoVYCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlcGdlGA2Knik%2F3b1KtwDTtUNkh0dJhKs1ujOJoIxUL84UYMzJ53re%2BFYibva8YRChQ5fbSHMv1PvhdO5TIiwSBvxs1MQr9RIIXGlnjmoBAngMh5D6f89q4aGkKu2bi2K%2FSvkGNxzXC2nkeWy7HpMcyu646fjMKcnGAt7FwsPLkvWseUxgZoC87JqHpbH1B%2BAlyMgkKp11ymY7tBkFcwmUOwFa5yO2PBag9RsUcuV9GDl56BPUb2S%2FYC5qObttmoMk2Mg8a12bnY1VLAqeRmti8FS9kMJNnY6mPvki6EElmS2n4U0t85apRthNlOuvwfPJZGIHuLpurpk9ZBOgLhIb1OJpWv4VgtrWYpInPqLJo3z5i5n7Y8tanxbcch8ts9ZxlibFA5yIEr7OEdilRn5QJZzm7R5E6il6P4srvEX6ne95QB6te8TiL96SgULrztAlYTsCd2vsElwO3IGY9NZIkGI9PBs%2FAUIXQxblh%2BxUxQyIOEqouv016uoIiTu67jyaEFbnJQvsnbbQaoHy2HMBJ3xkopRofqXKwcWrlQJ4Q2XBHFofH0N408MLc73NWFqLggd6IhaMWEMpaX%2FBhhtQRxxjp1xQRTa2VBm8LR6Dt6gnkaWp%2FXgAkwLlfYGxeIiSpGp854qF0zGxtgwj9KgvgY6pgF%2F6O6C10H89MkztiRzcHfC4x3d1OaqjEZTyTu6HrNke6cUaU49AFXC6pviFn44MZgXSVzLZAtURA6gdrlhL6hnlgRzS3tysdibwOpiIWdecnpJAKZUQOnPMtHFs9jzbL20%2Ba14w3Gz3iYfKHR6MTYaRd7tIeAsdnfl3E1sGKryRXfIYWSGbYkbqfon5PB4t5lKYCwJp3TxBGBPgFRGPe3zcCs6q0yk&X-Amz-Signature=bc654ef33ed353b70992f8c1218dc25ab86e719a12db13fdd10495fafb5cbaf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66S2IDE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbaVlPowAPw27pkrQ50el4a3pdg6P563zcSdzvcAIawAiBNe5v6Nk5DBDs6Q053d0fCRExqrnV4mTCKJZrPcfoVYCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlcGdlGA2Knik%2F3b1KtwDTtUNkh0dJhKs1ujOJoIxUL84UYMzJ53re%2BFYibva8YRChQ5fbSHMv1PvhdO5TIiwSBvxs1MQr9RIIXGlnjmoBAngMh5D6f89q4aGkKu2bi2K%2FSvkGNxzXC2nkeWy7HpMcyu646fjMKcnGAt7FwsPLkvWseUxgZoC87JqHpbH1B%2BAlyMgkKp11ymY7tBkFcwmUOwFa5yO2PBag9RsUcuV9GDl56BPUb2S%2FYC5qObttmoMk2Mg8a12bnY1VLAqeRmti8FS9kMJNnY6mPvki6EElmS2n4U0t85apRthNlOuvwfPJZGIHuLpurpk9ZBOgLhIb1OJpWv4VgtrWYpInPqLJo3z5i5n7Y8tanxbcch8ts9ZxlibFA5yIEr7OEdilRn5QJZzm7R5E6il6P4srvEX6ne95QB6te8TiL96SgULrztAlYTsCd2vsElwO3IGY9NZIkGI9PBs%2FAUIXQxblh%2BxUxQyIOEqouv016uoIiTu67jyaEFbnJQvsnbbQaoHy2HMBJ3xkopRofqXKwcWrlQJ4Q2XBHFofH0N408MLc73NWFqLggd6IhaMWEMpaX%2FBhhtQRxxjp1xQRTa2VBm8LR6Dt6gnkaWp%2FXgAkwLlfYGxeIiSpGp854qF0zGxtgwj9KgvgY6pgF%2F6O6C10H89MkztiRzcHfC4x3d1OaqjEZTyTu6HrNke6cUaU49AFXC6pviFn44MZgXSVzLZAtURA6gdrlhL6hnlgRzS3tysdibwOpiIWdecnpJAKZUQOnPMtHFs9jzbL20%2Ba14w3Gz3iYfKHR6MTYaRd7tIeAsdnfl3E1sGKryRXfIYWSGbYkbqfon5PB4t5lKYCwJp3TxBGBPgFRGPe3zcCs6q0yk&X-Amz-Signature=ce953972ec270f13e6192d3d028a85e2781a48a0ca0678186d628960b95b870c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66S2IDE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbaVlPowAPw27pkrQ50el4a3pdg6P563zcSdzvcAIawAiBNe5v6Nk5DBDs6Q053d0fCRExqrnV4mTCKJZrPcfoVYCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlcGdlGA2Knik%2F3b1KtwDTtUNkh0dJhKs1ujOJoIxUL84UYMzJ53re%2BFYibva8YRChQ5fbSHMv1PvhdO5TIiwSBvxs1MQr9RIIXGlnjmoBAngMh5D6f89q4aGkKu2bi2K%2FSvkGNxzXC2nkeWy7HpMcyu646fjMKcnGAt7FwsPLkvWseUxgZoC87JqHpbH1B%2BAlyMgkKp11ymY7tBkFcwmUOwFa5yO2PBag9RsUcuV9GDl56BPUb2S%2FYC5qObttmoMk2Mg8a12bnY1VLAqeRmti8FS9kMJNnY6mPvki6EElmS2n4U0t85apRthNlOuvwfPJZGIHuLpurpk9ZBOgLhIb1OJpWv4VgtrWYpInPqLJo3z5i5n7Y8tanxbcch8ts9ZxlibFA5yIEr7OEdilRn5QJZzm7R5E6il6P4srvEX6ne95QB6te8TiL96SgULrztAlYTsCd2vsElwO3IGY9NZIkGI9PBs%2FAUIXQxblh%2BxUxQyIOEqouv016uoIiTu67jyaEFbnJQvsnbbQaoHy2HMBJ3xkopRofqXKwcWrlQJ4Q2XBHFofH0N408MLc73NWFqLggd6IhaMWEMpaX%2FBhhtQRxxjp1xQRTa2VBm8LR6Dt6gnkaWp%2FXgAkwLlfYGxeIiSpGp854qF0zGxtgwj9KgvgY6pgF%2F6O6C10H89MkztiRzcHfC4x3d1OaqjEZTyTu6HrNke6cUaU49AFXC6pviFn44MZgXSVzLZAtURA6gdrlhL6hnlgRzS3tysdibwOpiIWdecnpJAKZUQOnPMtHFs9jzbL20%2Ba14w3Gz3iYfKHR6MTYaRd7tIeAsdnfl3E1sGKryRXfIYWSGbYkbqfon5PB4t5lKYCwJp3TxBGBPgFRGPe3zcCs6q0yk&X-Amz-Signature=8774e353a42aa8c4a5f8971d4d303d2c861e20eea014bfb54c1eb3e5748d82ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66S2IDE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbaVlPowAPw27pkrQ50el4a3pdg6P563zcSdzvcAIawAiBNe5v6Nk5DBDs6Q053d0fCRExqrnV4mTCKJZrPcfoVYCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlcGdlGA2Knik%2F3b1KtwDTtUNkh0dJhKs1ujOJoIxUL84UYMzJ53re%2BFYibva8YRChQ5fbSHMv1PvhdO5TIiwSBvxs1MQr9RIIXGlnjmoBAngMh5D6f89q4aGkKu2bi2K%2FSvkGNxzXC2nkeWy7HpMcyu646fjMKcnGAt7FwsPLkvWseUxgZoC87JqHpbH1B%2BAlyMgkKp11ymY7tBkFcwmUOwFa5yO2PBag9RsUcuV9GDl56BPUb2S%2FYC5qObttmoMk2Mg8a12bnY1VLAqeRmti8FS9kMJNnY6mPvki6EElmS2n4U0t85apRthNlOuvwfPJZGIHuLpurpk9ZBOgLhIb1OJpWv4VgtrWYpInPqLJo3z5i5n7Y8tanxbcch8ts9ZxlibFA5yIEr7OEdilRn5QJZzm7R5E6il6P4srvEX6ne95QB6te8TiL96SgULrztAlYTsCd2vsElwO3IGY9NZIkGI9PBs%2FAUIXQxblh%2BxUxQyIOEqouv016uoIiTu67jyaEFbnJQvsnbbQaoHy2HMBJ3xkopRofqXKwcWrlQJ4Q2XBHFofH0N408MLc73NWFqLggd6IhaMWEMpaX%2FBhhtQRxxjp1xQRTa2VBm8LR6Dt6gnkaWp%2FXgAkwLlfYGxeIiSpGp854qF0zGxtgwj9KgvgY6pgF%2F6O6C10H89MkztiRzcHfC4x3d1OaqjEZTyTu6HrNke6cUaU49AFXC6pviFn44MZgXSVzLZAtURA6gdrlhL6hnlgRzS3tysdibwOpiIWdecnpJAKZUQOnPMtHFs9jzbL20%2Ba14w3Gz3iYfKHR6MTYaRd7tIeAsdnfl3E1sGKryRXfIYWSGbYkbqfon5PB4t5lKYCwJp3TxBGBPgFRGPe3zcCs6q0yk&X-Amz-Signature=9d82e9d9a1c0463007f46bd4ff9807d3e4c965a966033ef1af8c3aaf5a8b3b44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66S2IDE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbaVlPowAPw27pkrQ50el4a3pdg6P563zcSdzvcAIawAiBNe5v6Nk5DBDs6Q053d0fCRExqrnV4mTCKJZrPcfoVYCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlcGdlGA2Knik%2F3b1KtwDTtUNkh0dJhKs1ujOJoIxUL84UYMzJ53re%2BFYibva8YRChQ5fbSHMv1PvhdO5TIiwSBvxs1MQr9RIIXGlnjmoBAngMh5D6f89q4aGkKu2bi2K%2FSvkGNxzXC2nkeWy7HpMcyu646fjMKcnGAt7FwsPLkvWseUxgZoC87JqHpbH1B%2BAlyMgkKp11ymY7tBkFcwmUOwFa5yO2PBag9RsUcuV9GDl56BPUb2S%2FYC5qObttmoMk2Mg8a12bnY1VLAqeRmti8FS9kMJNnY6mPvki6EElmS2n4U0t85apRthNlOuvwfPJZGIHuLpurpk9ZBOgLhIb1OJpWv4VgtrWYpInPqLJo3z5i5n7Y8tanxbcch8ts9ZxlibFA5yIEr7OEdilRn5QJZzm7R5E6il6P4srvEX6ne95QB6te8TiL96SgULrztAlYTsCd2vsElwO3IGY9NZIkGI9PBs%2FAUIXQxblh%2BxUxQyIOEqouv016uoIiTu67jyaEFbnJQvsnbbQaoHy2HMBJ3xkopRofqXKwcWrlQJ4Q2XBHFofH0N408MLc73NWFqLggd6IhaMWEMpaX%2FBhhtQRxxjp1xQRTa2VBm8LR6Dt6gnkaWp%2FXgAkwLlfYGxeIiSpGp854qF0zGxtgwj9KgvgY6pgF%2F6O6C10H89MkztiRzcHfC4x3d1OaqjEZTyTu6HrNke6cUaU49AFXC6pviFn44MZgXSVzLZAtURA6gdrlhL6hnlgRzS3tysdibwOpiIWdecnpJAKZUQOnPMtHFs9jzbL20%2Ba14w3Gz3iYfKHR6MTYaRd7tIeAsdnfl3E1sGKryRXfIYWSGbYkbqfon5PB4t5lKYCwJp3TxBGBPgFRGPe3zcCs6q0yk&X-Amz-Signature=c992cb95cad862cc05352ad65c0b26255997906e770c428a5a332def058ca491&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
