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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGDGAGL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDPOmURkUM4ooAi9UMxxIv%2Bz1b0MfiO0N%2BroqxVHzXSiAIgGso%2FaIW%2F81HbpwPDrPARn8x26dVXiYirxhQg3rG2%2BaUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMIX%2BBT0NjePRzh7hircA0DeWhaPpHUxg15D%2BDbOT3JHBbLUctkHK9iYhFMc%2F1xJcatbUUSn8LzzbR1Hg2XjCq%2F1wUazjJ7%2Bhgy87j09TdFYpEnfvxQgPSAEGQsdVYasLLCtGAYDBVTc68xgdsUgaUQiPlwn0tBBLULM%2BtBPGG%2Byz9cV8C%2FbrTGTj1CxbXvt4luk%2ByQJBAjxUfwpCDarPQzcmz52TmJF0oMJPil%2F%2FtCCwQcqAePtgGgnQdQ8PEhRTWJ%2FjnTuPhQ4GwVeVNQsH9VvBzjw2Y6OYa2zEKVHgamEUT8PZLkvfDfWjCetYgjnARNiLY%2F3kTrkfGjsuTekayrkg0McA84d0Vv2PCZgZEC2mxWh9cmCMc5RYrh%2BVwIB0HWD3TJ%2FJ839BzTylqhq7nBo7rHCs86ikZh1N16OKyaDqjfXCNPpul8iX4Sr2pWNDvyHLp8j4I6s3LzhX1WFLoMfU8Wukq%2BP7H7THmzrmH9KuC0%2BjBHnT4YvMCaYJyBX819kv%2BOo0gGKumEzF9K6oTGwbVSPn1TQ7G67Hrp1ACwkL62%2Bw%2FYeuJMdyZRc2QvEnjwlgb34dGDUl9QbiEw%2F5ZxbdrdEP8NR8WRMwYYoiw0Pufw3pVAr7oUBu9E1wl07%2F%2BNJLFg1zlx2dRu3MKrw970GOqUBSJzh3F5cl5LsQLwDdZvbDwCW96iSYKEZAruDPtCilgNLvg73FaIQRhNSPUsrNVLAdXlc363egvF7OIAAhBhzEGl33XvjS%2FoVSFDEYFIPVA6KWDty%2BsewVoYhHyz0kA8YssKNwizfVdnQl%2BnTQ79bUjij4l1VpMSZPNQSPWM68%2BzwKN6tZkvlSUIR2JV265kFWk9O0nWBNdCmBOJK2Jm5Rj75l7Qy&X-Amz-Signature=50990f059345ec0288ca6b01b3e2e7cdb8e4eb522a32221da81fca2f34d64abb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGDGAGL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDPOmURkUM4ooAi9UMxxIv%2Bz1b0MfiO0N%2BroqxVHzXSiAIgGso%2FaIW%2F81HbpwPDrPARn8x26dVXiYirxhQg3rG2%2BaUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMIX%2BBT0NjePRzh7hircA0DeWhaPpHUxg15D%2BDbOT3JHBbLUctkHK9iYhFMc%2F1xJcatbUUSn8LzzbR1Hg2XjCq%2F1wUazjJ7%2Bhgy87j09TdFYpEnfvxQgPSAEGQsdVYasLLCtGAYDBVTc68xgdsUgaUQiPlwn0tBBLULM%2BtBPGG%2Byz9cV8C%2FbrTGTj1CxbXvt4luk%2ByQJBAjxUfwpCDarPQzcmz52TmJF0oMJPil%2F%2FtCCwQcqAePtgGgnQdQ8PEhRTWJ%2FjnTuPhQ4GwVeVNQsH9VvBzjw2Y6OYa2zEKVHgamEUT8PZLkvfDfWjCetYgjnARNiLY%2F3kTrkfGjsuTekayrkg0McA84d0Vv2PCZgZEC2mxWh9cmCMc5RYrh%2BVwIB0HWD3TJ%2FJ839BzTylqhq7nBo7rHCs86ikZh1N16OKyaDqjfXCNPpul8iX4Sr2pWNDvyHLp8j4I6s3LzhX1WFLoMfU8Wukq%2BP7H7THmzrmH9KuC0%2BjBHnT4YvMCaYJyBX819kv%2BOo0gGKumEzF9K6oTGwbVSPn1TQ7G67Hrp1ACwkL62%2Bw%2FYeuJMdyZRc2QvEnjwlgb34dGDUl9QbiEw%2F5ZxbdrdEP8NR8WRMwYYoiw0Pufw3pVAr7oUBu9E1wl07%2F%2BNJLFg1zlx2dRu3MKrw970GOqUBSJzh3F5cl5LsQLwDdZvbDwCW96iSYKEZAruDPtCilgNLvg73FaIQRhNSPUsrNVLAdXlc363egvF7OIAAhBhzEGl33XvjS%2FoVSFDEYFIPVA6KWDty%2BsewVoYhHyz0kA8YssKNwizfVdnQl%2BnTQ79bUjij4l1VpMSZPNQSPWM68%2BzwKN6tZkvlSUIR2JV265kFWk9O0nWBNdCmBOJK2Jm5Rj75l7Qy&X-Amz-Signature=0b278519e515f48418b8cdd3943fb9579c08c6efa4dfea768a490cf39f068aee&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGDGAGL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDPOmURkUM4ooAi9UMxxIv%2Bz1b0MfiO0N%2BroqxVHzXSiAIgGso%2FaIW%2F81HbpwPDrPARn8x26dVXiYirxhQg3rG2%2BaUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMIX%2BBT0NjePRzh7hircA0DeWhaPpHUxg15D%2BDbOT3JHBbLUctkHK9iYhFMc%2F1xJcatbUUSn8LzzbR1Hg2XjCq%2F1wUazjJ7%2Bhgy87j09TdFYpEnfvxQgPSAEGQsdVYasLLCtGAYDBVTc68xgdsUgaUQiPlwn0tBBLULM%2BtBPGG%2Byz9cV8C%2FbrTGTj1CxbXvt4luk%2ByQJBAjxUfwpCDarPQzcmz52TmJF0oMJPil%2F%2FtCCwQcqAePtgGgnQdQ8PEhRTWJ%2FjnTuPhQ4GwVeVNQsH9VvBzjw2Y6OYa2zEKVHgamEUT8PZLkvfDfWjCetYgjnARNiLY%2F3kTrkfGjsuTekayrkg0McA84d0Vv2PCZgZEC2mxWh9cmCMc5RYrh%2BVwIB0HWD3TJ%2FJ839BzTylqhq7nBo7rHCs86ikZh1N16OKyaDqjfXCNPpul8iX4Sr2pWNDvyHLp8j4I6s3LzhX1WFLoMfU8Wukq%2BP7H7THmzrmH9KuC0%2BjBHnT4YvMCaYJyBX819kv%2BOo0gGKumEzF9K6oTGwbVSPn1TQ7G67Hrp1ACwkL62%2Bw%2FYeuJMdyZRc2QvEnjwlgb34dGDUl9QbiEw%2F5ZxbdrdEP8NR8WRMwYYoiw0Pufw3pVAr7oUBu9E1wl07%2F%2BNJLFg1zlx2dRu3MKrw970GOqUBSJzh3F5cl5LsQLwDdZvbDwCW96iSYKEZAruDPtCilgNLvg73FaIQRhNSPUsrNVLAdXlc363egvF7OIAAhBhzEGl33XvjS%2FoVSFDEYFIPVA6KWDty%2BsewVoYhHyz0kA8YssKNwizfVdnQl%2BnTQ79bUjij4l1VpMSZPNQSPWM68%2BzwKN6tZkvlSUIR2JV265kFWk9O0nWBNdCmBOJK2Jm5Rj75l7Qy&X-Amz-Signature=83f0447260baf691935eafd7b6b50a7597ba39be80639fc9184d766190f70c66&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGDGAGL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDPOmURkUM4ooAi9UMxxIv%2Bz1b0MfiO0N%2BroqxVHzXSiAIgGso%2FaIW%2F81HbpwPDrPARn8x26dVXiYirxhQg3rG2%2BaUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMIX%2BBT0NjePRzh7hircA0DeWhaPpHUxg15D%2BDbOT3JHBbLUctkHK9iYhFMc%2F1xJcatbUUSn8LzzbR1Hg2XjCq%2F1wUazjJ7%2Bhgy87j09TdFYpEnfvxQgPSAEGQsdVYasLLCtGAYDBVTc68xgdsUgaUQiPlwn0tBBLULM%2BtBPGG%2Byz9cV8C%2FbrTGTj1CxbXvt4luk%2ByQJBAjxUfwpCDarPQzcmz52TmJF0oMJPil%2F%2FtCCwQcqAePtgGgnQdQ8PEhRTWJ%2FjnTuPhQ4GwVeVNQsH9VvBzjw2Y6OYa2zEKVHgamEUT8PZLkvfDfWjCetYgjnARNiLY%2F3kTrkfGjsuTekayrkg0McA84d0Vv2PCZgZEC2mxWh9cmCMc5RYrh%2BVwIB0HWD3TJ%2FJ839BzTylqhq7nBo7rHCs86ikZh1N16OKyaDqjfXCNPpul8iX4Sr2pWNDvyHLp8j4I6s3LzhX1WFLoMfU8Wukq%2BP7H7THmzrmH9KuC0%2BjBHnT4YvMCaYJyBX819kv%2BOo0gGKumEzF9K6oTGwbVSPn1TQ7G67Hrp1ACwkL62%2Bw%2FYeuJMdyZRc2QvEnjwlgb34dGDUl9QbiEw%2F5ZxbdrdEP8NR8WRMwYYoiw0Pufw3pVAr7oUBu9E1wl07%2F%2BNJLFg1zlx2dRu3MKrw970GOqUBSJzh3F5cl5LsQLwDdZvbDwCW96iSYKEZAruDPtCilgNLvg73FaIQRhNSPUsrNVLAdXlc363egvF7OIAAhBhzEGl33XvjS%2FoVSFDEYFIPVA6KWDty%2BsewVoYhHyz0kA8YssKNwizfVdnQl%2BnTQ79bUjij4l1VpMSZPNQSPWM68%2BzwKN6tZkvlSUIR2JV265kFWk9O0nWBNdCmBOJK2Jm5Rj75l7Qy&X-Amz-Signature=d69d868d51a322e1e210e371ca17106dcf3d9663a24f99f490a1f6f3ead3d914&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGDGAGL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDPOmURkUM4ooAi9UMxxIv%2Bz1b0MfiO0N%2BroqxVHzXSiAIgGso%2FaIW%2F81HbpwPDrPARn8x26dVXiYirxhQg3rG2%2BaUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMIX%2BBT0NjePRzh7hircA0DeWhaPpHUxg15D%2BDbOT3JHBbLUctkHK9iYhFMc%2F1xJcatbUUSn8LzzbR1Hg2XjCq%2F1wUazjJ7%2Bhgy87j09TdFYpEnfvxQgPSAEGQsdVYasLLCtGAYDBVTc68xgdsUgaUQiPlwn0tBBLULM%2BtBPGG%2Byz9cV8C%2FbrTGTj1CxbXvt4luk%2ByQJBAjxUfwpCDarPQzcmz52TmJF0oMJPil%2F%2FtCCwQcqAePtgGgnQdQ8PEhRTWJ%2FjnTuPhQ4GwVeVNQsH9VvBzjw2Y6OYa2zEKVHgamEUT8PZLkvfDfWjCetYgjnARNiLY%2F3kTrkfGjsuTekayrkg0McA84d0Vv2PCZgZEC2mxWh9cmCMc5RYrh%2BVwIB0HWD3TJ%2FJ839BzTylqhq7nBo7rHCs86ikZh1N16OKyaDqjfXCNPpul8iX4Sr2pWNDvyHLp8j4I6s3LzhX1WFLoMfU8Wukq%2BP7H7THmzrmH9KuC0%2BjBHnT4YvMCaYJyBX819kv%2BOo0gGKumEzF9K6oTGwbVSPn1TQ7G67Hrp1ACwkL62%2Bw%2FYeuJMdyZRc2QvEnjwlgb34dGDUl9QbiEw%2F5ZxbdrdEP8NR8WRMwYYoiw0Pufw3pVAr7oUBu9E1wl07%2F%2BNJLFg1zlx2dRu3MKrw970GOqUBSJzh3F5cl5LsQLwDdZvbDwCW96iSYKEZAruDPtCilgNLvg73FaIQRhNSPUsrNVLAdXlc363egvF7OIAAhBhzEGl33XvjS%2FoVSFDEYFIPVA6KWDty%2BsewVoYhHyz0kA8YssKNwizfVdnQl%2BnTQ79bUjij4l1VpMSZPNQSPWM68%2BzwKN6tZkvlSUIR2JV265kFWk9O0nWBNdCmBOJK2Jm5Rj75l7Qy&X-Amz-Signature=9383447652f093b7051ca0ac5fd82d1b0a546afa6a400d9bfee297dc7c986be9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
