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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7K4U43%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIG8WuCIDV4bygmcygp2pBObFy2979dO%2Fszd0GNrcyA4EAiEAt3RNa%2F3Qo3PWRqearfYYFSD6Vx%2BmyoMO1j%2BSGUrWMuMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuie6k1oEYiZL%2FnIyrcAy%2BbpPtvBlV7OtPUE2SprwKN4kz8ZXnq5sxIxk5yKT7aP9ssXoYZ7XyS5gapTdB2Obew%2BcqpuaATmXANW1rnSJWGlf97TkB0m%2B%2BZbDDlvNrWlUTNkmstnbgk5Lr8Kz1TGd%2BNlYVKYYSi98ZzRoj5%2F6rNow4NKeJfxEHQ1ld1REuxy%2FIqWHpbb%2FEpj4d38atLM4%2FJEbyUoo1Fj1oJ7xu9EuuvZb6PjnvQCiqch8kvoNZZXaqO8PrItwZehCdQslYmtgpbfOTS4dSs1NM0IzffBbMa6wh6HYPjd6wVtOcHazTVWXvlD7%2FWqtD3ykkeHViW2YPi5yem4q5mqOv3ik4x6Dves4SKN2wTIY3QxOVgf5NC497ILrUDNUXl%2BF3LPbv4%2BFUwAA6EFe%2FmAruBLk61W7XwnlUrU%2Bfgcpl1Cd6fpR5rGLfvZU%2Fg7XCFQ%2BUlhpmLcaRNEHHv4ZvZ97SEO8dtqU6TwjeEPSMCcTg43fSW1voHXEEK7StQsQ7VzJ80cClrQcjyV1AZaEW8Uj3tSkoIW4Wpy5s0fJ%2Fkimbz38YTwAajoy3gY0y%2Bhd1TWOtUffCJw3tvisshlFlH6qSN9S6QQy8%2F2k2c5BWVSQHQ1FmMUxnK6wz8%2FdYCmwwOjhYEMLvo%2BL4GOqUB1k8VkQWDQHkAIY%2FG%2BUZEoChw3wfA4YW5e9ZJr3evn%2F7Wc%2B3CAn1NBsc5%2BjPNOx4Yf%2FTYsHGJwSCnfBl2y38GwZ7GNNwXzlsgeTOaJ1xCQVmnqTiil3NP53pGkmM98zgx%2BPEQUPDQ0v8VtwImfBiOhglhcuZzjTRgv7%2B0c%2BNn%2FGByhHDFgDcq205ajJ5t213Qf4oimxPM90YsJpwZxumOiXaS435x&X-Amz-Signature=9c019c94d55afec9b30fd34287cefbb9cd06e03e806f008eb59e69ec568999c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7K4U43%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIG8WuCIDV4bygmcygp2pBObFy2979dO%2Fszd0GNrcyA4EAiEAt3RNa%2F3Qo3PWRqearfYYFSD6Vx%2BmyoMO1j%2BSGUrWMuMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuie6k1oEYiZL%2FnIyrcAy%2BbpPtvBlV7OtPUE2SprwKN4kz8ZXnq5sxIxk5yKT7aP9ssXoYZ7XyS5gapTdB2Obew%2BcqpuaATmXANW1rnSJWGlf97TkB0m%2B%2BZbDDlvNrWlUTNkmstnbgk5Lr8Kz1TGd%2BNlYVKYYSi98ZzRoj5%2F6rNow4NKeJfxEHQ1ld1REuxy%2FIqWHpbb%2FEpj4d38atLM4%2FJEbyUoo1Fj1oJ7xu9EuuvZb6PjnvQCiqch8kvoNZZXaqO8PrItwZehCdQslYmtgpbfOTS4dSs1NM0IzffBbMa6wh6HYPjd6wVtOcHazTVWXvlD7%2FWqtD3ykkeHViW2YPi5yem4q5mqOv3ik4x6Dves4SKN2wTIY3QxOVgf5NC497ILrUDNUXl%2BF3LPbv4%2BFUwAA6EFe%2FmAruBLk61W7XwnlUrU%2Bfgcpl1Cd6fpR5rGLfvZU%2Fg7XCFQ%2BUlhpmLcaRNEHHv4ZvZ97SEO8dtqU6TwjeEPSMCcTg43fSW1voHXEEK7StQsQ7VzJ80cClrQcjyV1AZaEW8Uj3tSkoIW4Wpy5s0fJ%2Fkimbz38YTwAajoy3gY0y%2Bhd1TWOtUffCJw3tvisshlFlH6qSN9S6QQy8%2F2k2c5BWVSQHQ1FmMUxnK6wz8%2FdYCmwwOjhYEMLvo%2BL4GOqUB1k8VkQWDQHkAIY%2FG%2BUZEoChw3wfA4YW5e9ZJr3evn%2F7Wc%2B3CAn1NBsc5%2BjPNOx4Yf%2FTYsHGJwSCnfBl2y38GwZ7GNNwXzlsgeTOaJ1xCQVmnqTiil3NP53pGkmM98zgx%2BPEQUPDQ0v8VtwImfBiOhglhcuZzjTRgv7%2B0c%2BNn%2FGByhHDFgDcq205ajJ5t213Qf4oimxPM90YsJpwZxumOiXaS435x&X-Amz-Signature=497c7cba8c7e5775f606ad03cd3131f1c99e375f617b77f2d9ba9e03cb8f7b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7K4U43%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIG8WuCIDV4bygmcygp2pBObFy2979dO%2Fszd0GNrcyA4EAiEAt3RNa%2F3Qo3PWRqearfYYFSD6Vx%2BmyoMO1j%2BSGUrWMuMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuie6k1oEYiZL%2FnIyrcAy%2BbpPtvBlV7OtPUE2SprwKN4kz8ZXnq5sxIxk5yKT7aP9ssXoYZ7XyS5gapTdB2Obew%2BcqpuaATmXANW1rnSJWGlf97TkB0m%2B%2BZbDDlvNrWlUTNkmstnbgk5Lr8Kz1TGd%2BNlYVKYYSi98ZzRoj5%2F6rNow4NKeJfxEHQ1ld1REuxy%2FIqWHpbb%2FEpj4d38atLM4%2FJEbyUoo1Fj1oJ7xu9EuuvZb6PjnvQCiqch8kvoNZZXaqO8PrItwZehCdQslYmtgpbfOTS4dSs1NM0IzffBbMa6wh6HYPjd6wVtOcHazTVWXvlD7%2FWqtD3ykkeHViW2YPi5yem4q5mqOv3ik4x6Dves4SKN2wTIY3QxOVgf5NC497ILrUDNUXl%2BF3LPbv4%2BFUwAA6EFe%2FmAruBLk61W7XwnlUrU%2Bfgcpl1Cd6fpR5rGLfvZU%2Fg7XCFQ%2BUlhpmLcaRNEHHv4ZvZ97SEO8dtqU6TwjeEPSMCcTg43fSW1voHXEEK7StQsQ7VzJ80cClrQcjyV1AZaEW8Uj3tSkoIW4Wpy5s0fJ%2Fkimbz38YTwAajoy3gY0y%2Bhd1TWOtUffCJw3tvisshlFlH6qSN9S6QQy8%2F2k2c5BWVSQHQ1FmMUxnK6wz8%2FdYCmwwOjhYEMLvo%2BL4GOqUB1k8VkQWDQHkAIY%2FG%2BUZEoChw3wfA4YW5e9ZJr3evn%2F7Wc%2B3CAn1NBsc5%2BjPNOx4Yf%2FTYsHGJwSCnfBl2y38GwZ7GNNwXzlsgeTOaJ1xCQVmnqTiil3NP53pGkmM98zgx%2BPEQUPDQ0v8VtwImfBiOhglhcuZzjTRgv7%2B0c%2BNn%2FGByhHDFgDcq205ajJ5t213Qf4oimxPM90YsJpwZxumOiXaS435x&X-Amz-Signature=2ee18cefd12555e078cb21900b99b4228bd750175ce367068244bb2427138716&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7K4U43%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIG8WuCIDV4bygmcygp2pBObFy2979dO%2Fszd0GNrcyA4EAiEAt3RNa%2F3Qo3PWRqearfYYFSD6Vx%2BmyoMO1j%2BSGUrWMuMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuie6k1oEYiZL%2FnIyrcAy%2BbpPtvBlV7OtPUE2SprwKN4kz8ZXnq5sxIxk5yKT7aP9ssXoYZ7XyS5gapTdB2Obew%2BcqpuaATmXANW1rnSJWGlf97TkB0m%2B%2BZbDDlvNrWlUTNkmstnbgk5Lr8Kz1TGd%2BNlYVKYYSi98ZzRoj5%2F6rNow4NKeJfxEHQ1ld1REuxy%2FIqWHpbb%2FEpj4d38atLM4%2FJEbyUoo1Fj1oJ7xu9EuuvZb6PjnvQCiqch8kvoNZZXaqO8PrItwZehCdQslYmtgpbfOTS4dSs1NM0IzffBbMa6wh6HYPjd6wVtOcHazTVWXvlD7%2FWqtD3ykkeHViW2YPi5yem4q5mqOv3ik4x6Dves4SKN2wTIY3QxOVgf5NC497ILrUDNUXl%2BF3LPbv4%2BFUwAA6EFe%2FmAruBLk61W7XwnlUrU%2Bfgcpl1Cd6fpR5rGLfvZU%2Fg7XCFQ%2BUlhpmLcaRNEHHv4ZvZ97SEO8dtqU6TwjeEPSMCcTg43fSW1voHXEEK7StQsQ7VzJ80cClrQcjyV1AZaEW8Uj3tSkoIW4Wpy5s0fJ%2Fkimbz38YTwAajoy3gY0y%2Bhd1TWOtUffCJw3tvisshlFlH6qSN9S6QQy8%2F2k2c5BWVSQHQ1FmMUxnK6wz8%2FdYCmwwOjhYEMLvo%2BL4GOqUB1k8VkQWDQHkAIY%2FG%2BUZEoChw3wfA4YW5e9ZJr3evn%2F7Wc%2B3CAn1NBsc5%2BjPNOx4Yf%2FTYsHGJwSCnfBl2y38GwZ7GNNwXzlsgeTOaJ1xCQVmnqTiil3NP53pGkmM98zgx%2BPEQUPDQ0v8VtwImfBiOhglhcuZzjTRgv7%2B0c%2BNn%2FGByhHDFgDcq205ajJ5t213Qf4oimxPM90YsJpwZxumOiXaS435x&X-Amz-Signature=9749d826f492245a8ce16a6f029e9cf2d5a4f4e1ab94e9f97ae39f77a52b32a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7K4U43%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIG8WuCIDV4bygmcygp2pBObFy2979dO%2Fszd0GNrcyA4EAiEAt3RNa%2F3Qo3PWRqearfYYFSD6Vx%2BmyoMO1j%2BSGUrWMuMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuie6k1oEYiZL%2FnIyrcAy%2BbpPtvBlV7OtPUE2SprwKN4kz8ZXnq5sxIxk5yKT7aP9ssXoYZ7XyS5gapTdB2Obew%2BcqpuaATmXANW1rnSJWGlf97TkB0m%2B%2BZbDDlvNrWlUTNkmstnbgk5Lr8Kz1TGd%2BNlYVKYYSi98ZzRoj5%2F6rNow4NKeJfxEHQ1ld1REuxy%2FIqWHpbb%2FEpj4d38atLM4%2FJEbyUoo1Fj1oJ7xu9EuuvZb6PjnvQCiqch8kvoNZZXaqO8PrItwZehCdQslYmtgpbfOTS4dSs1NM0IzffBbMa6wh6HYPjd6wVtOcHazTVWXvlD7%2FWqtD3ykkeHViW2YPi5yem4q5mqOv3ik4x6Dves4SKN2wTIY3QxOVgf5NC497ILrUDNUXl%2BF3LPbv4%2BFUwAA6EFe%2FmAruBLk61W7XwnlUrU%2Bfgcpl1Cd6fpR5rGLfvZU%2Fg7XCFQ%2BUlhpmLcaRNEHHv4ZvZ97SEO8dtqU6TwjeEPSMCcTg43fSW1voHXEEK7StQsQ7VzJ80cClrQcjyV1AZaEW8Uj3tSkoIW4Wpy5s0fJ%2Fkimbz38YTwAajoy3gY0y%2Bhd1TWOtUffCJw3tvisshlFlH6qSN9S6QQy8%2F2k2c5BWVSQHQ1FmMUxnK6wz8%2FdYCmwwOjhYEMLvo%2BL4GOqUB1k8VkQWDQHkAIY%2FG%2BUZEoChw3wfA4YW5e9ZJr3evn%2F7Wc%2B3CAn1NBsc5%2BjPNOx4Yf%2FTYsHGJwSCnfBl2y38GwZ7GNNwXzlsgeTOaJ1xCQVmnqTiil3NP53pGkmM98zgx%2BPEQUPDQ0v8VtwImfBiOhglhcuZzjTRgv7%2B0c%2BNn%2FGByhHDFgDcq205ajJ5t213Qf4oimxPM90YsJpwZxumOiXaS435x&X-Amz-Signature=06241ce34b2aa4d4cdbe596d232d5e51fdebd59cb2fe3577f195f99d460341fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
