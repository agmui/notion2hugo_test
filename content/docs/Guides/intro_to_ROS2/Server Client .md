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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526WIIJ5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCEM8amIdkTzWN9WwE5fQy8A8rB3SgJutzLxAt9XEUqvgIgIsVVD2qaESOAgNs00ZO2gm8ZWgpyE1tP6n1%2FplLs%2B9UqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnlP6N6JDkeERQiTSrcA92u5vDo4Y8498qhIlDwg%2FSdAg5upI0SYtDuSHJbseqqX%2Bgyn%2FpuojDRXO%2FC37tr6SsnPELc0m%2BNzzfexGyPprmRBeJ3%2FfzAfSS0PEKlZeF5A%2Bo7I5jaYd2hD9osiANAiHrZrccjEnk9PnlmtW0BipSy7tQTfg4hG7gbfeWNFRR0a3vbpM4VyuXCryuU9k7mA2wVOurPCw6Fc%2BY160Nvn8MTYz1FtYd4pUb3OkvD%2Bm%2FybqaZjw8zUKHtxpRe%2BRH%2Brs1qdCBzhGXvgf3ZvUOkT5H0fBQukWSFHb68OaiqA4ggK78SRpFo5V%2Budadp%2FUgLNkMohbYg3lqKIzHCbG29KKdDI%2BT2UEDDTAby5ondGyXM46Q%2F95P4JkT5Euai7a69P9PeIjZMKSIAMrXd8%2BxcWhoBUBAr%2B0c4%2BDaUxRI9Ukd5tjiiSWzE8Bz%2BWhOhcxP2RxXR%2Fxch3p%2BQZJloSGiqQVcfrCUQhszF%2FbNYLjJqXZxuC2jBzHA10D8ByIHwB7vCfFsSPSkDGNx6qoJydnFChYL45PePp5keMzScqDKJfZQUuT3RiZc%2Ft567OkHLa8eegLJZK0J%2Flr2Uc9HxEWaR%2B8E5Rwa9%2FQoADas74kPRb6J2ZKu9CX9G9o1WkFwbMILgxr4GOqUBQx3aSy0XV3Bol3bFAVqZL2peDbAuA8ZuVgtYdBE8cjTamY3OxZip%2BEWt2uhFy%2Bc1FHwPRHqoa%2Fobmx1EuSQO9VQ6PUmnOT93yCJzZtOBEoqUgsUCSVslv0NKNZDVF9%2FGD7qXKevbsRl4HiAJEyCrpHs1lvfi%2B4jcJT72aBBDNZM8hzTwfKDhiIIK4welIexW%2BTVTuOQ3Zju1HYWt2kHRdq0imlRD&X-Amz-Signature=bda7156ed68a3f8921ada45201817e843c38692f19b2b3f261af14a141c8878f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526WIIJ5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCEM8amIdkTzWN9WwE5fQy8A8rB3SgJutzLxAt9XEUqvgIgIsVVD2qaESOAgNs00ZO2gm8ZWgpyE1tP6n1%2FplLs%2B9UqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnlP6N6JDkeERQiTSrcA92u5vDo4Y8498qhIlDwg%2FSdAg5upI0SYtDuSHJbseqqX%2Bgyn%2FpuojDRXO%2FC37tr6SsnPELc0m%2BNzzfexGyPprmRBeJ3%2FfzAfSS0PEKlZeF5A%2Bo7I5jaYd2hD9osiANAiHrZrccjEnk9PnlmtW0BipSy7tQTfg4hG7gbfeWNFRR0a3vbpM4VyuXCryuU9k7mA2wVOurPCw6Fc%2BY160Nvn8MTYz1FtYd4pUb3OkvD%2Bm%2FybqaZjw8zUKHtxpRe%2BRH%2Brs1qdCBzhGXvgf3ZvUOkT5H0fBQukWSFHb68OaiqA4ggK78SRpFo5V%2Budadp%2FUgLNkMohbYg3lqKIzHCbG29KKdDI%2BT2UEDDTAby5ondGyXM46Q%2F95P4JkT5Euai7a69P9PeIjZMKSIAMrXd8%2BxcWhoBUBAr%2B0c4%2BDaUxRI9Ukd5tjiiSWzE8Bz%2BWhOhcxP2RxXR%2Fxch3p%2BQZJloSGiqQVcfrCUQhszF%2FbNYLjJqXZxuC2jBzHA10D8ByIHwB7vCfFsSPSkDGNx6qoJydnFChYL45PePp5keMzScqDKJfZQUuT3RiZc%2Ft567OkHLa8eegLJZK0J%2Flr2Uc9HxEWaR%2B8E5Rwa9%2FQoADas74kPRb6J2ZKu9CX9G9o1WkFwbMILgxr4GOqUBQx3aSy0XV3Bol3bFAVqZL2peDbAuA8ZuVgtYdBE8cjTamY3OxZip%2BEWt2uhFy%2Bc1FHwPRHqoa%2Fobmx1EuSQO9VQ6PUmnOT93yCJzZtOBEoqUgsUCSVslv0NKNZDVF9%2FGD7qXKevbsRl4HiAJEyCrpHs1lvfi%2B4jcJT72aBBDNZM8hzTwfKDhiIIK4welIexW%2BTVTuOQ3Zju1HYWt2kHRdq0imlRD&X-Amz-Signature=d1c56fd855913d48e78363ecadc4df41a73fd200ef651abbdd4fb5171e3729ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526WIIJ5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCEM8amIdkTzWN9WwE5fQy8A8rB3SgJutzLxAt9XEUqvgIgIsVVD2qaESOAgNs00ZO2gm8ZWgpyE1tP6n1%2FplLs%2B9UqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnlP6N6JDkeERQiTSrcA92u5vDo4Y8498qhIlDwg%2FSdAg5upI0SYtDuSHJbseqqX%2Bgyn%2FpuojDRXO%2FC37tr6SsnPELc0m%2BNzzfexGyPprmRBeJ3%2FfzAfSS0PEKlZeF5A%2Bo7I5jaYd2hD9osiANAiHrZrccjEnk9PnlmtW0BipSy7tQTfg4hG7gbfeWNFRR0a3vbpM4VyuXCryuU9k7mA2wVOurPCw6Fc%2BY160Nvn8MTYz1FtYd4pUb3OkvD%2Bm%2FybqaZjw8zUKHtxpRe%2BRH%2Brs1qdCBzhGXvgf3ZvUOkT5H0fBQukWSFHb68OaiqA4ggK78SRpFo5V%2Budadp%2FUgLNkMohbYg3lqKIzHCbG29KKdDI%2BT2UEDDTAby5ondGyXM46Q%2F95P4JkT5Euai7a69P9PeIjZMKSIAMrXd8%2BxcWhoBUBAr%2B0c4%2BDaUxRI9Ukd5tjiiSWzE8Bz%2BWhOhcxP2RxXR%2Fxch3p%2BQZJloSGiqQVcfrCUQhszF%2FbNYLjJqXZxuC2jBzHA10D8ByIHwB7vCfFsSPSkDGNx6qoJydnFChYL45PePp5keMzScqDKJfZQUuT3RiZc%2Ft567OkHLa8eegLJZK0J%2Flr2Uc9HxEWaR%2B8E5Rwa9%2FQoADas74kPRb6J2ZKu9CX9G9o1WkFwbMILgxr4GOqUBQx3aSy0XV3Bol3bFAVqZL2peDbAuA8ZuVgtYdBE8cjTamY3OxZip%2BEWt2uhFy%2Bc1FHwPRHqoa%2Fobmx1EuSQO9VQ6PUmnOT93yCJzZtOBEoqUgsUCSVslv0NKNZDVF9%2FGD7qXKevbsRl4HiAJEyCrpHs1lvfi%2B4jcJT72aBBDNZM8hzTwfKDhiIIK4welIexW%2BTVTuOQ3Zju1HYWt2kHRdq0imlRD&X-Amz-Signature=0a91050b3741297eb5a1ef12bcd7a4b48640dca4c7bc5db2394f8e7cc2d20bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526WIIJ5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCEM8amIdkTzWN9WwE5fQy8A8rB3SgJutzLxAt9XEUqvgIgIsVVD2qaESOAgNs00ZO2gm8ZWgpyE1tP6n1%2FplLs%2B9UqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnlP6N6JDkeERQiTSrcA92u5vDo4Y8498qhIlDwg%2FSdAg5upI0SYtDuSHJbseqqX%2Bgyn%2FpuojDRXO%2FC37tr6SsnPELc0m%2BNzzfexGyPprmRBeJ3%2FfzAfSS0PEKlZeF5A%2Bo7I5jaYd2hD9osiANAiHrZrccjEnk9PnlmtW0BipSy7tQTfg4hG7gbfeWNFRR0a3vbpM4VyuXCryuU9k7mA2wVOurPCw6Fc%2BY160Nvn8MTYz1FtYd4pUb3OkvD%2Bm%2FybqaZjw8zUKHtxpRe%2BRH%2Brs1qdCBzhGXvgf3ZvUOkT5H0fBQukWSFHb68OaiqA4ggK78SRpFo5V%2Budadp%2FUgLNkMohbYg3lqKIzHCbG29KKdDI%2BT2UEDDTAby5ondGyXM46Q%2F95P4JkT5Euai7a69P9PeIjZMKSIAMrXd8%2BxcWhoBUBAr%2B0c4%2BDaUxRI9Ukd5tjiiSWzE8Bz%2BWhOhcxP2RxXR%2Fxch3p%2BQZJloSGiqQVcfrCUQhszF%2FbNYLjJqXZxuC2jBzHA10D8ByIHwB7vCfFsSPSkDGNx6qoJydnFChYL45PePp5keMzScqDKJfZQUuT3RiZc%2Ft567OkHLa8eegLJZK0J%2Flr2Uc9HxEWaR%2B8E5Rwa9%2FQoADas74kPRb6J2ZKu9CX9G9o1WkFwbMILgxr4GOqUBQx3aSy0XV3Bol3bFAVqZL2peDbAuA8ZuVgtYdBE8cjTamY3OxZip%2BEWt2uhFy%2Bc1FHwPRHqoa%2Fobmx1EuSQO9VQ6PUmnOT93yCJzZtOBEoqUgsUCSVslv0NKNZDVF9%2FGD7qXKevbsRl4HiAJEyCrpHs1lvfi%2B4jcJT72aBBDNZM8hzTwfKDhiIIK4welIexW%2BTVTuOQ3Zju1HYWt2kHRdq0imlRD&X-Amz-Signature=58000132844543778de8e35db97429a3d244baa095573958d208e8f16dfaaa22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526WIIJ5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCEM8amIdkTzWN9WwE5fQy8A8rB3SgJutzLxAt9XEUqvgIgIsVVD2qaESOAgNs00ZO2gm8ZWgpyE1tP6n1%2FplLs%2B9UqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnlP6N6JDkeERQiTSrcA92u5vDo4Y8498qhIlDwg%2FSdAg5upI0SYtDuSHJbseqqX%2Bgyn%2FpuojDRXO%2FC37tr6SsnPELc0m%2BNzzfexGyPprmRBeJ3%2FfzAfSS0PEKlZeF5A%2Bo7I5jaYd2hD9osiANAiHrZrccjEnk9PnlmtW0BipSy7tQTfg4hG7gbfeWNFRR0a3vbpM4VyuXCryuU9k7mA2wVOurPCw6Fc%2BY160Nvn8MTYz1FtYd4pUb3OkvD%2Bm%2FybqaZjw8zUKHtxpRe%2BRH%2Brs1qdCBzhGXvgf3ZvUOkT5H0fBQukWSFHb68OaiqA4ggK78SRpFo5V%2Budadp%2FUgLNkMohbYg3lqKIzHCbG29KKdDI%2BT2UEDDTAby5ondGyXM46Q%2F95P4JkT5Euai7a69P9PeIjZMKSIAMrXd8%2BxcWhoBUBAr%2B0c4%2BDaUxRI9Ukd5tjiiSWzE8Bz%2BWhOhcxP2RxXR%2Fxch3p%2BQZJloSGiqQVcfrCUQhszF%2FbNYLjJqXZxuC2jBzHA10D8ByIHwB7vCfFsSPSkDGNx6qoJydnFChYL45PePp5keMzScqDKJfZQUuT3RiZc%2Ft567OkHLa8eegLJZK0J%2Flr2Uc9HxEWaR%2B8E5Rwa9%2FQoADas74kPRb6J2ZKu9CX9G9o1WkFwbMILgxr4GOqUBQx3aSy0XV3Bol3bFAVqZL2peDbAuA8ZuVgtYdBE8cjTamY3OxZip%2BEWt2uhFy%2Bc1FHwPRHqoa%2Fobmx1EuSQO9VQ6PUmnOT93yCJzZtOBEoqUgsUCSVslv0NKNZDVF9%2FGD7qXKevbsRl4HiAJEyCrpHs1lvfi%2B4jcJT72aBBDNZM8hzTwfKDhiIIK4welIexW%2BTVTuOQ3Zju1HYWt2kHRdq0imlRD&X-Amz-Signature=e784945ab9de7874311c2da31e0bd25f22ef9a7a4f7a04661ca1966167b015df&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
