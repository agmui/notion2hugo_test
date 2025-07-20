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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33QNNSW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6x0DbxkuiP69NumLpTPegk1pzkNq5VwQQwMULwsP1hAiAKLf0%2BVmX0qfGfS88%2F404kZYoBbVcA1c14wCDlI0HIRSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEcEjSdZmDYcnvDqKtwDhINH64N9J2cEJ9zrFQWqwIDI3viAnqA3s%2Fd3JgK2VbQ1T7Sch9b4qYUdN%2FYlivv5f3R4lDiEzfR%2FTC6UfgJh1mCfm5GK2kIpWXYixWxtakS%2BEb6VDWtoeHiCbY3nIbxtuxt7nY6ZiVeslSU%2BL9saRLbzyQsIsLs4EDgfNo412B4AiArrsU%2Bcs1btH4hqYVanyO2itkkqwtLgrzNgzuGdTwPp1sgzyN9r9UUQKRfiQ4c864dS6qycNgtGiJQA769heNxCAQcw9NZMhk%2BZLqcEKKsoeVvwhKlubyBjaf%2BKdsegbO4ZkCmi468lzkrId9gGzi9c8CSHOkcslVvU8SusN523hksYJ3MwCes3%2Fx4%2FnJ0jLWH0MWZEEJE4%2Fr2m6VhAc7V3OzfFRMKBJECvS7u1KYCmVruBHRzCtVpD%2Fors44tqMQk%2FL4GKb2XOalkebR8OXacop7kujJjkp%2BfGMbmRLkYToMG3XWspr5EDV6ctoUNjcNSlo0J8QayBKXsjIPnwQPOdUZc8IIDZNDPM8JE8mI8G9JrsuJ3kaexrbciNfI3xWTKny50%2BeZXbTea6ApOYoIBLNvYrCbjc23kGwYute4WnJ04SRSGQXi1rfYhJqgBBpnAhuiGGTBeGv%2FEw8rjywwY6pgFubgNJpfff%2BcG6S4lp4apaa%2FPV7kuZxcz40pUlifOvm%2F%2FuYIsLKXGm5dvH3riofyR5g542%2FzSkAGFA6sNO%2FO2WcM%2BgGg5Io0s0ELHGcSAuwkhnMGfNY4TaQqszDMR21mP3R9mXAziSe7KazmyVYTQgQclhyXyx%2F8m3Wwwebm1jl%2Fo7fDstIADGcJYEM3bO2uBE2l4ymNC%2FWlrtFyfeVrIsOIzVDvsQ&X-Amz-Signature=a53ff8b6ed6d0047cbcc23d98aa89d3adb7b96084b036c683e374d173c844e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33QNNSW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6x0DbxkuiP69NumLpTPegk1pzkNq5VwQQwMULwsP1hAiAKLf0%2BVmX0qfGfS88%2F404kZYoBbVcA1c14wCDlI0HIRSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEcEjSdZmDYcnvDqKtwDhINH64N9J2cEJ9zrFQWqwIDI3viAnqA3s%2Fd3JgK2VbQ1T7Sch9b4qYUdN%2FYlivv5f3R4lDiEzfR%2FTC6UfgJh1mCfm5GK2kIpWXYixWxtakS%2BEb6VDWtoeHiCbY3nIbxtuxt7nY6ZiVeslSU%2BL9saRLbzyQsIsLs4EDgfNo412B4AiArrsU%2Bcs1btH4hqYVanyO2itkkqwtLgrzNgzuGdTwPp1sgzyN9r9UUQKRfiQ4c864dS6qycNgtGiJQA769heNxCAQcw9NZMhk%2BZLqcEKKsoeVvwhKlubyBjaf%2BKdsegbO4ZkCmi468lzkrId9gGzi9c8CSHOkcslVvU8SusN523hksYJ3MwCes3%2Fx4%2FnJ0jLWH0MWZEEJE4%2Fr2m6VhAc7V3OzfFRMKBJECvS7u1KYCmVruBHRzCtVpD%2Fors44tqMQk%2FL4GKb2XOalkebR8OXacop7kujJjkp%2BfGMbmRLkYToMG3XWspr5EDV6ctoUNjcNSlo0J8QayBKXsjIPnwQPOdUZc8IIDZNDPM8JE8mI8G9JrsuJ3kaexrbciNfI3xWTKny50%2BeZXbTea6ApOYoIBLNvYrCbjc23kGwYute4WnJ04SRSGQXi1rfYhJqgBBpnAhuiGGTBeGv%2FEw8rjywwY6pgFubgNJpfff%2BcG6S4lp4apaa%2FPV7kuZxcz40pUlifOvm%2F%2FuYIsLKXGm5dvH3riofyR5g542%2FzSkAGFA6sNO%2FO2WcM%2BgGg5Io0s0ELHGcSAuwkhnMGfNY4TaQqszDMR21mP3R9mXAziSe7KazmyVYTQgQclhyXyx%2F8m3Wwwebm1jl%2Fo7fDstIADGcJYEM3bO2uBE2l4ymNC%2FWlrtFyfeVrIsOIzVDvsQ&X-Amz-Signature=23c12bca797fadc00eaea50fa0e5a1021ffb7f8d5a8788e009a4d68aee670d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33QNNSW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6x0DbxkuiP69NumLpTPegk1pzkNq5VwQQwMULwsP1hAiAKLf0%2BVmX0qfGfS88%2F404kZYoBbVcA1c14wCDlI0HIRSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEcEjSdZmDYcnvDqKtwDhINH64N9J2cEJ9zrFQWqwIDI3viAnqA3s%2Fd3JgK2VbQ1T7Sch9b4qYUdN%2FYlivv5f3R4lDiEzfR%2FTC6UfgJh1mCfm5GK2kIpWXYixWxtakS%2BEb6VDWtoeHiCbY3nIbxtuxt7nY6ZiVeslSU%2BL9saRLbzyQsIsLs4EDgfNo412B4AiArrsU%2Bcs1btH4hqYVanyO2itkkqwtLgrzNgzuGdTwPp1sgzyN9r9UUQKRfiQ4c864dS6qycNgtGiJQA769heNxCAQcw9NZMhk%2BZLqcEKKsoeVvwhKlubyBjaf%2BKdsegbO4ZkCmi468lzkrId9gGzi9c8CSHOkcslVvU8SusN523hksYJ3MwCes3%2Fx4%2FnJ0jLWH0MWZEEJE4%2Fr2m6VhAc7V3OzfFRMKBJECvS7u1KYCmVruBHRzCtVpD%2Fors44tqMQk%2FL4GKb2XOalkebR8OXacop7kujJjkp%2BfGMbmRLkYToMG3XWspr5EDV6ctoUNjcNSlo0J8QayBKXsjIPnwQPOdUZc8IIDZNDPM8JE8mI8G9JrsuJ3kaexrbciNfI3xWTKny50%2BeZXbTea6ApOYoIBLNvYrCbjc23kGwYute4WnJ04SRSGQXi1rfYhJqgBBpnAhuiGGTBeGv%2FEw8rjywwY6pgFubgNJpfff%2BcG6S4lp4apaa%2FPV7kuZxcz40pUlifOvm%2F%2FuYIsLKXGm5dvH3riofyR5g542%2FzSkAGFA6sNO%2FO2WcM%2BgGg5Io0s0ELHGcSAuwkhnMGfNY4TaQqszDMR21mP3R9mXAziSe7KazmyVYTQgQclhyXyx%2F8m3Wwwebm1jl%2Fo7fDstIADGcJYEM3bO2uBE2l4ymNC%2FWlrtFyfeVrIsOIzVDvsQ&X-Amz-Signature=460fc8d1abb436cfd080fc9012b4eda8a8d3042b97dda09d5d9a688a1db0b8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33QNNSW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6x0DbxkuiP69NumLpTPegk1pzkNq5VwQQwMULwsP1hAiAKLf0%2BVmX0qfGfS88%2F404kZYoBbVcA1c14wCDlI0HIRSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEcEjSdZmDYcnvDqKtwDhINH64N9J2cEJ9zrFQWqwIDI3viAnqA3s%2Fd3JgK2VbQ1T7Sch9b4qYUdN%2FYlivv5f3R4lDiEzfR%2FTC6UfgJh1mCfm5GK2kIpWXYixWxtakS%2BEb6VDWtoeHiCbY3nIbxtuxt7nY6ZiVeslSU%2BL9saRLbzyQsIsLs4EDgfNo412B4AiArrsU%2Bcs1btH4hqYVanyO2itkkqwtLgrzNgzuGdTwPp1sgzyN9r9UUQKRfiQ4c864dS6qycNgtGiJQA769heNxCAQcw9NZMhk%2BZLqcEKKsoeVvwhKlubyBjaf%2BKdsegbO4ZkCmi468lzkrId9gGzi9c8CSHOkcslVvU8SusN523hksYJ3MwCes3%2Fx4%2FnJ0jLWH0MWZEEJE4%2Fr2m6VhAc7V3OzfFRMKBJECvS7u1KYCmVruBHRzCtVpD%2Fors44tqMQk%2FL4GKb2XOalkebR8OXacop7kujJjkp%2BfGMbmRLkYToMG3XWspr5EDV6ctoUNjcNSlo0J8QayBKXsjIPnwQPOdUZc8IIDZNDPM8JE8mI8G9JrsuJ3kaexrbciNfI3xWTKny50%2BeZXbTea6ApOYoIBLNvYrCbjc23kGwYute4WnJ04SRSGQXi1rfYhJqgBBpnAhuiGGTBeGv%2FEw8rjywwY6pgFubgNJpfff%2BcG6S4lp4apaa%2FPV7kuZxcz40pUlifOvm%2F%2FuYIsLKXGm5dvH3riofyR5g542%2FzSkAGFA6sNO%2FO2WcM%2BgGg5Io0s0ELHGcSAuwkhnMGfNY4TaQqszDMR21mP3R9mXAziSe7KazmyVYTQgQclhyXyx%2F8m3Wwwebm1jl%2Fo7fDstIADGcJYEM3bO2uBE2l4ymNC%2FWlrtFyfeVrIsOIzVDvsQ&X-Amz-Signature=d6fd6d2856bca9b22490fa3ff3f4b3f061ed91df4deaf5c758c0b9b1cacb1196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33QNNSW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6x0DbxkuiP69NumLpTPegk1pzkNq5VwQQwMULwsP1hAiAKLf0%2BVmX0qfGfS88%2F404kZYoBbVcA1c14wCDlI0HIRSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEcEjSdZmDYcnvDqKtwDhINH64N9J2cEJ9zrFQWqwIDI3viAnqA3s%2Fd3JgK2VbQ1T7Sch9b4qYUdN%2FYlivv5f3R4lDiEzfR%2FTC6UfgJh1mCfm5GK2kIpWXYixWxtakS%2BEb6VDWtoeHiCbY3nIbxtuxt7nY6ZiVeslSU%2BL9saRLbzyQsIsLs4EDgfNo412B4AiArrsU%2Bcs1btH4hqYVanyO2itkkqwtLgrzNgzuGdTwPp1sgzyN9r9UUQKRfiQ4c864dS6qycNgtGiJQA769heNxCAQcw9NZMhk%2BZLqcEKKsoeVvwhKlubyBjaf%2BKdsegbO4ZkCmi468lzkrId9gGzi9c8CSHOkcslVvU8SusN523hksYJ3MwCes3%2Fx4%2FnJ0jLWH0MWZEEJE4%2Fr2m6VhAc7V3OzfFRMKBJECvS7u1KYCmVruBHRzCtVpD%2Fors44tqMQk%2FL4GKb2XOalkebR8OXacop7kujJjkp%2BfGMbmRLkYToMG3XWspr5EDV6ctoUNjcNSlo0J8QayBKXsjIPnwQPOdUZc8IIDZNDPM8JE8mI8G9JrsuJ3kaexrbciNfI3xWTKny50%2BeZXbTea6ApOYoIBLNvYrCbjc23kGwYute4WnJ04SRSGQXi1rfYhJqgBBpnAhuiGGTBeGv%2FEw8rjywwY6pgFubgNJpfff%2BcG6S4lp4apaa%2FPV7kuZxcz40pUlifOvm%2F%2FuYIsLKXGm5dvH3riofyR5g542%2FzSkAGFA6sNO%2FO2WcM%2BgGg5Io0s0ELHGcSAuwkhnMGfNY4TaQqszDMR21mP3R9mXAziSe7KazmyVYTQgQclhyXyx%2F8m3Wwwebm1jl%2Fo7fDstIADGcJYEM3bO2uBE2l4ymNC%2FWlrtFyfeVrIsOIzVDvsQ&X-Amz-Signature=8d9082078de09b1ea0771486fa970e4f62761a7d16c01f679a093e226afecc18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
