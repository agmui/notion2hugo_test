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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIBZHUT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtemg8BtyazZadlSo%2F2Cwgr9T5u6%2BWjp6ub4epwrmxdwIgV3C9lGMAq%2BBuPV9jO0CGhz4IanJPRZJAFOU%2FLmcNt%2FYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAdRhYISp2kYZylMtCrcA%2BdSCzduSevZnBrKrevJ4AvZDfg7CFM6iXJvuAFR3FYVbbNPx8b0uC9Clzkg8t7YnoHDjYw8pSmqGW6DTtI5cgvg6%2BWl%2B5O7EcpUN%2FrTUITwLkl1lkbDcAIEYcLEEAU%2FXLjXPiq0d4gCqVj9xnyLM988gkXlUGzYe1xC4mJBE7ggV5oD5T%2Bdk9milglgdcJhHbuSEF8V7d7faRJk844PqdI%2FwaTqHN1jjNiT9uUJzxskFwFuh7C48NtcY2m0zdM5H1PhTAy4mceYMn76eLuDm6C7R95QnVbljliXBzMs8PvwUsg2A%2BFWBBgJfwd5H%2FYpPSJy%2BLbLPSRKbx%2BJC4qn8WE10eLdVHGRLskc4wFcn1Sxxdd2NXcW%2Fl3XL8qPOo6cAuPnvLS2vxMHSnJRDZ0Dac%2BxDWfH6UqD0YDnZUEiJpn7u7666iqDBcsZ2MALIqcCF4llCfsc5wP5wHuEK2w8trAvi%2BE1JVVIil54rOCdjuYdsEdzFytb5Rs4dwBkpV8TdIVe7oq7lV2fVoYZVAr2qTE%2BR8i7w%2FM26zdSVwZLCzaBw0SQcS5jHCC%2FvEYCZZrtkYdOf5NQAMw%2BHO9Bjds5d3wa7d5oQRBLnD%2B%2BcLhKuMlfSQfkq5AxgEXaZ6y4MM6KusAGOqUBuXzwSE1STh3QWoAV3xU0xa6GmYxdSOeqmGYAXregVwNSgw%2FJgNGIt3N13pc2uy3t9uxoKWNUT1CfC8rKG4qcx8bnKJm2jVh86p8LE6PlS%2BKX3bQv1a4g29o%2B7d5vAc77x9mwhIotJgW%2BEKfWA648HhbLX9ZoK3dxozdcDLwibxdLIuHpuQ0Y4%2FpojXdabWi5RsO2vHjC1KWdqL6Yup3kxHD1X%2Bh2&X-Amz-Signature=a66a17e2f624a1c681ce9118633db06be1491567ac65d44258070cebd3f95220&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIBZHUT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtemg8BtyazZadlSo%2F2Cwgr9T5u6%2BWjp6ub4epwrmxdwIgV3C9lGMAq%2BBuPV9jO0CGhz4IanJPRZJAFOU%2FLmcNt%2FYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAdRhYISp2kYZylMtCrcA%2BdSCzduSevZnBrKrevJ4AvZDfg7CFM6iXJvuAFR3FYVbbNPx8b0uC9Clzkg8t7YnoHDjYw8pSmqGW6DTtI5cgvg6%2BWl%2B5O7EcpUN%2FrTUITwLkl1lkbDcAIEYcLEEAU%2FXLjXPiq0d4gCqVj9xnyLM988gkXlUGzYe1xC4mJBE7ggV5oD5T%2Bdk9milglgdcJhHbuSEF8V7d7faRJk844PqdI%2FwaTqHN1jjNiT9uUJzxskFwFuh7C48NtcY2m0zdM5H1PhTAy4mceYMn76eLuDm6C7R95QnVbljliXBzMs8PvwUsg2A%2BFWBBgJfwd5H%2FYpPSJy%2BLbLPSRKbx%2BJC4qn8WE10eLdVHGRLskc4wFcn1Sxxdd2NXcW%2Fl3XL8qPOo6cAuPnvLS2vxMHSnJRDZ0Dac%2BxDWfH6UqD0YDnZUEiJpn7u7666iqDBcsZ2MALIqcCF4llCfsc5wP5wHuEK2w8trAvi%2BE1JVVIil54rOCdjuYdsEdzFytb5Rs4dwBkpV8TdIVe7oq7lV2fVoYZVAr2qTE%2BR8i7w%2FM26zdSVwZLCzaBw0SQcS5jHCC%2FvEYCZZrtkYdOf5NQAMw%2BHO9Bjds5d3wa7d5oQRBLnD%2B%2BcLhKuMlfSQfkq5AxgEXaZ6y4MM6KusAGOqUBuXzwSE1STh3QWoAV3xU0xa6GmYxdSOeqmGYAXregVwNSgw%2FJgNGIt3N13pc2uy3t9uxoKWNUT1CfC8rKG4qcx8bnKJm2jVh86p8LE6PlS%2BKX3bQv1a4g29o%2B7d5vAc77x9mwhIotJgW%2BEKfWA648HhbLX9ZoK3dxozdcDLwibxdLIuHpuQ0Y4%2FpojXdabWi5RsO2vHjC1KWdqL6Yup3kxHD1X%2Bh2&X-Amz-Signature=aacc6a5e556f8cdf2222d4cfe331e5cc24019fedd231f6d20b28294108ee269a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIBZHUT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtemg8BtyazZadlSo%2F2Cwgr9T5u6%2BWjp6ub4epwrmxdwIgV3C9lGMAq%2BBuPV9jO0CGhz4IanJPRZJAFOU%2FLmcNt%2FYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAdRhYISp2kYZylMtCrcA%2BdSCzduSevZnBrKrevJ4AvZDfg7CFM6iXJvuAFR3FYVbbNPx8b0uC9Clzkg8t7YnoHDjYw8pSmqGW6DTtI5cgvg6%2BWl%2B5O7EcpUN%2FrTUITwLkl1lkbDcAIEYcLEEAU%2FXLjXPiq0d4gCqVj9xnyLM988gkXlUGzYe1xC4mJBE7ggV5oD5T%2Bdk9milglgdcJhHbuSEF8V7d7faRJk844PqdI%2FwaTqHN1jjNiT9uUJzxskFwFuh7C48NtcY2m0zdM5H1PhTAy4mceYMn76eLuDm6C7R95QnVbljliXBzMs8PvwUsg2A%2BFWBBgJfwd5H%2FYpPSJy%2BLbLPSRKbx%2BJC4qn8WE10eLdVHGRLskc4wFcn1Sxxdd2NXcW%2Fl3XL8qPOo6cAuPnvLS2vxMHSnJRDZ0Dac%2BxDWfH6UqD0YDnZUEiJpn7u7666iqDBcsZ2MALIqcCF4llCfsc5wP5wHuEK2w8trAvi%2BE1JVVIil54rOCdjuYdsEdzFytb5Rs4dwBkpV8TdIVe7oq7lV2fVoYZVAr2qTE%2BR8i7w%2FM26zdSVwZLCzaBw0SQcS5jHCC%2FvEYCZZrtkYdOf5NQAMw%2BHO9Bjds5d3wa7d5oQRBLnD%2B%2BcLhKuMlfSQfkq5AxgEXaZ6y4MM6KusAGOqUBuXzwSE1STh3QWoAV3xU0xa6GmYxdSOeqmGYAXregVwNSgw%2FJgNGIt3N13pc2uy3t9uxoKWNUT1CfC8rKG4qcx8bnKJm2jVh86p8LE6PlS%2BKX3bQv1a4g29o%2B7d5vAc77x9mwhIotJgW%2BEKfWA648HhbLX9ZoK3dxozdcDLwibxdLIuHpuQ0Y4%2FpojXdabWi5RsO2vHjC1KWdqL6Yup3kxHD1X%2Bh2&X-Amz-Signature=1d1acc3d8a9f9d5a8bc1e089e9f1359b8ee5489bd4aa5ec65da2bd9ab5ce7cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIBZHUT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtemg8BtyazZadlSo%2F2Cwgr9T5u6%2BWjp6ub4epwrmxdwIgV3C9lGMAq%2BBuPV9jO0CGhz4IanJPRZJAFOU%2FLmcNt%2FYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAdRhYISp2kYZylMtCrcA%2BdSCzduSevZnBrKrevJ4AvZDfg7CFM6iXJvuAFR3FYVbbNPx8b0uC9Clzkg8t7YnoHDjYw8pSmqGW6DTtI5cgvg6%2BWl%2B5O7EcpUN%2FrTUITwLkl1lkbDcAIEYcLEEAU%2FXLjXPiq0d4gCqVj9xnyLM988gkXlUGzYe1xC4mJBE7ggV5oD5T%2Bdk9milglgdcJhHbuSEF8V7d7faRJk844PqdI%2FwaTqHN1jjNiT9uUJzxskFwFuh7C48NtcY2m0zdM5H1PhTAy4mceYMn76eLuDm6C7R95QnVbljliXBzMs8PvwUsg2A%2BFWBBgJfwd5H%2FYpPSJy%2BLbLPSRKbx%2BJC4qn8WE10eLdVHGRLskc4wFcn1Sxxdd2NXcW%2Fl3XL8qPOo6cAuPnvLS2vxMHSnJRDZ0Dac%2BxDWfH6UqD0YDnZUEiJpn7u7666iqDBcsZ2MALIqcCF4llCfsc5wP5wHuEK2w8trAvi%2BE1JVVIil54rOCdjuYdsEdzFytb5Rs4dwBkpV8TdIVe7oq7lV2fVoYZVAr2qTE%2BR8i7w%2FM26zdSVwZLCzaBw0SQcS5jHCC%2FvEYCZZrtkYdOf5NQAMw%2BHO9Bjds5d3wa7d5oQRBLnD%2B%2BcLhKuMlfSQfkq5AxgEXaZ6y4MM6KusAGOqUBuXzwSE1STh3QWoAV3xU0xa6GmYxdSOeqmGYAXregVwNSgw%2FJgNGIt3N13pc2uy3t9uxoKWNUT1CfC8rKG4qcx8bnKJm2jVh86p8LE6PlS%2BKX3bQv1a4g29o%2B7d5vAc77x9mwhIotJgW%2BEKfWA648HhbLX9ZoK3dxozdcDLwibxdLIuHpuQ0Y4%2FpojXdabWi5RsO2vHjC1KWdqL6Yup3kxHD1X%2Bh2&X-Amz-Signature=3668541e283584865572c24b66dae940d7144f6dff3b611cf4c1c455a86723c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIBZHUT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtemg8BtyazZadlSo%2F2Cwgr9T5u6%2BWjp6ub4epwrmxdwIgV3C9lGMAq%2BBuPV9jO0CGhz4IanJPRZJAFOU%2FLmcNt%2FYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAdRhYISp2kYZylMtCrcA%2BdSCzduSevZnBrKrevJ4AvZDfg7CFM6iXJvuAFR3FYVbbNPx8b0uC9Clzkg8t7YnoHDjYw8pSmqGW6DTtI5cgvg6%2BWl%2B5O7EcpUN%2FrTUITwLkl1lkbDcAIEYcLEEAU%2FXLjXPiq0d4gCqVj9xnyLM988gkXlUGzYe1xC4mJBE7ggV5oD5T%2Bdk9milglgdcJhHbuSEF8V7d7faRJk844PqdI%2FwaTqHN1jjNiT9uUJzxskFwFuh7C48NtcY2m0zdM5H1PhTAy4mceYMn76eLuDm6C7R95QnVbljliXBzMs8PvwUsg2A%2BFWBBgJfwd5H%2FYpPSJy%2BLbLPSRKbx%2BJC4qn8WE10eLdVHGRLskc4wFcn1Sxxdd2NXcW%2Fl3XL8qPOo6cAuPnvLS2vxMHSnJRDZ0Dac%2BxDWfH6UqD0YDnZUEiJpn7u7666iqDBcsZ2MALIqcCF4llCfsc5wP5wHuEK2w8trAvi%2BE1JVVIil54rOCdjuYdsEdzFytb5Rs4dwBkpV8TdIVe7oq7lV2fVoYZVAr2qTE%2BR8i7w%2FM26zdSVwZLCzaBw0SQcS5jHCC%2FvEYCZZrtkYdOf5NQAMw%2BHO9Bjds5d3wa7d5oQRBLnD%2B%2BcLhKuMlfSQfkq5AxgEXaZ6y4MM6KusAGOqUBuXzwSE1STh3QWoAV3xU0xa6GmYxdSOeqmGYAXregVwNSgw%2FJgNGIt3N13pc2uy3t9uxoKWNUT1CfC8rKG4qcx8bnKJm2jVh86p8LE6PlS%2BKX3bQv1a4g29o%2B7d5vAc77x9mwhIotJgW%2BEKfWA648HhbLX9ZoK3dxozdcDLwibxdLIuHpuQ0Y4%2FpojXdabWi5RsO2vHjC1KWdqL6Yup3kxHD1X%2Bh2&X-Amz-Signature=4d782e649ea720157d81a23dab7f77baf5998c92623da62e9cc947efa08170b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
