---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6RD2FC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHRmYDk03v%2BYXFGMFRa9ftbGGq73yj%2BWultRFZvzrmqtAiBKBbgKA6BqEHRzuiA2LTMGhTUhWYKavF7FvSN0tcFjEyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz49gJM2LWj%2F1Z5dnKtwD%2BYObBd01yZLdRmOsI5bgd1cMS%2BZc15vNwKI2vl5QxYlcNYJ0TvBRY4GG%2BWWH%2FGoGVCQki2vKwTynQMJys3iylxfEfGAGin2kEfRHURd39hAAbp7UHJBPyBlkxywqPnh4ATPwS%2BsONLG%2B5MMV9FTPAF0me%2BRPloR%2Fm2qBH1MtrCBp8ljQE3ZzXX5C4DmPmc3GeFa98uQAlFlEz%2B1%2FP%2BONy3AEb%2Br%2BOXfrkbMa1%2BRBeUUNSQN%2FosCd8Az%2F674wuuDSKKfnE%2Bn3AqE7x7Vtic%2BHMxEC1z00cfjFfKG0UN1yUYltJeXiR9WCFuIg3%2BDIdlVb4BybSA1HU4FB18sqpgQ9tgoJL1OsdNPvz5qRbiFNXkxl8Fp8WZ%2Ft1SrDlC%2FmRC%2FqZpIS%2FPZi9jc0jfPCzyp8L0quJepwULBeUkFLFQeB55NM2zmT%2BBRTTngV2pZpy0Xm1FRA3rVcFUeEKQ4Q8rbBoxiDxV7hXvXxo0BCvtXXQOyqdidwD3zWrCQDCdxQ9afQPyyfdZkZOWY6KSjNpZzlnfETq1nMf%2BL%2BMojoEbARQkX8lDzUzQM%2FSjfk7tHwpJF5SD8LDqPvymM4I6CVyi2gCSuQ6j28gxitfHPMoS1qyWKSOWiTcIOwfv0trHow%2B5LUvQY6pgG3X5fvsDwOC1svd0lplBbzkMb0yUeq5dj8Aici%2FRVPMQyNRLr6Kv4F%2FOdIA4boixt6npuMyzFEu0dPddXsSQCoynVYYLy1wNRAYRO8HXo0RW14GvOsrLdZNlcgsq0oZ5cTpDW2jfvxbfc9NN4LbcmiwX3Yi99l9D7ABG6JywNO0%2BlRwuTJQMfxESzCSs4YUKG%2Br8v%2BtqIwRxh5sv2Lh1oJz3OfolYk&X-Amz-Signature=0f6db68d5fc0e22fc7984ed16a233c97a7132cb14c6d0d6e874ef4331a928e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6RD2FC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHRmYDk03v%2BYXFGMFRa9ftbGGq73yj%2BWultRFZvzrmqtAiBKBbgKA6BqEHRzuiA2LTMGhTUhWYKavF7FvSN0tcFjEyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz49gJM2LWj%2F1Z5dnKtwD%2BYObBd01yZLdRmOsI5bgd1cMS%2BZc15vNwKI2vl5QxYlcNYJ0TvBRY4GG%2BWWH%2FGoGVCQki2vKwTynQMJys3iylxfEfGAGin2kEfRHURd39hAAbp7UHJBPyBlkxywqPnh4ATPwS%2BsONLG%2B5MMV9FTPAF0me%2BRPloR%2Fm2qBH1MtrCBp8ljQE3ZzXX5C4DmPmc3GeFa98uQAlFlEz%2B1%2FP%2BONy3AEb%2Br%2BOXfrkbMa1%2BRBeUUNSQN%2FosCd8Az%2F674wuuDSKKfnE%2Bn3AqE7x7Vtic%2BHMxEC1z00cfjFfKG0UN1yUYltJeXiR9WCFuIg3%2BDIdlVb4BybSA1HU4FB18sqpgQ9tgoJL1OsdNPvz5qRbiFNXkxl8Fp8WZ%2Ft1SrDlC%2FmRC%2FqZpIS%2FPZi9jc0jfPCzyp8L0quJepwULBeUkFLFQeB55NM2zmT%2BBRTTngV2pZpy0Xm1FRA3rVcFUeEKQ4Q8rbBoxiDxV7hXvXxo0BCvtXXQOyqdidwD3zWrCQDCdxQ9afQPyyfdZkZOWY6KSjNpZzlnfETq1nMf%2BL%2BMojoEbARQkX8lDzUzQM%2FSjfk7tHwpJF5SD8LDqPvymM4I6CVyi2gCSuQ6j28gxitfHPMoS1qyWKSOWiTcIOwfv0trHow%2B5LUvQY6pgG3X5fvsDwOC1svd0lplBbzkMb0yUeq5dj8Aici%2FRVPMQyNRLr6Kv4F%2FOdIA4boixt6npuMyzFEu0dPddXsSQCoynVYYLy1wNRAYRO8HXo0RW14GvOsrLdZNlcgsq0oZ5cTpDW2jfvxbfc9NN4LbcmiwX3Yi99l9D7ABG6JywNO0%2BlRwuTJQMfxESzCSs4YUKG%2Br8v%2BtqIwRxh5sv2Lh1oJz3OfolYk&X-Amz-Signature=f07894891ee0920f3f64fa41b1d905cb893e64590ade2b67d721ea3108e44f06&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6RD2FC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHRmYDk03v%2BYXFGMFRa9ftbGGq73yj%2BWultRFZvzrmqtAiBKBbgKA6BqEHRzuiA2LTMGhTUhWYKavF7FvSN0tcFjEyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz49gJM2LWj%2F1Z5dnKtwD%2BYObBd01yZLdRmOsI5bgd1cMS%2BZc15vNwKI2vl5QxYlcNYJ0TvBRY4GG%2BWWH%2FGoGVCQki2vKwTynQMJys3iylxfEfGAGin2kEfRHURd39hAAbp7UHJBPyBlkxywqPnh4ATPwS%2BsONLG%2B5MMV9FTPAF0me%2BRPloR%2Fm2qBH1MtrCBp8ljQE3ZzXX5C4DmPmc3GeFa98uQAlFlEz%2B1%2FP%2BONy3AEb%2Br%2BOXfrkbMa1%2BRBeUUNSQN%2FosCd8Az%2F674wuuDSKKfnE%2Bn3AqE7x7Vtic%2BHMxEC1z00cfjFfKG0UN1yUYltJeXiR9WCFuIg3%2BDIdlVb4BybSA1HU4FB18sqpgQ9tgoJL1OsdNPvz5qRbiFNXkxl8Fp8WZ%2Ft1SrDlC%2FmRC%2FqZpIS%2FPZi9jc0jfPCzyp8L0quJepwULBeUkFLFQeB55NM2zmT%2BBRTTngV2pZpy0Xm1FRA3rVcFUeEKQ4Q8rbBoxiDxV7hXvXxo0BCvtXXQOyqdidwD3zWrCQDCdxQ9afQPyyfdZkZOWY6KSjNpZzlnfETq1nMf%2BL%2BMojoEbARQkX8lDzUzQM%2FSjfk7tHwpJF5SD8LDqPvymM4I6CVyi2gCSuQ6j28gxitfHPMoS1qyWKSOWiTcIOwfv0trHow%2B5LUvQY6pgG3X5fvsDwOC1svd0lplBbzkMb0yUeq5dj8Aici%2FRVPMQyNRLr6Kv4F%2FOdIA4boixt6npuMyzFEu0dPddXsSQCoynVYYLy1wNRAYRO8HXo0RW14GvOsrLdZNlcgsq0oZ5cTpDW2jfvxbfc9NN4LbcmiwX3Yi99l9D7ABG6JywNO0%2BlRwuTJQMfxESzCSs4YUKG%2Br8v%2BtqIwRxh5sv2Lh1oJz3OfolYk&X-Amz-Signature=cf3e71d151ba8c883a239cd2475f720513494fe91eae144b3775da6d60f12087&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6RD2FC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHRmYDk03v%2BYXFGMFRa9ftbGGq73yj%2BWultRFZvzrmqtAiBKBbgKA6BqEHRzuiA2LTMGhTUhWYKavF7FvSN0tcFjEyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz49gJM2LWj%2F1Z5dnKtwD%2BYObBd01yZLdRmOsI5bgd1cMS%2BZc15vNwKI2vl5QxYlcNYJ0TvBRY4GG%2BWWH%2FGoGVCQki2vKwTynQMJys3iylxfEfGAGin2kEfRHURd39hAAbp7UHJBPyBlkxywqPnh4ATPwS%2BsONLG%2B5MMV9FTPAF0me%2BRPloR%2Fm2qBH1MtrCBp8ljQE3ZzXX5C4DmPmc3GeFa98uQAlFlEz%2B1%2FP%2BONy3AEb%2Br%2BOXfrkbMa1%2BRBeUUNSQN%2FosCd8Az%2F674wuuDSKKfnE%2Bn3AqE7x7Vtic%2BHMxEC1z00cfjFfKG0UN1yUYltJeXiR9WCFuIg3%2BDIdlVb4BybSA1HU4FB18sqpgQ9tgoJL1OsdNPvz5qRbiFNXkxl8Fp8WZ%2Ft1SrDlC%2FmRC%2FqZpIS%2FPZi9jc0jfPCzyp8L0quJepwULBeUkFLFQeB55NM2zmT%2BBRTTngV2pZpy0Xm1FRA3rVcFUeEKQ4Q8rbBoxiDxV7hXvXxo0BCvtXXQOyqdidwD3zWrCQDCdxQ9afQPyyfdZkZOWY6KSjNpZzlnfETq1nMf%2BL%2BMojoEbARQkX8lDzUzQM%2FSjfk7tHwpJF5SD8LDqPvymM4I6CVyi2gCSuQ6j28gxitfHPMoS1qyWKSOWiTcIOwfv0trHow%2B5LUvQY6pgG3X5fvsDwOC1svd0lplBbzkMb0yUeq5dj8Aici%2FRVPMQyNRLr6Kv4F%2FOdIA4boixt6npuMyzFEu0dPddXsSQCoynVYYLy1wNRAYRO8HXo0RW14GvOsrLdZNlcgsq0oZ5cTpDW2jfvxbfc9NN4LbcmiwX3Yi99l9D7ABG6JywNO0%2BlRwuTJQMfxESzCSs4YUKG%2Br8v%2BtqIwRxh5sv2Lh1oJz3OfolYk&X-Amz-Signature=bab85252fef114d514157fd08c26a89055007d29e9a62a877da24f591ec5cea6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6RD2FC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHRmYDk03v%2BYXFGMFRa9ftbGGq73yj%2BWultRFZvzrmqtAiBKBbgKA6BqEHRzuiA2LTMGhTUhWYKavF7FvSN0tcFjEyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz49gJM2LWj%2F1Z5dnKtwD%2BYObBd01yZLdRmOsI5bgd1cMS%2BZc15vNwKI2vl5QxYlcNYJ0TvBRY4GG%2BWWH%2FGoGVCQki2vKwTynQMJys3iylxfEfGAGin2kEfRHURd39hAAbp7UHJBPyBlkxywqPnh4ATPwS%2BsONLG%2B5MMV9FTPAF0me%2BRPloR%2Fm2qBH1MtrCBp8ljQE3ZzXX5C4DmPmc3GeFa98uQAlFlEz%2B1%2FP%2BONy3AEb%2Br%2BOXfrkbMa1%2BRBeUUNSQN%2FosCd8Az%2F674wuuDSKKfnE%2Bn3AqE7x7Vtic%2BHMxEC1z00cfjFfKG0UN1yUYltJeXiR9WCFuIg3%2BDIdlVb4BybSA1HU4FB18sqpgQ9tgoJL1OsdNPvz5qRbiFNXkxl8Fp8WZ%2Ft1SrDlC%2FmRC%2FqZpIS%2FPZi9jc0jfPCzyp8L0quJepwULBeUkFLFQeB55NM2zmT%2BBRTTngV2pZpy0Xm1FRA3rVcFUeEKQ4Q8rbBoxiDxV7hXvXxo0BCvtXXQOyqdidwD3zWrCQDCdxQ9afQPyyfdZkZOWY6KSjNpZzlnfETq1nMf%2BL%2BMojoEbARQkX8lDzUzQM%2FSjfk7tHwpJF5SD8LDqPvymM4I6CVyi2gCSuQ6j28gxitfHPMoS1qyWKSOWiTcIOwfv0trHow%2B5LUvQY6pgG3X5fvsDwOC1svd0lplBbzkMb0yUeq5dj8Aici%2FRVPMQyNRLr6Kv4F%2FOdIA4boixt6npuMyzFEu0dPddXsSQCoynVYYLy1wNRAYRO8HXo0RW14GvOsrLdZNlcgsq0oZ5cTpDW2jfvxbfc9NN4LbcmiwX3Yi99l9D7ABG6JywNO0%2BlRwuTJQMfxESzCSs4YUKG%2Br8v%2BtqIwRxh5sv2Lh1oJz3OfolYk&X-Amz-Signature=8bee153517bc0da4877d51120a499d34f39ef06ab381311c3ae86111b3427d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
