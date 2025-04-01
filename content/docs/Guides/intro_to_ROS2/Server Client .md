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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUEWZH4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2FtZvWIDqKNxSYXxtXjiU07O1QD3kSs3VOa%2Fs5wsi8qgIhAM%2Fe%2BSN1wbKjRYX9OFpOmKpT%2BZt7OmSmEjvJKLguq7OGKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz20BLEfDJhK6SybEq3APjiEFRIm%2Fzb9GSc6PLMj6EP2Pbs5fqrjbce1YeBjAV0qUNVbmY%2BDtu7fdmlD5cNcQdThw8aUAqEjlhkpjR6CpDFTRtA7HcEGcEOU%2Bl5zF1b4uQiHMsqNaZcRI47hQzN%2B4ua2wdi%2BJ%2FhKrZwyaZQMYg9kZnzVI%2FhJkPc2gLTr2vWtl9FTpVQiMP1iYeuWLy99YvUYHLPcc4HbBtIrKBsjx2hdHgprUT3cDFyJnNdm5CDGRC1RKonIY2y3woJBecJ89Rp%2BNBNio87l93htdPgAKRcEp1qekkgVnyebt8R%2B9JlumKQK0B2fZ2j4yMvf5SwMt1kLReYibP7PwAyjbMA8G2DsLjtw3zPjCCfhnh5KQVhy9DfXwzJLcX2fsXtzO%2BqS8Pgo1t7gGRfqSjKq0%2FhMkrIsUprPzhHQk7EmJyRMUkWEYGQlIFlMP03NfNMJL%2BeqGPAo%2FeKOsvTrv9lfOi4L2nmL2roqCPo%2BtpzV3bbD5lD2HCdU6h4E1VRaxgVVP0tq5pZpsUC1Bu82UmC0HmmGJiP5%2BQZZqzO3FeGgy4cTndTcW72sanOzYANJ4a58aoYqcnYOX1RmmYcXN4ZB2LPVPBTjfOmYNiPr0zlB62NlcLuK0WELL83YybbekrUjDloLC%2FBjqkAXbKdhDxZXIRpEwcHoUaXh9TqDCcPDgXkuXpRDt5YSlq5loQV8gtCST91%2B8yp9IrcKo2ciMeNTTIK5O4WhXX1dYfvrNF9r3nrCwu5wH5%2Bk%2FDyITOzNN1lBXapZMaJl0oKSLvb0e3dvAHG8s8Cuu9trlFncbhwQUdGQLEiqGHsedFQKz1coVkYIUCcVsxdENe6XD2RhgEWjAOgrPhodNwB8EaTPJ%2F&X-Amz-Signature=9007fb634a8d6290a8b0bb95736f2ee4d19268f35c6d0a6c45949dc150992f16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUEWZH4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2FtZvWIDqKNxSYXxtXjiU07O1QD3kSs3VOa%2Fs5wsi8qgIhAM%2Fe%2BSN1wbKjRYX9OFpOmKpT%2BZt7OmSmEjvJKLguq7OGKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz20BLEfDJhK6SybEq3APjiEFRIm%2Fzb9GSc6PLMj6EP2Pbs5fqrjbce1YeBjAV0qUNVbmY%2BDtu7fdmlD5cNcQdThw8aUAqEjlhkpjR6CpDFTRtA7HcEGcEOU%2Bl5zF1b4uQiHMsqNaZcRI47hQzN%2B4ua2wdi%2BJ%2FhKrZwyaZQMYg9kZnzVI%2FhJkPc2gLTr2vWtl9FTpVQiMP1iYeuWLy99YvUYHLPcc4HbBtIrKBsjx2hdHgprUT3cDFyJnNdm5CDGRC1RKonIY2y3woJBecJ89Rp%2BNBNio87l93htdPgAKRcEp1qekkgVnyebt8R%2B9JlumKQK0B2fZ2j4yMvf5SwMt1kLReYibP7PwAyjbMA8G2DsLjtw3zPjCCfhnh5KQVhy9DfXwzJLcX2fsXtzO%2BqS8Pgo1t7gGRfqSjKq0%2FhMkrIsUprPzhHQk7EmJyRMUkWEYGQlIFlMP03NfNMJL%2BeqGPAo%2FeKOsvTrv9lfOi4L2nmL2roqCPo%2BtpzV3bbD5lD2HCdU6h4E1VRaxgVVP0tq5pZpsUC1Bu82UmC0HmmGJiP5%2BQZZqzO3FeGgy4cTndTcW72sanOzYANJ4a58aoYqcnYOX1RmmYcXN4ZB2LPVPBTjfOmYNiPr0zlB62NlcLuK0WELL83YybbekrUjDloLC%2FBjqkAXbKdhDxZXIRpEwcHoUaXh9TqDCcPDgXkuXpRDt5YSlq5loQV8gtCST91%2B8yp9IrcKo2ciMeNTTIK5O4WhXX1dYfvrNF9r3nrCwu5wH5%2Bk%2FDyITOzNN1lBXapZMaJl0oKSLvb0e3dvAHG8s8Cuu9trlFncbhwQUdGQLEiqGHsedFQKz1coVkYIUCcVsxdENe6XD2RhgEWjAOgrPhodNwB8EaTPJ%2F&X-Amz-Signature=5cc0745d4255ddeeafa8cdfbd315d72da1ab38fed4bb522e27021e7e36b1ac38&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUEWZH4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2FtZvWIDqKNxSYXxtXjiU07O1QD3kSs3VOa%2Fs5wsi8qgIhAM%2Fe%2BSN1wbKjRYX9OFpOmKpT%2BZt7OmSmEjvJKLguq7OGKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz20BLEfDJhK6SybEq3APjiEFRIm%2Fzb9GSc6PLMj6EP2Pbs5fqrjbce1YeBjAV0qUNVbmY%2BDtu7fdmlD5cNcQdThw8aUAqEjlhkpjR6CpDFTRtA7HcEGcEOU%2Bl5zF1b4uQiHMsqNaZcRI47hQzN%2B4ua2wdi%2BJ%2FhKrZwyaZQMYg9kZnzVI%2FhJkPc2gLTr2vWtl9FTpVQiMP1iYeuWLy99YvUYHLPcc4HbBtIrKBsjx2hdHgprUT3cDFyJnNdm5CDGRC1RKonIY2y3woJBecJ89Rp%2BNBNio87l93htdPgAKRcEp1qekkgVnyebt8R%2B9JlumKQK0B2fZ2j4yMvf5SwMt1kLReYibP7PwAyjbMA8G2DsLjtw3zPjCCfhnh5KQVhy9DfXwzJLcX2fsXtzO%2BqS8Pgo1t7gGRfqSjKq0%2FhMkrIsUprPzhHQk7EmJyRMUkWEYGQlIFlMP03NfNMJL%2BeqGPAo%2FeKOsvTrv9lfOi4L2nmL2roqCPo%2BtpzV3bbD5lD2HCdU6h4E1VRaxgVVP0tq5pZpsUC1Bu82UmC0HmmGJiP5%2BQZZqzO3FeGgy4cTndTcW72sanOzYANJ4a58aoYqcnYOX1RmmYcXN4ZB2LPVPBTjfOmYNiPr0zlB62NlcLuK0WELL83YybbekrUjDloLC%2FBjqkAXbKdhDxZXIRpEwcHoUaXh9TqDCcPDgXkuXpRDt5YSlq5loQV8gtCST91%2B8yp9IrcKo2ciMeNTTIK5O4WhXX1dYfvrNF9r3nrCwu5wH5%2Bk%2FDyITOzNN1lBXapZMaJl0oKSLvb0e3dvAHG8s8Cuu9trlFncbhwQUdGQLEiqGHsedFQKz1coVkYIUCcVsxdENe6XD2RhgEWjAOgrPhodNwB8EaTPJ%2F&X-Amz-Signature=44e0a8052a5a1be1ad3cb90c8692da575a37bf8ef9de48a73d30308ccb0c1abb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUEWZH4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2FtZvWIDqKNxSYXxtXjiU07O1QD3kSs3VOa%2Fs5wsi8qgIhAM%2Fe%2BSN1wbKjRYX9OFpOmKpT%2BZt7OmSmEjvJKLguq7OGKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz20BLEfDJhK6SybEq3APjiEFRIm%2Fzb9GSc6PLMj6EP2Pbs5fqrjbce1YeBjAV0qUNVbmY%2BDtu7fdmlD5cNcQdThw8aUAqEjlhkpjR6CpDFTRtA7HcEGcEOU%2Bl5zF1b4uQiHMsqNaZcRI47hQzN%2B4ua2wdi%2BJ%2FhKrZwyaZQMYg9kZnzVI%2FhJkPc2gLTr2vWtl9FTpVQiMP1iYeuWLy99YvUYHLPcc4HbBtIrKBsjx2hdHgprUT3cDFyJnNdm5CDGRC1RKonIY2y3woJBecJ89Rp%2BNBNio87l93htdPgAKRcEp1qekkgVnyebt8R%2B9JlumKQK0B2fZ2j4yMvf5SwMt1kLReYibP7PwAyjbMA8G2DsLjtw3zPjCCfhnh5KQVhy9DfXwzJLcX2fsXtzO%2BqS8Pgo1t7gGRfqSjKq0%2FhMkrIsUprPzhHQk7EmJyRMUkWEYGQlIFlMP03NfNMJL%2BeqGPAo%2FeKOsvTrv9lfOi4L2nmL2roqCPo%2BtpzV3bbD5lD2HCdU6h4E1VRaxgVVP0tq5pZpsUC1Bu82UmC0HmmGJiP5%2BQZZqzO3FeGgy4cTndTcW72sanOzYANJ4a58aoYqcnYOX1RmmYcXN4ZB2LPVPBTjfOmYNiPr0zlB62NlcLuK0WELL83YybbekrUjDloLC%2FBjqkAXbKdhDxZXIRpEwcHoUaXh9TqDCcPDgXkuXpRDt5YSlq5loQV8gtCST91%2B8yp9IrcKo2ciMeNTTIK5O4WhXX1dYfvrNF9r3nrCwu5wH5%2Bk%2FDyITOzNN1lBXapZMaJl0oKSLvb0e3dvAHG8s8Cuu9trlFncbhwQUdGQLEiqGHsedFQKz1coVkYIUCcVsxdENe6XD2RhgEWjAOgrPhodNwB8EaTPJ%2F&X-Amz-Signature=f5770141e48a004bd5ee591004fc3ee509b50ca63acdf14aa8de5e5e7b89d8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUEWZH4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2FtZvWIDqKNxSYXxtXjiU07O1QD3kSs3VOa%2Fs5wsi8qgIhAM%2Fe%2BSN1wbKjRYX9OFpOmKpT%2BZt7OmSmEjvJKLguq7OGKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz20BLEfDJhK6SybEq3APjiEFRIm%2Fzb9GSc6PLMj6EP2Pbs5fqrjbce1YeBjAV0qUNVbmY%2BDtu7fdmlD5cNcQdThw8aUAqEjlhkpjR6CpDFTRtA7HcEGcEOU%2Bl5zF1b4uQiHMsqNaZcRI47hQzN%2B4ua2wdi%2BJ%2FhKrZwyaZQMYg9kZnzVI%2FhJkPc2gLTr2vWtl9FTpVQiMP1iYeuWLy99YvUYHLPcc4HbBtIrKBsjx2hdHgprUT3cDFyJnNdm5CDGRC1RKonIY2y3woJBecJ89Rp%2BNBNio87l93htdPgAKRcEp1qekkgVnyebt8R%2B9JlumKQK0B2fZ2j4yMvf5SwMt1kLReYibP7PwAyjbMA8G2DsLjtw3zPjCCfhnh5KQVhy9DfXwzJLcX2fsXtzO%2BqS8Pgo1t7gGRfqSjKq0%2FhMkrIsUprPzhHQk7EmJyRMUkWEYGQlIFlMP03NfNMJL%2BeqGPAo%2FeKOsvTrv9lfOi4L2nmL2roqCPo%2BtpzV3bbD5lD2HCdU6h4E1VRaxgVVP0tq5pZpsUC1Bu82UmC0HmmGJiP5%2BQZZqzO3FeGgy4cTndTcW72sanOzYANJ4a58aoYqcnYOX1RmmYcXN4ZB2LPVPBTjfOmYNiPr0zlB62NlcLuK0WELL83YybbekrUjDloLC%2FBjqkAXbKdhDxZXIRpEwcHoUaXh9TqDCcPDgXkuXpRDt5YSlq5loQV8gtCST91%2B8yp9IrcKo2ciMeNTTIK5O4WhXX1dYfvrNF9r3nrCwu5wH5%2Bk%2FDyITOzNN1lBXapZMaJl0oKSLvb0e3dvAHG8s8Cuu9trlFncbhwQUdGQLEiqGHsedFQKz1coVkYIUCcVsxdENe6XD2RhgEWjAOgrPhodNwB8EaTPJ%2F&X-Amz-Signature=ad70b447493af19e8c42429465ef8eec800f980c1b655e4a5308750fe81a67ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
