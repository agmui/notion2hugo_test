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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEC7W5E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV%2F9l1esgbSqTscwk1W17r3Cmu0vCebRVdGTIzpiWpGQIgcCbfqb%2BON9uPK9JR7FV1s4Kmyh5l4rxmCkbhbNV69O0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Pp7PUlFWEEOOJKircA0pgh%2FuJVfk3RBGwyxFYOqO%2FUTpZyLs%2B2qvJqqleSmAhaadsZA21dwumFtaDeCg8HXyquVMfUQ96vh5Gp2s3Rns3A%2F2ElVzwIJUDo6OluBw7UZgxmrYjXRPqgywt6bl1IrHwU4uW7Dc1JnQfLZkM7hfxZn%2FSUr5NRC03HaLCXmRq5N92vWZ20ZK3LA5O7sgQYJK3hsTEhkSnb3igFJWkv%2Ft6XMRk5mwd8AjqeOtIQ8sSs2Ydl3qicmnc7RnRTr0sRel3YuETYDY%2FeRv2HE%2FY2uK9eHo9O2LW%2BffHM1ReyJGL49qfzkYFYKL9ZR599noThVt9Fc8gQw1VqMmlvGt13n9ZQRZ3ejFvibu%2FY3V2UJDU3tsg%2FR8LsziTGtR4PX1e4J6lRbqGwvz1RJKlfAVp2S5qH8dsdsVCnGSAIUwQ9S60rLKVJb9MSkPY7dkDLCp9B%2BYKsNSH%2BzsDTnRArSWqIYfeZ%2FBpZXo0wrOZyBazlcTcW4BcQuDb9Lv5RW6LAOKHDy%2BQC%2BTgmCtIBhAbDEL%2Fwk2AbfqzYEwCn7TKMqpaQzdjj8G6kZt0wFGDF%2F1MmfOV9nDmBc2nOTivY7o3b5uqU7qfYTjQlsWM3Kv2oOwloWydXcnwtZChsMOL5WsJMOjLoMQGOqUBLs6zkwSHrwXtDxXFO2gGO799vNbaHAZfSSyLwOplN5aoS0QXHKUHdx6uJibmoDDYkelufbLigxPWf52N6v7azckHtSmw%2BUTVylRIx0EMUJfhTYPn9p%2BKGYhk%2FOmKVQ1AQD%2F%2F%2BwIsHOjF%2Bbun1xziY%2BjY3O0ZgA0ZNxAPv0mBi8v7WuHEUTqIUoNVsAVOU5ae%2FVPQC3DhO%2Fiayokyti3d%2FLmobmXF&X-Amz-Signature=5b0d43995ce9bc1a54d50917529b7d2daafc9f65deef57afb4bf6e1efb8df5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEC7W5E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV%2F9l1esgbSqTscwk1W17r3Cmu0vCebRVdGTIzpiWpGQIgcCbfqb%2BON9uPK9JR7FV1s4Kmyh5l4rxmCkbhbNV69O0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Pp7PUlFWEEOOJKircA0pgh%2FuJVfk3RBGwyxFYOqO%2FUTpZyLs%2B2qvJqqleSmAhaadsZA21dwumFtaDeCg8HXyquVMfUQ96vh5Gp2s3Rns3A%2F2ElVzwIJUDo6OluBw7UZgxmrYjXRPqgywt6bl1IrHwU4uW7Dc1JnQfLZkM7hfxZn%2FSUr5NRC03HaLCXmRq5N92vWZ20ZK3LA5O7sgQYJK3hsTEhkSnb3igFJWkv%2Ft6XMRk5mwd8AjqeOtIQ8sSs2Ydl3qicmnc7RnRTr0sRel3YuETYDY%2FeRv2HE%2FY2uK9eHo9O2LW%2BffHM1ReyJGL49qfzkYFYKL9ZR599noThVt9Fc8gQw1VqMmlvGt13n9ZQRZ3ejFvibu%2FY3V2UJDU3tsg%2FR8LsziTGtR4PX1e4J6lRbqGwvz1RJKlfAVp2S5qH8dsdsVCnGSAIUwQ9S60rLKVJb9MSkPY7dkDLCp9B%2BYKsNSH%2BzsDTnRArSWqIYfeZ%2FBpZXo0wrOZyBazlcTcW4BcQuDb9Lv5RW6LAOKHDy%2BQC%2BTgmCtIBhAbDEL%2Fwk2AbfqzYEwCn7TKMqpaQzdjj8G6kZt0wFGDF%2F1MmfOV9nDmBc2nOTivY7o3b5uqU7qfYTjQlsWM3Kv2oOwloWydXcnwtZChsMOL5WsJMOjLoMQGOqUBLs6zkwSHrwXtDxXFO2gGO799vNbaHAZfSSyLwOplN5aoS0QXHKUHdx6uJibmoDDYkelufbLigxPWf52N6v7azckHtSmw%2BUTVylRIx0EMUJfhTYPn9p%2BKGYhk%2FOmKVQ1AQD%2F%2F%2BwIsHOjF%2Bbun1xziY%2BjY3O0ZgA0ZNxAPv0mBi8v7WuHEUTqIUoNVsAVOU5ae%2FVPQC3DhO%2Fiayokyti3d%2FLmobmXF&X-Amz-Signature=ef9934e38165b2e99014c98c97cb1c1e4d6b58448aea48a1afbe2072e1bdbf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEC7W5E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV%2F9l1esgbSqTscwk1W17r3Cmu0vCebRVdGTIzpiWpGQIgcCbfqb%2BON9uPK9JR7FV1s4Kmyh5l4rxmCkbhbNV69O0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Pp7PUlFWEEOOJKircA0pgh%2FuJVfk3RBGwyxFYOqO%2FUTpZyLs%2B2qvJqqleSmAhaadsZA21dwumFtaDeCg8HXyquVMfUQ96vh5Gp2s3Rns3A%2F2ElVzwIJUDo6OluBw7UZgxmrYjXRPqgywt6bl1IrHwU4uW7Dc1JnQfLZkM7hfxZn%2FSUr5NRC03HaLCXmRq5N92vWZ20ZK3LA5O7sgQYJK3hsTEhkSnb3igFJWkv%2Ft6XMRk5mwd8AjqeOtIQ8sSs2Ydl3qicmnc7RnRTr0sRel3YuETYDY%2FeRv2HE%2FY2uK9eHo9O2LW%2BffHM1ReyJGL49qfzkYFYKL9ZR599noThVt9Fc8gQw1VqMmlvGt13n9ZQRZ3ejFvibu%2FY3V2UJDU3tsg%2FR8LsziTGtR4PX1e4J6lRbqGwvz1RJKlfAVp2S5qH8dsdsVCnGSAIUwQ9S60rLKVJb9MSkPY7dkDLCp9B%2BYKsNSH%2BzsDTnRArSWqIYfeZ%2FBpZXo0wrOZyBazlcTcW4BcQuDb9Lv5RW6LAOKHDy%2BQC%2BTgmCtIBhAbDEL%2Fwk2AbfqzYEwCn7TKMqpaQzdjj8G6kZt0wFGDF%2F1MmfOV9nDmBc2nOTivY7o3b5uqU7qfYTjQlsWM3Kv2oOwloWydXcnwtZChsMOL5WsJMOjLoMQGOqUBLs6zkwSHrwXtDxXFO2gGO799vNbaHAZfSSyLwOplN5aoS0QXHKUHdx6uJibmoDDYkelufbLigxPWf52N6v7azckHtSmw%2BUTVylRIx0EMUJfhTYPn9p%2BKGYhk%2FOmKVQ1AQD%2F%2F%2BwIsHOjF%2Bbun1xziY%2BjY3O0ZgA0ZNxAPv0mBi8v7WuHEUTqIUoNVsAVOU5ae%2FVPQC3DhO%2Fiayokyti3d%2FLmobmXF&X-Amz-Signature=1c97b7ed55e3b8ae6bf27c1e68f93e8b4c8d2e0f54748cc55e8a0435f9237d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEC7W5E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV%2F9l1esgbSqTscwk1W17r3Cmu0vCebRVdGTIzpiWpGQIgcCbfqb%2BON9uPK9JR7FV1s4Kmyh5l4rxmCkbhbNV69O0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Pp7PUlFWEEOOJKircA0pgh%2FuJVfk3RBGwyxFYOqO%2FUTpZyLs%2B2qvJqqleSmAhaadsZA21dwumFtaDeCg8HXyquVMfUQ96vh5Gp2s3Rns3A%2F2ElVzwIJUDo6OluBw7UZgxmrYjXRPqgywt6bl1IrHwU4uW7Dc1JnQfLZkM7hfxZn%2FSUr5NRC03HaLCXmRq5N92vWZ20ZK3LA5O7sgQYJK3hsTEhkSnb3igFJWkv%2Ft6XMRk5mwd8AjqeOtIQ8sSs2Ydl3qicmnc7RnRTr0sRel3YuETYDY%2FeRv2HE%2FY2uK9eHo9O2LW%2BffHM1ReyJGL49qfzkYFYKL9ZR599noThVt9Fc8gQw1VqMmlvGt13n9ZQRZ3ejFvibu%2FY3V2UJDU3tsg%2FR8LsziTGtR4PX1e4J6lRbqGwvz1RJKlfAVp2S5qH8dsdsVCnGSAIUwQ9S60rLKVJb9MSkPY7dkDLCp9B%2BYKsNSH%2BzsDTnRArSWqIYfeZ%2FBpZXo0wrOZyBazlcTcW4BcQuDb9Lv5RW6LAOKHDy%2BQC%2BTgmCtIBhAbDEL%2Fwk2AbfqzYEwCn7TKMqpaQzdjj8G6kZt0wFGDF%2F1MmfOV9nDmBc2nOTivY7o3b5uqU7qfYTjQlsWM3Kv2oOwloWydXcnwtZChsMOL5WsJMOjLoMQGOqUBLs6zkwSHrwXtDxXFO2gGO799vNbaHAZfSSyLwOplN5aoS0QXHKUHdx6uJibmoDDYkelufbLigxPWf52N6v7azckHtSmw%2BUTVylRIx0EMUJfhTYPn9p%2BKGYhk%2FOmKVQ1AQD%2F%2F%2BwIsHOjF%2Bbun1xziY%2BjY3O0ZgA0ZNxAPv0mBi8v7WuHEUTqIUoNVsAVOU5ae%2FVPQC3DhO%2Fiayokyti3d%2FLmobmXF&X-Amz-Signature=713804f3400f024bdd6938ce1c92ec2fe56bf5dbeaeb7b5d1a3f14a72eb28379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEC7W5E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV%2F9l1esgbSqTscwk1W17r3Cmu0vCebRVdGTIzpiWpGQIgcCbfqb%2BON9uPK9JR7FV1s4Kmyh5l4rxmCkbhbNV69O0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Pp7PUlFWEEOOJKircA0pgh%2FuJVfk3RBGwyxFYOqO%2FUTpZyLs%2B2qvJqqleSmAhaadsZA21dwumFtaDeCg8HXyquVMfUQ96vh5Gp2s3Rns3A%2F2ElVzwIJUDo6OluBw7UZgxmrYjXRPqgywt6bl1IrHwU4uW7Dc1JnQfLZkM7hfxZn%2FSUr5NRC03HaLCXmRq5N92vWZ20ZK3LA5O7sgQYJK3hsTEhkSnb3igFJWkv%2Ft6XMRk5mwd8AjqeOtIQ8sSs2Ydl3qicmnc7RnRTr0sRel3YuETYDY%2FeRv2HE%2FY2uK9eHo9O2LW%2BffHM1ReyJGL49qfzkYFYKL9ZR599noThVt9Fc8gQw1VqMmlvGt13n9ZQRZ3ejFvibu%2FY3V2UJDU3tsg%2FR8LsziTGtR4PX1e4J6lRbqGwvz1RJKlfAVp2S5qH8dsdsVCnGSAIUwQ9S60rLKVJb9MSkPY7dkDLCp9B%2BYKsNSH%2BzsDTnRArSWqIYfeZ%2FBpZXo0wrOZyBazlcTcW4BcQuDb9Lv5RW6LAOKHDy%2BQC%2BTgmCtIBhAbDEL%2Fwk2AbfqzYEwCn7TKMqpaQzdjj8G6kZt0wFGDF%2F1MmfOV9nDmBc2nOTivY7o3b5uqU7qfYTjQlsWM3Kv2oOwloWydXcnwtZChsMOL5WsJMOjLoMQGOqUBLs6zkwSHrwXtDxXFO2gGO799vNbaHAZfSSyLwOplN5aoS0QXHKUHdx6uJibmoDDYkelufbLigxPWf52N6v7azckHtSmw%2BUTVylRIx0EMUJfhTYPn9p%2BKGYhk%2FOmKVQ1AQD%2F%2F%2BwIsHOjF%2Bbun1xziY%2BjY3O0ZgA0ZNxAPv0mBi8v7WuHEUTqIUoNVsAVOU5ae%2FVPQC3DhO%2Fiayokyti3d%2FLmobmXF&X-Amz-Signature=24b876f8bbc4ec5b258034c3efbdd0b8875f0cb54e92d29aba12d28ee5edf3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
