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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3RHYJL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDYWOjxETmiQEn5v%2BdEEqSPQL6tgrLc9hv1VUwQWSQyMQIhAPWUPSOKbslsTy50OToHV1A0FcuIXVw4WgJa1yl8OlVYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGGgq4ddU8x%2B%2BdPXwq3APqcKb4VcmX8CtI205TuTyoeR291B5lva%2FXCYP%2BtLyCcOpkpsvudNuQPFZKRm7wm5%2FDiLOeo%2FWPBYIeRMY2OKd05%2Fbfepp4%2B9HcXV14PhNWgy2pDPyLTUpMVrbJf7ulezlbCHnAk1Hyn4L4W20uFcG4fGbamSCVur1I4pF22YkDQR40%2Bx01J7FqtqyjAXfD4mX0dVKSxzbICLuPjy7Pl%2FLkyiByiiNNX4qLq0C4APX2sY3xqFrx5mUvtbzr6lf8zqLxx%2BSgFRglEdyyBJGTndANVSG3iyeiZp%2BNKGt%2BJWLNWMDNOji90fgTuyLGlMyI9WVHj9HTRx99if98qtaqK9qYw92OERBl1WXSk2UIlDUz5xM3doC5SW54M9qYy2FFBZRA%2FHFU2xo6X9oH%2BSG4lF6AeQ78cFm6F02F1do6EHfTCpXsq5%2FMaC3pvC6KGACDmB%2F8w5pK%2BuacrMSp6S3gOnORzvscX9UTsj6LKhvRA53aHsSvY56DMVQ0ipZuL1ztfaXPV2vLYFecToyovoGAPExQyNRacSCJLSSpVNTBWS7xRBYx%2Bv5A%2BllgtDEIW2ApTlbcRlgTG4CjHk0IxqUHgJpVJssSDnKaFeuF0r%2BRAzbh0nRbuD7bRbUayU5btjDkk7rBBjqkAWl6jsGVbLCkYumS3CgQLWosG3uzcnwDp8x%2BbmwjlAWhNrTw4ZGa9KWII2IxmteV8hxF8rqz64Dvlebk0Ihk9fNEn1v%2Fo7YdeKfuQUxL8sq3pHisY9UH46NmiQtraoo7CcDE9NgJ2ca3y172fa61A7nbUwFztQfgTYslpMOdZPO1syl7Od5%2B89jpxw0HI2VmIi%2FtA1wPiAgFD9RdjbT8j9ujZT8z&X-Amz-Signature=8efaf420e672710d76eb4d1661070a2057ebd15e810c7b427220ba8a0896fa58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3RHYJL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDYWOjxETmiQEn5v%2BdEEqSPQL6tgrLc9hv1VUwQWSQyMQIhAPWUPSOKbslsTy50OToHV1A0FcuIXVw4WgJa1yl8OlVYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGGgq4ddU8x%2B%2BdPXwq3APqcKb4VcmX8CtI205TuTyoeR291B5lva%2FXCYP%2BtLyCcOpkpsvudNuQPFZKRm7wm5%2FDiLOeo%2FWPBYIeRMY2OKd05%2Fbfepp4%2B9HcXV14PhNWgy2pDPyLTUpMVrbJf7ulezlbCHnAk1Hyn4L4W20uFcG4fGbamSCVur1I4pF22YkDQR40%2Bx01J7FqtqyjAXfD4mX0dVKSxzbICLuPjy7Pl%2FLkyiByiiNNX4qLq0C4APX2sY3xqFrx5mUvtbzr6lf8zqLxx%2BSgFRglEdyyBJGTndANVSG3iyeiZp%2BNKGt%2BJWLNWMDNOji90fgTuyLGlMyI9WVHj9HTRx99if98qtaqK9qYw92OERBl1WXSk2UIlDUz5xM3doC5SW54M9qYy2FFBZRA%2FHFU2xo6X9oH%2BSG4lF6AeQ78cFm6F02F1do6EHfTCpXsq5%2FMaC3pvC6KGACDmB%2F8w5pK%2BuacrMSp6S3gOnORzvscX9UTsj6LKhvRA53aHsSvY56DMVQ0ipZuL1ztfaXPV2vLYFecToyovoGAPExQyNRacSCJLSSpVNTBWS7xRBYx%2Bv5A%2BllgtDEIW2ApTlbcRlgTG4CjHk0IxqUHgJpVJssSDnKaFeuF0r%2BRAzbh0nRbuD7bRbUayU5btjDkk7rBBjqkAWl6jsGVbLCkYumS3CgQLWosG3uzcnwDp8x%2BbmwjlAWhNrTw4ZGa9KWII2IxmteV8hxF8rqz64Dvlebk0Ihk9fNEn1v%2Fo7YdeKfuQUxL8sq3pHisY9UH46NmiQtraoo7CcDE9NgJ2ca3y172fa61A7nbUwFztQfgTYslpMOdZPO1syl7Od5%2B89jpxw0HI2VmIi%2FtA1wPiAgFD9RdjbT8j9ujZT8z&X-Amz-Signature=e71ae5bef40c1a134e567ef80eceb7752ffe7e40f4445986a567482048b9f5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3RHYJL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDYWOjxETmiQEn5v%2BdEEqSPQL6tgrLc9hv1VUwQWSQyMQIhAPWUPSOKbslsTy50OToHV1A0FcuIXVw4WgJa1yl8OlVYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGGgq4ddU8x%2B%2BdPXwq3APqcKb4VcmX8CtI205TuTyoeR291B5lva%2FXCYP%2BtLyCcOpkpsvudNuQPFZKRm7wm5%2FDiLOeo%2FWPBYIeRMY2OKd05%2Fbfepp4%2B9HcXV14PhNWgy2pDPyLTUpMVrbJf7ulezlbCHnAk1Hyn4L4W20uFcG4fGbamSCVur1I4pF22YkDQR40%2Bx01J7FqtqyjAXfD4mX0dVKSxzbICLuPjy7Pl%2FLkyiByiiNNX4qLq0C4APX2sY3xqFrx5mUvtbzr6lf8zqLxx%2BSgFRglEdyyBJGTndANVSG3iyeiZp%2BNKGt%2BJWLNWMDNOji90fgTuyLGlMyI9WVHj9HTRx99if98qtaqK9qYw92OERBl1WXSk2UIlDUz5xM3doC5SW54M9qYy2FFBZRA%2FHFU2xo6X9oH%2BSG4lF6AeQ78cFm6F02F1do6EHfTCpXsq5%2FMaC3pvC6KGACDmB%2F8w5pK%2BuacrMSp6S3gOnORzvscX9UTsj6LKhvRA53aHsSvY56DMVQ0ipZuL1ztfaXPV2vLYFecToyovoGAPExQyNRacSCJLSSpVNTBWS7xRBYx%2Bv5A%2BllgtDEIW2ApTlbcRlgTG4CjHk0IxqUHgJpVJssSDnKaFeuF0r%2BRAzbh0nRbuD7bRbUayU5btjDkk7rBBjqkAWl6jsGVbLCkYumS3CgQLWosG3uzcnwDp8x%2BbmwjlAWhNrTw4ZGa9KWII2IxmteV8hxF8rqz64Dvlebk0Ihk9fNEn1v%2Fo7YdeKfuQUxL8sq3pHisY9UH46NmiQtraoo7CcDE9NgJ2ca3y172fa61A7nbUwFztQfgTYslpMOdZPO1syl7Od5%2B89jpxw0HI2VmIi%2FtA1wPiAgFD9RdjbT8j9ujZT8z&X-Amz-Signature=23e62faa79ac79cdcc7481a711ba3ab7e99774a31f3aa7b701db3dd9f2b63b18&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3RHYJL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDYWOjxETmiQEn5v%2BdEEqSPQL6tgrLc9hv1VUwQWSQyMQIhAPWUPSOKbslsTy50OToHV1A0FcuIXVw4WgJa1yl8OlVYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGGgq4ddU8x%2B%2BdPXwq3APqcKb4VcmX8CtI205TuTyoeR291B5lva%2FXCYP%2BtLyCcOpkpsvudNuQPFZKRm7wm5%2FDiLOeo%2FWPBYIeRMY2OKd05%2Fbfepp4%2B9HcXV14PhNWgy2pDPyLTUpMVrbJf7ulezlbCHnAk1Hyn4L4W20uFcG4fGbamSCVur1I4pF22YkDQR40%2Bx01J7FqtqyjAXfD4mX0dVKSxzbICLuPjy7Pl%2FLkyiByiiNNX4qLq0C4APX2sY3xqFrx5mUvtbzr6lf8zqLxx%2BSgFRglEdyyBJGTndANVSG3iyeiZp%2BNKGt%2BJWLNWMDNOji90fgTuyLGlMyI9WVHj9HTRx99if98qtaqK9qYw92OERBl1WXSk2UIlDUz5xM3doC5SW54M9qYy2FFBZRA%2FHFU2xo6X9oH%2BSG4lF6AeQ78cFm6F02F1do6EHfTCpXsq5%2FMaC3pvC6KGACDmB%2F8w5pK%2BuacrMSp6S3gOnORzvscX9UTsj6LKhvRA53aHsSvY56DMVQ0ipZuL1ztfaXPV2vLYFecToyovoGAPExQyNRacSCJLSSpVNTBWS7xRBYx%2Bv5A%2BllgtDEIW2ApTlbcRlgTG4CjHk0IxqUHgJpVJssSDnKaFeuF0r%2BRAzbh0nRbuD7bRbUayU5btjDkk7rBBjqkAWl6jsGVbLCkYumS3CgQLWosG3uzcnwDp8x%2BbmwjlAWhNrTw4ZGa9KWII2IxmteV8hxF8rqz64Dvlebk0Ihk9fNEn1v%2Fo7YdeKfuQUxL8sq3pHisY9UH46NmiQtraoo7CcDE9NgJ2ca3y172fa61A7nbUwFztQfgTYslpMOdZPO1syl7Od5%2B89jpxw0HI2VmIi%2FtA1wPiAgFD9RdjbT8j9ujZT8z&X-Amz-Signature=0b5abd78e1e408c7aa846881b0c114d9a47a20b6e527d5e48ad6ca293036ded0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3RHYJL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDYWOjxETmiQEn5v%2BdEEqSPQL6tgrLc9hv1VUwQWSQyMQIhAPWUPSOKbslsTy50OToHV1A0FcuIXVw4WgJa1yl8OlVYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGGgq4ddU8x%2B%2BdPXwq3APqcKb4VcmX8CtI205TuTyoeR291B5lva%2FXCYP%2BtLyCcOpkpsvudNuQPFZKRm7wm5%2FDiLOeo%2FWPBYIeRMY2OKd05%2Fbfepp4%2B9HcXV14PhNWgy2pDPyLTUpMVrbJf7ulezlbCHnAk1Hyn4L4W20uFcG4fGbamSCVur1I4pF22YkDQR40%2Bx01J7FqtqyjAXfD4mX0dVKSxzbICLuPjy7Pl%2FLkyiByiiNNX4qLq0C4APX2sY3xqFrx5mUvtbzr6lf8zqLxx%2BSgFRglEdyyBJGTndANVSG3iyeiZp%2BNKGt%2BJWLNWMDNOji90fgTuyLGlMyI9WVHj9HTRx99if98qtaqK9qYw92OERBl1WXSk2UIlDUz5xM3doC5SW54M9qYy2FFBZRA%2FHFU2xo6X9oH%2BSG4lF6AeQ78cFm6F02F1do6EHfTCpXsq5%2FMaC3pvC6KGACDmB%2F8w5pK%2BuacrMSp6S3gOnORzvscX9UTsj6LKhvRA53aHsSvY56DMVQ0ipZuL1ztfaXPV2vLYFecToyovoGAPExQyNRacSCJLSSpVNTBWS7xRBYx%2Bv5A%2BllgtDEIW2ApTlbcRlgTG4CjHk0IxqUHgJpVJssSDnKaFeuF0r%2BRAzbh0nRbuD7bRbUayU5btjDkk7rBBjqkAWl6jsGVbLCkYumS3CgQLWosG3uzcnwDp8x%2BbmwjlAWhNrTw4ZGa9KWII2IxmteV8hxF8rqz64Dvlebk0Ihk9fNEn1v%2Fo7YdeKfuQUxL8sq3pHisY9UH46NmiQtraoo7CcDE9NgJ2ca3y172fa61A7nbUwFztQfgTYslpMOdZPO1syl7Od5%2B89jpxw0HI2VmIi%2FtA1wPiAgFD9RdjbT8j9ujZT8z&X-Amz-Signature=2b61399195437f5a5147ac9f149b3fb521dbe30371ab6559f99c3320de17d423&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
