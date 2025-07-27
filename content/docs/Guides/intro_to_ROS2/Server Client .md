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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWEXDPZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBoP98TTsxd4zoayw0yyrpUd5IfpVHQA52vtXibLYiq9AiB5sYfzA9%2BmrkQusEyYZbaBqQ6ASvtP%2F8KQEB69Okih4Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMTvDpE1V%2F0rVQ0uBUKtwDzBLs3yVIZCJToXgKtHjJC30C2nXWq2MyfP6YENwnWCALdwRzF4oH4vm65CVzGT1n6wZNffkp5qLGaokyWCk5N%2BE9LMKLiJopGm%2F8y%2F%2Fm63YCStxP4%2BciaJwAoGgt%2FMoM%2Bp4HEpSzUMo%2Bo1MfGs02mJ9lutxnWK0DSyV74fazM55PUduBEYbvNzQl3AqLK9yoBv0Vd%2BMGt93oiNPY%2BijbKHPGFkua4nA3RvJ5PF0x%2B16VOeCkGE9OROCDoRfSX8hRSaPZhNbf2Toywh%2FvrB6eMXTWk4Y3vG7d%2FZdFAEek%2Fg7XZQCkfBUP24h2iHo7S2IN6zNwoLXvFfqETObR%2ByqzdxsBKWLFjtF25Pyhos3RzMnv%2FflX%2BVIPYKALI1GyYliuV48tfZycP%2FPO9L9C0UZuFtn%2F6qc6DNhngF%2FlevgneYsg0icFwFf5xXlr%2BS1FpDpGABAINwKAMrO3kaRrA%2FwaVaHjoZs8uhAz5JonMsMOJO0can5ZuXHP0TDSmM8%2FBt8aSRcH%2FGEmuNFSEO73HkkkROZ40OboVP7xoOtL3vZ6iw9W4s2WFYuAOxAJ%2FexQT4jzJTbhH4k4snnXjYNWb7jdyLUnXP0DI9fnIo6xPllIuUyRhNRAzxoRFCi52kkwu8KVxAY6pgEm7SFs7jXqOHzW6u9uMfcFcNf%2BdkVFTmsJodc6SZ1l7AhzrGwu%2FhdrAi4VVAiNBQwMA%2F0EqyN%2FykTRma4MvAKtN0JjsIjckbuaDGIo85AciUeuuHFpfynn9NyjdQkEg3ypIa5OFMC%2FDd83JJazdQ9UqQivUWIYF6GjPsmZt9uvtOLZMZUnSS%2FTI4e1SlMSncIYpmbR1pPc4WJti1RHBWPOmogPftoU&X-Amz-Signature=2d59ef01fcc1c53429bde0f126777114bd75ba9409fc447477734e753b414240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWEXDPZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBoP98TTsxd4zoayw0yyrpUd5IfpVHQA52vtXibLYiq9AiB5sYfzA9%2BmrkQusEyYZbaBqQ6ASvtP%2F8KQEB69Okih4Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMTvDpE1V%2F0rVQ0uBUKtwDzBLs3yVIZCJToXgKtHjJC30C2nXWq2MyfP6YENwnWCALdwRzF4oH4vm65CVzGT1n6wZNffkp5qLGaokyWCk5N%2BE9LMKLiJopGm%2F8y%2F%2Fm63YCStxP4%2BciaJwAoGgt%2FMoM%2Bp4HEpSzUMo%2Bo1MfGs02mJ9lutxnWK0DSyV74fazM55PUduBEYbvNzQl3AqLK9yoBv0Vd%2BMGt93oiNPY%2BijbKHPGFkua4nA3RvJ5PF0x%2B16VOeCkGE9OROCDoRfSX8hRSaPZhNbf2Toywh%2FvrB6eMXTWk4Y3vG7d%2FZdFAEek%2Fg7XZQCkfBUP24h2iHo7S2IN6zNwoLXvFfqETObR%2ByqzdxsBKWLFjtF25Pyhos3RzMnv%2FflX%2BVIPYKALI1GyYliuV48tfZycP%2FPO9L9C0UZuFtn%2F6qc6DNhngF%2FlevgneYsg0icFwFf5xXlr%2BS1FpDpGABAINwKAMrO3kaRrA%2FwaVaHjoZs8uhAz5JonMsMOJO0can5ZuXHP0TDSmM8%2FBt8aSRcH%2FGEmuNFSEO73HkkkROZ40OboVP7xoOtL3vZ6iw9W4s2WFYuAOxAJ%2FexQT4jzJTbhH4k4snnXjYNWb7jdyLUnXP0DI9fnIo6xPllIuUyRhNRAzxoRFCi52kkwu8KVxAY6pgEm7SFs7jXqOHzW6u9uMfcFcNf%2BdkVFTmsJodc6SZ1l7AhzrGwu%2FhdrAi4VVAiNBQwMA%2F0EqyN%2FykTRma4MvAKtN0JjsIjckbuaDGIo85AciUeuuHFpfynn9NyjdQkEg3ypIa5OFMC%2FDd83JJazdQ9UqQivUWIYF6GjPsmZt9uvtOLZMZUnSS%2FTI4e1SlMSncIYpmbR1pPc4WJti1RHBWPOmogPftoU&X-Amz-Signature=71b52bde07c887c6d135e47eada545175cf7070c6c6c4e4ca2f04508e274cdaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWEXDPZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBoP98TTsxd4zoayw0yyrpUd5IfpVHQA52vtXibLYiq9AiB5sYfzA9%2BmrkQusEyYZbaBqQ6ASvtP%2F8KQEB69Okih4Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMTvDpE1V%2F0rVQ0uBUKtwDzBLs3yVIZCJToXgKtHjJC30C2nXWq2MyfP6YENwnWCALdwRzF4oH4vm65CVzGT1n6wZNffkp5qLGaokyWCk5N%2BE9LMKLiJopGm%2F8y%2F%2Fm63YCStxP4%2BciaJwAoGgt%2FMoM%2Bp4HEpSzUMo%2Bo1MfGs02mJ9lutxnWK0DSyV74fazM55PUduBEYbvNzQl3AqLK9yoBv0Vd%2BMGt93oiNPY%2BijbKHPGFkua4nA3RvJ5PF0x%2B16VOeCkGE9OROCDoRfSX8hRSaPZhNbf2Toywh%2FvrB6eMXTWk4Y3vG7d%2FZdFAEek%2Fg7XZQCkfBUP24h2iHo7S2IN6zNwoLXvFfqETObR%2ByqzdxsBKWLFjtF25Pyhos3RzMnv%2FflX%2BVIPYKALI1GyYliuV48tfZycP%2FPO9L9C0UZuFtn%2F6qc6DNhngF%2FlevgneYsg0icFwFf5xXlr%2BS1FpDpGABAINwKAMrO3kaRrA%2FwaVaHjoZs8uhAz5JonMsMOJO0can5ZuXHP0TDSmM8%2FBt8aSRcH%2FGEmuNFSEO73HkkkROZ40OboVP7xoOtL3vZ6iw9W4s2WFYuAOxAJ%2FexQT4jzJTbhH4k4snnXjYNWb7jdyLUnXP0DI9fnIo6xPllIuUyRhNRAzxoRFCi52kkwu8KVxAY6pgEm7SFs7jXqOHzW6u9uMfcFcNf%2BdkVFTmsJodc6SZ1l7AhzrGwu%2FhdrAi4VVAiNBQwMA%2F0EqyN%2FykTRma4MvAKtN0JjsIjckbuaDGIo85AciUeuuHFpfynn9NyjdQkEg3ypIa5OFMC%2FDd83JJazdQ9UqQivUWIYF6GjPsmZt9uvtOLZMZUnSS%2FTI4e1SlMSncIYpmbR1pPc4WJti1RHBWPOmogPftoU&X-Amz-Signature=500530f908108441ec80e2838cf7c3608eea3783f7fd45c4e94e45d22f8c0709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWEXDPZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBoP98TTsxd4zoayw0yyrpUd5IfpVHQA52vtXibLYiq9AiB5sYfzA9%2BmrkQusEyYZbaBqQ6ASvtP%2F8KQEB69Okih4Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMTvDpE1V%2F0rVQ0uBUKtwDzBLs3yVIZCJToXgKtHjJC30C2nXWq2MyfP6YENwnWCALdwRzF4oH4vm65CVzGT1n6wZNffkp5qLGaokyWCk5N%2BE9LMKLiJopGm%2F8y%2F%2Fm63YCStxP4%2BciaJwAoGgt%2FMoM%2Bp4HEpSzUMo%2Bo1MfGs02mJ9lutxnWK0DSyV74fazM55PUduBEYbvNzQl3AqLK9yoBv0Vd%2BMGt93oiNPY%2BijbKHPGFkua4nA3RvJ5PF0x%2B16VOeCkGE9OROCDoRfSX8hRSaPZhNbf2Toywh%2FvrB6eMXTWk4Y3vG7d%2FZdFAEek%2Fg7XZQCkfBUP24h2iHo7S2IN6zNwoLXvFfqETObR%2ByqzdxsBKWLFjtF25Pyhos3RzMnv%2FflX%2BVIPYKALI1GyYliuV48tfZycP%2FPO9L9C0UZuFtn%2F6qc6DNhngF%2FlevgneYsg0icFwFf5xXlr%2BS1FpDpGABAINwKAMrO3kaRrA%2FwaVaHjoZs8uhAz5JonMsMOJO0can5ZuXHP0TDSmM8%2FBt8aSRcH%2FGEmuNFSEO73HkkkROZ40OboVP7xoOtL3vZ6iw9W4s2WFYuAOxAJ%2FexQT4jzJTbhH4k4snnXjYNWb7jdyLUnXP0DI9fnIo6xPllIuUyRhNRAzxoRFCi52kkwu8KVxAY6pgEm7SFs7jXqOHzW6u9uMfcFcNf%2BdkVFTmsJodc6SZ1l7AhzrGwu%2FhdrAi4VVAiNBQwMA%2F0EqyN%2FykTRma4MvAKtN0JjsIjckbuaDGIo85AciUeuuHFpfynn9NyjdQkEg3ypIa5OFMC%2FDd83JJazdQ9UqQivUWIYF6GjPsmZt9uvtOLZMZUnSS%2FTI4e1SlMSncIYpmbR1pPc4WJti1RHBWPOmogPftoU&X-Amz-Signature=81e514e42fd3ca162ee7e742a5945c58770980ea34f63b1c1784063aa371fbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWEXDPZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBoP98TTsxd4zoayw0yyrpUd5IfpVHQA52vtXibLYiq9AiB5sYfzA9%2BmrkQusEyYZbaBqQ6ASvtP%2F8KQEB69Okih4Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMTvDpE1V%2F0rVQ0uBUKtwDzBLs3yVIZCJToXgKtHjJC30C2nXWq2MyfP6YENwnWCALdwRzF4oH4vm65CVzGT1n6wZNffkp5qLGaokyWCk5N%2BE9LMKLiJopGm%2F8y%2F%2Fm63YCStxP4%2BciaJwAoGgt%2FMoM%2Bp4HEpSzUMo%2Bo1MfGs02mJ9lutxnWK0DSyV74fazM55PUduBEYbvNzQl3AqLK9yoBv0Vd%2BMGt93oiNPY%2BijbKHPGFkua4nA3RvJ5PF0x%2B16VOeCkGE9OROCDoRfSX8hRSaPZhNbf2Toywh%2FvrB6eMXTWk4Y3vG7d%2FZdFAEek%2Fg7XZQCkfBUP24h2iHo7S2IN6zNwoLXvFfqETObR%2ByqzdxsBKWLFjtF25Pyhos3RzMnv%2FflX%2BVIPYKALI1GyYliuV48tfZycP%2FPO9L9C0UZuFtn%2F6qc6DNhngF%2FlevgneYsg0icFwFf5xXlr%2BS1FpDpGABAINwKAMrO3kaRrA%2FwaVaHjoZs8uhAz5JonMsMOJO0can5ZuXHP0TDSmM8%2FBt8aSRcH%2FGEmuNFSEO73HkkkROZ40OboVP7xoOtL3vZ6iw9W4s2WFYuAOxAJ%2FexQT4jzJTbhH4k4snnXjYNWb7jdyLUnXP0DI9fnIo6xPllIuUyRhNRAzxoRFCi52kkwu8KVxAY6pgEm7SFs7jXqOHzW6u9uMfcFcNf%2BdkVFTmsJodc6SZ1l7AhzrGwu%2FhdrAi4VVAiNBQwMA%2F0EqyN%2FykTRma4MvAKtN0JjsIjckbuaDGIo85AciUeuuHFpfynn9NyjdQkEg3ypIa5OFMC%2FDd83JJazdQ9UqQivUWIYF6GjPsmZt9uvtOLZMZUnSS%2FTI4e1SlMSncIYpmbR1pPc4WJti1RHBWPOmogPftoU&X-Amz-Signature=bd01917d40610cc9f78a40b49c5e7930e48bfed0943a8f95d200ae27ab7e3b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
