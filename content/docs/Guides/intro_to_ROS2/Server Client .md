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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4IU6JW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT1DCbIRaVG3%2BYU%2B1f95LTPAdbNn9focQ3aaWSX0T4RAiEAzD%2BFeS1RElVM1U%2FGT5%2BbQ4JFixm5ilzESlV9KAsdhPEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5NnRqhFlKi8TLuOSrcA7gmDLQ5T2ctArvCNimuO4WFk0D0nhC9wpjw8%2FSTZio53AWfB7NWL9ZM5QxLZmXT9FBE0Uwk0%2FFHcP2DJsas%2FZv9SsAb0Y4RsJOsm8eXDuUZX5E7ViRsOwWU7hVffgCgsBeBfE%2BH30apppkieNC9EDx83b6uXp4BqmIGQoErKtvNKNbxKMUUa4%2BAofVvrQdrI6pf5xnDepM9pylAFhcwu7iyjghfleFFy34QKeRx4uRp0SWUWViNYbT7B7KsFu%2F8JIpn8Ll5TkZdTk2NqKsRrm9F3Z%2FLrueXNYWmTb9OwrQ36HuVr%2BNj9jVaLULi3nypS9x1sg8hAf4MEHbqVoGN3VZMt8xbsFBMOx%2B89vOS7yww7UawSJj4RbXlubO8Ps%2B%2B6V0IvaEUxI9d4GmTY5TWA87cjHUJSNDTuxGYhbBGrO3f6AmSakh9NdRGrflgH88C0tQwQ0TNOlCWTnBlypPASi3Waqz%2FMcvy01W9x6%2B2qfWusRu0QTPPwvtCqIrMnnTIBoGJK0dHRGDxk62R%2BRWJnjo9%2Fjhgu4tOobVhU22O5OM3y%2B6r8aoRaIYwPU3kMICv8T9CtHpXH3Kzh%2Fg8HXuXWHnsU7gKcKI6dm9Chj1MPhZ4Mb2lrdhdy%2BN1Y7qtMNrfrsEGOqUBv150n1SsJIA0jwRj4yLrhr%2B4boC4xivFff15puI7o9eupTsW%2FRTClP%2Fu4fEO9P8FgnPjRMuitcryzw3r%2FtNYiiUDhZcBFFLQq5EKVUt2wijOAuc9ATQ4Z4e1YdIAJC2vObKYx396mDBAT7LVLfmdATipkPSPzw9cY2uYRl4L7TwWLTMq3lfnJbaH0TTTYCOVR593p6MmaCcWMYqzEQLVp4vfutpz&X-Amz-Signature=64be1173b2e28abbea3499710aa6635c343adbf86751f06346bb3a6e8cadd8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4IU6JW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT1DCbIRaVG3%2BYU%2B1f95LTPAdbNn9focQ3aaWSX0T4RAiEAzD%2BFeS1RElVM1U%2FGT5%2BbQ4JFixm5ilzESlV9KAsdhPEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5NnRqhFlKi8TLuOSrcA7gmDLQ5T2ctArvCNimuO4WFk0D0nhC9wpjw8%2FSTZio53AWfB7NWL9ZM5QxLZmXT9FBE0Uwk0%2FFHcP2DJsas%2FZv9SsAb0Y4RsJOsm8eXDuUZX5E7ViRsOwWU7hVffgCgsBeBfE%2BH30apppkieNC9EDx83b6uXp4BqmIGQoErKtvNKNbxKMUUa4%2BAofVvrQdrI6pf5xnDepM9pylAFhcwu7iyjghfleFFy34QKeRx4uRp0SWUWViNYbT7B7KsFu%2F8JIpn8Ll5TkZdTk2NqKsRrm9F3Z%2FLrueXNYWmTb9OwrQ36HuVr%2BNj9jVaLULi3nypS9x1sg8hAf4MEHbqVoGN3VZMt8xbsFBMOx%2B89vOS7yww7UawSJj4RbXlubO8Ps%2B%2B6V0IvaEUxI9d4GmTY5TWA87cjHUJSNDTuxGYhbBGrO3f6AmSakh9NdRGrflgH88C0tQwQ0TNOlCWTnBlypPASi3Waqz%2FMcvy01W9x6%2B2qfWusRu0QTPPwvtCqIrMnnTIBoGJK0dHRGDxk62R%2BRWJnjo9%2Fjhgu4tOobVhU22O5OM3y%2B6r8aoRaIYwPU3kMICv8T9CtHpXH3Kzh%2Fg8HXuXWHnsU7gKcKI6dm9Chj1MPhZ4Mb2lrdhdy%2BN1Y7qtMNrfrsEGOqUBv150n1SsJIA0jwRj4yLrhr%2B4boC4xivFff15puI7o9eupTsW%2FRTClP%2Fu4fEO9P8FgnPjRMuitcryzw3r%2FtNYiiUDhZcBFFLQq5EKVUt2wijOAuc9ATQ4Z4e1YdIAJC2vObKYx396mDBAT7LVLfmdATipkPSPzw9cY2uYRl4L7TwWLTMq3lfnJbaH0TTTYCOVR593p6MmaCcWMYqzEQLVp4vfutpz&X-Amz-Signature=c9f9f3c1289c8497080d7435f574b01624c3d175d479fed7aeb0ebedfc3dcc72&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4IU6JW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT1DCbIRaVG3%2BYU%2B1f95LTPAdbNn9focQ3aaWSX0T4RAiEAzD%2BFeS1RElVM1U%2FGT5%2BbQ4JFixm5ilzESlV9KAsdhPEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5NnRqhFlKi8TLuOSrcA7gmDLQ5T2ctArvCNimuO4WFk0D0nhC9wpjw8%2FSTZio53AWfB7NWL9ZM5QxLZmXT9FBE0Uwk0%2FFHcP2DJsas%2FZv9SsAb0Y4RsJOsm8eXDuUZX5E7ViRsOwWU7hVffgCgsBeBfE%2BH30apppkieNC9EDx83b6uXp4BqmIGQoErKtvNKNbxKMUUa4%2BAofVvrQdrI6pf5xnDepM9pylAFhcwu7iyjghfleFFy34QKeRx4uRp0SWUWViNYbT7B7KsFu%2F8JIpn8Ll5TkZdTk2NqKsRrm9F3Z%2FLrueXNYWmTb9OwrQ36HuVr%2BNj9jVaLULi3nypS9x1sg8hAf4MEHbqVoGN3VZMt8xbsFBMOx%2B89vOS7yww7UawSJj4RbXlubO8Ps%2B%2B6V0IvaEUxI9d4GmTY5TWA87cjHUJSNDTuxGYhbBGrO3f6AmSakh9NdRGrflgH88C0tQwQ0TNOlCWTnBlypPASi3Waqz%2FMcvy01W9x6%2B2qfWusRu0QTPPwvtCqIrMnnTIBoGJK0dHRGDxk62R%2BRWJnjo9%2Fjhgu4tOobVhU22O5OM3y%2B6r8aoRaIYwPU3kMICv8T9CtHpXH3Kzh%2Fg8HXuXWHnsU7gKcKI6dm9Chj1MPhZ4Mb2lrdhdy%2BN1Y7qtMNrfrsEGOqUBv150n1SsJIA0jwRj4yLrhr%2B4boC4xivFff15puI7o9eupTsW%2FRTClP%2Fu4fEO9P8FgnPjRMuitcryzw3r%2FtNYiiUDhZcBFFLQq5EKVUt2wijOAuc9ATQ4Z4e1YdIAJC2vObKYx396mDBAT7LVLfmdATipkPSPzw9cY2uYRl4L7TwWLTMq3lfnJbaH0TTTYCOVR593p6MmaCcWMYqzEQLVp4vfutpz&X-Amz-Signature=72057cb345f258fe47076e0069d46b1035ee27e8f7060a679e3106f20e664c94&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4IU6JW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT1DCbIRaVG3%2BYU%2B1f95LTPAdbNn9focQ3aaWSX0T4RAiEAzD%2BFeS1RElVM1U%2FGT5%2BbQ4JFixm5ilzESlV9KAsdhPEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5NnRqhFlKi8TLuOSrcA7gmDLQ5T2ctArvCNimuO4WFk0D0nhC9wpjw8%2FSTZio53AWfB7NWL9ZM5QxLZmXT9FBE0Uwk0%2FFHcP2DJsas%2FZv9SsAb0Y4RsJOsm8eXDuUZX5E7ViRsOwWU7hVffgCgsBeBfE%2BH30apppkieNC9EDx83b6uXp4BqmIGQoErKtvNKNbxKMUUa4%2BAofVvrQdrI6pf5xnDepM9pylAFhcwu7iyjghfleFFy34QKeRx4uRp0SWUWViNYbT7B7KsFu%2F8JIpn8Ll5TkZdTk2NqKsRrm9F3Z%2FLrueXNYWmTb9OwrQ36HuVr%2BNj9jVaLULi3nypS9x1sg8hAf4MEHbqVoGN3VZMt8xbsFBMOx%2B89vOS7yww7UawSJj4RbXlubO8Ps%2B%2B6V0IvaEUxI9d4GmTY5TWA87cjHUJSNDTuxGYhbBGrO3f6AmSakh9NdRGrflgH88C0tQwQ0TNOlCWTnBlypPASi3Waqz%2FMcvy01W9x6%2B2qfWusRu0QTPPwvtCqIrMnnTIBoGJK0dHRGDxk62R%2BRWJnjo9%2Fjhgu4tOobVhU22O5OM3y%2B6r8aoRaIYwPU3kMICv8T9CtHpXH3Kzh%2Fg8HXuXWHnsU7gKcKI6dm9Chj1MPhZ4Mb2lrdhdy%2BN1Y7qtMNrfrsEGOqUBv150n1SsJIA0jwRj4yLrhr%2B4boC4xivFff15puI7o9eupTsW%2FRTClP%2Fu4fEO9P8FgnPjRMuitcryzw3r%2FtNYiiUDhZcBFFLQq5EKVUt2wijOAuc9ATQ4Z4e1YdIAJC2vObKYx396mDBAT7LVLfmdATipkPSPzw9cY2uYRl4L7TwWLTMq3lfnJbaH0TTTYCOVR593p6MmaCcWMYqzEQLVp4vfutpz&X-Amz-Signature=cf9d768180eb83ce5519447cf61a784ed8adc8f1c07b7b8cbd9331a4b1f753e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4IU6JW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT1DCbIRaVG3%2BYU%2B1f95LTPAdbNn9focQ3aaWSX0T4RAiEAzD%2BFeS1RElVM1U%2FGT5%2BbQ4JFixm5ilzESlV9KAsdhPEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5NnRqhFlKi8TLuOSrcA7gmDLQ5T2ctArvCNimuO4WFk0D0nhC9wpjw8%2FSTZio53AWfB7NWL9ZM5QxLZmXT9FBE0Uwk0%2FFHcP2DJsas%2FZv9SsAb0Y4RsJOsm8eXDuUZX5E7ViRsOwWU7hVffgCgsBeBfE%2BH30apppkieNC9EDx83b6uXp4BqmIGQoErKtvNKNbxKMUUa4%2BAofVvrQdrI6pf5xnDepM9pylAFhcwu7iyjghfleFFy34QKeRx4uRp0SWUWViNYbT7B7KsFu%2F8JIpn8Ll5TkZdTk2NqKsRrm9F3Z%2FLrueXNYWmTb9OwrQ36HuVr%2BNj9jVaLULi3nypS9x1sg8hAf4MEHbqVoGN3VZMt8xbsFBMOx%2B89vOS7yww7UawSJj4RbXlubO8Ps%2B%2B6V0IvaEUxI9d4GmTY5TWA87cjHUJSNDTuxGYhbBGrO3f6AmSakh9NdRGrflgH88C0tQwQ0TNOlCWTnBlypPASi3Waqz%2FMcvy01W9x6%2B2qfWusRu0QTPPwvtCqIrMnnTIBoGJK0dHRGDxk62R%2BRWJnjo9%2Fjhgu4tOobVhU22O5OM3y%2B6r8aoRaIYwPU3kMICv8T9CtHpXH3Kzh%2Fg8HXuXWHnsU7gKcKI6dm9Chj1MPhZ4Mb2lrdhdy%2BN1Y7qtMNrfrsEGOqUBv150n1SsJIA0jwRj4yLrhr%2B4boC4xivFff15puI7o9eupTsW%2FRTClP%2Fu4fEO9P8FgnPjRMuitcryzw3r%2FtNYiiUDhZcBFFLQq5EKVUt2wijOAuc9ATQ4Z4e1YdIAJC2vObKYx396mDBAT7LVLfmdATipkPSPzw9cY2uYRl4L7TwWLTMq3lfnJbaH0TTTYCOVR593p6MmaCcWMYqzEQLVp4vfutpz&X-Amz-Signature=0637d00d057e210cb63bf7ae9296a71e008354ec039a093d4bc005d63f92652c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
