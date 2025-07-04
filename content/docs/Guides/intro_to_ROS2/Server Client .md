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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPQQWFI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEQe7y%2FQs2PLa0oLOylmxGXTENz5U1KXfa2wNqYZGFQwIgNHzsrtT1%2Fgd%2BFCZ7j3nkQlQd9YsEzgWBkpSuBZliA7Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBhl6iOH7zqHWAFuJyrcA2rWT%2FqTaHps2OqjgzChjON4glJsaHYAVP%2FWqGTcH%2FVSUh2dMZPpRo%2F%2FYhnzKI4yBT7YT234hI%2BdTlcr38Jn53wfmaRw4OwDJWFIzF7zDkGihIwAXhogcP6yonx2DIGsCy6JAurmTelVbGTkDuLzS8FfdNmaSJENLz5scScXXWsVq9td4h%2B5bugCAMUvb1AFfO5e2IrhYWaH7FQr3qgJr5QV%2FjghuUuD15SahTsEc5V7VFbvbs2adNeBFzH2pgj7GVpRy%2BrjMtLbA31ZCLaZ2Cv%2FQRq1pnqd%2BIcB30i%2F3UEfSSnxxJNQBXOZwxGNucQMVO5LXfmNWuceo6WKWjy%2FQ9ce2fPU3tL%2FO7tEwjtgKpvGC8qEUFESj2nMGvuqKWPYzdgrWBtJYminJlO0mmS0%2FIbz0a64VN9fAQoN2na%2FipUuy774iemvlVvI7C0ooxD%2Fr%2B%2B4d3TUrqX5I6pJcdOB44s6TyCa4WEkmZ7FkkIw2Y6Fshvicxpae0E3%2FEjkoXwUlXLURg4CdGCssFFnGTd5zsHa7S25YN62zgJtpByLHLeUW8IDR7jjtbTQZTM0pUCjdDlU7MfqSTbtFcDJ%2BkvjpYvFJ%2BleWFKtVmSvMMYNz4Lq%2BRisZweO%2BJTQ9hphMMrhncMGOqUB8sxFIhOFRFuDVYrv0kski5zzFYMNMOQWk5d3ezFuNB6mZ1%2FLYBTje8iuSlDtRLaaEPqXHskkuslOM0qu9mwk98naHiVSIY92xgOXodxcd7o0NCTV1IEYDmy0YMkjcp4MlKU5tiyTS1g1Aa4B6uyFyelVR7LJNh0uY%2FJHyw1BOsZdw87WhkmLrTJilWyE6zt4gqwBo1er1iJk7FIwiPXoEjb6iYKI&X-Amz-Signature=e4911fe222d4f205305a82297ba52add0d444cdf07bea5ddf1b4e01698645a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPQQWFI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEQe7y%2FQs2PLa0oLOylmxGXTENz5U1KXfa2wNqYZGFQwIgNHzsrtT1%2Fgd%2BFCZ7j3nkQlQd9YsEzgWBkpSuBZliA7Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBhl6iOH7zqHWAFuJyrcA2rWT%2FqTaHps2OqjgzChjON4glJsaHYAVP%2FWqGTcH%2FVSUh2dMZPpRo%2F%2FYhnzKI4yBT7YT234hI%2BdTlcr38Jn53wfmaRw4OwDJWFIzF7zDkGihIwAXhogcP6yonx2DIGsCy6JAurmTelVbGTkDuLzS8FfdNmaSJENLz5scScXXWsVq9td4h%2B5bugCAMUvb1AFfO5e2IrhYWaH7FQr3qgJr5QV%2FjghuUuD15SahTsEc5V7VFbvbs2adNeBFzH2pgj7GVpRy%2BrjMtLbA31ZCLaZ2Cv%2FQRq1pnqd%2BIcB30i%2F3UEfSSnxxJNQBXOZwxGNucQMVO5LXfmNWuceo6WKWjy%2FQ9ce2fPU3tL%2FO7tEwjtgKpvGC8qEUFESj2nMGvuqKWPYzdgrWBtJYminJlO0mmS0%2FIbz0a64VN9fAQoN2na%2FipUuy774iemvlVvI7C0ooxD%2Fr%2B%2B4d3TUrqX5I6pJcdOB44s6TyCa4WEkmZ7FkkIw2Y6Fshvicxpae0E3%2FEjkoXwUlXLURg4CdGCssFFnGTd5zsHa7S25YN62zgJtpByLHLeUW8IDR7jjtbTQZTM0pUCjdDlU7MfqSTbtFcDJ%2BkvjpYvFJ%2BleWFKtVmSvMMYNz4Lq%2BRisZweO%2BJTQ9hphMMrhncMGOqUB8sxFIhOFRFuDVYrv0kski5zzFYMNMOQWk5d3ezFuNB6mZ1%2FLYBTje8iuSlDtRLaaEPqXHskkuslOM0qu9mwk98naHiVSIY92xgOXodxcd7o0NCTV1IEYDmy0YMkjcp4MlKU5tiyTS1g1Aa4B6uyFyelVR7LJNh0uY%2FJHyw1BOsZdw87WhkmLrTJilWyE6zt4gqwBo1er1iJk7FIwiPXoEjb6iYKI&X-Amz-Signature=d36de2d4d7074679321d2caad293d82346ad99b535f302fd7d74fac5ab7a96ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPQQWFI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEQe7y%2FQs2PLa0oLOylmxGXTENz5U1KXfa2wNqYZGFQwIgNHzsrtT1%2Fgd%2BFCZ7j3nkQlQd9YsEzgWBkpSuBZliA7Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBhl6iOH7zqHWAFuJyrcA2rWT%2FqTaHps2OqjgzChjON4glJsaHYAVP%2FWqGTcH%2FVSUh2dMZPpRo%2F%2FYhnzKI4yBT7YT234hI%2BdTlcr38Jn53wfmaRw4OwDJWFIzF7zDkGihIwAXhogcP6yonx2DIGsCy6JAurmTelVbGTkDuLzS8FfdNmaSJENLz5scScXXWsVq9td4h%2B5bugCAMUvb1AFfO5e2IrhYWaH7FQr3qgJr5QV%2FjghuUuD15SahTsEc5V7VFbvbs2adNeBFzH2pgj7GVpRy%2BrjMtLbA31ZCLaZ2Cv%2FQRq1pnqd%2BIcB30i%2F3UEfSSnxxJNQBXOZwxGNucQMVO5LXfmNWuceo6WKWjy%2FQ9ce2fPU3tL%2FO7tEwjtgKpvGC8qEUFESj2nMGvuqKWPYzdgrWBtJYminJlO0mmS0%2FIbz0a64VN9fAQoN2na%2FipUuy774iemvlVvI7C0ooxD%2Fr%2B%2B4d3TUrqX5I6pJcdOB44s6TyCa4WEkmZ7FkkIw2Y6Fshvicxpae0E3%2FEjkoXwUlXLURg4CdGCssFFnGTd5zsHa7S25YN62zgJtpByLHLeUW8IDR7jjtbTQZTM0pUCjdDlU7MfqSTbtFcDJ%2BkvjpYvFJ%2BleWFKtVmSvMMYNz4Lq%2BRisZweO%2BJTQ9hphMMrhncMGOqUB8sxFIhOFRFuDVYrv0kski5zzFYMNMOQWk5d3ezFuNB6mZ1%2FLYBTje8iuSlDtRLaaEPqXHskkuslOM0qu9mwk98naHiVSIY92xgOXodxcd7o0NCTV1IEYDmy0YMkjcp4MlKU5tiyTS1g1Aa4B6uyFyelVR7LJNh0uY%2FJHyw1BOsZdw87WhkmLrTJilWyE6zt4gqwBo1er1iJk7FIwiPXoEjb6iYKI&X-Amz-Signature=bbd6b5881567a6b971ba40f4250e956b83c12b187b6cc9f346b2d99a328de7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPQQWFI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEQe7y%2FQs2PLa0oLOylmxGXTENz5U1KXfa2wNqYZGFQwIgNHzsrtT1%2Fgd%2BFCZ7j3nkQlQd9YsEzgWBkpSuBZliA7Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBhl6iOH7zqHWAFuJyrcA2rWT%2FqTaHps2OqjgzChjON4glJsaHYAVP%2FWqGTcH%2FVSUh2dMZPpRo%2F%2FYhnzKI4yBT7YT234hI%2BdTlcr38Jn53wfmaRw4OwDJWFIzF7zDkGihIwAXhogcP6yonx2DIGsCy6JAurmTelVbGTkDuLzS8FfdNmaSJENLz5scScXXWsVq9td4h%2B5bugCAMUvb1AFfO5e2IrhYWaH7FQr3qgJr5QV%2FjghuUuD15SahTsEc5V7VFbvbs2adNeBFzH2pgj7GVpRy%2BrjMtLbA31ZCLaZ2Cv%2FQRq1pnqd%2BIcB30i%2F3UEfSSnxxJNQBXOZwxGNucQMVO5LXfmNWuceo6WKWjy%2FQ9ce2fPU3tL%2FO7tEwjtgKpvGC8qEUFESj2nMGvuqKWPYzdgrWBtJYminJlO0mmS0%2FIbz0a64VN9fAQoN2na%2FipUuy774iemvlVvI7C0ooxD%2Fr%2B%2B4d3TUrqX5I6pJcdOB44s6TyCa4WEkmZ7FkkIw2Y6Fshvicxpae0E3%2FEjkoXwUlXLURg4CdGCssFFnGTd5zsHa7S25YN62zgJtpByLHLeUW8IDR7jjtbTQZTM0pUCjdDlU7MfqSTbtFcDJ%2BkvjpYvFJ%2BleWFKtVmSvMMYNz4Lq%2BRisZweO%2BJTQ9hphMMrhncMGOqUB8sxFIhOFRFuDVYrv0kski5zzFYMNMOQWk5d3ezFuNB6mZ1%2FLYBTje8iuSlDtRLaaEPqXHskkuslOM0qu9mwk98naHiVSIY92xgOXodxcd7o0NCTV1IEYDmy0YMkjcp4MlKU5tiyTS1g1Aa4B6uyFyelVR7LJNh0uY%2FJHyw1BOsZdw87WhkmLrTJilWyE6zt4gqwBo1er1iJk7FIwiPXoEjb6iYKI&X-Amz-Signature=b809821368825d2ac54521c5ed40968a10319400ffbd6a470151071ebec3f475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPQQWFI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEQe7y%2FQs2PLa0oLOylmxGXTENz5U1KXfa2wNqYZGFQwIgNHzsrtT1%2Fgd%2BFCZ7j3nkQlQd9YsEzgWBkpSuBZliA7Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBhl6iOH7zqHWAFuJyrcA2rWT%2FqTaHps2OqjgzChjON4glJsaHYAVP%2FWqGTcH%2FVSUh2dMZPpRo%2F%2FYhnzKI4yBT7YT234hI%2BdTlcr38Jn53wfmaRw4OwDJWFIzF7zDkGihIwAXhogcP6yonx2DIGsCy6JAurmTelVbGTkDuLzS8FfdNmaSJENLz5scScXXWsVq9td4h%2B5bugCAMUvb1AFfO5e2IrhYWaH7FQr3qgJr5QV%2FjghuUuD15SahTsEc5V7VFbvbs2adNeBFzH2pgj7GVpRy%2BrjMtLbA31ZCLaZ2Cv%2FQRq1pnqd%2BIcB30i%2F3UEfSSnxxJNQBXOZwxGNucQMVO5LXfmNWuceo6WKWjy%2FQ9ce2fPU3tL%2FO7tEwjtgKpvGC8qEUFESj2nMGvuqKWPYzdgrWBtJYminJlO0mmS0%2FIbz0a64VN9fAQoN2na%2FipUuy774iemvlVvI7C0ooxD%2Fr%2B%2B4d3TUrqX5I6pJcdOB44s6TyCa4WEkmZ7FkkIw2Y6Fshvicxpae0E3%2FEjkoXwUlXLURg4CdGCssFFnGTd5zsHa7S25YN62zgJtpByLHLeUW8IDR7jjtbTQZTM0pUCjdDlU7MfqSTbtFcDJ%2BkvjpYvFJ%2BleWFKtVmSvMMYNz4Lq%2BRisZweO%2BJTQ9hphMMrhncMGOqUB8sxFIhOFRFuDVYrv0kski5zzFYMNMOQWk5d3ezFuNB6mZ1%2FLYBTje8iuSlDtRLaaEPqXHskkuslOM0qu9mwk98naHiVSIY92xgOXodxcd7o0NCTV1IEYDmy0YMkjcp4MlKU5tiyTS1g1Aa4B6uyFyelVR7LJNh0uY%2FJHyw1BOsZdw87WhkmLrTJilWyE6zt4gqwBo1er1iJk7FIwiPXoEjb6iYKI&X-Amz-Signature=15b23f6c95544c40426ff5b409d8c071122a803c7a0493cca3fc26c4b169cd1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
