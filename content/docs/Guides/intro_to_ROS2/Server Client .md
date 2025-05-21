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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP3MJ2H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFKDYf0%2Fb0VjKnQsXGQq5icPumWliT3tDxJbtNMc6IapAiBc67yn47P0rDEzgRKZfQSYJrCPQYqRpCR2NlJ52zr05iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF43Vkl37f7ugbXMbKtwDmGv2%2BoY1M%2BpbZmmsly5Oy4LjQMj3kiNEM9L%2FmQ4IAD76RfSmt68FSEUZ539JPjKC2NhBX2oKCyUOM45EfVHf0xWBCeFPB4IBp%2FIOWIaFE51ja%2Bw7tHDloRrH%2F0otKWltKhTrijrV4opVlEiBqwZ9fDDh1KfoIFluBpSNp5ZmcE3a26hBtY66HPFlU12tsFLw7DNhJmAsUkHkh1XG%2BlbwZ%2BMYlZTmCXXSkTfXh9ZZ1HEip80kgDWVfDEBpp%2B%2FZiplGu7gpAvckTKnWzAZfZSKh4UmISEGtdmeWCHBdFQOSiO3FWt87u%2F39FcP90db%2B%2Bpv3thAhAzjIhp4e82WWPwV9ap5fymx1W7mLAJWD7Eg1SjKceuxvplBBZoHebCucemjutC7Qu2sg8VvCqqFw2Oy04LOyA5nM7qcZWAAh8hkVE3RTFZIWqfSfI%2BK7wy%2BkhKREWPQQLH64o9AdzK31bzY3xz6tgErszvml6wdtUrhnAKu0bnIyfk7wYFm1Gd346t1Pc7%2BWEfocroi8lJIWjXHp%2BkcOuemWV%2FkqXmmSdb4iT0szYn%2FD7Pra2idKqEJQxXG2nY8KecltE8JbVReOKr4vyF7CcqgEH3U7FXaNprRb7fnB9Ukz%2B%2FmUutnaoow5f%2B1wQY6pgG3LXc4wDZpdVxrdc7H88Z2u1AD3jAwW1i83XHKveiSzGlK4C%2BDWMR6BfVCb2yBmE%2BTiMI3Y%2FQhCHXm3BVjPaV39b3c%2F0trqb74CXJc%2BPooCrbwS%2B2AQGCYYY6rK2AL%2BTdd1vt5B0NVRSUOO%2FlVCHIV1TgelYcekuon50G3ilt8JSNfuzvNv1k8AUByqf7UiLC4omQL9Y7Q2%2BUGb1EhDtXyumbtYyRK&X-Amz-Signature=e26028330775f78a4966eabcb65f747a641ce757df0dfff4e34ac6fc29194d00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP3MJ2H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFKDYf0%2Fb0VjKnQsXGQq5icPumWliT3tDxJbtNMc6IapAiBc67yn47P0rDEzgRKZfQSYJrCPQYqRpCR2NlJ52zr05iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF43Vkl37f7ugbXMbKtwDmGv2%2BoY1M%2BpbZmmsly5Oy4LjQMj3kiNEM9L%2FmQ4IAD76RfSmt68FSEUZ539JPjKC2NhBX2oKCyUOM45EfVHf0xWBCeFPB4IBp%2FIOWIaFE51ja%2Bw7tHDloRrH%2F0otKWltKhTrijrV4opVlEiBqwZ9fDDh1KfoIFluBpSNp5ZmcE3a26hBtY66HPFlU12tsFLw7DNhJmAsUkHkh1XG%2BlbwZ%2BMYlZTmCXXSkTfXh9ZZ1HEip80kgDWVfDEBpp%2B%2FZiplGu7gpAvckTKnWzAZfZSKh4UmISEGtdmeWCHBdFQOSiO3FWt87u%2F39FcP90db%2B%2Bpv3thAhAzjIhp4e82WWPwV9ap5fymx1W7mLAJWD7Eg1SjKceuxvplBBZoHebCucemjutC7Qu2sg8VvCqqFw2Oy04LOyA5nM7qcZWAAh8hkVE3RTFZIWqfSfI%2BK7wy%2BkhKREWPQQLH64o9AdzK31bzY3xz6tgErszvml6wdtUrhnAKu0bnIyfk7wYFm1Gd346t1Pc7%2BWEfocroi8lJIWjXHp%2BkcOuemWV%2FkqXmmSdb4iT0szYn%2FD7Pra2idKqEJQxXG2nY8KecltE8JbVReOKr4vyF7CcqgEH3U7FXaNprRb7fnB9Ukz%2B%2FmUutnaoow5f%2B1wQY6pgG3LXc4wDZpdVxrdc7H88Z2u1AD3jAwW1i83XHKveiSzGlK4C%2BDWMR6BfVCb2yBmE%2BTiMI3Y%2FQhCHXm3BVjPaV39b3c%2F0trqb74CXJc%2BPooCrbwS%2B2AQGCYYY6rK2AL%2BTdd1vt5B0NVRSUOO%2FlVCHIV1TgelYcekuon50G3ilt8JSNfuzvNv1k8AUByqf7UiLC4omQL9Y7Q2%2BUGb1EhDtXyumbtYyRK&X-Amz-Signature=0fae3f7bf6e7f9e456cf4101eb7017b0b3a19a2634ffebca2b0f94b00f148e52&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP3MJ2H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFKDYf0%2Fb0VjKnQsXGQq5icPumWliT3tDxJbtNMc6IapAiBc67yn47P0rDEzgRKZfQSYJrCPQYqRpCR2NlJ52zr05iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF43Vkl37f7ugbXMbKtwDmGv2%2BoY1M%2BpbZmmsly5Oy4LjQMj3kiNEM9L%2FmQ4IAD76RfSmt68FSEUZ539JPjKC2NhBX2oKCyUOM45EfVHf0xWBCeFPB4IBp%2FIOWIaFE51ja%2Bw7tHDloRrH%2F0otKWltKhTrijrV4opVlEiBqwZ9fDDh1KfoIFluBpSNp5ZmcE3a26hBtY66HPFlU12tsFLw7DNhJmAsUkHkh1XG%2BlbwZ%2BMYlZTmCXXSkTfXh9ZZ1HEip80kgDWVfDEBpp%2B%2FZiplGu7gpAvckTKnWzAZfZSKh4UmISEGtdmeWCHBdFQOSiO3FWt87u%2F39FcP90db%2B%2Bpv3thAhAzjIhp4e82WWPwV9ap5fymx1W7mLAJWD7Eg1SjKceuxvplBBZoHebCucemjutC7Qu2sg8VvCqqFw2Oy04LOyA5nM7qcZWAAh8hkVE3RTFZIWqfSfI%2BK7wy%2BkhKREWPQQLH64o9AdzK31bzY3xz6tgErszvml6wdtUrhnAKu0bnIyfk7wYFm1Gd346t1Pc7%2BWEfocroi8lJIWjXHp%2BkcOuemWV%2FkqXmmSdb4iT0szYn%2FD7Pra2idKqEJQxXG2nY8KecltE8JbVReOKr4vyF7CcqgEH3U7FXaNprRb7fnB9Ukz%2B%2FmUutnaoow5f%2B1wQY6pgG3LXc4wDZpdVxrdc7H88Z2u1AD3jAwW1i83XHKveiSzGlK4C%2BDWMR6BfVCb2yBmE%2BTiMI3Y%2FQhCHXm3BVjPaV39b3c%2F0trqb74CXJc%2BPooCrbwS%2B2AQGCYYY6rK2AL%2BTdd1vt5B0NVRSUOO%2FlVCHIV1TgelYcekuon50G3ilt8JSNfuzvNv1k8AUByqf7UiLC4omQL9Y7Q2%2BUGb1EhDtXyumbtYyRK&X-Amz-Signature=c93f1970b6bf5ff808c94a277013ad5613ec739d708bbb3b580ab45441d0e1de&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP3MJ2H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFKDYf0%2Fb0VjKnQsXGQq5icPumWliT3tDxJbtNMc6IapAiBc67yn47P0rDEzgRKZfQSYJrCPQYqRpCR2NlJ52zr05iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF43Vkl37f7ugbXMbKtwDmGv2%2BoY1M%2BpbZmmsly5Oy4LjQMj3kiNEM9L%2FmQ4IAD76RfSmt68FSEUZ539JPjKC2NhBX2oKCyUOM45EfVHf0xWBCeFPB4IBp%2FIOWIaFE51ja%2Bw7tHDloRrH%2F0otKWltKhTrijrV4opVlEiBqwZ9fDDh1KfoIFluBpSNp5ZmcE3a26hBtY66HPFlU12tsFLw7DNhJmAsUkHkh1XG%2BlbwZ%2BMYlZTmCXXSkTfXh9ZZ1HEip80kgDWVfDEBpp%2B%2FZiplGu7gpAvckTKnWzAZfZSKh4UmISEGtdmeWCHBdFQOSiO3FWt87u%2F39FcP90db%2B%2Bpv3thAhAzjIhp4e82WWPwV9ap5fymx1W7mLAJWD7Eg1SjKceuxvplBBZoHebCucemjutC7Qu2sg8VvCqqFw2Oy04LOyA5nM7qcZWAAh8hkVE3RTFZIWqfSfI%2BK7wy%2BkhKREWPQQLH64o9AdzK31bzY3xz6tgErszvml6wdtUrhnAKu0bnIyfk7wYFm1Gd346t1Pc7%2BWEfocroi8lJIWjXHp%2BkcOuemWV%2FkqXmmSdb4iT0szYn%2FD7Pra2idKqEJQxXG2nY8KecltE8JbVReOKr4vyF7CcqgEH3U7FXaNprRb7fnB9Ukz%2B%2FmUutnaoow5f%2B1wQY6pgG3LXc4wDZpdVxrdc7H88Z2u1AD3jAwW1i83XHKveiSzGlK4C%2BDWMR6BfVCb2yBmE%2BTiMI3Y%2FQhCHXm3BVjPaV39b3c%2F0trqb74CXJc%2BPooCrbwS%2B2AQGCYYY6rK2AL%2BTdd1vt5B0NVRSUOO%2FlVCHIV1TgelYcekuon50G3ilt8JSNfuzvNv1k8AUByqf7UiLC4omQL9Y7Q2%2BUGb1EhDtXyumbtYyRK&X-Amz-Signature=cea1f75dffe68db5ec6c2b1400744b406173011e1eedae851cfde822fb797c71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP3MJ2H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFKDYf0%2Fb0VjKnQsXGQq5icPumWliT3tDxJbtNMc6IapAiBc67yn47P0rDEzgRKZfQSYJrCPQYqRpCR2NlJ52zr05iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF43Vkl37f7ugbXMbKtwDmGv2%2BoY1M%2BpbZmmsly5Oy4LjQMj3kiNEM9L%2FmQ4IAD76RfSmt68FSEUZ539JPjKC2NhBX2oKCyUOM45EfVHf0xWBCeFPB4IBp%2FIOWIaFE51ja%2Bw7tHDloRrH%2F0otKWltKhTrijrV4opVlEiBqwZ9fDDh1KfoIFluBpSNp5ZmcE3a26hBtY66HPFlU12tsFLw7DNhJmAsUkHkh1XG%2BlbwZ%2BMYlZTmCXXSkTfXh9ZZ1HEip80kgDWVfDEBpp%2B%2FZiplGu7gpAvckTKnWzAZfZSKh4UmISEGtdmeWCHBdFQOSiO3FWt87u%2F39FcP90db%2B%2Bpv3thAhAzjIhp4e82WWPwV9ap5fymx1W7mLAJWD7Eg1SjKceuxvplBBZoHebCucemjutC7Qu2sg8VvCqqFw2Oy04LOyA5nM7qcZWAAh8hkVE3RTFZIWqfSfI%2BK7wy%2BkhKREWPQQLH64o9AdzK31bzY3xz6tgErszvml6wdtUrhnAKu0bnIyfk7wYFm1Gd346t1Pc7%2BWEfocroi8lJIWjXHp%2BkcOuemWV%2FkqXmmSdb4iT0szYn%2FD7Pra2idKqEJQxXG2nY8KecltE8JbVReOKr4vyF7CcqgEH3U7FXaNprRb7fnB9Ukz%2B%2FmUutnaoow5f%2B1wQY6pgG3LXc4wDZpdVxrdc7H88Z2u1AD3jAwW1i83XHKveiSzGlK4C%2BDWMR6BfVCb2yBmE%2BTiMI3Y%2FQhCHXm3BVjPaV39b3c%2F0trqb74CXJc%2BPooCrbwS%2B2AQGCYYY6rK2AL%2BTdd1vt5B0NVRSUOO%2FlVCHIV1TgelYcekuon50G3ilt8JSNfuzvNv1k8AUByqf7UiLC4omQL9Y7Q2%2BUGb1EhDtXyumbtYyRK&X-Amz-Signature=20567b2bd42da018349d98b21abd8aeb2116d772cf7913b10a2d8eb9ddcedc96&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
