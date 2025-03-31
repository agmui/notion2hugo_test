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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BEDE7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEndRn42%2BJ96x%2BS8LctllYbm%2BaQUNxu6fRoOSUI%2B1e0oAiBkHZE0TCgq%2FowDSXmnu1x2l6m%2Fpyf7ZnOn6%2Bce%2B9pGNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQdKpfSI0nIyJ5ZwlKtwDld%2F3oRPI1mWQBwTIE4LnLKqtBhMlpg%2BPwm7tAPblu6qtL6BTAAo3artRwr5tVgAPKU1c8jDONXGg%2BgP7smuH1ZEbPX%2BjNQWWf95bFzMSO0b%2FSCJzjj0w9xl58skFkm%2BWNerLadq0tKTnyobXEIKVUwGM3Q4TwHP6dH4Bep0xbaCrQjpLRuuVbM3PHVBiaa2lNtgSKo1lywvZBD%2FiX3ydfXaNPf0UfNpjLdOpgwlJn5lOWk00NQRxYGj64VDdggGvEDJh1P8PuAHiYKEh9B9aa%2FnNQ9QBrUu3sPIFjTvEBsDCa%2F%2F20C%2FLx1W%2BRvUKzfEJQvI0RTw%2FpG0b%2BI6VLyBM0kAtxTPdEh0OMMSH5MkSpDdpiA2Ij0uDn2XoyYsQVj8%2Fs4d%2Fj5O5a%2FyaOcGkfumSVYHVpCGUCUuPd8prMxjIGlABgpSF4TCIEpdk9qIYx8UBRTnmoYm%2FrNR1ZwpID1h4%2F8Y0ksj03cq%2FvWO%2B4jQXClbaqiR33Etcj9gt88rkz4%2BIdi0gif7PmUvcs2XMLsiYKn4nGakfHsDiX6IDoM%2BYQYwsgh8UC6htU7pPexcsn5ZrgGBMRsI6yO1zIU5266dimc7sE21epAcVfhRpnfwKfjsDvnnTq4V6QflL294w1YGrvwY6pgEL%2Bo0fYn59ceyDlpfpK3Rb9unYExBNlAjw2K6SESAeZBZ5qwkvT8DoSnnsI%2FqsP3YQWxO9ZNuaITb6MHLy9nJJExXcMuDt8Tw1CuZECntgyebKaULTU9%2B41%2BN6VPCf2IRhdGkWcE4WTBJ7Uahzd2K3f8FSa3K%2BVWAxAsjwsQ5e13i1bp%2Bxo%2FFoIM0lfeM84ec0fu3idCvfsfHPHMjWzZ%2BKFIh40R3y&X-Amz-Signature=119e1bf7ed2cc4c9b6e037d8d9a024a82f1e8f9421f4baca982621ec50d68a24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BEDE7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEndRn42%2BJ96x%2BS8LctllYbm%2BaQUNxu6fRoOSUI%2B1e0oAiBkHZE0TCgq%2FowDSXmnu1x2l6m%2Fpyf7ZnOn6%2Bce%2B9pGNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQdKpfSI0nIyJ5ZwlKtwDld%2F3oRPI1mWQBwTIE4LnLKqtBhMlpg%2BPwm7tAPblu6qtL6BTAAo3artRwr5tVgAPKU1c8jDONXGg%2BgP7smuH1ZEbPX%2BjNQWWf95bFzMSO0b%2FSCJzjj0w9xl58skFkm%2BWNerLadq0tKTnyobXEIKVUwGM3Q4TwHP6dH4Bep0xbaCrQjpLRuuVbM3PHVBiaa2lNtgSKo1lywvZBD%2FiX3ydfXaNPf0UfNpjLdOpgwlJn5lOWk00NQRxYGj64VDdggGvEDJh1P8PuAHiYKEh9B9aa%2FnNQ9QBrUu3sPIFjTvEBsDCa%2F%2F20C%2FLx1W%2BRvUKzfEJQvI0RTw%2FpG0b%2BI6VLyBM0kAtxTPdEh0OMMSH5MkSpDdpiA2Ij0uDn2XoyYsQVj8%2Fs4d%2Fj5O5a%2FyaOcGkfumSVYHVpCGUCUuPd8prMxjIGlABgpSF4TCIEpdk9qIYx8UBRTnmoYm%2FrNR1ZwpID1h4%2F8Y0ksj03cq%2FvWO%2B4jQXClbaqiR33Etcj9gt88rkz4%2BIdi0gif7PmUvcs2XMLsiYKn4nGakfHsDiX6IDoM%2BYQYwsgh8UC6htU7pPexcsn5ZrgGBMRsI6yO1zIU5266dimc7sE21epAcVfhRpnfwKfjsDvnnTq4V6QflL294w1YGrvwY6pgEL%2Bo0fYn59ceyDlpfpK3Rb9unYExBNlAjw2K6SESAeZBZ5qwkvT8DoSnnsI%2FqsP3YQWxO9ZNuaITb6MHLy9nJJExXcMuDt8Tw1CuZECntgyebKaULTU9%2B41%2BN6VPCf2IRhdGkWcE4WTBJ7Uahzd2K3f8FSa3K%2BVWAxAsjwsQ5e13i1bp%2Bxo%2FFoIM0lfeM84ec0fu3idCvfsfHPHMjWzZ%2BKFIh40R3y&X-Amz-Signature=d10dea29a6e8540674d85c61e4be251e0dd06bc040cee464e7e4906c684933d1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BEDE7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEndRn42%2BJ96x%2BS8LctllYbm%2BaQUNxu6fRoOSUI%2B1e0oAiBkHZE0TCgq%2FowDSXmnu1x2l6m%2Fpyf7ZnOn6%2Bce%2B9pGNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQdKpfSI0nIyJ5ZwlKtwDld%2F3oRPI1mWQBwTIE4LnLKqtBhMlpg%2BPwm7tAPblu6qtL6BTAAo3artRwr5tVgAPKU1c8jDONXGg%2BgP7smuH1ZEbPX%2BjNQWWf95bFzMSO0b%2FSCJzjj0w9xl58skFkm%2BWNerLadq0tKTnyobXEIKVUwGM3Q4TwHP6dH4Bep0xbaCrQjpLRuuVbM3PHVBiaa2lNtgSKo1lywvZBD%2FiX3ydfXaNPf0UfNpjLdOpgwlJn5lOWk00NQRxYGj64VDdggGvEDJh1P8PuAHiYKEh9B9aa%2FnNQ9QBrUu3sPIFjTvEBsDCa%2F%2F20C%2FLx1W%2BRvUKzfEJQvI0RTw%2FpG0b%2BI6VLyBM0kAtxTPdEh0OMMSH5MkSpDdpiA2Ij0uDn2XoyYsQVj8%2Fs4d%2Fj5O5a%2FyaOcGkfumSVYHVpCGUCUuPd8prMxjIGlABgpSF4TCIEpdk9qIYx8UBRTnmoYm%2FrNR1ZwpID1h4%2F8Y0ksj03cq%2FvWO%2B4jQXClbaqiR33Etcj9gt88rkz4%2BIdi0gif7PmUvcs2XMLsiYKn4nGakfHsDiX6IDoM%2BYQYwsgh8UC6htU7pPexcsn5ZrgGBMRsI6yO1zIU5266dimc7sE21epAcVfhRpnfwKfjsDvnnTq4V6QflL294w1YGrvwY6pgEL%2Bo0fYn59ceyDlpfpK3Rb9unYExBNlAjw2K6SESAeZBZ5qwkvT8DoSnnsI%2FqsP3YQWxO9ZNuaITb6MHLy9nJJExXcMuDt8Tw1CuZECntgyebKaULTU9%2B41%2BN6VPCf2IRhdGkWcE4WTBJ7Uahzd2K3f8FSa3K%2BVWAxAsjwsQ5e13i1bp%2Bxo%2FFoIM0lfeM84ec0fu3idCvfsfHPHMjWzZ%2BKFIh40R3y&X-Amz-Signature=1f1df7ff8984ab4e536767dbb6b6e370b29855610a367f4f9deb698fc33301e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BEDE7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEndRn42%2BJ96x%2BS8LctllYbm%2BaQUNxu6fRoOSUI%2B1e0oAiBkHZE0TCgq%2FowDSXmnu1x2l6m%2Fpyf7ZnOn6%2Bce%2B9pGNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQdKpfSI0nIyJ5ZwlKtwDld%2F3oRPI1mWQBwTIE4LnLKqtBhMlpg%2BPwm7tAPblu6qtL6BTAAo3artRwr5tVgAPKU1c8jDONXGg%2BgP7smuH1ZEbPX%2BjNQWWf95bFzMSO0b%2FSCJzjj0w9xl58skFkm%2BWNerLadq0tKTnyobXEIKVUwGM3Q4TwHP6dH4Bep0xbaCrQjpLRuuVbM3PHVBiaa2lNtgSKo1lywvZBD%2FiX3ydfXaNPf0UfNpjLdOpgwlJn5lOWk00NQRxYGj64VDdggGvEDJh1P8PuAHiYKEh9B9aa%2FnNQ9QBrUu3sPIFjTvEBsDCa%2F%2F20C%2FLx1W%2BRvUKzfEJQvI0RTw%2FpG0b%2BI6VLyBM0kAtxTPdEh0OMMSH5MkSpDdpiA2Ij0uDn2XoyYsQVj8%2Fs4d%2Fj5O5a%2FyaOcGkfumSVYHVpCGUCUuPd8prMxjIGlABgpSF4TCIEpdk9qIYx8UBRTnmoYm%2FrNR1ZwpID1h4%2F8Y0ksj03cq%2FvWO%2B4jQXClbaqiR33Etcj9gt88rkz4%2BIdi0gif7PmUvcs2XMLsiYKn4nGakfHsDiX6IDoM%2BYQYwsgh8UC6htU7pPexcsn5ZrgGBMRsI6yO1zIU5266dimc7sE21epAcVfhRpnfwKfjsDvnnTq4V6QflL294w1YGrvwY6pgEL%2Bo0fYn59ceyDlpfpK3Rb9unYExBNlAjw2K6SESAeZBZ5qwkvT8DoSnnsI%2FqsP3YQWxO9ZNuaITb6MHLy9nJJExXcMuDt8Tw1CuZECntgyebKaULTU9%2B41%2BN6VPCf2IRhdGkWcE4WTBJ7Uahzd2K3f8FSa3K%2BVWAxAsjwsQ5e13i1bp%2Bxo%2FFoIM0lfeM84ec0fu3idCvfsfHPHMjWzZ%2BKFIh40R3y&X-Amz-Signature=64f6b7269b13a9306de0f04de23161b24f29f023f6710bc9ef0dfbb383234810&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BEDE7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEndRn42%2BJ96x%2BS8LctllYbm%2BaQUNxu6fRoOSUI%2B1e0oAiBkHZE0TCgq%2FowDSXmnu1x2l6m%2Fpyf7ZnOn6%2Bce%2B9pGNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQdKpfSI0nIyJ5ZwlKtwDld%2F3oRPI1mWQBwTIE4LnLKqtBhMlpg%2BPwm7tAPblu6qtL6BTAAo3artRwr5tVgAPKU1c8jDONXGg%2BgP7smuH1ZEbPX%2BjNQWWf95bFzMSO0b%2FSCJzjj0w9xl58skFkm%2BWNerLadq0tKTnyobXEIKVUwGM3Q4TwHP6dH4Bep0xbaCrQjpLRuuVbM3PHVBiaa2lNtgSKo1lywvZBD%2FiX3ydfXaNPf0UfNpjLdOpgwlJn5lOWk00NQRxYGj64VDdggGvEDJh1P8PuAHiYKEh9B9aa%2FnNQ9QBrUu3sPIFjTvEBsDCa%2F%2F20C%2FLx1W%2BRvUKzfEJQvI0RTw%2FpG0b%2BI6VLyBM0kAtxTPdEh0OMMSH5MkSpDdpiA2Ij0uDn2XoyYsQVj8%2Fs4d%2Fj5O5a%2FyaOcGkfumSVYHVpCGUCUuPd8prMxjIGlABgpSF4TCIEpdk9qIYx8UBRTnmoYm%2FrNR1ZwpID1h4%2F8Y0ksj03cq%2FvWO%2B4jQXClbaqiR33Etcj9gt88rkz4%2BIdi0gif7PmUvcs2XMLsiYKn4nGakfHsDiX6IDoM%2BYQYwsgh8UC6htU7pPexcsn5ZrgGBMRsI6yO1zIU5266dimc7sE21epAcVfhRpnfwKfjsDvnnTq4V6QflL294w1YGrvwY6pgEL%2Bo0fYn59ceyDlpfpK3Rb9unYExBNlAjw2K6SESAeZBZ5qwkvT8DoSnnsI%2FqsP3YQWxO9ZNuaITb6MHLy9nJJExXcMuDt8Tw1CuZECntgyebKaULTU9%2B41%2BN6VPCf2IRhdGkWcE4WTBJ7Uahzd2K3f8FSa3K%2BVWAxAsjwsQ5e13i1bp%2Bxo%2FFoIM0lfeM84ec0fu3idCvfsfHPHMjWzZ%2BKFIh40R3y&X-Amz-Signature=6f75865b35acc23dcc609002116d975f895fd4aa2fb8267311b06762e0999b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
