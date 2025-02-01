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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQJWPCU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMx3MLxPfVbbdtRNVRtT8YwEfm%2B4ckZFD4jgotObIYNAIgA4nfyoWkbx1yqevIBN7ByyKBu1JgVTJwxyvtt0JmMPUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCgdqfUJip8%2Fz4biyrcAwF2JPetmemd5t9OvukZFjHi0spTIT7GiHFEU78j9GvN%2Be%2F95P1TPs%2Fth9aVgAjfrlrxa140fxwcZZVkDLEWnPRWnqU5Q1sw6xS4lFSB%2BI3rsprrgKWu%2FgZdVbU58lhV3%2BWPn0%2BMQMbvHK3n5tVWBWN3NW4hcB2dMgri6Hso7dg1bxJFLr1EPGO%2F83frtCRkUl0kfEHPAI0tYFeIC3ZLFxMv6Qn3kg4tQ0YeJbrEY0k8Iex9WRCLURQIspvyaEe8J8oPuv5A8VBoxtERa5CISocEAveUp%2B2WYLG0Ioo2SXhovV%2FMx0Gq%2FW7f9mIuJJ3UsgqBpa9F%2BSd%2BiQJdf6Wd%2BNty%2BGx0JpHJHx1zPX0zzQes8er5yF644RQbGwdq0hkLwNMuAXdvawiod5Rp8%2B28KTpocuHwtScIznNwceipp95ZNu0cclDqgKWakGmvzqtMePEbyb88gySxreCfBXSS08XJDGY8Mr3CvPk0di82NhIziDLNK8%2FEWXfFEsJuJGjWunyyGvVRJ1vzmVUeGKhBAGjI1ZC6NrwASFioMTjVGvoTxfMuGFTwDFc0UgBLwebTd7VsfriW6c3WrNID%2FNj6VdMXZKT%2FNNJwy%2BZPke03g68tbI4lZV2DRlQDgXL0MI3A%2BLwGOqUBDzaeTsMEk9E9jeoyX8qSk15S4Hc07PwQuZklHg1UtqNEfvwXaDS3EzhAC3tbSRLnfAAOphkQqZP1hQrQ6kPAZROEKZNTjFISEtWKHbPhIf9kuRbsqbYo2a55oLQYhl0PcOunwBcLmsUzKc4n77ZAr5WfgKfy%2FmbGazDSvr10nqJPEGf0tAebPx7nYZDVBwoR%2FtSps9Ya%2BhfPcZXWz48PqaSMQ06C&X-Amz-Signature=fc2b769300eea32ef42beb312534efa919648bb340525168c93dfd508a3fb11f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQJWPCU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMx3MLxPfVbbdtRNVRtT8YwEfm%2B4ckZFD4jgotObIYNAIgA4nfyoWkbx1yqevIBN7ByyKBu1JgVTJwxyvtt0JmMPUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCgdqfUJip8%2Fz4biyrcAwF2JPetmemd5t9OvukZFjHi0spTIT7GiHFEU78j9GvN%2Be%2F95P1TPs%2Fth9aVgAjfrlrxa140fxwcZZVkDLEWnPRWnqU5Q1sw6xS4lFSB%2BI3rsprrgKWu%2FgZdVbU58lhV3%2BWPn0%2BMQMbvHK3n5tVWBWN3NW4hcB2dMgri6Hso7dg1bxJFLr1EPGO%2F83frtCRkUl0kfEHPAI0tYFeIC3ZLFxMv6Qn3kg4tQ0YeJbrEY0k8Iex9WRCLURQIspvyaEe8J8oPuv5A8VBoxtERa5CISocEAveUp%2B2WYLG0Ioo2SXhovV%2FMx0Gq%2FW7f9mIuJJ3UsgqBpa9F%2BSd%2BiQJdf6Wd%2BNty%2BGx0JpHJHx1zPX0zzQes8er5yF644RQbGwdq0hkLwNMuAXdvawiod5Rp8%2B28KTpocuHwtScIznNwceipp95ZNu0cclDqgKWakGmvzqtMePEbyb88gySxreCfBXSS08XJDGY8Mr3CvPk0di82NhIziDLNK8%2FEWXfFEsJuJGjWunyyGvVRJ1vzmVUeGKhBAGjI1ZC6NrwASFioMTjVGvoTxfMuGFTwDFc0UgBLwebTd7VsfriW6c3WrNID%2FNj6VdMXZKT%2FNNJwy%2BZPke03g68tbI4lZV2DRlQDgXL0MI3A%2BLwGOqUBDzaeTsMEk9E9jeoyX8qSk15S4Hc07PwQuZklHg1UtqNEfvwXaDS3EzhAC3tbSRLnfAAOphkQqZP1hQrQ6kPAZROEKZNTjFISEtWKHbPhIf9kuRbsqbYo2a55oLQYhl0PcOunwBcLmsUzKc4n77ZAr5WfgKfy%2FmbGazDSvr10nqJPEGf0tAebPx7nYZDVBwoR%2FtSps9Ya%2BhfPcZXWz48PqaSMQ06C&X-Amz-Signature=3edf9205b27e76140f50e5e44f7596aafa6bc82a4fdd687003adf31bab964751&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQJWPCU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMx3MLxPfVbbdtRNVRtT8YwEfm%2B4ckZFD4jgotObIYNAIgA4nfyoWkbx1yqevIBN7ByyKBu1JgVTJwxyvtt0JmMPUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCgdqfUJip8%2Fz4biyrcAwF2JPetmemd5t9OvukZFjHi0spTIT7GiHFEU78j9GvN%2Be%2F95P1TPs%2Fth9aVgAjfrlrxa140fxwcZZVkDLEWnPRWnqU5Q1sw6xS4lFSB%2BI3rsprrgKWu%2FgZdVbU58lhV3%2BWPn0%2BMQMbvHK3n5tVWBWN3NW4hcB2dMgri6Hso7dg1bxJFLr1EPGO%2F83frtCRkUl0kfEHPAI0tYFeIC3ZLFxMv6Qn3kg4tQ0YeJbrEY0k8Iex9WRCLURQIspvyaEe8J8oPuv5A8VBoxtERa5CISocEAveUp%2B2WYLG0Ioo2SXhovV%2FMx0Gq%2FW7f9mIuJJ3UsgqBpa9F%2BSd%2BiQJdf6Wd%2BNty%2BGx0JpHJHx1zPX0zzQes8er5yF644RQbGwdq0hkLwNMuAXdvawiod5Rp8%2B28KTpocuHwtScIznNwceipp95ZNu0cclDqgKWakGmvzqtMePEbyb88gySxreCfBXSS08XJDGY8Mr3CvPk0di82NhIziDLNK8%2FEWXfFEsJuJGjWunyyGvVRJ1vzmVUeGKhBAGjI1ZC6NrwASFioMTjVGvoTxfMuGFTwDFc0UgBLwebTd7VsfriW6c3WrNID%2FNj6VdMXZKT%2FNNJwy%2BZPke03g68tbI4lZV2DRlQDgXL0MI3A%2BLwGOqUBDzaeTsMEk9E9jeoyX8qSk15S4Hc07PwQuZklHg1UtqNEfvwXaDS3EzhAC3tbSRLnfAAOphkQqZP1hQrQ6kPAZROEKZNTjFISEtWKHbPhIf9kuRbsqbYo2a55oLQYhl0PcOunwBcLmsUzKc4n77ZAr5WfgKfy%2FmbGazDSvr10nqJPEGf0tAebPx7nYZDVBwoR%2FtSps9Ya%2BhfPcZXWz48PqaSMQ06C&X-Amz-Signature=ecf993d6fa02457fe19080384fef476616a07e42c8cfb11d070b08f529adad04&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQJWPCU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMx3MLxPfVbbdtRNVRtT8YwEfm%2B4ckZFD4jgotObIYNAIgA4nfyoWkbx1yqevIBN7ByyKBu1JgVTJwxyvtt0JmMPUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCgdqfUJip8%2Fz4biyrcAwF2JPetmemd5t9OvukZFjHi0spTIT7GiHFEU78j9GvN%2Be%2F95P1TPs%2Fth9aVgAjfrlrxa140fxwcZZVkDLEWnPRWnqU5Q1sw6xS4lFSB%2BI3rsprrgKWu%2FgZdVbU58lhV3%2BWPn0%2BMQMbvHK3n5tVWBWN3NW4hcB2dMgri6Hso7dg1bxJFLr1EPGO%2F83frtCRkUl0kfEHPAI0tYFeIC3ZLFxMv6Qn3kg4tQ0YeJbrEY0k8Iex9WRCLURQIspvyaEe8J8oPuv5A8VBoxtERa5CISocEAveUp%2B2WYLG0Ioo2SXhovV%2FMx0Gq%2FW7f9mIuJJ3UsgqBpa9F%2BSd%2BiQJdf6Wd%2BNty%2BGx0JpHJHx1zPX0zzQes8er5yF644RQbGwdq0hkLwNMuAXdvawiod5Rp8%2B28KTpocuHwtScIznNwceipp95ZNu0cclDqgKWakGmvzqtMePEbyb88gySxreCfBXSS08XJDGY8Mr3CvPk0di82NhIziDLNK8%2FEWXfFEsJuJGjWunyyGvVRJ1vzmVUeGKhBAGjI1ZC6NrwASFioMTjVGvoTxfMuGFTwDFc0UgBLwebTd7VsfriW6c3WrNID%2FNj6VdMXZKT%2FNNJwy%2BZPke03g68tbI4lZV2DRlQDgXL0MI3A%2BLwGOqUBDzaeTsMEk9E9jeoyX8qSk15S4Hc07PwQuZklHg1UtqNEfvwXaDS3EzhAC3tbSRLnfAAOphkQqZP1hQrQ6kPAZROEKZNTjFISEtWKHbPhIf9kuRbsqbYo2a55oLQYhl0PcOunwBcLmsUzKc4n77ZAr5WfgKfy%2FmbGazDSvr10nqJPEGf0tAebPx7nYZDVBwoR%2FtSps9Ya%2BhfPcZXWz48PqaSMQ06C&X-Amz-Signature=7318b8ce444cc6a495199be6452fdfb946d4620b32ac3b01c53a6648a7e0d76c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQJWPCU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMx3MLxPfVbbdtRNVRtT8YwEfm%2B4ckZFD4jgotObIYNAIgA4nfyoWkbx1yqevIBN7ByyKBu1JgVTJwxyvtt0JmMPUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCgdqfUJip8%2Fz4biyrcAwF2JPetmemd5t9OvukZFjHi0spTIT7GiHFEU78j9GvN%2Be%2F95P1TPs%2Fth9aVgAjfrlrxa140fxwcZZVkDLEWnPRWnqU5Q1sw6xS4lFSB%2BI3rsprrgKWu%2FgZdVbU58lhV3%2BWPn0%2BMQMbvHK3n5tVWBWN3NW4hcB2dMgri6Hso7dg1bxJFLr1EPGO%2F83frtCRkUl0kfEHPAI0tYFeIC3ZLFxMv6Qn3kg4tQ0YeJbrEY0k8Iex9WRCLURQIspvyaEe8J8oPuv5A8VBoxtERa5CISocEAveUp%2B2WYLG0Ioo2SXhovV%2FMx0Gq%2FW7f9mIuJJ3UsgqBpa9F%2BSd%2BiQJdf6Wd%2BNty%2BGx0JpHJHx1zPX0zzQes8er5yF644RQbGwdq0hkLwNMuAXdvawiod5Rp8%2B28KTpocuHwtScIznNwceipp95ZNu0cclDqgKWakGmvzqtMePEbyb88gySxreCfBXSS08XJDGY8Mr3CvPk0di82NhIziDLNK8%2FEWXfFEsJuJGjWunyyGvVRJ1vzmVUeGKhBAGjI1ZC6NrwASFioMTjVGvoTxfMuGFTwDFc0UgBLwebTd7VsfriW6c3WrNID%2FNj6VdMXZKT%2FNNJwy%2BZPke03g68tbI4lZV2DRlQDgXL0MI3A%2BLwGOqUBDzaeTsMEk9E9jeoyX8qSk15S4Hc07PwQuZklHg1UtqNEfvwXaDS3EzhAC3tbSRLnfAAOphkQqZP1hQrQ6kPAZROEKZNTjFISEtWKHbPhIf9kuRbsqbYo2a55oLQYhl0PcOunwBcLmsUzKc4n77ZAr5WfgKfy%2FmbGazDSvr10nqJPEGf0tAebPx7nYZDVBwoR%2FtSps9Ya%2BhfPcZXWz48PqaSMQ06C&X-Amz-Signature=75af9afa345d8150c756f302419856d7d772850ed47b3c8f7058109bc5b9cd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
