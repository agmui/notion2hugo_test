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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AUHP5C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHdlYovIcxihqPOqAf26Xmah6vNhb7fg6jSo0FOaU%2FlAAiEA0forrkfPwCLk4407A3Bv0bUWOG%2BAy5e115B6fsH5MkQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiljvMMdpoaq8uYqSrcA0nM0RuOJu7sDlE38Sf2WJBuZKxU5hzJzzxUx2fBWo5%2FnO%2FtVj2T8gh9IqcvhSSd%2BW0Hr7M7oepRnnLAhzH3DAQkdNm%2BQ1S4YaabvOx3Dp%2BpE1wVEywXlAbk57MU37x%2B5VxvM7D4SXsXIWwAPE5vkTjbfsEdbdZFrMiXft%2BeVU8y7nUL9smtT9X1VFuPCK7%2FBO5%2B3k%2BJmn1mQPLFBs%2FqWekp3T02pVdmyPn%2FG%2F1IMqqVSNozEc6wHum0L2qd4cmNew9ZbsG1Daz3x8zBTxFfAuLy%2FdRC3aZosxcN4y11Wjzvu7iC1PXoEbD6mjz2k8%2FlzjIJP3HkRo%2F%2FTq2%2FGie934CirJJzJRUP7ZaYU9xUhhSAW3aIWaEF7o%2Bg1JW4dtlTgVIRE9NLwh7m3SUZeQwH50unoOwdFQPBBzG5tkVwxV8oemRn0VZO%2BAqpydR1rZd1xbjsh9K6gFx7N2BrQ7LawaOXCrdph5sFUb8PL8q%2BJDJCTYnuX4VVpfbCJKvu%2BgfNRB534Hk7GURm3mkziD0XGdrQMKlgd3YuPBA%2BeRowlu2xPWIpNIfaamSCc7yxLF7UGuXtrkgf2Rk6esvp1CJdwQg%2BhAIgP2eq0HyG0L9P6aWBDr0OgsZcbwXkkiItMLiwhb4GOqUBCBlB9wMfEnaVlQT2DAKZWTodJ%2Bitz2flGGk8ljNxLEbNIB3zsm9TSMDyrbvza7ILG5%2FLmcV%2BkDKPWTUvMXMA8JXVaHaexSpvhaBlwzPDlvkec21iwd05FBaxhp9U5a1XZMLX5GlgtUyZYO82wYehr8IEeZTQynD%2F9nfFK7muPjDG48IEd%2BRqviw2WZU23lIzieDZFi0M32MaGb2dIygGf9RRwZqS&X-Amz-Signature=39d65ea1d5e5a4bf21042bf65e31885fe4c61c64a36f9beb6561ac8c28a2d251&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AUHP5C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHdlYovIcxihqPOqAf26Xmah6vNhb7fg6jSo0FOaU%2FlAAiEA0forrkfPwCLk4407A3Bv0bUWOG%2BAy5e115B6fsH5MkQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiljvMMdpoaq8uYqSrcA0nM0RuOJu7sDlE38Sf2WJBuZKxU5hzJzzxUx2fBWo5%2FnO%2FtVj2T8gh9IqcvhSSd%2BW0Hr7M7oepRnnLAhzH3DAQkdNm%2BQ1S4YaabvOx3Dp%2BpE1wVEywXlAbk57MU37x%2B5VxvM7D4SXsXIWwAPE5vkTjbfsEdbdZFrMiXft%2BeVU8y7nUL9smtT9X1VFuPCK7%2FBO5%2B3k%2BJmn1mQPLFBs%2FqWekp3T02pVdmyPn%2FG%2F1IMqqVSNozEc6wHum0L2qd4cmNew9ZbsG1Daz3x8zBTxFfAuLy%2FdRC3aZosxcN4y11Wjzvu7iC1PXoEbD6mjz2k8%2FlzjIJP3HkRo%2F%2FTq2%2FGie934CirJJzJRUP7ZaYU9xUhhSAW3aIWaEF7o%2Bg1JW4dtlTgVIRE9NLwh7m3SUZeQwH50unoOwdFQPBBzG5tkVwxV8oemRn0VZO%2BAqpydR1rZd1xbjsh9K6gFx7N2BrQ7LawaOXCrdph5sFUb8PL8q%2BJDJCTYnuX4VVpfbCJKvu%2BgfNRB534Hk7GURm3mkziD0XGdrQMKlgd3YuPBA%2BeRowlu2xPWIpNIfaamSCc7yxLF7UGuXtrkgf2Rk6esvp1CJdwQg%2BhAIgP2eq0HyG0L9P6aWBDr0OgsZcbwXkkiItMLiwhb4GOqUBCBlB9wMfEnaVlQT2DAKZWTodJ%2Bitz2flGGk8ljNxLEbNIB3zsm9TSMDyrbvza7ILG5%2FLmcV%2BkDKPWTUvMXMA8JXVaHaexSpvhaBlwzPDlvkec21iwd05FBaxhp9U5a1XZMLX5GlgtUyZYO82wYehr8IEeZTQynD%2F9nfFK7muPjDG48IEd%2BRqviw2WZU23lIzieDZFi0M32MaGb2dIygGf9RRwZqS&X-Amz-Signature=985c674f7e12cc58963d3323db6782aff78cc6dfe141dcc2e10fb47af426edce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AUHP5C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHdlYovIcxihqPOqAf26Xmah6vNhb7fg6jSo0FOaU%2FlAAiEA0forrkfPwCLk4407A3Bv0bUWOG%2BAy5e115B6fsH5MkQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiljvMMdpoaq8uYqSrcA0nM0RuOJu7sDlE38Sf2WJBuZKxU5hzJzzxUx2fBWo5%2FnO%2FtVj2T8gh9IqcvhSSd%2BW0Hr7M7oepRnnLAhzH3DAQkdNm%2BQ1S4YaabvOx3Dp%2BpE1wVEywXlAbk57MU37x%2B5VxvM7D4SXsXIWwAPE5vkTjbfsEdbdZFrMiXft%2BeVU8y7nUL9smtT9X1VFuPCK7%2FBO5%2B3k%2BJmn1mQPLFBs%2FqWekp3T02pVdmyPn%2FG%2F1IMqqVSNozEc6wHum0L2qd4cmNew9ZbsG1Daz3x8zBTxFfAuLy%2FdRC3aZosxcN4y11Wjzvu7iC1PXoEbD6mjz2k8%2FlzjIJP3HkRo%2F%2FTq2%2FGie934CirJJzJRUP7ZaYU9xUhhSAW3aIWaEF7o%2Bg1JW4dtlTgVIRE9NLwh7m3SUZeQwH50unoOwdFQPBBzG5tkVwxV8oemRn0VZO%2BAqpydR1rZd1xbjsh9K6gFx7N2BrQ7LawaOXCrdph5sFUb8PL8q%2BJDJCTYnuX4VVpfbCJKvu%2BgfNRB534Hk7GURm3mkziD0XGdrQMKlgd3YuPBA%2BeRowlu2xPWIpNIfaamSCc7yxLF7UGuXtrkgf2Rk6esvp1CJdwQg%2BhAIgP2eq0HyG0L9P6aWBDr0OgsZcbwXkkiItMLiwhb4GOqUBCBlB9wMfEnaVlQT2DAKZWTodJ%2Bitz2flGGk8ljNxLEbNIB3zsm9TSMDyrbvza7ILG5%2FLmcV%2BkDKPWTUvMXMA8JXVaHaexSpvhaBlwzPDlvkec21iwd05FBaxhp9U5a1XZMLX5GlgtUyZYO82wYehr8IEeZTQynD%2F9nfFK7muPjDG48IEd%2BRqviw2WZU23lIzieDZFi0M32MaGb2dIygGf9RRwZqS&X-Amz-Signature=2a531edc8c869c1267c9a2db114859f1383af9ec3449d1917578c1b845f1df41&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AUHP5C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHdlYovIcxihqPOqAf26Xmah6vNhb7fg6jSo0FOaU%2FlAAiEA0forrkfPwCLk4407A3Bv0bUWOG%2BAy5e115B6fsH5MkQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiljvMMdpoaq8uYqSrcA0nM0RuOJu7sDlE38Sf2WJBuZKxU5hzJzzxUx2fBWo5%2FnO%2FtVj2T8gh9IqcvhSSd%2BW0Hr7M7oepRnnLAhzH3DAQkdNm%2BQ1S4YaabvOx3Dp%2BpE1wVEywXlAbk57MU37x%2B5VxvM7D4SXsXIWwAPE5vkTjbfsEdbdZFrMiXft%2BeVU8y7nUL9smtT9X1VFuPCK7%2FBO5%2B3k%2BJmn1mQPLFBs%2FqWekp3T02pVdmyPn%2FG%2F1IMqqVSNozEc6wHum0L2qd4cmNew9ZbsG1Daz3x8zBTxFfAuLy%2FdRC3aZosxcN4y11Wjzvu7iC1PXoEbD6mjz2k8%2FlzjIJP3HkRo%2F%2FTq2%2FGie934CirJJzJRUP7ZaYU9xUhhSAW3aIWaEF7o%2Bg1JW4dtlTgVIRE9NLwh7m3SUZeQwH50unoOwdFQPBBzG5tkVwxV8oemRn0VZO%2BAqpydR1rZd1xbjsh9K6gFx7N2BrQ7LawaOXCrdph5sFUb8PL8q%2BJDJCTYnuX4VVpfbCJKvu%2BgfNRB534Hk7GURm3mkziD0XGdrQMKlgd3YuPBA%2BeRowlu2xPWIpNIfaamSCc7yxLF7UGuXtrkgf2Rk6esvp1CJdwQg%2BhAIgP2eq0HyG0L9P6aWBDr0OgsZcbwXkkiItMLiwhb4GOqUBCBlB9wMfEnaVlQT2DAKZWTodJ%2Bitz2flGGk8ljNxLEbNIB3zsm9TSMDyrbvza7ILG5%2FLmcV%2BkDKPWTUvMXMA8JXVaHaexSpvhaBlwzPDlvkec21iwd05FBaxhp9U5a1XZMLX5GlgtUyZYO82wYehr8IEeZTQynD%2F9nfFK7muPjDG48IEd%2BRqviw2WZU23lIzieDZFi0M32MaGb2dIygGf9RRwZqS&X-Amz-Signature=b774d410746d7b5823339398fd0504702a22956b4ddee0685e16a8a68c9e0cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AUHP5C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHdlYovIcxihqPOqAf26Xmah6vNhb7fg6jSo0FOaU%2FlAAiEA0forrkfPwCLk4407A3Bv0bUWOG%2BAy5e115B6fsH5MkQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiljvMMdpoaq8uYqSrcA0nM0RuOJu7sDlE38Sf2WJBuZKxU5hzJzzxUx2fBWo5%2FnO%2FtVj2T8gh9IqcvhSSd%2BW0Hr7M7oepRnnLAhzH3DAQkdNm%2BQ1S4YaabvOx3Dp%2BpE1wVEywXlAbk57MU37x%2B5VxvM7D4SXsXIWwAPE5vkTjbfsEdbdZFrMiXft%2BeVU8y7nUL9smtT9X1VFuPCK7%2FBO5%2B3k%2BJmn1mQPLFBs%2FqWekp3T02pVdmyPn%2FG%2F1IMqqVSNozEc6wHum0L2qd4cmNew9ZbsG1Daz3x8zBTxFfAuLy%2FdRC3aZosxcN4y11Wjzvu7iC1PXoEbD6mjz2k8%2FlzjIJP3HkRo%2F%2FTq2%2FGie934CirJJzJRUP7ZaYU9xUhhSAW3aIWaEF7o%2Bg1JW4dtlTgVIRE9NLwh7m3SUZeQwH50unoOwdFQPBBzG5tkVwxV8oemRn0VZO%2BAqpydR1rZd1xbjsh9K6gFx7N2BrQ7LawaOXCrdph5sFUb8PL8q%2BJDJCTYnuX4VVpfbCJKvu%2BgfNRB534Hk7GURm3mkziD0XGdrQMKlgd3YuPBA%2BeRowlu2xPWIpNIfaamSCc7yxLF7UGuXtrkgf2Rk6esvp1CJdwQg%2BhAIgP2eq0HyG0L9P6aWBDr0OgsZcbwXkkiItMLiwhb4GOqUBCBlB9wMfEnaVlQT2DAKZWTodJ%2Bitz2flGGk8ljNxLEbNIB3zsm9TSMDyrbvza7ILG5%2FLmcV%2BkDKPWTUvMXMA8JXVaHaexSpvhaBlwzPDlvkec21iwd05FBaxhp9U5a1XZMLX5GlgtUyZYO82wYehr8IEeZTQynD%2F9nfFK7muPjDG48IEd%2BRqviw2WZU23lIzieDZFi0M32MaGb2dIygGf9RRwZqS&X-Amz-Signature=9da7719a350dc5d5aa872ff0ca50f07832677af9daae9d5f1f1a5f4732111aac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
