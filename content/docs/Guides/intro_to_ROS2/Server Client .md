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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FFYCO5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDoyilGJ9C3m6n6fSiVmD%2FRrPWRGY0qW0fkt4vDFZLmSgIhAIxdIijYNHQVMLlRvqfTFO73nd0J3APU5M97TYtlD0AUKv8DCBEQABoMNjM3NDIzMTgzODA1IgyM%2Fz8hQhDQwHmKoAAq3ANMCgc%2Bz5KmYAZDe47iA6ndkmjvrQmBbsTuEcz4w5x5tkIF28L6%2F6%2BuV40ysdCDB7CzHLkBOxlpNxryEsCoVIuZd70YZBFmvudbWuXGyOr%2BsVI9U7hCYONLNWz0UdlWxlIfyOqhqrr90IbUcUiEtMQR2yVlGTbs4oL3qNAkimsMlTWCuJPxW%2FodvegUleJG0qZNRjW75I4B%2FM1KE%2BeAMDd%2BIgPDC%2BUUI2qvlF8pcrGzaMWBLxCJmaCqS0uMNVKy%2FhP%2FMYTmVo9FsNsPbGZQw6grvQjhiwcDKt6kI2AFHgl2sitVw0A0YQqcY5AhtNJkpCM%2BdU2%2FrtePLhKcMTY3%2F4cpjFDDIqau3UXARA8WLrEXtKmxJTJVkLhVRe1M%2BUOs3Z%2BoxzZGC0h4WIF8mu97O%2FFxu94evLWHwnjnlTclpmszU6YcB5o%2F5HXhWP1B9p1Bz3THXUe68coDU0tVDwABizScFNxCWFgSpaiZ%2FOY2wYoOEbddgdPQjWH9fLfU1AA1OCbWjFs1pAPFl%2BnNyy38GTFAPYxolsomowmvn27Odgn5ewgbYP2goYnYXRmYcYfTQzD8QMGu6B0cVPZF3tLTX96TRobTJB8Hso84UuhgzfgzINoSLGmBhi%2BlaUC0FTCtgcbBBjqkAQkqqNZidQRzoUcTgVDSc52dP758fbSKR3BJEwNZUzCPFvu8oLNv%2Bpa23rdZmgpS6YRvEgQF84oNAaJ33eSbjxAk84OqZ6YnIfS7cD9Qi2W0C1xe9gSyHk8pnEQzylXPpIQRRMJjaMh0wFrgVG%2B4QDYt6QntedLoaCRtMoMT5TT7usePSKJhqk7jmTeGPjzfU%2FVrWSkpUXneFByRoeoULnHMoUBp&X-Amz-Signature=dc259354bd9d8b11eb67aab85f94d98e3106b67e1e9d5eec48ccaa2ea428491f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FFYCO5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDoyilGJ9C3m6n6fSiVmD%2FRrPWRGY0qW0fkt4vDFZLmSgIhAIxdIijYNHQVMLlRvqfTFO73nd0J3APU5M97TYtlD0AUKv8DCBEQABoMNjM3NDIzMTgzODA1IgyM%2Fz8hQhDQwHmKoAAq3ANMCgc%2Bz5KmYAZDe47iA6ndkmjvrQmBbsTuEcz4w5x5tkIF28L6%2F6%2BuV40ysdCDB7CzHLkBOxlpNxryEsCoVIuZd70YZBFmvudbWuXGyOr%2BsVI9U7hCYONLNWz0UdlWxlIfyOqhqrr90IbUcUiEtMQR2yVlGTbs4oL3qNAkimsMlTWCuJPxW%2FodvegUleJG0qZNRjW75I4B%2FM1KE%2BeAMDd%2BIgPDC%2BUUI2qvlF8pcrGzaMWBLxCJmaCqS0uMNVKy%2FhP%2FMYTmVo9FsNsPbGZQw6grvQjhiwcDKt6kI2AFHgl2sitVw0A0YQqcY5AhtNJkpCM%2BdU2%2FrtePLhKcMTY3%2F4cpjFDDIqau3UXARA8WLrEXtKmxJTJVkLhVRe1M%2BUOs3Z%2BoxzZGC0h4WIF8mu97O%2FFxu94evLWHwnjnlTclpmszU6YcB5o%2F5HXhWP1B9p1Bz3THXUe68coDU0tVDwABizScFNxCWFgSpaiZ%2FOY2wYoOEbddgdPQjWH9fLfU1AA1OCbWjFs1pAPFl%2BnNyy38GTFAPYxolsomowmvn27Odgn5ewgbYP2goYnYXRmYcYfTQzD8QMGu6B0cVPZF3tLTX96TRobTJB8Hso84UuhgzfgzINoSLGmBhi%2BlaUC0FTCtgcbBBjqkAQkqqNZidQRzoUcTgVDSc52dP758fbSKR3BJEwNZUzCPFvu8oLNv%2Bpa23rdZmgpS6YRvEgQF84oNAaJ33eSbjxAk84OqZ6YnIfS7cD9Qi2W0C1xe9gSyHk8pnEQzylXPpIQRRMJjaMh0wFrgVG%2B4QDYt6QntedLoaCRtMoMT5TT7usePSKJhqk7jmTeGPjzfU%2FVrWSkpUXneFByRoeoULnHMoUBp&X-Amz-Signature=4738661ddab76fe5873b5820890590466b8ad35ce3a3b9011a6f9cb9898e0dce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FFYCO5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDoyilGJ9C3m6n6fSiVmD%2FRrPWRGY0qW0fkt4vDFZLmSgIhAIxdIijYNHQVMLlRvqfTFO73nd0J3APU5M97TYtlD0AUKv8DCBEQABoMNjM3NDIzMTgzODA1IgyM%2Fz8hQhDQwHmKoAAq3ANMCgc%2Bz5KmYAZDe47iA6ndkmjvrQmBbsTuEcz4w5x5tkIF28L6%2F6%2BuV40ysdCDB7CzHLkBOxlpNxryEsCoVIuZd70YZBFmvudbWuXGyOr%2BsVI9U7hCYONLNWz0UdlWxlIfyOqhqrr90IbUcUiEtMQR2yVlGTbs4oL3qNAkimsMlTWCuJPxW%2FodvegUleJG0qZNRjW75I4B%2FM1KE%2BeAMDd%2BIgPDC%2BUUI2qvlF8pcrGzaMWBLxCJmaCqS0uMNVKy%2FhP%2FMYTmVo9FsNsPbGZQw6grvQjhiwcDKt6kI2AFHgl2sitVw0A0YQqcY5AhtNJkpCM%2BdU2%2FrtePLhKcMTY3%2F4cpjFDDIqau3UXARA8WLrEXtKmxJTJVkLhVRe1M%2BUOs3Z%2BoxzZGC0h4WIF8mu97O%2FFxu94evLWHwnjnlTclpmszU6YcB5o%2F5HXhWP1B9p1Bz3THXUe68coDU0tVDwABizScFNxCWFgSpaiZ%2FOY2wYoOEbddgdPQjWH9fLfU1AA1OCbWjFs1pAPFl%2BnNyy38GTFAPYxolsomowmvn27Odgn5ewgbYP2goYnYXRmYcYfTQzD8QMGu6B0cVPZF3tLTX96TRobTJB8Hso84UuhgzfgzINoSLGmBhi%2BlaUC0FTCtgcbBBjqkAQkqqNZidQRzoUcTgVDSc52dP758fbSKR3BJEwNZUzCPFvu8oLNv%2Bpa23rdZmgpS6YRvEgQF84oNAaJ33eSbjxAk84OqZ6YnIfS7cD9Qi2W0C1xe9gSyHk8pnEQzylXPpIQRRMJjaMh0wFrgVG%2B4QDYt6QntedLoaCRtMoMT5TT7usePSKJhqk7jmTeGPjzfU%2FVrWSkpUXneFByRoeoULnHMoUBp&X-Amz-Signature=34eec4fff16949aff9420e0d276592a79cf8ade51a2f22f734002c5e24ce4c39&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FFYCO5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDoyilGJ9C3m6n6fSiVmD%2FRrPWRGY0qW0fkt4vDFZLmSgIhAIxdIijYNHQVMLlRvqfTFO73nd0J3APU5M97TYtlD0AUKv8DCBEQABoMNjM3NDIzMTgzODA1IgyM%2Fz8hQhDQwHmKoAAq3ANMCgc%2Bz5KmYAZDe47iA6ndkmjvrQmBbsTuEcz4w5x5tkIF28L6%2F6%2BuV40ysdCDB7CzHLkBOxlpNxryEsCoVIuZd70YZBFmvudbWuXGyOr%2BsVI9U7hCYONLNWz0UdlWxlIfyOqhqrr90IbUcUiEtMQR2yVlGTbs4oL3qNAkimsMlTWCuJPxW%2FodvegUleJG0qZNRjW75I4B%2FM1KE%2BeAMDd%2BIgPDC%2BUUI2qvlF8pcrGzaMWBLxCJmaCqS0uMNVKy%2FhP%2FMYTmVo9FsNsPbGZQw6grvQjhiwcDKt6kI2AFHgl2sitVw0A0YQqcY5AhtNJkpCM%2BdU2%2FrtePLhKcMTY3%2F4cpjFDDIqau3UXARA8WLrEXtKmxJTJVkLhVRe1M%2BUOs3Z%2BoxzZGC0h4WIF8mu97O%2FFxu94evLWHwnjnlTclpmszU6YcB5o%2F5HXhWP1B9p1Bz3THXUe68coDU0tVDwABizScFNxCWFgSpaiZ%2FOY2wYoOEbddgdPQjWH9fLfU1AA1OCbWjFs1pAPFl%2BnNyy38GTFAPYxolsomowmvn27Odgn5ewgbYP2goYnYXRmYcYfTQzD8QMGu6B0cVPZF3tLTX96TRobTJB8Hso84UuhgzfgzINoSLGmBhi%2BlaUC0FTCtgcbBBjqkAQkqqNZidQRzoUcTgVDSc52dP758fbSKR3BJEwNZUzCPFvu8oLNv%2Bpa23rdZmgpS6YRvEgQF84oNAaJ33eSbjxAk84OqZ6YnIfS7cD9Qi2W0C1xe9gSyHk8pnEQzylXPpIQRRMJjaMh0wFrgVG%2B4QDYt6QntedLoaCRtMoMT5TT7usePSKJhqk7jmTeGPjzfU%2FVrWSkpUXneFByRoeoULnHMoUBp&X-Amz-Signature=9421eb9580eb722b9b1c3802cb5743da8078b91bbed5548ee3bc6f343847e0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FFYCO5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDoyilGJ9C3m6n6fSiVmD%2FRrPWRGY0qW0fkt4vDFZLmSgIhAIxdIijYNHQVMLlRvqfTFO73nd0J3APU5M97TYtlD0AUKv8DCBEQABoMNjM3NDIzMTgzODA1IgyM%2Fz8hQhDQwHmKoAAq3ANMCgc%2Bz5KmYAZDe47iA6ndkmjvrQmBbsTuEcz4w5x5tkIF28L6%2F6%2BuV40ysdCDB7CzHLkBOxlpNxryEsCoVIuZd70YZBFmvudbWuXGyOr%2BsVI9U7hCYONLNWz0UdlWxlIfyOqhqrr90IbUcUiEtMQR2yVlGTbs4oL3qNAkimsMlTWCuJPxW%2FodvegUleJG0qZNRjW75I4B%2FM1KE%2BeAMDd%2BIgPDC%2BUUI2qvlF8pcrGzaMWBLxCJmaCqS0uMNVKy%2FhP%2FMYTmVo9FsNsPbGZQw6grvQjhiwcDKt6kI2AFHgl2sitVw0A0YQqcY5AhtNJkpCM%2BdU2%2FrtePLhKcMTY3%2F4cpjFDDIqau3UXARA8WLrEXtKmxJTJVkLhVRe1M%2BUOs3Z%2BoxzZGC0h4WIF8mu97O%2FFxu94evLWHwnjnlTclpmszU6YcB5o%2F5HXhWP1B9p1Bz3THXUe68coDU0tVDwABizScFNxCWFgSpaiZ%2FOY2wYoOEbddgdPQjWH9fLfU1AA1OCbWjFs1pAPFl%2BnNyy38GTFAPYxolsomowmvn27Odgn5ewgbYP2goYnYXRmYcYfTQzD8QMGu6B0cVPZF3tLTX96TRobTJB8Hso84UuhgzfgzINoSLGmBhi%2BlaUC0FTCtgcbBBjqkAQkqqNZidQRzoUcTgVDSc52dP758fbSKR3BJEwNZUzCPFvu8oLNv%2Bpa23rdZmgpS6YRvEgQF84oNAaJ33eSbjxAk84OqZ6YnIfS7cD9Qi2W0C1xe9gSyHk8pnEQzylXPpIQRRMJjaMh0wFrgVG%2B4QDYt6QntedLoaCRtMoMT5TT7usePSKJhqk7jmTeGPjzfU%2FVrWSkpUXneFByRoeoULnHMoUBp&X-Amz-Signature=7cf262e0c5ac8186a78c9901c00527206986e4e68c09c648dc9421aab49a314f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
