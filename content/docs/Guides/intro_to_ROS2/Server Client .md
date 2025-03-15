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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2CY74B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdeHJGbm3Wv6HEkYg%2Fbj%2FRmtSPX%2F3JSjWYYrnmlbC%2FKwIhAIgo%2BIBplFSEeck0G%2BwIWhW8iotuSUvt2eZRtGSjaYw9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyYV0qHSN8vVEGLm2sq3AOdmmgkhY3%2FtTuS1jjLc4ktgcs%2BOffYCQ6dwxm52uDR9VpVWzFULYGHTz6Uk%2FTc1CIb3ruooicuqYd6B2%2BqVTQfwAly36I5HAwanXoPeJFP26IgfLNQTCDObECdlY5FSmoZUbkt3vDyxfdtJ%2F%2Fgta70NuHopckwtl0FfXG2UPuJZTri6qfAldtYbrBAFQ8%2Fa2Hs3vrk%2BhKz2Jf7YipZ8YiQe%2BL1cKkSkzB%2BY%2BKx4%2FiyBTFIAEVe7yogMUkNP2av9DDQRhlFewK9GWLRiSEhmxm1umqIiHHw1nITv2LVZME4ceJRjAwT0MJoT3TQ4hXQp%2B%2FELOyYVyOYmKSU39lCE%2BBc6uJMJaui8R%2FH5Tbp%2B7YvSUPYLakaIXDjw80Td5MW6u8tkj%2F9v9sc8v%2BgeDOKanVlrcM%2BQ1sRfu4zmQRjmCHLuGjJCI9bLN62TYTHCcUKyozoXHlQ6o5PubM8pFVPeJe7w0rZY7Q28%2F9PiHehGEydqKqLfOtqzJMPTiul%2BhpwWFX3BdG9OGkS40f%2BFN3NCXvL6pcr1BW8trXrOUbFTuxlAERbBQePJhp9a0CwYoj62LGQE%2Fo2prgEXVCKDnpZnrxiZ8bEAkuc8%2FQazDD3dOdZxYu52oeIUuCHWlwiazC279W%2BBjqkAT5oqDTLVCKbRS0g4IwiJ1Fk0g9wKhI1PD27uZ9lAY9KEmpgHzx8HrzcU71AprTf7DZQemCz3Gz%2FL8EsJ1qXzD848P79Po%2FYDHaRILg466MDhHBvndNMqswjXOt2KBrqkCuTJlMlM%2Bhig7CNfLXJ6qUY1d2%2B34YK%2FtiMGe6vUNFnINcUtFh%2FZVA423UXrhT9X6x2XNSbqLtZJAcgWaSjkVfQBY9%2F&X-Amz-Signature=4d1f9d3072a0ee9efccddf425ddc6ce7feceae8cd785e8e167a62fde6c2e27e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2CY74B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdeHJGbm3Wv6HEkYg%2Fbj%2FRmtSPX%2F3JSjWYYrnmlbC%2FKwIhAIgo%2BIBplFSEeck0G%2BwIWhW8iotuSUvt2eZRtGSjaYw9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyYV0qHSN8vVEGLm2sq3AOdmmgkhY3%2FtTuS1jjLc4ktgcs%2BOffYCQ6dwxm52uDR9VpVWzFULYGHTz6Uk%2FTc1CIb3ruooicuqYd6B2%2BqVTQfwAly36I5HAwanXoPeJFP26IgfLNQTCDObECdlY5FSmoZUbkt3vDyxfdtJ%2F%2Fgta70NuHopckwtl0FfXG2UPuJZTri6qfAldtYbrBAFQ8%2Fa2Hs3vrk%2BhKz2Jf7YipZ8YiQe%2BL1cKkSkzB%2BY%2BKx4%2FiyBTFIAEVe7yogMUkNP2av9DDQRhlFewK9GWLRiSEhmxm1umqIiHHw1nITv2LVZME4ceJRjAwT0MJoT3TQ4hXQp%2B%2FELOyYVyOYmKSU39lCE%2BBc6uJMJaui8R%2FH5Tbp%2B7YvSUPYLakaIXDjw80Td5MW6u8tkj%2F9v9sc8v%2BgeDOKanVlrcM%2BQ1sRfu4zmQRjmCHLuGjJCI9bLN62TYTHCcUKyozoXHlQ6o5PubM8pFVPeJe7w0rZY7Q28%2F9PiHehGEydqKqLfOtqzJMPTiul%2BhpwWFX3BdG9OGkS40f%2BFN3NCXvL6pcr1BW8trXrOUbFTuxlAERbBQePJhp9a0CwYoj62LGQE%2Fo2prgEXVCKDnpZnrxiZ8bEAkuc8%2FQazDD3dOdZxYu52oeIUuCHWlwiazC279W%2BBjqkAT5oqDTLVCKbRS0g4IwiJ1Fk0g9wKhI1PD27uZ9lAY9KEmpgHzx8HrzcU71AprTf7DZQemCz3Gz%2FL8EsJ1qXzD848P79Po%2FYDHaRILg466MDhHBvndNMqswjXOt2KBrqkCuTJlMlM%2Bhig7CNfLXJ6qUY1d2%2B34YK%2FtiMGe6vUNFnINcUtFh%2FZVA423UXrhT9X6x2XNSbqLtZJAcgWaSjkVfQBY9%2F&X-Amz-Signature=6c5cd7edb33a294fba09bfdba8de3133d9cb17f40838843297c9b6d54151c5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2CY74B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdeHJGbm3Wv6HEkYg%2Fbj%2FRmtSPX%2F3JSjWYYrnmlbC%2FKwIhAIgo%2BIBplFSEeck0G%2BwIWhW8iotuSUvt2eZRtGSjaYw9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyYV0qHSN8vVEGLm2sq3AOdmmgkhY3%2FtTuS1jjLc4ktgcs%2BOffYCQ6dwxm52uDR9VpVWzFULYGHTz6Uk%2FTc1CIb3ruooicuqYd6B2%2BqVTQfwAly36I5HAwanXoPeJFP26IgfLNQTCDObECdlY5FSmoZUbkt3vDyxfdtJ%2F%2Fgta70NuHopckwtl0FfXG2UPuJZTri6qfAldtYbrBAFQ8%2Fa2Hs3vrk%2BhKz2Jf7YipZ8YiQe%2BL1cKkSkzB%2BY%2BKx4%2FiyBTFIAEVe7yogMUkNP2av9DDQRhlFewK9GWLRiSEhmxm1umqIiHHw1nITv2LVZME4ceJRjAwT0MJoT3TQ4hXQp%2B%2FELOyYVyOYmKSU39lCE%2BBc6uJMJaui8R%2FH5Tbp%2B7YvSUPYLakaIXDjw80Td5MW6u8tkj%2F9v9sc8v%2BgeDOKanVlrcM%2BQ1sRfu4zmQRjmCHLuGjJCI9bLN62TYTHCcUKyozoXHlQ6o5PubM8pFVPeJe7w0rZY7Q28%2F9PiHehGEydqKqLfOtqzJMPTiul%2BhpwWFX3BdG9OGkS40f%2BFN3NCXvL6pcr1BW8trXrOUbFTuxlAERbBQePJhp9a0CwYoj62LGQE%2Fo2prgEXVCKDnpZnrxiZ8bEAkuc8%2FQazDD3dOdZxYu52oeIUuCHWlwiazC279W%2BBjqkAT5oqDTLVCKbRS0g4IwiJ1Fk0g9wKhI1PD27uZ9lAY9KEmpgHzx8HrzcU71AprTf7DZQemCz3Gz%2FL8EsJ1qXzD848P79Po%2FYDHaRILg466MDhHBvndNMqswjXOt2KBrqkCuTJlMlM%2Bhig7CNfLXJ6qUY1d2%2B34YK%2FtiMGe6vUNFnINcUtFh%2FZVA423UXrhT9X6x2XNSbqLtZJAcgWaSjkVfQBY9%2F&X-Amz-Signature=519aceaf2ffdc3bdcedd0b16ae3126f72e7de13aafa04b3ae9ebf3d05c820435&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2CY74B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdeHJGbm3Wv6HEkYg%2Fbj%2FRmtSPX%2F3JSjWYYrnmlbC%2FKwIhAIgo%2BIBplFSEeck0G%2BwIWhW8iotuSUvt2eZRtGSjaYw9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyYV0qHSN8vVEGLm2sq3AOdmmgkhY3%2FtTuS1jjLc4ktgcs%2BOffYCQ6dwxm52uDR9VpVWzFULYGHTz6Uk%2FTc1CIb3ruooicuqYd6B2%2BqVTQfwAly36I5HAwanXoPeJFP26IgfLNQTCDObECdlY5FSmoZUbkt3vDyxfdtJ%2F%2Fgta70NuHopckwtl0FfXG2UPuJZTri6qfAldtYbrBAFQ8%2Fa2Hs3vrk%2BhKz2Jf7YipZ8YiQe%2BL1cKkSkzB%2BY%2BKx4%2FiyBTFIAEVe7yogMUkNP2av9DDQRhlFewK9GWLRiSEhmxm1umqIiHHw1nITv2LVZME4ceJRjAwT0MJoT3TQ4hXQp%2B%2FELOyYVyOYmKSU39lCE%2BBc6uJMJaui8R%2FH5Tbp%2B7YvSUPYLakaIXDjw80Td5MW6u8tkj%2F9v9sc8v%2BgeDOKanVlrcM%2BQ1sRfu4zmQRjmCHLuGjJCI9bLN62TYTHCcUKyozoXHlQ6o5PubM8pFVPeJe7w0rZY7Q28%2F9PiHehGEydqKqLfOtqzJMPTiul%2BhpwWFX3BdG9OGkS40f%2BFN3NCXvL6pcr1BW8trXrOUbFTuxlAERbBQePJhp9a0CwYoj62LGQE%2Fo2prgEXVCKDnpZnrxiZ8bEAkuc8%2FQazDD3dOdZxYu52oeIUuCHWlwiazC279W%2BBjqkAT5oqDTLVCKbRS0g4IwiJ1Fk0g9wKhI1PD27uZ9lAY9KEmpgHzx8HrzcU71AprTf7DZQemCz3Gz%2FL8EsJ1qXzD848P79Po%2FYDHaRILg466MDhHBvndNMqswjXOt2KBrqkCuTJlMlM%2Bhig7CNfLXJ6qUY1d2%2B34YK%2FtiMGe6vUNFnINcUtFh%2FZVA423UXrhT9X6x2XNSbqLtZJAcgWaSjkVfQBY9%2F&X-Amz-Signature=b6cda0b69ce85439021991060f7bf74195e036d2f5a5f49968b1f2e8fb0f0057&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I2CY74B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdeHJGbm3Wv6HEkYg%2Fbj%2FRmtSPX%2F3JSjWYYrnmlbC%2FKwIhAIgo%2BIBplFSEeck0G%2BwIWhW8iotuSUvt2eZRtGSjaYw9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyYV0qHSN8vVEGLm2sq3AOdmmgkhY3%2FtTuS1jjLc4ktgcs%2BOffYCQ6dwxm52uDR9VpVWzFULYGHTz6Uk%2FTc1CIb3ruooicuqYd6B2%2BqVTQfwAly36I5HAwanXoPeJFP26IgfLNQTCDObECdlY5FSmoZUbkt3vDyxfdtJ%2F%2Fgta70NuHopckwtl0FfXG2UPuJZTri6qfAldtYbrBAFQ8%2Fa2Hs3vrk%2BhKz2Jf7YipZ8YiQe%2BL1cKkSkzB%2BY%2BKx4%2FiyBTFIAEVe7yogMUkNP2av9DDQRhlFewK9GWLRiSEhmxm1umqIiHHw1nITv2LVZME4ceJRjAwT0MJoT3TQ4hXQp%2B%2FELOyYVyOYmKSU39lCE%2BBc6uJMJaui8R%2FH5Tbp%2B7YvSUPYLakaIXDjw80Td5MW6u8tkj%2F9v9sc8v%2BgeDOKanVlrcM%2BQ1sRfu4zmQRjmCHLuGjJCI9bLN62TYTHCcUKyozoXHlQ6o5PubM8pFVPeJe7w0rZY7Q28%2F9PiHehGEydqKqLfOtqzJMPTiul%2BhpwWFX3BdG9OGkS40f%2BFN3NCXvL6pcr1BW8trXrOUbFTuxlAERbBQePJhp9a0CwYoj62LGQE%2Fo2prgEXVCKDnpZnrxiZ8bEAkuc8%2FQazDD3dOdZxYu52oeIUuCHWlwiazC279W%2BBjqkAT5oqDTLVCKbRS0g4IwiJ1Fk0g9wKhI1PD27uZ9lAY9KEmpgHzx8HrzcU71AprTf7DZQemCz3Gz%2FL8EsJ1qXzD848P79Po%2FYDHaRILg466MDhHBvndNMqswjXOt2KBrqkCuTJlMlM%2Bhig7CNfLXJ6qUY1d2%2B34YK%2FtiMGe6vUNFnINcUtFh%2FZVA423UXrhT9X6x2XNSbqLtZJAcgWaSjkVfQBY9%2F&X-Amz-Signature=81f221b503c304275de3a50862a8be82bfa87c55597146a88ff4f6ccb375cff0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
