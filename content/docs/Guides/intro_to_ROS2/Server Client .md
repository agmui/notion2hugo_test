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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GHI3L2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9eOjA2QeA5bjGSHz1ps9su8WvAsB7Sg5B8xebl0NQDAiBDFO23d71d0wZXWzS2SppJZxi8ZTgae3Pr3y2mW7ZZDCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqYlLgmGFhHngI31KtwDGDMPtfFQGHbrzysGpiSsATzuxP%2B4uJG42mql%2Bm9EBmaoIb611MIUMomZWx9zIISSELEQIdeg%2F%2BznQi5ftaSW9Cb05tVivosTKI87oid0d9ymAqNWWGXy%2F2e%2BtN%2BP9ZKnt3moZpXuyb%2BdZQmabFXU6OyaGDzbEHled%2BPh3%2FC5U%2Bc%2FUOVImBpAMV6k0gEvoVh82FJPWOG2rvZtBBQmjR29qaJGVOvTaitHOpro2KCWV1u3a0nWVjKp1rPPI0N0dWr7seGQZUhVwNg%2BFr1yifvbBQy3FVRZTTMr6AAbetxwl%2FGEaP2DpkdxndsUVc%2FvPiJrRh5tn7RdBLr5VajnriIgc2LIBYlwS0AntQl9eCI%2BT4QnQMPiY%2B%2Fcco3aeK9oGE5bIzZP2S7vEYIWoAht8%2FYwujn7IYgJGpI6NPDVgR3mQRjqgwgNflnyl4N%2BCTa5R3Y8%2F0UGaGI3gmVtw7s2zNXL3DVc8GXLv2cUI82%2BejxYQU5tCgnqYCiE%2F3gf22TUV2ji3juOrnK8ds884gZ9qMzgwHDCyfn%2BHRrg%2BYh8Zpqnixr%2Bh%2BijNRqABMT8Pl0D4RMxRChDJbwn2y%2B%2Bdt5s9U%2FbD%2F%2F0vD%2F2Ry8umec%2BBngQwdxA5TyirHOYTXcbyMgwxqDIwgY6pgGhmqsR5CnrEwek8URzOCFiy91Py6fbRVkdtY40zWyxhr%2BRUjwqsrrtzOWoo5lWsW17sMY5tm9sGiM7PE4G69BGATlUfykSasYDy8nLK25Kit9uDByaeZjZvTIEDQdomOGqRpqxwXGG%2FHGDzt1pPdq0cyC0DI4e6FU6q4J6jLrojtOcf58HtUGB%2FTiBVCAYm9SO0hqzFF4xUjgeUT5I3hIvTId0YkZf&X-Amz-Signature=4fda96c4e3452c44a2e7b4d98a3c3408d4fc1e38a07f5790c50b17c191a91d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GHI3L2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9eOjA2QeA5bjGSHz1ps9su8WvAsB7Sg5B8xebl0NQDAiBDFO23d71d0wZXWzS2SppJZxi8ZTgae3Pr3y2mW7ZZDCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqYlLgmGFhHngI31KtwDGDMPtfFQGHbrzysGpiSsATzuxP%2B4uJG42mql%2Bm9EBmaoIb611MIUMomZWx9zIISSELEQIdeg%2F%2BznQi5ftaSW9Cb05tVivosTKI87oid0d9ymAqNWWGXy%2F2e%2BtN%2BP9ZKnt3moZpXuyb%2BdZQmabFXU6OyaGDzbEHled%2BPh3%2FC5U%2Bc%2FUOVImBpAMV6k0gEvoVh82FJPWOG2rvZtBBQmjR29qaJGVOvTaitHOpro2KCWV1u3a0nWVjKp1rPPI0N0dWr7seGQZUhVwNg%2BFr1yifvbBQy3FVRZTTMr6AAbetxwl%2FGEaP2DpkdxndsUVc%2FvPiJrRh5tn7RdBLr5VajnriIgc2LIBYlwS0AntQl9eCI%2BT4QnQMPiY%2B%2Fcco3aeK9oGE5bIzZP2S7vEYIWoAht8%2FYwujn7IYgJGpI6NPDVgR3mQRjqgwgNflnyl4N%2BCTa5R3Y8%2F0UGaGI3gmVtw7s2zNXL3DVc8GXLv2cUI82%2BejxYQU5tCgnqYCiE%2F3gf22TUV2ji3juOrnK8ds884gZ9qMzgwHDCyfn%2BHRrg%2BYh8Zpqnixr%2Bh%2BijNRqABMT8Pl0D4RMxRChDJbwn2y%2B%2Bdt5s9U%2FbD%2F%2F0vD%2F2Ry8umec%2BBngQwdxA5TyirHOYTXcbyMgwxqDIwgY6pgGhmqsR5CnrEwek8URzOCFiy91Py6fbRVkdtY40zWyxhr%2BRUjwqsrrtzOWoo5lWsW17sMY5tm9sGiM7PE4G69BGATlUfykSasYDy8nLK25Kit9uDByaeZjZvTIEDQdomOGqRpqxwXGG%2FHGDzt1pPdq0cyC0DI4e6FU6q4J6jLrojtOcf58HtUGB%2FTiBVCAYm9SO0hqzFF4xUjgeUT5I3hIvTId0YkZf&X-Amz-Signature=0e7bb621587c1d2b197548a68ad203292b05a5be9efdd20dd0df45209eda2737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GHI3L2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9eOjA2QeA5bjGSHz1ps9su8WvAsB7Sg5B8xebl0NQDAiBDFO23d71d0wZXWzS2SppJZxi8ZTgae3Pr3y2mW7ZZDCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqYlLgmGFhHngI31KtwDGDMPtfFQGHbrzysGpiSsATzuxP%2B4uJG42mql%2Bm9EBmaoIb611MIUMomZWx9zIISSELEQIdeg%2F%2BznQi5ftaSW9Cb05tVivosTKI87oid0d9ymAqNWWGXy%2F2e%2BtN%2BP9ZKnt3moZpXuyb%2BdZQmabFXU6OyaGDzbEHled%2BPh3%2FC5U%2Bc%2FUOVImBpAMV6k0gEvoVh82FJPWOG2rvZtBBQmjR29qaJGVOvTaitHOpro2KCWV1u3a0nWVjKp1rPPI0N0dWr7seGQZUhVwNg%2BFr1yifvbBQy3FVRZTTMr6AAbetxwl%2FGEaP2DpkdxndsUVc%2FvPiJrRh5tn7RdBLr5VajnriIgc2LIBYlwS0AntQl9eCI%2BT4QnQMPiY%2B%2Fcco3aeK9oGE5bIzZP2S7vEYIWoAht8%2FYwujn7IYgJGpI6NPDVgR3mQRjqgwgNflnyl4N%2BCTa5R3Y8%2F0UGaGI3gmVtw7s2zNXL3DVc8GXLv2cUI82%2BejxYQU5tCgnqYCiE%2F3gf22TUV2ji3juOrnK8ds884gZ9qMzgwHDCyfn%2BHRrg%2BYh8Zpqnixr%2Bh%2BijNRqABMT8Pl0D4RMxRChDJbwn2y%2B%2Bdt5s9U%2FbD%2F%2F0vD%2F2Ry8umec%2BBngQwdxA5TyirHOYTXcbyMgwxqDIwgY6pgGhmqsR5CnrEwek8URzOCFiy91Py6fbRVkdtY40zWyxhr%2BRUjwqsrrtzOWoo5lWsW17sMY5tm9sGiM7PE4G69BGATlUfykSasYDy8nLK25Kit9uDByaeZjZvTIEDQdomOGqRpqxwXGG%2FHGDzt1pPdq0cyC0DI4e6FU6q4J6jLrojtOcf58HtUGB%2FTiBVCAYm9SO0hqzFF4xUjgeUT5I3hIvTId0YkZf&X-Amz-Signature=8b9d212ac1ee5e17096284777fc1a207458d8298e06256727df905e5a4e9143e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GHI3L2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9eOjA2QeA5bjGSHz1ps9su8WvAsB7Sg5B8xebl0NQDAiBDFO23d71d0wZXWzS2SppJZxi8ZTgae3Pr3y2mW7ZZDCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqYlLgmGFhHngI31KtwDGDMPtfFQGHbrzysGpiSsATzuxP%2B4uJG42mql%2Bm9EBmaoIb611MIUMomZWx9zIISSELEQIdeg%2F%2BznQi5ftaSW9Cb05tVivosTKI87oid0d9ymAqNWWGXy%2F2e%2BtN%2BP9ZKnt3moZpXuyb%2BdZQmabFXU6OyaGDzbEHled%2BPh3%2FC5U%2Bc%2FUOVImBpAMV6k0gEvoVh82FJPWOG2rvZtBBQmjR29qaJGVOvTaitHOpro2KCWV1u3a0nWVjKp1rPPI0N0dWr7seGQZUhVwNg%2BFr1yifvbBQy3FVRZTTMr6AAbetxwl%2FGEaP2DpkdxndsUVc%2FvPiJrRh5tn7RdBLr5VajnriIgc2LIBYlwS0AntQl9eCI%2BT4QnQMPiY%2B%2Fcco3aeK9oGE5bIzZP2S7vEYIWoAht8%2FYwujn7IYgJGpI6NPDVgR3mQRjqgwgNflnyl4N%2BCTa5R3Y8%2F0UGaGI3gmVtw7s2zNXL3DVc8GXLv2cUI82%2BejxYQU5tCgnqYCiE%2F3gf22TUV2ji3juOrnK8ds884gZ9qMzgwHDCyfn%2BHRrg%2BYh8Zpqnixr%2Bh%2BijNRqABMT8Pl0D4RMxRChDJbwn2y%2B%2Bdt5s9U%2FbD%2F%2F0vD%2F2Ry8umec%2BBngQwdxA5TyirHOYTXcbyMgwxqDIwgY6pgGhmqsR5CnrEwek8URzOCFiy91Py6fbRVkdtY40zWyxhr%2BRUjwqsrrtzOWoo5lWsW17sMY5tm9sGiM7PE4G69BGATlUfykSasYDy8nLK25Kit9uDByaeZjZvTIEDQdomOGqRpqxwXGG%2FHGDzt1pPdq0cyC0DI4e6FU6q4J6jLrojtOcf58HtUGB%2FTiBVCAYm9SO0hqzFF4xUjgeUT5I3hIvTId0YkZf&X-Amz-Signature=b74454057e1bfc10b33cf10a045e20a18f34081fbb4a6c2424e472de8d71e2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GHI3L2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9eOjA2QeA5bjGSHz1ps9su8WvAsB7Sg5B8xebl0NQDAiBDFO23d71d0wZXWzS2SppJZxi8ZTgae3Pr3y2mW7ZZDCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqYlLgmGFhHngI31KtwDGDMPtfFQGHbrzysGpiSsATzuxP%2B4uJG42mql%2Bm9EBmaoIb611MIUMomZWx9zIISSELEQIdeg%2F%2BznQi5ftaSW9Cb05tVivosTKI87oid0d9ymAqNWWGXy%2F2e%2BtN%2BP9ZKnt3moZpXuyb%2BdZQmabFXU6OyaGDzbEHled%2BPh3%2FC5U%2Bc%2FUOVImBpAMV6k0gEvoVh82FJPWOG2rvZtBBQmjR29qaJGVOvTaitHOpro2KCWV1u3a0nWVjKp1rPPI0N0dWr7seGQZUhVwNg%2BFr1yifvbBQy3FVRZTTMr6AAbetxwl%2FGEaP2DpkdxndsUVc%2FvPiJrRh5tn7RdBLr5VajnriIgc2LIBYlwS0AntQl9eCI%2BT4QnQMPiY%2B%2Fcco3aeK9oGE5bIzZP2S7vEYIWoAht8%2FYwujn7IYgJGpI6NPDVgR3mQRjqgwgNflnyl4N%2BCTa5R3Y8%2F0UGaGI3gmVtw7s2zNXL3DVc8GXLv2cUI82%2BejxYQU5tCgnqYCiE%2F3gf22TUV2ji3juOrnK8ds884gZ9qMzgwHDCyfn%2BHRrg%2BYh8Zpqnixr%2Bh%2BijNRqABMT8Pl0D4RMxRChDJbwn2y%2B%2Bdt5s9U%2FbD%2F%2F0vD%2F2Ry8umec%2BBngQwdxA5TyirHOYTXcbyMgwxqDIwgY6pgGhmqsR5CnrEwek8URzOCFiy91Py6fbRVkdtY40zWyxhr%2BRUjwqsrrtzOWoo5lWsW17sMY5tm9sGiM7PE4G69BGATlUfykSasYDy8nLK25Kit9uDByaeZjZvTIEDQdomOGqRpqxwXGG%2FHGDzt1pPdq0cyC0DI4e6FU6q4J6jLrojtOcf58HtUGB%2FTiBVCAYm9SO0hqzFF4xUjgeUT5I3hIvTId0YkZf&X-Amz-Signature=3eab5c18f06f0108dfb00f23f651994bc80756901daa1ecac84dce1b6437ea5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
