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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOKFX73%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCk4Iy%2FfevhiyPQ%2BvEZiGXQi0J5WboxQB88Q0mBfuEN0gIhAPqM599%2B2YGMy8IIs0NK3zitnyOQz3Y%2Bs9XAI0GkK4x2KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC8mTBcpNLkp9DQiEq3APxVpRm4E08zumVdKmntWogpJS%2FPlr4q2MHryWeHVcIeK2QXDKVzUh%2F0MJeDFEAsGBRZqlqmEw0fm1l%2BrJDfe3OEqYO3jr38KG8ThJIYuV5rQZQLlY6Ot%2FAylyfkqnLEbw7FnYxETmIwSlY6M2ViUV5ce9Qbq38ptIYNIev2E9dwCiSamSdFZ1atR7ppBqZUnSy7T0sSUPyp2teiFh4oxCP%2FvBj8AuVAAdztDdb0ZnRBAKUJSZhdyAcXa64FFMJ8dUQy7CqfFolVg4SXmNTYxP2dBBxaqppLLkn0X2XB0hsGIUqeTZRWJSCVxG2l6bF1sbjob8UOrzuBKHFrRCYVeuG515NQhYflpRkg4Jvd2fXG7UBQUYsEF1qkhFi3stnYWbECTUlt4ykYxfrQuUKF7vlXHpLuMoQMTqhKtxuHmls5QHR8r52s8d2HGpjY8zGzLVR2494MJWuno9vJOSuh37W%2FxDzbwHldKH78nGKulfGXQ0ZQyQs8c5xsj4qCQpNrJikXknbQXfGx4u4POqpmpdCHQltOsIhTfbuWKVD6MipnFI7Cg4mlIUiEIHUC0c0T%2FBXtyHBFQHEqTxtIFWRyl2UCg%2BwfaH0nfNE7z37%2BV3858AA9ftxH%2FenF9GuTDCZhLLDBjqkAVeroaKmlUfKroI032IwbJ7q%2BEh8aTK7SklqT2D%2BJzgGu9pCRx1rouBX83ZhJuDkmPLh2lsjxhHfK5Vm9PGdLsE%2F58gWYtbjGgBFzRc8qlhV0Gi%2FUd%2Bvfe1gwziJ5r%2Bl6e3KtEk8%2BhwHMeQulL34rwQGZfYuaFX2rt01lujD08umAWF9TKIOBj9AeGECKSX09%2BOyXloRU%2FUBo7lD5rJP2%2F3c9gyp&X-Amz-Signature=82652dc8d78a6e83cc4137dcdbca9e440d76557ee75adbf50b799a7cd3e303fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOKFX73%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCk4Iy%2FfevhiyPQ%2BvEZiGXQi0J5WboxQB88Q0mBfuEN0gIhAPqM599%2B2YGMy8IIs0NK3zitnyOQz3Y%2Bs9XAI0GkK4x2KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC8mTBcpNLkp9DQiEq3APxVpRm4E08zumVdKmntWogpJS%2FPlr4q2MHryWeHVcIeK2QXDKVzUh%2F0MJeDFEAsGBRZqlqmEw0fm1l%2BrJDfe3OEqYO3jr38KG8ThJIYuV5rQZQLlY6Ot%2FAylyfkqnLEbw7FnYxETmIwSlY6M2ViUV5ce9Qbq38ptIYNIev2E9dwCiSamSdFZ1atR7ppBqZUnSy7T0sSUPyp2teiFh4oxCP%2FvBj8AuVAAdztDdb0ZnRBAKUJSZhdyAcXa64FFMJ8dUQy7CqfFolVg4SXmNTYxP2dBBxaqppLLkn0X2XB0hsGIUqeTZRWJSCVxG2l6bF1sbjob8UOrzuBKHFrRCYVeuG515NQhYflpRkg4Jvd2fXG7UBQUYsEF1qkhFi3stnYWbECTUlt4ykYxfrQuUKF7vlXHpLuMoQMTqhKtxuHmls5QHR8r52s8d2HGpjY8zGzLVR2494MJWuno9vJOSuh37W%2FxDzbwHldKH78nGKulfGXQ0ZQyQs8c5xsj4qCQpNrJikXknbQXfGx4u4POqpmpdCHQltOsIhTfbuWKVD6MipnFI7Cg4mlIUiEIHUC0c0T%2FBXtyHBFQHEqTxtIFWRyl2UCg%2BwfaH0nfNE7z37%2BV3858AA9ftxH%2FenF9GuTDCZhLLDBjqkAVeroaKmlUfKroI032IwbJ7q%2BEh8aTK7SklqT2D%2BJzgGu9pCRx1rouBX83ZhJuDkmPLh2lsjxhHfK5Vm9PGdLsE%2F58gWYtbjGgBFzRc8qlhV0Gi%2FUd%2Bvfe1gwziJ5r%2Bl6e3KtEk8%2BhwHMeQulL34rwQGZfYuaFX2rt01lujD08umAWF9TKIOBj9AeGECKSX09%2BOyXloRU%2FUBo7lD5rJP2%2F3c9gyp&X-Amz-Signature=d685933bacdef1f458d9104d20977f27381129b62738f75a567e657f1175d6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOKFX73%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCk4Iy%2FfevhiyPQ%2BvEZiGXQi0J5WboxQB88Q0mBfuEN0gIhAPqM599%2B2YGMy8IIs0NK3zitnyOQz3Y%2Bs9XAI0GkK4x2KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC8mTBcpNLkp9DQiEq3APxVpRm4E08zumVdKmntWogpJS%2FPlr4q2MHryWeHVcIeK2QXDKVzUh%2F0MJeDFEAsGBRZqlqmEw0fm1l%2BrJDfe3OEqYO3jr38KG8ThJIYuV5rQZQLlY6Ot%2FAylyfkqnLEbw7FnYxETmIwSlY6M2ViUV5ce9Qbq38ptIYNIev2E9dwCiSamSdFZ1atR7ppBqZUnSy7T0sSUPyp2teiFh4oxCP%2FvBj8AuVAAdztDdb0ZnRBAKUJSZhdyAcXa64FFMJ8dUQy7CqfFolVg4SXmNTYxP2dBBxaqppLLkn0X2XB0hsGIUqeTZRWJSCVxG2l6bF1sbjob8UOrzuBKHFrRCYVeuG515NQhYflpRkg4Jvd2fXG7UBQUYsEF1qkhFi3stnYWbECTUlt4ykYxfrQuUKF7vlXHpLuMoQMTqhKtxuHmls5QHR8r52s8d2HGpjY8zGzLVR2494MJWuno9vJOSuh37W%2FxDzbwHldKH78nGKulfGXQ0ZQyQs8c5xsj4qCQpNrJikXknbQXfGx4u4POqpmpdCHQltOsIhTfbuWKVD6MipnFI7Cg4mlIUiEIHUC0c0T%2FBXtyHBFQHEqTxtIFWRyl2UCg%2BwfaH0nfNE7z37%2BV3858AA9ftxH%2FenF9GuTDCZhLLDBjqkAVeroaKmlUfKroI032IwbJ7q%2BEh8aTK7SklqT2D%2BJzgGu9pCRx1rouBX83ZhJuDkmPLh2lsjxhHfK5Vm9PGdLsE%2F58gWYtbjGgBFzRc8qlhV0Gi%2FUd%2Bvfe1gwziJ5r%2Bl6e3KtEk8%2BhwHMeQulL34rwQGZfYuaFX2rt01lujD08umAWF9TKIOBj9AeGECKSX09%2BOyXloRU%2FUBo7lD5rJP2%2F3c9gyp&X-Amz-Signature=af83cb75f82eb547b45ba73497d1cdc6ba07496b79782007d8a36ad6c100528d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOKFX73%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCk4Iy%2FfevhiyPQ%2BvEZiGXQi0J5WboxQB88Q0mBfuEN0gIhAPqM599%2B2YGMy8IIs0NK3zitnyOQz3Y%2Bs9XAI0GkK4x2KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC8mTBcpNLkp9DQiEq3APxVpRm4E08zumVdKmntWogpJS%2FPlr4q2MHryWeHVcIeK2QXDKVzUh%2F0MJeDFEAsGBRZqlqmEw0fm1l%2BrJDfe3OEqYO3jr38KG8ThJIYuV5rQZQLlY6Ot%2FAylyfkqnLEbw7FnYxETmIwSlY6M2ViUV5ce9Qbq38ptIYNIev2E9dwCiSamSdFZ1atR7ppBqZUnSy7T0sSUPyp2teiFh4oxCP%2FvBj8AuVAAdztDdb0ZnRBAKUJSZhdyAcXa64FFMJ8dUQy7CqfFolVg4SXmNTYxP2dBBxaqppLLkn0X2XB0hsGIUqeTZRWJSCVxG2l6bF1sbjob8UOrzuBKHFrRCYVeuG515NQhYflpRkg4Jvd2fXG7UBQUYsEF1qkhFi3stnYWbECTUlt4ykYxfrQuUKF7vlXHpLuMoQMTqhKtxuHmls5QHR8r52s8d2HGpjY8zGzLVR2494MJWuno9vJOSuh37W%2FxDzbwHldKH78nGKulfGXQ0ZQyQs8c5xsj4qCQpNrJikXknbQXfGx4u4POqpmpdCHQltOsIhTfbuWKVD6MipnFI7Cg4mlIUiEIHUC0c0T%2FBXtyHBFQHEqTxtIFWRyl2UCg%2BwfaH0nfNE7z37%2BV3858AA9ftxH%2FenF9GuTDCZhLLDBjqkAVeroaKmlUfKroI032IwbJ7q%2BEh8aTK7SklqT2D%2BJzgGu9pCRx1rouBX83ZhJuDkmPLh2lsjxhHfK5Vm9PGdLsE%2F58gWYtbjGgBFzRc8qlhV0Gi%2FUd%2Bvfe1gwziJ5r%2Bl6e3KtEk8%2BhwHMeQulL34rwQGZfYuaFX2rt01lujD08umAWF9TKIOBj9AeGECKSX09%2BOyXloRU%2FUBo7lD5rJP2%2F3c9gyp&X-Amz-Signature=0b52932a0f486ad2429f9d37f623d4ba3341c5a85c559548ac2188d06942edd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOKFX73%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCk4Iy%2FfevhiyPQ%2BvEZiGXQi0J5WboxQB88Q0mBfuEN0gIhAPqM599%2B2YGMy8IIs0NK3zitnyOQz3Y%2Bs9XAI0GkK4x2KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC8mTBcpNLkp9DQiEq3APxVpRm4E08zumVdKmntWogpJS%2FPlr4q2MHryWeHVcIeK2QXDKVzUh%2F0MJeDFEAsGBRZqlqmEw0fm1l%2BrJDfe3OEqYO3jr38KG8ThJIYuV5rQZQLlY6Ot%2FAylyfkqnLEbw7FnYxETmIwSlY6M2ViUV5ce9Qbq38ptIYNIev2E9dwCiSamSdFZ1atR7ppBqZUnSy7T0sSUPyp2teiFh4oxCP%2FvBj8AuVAAdztDdb0ZnRBAKUJSZhdyAcXa64FFMJ8dUQy7CqfFolVg4SXmNTYxP2dBBxaqppLLkn0X2XB0hsGIUqeTZRWJSCVxG2l6bF1sbjob8UOrzuBKHFrRCYVeuG515NQhYflpRkg4Jvd2fXG7UBQUYsEF1qkhFi3stnYWbECTUlt4ykYxfrQuUKF7vlXHpLuMoQMTqhKtxuHmls5QHR8r52s8d2HGpjY8zGzLVR2494MJWuno9vJOSuh37W%2FxDzbwHldKH78nGKulfGXQ0ZQyQs8c5xsj4qCQpNrJikXknbQXfGx4u4POqpmpdCHQltOsIhTfbuWKVD6MipnFI7Cg4mlIUiEIHUC0c0T%2FBXtyHBFQHEqTxtIFWRyl2UCg%2BwfaH0nfNE7z37%2BV3858AA9ftxH%2FenF9GuTDCZhLLDBjqkAVeroaKmlUfKroI032IwbJ7q%2BEh8aTK7SklqT2D%2BJzgGu9pCRx1rouBX83ZhJuDkmPLh2lsjxhHfK5Vm9PGdLsE%2F58gWYtbjGgBFzRc8qlhV0Gi%2FUd%2Bvfe1gwziJ5r%2Bl6e3KtEk8%2BhwHMeQulL34rwQGZfYuaFX2rt01lujD08umAWF9TKIOBj9AeGECKSX09%2BOyXloRU%2FUBo7lD5rJP2%2F3c9gyp&X-Amz-Signature=db076dab6cb3edb8d0dc86ef014f674485ae45105ac6b75a8cb9f6a6fab9ea44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
