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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AAHCZ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZ%2FxbkocbQ4zs0AdNfAPMxTGpfSpyvZOEBB4bNsQ5TgIgVoSsHuIKXEopx03VZ9%2FA%2BIKuaYn7mx9Yk9atvIAt7y8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIaA7INkQC8LYRd4HSrcA5htR9PdBWTrxL4yp44LJxm%2FC0%2BcF83PHLSsyN4Rm%2BbmfJo3lRU2oz0y1n%2FKmpj3nuVBLlF5lTEuzaLhLdNeUD%2FwCmUuxvmIfxyf6rvVGpkm%2BpE04iHDxkL21xT02y6DGAtc2BmN%2BK237PybZqcoudr6BjFPmwEVlFpgV2Lx%2FPlIe06Ks3gPeS9yyiPJnkyTtThHuSy6p1kWphrx5Yt2%2BoKNNaYF4iAahCh2qA5gFppUomPRU9V8MX3UJhXapGT00dbzM82eTphWv0sDQObGyAj%2FI0qda1fua6bcUVh2%2F3wR4%2BtFMK%2FUXOoMqgGmoSbFOZaLSEHNuwCzsE1j9k6aIU9AlIseLUpt9PaW%2FKDBTF8zOWLXMe3%2BLan%2FS2kPyKK5ncSgmip117qXQ6IPwNKhTTrbR9dinuRZLEeb0c0S3jHimPoBr2ALAPjoqxFiebIse8T68igGVy8gH4VZRp2OL8BL1fdZ7Lm1XnsNYS%2B3%2BOzGVOZua7cR5kwF7JjYTqqCw9m9AQubYk%2Bprwrigl4wNDcWzgTRJrLkmFXUYZjw4R1pZ24QDiyvBZGr9qPwy7RtQ8d9FTqxw9ARmVh8ClbLI96UwZttHAY9%2F8uEyw0%2FZciwGKlDJRsIAWOP%2BtQ7MP6KusAGOqUB0nebVoUxYRJquSXvsKlPvVNiCmE6xyEG8E%2FN%2BI4h9kxbafqaaDZb2vFiKJvFqRFpBmvTxC7CNiky1%2BCiGTQYp2pT5iLmBPiEmNiP6fI0TugX1KlRTkFJjJuBXR3gOw1xalzcIdJm9eCKjo3R%2FoFmLDtqxFxp%2BGs0QnfjUDFW7QUftfpAQ3JFzipBN94NSWGZcMSH3p7PKrBD%2BPtXsGUjVEmN3tSz&X-Amz-Signature=e06ebd0f93ccedda82c9517403d57e49203af9f3263bba9083a49464f2fab0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AAHCZ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZ%2FxbkocbQ4zs0AdNfAPMxTGpfSpyvZOEBB4bNsQ5TgIgVoSsHuIKXEopx03VZ9%2FA%2BIKuaYn7mx9Yk9atvIAt7y8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIaA7INkQC8LYRd4HSrcA5htR9PdBWTrxL4yp44LJxm%2FC0%2BcF83PHLSsyN4Rm%2BbmfJo3lRU2oz0y1n%2FKmpj3nuVBLlF5lTEuzaLhLdNeUD%2FwCmUuxvmIfxyf6rvVGpkm%2BpE04iHDxkL21xT02y6DGAtc2BmN%2BK237PybZqcoudr6BjFPmwEVlFpgV2Lx%2FPlIe06Ks3gPeS9yyiPJnkyTtThHuSy6p1kWphrx5Yt2%2BoKNNaYF4iAahCh2qA5gFppUomPRU9V8MX3UJhXapGT00dbzM82eTphWv0sDQObGyAj%2FI0qda1fua6bcUVh2%2F3wR4%2BtFMK%2FUXOoMqgGmoSbFOZaLSEHNuwCzsE1j9k6aIU9AlIseLUpt9PaW%2FKDBTF8zOWLXMe3%2BLan%2FS2kPyKK5ncSgmip117qXQ6IPwNKhTTrbR9dinuRZLEeb0c0S3jHimPoBr2ALAPjoqxFiebIse8T68igGVy8gH4VZRp2OL8BL1fdZ7Lm1XnsNYS%2B3%2BOzGVOZua7cR5kwF7JjYTqqCw9m9AQubYk%2Bprwrigl4wNDcWzgTRJrLkmFXUYZjw4R1pZ24QDiyvBZGr9qPwy7RtQ8d9FTqxw9ARmVh8ClbLI96UwZttHAY9%2F8uEyw0%2FZciwGKlDJRsIAWOP%2BtQ7MP6KusAGOqUB0nebVoUxYRJquSXvsKlPvVNiCmE6xyEG8E%2FN%2BI4h9kxbafqaaDZb2vFiKJvFqRFpBmvTxC7CNiky1%2BCiGTQYp2pT5iLmBPiEmNiP6fI0TugX1KlRTkFJjJuBXR3gOw1xalzcIdJm9eCKjo3R%2FoFmLDtqxFxp%2BGs0QnfjUDFW7QUftfpAQ3JFzipBN94NSWGZcMSH3p7PKrBD%2BPtXsGUjVEmN3tSz&X-Amz-Signature=15334d9754e327bfae6e6edeb3ed7f006efe7b9de338f4eb9547409b9f319999&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AAHCZ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZ%2FxbkocbQ4zs0AdNfAPMxTGpfSpyvZOEBB4bNsQ5TgIgVoSsHuIKXEopx03VZ9%2FA%2BIKuaYn7mx9Yk9atvIAt7y8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIaA7INkQC8LYRd4HSrcA5htR9PdBWTrxL4yp44LJxm%2FC0%2BcF83PHLSsyN4Rm%2BbmfJo3lRU2oz0y1n%2FKmpj3nuVBLlF5lTEuzaLhLdNeUD%2FwCmUuxvmIfxyf6rvVGpkm%2BpE04iHDxkL21xT02y6DGAtc2BmN%2BK237PybZqcoudr6BjFPmwEVlFpgV2Lx%2FPlIe06Ks3gPeS9yyiPJnkyTtThHuSy6p1kWphrx5Yt2%2BoKNNaYF4iAahCh2qA5gFppUomPRU9V8MX3UJhXapGT00dbzM82eTphWv0sDQObGyAj%2FI0qda1fua6bcUVh2%2F3wR4%2BtFMK%2FUXOoMqgGmoSbFOZaLSEHNuwCzsE1j9k6aIU9AlIseLUpt9PaW%2FKDBTF8zOWLXMe3%2BLan%2FS2kPyKK5ncSgmip117qXQ6IPwNKhTTrbR9dinuRZLEeb0c0S3jHimPoBr2ALAPjoqxFiebIse8T68igGVy8gH4VZRp2OL8BL1fdZ7Lm1XnsNYS%2B3%2BOzGVOZua7cR5kwF7JjYTqqCw9m9AQubYk%2Bprwrigl4wNDcWzgTRJrLkmFXUYZjw4R1pZ24QDiyvBZGr9qPwy7RtQ8d9FTqxw9ARmVh8ClbLI96UwZttHAY9%2F8uEyw0%2FZciwGKlDJRsIAWOP%2BtQ7MP6KusAGOqUB0nebVoUxYRJquSXvsKlPvVNiCmE6xyEG8E%2FN%2BI4h9kxbafqaaDZb2vFiKJvFqRFpBmvTxC7CNiky1%2BCiGTQYp2pT5iLmBPiEmNiP6fI0TugX1KlRTkFJjJuBXR3gOw1xalzcIdJm9eCKjo3R%2FoFmLDtqxFxp%2BGs0QnfjUDFW7QUftfpAQ3JFzipBN94NSWGZcMSH3p7PKrBD%2BPtXsGUjVEmN3tSz&X-Amz-Signature=09952760a200f8eb4f2a976e143bdb4c337425b8e823e641dd2cd8d913e5e951&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AAHCZ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZ%2FxbkocbQ4zs0AdNfAPMxTGpfSpyvZOEBB4bNsQ5TgIgVoSsHuIKXEopx03VZ9%2FA%2BIKuaYn7mx9Yk9atvIAt7y8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIaA7INkQC8LYRd4HSrcA5htR9PdBWTrxL4yp44LJxm%2FC0%2BcF83PHLSsyN4Rm%2BbmfJo3lRU2oz0y1n%2FKmpj3nuVBLlF5lTEuzaLhLdNeUD%2FwCmUuxvmIfxyf6rvVGpkm%2BpE04iHDxkL21xT02y6DGAtc2BmN%2BK237PybZqcoudr6BjFPmwEVlFpgV2Lx%2FPlIe06Ks3gPeS9yyiPJnkyTtThHuSy6p1kWphrx5Yt2%2BoKNNaYF4iAahCh2qA5gFppUomPRU9V8MX3UJhXapGT00dbzM82eTphWv0sDQObGyAj%2FI0qda1fua6bcUVh2%2F3wR4%2BtFMK%2FUXOoMqgGmoSbFOZaLSEHNuwCzsE1j9k6aIU9AlIseLUpt9PaW%2FKDBTF8zOWLXMe3%2BLan%2FS2kPyKK5ncSgmip117qXQ6IPwNKhTTrbR9dinuRZLEeb0c0S3jHimPoBr2ALAPjoqxFiebIse8T68igGVy8gH4VZRp2OL8BL1fdZ7Lm1XnsNYS%2B3%2BOzGVOZua7cR5kwF7JjYTqqCw9m9AQubYk%2Bprwrigl4wNDcWzgTRJrLkmFXUYZjw4R1pZ24QDiyvBZGr9qPwy7RtQ8d9FTqxw9ARmVh8ClbLI96UwZttHAY9%2F8uEyw0%2FZciwGKlDJRsIAWOP%2BtQ7MP6KusAGOqUB0nebVoUxYRJquSXvsKlPvVNiCmE6xyEG8E%2FN%2BI4h9kxbafqaaDZb2vFiKJvFqRFpBmvTxC7CNiky1%2BCiGTQYp2pT5iLmBPiEmNiP6fI0TugX1KlRTkFJjJuBXR3gOw1xalzcIdJm9eCKjo3R%2FoFmLDtqxFxp%2BGs0QnfjUDFW7QUftfpAQ3JFzipBN94NSWGZcMSH3p7PKrBD%2BPtXsGUjVEmN3tSz&X-Amz-Signature=fa030dce5f774e139c51bf03617dbba18e502dbcf5f6f19c2a1abda45c0af7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AAHCZ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZ%2FxbkocbQ4zs0AdNfAPMxTGpfSpyvZOEBB4bNsQ5TgIgVoSsHuIKXEopx03VZ9%2FA%2BIKuaYn7mx9Yk9atvIAt7y8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIaA7INkQC8LYRd4HSrcA5htR9PdBWTrxL4yp44LJxm%2FC0%2BcF83PHLSsyN4Rm%2BbmfJo3lRU2oz0y1n%2FKmpj3nuVBLlF5lTEuzaLhLdNeUD%2FwCmUuxvmIfxyf6rvVGpkm%2BpE04iHDxkL21xT02y6DGAtc2BmN%2BK237PybZqcoudr6BjFPmwEVlFpgV2Lx%2FPlIe06Ks3gPeS9yyiPJnkyTtThHuSy6p1kWphrx5Yt2%2BoKNNaYF4iAahCh2qA5gFppUomPRU9V8MX3UJhXapGT00dbzM82eTphWv0sDQObGyAj%2FI0qda1fua6bcUVh2%2F3wR4%2BtFMK%2FUXOoMqgGmoSbFOZaLSEHNuwCzsE1j9k6aIU9AlIseLUpt9PaW%2FKDBTF8zOWLXMe3%2BLan%2FS2kPyKK5ncSgmip117qXQ6IPwNKhTTrbR9dinuRZLEeb0c0S3jHimPoBr2ALAPjoqxFiebIse8T68igGVy8gH4VZRp2OL8BL1fdZ7Lm1XnsNYS%2B3%2BOzGVOZua7cR5kwF7JjYTqqCw9m9AQubYk%2Bprwrigl4wNDcWzgTRJrLkmFXUYZjw4R1pZ24QDiyvBZGr9qPwy7RtQ8d9FTqxw9ARmVh8ClbLI96UwZttHAY9%2F8uEyw0%2FZciwGKlDJRsIAWOP%2BtQ7MP6KusAGOqUB0nebVoUxYRJquSXvsKlPvVNiCmE6xyEG8E%2FN%2BI4h9kxbafqaaDZb2vFiKJvFqRFpBmvTxC7CNiky1%2BCiGTQYp2pT5iLmBPiEmNiP6fI0TugX1KlRTkFJjJuBXR3gOw1xalzcIdJm9eCKjo3R%2FoFmLDtqxFxp%2BGs0QnfjUDFW7QUftfpAQ3JFzipBN94NSWGZcMSH3p7PKrBD%2BPtXsGUjVEmN3tSz&X-Amz-Signature=53bcee9e9384573f60ca06e26d83d2ccc9677f6ec396db8dece3857ca0ab8888&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
