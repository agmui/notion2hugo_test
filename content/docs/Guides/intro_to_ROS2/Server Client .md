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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5COY7M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFmkwEJt3nc2eyDqifwtzcgR944%2FfTHvYlK%2BaMdCiHGBAiEAsAddHphQxrlpDq6qey1VlAFwdubVFHE9lGYOw2RELQ0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFXXjZEt%2Borm0UGQTCrcA%2FhJK%2BDy%2FMmyugtI2tx29FccqzBuxJsF0XKzzidD2XFpUVMZYoyqINsHrddTeB6vl5NT503j3ivWU%2Fz4GhqApOXWKLQxacGL760m2caYuXuSZdREyB40plTWwsIlPRYNOzSrVyJKuoWnnij0doOiyDQIyDRFBKdpSoPDtcB34T2n4nT38c%2FHxdqmBtttGc8d03wpeOBYtbrPNpJkgw5njtozr7t0IUhIK20fPJiMKFm3%2BQPefPQBSgMY5drmeyfPoeX1cJhK892Jr5aFtANuH5oeF4TzD0pnvw%2B1Z%2Fp3Ct5PGmcr%2BTGDuPz%2BdlXsxfPc88sMDjkLsHmElVYNM4qYkZkWI8IHUPmWoS2GGX%2Fm0Bq6dq0ayi7ymnuOoJlaMLkNDLkd2dvuMXKaMndAsZJzNJVMyOLui%2Bgc2PSpM8y6YaOfFJOrexmtmp8AunSY%2B3tqQsh3T6RCzGcnjCgTvkHlbxY6mE2HlREaLkNx2OJYSSxWzCKDPsy6IU0Oe0PrUzYrghB8nutFCD50sKhiWi%2FismW%2FDSxWuybsiY6hP5JnJrtf7ewCVhRayPcml9eYXEEa1vl5crcD0%2FssIkk2ScI17V54YnSZ5CILGN%2B6sgOeVptmPIFDZmOqcN4sq0KWMImtsMIGOqUBXYQDAmGIyK3WTuI9lLwTsFuFTvupHDlXy7jpth%2FzoAr6G8QURK0gw0XZd3lTAB4ZsXYbITyUdZ8YeoRBxA7b4HOoN7mRiy2DrT14O07CdbxwsJbHHwkjau0qLdhEBgHYyHOmJAQANOgyLv2eElf%2Bj98Q4Bk4Z%2B3qSSkBmtiQ621k%2BJ%2F%2F%2BD3IRTVv10GHMEGhcDYtUrG04b3d3toLJu7kHbeeXs3Q&X-Amz-Signature=45e0b6b99779c4b9c8604ab073cf970c23a5466fcfdecfca75b006c65a337fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5COY7M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFmkwEJt3nc2eyDqifwtzcgR944%2FfTHvYlK%2BaMdCiHGBAiEAsAddHphQxrlpDq6qey1VlAFwdubVFHE9lGYOw2RELQ0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFXXjZEt%2Borm0UGQTCrcA%2FhJK%2BDy%2FMmyugtI2tx29FccqzBuxJsF0XKzzidD2XFpUVMZYoyqINsHrddTeB6vl5NT503j3ivWU%2Fz4GhqApOXWKLQxacGL760m2caYuXuSZdREyB40plTWwsIlPRYNOzSrVyJKuoWnnij0doOiyDQIyDRFBKdpSoPDtcB34T2n4nT38c%2FHxdqmBtttGc8d03wpeOBYtbrPNpJkgw5njtozr7t0IUhIK20fPJiMKFm3%2BQPefPQBSgMY5drmeyfPoeX1cJhK892Jr5aFtANuH5oeF4TzD0pnvw%2B1Z%2Fp3Ct5PGmcr%2BTGDuPz%2BdlXsxfPc88sMDjkLsHmElVYNM4qYkZkWI8IHUPmWoS2GGX%2Fm0Bq6dq0ayi7ymnuOoJlaMLkNDLkd2dvuMXKaMndAsZJzNJVMyOLui%2Bgc2PSpM8y6YaOfFJOrexmtmp8AunSY%2B3tqQsh3T6RCzGcnjCgTvkHlbxY6mE2HlREaLkNx2OJYSSxWzCKDPsy6IU0Oe0PrUzYrghB8nutFCD50sKhiWi%2FismW%2FDSxWuybsiY6hP5JnJrtf7ewCVhRayPcml9eYXEEa1vl5crcD0%2FssIkk2ScI17V54YnSZ5CILGN%2B6sgOeVptmPIFDZmOqcN4sq0KWMImtsMIGOqUBXYQDAmGIyK3WTuI9lLwTsFuFTvupHDlXy7jpth%2FzoAr6G8QURK0gw0XZd3lTAB4ZsXYbITyUdZ8YeoRBxA7b4HOoN7mRiy2DrT14O07CdbxwsJbHHwkjau0qLdhEBgHYyHOmJAQANOgyLv2eElf%2Bj98Q4Bk4Z%2B3qSSkBmtiQ621k%2BJ%2F%2F%2BD3IRTVv10GHMEGhcDYtUrG04b3d3toLJu7kHbeeXs3Q&X-Amz-Signature=02048c27caa476331c9f7700a897ff00274340f38a4d277704e6fe4b6a767c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5COY7M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFmkwEJt3nc2eyDqifwtzcgR944%2FfTHvYlK%2BaMdCiHGBAiEAsAddHphQxrlpDq6qey1VlAFwdubVFHE9lGYOw2RELQ0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFXXjZEt%2Borm0UGQTCrcA%2FhJK%2BDy%2FMmyugtI2tx29FccqzBuxJsF0XKzzidD2XFpUVMZYoyqINsHrddTeB6vl5NT503j3ivWU%2Fz4GhqApOXWKLQxacGL760m2caYuXuSZdREyB40plTWwsIlPRYNOzSrVyJKuoWnnij0doOiyDQIyDRFBKdpSoPDtcB34T2n4nT38c%2FHxdqmBtttGc8d03wpeOBYtbrPNpJkgw5njtozr7t0IUhIK20fPJiMKFm3%2BQPefPQBSgMY5drmeyfPoeX1cJhK892Jr5aFtANuH5oeF4TzD0pnvw%2B1Z%2Fp3Ct5PGmcr%2BTGDuPz%2BdlXsxfPc88sMDjkLsHmElVYNM4qYkZkWI8IHUPmWoS2GGX%2Fm0Bq6dq0ayi7ymnuOoJlaMLkNDLkd2dvuMXKaMndAsZJzNJVMyOLui%2Bgc2PSpM8y6YaOfFJOrexmtmp8AunSY%2B3tqQsh3T6RCzGcnjCgTvkHlbxY6mE2HlREaLkNx2OJYSSxWzCKDPsy6IU0Oe0PrUzYrghB8nutFCD50sKhiWi%2FismW%2FDSxWuybsiY6hP5JnJrtf7ewCVhRayPcml9eYXEEa1vl5crcD0%2FssIkk2ScI17V54YnSZ5CILGN%2B6sgOeVptmPIFDZmOqcN4sq0KWMImtsMIGOqUBXYQDAmGIyK3WTuI9lLwTsFuFTvupHDlXy7jpth%2FzoAr6G8QURK0gw0XZd3lTAB4ZsXYbITyUdZ8YeoRBxA7b4HOoN7mRiy2DrT14O07CdbxwsJbHHwkjau0qLdhEBgHYyHOmJAQANOgyLv2eElf%2Bj98Q4Bk4Z%2B3qSSkBmtiQ621k%2BJ%2F%2F%2BD3IRTVv10GHMEGhcDYtUrG04b3d3toLJu7kHbeeXs3Q&X-Amz-Signature=537b9161a39d30b3c20f6b93b57a38d21b6640a8f5b81255559eeb7e222f701b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5COY7M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFmkwEJt3nc2eyDqifwtzcgR944%2FfTHvYlK%2BaMdCiHGBAiEAsAddHphQxrlpDq6qey1VlAFwdubVFHE9lGYOw2RELQ0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFXXjZEt%2Borm0UGQTCrcA%2FhJK%2BDy%2FMmyugtI2tx29FccqzBuxJsF0XKzzidD2XFpUVMZYoyqINsHrddTeB6vl5NT503j3ivWU%2Fz4GhqApOXWKLQxacGL760m2caYuXuSZdREyB40plTWwsIlPRYNOzSrVyJKuoWnnij0doOiyDQIyDRFBKdpSoPDtcB34T2n4nT38c%2FHxdqmBtttGc8d03wpeOBYtbrPNpJkgw5njtozr7t0IUhIK20fPJiMKFm3%2BQPefPQBSgMY5drmeyfPoeX1cJhK892Jr5aFtANuH5oeF4TzD0pnvw%2B1Z%2Fp3Ct5PGmcr%2BTGDuPz%2BdlXsxfPc88sMDjkLsHmElVYNM4qYkZkWI8IHUPmWoS2GGX%2Fm0Bq6dq0ayi7ymnuOoJlaMLkNDLkd2dvuMXKaMndAsZJzNJVMyOLui%2Bgc2PSpM8y6YaOfFJOrexmtmp8AunSY%2B3tqQsh3T6RCzGcnjCgTvkHlbxY6mE2HlREaLkNx2OJYSSxWzCKDPsy6IU0Oe0PrUzYrghB8nutFCD50sKhiWi%2FismW%2FDSxWuybsiY6hP5JnJrtf7ewCVhRayPcml9eYXEEa1vl5crcD0%2FssIkk2ScI17V54YnSZ5CILGN%2B6sgOeVptmPIFDZmOqcN4sq0KWMImtsMIGOqUBXYQDAmGIyK3WTuI9lLwTsFuFTvupHDlXy7jpth%2FzoAr6G8QURK0gw0XZd3lTAB4ZsXYbITyUdZ8YeoRBxA7b4HOoN7mRiy2DrT14O07CdbxwsJbHHwkjau0qLdhEBgHYyHOmJAQANOgyLv2eElf%2Bj98Q4Bk4Z%2B3qSSkBmtiQ621k%2BJ%2F%2F%2BD3IRTVv10GHMEGhcDYtUrG04b3d3toLJu7kHbeeXs3Q&X-Amz-Signature=892f4072b040654dd67bbcb6e79d1fc33cf30ab3569d0005884013130ef067ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5COY7M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFmkwEJt3nc2eyDqifwtzcgR944%2FfTHvYlK%2BaMdCiHGBAiEAsAddHphQxrlpDq6qey1VlAFwdubVFHE9lGYOw2RELQ0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFXXjZEt%2Borm0UGQTCrcA%2FhJK%2BDy%2FMmyugtI2tx29FccqzBuxJsF0XKzzidD2XFpUVMZYoyqINsHrddTeB6vl5NT503j3ivWU%2Fz4GhqApOXWKLQxacGL760m2caYuXuSZdREyB40plTWwsIlPRYNOzSrVyJKuoWnnij0doOiyDQIyDRFBKdpSoPDtcB34T2n4nT38c%2FHxdqmBtttGc8d03wpeOBYtbrPNpJkgw5njtozr7t0IUhIK20fPJiMKFm3%2BQPefPQBSgMY5drmeyfPoeX1cJhK892Jr5aFtANuH5oeF4TzD0pnvw%2B1Z%2Fp3Ct5PGmcr%2BTGDuPz%2BdlXsxfPc88sMDjkLsHmElVYNM4qYkZkWI8IHUPmWoS2GGX%2Fm0Bq6dq0ayi7ymnuOoJlaMLkNDLkd2dvuMXKaMndAsZJzNJVMyOLui%2Bgc2PSpM8y6YaOfFJOrexmtmp8AunSY%2B3tqQsh3T6RCzGcnjCgTvkHlbxY6mE2HlREaLkNx2OJYSSxWzCKDPsy6IU0Oe0PrUzYrghB8nutFCD50sKhiWi%2FismW%2FDSxWuybsiY6hP5JnJrtf7ewCVhRayPcml9eYXEEa1vl5crcD0%2FssIkk2ScI17V54YnSZ5CILGN%2B6sgOeVptmPIFDZmOqcN4sq0KWMImtsMIGOqUBXYQDAmGIyK3WTuI9lLwTsFuFTvupHDlXy7jpth%2FzoAr6G8QURK0gw0XZd3lTAB4ZsXYbITyUdZ8YeoRBxA7b4HOoN7mRiy2DrT14O07CdbxwsJbHHwkjau0qLdhEBgHYyHOmJAQANOgyLv2eElf%2Bj98Q4Bk4Z%2B3qSSkBmtiQ621k%2BJ%2F%2F%2BD3IRTVv10GHMEGhcDYtUrG04b3d3toLJu7kHbeeXs3Q&X-Amz-Signature=b12d88a7ce51ac82a2d5bc932849119246235422a05c6605bf50ab20b685f0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
