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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DP35JKW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsSReIBqkT7dydr8dJ4tvjTo4915IbcMJ7QuWhH8alQAiEA3xCLRxTbek5c5GTVAOpn8PJcSE%2FE%2FFjTmdKg%2FCwaMsQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGUeERbHVcFkyfHwkCrcAxPCOU2Dgf1aT1XcklfipCFpToK9x5SPhDclX4ctNkjUJzTWONrKucT5JNfFHdJ4Z5koEAabk5NFOQYvB6JblzQPuK%2FeHW%2FRkyExVKf94t%2FIUMW4ycICZ4odDjHjJGw7insy52rZzfvi39BkQq3BRo1rslCgYqvr9cmYbUjBb7rTlzCyTDDVuvIF7DChmp6KbfZ7dyu%2BukjmN2PQt2tt1CrXMOJQDLRo%2Bf4jCVnXBtXLNnCQyYAFjXc9mCF1cKaffHp%2F9K03%2BrJeCAslX38SyB7j19PZHYkOLJd2yYYNb7RtLoNXpDoP3jFBouLjbXmRRXqIB8MaHuHJz%2BERFSOBtClGeMugUbYLO51DA80S26Ecqwf7TQIMZL%2Flu0xyiczjuExvuVHEqekYMIB6cXUOkKEazBMplUOhyacrVlnF2UROP4gWIC9nOk8P92pMpHs8SraBc5DA%2BVtkxYfg%2FxcLvAd9ZyimPheijy%2B2yga5RVdgcPjVolz6mMrL42VoykVB593mbDYU5b%2BUWK%2BzP%2Bx8m52ok%2Fd5%2FzrG3wVtFRtf3uwlNjRwpiftMNZ3IBSok0JroMbka6CMpSqGrEyFlCVvoPXOTNBburi5FZpLRLoBAFMQILubsyJSvFOYrsJ%2BMMj6j8IGOqUB%2BkSltOxd5Ybcr3tnGsYy6F3ep%2FwCyJehBOiipjPhlscxPoV2sK4%2BHPcmmy6hJRaz5%2BJv6iLziRrPAnoxrkTvnKCHL27m8Q8yTipUueum3AG4C9Kf0Ik7QYGKfHj%2FbS0cU2vmquIk9YWw8ZeL6N6QyRKtbD9rPqfWM53y37r3f3lVL8Frf1cmofI9AhmIkA%2FWKxmxj9CWAL7BYNh2KQv9kXqFhUY%2F&X-Amz-Signature=3a883fbb4afe7916a7d0abfc78e13f3a76bcc3e5d26257d815e5b576b68bd140&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DP35JKW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsSReIBqkT7dydr8dJ4tvjTo4915IbcMJ7QuWhH8alQAiEA3xCLRxTbek5c5GTVAOpn8PJcSE%2FE%2FFjTmdKg%2FCwaMsQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGUeERbHVcFkyfHwkCrcAxPCOU2Dgf1aT1XcklfipCFpToK9x5SPhDclX4ctNkjUJzTWONrKucT5JNfFHdJ4Z5koEAabk5NFOQYvB6JblzQPuK%2FeHW%2FRkyExVKf94t%2FIUMW4ycICZ4odDjHjJGw7insy52rZzfvi39BkQq3BRo1rslCgYqvr9cmYbUjBb7rTlzCyTDDVuvIF7DChmp6KbfZ7dyu%2BukjmN2PQt2tt1CrXMOJQDLRo%2Bf4jCVnXBtXLNnCQyYAFjXc9mCF1cKaffHp%2F9K03%2BrJeCAslX38SyB7j19PZHYkOLJd2yYYNb7RtLoNXpDoP3jFBouLjbXmRRXqIB8MaHuHJz%2BERFSOBtClGeMugUbYLO51DA80S26Ecqwf7TQIMZL%2Flu0xyiczjuExvuVHEqekYMIB6cXUOkKEazBMplUOhyacrVlnF2UROP4gWIC9nOk8P92pMpHs8SraBc5DA%2BVtkxYfg%2FxcLvAd9ZyimPheijy%2B2yga5RVdgcPjVolz6mMrL42VoykVB593mbDYU5b%2BUWK%2BzP%2Bx8m52ok%2Fd5%2FzrG3wVtFRtf3uwlNjRwpiftMNZ3IBSok0JroMbka6CMpSqGrEyFlCVvoPXOTNBburi5FZpLRLoBAFMQILubsyJSvFOYrsJ%2BMMj6j8IGOqUB%2BkSltOxd5Ybcr3tnGsYy6F3ep%2FwCyJehBOiipjPhlscxPoV2sK4%2BHPcmmy6hJRaz5%2BJv6iLziRrPAnoxrkTvnKCHL27m8Q8yTipUueum3AG4C9Kf0Ik7QYGKfHj%2FbS0cU2vmquIk9YWw8ZeL6N6QyRKtbD9rPqfWM53y37r3f3lVL8Frf1cmofI9AhmIkA%2FWKxmxj9CWAL7BYNh2KQv9kXqFhUY%2F&X-Amz-Signature=07570ae7b0297fb04c6931e538f20f731b046a0ebb859cb729ab6a8cdf31a9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DP35JKW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsSReIBqkT7dydr8dJ4tvjTo4915IbcMJ7QuWhH8alQAiEA3xCLRxTbek5c5GTVAOpn8PJcSE%2FE%2FFjTmdKg%2FCwaMsQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGUeERbHVcFkyfHwkCrcAxPCOU2Dgf1aT1XcklfipCFpToK9x5SPhDclX4ctNkjUJzTWONrKucT5JNfFHdJ4Z5koEAabk5NFOQYvB6JblzQPuK%2FeHW%2FRkyExVKf94t%2FIUMW4ycICZ4odDjHjJGw7insy52rZzfvi39BkQq3BRo1rslCgYqvr9cmYbUjBb7rTlzCyTDDVuvIF7DChmp6KbfZ7dyu%2BukjmN2PQt2tt1CrXMOJQDLRo%2Bf4jCVnXBtXLNnCQyYAFjXc9mCF1cKaffHp%2F9K03%2BrJeCAslX38SyB7j19PZHYkOLJd2yYYNb7RtLoNXpDoP3jFBouLjbXmRRXqIB8MaHuHJz%2BERFSOBtClGeMugUbYLO51DA80S26Ecqwf7TQIMZL%2Flu0xyiczjuExvuVHEqekYMIB6cXUOkKEazBMplUOhyacrVlnF2UROP4gWIC9nOk8P92pMpHs8SraBc5DA%2BVtkxYfg%2FxcLvAd9ZyimPheijy%2B2yga5RVdgcPjVolz6mMrL42VoykVB593mbDYU5b%2BUWK%2BzP%2Bx8m52ok%2Fd5%2FzrG3wVtFRtf3uwlNjRwpiftMNZ3IBSok0JroMbka6CMpSqGrEyFlCVvoPXOTNBburi5FZpLRLoBAFMQILubsyJSvFOYrsJ%2BMMj6j8IGOqUB%2BkSltOxd5Ybcr3tnGsYy6F3ep%2FwCyJehBOiipjPhlscxPoV2sK4%2BHPcmmy6hJRaz5%2BJv6iLziRrPAnoxrkTvnKCHL27m8Q8yTipUueum3AG4C9Kf0Ik7QYGKfHj%2FbS0cU2vmquIk9YWw8ZeL6N6QyRKtbD9rPqfWM53y37r3f3lVL8Frf1cmofI9AhmIkA%2FWKxmxj9CWAL7BYNh2KQv9kXqFhUY%2F&X-Amz-Signature=a46c1234fe9880a84b0f1c64b34dbace993ced51c0567102aff397f8905498ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DP35JKW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsSReIBqkT7dydr8dJ4tvjTo4915IbcMJ7QuWhH8alQAiEA3xCLRxTbek5c5GTVAOpn8PJcSE%2FE%2FFjTmdKg%2FCwaMsQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGUeERbHVcFkyfHwkCrcAxPCOU2Dgf1aT1XcklfipCFpToK9x5SPhDclX4ctNkjUJzTWONrKucT5JNfFHdJ4Z5koEAabk5NFOQYvB6JblzQPuK%2FeHW%2FRkyExVKf94t%2FIUMW4ycICZ4odDjHjJGw7insy52rZzfvi39BkQq3BRo1rslCgYqvr9cmYbUjBb7rTlzCyTDDVuvIF7DChmp6KbfZ7dyu%2BukjmN2PQt2tt1CrXMOJQDLRo%2Bf4jCVnXBtXLNnCQyYAFjXc9mCF1cKaffHp%2F9K03%2BrJeCAslX38SyB7j19PZHYkOLJd2yYYNb7RtLoNXpDoP3jFBouLjbXmRRXqIB8MaHuHJz%2BERFSOBtClGeMugUbYLO51DA80S26Ecqwf7TQIMZL%2Flu0xyiczjuExvuVHEqekYMIB6cXUOkKEazBMplUOhyacrVlnF2UROP4gWIC9nOk8P92pMpHs8SraBc5DA%2BVtkxYfg%2FxcLvAd9ZyimPheijy%2B2yga5RVdgcPjVolz6mMrL42VoykVB593mbDYU5b%2BUWK%2BzP%2Bx8m52ok%2Fd5%2FzrG3wVtFRtf3uwlNjRwpiftMNZ3IBSok0JroMbka6CMpSqGrEyFlCVvoPXOTNBburi5FZpLRLoBAFMQILubsyJSvFOYrsJ%2BMMj6j8IGOqUB%2BkSltOxd5Ybcr3tnGsYy6F3ep%2FwCyJehBOiipjPhlscxPoV2sK4%2BHPcmmy6hJRaz5%2BJv6iLziRrPAnoxrkTvnKCHL27m8Q8yTipUueum3AG4C9Kf0Ik7QYGKfHj%2FbS0cU2vmquIk9YWw8ZeL6N6QyRKtbD9rPqfWM53y37r3f3lVL8Frf1cmofI9AhmIkA%2FWKxmxj9CWAL7BYNh2KQv9kXqFhUY%2F&X-Amz-Signature=726f8a4601c6350f716424f701c429849df3162bbd20cf2bf17cba6c7f2cc76e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DP35JKW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsSReIBqkT7dydr8dJ4tvjTo4915IbcMJ7QuWhH8alQAiEA3xCLRxTbek5c5GTVAOpn8PJcSE%2FE%2FFjTmdKg%2FCwaMsQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGUeERbHVcFkyfHwkCrcAxPCOU2Dgf1aT1XcklfipCFpToK9x5SPhDclX4ctNkjUJzTWONrKucT5JNfFHdJ4Z5koEAabk5NFOQYvB6JblzQPuK%2FeHW%2FRkyExVKf94t%2FIUMW4ycICZ4odDjHjJGw7insy52rZzfvi39BkQq3BRo1rslCgYqvr9cmYbUjBb7rTlzCyTDDVuvIF7DChmp6KbfZ7dyu%2BukjmN2PQt2tt1CrXMOJQDLRo%2Bf4jCVnXBtXLNnCQyYAFjXc9mCF1cKaffHp%2F9K03%2BrJeCAslX38SyB7j19PZHYkOLJd2yYYNb7RtLoNXpDoP3jFBouLjbXmRRXqIB8MaHuHJz%2BERFSOBtClGeMugUbYLO51DA80S26Ecqwf7TQIMZL%2Flu0xyiczjuExvuVHEqekYMIB6cXUOkKEazBMplUOhyacrVlnF2UROP4gWIC9nOk8P92pMpHs8SraBc5DA%2BVtkxYfg%2FxcLvAd9ZyimPheijy%2B2yga5RVdgcPjVolz6mMrL42VoykVB593mbDYU5b%2BUWK%2BzP%2Bx8m52ok%2Fd5%2FzrG3wVtFRtf3uwlNjRwpiftMNZ3IBSok0JroMbka6CMpSqGrEyFlCVvoPXOTNBburi5FZpLRLoBAFMQILubsyJSvFOYrsJ%2BMMj6j8IGOqUB%2BkSltOxd5Ybcr3tnGsYy6F3ep%2FwCyJehBOiipjPhlscxPoV2sK4%2BHPcmmy6hJRaz5%2BJv6iLziRrPAnoxrkTvnKCHL27m8Q8yTipUueum3AG4C9Kf0Ik7QYGKfHj%2FbS0cU2vmquIk9YWw8ZeL6N6QyRKtbD9rPqfWM53y37r3f3lVL8Frf1cmofI9AhmIkA%2FWKxmxj9CWAL7BYNh2KQv9kXqFhUY%2F&X-Amz-Signature=6103d22df5fae035cb7db81c8870b74c5012c5696462c4f3219079453ac5fb7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
