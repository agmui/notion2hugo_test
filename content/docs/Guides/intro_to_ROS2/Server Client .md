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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOHJNK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGDCmsp1rXbezLg%2Fomkvr775%2BV4FOY5y3kpsr5Ca8E7nAiBM7ToKPZdD1nfGlW0P7WVkMKaYGKqq4G%2FjH26Edz4miyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMH6i%2FenLQNdI1cSIMKtwDwHr3EgpfGqz78ETxLQFFAlbRLLLQ5p%2BUJuK7Fg2TuM8QBX1Njx21IZTDSTaI%2BF%2FcgVo1ivS8XdSVdf8W5fHqH474MGDucrre4CTKQLfBPovhDn6mq8%2Fq0hzrlwfKw%2FAVrYFvbY%2FYATpReLZTIOc2Oss3%2BnZeKsdYtLHWWCSjZRdZWfDkpqLOmF73P%2BA0LixffXaCtJqN9g8MAenXGO4en8QrWKvTkB7hGW7XsxENAgixtaWyDqiErc9VKbD7Z93BSgSbVE%2B8ZV9j8M4CAUHE2oeyXjIObd298Eqegpmu%2FMVjhGyhucalBpgySfPqpdVfPkwJc%2FZODD3EGo5fAcFPPwdByAjkq%2BzGbtXvuf7%2FUR4IUz0n0rQ1BMUdy6c7rjUIzl89%2BHMsDpCtRd0seQgyXrtQDdlO1OxFAHBRMgCbSV5bjLu9j93UJATGeTjTnlWpIZ6qHW2jMnHToh2O%2F2FOO8ss6Zlzt77IGVapDkoyf7pmBAQtvUxQPhryCvjiFTtcOsjgRVnaxGxL3uphkXIPSNUfkJ8m0fapzviNefV7Tr53UL7QS5nqMiNweopf56qaDNLpPs5OgFVeSLZDMZCwuzcCEhvqc1U3JysTxoauMZOyRMZRg%2BmE0AE7wggw8JmCxQY6pgHMPgW67JH8h7SwFJoltL4i%2FH8dMcqcj59cHKtDlihxLHvqY6hOB58unaKjkT4iPCULSVReDHrzQthKD4YGL5ATYfQsLWNYXxDuYuzAj5Kw10w6KLA8l9AFumAsY3p3LIJg3RIeMzpgNW4roJv%2Fe%2Bb5Qe30TdCXsFP68PjNa1KoDaI9nMKZdrNfsridSnIqB8EIvF0NQgby1sYJB%2FGGPPctOJMi%2B0VN&X-Amz-Signature=d13f7ddd09e939b6d91f9cdddcb4e4f3d0a167328668d38ed501bae2303d9b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOHJNK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGDCmsp1rXbezLg%2Fomkvr775%2BV4FOY5y3kpsr5Ca8E7nAiBM7ToKPZdD1nfGlW0P7WVkMKaYGKqq4G%2FjH26Edz4miyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMH6i%2FenLQNdI1cSIMKtwDwHr3EgpfGqz78ETxLQFFAlbRLLLQ5p%2BUJuK7Fg2TuM8QBX1Njx21IZTDSTaI%2BF%2FcgVo1ivS8XdSVdf8W5fHqH474MGDucrre4CTKQLfBPovhDn6mq8%2Fq0hzrlwfKw%2FAVrYFvbY%2FYATpReLZTIOc2Oss3%2BnZeKsdYtLHWWCSjZRdZWfDkpqLOmF73P%2BA0LixffXaCtJqN9g8MAenXGO4en8QrWKvTkB7hGW7XsxENAgixtaWyDqiErc9VKbD7Z93BSgSbVE%2B8ZV9j8M4CAUHE2oeyXjIObd298Eqegpmu%2FMVjhGyhucalBpgySfPqpdVfPkwJc%2FZODD3EGo5fAcFPPwdByAjkq%2BzGbtXvuf7%2FUR4IUz0n0rQ1BMUdy6c7rjUIzl89%2BHMsDpCtRd0seQgyXrtQDdlO1OxFAHBRMgCbSV5bjLu9j93UJATGeTjTnlWpIZ6qHW2jMnHToh2O%2F2FOO8ss6Zlzt77IGVapDkoyf7pmBAQtvUxQPhryCvjiFTtcOsjgRVnaxGxL3uphkXIPSNUfkJ8m0fapzviNefV7Tr53UL7QS5nqMiNweopf56qaDNLpPs5OgFVeSLZDMZCwuzcCEhvqc1U3JysTxoauMZOyRMZRg%2BmE0AE7wggw8JmCxQY6pgHMPgW67JH8h7SwFJoltL4i%2FH8dMcqcj59cHKtDlihxLHvqY6hOB58unaKjkT4iPCULSVReDHrzQthKD4YGL5ATYfQsLWNYXxDuYuzAj5Kw10w6KLA8l9AFumAsY3p3LIJg3RIeMzpgNW4roJv%2Fe%2Bb5Qe30TdCXsFP68PjNa1KoDaI9nMKZdrNfsridSnIqB8EIvF0NQgby1sYJB%2FGGPPctOJMi%2B0VN&X-Amz-Signature=b5d306feb283572d2b73e70534d3ea8c0a9adac426b58c904b29cdd0ef03a30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOHJNK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGDCmsp1rXbezLg%2Fomkvr775%2BV4FOY5y3kpsr5Ca8E7nAiBM7ToKPZdD1nfGlW0P7WVkMKaYGKqq4G%2FjH26Edz4miyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMH6i%2FenLQNdI1cSIMKtwDwHr3EgpfGqz78ETxLQFFAlbRLLLQ5p%2BUJuK7Fg2TuM8QBX1Njx21IZTDSTaI%2BF%2FcgVo1ivS8XdSVdf8W5fHqH474MGDucrre4CTKQLfBPovhDn6mq8%2Fq0hzrlwfKw%2FAVrYFvbY%2FYATpReLZTIOc2Oss3%2BnZeKsdYtLHWWCSjZRdZWfDkpqLOmF73P%2BA0LixffXaCtJqN9g8MAenXGO4en8QrWKvTkB7hGW7XsxENAgixtaWyDqiErc9VKbD7Z93BSgSbVE%2B8ZV9j8M4CAUHE2oeyXjIObd298Eqegpmu%2FMVjhGyhucalBpgySfPqpdVfPkwJc%2FZODD3EGo5fAcFPPwdByAjkq%2BzGbtXvuf7%2FUR4IUz0n0rQ1BMUdy6c7rjUIzl89%2BHMsDpCtRd0seQgyXrtQDdlO1OxFAHBRMgCbSV5bjLu9j93UJATGeTjTnlWpIZ6qHW2jMnHToh2O%2F2FOO8ss6Zlzt77IGVapDkoyf7pmBAQtvUxQPhryCvjiFTtcOsjgRVnaxGxL3uphkXIPSNUfkJ8m0fapzviNefV7Tr53UL7QS5nqMiNweopf56qaDNLpPs5OgFVeSLZDMZCwuzcCEhvqc1U3JysTxoauMZOyRMZRg%2BmE0AE7wggw8JmCxQY6pgHMPgW67JH8h7SwFJoltL4i%2FH8dMcqcj59cHKtDlihxLHvqY6hOB58unaKjkT4iPCULSVReDHrzQthKD4YGL5ATYfQsLWNYXxDuYuzAj5Kw10w6KLA8l9AFumAsY3p3LIJg3RIeMzpgNW4roJv%2Fe%2Bb5Qe30TdCXsFP68PjNa1KoDaI9nMKZdrNfsridSnIqB8EIvF0NQgby1sYJB%2FGGPPctOJMi%2B0VN&X-Amz-Signature=f0bcf4d148cbc499d41a7b1998747817c5f527682bb032bebca073062137df30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOHJNK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGDCmsp1rXbezLg%2Fomkvr775%2BV4FOY5y3kpsr5Ca8E7nAiBM7ToKPZdD1nfGlW0P7WVkMKaYGKqq4G%2FjH26Edz4miyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMH6i%2FenLQNdI1cSIMKtwDwHr3EgpfGqz78ETxLQFFAlbRLLLQ5p%2BUJuK7Fg2TuM8QBX1Njx21IZTDSTaI%2BF%2FcgVo1ivS8XdSVdf8W5fHqH474MGDucrre4CTKQLfBPovhDn6mq8%2Fq0hzrlwfKw%2FAVrYFvbY%2FYATpReLZTIOc2Oss3%2BnZeKsdYtLHWWCSjZRdZWfDkpqLOmF73P%2BA0LixffXaCtJqN9g8MAenXGO4en8QrWKvTkB7hGW7XsxENAgixtaWyDqiErc9VKbD7Z93BSgSbVE%2B8ZV9j8M4CAUHE2oeyXjIObd298Eqegpmu%2FMVjhGyhucalBpgySfPqpdVfPkwJc%2FZODD3EGo5fAcFPPwdByAjkq%2BzGbtXvuf7%2FUR4IUz0n0rQ1BMUdy6c7rjUIzl89%2BHMsDpCtRd0seQgyXrtQDdlO1OxFAHBRMgCbSV5bjLu9j93UJATGeTjTnlWpIZ6qHW2jMnHToh2O%2F2FOO8ss6Zlzt77IGVapDkoyf7pmBAQtvUxQPhryCvjiFTtcOsjgRVnaxGxL3uphkXIPSNUfkJ8m0fapzviNefV7Tr53UL7QS5nqMiNweopf56qaDNLpPs5OgFVeSLZDMZCwuzcCEhvqc1U3JysTxoauMZOyRMZRg%2BmE0AE7wggw8JmCxQY6pgHMPgW67JH8h7SwFJoltL4i%2FH8dMcqcj59cHKtDlihxLHvqY6hOB58unaKjkT4iPCULSVReDHrzQthKD4YGL5ATYfQsLWNYXxDuYuzAj5Kw10w6KLA8l9AFumAsY3p3LIJg3RIeMzpgNW4roJv%2Fe%2Bb5Qe30TdCXsFP68PjNa1KoDaI9nMKZdrNfsridSnIqB8EIvF0NQgby1sYJB%2FGGPPctOJMi%2B0VN&X-Amz-Signature=88dac048b586a36bd0b56a2b5b1faa70ea3d39e897022befc1787367c1c56795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOHJNK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGDCmsp1rXbezLg%2Fomkvr775%2BV4FOY5y3kpsr5Ca8E7nAiBM7ToKPZdD1nfGlW0P7WVkMKaYGKqq4G%2FjH26Edz4miyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMH6i%2FenLQNdI1cSIMKtwDwHr3EgpfGqz78ETxLQFFAlbRLLLQ5p%2BUJuK7Fg2TuM8QBX1Njx21IZTDSTaI%2BF%2FcgVo1ivS8XdSVdf8W5fHqH474MGDucrre4CTKQLfBPovhDn6mq8%2Fq0hzrlwfKw%2FAVrYFvbY%2FYATpReLZTIOc2Oss3%2BnZeKsdYtLHWWCSjZRdZWfDkpqLOmF73P%2BA0LixffXaCtJqN9g8MAenXGO4en8QrWKvTkB7hGW7XsxENAgixtaWyDqiErc9VKbD7Z93BSgSbVE%2B8ZV9j8M4CAUHE2oeyXjIObd298Eqegpmu%2FMVjhGyhucalBpgySfPqpdVfPkwJc%2FZODD3EGo5fAcFPPwdByAjkq%2BzGbtXvuf7%2FUR4IUz0n0rQ1BMUdy6c7rjUIzl89%2BHMsDpCtRd0seQgyXrtQDdlO1OxFAHBRMgCbSV5bjLu9j93UJATGeTjTnlWpIZ6qHW2jMnHToh2O%2F2FOO8ss6Zlzt77IGVapDkoyf7pmBAQtvUxQPhryCvjiFTtcOsjgRVnaxGxL3uphkXIPSNUfkJ8m0fapzviNefV7Tr53UL7QS5nqMiNweopf56qaDNLpPs5OgFVeSLZDMZCwuzcCEhvqc1U3JysTxoauMZOyRMZRg%2BmE0AE7wggw8JmCxQY6pgHMPgW67JH8h7SwFJoltL4i%2FH8dMcqcj59cHKtDlihxLHvqY6hOB58unaKjkT4iPCULSVReDHrzQthKD4YGL5ATYfQsLWNYXxDuYuzAj5Kw10w6KLA8l9AFumAsY3p3LIJg3RIeMzpgNW4roJv%2Fe%2Bb5Qe30TdCXsFP68PjNa1KoDaI9nMKZdrNfsridSnIqB8EIvF0NQgby1sYJB%2FGGPPctOJMi%2B0VN&X-Amz-Signature=1cb72f5f8f2584ee9a2d5c1b7cef32b861eecd6c8604a39ab58cc30ece4b6d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
