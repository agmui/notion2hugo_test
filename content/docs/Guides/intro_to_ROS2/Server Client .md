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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNIANWQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD8PYKmW513U1NJd57EkY4PHhYcUfGl3TbTfFz%2F0ZLJGwIhANVmDyWwmseYpV%2FECy%2Buz%2BrUpwDGd7v8fcPW04hcs3EiKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLXdfxPBglTJOW30Qq3ANYdhD0gIUgMEmhOGfTC0mke1CFQf1jWHQy5sW60vwdTfIfMcrhpLfyaaQQ0zbtjGe33ahjEaGKhD7eVgZuGUvZpZmJrtXBmQzmUYR11MJ%2BQhLDcXIblpTH6ZE%2Fnf8dyPR%2B6RvxTk68O2ghs5A868FcUr8KK%2FlQiW%2BplNFqWKTsTJwZdA0w5nBCsiRm%2FLgsT9ft71jPQw6WaEH1XkPXTXxA0qSN3VwrZZ7r2%2F1OHLSDpSFtg%2FPVR0eIGQAGSJMMEk7fsxuAfGasDnAmKZ5jJKcxT0YkBHgDt4o1Jve%2FRcEKhZVfNGiwdo5%2B4aAWyTawwaAh2wU8OzERLy7CWwSlqdGIQG4laFMw9uRJROYJWMZNw8INvt2hxmtXTiWFI1vUbAAGnmMo%2Fd3JSkgcw6VHpEiXKZJP8Z2LS9Kirspfq0VRnMu9rObl3%2FQLuu2sy8NJYYnN%2FxRIUlt5jD8SGy68PT9%2Fjf3a54kGgBMROPsfjcLVkikTGVqm2by5BS4l8oBpUv2Eufg4PEnilT3rFAfNgolMiaXRB2eFt1%2FyE5XWdASj%2FUqJ9roilby9KhpkhoAkkG10gqlFqvFa2TjAQLjOHCYcM1C7P%2BRh6uElrPnkJv6AtXHytbIOqK%2B%2FSGks9jDD56bCBjqkAeBbYDtGo%2FIrG%2Bvj5WqIb0RuCZDAWgIa92uJfccTKFLMB9%2BHr2bLqR4rd116KHOfxutJXykhb0juMt83bK2q%2F1vgKPPV%2BIvCsTREjxLDibccahLkhXzA%2BLOagHN73HhJC4UtPQJIxBwUDP8kIfYTlJxxkZnR8ZvoghshusAwSF8t4Zs0I37Cf2YIktOpL7CBZV0Sjk%2F7WBKxNUBrWmLJfFtz4xz4&X-Amz-Signature=7d343b3744974b5cc817cf1348ef75f83a18275e2d2fe713b5a85f8b1057136c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNIANWQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD8PYKmW513U1NJd57EkY4PHhYcUfGl3TbTfFz%2F0ZLJGwIhANVmDyWwmseYpV%2FECy%2Buz%2BrUpwDGd7v8fcPW04hcs3EiKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLXdfxPBglTJOW30Qq3ANYdhD0gIUgMEmhOGfTC0mke1CFQf1jWHQy5sW60vwdTfIfMcrhpLfyaaQQ0zbtjGe33ahjEaGKhD7eVgZuGUvZpZmJrtXBmQzmUYR11MJ%2BQhLDcXIblpTH6ZE%2Fnf8dyPR%2B6RvxTk68O2ghs5A868FcUr8KK%2FlQiW%2BplNFqWKTsTJwZdA0w5nBCsiRm%2FLgsT9ft71jPQw6WaEH1XkPXTXxA0qSN3VwrZZ7r2%2F1OHLSDpSFtg%2FPVR0eIGQAGSJMMEk7fsxuAfGasDnAmKZ5jJKcxT0YkBHgDt4o1Jve%2FRcEKhZVfNGiwdo5%2B4aAWyTawwaAh2wU8OzERLy7CWwSlqdGIQG4laFMw9uRJROYJWMZNw8INvt2hxmtXTiWFI1vUbAAGnmMo%2Fd3JSkgcw6VHpEiXKZJP8Z2LS9Kirspfq0VRnMu9rObl3%2FQLuu2sy8NJYYnN%2FxRIUlt5jD8SGy68PT9%2Fjf3a54kGgBMROPsfjcLVkikTGVqm2by5BS4l8oBpUv2Eufg4PEnilT3rFAfNgolMiaXRB2eFt1%2FyE5XWdASj%2FUqJ9roilby9KhpkhoAkkG10gqlFqvFa2TjAQLjOHCYcM1C7P%2BRh6uElrPnkJv6AtXHytbIOqK%2B%2FSGks9jDD56bCBjqkAeBbYDtGo%2FIrG%2Bvj5WqIb0RuCZDAWgIa92uJfccTKFLMB9%2BHr2bLqR4rd116KHOfxutJXykhb0juMt83bK2q%2F1vgKPPV%2BIvCsTREjxLDibccahLkhXzA%2BLOagHN73HhJC4UtPQJIxBwUDP8kIfYTlJxxkZnR8ZvoghshusAwSF8t4Zs0I37Cf2YIktOpL7CBZV0Sjk%2F7WBKxNUBrWmLJfFtz4xz4&X-Amz-Signature=c7556d9540c3403885432086e0fa1525f8977e2f1437ba02e84fa537d73285f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNIANWQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD8PYKmW513U1NJd57EkY4PHhYcUfGl3TbTfFz%2F0ZLJGwIhANVmDyWwmseYpV%2FECy%2Buz%2BrUpwDGd7v8fcPW04hcs3EiKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLXdfxPBglTJOW30Qq3ANYdhD0gIUgMEmhOGfTC0mke1CFQf1jWHQy5sW60vwdTfIfMcrhpLfyaaQQ0zbtjGe33ahjEaGKhD7eVgZuGUvZpZmJrtXBmQzmUYR11MJ%2BQhLDcXIblpTH6ZE%2Fnf8dyPR%2B6RvxTk68O2ghs5A868FcUr8KK%2FlQiW%2BplNFqWKTsTJwZdA0w5nBCsiRm%2FLgsT9ft71jPQw6WaEH1XkPXTXxA0qSN3VwrZZ7r2%2F1OHLSDpSFtg%2FPVR0eIGQAGSJMMEk7fsxuAfGasDnAmKZ5jJKcxT0YkBHgDt4o1Jve%2FRcEKhZVfNGiwdo5%2B4aAWyTawwaAh2wU8OzERLy7CWwSlqdGIQG4laFMw9uRJROYJWMZNw8INvt2hxmtXTiWFI1vUbAAGnmMo%2Fd3JSkgcw6VHpEiXKZJP8Z2LS9Kirspfq0VRnMu9rObl3%2FQLuu2sy8NJYYnN%2FxRIUlt5jD8SGy68PT9%2Fjf3a54kGgBMROPsfjcLVkikTGVqm2by5BS4l8oBpUv2Eufg4PEnilT3rFAfNgolMiaXRB2eFt1%2FyE5XWdASj%2FUqJ9roilby9KhpkhoAkkG10gqlFqvFa2TjAQLjOHCYcM1C7P%2BRh6uElrPnkJv6AtXHytbIOqK%2B%2FSGks9jDD56bCBjqkAeBbYDtGo%2FIrG%2Bvj5WqIb0RuCZDAWgIa92uJfccTKFLMB9%2BHr2bLqR4rd116KHOfxutJXykhb0juMt83bK2q%2F1vgKPPV%2BIvCsTREjxLDibccahLkhXzA%2BLOagHN73HhJC4UtPQJIxBwUDP8kIfYTlJxxkZnR8ZvoghshusAwSF8t4Zs0I37Cf2YIktOpL7CBZV0Sjk%2F7WBKxNUBrWmLJfFtz4xz4&X-Amz-Signature=e3ebb1e7ea67f68b682a544f03cea1723e3be36a08d5ae63dcf597c6d2be348b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNIANWQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD8PYKmW513U1NJd57EkY4PHhYcUfGl3TbTfFz%2F0ZLJGwIhANVmDyWwmseYpV%2FECy%2Buz%2BrUpwDGd7v8fcPW04hcs3EiKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLXdfxPBglTJOW30Qq3ANYdhD0gIUgMEmhOGfTC0mke1CFQf1jWHQy5sW60vwdTfIfMcrhpLfyaaQQ0zbtjGe33ahjEaGKhD7eVgZuGUvZpZmJrtXBmQzmUYR11MJ%2BQhLDcXIblpTH6ZE%2Fnf8dyPR%2B6RvxTk68O2ghs5A868FcUr8KK%2FlQiW%2BplNFqWKTsTJwZdA0w5nBCsiRm%2FLgsT9ft71jPQw6WaEH1XkPXTXxA0qSN3VwrZZ7r2%2F1OHLSDpSFtg%2FPVR0eIGQAGSJMMEk7fsxuAfGasDnAmKZ5jJKcxT0YkBHgDt4o1Jve%2FRcEKhZVfNGiwdo5%2B4aAWyTawwaAh2wU8OzERLy7CWwSlqdGIQG4laFMw9uRJROYJWMZNw8INvt2hxmtXTiWFI1vUbAAGnmMo%2Fd3JSkgcw6VHpEiXKZJP8Z2LS9Kirspfq0VRnMu9rObl3%2FQLuu2sy8NJYYnN%2FxRIUlt5jD8SGy68PT9%2Fjf3a54kGgBMROPsfjcLVkikTGVqm2by5BS4l8oBpUv2Eufg4PEnilT3rFAfNgolMiaXRB2eFt1%2FyE5XWdASj%2FUqJ9roilby9KhpkhoAkkG10gqlFqvFa2TjAQLjOHCYcM1C7P%2BRh6uElrPnkJv6AtXHytbIOqK%2B%2FSGks9jDD56bCBjqkAeBbYDtGo%2FIrG%2Bvj5WqIb0RuCZDAWgIa92uJfccTKFLMB9%2BHr2bLqR4rd116KHOfxutJXykhb0juMt83bK2q%2F1vgKPPV%2BIvCsTREjxLDibccahLkhXzA%2BLOagHN73HhJC4UtPQJIxBwUDP8kIfYTlJxxkZnR8ZvoghshusAwSF8t4Zs0I37Cf2YIktOpL7CBZV0Sjk%2F7WBKxNUBrWmLJfFtz4xz4&X-Amz-Signature=4b4cb60781533daadf83a1f3c7fdcfb57e5d42b6057fb10471f829eb4e8b1fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNIANWQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD8PYKmW513U1NJd57EkY4PHhYcUfGl3TbTfFz%2F0ZLJGwIhANVmDyWwmseYpV%2FECy%2Buz%2BrUpwDGd7v8fcPW04hcs3EiKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLXdfxPBglTJOW30Qq3ANYdhD0gIUgMEmhOGfTC0mke1CFQf1jWHQy5sW60vwdTfIfMcrhpLfyaaQQ0zbtjGe33ahjEaGKhD7eVgZuGUvZpZmJrtXBmQzmUYR11MJ%2BQhLDcXIblpTH6ZE%2Fnf8dyPR%2B6RvxTk68O2ghs5A868FcUr8KK%2FlQiW%2BplNFqWKTsTJwZdA0w5nBCsiRm%2FLgsT9ft71jPQw6WaEH1XkPXTXxA0qSN3VwrZZ7r2%2F1OHLSDpSFtg%2FPVR0eIGQAGSJMMEk7fsxuAfGasDnAmKZ5jJKcxT0YkBHgDt4o1Jve%2FRcEKhZVfNGiwdo5%2B4aAWyTawwaAh2wU8OzERLy7CWwSlqdGIQG4laFMw9uRJROYJWMZNw8INvt2hxmtXTiWFI1vUbAAGnmMo%2Fd3JSkgcw6VHpEiXKZJP8Z2LS9Kirspfq0VRnMu9rObl3%2FQLuu2sy8NJYYnN%2FxRIUlt5jD8SGy68PT9%2Fjf3a54kGgBMROPsfjcLVkikTGVqm2by5BS4l8oBpUv2Eufg4PEnilT3rFAfNgolMiaXRB2eFt1%2FyE5XWdASj%2FUqJ9roilby9KhpkhoAkkG10gqlFqvFa2TjAQLjOHCYcM1C7P%2BRh6uElrPnkJv6AtXHytbIOqK%2B%2FSGks9jDD56bCBjqkAeBbYDtGo%2FIrG%2Bvj5WqIb0RuCZDAWgIa92uJfccTKFLMB9%2BHr2bLqR4rd116KHOfxutJXykhb0juMt83bK2q%2F1vgKPPV%2BIvCsTREjxLDibccahLkhXzA%2BLOagHN73HhJC4UtPQJIxBwUDP8kIfYTlJxxkZnR8ZvoghshusAwSF8t4Zs0I37Cf2YIktOpL7CBZV0Sjk%2F7WBKxNUBrWmLJfFtz4xz4&X-Amz-Signature=a7f22430c34dd8bbaa19b4e2b2aa9e1e4a7e6ccb504045bec860d483140770b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
