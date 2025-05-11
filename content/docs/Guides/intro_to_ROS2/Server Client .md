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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ADYEDU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHvu%2F2qJKFUiVfOqxuL1nTb5SkCSCJVAS50kgDtL8pgMAiA82yhHTbht5PTYTsMyT%2BkDl4a1PIgkHdP9Xb5TysxzcCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFtf%2BNeIIL%2FYU0YA1KtwDBdr6RPwSpYDh3jLYQ6oxTJTZquath2TiaD0zf0d%2FOtkYgTNSKfrNU28ChxV1IIxCqFldUVHYjeTpEfpLJMJSJY6qd6n6dYR%2FfQwJa0hcx5VGGIBigk7uyH7J%2BsF7aJPKQmBnG3PtcQuZyVz6wn3ttSXq1BkkVNevS52J1xGcqyHZsOegDo52zFgCyZlXCxMpPGXLhzFVnpaH0jaRNvmO9%2FNy63%2BfpbO4vMf2g2Du5Y8ovxzYmsR26ReeTQn9j4fSdSf%2FjLd%2BzqOo4%2FuOazgcssHfltEgUiMioiOMEwo79CG14Mx1TcGqs4Z0EZMEBVBw%2FQALqpHWbwzEZx0gV1vOH7jPgorKiGolG80WclawF6UcUe6%2BKxlmBDZ9Ej9Eqac2Rpvx80h1pD5NNudnSE8WlLZur%2B%2FAnqBl0929K7RW1YFaKRBpbm9qvS5JSGTXH1JWwlpFImLch%2FrX8bBKltnX4K7XN2g43gwuClaDkO1bJ1aEHAcNkcD2DsLHvUZC%2FcC5KUP%2B%2FVa3LNieVRyox4CXpePBF4U7avoaKcPu2zwQ0gIFOsavn%2FDucJoKJ4aF9z8LUehMlwuz30YmnXRh%2B1rOjtMS21QEVX8M5r5GKH31iiS9hfQAi8lEdUA8w9kw3t6AwQY6pgHK1niCjrMBGqUzzddr%2BKDkZz0zshWKL3lo7n%2BEa%2BYGlJ34UsZ9Rks1rGBUpzfmvUTw74udsFLbUFwAfb3LM%2FJ%2FsK1ogwRtAdAGNB1Y84Lt8YL0rDpUKpEC97w3M%2B5uz12Lc1YMMklKE3TLHQCRLTjZyY0lu%2Faahn28CYLhidKrZeTZgOO%2B9Ax78qA23dexKa6Xq%2BDO4jaB49PRSKX9KNGarDASu1o7&X-Amz-Signature=18087765c06ae9dda05bfb6be9ffcb63fd0d034811d4fadf1aeb4ca6bfc7e7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ADYEDU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHvu%2F2qJKFUiVfOqxuL1nTb5SkCSCJVAS50kgDtL8pgMAiA82yhHTbht5PTYTsMyT%2BkDl4a1PIgkHdP9Xb5TysxzcCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFtf%2BNeIIL%2FYU0YA1KtwDBdr6RPwSpYDh3jLYQ6oxTJTZquath2TiaD0zf0d%2FOtkYgTNSKfrNU28ChxV1IIxCqFldUVHYjeTpEfpLJMJSJY6qd6n6dYR%2FfQwJa0hcx5VGGIBigk7uyH7J%2BsF7aJPKQmBnG3PtcQuZyVz6wn3ttSXq1BkkVNevS52J1xGcqyHZsOegDo52zFgCyZlXCxMpPGXLhzFVnpaH0jaRNvmO9%2FNy63%2BfpbO4vMf2g2Du5Y8ovxzYmsR26ReeTQn9j4fSdSf%2FjLd%2BzqOo4%2FuOazgcssHfltEgUiMioiOMEwo79CG14Mx1TcGqs4Z0EZMEBVBw%2FQALqpHWbwzEZx0gV1vOH7jPgorKiGolG80WclawF6UcUe6%2BKxlmBDZ9Ej9Eqac2Rpvx80h1pD5NNudnSE8WlLZur%2B%2FAnqBl0929K7RW1YFaKRBpbm9qvS5JSGTXH1JWwlpFImLch%2FrX8bBKltnX4K7XN2g43gwuClaDkO1bJ1aEHAcNkcD2DsLHvUZC%2FcC5KUP%2B%2FVa3LNieVRyox4CXpePBF4U7avoaKcPu2zwQ0gIFOsavn%2FDucJoKJ4aF9z8LUehMlwuz30YmnXRh%2B1rOjtMS21QEVX8M5r5GKH31iiS9hfQAi8lEdUA8w9kw3t6AwQY6pgHK1niCjrMBGqUzzddr%2BKDkZz0zshWKL3lo7n%2BEa%2BYGlJ34UsZ9Rks1rGBUpzfmvUTw74udsFLbUFwAfb3LM%2FJ%2FsK1ogwRtAdAGNB1Y84Lt8YL0rDpUKpEC97w3M%2B5uz12Lc1YMMklKE3TLHQCRLTjZyY0lu%2Faahn28CYLhidKrZeTZgOO%2B9Ax78qA23dexKa6Xq%2BDO4jaB49PRSKX9KNGarDASu1o7&X-Amz-Signature=24bbe67e7769c49c477e664771a4dde30f4349e0b5f93cb9e48940da794733ac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ADYEDU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHvu%2F2qJKFUiVfOqxuL1nTb5SkCSCJVAS50kgDtL8pgMAiA82yhHTbht5PTYTsMyT%2BkDl4a1PIgkHdP9Xb5TysxzcCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFtf%2BNeIIL%2FYU0YA1KtwDBdr6RPwSpYDh3jLYQ6oxTJTZquath2TiaD0zf0d%2FOtkYgTNSKfrNU28ChxV1IIxCqFldUVHYjeTpEfpLJMJSJY6qd6n6dYR%2FfQwJa0hcx5VGGIBigk7uyH7J%2BsF7aJPKQmBnG3PtcQuZyVz6wn3ttSXq1BkkVNevS52J1xGcqyHZsOegDo52zFgCyZlXCxMpPGXLhzFVnpaH0jaRNvmO9%2FNy63%2BfpbO4vMf2g2Du5Y8ovxzYmsR26ReeTQn9j4fSdSf%2FjLd%2BzqOo4%2FuOazgcssHfltEgUiMioiOMEwo79CG14Mx1TcGqs4Z0EZMEBVBw%2FQALqpHWbwzEZx0gV1vOH7jPgorKiGolG80WclawF6UcUe6%2BKxlmBDZ9Ej9Eqac2Rpvx80h1pD5NNudnSE8WlLZur%2B%2FAnqBl0929K7RW1YFaKRBpbm9qvS5JSGTXH1JWwlpFImLch%2FrX8bBKltnX4K7XN2g43gwuClaDkO1bJ1aEHAcNkcD2DsLHvUZC%2FcC5KUP%2B%2FVa3LNieVRyox4CXpePBF4U7avoaKcPu2zwQ0gIFOsavn%2FDucJoKJ4aF9z8LUehMlwuz30YmnXRh%2B1rOjtMS21QEVX8M5r5GKH31iiS9hfQAi8lEdUA8w9kw3t6AwQY6pgHK1niCjrMBGqUzzddr%2BKDkZz0zshWKL3lo7n%2BEa%2BYGlJ34UsZ9Rks1rGBUpzfmvUTw74udsFLbUFwAfb3LM%2FJ%2FsK1ogwRtAdAGNB1Y84Lt8YL0rDpUKpEC97w3M%2B5uz12Lc1YMMklKE3TLHQCRLTjZyY0lu%2Faahn28CYLhidKrZeTZgOO%2B9Ax78qA23dexKa6Xq%2BDO4jaB49PRSKX9KNGarDASu1o7&X-Amz-Signature=f1c0c0288bdfec13b846a42b2b3182960b3c7ee47537fdf39648247e08faa69f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ADYEDU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHvu%2F2qJKFUiVfOqxuL1nTb5SkCSCJVAS50kgDtL8pgMAiA82yhHTbht5PTYTsMyT%2BkDl4a1PIgkHdP9Xb5TysxzcCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFtf%2BNeIIL%2FYU0YA1KtwDBdr6RPwSpYDh3jLYQ6oxTJTZquath2TiaD0zf0d%2FOtkYgTNSKfrNU28ChxV1IIxCqFldUVHYjeTpEfpLJMJSJY6qd6n6dYR%2FfQwJa0hcx5VGGIBigk7uyH7J%2BsF7aJPKQmBnG3PtcQuZyVz6wn3ttSXq1BkkVNevS52J1xGcqyHZsOegDo52zFgCyZlXCxMpPGXLhzFVnpaH0jaRNvmO9%2FNy63%2BfpbO4vMf2g2Du5Y8ovxzYmsR26ReeTQn9j4fSdSf%2FjLd%2BzqOo4%2FuOazgcssHfltEgUiMioiOMEwo79CG14Mx1TcGqs4Z0EZMEBVBw%2FQALqpHWbwzEZx0gV1vOH7jPgorKiGolG80WclawF6UcUe6%2BKxlmBDZ9Ej9Eqac2Rpvx80h1pD5NNudnSE8WlLZur%2B%2FAnqBl0929K7RW1YFaKRBpbm9qvS5JSGTXH1JWwlpFImLch%2FrX8bBKltnX4K7XN2g43gwuClaDkO1bJ1aEHAcNkcD2DsLHvUZC%2FcC5KUP%2B%2FVa3LNieVRyox4CXpePBF4U7avoaKcPu2zwQ0gIFOsavn%2FDucJoKJ4aF9z8LUehMlwuz30YmnXRh%2B1rOjtMS21QEVX8M5r5GKH31iiS9hfQAi8lEdUA8w9kw3t6AwQY6pgHK1niCjrMBGqUzzddr%2BKDkZz0zshWKL3lo7n%2BEa%2BYGlJ34UsZ9Rks1rGBUpzfmvUTw74udsFLbUFwAfb3LM%2FJ%2FsK1ogwRtAdAGNB1Y84Lt8YL0rDpUKpEC97w3M%2B5uz12Lc1YMMklKE3TLHQCRLTjZyY0lu%2Faahn28CYLhidKrZeTZgOO%2B9Ax78qA23dexKa6Xq%2BDO4jaB49PRSKX9KNGarDASu1o7&X-Amz-Signature=686576f7ec512dd7ea2bedb9fb44a592a8cd5f14b4d5eb395b13008c09494e08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ADYEDU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHvu%2F2qJKFUiVfOqxuL1nTb5SkCSCJVAS50kgDtL8pgMAiA82yhHTbht5PTYTsMyT%2BkDl4a1PIgkHdP9Xb5TysxzcCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFtf%2BNeIIL%2FYU0YA1KtwDBdr6RPwSpYDh3jLYQ6oxTJTZquath2TiaD0zf0d%2FOtkYgTNSKfrNU28ChxV1IIxCqFldUVHYjeTpEfpLJMJSJY6qd6n6dYR%2FfQwJa0hcx5VGGIBigk7uyH7J%2BsF7aJPKQmBnG3PtcQuZyVz6wn3ttSXq1BkkVNevS52J1xGcqyHZsOegDo52zFgCyZlXCxMpPGXLhzFVnpaH0jaRNvmO9%2FNy63%2BfpbO4vMf2g2Du5Y8ovxzYmsR26ReeTQn9j4fSdSf%2FjLd%2BzqOo4%2FuOazgcssHfltEgUiMioiOMEwo79CG14Mx1TcGqs4Z0EZMEBVBw%2FQALqpHWbwzEZx0gV1vOH7jPgorKiGolG80WclawF6UcUe6%2BKxlmBDZ9Ej9Eqac2Rpvx80h1pD5NNudnSE8WlLZur%2B%2FAnqBl0929K7RW1YFaKRBpbm9qvS5JSGTXH1JWwlpFImLch%2FrX8bBKltnX4K7XN2g43gwuClaDkO1bJ1aEHAcNkcD2DsLHvUZC%2FcC5KUP%2B%2FVa3LNieVRyox4CXpePBF4U7avoaKcPu2zwQ0gIFOsavn%2FDucJoKJ4aF9z8LUehMlwuz30YmnXRh%2B1rOjtMS21QEVX8M5r5GKH31iiS9hfQAi8lEdUA8w9kw3t6AwQY6pgHK1niCjrMBGqUzzddr%2BKDkZz0zshWKL3lo7n%2BEa%2BYGlJ34UsZ9Rks1rGBUpzfmvUTw74udsFLbUFwAfb3LM%2FJ%2FsK1ogwRtAdAGNB1Y84Lt8YL0rDpUKpEC97w3M%2B5uz12Lc1YMMklKE3TLHQCRLTjZyY0lu%2Faahn28CYLhidKrZeTZgOO%2B9Ax78qA23dexKa6Xq%2BDO4jaB49PRSKX9KNGarDASu1o7&X-Amz-Signature=d2f280f2e053193fd9ba323d60abff56cea9201d2cd7765a550857ee2482c2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
