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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XTLPP3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb8Ly7ByaopvYk2m0U1RHPsTTdZ1o3I84OyTbXJdNLQAIgJ52ctnwRXUz4uBTasNCi90BtaGQSFSLTXMBT24owh1AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxpnu1VxEIbMo5vFyrcAyj0XSD0hcouPh4JP223M3mX7czr5hNlvUfL4VZjf8SQkLWQs7aFSavP8BwNCtuylf63T6wNyyummdRuyob2QJKrGch8HxAp8VklK4QzKmWtyEBmxy7p1KYc60B1%2FgP%2Fq4%2FI2%2FgnX3NL43XPwaAEmj%2B1MMLBQd27Lh9FChLx53x963rHCkhzILpcFSrS%2B6qxzIxbktps0Z5k5i3CsxB85uOtKtV0JPy%2BCyGN7u4iIT7uLWqKfrsvif4VXvHAtCW2TnHP0ds2ZTyBIqEg1ThMMuOxrxyBly5njLpZKzyRzuVctaU4VAUdqH7ZXGCds8zvWsS4Q13jcr%2FdOJQk%2BzkoSxLLqJCSFhpqrAFmIh%2FljSZmLvAU9SjwOxnRNpIsHFHlVl9cslPM29506DYZY32STngajyv%2BlDvyTVhcf%2FvOu8FWVyVkboyUOuSwJVbIBcFzYZHxrMptW2aAQ2JktZmm9uf3S8JZhFk2Zpgd0EL9QxYtyL1FUW6nPoGTnVmjLKKL3lbr7qpxOUs0QU8qQ%2FJ6MorM%2F6LCXDnXJOjb5eqDJD0lXFa%2FCxv8LsEQlAMcbGtnSTQ9nZ174usMOavls07WZO0teGUK6QE0lBAbh%2F8z3ibNkK%2BSyAHGWxgnc5BUMNuwlMIGOqUBmZX85wQsNe65JEc%2BmH8zKFGlNEO4X%2FJj%2BmWS%2Fx60Kn%2FvBuVEotdOah4SMuEPMEOrJeLYt25x16jj8DCRVqM6A5OsVR2r6j6tVMa0SEF19kO%2FyN1Qwjr5a49yKvpyWC5j%2F4EC7WX4%2B%2B9NTiMIjrf3SuHUq9hLoi%2BMGMdDG7z0O0wdVekhPMM0z2DL4azOH3IMAT7EaSDmLv8xuTBW3CjxqnrKTfTj&X-Amz-Signature=656f2ee5f858ac99f5d8551ccd773954a11122ec215921f594603647a280c070&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XTLPP3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb8Ly7ByaopvYk2m0U1RHPsTTdZ1o3I84OyTbXJdNLQAIgJ52ctnwRXUz4uBTasNCi90BtaGQSFSLTXMBT24owh1AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxpnu1VxEIbMo5vFyrcAyj0XSD0hcouPh4JP223M3mX7czr5hNlvUfL4VZjf8SQkLWQs7aFSavP8BwNCtuylf63T6wNyyummdRuyob2QJKrGch8HxAp8VklK4QzKmWtyEBmxy7p1KYc60B1%2FgP%2Fq4%2FI2%2FgnX3NL43XPwaAEmj%2B1MMLBQd27Lh9FChLx53x963rHCkhzILpcFSrS%2B6qxzIxbktps0Z5k5i3CsxB85uOtKtV0JPy%2BCyGN7u4iIT7uLWqKfrsvif4VXvHAtCW2TnHP0ds2ZTyBIqEg1ThMMuOxrxyBly5njLpZKzyRzuVctaU4VAUdqH7ZXGCds8zvWsS4Q13jcr%2FdOJQk%2BzkoSxLLqJCSFhpqrAFmIh%2FljSZmLvAU9SjwOxnRNpIsHFHlVl9cslPM29506DYZY32STngajyv%2BlDvyTVhcf%2FvOu8FWVyVkboyUOuSwJVbIBcFzYZHxrMptW2aAQ2JktZmm9uf3S8JZhFk2Zpgd0EL9QxYtyL1FUW6nPoGTnVmjLKKL3lbr7qpxOUs0QU8qQ%2FJ6MorM%2F6LCXDnXJOjb5eqDJD0lXFa%2FCxv8LsEQlAMcbGtnSTQ9nZ174usMOavls07WZO0teGUK6QE0lBAbh%2F8z3ibNkK%2BSyAHGWxgnc5BUMNuwlMIGOqUBmZX85wQsNe65JEc%2BmH8zKFGlNEO4X%2FJj%2BmWS%2Fx60Kn%2FvBuVEotdOah4SMuEPMEOrJeLYt25x16jj8DCRVqM6A5OsVR2r6j6tVMa0SEF19kO%2FyN1Qwjr5a49yKvpyWC5j%2F4EC7WX4%2B%2B9NTiMIjrf3SuHUq9hLoi%2BMGMdDG7z0O0wdVekhPMM0z2DL4azOH3IMAT7EaSDmLv8xuTBW3CjxqnrKTfTj&X-Amz-Signature=c718427fb4466256603813f67bc97840519083cac47d8c3849952e40baf72fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XTLPP3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb8Ly7ByaopvYk2m0U1RHPsTTdZ1o3I84OyTbXJdNLQAIgJ52ctnwRXUz4uBTasNCi90BtaGQSFSLTXMBT24owh1AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxpnu1VxEIbMo5vFyrcAyj0XSD0hcouPh4JP223M3mX7czr5hNlvUfL4VZjf8SQkLWQs7aFSavP8BwNCtuylf63T6wNyyummdRuyob2QJKrGch8HxAp8VklK4QzKmWtyEBmxy7p1KYc60B1%2FgP%2Fq4%2FI2%2FgnX3NL43XPwaAEmj%2B1MMLBQd27Lh9FChLx53x963rHCkhzILpcFSrS%2B6qxzIxbktps0Z5k5i3CsxB85uOtKtV0JPy%2BCyGN7u4iIT7uLWqKfrsvif4VXvHAtCW2TnHP0ds2ZTyBIqEg1ThMMuOxrxyBly5njLpZKzyRzuVctaU4VAUdqH7ZXGCds8zvWsS4Q13jcr%2FdOJQk%2BzkoSxLLqJCSFhpqrAFmIh%2FljSZmLvAU9SjwOxnRNpIsHFHlVl9cslPM29506DYZY32STngajyv%2BlDvyTVhcf%2FvOu8FWVyVkboyUOuSwJVbIBcFzYZHxrMptW2aAQ2JktZmm9uf3S8JZhFk2Zpgd0EL9QxYtyL1FUW6nPoGTnVmjLKKL3lbr7qpxOUs0QU8qQ%2FJ6MorM%2F6LCXDnXJOjb5eqDJD0lXFa%2FCxv8LsEQlAMcbGtnSTQ9nZ174usMOavls07WZO0teGUK6QE0lBAbh%2F8z3ibNkK%2BSyAHGWxgnc5BUMNuwlMIGOqUBmZX85wQsNe65JEc%2BmH8zKFGlNEO4X%2FJj%2BmWS%2Fx60Kn%2FvBuVEotdOah4SMuEPMEOrJeLYt25x16jj8DCRVqM6A5OsVR2r6j6tVMa0SEF19kO%2FyN1Qwjr5a49yKvpyWC5j%2F4EC7WX4%2B%2B9NTiMIjrf3SuHUq9hLoi%2BMGMdDG7z0O0wdVekhPMM0z2DL4azOH3IMAT7EaSDmLv8xuTBW3CjxqnrKTfTj&X-Amz-Signature=dc87bfc2bc8378a6fc287f3476def838f5de645eedd09a49484f3b19cc34d265&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XTLPP3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb8Ly7ByaopvYk2m0U1RHPsTTdZ1o3I84OyTbXJdNLQAIgJ52ctnwRXUz4uBTasNCi90BtaGQSFSLTXMBT24owh1AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxpnu1VxEIbMo5vFyrcAyj0XSD0hcouPh4JP223M3mX7czr5hNlvUfL4VZjf8SQkLWQs7aFSavP8BwNCtuylf63T6wNyyummdRuyob2QJKrGch8HxAp8VklK4QzKmWtyEBmxy7p1KYc60B1%2FgP%2Fq4%2FI2%2FgnX3NL43XPwaAEmj%2B1MMLBQd27Lh9FChLx53x963rHCkhzILpcFSrS%2B6qxzIxbktps0Z5k5i3CsxB85uOtKtV0JPy%2BCyGN7u4iIT7uLWqKfrsvif4VXvHAtCW2TnHP0ds2ZTyBIqEg1ThMMuOxrxyBly5njLpZKzyRzuVctaU4VAUdqH7ZXGCds8zvWsS4Q13jcr%2FdOJQk%2BzkoSxLLqJCSFhpqrAFmIh%2FljSZmLvAU9SjwOxnRNpIsHFHlVl9cslPM29506DYZY32STngajyv%2BlDvyTVhcf%2FvOu8FWVyVkboyUOuSwJVbIBcFzYZHxrMptW2aAQ2JktZmm9uf3S8JZhFk2Zpgd0EL9QxYtyL1FUW6nPoGTnVmjLKKL3lbr7qpxOUs0QU8qQ%2FJ6MorM%2F6LCXDnXJOjb5eqDJD0lXFa%2FCxv8LsEQlAMcbGtnSTQ9nZ174usMOavls07WZO0teGUK6QE0lBAbh%2F8z3ibNkK%2BSyAHGWxgnc5BUMNuwlMIGOqUBmZX85wQsNe65JEc%2BmH8zKFGlNEO4X%2FJj%2BmWS%2Fx60Kn%2FvBuVEotdOah4SMuEPMEOrJeLYt25x16jj8DCRVqM6A5OsVR2r6j6tVMa0SEF19kO%2FyN1Qwjr5a49yKvpyWC5j%2F4EC7WX4%2B%2B9NTiMIjrf3SuHUq9hLoi%2BMGMdDG7z0O0wdVekhPMM0z2DL4azOH3IMAT7EaSDmLv8xuTBW3CjxqnrKTfTj&X-Amz-Signature=de889bbdc6bb9dce1f478a52434c0e410646f01e5594649ec44f1a24e25e4473&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XTLPP3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb8Ly7ByaopvYk2m0U1RHPsTTdZ1o3I84OyTbXJdNLQAIgJ52ctnwRXUz4uBTasNCi90BtaGQSFSLTXMBT24owh1AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxpnu1VxEIbMo5vFyrcAyj0XSD0hcouPh4JP223M3mX7czr5hNlvUfL4VZjf8SQkLWQs7aFSavP8BwNCtuylf63T6wNyyummdRuyob2QJKrGch8HxAp8VklK4QzKmWtyEBmxy7p1KYc60B1%2FgP%2Fq4%2FI2%2FgnX3NL43XPwaAEmj%2B1MMLBQd27Lh9FChLx53x963rHCkhzILpcFSrS%2B6qxzIxbktps0Z5k5i3CsxB85uOtKtV0JPy%2BCyGN7u4iIT7uLWqKfrsvif4VXvHAtCW2TnHP0ds2ZTyBIqEg1ThMMuOxrxyBly5njLpZKzyRzuVctaU4VAUdqH7ZXGCds8zvWsS4Q13jcr%2FdOJQk%2BzkoSxLLqJCSFhpqrAFmIh%2FljSZmLvAU9SjwOxnRNpIsHFHlVl9cslPM29506DYZY32STngajyv%2BlDvyTVhcf%2FvOu8FWVyVkboyUOuSwJVbIBcFzYZHxrMptW2aAQ2JktZmm9uf3S8JZhFk2Zpgd0EL9QxYtyL1FUW6nPoGTnVmjLKKL3lbr7qpxOUs0QU8qQ%2FJ6MorM%2F6LCXDnXJOjb5eqDJD0lXFa%2FCxv8LsEQlAMcbGtnSTQ9nZ174usMOavls07WZO0teGUK6QE0lBAbh%2F8z3ibNkK%2BSyAHGWxgnc5BUMNuwlMIGOqUBmZX85wQsNe65JEc%2BmH8zKFGlNEO4X%2FJj%2BmWS%2Fx60Kn%2FvBuVEotdOah4SMuEPMEOrJeLYt25x16jj8DCRVqM6A5OsVR2r6j6tVMa0SEF19kO%2FyN1Qwjr5a49yKvpyWC5j%2F4EC7WX4%2B%2B9NTiMIjrf3SuHUq9hLoi%2BMGMdDG7z0O0wdVekhPMM0z2DL4azOH3IMAT7EaSDmLv8xuTBW3CjxqnrKTfTj&X-Amz-Signature=73f8fbf8100c13c2d49e028e2b7d2b9709c4942152059d35a4201515bc47f2db&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
