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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UHBI6Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC5H7UsDCRFFmMCLrSkhnmost15ek8tU1L3%2Bwqj8ki9UQIhANY4ZB1RsXywclEwdbKpxJDUxeU7PxYqmmW5VpP9LLoBKv8DCF8QABoMNjM3NDIzMTgzODA1IgxzYEL5q2MVlTVEWEsq3APcg8Tpr3OMVJSSX1lkcqc46V8KwDAhYxPKVJ6saCGKQ9tKx2z8H48Tg%2BWG1IRwlPEwjv0u%2F3Db%2B50e7WSpCQNnAcNM3J8CFbTEcwejDgpx6i9NR%2BrUdiUW885cRj%2BO2NUP8Ii2iFhmi9cmvS9HfAgqoqyt%2B6loaMgqzMFbuH1xgiubDF9lJ%2FZFF3xHw4s6DmHsRTX1YlF6YfqGHQiYM6Hi70LyMgDphBEsksBxtH1euaAs3D9LRHnfNZ7P60%2BwPgMt97Bw3su6DXM1dROsFruDV8OCpmkSMjra8uSb5pDRaVC4KsIKKG5zCTfTBqChA%2F3VV%2BqsKIUsruU3E0kQ9z0rp%2BD%2F1ZU5Z1Bmlqf6yQeqq%2B8ZP%2FPEsi01goJJQ3ZN3XZkWA%2F2iDeVoOuceMSO6o6tC%2FCN8q3eyZZ5ipjs5g7f1hNBbBDT59A8syiH5MzpnzTTJS5Cpu5NUpln0H3l8YUgHVd%2FLF99qMo58%2BbbOKefECq3fRnWUSipPkkHfGbWjFayq7W9Zr%2BvsNdJXiUc%2BfZvGYE924rqPRZXuiEILVn8QifG4nY22flXGUr%2FEmmB%2BkHgnh1LdkPiaRzqINfs4IWYnT9ZK7Yw1qyB7oSMkEwLLvdRyfPRKn%2Fhl7LGjzDqycDCBjqkAQZ%2Fdk%2Byqb%2B%2BOvk4sPldKZbnFxysTYh%2BpcZshUb2TIOjAmJkEe0ofxeV4OCPkv3rwMpHhxjcMY3k88aH721np5%2B5X7qvv7tyuA7yVTfSc2m%2F29pFf8mkJ56TsiNVIZCWymG89YQody0MdN3l%2Ft3VL4rg0SONYJZddBKpPOl3WJ%2BDAC1jgR4X%2BeNzr7Qp4fOZhgsfCJMyzAd3bNFLf%2FnGkwTVvVTk&X-Amz-Signature=5093a331c99d3478c9127387a433d3b73a83814beeb321959a7d10d2067a631d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UHBI6Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC5H7UsDCRFFmMCLrSkhnmost15ek8tU1L3%2Bwqj8ki9UQIhANY4ZB1RsXywclEwdbKpxJDUxeU7PxYqmmW5VpP9LLoBKv8DCF8QABoMNjM3NDIzMTgzODA1IgxzYEL5q2MVlTVEWEsq3APcg8Tpr3OMVJSSX1lkcqc46V8KwDAhYxPKVJ6saCGKQ9tKx2z8H48Tg%2BWG1IRwlPEwjv0u%2F3Db%2B50e7WSpCQNnAcNM3J8CFbTEcwejDgpx6i9NR%2BrUdiUW885cRj%2BO2NUP8Ii2iFhmi9cmvS9HfAgqoqyt%2B6loaMgqzMFbuH1xgiubDF9lJ%2FZFF3xHw4s6DmHsRTX1YlF6YfqGHQiYM6Hi70LyMgDphBEsksBxtH1euaAs3D9LRHnfNZ7P60%2BwPgMt97Bw3su6DXM1dROsFruDV8OCpmkSMjra8uSb5pDRaVC4KsIKKG5zCTfTBqChA%2F3VV%2BqsKIUsruU3E0kQ9z0rp%2BD%2F1ZU5Z1Bmlqf6yQeqq%2B8ZP%2FPEsi01goJJQ3ZN3XZkWA%2F2iDeVoOuceMSO6o6tC%2FCN8q3eyZZ5ipjs5g7f1hNBbBDT59A8syiH5MzpnzTTJS5Cpu5NUpln0H3l8YUgHVd%2FLF99qMo58%2BbbOKefECq3fRnWUSipPkkHfGbWjFayq7W9Zr%2BvsNdJXiUc%2BfZvGYE924rqPRZXuiEILVn8QifG4nY22flXGUr%2FEmmB%2BkHgnh1LdkPiaRzqINfs4IWYnT9ZK7Yw1qyB7oSMkEwLLvdRyfPRKn%2Fhl7LGjzDqycDCBjqkAQZ%2Fdk%2Byqb%2B%2BOvk4sPldKZbnFxysTYh%2BpcZshUb2TIOjAmJkEe0ofxeV4OCPkv3rwMpHhxjcMY3k88aH721np5%2B5X7qvv7tyuA7yVTfSc2m%2F29pFf8mkJ56TsiNVIZCWymG89YQody0MdN3l%2Ft3VL4rg0SONYJZddBKpPOl3WJ%2BDAC1jgR4X%2BeNzr7Qp4fOZhgsfCJMyzAd3bNFLf%2FnGkwTVvVTk&X-Amz-Signature=c5442e72cd1656027369ae94e4fb97e5b8b8e3530ece26af3815a6ca5a2558b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UHBI6Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC5H7UsDCRFFmMCLrSkhnmost15ek8tU1L3%2Bwqj8ki9UQIhANY4ZB1RsXywclEwdbKpxJDUxeU7PxYqmmW5VpP9LLoBKv8DCF8QABoMNjM3NDIzMTgzODA1IgxzYEL5q2MVlTVEWEsq3APcg8Tpr3OMVJSSX1lkcqc46V8KwDAhYxPKVJ6saCGKQ9tKx2z8H48Tg%2BWG1IRwlPEwjv0u%2F3Db%2B50e7WSpCQNnAcNM3J8CFbTEcwejDgpx6i9NR%2BrUdiUW885cRj%2BO2NUP8Ii2iFhmi9cmvS9HfAgqoqyt%2B6loaMgqzMFbuH1xgiubDF9lJ%2FZFF3xHw4s6DmHsRTX1YlF6YfqGHQiYM6Hi70LyMgDphBEsksBxtH1euaAs3D9LRHnfNZ7P60%2BwPgMt97Bw3su6DXM1dROsFruDV8OCpmkSMjra8uSb5pDRaVC4KsIKKG5zCTfTBqChA%2F3VV%2BqsKIUsruU3E0kQ9z0rp%2BD%2F1ZU5Z1Bmlqf6yQeqq%2B8ZP%2FPEsi01goJJQ3ZN3XZkWA%2F2iDeVoOuceMSO6o6tC%2FCN8q3eyZZ5ipjs5g7f1hNBbBDT59A8syiH5MzpnzTTJS5Cpu5NUpln0H3l8YUgHVd%2FLF99qMo58%2BbbOKefECq3fRnWUSipPkkHfGbWjFayq7W9Zr%2BvsNdJXiUc%2BfZvGYE924rqPRZXuiEILVn8QifG4nY22flXGUr%2FEmmB%2BkHgnh1LdkPiaRzqINfs4IWYnT9ZK7Yw1qyB7oSMkEwLLvdRyfPRKn%2Fhl7LGjzDqycDCBjqkAQZ%2Fdk%2Byqb%2B%2BOvk4sPldKZbnFxysTYh%2BpcZshUb2TIOjAmJkEe0ofxeV4OCPkv3rwMpHhxjcMY3k88aH721np5%2B5X7qvv7tyuA7yVTfSc2m%2F29pFf8mkJ56TsiNVIZCWymG89YQody0MdN3l%2Ft3VL4rg0SONYJZddBKpPOl3WJ%2BDAC1jgR4X%2BeNzr7Qp4fOZhgsfCJMyzAd3bNFLf%2FnGkwTVvVTk&X-Amz-Signature=d19a2df245b1c1787264d60fff16b4333c028e792b374aecf68f5860f4a0cdbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UHBI6Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC5H7UsDCRFFmMCLrSkhnmost15ek8tU1L3%2Bwqj8ki9UQIhANY4ZB1RsXywclEwdbKpxJDUxeU7PxYqmmW5VpP9LLoBKv8DCF8QABoMNjM3NDIzMTgzODA1IgxzYEL5q2MVlTVEWEsq3APcg8Tpr3OMVJSSX1lkcqc46V8KwDAhYxPKVJ6saCGKQ9tKx2z8H48Tg%2BWG1IRwlPEwjv0u%2F3Db%2B50e7WSpCQNnAcNM3J8CFbTEcwejDgpx6i9NR%2BrUdiUW885cRj%2BO2NUP8Ii2iFhmi9cmvS9HfAgqoqyt%2B6loaMgqzMFbuH1xgiubDF9lJ%2FZFF3xHw4s6DmHsRTX1YlF6YfqGHQiYM6Hi70LyMgDphBEsksBxtH1euaAs3D9LRHnfNZ7P60%2BwPgMt97Bw3su6DXM1dROsFruDV8OCpmkSMjra8uSb5pDRaVC4KsIKKG5zCTfTBqChA%2F3VV%2BqsKIUsruU3E0kQ9z0rp%2BD%2F1ZU5Z1Bmlqf6yQeqq%2B8ZP%2FPEsi01goJJQ3ZN3XZkWA%2F2iDeVoOuceMSO6o6tC%2FCN8q3eyZZ5ipjs5g7f1hNBbBDT59A8syiH5MzpnzTTJS5Cpu5NUpln0H3l8YUgHVd%2FLF99qMo58%2BbbOKefECq3fRnWUSipPkkHfGbWjFayq7W9Zr%2BvsNdJXiUc%2BfZvGYE924rqPRZXuiEILVn8QifG4nY22flXGUr%2FEmmB%2BkHgnh1LdkPiaRzqINfs4IWYnT9ZK7Yw1qyB7oSMkEwLLvdRyfPRKn%2Fhl7LGjzDqycDCBjqkAQZ%2Fdk%2Byqb%2B%2BOvk4sPldKZbnFxysTYh%2BpcZshUb2TIOjAmJkEe0ofxeV4OCPkv3rwMpHhxjcMY3k88aH721np5%2B5X7qvv7tyuA7yVTfSc2m%2F29pFf8mkJ56TsiNVIZCWymG89YQody0MdN3l%2Ft3VL4rg0SONYJZddBKpPOl3WJ%2BDAC1jgR4X%2BeNzr7Qp4fOZhgsfCJMyzAd3bNFLf%2FnGkwTVvVTk&X-Amz-Signature=436d0ac75eeb32eb8a36b9dfe9c163e961157e4c265e47ff731c84539eba7853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UHBI6Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC5H7UsDCRFFmMCLrSkhnmost15ek8tU1L3%2Bwqj8ki9UQIhANY4ZB1RsXywclEwdbKpxJDUxeU7PxYqmmW5VpP9LLoBKv8DCF8QABoMNjM3NDIzMTgzODA1IgxzYEL5q2MVlTVEWEsq3APcg8Tpr3OMVJSSX1lkcqc46V8KwDAhYxPKVJ6saCGKQ9tKx2z8H48Tg%2BWG1IRwlPEwjv0u%2F3Db%2B50e7WSpCQNnAcNM3J8CFbTEcwejDgpx6i9NR%2BrUdiUW885cRj%2BO2NUP8Ii2iFhmi9cmvS9HfAgqoqyt%2B6loaMgqzMFbuH1xgiubDF9lJ%2FZFF3xHw4s6DmHsRTX1YlF6YfqGHQiYM6Hi70LyMgDphBEsksBxtH1euaAs3D9LRHnfNZ7P60%2BwPgMt97Bw3su6DXM1dROsFruDV8OCpmkSMjra8uSb5pDRaVC4KsIKKG5zCTfTBqChA%2F3VV%2BqsKIUsruU3E0kQ9z0rp%2BD%2F1ZU5Z1Bmlqf6yQeqq%2B8ZP%2FPEsi01goJJQ3ZN3XZkWA%2F2iDeVoOuceMSO6o6tC%2FCN8q3eyZZ5ipjs5g7f1hNBbBDT59A8syiH5MzpnzTTJS5Cpu5NUpln0H3l8YUgHVd%2FLF99qMo58%2BbbOKefECq3fRnWUSipPkkHfGbWjFayq7W9Zr%2BvsNdJXiUc%2BfZvGYE924rqPRZXuiEILVn8QifG4nY22flXGUr%2FEmmB%2BkHgnh1LdkPiaRzqINfs4IWYnT9ZK7Yw1qyB7oSMkEwLLvdRyfPRKn%2Fhl7LGjzDqycDCBjqkAQZ%2Fdk%2Byqb%2B%2BOvk4sPldKZbnFxysTYh%2BpcZshUb2TIOjAmJkEe0ofxeV4OCPkv3rwMpHhxjcMY3k88aH721np5%2B5X7qvv7tyuA7yVTfSc2m%2F29pFf8mkJ56TsiNVIZCWymG89YQody0MdN3l%2Ft3VL4rg0SONYJZddBKpPOl3WJ%2BDAC1jgR4X%2BeNzr7Qp4fOZhgsfCJMyzAd3bNFLf%2FnGkwTVvVTk&X-Amz-Signature=47b8833ed626916724f1d894762f2aff758902046ad47b362e68ffc2a0935f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
