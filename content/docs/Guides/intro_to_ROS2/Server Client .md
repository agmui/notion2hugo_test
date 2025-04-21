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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVJCRK5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDU88qOR75GiVhMWYGGdJ4792DxMQnjaXnOykR7U4QwfwIhAMuH9yKsv3C2x1p7hROcGGmA1pLDh1tGJCdp2xpDwcS6KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoTQMftfbvfjiP1qYq3ANYjM8d1EOBwjoooGgPqncDbGNNnMsVZcd84jBQ2rtuCEguLO4B4kcLgIEN92ITPLIu7rOWXUqltM2ZFknKR4CtV%2F4noZr%2B1MTBJvTYRNFtE7vdiNMqo6a2Cg%2BIRPQDvfAeIA55e3X8PRYADnt5TaLQwxmSi7UKoQhDrzrCh8Bb%2BgE9nNmWoTq%2FnrwWUN9YKyeX%2Fr7sDZF1eyzyoC4uQtswse90zXAHWLRWUS%2FoO5P7XBTZ6SawxSOK%2Bjb3tpYuSSzxG5bwknq2bWi640gNz89pN8h1reWMHwBzmNCcN7adWUCOrGHMo7mgc2lT1DKzkb%2BOi%2Bop5Budt9BQvBokI2vsb9O3mbbj8Qxv%2FNZ1sEbDVIsufFKWVYTchwbAHGZJRbp3pR32AeGEEagTi%2BD8Fj4qCDo7%2F9KIUAu5F0gyIfwtaVFXAiY4VPUdnFqx%2F71yWvLh8ufHJ4z6SE9N8TJUfX4q%2FGUVYsw8F8KOlMaNFxWzLUoNEa65bwUO09Mu%2FpWr9YeBuecnfNnfp2A%2B6nOSSA%2BsEDlAHFl9sFL4RmxJJDrbt5Wcxy%2B7MkvQoVpBlrdhali%2F5iwu5sqmQRpM4VeeypZxYaN30O9xy1%2FM9OuOAAYAMeYkFB4qCLHDux9cnzCs7JnABjqkAXFcZUDeXBqfQNuURjGzLI23O4O3UN6nxGwOWOHl55zugfK%2BnLsJ4Iw43%2Fl1lz7GPJ8%2B3ya1JQxuqHWfUauINQV2uO%2BnnYAM%2BafktQXJtnD%2BcHgGm7EE6KtcEo7obgrjlnATJ6F71%2F0AkroaThSU4OA31pTKy87ij9x4zoQxM4btnimCWAx0a4fffCJdVZXAJ8wx11Pwz9lIIKza4GRpHh737eQv&X-Amz-Signature=0dadf970a17d9775905f03f7c74c9196680e9071febc1b915fa8a704f510faa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVJCRK5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDU88qOR75GiVhMWYGGdJ4792DxMQnjaXnOykR7U4QwfwIhAMuH9yKsv3C2x1p7hROcGGmA1pLDh1tGJCdp2xpDwcS6KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoTQMftfbvfjiP1qYq3ANYjM8d1EOBwjoooGgPqncDbGNNnMsVZcd84jBQ2rtuCEguLO4B4kcLgIEN92ITPLIu7rOWXUqltM2ZFknKR4CtV%2F4noZr%2B1MTBJvTYRNFtE7vdiNMqo6a2Cg%2BIRPQDvfAeIA55e3X8PRYADnt5TaLQwxmSi7UKoQhDrzrCh8Bb%2BgE9nNmWoTq%2FnrwWUN9YKyeX%2Fr7sDZF1eyzyoC4uQtswse90zXAHWLRWUS%2FoO5P7XBTZ6SawxSOK%2Bjb3tpYuSSzxG5bwknq2bWi640gNz89pN8h1reWMHwBzmNCcN7adWUCOrGHMo7mgc2lT1DKzkb%2BOi%2Bop5Budt9BQvBokI2vsb9O3mbbj8Qxv%2FNZ1sEbDVIsufFKWVYTchwbAHGZJRbp3pR32AeGEEagTi%2BD8Fj4qCDo7%2F9KIUAu5F0gyIfwtaVFXAiY4VPUdnFqx%2F71yWvLh8ufHJ4z6SE9N8TJUfX4q%2FGUVYsw8F8KOlMaNFxWzLUoNEa65bwUO09Mu%2FpWr9YeBuecnfNnfp2A%2B6nOSSA%2BsEDlAHFl9sFL4RmxJJDrbt5Wcxy%2B7MkvQoVpBlrdhali%2F5iwu5sqmQRpM4VeeypZxYaN30O9xy1%2FM9OuOAAYAMeYkFB4qCLHDux9cnzCs7JnABjqkAXFcZUDeXBqfQNuURjGzLI23O4O3UN6nxGwOWOHl55zugfK%2BnLsJ4Iw43%2Fl1lz7GPJ8%2B3ya1JQxuqHWfUauINQV2uO%2BnnYAM%2BafktQXJtnD%2BcHgGm7EE6KtcEo7obgrjlnATJ6F71%2F0AkroaThSU4OA31pTKy87ij9x4zoQxM4btnimCWAx0a4fffCJdVZXAJ8wx11Pwz9lIIKza4GRpHh737eQv&X-Amz-Signature=75cd90fdbcb95b4c76e9df88d635a4baa9afa8f7364c00ef41e22159404bae12&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVJCRK5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDU88qOR75GiVhMWYGGdJ4792DxMQnjaXnOykR7U4QwfwIhAMuH9yKsv3C2x1p7hROcGGmA1pLDh1tGJCdp2xpDwcS6KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoTQMftfbvfjiP1qYq3ANYjM8d1EOBwjoooGgPqncDbGNNnMsVZcd84jBQ2rtuCEguLO4B4kcLgIEN92ITPLIu7rOWXUqltM2ZFknKR4CtV%2F4noZr%2B1MTBJvTYRNFtE7vdiNMqo6a2Cg%2BIRPQDvfAeIA55e3X8PRYADnt5TaLQwxmSi7UKoQhDrzrCh8Bb%2BgE9nNmWoTq%2FnrwWUN9YKyeX%2Fr7sDZF1eyzyoC4uQtswse90zXAHWLRWUS%2FoO5P7XBTZ6SawxSOK%2Bjb3tpYuSSzxG5bwknq2bWi640gNz89pN8h1reWMHwBzmNCcN7adWUCOrGHMo7mgc2lT1DKzkb%2BOi%2Bop5Budt9BQvBokI2vsb9O3mbbj8Qxv%2FNZ1sEbDVIsufFKWVYTchwbAHGZJRbp3pR32AeGEEagTi%2BD8Fj4qCDo7%2F9KIUAu5F0gyIfwtaVFXAiY4VPUdnFqx%2F71yWvLh8ufHJ4z6SE9N8TJUfX4q%2FGUVYsw8F8KOlMaNFxWzLUoNEa65bwUO09Mu%2FpWr9YeBuecnfNnfp2A%2B6nOSSA%2BsEDlAHFl9sFL4RmxJJDrbt5Wcxy%2B7MkvQoVpBlrdhali%2F5iwu5sqmQRpM4VeeypZxYaN30O9xy1%2FM9OuOAAYAMeYkFB4qCLHDux9cnzCs7JnABjqkAXFcZUDeXBqfQNuURjGzLI23O4O3UN6nxGwOWOHl55zugfK%2BnLsJ4Iw43%2Fl1lz7GPJ8%2B3ya1JQxuqHWfUauINQV2uO%2BnnYAM%2BafktQXJtnD%2BcHgGm7EE6KtcEo7obgrjlnATJ6F71%2F0AkroaThSU4OA31pTKy87ij9x4zoQxM4btnimCWAx0a4fffCJdVZXAJ8wx11Pwz9lIIKza4GRpHh737eQv&X-Amz-Signature=13240eccc0c7143e9207620ce350e2db1e111f5132f470dfe41ea33226ce2e71&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVJCRK5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDU88qOR75GiVhMWYGGdJ4792DxMQnjaXnOykR7U4QwfwIhAMuH9yKsv3C2x1p7hROcGGmA1pLDh1tGJCdp2xpDwcS6KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoTQMftfbvfjiP1qYq3ANYjM8d1EOBwjoooGgPqncDbGNNnMsVZcd84jBQ2rtuCEguLO4B4kcLgIEN92ITPLIu7rOWXUqltM2ZFknKR4CtV%2F4noZr%2B1MTBJvTYRNFtE7vdiNMqo6a2Cg%2BIRPQDvfAeIA55e3X8PRYADnt5TaLQwxmSi7UKoQhDrzrCh8Bb%2BgE9nNmWoTq%2FnrwWUN9YKyeX%2Fr7sDZF1eyzyoC4uQtswse90zXAHWLRWUS%2FoO5P7XBTZ6SawxSOK%2Bjb3tpYuSSzxG5bwknq2bWi640gNz89pN8h1reWMHwBzmNCcN7adWUCOrGHMo7mgc2lT1DKzkb%2BOi%2Bop5Budt9BQvBokI2vsb9O3mbbj8Qxv%2FNZ1sEbDVIsufFKWVYTchwbAHGZJRbp3pR32AeGEEagTi%2BD8Fj4qCDo7%2F9KIUAu5F0gyIfwtaVFXAiY4VPUdnFqx%2F71yWvLh8ufHJ4z6SE9N8TJUfX4q%2FGUVYsw8F8KOlMaNFxWzLUoNEa65bwUO09Mu%2FpWr9YeBuecnfNnfp2A%2B6nOSSA%2BsEDlAHFl9sFL4RmxJJDrbt5Wcxy%2B7MkvQoVpBlrdhali%2F5iwu5sqmQRpM4VeeypZxYaN30O9xy1%2FM9OuOAAYAMeYkFB4qCLHDux9cnzCs7JnABjqkAXFcZUDeXBqfQNuURjGzLI23O4O3UN6nxGwOWOHl55zugfK%2BnLsJ4Iw43%2Fl1lz7GPJ8%2B3ya1JQxuqHWfUauINQV2uO%2BnnYAM%2BafktQXJtnD%2BcHgGm7EE6KtcEo7obgrjlnATJ6F71%2F0AkroaThSU4OA31pTKy87ij9x4zoQxM4btnimCWAx0a4fffCJdVZXAJ8wx11Pwz9lIIKza4GRpHh737eQv&X-Amz-Signature=bf221055732cd70727f22f10dc263673322fb356e57cca3a3237294fe6642f85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVJCRK5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDU88qOR75GiVhMWYGGdJ4792DxMQnjaXnOykR7U4QwfwIhAMuH9yKsv3C2x1p7hROcGGmA1pLDh1tGJCdp2xpDwcS6KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoTQMftfbvfjiP1qYq3ANYjM8d1EOBwjoooGgPqncDbGNNnMsVZcd84jBQ2rtuCEguLO4B4kcLgIEN92ITPLIu7rOWXUqltM2ZFknKR4CtV%2F4noZr%2B1MTBJvTYRNFtE7vdiNMqo6a2Cg%2BIRPQDvfAeIA55e3X8PRYADnt5TaLQwxmSi7UKoQhDrzrCh8Bb%2BgE9nNmWoTq%2FnrwWUN9YKyeX%2Fr7sDZF1eyzyoC4uQtswse90zXAHWLRWUS%2FoO5P7XBTZ6SawxSOK%2Bjb3tpYuSSzxG5bwknq2bWi640gNz89pN8h1reWMHwBzmNCcN7adWUCOrGHMo7mgc2lT1DKzkb%2BOi%2Bop5Budt9BQvBokI2vsb9O3mbbj8Qxv%2FNZ1sEbDVIsufFKWVYTchwbAHGZJRbp3pR32AeGEEagTi%2BD8Fj4qCDo7%2F9KIUAu5F0gyIfwtaVFXAiY4VPUdnFqx%2F71yWvLh8ufHJ4z6SE9N8TJUfX4q%2FGUVYsw8F8KOlMaNFxWzLUoNEa65bwUO09Mu%2FpWr9YeBuecnfNnfp2A%2B6nOSSA%2BsEDlAHFl9sFL4RmxJJDrbt5Wcxy%2B7MkvQoVpBlrdhali%2F5iwu5sqmQRpM4VeeypZxYaN30O9xy1%2FM9OuOAAYAMeYkFB4qCLHDux9cnzCs7JnABjqkAXFcZUDeXBqfQNuURjGzLI23O4O3UN6nxGwOWOHl55zugfK%2BnLsJ4Iw43%2Fl1lz7GPJ8%2B3ya1JQxuqHWfUauINQV2uO%2BnnYAM%2BafktQXJtnD%2BcHgGm7EE6KtcEo7obgrjlnATJ6F71%2F0AkroaThSU4OA31pTKy87ij9x4zoQxM4btnimCWAx0a4fffCJdVZXAJ8wx11Pwz9lIIKza4GRpHh737eQv&X-Amz-Signature=e8722bdc3e4d312feeed9e596ebbc490db15ba519d905f35c2199b2a2d0c2252&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
