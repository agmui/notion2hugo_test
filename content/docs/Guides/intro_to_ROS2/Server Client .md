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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LXXRO2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHc0DWOu8Y%2F58954veru4gqCEzE4NiPi7O61msWMCJIAiEA9bn2FAOSYN0cHDf%2B72h2U01sQ8jJv9X%2BMo%2Bdc7GrcSsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVMTkMcWgjg2eE4ircA1s%2Bhlnvg6EsoZX0szPU3rPp9tYw5I45XUlxhGfVJedzDh51b%2Bp5pVQbTfBV26wbbP%2BDuwp4vQdP%2F0XHH%2B7FYrbw4GXiSHu6cppR21Miy8hPAWPfmRoHn2K0YOtc5XANomXBJElCTFnMZwcx84vCerjTmJGdYUprnCslH%2BS34IWte36ixrSiui2Fq%2ByQBRN2WZf10JKw1cF9PgYNq%2F9fRU%2FWA2rbCmNPg0ndXJeXQ3XtmDZ1zYYNdhfDWjHJw5XrZUpxS5WOKxb27Wkn0%2FqVGtv2G9CEiI%2FLmC%2BNeqQ6LWAIO%2Fm5WrtqSLPztbYg8g2uR%2FRpMILMYxEQTdwoXjMhSj86hsfzP1env4NPajV5UyQ%2FpnRrOHzRtQWqSAcAEbKntBqJo5PoHX5WsAgtRtG2U4am9UdCn0GN50GrtswFLN1ShauFoNtz%2Fq%2Fytpimg4wc7zdIJtqgGbq9pSbRYNByTFmqnjgorZoTFYtXrmRGgMnl0GjHMFaY5to2wN3DqL6ZOq3Wba59DRFM%2Bze1H4lhXaDyWmKb2CmYIHyBaJ7hwfqCsNzXE1oi7oPk3IJ3Neu2FEWWm0KEStMRMgf24%2BrLNDG%2FXpN%2FEvQmdadDkWumnTK%2FQTxehS82BOrMpq9pMPfF7MMGOqUBAxTddWZ6%2F48nF6D0tTF2EJfGrE9OhZH1GJhZqxlwilbpftLbGU8lqCHwhoRXkfQv7ltbKPLG72Kx19lVS%2BO78JowGn0dnuOP47TW7svP624sW0RO38jtngiP9KcbHK3kVMZhaOrsT39OiqmFa0%2BsDoeUqKuWH7XSXtJ3jwT5c2BXHFcMEgDkO3V4asMqWfAF%2FtV3q548FwBzcW268ivM%2BHtYOIWg&X-Amz-Signature=9d2ca694b0f521984e10a454b801b86ad005da1cbfbb5e472de69b0cd36920e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LXXRO2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHc0DWOu8Y%2F58954veru4gqCEzE4NiPi7O61msWMCJIAiEA9bn2FAOSYN0cHDf%2B72h2U01sQ8jJv9X%2BMo%2Bdc7GrcSsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVMTkMcWgjg2eE4ircA1s%2Bhlnvg6EsoZX0szPU3rPp9tYw5I45XUlxhGfVJedzDh51b%2Bp5pVQbTfBV26wbbP%2BDuwp4vQdP%2F0XHH%2B7FYrbw4GXiSHu6cppR21Miy8hPAWPfmRoHn2K0YOtc5XANomXBJElCTFnMZwcx84vCerjTmJGdYUprnCslH%2BS34IWte36ixrSiui2Fq%2ByQBRN2WZf10JKw1cF9PgYNq%2F9fRU%2FWA2rbCmNPg0ndXJeXQ3XtmDZ1zYYNdhfDWjHJw5XrZUpxS5WOKxb27Wkn0%2FqVGtv2G9CEiI%2FLmC%2BNeqQ6LWAIO%2Fm5WrtqSLPztbYg8g2uR%2FRpMILMYxEQTdwoXjMhSj86hsfzP1env4NPajV5UyQ%2FpnRrOHzRtQWqSAcAEbKntBqJo5PoHX5WsAgtRtG2U4am9UdCn0GN50GrtswFLN1ShauFoNtz%2Fq%2Fytpimg4wc7zdIJtqgGbq9pSbRYNByTFmqnjgorZoTFYtXrmRGgMnl0GjHMFaY5to2wN3DqL6ZOq3Wba59DRFM%2Bze1H4lhXaDyWmKb2CmYIHyBaJ7hwfqCsNzXE1oi7oPk3IJ3Neu2FEWWm0KEStMRMgf24%2BrLNDG%2FXpN%2FEvQmdadDkWumnTK%2FQTxehS82BOrMpq9pMPfF7MMGOqUBAxTddWZ6%2F48nF6D0tTF2EJfGrE9OhZH1GJhZqxlwilbpftLbGU8lqCHwhoRXkfQv7ltbKPLG72Kx19lVS%2BO78JowGn0dnuOP47TW7svP624sW0RO38jtngiP9KcbHK3kVMZhaOrsT39OiqmFa0%2BsDoeUqKuWH7XSXtJ3jwT5c2BXHFcMEgDkO3V4asMqWfAF%2FtV3q548FwBzcW268ivM%2BHtYOIWg&X-Amz-Signature=9b3d3fbe9cc08bc865f156933ece1153ae0d09b4374e7bd004fe3ec1e681833d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LXXRO2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHc0DWOu8Y%2F58954veru4gqCEzE4NiPi7O61msWMCJIAiEA9bn2FAOSYN0cHDf%2B72h2U01sQ8jJv9X%2BMo%2Bdc7GrcSsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVMTkMcWgjg2eE4ircA1s%2Bhlnvg6EsoZX0szPU3rPp9tYw5I45XUlxhGfVJedzDh51b%2Bp5pVQbTfBV26wbbP%2BDuwp4vQdP%2F0XHH%2B7FYrbw4GXiSHu6cppR21Miy8hPAWPfmRoHn2K0YOtc5XANomXBJElCTFnMZwcx84vCerjTmJGdYUprnCslH%2BS34IWte36ixrSiui2Fq%2ByQBRN2WZf10JKw1cF9PgYNq%2F9fRU%2FWA2rbCmNPg0ndXJeXQ3XtmDZ1zYYNdhfDWjHJw5XrZUpxS5WOKxb27Wkn0%2FqVGtv2G9CEiI%2FLmC%2BNeqQ6LWAIO%2Fm5WrtqSLPztbYg8g2uR%2FRpMILMYxEQTdwoXjMhSj86hsfzP1env4NPajV5UyQ%2FpnRrOHzRtQWqSAcAEbKntBqJo5PoHX5WsAgtRtG2U4am9UdCn0GN50GrtswFLN1ShauFoNtz%2Fq%2Fytpimg4wc7zdIJtqgGbq9pSbRYNByTFmqnjgorZoTFYtXrmRGgMnl0GjHMFaY5to2wN3DqL6ZOq3Wba59DRFM%2Bze1H4lhXaDyWmKb2CmYIHyBaJ7hwfqCsNzXE1oi7oPk3IJ3Neu2FEWWm0KEStMRMgf24%2BrLNDG%2FXpN%2FEvQmdadDkWumnTK%2FQTxehS82BOrMpq9pMPfF7MMGOqUBAxTddWZ6%2F48nF6D0tTF2EJfGrE9OhZH1GJhZqxlwilbpftLbGU8lqCHwhoRXkfQv7ltbKPLG72Kx19lVS%2BO78JowGn0dnuOP47TW7svP624sW0RO38jtngiP9KcbHK3kVMZhaOrsT39OiqmFa0%2BsDoeUqKuWH7XSXtJ3jwT5c2BXHFcMEgDkO3V4asMqWfAF%2FtV3q548FwBzcW268ivM%2BHtYOIWg&X-Amz-Signature=8c4b19de65e98059d2fdb6897a3ceea36df42e8cc146950cc567772ddf3179f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LXXRO2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHc0DWOu8Y%2F58954veru4gqCEzE4NiPi7O61msWMCJIAiEA9bn2FAOSYN0cHDf%2B72h2U01sQ8jJv9X%2BMo%2Bdc7GrcSsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVMTkMcWgjg2eE4ircA1s%2Bhlnvg6EsoZX0szPU3rPp9tYw5I45XUlxhGfVJedzDh51b%2Bp5pVQbTfBV26wbbP%2BDuwp4vQdP%2F0XHH%2B7FYrbw4GXiSHu6cppR21Miy8hPAWPfmRoHn2K0YOtc5XANomXBJElCTFnMZwcx84vCerjTmJGdYUprnCslH%2BS34IWte36ixrSiui2Fq%2ByQBRN2WZf10JKw1cF9PgYNq%2F9fRU%2FWA2rbCmNPg0ndXJeXQ3XtmDZ1zYYNdhfDWjHJw5XrZUpxS5WOKxb27Wkn0%2FqVGtv2G9CEiI%2FLmC%2BNeqQ6LWAIO%2Fm5WrtqSLPztbYg8g2uR%2FRpMILMYxEQTdwoXjMhSj86hsfzP1env4NPajV5UyQ%2FpnRrOHzRtQWqSAcAEbKntBqJo5PoHX5WsAgtRtG2U4am9UdCn0GN50GrtswFLN1ShauFoNtz%2Fq%2Fytpimg4wc7zdIJtqgGbq9pSbRYNByTFmqnjgorZoTFYtXrmRGgMnl0GjHMFaY5to2wN3DqL6ZOq3Wba59DRFM%2Bze1H4lhXaDyWmKb2CmYIHyBaJ7hwfqCsNzXE1oi7oPk3IJ3Neu2FEWWm0KEStMRMgf24%2BrLNDG%2FXpN%2FEvQmdadDkWumnTK%2FQTxehS82BOrMpq9pMPfF7MMGOqUBAxTddWZ6%2F48nF6D0tTF2EJfGrE9OhZH1GJhZqxlwilbpftLbGU8lqCHwhoRXkfQv7ltbKPLG72Kx19lVS%2BO78JowGn0dnuOP47TW7svP624sW0RO38jtngiP9KcbHK3kVMZhaOrsT39OiqmFa0%2BsDoeUqKuWH7XSXtJ3jwT5c2BXHFcMEgDkO3V4asMqWfAF%2FtV3q548FwBzcW268ivM%2BHtYOIWg&X-Amz-Signature=66cf3fa46a0e46dcc3f97cc1a38a86271265d0f0cbd0fd65525f9baf70d5a812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LXXRO2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHc0DWOu8Y%2F58954veru4gqCEzE4NiPi7O61msWMCJIAiEA9bn2FAOSYN0cHDf%2B72h2U01sQ8jJv9X%2BMo%2Bdc7GrcSsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVMTkMcWgjg2eE4ircA1s%2Bhlnvg6EsoZX0szPU3rPp9tYw5I45XUlxhGfVJedzDh51b%2Bp5pVQbTfBV26wbbP%2BDuwp4vQdP%2F0XHH%2B7FYrbw4GXiSHu6cppR21Miy8hPAWPfmRoHn2K0YOtc5XANomXBJElCTFnMZwcx84vCerjTmJGdYUprnCslH%2BS34IWte36ixrSiui2Fq%2ByQBRN2WZf10JKw1cF9PgYNq%2F9fRU%2FWA2rbCmNPg0ndXJeXQ3XtmDZ1zYYNdhfDWjHJw5XrZUpxS5WOKxb27Wkn0%2FqVGtv2G9CEiI%2FLmC%2BNeqQ6LWAIO%2Fm5WrtqSLPztbYg8g2uR%2FRpMILMYxEQTdwoXjMhSj86hsfzP1env4NPajV5UyQ%2FpnRrOHzRtQWqSAcAEbKntBqJo5PoHX5WsAgtRtG2U4am9UdCn0GN50GrtswFLN1ShauFoNtz%2Fq%2Fytpimg4wc7zdIJtqgGbq9pSbRYNByTFmqnjgorZoTFYtXrmRGgMnl0GjHMFaY5to2wN3DqL6ZOq3Wba59DRFM%2Bze1H4lhXaDyWmKb2CmYIHyBaJ7hwfqCsNzXE1oi7oPk3IJ3Neu2FEWWm0KEStMRMgf24%2BrLNDG%2FXpN%2FEvQmdadDkWumnTK%2FQTxehS82BOrMpq9pMPfF7MMGOqUBAxTddWZ6%2F48nF6D0tTF2EJfGrE9OhZH1GJhZqxlwilbpftLbGU8lqCHwhoRXkfQv7ltbKPLG72Kx19lVS%2BO78JowGn0dnuOP47TW7svP624sW0RO38jtngiP9KcbHK3kVMZhaOrsT39OiqmFa0%2BsDoeUqKuWH7XSXtJ3jwT5c2BXHFcMEgDkO3V4asMqWfAF%2FtV3q548FwBzcW268ivM%2BHtYOIWg&X-Amz-Signature=7ba54edca7128e5e05cbe260d8f28e5d0139ea50d20df5ca020321730aaf073a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
