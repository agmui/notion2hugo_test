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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GC25ZGH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUe5bXb0IoUcP0i2otiN4IJPF0d7aOdVcuw%2BZfkTL66wIhALHHv137vStLqx5vKs968BjOPjRpstz%2FTL%2FeBg%2FOtyB7Kv8DCFsQABoMNjM3NDIzMTgzODA1IgxBPNCDHSCSPfiQH7Aq3AO4htvxJwuHE4RpQ%2B%2FUb9MgvdkcjA79y477rx72w%2BCSDfa1gB08XcyAL7eftgCOtvLrI03h%2BBkHeJ11VhneGrESjIgHtFp73b%2B%2BJpfu5qfd76rIkdmH75np31f8BH3QkfBwLQ8KO%2B3XdcyXXawk%2BAQGh2XxGm4QvOusIWlAjih%2BPud%2FBSANhj7t4KHd5c6HPV3N0hNoi5zjQ7JTM8luZ4zcMOz%2FPfkyPaxNibZksdyCw2Z4kQzbp19vGY1j1ZfZ3szxcjpaEHP%2FO2sweV%2FVw6rjJB7M2HFmygupvJ8%2BBmE45T2wgo4wPAKLsp3XntRI3m%2FxT77Hr%2BrjX6wgKEYVdrSDaB6khslkh3ZdBKr7c%2B0lfT9FBuCbDDdwlczke9rIoyd0XWgc2BVpPh%2F5ZQVRRDerW%2BMf9u5Oq6kngn4DWYa3hmvugbm6Gz565rIo59LyUjznUnU2dCJLogWwwz3KqXJv2E%2B0gs1LVBHLNff5%2Bo8g2Dl6HHfe8YOxK9516xzjSwnlXa2JHK0caPAImn7G8Fin9c5k62ikXHi0xX%2F3K%2FUeVIyENE8kRsQtOvSUOP%2FW6UW7tCQq3Ypp8zcwb4N%2F%2BgnDibQsMSISj%2F%2Fl1nTfZLTzr48ENUbUXap7iM1hADCb6ezABjqkAdxSvlSeo%2BtpzcHSEda0VVAxvln3LmWCmTz8ef0G%2B1UIVxN%2FOD9jvS1iu34ce7lz0xP2PoBpgm%2F%2FxL6D0gd7fyIqaB2y6WG5bdz3OB%2BEr9Ke9b%2Fz4fu%2FVZMRgsJrArxam0IXPV%2BxWKIFjT1miGD%2BWINF94RUkrj4D2UFWjrWVpzf8UcXHt7THfa2oX6osoGVORujUTHap23ys5q7DI5ES65LQcaC&X-Amz-Signature=77547e729f39e1bb2fe94fbd0366ef95984f9b4811f3de018c1f85d4053af233&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GC25ZGH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUe5bXb0IoUcP0i2otiN4IJPF0d7aOdVcuw%2BZfkTL66wIhALHHv137vStLqx5vKs968BjOPjRpstz%2FTL%2FeBg%2FOtyB7Kv8DCFsQABoMNjM3NDIzMTgzODA1IgxBPNCDHSCSPfiQH7Aq3AO4htvxJwuHE4RpQ%2B%2FUb9MgvdkcjA79y477rx72w%2BCSDfa1gB08XcyAL7eftgCOtvLrI03h%2BBkHeJ11VhneGrESjIgHtFp73b%2B%2BJpfu5qfd76rIkdmH75np31f8BH3QkfBwLQ8KO%2B3XdcyXXawk%2BAQGh2XxGm4QvOusIWlAjih%2BPud%2FBSANhj7t4KHd5c6HPV3N0hNoi5zjQ7JTM8luZ4zcMOz%2FPfkyPaxNibZksdyCw2Z4kQzbp19vGY1j1ZfZ3szxcjpaEHP%2FO2sweV%2FVw6rjJB7M2HFmygupvJ8%2BBmE45T2wgo4wPAKLsp3XntRI3m%2FxT77Hr%2BrjX6wgKEYVdrSDaB6khslkh3ZdBKr7c%2B0lfT9FBuCbDDdwlczke9rIoyd0XWgc2BVpPh%2F5ZQVRRDerW%2BMf9u5Oq6kngn4DWYa3hmvugbm6Gz565rIo59LyUjznUnU2dCJLogWwwz3KqXJv2E%2B0gs1LVBHLNff5%2Bo8g2Dl6HHfe8YOxK9516xzjSwnlXa2JHK0caPAImn7G8Fin9c5k62ikXHi0xX%2F3K%2FUeVIyENE8kRsQtOvSUOP%2FW6UW7tCQq3Ypp8zcwb4N%2F%2BgnDibQsMSISj%2F%2Fl1nTfZLTzr48ENUbUXap7iM1hADCb6ezABjqkAdxSvlSeo%2BtpzcHSEda0VVAxvln3LmWCmTz8ef0G%2B1UIVxN%2FOD9jvS1iu34ce7lz0xP2PoBpgm%2F%2FxL6D0gd7fyIqaB2y6WG5bdz3OB%2BEr9Ke9b%2Fz4fu%2FVZMRgsJrArxam0IXPV%2BxWKIFjT1miGD%2BWINF94RUkrj4D2UFWjrWVpzf8UcXHt7THfa2oX6osoGVORujUTHap23ys5q7DI5ES65LQcaC&X-Amz-Signature=d7357fa77a93308a8550e390d209d8b9fe140c077081be35e6e46a8bfd900b11&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GC25ZGH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUe5bXb0IoUcP0i2otiN4IJPF0d7aOdVcuw%2BZfkTL66wIhALHHv137vStLqx5vKs968BjOPjRpstz%2FTL%2FeBg%2FOtyB7Kv8DCFsQABoMNjM3NDIzMTgzODA1IgxBPNCDHSCSPfiQH7Aq3AO4htvxJwuHE4RpQ%2B%2FUb9MgvdkcjA79y477rx72w%2BCSDfa1gB08XcyAL7eftgCOtvLrI03h%2BBkHeJ11VhneGrESjIgHtFp73b%2B%2BJpfu5qfd76rIkdmH75np31f8BH3QkfBwLQ8KO%2B3XdcyXXawk%2BAQGh2XxGm4QvOusIWlAjih%2BPud%2FBSANhj7t4KHd5c6HPV3N0hNoi5zjQ7JTM8luZ4zcMOz%2FPfkyPaxNibZksdyCw2Z4kQzbp19vGY1j1ZfZ3szxcjpaEHP%2FO2sweV%2FVw6rjJB7M2HFmygupvJ8%2BBmE45T2wgo4wPAKLsp3XntRI3m%2FxT77Hr%2BrjX6wgKEYVdrSDaB6khslkh3ZdBKr7c%2B0lfT9FBuCbDDdwlczke9rIoyd0XWgc2BVpPh%2F5ZQVRRDerW%2BMf9u5Oq6kngn4DWYa3hmvugbm6Gz565rIo59LyUjznUnU2dCJLogWwwz3KqXJv2E%2B0gs1LVBHLNff5%2Bo8g2Dl6HHfe8YOxK9516xzjSwnlXa2JHK0caPAImn7G8Fin9c5k62ikXHi0xX%2F3K%2FUeVIyENE8kRsQtOvSUOP%2FW6UW7tCQq3Ypp8zcwb4N%2F%2BgnDibQsMSISj%2F%2Fl1nTfZLTzr48ENUbUXap7iM1hADCb6ezABjqkAdxSvlSeo%2BtpzcHSEda0VVAxvln3LmWCmTz8ef0G%2B1UIVxN%2FOD9jvS1iu34ce7lz0xP2PoBpgm%2F%2FxL6D0gd7fyIqaB2y6WG5bdz3OB%2BEr9Ke9b%2Fz4fu%2FVZMRgsJrArxam0IXPV%2BxWKIFjT1miGD%2BWINF94RUkrj4D2UFWjrWVpzf8UcXHt7THfa2oX6osoGVORujUTHap23ys5q7DI5ES65LQcaC&X-Amz-Signature=b981ba956c8f1f551e4aa634bc72fda29365a13c3b609cce89b5dda4d870b71b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GC25ZGH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUe5bXb0IoUcP0i2otiN4IJPF0d7aOdVcuw%2BZfkTL66wIhALHHv137vStLqx5vKs968BjOPjRpstz%2FTL%2FeBg%2FOtyB7Kv8DCFsQABoMNjM3NDIzMTgzODA1IgxBPNCDHSCSPfiQH7Aq3AO4htvxJwuHE4RpQ%2B%2FUb9MgvdkcjA79y477rx72w%2BCSDfa1gB08XcyAL7eftgCOtvLrI03h%2BBkHeJ11VhneGrESjIgHtFp73b%2B%2BJpfu5qfd76rIkdmH75np31f8BH3QkfBwLQ8KO%2B3XdcyXXawk%2BAQGh2XxGm4QvOusIWlAjih%2BPud%2FBSANhj7t4KHd5c6HPV3N0hNoi5zjQ7JTM8luZ4zcMOz%2FPfkyPaxNibZksdyCw2Z4kQzbp19vGY1j1ZfZ3szxcjpaEHP%2FO2sweV%2FVw6rjJB7M2HFmygupvJ8%2BBmE45T2wgo4wPAKLsp3XntRI3m%2FxT77Hr%2BrjX6wgKEYVdrSDaB6khslkh3ZdBKr7c%2B0lfT9FBuCbDDdwlczke9rIoyd0XWgc2BVpPh%2F5ZQVRRDerW%2BMf9u5Oq6kngn4DWYa3hmvugbm6Gz565rIo59LyUjznUnU2dCJLogWwwz3KqXJv2E%2B0gs1LVBHLNff5%2Bo8g2Dl6HHfe8YOxK9516xzjSwnlXa2JHK0caPAImn7G8Fin9c5k62ikXHi0xX%2F3K%2FUeVIyENE8kRsQtOvSUOP%2FW6UW7tCQq3Ypp8zcwb4N%2F%2BgnDibQsMSISj%2F%2Fl1nTfZLTzr48ENUbUXap7iM1hADCb6ezABjqkAdxSvlSeo%2BtpzcHSEda0VVAxvln3LmWCmTz8ef0G%2B1UIVxN%2FOD9jvS1iu34ce7lz0xP2PoBpgm%2F%2FxL6D0gd7fyIqaB2y6WG5bdz3OB%2BEr9Ke9b%2Fz4fu%2FVZMRgsJrArxam0IXPV%2BxWKIFjT1miGD%2BWINF94RUkrj4D2UFWjrWVpzf8UcXHt7THfa2oX6osoGVORujUTHap23ys5q7DI5ES65LQcaC&X-Amz-Signature=cc7342235e9826f80dd38c165f14b95a4495e06c1f8530c7fbac49a5982e0de4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GC25ZGH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUe5bXb0IoUcP0i2otiN4IJPF0d7aOdVcuw%2BZfkTL66wIhALHHv137vStLqx5vKs968BjOPjRpstz%2FTL%2FeBg%2FOtyB7Kv8DCFsQABoMNjM3NDIzMTgzODA1IgxBPNCDHSCSPfiQH7Aq3AO4htvxJwuHE4RpQ%2B%2FUb9MgvdkcjA79y477rx72w%2BCSDfa1gB08XcyAL7eftgCOtvLrI03h%2BBkHeJ11VhneGrESjIgHtFp73b%2B%2BJpfu5qfd76rIkdmH75np31f8BH3QkfBwLQ8KO%2B3XdcyXXawk%2BAQGh2XxGm4QvOusIWlAjih%2BPud%2FBSANhj7t4KHd5c6HPV3N0hNoi5zjQ7JTM8luZ4zcMOz%2FPfkyPaxNibZksdyCw2Z4kQzbp19vGY1j1ZfZ3szxcjpaEHP%2FO2sweV%2FVw6rjJB7M2HFmygupvJ8%2BBmE45T2wgo4wPAKLsp3XntRI3m%2FxT77Hr%2BrjX6wgKEYVdrSDaB6khslkh3ZdBKr7c%2B0lfT9FBuCbDDdwlczke9rIoyd0XWgc2BVpPh%2F5ZQVRRDerW%2BMf9u5Oq6kngn4DWYa3hmvugbm6Gz565rIo59LyUjznUnU2dCJLogWwwz3KqXJv2E%2B0gs1LVBHLNff5%2Bo8g2Dl6HHfe8YOxK9516xzjSwnlXa2JHK0caPAImn7G8Fin9c5k62ikXHi0xX%2F3K%2FUeVIyENE8kRsQtOvSUOP%2FW6UW7tCQq3Ypp8zcwb4N%2F%2BgnDibQsMSISj%2F%2Fl1nTfZLTzr48ENUbUXap7iM1hADCb6ezABjqkAdxSvlSeo%2BtpzcHSEda0VVAxvln3LmWCmTz8ef0G%2B1UIVxN%2FOD9jvS1iu34ce7lz0xP2PoBpgm%2F%2FxL6D0gd7fyIqaB2y6WG5bdz3OB%2BEr9Ke9b%2Fz4fu%2FVZMRgsJrArxam0IXPV%2BxWKIFjT1miGD%2BWINF94RUkrj4D2UFWjrWVpzf8UcXHt7THfa2oX6osoGVORujUTHap23ys5q7DI5ES65LQcaC&X-Amz-Signature=d998e204ce017d6c053cc84b4b4b26b46122b94e9ceb52539acd3bffd263d30e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
