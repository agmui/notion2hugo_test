---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHU4JHM4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMemGMAuM4q6uGvtxHl2ddYtAJk2w6wXVhRfrCH0mJrgIhALbPKSfZZK%2F9YB7qXHuzDgwEf2LBZbVLhgICPNz8H%2B4zKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxye1LUFvLC7%2FucXLoq3ANESB0MmO%2B2fkyo6EH5w0t73ahW7NPgkCSo%2FUzVYjmN%2BWVcTWWJ85CuC44nx6Z2%2BWxkJ0QsaKeh8yxIgcr%2F6hDr3K078xxlwdgkQks5dFxPn5MR6POCsn%2BWye1DIqjxmyTlkgKv2LgKu8CcA87HGXdY5SvcNEnLLVo7AByVPDkTgB7BjX2vFdDqS0MRpfsahAQgC8wK4Qd7e6P6bHfsA95wq7zu2POHv9s17i%2BxjT5MQAnIIUDk5ZTtwkpqSoTpmUiAvm6orRbBr5KhQSL27IQ5E4n95WSaLDnfGcatMf6lwamB0hyWqsdpD7CFVs5hawtiTK2n856QuAUv9edVHTwsm07TMkaJgvg1PpSEaJ16DReqHoazL8sfK4%2Fo%2FKXFiO7ebLeZgteBf70gi4PKWeUAFWaImwv5tlarjRUtdAVTQbNpPE9eaJ%2FZJB1vIxMSd25rxOqJ0OuwquTX%2BuKVgNUazpq6by%2FAqFHQT5CHdydOF8bVmX1oFtUF1%2Fgt1C4UhDlVrMHrgrEFYXBqcKUfpE8cT3khW6mdAtkJUJaf%2FvRxxkfLWujOyD1dk3jQA%2Brg2HalL58pOn5KFUxQu1WLckqkD9rLaTIvaDT1F29fKaNVqgjsiinm2sLmwKxbPjCBmLXIBjqkAVEAH%2FRgBCCyYGhLTQ2Ttbb7fIhV2KV1qNeiBR2XdUiBkHS02MzX6kK4MFNqLLNVTQ4Y7zsT%2FoYVxgQHEac%2B0W9kojRaLrn0A97HTP9lAxZUwlKEXq0YmdF45fIU%2BAnhzAhEQ8IffA8KlG%2FiYp6Df7CKJzeG3442WSWcnv3%2B3Axl9oF%2F3sCK4gCwFJ71ocrx6JNLGIUHc2XZw%2BmiXR3WCAkMuuBl&X-Amz-Signature=aec8f790228675c5c8c045d48f6f4bfa9ec153d5ba4160178f84fa66f0975e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHU4JHM4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMemGMAuM4q6uGvtxHl2ddYtAJk2w6wXVhRfrCH0mJrgIhALbPKSfZZK%2F9YB7qXHuzDgwEf2LBZbVLhgICPNz8H%2B4zKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxye1LUFvLC7%2FucXLoq3ANESB0MmO%2B2fkyo6EH5w0t73ahW7NPgkCSo%2FUzVYjmN%2BWVcTWWJ85CuC44nx6Z2%2BWxkJ0QsaKeh8yxIgcr%2F6hDr3K078xxlwdgkQks5dFxPn5MR6POCsn%2BWye1DIqjxmyTlkgKv2LgKu8CcA87HGXdY5SvcNEnLLVo7AByVPDkTgB7BjX2vFdDqS0MRpfsahAQgC8wK4Qd7e6P6bHfsA95wq7zu2POHv9s17i%2BxjT5MQAnIIUDk5ZTtwkpqSoTpmUiAvm6orRbBr5KhQSL27IQ5E4n95WSaLDnfGcatMf6lwamB0hyWqsdpD7CFVs5hawtiTK2n856QuAUv9edVHTwsm07TMkaJgvg1PpSEaJ16DReqHoazL8sfK4%2Fo%2FKXFiO7ebLeZgteBf70gi4PKWeUAFWaImwv5tlarjRUtdAVTQbNpPE9eaJ%2FZJB1vIxMSd25rxOqJ0OuwquTX%2BuKVgNUazpq6by%2FAqFHQT5CHdydOF8bVmX1oFtUF1%2Fgt1C4UhDlVrMHrgrEFYXBqcKUfpE8cT3khW6mdAtkJUJaf%2FvRxxkfLWujOyD1dk3jQA%2Brg2HalL58pOn5KFUxQu1WLckqkD9rLaTIvaDT1F29fKaNVqgjsiinm2sLmwKxbPjCBmLXIBjqkAVEAH%2FRgBCCyYGhLTQ2Ttbb7fIhV2KV1qNeiBR2XdUiBkHS02MzX6kK4MFNqLLNVTQ4Y7zsT%2FoYVxgQHEac%2B0W9kojRaLrn0A97HTP9lAxZUwlKEXq0YmdF45fIU%2BAnhzAhEQ8IffA8KlG%2FiYp6Df7CKJzeG3442WSWcnv3%2B3Axl9oF%2F3sCK4gCwFJ71ocrx6JNLGIUHc2XZw%2BmiXR3WCAkMuuBl&X-Amz-Signature=51a4ded318bb44d902332bedd9e44d3eed89c11e1c9dd7e760247d740a6ce457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHU4JHM4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMemGMAuM4q6uGvtxHl2ddYtAJk2w6wXVhRfrCH0mJrgIhALbPKSfZZK%2F9YB7qXHuzDgwEf2LBZbVLhgICPNz8H%2B4zKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxye1LUFvLC7%2FucXLoq3ANESB0MmO%2B2fkyo6EH5w0t73ahW7NPgkCSo%2FUzVYjmN%2BWVcTWWJ85CuC44nx6Z2%2BWxkJ0QsaKeh8yxIgcr%2F6hDr3K078xxlwdgkQks5dFxPn5MR6POCsn%2BWye1DIqjxmyTlkgKv2LgKu8CcA87HGXdY5SvcNEnLLVo7AByVPDkTgB7BjX2vFdDqS0MRpfsahAQgC8wK4Qd7e6P6bHfsA95wq7zu2POHv9s17i%2BxjT5MQAnIIUDk5ZTtwkpqSoTpmUiAvm6orRbBr5KhQSL27IQ5E4n95WSaLDnfGcatMf6lwamB0hyWqsdpD7CFVs5hawtiTK2n856QuAUv9edVHTwsm07TMkaJgvg1PpSEaJ16DReqHoazL8sfK4%2Fo%2FKXFiO7ebLeZgteBf70gi4PKWeUAFWaImwv5tlarjRUtdAVTQbNpPE9eaJ%2FZJB1vIxMSd25rxOqJ0OuwquTX%2BuKVgNUazpq6by%2FAqFHQT5CHdydOF8bVmX1oFtUF1%2Fgt1C4UhDlVrMHrgrEFYXBqcKUfpE8cT3khW6mdAtkJUJaf%2FvRxxkfLWujOyD1dk3jQA%2Brg2HalL58pOn5KFUxQu1WLckqkD9rLaTIvaDT1F29fKaNVqgjsiinm2sLmwKxbPjCBmLXIBjqkAVEAH%2FRgBCCyYGhLTQ2Ttbb7fIhV2KV1qNeiBR2XdUiBkHS02MzX6kK4MFNqLLNVTQ4Y7zsT%2FoYVxgQHEac%2B0W9kojRaLrn0A97HTP9lAxZUwlKEXq0YmdF45fIU%2BAnhzAhEQ8IffA8KlG%2FiYp6Df7CKJzeG3442WSWcnv3%2B3Axl9oF%2F3sCK4gCwFJ71ocrx6JNLGIUHc2XZw%2BmiXR3WCAkMuuBl&X-Amz-Signature=91322ff121174528d8b9174ed78b155ca3d9c4d11ed9277d5926122f813f1b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHU4JHM4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMemGMAuM4q6uGvtxHl2ddYtAJk2w6wXVhRfrCH0mJrgIhALbPKSfZZK%2F9YB7qXHuzDgwEf2LBZbVLhgICPNz8H%2B4zKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxye1LUFvLC7%2FucXLoq3ANESB0MmO%2B2fkyo6EH5w0t73ahW7NPgkCSo%2FUzVYjmN%2BWVcTWWJ85CuC44nx6Z2%2BWxkJ0QsaKeh8yxIgcr%2F6hDr3K078xxlwdgkQks5dFxPn5MR6POCsn%2BWye1DIqjxmyTlkgKv2LgKu8CcA87HGXdY5SvcNEnLLVo7AByVPDkTgB7BjX2vFdDqS0MRpfsahAQgC8wK4Qd7e6P6bHfsA95wq7zu2POHv9s17i%2BxjT5MQAnIIUDk5ZTtwkpqSoTpmUiAvm6orRbBr5KhQSL27IQ5E4n95WSaLDnfGcatMf6lwamB0hyWqsdpD7CFVs5hawtiTK2n856QuAUv9edVHTwsm07TMkaJgvg1PpSEaJ16DReqHoazL8sfK4%2Fo%2FKXFiO7ebLeZgteBf70gi4PKWeUAFWaImwv5tlarjRUtdAVTQbNpPE9eaJ%2FZJB1vIxMSd25rxOqJ0OuwquTX%2BuKVgNUazpq6by%2FAqFHQT5CHdydOF8bVmX1oFtUF1%2Fgt1C4UhDlVrMHrgrEFYXBqcKUfpE8cT3khW6mdAtkJUJaf%2FvRxxkfLWujOyD1dk3jQA%2Brg2HalL58pOn5KFUxQu1WLckqkD9rLaTIvaDT1F29fKaNVqgjsiinm2sLmwKxbPjCBmLXIBjqkAVEAH%2FRgBCCyYGhLTQ2Ttbb7fIhV2KV1qNeiBR2XdUiBkHS02MzX6kK4MFNqLLNVTQ4Y7zsT%2FoYVxgQHEac%2B0W9kojRaLrn0A97HTP9lAxZUwlKEXq0YmdF45fIU%2BAnhzAhEQ8IffA8KlG%2FiYp6Df7CKJzeG3442WSWcnv3%2B3Axl9oF%2F3sCK4gCwFJ71ocrx6JNLGIUHc2XZw%2BmiXR3WCAkMuuBl&X-Amz-Signature=c0f2c26bbe61de66f3b98dd8f4b42532be7e3c4f2af7a119983e51c89db1abb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHU4JHM4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMemGMAuM4q6uGvtxHl2ddYtAJk2w6wXVhRfrCH0mJrgIhALbPKSfZZK%2F9YB7qXHuzDgwEf2LBZbVLhgICPNz8H%2B4zKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxye1LUFvLC7%2FucXLoq3ANESB0MmO%2B2fkyo6EH5w0t73ahW7NPgkCSo%2FUzVYjmN%2BWVcTWWJ85CuC44nx6Z2%2BWxkJ0QsaKeh8yxIgcr%2F6hDr3K078xxlwdgkQks5dFxPn5MR6POCsn%2BWye1DIqjxmyTlkgKv2LgKu8CcA87HGXdY5SvcNEnLLVo7AByVPDkTgB7BjX2vFdDqS0MRpfsahAQgC8wK4Qd7e6P6bHfsA95wq7zu2POHv9s17i%2BxjT5MQAnIIUDk5ZTtwkpqSoTpmUiAvm6orRbBr5KhQSL27IQ5E4n95WSaLDnfGcatMf6lwamB0hyWqsdpD7CFVs5hawtiTK2n856QuAUv9edVHTwsm07TMkaJgvg1PpSEaJ16DReqHoazL8sfK4%2Fo%2FKXFiO7ebLeZgteBf70gi4PKWeUAFWaImwv5tlarjRUtdAVTQbNpPE9eaJ%2FZJB1vIxMSd25rxOqJ0OuwquTX%2BuKVgNUazpq6by%2FAqFHQT5CHdydOF8bVmX1oFtUF1%2Fgt1C4UhDlVrMHrgrEFYXBqcKUfpE8cT3khW6mdAtkJUJaf%2FvRxxkfLWujOyD1dk3jQA%2Brg2HalL58pOn5KFUxQu1WLckqkD9rLaTIvaDT1F29fKaNVqgjsiinm2sLmwKxbPjCBmLXIBjqkAVEAH%2FRgBCCyYGhLTQ2Ttbb7fIhV2KV1qNeiBR2XdUiBkHS02MzX6kK4MFNqLLNVTQ4Y7zsT%2FoYVxgQHEac%2B0W9kojRaLrn0A97HTP9lAxZUwlKEXq0YmdF45fIU%2BAnhzAhEQ8IffA8KlG%2FiYp6Df7CKJzeG3442WSWcnv3%2B3Axl9oF%2F3sCK4gCwFJ71ocrx6JNLGIUHc2XZw%2BmiXR3WCAkMuuBl&X-Amz-Signature=54bda9717fd6f141ca543673fa8b3826582d6c91b55ac362d76fbecf1d7c84f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
