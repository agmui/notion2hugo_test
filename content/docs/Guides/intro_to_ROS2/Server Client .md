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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KI5LE2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDpP4hj4HPig%2FSWXgCwewfQe2sGTORkXxpvX7%2BtxT3R%2FAiBqaF9WLVnfkwJe0OqR%2BnzW3TCrDSioZuQQxO4Hni32yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMju%2B36NhsqNd15KNNKtwDXyNZbXqyhyy4jeM1sNqZx3Sd7s9gmU9DPMlqhCSiarmp%2BX1jdXXSTllEvUSScVV1xvpnVH3F4Nf%2Fw1PTa2n8ztK8pASNdEGWROTvnGft1YH4CMaJS1LotSJqIDQstR11%2FpRSIDyjYiJcAqH557IhHu%2Fyn8cCwtBFW9cuJ8SDaSKR%2BoT6ncyH8gaqlQbhpU6RHTEJZEcSJcQuRng3yyBGIjySA9UnX44gaR6b4f4FiryRJVCAoHqsnLF5qzrDpQYOOM4BihRWqDBnHk%2BXWuUrSlU62ti2fUq0dLtQVphAiZhEWu0rx2WDjLlNVF%2Bfqrcid6DeujGbvrA4L3hwM0M70JAunxM5LV1fnAmIJjGsJRpC82wkrN1FAl7HBDDYne8rhrlQNTqCe10v7WALZtMI2LWBDca6%2Bzep5%2FWkBYqWw%2F20MRYL0sdYxhBzvWI%2FXFcnIvmQ%2BRda810VxYLVKhPgvUxT87TcBomli0JbFr8VQRkDhs9UIzD3%2FKRp62Vis6qz4xzp1aFx0ko4WN5rugRO9dMOJCViJWACjtY1%2BOrQSDL2Z9NZWkTlgeKj%2FdV%2BrjMv31a6htSUkFI5JoxYv4MNZG7TvhVdeoKIqdAeNXflU0sNx5ZSONWCYAJcH30wnr3rvgY6pgHSuiKf%2FZlsRy%2FgjmZPQUwzr5uehOTFem7D5TVsINlgb8TD70THG%2FC6S3EYcGMgwAqhbFmskDBDd0VW%2FC3fnYl5pUgEFli0b3JQ%2Bp2urqeFEajzxEJPfcEeMV9Bg%2BJew%2BCaw8z3600gVxlZ6FBZJ%2FGf2%2Bu%2BLbNjRXIri3GgLUVQ5T33MSLaWouUw0Q1iCSsrSFTvfmoUsxRIgmIDMjAOTQjTaLQKkvg&X-Amz-Signature=7b3aff19034390c6546004febdb606be1fcb828166799acb6c00d83c200f5812&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KI5LE2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDpP4hj4HPig%2FSWXgCwewfQe2sGTORkXxpvX7%2BtxT3R%2FAiBqaF9WLVnfkwJe0OqR%2BnzW3TCrDSioZuQQxO4Hni32yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMju%2B36NhsqNd15KNNKtwDXyNZbXqyhyy4jeM1sNqZx3Sd7s9gmU9DPMlqhCSiarmp%2BX1jdXXSTllEvUSScVV1xvpnVH3F4Nf%2Fw1PTa2n8ztK8pASNdEGWROTvnGft1YH4CMaJS1LotSJqIDQstR11%2FpRSIDyjYiJcAqH557IhHu%2Fyn8cCwtBFW9cuJ8SDaSKR%2BoT6ncyH8gaqlQbhpU6RHTEJZEcSJcQuRng3yyBGIjySA9UnX44gaR6b4f4FiryRJVCAoHqsnLF5qzrDpQYOOM4BihRWqDBnHk%2BXWuUrSlU62ti2fUq0dLtQVphAiZhEWu0rx2WDjLlNVF%2Bfqrcid6DeujGbvrA4L3hwM0M70JAunxM5LV1fnAmIJjGsJRpC82wkrN1FAl7HBDDYne8rhrlQNTqCe10v7WALZtMI2LWBDca6%2Bzep5%2FWkBYqWw%2F20MRYL0sdYxhBzvWI%2FXFcnIvmQ%2BRda810VxYLVKhPgvUxT87TcBomli0JbFr8VQRkDhs9UIzD3%2FKRp62Vis6qz4xzp1aFx0ko4WN5rugRO9dMOJCViJWACjtY1%2BOrQSDL2Z9NZWkTlgeKj%2FdV%2BrjMv31a6htSUkFI5JoxYv4MNZG7TvhVdeoKIqdAeNXflU0sNx5ZSONWCYAJcH30wnr3rvgY6pgHSuiKf%2FZlsRy%2FgjmZPQUwzr5uehOTFem7D5TVsINlgb8TD70THG%2FC6S3EYcGMgwAqhbFmskDBDd0VW%2FC3fnYl5pUgEFli0b3JQ%2Bp2urqeFEajzxEJPfcEeMV9Bg%2BJew%2BCaw8z3600gVxlZ6FBZJ%2FGf2%2Bu%2BLbNjRXIri3GgLUVQ5T33MSLaWouUw0Q1iCSsrSFTvfmoUsxRIgmIDMjAOTQjTaLQKkvg&X-Amz-Signature=3f6436699bd5def2f30058ef6e8265477495c59f15f09231d1114098461b7899&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KI5LE2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDpP4hj4HPig%2FSWXgCwewfQe2sGTORkXxpvX7%2BtxT3R%2FAiBqaF9WLVnfkwJe0OqR%2BnzW3TCrDSioZuQQxO4Hni32yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMju%2B36NhsqNd15KNNKtwDXyNZbXqyhyy4jeM1sNqZx3Sd7s9gmU9DPMlqhCSiarmp%2BX1jdXXSTllEvUSScVV1xvpnVH3F4Nf%2Fw1PTa2n8ztK8pASNdEGWROTvnGft1YH4CMaJS1LotSJqIDQstR11%2FpRSIDyjYiJcAqH557IhHu%2Fyn8cCwtBFW9cuJ8SDaSKR%2BoT6ncyH8gaqlQbhpU6RHTEJZEcSJcQuRng3yyBGIjySA9UnX44gaR6b4f4FiryRJVCAoHqsnLF5qzrDpQYOOM4BihRWqDBnHk%2BXWuUrSlU62ti2fUq0dLtQVphAiZhEWu0rx2WDjLlNVF%2Bfqrcid6DeujGbvrA4L3hwM0M70JAunxM5LV1fnAmIJjGsJRpC82wkrN1FAl7HBDDYne8rhrlQNTqCe10v7WALZtMI2LWBDca6%2Bzep5%2FWkBYqWw%2F20MRYL0sdYxhBzvWI%2FXFcnIvmQ%2BRda810VxYLVKhPgvUxT87TcBomli0JbFr8VQRkDhs9UIzD3%2FKRp62Vis6qz4xzp1aFx0ko4WN5rugRO9dMOJCViJWACjtY1%2BOrQSDL2Z9NZWkTlgeKj%2FdV%2BrjMv31a6htSUkFI5JoxYv4MNZG7TvhVdeoKIqdAeNXflU0sNx5ZSONWCYAJcH30wnr3rvgY6pgHSuiKf%2FZlsRy%2FgjmZPQUwzr5uehOTFem7D5TVsINlgb8TD70THG%2FC6S3EYcGMgwAqhbFmskDBDd0VW%2FC3fnYl5pUgEFli0b3JQ%2Bp2urqeFEajzxEJPfcEeMV9Bg%2BJew%2BCaw8z3600gVxlZ6FBZJ%2FGf2%2Bu%2BLbNjRXIri3GgLUVQ5T33MSLaWouUw0Q1iCSsrSFTvfmoUsxRIgmIDMjAOTQjTaLQKkvg&X-Amz-Signature=a5856358ac0babf04fe9ebd3b4272cabce1af8ccbee59986fb5d762920835d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KI5LE2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDpP4hj4HPig%2FSWXgCwewfQe2sGTORkXxpvX7%2BtxT3R%2FAiBqaF9WLVnfkwJe0OqR%2BnzW3TCrDSioZuQQxO4Hni32yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMju%2B36NhsqNd15KNNKtwDXyNZbXqyhyy4jeM1sNqZx3Sd7s9gmU9DPMlqhCSiarmp%2BX1jdXXSTllEvUSScVV1xvpnVH3F4Nf%2Fw1PTa2n8ztK8pASNdEGWROTvnGft1YH4CMaJS1LotSJqIDQstR11%2FpRSIDyjYiJcAqH557IhHu%2Fyn8cCwtBFW9cuJ8SDaSKR%2BoT6ncyH8gaqlQbhpU6RHTEJZEcSJcQuRng3yyBGIjySA9UnX44gaR6b4f4FiryRJVCAoHqsnLF5qzrDpQYOOM4BihRWqDBnHk%2BXWuUrSlU62ti2fUq0dLtQVphAiZhEWu0rx2WDjLlNVF%2Bfqrcid6DeujGbvrA4L3hwM0M70JAunxM5LV1fnAmIJjGsJRpC82wkrN1FAl7HBDDYne8rhrlQNTqCe10v7WALZtMI2LWBDca6%2Bzep5%2FWkBYqWw%2F20MRYL0sdYxhBzvWI%2FXFcnIvmQ%2BRda810VxYLVKhPgvUxT87TcBomli0JbFr8VQRkDhs9UIzD3%2FKRp62Vis6qz4xzp1aFx0ko4WN5rugRO9dMOJCViJWACjtY1%2BOrQSDL2Z9NZWkTlgeKj%2FdV%2BrjMv31a6htSUkFI5JoxYv4MNZG7TvhVdeoKIqdAeNXflU0sNx5ZSONWCYAJcH30wnr3rvgY6pgHSuiKf%2FZlsRy%2FgjmZPQUwzr5uehOTFem7D5TVsINlgb8TD70THG%2FC6S3EYcGMgwAqhbFmskDBDd0VW%2FC3fnYl5pUgEFli0b3JQ%2Bp2urqeFEajzxEJPfcEeMV9Bg%2BJew%2BCaw8z3600gVxlZ6FBZJ%2FGf2%2Bu%2BLbNjRXIri3GgLUVQ5T33MSLaWouUw0Q1iCSsrSFTvfmoUsxRIgmIDMjAOTQjTaLQKkvg&X-Amz-Signature=5d77254ecc6ec4c2a96105107a949cc5fe7bce0cc429ae57df50959697e2b8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KI5LE2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDpP4hj4HPig%2FSWXgCwewfQe2sGTORkXxpvX7%2BtxT3R%2FAiBqaF9WLVnfkwJe0OqR%2BnzW3TCrDSioZuQQxO4Hni32yyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMju%2B36NhsqNd15KNNKtwDXyNZbXqyhyy4jeM1sNqZx3Sd7s9gmU9DPMlqhCSiarmp%2BX1jdXXSTllEvUSScVV1xvpnVH3F4Nf%2Fw1PTa2n8ztK8pASNdEGWROTvnGft1YH4CMaJS1LotSJqIDQstR11%2FpRSIDyjYiJcAqH557IhHu%2Fyn8cCwtBFW9cuJ8SDaSKR%2BoT6ncyH8gaqlQbhpU6RHTEJZEcSJcQuRng3yyBGIjySA9UnX44gaR6b4f4FiryRJVCAoHqsnLF5qzrDpQYOOM4BihRWqDBnHk%2BXWuUrSlU62ti2fUq0dLtQVphAiZhEWu0rx2WDjLlNVF%2Bfqrcid6DeujGbvrA4L3hwM0M70JAunxM5LV1fnAmIJjGsJRpC82wkrN1FAl7HBDDYne8rhrlQNTqCe10v7WALZtMI2LWBDca6%2Bzep5%2FWkBYqWw%2F20MRYL0sdYxhBzvWI%2FXFcnIvmQ%2BRda810VxYLVKhPgvUxT87TcBomli0JbFr8VQRkDhs9UIzD3%2FKRp62Vis6qz4xzp1aFx0ko4WN5rugRO9dMOJCViJWACjtY1%2BOrQSDL2Z9NZWkTlgeKj%2FdV%2BrjMv31a6htSUkFI5JoxYv4MNZG7TvhVdeoKIqdAeNXflU0sNx5ZSONWCYAJcH30wnr3rvgY6pgHSuiKf%2FZlsRy%2FgjmZPQUwzr5uehOTFem7D5TVsINlgb8TD70THG%2FC6S3EYcGMgwAqhbFmskDBDd0VW%2FC3fnYl5pUgEFli0b3JQ%2Bp2urqeFEajzxEJPfcEeMV9Bg%2BJew%2BCaw8z3600gVxlZ6FBZJ%2FGf2%2Bu%2BLbNjRXIri3GgLUVQ5T33MSLaWouUw0Q1iCSsrSFTvfmoUsxRIgmIDMjAOTQjTaLQKkvg&X-Amz-Signature=c729e5234a5fb8e37865dfc2c14d83a08222c3a83a01d1349cea98458210fd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
