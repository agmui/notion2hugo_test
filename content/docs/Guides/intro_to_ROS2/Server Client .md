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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXARAI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEroK4bQEcL1Jqu2yShWgieg3GopUmLe2Z%2FQvm9T6xe6AiEA%2BhEswU9B63X0WYunznnWDIpv5J5pCQIZxxIepBJ8K%2FsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjwkTJd%2F7cECTNHhSrcA6H7Undg3UoLUj8P9hPewMa1rAb2r4t64Ky8OrVCYfTi7wo8pJzSI6dWnMauMb6xY0B8AvF7heTnsXENpuj%2FcXehV5V2HXX0MReYZDS3oNg1z1uBXkBMyjxmeCTMZymXdEgm6WccVTiZPD9n0arxIadGymveJi%2FncP%2F6MwSuuTlQyQ5sEwfZHtFT5F1%2FQDP0r26Hk3tYlFAJelcNu%2BXTh6jjEdZ7I3sdKflOuQtmtoO0D5EyBeMPvU9UgvV0A8688zXbkTxm7tagw9SscE3%2BGYFTsMmALz%2FDRZl7BIix4sXXKVnR5y%2BeCfmgZJHfJEs6a4PcVs8lVw57X7UmX6xHCR43Tr6iNp4hEUdVMVexb6%2FZArZ7f41GS%2FXNXfkZeaUOyqSSUZEv2ONFQtkNy%2FZV9kbLc2zTf1iDmNniEsdyzmg1l%2Fom3aDGC8tMLnByMgvlceeaQbxXRUdQT8Hrj5AUMtAPwcAMEze6UOFPyyolrPLrh97c7bgLtdmAkYh8Rn%2BSitJU5dNA1gskDGaiDRReYSWGIcaTTgZ7rfglnDlW5Emw7okrFFF4eS81%2BApfRsC92dOYX98hm4YQWGIv%2FPA%2BmgR4b2kadZgdcFye1OpyijH%2BMZt926q6CMiusS1SMMSyur8GOqUBEdw%2B23nSV3JwaRxQlH1qut17%2FX5%2Ba6%2BpVhNldr3I5IkFcI%2BhHCpAyzOI2Ka4HoSFRKks%2BZ76DGofLdhVmEG2OgoJlznGGqTp4nfOyzrsJ6aIIfOH2DCnHHOF9mjhXm9U%2FyOYmHY9rcxjDVpO7xJSs17OkSF9dhzk0RXRizGoOigAypmKSczM%2FCMvTIdBKHmSrPW%2FnJsXQLBSAKEJPIVBHQQksW73&X-Amz-Signature=acd50931ef8ebff5222733b0009470e9e009b70fd2dde8f670e3a045065e96ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXARAI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEroK4bQEcL1Jqu2yShWgieg3GopUmLe2Z%2FQvm9T6xe6AiEA%2BhEswU9B63X0WYunznnWDIpv5J5pCQIZxxIepBJ8K%2FsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjwkTJd%2F7cECTNHhSrcA6H7Undg3UoLUj8P9hPewMa1rAb2r4t64Ky8OrVCYfTi7wo8pJzSI6dWnMauMb6xY0B8AvF7heTnsXENpuj%2FcXehV5V2HXX0MReYZDS3oNg1z1uBXkBMyjxmeCTMZymXdEgm6WccVTiZPD9n0arxIadGymveJi%2FncP%2F6MwSuuTlQyQ5sEwfZHtFT5F1%2FQDP0r26Hk3tYlFAJelcNu%2BXTh6jjEdZ7I3sdKflOuQtmtoO0D5EyBeMPvU9UgvV0A8688zXbkTxm7tagw9SscE3%2BGYFTsMmALz%2FDRZl7BIix4sXXKVnR5y%2BeCfmgZJHfJEs6a4PcVs8lVw57X7UmX6xHCR43Tr6iNp4hEUdVMVexb6%2FZArZ7f41GS%2FXNXfkZeaUOyqSSUZEv2ONFQtkNy%2FZV9kbLc2zTf1iDmNniEsdyzmg1l%2Fom3aDGC8tMLnByMgvlceeaQbxXRUdQT8Hrj5AUMtAPwcAMEze6UOFPyyolrPLrh97c7bgLtdmAkYh8Rn%2BSitJU5dNA1gskDGaiDRReYSWGIcaTTgZ7rfglnDlW5Emw7okrFFF4eS81%2BApfRsC92dOYX98hm4YQWGIv%2FPA%2BmgR4b2kadZgdcFye1OpyijH%2BMZt926q6CMiusS1SMMSyur8GOqUBEdw%2B23nSV3JwaRxQlH1qut17%2FX5%2Ba6%2BpVhNldr3I5IkFcI%2BhHCpAyzOI2Ka4HoSFRKks%2BZ76DGofLdhVmEG2OgoJlznGGqTp4nfOyzrsJ6aIIfOH2DCnHHOF9mjhXm9U%2FyOYmHY9rcxjDVpO7xJSs17OkSF9dhzk0RXRizGoOigAypmKSczM%2FCMvTIdBKHmSrPW%2FnJsXQLBSAKEJPIVBHQQksW73&X-Amz-Signature=311abd8e366ff8296de65551941470b5a3ae2183a8ab55a644a566873385f5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXARAI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEroK4bQEcL1Jqu2yShWgieg3GopUmLe2Z%2FQvm9T6xe6AiEA%2BhEswU9B63X0WYunznnWDIpv5J5pCQIZxxIepBJ8K%2FsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjwkTJd%2F7cECTNHhSrcA6H7Undg3UoLUj8P9hPewMa1rAb2r4t64Ky8OrVCYfTi7wo8pJzSI6dWnMauMb6xY0B8AvF7heTnsXENpuj%2FcXehV5V2HXX0MReYZDS3oNg1z1uBXkBMyjxmeCTMZymXdEgm6WccVTiZPD9n0arxIadGymveJi%2FncP%2F6MwSuuTlQyQ5sEwfZHtFT5F1%2FQDP0r26Hk3tYlFAJelcNu%2BXTh6jjEdZ7I3sdKflOuQtmtoO0D5EyBeMPvU9UgvV0A8688zXbkTxm7tagw9SscE3%2BGYFTsMmALz%2FDRZl7BIix4sXXKVnR5y%2BeCfmgZJHfJEs6a4PcVs8lVw57X7UmX6xHCR43Tr6iNp4hEUdVMVexb6%2FZArZ7f41GS%2FXNXfkZeaUOyqSSUZEv2ONFQtkNy%2FZV9kbLc2zTf1iDmNniEsdyzmg1l%2Fom3aDGC8tMLnByMgvlceeaQbxXRUdQT8Hrj5AUMtAPwcAMEze6UOFPyyolrPLrh97c7bgLtdmAkYh8Rn%2BSitJU5dNA1gskDGaiDRReYSWGIcaTTgZ7rfglnDlW5Emw7okrFFF4eS81%2BApfRsC92dOYX98hm4YQWGIv%2FPA%2BmgR4b2kadZgdcFye1OpyijH%2BMZt926q6CMiusS1SMMSyur8GOqUBEdw%2B23nSV3JwaRxQlH1qut17%2FX5%2Ba6%2BpVhNldr3I5IkFcI%2BhHCpAyzOI2Ka4HoSFRKks%2BZ76DGofLdhVmEG2OgoJlznGGqTp4nfOyzrsJ6aIIfOH2DCnHHOF9mjhXm9U%2FyOYmHY9rcxjDVpO7xJSs17OkSF9dhzk0RXRizGoOigAypmKSczM%2FCMvTIdBKHmSrPW%2FnJsXQLBSAKEJPIVBHQQksW73&X-Amz-Signature=4427f887d5a5ef9f850b7007336d0ab357ae3d1fa33f3873b7416b1f11429d25&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXARAI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEroK4bQEcL1Jqu2yShWgieg3GopUmLe2Z%2FQvm9T6xe6AiEA%2BhEswU9B63X0WYunznnWDIpv5J5pCQIZxxIepBJ8K%2FsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjwkTJd%2F7cECTNHhSrcA6H7Undg3UoLUj8P9hPewMa1rAb2r4t64Ky8OrVCYfTi7wo8pJzSI6dWnMauMb6xY0B8AvF7heTnsXENpuj%2FcXehV5V2HXX0MReYZDS3oNg1z1uBXkBMyjxmeCTMZymXdEgm6WccVTiZPD9n0arxIadGymveJi%2FncP%2F6MwSuuTlQyQ5sEwfZHtFT5F1%2FQDP0r26Hk3tYlFAJelcNu%2BXTh6jjEdZ7I3sdKflOuQtmtoO0D5EyBeMPvU9UgvV0A8688zXbkTxm7tagw9SscE3%2BGYFTsMmALz%2FDRZl7BIix4sXXKVnR5y%2BeCfmgZJHfJEs6a4PcVs8lVw57X7UmX6xHCR43Tr6iNp4hEUdVMVexb6%2FZArZ7f41GS%2FXNXfkZeaUOyqSSUZEv2ONFQtkNy%2FZV9kbLc2zTf1iDmNniEsdyzmg1l%2Fom3aDGC8tMLnByMgvlceeaQbxXRUdQT8Hrj5AUMtAPwcAMEze6UOFPyyolrPLrh97c7bgLtdmAkYh8Rn%2BSitJU5dNA1gskDGaiDRReYSWGIcaTTgZ7rfglnDlW5Emw7okrFFF4eS81%2BApfRsC92dOYX98hm4YQWGIv%2FPA%2BmgR4b2kadZgdcFye1OpyijH%2BMZt926q6CMiusS1SMMSyur8GOqUBEdw%2B23nSV3JwaRxQlH1qut17%2FX5%2Ba6%2BpVhNldr3I5IkFcI%2BhHCpAyzOI2Ka4HoSFRKks%2BZ76DGofLdhVmEG2OgoJlznGGqTp4nfOyzrsJ6aIIfOH2DCnHHOF9mjhXm9U%2FyOYmHY9rcxjDVpO7xJSs17OkSF9dhzk0RXRizGoOigAypmKSczM%2FCMvTIdBKHmSrPW%2FnJsXQLBSAKEJPIVBHQQksW73&X-Amz-Signature=39e1ed87d8ff454f6bfe23792e0002d2d6b6d3f55fd4e4d66084ec926351f8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXARAI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEroK4bQEcL1Jqu2yShWgieg3GopUmLe2Z%2FQvm9T6xe6AiEA%2BhEswU9B63X0WYunznnWDIpv5J5pCQIZxxIepBJ8K%2FsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjwkTJd%2F7cECTNHhSrcA6H7Undg3UoLUj8P9hPewMa1rAb2r4t64Ky8OrVCYfTi7wo8pJzSI6dWnMauMb6xY0B8AvF7heTnsXENpuj%2FcXehV5V2HXX0MReYZDS3oNg1z1uBXkBMyjxmeCTMZymXdEgm6WccVTiZPD9n0arxIadGymveJi%2FncP%2F6MwSuuTlQyQ5sEwfZHtFT5F1%2FQDP0r26Hk3tYlFAJelcNu%2BXTh6jjEdZ7I3sdKflOuQtmtoO0D5EyBeMPvU9UgvV0A8688zXbkTxm7tagw9SscE3%2BGYFTsMmALz%2FDRZl7BIix4sXXKVnR5y%2BeCfmgZJHfJEs6a4PcVs8lVw57X7UmX6xHCR43Tr6iNp4hEUdVMVexb6%2FZArZ7f41GS%2FXNXfkZeaUOyqSSUZEv2ONFQtkNy%2FZV9kbLc2zTf1iDmNniEsdyzmg1l%2Fom3aDGC8tMLnByMgvlceeaQbxXRUdQT8Hrj5AUMtAPwcAMEze6UOFPyyolrPLrh97c7bgLtdmAkYh8Rn%2BSitJU5dNA1gskDGaiDRReYSWGIcaTTgZ7rfglnDlW5Emw7okrFFF4eS81%2BApfRsC92dOYX98hm4YQWGIv%2FPA%2BmgR4b2kadZgdcFye1OpyijH%2BMZt926q6CMiusS1SMMSyur8GOqUBEdw%2B23nSV3JwaRxQlH1qut17%2FX5%2Ba6%2BpVhNldr3I5IkFcI%2BhHCpAyzOI2Ka4HoSFRKks%2BZ76DGofLdhVmEG2OgoJlznGGqTp4nfOyzrsJ6aIIfOH2DCnHHOF9mjhXm9U%2FyOYmHY9rcxjDVpO7xJSs17OkSF9dhzk0RXRizGoOigAypmKSczM%2FCMvTIdBKHmSrPW%2FnJsXQLBSAKEJPIVBHQQksW73&X-Amz-Signature=8d26024de899b035ead511bc9acd9f93f9f4da3d0f97f344549bf21d09191f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
