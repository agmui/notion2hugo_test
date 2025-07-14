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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMEHF5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDWyRgC7pt%2F1Z5kmmcdtInLXg9o9p4i0htx2OwT1aTXHgIhAKgVux21qwvBDiGgrA9nmw4S%2BRzSBvr8YNEUEZzbJrz%2BKv8DCCgQABoMNjM3NDIzMTgzODA1Igwxvh%2F579zOhcbVxgsq3APVkYj3IFAriax2%2F8CoCUloNnRbdUE2RhNwdaAKeavEytpd8459GQewjPM27gpF4z9%2BLzOcLGZ1UmYmkhA%2Bw22q%2Fxy7pah8L7UvGADRYkjkM0h27fzWfohQL5Tr2cfmTGm9Aunh2MSatvAsgxuLAK1t7aYPGNKBrQq2QlD09zYEeWlzLauXhTbTpDa6PmhqnkPs2jKSObXx66frW%2FjzQgLMShbESmviwxqoyuyAwuzxh66MqY8taln6iGRfMqHrQ26ZVqMvA5C60UjH2QMBfcIAi%2F9S4ao6nza%2BT7uKobHJqX%2B6au8pt2rc1NBXiphC44xCAjBRkG%2FzuVXML9Y9pKQ7FzcNR%2BybIEbvDbgbjWaGRd%2FUf5tgKkyIipK1%2BoHMWaXCqi5%2Buq7d%2FyY%2FmsjWMDtMcJhRQ67ao0BqnLiDP9jppt2jFz%2F2WHLA8kkKcHywaJgNKCGj9vMpaEOl0nyuszmU%2B30aYaLDTzUjXtODwi2tTrhMevOMW06f5c%2FWCmMjwX1hYiTtWR9RTvYsXcvN3pWY8ny0ibGZ9L1KuahFNa1c8qFoY%2BBsXX3%2BHcfNKofvTJ69aDwrU%2B%2FTS04dpnU%2F2%2Biiai06vEG2p8lBitPEioKmDXty0s80sNEP5Ym2YDD529LDBjqkAb950pi%2B9spl6%2BUbVOU0OKMJ5n469UGtKSNs6cmhaVRISgOY%2BSHpshIs5Ue8IAbjtBWuK7Ug6tWmIhL4ZdPRpYXornEsHK%2B2caOR7rk1g6s6rVXVyP7T5i3oMk31WAy%2BoxbVbXI%2FNG%2FVKdpeAZ22HO1Qzq1m4DLlPrJ%2B%2F3WiEWI11FONDPg%2FIi73wm6FitNmQ40mwalS6S8P0J%2Bz64Mug9ilQR66&X-Amz-Signature=ad30e23eec1c0a59ef5f75bab0ef12c7c061b718ebbf9e3c86442d9a66bd25db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMEHF5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDWyRgC7pt%2F1Z5kmmcdtInLXg9o9p4i0htx2OwT1aTXHgIhAKgVux21qwvBDiGgrA9nmw4S%2BRzSBvr8YNEUEZzbJrz%2BKv8DCCgQABoMNjM3NDIzMTgzODA1Igwxvh%2F579zOhcbVxgsq3APVkYj3IFAriax2%2F8CoCUloNnRbdUE2RhNwdaAKeavEytpd8459GQewjPM27gpF4z9%2BLzOcLGZ1UmYmkhA%2Bw22q%2Fxy7pah8L7UvGADRYkjkM0h27fzWfohQL5Tr2cfmTGm9Aunh2MSatvAsgxuLAK1t7aYPGNKBrQq2QlD09zYEeWlzLauXhTbTpDa6PmhqnkPs2jKSObXx66frW%2FjzQgLMShbESmviwxqoyuyAwuzxh66MqY8taln6iGRfMqHrQ26ZVqMvA5C60UjH2QMBfcIAi%2F9S4ao6nza%2BT7uKobHJqX%2B6au8pt2rc1NBXiphC44xCAjBRkG%2FzuVXML9Y9pKQ7FzcNR%2BybIEbvDbgbjWaGRd%2FUf5tgKkyIipK1%2BoHMWaXCqi5%2Buq7d%2FyY%2FmsjWMDtMcJhRQ67ao0BqnLiDP9jppt2jFz%2F2WHLA8kkKcHywaJgNKCGj9vMpaEOl0nyuszmU%2B30aYaLDTzUjXtODwi2tTrhMevOMW06f5c%2FWCmMjwX1hYiTtWR9RTvYsXcvN3pWY8ny0ibGZ9L1KuahFNa1c8qFoY%2BBsXX3%2BHcfNKofvTJ69aDwrU%2B%2FTS04dpnU%2F2%2Biiai06vEG2p8lBitPEioKmDXty0s80sNEP5Ym2YDD529LDBjqkAb950pi%2B9spl6%2BUbVOU0OKMJ5n469UGtKSNs6cmhaVRISgOY%2BSHpshIs5Ue8IAbjtBWuK7Ug6tWmIhL4ZdPRpYXornEsHK%2B2caOR7rk1g6s6rVXVyP7T5i3oMk31WAy%2BoxbVbXI%2FNG%2FVKdpeAZ22HO1Qzq1m4DLlPrJ%2B%2F3WiEWI11FONDPg%2FIi73wm6FitNmQ40mwalS6S8P0J%2Bz64Mug9ilQR66&X-Amz-Signature=c55ff3d011f0310b7d7325fe23a0628ae0a102de63e9662f773b02c6fb8f1616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMEHF5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDWyRgC7pt%2F1Z5kmmcdtInLXg9o9p4i0htx2OwT1aTXHgIhAKgVux21qwvBDiGgrA9nmw4S%2BRzSBvr8YNEUEZzbJrz%2BKv8DCCgQABoMNjM3NDIzMTgzODA1Igwxvh%2F579zOhcbVxgsq3APVkYj3IFAriax2%2F8CoCUloNnRbdUE2RhNwdaAKeavEytpd8459GQewjPM27gpF4z9%2BLzOcLGZ1UmYmkhA%2Bw22q%2Fxy7pah8L7UvGADRYkjkM0h27fzWfohQL5Tr2cfmTGm9Aunh2MSatvAsgxuLAK1t7aYPGNKBrQq2QlD09zYEeWlzLauXhTbTpDa6PmhqnkPs2jKSObXx66frW%2FjzQgLMShbESmviwxqoyuyAwuzxh66MqY8taln6iGRfMqHrQ26ZVqMvA5C60UjH2QMBfcIAi%2F9S4ao6nza%2BT7uKobHJqX%2B6au8pt2rc1NBXiphC44xCAjBRkG%2FzuVXML9Y9pKQ7FzcNR%2BybIEbvDbgbjWaGRd%2FUf5tgKkyIipK1%2BoHMWaXCqi5%2Buq7d%2FyY%2FmsjWMDtMcJhRQ67ao0BqnLiDP9jppt2jFz%2F2WHLA8kkKcHywaJgNKCGj9vMpaEOl0nyuszmU%2B30aYaLDTzUjXtODwi2tTrhMevOMW06f5c%2FWCmMjwX1hYiTtWR9RTvYsXcvN3pWY8ny0ibGZ9L1KuahFNa1c8qFoY%2BBsXX3%2BHcfNKofvTJ69aDwrU%2B%2FTS04dpnU%2F2%2Biiai06vEG2p8lBitPEioKmDXty0s80sNEP5Ym2YDD529LDBjqkAb950pi%2B9spl6%2BUbVOU0OKMJ5n469UGtKSNs6cmhaVRISgOY%2BSHpshIs5Ue8IAbjtBWuK7Ug6tWmIhL4ZdPRpYXornEsHK%2B2caOR7rk1g6s6rVXVyP7T5i3oMk31WAy%2BoxbVbXI%2FNG%2FVKdpeAZ22HO1Qzq1m4DLlPrJ%2B%2F3WiEWI11FONDPg%2FIi73wm6FitNmQ40mwalS6S8P0J%2Bz64Mug9ilQR66&X-Amz-Signature=c47649043e73a03bbaaea6b8cf610590b4b1daf9c23a37a5ba990ba02135b4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMEHF5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDWyRgC7pt%2F1Z5kmmcdtInLXg9o9p4i0htx2OwT1aTXHgIhAKgVux21qwvBDiGgrA9nmw4S%2BRzSBvr8YNEUEZzbJrz%2BKv8DCCgQABoMNjM3NDIzMTgzODA1Igwxvh%2F579zOhcbVxgsq3APVkYj3IFAriax2%2F8CoCUloNnRbdUE2RhNwdaAKeavEytpd8459GQewjPM27gpF4z9%2BLzOcLGZ1UmYmkhA%2Bw22q%2Fxy7pah8L7UvGADRYkjkM0h27fzWfohQL5Tr2cfmTGm9Aunh2MSatvAsgxuLAK1t7aYPGNKBrQq2QlD09zYEeWlzLauXhTbTpDa6PmhqnkPs2jKSObXx66frW%2FjzQgLMShbESmviwxqoyuyAwuzxh66MqY8taln6iGRfMqHrQ26ZVqMvA5C60UjH2QMBfcIAi%2F9S4ao6nza%2BT7uKobHJqX%2B6au8pt2rc1NBXiphC44xCAjBRkG%2FzuVXML9Y9pKQ7FzcNR%2BybIEbvDbgbjWaGRd%2FUf5tgKkyIipK1%2BoHMWaXCqi5%2Buq7d%2FyY%2FmsjWMDtMcJhRQ67ao0BqnLiDP9jppt2jFz%2F2WHLA8kkKcHywaJgNKCGj9vMpaEOl0nyuszmU%2B30aYaLDTzUjXtODwi2tTrhMevOMW06f5c%2FWCmMjwX1hYiTtWR9RTvYsXcvN3pWY8ny0ibGZ9L1KuahFNa1c8qFoY%2BBsXX3%2BHcfNKofvTJ69aDwrU%2B%2FTS04dpnU%2F2%2Biiai06vEG2p8lBitPEioKmDXty0s80sNEP5Ym2YDD529LDBjqkAb950pi%2B9spl6%2BUbVOU0OKMJ5n469UGtKSNs6cmhaVRISgOY%2BSHpshIs5Ue8IAbjtBWuK7Ug6tWmIhL4ZdPRpYXornEsHK%2B2caOR7rk1g6s6rVXVyP7T5i3oMk31WAy%2BoxbVbXI%2FNG%2FVKdpeAZ22HO1Qzq1m4DLlPrJ%2B%2F3WiEWI11FONDPg%2FIi73wm6FitNmQ40mwalS6S8P0J%2Bz64Mug9ilQR66&X-Amz-Signature=7a8349fb0fdd880dd509852c61966bb1ede9abda8dab455e3ee00a3b9a6bf345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMEHF5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDWyRgC7pt%2F1Z5kmmcdtInLXg9o9p4i0htx2OwT1aTXHgIhAKgVux21qwvBDiGgrA9nmw4S%2BRzSBvr8YNEUEZzbJrz%2BKv8DCCgQABoMNjM3NDIzMTgzODA1Igwxvh%2F579zOhcbVxgsq3APVkYj3IFAriax2%2F8CoCUloNnRbdUE2RhNwdaAKeavEytpd8459GQewjPM27gpF4z9%2BLzOcLGZ1UmYmkhA%2Bw22q%2Fxy7pah8L7UvGADRYkjkM0h27fzWfohQL5Tr2cfmTGm9Aunh2MSatvAsgxuLAK1t7aYPGNKBrQq2QlD09zYEeWlzLauXhTbTpDa6PmhqnkPs2jKSObXx66frW%2FjzQgLMShbESmviwxqoyuyAwuzxh66MqY8taln6iGRfMqHrQ26ZVqMvA5C60UjH2QMBfcIAi%2F9S4ao6nza%2BT7uKobHJqX%2B6au8pt2rc1NBXiphC44xCAjBRkG%2FzuVXML9Y9pKQ7FzcNR%2BybIEbvDbgbjWaGRd%2FUf5tgKkyIipK1%2BoHMWaXCqi5%2Buq7d%2FyY%2FmsjWMDtMcJhRQ67ao0BqnLiDP9jppt2jFz%2F2WHLA8kkKcHywaJgNKCGj9vMpaEOl0nyuszmU%2B30aYaLDTzUjXtODwi2tTrhMevOMW06f5c%2FWCmMjwX1hYiTtWR9RTvYsXcvN3pWY8ny0ibGZ9L1KuahFNa1c8qFoY%2BBsXX3%2BHcfNKofvTJ69aDwrU%2B%2FTS04dpnU%2F2%2Biiai06vEG2p8lBitPEioKmDXty0s80sNEP5Ym2YDD529LDBjqkAb950pi%2B9spl6%2BUbVOU0OKMJ5n469UGtKSNs6cmhaVRISgOY%2BSHpshIs5Ue8IAbjtBWuK7Ug6tWmIhL4ZdPRpYXornEsHK%2B2caOR7rk1g6s6rVXVyP7T5i3oMk31WAy%2BoxbVbXI%2FNG%2FVKdpeAZ22HO1Qzq1m4DLlPrJ%2B%2F3WiEWI11FONDPg%2FIi73wm6FitNmQ40mwalS6S8P0J%2Bz64Mug9ilQR66&X-Amz-Signature=afeb8a3dad13ecc0921cfb97e52793f20cbe4375c116d436179eff0f06ba4c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
