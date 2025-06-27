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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMOEXIX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCEv8bapTYwGpld7zCpGtNd4kbFUms96NI6NJis8AXOjQIhALCHbtG%2FZzobM2kKhWkC21EQeijLRyFTDjoZwn5Eu16sKv8DCHMQABoMNjM3NDIzMTgzODA1Igz2pDeufsNPYBH9accq3APNOz%2BJRy8uWgXiIRICqb0Ze7uWLbYJXAm0PO5nJDXJvnBSyCF7%2F%2F0V08hlZxExqeY%2FaVap4sOBanyGhaAJ7xR6CjMcGly7Fg1TMT9zm1vIPCz8qsXIAabNfHOuLouwWohAVIBi3dOUG4gUhVwe4nGCaDdj%2BzD7xVCTFvcHtYm%2Fjmzgn3J%2BIzp%2FPAzeE6g1jYYrMkC41RS%2BRh2Ed18vjfDoZN%2B0oTrw4zCdTdLObW3Ym%2BaQ6mYqsfekDYOvU%2F3yjxIUkymyf8NUg%2BOyD3pesq55N4Pm2xx1JkLhHbJvyKynjq605F8ovmMu5XGTw%2FkLIx8d6umSqw3D8rwP5JEiE%2BebYIWCdRQW9lWQCzILAYpVDPlXfKEWMA%2BltWogDqlnkr5%2F3Bw5rngrXC7gjVC7Elkrm3jaBtMnMCCHvVYRQku7sURBegRJ9v%2FqEOdaYuL9ma3xJ8O2%2FIaKKeKYGe%2BR66YLS%2F%2B7dpcY%2B1DYDSoayOmwZ8f9hgDf3Z7fqgewteS7MyUsSBj8wP1kgC7E1HgphWbWKm3JrSUEhNLqYN%2FdgkCGUjL2SiZsUpHAJMfQmRLUojoj6MlxqENqI51qmoUBxR3hziCgYPLRDAc7C4hjCJJjT6f1ThF%2Bkoeq03CkwTC80%2FnCBjqkAd%2F%2BCnTsfd1mnXkgebSshfGj2E5R09iK4o0CKUYUJ1QzSEFzjN2WwgW3z7ivsdHFIfcyCDwSzXdzsZfB3o4vi09wWVOnddLP8I0IIR6ffG3Z1kdn9Gk7eLphjgu2HWksAF7IK%2BBr1CE%2B7r3XqKw8i4elTGkGP9smfwX9yzLhvliDEVvQwqqvQ0PTQkzQKmsYgg1OUXdv8JmOGLpWgKlgPN%2BvcIS4&X-Amz-Signature=2a39e50980b93e1e37af33a7f70a3d9e0da267d24ed0ce1225908dfe66f8bb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMOEXIX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCEv8bapTYwGpld7zCpGtNd4kbFUms96NI6NJis8AXOjQIhALCHbtG%2FZzobM2kKhWkC21EQeijLRyFTDjoZwn5Eu16sKv8DCHMQABoMNjM3NDIzMTgzODA1Igz2pDeufsNPYBH9accq3APNOz%2BJRy8uWgXiIRICqb0Ze7uWLbYJXAm0PO5nJDXJvnBSyCF7%2F%2F0V08hlZxExqeY%2FaVap4sOBanyGhaAJ7xR6CjMcGly7Fg1TMT9zm1vIPCz8qsXIAabNfHOuLouwWohAVIBi3dOUG4gUhVwe4nGCaDdj%2BzD7xVCTFvcHtYm%2Fjmzgn3J%2BIzp%2FPAzeE6g1jYYrMkC41RS%2BRh2Ed18vjfDoZN%2B0oTrw4zCdTdLObW3Ym%2BaQ6mYqsfekDYOvU%2F3yjxIUkymyf8NUg%2BOyD3pesq55N4Pm2xx1JkLhHbJvyKynjq605F8ovmMu5XGTw%2FkLIx8d6umSqw3D8rwP5JEiE%2BebYIWCdRQW9lWQCzILAYpVDPlXfKEWMA%2BltWogDqlnkr5%2F3Bw5rngrXC7gjVC7Elkrm3jaBtMnMCCHvVYRQku7sURBegRJ9v%2FqEOdaYuL9ma3xJ8O2%2FIaKKeKYGe%2BR66YLS%2F%2B7dpcY%2B1DYDSoayOmwZ8f9hgDf3Z7fqgewteS7MyUsSBj8wP1kgC7E1HgphWbWKm3JrSUEhNLqYN%2FdgkCGUjL2SiZsUpHAJMfQmRLUojoj6MlxqENqI51qmoUBxR3hziCgYPLRDAc7C4hjCJJjT6f1ThF%2Bkoeq03CkwTC80%2FnCBjqkAd%2F%2BCnTsfd1mnXkgebSshfGj2E5R09iK4o0CKUYUJ1QzSEFzjN2WwgW3z7ivsdHFIfcyCDwSzXdzsZfB3o4vi09wWVOnddLP8I0IIR6ffG3Z1kdn9Gk7eLphjgu2HWksAF7IK%2BBr1CE%2B7r3XqKw8i4elTGkGP9smfwX9yzLhvliDEVvQwqqvQ0PTQkzQKmsYgg1OUXdv8JmOGLpWgKlgPN%2BvcIS4&X-Amz-Signature=1db2c8059d5876d4e8ea07c01e1fdef583d05817f6010d6f574394d3392278a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMOEXIX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCEv8bapTYwGpld7zCpGtNd4kbFUms96NI6NJis8AXOjQIhALCHbtG%2FZzobM2kKhWkC21EQeijLRyFTDjoZwn5Eu16sKv8DCHMQABoMNjM3NDIzMTgzODA1Igz2pDeufsNPYBH9accq3APNOz%2BJRy8uWgXiIRICqb0Ze7uWLbYJXAm0PO5nJDXJvnBSyCF7%2F%2F0V08hlZxExqeY%2FaVap4sOBanyGhaAJ7xR6CjMcGly7Fg1TMT9zm1vIPCz8qsXIAabNfHOuLouwWohAVIBi3dOUG4gUhVwe4nGCaDdj%2BzD7xVCTFvcHtYm%2Fjmzgn3J%2BIzp%2FPAzeE6g1jYYrMkC41RS%2BRh2Ed18vjfDoZN%2B0oTrw4zCdTdLObW3Ym%2BaQ6mYqsfekDYOvU%2F3yjxIUkymyf8NUg%2BOyD3pesq55N4Pm2xx1JkLhHbJvyKynjq605F8ovmMu5XGTw%2FkLIx8d6umSqw3D8rwP5JEiE%2BebYIWCdRQW9lWQCzILAYpVDPlXfKEWMA%2BltWogDqlnkr5%2F3Bw5rngrXC7gjVC7Elkrm3jaBtMnMCCHvVYRQku7sURBegRJ9v%2FqEOdaYuL9ma3xJ8O2%2FIaKKeKYGe%2BR66YLS%2F%2B7dpcY%2B1DYDSoayOmwZ8f9hgDf3Z7fqgewteS7MyUsSBj8wP1kgC7E1HgphWbWKm3JrSUEhNLqYN%2FdgkCGUjL2SiZsUpHAJMfQmRLUojoj6MlxqENqI51qmoUBxR3hziCgYPLRDAc7C4hjCJJjT6f1ThF%2Bkoeq03CkwTC80%2FnCBjqkAd%2F%2BCnTsfd1mnXkgebSshfGj2E5R09iK4o0CKUYUJ1QzSEFzjN2WwgW3z7ivsdHFIfcyCDwSzXdzsZfB3o4vi09wWVOnddLP8I0IIR6ffG3Z1kdn9Gk7eLphjgu2HWksAF7IK%2BBr1CE%2B7r3XqKw8i4elTGkGP9smfwX9yzLhvliDEVvQwqqvQ0PTQkzQKmsYgg1OUXdv8JmOGLpWgKlgPN%2BvcIS4&X-Amz-Signature=95c71a74013fc3de0f1f8aa9a3138cea93d8c2f311b4c19b315ed7707b7874be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMOEXIX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCEv8bapTYwGpld7zCpGtNd4kbFUms96NI6NJis8AXOjQIhALCHbtG%2FZzobM2kKhWkC21EQeijLRyFTDjoZwn5Eu16sKv8DCHMQABoMNjM3NDIzMTgzODA1Igz2pDeufsNPYBH9accq3APNOz%2BJRy8uWgXiIRICqb0Ze7uWLbYJXAm0PO5nJDXJvnBSyCF7%2F%2F0V08hlZxExqeY%2FaVap4sOBanyGhaAJ7xR6CjMcGly7Fg1TMT9zm1vIPCz8qsXIAabNfHOuLouwWohAVIBi3dOUG4gUhVwe4nGCaDdj%2BzD7xVCTFvcHtYm%2Fjmzgn3J%2BIzp%2FPAzeE6g1jYYrMkC41RS%2BRh2Ed18vjfDoZN%2B0oTrw4zCdTdLObW3Ym%2BaQ6mYqsfekDYOvU%2F3yjxIUkymyf8NUg%2BOyD3pesq55N4Pm2xx1JkLhHbJvyKynjq605F8ovmMu5XGTw%2FkLIx8d6umSqw3D8rwP5JEiE%2BebYIWCdRQW9lWQCzILAYpVDPlXfKEWMA%2BltWogDqlnkr5%2F3Bw5rngrXC7gjVC7Elkrm3jaBtMnMCCHvVYRQku7sURBegRJ9v%2FqEOdaYuL9ma3xJ8O2%2FIaKKeKYGe%2BR66YLS%2F%2B7dpcY%2B1DYDSoayOmwZ8f9hgDf3Z7fqgewteS7MyUsSBj8wP1kgC7E1HgphWbWKm3JrSUEhNLqYN%2FdgkCGUjL2SiZsUpHAJMfQmRLUojoj6MlxqENqI51qmoUBxR3hziCgYPLRDAc7C4hjCJJjT6f1ThF%2Bkoeq03CkwTC80%2FnCBjqkAd%2F%2BCnTsfd1mnXkgebSshfGj2E5R09iK4o0CKUYUJ1QzSEFzjN2WwgW3z7ivsdHFIfcyCDwSzXdzsZfB3o4vi09wWVOnddLP8I0IIR6ffG3Z1kdn9Gk7eLphjgu2HWksAF7IK%2BBr1CE%2B7r3XqKw8i4elTGkGP9smfwX9yzLhvliDEVvQwqqvQ0PTQkzQKmsYgg1OUXdv8JmOGLpWgKlgPN%2BvcIS4&X-Amz-Signature=24d689cdc1e639479faa63b9c9a150ec242d6a5b529f5ae88e8eec86f5a76295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMOEXIX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCEv8bapTYwGpld7zCpGtNd4kbFUms96NI6NJis8AXOjQIhALCHbtG%2FZzobM2kKhWkC21EQeijLRyFTDjoZwn5Eu16sKv8DCHMQABoMNjM3NDIzMTgzODA1Igz2pDeufsNPYBH9accq3APNOz%2BJRy8uWgXiIRICqb0Ze7uWLbYJXAm0PO5nJDXJvnBSyCF7%2F%2F0V08hlZxExqeY%2FaVap4sOBanyGhaAJ7xR6CjMcGly7Fg1TMT9zm1vIPCz8qsXIAabNfHOuLouwWohAVIBi3dOUG4gUhVwe4nGCaDdj%2BzD7xVCTFvcHtYm%2Fjmzgn3J%2BIzp%2FPAzeE6g1jYYrMkC41RS%2BRh2Ed18vjfDoZN%2B0oTrw4zCdTdLObW3Ym%2BaQ6mYqsfekDYOvU%2F3yjxIUkymyf8NUg%2BOyD3pesq55N4Pm2xx1JkLhHbJvyKynjq605F8ovmMu5XGTw%2FkLIx8d6umSqw3D8rwP5JEiE%2BebYIWCdRQW9lWQCzILAYpVDPlXfKEWMA%2BltWogDqlnkr5%2F3Bw5rngrXC7gjVC7Elkrm3jaBtMnMCCHvVYRQku7sURBegRJ9v%2FqEOdaYuL9ma3xJ8O2%2FIaKKeKYGe%2BR66YLS%2F%2B7dpcY%2B1DYDSoayOmwZ8f9hgDf3Z7fqgewteS7MyUsSBj8wP1kgC7E1HgphWbWKm3JrSUEhNLqYN%2FdgkCGUjL2SiZsUpHAJMfQmRLUojoj6MlxqENqI51qmoUBxR3hziCgYPLRDAc7C4hjCJJjT6f1ThF%2Bkoeq03CkwTC80%2FnCBjqkAd%2F%2BCnTsfd1mnXkgebSshfGj2E5R09iK4o0CKUYUJ1QzSEFzjN2WwgW3z7ivsdHFIfcyCDwSzXdzsZfB3o4vi09wWVOnddLP8I0IIR6ffG3Z1kdn9Gk7eLphjgu2HWksAF7IK%2BBr1CE%2B7r3XqKw8i4elTGkGP9smfwX9yzLhvliDEVvQwqqvQ0PTQkzQKmsYgg1OUXdv8JmOGLpWgKlgPN%2BvcIS4&X-Amz-Signature=fac65a8174d799cc5537fad68738537686c11e0eb15bb878fc09e3106a562f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
