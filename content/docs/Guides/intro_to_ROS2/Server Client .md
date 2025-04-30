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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JD6VJW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDQzaVEkX9Ffpo%2Fsxl7SUExFtpw6SjxnQYSGhXjnhV1DgIgGZfzF9iVBQhB2NXrKmfQVXpNdsEICAstQKwmPwEl%2FdcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBqFmABz8GIZPCmGircAx%2F6%2BrwI9js3sg%2BU1Biv8okVXN9qnvo8LmSbwI13fyUzb%2BHecd4DUIRVOFdkuPjhmrNhNVWVv5Lvk9KBWzEMB9BzZ%2BKq0oioxX%2Ff43vTPJrj4Ia%2FeTMRbcG2uOK4NlFlpxmLsUBteB9PJ0yU5l6GBwhtKdqUOMByBi4%2BK5S37bRWMbdsJmsQREO%2BjCgB91vMehcKrzXU%2F25WBKx6rUuo%2BrcV34zWISuvt56qswWo4eHfh1FAgoh8%2Fh3DAV3vQbw0OmJ%2BgLflehUEg0ODpM4zEQiTqnlOC1CC4psIqhSYAL5v940NiwYpNXL755LN%2BkDpk3PDT4RHfyfKRyiPzub9App8cL4VlFxG1XSWE4x05rUU%2F1jjJ%2Bv2voNqgGmebA5x%2B4AbwoIGoSKGJL%2FURS2ZIxGvvYKRl8LU%2FA4fqNs%2BjZSTxmRuOYembIRLOxy%2FcGTO2ClexNANRpvvVcR4m%2FQ7nW%2FAbNIN4fvQQ7CiKmj23c%2Fq0nAmCM9ZveUeI%2BB%2FIbtuFt2RxgG9debOW0we2OZHMviJaJZUSYW2DFKz%2FlB7rK03ArdyACBpCPZ1emR9%2FiJce3OmMI4qj%2FbNdIZbjG30sNl0kzk5Wj%2F3LhBd3farGVHk6wsy2ORYO4pm5ozHMLLUycAGOqUBT1fc9dEp%2FzAOWltax%2FkNLlMs6aF85NZMhL6XyI7Nf5tzvKZCKQEP8qM1yRcF1vuiqlnrgws4%2FAZ27dQtdjPDSDfGxccZZC6Ps49SG3wGdA6b5W8U3sWT7WU8t4veW4sma2MkmoH9l0iKAVJCudkGA%2FCNcXbMTPJHSWr82t7xY4Yva7Gwbwk%2BfOTdfOKxxYqIR8Olth00IElIwiiLPKnpsZPhGQtn&X-Amz-Signature=738ce959fe54efa74d6c897f9e539d53a297c06900dfaf00e48c12ecf4dc0b17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JD6VJW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDQzaVEkX9Ffpo%2Fsxl7SUExFtpw6SjxnQYSGhXjnhV1DgIgGZfzF9iVBQhB2NXrKmfQVXpNdsEICAstQKwmPwEl%2FdcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBqFmABz8GIZPCmGircAx%2F6%2BrwI9js3sg%2BU1Biv8okVXN9qnvo8LmSbwI13fyUzb%2BHecd4DUIRVOFdkuPjhmrNhNVWVv5Lvk9KBWzEMB9BzZ%2BKq0oioxX%2Ff43vTPJrj4Ia%2FeTMRbcG2uOK4NlFlpxmLsUBteB9PJ0yU5l6GBwhtKdqUOMByBi4%2BK5S37bRWMbdsJmsQREO%2BjCgB91vMehcKrzXU%2F25WBKx6rUuo%2BrcV34zWISuvt56qswWo4eHfh1FAgoh8%2Fh3DAV3vQbw0OmJ%2BgLflehUEg0ODpM4zEQiTqnlOC1CC4psIqhSYAL5v940NiwYpNXL755LN%2BkDpk3PDT4RHfyfKRyiPzub9App8cL4VlFxG1XSWE4x05rUU%2F1jjJ%2Bv2voNqgGmebA5x%2B4AbwoIGoSKGJL%2FURS2ZIxGvvYKRl8LU%2FA4fqNs%2BjZSTxmRuOYembIRLOxy%2FcGTO2ClexNANRpvvVcR4m%2FQ7nW%2FAbNIN4fvQQ7CiKmj23c%2Fq0nAmCM9ZveUeI%2BB%2FIbtuFt2RxgG9debOW0we2OZHMviJaJZUSYW2DFKz%2FlB7rK03ArdyACBpCPZ1emR9%2FiJce3OmMI4qj%2FbNdIZbjG30sNl0kzk5Wj%2F3LhBd3farGVHk6wsy2ORYO4pm5ozHMLLUycAGOqUBT1fc9dEp%2FzAOWltax%2FkNLlMs6aF85NZMhL6XyI7Nf5tzvKZCKQEP8qM1yRcF1vuiqlnrgws4%2FAZ27dQtdjPDSDfGxccZZC6Ps49SG3wGdA6b5W8U3sWT7WU8t4veW4sma2MkmoH9l0iKAVJCudkGA%2FCNcXbMTPJHSWr82t7xY4Yva7Gwbwk%2BfOTdfOKxxYqIR8Olth00IElIwiiLPKnpsZPhGQtn&X-Amz-Signature=412371ba17c9e8bda8f28385a160e693052f70d35d2e6b99b1a16f06a9fbcd64&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JD6VJW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDQzaVEkX9Ffpo%2Fsxl7SUExFtpw6SjxnQYSGhXjnhV1DgIgGZfzF9iVBQhB2NXrKmfQVXpNdsEICAstQKwmPwEl%2FdcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBqFmABz8GIZPCmGircAx%2F6%2BrwI9js3sg%2BU1Biv8okVXN9qnvo8LmSbwI13fyUzb%2BHecd4DUIRVOFdkuPjhmrNhNVWVv5Lvk9KBWzEMB9BzZ%2BKq0oioxX%2Ff43vTPJrj4Ia%2FeTMRbcG2uOK4NlFlpxmLsUBteB9PJ0yU5l6GBwhtKdqUOMByBi4%2BK5S37bRWMbdsJmsQREO%2BjCgB91vMehcKrzXU%2F25WBKx6rUuo%2BrcV34zWISuvt56qswWo4eHfh1FAgoh8%2Fh3DAV3vQbw0OmJ%2BgLflehUEg0ODpM4zEQiTqnlOC1CC4psIqhSYAL5v940NiwYpNXL755LN%2BkDpk3PDT4RHfyfKRyiPzub9App8cL4VlFxG1XSWE4x05rUU%2F1jjJ%2Bv2voNqgGmebA5x%2B4AbwoIGoSKGJL%2FURS2ZIxGvvYKRl8LU%2FA4fqNs%2BjZSTxmRuOYembIRLOxy%2FcGTO2ClexNANRpvvVcR4m%2FQ7nW%2FAbNIN4fvQQ7CiKmj23c%2Fq0nAmCM9ZveUeI%2BB%2FIbtuFt2RxgG9debOW0we2OZHMviJaJZUSYW2DFKz%2FlB7rK03ArdyACBpCPZ1emR9%2FiJce3OmMI4qj%2FbNdIZbjG30sNl0kzk5Wj%2F3LhBd3farGVHk6wsy2ORYO4pm5ozHMLLUycAGOqUBT1fc9dEp%2FzAOWltax%2FkNLlMs6aF85NZMhL6XyI7Nf5tzvKZCKQEP8qM1yRcF1vuiqlnrgws4%2FAZ27dQtdjPDSDfGxccZZC6Ps49SG3wGdA6b5W8U3sWT7WU8t4veW4sma2MkmoH9l0iKAVJCudkGA%2FCNcXbMTPJHSWr82t7xY4Yva7Gwbwk%2BfOTdfOKxxYqIR8Olth00IElIwiiLPKnpsZPhGQtn&X-Amz-Signature=bff903cb29b5330ea6e61e055c8cf4588355aeef896426a3d5a65d7733003582&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JD6VJW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDQzaVEkX9Ffpo%2Fsxl7SUExFtpw6SjxnQYSGhXjnhV1DgIgGZfzF9iVBQhB2NXrKmfQVXpNdsEICAstQKwmPwEl%2FdcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBqFmABz8GIZPCmGircAx%2F6%2BrwI9js3sg%2BU1Biv8okVXN9qnvo8LmSbwI13fyUzb%2BHecd4DUIRVOFdkuPjhmrNhNVWVv5Lvk9KBWzEMB9BzZ%2BKq0oioxX%2Ff43vTPJrj4Ia%2FeTMRbcG2uOK4NlFlpxmLsUBteB9PJ0yU5l6GBwhtKdqUOMByBi4%2BK5S37bRWMbdsJmsQREO%2BjCgB91vMehcKrzXU%2F25WBKx6rUuo%2BrcV34zWISuvt56qswWo4eHfh1FAgoh8%2Fh3DAV3vQbw0OmJ%2BgLflehUEg0ODpM4zEQiTqnlOC1CC4psIqhSYAL5v940NiwYpNXL755LN%2BkDpk3PDT4RHfyfKRyiPzub9App8cL4VlFxG1XSWE4x05rUU%2F1jjJ%2Bv2voNqgGmebA5x%2B4AbwoIGoSKGJL%2FURS2ZIxGvvYKRl8LU%2FA4fqNs%2BjZSTxmRuOYembIRLOxy%2FcGTO2ClexNANRpvvVcR4m%2FQ7nW%2FAbNIN4fvQQ7CiKmj23c%2Fq0nAmCM9ZveUeI%2BB%2FIbtuFt2RxgG9debOW0we2OZHMviJaJZUSYW2DFKz%2FlB7rK03ArdyACBpCPZ1emR9%2FiJce3OmMI4qj%2FbNdIZbjG30sNl0kzk5Wj%2F3LhBd3farGVHk6wsy2ORYO4pm5ozHMLLUycAGOqUBT1fc9dEp%2FzAOWltax%2FkNLlMs6aF85NZMhL6XyI7Nf5tzvKZCKQEP8qM1yRcF1vuiqlnrgws4%2FAZ27dQtdjPDSDfGxccZZC6Ps49SG3wGdA6b5W8U3sWT7WU8t4veW4sma2MkmoH9l0iKAVJCudkGA%2FCNcXbMTPJHSWr82t7xY4Yva7Gwbwk%2BfOTdfOKxxYqIR8Olth00IElIwiiLPKnpsZPhGQtn&X-Amz-Signature=77f14668426733ce2d53a9adbf00301a86c526c29f4e16ad638c2c2c8ba986db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JD6VJW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDQzaVEkX9Ffpo%2Fsxl7SUExFtpw6SjxnQYSGhXjnhV1DgIgGZfzF9iVBQhB2NXrKmfQVXpNdsEICAstQKwmPwEl%2FdcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBqFmABz8GIZPCmGircAx%2F6%2BrwI9js3sg%2BU1Biv8okVXN9qnvo8LmSbwI13fyUzb%2BHecd4DUIRVOFdkuPjhmrNhNVWVv5Lvk9KBWzEMB9BzZ%2BKq0oioxX%2Ff43vTPJrj4Ia%2FeTMRbcG2uOK4NlFlpxmLsUBteB9PJ0yU5l6GBwhtKdqUOMByBi4%2BK5S37bRWMbdsJmsQREO%2BjCgB91vMehcKrzXU%2F25WBKx6rUuo%2BrcV34zWISuvt56qswWo4eHfh1FAgoh8%2Fh3DAV3vQbw0OmJ%2BgLflehUEg0ODpM4zEQiTqnlOC1CC4psIqhSYAL5v940NiwYpNXL755LN%2BkDpk3PDT4RHfyfKRyiPzub9App8cL4VlFxG1XSWE4x05rUU%2F1jjJ%2Bv2voNqgGmebA5x%2B4AbwoIGoSKGJL%2FURS2ZIxGvvYKRl8LU%2FA4fqNs%2BjZSTxmRuOYembIRLOxy%2FcGTO2ClexNANRpvvVcR4m%2FQ7nW%2FAbNIN4fvQQ7CiKmj23c%2Fq0nAmCM9ZveUeI%2BB%2FIbtuFt2RxgG9debOW0we2OZHMviJaJZUSYW2DFKz%2FlB7rK03ArdyACBpCPZ1emR9%2FiJce3OmMI4qj%2FbNdIZbjG30sNl0kzk5Wj%2F3LhBd3farGVHk6wsy2ORYO4pm5ozHMLLUycAGOqUBT1fc9dEp%2FzAOWltax%2FkNLlMs6aF85NZMhL6XyI7Nf5tzvKZCKQEP8qM1yRcF1vuiqlnrgws4%2FAZ27dQtdjPDSDfGxccZZC6Ps49SG3wGdA6b5W8U3sWT7WU8t4veW4sma2MkmoH9l0iKAVJCudkGA%2FCNcXbMTPJHSWr82t7xY4Yva7Gwbwk%2BfOTdfOKxxYqIR8Olth00IElIwiiLPKnpsZPhGQtn&X-Amz-Signature=93adf552c99461106a20fdb21f0961e5ef172180c990d4de3a2d8a7b4cdc7533&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
