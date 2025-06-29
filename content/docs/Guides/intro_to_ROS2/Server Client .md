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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBXRWN4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwsCh0J1EynK%2FDsVL8TA6wFO6WaIjaL6zabXC1pb7CbQIgbct8hE2rFs6FQ2a238NmI7qFrmqONmhoDmO2nypgkbAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRhAblrcF5HkTipvyrcA0ykBKjCevyIcpHupiLdCmr5oIfZwI0Tv8qz2q1H%2FEuMtdhcCOohsyWhnZCQGhf7vIi188%2BbPvYkpNsB5RXslmlEo50ktPAfDM%2Ftmqy2WPXs33CDPsT3jDf56Ie%2BteHRzSmw6nwbg%2BAyKEqiXqkgtKgkFdzsy8AIalLVUPQNx9rROeYXnv8Hq6q8u6w9tfsLL48GXTfsp67O0OS5I1oZF0KGEPUSkWfptl3SydaO%2F9%2Fc5ZBkLfJdMmY6Yi2%2FnVACAz615pr1tn2SU2QWQ07iKiRwdZ2wafua%2F1KQwIKIg6Kyl1%2FMvNzLpFPAI94C00F61O8hqcaqGetoZdwfVqN4fQ82%2FIUs0kZy0fFBP7tim222icQL2jUFGiJir0HwI7csGWbfarFJrbUM7JkIDFOvllMhrVKOmdKqJ%2Fp1k0Kl5jgcsd25bOy2R2KZl4WekGfzPRqvzcn7Tx4n0UUrZtG%2BhxDEqan%2FxsNZaBEz4wSG4AxNPjiNSKFYPA5X5fYjPFQaKrtUtDvgGOsNZ7qHLmBBUBsYoLT7erc%2BtK1CEPHX9%2FC%2Bsb9FxOp2JN0oNy4HzVnxbzRDDBwa3QMaTENT3M6HKnKoKSS61iBcue%2FiDzjrbyvP7oIUdjknQ03Rsj45MMiAg8MGOqUBeE5DGvS4Ju3VI6P9yukwqyd%2BGzTIq6BFvn%2Fj%2BwJ9%2BQ1pWazQsRSYYqkGV2Lyb00ZlpU1gDoRjGseO30L4S%2BalG3RrcMM353Q6zOfvKsVjw%2Bg3R8svAthTvt6zH4tLciJscfgeAxdCb7x95ci69sVNn3O9qT90TLUqRGMTMUQKYix8AmJU8Rqnj4F632My7Quqv41kO8cjRg9aADm2Xfj6iBqBNvY&X-Amz-Signature=b0a2585b7ddbf5e801324fd65f0784464238260beb2222487c629691e6da4f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBXRWN4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwsCh0J1EynK%2FDsVL8TA6wFO6WaIjaL6zabXC1pb7CbQIgbct8hE2rFs6FQ2a238NmI7qFrmqONmhoDmO2nypgkbAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRhAblrcF5HkTipvyrcA0ykBKjCevyIcpHupiLdCmr5oIfZwI0Tv8qz2q1H%2FEuMtdhcCOohsyWhnZCQGhf7vIi188%2BbPvYkpNsB5RXslmlEo50ktPAfDM%2Ftmqy2WPXs33CDPsT3jDf56Ie%2BteHRzSmw6nwbg%2BAyKEqiXqkgtKgkFdzsy8AIalLVUPQNx9rROeYXnv8Hq6q8u6w9tfsLL48GXTfsp67O0OS5I1oZF0KGEPUSkWfptl3SydaO%2F9%2Fc5ZBkLfJdMmY6Yi2%2FnVACAz615pr1tn2SU2QWQ07iKiRwdZ2wafua%2F1KQwIKIg6Kyl1%2FMvNzLpFPAI94C00F61O8hqcaqGetoZdwfVqN4fQ82%2FIUs0kZy0fFBP7tim222icQL2jUFGiJir0HwI7csGWbfarFJrbUM7JkIDFOvllMhrVKOmdKqJ%2Fp1k0Kl5jgcsd25bOy2R2KZl4WekGfzPRqvzcn7Tx4n0UUrZtG%2BhxDEqan%2FxsNZaBEz4wSG4AxNPjiNSKFYPA5X5fYjPFQaKrtUtDvgGOsNZ7qHLmBBUBsYoLT7erc%2BtK1CEPHX9%2FC%2Bsb9FxOp2JN0oNy4HzVnxbzRDDBwa3QMaTENT3M6HKnKoKSS61iBcue%2FiDzjrbyvP7oIUdjknQ03Rsj45MMiAg8MGOqUBeE5DGvS4Ju3VI6P9yukwqyd%2BGzTIq6BFvn%2Fj%2BwJ9%2BQ1pWazQsRSYYqkGV2Lyb00ZlpU1gDoRjGseO30L4S%2BalG3RrcMM353Q6zOfvKsVjw%2Bg3R8svAthTvt6zH4tLciJscfgeAxdCb7x95ci69sVNn3O9qT90TLUqRGMTMUQKYix8AmJU8Rqnj4F632My7Quqv41kO8cjRg9aADm2Xfj6iBqBNvY&X-Amz-Signature=6ee925cefdb27aff7c2d975ade482e1880fddaead56501dc402bf7ab749d0eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBXRWN4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwsCh0J1EynK%2FDsVL8TA6wFO6WaIjaL6zabXC1pb7CbQIgbct8hE2rFs6FQ2a238NmI7qFrmqONmhoDmO2nypgkbAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRhAblrcF5HkTipvyrcA0ykBKjCevyIcpHupiLdCmr5oIfZwI0Tv8qz2q1H%2FEuMtdhcCOohsyWhnZCQGhf7vIi188%2BbPvYkpNsB5RXslmlEo50ktPAfDM%2Ftmqy2WPXs33CDPsT3jDf56Ie%2BteHRzSmw6nwbg%2BAyKEqiXqkgtKgkFdzsy8AIalLVUPQNx9rROeYXnv8Hq6q8u6w9tfsLL48GXTfsp67O0OS5I1oZF0KGEPUSkWfptl3SydaO%2F9%2Fc5ZBkLfJdMmY6Yi2%2FnVACAz615pr1tn2SU2QWQ07iKiRwdZ2wafua%2F1KQwIKIg6Kyl1%2FMvNzLpFPAI94C00F61O8hqcaqGetoZdwfVqN4fQ82%2FIUs0kZy0fFBP7tim222icQL2jUFGiJir0HwI7csGWbfarFJrbUM7JkIDFOvllMhrVKOmdKqJ%2Fp1k0Kl5jgcsd25bOy2R2KZl4WekGfzPRqvzcn7Tx4n0UUrZtG%2BhxDEqan%2FxsNZaBEz4wSG4AxNPjiNSKFYPA5X5fYjPFQaKrtUtDvgGOsNZ7qHLmBBUBsYoLT7erc%2BtK1CEPHX9%2FC%2Bsb9FxOp2JN0oNy4HzVnxbzRDDBwa3QMaTENT3M6HKnKoKSS61iBcue%2FiDzjrbyvP7oIUdjknQ03Rsj45MMiAg8MGOqUBeE5DGvS4Ju3VI6P9yukwqyd%2BGzTIq6BFvn%2Fj%2BwJ9%2BQ1pWazQsRSYYqkGV2Lyb00ZlpU1gDoRjGseO30L4S%2BalG3RrcMM353Q6zOfvKsVjw%2Bg3R8svAthTvt6zH4tLciJscfgeAxdCb7x95ci69sVNn3O9qT90TLUqRGMTMUQKYix8AmJU8Rqnj4F632My7Quqv41kO8cjRg9aADm2Xfj6iBqBNvY&X-Amz-Signature=632aa6ed1163f8270366ee693cce8a4295f22a73651ba24ee9d0789d8626a520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBXRWN4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwsCh0J1EynK%2FDsVL8TA6wFO6WaIjaL6zabXC1pb7CbQIgbct8hE2rFs6FQ2a238NmI7qFrmqONmhoDmO2nypgkbAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRhAblrcF5HkTipvyrcA0ykBKjCevyIcpHupiLdCmr5oIfZwI0Tv8qz2q1H%2FEuMtdhcCOohsyWhnZCQGhf7vIi188%2BbPvYkpNsB5RXslmlEo50ktPAfDM%2Ftmqy2WPXs33CDPsT3jDf56Ie%2BteHRzSmw6nwbg%2BAyKEqiXqkgtKgkFdzsy8AIalLVUPQNx9rROeYXnv8Hq6q8u6w9tfsLL48GXTfsp67O0OS5I1oZF0KGEPUSkWfptl3SydaO%2F9%2Fc5ZBkLfJdMmY6Yi2%2FnVACAz615pr1tn2SU2QWQ07iKiRwdZ2wafua%2F1KQwIKIg6Kyl1%2FMvNzLpFPAI94C00F61O8hqcaqGetoZdwfVqN4fQ82%2FIUs0kZy0fFBP7tim222icQL2jUFGiJir0HwI7csGWbfarFJrbUM7JkIDFOvllMhrVKOmdKqJ%2Fp1k0Kl5jgcsd25bOy2R2KZl4WekGfzPRqvzcn7Tx4n0UUrZtG%2BhxDEqan%2FxsNZaBEz4wSG4AxNPjiNSKFYPA5X5fYjPFQaKrtUtDvgGOsNZ7qHLmBBUBsYoLT7erc%2BtK1CEPHX9%2FC%2Bsb9FxOp2JN0oNy4HzVnxbzRDDBwa3QMaTENT3M6HKnKoKSS61iBcue%2FiDzjrbyvP7oIUdjknQ03Rsj45MMiAg8MGOqUBeE5DGvS4Ju3VI6P9yukwqyd%2BGzTIq6BFvn%2Fj%2BwJ9%2BQ1pWazQsRSYYqkGV2Lyb00ZlpU1gDoRjGseO30L4S%2BalG3RrcMM353Q6zOfvKsVjw%2Bg3R8svAthTvt6zH4tLciJscfgeAxdCb7x95ci69sVNn3O9qT90TLUqRGMTMUQKYix8AmJU8Rqnj4F632My7Quqv41kO8cjRg9aADm2Xfj6iBqBNvY&X-Amz-Signature=c56593e48ee61fe395fb9bd9d52fea00d22976f3bb9aaf42634b3a80e0225e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBXRWN4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwsCh0J1EynK%2FDsVL8TA6wFO6WaIjaL6zabXC1pb7CbQIgbct8hE2rFs6FQ2a238NmI7qFrmqONmhoDmO2nypgkbAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRhAblrcF5HkTipvyrcA0ykBKjCevyIcpHupiLdCmr5oIfZwI0Tv8qz2q1H%2FEuMtdhcCOohsyWhnZCQGhf7vIi188%2BbPvYkpNsB5RXslmlEo50ktPAfDM%2Ftmqy2WPXs33CDPsT3jDf56Ie%2BteHRzSmw6nwbg%2BAyKEqiXqkgtKgkFdzsy8AIalLVUPQNx9rROeYXnv8Hq6q8u6w9tfsLL48GXTfsp67O0OS5I1oZF0KGEPUSkWfptl3SydaO%2F9%2Fc5ZBkLfJdMmY6Yi2%2FnVACAz615pr1tn2SU2QWQ07iKiRwdZ2wafua%2F1KQwIKIg6Kyl1%2FMvNzLpFPAI94C00F61O8hqcaqGetoZdwfVqN4fQ82%2FIUs0kZy0fFBP7tim222icQL2jUFGiJir0HwI7csGWbfarFJrbUM7JkIDFOvllMhrVKOmdKqJ%2Fp1k0Kl5jgcsd25bOy2R2KZl4WekGfzPRqvzcn7Tx4n0UUrZtG%2BhxDEqan%2FxsNZaBEz4wSG4AxNPjiNSKFYPA5X5fYjPFQaKrtUtDvgGOsNZ7qHLmBBUBsYoLT7erc%2BtK1CEPHX9%2FC%2Bsb9FxOp2JN0oNy4HzVnxbzRDDBwa3QMaTENT3M6HKnKoKSS61iBcue%2FiDzjrbyvP7oIUdjknQ03Rsj45MMiAg8MGOqUBeE5DGvS4Ju3VI6P9yukwqyd%2BGzTIq6BFvn%2Fj%2BwJ9%2BQ1pWazQsRSYYqkGV2Lyb00ZlpU1gDoRjGseO30L4S%2BalG3RrcMM353Q6zOfvKsVjw%2Bg3R8svAthTvt6zH4tLciJscfgeAxdCb7x95ci69sVNn3O9qT90TLUqRGMTMUQKYix8AmJU8Rqnj4F632My7Quqv41kO8cjRg9aADm2Xfj6iBqBNvY&X-Amz-Signature=608cc383b2100699e038ffd32d73bf86672e37133af9cbb158327d2d6a299e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
