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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUGAWLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3sqIidCWi5Wd4%2FQCm%2B1rVMBPCay6IimLCBby3M%2FPlZAiBY0cG%2BydY%2BgWdbo21tZ0GsJd9%2FfLZjkVq8aQ2g%2FLcM%2Byr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMTAOjU2v71J4KOmZdKtwDn1Qof%2F%2FyHryQP5oLvncld%2FVRXUO%2FTQ2kn2MlRSsF28gZUoiLK%2BmxopLB3sZoLjDP%2FIb2O01hugw9DmocwlpvVzAcNzLA8Os6Hs2e9hY9mpOSeVbCZA3yVBu7uc%2Bcr347t%2FZgUZNPxv%2B8X%2F5RRXN3EClXZrOJ9m5IdVgZts5pCcqMepAiVby7DjO5pbFHj1CFe1geofrsG1rlTvczY9XhDe1kf%2FE56w%2FiixdRwbaDJjJysElKqkuB7Zkg1d3ta7aef9dpYa2vIdkUwiNAlFDtlokps%2B73wD0AEdggWj9k2wEvwomYsIiHzsoKxsNFVMZPvUmldKhUlvZ4WUKqYBJuxmpQw7S71hc3MS82GuaD0NWdilxRWoaHg0v8%2FUy%2FS5FKV7F9EDTX9kx8SjPHyXDXljqPHORx9pyXGnvi6Ad12FCY8Yf13F2PHtgcpSJVNlkTHpDckQOxN7nQp1GA22r7Nm15bXUC0BDnY7X2%2BmYfOmf3VTwh56YdRKj6wer6tJZQC9P1lCIecFwiJsmOmsRSs3iookaGuBLMIrMGEZ5dSD%2FiML8t4VCCmsDXBpUrQ1e6psXybvYa9h0OOjO9naas1h8qrV0VA42XKIc0oAEa7zFeorOVTvCWcB1dBowwmLHjwAY6pgEtqZ6AFc3EnMCmQOR9WxzhxXIBkYVq5%2F%2BthoxX7%2Bv%2BCg%2BnPvU6JKfUlJT0gGyjprxSo6JXGsn94d74FpgziwHJC4OQLxaFJrSIFqIz6DokdI%2FayTkjQs%2B3QgKzllknk2yGFmrRZPg7R04JRVCeQk3hPN%2FJoa7zft%2FpV3a4WE44et6rd90aJcWSOSSioyEQx7X9OYQ9HPpSGzUzHCNm3nG8OKRjWtiL&X-Amz-Signature=e0bc3e143d34be5169c8530ebbcab9108f69e1c92ae5487841f7023878af8956&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUGAWLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3sqIidCWi5Wd4%2FQCm%2B1rVMBPCay6IimLCBby3M%2FPlZAiBY0cG%2BydY%2BgWdbo21tZ0GsJd9%2FfLZjkVq8aQ2g%2FLcM%2Byr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMTAOjU2v71J4KOmZdKtwDn1Qof%2F%2FyHryQP5oLvncld%2FVRXUO%2FTQ2kn2MlRSsF28gZUoiLK%2BmxopLB3sZoLjDP%2FIb2O01hugw9DmocwlpvVzAcNzLA8Os6Hs2e9hY9mpOSeVbCZA3yVBu7uc%2Bcr347t%2FZgUZNPxv%2B8X%2F5RRXN3EClXZrOJ9m5IdVgZts5pCcqMepAiVby7DjO5pbFHj1CFe1geofrsG1rlTvczY9XhDe1kf%2FE56w%2FiixdRwbaDJjJysElKqkuB7Zkg1d3ta7aef9dpYa2vIdkUwiNAlFDtlokps%2B73wD0AEdggWj9k2wEvwomYsIiHzsoKxsNFVMZPvUmldKhUlvZ4WUKqYBJuxmpQw7S71hc3MS82GuaD0NWdilxRWoaHg0v8%2FUy%2FS5FKV7F9EDTX9kx8SjPHyXDXljqPHORx9pyXGnvi6Ad12FCY8Yf13F2PHtgcpSJVNlkTHpDckQOxN7nQp1GA22r7Nm15bXUC0BDnY7X2%2BmYfOmf3VTwh56YdRKj6wer6tJZQC9P1lCIecFwiJsmOmsRSs3iookaGuBLMIrMGEZ5dSD%2FiML8t4VCCmsDXBpUrQ1e6psXybvYa9h0OOjO9naas1h8qrV0VA42XKIc0oAEa7zFeorOVTvCWcB1dBowwmLHjwAY6pgEtqZ6AFc3EnMCmQOR9WxzhxXIBkYVq5%2F%2BthoxX7%2Bv%2BCg%2BnPvU6JKfUlJT0gGyjprxSo6JXGsn94d74FpgziwHJC4OQLxaFJrSIFqIz6DokdI%2FayTkjQs%2B3QgKzllknk2yGFmrRZPg7R04JRVCeQk3hPN%2FJoa7zft%2FpV3a4WE44et6rd90aJcWSOSSioyEQx7X9OYQ9HPpSGzUzHCNm3nG8OKRjWtiL&X-Amz-Signature=a672618378ff173796d30f6420400f171367b2248a294a67ae32073d83413f11&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUGAWLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3sqIidCWi5Wd4%2FQCm%2B1rVMBPCay6IimLCBby3M%2FPlZAiBY0cG%2BydY%2BgWdbo21tZ0GsJd9%2FfLZjkVq8aQ2g%2FLcM%2Byr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMTAOjU2v71J4KOmZdKtwDn1Qof%2F%2FyHryQP5oLvncld%2FVRXUO%2FTQ2kn2MlRSsF28gZUoiLK%2BmxopLB3sZoLjDP%2FIb2O01hugw9DmocwlpvVzAcNzLA8Os6Hs2e9hY9mpOSeVbCZA3yVBu7uc%2Bcr347t%2FZgUZNPxv%2B8X%2F5RRXN3EClXZrOJ9m5IdVgZts5pCcqMepAiVby7DjO5pbFHj1CFe1geofrsG1rlTvczY9XhDe1kf%2FE56w%2FiixdRwbaDJjJysElKqkuB7Zkg1d3ta7aef9dpYa2vIdkUwiNAlFDtlokps%2B73wD0AEdggWj9k2wEvwomYsIiHzsoKxsNFVMZPvUmldKhUlvZ4WUKqYBJuxmpQw7S71hc3MS82GuaD0NWdilxRWoaHg0v8%2FUy%2FS5FKV7F9EDTX9kx8SjPHyXDXljqPHORx9pyXGnvi6Ad12FCY8Yf13F2PHtgcpSJVNlkTHpDckQOxN7nQp1GA22r7Nm15bXUC0BDnY7X2%2BmYfOmf3VTwh56YdRKj6wer6tJZQC9P1lCIecFwiJsmOmsRSs3iookaGuBLMIrMGEZ5dSD%2FiML8t4VCCmsDXBpUrQ1e6psXybvYa9h0OOjO9naas1h8qrV0VA42XKIc0oAEa7zFeorOVTvCWcB1dBowwmLHjwAY6pgEtqZ6AFc3EnMCmQOR9WxzhxXIBkYVq5%2F%2BthoxX7%2Bv%2BCg%2BnPvU6JKfUlJT0gGyjprxSo6JXGsn94d74FpgziwHJC4OQLxaFJrSIFqIz6DokdI%2FayTkjQs%2B3QgKzllknk2yGFmrRZPg7R04JRVCeQk3hPN%2FJoa7zft%2FpV3a4WE44et6rd90aJcWSOSSioyEQx7X9OYQ9HPpSGzUzHCNm3nG8OKRjWtiL&X-Amz-Signature=dfabdfcfabcd4104c645996593d8f30c63b4d0d040220e92dc85a0df34890396&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUGAWLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3sqIidCWi5Wd4%2FQCm%2B1rVMBPCay6IimLCBby3M%2FPlZAiBY0cG%2BydY%2BgWdbo21tZ0GsJd9%2FfLZjkVq8aQ2g%2FLcM%2Byr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMTAOjU2v71J4KOmZdKtwDn1Qof%2F%2FyHryQP5oLvncld%2FVRXUO%2FTQ2kn2MlRSsF28gZUoiLK%2BmxopLB3sZoLjDP%2FIb2O01hugw9DmocwlpvVzAcNzLA8Os6Hs2e9hY9mpOSeVbCZA3yVBu7uc%2Bcr347t%2FZgUZNPxv%2B8X%2F5RRXN3EClXZrOJ9m5IdVgZts5pCcqMepAiVby7DjO5pbFHj1CFe1geofrsG1rlTvczY9XhDe1kf%2FE56w%2FiixdRwbaDJjJysElKqkuB7Zkg1d3ta7aef9dpYa2vIdkUwiNAlFDtlokps%2B73wD0AEdggWj9k2wEvwomYsIiHzsoKxsNFVMZPvUmldKhUlvZ4WUKqYBJuxmpQw7S71hc3MS82GuaD0NWdilxRWoaHg0v8%2FUy%2FS5FKV7F9EDTX9kx8SjPHyXDXljqPHORx9pyXGnvi6Ad12FCY8Yf13F2PHtgcpSJVNlkTHpDckQOxN7nQp1GA22r7Nm15bXUC0BDnY7X2%2BmYfOmf3VTwh56YdRKj6wer6tJZQC9P1lCIecFwiJsmOmsRSs3iookaGuBLMIrMGEZ5dSD%2FiML8t4VCCmsDXBpUrQ1e6psXybvYa9h0OOjO9naas1h8qrV0VA42XKIc0oAEa7zFeorOVTvCWcB1dBowwmLHjwAY6pgEtqZ6AFc3EnMCmQOR9WxzhxXIBkYVq5%2F%2BthoxX7%2Bv%2BCg%2BnPvU6JKfUlJT0gGyjprxSo6JXGsn94d74FpgziwHJC4OQLxaFJrSIFqIz6DokdI%2FayTkjQs%2B3QgKzllknk2yGFmrRZPg7R04JRVCeQk3hPN%2FJoa7zft%2FpV3a4WE44et6rd90aJcWSOSSioyEQx7X9OYQ9HPpSGzUzHCNm3nG8OKRjWtiL&X-Amz-Signature=9d7ee4cb4e7f8563ba7c84bb4f2d43674aa7fbaaefb22ae6883b31feec27e26e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUGAWLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3sqIidCWi5Wd4%2FQCm%2B1rVMBPCay6IimLCBby3M%2FPlZAiBY0cG%2BydY%2BgWdbo21tZ0GsJd9%2FfLZjkVq8aQ2g%2FLcM%2Byr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMTAOjU2v71J4KOmZdKtwDn1Qof%2F%2FyHryQP5oLvncld%2FVRXUO%2FTQ2kn2MlRSsF28gZUoiLK%2BmxopLB3sZoLjDP%2FIb2O01hugw9DmocwlpvVzAcNzLA8Os6Hs2e9hY9mpOSeVbCZA3yVBu7uc%2Bcr347t%2FZgUZNPxv%2B8X%2F5RRXN3EClXZrOJ9m5IdVgZts5pCcqMepAiVby7DjO5pbFHj1CFe1geofrsG1rlTvczY9XhDe1kf%2FE56w%2FiixdRwbaDJjJysElKqkuB7Zkg1d3ta7aef9dpYa2vIdkUwiNAlFDtlokps%2B73wD0AEdggWj9k2wEvwomYsIiHzsoKxsNFVMZPvUmldKhUlvZ4WUKqYBJuxmpQw7S71hc3MS82GuaD0NWdilxRWoaHg0v8%2FUy%2FS5FKV7F9EDTX9kx8SjPHyXDXljqPHORx9pyXGnvi6Ad12FCY8Yf13F2PHtgcpSJVNlkTHpDckQOxN7nQp1GA22r7Nm15bXUC0BDnY7X2%2BmYfOmf3VTwh56YdRKj6wer6tJZQC9P1lCIecFwiJsmOmsRSs3iookaGuBLMIrMGEZ5dSD%2FiML8t4VCCmsDXBpUrQ1e6psXybvYa9h0OOjO9naas1h8qrV0VA42XKIc0oAEa7zFeorOVTvCWcB1dBowwmLHjwAY6pgEtqZ6AFc3EnMCmQOR9WxzhxXIBkYVq5%2F%2BthoxX7%2Bv%2BCg%2BnPvU6JKfUlJT0gGyjprxSo6JXGsn94d74FpgziwHJC4OQLxaFJrSIFqIz6DokdI%2FayTkjQs%2B3QgKzllknk2yGFmrRZPg7R04JRVCeQk3hPN%2FJoa7zft%2FpV3a4WE44et6rd90aJcWSOSSioyEQx7X9OYQ9HPpSGzUzHCNm3nG8OKRjWtiL&X-Amz-Signature=02239a0b36f3035d8404f759753e5b640cc106d44bf69e51d36211f51dff3cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
