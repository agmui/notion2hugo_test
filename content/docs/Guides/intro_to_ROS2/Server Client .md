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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ME7BNX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVqYNq55zrqP8I8dnns00we%2FYaH0LI9cmtsDoDK4o4aAiEAxNkx6BzW3uiflI2jdhfHgRXF6RuAte5NjY0ODQuBrG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFVzw4kONEUQnrkUSrcAz8wxieR8CFZ00UX%2B5%2BliIxNZvNT4J5po47JWxLozFBAeSp%2FOscoLKiJL4beXZUZeb1bcgqpYYtAXhknEqdK1e18iB%2FDn8iFscZMNbEU3pbx1mt%2F%2FSTWaDOn2MtSrFrib%2B4IzVxB03FvhmDAYpr0woJjYQdGMQEERyln0pnpZG8vV2TbRGzYOvilFIv7QH%2BVjWydcK3lQCWbuP47hgTZuyLf6i9%2FBxhzA7nQTJGOIC4ItxwuTSNnU0aKBKBlG3gJ1J3q7L53qs4K1ECalbhgClx%2F059ma6jk7anf9ANa6MUl%2BXmS%2BmXj7fsa8Lb%2BloKZ2jMWPnPMcqjka8OYLbpIq1NCGGwi78pn2tZuCP04u1WqO3bHVbEXZbhxlgSo%2BW7IKsVMjqNVKx2avhWvEAmzt%2FYfY23lwGNI7D%2BaR25Mf6ZEyYu26n7liEMmJiVzop3VK9LEcLYNLiuKtFUnpWB4Z1QyqDAtueYSe21XqClA11tjoI%2BEiSAfUeAzk7cosaOUGEadLmFvpaB2NhCj%2FQW6VFgGAMq0icndy%2BapkVHwZxwa7ISZM%2FrRfvd3qlCDtCc9LFN9r88dhE%2BrMLq%2FiG4px%2BC8ygrRKeObyQ7%2BLpzW76KWbCDl%2FS6DrxVDMWsuMOOH6L0GOqUBimBCt9XoCb5M9DsT2DHMm89nPrLd6%2BVKa695taTWJ4iAwqelmbztuxX6imezg1Ue%2BGphTdRgk74BKAmN82msgRY7w%2FOWQyp%2BOGOwaAirnN4UNsUIp1j6pXJA5hZCNoqQvaDoCHllYOACYQl4rcWeX4FJT%2Fje4MGDrbbAht8W1DzeYpXOYUrShEk9fPm9JX1YoJzTYZSXGS8Q01SmvfsnBC3lrjOc&X-Amz-Signature=c7a69d8259135c70cb717c04fb5822f0dfbe612d80b31cd9ba42083b1da11c22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ME7BNX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVqYNq55zrqP8I8dnns00we%2FYaH0LI9cmtsDoDK4o4aAiEAxNkx6BzW3uiflI2jdhfHgRXF6RuAte5NjY0ODQuBrG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFVzw4kONEUQnrkUSrcAz8wxieR8CFZ00UX%2B5%2BliIxNZvNT4J5po47JWxLozFBAeSp%2FOscoLKiJL4beXZUZeb1bcgqpYYtAXhknEqdK1e18iB%2FDn8iFscZMNbEU3pbx1mt%2F%2FSTWaDOn2MtSrFrib%2B4IzVxB03FvhmDAYpr0woJjYQdGMQEERyln0pnpZG8vV2TbRGzYOvilFIv7QH%2BVjWydcK3lQCWbuP47hgTZuyLf6i9%2FBxhzA7nQTJGOIC4ItxwuTSNnU0aKBKBlG3gJ1J3q7L53qs4K1ECalbhgClx%2F059ma6jk7anf9ANa6MUl%2BXmS%2BmXj7fsa8Lb%2BloKZ2jMWPnPMcqjka8OYLbpIq1NCGGwi78pn2tZuCP04u1WqO3bHVbEXZbhxlgSo%2BW7IKsVMjqNVKx2avhWvEAmzt%2FYfY23lwGNI7D%2BaR25Mf6ZEyYu26n7liEMmJiVzop3VK9LEcLYNLiuKtFUnpWB4Z1QyqDAtueYSe21XqClA11tjoI%2BEiSAfUeAzk7cosaOUGEadLmFvpaB2NhCj%2FQW6VFgGAMq0icndy%2BapkVHwZxwa7ISZM%2FrRfvd3qlCDtCc9LFN9r88dhE%2BrMLq%2FiG4px%2BC8ygrRKeObyQ7%2BLpzW76KWbCDl%2FS6DrxVDMWsuMOOH6L0GOqUBimBCt9XoCb5M9DsT2DHMm89nPrLd6%2BVKa695taTWJ4iAwqelmbztuxX6imezg1Ue%2BGphTdRgk74BKAmN82msgRY7w%2FOWQyp%2BOGOwaAirnN4UNsUIp1j6pXJA5hZCNoqQvaDoCHllYOACYQl4rcWeX4FJT%2Fje4MGDrbbAht8W1DzeYpXOYUrShEk9fPm9JX1YoJzTYZSXGS8Q01SmvfsnBC3lrjOc&X-Amz-Signature=88174cb7162eb321618f187cf852b5f0afd4e83bbfec594e7e2977b923730316&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ME7BNX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVqYNq55zrqP8I8dnns00we%2FYaH0LI9cmtsDoDK4o4aAiEAxNkx6BzW3uiflI2jdhfHgRXF6RuAte5NjY0ODQuBrG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFVzw4kONEUQnrkUSrcAz8wxieR8CFZ00UX%2B5%2BliIxNZvNT4J5po47JWxLozFBAeSp%2FOscoLKiJL4beXZUZeb1bcgqpYYtAXhknEqdK1e18iB%2FDn8iFscZMNbEU3pbx1mt%2F%2FSTWaDOn2MtSrFrib%2B4IzVxB03FvhmDAYpr0woJjYQdGMQEERyln0pnpZG8vV2TbRGzYOvilFIv7QH%2BVjWydcK3lQCWbuP47hgTZuyLf6i9%2FBxhzA7nQTJGOIC4ItxwuTSNnU0aKBKBlG3gJ1J3q7L53qs4K1ECalbhgClx%2F059ma6jk7anf9ANa6MUl%2BXmS%2BmXj7fsa8Lb%2BloKZ2jMWPnPMcqjka8OYLbpIq1NCGGwi78pn2tZuCP04u1WqO3bHVbEXZbhxlgSo%2BW7IKsVMjqNVKx2avhWvEAmzt%2FYfY23lwGNI7D%2BaR25Mf6ZEyYu26n7liEMmJiVzop3VK9LEcLYNLiuKtFUnpWB4Z1QyqDAtueYSe21XqClA11tjoI%2BEiSAfUeAzk7cosaOUGEadLmFvpaB2NhCj%2FQW6VFgGAMq0icndy%2BapkVHwZxwa7ISZM%2FrRfvd3qlCDtCc9LFN9r88dhE%2BrMLq%2FiG4px%2BC8ygrRKeObyQ7%2BLpzW76KWbCDl%2FS6DrxVDMWsuMOOH6L0GOqUBimBCt9XoCb5M9DsT2DHMm89nPrLd6%2BVKa695taTWJ4iAwqelmbztuxX6imezg1Ue%2BGphTdRgk74BKAmN82msgRY7w%2FOWQyp%2BOGOwaAirnN4UNsUIp1j6pXJA5hZCNoqQvaDoCHllYOACYQl4rcWeX4FJT%2Fje4MGDrbbAht8W1DzeYpXOYUrShEk9fPm9JX1YoJzTYZSXGS8Q01SmvfsnBC3lrjOc&X-Amz-Signature=6d084c235925b0fcca5724458ab7a36ec9f6c4097aa1a218307cccd20bcedbbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ME7BNX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVqYNq55zrqP8I8dnns00we%2FYaH0LI9cmtsDoDK4o4aAiEAxNkx6BzW3uiflI2jdhfHgRXF6RuAte5NjY0ODQuBrG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFVzw4kONEUQnrkUSrcAz8wxieR8CFZ00UX%2B5%2BliIxNZvNT4J5po47JWxLozFBAeSp%2FOscoLKiJL4beXZUZeb1bcgqpYYtAXhknEqdK1e18iB%2FDn8iFscZMNbEU3pbx1mt%2F%2FSTWaDOn2MtSrFrib%2B4IzVxB03FvhmDAYpr0woJjYQdGMQEERyln0pnpZG8vV2TbRGzYOvilFIv7QH%2BVjWydcK3lQCWbuP47hgTZuyLf6i9%2FBxhzA7nQTJGOIC4ItxwuTSNnU0aKBKBlG3gJ1J3q7L53qs4K1ECalbhgClx%2F059ma6jk7anf9ANa6MUl%2BXmS%2BmXj7fsa8Lb%2BloKZ2jMWPnPMcqjka8OYLbpIq1NCGGwi78pn2tZuCP04u1WqO3bHVbEXZbhxlgSo%2BW7IKsVMjqNVKx2avhWvEAmzt%2FYfY23lwGNI7D%2BaR25Mf6ZEyYu26n7liEMmJiVzop3VK9LEcLYNLiuKtFUnpWB4Z1QyqDAtueYSe21XqClA11tjoI%2BEiSAfUeAzk7cosaOUGEadLmFvpaB2NhCj%2FQW6VFgGAMq0icndy%2BapkVHwZxwa7ISZM%2FrRfvd3qlCDtCc9LFN9r88dhE%2BrMLq%2FiG4px%2BC8ygrRKeObyQ7%2BLpzW76KWbCDl%2FS6DrxVDMWsuMOOH6L0GOqUBimBCt9XoCb5M9DsT2DHMm89nPrLd6%2BVKa695taTWJ4iAwqelmbztuxX6imezg1Ue%2BGphTdRgk74BKAmN82msgRY7w%2FOWQyp%2BOGOwaAirnN4UNsUIp1j6pXJA5hZCNoqQvaDoCHllYOACYQl4rcWeX4FJT%2Fje4MGDrbbAht8W1DzeYpXOYUrShEk9fPm9JX1YoJzTYZSXGS8Q01SmvfsnBC3lrjOc&X-Amz-Signature=1f3dcac8fb7ee664c100f5bad97a9523bee02c3114ea7274aaf3b9a4966fa0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ME7BNX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVqYNq55zrqP8I8dnns00we%2FYaH0LI9cmtsDoDK4o4aAiEAxNkx6BzW3uiflI2jdhfHgRXF6RuAte5NjY0ODQuBrG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFVzw4kONEUQnrkUSrcAz8wxieR8CFZ00UX%2B5%2BliIxNZvNT4J5po47JWxLozFBAeSp%2FOscoLKiJL4beXZUZeb1bcgqpYYtAXhknEqdK1e18iB%2FDn8iFscZMNbEU3pbx1mt%2F%2FSTWaDOn2MtSrFrib%2B4IzVxB03FvhmDAYpr0woJjYQdGMQEERyln0pnpZG8vV2TbRGzYOvilFIv7QH%2BVjWydcK3lQCWbuP47hgTZuyLf6i9%2FBxhzA7nQTJGOIC4ItxwuTSNnU0aKBKBlG3gJ1J3q7L53qs4K1ECalbhgClx%2F059ma6jk7anf9ANa6MUl%2BXmS%2BmXj7fsa8Lb%2BloKZ2jMWPnPMcqjka8OYLbpIq1NCGGwi78pn2tZuCP04u1WqO3bHVbEXZbhxlgSo%2BW7IKsVMjqNVKx2avhWvEAmzt%2FYfY23lwGNI7D%2BaR25Mf6ZEyYu26n7liEMmJiVzop3VK9LEcLYNLiuKtFUnpWB4Z1QyqDAtueYSe21XqClA11tjoI%2BEiSAfUeAzk7cosaOUGEadLmFvpaB2NhCj%2FQW6VFgGAMq0icndy%2BapkVHwZxwa7ISZM%2FrRfvd3qlCDtCc9LFN9r88dhE%2BrMLq%2FiG4px%2BC8ygrRKeObyQ7%2BLpzW76KWbCDl%2FS6DrxVDMWsuMOOH6L0GOqUBimBCt9XoCb5M9DsT2DHMm89nPrLd6%2BVKa695taTWJ4iAwqelmbztuxX6imezg1Ue%2BGphTdRgk74BKAmN82msgRY7w%2FOWQyp%2BOGOwaAirnN4UNsUIp1j6pXJA5hZCNoqQvaDoCHllYOACYQl4rcWeX4FJT%2Fje4MGDrbbAht8W1DzeYpXOYUrShEk9fPm9JX1YoJzTYZSXGS8Q01SmvfsnBC3lrjOc&X-Amz-Signature=a95cafaa2967aa2d653d90f99d378740786fe787d7e06d86a1f3a4ef72e5b0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
