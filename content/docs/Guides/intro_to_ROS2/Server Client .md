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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7I2RFM4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8b74qQ7hZtSR1Nnx35PH3HCPRXm7AxBZ3VkAJqh%2BxlAiAQuf%2BmcaTO8VpIuTJSqupGpohE1qK7AjMKn6YcnEnAGir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMBUFpSzrDDV4PqNY5KtwD7l9Uz%2FVRv5ZK4P9SSqlxf4MXaszrUrI1FZiXyNgrQsPh6avPl0Xx1ZJwWggPlYDFtjuwfjCI%2B%2B0BkXTqjZN3y1z5PPCt5cu01KFFUCuNHJMjWgEtjfwLFswF9UI2rFTYFMVlk7atYqE2f9OsxRHBhQLslavmpf%2BrbS9f4Z9yMn2QUjrH9Z6FIBYjgcVsMnywDLDOHaUC2TzeyZxQBqY52%2FsdkwmL8j8jxoeMPvuY9THFO0fY9QLbU1J5NsaiIHXnl%2BxpbNU80FRpP6RYokweo2y69RkCCiIGM82NxAZvwn7FIxvX67SZYVunNhIDJw4roikbsnwvnxV%2B%2B03cR1vA%2B8dd8qk%2FnWZCh0xjpKbdN5cBAlqMpi4YwB7lTu%2FJXMYuplIt6esEk9B%2B3qLV4XukGqNkrczSXn%2Bjr%2B8YpI8HthmupI3Z1T191C3fiWjNPEPsYG5d9zq3X6F7J0PxQagZfKuMIDeE5oknWUpUN%2Bj6vv3BNHogev6wBMyJXNlaD82k%2ByrsttMFGttoVHP6Nv4YMT92jwsfF1WodjjCrR6QX346fGKKhkfpqA9O%2FP3dv15Dcrwedb%2F1XSsKojFDFhkNr5lzanROpF8cAOol3eOCFGmPocyisD0xnIOAhtQwlO7rvQY6pgG4lyITK07fVNtrTHdOsXnrWiVtQhAjYL1CMRrHCkXWycxXATx8f6IAV5%2F57bTaDaYoU788BCJcCZkyauHryQfJOuQH1ejk0x3kX3DRpJMRCF%2FrU6jah%2FcA5wVD%2F5erH%2BWJ8bX%2F8XDmXqC%2FkBOhYWrGORQoS7%2BkPaglzdhE8Kd2MgbAiFQ8OZvEzoQLJNWeJ4lLfw4AOYiQDfhuod8gGsDNs3wHjHZU&X-Amz-Signature=15b5e490042de6bf1dbfcf3042bcc97662406a3ed8b4757f07afd4f705286f72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7I2RFM4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8b74qQ7hZtSR1Nnx35PH3HCPRXm7AxBZ3VkAJqh%2BxlAiAQuf%2BmcaTO8VpIuTJSqupGpohE1qK7AjMKn6YcnEnAGir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMBUFpSzrDDV4PqNY5KtwD7l9Uz%2FVRv5ZK4P9SSqlxf4MXaszrUrI1FZiXyNgrQsPh6avPl0Xx1ZJwWggPlYDFtjuwfjCI%2B%2B0BkXTqjZN3y1z5PPCt5cu01KFFUCuNHJMjWgEtjfwLFswF9UI2rFTYFMVlk7atYqE2f9OsxRHBhQLslavmpf%2BrbS9f4Z9yMn2QUjrH9Z6FIBYjgcVsMnywDLDOHaUC2TzeyZxQBqY52%2FsdkwmL8j8jxoeMPvuY9THFO0fY9QLbU1J5NsaiIHXnl%2BxpbNU80FRpP6RYokweo2y69RkCCiIGM82NxAZvwn7FIxvX67SZYVunNhIDJw4roikbsnwvnxV%2B%2B03cR1vA%2B8dd8qk%2FnWZCh0xjpKbdN5cBAlqMpi4YwB7lTu%2FJXMYuplIt6esEk9B%2B3qLV4XukGqNkrczSXn%2Bjr%2B8YpI8HthmupI3Z1T191C3fiWjNPEPsYG5d9zq3X6F7J0PxQagZfKuMIDeE5oknWUpUN%2Bj6vv3BNHogev6wBMyJXNlaD82k%2ByrsttMFGttoVHP6Nv4YMT92jwsfF1WodjjCrR6QX346fGKKhkfpqA9O%2FP3dv15Dcrwedb%2F1XSsKojFDFhkNr5lzanROpF8cAOol3eOCFGmPocyisD0xnIOAhtQwlO7rvQY6pgG4lyITK07fVNtrTHdOsXnrWiVtQhAjYL1CMRrHCkXWycxXATx8f6IAV5%2F57bTaDaYoU788BCJcCZkyauHryQfJOuQH1ejk0x3kX3DRpJMRCF%2FrU6jah%2FcA5wVD%2F5erH%2BWJ8bX%2F8XDmXqC%2FkBOhYWrGORQoS7%2BkPaglzdhE8Kd2MgbAiFQ8OZvEzoQLJNWeJ4lLfw4AOYiQDfhuod8gGsDNs3wHjHZU&X-Amz-Signature=d2bd7fd54bbd590bbea08da5c1183d24e7473ba6d60f94b5c9dd2527a6bfc1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7I2RFM4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8b74qQ7hZtSR1Nnx35PH3HCPRXm7AxBZ3VkAJqh%2BxlAiAQuf%2BmcaTO8VpIuTJSqupGpohE1qK7AjMKn6YcnEnAGir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMBUFpSzrDDV4PqNY5KtwD7l9Uz%2FVRv5ZK4P9SSqlxf4MXaszrUrI1FZiXyNgrQsPh6avPl0Xx1ZJwWggPlYDFtjuwfjCI%2B%2B0BkXTqjZN3y1z5PPCt5cu01KFFUCuNHJMjWgEtjfwLFswF9UI2rFTYFMVlk7atYqE2f9OsxRHBhQLslavmpf%2BrbS9f4Z9yMn2QUjrH9Z6FIBYjgcVsMnywDLDOHaUC2TzeyZxQBqY52%2FsdkwmL8j8jxoeMPvuY9THFO0fY9QLbU1J5NsaiIHXnl%2BxpbNU80FRpP6RYokweo2y69RkCCiIGM82NxAZvwn7FIxvX67SZYVunNhIDJw4roikbsnwvnxV%2B%2B03cR1vA%2B8dd8qk%2FnWZCh0xjpKbdN5cBAlqMpi4YwB7lTu%2FJXMYuplIt6esEk9B%2B3qLV4XukGqNkrczSXn%2Bjr%2B8YpI8HthmupI3Z1T191C3fiWjNPEPsYG5d9zq3X6F7J0PxQagZfKuMIDeE5oknWUpUN%2Bj6vv3BNHogev6wBMyJXNlaD82k%2ByrsttMFGttoVHP6Nv4YMT92jwsfF1WodjjCrR6QX346fGKKhkfpqA9O%2FP3dv15Dcrwedb%2F1XSsKojFDFhkNr5lzanROpF8cAOol3eOCFGmPocyisD0xnIOAhtQwlO7rvQY6pgG4lyITK07fVNtrTHdOsXnrWiVtQhAjYL1CMRrHCkXWycxXATx8f6IAV5%2F57bTaDaYoU788BCJcCZkyauHryQfJOuQH1ejk0x3kX3DRpJMRCF%2FrU6jah%2FcA5wVD%2F5erH%2BWJ8bX%2F8XDmXqC%2FkBOhYWrGORQoS7%2BkPaglzdhE8Kd2MgbAiFQ8OZvEzoQLJNWeJ4lLfw4AOYiQDfhuod8gGsDNs3wHjHZU&X-Amz-Signature=8a9dce5dae4e037aa37fd0c1f3b76825c5a247c48897499bc35a458236699162&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7I2RFM4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8b74qQ7hZtSR1Nnx35PH3HCPRXm7AxBZ3VkAJqh%2BxlAiAQuf%2BmcaTO8VpIuTJSqupGpohE1qK7AjMKn6YcnEnAGir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMBUFpSzrDDV4PqNY5KtwD7l9Uz%2FVRv5ZK4P9SSqlxf4MXaszrUrI1FZiXyNgrQsPh6avPl0Xx1ZJwWggPlYDFtjuwfjCI%2B%2B0BkXTqjZN3y1z5PPCt5cu01KFFUCuNHJMjWgEtjfwLFswF9UI2rFTYFMVlk7atYqE2f9OsxRHBhQLslavmpf%2BrbS9f4Z9yMn2QUjrH9Z6FIBYjgcVsMnywDLDOHaUC2TzeyZxQBqY52%2FsdkwmL8j8jxoeMPvuY9THFO0fY9QLbU1J5NsaiIHXnl%2BxpbNU80FRpP6RYokweo2y69RkCCiIGM82NxAZvwn7FIxvX67SZYVunNhIDJw4roikbsnwvnxV%2B%2B03cR1vA%2B8dd8qk%2FnWZCh0xjpKbdN5cBAlqMpi4YwB7lTu%2FJXMYuplIt6esEk9B%2B3qLV4XukGqNkrczSXn%2Bjr%2B8YpI8HthmupI3Z1T191C3fiWjNPEPsYG5d9zq3X6F7J0PxQagZfKuMIDeE5oknWUpUN%2Bj6vv3BNHogev6wBMyJXNlaD82k%2ByrsttMFGttoVHP6Nv4YMT92jwsfF1WodjjCrR6QX346fGKKhkfpqA9O%2FP3dv15Dcrwedb%2F1XSsKojFDFhkNr5lzanROpF8cAOol3eOCFGmPocyisD0xnIOAhtQwlO7rvQY6pgG4lyITK07fVNtrTHdOsXnrWiVtQhAjYL1CMRrHCkXWycxXATx8f6IAV5%2F57bTaDaYoU788BCJcCZkyauHryQfJOuQH1ejk0x3kX3DRpJMRCF%2FrU6jah%2FcA5wVD%2F5erH%2BWJ8bX%2F8XDmXqC%2FkBOhYWrGORQoS7%2BkPaglzdhE8Kd2MgbAiFQ8OZvEzoQLJNWeJ4lLfw4AOYiQDfhuod8gGsDNs3wHjHZU&X-Amz-Signature=1dd1ca24f594fdec17f36a320c1473fb18cfae9eba5dad348472365adff52806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7I2RFM4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8b74qQ7hZtSR1Nnx35PH3HCPRXm7AxBZ3VkAJqh%2BxlAiAQuf%2BmcaTO8VpIuTJSqupGpohE1qK7AjMKn6YcnEnAGir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMBUFpSzrDDV4PqNY5KtwD7l9Uz%2FVRv5ZK4P9SSqlxf4MXaszrUrI1FZiXyNgrQsPh6avPl0Xx1ZJwWggPlYDFtjuwfjCI%2B%2B0BkXTqjZN3y1z5PPCt5cu01KFFUCuNHJMjWgEtjfwLFswF9UI2rFTYFMVlk7atYqE2f9OsxRHBhQLslavmpf%2BrbS9f4Z9yMn2QUjrH9Z6FIBYjgcVsMnywDLDOHaUC2TzeyZxQBqY52%2FsdkwmL8j8jxoeMPvuY9THFO0fY9QLbU1J5NsaiIHXnl%2BxpbNU80FRpP6RYokweo2y69RkCCiIGM82NxAZvwn7FIxvX67SZYVunNhIDJw4roikbsnwvnxV%2B%2B03cR1vA%2B8dd8qk%2FnWZCh0xjpKbdN5cBAlqMpi4YwB7lTu%2FJXMYuplIt6esEk9B%2B3qLV4XukGqNkrczSXn%2Bjr%2B8YpI8HthmupI3Z1T191C3fiWjNPEPsYG5d9zq3X6F7J0PxQagZfKuMIDeE5oknWUpUN%2Bj6vv3BNHogev6wBMyJXNlaD82k%2ByrsttMFGttoVHP6Nv4YMT92jwsfF1WodjjCrR6QX346fGKKhkfpqA9O%2FP3dv15Dcrwedb%2F1XSsKojFDFhkNr5lzanROpF8cAOol3eOCFGmPocyisD0xnIOAhtQwlO7rvQY6pgG4lyITK07fVNtrTHdOsXnrWiVtQhAjYL1CMRrHCkXWycxXATx8f6IAV5%2F57bTaDaYoU788BCJcCZkyauHryQfJOuQH1ejk0x3kX3DRpJMRCF%2FrU6jah%2FcA5wVD%2F5erH%2BWJ8bX%2F8XDmXqC%2FkBOhYWrGORQoS7%2BkPaglzdhE8Kd2MgbAiFQ8OZvEzoQLJNWeJ4lLfw4AOYiQDfhuod8gGsDNs3wHjHZU&X-Amz-Signature=2fd7e294b7c67fc525d35f6101cde6498a3cef716f9482fa48b848085b7ed86c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
