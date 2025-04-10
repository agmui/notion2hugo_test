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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNIALML%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD4m52njWcUYyKve7C3g3H9KxnYas6oLM5Yt5qAnjDg3gIgY377%2FLtAWdHo9KitJ%2FcHBG7P%2BbhePUbhTx284k6ZH3wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmCziTcc4%2BsajCDbSrcAySPpIpoM33Axb6QKq%2FP%2FGTznG6M0QxzOeTJiiZTs7mZkar1LFI0YSzM1uT%2BVFVlfMINsVFmGaNYVDoW26luiGly5Xg5bs2OJdME0WDIJUxvZh9CKFturs4keZK3X6Sd2wwHtykZq8fhqyH39wBvRd31OVScqoYPVyedHRTpvVHjgopTrjWIQ%2FfXy2JIIvArYtLE4hcNmUAWio4CsO%2Fy%2F1YKlgmWG6KW%2Fl7CM2%2Fe2tDQHec6TZxDsJuPSgGFKag9yyfw0pkZP2YveCTBcQioFqPchocTHcdzHtXRVbXqoTlWXJfrIup1Oi%2FUeDqkIiWDDfYtbTFpvO0Mbsf6QhUPBVzOCY3FgLKzx71oDT%2BP2BswGSezEN%2FJWfgf0syL9FvmB0AXveY%2FKbpFGG%2BPZGFjTbV7%2FDrOca5%2F%2BDPWlPAsbb9zu0wbAq0s7nSwO2dEqDS1cEFDQuSrJGRoK07ogrT2W3zgDIPOUBizz3OaaC1VhVUVmRr36rVttSq%2By4Y0SZoAAUASY4v%2FLVGc47K11xCtMvzFdYjSN%2FTat2oj%2FV89xxemDSrvkFFz18WKCCo9zuwbvNbKv2GpngoEfkRZBHPXj%2FfCLr9amUipgL7ZEn2vpixGaJzZ1ph5WiUtV5s%2BMOS93r8GOqUB7ogekniQV9333PBiheG%2Biuqt1LbJsxIk2TzR2vmwfmtqozB9cQ22KCd41AE%2FxuCcBKKgTNeSf8RAdcco7duHlcdyU2YDderw%2FO7XWP3fdo0Ddu5sIWbT1QueWzroAfH4XPe%2Ffa6VYKktSahJW8wCNsTJia6f4XgyyOQGcU8%2FsT7CGeqa1yi1XcyfR5jCTKJPlYw9gn6AbCfVVtNdFZ8ETZLH5FoE&X-Amz-Signature=174cfe5e00da1fb4c1ed97358c0b586e71dd28c9146e67a75444c6a6ff868ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNIALML%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD4m52njWcUYyKve7C3g3H9KxnYas6oLM5Yt5qAnjDg3gIgY377%2FLtAWdHo9KitJ%2FcHBG7P%2BbhePUbhTx284k6ZH3wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmCziTcc4%2BsajCDbSrcAySPpIpoM33Axb6QKq%2FP%2FGTznG6M0QxzOeTJiiZTs7mZkar1LFI0YSzM1uT%2BVFVlfMINsVFmGaNYVDoW26luiGly5Xg5bs2OJdME0WDIJUxvZh9CKFturs4keZK3X6Sd2wwHtykZq8fhqyH39wBvRd31OVScqoYPVyedHRTpvVHjgopTrjWIQ%2FfXy2JIIvArYtLE4hcNmUAWio4CsO%2Fy%2F1YKlgmWG6KW%2Fl7CM2%2Fe2tDQHec6TZxDsJuPSgGFKag9yyfw0pkZP2YveCTBcQioFqPchocTHcdzHtXRVbXqoTlWXJfrIup1Oi%2FUeDqkIiWDDfYtbTFpvO0Mbsf6QhUPBVzOCY3FgLKzx71oDT%2BP2BswGSezEN%2FJWfgf0syL9FvmB0AXveY%2FKbpFGG%2BPZGFjTbV7%2FDrOca5%2F%2BDPWlPAsbb9zu0wbAq0s7nSwO2dEqDS1cEFDQuSrJGRoK07ogrT2W3zgDIPOUBizz3OaaC1VhVUVmRr36rVttSq%2By4Y0SZoAAUASY4v%2FLVGc47K11xCtMvzFdYjSN%2FTat2oj%2FV89xxemDSrvkFFz18WKCCo9zuwbvNbKv2GpngoEfkRZBHPXj%2FfCLr9amUipgL7ZEn2vpixGaJzZ1ph5WiUtV5s%2BMOS93r8GOqUB7ogekniQV9333PBiheG%2Biuqt1LbJsxIk2TzR2vmwfmtqozB9cQ22KCd41AE%2FxuCcBKKgTNeSf8RAdcco7duHlcdyU2YDderw%2FO7XWP3fdo0Ddu5sIWbT1QueWzroAfH4XPe%2Ffa6VYKktSahJW8wCNsTJia6f4XgyyOQGcU8%2FsT7CGeqa1yi1XcyfR5jCTKJPlYw9gn6AbCfVVtNdFZ8ETZLH5FoE&X-Amz-Signature=693a3aafc83b25dec2e47178144ead463e325ba7b014cd11d3448e84b7d19cad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNIALML%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD4m52njWcUYyKve7C3g3H9KxnYas6oLM5Yt5qAnjDg3gIgY377%2FLtAWdHo9KitJ%2FcHBG7P%2BbhePUbhTx284k6ZH3wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmCziTcc4%2BsajCDbSrcAySPpIpoM33Axb6QKq%2FP%2FGTznG6M0QxzOeTJiiZTs7mZkar1LFI0YSzM1uT%2BVFVlfMINsVFmGaNYVDoW26luiGly5Xg5bs2OJdME0WDIJUxvZh9CKFturs4keZK3X6Sd2wwHtykZq8fhqyH39wBvRd31OVScqoYPVyedHRTpvVHjgopTrjWIQ%2FfXy2JIIvArYtLE4hcNmUAWio4CsO%2Fy%2F1YKlgmWG6KW%2Fl7CM2%2Fe2tDQHec6TZxDsJuPSgGFKag9yyfw0pkZP2YveCTBcQioFqPchocTHcdzHtXRVbXqoTlWXJfrIup1Oi%2FUeDqkIiWDDfYtbTFpvO0Mbsf6QhUPBVzOCY3FgLKzx71oDT%2BP2BswGSezEN%2FJWfgf0syL9FvmB0AXveY%2FKbpFGG%2BPZGFjTbV7%2FDrOca5%2F%2BDPWlPAsbb9zu0wbAq0s7nSwO2dEqDS1cEFDQuSrJGRoK07ogrT2W3zgDIPOUBizz3OaaC1VhVUVmRr36rVttSq%2By4Y0SZoAAUASY4v%2FLVGc47K11xCtMvzFdYjSN%2FTat2oj%2FV89xxemDSrvkFFz18WKCCo9zuwbvNbKv2GpngoEfkRZBHPXj%2FfCLr9amUipgL7ZEn2vpixGaJzZ1ph5WiUtV5s%2BMOS93r8GOqUB7ogekniQV9333PBiheG%2Biuqt1LbJsxIk2TzR2vmwfmtqozB9cQ22KCd41AE%2FxuCcBKKgTNeSf8RAdcco7duHlcdyU2YDderw%2FO7XWP3fdo0Ddu5sIWbT1QueWzroAfH4XPe%2Ffa6VYKktSahJW8wCNsTJia6f4XgyyOQGcU8%2FsT7CGeqa1yi1XcyfR5jCTKJPlYw9gn6AbCfVVtNdFZ8ETZLH5FoE&X-Amz-Signature=1ab8b1dd37e9b25d33b2f04b374ff64dbafff9f567fc667920fe968d87e1cc62&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNIALML%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD4m52njWcUYyKve7C3g3H9KxnYas6oLM5Yt5qAnjDg3gIgY377%2FLtAWdHo9KitJ%2FcHBG7P%2BbhePUbhTx284k6ZH3wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmCziTcc4%2BsajCDbSrcAySPpIpoM33Axb6QKq%2FP%2FGTznG6M0QxzOeTJiiZTs7mZkar1LFI0YSzM1uT%2BVFVlfMINsVFmGaNYVDoW26luiGly5Xg5bs2OJdME0WDIJUxvZh9CKFturs4keZK3X6Sd2wwHtykZq8fhqyH39wBvRd31OVScqoYPVyedHRTpvVHjgopTrjWIQ%2FfXy2JIIvArYtLE4hcNmUAWio4CsO%2Fy%2F1YKlgmWG6KW%2Fl7CM2%2Fe2tDQHec6TZxDsJuPSgGFKag9yyfw0pkZP2YveCTBcQioFqPchocTHcdzHtXRVbXqoTlWXJfrIup1Oi%2FUeDqkIiWDDfYtbTFpvO0Mbsf6QhUPBVzOCY3FgLKzx71oDT%2BP2BswGSezEN%2FJWfgf0syL9FvmB0AXveY%2FKbpFGG%2BPZGFjTbV7%2FDrOca5%2F%2BDPWlPAsbb9zu0wbAq0s7nSwO2dEqDS1cEFDQuSrJGRoK07ogrT2W3zgDIPOUBizz3OaaC1VhVUVmRr36rVttSq%2By4Y0SZoAAUASY4v%2FLVGc47K11xCtMvzFdYjSN%2FTat2oj%2FV89xxemDSrvkFFz18WKCCo9zuwbvNbKv2GpngoEfkRZBHPXj%2FfCLr9amUipgL7ZEn2vpixGaJzZ1ph5WiUtV5s%2BMOS93r8GOqUB7ogekniQV9333PBiheG%2Biuqt1LbJsxIk2TzR2vmwfmtqozB9cQ22KCd41AE%2FxuCcBKKgTNeSf8RAdcco7duHlcdyU2YDderw%2FO7XWP3fdo0Ddu5sIWbT1QueWzroAfH4XPe%2Ffa6VYKktSahJW8wCNsTJia6f4XgyyOQGcU8%2FsT7CGeqa1yi1XcyfR5jCTKJPlYw9gn6AbCfVVtNdFZ8ETZLH5FoE&X-Amz-Signature=e5027ef65010f170b1d8a1832b952e47d1c4db2cb0e002d252ec09e4fb8afe2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNIALML%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD4m52njWcUYyKve7C3g3H9KxnYas6oLM5Yt5qAnjDg3gIgY377%2FLtAWdHo9KitJ%2FcHBG7P%2BbhePUbhTx284k6ZH3wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmCziTcc4%2BsajCDbSrcAySPpIpoM33Axb6QKq%2FP%2FGTznG6M0QxzOeTJiiZTs7mZkar1LFI0YSzM1uT%2BVFVlfMINsVFmGaNYVDoW26luiGly5Xg5bs2OJdME0WDIJUxvZh9CKFturs4keZK3X6Sd2wwHtykZq8fhqyH39wBvRd31OVScqoYPVyedHRTpvVHjgopTrjWIQ%2FfXy2JIIvArYtLE4hcNmUAWio4CsO%2Fy%2F1YKlgmWG6KW%2Fl7CM2%2Fe2tDQHec6TZxDsJuPSgGFKag9yyfw0pkZP2YveCTBcQioFqPchocTHcdzHtXRVbXqoTlWXJfrIup1Oi%2FUeDqkIiWDDfYtbTFpvO0Mbsf6QhUPBVzOCY3FgLKzx71oDT%2BP2BswGSezEN%2FJWfgf0syL9FvmB0AXveY%2FKbpFGG%2BPZGFjTbV7%2FDrOca5%2F%2BDPWlPAsbb9zu0wbAq0s7nSwO2dEqDS1cEFDQuSrJGRoK07ogrT2W3zgDIPOUBizz3OaaC1VhVUVmRr36rVttSq%2By4Y0SZoAAUASY4v%2FLVGc47K11xCtMvzFdYjSN%2FTat2oj%2FV89xxemDSrvkFFz18WKCCo9zuwbvNbKv2GpngoEfkRZBHPXj%2FfCLr9amUipgL7ZEn2vpixGaJzZ1ph5WiUtV5s%2BMOS93r8GOqUB7ogekniQV9333PBiheG%2Biuqt1LbJsxIk2TzR2vmwfmtqozB9cQ22KCd41AE%2FxuCcBKKgTNeSf8RAdcco7duHlcdyU2YDderw%2FO7XWP3fdo0Ddu5sIWbT1QueWzroAfH4XPe%2Ffa6VYKktSahJW8wCNsTJia6f4XgyyOQGcU8%2FsT7CGeqa1yi1XcyfR5jCTKJPlYw9gn6AbCfVVtNdFZ8ETZLH5FoE&X-Amz-Signature=049bceed8ac38fcf862b568b27335dfe98c58dac61918c45dab89995965b3bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
