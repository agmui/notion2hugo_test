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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BA57TE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD54wcK%2BXmJPtYY0J6Huwc%2Fwf8x0%2F0%2FunY6DlIEsaYQQQIgbuRZCTWG2yeJMeiYIJrb6F94FIctrth8%2FmGPCLLfRQ4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FeydhX3XO8CjO5%2ByrcA9OoS%2FOOxIUnn7%2Fh3Lv%2BRP2JHxcikffoS6AaaL2e0PSo1ngF8bi2Y9kkJ1qWhP6qrfT7rGxiArgMJuhLofMcNHOyoIDCJp6kPtw6f2ghdnazJyQ%2FlfkKwuiaOtg36qEX%2FQilqTM8rU1mg4hy7CQIt49jW%2BAuWb4zjHm%2Bj4%2BpSq%2B9MlQTJSGGswWdhX4QN%2ByvQN7kc4YYmx2Ok1pW2vamzp6GGVFiMd84SHpfiHEAOWEmzXJfYzWNNknYvc8StY0kUGWCBoQt05nKHrzNjZTd2HMrKFUEgVLkB%2FWcoLoeEmYB91%2BBzq83P4Of37dix86Tp5unG8XZyy1fLTR7DbnBjcFr%2F7grttBaclxEq5TZN2VJzS52uUgToCZJVX%2BDNgEfLMlrYmfvNm9vlpqBn4eWuWQa3hf2miw3jc9I8EkZwnWBghymheOEHWhnusXVAuO4KSbSAfg7QVA1P4w1X%2FUcn68rTcnEyzPXiujjn50POxzvGWo4t5exZe5Vk5EuPuaT0EYNojLTBuTew%2FMrKuil3Va2QBIjG9KMWHzayhQhtP8QVhaoZg%2Bh92bP7MyRr6pFbD6OC0uPBImj%2Fb2JxJG0stclmR8dUjg%2FspzouOMNd3%2FMw%2BpVqVTer1f6heZfMJ7F28QGOqUBhatzgCLhiMitmUzAqLsaqaxFryv%2FGUk2j7bKeOgutEvRp1jFEGWmfZmSFUrQLA8W5A99CsCpCIJgTPVtNQG4gRHT%2FvkF%2Fk77A3T4JDL3Ydp4M2OEtbQc32knJyDPoYJ1sxzKhKZDmwoi5LfT0cpFqENSoUYgC4TQDICixdHr8jmu%2BvhtlC97rzHhWpHMSEtnct99Qjn8jt3sMxcbLSckdV10%2FfKD&X-Amz-Signature=504a4137a461f57ea35057dc46c2ae04f673a1d0842fccda66f3ae29b02f4e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BA57TE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD54wcK%2BXmJPtYY0J6Huwc%2Fwf8x0%2F0%2FunY6DlIEsaYQQQIgbuRZCTWG2yeJMeiYIJrb6F94FIctrth8%2FmGPCLLfRQ4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FeydhX3XO8CjO5%2ByrcA9OoS%2FOOxIUnn7%2Fh3Lv%2BRP2JHxcikffoS6AaaL2e0PSo1ngF8bi2Y9kkJ1qWhP6qrfT7rGxiArgMJuhLofMcNHOyoIDCJp6kPtw6f2ghdnazJyQ%2FlfkKwuiaOtg36qEX%2FQilqTM8rU1mg4hy7CQIt49jW%2BAuWb4zjHm%2Bj4%2BpSq%2B9MlQTJSGGswWdhX4QN%2ByvQN7kc4YYmx2Ok1pW2vamzp6GGVFiMd84SHpfiHEAOWEmzXJfYzWNNknYvc8StY0kUGWCBoQt05nKHrzNjZTd2HMrKFUEgVLkB%2FWcoLoeEmYB91%2BBzq83P4Of37dix86Tp5unG8XZyy1fLTR7DbnBjcFr%2F7grttBaclxEq5TZN2VJzS52uUgToCZJVX%2BDNgEfLMlrYmfvNm9vlpqBn4eWuWQa3hf2miw3jc9I8EkZwnWBghymheOEHWhnusXVAuO4KSbSAfg7QVA1P4w1X%2FUcn68rTcnEyzPXiujjn50POxzvGWo4t5exZe5Vk5EuPuaT0EYNojLTBuTew%2FMrKuil3Va2QBIjG9KMWHzayhQhtP8QVhaoZg%2Bh92bP7MyRr6pFbD6OC0uPBImj%2Fb2JxJG0stclmR8dUjg%2FspzouOMNd3%2FMw%2BpVqVTer1f6heZfMJ7F28QGOqUBhatzgCLhiMitmUzAqLsaqaxFryv%2FGUk2j7bKeOgutEvRp1jFEGWmfZmSFUrQLA8W5A99CsCpCIJgTPVtNQG4gRHT%2FvkF%2Fk77A3T4JDL3Ydp4M2OEtbQc32knJyDPoYJ1sxzKhKZDmwoi5LfT0cpFqENSoUYgC4TQDICixdHr8jmu%2BvhtlC97rzHhWpHMSEtnct99Qjn8jt3sMxcbLSckdV10%2FfKD&X-Amz-Signature=ff942325eb2018b443b57dc2ba7eca8a4e7748863fc13310ac73d6a18ea605cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BA57TE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD54wcK%2BXmJPtYY0J6Huwc%2Fwf8x0%2F0%2FunY6DlIEsaYQQQIgbuRZCTWG2yeJMeiYIJrb6F94FIctrth8%2FmGPCLLfRQ4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FeydhX3XO8CjO5%2ByrcA9OoS%2FOOxIUnn7%2Fh3Lv%2BRP2JHxcikffoS6AaaL2e0PSo1ngF8bi2Y9kkJ1qWhP6qrfT7rGxiArgMJuhLofMcNHOyoIDCJp6kPtw6f2ghdnazJyQ%2FlfkKwuiaOtg36qEX%2FQilqTM8rU1mg4hy7CQIt49jW%2BAuWb4zjHm%2Bj4%2BpSq%2B9MlQTJSGGswWdhX4QN%2ByvQN7kc4YYmx2Ok1pW2vamzp6GGVFiMd84SHpfiHEAOWEmzXJfYzWNNknYvc8StY0kUGWCBoQt05nKHrzNjZTd2HMrKFUEgVLkB%2FWcoLoeEmYB91%2BBzq83P4Of37dix86Tp5unG8XZyy1fLTR7DbnBjcFr%2F7grttBaclxEq5TZN2VJzS52uUgToCZJVX%2BDNgEfLMlrYmfvNm9vlpqBn4eWuWQa3hf2miw3jc9I8EkZwnWBghymheOEHWhnusXVAuO4KSbSAfg7QVA1P4w1X%2FUcn68rTcnEyzPXiujjn50POxzvGWo4t5exZe5Vk5EuPuaT0EYNojLTBuTew%2FMrKuil3Va2QBIjG9KMWHzayhQhtP8QVhaoZg%2Bh92bP7MyRr6pFbD6OC0uPBImj%2Fb2JxJG0stclmR8dUjg%2FspzouOMNd3%2FMw%2BpVqVTer1f6heZfMJ7F28QGOqUBhatzgCLhiMitmUzAqLsaqaxFryv%2FGUk2j7bKeOgutEvRp1jFEGWmfZmSFUrQLA8W5A99CsCpCIJgTPVtNQG4gRHT%2FvkF%2Fk77A3T4JDL3Ydp4M2OEtbQc32knJyDPoYJ1sxzKhKZDmwoi5LfT0cpFqENSoUYgC4TQDICixdHr8jmu%2BvhtlC97rzHhWpHMSEtnct99Qjn8jt3sMxcbLSckdV10%2FfKD&X-Amz-Signature=5f1010e7a11f97c6a87ebaac77e0fa3ed28393ea19305abb6afc1d5685c134d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BA57TE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD54wcK%2BXmJPtYY0J6Huwc%2Fwf8x0%2F0%2FunY6DlIEsaYQQQIgbuRZCTWG2yeJMeiYIJrb6F94FIctrth8%2FmGPCLLfRQ4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FeydhX3XO8CjO5%2ByrcA9OoS%2FOOxIUnn7%2Fh3Lv%2BRP2JHxcikffoS6AaaL2e0PSo1ngF8bi2Y9kkJ1qWhP6qrfT7rGxiArgMJuhLofMcNHOyoIDCJp6kPtw6f2ghdnazJyQ%2FlfkKwuiaOtg36qEX%2FQilqTM8rU1mg4hy7CQIt49jW%2BAuWb4zjHm%2Bj4%2BpSq%2B9MlQTJSGGswWdhX4QN%2ByvQN7kc4YYmx2Ok1pW2vamzp6GGVFiMd84SHpfiHEAOWEmzXJfYzWNNknYvc8StY0kUGWCBoQt05nKHrzNjZTd2HMrKFUEgVLkB%2FWcoLoeEmYB91%2BBzq83P4Of37dix86Tp5unG8XZyy1fLTR7DbnBjcFr%2F7grttBaclxEq5TZN2VJzS52uUgToCZJVX%2BDNgEfLMlrYmfvNm9vlpqBn4eWuWQa3hf2miw3jc9I8EkZwnWBghymheOEHWhnusXVAuO4KSbSAfg7QVA1P4w1X%2FUcn68rTcnEyzPXiujjn50POxzvGWo4t5exZe5Vk5EuPuaT0EYNojLTBuTew%2FMrKuil3Va2QBIjG9KMWHzayhQhtP8QVhaoZg%2Bh92bP7MyRr6pFbD6OC0uPBImj%2Fb2JxJG0stclmR8dUjg%2FspzouOMNd3%2FMw%2BpVqVTer1f6heZfMJ7F28QGOqUBhatzgCLhiMitmUzAqLsaqaxFryv%2FGUk2j7bKeOgutEvRp1jFEGWmfZmSFUrQLA8W5A99CsCpCIJgTPVtNQG4gRHT%2FvkF%2Fk77A3T4JDL3Ydp4M2OEtbQc32knJyDPoYJ1sxzKhKZDmwoi5LfT0cpFqENSoUYgC4TQDICixdHr8jmu%2BvhtlC97rzHhWpHMSEtnct99Qjn8jt3sMxcbLSckdV10%2FfKD&X-Amz-Signature=4a8503679e1d82ee50bb6835e89e8e3c7fd5a9900355ebeb0cce5c2302c0fbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BA57TE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD54wcK%2BXmJPtYY0J6Huwc%2Fwf8x0%2F0%2FunY6DlIEsaYQQQIgbuRZCTWG2yeJMeiYIJrb6F94FIctrth8%2FmGPCLLfRQ4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FeydhX3XO8CjO5%2ByrcA9OoS%2FOOxIUnn7%2Fh3Lv%2BRP2JHxcikffoS6AaaL2e0PSo1ngF8bi2Y9kkJ1qWhP6qrfT7rGxiArgMJuhLofMcNHOyoIDCJp6kPtw6f2ghdnazJyQ%2FlfkKwuiaOtg36qEX%2FQilqTM8rU1mg4hy7CQIt49jW%2BAuWb4zjHm%2Bj4%2BpSq%2B9MlQTJSGGswWdhX4QN%2ByvQN7kc4YYmx2Ok1pW2vamzp6GGVFiMd84SHpfiHEAOWEmzXJfYzWNNknYvc8StY0kUGWCBoQt05nKHrzNjZTd2HMrKFUEgVLkB%2FWcoLoeEmYB91%2BBzq83P4Of37dix86Tp5unG8XZyy1fLTR7DbnBjcFr%2F7grttBaclxEq5TZN2VJzS52uUgToCZJVX%2BDNgEfLMlrYmfvNm9vlpqBn4eWuWQa3hf2miw3jc9I8EkZwnWBghymheOEHWhnusXVAuO4KSbSAfg7QVA1P4w1X%2FUcn68rTcnEyzPXiujjn50POxzvGWo4t5exZe5Vk5EuPuaT0EYNojLTBuTew%2FMrKuil3Va2QBIjG9KMWHzayhQhtP8QVhaoZg%2Bh92bP7MyRr6pFbD6OC0uPBImj%2Fb2JxJG0stclmR8dUjg%2FspzouOMNd3%2FMw%2BpVqVTer1f6heZfMJ7F28QGOqUBhatzgCLhiMitmUzAqLsaqaxFryv%2FGUk2j7bKeOgutEvRp1jFEGWmfZmSFUrQLA8W5A99CsCpCIJgTPVtNQG4gRHT%2FvkF%2Fk77A3T4JDL3Ydp4M2OEtbQc32knJyDPoYJ1sxzKhKZDmwoi5LfT0cpFqENSoUYgC4TQDICixdHr8jmu%2BvhtlC97rzHhWpHMSEtnct99Qjn8jt3sMxcbLSckdV10%2FfKD&X-Amz-Signature=fed980d5ef8e31a21e83f6af7502a81ef5b3648541099ce383a2084b9415f9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
