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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQGHKUF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIG3jdwcZmNUbXz1zYWl6rHHXMLiyTtZCf%2FiwqwrkJ%2FHMAiEAmgInMgVr7NplhBB5Z6v5iOOgZ08daTWd18UpsOK4Yskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA2EI8IrJ8%2FOgPkhbircAwbzat6Gu9asYN6d9Eeyv67waRi%2Fgpcg7Sw%2B5V3aBljYZWMDhx6Q7kVdyLtB8zwTtQ9CVAVHwe3X6ERiWtIvucVMo8%2BZp%2FlgQJcHzSXYc76AixAOYn4fOT597Wkz5Kt%2BWhdTjOwKW3jSv1jNm0yL9I8WMX4GnHhS2Y7xqewv4TNLNkUxFJ6PwnynyBapfs7JhD7wUkkC21EO5tQGjwkJ0jbVYt3dDMHw8LuRvb2iju6z%2FAU7jpCjGb0%2FESv7BOUQWBxjIpOIjxaYB6FJN1wr4QOjghtCN5sIxM7ajWw%2FnlgbC4X8MfgfgQvOHt0GXfR6hrxh6MZeBJb4V%2FUTUiWpmED8xzk4z14fE1x1Awbq1xo%2FGrw9lP4L2RXacq6%2By5IN1LD2dADlM8dJjHYDKlwmedUhcuf1XEwnDQGVtLzKFo08N0jhhEUtKNWrskeNMSOmirpyOdwaynQiOvakLidc8gcTbAXyptWJN16no4xhSDDv4NX2r5slVKzB%2F1gy70%2Fxyk1tuvwhFvoKEwnWAcjDv30QDvZ0kVYq2XN8ifkjgSOp76ddjUYtNy2dugh35kh8EmQ2OL%2FjDgpVi0RU1%2BAIAmmf2%2FLQ9Pn93AtVnTkj4vp2gHwUt88b6u7n8%2BWTMObspcMGOqUBaT0z0F1azYjuTIqvQz3oeAJDyGpTWOVcE%2BYm1fZhmnHiG%2FRvuyIcwV%2FZ6voMUPc%2BtIZuZHzbMECbpLMtqPGAEbGrRmX6ASTcmUFZGdGJXkdA5GnYImwknizmKAVJRCOHnRDb3jTObC1jCixt9g8t1zWbUA6vO8u%2FtNEMT71qnU5BbuIP4COUO3Rw%2BCwi5SYNMRZyDdT6pO0URKEzoi5G1ibJCsCB&X-Amz-Signature=924278a950014cfd71ecaa75f50e99835c7715ecaed04b37873ccba4c94327d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQGHKUF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIG3jdwcZmNUbXz1zYWl6rHHXMLiyTtZCf%2FiwqwrkJ%2FHMAiEAmgInMgVr7NplhBB5Z6v5iOOgZ08daTWd18UpsOK4Yskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA2EI8IrJ8%2FOgPkhbircAwbzat6Gu9asYN6d9Eeyv67waRi%2Fgpcg7Sw%2B5V3aBljYZWMDhx6Q7kVdyLtB8zwTtQ9CVAVHwe3X6ERiWtIvucVMo8%2BZp%2FlgQJcHzSXYc76AixAOYn4fOT597Wkz5Kt%2BWhdTjOwKW3jSv1jNm0yL9I8WMX4GnHhS2Y7xqewv4TNLNkUxFJ6PwnynyBapfs7JhD7wUkkC21EO5tQGjwkJ0jbVYt3dDMHw8LuRvb2iju6z%2FAU7jpCjGb0%2FESv7BOUQWBxjIpOIjxaYB6FJN1wr4QOjghtCN5sIxM7ajWw%2FnlgbC4X8MfgfgQvOHt0GXfR6hrxh6MZeBJb4V%2FUTUiWpmED8xzk4z14fE1x1Awbq1xo%2FGrw9lP4L2RXacq6%2By5IN1LD2dADlM8dJjHYDKlwmedUhcuf1XEwnDQGVtLzKFo08N0jhhEUtKNWrskeNMSOmirpyOdwaynQiOvakLidc8gcTbAXyptWJN16no4xhSDDv4NX2r5slVKzB%2F1gy70%2Fxyk1tuvwhFvoKEwnWAcjDv30QDvZ0kVYq2XN8ifkjgSOp76ddjUYtNy2dugh35kh8EmQ2OL%2FjDgpVi0RU1%2BAIAmmf2%2FLQ9Pn93AtVnTkj4vp2gHwUt88b6u7n8%2BWTMObspcMGOqUBaT0z0F1azYjuTIqvQz3oeAJDyGpTWOVcE%2BYm1fZhmnHiG%2FRvuyIcwV%2FZ6voMUPc%2BtIZuZHzbMECbpLMtqPGAEbGrRmX6ASTcmUFZGdGJXkdA5GnYImwknizmKAVJRCOHnRDb3jTObC1jCixt9g8t1zWbUA6vO8u%2FtNEMT71qnU5BbuIP4COUO3Rw%2BCwi5SYNMRZyDdT6pO0URKEzoi5G1ibJCsCB&X-Amz-Signature=74b855bdbee2e279761fb3b1fb2cec710d9486f3339851964707656c23da4b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQGHKUF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIG3jdwcZmNUbXz1zYWl6rHHXMLiyTtZCf%2FiwqwrkJ%2FHMAiEAmgInMgVr7NplhBB5Z6v5iOOgZ08daTWd18UpsOK4Yskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA2EI8IrJ8%2FOgPkhbircAwbzat6Gu9asYN6d9Eeyv67waRi%2Fgpcg7Sw%2B5V3aBljYZWMDhx6Q7kVdyLtB8zwTtQ9CVAVHwe3X6ERiWtIvucVMo8%2BZp%2FlgQJcHzSXYc76AixAOYn4fOT597Wkz5Kt%2BWhdTjOwKW3jSv1jNm0yL9I8WMX4GnHhS2Y7xqewv4TNLNkUxFJ6PwnynyBapfs7JhD7wUkkC21EO5tQGjwkJ0jbVYt3dDMHw8LuRvb2iju6z%2FAU7jpCjGb0%2FESv7BOUQWBxjIpOIjxaYB6FJN1wr4QOjghtCN5sIxM7ajWw%2FnlgbC4X8MfgfgQvOHt0GXfR6hrxh6MZeBJb4V%2FUTUiWpmED8xzk4z14fE1x1Awbq1xo%2FGrw9lP4L2RXacq6%2By5IN1LD2dADlM8dJjHYDKlwmedUhcuf1XEwnDQGVtLzKFo08N0jhhEUtKNWrskeNMSOmirpyOdwaynQiOvakLidc8gcTbAXyptWJN16no4xhSDDv4NX2r5slVKzB%2F1gy70%2Fxyk1tuvwhFvoKEwnWAcjDv30QDvZ0kVYq2XN8ifkjgSOp76ddjUYtNy2dugh35kh8EmQ2OL%2FjDgpVi0RU1%2BAIAmmf2%2FLQ9Pn93AtVnTkj4vp2gHwUt88b6u7n8%2BWTMObspcMGOqUBaT0z0F1azYjuTIqvQz3oeAJDyGpTWOVcE%2BYm1fZhmnHiG%2FRvuyIcwV%2FZ6voMUPc%2BtIZuZHzbMECbpLMtqPGAEbGrRmX6ASTcmUFZGdGJXkdA5GnYImwknizmKAVJRCOHnRDb3jTObC1jCixt9g8t1zWbUA6vO8u%2FtNEMT71qnU5BbuIP4COUO3Rw%2BCwi5SYNMRZyDdT6pO0URKEzoi5G1ibJCsCB&X-Amz-Signature=6187234d8f2c156eddd6f4fee865742937b717125e68729755266810c413f50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQGHKUF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIG3jdwcZmNUbXz1zYWl6rHHXMLiyTtZCf%2FiwqwrkJ%2FHMAiEAmgInMgVr7NplhBB5Z6v5iOOgZ08daTWd18UpsOK4Yskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA2EI8IrJ8%2FOgPkhbircAwbzat6Gu9asYN6d9Eeyv67waRi%2Fgpcg7Sw%2B5V3aBljYZWMDhx6Q7kVdyLtB8zwTtQ9CVAVHwe3X6ERiWtIvucVMo8%2BZp%2FlgQJcHzSXYc76AixAOYn4fOT597Wkz5Kt%2BWhdTjOwKW3jSv1jNm0yL9I8WMX4GnHhS2Y7xqewv4TNLNkUxFJ6PwnynyBapfs7JhD7wUkkC21EO5tQGjwkJ0jbVYt3dDMHw8LuRvb2iju6z%2FAU7jpCjGb0%2FESv7BOUQWBxjIpOIjxaYB6FJN1wr4QOjghtCN5sIxM7ajWw%2FnlgbC4X8MfgfgQvOHt0GXfR6hrxh6MZeBJb4V%2FUTUiWpmED8xzk4z14fE1x1Awbq1xo%2FGrw9lP4L2RXacq6%2By5IN1LD2dADlM8dJjHYDKlwmedUhcuf1XEwnDQGVtLzKFo08N0jhhEUtKNWrskeNMSOmirpyOdwaynQiOvakLidc8gcTbAXyptWJN16no4xhSDDv4NX2r5slVKzB%2F1gy70%2Fxyk1tuvwhFvoKEwnWAcjDv30QDvZ0kVYq2XN8ifkjgSOp76ddjUYtNy2dugh35kh8EmQ2OL%2FjDgpVi0RU1%2BAIAmmf2%2FLQ9Pn93AtVnTkj4vp2gHwUt88b6u7n8%2BWTMObspcMGOqUBaT0z0F1azYjuTIqvQz3oeAJDyGpTWOVcE%2BYm1fZhmnHiG%2FRvuyIcwV%2FZ6voMUPc%2BtIZuZHzbMECbpLMtqPGAEbGrRmX6ASTcmUFZGdGJXkdA5GnYImwknizmKAVJRCOHnRDb3jTObC1jCixt9g8t1zWbUA6vO8u%2FtNEMT71qnU5BbuIP4COUO3Rw%2BCwi5SYNMRZyDdT6pO0URKEzoi5G1ibJCsCB&X-Amz-Signature=f1ca607ff3e39889721a728500f268d72f2cd1e389b134ae59d608510333ac34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQGHKUF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIG3jdwcZmNUbXz1zYWl6rHHXMLiyTtZCf%2FiwqwrkJ%2FHMAiEAmgInMgVr7NplhBB5Z6v5iOOgZ08daTWd18UpsOK4Yskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA2EI8IrJ8%2FOgPkhbircAwbzat6Gu9asYN6d9Eeyv67waRi%2Fgpcg7Sw%2B5V3aBljYZWMDhx6Q7kVdyLtB8zwTtQ9CVAVHwe3X6ERiWtIvucVMo8%2BZp%2FlgQJcHzSXYc76AixAOYn4fOT597Wkz5Kt%2BWhdTjOwKW3jSv1jNm0yL9I8WMX4GnHhS2Y7xqewv4TNLNkUxFJ6PwnynyBapfs7JhD7wUkkC21EO5tQGjwkJ0jbVYt3dDMHw8LuRvb2iju6z%2FAU7jpCjGb0%2FESv7BOUQWBxjIpOIjxaYB6FJN1wr4QOjghtCN5sIxM7ajWw%2FnlgbC4X8MfgfgQvOHt0GXfR6hrxh6MZeBJb4V%2FUTUiWpmED8xzk4z14fE1x1Awbq1xo%2FGrw9lP4L2RXacq6%2By5IN1LD2dADlM8dJjHYDKlwmedUhcuf1XEwnDQGVtLzKFo08N0jhhEUtKNWrskeNMSOmirpyOdwaynQiOvakLidc8gcTbAXyptWJN16no4xhSDDv4NX2r5slVKzB%2F1gy70%2Fxyk1tuvwhFvoKEwnWAcjDv30QDvZ0kVYq2XN8ifkjgSOp76ddjUYtNy2dugh35kh8EmQ2OL%2FjDgpVi0RU1%2BAIAmmf2%2FLQ9Pn93AtVnTkj4vp2gHwUt88b6u7n8%2BWTMObspcMGOqUBaT0z0F1azYjuTIqvQz3oeAJDyGpTWOVcE%2BYm1fZhmnHiG%2FRvuyIcwV%2FZ6voMUPc%2BtIZuZHzbMECbpLMtqPGAEbGrRmX6ASTcmUFZGdGJXkdA5GnYImwknizmKAVJRCOHnRDb3jTObC1jCixt9g8t1zWbUA6vO8u%2FtNEMT71qnU5BbuIP4COUO3Rw%2BCwi5SYNMRZyDdT6pO0URKEzoi5G1ibJCsCB&X-Amz-Signature=2c27a5356556c101a5a39151c2787bc0b17192cd629bd1fc5e7a01f1aa923fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
