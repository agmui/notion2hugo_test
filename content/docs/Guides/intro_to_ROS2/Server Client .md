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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEHEATD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDT5gvVR76orA9asf7p0hj7TC%2FgURlpS%2FD0fO00VrHgHAiEAvghHSNf8Am7V8H2kdm61XXy%2BtM4gpk72gwtlZYaLrGcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6FSMJNXVHzKizmNircAwCBrRArqbguSUnLLCk6iGcWJn0KsIkkQfH5fyYRboKSpxa8wRnMLCrEojukmJC4IgnpNwknes5U16wvLTnv9p7MKPZ6pDaiL9AnQnQrBSInDYIZyQiarN68pipzTrrTcKw4z5rAsOY79Vj32XcnNaK8W3HWx1vKcW3iX8bEVAcimNZszdYA0hGARuef1jpvULbXRpxn%2Bn8VphPXLMtwsz3o6khZoMPluj6Yq5S4uYkfFDWh56O9ZnXWNKQsXMRyjHuAGnJZLmOofiosC5hxA1zym9ANcExGcIFqvSfVKEdNFrgUZ9uQSn3C4wCHKwQSOvoLJfP2yT2w4iu%2FD7U0igtMAFmdfII8MMDLsOV2VtTECyreV9In6NJkHvMIMKyqCmLwZtmZtGmsia7LYqalPYUvbyx5Cv6mjfhrx%2F9YOjBGKp3zkd2JySOcE2RHa5qrnQ4m4KxEdibbQmTduTbfuzCEbyVzBQZrAbZbeO0yehow7q1iYnIThK51%2FveK9fZm7as8ESqoDQDO8u3hnFsAPGRk8R03Y7wG3AvS7buDGvK2AtTdK4WJvT89cWmeFdhzRwxRposqFFVMWcqMlyU%2FMxGGabpO%2BHmQnppjIPmh2LRbq%2FZf9QuqGmF7VIowMJyKur4GOqUBysXSHk8aavDpb0t1nEMZLn7p4uJq%2FleYHrPJNwXIE74NMHsqppqQ%2B7UGssl5EmsMyd%2FAlZqi0OKyi6fddlYWF6Ka4Urqhe4hT0gibG41kLigAVVlAtoqKer2DWUy9AnlCQ90qgU%2FoH0sfPwMRe1rE6Rj%2Bl6yNQcyLfq52sdPhL%2F1DwbqjTYtI9P8GLWa4VuLvMbyU9oDGdtcS2CebKwzgSwTiVed&X-Amz-Signature=9c95a8daad27ae21f69dd2bb56b2af4ad0e855e4ce747e52df02c8d58e9deebc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEHEATD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDT5gvVR76orA9asf7p0hj7TC%2FgURlpS%2FD0fO00VrHgHAiEAvghHSNf8Am7V8H2kdm61XXy%2BtM4gpk72gwtlZYaLrGcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6FSMJNXVHzKizmNircAwCBrRArqbguSUnLLCk6iGcWJn0KsIkkQfH5fyYRboKSpxa8wRnMLCrEojukmJC4IgnpNwknes5U16wvLTnv9p7MKPZ6pDaiL9AnQnQrBSInDYIZyQiarN68pipzTrrTcKw4z5rAsOY79Vj32XcnNaK8W3HWx1vKcW3iX8bEVAcimNZszdYA0hGARuef1jpvULbXRpxn%2Bn8VphPXLMtwsz3o6khZoMPluj6Yq5S4uYkfFDWh56O9ZnXWNKQsXMRyjHuAGnJZLmOofiosC5hxA1zym9ANcExGcIFqvSfVKEdNFrgUZ9uQSn3C4wCHKwQSOvoLJfP2yT2w4iu%2FD7U0igtMAFmdfII8MMDLsOV2VtTECyreV9In6NJkHvMIMKyqCmLwZtmZtGmsia7LYqalPYUvbyx5Cv6mjfhrx%2F9YOjBGKp3zkd2JySOcE2RHa5qrnQ4m4KxEdibbQmTduTbfuzCEbyVzBQZrAbZbeO0yehow7q1iYnIThK51%2FveK9fZm7as8ESqoDQDO8u3hnFsAPGRk8R03Y7wG3AvS7buDGvK2AtTdK4WJvT89cWmeFdhzRwxRposqFFVMWcqMlyU%2FMxGGabpO%2BHmQnppjIPmh2LRbq%2FZf9QuqGmF7VIowMJyKur4GOqUBysXSHk8aavDpb0t1nEMZLn7p4uJq%2FleYHrPJNwXIE74NMHsqppqQ%2B7UGssl5EmsMyd%2FAlZqi0OKyi6fddlYWF6Ka4Urqhe4hT0gibG41kLigAVVlAtoqKer2DWUy9AnlCQ90qgU%2FoH0sfPwMRe1rE6Rj%2Bl6yNQcyLfq52sdPhL%2F1DwbqjTYtI9P8GLWa4VuLvMbyU9oDGdtcS2CebKwzgSwTiVed&X-Amz-Signature=24df9fdb9c66fdb4d7e38ee6dc8f4af6d61153e931c1721ee21c62879c9c30e4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEHEATD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDT5gvVR76orA9asf7p0hj7TC%2FgURlpS%2FD0fO00VrHgHAiEAvghHSNf8Am7V8H2kdm61XXy%2BtM4gpk72gwtlZYaLrGcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6FSMJNXVHzKizmNircAwCBrRArqbguSUnLLCk6iGcWJn0KsIkkQfH5fyYRboKSpxa8wRnMLCrEojukmJC4IgnpNwknes5U16wvLTnv9p7MKPZ6pDaiL9AnQnQrBSInDYIZyQiarN68pipzTrrTcKw4z5rAsOY79Vj32XcnNaK8W3HWx1vKcW3iX8bEVAcimNZszdYA0hGARuef1jpvULbXRpxn%2Bn8VphPXLMtwsz3o6khZoMPluj6Yq5S4uYkfFDWh56O9ZnXWNKQsXMRyjHuAGnJZLmOofiosC5hxA1zym9ANcExGcIFqvSfVKEdNFrgUZ9uQSn3C4wCHKwQSOvoLJfP2yT2w4iu%2FD7U0igtMAFmdfII8MMDLsOV2VtTECyreV9In6NJkHvMIMKyqCmLwZtmZtGmsia7LYqalPYUvbyx5Cv6mjfhrx%2F9YOjBGKp3zkd2JySOcE2RHa5qrnQ4m4KxEdibbQmTduTbfuzCEbyVzBQZrAbZbeO0yehow7q1iYnIThK51%2FveK9fZm7as8ESqoDQDO8u3hnFsAPGRk8R03Y7wG3AvS7buDGvK2AtTdK4WJvT89cWmeFdhzRwxRposqFFVMWcqMlyU%2FMxGGabpO%2BHmQnppjIPmh2LRbq%2FZf9QuqGmF7VIowMJyKur4GOqUBysXSHk8aavDpb0t1nEMZLn7p4uJq%2FleYHrPJNwXIE74NMHsqppqQ%2B7UGssl5EmsMyd%2FAlZqi0OKyi6fddlYWF6Ka4Urqhe4hT0gibG41kLigAVVlAtoqKer2DWUy9AnlCQ90qgU%2FoH0sfPwMRe1rE6Rj%2Bl6yNQcyLfq52sdPhL%2F1DwbqjTYtI9P8GLWa4VuLvMbyU9oDGdtcS2CebKwzgSwTiVed&X-Amz-Signature=8c1effa9fc43011a8a3531c730345d8c7c5154aff56c0e6e5a68c8edb5138326&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEHEATD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDT5gvVR76orA9asf7p0hj7TC%2FgURlpS%2FD0fO00VrHgHAiEAvghHSNf8Am7V8H2kdm61XXy%2BtM4gpk72gwtlZYaLrGcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6FSMJNXVHzKizmNircAwCBrRArqbguSUnLLCk6iGcWJn0KsIkkQfH5fyYRboKSpxa8wRnMLCrEojukmJC4IgnpNwknes5U16wvLTnv9p7MKPZ6pDaiL9AnQnQrBSInDYIZyQiarN68pipzTrrTcKw4z5rAsOY79Vj32XcnNaK8W3HWx1vKcW3iX8bEVAcimNZszdYA0hGARuef1jpvULbXRpxn%2Bn8VphPXLMtwsz3o6khZoMPluj6Yq5S4uYkfFDWh56O9ZnXWNKQsXMRyjHuAGnJZLmOofiosC5hxA1zym9ANcExGcIFqvSfVKEdNFrgUZ9uQSn3C4wCHKwQSOvoLJfP2yT2w4iu%2FD7U0igtMAFmdfII8MMDLsOV2VtTECyreV9In6NJkHvMIMKyqCmLwZtmZtGmsia7LYqalPYUvbyx5Cv6mjfhrx%2F9YOjBGKp3zkd2JySOcE2RHa5qrnQ4m4KxEdibbQmTduTbfuzCEbyVzBQZrAbZbeO0yehow7q1iYnIThK51%2FveK9fZm7as8ESqoDQDO8u3hnFsAPGRk8R03Y7wG3AvS7buDGvK2AtTdK4WJvT89cWmeFdhzRwxRposqFFVMWcqMlyU%2FMxGGabpO%2BHmQnppjIPmh2LRbq%2FZf9QuqGmF7VIowMJyKur4GOqUBysXSHk8aavDpb0t1nEMZLn7p4uJq%2FleYHrPJNwXIE74NMHsqppqQ%2B7UGssl5EmsMyd%2FAlZqi0OKyi6fddlYWF6Ka4Urqhe4hT0gibG41kLigAVVlAtoqKer2DWUy9AnlCQ90qgU%2FoH0sfPwMRe1rE6Rj%2Bl6yNQcyLfq52sdPhL%2F1DwbqjTYtI9P8GLWa4VuLvMbyU9oDGdtcS2CebKwzgSwTiVed&X-Amz-Signature=c562698fbbd09ee1392084f153a9e84373ed1aa577298d7a6340ba7e935e6751&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEHEATD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDT5gvVR76orA9asf7p0hj7TC%2FgURlpS%2FD0fO00VrHgHAiEAvghHSNf8Am7V8H2kdm61XXy%2BtM4gpk72gwtlZYaLrGcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6FSMJNXVHzKizmNircAwCBrRArqbguSUnLLCk6iGcWJn0KsIkkQfH5fyYRboKSpxa8wRnMLCrEojukmJC4IgnpNwknes5U16wvLTnv9p7MKPZ6pDaiL9AnQnQrBSInDYIZyQiarN68pipzTrrTcKw4z5rAsOY79Vj32XcnNaK8W3HWx1vKcW3iX8bEVAcimNZszdYA0hGARuef1jpvULbXRpxn%2Bn8VphPXLMtwsz3o6khZoMPluj6Yq5S4uYkfFDWh56O9ZnXWNKQsXMRyjHuAGnJZLmOofiosC5hxA1zym9ANcExGcIFqvSfVKEdNFrgUZ9uQSn3C4wCHKwQSOvoLJfP2yT2w4iu%2FD7U0igtMAFmdfII8MMDLsOV2VtTECyreV9In6NJkHvMIMKyqCmLwZtmZtGmsia7LYqalPYUvbyx5Cv6mjfhrx%2F9YOjBGKp3zkd2JySOcE2RHa5qrnQ4m4KxEdibbQmTduTbfuzCEbyVzBQZrAbZbeO0yehow7q1iYnIThK51%2FveK9fZm7as8ESqoDQDO8u3hnFsAPGRk8R03Y7wG3AvS7buDGvK2AtTdK4WJvT89cWmeFdhzRwxRposqFFVMWcqMlyU%2FMxGGabpO%2BHmQnppjIPmh2LRbq%2FZf9QuqGmF7VIowMJyKur4GOqUBysXSHk8aavDpb0t1nEMZLn7p4uJq%2FleYHrPJNwXIE74NMHsqppqQ%2B7UGssl5EmsMyd%2FAlZqi0OKyi6fddlYWF6Ka4Urqhe4hT0gibG41kLigAVVlAtoqKer2DWUy9AnlCQ90qgU%2FoH0sfPwMRe1rE6Rj%2Bl6yNQcyLfq52sdPhL%2F1DwbqjTYtI9P8GLWa4VuLvMbyU9oDGdtcS2CebKwzgSwTiVed&X-Amz-Signature=310a8c73fed4ffe1be8fdbfd0911acf5efb0b79bc62b765c0255897cf7cbd7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
