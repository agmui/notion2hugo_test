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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYQR7FN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAE5a2eZfOc%2Fea7zhixnZC%2FkuNgS2maLl4GX6Ch87o0gIgc7F3XUctWGIySymMKaZ%2BL92WHsFlBg6MMZNAYYI6Cscq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPGQXAHNPh1FaolUCircA0VPEfpzYq%2BjVGlW0SZHBtlG9moWF4LEPiHB90kxneXa%2FO%2Fy7GoPgg%2BOL3Ho4Bta9WT8ofVijZc2CDA8ncQtICQek%2FpwMuTQzSksiSRG%2FxMIXCfDAR28RWHddkQWDpQmjf%2B2V09CKUdsIS7EvZtP38N6yI63TmpKpn2voq11rz3jVi2gzn6sxQXuprkqUZsSSgUalLdUvOvSyZ%2BtJ%2Bq%2B%2Fpb85pSOFg1bMCU4fpibubS84k5My9WuQ6koTNXy9TQfBzWx9TBhFygBBBs2l3wqXsgP7A%2Bhni0scQI1meOMEsSYczVGbMgeeMtomP%2FT9snZu22FzpobhfrU84uwpHF%2B3xG3pZ33XffKcvxIezvJlFdiFMLB1bnNHYEilNn5BlFBVOaQDBZDFED0PWFuas6B%2BnkAxXVQrwvefwxU0LPceZIhRDEtkr%2FJyovIEBCSgBOk0bwnXkdbVrrdQ6cgT95V7%2BeOeHlXDhxa5aCkz447L9P7alQwNM9hrHPKSeXurMqmbN%2FkJvnljv4XEEii2lCed3%2BDSPlQPUGuo5K166yb2CJiQ%2FlFWjUtokGtThIQqdhseWImmfNptJD1AaORPGKhZy4PZj0oUnU9uCdHAP3%2FLyRg8CnlGhIl3ktrJyjkML%2BOnL8GOqUBkOJWYFRoPk76FJjQSKLRjs8FVj54yefnbX5kmZDR5Ffx8LZk9lGug%2BAXTIOMJsMC0fy4PwuHyBL5yLAAkjy5YEZSdBnT%2Bjz7Z0g%2Bxf%2FzXeZ1pI%2FBwEQOGk2jZHbsIiAZQTLrsfVuh3jHiSRG%2F%2FZYRCawKtwZK2OWtc8F%2BlpS9P3yGm4oiHIcn%2BGaBiQZsa7v1kXHOyEE8ifke6nVoFHg1IHjpVG2&X-Amz-Signature=8346fac4e06e051d0c8ab009f2bdbc0c67a33b7fd4b355da2937dfd09a00e1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYQR7FN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAE5a2eZfOc%2Fea7zhixnZC%2FkuNgS2maLl4GX6Ch87o0gIgc7F3XUctWGIySymMKaZ%2BL92WHsFlBg6MMZNAYYI6Cscq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPGQXAHNPh1FaolUCircA0VPEfpzYq%2BjVGlW0SZHBtlG9moWF4LEPiHB90kxneXa%2FO%2Fy7GoPgg%2BOL3Ho4Bta9WT8ofVijZc2CDA8ncQtICQek%2FpwMuTQzSksiSRG%2FxMIXCfDAR28RWHddkQWDpQmjf%2B2V09CKUdsIS7EvZtP38N6yI63TmpKpn2voq11rz3jVi2gzn6sxQXuprkqUZsSSgUalLdUvOvSyZ%2BtJ%2Bq%2B%2Fpb85pSOFg1bMCU4fpibubS84k5My9WuQ6koTNXy9TQfBzWx9TBhFygBBBs2l3wqXsgP7A%2Bhni0scQI1meOMEsSYczVGbMgeeMtomP%2FT9snZu22FzpobhfrU84uwpHF%2B3xG3pZ33XffKcvxIezvJlFdiFMLB1bnNHYEilNn5BlFBVOaQDBZDFED0PWFuas6B%2BnkAxXVQrwvefwxU0LPceZIhRDEtkr%2FJyovIEBCSgBOk0bwnXkdbVrrdQ6cgT95V7%2BeOeHlXDhxa5aCkz447L9P7alQwNM9hrHPKSeXurMqmbN%2FkJvnljv4XEEii2lCed3%2BDSPlQPUGuo5K166yb2CJiQ%2FlFWjUtokGtThIQqdhseWImmfNptJD1AaORPGKhZy4PZj0oUnU9uCdHAP3%2FLyRg8CnlGhIl3ktrJyjkML%2BOnL8GOqUBkOJWYFRoPk76FJjQSKLRjs8FVj54yefnbX5kmZDR5Ffx8LZk9lGug%2BAXTIOMJsMC0fy4PwuHyBL5yLAAkjy5YEZSdBnT%2Bjz7Z0g%2Bxf%2FzXeZ1pI%2FBwEQOGk2jZHbsIiAZQTLrsfVuh3jHiSRG%2F%2FZYRCawKtwZK2OWtc8F%2BlpS9P3yGm4oiHIcn%2BGaBiQZsa7v1kXHOyEE8ifke6nVoFHg1IHjpVG2&X-Amz-Signature=ccf61e8c00658fb025ae58b24f0110ca44ac7b9b5ad4d848915b26bcfd1619a8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYQR7FN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAE5a2eZfOc%2Fea7zhixnZC%2FkuNgS2maLl4GX6Ch87o0gIgc7F3XUctWGIySymMKaZ%2BL92WHsFlBg6MMZNAYYI6Cscq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPGQXAHNPh1FaolUCircA0VPEfpzYq%2BjVGlW0SZHBtlG9moWF4LEPiHB90kxneXa%2FO%2Fy7GoPgg%2BOL3Ho4Bta9WT8ofVijZc2CDA8ncQtICQek%2FpwMuTQzSksiSRG%2FxMIXCfDAR28RWHddkQWDpQmjf%2B2V09CKUdsIS7EvZtP38N6yI63TmpKpn2voq11rz3jVi2gzn6sxQXuprkqUZsSSgUalLdUvOvSyZ%2BtJ%2Bq%2B%2Fpb85pSOFg1bMCU4fpibubS84k5My9WuQ6koTNXy9TQfBzWx9TBhFygBBBs2l3wqXsgP7A%2Bhni0scQI1meOMEsSYczVGbMgeeMtomP%2FT9snZu22FzpobhfrU84uwpHF%2B3xG3pZ33XffKcvxIezvJlFdiFMLB1bnNHYEilNn5BlFBVOaQDBZDFED0PWFuas6B%2BnkAxXVQrwvefwxU0LPceZIhRDEtkr%2FJyovIEBCSgBOk0bwnXkdbVrrdQ6cgT95V7%2BeOeHlXDhxa5aCkz447L9P7alQwNM9hrHPKSeXurMqmbN%2FkJvnljv4XEEii2lCed3%2BDSPlQPUGuo5K166yb2CJiQ%2FlFWjUtokGtThIQqdhseWImmfNptJD1AaORPGKhZy4PZj0oUnU9uCdHAP3%2FLyRg8CnlGhIl3ktrJyjkML%2BOnL8GOqUBkOJWYFRoPk76FJjQSKLRjs8FVj54yefnbX5kmZDR5Ffx8LZk9lGug%2BAXTIOMJsMC0fy4PwuHyBL5yLAAkjy5YEZSdBnT%2Bjz7Z0g%2Bxf%2FzXeZ1pI%2FBwEQOGk2jZHbsIiAZQTLrsfVuh3jHiSRG%2F%2FZYRCawKtwZK2OWtc8F%2BlpS9P3yGm4oiHIcn%2BGaBiQZsa7v1kXHOyEE8ifke6nVoFHg1IHjpVG2&X-Amz-Signature=819644e75c22fc2457806e09fcaa85515dabfa1d2efba80e9eb62ab16818872e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYQR7FN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAE5a2eZfOc%2Fea7zhixnZC%2FkuNgS2maLl4GX6Ch87o0gIgc7F3XUctWGIySymMKaZ%2BL92WHsFlBg6MMZNAYYI6Cscq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPGQXAHNPh1FaolUCircA0VPEfpzYq%2BjVGlW0SZHBtlG9moWF4LEPiHB90kxneXa%2FO%2Fy7GoPgg%2BOL3Ho4Bta9WT8ofVijZc2CDA8ncQtICQek%2FpwMuTQzSksiSRG%2FxMIXCfDAR28RWHddkQWDpQmjf%2B2V09CKUdsIS7EvZtP38N6yI63TmpKpn2voq11rz3jVi2gzn6sxQXuprkqUZsSSgUalLdUvOvSyZ%2BtJ%2Bq%2B%2Fpb85pSOFg1bMCU4fpibubS84k5My9WuQ6koTNXy9TQfBzWx9TBhFygBBBs2l3wqXsgP7A%2Bhni0scQI1meOMEsSYczVGbMgeeMtomP%2FT9snZu22FzpobhfrU84uwpHF%2B3xG3pZ33XffKcvxIezvJlFdiFMLB1bnNHYEilNn5BlFBVOaQDBZDFED0PWFuas6B%2BnkAxXVQrwvefwxU0LPceZIhRDEtkr%2FJyovIEBCSgBOk0bwnXkdbVrrdQ6cgT95V7%2BeOeHlXDhxa5aCkz447L9P7alQwNM9hrHPKSeXurMqmbN%2FkJvnljv4XEEii2lCed3%2BDSPlQPUGuo5K166yb2CJiQ%2FlFWjUtokGtThIQqdhseWImmfNptJD1AaORPGKhZy4PZj0oUnU9uCdHAP3%2FLyRg8CnlGhIl3ktrJyjkML%2BOnL8GOqUBkOJWYFRoPk76FJjQSKLRjs8FVj54yefnbX5kmZDR5Ffx8LZk9lGug%2BAXTIOMJsMC0fy4PwuHyBL5yLAAkjy5YEZSdBnT%2Bjz7Z0g%2Bxf%2FzXeZ1pI%2FBwEQOGk2jZHbsIiAZQTLrsfVuh3jHiSRG%2F%2FZYRCawKtwZK2OWtc8F%2BlpS9P3yGm4oiHIcn%2BGaBiQZsa7v1kXHOyEE8ifke6nVoFHg1IHjpVG2&X-Amz-Signature=4fcc0e880249835973a3b251731472a3c1fb74110947a0c02150486878c521d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYQR7FN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAE5a2eZfOc%2Fea7zhixnZC%2FkuNgS2maLl4GX6Ch87o0gIgc7F3XUctWGIySymMKaZ%2BL92WHsFlBg6MMZNAYYI6Cscq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPGQXAHNPh1FaolUCircA0VPEfpzYq%2BjVGlW0SZHBtlG9moWF4LEPiHB90kxneXa%2FO%2Fy7GoPgg%2BOL3Ho4Bta9WT8ofVijZc2CDA8ncQtICQek%2FpwMuTQzSksiSRG%2FxMIXCfDAR28RWHddkQWDpQmjf%2B2V09CKUdsIS7EvZtP38N6yI63TmpKpn2voq11rz3jVi2gzn6sxQXuprkqUZsSSgUalLdUvOvSyZ%2BtJ%2Bq%2B%2Fpb85pSOFg1bMCU4fpibubS84k5My9WuQ6koTNXy9TQfBzWx9TBhFygBBBs2l3wqXsgP7A%2Bhni0scQI1meOMEsSYczVGbMgeeMtomP%2FT9snZu22FzpobhfrU84uwpHF%2B3xG3pZ33XffKcvxIezvJlFdiFMLB1bnNHYEilNn5BlFBVOaQDBZDFED0PWFuas6B%2BnkAxXVQrwvefwxU0LPceZIhRDEtkr%2FJyovIEBCSgBOk0bwnXkdbVrrdQ6cgT95V7%2BeOeHlXDhxa5aCkz447L9P7alQwNM9hrHPKSeXurMqmbN%2FkJvnljv4XEEii2lCed3%2BDSPlQPUGuo5K166yb2CJiQ%2FlFWjUtokGtThIQqdhseWImmfNptJD1AaORPGKhZy4PZj0oUnU9uCdHAP3%2FLyRg8CnlGhIl3ktrJyjkML%2BOnL8GOqUBkOJWYFRoPk76FJjQSKLRjs8FVj54yefnbX5kmZDR5Ffx8LZk9lGug%2BAXTIOMJsMC0fy4PwuHyBL5yLAAkjy5YEZSdBnT%2Bjz7Z0g%2Bxf%2FzXeZ1pI%2FBwEQOGk2jZHbsIiAZQTLrsfVuh3jHiSRG%2F%2FZYRCawKtwZK2OWtc8F%2BlpS9P3yGm4oiHIcn%2BGaBiQZsa7v1kXHOyEE8ifke6nVoFHg1IHjpVG2&X-Amz-Signature=155048f201eff2563bd70ae19210ffe3535520212c42106dfde6b690732a9fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
