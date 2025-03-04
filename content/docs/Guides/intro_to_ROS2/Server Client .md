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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNBWDK6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8QrvyqjIXXPPQgpi%2FrRQO1gXiv9DVcNoPCiwJhIBlFgIgco%2F%2FfcOy0iKH8PkYr08JkGfT%2BCC3sFhrnPB6gWLSdjYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQyOxJiUPlovB4w5SrcAy%2FKj4QDTXHbk9tyGqAZfN2pmqoNHdeSU8C7FIu7MBEIFPq4QdKilLEi9WTvXXNVysMzCQri32ubCLmuHlHo9J1sy8%2BTx5uQD22bQ8epwa9jALWW4zrCsOdrlm6JgzgWFg3XevwEcs4INB1ucVFHmmgoOJQYRaG73SIo5QVg1JNXOhBWlDvrZB1V2TBMu2Czs3RrgO78AjpPKTHEAq13hGGkhuRFfhx2KsF7xYSf%2B7%2Bt5G3VeQbJ1YPHldmJj948Ss9sqXNE1u9nof6SY%2BcCW4QJQKwHuXl055fASaSE4C8ADsbcknEi84DMnLyM52Ea4mk7phnG4w%2FtH1A17OZDy%2BTRLiWlY4I3iEfF%2FNvq1xftBdZWZBRsfMThgGPU9XY%2FfE0CIMaZBCrIubKaNSJwjl0aG0Y00djfnFMS7o5VX3kJDZTob1kLS%2BGB0XQdoRIZ5YOgsx5U4c0iupwY%2FY85ARoFC5u%2B73Bt6MrA5Lljzrf%2BCk%2BPKuNuEmyzrj6GwmZYjz%2Fr76FvSwKAeTwDrYpHFOaUd7U7gD375ApQG%2BKsnakL77umo16lm%2BK3YSEDnM5nVmhg7b7ovtIp%2BXLYsrUKjEYiXQJo0ATL2%2Blpz4t1sym3wwl6IKE9YTJ7bWK3MJPTnL4GOqUBW%2BPZRp9gJRMfr5SeRCySe8Gso6yQwr6v2rcL2PgvADhPBiBL8e55o%2FwoPgm0b6o4N%2Bv6mmkvPo7bDZTotmg%2F09aTmz1UmdevGZxIXAz8%2BowY%2F78%2F89MvBeHYP6W3qOlftpvM3USc%2BgNoHYaWt2Aqhxe1vMNs73tZ31jQ%2BcVd%2BJsMaUpJkP%2F02bvr9NOFyw1CgIibaVv7JABuVcC6pCE5tGoOiVff&X-Amz-Signature=b3dca9a7d7d51671b050aa5aba2bb8dea1a2b88d2f067a13015605795f3d8e79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNBWDK6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8QrvyqjIXXPPQgpi%2FrRQO1gXiv9DVcNoPCiwJhIBlFgIgco%2F%2FfcOy0iKH8PkYr08JkGfT%2BCC3sFhrnPB6gWLSdjYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQyOxJiUPlovB4w5SrcAy%2FKj4QDTXHbk9tyGqAZfN2pmqoNHdeSU8C7FIu7MBEIFPq4QdKilLEi9WTvXXNVysMzCQri32ubCLmuHlHo9J1sy8%2BTx5uQD22bQ8epwa9jALWW4zrCsOdrlm6JgzgWFg3XevwEcs4INB1ucVFHmmgoOJQYRaG73SIo5QVg1JNXOhBWlDvrZB1V2TBMu2Czs3RrgO78AjpPKTHEAq13hGGkhuRFfhx2KsF7xYSf%2B7%2Bt5G3VeQbJ1YPHldmJj948Ss9sqXNE1u9nof6SY%2BcCW4QJQKwHuXl055fASaSE4C8ADsbcknEi84DMnLyM52Ea4mk7phnG4w%2FtH1A17OZDy%2BTRLiWlY4I3iEfF%2FNvq1xftBdZWZBRsfMThgGPU9XY%2FfE0CIMaZBCrIubKaNSJwjl0aG0Y00djfnFMS7o5VX3kJDZTob1kLS%2BGB0XQdoRIZ5YOgsx5U4c0iupwY%2FY85ARoFC5u%2B73Bt6MrA5Lljzrf%2BCk%2BPKuNuEmyzrj6GwmZYjz%2Fr76FvSwKAeTwDrYpHFOaUd7U7gD375ApQG%2BKsnakL77umo16lm%2BK3YSEDnM5nVmhg7b7ovtIp%2BXLYsrUKjEYiXQJo0ATL2%2Blpz4t1sym3wwl6IKE9YTJ7bWK3MJPTnL4GOqUBW%2BPZRp9gJRMfr5SeRCySe8Gso6yQwr6v2rcL2PgvADhPBiBL8e55o%2FwoPgm0b6o4N%2Bv6mmkvPo7bDZTotmg%2F09aTmz1UmdevGZxIXAz8%2BowY%2F78%2F89MvBeHYP6W3qOlftpvM3USc%2BgNoHYaWt2Aqhxe1vMNs73tZ31jQ%2BcVd%2BJsMaUpJkP%2F02bvr9NOFyw1CgIibaVv7JABuVcC6pCE5tGoOiVff&X-Amz-Signature=5a2cc5d1ca586112587021dc91ebdb29c38299f649e485bacf5ff9b66eca68fa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNBWDK6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8QrvyqjIXXPPQgpi%2FrRQO1gXiv9DVcNoPCiwJhIBlFgIgco%2F%2FfcOy0iKH8PkYr08JkGfT%2BCC3sFhrnPB6gWLSdjYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQyOxJiUPlovB4w5SrcAy%2FKj4QDTXHbk9tyGqAZfN2pmqoNHdeSU8C7FIu7MBEIFPq4QdKilLEi9WTvXXNVysMzCQri32ubCLmuHlHo9J1sy8%2BTx5uQD22bQ8epwa9jALWW4zrCsOdrlm6JgzgWFg3XevwEcs4INB1ucVFHmmgoOJQYRaG73SIo5QVg1JNXOhBWlDvrZB1V2TBMu2Czs3RrgO78AjpPKTHEAq13hGGkhuRFfhx2KsF7xYSf%2B7%2Bt5G3VeQbJ1YPHldmJj948Ss9sqXNE1u9nof6SY%2BcCW4QJQKwHuXl055fASaSE4C8ADsbcknEi84DMnLyM52Ea4mk7phnG4w%2FtH1A17OZDy%2BTRLiWlY4I3iEfF%2FNvq1xftBdZWZBRsfMThgGPU9XY%2FfE0CIMaZBCrIubKaNSJwjl0aG0Y00djfnFMS7o5VX3kJDZTob1kLS%2BGB0XQdoRIZ5YOgsx5U4c0iupwY%2FY85ARoFC5u%2B73Bt6MrA5Lljzrf%2BCk%2BPKuNuEmyzrj6GwmZYjz%2Fr76FvSwKAeTwDrYpHFOaUd7U7gD375ApQG%2BKsnakL77umo16lm%2BK3YSEDnM5nVmhg7b7ovtIp%2BXLYsrUKjEYiXQJo0ATL2%2Blpz4t1sym3wwl6IKE9YTJ7bWK3MJPTnL4GOqUBW%2BPZRp9gJRMfr5SeRCySe8Gso6yQwr6v2rcL2PgvADhPBiBL8e55o%2FwoPgm0b6o4N%2Bv6mmkvPo7bDZTotmg%2F09aTmz1UmdevGZxIXAz8%2BowY%2F78%2F89MvBeHYP6W3qOlftpvM3USc%2BgNoHYaWt2Aqhxe1vMNs73tZ31jQ%2BcVd%2BJsMaUpJkP%2F02bvr9NOFyw1CgIibaVv7JABuVcC6pCE5tGoOiVff&X-Amz-Signature=3eb9de5261aaddc14a32788e5c149dadf521e8b464dec5015d8de2dc1c24961e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNBWDK6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8QrvyqjIXXPPQgpi%2FrRQO1gXiv9DVcNoPCiwJhIBlFgIgco%2F%2FfcOy0iKH8PkYr08JkGfT%2BCC3sFhrnPB6gWLSdjYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQyOxJiUPlovB4w5SrcAy%2FKj4QDTXHbk9tyGqAZfN2pmqoNHdeSU8C7FIu7MBEIFPq4QdKilLEi9WTvXXNVysMzCQri32ubCLmuHlHo9J1sy8%2BTx5uQD22bQ8epwa9jALWW4zrCsOdrlm6JgzgWFg3XevwEcs4INB1ucVFHmmgoOJQYRaG73SIo5QVg1JNXOhBWlDvrZB1V2TBMu2Czs3RrgO78AjpPKTHEAq13hGGkhuRFfhx2KsF7xYSf%2B7%2Bt5G3VeQbJ1YPHldmJj948Ss9sqXNE1u9nof6SY%2BcCW4QJQKwHuXl055fASaSE4C8ADsbcknEi84DMnLyM52Ea4mk7phnG4w%2FtH1A17OZDy%2BTRLiWlY4I3iEfF%2FNvq1xftBdZWZBRsfMThgGPU9XY%2FfE0CIMaZBCrIubKaNSJwjl0aG0Y00djfnFMS7o5VX3kJDZTob1kLS%2BGB0XQdoRIZ5YOgsx5U4c0iupwY%2FY85ARoFC5u%2B73Bt6MrA5Lljzrf%2BCk%2BPKuNuEmyzrj6GwmZYjz%2Fr76FvSwKAeTwDrYpHFOaUd7U7gD375ApQG%2BKsnakL77umo16lm%2BK3YSEDnM5nVmhg7b7ovtIp%2BXLYsrUKjEYiXQJo0ATL2%2Blpz4t1sym3wwl6IKE9YTJ7bWK3MJPTnL4GOqUBW%2BPZRp9gJRMfr5SeRCySe8Gso6yQwr6v2rcL2PgvADhPBiBL8e55o%2FwoPgm0b6o4N%2Bv6mmkvPo7bDZTotmg%2F09aTmz1UmdevGZxIXAz8%2BowY%2F78%2F89MvBeHYP6W3qOlftpvM3USc%2BgNoHYaWt2Aqhxe1vMNs73tZ31jQ%2BcVd%2BJsMaUpJkP%2F02bvr9NOFyw1CgIibaVv7JABuVcC6pCE5tGoOiVff&X-Amz-Signature=1a954d95ce506cd90062f10265b498f224554e95ecbc91b6ad4e9871caeef673&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNBWDK6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8QrvyqjIXXPPQgpi%2FrRQO1gXiv9DVcNoPCiwJhIBlFgIgco%2F%2FfcOy0iKH8PkYr08JkGfT%2BCC3sFhrnPB6gWLSdjYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQyOxJiUPlovB4w5SrcAy%2FKj4QDTXHbk9tyGqAZfN2pmqoNHdeSU8C7FIu7MBEIFPq4QdKilLEi9WTvXXNVysMzCQri32ubCLmuHlHo9J1sy8%2BTx5uQD22bQ8epwa9jALWW4zrCsOdrlm6JgzgWFg3XevwEcs4INB1ucVFHmmgoOJQYRaG73SIo5QVg1JNXOhBWlDvrZB1V2TBMu2Czs3RrgO78AjpPKTHEAq13hGGkhuRFfhx2KsF7xYSf%2B7%2Bt5G3VeQbJ1YPHldmJj948Ss9sqXNE1u9nof6SY%2BcCW4QJQKwHuXl055fASaSE4C8ADsbcknEi84DMnLyM52Ea4mk7phnG4w%2FtH1A17OZDy%2BTRLiWlY4I3iEfF%2FNvq1xftBdZWZBRsfMThgGPU9XY%2FfE0CIMaZBCrIubKaNSJwjl0aG0Y00djfnFMS7o5VX3kJDZTob1kLS%2BGB0XQdoRIZ5YOgsx5U4c0iupwY%2FY85ARoFC5u%2B73Bt6MrA5Lljzrf%2BCk%2BPKuNuEmyzrj6GwmZYjz%2Fr76FvSwKAeTwDrYpHFOaUd7U7gD375ApQG%2BKsnakL77umo16lm%2BK3YSEDnM5nVmhg7b7ovtIp%2BXLYsrUKjEYiXQJo0ATL2%2Blpz4t1sym3wwl6IKE9YTJ7bWK3MJPTnL4GOqUBW%2BPZRp9gJRMfr5SeRCySe8Gso6yQwr6v2rcL2PgvADhPBiBL8e55o%2FwoPgm0b6o4N%2Bv6mmkvPo7bDZTotmg%2F09aTmz1UmdevGZxIXAz8%2BowY%2F78%2F89MvBeHYP6W3qOlftpvM3USc%2BgNoHYaWt2Aqhxe1vMNs73tZ31jQ%2BcVd%2BJsMaUpJkP%2F02bvr9NOFyw1CgIibaVv7JABuVcC6pCE5tGoOiVff&X-Amz-Signature=f11ce0431cdca11771f2f8f7045cb64ee85c03cbe3200b2062573fe9a4cb0b62&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
