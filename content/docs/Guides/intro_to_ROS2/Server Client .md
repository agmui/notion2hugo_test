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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCMGOZL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC7%2Bf%2B%2B5qQuK%2F7LsCRSFc0FMTkIQpjGHhej184OSXmCuQIgVyijgFVmy5b2%2BrSwOZ0wjmvicmKTiaRIDZDHPiAk73kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAnxLoJL2u7VdOMzxSrcA7CXRxPL5RVxpQPwPbQHq5ijkruMBr3Ai3x7nkDqppUxqQDlkr7bCXWFROEsvCA7D0om2c%2BEUIWWg17RGHCuATwDHAiCSJZy2CdG2uy3Z8YD2ain2ojY9NiBtxytbRLbTnS5N7J%2FLYu%2B%2FYCk1WTfK4WlFwxcY9ao5uJFFUmq%2B5gFAkQFwYw10A0MsQGS%2BxAYhqvPIGgZTvPAOVKzuaaHqfNoJ3%2F7Usel%2By9fvyAZVyGKBT0VFWUS5euEbbRxGykirNM%2Bkk0u%2F3UOLcPu9jmbXYCDtFdbaPmLxD2PFZJSJPLPMRHgkXWB6pd5hZqvLPL9dtzrXG3gdK43wYUsYCCe8NIqFNgfW6SirUjoKZOGe%2BuX3UsQLNvdU%2B4Z7Rcx8AWicAH4yPhaObTqIBnwSuELt2ApBSJgRCYBZoz9qhnwTuICLsPQopv1i21KJJDQinnUwhF7DNueLSKvxYffm6A4ezgni6SaMPWmU5HRjWCTi39%2FRt4RlVO9B1%2B32hg4S%2Ff2Je2aAFiR8%2BCWxsM1fMvIc9ujpLusbUXPFi94l27LoavAlpMTosp5bfAvL8%2BCX%2FZ3DTEd6c%2FbNAoOnAuCLEGNq66xbDXJhAexgqltknYPDLlg14xVE0dsLlopehLOMNeek70GOqUBK8Y2RyeJkJwkp3ZkWmRhdRD9ipw%2FnfOOv9KzAyAvka4KuQXS7fzK0ZSUHGVcKOu5b%2FfTow36hfJApBJrr8a0iawbZ1iqTmkPcIavKjoGzYXWU9dGZGnheyiM20%2BpPsz1eNtRHnYYolUg14drrAjZNZ1ob2w74FNDn4HkDdEQvNJ0X2BZR7TfQtO3bkmZHa%2BsoO6ZkV3s5he5d8QOUOR25Bte8D57&X-Amz-Signature=72e96b3160346cda345fe352e52f8d43085115f29568bebc8fdd6159370237f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCMGOZL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC7%2Bf%2B%2B5qQuK%2F7LsCRSFc0FMTkIQpjGHhej184OSXmCuQIgVyijgFVmy5b2%2BrSwOZ0wjmvicmKTiaRIDZDHPiAk73kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAnxLoJL2u7VdOMzxSrcA7CXRxPL5RVxpQPwPbQHq5ijkruMBr3Ai3x7nkDqppUxqQDlkr7bCXWFROEsvCA7D0om2c%2BEUIWWg17RGHCuATwDHAiCSJZy2CdG2uy3Z8YD2ain2ojY9NiBtxytbRLbTnS5N7J%2FLYu%2B%2FYCk1WTfK4WlFwxcY9ao5uJFFUmq%2B5gFAkQFwYw10A0MsQGS%2BxAYhqvPIGgZTvPAOVKzuaaHqfNoJ3%2F7Usel%2By9fvyAZVyGKBT0VFWUS5euEbbRxGykirNM%2Bkk0u%2F3UOLcPu9jmbXYCDtFdbaPmLxD2PFZJSJPLPMRHgkXWB6pd5hZqvLPL9dtzrXG3gdK43wYUsYCCe8NIqFNgfW6SirUjoKZOGe%2BuX3UsQLNvdU%2B4Z7Rcx8AWicAH4yPhaObTqIBnwSuELt2ApBSJgRCYBZoz9qhnwTuICLsPQopv1i21KJJDQinnUwhF7DNueLSKvxYffm6A4ezgni6SaMPWmU5HRjWCTi39%2FRt4RlVO9B1%2B32hg4S%2Ff2Je2aAFiR8%2BCWxsM1fMvIc9ujpLusbUXPFi94l27LoavAlpMTosp5bfAvL8%2BCX%2FZ3DTEd6c%2FbNAoOnAuCLEGNq66xbDXJhAexgqltknYPDLlg14xVE0dsLlopehLOMNeek70GOqUBK8Y2RyeJkJwkp3ZkWmRhdRD9ipw%2FnfOOv9KzAyAvka4KuQXS7fzK0ZSUHGVcKOu5b%2FfTow36hfJApBJrr8a0iawbZ1iqTmkPcIavKjoGzYXWU9dGZGnheyiM20%2BpPsz1eNtRHnYYolUg14drrAjZNZ1ob2w74FNDn4HkDdEQvNJ0X2BZR7TfQtO3bkmZHa%2BsoO6ZkV3s5he5d8QOUOR25Bte8D57&X-Amz-Signature=effc0cef5911c0f040d63b90d5cdcf88d88f2a5e38771673d5e139e13bafba25&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCMGOZL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC7%2Bf%2B%2B5qQuK%2F7LsCRSFc0FMTkIQpjGHhej184OSXmCuQIgVyijgFVmy5b2%2BrSwOZ0wjmvicmKTiaRIDZDHPiAk73kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAnxLoJL2u7VdOMzxSrcA7CXRxPL5RVxpQPwPbQHq5ijkruMBr3Ai3x7nkDqppUxqQDlkr7bCXWFROEsvCA7D0om2c%2BEUIWWg17RGHCuATwDHAiCSJZy2CdG2uy3Z8YD2ain2ojY9NiBtxytbRLbTnS5N7J%2FLYu%2B%2FYCk1WTfK4WlFwxcY9ao5uJFFUmq%2B5gFAkQFwYw10A0MsQGS%2BxAYhqvPIGgZTvPAOVKzuaaHqfNoJ3%2F7Usel%2By9fvyAZVyGKBT0VFWUS5euEbbRxGykirNM%2Bkk0u%2F3UOLcPu9jmbXYCDtFdbaPmLxD2PFZJSJPLPMRHgkXWB6pd5hZqvLPL9dtzrXG3gdK43wYUsYCCe8NIqFNgfW6SirUjoKZOGe%2BuX3UsQLNvdU%2B4Z7Rcx8AWicAH4yPhaObTqIBnwSuELt2ApBSJgRCYBZoz9qhnwTuICLsPQopv1i21KJJDQinnUwhF7DNueLSKvxYffm6A4ezgni6SaMPWmU5HRjWCTi39%2FRt4RlVO9B1%2B32hg4S%2Ff2Je2aAFiR8%2BCWxsM1fMvIc9ujpLusbUXPFi94l27LoavAlpMTosp5bfAvL8%2BCX%2FZ3DTEd6c%2FbNAoOnAuCLEGNq66xbDXJhAexgqltknYPDLlg14xVE0dsLlopehLOMNeek70GOqUBK8Y2RyeJkJwkp3ZkWmRhdRD9ipw%2FnfOOv9KzAyAvka4KuQXS7fzK0ZSUHGVcKOu5b%2FfTow36hfJApBJrr8a0iawbZ1iqTmkPcIavKjoGzYXWU9dGZGnheyiM20%2BpPsz1eNtRHnYYolUg14drrAjZNZ1ob2w74FNDn4HkDdEQvNJ0X2BZR7TfQtO3bkmZHa%2BsoO6ZkV3s5he5d8QOUOR25Bte8D57&X-Amz-Signature=cc6bb2204abd19c56f8902e4da9e6d614529d3ff70c295521a1242786618459d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCMGOZL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC7%2Bf%2B%2B5qQuK%2F7LsCRSFc0FMTkIQpjGHhej184OSXmCuQIgVyijgFVmy5b2%2BrSwOZ0wjmvicmKTiaRIDZDHPiAk73kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAnxLoJL2u7VdOMzxSrcA7CXRxPL5RVxpQPwPbQHq5ijkruMBr3Ai3x7nkDqppUxqQDlkr7bCXWFROEsvCA7D0om2c%2BEUIWWg17RGHCuATwDHAiCSJZy2CdG2uy3Z8YD2ain2ojY9NiBtxytbRLbTnS5N7J%2FLYu%2B%2FYCk1WTfK4WlFwxcY9ao5uJFFUmq%2B5gFAkQFwYw10A0MsQGS%2BxAYhqvPIGgZTvPAOVKzuaaHqfNoJ3%2F7Usel%2By9fvyAZVyGKBT0VFWUS5euEbbRxGykirNM%2Bkk0u%2F3UOLcPu9jmbXYCDtFdbaPmLxD2PFZJSJPLPMRHgkXWB6pd5hZqvLPL9dtzrXG3gdK43wYUsYCCe8NIqFNgfW6SirUjoKZOGe%2BuX3UsQLNvdU%2B4Z7Rcx8AWicAH4yPhaObTqIBnwSuELt2ApBSJgRCYBZoz9qhnwTuICLsPQopv1i21KJJDQinnUwhF7DNueLSKvxYffm6A4ezgni6SaMPWmU5HRjWCTi39%2FRt4RlVO9B1%2B32hg4S%2Ff2Je2aAFiR8%2BCWxsM1fMvIc9ujpLusbUXPFi94l27LoavAlpMTosp5bfAvL8%2BCX%2FZ3DTEd6c%2FbNAoOnAuCLEGNq66xbDXJhAexgqltknYPDLlg14xVE0dsLlopehLOMNeek70GOqUBK8Y2RyeJkJwkp3ZkWmRhdRD9ipw%2FnfOOv9KzAyAvka4KuQXS7fzK0ZSUHGVcKOu5b%2FfTow36hfJApBJrr8a0iawbZ1iqTmkPcIavKjoGzYXWU9dGZGnheyiM20%2BpPsz1eNtRHnYYolUg14drrAjZNZ1ob2w74FNDn4HkDdEQvNJ0X2BZR7TfQtO3bkmZHa%2BsoO6ZkV3s5he5d8QOUOR25Bte8D57&X-Amz-Signature=0d973f1cdf6ed411c5bdfe08a0e0c8d8fc4dd3d66561cdda3ff718abf3458434&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCMGOZL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC7%2Bf%2B%2B5qQuK%2F7LsCRSFc0FMTkIQpjGHhej184OSXmCuQIgVyijgFVmy5b2%2BrSwOZ0wjmvicmKTiaRIDZDHPiAk73kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAnxLoJL2u7VdOMzxSrcA7CXRxPL5RVxpQPwPbQHq5ijkruMBr3Ai3x7nkDqppUxqQDlkr7bCXWFROEsvCA7D0om2c%2BEUIWWg17RGHCuATwDHAiCSJZy2CdG2uy3Z8YD2ain2ojY9NiBtxytbRLbTnS5N7J%2FLYu%2B%2FYCk1WTfK4WlFwxcY9ao5uJFFUmq%2B5gFAkQFwYw10A0MsQGS%2BxAYhqvPIGgZTvPAOVKzuaaHqfNoJ3%2F7Usel%2By9fvyAZVyGKBT0VFWUS5euEbbRxGykirNM%2Bkk0u%2F3UOLcPu9jmbXYCDtFdbaPmLxD2PFZJSJPLPMRHgkXWB6pd5hZqvLPL9dtzrXG3gdK43wYUsYCCe8NIqFNgfW6SirUjoKZOGe%2BuX3UsQLNvdU%2B4Z7Rcx8AWicAH4yPhaObTqIBnwSuELt2ApBSJgRCYBZoz9qhnwTuICLsPQopv1i21KJJDQinnUwhF7DNueLSKvxYffm6A4ezgni6SaMPWmU5HRjWCTi39%2FRt4RlVO9B1%2B32hg4S%2Ff2Je2aAFiR8%2BCWxsM1fMvIc9ujpLusbUXPFi94l27LoavAlpMTosp5bfAvL8%2BCX%2FZ3DTEd6c%2FbNAoOnAuCLEGNq66xbDXJhAexgqltknYPDLlg14xVE0dsLlopehLOMNeek70GOqUBK8Y2RyeJkJwkp3ZkWmRhdRD9ipw%2FnfOOv9KzAyAvka4KuQXS7fzK0ZSUHGVcKOu5b%2FfTow36hfJApBJrr8a0iawbZ1iqTmkPcIavKjoGzYXWU9dGZGnheyiM20%2BpPsz1eNtRHnYYolUg14drrAjZNZ1ob2w74FNDn4HkDdEQvNJ0X2BZR7TfQtO3bkmZHa%2BsoO6ZkV3s5he5d8QOUOR25Bte8D57&X-Amz-Signature=7a03882937ecb89b2bbb28598d61b459d1e120d209999febd6f7d1a15004b25e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
