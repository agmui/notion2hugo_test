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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNTAUDB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3YNo1KbFtw0awcIC3M9ZZQRArnPCf9gkOx1q11QGk%2BAiEA56aysp6%2BeZ0buDQ1z9xvNYhOPWB%2B2sZGdptrxJ6aUUcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQpHj3CLLikGRPNfSrcAyoytE3%2BpNd5JmZgKbCR3xlNV2KivgNTiHj7S62nj8qNomq9U5yVQBea%2BRf%2B3VPhrnWQqlnJ0KY4JahdnbYMb9XqUZZ0W9aSENH8SUV9do6DpxgFYNHZPFTENMJrz1sXvqUhcgtTKMuHeqhZNHVat5t6GBn0z0WhSKBGQGJAAJWAgLV2Ii%2FV5R%2FBHvPtSsl%2FH8IsTEpYcA%2BIQw7Z2z5stDz9lZ1b%2FXQMLc%2FjLnZC6Y5epXx3Gh4PyoZbmEm8w3rv7sLXrWAuS1QDDuYHL31HmvgX2JFuFtzPsmoJnQ3GjWT7uvCg4UbAngV6PxJkpSjcNFdFOqh4p5QEdbIFUQKXRpf8IajoxVx9IGjbLPVDlADFfaVxFbi%2BY2hnioBuCHL5JptduErezL3xQx0t1jzSAIpsxqcZYfkXqB3I0VWZ0KsXJ76zov8p8bRkLOEjrsQ38ydUzaU40rUEr5h9DRiJloDFxW5kfBfxwP11c1tCybDbECfCqFgwIoCb%2BnBbFQd6q%2FQyblJ36ndlVsX6eT2a%2FnTa10hIUDqNyF6u6QUg%2BMhub32usc0uC4JF1pBLQTj3tUAODu4Y8i2ePa2mXHdvTwEfS37iedsLr1xPs5huTE9%2FkZRSJu%2FtoptrHifLMNPKn74GOqUBpOXv3Mso0TbhHvGuOyHIid7C0O8RlXIYkH%2BSirD%2Fb0pUqBylBQYk20Kdj7kdU2s3kHNZbmYMXNCTgTA8qhZmv5eS0p%2FOlo8GNCXWFUc8pK50heMKOZs2gEG1J3XL82LGGyZoLx1Q4Dl52dgmdwmsQfdalHlYWzpJBwOurpFy%2BL4vU8Ur4TT0iy3R3a1xBtK2cEPX4paOaevr78tPxn6SjWeaCtF6&X-Amz-Signature=25f3c964872a5f57e97986999704ad7bbbe7160d29461956099ccbaf463da46e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNTAUDB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3YNo1KbFtw0awcIC3M9ZZQRArnPCf9gkOx1q11QGk%2BAiEA56aysp6%2BeZ0buDQ1z9xvNYhOPWB%2B2sZGdptrxJ6aUUcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQpHj3CLLikGRPNfSrcAyoytE3%2BpNd5JmZgKbCR3xlNV2KivgNTiHj7S62nj8qNomq9U5yVQBea%2BRf%2B3VPhrnWQqlnJ0KY4JahdnbYMb9XqUZZ0W9aSENH8SUV9do6DpxgFYNHZPFTENMJrz1sXvqUhcgtTKMuHeqhZNHVat5t6GBn0z0WhSKBGQGJAAJWAgLV2Ii%2FV5R%2FBHvPtSsl%2FH8IsTEpYcA%2BIQw7Z2z5stDz9lZ1b%2FXQMLc%2FjLnZC6Y5epXx3Gh4PyoZbmEm8w3rv7sLXrWAuS1QDDuYHL31HmvgX2JFuFtzPsmoJnQ3GjWT7uvCg4UbAngV6PxJkpSjcNFdFOqh4p5QEdbIFUQKXRpf8IajoxVx9IGjbLPVDlADFfaVxFbi%2BY2hnioBuCHL5JptduErezL3xQx0t1jzSAIpsxqcZYfkXqB3I0VWZ0KsXJ76zov8p8bRkLOEjrsQ38ydUzaU40rUEr5h9DRiJloDFxW5kfBfxwP11c1tCybDbECfCqFgwIoCb%2BnBbFQd6q%2FQyblJ36ndlVsX6eT2a%2FnTa10hIUDqNyF6u6QUg%2BMhub32usc0uC4JF1pBLQTj3tUAODu4Y8i2ePa2mXHdvTwEfS37iedsLr1xPs5huTE9%2FkZRSJu%2FtoptrHifLMNPKn74GOqUBpOXv3Mso0TbhHvGuOyHIid7C0O8RlXIYkH%2BSirD%2Fb0pUqBylBQYk20Kdj7kdU2s3kHNZbmYMXNCTgTA8qhZmv5eS0p%2FOlo8GNCXWFUc8pK50heMKOZs2gEG1J3XL82LGGyZoLx1Q4Dl52dgmdwmsQfdalHlYWzpJBwOurpFy%2BL4vU8Ur4TT0iy3R3a1xBtK2cEPX4paOaevr78tPxn6SjWeaCtF6&X-Amz-Signature=293f773fc5bd46b1cd1ffc1ae99b0375f58d63ba42d379230996b9bd5b778e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNTAUDB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3YNo1KbFtw0awcIC3M9ZZQRArnPCf9gkOx1q11QGk%2BAiEA56aysp6%2BeZ0buDQ1z9xvNYhOPWB%2B2sZGdptrxJ6aUUcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQpHj3CLLikGRPNfSrcAyoytE3%2BpNd5JmZgKbCR3xlNV2KivgNTiHj7S62nj8qNomq9U5yVQBea%2BRf%2B3VPhrnWQqlnJ0KY4JahdnbYMb9XqUZZ0W9aSENH8SUV9do6DpxgFYNHZPFTENMJrz1sXvqUhcgtTKMuHeqhZNHVat5t6GBn0z0WhSKBGQGJAAJWAgLV2Ii%2FV5R%2FBHvPtSsl%2FH8IsTEpYcA%2BIQw7Z2z5stDz9lZ1b%2FXQMLc%2FjLnZC6Y5epXx3Gh4PyoZbmEm8w3rv7sLXrWAuS1QDDuYHL31HmvgX2JFuFtzPsmoJnQ3GjWT7uvCg4UbAngV6PxJkpSjcNFdFOqh4p5QEdbIFUQKXRpf8IajoxVx9IGjbLPVDlADFfaVxFbi%2BY2hnioBuCHL5JptduErezL3xQx0t1jzSAIpsxqcZYfkXqB3I0VWZ0KsXJ76zov8p8bRkLOEjrsQ38ydUzaU40rUEr5h9DRiJloDFxW5kfBfxwP11c1tCybDbECfCqFgwIoCb%2BnBbFQd6q%2FQyblJ36ndlVsX6eT2a%2FnTa10hIUDqNyF6u6QUg%2BMhub32usc0uC4JF1pBLQTj3tUAODu4Y8i2ePa2mXHdvTwEfS37iedsLr1xPs5huTE9%2FkZRSJu%2FtoptrHifLMNPKn74GOqUBpOXv3Mso0TbhHvGuOyHIid7C0O8RlXIYkH%2BSirD%2Fb0pUqBylBQYk20Kdj7kdU2s3kHNZbmYMXNCTgTA8qhZmv5eS0p%2FOlo8GNCXWFUc8pK50heMKOZs2gEG1J3XL82LGGyZoLx1Q4Dl52dgmdwmsQfdalHlYWzpJBwOurpFy%2BL4vU8Ur4TT0iy3R3a1xBtK2cEPX4paOaevr78tPxn6SjWeaCtF6&X-Amz-Signature=859ca118eedccfdfbb3d9c51dcfb413744212ccb2372376ffd9d95034cc65723&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNTAUDB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3YNo1KbFtw0awcIC3M9ZZQRArnPCf9gkOx1q11QGk%2BAiEA56aysp6%2BeZ0buDQ1z9xvNYhOPWB%2B2sZGdptrxJ6aUUcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQpHj3CLLikGRPNfSrcAyoytE3%2BpNd5JmZgKbCR3xlNV2KivgNTiHj7S62nj8qNomq9U5yVQBea%2BRf%2B3VPhrnWQqlnJ0KY4JahdnbYMb9XqUZZ0W9aSENH8SUV9do6DpxgFYNHZPFTENMJrz1sXvqUhcgtTKMuHeqhZNHVat5t6GBn0z0WhSKBGQGJAAJWAgLV2Ii%2FV5R%2FBHvPtSsl%2FH8IsTEpYcA%2BIQw7Z2z5stDz9lZ1b%2FXQMLc%2FjLnZC6Y5epXx3Gh4PyoZbmEm8w3rv7sLXrWAuS1QDDuYHL31HmvgX2JFuFtzPsmoJnQ3GjWT7uvCg4UbAngV6PxJkpSjcNFdFOqh4p5QEdbIFUQKXRpf8IajoxVx9IGjbLPVDlADFfaVxFbi%2BY2hnioBuCHL5JptduErezL3xQx0t1jzSAIpsxqcZYfkXqB3I0VWZ0KsXJ76zov8p8bRkLOEjrsQ38ydUzaU40rUEr5h9DRiJloDFxW5kfBfxwP11c1tCybDbECfCqFgwIoCb%2BnBbFQd6q%2FQyblJ36ndlVsX6eT2a%2FnTa10hIUDqNyF6u6QUg%2BMhub32usc0uC4JF1pBLQTj3tUAODu4Y8i2ePa2mXHdvTwEfS37iedsLr1xPs5huTE9%2FkZRSJu%2FtoptrHifLMNPKn74GOqUBpOXv3Mso0TbhHvGuOyHIid7C0O8RlXIYkH%2BSirD%2Fb0pUqBylBQYk20Kdj7kdU2s3kHNZbmYMXNCTgTA8qhZmv5eS0p%2FOlo8GNCXWFUc8pK50heMKOZs2gEG1J3XL82LGGyZoLx1Q4Dl52dgmdwmsQfdalHlYWzpJBwOurpFy%2BL4vU8Ur4TT0iy3R3a1xBtK2cEPX4paOaevr78tPxn6SjWeaCtF6&X-Amz-Signature=509ebc2d884cfbcbd815dd4a781d945445ba2fa61e78cb95ae373cf9d9dd4206&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNTAUDB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3YNo1KbFtw0awcIC3M9ZZQRArnPCf9gkOx1q11QGk%2BAiEA56aysp6%2BeZ0buDQ1z9xvNYhOPWB%2B2sZGdptrxJ6aUUcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQpHj3CLLikGRPNfSrcAyoytE3%2BpNd5JmZgKbCR3xlNV2KivgNTiHj7S62nj8qNomq9U5yVQBea%2BRf%2B3VPhrnWQqlnJ0KY4JahdnbYMb9XqUZZ0W9aSENH8SUV9do6DpxgFYNHZPFTENMJrz1sXvqUhcgtTKMuHeqhZNHVat5t6GBn0z0WhSKBGQGJAAJWAgLV2Ii%2FV5R%2FBHvPtSsl%2FH8IsTEpYcA%2BIQw7Z2z5stDz9lZ1b%2FXQMLc%2FjLnZC6Y5epXx3Gh4PyoZbmEm8w3rv7sLXrWAuS1QDDuYHL31HmvgX2JFuFtzPsmoJnQ3GjWT7uvCg4UbAngV6PxJkpSjcNFdFOqh4p5QEdbIFUQKXRpf8IajoxVx9IGjbLPVDlADFfaVxFbi%2BY2hnioBuCHL5JptduErezL3xQx0t1jzSAIpsxqcZYfkXqB3I0VWZ0KsXJ76zov8p8bRkLOEjrsQ38ydUzaU40rUEr5h9DRiJloDFxW5kfBfxwP11c1tCybDbECfCqFgwIoCb%2BnBbFQd6q%2FQyblJ36ndlVsX6eT2a%2FnTa10hIUDqNyF6u6QUg%2BMhub32usc0uC4JF1pBLQTj3tUAODu4Y8i2ePa2mXHdvTwEfS37iedsLr1xPs5huTE9%2FkZRSJu%2FtoptrHifLMNPKn74GOqUBpOXv3Mso0TbhHvGuOyHIid7C0O8RlXIYkH%2BSirD%2Fb0pUqBylBQYk20Kdj7kdU2s3kHNZbmYMXNCTgTA8qhZmv5eS0p%2FOlo8GNCXWFUc8pK50heMKOZs2gEG1J3XL82LGGyZoLx1Q4Dl52dgmdwmsQfdalHlYWzpJBwOurpFy%2BL4vU8Ur4TT0iy3R3a1xBtK2cEPX4paOaevr78tPxn6SjWeaCtF6&X-Amz-Signature=035807846b527dad1a0a6db2141ad65cfffbc0ad59dac9064ac23a50d6e8b015&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
