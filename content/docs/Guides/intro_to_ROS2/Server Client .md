---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHR5TMOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmC3R4JKC2QqBPtd6kuVyXrd%2B4t9qNWAa9ujpTZWIyEQIgOVRsz2KXaNl9H0TKgr%2BR%2FadndKUuMzPcgvSLtLU4lj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNc1C%2BKewT8Z53T4iSrcA21XEwKiEp%2FuGkLV4JKvcalWk56yoayt6Q%2FNRwDVf3E09Yrvomq5EnhtrIWF4J4lSTsFeVB57FGLVG7huE9YUKB34%2BRGydkSu1wKzGGjVjUw9dfSIp%2B8X%2FaNV%2BVVrUxttHDzTZhHwGr8MwUYbLsunC8WBv416F4JP%2Fl4zBwCDjAYNoj6Mf3UWmgjReGDIBKdcZH13Aw5wU6vnHRKvwbYiXDeILkceizrdn%2BReg4yvD%2FyYfYJ2aq7XsGM4Hb1xp4uMkQDs6EhJTSM9wtIP3y9SVWS2cX5V4Z7RRExuT%2FDT4ndPUlpojwWh2AsuDkQ%2BffnWuF6STZ%2FE4Bifgw93XcILDX%2BmcVaqorCLX%2FHJBXLOe62wzDgDcvXnT386WmRIF%2FVLvWA28Xo8kiZxc9Ma57rtMhwq4dEuFUc2cCkm0kLkUD7wKMPjRPU%2Fj6cMAjszol2m5GaSj2kPvCWbOVClxmW8XkXaUGgNqjHMILIe8z6D8QlAQy2ITcX9WT3QcvnLyeep3iNp6HEPl0Zw6T5YLd4RWVtCv5RFYXaLAa3%2FGUSlio6QV4DOKQ%2F6CxrtXh0U8SB13nCeg%2B5xADjrDBnPflG47Tw%2FydWlExxKd1h3ay9U1H0QDyMQk4AlPt2SozuMJPEucQGOqUBuiAPio%2BfXL%2FTkHVbyKCvfZsiGlnXPjewhfVzvoUhLmf6R%2B6WXzSqjXfpCPsFy%2FSEUle%2FhCJcnHg1tEYDietyOFd7hh3IteaKsmsLlcPXJixcrtZNqN1DQ3yucH385gDSujMICrfrXRDOhQJ8M3Ta%2BTA9tvUJXAlKsiqnIYZyPeKxz%2BaG0R3jGbF%2Bxx6PpyPg58ZcrBbGh1S9CwhNDeKzre3U1B4W&X-Amz-Signature=401a4bb31f9509230a28a701e771196563a828f9bd949625ba2a01a6a9ee9f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHR5TMOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmC3R4JKC2QqBPtd6kuVyXrd%2B4t9qNWAa9ujpTZWIyEQIgOVRsz2KXaNl9H0TKgr%2BR%2FadndKUuMzPcgvSLtLU4lj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNc1C%2BKewT8Z53T4iSrcA21XEwKiEp%2FuGkLV4JKvcalWk56yoayt6Q%2FNRwDVf3E09Yrvomq5EnhtrIWF4J4lSTsFeVB57FGLVG7huE9YUKB34%2BRGydkSu1wKzGGjVjUw9dfSIp%2B8X%2FaNV%2BVVrUxttHDzTZhHwGr8MwUYbLsunC8WBv416F4JP%2Fl4zBwCDjAYNoj6Mf3UWmgjReGDIBKdcZH13Aw5wU6vnHRKvwbYiXDeILkceizrdn%2BReg4yvD%2FyYfYJ2aq7XsGM4Hb1xp4uMkQDs6EhJTSM9wtIP3y9SVWS2cX5V4Z7RRExuT%2FDT4ndPUlpojwWh2AsuDkQ%2BffnWuF6STZ%2FE4Bifgw93XcILDX%2BmcVaqorCLX%2FHJBXLOe62wzDgDcvXnT386WmRIF%2FVLvWA28Xo8kiZxc9Ma57rtMhwq4dEuFUc2cCkm0kLkUD7wKMPjRPU%2Fj6cMAjszol2m5GaSj2kPvCWbOVClxmW8XkXaUGgNqjHMILIe8z6D8QlAQy2ITcX9WT3QcvnLyeep3iNp6HEPl0Zw6T5YLd4RWVtCv5RFYXaLAa3%2FGUSlio6QV4DOKQ%2F6CxrtXh0U8SB13nCeg%2B5xADjrDBnPflG47Tw%2FydWlExxKd1h3ay9U1H0QDyMQk4AlPt2SozuMJPEucQGOqUBuiAPio%2BfXL%2FTkHVbyKCvfZsiGlnXPjewhfVzvoUhLmf6R%2B6WXzSqjXfpCPsFy%2FSEUle%2FhCJcnHg1tEYDietyOFd7hh3IteaKsmsLlcPXJixcrtZNqN1DQ3yucH385gDSujMICrfrXRDOhQJ8M3Ta%2BTA9tvUJXAlKsiqnIYZyPeKxz%2BaG0R3jGbF%2Bxx6PpyPg58ZcrBbGh1S9CwhNDeKzre3U1B4W&X-Amz-Signature=ee6eccd89d11c87d111e43b6c1e0af92ee6a4c4ef339e121d38158135de15b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHR5TMOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmC3R4JKC2QqBPtd6kuVyXrd%2B4t9qNWAa9ujpTZWIyEQIgOVRsz2KXaNl9H0TKgr%2BR%2FadndKUuMzPcgvSLtLU4lj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNc1C%2BKewT8Z53T4iSrcA21XEwKiEp%2FuGkLV4JKvcalWk56yoayt6Q%2FNRwDVf3E09Yrvomq5EnhtrIWF4J4lSTsFeVB57FGLVG7huE9YUKB34%2BRGydkSu1wKzGGjVjUw9dfSIp%2B8X%2FaNV%2BVVrUxttHDzTZhHwGr8MwUYbLsunC8WBv416F4JP%2Fl4zBwCDjAYNoj6Mf3UWmgjReGDIBKdcZH13Aw5wU6vnHRKvwbYiXDeILkceizrdn%2BReg4yvD%2FyYfYJ2aq7XsGM4Hb1xp4uMkQDs6EhJTSM9wtIP3y9SVWS2cX5V4Z7RRExuT%2FDT4ndPUlpojwWh2AsuDkQ%2BffnWuF6STZ%2FE4Bifgw93XcILDX%2BmcVaqorCLX%2FHJBXLOe62wzDgDcvXnT386WmRIF%2FVLvWA28Xo8kiZxc9Ma57rtMhwq4dEuFUc2cCkm0kLkUD7wKMPjRPU%2Fj6cMAjszol2m5GaSj2kPvCWbOVClxmW8XkXaUGgNqjHMILIe8z6D8QlAQy2ITcX9WT3QcvnLyeep3iNp6HEPl0Zw6T5YLd4RWVtCv5RFYXaLAa3%2FGUSlio6QV4DOKQ%2F6CxrtXh0U8SB13nCeg%2B5xADjrDBnPflG47Tw%2FydWlExxKd1h3ay9U1H0QDyMQk4AlPt2SozuMJPEucQGOqUBuiAPio%2BfXL%2FTkHVbyKCvfZsiGlnXPjewhfVzvoUhLmf6R%2B6WXzSqjXfpCPsFy%2FSEUle%2FhCJcnHg1tEYDietyOFd7hh3IteaKsmsLlcPXJixcrtZNqN1DQ3yucH385gDSujMICrfrXRDOhQJ8M3Ta%2BTA9tvUJXAlKsiqnIYZyPeKxz%2BaG0R3jGbF%2Bxx6PpyPg58ZcrBbGh1S9CwhNDeKzre3U1B4W&X-Amz-Signature=19582ae329ef9fe6a2676159b998e6bef966bc2aeed289676a5bd5fbf556f410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHR5TMOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmC3R4JKC2QqBPtd6kuVyXrd%2B4t9qNWAa9ujpTZWIyEQIgOVRsz2KXaNl9H0TKgr%2BR%2FadndKUuMzPcgvSLtLU4lj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNc1C%2BKewT8Z53T4iSrcA21XEwKiEp%2FuGkLV4JKvcalWk56yoayt6Q%2FNRwDVf3E09Yrvomq5EnhtrIWF4J4lSTsFeVB57FGLVG7huE9YUKB34%2BRGydkSu1wKzGGjVjUw9dfSIp%2B8X%2FaNV%2BVVrUxttHDzTZhHwGr8MwUYbLsunC8WBv416F4JP%2Fl4zBwCDjAYNoj6Mf3UWmgjReGDIBKdcZH13Aw5wU6vnHRKvwbYiXDeILkceizrdn%2BReg4yvD%2FyYfYJ2aq7XsGM4Hb1xp4uMkQDs6EhJTSM9wtIP3y9SVWS2cX5V4Z7RRExuT%2FDT4ndPUlpojwWh2AsuDkQ%2BffnWuF6STZ%2FE4Bifgw93XcILDX%2BmcVaqorCLX%2FHJBXLOe62wzDgDcvXnT386WmRIF%2FVLvWA28Xo8kiZxc9Ma57rtMhwq4dEuFUc2cCkm0kLkUD7wKMPjRPU%2Fj6cMAjszol2m5GaSj2kPvCWbOVClxmW8XkXaUGgNqjHMILIe8z6D8QlAQy2ITcX9WT3QcvnLyeep3iNp6HEPl0Zw6T5YLd4RWVtCv5RFYXaLAa3%2FGUSlio6QV4DOKQ%2F6CxrtXh0U8SB13nCeg%2B5xADjrDBnPflG47Tw%2FydWlExxKd1h3ay9U1H0QDyMQk4AlPt2SozuMJPEucQGOqUBuiAPio%2BfXL%2FTkHVbyKCvfZsiGlnXPjewhfVzvoUhLmf6R%2B6WXzSqjXfpCPsFy%2FSEUle%2FhCJcnHg1tEYDietyOFd7hh3IteaKsmsLlcPXJixcrtZNqN1DQ3yucH385gDSujMICrfrXRDOhQJ8M3Ta%2BTA9tvUJXAlKsiqnIYZyPeKxz%2BaG0R3jGbF%2Bxx6PpyPg58ZcrBbGh1S9CwhNDeKzre3U1B4W&X-Amz-Signature=a3f43d29f86c92e7014357cc1a45ad85e721245062ee581b9b43533f6f1268e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHR5TMOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmC3R4JKC2QqBPtd6kuVyXrd%2B4t9qNWAa9ujpTZWIyEQIgOVRsz2KXaNl9H0TKgr%2BR%2FadndKUuMzPcgvSLtLU4lj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNc1C%2BKewT8Z53T4iSrcA21XEwKiEp%2FuGkLV4JKvcalWk56yoayt6Q%2FNRwDVf3E09Yrvomq5EnhtrIWF4J4lSTsFeVB57FGLVG7huE9YUKB34%2BRGydkSu1wKzGGjVjUw9dfSIp%2B8X%2FaNV%2BVVrUxttHDzTZhHwGr8MwUYbLsunC8WBv416F4JP%2Fl4zBwCDjAYNoj6Mf3UWmgjReGDIBKdcZH13Aw5wU6vnHRKvwbYiXDeILkceizrdn%2BReg4yvD%2FyYfYJ2aq7XsGM4Hb1xp4uMkQDs6EhJTSM9wtIP3y9SVWS2cX5V4Z7RRExuT%2FDT4ndPUlpojwWh2AsuDkQ%2BffnWuF6STZ%2FE4Bifgw93XcILDX%2BmcVaqorCLX%2FHJBXLOe62wzDgDcvXnT386WmRIF%2FVLvWA28Xo8kiZxc9Ma57rtMhwq4dEuFUc2cCkm0kLkUD7wKMPjRPU%2Fj6cMAjszol2m5GaSj2kPvCWbOVClxmW8XkXaUGgNqjHMILIe8z6D8QlAQy2ITcX9WT3QcvnLyeep3iNp6HEPl0Zw6T5YLd4RWVtCv5RFYXaLAa3%2FGUSlio6QV4DOKQ%2F6CxrtXh0U8SB13nCeg%2B5xADjrDBnPflG47Tw%2FydWlExxKd1h3ay9U1H0QDyMQk4AlPt2SozuMJPEucQGOqUBuiAPio%2BfXL%2FTkHVbyKCvfZsiGlnXPjewhfVzvoUhLmf6R%2B6WXzSqjXfpCPsFy%2FSEUle%2FhCJcnHg1tEYDietyOFd7hh3IteaKsmsLlcPXJixcrtZNqN1DQ3yucH385gDSujMICrfrXRDOhQJ8M3Ta%2BTA9tvUJXAlKsiqnIYZyPeKxz%2BaG0R3jGbF%2Bxx6PpyPg58ZcrBbGh1S9CwhNDeKzre3U1B4W&X-Amz-Signature=f48d53c91cf37c15869c966156feed14c9d3dad757f123e128b66dda98f22f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
