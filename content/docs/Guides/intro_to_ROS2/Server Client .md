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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQABDLS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC6BDL55QBcIGPmUCVN0BAkF09gJIY0hRLWtVBzuC2qUQIhAKIwC%2BVkiylqBiQXJHaO%2BM0KQazsKYDSs856elC1UQiGKv8DCHYQABoMNjM3NDIzMTgzODA1IgwIpLvkNCsitQMuIfgq3AO8zTahSHX594ZIu7SsnbMbibH3ITskzmrTThqWUhBkzrLGw5KsYzl%2F30ByaqMsvqHcQNSLpbgSMmaFb7HnZYC4OiBtUnHq1c2wVOiMkvsgu4bov5ghCg8nkM6V2QVQDAf%2BpG6yF2w48QnCAsvaZ5ok29lKKhrkpl%2FEglLDA92m%2BenlT%2Fo35cxjJ5%2F6WgytcUynBGrRX7WQ3hBbDXhYU8K3ppqY0PbTpWdjp0B6fxqreU50q%2FawkI%2BnuCMBoTAQGZv3Xvs6F0Xan5acMI0ZJuWZHyyQylD3e1x4sIvJfl2Hmcj%2BroMVm5rtBTrBC9GZci8fiuL%2BHdzYbxou6twKh%2FvUXProdKVC%2BG3ToEazoA4vHk52qCK5vQrt8%2FhQKQ0G%2BTn0epM7X3x0asPGeUqcxuDWbI2twRW6YDO0xNow6v0EXnFagZP2rUWR%2BuArRt%2FiWDGNxpw1DY7NXIA3WPRiNGGc983iCel4P4CMvsd7P88K3D%2F%2BXxx%2Bx3FamImspn9inD%2F5D%2Bs9XeVN31FwDFyQ4lvbkIz1KVx%2Fq72vWf%2Fia5A7DHqiMScUe2xBQgu5GfWymcRniMinxq2Uxai5DQ7219lzG40PNXqW3x4lzi1YfS5VRBuYZKLL7JaBV3NbwzCRjK%2FDBjqkAUjAmlJ3Eyu1GKlhMgz13GM0xA%2B6j%2Fd8Uw%2F24EtmovGYrNZi%2BRrSGAPN7eSxlNNTxpDs2VBr%2FRUVMF%2BPNmdE7qc2Xt7J%2BbF2ZWT3RXFVfV7pvVtIx%2BYpqvUytCoO5T%2BQmnei%2FcYq7gZvS6J7cChnbRzjF2ylHmvvjbhdNktTN6NPysh9a3E2U8nAQkvG%2FBg1xap%2FkqB3LS7biWcNhv7ZJj5a4ek6&X-Amz-Signature=a76a141c1832ecad4ef31f456f90f4f07df9fc7117fb204c21a25942e54092bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQABDLS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC6BDL55QBcIGPmUCVN0BAkF09gJIY0hRLWtVBzuC2qUQIhAKIwC%2BVkiylqBiQXJHaO%2BM0KQazsKYDSs856elC1UQiGKv8DCHYQABoMNjM3NDIzMTgzODA1IgwIpLvkNCsitQMuIfgq3AO8zTahSHX594ZIu7SsnbMbibH3ITskzmrTThqWUhBkzrLGw5KsYzl%2F30ByaqMsvqHcQNSLpbgSMmaFb7HnZYC4OiBtUnHq1c2wVOiMkvsgu4bov5ghCg8nkM6V2QVQDAf%2BpG6yF2w48QnCAsvaZ5ok29lKKhrkpl%2FEglLDA92m%2BenlT%2Fo35cxjJ5%2F6WgytcUynBGrRX7WQ3hBbDXhYU8K3ppqY0PbTpWdjp0B6fxqreU50q%2FawkI%2BnuCMBoTAQGZv3Xvs6F0Xan5acMI0ZJuWZHyyQylD3e1x4sIvJfl2Hmcj%2BroMVm5rtBTrBC9GZci8fiuL%2BHdzYbxou6twKh%2FvUXProdKVC%2BG3ToEazoA4vHk52qCK5vQrt8%2FhQKQ0G%2BTn0epM7X3x0asPGeUqcxuDWbI2twRW6YDO0xNow6v0EXnFagZP2rUWR%2BuArRt%2FiWDGNxpw1DY7NXIA3WPRiNGGc983iCel4P4CMvsd7P88K3D%2F%2BXxx%2Bx3FamImspn9inD%2F5D%2Bs9XeVN31FwDFyQ4lvbkIz1KVx%2Fq72vWf%2Fia5A7DHqiMScUe2xBQgu5GfWymcRniMinxq2Uxai5DQ7219lzG40PNXqW3x4lzi1YfS5VRBuYZKLL7JaBV3NbwzCRjK%2FDBjqkAUjAmlJ3Eyu1GKlhMgz13GM0xA%2B6j%2Fd8Uw%2F24EtmovGYrNZi%2BRrSGAPN7eSxlNNTxpDs2VBr%2FRUVMF%2BPNmdE7qc2Xt7J%2BbF2ZWT3RXFVfV7pvVtIx%2BYpqvUytCoO5T%2BQmnei%2FcYq7gZvS6J7cChnbRzjF2ylHmvvjbhdNktTN6NPysh9a3E2U8nAQkvG%2FBg1xap%2FkqB3LS7biWcNhv7ZJj5a4ek6&X-Amz-Signature=e361a8c1d1556b8ac60abcf595a9292c78b735f7d88d1594e1793160b2153671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQABDLS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC6BDL55QBcIGPmUCVN0BAkF09gJIY0hRLWtVBzuC2qUQIhAKIwC%2BVkiylqBiQXJHaO%2BM0KQazsKYDSs856elC1UQiGKv8DCHYQABoMNjM3NDIzMTgzODA1IgwIpLvkNCsitQMuIfgq3AO8zTahSHX594ZIu7SsnbMbibH3ITskzmrTThqWUhBkzrLGw5KsYzl%2F30ByaqMsvqHcQNSLpbgSMmaFb7HnZYC4OiBtUnHq1c2wVOiMkvsgu4bov5ghCg8nkM6V2QVQDAf%2BpG6yF2w48QnCAsvaZ5ok29lKKhrkpl%2FEglLDA92m%2BenlT%2Fo35cxjJ5%2F6WgytcUynBGrRX7WQ3hBbDXhYU8K3ppqY0PbTpWdjp0B6fxqreU50q%2FawkI%2BnuCMBoTAQGZv3Xvs6F0Xan5acMI0ZJuWZHyyQylD3e1x4sIvJfl2Hmcj%2BroMVm5rtBTrBC9GZci8fiuL%2BHdzYbxou6twKh%2FvUXProdKVC%2BG3ToEazoA4vHk52qCK5vQrt8%2FhQKQ0G%2BTn0epM7X3x0asPGeUqcxuDWbI2twRW6YDO0xNow6v0EXnFagZP2rUWR%2BuArRt%2FiWDGNxpw1DY7NXIA3WPRiNGGc983iCel4P4CMvsd7P88K3D%2F%2BXxx%2Bx3FamImspn9inD%2F5D%2Bs9XeVN31FwDFyQ4lvbkIz1KVx%2Fq72vWf%2Fia5A7DHqiMScUe2xBQgu5GfWymcRniMinxq2Uxai5DQ7219lzG40PNXqW3x4lzi1YfS5VRBuYZKLL7JaBV3NbwzCRjK%2FDBjqkAUjAmlJ3Eyu1GKlhMgz13GM0xA%2B6j%2Fd8Uw%2F24EtmovGYrNZi%2BRrSGAPN7eSxlNNTxpDs2VBr%2FRUVMF%2BPNmdE7qc2Xt7J%2BbF2ZWT3RXFVfV7pvVtIx%2BYpqvUytCoO5T%2BQmnei%2FcYq7gZvS6J7cChnbRzjF2ylHmvvjbhdNktTN6NPysh9a3E2U8nAQkvG%2FBg1xap%2FkqB3LS7biWcNhv7ZJj5a4ek6&X-Amz-Signature=7b56612299de46e73a340cdbdfecaed9a20178370ee8c86a0dc2b41ee6335d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQABDLS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC6BDL55QBcIGPmUCVN0BAkF09gJIY0hRLWtVBzuC2qUQIhAKIwC%2BVkiylqBiQXJHaO%2BM0KQazsKYDSs856elC1UQiGKv8DCHYQABoMNjM3NDIzMTgzODA1IgwIpLvkNCsitQMuIfgq3AO8zTahSHX594ZIu7SsnbMbibH3ITskzmrTThqWUhBkzrLGw5KsYzl%2F30ByaqMsvqHcQNSLpbgSMmaFb7HnZYC4OiBtUnHq1c2wVOiMkvsgu4bov5ghCg8nkM6V2QVQDAf%2BpG6yF2w48QnCAsvaZ5ok29lKKhrkpl%2FEglLDA92m%2BenlT%2Fo35cxjJ5%2F6WgytcUynBGrRX7WQ3hBbDXhYU8K3ppqY0PbTpWdjp0B6fxqreU50q%2FawkI%2BnuCMBoTAQGZv3Xvs6F0Xan5acMI0ZJuWZHyyQylD3e1x4sIvJfl2Hmcj%2BroMVm5rtBTrBC9GZci8fiuL%2BHdzYbxou6twKh%2FvUXProdKVC%2BG3ToEazoA4vHk52qCK5vQrt8%2FhQKQ0G%2BTn0epM7X3x0asPGeUqcxuDWbI2twRW6YDO0xNow6v0EXnFagZP2rUWR%2BuArRt%2FiWDGNxpw1DY7NXIA3WPRiNGGc983iCel4P4CMvsd7P88K3D%2F%2BXxx%2Bx3FamImspn9inD%2F5D%2Bs9XeVN31FwDFyQ4lvbkIz1KVx%2Fq72vWf%2Fia5A7DHqiMScUe2xBQgu5GfWymcRniMinxq2Uxai5DQ7219lzG40PNXqW3x4lzi1YfS5VRBuYZKLL7JaBV3NbwzCRjK%2FDBjqkAUjAmlJ3Eyu1GKlhMgz13GM0xA%2B6j%2Fd8Uw%2F24EtmovGYrNZi%2BRrSGAPN7eSxlNNTxpDs2VBr%2FRUVMF%2BPNmdE7qc2Xt7J%2BbF2ZWT3RXFVfV7pvVtIx%2BYpqvUytCoO5T%2BQmnei%2FcYq7gZvS6J7cChnbRzjF2ylHmvvjbhdNktTN6NPysh9a3E2U8nAQkvG%2FBg1xap%2FkqB3LS7biWcNhv7ZJj5a4ek6&X-Amz-Signature=c1cf60af446583578c65cef9dc20003cfb3467e880223e210d0283c5b9c158bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQABDLS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC6BDL55QBcIGPmUCVN0BAkF09gJIY0hRLWtVBzuC2qUQIhAKIwC%2BVkiylqBiQXJHaO%2BM0KQazsKYDSs856elC1UQiGKv8DCHYQABoMNjM3NDIzMTgzODA1IgwIpLvkNCsitQMuIfgq3AO8zTahSHX594ZIu7SsnbMbibH3ITskzmrTThqWUhBkzrLGw5KsYzl%2F30ByaqMsvqHcQNSLpbgSMmaFb7HnZYC4OiBtUnHq1c2wVOiMkvsgu4bov5ghCg8nkM6V2QVQDAf%2BpG6yF2w48QnCAsvaZ5ok29lKKhrkpl%2FEglLDA92m%2BenlT%2Fo35cxjJ5%2F6WgytcUynBGrRX7WQ3hBbDXhYU8K3ppqY0PbTpWdjp0B6fxqreU50q%2FawkI%2BnuCMBoTAQGZv3Xvs6F0Xan5acMI0ZJuWZHyyQylD3e1x4sIvJfl2Hmcj%2BroMVm5rtBTrBC9GZci8fiuL%2BHdzYbxou6twKh%2FvUXProdKVC%2BG3ToEazoA4vHk52qCK5vQrt8%2FhQKQ0G%2BTn0epM7X3x0asPGeUqcxuDWbI2twRW6YDO0xNow6v0EXnFagZP2rUWR%2BuArRt%2FiWDGNxpw1DY7NXIA3WPRiNGGc983iCel4P4CMvsd7P88K3D%2F%2BXxx%2Bx3FamImspn9inD%2F5D%2Bs9XeVN31FwDFyQ4lvbkIz1KVx%2Fq72vWf%2Fia5A7DHqiMScUe2xBQgu5GfWymcRniMinxq2Uxai5DQ7219lzG40PNXqW3x4lzi1YfS5VRBuYZKLL7JaBV3NbwzCRjK%2FDBjqkAUjAmlJ3Eyu1GKlhMgz13GM0xA%2B6j%2Fd8Uw%2F24EtmovGYrNZi%2BRrSGAPN7eSxlNNTxpDs2VBr%2FRUVMF%2BPNmdE7qc2Xt7J%2BbF2ZWT3RXFVfV7pvVtIx%2BYpqvUytCoO5T%2BQmnei%2FcYq7gZvS6J7cChnbRzjF2ylHmvvjbhdNktTN6NPysh9a3E2U8nAQkvG%2FBg1xap%2FkqB3LS7biWcNhv7ZJj5a4ek6&X-Amz-Signature=978e99ebda6ed3cd1a9bf3b7bd796b067b452cc6af2eac013dfe8cce26ec289d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
