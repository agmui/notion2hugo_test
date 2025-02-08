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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4DUQWF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCoNTHnksFrN%2BucDeZJys5l9DtLqF38zfU7UP%2BTlPNsDAIhAOPOWJEFNCRwsj4gf4j09YEWscqFNEtyKBu9QhZD39N2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz97rrPC%2FnYzmUiN4q3AOfx9au7NjUkwcsvZ7%2BVtStKRICCKtA%2FvJSIjNKTaO1N3J8s7knpaXA3fyV3SbV2ZPHzb9zRPagWMdRzkWgo7L37fXm3zvOXipK47T0RYxtwmOft%2FoT1X4glSxUMjPOL9VdPXRbcklcIgS%2FAHNysdHJS5Ojam%2B0NFyugoVlkMweJOg8YFeLOfE%2Fm6PcvXkopeYTyNK96pVHympMcx%2BIaS0rbhyLHwRvKddnC4KlfgOYuyEL9T%2FFKby7mUWe75F%2Bmm%2Fy7AOqlGOE8lRA2UaG0wAPRIHPBm5DQ%2BIAtpHgWrnR0rmg1eP03mfbFcg4wjlXsQ4OppVTjacmfXhL82Gead9vmaNeFEHynsgTk%2Fz5LyMqOkFWxgZ%2BUsNP38qNHWaIuJaG1UT4xcOLoGsjY2nX%2FcoMLqg77EhSlJlDweGhKyM7h%2BarBXEKrZRJ%2F1qOcDjwxDLaiUFrUZmXmMWkEqZE5agT3Pnrnx9EGJD8HFea%2FAKtTVnJNt1Qgj7yTWi2qq9HL%2F27orFnxzWfi8aHCvGkWs%2FMy6Y8sj9BYrQbVSx072i9j3ms0M2MMLRWq5KVxxMoDRW7K%2F8KFAKxddlLJTKaG%2BQCnVRXW7A5p7P5BpwB8UTeznH8WBR5IH1f%2BR3paDCjkJy9BjqkAc6wMSQ3BWXBMiNMO3Eq4n12DDYB8%2Fn3a2NeCsPZUxnFHEOQHont7MTkvtOcTiV38b44z1aqNOADMB5oFCecvxpbHN65K3r%2BPHBVT347k8poOd4JB4Nh0N66fZEcLzZhGHbR9xyX2DGMszYsKfWnJsm%2BpbRwSXEH0cJ9u52R0kVgyecbccwtAl7dtVDV6omIn0n0JMBV7zlsTbmDOi8FozXdjdXz&X-Amz-Signature=5071e1a3da01a06a98ed4d193ef54cefea63c6555ca83fe04123326570b368a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4DUQWF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCoNTHnksFrN%2BucDeZJys5l9DtLqF38zfU7UP%2BTlPNsDAIhAOPOWJEFNCRwsj4gf4j09YEWscqFNEtyKBu9QhZD39N2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz97rrPC%2FnYzmUiN4q3AOfx9au7NjUkwcsvZ7%2BVtStKRICCKtA%2FvJSIjNKTaO1N3J8s7knpaXA3fyV3SbV2ZPHzb9zRPagWMdRzkWgo7L37fXm3zvOXipK47T0RYxtwmOft%2FoT1X4glSxUMjPOL9VdPXRbcklcIgS%2FAHNysdHJS5Ojam%2B0NFyugoVlkMweJOg8YFeLOfE%2Fm6PcvXkopeYTyNK96pVHympMcx%2BIaS0rbhyLHwRvKddnC4KlfgOYuyEL9T%2FFKby7mUWe75F%2Bmm%2Fy7AOqlGOE8lRA2UaG0wAPRIHPBm5DQ%2BIAtpHgWrnR0rmg1eP03mfbFcg4wjlXsQ4OppVTjacmfXhL82Gead9vmaNeFEHynsgTk%2Fz5LyMqOkFWxgZ%2BUsNP38qNHWaIuJaG1UT4xcOLoGsjY2nX%2FcoMLqg77EhSlJlDweGhKyM7h%2BarBXEKrZRJ%2F1qOcDjwxDLaiUFrUZmXmMWkEqZE5agT3Pnrnx9EGJD8HFea%2FAKtTVnJNt1Qgj7yTWi2qq9HL%2F27orFnxzWfi8aHCvGkWs%2FMy6Y8sj9BYrQbVSx072i9j3ms0M2MMLRWq5KVxxMoDRW7K%2F8KFAKxddlLJTKaG%2BQCnVRXW7A5p7P5BpwB8UTeznH8WBR5IH1f%2BR3paDCjkJy9BjqkAc6wMSQ3BWXBMiNMO3Eq4n12DDYB8%2Fn3a2NeCsPZUxnFHEOQHont7MTkvtOcTiV38b44z1aqNOADMB5oFCecvxpbHN65K3r%2BPHBVT347k8poOd4JB4Nh0N66fZEcLzZhGHbR9xyX2DGMszYsKfWnJsm%2BpbRwSXEH0cJ9u52R0kVgyecbccwtAl7dtVDV6omIn0n0JMBV7zlsTbmDOi8FozXdjdXz&X-Amz-Signature=fbea034cbf0224cc070f2d42c1fd73e3de5224e21a914d46089b41dc1b909469&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4DUQWF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCoNTHnksFrN%2BucDeZJys5l9DtLqF38zfU7UP%2BTlPNsDAIhAOPOWJEFNCRwsj4gf4j09YEWscqFNEtyKBu9QhZD39N2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz97rrPC%2FnYzmUiN4q3AOfx9au7NjUkwcsvZ7%2BVtStKRICCKtA%2FvJSIjNKTaO1N3J8s7knpaXA3fyV3SbV2ZPHzb9zRPagWMdRzkWgo7L37fXm3zvOXipK47T0RYxtwmOft%2FoT1X4glSxUMjPOL9VdPXRbcklcIgS%2FAHNysdHJS5Ojam%2B0NFyugoVlkMweJOg8YFeLOfE%2Fm6PcvXkopeYTyNK96pVHympMcx%2BIaS0rbhyLHwRvKddnC4KlfgOYuyEL9T%2FFKby7mUWe75F%2Bmm%2Fy7AOqlGOE8lRA2UaG0wAPRIHPBm5DQ%2BIAtpHgWrnR0rmg1eP03mfbFcg4wjlXsQ4OppVTjacmfXhL82Gead9vmaNeFEHynsgTk%2Fz5LyMqOkFWxgZ%2BUsNP38qNHWaIuJaG1UT4xcOLoGsjY2nX%2FcoMLqg77EhSlJlDweGhKyM7h%2BarBXEKrZRJ%2F1qOcDjwxDLaiUFrUZmXmMWkEqZE5agT3Pnrnx9EGJD8HFea%2FAKtTVnJNt1Qgj7yTWi2qq9HL%2F27orFnxzWfi8aHCvGkWs%2FMy6Y8sj9BYrQbVSx072i9j3ms0M2MMLRWq5KVxxMoDRW7K%2F8KFAKxddlLJTKaG%2BQCnVRXW7A5p7P5BpwB8UTeznH8WBR5IH1f%2BR3paDCjkJy9BjqkAc6wMSQ3BWXBMiNMO3Eq4n12DDYB8%2Fn3a2NeCsPZUxnFHEOQHont7MTkvtOcTiV38b44z1aqNOADMB5oFCecvxpbHN65K3r%2BPHBVT347k8poOd4JB4Nh0N66fZEcLzZhGHbR9xyX2DGMszYsKfWnJsm%2BpbRwSXEH0cJ9u52R0kVgyecbccwtAl7dtVDV6omIn0n0JMBV7zlsTbmDOi8FozXdjdXz&X-Amz-Signature=25623098461dccffc8a698113436d91986bafab70f8b681332217b27b60f9488&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4DUQWF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCoNTHnksFrN%2BucDeZJys5l9DtLqF38zfU7UP%2BTlPNsDAIhAOPOWJEFNCRwsj4gf4j09YEWscqFNEtyKBu9QhZD39N2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz97rrPC%2FnYzmUiN4q3AOfx9au7NjUkwcsvZ7%2BVtStKRICCKtA%2FvJSIjNKTaO1N3J8s7knpaXA3fyV3SbV2ZPHzb9zRPagWMdRzkWgo7L37fXm3zvOXipK47T0RYxtwmOft%2FoT1X4glSxUMjPOL9VdPXRbcklcIgS%2FAHNysdHJS5Ojam%2B0NFyugoVlkMweJOg8YFeLOfE%2Fm6PcvXkopeYTyNK96pVHympMcx%2BIaS0rbhyLHwRvKddnC4KlfgOYuyEL9T%2FFKby7mUWe75F%2Bmm%2Fy7AOqlGOE8lRA2UaG0wAPRIHPBm5DQ%2BIAtpHgWrnR0rmg1eP03mfbFcg4wjlXsQ4OppVTjacmfXhL82Gead9vmaNeFEHynsgTk%2Fz5LyMqOkFWxgZ%2BUsNP38qNHWaIuJaG1UT4xcOLoGsjY2nX%2FcoMLqg77EhSlJlDweGhKyM7h%2BarBXEKrZRJ%2F1qOcDjwxDLaiUFrUZmXmMWkEqZE5agT3Pnrnx9EGJD8HFea%2FAKtTVnJNt1Qgj7yTWi2qq9HL%2F27orFnxzWfi8aHCvGkWs%2FMy6Y8sj9BYrQbVSx072i9j3ms0M2MMLRWq5KVxxMoDRW7K%2F8KFAKxddlLJTKaG%2BQCnVRXW7A5p7P5BpwB8UTeznH8WBR5IH1f%2BR3paDCjkJy9BjqkAc6wMSQ3BWXBMiNMO3Eq4n12DDYB8%2Fn3a2NeCsPZUxnFHEOQHont7MTkvtOcTiV38b44z1aqNOADMB5oFCecvxpbHN65K3r%2BPHBVT347k8poOd4JB4Nh0N66fZEcLzZhGHbR9xyX2DGMszYsKfWnJsm%2BpbRwSXEH0cJ9u52R0kVgyecbccwtAl7dtVDV6omIn0n0JMBV7zlsTbmDOi8FozXdjdXz&X-Amz-Signature=46964250752c09e951597f77b22bd3b7ea6f8c40594ff4e9201377d9899caf4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4DUQWF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCoNTHnksFrN%2BucDeZJys5l9DtLqF38zfU7UP%2BTlPNsDAIhAOPOWJEFNCRwsj4gf4j09YEWscqFNEtyKBu9QhZD39N2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz97rrPC%2FnYzmUiN4q3AOfx9au7NjUkwcsvZ7%2BVtStKRICCKtA%2FvJSIjNKTaO1N3J8s7knpaXA3fyV3SbV2ZPHzb9zRPagWMdRzkWgo7L37fXm3zvOXipK47T0RYxtwmOft%2FoT1X4glSxUMjPOL9VdPXRbcklcIgS%2FAHNysdHJS5Ojam%2B0NFyugoVlkMweJOg8YFeLOfE%2Fm6PcvXkopeYTyNK96pVHympMcx%2BIaS0rbhyLHwRvKddnC4KlfgOYuyEL9T%2FFKby7mUWe75F%2Bmm%2Fy7AOqlGOE8lRA2UaG0wAPRIHPBm5DQ%2BIAtpHgWrnR0rmg1eP03mfbFcg4wjlXsQ4OppVTjacmfXhL82Gead9vmaNeFEHynsgTk%2Fz5LyMqOkFWxgZ%2BUsNP38qNHWaIuJaG1UT4xcOLoGsjY2nX%2FcoMLqg77EhSlJlDweGhKyM7h%2BarBXEKrZRJ%2F1qOcDjwxDLaiUFrUZmXmMWkEqZE5agT3Pnrnx9EGJD8HFea%2FAKtTVnJNt1Qgj7yTWi2qq9HL%2F27orFnxzWfi8aHCvGkWs%2FMy6Y8sj9BYrQbVSx072i9j3ms0M2MMLRWq5KVxxMoDRW7K%2F8KFAKxddlLJTKaG%2BQCnVRXW7A5p7P5BpwB8UTeznH8WBR5IH1f%2BR3paDCjkJy9BjqkAc6wMSQ3BWXBMiNMO3Eq4n12DDYB8%2Fn3a2NeCsPZUxnFHEOQHont7MTkvtOcTiV38b44z1aqNOADMB5oFCecvxpbHN65K3r%2BPHBVT347k8poOd4JB4Nh0N66fZEcLzZhGHbR9xyX2DGMszYsKfWnJsm%2BpbRwSXEH0cJ9u52R0kVgyecbccwtAl7dtVDV6omIn0n0JMBV7zlsTbmDOi8FozXdjdXz&X-Amz-Signature=08adb13cd8c39cc252756117700e91530c70e59d8d8804573026c23ad3f0b2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
