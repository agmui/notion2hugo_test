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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEX2ADL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD5x4awukI00p64EmDxxexEQyyfWa%2F0BCQYJikxUn4EEgIgNOgDaOeM3iJT6cEQmURW71gNd3pswMr5CGo5bfsdXSsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBn1cBYXI5TqVeNsayrcA%2FsJS4mVIHowcshaYxKiWyWPnsgUzf8v0LJFus3fTZ4mrVZw1ZMlNoIDX0iFndE1LqOyRVeUSy4bsdxxzz9nnhmblHZeYNylJsXIzmdDEapA%2BZSrAFz%2BDZ5%2FAvOihRTL%2BgZiKSMPaigXfjC8ARBvMJtXiVHACuGz6COshE3HRMfFeWH48ggiLydOjU5OKQwECGRARZ1kmxe2HSyK4x7pOYDTSAc3uRW%2BRxjhcxGknyn3m9%2FHwydqjBn%2Bw23gGPZMrp7xnSOh8GT1U4EMcC6RIhzzl%2Fy%2FP6wR%2BrvOw6I8xBBPVUuqHKsrmT8KR7D21gQLpJ1qH4QKmmY%2BinXBnDLj8x3Z0sDiiJqw9CypCZ2iMMIaCff%2BXcWvYYajyrUqtXsiz2EOoZ10w%2B%2Fxkp4icMyAKCZp3iG2ZWci%2F7HemMtf8xbGlGMkV9Giy2f%2BW7GiyG%2FNwTQ4kaJd7f%2BEf9iZYzaWY%2BkYknXr%2FH3U76wtpmqb9zoJm8j8voIyKZdU0A%2BGPU7QhjEE4McVehqP51xj91uQO5J0yzdodNtTi1UCec0Ia%2BlqufrPeYMeg0cvOMpcMgqZCw0rq4Y%2BlMqKPshMbnAOIUhJLETNuPFObMIoopBY4ywPE8%2B4mENWSs5l5NWGMKLA4sMGOqUB1btUY4nAMkTB4U5RLiVsFCpihS%2BjoKalwnR6P4fe%2BM1IrX6Ccw2s%2BObeRhyZvqEfZVU366xpqixB4pzvEyMGC7k8bSCrVjqliWdupKdQ93Oh3Yd9fQKdr2LY6xZPuLFAgTG2EXaaB2tKmJsluj78QZpHTX%2Fk6C8UQdPa92c2XpoeoLLIUvu2wDx4amdKOn0%2FCECIJbm3zUsZsA1HZQ6yuh0AsR5j&X-Amz-Signature=a49d28d259695a1f6b2b1a0241a6d5262ba624dad5b65674f353ed0a54769fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEX2ADL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD5x4awukI00p64EmDxxexEQyyfWa%2F0BCQYJikxUn4EEgIgNOgDaOeM3iJT6cEQmURW71gNd3pswMr5CGo5bfsdXSsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBn1cBYXI5TqVeNsayrcA%2FsJS4mVIHowcshaYxKiWyWPnsgUzf8v0LJFus3fTZ4mrVZw1ZMlNoIDX0iFndE1LqOyRVeUSy4bsdxxzz9nnhmblHZeYNylJsXIzmdDEapA%2BZSrAFz%2BDZ5%2FAvOihRTL%2BgZiKSMPaigXfjC8ARBvMJtXiVHACuGz6COshE3HRMfFeWH48ggiLydOjU5OKQwECGRARZ1kmxe2HSyK4x7pOYDTSAc3uRW%2BRxjhcxGknyn3m9%2FHwydqjBn%2Bw23gGPZMrp7xnSOh8GT1U4EMcC6RIhzzl%2Fy%2FP6wR%2BrvOw6I8xBBPVUuqHKsrmT8KR7D21gQLpJ1qH4QKmmY%2BinXBnDLj8x3Z0sDiiJqw9CypCZ2iMMIaCff%2BXcWvYYajyrUqtXsiz2EOoZ10w%2B%2Fxkp4icMyAKCZp3iG2ZWci%2F7HemMtf8xbGlGMkV9Giy2f%2BW7GiyG%2FNwTQ4kaJd7f%2BEf9iZYzaWY%2BkYknXr%2FH3U76wtpmqb9zoJm8j8voIyKZdU0A%2BGPU7QhjEE4McVehqP51xj91uQO5J0yzdodNtTi1UCec0Ia%2BlqufrPeYMeg0cvOMpcMgqZCw0rq4Y%2BlMqKPshMbnAOIUhJLETNuPFObMIoopBY4ywPE8%2B4mENWSs5l5NWGMKLA4sMGOqUB1btUY4nAMkTB4U5RLiVsFCpihS%2BjoKalwnR6P4fe%2BM1IrX6Ccw2s%2BObeRhyZvqEfZVU366xpqixB4pzvEyMGC7k8bSCrVjqliWdupKdQ93Oh3Yd9fQKdr2LY6xZPuLFAgTG2EXaaB2tKmJsluj78QZpHTX%2Fk6C8UQdPa92c2XpoeoLLIUvu2wDx4amdKOn0%2FCECIJbm3zUsZsA1HZQ6yuh0AsR5j&X-Amz-Signature=79f18b5368510850679809687b13501e76584383b41320822582e3c8ce66d830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEX2ADL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD5x4awukI00p64EmDxxexEQyyfWa%2F0BCQYJikxUn4EEgIgNOgDaOeM3iJT6cEQmURW71gNd3pswMr5CGo5bfsdXSsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBn1cBYXI5TqVeNsayrcA%2FsJS4mVIHowcshaYxKiWyWPnsgUzf8v0LJFus3fTZ4mrVZw1ZMlNoIDX0iFndE1LqOyRVeUSy4bsdxxzz9nnhmblHZeYNylJsXIzmdDEapA%2BZSrAFz%2BDZ5%2FAvOihRTL%2BgZiKSMPaigXfjC8ARBvMJtXiVHACuGz6COshE3HRMfFeWH48ggiLydOjU5OKQwECGRARZ1kmxe2HSyK4x7pOYDTSAc3uRW%2BRxjhcxGknyn3m9%2FHwydqjBn%2Bw23gGPZMrp7xnSOh8GT1U4EMcC6RIhzzl%2Fy%2FP6wR%2BrvOw6I8xBBPVUuqHKsrmT8KR7D21gQLpJ1qH4QKmmY%2BinXBnDLj8x3Z0sDiiJqw9CypCZ2iMMIaCff%2BXcWvYYajyrUqtXsiz2EOoZ10w%2B%2Fxkp4icMyAKCZp3iG2ZWci%2F7HemMtf8xbGlGMkV9Giy2f%2BW7GiyG%2FNwTQ4kaJd7f%2BEf9iZYzaWY%2BkYknXr%2FH3U76wtpmqb9zoJm8j8voIyKZdU0A%2BGPU7QhjEE4McVehqP51xj91uQO5J0yzdodNtTi1UCec0Ia%2BlqufrPeYMeg0cvOMpcMgqZCw0rq4Y%2BlMqKPshMbnAOIUhJLETNuPFObMIoopBY4ywPE8%2B4mENWSs5l5NWGMKLA4sMGOqUB1btUY4nAMkTB4U5RLiVsFCpihS%2BjoKalwnR6P4fe%2BM1IrX6Ccw2s%2BObeRhyZvqEfZVU366xpqixB4pzvEyMGC7k8bSCrVjqliWdupKdQ93Oh3Yd9fQKdr2LY6xZPuLFAgTG2EXaaB2tKmJsluj78QZpHTX%2Fk6C8UQdPa92c2XpoeoLLIUvu2wDx4amdKOn0%2FCECIJbm3zUsZsA1HZQ6yuh0AsR5j&X-Amz-Signature=1326472280f64e46b1a83e3c0c7abdb41092529e7b1bcf757663577072732d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEX2ADL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD5x4awukI00p64EmDxxexEQyyfWa%2F0BCQYJikxUn4EEgIgNOgDaOeM3iJT6cEQmURW71gNd3pswMr5CGo5bfsdXSsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBn1cBYXI5TqVeNsayrcA%2FsJS4mVIHowcshaYxKiWyWPnsgUzf8v0LJFus3fTZ4mrVZw1ZMlNoIDX0iFndE1LqOyRVeUSy4bsdxxzz9nnhmblHZeYNylJsXIzmdDEapA%2BZSrAFz%2BDZ5%2FAvOihRTL%2BgZiKSMPaigXfjC8ARBvMJtXiVHACuGz6COshE3HRMfFeWH48ggiLydOjU5OKQwECGRARZ1kmxe2HSyK4x7pOYDTSAc3uRW%2BRxjhcxGknyn3m9%2FHwydqjBn%2Bw23gGPZMrp7xnSOh8GT1U4EMcC6RIhzzl%2Fy%2FP6wR%2BrvOw6I8xBBPVUuqHKsrmT8KR7D21gQLpJ1qH4QKmmY%2BinXBnDLj8x3Z0sDiiJqw9CypCZ2iMMIaCff%2BXcWvYYajyrUqtXsiz2EOoZ10w%2B%2Fxkp4icMyAKCZp3iG2ZWci%2F7HemMtf8xbGlGMkV9Giy2f%2BW7GiyG%2FNwTQ4kaJd7f%2BEf9iZYzaWY%2BkYknXr%2FH3U76wtpmqb9zoJm8j8voIyKZdU0A%2BGPU7QhjEE4McVehqP51xj91uQO5J0yzdodNtTi1UCec0Ia%2BlqufrPeYMeg0cvOMpcMgqZCw0rq4Y%2BlMqKPshMbnAOIUhJLETNuPFObMIoopBY4ywPE8%2B4mENWSs5l5NWGMKLA4sMGOqUB1btUY4nAMkTB4U5RLiVsFCpihS%2BjoKalwnR6P4fe%2BM1IrX6Ccw2s%2BObeRhyZvqEfZVU366xpqixB4pzvEyMGC7k8bSCrVjqliWdupKdQ93Oh3Yd9fQKdr2LY6xZPuLFAgTG2EXaaB2tKmJsluj78QZpHTX%2Fk6C8UQdPa92c2XpoeoLLIUvu2wDx4amdKOn0%2FCECIJbm3zUsZsA1HZQ6yuh0AsR5j&X-Amz-Signature=81a293b07caa2cb05a0f1a018086992d34a64361c5c771c0739777ff53bad6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEX2ADL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD5x4awukI00p64EmDxxexEQyyfWa%2F0BCQYJikxUn4EEgIgNOgDaOeM3iJT6cEQmURW71gNd3pswMr5CGo5bfsdXSsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBn1cBYXI5TqVeNsayrcA%2FsJS4mVIHowcshaYxKiWyWPnsgUzf8v0LJFus3fTZ4mrVZw1ZMlNoIDX0iFndE1LqOyRVeUSy4bsdxxzz9nnhmblHZeYNylJsXIzmdDEapA%2BZSrAFz%2BDZ5%2FAvOihRTL%2BgZiKSMPaigXfjC8ARBvMJtXiVHACuGz6COshE3HRMfFeWH48ggiLydOjU5OKQwECGRARZ1kmxe2HSyK4x7pOYDTSAc3uRW%2BRxjhcxGknyn3m9%2FHwydqjBn%2Bw23gGPZMrp7xnSOh8GT1U4EMcC6RIhzzl%2Fy%2FP6wR%2BrvOw6I8xBBPVUuqHKsrmT8KR7D21gQLpJ1qH4QKmmY%2BinXBnDLj8x3Z0sDiiJqw9CypCZ2iMMIaCff%2BXcWvYYajyrUqtXsiz2EOoZ10w%2B%2Fxkp4icMyAKCZp3iG2ZWci%2F7HemMtf8xbGlGMkV9Giy2f%2BW7GiyG%2FNwTQ4kaJd7f%2BEf9iZYzaWY%2BkYknXr%2FH3U76wtpmqb9zoJm8j8voIyKZdU0A%2BGPU7QhjEE4McVehqP51xj91uQO5J0yzdodNtTi1UCec0Ia%2BlqufrPeYMeg0cvOMpcMgqZCw0rq4Y%2BlMqKPshMbnAOIUhJLETNuPFObMIoopBY4ywPE8%2B4mENWSs5l5NWGMKLA4sMGOqUB1btUY4nAMkTB4U5RLiVsFCpihS%2BjoKalwnR6P4fe%2BM1IrX6Ccw2s%2BObeRhyZvqEfZVU366xpqixB4pzvEyMGC7k8bSCrVjqliWdupKdQ93Oh3Yd9fQKdr2LY6xZPuLFAgTG2EXaaB2tKmJsluj78QZpHTX%2Fk6C8UQdPa92c2XpoeoLLIUvu2wDx4amdKOn0%2FCECIJbm3zUsZsA1HZQ6yuh0AsR5j&X-Amz-Signature=fe9a3f78842b7882e6d1c5ae8a847ca9ba60620c8893c85c2364cc9ea9d6cf8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
