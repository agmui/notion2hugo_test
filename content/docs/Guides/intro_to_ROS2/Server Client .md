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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TZUKKA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDux9cpRFH%2B5LxpFe6ubJCbXuKgcf7XOkezsLEElX7%2FeAiEA63K%2B15TTvCgDTaHZOg%2B2zQsBwBJs797hMMQ7yprVm5EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7KH2gwXnWZgI6r4ircA3gjSRnTth8QKJBhxvh9nQJybcpYJ4jDCo9sF5sL8wPWOtL8KlAk9MY%2F%2FPQkR0%2BJ30IjgyxaLZpeKL0oZBQzVHHla9H8K0upka3OBEzE5QNMidt%2FbvKJeLiqj%2BB2J41XJGeA0kLs2VqmPpq3R1%2F%2B7NMR5QRarQwx3BibaLKsYLXgTveCYAUqlU7ZhVTcLryYsgmxWNzmvy%2B7USUbuRjKgoRuFs3XUp1yV7FfNVgP%2FoVdPsRZCTdosQo1Lg6wya7FDGJ99vyBz4SZWmPLDwD9evD%2BrKHZwz0q18Ycpz8Bt1BA6GhUmcTRd7kvoZiBwQkiBe7QdiJse9ZbMRz%2F6RZErIxJRVf%2FWpKSaEDIhdZSCfmaKjpB0J6VLmjBvLd6rHKlUxADdEpGI2kG6W%2FkHGbx2eYQc%2FB5UeV96%2BH%2BGSnDSN%2BMQPReV4fU4wcsqFT6c3sPf7KXVEbKTTis7xDaKdiPV1NutqJtqSzFBYutEnX0z8M6X5fIaQvwKhmkRYJNA%2FPrRoB5WKgYyvmfEP2YJurTPitsJQO6t0xLNBxMKxHZTiAK7EuCfGKX6JXUdn%2FhhWsBxZ8s0j%2Bhs0nC8htwBWr0xomQI%2FlVqaV6r2iETFcdK7Y2bK%2FUhXNVDCppaTPRMJnCv8EGOqUBW8IG0wq0hf3Otnf%2B2ulG%2B0HuW8dEPYdi%2B%2BredfatlX5vhqvtj9wcR08uFgcDhI6Ey7A0hBqbhs0miwDjkp0vAMEDxleKnhIQxIIAMsxbeIeoxeatycIcxNRXcEYoHd6dM0UCNQYOTeF8%2BdaSoKABNTSZZgk5JHXBXkDvFRZEFWYKjKjB%2FWty5%2FZIeL%2BG8Tc%2FGlmQVTlkTF%2FekjvZ1bJ5HTB%2FLOaW&X-Amz-Signature=9cc3e9cc9f121d2d431fca062edb789900a5224b2d257dcd1935507c6d295224&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TZUKKA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDux9cpRFH%2B5LxpFe6ubJCbXuKgcf7XOkezsLEElX7%2FeAiEA63K%2B15TTvCgDTaHZOg%2B2zQsBwBJs797hMMQ7yprVm5EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7KH2gwXnWZgI6r4ircA3gjSRnTth8QKJBhxvh9nQJybcpYJ4jDCo9sF5sL8wPWOtL8KlAk9MY%2F%2FPQkR0%2BJ30IjgyxaLZpeKL0oZBQzVHHla9H8K0upka3OBEzE5QNMidt%2FbvKJeLiqj%2BB2J41XJGeA0kLs2VqmPpq3R1%2F%2B7NMR5QRarQwx3BibaLKsYLXgTveCYAUqlU7ZhVTcLryYsgmxWNzmvy%2B7USUbuRjKgoRuFs3XUp1yV7FfNVgP%2FoVdPsRZCTdosQo1Lg6wya7FDGJ99vyBz4SZWmPLDwD9evD%2BrKHZwz0q18Ycpz8Bt1BA6GhUmcTRd7kvoZiBwQkiBe7QdiJse9ZbMRz%2F6RZErIxJRVf%2FWpKSaEDIhdZSCfmaKjpB0J6VLmjBvLd6rHKlUxADdEpGI2kG6W%2FkHGbx2eYQc%2FB5UeV96%2BH%2BGSnDSN%2BMQPReV4fU4wcsqFT6c3sPf7KXVEbKTTis7xDaKdiPV1NutqJtqSzFBYutEnX0z8M6X5fIaQvwKhmkRYJNA%2FPrRoB5WKgYyvmfEP2YJurTPitsJQO6t0xLNBxMKxHZTiAK7EuCfGKX6JXUdn%2FhhWsBxZ8s0j%2Bhs0nC8htwBWr0xomQI%2FlVqaV6r2iETFcdK7Y2bK%2FUhXNVDCppaTPRMJnCv8EGOqUBW8IG0wq0hf3Otnf%2B2ulG%2B0HuW8dEPYdi%2B%2BredfatlX5vhqvtj9wcR08uFgcDhI6Ey7A0hBqbhs0miwDjkp0vAMEDxleKnhIQxIIAMsxbeIeoxeatycIcxNRXcEYoHd6dM0UCNQYOTeF8%2BdaSoKABNTSZZgk5JHXBXkDvFRZEFWYKjKjB%2FWty5%2FZIeL%2BG8Tc%2FGlmQVTlkTF%2FekjvZ1bJ5HTB%2FLOaW&X-Amz-Signature=e1225d11ab9e895e33bdae77261f89ef309943f1dbb8dbfab850587639a8ab8e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TZUKKA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDux9cpRFH%2B5LxpFe6ubJCbXuKgcf7XOkezsLEElX7%2FeAiEA63K%2B15TTvCgDTaHZOg%2B2zQsBwBJs797hMMQ7yprVm5EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7KH2gwXnWZgI6r4ircA3gjSRnTth8QKJBhxvh9nQJybcpYJ4jDCo9sF5sL8wPWOtL8KlAk9MY%2F%2FPQkR0%2BJ30IjgyxaLZpeKL0oZBQzVHHla9H8K0upka3OBEzE5QNMidt%2FbvKJeLiqj%2BB2J41XJGeA0kLs2VqmPpq3R1%2F%2B7NMR5QRarQwx3BibaLKsYLXgTveCYAUqlU7ZhVTcLryYsgmxWNzmvy%2B7USUbuRjKgoRuFs3XUp1yV7FfNVgP%2FoVdPsRZCTdosQo1Lg6wya7FDGJ99vyBz4SZWmPLDwD9evD%2BrKHZwz0q18Ycpz8Bt1BA6GhUmcTRd7kvoZiBwQkiBe7QdiJse9ZbMRz%2F6RZErIxJRVf%2FWpKSaEDIhdZSCfmaKjpB0J6VLmjBvLd6rHKlUxADdEpGI2kG6W%2FkHGbx2eYQc%2FB5UeV96%2BH%2BGSnDSN%2BMQPReV4fU4wcsqFT6c3sPf7KXVEbKTTis7xDaKdiPV1NutqJtqSzFBYutEnX0z8M6X5fIaQvwKhmkRYJNA%2FPrRoB5WKgYyvmfEP2YJurTPitsJQO6t0xLNBxMKxHZTiAK7EuCfGKX6JXUdn%2FhhWsBxZ8s0j%2Bhs0nC8htwBWr0xomQI%2FlVqaV6r2iETFcdK7Y2bK%2FUhXNVDCppaTPRMJnCv8EGOqUBW8IG0wq0hf3Otnf%2B2ulG%2B0HuW8dEPYdi%2B%2BredfatlX5vhqvtj9wcR08uFgcDhI6Ey7A0hBqbhs0miwDjkp0vAMEDxleKnhIQxIIAMsxbeIeoxeatycIcxNRXcEYoHd6dM0UCNQYOTeF8%2BdaSoKABNTSZZgk5JHXBXkDvFRZEFWYKjKjB%2FWty5%2FZIeL%2BG8Tc%2FGlmQVTlkTF%2FekjvZ1bJ5HTB%2FLOaW&X-Amz-Signature=8f4d516a295fb9a66386b6c080ab2da306ac4d468f99752345b09691181612cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TZUKKA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDux9cpRFH%2B5LxpFe6ubJCbXuKgcf7XOkezsLEElX7%2FeAiEA63K%2B15TTvCgDTaHZOg%2B2zQsBwBJs797hMMQ7yprVm5EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7KH2gwXnWZgI6r4ircA3gjSRnTth8QKJBhxvh9nQJybcpYJ4jDCo9sF5sL8wPWOtL8KlAk9MY%2F%2FPQkR0%2BJ30IjgyxaLZpeKL0oZBQzVHHla9H8K0upka3OBEzE5QNMidt%2FbvKJeLiqj%2BB2J41XJGeA0kLs2VqmPpq3R1%2F%2B7NMR5QRarQwx3BibaLKsYLXgTveCYAUqlU7ZhVTcLryYsgmxWNzmvy%2B7USUbuRjKgoRuFs3XUp1yV7FfNVgP%2FoVdPsRZCTdosQo1Lg6wya7FDGJ99vyBz4SZWmPLDwD9evD%2BrKHZwz0q18Ycpz8Bt1BA6GhUmcTRd7kvoZiBwQkiBe7QdiJse9ZbMRz%2F6RZErIxJRVf%2FWpKSaEDIhdZSCfmaKjpB0J6VLmjBvLd6rHKlUxADdEpGI2kG6W%2FkHGbx2eYQc%2FB5UeV96%2BH%2BGSnDSN%2BMQPReV4fU4wcsqFT6c3sPf7KXVEbKTTis7xDaKdiPV1NutqJtqSzFBYutEnX0z8M6X5fIaQvwKhmkRYJNA%2FPrRoB5WKgYyvmfEP2YJurTPitsJQO6t0xLNBxMKxHZTiAK7EuCfGKX6JXUdn%2FhhWsBxZ8s0j%2Bhs0nC8htwBWr0xomQI%2FlVqaV6r2iETFcdK7Y2bK%2FUhXNVDCppaTPRMJnCv8EGOqUBW8IG0wq0hf3Otnf%2B2ulG%2B0HuW8dEPYdi%2B%2BredfatlX5vhqvtj9wcR08uFgcDhI6Ey7A0hBqbhs0miwDjkp0vAMEDxleKnhIQxIIAMsxbeIeoxeatycIcxNRXcEYoHd6dM0UCNQYOTeF8%2BdaSoKABNTSZZgk5JHXBXkDvFRZEFWYKjKjB%2FWty5%2FZIeL%2BG8Tc%2FGlmQVTlkTF%2FekjvZ1bJ5HTB%2FLOaW&X-Amz-Signature=08c86c01efd295a8f7008039d3ad1ef5096c1b10b10932cfb142342b4dfbd8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TZUKKA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDux9cpRFH%2B5LxpFe6ubJCbXuKgcf7XOkezsLEElX7%2FeAiEA63K%2B15TTvCgDTaHZOg%2B2zQsBwBJs797hMMQ7yprVm5EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7KH2gwXnWZgI6r4ircA3gjSRnTth8QKJBhxvh9nQJybcpYJ4jDCo9sF5sL8wPWOtL8KlAk9MY%2F%2FPQkR0%2BJ30IjgyxaLZpeKL0oZBQzVHHla9H8K0upka3OBEzE5QNMidt%2FbvKJeLiqj%2BB2J41XJGeA0kLs2VqmPpq3R1%2F%2B7NMR5QRarQwx3BibaLKsYLXgTveCYAUqlU7ZhVTcLryYsgmxWNzmvy%2B7USUbuRjKgoRuFs3XUp1yV7FfNVgP%2FoVdPsRZCTdosQo1Lg6wya7FDGJ99vyBz4SZWmPLDwD9evD%2BrKHZwz0q18Ycpz8Bt1BA6GhUmcTRd7kvoZiBwQkiBe7QdiJse9ZbMRz%2F6RZErIxJRVf%2FWpKSaEDIhdZSCfmaKjpB0J6VLmjBvLd6rHKlUxADdEpGI2kG6W%2FkHGbx2eYQc%2FB5UeV96%2BH%2BGSnDSN%2BMQPReV4fU4wcsqFT6c3sPf7KXVEbKTTis7xDaKdiPV1NutqJtqSzFBYutEnX0z8M6X5fIaQvwKhmkRYJNA%2FPrRoB5WKgYyvmfEP2YJurTPitsJQO6t0xLNBxMKxHZTiAK7EuCfGKX6JXUdn%2FhhWsBxZ8s0j%2Bhs0nC8htwBWr0xomQI%2FlVqaV6r2iETFcdK7Y2bK%2FUhXNVDCppaTPRMJnCv8EGOqUBW8IG0wq0hf3Otnf%2B2ulG%2B0HuW8dEPYdi%2B%2BredfatlX5vhqvtj9wcR08uFgcDhI6Ey7A0hBqbhs0miwDjkp0vAMEDxleKnhIQxIIAMsxbeIeoxeatycIcxNRXcEYoHd6dM0UCNQYOTeF8%2BdaSoKABNTSZZgk5JHXBXkDvFRZEFWYKjKjB%2FWty5%2FZIeL%2BG8Tc%2FGlmQVTlkTF%2FekjvZ1bJ5HTB%2FLOaW&X-Amz-Signature=28c90a7712d6e6cddd045e423cb0de40a977e2fb07ad0c27f19e7ca24b111168&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
