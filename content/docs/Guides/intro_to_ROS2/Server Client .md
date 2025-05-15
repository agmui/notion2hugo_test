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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTXNXPP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFNxvLWX2buSHDtQyf0l%2BRvTUz41r3tXwnadEYB%2FFOWKAiEA2Bs3vw%2B7LFXECtiDU0RFSNhU4wobWZE04RG03hpcxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJs6COWyk3gu2eb6TyrcA%2FM2HGEs4lbppJXNq8k%2BuQE1IiPrdWdMYSsfB8t1fF2oV%2FsH3L1nWWRFKoz47VFJF68blc03c3tZr2Cr0g0qm6v%2FrqzdmY9g4UB6cP1QvJjrsiRED9YLGLpl1ZroEOTxUEG77RSDxSIiuA2aK2INeJxqnGlV2zFZTjNupfZbrIymjkte8LzxHm9%2F8XXyMhdBNDC2CfwYRe2aCl2tne%2BpGLSFwfsCRQf%2FVqnUeYnrm5LOXiN2%2Br5IE3OAgSx6MBZHXO9xVLKpFBp06MuLtGQKo4oOREAr4qjo1uQTuAmOpDc5NnVWzdz5UzOfB%2Bf6y2ln2S%2BMT%2BbliMQSWmkr36qpgBgWKZCqA4YCcMrks98sLRdM4%2F0Hahkdcb7ESaX2i0lCdIPf2ZApFhZq3z6TK1kUL9cyje8X4NJO6JelmIL9d5reLW%2BsOXlLfoASonjYpG8Fu%2BwWOEGBU%2BQyO%2Fte0oCHrlipn0C5JElzEreq1dOWAxAorNVITWW%2FLzASvMDizuJiB%2BDJcBUJIG13zZmmd6BeBnl6RhASxlYqzTv9wZmk%2BadwFij1TPLGEPdJ5Uf46UVRaYO%2BZqXTrhA7V35jrHmWXOzQPSf1gw5SsSj9rk1Bbwo3xksL%2Fd%2BJMN%2FlvgWrMPr9l8EGOqUBBZA7OC0hawJtgncN%2BDJ6V6d3wW0y9%2B9e91SOPJ5xdOCdh%2BYSIK6FhHfPXilEkQ%2BJqtbKkGAPwxJna9Nm27trBqLopdpzJriRaUkyOGtYK42c6dOJm2COO6OM9d6p1Z%2BFeku6KAoCt2qBy5PtpmOW6HsokfdDwMz6prUy2RYV4M4mg7MOJAO30g27%2B0XFmOUtLUzIkxYSdDTtkLmxleGXu%2Fa2wLi2&X-Amz-Signature=19a44e8c4b3a1ef271fb36ab26253ee162215b5009987c8263ccc09bec5062fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTXNXPP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFNxvLWX2buSHDtQyf0l%2BRvTUz41r3tXwnadEYB%2FFOWKAiEA2Bs3vw%2B7LFXECtiDU0RFSNhU4wobWZE04RG03hpcxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJs6COWyk3gu2eb6TyrcA%2FM2HGEs4lbppJXNq8k%2BuQE1IiPrdWdMYSsfB8t1fF2oV%2FsH3L1nWWRFKoz47VFJF68blc03c3tZr2Cr0g0qm6v%2FrqzdmY9g4UB6cP1QvJjrsiRED9YLGLpl1ZroEOTxUEG77RSDxSIiuA2aK2INeJxqnGlV2zFZTjNupfZbrIymjkte8LzxHm9%2F8XXyMhdBNDC2CfwYRe2aCl2tne%2BpGLSFwfsCRQf%2FVqnUeYnrm5LOXiN2%2Br5IE3OAgSx6MBZHXO9xVLKpFBp06MuLtGQKo4oOREAr4qjo1uQTuAmOpDc5NnVWzdz5UzOfB%2Bf6y2ln2S%2BMT%2BbliMQSWmkr36qpgBgWKZCqA4YCcMrks98sLRdM4%2F0Hahkdcb7ESaX2i0lCdIPf2ZApFhZq3z6TK1kUL9cyje8X4NJO6JelmIL9d5reLW%2BsOXlLfoASonjYpG8Fu%2BwWOEGBU%2BQyO%2Fte0oCHrlipn0C5JElzEreq1dOWAxAorNVITWW%2FLzASvMDizuJiB%2BDJcBUJIG13zZmmd6BeBnl6RhASxlYqzTv9wZmk%2BadwFij1TPLGEPdJ5Uf46UVRaYO%2BZqXTrhA7V35jrHmWXOzQPSf1gw5SsSj9rk1Bbwo3xksL%2Fd%2BJMN%2FlvgWrMPr9l8EGOqUBBZA7OC0hawJtgncN%2BDJ6V6d3wW0y9%2B9e91SOPJ5xdOCdh%2BYSIK6FhHfPXilEkQ%2BJqtbKkGAPwxJna9Nm27trBqLopdpzJriRaUkyOGtYK42c6dOJm2COO6OM9d6p1Z%2BFeku6KAoCt2qBy5PtpmOW6HsokfdDwMz6prUy2RYV4M4mg7MOJAO30g27%2B0XFmOUtLUzIkxYSdDTtkLmxleGXu%2Fa2wLi2&X-Amz-Signature=00bc73e817175df207f5e42b622f93165f44fad9cb551f89b18e4838a8dfdd08&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTXNXPP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFNxvLWX2buSHDtQyf0l%2BRvTUz41r3tXwnadEYB%2FFOWKAiEA2Bs3vw%2B7LFXECtiDU0RFSNhU4wobWZE04RG03hpcxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJs6COWyk3gu2eb6TyrcA%2FM2HGEs4lbppJXNq8k%2BuQE1IiPrdWdMYSsfB8t1fF2oV%2FsH3L1nWWRFKoz47VFJF68blc03c3tZr2Cr0g0qm6v%2FrqzdmY9g4UB6cP1QvJjrsiRED9YLGLpl1ZroEOTxUEG77RSDxSIiuA2aK2INeJxqnGlV2zFZTjNupfZbrIymjkte8LzxHm9%2F8XXyMhdBNDC2CfwYRe2aCl2tne%2BpGLSFwfsCRQf%2FVqnUeYnrm5LOXiN2%2Br5IE3OAgSx6MBZHXO9xVLKpFBp06MuLtGQKo4oOREAr4qjo1uQTuAmOpDc5NnVWzdz5UzOfB%2Bf6y2ln2S%2BMT%2BbliMQSWmkr36qpgBgWKZCqA4YCcMrks98sLRdM4%2F0Hahkdcb7ESaX2i0lCdIPf2ZApFhZq3z6TK1kUL9cyje8X4NJO6JelmIL9d5reLW%2BsOXlLfoASonjYpG8Fu%2BwWOEGBU%2BQyO%2Fte0oCHrlipn0C5JElzEreq1dOWAxAorNVITWW%2FLzASvMDizuJiB%2BDJcBUJIG13zZmmd6BeBnl6RhASxlYqzTv9wZmk%2BadwFij1TPLGEPdJ5Uf46UVRaYO%2BZqXTrhA7V35jrHmWXOzQPSf1gw5SsSj9rk1Bbwo3xksL%2Fd%2BJMN%2FlvgWrMPr9l8EGOqUBBZA7OC0hawJtgncN%2BDJ6V6d3wW0y9%2B9e91SOPJ5xdOCdh%2BYSIK6FhHfPXilEkQ%2BJqtbKkGAPwxJna9Nm27trBqLopdpzJriRaUkyOGtYK42c6dOJm2COO6OM9d6p1Z%2BFeku6KAoCt2qBy5PtpmOW6HsokfdDwMz6prUy2RYV4M4mg7MOJAO30g27%2B0XFmOUtLUzIkxYSdDTtkLmxleGXu%2Fa2wLi2&X-Amz-Signature=e638b3fd8d9a3a75753bc82ce7439dad1bbbac6aa7c4cfba947954cba58f4e63&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTXNXPP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFNxvLWX2buSHDtQyf0l%2BRvTUz41r3tXwnadEYB%2FFOWKAiEA2Bs3vw%2B7LFXECtiDU0RFSNhU4wobWZE04RG03hpcxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJs6COWyk3gu2eb6TyrcA%2FM2HGEs4lbppJXNq8k%2BuQE1IiPrdWdMYSsfB8t1fF2oV%2FsH3L1nWWRFKoz47VFJF68blc03c3tZr2Cr0g0qm6v%2FrqzdmY9g4UB6cP1QvJjrsiRED9YLGLpl1ZroEOTxUEG77RSDxSIiuA2aK2INeJxqnGlV2zFZTjNupfZbrIymjkte8LzxHm9%2F8XXyMhdBNDC2CfwYRe2aCl2tne%2BpGLSFwfsCRQf%2FVqnUeYnrm5LOXiN2%2Br5IE3OAgSx6MBZHXO9xVLKpFBp06MuLtGQKo4oOREAr4qjo1uQTuAmOpDc5NnVWzdz5UzOfB%2Bf6y2ln2S%2BMT%2BbliMQSWmkr36qpgBgWKZCqA4YCcMrks98sLRdM4%2F0Hahkdcb7ESaX2i0lCdIPf2ZApFhZq3z6TK1kUL9cyje8X4NJO6JelmIL9d5reLW%2BsOXlLfoASonjYpG8Fu%2BwWOEGBU%2BQyO%2Fte0oCHrlipn0C5JElzEreq1dOWAxAorNVITWW%2FLzASvMDizuJiB%2BDJcBUJIG13zZmmd6BeBnl6RhASxlYqzTv9wZmk%2BadwFij1TPLGEPdJ5Uf46UVRaYO%2BZqXTrhA7V35jrHmWXOzQPSf1gw5SsSj9rk1Bbwo3xksL%2Fd%2BJMN%2FlvgWrMPr9l8EGOqUBBZA7OC0hawJtgncN%2BDJ6V6d3wW0y9%2B9e91SOPJ5xdOCdh%2BYSIK6FhHfPXilEkQ%2BJqtbKkGAPwxJna9Nm27trBqLopdpzJriRaUkyOGtYK42c6dOJm2COO6OM9d6p1Z%2BFeku6KAoCt2qBy5PtpmOW6HsokfdDwMz6prUy2RYV4M4mg7MOJAO30g27%2B0XFmOUtLUzIkxYSdDTtkLmxleGXu%2Fa2wLi2&X-Amz-Signature=cb5dda70ec9943052ee5790410b0c2e1addd11073c89eaae3ab7afbf727be7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTXNXPP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFNxvLWX2buSHDtQyf0l%2BRvTUz41r3tXwnadEYB%2FFOWKAiEA2Bs3vw%2B7LFXECtiDU0RFSNhU4wobWZE04RG03hpcxkUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJs6COWyk3gu2eb6TyrcA%2FM2HGEs4lbppJXNq8k%2BuQE1IiPrdWdMYSsfB8t1fF2oV%2FsH3L1nWWRFKoz47VFJF68blc03c3tZr2Cr0g0qm6v%2FrqzdmY9g4UB6cP1QvJjrsiRED9YLGLpl1ZroEOTxUEG77RSDxSIiuA2aK2INeJxqnGlV2zFZTjNupfZbrIymjkte8LzxHm9%2F8XXyMhdBNDC2CfwYRe2aCl2tne%2BpGLSFwfsCRQf%2FVqnUeYnrm5LOXiN2%2Br5IE3OAgSx6MBZHXO9xVLKpFBp06MuLtGQKo4oOREAr4qjo1uQTuAmOpDc5NnVWzdz5UzOfB%2Bf6y2ln2S%2BMT%2BbliMQSWmkr36qpgBgWKZCqA4YCcMrks98sLRdM4%2F0Hahkdcb7ESaX2i0lCdIPf2ZApFhZq3z6TK1kUL9cyje8X4NJO6JelmIL9d5reLW%2BsOXlLfoASonjYpG8Fu%2BwWOEGBU%2BQyO%2Fte0oCHrlipn0C5JElzEreq1dOWAxAorNVITWW%2FLzASvMDizuJiB%2BDJcBUJIG13zZmmd6BeBnl6RhASxlYqzTv9wZmk%2BadwFij1TPLGEPdJ5Uf46UVRaYO%2BZqXTrhA7V35jrHmWXOzQPSf1gw5SsSj9rk1Bbwo3xksL%2Fd%2BJMN%2FlvgWrMPr9l8EGOqUBBZA7OC0hawJtgncN%2BDJ6V6d3wW0y9%2B9e91SOPJ5xdOCdh%2BYSIK6FhHfPXilEkQ%2BJqtbKkGAPwxJna9Nm27trBqLopdpzJriRaUkyOGtYK42c6dOJm2COO6OM9d6p1Z%2BFeku6KAoCt2qBy5PtpmOW6HsokfdDwMz6prUy2RYV4M4mg7MOJAO30g27%2B0XFmOUtLUzIkxYSdDTtkLmxleGXu%2Fa2wLi2&X-Amz-Signature=0e1bdbc8945436d63dd22d45e509b5eefc74649284eb410d3665eb61f46a13e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
