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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LGQ52U%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCgkDUfkz0PcAnzs01wKtJGOF7A08eWE9cix9qw2K6ZDQIgdfgAOl%2FpYVtttvaewt03sTEj273fejuqM3qin89H3SYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTep9hfXEIHnthbTyrcA9L2tVXcZhzsItGZQvknW1elYPVZBa9ViyZnhEMGErmectOiumXilo7yWxVB4psmlyQkt2NN%2BZVk0uY0zldylNXzP%2F6nDALVoeB16ywrtiKgDjy6HtX9xJp8JE%2Fxb9ttshrRji5YYUHXzZR8qiq09hOB56BjSPHd5PImujwUej38Trgm4tZQhcMEGfJ6gvmeBl7m7OQ52Fu2HFD9akMzikKETxZjxh57EJWxhvBqu%2BxCblJn2dHODPMT87cx6A2DW8DoqNvdEsVOOJctb2HbAkv5VTsI3v5RnmnVO2%2FBBTWSkSCxuInu3CE%2Fmy%2FIPLJON8HLPS0fhWh9X97ahu1H7XrAM1gLb5DiTFFscB0Qc6CZ0Zdm%2F%2F0hTp4okU3owOUcGbcpflMlL92lyaim%2BdUc1p%2Fzh0bEfU07HKfy18p%2BsVqk2pTItZqr%2B6nrWxlT4oJ0OWDd5W%2Fgsa6QVbTHn01iLVIuFgnSPYXFTyguHb%2FXul3tfGlGlZXPm5v65ebU0ZfIX7OCY9Q6gBRNPFdqmB7Qc8gtXpz1gdaXuJIw3Qt2Wx5G%2FXissfpDTM7x84aMDV%2BDB%2BKJ7VEJ9PDd3b1kyzqwvd%2FA1%2BpoWK4%2B3JwByJv%2F3BnZq2x19TESLjbv%2B%2B6zMOOy478GOqUBnXEl18KU9ziYv%2Bq7OiczTMM2IeZTl1%2BC6E50aMseHgQlEXdsDJ7K9xi64eKCIOHU%2FVwuFOF4gEBaFtFZ1d9FNPKx6iA%2BxvlyYNn2xS6yP2gQgDMn6KFa4MDJ41PJB5ASQFXhMHHL39lGUAoS67M36lKlQ0RDW%2B21gijq4E5HBRXCg6wTECsf2UppKwdKoL1qA2jv4bxWx59QSMJDwca%2FQFTXQhsk&X-Amz-Signature=a1b90a0d92588185a7406878107b953f508a7d31022901c632c695c8a68bb449&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LGQ52U%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCgkDUfkz0PcAnzs01wKtJGOF7A08eWE9cix9qw2K6ZDQIgdfgAOl%2FpYVtttvaewt03sTEj273fejuqM3qin89H3SYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTep9hfXEIHnthbTyrcA9L2tVXcZhzsItGZQvknW1elYPVZBa9ViyZnhEMGErmectOiumXilo7yWxVB4psmlyQkt2NN%2BZVk0uY0zldylNXzP%2F6nDALVoeB16ywrtiKgDjy6HtX9xJp8JE%2Fxb9ttshrRji5YYUHXzZR8qiq09hOB56BjSPHd5PImujwUej38Trgm4tZQhcMEGfJ6gvmeBl7m7OQ52Fu2HFD9akMzikKETxZjxh57EJWxhvBqu%2BxCblJn2dHODPMT87cx6A2DW8DoqNvdEsVOOJctb2HbAkv5VTsI3v5RnmnVO2%2FBBTWSkSCxuInu3CE%2Fmy%2FIPLJON8HLPS0fhWh9X97ahu1H7XrAM1gLb5DiTFFscB0Qc6CZ0Zdm%2F%2F0hTp4okU3owOUcGbcpflMlL92lyaim%2BdUc1p%2Fzh0bEfU07HKfy18p%2BsVqk2pTItZqr%2B6nrWxlT4oJ0OWDd5W%2Fgsa6QVbTHn01iLVIuFgnSPYXFTyguHb%2FXul3tfGlGlZXPm5v65ebU0ZfIX7OCY9Q6gBRNPFdqmB7Qc8gtXpz1gdaXuJIw3Qt2Wx5G%2FXissfpDTM7x84aMDV%2BDB%2BKJ7VEJ9PDd3b1kyzqwvd%2FA1%2BpoWK4%2B3JwByJv%2F3BnZq2x19TESLjbv%2B%2B6zMOOy478GOqUBnXEl18KU9ziYv%2Bq7OiczTMM2IeZTl1%2BC6E50aMseHgQlEXdsDJ7K9xi64eKCIOHU%2FVwuFOF4gEBaFtFZ1d9FNPKx6iA%2BxvlyYNn2xS6yP2gQgDMn6KFa4MDJ41PJB5ASQFXhMHHL39lGUAoS67M36lKlQ0RDW%2B21gijq4E5HBRXCg6wTECsf2UppKwdKoL1qA2jv4bxWx59QSMJDwca%2FQFTXQhsk&X-Amz-Signature=9787ff6199935373e6b5dead628e84b617fbc77ef8b78f3c2b1b0a8941ace1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LGQ52U%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCgkDUfkz0PcAnzs01wKtJGOF7A08eWE9cix9qw2K6ZDQIgdfgAOl%2FpYVtttvaewt03sTEj273fejuqM3qin89H3SYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTep9hfXEIHnthbTyrcA9L2tVXcZhzsItGZQvknW1elYPVZBa9ViyZnhEMGErmectOiumXilo7yWxVB4psmlyQkt2NN%2BZVk0uY0zldylNXzP%2F6nDALVoeB16ywrtiKgDjy6HtX9xJp8JE%2Fxb9ttshrRji5YYUHXzZR8qiq09hOB56BjSPHd5PImujwUej38Trgm4tZQhcMEGfJ6gvmeBl7m7OQ52Fu2HFD9akMzikKETxZjxh57EJWxhvBqu%2BxCblJn2dHODPMT87cx6A2DW8DoqNvdEsVOOJctb2HbAkv5VTsI3v5RnmnVO2%2FBBTWSkSCxuInu3CE%2Fmy%2FIPLJON8HLPS0fhWh9X97ahu1H7XrAM1gLb5DiTFFscB0Qc6CZ0Zdm%2F%2F0hTp4okU3owOUcGbcpflMlL92lyaim%2BdUc1p%2Fzh0bEfU07HKfy18p%2BsVqk2pTItZqr%2B6nrWxlT4oJ0OWDd5W%2Fgsa6QVbTHn01iLVIuFgnSPYXFTyguHb%2FXul3tfGlGlZXPm5v65ebU0ZfIX7OCY9Q6gBRNPFdqmB7Qc8gtXpz1gdaXuJIw3Qt2Wx5G%2FXissfpDTM7x84aMDV%2BDB%2BKJ7VEJ9PDd3b1kyzqwvd%2FA1%2BpoWK4%2B3JwByJv%2F3BnZq2x19TESLjbv%2B%2B6zMOOy478GOqUBnXEl18KU9ziYv%2Bq7OiczTMM2IeZTl1%2BC6E50aMseHgQlEXdsDJ7K9xi64eKCIOHU%2FVwuFOF4gEBaFtFZ1d9FNPKx6iA%2BxvlyYNn2xS6yP2gQgDMn6KFa4MDJ41PJB5ASQFXhMHHL39lGUAoS67M36lKlQ0RDW%2B21gijq4E5HBRXCg6wTECsf2UppKwdKoL1qA2jv4bxWx59QSMJDwca%2FQFTXQhsk&X-Amz-Signature=e045b74a24d54ed73ca42d55f14587eb0ab7766fa72536d4adc0858262c6d292&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LGQ52U%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCgkDUfkz0PcAnzs01wKtJGOF7A08eWE9cix9qw2K6ZDQIgdfgAOl%2FpYVtttvaewt03sTEj273fejuqM3qin89H3SYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTep9hfXEIHnthbTyrcA9L2tVXcZhzsItGZQvknW1elYPVZBa9ViyZnhEMGErmectOiumXilo7yWxVB4psmlyQkt2NN%2BZVk0uY0zldylNXzP%2F6nDALVoeB16ywrtiKgDjy6HtX9xJp8JE%2Fxb9ttshrRji5YYUHXzZR8qiq09hOB56BjSPHd5PImujwUej38Trgm4tZQhcMEGfJ6gvmeBl7m7OQ52Fu2HFD9akMzikKETxZjxh57EJWxhvBqu%2BxCblJn2dHODPMT87cx6A2DW8DoqNvdEsVOOJctb2HbAkv5VTsI3v5RnmnVO2%2FBBTWSkSCxuInu3CE%2Fmy%2FIPLJON8HLPS0fhWh9X97ahu1H7XrAM1gLb5DiTFFscB0Qc6CZ0Zdm%2F%2F0hTp4okU3owOUcGbcpflMlL92lyaim%2BdUc1p%2Fzh0bEfU07HKfy18p%2BsVqk2pTItZqr%2B6nrWxlT4oJ0OWDd5W%2Fgsa6QVbTHn01iLVIuFgnSPYXFTyguHb%2FXul3tfGlGlZXPm5v65ebU0ZfIX7OCY9Q6gBRNPFdqmB7Qc8gtXpz1gdaXuJIw3Qt2Wx5G%2FXissfpDTM7x84aMDV%2BDB%2BKJ7VEJ9PDd3b1kyzqwvd%2FA1%2BpoWK4%2B3JwByJv%2F3BnZq2x19TESLjbv%2B%2B6zMOOy478GOqUBnXEl18KU9ziYv%2Bq7OiczTMM2IeZTl1%2BC6E50aMseHgQlEXdsDJ7K9xi64eKCIOHU%2FVwuFOF4gEBaFtFZ1d9FNPKx6iA%2BxvlyYNn2xS6yP2gQgDMn6KFa4MDJ41PJB5ASQFXhMHHL39lGUAoS67M36lKlQ0RDW%2B21gijq4E5HBRXCg6wTECsf2UppKwdKoL1qA2jv4bxWx59QSMJDwca%2FQFTXQhsk&X-Amz-Signature=6e72d348b08e139dbc383ecdf3935b280ca494083f961b5f0261f4178b42d8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LGQ52U%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCgkDUfkz0PcAnzs01wKtJGOF7A08eWE9cix9qw2K6ZDQIgdfgAOl%2FpYVtttvaewt03sTEj273fejuqM3qin89H3SYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTep9hfXEIHnthbTyrcA9L2tVXcZhzsItGZQvknW1elYPVZBa9ViyZnhEMGErmectOiumXilo7yWxVB4psmlyQkt2NN%2BZVk0uY0zldylNXzP%2F6nDALVoeB16ywrtiKgDjy6HtX9xJp8JE%2Fxb9ttshrRji5YYUHXzZR8qiq09hOB56BjSPHd5PImujwUej38Trgm4tZQhcMEGfJ6gvmeBl7m7OQ52Fu2HFD9akMzikKETxZjxh57EJWxhvBqu%2BxCblJn2dHODPMT87cx6A2DW8DoqNvdEsVOOJctb2HbAkv5VTsI3v5RnmnVO2%2FBBTWSkSCxuInu3CE%2Fmy%2FIPLJON8HLPS0fhWh9X97ahu1H7XrAM1gLb5DiTFFscB0Qc6CZ0Zdm%2F%2F0hTp4okU3owOUcGbcpflMlL92lyaim%2BdUc1p%2Fzh0bEfU07HKfy18p%2BsVqk2pTItZqr%2B6nrWxlT4oJ0OWDd5W%2Fgsa6QVbTHn01iLVIuFgnSPYXFTyguHb%2FXul3tfGlGlZXPm5v65ebU0ZfIX7OCY9Q6gBRNPFdqmB7Qc8gtXpz1gdaXuJIw3Qt2Wx5G%2FXissfpDTM7x84aMDV%2BDB%2BKJ7VEJ9PDd3b1kyzqwvd%2FA1%2BpoWK4%2B3JwByJv%2F3BnZq2x19TESLjbv%2B%2B6zMOOy478GOqUBnXEl18KU9ziYv%2Bq7OiczTMM2IeZTl1%2BC6E50aMseHgQlEXdsDJ7K9xi64eKCIOHU%2FVwuFOF4gEBaFtFZ1d9FNPKx6iA%2BxvlyYNn2xS6yP2gQgDMn6KFa4MDJ41PJB5ASQFXhMHHL39lGUAoS67M36lKlQ0RDW%2B21gijq4E5HBRXCg6wTECsf2UppKwdKoL1qA2jv4bxWx59QSMJDwca%2FQFTXQhsk&X-Amz-Signature=09cec55b2396ead434ef96894a4c240a28ad505712be09dd010eb0e78aa0c384&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
