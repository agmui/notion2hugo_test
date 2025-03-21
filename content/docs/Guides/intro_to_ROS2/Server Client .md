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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAQB4BQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFXKz7PcKVXPjpubD%2BNM2ipZrsUudy60AZZXvOk5UWjWAiBNRjqkb8rHzBr6UGPVPSaHGAA0XgXShrwfV7ex3im4LiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fx8dULibADqWXxzKtwDeTcpTl7%2BmUsBddaic8oxwzZj47ZJ6w8ewBVGocQsv9E2PIrdF1doUiosK9NE%2FDBcCQsO0yAzEmDZQvZWLa8AfKbbO4AR0vPZiGU3QjK%2FmVcVfBMqpKSkYj4aHqqb1FjP3JxqJWNkyW%2FAAlnWA0wQ87etnuSNW5vgI57G3UAjpuS5zchJM5FOIInywkQJG44Mi7OX8L%2FmIYBXwRbWcpjzK%2BFxqScQDboKSSsj%2FP1FAS9mY0pktjkeF8Ykw5jr6PFe1WL4djeIC0t0O174EbfnFV5WTJFymp0xTxEhRHsHJ479u2qVBzmMT1ExvSvUsCVpfoHN7FhWeLz3FUjRkrIwyl9dNVufZiFg%2BkrsxQARpMPxgBTFA1Bbq%2FkZnkxjlnUjfEk6nJfhdugNwz34XWzX0koQUEbuhNkeBtvgY38cIWUgjni3nXFiKiugtOg6%2BDDCRR5Bg14eT6i7Sdvx9%2FPUcJY5H%2FIlIHMl%2FYhXYg3sqPjAGd8%2Fc3QekF7kz3V%2B%2B8EhSdi20Q51RBnRkXCnYTULczz2VBiqwMIpqL%2FVD5on%2BuPnB8kAuKIpU%2B%2BsVcp89SMoDtKtWJwwgq5ipWpr6e7bR0oNh24cZpxO0uNpmcpHvf89ks3qmGV6q4DChTcwlpv2vgY6pgHLeYpgjwk73iDwWaptxBlgKv4ve2qAtjTX05yq3pfVrTHJj0XnwNMTKbNqA8y6qcplxrm0mw0JxxAFGn%2FBaUbnaHPktoQk2yk4Sut0hl%2Fgovls%2FqV8Nur1nW%2BSUVQ1Ky2ifGXInle9wU3ZtIhp5Ca9o%2BhPbm5VHMvSiE8ZnGuR5raz9m%2Fb5Wdl0l6TqEOH3tnbdsLUEacMVQctG7hiFYo2sLmo6TS%2B&X-Amz-Signature=09d00f7c5d60dd1883b344867ccc36e598e27c30d441a2d98c79ff146bfd8f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAQB4BQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFXKz7PcKVXPjpubD%2BNM2ipZrsUudy60AZZXvOk5UWjWAiBNRjqkb8rHzBr6UGPVPSaHGAA0XgXShrwfV7ex3im4LiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fx8dULibADqWXxzKtwDeTcpTl7%2BmUsBddaic8oxwzZj47ZJ6w8ewBVGocQsv9E2PIrdF1doUiosK9NE%2FDBcCQsO0yAzEmDZQvZWLa8AfKbbO4AR0vPZiGU3QjK%2FmVcVfBMqpKSkYj4aHqqb1FjP3JxqJWNkyW%2FAAlnWA0wQ87etnuSNW5vgI57G3UAjpuS5zchJM5FOIInywkQJG44Mi7OX8L%2FmIYBXwRbWcpjzK%2BFxqScQDboKSSsj%2FP1FAS9mY0pktjkeF8Ykw5jr6PFe1WL4djeIC0t0O174EbfnFV5WTJFymp0xTxEhRHsHJ479u2qVBzmMT1ExvSvUsCVpfoHN7FhWeLz3FUjRkrIwyl9dNVufZiFg%2BkrsxQARpMPxgBTFA1Bbq%2FkZnkxjlnUjfEk6nJfhdugNwz34XWzX0koQUEbuhNkeBtvgY38cIWUgjni3nXFiKiugtOg6%2BDDCRR5Bg14eT6i7Sdvx9%2FPUcJY5H%2FIlIHMl%2FYhXYg3sqPjAGd8%2Fc3QekF7kz3V%2B%2B8EhSdi20Q51RBnRkXCnYTULczz2VBiqwMIpqL%2FVD5on%2BuPnB8kAuKIpU%2B%2BsVcp89SMoDtKtWJwwgq5ipWpr6e7bR0oNh24cZpxO0uNpmcpHvf89ks3qmGV6q4DChTcwlpv2vgY6pgHLeYpgjwk73iDwWaptxBlgKv4ve2qAtjTX05yq3pfVrTHJj0XnwNMTKbNqA8y6qcplxrm0mw0JxxAFGn%2FBaUbnaHPktoQk2yk4Sut0hl%2Fgovls%2FqV8Nur1nW%2BSUVQ1Ky2ifGXInle9wU3ZtIhp5Ca9o%2BhPbm5VHMvSiE8ZnGuR5raz9m%2Fb5Wdl0l6TqEOH3tnbdsLUEacMVQctG7hiFYo2sLmo6TS%2B&X-Amz-Signature=c3ad241d701883c7c105d503d8f2419f771a8072d32f6c9320b8b3311d354d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAQB4BQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFXKz7PcKVXPjpubD%2BNM2ipZrsUudy60AZZXvOk5UWjWAiBNRjqkb8rHzBr6UGPVPSaHGAA0XgXShrwfV7ex3im4LiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fx8dULibADqWXxzKtwDeTcpTl7%2BmUsBddaic8oxwzZj47ZJ6w8ewBVGocQsv9E2PIrdF1doUiosK9NE%2FDBcCQsO0yAzEmDZQvZWLa8AfKbbO4AR0vPZiGU3QjK%2FmVcVfBMqpKSkYj4aHqqb1FjP3JxqJWNkyW%2FAAlnWA0wQ87etnuSNW5vgI57G3UAjpuS5zchJM5FOIInywkQJG44Mi7OX8L%2FmIYBXwRbWcpjzK%2BFxqScQDboKSSsj%2FP1FAS9mY0pktjkeF8Ykw5jr6PFe1WL4djeIC0t0O174EbfnFV5WTJFymp0xTxEhRHsHJ479u2qVBzmMT1ExvSvUsCVpfoHN7FhWeLz3FUjRkrIwyl9dNVufZiFg%2BkrsxQARpMPxgBTFA1Bbq%2FkZnkxjlnUjfEk6nJfhdugNwz34XWzX0koQUEbuhNkeBtvgY38cIWUgjni3nXFiKiugtOg6%2BDDCRR5Bg14eT6i7Sdvx9%2FPUcJY5H%2FIlIHMl%2FYhXYg3sqPjAGd8%2Fc3QekF7kz3V%2B%2B8EhSdi20Q51RBnRkXCnYTULczz2VBiqwMIpqL%2FVD5on%2BuPnB8kAuKIpU%2B%2BsVcp89SMoDtKtWJwwgq5ipWpr6e7bR0oNh24cZpxO0uNpmcpHvf89ks3qmGV6q4DChTcwlpv2vgY6pgHLeYpgjwk73iDwWaptxBlgKv4ve2qAtjTX05yq3pfVrTHJj0XnwNMTKbNqA8y6qcplxrm0mw0JxxAFGn%2FBaUbnaHPktoQk2yk4Sut0hl%2Fgovls%2FqV8Nur1nW%2BSUVQ1Ky2ifGXInle9wU3ZtIhp5Ca9o%2BhPbm5VHMvSiE8ZnGuR5raz9m%2Fb5Wdl0l6TqEOH3tnbdsLUEacMVQctG7hiFYo2sLmo6TS%2B&X-Amz-Signature=b155c6243113c9fe6c965658e4f35dff8e5813b39299d3a7329a08ed78216447&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAQB4BQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFXKz7PcKVXPjpubD%2BNM2ipZrsUudy60AZZXvOk5UWjWAiBNRjqkb8rHzBr6UGPVPSaHGAA0XgXShrwfV7ex3im4LiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fx8dULibADqWXxzKtwDeTcpTl7%2BmUsBddaic8oxwzZj47ZJ6w8ewBVGocQsv9E2PIrdF1doUiosK9NE%2FDBcCQsO0yAzEmDZQvZWLa8AfKbbO4AR0vPZiGU3QjK%2FmVcVfBMqpKSkYj4aHqqb1FjP3JxqJWNkyW%2FAAlnWA0wQ87etnuSNW5vgI57G3UAjpuS5zchJM5FOIInywkQJG44Mi7OX8L%2FmIYBXwRbWcpjzK%2BFxqScQDboKSSsj%2FP1FAS9mY0pktjkeF8Ykw5jr6PFe1WL4djeIC0t0O174EbfnFV5WTJFymp0xTxEhRHsHJ479u2qVBzmMT1ExvSvUsCVpfoHN7FhWeLz3FUjRkrIwyl9dNVufZiFg%2BkrsxQARpMPxgBTFA1Bbq%2FkZnkxjlnUjfEk6nJfhdugNwz34XWzX0koQUEbuhNkeBtvgY38cIWUgjni3nXFiKiugtOg6%2BDDCRR5Bg14eT6i7Sdvx9%2FPUcJY5H%2FIlIHMl%2FYhXYg3sqPjAGd8%2Fc3QekF7kz3V%2B%2B8EhSdi20Q51RBnRkXCnYTULczz2VBiqwMIpqL%2FVD5on%2BuPnB8kAuKIpU%2B%2BsVcp89SMoDtKtWJwwgq5ipWpr6e7bR0oNh24cZpxO0uNpmcpHvf89ks3qmGV6q4DChTcwlpv2vgY6pgHLeYpgjwk73iDwWaptxBlgKv4ve2qAtjTX05yq3pfVrTHJj0XnwNMTKbNqA8y6qcplxrm0mw0JxxAFGn%2FBaUbnaHPktoQk2yk4Sut0hl%2Fgovls%2FqV8Nur1nW%2BSUVQ1Ky2ifGXInle9wU3ZtIhp5Ca9o%2BhPbm5VHMvSiE8ZnGuR5raz9m%2Fb5Wdl0l6TqEOH3tnbdsLUEacMVQctG7hiFYo2sLmo6TS%2B&X-Amz-Signature=1cbb3f66c40549aeac7cedf947ce24527f5acd45399a20960c8f589bd38744b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAQB4BQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFXKz7PcKVXPjpubD%2BNM2ipZrsUudy60AZZXvOk5UWjWAiBNRjqkb8rHzBr6UGPVPSaHGAA0XgXShrwfV7ex3im4LiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fx8dULibADqWXxzKtwDeTcpTl7%2BmUsBddaic8oxwzZj47ZJ6w8ewBVGocQsv9E2PIrdF1doUiosK9NE%2FDBcCQsO0yAzEmDZQvZWLa8AfKbbO4AR0vPZiGU3QjK%2FmVcVfBMqpKSkYj4aHqqb1FjP3JxqJWNkyW%2FAAlnWA0wQ87etnuSNW5vgI57G3UAjpuS5zchJM5FOIInywkQJG44Mi7OX8L%2FmIYBXwRbWcpjzK%2BFxqScQDboKSSsj%2FP1FAS9mY0pktjkeF8Ykw5jr6PFe1WL4djeIC0t0O174EbfnFV5WTJFymp0xTxEhRHsHJ479u2qVBzmMT1ExvSvUsCVpfoHN7FhWeLz3FUjRkrIwyl9dNVufZiFg%2BkrsxQARpMPxgBTFA1Bbq%2FkZnkxjlnUjfEk6nJfhdugNwz34XWzX0koQUEbuhNkeBtvgY38cIWUgjni3nXFiKiugtOg6%2BDDCRR5Bg14eT6i7Sdvx9%2FPUcJY5H%2FIlIHMl%2FYhXYg3sqPjAGd8%2Fc3QekF7kz3V%2B%2B8EhSdi20Q51RBnRkXCnYTULczz2VBiqwMIpqL%2FVD5on%2BuPnB8kAuKIpU%2B%2BsVcp89SMoDtKtWJwwgq5ipWpr6e7bR0oNh24cZpxO0uNpmcpHvf89ks3qmGV6q4DChTcwlpv2vgY6pgHLeYpgjwk73iDwWaptxBlgKv4ve2qAtjTX05yq3pfVrTHJj0XnwNMTKbNqA8y6qcplxrm0mw0JxxAFGn%2FBaUbnaHPktoQk2yk4Sut0hl%2Fgovls%2FqV8Nur1nW%2BSUVQ1Ky2ifGXInle9wU3ZtIhp5Ca9o%2BhPbm5VHMvSiE8ZnGuR5raz9m%2Fb5Wdl0l6TqEOH3tnbdsLUEacMVQctG7hiFYo2sLmo6TS%2B&X-Amz-Signature=7c02c84a40018f65501bbd224bbf56c4ad21abf1fe39a9b9b81cb5df51702227&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
