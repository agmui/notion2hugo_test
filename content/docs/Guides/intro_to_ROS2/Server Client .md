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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7DJQCK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5O75S8jd3mkAO5S3J4G37ATnO8G6pM1ZkMYOGpIJBpwIgLIRgdCSLBW6I0XhcG3UqRJ9LmIKXBOKYx9r5H9fxzI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaZhcFJjvdAD3ZCdCrcA3Vi4NtezzYsQND7lBj2wTrdpjjaDKzVMhFxRVJObb5Cg%2FSSbKbobI2egU4suzZRvu4tOFs2ilx4CRMNkNNa6m8%2F3Dt%2FtIw7GETrFdI%2FACSkIGQDqctlQwYnOigQ2symWJ60XHa6ad4vZ3XxWWOBVK%2FpAyzEvolpKygxl2yLNg2p5UuoiqCff600mfXfIosYrv25djaNrqLbJLzmpi9PFmSavU9%2FwtVtjBKtnjxWi8LW3tS%2BJcEBdzh42L7LWUITC6ly5HqP471IUKzqGCyL3AmuoX3M8WJCV%2BLRTwjCTfe93RdQy5o8JI1BYEyTE3QEp4hviDm0q2j3aQw16Dj%2FmNrc76OkCIczLFL3FLHccN8XvIrSps9d57diPYR53pXjttOmsHG2J8ORJrPOWDhjhOcTFV7Nw%2Bopw4DZZ9Ucv3D%2FkG6qv0YQN6eUz4TuH%2F2C28dkiU9k7mz15Q9vrYRspiKe5GK%2FNATSueDhJ%2FJGZ%2BPfTXoGVNNTgLSdPPqdwhyYGeknkIGmHwBWGpfvXFuPJwgbMVNHioCmNHgmzSk7oYgmZrlntpOsjs6XE5zK%2FFU2SJBEWdIAjGNuI9JpHHkPAWwBxYBy9bUO%2F12vBrJiW3rZQeVEXCIlkgZ%2FRm2pMJXFtL0GOqUBD%2FwvQUqGaEojLSaBblEEnQdEy03FJhm4WpcqEoatQ673XuukmdUa5eT%2Fnp6YOK5mAL20bcb%2FfyMyQNqyZ%2FGNCAQ68NiJR7Cj0JpmkmZoxJdNIznOvqhNp8o6gCtkezeQY7hJl2hrCstlSFwbFGLoXUcrCQOiXVqKd37VKYn3lTrS3tiIo4sgVFdnps7Gxj%2BpRM2fUrb2MELI9Gpt4JR%2F9O10oW8%2B&X-Amz-Signature=6ac03ae433ac4b90f24b1b644a02f86f89b8fac0568ebe14d64f9556446281e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7DJQCK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5O75S8jd3mkAO5S3J4G37ATnO8G6pM1ZkMYOGpIJBpwIgLIRgdCSLBW6I0XhcG3UqRJ9LmIKXBOKYx9r5H9fxzI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaZhcFJjvdAD3ZCdCrcA3Vi4NtezzYsQND7lBj2wTrdpjjaDKzVMhFxRVJObb5Cg%2FSSbKbobI2egU4suzZRvu4tOFs2ilx4CRMNkNNa6m8%2F3Dt%2FtIw7GETrFdI%2FACSkIGQDqctlQwYnOigQ2symWJ60XHa6ad4vZ3XxWWOBVK%2FpAyzEvolpKygxl2yLNg2p5UuoiqCff600mfXfIosYrv25djaNrqLbJLzmpi9PFmSavU9%2FwtVtjBKtnjxWi8LW3tS%2BJcEBdzh42L7LWUITC6ly5HqP471IUKzqGCyL3AmuoX3M8WJCV%2BLRTwjCTfe93RdQy5o8JI1BYEyTE3QEp4hviDm0q2j3aQw16Dj%2FmNrc76OkCIczLFL3FLHccN8XvIrSps9d57diPYR53pXjttOmsHG2J8ORJrPOWDhjhOcTFV7Nw%2Bopw4DZZ9Ucv3D%2FkG6qv0YQN6eUz4TuH%2F2C28dkiU9k7mz15Q9vrYRspiKe5GK%2FNATSueDhJ%2FJGZ%2BPfTXoGVNNTgLSdPPqdwhyYGeknkIGmHwBWGpfvXFuPJwgbMVNHioCmNHgmzSk7oYgmZrlntpOsjs6XE5zK%2FFU2SJBEWdIAjGNuI9JpHHkPAWwBxYBy9bUO%2F12vBrJiW3rZQeVEXCIlkgZ%2FRm2pMJXFtL0GOqUBD%2FwvQUqGaEojLSaBblEEnQdEy03FJhm4WpcqEoatQ673XuukmdUa5eT%2Fnp6YOK5mAL20bcb%2FfyMyQNqyZ%2FGNCAQ68NiJR7Cj0JpmkmZoxJdNIznOvqhNp8o6gCtkezeQY7hJl2hrCstlSFwbFGLoXUcrCQOiXVqKd37VKYn3lTrS3tiIo4sgVFdnps7Gxj%2BpRM2fUrb2MELI9Gpt4JR%2F9O10oW8%2B&X-Amz-Signature=e512f333f3172e959ec2f4724b8a63db7b39a8a3eb08727851860ddedeaf1ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7DJQCK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5O75S8jd3mkAO5S3J4G37ATnO8G6pM1ZkMYOGpIJBpwIgLIRgdCSLBW6I0XhcG3UqRJ9LmIKXBOKYx9r5H9fxzI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaZhcFJjvdAD3ZCdCrcA3Vi4NtezzYsQND7lBj2wTrdpjjaDKzVMhFxRVJObb5Cg%2FSSbKbobI2egU4suzZRvu4tOFs2ilx4CRMNkNNa6m8%2F3Dt%2FtIw7GETrFdI%2FACSkIGQDqctlQwYnOigQ2symWJ60XHa6ad4vZ3XxWWOBVK%2FpAyzEvolpKygxl2yLNg2p5UuoiqCff600mfXfIosYrv25djaNrqLbJLzmpi9PFmSavU9%2FwtVtjBKtnjxWi8LW3tS%2BJcEBdzh42L7LWUITC6ly5HqP471IUKzqGCyL3AmuoX3M8WJCV%2BLRTwjCTfe93RdQy5o8JI1BYEyTE3QEp4hviDm0q2j3aQw16Dj%2FmNrc76OkCIczLFL3FLHccN8XvIrSps9d57diPYR53pXjttOmsHG2J8ORJrPOWDhjhOcTFV7Nw%2Bopw4DZZ9Ucv3D%2FkG6qv0YQN6eUz4TuH%2F2C28dkiU9k7mz15Q9vrYRspiKe5GK%2FNATSueDhJ%2FJGZ%2BPfTXoGVNNTgLSdPPqdwhyYGeknkIGmHwBWGpfvXFuPJwgbMVNHioCmNHgmzSk7oYgmZrlntpOsjs6XE5zK%2FFU2SJBEWdIAjGNuI9JpHHkPAWwBxYBy9bUO%2F12vBrJiW3rZQeVEXCIlkgZ%2FRm2pMJXFtL0GOqUBD%2FwvQUqGaEojLSaBblEEnQdEy03FJhm4WpcqEoatQ673XuukmdUa5eT%2Fnp6YOK5mAL20bcb%2FfyMyQNqyZ%2FGNCAQ68NiJR7Cj0JpmkmZoxJdNIznOvqhNp8o6gCtkezeQY7hJl2hrCstlSFwbFGLoXUcrCQOiXVqKd37VKYn3lTrS3tiIo4sgVFdnps7Gxj%2BpRM2fUrb2MELI9Gpt4JR%2F9O10oW8%2B&X-Amz-Signature=6e261074673e25a419cd6856dd8620ab57891cbcfbfd860c1666bb93346fc47f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7DJQCK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5O75S8jd3mkAO5S3J4G37ATnO8G6pM1ZkMYOGpIJBpwIgLIRgdCSLBW6I0XhcG3UqRJ9LmIKXBOKYx9r5H9fxzI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaZhcFJjvdAD3ZCdCrcA3Vi4NtezzYsQND7lBj2wTrdpjjaDKzVMhFxRVJObb5Cg%2FSSbKbobI2egU4suzZRvu4tOFs2ilx4CRMNkNNa6m8%2F3Dt%2FtIw7GETrFdI%2FACSkIGQDqctlQwYnOigQ2symWJ60XHa6ad4vZ3XxWWOBVK%2FpAyzEvolpKygxl2yLNg2p5UuoiqCff600mfXfIosYrv25djaNrqLbJLzmpi9PFmSavU9%2FwtVtjBKtnjxWi8LW3tS%2BJcEBdzh42L7LWUITC6ly5HqP471IUKzqGCyL3AmuoX3M8WJCV%2BLRTwjCTfe93RdQy5o8JI1BYEyTE3QEp4hviDm0q2j3aQw16Dj%2FmNrc76OkCIczLFL3FLHccN8XvIrSps9d57diPYR53pXjttOmsHG2J8ORJrPOWDhjhOcTFV7Nw%2Bopw4DZZ9Ucv3D%2FkG6qv0YQN6eUz4TuH%2F2C28dkiU9k7mz15Q9vrYRspiKe5GK%2FNATSueDhJ%2FJGZ%2BPfTXoGVNNTgLSdPPqdwhyYGeknkIGmHwBWGpfvXFuPJwgbMVNHioCmNHgmzSk7oYgmZrlntpOsjs6XE5zK%2FFU2SJBEWdIAjGNuI9JpHHkPAWwBxYBy9bUO%2F12vBrJiW3rZQeVEXCIlkgZ%2FRm2pMJXFtL0GOqUBD%2FwvQUqGaEojLSaBblEEnQdEy03FJhm4WpcqEoatQ673XuukmdUa5eT%2Fnp6YOK5mAL20bcb%2FfyMyQNqyZ%2FGNCAQ68NiJR7Cj0JpmkmZoxJdNIznOvqhNp8o6gCtkezeQY7hJl2hrCstlSFwbFGLoXUcrCQOiXVqKd37VKYn3lTrS3tiIo4sgVFdnps7Gxj%2BpRM2fUrb2MELI9Gpt4JR%2F9O10oW8%2B&X-Amz-Signature=cded33d6ed62457caff9c4b374c75c2d93511c23e6ec4461cea9604a130818b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7DJQCK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5O75S8jd3mkAO5S3J4G37ATnO8G6pM1ZkMYOGpIJBpwIgLIRgdCSLBW6I0XhcG3UqRJ9LmIKXBOKYx9r5H9fxzI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaZhcFJjvdAD3ZCdCrcA3Vi4NtezzYsQND7lBj2wTrdpjjaDKzVMhFxRVJObb5Cg%2FSSbKbobI2egU4suzZRvu4tOFs2ilx4CRMNkNNa6m8%2F3Dt%2FtIw7GETrFdI%2FACSkIGQDqctlQwYnOigQ2symWJ60XHa6ad4vZ3XxWWOBVK%2FpAyzEvolpKygxl2yLNg2p5UuoiqCff600mfXfIosYrv25djaNrqLbJLzmpi9PFmSavU9%2FwtVtjBKtnjxWi8LW3tS%2BJcEBdzh42L7LWUITC6ly5HqP471IUKzqGCyL3AmuoX3M8WJCV%2BLRTwjCTfe93RdQy5o8JI1BYEyTE3QEp4hviDm0q2j3aQw16Dj%2FmNrc76OkCIczLFL3FLHccN8XvIrSps9d57diPYR53pXjttOmsHG2J8ORJrPOWDhjhOcTFV7Nw%2Bopw4DZZ9Ucv3D%2FkG6qv0YQN6eUz4TuH%2F2C28dkiU9k7mz15Q9vrYRspiKe5GK%2FNATSueDhJ%2FJGZ%2BPfTXoGVNNTgLSdPPqdwhyYGeknkIGmHwBWGpfvXFuPJwgbMVNHioCmNHgmzSk7oYgmZrlntpOsjs6XE5zK%2FFU2SJBEWdIAjGNuI9JpHHkPAWwBxYBy9bUO%2F12vBrJiW3rZQeVEXCIlkgZ%2FRm2pMJXFtL0GOqUBD%2FwvQUqGaEojLSaBblEEnQdEy03FJhm4WpcqEoatQ673XuukmdUa5eT%2Fnp6YOK5mAL20bcb%2FfyMyQNqyZ%2FGNCAQ68NiJR7Cj0JpmkmZoxJdNIznOvqhNp8o6gCtkezeQY7hJl2hrCstlSFwbFGLoXUcrCQOiXVqKd37VKYn3lTrS3tiIo4sgVFdnps7Gxj%2BpRM2fUrb2MELI9Gpt4JR%2F9O10oW8%2B&X-Amz-Signature=e4dd632b35067520140c92ddb55152711323d4a2ef7a6b58d076bfba4013d192&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
