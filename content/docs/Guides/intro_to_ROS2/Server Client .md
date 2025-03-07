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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYWKBON%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoAz4%2FikLe6VtTvOPybT9Q%2F92mPaUc8VV9%2FQNu15AJAwIhAP%2BW%2BB41BPWkMFMSowPOW1HEfltjrnyzJ2iZ2XVsXUzKKv8DCEMQABoMNjM3NDIzMTgzODA1IgzeBEpIru%2FkPHVF6t0q3AO8wqCNevPQNuvRHVkw9h8To3%2F08KpzmL7K2SW%2Fx5zIruQAgokuR5xGwYOoSGa2o%2F9xhrt0PHmcu4mFNDLitJ4kEiSXF3m5EP%2FpOczDp6w7xq94oCgNGUYMmplmllab3Bpwvr3qid2kG7DEvhOK563GpOH%2FrAKoQKcBS0y3zVFkzMiEZ9x27yqWIEZTjPHN6WfEeXb2jcmHbeoSZUtkKIh3XfyBJflvxcxJC8Lr6jk1QgsV7abO6M8UYst7n2wJ1%2FFoeEoyPzPikPBjR%2B5R%2F1PzneoSKZXeugv6RQSAlDZQ2C0arr%2BMO8r70xWKoLYpopmNhLcl9Dju%2B8mZpey1dU1YTbliA3v7vh5M5Vm7Dapg49btbJbX%2BNZs0AcIoxgDNtAGqonWgTgzoN%2FGWR9ts9JyhyN2Hkgw99P5LJqsG0VclOV1mqq26M%2BYHo4mdzIQ9nkucz92k%2BzUqceqGzhiaBdjINn7e%2BkzMJTqWpXldzXHuxWsT4TJwPLsKTg3GaRcup%2FuNDvh5mDxGzf2EGX8b%2FG928007ZJkkcqfdtFgfTB24D%2BBjuoOCVIAcm6%2F4monQ1sq%2BjaIu7V%2Ft53XyJYc1zBL56WGWswSU3jxgyJWLGUnfitmf1eCFZ23FMR47TCdiKu%2BBjqkAX%2Bq1PvBtuMl3vP%2FDjsfOvJPmBCRclX0%2FRpXraYblMm54zu1AJSCnc7yaEgb0e7HhJ7HAyuL74ybf0%2B4AJTiZTFddJGp27XvkbCKXrobaRfRSGaz5YLyY6XmjIrWQkt4vQhiQqkEq%2FSqmgsdN%2Fx0shhjDwETuD63w79QORvJ3YXNr8jSIr3RqlUMVvTpTsMimvFx7nd38PRjoa2gdMxOLkKgcq%2FO&X-Amz-Signature=a1062f78d03c0274248338e398348758f03ee2fa6a101598bfcf6b145204ed63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYWKBON%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoAz4%2FikLe6VtTvOPybT9Q%2F92mPaUc8VV9%2FQNu15AJAwIhAP%2BW%2BB41BPWkMFMSowPOW1HEfltjrnyzJ2iZ2XVsXUzKKv8DCEMQABoMNjM3NDIzMTgzODA1IgzeBEpIru%2FkPHVF6t0q3AO8wqCNevPQNuvRHVkw9h8To3%2F08KpzmL7K2SW%2Fx5zIruQAgokuR5xGwYOoSGa2o%2F9xhrt0PHmcu4mFNDLitJ4kEiSXF3m5EP%2FpOczDp6w7xq94oCgNGUYMmplmllab3Bpwvr3qid2kG7DEvhOK563GpOH%2FrAKoQKcBS0y3zVFkzMiEZ9x27yqWIEZTjPHN6WfEeXb2jcmHbeoSZUtkKIh3XfyBJflvxcxJC8Lr6jk1QgsV7abO6M8UYst7n2wJ1%2FFoeEoyPzPikPBjR%2B5R%2F1PzneoSKZXeugv6RQSAlDZQ2C0arr%2BMO8r70xWKoLYpopmNhLcl9Dju%2B8mZpey1dU1YTbliA3v7vh5M5Vm7Dapg49btbJbX%2BNZs0AcIoxgDNtAGqonWgTgzoN%2FGWR9ts9JyhyN2Hkgw99P5LJqsG0VclOV1mqq26M%2BYHo4mdzIQ9nkucz92k%2BzUqceqGzhiaBdjINn7e%2BkzMJTqWpXldzXHuxWsT4TJwPLsKTg3GaRcup%2FuNDvh5mDxGzf2EGX8b%2FG928007ZJkkcqfdtFgfTB24D%2BBjuoOCVIAcm6%2F4monQ1sq%2BjaIu7V%2Ft53XyJYc1zBL56WGWswSU3jxgyJWLGUnfitmf1eCFZ23FMR47TCdiKu%2BBjqkAX%2Bq1PvBtuMl3vP%2FDjsfOvJPmBCRclX0%2FRpXraYblMm54zu1AJSCnc7yaEgb0e7HhJ7HAyuL74ybf0%2B4AJTiZTFddJGp27XvkbCKXrobaRfRSGaz5YLyY6XmjIrWQkt4vQhiQqkEq%2FSqmgsdN%2Fx0shhjDwETuD63w79QORvJ3YXNr8jSIr3RqlUMVvTpTsMimvFx7nd38PRjoa2gdMxOLkKgcq%2FO&X-Amz-Signature=488723ca6a95c018a2ded30981d69500d74295fff13c9eeadba30132749b8f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYWKBON%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoAz4%2FikLe6VtTvOPybT9Q%2F92mPaUc8VV9%2FQNu15AJAwIhAP%2BW%2BB41BPWkMFMSowPOW1HEfltjrnyzJ2iZ2XVsXUzKKv8DCEMQABoMNjM3NDIzMTgzODA1IgzeBEpIru%2FkPHVF6t0q3AO8wqCNevPQNuvRHVkw9h8To3%2F08KpzmL7K2SW%2Fx5zIruQAgokuR5xGwYOoSGa2o%2F9xhrt0PHmcu4mFNDLitJ4kEiSXF3m5EP%2FpOczDp6w7xq94oCgNGUYMmplmllab3Bpwvr3qid2kG7DEvhOK563GpOH%2FrAKoQKcBS0y3zVFkzMiEZ9x27yqWIEZTjPHN6WfEeXb2jcmHbeoSZUtkKIh3XfyBJflvxcxJC8Lr6jk1QgsV7abO6M8UYst7n2wJ1%2FFoeEoyPzPikPBjR%2B5R%2F1PzneoSKZXeugv6RQSAlDZQ2C0arr%2BMO8r70xWKoLYpopmNhLcl9Dju%2B8mZpey1dU1YTbliA3v7vh5M5Vm7Dapg49btbJbX%2BNZs0AcIoxgDNtAGqonWgTgzoN%2FGWR9ts9JyhyN2Hkgw99P5LJqsG0VclOV1mqq26M%2BYHo4mdzIQ9nkucz92k%2BzUqceqGzhiaBdjINn7e%2BkzMJTqWpXldzXHuxWsT4TJwPLsKTg3GaRcup%2FuNDvh5mDxGzf2EGX8b%2FG928007ZJkkcqfdtFgfTB24D%2BBjuoOCVIAcm6%2F4monQ1sq%2BjaIu7V%2Ft53XyJYc1zBL56WGWswSU3jxgyJWLGUnfitmf1eCFZ23FMR47TCdiKu%2BBjqkAX%2Bq1PvBtuMl3vP%2FDjsfOvJPmBCRclX0%2FRpXraYblMm54zu1AJSCnc7yaEgb0e7HhJ7HAyuL74ybf0%2B4AJTiZTFddJGp27XvkbCKXrobaRfRSGaz5YLyY6XmjIrWQkt4vQhiQqkEq%2FSqmgsdN%2Fx0shhjDwETuD63w79QORvJ3YXNr8jSIr3RqlUMVvTpTsMimvFx7nd38PRjoa2gdMxOLkKgcq%2FO&X-Amz-Signature=4d6e809f4a766da2506b8270b0b566f2fe4b176d883f12f0b54f22d494e30d10&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYWKBON%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoAz4%2FikLe6VtTvOPybT9Q%2F92mPaUc8VV9%2FQNu15AJAwIhAP%2BW%2BB41BPWkMFMSowPOW1HEfltjrnyzJ2iZ2XVsXUzKKv8DCEMQABoMNjM3NDIzMTgzODA1IgzeBEpIru%2FkPHVF6t0q3AO8wqCNevPQNuvRHVkw9h8To3%2F08KpzmL7K2SW%2Fx5zIruQAgokuR5xGwYOoSGa2o%2F9xhrt0PHmcu4mFNDLitJ4kEiSXF3m5EP%2FpOczDp6w7xq94oCgNGUYMmplmllab3Bpwvr3qid2kG7DEvhOK563GpOH%2FrAKoQKcBS0y3zVFkzMiEZ9x27yqWIEZTjPHN6WfEeXb2jcmHbeoSZUtkKIh3XfyBJflvxcxJC8Lr6jk1QgsV7abO6M8UYst7n2wJ1%2FFoeEoyPzPikPBjR%2B5R%2F1PzneoSKZXeugv6RQSAlDZQ2C0arr%2BMO8r70xWKoLYpopmNhLcl9Dju%2B8mZpey1dU1YTbliA3v7vh5M5Vm7Dapg49btbJbX%2BNZs0AcIoxgDNtAGqonWgTgzoN%2FGWR9ts9JyhyN2Hkgw99P5LJqsG0VclOV1mqq26M%2BYHo4mdzIQ9nkucz92k%2BzUqceqGzhiaBdjINn7e%2BkzMJTqWpXldzXHuxWsT4TJwPLsKTg3GaRcup%2FuNDvh5mDxGzf2EGX8b%2FG928007ZJkkcqfdtFgfTB24D%2BBjuoOCVIAcm6%2F4monQ1sq%2BjaIu7V%2Ft53XyJYc1zBL56WGWswSU3jxgyJWLGUnfitmf1eCFZ23FMR47TCdiKu%2BBjqkAX%2Bq1PvBtuMl3vP%2FDjsfOvJPmBCRclX0%2FRpXraYblMm54zu1AJSCnc7yaEgb0e7HhJ7HAyuL74ybf0%2B4AJTiZTFddJGp27XvkbCKXrobaRfRSGaz5YLyY6XmjIrWQkt4vQhiQqkEq%2FSqmgsdN%2Fx0shhjDwETuD63w79QORvJ3YXNr8jSIr3RqlUMVvTpTsMimvFx7nd38PRjoa2gdMxOLkKgcq%2FO&X-Amz-Signature=53724423c824a345a438b9a794c00d04cc588dfbe6d706ac1052fb323aba1f62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYWKBON%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoAz4%2FikLe6VtTvOPybT9Q%2F92mPaUc8VV9%2FQNu15AJAwIhAP%2BW%2BB41BPWkMFMSowPOW1HEfltjrnyzJ2iZ2XVsXUzKKv8DCEMQABoMNjM3NDIzMTgzODA1IgzeBEpIru%2FkPHVF6t0q3AO8wqCNevPQNuvRHVkw9h8To3%2F08KpzmL7K2SW%2Fx5zIruQAgokuR5xGwYOoSGa2o%2F9xhrt0PHmcu4mFNDLitJ4kEiSXF3m5EP%2FpOczDp6w7xq94oCgNGUYMmplmllab3Bpwvr3qid2kG7DEvhOK563GpOH%2FrAKoQKcBS0y3zVFkzMiEZ9x27yqWIEZTjPHN6WfEeXb2jcmHbeoSZUtkKIh3XfyBJflvxcxJC8Lr6jk1QgsV7abO6M8UYst7n2wJ1%2FFoeEoyPzPikPBjR%2B5R%2F1PzneoSKZXeugv6RQSAlDZQ2C0arr%2BMO8r70xWKoLYpopmNhLcl9Dju%2B8mZpey1dU1YTbliA3v7vh5M5Vm7Dapg49btbJbX%2BNZs0AcIoxgDNtAGqonWgTgzoN%2FGWR9ts9JyhyN2Hkgw99P5LJqsG0VclOV1mqq26M%2BYHo4mdzIQ9nkucz92k%2BzUqceqGzhiaBdjINn7e%2BkzMJTqWpXldzXHuxWsT4TJwPLsKTg3GaRcup%2FuNDvh5mDxGzf2EGX8b%2FG928007ZJkkcqfdtFgfTB24D%2BBjuoOCVIAcm6%2F4monQ1sq%2BjaIu7V%2Ft53XyJYc1zBL56WGWswSU3jxgyJWLGUnfitmf1eCFZ23FMR47TCdiKu%2BBjqkAX%2Bq1PvBtuMl3vP%2FDjsfOvJPmBCRclX0%2FRpXraYblMm54zu1AJSCnc7yaEgb0e7HhJ7HAyuL74ybf0%2B4AJTiZTFddJGp27XvkbCKXrobaRfRSGaz5YLyY6XmjIrWQkt4vQhiQqkEq%2FSqmgsdN%2Fx0shhjDwETuD63w79QORvJ3YXNr8jSIr3RqlUMVvTpTsMimvFx7nd38PRjoa2gdMxOLkKgcq%2FO&X-Amz-Signature=3a6bd05ae2edfed572011535bd3c2bf37aa7d4c574371d14926825b51fe67fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
