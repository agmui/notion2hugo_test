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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45QZSAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDk7Nq1EyT2kMRFbYC%2Fd2GHykirOxICuAPlpk%2Fh5cddswIgX%2BXFaivhHyjuDWJ10NbGT1%2BDDQ8t7Vq3OSwIYvamxmUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIsWJbNTfe9q8OauzyrcA1Y2YY2uAQLfCwVe8vmBiemhjjgfyalYL%2Bxsz8GpqKY4%2FUwKoXfuCPLTiudqLrINWa4WnPj9UPGNjNXZd2jSeDhYrI75QZlxOJZq62mvbNFpKiXyj4WTh11%2BMXHo0dtKmLfxeNAzncbhClAr1dXD4VudeZqFs2SC5vsY4HLfUCvYjJWXgBVdZ%2Bloaz53foKSwGGlcOPVoK4MGYjxn7hE4HvdGki%2FW4szfF%2BI8CHfUAWJ3YuQ2KCqsERdPIvVPKF0PgZRAkBZjvLwPsMw0ZVQIopt14tHiZpuh%2FIHwgHWywWW1LWrVn8KtmZwXJvw3XsrgKg%2Bdi09V2WU39Bmsdc4o9T6zUjW0LgDXoxfv%2F0ibj1MHMkoh8yCAMQLdHAzIjfvTnGnraRq7QnF86wK6YSBvEjzIUBEoyWX6V2n7tGdW7yXfKrIM%2FoS2F9dpdntpHQkk9EzWIvm0wTB%2Fznt1b%2BJXeODgEkqmWu3KUeSmDUVJWHRSneBMjQCMuDWK%2Bp%2F%2BsGTxOmwsOsE6XbYTC1%2FjMjJjiRcx6xlNSDDfCCdlTSmfLFoKy9fh3FtLfEzoTTZhXiibExvzb68%2F%2BTBi7AeiNQc7Iq8NOeccd809Pv3ppe7ridWO3Iv4R0%2FJqb%2FjjhBMInTqcMGOqUBOjUJGxP3BKpvv8GjO3i2D5XKXM44LIcXkF6HcmR7WBd%2BiElvY0bH0XhiWnIS%2FQ6zNcbSnNEvSvlv2wbRh%2FeD7hPKSODVv8OoPIHkbOhVNVpRt0b1PU368dm42LwXf78dkk%2FSjrKD4w9MCy30LxlVoH3OqbF41Hk64MaTjQzBHsTb6eQFRpfbiP6d%2FFgQRs9A77Q6FxzHxmRd3rUHDIyYB0Mbbnhh&X-Amz-Signature=0441d54d6060dc78bd26a942e96e3a45605927b21679828845cfc41074257a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45QZSAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDk7Nq1EyT2kMRFbYC%2Fd2GHykirOxICuAPlpk%2Fh5cddswIgX%2BXFaivhHyjuDWJ10NbGT1%2BDDQ8t7Vq3OSwIYvamxmUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIsWJbNTfe9q8OauzyrcA1Y2YY2uAQLfCwVe8vmBiemhjjgfyalYL%2Bxsz8GpqKY4%2FUwKoXfuCPLTiudqLrINWa4WnPj9UPGNjNXZd2jSeDhYrI75QZlxOJZq62mvbNFpKiXyj4WTh11%2BMXHo0dtKmLfxeNAzncbhClAr1dXD4VudeZqFs2SC5vsY4HLfUCvYjJWXgBVdZ%2Bloaz53foKSwGGlcOPVoK4MGYjxn7hE4HvdGki%2FW4szfF%2BI8CHfUAWJ3YuQ2KCqsERdPIvVPKF0PgZRAkBZjvLwPsMw0ZVQIopt14tHiZpuh%2FIHwgHWywWW1LWrVn8KtmZwXJvw3XsrgKg%2Bdi09V2WU39Bmsdc4o9T6zUjW0LgDXoxfv%2F0ibj1MHMkoh8yCAMQLdHAzIjfvTnGnraRq7QnF86wK6YSBvEjzIUBEoyWX6V2n7tGdW7yXfKrIM%2FoS2F9dpdntpHQkk9EzWIvm0wTB%2Fznt1b%2BJXeODgEkqmWu3KUeSmDUVJWHRSneBMjQCMuDWK%2Bp%2F%2BsGTxOmwsOsE6XbYTC1%2FjMjJjiRcx6xlNSDDfCCdlTSmfLFoKy9fh3FtLfEzoTTZhXiibExvzb68%2F%2BTBi7AeiNQc7Iq8NOeccd809Pv3ppe7ridWO3Iv4R0%2FJqb%2FjjhBMInTqcMGOqUBOjUJGxP3BKpvv8GjO3i2D5XKXM44LIcXkF6HcmR7WBd%2BiElvY0bH0XhiWnIS%2FQ6zNcbSnNEvSvlv2wbRh%2FeD7hPKSODVv8OoPIHkbOhVNVpRt0b1PU368dm42LwXf78dkk%2FSjrKD4w9MCy30LxlVoH3OqbF41Hk64MaTjQzBHsTb6eQFRpfbiP6d%2FFgQRs9A77Q6FxzHxmRd3rUHDIyYB0Mbbnhh&X-Amz-Signature=672323f0372080ed279e1b1d62f4b904404dd2d55840efb152aee43848efc619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45QZSAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDk7Nq1EyT2kMRFbYC%2Fd2GHykirOxICuAPlpk%2Fh5cddswIgX%2BXFaivhHyjuDWJ10NbGT1%2BDDQ8t7Vq3OSwIYvamxmUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIsWJbNTfe9q8OauzyrcA1Y2YY2uAQLfCwVe8vmBiemhjjgfyalYL%2Bxsz8GpqKY4%2FUwKoXfuCPLTiudqLrINWa4WnPj9UPGNjNXZd2jSeDhYrI75QZlxOJZq62mvbNFpKiXyj4WTh11%2BMXHo0dtKmLfxeNAzncbhClAr1dXD4VudeZqFs2SC5vsY4HLfUCvYjJWXgBVdZ%2Bloaz53foKSwGGlcOPVoK4MGYjxn7hE4HvdGki%2FW4szfF%2BI8CHfUAWJ3YuQ2KCqsERdPIvVPKF0PgZRAkBZjvLwPsMw0ZVQIopt14tHiZpuh%2FIHwgHWywWW1LWrVn8KtmZwXJvw3XsrgKg%2Bdi09V2WU39Bmsdc4o9T6zUjW0LgDXoxfv%2F0ibj1MHMkoh8yCAMQLdHAzIjfvTnGnraRq7QnF86wK6YSBvEjzIUBEoyWX6V2n7tGdW7yXfKrIM%2FoS2F9dpdntpHQkk9EzWIvm0wTB%2Fznt1b%2BJXeODgEkqmWu3KUeSmDUVJWHRSneBMjQCMuDWK%2Bp%2F%2BsGTxOmwsOsE6XbYTC1%2FjMjJjiRcx6xlNSDDfCCdlTSmfLFoKy9fh3FtLfEzoTTZhXiibExvzb68%2F%2BTBi7AeiNQc7Iq8NOeccd809Pv3ppe7ridWO3Iv4R0%2FJqb%2FjjhBMInTqcMGOqUBOjUJGxP3BKpvv8GjO3i2D5XKXM44LIcXkF6HcmR7WBd%2BiElvY0bH0XhiWnIS%2FQ6zNcbSnNEvSvlv2wbRh%2FeD7hPKSODVv8OoPIHkbOhVNVpRt0b1PU368dm42LwXf78dkk%2FSjrKD4w9MCy30LxlVoH3OqbF41Hk64MaTjQzBHsTb6eQFRpfbiP6d%2FFgQRs9A77Q6FxzHxmRd3rUHDIyYB0Mbbnhh&X-Amz-Signature=09fd459a04997bb8a2353b834e941b954d32e9e29e73ca619efa474643d8dfe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45QZSAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDk7Nq1EyT2kMRFbYC%2Fd2GHykirOxICuAPlpk%2Fh5cddswIgX%2BXFaivhHyjuDWJ10NbGT1%2BDDQ8t7Vq3OSwIYvamxmUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIsWJbNTfe9q8OauzyrcA1Y2YY2uAQLfCwVe8vmBiemhjjgfyalYL%2Bxsz8GpqKY4%2FUwKoXfuCPLTiudqLrINWa4WnPj9UPGNjNXZd2jSeDhYrI75QZlxOJZq62mvbNFpKiXyj4WTh11%2BMXHo0dtKmLfxeNAzncbhClAr1dXD4VudeZqFs2SC5vsY4HLfUCvYjJWXgBVdZ%2Bloaz53foKSwGGlcOPVoK4MGYjxn7hE4HvdGki%2FW4szfF%2BI8CHfUAWJ3YuQ2KCqsERdPIvVPKF0PgZRAkBZjvLwPsMw0ZVQIopt14tHiZpuh%2FIHwgHWywWW1LWrVn8KtmZwXJvw3XsrgKg%2Bdi09V2WU39Bmsdc4o9T6zUjW0LgDXoxfv%2F0ibj1MHMkoh8yCAMQLdHAzIjfvTnGnraRq7QnF86wK6YSBvEjzIUBEoyWX6V2n7tGdW7yXfKrIM%2FoS2F9dpdntpHQkk9EzWIvm0wTB%2Fznt1b%2BJXeODgEkqmWu3KUeSmDUVJWHRSneBMjQCMuDWK%2Bp%2F%2BsGTxOmwsOsE6XbYTC1%2FjMjJjiRcx6xlNSDDfCCdlTSmfLFoKy9fh3FtLfEzoTTZhXiibExvzb68%2F%2BTBi7AeiNQc7Iq8NOeccd809Pv3ppe7ridWO3Iv4R0%2FJqb%2FjjhBMInTqcMGOqUBOjUJGxP3BKpvv8GjO3i2D5XKXM44LIcXkF6HcmR7WBd%2BiElvY0bH0XhiWnIS%2FQ6zNcbSnNEvSvlv2wbRh%2FeD7hPKSODVv8OoPIHkbOhVNVpRt0b1PU368dm42LwXf78dkk%2FSjrKD4w9MCy30LxlVoH3OqbF41Hk64MaTjQzBHsTb6eQFRpfbiP6d%2FFgQRs9A77Q6FxzHxmRd3rUHDIyYB0Mbbnhh&X-Amz-Signature=7ebd3338f1fd020f48008b4f2448eb2a714d7e336a9179f2a76329573189b4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45QZSAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDk7Nq1EyT2kMRFbYC%2Fd2GHykirOxICuAPlpk%2Fh5cddswIgX%2BXFaivhHyjuDWJ10NbGT1%2BDDQ8t7Vq3OSwIYvamxmUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIsWJbNTfe9q8OauzyrcA1Y2YY2uAQLfCwVe8vmBiemhjjgfyalYL%2Bxsz8GpqKY4%2FUwKoXfuCPLTiudqLrINWa4WnPj9UPGNjNXZd2jSeDhYrI75QZlxOJZq62mvbNFpKiXyj4WTh11%2BMXHo0dtKmLfxeNAzncbhClAr1dXD4VudeZqFs2SC5vsY4HLfUCvYjJWXgBVdZ%2Bloaz53foKSwGGlcOPVoK4MGYjxn7hE4HvdGki%2FW4szfF%2BI8CHfUAWJ3YuQ2KCqsERdPIvVPKF0PgZRAkBZjvLwPsMw0ZVQIopt14tHiZpuh%2FIHwgHWywWW1LWrVn8KtmZwXJvw3XsrgKg%2Bdi09V2WU39Bmsdc4o9T6zUjW0LgDXoxfv%2F0ibj1MHMkoh8yCAMQLdHAzIjfvTnGnraRq7QnF86wK6YSBvEjzIUBEoyWX6V2n7tGdW7yXfKrIM%2FoS2F9dpdntpHQkk9EzWIvm0wTB%2Fznt1b%2BJXeODgEkqmWu3KUeSmDUVJWHRSneBMjQCMuDWK%2Bp%2F%2BsGTxOmwsOsE6XbYTC1%2FjMjJjiRcx6xlNSDDfCCdlTSmfLFoKy9fh3FtLfEzoTTZhXiibExvzb68%2F%2BTBi7AeiNQc7Iq8NOeccd809Pv3ppe7ridWO3Iv4R0%2FJqb%2FjjhBMInTqcMGOqUBOjUJGxP3BKpvv8GjO3i2D5XKXM44LIcXkF6HcmR7WBd%2BiElvY0bH0XhiWnIS%2FQ6zNcbSnNEvSvlv2wbRh%2FeD7hPKSODVv8OoPIHkbOhVNVpRt0b1PU368dm42LwXf78dkk%2FSjrKD4w9MCy30LxlVoH3OqbF41Hk64MaTjQzBHsTb6eQFRpfbiP6d%2FFgQRs9A77Q6FxzHxmRd3rUHDIyYB0Mbbnhh&X-Amz-Signature=f1b80f42b839593c9b1829de1da727b64a837e8a91364fb9f79ef056bbb6ccb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
