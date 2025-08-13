---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTCUK6M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWmDI3YiJS%2Fk6KSLhj7M9hiZt%2BrIMG08RLcTpmr%2FJMAiEAjGz5M2d10Yp27%2FZfS1MfNV4m4okqshMzgXZi6TSwo%2BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAVsyprzSjRH0prQoSrcA8ZOmYqrty4sLz%2BS1fnJhTsY9Iqitgd2Kwq8Ms9P2q2OK8NnEDV%2BB2BAMrWzzehjKGQrBOSS0Fr652KcFh4LOr0zNfq%2F5SfKRTp0GHRUdmf7EpT6Ag6ugqPPLeg8lxlzLsYcd626HmcKGNGRrP%2BySVL5YoCK%2FTf9MFyEh0QtbwPgPXiU78WpMHmLemkFIAhewUo6t%2BYyKox9ijcHh1awfiAIIf4eo6WzZmz%2F6sXqYjowbwgM4o3%2BxUwCISQc5ELiAoIYHetNX%2Bd87lcmL7e%2BZuZZ501VFtRYyRz02FPkg1e61j1vveQkFuZ5cpeukA%2FSxwb%2BvqkoqJKt%2BIEAk4w2tpjxKj6am1YowVJ6%2B0eWUgY0AR1o79y%2BCGF64oON12zDyjP8AIZB%2FggI2XJnnHu8nIvDVXKfu5EnmUeyDyJaaBbDEAJYeHWNO6T4ZXt4CGTM%2B0Hcaoo7I2USAtN5LhJZ%2BSyPO1opTNkE8%2BGZd%2FxK37aoQG%2FnS7M3NWY%2BWPFcyuGjN0bQ6wOgSToB0Lz%2FUqVFTozpzyHZ5ZStIYFd0REBkuihBwQtcrgBqfl60v4GtGvNUNoak1O5E0nkkrfXYx%2FgIWFG22h0wAyRvPe%2FXKiHpWwF9gw0ZeAz74JEuvxCMLD88sQGOqUBXQ1cXlzxCpOsfmY2AYCCxUwK82Bo3TX65cXDT%2F5ebhnhbofnTqSIaowHgqCI4FzLZbCf%2BDOkvAw%2B0gCLB8GhTBSCBrPcRAWcYH9vnL0EanJOBguBujKN%2BG6cxsNN%2F5ewSObRIum2dWU0%2BT3nq9qVeBmN87T6Q%2Bw8Jnm26WEHtA72n6qaKg6KcPH87YrO5Ie0xeEOm%2FgFCZhy38iqTDsubuDdEIKu&X-Amz-Signature=242975de010246e7f0b2a96353458c15e04c5ce471109d7e4542a58f3b968313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTCUK6M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWmDI3YiJS%2Fk6KSLhj7M9hiZt%2BrIMG08RLcTpmr%2FJMAiEAjGz5M2d10Yp27%2FZfS1MfNV4m4okqshMzgXZi6TSwo%2BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAVsyprzSjRH0prQoSrcA8ZOmYqrty4sLz%2BS1fnJhTsY9Iqitgd2Kwq8Ms9P2q2OK8NnEDV%2BB2BAMrWzzehjKGQrBOSS0Fr652KcFh4LOr0zNfq%2F5SfKRTp0GHRUdmf7EpT6Ag6ugqPPLeg8lxlzLsYcd626HmcKGNGRrP%2BySVL5YoCK%2FTf9MFyEh0QtbwPgPXiU78WpMHmLemkFIAhewUo6t%2BYyKox9ijcHh1awfiAIIf4eo6WzZmz%2F6sXqYjowbwgM4o3%2BxUwCISQc5ELiAoIYHetNX%2Bd87lcmL7e%2BZuZZ501VFtRYyRz02FPkg1e61j1vveQkFuZ5cpeukA%2FSxwb%2BvqkoqJKt%2BIEAk4w2tpjxKj6am1YowVJ6%2B0eWUgY0AR1o79y%2BCGF64oON12zDyjP8AIZB%2FggI2XJnnHu8nIvDVXKfu5EnmUeyDyJaaBbDEAJYeHWNO6T4ZXt4CGTM%2B0Hcaoo7I2USAtN5LhJZ%2BSyPO1opTNkE8%2BGZd%2FxK37aoQG%2FnS7M3NWY%2BWPFcyuGjN0bQ6wOgSToB0Lz%2FUqVFTozpzyHZ5ZStIYFd0REBkuihBwQtcrgBqfl60v4GtGvNUNoak1O5E0nkkrfXYx%2FgIWFG22h0wAyRvPe%2FXKiHpWwF9gw0ZeAz74JEuvxCMLD88sQGOqUBXQ1cXlzxCpOsfmY2AYCCxUwK82Bo3TX65cXDT%2F5ebhnhbofnTqSIaowHgqCI4FzLZbCf%2BDOkvAw%2B0gCLB8GhTBSCBrPcRAWcYH9vnL0EanJOBguBujKN%2BG6cxsNN%2F5ewSObRIum2dWU0%2BT3nq9qVeBmN87T6Q%2Bw8Jnm26WEHtA72n6qaKg6KcPH87YrO5Ie0xeEOm%2FgFCZhy38iqTDsubuDdEIKu&X-Amz-Signature=f5fa8f61340e9fa2844fc0bf0d82e4ad9a76bb4b57cdf8cd704bede047d57724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTCUK6M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWmDI3YiJS%2Fk6KSLhj7M9hiZt%2BrIMG08RLcTpmr%2FJMAiEAjGz5M2d10Yp27%2FZfS1MfNV4m4okqshMzgXZi6TSwo%2BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAVsyprzSjRH0prQoSrcA8ZOmYqrty4sLz%2BS1fnJhTsY9Iqitgd2Kwq8Ms9P2q2OK8NnEDV%2BB2BAMrWzzehjKGQrBOSS0Fr652KcFh4LOr0zNfq%2F5SfKRTp0GHRUdmf7EpT6Ag6ugqPPLeg8lxlzLsYcd626HmcKGNGRrP%2BySVL5YoCK%2FTf9MFyEh0QtbwPgPXiU78WpMHmLemkFIAhewUo6t%2BYyKox9ijcHh1awfiAIIf4eo6WzZmz%2F6sXqYjowbwgM4o3%2BxUwCISQc5ELiAoIYHetNX%2Bd87lcmL7e%2BZuZZ501VFtRYyRz02FPkg1e61j1vveQkFuZ5cpeukA%2FSxwb%2BvqkoqJKt%2BIEAk4w2tpjxKj6am1YowVJ6%2B0eWUgY0AR1o79y%2BCGF64oON12zDyjP8AIZB%2FggI2XJnnHu8nIvDVXKfu5EnmUeyDyJaaBbDEAJYeHWNO6T4ZXt4CGTM%2B0Hcaoo7I2USAtN5LhJZ%2BSyPO1opTNkE8%2BGZd%2FxK37aoQG%2FnS7M3NWY%2BWPFcyuGjN0bQ6wOgSToB0Lz%2FUqVFTozpzyHZ5ZStIYFd0REBkuihBwQtcrgBqfl60v4GtGvNUNoak1O5E0nkkrfXYx%2FgIWFG22h0wAyRvPe%2FXKiHpWwF9gw0ZeAz74JEuvxCMLD88sQGOqUBXQ1cXlzxCpOsfmY2AYCCxUwK82Bo3TX65cXDT%2F5ebhnhbofnTqSIaowHgqCI4FzLZbCf%2BDOkvAw%2B0gCLB8GhTBSCBrPcRAWcYH9vnL0EanJOBguBujKN%2BG6cxsNN%2F5ewSObRIum2dWU0%2BT3nq9qVeBmN87T6Q%2Bw8Jnm26WEHtA72n6qaKg6KcPH87YrO5Ie0xeEOm%2FgFCZhy38iqTDsubuDdEIKu&X-Amz-Signature=384c6a7c28276778dbf39f129e81b2719dd8a3f6c086794ed04aaea86c61dadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTCUK6M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWmDI3YiJS%2Fk6KSLhj7M9hiZt%2BrIMG08RLcTpmr%2FJMAiEAjGz5M2d10Yp27%2FZfS1MfNV4m4okqshMzgXZi6TSwo%2BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAVsyprzSjRH0prQoSrcA8ZOmYqrty4sLz%2BS1fnJhTsY9Iqitgd2Kwq8Ms9P2q2OK8NnEDV%2BB2BAMrWzzehjKGQrBOSS0Fr652KcFh4LOr0zNfq%2F5SfKRTp0GHRUdmf7EpT6Ag6ugqPPLeg8lxlzLsYcd626HmcKGNGRrP%2BySVL5YoCK%2FTf9MFyEh0QtbwPgPXiU78WpMHmLemkFIAhewUo6t%2BYyKox9ijcHh1awfiAIIf4eo6WzZmz%2F6sXqYjowbwgM4o3%2BxUwCISQc5ELiAoIYHetNX%2Bd87lcmL7e%2BZuZZ501VFtRYyRz02FPkg1e61j1vveQkFuZ5cpeukA%2FSxwb%2BvqkoqJKt%2BIEAk4w2tpjxKj6am1YowVJ6%2B0eWUgY0AR1o79y%2BCGF64oON12zDyjP8AIZB%2FggI2XJnnHu8nIvDVXKfu5EnmUeyDyJaaBbDEAJYeHWNO6T4ZXt4CGTM%2B0Hcaoo7I2USAtN5LhJZ%2BSyPO1opTNkE8%2BGZd%2FxK37aoQG%2FnS7M3NWY%2BWPFcyuGjN0bQ6wOgSToB0Lz%2FUqVFTozpzyHZ5ZStIYFd0REBkuihBwQtcrgBqfl60v4GtGvNUNoak1O5E0nkkrfXYx%2FgIWFG22h0wAyRvPe%2FXKiHpWwF9gw0ZeAz74JEuvxCMLD88sQGOqUBXQ1cXlzxCpOsfmY2AYCCxUwK82Bo3TX65cXDT%2F5ebhnhbofnTqSIaowHgqCI4FzLZbCf%2BDOkvAw%2B0gCLB8GhTBSCBrPcRAWcYH9vnL0EanJOBguBujKN%2BG6cxsNN%2F5ewSObRIum2dWU0%2BT3nq9qVeBmN87T6Q%2Bw8Jnm26WEHtA72n6qaKg6KcPH87YrO5Ie0xeEOm%2FgFCZhy38iqTDsubuDdEIKu&X-Amz-Signature=2c81065155c256f6e53a47b95f220e958201275b8141fcf06d47ee348d58541a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTCUK6M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWmDI3YiJS%2Fk6KSLhj7M9hiZt%2BrIMG08RLcTpmr%2FJMAiEAjGz5M2d10Yp27%2FZfS1MfNV4m4okqshMzgXZi6TSwo%2BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAVsyprzSjRH0prQoSrcA8ZOmYqrty4sLz%2BS1fnJhTsY9Iqitgd2Kwq8Ms9P2q2OK8NnEDV%2BB2BAMrWzzehjKGQrBOSS0Fr652KcFh4LOr0zNfq%2F5SfKRTp0GHRUdmf7EpT6Ag6ugqPPLeg8lxlzLsYcd626HmcKGNGRrP%2BySVL5YoCK%2FTf9MFyEh0QtbwPgPXiU78WpMHmLemkFIAhewUo6t%2BYyKox9ijcHh1awfiAIIf4eo6WzZmz%2F6sXqYjowbwgM4o3%2BxUwCISQc5ELiAoIYHetNX%2Bd87lcmL7e%2BZuZZ501VFtRYyRz02FPkg1e61j1vveQkFuZ5cpeukA%2FSxwb%2BvqkoqJKt%2BIEAk4w2tpjxKj6am1YowVJ6%2B0eWUgY0AR1o79y%2BCGF64oON12zDyjP8AIZB%2FggI2XJnnHu8nIvDVXKfu5EnmUeyDyJaaBbDEAJYeHWNO6T4ZXt4CGTM%2B0Hcaoo7I2USAtN5LhJZ%2BSyPO1opTNkE8%2BGZd%2FxK37aoQG%2FnS7M3NWY%2BWPFcyuGjN0bQ6wOgSToB0Lz%2FUqVFTozpzyHZ5ZStIYFd0REBkuihBwQtcrgBqfl60v4GtGvNUNoak1O5E0nkkrfXYx%2FgIWFG22h0wAyRvPe%2FXKiHpWwF9gw0ZeAz74JEuvxCMLD88sQGOqUBXQ1cXlzxCpOsfmY2AYCCxUwK82Bo3TX65cXDT%2F5ebhnhbofnTqSIaowHgqCI4FzLZbCf%2BDOkvAw%2B0gCLB8GhTBSCBrPcRAWcYH9vnL0EanJOBguBujKN%2BG6cxsNN%2F5ewSObRIum2dWU0%2BT3nq9qVeBmN87T6Q%2Bw8Jnm26WEHtA72n6qaKg6KcPH87YrO5Ie0xeEOm%2FgFCZhy38iqTDsubuDdEIKu&X-Amz-Signature=7ddba11d3f63fb89d06ec3d5b5a6e6f9734dc62bd86db376f7e054d69fa43d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
