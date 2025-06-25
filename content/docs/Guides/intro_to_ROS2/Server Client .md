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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR2I7JR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDG09EZw6AOgyTqkGcXpTBITQdjxzLvcGcaWAH10ZttLgIhANQU3XzFqKs%2BpnDHOa4XEjOhOWcdvGmmc38DpwyLvi0PKv8DCEwQABoMNjM3NDIzMTgzODA1IgxMXbJ91h9tQ8WBaGAq3APVqrpOY%2BgJUVCfLi096mS81lc5NG%2BKLRvTDTLPqm9d7WchwNsxFy1tYwW6o8bohZO5AcTBs1uNE%2BYMx%2F1C3f0pnrdMepW4ZdSLqALhYiMx24Jz%2BLPiOw8JPQXUWtIzUTTm7dHUoi3x9UUf8CV23rMW0%2FTQtWBysv3uUwkCToluDJsZN5%2B0YRQ0GKSdse4C29l70uwOClPb7PDbzNROQ3jQg9dwOsw11B3D71qkwAKQ6enA%2FUE6lRCaf9IIA52oxuRcGsPw7nMuXVdhs0yjwIoC51K55eVtVvN3Pn3PcYD4SucVEhOg6UlUTeInsxQJPYvtS0FcbM%2BR4BVQDZeZM0%2BHJbhZHFAn2x9WYPj51YtXDC32dBSPv%2FF%2BQVPqFpHWepaRXKQy49yA%2FsXM1YYRiNgsUbq9Cb31PQmsbmnERq%2F0DQkFPxd3bRyGDEHojLySwEirdYo6e26131nAjsMcfzDxUAzqs53UUtw2l5xkxkSzfXXbjyuOcAiYU4zB%2BRS1DAj5oLm4H4crPwzn9sgZjE7FtFj6rBMdiXtjsvnc2f1cE8PYY8IAL%2BCYbscuzfuw9xgDOr%2BEKmzxEJERwTRgiuv8ug20%2F8bUOPvboihmlis6HzrKYQb%2BSEwBc%2BCh5jDGjfHCBjqkAT0jea66rOuau9QTBndRgmBLUmF2ne311nD00mzvQrNwY7bBlo2xXQLtFmrwReL6xzmikbvhWbwJXujth7tCTizhQ2yhn6Bv4Xv%2FlG7THwJxE4I9asT455QDbF0rXX68akpuJZUEuhTHs6YQds1IzBShjcWkAQRQz%2BayDcKh4aIjMC0EJb3wlEMAw6oMTsiV%2FLc9gQQJaP%2Bvre6qc0ldNigDDUF8&X-Amz-Signature=94d36729bde5d28be258361b64f1b2b3fc789e8da2c373293907355c40044d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR2I7JR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDG09EZw6AOgyTqkGcXpTBITQdjxzLvcGcaWAH10ZttLgIhANQU3XzFqKs%2BpnDHOa4XEjOhOWcdvGmmc38DpwyLvi0PKv8DCEwQABoMNjM3NDIzMTgzODA1IgxMXbJ91h9tQ8WBaGAq3APVqrpOY%2BgJUVCfLi096mS81lc5NG%2BKLRvTDTLPqm9d7WchwNsxFy1tYwW6o8bohZO5AcTBs1uNE%2BYMx%2F1C3f0pnrdMepW4ZdSLqALhYiMx24Jz%2BLPiOw8JPQXUWtIzUTTm7dHUoi3x9UUf8CV23rMW0%2FTQtWBysv3uUwkCToluDJsZN5%2B0YRQ0GKSdse4C29l70uwOClPb7PDbzNROQ3jQg9dwOsw11B3D71qkwAKQ6enA%2FUE6lRCaf9IIA52oxuRcGsPw7nMuXVdhs0yjwIoC51K55eVtVvN3Pn3PcYD4SucVEhOg6UlUTeInsxQJPYvtS0FcbM%2BR4BVQDZeZM0%2BHJbhZHFAn2x9WYPj51YtXDC32dBSPv%2FF%2BQVPqFpHWepaRXKQy49yA%2FsXM1YYRiNgsUbq9Cb31PQmsbmnERq%2F0DQkFPxd3bRyGDEHojLySwEirdYo6e26131nAjsMcfzDxUAzqs53UUtw2l5xkxkSzfXXbjyuOcAiYU4zB%2BRS1DAj5oLm4H4crPwzn9sgZjE7FtFj6rBMdiXtjsvnc2f1cE8PYY8IAL%2BCYbscuzfuw9xgDOr%2BEKmzxEJERwTRgiuv8ug20%2F8bUOPvboihmlis6HzrKYQb%2BSEwBc%2BCh5jDGjfHCBjqkAT0jea66rOuau9QTBndRgmBLUmF2ne311nD00mzvQrNwY7bBlo2xXQLtFmrwReL6xzmikbvhWbwJXujth7tCTizhQ2yhn6Bv4Xv%2FlG7THwJxE4I9asT455QDbF0rXX68akpuJZUEuhTHs6YQds1IzBShjcWkAQRQz%2BayDcKh4aIjMC0EJb3wlEMAw6oMTsiV%2FLc9gQQJaP%2Bvre6qc0ldNigDDUF8&X-Amz-Signature=dce284720f495184c01f9e74fc27cded7221abe854dd4b91dd7784987c6c76f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR2I7JR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDG09EZw6AOgyTqkGcXpTBITQdjxzLvcGcaWAH10ZttLgIhANQU3XzFqKs%2BpnDHOa4XEjOhOWcdvGmmc38DpwyLvi0PKv8DCEwQABoMNjM3NDIzMTgzODA1IgxMXbJ91h9tQ8WBaGAq3APVqrpOY%2BgJUVCfLi096mS81lc5NG%2BKLRvTDTLPqm9d7WchwNsxFy1tYwW6o8bohZO5AcTBs1uNE%2BYMx%2F1C3f0pnrdMepW4ZdSLqALhYiMx24Jz%2BLPiOw8JPQXUWtIzUTTm7dHUoi3x9UUf8CV23rMW0%2FTQtWBysv3uUwkCToluDJsZN5%2B0YRQ0GKSdse4C29l70uwOClPb7PDbzNROQ3jQg9dwOsw11B3D71qkwAKQ6enA%2FUE6lRCaf9IIA52oxuRcGsPw7nMuXVdhs0yjwIoC51K55eVtVvN3Pn3PcYD4SucVEhOg6UlUTeInsxQJPYvtS0FcbM%2BR4BVQDZeZM0%2BHJbhZHFAn2x9WYPj51YtXDC32dBSPv%2FF%2BQVPqFpHWepaRXKQy49yA%2FsXM1YYRiNgsUbq9Cb31PQmsbmnERq%2F0DQkFPxd3bRyGDEHojLySwEirdYo6e26131nAjsMcfzDxUAzqs53UUtw2l5xkxkSzfXXbjyuOcAiYU4zB%2BRS1DAj5oLm4H4crPwzn9sgZjE7FtFj6rBMdiXtjsvnc2f1cE8PYY8IAL%2BCYbscuzfuw9xgDOr%2BEKmzxEJERwTRgiuv8ug20%2F8bUOPvboihmlis6HzrKYQb%2BSEwBc%2BCh5jDGjfHCBjqkAT0jea66rOuau9QTBndRgmBLUmF2ne311nD00mzvQrNwY7bBlo2xXQLtFmrwReL6xzmikbvhWbwJXujth7tCTizhQ2yhn6Bv4Xv%2FlG7THwJxE4I9asT455QDbF0rXX68akpuJZUEuhTHs6YQds1IzBShjcWkAQRQz%2BayDcKh4aIjMC0EJb3wlEMAw6oMTsiV%2FLc9gQQJaP%2Bvre6qc0ldNigDDUF8&X-Amz-Signature=521ab0ee3b1e1318457704094b56adaf5304cdb028ea939e590eeebe43619efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR2I7JR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDG09EZw6AOgyTqkGcXpTBITQdjxzLvcGcaWAH10ZttLgIhANQU3XzFqKs%2BpnDHOa4XEjOhOWcdvGmmc38DpwyLvi0PKv8DCEwQABoMNjM3NDIzMTgzODA1IgxMXbJ91h9tQ8WBaGAq3APVqrpOY%2BgJUVCfLi096mS81lc5NG%2BKLRvTDTLPqm9d7WchwNsxFy1tYwW6o8bohZO5AcTBs1uNE%2BYMx%2F1C3f0pnrdMepW4ZdSLqALhYiMx24Jz%2BLPiOw8JPQXUWtIzUTTm7dHUoi3x9UUf8CV23rMW0%2FTQtWBysv3uUwkCToluDJsZN5%2B0YRQ0GKSdse4C29l70uwOClPb7PDbzNROQ3jQg9dwOsw11B3D71qkwAKQ6enA%2FUE6lRCaf9IIA52oxuRcGsPw7nMuXVdhs0yjwIoC51K55eVtVvN3Pn3PcYD4SucVEhOg6UlUTeInsxQJPYvtS0FcbM%2BR4BVQDZeZM0%2BHJbhZHFAn2x9WYPj51YtXDC32dBSPv%2FF%2BQVPqFpHWepaRXKQy49yA%2FsXM1YYRiNgsUbq9Cb31PQmsbmnERq%2F0DQkFPxd3bRyGDEHojLySwEirdYo6e26131nAjsMcfzDxUAzqs53UUtw2l5xkxkSzfXXbjyuOcAiYU4zB%2BRS1DAj5oLm4H4crPwzn9sgZjE7FtFj6rBMdiXtjsvnc2f1cE8PYY8IAL%2BCYbscuzfuw9xgDOr%2BEKmzxEJERwTRgiuv8ug20%2F8bUOPvboihmlis6HzrKYQb%2BSEwBc%2BCh5jDGjfHCBjqkAT0jea66rOuau9QTBndRgmBLUmF2ne311nD00mzvQrNwY7bBlo2xXQLtFmrwReL6xzmikbvhWbwJXujth7tCTizhQ2yhn6Bv4Xv%2FlG7THwJxE4I9asT455QDbF0rXX68akpuJZUEuhTHs6YQds1IzBShjcWkAQRQz%2BayDcKh4aIjMC0EJb3wlEMAw6oMTsiV%2FLc9gQQJaP%2Bvre6qc0ldNigDDUF8&X-Amz-Signature=0555b5bb36739a0cb33bab0ffba2f819f11bced9bbcae35ba80b5973f8354b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR2I7JR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDG09EZw6AOgyTqkGcXpTBITQdjxzLvcGcaWAH10ZttLgIhANQU3XzFqKs%2BpnDHOa4XEjOhOWcdvGmmc38DpwyLvi0PKv8DCEwQABoMNjM3NDIzMTgzODA1IgxMXbJ91h9tQ8WBaGAq3APVqrpOY%2BgJUVCfLi096mS81lc5NG%2BKLRvTDTLPqm9d7WchwNsxFy1tYwW6o8bohZO5AcTBs1uNE%2BYMx%2F1C3f0pnrdMepW4ZdSLqALhYiMx24Jz%2BLPiOw8JPQXUWtIzUTTm7dHUoi3x9UUf8CV23rMW0%2FTQtWBysv3uUwkCToluDJsZN5%2B0YRQ0GKSdse4C29l70uwOClPb7PDbzNROQ3jQg9dwOsw11B3D71qkwAKQ6enA%2FUE6lRCaf9IIA52oxuRcGsPw7nMuXVdhs0yjwIoC51K55eVtVvN3Pn3PcYD4SucVEhOg6UlUTeInsxQJPYvtS0FcbM%2BR4BVQDZeZM0%2BHJbhZHFAn2x9WYPj51YtXDC32dBSPv%2FF%2BQVPqFpHWepaRXKQy49yA%2FsXM1YYRiNgsUbq9Cb31PQmsbmnERq%2F0DQkFPxd3bRyGDEHojLySwEirdYo6e26131nAjsMcfzDxUAzqs53UUtw2l5xkxkSzfXXbjyuOcAiYU4zB%2BRS1DAj5oLm4H4crPwzn9sgZjE7FtFj6rBMdiXtjsvnc2f1cE8PYY8IAL%2BCYbscuzfuw9xgDOr%2BEKmzxEJERwTRgiuv8ug20%2F8bUOPvboihmlis6HzrKYQb%2BSEwBc%2BCh5jDGjfHCBjqkAT0jea66rOuau9QTBndRgmBLUmF2ne311nD00mzvQrNwY7bBlo2xXQLtFmrwReL6xzmikbvhWbwJXujth7tCTizhQ2yhn6Bv4Xv%2FlG7THwJxE4I9asT455QDbF0rXX68akpuJZUEuhTHs6YQds1IzBShjcWkAQRQz%2BayDcKh4aIjMC0EJb3wlEMAw6oMTsiV%2FLc9gQQJaP%2Bvre6qc0ldNigDDUF8&X-Amz-Signature=2d50362a39202b5721012ffb4f85aac20b70fc0bb0534d67c6cf094ca7f15be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
