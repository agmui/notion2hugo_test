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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666242NF42%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHAqDd%2BINKQ2YPCXcQsB2Dc%2BlX9tzq9UJPsYAMNflTz2AiEA6VDWVm9oSPPQDz%2F8nd3Te%2B9lFHo%2F%2FLAyLBSr2fE6xZMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfNz4eAiyE8rxkPtCrcA5pt3SpAyxjVOLrehVoXmFyIWscBo1%2FTS%2BM9yIdjsyWI4g03r3r1awB7yT3ehH%2FKn6%2FAClbAaU0HH9Uc5i4YBo171qu1FnG8%2FPH8L0KemEhTtRnLSwVhEqwwVlbAGrFv9pWOL3fw0o%2B%2FH1rYXJ6SbJh2M2cL9XDFYoDc7rYv8sshu%2FkGccAG3VL0WjIxnJ8OhgkWbPu0SyTg85Dq5Krfqs0Ab8bStebd7KIyYWKfb0ecKRm9hsaxBi%2F0%2Bqd6OoDTppfQWCDIzxyznkmpoWPyaHprqBiePaiQdZ%2BEIwpn5ZtD3Qjpo0e1P5e9Pkmx%2FRgYUUyn%2F%2FXDQRH9KUyKhtqlp9EocFJ1qVo%2FJDXGJORJifKuJ5EouTb2RVpas2pgOadmAkZzUghszRpSX47PUCKXC4l8xY8bECowJ%2FPzmCO9fgmYTEQE4OsIXYYt5hjDHoSn6PPFy1QwWidnhAXL8Qh8pGvvz4lsykrpCPnnKka%2BiPosaVRCxMB%2FAR8Na6AMXS1rUyy4k0Ojnakvm%2FbT55VIDM%2FSXt4SFDHZAVtJxbCnzHCz9lPc9hIuPjaaOsl5iFW8XTk67%2BShaymEaF99EUZHGgRyunbvWgOcBHA8ToCgBbro6BEady%2FB%2F68hV7%2BMMOuZ%2BL4GOqUBpRmAjNTNmWUPQ8D%2FriRdf4JelR1q1%2FB%2BURiQxlt6fnA9tT9k4NgGDQaaAUs0EsAjBa6TLkSzoJzh83JO537jg%2FqqbRseEVuW4L97YCiazl5XFZK%2F62XsmYb1ecetk5tHVpap3uOxGo0NvChfJ4xRnXPugKCcqiwr6X%2Fqe8Wk6VR3s0rPnFXcydCf7%2FwJytaUrm5qgl5Bw1jOTDAqv6Ei3C37PHFD&X-Amz-Signature=19eb86e5a43fde838ee9c524f1d7ae05c3e7b24d8f20ea6b88b66ab40267bf87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666242NF42%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHAqDd%2BINKQ2YPCXcQsB2Dc%2BlX9tzq9UJPsYAMNflTz2AiEA6VDWVm9oSPPQDz%2F8nd3Te%2B9lFHo%2F%2FLAyLBSr2fE6xZMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfNz4eAiyE8rxkPtCrcA5pt3SpAyxjVOLrehVoXmFyIWscBo1%2FTS%2BM9yIdjsyWI4g03r3r1awB7yT3ehH%2FKn6%2FAClbAaU0HH9Uc5i4YBo171qu1FnG8%2FPH8L0KemEhTtRnLSwVhEqwwVlbAGrFv9pWOL3fw0o%2B%2FH1rYXJ6SbJh2M2cL9XDFYoDc7rYv8sshu%2FkGccAG3VL0WjIxnJ8OhgkWbPu0SyTg85Dq5Krfqs0Ab8bStebd7KIyYWKfb0ecKRm9hsaxBi%2F0%2Bqd6OoDTppfQWCDIzxyznkmpoWPyaHprqBiePaiQdZ%2BEIwpn5ZtD3Qjpo0e1P5e9Pkmx%2FRgYUUyn%2F%2FXDQRH9KUyKhtqlp9EocFJ1qVo%2FJDXGJORJifKuJ5EouTb2RVpas2pgOadmAkZzUghszRpSX47PUCKXC4l8xY8bECowJ%2FPzmCO9fgmYTEQE4OsIXYYt5hjDHoSn6PPFy1QwWidnhAXL8Qh8pGvvz4lsykrpCPnnKka%2BiPosaVRCxMB%2FAR8Na6AMXS1rUyy4k0Ojnakvm%2FbT55VIDM%2FSXt4SFDHZAVtJxbCnzHCz9lPc9hIuPjaaOsl5iFW8XTk67%2BShaymEaF99EUZHGgRyunbvWgOcBHA8ToCgBbro6BEady%2FB%2F68hV7%2BMMOuZ%2BL4GOqUBpRmAjNTNmWUPQ8D%2FriRdf4JelR1q1%2FB%2BURiQxlt6fnA9tT9k4NgGDQaaAUs0EsAjBa6TLkSzoJzh83JO537jg%2FqqbRseEVuW4L97YCiazl5XFZK%2F62XsmYb1ecetk5tHVpap3uOxGo0NvChfJ4xRnXPugKCcqiwr6X%2Fqe8Wk6VR3s0rPnFXcydCf7%2FwJytaUrm5qgl5Bw1jOTDAqv6Ei3C37PHFD&X-Amz-Signature=6dc9b60f3c9a2d4d8e91b0ae13ab04dc67c6652765c1ae4fc912c3b86bde99c3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666242NF42%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHAqDd%2BINKQ2YPCXcQsB2Dc%2BlX9tzq9UJPsYAMNflTz2AiEA6VDWVm9oSPPQDz%2F8nd3Te%2B9lFHo%2F%2FLAyLBSr2fE6xZMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfNz4eAiyE8rxkPtCrcA5pt3SpAyxjVOLrehVoXmFyIWscBo1%2FTS%2BM9yIdjsyWI4g03r3r1awB7yT3ehH%2FKn6%2FAClbAaU0HH9Uc5i4YBo171qu1FnG8%2FPH8L0KemEhTtRnLSwVhEqwwVlbAGrFv9pWOL3fw0o%2B%2FH1rYXJ6SbJh2M2cL9XDFYoDc7rYv8sshu%2FkGccAG3VL0WjIxnJ8OhgkWbPu0SyTg85Dq5Krfqs0Ab8bStebd7KIyYWKfb0ecKRm9hsaxBi%2F0%2Bqd6OoDTppfQWCDIzxyznkmpoWPyaHprqBiePaiQdZ%2BEIwpn5ZtD3Qjpo0e1P5e9Pkmx%2FRgYUUyn%2F%2FXDQRH9KUyKhtqlp9EocFJ1qVo%2FJDXGJORJifKuJ5EouTb2RVpas2pgOadmAkZzUghszRpSX47PUCKXC4l8xY8bECowJ%2FPzmCO9fgmYTEQE4OsIXYYt5hjDHoSn6PPFy1QwWidnhAXL8Qh8pGvvz4lsykrpCPnnKka%2BiPosaVRCxMB%2FAR8Na6AMXS1rUyy4k0Ojnakvm%2FbT55VIDM%2FSXt4SFDHZAVtJxbCnzHCz9lPc9hIuPjaaOsl5iFW8XTk67%2BShaymEaF99EUZHGgRyunbvWgOcBHA8ToCgBbro6BEady%2FB%2F68hV7%2BMMOuZ%2BL4GOqUBpRmAjNTNmWUPQ8D%2FriRdf4JelR1q1%2FB%2BURiQxlt6fnA9tT9k4NgGDQaaAUs0EsAjBa6TLkSzoJzh83JO537jg%2FqqbRseEVuW4L97YCiazl5XFZK%2F62XsmYb1ecetk5tHVpap3uOxGo0NvChfJ4xRnXPugKCcqiwr6X%2Fqe8Wk6VR3s0rPnFXcydCf7%2FwJytaUrm5qgl5Bw1jOTDAqv6Ei3C37PHFD&X-Amz-Signature=f453243ee8abc443ea49bb973e718d97d5c63b8fd1be63edfe2f750b508989f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666242NF42%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHAqDd%2BINKQ2YPCXcQsB2Dc%2BlX9tzq9UJPsYAMNflTz2AiEA6VDWVm9oSPPQDz%2F8nd3Te%2B9lFHo%2F%2FLAyLBSr2fE6xZMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfNz4eAiyE8rxkPtCrcA5pt3SpAyxjVOLrehVoXmFyIWscBo1%2FTS%2BM9yIdjsyWI4g03r3r1awB7yT3ehH%2FKn6%2FAClbAaU0HH9Uc5i4YBo171qu1FnG8%2FPH8L0KemEhTtRnLSwVhEqwwVlbAGrFv9pWOL3fw0o%2B%2FH1rYXJ6SbJh2M2cL9XDFYoDc7rYv8sshu%2FkGccAG3VL0WjIxnJ8OhgkWbPu0SyTg85Dq5Krfqs0Ab8bStebd7KIyYWKfb0ecKRm9hsaxBi%2F0%2Bqd6OoDTppfQWCDIzxyznkmpoWPyaHprqBiePaiQdZ%2BEIwpn5ZtD3Qjpo0e1P5e9Pkmx%2FRgYUUyn%2F%2FXDQRH9KUyKhtqlp9EocFJ1qVo%2FJDXGJORJifKuJ5EouTb2RVpas2pgOadmAkZzUghszRpSX47PUCKXC4l8xY8bECowJ%2FPzmCO9fgmYTEQE4OsIXYYt5hjDHoSn6PPFy1QwWidnhAXL8Qh8pGvvz4lsykrpCPnnKka%2BiPosaVRCxMB%2FAR8Na6AMXS1rUyy4k0Ojnakvm%2FbT55VIDM%2FSXt4SFDHZAVtJxbCnzHCz9lPc9hIuPjaaOsl5iFW8XTk67%2BShaymEaF99EUZHGgRyunbvWgOcBHA8ToCgBbro6BEady%2FB%2F68hV7%2BMMOuZ%2BL4GOqUBpRmAjNTNmWUPQ8D%2FriRdf4JelR1q1%2FB%2BURiQxlt6fnA9tT9k4NgGDQaaAUs0EsAjBa6TLkSzoJzh83JO537jg%2FqqbRseEVuW4L97YCiazl5XFZK%2F62XsmYb1ecetk5tHVpap3uOxGo0NvChfJ4xRnXPugKCcqiwr6X%2Fqe8Wk6VR3s0rPnFXcydCf7%2FwJytaUrm5qgl5Bw1jOTDAqv6Ei3C37PHFD&X-Amz-Signature=afac40fbb3222996e727b5c02a4168e2fa35dca08e9474a7d39f515a29b9c80f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666242NF42%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHAqDd%2BINKQ2YPCXcQsB2Dc%2BlX9tzq9UJPsYAMNflTz2AiEA6VDWVm9oSPPQDz%2F8nd3Te%2B9lFHo%2F%2FLAyLBSr2fE6xZMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfNz4eAiyE8rxkPtCrcA5pt3SpAyxjVOLrehVoXmFyIWscBo1%2FTS%2BM9yIdjsyWI4g03r3r1awB7yT3ehH%2FKn6%2FAClbAaU0HH9Uc5i4YBo171qu1FnG8%2FPH8L0KemEhTtRnLSwVhEqwwVlbAGrFv9pWOL3fw0o%2B%2FH1rYXJ6SbJh2M2cL9XDFYoDc7rYv8sshu%2FkGccAG3VL0WjIxnJ8OhgkWbPu0SyTg85Dq5Krfqs0Ab8bStebd7KIyYWKfb0ecKRm9hsaxBi%2F0%2Bqd6OoDTppfQWCDIzxyznkmpoWPyaHprqBiePaiQdZ%2BEIwpn5ZtD3Qjpo0e1P5e9Pkmx%2FRgYUUyn%2F%2FXDQRH9KUyKhtqlp9EocFJ1qVo%2FJDXGJORJifKuJ5EouTb2RVpas2pgOadmAkZzUghszRpSX47PUCKXC4l8xY8bECowJ%2FPzmCO9fgmYTEQE4OsIXYYt5hjDHoSn6PPFy1QwWidnhAXL8Qh8pGvvz4lsykrpCPnnKka%2BiPosaVRCxMB%2FAR8Na6AMXS1rUyy4k0Ojnakvm%2FbT55VIDM%2FSXt4SFDHZAVtJxbCnzHCz9lPc9hIuPjaaOsl5iFW8XTk67%2BShaymEaF99EUZHGgRyunbvWgOcBHA8ToCgBbro6BEady%2FB%2F68hV7%2BMMOuZ%2BL4GOqUBpRmAjNTNmWUPQ8D%2FriRdf4JelR1q1%2FB%2BURiQxlt6fnA9tT9k4NgGDQaaAUs0EsAjBa6TLkSzoJzh83JO537jg%2FqqbRseEVuW4L97YCiazl5XFZK%2F62XsmYb1ecetk5tHVpap3uOxGo0NvChfJ4xRnXPugKCcqiwr6X%2Fqe8Wk6VR3s0rPnFXcydCf7%2FwJytaUrm5qgl5Bw1jOTDAqv6Ei3C37PHFD&X-Amz-Signature=dcfc47c841a7c2af3701a413124282553a168f7e715c18f939736784dd231d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
