---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5G6S57%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC6lPDJMi%2Bw77MVBlCnPUJ14dLwJ5IXCJC177aLpapmZwIgF%2FFxVvrjxOfTGQbE95U31GLkupJJzpNV4hCF%2B3hL%2FP8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb6qmr40wjQwIOSIircA7P1kwShDElt%2FJcnCOsiQjqgYT5Yuw5351HwpbNjNjOfbJfyH5xdKWQXPrvE%2FIjBzoi3VwRWIX8BAhzlwWCkDqcx2Zg5x8anfAM%2F6dzUnQ6rLEoEexiZ6u%2BAoAcjz2TpBQ8p%2BASr8XWqGk3IWPTPRBufDv8BbWvMRg%2BBidTgCdAKqST9vz%2F%2Bgn3G%2BRKQeU84XViK2S3M9FYVKfxXTjoUCtBOl2JgBSQzNjvD4E1O2aRNcNwXw0bYOhVCb7wQOMIWVh6plfepT7G6m2xytqoDXpgmv5BU%2FRkODSVZVqXPoql%2BM2wLe4IuaYPyN6meB9s6gFsFxFxuQIZCwDzSRTpRAcskARddNdA5qE9DN8u6IGybd8NECrHHpY4uAEaYvhj0FWrStmoysZ9H3iOiFIm%2FfUkiwV%2B0fLCoVbxC88E7IhY4xfXiq%2Bt6hOFhYFiR7EgbA2gAtwLUpu5CczCy6q8fZm%2Fp07DA6fnlo1AD9FQZ14D5Scg9Dtm2%2FTcQ%2FrwcuUNNe9LvKmTB2nGBoWEY5fDgIkFBMTsGaD7Kb9kFP96tZJ6aaRnGkaJ6VNHlUkGy9o0VvI4Op1A9oA5JRWkTuJhUOOG%2BQRneA0vmuOnaeLIUAsg0ULN4ObFXqbG8T%2FwOMJKJ8sYGOqUBsv%2B9A1pShidyB%2FRb8sxCDEr8sWg%2BK4EXAAAVDTGDEgRwSmGNvbH%2FNQmF3a1L7H%2FJUpRiGJ2Gqhfq8ebLQEk36mpHb2Ap9bb%2F%2FSjv72krg1KZAm4sWGr1MxH8xl%2BMGK%2BSwQgzV6TVAfRKFmMf0H6BKgRpFEXLphahbWMea8IpCIiYuOIE55KtoMP9GRxIa5Wb6fRii2TX8uJ98BX0Yi9SsyGFXHjY&X-Amz-Signature=39293c69dc0e5e630bc1ce57e6e454c2dbe54df147b8e3df4847175789aededb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5G6S57%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC6lPDJMi%2Bw77MVBlCnPUJ14dLwJ5IXCJC177aLpapmZwIgF%2FFxVvrjxOfTGQbE95U31GLkupJJzpNV4hCF%2B3hL%2FP8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb6qmr40wjQwIOSIircA7P1kwShDElt%2FJcnCOsiQjqgYT5Yuw5351HwpbNjNjOfbJfyH5xdKWQXPrvE%2FIjBzoi3VwRWIX8BAhzlwWCkDqcx2Zg5x8anfAM%2F6dzUnQ6rLEoEexiZ6u%2BAoAcjz2TpBQ8p%2BASr8XWqGk3IWPTPRBufDv8BbWvMRg%2BBidTgCdAKqST9vz%2F%2Bgn3G%2BRKQeU84XViK2S3M9FYVKfxXTjoUCtBOl2JgBSQzNjvD4E1O2aRNcNwXw0bYOhVCb7wQOMIWVh6plfepT7G6m2xytqoDXpgmv5BU%2FRkODSVZVqXPoql%2BM2wLe4IuaYPyN6meB9s6gFsFxFxuQIZCwDzSRTpRAcskARddNdA5qE9DN8u6IGybd8NECrHHpY4uAEaYvhj0FWrStmoysZ9H3iOiFIm%2FfUkiwV%2B0fLCoVbxC88E7IhY4xfXiq%2Bt6hOFhYFiR7EgbA2gAtwLUpu5CczCy6q8fZm%2Fp07DA6fnlo1AD9FQZ14D5Scg9Dtm2%2FTcQ%2FrwcuUNNe9LvKmTB2nGBoWEY5fDgIkFBMTsGaD7Kb9kFP96tZJ6aaRnGkaJ6VNHlUkGy9o0VvI4Op1A9oA5JRWkTuJhUOOG%2BQRneA0vmuOnaeLIUAsg0ULN4ObFXqbG8T%2FwOMJKJ8sYGOqUBsv%2B9A1pShidyB%2FRb8sxCDEr8sWg%2BK4EXAAAVDTGDEgRwSmGNvbH%2FNQmF3a1L7H%2FJUpRiGJ2Gqhfq8ebLQEk36mpHb2Ap9bb%2F%2FSjv72krg1KZAm4sWGr1MxH8xl%2BMGK%2BSwQgzV6TVAfRKFmMf0H6BKgRpFEXLphahbWMea8IpCIiYuOIE55KtoMP9GRxIa5Wb6fRii2TX8uJ98BX0Yi9SsyGFXHjY&X-Amz-Signature=135e3f27ce93b39476a99497ce03924a81c96bc3665e58b9be704c1d9707c86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5G6S57%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC6lPDJMi%2Bw77MVBlCnPUJ14dLwJ5IXCJC177aLpapmZwIgF%2FFxVvrjxOfTGQbE95U31GLkupJJzpNV4hCF%2B3hL%2FP8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb6qmr40wjQwIOSIircA7P1kwShDElt%2FJcnCOsiQjqgYT5Yuw5351HwpbNjNjOfbJfyH5xdKWQXPrvE%2FIjBzoi3VwRWIX8BAhzlwWCkDqcx2Zg5x8anfAM%2F6dzUnQ6rLEoEexiZ6u%2BAoAcjz2TpBQ8p%2BASr8XWqGk3IWPTPRBufDv8BbWvMRg%2BBidTgCdAKqST9vz%2F%2Bgn3G%2BRKQeU84XViK2S3M9FYVKfxXTjoUCtBOl2JgBSQzNjvD4E1O2aRNcNwXw0bYOhVCb7wQOMIWVh6plfepT7G6m2xytqoDXpgmv5BU%2FRkODSVZVqXPoql%2BM2wLe4IuaYPyN6meB9s6gFsFxFxuQIZCwDzSRTpRAcskARddNdA5qE9DN8u6IGybd8NECrHHpY4uAEaYvhj0FWrStmoysZ9H3iOiFIm%2FfUkiwV%2B0fLCoVbxC88E7IhY4xfXiq%2Bt6hOFhYFiR7EgbA2gAtwLUpu5CczCy6q8fZm%2Fp07DA6fnlo1AD9FQZ14D5Scg9Dtm2%2FTcQ%2FrwcuUNNe9LvKmTB2nGBoWEY5fDgIkFBMTsGaD7Kb9kFP96tZJ6aaRnGkaJ6VNHlUkGy9o0VvI4Op1A9oA5JRWkTuJhUOOG%2BQRneA0vmuOnaeLIUAsg0ULN4ObFXqbG8T%2FwOMJKJ8sYGOqUBsv%2B9A1pShidyB%2FRb8sxCDEr8sWg%2BK4EXAAAVDTGDEgRwSmGNvbH%2FNQmF3a1L7H%2FJUpRiGJ2Gqhfq8ebLQEk36mpHb2Ap9bb%2F%2FSjv72krg1KZAm4sWGr1MxH8xl%2BMGK%2BSwQgzV6TVAfRKFmMf0H6BKgRpFEXLphahbWMea8IpCIiYuOIE55KtoMP9GRxIa5Wb6fRii2TX8uJ98BX0Yi9SsyGFXHjY&X-Amz-Signature=634be13f1aaf698852adc16fc1730b1913f6afd7ee7e5bad9247439884f2c49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5G6S57%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC6lPDJMi%2Bw77MVBlCnPUJ14dLwJ5IXCJC177aLpapmZwIgF%2FFxVvrjxOfTGQbE95U31GLkupJJzpNV4hCF%2B3hL%2FP8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb6qmr40wjQwIOSIircA7P1kwShDElt%2FJcnCOsiQjqgYT5Yuw5351HwpbNjNjOfbJfyH5xdKWQXPrvE%2FIjBzoi3VwRWIX8BAhzlwWCkDqcx2Zg5x8anfAM%2F6dzUnQ6rLEoEexiZ6u%2BAoAcjz2TpBQ8p%2BASr8XWqGk3IWPTPRBufDv8BbWvMRg%2BBidTgCdAKqST9vz%2F%2Bgn3G%2BRKQeU84XViK2S3M9FYVKfxXTjoUCtBOl2JgBSQzNjvD4E1O2aRNcNwXw0bYOhVCb7wQOMIWVh6plfepT7G6m2xytqoDXpgmv5BU%2FRkODSVZVqXPoql%2BM2wLe4IuaYPyN6meB9s6gFsFxFxuQIZCwDzSRTpRAcskARddNdA5qE9DN8u6IGybd8NECrHHpY4uAEaYvhj0FWrStmoysZ9H3iOiFIm%2FfUkiwV%2B0fLCoVbxC88E7IhY4xfXiq%2Bt6hOFhYFiR7EgbA2gAtwLUpu5CczCy6q8fZm%2Fp07DA6fnlo1AD9FQZ14D5Scg9Dtm2%2FTcQ%2FrwcuUNNe9LvKmTB2nGBoWEY5fDgIkFBMTsGaD7Kb9kFP96tZJ6aaRnGkaJ6VNHlUkGy9o0VvI4Op1A9oA5JRWkTuJhUOOG%2BQRneA0vmuOnaeLIUAsg0ULN4ObFXqbG8T%2FwOMJKJ8sYGOqUBsv%2B9A1pShidyB%2FRb8sxCDEr8sWg%2BK4EXAAAVDTGDEgRwSmGNvbH%2FNQmF3a1L7H%2FJUpRiGJ2Gqhfq8ebLQEk36mpHb2Ap9bb%2F%2FSjv72krg1KZAm4sWGr1MxH8xl%2BMGK%2BSwQgzV6TVAfRKFmMf0H6BKgRpFEXLphahbWMea8IpCIiYuOIE55KtoMP9GRxIa5Wb6fRii2TX8uJ98BX0Yi9SsyGFXHjY&X-Amz-Signature=79ec24eace398ae25300745cf2c981b69ed60aca5cbaae772e2dc3ac5fb45f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5G6S57%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC6lPDJMi%2Bw77MVBlCnPUJ14dLwJ5IXCJC177aLpapmZwIgF%2FFxVvrjxOfTGQbE95U31GLkupJJzpNV4hCF%2B3hL%2FP8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb6qmr40wjQwIOSIircA7P1kwShDElt%2FJcnCOsiQjqgYT5Yuw5351HwpbNjNjOfbJfyH5xdKWQXPrvE%2FIjBzoi3VwRWIX8BAhzlwWCkDqcx2Zg5x8anfAM%2F6dzUnQ6rLEoEexiZ6u%2BAoAcjz2TpBQ8p%2BASr8XWqGk3IWPTPRBufDv8BbWvMRg%2BBidTgCdAKqST9vz%2F%2Bgn3G%2BRKQeU84XViK2S3M9FYVKfxXTjoUCtBOl2JgBSQzNjvD4E1O2aRNcNwXw0bYOhVCb7wQOMIWVh6plfepT7G6m2xytqoDXpgmv5BU%2FRkODSVZVqXPoql%2BM2wLe4IuaYPyN6meB9s6gFsFxFxuQIZCwDzSRTpRAcskARddNdA5qE9DN8u6IGybd8NECrHHpY4uAEaYvhj0FWrStmoysZ9H3iOiFIm%2FfUkiwV%2B0fLCoVbxC88E7IhY4xfXiq%2Bt6hOFhYFiR7EgbA2gAtwLUpu5CczCy6q8fZm%2Fp07DA6fnlo1AD9FQZ14D5Scg9Dtm2%2FTcQ%2FrwcuUNNe9LvKmTB2nGBoWEY5fDgIkFBMTsGaD7Kb9kFP96tZJ6aaRnGkaJ6VNHlUkGy9o0VvI4Op1A9oA5JRWkTuJhUOOG%2BQRneA0vmuOnaeLIUAsg0ULN4ObFXqbG8T%2FwOMJKJ8sYGOqUBsv%2B9A1pShidyB%2FRb8sxCDEr8sWg%2BK4EXAAAVDTGDEgRwSmGNvbH%2FNQmF3a1L7H%2FJUpRiGJ2Gqhfq8ebLQEk36mpHb2Ap9bb%2F%2FSjv72krg1KZAm4sWGr1MxH8xl%2BMGK%2BSwQgzV6TVAfRKFmMf0H6BKgRpFEXLphahbWMea8IpCIiYuOIE55KtoMP9GRxIa5Wb6fRii2TX8uJ98BX0Yi9SsyGFXHjY&X-Amz-Signature=ba75c9d3bc63b214301630f79423c99e285aed137d2bb242f4c9bac79a12c173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
