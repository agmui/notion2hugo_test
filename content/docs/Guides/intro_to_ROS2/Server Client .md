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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAVUO4O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFf6Sexg4OKK6dk3dNHQGRBXfN%2FC%2FXXSgkOqul70mx%2BpAiB7zn1INixmx1Tcs6ZQmMwGchY%2B4F355LN0aZHsRz5aXSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM28G37GT1uRnDtzcfKtwDmDCmfhe8IHKRG0txvcG3i4cgSZmMhal3jvp%2Fo%2BOqLbyRuqgPARWIdv7J2%2B1Wh3wd0s6loIi2wv1cgxPxJCK%2BWyuuTAkB0qa5bdDQ2Sl9KJoHisymralQpK4z6Bx%2FcuSYefYLjN9aon%2FOmtRWACJTZqNorSfG%2B5%2FvQD71xaoniPFRNJ8R%2FnzgV5eBKmPB%2BB7LrL3ZhsPIVI12yEHFTdPY4m52MoI2oOav14VwPNAK%2FYGTaf6oTSUh%2FQh%2FimcnUT4DtqCc5dBgcTb6v1JMKcjpRRPy%2BX1%2FUzDJiaTGBs86l%2BeoByghEFWGunph3LnLz%2FX8aXV1Ej5J5D7dZ4055twKJMwYAqoKT9%2FviE%2FNwK%2FQpgGir5FVl3KjMgQpLqbmm3xKV0PCD%2Bf%2B41ReLvUOqtHx%2FH42IuXQycZa9jb0XBX4YrowuNHiBRSgl%2Ftdsipf2zzCLkS3l%2Baq6rzkV1qQlo4FoD7eMs9PB8EhwS%2FIRaVcG9qs%2Bk06bF1wbeA40ATKe0jUbFm%2BK%2FpduhXW03Hk5Rt%2FuAzw2%2FmXsxBkgOaRbnRjNhfxQIauV%2FZg9JpJOdELDcdKSY3I84VeLO5VLk8zQy%2F1rsblpu3ylNPpFo0QDE091G4GgbbAA3%2FV7Rs%2FYI0wstOTvQY6pgGotzHz8QnsTvXGZXMiBA4isgRisZlKrtEvrYZiErISW0SRE1OeYai6VquIXmNbPPttMAN%2B0JpiLW1b%2FYs1OYUY9Oz3L16lTWN%2FZgOUSka9E%2F0RSHtHfpqgBug8utz1BciYvLBLzeT72mUfl%2BLGpWG5ZRKMSx%2B18riDb52KT5ncTLlZDfOTpZdrwXNoQ4pwETDkVQyrD%2Fo25ujhWiFQvxgwlM09Z15Q&X-Amz-Signature=a9f411d1c5110af71a362682d82a3b89fe47a6e7bdfab80444766f09652a413e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAVUO4O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFf6Sexg4OKK6dk3dNHQGRBXfN%2FC%2FXXSgkOqul70mx%2BpAiB7zn1INixmx1Tcs6ZQmMwGchY%2B4F355LN0aZHsRz5aXSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM28G37GT1uRnDtzcfKtwDmDCmfhe8IHKRG0txvcG3i4cgSZmMhal3jvp%2Fo%2BOqLbyRuqgPARWIdv7J2%2B1Wh3wd0s6loIi2wv1cgxPxJCK%2BWyuuTAkB0qa5bdDQ2Sl9KJoHisymralQpK4z6Bx%2FcuSYefYLjN9aon%2FOmtRWACJTZqNorSfG%2B5%2FvQD71xaoniPFRNJ8R%2FnzgV5eBKmPB%2BB7LrL3ZhsPIVI12yEHFTdPY4m52MoI2oOav14VwPNAK%2FYGTaf6oTSUh%2FQh%2FimcnUT4DtqCc5dBgcTb6v1JMKcjpRRPy%2BX1%2FUzDJiaTGBs86l%2BeoByghEFWGunph3LnLz%2FX8aXV1Ej5J5D7dZ4055twKJMwYAqoKT9%2FviE%2FNwK%2FQpgGir5FVl3KjMgQpLqbmm3xKV0PCD%2Bf%2B41ReLvUOqtHx%2FH42IuXQycZa9jb0XBX4YrowuNHiBRSgl%2Ftdsipf2zzCLkS3l%2Baq6rzkV1qQlo4FoD7eMs9PB8EhwS%2FIRaVcG9qs%2Bk06bF1wbeA40ATKe0jUbFm%2BK%2FpduhXW03Hk5Rt%2FuAzw2%2FmXsxBkgOaRbnRjNhfxQIauV%2FZg9JpJOdELDcdKSY3I84VeLO5VLk8zQy%2F1rsblpu3ylNPpFo0QDE091G4GgbbAA3%2FV7Rs%2FYI0wstOTvQY6pgGotzHz8QnsTvXGZXMiBA4isgRisZlKrtEvrYZiErISW0SRE1OeYai6VquIXmNbPPttMAN%2B0JpiLW1b%2FYs1OYUY9Oz3L16lTWN%2FZgOUSka9E%2F0RSHtHfpqgBug8utz1BciYvLBLzeT72mUfl%2BLGpWG5ZRKMSx%2B18riDb52KT5ncTLlZDfOTpZdrwXNoQ4pwETDkVQyrD%2Fo25ujhWiFQvxgwlM09Z15Q&X-Amz-Signature=e967c7bb4fc33c427dca2fd8202a8b192aecf1377d3a5eb18fa29d6e0d1272ee&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAVUO4O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFf6Sexg4OKK6dk3dNHQGRBXfN%2FC%2FXXSgkOqul70mx%2BpAiB7zn1INixmx1Tcs6ZQmMwGchY%2B4F355LN0aZHsRz5aXSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM28G37GT1uRnDtzcfKtwDmDCmfhe8IHKRG0txvcG3i4cgSZmMhal3jvp%2Fo%2BOqLbyRuqgPARWIdv7J2%2B1Wh3wd0s6loIi2wv1cgxPxJCK%2BWyuuTAkB0qa5bdDQ2Sl9KJoHisymralQpK4z6Bx%2FcuSYefYLjN9aon%2FOmtRWACJTZqNorSfG%2B5%2FvQD71xaoniPFRNJ8R%2FnzgV5eBKmPB%2BB7LrL3ZhsPIVI12yEHFTdPY4m52MoI2oOav14VwPNAK%2FYGTaf6oTSUh%2FQh%2FimcnUT4DtqCc5dBgcTb6v1JMKcjpRRPy%2BX1%2FUzDJiaTGBs86l%2BeoByghEFWGunph3LnLz%2FX8aXV1Ej5J5D7dZ4055twKJMwYAqoKT9%2FviE%2FNwK%2FQpgGir5FVl3KjMgQpLqbmm3xKV0PCD%2Bf%2B41ReLvUOqtHx%2FH42IuXQycZa9jb0XBX4YrowuNHiBRSgl%2Ftdsipf2zzCLkS3l%2Baq6rzkV1qQlo4FoD7eMs9PB8EhwS%2FIRaVcG9qs%2Bk06bF1wbeA40ATKe0jUbFm%2BK%2FpduhXW03Hk5Rt%2FuAzw2%2FmXsxBkgOaRbnRjNhfxQIauV%2FZg9JpJOdELDcdKSY3I84VeLO5VLk8zQy%2F1rsblpu3ylNPpFo0QDE091G4GgbbAA3%2FV7Rs%2FYI0wstOTvQY6pgGotzHz8QnsTvXGZXMiBA4isgRisZlKrtEvrYZiErISW0SRE1OeYai6VquIXmNbPPttMAN%2B0JpiLW1b%2FYs1OYUY9Oz3L16lTWN%2FZgOUSka9E%2F0RSHtHfpqgBug8utz1BciYvLBLzeT72mUfl%2BLGpWG5ZRKMSx%2B18riDb52KT5ncTLlZDfOTpZdrwXNoQ4pwETDkVQyrD%2Fo25ujhWiFQvxgwlM09Z15Q&X-Amz-Signature=75536c7ea2f563a183d8928ce4d0777d9f7598123c6e0382cb0bff882eb2f09e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAVUO4O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFf6Sexg4OKK6dk3dNHQGRBXfN%2FC%2FXXSgkOqul70mx%2BpAiB7zn1INixmx1Tcs6ZQmMwGchY%2B4F355LN0aZHsRz5aXSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM28G37GT1uRnDtzcfKtwDmDCmfhe8IHKRG0txvcG3i4cgSZmMhal3jvp%2Fo%2BOqLbyRuqgPARWIdv7J2%2B1Wh3wd0s6loIi2wv1cgxPxJCK%2BWyuuTAkB0qa5bdDQ2Sl9KJoHisymralQpK4z6Bx%2FcuSYefYLjN9aon%2FOmtRWACJTZqNorSfG%2B5%2FvQD71xaoniPFRNJ8R%2FnzgV5eBKmPB%2BB7LrL3ZhsPIVI12yEHFTdPY4m52MoI2oOav14VwPNAK%2FYGTaf6oTSUh%2FQh%2FimcnUT4DtqCc5dBgcTb6v1JMKcjpRRPy%2BX1%2FUzDJiaTGBs86l%2BeoByghEFWGunph3LnLz%2FX8aXV1Ej5J5D7dZ4055twKJMwYAqoKT9%2FviE%2FNwK%2FQpgGir5FVl3KjMgQpLqbmm3xKV0PCD%2Bf%2B41ReLvUOqtHx%2FH42IuXQycZa9jb0XBX4YrowuNHiBRSgl%2Ftdsipf2zzCLkS3l%2Baq6rzkV1qQlo4FoD7eMs9PB8EhwS%2FIRaVcG9qs%2Bk06bF1wbeA40ATKe0jUbFm%2BK%2FpduhXW03Hk5Rt%2FuAzw2%2FmXsxBkgOaRbnRjNhfxQIauV%2FZg9JpJOdELDcdKSY3I84VeLO5VLk8zQy%2F1rsblpu3ylNPpFo0QDE091G4GgbbAA3%2FV7Rs%2FYI0wstOTvQY6pgGotzHz8QnsTvXGZXMiBA4isgRisZlKrtEvrYZiErISW0SRE1OeYai6VquIXmNbPPttMAN%2B0JpiLW1b%2FYs1OYUY9Oz3L16lTWN%2FZgOUSka9E%2F0RSHtHfpqgBug8utz1BciYvLBLzeT72mUfl%2BLGpWG5ZRKMSx%2B18riDb52KT5ncTLlZDfOTpZdrwXNoQ4pwETDkVQyrD%2Fo25ujhWiFQvxgwlM09Z15Q&X-Amz-Signature=9241218949841c41c4795556465e924aa6fb86a9e118c98a9f8b5e2499d45b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAVUO4O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFf6Sexg4OKK6dk3dNHQGRBXfN%2FC%2FXXSgkOqul70mx%2BpAiB7zn1INixmx1Tcs6ZQmMwGchY%2B4F355LN0aZHsRz5aXSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM28G37GT1uRnDtzcfKtwDmDCmfhe8IHKRG0txvcG3i4cgSZmMhal3jvp%2Fo%2BOqLbyRuqgPARWIdv7J2%2B1Wh3wd0s6loIi2wv1cgxPxJCK%2BWyuuTAkB0qa5bdDQ2Sl9KJoHisymralQpK4z6Bx%2FcuSYefYLjN9aon%2FOmtRWACJTZqNorSfG%2B5%2FvQD71xaoniPFRNJ8R%2FnzgV5eBKmPB%2BB7LrL3ZhsPIVI12yEHFTdPY4m52MoI2oOav14VwPNAK%2FYGTaf6oTSUh%2FQh%2FimcnUT4DtqCc5dBgcTb6v1JMKcjpRRPy%2BX1%2FUzDJiaTGBs86l%2BeoByghEFWGunph3LnLz%2FX8aXV1Ej5J5D7dZ4055twKJMwYAqoKT9%2FviE%2FNwK%2FQpgGir5FVl3KjMgQpLqbmm3xKV0PCD%2Bf%2B41ReLvUOqtHx%2FH42IuXQycZa9jb0XBX4YrowuNHiBRSgl%2Ftdsipf2zzCLkS3l%2Baq6rzkV1qQlo4FoD7eMs9PB8EhwS%2FIRaVcG9qs%2Bk06bF1wbeA40ATKe0jUbFm%2BK%2FpduhXW03Hk5Rt%2FuAzw2%2FmXsxBkgOaRbnRjNhfxQIauV%2FZg9JpJOdELDcdKSY3I84VeLO5VLk8zQy%2F1rsblpu3ylNPpFo0QDE091G4GgbbAA3%2FV7Rs%2FYI0wstOTvQY6pgGotzHz8QnsTvXGZXMiBA4isgRisZlKrtEvrYZiErISW0SRE1OeYai6VquIXmNbPPttMAN%2B0JpiLW1b%2FYs1OYUY9Oz3L16lTWN%2FZgOUSka9E%2F0RSHtHfpqgBug8utz1BciYvLBLzeT72mUfl%2BLGpWG5ZRKMSx%2B18riDb52KT5ncTLlZDfOTpZdrwXNoQ4pwETDkVQyrD%2Fo25ujhWiFQvxgwlM09Z15Q&X-Amz-Signature=aa08c961fd828926c51701a522db3bfb7dc50a2bfe9e1efd6f043bd1f99ccdfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
