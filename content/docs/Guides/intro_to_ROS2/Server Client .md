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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZAJA7G%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKrbViVqlS3S%2BdSOFiCA4WI7wfPTfkIp97qDBt6LoFEAiEA%2BmtYMTtDKkGkQcFSbpVmUMt52%2FpwQ9hS7jcNlo%2BP9Uoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOMTlaJ68Vk1B3%2F8oCrcA3JKtqR9jeDwnZReP5dWP4NyKyvK4KJ%2Fd6gJnn%2BhIX740gA2frbVh9tVrS8hyvEa8FG4d9JW0mOS1ma42Lp0s5k9scwxqrvewm6wh4ZG1OnhG5otHkaxU2gjZ63AdzzxjQxYUlolm8pFw9yoQyiGK8gSvfCw4v8xpHpxSFUNSO%2Fi8%2FCUMilsw0UFJBsrjmTHXOYDf22e%2FL9NKcPz86BESBQ7XfBDaWS0Ub42o8PtuNq8Kn54tzgPgLM7cjxaU%2FNJqGTEx8a6fn%2FWjoGZzirucJQrVuqVVNJA2O7ElqiBuMLQZAglUTCvBW4HT91PCGXA%2F9TKRpCjxdrNa83Uz0XIkjCdQWhCMvXfXlNDaHvJhSqxTxWfjBsJMPgB7kXSmdt4bRewycn7XD7dXYcPf4xZINTmNOQJBEQD9D0tOP%2B7GyTqistD8WWbsY2hs%2FxKn9M0eUpXN%2F8S%2BBjP84btLe6c4k07dwDNTGn5R3bNCDlF6fRX44WnSJHchXsG3CYbOsuXiVky7M6dnqFmxQEMqg84oXMlxMyqnhMTi4Dl4r1QxqQ84iewT1lSwyKZm9ruAaqWDdduh43JXQHEAv7I42Izxy0XZTRqu%2BTxzNz4EmqgCRHxaEoMj4ZudMQJlZsFMKHk28EGOqUBKyduyc%2B0JBut1ch0ikigRlYsckESIWQqHl0RWoVaih8zzIhgpB7r6w6TuUgGNYJOKATzWUTtuPh48kZNtdATmx8sfKcx7kvKm1PtYbGNtLOjvXGCmcYTDbVkBGeDwRIXr99bwsawrcGUlf%2BLmuzomvZI7%2F8Ggkn%2FNIQ7tVxrwozgVILJb8KYELy7nkQXaITUNSE1hiyM7dTIkxN5VzkIhft%2BoIkG&X-Amz-Signature=196f531a914857b225701d8ad7115c0633f9e84402d2d4929d39ca977afe78d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZAJA7G%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKrbViVqlS3S%2BdSOFiCA4WI7wfPTfkIp97qDBt6LoFEAiEA%2BmtYMTtDKkGkQcFSbpVmUMt52%2FpwQ9hS7jcNlo%2BP9Uoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOMTlaJ68Vk1B3%2F8oCrcA3JKtqR9jeDwnZReP5dWP4NyKyvK4KJ%2Fd6gJnn%2BhIX740gA2frbVh9tVrS8hyvEa8FG4d9JW0mOS1ma42Lp0s5k9scwxqrvewm6wh4ZG1OnhG5otHkaxU2gjZ63AdzzxjQxYUlolm8pFw9yoQyiGK8gSvfCw4v8xpHpxSFUNSO%2Fi8%2FCUMilsw0UFJBsrjmTHXOYDf22e%2FL9NKcPz86BESBQ7XfBDaWS0Ub42o8PtuNq8Kn54tzgPgLM7cjxaU%2FNJqGTEx8a6fn%2FWjoGZzirucJQrVuqVVNJA2O7ElqiBuMLQZAglUTCvBW4HT91PCGXA%2F9TKRpCjxdrNa83Uz0XIkjCdQWhCMvXfXlNDaHvJhSqxTxWfjBsJMPgB7kXSmdt4bRewycn7XD7dXYcPf4xZINTmNOQJBEQD9D0tOP%2B7GyTqistD8WWbsY2hs%2FxKn9M0eUpXN%2F8S%2BBjP84btLe6c4k07dwDNTGn5R3bNCDlF6fRX44WnSJHchXsG3CYbOsuXiVky7M6dnqFmxQEMqg84oXMlxMyqnhMTi4Dl4r1QxqQ84iewT1lSwyKZm9ruAaqWDdduh43JXQHEAv7I42Izxy0XZTRqu%2BTxzNz4EmqgCRHxaEoMj4ZudMQJlZsFMKHk28EGOqUBKyduyc%2B0JBut1ch0ikigRlYsckESIWQqHl0RWoVaih8zzIhgpB7r6w6TuUgGNYJOKATzWUTtuPh48kZNtdATmx8sfKcx7kvKm1PtYbGNtLOjvXGCmcYTDbVkBGeDwRIXr99bwsawrcGUlf%2BLmuzomvZI7%2F8Ggkn%2FNIQ7tVxrwozgVILJb8KYELy7nkQXaITUNSE1hiyM7dTIkxN5VzkIhft%2BoIkG&X-Amz-Signature=c279952a23850d2a734bf5aacc8955747028d39c869b81b7d871417c60aa3b00&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZAJA7G%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKrbViVqlS3S%2BdSOFiCA4WI7wfPTfkIp97qDBt6LoFEAiEA%2BmtYMTtDKkGkQcFSbpVmUMt52%2FpwQ9hS7jcNlo%2BP9Uoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOMTlaJ68Vk1B3%2F8oCrcA3JKtqR9jeDwnZReP5dWP4NyKyvK4KJ%2Fd6gJnn%2BhIX740gA2frbVh9tVrS8hyvEa8FG4d9JW0mOS1ma42Lp0s5k9scwxqrvewm6wh4ZG1OnhG5otHkaxU2gjZ63AdzzxjQxYUlolm8pFw9yoQyiGK8gSvfCw4v8xpHpxSFUNSO%2Fi8%2FCUMilsw0UFJBsrjmTHXOYDf22e%2FL9NKcPz86BESBQ7XfBDaWS0Ub42o8PtuNq8Kn54tzgPgLM7cjxaU%2FNJqGTEx8a6fn%2FWjoGZzirucJQrVuqVVNJA2O7ElqiBuMLQZAglUTCvBW4HT91PCGXA%2F9TKRpCjxdrNa83Uz0XIkjCdQWhCMvXfXlNDaHvJhSqxTxWfjBsJMPgB7kXSmdt4bRewycn7XD7dXYcPf4xZINTmNOQJBEQD9D0tOP%2B7GyTqistD8WWbsY2hs%2FxKn9M0eUpXN%2F8S%2BBjP84btLe6c4k07dwDNTGn5R3bNCDlF6fRX44WnSJHchXsG3CYbOsuXiVky7M6dnqFmxQEMqg84oXMlxMyqnhMTi4Dl4r1QxqQ84iewT1lSwyKZm9ruAaqWDdduh43JXQHEAv7I42Izxy0XZTRqu%2BTxzNz4EmqgCRHxaEoMj4ZudMQJlZsFMKHk28EGOqUBKyduyc%2B0JBut1ch0ikigRlYsckESIWQqHl0RWoVaih8zzIhgpB7r6w6TuUgGNYJOKATzWUTtuPh48kZNtdATmx8sfKcx7kvKm1PtYbGNtLOjvXGCmcYTDbVkBGeDwRIXr99bwsawrcGUlf%2BLmuzomvZI7%2F8Ggkn%2FNIQ7tVxrwozgVILJb8KYELy7nkQXaITUNSE1hiyM7dTIkxN5VzkIhft%2BoIkG&X-Amz-Signature=4f5b43657480ab110b1627c5d13ee15dd77cf457f643477239c20a31e1fb4443&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZAJA7G%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKrbViVqlS3S%2BdSOFiCA4WI7wfPTfkIp97qDBt6LoFEAiEA%2BmtYMTtDKkGkQcFSbpVmUMt52%2FpwQ9hS7jcNlo%2BP9Uoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOMTlaJ68Vk1B3%2F8oCrcA3JKtqR9jeDwnZReP5dWP4NyKyvK4KJ%2Fd6gJnn%2BhIX740gA2frbVh9tVrS8hyvEa8FG4d9JW0mOS1ma42Lp0s5k9scwxqrvewm6wh4ZG1OnhG5otHkaxU2gjZ63AdzzxjQxYUlolm8pFw9yoQyiGK8gSvfCw4v8xpHpxSFUNSO%2Fi8%2FCUMilsw0UFJBsrjmTHXOYDf22e%2FL9NKcPz86BESBQ7XfBDaWS0Ub42o8PtuNq8Kn54tzgPgLM7cjxaU%2FNJqGTEx8a6fn%2FWjoGZzirucJQrVuqVVNJA2O7ElqiBuMLQZAglUTCvBW4HT91PCGXA%2F9TKRpCjxdrNa83Uz0XIkjCdQWhCMvXfXlNDaHvJhSqxTxWfjBsJMPgB7kXSmdt4bRewycn7XD7dXYcPf4xZINTmNOQJBEQD9D0tOP%2B7GyTqistD8WWbsY2hs%2FxKn9M0eUpXN%2F8S%2BBjP84btLe6c4k07dwDNTGn5R3bNCDlF6fRX44WnSJHchXsG3CYbOsuXiVky7M6dnqFmxQEMqg84oXMlxMyqnhMTi4Dl4r1QxqQ84iewT1lSwyKZm9ruAaqWDdduh43JXQHEAv7I42Izxy0XZTRqu%2BTxzNz4EmqgCRHxaEoMj4ZudMQJlZsFMKHk28EGOqUBKyduyc%2B0JBut1ch0ikigRlYsckESIWQqHl0RWoVaih8zzIhgpB7r6w6TuUgGNYJOKATzWUTtuPh48kZNtdATmx8sfKcx7kvKm1PtYbGNtLOjvXGCmcYTDbVkBGeDwRIXr99bwsawrcGUlf%2BLmuzomvZI7%2F8Ggkn%2FNIQ7tVxrwozgVILJb8KYELy7nkQXaITUNSE1hiyM7dTIkxN5VzkIhft%2BoIkG&X-Amz-Signature=c6931ba3c2aed75e6275fbf52f1e69d73b9cc33bb1c2d82b83c6676d5d99ddbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZAJA7G%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKrbViVqlS3S%2BdSOFiCA4WI7wfPTfkIp97qDBt6LoFEAiEA%2BmtYMTtDKkGkQcFSbpVmUMt52%2FpwQ9hS7jcNlo%2BP9Uoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOMTlaJ68Vk1B3%2F8oCrcA3JKtqR9jeDwnZReP5dWP4NyKyvK4KJ%2Fd6gJnn%2BhIX740gA2frbVh9tVrS8hyvEa8FG4d9JW0mOS1ma42Lp0s5k9scwxqrvewm6wh4ZG1OnhG5otHkaxU2gjZ63AdzzxjQxYUlolm8pFw9yoQyiGK8gSvfCw4v8xpHpxSFUNSO%2Fi8%2FCUMilsw0UFJBsrjmTHXOYDf22e%2FL9NKcPz86BESBQ7XfBDaWS0Ub42o8PtuNq8Kn54tzgPgLM7cjxaU%2FNJqGTEx8a6fn%2FWjoGZzirucJQrVuqVVNJA2O7ElqiBuMLQZAglUTCvBW4HT91PCGXA%2F9TKRpCjxdrNa83Uz0XIkjCdQWhCMvXfXlNDaHvJhSqxTxWfjBsJMPgB7kXSmdt4bRewycn7XD7dXYcPf4xZINTmNOQJBEQD9D0tOP%2B7GyTqistD8WWbsY2hs%2FxKn9M0eUpXN%2F8S%2BBjP84btLe6c4k07dwDNTGn5R3bNCDlF6fRX44WnSJHchXsG3CYbOsuXiVky7M6dnqFmxQEMqg84oXMlxMyqnhMTi4Dl4r1QxqQ84iewT1lSwyKZm9ruAaqWDdduh43JXQHEAv7I42Izxy0XZTRqu%2BTxzNz4EmqgCRHxaEoMj4ZudMQJlZsFMKHk28EGOqUBKyduyc%2B0JBut1ch0ikigRlYsckESIWQqHl0RWoVaih8zzIhgpB7r6w6TuUgGNYJOKATzWUTtuPh48kZNtdATmx8sfKcx7kvKm1PtYbGNtLOjvXGCmcYTDbVkBGeDwRIXr99bwsawrcGUlf%2BLmuzomvZI7%2F8Ggkn%2FNIQ7tVxrwozgVILJb8KYELy7nkQXaITUNSE1hiyM7dTIkxN5VzkIhft%2BoIkG&X-Amz-Signature=4feb0823cc4ef6f14a34de53e54632731dce36e5f4e050ba97a42043584e44e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
