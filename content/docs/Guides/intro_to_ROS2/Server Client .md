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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPIBT7G%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCwC1uU5MSkiP3R7lMY8CWetT%2Bf6bmAsYrdSTp5HpT2OQIgF9ZjfX7hujoGR6IQCIpOB1nGABhc8zmUL%2F2%2FkOyiDCsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkCg%2BDF9xzppcrnnyrcA%2FubClfZMn%2Bypmnk5kI5BjS7AlGnSNrZ4jcsC0%2B0bqJpWcl2NOWMDaUMdLRu0UimKZvg1rj8fl%2B%2FrEPNBuH2tCqJd3YF9hm6JHzJWqL7xUcWMybA%2F7A979%2FccuLhoT7bGYfkudgkvA6AwsjaZE7zq%2F7Ckhqw7xjjI%2B1q33JGYB1YnQWCbsnemiIZYBlWSTBWgK3Olsfsn1rAQdI8wpOpkTOjWOUolAkPYvTuEglwIdmthZApfgHnb7KH98yrMRIwYZWLtJftUwBSJv3RJShvmfeFzbCjGzozmsyZQZe0fSolsVcUZ4n2tCsFWVIWclhsTaXZg89E%2BGE6KraqTIXyNCRt83hQME2iPBvt2NAfMPDYaUOh8faSRzm9QZItHtFd5OeJ6r%2FJVhmcgmtEHTNASp6wzeDWai%2FRH0smrqtmJi7uxjDnlqg1xEhuYD%2B5SM%2FJg1YEQ5kzgwD%2F%2FC8UKBSqoCGdlyTkb1itYkWF9YvRfzb5nA1TR62PJ7kwN%2BvJ00Ikjsgi%2Buzprw%2FfNOLPcrmTpBgTDcTgWybRz%2Fw7qXITbiVpFd%2B5RA4RmEp8Wpzjie%2FJt%2FH82TjEiHExPW4HY4Qz8TA7j48gT1fEL3QWqbiJkRsZlLoZ%2FRv7PpneDANAMIa0xMgGOqUBqGEK77D8QiN5omEH%2FO2oCjru67G2guUFI9H8jJj4Q6w2R7kCBevnGqnp%2BFUfWUElhKR%2FiYD0znFf9MlwOWFxV57bUPG%2F0eHHb6%2Bhx61LFAHCLNuSpTw%2FJi4CrYonra0sWXfEH3uM3s45sG2QKrY%2FJHe0HkSmetgb%2BTxXU3Sn8BbMO5ATbYrbnHxKNPjZv%2F2VoaOa8HZfaP2lk1oZq12NT9ar6DN4&X-Amz-Signature=0d383686d29503f56e166a49d916a901b00b87b50cbdd24d396ba17e1c70efff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPIBT7G%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCwC1uU5MSkiP3R7lMY8CWetT%2Bf6bmAsYrdSTp5HpT2OQIgF9ZjfX7hujoGR6IQCIpOB1nGABhc8zmUL%2F2%2FkOyiDCsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkCg%2BDF9xzppcrnnyrcA%2FubClfZMn%2Bypmnk5kI5BjS7AlGnSNrZ4jcsC0%2B0bqJpWcl2NOWMDaUMdLRu0UimKZvg1rj8fl%2B%2FrEPNBuH2tCqJd3YF9hm6JHzJWqL7xUcWMybA%2F7A979%2FccuLhoT7bGYfkudgkvA6AwsjaZE7zq%2F7Ckhqw7xjjI%2B1q33JGYB1YnQWCbsnemiIZYBlWSTBWgK3Olsfsn1rAQdI8wpOpkTOjWOUolAkPYvTuEglwIdmthZApfgHnb7KH98yrMRIwYZWLtJftUwBSJv3RJShvmfeFzbCjGzozmsyZQZe0fSolsVcUZ4n2tCsFWVIWclhsTaXZg89E%2BGE6KraqTIXyNCRt83hQME2iPBvt2NAfMPDYaUOh8faSRzm9QZItHtFd5OeJ6r%2FJVhmcgmtEHTNASp6wzeDWai%2FRH0smrqtmJi7uxjDnlqg1xEhuYD%2B5SM%2FJg1YEQ5kzgwD%2F%2FC8UKBSqoCGdlyTkb1itYkWF9YvRfzb5nA1TR62PJ7kwN%2BvJ00Ikjsgi%2Buzprw%2FfNOLPcrmTpBgTDcTgWybRz%2Fw7qXITbiVpFd%2B5RA4RmEp8Wpzjie%2FJt%2FH82TjEiHExPW4HY4Qz8TA7j48gT1fEL3QWqbiJkRsZlLoZ%2FRv7PpneDANAMIa0xMgGOqUBqGEK77D8QiN5omEH%2FO2oCjru67G2guUFI9H8jJj4Q6w2R7kCBevnGqnp%2BFUfWUElhKR%2FiYD0znFf9MlwOWFxV57bUPG%2F0eHHb6%2Bhx61LFAHCLNuSpTw%2FJi4CrYonra0sWXfEH3uM3s45sG2QKrY%2FJHe0HkSmetgb%2BTxXU3Sn8BbMO5ATbYrbnHxKNPjZv%2F2VoaOa8HZfaP2lk1oZq12NT9ar6DN4&X-Amz-Signature=1a171dcb7271a469777d862cfc9c3d78ae0090dbfbeb9f0549e03308d9c0cdd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPIBT7G%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCwC1uU5MSkiP3R7lMY8CWetT%2Bf6bmAsYrdSTp5HpT2OQIgF9ZjfX7hujoGR6IQCIpOB1nGABhc8zmUL%2F2%2FkOyiDCsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkCg%2BDF9xzppcrnnyrcA%2FubClfZMn%2Bypmnk5kI5BjS7AlGnSNrZ4jcsC0%2B0bqJpWcl2NOWMDaUMdLRu0UimKZvg1rj8fl%2B%2FrEPNBuH2tCqJd3YF9hm6JHzJWqL7xUcWMybA%2F7A979%2FccuLhoT7bGYfkudgkvA6AwsjaZE7zq%2F7Ckhqw7xjjI%2B1q33JGYB1YnQWCbsnemiIZYBlWSTBWgK3Olsfsn1rAQdI8wpOpkTOjWOUolAkPYvTuEglwIdmthZApfgHnb7KH98yrMRIwYZWLtJftUwBSJv3RJShvmfeFzbCjGzozmsyZQZe0fSolsVcUZ4n2tCsFWVIWclhsTaXZg89E%2BGE6KraqTIXyNCRt83hQME2iPBvt2NAfMPDYaUOh8faSRzm9QZItHtFd5OeJ6r%2FJVhmcgmtEHTNASp6wzeDWai%2FRH0smrqtmJi7uxjDnlqg1xEhuYD%2B5SM%2FJg1YEQ5kzgwD%2F%2FC8UKBSqoCGdlyTkb1itYkWF9YvRfzb5nA1TR62PJ7kwN%2BvJ00Ikjsgi%2Buzprw%2FfNOLPcrmTpBgTDcTgWybRz%2Fw7qXITbiVpFd%2B5RA4RmEp8Wpzjie%2FJt%2FH82TjEiHExPW4HY4Qz8TA7j48gT1fEL3QWqbiJkRsZlLoZ%2FRv7PpneDANAMIa0xMgGOqUBqGEK77D8QiN5omEH%2FO2oCjru67G2guUFI9H8jJj4Q6w2R7kCBevnGqnp%2BFUfWUElhKR%2FiYD0znFf9MlwOWFxV57bUPG%2F0eHHb6%2Bhx61LFAHCLNuSpTw%2FJi4CrYonra0sWXfEH3uM3s45sG2QKrY%2FJHe0HkSmetgb%2BTxXU3Sn8BbMO5ATbYrbnHxKNPjZv%2F2VoaOa8HZfaP2lk1oZq12NT9ar6DN4&X-Amz-Signature=f22004515703319ce1ccecc001b0a5798c533a61cb11b3751ffadac79affaa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPIBT7G%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCwC1uU5MSkiP3R7lMY8CWetT%2Bf6bmAsYrdSTp5HpT2OQIgF9ZjfX7hujoGR6IQCIpOB1nGABhc8zmUL%2F2%2FkOyiDCsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkCg%2BDF9xzppcrnnyrcA%2FubClfZMn%2Bypmnk5kI5BjS7AlGnSNrZ4jcsC0%2B0bqJpWcl2NOWMDaUMdLRu0UimKZvg1rj8fl%2B%2FrEPNBuH2tCqJd3YF9hm6JHzJWqL7xUcWMybA%2F7A979%2FccuLhoT7bGYfkudgkvA6AwsjaZE7zq%2F7Ckhqw7xjjI%2B1q33JGYB1YnQWCbsnemiIZYBlWSTBWgK3Olsfsn1rAQdI8wpOpkTOjWOUolAkPYvTuEglwIdmthZApfgHnb7KH98yrMRIwYZWLtJftUwBSJv3RJShvmfeFzbCjGzozmsyZQZe0fSolsVcUZ4n2tCsFWVIWclhsTaXZg89E%2BGE6KraqTIXyNCRt83hQME2iPBvt2NAfMPDYaUOh8faSRzm9QZItHtFd5OeJ6r%2FJVhmcgmtEHTNASp6wzeDWai%2FRH0smrqtmJi7uxjDnlqg1xEhuYD%2B5SM%2FJg1YEQ5kzgwD%2F%2FC8UKBSqoCGdlyTkb1itYkWF9YvRfzb5nA1TR62PJ7kwN%2BvJ00Ikjsgi%2Buzprw%2FfNOLPcrmTpBgTDcTgWybRz%2Fw7qXITbiVpFd%2B5RA4RmEp8Wpzjie%2FJt%2FH82TjEiHExPW4HY4Qz8TA7j48gT1fEL3QWqbiJkRsZlLoZ%2FRv7PpneDANAMIa0xMgGOqUBqGEK77D8QiN5omEH%2FO2oCjru67G2guUFI9H8jJj4Q6w2R7kCBevnGqnp%2BFUfWUElhKR%2FiYD0znFf9MlwOWFxV57bUPG%2F0eHHb6%2Bhx61LFAHCLNuSpTw%2FJi4CrYonra0sWXfEH3uM3s45sG2QKrY%2FJHe0HkSmetgb%2BTxXU3Sn8BbMO5ATbYrbnHxKNPjZv%2F2VoaOa8HZfaP2lk1oZq12NT9ar6DN4&X-Amz-Signature=63a187c49c4a1b21b2d6b53bad5579aa7b916ff37abe9c0bb1952b4dc1470c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPIBT7G%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCwC1uU5MSkiP3R7lMY8CWetT%2Bf6bmAsYrdSTp5HpT2OQIgF9ZjfX7hujoGR6IQCIpOB1nGABhc8zmUL%2F2%2FkOyiDCsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkCg%2BDF9xzppcrnnyrcA%2FubClfZMn%2Bypmnk5kI5BjS7AlGnSNrZ4jcsC0%2B0bqJpWcl2NOWMDaUMdLRu0UimKZvg1rj8fl%2B%2FrEPNBuH2tCqJd3YF9hm6JHzJWqL7xUcWMybA%2F7A979%2FccuLhoT7bGYfkudgkvA6AwsjaZE7zq%2F7Ckhqw7xjjI%2B1q33JGYB1YnQWCbsnemiIZYBlWSTBWgK3Olsfsn1rAQdI8wpOpkTOjWOUolAkPYvTuEglwIdmthZApfgHnb7KH98yrMRIwYZWLtJftUwBSJv3RJShvmfeFzbCjGzozmsyZQZe0fSolsVcUZ4n2tCsFWVIWclhsTaXZg89E%2BGE6KraqTIXyNCRt83hQME2iPBvt2NAfMPDYaUOh8faSRzm9QZItHtFd5OeJ6r%2FJVhmcgmtEHTNASp6wzeDWai%2FRH0smrqtmJi7uxjDnlqg1xEhuYD%2B5SM%2FJg1YEQ5kzgwD%2F%2FC8UKBSqoCGdlyTkb1itYkWF9YvRfzb5nA1TR62PJ7kwN%2BvJ00Ikjsgi%2Buzprw%2FfNOLPcrmTpBgTDcTgWybRz%2Fw7qXITbiVpFd%2B5RA4RmEp8Wpzjie%2FJt%2FH82TjEiHExPW4HY4Qz8TA7j48gT1fEL3QWqbiJkRsZlLoZ%2FRv7PpneDANAMIa0xMgGOqUBqGEK77D8QiN5omEH%2FO2oCjru67G2guUFI9H8jJj4Q6w2R7kCBevnGqnp%2BFUfWUElhKR%2FiYD0znFf9MlwOWFxV57bUPG%2F0eHHb6%2Bhx61LFAHCLNuSpTw%2FJi4CrYonra0sWXfEH3uM3s45sG2QKrY%2FJHe0HkSmetgb%2BTxXU3Sn8BbMO5ATbYrbnHxKNPjZv%2F2VoaOa8HZfaP2lk1oZq12NT9ar6DN4&X-Amz-Signature=b6fd1c8bb5c99d4225831cecf8afc6ad1f86521473ceae788ee9dd46b49b4341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
