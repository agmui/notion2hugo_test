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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHUQQVI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVzPdjJ90P7a6XIJdhqr2b6b5sjY%2BZxAiIa81DcUuTAIhAKF7HtXWH5Quujz8DSM%2FJNaM9FTvpmgGcJqvXnmC3ACcKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD14WY7cNYrp%2FQ3AUq3ANKMgVRhLPJk0IxpNPse1cAz8TKeFAIHEFLpo9uF%2BQ1Oxf7VMSHfwBxD5l7tudb1U51a0o3K8TAZ5PhgsA7WsZ%2BlKh64xIp0Pdr2hfKeyp2MWZQRgGe5vI5QLHqwN%2BLgxDgblgdDUh45VUZ%2BN5AgYHnRAosJePiVc6Nht%2FKLbfntbYqLO%2FBGsj1QJCco82E0Qqi96kCQPXVtj3%2B%2BnQhW6NgSX2HS9LHVSJzv5gCmxdI3fAJLub5zITqt3OJi%2BJ37Ngbp0NB6FT9ZVpP9jUsgYYKETIjaDJGxMEirJ6Wp6mYh74BYzVjEF%2F62N2tWoymgCoQoRmg%2BxfAGytxnhpb3oRmjeCPz5k0DDS39KZXeMcOI5rjcw%2B%2F8LloNQo72wx%2FotbBZzJwTOE50BNlZQEFkhPmk3P0YFnVj58E9tYlH7d2GPmBeO6je4df72oeV3SMXIqBAriDEGApL0IrHQJMNJuHa2ZDf5gJBPObFRzUQrt9%2B%2FxPack1lADbTCrKpnucTHEWO%2Fxq2zrw5finYfX1xTHopnAqKc2fvSXWK%2BzUzlILay9WuYxkiTySbHD1iUdp9aazHCefKNnIRvGLumYqcNSCX0hEQnUXoZwXOHwnq3uwrTS9KDxeA3vDjIgDvDCUpve8BjqkAbATWOdgVdEnvKBz7VQ9Y%2BqwU4NqLpltHWuJjxqSa2H7dStlHIDhW8vnzGHs8uxMtBLL0FYdg4xv6bcMceKNUmRq12tAQPfFupW%2FVaPGB8VXqPVFEKHrLYOSkfnXnZVRSb4ufU38GcZ2rowSS787l2PU19KPs4aCn%2F%2BLt55RfqkZwcmY7CciyxPLxcMdEZolECNCmouxDWH9DWySD0O6GW9Zi6%2Ft&X-Amz-Signature=dd93f7f573a2b1e93c62a0a270a2c60aeb1184785bd038c5e0f3a81d2087669c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHUQQVI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVzPdjJ90P7a6XIJdhqr2b6b5sjY%2BZxAiIa81DcUuTAIhAKF7HtXWH5Quujz8DSM%2FJNaM9FTvpmgGcJqvXnmC3ACcKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD14WY7cNYrp%2FQ3AUq3ANKMgVRhLPJk0IxpNPse1cAz8TKeFAIHEFLpo9uF%2BQ1Oxf7VMSHfwBxD5l7tudb1U51a0o3K8TAZ5PhgsA7WsZ%2BlKh64xIp0Pdr2hfKeyp2MWZQRgGe5vI5QLHqwN%2BLgxDgblgdDUh45VUZ%2BN5AgYHnRAosJePiVc6Nht%2FKLbfntbYqLO%2FBGsj1QJCco82E0Qqi96kCQPXVtj3%2B%2BnQhW6NgSX2HS9LHVSJzv5gCmxdI3fAJLub5zITqt3OJi%2BJ37Ngbp0NB6FT9ZVpP9jUsgYYKETIjaDJGxMEirJ6Wp6mYh74BYzVjEF%2F62N2tWoymgCoQoRmg%2BxfAGytxnhpb3oRmjeCPz5k0DDS39KZXeMcOI5rjcw%2B%2F8LloNQo72wx%2FotbBZzJwTOE50BNlZQEFkhPmk3P0YFnVj58E9tYlH7d2GPmBeO6je4df72oeV3SMXIqBAriDEGApL0IrHQJMNJuHa2ZDf5gJBPObFRzUQrt9%2B%2FxPack1lADbTCrKpnucTHEWO%2Fxq2zrw5finYfX1xTHopnAqKc2fvSXWK%2BzUzlILay9WuYxkiTySbHD1iUdp9aazHCefKNnIRvGLumYqcNSCX0hEQnUXoZwXOHwnq3uwrTS9KDxeA3vDjIgDvDCUpve8BjqkAbATWOdgVdEnvKBz7VQ9Y%2BqwU4NqLpltHWuJjxqSa2H7dStlHIDhW8vnzGHs8uxMtBLL0FYdg4xv6bcMceKNUmRq12tAQPfFupW%2FVaPGB8VXqPVFEKHrLYOSkfnXnZVRSb4ufU38GcZ2rowSS787l2PU19KPs4aCn%2F%2BLt55RfqkZwcmY7CciyxPLxcMdEZolECNCmouxDWH9DWySD0O6GW9Zi6%2Ft&X-Amz-Signature=efaad05578d7bc1771f0a0e7c66a6116dcb81971d46c703c92dc19874b259fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHUQQVI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVzPdjJ90P7a6XIJdhqr2b6b5sjY%2BZxAiIa81DcUuTAIhAKF7HtXWH5Quujz8DSM%2FJNaM9FTvpmgGcJqvXnmC3ACcKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD14WY7cNYrp%2FQ3AUq3ANKMgVRhLPJk0IxpNPse1cAz8TKeFAIHEFLpo9uF%2BQ1Oxf7VMSHfwBxD5l7tudb1U51a0o3K8TAZ5PhgsA7WsZ%2BlKh64xIp0Pdr2hfKeyp2MWZQRgGe5vI5QLHqwN%2BLgxDgblgdDUh45VUZ%2BN5AgYHnRAosJePiVc6Nht%2FKLbfntbYqLO%2FBGsj1QJCco82E0Qqi96kCQPXVtj3%2B%2BnQhW6NgSX2HS9LHVSJzv5gCmxdI3fAJLub5zITqt3OJi%2BJ37Ngbp0NB6FT9ZVpP9jUsgYYKETIjaDJGxMEirJ6Wp6mYh74BYzVjEF%2F62N2tWoymgCoQoRmg%2BxfAGytxnhpb3oRmjeCPz5k0DDS39KZXeMcOI5rjcw%2B%2F8LloNQo72wx%2FotbBZzJwTOE50BNlZQEFkhPmk3P0YFnVj58E9tYlH7d2GPmBeO6je4df72oeV3SMXIqBAriDEGApL0IrHQJMNJuHa2ZDf5gJBPObFRzUQrt9%2B%2FxPack1lADbTCrKpnucTHEWO%2Fxq2zrw5finYfX1xTHopnAqKc2fvSXWK%2BzUzlILay9WuYxkiTySbHD1iUdp9aazHCefKNnIRvGLumYqcNSCX0hEQnUXoZwXOHwnq3uwrTS9KDxeA3vDjIgDvDCUpve8BjqkAbATWOdgVdEnvKBz7VQ9Y%2BqwU4NqLpltHWuJjxqSa2H7dStlHIDhW8vnzGHs8uxMtBLL0FYdg4xv6bcMceKNUmRq12tAQPfFupW%2FVaPGB8VXqPVFEKHrLYOSkfnXnZVRSb4ufU38GcZ2rowSS787l2PU19KPs4aCn%2F%2BLt55RfqkZwcmY7CciyxPLxcMdEZolECNCmouxDWH9DWySD0O6GW9Zi6%2Ft&X-Amz-Signature=6c0bc7d90cc7c684bfc1d9e0c695f6a726c6f05a853e0e457a765286045e9be6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHUQQVI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVzPdjJ90P7a6XIJdhqr2b6b5sjY%2BZxAiIa81DcUuTAIhAKF7HtXWH5Quujz8DSM%2FJNaM9FTvpmgGcJqvXnmC3ACcKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD14WY7cNYrp%2FQ3AUq3ANKMgVRhLPJk0IxpNPse1cAz8TKeFAIHEFLpo9uF%2BQ1Oxf7VMSHfwBxD5l7tudb1U51a0o3K8TAZ5PhgsA7WsZ%2BlKh64xIp0Pdr2hfKeyp2MWZQRgGe5vI5QLHqwN%2BLgxDgblgdDUh45VUZ%2BN5AgYHnRAosJePiVc6Nht%2FKLbfntbYqLO%2FBGsj1QJCco82E0Qqi96kCQPXVtj3%2B%2BnQhW6NgSX2HS9LHVSJzv5gCmxdI3fAJLub5zITqt3OJi%2BJ37Ngbp0NB6FT9ZVpP9jUsgYYKETIjaDJGxMEirJ6Wp6mYh74BYzVjEF%2F62N2tWoymgCoQoRmg%2BxfAGytxnhpb3oRmjeCPz5k0DDS39KZXeMcOI5rjcw%2B%2F8LloNQo72wx%2FotbBZzJwTOE50BNlZQEFkhPmk3P0YFnVj58E9tYlH7d2GPmBeO6je4df72oeV3SMXIqBAriDEGApL0IrHQJMNJuHa2ZDf5gJBPObFRzUQrt9%2B%2FxPack1lADbTCrKpnucTHEWO%2Fxq2zrw5finYfX1xTHopnAqKc2fvSXWK%2BzUzlILay9WuYxkiTySbHD1iUdp9aazHCefKNnIRvGLumYqcNSCX0hEQnUXoZwXOHwnq3uwrTS9KDxeA3vDjIgDvDCUpve8BjqkAbATWOdgVdEnvKBz7VQ9Y%2BqwU4NqLpltHWuJjxqSa2H7dStlHIDhW8vnzGHs8uxMtBLL0FYdg4xv6bcMceKNUmRq12tAQPfFupW%2FVaPGB8VXqPVFEKHrLYOSkfnXnZVRSb4ufU38GcZ2rowSS787l2PU19KPs4aCn%2F%2BLt55RfqkZwcmY7CciyxPLxcMdEZolECNCmouxDWH9DWySD0O6GW9Zi6%2Ft&X-Amz-Signature=a6cde3a34b2e6e1096ac74412a79d84ea6708404d9f8063169664054e380104a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHUQQVI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVzPdjJ90P7a6XIJdhqr2b6b5sjY%2BZxAiIa81DcUuTAIhAKF7HtXWH5Quujz8DSM%2FJNaM9FTvpmgGcJqvXnmC3ACcKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD14WY7cNYrp%2FQ3AUq3ANKMgVRhLPJk0IxpNPse1cAz8TKeFAIHEFLpo9uF%2BQ1Oxf7VMSHfwBxD5l7tudb1U51a0o3K8TAZ5PhgsA7WsZ%2BlKh64xIp0Pdr2hfKeyp2MWZQRgGe5vI5QLHqwN%2BLgxDgblgdDUh45VUZ%2BN5AgYHnRAosJePiVc6Nht%2FKLbfntbYqLO%2FBGsj1QJCco82E0Qqi96kCQPXVtj3%2B%2BnQhW6NgSX2HS9LHVSJzv5gCmxdI3fAJLub5zITqt3OJi%2BJ37Ngbp0NB6FT9ZVpP9jUsgYYKETIjaDJGxMEirJ6Wp6mYh74BYzVjEF%2F62N2tWoymgCoQoRmg%2BxfAGytxnhpb3oRmjeCPz5k0DDS39KZXeMcOI5rjcw%2B%2F8LloNQo72wx%2FotbBZzJwTOE50BNlZQEFkhPmk3P0YFnVj58E9tYlH7d2GPmBeO6je4df72oeV3SMXIqBAriDEGApL0IrHQJMNJuHa2ZDf5gJBPObFRzUQrt9%2B%2FxPack1lADbTCrKpnucTHEWO%2Fxq2zrw5finYfX1xTHopnAqKc2fvSXWK%2BzUzlILay9WuYxkiTySbHD1iUdp9aazHCefKNnIRvGLumYqcNSCX0hEQnUXoZwXOHwnq3uwrTS9KDxeA3vDjIgDvDCUpve8BjqkAbATWOdgVdEnvKBz7VQ9Y%2BqwU4NqLpltHWuJjxqSa2H7dStlHIDhW8vnzGHs8uxMtBLL0FYdg4xv6bcMceKNUmRq12tAQPfFupW%2FVaPGB8VXqPVFEKHrLYOSkfnXnZVRSb4ufU38GcZ2rowSS787l2PU19KPs4aCn%2F%2BLt55RfqkZwcmY7CciyxPLxcMdEZolECNCmouxDWH9DWySD0O6GW9Zi6%2Ft&X-Amz-Signature=82321b4880c11ab56ba152e6eb8a367f831437b9a9220576aeca90ad295eead6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
