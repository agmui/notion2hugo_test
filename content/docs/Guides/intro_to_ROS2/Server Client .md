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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JR2KFY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDwdvUhgV36MBq4VLneX%2B63wYbAaHM2V2mQWDfZoMWOZAiBCCwd3oEZxl6XmPqoGyX8Cp9tT7sVbaclXDoF7LoLbPCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaa9M5tb9%2FRuRw9PgKtwDsQ2HB07UuMsdZ4TmVpw8KCF1Z0WaJMlRKd4QagVd0B%2BcsqyNmMdvr2wAJPILBmticOT6JeQwuyqlJo6MFap%2FOQoDA9Sl%2FnPT4wYU2jdhRYn%2BARFrD0ou0c49sbqhuqXcn8fijd3rt0LytJpiPkI047ZpbpAa%2FFyHWtiQHocwZdYLIgSEeJKCf9mP7SIQRqeeu4%2F%2BJl08no5yElGrmnKoigfzpPwKTx6611k5h6z8ecf7EDypECCDD0yer2eep2Iw4JGQNiVKyZQqSXjCCU55B1J9f4q0eMSuq%2BfV1SigxD5B%2FWNsIrHPw1EsWJUTkZVYg3tvNX85rMOWVwRhlTYBHUKCg2G1k%2FYXJHn36b6eNer4%2FCnHznhEhSlbaYMWa2QtJT7HQt43%2FkXetBO3vm40k6hTrNrjq3LlK7fgKsmBD67Hp%2B83%2BOIGnzj43GKWQWuy2P9aRW4E3SH3qqVHNjwi66cFefxjxBRCskZFWSnMavqvRhnfTSyozoWOFI9a0HO9dWjDYgF8qSNzLaD6%2B48ImMKhD1dVu%2Frfe%2FDJGxLdoEw583%2B%2FZ3tkQVf8LizyULyq8yDBl9R6md4M9uSeU00oZsKo8xp2hirzDSaJLG4Nq93bFWA9GQA0j0JBSHYw0I%2FEwQY6pgEk6zsJVclfIeo1S7VIimPdJsDgsPdDM1MpmbLYUT4lb%2FctygbeVr3zh4LPNAmXdAqMC08pCdqRVHSMRnEITh4csA2TCTZE04rMupfxLBy1MduHTnL0NPnKq3EfaqgAXaly0DCMRa8toKcn6VrmpFWRqXTTGBDWqYroc4eM8xoKiKyTVFJovMWvHKgZUoh7EZom%2BeCrf96scVN%2FhtiyZ17%2FgDSVZDhz&X-Amz-Signature=a6fb9ce2a5ebbefe3548a82765333ff788921a38888006cfde4c8421218802bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JR2KFY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDwdvUhgV36MBq4VLneX%2B63wYbAaHM2V2mQWDfZoMWOZAiBCCwd3oEZxl6XmPqoGyX8Cp9tT7sVbaclXDoF7LoLbPCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaa9M5tb9%2FRuRw9PgKtwDsQ2HB07UuMsdZ4TmVpw8KCF1Z0WaJMlRKd4QagVd0B%2BcsqyNmMdvr2wAJPILBmticOT6JeQwuyqlJo6MFap%2FOQoDA9Sl%2FnPT4wYU2jdhRYn%2BARFrD0ou0c49sbqhuqXcn8fijd3rt0LytJpiPkI047ZpbpAa%2FFyHWtiQHocwZdYLIgSEeJKCf9mP7SIQRqeeu4%2F%2BJl08no5yElGrmnKoigfzpPwKTx6611k5h6z8ecf7EDypECCDD0yer2eep2Iw4JGQNiVKyZQqSXjCCU55B1J9f4q0eMSuq%2BfV1SigxD5B%2FWNsIrHPw1EsWJUTkZVYg3tvNX85rMOWVwRhlTYBHUKCg2G1k%2FYXJHn36b6eNer4%2FCnHznhEhSlbaYMWa2QtJT7HQt43%2FkXetBO3vm40k6hTrNrjq3LlK7fgKsmBD67Hp%2B83%2BOIGnzj43GKWQWuy2P9aRW4E3SH3qqVHNjwi66cFefxjxBRCskZFWSnMavqvRhnfTSyozoWOFI9a0HO9dWjDYgF8qSNzLaD6%2B48ImMKhD1dVu%2Frfe%2FDJGxLdoEw583%2B%2FZ3tkQVf8LizyULyq8yDBl9R6md4M9uSeU00oZsKo8xp2hirzDSaJLG4Nq93bFWA9GQA0j0JBSHYw0I%2FEwQY6pgEk6zsJVclfIeo1S7VIimPdJsDgsPdDM1MpmbLYUT4lb%2FctygbeVr3zh4LPNAmXdAqMC08pCdqRVHSMRnEITh4csA2TCTZE04rMupfxLBy1MduHTnL0NPnKq3EfaqgAXaly0DCMRa8toKcn6VrmpFWRqXTTGBDWqYroc4eM8xoKiKyTVFJovMWvHKgZUoh7EZom%2BeCrf96scVN%2FhtiyZ17%2FgDSVZDhz&X-Amz-Signature=ac9716212f10b1e2774ca0db6229dabe4d3e1ced85b287291c5b4ef59a7f373c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JR2KFY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDwdvUhgV36MBq4VLneX%2B63wYbAaHM2V2mQWDfZoMWOZAiBCCwd3oEZxl6XmPqoGyX8Cp9tT7sVbaclXDoF7LoLbPCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaa9M5tb9%2FRuRw9PgKtwDsQ2HB07UuMsdZ4TmVpw8KCF1Z0WaJMlRKd4QagVd0B%2BcsqyNmMdvr2wAJPILBmticOT6JeQwuyqlJo6MFap%2FOQoDA9Sl%2FnPT4wYU2jdhRYn%2BARFrD0ou0c49sbqhuqXcn8fijd3rt0LytJpiPkI047ZpbpAa%2FFyHWtiQHocwZdYLIgSEeJKCf9mP7SIQRqeeu4%2F%2BJl08no5yElGrmnKoigfzpPwKTx6611k5h6z8ecf7EDypECCDD0yer2eep2Iw4JGQNiVKyZQqSXjCCU55B1J9f4q0eMSuq%2BfV1SigxD5B%2FWNsIrHPw1EsWJUTkZVYg3tvNX85rMOWVwRhlTYBHUKCg2G1k%2FYXJHn36b6eNer4%2FCnHznhEhSlbaYMWa2QtJT7HQt43%2FkXetBO3vm40k6hTrNrjq3LlK7fgKsmBD67Hp%2B83%2BOIGnzj43GKWQWuy2P9aRW4E3SH3qqVHNjwi66cFefxjxBRCskZFWSnMavqvRhnfTSyozoWOFI9a0HO9dWjDYgF8qSNzLaD6%2B48ImMKhD1dVu%2Frfe%2FDJGxLdoEw583%2B%2FZ3tkQVf8LizyULyq8yDBl9R6md4M9uSeU00oZsKo8xp2hirzDSaJLG4Nq93bFWA9GQA0j0JBSHYw0I%2FEwQY6pgEk6zsJVclfIeo1S7VIimPdJsDgsPdDM1MpmbLYUT4lb%2FctygbeVr3zh4LPNAmXdAqMC08pCdqRVHSMRnEITh4csA2TCTZE04rMupfxLBy1MduHTnL0NPnKq3EfaqgAXaly0DCMRa8toKcn6VrmpFWRqXTTGBDWqYroc4eM8xoKiKyTVFJovMWvHKgZUoh7EZom%2BeCrf96scVN%2FhtiyZ17%2FgDSVZDhz&X-Amz-Signature=ee9a881d47b27114fc93c1856d03acd5472098712fd4d96349f02f8dcec22213&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JR2KFY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDwdvUhgV36MBq4VLneX%2B63wYbAaHM2V2mQWDfZoMWOZAiBCCwd3oEZxl6XmPqoGyX8Cp9tT7sVbaclXDoF7LoLbPCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaa9M5tb9%2FRuRw9PgKtwDsQ2HB07UuMsdZ4TmVpw8KCF1Z0WaJMlRKd4QagVd0B%2BcsqyNmMdvr2wAJPILBmticOT6JeQwuyqlJo6MFap%2FOQoDA9Sl%2FnPT4wYU2jdhRYn%2BARFrD0ou0c49sbqhuqXcn8fijd3rt0LytJpiPkI047ZpbpAa%2FFyHWtiQHocwZdYLIgSEeJKCf9mP7SIQRqeeu4%2F%2BJl08no5yElGrmnKoigfzpPwKTx6611k5h6z8ecf7EDypECCDD0yer2eep2Iw4JGQNiVKyZQqSXjCCU55B1J9f4q0eMSuq%2BfV1SigxD5B%2FWNsIrHPw1EsWJUTkZVYg3tvNX85rMOWVwRhlTYBHUKCg2G1k%2FYXJHn36b6eNer4%2FCnHznhEhSlbaYMWa2QtJT7HQt43%2FkXetBO3vm40k6hTrNrjq3LlK7fgKsmBD67Hp%2B83%2BOIGnzj43GKWQWuy2P9aRW4E3SH3qqVHNjwi66cFefxjxBRCskZFWSnMavqvRhnfTSyozoWOFI9a0HO9dWjDYgF8qSNzLaD6%2B48ImMKhD1dVu%2Frfe%2FDJGxLdoEw583%2B%2FZ3tkQVf8LizyULyq8yDBl9R6md4M9uSeU00oZsKo8xp2hirzDSaJLG4Nq93bFWA9GQA0j0JBSHYw0I%2FEwQY6pgEk6zsJVclfIeo1S7VIimPdJsDgsPdDM1MpmbLYUT4lb%2FctygbeVr3zh4LPNAmXdAqMC08pCdqRVHSMRnEITh4csA2TCTZE04rMupfxLBy1MduHTnL0NPnKq3EfaqgAXaly0DCMRa8toKcn6VrmpFWRqXTTGBDWqYroc4eM8xoKiKyTVFJovMWvHKgZUoh7EZom%2BeCrf96scVN%2FhtiyZ17%2FgDSVZDhz&X-Amz-Signature=e16ee66fbd439188c582dcbd5caaae64260bacdf3a3f6c93fbf8726cad2459d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JR2KFY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDwdvUhgV36MBq4VLneX%2B63wYbAaHM2V2mQWDfZoMWOZAiBCCwd3oEZxl6XmPqoGyX8Cp9tT7sVbaclXDoF7LoLbPCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaa9M5tb9%2FRuRw9PgKtwDsQ2HB07UuMsdZ4TmVpw8KCF1Z0WaJMlRKd4QagVd0B%2BcsqyNmMdvr2wAJPILBmticOT6JeQwuyqlJo6MFap%2FOQoDA9Sl%2FnPT4wYU2jdhRYn%2BARFrD0ou0c49sbqhuqXcn8fijd3rt0LytJpiPkI047ZpbpAa%2FFyHWtiQHocwZdYLIgSEeJKCf9mP7SIQRqeeu4%2F%2BJl08no5yElGrmnKoigfzpPwKTx6611k5h6z8ecf7EDypECCDD0yer2eep2Iw4JGQNiVKyZQqSXjCCU55B1J9f4q0eMSuq%2BfV1SigxD5B%2FWNsIrHPw1EsWJUTkZVYg3tvNX85rMOWVwRhlTYBHUKCg2G1k%2FYXJHn36b6eNer4%2FCnHznhEhSlbaYMWa2QtJT7HQt43%2FkXetBO3vm40k6hTrNrjq3LlK7fgKsmBD67Hp%2B83%2BOIGnzj43GKWQWuy2P9aRW4E3SH3qqVHNjwi66cFefxjxBRCskZFWSnMavqvRhnfTSyozoWOFI9a0HO9dWjDYgF8qSNzLaD6%2B48ImMKhD1dVu%2Frfe%2FDJGxLdoEw583%2B%2FZ3tkQVf8LizyULyq8yDBl9R6md4M9uSeU00oZsKo8xp2hirzDSaJLG4Nq93bFWA9GQA0j0JBSHYw0I%2FEwQY6pgEk6zsJVclfIeo1S7VIimPdJsDgsPdDM1MpmbLYUT4lb%2FctygbeVr3zh4LPNAmXdAqMC08pCdqRVHSMRnEITh4csA2TCTZE04rMupfxLBy1MduHTnL0NPnKq3EfaqgAXaly0DCMRa8toKcn6VrmpFWRqXTTGBDWqYroc4eM8xoKiKyTVFJovMWvHKgZUoh7EZom%2BeCrf96scVN%2FhtiyZ17%2FgDSVZDhz&X-Amz-Signature=7fa3fe0edbae1915221acf2c5a9260ede359be7feb6ec2720b37b808e2ef2d50&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
