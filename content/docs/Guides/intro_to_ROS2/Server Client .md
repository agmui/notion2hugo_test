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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=87bceaa3e1b78c0662fa107873c596142aaf5fc4fcd9bca59ae361afafaf6e59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=4d02fe07599c694b117864bdf986834557e00465898e14fa2b7ec4ff9aeb39f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=0a14771bf0a6b43d0c665297841a1fd52f81b4df71396a7c5f94b7c378fe7cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=a4a990211f98ea7bb164ee54e767aad6c2bcfebc6bf4dd59647cab05fe23c74b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=b8d24c7e97a0dcb3e25104a72a7944b6851c8e47651902c945ce656cb38c0013&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
