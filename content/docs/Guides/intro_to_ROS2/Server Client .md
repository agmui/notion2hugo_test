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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZDXMVD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP8DuipP%2BbxEIS9o%2BtFrw2%2BJ2T450m9TQyuUVLO9fbxgIhAIyTzWJWD8EVRqYJB3RU1l2wpjqix7%2BPY9LUt0feicSwKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BCs0l%2FTQx9AB68hkq3AP%2FBm%2Fl%2FqBqElE0rBSB9cTmvOwV89ZNXTMAOpk0tEMPYbjO%2FJxtcT7GWiVbv0tGgX9K9pPCzRIFRlejrtCbQiyKpsjfuwUxRNLF4s4ltavvthIovKUD%2F6Mr6HaYSRfbJ1xr50o17zD5DsBUmI8UFOjF280Bl3hVHi3dpKg9WKIHQvhQoTyuAMvtdFvqZ%2FRZ2V1Vs3uznd9xGz5qPYgh9QViv%2FiHoDyvlS4vBp2e5mKuF5TBocbRw9KLKWzWbInFWQgdLnmXde8%2FVbpkbLpqKqJLnFNc0o4tiXWJsQFcXzg1MYKXzIKxUpHZ8Vw5mtyzq3%2BoOhTAA%2FzbII0WtnuKfch6rqzqOCx3%2BqlNk6LdLv8Udzl7HDZroS1pAopPInd1VyMiONQEZmvdrNwCITbsK7OxcbL3Q78ireG4pl66%2B1m4%2F%2BuDNAoPN3RR%2BGAPisZQhjxdYskuMIFTaU5Dkd211Q%2FfOiRbTzofo%2Fil2tTsePJKDP88rEsC7%2FqQZ6bhJ0A5rijxuw9hkw4LnlbKkCTfqQlqoFD4bfwSHVbvk5Ogzoom8GwlAbkrkTSLkadpFb9LsrawtL5N3uELttiiHU1Yi3uFnOFkGVfd95ywD83tQ0qddsgBddyohCk4NC4ZdzDAyPi8BjqkAcnyXFv569FDetUiuPn2EUVSyY%2BY4LiW0b3uQxsD8FWDXXIPVd8S1gTEAdtwzfzKDIHBE7EIVnOb1SDl9un%2F5IHG3tgJ91yWrl5d%2F5vOVpt8qpgN2r0TzLLHhFEN5Lk2a0EcBgmBre%2BZJo1VceY0CtWPjrqOg4qX41IP1cAzYhn9rl6omePBrC0YJ9qf4MeTdCqtKqOX2rtyJbmtdLHsPZyxN0n5&X-Amz-Signature=7a56564ac4fd39f17eec74efd8c2955b58a962587dd4f210b4ac9ebb7e561afe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZDXMVD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP8DuipP%2BbxEIS9o%2BtFrw2%2BJ2T450m9TQyuUVLO9fbxgIhAIyTzWJWD8EVRqYJB3RU1l2wpjqix7%2BPY9LUt0feicSwKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BCs0l%2FTQx9AB68hkq3AP%2FBm%2Fl%2FqBqElE0rBSB9cTmvOwV89ZNXTMAOpk0tEMPYbjO%2FJxtcT7GWiVbv0tGgX9K9pPCzRIFRlejrtCbQiyKpsjfuwUxRNLF4s4ltavvthIovKUD%2F6Mr6HaYSRfbJ1xr50o17zD5DsBUmI8UFOjF280Bl3hVHi3dpKg9WKIHQvhQoTyuAMvtdFvqZ%2FRZ2V1Vs3uznd9xGz5qPYgh9QViv%2FiHoDyvlS4vBp2e5mKuF5TBocbRw9KLKWzWbInFWQgdLnmXde8%2FVbpkbLpqKqJLnFNc0o4tiXWJsQFcXzg1MYKXzIKxUpHZ8Vw5mtyzq3%2BoOhTAA%2FzbII0WtnuKfch6rqzqOCx3%2BqlNk6LdLv8Udzl7HDZroS1pAopPInd1VyMiONQEZmvdrNwCITbsK7OxcbL3Q78ireG4pl66%2B1m4%2F%2BuDNAoPN3RR%2BGAPisZQhjxdYskuMIFTaU5Dkd211Q%2FfOiRbTzofo%2Fil2tTsePJKDP88rEsC7%2FqQZ6bhJ0A5rijxuw9hkw4LnlbKkCTfqQlqoFD4bfwSHVbvk5Ogzoom8GwlAbkrkTSLkadpFb9LsrawtL5N3uELttiiHU1Yi3uFnOFkGVfd95ywD83tQ0qddsgBddyohCk4NC4ZdzDAyPi8BjqkAcnyXFv569FDetUiuPn2EUVSyY%2BY4LiW0b3uQxsD8FWDXXIPVd8S1gTEAdtwzfzKDIHBE7EIVnOb1SDl9un%2F5IHG3tgJ91yWrl5d%2F5vOVpt8qpgN2r0TzLLHhFEN5Lk2a0EcBgmBre%2BZJo1VceY0CtWPjrqOg4qX41IP1cAzYhn9rl6omePBrC0YJ9qf4MeTdCqtKqOX2rtyJbmtdLHsPZyxN0n5&X-Amz-Signature=ad3fd5f4b327b21c8b4b0cb7cff4272abebcacaad1a518e55968ee91bb78cd70&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZDXMVD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP8DuipP%2BbxEIS9o%2BtFrw2%2BJ2T450m9TQyuUVLO9fbxgIhAIyTzWJWD8EVRqYJB3RU1l2wpjqix7%2BPY9LUt0feicSwKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BCs0l%2FTQx9AB68hkq3AP%2FBm%2Fl%2FqBqElE0rBSB9cTmvOwV89ZNXTMAOpk0tEMPYbjO%2FJxtcT7GWiVbv0tGgX9K9pPCzRIFRlejrtCbQiyKpsjfuwUxRNLF4s4ltavvthIovKUD%2F6Mr6HaYSRfbJ1xr50o17zD5DsBUmI8UFOjF280Bl3hVHi3dpKg9WKIHQvhQoTyuAMvtdFvqZ%2FRZ2V1Vs3uznd9xGz5qPYgh9QViv%2FiHoDyvlS4vBp2e5mKuF5TBocbRw9KLKWzWbInFWQgdLnmXde8%2FVbpkbLpqKqJLnFNc0o4tiXWJsQFcXzg1MYKXzIKxUpHZ8Vw5mtyzq3%2BoOhTAA%2FzbII0WtnuKfch6rqzqOCx3%2BqlNk6LdLv8Udzl7HDZroS1pAopPInd1VyMiONQEZmvdrNwCITbsK7OxcbL3Q78ireG4pl66%2B1m4%2F%2BuDNAoPN3RR%2BGAPisZQhjxdYskuMIFTaU5Dkd211Q%2FfOiRbTzofo%2Fil2tTsePJKDP88rEsC7%2FqQZ6bhJ0A5rijxuw9hkw4LnlbKkCTfqQlqoFD4bfwSHVbvk5Ogzoom8GwlAbkrkTSLkadpFb9LsrawtL5N3uELttiiHU1Yi3uFnOFkGVfd95ywD83tQ0qddsgBddyohCk4NC4ZdzDAyPi8BjqkAcnyXFv569FDetUiuPn2EUVSyY%2BY4LiW0b3uQxsD8FWDXXIPVd8S1gTEAdtwzfzKDIHBE7EIVnOb1SDl9un%2F5IHG3tgJ91yWrl5d%2F5vOVpt8qpgN2r0TzLLHhFEN5Lk2a0EcBgmBre%2BZJo1VceY0CtWPjrqOg4qX41IP1cAzYhn9rl6omePBrC0YJ9qf4MeTdCqtKqOX2rtyJbmtdLHsPZyxN0n5&X-Amz-Signature=8d0c3b07175c7512942fb8ff52afb5007146d5cb80dfe46e962d3af272a50007&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZDXMVD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP8DuipP%2BbxEIS9o%2BtFrw2%2BJ2T450m9TQyuUVLO9fbxgIhAIyTzWJWD8EVRqYJB3RU1l2wpjqix7%2BPY9LUt0feicSwKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BCs0l%2FTQx9AB68hkq3AP%2FBm%2Fl%2FqBqElE0rBSB9cTmvOwV89ZNXTMAOpk0tEMPYbjO%2FJxtcT7GWiVbv0tGgX9K9pPCzRIFRlejrtCbQiyKpsjfuwUxRNLF4s4ltavvthIovKUD%2F6Mr6HaYSRfbJ1xr50o17zD5DsBUmI8UFOjF280Bl3hVHi3dpKg9WKIHQvhQoTyuAMvtdFvqZ%2FRZ2V1Vs3uznd9xGz5qPYgh9QViv%2FiHoDyvlS4vBp2e5mKuF5TBocbRw9KLKWzWbInFWQgdLnmXde8%2FVbpkbLpqKqJLnFNc0o4tiXWJsQFcXzg1MYKXzIKxUpHZ8Vw5mtyzq3%2BoOhTAA%2FzbII0WtnuKfch6rqzqOCx3%2BqlNk6LdLv8Udzl7HDZroS1pAopPInd1VyMiONQEZmvdrNwCITbsK7OxcbL3Q78ireG4pl66%2B1m4%2F%2BuDNAoPN3RR%2BGAPisZQhjxdYskuMIFTaU5Dkd211Q%2FfOiRbTzofo%2Fil2tTsePJKDP88rEsC7%2FqQZ6bhJ0A5rijxuw9hkw4LnlbKkCTfqQlqoFD4bfwSHVbvk5Ogzoom8GwlAbkrkTSLkadpFb9LsrawtL5N3uELttiiHU1Yi3uFnOFkGVfd95ywD83tQ0qddsgBddyohCk4NC4ZdzDAyPi8BjqkAcnyXFv569FDetUiuPn2EUVSyY%2BY4LiW0b3uQxsD8FWDXXIPVd8S1gTEAdtwzfzKDIHBE7EIVnOb1SDl9un%2F5IHG3tgJ91yWrl5d%2F5vOVpt8qpgN2r0TzLLHhFEN5Lk2a0EcBgmBre%2BZJo1VceY0CtWPjrqOg4qX41IP1cAzYhn9rl6omePBrC0YJ9qf4MeTdCqtKqOX2rtyJbmtdLHsPZyxN0n5&X-Amz-Signature=7e77584b3e39b394ba7c1f0351d2748535b5432679b18e3305fde78722f58eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZDXMVD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP8DuipP%2BbxEIS9o%2BtFrw2%2BJ2T450m9TQyuUVLO9fbxgIhAIyTzWJWD8EVRqYJB3RU1l2wpjqix7%2BPY9LUt0feicSwKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BCs0l%2FTQx9AB68hkq3AP%2FBm%2Fl%2FqBqElE0rBSB9cTmvOwV89ZNXTMAOpk0tEMPYbjO%2FJxtcT7GWiVbv0tGgX9K9pPCzRIFRlejrtCbQiyKpsjfuwUxRNLF4s4ltavvthIovKUD%2F6Mr6HaYSRfbJ1xr50o17zD5DsBUmI8UFOjF280Bl3hVHi3dpKg9WKIHQvhQoTyuAMvtdFvqZ%2FRZ2V1Vs3uznd9xGz5qPYgh9QViv%2FiHoDyvlS4vBp2e5mKuF5TBocbRw9KLKWzWbInFWQgdLnmXde8%2FVbpkbLpqKqJLnFNc0o4tiXWJsQFcXzg1MYKXzIKxUpHZ8Vw5mtyzq3%2BoOhTAA%2FzbII0WtnuKfch6rqzqOCx3%2BqlNk6LdLv8Udzl7HDZroS1pAopPInd1VyMiONQEZmvdrNwCITbsK7OxcbL3Q78ireG4pl66%2B1m4%2F%2BuDNAoPN3RR%2BGAPisZQhjxdYskuMIFTaU5Dkd211Q%2FfOiRbTzofo%2Fil2tTsePJKDP88rEsC7%2FqQZ6bhJ0A5rijxuw9hkw4LnlbKkCTfqQlqoFD4bfwSHVbvk5Ogzoom8GwlAbkrkTSLkadpFb9LsrawtL5N3uELttiiHU1Yi3uFnOFkGVfd95ywD83tQ0qddsgBddyohCk4NC4ZdzDAyPi8BjqkAcnyXFv569FDetUiuPn2EUVSyY%2BY4LiW0b3uQxsD8FWDXXIPVd8S1gTEAdtwzfzKDIHBE7EIVnOb1SDl9un%2F5IHG3tgJ91yWrl5d%2F5vOVpt8qpgN2r0TzLLHhFEN5Lk2a0EcBgmBre%2BZJo1VceY0CtWPjrqOg4qX41IP1cAzYhn9rl6omePBrC0YJ9qf4MeTdCqtKqOX2rtyJbmtdLHsPZyxN0n5&X-Amz-Signature=11b4be3f64afbe7f50cd38a1826142fa751799813cd7dc567257ff61d8a4e7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
