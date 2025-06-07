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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZDVHYU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMWK1l1Qiz0siA6Jz9Khu0j%2FDRvnvArW82wW7lazkLNQIhALyVMf24PMy4FVMt4Cw4boqh%2FJr1nufZaB7sOTZeieNrKv8DCGsQABoMNjM3NDIzMTgzODA1IgzMvDXzFAYG5%2BZkZw0q3ANbmB%2F%2Fw5F7U0KcD%2FLVJIMkpySKLoH5t1elhq9SvjVgF0X9gBSwAP7to28ofk704ivCCSvl34zuz6ywi7vHbc8LRnyZiBSCWJd2rKFJdDYcanY0EtNY%2FbYPbPMmDKPKyrlZSdB%2FzTEIlU24JYwWnua4XhRnDwFc5mLBQcf2CntWkqth2duI7AS%2F9QByeTcdihd%2Bd6dqyz5L2SLHv8IvPlJOJ6EbKibHVavQ2uuqGDcWGr%2FJnHE8M%2BiSJdAPp2HFQHt7Ga%2Bv2TMtL73g6dt%2BQ4yGuL%2B24TDZkTGrzc57fvNoG4uh5x0keVom%2FOqUD7M0DSMPkK%2FBxgs9EYwfaRwiPeBLUvunEKnCq%2FEsMBG%2FPhUz1va0wqsuYdTJid%2B%2F2Mmyffq39ZN8mTj%2Bie8jh6V6Lv2zuhutD1XmY9oK7n0lojmi0TYEtQHsqeDcJpc3YwhHnx%2FF25Z6YcUW8hZwzYw2Y%2Bq7wFsUE3q9HUYoO7Y%2F9N39V4e%2BTD1Mqd0ZXdwSXxstpMRS8qC%2FaMreon6dMRZ%2FIXAvpBFhyQ%2FcWL%2Fz%2FDvVU5pRNUy9tLyHbfKXezNpePQabnz8K3%2F9L%2Fz9go9Zdc4VIwPfaNPw2QrL77C6nZBTZ2OXi34gUhQh0Uwpc53n6DC9wI7CBjqkAdHG7iLoRAeIuTM%2FFSZLcc2bzfaGL5XjXMNzYWqT4735naGu53Dut6Ky30ZG2%2Ffkn18fiI%2BcdBJJZwrCGOnWE2rJtXIdf3S29iExfV1Q6wHK1bxYVHc9lKSC512laPcCI0lw8cCYEA4kgf3FJxa9UI%2BydhBjQjk33b1QDSb9OMcy0EahO20WpgkIqQTaXuFV3pdHcAeIbsc%2FZVNFAoH70GxBPxaz&X-Amz-Signature=5481306f1c1cd9a8b43db4f483caa9b34b1a6706b9a19e00a9380680801ea760&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZDVHYU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMWK1l1Qiz0siA6Jz9Khu0j%2FDRvnvArW82wW7lazkLNQIhALyVMf24PMy4FVMt4Cw4boqh%2FJr1nufZaB7sOTZeieNrKv8DCGsQABoMNjM3NDIzMTgzODA1IgzMvDXzFAYG5%2BZkZw0q3ANbmB%2F%2Fw5F7U0KcD%2FLVJIMkpySKLoH5t1elhq9SvjVgF0X9gBSwAP7to28ofk704ivCCSvl34zuz6ywi7vHbc8LRnyZiBSCWJd2rKFJdDYcanY0EtNY%2FbYPbPMmDKPKyrlZSdB%2FzTEIlU24JYwWnua4XhRnDwFc5mLBQcf2CntWkqth2duI7AS%2F9QByeTcdihd%2Bd6dqyz5L2SLHv8IvPlJOJ6EbKibHVavQ2uuqGDcWGr%2FJnHE8M%2BiSJdAPp2HFQHt7Ga%2Bv2TMtL73g6dt%2BQ4yGuL%2B24TDZkTGrzc57fvNoG4uh5x0keVom%2FOqUD7M0DSMPkK%2FBxgs9EYwfaRwiPeBLUvunEKnCq%2FEsMBG%2FPhUz1va0wqsuYdTJid%2B%2F2Mmyffq39ZN8mTj%2Bie8jh6V6Lv2zuhutD1XmY9oK7n0lojmi0TYEtQHsqeDcJpc3YwhHnx%2FF25Z6YcUW8hZwzYw2Y%2Bq7wFsUE3q9HUYoO7Y%2F9N39V4e%2BTD1Mqd0ZXdwSXxstpMRS8qC%2FaMreon6dMRZ%2FIXAvpBFhyQ%2FcWL%2Fz%2FDvVU5pRNUy9tLyHbfKXezNpePQabnz8K3%2F9L%2Fz9go9Zdc4VIwPfaNPw2QrL77C6nZBTZ2OXi34gUhQh0Uwpc53n6DC9wI7CBjqkAdHG7iLoRAeIuTM%2FFSZLcc2bzfaGL5XjXMNzYWqT4735naGu53Dut6Ky30ZG2%2Ffkn18fiI%2BcdBJJZwrCGOnWE2rJtXIdf3S29iExfV1Q6wHK1bxYVHc9lKSC512laPcCI0lw8cCYEA4kgf3FJxa9UI%2BydhBjQjk33b1QDSb9OMcy0EahO20WpgkIqQTaXuFV3pdHcAeIbsc%2FZVNFAoH70GxBPxaz&X-Amz-Signature=8dcf159a8d6c30cfeca13d350aa19e0d088f85126297f1c9f7a0528ae56daca7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZDVHYU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMWK1l1Qiz0siA6Jz9Khu0j%2FDRvnvArW82wW7lazkLNQIhALyVMf24PMy4FVMt4Cw4boqh%2FJr1nufZaB7sOTZeieNrKv8DCGsQABoMNjM3NDIzMTgzODA1IgzMvDXzFAYG5%2BZkZw0q3ANbmB%2F%2Fw5F7U0KcD%2FLVJIMkpySKLoH5t1elhq9SvjVgF0X9gBSwAP7to28ofk704ivCCSvl34zuz6ywi7vHbc8LRnyZiBSCWJd2rKFJdDYcanY0EtNY%2FbYPbPMmDKPKyrlZSdB%2FzTEIlU24JYwWnua4XhRnDwFc5mLBQcf2CntWkqth2duI7AS%2F9QByeTcdihd%2Bd6dqyz5L2SLHv8IvPlJOJ6EbKibHVavQ2uuqGDcWGr%2FJnHE8M%2BiSJdAPp2HFQHt7Ga%2Bv2TMtL73g6dt%2BQ4yGuL%2B24TDZkTGrzc57fvNoG4uh5x0keVom%2FOqUD7M0DSMPkK%2FBxgs9EYwfaRwiPeBLUvunEKnCq%2FEsMBG%2FPhUz1va0wqsuYdTJid%2B%2F2Mmyffq39ZN8mTj%2Bie8jh6V6Lv2zuhutD1XmY9oK7n0lojmi0TYEtQHsqeDcJpc3YwhHnx%2FF25Z6YcUW8hZwzYw2Y%2Bq7wFsUE3q9HUYoO7Y%2F9N39V4e%2BTD1Mqd0ZXdwSXxstpMRS8qC%2FaMreon6dMRZ%2FIXAvpBFhyQ%2FcWL%2Fz%2FDvVU5pRNUy9tLyHbfKXezNpePQabnz8K3%2F9L%2Fz9go9Zdc4VIwPfaNPw2QrL77C6nZBTZ2OXi34gUhQh0Uwpc53n6DC9wI7CBjqkAdHG7iLoRAeIuTM%2FFSZLcc2bzfaGL5XjXMNzYWqT4735naGu53Dut6Ky30ZG2%2Ffkn18fiI%2BcdBJJZwrCGOnWE2rJtXIdf3S29iExfV1Q6wHK1bxYVHc9lKSC512laPcCI0lw8cCYEA4kgf3FJxa9UI%2BydhBjQjk33b1QDSb9OMcy0EahO20WpgkIqQTaXuFV3pdHcAeIbsc%2FZVNFAoH70GxBPxaz&X-Amz-Signature=4937bea878b3f9229768ffa6bf3c23dbc1e45d711f78a0fffe9e2fcccc7e11ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZDVHYU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMWK1l1Qiz0siA6Jz9Khu0j%2FDRvnvArW82wW7lazkLNQIhALyVMf24PMy4FVMt4Cw4boqh%2FJr1nufZaB7sOTZeieNrKv8DCGsQABoMNjM3NDIzMTgzODA1IgzMvDXzFAYG5%2BZkZw0q3ANbmB%2F%2Fw5F7U0KcD%2FLVJIMkpySKLoH5t1elhq9SvjVgF0X9gBSwAP7to28ofk704ivCCSvl34zuz6ywi7vHbc8LRnyZiBSCWJd2rKFJdDYcanY0EtNY%2FbYPbPMmDKPKyrlZSdB%2FzTEIlU24JYwWnua4XhRnDwFc5mLBQcf2CntWkqth2duI7AS%2F9QByeTcdihd%2Bd6dqyz5L2SLHv8IvPlJOJ6EbKibHVavQ2uuqGDcWGr%2FJnHE8M%2BiSJdAPp2HFQHt7Ga%2Bv2TMtL73g6dt%2BQ4yGuL%2B24TDZkTGrzc57fvNoG4uh5x0keVom%2FOqUD7M0DSMPkK%2FBxgs9EYwfaRwiPeBLUvunEKnCq%2FEsMBG%2FPhUz1va0wqsuYdTJid%2B%2F2Mmyffq39ZN8mTj%2Bie8jh6V6Lv2zuhutD1XmY9oK7n0lojmi0TYEtQHsqeDcJpc3YwhHnx%2FF25Z6YcUW8hZwzYw2Y%2Bq7wFsUE3q9HUYoO7Y%2F9N39V4e%2BTD1Mqd0ZXdwSXxstpMRS8qC%2FaMreon6dMRZ%2FIXAvpBFhyQ%2FcWL%2Fz%2FDvVU5pRNUy9tLyHbfKXezNpePQabnz8K3%2F9L%2Fz9go9Zdc4VIwPfaNPw2QrL77C6nZBTZ2OXi34gUhQh0Uwpc53n6DC9wI7CBjqkAdHG7iLoRAeIuTM%2FFSZLcc2bzfaGL5XjXMNzYWqT4735naGu53Dut6Ky30ZG2%2Ffkn18fiI%2BcdBJJZwrCGOnWE2rJtXIdf3S29iExfV1Q6wHK1bxYVHc9lKSC512laPcCI0lw8cCYEA4kgf3FJxa9UI%2BydhBjQjk33b1QDSb9OMcy0EahO20WpgkIqQTaXuFV3pdHcAeIbsc%2FZVNFAoH70GxBPxaz&X-Amz-Signature=75f2d8bf32b41454fc22c656bd813fac68e452e61683812410f9d4af37e3f33b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZDVHYU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMWK1l1Qiz0siA6Jz9Khu0j%2FDRvnvArW82wW7lazkLNQIhALyVMf24PMy4FVMt4Cw4boqh%2FJr1nufZaB7sOTZeieNrKv8DCGsQABoMNjM3NDIzMTgzODA1IgzMvDXzFAYG5%2BZkZw0q3ANbmB%2F%2Fw5F7U0KcD%2FLVJIMkpySKLoH5t1elhq9SvjVgF0X9gBSwAP7to28ofk704ivCCSvl34zuz6ywi7vHbc8LRnyZiBSCWJd2rKFJdDYcanY0EtNY%2FbYPbPMmDKPKyrlZSdB%2FzTEIlU24JYwWnua4XhRnDwFc5mLBQcf2CntWkqth2duI7AS%2F9QByeTcdihd%2Bd6dqyz5L2SLHv8IvPlJOJ6EbKibHVavQ2uuqGDcWGr%2FJnHE8M%2BiSJdAPp2HFQHt7Ga%2Bv2TMtL73g6dt%2BQ4yGuL%2B24TDZkTGrzc57fvNoG4uh5x0keVom%2FOqUD7M0DSMPkK%2FBxgs9EYwfaRwiPeBLUvunEKnCq%2FEsMBG%2FPhUz1va0wqsuYdTJid%2B%2F2Mmyffq39ZN8mTj%2Bie8jh6V6Lv2zuhutD1XmY9oK7n0lojmi0TYEtQHsqeDcJpc3YwhHnx%2FF25Z6YcUW8hZwzYw2Y%2Bq7wFsUE3q9HUYoO7Y%2F9N39V4e%2BTD1Mqd0ZXdwSXxstpMRS8qC%2FaMreon6dMRZ%2FIXAvpBFhyQ%2FcWL%2Fz%2FDvVU5pRNUy9tLyHbfKXezNpePQabnz8K3%2F9L%2Fz9go9Zdc4VIwPfaNPw2QrL77C6nZBTZ2OXi34gUhQh0Uwpc53n6DC9wI7CBjqkAdHG7iLoRAeIuTM%2FFSZLcc2bzfaGL5XjXMNzYWqT4735naGu53Dut6Ky30ZG2%2Ffkn18fiI%2BcdBJJZwrCGOnWE2rJtXIdf3S29iExfV1Q6wHK1bxYVHc9lKSC512laPcCI0lw8cCYEA4kgf3FJxa9UI%2BydhBjQjk33b1QDSb9OMcy0EahO20WpgkIqQTaXuFV3pdHcAeIbsc%2FZVNFAoH70GxBPxaz&X-Amz-Signature=7e00ad15cd67ccc7688459613239415561752eb14f9ec292361ff67238b8cf83&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
