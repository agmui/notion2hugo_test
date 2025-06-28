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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXGZPU6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAKZE%2BgeNse8rUE49kACZft1xvwHEGfCH6pnTG8L3gAIhAOLr11HPZ%2BtroL5OUe7vfD9%2FF8%2F82eaXl1eQuyGiUzKOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJB3d7M%2Bh1aBIDFWoq3ANf40OSHezLBC4X%2BPnY%2BOgxsWBtNrFvqwb5g9W6ygDivbUdUX0LH2PK8bZdFbm4ComvFz4Dp3AVx5Ifwdqj1eV2vAdDyZqddspxn60o8ek6wsSlk52wgehKw94Q1%2FQv%2FOi3MztdkzS9EVe64QTRWBsEpiw10Ef0DAujJxyiv3cezcpZR%2BDUWyEQ1JV0jZLemgZLgr3rK6M%2FnNxllqrvsMW%2B1LrPtbS5ALVnl8Ur8VHhNK%2BhG3XeYbYn1oZlGWfyiSxroXqDXv1%2BnEi5butV7FGVjTPh7%2BV0oRFvAfPa778YjG7%2BN%2B7N92%2BysXvH8BV9PQltfQHxLrupylLJum5VoXN4yw4P1WAvw5vr1BC%2BVaXWAr1ABl7rCBjVvKpO2UWAFT%2FxO4%2FXcNfcI2e9RVuBrdxZVHxiH%2F1NNw3xg1GaD4j9EbPTAq9KFkZjXL7C5oUOssgBcZCBMOhXcvACwBUwu6EbSPHJyCmpltp%2BNX31NWVMRD4Fhg%2Fns8vUmIb7cq2TI3GvW%2BkCkue%2BTcCoZMpk%2BCA3YTFmtJIxjQGTz0XXL9JCZlqyMUNWv3qY%2FSKLAmj7iCTN0qHorsSv3UaRtlmaMWUh%2Bn6eOozwnVXzj65%2FVvOpqqraO6BNywwD1jsBQjDQ9IDDBjqkAS3T9HEdiU%2BVKPTnG9F9p9Q1adFPRIrfY%2BOY0zIwQvTU6rEIbaPCn8dtYodo6JghT6xYfPjdLTY7xQLPZ04Zuy5UNus0e8xvOw3F8K8zr%2Byzu%2BlPI9AIPY%2BP7Aie6u92AqXxb0cReNBFg0WNS2SoMtgsdBrggnfl9notdtAs5PlrBL4XXgRwrYBODUU9qtuZ4EJWB4VKN5YeS2uFW38sEjn4gtLd&X-Amz-Signature=24d61d8418d64d29f4d3e1e2a9d5051814a834d47a65ffd16ef805bc0020f4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXGZPU6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAKZE%2BgeNse8rUE49kACZft1xvwHEGfCH6pnTG8L3gAIhAOLr11HPZ%2BtroL5OUe7vfD9%2FF8%2F82eaXl1eQuyGiUzKOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJB3d7M%2Bh1aBIDFWoq3ANf40OSHezLBC4X%2BPnY%2BOgxsWBtNrFvqwb5g9W6ygDivbUdUX0LH2PK8bZdFbm4ComvFz4Dp3AVx5Ifwdqj1eV2vAdDyZqddspxn60o8ek6wsSlk52wgehKw94Q1%2FQv%2FOi3MztdkzS9EVe64QTRWBsEpiw10Ef0DAujJxyiv3cezcpZR%2BDUWyEQ1JV0jZLemgZLgr3rK6M%2FnNxllqrvsMW%2B1LrPtbS5ALVnl8Ur8VHhNK%2BhG3XeYbYn1oZlGWfyiSxroXqDXv1%2BnEi5butV7FGVjTPh7%2BV0oRFvAfPa778YjG7%2BN%2B7N92%2BysXvH8BV9PQltfQHxLrupylLJum5VoXN4yw4P1WAvw5vr1BC%2BVaXWAr1ABl7rCBjVvKpO2UWAFT%2FxO4%2FXcNfcI2e9RVuBrdxZVHxiH%2F1NNw3xg1GaD4j9EbPTAq9KFkZjXL7C5oUOssgBcZCBMOhXcvACwBUwu6EbSPHJyCmpltp%2BNX31NWVMRD4Fhg%2Fns8vUmIb7cq2TI3GvW%2BkCkue%2BTcCoZMpk%2BCA3YTFmtJIxjQGTz0XXL9JCZlqyMUNWv3qY%2FSKLAmj7iCTN0qHorsSv3UaRtlmaMWUh%2Bn6eOozwnVXzj65%2FVvOpqqraO6BNywwD1jsBQjDQ9IDDBjqkAS3T9HEdiU%2BVKPTnG9F9p9Q1adFPRIrfY%2BOY0zIwQvTU6rEIbaPCn8dtYodo6JghT6xYfPjdLTY7xQLPZ04Zuy5UNus0e8xvOw3F8K8zr%2Byzu%2BlPI9AIPY%2BP7Aie6u92AqXxb0cReNBFg0WNS2SoMtgsdBrggnfl9notdtAs5PlrBL4XXgRwrYBODUU9qtuZ4EJWB4VKN5YeS2uFW38sEjn4gtLd&X-Amz-Signature=279c4194719c5c6f304f95f443e80d3f35561b99aed49465fd672ad8fb9770df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXGZPU6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAKZE%2BgeNse8rUE49kACZft1xvwHEGfCH6pnTG8L3gAIhAOLr11HPZ%2BtroL5OUe7vfD9%2FF8%2F82eaXl1eQuyGiUzKOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJB3d7M%2Bh1aBIDFWoq3ANf40OSHezLBC4X%2BPnY%2BOgxsWBtNrFvqwb5g9W6ygDivbUdUX0LH2PK8bZdFbm4ComvFz4Dp3AVx5Ifwdqj1eV2vAdDyZqddspxn60o8ek6wsSlk52wgehKw94Q1%2FQv%2FOi3MztdkzS9EVe64QTRWBsEpiw10Ef0DAujJxyiv3cezcpZR%2BDUWyEQ1JV0jZLemgZLgr3rK6M%2FnNxllqrvsMW%2B1LrPtbS5ALVnl8Ur8VHhNK%2BhG3XeYbYn1oZlGWfyiSxroXqDXv1%2BnEi5butV7FGVjTPh7%2BV0oRFvAfPa778YjG7%2BN%2B7N92%2BysXvH8BV9PQltfQHxLrupylLJum5VoXN4yw4P1WAvw5vr1BC%2BVaXWAr1ABl7rCBjVvKpO2UWAFT%2FxO4%2FXcNfcI2e9RVuBrdxZVHxiH%2F1NNw3xg1GaD4j9EbPTAq9KFkZjXL7C5oUOssgBcZCBMOhXcvACwBUwu6EbSPHJyCmpltp%2BNX31NWVMRD4Fhg%2Fns8vUmIb7cq2TI3GvW%2BkCkue%2BTcCoZMpk%2BCA3YTFmtJIxjQGTz0XXL9JCZlqyMUNWv3qY%2FSKLAmj7iCTN0qHorsSv3UaRtlmaMWUh%2Bn6eOozwnVXzj65%2FVvOpqqraO6BNywwD1jsBQjDQ9IDDBjqkAS3T9HEdiU%2BVKPTnG9F9p9Q1adFPRIrfY%2BOY0zIwQvTU6rEIbaPCn8dtYodo6JghT6xYfPjdLTY7xQLPZ04Zuy5UNus0e8xvOw3F8K8zr%2Byzu%2BlPI9AIPY%2BP7Aie6u92AqXxb0cReNBFg0WNS2SoMtgsdBrggnfl9notdtAs5PlrBL4XXgRwrYBODUU9qtuZ4EJWB4VKN5YeS2uFW38sEjn4gtLd&X-Amz-Signature=9ad50bef566d0fac785a60aeeff41b54b7f67ae6c27ae9fc27237449139a15b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXGZPU6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAKZE%2BgeNse8rUE49kACZft1xvwHEGfCH6pnTG8L3gAIhAOLr11HPZ%2BtroL5OUe7vfD9%2FF8%2F82eaXl1eQuyGiUzKOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJB3d7M%2Bh1aBIDFWoq3ANf40OSHezLBC4X%2BPnY%2BOgxsWBtNrFvqwb5g9W6ygDivbUdUX0LH2PK8bZdFbm4ComvFz4Dp3AVx5Ifwdqj1eV2vAdDyZqddspxn60o8ek6wsSlk52wgehKw94Q1%2FQv%2FOi3MztdkzS9EVe64QTRWBsEpiw10Ef0DAujJxyiv3cezcpZR%2BDUWyEQ1JV0jZLemgZLgr3rK6M%2FnNxllqrvsMW%2B1LrPtbS5ALVnl8Ur8VHhNK%2BhG3XeYbYn1oZlGWfyiSxroXqDXv1%2BnEi5butV7FGVjTPh7%2BV0oRFvAfPa778YjG7%2BN%2B7N92%2BysXvH8BV9PQltfQHxLrupylLJum5VoXN4yw4P1WAvw5vr1BC%2BVaXWAr1ABl7rCBjVvKpO2UWAFT%2FxO4%2FXcNfcI2e9RVuBrdxZVHxiH%2F1NNw3xg1GaD4j9EbPTAq9KFkZjXL7C5oUOssgBcZCBMOhXcvACwBUwu6EbSPHJyCmpltp%2BNX31NWVMRD4Fhg%2Fns8vUmIb7cq2TI3GvW%2BkCkue%2BTcCoZMpk%2BCA3YTFmtJIxjQGTz0XXL9JCZlqyMUNWv3qY%2FSKLAmj7iCTN0qHorsSv3UaRtlmaMWUh%2Bn6eOozwnVXzj65%2FVvOpqqraO6BNywwD1jsBQjDQ9IDDBjqkAS3T9HEdiU%2BVKPTnG9F9p9Q1adFPRIrfY%2BOY0zIwQvTU6rEIbaPCn8dtYodo6JghT6xYfPjdLTY7xQLPZ04Zuy5UNus0e8xvOw3F8K8zr%2Byzu%2BlPI9AIPY%2BP7Aie6u92AqXxb0cReNBFg0WNS2SoMtgsdBrggnfl9notdtAs5PlrBL4XXgRwrYBODUU9qtuZ4EJWB4VKN5YeS2uFW38sEjn4gtLd&X-Amz-Signature=45d9733f9105d144112122aed21decec01da7503ed5d7b485cdffbb1cb982e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXGZPU6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAKZE%2BgeNse8rUE49kACZft1xvwHEGfCH6pnTG8L3gAIhAOLr11HPZ%2BtroL5OUe7vfD9%2FF8%2F82eaXl1eQuyGiUzKOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJB3d7M%2Bh1aBIDFWoq3ANf40OSHezLBC4X%2BPnY%2BOgxsWBtNrFvqwb5g9W6ygDivbUdUX0LH2PK8bZdFbm4ComvFz4Dp3AVx5Ifwdqj1eV2vAdDyZqddspxn60o8ek6wsSlk52wgehKw94Q1%2FQv%2FOi3MztdkzS9EVe64QTRWBsEpiw10Ef0DAujJxyiv3cezcpZR%2BDUWyEQ1JV0jZLemgZLgr3rK6M%2FnNxllqrvsMW%2B1LrPtbS5ALVnl8Ur8VHhNK%2BhG3XeYbYn1oZlGWfyiSxroXqDXv1%2BnEi5butV7FGVjTPh7%2BV0oRFvAfPa778YjG7%2BN%2B7N92%2BysXvH8BV9PQltfQHxLrupylLJum5VoXN4yw4P1WAvw5vr1BC%2BVaXWAr1ABl7rCBjVvKpO2UWAFT%2FxO4%2FXcNfcI2e9RVuBrdxZVHxiH%2F1NNw3xg1GaD4j9EbPTAq9KFkZjXL7C5oUOssgBcZCBMOhXcvACwBUwu6EbSPHJyCmpltp%2BNX31NWVMRD4Fhg%2Fns8vUmIb7cq2TI3GvW%2BkCkue%2BTcCoZMpk%2BCA3YTFmtJIxjQGTz0XXL9JCZlqyMUNWv3qY%2FSKLAmj7iCTN0qHorsSv3UaRtlmaMWUh%2Bn6eOozwnVXzj65%2FVvOpqqraO6BNywwD1jsBQjDQ9IDDBjqkAS3T9HEdiU%2BVKPTnG9F9p9Q1adFPRIrfY%2BOY0zIwQvTU6rEIbaPCn8dtYodo6JghT6xYfPjdLTY7xQLPZ04Zuy5UNus0e8xvOw3F8K8zr%2Byzu%2BlPI9AIPY%2BP7Aie6u92AqXxb0cReNBFg0WNS2SoMtgsdBrggnfl9notdtAs5PlrBL4XXgRwrYBODUU9qtuZ4EJWB4VKN5YeS2uFW38sEjn4gtLd&X-Amz-Signature=35fae0212fcea3f988838722aac1ff2fa617a1fd0382427b7e14ce67e9a3ea44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
