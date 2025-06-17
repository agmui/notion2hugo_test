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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB63MBV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3erOfzn51VUOHYxj0w8ERVjry71wcFHcYiCWdPSTq6AiBQRl90yDslbGaFGVaiSmrpjfgW3u5%2F9Jq4CZPx%2B92Teyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHN97q%2By%2Fsj1QSbgYKtwDAFvzzFAuDa0GXGLLQn9p1ZdNhokXWHtz4naLpNHls8tdmCsYo5j%2BV6W%2B8u28o%2BZp%2FvYjdcuiCcrwiAr%2BJZSLSMZUGbvyhpg66QDo7o8szb2myXD80gumHW94XIdwxhtD%2FEMROAwQ9Qua9DGFFtBkrjLHiQ7ukFxNpoLt%2BBVVfd%2FQeUEO10rOfrK359ph5itBeq8tK%2Fo6yDkveNLmhP8%2FdztkDcqrtute%2F5%2B%2FrsK47lya%2B1pBBJcmANK1mIg6RQmaYyYYDotXKwG4RbakjF7ogaHmWADnQPLV9anAVcCSng9T%2BW01y%2BtL1b9PvnzkbRhFdLJf0dDs9V584h12qZt3Uu6t9xKA%2BQDu5dpHcA8vmwC9%2F%2F4O7HCgeGH3uB25P%2F%2BLQaxviDrq7tA9LJHtqI5XObFIc%2FZGuHzA8iEKFVRmp6m9RQmPxdl9nna8SZXQFLoWUWd0qwfeYax1goIv9qBNOrCsHULBVv7yVA4mFsHEoZrzgD7CK66IivnEPivbjsWFARVVeXMGoOCJGUqYNquMi2ckPoAwrtZJmxdm9wOpLXuPxynb7Ox%2B6C9xKoFsiIj84slqay0CBvJLrTJrcdu159YpEpHvoJfsBLasGy1v5h6BDBXpQ0gM%2FQffKw4wxsHDwgY6pgHCw1WNnSj0Xdg87V4maqLtTNpc3n2uMqDbI%2BhkfbO%2BvPX%2BBXTuaOt%2F%2BbdgKGj5%2F%2BrtpGT30TzKAzhDM6GvuSy%2BJwBhdggdxIJP1EE2t7nnMLiAwbTuzLSMUzo7tTFButjddwsj2gcos2e3MsPsYPxziTR13MOTmIUajCx5zYn4qXVsBhSYQ6gcqRHMcsLCqrfCeXD5ubsVjEfX%2F9iOSTiP4A0DLaiM&X-Amz-Signature=8f7f74ef5d13cb7211bf8a1135db70ca46354cbeb07ac1281a0407243ab2de35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB63MBV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3erOfzn51VUOHYxj0w8ERVjry71wcFHcYiCWdPSTq6AiBQRl90yDslbGaFGVaiSmrpjfgW3u5%2F9Jq4CZPx%2B92Teyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHN97q%2By%2Fsj1QSbgYKtwDAFvzzFAuDa0GXGLLQn9p1ZdNhokXWHtz4naLpNHls8tdmCsYo5j%2BV6W%2B8u28o%2BZp%2FvYjdcuiCcrwiAr%2BJZSLSMZUGbvyhpg66QDo7o8szb2myXD80gumHW94XIdwxhtD%2FEMROAwQ9Qua9DGFFtBkrjLHiQ7ukFxNpoLt%2BBVVfd%2FQeUEO10rOfrK359ph5itBeq8tK%2Fo6yDkveNLmhP8%2FdztkDcqrtute%2F5%2B%2FrsK47lya%2B1pBBJcmANK1mIg6RQmaYyYYDotXKwG4RbakjF7ogaHmWADnQPLV9anAVcCSng9T%2BW01y%2BtL1b9PvnzkbRhFdLJf0dDs9V584h12qZt3Uu6t9xKA%2BQDu5dpHcA8vmwC9%2F%2F4O7HCgeGH3uB25P%2F%2BLQaxviDrq7tA9LJHtqI5XObFIc%2FZGuHzA8iEKFVRmp6m9RQmPxdl9nna8SZXQFLoWUWd0qwfeYax1goIv9qBNOrCsHULBVv7yVA4mFsHEoZrzgD7CK66IivnEPivbjsWFARVVeXMGoOCJGUqYNquMi2ckPoAwrtZJmxdm9wOpLXuPxynb7Ox%2B6C9xKoFsiIj84slqay0CBvJLrTJrcdu159YpEpHvoJfsBLasGy1v5h6BDBXpQ0gM%2FQffKw4wxsHDwgY6pgHCw1WNnSj0Xdg87V4maqLtTNpc3n2uMqDbI%2BhkfbO%2BvPX%2BBXTuaOt%2F%2BbdgKGj5%2F%2BrtpGT30TzKAzhDM6GvuSy%2BJwBhdggdxIJP1EE2t7nnMLiAwbTuzLSMUzo7tTFButjddwsj2gcos2e3MsPsYPxziTR13MOTmIUajCx5zYn4qXVsBhSYQ6gcqRHMcsLCqrfCeXD5ubsVjEfX%2F9iOSTiP4A0DLaiM&X-Amz-Signature=002dc8bca4d6aae818076b9fa4cb1cafbeab40da032e1f5218b17e2194e03d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB63MBV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3erOfzn51VUOHYxj0w8ERVjry71wcFHcYiCWdPSTq6AiBQRl90yDslbGaFGVaiSmrpjfgW3u5%2F9Jq4CZPx%2B92Teyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHN97q%2By%2Fsj1QSbgYKtwDAFvzzFAuDa0GXGLLQn9p1ZdNhokXWHtz4naLpNHls8tdmCsYo5j%2BV6W%2B8u28o%2BZp%2FvYjdcuiCcrwiAr%2BJZSLSMZUGbvyhpg66QDo7o8szb2myXD80gumHW94XIdwxhtD%2FEMROAwQ9Qua9DGFFtBkrjLHiQ7ukFxNpoLt%2BBVVfd%2FQeUEO10rOfrK359ph5itBeq8tK%2Fo6yDkveNLmhP8%2FdztkDcqrtute%2F5%2B%2FrsK47lya%2B1pBBJcmANK1mIg6RQmaYyYYDotXKwG4RbakjF7ogaHmWADnQPLV9anAVcCSng9T%2BW01y%2BtL1b9PvnzkbRhFdLJf0dDs9V584h12qZt3Uu6t9xKA%2BQDu5dpHcA8vmwC9%2F%2F4O7HCgeGH3uB25P%2F%2BLQaxviDrq7tA9LJHtqI5XObFIc%2FZGuHzA8iEKFVRmp6m9RQmPxdl9nna8SZXQFLoWUWd0qwfeYax1goIv9qBNOrCsHULBVv7yVA4mFsHEoZrzgD7CK66IivnEPivbjsWFARVVeXMGoOCJGUqYNquMi2ckPoAwrtZJmxdm9wOpLXuPxynb7Ox%2B6C9xKoFsiIj84slqay0CBvJLrTJrcdu159YpEpHvoJfsBLasGy1v5h6BDBXpQ0gM%2FQffKw4wxsHDwgY6pgHCw1WNnSj0Xdg87V4maqLtTNpc3n2uMqDbI%2BhkfbO%2BvPX%2BBXTuaOt%2F%2BbdgKGj5%2F%2BrtpGT30TzKAzhDM6GvuSy%2BJwBhdggdxIJP1EE2t7nnMLiAwbTuzLSMUzo7tTFButjddwsj2gcos2e3MsPsYPxziTR13MOTmIUajCx5zYn4qXVsBhSYQ6gcqRHMcsLCqrfCeXD5ubsVjEfX%2F9iOSTiP4A0DLaiM&X-Amz-Signature=0a1004e362cb7d60adb20a7467346d582337e231b33a173acea57767b04a2cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB63MBV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3erOfzn51VUOHYxj0w8ERVjry71wcFHcYiCWdPSTq6AiBQRl90yDslbGaFGVaiSmrpjfgW3u5%2F9Jq4CZPx%2B92Teyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHN97q%2By%2Fsj1QSbgYKtwDAFvzzFAuDa0GXGLLQn9p1ZdNhokXWHtz4naLpNHls8tdmCsYo5j%2BV6W%2B8u28o%2BZp%2FvYjdcuiCcrwiAr%2BJZSLSMZUGbvyhpg66QDo7o8szb2myXD80gumHW94XIdwxhtD%2FEMROAwQ9Qua9DGFFtBkrjLHiQ7ukFxNpoLt%2BBVVfd%2FQeUEO10rOfrK359ph5itBeq8tK%2Fo6yDkveNLmhP8%2FdztkDcqrtute%2F5%2B%2FrsK47lya%2B1pBBJcmANK1mIg6RQmaYyYYDotXKwG4RbakjF7ogaHmWADnQPLV9anAVcCSng9T%2BW01y%2BtL1b9PvnzkbRhFdLJf0dDs9V584h12qZt3Uu6t9xKA%2BQDu5dpHcA8vmwC9%2F%2F4O7HCgeGH3uB25P%2F%2BLQaxviDrq7tA9LJHtqI5XObFIc%2FZGuHzA8iEKFVRmp6m9RQmPxdl9nna8SZXQFLoWUWd0qwfeYax1goIv9qBNOrCsHULBVv7yVA4mFsHEoZrzgD7CK66IivnEPivbjsWFARVVeXMGoOCJGUqYNquMi2ckPoAwrtZJmxdm9wOpLXuPxynb7Ox%2B6C9xKoFsiIj84slqay0CBvJLrTJrcdu159YpEpHvoJfsBLasGy1v5h6BDBXpQ0gM%2FQffKw4wxsHDwgY6pgHCw1WNnSj0Xdg87V4maqLtTNpc3n2uMqDbI%2BhkfbO%2BvPX%2BBXTuaOt%2F%2BbdgKGj5%2F%2BrtpGT30TzKAzhDM6GvuSy%2BJwBhdggdxIJP1EE2t7nnMLiAwbTuzLSMUzo7tTFButjddwsj2gcos2e3MsPsYPxziTR13MOTmIUajCx5zYn4qXVsBhSYQ6gcqRHMcsLCqrfCeXD5ubsVjEfX%2F9iOSTiP4A0DLaiM&X-Amz-Signature=231cd9ca1e76f97966d8a8072fa25a361d0c0a437448bac0ed18bdc397b5513a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB63MBV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3erOfzn51VUOHYxj0w8ERVjry71wcFHcYiCWdPSTq6AiBQRl90yDslbGaFGVaiSmrpjfgW3u5%2F9Jq4CZPx%2B92Teyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHN97q%2By%2Fsj1QSbgYKtwDAFvzzFAuDa0GXGLLQn9p1ZdNhokXWHtz4naLpNHls8tdmCsYo5j%2BV6W%2B8u28o%2BZp%2FvYjdcuiCcrwiAr%2BJZSLSMZUGbvyhpg66QDo7o8szb2myXD80gumHW94XIdwxhtD%2FEMROAwQ9Qua9DGFFtBkrjLHiQ7ukFxNpoLt%2BBVVfd%2FQeUEO10rOfrK359ph5itBeq8tK%2Fo6yDkveNLmhP8%2FdztkDcqrtute%2F5%2B%2FrsK47lya%2B1pBBJcmANK1mIg6RQmaYyYYDotXKwG4RbakjF7ogaHmWADnQPLV9anAVcCSng9T%2BW01y%2BtL1b9PvnzkbRhFdLJf0dDs9V584h12qZt3Uu6t9xKA%2BQDu5dpHcA8vmwC9%2F%2F4O7HCgeGH3uB25P%2F%2BLQaxviDrq7tA9LJHtqI5XObFIc%2FZGuHzA8iEKFVRmp6m9RQmPxdl9nna8SZXQFLoWUWd0qwfeYax1goIv9qBNOrCsHULBVv7yVA4mFsHEoZrzgD7CK66IivnEPivbjsWFARVVeXMGoOCJGUqYNquMi2ckPoAwrtZJmxdm9wOpLXuPxynb7Ox%2B6C9xKoFsiIj84slqay0CBvJLrTJrcdu159YpEpHvoJfsBLasGy1v5h6BDBXpQ0gM%2FQffKw4wxsHDwgY6pgHCw1WNnSj0Xdg87V4maqLtTNpc3n2uMqDbI%2BhkfbO%2BvPX%2BBXTuaOt%2F%2BbdgKGj5%2F%2BrtpGT30TzKAzhDM6GvuSy%2BJwBhdggdxIJP1EE2t7nnMLiAwbTuzLSMUzo7tTFButjddwsj2gcos2e3MsPsYPxziTR13MOTmIUajCx5zYn4qXVsBhSYQ6gcqRHMcsLCqrfCeXD5ubsVjEfX%2F9iOSTiP4A0DLaiM&X-Amz-Signature=a8a9575d795140bb0c81036c597d6db8a7b4cec7e969776a6d24aa1d6194bb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
