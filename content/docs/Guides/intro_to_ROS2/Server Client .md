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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAW73XIX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKXI%2FEumP5HKin07bhgKVNPE%2FIqR89pis7mJ2hWhNU3gIhAKnOO5ea1g9r5MutSVTWiNWyo78COWHmw9Jf8Fnsx1MOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyK9wudceOvj80vtgwq3ANDAdSQcRLk9E%2B2Mk8etXg2doYBd110Pi7BKLoIitC7GJu4pNIoqAl9nt5smnoS3r0QZ6T0nn8Ag3Sr6YUq8SX9R2l8dAVF6h%2F0xKkC0KRLKJGtjXEgC5m5%2FzPFq%2FkCwYuXu5gIcGG9gE%2Feq3nLmE6l7ghsHwNyRTdjJ0ssUKW1ABNju7MUtMgzatVTvqRNvpcQEIX%2F6Qf%2FwNJlWRH9xtk1MmndnlegfZjkghkpeupVlW%2BYZ5seNr8YXFVIje7RCuFLCqghZv74wal5pJ8bSKpk9umvf8eO5ElWHDGrR%2BEAyG5tXx1DwNOT8GJMiUTNlqnjq6A%2BDZyhyRc6Lpq%2FQc1y2W%2BgHpORw0YCwcpbmVUDgDNNJ2s3sBMDjapPSLQM1ZZvUx2%2FDkeSZfWoUUzDGkf2QRFcv0DezQHl1SHMQyf0E0hFqziQXV76hy7zgB10oVg5kfONlwft1AICUW3xdbv1E0cG3DjJMvEb941K8oiZFHSarmsTmEFvBsVdos1kDl9AnIQYSbgqAjfj2d4gcHZ5bTN7Kb%2B2iolz%2FjXtRa7p3GYXprdQ1HXYPJyugsc843tq0h7EdznCJRQSzxzT5uMwPb%2F2yJqFUAKPY1neQFK0jS7PFFz0QLZbsLcudjDk19S%2FBjqkAcnrZmOsDAJRR1PLPbxY%2F4vrPnnUpq5IReT6SHr5Kq15BMtUY1K5uBWS4%2FB%2FhoIX8%2Ble7K3QEPcF%2FB4vbC5FZA9CutLtgTeuksGQrf%2BrU72UHAFwpukcdlGAvFdOaDbmNUPPoDD65VocywBo900600n1HujwWzWtu%2BpXZWrptB8wvoC%2BRiJdrL09Dwchkj3HfNgjSjLIMZ6rEBsBY7NUcPPNYun%2B&X-Amz-Signature=38f4a0d2aa1231ac2958c24179d3be3bb2cda97dc2f4b58dc97d0a3678e86c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAW73XIX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKXI%2FEumP5HKin07bhgKVNPE%2FIqR89pis7mJ2hWhNU3gIhAKnOO5ea1g9r5MutSVTWiNWyo78COWHmw9Jf8Fnsx1MOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyK9wudceOvj80vtgwq3ANDAdSQcRLk9E%2B2Mk8etXg2doYBd110Pi7BKLoIitC7GJu4pNIoqAl9nt5smnoS3r0QZ6T0nn8Ag3Sr6YUq8SX9R2l8dAVF6h%2F0xKkC0KRLKJGtjXEgC5m5%2FzPFq%2FkCwYuXu5gIcGG9gE%2Feq3nLmE6l7ghsHwNyRTdjJ0ssUKW1ABNju7MUtMgzatVTvqRNvpcQEIX%2F6Qf%2FwNJlWRH9xtk1MmndnlegfZjkghkpeupVlW%2BYZ5seNr8YXFVIje7RCuFLCqghZv74wal5pJ8bSKpk9umvf8eO5ElWHDGrR%2BEAyG5tXx1DwNOT8GJMiUTNlqnjq6A%2BDZyhyRc6Lpq%2FQc1y2W%2BgHpORw0YCwcpbmVUDgDNNJ2s3sBMDjapPSLQM1ZZvUx2%2FDkeSZfWoUUzDGkf2QRFcv0DezQHl1SHMQyf0E0hFqziQXV76hy7zgB10oVg5kfONlwft1AICUW3xdbv1E0cG3DjJMvEb941K8oiZFHSarmsTmEFvBsVdos1kDl9AnIQYSbgqAjfj2d4gcHZ5bTN7Kb%2B2iolz%2FjXtRa7p3GYXprdQ1HXYPJyugsc843tq0h7EdznCJRQSzxzT5uMwPb%2F2yJqFUAKPY1neQFK0jS7PFFz0QLZbsLcudjDk19S%2FBjqkAcnrZmOsDAJRR1PLPbxY%2F4vrPnnUpq5IReT6SHr5Kq15BMtUY1K5uBWS4%2FB%2FhoIX8%2Ble7K3QEPcF%2FB4vbC5FZA9CutLtgTeuksGQrf%2BrU72UHAFwpukcdlGAvFdOaDbmNUPPoDD65VocywBo900600n1HujwWzWtu%2BpXZWrptB8wvoC%2BRiJdrL09Dwchkj3HfNgjSjLIMZ6rEBsBY7NUcPPNYun%2B&X-Amz-Signature=49e03648a9a19c044d6b88d1905fa0dd6988bab9295f902802d1d188cfd8c5f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAW73XIX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKXI%2FEumP5HKin07bhgKVNPE%2FIqR89pis7mJ2hWhNU3gIhAKnOO5ea1g9r5MutSVTWiNWyo78COWHmw9Jf8Fnsx1MOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyK9wudceOvj80vtgwq3ANDAdSQcRLk9E%2B2Mk8etXg2doYBd110Pi7BKLoIitC7GJu4pNIoqAl9nt5smnoS3r0QZ6T0nn8Ag3Sr6YUq8SX9R2l8dAVF6h%2F0xKkC0KRLKJGtjXEgC5m5%2FzPFq%2FkCwYuXu5gIcGG9gE%2Feq3nLmE6l7ghsHwNyRTdjJ0ssUKW1ABNju7MUtMgzatVTvqRNvpcQEIX%2F6Qf%2FwNJlWRH9xtk1MmndnlegfZjkghkpeupVlW%2BYZ5seNr8YXFVIje7RCuFLCqghZv74wal5pJ8bSKpk9umvf8eO5ElWHDGrR%2BEAyG5tXx1DwNOT8GJMiUTNlqnjq6A%2BDZyhyRc6Lpq%2FQc1y2W%2BgHpORw0YCwcpbmVUDgDNNJ2s3sBMDjapPSLQM1ZZvUx2%2FDkeSZfWoUUzDGkf2QRFcv0DezQHl1SHMQyf0E0hFqziQXV76hy7zgB10oVg5kfONlwft1AICUW3xdbv1E0cG3DjJMvEb941K8oiZFHSarmsTmEFvBsVdos1kDl9AnIQYSbgqAjfj2d4gcHZ5bTN7Kb%2B2iolz%2FjXtRa7p3GYXprdQ1HXYPJyugsc843tq0h7EdznCJRQSzxzT5uMwPb%2F2yJqFUAKPY1neQFK0jS7PFFz0QLZbsLcudjDk19S%2FBjqkAcnrZmOsDAJRR1PLPbxY%2F4vrPnnUpq5IReT6SHr5Kq15BMtUY1K5uBWS4%2FB%2FhoIX8%2Ble7K3QEPcF%2FB4vbC5FZA9CutLtgTeuksGQrf%2BrU72UHAFwpukcdlGAvFdOaDbmNUPPoDD65VocywBo900600n1HujwWzWtu%2BpXZWrptB8wvoC%2BRiJdrL09Dwchkj3HfNgjSjLIMZ6rEBsBY7NUcPPNYun%2B&X-Amz-Signature=87c5efa411afee83c57e9788584e770e5217edb294e123f1af0e42dd119b3e58&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAW73XIX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKXI%2FEumP5HKin07bhgKVNPE%2FIqR89pis7mJ2hWhNU3gIhAKnOO5ea1g9r5MutSVTWiNWyo78COWHmw9Jf8Fnsx1MOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyK9wudceOvj80vtgwq3ANDAdSQcRLk9E%2B2Mk8etXg2doYBd110Pi7BKLoIitC7GJu4pNIoqAl9nt5smnoS3r0QZ6T0nn8Ag3Sr6YUq8SX9R2l8dAVF6h%2F0xKkC0KRLKJGtjXEgC5m5%2FzPFq%2FkCwYuXu5gIcGG9gE%2Feq3nLmE6l7ghsHwNyRTdjJ0ssUKW1ABNju7MUtMgzatVTvqRNvpcQEIX%2F6Qf%2FwNJlWRH9xtk1MmndnlegfZjkghkpeupVlW%2BYZ5seNr8YXFVIje7RCuFLCqghZv74wal5pJ8bSKpk9umvf8eO5ElWHDGrR%2BEAyG5tXx1DwNOT8GJMiUTNlqnjq6A%2BDZyhyRc6Lpq%2FQc1y2W%2BgHpORw0YCwcpbmVUDgDNNJ2s3sBMDjapPSLQM1ZZvUx2%2FDkeSZfWoUUzDGkf2QRFcv0DezQHl1SHMQyf0E0hFqziQXV76hy7zgB10oVg5kfONlwft1AICUW3xdbv1E0cG3DjJMvEb941K8oiZFHSarmsTmEFvBsVdos1kDl9AnIQYSbgqAjfj2d4gcHZ5bTN7Kb%2B2iolz%2FjXtRa7p3GYXprdQ1HXYPJyugsc843tq0h7EdznCJRQSzxzT5uMwPb%2F2yJqFUAKPY1neQFK0jS7PFFz0QLZbsLcudjDk19S%2FBjqkAcnrZmOsDAJRR1PLPbxY%2F4vrPnnUpq5IReT6SHr5Kq15BMtUY1K5uBWS4%2FB%2FhoIX8%2Ble7K3QEPcF%2FB4vbC5FZA9CutLtgTeuksGQrf%2BrU72UHAFwpukcdlGAvFdOaDbmNUPPoDD65VocywBo900600n1HujwWzWtu%2BpXZWrptB8wvoC%2BRiJdrL09Dwchkj3HfNgjSjLIMZ6rEBsBY7NUcPPNYun%2B&X-Amz-Signature=9443fd22988b949a7dc5dcf6bc5c6b112623af51774afa9758af6ba0f8e66eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAW73XIX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKXI%2FEumP5HKin07bhgKVNPE%2FIqR89pis7mJ2hWhNU3gIhAKnOO5ea1g9r5MutSVTWiNWyo78COWHmw9Jf8Fnsx1MOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyK9wudceOvj80vtgwq3ANDAdSQcRLk9E%2B2Mk8etXg2doYBd110Pi7BKLoIitC7GJu4pNIoqAl9nt5smnoS3r0QZ6T0nn8Ag3Sr6YUq8SX9R2l8dAVF6h%2F0xKkC0KRLKJGtjXEgC5m5%2FzPFq%2FkCwYuXu5gIcGG9gE%2Feq3nLmE6l7ghsHwNyRTdjJ0ssUKW1ABNju7MUtMgzatVTvqRNvpcQEIX%2F6Qf%2FwNJlWRH9xtk1MmndnlegfZjkghkpeupVlW%2BYZ5seNr8YXFVIje7RCuFLCqghZv74wal5pJ8bSKpk9umvf8eO5ElWHDGrR%2BEAyG5tXx1DwNOT8GJMiUTNlqnjq6A%2BDZyhyRc6Lpq%2FQc1y2W%2BgHpORw0YCwcpbmVUDgDNNJ2s3sBMDjapPSLQM1ZZvUx2%2FDkeSZfWoUUzDGkf2QRFcv0DezQHl1SHMQyf0E0hFqziQXV76hy7zgB10oVg5kfONlwft1AICUW3xdbv1E0cG3DjJMvEb941K8oiZFHSarmsTmEFvBsVdos1kDl9AnIQYSbgqAjfj2d4gcHZ5bTN7Kb%2B2iolz%2FjXtRa7p3GYXprdQ1HXYPJyugsc843tq0h7EdznCJRQSzxzT5uMwPb%2F2yJqFUAKPY1neQFK0jS7PFFz0QLZbsLcudjDk19S%2FBjqkAcnrZmOsDAJRR1PLPbxY%2F4vrPnnUpq5IReT6SHr5Kq15BMtUY1K5uBWS4%2FB%2FhoIX8%2Ble7K3QEPcF%2FB4vbC5FZA9CutLtgTeuksGQrf%2BrU72UHAFwpukcdlGAvFdOaDbmNUPPoDD65VocywBo900600n1HujwWzWtu%2BpXZWrptB8wvoC%2BRiJdrL09Dwchkj3HfNgjSjLIMZ6rEBsBY7NUcPPNYun%2B&X-Amz-Signature=0025641e319aeb7bc2fff6d0a0177710022e851df038abebc77db1633a0cee9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
