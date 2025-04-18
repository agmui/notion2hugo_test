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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4YYZQV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgh8u%2F0vc5DmQWuKo7NeSn9upzVhFcemfhMa3lx4MI4AiBWUA9JtS9wNi20e0MGBLFQ3NZE7nVeBC2qJQN3MIpLICr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMG2W3PMXvks0IT%2FuZKtwDJ76rpunWxcehgcmGqza%2BcdMF8V8oo%2FlOK0zkT8rBKJSJ1un2%2B3zhYEeIgkWziY0muIIhKR8IuDPcB4b5934q%2FwTF2nDT4cZAZOGhB%2B%2FUNhtNKvVImQlZIqIWhpMUFMhzM0q9v8HDD%2BkQPXeVfegcyINQaWzX4Bmhmu1x3aNJqgJOEoYX%2FGQTj2xNO6OFG6YzyKjGbmYHUU2SaGXch%2B%2F5%2FAV7HjOPor5ITVruwnYCRNB88QWlLeHGmo6x6r06WtlxjRdCHsWKj8oyWhKa1Oi5lWvw7RHPoTTYK2VhRWFx0zz1Gg%2BAQf%2BpKGoloQibO4OdTVbrDd1HHVfDAXG%2Bsfd6WX2C1rmyt7SSQuxNBCptUPh8OapVWRUD1bOND7quG5r%2Bax6lnZpLYoHckck17c6OHfgPA1Ake84lgoYHP7hG8WI3aFdFp6dT9B0CipL6oNlkdU4gQKu5IZIB1fJrumma7jNMDfVbmE1Gbf9ZqseZQSRWgu%2BotQT1%2FcMjrWsGF0MByPhmKwZWzJ%2BdPUNbhnYbGx7tbE0JCvWc3cdcJYqg0RE075Z2aELXiPW6Q7%2F1crxR6fvXouN66x%2FpKysxfKZSeWEkeCM9SbrCm%2BHI7%2FnQlHa7gO2nPPejQl1KHloww9mGwAY6pgHQtYUDaLE7EOYxem6Bh9s%2FNQ5jGSK9TwIef%2Fj4RGtLFzJK9tbMmVkv1bfwJU8uCAHZKYTrpgk%2Fd9hupdr5teK2Zf33R1wk5ilKbw0wWzImsWRSiY%2BoX8sdU7fcIx1GzIsVitN7nIOjTxqlSNRvQQljC4NoGyw3Ocs6NoxN84oKM0I1pLdUBDWOh1ofMAhYkKG71NTKP74dygSjP9tDda5Lf%2BzG3Pxu&X-Amz-Signature=15a5c355f12e17d5f2a136d25e6367717fca2cd9650068de6773f0594decc1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4YYZQV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgh8u%2F0vc5DmQWuKo7NeSn9upzVhFcemfhMa3lx4MI4AiBWUA9JtS9wNi20e0MGBLFQ3NZE7nVeBC2qJQN3MIpLICr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMG2W3PMXvks0IT%2FuZKtwDJ76rpunWxcehgcmGqza%2BcdMF8V8oo%2FlOK0zkT8rBKJSJ1un2%2B3zhYEeIgkWziY0muIIhKR8IuDPcB4b5934q%2FwTF2nDT4cZAZOGhB%2B%2FUNhtNKvVImQlZIqIWhpMUFMhzM0q9v8HDD%2BkQPXeVfegcyINQaWzX4Bmhmu1x3aNJqgJOEoYX%2FGQTj2xNO6OFG6YzyKjGbmYHUU2SaGXch%2B%2F5%2FAV7HjOPor5ITVruwnYCRNB88QWlLeHGmo6x6r06WtlxjRdCHsWKj8oyWhKa1Oi5lWvw7RHPoTTYK2VhRWFx0zz1Gg%2BAQf%2BpKGoloQibO4OdTVbrDd1HHVfDAXG%2Bsfd6WX2C1rmyt7SSQuxNBCptUPh8OapVWRUD1bOND7quG5r%2Bax6lnZpLYoHckck17c6OHfgPA1Ake84lgoYHP7hG8WI3aFdFp6dT9B0CipL6oNlkdU4gQKu5IZIB1fJrumma7jNMDfVbmE1Gbf9ZqseZQSRWgu%2BotQT1%2FcMjrWsGF0MByPhmKwZWzJ%2BdPUNbhnYbGx7tbE0JCvWc3cdcJYqg0RE075Z2aELXiPW6Q7%2F1crxR6fvXouN66x%2FpKysxfKZSeWEkeCM9SbrCm%2BHI7%2FnQlHa7gO2nPPejQl1KHloww9mGwAY6pgHQtYUDaLE7EOYxem6Bh9s%2FNQ5jGSK9TwIef%2Fj4RGtLFzJK9tbMmVkv1bfwJU8uCAHZKYTrpgk%2Fd9hupdr5teK2Zf33R1wk5ilKbw0wWzImsWRSiY%2BoX8sdU7fcIx1GzIsVitN7nIOjTxqlSNRvQQljC4NoGyw3Ocs6NoxN84oKM0I1pLdUBDWOh1ofMAhYkKG71NTKP74dygSjP9tDda5Lf%2BzG3Pxu&X-Amz-Signature=4af54a92d5e6c5b68531c28a8b3d8f4cc6ede75c7e53cab6184e5a86a90b0971&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4YYZQV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgh8u%2F0vc5DmQWuKo7NeSn9upzVhFcemfhMa3lx4MI4AiBWUA9JtS9wNi20e0MGBLFQ3NZE7nVeBC2qJQN3MIpLICr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMG2W3PMXvks0IT%2FuZKtwDJ76rpunWxcehgcmGqza%2BcdMF8V8oo%2FlOK0zkT8rBKJSJ1un2%2B3zhYEeIgkWziY0muIIhKR8IuDPcB4b5934q%2FwTF2nDT4cZAZOGhB%2B%2FUNhtNKvVImQlZIqIWhpMUFMhzM0q9v8HDD%2BkQPXeVfegcyINQaWzX4Bmhmu1x3aNJqgJOEoYX%2FGQTj2xNO6OFG6YzyKjGbmYHUU2SaGXch%2B%2F5%2FAV7HjOPor5ITVruwnYCRNB88QWlLeHGmo6x6r06WtlxjRdCHsWKj8oyWhKa1Oi5lWvw7RHPoTTYK2VhRWFx0zz1Gg%2BAQf%2BpKGoloQibO4OdTVbrDd1HHVfDAXG%2Bsfd6WX2C1rmyt7SSQuxNBCptUPh8OapVWRUD1bOND7quG5r%2Bax6lnZpLYoHckck17c6OHfgPA1Ake84lgoYHP7hG8WI3aFdFp6dT9B0CipL6oNlkdU4gQKu5IZIB1fJrumma7jNMDfVbmE1Gbf9ZqseZQSRWgu%2BotQT1%2FcMjrWsGF0MByPhmKwZWzJ%2BdPUNbhnYbGx7tbE0JCvWc3cdcJYqg0RE075Z2aELXiPW6Q7%2F1crxR6fvXouN66x%2FpKysxfKZSeWEkeCM9SbrCm%2BHI7%2FnQlHa7gO2nPPejQl1KHloww9mGwAY6pgHQtYUDaLE7EOYxem6Bh9s%2FNQ5jGSK9TwIef%2Fj4RGtLFzJK9tbMmVkv1bfwJU8uCAHZKYTrpgk%2Fd9hupdr5teK2Zf33R1wk5ilKbw0wWzImsWRSiY%2BoX8sdU7fcIx1GzIsVitN7nIOjTxqlSNRvQQljC4NoGyw3Ocs6NoxN84oKM0I1pLdUBDWOh1ofMAhYkKG71NTKP74dygSjP9tDda5Lf%2BzG3Pxu&X-Amz-Signature=fddd817bcc1aef38577cf7d013ba405004d0e5d195bdd309c6da43606df93e33&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4YYZQV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgh8u%2F0vc5DmQWuKo7NeSn9upzVhFcemfhMa3lx4MI4AiBWUA9JtS9wNi20e0MGBLFQ3NZE7nVeBC2qJQN3MIpLICr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMG2W3PMXvks0IT%2FuZKtwDJ76rpunWxcehgcmGqza%2BcdMF8V8oo%2FlOK0zkT8rBKJSJ1un2%2B3zhYEeIgkWziY0muIIhKR8IuDPcB4b5934q%2FwTF2nDT4cZAZOGhB%2B%2FUNhtNKvVImQlZIqIWhpMUFMhzM0q9v8HDD%2BkQPXeVfegcyINQaWzX4Bmhmu1x3aNJqgJOEoYX%2FGQTj2xNO6OFG6YzyKjGbmYHUU2SaGXch%2B%2F5%2FAV7HjOPor5ITVruwnYCRNB88QWlLeHGmo6x6r06WtlxjRdCHsWKj8oyWhKa1Oi5lWvw7RHPoTTYK2VhRWFx0zz1Gg%2BAQf%2BpKGoloQibO4OdTVbrDd1HHVfDAXG%2Bsfd6WX2C1rmyt7SSQuxNBCptUPh8OapVWRUD1bOND7quG5r%2Bax6lnZpLYoHckck17c6OHfgPA1Ake84lgoYHP7hG8WI3aFdFp6dT9B0CipL6oNlkdU4gQKu5IZIB1fJrumma7jNMDfVbmE1Gbf9ZqseZQSRWgu%2BotQT1%2FcMjrWsGF0MByPhmKwZWzJ%2BdPUNbhnYbGx7tbE0JCvWc3cdcJYqg0RE075Z2aELXiPW6Q7%2F1crxR6fvXouN66x%2FpKysxfKZSeWEkeCM9SbrCm%2BHI7%2FnQlHa7gO2nPPejQl1KHloww9mGwAY6pgHQtYUDaLE7EOYxem6Bh9s%2FNQ5jGSK9TwIef%2Fj4RGtLFzJK9tbMmVkv1bfwJU8uCAHZKYTrpgk%2Fd9hupdr5teK2Zf33R1wk5ilKbw0wWzImsWRSiY%2BoX8sdU7fcIx1GzIsVitN7nIOjTxqlSNRvQQljC4NoGyw3Ocs6NoxN84oKM0I1pLdUBDWOh1ofMAhYkKG71NTKP74dygSjP9tDda5Lf%2BzG3Pxu&X-Amz-Signature=3940c5e0419891acf12e0a81be46433429de5393df0ee0ccb4925a1d812e0dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4YYZQV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgh8u%2F0vc5DmQWuKo7NeSn9upzVhFcemfhMa3lx4MI4AiBWUA9JtS9wNi20e0MGBLFQ3NZE7nVeBC2qJQN3MIpLICr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMG2W3PMXvks0IT%2FuZKtwDJ76rpunWxcehgcmGqza%2BcdMF8V8oo%2FlOK0zkT8rBKJSJ1un2%2B3zhYEeIgkWziY0muIIhKR8IuDPcB4b5934q%2FwTF2nDT4cZAZOGhB%2B%2FUNhtNKvVImQlZIqIWhpMUFMhzM0q9v8HDD%2BkQPXeVfegcyINQaWzX4Bmhmu1x3aNJqgJOEoYX%2FGQTj2xNO6OFG6YzyKjGbmYHUU2SaGXch%2B%2F5%2FAV7HjOPor5ITVruwnYCRNB88QWlLeHGmo6x6r06WtlxjRdCHsWKj8oyWhKa1Oi5lWvw7RHPoTTYK2VhRWFx0zz1Gg%2BAQf%2BpKGoloQibO4OdTVbrDd1HHVfDAXG%2Bsfd6WX2C1rmyt7SSQuxNBCptUPh8OapVWRUD1bOND7quG5r%2Bax6lnZpLYoHckck17c6OHfgPA1Ake84lgoYHP7hG8WI3aFdFp6dT9B0CipL6oNlkdU4gQKu5IZIB1fJrumma7jNMDfVbmE1Gbf9ZqseZQSRWgu%2BotQT1%2FcMjrWsGF0MByPhmKwZWzJ%2BdPUNbhnYbGx7tbE0JCvWc3cdcJYqg0RE075Z2aELXiPW6Q7%2F1crxR6fvXouN66x%2FpKysxfKZSeWEkeCM9SbrCm%2BHI7%2FnQlHa7gO2nPPejQl1KHloww9mGwAY6pgHQtYUDaLE7EOYxem6Bh9s%2FNQ5jGSK9TwIef%2Fj4RGtLFzJK9tbMmVkv1bfwJU8uCAHZKYTrpgk%2Fd9hupdr5teK2Zf33R1wk5ilKbw0wWzImsWRSiY%2BoX8sdU7fcIx1GzIsVitN7nIOjTxqlSNRvQQljC4NoGyw3Ocs6NoxN84oKM0I1pLdUBDWOh1ofMAhYkKG71NTKP74dygSjP9tDda5Lf%2BzG3Pxu&X-Amz-Signature=d6b73d37c4a28da6d492181882acbbb74e6bf2de3f9aad5060f1b8d7205fc282&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
