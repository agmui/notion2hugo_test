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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWMWARH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICTsee9jIAxk51h4mFbWjHJAPFG8apI8KU5hcHr8ZpKiAiAOXQs3g6nl4VG6y8qGBIO3SwQ%2BKikmsvmdzQtSrgGJ%2BSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FIjg0%2FAugEGeM8QKtwDuukYFDu8tQD9otiDHH7e%2BMCu4K2jcF8%2Fa1GdtS2MSPBBBA09T2Fa7hMtWnBJ2HzmUBtV4hWeRmWI9u5N8Sy2zGNp%2B1tvbEuOFo99b%2BpNGCH6pDkTM4du8IMzn0aaidtEz4dK2c4PQ218wrFo8Cbo7USi%2BVOZgd3md%2BCvEyv%2B4nu6Rl%2FZPfgQni7DpgoHDtTn60VPZ4L%2BLWIFFrb79mT4oaqMG7NgB1apQb8KDVRBMY2XsFJB3xGAxxpou1F9Xr7s9SsRr3uujIjrBGN5JoDoKmQdldLpwQDL6jDcIbNGKWYIvDkf3KSazmWKQVJkHUmADLPEuZnyYNbwaZMMr99bbQ2Bi7%2Fj9KhBOB5BTjbZL%2BpF8UivTHH3mPqnL07RMPOVauR4bY51DLgEdWxa4JHDeZBT3MxduwEtjmTCymAP8YmFPn0R4fmK5Aw5Je%2BwyT3wdWXpy9AExvWKPWze29bRh6S%2FPPNq3LjqNabMgSZ8Vhhr6q1qcEuys7u29xLMOga5fR%2Bx6%2FvzPM%2B8rCBfsf7J1OE%2Bwvn0t1jXRmq%2BIPwJ9awQzrAgDMrLZu%2FutKYiBLHAb3pFvEkx3liub5mx7bC31uxbbgl0%2B2MwyCdv2n8wUMLymyMr8IR4r0pFCuIwho%2BLwQY6pgH5x2VpzB%2FNguC%2FEDseVP9YIqj6oLSLOWdt7d7Yo63VzLuZZyQSp3yNtF1XI7cjKVbe17Cg4ZdrQ28kLQexN5HBp1mnkXHhkp3wV2oG%2F%2FIsJxHP0J%2FPwsFCUYtqXe8rY4vgkyO6iMDpDCvGmTVTxQplcFntxH%2FfGaASIwK2J8Brr6AZ9XqS7qIDMbbY0xCjZSy5Oje4E1umFEIouYJYExYQWGVs13tA&X-Amz-Signature=1c6090f1d67cd6de75192a4b23abfea2ed0089f37e6fcb698a35fa695957f822&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWMWARH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICTsee9jIAxk51h4mFbWjHJAPFG8apI8KU5hcHr8ZpKiAiAOXQs3g6nl4VG6y8qGBIO3SwQ%2BKikmsvmdzQtSrgGJ%2BSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FIjg0%2FAugEGeM8QKtwDuukYFDu8tQD9otiDHH7e%2BMCu4K2jcF8%2Fa1GdtS2MSPBBBA09T2Fa7hMtWnBJ2HzmUBtV4hWeRmWI9u5N8Sy2zGNp%2B1tvbEuOFo99b%2BpNGCH6pDkTM4du8IMzn0aaidtEz4dK2c4PQ218wrFo8Cbo7USi%2BVOZgd3md%2BCvEyv%2B4nu6Rl%2FZPfgQni7DpgoHDtTn60VPZ4L%2BLWIFFrb79mT4oaqMG7NgB1apQb8KDVRBMY2XsFJB3xGAxxpou1F9Xr7s9SsRr3uujIjrBGN5JoDoKmQdldLpwQDL6jDcIbNGKWYIvDkf3KSazmWKQVJkHUmADLPEuZnyYNbwaZMMr99bbQ2Bi7%2Fj9KhBOB5BTjbZL%2BpF8UivTHH3mPqnL07RMPOVauR4bY51DLgEdWxa4JHDeZBT3MxduwEtjmTCymAP8YmFPn0R4fmK5Aw5Je%2BwyT3wdWXpy9AExvWKPWze29bRh6S%2FPPNq3LjqNabMgSZ8Vhhr6q1qcEuys7u29xLMOga5fR%2Bx6%2FvzPM%2B8rCBfsf7J1OE%2Bwvn0t1jXRmq%2BIPwJ9awQzrAgDMrLZu%2FutKYiBLHAb3pFvEkx3liub5mx7bC31uxbbgl0%2B2MwyCdv2n8wUMLymyMr8IR4r0pFCuIwho%2BLwQY6pgH5x2VpzB%2FNguC%2FEDseVP9YIqj6oLSLOWdt7d7Yo63VzLuZZyQSp3yNtF1XI7cjKVbe17Cg4ZdrQ28kLQexN5HBp1mnkXHhkp3wV2oG%2F%2FIsJxHP0J%2FPwsFCUYtqXe8rY4vgkyO6iMDpDCvGmTVTxQplcFntxH%2FfGaASIwK2J8Brr6AZ9XqS7qIDMbbY0xCjZSy5Oje4E1umFEIouYJYExYQWGVs13tA&X-Amz-Signature=70e89a5e54b5d6226c9e165278ba0abdbad9e806d2a97a8d01db1a92d76a3f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWMWARH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICTsee9jIAxk51h4mFbWjHJAPFG8apI8KU5hcHr8ZpKiAiAOXQs3g6nl4VG6y8qGBIO3SwQ%2BKikmsvmdzQtSrgGJ%2BSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FIjg0%2FAugEGeM8QKtwDuukYFDu8tQD9otiDHH7e%2BMCu4K2jcF8%2Fa1GdtS2MSPBBBA09T2Fa7hMtWnBJ2HzmUBtV4hWeRmWI9u5N8Sy2zGNp%2B1tvbEuOFo99b%2BpNGCH6pDkTM4du8IMzn0aaidtEz4dK2c4PQ218wrFo8Cbo7USi%2BVOZgd3md%2BCvEyv%2B4nu6Rl%2FZPfgQni7DpgoHDtTn60VPZ4L%2BLWIFFrb79mT4oaqMG7NgB1apQb8KDVRBMY2XsFJB3xGAxxpou1F9Xr7s9SsRr3uujIjrBGN5JoDoKmQdldLpwQDL6jDcIbNGKWYIvDkf3KSazmWKQVJkHUmADLPEuZnyYNbwaZMMr99bbQ2Bi7%2Fj9KhBOB5BTjbZL%2BpF8UivTHH3mPqnL07RMPOVauR4bY51DLgEdWxa4JHDeZBT3MxduwEtjmTCymAP8YmFPn0R4fmK5Aw5Je%2BwyT3wdWXpy9AExvWKPWze29bRh6S%2FPPNq3LjqNabMgSZ8Vhhr6q1qcEuys7u29xLMOga5fR%2Bx6%2FvzPM%2B8rCBfsf7J1OE%2Bwvn0t1jXRmq%2BIPwJ9awQzrAgDMrLZu%2FutKYiBLHAb3pFvEkx3liub5mx7bC31uxbbgl0%2B2MwyCdv2n8wUMLymyMr8IR4r0pFCuIwho%2BLwQY6pgH5x2VpzB%2FNguC%2FEDseVP9YIqj6oLSLOWdt7d7Yo63VzLuZZyQSp3yNtF1XI7cjKVbe17Cg4ZdrQ28kLQexN5HBp1mnkXHhkp3wV2oG%2F%2FIsJxHP0J%2FPwsFCUYtqXe8rY4vgkyO6iMDpDCvGmTVTxQplcFntxH%2FfGaASIwK2J8Brr6AZ9XqS7qIDMbbY0xCjZSy5Oje4E1umFEIouYJYExYQWGVs13tA&X-Amz-Signature=ec7885169a391073941ee5dbaab7e41d4eea895dcfbf4316b33547a8c613205f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWMWARH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICTsee9jIAxk51h4mFbWjHJAPFG8apI8KU5hcHr8ZpKiAiAOXQs3g6nl4VG6y8qGBIO3SwQ%2BKikmsvmdzQtSrgGJ%2BSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FIjg0%2FAugEGeM8QKtwDuukYFDu8tQD9otiDHH7e%2BMCu4K2jcF8%2Fa1GdtS2MSPBBBA09T2Fa7hMtWnBJ2HzmUBtV4hWeRmWI9u5N8Sy2zGNp%2B1tvbEuOFo99b%2BpNGCH6pDkTM4du8IMzn0aaidtEz4dK2c4PQ218wrFo8Cbo7USi%2BVOZgd3md%2BCvEyv%2B4nu6Rl%2FZPfgQni7DpgoHDtTn60VPZ4L%2BLWIFFrb79mT4oaqMG7NgB1apQb8KDVRBMY2XsFJB3xGAxxpou1F9Xr7s9SsRr3uujIjrBGN5JoDoKmQdldLpwQDL6jDcIbNGKWYIvDkf3KSazmWKQVJkHUmADLPEuZnyYNbwaZMMr99bbQ2Bi7%2Fj9KhBOB5BTjbZL%2BpF8UivTHH3mPqnL07RMPOVauR4bY51DLgEdWxa4JHDeZBT3MxduwEtjmTCymAP8YmFPn0R4fmK5Aw5Je%2BwyT3wdWXpy9AExvWKPWze29bRh6S%2FPPNq3LjqNabMgSZ8Vhhr6q1qcEuys7u29xLMOga5fR%2Bx6%2FvzPM%2B8rCBfsf7J1OE%2Bwvn0t1jXRmq%2BIPwJ9awQzrAgDMrLZu%2FutKYiBLHAb3pFvEkx3liub5mx7bC31uxbbgl0%2B2MwyCdv2n8wUMLymyMr8IR4r0pFCuIwho%2BLwQY6pgH5x2VpzB%2FNguC%2FEDseVP9YIqj6oLSLOWdt7d7Yo63VzLuZZyQSp3yNtF1XI7cjKVbe17Cg4ZdrQ28kLQexN5HBp1mnkXHhkp3wV2oG%2F%2FIsJxHP0J%2FPwsFCUYtqXe8rY4vgkyO6iMDpDCvGmTVTxQplcFntxH%2FfGaASIwK2J8Brr6AZ9XqS7qIDMbbY0xCjZSy5Oje4E1umFEIouYJYExYQWGVs13tA&X-Amz-Signature=7455c417f994ca4c56e1aecb39bfdd5dc99a71712e5a1bd9009c8ae77a297509&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWMWARH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICTsee9jIAxk51h4mFbWjHJAPFG8apI8KU5hcHr8ZpKiAiAOXQs3g6nl4VG6y8qGBIO3SwQ%2BKikmsvmdzQtSrgGJ%2BSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FIjg0%2FAugEGeM8QKtwDuukYFDu8tQD9otiDHH7e%2BMCu4K2jcF8%2Fa1GdtS2MSPBBBA09T2Fa7hMtWnBJ2HzmUBtV4hWeRmWI9u5N8Sy2zGNp%2B1tvbEuOFo99b%2BpNGCH6pDkTM4du8IMzn0aaidtEz4dK2c4PQ218wrFo8Cbo7USi%2BVOZgd3md%2BCvEyv%2B4nu6Rl%2FZPfgQni7DpgoHDtTn60VPZ4L%2BLWIFFrb79mT4oaqMG7NgB1apQb8KDVRBMY2XsFJB3xGAxxpou1F9Xr7s9SsRr3uujIjrBGN5JoDoKmQdldLpwQDL6jDcIbNGKWYIvDkf3KSazmWKQVJkHUmADLPEuZnyYNbwaZMMr99bbQ2Bi7%2Fj9KhBOB5BTjbZL%2BpF8UivTHH3mPqnL07RMPOVauR4bY51DLgEdWxa4JHDeZBT3MxduwEtjmTCymAP8YmFPn0R4fmK5Aw5Je%2BwyT3wdWXpy9AExvWKPWze29bRh6S%2FPPNq3LjqNabMgSZ8Vhhr6q1qcEuys7u29xLMOga5fR%2Bx6%2FvzPM%2B8rCBfsf7J1OE%2Bwvn0t1jXRmq%2BIPwJ9awQzrAgDMrLZu%2FutKYiBLHAb3pFvEkx3liub5mx7bC31uxbbgl0%2B2MwyCdv2n8wUMLymyMr8IR4r0pFCuIwho%2BLwQY6pgH5x2VpzB%2FNguC%2FEDseVP9YIqj6oLSLOWdt7d7Yo63VzLuZZyQSp3yNtF1XI7cjKVbe17Cg4ZdrQ28kLQexN5HBp1mnkXHhkp3wV2oG%2F%2FIsJxHP0J%2FPwsFCUYtqXe8rY4vgkyO6iMDpDCvGmTVTxQplcFntxH%2FfGaASIwK2J8Brr6AZ9XqS7qIDMbbY0xCjZSy5Oje4E1umFEIouYJYExYQWGVs13tA&X-Amz-Signature=aeff7cfbbc78650ed6f787e31035eeb4bf18d0ed9af7f113438b4be2434d1b74&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
