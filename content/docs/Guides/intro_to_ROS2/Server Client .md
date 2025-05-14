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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK5X4A5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEQ7FrZ5%2BG0aUgPX3puG0rqs1%2FGabeqe7n8r6f6iovDEAiBiui0%2FGoiS%2BOApcOcp6llAo%2FUAAN1AewwmrE%2B1VfkG3Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5Q%2FkbrUreJkTBvknKtwD%2FZRqNrZwLN0Z8xqw8h6Mb6F6YXm88vv9fuaqt53ODwnxXTFbQHPyemqMsiOiO8OB3w7uAsaNX%2Ft9FYS4EHCJECRZx52%2FIVuSCKwyN32v1lir%2BBS%2BjU%2Byw4nheoEGl6lGw5bMkxuGUWJlZ6FurJFx%2Bk15i4DcRXJo26uAVGxhtf7YjxDJ0urLo5pLtTfdFgUnDqVnjUGvPjgmmOZVJ30t4Sxc9wZXMlPHg%2FkUOMdFIwlRlBTa7X5ZOcK8CjW1h3BLIq4NINad12WUEJm87RxTZy57cnchSgVd2UfWGBkwBRH8X6DYr7e21%2FPvbaVGmxhCKFr968m7gkj65ajGiAlBcGlCWsAJ00uEspLArgV5wcEfmtDciKkWidae5iHH6070mTOKPrs%2FAg2cDOLjJZTjny6v2926lDBjEgVlNhp%2BEncCw1gP0VrHpc8t5rVn9ymlWQjzztz0fNQlKlKYn1l%2Fs6LNTnogAeVZgldTtcKmjSP1BwTtlYB4fOpnqnV1eAV8Of8tPV0jagsVB8jl0sWWiffjywQ9OegCW6FiZEEj6TJdy1MX7jJRPEaxKm5FYNBn0XK2gu7mEhWdEtoxWppObw81QXflF4uLPBTIEA489ZWnkH8ZjANVfPiTjgMwqs%2BTwQY6pgGOjRnxL1In7SSCm5eXifmURAJqbDKiFFx8LoA7zGQdHx0M58zqEoZziwrGx%2F19V%2BHTKoA4MuSPDkD1pS2s1AXkfOwfcQqhS0i1LgPa9Bnc1kzjq7kxG9UXC%2FQL8joHmps2AaYHFCCVrXmBL1JoS%2Bh0tYZUYsf2j6DwhEvugUkt7yl5lcaHbHkNPAvivF7x%2F4yJt3UlfBjhLCp81X0r6irtpcMBRyUU&X-Amz-Signature=1086188342d01b04c284c85d3d19f75797cf7804ac1e79f838c7c30583afa5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK5X4A5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEQ7FrZ5%2BG0aUgPX3puG0rqs1%2FGabeqe7n8r6f6iovDEAiBiui0%2FGoiS%2BOApcOcp6llAo%2FUAAN1AewwmrE%2B1VfkG3Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5Q%2FkbrUreJkTBvknKtwD%2FZRqNrZwLN0Z8xqw8h6Mb6F6YXm88vv9fuaqt53ODwnxXTFbQHPyemqMsiOiO8OB3w7uAsaNX%2Ft9FYS4EHCJECRZx52%2FIVuSCKwyN32v1lir%2BBS%2BjU%2Byw4nheoEGl6lGw5bMkxuGUWJlZ6FurJFx%2Bk15i4DcRXJo26uAVGxhtf7YjxDJ0urLo5pLtTfdFgUnDqVnjUGvPjgmmOZVJ30t4Sxc9wZXMlPHg%2FkUOMdFIwlRlBTa7X5ZOcK8CjW1h3BLIq4NINad12WUEJm87RxTZy57cnchSgVd2UfWGBkwBRH8X6DYr7e21%2FPvbaVGmxhCKFr968m7gkj65ajGiAlBcGlCWsAJ00uEspLArgV5wcEfmtDciKkWidae5iHH6070mTOKPrs%2FAg2cDOLjJZTjny6v2926lDBjEgVlNhp%2BEncCw1gP0VrHpc8t5rVn9ymlWQjzztz0fNQlKlKYn1l%2Fs6LNTnogAeVZgldTtcKmjSP1BwTtlYB4fOpnqnV1eAV8Of8tPV0jagsVB8jl0sWWiffjywQ9OegCW6FiZEEj6TJdy1MX7jJRPEaxKm5FYNBn0XK2gu7mEhWdEtoxWppObw81QXflF4uLPBTIEA489ZWnkH8ZjANVfPiTjgMwqs%2BTwQY6pgGOjRnxL1In7SSCm5eXifmURAJqbDKiFFx8LoA7zGQdHx0M58zqEoZziwrGx%2F19V%2BHTKoA4MuSPDkD1pS2s1AXkfOwfcQqhS0i1LgPa9Bnc1kzjq7kxG9UXC%2FQL8joHmps2AaYHFCCVrXmBL1JoS%2Bh0tYZUYsf2j6DwhEvugUkt7yl5lcaHbHkNPAvivF7x%2F4yJt3UlfBjhLCp81X0r6irtpcMBRyUU&X-Amz-Signature=8a2c6925a5c682c1e35e8c023fd44bc4ab2c30843769f0fed357332908f6b5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK5X4A5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEQ7FrZ5%2BG0aUgPX3puG0rqs1%2FGabeqe7n8r6f6iovDEAiBiui0%2FGoiS%2BOApcOcp6llAo%2FUAAN1AewwmrE%2B1VfkG3Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5Q%2FkbrUreJkTBvknKtwD%2FZRqNrZwLN0Z8xqw8h6Mb6F6YXm88vv9fuaqt53ODwnxXTFbQHPyemqMsiOiO8OB3w7uAsaNX%2Ft9FYS4EHCJECRZx52%2FIVuSCKwyN32v1lir%2BBS%2BjU%2Byw4nheoEGl6lGw5bMkxuGUWJlZ6FurJFx%2Bk15i4DcRXJo26uAVGxhtf7YjxDJ0urLo5pLtTfdFgUnDqVnjUGvPjgmmOZVJ30t4Sxc9wZXMlPHg%2FkUOMdFIwlRlBTa7X5ZOcK8CjW1h3BLIq4NINad12WUEJm87RxTZy57cnchSgVd2UfWGBkwBRH8X6DYr7e21%2FPvbaVGmxhCKFr968m7gkj65ajGiAlBcGlCWsAJ00uEspLArgV5wcEfmtDciKkWidae5iHH6070mTOKPrs%2FAg2cDOLjJZTjny6v2926lDBjEgVlNhp%2BEncCw1gP0VrHpc8t5rVn9ymlWQjzztz0fNQlKlKYn1l%2Fs6LNTnogAeVZgldTtcKmjSP1BwTtlYB4fOpnqnV1eAV8Of8tPV0jagsVB8jl0sWWiffjywQ9OegCW6FiZEEj6TJdy1MX7jJRPEaxKm5FYNBn0XK2gu7mEhWdEtoxWppObw81QXflF4uLPBTIEA489ZWnkH8ZjANVfPiTjgMwqs%2BTwQY6pgGOjRnxL1In7SSCm5eXifmURAJqbDKiFFx8LoA7zGQdHx0M58zqEoZziwrGx%2F19V%2BHTKoA4MuSPDkD1pS2s1AXkfOwfcQqhS0i1LgPa9Bnc1kzjq7kxG9UXC%2FQL8joHmps2AaYHFCCVrXmBL1JoS%2Bh0tYZUYsf2j6DwhEvugUkt7yl5lcaHbHkNPAvivF7x%2F4yJt3UlfBjhLCp81X0r6irtpcMBRyUU&X-Amz-Signature=d0721054c694cedd5713e9ef849570ad1ace39e8dc7a3e61cc1cbb48a263c485&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK5X4A5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEQ7FrZ5%2BG0aUgPX3puG0rqs1%2FGabeqe7n8r6f6iovDEAiBiui0%2FGoiS%2BOApcOcp6llAo%2FUAAN1AewwmrE%2B1VfkG3Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5Q%2FkbrUreJkTBvknKtwD%2FZRqNrZwLN0Z8xqw8h6Mb6F6YXm88vv9fuaqt53ODwnxXTFbQHPyemqMsiOiO8OB3w7uAsaNX%2Ft9FYS4EHCJECRZx52%2FIVuSCKwyN32v1lir%2BBS%2BjU%2Byw4nheoEGl6lGw5bMkxuGUWJlZ6FurJFx%2Bk15i4DcRXJo26uAVGxhtf7YjxDJ0urLo5pLtTfdFgUnDqVnjUGvPjgmmOZVJ30t4Sxc9wZXMlPHg%2FkUOMdFIwlRlBTa7X5ZOcK8CjW1h3BLIq4NINad12WUEJm87RxTZy57cnchSgVd2UfWGBkwBRH8X6DYr7e21%2FPvbaVGmxhCKFr968m7gkj65ajGiAlBcGlCWsAJ00uEspLArgV5wcEfmtDciKkWidae5iHH6070mTOKPrs%2FAg2cDOLjJZTjny6v2926lDBjEgVlNhp%2BEncCw1gP0VrHpc8t5rVn9ymlWQjzztz0fNQlKlKYn1l%2Fs6LNTnogAeVZgldTtcKmjSP1BwTtlYB4fOpnqnV1eAV8Of8tPV0jagsVB8jl0sWWiffjywQ9OegCW6FiZEEj6TJdy1MX7jJRPEaxKm5FYNBn0XK2gu7mEhWdEtoxWppObw81QXflF4uLPBTIEA489ZWnkH8ZjANVfPiTjgMwqs%2BTwQY6pgGOjRnxL1In7SSCm5eXifmURAJqbDKiFFx8LoA7zGQdHx0M58zqEoZziwrGx%2F19V%2BHTKoA4MuSPDkD1pS2s1AXkfOwfcQqhS0i1LgPa9Bnc1kzjq7kxG9UXC%2FQL8joHmps2AaYHFCCVrXmBL1JoS%2Bh0tYZUYsf2j6DwhEvugUkt7yl5lcaHbHkNPAvivF7x%2F4yJt3UlfBjhLCp81X0r6irtpcMBRyUU&X-Amz-Signature=cf509f975c0bb33feee8d6dcf1f79fd53c5128d798b0e231942be12af413d012&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK5X4A5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEQ7FrZ5%2BG0aUgPX3puG0rqs1%2FGabeqe7n8r6f6iovDEAiBiui0%2FGoiS%2BOApcOcp6llAo%2FUAAN1AewwmrE%2B1VfkG3Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5Q%2FkbrUreJkTBvknKtwD%2FZRqNrZwLN0Z8xqw8h6Mb6F6YXm88vv9fuaqt53ODwnxXTFbQHPyemqMsiOiO8OB3w7uAsaNX%2Ft9FYS4EHCJECRZx52%2FIVuSCKwyN32v1lir%2BBS%2BjU%2Byw4nheoEGl6lGw5bMkxuGUWJlZ6FurJFx%2Bk15i4DcRXJo26uAVGxhtf7YjxDJ0urLo5pLtTfdFgUnDqVnjUGvPjgmmOZVJ30t4Sxc9wZXMlPHg%2FkUOMdFIwlRlBTa7X5ZOcK8CjW1h3BLIq4NINad12WUEJm87RxTZy57cnchSgVd2UfWGBkwBRH8X6DYr7e21%2FPvbaVGmxhCKFr968m7gkj65ajGiAlBcGlCWsAJ00uEspLArgV5wcEfmtDciKkWidae5iHH6070mTOKPrs%2FAg2cDOLjJZTjny6v2926lDBjEgVlNhp%2BEncCw1gP0VrHpc8t5rVn9ymlWQjzztz0fNQlKlKYn1l%2Fs6LNTnogAeVZgldTtcKmjSP1BwTtlYB4fOpnqnV1eAV8Of8tPV0jagsVB8jl0sWWiffjywQ9OegCW6FiZEEj6TJdy1MX7jJRPEaxKm5FYNBn0XK2gu7mEhWdEtoxWppObw81QXflF4uLPBTIEA489ZWnkH8ZjANVfPiTjgMwqs%2BTwQY6pgGOjRnxL1In7SSCm5eXifmURAJqbDKiFFx8LoA7zGQdHx0M58zqEoZziwrGx%2F19V%2BHTKoA4MuSPDkD1pS2s1AXkfOwfcQqhS0i1LgPa9Bnc1kzjq7kxG9UXC%2FQL8joHmps2AaYHFCCVrXmBL1JoS%2Bh0tYZUYsf2j6DwhEvugUkt7yl5lcaHbHkNPAvivF7x%2F4yJt3UlfBjhLCp81X0r6irtpcMBRyUU&X-Amz-Signature=900be70ad3dd13b953da0d896dcd4a5da15085b7051a0a9bb47b570e09dd4fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
