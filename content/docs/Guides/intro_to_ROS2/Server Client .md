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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBFHG7M%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC3IQ%2F5vCkb%2BLp1gKeLDbZpcCmxAQPZPV7J5QD4c2IayAIhAPnalpt2VKC2BzRcSwKezG6qUui4RuxB3nMqPHFup%2FbBKv8DCFIQABoMNjM3NDIzMTgzODA1IgwQRSttcPhL5oHGEBsq3ANEqqUz7KZK6By63p%2B5EpyRjPpS1r6Ur3EhIoDbWmNI%2BW2CAkjy4lvV8U22sWKtI0AVQY31oHOK3WLB3GEefl%2FvhhgwKLxYI%2BlWIFh%2FjkiX2E%2Fir4cZjcavlj9L%2BnCRctMSwk%2BGoUX9Sel7kDJxVbiG2o%2FnGJwc0dXzPVlzSTE6KbEpqMhdz6Uk13vSMODicPh%2B1tZLwZ%2F9lOek1RBswi3Y2e1febWliP1MxQQ5LaNmcnMhz7uo39ERU7rDYJxwWAWR%2BYrklYkDk3d2jM%2B0fXaDzE9gE0mODY3kSQoeeGn68YDgStc0h6Pia19qiWnNBv1EMLfERmqbTNLzrDBA38FSLny%2Bg2%2FEbgHPoZ%2BtD28%2FD6%2BzRtC479hpNcZTzY0JvPBUqAGBRxjztxHyVWa9A4kfZpJIUlNgaN0J%2BUhuB3vxolVnF1CWQYF3oiohi53IfexGm4nrAtj8QeMjkVnjuyYIkfEp7sNxqz6bWhi4TgPdBQLlXpHXerkv5JzfMtPULbM4MmzUZcT%2FvRf2U1U4%2BAKtgB93aqTOhXlvdowManfayGtLE7o8uYpMM8TcEGz0HBTaAp9xDt86xdsovNXVi4eiAJR2jcV6wn4Zxdbt%2Bq2DQVqEooyXfol9KtiVPTDc%2FNvDBjqkAQy38HGsZVItLP3hD0N%2BF5EFo9Ix2h4JW5CNn7lTHsMmiMaueSckMHk%2BhdTNcPq%2FCxTBq%2BktStZQt%2Fhu92I6TGVEVBSHbWOUdG%2FqyJvG8LdO%2BDF1f9IgKmNyFeFzRQhrQuB9G5ftuzUnLmsMumQ%2B5k%2BZUzc%2FDAn4LBXCOVqAWhn%2F5d4%2BKE7Wj3sZAk1mAdR6BXPBUee7NE3pAmMCkWlQ6AnBWujy&X-Amz-Signature=dadc48a555b09711e1339037dd0bce350b69c35c2db735fd7d41a4ba077f8c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBFHG7M%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC3IQ%2F5vCkb%2BLp1gKeLDbZpcCmxAQPZPV7J5QD4c2IayAIhAPnalpt2VKC2BzRcSwKezG6qUui4RuxB3nMqPHFup%2FbBKv8DCFIQABoMNjM3NDIzMTgzODA1IgwQRSttcPhL5oHGEBsq3ANEqqUz7KZK6By63p%2B5EpyRjPpS1r6Ur3EhIoDbWmNI%2BW2CAkjy4lvV8U22sWKtI0AVQY31oHOK3WLB3GEefl%2FvhhgwKLxYI%2BlWIFh%2FjkiX2E%2Fir4cZjcavlj9L%2BnCRctMSwk%2BGoUX9Sel7kDJxVbiG2o%2FnGJwc0dXzPVlzSTE6KbEpqMhdz6Uk13vSMODicPh%2B1tZLwZ%2F9lOek1RBswi3Y2e1febWliP1MxQQ5LaNmcnMhz7uo39ERU7rDYJxwWAWR%2BYrklYkDk3d2jM%2B0fXaDzE9gE0mODY3kSQoeeGn68YDgStc0h6Pia19qiWnNBv1EMLfERmqbTNLzrDBA38FSLny%2Bg2%2FEbgHPoZ%2BtD28%2FD6%2BzRtC479hpNcZTzY0JvPBUqAGBRxjztxHyVWa9A4kfZpJIUlNgaN0J%2BUhuB3vxolVnF1CWQYF3oiohi53IfexGm4nrAtj8QeMjkVnjuyYIkfEp7sNxqz6bWhi4TgPdBQLlXpHXerkv5JzfMtPULbM4MmzUZcT%2FvRf2U1U4%2BAKtgB93aqTOhXlvdowManfayGtLE7o8uYpMM8TcEGz0HBTaAp9xDt86xdsovNXVi4eiAJR2jcV6wn4Zxdbt%2Bq2DQVqEooyXfol9KtiVPTDc%2FNvDBjqkAQy38HGsZVItLP3hD0N%2BF5EFo9Ix2h4JW5CNn7lTHsMmiMaueSckMHk%2BhdTNcPq%2FCxTBq%2BktStZQt%2Fhu92I6TGVEVBSHbWOUdG%2FqyJvG8LdO%2BDF1f9IgKmNyFeFzRQhrQuB9G5ftuzUnLmsMumQ%2B5k%2BZUzc%2FDAn4LBXCOVqAWhn%2F5d4%2BKE7Wj3sZAk1mAdR6BXPBUee7NE3pAmMCkWlQ6AnBWujy&X-Amz-Signature=21f38c515f80e00734046a54463832a9f9a0b3c9b335cb74a25fd5e8978a9eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBFHG7M%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC3IQ%2F5vCkb%2BLp1gKeLDbZpcCmxAQPZPV7J5QD4c2IayAIhAPnalpt2VKC2BzRcSwKezG6qUui4RuxB3nMqPHFup%2FbBKv8DCFIQABoMNjM3NDIzMTgzODA1IgwQRSttcPhL5oHGEBsq3ANEqqUz7KZK6By63p%2B5EpyRjPpS1r6Ur3EhIoDbWmNI%2BW2CAkjy4lvV8U22sWKtI0AVQY31oHOK3WLB3GEefl%2FvhhgwKLxYI%2BlWIFh%2FjkiX2E%2Fir4cZjcavlj9L%2BnCRctMSwk%2BGoUX9Sel7kDJxVbiG2o%2FnGJwc0dXzPVlzSTE6KbEpqMhdz6Uk13vSMODicPh%2B1tZLwZ%2F9lOek1RBswi3Y2e1febWliP1MxQQ5LaNmcnMhz7uo39ERU7rDYJxwWAWR%2BYrklYkDk3d2jM%2B0fXaDzE9gE0mODY3kSQoeeGn68YDgStc0h6Pia19qiWnNBv1EMLfERmqbTNLzrDBA38FSLny%2Bg2%2FEbgHPoZ%2BtD28%2FD6%2BzRtC479hpNcZTzY0JvPBUqAGBRxjztxHyVWa9A4kfZpJIUlNgaN0J%2BUhuB3vxolVnF1CWQYF3oiohi53IfexGm4nrAtj8QeMjkVnjuyYIkfEp7sNxqz6bWhi4TgPdBQLlXpHXerkv5JzfMtPULbM4MmzUZcT%2FvRf2U1U4%2BAKtgB93aqTOhXlvdowManfayGtLE7o8uYpMM8TcEGz0HBTaAp9xDt86xdsovNXVi4eiAJR2jcV6wn4Zxdbt%2Bq2DQVqEooyXfol9KtiVPTDc%2FNvDBjqkAQy38HGsZVItLP3hD0N%2BF5EFo9Ix2h4JW5CNn7lTHsMmiMaueSckMHk%2BhdTNcPq%2FCxTBq%2BktStZQt%2Fhu92I6TGVEVBSHbWOUdG%2FqyJvG8LdO%2BDF1f9IgKmNyFeFzRQhrQuB9G5ftuzUnLmsMumQ%2B5k%2BZUzc%2FDAn4LBXCOVqAWhn%2F5d4%2BKE7Wj3sZAk1mAdR6BXPBUee7NE3pAmMCkWlQ6AnBWujy&X-Amz-Signature=53adc8c6e001db865c7fc1ea94e17ef4391f89914f7bbe8eae34132e2faa2ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBFHG7M%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC3IQ%2F5vCkb%2BLp1gKeLDbZpcCmxAQPZPV7J5QD4c2IayAIhAPnalpt2VKC2BzRcSwKezG6qUui4RuxB3nMqPHFup%2FbBKv8DCFIQABoMNjM3NDIzMTgzODA1IgwQRSttcPhL5oHGEBsq3ANEqqUz7KZK6By63p%2B5EpyRjPpS1r6Ur3EhIoDbWmNI%2BW2CAkjy4lvV8U22sWKtI0AVQY31oHOK3WLB3GEefl%2FvhhgwKLxYI%2BlWIFh%2FjkiX2E%2Fir4cZjcavlj9L%2BnCRctMSwk%2BGoUX9Sel7kDJxVbiG2o%2FnGJwc0dXzPVlzSTE6KbEpqMhdz6Uk13vSMODicPh%2B1tZLwZ%2F9lOek1RBswi3Y2e1febWliP1MxQQ5LaNmcnMhz7uo39ERU7rDYJxwWAWR%2BYrklYkDk3d2jM%2B0fXaDzE9gE0mODY3kSQoeeGn68YDgStc0h6Pia19qiWnNBv1EMLfERmqbTNLzrDBA38FSLny%2Bg2%2FEbgHPoZ%2BtD28%2FD6%2BzRtC479hpNcZTzY0JvPBUqAGBRxjztxHyVWa9A4kfZpJIUlNgaN0J%2BUhuB3vxolVnF1CWQYF3oiohi53IfexGm4nrAtj8QeMjkVnjuyYIkfEp7sNxqz6bWhi4TgPdBQLlXpHXerkv5JzfMtPULbM4MmzUZcT%2FvRf2U1U4%2BAKtgB93aqTOhXlvdowManfayGtLE7o8uYpMM8TcEGz0HBTaAp9xDt86xdsovNXVi4eiAJR2jcV6wn4Zxdbt%2Bq2DQVqEooyXfol9KtiVPTDc%2FNvDBjqkAQy38HGsZVItLP3hD0N%2BF5EFo9Ix2h4JW5CNn7lTHsMmiMaueSckMHk%2BhdTNcPq%2FCxTBq%2BktStZQt%2Fhu92I6TGVEVBSHbWOUdG%2FqyJvG8LdO%2BDF1f9IgKmNyFeFzRQhrQuB9G5ftuzUnLmsMumQ%2B5k%2BZUzc%2FDAn4LBXCOVqAWhn%2F5d4%2BKE7Wj3sZAk1mAdR6BXPBUee7NE3pAmMCkWlQ6AnBWujy&X-Amz-Signature=451ea68f598da980dc0cf19731fadc63785160486797e3a0d3a3987987e07622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBFHG7M%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC3IQ%2F5vCkb%2BLp1gKeLDbZpcCmxAQPZPV7J5QD4c2IayAIhAPnalpt2VKC2BzRcSwKezG6qUui4RuxB3nMqPHFup%2FbBKv8DCFIQABoMNjM3NDIzMTgzODA1IgwQRSttcPhL5oHGEBsq3ANEqqUz7KZK6By63p%2B5EpyRjPpS1r6Ur3EhIoDbWmNI%2BW2CAkjy4lvV8U22sWKtI0AVQY31oHOK3WLB3GEefl%2FvhhgwKLxYI%2BlWIFh%2FjkiX2E%2Fir4cZjcavlj9L%2BnCRctMSwk%2BGoUX9Sel7kDJxVbiG2o%2FnGJwc0dXzPVlzSTE6KbEpqMhdz6Uk13vSMODicPh%2B1tZLwZ%2F9lOek1RBswi3Y2e1febWliP1MxQQ5LaNmcnMhz7uo39ERU7rDYJxwWAWR%2BYrklYkDk3d2jM%2B0fXaDzE9gE0mODY3kSQoeeGn68YDgStc0h6Pia19qiWnNBv1EMLfERmqbTNLzrDBA38FSLny%2Bg2%2FEbgHPoZ%2BtD28%2FD6%2BzRtC479hpNcZTzY0JvPBUqAGBRxjztxHyVWa9A4kfZpJIUlNgaN0J%2BUhuB3vxolVnF1CWQYF3oiohi53IfexGm4nrAtj8QeMjkVnjuyYIkfEp7sNxqz6bWhi4TgPdBQLlXpHXerkv5JzfMtPULbM4MmzUZcT%2FvRf2U1U4%2BAKtgB93aqTOhXlvdowManfayGtLE7o8uYpMM8TcEGz0HBTaAp9xDt86xdsovNXVi4eiAJR2jcV6wn4Zxdbt%2Bq2DQVqEooyXfol9KtiVPTDc%2FNvDBjqkAQy38HGsZVItLP3hD0N%2BF5EFo9Ix2h4JW5CNn7lTHsMmiMaueSckMHk%2BhdTNcPq%2FCxTBq%2BktStZQt%2Fhu92I6TGVEVBSHbWOUdG%2FqyJvG8LdO%2BDF1f9IgKmNyFeFzRQhrQuB9G5ftuzUnLmsMumQ%2B5k%2BZUzc%2FDAn4LBXCOVqAWhn%2F5d4%2BKE7Wj3sZAk1mAdR6BXPBUee7NE3pAmMCkWlQ6AnBWujy&X-Amz-Signature=418a90940eb27c95100ac8ac84b04988152229a16dbca9edc6be343eb49d30ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
