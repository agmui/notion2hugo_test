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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIMQBWL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRgAPKf2Ce3aaF8xsPYEgDOcCMtmUGpTIcVAc6R39hwgIhAIqZUHUqRaaPQPGpZ8my36ehvoCG7ZP3Flbqj1M9Vq1qKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5cvkjvSD1YIVd%2FmQq3AOCfne3CYkzzMPPeUC%2BtH%2BfuYq2z6TEBp73VRjqn3bqZM1Z7FFAwz6md7unpFVprYQkoqU18aeUsd2cDQwMFguxGyxww2survwxy%2Bnk4CxJRmbmwNCUxGiRu29pgcXyZw5UMuQbaXcVT6m5T4PSuYsslx63ys8TKCoGxaonNqCY7eeV8Vem8wIe6nWigZYmUkmOLEUhMSm3ZcOtIDWH9KqdZQHYgX1kATerje0lijLq5%2Fzn6WuO9EfS9Kw43ub5iSXBE62CXWOTqq5boAVVyDb94NT%2BzRhJAxitTXPwUXKeFj6GtU%2B2vUeS35nOIqJdtqtpZHhUX5fp3GZ850haGtgE%2Bp1MIW0r4o0qRbwQU2zI2SDQoNNj%2BGXwFHogrnVdJyUCJoKVSnF8o5JaeQCVRbqk5mNs%2B9ro187VS6fEdMv7PqM040qxgix2aUp1jRRkejKZb0m60TSm5ebhHoxdqnNxnyfTa1piGr5BsG2R59gYKmGsID%2B3aUPe51fI3iSWJglktWrXuEppX3BTGwlqf7hKptEjSGsVBvKSPv2ar3wAz2t5hAC%2B5si8H55hG3Kr5G0ND2Mr%2BfKGQ0C7mfPcd8Of6W8Hc3SEzcSZhZqLn6wkrW2ZFAZnpTjcNZvIBTDhvJbDBjqkAezi%2BDJn8tdvdQI4yXV4ZllsfHWkt%2FVj3pLFIjF9hxqVnh2yRO9qxHFCTf%2FGGmNS6e9xnHY3Lj%2Bx1DoLTdHpvoPKSVoMmjdjgNv4wtwphEfctoKfYdBAQ5KTCJHW%2F9hqKH7XBnzOFgqwzYNKTOpBBENa%2Bvj76W0eXauoHkX6s%2FkDdES2iF9e%2F%2FUSoplSrihwDXdiw5wZ4%2Bb8%2F%2FPHFFBzoOlEZ6YA&X-Amz-Signature=3cf7b2259d0ec5aa2a4341500a60d9cb4708fb48c9e6f5eb76a5e0a4889ccae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIMQBWL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRgAPKf2Ce3aaF8xsPYEgDOcCMtmUGpTIcVAc6R39hwgIhAIqZUHUqRaaPQPGpZ8my36ehvoCG7ZP3Flbqj1M9Vq1qKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5cvkjvSD1YIVd%2FmQq3AOCfne3CYkzzMPPeUC%2BtH%2BfuYq2z6TEBp73VRjqn3bqZM1Z7FFAwz6md7unpFVprYQkoqU18aeUsd2cDQwMFguxGyxww2survwxy%2Bnk4CxJRmbmwNCUxGiRu29pgcXyZw5UMuQbaXcVT6m5T4PSuYsslx63ys8TKCoGxaonNqCY7eeV8Vem8wIe6nWigZYmUkmOLEUhMSm3ZcOtIDWH9KqdZQHYgX1kATerje0lijLq5%2Fzn6WuO9EfS9Kw43ub5iSXBE62CXWOTqq5boAVVyDb94NT%2BzRhJAxitTXPwUXKeFj6GtU%2B2vUeS35nOIqJdtqtpZHhUX5fp3GZ850haGtgE%2Bp1MIW0r4o0qRbwQU2zI2SDQoNNj%2BGXwFHogrnVdJyUCJoKVSnF8o5JaeQCVRbqk5mNs%2B9ro187VS6fEdMv7PqM040qxgix2aUp1jRRkejKZb0m60TSm5ebhHoxdqnNxnyfTa1piGr5BsG2R59gYKmGsID%2B3aUPe51fI3iSWJglktWrXuEppX3BTGwlqf7hKptEjSGsVBvKSPv2ar3wAz2t5hAC%2B5si8H55hG3Kr5G0ND2Mr%2BfKGQ0C7mfPcd8Of6W8Hc3SEzcSZhZqLn6wkrW2ZFAZnpTjcNZvIBTDhvJbDBjqkAezi%2BDJn8tdvdQI4yXV4ZllsfHWkt%2FVj3pLFIjF9hxqVnh2yRO9qxHFCTf%2FGGmNS6e9xnHY3Lj%2Bx1DoLTdHpvoPKSVoMmjdjgNv4wtwphEfctoKfYdBAQ5KTCJHW%2F9hqKH7XBnzOFgqwzYNKTOpBBENa%2Bvj76W0eXauoHkX6s%2FkDdES2iF9e%2F%2FUSoplSrihwDXdiw5wZ4%2Bb8%2F%2FPHFFBzoOlEZ6YA&X-Amz-Signature=b07e076f7e4a6a2c8ea60c9b2de460a5268e6cd2e4d66f2cce14303870002944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIMQBWL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRgAPKf2Ce3aaF8xsPYEgDOcCMtmUGpTIcVAc6R39hwgIhAIqZUHUqRaaPQPGpZ8my36ehvoCG7ZP3Flbqj1M9Vq1qKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5cvkjvSD1YIVd%2FmQq3AOCfne3CYkzzMPPeUC%2BtH%2BfuYq2z6TEBp73VRjqn3bqZM1Z7FFAwz6md7unpFVprYQkoqU18aeUsd2cDQwMFguxGyxww2survwxy%2Bnk4CxJRmbmwNCUxGiRu29pgcXyZw5UMuQbaXcVT6m5T4PSuYsslx63ys8TKCoGxaonNqCY7eeV8Vem8wIe6nWigZYmUkmOLEUhMSm3ZcOtIDWH9KqdZQHYgX1kATerje0lijLq5%2Fzn6WuO9EfS9Kw43ub5iSXBE62CXWOTqq5boAVVyDb94NT%2BzRhJAxitTXPwUXKeFj6GtU%2B2vUeS35nOIqJdtqtpZHhUX5fp3GZ850haGtgE%2Bp1MIW0r4o0qRbwQU2zI2SDQoNNj%2BGXwFHogrnVdJyUCJoKVSnF8o5JaeQCVRbqk5mNs%2B9ro187VS6fEdMv7PqM040qxgix2aUp1jRRkejKZb0m60TSm5ebhHoxdqnNxnyfTa1piGr5BsG2R59gYKmGsID%2B3aUPe51fI3iSWJglktWrXuEppX3BTGwlqf7hKptEjSGsVBvKSPv2ar3wAz2t5hAC%2B5si8H55hG3Kr5G0ND2Mr%2BfKGQ0C7mfPcd8Of6W8Hc3SEzcSZhZqLn6wkrW2ZFAZnpTjcNZvIBTDhvJbDBjqkAezi%2BDJn8tdvdQI4yXV4ZllsfHWkt%2FVj3pLFIjF9hxqVnh2yRO9qxHFCTf%2FGGmNS6e9xnHY3Lj%2Bx1DoLTdHpvoPKSVoMmjdjgNv4wtwphEfctoKfYdBAQ5KTCJHW%2F9hqKH7XBnzOFgqwzYNKTOpBBENa%2Bvj76W0eXauoHkX6s%2FkDdES2iF9e%2F%2FUSoplSrihwDXdiw5wZ4%2Bb8%2F%2FPHFFBzoOlEZ6YA&X-Amz-Signature=17a660ceb2212ff953a646630c0a3cbc4577f8058b89591b42800acc642404be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIMQBWL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRgAPKf2Ce3aaF8xsPYEgDOcCMtmUGpTIcVAc6R39hwgIhAIqZUHUqRaaPQPGpZ8my36ehvoCG7ZP3Flbqj1M9Vq1qKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5cvkjvSD1YIVd%2FmQq3AOCfne3CYkzzMPPeUC%2BtH%2BfuYq2z6TEBp73VRjqn3bqZM1Z7FFAwz6md7unpFVprYQkoqU18aeUsd2cDQwMFguxGyxww2survwxy%2Bnk4CxJRmbmwNCUxGiRu29pgcXyZw5UMuQbaXcVT6m5T4PSuYsslx63ys8TKCoGxaonNqCY7eeV8Vem8wIe6nWigZYmUkmOLEUhMSm3ZcOtIDWH9KqdZQHYgX1kATerje0lijLq5%2Fzn6WuO9EfS9Kw43ub5iSXBE62CXWOTqq5boAVVyDb94NT%2BzRhJAxitTXPwUXKeFj6GtU%2B2vUeS35nOIqJdtqtpZHhUX5fp3GZ850haGtgE%2Bp1MIW0r4o0qRbwQU2zI2SDQoNNj%2BGXwFHogrnVdJyUCJoKVSnF8o5JaeQCVRbqk5mNs%2B9ro187VS6fEdMv7PqM040qxgix2aUp1jRRkejKZb0m60TSm5ebhHoxdqnNxnyfTa1piGr5BsG2R59gYKmGsID%2B3aUPe51fI3iSWJglktWrXuEppX3BTGwlqf7hKptEjSGsVBvKSPv2ar3wAz2t5hAC%2B5si8H55hG3Kr5G0ND2Mr%2BfKGQ0C7mfPcd8Of6W8Hc3SEzcSZhZqLn6wkrW2ZFAZnpTjcNZvIBTDhvJbDBjqkAezi%2BDJn8tdvdQI4yXV4ZllsfHWkt%2FVj3pLFIjF9hxqVnh2yRO9qxHFCTf%2FGGmNS6e9xnHY3Lj%2Bx1DoLTdHpvoPKSVoMmjdjgNv4wtwphEfctoKfYdBAQ5KTCJHW%2F9hqKH7XBnzOFgqwzYNKTOpBBENa%2Bvj76W0eXauoHkX6s%2FkDdES2iF9e%2F%2FUSoplSrihwDXdiw5wZ4%2Bb8%2F%2FPHFFBzoOlEZ6YA&X-Amz-Signature=470f87e8bf04cfb162e2b8285887cf381235e8616ee994d12b962061d05407c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIMQBWL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRgAPKf2Ce3aaF8xsPYEgDOcCMtmUGpTIcVAc6R39hwgIhAIqZUHUqRaaPQPGpZ8my36ehvoCG7ZP3Flbqj1M9Vq1qKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5cvkjvSD1YIVd%2FmQq3AOCfne3CYkzzMPPeUC%2BtH%2BfuYq2z6TEBp73VRjqn3bqZM1Z7FFAwz6md7unpFVprYQkoqU18aeUsd2cDQwMFguxGyxww2survwxy%2Bnk4CxJRmbmwNCUxGiRu29pgcXyZw5UMuQbaXcVT6m5T4PSuYsslx63ys8TKCoGxaonNqCY7eeV8Vem8wIe6nWigZYmUkmOLEUhMSm3ZcOtIDWH9KqdZQHYgX1kATerje0lijLq5%2Fzn6WuO9EfS9Kw43ub5iSXBE62CXWOTqq5boAVVyDb94NT%2BzRhJAxitTXPwUXKeFj6GtU%2B2vUeS35nOIqJdtqtpZHhUX5fp3GZ850haGtgE%2Bp1MIW0r4o0qRbwQU2zI2SDQoNNj%2BGXwFHogrnVdJyUCJoKVSnF8o5JaeQCVRbqk5mNs%2B9ro187VS6fEdMv7PqM040qxgix2aUp1jRRkejKZb0m60TSm5ebhHoxdqnNxnyfTa1piGr5BsG2R59gYKmGsID%2B3aUPe51fI3iSWJglktWrXuEppX3BTGwlqf7hKptEjSGsVBvKSPv2ar3wAz2t5hAC%2B5si8H55hG3Kr5G0ND2Mr%2BfKGQ0C7mfPcd8Of6W8Hc3SEzcSZhZqLn6wkrW2ZFAZnpTjcNZvIBTDhvJbDBjqkAezi%2BDJn8tdvdQI4yXV4ZllsfHWkt%2FVj3pLFIjF9hxqVnh2yRO9qxHFCTf%2FGGmNS6e9xnHY3Lj%2Bx1DoLTdHpvoPKSVoMmjdjgNv4wtwphEfctoKfYdBAQ5KTCJHW%2F9hqKH7XBnzOFgqwzYNKTOpBBENa%2Bvj76W0eXauoHkX6s%2FkDdES2iF9e%2F%2FUSoplSrihwDXdiw5wZ4%2Bb8%2F%2FPHFFBzoOlEZ6YA&X-Amz-Signature=93d6ae449db690fdf9c061dc6ff5036724c34375ec07c85529dbc05b6c394478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
