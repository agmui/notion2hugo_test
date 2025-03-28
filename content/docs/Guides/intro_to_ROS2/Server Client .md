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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFOJBT3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe%2Fdu5vwj3ROwquRNuYhWhYrF3V1eXmEl8EmewqNvnmAiAem0OVU1s0%2FM%2BXlNxD0o23dd%2FFKQVJKt5u0ZiLOUkLoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM0JJJ73NndnEDg9pSKtwDtSQIIkb%2BSW0qtLHf8xYaDne32%2BYUAHowEFDJCBTB6EciKRawCpDux%2B9ekwgKHWLyiZ19ESu0ZZhiv3wa8R2r%2B%2B5q2tnJgteQYH%2F0D7uCESQnatvS95%2F2I0IOzOw8EGif04H%2ByYKHuMuLHWVpuYW527pViBItXiHq01NyFFL3bKLJlJDdkYTQ6aqIqhz6Qe%2FrJaN9w66hr4GgcBjl9nArWLWmjbyNArYqG21OpAcDnBTHzKax8tss%2Bdj1j0Lm6sA6uOps3ZnnoVhk3CoHUxChyvGUl%2FaL1tEZFGO2foU2rU3WuP7qGx%2BG4TfPfu85R2H0fJMOtYDqBjrVYfNcmteePUtZSAcKjVqwaUdY3gI0YbfWQDjQ0Fz9h7dDlii8dzd0jtrdO2MDn3pEBZf%2B8gu0xst8lgsMoJovuVO3IxpNB%2BgSN8jOPrvDyhmQMw9GHft90hUZh5L80%2FZJ0dZCKcWmhA5HKe6LiwXLAagqYAHCAiZi1wp%2Faxi5bRV2u4Urlnqd2qgE74PrPHbYKULc%2FFB6LVM4J5OaoxMrRzA0jXU3Vg04yQOMVQnl%2BuQi85%2FViaZwQbF6D87yu1sOekY58GlFYE453E%2FpPDh0fVvT0uVYHxM8Pl5wO5aYKQ5i4Gswm8yYvwY6pgF%2Bz3Khv5KK84tMvRfBTxz0Q5oTzfUxZZSKHQLODUemW%2B0Ko4fa2rpF%2B5gkrZmmp7O2cZDnpUlJzQKzue%2FDmv5aKSCBtRoweb3gcHa0Caiy0hQxIqSUpjVBoszUmTnTigbkMopNlMOhHGmI4sJloDzWsFh3RVaT%2BzNvelP0gVIrNUeU0%2B%2BL9UsfMFVv%2BMztIME4QlKV3m3t%2BtAZJlci7HDEjudsQc90&X-Amz-Signature=fc2bead5ba054c6d103f40415743370221d13e8b97d1402426da3fe7f46231d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFOJBT3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe%2Fdu5vwj3ROwquRNuYhWhYrF3V1eXmEl8EmewqNvnmAiAem0OVU1s0%2FM%2BXlNxD0o23dd%2FFKQVJKt5u0ZiLOUkLoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM0JJJ73NndnEDg9pSKtwDtSQIIkb%2BSW0qtLHf8xYaDne32%2BYUAHowEFDJCBTB6EciKRawCpDux%2B9ekwgKHWLyiZ19ESu0ZZhiv3wa8R2r%2B%2B5q2tnJgteQYH%2F0D7uCESQnatvS95%2F2I0IOzOw8EGif04H%2ByYKHuMuLHWVpuYW527pViBItXiHq01NyFFL3bKLJlJDdkYTQ6aqIqhz6Qe%2FrJaN9w66hr4GgcBjl9nArWLWmjbyNArYqG21OpAcDnBTHzKax8tss%2Bdj1j0Lm6sA6uOps3ZnnoVhk3CoHUxChyvGUl%2FaL1tEZFGO2foU2rU3WuP7qGx%2BG4TfPfu85R2H0fJMOtYDqBjrVYfNcmteePUtZSAcKjVqwaUdY3gI0YbfWQDjQ0Fz9h7dDlii8dzd0jtrdO2MDn3pEBZf%2B8gu0xst8lgsMoJovuVO3IxpNB%2BgSN8jOPrvDyhmQMw9GHft90hUZh5L80%2FZJ0dZCKcWmhA5HKe6LiwXLAagqYAHCAiZi1wp%2Faxi5bRV2u4Urlnqd2qgE74PrPHbYKULc%2FFB6LVM4J5OaoxMrRzA0jXU3Vg04yQOMVQnl%2BuQi85%2FViaZwQbF6D87yu1sOekY58GlFYE453E%2FpPDh0fVvT0uVYHxM8Pl5wO5aYKQ5i4Gswm8yYvwY6pgF%2Bz3Khv5KK84tMvRfBTxz0Q5oTzfUxZZSKHQLODUemW%2B0Ko4fa2rpF%2B5gkrZmmp7O2cZDnpUlJzQKzue%2FDmv5aKSCBtRoweb3gcHa0Caiy0hQxIqSUpjVBoszUmTnTigbkMopNlMOhHGmI4sJloDzWsFh3RVaT%2BzNvelP0gVIrNUeU0%2B%2BL9UsfMFVv%2BMztIME4QlKV3m3t%2BtAZJlci7HDEjudsQc90&X-Amz-Signature=b264c002b305020f52bca5f3e020b211870d1dbc3e97dca3b77cd75fc8e91fff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFOJBT3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe%2Fdu5vwj3ROwquRNuYhWhYrF3V1eXmEl8EmewqNvnmAiAem0OVU1s0%2FM%2BXlNxD0o23dd%2FFKQVJKt5u0ZiLOUkLoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM0JJJ73NndnEDg9pSKtwDtSQIIkb%2BSW0qtLHf8xYaDne32%2BYUAHowEFDJCBTB6EciKRawCpDux%2B9ekwgKHWLyiZ19ESu0ZZhiv3wa8R2r%2B%2B5q2tnJgteQYH%2F0D7uCESQnatvS95%2F2I0IOzOw8EGif04H%2ByYKHuMuLHWVpuYW527pViBItXiHq01NyFFL3bKLJlJDdkYTQ6aqIqhz6Qe%2FrJaN9w66hr4GgcBjl9nArWLWmjbyNArYqG21OpAcDnBTHzKax8tss%2Bdj1j0Lm6sA6uOps3ZnnoVhk3CoHUxChyvGUl%2FaL1tEZFGO2foU2rU3WuP7qGx%2BG4TfPfu85R2H0fJMOtYDqBjrVYfNcmteePUtZSAcKjVqwaUdY3gI0YbfWQDjQ0Fz9h7dDlii8dzd0jtrdO2MDn3pEBZf%2B8gu0xst8lgsMoJovuVO3IxpNB%2BgSN8jOPrvDyhmQMw9GHft90hUZh5L80%2FZJ0dZCKcWmhA5HKe6LiwXLAagqYAHCAiZi1wp%2Faxi5bRV2u4Urlnqd2qgE74PrPHbYKULc%2FFB6LVM4J5OaoxMrRzA0jXU3Vg04yQOMVQnl%2BuQi85%2FViaZwQbF6D87yu1sOekY58GlFYE453E%2FpPDh0fVvT0uVYHxM8Pl5wO5aYKQ5i4Gswm8yYvwY6pgF%2Bz3Khv5KK84tMvRfBTxz0Q5oTzfUxZZSKHQLODUemW%2B0Ko4fa2rpF%2B5gkrZmmp7O2cZDnpUlJzQKzue%2FDmv5aKSCBtRoweb3gcHa0Caiy0hQxIqSUpjVBoszUmTnTigbkMopNlMOhHGmI4sJloDzWsFh3RVaT%2BzNvelP0gVIrNUeU0%2B%2BL9UsfMFVv%2BMztIME4QlKV3m3t%2BtAZJlci7HDEjudsQc90&X-Amz-Signature=c11e8ed41b113e9588246b8e97ed1c9c438960566ccb0f5cb08323749d8003f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFOJBT3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe%2Fdu5vwj3ROwquRNuYhWhYrF3V1eXmEl8EmewqNvnmAiAem0OVU1s0%2FM%2BXlNxD0o23dd%2FFKQVJKt5u0ZiLOUkLoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM0JJJ73NndnEDg9pSKtwDtSQIIkb%2BSW0qtLHf8xYaDne32%2BYUAHowEFDJCBTB6EciKRawCpDux%2B9ekwgKHWLyiZ19ESu0ZZhiv3wa8R2r%2B%2B5q2tnJgteQYH%2F0D7uCESQnatvS95%2F2I0IOzOw8EGif04H%2ByYKHuMuLHWVpuYW527pViBItXiHq01NyFFL3bKLJlJDdkYTQ6aqIqhz6Qe%2FrJaN9w66hr4GgcBjl9nArWLWmjbyNArYqG21OpAcDnBTHzKax8tss%2Bdj1j0Lm6sA6uOps3ZnnoVhk3CoHUxChyvGUl%2FaL1tEZFGO2foU2rU3WuP7qGx%2BG4TfPfu85R2H0fJMOtYDqBjrVYfNcmteePUtZSAcKjVqwaUdY3gI0YbfWQDjQ0Fz9h7dDlii8dzd0jtrdO2MDn3pEBZf%2B8gu0xst8lgsMoJovuVO3IxpNB%2BgSN8jOPrvDyhmQMw9GHft90hUZh5L80%2FZJ0dZCKcWmhA5HKe6LiwXLAagqYAHCAiZi1wp%2Faxi5bRV2u4Urlnqd2qgE74PrPHbYKULc%2FFB6LVM4J5OaoxMrRzA0jXU3Vg04yQOMVQnl%2BuQi85%2FViaZwQbF6D87yu1sOekY58GlFYE453E%2FpPDh0fVvT0uVYHxM8Pl5wO5aYKQ5i4Gswm8yYvwY6pgF%2Bz3Khv5KK84tMvRfBTxz0Q5oTzfUxZZSKHQLODUemW%2B0Ko4fa2rpF%2B5gkrZmmp7O2cZDnpUlJzQKzue%2FDmv5aKSCBtRoweb3gcHa0Caiy0hQxIqSUpjVBoszUmTnTigbkMopNlMOhHGmI4sJloDzWsFh3RVaT%2BzNvelP0gVIrNUeU0%2B%2BL9UsfMFVv%2BMztIME4QlKV3m3t%2BtAZJlci7HDEjudsQc90&X-Amz-Signature=355bf5ac25b8a738da0a4df468ec732c805a9a7df90fe10fffae3e1ed6d37d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFOJBT3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe%2Fdu5vwj3ROwquRNuYhWhYrF3V1eXmEl8EmewqNvnmAiAem0OVU1s0%2FM%2BXlNxD0o23dd%2FFKQVJKt5u0ZiLOUkLoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM0JJJ73NndnEDg9pSKtwDtSQIIkb%2BSW0qtLHf8xYaDne32%2BYUAHowEFDJCBTB6EciKRawCpDux%2B9ekwgKHWLyiZ19ESu0ZZhiv3wa8R2r%2B%2B5q2tnJgteQYH%2F0D7uCESQnatvS95%2F2I0IOzOw8EGif04H%2ByYKHuMuLHWVpuYW527pViBItXiHq01NyFFL3bKLJlJDdkYTQ6aqIqhz6Qe%2FrJaN9w66hr4GgcBjl9nArWLWmjbyNArYqG21OpAcDnBTHzKax8tss%2Bdj1j0Lm6sA6uOps3ZnnoVhk3CoHUxChyvGUl%2FaL1tEZFGO2foU2rU3WuP7qGx%2BG4TfPfu85R2H0fJMOtYDqBjrVYfNcmteePUtZSAcKjVqwaUdY3gI0YbfWQDjQ0Fz9h7dDlii8dzd0jtrdO2MDn3pEBZf%2B8gu0xst8lgsMoJovuVO3IxpNB%2BgSN8jOPrvDyhmQMw9GHft90hUZh5L80%2FZJ0dZCKcWmhA5HKe6LiwXLAagqYAHCAiZi1wp%2Faxi5bRV2u4Urlnqd2qgE74PrPHbYKULc%2FFB6LVM4J5OaoxMrRzA0jXU3Vg04yQOMVQnl%2BuQi85%2FViaZwQbF6D87yu1sOekY58GlFYE453E%2FpPDh0fVvT0uVYHxM8Pl5wO5aYKQ5i4Gswm8yYvwY6pgF%2Bz3Khv5KK84tMvRfBTxz0Q5oTzfUxZZSKHQLODUemW%2B0Ko4fa2rpF%2B5gkrZmmp7O2cZDnpUlJzQKzue%2FDmv5aKSCBtRoweb3gcHa0Caiy0hQxIqSUpjVBoszUmTnTigbkMopNlMOhHGmI4sJloDzWsFh3RVaT%2BzNvelP0gVIrNUeU0%2B%2BL9UsfMFVv%2BMztIME4QlKV3m3t%2BtAZJlci7HDEjudsQc90&X-Amz-Signature=dd4deb0a4b15deb2fcad1bce3615c98c818b0fd6c84ccbb17c56920c1a63bf6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
