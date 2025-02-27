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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I3DRKR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDxgJpFXXp2ewuEvNDQdlGZ1JUDKlFe3JcLQv968qKMIQIgId%2Fp9qjMVpuSauP0QTIO5Gw4zJ3Kx%2Fu%2Bclxe1l%2FAi6sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMVl6BSMYBuhj2zdtircA8KC9bi9DyuWuc2rDzzdPwVlIvGjshI16SYBExVWedkciqKnDKoDXJOSTeK5CF4GfvK0k61UD3fcOYCsnZqJSDLxAd8mki8q3CJArV9YfmaglU%2Bgr3Kz%2F%2Ftr7LiYAnQqkKWtfflbsS6lYbEJoU7fwh2UggQ2NfDP5C3aGSbi4HnrU3WNJ%2BnY8UGuyqs4pb2HYbD4aoOwSjEv8hBbjsOMn2VnzvR6ozxiKLd0HIEu2OPUy8ML1IG8CXkwCAOMuS0%2FHIrVlYuqRfGl40adRdX%2FSftc0hVpjq21N6%2BayK5rLM27xEIN%2F726u63UmjnXcqYWQ%2B%2FtJJkL58w5fQtBTEb5N%2BwCciR0f%2B5ZZ5XWbzbpVcVKPidFIN7zLJR%2FqO%2FFEzy7qaNN9FiEH7RO3ZBoeGrPlvK8%2FjpC6KuwiU%2F8Yto%2FV5Ip8pn4RbrcUsdy2fhKG6A5sBwvDDc4wDI2UiwK%2Bj9jKZZm59Dsr%2FcEbHHSwbWp%2BEdGy7RUeyeQAVQfu2pN4LwrzAg7BXb1P0QIaRqx%2FuazH0SITqPY2cNZiOWpmPFiuDjnWK5xJei%2FnuW%2Fa5Gw670%2B6qv2amQnhgLyk0ts3XxS649JuZQjpcqxhK8JY6%2Bt0a4XBt5TYFCUYNfqElocMKTtgb4GOqUBS6Ub76XtNjb8xIfFYiDsCeGKOVfx1nftDSnjD4Tgr7uuXnH4LiO05gcw%2F7C5HIAOX%2BcYF8TGUs%2BFbyI7wi91duVqLnIwdVXTOP6Tu%2B%2B4mDRxPyzDVedgkHMVVQhsxfSqLkXgJ6VBrI8rm6Dcke7bUceQhT7rlMIcOrHbZmXhWl%2FZjVOxvL5fOLzPGpuO6xd2BIypdVoLY2vKykyjnyEXjCTCn8Ps&X-Amz-Signature=77cca269e29beb36c6b49f8b9492fcc34f80055336103615cd9be085a958cde8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I3DRKR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDxgJpFXXp2ewuEvNDQdlGZ1JUDKlFe3JcLQv968qKMIQIgId%2Fp9qjMVpuSauP0QTIO5Gw4zJ3Kx%2Fu%2Bclxe1l%2FAi6sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMVl6BSMYBuhj2zdtircA8KC9bi9DyuWuc2rDzzdPwVlIvGjshI16SYBExVWedkciqKnDKoDXJOSTeK5CF4GfvK0k61UD3fcOYCsnZqJSDLxAd8mki8q3CJArV9YfmaglU%2Bgr3Kz%2F%2Ftr7LiYAnQqkKWtfflbsS6lYbEJoU7fwh2UggQ2NfDP5C3aGSbi4HnrU3WNJ%2BnY8UGuyqs4pb2HYbD4aoOwSjEv8hBbjsOMn2VnzvR6ozxiKLd0HIEu2OPUy8ML1IG8CXkwCAOMuS0%2FHIrVlYuqRfGl40adRdX%2FSftc0hVpjq21N6%2BayK5rLM27xEIN%2F726u63UmjnXcqYWQ%2B%2FtJJkL58w5fQtBTEb5N%2BwCciR0f%2B5ZZ5XWbzbpVcVKPidFIN7zLJR%2FqO%2FFEzy7qaNN9FiEH7RO3ZBoeGrPlvK8%2FjpC6KuwiU%2F8Yto%2FV5Ip8pn4RbrcUsdy2fhKG6A5sBwvDDc4wDI2UiwK%2Bj9jKZZm59Dsr%2FcEbHHSwbWp%2BEdGy7RUeyeQAVQfu2pN4LwrzAg7BXb1P0QIaRqx%2FuazH0SITqPY2cNZiOWpmPFiuDjnWK5xJei%2FnuW%2Fa5Gw670%2B6qv2amQnhgLyk0ts3XxS649JuZQjpcqxhK8JY6%2Bt0a4XBt5TYFCUYNfqElocMKTtgb4GOqUBS6Ub76XtNjb8xIfFYiDsCeGKOVfx1nftDSnjD4Tgr7uuXnH4LiO05gcw%2F7C5HIAOX%2BcYF8TGUs%2BFbyI7wi91duVqLnIwdVXTOP6Tu%2B%2B4mDRxPyzDVedgkHMVVQhsxfSqLkXgJ6VBrI8rm6Dcke7bUceQhT7rlMIcOrHbZmXhWl%2FZjVOxvL5fOLzPGpuO6xd2BIypdVoLY2vKykyjnyEXjCTCn8Ps&X-Amz-Signature=b8e47127773e656fb365707fab1f5f622bfb5bf2c523c579e6c742f95c19b91b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I3DRKR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDxgJpFXXp2ewuEvNDQdlGZ1JUDKlFe3JcLQv968qKMIQIgId%2Fp9qjMVpuSauP0QTIO5Gw4zJ3Kx%2Fu%2Bclxe1l%2FAi6sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMVl6BSMYBuhj2zdtircA8KC9bi9DyuWuc2rDzzdPwVlIvGjshI16SYBExVWedkciqKnDKoDXJOSTeK5CF4GfvK0k61UD3fcOYCsnZqJSDLxAd8mki8q3CJArV9YfmaglU%2Bgr3Kz%2F%2Ftr7LiYAnQqkKWtfflbsS6lYbEJoU7fwh2UggQ2NfDP5C3aGSbi4HnrU3WNJ%2BnY8UGuyqs4pb2HYbD4aoOwSjEv8hBbjsOMn2VnzvR6ozxiKLd0HIEu2OPUy8ML1IG8CXkwCAOMuS0%2FHIrVlYuqRfGl40adRdX%2FSftc0hVpjq21N6%2BayK5rLM27xEIN%2F726u63UmjnXcqYWQ%2B%2FtJJkL58w5fQtBTEb5N%2BwCciR0f%2B5ZZ5XWbzbpVcVKPidFIN7zLJR%2FqO%2FFEzy7qaNN9FiEH7RO3ZBoeGrPlvK8%2FjpC6KuwiU%2F8Yto%2FV5Ip8pn4RbrcUsdy2fhKG6A5sBwvDDc4wDI2UiwK%2Bj9jKZZm59Dsr%2FcEbHHSwbWp%2BEdGy7RUeyeQAVQfu2pN4LwrzAg7BXb1P0QIaRqx%2FuazH0SITqPY2cNZiOWpmPFiuDjnWK5xJei%2FnuW%2Fa5Gw670%2B6qv2amQnhgLyk0ts3XxS649JuZQjpcqxhK8JY6%2Bt0a4XBt5TYFCUYNfqElocMKTtgb4GOqUBS6Ub76XtNjb8xIfFYiDsCeGKOVfx1nftDSnjD4Tgr7uuXnH4LiO05gcw%2F7C5HIAOX%2BcYF8TGUs%2BFbyI7wi91duVqLnIwdVXTOP6Tu%2B%2B4mDRxPyzDVedgkHMVVQhsxfSqLkXgJ6VBrI8rm6Dcke7bUceQhT7rlMIcOrHbZmXhWl%2FZjVOxvL5fOLzPGpuO6xd2BIypdVoLY2vKykyjnyEXjCTCn8Ps&X-Amz-Signature=00d52c84a87353467f0ff3e7d4a19ceeabdb7e33b12f24680bf0ac7e2b755f04&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I3DRKR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDxgJpFXXp2ewuEvNDQdlGZ1JUDKlFe3JcLQv968qKMIQIgId%2Fp9qjMVpuSauP0QTIO5Gw4zJ3Kx%2Fu%2Bclxe1l%2FAi6sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMVl6BSMYBuhj2zdtircA8KC9bi9DyuWuc2rDzzdPwVlIvGjshI16SYBExVWedkciqKnDKoDXJOSTeK5CF4GfvK0k61UD3fcOYCsnZqJSDLxAd8mki8q3CJArV9YfmaglU%2Bgr3Kz%2F%2Ftr7LiYAnQqkKWtfflbsS6lYbEJoU7fwh2UggQ2NfDP5C3aGSbi4HnrU3WNJ%2BnY8UGuyqs4pb2HYbD4aoOwSjEv8hBbjsOMn2VnzvR6ozxiKLd0HIEu2OPUy8ML1IG8CXkwCAOMuS0%2FHIrVlYuqRfGl40adRdX%2FSftc0hVpjq21N6%2BayK5rLM27xEIN%2F726u63UmjnXcqYWQ%2B%2FtJJkL58w5fQtBTEb5N%2BwCciR0f%2B5ZZ5XWbzbpVcVKPidFIN7zLJR%2FqO%2FFEzy7qaNN9FiEH7RO3ZBoeGrPlvK8%2FjpC6KuwiU%2F8Yto%2FV5Ip8pn4RbrcUsdy2fhKG6A5sBwvDDc4wDI2UiwK%2Bj9jKZZm59Dsr%2FcEbHHSwbWp%2BEdGy7RUeyeQAVQfu2pN4LwrzAg7BXb1P0QIaRqx%2FuazH0SITqPY2cNZiOWpmPFiuDjnWK5xJei%2FnuW%2Fa5Gw670%2B6qv2amQnhgLyk0ts3XxS649JuZQjpcqxhK8JY6%2Bt0a4XBt5TYFCUYNfqElocMKTtgb4GOqUBS6Ub76XtNjb8xIfFYiDsCeGKOVfx1nftDSnjD4Tgr7uuXnH4LiO05gcw%2F7C5HIAOX%2BcYF8TGUs%2BFbyI7wi91duVqLnIwdVXTOP6Tu%2B%2B4mDRxPyzDVedgkHMVVQhsxfSqLkXgJ6VBrI8rm6Dcke7bUceQhT7rlMIcOrHbZmXhWl%2FZjVOxvL5fOLzPGpuO6xd2BIypdVoLY2vKykyjnyEXjCTCn8Ps&X-Amz-Signature=750a828ecf0b1f7b1628f7e6d80a4037afd46dad68eee28930d2ebbc1be3b1d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I3DRKR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDxgJpFXXp2ewuEvNDQdlGZ1JUDKlFe3JcLQv968qKMIQIgId%2Fp9qjMVpuSauP0QTIO5Gw4zJ3Kx%2Fu%2Bclxe1l%2FAi6sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMVl6BSMYBuhj2zdtircA8KC9bi9DyuWuc2rDzzdPwVlIvGjshI16SYBExVWedkciqKnDKoDXJOSTeK5CF4GfvK0k61UD3fcOYCsnZqJSDLxAd8mki8q3CJArV9YfmaglU%2Bgr3Kz%2F%2Ftr7LiYAnQqkKWtfflbsS6lYbEJoU7fwh2UggQ2NfDP5C3aGSbi4HnrU3WNJ%2BnY8UGuyqs4pb2HYbD4aoOwSjEv8hBbjsOMn2VnzvR6ozxiKLd0HIEu2OPUy8ML1IG8CXkwCAOMuS0%2FHIrVlYuqRfGl40adRdX%2FSftc0hVpjq21N6%2BayK5rLM27xEIN%2F726u63UmjnXcqYWQ%2B%2FtJJkL58w5fQtBTEb5N%2BwCciR0f%2B5ZZ5XWbzbpVcVKPidFIN7zLJR%2FqO%2FFEzy7qaNN9FiEH7RO3ZBoeGrPlvK8%2FjpC6KuwiU%2F8Yto%2FV5Ip8pn4RbrcUsdy2fhKG6A5sBwvDDc4wDI2UiwK%2Bj9jKZZm59Dsr%2FcEbHHSwbWp%2BEdGy7RUeyeQAVQfu2pN4LwrzAg7BXb1P0QIaRqx%2FuazH0SITqPY2cNZiOWpmPFiuDjnWK5xJei%2FnuW%2Fa5Gw670%2B6qv2amQnhgLyk0ts3XxS649JuZQjpcqxhK8JY6%2Bt0a4XBt5TYFCUYNfqElocMKTtgb4GOqUBS6Ub76XtNjb8xIfFYiDsCeGKOVfx1nftDSnjD4Tgr7uuXnH4LiO05gcw%2F7C5HIAOX%2BcYF8TGUs%2BFbyI7wi91duVqLnIwdVXTOP6Tu%2B%2B4mDRxPyzDVedgkHMVVQhsxfSqLkXgJ6VBrI8rm6Dcke7bUceQhT7rlMIcOrHbZmXhWl%2FZjVOxvL5fOLzPGpuO6xd2BIypdVoLY2vKykyjnyEXjCTCn8Ps&X-Amz-Signature=d459b356be8d8ced7848870f602f074388f341be23344b622d48f74a806feb20&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
