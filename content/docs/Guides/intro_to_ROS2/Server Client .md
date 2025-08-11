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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2BKNCQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BpUEyY2HKPBdU5HFNrRsVnBnyzlKUpy%2F50bsIYEEKwIhAKZ4f7zvk04kSzyY1cTIsRoKmCwnDj3x%2FG5RR60k7etnKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxcCBeVS6d%2BQFhSYq3ANTht%2FLUhMl0r%2Bz%2BJ%2BaZiuN%2FfWzpk4gjD5aG7cN299Evw0%2FMusHaSRUz2kQ4j9Ahjh4i1xQQbW%2BXnmBRqJ6JrmcInf%2BQFjAbZOxBdauVPrHM2LAN4k%2FCS6wcEtGFhhPjX9HqWk0mHOQw2hrDAv1TAYdxerPdvsp8RZTs5MjubWM%2Fz1%2BjvOk2%2BilziIyBxhaLPu9zbogrsgepYzICO%2FUDQKnM0JKbYdzT8o6dCXgBXqevKrbX%2FCqcxbXRzWLWx1A0podMmRCG6J49hyzNLNtGDROB%2BkwG2EnSXrCak8e3cY6qTtjGeaIeFkuHqrPBWoJDGUNZpTlpi9XgGJrPf86%2F1MKrUwwpNjzfS%2Fkfs1kJBhUBY7%2BxzrsDa9B16kORQkcWlDbnnhaYiJ6HvJbjV0AW143CBKv4t5T%2Bcd%2FBXfbvfpxaMUgsHKtfn8r6I6qqbPbrMpkXgzM2xOLlpF6x0MfwMDLz6O9ibLw2VSzkIdj9LlIt7cp9Y9CRerIPf9Ck23rR5UEuiihfYVyGHQrljLBvrFFScT%2FO%2BRT14%2Fn1mxhhGTGIYrXJEyiQ8PJA85%2FqbBLfC9%2F3a%2F8cuHMVIy76VF42IGxzVWFQXOa%2FDtl1GgrenJm%2FA0X3vls4fj5xO6lmzDLoufEBjqkAZ9kTy91V%2FqGDaRzIKr3qJws0stnAkTm%2FcefDhvYsHPHRPjXpb1xMofu8XnLPh5eQu3qUbNBE7iS0b9IlAUy9gzk0yP728on27baqeWse7VshD%2Bho%2FEQhxBDwu98KG2IVPZOOsWOiPBdfSE6sRrSCTYFBaU%2BFw4q1tWKl8qFLjF%2FbQ6efuFK0tFgHBpktH%2BiWCbl40oHbmLt0CQN5XrFBprv%2FqS4&X-Amz-Signature=5aabeefff82938dc5314bbcf62b5c9adfd2c62e0d29fb3e80b200568868e2e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2BKNCQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BpUEyY2HKPBdU5HFNrRsVnBnyzlKUpy%2F50bsIYEEKwIhAKZ4f7zvk04kSzyY1cTIsRoKmCwnDj3x%2FG5RR60k7etnKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxcCBeVS6d%2BQFhSYq3ANTht%2FLUhMl0r%2Bz%2BJ%2BaZiuN%2FfWzpk4gjD5aG7cN299Evw0%2FMusHaSRUz2kQ4j9Ahjh4i1xQQbW%2BXnmBRqJ6JrmcInf%2BQFjAbZOxBdauVPrHM2LAN4k%2FCS6wcEtGFhhPjX9HqWk0mHOQw2hrDAv1TAYdxerPdvsp8RZTs5MjubWM%2Fz1%2BjvOk2%2BilziIyBxhaLPu9zbogrsgepYzICO%2FUDQKnM0JKbYdzT8o6dCXgBXqevKrbX%2FCqcxbXRzWLWx1A0podMmRCG6J49hyzNLNtGDROB%2BkwG2EnSXrCak8e3cY6qTtjGeaIeFkuHqrPBWoJDGUNZpTlpi9XgGJrPf86%2F1MKrUwwpNjzfS%2Fkfs1kJBhUBY7%2BxzrsDa9B16kORQkcWlDbnnhaYiJ6HvJbjV0AW143CBKv4t5T%2Bcd%2FBXfbvfpxaMUgsHKtfn8r6I6qqbPbrMpkXgzM2xOLlpF6x0MfwMDLz6O9ibLw2VSzkIdj9LlIt7cp9Y9CRerIPf9Ck23rR5UEuiihfYVyGHQrljLBvrFFScT%2FO%2BRT14%2Fn1mxhhGTGIYrXJEyiQ8PJA85%2FqbBLfC9%2F3a%2F8cuHMVIy76VF42IGxzVWFQXOa%2FDtl1GgrenJm%2FA0X3vls4fj5xO6lmzDLoufEBjqkAZ9kTy91V%2FqGDaRzIKr3qJws0stnAkTm%2FcefDhvYsHPHRPjXpb1xMofu8XnLPh5eQu3qUbNBE7iS0b9IlAUy9gzk0yP728on27baqeWse7VshD%2Bho%2FEQhxBDwu98KG2IVPZOOsWOiPBdfSE6sRrSCTYFBaU%2BFw4q1tWKl8qFLjF%2FbQ6efuFK0tFgHBpktH%2BiWCbl40oHbmLt0CQN5XrFBprv%2FqS4&X-Amz-Signature=a5a5b74dac3a5b5c74e61220d925ae8fd6be9336fc09daf5cbc84f37aac2b728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2BKNCQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BpUEyY2HKPBdU5HFNrRsVnBnyzlKUpy%2F50bsIYEEKwIhAKZ4f7zvk04kSzyY1cTIsRoKmCwnDj3x%2FG5RR60k7etnKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxcCBeVS6d%2BQFhSYq3ANTht%2FLUhMl0r%2Bz%2BJ%2BaZiuN%2FfWzpk4gjD5aG7cN299Evw0%2FMusHaSRUz2kQ4j9Ahjh4i1xQQbW%2BXnmBRqJ6JrmcInf%2BQFjAbZOxBdauVPrHM2LAN4k%2FCS6wcEtGFhhPjX9HqWk0mHOQw2hrDAv1TAYdxerPdvsp8RZTs5MjubWM%2Fz1%2BjvOk2%2BilziIyBxhaLPu9zbogrsgepYzICO%2FUDQKnM0JKbYdzT8o6dCXgBXqevKrbX%2FCqcxbXRzWLWx1A0podMmRCG6J49hyzNLNtGDROB%2BkwG2EnSXrCak8e3cY6qTtjGeaIeFkuHqrPBWoJDGUNZpTlpi9XgGJrPf86%2F1MKrUwwpNjzfS%2Fkfs1kJBhUBY7%2BxzrsDa9B16kORQkcWlDbnnhaYiJ6HvJbjV0AW143CBKv4t5T%2Bcd%2FBXfbvfpxaMUgsHKtfn8r6I6qqbPbrMpkXgzM2xOLlpF6x0MfwMDLz6O9ibLw2VSzkIdj9LlIt7cp9Y9CRerIPf9Ck23rR5UEuiihfYVyGHQrljLBvrFFScT%2FO%2BRT14%2Fn1mxhhGTGIYrXJEyiQ8PJA85%2FqbBLfC9%2F3a%2F8cuHMVIy76VF42IGxzVWFQXOa%2FDtl1GgrenJm%2FA0X3vls4fj5xO6lmzDLoufEBjqkAZ9kTy91V%2FqGDaRzIKr3qJws0stnAkTm%2FcefDhvYsHPHRPjXpb1xMofu8XnLPh5eQu3qUbNBE7iS0b9IlAUy9gzk0yP728on27baqeWse7VshD%2Bho%2FEQhxBDwu98KG2IVPZOOsWOiPBdfSE6sRrSCTYFBaU%2BFw4q1tWKl8qFLjF%2FbQ6efuFK0tFgHBpktH%2BiWCbl40oHbmLt0CQN5XrFBprv%2FqS4&X-Amz-Signature=bfaf52ff43a36984ef0021a17edf3250f16c7c0728087931b9124ca030fa01ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2BKNCQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BpUEyY2HKPBdU5HFNrRsVnBnyzlKUpy%2F50bsIYEEKwIhAKZ4f7zvk04kSzyY1cTIsRoKmCwnDj3x%2FG5RR60k7etnKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxcCBeVS6d%2BQFhSYq3ANTht%2FLUhMl0r%2Bz%2BJ%2BaZiuN%2FfWzpk4gjD5aG7cN299Evw0%2FMusHaSRUz2kQ4j9Ahjh4i1xQQbW%2BXnmBRqJ6JrmcInf%2BQFjAbZOxBdauVPrHM2LAN4k%2FCS6wcEtGFhhPjX9HqWk0mHOQw2hrDAv1TAYdxerPdvsp8RZTs5MjubWM%2Fz1%2BjvOk2%2BilziIyBxhaLPu9zbogrsgepYzICO%2FUDQKnM0JKbYdzT8o6dCXgBXqevKrbX%2FCqcxbXRzWLWx1A0podMmRCG6J49hyzNLNtGDROB%2BkwG2EnSXrCak8e3cY6qTtjGeaIeFkuHqrPBWoJDGUNZpTlpi9XgGJrPf86%2F1MKrUwwpNjzfS%2Fkfs1kJBhUBY7%2BxzrsDa9B16kORQkcWlDbnnhaYiJ6HvJbjV0AW143CBKv4t5T%2Bcd%2FBXfbvfpxaMUgsHKtfn8r6I6qqbPbrMpkXgzM2xOLlpF6x0MfwMDLz6O9ibLw2VSzkIdj9LlIt7cp9Y9CRerIPf9Ck23rR5UEuiihfYVyGHQrljLBvrFFScT%2FO%2BRT14%2Fn1mxhhGTGIYrXJEyiQ8PJA85%2FqbBLfC9%2F3a%2F8cuHMVIy76VF42IGxzVWFQXOa%2FDtl1GgrenJm%2FA0X3vls4fj5xO6lmzDLoufEBjqkAZ9kTy91V%2FqGDaRzIKr3qJws0stnAkTm%2FcefDhvYsHPHRPjXpb1xMofu8XnLPh5eQu3qUbNBE7iS0b9IlAUy9gzk0yP728on27baqeWse7VshD%2Bho%2FEQhxBDwu98KG2IVPZOOsWOiPBdfSE6sRrSCTYFBaU%2BFw4q1tWKl8qFLjF%2FbQ6efuFK0tFgHBpktH%2BiWCbl40oHbmLt0CQN5XrFBprv%2FqS4&X-Amz-Signature=a15f09b722d48fd9120db0877fcd312891c654e86cd86a23e82a023aaefdce42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2BKNCQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BpUEyY2HKPBdU5HFNrRsVnBnyzlKUpy%2F50bsIYEEKwIhAKZ4f7zvk04kSzyY1cTIsRoKmCwnDj3x%2FG5RR60k7etnKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxcCBeVS6d%2BQFhSYq3ANTht%2FLUhMl0r%2Bz%2BJ%2BaZiuN%2FfWzpk4gjD5aG7cN299Evw0%2FMusHaSRUz2kQ4j9Ahjh4i1xQQbW%2BXnmBRqJ6JrmcInf%2BQFjAbZOxBdauVPrHM2LAN4k%2FCS6wcEtGFhhPjX9HqWk0mHOQw2hrDAv1TAYdxerPdvsp8RZTs5MjubWM%2Fz1%2BjvOk2%2BilziIyBxhaLPu9zbogrsgepYzICO%2FUDQKnM0JKbYdzT8o6dCXgBXqevKrbX%2FCqcxbXRzWLWx1A0podMmRCG6J49hyzNLNtGDROB%2BkwG2EnSXrCak8e3cY6qTtjGeaIeFkuHqrPBWoJDGUNZpTlpi9XgGJrPf86%2F1MKrUwwpNjzfS%2Fkfs1kJBhUBY7%2BxzrsDa9B16kORQkcWlDbnnhaYiJ6HvJbjV0AW143CBKv4t5T%2Bcd%2FBXfbvfpxaMUgsHKtfn8r6I6qqbPbrMpkXgzM2xOLlpF6x0MfwMDLz6O9ibLw2VSzkIdj9LlIt7cp9Y9CRerIPf9Ck23rR5UEuiihfYVyGHQrljLBvrFFScT%2FO%2BRT14%2Fn1mxhhGTGIYrXJEyiQ8PJA85%2FqbBLfC9%2F3a%2F8cuHMVIy76VF42IGxzVWFQXOa%2FDtl1GgrenJm%2FA0X3vls4fj5xO6lmzDLoufEBjqkAZ9kTy91V%2FqGDaRzIKr3qJws0stnAkTm%2FcefDhvYsHPHRPjXpb1xMofu8XnLPh5eQu3qUbNBE7iS0b9IlAUy9gzk0yP728on27baqeWse7VshD%2Bho%2FEQhxBDwu98KG2IVPZOOsWOiPBdfSE6sRrSCTYFBaU%2BFw4q1tWKl8qFLjF%2FbQ6efuFK0tFgHBpktH%2BiWCbl40oHbmLt0CQN5XrFBprv%2FqS4&X-Amz-Signature=5f869ff2ff8935c3aa94036efe778f7c58ade96d852af5b957d4559ae083f842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
