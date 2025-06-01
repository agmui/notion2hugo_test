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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKZOKM4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3746Z4HmdiMVTCcJElPP8vKO1ZfDFboGJ1WyPEj4DlAIgYgHdehay9zaSQ%2Bx99sYk7fA%2BBhZT%2F7e6sekgmTuUWwIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7M0sIA8ewggsHuzircA65q3FdQNl1uZqj6orRfiKoYlwk0NxU7vX%2BaF%2FrYS4HUHEpgCewpKsCa0bWIapULZPNBtym8V50K5lkTfJoYGVJTBgXA2sqzVK7s4zv6kXgCZLU%2FP%2FEMLLtQE6L7THE1qMmFO33QmutGAc%2F5TkmFV8r%2BwIjQriyE5RqJVc3m1VcJ1OVvce7s8sp46NgHBGnULG5DhCG0IT7sm4h89luIqBE4GYSn9ZY7zH%2Bq9mlw%2F8mBgxEUL4mKbq98abJDeFsXLzDeYjDvJ15cz%2BLXWXZSzzKvd1Qtz3HJMK3CcIoNZ4Z%2BbQNe6sjgo7sh5sD8z%2FqOoog3h6BXnzWcxCqCVg1PjUXVDJtsGaTlAjA%2FTB6lGdvC%2FBE3dqSNHg9zKWltCodxB%2BeVAMsCpO0t8Fb21k%2FZ%2BcWkCq0ndx7SZAaoMk4D0tjCQvOolBv5VgUWNiBwFA5MgrY0Xn%2Fw%2BAYrF4WF0UqV%2FFS0sGXNwcjgz8gnmD%2BPsYF9K%2BTA5nvL%2B7ARhk1bpc2zY9gCzmlOtZ1Uy8p%2B5ag0i5pPGgD1JMcAf09vi%2BWRY6EjJ%2FAW6ghahp07NVYsdxabjr%2FYJ6ttzTOYi1tZ1Ug0GllCPJV88rThes6yiz6PKDyZMJYogxrqmKCnH%2FcVMMKe7sEGOqUBp00t7cJPSvW5VbaYkhM%2BUQZVHRNa0HacaObkGV7NCwfzb0%2BRpDMwYZ9d8R7MlvSkzMhhIJ8%2Fcg4wfbDymw7mpbuRqkTArqp8yHzuArDNsNBNc32G40PzA0cn%2Bap%2BtJ6DTqywaJBG3bPlnzejOCLj970ZBg7LdTNN%2BDiYXi84ySookuwAEp4bIf3q4J%2Bg5g8pSbA64OukoFlnjFx8mrX1ndm%2FTXRR&X-Amz-Signature=eb603aba542faf27045a6fe6870345bf0372be19a5bd9209d65948d327f95df8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKZOKM4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3746Z4HmdiMVTCcJElPP8vKO1ZfDFboGJ1WyPEj4DlAIgYgHdehay9zaSQ%2Bx99sYk7fA%2BBhZT%2F7e6sekgmTuUWwIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7M0sIA8ewggsHuzircA65q3FdQNl1uZqj6orRfiKoYlwk0NxU7vX%2BaF%2FrYS4HUHEpgCewpKsCa0bWIapULZPNBtym8V50K5lkTfJoYGVJTBgXA2sqzVK7s4zv6kXgCZLU%2FP%2FEMLLtQE6L7THE1qMmFO33QmutGAc%2F5TkmFV8r%2BwIjQriyE5RqJVc3m1VcJ1OVvce7s8sp46NgHBGnULG5DhCG0IT7sm4h89luIqBE4GYSn9ZY7zH%2Bq9mlw%2F8mBgxEUL4mKbq98abJDeFsXLzDeYjDvJ15cz%2BLXWXZSzzKvd1Qtz3HJMK3CcIoNZ4Z%2BbQNe6sjgo7sh5sD8z%2FqOoog3h6BXnzWcxCqCVg1PjUXVDJtsGaTlAjA%2FTB6lGdvC%2FBE3dqSNHg9zKWltCodxB%2BeVAMsCpO0t8Fb21k%2FZ%2BcWkCq0ndx7SZAaoMk4D0tjCQvOolBv5VgUWNiBwFA5MgrY0Xn%2Fw%2BAYrF4WF0UqV%2FFS0sGXNwcjgz8gnmD%2BPsYF9K%2BTA5nvL%2B7ARhk1bpc2zY9gCzmlOtZ1Uy8p%2B5ag0i5pPGgD1JMcAf09vi%2BWRY6EjJ%2FAW6ghahp07NVYsdxabjr%2FYJ6ttzTOYi1tZ1Ug0GllCPJV88rThes6yiz6PKDyZMJYogxrqmKCnH%2FcVMMKe7sEGOqUBp00t7cJPSvW5VbaYkhM%2BUQZVHRNa0HacaObkGV7NCwfzb0%2BRpDMwYZ9d8R7MlvSkzMhhIJ8%2Fcg4wfbDymw7mpbuRqkTArqp8yHzuArDNsNBNc32G40PzA0cn%2Bap%2BtJ6DTqywaJBG3bPlnzejOCLj970ZBg7LdTNN%2BDiYXi84ySookuwAEp4bIf3q4J%2Bg5g8pSbA64OukoFlnjFx8mrX1ndm%2FTXRR&X-Amz-Signature=323b0ee9bff6af24b36e2a73145b3635f09399ceff49712b479c6567769411af&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKZOKM4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3746Z4HmdiMVTCcJElPP8vKO1ZfDFboGJ1WyPEj4DlAIgYgHdehay9zaSQ%2Bx99sYk7fA%2BBhZT%2F7e6sekgmTuUWwIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7M0sIA8ewggsHuzircA65q3FdQNl1uZqj6orRfiKoYlwk0NxU7vX%2BaF%2FrYS4HUHEpgCewpKsCa0bWIapULZPNBtym8V50K5lkTfJoYGVJTBgXA2sqzVK7s4zv6kXgCZLU%2FP%2FEMLLtQE6L7THE1qMmFO33QmutGAc%2F5TkmFV8r%2BwIjQriyE5RqJVc3m1VcJ1OVvce7s8sp46NgHBGnULG5DhCG0IT7sm4h89luIqBE4GYSn9ZY7zH%2Bq9mlw%2F8mBgxEUL4mKbq98abJDeFsXLzDeYjDvJ15cz%2BLXWXZSzzKvd1Qtz3HJMK3CcIoNZ4Z%2BbQNe6sjgo7sh5sD8z%2FqOoog3h6BXnzWcxCqCVg1PjUXVDJtsGaTlAjA%2FTB6lGdvC%2FBE3dqSNHg9zKWltCodxB%2BeVAMsCpO0t8Fb21k%2FZ%2BcWkCq0ndx7SZAaoMk4D0tjCQvOolBv5VgUWNiBwFA5MgrY0Xn%2Fw%2BAYrF4WF0UqV%2FFS0sGXNwcjgz8gnmD%2BPsYF9K%2BTA5nvL%2B7ARhk1bpc2zY9gCzmlOtZ1Uy8p%2B5ag0i5pPGgD1JMcAf09vi%2BWRY6EjJ%2FAW6ghahp07NVYsdxabjr%2FYJ6ttzTOYi1tZ1Ug0GllCPJV88rThes6yiz6PKDyZMJYogxrqmKCnH%2FcVMMKe7sEGOqUBp00t7cJPSvW5VbaYkhM%2BUQZVHRNa0HacaObkGV7NCwfzb0%2BRpDMwYZ9d8R7MlvSkzMhhIJ8%2Fcg4wfbDymw7mpbuRqkTArqp8yHzuArDNsNBNc32G40PzA0cn%2Bap%2BtJ6DTqywaJBG3bPlnzejOCLj970ZBg7LdTNN%2BDiYXi84ySookuwAEp4bIf3q4J%2Bg5g8pSbA64OukoFlnjFx8mrX1ndm%2FTXRR&X-Amz-Signature=96415f467b1b62ec08cf4b8c5169db23cedfe7a56b7ca1092608bbc3a09489a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKZOKM4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3746Z4HmdiMVTCcJElPP8vKO1ZfDFboGJ1WyPEj4DlAIgYgHdehay9zaSQ%2Bx99sYk7fA%2BBhZT%2F7e6sekgmTuUWwIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7M0sIA8ewggsHuzircA65q3FdQNl1uZqj6orRfiKoYlwk0NxU7vX%2BaF%2FrYS4HUHEpgCewpKsCa0bWIapULZPNBtym8V50K5lkTfJoYGVJTBgXA2sqzVK7s4zv6kXgCZLU%2FP%2FEMLLtQE6L7THE1qMmFO33QmutGAc%2F5TkmFV8r%2BwIjQriyE5RqJVc3m1VcJ1OVvce7s8sp46NgHBGnULG5DhCG0IT7sm4h89luIqBE4GYSn9ZY7zH%2Bq9mlw%2F8mBgxEUL4mKbq98abJDeFsXLzDeYjDvJ15cz%2BLXWXZSzzKvd1Qtz3HJMK3CcIoNZ4Z%2BbQNe6sjgo7sh5sD8z%2FqOoog3h6BXnzWcxCqCVg1PjUXVDJtsGaTlAjA%2FTB6lGdvC%2FBE3dqSNHg9zKWltCodxB%2BeVAMsCpO0t8Fb21k%2FZ%2BcWkCq0ndx7SZAaoMk4D0tjCQvOolBv5VgUWNiBwFA5MgrY0Xn%2Fw%2BAYrF4WF0UqV%2FFS0sGXNwcjgz8gnmD%2BPsYF9K%2BTA5nvL%2B7ARhk1bpc2zY9gCzmlOtZ1Uy8p%2B5ag0i5pPGgD1JMcAf09vi%2BWRY6EjJ%2FAW6ghahp07NVYsdxabjr%2FYJ6ttzTOYi1tZ1Ug0GllCPJV88rThes6yiz6PKDyZMJYogxrqmKCnH%2FcVMMKe7sEGOqUBp00t7cJPSvW5VbaYkhM%2BUQZVHRNa0HacaObkGV7NCwfzb0%2BRpDMwYZ9d8R7MlvSkzMhhIJ8%2Fcg4wfbDymw7mpbuRqkTArqp8yHzuArDNsNBNc32G40PzA0cn%2Bap%2BtJ6DTqywaJBG3bPlnzejOCLj970ZBg7LdTNN%2BDiYXi84ySookuwAEp4bIf3q4J%2Bg5g8pSbA64OukoFlnjFx8mrX1ndm%2FTXRR&X-Amz-Signature=dd624bf139ee1c7353077483edc6ceb0d92cb224f5773a6ca9ae7621cce3b377&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKZOKM4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3746Z4HmdiMVTCcJElPP8vKO1ZfDFboGJ1WyPEj4DlAIgYgHdehay9zaSQ%2Bx99sYk7fA%2BBhZT%2F7e6sekgmTuUWwIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7M0sIA8ewggsHuzircA65q3FdQNl1uZqj6orRfiKoYlwk0NxU7vX%2BaF%2FrYS4HUHEpgCewpKsCa0bWIapULZPNBtym8V50K5lkTfJoYGVJTBgXA2sqzVK7s4zv6kXgCZLU%2FP%2FEMLLtQE6L7THE1qMmFO33QmutGAc%2F5TkmFV8r%2BwIjQriyE5RqJVc3m1VcJ1OVvce7s8sp46NgHBGnULG5DhCG0IT7sm4h89luIqBE4GYSn9ZY7zH%2Bq9mlw%2F8mBgxEUL4mKbq98abJDeFsXLzDeYjDvJ15cz%2BLXWXZSzzKvd1Qtz3HJMK3CcIoNZ4Z%2BbQNe6sjgo7sh5sD8z%2FqOoog3h6BXnzWcxCqCVg1PjUXVDJtsGaTlAjA%2FTB6lGdvC%2FBE3dqSNHg9zKWltCodxB%2BeVAMsCpO0t8Fb21k%2FZ%2BcWkCq0ndx7SZAaoMk4D0tjCQvOolBv5VgUWNiBwFA5MgrY0Xn%2Fw%2BAYrF4WF0UqV%2FFS0sGXNwcjgz8gnmD%2BPsYF9K%2BTA5nvL%2B7ARhk1bpc2zY9gCzmlOtZ1Uy8p%2B5ag0i5pPGgD1JMcAf09vi%2BWRY6EjJ%2FAW6ghahp07NVYsdxabjr%2FYJ6ttzTOYi1tZ1Ug0GllCPJV88rThes6yiz6PKDyZMJYogxrqmKCnH%2FcVMMKe7sEGOqUBp00t7cJPSvW5VbaYkhM%2BUQZVHRNa0HacaObkGV7NCwfzb0%2BRpDMwYZ9d8R7MlvSkzMhhIJ8%2Fcg4wfbDymw7mpbuRqkTArqp8yHzuArDNsNBNc32G40PzA0cn%2Bap%2BtJ6DTqywaJBG3bPlnzejOCLj970ZBg7LdTNN%2BDiYXi84ySookuwAEp4bIf3q4J%2Bg5g8pSbA64OukoFlnjFx8mrX1ndm%2FTXRR&X-Amz-Signature=89132a31d62079e8c6571e208c2c4fbc22ce9a8c69f61f9152400598d6d9942e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
