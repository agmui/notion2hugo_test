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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPO2S36%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFTjK2nbk4uK3c6aDPTevgw4cLqqUpRR0VMWNEJHBD%2BYAiABvTPg8gyNG3GwtbFTHi8jR5uiDhZ8LAT6NQhqi%2BjUvCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZel%2F81VvH8McIA%2FFKtwDoLKQ6MfhjC95JHoGvNyu6TbRwte%2BdiNFio8Jy%2BRk3GygCfp66myWhlA%2BTgyvNtFK3%2FmllTizuAiL9a7%2FPcHN2pBKA8EQQaMVBqKBBGC%2BPc%2B9mBbrYcIW%2FA6dah9HdgnULRkLWUeDSA2O4z5QZCFahPcvIAKugSsvlDfqyIQUDT1oVmK1x%2BHg1aGQgKK2rX%2Fiu%2Becljcq1X%2FxLC2PwNL8OmA9Tw%2FvV43x2L1Xlh64dTOqXQwG4opBt4%2FbpSNbHiRuYb7Bi6Q5kMAa%2FQ5O1TMGvER0beo5IbKC%2B8ruOqQLTUG86uCStq67cbwvyHtr2AU1epBPUIbxcqLWueCambU%2FrppDxm1TBtJ66vr97s7mwH0WY6ydohCJpFXQUq6emUNse4Fu%2BmvoEqadBxQHLaYZVWHlKKTNSlVPA347w%2Fiv36Vb5Co7mPsn02itcKKt6uJGcFh%2Fl3ppBe%2FcSC%2BR%2FPY1QIHFWvXFlX3wBwesZEoYyloNzjk3gVZkGjKIdIJJcINFs%2Fl8C4%2BFwEW0pKS5v6M%2FRGm9W7L5i6T92KFXKJtcNPg6fl4rLDaANMeIs%2FdT8DUKLiuXXNwTIdEoFHrb6rHiB2cXleTv%2FypJNDhSerEOkxA7oT2l1rZ36OX17z8wtZyfwwY6pgHXEGaxCc765hQJcmrtk5W6G9%2Bw04ZEFWVLX7DKjPmrwruvTu3h8SBjH8Tixv1RpwgCyzPs2Gy2F4v%2B35DM%2Bmz4f1Eu501ImRajpxtamns1Qah14dID9i1UYPFh%2BBfTKY3e8DnhVlj%2BAMPf61%2FUT4UqPx%2FxJ43IK8OztdtjbxV1tFYlOt2BRs6gzgBbXgYCp2OsrhtwIQ0jgE9Emoexl7RudSd2yvqH&X-Amz-Signature=f5e6c3cb860fce0cddf8a98b9edd8765df210fe742f2a058ef140e68f903a43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPO2S36%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFTjK2nbk4uK3c6aDPTevgw4cLqqUpRR0VMWNEJHBD%2BYAiABvTPg8gyNG3GwtbFTHi8jR5uiDhZ8LAT6NQhqi%2BjUvCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZel%2F81VvH8McIA%2FFKtwDoLKQ6MfhjC95JHoGvNyu6TbRwte%2BdiNFio8Jy%2BRk3GygCfp66myWhlA%2BTgyvNtFK3%2FmllTizuAiL9a7%2FPcHN2pBKA8EQQaMVBqKBBGC%2BPc%2B9mBbrYcIW%2FA6dah9HdgnULRkLWUeDSA2O4z5QZCFahPcvIAKugSsvlDfqyIQUDT1oVmK1x%2BHg1aGQgKK2rX%2Fiu%2Becljcq1X%2FxLC2PwNL8OmA9Tw%2FvV43x2L1Xlh64dTOqXQwG4opBt4%2FbpSNbHiRuYb7Bi6Q5kMAa%2FQ5O1TMGvER0beo5IbKC%2B8ruOqQLTUG86uCStq67cbwvyHtr2AU1epBPUIbxcqLWueCambU%2FrppDxm1TBtJ66vr97s7mwH0WY6ydohCJpFXQUq6emUNse4Fu%2BmvoEqadBxQHLaYZVWHlKKTNSlVPA347w%2Fiv36Vb5Co7mPsn02itcKKt6uJGcFh%2Fl3ppBe%2FcSC%2BR%2FPY1QIHFWvXFlX3wBwesZEoYyloNzjk3gVZkGjKIdIJJcINFs%2Fl8C4%2BFwEW0pKS5v6M%2FRGm9W7L5i6T92KFXKJtcNPg6fl4rLDaANMeIs%2FdT8DUKLiuXXNwTIdEoFHrb6rHiB2cXleTv%2FypJNDhSerEOkxA7oT2l1rZ36OX17z8wtZyfwwY6pgHXEGaxCc765hQJcmrtk5W6G9%2Bw04ZEFWVLX7DKjPmrwruvTu3h8SBjH8Tixv1RpwgCyzPs2Gy2F4v%2B35DM%2Bmz4f1Eu501ImRajpxtamns1Qah14dID9i1UYPFh%2BBfTKY3e8DnhVlj%2BAMPf61%2FUT4UqPx%2FxJ43IK8OztdtjbxV1tFYlOt2BRs6gzgBbXgYCp2OsrhtwIQ0jgE9Emoexl7RudSd2yvqH&X-Amz-Signature=a78a83d7b46328377cf96c35156ce882ee6bd49ab5c585842ae38f4725cd8205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPO2S36%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFTjK2nbk4uK3c6aDPTevgw4cLqqUpRR0VMWNEJHBD%2BYAiABvTPg8gyNG3GwtbFTHi8jR5uiDhZ8LAT6NQhqi%2BjUvCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZel%2F81VvH8McIA%2FFKtwDoLKQ6MfhjC95JHoGvNyu6TbRwte%2BdiNFio8Jy%2BRk3GygCfp66myWhlA%2BTgyvNtFK3%2FmllTizuAiL9a7%2FPcHN2pBKA8EQQaMVBqKBBGC%2BPc%2B9mBbrYcIW%2FA6dah9HdgnULRkLWUeDSA2O4z5QZCFahPcvIAKugSsvlDfqyIQUDT1oVmK1x%2BHg1aGQgKK2rX%2Fiu%2Becljcq1X%2FxLC2PwNL8OmA9Tw%2FvV43x2L1Xlh64dTOqXQwG4opBt4%2FbpSNbHiRuYb7Bi6Q5kMAa%2FQ5O1TMGvER0beo5IbKC%2B8ruOqQLTUG86uCStq67cbwvyHtr2AU1epBPUIbxcqLWueCambU%2FrppDxm1TBtJ66vr97s7mwH0WY6ydohCJpFXQUq6emUNse4Fu%2BmvoEqadBxQHLaYZVWHlKKTNSlVPA347w%2Fiv36Vb5Co7mPsn02itcKKt6uJGcFh%2Fl3ppBe%2FcSC%2BR%2FPY1QIHFWvXFlX3wBwesZEoYyloNzjk3gVZkGjKIdIJJcINFs%2Fl8C4%2BFwEW0pKS5v6M%2FRGm9W7L5i6T92KFXKJtcNPg6fl4rLDaANMeIs%2FdT8DUKLiuXXNwTIdEoFHrb6rHiB2cXleTv%2FypJNDhSerEOkxA7oT2l1rZ36OX17z8wtZyfwwY6pgHXEGaxCc765hQJcmrtk5W6G9%2Bw04ZEFWVLX7DKjPmrwruvTu3h8SBjH8Tixv1RpwgCyzPs2Gy2F4v%2B35DM%2Bmz4f1Eu501ImRajpxtamns1Qah14dID9i1UYPFh%2BBfTKY3e8DnhVlj%2BAMPf61%2FUT4UqPx%2FxJ43IK8OztdtjbxV1tFYlOt2BRs6gzgBbXgYCp2OsrhtwIQ0jgE9Emoexl7RudSd2yvqH&X-Amz-Signature=ac54bcde8e158218afcb8f45febc68d7d602c028a0f6e9d44a9095acbb9a4497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPO2S36%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFTjK2nbk4uK3c6aDPTevgw4cLqqUpRR0VMWNEJHBD%2BYAiABvTPg8gyNG3GwtbFTHi8jR5uiDhZ8LAT6NQhqi%2BjUvCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZel%2F81VvH8McIA%2FFKtwDoLKQ6MfhjC95JHoGvNyu6TbRwte%2BdiNFio8Jy%2BRk3GygCfp66myWhlA%2BTgyvNtFK3%2FmllTizuAiL9a7%2FPcHN2pBKA8EQQaMVBqKBBGC%2BPc%2B9mBbrYcIW%2FA6dah9HdgnULRkLWUeDSA2O4z5QZCFahPcvIAKugSsvlDfqyIQUDT1oVmK1x%2BHg1aGQgKK2rX%2Fiu%2Becljcq1X%2FxLC2PwNL8OmA9Tw%2FvV43x2L1Xlh64dTOqXQwG4opBt4%2FbpSNbHiRuYb7Bi6Q5kMAa%2FQ5O1TMGvER0beo5IbKC%2B8ruOqQLTUG86uCStq67cbwvyHtr2AU1epBPUIbxcqLWueCambU%2FrppDxm1TBtJ66vr97s7mwH0WY6ydohCJpFXQUq6emUNse4Fu%2BmvoEqadBxQHLaYZVWHlKKTNSlVPA347w%2Fiv36Vb5Co7mPsn02itcKKt6uJGcFh%2Fl3ppBe%2FcSC%2BR%2FPY1QIHFWvXFlX3wBwesZEoYyloNzjk3gVZkGjKIdIJJcINFs%2Fl8C4%2BFwEW0pKS5v6M%2FRGm9W7L5i6T92KFXKJtcNPg6fl4rLDaANMeIs%2FdT8DUKLiuXXNwTIdEoFHrb6rHiB2cXleTv%2FypJNDhSerEOkxA7oT2l1rZ36OX17z8wtZyfwwY6pgHXEGaxCc765hQJcmrtk5W6G9%2Bw04ZEFWVLX7DKjPmrwruvTu3h8SBjH8Tixv1RpwgCyzPs2Gy2F4v%2B35DM%2Bmz4f1Eu501ImRajpxtamns1Qah14dID9i1UYPFh%2BBfTKY3e8DnhVlj%2BAMPf61%2FUT4UqPx%2FxJ43IK8OztdtjbxV1tFYlOt2BRs6gzgBbXgYCp2OsrhtwIQ0jgE9Emoexl7RudSd2yvqH&X-Amz-Signature=64245f844eef3c0488796b3a38b20b009a1e286d2969a2e0fc2f450dece8f2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPO2S36%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFTjK2nbk4uK3c6aDPTevgw4cLqqUpRR0VMWNEJHBD%2BYAiABvTPg8gyNG3GwtbFTHi8jR5uiDhZ8LAT6NQhqi%2BjUvCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZel%2F81VvH8McIA%2FFKtwDoLKQ6MfhjC95JHoGvNyu6TbRwte%2BdiNFio8Jy%2BRk3GygCfp66myWhlA%2BTgyvNtFK3%2FmllTizuAiL9a7%2FPcHN2pBKA8EQQaMVBqKBBGC%2BPc%2B9mBbrYcIW%2FA6dah9HdgnULRkLWUeDSA2O4z5QZCFahPcvIAKugSsvlDfqyIQUDT1oVmK1x%2BHg1aGQgKK2rX%2Fiu%2Becljcq1X%2FxLC2PwNL8OmA9Tw%2FvV43x2L1Xlh64dTOqXQwG4opBt4%2FbpSNbHiRuYb7Bi6Q5kMAa%2FQ5O1TMGvER0beo5IbKC%2B8ruOqQLTUG86uCStq67cbwvyHtr2AU1epBPUIbxcqLWueCambU%2FrppDxm1TBtJ66vr97s7mwH0WY6ydohCJpFXQUq6emUNse4Fu%2BmvoEqadBxQHLaYZVWHlKKTNSlVPA347w%2Fiv36Vb5Co7mPsn02itcKKt6uJGcFh%2Fl3ppBe%2FcSC%2BR%2FPY1QIHFWvXFlX3wBwesZEoYyloNzjk3gVZkGjKIdIJJcINFs%2Fl8C4%2BFwEW0pKS5v6M%2FRGm9W7L5i6T92KFXKJtcNPg6fl4rLDaANMeIs%2FdT8DUKLiuXXNwTIdEoFHrb6rHiB2cXleTv%2FypJNDhSerEOkxA7oT2l1rZ36OX17z8wtZyfwwY6pgHXEGaxCc765hQJcmrtk5W6G9%2Bw04ZEFWVLX7DKjPmrwruvTu3h8SBjH8Tixv1RpwgCyzPs2Gy2F4v%2B35DM%2Bmz4f1Eu501ImRajpxtamns1Qah14dID9i1UYPFh%2BBfTKY3e8DnhVlj%2BAMPf61%2FUT4UqPx%2FxJ43IK8OztdtjbxV1tFYlOt2BRs6gzgBbXgYCp2OsrhtwIQ0jgE9Emoexl7RudSd2yvqH&X-Amz-Signature=b28bde13a6b788920af8d237f13133829ebf968d7893efaac29505a92e16cd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
