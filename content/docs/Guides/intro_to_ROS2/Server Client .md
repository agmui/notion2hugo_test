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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHFPWYN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx1k%2FYf16CwbhtFTx5UCHTIqR0D8SGegTkR%2BQhnTpFlAiAmO55EEfBYy2AXMF35jvYkrGHExOthDWDFLidE4PpADCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMrvFiY%2BY6gmVbBAhuKtwDKZ%2Fh%2FPEeomVbvDO5PM3s4XoFEVJHKZj%2BEcFVRMXOfWjsxsajbAT33rHXT6TdjzF%2FJIpH5d5WA3zE6pGie%2BIGBWfIhyvTZkcvIW%2F73Q4aVXRxW%2B7L8xh1cfOEBXD3qy5%2BA%2BuOfpXtotXJ%2BjX736fZsI3%2FzM%2FEzyH%2FAFxij3mBTSwJ2bGjezjXaIPWe74PA2X41Kgcp0nEe%2Fj7Ww5CgA0sYqR2R7PQCB%2Fvu%2F4vqbpTTviQ1OKukEvzK5FUxG4UofiR62AMyphCp8iC0M8NApUgN5THERMMFkOB41RjhVyoAsdsV9uEs1%2F8TqrRFU18rcd%2BaY0WRY84Ut0y5tszl9Zl9QupLm1YXao0VKnsqcgv7BSOmSKe%2BrvrHFEm6JajWnc%2FX3DSVewozMoeq8KBx2bjU5se0gYbJcyxaOJbCoGMFdgZ0FnGxcXJYsjmhAoAQ89vixNSsoGccEGhMVG66te6rgWVI0mtgwY0P3zC7xh7%2BNzZhvcwVIwoOSzT8L1Gult2h7l6Y6SR00NI0198PFHXHGBPM3Z5%2BlBf226RAohaYWEXeeyCjPrRsRFFscFPdekNv1S3gzEqItbtfw2C71jxPzvQXvPKyXYcw1POP8n%2FyUVy8%2BhGfbuUnHi%2B7pYwnIPtvQY6pgF6C8A3kQoXakwNgYTPYRRqp%2BEoupb5THap5IeRAGAGaRGY0aAIQb6lPHqF5n0Vv%2BVq1tt%2B5mTkMN5FleaKkH0jtu2kAyV33bK1r6jnzkagcT7oY2UgZHljV1Xr1x5wN5BF3MjOqE8Kpv%2F2LYeVA9eXcJcw21awB7ymmpk59Ii8IJ29X7CBmpJaJRgri9HunzwJAYZJTjniVJGrlLp75X%2FuuGYp1JIN&X-Amz-Signature=621c6381c5cbca800b2c201cc8ee40114c8f8d6795987f95128906ad360482cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHFPWYN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx1k%2FYf16CwbhtFTx5UCHTIqR0D8SGegTkR%2BQhnTpFlAiAmO55EEfBYy2AXMF35jvYkrGHExOthDWDFLidE4PpADCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMrvFiY%2BY6gmVbBAhuKtwDKZ%2Fh%2FPEeomVbvDO5PM3s4XoFEVJHKZj%2BEcFVRMXOfWjsxsajbAT33rHXT6TdjzF%2FJIpH5d5WA3zE6pGie%2BIGBWfIhyvTZkcvIW%2F73Q4aVXRxW%2B7L8xh1cfOEBXD3qy5%2BA%2BuOfpXtotXJ%2BjX736fZsI3%2FzM%2FEzyH%2FAFxij3mBTSwJ2bGjezjXaIPWe74PA2X41Kgcp0nEe%2Fj7Ww5CgA0sYqR2R7PQCB%2Fvu%2F4vqbpTTviQ1OKukEvzK5FUxG4UofiR62AMyphCp8iC0M8NApUgN5THERMMFkOB41RjhVyoAsdsV9uEs1%2F8TqrRFU18rcd%2BaY0WRY84Ut0y5tszl9Zl9QupLm1YXao0VKnsqcgv7BSOmSKe%2BrvrHFEm6JajWnc%2FX3DSVewozMoeq8KBx2bjU5se0gYbJcyxaOJbCoGMFdgZ0FnGxcXJYsjmhAoAQ89vixNSsoGccEGhMVG66te6rgWVI0mtgwY0P3zC7xh7%2BNzZhvcwVIwoOSzT8L1Gult2h7l6Y6SR00NI0198PFHXHGBPM3Z5%2BlBf226RAohaYWEXeeyCjPrRsRFFscFPdekNv1S3gzEqItbtfw2C71jxPzvQXvPKyXYcw1POP8n%2FyUVy8%2BhGfbuUnHi%2B7pYwnIPtvQY6pgF6C8A3kQoXakwNgYTPYRRqp%2BEoupb5THap5IeRAGAGaRGY0aAIQb6lPHqF5n0Vv%2BVq1tt%2B5mTkMN5FleaKkH0jtu2kAyV33bK1r6jnzkagcT7oY2UgZHljV1Xr1x5wN5BF3MjOqE8Kpv%2F2LYeVA9eXcJcw21awB7ymmpk59Ii8IJ29X7CBmpJaJRgri9HunzwJAYZJTjniVJGrlLp75X%2FuuGYp1JIN&X-Amz-Signature=8826784125a855a6ce35f5393be19c148b38e423428a0a9d639ddf57d1aa9420&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHFPWYN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx1k%2FYf16CwbhtFTx5UCHTIqR0D8SGegTkR%2BQhnTpFlAiAmO55EEfBYy2AXMF35jvYkrGHExOthDWDFLidE4PpADCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMrvFiY%2BY6gmVbBAhuKtwDKZ%2Fh%2FPEeomVbvDO5PM3s4XoFEVJHKZj%2BEcFVRMXOfWjsxsajbAT33rHXT6TdjzF%2FJIpH5d5WA3zE6pGie%2BIGBWfIhyvTZkcvIW%2F73Q4aVXRxW%2B7L8xh1cfOEBXD3qy5%2BA%2BuOfpXtotXJ%2BjX736fZsI3%2FzM%2FEzyH%2FAFxij3mBTSwJ2bGjezjXaIPWe74PA2X41Kgcp0nEe%2Fj7Ww5CgA0sYqR2R7PQCB%2Fvu%2F4vqbpTTviQ1OKukEvzK5FUxG4UofiR62AMyphCp8iC0M8NApUgN5THERMMFkOB41RjhVyoAsdsV9uEs1%2F8TqrRFU18rcd%2BaY0WRY84Ut0y5tszl9Zl9QupLm1YXao0VKnsqcgv7BSOmSKe%2BrvrHFEm6JajWnc%2FX3DSVewozMoeq8KBx2bjU5se0gYbJcyxaOJbCoGMFdgZ0FnGxcXJYsjmhAoAQ89vixNSsoGccEGhMVG66te6rgWVI0mtgwY0P3zC7xh7%2BNzZhvcwVIwoOSzT8L1Gult2h7l6Y6SR00NI0198PFHXHGBPM3Z5%2BlBf226RAohaYWEXeeyCjPrRsRFFscFPdekNv1S3gzEqItbtfw2C71jxPzvQXvPKyXYcw1POP8n%2FyUVy8%2BhGfbuUnHi%2B7pYwnIPtvQY6pgF6C8A3kQoXakwNgYTPYRRqp%2BEoupb5THap5IeRAGAGaRGY0aAIQb6lPHqF5n0Vv%2BVq1tt%2B5mTkMN5FleaKkH0jtu2kAyV33bK1r6jnzkagcT7oY2UgZHljV1Xr1x5wN5BF3MjOqE8Kpv%2F2LYeVA9eXcJcw21awB7ymmpk59Ii8IJ29X7CBmpJaJRgri9HunzwJAYZJTjniVJGrlLp75X%2FuuGYp1JIN&X-Amz-Signature=1490628556e7f62587c7975b6b4e60f687ab220f3edcb3cff3cec7f2c5e86c22&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHFPWYN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx1k%2FYf16CwbhtFTx5UCHTIqR0D8SGegTkR%2BQhnTpFlAiAmO55EEfBYy2AXMF35jvYkrGHExOthDWDFLidE4PpADCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMrvFiY%2BY6gmVbBAhuKtwDKZ%2Fh%2FPEeomVbvDO5PM3s4XoFEVJHKZj%2BEcFVRMXOfWjsxsajbAT33rHXT6TdjzF%2FJIpH5d5WA3zE6pGie%2BIGBWfIhyvTZkcvIW%2F73Q4aVXRxW%2B7L8xh1cfOEBXD3qy5%2BA%2BuOfpXtotXJ%2BjX736fZsI3%2FzM%2FEzyH%2FAFxij3mBTSwJ2bGjezjXaIPWe74PA2X41Kgcp0nEe%2Fj7Ww5CgA0sYqR2R7PQCB%2Fvu%2F4vqbpTTviQ1OKukEvzK5FUxG4UofiR62AMyphCp8iC0M8NApUgN5THERMMFkOB41RjhVyoAsdsV9uEs1%2F8TqrRFU18rcd%2BaY0WRY84Ut0y5tszl9Zl9QupLm1YXao0VKnsqcgv7BSOmSKe%2BrvrHFEm6JajWnc%2FX3DSVewozMoeq8KBx2bjU5se0gYbJcyxaOJbCoGMFdgZ0FnGxcXJYsjmhAoAQ89vixNSsoGccEGhMVG66te6rgWVI0mtgwY0P3zC7xh7%2BNzZhvcwVIwoOSzT8L1Gult2h7l6Y6SR00NI0198PFHXHGBPM3Z5%2BlBf226RAohaYWEXeeyCjPrRsRFFscFPdekNv1S3gzEqItbtfw2C71jxPzvQXvPKyXYcw1POP8n%2FyUVy8%2BhGfbuUnHi%2B7pYwnIPtvQY6pgF6C8A3kQoXakwNgYTPYRRqp%2BEoupb5THap5IeRAGAGaRGY0aAIQb6lPHqF5n0Vv%2BVq1tt%2B5mTkMN5FleaKkH0jtu2kAyV33bK1r6jnzkagcT7oY2UgZHljV1Xr1x5wN5BF3MjOqE8Kpv%2F2LYeVA9eXcJcw21awB7ymmpk59Ii8IJ29X7CBmpJaJRgri9HunzwJAYZJTjniVJGrlLp75X%2FuuGYp1JIN&X-Amz-Signature=96fb7b3119b44f51597d087893b6a5593b7267890d478ad942ecfac8506de9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHFPWYN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx1k%2FYf16CwbhtFTx5UCHTIqR0D8SGegTkR%2BQhnTpFlAiAmO55EEfBYy2AXMF35jvYkrGHExOthDWDFLidE4PpADCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMrvFiY%2BY6gmVbBAhuKtwDKZ%2Fh%2FPEeomVbvDO5PM3s4XoFEVJHKZj%2BEcFVRMXOfWjsxsajbAT33rHXT6TdjzF%2FJIpH5d5WA3zE6pGie%2BIGBWfIhyvTZkcvIW%2F73Q4aVXRxW%2B7L8xh1cfOEBXD3qy5%2BA%2BuOfpXtotXJ%2BjX736fZsI3%2FzM%2FEzyH%2FAFxij3mBTSwJ2bGjezjXaIPWe74PA2X41Kgcp0nEe%2Fj7Ww5CgA0sYqR2R7PQCB%2Fvu%2F4vqbpTTviQ1OKukEvzK5FUxG4UofiR62AMyphCp8iC0M8NApUgN5THERMMFkOB41RjhVyoAsdsV9uEs1%2F8TqrRFU18rcd%2BaY0WRY84Ut0y5tszl9Zl9QupLm1YXao0VKnsqcgv7BSOmSKe%2BrvrHFEm6JajWnc%2FX3DSVewozMoeq8KBx2bjU5se0gYbJcyxaOJbCoGMFdgZ0FnGxcXJYsjmhAoAQ89vixNSsoGccEGhMVG66te6rgWVI0mtgwY0P3zC7xh7%2BNzZhvcwVIwoOSzT8L1Gult2h7l6Y6SR00NI0198PFHXHGBPM3Z5%2BlBf226RAohaYWEXeeyCjPrRsRFFscFPdekNv1S3gzEqItbtfw2C71jxPzvQXvPKyXYcw1POP8n%2FyUVy8%2BhGfbuUnHi%2B7pYwnIPtvQY6pgF6C8A3kQoXakwNgYTPYRRqp%2BEoupb5THap5IeRAGAGaRGY0aAIQb6lPHqF5n0Vv%2BVq1tt%2B5mTkMN5FleaKkH0jtu2kAyV33bK1r6jnzkagcT7oY2UgZHljV1Xr1x5wN5BF3MjOqE8Kpv%2F2LYeVA9eXcJcw21awB7ymmpk59Ii8IJ29X7CBmpJaJRgri9HunzwJAYZJTjniVJGrlLp75X%2FuuGYp1JIN&X-Amz-Signature=5fbec895bb92a8f69c969b39fce91944d13d446fb2bff16232a1ddf8d4e7d758&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
