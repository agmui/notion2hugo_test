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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELXJXPL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4VSkuiFfOkN643PeKLU0aM9%2FyigIi7PmH%2Fsn%2BWM%2FMAiBBDHGmH6Tc%2BoBYGi8Bzpz91plNdgj%2BSL17HiWb5PdzACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENaVenztlatrlHYSKtwDQkgC1p2U4GJQhItITiFz6ULrGMI%2BHI2Vt1uzQgV%2FYT2sShMRIdTzga%2F3gAu21%2BGDQ%2B3xmkmJb0WQPaZgtUU1l6NTVu3Naueg3RhXhWV0r%2FopezObD7nRo7iX%2BPGmf1muFEfgSPLMwCGqwYov479mI3Ur%2FoOpF92nqSdPMKzNBj9l%2Fiy2W%2BgP366KG%2FgSuKOdBTr2ydLhlgP6xpIBi%2BW5X32Y2I%2FQojtdlinZNBx%2BGUITksgymjY2r63BiEhPBmYL1ezlCh96ledthMJDj9r5%2FofeUQSNIQJrnyJwmSmUho5%2BaFL0stri6lOYHb%2FKj%2BQytTYZ5vf4XXuRYwutgfCIdAYmADa3d2i9AuqxXg7cDImAYiuM7hiAecqBxOWrMV8jC6W3JkXknJFBzr9ae6tsGW8%2F0JFEOAh4Te%2BdbEN7KUjm8R%2FSuiVjuKocJzOCTsGVF4NJ3bUoN5AW%2Fa%2FnDwkn%2Fl51uWDWdmBA9NsNP7pqmLDzaairwleCMYTBIqUAJ7aRSL39zvs2E9vQ3yiTvIAiNx%2B26aqgpOQ3f6cm7yFEAybXMCTvPv%2FhlPrJRNJ302YFAEYapxaFcY9sesiBZP%2FA4f2jvK2mDtK%2FQFZedmX3Dw2UkaL8J5%2FmXwxLUnEwjs2GwwY6pgFKyggG0Dtgy%2Bw5Q7knrLg5jTuPzR7T4B%2B2HyrLjvwApzXpJlfvkPQvOL%2FRSUjjDpSsdM3Qdxsv1v7%2FhlgWY261IvBNV0AhNsGDbgU2ExV9d38J2kDFDZq%2FbDkmr8fd6w68UN%2B7p2ce8EKgIx1djgfx9Q8dXX8ulJsBvh7QycsrDuNMOu07w2loeHi2iXJL1Qn1cRBVKRuyA5cbK7H6Z%2F1afBkg26oB&X-Amz-Signature=e7d9ba17e0bc64957efcfece647e97ea0a9534bc239bdc427119777b6ffdec3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELXJXPL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4VSkuiFfOkN643PeKLU0aM9%2FyigIi7PmH%2Fsn%2BWM%2FMAiBBDHGmH6Tc%2BoBYGi8Bzpz91plNdgj%2BSL17HiWb5PdzACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENaVenztlatrlHYSKtwDQkgC1p2U4GJQhItITiFz6ULrGMI%2BHI2Vt1uzQgV%2FYT2sShMRIdTzga%2F3gAu21%2BGDQ%2B3xmkmJb0WQPaZgtUU1l6NTVu3Naueg3RhXhWV0r%2FopezObD7nRo7iX%2BPGmf1muFEfgSPLMwCGqwYov479mI3Ur%2FoOpF92nqSdPMKzNBj9l%2Fiy2W%2BgP366KG%2FgSuKOdBTr2ydLhlgP6xpIBi%2BW5X32Y2I%2FQojtdlinZNBx%2BGUITksgymjY2r63BiEhPBmYL1ezlCh96ledthMJDj9r5%2FofeUQSNIQJrnyJwmSmUho5%2BaFL0stri6lOYHb%2FKj%2BQytTYZ5vf4XXuRYwutgfCIdAYmADa3d2i9AuqxXg7cDImAYiuM7hiAecqBxOWrMV8jC6W3JkXknJFBzr9ae6tsGW8%2F0JFEOAh4Te%2BdbEN7KUjm8R%2FSuiVjuKocJzOCTsGVF4NJ3bUoN5AW%2Fa%2FnDwkn%2Fl51uWDWdmBA9NsNP7pqmLDzaairwleCMYTBIqUAJ7aRSL39zvs2E9vQ3yiTvIAiNx%2B26aqgpOQ3f6cm7yFEAybXMCTvPv%2FhlPrJRNJ302YFAEYapxaFcY9sesiBZP%2FA4f2jvK2mDtK%2FQFZedmX3Dw2UkaL8J5%2FmXwxLUnEwjs2GwwY6pgFKyggG0Dtgy%2Bw5Q7knrLg5jTuPzR7T4B%2B2HyrLjvwApzXpJlfvkPQvOL%2FRSUjjDpSsdM3Qdxsv1v7%2FhlgWY261IvBNV0AhNsGDbgU2ExV9d38J2kDFDZq%2FbDkmr8fd6w68UN%2B7p2ce8EKgIx1djgfx9Q8dXX8ulJsBvh7QycsrDuNMOu07w2loeHi2iXJL1Qn1cRBVKRuyA5cbK7H6Z%2F1afBkg26oB&X-Amz-Signature=42b8808c400e697864ca8b44a954fffa8da161637608bd2c03972eead6152e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELXJXPL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4VSkuiFfOkN643PeKLU0aM9%2FyigIi7PmH%2Fsn%2BWM%2FMAiBBDHGmH6Tc%2BoBYGi8Bzpz91plNdgj%2BSL17HiWb5PdzACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENaVenztlatrlHYSKtwDQkgC1p2U4GJQhItITiFz6ULrGMI%2BHI2Vt1uzQgV%2FYT2sShMRIdTzga%2F3gAu21%2BGDQ%2B3xmkmJb0WQPaZgtUU1l6NTVu3Naueg3RhXhWV0r%2FopezObD7nRo7iX%2BPGmf1muFEfgSPLMwCGqwYov479mI3Ur%2FoOpF92nqSdPMKzNBj9l%2Fiy2W%2BgP366KG%2FgSuKOdBTr2ydLhlgP6xpIBi%2BW5X32Y2I%2FQojtdlinZNBx%2BGUITksgymjY2r63BiEhPBmYL1ezlCh96ledthMJDj9r5%2FofeUQSNIQJrnyJwmSmUho5%2BaFL0stri6lOYHb%2FKj%2BQytTYZ5vf4XXuRYwutgfCIdAYmADa3d2i9AuqxXg7cDImAYiuM7hiAecqBxOWrMV8jC6W3JkXknJFBzr9ae6tsGW8%2F0JFEOAh4Te%2BdbEN7KUjm8R%2FSuiVjuKocJzOCTsGVF4NJ3bUoN5AW%2Fa%2FnDwkn%2Fl51uWDWdmBA9NsNP7pqmLDzaairwleCMYTBIqUAJ7aRSL39zvs2E9vQ3yiTvIAiNx%2B26aqgpOQ3f6cm7yFEAybXMCTvPv%2FhlPrJRNJ302YFAEYapxaFcY9sesiBZP%2FA4f2jvK2mDtK%2FQFZedmX3Dw2UkaL8J5%2FmXwxLUnEwjs2GwwY6pgFKyggG0Dtgy%2Bw5Q7knrLg5jTuPzR7T4B%2B2HyrLjvwApzXpJlfvkPQvOL%2FRSUjjDpSsdM3Qdxsv1v7%2FhlgWY261IvBNV0AhNsGDbgU2ExV9d38J2kDFDZq%2FbDkmr8fd6w68UN%2B7p2ce8EKgIx1djgfx9Q8dXX8ulJsBvh7QycsrDuNMOu07w2loeHi2iXJL1Qn1cRBVKRuyA5cbK7H6Z%2F1afBkg26oB&X-Amz-Signature=0de999388769f6a0753ba63208bc0c690e6309bd95c61306c7955dfc9f99f0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELXJXPL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4VSkuiFfOkN643PeKLU0aM9%2FyigIi7PmH%2Fsn%2BWM%2FMAiBBDHGmH6Tc%2BoBYGi8Bzpz91plNdgj%2BSL17HiWb5PdzACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENaVenztlatrlHYSKtwDQkgC1p2U4GJQhItITiFz6ULrGMI%2BHI2Vt1uzQgV%2FYT2sShMRIdTzga%2F3gAu21%2BGDQ%2B3xmkmJb0WQPaZgtUU1l6NTVu3Naueg3RhXhWV0r%2FopezObD7nRo7iX%2BPGmf1muFEfgSPLMwCGqwYov479mI3Ur%2FoOpF92nqSdPMKzNBj9l%2Fiy2W%2BgP366KG%2FgSuKOdBTr2ydLhlgP6xpIBi%2BW5X32Y2I%2FQojtdlinZNBx%2BGUITksgymjY2r63BiEhPBmYL1ezlCh96ledthMJDj9r5%2FofeUQSNIQJrnyJwmSmUho5%2BaFL0stri6lOYHb%2FKj%2BQytTYZ5vf4XXuRYwutgfCIdAYmADa3d2i9AuqxXg7cDImAYiuM7hiAecqBxOWrMV8jC6W3JkXknJFBzr9ae6tsGW8%2F0JFEOAh4Te%2BdbEN7KUjm8R%2FSuiVjuKocJzOCTsGVF4NJ3bUoN5AW%2Fa%2FnDwkn%2Fl51uWDWdmBA9NsNP7pqmLDzaairwleCMYTBIqUAJ7aRSL39zvs2E9vQ3yiTvIAiNx%2B26aqgpOQ3f6cm7yFEAybXMCTvPv%2FhlPrJRNJ302YFAEYapxaFcY9sesiBZP%2FA4f2jvK2mDtK%2FQFZedmX3Dw2UkaL8J5%2FmXwxLUnEwjs2GwwY6pgFKyggG0Dtgy%2Bw5Q7knrLg5jTuPzR7T4B%2B2HyrLjvwApzXpJlfvkPQvOL%2FRSUjjDpSsdM3Qdxsv1v7%2FhlgWY261IvBNV0AhNsGDbgU2ExV9d38J2kDFDZq%2FbDkmr8fd6w68UN%2B7p2ce8EKgIx1djgfx9Q8dXX8ulJsBvh7QycsrDuNMOu07w2loeHi2iXJL1Qn1cRBVKRuyA5cbK7H6Z%2F1afBkg26oB&X-Amz-Signature=b20e7884d39d86eb6d8095433ab6c75cd2af25d085437dde89cb1c993e5cd710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELXJXPL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4VSkuiFfOkN643PeKLU0aM9%2FyigIi7PmH%2Fsn%2BWM%2FMAiBBDHGmH6Tc%2BoBYGi8Bzpz91plNdgj%2BSL17HiWb5PdzACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENaVenztlatrlHYSKtwDQkgC1p2U4GJQhItITiFz6ULrGMI%2BHI2Vt1uzQgV%2FYT2sShMRIdTzga%2F3gAu21%2BGDQ%2B3xmkmJb0WQPaZgtUU1l6NTVu3Naueg3RhXhWV0r%2FopezObD7nRo7iX%2BPGmf1muFEfgSPLMwCGqwYov479mI3Ur%2FoOpF92nqSdPMKzNBj9l%2Fiy2W%2BgP366KG%2FgSuKOdBTr2ydLhlgP6xpIBi%2BW5X32Y2I%2FQojtdlinZNBx%2BGUITksgymjY2r63BiEhPBmYL1ezlCh96ledthMJDj9r5%2FofeUQSNIQJrnyJwmSmUho5%2BaFL0stri6lOYHb%2FKj%2BQytTYZ5vf4XXuRYwutgfCIdAYmADa3d2i9AuqxXg7cDImAYiuM7hiAecqBxOWrMV8jC6W3JkXknJFBzr9ae6tsGW8%2F0JFEOAh4Te%2BdbEN7KUjm8R%2FSuiVjuKocJzOCTsGVF4NJ3bUoN5AW%2Fa%2FnDwkn%2Fl51uWDWdmBA9NsNP7pqmLDzaairwleCMYTBIqUAJ7aRSL39zvs2E9vQ3yiTvIAiNx%2B26aqgpOQ3f6cm7yFEAybXMCTvPv%2FhlPrJRNJ302YFAEYapxaFcY9sesiBZP%2FA4f2jvK2mDtK%2FQFZedmX3Dw2UkaL8J5%2FmXwxLUnEwjs2GwwY6pgFKyggG0Dtgy%2Bw5Q7knrLg5jTuPzR7T4B%2B2HyrLjvwApzXpJlfvkPQvOL%2FRSUjjDpSsdM3Qdxsv1v7%2FhlgWY261IvBNV0AhNsGDbgU2ExV9d38J2kDFDZq%2FbDkmr8fd6w68UN%2B7p2ce8EKgIx1djgfx9Q8dXX8ulJsBvh7QycsrDuNMOu07w2loeHi2iXJL1Qn1cRBVKRuyA5cbK7H6Z%2F1afBkg26oB&X-Amz-Signature=8cf305c955ecababa2f0bb8ceaa6767b5aee5b79bc18f15ebcfbbe399e06aca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
