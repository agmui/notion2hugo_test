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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAAR2TN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDy81Lk%2F4BOT6t1csrBy63bj4PM5XEhmXrvVRSFQI7vTQIhAL0B3fburV8DU9Us%2B8ZgzgpxDNOpMVgS5fKlpQ51WocAKv8DCBoQABoMNjM3NDIzMTgzODA1IgxkJhbhUvmj37ZppvYq3AObGfIrjgCNSy2UnloZNpcp6D%2FQs%2FKq1HfjQYokNpWE28yxVnclrmmsmm3ne8sRaaxlD6ns%2BngdHwtyIOotmun1hW4x%2FJsm2HVU68RanrO2kTu%2Ftr2rILKp1uNLj6XEUvOnOsA%2FEdnurnmCJcgUndLtsYhgciUoJ68%2BdqtNRNd8IkUpjJoEuXcqVHJWoNKJbstKGfpGiaWPa8%2FGRtHb%2Bm15WpQBFCjWFdNM3ZrU%2BrdQT2gX0eVIe9rH5L1ou%2Btjuj1h2c3x7G2oayQQVXCtdWtW3sU5jpRehRGSaNTVNVTTYwuJMvWla61trmsxi4d1qR2gGmNpEYfmWRJTbEch7aXePEY1kVIwsXm9Z1pzybP6ruOKF4hRUFfLttsTZKnSS1Bpp69603rU9fmSGo124ZWPgOLCjvDN%2FcSNeIF6mnmeyF994c6Fbzrc4IbV5KWPBSg6zdJW6Rf3J6i5YojH5bTe2Owy9Ev6m0K%2BRLaSFH23LxmM2sDbpoj%2BI0VZVhEHNilwCLw4pnnefcx1wlLDefjZpfDVWqxtJOvmDJiUiwiGzL6syLs86YEh9qEy8HlP70YR5hbwQNoyKkOZAKRsahWBSOkYk57LUTAMTsfcF4zAY5HLU893YxDSebOwUTDC5prDBjqkAQ9%2Fb%2Fh3Vr1UgQtkVldUljg0fZN0ggnjo2WFTY%2BAxeCaKq0vY6YUv3Oil%2BXfJ9Hkch9tDSbdFYEO0N91kKA8kqLYAj%2B2lQYmS2w3akzh6eCYjyCF9YXumLG7ufsC1CgbhvTU2HBMMXx1pQ0WcQeXWzMWM57RY6%2FBfvJ34CKyiTzxTKO%2FJB%2BVr5DGUYz8NcFcZvzFgd67F3sAjB5xy9yZYC5Bpnhg&X-Amz-Signature=ed8033d41050c75797ab3d5d157c972bb7ca00daf16f901e9378243fa3bcc792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAAR2TN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDy81Lk%2F4BOT6t1csrBy63bj4PM5XEhmXrvVRSFQI7vTQIhAL0B3fburV8DU9Us%2B8ZgzgpxDNOpMVgS5fKlpQ51WocAKv8DCBoQABoMNjM3NDIzMTgzODA1IgxkJhbhUvmj37ZppvYq3AObGfIrjgCNSy2UnloZNpcp6D%2FQs%2FKq1HfjQYokNpWE28yxVnclrmmsmm3ne8sRaaxlD6ns%2BngdHwtyIOotmun1hW4x%2FJsm2HVU68RanrO2kTu%2Ftr2rILKp1uNLj6XEUvOnOsA%2FEdnurnmCJcgUndLtsYhgciUoJ68%2BdqtNRNd8IkUpjJoEuXcqVHJWoNKJbstKGfpGiaWPa8%2FGRtHb%2Bm15WpQBFCjWFdNM3ZrU%2BrdQT2gX0eVIe9rH5L1ou%2Btjuj1h2c3x7G2oayQQVXCtdWtW3sU5jpRehRGSaNTVNVTTYwuJMvWla61trmsxi4d1qR2gGmNpEYfmWRJTbEch7aXePEY1kVIwsXm9Z1pzybP6ruOKF4hRUFfLttsTZKnSS1Bpp69603rU9fmSGo124ZWPgOLCjvDN%2FcSNeIF6mnmeyF994c6Fbzrc4IbV5KWPBSg6zdJW6Rf3J6i5YojH5bTe2Owy9Ev6m0K%2BRLaSFH23LxmM2sDbpoj%2BI0VZVhEHNilwCLw4pnnefcx1wlLDefjZpfDVWqxtJOvmDJiUiwiGzL6syLs86YEh9qEy8HlP70YR5hbwQNoyKkOZAKRsahWBSOkYk57LUTAMTsfcF4zAY5HLU893YxDSebOwUTDC5prDBjqkAQ9%2Fb%2Fh3Vr1UgQtkVldUljg0fZN0ggnjo2WFTY%2BAxeCaKq0vY6YUv3Oil%2BXfJ9Hkch9tDSbdFYEO0N91kKA8kqLYAj%2B2lQYmS2w3akzh6eCYjyCF9YXumLG7ufsC1CgbhvTU2HBMMXx1pQ0WcQeXWzMWM57RY6%2FBfvJ34CKyiTzxTKO%2FJB%2BVr5DGUYz8NcFcZvzFgd67F3sAjB5xy9yZYC5Bpnhg&X-Amz-Signature=a3fc57e985f00181b83c710369bbba0d06c3fdcc36cfd3bc83ee6dbfe5651e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAAR2TN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDy81Lk%2F4BOT6t1csrBy63bj4PM5XEhmXrvVRSFQI7vTQIhAL0B3fburV8DU9Us%2B8ZgzgpxDNOpMVgS5fKlpQ51WocAKv8DCBoQABoMNjM3NDIzMTgzODA1IgxkJhbhUvmj37ZppvYq3AObGfIrjgCNSy2UnloZNpcp6D%2FQs%2FKq1HfjQYokNpWE28yxVnclrmmsmm3ne8sRaaxlD6ns%2BngdHwtyIOotmun1hW4x%2FJsm2HVU68RanrO2kTu%2Ftr2rILKp1uNLj6XEUvOnOsA%2FEdnurnmCJcgUndLtsYhgciUoJ68%2BdqtNRNd8IkUpjJoEuXcqVHJWoNKJbstKGfpGiaWPa8%2FGRtHb%2Bm15WpQBFCjWFdNM3ZrU%2BrdQT2gX0eVIe9rH5L1ou%2Btjuj1h2c3x7G2oayQQVXCtdWtW3sU5jpRehRGSaNTVNVTTYwuJMvWla61trmsxi4d1qR2gGmNpEYfmWRJTbEch7aXePEY1kVIwsXm9Z1pzybP6ruOKF4hRUFfLttsTZKnSS1Bpp69603rU9fmSGo124ZWPgOLCjvDN%2FcSNeIF6mnmeyF994c6Fbzrc4IbV5KWPBSg6zdJW6Rf3J6i5YojH5bTe2Owy9Ev6m0K%2BRLaSFH23LxmM2sDbpoj%2BI0VZVhEHNilwCLw4pnnefcx1wlLDefjZpfDVWqxtJOvmDJiUiwiGzL6syLs86YEh9qEy8HlP70YR5hbwQNoyKkOZAKRsahWBSOkYk57LUTAMTsfcF4zAY5HLU893YxDSebOwUTDC5prDBjqkAQ9%2Fb%2Fh3Vr1UgQtkVldUljg0fZN0ggnjo2WFTY%2BAxeCaKq0vY6YUv3Oil%2BXfJ9Hkch9tDSbdFYEO0N91kKA8kqLYAj%2B2lQYmS2w3akzh6eCYjyCF9YXumLG7ufsC1CgbhvTU2HBMMXx1pQ0WcQeXWzMWM57RY6%2FBfvJ34CKyiTzxTKO%2FJB%2BVr5DGUYz8NcFcZvzFgd67F3sAjB5xy9yZYC5Bpnhg&X-Amz-Signature=1cf3d8ccbeef18b132ee0f3a9b0f2d4a74fbac20f90934da4b9f44ec8824a57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAAR2TN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDy81Lk%2F4BOT6t1csrBy63bj4PM5XEhmXrvVRSFQI7vTQIhAL0B3fburV8DU9Us%2B8ZgzgpxDNOpMVgS5fKlpQ51WocAKv8DCBoQABoMNjM3NDIzMTgzODA1IgxkJhbhUvmj37ZppvYq3AObGfIrjgCNSy2UnloZNpcp6D%2FQs%2FKq1HfjQYokNpWE28yxVnclrmmsmm3ne8sRaaxlD6ns%2BngdHwtyIOotmun1hW4x%2FJsm2HVU68RanrO2kTu%2Ftr2rILKp1uNLj6XEUvOnOsA%2FEdnurnmCJcgUndLtsYhgciUoJ68%2BdqtNRNd8IkUpjJoEuXcqVHJWoNKJbstKGfpGiaWPa8%2FGRtHb%2Bm15WpQBFCjWFdNM3ZrU%2BrdQT2gX0eVIe9rH5L1ou%2Btjuj1h2c3x7G2oayQQVXCtdWtW3sU5jpRehRGSaNTVNVTTYwuJMvWla61trmsxi4d1qR2gGmNpEYfmWRJTbEch7aXePEY1kVIwsXm9Z1pzybP6ruOKF4hRUFfLttsTZKnSS1Bpp69603rU9fmSGo124ZWPgOLCjvDN%2FcSNeIF6mnmeyF994c6Fbzrc4IbV5KWPBSg6zdJW6Rf3J6i5YojH5bTe2Owy9Ev6m0K%2BRLaSFH23LxmM2sDbpoj%2BI0VZVhEHNilwCLw4pnnefcx1wlLDefjZpfDVWqxtJOvmDJiUiwiGzL6syLs86YEh9qEy8HlP70YR5hbwQNoyKkOZAKRsahWBSOkYk57LUTAMTsfcF4zAY5HLU893YxDSebOwUTDC5prDBjqkAQ9%2Fb%2Fh3Vr1UgQtkVldUljg0fZN0ggnjo2WFTY%2BAxeCaKq0vY6YUv3Oil%2BXfJ9Hkch9tDSbdFYEO0N91kKA8kqLYAj%2B2lQYmS2w3akzh6eCYjyCF9YXumLG7ufsC1CgbhvTU2HBMMXx1pQ0WcQeXWzMWM57RY6%2FBfvJ34CKyiTzxTKO%2FJB%2BVr5DGUYz8NcFcZvzFgd67F3sAjB5xy9yZYC5Bpnhg&X-Amz-Signature=e41d31695a025f87526ec3a80a1dbb070129714d51089ee88b8ccd139e1bf37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAAR2TN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDy81Lk%2F4BOT6t1csrBy63bj4PM5XEhmXrvVRSFQI7vTQIhAL0B3fburV8DU9Us%2B8ZgzgpxDNOpMVgS5fKlpQ51WocAKv8DCBoQABoMNjM3NDIzMTgzODA1IgxkJhbhUvmj37ZppvYq3AObGfIrjgCNSy2UnloZNpcp6D%2FQs%2FKq1HfjQYokNpWE28yxVnclrmmsmm3ne8sRaaxlD6ns%2BngdHwtyIOotmun1hW4x%2FJsm2HVU68RanrO2kTu%2Ftr2rILKp1uNLj6XEUvOnOsA%2FEdnurnmCJcgUndLtsYhgciUoJ68%2BdqtNRNd8IkUpjJoEuXcqVHJWoNKJbstKGfpGiaWPa8%2FGRtHb%2Bm15WpQBFCjWFdNM3ZrU%2BrdQT2gX0eVIe9rH5L1ou%2Btjuj1h2c3x7G2oayQQVXCtdWtW3sU5jpRehRGSaNTVNVTTYwuJMvWla61trmsxi4d1qR2gGmNpEYfmWRJTbEch7aXePEY1kVIwsXm9Z1pzybP6ruOKF4hRUFfLttsTZKnSS1Bpp69603rU9fmSGo124ZWPgOLCjvDN%2FcSNeIF6mnmeyF994c6Fbzrc4IbV5KWPBSg6zdJW6Rf3J6i5YojH5bTe2Owy9Ev6m0K%2BRLaSFH23LxmM2sDbpoj%2BI0VZVhEHNilwCLw4pnnefcx1wlLDefjZpfDVWqxtJOvmDJiUiwiGzL6syLs86YEh9qEy8HlP70YR5hbwQNoyKkOZAKRsahWBSOkYk57LUTAMTsfcF4zAY5HLU893YxDSebOwUTDC5prDBjqkAQ9%2Fb%2Fh3Vr1UgQtkVldUljg0fZN0ggnjo2WFTY%2BAxeCaKq0vY6YUv3Oil%2BXfJ9Hkch9tDSbdFYEO0N91kKA8kqLYAj%2B2lQYmS2w3akzh6eCYjyCF9YXumLG7ufsC1CgbhvTU2HBMMXx1pQ0WcQeXWzMWM57RY6%2FBfvJ34CKyiTzxTKO%2FJB%2BVr5DGUYz8NcFcZvzFgd67F3sAjB5xy9yZYC5Bpnhg&X-Amz-Signature=fb408ddfb65d91eb30d9a416eaf7d567b779956db29dee1adf8c8a5803d9977c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
