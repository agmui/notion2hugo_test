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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODHKRQQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3pWwlUmFzueA%2FphWhjnHN1QfUBQKBwqKCGoHjeN6I%2BAiBiwgyqOKWx7HEB4e4snox%2FpNrf03DyYeK7T6X8BFWH5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMn6jlQsrcy2avf48KKtwDTQh0vxiavcAgDXoDpfIUEJA2NU3P21BEOuNNqfEfooxN1uKKmjEVwsm%2BUxa7n3m8hZNgSnry616Q44AxUruF3bk5%2FIOqR%2B68kYRMOgJDv7GhS6bb3wVwMsOsBHwRksgfpHBFG6VOycBiDGCaH5anO647OjfgLzfmvw2XyfgG1ssgRUr%2FuvH7dF3gaTeEUdlXyIlkciuxWThsOwdLvkYrTblOYPOPTnqenZyXUPbKMQI6Hej9ay75Got1KOdqsJGPOiUjajtxxDdxroEvE%2FfptxVmMmynLHvLWErLBrG5za4OCq3sU3X9MaaCyrCNXmBsaNPONXulpKf12pPZhmOOKD8JFUuJppGHoSGP30m5SKO0NOz2EY%2FiAnlbov05awqPKYG2pRiDcbV3cXbezQ393u1PMI9La8vOf%2BbtEYUT8QI04l9%2B6ogORFEVl%2B8g1ZFAaxxTcj%2BSyza2uLqEwE8BxFGchCEMWOpEk%2BUtCvUtgytl5r8NK%2B9zDOcoB%2BezC28SUWMwd6pmhETOICgp2lhQnisDBVPlzmjRoV37YE0W3PCE9ObuHK9sDhAwUUoZ5h7l%2F4dO7xmL4dnZju6HHb0mumN4Sf7shTaoqLjRgfMeYaGTQSABCq4%2FqgtCbDcwydSlvgY6pgFeQREYky2SzRSdYykZX%2Fb4KyflGb0HrjYCuCKpDDnQZCkF4OhM%2BbpPWtbe7JHPJ%2BXWVyvuy8zIdtSUfnFn%2B1aFXE%2F4mBnlzrQdUlIQshVPmgg524BDVYuzo8mKLeS1mJQDaUfTQnn9QQ%2BC1WCRx4zU%2BoR6Q%2B98Nrpe%2B0W19p0LRi7Ma3gV%2BD4xaMh4pzsTu5%2F3bNnRp%2BXDsu89vdC8CK9JyGkDSMZh&X-Amz-Signature=56e6150bad63bd977d42045bc8b45f9a5c4006929f055ccafa2e18620fd1cc81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODHKRQQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3pWwlUmFzueA%2FphWhjnHN1QfUBQKBwqKCGoHjeN6I%2BAiBiwgyqOKWx7HEB4e4snox%2FpNrf03DyYeK7T6X8BFWH5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMn6jlQsrcy2avf48KKtwDTQh0vxiavcAgDXoDpfIUEJA2NU3P21BEOuNNqfEfooxN1uKKmjEVwsm%2BUxa7n3m8hZNgSnry616Q44AxUruF3bk5%2FIOqR%2B68kYRMOgJDv7GhS6bb3wVwMsOsBHwRksgfpHBFG6VOycBiDGCaH5anO647OjfgLzfmvw2XyfgG1ssgRUr%2FuvH7dF3gaTeEUdlXyIlkciuxWThsOwdLvkYrTblOYPOPTnqenZyXUPbKMQI6Hej9ay75Got1KOdqsJGPOiUjajtxxDdxroEvE%2FfptxVmMmynLHvLWErLBrG5za4OCq3sU3X9MaaCyrCNXmBsaNPONXulpKf12pPZhmOOKD8JFUuJppGHoSGP30m5SKO0NOz2EY%2FiAnlbov05awqPKYG2pRiDcbV3cXbezQ393u1PMI9La8vOf%2BbtEYUT8QI04l9%2B6ogORFEVl%2B8g1ZFAaxxTcj%2BSyza2uLqEwE8BxFGchCEMWOpEk%2BUtCvUtgytl5r8NK%2B9zDOcoB%2BezC28SUWMwd6pmhETOICgp2lhQnisDBVPlzmjRoV37YE0W3PCE9ObuHK9sDhAwUUoZ5h7l%2F4dO7xmL4dnZju6HHb0mumN4Sf7shTaoqLjRgfMeYaGTQSABCq4%2FqgtCbDcwydSlvgY6pgFeQREYky2SzRSdYykZX%2Fb4KyflGb0HrjYCuCKpDDnQZCkF4OhM%2BbpPWtbe7JHPJ%2BXWVyvuy8zIdtSUfnFn%2B1aFXE%2F4mBnlzrQdUlIQshVPmgg524BDVYuzo8mKLeS1mJQDaUfTQnn9QQ%2BC1WCRx4zU%2BoR6Q%2B98Nrpe%2B0W19p0LRi7Ma3gV%2BD4xaMh4pzsTu5%2F3bNnRp%2BXDsu89vdC8CK9JyGkDSMZh&X-Amz-Signature=a13654a92cad5395924a1467e8d140705acbe34774476549da6f031b0311bc87&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODHKRQQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3pWwlUmFzueA%2FphWhjnHN1QfUBQKBwqKCGoHjeN6I%2BAiBiwgyqOKWx7HEB4e4snox%2FpNrf03DyYeK7T6X8BFWH5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMn6jlQsrcy2avf48KKtwDTQh0vxiavcAgDXoDpfIUEJA2NU3P21BEOuNNqfEfooxN1uKKmjEVwsm%2BUxa7n3m8hZNgSnry616Q44AxUruF3bk5%2FIOqR%2B68kYRMOgJDv7GhS6bb3wVwMsOsBHwRksgfpHBFG6VOycBiDGCaH5anO647OjfgLzfmvw2XyfgG1ssgRUr%2FuvH7dF3gaTeEUdlXyIlkciuxWThsOwdLvkYrTblOYPOPTnqenZyXUPbKMQI6Hej9ay75Got1KOdqsJGPOiUjajtxxDdxroEvE%2FfptxVmMmynLHvLWErLBrG5za4OCq3sU3X9MaaCyrCNXmBsaNPONXulpKf12pPZhmOOKD8JFUuJppGHoSGP30m5SKO0NOz2EY%2FiAnlbov05awqPKYG2pRiDcbV3cXbezQ393u1PMI9La8vOf%2BbtEYUT8QI04l9%2B6ogORFEVl%2B8g1ZFAaxxTcj%2BSyza2uLqEwE8BxFGchCEMWOpEk%2BUtCvUtgytl5r8NK%2B9zDOcoB%2BezC28SUWMwd6pmhETOICgp2lhQnisDBVPlzmjRoV37YE0W3PCE9ObuHK9sDhAwUUoZ5h7l%2F4dO7xmL4dnZju6HHb0mumN4Sf7shTaoqLjRgfMeYaGTQSABCq4%2FqgtCbDcwydSlvgY6pgFeQREYky2SzRSdYykZX%2Fb4KyflGb0HrjYCuCKpDDnQZCkF4OhM%2BbpPWtbe7JHPJ%2BXWVyvuy8zIdtSUfnFn%2B1aFXE%2F4mBnlzrQdUlIQshVPmgg524BDVYuzo8mKLeS1mJQDaUfTQnn9QQ%2BC1WCRx4zU%2BoR6Q%2B98Nrpe%2B0W19p0LRi7Ma3gV%2BD4xaMh4pzsTu5%2F3bNnRp%2BXDsu89vdC8CK9JyGkDSMZh&X-Amz-Signature=27ac1e0f4a0ebf9e4ff30403aef8228c0a78daf731a3887b236ed0f2ec5b6268&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODHKRQQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3pWwlUmFzueA%2FphWhjnHN1QfUBQKBwqKCGoHjeN6I%2BAiBiwgyqOKWx7HEB4e4snox%2FpNrf03DyYeK7T6X8BFWH5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMn6jlQsrcy2avf48KKtwDTQh0vxiavcAgDXoDpfIUEJA2NU3P21BEOuNNqfEfooxN1uKKmjEVwsm%2BUxa7n3m8hZNgSnry616Q44AxUruF3bk5%2FIOqR%2B68kYRMOgJDv7GhS6bb3wVwMsOsBHwRksgfpHBFG6VOycBiDGCaH5anO647OjfgLzfmvw2XyfgG1ssgRUr%2FuvH7dF3gaTeEUdlXyIlkciuxWThsOwdLvkYrTblOYPOPTnqenZyXUPbKMQI6Hej9ay75Got1KOdqsJGPOiUjajtxxDdxroEvE%2FfptxVmMmynLHvLWErLBrG5za4OCq3sU3X9MaaCyrCNXmBsaNPONXulpKf12pPZhmOOKD8JFUuJppGHoSGP30m5SKO0NOz2EY%2FiAnlbov05awqPKYG2pRiDcbV3cXbezQ393u1PMI9La8vOf%2BbtEYUT8QI04l9%2B6ogORFEVl%2B8g1ZFAaxxTcj%2BSyza2uLqEwE8BxFGchCEMWOpEk%2BUtCvUtgytl5r8NK%2B9zDOcoB%2BezC28SUWMwd6pmhETOICgp2lhQnisDBVPlzmjRoV37YE0W3PCE9ObuHK9sDhAwUUoZ5h7l%2F4dO7xmL4dnZju6HHb0mumN4Sf7shTaoqLjRgfMeYaGTQSABCq4%2FqgtCbDcwydSlvgY6pgFeQREYky2SzRSdYykZX%2Fb4KyflGb0HrjYCuCKpDDnQZCkF4OhM%2BbpPWtbe7JHPJ%2BXWVyvuy8zIdtSUfnFn%2B1aFXE%2F4mBnlzrQdUlIQshVPmgg524BDVYuzo8mKLeS1mJQDaUfTQnn9QQ%2BC1WCRx4zU%2BoR6Q%2B98Nrpe%2B0W19p0LRi7Ma3gV%2BD4xaMh4pzsTu5%2F3bNnRp%2BXDsu89vdC8CK9JyGkDSMZh&X-Amz-Signature=eeba91a7033438602f29b52720235ad721b7b4e50595e409ffe2ac172bb70562&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODHKRQQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3pWwlUmFzueA%2FphWhjnHN1QfUBQKBwqKCGoHjeN6I%2BAiBiwgyqOKWx7HEB4e4snox%2FpNrf03DyYeK7T6X8BFWH5ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMn6jlQsrcy2avf48KKtwDTQh0vxiavcAgDXoDpfIUEJA2NU3P21BEOuNNqfEfooxN1uKKmjEVwsm%2BUxa7n3m8hZNgSnry616Q44AxUruF3bk5%2FIOqR%2B68kYRMOgJDv7GhS6bb3wVwMsOsBHwRksgfpHBFG6VOycBiDGCaH5anO647OjfgLzfmvw2XyfgG1ssgRUr%2FuvH7dF3gaTeEUdlXyIlkciuxWThsOwdLvkYrTblOYPOPTnqenZyXUPbKMQI6Hej9ay75Got1KOdqsJGPOiUjajtxxDdxroEvE%2FfptxVmMmynLHvLWErLBrG5za4OCq3sU3X9MaaCyrCNXmBsaNPONXulpKf12pPZhmOOKD8JFUuJppGHoSGP30m5SKO0NOz2EY%2FiAnlbov05awqPKYG2pRiDcbV3cXbezQ393u1PMI9La8vOf%2BbtEYUT8QI04l9%2B6ogORFEVl%2B8g1ZFAaxxTcj%2BSyza2uLqEwE8BxFGchCEMWOpEk%2BUtCvUtgytl5r8NK%2B9zDOcoB%2BezC28SUWMwd6pmhETOICgp2lhQnisDBVPlzmjRoV37YE0W3PCE9ObuHK9sDhAwUUoZ5h7l%2F4dO7xmL4dnZju6HHb0mumN4Sf7shTaoqLjRgfMeYaGTQSABCq4%2FqgtCbDcwydSlvgY6pgFeQREYky2SzRSdYykZX%2Fb4KyflGb0HrjYCuCKpDDnQZCkF4OhM%2BbpPWtbe7JHPJ%2BXWVyvuy8zIdtSUfnFn%2B1aFXE%2F4mBnlzrQdUlIQshVPmgg524BDVYuzo8mKLeS1mJQDaUfTQnn9QQ%2BC1WCRx4zU%2BoR6Q%2B98Nrpe%2B0W19p0LRi7Ma3gV%2BD4xaMh4pzsTu5%2F3bNnRp%2BXDsu89vdC8CK9JyGkDSMZh&X-Amz-Signature=328bb2aa12d455c05885b4cfee6c80ef31579c6d77c3fccdfbb7267024f93688&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
