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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONX2YHN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SjlbpDytjrp3e5%2Bq%2FGHvX8YDp%2BgwH%2FG33zRiovF2hQIhAOMdFX4yivwoIQg8Ps9mm5M%2FutYoIbmtwqxXGuhC4m4OKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOk9S4fNM2AoatWWgq3APy%2BKqimukZu49bz046%2FAMexNzsxnwBcc5qZTyH5dAGdj9ulD8QKEAcgepVjs89zb4owmpUdJAjEwtIUN7nE%2FpbNgTf4tDjYG6eD9hxJlFLM1I65G0pWI0MjBTCz2SF7qmClWY6ZytXkLQyif3QQgXHbLnzRYSYUw2oTmDwWZibZ7PndqD0nhxUcVg7Ok%2Fs%2FXA9OqsI2FN%2FUsYnT5jXyLfPC2p16YNMFGm171oH12u4%2FE4J6p1ifs0wHWcjB5ybofRId9zt4fYBGYiXdW7VvRxvvnm%2Fbxg9vNPAuxGRh3VmgHvE%2BxoGe1TE14KKGvEu0p6k8ddqThDCiCkst%2FBaUTQDKPa7%2F7q7ZALqKdSi9LdLiAdQNl4EEbAwVt8JPlrAVK9Sw%2Bmh382nkj4OpL%2B19ZTLN3Yme0UcNH6FaunjqZsE%2B3xiAwa8RFwez1%2BJyKZbCKRh%2B2c%2B8XrH5PLzfNQI8llX8LqhClpAymkXiZeDU6Y2eSzZhlM%2BheB8l5W36sJrmfB9Y1FvN1eZiJfwIKWNAr8VuD2wqEKBYcpZjWVkfu%2FUNDkiqKQ58GwZOjUR%2BUcjN1XIAn4Lnn9vRXsaKSW0cWIhVXMQFCKOxrFH1G9h7uqOBVuOVfCak9O%2Fy2myBTD0uO7DBjqkAay5ukl%2FGecdr0i%2FDR9Y8Te6PZydQ%2BXbkkSaMO%2BKjHhCGUuf8h9V9vNBevYhf5aA9PwinyXTxU25kAAULZ4B4FF%2Fft98zFKnCoTF2r6ke4I%2FzLZoq%2FK%2BEPyis5HQhjOJyVV7Bs0uc52rJJ9hEL4DsRCH3iY63%2FiSzbNb1JnOg7o20Ad7xCBTGi7i%2Bs%2FlVHm5cUWgReA5t6NKjKN%2BFUmOWizyjNSR&X-Amz-Signature=e9bff1e7e6a8f2fc8db19622dd8fd32392bcf2a5542bce42042e5ccf08db531f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONX2YHN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SjlbpDytjrp3e5%2Bq%2FGHvX8YDp%2BgwH%2FG33zRiovF2hQIhAOMdFX4yivwoIQg8Ps9mm5M%2FutYoIbmtwqxXGuhC4m4OKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOk9S4fNM2AoatWWgq3APy%2BKqimukZu49bz046%2FAMexNzsxnwBcc5qZTyH5dAGdj9ulD8QKEAcgepVjs89zb4owmpUdJAjEwtIUN7nE%2FpbNgTf4tDjYG6eD9hxJlFLM1I65G0pWI0MjBTCz2SF7qmClWY6ZytXkLQyif3QQgXHbLnzRYSYUw2oTmDwWZibZ7PndqD0nhxUcVg7Ok%2Fs%2FXA9OqsI2FN%2FUsYnT5jXyLfPC2p16YNMFGm171oH12u4%2FE4J6p1ifs0wHWcjB5ybofRId9zt4fYBGYiXdW7VvRxvvnm%2Fbxg9vNPAuxGRh3VmgHvE%2BxoGe1TE14KKGvEu0p6k8ddqThDCiCkst%2FBaUTQDKPa7%2F7q7ZALqKdSi9LdLiAdQNl4EEbAwVt8JPlrAVK9Sw%2Bmh382nkj4OpL%2B19ZTLN3Yme0UcNH6FaunjqZsE%2B3xiAwa8RFwez1%2BJyKZbCKRh%2B2c%2B8XrH5PLzfNQI8llX8LqhClpAymkXiZeDU6Y2eSzZhlM%2BheB8l5W36sJrmfB9Y1FvN1eZiJfwIKWNAr8VuD2wqEKBYcpZjWVkfu%2FUNDkiqKQ58GwZOjUR%2BUcjN1XIAn4Lnn9vRXsaKSW0cWIhVXMQFCKOxrFH1G9h7uqOBVuOVfCak9O%2Fy2myBTD0uO7DBjqkAay5ukl%2FGecdr0i%2FDR9Y8Te6PZydQ%2BXbkkSaMO%2BKjHhCGUuf8h9V9vNBevYhf5aA9PwinyXTxU25kAAULZ4B4FF%2Fft98zFKnCoTF2r6ke4I%2FzLZoq%2FK%2BEPyis5HQhjOJyVV7Bs0uc52rJJ9hEL4DsRCH3iY63%2FiSzbNb1JnOg7o20Ad7xCBTGi7i%2Bs%2FlVHm5cUWgReA5t6NKjKN%2BFUmOWizyjNSR&X-Amz-Signature=ea6e682a0879f745d316c41fb76e0d926c8ef2f918feec5356779a368ac67be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONX2YHN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SjlbpDytjrp3e5%2Bq%2FGHvX8YDp%2BgwH%2FG33zRiovF2hQIhAOMdFX4yivwoIQg8Ps9mm5M%2FutYoIbmtwqxXGuhC4m4OKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOk9S4fNM2AoatWWgq3APy%2BKqimukZu49bz046%2FAMexNzsxnwBcc5qZTyH5dAGdj9ulD8QKEAcgepVjs89zb4owmpUdJAjEwtIUN7nE%2FpbNgTf4tDjYG6eD9hxJlFLM1I65G0pWI0MjBTCz2SF7qmClWY6ZytXkLQyif3QQgXHbLnzRYSYUw2oTmDwWZibZ7PndqD0nhxUcVg7Ok%2Fs%2FXA9OqsI2FN%2FUsYnT5jXyLfPC2p16YNMFGm171oH12u4%2FE4J6p1ifs0wHWcjB5ybofRId9zt4fYBGYiXdW7VvRxvvnm%2Fbxg9vNPAuxGRh3VmgHvE%2BxoGe1TE14KKGvEu0p6k8ddqThDCiCkst%2FBaUTQDKPa7%2F7q7ZALqKdSi9LdLiAdQNl4EEbAwVt8JPlrAVK9Sw%2Bmh382nkj4OpL%2B19ZTLN3Yme0UcNH6FaunjqZsE%2B3xiAwa8RFwez1%2BJyKZbCKRh%2B2c%2B8XrH5PLzfNQI8llX8LqhClpAymkXiZeDU6Y2eSzZhlM%2BheB8l5W36sJrmfB9Y1FvN1eZiJfwIKWNAr8VuD2wqEKBYcpZjWVkfu%2FUNDkiqKQ58GwZOjUR%2BUcjN1XIAn4Lnn9vRXsaKSW0cWIhVXMQFCKOxrFH1G9h7uqOBVuOVfCak9O%2Fy2myBTD0uO7DBjqkAay5ukl%2FGecdr0i%2FDR9Y8Te6PZydQ%2BXbkkSaMO%2BKjHhCGUuf8h9V9vNBevYhf5aA9PwinyXTxU25kAAULZ4B4FF%2Fft98zFKnCoTF2r6ke4I%2FzLZoq%2FK%2BEPyis5HQhjOJyVV7Bs0uc52rJJ9hEL4DsRCH3iY63%2FiSzbNb1JnOg7o20Ad7xCBTGi7i%2Bs%2FlVHm5cUWgReA5t6NKjKN%2BFUmOWizyjNSR&X-Amz-Signature=75c3151d0d2ff6da2ff11986821a01c44fbf7ce667c74fa98265ded524d881bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONX2YHN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SjlbpDytjrp3e5%2Bq%2FGHvX8YDp%2BgwH%2FG33zRiovF2hQIhAOMdFX4yivwoIQg8Ps9mm5M%2FutYoIbmtwqxXGuhC4m4OKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOk9S4fNM2AoatWWgq3APy%2BKqimukZu49bz046%2FAMexNzsxnwBcc5qZTyH5dAGdj9ulD8QKEAcgepVjs89zb4owmpUdJAjEwtIUN7nE%2FpbNgTf4tDjYG6eD9hxJlFLM1I65G0pWI0MjBTCz2SF7qmClWY6ZytXkLQyif3QQgXHbLnzRYSYUw2oTmDwWZibZ7PndqD0nhxUcVg7Ok%2Fs%2FXA9OqsI2FN%2FUsYnT5jXyLfPC2p16YNMFGm171oH12u4%2FE4J6p1ifs0wHWcjB5ybofRId9zt4fYBGYiXdW7VvRxvvnm%2Fbxg9vNPAuxGRh3VmgHvE%2BxoGe1TE14KKGvEu0p6k8ddqThDCiCkst%2FBaUTQDKPa7%2F7q7ZALqKdSi9LdLiAdQNl4EEbAwVt8JPlrAVK9Sw%2Bmh382nkj4OpL%2B19ZTLN3Yme0UcNH6FaunjqZsE%2B3xiAwa8RFwez1%2BJyKZbCKRh%2B2c%2B8XrH5PLzfNQI8llX8LqhClpAymkXiZeDU6Y2eSzZhlM%2BheB8l5W36sJrmfB9Y1FvN1eZiJfwIKWNAr8VuD2wqEKBYcpZjWVkfu%2FUNDkiqKQ58GwZOjUR%2BUcjN1XIAn4Lnn9vRXsaKSW0cWIhVXMQFCKOxrFH1G9h7uqOBVuOVfCak9O%2Fy2myBTD0uO7DBjqkAay5ukl%2FGecdr0i%2FDR9Y8Te6PZydQ%2BXbkkSaMO%2BKjHhCGUuf8h9V9vNBevYhf5aA9PwinyXTxU25kAAULZ4B4FF%2Fft98zFKnCoTF2r6ke4I%2FzLZoq%2FK%2BEPyis5HQhjOJyVV7Bs0uc52rJJ9hEL4DsRCH3iY63%2FiSzbNb1JnOg7o20Ad7xCBTGi7i%2Bs%2FlVHm5cUWgReA5t6NKjKN%2BFUmOWizyjNSR&X-Amz-Signature=2a7a9721b7d8435edcba5633fa379ba994401ab295f7ddec2c175e625e133a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONX2YHN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SjlbpDytjrp3e5%2Bq%2FGHvX8YDp%2BgwH%2FG33zRiovF2hQIhAOMdFX4yivwoIQg8Ps9mm5M%2FutYoIbmtwqxXGuhC4m4OKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOk9S4fNM2AoatWWgq3APy%2BKqimukZu49bz046%2FAMexNzsxnwBcc5qZTyH5dAGdj9ulD8QKEAcgepVjs89zb4owmpUdJAjEwtIUN7nE%2FpbNgTf4tDjYG6eD9hxJlFLM1I65G0pWI0MjBTCz2SF7qmClWY6ZytXkLQyif3QQgXHbLnzRYSYUw2oTmDwWZibZ7PndqD0nhxUcVg7Ok%2Fs%2FXA9OqsI2FN%2FUsYnT5jXyLfPC2p16YNMFGm171oH12u4%2FE4J6p1ifs0wHWcjB5ybofRId9zt4fYBGYiXdW7VvRxvvnm%2Fbxg9vNPAuxGRh3VmgHvE%2BxoGe1TE14KKGvEu0p6k8ddqThDCiCkst%2FBaUTQDKPa7%2F7q7ZALqKdSi9LdLiAdQNl4EEbAwVt8JPlrAVK9Sw%2Bmh382nkj4OpL%2B19ZTLN3Yme0UcNH6FaunjqZsE%2B3xiAwa8RFwez1%2BJyKZbCKRh%2B2c%2B8XrH5PLzfNQI8llX8LqhClpAymkXiZeDU6Y2eSzZhlM%2BheB8l5W36sJrmfB9Y1FvN1eZiJfwIKWNAr8VuD2wqEKBYcpZjWVkfu%2FUNDkiqKQ58GwZOjUR%2BUcjN1XIAn4Lnn9vRXsaKSW0cWIhVXMQFCKOxrFH1G9h7uqOBVuOVfCak9O%2Fy2myBTD0uO7DBjqkAay5ukl%2FGecdr0i%2FDR9Y8Te6PZydQ%2BXbkkSaMO%2BKjHhCGUuf8h9V9vNBevYhf5aA9PwinyXTxU25kAAULZ4B4FF%2Fft98zFKnCoTF2r6ke4I%2FzLZoq%2FK%2BEPyis5HQhjOJyVV7Bs0uc52rJJ9hEL4DsRCH3iY63%2FiSzbNb1JnOg7o20Ad7xCBTGi7i%2Bs%2FlVHm5cUWgReA5t6NKjKN%2BFUmOWizyjNSR&X-Amz-Signature=1a3c16520c679bf4df92a29bfc3572fb6e4c063e3fac5430f06cf86f87708f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
