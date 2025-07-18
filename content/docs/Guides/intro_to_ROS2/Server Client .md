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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK57M2C%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1MpWdP5M1ympMNUTdhFvFkXAU7M8qackdkesIHB9%2FSAIhAIxfU6anmN26GR4Xb%2BQrEWUgklbL8WvmaHTvRRCk4QHjKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOeJ5odwHOQ%2FinC7Eq3APiPloXhsjL%2FZEcCm97HdbwUMIvJQ%2FcoMwgoLQK1v8R81Toreicrb5jGSuurwcvyL6Vu%2BlsC20slWkPubGQ4cYVX4pRo6GNE71EdDkaB%2FfhfKursh1WdT3KST4WfB9Fke%2BOiinD%2FzZmLO%2FCtMUL4pDWM4sNtNSm%2FVMFEYdmNmWGftJ122Yi4ZDwLi2OQRtPWrVkn%2Fh0Kg4WNNlOkxSw7AF2XadsewZeAHXD0t7rM3fbmSfuA%2FccqmjJM23UtQ%2B2unuDpgtbNDzrK%2F%2FuXSsZwjec53BoRR%2B57PwUOEWasxqUPg%2Fh5pIbGqitypYzfkOe0%2B%2F0zy9HDzoJx2BBgZSeAmDRfeDdv%2FbfNITUb%2FVgrX85D3Uu1jzFuouA6mLYOv0dwouwwlCkRDIG3nKtVJNyA8Ky1C7cil8KDbcYh99RXL5RlLjD%2F2GVHLufb53aOCk2MQUthzH12f9hrR1Qur9DEgkJw8EVBRBHpBA2PJiVx4a0ULhp8w3hQ1GqSTS5edM97ItQUXHHh9jj53zxT4H%2BrpYxm%2FZsg8Nn24DuhO%2F9LQdQltbEiqal4MSs%2BBaELHZZj0dQ1HSbi2LcFcZE%2BhEOH9FaqTrZQdD7QF4suTcsA8TeNEn78YruCG7PUkSAnTDQ5erDBjqkAdCTCKC11LisvHJV%2BZrG3%2FzrkHr%2BqiUXojpEWp32P%2B8V4thEtVuIr3K8ek%2FQLVm7ZZ%2FmNgaIxkSTPeBPhHpUIIf85HUrgwUPkGWeSgzDkjODRKJOmm7ZVRxneMizBvMB95tSk7HVMVcl7jftR73%2BG7NNbAfJAEfhiMDWWmCZq6UMTVx3WFVdGPwYZqyz4KCYoqmagkGvbretiJLnY1GTRF0G0X9C&X-Amz-Signature=acd19d3474f38dccc9200be74276b9500edbff91724b4e1e4e7502ed2bb6630b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK57M2C%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1MpWdP5M1ympMNUTdhFvFkXAU7M8qackdkesIHB9%2FSAIhAIxfU6anmN26GR4Xb%2BQrEWUgklbL8WvmaHTvRRCk4QHjKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOeJ5odwHOQ%2FinC7Eq3APiPloXhsjL%2FZEcCm97HdbwUMIvJQ%2FcoMwgoLQK1v8R81Toreicrb5jGSuurwcvyL6Vu%2BlsC20slWkPubGQ4cYVX4pRo6GNE71EdDkaB%2FfhfKursh1WdT3KST4WfB9Fke%2BOiinD%2FzZmLO%2FCtMUL4pDWM4sNtNSm%2FVMFEYdmNmWGftJ122Yi4ZDwLi2OQRtPWrVkn%2Fh0Kg4WNNlOkxSw7AF2XadsewZeAHXD0t7rM3fbmSfuA%2FccqmjJM23UtQ%2B2unuDpgtbNDzrK%2F%2FuXSsZwjec53BoRR%2B57PwUOEWasxqUPg%2Fh5pIbGqitypYzfkOe0%2B%2F0zy9HDzoJx2BBgZSeAmDRfeDdv%2FbfNITUb%2FVgrX85D3Uu1jzFuouA6mLYOv0dwouwwlCkRDIG3nKtVJNyA8Ky1C7cil8KDbcYh99RXL5RlLjD%2F2GVHLufb53aOCk2MQUthzH12f9hrR1Qur9DEgkJw8EVBRBHpBA2PJiVx4a0ULhp8w3hQ1GqSTS5edM97ItQUXHHh9jj53zxT4H%2BrpYxm%2FZsg8Nn24DuhO%2F9LQdQltbEiqal4MSs%2BBaELHZZj0dQ1HSbi2LcFcZE%2BhEOH9FaqTrZQdD7QF4suTcsA8TeNEn78YruCG7PUkSAnTDQ5erDBjqkAdCTCKC11LisvHJV%2BZrG3%2FzrkHr%2BqiUXojpEWp32P%2B8V4thEtVuIr3K8ek%2FQLVm7ZZ%2FmNgaIxkSTPeBPhHpUIIf85HUrgwUPkGWeSgzDkjODRKJOmm7ZVRxneMizBvMB95tSk7HVMVcl7jftR73%2BG7NNbAfJAEfhiMDWWmCZq6UMTVx3WFVdGPwYZqyz4KCYoqmagkGvbretiJLnY1GTRF0G0X9C&X-Amz-Signature=460875f635e4d30d444472ad0cac81257f3a416855ae295fd8d69bf453fbdb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK57M2C%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1MpWdP5M1ympMNUTdhFvFkXAU7M8qackdkesIHB9%2FSAIhAIxfU6anmN26GR4Xb%2BQrEWUgklbL8WvmaHTvRRCk4QHjKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOeJ5odwHOQ%2FinC7Eq3APiPloXhsjL%2FZEcCm97HdbwUMIvJQ%2FcoMwgoLQK1v8R81Toreicrb5jGSuurwcvyL6Vu%2BlsC20slWkPubGQ4cYVX4pRo6GNE71EdDkaB%2FfhfKursh1WdT3KST4WfB9Fke%2BOiinD%2FzZmLO%2FCtMUL4pDWM4sNtNSm%2FVMFEYdmNmWGftJ122Yi4ZDwLi2OQRtPWrVkn%2Fh0Kg4WNNlOkxSw7AF2XadsewZeAHXD0t7rM3fbmSfuA%2FccqmjJM23UtQ%2B2unuDpgtbNDzrK%2F%2FuXSsZwjec53BoRR%2B57PwUOEWasxqUPg%2Fh5pIbGqitypYzfkOe0%2B%2F0zy9HDzoJx2BBgZSeAmDRfeDdv%2FbfNITUb%2FVgrX85D3Uu1jzFuouA6mLYOv0dwouwwlCkRDIG3nKtVJNyA8Ky1C7cil8KDbcYh99RXL5RlLjD%2F2GVHLufb53aOCk2MQUthzH12f9hrR1Qur9DEgkJw8EVBRBHpBA2PJiVx4a0ULhp8w3hQ1GqSTS5edM97ItQUXHHh9jj53zxT4H%2BrpYxm%2FZsg8Nn24DuhO%2F9LQdQltbEiqal4MSs%2BBaELHZZj0dQ1HSbi2LcFcZE%2BhEOH9FaqTrZQdD7QF4suTcsA8TeNEn78YruCG7PUkSAnTDQ5erDBjqkAdCTCKC11LisvHJV%2BZrG3%2FzrkHr%2BqiUXojpEWp32P%2B8V4thEtVuIr3K8ek%2FQLVm7ZZ%2FmNgaIxkSTPeBPhHpUIIf85HUrgwUPkGWeSgzDkjODRKJOmm7ZVRxneMizBvMB95tSk7HVMVcl7jftR73%2BG7NNbAfJAEfhiMDWWmCZq6UMTVx3WFVdGPwYZqyz4KCYoqmagkGvbretiJLnY1GTRF0G0X9C&X-Amz-Signature=4f8c8de6572ae7e1fe2e80a26edfcb3353c063438d36e658cff9f278fc77589f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK57M2C%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1MpWdP5M1ympMNUTdhFvFkXAU7M8qackdkesIHB9%2FSAIhAIxfU6anmN26GR4Xb%2BQrEWUgklbL8WvmaHTvRRCk4QHjKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOeJ5odwHOQ%2FinC7Eq3APiPloXhsjL%2FZEcCm97HdbwUMIvJQ%2FcoMwgoLQK1v8R81Toreicrb5jGSuurwcvyL6Vu%2BlsC20slWkPubGQ4cYVX4pRo6GNE71EdDkaB%2FfhfKursh1WdT3KST4WfB9Fke%2BOiinD%2FzZmLO%2FCtMUL4pDWM4sNtNSm%2FVMFEYdmNmWGftJ122Yi4ZDwLi2OQRtPWrVkn%2Fh0Kg4WNNlOkxSw7AF2XadsewZeAHXD0t7rM3fbmSfuA%2FccqmjJM23UtQ%2B2unuDpgtbNDzrK%2F%2FuXSsZwjec53BoRR%2B57PwUOEWasxqUPg%2Fh5pIbGqitypYzfkOe0%2B%2F0zy9HDzoJx2BBgZSeAmDRfeDdv%2FbfNITUb%2FVgrX85D3Uu1jzFuouA6mLYOv0dwouwwlCkRDIG3nKtVJNyA8Ky1C7cil8KDbcYh99RXL5RlLjD%2F2GVHLufb53aOCk2MQUthzH12f9hrR1Qur9DEgkJw8EVBRBHpBA2PJiVx4a0ULhp8w3hQ1GqSTS5edM97ItQUXHHh9jj53zxT4H%2BrpYxm%2FZsg8Nn24DuhO%2F9LQdQltbEiqal4MSs%2BBaELHZZj0dQ1HSbi2LcFcZE%2BhEOH9FaqTrZQdD7QF4suTcsA8TeNEn78YruCG7PUkSAnTDQ5erDBjqkAdCTCKC11LisvHJV%2BZrG3%2FzrkHr%2BqiUXojpEWp32P%2B8V4thEtVuIr3K8ek%2FQLVm7ZZ%2FmNgaIxkSTPeBPhHpUIIf85HUrgwUPkGWeSgzDkjODRKJOmm7ZVRxneMizBvMB95tSk7HVMVcl7jftR73%2BG7NNbAfJAEfhiMDWWmCZq6UMTVx3WFVdGPwYZqyz4KCYoqmagkGvbretiJLnY1GTRF0G0X9C&X-Amz-Signature=fcafa3fbc256ce0af2a7984b99780d6b7a67da65a32ff2dfbe868d3416488df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK57M2C%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD1MpWdP5M1ympMNUTdhFvFkXAU7M8qackdkesIHB9%2FSAIhAIxfU6anmN26GR4Xb%2BQrEWUgklbL8WvmaHTvRRCk4QHjKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOeJ5odwHOQ%2FinC7Eq3APiPloXhsjL%2FZEcCm97HdbwUMIvJQ%2FcoMwgoLQK1v8R81Toreicrb5jGSuurwcvyL6Vu%2BlsC20slWkPubGQ4cYVX4pRo6GNE71EdDkaB%2FfhfKursh1WdT3KST4WfB9Fke%2BOiinD%2FzZmLO%2FCtMUL4pDWM4sNtNSm%2FVMFEYdmNmWGftJ122Yi4ZDwLi2OQRtPWrVkn%2Fh0Kg4WNNlOkxSw7AF2XadsewZeAHXD0t7rM3fbmSfuA%2FccqmjJM23UtQ%2B2unuDpgtbNDzrK%2F%2FuXSsZwjec53BoRR%2B57PwUOEWasxqUPg%2Fh5pIbGqitypYzfkOe0%2B%2F0zy9HDzoJx2BBgZSeAmDRfeDdv%2FbfNITUb%2FVgrX85D3Uu1jzFuouA6mLYOv0dwouwwlCkRDIG3nKtVJNyA8Ky1C7cil8KDbcYh99RXL5RlLjD%2F2GVHLufb53aOCk2MQUthzH12f9hrR1Qur9DEgkJw8EVBRBHpBA2PJiVx4a0ULhp8w3hQ1GqSTS5edM97ItQUXHHh9jj53zxT4H%2BrpYxm%2FZsg8Nn24DuhO%2F9LQdQltbEiqal4MSs%2BBaELHZZj0dQ1HSbi2LcFcZE%2BhEOH9FaqTrZQdD7QF4suTcsA8TeNEn78YruCG7PUkSAnTDQ5erDBjqkAdCTCKC11LisvHJV%2BZrG3%2FzrkHr%2BqiUXojpEWp32P%2B8V4thEtVuIr3K8ek%2FQLVm7ZZ%2FmNgaIxkSTPeBPhHpUIIf85HUrgwUPkGWeSgzDkjODRKJOmm7ZVRxneMizBvMB95tSk7HVMVcl7jftR73%2BG7NNbAfJAEfhiMDWWmCZq6UMTVx3WFVdGPwYZqyz4KCYoqmagkGvbretiJLnY1GTRF0G0X9C&X-Amz-Signature=57d9ec634767df9526fcba880ef366beb0e0578d3d356d869751162088e8b50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
