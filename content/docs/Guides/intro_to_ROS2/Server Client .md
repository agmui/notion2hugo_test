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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3HOBMA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt%2FObvOl%2BX1qYSysY3Ilu63dDq8JyYUl1RqKFulcxFNwIgGIWNEdyYjbV6DxfJcHpFjWTMamFD0yw2BmK26oVezDoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkvjgOpAwFxo3mbjSrcAzDryIhykphnv2fpR12WZemfGmJ7eX7rC%2F%2FwrqzfeeY9B%2FjLvzHpKW1DtEoupnHjHJTXQdLmEugyEyiiIWj%2BnUE85Qi47Qg1SL6DJIXrCRTKw%2BYI9YKTN%2FgBYitQUt8I0Ho36CK58gh1SSeT0thS6youxPm2Y%2FvpvHqp9detTbPDd%2F0O8goQ1mIQz3p1plVMgn5cGW0UKkZLixXo7PA4c3gH2GSvDA7ju%2Br0E%2F4oSY7nEP3cEMULI4q0tR%2BJOZIqMj4MKgh5iQKXrf%2BizQ9CwauK76cIwcF2fnbFlbIS%2BAVD4xlFNXn6klgoMikezm%2FFJkyCPpXWzRA%2FN4czwNhb9PTPMB3SsRqahs2JuR5%2BWw8m%2Bzr7Fk0CN5013%2FYaEaHnrqNB6VVU73JrZGStDEymaKZMkacVAixMa%2FZSOHiLP4iKH28CpssY8j4ri2%2FNf7L%2F5Zog7uV%2BQKk4Uguat9x%2ByVx9bOwAv%2B7mvRPoDKQCi3GwQb1Dn7CPFmBr48gMnhe5vQdcGLS0azHC5CKHNapEmxRglKLQa205QV4Nr5UfFBrWbW3YxWjJnF3qNTCISbN12aHPr5HgjsBzi%2FI738fTandvYrNf4EksLl8e%2B842t1xwpHnQSGMUqNamCnCsMPib78AGOqUB%2F8pd%2FfTaiV1fqywDec1gohXHnl4UU%2FoEskSD2coAaIYfpr%2BcsSPWmdbvix%2F58VfpLzV89n2w9yqe3t3dCUW7fX1Ziy0Wymz2mxcttq5%2BWTq4%2FqJI33yahyhV9CJPLdN4M1oyJEAYLUXilqMSNo9gdHv%2B0ILx0rE7m5Tg8V2MRLPdAmJNksRlfDLgjkzd0gaciIm%2FolHxSQzuy5S%2FhewVTwW6J2yZ&X-Amz-Signature=692d63a710c34b07c27ae7b5d16a31d9f5cc2c2303b357c5fa5206c377ec73d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3HOBMA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt%2FObvOl%2BX1qYSysY3Ilu63dDq8JyYUl1RqKFulcxFNwIgGIWNEdyYjbV6DxfJcHpFjWTMamFD0yw2BmK26oVezDoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkvjgOpAwFxo3mbjSrcAzDryIhykphnv2fpR12WZemfGmJ7eX7rC%2F%2FwrqzfeeY9B%2FjLvzHpKW1DtEoupnHjHJTXQdLmEugyEyiiIWj%2BnUE85Qi47Qg1SL6DJIXrCRTKw%2BYI9YKTN%2FgBYitQUt8I0Ho36CK58gh1SSeT0thS6youxPm2Y%2FvpvHqp9detTbPDd%2F0O8goQ1mIQz3p1plVMgn5cGW0UKkZLixXo7PA4c3gH2GSvDA7ju%2Br0E%2F4oSY7nEP3cEMULI4q0tR%2BJOZIqMj4MKgh5iQKXrf%2BizQ9CwauK76cIwcF2fnbFlbIS%2BAVD4xlFNXn6klgoMikezm%2FFJkyCPpXWzRA%2FN4czwNhb9PTPMB3SsRqahs2JuR5%2BWw8m%2Bzr7Fk0CN5013%2FYaEaHnrqNB6VVU73JrZGStDEymaKZMkacVAixMa%2FZSOHiLP4iKH28CpssY8j4ri2%2FNf7L%2F5Zog7uV%2BQKk4Uguat9x%2ByVx9bOwAv%2B7mvRPoDKQCi3GwQb1Dn7CPFmBr48gMnhe5vQdcGLS0azHC5CKHNapEmxRglKLQa205QV4Nr5UfFBrWbW3YxWjJnF3qNTCISbN12aHPr5HgjsBzi%2FI738fTandvYrNf4EksLl8e%2B842t1xwpHnQSGMUqNamCnCsMPib78AGOqUB%2F8pd%2FfTaiV1fqywDec1gohXHnl4UU%2FoEskSD2coAaIYfpr%2BcsSPWmdbvix%2F58VfpLzV89n2w9yqe3t3dCUW7fX1Ziy0Wymz2mxcttq5%2BWTq4%2FqJI33yahyhV9CJPLdN4M1oyJEAYLUXilqMSNo9gdHv%2B0ILx0rE7m5Tg8V2MRLPdAmJNksRlfDLgjkzd0gaciIm%2FolHxSQzuy5S%2FhewVTwW6J2yZ&X-Amz-Signature=c63fd4514a7e8fa470a7d88244a042459e75b4fb737a3c5252f043e949d332ac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3HOBMA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt%2FObvOl%2BX1qYSysY3Ilu63dDq8JyYUl1RqKFulcxFNwIgGIWNEdyYjbV6DxfJcHpFjWTMamFD0yw2BmK26oVezDoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkvjgOpAwFxo3mbjSrcAzDryIhykphnv2fpR12WZemfGmJ7eX7rC%2F%2FwrqzfeeY9B%2FjLvzHpKW1DtEoupnHjHJTXQdLmEugyEyiiIWj%2BnUE85Qi47Qg1SL6DJIXrCRTKw%2BYI9YKTN%2FgBYitQUt8I0Ho36CK58gh1SSeT0thS6youxPm2Y%2FvpvHqp9detTbPDd%2F0O8goQ1mIQz3p1plVMgn5cGW0UKkZLixXo7PA4c3gH2GSvDA7ju%2Br0E%2F4oSY7nEP3cEMULI4q0tR%2BJOZIqMj4MKgh5iQKXrf%2BizQ9CwauK76cIwcF2fnbFlbIS%2BAVD4xlFNXn6klgoMikezm%2FFJkyCPpXWzRA%2FN4czwNhb9PTPMB3SsRqahs2JuR5%2BWw8m%2Bzr7Fk0CN5013%2FYaEaHnrqNB6VVU73JrZGStDEymaKZMkacVAixMa%2FZSOHiLP4iKH28CpssY8j4ri2%2FNf7L%2F5Zog7uV%2BQKk4Uguat9x%2ByVx9bOwAv%2B7mvRPoDKQCi3GwQb1Dn7CPFmBr48gMnhe5vQdcGLS0azHC5CKHNapEmxRglKLQa205QV4Nr5UfFBrWbW3YxWjJnF3qNTCISbN12aHPr5HgjsBzi%2FI738fTandvYrNf4EksLl8e%2B842t1xwpHnQSGMUqNamCnCsMPib78AGOqUB%2F8pd%2FfTaiV1fqywDec1gohXHnl4UU%2FoEskSD2coAaIYfpr%2BcsSPWmdbvix%2F58VfpLzV89n2w9yqe3t3dCUW7fX1Ziy0Wymz2mxcttq5%2BWTq4%2FqJI33yahyhV9CJPLdN4M1oyJEAYLUXilqMSNo9gdHv%2B0ILx0rE7m5Tg8V2MRLPdAmJNksRlfDLgjkzd0gaciIm%2FolHxSQzuy5S%2FhewVTwW6J2yZ&X-Amz-Signature=7a3ca883b8e69996ae7d18abc4d321c706750ccf145d4f344ea69aacc3b959ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3HOBMA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt%2FObvOl%2BX1qYSysY3Ilu63dDq8JyYUl1RqKFulcxFNwIgGIWNEdyYjbV6DxfJcHpFjWTMamFD0yw2BmK26oVezDoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkvjgOpAwFxo3mbjSrcAzDryIhykphnv2fpR12WZemfGmJ7eX7rC%2F%2FwrqzfeeY9B%2FjLvzHpKW1DtEoupnHjHJTXQdLmEugyEyiiIWj%2BnUE85Qi47Qg1SL6DJIXrCRTKw%2BYI9YKTN%2FgBYitQUt8I0Ho36CK58gh1SSeT0thS6youxPm2Y%2FvpvHqp9detTbPDd%2F0O8goQ1mIQz3p1plVMgn5cGW0UKkZLixXo7PA4c3gH2GSvDA7ju%2Br0E%2F4oSY7nEP3cEMULI4q0tR%2BJOZIqMj4MKgh5iQKXrf%2BizQ9CwauK76cIwcF2fnbFlbIS%2BAVD4xlFNXn6klgoMikezm%2FFJkyCPpXWzRA%2FN4czwNhb9PTPMB3SsRqahs2JuR5%2BWw8m%2Bzr7Fk0CN5013%2FYaEaHnrqNB6VVU73JrZGStDEymaKZMkacVAixMa%2FZSOHiLP4iKH28CpssY8j4ri2%2FNf7L%2F5Zog7uV%2BQKk4Uguat9x%2ByVx9bOwAv%2B7mvRPoDKQCi3GwQb1Dn7CPFmBr48gMnhe5vQdcGLS0azHC5CKHNapEmxRglKLQa205QV4Nr5UfFBrWbW3YxWjJnF3qNTCISbN12aHPr5HgjsBzi%2FI738fTandvYrNf4EksLl8e%2B842t1xwpHnQSGMUqNamCnCsMPib78AGOqUB%2F8pd%2FfTaiV1fqywDec1gohXHnl4UU%2FoEskSD2coAaIYfpr%2BcsSPWmdbvix%2F58VfpLzV89n2w9yqe3t3dCUW7fX1Ziy0Wymz2mxcttq5%2BWTq4%2FqJI33yahyhV9CJPLdN4M1oyJEAYLUXilqMSNo9gdHv%2B0ILx0rE7m5Tg8V2MRLPdAmJNksRlfDLgjkzd0gaciIm%2FolHxSQzuy5S%2FhewVTwW6J2yZ&X-Amz-Signature=eb8a5d367b22c2f568d3aa2888d126981eb046ef46affa1d7dfd60e3bc2b3987&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3HOBMA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt%2FObvOl%2BX1qYSysY3Ilu63dDq8JyYUl1RqKFulcxFNwIgGIWNEdyYjbV6DxfJcHpFjWTMamFD0yw2BmK26oVezDoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkvjgOpAwFxo3mbjSrcAzDryIhykphnv2fpR12WZemfGmJ7eX7rC%2F%2FwrqzfeeY9B%2FjLvzHpKW1DtEoupnHjHJTXQdLmEugyEyiiIWj%2BnUE85Qi47Qg1SL6DJIXrCRTKw%2BYI9YKTN%2FgBYitQUt8I0Ho36CK58gh1SSeT0thS6youxPm2Y%2FvpvHqp9detTbPDd%2F0O8goQ1mIQz3p1plVMgn5cGW0UKkZLixXo7PA4c3gH2GSvDA7ju%2Br0E%2F4oSY7nEP3cEMULI4q0tR%2BJOZIqMj4MKgh5iQKXrf%2BizQ9CwauK76cIwcF2fnbFlbIS%2BAVD4xlFNXn6klgoMikezm%2FFJkyCPpXWzRA%2FN4czwNhb9PTPMB3SsRqahs2JuR5%2BWw8m%2Bzr7Fk0CN5013%2FYaEaHnrqNB6VVU73JrZGStDEymaKZMkacVAixMa%2FZSOHiLP4iKH28CpssY8j4ri2%2FNf7L%2F5Zog7uV%2BQKk4Uguat9x%2ByVx9bOwAv%2B7mvRPoDKQCi3GwQb1Dn7CPFmBr48gMnhe5vQdcGLS0azHC5CKHNapEmxRglKLQa205QV4Nr5UfFBrWbW3YxWjJnF3qNTCISbN12aHPr5HgjsBzi%2FI738fTandvYrNf4EksLl8e%2B842t1xwpHnQSGMUqNamCnCsMPib78AGOqUB%2F8pd%2FfTaiV1fqywDec1gohXHnl4UU%2FoEskSD2coAaIYfpr%2BcsSPWmdbvix%2F58VfpLzV89n2w9yqe3t3dCUW7fX1Ziy0Wymz2mxcttq5%2BWTq4%2FqJI33yahyhV9CJPLdN4M1oyJEAYLUXilqMSNo9gdHv%2B0ILx0rE7m5Tg8V2MRLPdAmJNksRlfDLgjkzd0gaciIm%2FolHxSQzuy5S%2FhewVTwW6J2yZ&X-Amz-Signature=9a9c2d7920241729c5bff23d136577258017ab2d0039217a855f248a1ac3c30c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
