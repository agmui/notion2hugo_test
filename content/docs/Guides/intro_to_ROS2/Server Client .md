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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXM22DW6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIA9JgG%2FIk5kbm%2B1exiEKxg%2FsIRDvFELqZgc9kKxiEGWkAiEA7UU%2BtQ6m50Srjk55wrFRlSYjwjClOSdAU1NtTnsSdjAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIQ6J7SUMNg06dwdwircA%2FfMmanab%2Bk7MsZCw28Y2ZY%2BvozHcwAtm38WEmXmX9J%2BzGQdu0RX1b%2FRCVG6S2JUfy6QBym%2FyanQwnX%2Fq3ly7lPwA0ZESiA68M1sZIbqku3hooBDJAQcc7Sosmuakvs04L7NIqp1PsyqQ34mk2RN%2FTEecATmFCAg2EwHZBhiyoyJtnu%2FwfEC5n%2FNoN95O3GNwrDBPDFdQvm2y1Xo4VnLBEEkAxgHN6BYvH0VXD%2BXxVrBOFJNNMK9h04MGpDgvBiDQfd2k7FxF7PftAt5dKFU87lq2iXRzEGsXf0YBisasK6a0dvyiTR%2Fmo3r0AoXLkUwYXrrBw8D3fogf7cimJJXTfg%2BtouJMUFQgICV%2BYntiaEyWv2zlLb8qu6oz4qvD5c%2B%2Bn%2BmRNZYYm8Bq7DMQtkgBaX%2FaZl3qn7vYANoXEUVhpdr4GlfM8%2FlPfF%2BlyPme8kGATvEVyr479N3f7BbGNdKor8xgFnTr6NBs%2BlPBn0nAoIYWp4%2BxflktDUzgwaLUMbUCRuV2DHwl1Ou3I8NQnJDzt%2BY6xYNcROUwA96vCv1XQV0nnlKEBeFi3FQFA4bEWPiPdJj%2BwGUix3fzNhoPzNegutds%2BUcrKcMp%2BIvJIULt5BPRRjKR2oUsjt%2FusJeMIC8tMIGOqUByx18C8OZfgLKfGAY5B42EGR7e7gnubN2le0mxzsECTqosZKiYkhavg75%2Bf28cCouMBaAQLKTmKCGZyzyKT2J%2FwlBvZjVIrWbFFC4WYGlMytUAFqdSqNz4heIGDNy9CZSBi9FCaltOgsuH9wmdiFW3HJk6cQRszcBIOpSRwKzysaiq5rCDJHBZJeWx4ppVQPYjgpmNvrTi3sPcrennTO%2B5Bv3G%2F3d&X-Amz-Signature=0320eb52e9592bf02adb729b786f88fb6bf866f8639cdb2ad8c4a6bd412302e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXM22DW6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIA9JgG%2FIk5kbm%2B1exiEKxg%2FsIRDvFELqZgc9kKxiEGWkAiEA7UU%2BtQ6m50Srjk55wrFRlSYjwjClOSdAU1NtTnsSdjAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIQ6J7SUMNg06dwdwircA%2FfMmanab%2Bk7MsZCw28Y2ZY%2BvozHcwAtm38WEmXmX9J%2BzGQdu0RX1b%2FRCVG6S2JUfy6QBym%2FyanQwnX%2Fq3ly7lPwA0ZESiA68M1sZIbqku3hooBDJAQcc7Sosmuakvs04L7NIqp1PsyqQ34mk2RN%2FTEecATmFCAg2EwHZBhiyoyJtnu%2FwfEC5n%2FNoN95O3GNwrDBPDFdQvm2y1Xo4VnLBEEkAxgHN6BYvH0VXD%2BXxVrBOFJNNMK9h04MGpDgvBiDQfd2k7FxF7PftAt5dKFU87lq2iXRzEGsXf0YBisasK6a0dvyiTR%2Fmo3r0AoXLkUwYXrrBw8D3fogf7cimJJXTfg%2BtouJMUFQgICV%2BYntiaEyWv2zlLb8qu6oz4qvD5c%2B%2Bn%2BmRNZYYm8Bq7DMQtkgBaX%2FaZl3qn7vYANoXEUVhpdr4GlfM8%2FlPfF%2BlyPme8kGATvEVyr479N3f7BbGNdKor8xgFnTr6NBs%2BlPBn0nAoIYWp4%2BxflktDUzgwaLUMbUCRuV2DHwl1Ou3I8NQnJDzt%2BY6xYNcROUwA96vCv1XQV0nnlKEBeFi3FQFA4bEWPiPdJj%2BwGUix3fzNhoPzNegutds%2BUcrKcMp%2BIvJIULt5BPRRjKR2oUsjt%2FusJeMIC8tMIGOqUByx18C8OZfgLKfGAY5B42EGR7e7gnubN2le0mxzsECTqosZKiYkhavg75%2Bf28cCouMBaAQLKTmKCGZyzyKT2J%2FwlBvZjVIrWbFFC4WYGlMytUAFqdSqNz4heIGDNy9CZSBi9FCaltOgsuH9wmdiFW3HJk6cQRszcBIOpSRwKzysaiq5rCDJHBZJeWx4ppVQPYjgpmNvrTi3sPcrennTO%2B5Bv3G%2F3d&X-Amz-Signature=840bd234572d2b1a6f66b3235c425db14d5ef8b70a6dcd364fe0b64c939c0cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXM22DW6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIA9JgG%2FIk5kbm%2B1exiEKxg%2FsIRDvFELqZgc9kKxiEGWkAiEA7UU%2BtQ6m50Srjk55wrFRlSYjwjClOSdAU1NtTnsSdjAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIQ6J7SUMNg06dwdwircA%2FfMmanab%2Bk7MsZCw28Y2ZY%2BvozHcwAtm38WEmXmX9J%2BzGQdu0RX1b%2FRCVG6S2JUfy6QBym%2FyanQwnX%2Fq3ly7lPwA0ZESiA68M1sZIbqku3hooBDJAQcc7Sosmuakvs04L7NIqp1PsyqQ34mk2RN%2FTEecATmFCAg2EwHZBhiyoyJtnu%2FwfEC5n%2FNoN95O3GNwrDBPDFdQvm2y1Xo4VnLBEEkAxgHN6BYvH0VXD%2BXxVrBOFJNNMK9h04MGpDgvBiDQfd2k7FxF7PftAt5dKFU87lq2iXRzEGsXf0YBisasK6a0dvyiTR%2Fmo3r0AoXLkUwYXrrBw8D3fogf7cimJJXTfg%2BtouJMUFQgICV%2BYntiaEyWv2zlLb8qu6oz4qvD5c%2B%2Bn%2BmRNZYYm8Bq7DMQtkgBaX%2FaZl3qn7vYANoXEUVhpdr4GlfM8%2FlPfF%2BlyPme8kGATvEVyr479N3f7BbGNdKor8xgFnTr6NBs%2BlPBn0nAoIYWp4%2BxflktDUzgwaLUMbUCRuV2DHwl1Ou3I8NQnJDzt%2BY6xYNcROUwA96vCv1XQV0nnlKEBeFi3FQFA4bEWPiPdJj%2BwGUix3fzNhoPzNegutds%2BUcrKcMp%2BIvJIULt5BPRRjKR2oUsjt%2FusJeMIC8tMIGOqUByx18C8OZfgLKfGAY5B42EGR7e7gnubN2le0mxzsECTqosZKiYkhavg75%2Bf28cCouMBaAQLKTmKCGZyzyKT2J%2FwlBvZjVIrWbFFC4WYGlMytUAFqdSqNz4heIGDNy9CZSBi9FCaltOgsuH9wmdiFW3HJk6cQRszcBIOpSRwKzysaiq5rCDJHBZJeWx4ppVQPYjgpmNvrTi3sPcrennTO%2B5Bv3G%2F3d&X-Amz-Signature=d122a51259253555bc7305a6c476f6dda2c53c9d122ebe1cab80ca7e6a77a1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXM22DW6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIA9JgG%2FIk5kbm%2B1exiEKxg%2FsIRDvFELqZgc9kKxiEGWkAiEA7UU%2BtQ6m50Srjk55wrFRlSYjwjClOSdAU1NtTnsSdjAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIQ6J7SUMNg06dwdwircA%2FfMmanab%2Bk7MsZCw28Y2ZY%2BvozHcwAtm38WEmXmX9J%2BzGQdu0RX1b%2FRCVG6S2JUfy6QBym%2FyanQwnX%2Fq3ly7lPwA0ZESiA68M1sZIbqku3hooBDJAQcc7Sosmuakvs04L7NIqp1PsyqQ34mk2RN%2FTEecATmFCAg2EwHZBhiyoyJtnu%2FwfEC5n%2FNoN95O3GNwrDBPDFdQvm2y1Xo4VnLBEEkAxgHN6BYvH0VXD%2BXxVrBOFJNNMK9h04MGpDgvBiDQfd2k7FxF7PftAt5dKFU87lq2iXRzEGsXf0YBisasK6a0dvyiTR%2Fmo3r0AoXLkUwYXrrBw8D3fogf7cimJJXTfg%2BtouJMUFQgICV%2BYntiaEyWv2zlLb8qu6oz4qvD5c%2B%2Bn%2BmRNZYYm8Bq7DMQtkgBaX%2FaZl3qn7vYANoXEUVhpdr4GlfM8%2FlPfF%2BlyPme8kGATvEVyr479N3f7BbGNdKor8xgFnTr6NBs%2BlPBn0nAoIYWp4%2BxflktDUzgwaLUMbUCRuV2DHwl1Ou3I8NQnJDzt%2BY6xYNcROUwA96vCv1XQV0nnlKEBeFi3FQFA4bEWPiPdJj%2BwGUix3fzNhoPzNegutds%2BUcrKcMp%2BIvJIULt5BPRRjKR2oUsjt%2FusJeMIC8tMIGOqUByx18C8OZfgLKfGAY5B42EGR7e7gnubN2le0mxzsECTqosZKiYkhavg75%2Bf28cCouMBaAQLKTmKCGZyzyKT2J%2FwlBvZjVIrWbFFC4WYGlMytUAFqdSqNz4heIGDNy9CZSBi9FCaltOgsuH9wmdiFW3HJk6cQRszcBIOpSRwKzysaiq5rCDJHBZJeWx4ppVQPYjgpmNvrTi3sPcrennTO%2B5Bv3G%2F3d&X-Amz-Signature=fd40cdbe11c9c15d3466eb022c044baed687d880f1b00c462576b835c1529f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXM22DW6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIA9JgG%2FIk5kbm%2B1exiEKxg%2FsIRDvFELqZgc9kKxiEGWkAiEA7UU%2BtQ6m50Srjk55wrFRlSYjwjClOSdAU1NtTnsSdjAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIQ6J7SUMNg06dwdwircA%2FfMmanab%2Bk7MsZCw28Y2ZY%2BvozHcwAtm38WEmXmX9J%2BzGQdu0RX1b%2FRCVG6S2JUfy6QBym%2FyanQwnX%2Fq3ly7lPwA0ZESiA68M1sZIbqku3hooBDJAQcc7Sosmuakvs04L7NIqp1PsyqQ34mk2RN%2FTEecATmFCAg2EwHZBhiyoyJtnu%2FwfEC5n%2FNoN95O3GNwrDBPDFdQvm2y1Xo4VnLBEEkAxgHN6BYvH0VXD%2BXxVrBOFJNNMK9h04MGpDgvBiDQfd2k7FxF7PftAt5dKFU87lq2iXRzEGsXf0YBisasK6a0dvyiTR%2Fmo3r0AoXLkUwYXrrBw8D3fogf7cimJJXTfg%2BtouJMUFQgICV%2BYntiaEyWv2zlLb8qu6oz4qvD5c%2B%2Bn%2BmRNZYYm8Bq7DMQtkgBaX%2FaZl3qn7vYANoXEUVhpdr4GlfM8%2FlPfF%2BlyPme8kGATvEVyr479N3f7BbGNdKor8xgFnTr6NBs%2BlPBn0nAoIYWp4%2BxflktDUzgwaLUMbUCRuV2DHwl1Ou3I8NQnJDzt%2BY6xYNcROUwA96vCv1XQV0nnlKEBeFi3FQFA4bEWPiPdJj%2BwGUix3fzNhoPzNegutds%2BUcrKcMp%2BIvJIULt5BPRRjKR2oUsjt%2FusJeMIC8tMIGOqUByx18C8OZfgLKfGAY5B42EGR7e7gnubN2le0mxzsECTqosZKiYkhavg75%2Bf28cCouMBaAQLKTmKCGZyzyKT2J%2FwlBvZjVIrWbFFC4WYGlMytUAFqdSqNz4heIGDNy9CZSBi9FCaltOgsuH9wmdiFW3HJk6cQRszcBIOpSRwKzysaiq5rCDJHBZJeWx4ppVQPYjgpmNvrTi3sPcrennTO%2B5Bv3G%2F3d&X-Amz-Signature=ae40348cfac690d4125e35d72a593213d57c4ce29015774db9ce108c36dcebd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
