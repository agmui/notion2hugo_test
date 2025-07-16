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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXZPIGU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCxi5fEs2T5UWk37ddat%2FYqR6AvZ2wUxAHzDnUUVIgDdgIgLcEnnBjWHwL2n7s%2FgvcCyQ3ZhHiBP0aLtezA1L0eNtoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOzGjBGC62JnLQdzVCrcAyRtBw6nFF6gwBFhidZWtU6CY9LILCJlv0xKTIVlnyVe4tirG0dP3PlWxHoFAq2PE3QT2BNpO2s7Na0%2FD%2B%2F39tT92tZ0BPJAYKz3AKnemxz59ddcvX3qQaiH1R9fhLZ%2FL3%2BpAXau6Ps7xUuUHI8TDqgATS2rvIV3UdFq%2FjGh7BhaTluPdmf0%2BHlxkMk%2BwoJqhgMnRwLnSepriCAcCk07PrAzjtuMNp0FkAVLlWFxt%2BSA7VS0hUgBkHho%2FpHrdSm3jNHLG8Cgt2zWCHNpb%2FQTP53iILrBng6%2FybPnGi0Ch8tCvP5rM09cbWrDgpk%2Fu%2B5mmTVGUQKJcMKLWb7ybPPsAaGQkbleJhCUahDdXSt482fbHVJosT0ORxiTrEBCZJ9DwdM5PGEha9%2BUO2ksxhlnIjoOWY4BgOLCqik7FLtBEwWVhsmAxUCWugFeDiXMA1Y%2BwmjLP3q5bgS5Mn4mZYI8bVT1oXb9UtQxyGJiLSAbd1PyrpR7dRu4Lyrc6oCZzRsPtx5VLp5AzKz71yWN6JYG3e2uvsNbQQV5tCHsfp%2B15yxEzo1MRvqWEI%2FCXDwu3g9LL%2F3ow7voRlIUS3VrIV8JoAE9MhHD2crVXE4VvZR3WSVMIl3bVtepOruQl8FtMKa93cMGOqUBrz3cfbYxqCYhYXl3Nc%2Fa0sRlnceQ%2F7u6c7DpezOGXPorDBh%2FQO5KV6dCkd2urEMP%2B1vBZtZ5GEkFpg1Lvci95o%2BWFTxVNqdj2bRdwSXImTg%2FcBd3AP%2BfkNY4pdzznlb%2F%2FUtmlzA%2BaLwNc38WWmBC%2BgXkCCd%2FNCBHArs8w6d%2Bsb%2FbYyVzeZuFv4MXqIZiLqpq8Qlfpuyr1wQ2Xf8fXwhBHDr0jR1%2B&X-Amz-Signature=ecc35d127bd8d98f45f85b1e2c66ce0d8939a99c2c369d92157bbc743294f3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXZPIGU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCxi5fEs2T5UWk37ddat%2FYqR6AvZ2wUxAHzDnUUVIgDdgIgLcEnnBjWHwL2n7s%2FgvcCyQ3ZhHiBP0aLtezA1L0eNtoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOzGjBGC62JnLQdzVCrcAyRtBw6nFF6gwBFhidZWtU6CY9LILCJlv0xKTIVlnyVe4tirG0dP3PlWxHoFAq2PE3QT2BNpO2s7Na0%2FD%2B%2F39tT92tZ0BPJAYKz3AKnemxz59ddcvX3qQaiH1R9fhLZ%2FL3%2BpAXau6Ps7xUuUHI8TDqgATS2rvIV3UdFq%2FjGh7BhaTluPdmf0%2BHlxkMk%2BwoJqhgMnRwLnSepriCAcCk07PrAzjtuMNp0FkAVLlWFxt%2BSA7VS0hUgBkHho%2FpHrdSm3jNHLG8Cgt2zWCHNpb%2FQTP53iILrBng6%2FybPnGi0Ch8tCvP5rM09cbWrDgpk%2Fu%2B5mmTVGUQKJcMKLWb7ybPPsAaGQkbleJhCUahDdXSt482fbHVJosT0ORxiTrEBCZJ9DwdM5PGEha9%2BUO2ksxhlnIjoOWY4BgOLCqik7FLtBEwWVhsmAxUCWugFeDiXMA1Y%2BwmjLP3q5bgS5Mn4mZYI8bVT1oXb9UtQxyGJiLSAbd1PyrpR7dRu4Lyrc6oCZzRsPtx5VLp5AzKz71yWN6JYG3e2uvsNbQQV5tCHsfp%2B15yxEzo1MRvqWEI%2FCXDwu3g9LL%2F3ow7voRlIUS3VrIV8JoAE9MhHD2crVXE4VvZR3WSVMIl3bVtepOruQl8FtMKa93cMGOqUBrz3cfbYxqCYhYXl3Nc%2Fa0sRlnceQ%2F7u6c7DpezOGXPorDBh%2FQO5KV6dCkd2urEMP%2B1vBZtZ5GEkFpg1Lvci95o%2BWFTxVNqdj2bRdwSXImTg%2FcBd3AP%2BfkNY4pdzznlb%2F%2FUtmlzA%2BaLwNc38WWmBC%2BgXkCCd%2FNCBHArs8w6d%2Bsb%2FbYyVzeZuFv4MXqIZiLqpq8Qlfpuyr1wQ2Xf8fXwhBHDr0jR1%2B&X-Amz-Signature=4f505b757710c3e3c4b1da9032bddd24eec73263f1114e48fb76d5ed5f3bec31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXZPIGU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCxi5fEs2T5UWk37ddat%2FYqR6AvZ2wUxAHzDnUUVIgDdgIgLcEnnBjWHwL2n7s%2FgvcCyQ3ZhHiBP0aLtezA1L0eNtoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOzGjBGC62JnLQdzVCrcAyRtBw6nFF6gwBFhidZWtU6CY9LILCJlv0xKTIVlnyVe4tirG0dP3PlWxHoFAq2PE3QT2BNpO2s7Na0%2FD%2B%2F39tT92tZ0BPJAYKz3AKnemxz59ddcvX3qQaiH1R9fhLZ%2FL3%2BpAXau6Ps7xUuUHI8TDqgATS2rvIV3UdFq%2FjGh7BhaTluPdmf0%2BHlxkMk%2BwoJqhgMnRwLnSepriCAcCk07PrAzjtuMNp0FkAVLlWFxt%2BSA7VS0hUgBkHho%2FpHrdSm3jNHLG8Cgt2zWCHNpb%2FQTP53iILrBng6%2FybPnGi0Ch8tCvP5rM09cbWrDgpk%2Fu%2B5mmTVGUQKJcMKLWb7ybPPsAaGQkbleJhCUahDdXSt482fbHVJosT0ORxiTrEBCZJ9DwdM5PGEha9%2BUO2ksxhlnIjoOWY4BgOLCqik7FLtBEwWVhsmAxUCWugFeDiXMA1Y%2BwmjLP3q5bgS5Mn4mZYI8bVT1oXb9UtQxyGJiLSAbd1PyrpR7dRu4Lyrc6oCZzRsPtx5VLp5AzKz71yWN6JYG3e2uvsNbQQV5tCHsfp%2B15yxEzo1MRvqWEI%2FCXDwu3g9LL%2F3ow7voRlIUS3VrIV8JoAE9MhHD2crVXE4VvZR3WSVMIl3bVtepOruQl8FtMKa93cMGOqUBrz3cfbYxqCYhYXl3Nc%2Fa0sRlnceQ%2F7u6c7DpezOGXPorDBh%2FQO5KV6dCkd2urEMP%2B1vBZtZ5GEkFpg1Lvci95o%2BWFTxVNqdj2bRdwSXImTg%2FcBd3AP%2BfkNY4pdzznlb%2F%2FUtmlzA%2BaLwNc38WWmBC%2BgXkCCd%2FNCBHArs8w6d%2Bsb%2FbYyVzeZuFv4MXqIZiLqpq8Qlfpuyr1wQ2Xf8fXwhBHDr0jR1%2B&X-Amz-Signature=302c7635c4aa58088b16aa9a6da1d71b1f35f6e4b4027c6cfe451eb51e7cf220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXZPIGU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCxi5fEs2T5UWk37ddat%2FYqR6AvZ2wUxAHzDnUUVIgDdgIgLcEnnBjWHwL2n7s%2FgvcCyQ3ZhHiBP0aLtezA1L0eNtoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOzGjBGC62JnLQdzVCrcAyRtBw6nFF6gwBFhidZWtU6CY9LILCJlv0xKTIVlnyVe4tirG0dP3PlWxHoFAq2PE3QT2BNpO2s7Na0%2FD%2B%2F39tT92tZ0BPJAYKz3AKnemxz59ddcvX3qQaiH1R9fhLZ%2FL3%2BpAXau6Ps7xUuUHI8TDqgATS2rvIV3UdFq%2FjGh7BhaTluPdmf0%2BHlxkMk%2BwoJqhgMnRwLnSepriCAcCk07PrAzjtuMNp0FkAVLlWFxt%2BSA7VS0hUgBkHho%2FpHrdSm3jNHLG8Cgt2zWCHNpb%2FQTP53iILrBng6%2FybPnGi0Ch8tCvP5rM09cbWrDgpk%2Fu%2B5mmTVGUQKJcMKLWb7ybPPsAaGQkbleJhCUahDdXSt482fbHVJosT0ORxiTrEBCZJ9DwdM5PGEha9%2BUO2ksxhlnIjoOWY4BgOLCqik7FLtBEwWVhsmAxUCWugFeDiXMA1Y%2BwmjLP3q5bgS5Mn4mZYI8bVT1oXb9UtQxyGJiLSAbd1PyrpR7dRu4Lyrc6oCZzRsPtx5VLp5AzKz71yWN6JYG3e2uvsNbQQV5tCHsfp%2B15yxEzo1MRvqWEI%2FCXDwu3g9LL%2F3ow7voRlIUS3VrIV8JoAE9MhHD2crVXE4VvZR3WSVMIl3bVtepOruQl8FtMKa93cMGOqUBrz3cfbYxqCYhYXl3Nc%2Fa0sRlnceQ%2F7u6c7DpezOGXPorDBh%2FQO5KV6dCkd2urEMP%2B1vBZtZ5GEkFpg1Lvci95o%2BWFTxVNqdj2bRdwSXImTg%2FcBd3AP%2BfkNY4pdzznlb%2F%2FUtmlzA%2BaLwNc38WWmBC%2BgXkCCd%2FNCBHArs8w6d%2Bsb%2FbYyVzeZuFv4MXqIZiLqpq8Qlfpuyr1wQ2Xf8fXwhBHDr0jR1%2B&X-Amz-Signature=8726dc9069e8a83c325607e78cc09d94fa28b2deb0e88fa2eea16b84ba0ef180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXZPIGU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCxi5fEs2T5UWk37ddat%2FYqR6AvZ2wUxAHzDnUUVIgDdgIgLcEnnBjWHwL2n7s%2FgvcCyQ3ZhHiBP0aLtezA1L0eNtoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOzGjBGC62JnLQdzVCrcAyRtBw6nFF6gwBFhidZWtU6CY9LILCJlv0xKTIVlnyVe4tirG0dP3PlWxHoFAq2PE3QT2BNpO2s7Na0%2FD%2B%2F39tT92tZ0BPJAYKz3AKnemxz59ddcvX3qQaiH1R9fhLZ%2FL3%2BpAXau6Ps7xUuUHI8TDqgATS2rvIV3UdFq%2FjGh7BhaTluPdmf0%2BHlxkMk%2BwoJqhgMnRwLnSepriCAcCk07PrAzjtuMNp0FkAVLlWFxt%2BSA7VS0hUgBkHho%2FpHrdSm3jNHLG8Cgt2zWCHNpb%2FQTP53iILrBng6%2FybPnGi0Ch8tCvP5rM09cbWrDgpk%2Fu%2B5mmTVGUQKJcMKLWb7ybPPsAaGQkbleJhCUahDdXSt482fbHVJosT0ORxiTrEBCZJ9DwdM5PGEha9%2BUO2ksxhlnIjoOWY4BgOLCqik7FLtBEwWVhsmAxUCWugFeDiXMA1Y%2BwmjLP3q5bgS5Mn4mZYI8bVT1oXb9UtQxyGJiLSAbd1PyrpR7dRu4Lyrc6oCZzRsPtx5VLp5AzKz71yWN6JYG3e2uvsNbQQV5tCHsfp%2B15yxEzo1MRvqWEI%2FCXDwu3g9LL%2F3ow7voRlIUS3VrIV8JoAE9MhHD2crVXE4VvZR3WSVMIl3bVtepOruQl8FtMKa93cMGOqUBrz3cfbYxqCYhYXl3Nc%2Fa0sRlnceQ%2F7u6c7DpezOGXPorDBh%2FQO5KV6dCkd2urEMP%2B1vBZtZ5GEkFpg1Lvci95o%2BWFTxVNqdj2bRdwSXImTg%2FcBd3AP%2BfkNY4pdzznlb%2F%2FUtmlzA%2BaLwNc38WWmBC%2BgXkCCd%2FNCBHArs8w6d%2Bsb%2FbYyVzeZuFv4MXqIZiLqpq8Qlfpuyr1wQ2Xf8fXwhBHDr0jR1%2B&X-Amz-Signature=c6faa72fb6a530c415c4afcc3bbfaa10e7a7db327a614940ae447fabfbf72799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
