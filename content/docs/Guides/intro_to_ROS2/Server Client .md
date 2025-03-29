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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5RWEUW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGVHtheiJ6bUbKb25119aqkSAIWQOMTwr2n%2FHwsnw1teAiEAsIew1mp7Z87BmZd5k2T4rRbHtgXH0rRRXHw3Q3WQ6gMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGaADn2iHV17eO7Z3CrcA3nJC18yuPjAQNphF%2BuVeBRFLFBQKXlN7O2yjh1iwFIumZWX55GW4unfa8KvBSgmyB3ofyS%2BBJHF28AIwmISfrK9QoGT9LcQ%2BKUq0rU9OBdKEgL%2BMkztlekNvzdPJliKqJ0jDNU%2FaR%2Fjbd6bG4O4%2Bo9CvfDHepwwf39MHgMgHLfcLK3gVpMVCIF%2Byi2zdIkkZHpIRtUu84M2yuyjOIIfCxOUhQhKz32%2B9RXD%2FaMqegr8qYn4EOrk%2FANoTms%2FURZHCeIzMOuh9Kdl8FWiY%2BEVW7PmUTtd48kWTx7TjJzkWwHYWdcNiaF%2BN4Aek41uo%2F2iAkXzQOBOduKrk%2FSr%2FAliolgvABoWSUVbI1xfX7S6nJny3wBraVb%2FXdzl9ivnEpEWrTiI%2Fg02Keo7b4Gk2osyMtDrB4jk2ZEZv7HYWEXFbCHMeTvZl%2F0gfBjdbVbWDdyjerDLFDrKOMUrE6e8zprdcz84DgfSc4NmnydF7JParXCqGTCh4nLIpR0Oj%2FnML7iN5MkE4OERiiHpmFwllOVeQNB3Q8K8vq%2FuAbVWDcMRC1GxqnlCm6mqEDKWUAfXkX%2FyduPlDt6z%2FnnvKP3huLR%2BuXzQZP2Qpo3zPNELEpeeeGWITgWtacnu6Pe7SPfCML6Kob8GOqUByxxY3V1ZRazUfpG7v0O8PXLRNTWOz7C6ROnTQW9qSzNWjxVxIHrcVUBPpQsyczpWTeKQrmdjJafNQvQ2GuzhkezjFyDCvkcX2%2FvvvxcDzLUtZjJEWyJ9oYXHWiYSBrixbIfHXcSAcGj0uD3cyq0Cz6LES9%2FLsgJL25zlR7RXTvwAqHuVWvObFxZr1HjQANP7QHj4EYMu6ZVudVSVfOh8jWruXOTj&X-Amz-Signature=1253619d9a7cd8c99ba52ada1a2669f5d89fc0e41aadabfd6e73c6d669044d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5RWEUW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGVHtheiJ6bUbKb25119aqkSAIWQOMTwr2n%2FHwsnw1teAiEAsIew1mp7Z87BmZd5k2T4rRbHtgXH0rRRXHw3Q3WQ6gMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGaADn2iHV17eO7Z3CrcA3nJC18yuPjAQNphF%2BuVeBRFLFBQKXlN7O2yjh1iwFIumZWX55GW4unfa8KvBSgmyB3ofyS%2BBJHF28AIwmISfrK9QoGT9LcQ%2BKUq0rU9OBdKEgL%2BMkztlekNvzdPJliKqJ0jDNU%2FaR%2Fjbd6bG4O4%2Bo9CvfDHepwwf39MHgMgHLfcLK3gVpMVCIF%2Byi2zdIkkZHpIRtUu84M2yuyjOIIfCxOUhQhKz32%2B9RXD%2FaMqegr8qYn4EOrk%2FANoTms%2FURZHCeIzMOuh9Kdl8FWiY%2BEVW7PmUTtd48kWTx7TjJzkWwHYWdcNiaF%2BN4Aek41uo%2F2iAkXzQOBOduKrk%2FSr%2FAliolgvABoWSUVbI1xfX7S6nJny3wBraVb%2FXdzl9ivnEpEWrTiI%2Fg02Keo7b4Gk2osyMtDrB4jk2ZEZv7HYWEXFbCHMeTvZl%2F0gfBjdbVbWDdyjerDLFDrKOMUrE6e8zprdcz84DgfSc4NmnydF7JParXCqGTCh4nLIpR0Oj%2FnML7iN5MkE4OERiiHpmFwllOVeQNB3Q8K8vq%2FuAbVWDcMRC1GxqnlCm6mqEDKWUAfXkX%2FyduPlDt6z%2FnnvKP3huLR%2BuXzQZP2Qpo3zPNELEpeeeGWITgWtacnu6Pe7SPfCML6Kob8GOqUByxxY3V1ZRazUfpG7v0O8PXLRNTWOz7C6ROnTQW9qSzNWjxVxIHrcVUBPpQsyczpWTeKQrmdjJafNQvQ2GuzhkezjFyDCvkcX2%2FvvvxcDzLUtZjJEWyJ9oYXHWiYSBrixbIfHXcSAcGj0uD3cyq0Cz6LES9%2FLsgJL25zlR7RXTvwAqHuVWvObFxZr1HjQANP7QHj4EYMu6ZVudVSVfOh8jWruXOTj&X-Amz-Signature=3e98259bb274bb7fcb510d92a420c264dce2ca3db61a77c169f590645f5870b6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5RWEUW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGVHtheiJ6bUbKb25119aqkSAIWQOMTwr2n%2FHwsnw1teAiEAsIew1mp7Z87BmZd5k2T4rRbHtgXH0rRRXHw3Q3WQ6gMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGaADn2iHV17eO7Z3CrcA3nJC18yuPjAQNphF%2BuVeBRFLFBQKXlN7O2yjh1iwFIumZWX55GW4unfa8KvBSgmyB3ofyS%2BBJHF28AIwmISfrK9QoGT9LcQ%2BKUq0rU9OBdKEgL%2BMkztlekNvzdPJliKqJ0jDNU%2FaR%2Fjbd6bG4O4%2Bo9CvfDHepwwf39MHgMgHLfcLK3gVpMVCIF%2Byi2zdIkkZHpIRtUu84M2yuyjOIIfCxOUhQhKz32%2B9RXD%2FaMqegr8qYn4EOrk%2FANoTms%2FURZHCeIzMOuh9Kdl8FWiY%2BEVW7PmUTtd48kWTx7TjJzkWwHYWdcNiaF%2BN4Aek41uo%2F2iAkXzQOBOduKrk%2FSr%2FAliolgvABoWSUVbI1xfX7S6nJny3wBraVb%2FXdzl9ivnEpEWrTiI%2Fg02Keo7b4Gk2osyMtDrB4jk2ZEZv7HYWEXFbCHMeTvZl%2F0gfBjdbVbWDdyjerDLFDrKOMUrE6e8zprdcz84DgfSc4NmnydF7JParXCqGTCh4nLIpR0Oj%2FnML7iN5MkE4OERiiHpmFwllOVeQNB3Q8K8vq%2FuAbVWDcMRC1GxqnlCm6mqEDKWUAfXkX%2FyduPlDt6z%2FnnvKP3huLR%2BuXzQZP2Qpo3zPNELEpeeeGWITgWtacnu6Pe7SPfCML6Kob8GOqUByxxY3V1ZRazUfpG7v0O8PXLRNTWOz7C6ROnTQW9qSzNWjxVxIHrcVUBPpQsyczpWTeKQrmdjJafNQvQ2GuzhkezjFyDCvkcX2%2FvvvxcDzLUtZjJEWyJ9oYXHWiYSBrixbIfHXcSAcGj0uD3cyq0Cz6LES9%2FLsgJL25zlR7RXTvwAqHuVWvObFxZr1HjQANP7QHj4EYMu6ZVudVSVfOh8jWruXOTj&X-Amz-Signature=fbf0d3389c26a4f71842d4ad4a449d5737af6440b50658230cbee5c82fa20975&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5RWEUW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGVHtheiJ6bUbKb25119aqkSAIWQOMTwr2n%2FHwsnw1teAiEAsIew1mp7Z87BmZd5k2T4rRbHtgXH0rRRXHw3Q3WQ6gMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGaADn2iHV17eO7Z3CrcA3nJC18yuPjAQNphF%2BuVeBRFLFBQKXlN7O2yjh1iwFIumZWX55GW4unfa8KvBSgmyB3ofyS%2BBJHF28AIwmISfrK9QoGT9LcQ%2BKUq0rU9OBdKEgL%2BMkztlekNvzdPJliKqJ0jDNU%2FaR%2Fjbd6bG4O4%2Bo9CvfDHepwwf39MHgMgHLfcLK3gVpMVCIF%2Byi2zdIkkZHpIRtUu84M2yuyjOIIfCxOUhQhKz32%2B9RXD%2FaMqegr8qYn4EOrk%2FANoTms%2FURZHCeIzMOuh9Kdl8FWiY%2BEVW7PmUTtd48kWTx7TjJzkWwHYWdcNiaF%2BN4Aek41uo%2F2iAkXzQOBOduKrk%2FSr%2FAliolgvABoWSUVbI1xfX7S6nJny3wBraVb%2FXdzl9ivnEpEWrTiI%2Fg02Keo7b4Gk2osyMtDrB4jk2ZEZv7HYWEXFbCHMeTvZl%2F0gfBjdbVbWDdyjerDLFDrKOMUrE6e8zprdcz84DgfSc4NmnydF7JParXCqGTCh4nLIpR0Oj%2FnML7iN5MkE4OERiiHpmFwllOVeQNB3Q8K8vq%2FuAbVWDcMRC1GxqnlCm6mqEDKWUAfXkX%2FyduPlDt6z%2FnnvKP3huLR%2BuXzQZP2Qpo3zPNELEpeeeGWITgWtacnu6Pe7SPfCML6Kob8GOqUByxxY3V1ZRazUfpG7v0O8PXLRNTWOz7C6ROnTQW9qSzNWjxVxIHrcVUBPpQsyczpWTeKQrmdjJafNQvQ2GuzhkezjFyDCvkcX2%2FvvvxcDzLUtZjJEWyJ9oYXHWiYSBrixbIfHXcSAcGj0uD3cyq0Cz6LES9%2FLsgJL25zlR7RXTvwAqHuVWvObFxZr1HjQANP7QHj4EYMu6ZVudVSVfOh8jWruXOTj&X-Amz-Signature=702afbdbb2e0b2ee85c156bf6d9587f22d04bb1ba25057e2a609714ecd80084b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5RWEUW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGVHtheiJ6bUbKb25119aqkSAIWQOMTwr2n%2FHwsnw1teAiEAsIew1mp7Z87BmZd5k2T4rRbHtgXH0rRRXHw3Q3WQ6gMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGaADn2iHV17eO7Z3CrcA3nJC18yuPjAQNphF%2BuVeBRFLFBQKXlN7O2yjh1iwFIumZWX55GW4unfa8KvBSgmyB3ofyS%2BBJHF28AIwmISfrK9QoGT9LcQ%2BKUq0rU9OBdKEgL%2BMkztlekNvzdPJliKqJ0jDNU%2FaR%2Fjbd6bG4O4%2Bo9CvfDHepwwf39MHgMgHLfcLK3gVpMVCIF%2Byi2zdIkkZHpIRtUu84M2yuyjOIIfCxOUhQhKz32%2B9RXD%2FaMqegr8qYn4EOrk%2FANoTms%2FURZHCeIzMOuh9Kdl8FWiY%2BEVW7PmUTtd48kWTx7TjJzkWwHYWdcNiaF%2BN4Aek41uo%2F2iAkXzQOBOduKrk%2FSr%2FAliolgvABoWSUVbI1xfX7S6nJny3wBraVb%2FXdzl9ivnEpEWrTiI%2Fg02Keo7b4Gk2osyMtDrB4jk2ZEZv7HYWEXFbCHMeTvZl%2F0gfBjdbVbWDdyjerDLFDrKOMUrE6e8zprdcz84DgfSc4NmnydF7JParXCqGTCh4nLIpR0Oj%2FnML7iN5MkE4OERiiHpmFwllOVeQNB3Q8K8vq%2FuAbVWDcMRC1GxqnlCm6mqEDKWUAfXkX%2FyduPlDt6z%2FnnvKP3huLR%2BuXzQZP2Qpo3zPNELEpeeeGWITgWtacnu6Pe7SPfCML6Kob8GOqUByxxY3V1ZRazUfpG7v0O8PXLRNTWOz7C6ROnTQW9qSzNWjxVxIHrcVUBPpQsyczpWTeKQrmdjJafNQvQ2GuzhkezjFyDCvkcX2%2FvvvxcDzLUtZjJEWyJ9oYXHWiYSBrixbIfHXcSAcGj0uD3cyq0Cz6LES9%2FLsgJL25zlR7RXTvwAqHuVWvObFxZr1HjQANP7QHj4EYMu6ZVudVSVfOh8jWruXOTj&X-Amz-Signature=6148c058a99d287655bbe182feb4e05bd069d950bb12ece483674623f4e90a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
