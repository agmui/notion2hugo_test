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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6IM7MG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCK5xTnAqYTgj4oHgL26941RUpzPFxL4pL%2FKmtDOMzAQAIgGJQWpuTR5gYLG6jue6XqUjwEObAocMr8fpRIsyRedaQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGrbmt84wNLrlmRBeircAzIS8yS6KU%2F2n86gRUfhMX7qSD4IcUiAKNeK6XHDAZjIIelx9oryR9c1KNjxOhkWkHWkfBuYcpCF64mJNKqtBlFs0i4chXgEJD68qH3%2F6ntOt%2FOTBASaVbjqLjLSZfBKBwGVTWFBGeTg4ur8pXYHy2Rl17A%2F1HaTr0TKY2CS0jXXy1GlcDiu%2F560tgm80HHAw%2B4H0xnZR3EAMAaVHuy8DamJMy7CW6IufEnYSEXM1jyYpEf3ceByTRXCDkf3%2B9ZyGFWrZWHSHr7Uf9B9dfNiPXYxPDtk1%2Bngs%2FU21bTI6dKkSLNSRSXdWMI4u9aB%2BYcKOdgRwQ9IHEGz783%2B%2FC2D9Shsm5cBDmjGbEkIRH0G02ItngmmjvGyRP5hALOVH91Irg7U0QG0cJlKiVqtmBjZtxh5m4%2BPsMFeTGH4Hl6kX3sgMxfQ4fJW9DqomMh50usAYerPotzjjQ3JVrxNjATrSsLFKg9Cnsu99y3zd5SExD%2FMM2kWyxnz1%2FSzXMbda35FP3y4ENa%2BVBNEHL1uRmMX7f46x7FoiPm0kQbdYDnWGOnTjFpTIb%2BT4ub90i2R7SCPcp2Dd4h2Xur08yWRt1tQnV1pIQOFnPwXRYE3o%2FrdkbIReOk%2FQmp2%2FXsyy8CqMJDd3MMGOqUBtj2cuq14yWwBww7zvSUrsKp1WcxZAvWUp25MLOnhfGotKn%2BapJKHzc8srTRYIzJqvNw60FtRCZbH%2BwPeSMNgWb0WpWA2eZ9XNKWgfGSw4BltxTcqvuYNA1MP61FjpMtFVkyZyIXJUPJx1Lnzed%2F16jYod1I5Zv%2FzKLnYT37bFV5d61T%2FebhPm9%2FPh4oU%2BWMLjk9G4iMw%2Bhp7s2fwtOmemHsxuS3%2F&X-Amz-Signature=7eb7b7a0a4080583ac9d07d1727bf295a14516dd177cc145c9ecaca9e3015c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6IM7MG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCK5xTnAqYTgj4oHgL26941RUpzPFxL4pL%2FKmtDOMzAQAIgGJQWpuTR5gYLG6jue6XqUjwEObAocMr8fpRIsyRedaQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGrbmt84wNLrlmRBeircAzIS8yS6KU%2F2n86gRUfhMX7qSD4IcUiAKNeK6XHDAZjIIelx9oryR9c1KNjxOhkWkHWkfBuYcpCF64mJNKqtBlFs0i4chXgEJD68qH3%2F6ntOt%2FOTBASaVbjqLjLSZfBKBwGVTWFBGeTg4ur8pXYHy2Rl17A%2F1HaTr0TKY2CS0jXXy1GlcDiu%2F560tgm80HHAw%2B4H0xnZR3EAMAaVHuy8DamJMy7CW6IufEnYSEXM1jyYpEf3ceByTRXCDkf3%2B9ZyGFWrZWHSHr7Uf9B9dfNiPXYxPDtk1%2Bngs%2FU21bTI6dKkSLNSRSXdWMI4u9aB%2BYcKOdgRwQ9IHEGz783%2B%2FC2D9Shsm5cBDmjGbEkIRH0G02ItngmmjvGyRP5hALOVH91Irg7U0QG0cJlKiVqtmBjZtxh5m4%2BPsMFeTGH4Hl6kX3sgMxfQ4fJW9DqomMh50usAYerPotzjjQ3JVrxNjATrSsLFKg9Cnsu99y3zd5SExD%2FMM2kWyxnz1%2FSzXMbda35FP3y4ENa%2BVBNEHL1uRmMX7f46x7FoiPm0kQbdYDnWGOnTjFpTIb%2BT4ub90i2R7SCPcp2Dd4h2Xur08yWRt1tQnV1pIQOFnPwXRYE3o%2FrdkbIReOk%2FQmp2%2FXsyy8CqMJDd3MMGOqUBtj2cuq14yWwBww7zvSUrsKp1WcxZAvWUp25MLOnhfGotKn%2BapJKHzc8srTRYIzJqvNw60FtRCZbH%2BwPeSMNgWb0WpWA2eZ9XNKWgfGSw4BltxTcqvuYNA1MP61FjpMtFVkyZyIXJUPJx1Lnzed%2F16jYod1I5Zv%2FzKLnYT37bFV5d61T%2FebhPm9%2FPh4oU%2BWMLjk9G4iMw%2Bhp7s2fwtOmemHsxuS3%2F&X-Amz-Signature=bb195eb0b34284662bedbcf7e86e3f9664e14aa3e335b069b3585dfd10ee1c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6IM7MG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCK5xTnAqYTgj4oHgL26941RUpzPFxL4pL%2FKmtDOMzAQAIgGJQWpuTR5gYLG6jue6XqUjwEObAocMr8fpRIsyRedaQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGrbmt84wNLrlmRBeircAzIS8yS6KU%2F2n86gRUfhMX7qSD4IcUiAKNeK6XHDAZjIIelx9oryR9c1KNjxOhkWkHWkfBuYcpCF64mJNKqtBlFs0i4chXgEJD68qH3%2F6ntOt%2FOTBASaVbjqLjLSZfBKBwGVTWFBGeTg4ur8pXYHy2Rl17A%2F1HaTr0TKY2CS0jXXy1GlcDiu%2F560tgm80HHAw%2B4H0xnZR3EAMAaVHuy8DamJMy7CW6IufEnYSEXM1jyYpEf3ceByTRXCDkf3%2B9ZyGFWrZWHSHr7Uf9B9dfNiPXYxPDtk1%2Bngs%2FU21bTI6dKkSLNSRSXdWMI4u9aB%2BYcKOdgRwQ9IHEGz783%2B%2FC2D9Shsm5cBDmjGbEkIRH0G02ItngmmjvGyRP5hALOVH91Irg7U0QG0cJlKiVqtmBjZtxh5m4%2BPsMFeTGH4Hl6kX3sgMxfQ4fJW9DqomMh50usAYerPotzjjQ3JVrxNjATrSsLFKg9Cnsu99y3zd5SExD%2FMM2kWyxnz1%2FSzXMbda35FP3y4ENa%2BVBNEHL1uRmMX7f46x7FoiPm0kQbdYDnWGOnTjFpTIb%2BT4ub90i2R7SCPcp2Dd4h2Xur08yWRt1tQnV1pIQOFnPwXRYE3o%2FrdkbIReOk%2FQmp2%2FXsyy8CqMJDd3MMGOqUBtj2cuq14yWwBww7zvSUrsKp1WcxZAvWUp25MLOnhfGotKn%2BapJKHzc8srTRYIzJqvNw60FtRCZbH%2BwPeSMNgWb0WpWA2eZ9XNKWgfGSw4BltxTcqvuYNA1MP61FjpMtFVkyZyIXJUPJx1Lnzed%2F16jYod1I5Zv%2FzKLnYT37bFV5d61T%2FebhPm9%2FPh4oU%2BWMLjk9G4iMw%2Bhp7s2fwtOmemHsxuS3%2F&X-Amz-Signature=e17af7174b836760eae6d1dfe156dd9e65faaf797a6f310f60ad86d7b544a7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6IM7MG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCK5xTnAqYTgj4oHgL26941RUpzPFxL4pL%2FKmtDOMzAQAIgGJQWpuTR5gYLG6jue6XqUjwEObAocMr8fpRIsyRedaQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGrbmt84wNLrlmRBeircAzIS8yS6KU%2F2n86gRUfhMX7qSD4IcUiAKNeK6XHDAZjIIelx9oryR9c1KNjxOhkWkHWkfBuYcpCF64mJNKqtBlFs0i4chXgEJD68qH3%2F6ntOt%2FOTBASaVbjqLjLSZfBKBwGVTWFBGeTg4ur8pXYHy2Rl17A%2F1HaTr0TKY2CS0jXXy1GlcDiu%2F560tgm80HHAw%2B4H0xnZR3EAMAaVHuy8DamJMy7CW6IufEnYSEXM1jyYpEf3ceByTRXCDkf3%2B9ZyGFWrZWHSHr7Uf9B9dfNiPXYxPDtk1%2Bngs%2FU21bTI6dKkSLNSRSXdWMI4u9aB%2BYcKOdgRwQ9IHEGz783%2B%2FC2D9Shsm5cBDmjGbEkIRH0G02ItngmmjvGyRP5hALOVH91Irg7U0QG0cJlKiVqtmBjZtxh5m4%2BPsMFeTGH4Hl6kX3sgMxfQ4fJW9DqomMh50usAYerPotzjjQ3JVrxNjATrSsLFKg9Cnsu99y3zd5SExD%2FMM2kWyxnz1%2FSzXMbda35FP3y4ENa%2BVBNEHL1uRmMX7f46x7FoiPm0kQbdYDnWGOnTjFpTIb%2BT4ub90i2R7SCPcp2Dd4h2Xur08yWRt1tQnV1pIQOFnPwXRYE3o%2FrdkbIReOk%2FQmp2%2FXsyy8CqMJDd3MMGOqUBtj2cuq14yWwBww7zvSUrsKp1WcxZAvWUp25MLOnhfGotKn%2BapJKHzc8srTRYIzJqvNw60FtRCZbH%2BwPeSMNgWb0WpWA2eZ9XNKWgfGSw4BltxTcqvuYNA1MP61FjpMtFVkyZyIXJUPJx1Lnzed%2F16jYod1I5Zv%2FzKLnYT37bFV5d61T%2FebhPm9%2FPh4oU%2BWMLjk9G4iMw%2Bhp7s2fwtOmemHsxuS3%2F&X-Amz-Signature=a635c57ccfb8423b094cdaaa6b85d528af36a6f92f6623321495c7e1b7f93c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6IM7MG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCK5xTnAqYTgj4oHgL26941RUpzPFxL4pL%2FKmtDOMzAQAIgGJQWpuTR5gYLG6jue6XqUjwEObAocMr8fpRIsyRedaQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGrbmt84wNLrlmRBeircAzIS8yS6KU%2F2n86gRUfhMX7qSD4IcUiAKNeK6XHDAZjIIelx9oryR9c1KNjxOhkWkHWkfBuYcpCF64mJNKqtBlFs0i4chXgEJD68qH3%2F6ntOt%2FOTBASaVbjqLjLSZfBKBwGVTWFBGeTg4ur8pXYHy2Rl17A%2F1HaTr0TKY2CS0jXXy1GlcDiu%2F560tgm80HHAw%2B4H0xnZR3EAMAaVHuy8DamJMy7CW6IufEnYSEXM1jyYpEf3ceByTRXCDkf3%2B9ZyGFWrZWHSHr7Uf9B9dfNiPXYxPDtk1%2Bngs%2FU21bTI6dKkSLNSRSXdWMI4u9aB%2BYcKOdgRwQ9IHEGz783%2B%2FC2D9Shsm5cBDmjGbEkIRH0G02ItngmmjvGyRP5hALOVH91Irg7U0QG0cJlKiVqtmBjZtxh5m4%2BPsMFeTGH4Hl6kX3sgMxfQ4fJW9DqomMh50usAYerPotzjjQ3JVrxNjATrSsLFKg9Cnsu99y3zd5SExD%2FMM2kWyxnz1%2FSzXMbda35FP3y4ENa%2BVBNEHL1uRmMX7f46x7FoiPm0kQbdYDnWGOnTjFpTIb%2BT4ub90i2R7SCPcp2Dd4h2Xur08yWRt1tQnV1pIQOFnPwXRYE3o%2FrdkbIReOk%2FQmp2%2FXsyy8CqMJDd3MMGOqUBtj2cuq14yWwBww7zvSUrsKp1WcxZAvWUp25MLOnhfGotKn%2BapJKHzc8srTRYIzJqvNw60FtRCZbH%2BwPeSMNgWb0WpWA2eZ9XNKWgfGSw4BltxTcqvuYNA1MP61FjpMtFVkyZyIXJUPJx1Lnzed%2F16jYod1I5Zv%2FzKLnYT37bFV5d61T%2FebhPm9%2FPh4oU%2BWMLjk9G4iMw%2Bhp7s2fwtOmemHsxuS3%2F&X-Amz-Signature=fcbc957a1bff024bf510a9a75b317eeb5f1e834eab2f7b83f73a6888b2f9e794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
