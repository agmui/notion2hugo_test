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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWZGNUP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFx%2FDHC3UaCrq6TR1m%2F1kSTvx50K4mrOY6xzrhXekwDKAiAhefkLNodFLzOTidlerNiX5V6LWHxywflczeuV4Kc%2FSSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ44uqIhKPCZ0Hx3yKtwDi84wJdH3y8mmZ0mpICPGu75SsDATOClhpuWBtdYL2ZOvClzZAwJJ8fBaOZIRgp%2BEhusQcIH8RyEsCi0YGa5Hcx7gquNCb68e%2B%2BbwnBt7AY7MJ8PoDw%2F7OJbmMs2f7Wr9vhVHezqDyAW4DdwR6Tftv8dAdE6fJ8Mccml4%2FOwE9JLOy%2FlZoCY7rS528%2BB8iuuh6EiV4SUPT%2FFKnLdLd8VcTFS9i9EtRBLQtr6Z%2F%2BAzXTPrxm2rbklgr5S7rpgSoQ7%2Fzr%2Flt2F%2B04bL4zhe59lMPofU4zQmRn016Z6PajqkUQ13nlsOBn7kC3r43876f6mGa31pQ3kTzpcqYCHUxVhFiw5BXz6j9ieUQiwvydghHR4EduAdyxzpd046ODfg2GhS2KkPEttOuohQtZZXcxjbz4G2AYNfRpuhiKxd5dyUndivlD6YuBzILUc%2BjSrsjqHW0IjPlWXzwApUOMMcC2aZIbLIV%2F76dv12w1Ju92my82SbmmpuzKpAWdo4WGI3iE9QNaLWzMn54UdvekH7iYtz8NsD%2FpLAG%2Bi8cbcbPY4w1PBJOkrg%2BMPBxUyEWg6V1B1kl6auRdmD%2BMfPbKRUjFj6VxkABi0UjrDOhrCGAjK67Z8Ag9nutJp9b9OHoS4w16m9wwY6pgEKk4eE1HpR9YJZm5FC9xN4%2BaafTtSB0leGaBALu9FTUy6A83lQ6qHwB0KIoB9K8HMbRcndjLOGp%2Fh%2BQT2H%2Fgr2z5vkjXtW8jzKv8zXuR1Y%2BTI5Y0ClQeYpc6wOALTbO%2FGeDAj6JQ7qLuIlOlPfOsf974eNXdhrNa%2BwZVbwibqDbBm45JPa5OraQ%2BH5Zi0qnR3Cx7XnbrY17yiX5Mc2dYUcVJZ2NQYl&X-Amz-Signature=e8aeef98a8f5b5851594c5c76626bc4aeaec4842fb1fe6faa4bc7c89361f054b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWZGNUP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFx%2FDHC3UaCrq6TR1m%2F1kSTvx50K4mrOY6xzrhXekwDKAiAhefkLNodFLzOTidlerNiX5V6LWHxywflczeuV4Kc%2FSSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ44uqIhKPCZ0Hx3yKtwDi84wJdH3y8mmZ0mpICPGu75SsDATOClhpuWBtdYL2ZOvClzZAwJJ8fBaOZIRgp%2BEhusQcIH8RyEsCi0YGa5Hcx7gquNCb68e%2B%2BbwnBt7AY7MJ8PoDw%2F7OJbmMs2f7Wr9vhVHezqDyAW4DdwR6Tftv8dAdE6fJ8Mccml4%2FOwE9JLOy%2FlZoCY7rS528%2BB8iuuh6EiV4SUPT%2FFKnLdLd8VcTFS9i9EtRBLQtr6Z%2F%2BAzXTPrxm2rbklgr5S7rpgSoQ7%2Fzr%2Flt2F%2B04bL4zhe59lMPofU4zQmRn016Z6PajqkUQ13nlsOBn7kC3r43876f6mGa31pQ3kTzpcqYCHUxVhFiw5BXz6j9ieUQiwvydghHR4EduAdyxzpd046ODfg2GhS2KkPEttOuohQtZZXcxjbz4G2AYNfRpuhiKxd5dyUndivlD6YuBzILUc%2BjSrsjqHW0IjPlWXzwApUOMMcC2aZIbLIV%2F76dv12w1Ju92my82SbmmpuzKpAWdo4WGI3iE9QNaLWzMn54UdvekH7iYtz8NsD%2FpLAG%2Bi8cbcbPY4w1PBJOkrg%2BMPBxUyEWg6V1B1kl6auRdmD%2BMfPbKRUjFj6VxkABi0UjrDOhrCGAjK67Z8Ag9nutJp9b9OHoS4w16m9wwY6pgEKk4eE1HpR9YJZm5FC9xN4%2BaafTtSB0leGaBALu9FTUy6A83lQ6qHwB0KIoB9K8HMbRcndjLOGp%2Fh%2BQT2H%2Fgr2z5vkjXtW8jzKv8zXuR1Y%2BTI5Y0ClQeYpc6wOALTbO%2FGeDAj6JQ7qLuIlOlPfOsf974eNXdhrNa%2BwZVbwibqDbBm45JPa5OraQ%2BH5Zi0qnR3Cx7XnbrY17yiX5Mc2dYUcVJZ2NQYl&X-Amz-Signature=1bcd2e475910924dc865f24937944eea74fa248e5ecec3c23ab79baa9bba00e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWZGNUP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFx%2FDHC3UaCrq6TR1m%2F1kSTvx50K4mrOY6xzrhXekwDKAiAhefkLNodFLzOTidlerNiX5V6LWHxywflczeuV4Kc%2FSSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ44uqIhKPCZ0Hx3yKtwDi84wJdH3y8mmZ0mpICPGu75SsDATOClhpuWBtdYL2ZOvClzZAwJJ8fBaOZIRgp%2BEhusQcIH8RyEsCi0YGa5Hcx7gquNCb68e%2B%2BbwnBt7AY7MJ8PoDw%2F7OJbmMs2f7Wr9vhVHezqDyAW4DdwR6Tftv8dAdE6fJ8Mccml4%2FOwE9JLOy%2FlZoCY7rS528%2BB8iuuh6EiV4SUPT%2FFKnLdLd8VcTFS9i9EtRBLQtr6Z%2F%2BAzXTPrxm2rbklgr5S7rpgSoQ7%2Fzr%2Flt2F%2B04bL4zhe59lMPofU4zQmRn016Z6PajqkUQ13nlsOBn7kC3r43876f6mGa31pQ3kTzpcqYCHUxVhFiw5BXz6j9ieUQiwvydghHR4EduAdyxzpd046ODfg2GhS2KkPEttOuohQtZZXcxjbz4G2AYNfRpuhiKxd5dyUndivlD6YuBzILUc%2BjSrsjqHW0IjPlWXzwApUOMMcC2aZIbLIV%2F76dv12w1Ju92my82SbmmpuzKpAWdo4WGI3iE9QNaLWzMn54UdvekH7iYtz8NsD%2FpLAG%2Bi8cbcbPY4w1PBJOkrg%2BMPBxUyEWg6V1B1kl6auRdmD%2BMfPbKRUjFj6VxkABi0UjrDOhrCGAjK67Z8Ag9nutJp9b9OHoS4w16m9wwY6pgEKk4eE1HpR9YJZm5FC9xN4%2BaafTtSB0leGaBALu9FTUy6A83lQ6qHwB0KIoB9K8HMbRcndjLOGp%2Fh%2BQT2H%2Fgr2z5vkjXtW8jzKv8zXuR1Y%2BTI5Y0ClQeYpc6wOALTbO%2FGeDAj6JQ7qLuIlOlPfOsf974eNXdhrNa%2BwZVbwibqDbBm45JPa5OraQ%2BH5Zi0qnR3Cx7XnbrY17yiX5Mc2dYUcVJZ2NQYl&X-Amz-Signature=c13f860d14e0663ceeee44ed836a2c04b0855a01a61d9d1b002bb5c48364b35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWZGNUP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFx%2FDHC3UaCrq6TR1m%2F1kSTvx50K4mrOY6xzrhXekwDKAiAhefkLNodFLzOTidlerNiX5V6LWHxywflczeuV4Kc%2FSSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ44uqIhKPCZ0Hx3yKtwDi84wJdH3y8mmZ0mpICPGu75SsDATOClhpuWBtdYL2ZOvClzZAwJJ8fBaOZIRgp%2BEhusQcIH8RyEsCi0YGa5Hcx7gquNCb68e%2B%2BbwnBt7AY7MJ8PoDw%2F7OJbmMs2f7Wr9vhVHezqDyAW4DdwR6Tftv8dAdE6fJ8Mccml4%2FOwE9JLOy%2FlZoCY7rS528%2BB8iuuh6EiV4SUPT%2FFKnLdLd8VcTFS9i9EtRBLQtr6Z%2F%2BAzXTPrxm2rbklgr5S7rpgSoQ7%2Fzr%2Flt2F%2B04bL4zhe59lMPofU4zQmRn016Z6PajqkUQ13nlsOBn7kC3r43876f6mGa31pQ3kTzpcqYCHUxVhFiw5BXz6j9ieUQiwvydghHR4EduAdyxzpd046ODfg2GhS2KkPEttOuohQtZZXcxjbz4G2AYNfRpuhiKxd5dyUndivlD6YuBzILUc%2BjSrsjqHW0IjPlWXzwApUOMMcC2aZIbLIV%2F76dv12w1Ju92my82SbmmpuzKpAWdo4WGI3iE9QNaLWzMn54UdvekH7iYtz8NsD%2FpLAG%2Bi8cbcbPY4w1PBJOkrg%2BMPBxUyEWg6V1B1kl6auRdmD%2BMfPbKRUjFj6VxkABi0UjrDOhrCGAjK67Z8Ag9nutJp9b9OHoS4w16m9wwY6pgEKk4eE1HpR9YJZm5FC9xN4%2BaafTtSB0leGaBALu9FTUy6A83lQ6qHwB0KIoB9K8HMbRcndjLOGp%2Fh%2BQT2H%2Fgr2z5vkjXtW8jzKv8zXuR1Y%2BTI5Y0ClQeYpc6wOALTbO%2FGeDAj6JQ7qLuIlOlPfOsf974eNXdhrNa%2BwZVbwibqDbBm45JPa5OraQ%2BH5Zi0qnR3Cx7XnbrY17yiX5Mc2dYUcVJZ2NQYl&X-Amz-Signature=330c3b25f45eb6e2d350698e26e9c1e8de51742ec8f9117d54c4323ca444e3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWZGNUP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFx%2FDHC3UaCrq6TR1m%2F1kSTvx50K4mrOY6xzrhXekwDKAiAhefkLNodFLzOTidlerNiX5V6LWHxywflczeuV4Kc%2FSSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ44uqIhKPCZ0Hx3yKtwDi84wJdH3y8mmZ0mpICPGu75SsDATOClhpuWBtdYL2ZOvClzZAwJJ8fBaOZIRgp%2BEhusQcIH8RyEsCi0YGa5Hcx7gquNCb68e%2B%2BbwnBt7AY7MJ8PoDw%2F7OJbmMs2f7Wr9vhVHezqDyAW4DdwR6Tftv8dAdE6fJ8Mccml4%2FOwE9JLOy%2FlZoCY7rS528%2BB8iuuh6EiV4SUPT%2FFKnLdLd8VcTFS9i9EtRBLQtr6Z%2F%2BAzXTPrxm2rbklgr5S7rpgSoQ7%2Fzr%2Flt2F%2B04bL4zhe59lMPofU4zQmRn016Z6PajqkUQ13nlsOBn7kC3r43876f6mGa31pQ3kTzpcqYCHUxVhFiw5BXz6j9ieUQiwvydghHR4EduAdyxzpd046ODfg2GhS2KkPEttOuohQtZZXcxjbz4G2AYNfRpuhiKxd5dyUndivlD6YuBzILUc%2BjSrsjqHW0IjPlWXzwApUOMMcC2aZIbLIV%2F76dv12w1Ju92my82SbmmpuzKpAWdo4WGI3iE9QNaLWzMn54UdvekH7iYtz8NsD%2FpLAG%2Bi8cbcbPY4w1PBJOkrg%2BMPBxUyEWg6V1B1kl6auRdmD%2BMfPbKRUjFj6VxkABi0UjrDOhrCGAjK67Z8Ag9nutJp9b9OHoS4w16m9wwY6pgEKk4eE1HpR9YJZm5FC9xN4%2BaafTtSB0leGaBALu9FTUy6A83lQ6qHwB0KIoB9K8HMbRcndjLOGp%2Fh%2BQT2H%2Fgr2z5vkjXtW8jzKv8zXuR1Y%2BTI5Y0ClQeYpc6wOALTbO%2FGeDAj6JQ7qLuIlOlPfOsf974eNXdhrNa%2BwZVbwibqDbBm45JPa5OraQ%2BH5Zi0qnR3Cx7XnbrY17yiX5Mc2dYUcVJZ2NQYl&X-Amz-Signature=9254e0efdd7075fe3876e08beaae670174e175ae2f03e890d88c471abedfa904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
