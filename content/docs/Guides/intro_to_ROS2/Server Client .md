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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKTE7M3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOHLcjU%2Bxy6lVKmQAujN6piF9BbqauIu4gghwmUaMycAiEAjJD3BPehv9ufsBl%2Blq6aJ%2BdAuPIWEA6YMYF4ZzS%2F1roq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIE2n%2FC1skoWusXVgircA8pCGA29bSZNjENmGlihSs2C%2F8zdHD6KPmZhkGtSVI4KwbfqcX%2FIjLsjpQ5RjRlLV8qRdSwfVD0qhcqiNRl6ImgJc3aVMKuF7xbvR96xJGbPUn3a415HsfhKl5XhoPub52XHrRSJwDjd9kuD%2BxBZys1JZy6wRlnhsgX846tFnvoTfjOxlowHT2HQBIojSdEtiBFw1mcJV5cER5i8r1Ncw%2Bm1tTMe%2BuRK%2FcsgCQoeHRsBRP%2F479Ou4rnu4Sqn71f%2BgFMrgiIVD3ZeLiBqKOuooOSY%2FXWhwwGCx1mn9hPgB2UgESVXV%2FfuGsrlS8veG%2BdcHvv5DjvJdOYccYQgCV3vFd5%2B9OZoE0KGSlsJHL0oOaG%2FQJQjvgNDAgoGAIwAZio06aUDnN%2BjB88K%2BYxFESLMdkBTGEmyBC6QXEnuzT0jUX4BZQPRmjV16TXIBIOHjWG3FjL9Hqt9Cy%2FwAtObOTmSf%2Ft%2BERq45vHEnqo5Jeq66eRY7V2tgiHCI4zDEQAG1k%2B339lj6RHRPu5D8V6HKtHH7vcBLZ9ttWFnWOXzrqU1%2Boo0g%2Bkkd4zOMKckus7a0byiM%2FhmG3zCmghz4CEZGrnTq29wlEBTZuxqpDeXhIjn2Z1wR%2BkuR9UB7cHRMTv2MLeL58AGOqUBQHW4YBG8u3nWO8bRUlH5NyJZUZlNoGm%2FcFeZjD8wGwwBaeNsz2wq%2FmnUsMDz5fSjkxIOuVLOrtTUGAHdcz4KbNA4C%2FR1YonnGVYZxvMl96jeNTMQoXMEqkzNJg0N2c7H5U65DcZxsVJ%2F9GxBg6BOTmP97agMsrEKQM5NabDImq5gU79ywp9ZhYVflVqplxe7EaPAwtRehNkbdHTfcFmWeXb4oOtz&X-Amz-Signature=81bbdf4b21696256a851508800f5de2711137a9675062b897a0fff15177f9d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKTE7M3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOHLcjU%2Bxy6lVKmQAujN6piF9BbqauIu4gghwmUaMycAiEAjJD3BPehv9ufsBl%2Blq6aJ%2BdAuPIWEA6YMYF4ZzS%2F1roq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIE2n%2FC1skoWusXVgircA8pCGA29bSZNjENmGlihSs2C%2F8zdHD6KPmZhkGtSVI4KwbfqcX%2FIjLsjpQ5RjRlLV8qRdSwfVD0qhcqiNRl6ImgJc3aVMKuF7xbvR96xJGbPUn3a415HsfhKl5XhoPub52XHrRSJwDjd9kuD%2BxBZys1JZy6wRlnhsgX846tFnvoTfjOxlowHT2HQBIojSdEtiBFw1mcJV5cER5i8r1Ncw%2Bm1tTMe%2BuRK%2FcsgCQoeHRsBRP%2F479Ou4rnu4Sqn71f%2BgFMrgiIVD3ZeLiBqKOuooOSY%2FXWhwwGCx1mn9hPgB2UgESVXV%2FfuGsrlS8veG%2BdcHvv5DjvJdOYccYQgCV3vFd5%2B9OZoE0KGSlsJHL0oOaG%2FQJQjvgNDAgoGAIwAZio06aUDnN%2BjB88K%2BYxFESLMdkBTGEmyBC6QXEnuzT0jUX4BZQPRmjV16TXIBIOHjWG3FjL9Hqt9Cy%2FwAtObOTmSf%2Ft%2BERq45vHEnqo5Jeq66eRY7V2tgiHCI4zDEQAG1k%2B339lj6RHRPu5D8V6HKtHH7vcBLZ9ttWFnWOXzrqU1%2Boo0g%2Bkkd4zOMKckus7a0byiM%2FhmG3zCmghz4CEZGrnTq29wlEBTZuxqpDeXhIjn2Z1wR%2BkuR9UB7cHRMTv2MLeL58AGOqUBQHW4YBG8u3nWO8bRUlH5NyJZUZlNoGm%2FcFeZjD8wGwwBaeNsz2wq%2FmnUsMDz5fSjkxIOuVLOrtTUGAHdcz4KbNA4C%2FR1YonnGVYZxvMl96jeNTMQoXMEqkzNJg0N2c7H5U65DcZxsVJ%2F9GxBg6BOTmP97agMsrEKQM5NabDImq5gU79ywp9ZhYVflVqplxe7EaPAwtRehNkbdHTfcFmWeXb4oOtz&X-Amz-Signature=5ba8afaa11bde09f8f4b2a093e58c7e767deb9239191da17fcc9e96aa8323abe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKTE7M3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOHLcjU%2Bxy6lVKmQAujN6piF9BbqauIu4gghwmUaMycAiEAjJD3BPehv9ufsBl%2Blq6aJ%2BdAuPIWEA6YMYF4ZzS%2F1roq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIE2n%2FC1skoWusXVgircA8pCGA29bSZNjENmGlihSs2C%2F8zdHD6KPmZhkGtSVI4KwbfqcX%2FIjLsjpQ5RjRlLV8qRdSwfVD0qhcqiNRl6ImgJc3aVMKuF7xbvR96xJGbPUn3a415HsfhKl5XhoPub52XHrRSJwDjd9kuD%2BxBZys1JZy6wRlnhsgX846tFnvoTfjOxlowHT2HQBIojSdEtiBFw1mcJV5cER5i8r1Ncw%2Bm1tTMe%2BuRK%2FcsgCQoeHRsBRP%2F479Ou4rnu4Sqn71f%2BgFMrgiIVD3ZeLiBqKOuooOSY%2FXWhwwGCx1mn9hPgB2UgESVXV%2FfuGsrlS8veG%2BdcHvv5DjvJdOYccYQgCV3vFd5%2B9OZoE0KGSlsJHL0oOaG%2FQJQjvgNDAgoGAIwAZio06aUDnN%2BjB88K%2BYxFESLMdkBTGEmyBC6QXEnuzT0jUX4BZQPRmjV16TXIBIOHjWG3FjL9Hqt9Cy%2FwAtObOTmSf%2Ft%2BERq45vHEnqo5Jeq66eRY7V2tgiHCI4zDEQAG1k%2B339lj6RHRPu5D8V6HKtHH7vcBLZ9ttWFnWOXzrqU1%2Boo0g%2Bkkd4zOMKckus7a0byiM%2FhmG3zCmghz4CEZGrnTq29wlEBTZuxqpDeXhIjn2Z1wR%2BkuR9UB7cHRMTv2MLeL58AGOqUBQHW4YBG8u3nWO8bRUlH5NyJZUZlNoGm%2FcFeZjD8wGwwBaeNsz2wq%2FmnUsMDz5fSjkxIOuVLOrtTUGAHdcz4KbNA4C%2FR1YonnGVYZxvMl96jeNTMQoXMEqkzNJg0N2c7H5U65DcZxsVJ%2F9GxBg6BOTmP97agMsrEKQM5NabDImq5gU79ywp9ZhYVflVqplxe7EaPAwtRehNkbdHTfcFmWeXb4oOtz&X-Amz-Signature=136e0e66f85cd02107530660954fce2d53e886a2ebfff73b42c40620cdb5c789&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKTE7M3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOHLcjU%2Bxy6lVKmQAujN6piF9BbqauIu4gghwmUaMycAiEAjJD3BPehv9ufsBl%2Blq6aJ%2BdAuPIWEA6YMYF4ZzS%2F1roq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIE2n%2FC1skoWusXVgircA8pCGA29bSZNjENmGlihSs2C%2F8zdHD6KPmZhkGtSVI4KwbfqcX%2FIjLsjpQ5RjRlLV8qRdSwfVD0qhcqiNRl6ImgJc3aVMKuF7xbvR96xJGbPUn3a415HsfhKl5XhoPub52XHrRSJwDjd9kuD%2BxBZys1JZy6wRlnhsgX846tFnvoTfjOxlowHT2HQBIojSdEtiBFw1mcJV5cER5i8r1Ncw%2Bm1tTMe%2BuRK%2FcsgCQoeHRsBRP%2F479Ou4rnu4Sqn71f%2BgFMrgiIVD3ZeLiBqKOuooOSY%2FXWhwwGCx1mn9hPgB2UgESVXV%2FfuGsrlS8veG%2BdcHvv5DjvJdOYccYQgCV3vFd5%2B9OZoE0KGSlsJHL0oOaG%2FQJQjvgNDAgoGAIwAZio06aUDnN%2BjB88K%2BYxFESLMdkBTGEmyBC6QXEnuzT0jUX4BZQPRmjV16TXIBIOHjWG3FjL9Hqt9Cy%2FwAtObOTmSf%2Ft%2BERq45vHEnqo5Jeq66eRY7V2tgiHCI4zDEQAG1k%2B339lj6RHRPu5D8V6HKtHH7vcBLZ9ttWFnWOXzrqU1%2Boo0g%2Bkkd4zOMKckus7a0byiM%2FhmG3zCmghz4CEZGrnTq29wlEBTZuxqpDeXhIjn2Z1wR%2BkuR9UB7cHRMTv2MLeL58AGOqUBQHW4YBG8u3nWO8bRUlH5NyJZUZlNoGm%2FcFeZjD8wGwwBaeNsz2wq%2FmnUsMDz5fSjkxIOuVLOrtTUGAHdcz4KbNA4C%2FR1YonnGVYZxvMl96jeNTMQoXMEqkzNJg0N2c7H5U65DcZxsVJ%2F9GxBg6BOTmP97agMsrEKQM5NabDImq5gU79ywp9ZhYVflVqplxe7EaPAwtRehNkbdHTfcFmWeXb4oOtz&X-Amz-Signature=fd8c94ff7b409de178d36f0fdda7da5ee3bb04e927c8015840a4a38375f68eca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKTE7M3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOHLcjU%2Bxy6lVKmQAujN6piF9BbqauIu4gghwmUaMycAiEAjJD3BPehv9ufsBl%2Blq6aJ%2BdAuPIWEA6YMYF4ZzS%2F1roq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIE2n%2FC1skoWusXVgircA8pCGA29bSZNjENmGlihSs2C%2F8zdHD6KPmZhkGtSVI4KwbfqcX%2FIjLsjpQ5RjRlLV8qRdSwfVD0qhcqiNRl6ImgJc3aVMKuF7xbvR96xJGbPUn3a415HsfhKl5XhoPub52XHrRSJwDjd9kuD%2BxBZys1JZy6wRlnhsgX846tFnvoTfjOxlowHT2HQBIojSdEtiBFw1mcJV5cER5i8r1Ncw%2Bm1tTMe%2BuRK%2FcsgCQoeHRsBRP%2F479Ou4rnu4Sqn71f%2BgFMrgiIVD3ZeLiBqKOuooOSY%2FXWhwwGCx1mn9hPgB2UgESVXV%2FfuGsrlS8veG%2BdcHvv5DjvJdOYccYQgCV3vFd5%2B9OZoE0KGSlsJHL0oOaG%2FQJQjvgNDAgoGAIwAZio06aUDnN%2BjB88K%2BYxFESLMdkBTGEmyBC6QXEnuzT0jUX4BZQPRmjV16TXIBIOHjWG3FjL9Hqt9Cy%2FwAtObOTmSf%2Ft%2BERq45vHEnqo5Jeq66eRY7V2tgiHCI4zDEQAG1k%2B339lj6RHRPu5D8V6HKtHH7vcBLZ9ttWFnWOXzrqU1%2Boo0g%2Bkkd4zOMKckus7a0byiM%2FhmG3zCmghz4CEZGrnTq29wlEBTZuxqpDeXhIjn2Z1wR%2BkuR9UB7cHRMTv2MLeL58AGOqUBQHW4YBG8u3nWO8bRUlH5NyJZUZlNoGm%2FcFeZjD8wGwwBaeNsz2wq%2FmnUsMDz5fSjkxIOuVLOrtTUGAHdcz4KbNA4C%2FR1YonnGVYZxvMl96jeNTMQoXMEqkzNJg0N2c7H5U65DcZxsVJ%2F9GxBg6BOTmP97agMsrEKQM5NabDImq5gU79ywp9ZhYVflVqplxe7EaPAwtRehNkbdHTfcFmWeXb4oOtz&X-Amz-Signature=93db147e075dfa73880999188c54ee75cbbb097c18cad6fd01d6bac6ed57a658&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
