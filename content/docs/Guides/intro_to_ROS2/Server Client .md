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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHTALI4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDW6TZ3ajhoEmqfhsX0pxIUyaGJexqnoK2ifxIjFa2m3AIhAM1NYD4SHTViZ1NLNqfLhT7VSmjkQI8I%2FtlA9%2BATLUNYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1msM5RAgvsjUEscYq3ANWWPyrEgeq67ayzqga1yxbTDu5TE6Cpn39XOCTI8ivcUXL5QzjR15uf8Tl%2BotSyxK6EpjWhpjfkMnaBycRri318enNSmc5Gy9jeCglonYeMoR4ZrRqVooFUuQUh53Qnpmg7o4zLJxKJnxD9vhEieZfnhB6zs%2BpbN5baPRNXTQoeJ%2BB3sJSZUEHA7Q8diMS23DmdXgKRiu4NoHNaREW%2FEp45JiZJrJaJ7Ysbw94lIQrm4ftkVScEVIuxdZoq2i0ky%2Fcs7XeixgxMOFYMSuHqziD3psO0E2%2BuIIDcVnBWBEju8tEg0Q%2BZU6VXYYqH87%2BrSULjeWzLSgp8GelZLR%2FKu5hy10cNeFHEuGd8Vn%2BKDOpD%2B%2FJNFIjdKEroTzRVtCzDJoZPKLDB5YGjtuVvu1XmcwfdrKZGpf%2Fv579bbWjc64TN5KgQcTnXUWLNOkvh33NkYQ8RANybZS6rrZrhaOi4nRSelqHoTxTOop9CH2%2F6fygKDOuXnGV5njyTO4i%2F6%2BI95Hj6RUybpoW73bkR34%2FjmFMVUkOmIqwqNEXEjseCPdUudqXCm8%2B8Wfjl0g29S7oJGEA8%2FlmdidP34hWYXhZvVo9kzZfItSb%2F0dc7eaUvCdN6amy5msGgC5gU8A%2FLjCZ56nCBjqkAcW0%2FPhRyNHOkZ31GhKYMMpx%2FQJ%2FL7%2BfrJnKj%2Bm58wnlSLHVGeJXUV2l4ytMBqBQcqbAG40TW2xU5wvHcmNxdUeFZede52nly2XH51By%2FDBUVhUOUPDQmqt5V0p5jk414lfyO7Nv4whR8QGj3khNqoO4aVkDR6wnY9vFkzihvHc%2BIyWdeoIIWw94551HoeF8Fn1itb5j%2BBTY%2BzYFDWS7y6fewasM&X-Amz-Signature=d7ce9de4448b0a8d9fc60f3969f112cd5dda6598e766ffa2e6c5b7628f8c67a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHTALI4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDW6TZ3ajhoEmqfhsX0pxIUyaGJexqnoK2ifxIjFa2m3AIhAM1NYD4SHTViZ1NLNqfLhT7VSmjkQI8I%2FtlA9%2BATLUNYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1msM5RAgvsjUEscYq3ANWWPyrEgeq67ayzqga1yxbTDu5TE6Cpn39XOCTI8ivcUXL5QzjR15uf8Tl%2BotSyxK6EpjWhpjfkMnaBycRri318enNSmc5Gy9jeCglonYeMoR4ZrRqVooFUuQUh53Qnpmg7o4zLJxKJnxD9vhEieZfnhB6zs%2BpbN5baPRNXTQoeJ%2BB3sJSZUEHA7Q8diMS23DmdXgKRiu4NoHNaREW%2FEp45JiZJrJaJ7Ysbw94lIQrm4ftkVScEVIuxdZoq2i0ky%2Fcs7XeixgxMOFYMSuHqziD3psO0E2%2BuIIDcVnBWBEju8tEg0Q%2BZU6VXYYqH87%2BrSULjeWzLSgp8GelZLR%2FKu5hy10cNeFHEuGd8Vn%2BKDOpD%2B%2FJNFIjdKEroTzRVtCzDJoZPKLDB5YGjtuVvu1XmcwfdrKZGpf%2Fv579bbWjc64TN5KgQcTnXUWLNOkvh33NkYQ8RANybZS6rrZrhaOi4nRSelqHoTxTOop9CH2%2F6fygKDOuXnGV5njyTO4i%2F6%2BI95Hj6RUybpoW73bkR34%2FjmFMVUkOmIqwqNEXEjseCPdUudqXCm8%2B8Wfjl0g29S7oJGEA8%2FlmdidP34hWYXhZvVo9kzZfItSb%2F0dc7eaUvCdN6amy5msGgC5gU8A%2FLjCZ56nCBjqkAcW0%2FPhRyNHOkZ31GhKYMMpx%2FQJ%2FL7%2BfrJnKj%2Bm58wnlSLHVGeJXUV2l4ytMBqBQcqbAG40TW2xU5wvHcmNxdUeFZede52nly2XH51By%2FDBUVhUOUPDQmqt5V0p5jk414lfyO7Nv4whR8QGj3khNqoO4aVkDR6wnY9vFkzihvHc%2BIyWdeoIIWw94551HoeF8Fn1itb5j%2BBTY%2BzYFDWS7y6fewasM&X-Amz-Signature=c210183fef8f27843266f617dee74e93c3286ba1debe57a2409d22f375b75e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHTALI4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDW6TZ3ajhoEmqfhsX0pxIUyaGJexqnoK2ifxIjFa2m3AIhAM1NYD4SHTViZ1NLNqfLhT7VSmjkQI8I%2FtlA9%2BATLUNYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1msM5RAgvsjUEscYq3ANWWPyrEgeq67ayzqga1yxbTDu5TE6Cpn39XOCTI8ivcUXL5QzjR15uf8Tl%2BotSyxK6EpjWhpjfkMnaBycRri318enNSmc5Gy9jeCglonYeMoR4ZrRqVooFUuQUh53Qnpmg7o4zLJxKJnxD9vhEieZfnhB6zs%2BpbN5baPRNXTQoeJ%2BB3sJSZUEHA7Q8diMS23DmdXgKRiu4NoHNaREW%2FEp45JiZJrJaJ7Ysbw94lIQrm4ftkVScEVIuxdZoq2i0ky%2Fcs7XeixgxMOFYMSuHqziD3psO0E2%2BuIIDcVnBWBEju8tEg0Q%2BZU6VXYYqH87%2BrSULjeWzLSgp8GelZLR%2FKu5hy10cNeFHEuGd8Vn%2BKDOpD%2B%2FJNFIjdKEroTzRVtCzDJoZPKLDB5YGjtuVvu1XmcwfdrKZGpf%2Fv579bbWjc64TN5KgQcTnXUWLNOkvh33NkYQ8RANybZS6rrZrhaOi4nRSelqHoTxTOop9CH2%2F6fygKDOuXnGV5njyTO4i%2F6%2BI95Hj6RUybpoW73bkR34%2FjmFMVUkOmIqwqNEXEjseCPdUudqXCm8%2B8Wfjl0g29S7oJGEA8%2FlmdidP34hWYXhZvVo9kzZfItSb%2F0dc7eaUvCdN6amy5msGgC5gU8A%2FLjCZ56nCBjqkAcW0%2FPhRyNHOkZ31GhKYMMpx%2FQJ%2FL7%2BfrJnKj%2Bm58wnlSLHVGeJXUV2l4ytMBqBQcqbAG40TW2xU5wvHcmNxdUeFZede52nly2XH51By%2FDBUVhUOUPDQmqt5V0p5jk414lfyO7Nv4whR8QGj3khNqoO4aVkDR6wnY9vFkzihvHc%2BIyWdeoIIWw94551HoeF8Fn1itb5j%2BBTY%2BzYFDWS7y6fewasM&X-Amz-Signature=38d4416a813539742ffda605b000f120622af435c4765a51953673b61ae54954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHTALI4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDW6TZ3ajhoEmqfhsX0pxIUyaGJexqnoK2ifxIjFa2m3AIhAM1NYD4SHTViZ1NLNqfLhT7VSmjkQI8I%2FtlA9%2BATLUNYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1msM5RAgvsjUEscYq3ANWWPyrEgeq67ayzqga1yxbTDu5TE6Cpn39XOCTI8ivcUXL5QzjR15uf8Tl%2BotSyxK6EpjWhpjfkMnaBycRri318enNSmc5Gy9jeCglonYeMoR4ZrRqVooFUuQUh53Qnpmg7o4zLJxKJnxD9vhEieZfnhB6zs%2BpbN5baPRNXTQoeJ%2BB3sJSZUEHA7Q8diMS23DmdXgKRiu4NoHNaREW%2FEp45JiZJrJaJ7Ysbw94lIQrm4ftkVScEVIuxdZoq2i0ky%2Fcs7XeixgxMOFYMSuHqziD3psO0E2%2BuIIDcVnBWBEju8tEg0Q%2BZU6VXYYqH87%2BrSULjeWzLSgp8GelZLR%2FKu5hy10cNeFHEuGd8Vn%2BKDOpD%2B%2FJNFIjdKEroTzRVtCzDJoZPKLDB5YGjtuVvu1XmcwfdrKZGpf%2Fv579bbWjc64TN5KgQcTnXUWLNOkvh33NkYQ8RANybZS6rrZrhaOi4nRSelqHoTxTOop9CH2%2F6fygKDOuXnGV5njyTO4i%2F6%2BI95Hj6RUybpoW73bkR34%2FjmFMVUkOmIqwqNEXEjseCPdUudqXCm8%2B8Wfjl0g29S7oJGEA8%2FlmdidP34hWYXhZvVo9kzZfItSb%2F0dc7eaUvCdN6amy5msGgC5gU8A%2FLjCZ56nCBjqkAcW0%2FPhRyNHOkZ31GhKYMMpx%2FQJ%2FL7%2BfrJnKj%2Bm58wnlSLHVGeJXUV2l4ytMBqBQcqbAG40TW2xU5wvHcmNxdUeFZede52nly2XH51By%2FDBUVhUOUPDQmqt5V0p5jk414lfyO7Nv4whR8QGj3khNqoO4aVkDR6wnY9vFkzihvHc%2BIyWdeoIIWw94551HoeF8Fn1itb5j%2BBTY%2BzYFDWS7y6fewasM&X-Amz-Signature=7fb703d97175c8d076fa1c1358d6bfcb116ca29c1c95fa351f5436474cb662f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHTALI4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDW6TZ3ajhoEmqfhsX0pxIUyaGJexqnoK2ifxIjFa2m3AIhAM1NYD4SHTViZ1NLNqfLhT7VSmjkQI8I%2FtlA9%2BATLUNYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1msM5RAgvsjUEscYq3ANWWPyrEgeq67ayzqga1yxbTDu5TE6Cpn39XOCTI8ivcUXL5QzjR15uf8Tl%2BotSyxK6EpjWhpjfkMnaBycRri318enNSmc5Gy9jeCglonYeMoR4ZrRqVooFUuQUh53Qnpmg7o4zLJxKJnxD9vhEieZfnhB6zs%2BpbN5baPRNXTQoeJ%2BB3sJSZUEHA7Q8diMS23DmdXgKRiu4NoHNaREW%2FEp45JiZJrJaJ7Ysbw94lIQrm4ftkVScEVIuxdZoq2i0ky%2Fcs7XeixgxMOFYMSuHqziD3psO0E2%2BuIIDcVnBWBEju8tEg0Q%2BZU6VXYYqH87%2BrSULjeWzLSgp8GelZLR%2FKu5hy10cNeFHEuGd8Vn%2BKDOpD%2B%2FJNFIjdKEroTzRVtCzDJoZPKLDB5YGjtuVvu1XmcwfdrKZGpf%2Fv579bbWjc64TN5KgQcTnXUWLNOkvh33NkYQ8RANybZS6rrZrhaOi4nRSelqHoTxTOop9CH2%2F6fygKDOuXnGV5njyTO4i%2F6%2BI95Hj6RUybpoW73bkR34%2FjmFMVUkOmIqwqNEXEjseCPdUudqXCm8%2B8Wfjl0g29S7oJGEA8%2FlmdidP34hWYXhZvVo9kzZfItSb%2F0dc7eaUvCdN6amy5msGgC5gU8A%2FLjCZ56nCBjqkAcW0%2FPhRyNHOkZ31GhKYMMpx%2FQJ%2FL7%2BfrJnKj%2Bm58wnlSLHVGeJXUV2l4ytMBqBQcqbAG40TW2xU5wvHcmNxdUeFZede52nly2XH51By%2FDBUVhUOUPDQmqt5V0p5jk414lfyO7Nv4whR8QGj3khNqoO4aVkDR6wnY9vFkzihvHc%2BIyWdeoIIWw94551HoeF8Fn1itb5j%2BBTY%2BzYFDWS7y6fewasM&X-Amz-Signature=a7b4e70ad561eb47097113383b20ff42c1af36ffff5bdf0ed570dd7c6a228a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
