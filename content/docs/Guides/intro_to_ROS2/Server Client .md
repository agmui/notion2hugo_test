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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGEDG3B%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDuCMXAfpyE%2FM3aMam0G5X919cfm9IdCkEzFuw4UcW14AiB5OxUK%2FO7yEPy4l%2B%2BOLbGMhIZ8RmrUQ5jZQAQ73FB2VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMt%2FKdh8WHTXWNMOyfKtwDq7SX7GLghsDHGCfvcWjjKyfTubBbBxBr70PgLIhyXmfadic1jELSPXxBWgmLPDezyGzDnzRQwweUCzUa%2B3jBTprDHAxLPPyxuVcr0L45KTlqEa%2BQ2nfdT0Yf%2FjLM0Prh%2FMkogbgw5oon%2FfNZyGNPwX0zWPi%2FEMVcquPWEb9MMi4fVSY6XiyVzrvZ97qiqjT499rSceBF%2FZL%2B2TMMeahaScTmZ3h1hF4Mtdp8vJln2GVKUfSJBStkXAfcpv4twS6MQe4dfr6Rl4wehI18nVDhGodSF2nU0X0loG5rVRppwafUJUSoOnhvzmIt2cxU2XGIvCZIbVw6zfNsEoLXPEiECiFO5zS3WWWmC4NnSi7ecVyX2dwQWO7BNwBCj8Fi%2FcjDNi%2Bll9xgPlskVbkBeWnHp0OcO6nj1ZiWjfI5rOyIIuvtcaphQqtTR9qjXh21tEFNDfWn%2FLg1lrn9zhQI7dMXshp3bCDuqzoR7LstKxodQENyeHgqAyhGHI6%2BUAQxBl9VGiNrl2lfrSV1xhJp53%2B0%2FcFCFyaeW8SMdgdgqmWQyvCBmQzeuDGWYdq8MCkutyVooYv0Acz%2ByBef7OshLKR%2Bkp9edzr0nW4QOrLjS0slYaC%2BnrTSrCawBFrFKz4wu9aSwQY6pgGC7piwZiwQBiL9U38T6fTbzAhED%2BmCF79yW5IW6s232ELJRhc%2FPb57xYmd55cgbz0eerB9IZruKPgaDcm%2Fcnrx6GzBwCvN7HAzJVn17HtzBviKk9%2FnSv%2Bcv1oLp8LHgCbndeAMFb%2FoP31KXAe3V3M%2BCnWLuSODJrrSlFunGlrtiyUqqh%2B0DJVpQ0AN3HbNfyt4Op8zQQBk5DyPUUzeEsbU04WMNYhX&X-Amz-Signature=cea1dbafa846ace4b5e48638782f5fa27929927910412bec0df6872d1acca006&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGEDG3B%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDuCMXAfpyE%2FM3aMam0G5X919cfm9IdCkEzFuw4UcW14AiB5OxUK%2FO7yEPy4l%2B%2BOLbGMhIZ8RmrUQ5jZQAQ73FB2VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMt%2FKdh8WHTXWNMOyfKtwDq7SX7GLghsDHGCfvcWjjKyfTubBbBxBr70PgLIhyXmfadic1jELSPXxBWgmLPDezyGzDnzRQwweUCzUa%2B3jBTprDHAxLPPyxuVcr0L45KTlqEa%2BQ2nfdT0Yf%2FjLM0Prh%2FMkogbgw5oon%2FfNZyGNPwX0zWPi%2FEMVcquPWEb9MMi4fVSY6XiyVzrvZ97qiqjT499rSceBF%2FZL%2B2TMMeahaScTmZ3h1hF4Mtdp8vJln2GVKUfSJBStkXAfcpv4twS6MQe4dfr6Rl4wehI18nVDhGodSF2nU0X0loG5rVRppwafUJUSoOnhvzmIt2cxU2XGIvCZIbVw6zfNsEoLXPEiECiFO5zS3WWWmC4NnSi7ecVyX2dwQWO7BNwBCj8Fi%2FcjDNi%2Bll9xgPlskVbkBeWnHp0OcO6nj1ZiWjfI5rOyIIuvtcaphQqtTR9qjXh21tEFNDfWn%2FLg1lrn9zhQI7dMXshp3bCDuqzoR7LstKxodQENyeHgqAyhGHI6%2BUAQxBl9VGiNrl2lfrSV1xhJp53%2B0%2FcFCFyaeW8SMdgdgqmWQyvCBmQzeuDGWYdq8MCkutyVooYv0Acz%2ByBef7OshLKR%2Bkp9edzr0nW4QOrLjS0slYaC%2BnrTSrCawBFrFKz4wu9aSwQY6pgGC7piwZiwQBiL9U38T6fTbzAhED%2BmCF79yW5IW6s232ELJRhc%2FPb57xYmd55cgbz0eerB9IZruKPgaDcm%2Fcnrx6GzBwCvN7HAzJVn17HtzBviKk9%2FnSv%2Bcv1oLp8LHgCbndeAMFb%2FoP31KXAe3V3M%2BCnWLuSODJrrSlFunGlrtiyUqqh%2B0DJVpQ0AN3HbNfyt4Op8zQQBk5DyPUUzeEsbU04WMNYhX&X-Amz-Signature=ee931a09af376bb9eed4e57e1c5a8371412864d4b05b86fc0aa923c044867978&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGEDG3B%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDuCMXAfpyE%2FM3aMam0G5X919cfm9IdCkEzFuw4UcW14AiB5OxUK%2FO7yEPy4l%2B%2BOLbGMhIZ8RmrUQ5jZQAQ73FB2VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMt%2FKdh8WHTXWNMOyfKtwDq7SX7GLghsDHGCfvcWjjKyfTubBbBxBr70PgLIhyXmfadic1jELSPXxBWgmLPDezyGzDnzRQwweUCzUa%2B3jBTprDHAxLPPyxuVcr0L45KTlqEa%2BQ2nfdT0Yf%2FjLM0Prh%2FMkogbgw5oon%2FfNZyGNPwX0zWPi%2FEMVcquPWEb9MMi4fVSY6XiyVzrvZ97qiqjT499rSceBF%2FZL%2B2TMMeahaScTmZ3h1hF4Mtdp8vJln2GVKUfSJBStkXAfcpv4twS6MQe4dfr6Rl4wehI18nVDhGodSF2nU0X0loG5rVRppwafUJUSoOnhvzmIt2cxU2XGIvCZIbVw6zfNsEoLXPEiECiFO5zS3WWWmC4NnSi7ecVyX2dwQWO7BNwBCj8Fi%2FcjDNi%2Bll9xgPlskVbkBeWnHp0OcO6nj1ZiWjfI5rOyIIuvtcaphQqtTR9qjXh21tEFNDfWn%2FLg1lrn9zhQI7dMXshp3bCDuqzoR7LstKxodQENyeHgqAyhGHI6%2BUAQxBl9VGiNrl2lfrSV1xhJp53%2B0%2FcFCFyaeW8SMdgdgqmWQyvCBmQzeuDGWYdq8MCkutyVooYv0Acz%2ByBef7OshLKR%2Bkp9edzr0nW4QOrLjS0slYaC%2BnrTSrCawBFrFKz4wu9aSwQY6pgGC7piwZiwQBiL9U38T6fTbzAhED%2BmCF79yW5IW6s232ELJRhc%2FPb57xYmd55cgbz0eerB9IZruKPgaDcm%2Fcnrx6GzBwCvN7HAzJVn17HtzBviKk9%2FnSv%2Bcv1oLp8LHgCbndeAMFb%2FoP31KXAe3V3M%2BCnWLuSODJrrSlFunGlrtiyUqqh%2B0DJVpQ0AN3HbNfyt4Op8zQQBk5DyPUUzeEsbU04WMNYhX&X-Amz-Signature=adacda6fe7ee740b375f87b0dd9aa01391ff26270ffb984d7bb1625f4f423a09&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGEDG3B%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDuCMXAfpyE%2FM3aMam0G5X919cfm9IdCkEzFuw4UcW14AiB5OxUK%2FO7yEPy4l%2B%2BOLbGMhIZ8RmrUQ5jZQAQ73FB2VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMt%2FKdh8WHTXWNMOyfKtwDq7SX7GLghsDHGCfvcWjjKyfTubBbBxBr70PgLIhyXmfadic1jELSPXxBWgmLPDezyGzDnzRQwweUCzUa%2B3jBTprDHAxLPPyxuVcr0L45KTlqEa%2BQ2nfdT0Yf%2FjLM0Prh%2FMkogbgw5oon%2FfNZyGNPwX0zWPi%2FEMVcquPWEb9MMi4fVSY6XiyVzrvZ97qiqjT499rSceBF%2FZL%2B2TMMeahaScTmZ3h1hF4Mtdp8vJln2GVKUfSJBStkXAfcpv4twS6MQe4dfr6Rl4wehI18nVDhGodSF2nU0X0loG5rVRppwafUJUSoOnhvzmIt2cxU2XGIvCZIbVw6zfNsEoLXPEiECiFO5zS3WWWmC4NnSi7ecVyX2dwQWO7BNwBCj8Fi%2FcjDNi%2Bll9xgPlskVbkBeWnHp0OcO6nj1ZiWjfI5rOyIIuvtcaphQqtTR9qjXh21tEFNDfWn%2FLg1lrn9zhQI7dMXshp3bCDuqzoR7LstKxodQENyeHgqAyhGHI6%2BUAQxBl9VGiNrl2lfrSV1xhJp53%2B0%2FcFCFyaeW8SMdgdgqmWQyvCBmQzeuDGWYdq8MCkutyVooYv0Acz%2ByBef7OshLKR%2Bkp9edzr0nW4QOrLjS0slYaC%2BnrTSrCawBFrFKz4wu9aSwQY6pgGC7piwZiwQBiL9U38T6fTbzAhED%2BmCF79yW5IW6s232ELJRhc%2FPb57xYmd55cgbz0eerB9IZruKPgaDcm%2Fcnrx6GzBwCvN7HAzJVn17HtzBviKk9%2FnSv%2Bcv1oLp8LHgCbndeAMFb%2FoP31KXAe3V3M%2BCnWLuSODJrrSlFunGlrtiyUqqh%2B0DJVpQ0AN3HbNfyt4Op8zQQBk5DyPUUzeEsbU04WMNYhX&X-Amz-Signature=e0798ecfc4f2f5a774b5d78458440a0df048ce0bd0a33849dc2c2fda04db0425&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGEDG3B%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDuCMXAfpyE%2FM3aMam0G5X919cfm9IdCkEzFuw4UcW14AiB5OxUK%2FO7yEPy4l%2B%2BOLbGMhIZ8RmrUQ5jZQAQ73FB2VCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMt%2FKdh8WHTXWNMOyfKtwDq7SX7GLghsDHGCfvcWjjKyfTubBbBxBr70PgLIhyXmfadic1jELSPXxBWgmLPDezyGzDnzRQwweUCzUa%2B3jBTprDHAxLPPyxuVcr0L45KTlqEa%2BQ2nfdT0Yf%2FjLM0Prh%2FMkogbgw5oon%2FfNZyGNPwX0zWPi%2FEMVcquPWEb9MMi4fVSY6XiyVzrvZ97qiqjT499rSceBF%2FZL%2B2TMMeahaScTmZ3h1hF4Mtdp8vJln2GVKUfSJBStkXAfcpv4twS6MQe4dfr6Rl4wehI18nVDhGodSF2nU0X0loG5rVRppwafUJUSoOnhvzmIt2cxU2XGIvCZIbVw6zfNsEoLXPEiECiFO5zS3WWWmC4NnSi7ecVyX2dwQWO7BNwBCj8Fi%2FcjDNi%2Bll9xgPlskVbkBeWnHp0OcO6nj1ZiWjfI5rOyIIuvtcaphQqtTR9qjXh21tEFNDfWn%2FLg1lrn9zhQI7dMXshp3bCDuqzoR7LstKxodQENyeHgqAyhGHI6%2BUAQxBl9VGiNrl2lfrSV1xhJp53%2B0%2FcFCFyaeW8SMdgdgqmWQyvCBmQzeuDGWYdq8MCkutyVooYv0Acz%2ByBef7OshLKR%2Bkp9edzr0nW4QOrLjS0slYaC%2BnrTSrCawBFrFKz4wu9aSwQY6pgGC7piwZiwQBiL9U38T6fTbzAhED%2BmCF79yW5IW6s232ELJRhc%2FPb57xYmd55cgbz0eerB9IZruKPgaDcm%2Fcnrx6GzBwCvN7HAzJVn17HtzBviKk9%2FnSv%2Bcv1oLp8LHgCbndeAMFb%2FoP31KXAe3V3M%2BCnWLuSODJrrSlFunGlrtiyUqqh%2B0DJVpQ0AN3HbNfyt4Op8zQQBk5DyPUUzeEsbU04WMNYhX&X-Amz-Signature=e8bd058e35ff021f59e5b11dc7af91d80b3a25467686e0f5c265931e69bc0ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
