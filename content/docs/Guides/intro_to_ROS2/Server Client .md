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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623YHFAH4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICgT4AkEUt73%2BzgCrJO8VCJsTVWyKDIXTyUUEvacdAHgAiA0QtLXPm093QxYiX4M9BGKfzIlMm2k0EpKJnAfxDnMSyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMR6L1FLiEbAUoztsiKtwDOdS1oqejzE85Y9Hnd8OltwffzFRZk7N5Sa1ZtM%2FhiXSmmwKknRpxSq4vT3%2B2Ec65MHuwESN8AI3zwR7emIW6xZdOxpcs124n47YP3Ep9%2FkLH5keuecMs5ol%2BKyXFlTx2eIcssZfb%2Bi5m5ak1ijF09AmxR%2BcC3G9SGruqHp2IYfeDpSjMyqRu%2BaJFa4jDk1NmTsPqwLNoUilnIIfohZfmZDKgrC4S1BDNHmzINKmvxQJfnYxhmhT2V7s%2FtKyANkpI5oizQNkwHFfk4OG2kek3mu9Z2k0KFnD3tb2xvMXfUeMKol%2FdW0%2BHZZF%2BfawJ%2F9LzM6vLEhFMZS3XJXnB2VvdiAHu%2Fq3WK3QsYoDeI0TIJp3%2FsyZ%2FJJ13mlvTgdCCZ%2FpXT5ukWjbnxEDz82pYw%2Bq0GaCINuTw93t08eNwRgQC3HcO23DwRuc6OX4lFw2iKFmydDLIX8r7Ea6H7%2FDx%2FM6tqXBNir79EmZMC%2FMF%2ByAwbt6d26fzVLi7ulNNfufuE73p5RXNIFtbhNOCSdF%2B5X6SchB8f%2B%2FqPeLNADtdHq1r0R1hXuXrCTeiRCYPPw3hOh%2F6GMFh35hn9a%2F6%2BN3wsGVGBaFzqlN%2FmP0dGL3oeJHo8b0c78JHXi2fP9AimgAwhIDpwgY6pgHzGhc86ip3V%2Fg3O%2BBKlAJPKdagN7lxGwqrPOm6acrlwRRwfRWWwQUJcG8x%2BWJr2e5%2Bg5KOXjXJK%2FZO%2FIYXj7tuwbitqSI8mN9GPVukF7yvq%2B9gMAmUHhL%2BvEIib%2Bw%2FYSqXSbJURvEjdVDHkPS5qcCxLRxKMe9AK%2BcyCUa3m%2BzW7U3zRU7lh0w%2BsgVdrSBV9ojiww42spL%2BWtDR8lYq%2FN3nWH3H8RrP&X-Amz-Signature=3d9ba0093461b5fe5e42e84306f26534b3dd163f1ecfb58d9794cc7228c10df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623YHFAH4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICgT4AkEUt73%2BzgCrJO8VCJsTVWyKDIXTyUUEvacdAHgAiA0QtLXPm093QxYiX4M9BGKfzIlMm2k0EpKJnAfxDnMSyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMR6L1FLiEbAUoztsiKtwDOdS1oqejzE85Y9Hnd8OltwffzFRZk7N5Sa1ZtM%2FhiXSmmwKknRpxSq4vT3%2B2Ec65MHuwESN8AI3zwR7emIW6xZdOxpcs124n47YP3Ep9%2FkLH5keuecMs5ol%2BKyXFlTx2eIcssZfb%2Bi5m5ak1ijF09AmxR%2BcC3G9SGruqHp2IYfeDpSjMyqRu%2BaJFa4jDk1NmTsPqwLNoUilnIIfohZfmZDKgrC4S1BDNHmzINKmvxQJfnYxhmhT2V7s%2FtKyANkpI5oizQNkwHFfk4OG2kek3mu9Z2k0KFnD3tb2xvMXfUeMKol%2FdW0%2BHZZF%2BfawJ%2F9LzM6vLEhFMZS3XJXnB2VvdiAHu%2Fq3WK3QsYoDeI0TIJp3%2FsyZ%2FJJ13mlvTgdCCZ%2FpXT5ukWjbnxEDz82pYw%2Bq0GaCINuTw93t08eNwRgQC3HcO23DwRuc6OX4lFw2iKFmydDLIX8r7Ea6H7%2FDx%2FM6tqXBNir79EmZMC%2FMF%2ByAwbt6d26fzVLi7ulNNfufuE73p5RXNIFtbhNOCSdF%2B5X6SchB8f%2B%2FqPeLNADtdHq1r0R1hXuXrCTeiRCYPPw3hOh%2F6GMFh35hn9a%2F6%2BN3wsGVGBaFzqlN%2FmP0dGL3oeJHo8b0c78JHXi2fP9AimgAwhIDpwgY6pgHzGhc86ip3V%2Fg3O%2BBKlAJPKdagN7lxGwqrPOm6acrlwRRwfRWWwQUJcG8x%2BWJr2e5%2Bg5KOXjXJK%2FZO%2FIYXj7tuwbitqSI8mN9GPVukF7yvq%2B9gMAmUHhL%2BvEIib%2Bw%2FYSqXSbJURvEjdVDHkPS5qcCxLRxKMe9AK%2BcyCUa3m%2BzW7U3zRU7lh0w%2BsgVdrSBV9ojiww42spL%2BWtDR8lYq%2FN3nWH3H8RrP&X-Amz-Signature=316a6e393dacda5dffad8e0b1af3bb3ca7355254883c7d1aa54db7439f0d955b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623YHFAH4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICgT4AkEUt73%2BzgCrJO8VCJsTVWyKDIXTyUUEvacdAHgAiA0QtLXPm093QxYiX4M9BGKfzIlMm2k0EpKJnAfxDnMSyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMR6L1FLiEbAUoztsiKtwDOdS1oqejzE85Y9Hnd8OltwffzFRZk7N5Sa1ZtM%2FhiXSmmwKknRpxSq4vT3%2B2Ec65MHuwESN8AI3zwR7emIW6xZdOxpcs124n47YP3Ep9%2FkLH5keuecMs5ol%2BKyXFlTx2eIcssZfb%2Bi5m5ak1ijF09AmxR%2BcC3G9SGruqHp2IYfeDpSjMyqRu%2BaJFa4jDk1NmTsPqwLNoUilnIIfohZfmZDKgrC4S1BDNHmzINKmvxQJfnYxhmhT2V7s%2FtKyANkpI5oizQNkwHFfk4OG2kek3mu9Z2k0KFnD3tb2xvMXfUeMKol%2FdW0%2BHZZF%2BfawJ%2F9LzM6vLEhFMZS3XJXnB2VvdiAHu%2Fq3WK3QsYoDeI0TIJp3%2FsyZ%2FJJ13mlvTgdCCZ%2FpXT5ukWjbnxEDz82pYw%2Bq0GaCINuTw93t08eNwRgQC3HcO23DwRuc6OX4lFw2iKFmydDLIX8r7Ea6H7%2FDx%2FM6tqXBNir79EmZMC%2FMF%2ByAwbt6d26fzVLi7ulNNfufuE73p5RXNIFtbhNOCSdF%2B5X6SchB8f%2B%2FqPeLNADtdHq1r0R1hXuXrCTeiRCYPPw3hOh%2F6GMFh35hn9a%2F6%2BN3wsGVGBaFzqlN%2FmP0dGL3oeJHo8b0c78JHXi2fP9AimgAwhIDpwgY6pgHzGhc86ip3V%2Fg3O%2BBKlAJPKdagN7lxGwqrPOm6acrlwRRwfRWWwQUJcG8x%2BWJr2e5%2Bg5KOXjXJK%2FZO%2FIYXj7tuwbitqSI8mN9GPVukF7yvq%2B9gMAmUHhL%2BvEIib%2Bw%2FYSqXSbJURvEjdVDHkPS5qcCxLRxKMe9AK%2BcyCUa3m%2BzW7U3zRU7lh0w%2BsgVdrSBV9ojiww42spL%2BWtDR8lYq%2FN3nWH3H8RrP&X-Amz-Signature=beeaf6f8ec85dd41e44c44d035f528de72f65c7a15d7080e0a7b6c8fafe69e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623YHFAH4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICgT4AkEUt73%2BzgCrJO8VCJsTVWyKDIXTyUUEvacdAHgAiA0QtLXPm093QxYiX4M9BGKfzIlMm2k0EpKJnAfxDnMSyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMR6L1FLiEbAUoztsiKtwDOdS1oqejzE85Y9Hnd8OltwffzFRZk7N5Sa1ZtM%2FhiXSmmwKknRpxSq4vT3%2B2Ec65MHuwESN8AI3zwR7emIW6xZdOxpcs124n47YP3Ep9%2FkLH5keuecMs5ol%2BKyXFlTx2eIcssZfb%2Bi5m5ak1ijF09AmxR%2BcC3G9SGruqHp2IYfeDpSjMyqRu%2BaJFa4jDk1NmTsPqwLNoUilnIIfohZfmZDKgrC4S1BDNHmzINKmvxQJfnYxhmhT2V7s%2FtKyANkpI5oizQNkwHFfk4OG2kek3mu9Z2k0KFnD3tb2xvMXfUeMKol%2FdW0%2BHZZF%2BfawJ%2F9LzM6vLEhFMZS3XJXnB2VvdiAHu%2Fq3WK3QsYoDeI0TIJp3%2FsyZ%2FJJ13mlvTgdCCZ%2FpXT5ukWjbnxEDz82pYw%2Bq0GaCINuTw93t08eNwRgQC3HcO23DwRuc6OX4lFw2iKFmydDLIX8r7Ea6H7%2FDx%2FM6tqXBNir79EmZMC%2FMF%2ByAwbt6d26fzVLi7ulNNfufuE73p5RXNIFtbhNOCSdF%2B5X6SchB8f%2B%2FqPeLNADtdHq1r0R1hXuXrCTeiRCYPPw3hOh%2F6GMFh35hn9a%2F6%2BN3wsGVGBaFzqlN%2FmP0dGL3oeJHo8b0c78JHXi2fP9AimgAwhIDpwgY6pgHzGhc86ip3V%2Fg3O%2BBKlAJPKdagN7lxGwqrPOm6acrlwRRwfRWWwQUJcG8x%2BWJr2e5%2Bg5KOXjXJK%2FZO%2FIYXj7tuwbitqSI8mN9GPVukF7yvq%2B9gMAmUHhL%2BvEIib%2Bw%2FYSqXSbJURvEjdVDHkPS5qcCxLRxKMe9AK%2BcyCUa3m%2BzW7U3zRU7lh0w%2BsgVdrSBV9ojiww42spL%2BWtDR8lYq%2FN3nWH3H8RrP&X-Amz-Signature=7e42d103da526330e110b80614a0413b8d783036a4570c67e3a0f39d84ab5d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623YHFAH4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICgT4AkEUt73%2BzgCrJO8VCJsTVWyKDIXTyUUEvacdAHgAiA0QtLXPm093QxYiX4M9BGKfzIlMm2k0EpKJnAfxDnMSyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMR6L1FLiEbAUoztsiKtwDOdS1oqejzE85Y9Hnd8OltwffzFRZk7N5Sa1ZtM%2FhiXSmmwKknRpxSq4vT3%2B2Ec65MHuwESN8AI3zwR7emIW6xZdOxpcs124n47YP3Ep9%2FkLH5keuecMs5ol%2BKyXFlTx2eIcssZfb%2Bi5m5ak1ijF09AmxR%2BcC3G9SGruqHp2IYfeDpSjMyqRu%2BaJFa4jDk1NmTsPqwLNoUilnIIfohZfmZDKgrC4S1BDNHmzINKmvxQJfnYxhmhT2V7s%2FtKyANkpI5oizQNkwHFfk4OG2kek3mu9Z2k0KFnD3tb2xvMXfUeMKol%2FdW0%2BHZZF%2BfawJ%2F9LzM6vLEhFMZS3XJXnB2VvdiAHu%2Fq3WK3QsYoDeI0TIJp3%2FsyZ%2FJJ13mlvTgdCCZ%2FpXT5ukWjbnxEDz82pYw%2Bq0GaCINuTw93t08eNwRgQC3HcO23DwRuc6OX4lFw2iKFmydDLIX8r7Ea6H7%2FDx%2FM6tqXBNir79EmZMC%2FMF%2ByAwbt6d26fzVLi7ulNNfufuE73p5RXNIFtbhNOCSdF%2B5X6SchB8f%2B%2FqPeLNADtdHq1r0R1hXuXrCTeiRCYPPw3hOh%2F6GMFh35hn9a%2F6%2BN3wsGVGBaFzqlN%2FmP0dGL3oeJHo8b0c78JHXi2fP9AimgAwhIDpwgY6pgHzGhc86ip3V%2Fg3O%2BBKlAJPKdagN7lxGwqrPOm6acrlwRRwfRWWwQUJcG8x%2BWJr2e5%2Bg5KOXjXJK%2FZO%2FIYXj7tuwbitqSI8mN9GPVukF7yvq%2B9gMAmUHhL%2BvEIib%2Bw%2FYSqXSbJURvEjdVDHkPS5qcCxLRxKMe9AK%2BcyCUa3m%2BzW7U3zRU7lh0w%2BsgVdrSBV9ojiww42spL%2BWtDR8lYq%2FN3nWH3H8RrP&X-Amz-Signature=9c943a66e36d7b1f83aa831aab0b5066eee76d41fab0c81f8ce8e05ea2fab633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
