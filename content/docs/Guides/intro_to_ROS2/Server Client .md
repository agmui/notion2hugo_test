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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIOZKLZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDvIrEn%2ByjDx%2FLR2d82XPpKB06pimxRNaqSvp%2FcelqrfQIhALxx50dbbr8UzuBnI5cFUhiN%2B%2FiJghy1GMVRSfHJdVp8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCI48uZ8ropDSIc9Mq3ANoOKOVroNFDI4umSt1bc4ovnrQ8l2ASxLVGQ7%2FedfkAY%2BP6YGvVKjjgJhQjHzauNCtSGQKBMesmU%2BV%2F%2FZ0cz4a5dO21Z7ox4dSTwqPLRZxYr0OEF32lzKuPo6Zq1w3Fd2gGOLUwcB70EGty4gaoBqr144L12ojMj54cK%2FAF%2F9GtsN3TIS0HtxKSZN0%2F8GT31visApep6L%2FpL5Zn%2B9B691UGFIRqCXQ3wvGa25XkTrhPnvHejjYurB672exOx6rR91yJ8Fh5tOS83JbTrSdkDgNOhcJEw90ZBMBcz%2FeDlIxL7ZKiPjcSTmODtPGh9xkWsJcGrzmVF7NGbpx37lRVD7oUgHygxgFNwtBbYhrAbHPmgsg%2FKOzkG0W8VZ6KfSPNp4wT1gSxR4PGLvbfuQ8b1050lH773r%2FqO0t239tMsaP3MSE4t%2BbGpkgwD%2FNmlukyXIHgs4jqUNFHF42z7YDu%2Fp8Gh5mhI%2BF03XTxJrr4fVRu0DwHsB7NH2R2pgEsNrhFy5w9nbQ2Wg9cehRWDBCOZMZSwZMne6d8aJQ7LC065ESHjC0Zf3SzYf%2Bz1oPlOKaFkVVXBQyAJMSsdFsyhbQvMUlMUIUB6b%2FbsM%2BCd1jkw2o8aaLYevo9A3zDx8y%2FjDLzZTABjqkARvBix3XLYJOYqwxYeKewIfB%2BE95hZjDfEEcouC4kDM7wz4%2Bk%2BcCr9xgfjBrqOH7S6afV2OUuJpS%2B3MzX1GVvhDFnC%2FVxf62JNrjbMKqlMnkUy9syqTI1WbGF%2B%2BFYvAnGs%2Bthv4IWg5YRyLET6whgXqhwHxRFK6gEdV4RhsC%2BFV4xiuRea5tBeBWfeHc0zXVgN%2F6ayPhh1XwnCrv3OOavgeTaEGM&X-Amz-Signature=d0598331d54cf075ccd5365611aaf3b4cd95252e5362ca77ddcc8bb5b1ae89b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIOZKLZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDvIrEn%2ByjDx%2FLR2d82XPpKB06pimxRNaqSvp%2FcelqrfQIhALxx50dbbr8UzuBnI5cFUhiN%2B%2FiJghy1GMVRSfHJdVp8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCI48uZ8ropDSIc9Mq3ANoOKOVroNFDI4umSt1bc4ovnrQ8l2ASxLVGQ7%2FedfkAY%2BP6YGvVKjjgJhQjHzauNCtSGQKBMesmU%2BV%2F%2FZ0cz4a5dO21Z7ox4dSTwqPLRZxYr0OEF32lzKuPo6Zq1w3Fd2gGOLUwcB70EGty4gaoBqr144L12ojMj54cK%2FAF%2F9GtsN3TIS0HtxKSZN0%2F8GT31visApep6L%2FpL5Zn%2B9B691UGFIRqCXQ3wvGa25XkTrhPnvHejjYurB672exOx6rR91yJ8Fh5tOS83JbTrSdkDgNOhcJEw90ZBMBcz%2FeDlIxL7ZKiPjcSTmODtPGh9xkWsJcGrzmVF7NGbpx37lRVD7oUgHygxgFNwtBbYhrAbHPmgsg%2FKOzkG0W8VZ6KfSPNp4wT1gSxR4PGLvbfuQ8b1050lH773r%2FqO0t239tMsaP3MSE4t%2BbGpkgwD%2FNmlukyXIHgs4jqUNFHF42z7YDu%2Fp8Gh5mhI%2BF03XTxJrr4fVRu0DwHsB7NH2R2pgEsNrhFy5w9nbQ2Wg9cehRWDBCOZMZSwZMne6d8aJQ7LC065ESHjC0Zf3SzYf%2Bz1oPlOKaFkVVXBQyAJMSsdFsyhbQvMUlMUIUB6b%2FbsM%2BCd1jkw2o8aaLYevo9A3zDx8y%2FjDLzZTABjqkARvBix3XLYJOYqwxYeKewIfB%2BE95hZjDfEEcouC4kDM7wz4%2Bk%2BcCr9xgfjBrqOH7S6afV2OUuJpS%2B3MzX1GVvhDFnC%2FVxf62JNrjbMKqlMnkUy9syqTI1WbGF%2B%2BFYvAnGs%2Bthv4IWg5YRyLET6whgXqhwHxRFK6gEdV4RhsC%2BFV4xiuRea5tBeBWfeHc0zXVgN%2F6ayPhh1XwnCrv3OOavgeTaEGM&X-Amz-Signature=a60d513a9f4289cdd3afdc54f63e52813a1fb22473d44d0952b115a91052fe30&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIOZKLZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDvIrEn%2ByjDx%2FLR2d82XPpKB06pimxRNaqSvp%2FcelqrfQIhALxx50dbbr8UzuBnI5cFUhiN%2B%2FiJghy1GMVRSfHJdVp8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCI48uZ8ropDSIc9Mq3ANoOKOVroNFDI4umSt1bc4ovnrQ8l2ASxLVGQ7%2FedfkAY%2BP6YGvVKjjgJhQjHzauNCtSGQKBMesmU%2BV%2F%2FZ0cz4a5dO21Z7ox4dSTwqPLRZxYr0OEF32lzKuPo6Zq1w3Fd2gGOLUwcB70EGty4gaoBqr144L12ojMj54cK%2FAF%2F9GtsN3TIS0HtxKSZN0%2F8GT31visApep6L%2FpL5Zn%2B9B691UGFIRqCXQ3wvGa25XkTrhPnvHejjYurB672exOx6rR91yJ8Fh5tOS83JbTrSdkDgNOhcJEw90ZBMBcz%2FeDlIxL7ZKiPjcSTmODtPGh9xkWsJcGrzmVF7NGbpx37lRVD7oUgHygxgFNwtBbYhrAbHPmgsg%2FKOzkG0W8VZ6KfSPNp4wT1gSxR4PGLvbfuQ8b1050lH773r%2FqO0t239tMsaP3MSE4t%2BbGpkgwD%2FNmlukyXIHgs4jqUNFHF42z7YDu%2Fp8Gh5mhI%2BF03XTxJrr4fVRu0DwHsB7NH2R2pgEsNrhFy5w9nbQ2Wg9cehRWDBCOZMZSwZMne6d8aJQ7LC065ESHjC0Zf3SzYf%2Bz1oPlOKaFkVVXBQyAJMSsdFsyhbQvMUlMUIUB6b%2FbsM%2BCd1jkw2o8aaLYevo9A3zDx8y%2FjDLzZTABjqkARvBix3XLYJOYqwxYeKewIfB%2BE95hZjDfEEcouC4kDM7wz4%2Bk%2BcCr9xgfjBrqOH7S6afV2OUuJpS%2B3MzX1GVvhDFnC%2FVxf62JNrjbMKqlMnkUy9syqTI1WbGF%2B%2BFYvAnGs%2Bthv4IWg5YRyLET6whgXqhwHxRFK6gEdV4RhsC%2BFV4xiuRea5tBeBWfeHc0zXVgN%2F6ayPhh1XwnCrv3OOavgeTaEGM&X-Amz-Signature=6b8ea1cce7b35fa49de7c64fd00493b5e9e2f666ef3520b553aa9ff9d8381830&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIOZKLZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDvIrEn%2ByjDx%2FLR2d82XPpKB06pimxRNaqSvp%2FcelqrfQIhALxx50dbbr8UzuBnI5cFUhiN%2B%2FiJghy1GMVRSfHJdVp8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCI48uZ8ropDSIc9Mq3ANoOKOVroNFDI4umSt1bc4ovnrQ8l2ASxLVGQ7%2FedfkAY%2BP6YGvVKjjgJhQjHzauNCtSGQKBMesmU%2BV%2F%2FZ0cz4a5dO21Z7ox4dSTwqPLRZxYr0OEF32lzKuPo6Zq1w3Fd2gGOLUwcB70EGty4gaoBqr144L12ojMj54cK%2FAF%2F9GtsN3TIS0HtxKSZN0%2F8GT31visApep6L%2FpL5Zn%2B9B691UGFIRqCXQ3wvGa25XkTrhPnvHejjYurB672exOx6rR91yJ8Fh5tOS83JbTrSdkDgNOhcJEw90ZBMBcz%2FeDlIxL7ZKiPjcSTmODtPGh9xkWsJcGrzmVF7NGbpx37lRVD7oUgHygxgFNwtBbYhrAbHPmgsg%2FKOzkG0W8VZ6KfSPNp4wT1gSxR4PGLvbfuQ8b1050lH773r%2FqO0t239tMsaP3MSE4t%2BbGpkgwD%2FNmlukyXIHgs4jqUNFHF42z7YDu%2Fp8Gh5mhI%2BF03XTxJrr4fVRu0DwHsB7NH2R2pgEsNrhFy5w9nbQ2Wg9cehRWDBCOZMZSwZMne6d8aJQ7LC065ESHjC0Zf3SzYf%2Bz1oPlOKaFkVVXBQyAJMSsdFsyhbQvMUlMUIUB6b%2FbsM%2BCd1jkw2o8aaLYevo9A3zDx8y%2FjDLzZTABjqkARvBix3XLYJOYqwxYeKewIfB%2BE95hZjDfEEcouC4kDM7wz4%2Bk%2BcCr9xgfjBrqOH7S6afV2OUuJpS%2B3MzX1GVvhDFnC%2FVxf62JNrjbMKqlMnkUy9syqTI1WbGF%2B%2BFYvAnGs%2Bthv4IWg5YRyLET6whgXqhwHxRFK6gEdV4RhsC%2BFV4xiuRea5tBeBWfeHc0zXVgN%2F6ayPhh1XwnCrv3OOavgeTaEGM&X-Amz-Signature=9b4e45eb97136b427b4b866d7f2a4169321b2334bdd4cf28affae1f2a498d28b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIOZKLZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDvIrEn%2ByjDx%2FLR2d82XPpKB06pimxRNaqSvp%2FcelqrfQIhALxx50dbbr8UzuBnI5cFUhiN%2B%2FiJghy1GMVRSfHJdVp8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCI48uZ8ropDSIc9Mq3ANoOKOVroNFDI4umSt1bc4ovnrQ8l2ASxLVGQ7%2FedfkAY%2BP6YGvVKjjgJhQjHzauNCtSGQKBMesmU%2BV%2F%2FZ0cz4a5dO21Z7ox4dSTwqPLRZxYr0OEF32lzKuPo6Zq1w3Fd2gGOLUwcB70EGty4gaoBqr144L12ojMj54cK%2FAF%2F9GtsN3TIS0HtxKSZN0%2F8GT31visApep6L%2FpL5Zn%2B9B691UGFIRqCXQ3wvGa25XkTrhPnvHejjYurB672exOx6rR91yJ8Fh5tOS83JbTrSdkDgNOhcJEw90ZBMBcz%2FeDlIxL7ZKiPjcSTmODtPGh9xkWsJcGrzmVF7NGbpx37lRVD7oUgHygxgFNwtBbYhrAbHPmgsg%2FKOzkG0W8VZ6KfSPNp4wT1gSxR4PGLvbfuQ8b1050lH773r%2FqO0t239tMsaP3MSE4t%2BbGpkgwD%2FNmlukyXIHgs4jqUNFHF42z7YDu%2Fp8Gh5mhI%2BF03XTxJrr4fVRu0DwHsB7NH2R2pgEsNrhFy5w9nbQ2Wg9cehRWDBCOZMZSwZMne6d8aJQ7LC065ESHjC0Zf3SzYf%2Bz1oPlOKaFkVVXBQyAJMSsdFsyhbQvMUlMUIUB6b%2FbsM%2BCd1jkw2o8aaLYevo9A3zDx8y%2FjDLzZTABjqkARvBix3XLYJOYqwxYeKewIfB%2BE95hZjDfEEcouC4kDM7wz4%2Bk%2BcCr9xgfjBrqOH7S6afV2OUuJpS%2B3MzX1GVvhDFnC%2FVxf62JNrjbMKqlMnkUy9syqTI1WbGF%2B%2BFYvAnGs%2Bthv4IWg5YRyLET6whgXqhwHxRFK6gEdV4RhsC%2BFV4xiuRea5tBeBWfeHc0zXVgN%2F6ayPhh1XwnCrv3OOavgeTaEGM&X-Amz-Signature=d64d728f534c83a05761a3f56c9323ccee0bdac4c5106574a46a2d8860efc9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
