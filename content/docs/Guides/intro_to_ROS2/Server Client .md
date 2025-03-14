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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKISHSHB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcfuiYU9LwWv3ouLYMzQ5DNV7v5dmyzzCGDt7j4QolWAiBDfVw5BpWqQ%2FyA8iAk95SN35nqVLb5V1A8Eq0kolbwjyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRIK0ur14mTBVRULKtwDtyG2CsV8AyjTNUtc63Pjut7s9chHooYpsmDGfAfTwifM5A92rjjaEDgcyFz9gkoXqAjhrlaX%2FpN9EIUOzvQcrGo8M7er3G1Okaedk6OkdiPJsOZ8obwbne9of%2F4N2eNNsVcafXUZ6b1GkQ4Eax7k1sChnbi5SSYGvPVYxg32m%2FNs2Y6Q%2FQxOQYq5XEfl0Nlb4RIAzKuSWAlVv%2F5YXFJrSGDnnci1lo%2BzW5mUNKaA7QCadDl%2F2jKJ0RVuNcJfoyxmsAKIKM0yP%2B8fS%2Bcdwql9Eyv5lhMyUZBtb4QyHTtl8fEsKFkGtTFo75Dp%2FJpWrWVQAUI76lqthhy1HTmwh2G4mkGQpOSoZhzN9vrEOyi8yT9ftddDF4GPwEA57FcAfQjd27uv%2FUFaS62DJBGELNkgaYRC20uITRp58ZPxaNTD5cBUc2D0VOFaxbwgEdIlObe3SWLLcYyhE9XNJf5b7SVvZhjBWpsV8Pd0RlA66%2BtcE1dTIIwIpw06bCAif%2FkShxrKLGI7SnrMYtxj7PBiz9vga8nyovZcAK%2BaJKwKLvT3%2FPyyCXZxCBy%2Ft4WoTztrVZfad8v%2FkXH0odB89ewyAA2GHnXPQDaQho54yXlvfrWb050osg4MZ9pkS5zIQSAwsPnQvgY6pgHuDdtj0DZBTvXLVuSzaG16OeEFtJ%2BqA380J%2FBJ5xRJ5YQQfMI5ao8746rvqv4J9NcNvhthkGF7itR%2BT3W%2B%2FoVjkPKJGJX7H%2FkFit0J59rdCdnzENO%2BKAvwwhsOIGAMJgf9M%2FIXKivRgDBjFCiyuG21SFCM6gbm5UTB3Dy5IrkGBDxZ0W57wizG7n%2BVfjN0x6F%2BDBiB8q3V9Up60sgGrljkPX%2BM306Z&X-Amz-Signature=7e011e164bff90ee9ca74d764f510fee79e6e58b3ce6cb93ac469d21544afdd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKISHSHB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcfuiYU9LwWv3ouLYMzQ5DNV7v5dmyzzCGDt7j4QolWAiBDfVw5BpWqQ%2FyA8iAk95SN35nqVLb5V1A8Eq0kolbwjyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRIK0ur14mTBVRULKtwDtyG2CsV8AyjTNUtc63Pjut7s9chHooYpsmDGfAfTwifM5A92rjjaEDgcyFz9gkoXqAjhrlaX%2FpN9EIUOzvQcrGo8M7er3G1Okaedk6OkdiPJsOZ8obwbne9of%2F4N2eNNsVcafXUZ6b1GkQ4Eax7k1sChnbi5SSYGvPVYxg32m%2FNs2Y6Q%2FQxOQYq5XEfl0Nlb4RIAzKuSWAlVv%2F5YXFJrSGDnnci1lo%2BzW5mUNKaA7QCadDl%2F2jKJ0RVuNcJfoyxmsAKIKM0yP%2B8fS%2Bcdwql9Eyv5lhMyUZBtb4QyHTtl8fEsKFkGtTFo75Dp%2FJpWrWVQAUI76lqthhy1HTmwh2G4mkGQpOSoZhzN9vrEOyi8yT9ftddDF4GPwEA57FcAfQjd27uv%2FUFaS62DJBGELNkgaYRC20uITRp58ZPxaNTD5cBUc2D0VOFaxbwgEdIlObe3SWLLcYyhE9XNJf5b7SVvZhjBWpsV8Pd0RlA66%2BtcE1dTIIwIpw06bCAif%2FkShxrKLGI7SnrMYtxj7PBiz9vga8nyovZcAK%2BaJKwKLvT3%2FPyyCXZxCBy%2Ft4WoTztrVZfad8v%2FkXH0odB89ewyAA2GHnXPQDaQho54yXlvfrWb050osg4MZ9pkS5zIQSAwsPnQvgY6pgHuDdtj0DZBTvXLVuSzaG16OeEFtJ%2BqA380J%2FBJ5xRJ5YQQfMI5ao8746rvqv4J9NcNvhthkGF7itR%2BT3W%2B%2FoVjkPKJGJX7H%2FkFit0J59rdCdnzENO%2BKAvwwhsOIGAMJgf9M%2FIXKivRgDBjFCiyuG21SFCM6gbm5UTB3Dy5IrkGBDxZ0W57wizG7n%2BVfjN0x6F%2BDBiB8q3V9Up60sgGrljkPX%2BM306Z&X-Amz-Signature=0d61718adff81351ca5eea337d7162123760df2fa8f59f6a18a00d158be914ab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKISHSHB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcfuiYU9LwWv3ouLYMzQ5DNV7v5dmyzzCGDt7j4QolWAiBDfVw5BpWqQ%2FyA8iAk95SN35nqVLb5V1A8Eq0kolbwjyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRIK0ur14mTBVRULKtwDtyG2CsV8AyjTNUtc63Pjut7s9chHooYpsmDGfAfTwifM5A92rjjaEDgcyFz9gkoXqAjhrlaX%2FpN9EIUOzvQcrGo8M7er3G1Okaedk6OkdiPJsOZ8obwbne9of%2F4N2eNNsVcafXUZ6b1GkQ4Eax7k1sChnbi5SSYGvPVYxg32m%2FNs2Y6Q%2FQxOQYq5XEfl0Nlb4RIAzKuSWAlVv%2F5YXFJrSGDnnci1lo%2BzW5mUNKaA7QCadDl%2F2jKJ0RVuNcJfoyxmsAKIKM0yP%2B8fS%2Bcdwql9Eyv5lhMyUZBtb4QyHTtl8fEsKFkGtTFo75Dp%2FJpWrWVQAUI76lqthhy1HTmwh2G4mkGQpOSoZhzN9vrEOyi8yT9ftddDF4GPwEA57FcAfQjd27uv%2FUFaS62DJBGELNkgaYRC20uITRp58ZPxaNTD5cBUc2D0VOFaxbwgEdIlObe3SWLLcYyhE9XNJf5b7SVvZhjBWpsV8Pd0RlA66%2BtcE1dTIIwIpw06bCAif%2FkShxrKLGI7SnrMYtxj7PBiz9vga8nyovZcAK%2BaJKwKLvT3%2FPyyCXZxCBy%2Ft4WoTztrVZfad8v%2FkXH0odB89ewyAA2GHnXPQDaQho54yXlvfrWb050osg4MZ9pkS5zIQSAwsPnQvgY6pgHuDdtj0DZBTvXLVuSzaG16OeEFtJ%2BqA380J%2FBJ5xRJ5YQQfMI5ao8746rvqv4J9NcNvhthkGF7itR%2BT3W%2B%2FoVjkPKJGJX7H%2FkFit0J59rdCdnzENO%2BKAvwwhsOIGAMJgf9M%2FIXKivRgDBjFCiyuG21SFCM6gbm5UTB3Dy5IrkGBDxZ0W57wizG7n%2BVfjN0x6F%2BDBiB8q3V9Up60sgGrljkPX%2BM306Z&X-Amz-Signature=c6a0f4debcb050bc2643f865a571381a9c2a8a3d1fb084c8f5cbd22a20d5485e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKISHSHB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcfuiYU9LwWv3ouLYMzQ5DNV7v5dmyzzCGDt7j4QolWAiBDfVw5BpWqQ%2FyA8iAk95SN35nqVLb5V1A8Eq0kolbwjyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRIK0ur14mTBVRULKtwDtyG2CsV8AyjTNUtc63Pjut7s9chHooYpsmDGfAfTwifM5A92rjjaEDgcyFz9gkoXqAjhrlaX%2FpN9EIUOzvQcrGo8M7er3G1Okaedk6OkdiPJsOZ8obwbne9of%2F4N2eNNsVcafXUZ6b1GkQ4Eax7k1sChnbi5SSYGvPVYxg32m%2FNs2Y6Q%2FQxOQYq5XEfl0Nlb4RIAzKuSWAlVv%2F5YXFJrSGDnnci1lo%2BzW5mUNKaA7QCadDl%2F2jKJ0RVuNcJfoyxmsAKIKM0yP%2B8fS%2Bcdwql9Eyv5lhMyUZBtb4QyHTtl8fEsKFkGtTFo75Dp%2FJpWrWVQAUI76lqthhy1HTmwh2G4mkGQpOSoZhzN9vrEOyi8yT9ftddDF4GPwEA57FcAfQjd27uv%2FUFaS62DJBGELNkgaYRC20uITRp58ZPxaNTD5cBUc2D0VOFaxbwgEdIlObe3SWLLcYyhE9XNJf5b7SVvZhjBWpsV8Pd0RlA66%2BtcE1dTIIwIpw06bCAif%2FkShxrKLGI7SnrMYtxj7PBiz9vga8nyovZcAK%2BaJKwKLvT3%2FPyyCXZxCBy%2Ft4WoTztrVZfad8v%2FkXH0odB89ewyAA2GHnXPQDaQho54yXlvfrWb050osg4MZ9pkS5zIQSAwsPnQvgY6pgHuDdtj0DZBTvXLVuSzaG16OeEFtJ%2BqA380J%2FBJ5xRJ5YQQfMI5ao8746rvqv4J9NcNvhthkGF7itR%2BT3W%2B%2FoVjkPKJGJX7H%2FkFit0J59rdCdnzENO%2BKAvwwhsOIGAMJgf9M%2FIXKivRgDBjFCiyuG21SFCM6gbm5UTB3Dy5IrkGBDxZ0W57wizG7n%2BVfjN0x6F%2BDBiB8q3V9Up60sgGrljkPX%2BM306Z&X-Amz-Signature=4cf8ebf6846b145041adc166928356da92c580be110dee53a4ba7abcce70596f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKISHSHB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcfuiYU9LwWv3ouLYMzQ5DNV7v5dmyzzCGDt7j4QolWAiBDfVw5BpWqQ%2FyA8iAk95SN35nqVLb5V1A8Eq0kolbwjyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRIK0ur14mTBVRULKtwDtyG2CsV8AyjTNUtc63Pjut7s9chHooYpsmDGfAfTwifM5A92rjjaEDgcyFz9gkoXqAjhrlaX%2FpN9EIUOzvQcrGo8M7er3G1Okaedk6OkdiPJsOZ8obwbne9of%2F4N2eNNsVcafXUZ6b1GkQ4Eax7k1sChnbi5SSYGvPVYxg32m%2FNs2Y6Q%2FQxOQYq5XEfl0Nlb4RIAzKuSWAlVv%2F5YXFJrSGDnnci1lo%2BzW5mUNKaA7QCadDl%2F2jKJ0RVuNcJfoyxmsAKIKM0yP%2B8fS%2Bcdwql9Eyv5lhMyUZBtb4QyHTtl8fEsKFkGtTFo75Dp%2FJpWrWVQAUI76lqthhy1HTmwh2G4mkGQpOSoZhzN9vrEOyi8yT9ftddDF4GPwEA57FcAfQjd27uv%2FUFaS62DJBGELNkgaYRC20uITRp58ZPxaNTD5cBUc2D0VOFaxbwgEdIlObe3SWLLcYyhE9XNJf5b7SVvZhjBWpsV8Pd0RlA66%2BtcE1dTIIwIpw06bCAif%2FkShxrKLGI7SnrMYtxj7PBiz9vga8nyovZcAK%2BaJKwKLvT3%2FPyyCXZxCBy%2Ft4WoTztrVZfad8v%2FkXH0odB89ewyAA2GHnXPQDaQho54yXlvfrWb050osg4MZ9pkS5zIQSAwsPnQvgY6pgHuDdtj0DZBTvXLVuSzaG16OeEFtJ%2BqA380J%2FBJ5xRJ5YQQfMI5ao8746rvqv4J9NcNvhthkGF7itR%2BT3W%2B%2FoVjkPKJGJX7H%2FkFit0J59rdCdnzENO%2BKAvwwhsOIGAMJgf9M%2FIXKivRgDBjFCiyuG21SFCM6gbm5UTB3Dy5IrkGBDxZ0W57wizG7n%2BVfjN0x6F%2BDBiB8q3V9Up60sgGrljkPX%2BM306Z&X-Amz-Signature=39a190b4681d31641fac81c30e183f7138d45d3d0bafe607595856c8ee444b45&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
