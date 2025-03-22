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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWI7FQVB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD5%2Fs%2BW3vc031%2FuxeGw7sS%2BIMhKvyBYX%2FpOAPI1tGbLqAIgOTvsLi5SoTxdw9gEFlRGMECa64xFyNLBm3k6FiUfq8sqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghW9%2FaDXkwLnlleircA7jfXOgDrSEtYosdVZnnnDUzA2xh99C6pJfs74eIQBOx2IucA0%2FA4DtQ%2FxnV1%2FY1rQHTcMqqossxdWwZ2aDGbVSHFinjY6PRms6tkt8Oc%2Fx2FQFqrmJ94bT2Fj%2B5qh%2BGAMyO8vSVy3i5B8ww9F1WbAXHeKrW7ifB4Ng6r40f7WTQU%2BTHlKABfm4YiBIQ%2BE4FVjipjBiTpy5JhoplbaZoWF%2BWz7spZqF2yL%2BZiWDxADF7oXQdA3dOo%2BoaKWuIM%2FDnMbupaTkpZhmiRHUN%2BL6MPx9iQ%2FwLBqE8rZDEI%2Fge%2FbQQtK2lD4oIRJJRPRZIP3nPTFBhKGHSeuhfaDRyVKUNfLv0XPO1u6SKZr%2BNdRxxKCUVDXo%2B0G%2BYIAgMp%2FJLwhFPp7lqJyZwK1jg0iCfl7y0ti1il8%2Fwj%2FsXbMeTeEDJrp%2FXnBLaFL6%2FKKrAmL01hifwel3idVnkkSh3Jd6crhNaSqVBspYCFHgMH7CgDGs1fv2eRh1pTACSGZOpN%2B%2BKL5Tb32fpR8vIpz8ouhvD2GjKk78IasWCg%2FvnglOHn2BN4psD4kNOV3bsyBKkSWPXYPj6QkHXkGrWQv77HEUCBbSn5nx2UX92RN0fTc84DH1tn1RLuTd7tCSKoicygnkIMLu2%2FL4GOqUBM8RMWluzDgULfDw%2BSu1BfKEPJDEjFoVL5SWm%2BaswERmT3bmB%2B%2BHCw2Y7LcttJi7Yz0wYe0kxy1dsDAH%2B7bBaQpPIcM3inQBvvpkzt3R6OutNixcSiL81NfH3HPKKV2UnY%2B3H8E3vgtdUQ2eBofHXJE0QDE3FLJChqh4OMkDLUZgqJd6PAJQUHJTLIUJmr%2B0BmcUfMuWbN3RqxLOYmyXpFgelRnZs&X-Amz-Signature=4d8c35f19c01306e7a6c9bb90bee8a8996129faddd2dee089e77eba21c91ce6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWI7FQVB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD5%2Fs%2BW3vc031%2FuxeGw7sS%2BIMhKvyBYX%2FpOAPI1tGbLqAIgOTvsLi5SoTxdw9gEFlRGMECa64xFyNLBm3k6FiUfq8sqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghW9%2FaDXkwLnlleircA7jfXOgDrSEtYosdVZnnnDUzA2xh99C6pJfs74eIQBOx2IucA0%2FA4DtQ%2FxnV1%2FY1rQHTcMqqossxdWwZ2aDGbVSHFinjY6PRms6tkt8Oc%2Fx2FQFqrmJ94bT2Fj%2B5qh%2BGAMyO8vSVy3i5B8ww9F1WbAXHeKrW7ifB4Ng6r40f7WTQU%2BTHlKABfm4YiBIQ%2BE4FVjipjBiTpy5JhoplbaZoWF%2BWz7spZqF2yL%2BZiWDxADF7oXQdA3dOo%2BoaKWuIM%2FDnMbupaTkpZhmiRHUN%2BL6MPx9iQ%2FwLBqE8rZDEI%2Fge%2FbQQtK2lD4oIRJJRPRZIP3nPTFBhKGHSeuhfaDRyVKUNfLv0XPO1u6SKZr%2BNdRxxKCUVDXo%2B0G%2BYIAgMp%2FJLwhFPp7lqJyZwK1jg0iCfl7y0ti1il8%2Fwj%2FsXbMeTeEDJrp%2FXnBLaFL6%2FKKrAmL01hifwel3idVnkkSh3Jd6crhNaSqVBspYCFHgMH7CgDGs1fv2eRh1pTACSGZOpN%2B%2BKL5Tb32fpR8vIpz8ouhvD2GjKk78IasWCg%2FvnglOHn2BN4psD4kNOV3bsyBKkSWPXYPj6QkHXkGrWQv77HEUCBbSn5nx2UX92RN0fTc84DH1tn1RLuTd7tCSKoicygnkIMLu2%2FL4GOqUBM8RMWluzDgULfDw%2BSu1BfKEPJDEjFoVL5SWm%2BaswERmT3bmB%2B%2BHCw2Y7LcttJi7Yz0wYe0kxy1dsDAH%2B7bBaQpPIcM3inQBvvpkzt3R6OutNixcSiL81NfH3HPKKV2UnY%2B3H8E3vgtdUQ2eBofHXJE0QDE3FLJChqh4OMkDLUZgqJd6PAJQUHJTLIUJmr%2B0BmcUfMuWbN3RqxLOYmyXpFgelRnZs&X-Amz-Signature=7b22cc5ec36b6da7f79131ce61c42609b2bee56a9fcc02cd7c15eb822495bc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWI7FQVB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD5%2Fs%2BW3vc031%2FuxeGw7sS%2BIMhKvyBYX%2FpOAPI1tGbLqAIgOTvsLi5SoTxdw9gEFlRGMECa64xFyNLBm3k6FiUfq8sqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghW9%2FaDXkwLnlleircA7jfXOgDrSEtYosdVZnnnDUzA2xh99C6pJfs74eIQBOx2IucA0%2FA4DtQ%2FxnV1%2FY1rQHTcMqqossxdWwZ2aDGbVSHFinjY6PRms6tkt8Oc%2Fx2FQFqrmJ94bT2Fj%2B5qh%2BGAMyO8vSVy3i5B8ww9F1WbAXHeKrW7ifB4Ng6r40f7WTQU%2BTHlKABfm4YiBIQ%2BE4FVjipjBiTpy5JhoplbaZoWF%2BWz7spZqF2yL%2BZiWDxADF7oXQdA3dOo%2BoaKWuIM%2FDnMbupaTkpZhmiRHUN%2BL6MPx9iQ%2FwLBqE8rZDEI%2Fge%2FbQQtK2lD4oIRJJRPRZIP3nPTFBhKGHSeuhfaDRyVKUNfLv0XPO1u6SKZr%2BNdRxxKCUVDXo%2B0G%2BYIAgMp%2FJLwhFPp7lqJyZwK1jg0iCfl7y0ti1il8%2Fwj%2FsXbMeTeEDJrp%2FXnBLaFL6%2FKKrAmL01hifwel3idVnkkSh3Jd6crhNaSqVBspYCFHgMH7CgDGs1fv2eRh1pTACSGZOpN%2B%2BKL5Tb32fpR8vIpz8ouhvD2GjKk78IasWCg%2FvnglOHn2BN4psD4kNOV3bsyBKkSWPXYPj6QkHXkGrWQv77HEUCBbSn5nx2UX92RN0fTc84DH1tn1RLuTd7tCSKoicygnkIMLu2%2FL4GOqUBM8RMWluzDgULfDw%2BSu1BfKEPJDEjFoVL5SWm%2BaswERmT3bmB%2B%2BHCw2Y7LcttJi7Yz0wYe0kxy1dsDAH%2B7bBaQpPIcM3inQBvvpkzt3R6OutNixcSiL81NfH3HPKKV2UnY%2B3H8E3vgtdUQ2eBofHXJE0QDE3FLJChqh4OMkDLUZgqJd6PAJQUHJTLIUJmr%2B0BmcUfMuWbN3RqxLOYmyXpFgelRnZs&X-Amz-Signature=5726daa71d6deda2168285f3fb2b9306236a1d550e371ed4ae55e00ba59bb733&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWI7FQVB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD5%2Fs%2BW3vc031%2FuxeGw7sS%2BIMhKvyBYX%2FpOAPI1tGbLqAIgOTvsLi5SoTxdw9gEFlRGMECa64xFyNLBm3k6FiUfq8sqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghW9%2FaDXkwLnlleircA7jfXOgDrSEtYosdVZnnnDUzA2xh99C6pJfs74eIQBOx2IucA0%2FA4DtQ%2FxnV1%2FY1rQHTcMqqossxdWwZ2aDGbVSHFinjY6PRms6tkt8Oc%2Fx2FQFqrmJ94bT2Fj%2B5qh%2BGAMyO8vSVy3i5B8ww9F1WbAXHeKrW7ifB4Ng6r40f7WTQU%2BTHlKABfm4YiBIQ%2BE4FVjipjBiTpy5JhoplbaZoWF%2BWz7spZqF2yL%2BZiWDxADF7oXQdA3dOo%2BoaKWuIM%2FDnMbupaTkpZhmiRHUN%2BL6MPx9iQ%2FwLBqE8rZDEI%2Fge%2FbQQtK2lD4oIRJJRPRZIP3nPTFBhKGHSeuhfaDRyVKUNfLv0XPO1u6SKZr%2BNdRxxKCUVDXo%2B0G%2BYIAgMp%2FJLwhFPp7lqJyZwK1jg0iCfl7y0ti1il8%2Fwj%2FsXbMeTeEDJrp%2FXnBLaFL6%2FKKrAmL01hifwel3idVnkkSh3Jd6crhNaSqVBspYCFHgMH7CgDGs1fv2eRh1pTACSGZOpN%2B%2BKL5Tb32fpR8vIpz8ouhvD2GjKk78IasWCg%2FvnglOHn2BN4psD4kNOV3bsyBKkSWPXYPj6QkHXkGrWQv77HEUCBbSn5nx2UX92RN0fTc84DH1tn1RLuTd7tCSKoicygnkIMLu2%2FL4GOqUBM8RMWluzDgULfDw%2BSu1BfKEPJDEjFoVL5SWm%2BaswERmT3bmB%2B%2BHCw2Y7LcttJi7Yz0wYe0kxy1dsDAH%2B7bBaQpPIcM3inQBvvpkzt3R6OutNixcSiL81NfH3HPKKV2UnY%2B3H8E3vgtdUQ2eBofHXJE0QDE3FLJChqh4OMkDLUZgqJd6PAJQUHJTLIUJmr%2B0BmcUfMuWbN3RqxLOYmyXpFgelRnZs&X-Amz-Signature=f72735f0e8abccc1a5f8d2a33fc84ae984649b0fd54e6c1d7120ca72ef420cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWI7FQVB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD5%2Fs%2BW3vc031%2FuxeGw7sS%2BIMhKvyBYX%2FpOAPI1tGbLqAIgOTvsLi5SoTxdw9gEFlRGMECa64xFyNLBm3k6FiUfq8sqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghW9%2FaDXkwLnlleircA7jfXOgDrSEtYosdVZnnnDUzA2xh99C6pJfs74eIQBOx2IucA0%2FA4DtQ%2FxnV1%2FY1rQHTcMqqossxdWwZ2aDGbVSHFinjY6PRms6tkt8Oc%2Fx2FQFqrmJ94bT2Fj%2B5qh%2BGAMyO8vSVy3i5B8ww9F1WbAXHeKrW7ifB4Ng6r40f7WTQU%2BTHlKABfm4YiBIQ%2BE4FVjipjBiTpy5JhoplbaZoWF%2BWz7spZqF2yL%2BZiWDxADF7oXQdA3dOo%2BoaKWuIM%2FDnMbupaTkpZhmiRHUN%2BL6MPx9iQ%2FwLBqE8rZDEI%2Fge%2FbQQtK2lD4oIRJJRPRZIP3nPTFBhKGHSeuhfaDRyVKUNfLv0XPO1u6SKZr%2BNdRxxKCUVDXo%2B0G%2BYIAgMp%2FJLwhFPp7lqJyZwK1jg0iCfl7y0ti1il8%2Fwj%2FsXbMeTeEDJrp%2FXnBLaFL6%2FKKrAmL01hifwel3idVnkkSh3Jd6crhNaSqVBspYCFHgMH7CgDGs1fv2eRh1pTACSGZOpN%2B%2BKL5Tb32fpR8vIpz8ouhvD2GjKk78IasWCg%2FvnglOHn2BN4psD4kNOV3bsyBKkSWPXYPj6QkHXkGrWQv77HEUCBbSn5nx2UX92RN0fTc84DH1tn1RLuTd7tCSKoicygnkIMLu2%2FL4GOqUBM8RMWluzDgULfDw%2BSu1BfKEPJDEjFoVL5SWm%2BaswERmT3bmB%2B%2BHCw2Y7LcttJi7Yz0wYe0kxy1dsDAH%2B7bBaQpPIcM3inQBvvpkzt3R6OutNixcSiL81NfH3HPKKV2UnY%2B3H8E3vgtdUQ2eBofHXJE0QDE3FLJChqh4OMkDLUZgqJd6PAJQUHJTLIUJmr%2B0BmcUfMuWbN3RqxLOYmyXpFgelRnZs&X-Amz-Signature=eaa3f35f22a52882594852102aaa41281fd092986db1dcc5e5935bf6230803d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
