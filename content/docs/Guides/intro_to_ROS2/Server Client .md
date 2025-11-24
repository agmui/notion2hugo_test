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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6T7KKE%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCpcIOq%2BsttWwSOAZAMMBweV0JjOnZ%2FwuJXmu1r2AV%2FAiEArbv09CoDk2f10i98xyJdEPixjhHi8lhRh3emO5pGoREq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDM8A63zdg7xpAF5FLSrcA97xVdeY3cn5I4hSRNfL4Wd1QAdPrhs9K%2FZCBTmhUzEe%2BDvm1Q42aUmvGAJtfuHqxoKz4tic8myL3XGn8uZaKUxU82T%2BWGhSBj80jQ65seGg%2BugqTwlZPnr04RKDjTOSSZDKMxzR5OFyH8E7Q%2FLmBzHAit5pugef%2BavrLKnUdOoPobq6LGbXpmK6K0IQcaPzN4kblhRf6Jtlz30m4F2noCSRbjWS%2BfQPeCHhDEvAdj4r%2BCmil1EO%2FbNFax7TAS1YCFNVQWnD%2BVu%2BQuRrZkMGwMTEoOWFiF4CFqQb%2BUESLcrswQ%2FbcSY0MGtarY%2Ba31lbiwuocZop0B%2FZv0JYaPjTX9NBX%2FzkIeXRa1EJL0FrqEpYZRQjn4by8wcTmJpWrTv3aK%2BqMl3rRbVp1klldCrDPcqNLfKoLhR54CiyZK8zoZ2Jf3Pp0uHCGF0ScJx8K6Uo6MFSOL8sDt7BUj0SzgJZk05KXuNzYmENi1Yl4iExMgJePht7MKQYY6HdXC5yMbVgWIUuygYFvKMIgz1cXZ5RclnOiIh%2B33BEO8zkPfOgfNba5eZFc3n4gy64w5nACCKkXo6gTUriuTIxODKsZsCGWkKBZda8NNPIZdXlOIz%2F5ygMVynZ8F5Ii%2FJzRCJSMILdjskGOqUBWM447vNJ%2BO%2BCLyOPROQH%2B80F4zxclj5ieQkqBKTfHA%2FiKBfK1Gjc2y%2B1ZcFJi1zks8pnAm9K2QCp4dMop8Ri4E9lxgwmcWKGsnS%2BbGtlhp3GDHBjVdBbfmed5MP9D0%2Frx74x8P3oe5c495Xz2ZpNw2amU7ReOKuH3whlWle9yhLa1F5OkIjfPVZXLKC1o0%2BraW38MuOqM5QLdE1TsvQ570pvrUzr&X-Amz-Signature=f0ce132c929537d9cb1134427bb27c997d1ac2c34d8835a717107c0d9f4778b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6T7KKE%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCpcIOq%2BsttWwSOAZAMMBweV0JjOnZ%2FwuJXmu1r2AV%2FAiEArbv09CoDk2f10i98xyJdEPixjhHi8lhRh3emO5pGoREq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDM8A63zdg7xpAF5FLSrcA97xVdeY3cn5I4hSRNfL4Wd1QAdPrhs9K%2FZCBTmhUzEe%2BDvm1Q42aUmvGAJtfuHqxoKz4tic8myL3XGn8uZaKUxU82T%2BWGhSBj80jQ65seGg%2BugqTwlZPnr04RKDjTOSSZDKMxzR5OFyH8E7Q%2FLmBzHAit5pugef%2BavrLKnUdOoPobq6LGbXpmK6K0IQcaPzN4kblhRf6Jtlz30m4F2noCSRbjWS%2BfQPeCHhDEvAdj4r%2BCmil1EO%2FbNFax7TAS1YCFNVQWnD%2BVu%2BQuRrZkMGwMTEoOWFiF4CFqQb%2BUESLcrswQ%2FbcSY0MGtarY%2Ba31lbiwuocZop0B%2FZv0JYaPjTX9NBX%2FzkIeXRa1EJL0FrqEpYZRQjn4by8wcTmJpWrTv3aK%2BqMl3rRbVp1klldCrDPcqNLfKoLhR54CiyZK8zoZ2Jf3Pp0uHCGF0ScJx8K6Uo6MFSOL8sDt7BUj0SzgJZk05KXuNzYmENi1Yl4iExMgJePht7MKQYY6HdXC5yMbVgWIUuygYFvKMIgz1cXZ5RclnOiIh%2B33BEO8zkPfOgfNba5eZFc3n4gy64w5nACCKkXo6gTUriuTIxODKsZsCGWkKBZda8NNPIZdXlOIz%2F5ygMVynZ8F5Ii%2FJzRCJSMILdjskGOqUBWM447vNJ%2BO%2BCLyOPROQH%2B80F4zxclj5ieQkqBKTfHA%2FiKBfK1Gjc2y%2B1ZcFJi1zks8pnAm9K2QCp4dMop8Ri4E9lxgwmcWKGsnS%2BbGtlhp3GDHBjVdBbfmed5MP9D0%2Frx74x8P3oe5c495Xz2ZpNw2amU7ReOKuH3whlWle9yhLa1F5OkIjfPVZXLKC1o0%2BraW38MuOqM5QLdE1TsvQ570pvrUzr&X-Amz-Signature=54bf1c25dc776310183de64158eb7c4cbbcbde739914d3f5b40550a7d786f654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6T7KKE%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCpcIOq%2BsttWwSOAZAMMBweV0JjOnZ%2FwuJXmu1r2AV%2FAiEArbv09CoDk2f10i98xyJdEPixjhHi8lhRh3emO5pGoREq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDM8A63zdg7xpAF5FLSrcA97xVdeY3cn5I4hSRNfL4Wd1QAdPrhs9K%2FZCBTmhUzEe%2BDvm1Q42aUmvGAJtfuHqxoKz4tic8myL3XGn8uZaKUxU82T%2BWGhSBj80jQ65seGg%2BugqTwlZPnr04RKDjTOSSZDKMxzR5OFyH8E7Q%2FLmBzHAit5pugef%2BavrLKnUdOoPobq6LGbXpmK6K0IQcaPzN4kblhRf6Jtlz30m4F2noCSRbjWS%2BfQPeCHhDEvAdj4r%2BCmil1EO%2FbNFax7TAS1YCFNVQWnD%2BVu%2BQuRrZkMGwMTEoOWFiF4CFqQb%2BUESLcrswQ%2FbcSY0MGtarY%2Ba31lbiwuocZop0B%2FZv0JYaPjTX9NBX%2FzkIeXRa1EJL0FrqEpYZRQjn4by8wcTmJpWrTv3aK%2BqMl3rRbVp1klldCrDPcqNLfKoLhR54CiyZK8zoZ2Jf3Pp0uHCGF0ScJx8K6Uo6MFSOL8sDt7BUj0SzgJZk05KXuNzYmENi1Yl4iExMgJePht7MKQYY6HdXC5yMbVgWIUuygYFvKMIgz1cXZ5RclnOiIh%2B33BEO8zkPfOgfNba5eZFc3n4gy64w5nACCKkXo6gTUriuTIxODKsZsCGWkKBZda8NNPIZdXlOIz%2F5ygMVynZ8F5Ii%2FJzRCJSMILdjskGOqUBWM447vNJ%2BO%2BCLyOPROQH%2B80F4zxclj5ieQkqBKTfHA%2FiKBfK1Gjc2y%2B1ZcFJi1zks8pnAm9K2QCp4dMop8Ri4E9lxgwmcWKGsnS%2BbGtlhp3GDHBjVdBbfmed5MP9D0%2Frx74x8P3oe5c495Xz2ZpNw2amU7ReOKuH3whlWle9yhLa1F5OkIjfPVZXLKC1o0%2BraW38MuOqM5QLdE1TsvQ570pvrUzr&X-Amz-Signature=2f40fccf067fcad8b817dd22cbd0e3a81ed2a81635d3b42c77a53882ea347f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6T7KKE%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCpcIOq%2BsttWwSOAZAMMBweV0JjOnZ%2FwuJXmu1r2AV%2FAiEArbv09CoDk2f10i98xyJdEPixjhHi8lhRh3emO5pGoREq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDM8A63zdg7xpAF5FLSrcA97xVdeY3cn5I4hSRNfL4Wd1QAdPrhs9K%2FZCBTmhUzEe%2BDvm1Q42aUmvGAJtfuHqxoKz4tic8myL3XGn8uZaKUxU82T%2BWGhSBj80jQ65seGg%2BugqTwlZPnr04RKDjTOSSZDKMxzR5OFyH8E7Q%2FLmBzHAit5pugef%2BavrLKnUdOoPobq6LGbXpmK6K0IQcaPzN4kblhRf6Jtlz30m4F2noCSRbjWS%2BfQPeCHhDEvAdj4r%2BCmil1EO%2FbNFax7TAS1YCFNVQWnD%2BVu%2BQuRrZkMGwMTEoOWFiF4CFqQb%2BUESLcrswQ%2FbcSY0MGtarY%2Ba31lbiwuocZop0B%2FZv0JYaPjTX9NBX%2FzkIeXRa1EJL0FrqEpYZRQjn4by8wcTmJpWrTv3aK%2BqMl3rRbVp1klldCrDPcqNLfKoLhR54CiyZK8zoZ2Jf3Pp0uHCGF0ScJx8K6Uo6MFSOL8sDt7BUj0SzgJZk05KXuNzYmENi1Yl4iExMgJePht7MKQYY6HdXC5yMbVgWIUuygYFvKMIgz1cXZ5RclnOiIh%2B33BEO8zkPfOgfNba5eZFc3n4gy64w5nACCKkXo6gTUriuTIxODKsZsCGWkKBZda8NNPIZdXlOIz%2F5ygMVynZ8F5Ii%2FJzRCJSMILdjskGOqUBWM447vNJ%2BO%2BCLyOPROQH%2B80F4zxclj5ieQkqBKTfHA%2FiKBfK1Gjc2y%2B1ZcFJi1zks8pnAm9K2QCp4dMop8Ri4E9lxgwmcWKGsnS%2BbGtlhp3GDHBjVdBbfmed5MP9D0%2Frx74x8P3oe5c495Xz2ZpNw2amU7ReOKuH3whlWle9yhLa1F5OkIjfPVZXLKC1o0%2BraW38MuOqM5QLdE1TsvQ570pvrUzr&X-Amz-Signature=0b69dd4499a2688b8dd930ee366c7f75ac188724fa9551aaa33fcb46852da76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6T7KKE%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCpcIOq%2BsttWwSOAZAMMBweV0JjOnZ%2FwuJXmu1r2AV%2FAiEArbv09CoDk2f10i98xyJdEPixjhHi8lhRh3emO5pGoREq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDM8A63zdg7xpAF5FLSrcA97xVdeY3cn5I4hSRNfL4Wd1QAdPrhs9K%2FZCBTmhUzEe%2BDvm1Q42aUmvGAJtfuHqxoKz4tic8myL3XGn8uZaKUxU82T%2BWGhSBj80jQ65seGg%2BugqTwlZPnr04RKDjTOSSZDKMxzR5OFyH8E7Q%2FLmBzHAit5pugef%2BavrLKnUdOoPobq6LGbXpmK6K0IQcaPzN4kblhRf6Jtlz30m4F2noCSRbjWS%2BfQPeCHhDEvAdj4r%2BCmil1EO%2FbNFax7TAS1YCFNVQWnD%2BVu%2BQuRrZkMGwMTEoOWFiF4CFqQb%2BUESLcrswQ%2FbcSY0MGtarY%2Ba31lbiwuocZop0B%2FZv0JYaPjTX9NBX%2FzkIeXRa1EJL0FrqEpYZRQjn4by8wcTmJpWrTv3aK%2BqMl3rRbVp1klldCrDPcqNLfKoLhR54CiyZK8zoZ2Jf3Pp0uHCGF0ScJx8K6Uo6MFSOL8sDt7BUj0SzgJZk05KXuNzYmENi1Yl4iExMgJePht7MKQYY6HdXC5yMbVgWIUuygYFvKMIgz1cXZ5RclnOiIh%2B33BEO8zkPfOgfNba5eZFc3n4gy64w5nACCKkXo6gTUriuTIxODKsZsCGWkKBZda8NNPIZdXlOIz%2F5ygMVynZ8F5Ii%2FJzRCJSMILdjskGOqUBWM447vNJ%2BO%2BCLyOPROQH%2B80F4zxclj5ieQkqBKTfHA%2FiKBfK1Gjc2y%2B1ZcFJi1zks8pnAm9K2QCp4dMop8Ri4E9lxgwmcWKGsnS%2BbGtlhp3GDHBjVdBbfmed5MP9D0%2Frx74x8P3oe5c495Xz2ZpNw2amU7ReOKuH3whlWle9yhLa1F5OkIjfPVZXLKC1o0%2BraW38MuOqM5QLdE1TsvQ570pvrUzr&X-Amz-Signature=156c7497d0a5636376be2a8ff7b1e7efe32241d235bb34ffbc4cf9bca6ac8d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
