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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFWQ7EF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCknGPZc9PyTo7Hs022Kbq56rI9wOOQIwqULTXoWOY94wIgKmR%2FmtsN%2BfhZiPlOj17neQAUpwvpysKdgR6rsSsH3lMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOGxX%2BhTHdmYHD4hTircA2LySyNOElyEzGsO6pjKxnJ56amykCpLJK50Za9VXPYXHBxE36Vm1lm1dt4DoGfHZO%2FMCObUgq1CxvZY1vu7FBmLqqmEv0Uv7qpOmoP9jufkDTj%2FsF0o%2FB6zELraAQ7iTTIdVcuhIT6uOllILDfemhnuLhNduFh9ZV2lq1ibVRDqzbToBD0ec7XXP7UIyOcfY4NYCAqijTAP%2FOO%2BnWkyjNHS5CKTDVuXIMmjxYUDNq4nsG1%2FjuRbxZzOlqbSGwH3chGLrULXtM0ctQYdf%2BWumWJUKhynwbzqElCfu0KTiyueqXsEEoNM2pMt7L5XCkmqtMqxXOsWaWJHgbGoquzGClLMGzs2MKj%2FTDnUm7KKekSiHX7jvIHuJ6Jre7TNedE9LrkMdJDis%2BPE6mQ1pF1Qj05jEpakK5Ne40kQVk8CiZpgYQ17IT4z%2FUYbMVyx5hqNWoPmupRKfMf0l2VuuboN9B8nFGB6VKOB%2FJ4mrp8kKJvNOxKMLNiMj9FqS97%2FWxytV2tFaUKDOIFqGADDolYQXODlNhPT8P8ecJLeGwVdTqdjLUXFNaYluDtrCrfKJ6Wv8T4KddTUkcOhKCrONAqEGx18Iv5oCiK8USdZGwFHup%2FviRduMvW5M%2BaK3OM1MIyQ78IGOqUB93E2hXX2OjCnd%2BsJxSfnPRTmrHqV2Ey8BUkzEUjirBBWIqYjFOaYkoJ15CkZzgqvg09GR7%2BQ1a1%2FSNO5oqYlGQl9XsmcvppDqFhL9P9lUk9gUMHDuTtxvewrFelyoVL8otQNM0B17rC0dQFLQ0OuKXrwLdBTqdgCqLLsWLOeQrp3dqKmioPRR%2BJ%2BiQQKXaubGcRhUfoIBVQtmeWiU3%2BSHrJWx27i&X-Amz-Signature=e747b2c25e0bf8eecef280f7cbc59d41f29752b4c973569fdcca5b9a823cf969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFWQ7EF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCknGPZc9PyTo7Hs022Kbq56rI9wOOQIwqULTXoWOY94wIgKmR%2FmtsN%2BfhZiPlOj17neQAUpwvpysKdgR6rsSsH3lMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOGxX%2BhTHdmYHD4hTircA2LySyNOElyEzGsO6pjKxnJ56amykCpLJK50Za9VXPYXHBxE36Vm1lm1dt4DoGfHZO%2FMCObUgq1CxvZY1vu7FBmLqqmEv0Uv7qpOmoP9jufkDTj%2FsF0o%2FB6zELraAQ7iTTIdVcuhIT6uOllILDfemhnuLhNduFh9ZV2lq1ibVRDqzbToBD0ec7XXP7UIyOcfY4NYCAqijTAP%2FOO%2BnWkyjNHS5CKTDVuXIMmjxYUDNq4nsG1%2FjuRbxZzOlqbSGwH3chGLrULXtM0ctQYdf%2BWumWJUKhynwbzqElCfu0KTiyueqXsEEoNM2pMt7L5XCkmqtMqxXOsWaWJHgbGoquzGClLMGzs2MKj%2FTDnUm7KKekSiHX7jvIHuJ6Jre7TNedE9LrkMdJDis%2BPE6mQ1pF1Qj05jEpakK5Ne40kQVk8CiZpgYQ17IT4z%2FUYbMVyx5hqNWoPmupRKfMf0l2VuuboN9B8nFGB6VKOB%2FJ4mrp8kKJvNOxKMLNiMj9FqS97%2FWxytV2tFaUKDOIFqGADDolYQXODlNhPT8P8ecJLeGwVdTqdjLUXFNaYluDtrCrfKJ6Wv8T4KddTUkcOhKCrONAqEGx18Iv5oCiK8USdZGwFHup%2FviRduMvW5M%2BaK3OM1MIyQ78IGOqUB93E2hXX2OjCnd%2BsJxSfnPRTmrHqV2Ey8BUkzEUjirBBWIqYjFOaYkoJ15CkZzgqvg09GR7%2BQ1a1%2FSNO5oqYlGQl9XsmcvppDqFhL9P9lUk9gUMHDuTtxvewrFelyoVL8otQNM0B17rC0dQFLQ0OuKXrwLdBTqdgCqLLsWLOeQrp3dqKmioPRR%2BJ%2BiQQKXaubGcRhUfoIBVQtmeWiU3%2BSHrJWx27i&X-Amz-Signature=4afc9e6741f562e95b2c6963a08fff1e7f6a443ffdaa5f242a060945f0bead60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFWQ7EF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCknGPZc9PyTo7Hs022Kbq56rI9wOOQIwqULTXoWOY94wIgKmR%2FmtsN%2BfhZiPlOj17neQAUpwvpysKdgR6rsSsH3lMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOGxX%2BhTHdmYHD4hTircA2LySyNOElyEzGsO6pjKxnJ56amykCpLJK50Za9VXPYXHBxE36Vm1lm1dt4DoGfHZO%2FMCObUgq1CxvZY1vu7FBmLqqmEv0Uv7qpOmoP9jufkDTj%2FsF0o%2FB6zELraAQ7iTTIdVcuhIT6uOllILDfemhnuLhNduFh9ZV2lq1ibVRDqzbToBD0ec7XXP7UIyOcfY4NYCAqijTAP%2FOO%2BnWkyjNHS5CKTDVuXIMmjxYUDNq4nsG1%2FjuRbxZzOlqbSGwH3chGLrULXtM0ctQYdf%2BWumWJUKhynwbzqElCfu0KTiyueqXsEEoNM2pMt7L5XCkmqtMqxXOsWaWJHgbGoquzGClLMGzs2MKj%2FTDnUm7KKekSiHX7jvIHuJ6Jre7TNedE9LrkMdJDis%2BPE6mQ1pF1Qj05jEpakK5Ne40kQVk8CiZpgYQ17IT4z%2FUYbMVyx5hqNWoPmupRKfMf0l2VuuboN9B8nFGB6VKOB%2FJ4mrp8kKJvNOxKMLNiMj9FqS97%2FWxytV2tFaUKDOIFqGADDolYQXODlNhPT8P8ecJLeGwVdTqdjLUXFNaYluDtrCrfKJ6Wv8T4KddTUkcOhKCrONAqEGx18Iv5oCiK8USdZGwFHup%2FviRduMvW5M%2BaK3OM1MIyQ78IGOqUB93E2hXX2OjCnd%2BsJxSfnPRTmrHqV2Ey8BUkzEUjirBBWIqYjFOaYkoJ15CkZzgqvg09GR7%2BQ1a1%2FSNO5oqYlGQl9XsmcvppDqFhL9P9lUk9gUMHDuTtxvewrFelyoVL8otQNM0B17rC0dQFLQ0OuKXrwLdBTqdgCqLLsWLOeQrp3dqKmioPRR%2BJ%2BiQQKXaubGcRhUfoIBVQtmeWiU3%2BSHrJWx27i&X-Amz-Signature=a0d868615f90722eb8d36939108532836e89fa2272a36f67ead3784b642ae935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFWQ7EF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCknGPZc9PyTo7Hs022Kbq56rI9wOOQIwqULTXoWOY94wIgKmR%2FmtsN%2BfhZiPlOj17neQAUpwvpysKdgR6rsSsH3lMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOGxX%2BhTHdmYHD4hTircA2LySyNOElyEzGsO6pjKxnJ56amykCpLJK50Za9VXPYXHBxE36Vm1lm1dt4DoGfHZO%2FMCObUgq1CxvZY1vu7FBmLqqmEv0Uv7qpOmoP9jufkDTj%2FsF0o%2FB6zELraAQ7iTTIdVcuhIT6uOllILDfemhnuLhNduFh9ZV2lq1ibVRDqzbToBD0ec7XXP7UIyOcfY4NYCAqijTAP%2FOO%2BnWkyjNHS5CKTDVuXIMmjxYUDNq4nsG1%2FjuRbxZzOlqbSGwH3chGLrULXtM0ctQYdf%2BWumWJUKhynwbzqElCfu0KTiyueqXsEEoNM2pMt7L5XCkmqtMqxXOsWaWJHgbGoquzGClLMGzs2MKj%2FTDnUm7KKekSiHX7jvIHuJ6Jre7TNedE9LrkMdJDis%2BPE6mQ1pF1Qj05jEpakK5Ne40kQVk8CiZpgYQ17IT4z%2FUYbMVyx5hqNWoPmupRKfMf0l2VuuboN9B8nFGB6VKOB%2FJ4mrp8kKJvNOxKMLNiMj9FqS97%2FWxytV2tFaUKDOIFqGADDolYQXODlNhPT8P8ecJLeGwVdTqdjLUXFNaYluDtrCrfKJ6Wv8T4KddTUkcOhKCrONAqEGx18Iv5oCiK8USdZGwFHup%2FviRduMvW5M%2BaK3OM1MIyQ78IGOqUB93E2hXX2OjCnd%2BsJxSfnPRTmrHqV2Ey8BUkzEUjirBBWIqYjFOaYkoJ15CkZzgqvg09GR7%2BQ1a1%2FSNO5oqYlGQl9XsmcvppDqFhL9P9lUk9gUMHDuTtxvewrFelyoVL8otQNM0B17rC0dQFLQ0OuKXrwLdBTqdgCqLLsWLOeQrp3dqKmioPRR%2BJ%2BiQQKXaubGcRhUfoIBVQtmeWiU3%2BSHrJWx27i&X-Amz-Signature=6e0fcc58fc44297221e410022c998e4cec481eec88a91cd68baf0ceaf3c80c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFWQ7EF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCknGPZc9PyTo7Hs022Kbq56rI9wOOQIwqULTXoWOY94wIgKmR%2FmtsN%2BfhZiPlOj17neQAUpwvpysKdgR6rsSsH3lMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOGxX%2BhTHdmYHD4hTircA2LySyNOElyEzGsO6pjKxnJ56amykCpLJK50Za9VXPYXHBxE36Vm1lm1dt4DoGfHZO%2FMCObUgq1CxvZY1vu7FBmLqqmEv0Uv7qpOmoP9jufkDTj%2FsF0o%2FB6zELraAQ7iTTIdVcuhIT6uOllILDfemhnuLhNduFh9ZV2lq1ibVRDqzbToBD0ec7XXP7UIyOcfY4NYCAqijTAP%2FOO%2BnWkyjNHS5CKTDVuXIMmjxYUDNq4nsG1%2FjuRbxZzOlqbSGwH3chGLrULXtM0ctQYdf%2BWumWJUKhynwbzqElCfu0KTiyueqXsEEoNM2pMt7L5XCkmqtMqxXOsWaWJHgbGoquzGClLMGzs2MKj%2FTDnUm7KKekSiHX7jvIHuJ6Jre7TNedE9LrkMdJDis%2BPE6mQ1pF1Qj05jEpakK5Ne40kQVk8CiZpgYQ17IT4z%2FUYbMVyx5hqNWoPmupRKfMf0l2VuuboN9B8nFGB6VKOB%2FJ4mrp8kKJvNOxKMLNiMj9FqS97%2FWxytV2tFaUKDOIFqGADDolYQXODlNhPT8P8ecJLeGwVdTqdjLUXFNaYluDtrCrfKJ6Wv8T4KddTUkcOhKCrONAqEGx18Iv5oCiK8USdZGwFHup%2FviRduMvW5M%2BaK3OM1MIyQ78IGOqUB93E2hXX2OjCnd%2BsJxSfnPRTmrHqV2Ey8BUkzEUjirBBWIqYjFOaYkoJ15CkZzgqvg09GR7%2BQ1a1%2FSNO5oqYlGQl9XsmcvppDqFhL9P9lUk9gUMHDuTtxvewrFelyoVL8otQNM0B17rC0dQFLQ0OuKXrwLdBTqdgCqLLsWLOeQrp3dqKmioPRR%2BJ%2BiQQKXaubGcRhUfoIBVQtmeWiU3%2BSHrJWx27i&X-Amz-Signature=b593e12895f513ee194224bab6c6c9c50600ef9dad2862a75ae3763b5ca01864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
