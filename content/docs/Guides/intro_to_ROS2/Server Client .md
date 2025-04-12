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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMHGC7I%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHL2YjBXN51iea3EyPoI0UGpeQ5VhZnt1TloCXdnSqiOAiAKRUmLE1qgGz9ZtO6bvTIJSiQM1SyKII6ZXdGSy17ppiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gfDiq2DElibAUpmKtwD19dVChXNpDtggqJMDNITyZwVrw%2BipoR8%2FDkAdhivN6%2B24XRyGfnBlvImns6mFwtB%2FiMREp9ua6tf7gYkAnDKNfvmTFZro9TC4cCXJBX0Vlux5X6cQLPYFU%2FawIZUuwvXPugP6LwK7VNZ5%2FpO9Fh1vgfZyfzqRLQjaS3UAo4nQua31OKSgo%2BdLVPx3nN4tEMB8bNh3S4BzCMUJQSb54zccCnkL1BvQ1PQYQpzNneWi2YSXD95VLrXZoOPsDeK7lhdRy8oU0g4Cz6RQQC4edB6VUy%2Fs2Gw8V%2FfuQuq%2Bov%2BhoVEKiKrsDOtlzBaeubVoEfop08BWN7ZVmzu0OE0g7ZKmGQmWDJGe0VVvOH0G54pvP0%2BQFX42eDjw8JeQ%2B9MuXkz%2BOfgHRCXldCxUcvKQlIz87gt2pCePL0SikmcLI1CMrC48HHxzhO8bPbXWhtQoN2zY7QEZegu5%2FwJvppi80HRgjfEhEyoMnYVSTQuQOZGlkIvjI8o3rx%2BtjeHoablNcetTKox%2F3q2yDCy3s%2B0fjvBh07XS9KSJGrq2W0P2NBZtaMP%2F5o%2BHuoektHwSErV73GSE1iOuZUTXnHFsAkHwTfabzRw3Gnpz1Wc2aBPLv5f7t4ZZejjFMCp00IPlwMwp%2FvpvwY6pgFkSQLuLO%2Bu7tlsu%2Fs0qiDNaBENg%2BGAFfotSVfyGNvdznxVu%2BlGAf6JXh1JOvwJpRvFV4vq1%2FvBIuEpYVHOGuOvpib%2B5SZWTX%2BLbA%2FbHYx9V9WUBkBCtkZ3%2B9%2BulGlneQ4Nx78NYT0ZWJ8Z1fze8sATz4RJRaxi%2BVjP8AG6PQqq4wVZeiH5%2Bkgm5%2FITEcC3c1bB9Zh%2BzP066ejEJhwur0xtxSyDqhJm&X-Amz-Signature=2dcebde36fdc478506261097aa4a6d7dd49a4e585f8e834a6e30361a0b580f03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMHGC7I%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHL2YjBXN51iea3EyPoI0UGpeQ5VhZnt1TloCXdnSqiOAiAKRUmLE1qgGz9ZtO6bvTIJSiQM1SyKII6ZXdGSy17ppiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gfDiq2DElibAUpmKtwD19dVChXNpDtggqJMDNITyZwVrw%2BipoR8%2FDkAdhivN6%2B24XRyGfnBlvImns6mFwtB%2FiMREp9ua6tf7gYkAnDKNfvmTFZro9TC4cCXJBX0Vlux5X6cQLPYFU%2FawIZUuwvXPugP6LwK7VNZ5%2FpO9Fh1vgfZyfzqRLQjaS3UAo4nQua31OKSgo%2BdLVPx3nN4tEMB8bNh3S4BzCMUJQSb54zccCnkL1BvQ1PQYQpzNneWi2YSXD95VLrXZoOPsDeK7lhdRy8oU0g4Cz6RQQC4edB6VUy%2Fs2Gw8V%2FfuQuq%2Bov%2BhoVEKiKrsDOtlzBaeubVoEfop08BWN7ZVmzu0OE0g7ZKmGQmWDJGe0VVvOH0G54pvP0%2BQFX42eDjw8JeQ%2B9MuXkz%2BOfgHRCXldCxUcvKQlIz87gt2pCePL0SikmcLI1CMrC48HHxzhO8bPbXWhtQoN2zY7QEZegu5%2FwJvppi80HRgjfEhEyoMnYVSTQuQOZGlkIvjI8o3rx%2BtjeHoablNcetTKox%2F3q2yDCy3s%2B0fjvBh07XS9KSJGrq2W0P2NBZtaMP%2F5o%2BHuoektHwSErV73GSE1iOuZUTXnHFsAkHwTfabzRw3Gnpz1Wc2aBPLv5f7t4ZZejjFMCp00IPlwMwp%2FvpvwY6pgFkSQLuLO%2Bu7tlsu%2Fs0qiDNaBENg%2BGAFfotSVfyGNvdznxVu%2BlGAf6JXh1JOvwJpRvFV4vq1%2FvBIuEpYVHOGuOvpib%2B5SZWTX%2BLbA%2FbHYx9V9WUBkBCtkZ3%2B9%2BulGlneQ4Nx78NYT0ZWJ8Z1fze8sATz4RJRaxi%2BVjP8AG6PQqq4wVZeiH5%2Bkgm5%2FITEcC3c1bB9Zh%2BzP066ejEJhwur0xtxSyDqhJm&X-Amz-Signature=d819f7d8c1bf6d327490aed251c912eb5d0c8dfb776c7d331769d9e03f30bb4c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMHGC7I%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHL2YjBXN51iea3EyPoI0UGpeQ5VhZnt1TloCXdnSqiOAiAKRUmLE1qgGz9ZtO6bvTIJSiQM1SyKII6ZXdGSy17ppiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gfDiq2DElibAUpmKtwD19dVChXNpDtggqJMDNITyZwVrw%2BipoR8%2FDkAdhivN6%2B24XRyGfnBlvImns6mFwtB%2FiMREp9ua6tf7gYkAnDKNfvmTFZro9TC4cCXJBX0Vlux5X6cQLPYFU%2FawIZUuwvXPugP6LwK7VNZ5%2FpO9Fh1vgfZyfzqRLQjaS3UAo4nQua31OKSgo%2BdLVPx3nN4tEMB8bNh3S4BzCMUJQSb54zccCnkL1BvQ1PQYQpzNneWi2YSXD95VLrXZoOPsDeK7lhdRy8oU0g4Cz6RQQC4edB6VUy%2Fs2Gw8V%2FfuQuq%2Bov%2BhoVEKiKrsDOtlzBaeubVoEfop08BWN7ZVmzu0OE0g7ZKmGQmWDJGe0VVvOH0G54pvP0%2BQFX42eDjw8JeQ%2B9MuXkz%2BOfgHRCXldCxUcvKQlIz87gt2pCePL0SikmcLI1CMrC48HHxzhO8bPbXWhtQoN2zY7QEZegu5%2FwJvppi80HRgjfEhEyoMnYVSTQuQOZGlkIvjI8o3rx%2BtjeHoablNcetTKox%2F3q2yDCy3s%2B0fjvBh07XS9KSJGrq2W0P2NBZtaMP%2F5o%2BHuoektHwSErV73GSE1iOuZUTXnHFsAkHwTfabzRw3Gnpz1Wc2aBPLv5f7t4ZZejjFMCp00IPlwMwp%2FvpvwY6pgFkSQLuLO%2Bu7tlsu%2Fs0qiDNaBENg%2BGAFfotSVfyGNvdznxVu%2BlGAf6JXh1JOvwJpRvFV4vq1%2FvBIuEpYVHOGuOvpib%2B5SZWTX%2BLbA%2FbHYx9V9WUBkBCtkZ3%2B9%2BulGlneQ4Nx78NYT0ZWJ8Z1fze8sATz4RJRaxi%2BVjP8AG6PQqq4wVZeiH5%2Bkgm5%2FITEcC3c1bB9Zh%2BzP066ejEJhwur0xtxSyDqhJm&X-Amz-Signature=3c41a93fac0ca6ad33b8f05b5e2302246a4f439baf929b62ba93d47613e79fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMHGC7I%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHL2YjBXN51iea3EyPoI0UGpeQ5VhZnt1TloCXdnSqiOAiAKRUmLE1qgGz9ZtO6bvTIJSiQM1SyKII6ZXdGSy17ppiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gfDiq2DElibAUpmKtwD19dVChXNpDtggqJMDNITyZwVrw%2BipoR8%2FDkAdhivN6%2B24XRyGfnBlvImns6mFwtB%2FiMREp9ua6tf7gYkAnDKNfvmTFZro9TC4cCXJBX0Vlux5X6cQLPYFU%2FawIZUuwvXPugP6LwK7VNZ5%2FpO9Fh1vgfZyfzqRLQjaS3UAo4nQua31OKSgo%2BdLVPx3nN4tEMB8bNh3S4BzCMUJQSb54zccCnkL1BvQ1PQYQpzNneWi2YSXD95VLrXZoOPsDeK7lhdRy8oU0g4Cz6RQQC4edB6VUy%2Fs2Gw8V%2FfuQuq%2Bov%2BhoVEKiKrsDOtlzBaeubVoEfop08BWN7ZVmzu0OE0g7ZKmGQmWDJGe0VVvOH0G54pvP0%2BQFX42eDjw8JeQ%2B9MuXkz%2BOfgHRCXldCxUcvKQlIz87gt2pCePL0SikmcLI1CMrC48HHxzhO8bPbXWhtQoN2zY7QEZegu5%2FwJvppi80HRgjfEhEyoMnYVSTQuQOZGlkIvjI8o3rx%2BtjeHoablNcetTKox%2F3q2yDCy3s%2B0fjvBh07XS9KSJGrq2W0P2NBZtaMP%2F5o%2BHuoektHwSErV73GSE1iOuZUTXnHFsAkHwTfabzRw3Gnpz1Wc2aBPLv5f7t4ZZejjFMCp00IPlwMwp%2FvpvwY6pgFkSQLuLO%2Bu7tlsu%2Fs0qiDNaBENg%2BGAFfotSVfyGNvdznxVu%2BlGAf6JXh1JOvwJpRvFV4vq1%2FvBIuEpYVHOGuOvpib%2B5SZWTX%2BLbA%2FbHYx9V9WUBkBCtkZ3%2B9%2BulGlneQ4Nx78NYT0ZWJ8Z1fze8sATz4RJRaxi%2BVjP8AG6PQqq4wVZeiH5%2Bkgm5%2FITEcC3c1bB9Zh%2BzP066ejEJhwur0xtxSyDqhJm&X-Amz-Signature=bc380996f2761a6228a8ee584fbff5c182c2b394d1a8aa572f28de3a5cb55376&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMHGC7I%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHL2YjBXN51iea3EyPoI0UGpeQ5VhZnt1TloCXdnSqiOAiAKRUmLE1qgGz9ZtO6bvTIJSiQM1SyKII6ZXdGSy17ppiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gfDiq2DElibAUpmKtwD19dVChXNpDtggqJMDNITyZwVrw%2BipoR8%2FDkAdhivN6%2B24XRyGfnBlvImns6mFwtB%2FiMREp9ua6tf7gYkAnDKNfvmTFZro9TC4cCXJBX0Vlux5X6cQLPYFU%2FawIZUuwvXPugP6LwK7VNZ5%2FpO9Fh1vgfZyfzqRLQjaS3UAo4nQua31OKSgo%2BdLVPx3nN4tEMB8bNh3S4BzCMUJQSb54zccCnkL1BvQ1PQYQpzNneWi2YSXD95VLrXZoOPsDeK7lhdRy8oU0g4Cz6RQQC4edB6VUy%2Fs2Gw8V%2FfuQuq%2Bov%2BhoVEKiKrsDOtlzBaeubVoEfop08BWN7ZVmzu0OE0g7ZKmGQmWDJGe0VVvOH0G54pvP0%2BQFX42eDjw8JeQ%2B9MuXkz%2BOfgHRCXldCxUcvKQlIz87gt2pCePL0SikmcLI1CMrC48HHxzhO8bPbXWhtQoN2zY7QEZegu5%2FwJvppi80HRgjfEhEyoMnYVSTQuQOZGlkIvjI8o3rx%2BtjeHoablNcetTKox%2F3q2yDCy3s%2B0fjvBh07XS9KSJGrq2W0P2NBZtaMP%2F5o%2BHuoektHwSErV73GSE1iOuZUTXnHFsAkHwTfabzRw3Gnpz1Wc2aBPLv5f7t4ZZejjFMCp00IPlwMwp%2FvpvwY6pgFkSQLuLO%2Bu7tlsu%2Fs0qiDNaBENg%2BGAFfotSVfyGNvdznxVu%2BlGAf6JXh1JOvwJpRvFV4vq1%2FvBIuEpYVHOGuOvpib%2B5SZWTX%2BLbA%2FbHYx9V9WUBkBCtkZ3%2B9%2BulGlneQ4Nx78NYT0ZWJ8Z1fze8sATz4RJRaxi%2BVjP8AG6PQqq4wVZeiH5%2Bkgm5%2FITEcC3c1bB9Zh%2BzP066ejEJhwur0xtxSyDqhJm&X-Amz-Signature=cff26642a47ec67ab6fc152d8bf3ff9267ff0567c6759c0923a82269f0996eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
