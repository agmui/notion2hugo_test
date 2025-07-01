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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCVFNB7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKTo%2B2Qwtj7lGbhqiwK0HJHE5WU77Ru%2FXucePHdKakYAiAxLqu4A5fJ%2Fh%2B75EM85XgY16NkFcfCmFJZH5710B3OkCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KKpt74yG6VoUQnKKtwDnef2URIiQmPixidi0FNCABia4A45%2BIzcLL9VD4%2Fw%2B7n5isP8lBlB0c7PwUXRM78t%2BMYG9L2d1zxVHi9lCkC%2FzWdl9SvrSwVITUEmBLSZbXcrgtAG7gtzNqaCGDS3AKqZ2dL2x1qMhCUYelIIXKf6QnQCFnNB5Xhidn1eJMUfbmRJhgxx7uSlC0nYJWlqxwMB5BUgJNMb0iRPuBk7x7%2FJS3QT8d28P2MAgG46owDfJB56%2BiAmcAYKtoMh%2BwcvZopGhX3T5gEELqchEP37POd8GCCoXMXerw7MyHWUM1yld8pVVvtQMRwWPo1x0I9hX3sVsG5nDn7m6pG7y3bDroUYJh%2Bn9lcOKKmvh08NsAOuNTieIBvpOSp6S3FHQoV5agFvIHq1KaBpsAEp9K6dBRVoAENTcQR01To3A2L%2BjTFe0n2ro9Etqh%2FeDky8ORQqJ4Z7b7XZm9MtXdkJNpo790FGjizBMYVYXasSLk%2FKnu8bLD6O%2Bdi9e7I0ZRLKRfaogaLIDvCszbhon9N7gLx%2Fyk2pXLVTY4abibmsiIV2hM9vodXjwXvl5OWtMFX9R3HZcYRN1Qb7Ehh800G4mSAo4n%2FsDMwjgIPYohY5t6NIjeiy9Nf4Sa3J%2FaBmmCb6SRgw74WOwwY6pgEEwk6OQhVon81ElLUrYt3BnJVm62mzN1HsIFWcOICttQv9pDxOcxrDPHbvIKEfRy%2FcNf4Ae0cy3sKUxZfz6g1YR%2BPsjyQtf1JxgxqsRYhDRLS8SS9QKnqBpQ8qG%2BqyshYPykNmSmJiw0mvdmsFERggjHYVmzC8GLJeXmyfxTer55cysa8PMYSYsNdEV7xdWX%2B31gA9NVwHou0xsrCXN2xP%2BxX1XApS&X-Amz-Signature=d13e9f489d28249a74ccd198c4e9be4a83d64cefccc51a3dcf58668ac1439d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCVFNB7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKTo%2B2Qwtj7lGbhqiwK0HJHE5WU77Ru%2FXucePHdKakYAiAxLqu4A5fJ%2Fh%2B75EM85XgY16NkFcfCmFJZH5710B3OkCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KKpt74yG6VoUQnKKtwDnef2URIiQmPixidi0FNCABia4A45%2BIzcLL9VD4%2Fw%2B7n5isP8lBlB0c7PwUXRM78t%2BMYG9L2d1zxVHi9lCkC%2FzWdl9SvrSwVITUEmBLSZbXcrgtAG7gtzNqaCGDS3AKqZ2dL2x1qMhCUYelIIXKf6QnQCFnNB5Xhidn1eJMUfbmRJhgxx7uSlC0nYJWlqxwMB5BUgJNMb0iRPuBk7x7%2FJS3QT8d28P2MAgG46owDfJB56%2BiAmcAYKtoMh%2BwcvZopGhX3T5gEELqchEP37POd8GCCoXMXerw7MyHWUM1yld8pVVvtQMRwWPo1x0I9hX3sVsG5nDn7m6pG7y3bDroUYJh%2Bn9lcOKKmvh08NsAOuNTieIBvpOSp6S3FHQoV5agFvIHq1KaBpsAEp9K6dBRVoAENTcQR01To3A2L%2BjTFe0n2ro9Etqh%2FeDky8ORQqJ4Z7b7XZm9MtXdkJNpo790FGjizBMYVYXasSLk%2FKnu8bLD6O%2Bdi9e7I0ZRLKRfaogaLIDvCszbhon9N7gLx%2Fyk2pXLVTY4abibmsiIV2hM9vodXjwXvl5OWtMFX9R3HZcYRN1Qb7Ehh800G4mSAo4n%2FsDMwjgIPYohY5t6NIjeiy9Nf4Sa3J%2FaBmmCb6SRgw74WOwwY6pgEEwk6OQhVon81ElLUrYt3BnJVm62mzN1HsIFWcOICttQv9pDxOcxrDPHbvIKEfRy%2FcNf4Ae0cy3sKUxZfz6g1YR%2BPsjyQtf1JxgxqsRYhDRLS8SS9QKnqBpQ8qG%2BqyshYPykNmSmJiw0mvdmsFERggjHYVmzC8GLJeXmyfxTer55cysa8PMYSYsNdEV7xdWX%2B31gA9NVwHou0xsrCXN2xP%2BxX1XApS&X-Amz-Signature=6e2216ee35dc20fb08e0b1d5c07b1dc73182c8b03051f59baf86d124b6c91532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCVFNB7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKTo%2B2Qwtj7lGbhqiwK0HJHE5WU77Ru%2FXucePHdKakYAiAxLqu4A5fJ%2Fh%2B75EM85XgY16NkFcfCmFJZH5710B3OkCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KKpt74yG6VoUQnKKtwDnef2URIiQmPixidi0FNCABia4A45%2BIzcLL9VD4%2Fw%2B7n5isP8lBlB0c7PwUXRM78t%2BMYG9L2d1zxVHi9lCkC%2FzWdl9SvrSwVITUEmBLSZbXcrgtAG7gtzNqaCGDS3AKqZ2dL2x1qMhCUYelIIXKf6QnQCFnNB5Xhidn1eJMUfbmRJhgxx7uSlC0nYJWlqxwMB5BUgJNMb0iRPuBk7x7%2FJS3QT8d28P2MAgG46owDfJB56%2BiAmcAYKtoMh%2BwcvZopGhX3T5gEELqchEP37POd8GCCoXMXerw7MyHWUM1yld8pVVvtQMRwWPo1x0I9hX3sVsG5nDn7m6pG7y3bDroUYJh%2Bn9lcOKKmvh08NsAOuNTieIBvpOSp6S3FHQoV5agFvIHq1KaBpsAEp9K6dBRVoAENTcQR01To3A2L%2BjTFe0n2ro9Etqh%2FeDky8ORQqJ4Z7b7XZm9MtXdkJNpo790FGjizBMYVYXasSLk%2FKnu8bLD6O%2Bdi9e7I0ZRLKRfaogaLIDvCszbhon9N7gLx%2Fyk2pXLVTY4abibmsiIV2hM9vodXjwXvl5OWtMFX9R3HZcYRN1Qb7Ehh800G4mSAo4n%2FsDMwjgIPYohY5t6NIjeiy9Nf4Sa3J%2FaBmmCb6SRgw74WOwwY6pgEEwk6OQhVon81ElLUrYt3BnJVm62mzN1HsIFWcOICttQv9pDxOcxrDPHbvIKEfRy%2FcNf4Ae0cy3sKUxZfz6g1YR%2BPsjyQtf1JxgxqsRYhDRLS8SS9QKnqBpQ8qG%2BqyshYPykNmSmJiw0mvdmsFERggjHYVmzC8GLJeXmyfxTer55cysa8PMYSYsNdEV7xdWX%2B31gA9NVwHou0xsrCXN2xP%2BxX1XApS&X-Amz-Signature=48fd6160b25f28b1476b1342af07a177e44d7d331930865cd09f561beb78c6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCVFNB7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKTo%2B2Qwtj7lGbhqiwK0HJHE5WU77Ru%2FXucePHdKakYAiAxLqu4A5fJ%2Fh%2B75EM85XgY16NkFcfCmFJZH5710B3OkCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KKpt74yG6VoUQnKKtwDnef2URIiQmPixidi0FNCABia4A45%2BIzcLL9VD4%2Fw%2B7n5isP8lBlB0c7PwUXRM78t%2BMYG9L2d1zxVHi9lCkC%2FzWdl9SvrSwVITUEmBLSZbXcrgtAG7gtzNqaCGDS3AKqZ2dL2x1qMhCUYelIIXKf6QnQCFnNB5Xhidn1eJMUfbmRJhgxx7uSlC0nYJWlqxwMB5BUgJNMb0iRPuBk7x7%2FJS3QT8d28P2MAgG46owDfJB56%2BiAmcAYKtoMh%2BwcvZopGhX3T5gEELqchEP37POd8GCCoXMXerw7MyHWUM1yld8pVVvtQMRwWPo1x0I9hX3sVsG5nDn7m6pG7y3bDroUYJh%2Bn9lcOKKmvh08NsAOuNTieIBvpOSp6S3FHQoV5agFvIHq1KaBpsAEp9K6dBRVoAENTcQR01To3A2L%2BjTFe0n2ro9Etqh%2FeDky8ORQqJ4Z7b7XZm9MtXdkJNpo790FGjizBMYVYXasSLk%2FKnu8bLD6O%2Bdi9e7I0ZRLKRfaogaLIDvCszbhon9N7gLx%2Fyk2pXLVTY4abibmsiIV2hM9vodXjwXvl5OWtMFX9R3HZcYRN1Qb7Ehh800G4mSAo4n%2FsDMwjgIPYohY5t6NIjeiy9Nf4Sa3J%2FaBmmCb6SRgw74WOwwY6pgEEwk6OQhVon81ElLUrYt3BnJVm62mzN1HsIFWcOICttQv9pDxOcxrDPHbvIKEfRy%2FcNf4Ae0cy3sKUxZfz6g1YR%2BPsjyQtf1JxgxqsRYhDRLS8SS9QKnqBpQ8qG%2BqyshYPykNmSmJiw0mvdmsFERggjHYVmzC8GLJeXmyfxTer55cysa8PMYSYsNdEV7xdWX%2B31gA9NVwHou0xsrCXN2xP%2BxX1XApS&X-Amz-Signature=0393ad43713510cc0e9b85f4f3da7707bfc9843cb1b80fba40f4c2adbcde0073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCVFNB7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKTo%2B2Qwtj7lGbhqiwK0HJHE5WU77Ru%2FXucePHdKakYAiAxLqu4A5fJ%2Fh%2B75EM85XgY16NkFcfCmFJZH5710B3OkCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KKpt74yG6VoUQnKKtwDnef2URIiQmPixidi0FNCABia4A45%2BIzcLL9VD4%2Fw%2B7n5isP8lBlB0c7PwUXRM78t%2BMYG9L2d1zxVHi9lCkC%2FzWdl9SvrSwVITUEmBLSZbXcrgtAG7gtzNqaCGDS3AKqZ2dL2x1qMhCUYelIIXKf6QnQCFnNB5Xhidn1eJMUfbmRJhgxx7uSlC0nYJWlqxwMB5BUgJNMb0iRPuBk7x7%2FJS3QT8d28P2MAgG46owDfJB56%2BiAmcAYKtoMh%2BwcvZopGhX3T5gEELqchEP37POd8GCCoXMXerw7MyHWUM1yld8pVVvtQMRwWPo1x0I9hX3sVsG5nDn7m6pG7y3bDroUYJh%2Bn9lcOKKmvh08NsAOuNTieIBvpOSp6S3FHQoV5agFvIHq1KaBpsAEp9K6dBRVoAENTcQR01To3A2L%2BjTFe0n2ro9Etqh%2FeDky8ORQqJ4Z7b7XZm9MtXdkJNpo790FGjizBMYVYXasSLk%2FKnu8bLD6O%2Bdi9e7I0ZRLKRfaogaLIDvCszbhon9N7gLx%2Fyk2pXLVTY4abibmsiIV2hM9vodXjwXvl5OWtMFX9R3HZcYRN1Qb7Ehh800G4mSAo4n%2FsDMwjgIPYohY5t6NIjeiy9Nf4Sa3J%2FaBmmCb6SRgw74WOwwY6pgEEwk6OQhVon81ElLUrYt3BnJVm62mzN1HsIFWcOICttQv9pDxOcxrDPHbvIKEfRy%2FcNf4Ae0cy3sKUxZfz6g1YR%2BPsjyQtf1JxgxqsRYhDRLS8SS9QKnqBpQ8qG%2BqyshYPykNmSmJiw0mvdmsFERggjHYVmzC8GLJeXmyfxTer55cysa8PMYSYsNdEV7xdWX%2B31gA9NVwHou0xsrCXN2xP%2BxX1XApS&X-Amz-Signature=f6a4280323bf94b617fc1109e6989d24a12af929ee110fb6c21f25a5743ac4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
