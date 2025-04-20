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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5O2776%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFM8%2Fb28GSrl4yt6N7yz9zz4Bag7x3EqYdasGk7jCTL0AiEArqMzEuX2SgykdWoNiO8d3NW30rulKhsKGNXOKCmwqZ0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyJLlM28l24rCsS8CrcA%2FS8jfoE3HLvaoJWQr2fUI5pSvPRseEP6ZNoGagvgn5wxcGSLoua1BRAu5s14pYcf9zCdC%2BeofNWYL2G2ZCG%2FolOWOMufw6mAlT6egqu4DZoxUWzHjPazHsMxxVNHG4C%2B0AHgMnk83Xd0abk9aFRIcNZTg6sVppQG0pzcGzUr6KQR8b%2FNlHl6RvCdPsH8%2BuhDlIsNLe%2BQANkq3A13Ml%2F7X7qhvZ3CIOHfqyfn7rIxkgU7%2F%2BBx%2FSnERwxlmjF5vniSKVcmm7o9j9VDshHqxBLdjoZrDsHtNph9zCKRqxrYLqlcKxXr7HWz9unHMLpQYZO0n%2BiHwOtI9jL0GUtx%2Fw8HO40j80%2BQfOesYE3cocGlCCShCSJlpJ%2BFMjp6kxMSLxY0JcNnCR6i8rV2vh0idh%2Bih3x9FSGzR7SHAhD37RTA16Jgc%2Bvkqd5NmragnOBtsWqvadqZ3t%2FYdb%2BIzd8Nwg9OOJmb70BFmFSnKNSiXBCXPWC2OcVzC3UsmSQcsuqYbg6xwSeeUyqEXq3H86WoAukRwyuoSAFpTBoHXhT9%2FOXvYBJtN2s%2BuaK2ln1Rcd3dvJy33fMMDcPXLyc%2BwKcZnxOwwWW4laVEUZeOxdDzjcnIvE4XS2JNZHMPh6k7%2BX8MIbYlMAGOqUBD09NDvG2ngPkp4OSzRQvpuwjafRMiHteu6D3w%2BYzYOTWMNp1Ka3y7rrq2OmCVcY01DUAnAe3NwCeXRla9AIi8lMh99XFIYvEmWzB35gI4XyfRJrrWD2awiLFGBXi1XePtScKN4lyGaeG%2F2E1rT8xJvru15VkqD892lhctLxyAiMKs6GKf1VrDpIKmq%2FuBjLQrA%2BaKIHu8K64hHhFZ%2FxANCzqYN86&X-Amz-Signature=4131a12a104c94f8a905459ad95a48bf938af8eff17f1a5a92d4cc6ae4db5320&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5O2776%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFM8%2Fb28GSrl4yt6N7yz9zz4Bag7x3EqYdasGk7jCTL0AiEArqMzEuX2SgykdWoNiO8d3NW30rulKhsKGNXOKCmwqZ0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyJLlM28l24rCsS8CrcA%2FS8jfoE3HLvaoJWQr2fUI5pSvPRseEP6ZNoGagvgn5wxcGSLoua1BRAu5s14pYcf9zCdC%2BeofNWYL2G2ZCG%2FolOWOMufw6mAlT6egqu4DZoxUWzHjPazHsMxxVNHG4C%2B0AHgMnk83Xd0abk9aFRIcNZTg6sVppQG0pzcGzUr6KQR8b%2FNlHl6RvCdPsH8%2BuhDlIsNLe%2BQANkq3A13Ml%2F7X7qhvZ3CIOHfqyfn7rIxkgU7%2F%2BBx%2FSnERwxlmjF5vniSKVcmm7o9j9VDshHqxBLdjoZrDsHtNph9zCKRqxrYLqlcKxXr7HWz9unHMLpQYZO0n%2BiHwOtI9jL0GUtx%2Fw8HO40j80%2BQfOesYE3cocGlCCShCSJlpJ%2BFMjp6kxMSLxY0JcNnCR6i8rV2vh0idh%2Bih3x9FSGzR7SHAhD37RTA16Jgc%2Bvkqd5NmragnOBtsWqvadqZ3t%2FYdb%2BIzd8Nwg9OOJmb70BFmFSnKNSiXBCXPWC2OcVzC3UsmSQcsuqYbg6xwSeeUyqEXq3H86WoAukRwyuoSAFpTBoHXhT9%2FOXvYBJtN2s%2BuaK2ln1Rcd3dvJy33fMMDcPXLyc%2BwKcZnxOwwWW4laVEUZeOxdDzjcnIvE4XS2JNZHMPh6k7%2BX8MIbYlMAGOqUBD09NDvG2ngPkp4OSzRQvpuwjafRMiHteu6D3w%2BYzYOTWMNp1Ka3y7rrq2OmCVcY01DUAnAe3NwCeXRla9AIi8lMh99XFIYvEmWzB35gI4XyfRJrrWD2awiLFGBXi1XePtScKN4lyGaeG%2F2E1rT8xJvru15VkqD892lhctLxyAiMKs6GKf1VrDpIKmq%2FuBjLQrA%2BaKIHu8K64hHhFZ%2FxANCzqYN86&X-Amz-Signature=11b855a01acbe7c7f4533f3a2d76d0682ba99dc54db5f378384d73628fc12d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5O2776%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFM8%2Fb28GSrl4yt6N7yz9zz4Bag7x3EqYdasGk7jCTL0AiEArqMzEuX2SgykdWoNiO8d3NW30rulKhsKGNXOKCmwqZ0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyJLlM28l24rCsS8CrcA%2FS8jfoE3HLvaoJWQr2fUI5pSvPRseEP6ZNoGagvgn5wxcGSLoua1BRAu5s14pYcf9zCdC%2BeofNWYL2G2ZCG%2FolOWOMufw6mAlT6egqu4DZoxUWzHjPazHsMxxVNHG4C%2B0AHgMnk83Xd0abk9aFRIcNZTg6sVppQG0pzcGzUr6KQR8b%2FNlHl6RvCdPsH8%2BuhDlIsNLe%2BQANkq3A13Ml%2F7X7qhvZ3CIOHfqyfn7rIxkgU7%2F%2BBx%2FSnERwxlmjF5vniSKVcmm7o9j9VDshHqxBLdjoZrDsHtNph9zCKRqxrYLqlcKxXr7HWz9unHMLpQYZO0n%2BiHwOtI9jL0GUtx%2Fw8HO40j80%2BQfOesYE3cocGlCCShCSJlpJ%2BFMjp6kxMSLxY0JcNnCR6i8rV2vh0idh%2Bih3x9FSGzR7SHAhD37RTA16Jgc%2Bvkqd5NmragnOBtsWqvadqZ3t%2FYdb%2BIzd8Nwg9OOJmb70BFmFSnKNSiXBCXPWC2OcVzC3UsmSQcsuqYbg6xwSeeUyqEXq3H86WoAukRwyuoSAFpTBoHXhT9%2FOXvYBJtN2s%2BuaK2ln1Rcd3dvJy33fMMDcPXLyc%2BwKcZnxOwwWW4laVEUZeOxdDzjcnIvE4XS2JNZHMPh6k7%2BX8MIbYlMAGOqUBD09NDvG2ngPkp4OSzRQvpuwjafRMiHteu6D3w%2BYzYOTWMNp1Ka3y7rrq2OmCVcY01DUAnAe3NwCeXRla9AIi8lMh99XFIYvEmWzB35gI4XyfRJrrWD2awiLFGBXi1XePtScKN4lyGaeG%2F2E1rT8xJvru15VkqD892lhctLxyAiMKs6GKf1VrDpIKmq%2FuBjLQrA%2BaKIHu8K64hHhFZ%2FxANCzqYN86&X-Amz-Signature=40fc20632365535c50e1c13c28afd4fb80a69abc85f3bd6e06fa92feb611ffb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5O2776%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFM8%2Fb28GSrl4yt6N7yz9zz4Bag7x3EqYdasGk7jCTL0AiEArqMzEuX2SgykdWoNiO8d3NW30rulKhsKGNXOKCmwqZ0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyJLlM28l24rCsS8CrcA%2FS8jfoE3HLvaoJWQr2fUI5pSvPRseEP6ZNoGagvgn5wxcGSLoua1BRAu5s14pYcf9zCdC%2BeofNWYL2G2ZCG%2FolOWOMufw6mAlT6egqu4DZoxUWzHjPazHsMxxVNHG4C%2B0AHgMnk83Xd0abk9aFRIcNZTg6sVppQG0pzcGzUr6KQR8b%2FNlHl6RvCdPsH8%2BuhDlIsNLe%2BQANkq3A13Ml%2F7X7qhvZ3CIOHfqyfn7rIxkgU7%2F%2BBx%2FSnERwxlmjF5vniSKVcmm7o9j9VDshHqxBLdjoZrDsHtNph9zCKRqxrYLqlcKxXr7HWz9unHMLpQYZO0n%2BiHwOtI9jL0GUtx%2Fw8HO40j80%2BQfOesYE3cocGlCCShCSJlpJ%2BFMjp6kxMSLxY0JcNnCR6i8rV2vh0idh%2Bih3x9FSGzR7SHAhD37RTA16Jgc%2Bvkqd5NmragnOBtsWqvadqZ3t%2FYdb%2BIzd8Nwg9OOJmb70BFmFSnKNSiXBCXPWC2OcVzC3UsmSQcsuqYbg6xwSeeUyqEXq3H86WoAukRwyuoSAFpTBoHXhT9%2FOXvYBJtN2s%2BuaK2ln1Rcd3dvJy33fMMDcPXLyc%2BwKcZnxOwwWW4laVEUZeOxdDzjcnIvE4XS2JNZHMPh6k7%2BX8MIbYlMAGOqUBD09NDvG2ngPkp4OSzRQvpuwjafRMiHteu6D3w%2BYzYOTWMNp1Ka3y7rrq2OmCVcY01DUAnAe3NwCeXRla9AIi8lMh99XFIYvEmWzB35gI4XyfRJrrWD2awiLFGBXi1XePtScKN4lyGaeG%2F2E1rT8xJvru15VkqD892lhctLxyAiMKs6GKf1VrDpIKmq%2FuBjLQrA%2BaKIHu8K64hHhFZ%2FxANCzqYN86&X-Amz-Signature=273061873cd1dd94ef02304d0a0011034bed0cd35bafd415878018e35cceadff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5O2776%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFM8%2Fb28GSrl4yt6N7yz9zz4Bag7x3EqYdasGk7jCTL0AiEArqMzEuX2SgykdWoNiO8d3NW30rulKhsKGNXOKCmwqZ0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyJLlM28l24rCsS8CrcA%2FS8jfoE3HLvaoJWQr2fUI5pSvPRseEP6ZNoGagvgn5wxcGSLoua1BRAu5s14pYcf9zCdC%2BeofNWYL2G2ZCG%2FolOWOMufw6mAlT6egqu4DZoxUWzHjPazHsMxxVNHG4C%2B0AHgMnk83Xd0abk9aFRIcNZTg6sVppQG0pzcGzUr6KQR8b%2FNlHl6RvCdPsH8%2BuhDlIsNLe%2BQANkq3A13Ml%2F7X7qhvZ3CIOHfqyfn7rIxkgU7%2F%2BBx%2FSnERwxlmjF5vniSKVcmm7o9j9VDshHqxBLdjoZrDsHtNph9zCKRqxrYLqlcKxXr7HWz9unHMLpQYZO0n%2BiHwOtI9jL0GUtx%2Fw8HO40j80%2BQfOesYE3cocGlCCShCSJlpJ%2BFMjp6kxMSLxY0JcNnCR6i8rV2vh0idh%2Bih3x9FSGzR7SHAhD37RTA16Jgc%2Bvkqd5NmragnOBtsWqvadqZ3t%2FYdb%2BIzd8Nwg9OOJmb70BFmFSnKNSiXBCXPWC2OcVzC3UsmSQcsuqYbg6xwSeeUyqEXq3H86WoAukRwyuoSAFpTBoHXhT9%2FOXvYBJtN2s%2BuaK2ln1Rcd3dvJy33fMMDcPXLyc%2BwKcZnxOwwWW4laVEUZeOxdDzjcnIvE4XS2JNZHMPh6k7%2BX8MIbYlMAGOqUBD09NDvG2ngPkp4OSzRQvpuwjafRMiHteu6D3w%2BYzYOTWMNp1Ka3y7rrq2OmCVcY01DUAnAe3NwCeXRla9AIi8lMh99XFIYvEmWzB35gI4XyfRJrrWD2awiLFGBXi1XePtScKN4lyGaeG%2F2E1rT8xJvru15VkqD892lhctLxyAiMKs6GKf1VrDpIKmq%2FuBjLQrA%2BaKIHu8K64hHhFZ%2FxANCzqYN86&X-Amz-Signature=a83c44021118f9601cf3708e6d56fe0f5d06c1bcaaaa99163163f4a22468d0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
