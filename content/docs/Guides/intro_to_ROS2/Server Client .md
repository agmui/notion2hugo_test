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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUUFS3J%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDC3gcwZOZNQ2mZidydXUvEjjnTgv71GXucHJ41nbbRgQIhAIyi4Im6rAGIsb8vK0ftKrI8SvVLKe8HglQkZe4N0sWWKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqXJRRS9EMrG1BI0Iq3AOhvjwL394Z96CRuso87CaqxnYyGPWH3KEkhin1%2B9y52tZgvT2uIcIASeTMpiisDOz6TebMSqHd5Uvy2GxBVrWke0bLMdNx4FSIeHrXr1TfSI8JHMWxauZvfx6x2iSWDuntAJ0pSANaAmfAVFsWyQBmon3CbgfKXKVL3DKltlU5VCOzFONiEPY38QscFNhIQx1f7zo%2F7O60BYfMV0AbvT88lJNUE%2Fbblp1DacUu%2Bl8lM0XqMVWHPRzbzB7FtA%2FO8cgbg72OT3sDhc%2BdeOOaHNRXRppBSudM3YMrJCFyhJgxgKTcW8T6ccE8jU89Hpw%2BiDZMBgBceos0%2Fuw5UzVRABzDRymrmed8iewZG2D2UQZNKeALnTKdfRamkvltD7hgVI4QRILYX3yreugBLmpDuu%2BRUBe01zJhOm0sCZdMkKLQbVlx3EtDVpUVXNRRx4Ab%2FP%2B2SPJ9YsFP7r51tmP24PNobucPsdOQhJEol4Hc5SdZHYt4DxiCuoI2BxQJPlQivdYQJu%2FCqSkOKJ%2FBX%2FR6ZBPOfBfdgZlYyoYHwD0o1y1pIxq7KchRMQq2H6XuYNZIb%2BQszlD4Rwhj5rJaXIPUDR49Nrd8ZgNZWLEIYWHFQ3lHf3FHysr96wGQxXmanTDFtPbBBjqkASzBv%2FRLjXse98ZNRCC8pmmxf4wN740ZStv1Im1WW1ixgq2ppYySOMK34L9vspxvNidkpbljTz36lt9UIbMCLZkETzri%2FsQdFpStomMmNG60MfcMAVOU5T4CRuLtqZdqinCB5uYC8gP6ibD%2BAML6sPyQGdXDMH8SkAGFhPoHApSIQB%2FN7Lxz9MdYw4mQdM%2BTppdF0Pvs9vEJcRxLQeRRpnFC%2Bv4T&X-Amz-Signature=ac7830434ff6097c47d451e43108e637dde251aca137cd0416e4d44068ef0d72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUUFS3J%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDC3gcwZOZNQ2mZidydXUvEjjnTgv71GXucHJ41nbbRgQIhAIyi4Im6rAGIsb8vK0ftKrI8SvVLKe8HglQkZe4N0sWWKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqXJRRS9EMrG1BI0Iq3AOhvjwL394Z96CRuso87CaqxnYyGPWH3KEkhin1%2B9y52tZgvT2uIcIASeTMpiisDOz6TebMSqHd5Uvy2GxBVrWke0bLMdNx4FSIeHrXr1TfSI8JHMWxauZvfx6x2iSWDuntAJ0pSANaAmfAVFsWyQBmon3CbgfKXKVL3DKltlU5VCOzFONiEPY38QscFNhIQx1f7zo%2F7O60BYfMV0AbvT88lJNUE%2Fbblp1DacUu%2Bl8lM0XqMVWHPRzbzB7FtA%2FO8cgbg72OT3sDhc%2BdeOOaHNRXRppBSudM3YMrJCFyhJgxgKTcW8T6ccE8jU89Hpw%2BiDZMBgBceos0%2Fuw5UzVRABzDRymrmed8iewZG2D2UQZNKeALnTKdfRamkvltD7hgVI4QRILYX3yreugBLmpDuu%2BRUBe01zJhOm0sCZdMkKLQbVlx3EtDVpUVXNRRx4Ab%2FP%2B2SPJ9YsFP7r51tmP24PNobucPsdOQhJEol4Hc5SdZHYt4DxiCuoI2BxQJPlQivdYQJu%2FCqSkOKJ%2FBX%2FR6ZBPOfBfdgZlYyoYHwD0o1y1pIxq7KchRMQq2H6XuYNZIb%2BQszlD4Rwhj5rJaXIPUDR49Nrd8ZgNZWLEIYWHFQ3lHf3FHysr96wGQxXmanTDFtPbBBjqkASzBv%2FRLjXse98ZNRCC8pmmxf4wN740ZStv1Im1WW1ixgq2ppYySOMK34L9vspxvNidkpbljTz36lt9UIbMCLZkETzri%2FsQdFpStomMmNG60MfcMAVOU5T4CRuLtqZdqinCB5uYC8gP6ibD%2BAML6sPyQGdXDMH8SkAGFhPoHApSIQB%2FN7Lxz9MdYw4mQdM%2BTppdF0Pvs9vEJcRxLQeRRpnFC%2Bv4T&X-Amz-Signature=9fe0c9c16f0333513fd3abb3a3779473da380dcf88c16fc8f8d287fa562dd6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUUFS3J%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDC3gcwZOZNQ2mZidydXUvEjjnTgv71GXucHJ41nbbRgQIhAIyi4Im6rAGIsb8vK0ftKrI8SvVLKe8HglQkZe4N0sWWKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqXJRRS9EMrG1BI0Iq3AOhvjwL394Z96CRuso87CaqxnYyGPWH3KEkhin1%2B9y52tZgvT2uIcIASeTMpiisDOz6TebMSqHd5Uvy2GxBVrWke0bLMdNx4FSIeHrXr1TfSI8JHMWxauZvfx6x2iSWDuntAJ0pSANaAmfAVFsWyQBmon3CbgfKXKVL3DKltlU5VCOzFONiEPY38QscFNhIQx1f7zo%2F7O60BYfMV0AbvT88lJNUE%2Fbblp1DacUu%2Bl8lM0XqMVWHPRzbzB7FtA%2FO8cgbg72OT3sDhc%2BdeOOaHNRXRppBSudM3YMrJCFyhJgxgKTcW8T6ccE8jU89Hpw%2BiDZMBgBceos0%2Fuw5UzVRABzDRymrmed8iewZG2D2UQZNKeALnTKdfRamkvltD7hgVI4QRILYX3yreugBLmpDuu%2BRUBe01zJhOm0sCZdMkKLQbVlx3EtDVpUVXNRRx4Ab%2FP%2B2SPJ9YsFP7r51tmP24PNobucPsdOQhJEol4Hc5SdZHYt4DxiCuoI2BxQJPlQivdYQJu%2FCqSkOKJ%2FBX%2FR6ZBPOfBfdgZlYyoYHwD0o1y1pIxq7KchRMQq2H6XuYNZIb%2BQszlD4Rwhj5rJaXIPUDR49Nrd8ZgNZWLEIYWHFQ3lHf3FHysr96wGQxXmanTDFtPbBBjqkASzBv%2FRLjXse98ZNRCC8pmmxf4wN740ZStv1Im1WW1ixgq2ppYySOMK34L9vspxvNidkpbljTz36lt9UIbMCLZkETzri%2FsQdFpStomMmNG60MfcMAVOU5T4CRuLtqZdqinCB5uYC8gP6ibD%2BAML6sPyQGdXDMH8SkAGFhPoHApSIQB%2FN7Lxz9MdYw4mQdM%2BTppdF0Pvs9vEJcRxLQeRRpnFC%2Bv4T&X-Amz-Signature=2f187e142b5d4dba51b76c2eadde87a597f36e48e4cb7214f773bfae7b980d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUUFS3J%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDC3gcwZOZNQ2mZidydXUvEjjnTgv71GXucHJ41nbbRgQIhAIyi4Im6rAGIsb8vK0ftKrI8SvVLKe8HglQkZe4N0sWWKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqXJRRS9EMrG1BI0Iq3AOhvjwL394Z96CRuso87CaqxnYyGPWH3KEkhin1%2B9y52tZgvT2uIcIASeTMpiisDOz6TebMSqHd5Uvy2GxBVrWke0bLMdNx4FSIeHrXr1TfSI8JHMWxauZvfx6x2iSWDuntAJ0pSANaAmfAVFsWyQBmon3CbgfKXKVL3DKltlU5VCOzFONiEPY38QscFNhIQx1f7zo%2F7O60BYfMV0AbvT88lJNUE%2Fbblp1DacUu%2Bl8lM0XqMVWHPRzbzB7FtA%2FO8cgbg72OT3sDhc%2BdeOOaHNRXRppBSudM3YMrJCFyhJgxgKTcW8T6ccE8jU89Hpw%2BiDZMBgBceos0%2Fuw5UzVRABzDRymrmed8iewZG2D2UQZNKeALnTKdfRamkvltD7hgVI4QRILYX3yreugBLmpDuu%2BRUBe01zJhOm0sCZdMkKLQbVlx3EtDVpUVXNRRx4Ab%2FP%2B2SPJ9YsFP7r51tmP24PNobucPsdOQhJEol4Hc5SdZHYt4DxiCuoI2BxQJPlQivdYQJu%2FCqSkOKJ%2FBX%2FR6ZBPOfBfdgZlYyoYHwD0o1y1pIxq7KchRMQq2H6XuYNZIb%2BQszlD4Rwhj5rJaXIPUDR49Nrd8ZgNZWLEIYWHFQ3lHf3FHysr96wGQxXmanTDFtPbBBjqkASzBv%2FRLjXse98ZNRCC8pmmxf4wN740ZStv1Im1WW1ixgq2ppYySOMK34L9vspxvNidkpbljTz36lt9UIbMCLZkETzri%2FsQdFpStomMmNG60MfcMAVOU5T4CRuLtqZdqinCB5uYC8gP6ibD%2BAML6sPyQGdXDMH8SkAGFhPoHApSIQB%2FN7Lxz9MdYw4mQdM%2BTppdF0Pvs9vEJcRxLQeRRpnFC%2Bv4T&X-Amz-Signature=f18817e7f9071242da097342b1b008e8a881907329c70b043193a06c3584e7ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUUFS3J%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDC3gcwZOZNQ2mZidydXUvEjjnTgv71GXucHJ41nbbRgQIhAIyi4Im6rAGIsb8vK0ftKrI8SvVLKe8HglQkZe4N0sWWKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqXJRRS9EMrG1BI0Iq3AOhvjwL394Z96CRuso87CaqxnYyGPWH3KEkhin1%2B9y52tZgvT2uIcIASeTMpiisDOz6TebMSqHd5Uvy2GxBVrWke0bLMdNx4FSIeHrXr1TfSI8JHMWxauZvfx6x2iSWDuntAJ0pSANaAmfAVFsWyQBmon3CbgfKXKVL3DKltlU5VCOzFONiEPY38QscFNhIQx1f7zo%2F7O60BYfMV0AbvT88lJNUE%2Fbblp1DacUu%2Bl8lM0XqMVWHPRzbzB7FtA%2FO8cgbg72OT3sDhc%2BdeOOaHNRXRppBSudM3YMrJCFyhJgxgKTcW8T6ccE8jU89Hpw%2BiDZMBgBceos0%2Fuw5UzVRABzDRymrmed8iewZG2D2UQZNKeALnTKdfRamkvltD7hgVI4QRILYX3yreugBLmpDuu%2BRUBe01zJhOm0sCZdMkKLQbVlx3EtDVpUVXNRRx4Ab%2FP%2B2SPJ9YsFP7r51tmP24PNobucPsdOQhJEol4Hc5SdZHYt4DxiCuoI2BxQJPlQivdYQJu%2FCqSkOKJ%2FBX%2FR6ZBPOfBfdgZlYyoYHwD0o1y1pIxq7KchRMQq2H6XuYNZIb%2BQszlD4Rwhj5rJaXIPUDR49Nrd8ZgNZWLEIYWHFQ3lHf3FHysr96wGQxXmanTDFtPbBBjqkASzBv%2FRLjXse98ZNRCC8pmmxf4wN740ZStv1Im1WW1ixgq2ppYySOMK34L9vspxvNidkpbljTz36lt9UIbMCLZkETzri%2FsQdFpStomMmNG60MfcMAVOU5T4CRuLtqZdqinCB5uYC8gP6ibD%2BAML6sPyQGdXDMH8SkAGFhPoHApSIQB%2FN7Lxz9MdYw4mQdM%2BTppdF0Pvs9vEJcRxLQeRRpnFC%2Bv4T&X-Amz-Signature=041de16dd3c8e382c7caf11bf16d1e41b2198d36129e8fec211b27e33d88685d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
