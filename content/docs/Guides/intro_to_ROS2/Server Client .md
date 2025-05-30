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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMML7MKJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkVDWSoEBpUctQyNKdRHXBs2v08brIT39gRsev2T4egIgSHc60atNNiFWUasAtDheDOWhR7u0xGHADwTi10kt9EkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv%2BMeI7PGyrjqZdnircA%2BsgBMMWNN%2B2PLRP29sAZKdLxd9tNAyxxW%2Bo3ry0jKWBrTF5qr8HoywPZQLf1aeefMgxHMlxEnKMl88e5NsDzps%2BivBgVamPPtWUbvjLnMe5bu6RDmi22S5vFEksalgdUpC0mmO%2Fu2uo6QPkhXLFjNQN7Hj3l5dD36O0Ys7Kqe7EcKL6E6g3qXlDgPHCW9tKb2O8mm%2BdpxGs1Jx3qGKW1PmtMHmJsxv7Pk3Hy0z7mEhlm2JUtnjcFcTWxaBZJr%2FHJ4dEupLpfDyqhN8Nb9UUuIjtZyGf3bnLzoCn8hzlFxv6pzdI7toaeZsFiaE34KH6MCNQx9%2FFPQPVnoKjUttv3VEvMbxwW%2B%2B1h70yM1cyeXu12bQHautIWy9r7zl%2BRH3V4kAepU4J0%2FBMIVWTW0VSfd68HWWyRKawzLUu9FVWnQ2H4oa1dEixemA%2B1br1LTejUXrDgT8xFkmJ5Xn%2BSlGCXDvaOkLl%2B91cYjfoqsBgb52mzEbhCgzyP1%2BXaeqB6q4WQJWew5PL1zuos4EAqs2UhgXTEOj7lMy0ZWsETPqQHTBZx1TiE121kTy3e34IEgWNVafOj3nv6VJ8476aLTnhYo3w8lbr9a2UvCwjnhzZFSRvdnAXqNTN82XvX6OHMMby5sEGOqUBaUc6qrZlMy13dY4Q%2Bl1iwobM0SkqDggv7hTFN%2FHQXKBUbUb5ccSGhRJwYD1eW%2B295To0eLDYvz%2BmTFUJB3nXjFY8fICCs0f8Oi%2FJbyEe8bp3%2BSJWmVH2mjChMdcxAEiftjTFIJvDiuSlgYhc81dMzpmhm7h9uUfalrXVjwXfnxYd3y6HZx%2FyfmlXQoD%2B%2FwvWAxBwKBhbhjWPH8n8HzwBBftBsf37&X-Amz-Signature=b8d6c37a79f3d6ba2400ff64d7d77068f9b9c8db943e89eaf17cb3e02312eecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMML7MKJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkVDWSoEBpUctQyNKdRHXBs2v08brIT39gRsev2T4egIgSHc60atNNiFWUasAtDheDOWhR7u0xGHADwTi10kt9EkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv%2BMeI7PGyrjqZdnircA%2BsgBMMWNN%2B2PLRP29sAZKdLxd9tNAyxxW%2Bo3ry0jKWBrTF5qr8HoywPZQLf1aeefMgxHMlxEnKMl88e5NsDzps%2BivBgVamPPtWUbvjLnMe5bu6RDmi22S5vFEksalgdUpC0mmO%2Fu2uo6QPkhXLFjNQN7Hj3l5dD36O0Ys7Kqe7EcKL6E6g3qXlDgPHCW9tKb2O8mm%2BdpxGs1Jx3qGKW1PmtMHmJsxv7Pk3Hy0z7mEhlm2JUtnjcFcTWxaBZJr%2FHJ4dEupLpfDyqhN8Nb9UUuIjtZyGf3bnLzoCn8hzlFxv6pzdI7toaeZsFiaE34KH6MCNQx9%2FFPQPVnoKjUttv3VEvMbxwW%2B%2B1h70yM1cyeXu12bQHautIWy9r7zl%2BRH3V4kAepU4J0%2FBMIVWTW0VSfd68HWWyRKawzLUu9FVWnQ2H4oa1dEixemA%2B1br1LTejUXrDgT8xFkmJ5Xn%2BSlGCXDvaOkLl%2B91cYjfoqsBgb52mzEbhCgzyP1%2BXaeqB6q4WQJWew5PL1zuos4EAqs2UhgXTEOj7lMy0ZWsETPqQHTBZx1TiE121kTy3e34IEgWNVafOj3nv6VJ8476aLTnhYo3w8lbr9a2UvCwjnhzZFSRvdnAXqNTN82XvX6OHMMby5sEGOqUBaUc6qrZlMy13dY4Q%2Bl1iwobM0SkqDggv7hTFN%2FHQXKBUbUb5ccSGhRJwYD1eW%2B295To0eLDYvz%2BmTFUJB3nXjFY8fICCs0f8Oi%2FJbyEe8bp3%2BSJWmVH2mjChMdcxAEiftjTFIJvDiuSlgYhc81dMzpmhm7h9uUfalrXVjwXfnxYd3y6HZx%2FyfmlXQoD%2B%2FwvWAxBwKBhbhjWPH8n8HzwBBftBsf37&X-Amz-Signature=73d69bbb34df6f0ebccdce846483842cd88d78194fc4261b14e4c86b4601e95d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMML7MKJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkVDWSoEBpUctQyNKdRHXBs2v08brIT39gRsev2T4egIgSHc60atNNiFWUasAtDheDOWhR7u0xGHADwTi10kt9EkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv%2BMeI7PGyrjqZdnircA%2BsgBMMWNN%2B2PLRP29sAZKdLxd9tNAyxxW%2Bo3ry0jKWBrTF5qr8HoywPZQLf1aeefMgxHMlxEnKMl88e5NsDzps%2BivBgVamPPtWUbvjLnMe5bu6RDmi22S5vFEksalgdUpC0mmO%2Fu2uo6QPkhXLFjNQN7Hj3l5dD36O0Ys7Kqe7EcKL6E6g3qXlDgPHCW9tKb2O8mm%2BdpxGs1Jx3qGKW1PmtMHmJsxv7Pk3Hy0z7mEhlm2JUtnjcFcTWxaBZJr%2FHJ4dEupLpfDyqhN8Nb9UUuIjtZyGf3bnLzoCn8hzlFxv6pzdI7toaeZsFiaE34KH6MCNQx9%2FFPQPVnoKjUttv3VEvMbxwW%2B%2B1h70yM1cyeXu12bQHautIWy9r7zl%2BRH3V4kAepU4J0%2FBMIVWTW0VSfd68HWWyRKawzLUu9FVWnQ2H4oa1dEixemA%2B1br1LTejUXrDgT8xFkmJ5Xn%2BSlGCXDvaOkLl%2B91cYjfoqsBgb52mzEbhCgzyP1%2BXaeqB6q4WQJWew5PL1zuos4EAqs2UhgXTEOj7lMy0ZWsETPqQHTBZx1TiE121kTy3e34IEgWNVafOj3nv6VJ8476aLTnhYo3w8lbr9a2UvCwjnhzZFSRvdnAXqNTN82XvX6OHMMby5sEGOqUBaUc6qrZlMy13dY4Q%2Bl1iwobM0SkqDggv7hTFN%2FHQXKBUbUb5ccSGhRJwYD1eW%2B295To0eLDYvz%2BmTFUJB3nXjFY8fICCs0f8Oi%2FJbyEe8bp3%2BSJWmVH2mjChMdcxAEiftjTFIJvDiuSlgYhc81dMzpmhm7h9uUfalrXVjwXfnxYd3y6HZx%2FyfmlXQoD%2B%2FwvWAxBwKBhbhjWPH8n8HzwBBftBsf37&X-Amz-Signature=605033a9f2e0029756774dc5605758ce870d6aac33d37a78856a9d05fd972b51&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMML7MKJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkVDWSoEBpUctQyNKdRHXBs2v08brIT39gRsev2T4egIgSHc60atNNiFWUasAtDheDOWhR7u0xGHADwTi10kt9EkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv%2BMeI7PGyrjqZdnircA%2BsgBMMWNN%2B2PLRP29sAZKdLxd9tNAyxxW%2Bo3ry0jKWBrTF5qr8HoywPZQLf1aeefMgxHMlxEnKMl88e5NsDzps%2BivBgVamPPtWUbvjLnMe5bu6RDmi22S5vFEksalgdUpC0mmO%2Fu2uo6QPkhXLFjNQN7Hj3l5dD36O0Ys7Kqe7EcKL6E6g3qXlDgPHCW9tKb2O8mm%2BdpxGs1Jx3qGKW1PmtMHmJsxv7Pk3Hy0z7mEhlm2JUtnjcFcTWxaBZJr%2FHJ4dEupLpfDyqhN8Nb9UUuIjtZyGf3bnLzoCn8hzlFxv6pzdI7toaeZsFiaE34KH6MCNQx9%2FFPQPVnoKjUttv3VEvMbxwW%2B%2B1h70yM1cyeXu12bQHautIWy9r7zl%2BRH3V4kAepU4J0%2FBMIVWTW0VSfd68HWWyRKawzLUu9FVWnQ2H4oa1dEixemA%2B1br1LTejUXrDgT8xFkmJ5Xn%2BSlGCXDvaOkLl%2B91cYjfoqsBgb52mzEbhCgzyP1%2BXaeqB6q4WQJWew5PL1zuos4EAqs2UhgXTEOj7lMy0ZWsETPqQHTBZx1TiE121kTy3e34IEgWNVafOj3nv6VJ8476aLTnhYo3w8lbr9a2UvCwjnhzZFSRvdnAXqNTN82XvX6OHMMby5sEGOqUBaUc6qrZlMy13dY4Q%2Bl1iwobM0SkqDggv7hTFN%2FHQXKBUbUb5ccSGhRJwYD1eW%2B295To0eLDYvz%2BmTFUJB3nXjFY8fICCs0f8Oi%2FJbyEe8bp3%2BSJWmVH2mjChMdcxAEiftjTFIJvDiuSlgYhc81dMzpmhm7h9uUfalrXVjwXfnxYd3y6HZx%2FyfmlXQoD%2B%2FwvWAxBwKBhbhjWPH8n8HzwBBftBsf37&X-Amz-Signature=edb205ad4ee1064bfc1458dc12e4c2317955a982bd9739653faeb15e06e54af8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMML7MKJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkVDWSoEBpUctQyNKdRHXBs2v08brIT39gRsev2T4egIgSHc60atNNiFWUasAtDheDOWhR7u0xGHADwTi10kt9EkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv%2BMeI7PGyrjqZdnircA%2BsgBMMWNN%2B2PLRP29sAZKdLxd9tNAyxxW%2Bo3ry0jKWBrTF5qr8HoywPZQLf1aeefMgxHMlxEnKMl88e5NsDzps%2BivBgVamPPtWUbvjLnMe5bu6RDmi22S5vFEksalgdUpC0mmO%2Fu2uo6QPkhXLFjNQN7Hj3l5dD36O0Ys7Kqe7EcKL6E6g3qXlDgPHCW9tKb2O8mm%2BdpxGs1Jx3qGKW1PmtMHmJsxv7Pk3Hy0z7mEhlm2JUtnjcFcTWxaBZJr%2FHJ4dEupLpfDyqhN8Nb9UUuIjtZyGf3bnLzoCn8hzlFxv6pzdI7toaeZsFiaE34KH6MCNQx9%2FFPQPVnoKjUttv3VEvMbxwW%2B%2B1h70yM1cyeXu12bQHautIWy9r7zl%2BRH3V4kAepU4J0%2FBMIVWTW0VSfd68HWWyRKawzLUu9FVWnQ2H4oa1dEixemA%2B1br1LTejUXrDgT8xFkmJ5Xn%2BSlGCXDvaOkLl%2B91cYjfoqsBgb52mzEbhCgzyP1%2BXaeqB6q4WQJWew5PL1zuos4EAqs2UhgXTEOj7lMy0ZWsETPqQHTBZx1TiE121kTy3e34IEgWNVafOj3nv6VJ8476aLTnhYo3w8lbr9a2UvCwjnhzZFSRvdnAXqNTN82XvX6OHMMby5sEGOqUBaUc6qrZlMy13dY4Q%2Bl1iwobM0SkqDggv7hTFN%2FHQXKBUbUb5ccSGhRJwYD1eW%2B295To0eLDYvz%2BmTFUJB3nXjFY8fICCs0f8Oi%2FJbyEe8bp3%2BSJWmVH2mjChMdcxAEiftjTFIJvDiuSlgYhc81dMzpmhm7h9uUfalrXVjwXfnxYd3y6HZx%2FyfmlXQoD%2B%2FwvWAxBwKBhbhjWPH8n8HzwBBftBsf37&X-Amz-Signature=2452ea4283d2c5d06e2fb99109520876c74153c42172e7dc8b39b15d3b83b48c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
