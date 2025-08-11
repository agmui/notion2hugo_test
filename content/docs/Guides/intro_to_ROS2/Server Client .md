---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI2CIOJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5G7UfHPys6YZW%2BuYFyyJobsP6sLjpTDSlO2V0YxHU5AiAS2XAMa9g8ddxkZyvvLIhX%2B3WCnD1mNk5Im%2BfuDCJ1zSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVPTiI%2BqQVtCb9gwKtwDIEW25IWAZXojjnZWeHs3%2FxYXoJPCcaKfHrqkKxUy%2FIVlDfs1dJb7pkiUpINXfCBj4QORChLUbrxFg4v0ENAhMGc6DnLO4Xrlh3I4EPk4PleGicqPym8N%2BbDrenwy8r%2FskUCay5B2za9mSdmvFtLHshpvlvqOP%2FSr6R5hnhcrtTwqslFkHJ69PaGRIZ8g897iDQ1gop4Iv9KTsNzy7mlasXJmftxvFttY0JYc23J848SAU18fWZLITGMZnEGLwQy9%2B5s6z8PQHluNJ4zCtv4DxUIX1Hve18ErvKYEWgSpiyFXL6cRTWa1ovv%2BwS0TiLx2BSa8Mi5ucLlbqPP3VXKvUcJV1nWF5hl8KLuF3ovrF08uPHIBkWcof%2FwWVoH5P3%2BwPpcdYtCenZNkMJw8xMxZOOZ%2BMFNEQtqltD2nxPxeMtVEd%2Bn02IBO64TUbaEXVnvnaWzKJARTb4Wp4cyfsd2bBYRAB4%2BdYRDCg6ZwJkKmvj4vFC%2FRLsPbRrkrwHsBNwEmhEdxf1UuTkQ4pfh2V6e89guviJ9Eg63BDK16oYch4zww4mtTtAl%2Fo8R%2FaQ8rC73205CxcW%2BWZOfORH8gvTwAH%2FID7%2Fls4BA2AOn%2BzLd%2BKj2oNlKrFvOB3tu%2FRaww9dHmxAY6pgFd5Z4LQwp3ENA4xeVAhnKKrsLZaZSJUgMM0vlmV%2BbnAL%2BCzThKZDq0IjLwDt0c2Fc6NXACoO6dcT5cJEtC33YNAjnSDdHXjsNBaiOrbdbijRZ5LSy4YOTf2Lekeey%2BElhLVOvDBYdGsxAmnVW2O7Nr%2BqTH0d9udeNN4IV0XBJNWBwOgMkpuhadz1%2Ffo9wn3OLVuWVZXqlpOEQ9XTZwSspjx%2BV%2B5KVN&X-Amz-Signature=81ab94978529ad6b58483d047b0e6bce3534f18d849e0f2e5599ff422d224c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI2CIOJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5G7UfHPys6YZW%2BuYFyyJobsP6sLjpTDSlO2V0YxHU5AiAS2XAMa9g8ddxkZyvvLIhX%2B3WCnD1mNk5Im%2BfuDCJ1zSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVPTiI%2BqQVtCb9gwKtwDIEW25IWAZXojjnZWeHs3%2FxYXoJPCcaKfHrqkKxUy%2FIVlDfs1dJb7pkiUpINXfCBj4QORChLUbrxFg4v0ENAhMGc6DnLO4Xrlh3I4EPk4PleGicqPym8N%2BbDrenwy8r%2FskUCay5B2za9mSdmvFtLHshpvlvqOP%2FSr6R5hnhcrtTwqslFkHJ69PaGRIZ8g897iDQ1gop4Iv9KTsNzy7mlasXJmftxvFttY0JYc23J848SAU18fWZLITGMZnEGLwQy9%2B5s6z8PQHluNJ4zCtv4DxUIX1Hve18ErvKYEWgSpiyFXL6cRTWa1ovv%2BwS0TiLx2BSa8Mi5ucLlbqPP3VXKvUcJV1nWF5hl8KLuF3ovrF08uPHIBkWcof%2FwWVoH5P3%2BwPpcdYtCenZNkMJw8xMxZOOZ%2BMFNEQtqltD2nxPxeMtVEd%2Bn02IBO64TUbaEXVnvnaWzKJARTb4Wp4cyfsd2bBYRAB4%2BdYRDCg6ZwJkKmvj4vFC%2FRLsPbRrkrwHsBNwEmhEdxf1UuTkQ4pfh2V6e89guviJ9Eg63BDK16oYch4zww4mtTtAl%2Fo8R%2FaQ8rC73205CxcW%2BWZOfORH8gvTwAH%2FID7%2Fls4BA2AOn%2BzLd%2BKj2oNlKrFvOB3tu%2FRaww9dHmxAY6pgFd5Z4LQwp3ENA4xeVAhnKKrsLZaZSJUgMM0vlmV%2BbnAL%2BCzThKZDq0IjLwDt0c2Fc6NXACoO6dcT5cJEtC33YNAjnSDdHXjsNBaiOrbdbijRZ5LSy4YOTf2Lekeey%2BElhLVOvDBYdGsxAmnVW2O7Nr%2BqTH0d9udeNN4IV0XBJNWBwOgMkpuhadz1%2Ffo9wn3OLVuWVZXqlpOEQ9XTZwSspjx%2BV%2B5KVN&X-Amz-Signature=b01b5f3efd9ef25c9b85fc8606a76c122cb55c0da788a3b42871b4603128b118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI2CIOJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5G7UfHPys6YZW%2BuYFyyJobsP6sLjpTDSlO2V0YxHU5AiAS2XAMa9g8ddxkZyvvLIhX%2B3WCnD1mNk5Im%2BfuDCJ1zSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVPTiI%2BqQVtCb9gwKtwDIEW25IWAZXojjnZWeHs3%2FxYXoJPCcaKfHrqkKxUy%2FIVlDfs1dJb7pkiUpINXfCBj4QORChLUbrxFg4v0ENAhMGc6DnLO4Xrlh3I4EPk4PleGicqPym8N%2BbDrenwy8r%2FskUCay5B2za9mSdmvFtLHshpvlvqOP%2FSr6R5hnhcrtTwqslFkHJ69PaGRIZ8g897iDQ1gop4Iv9KTsNzy7mlasXJmftxvFttY0JYc23J848SAU18fWZLITGMZnEGLwQy9%2B5s6z8PQHluNJ4zCtv4DxUIX1Hve18ErvKYEWgSpiyFXL6cRTWa1ovv%2BwS0TiLx2BSa8Mi5ucLlbqPP3VXKvUcJV1nWF5hl8KLuF3ovrF08uPHIBkWcof%2FwWVoH5P3%2BwPpcdYtCenZNkMJw8xMxZOOZ%2BMFNEQtqltD2nxPxeMtVEd%2Bn02IBO64TUbaEXVnvnaWzKJARTb4Wp4cyfsd2bBYRAB4%2BdYRDCg6ZwJkKmvj4vFC%2FRLsPbRrkrwHsBNwEmhEdxf1UuTkQ4pfh2V6e89guviJ9Eg63BDK16oYch4zww4mtTtAl%2Fo8R%2FaQ8rC73205CxcW%2BWZOfORH8gvTwAH%2FID7%2Fls4BA2AOn%2BzLd%2BKj2oNlKrFvOB3tu%2FRaww9dHmxAY6pgFd5Z4LQwp3ENA4xeVAhnKKrsLZaZSJUgMM0vlmV%2BbnAL%2BCzThKZDq0IjLwDt0c2Fc6NXACoO6dcT5cJEtC33YNAjnSDdHXjsNBaiOrbdbijRZ5LSy4YOTf2Lekeey%2BElhLVOvDBYdGsxAmnVW2O7Nr%2BqTH0d9udeNN4IV0XBJNWBwOgMkpuhadz1%2Ffo9wn3OLVuWVZXqlpOEQ9XTZwSspjx%2BV%2B5KVN&X-Amz-Signature=9677ec12711b8831070a2ceb5d9800f7202e02e3a9673f3aabb31be50dea8761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI2CIOJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5G7UfHPys6YZW%2BuYFyyJobsP6sLjpTDSlO2V0YxHU5AiAS2XAMa9g8ddxkZyvvLIhX%2B3WCnD1mNk5Im%2BfuDCJ1zSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVPTiI%2BqQVtCb9gwKtwDIEW25IWAZXojjnZWeHs3%2FxYXoJPCcaKfHrqkKxUy%2FIVlDfs1dJb7pkiUpINXfCBj4QORChLUbrxFg4v0ENAhMGc6DnLO4Xrlh3I4EPk4PleGicqPym8N%2BbDrenwy8r%2FskUCay5B2za9mSdmvFtLHshpvlvqOP%2FSr6R5hnhcrtTwqslFkHJ69PaGRIZ8g897iDQ1gop4Iv9KTsNzy7mlasXJmftxvFttY0JYc23J848SAU18fWZLITGMZnEGLwQy9%2B5s6z8PQHluNJ4zCtv4DxUIX1Hve18ErvKYEWgSpiyFXL6cRTWa1ovv%2BwS0TiLx2BSa8Mi5ucLlbqPP3VXKvUcJV1nWF5hl8KLuF3ovrF08uPHIBkWcof%2FwWVoH5P3%2BwPpcdYtCenZNkMJw8xMxZOOZ%2BMFNEQtqltD2nxPxeMtVEd%2Bn02IBO64TUbaEXVnvnaWzKJARTb4Wp4cyfsd2bBYRAB4%2BdYRDCg6ZwJkKmvj4vFC%2FRLsPbRrkrwHsBNwEmhEdxf1UuTkQ4pfh2V6e89guviJ9Eg63BDK16oYch4zww4mtTtAl%2Fo8R%2FaQ8rC73205CxcW%2BWZOfORH8gvTwAH%2FID7%2Fls4BA2AOn%2BzLd%2BKj2oNlKrFvOB3tu%2FRaww9dHmxAY6pgFd5Z4LQwp3ENA4xeVAhnKKrsLZaZSJUgMM0vlmV%2BbnAL%2BCzThKZDq0IjLwDt0c2Fc6NXACoO6dcT5cJEtC33YNAjnSDdHXjsNBaiOrbdbijRZ5LSy4YOTf2Lekeey%2BElhLVOvDBYdGsxAmnVW2O7Nr%2BqTH0d9udeNN4IV0XBJNWBwOgMkpuhadz1%2Ffo9wn3OLVuWVZXqlpOEQ9XTZwSspjx%2BV%2B5KVN&X-Amz-Signature=d7c023ad6d075e15242f89a5af11e8c2da909450fefa91b39f43242b3b121707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI2CIOJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5G7UfHPys6YZW%2BuYFyyJobsP6sLjpTDSlO2V0YxHU5AiAS2XAMa9g8ddxkZyvvLIhX%2B3WCnD1mNk5Im%2BfuDCJ1zSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVPTiI%2BqQVtCb9gwKtwDIEW25IWAZXojjnZWeHs3%2FxYXoJPCcaKfHrqkKxUy%2FIVlDfs1dJb7pkiUpINXfCBj4QORChLUbrxFg4v0ENAhMGc6DnLO4Xrlh3I4EPk4PleGicqPym8N%2BbDrenwy8r%2FskUCay5B2za9mSdmvFtLHshpvlvqOP%2FSr6R5hnhcrtTwqslFkHJ69PaGRIZ8g897iDQ1gop4Iv9KTsNzy7mlasXJmftxvFttY0JYc23J848SAU18fWZLITGMZnEGLwQy9%2B5s6z8PQHluNJ4zCtv4DxUIX1Hve18ErvKYEWgSpiyFXL6cRTWa1ovv%2BwS0TiLx2BSa8Mi5ucLlbqPP3VXKvUcJV1nWF5hl8KLuF3ovrF08uPHIBkWcof%2FwWVoH5P3%2BwPpcdYtCenZNkMJw8xMxZOOZ%2BMFNEQtqltD2nxPxeMtVEd%2Bn02IBO64TUbaEXVnvnaWzKJARTb4Wp4cyfsd2bBYRAB4%2BdYRDCg6ZwJkKmvj4vFC%2FRLsPbRrkrwHsBNwEmhEdxf1UuTkQ4pfh2V6e89guviJ9Eg63BDK16oYch4zww4mtTtAl%2Fo8R%2FaQ8rC73205CxcW%2BWZOfORH8gvTwAH%2FID7%2Fls4BA2AOn%2BzLd%2BKj2oNlKrFvOB3tu%2FRaww9dHmxAY6pgFd5Z4LQwp3ENA4xeVAhnKKrsLZaZSJUgMM0vlmV%2BbnAL%2BCzThKZDq0IjLwDt0c2Fc6NXACoO6dcT5cJEtC33YNAjnSDdHXjsNBaiOrbdbijRZ5LSy4YOTf2Lekeey%2BElhLVOvDBYdGsxAmnVW2O7Nr%2BqTH0d9udeNN4IV0XBJNWBwOgMkpuhadz1%2Ffo9wn3OLVuWVZXqlpOEQ9XTZwSspjx%2BV%2B5KVN&X-Amz-Signature=be71c4410ebba51a12c8432e1a505b372474cfe1c67f39602d4d75c8d3e4ec98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
