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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYMCM6G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDttyl6v3XN0fZpN1joCWPS4%2Bio3eioqpdeh9gvvk57HAIgJ7bjDsMjztvU0NMORnhw03RvuayAX2FgAPbo48AJeyEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBZcVZX3%2F4KDpCo7lCrcAx6pWPq9yzvbrtGfZL2rbYC6s3585%2BjKsqWnHqDgXUioFLzpRp4KtcvV5AH5zvIkzoOGd6D9dRymb14oqtGNfPQbjd%2FWdkwr%2Bdc%2BOCfAOqJggxyK0Ge5G6ts9G%2BMgKo44TgH6UrK6G9Oh7%2BjcFUvq7bJTdebtTiVU0KNOhuxUPzYTLqzB%2FN4ZTnB2OSEgt3mUEHTkEZO7IFpRW2GjyACa4mQisJSqEAwSwYHw4O%2BEJ3U%2BElMPFU1UBfaF0%2Brn0NxAW%2BeIS6vcRh9NmkWenkqsJJNyPXqJ3XD5%2F%2ByQhjEuHH53RCTeMkKfYIXAp5albsG1DruNHzVWa9I1YuLMPEVYQ5xGawFiH%2Ferd5Aj0wtxgYlTCdSoFsEd4QsUWmnPuYfSJET0Txka4r3lFiXxA6gRWArtyMowNbcsQPikcDBT7RD18SNh6KfHCfGnQdU76%2FH8LGUS%2BmMb5rFAmW%2BLcOS8NqolZSK3SjUm0DTBtdkOcWqAepG5OYDXR99HuyZqSF3vx%2FMvBRFLHOhsNfXBV86kPmEwoz%2FA4ZoMQEz4%2BXe5DRR3Rl1z35K8IvtktMHxpUJpC2P%2B6eOdcjiyQV5FJwNGMLm2QaDK6i3HD%2FfPk0SWRZhLYS%2BW3NVjD1LttAOMMmUtMIGOqUBxkffIxh0CKyhuLGa7DH6dkAddspmUoKHEFpSdmSxjDqGcJ4FCRivZaKWYWbfh9p3UfRye8RH10M%2FBIkWWfMI03bm3Ac47pJQuLMOEqWM6%2BKw4Dj13x7%2FiOnSCHOoMyVNHtpDTcI1p5D9BBgrPfB7mEIqaRVAhzWoobMCtRYwcChhoQWpdVaI%2Bq9OWvsxS6SpYRTCuOVcTLZYXtACNJukN2ctX7ts&X-Amz-Signature=6581692a4c5dfb2b744f57b57d9eba1def7ca069aa2e5e923c0034da95cd8c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYMCM6G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDttyl6v3XN0fZpN1joCWPS4%2Bio3eioqpdeh9gvvk57HAIgJ7bjDsMjztvU0NMORnhw03RvuayAX2FgAPbo48AJeyEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBZcVZX3%2F4KDpCo7lCrcAx6pWPq9yzvbrtGfZL2rbYC6s3585%2BjKsqWnHqDgXUioFLzpRp4KtcvV5AH5zvIkzoOGd6D9dRymb14oqtGNfPQbjd%2FWdkwr%2Bdc%2BOCfAOqJggxyK0Ge5G6ts9G%2BMgKo44TgH6UrK6G9Oh7%2BjcFUvq7bJTdebtTiVU0KNOhuxUPzYTLqzB%2FN4ZTnB2OSEgt3mUEHTkEZO7IFpRW2GjyACa4mQisJSqEAwSwYHw4O%2BEJ3U%2BElMPFU1UBfaF0%2Brn0NxAW%2BeIS6vcRh9NmkWenkqsJJNyPXqJ3XD5%2F%2ByQhjEuHH53RCTeMkKfYIXAp5albsG1DruNHzVWa9I1YuLMPEVYQ5xGawFiH%2Ferd5Aj0wtxgYlTCdSoFsEd4QsUWmnPuYfSJET0Txka4r3lFiXxA6gRWArtyMowNbcsQPikcDBT7RD18SNh6KfHCfGnQdU76%2FH8LGUS%2BmMb5rFAmW%2BLcOS8NqolZSK3SjUm0DTBtdkOcWqAepG5OYDXR99HuyZqSF3vx%2FMvBRFLHOhsNfXBV86kPmEwoz%2FA4ZoMQEz4%2BXe5DRR3Rl1z35K8IvtktMHxpUJpC2P%2B6eOdcjiyQV5FJwNGMLm2QaDK6i3HD%2FfPk0SWRZhLYS%2BW3NVjD1LttAOMMmUtMIGOqUBxkffIxh0CKyhuLGa7DH6dkAddspmUoKHEFpSdmSxjDqGcJ4FCRivZaKWYWbfh9p3UfRye8RH10M%2FBIkWWfMI03bm3Ac47pJQuLMOEqWM6%2BKw4Dj13x7%2FiOnSCHOoMyVNHtpDTcI1p5D9BBgrPfB7mEIqaRVAhzWoobMCtRYwcChhoQWpdVaI%2Bq9OWvsxS6SpYRTCuOVcTLZYXtACNJukN2ctX7ts&X-Amz-Signature=192fc8b6e1d4201bbd3f76456ef2a00c3abdbfbe0883981d96f5524abf6ecf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYMCM6G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDttyl6v3XN0fZpN1joCWPS4%2Bio3eioqpdeh9gvvk57HAIgJ7bjDsMjztvU0NMORnhw03RvuayAX2FgAPbo48AJeyEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBZcVZX3%2F4KDpCo7lCrcAx6pWPq9yzvbrtGfZL2rbYC6s3585%2BjKsqWnHqDgXUioFLzpRp4KtcvV5AH5zvIkzoOGd6D9dRymb14oqtGNfPQbjd%2FWdkwr%2Bdc%2BOCfAOqJggxyK0Ge5G6ts9G%2BMgKo44TgH6UrK6G9Oh7%2BjcFUvq7bJTdebtTiVU0KNOhuxUPzYTLqzB%2FN4ZTnB2OSEgt3mUEHTkEZO7IFpRW2GjyACa4mQisJSqEAwSwYHw4O%2BEJ3U%2BElMPFU1UBfaF0%2Brn0NxAW%2BeIS6vcRh9NmkWenkqsJJNyPXqJ3XD5%2F%2ByQhjEuHH53RCTeMkKfYIXAp5albsG1DruNHzVWa9I1YuLMPEVYQ5xGawFiH%2Ferd5Aj0wtxgYlTCdSoFsEd4QsUWmnPuYfSJET0Txka4r3lFiXxA6gRWArtyMowNbcsQPikcDBT7RD18SNh6KfHCfGnQdU76%2FH8LGUS%2BmMb5rFAmW%2BLcOS8NqolZSK3SjUm0DTBtdkOcWqAepG5OYDXR99HuyZqSF3vx%2FMvBRFLHOhsNfXBV86kPmEwoz%2FA4ZoMQEz4%2BXe5DRR3Rl1z35K8IvtktMHxpUJpC2P%2B6eOdcjiyQV5FJwNGMLm2QaDK6i3HD%2FfPk0SWRZhLYS%2BW3NVjD1LttAOMMmUtMIGOqUBxkffIxh0CKyhuLGa7DH6dkAddspmUoKHEFpSdmSxjDqGcJ4FCRivZaKWYWbfh9p3UfRye8RH10M%2FBIkWWfMI03bm3Ac47pJQuLMOEqWM6%2BKw4Dj13x7%2FiOnSCHOoMyVNHtpDTcI1p5D9BBgrPfB7mEIqaRVAhzWoobMCtRYwcChhoQWpdVaI%2Bq9OWvsxS6SpYRTCuOVcTLZYXtACNJukN2ctX7ts&X-Amz-Signature=4f341befe377cdc86614c19df3a80d9390792f4570038a37b1b50baee9276df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYMCM6G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDttyl6v3XN0fZpN1joCWPS4%2Bio3eioqpdeh9gvvk57HAIgJ7bjDsMjztvU0NMORnhw03RvuayAX2FgAPbo48AJeyEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBZcVZX3%2F4KDpCo7lCrcAx6pWPq9yzvbrtGfZL2rbYC6s3585%2BjKsqWnHqDgXUioFLzpRp4KtcvV5AH5zvIkzoOGd6D9dRymb14oqtGNfPQbjd%2FWdkwr%2Bdc%2BOCfAOqJggxyK0Ge5G6ts9G%2BMgKo44TgH6UrK6G9Oh7%2BjcFUvq7bJTdebtTiVU0KNOhuxUPzYTLqzB%2FN4ZTnB2OSEgt3mUEHTkEZO7IFpRW2GjyACa4mQisJSqEAwSwYHw4O%2BEJ3U%2BElMPFU1UBfaF0%2Brn0NxAW%2BeIS6vcRh9NmkWenkqsJJNyPXqJ3XD5%2F%2ByQhjEuHH53RCTeMkKfYIXAp5albsG1DruNHzVWa9I1YuLMPEVYQ5xGawFiH%2Ferd5Aj0wtxgYlTCdSoFsEd4QsUWmnPuYfSJET0Txka4r3lFiXxA6gRWArtyMowNbcsQPikcDBT7RD18SNh6KfHCfGnQdU76%2FH8LGUS%2BmMb5rFAmW%2BLcOS8NqolZSK3SjUm0DTBtdkOcWqAepG5OYDXR99HuyZqSF3vx%2FMvBRFLHOhsNfXBV86kPmEwoz%2FA4ZoMQEz4%2BXe5DRR3Rl1z35K8IvtktMHxpUJpC2P%2B6eOdcjiyQV5FJwNGMLm2QaDK6i3HD%2FfPk0SWRZhLYS%2BW3NVjD1LttAOMMmUtMIGOqUBxkffIxh0CKyhuLGa7DH6dkAddspmUoKHEFpSdmSxjDqGcJ4FCRivZaKWYWbfh9p3UfRye8RH10M%2FBIkWWfMI03bm3Ac47pJQuLMOEqWM6%2BKw4Dj13x7%2FiOnSCHOoMyVNHtpDTcI1p5D9BBgrPfB7mEIqaRVAhzWoobMCtRYwcChhoQWpdVaI%2Bq9OWvsxS6SpYRTCuOVcTLZYXtACNJukN2ctX7ts&X-Amz-Signature=7102d60e352d184590aa1b91360fdc29c71e5289b11f8baf0c6d42d2f26d5fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYMCM6G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDttyl6v3XN0fZpN1joCWPS4%2Bio3eioqpdeh9gvvk57HAIgJ7bjDsMjztvU0NMORnhw03RvuayAX2FgAPbo48AJeyEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBZcVZX3%2F4KDpCo7lCrcAx6pWPq9yzvbrtGfZL2rbYC6s3585%2BjKsqWnHqDgXUioFLzpRp4KtcvV5AH5zvIkzoOGd6D9dRymb14oqtGNfPQbjd%2FWdkwr%2Bdc%2BOCfAOqJggxyK0Ge5G6ts9G%2BMgKo44TgH6UrK6G9Oh7%2BjcFUvq7bJTdebtTiVU0KNOhuxUPzYTLqzB%2FN4ZTnB2OSEgt3mUEHTkEZO7IFpRW2GjyACa4mQisJSqEAwSwYHw4O%2BEJ3U%2BElMPFU1UBfaF0%2Brn0NxAW%2BeIS6vcRh9NmkWenkqsJJNyPXqJ3XD5%2F%2ByQhjEuHH53RCTeMkKfYIXAp5albsG1DruNHzVWa9I1YuLMPEVYQ5xGawFiH%2Ferd5Aj0wtxgYlTCdSoFsEd4QsUWmnPuYfSJET0Txka4r3lFiXxA6gRWArtyMowNbcsQPikcDBT7RD18SNh6KfHCfGnQdU76%2FH8LGUS%2BmMb5rFAmW%2BLcOS8NqolZSK3SjUm0DTBtdkOcWqAepG5OYDXR99HuyZqSF3vx%2FMvBRFLHOhsNfXBV86kPmEwoz%2FA4ZoMQEz4%2BXe5DRR3Rl1z35K8IvtktMHxpUJpC2P%2B6eOdcjiyQV5FJwNGMLm2QaDK6i3HD%2FfPk0SWRZhLYS%2BW3NVjD1LttAOMMmUtMIGOqUBxkffIxh0CKyhuLGa7DH6dkAddspmUoKHEFpSdmSxjDqGcJ4FCRivZaKWYWbfh9p3UfRye8RH10M%2FBIkWWfMI03bm3Ac47pJQuLMOEqWM6%2BKw4Dj13x7%2FiOnSCHOoMyVNHtpDTcI1p5D9BBgrPfB7mEIqaRVAhzWoobMCtRYwcChhoQWpdVaI%2Bq9OWvsxS6SpYRTCuOVcTLZYXtACNJukN2ctX7ts&X-Amz-Signature=66d460ce6bf45a38f2092cceadeccd5d1885d509aa670344193622e945719ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
