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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5QEX2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIhHfsgQ3HU96seiS9PdMfjGtjGb2W1fbIqV56%2FhKvygIgE%2BXibZuFiXZ3KGV1WiKkhrAu%2Fsb5Y4h%2BoK0JxcCMt1Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMry999YiqqsmlPY3SrcAw64gf60K7AaHNTVoMUcDr93euAhZL72WhE2pxIRVxSlCEq1btIM8LEyBiRRmNYve3vKD%2Fn0nfYQMCIy5VQP1AV%2FhzNffpovThxq2abOChP5EIJAV6phjOtfMqfiNlveHfxRECN2I2M55G6G5oWDxQJRdfeEtvHAZ%2B8crp3GsfQeA7fvwaLmZq4H5QKVOk6mWvbJExS%2B7OCAC0xHD%2FgEPYz0nVTNDWWc5AATjqQN0o67QkhEyfWIV7h2NLcV%2BiqZV7G19lcCIsq4GE0vo%2BbOgrgjdwy15P2QAy8YId1utlPHlBv6meLkpbi9h2Dx8HjeaH8lAsHh1ZdTt6znnZ9kIV8h0UC%2B%2FeKwlcX%2BaG9oFWS1Z6mbm%2BwW3J4zAB47hx4LcKs%2FV4Gzfx9VsvBz5e8cSHowc9q5H2%2F5e25MvZnyMj1maInvyOyKPo3xa1RVNOyE3EUTuJaByfKz%2F3NRl9VogcE2T31ZESVCNN7ZylOMNVbKwQfVl1ZsI12AytGX51ssnW%2FB3bM2AQ3Zg%2FG%2FHNPhRFOwDy08rBikpuIIgrjdk9lypQ7VycdlTMcuiWtOxp0i6wDyrfmeT1fzN4VGCGWsmbkZVul7n6QgAwTTibK3Lfw%2BwWakau5KkGQgsIqLMMa6w70GOqUBK%2FeB%2BCO39pwoKnEZVlaDmAHD6LRolkwrqcGz69K1dQBFQJWrBUph%2FPcRrf0NCZS5SYNyZeI40k0kb3XTFhHKBKYeXIdMfHbZ8NzTeE%2FaG%2BwwPZJpWNU6t4MZ7iuLfbwOXOb5NUC5VMk9r12UBYTkDoI68pi7J3EOHdfQUfbxkd2GyTwC8Em9pZp9RemMBxZnKEDSdPqC8bqzLprhA6XLSTCl96%2Fl&X-Amz-Signature=f79085f149e9dab8161e25da5138a392ebbfdf6e60ec334b81629c9e83048919&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5QEX2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIhHfsgQ3HU96seiS9PdMfjGtjGb2W1fbIqV56%2FhKvygIgE%2BXibZuFiXZ3KGV1WiKkhrAu%2Fsb5Y4h%2BoK0JxcCMt1Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMry999YiqqsmlPY3SrcAw64gf60K7AaHNTVoMUcDr93euAhZL72WhE2pxIRVxSlCEq1btIM8LEyBiRRmNYve3vKD%2Fn0nfYQMCIy5VQP1AV%2FhzNffpovThxq2abOChP5EIJAV6phjOtfMqfiNlveHfxRECN2I2M55G6G5oWDxQJRdfeEtvHAZ%2B8crp3GsfQeA7fvwaLmZq4H5QKVOk6mWvbJExS%2B7OCAC0xHD%2FgEPYz0nVTNDWWc5AATjqQN0o67QkhEyfWIV7h2NLcV%2BiqZV7G19lcCIsq4GE0vo%2BbOgrgjdwy15P2QAy8YId1utlPHlBv6meLkpbi9h2Dx8HjeaH8lAsHh1ZdTt6znnZ9kIV8h0UC%2B%2FeKwlcX%2BaG9oFWS1Z6mbm%2BwW3J4zAB47hx4LcKs%2FV4Gzfx9VsvBz5e8cSHowc9q5H2%2F5e25MvZnyMj1maInvyOyKPo3xa1RVNOyE3EUTuJaByfKz%2F3NRl9VogcE2T31ZESVCNN7ZylOMNVbKwQfVl1ZsI12AytGX51ssnW%2FB3bM2AQ3Zg%2FG%2FHNPhRFOwDy08rBikpuIIgrjdk9lypQ7VycdlTMcuiWtOxp0i6wDyrfmeT1fzN4VGCGWsmbkZVul7n6QgAwTTibK3Lfw%2BwWakau5KkGQgsIqLMMa6w70GOqUBK%2FeB%2BCO39pwoKnEZVlaDmAHD6LRolkwrqcGz69K1dQBFQJWrBUph%2FPcRrf0NCZS5SYNyZeI40k0kb3XTFhHKBKYeXIdMfHbZ8NzTeE%2FaG%2BwwPZJpWNU6t4MZ7iuLfbwOXOb5NUC5VMk9r12UBYTkDoI68pi7J3EOHdfQUfbxkd2GyTwC8Em9pZp9RemMBxZnKEDSdPqC8bqzLprhA6XLSTCl96%2Fl&X-Amz-Signature=e92bc96ae29c83d772097a323b29df1adfb6cb227dc933eb370c34c11a7fff48&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5QEX2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIhHfsgQ3HU96seiS9PdMfjGtjGb2W1fbIqV56%2FhKvygIgE%2BXibZuFiXZ3KGV1WiKkhrAu%2Fsb5Y4h%2BoK0JxcCMt1Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMry999YiqqsmlPY3SrcAw64gf60K7AaHNTVoMUcDr93euAhZL72WhE2pxIRVxSlCEq1btIM8LEyBiRRmNYve3vKD%2Fn0nfYQMCIy5VQP1AV%2FhzNffpovThxq2abOChP5EIJAV6phjOtfMqfiNlveHfxRECN2I2M55G6G5oWDxQJRdfeEtvHAZ%2B8crp3GsfQeA7fvwaLmZq4H5QKVOk6mWvbJExS%2B7OCAC0xHD%2FgEPYz0nVTNDWWc5AATjqQN0o67QkhEyfWIV7h2NLcV%2BiqZV7G19lcCIsq4GE0vo%2BbOgrgjdwy15P2QAy8YId1utlPHlBv6meLkpbi9h2Dx8HjeaH8lAsHh1ZdTt6znnZ9kIV8h0UC%2B%2FeKwlcX%2BaG9oFWS1Z6mbm%2BwW3J4zAB47hx4LcKs%2FV4Gzfx9VsvBz5e8cSHowc9q5H2%2F5e25MvZnyMj1maInvyOyKPo3xa1RVNOyE3EUTuJaByfKz%2F3NRl9VogcE2T31ZESVCNN7ZylOMNVbKwQfVl1ZsI12AytGX51ssnW%2FB3bM2AQ3Zg%2FG%2FHNPhRFOwDy08rBikpuIIgrjdk9lypQ7VycdlTMcuiWtOxp0i6wDyrfmeT1fzN4VGCGWsmbkZVul7n6QgAwTTibK3Lfw%2BwWakau5KkGQgsIqLMMa6w70GOqUBK%2FeB%2BCO39pwoKnEZVlaDmAHD6LRolkwrqcGz69K1dQBFQJWrBUph%2FPcRrf0NCZS5SYNyZeI40k0kb3XTFhHKBKYeXIdMfHbZ8NzTeE%2FaG%2BwwPZJpWNU6t4MZ7iuLfbwOXOb5NUC5VMk9r12UBYTkDoI68pi7J3EOHdfQUfbxkd2GyTwC8Em9pZp9RemMBxZnKEDSdPqC8bqzLprhA6XLSTCl96%2Fl&X-Amz-Signature=d9481ac90f121b78d4a210bbfec45a30b87439fd0d7b4214c36173560c0afd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5QEX2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIhHfsgQ3HU96seiS9PdMfjGtjGb2W1fbIqV56%2FhKvygIgE%2BXibZuFiXZ3KGV1WiKkhrAu%2Fsb5Y4h%2BoK0JxcCMt1Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMry999YiqqsmlPY3SrcAw64gf60K7AaHNTVoMUcDr93euAhZL72WhE2pxIRVxSlCEq1btIM8LEyBiRRmNYve3vKD%2Fn0nfYQMCIy5VQP1AV%2FhzNffpovThxq2abOChP5EIJAV6phjOtfMqfiNlveHfxRECN2I2M55G6G5oWDxQJRdfeEtvHAZ%2B8crp3GsfQeA7fvwaLmZq4H5QKVOk6mWvbJExS%2B7OCAC0xHD%2FgEPYz0nVTNDWWc5AATjqQN0o67QkhEyfWIV7h2NLcV%2BiqZV7G19lcCIsq4GE0vo%2BbOgrgjdwy15P2QAy8YId1utlPHlBv6meLkpbi9h2Dx8HjeaH8lAsHh1ZdTt6znnZ9kIV8h0UC%2B%2FeKwlcX%2BaG9oFWS1Z6mbm%2BwW3J4zAB47hx4LcKs%2FV4Gzfx9VsvBz5e8cSHowc9q5H2%2F5e25MvZnyMj1maInvyOyKPo3xa1RVNOyE3EUTuJaByfKz%2F3NRl9VogcE2T31ZESVCNN7ZylOMNVbKwQfVl1ZsI12AytGX51ssnW%2FB3bM2AQ3Zg%2FG%2FHNPhRFOwDy08rBikpuIIgrjdk9lypQ7VycdlTMcuiWtOxp0i6wDyrfmeT1fzN4VGCGWsmbkZVul7n6QgAwTTibK3Lfw%2BwWakau5KkGQgsIqLMMa6w70GOqUBK%2FeB%2BCO39pwoKnEZVlaDmAHD6LRolkwrqcGz69K1dQBFQJWrBUph%2FPcRrf0NCZS5SYNyZeI40k0kb3XTFhHKBKYeXIdMfHbZ8NzTeE%2FaG%2BwwPZJpWNU6t4MZ7iuLfbwOXOb5NUC5VMk9r12UBYTkDoI68pi7J3EOHdfQUfbxkd2GyTwC8Em9pZp9RemMBxZnKEDSdPqC8bqzLprhA6XLSTCl96%2Fl&X-Amz-Signature=22e893a729a1065760d396a800b41a0e7a274c97a28198c844e63a741aa87c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5QEX2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIhHfsgQ3HU96seiS9PdMfjGtjGb2W1fbIqV56%2FhKvygIgE%2BXibZuFiXZ3KGV1WiKkhrAu%2Fsb5Y4h%2BoK0JxcCMt1Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMry999YiqqsmlPY3SrcAw64gf60K7AaHNTVoMUcDr93euAhZL72WhE2pxIRVxSlCEq1btIM8LEyBiRRmNYve3vKD%2Fn0nfYQMCIy5VQP1AV%2FhzNffpovThxq2abOChP5EIJAV6phjOtfMqfiNlveHfxRECN2I2M55G6G5oWDxQJRdfeEtvHAZ%2B8crp3GsfQeA7fvwaLmZq4H5QKVOk6mWvbJExS%2B7OCAC0xHD%2FgEPYz0nVTNDWWc5AATjqQN0o67QkhEyfWIV7h2NLcV%2BiqZV7G19lcCIsq4GE0vo%2BbOgrgjdwy15P2QAy8YId1utlPHlBv6meLkpbi9h2Dx8HjeaH8lAsHh1ZdTt6znnZ9kIV8h0UC%2B%2FeKwlcX%2BaG9oFWS1Z6mbm%2BwW3J4zAB47hx4LcKs%2FV4Gzfx9VsvBz5e8cSHowc9q5H2%2F5e25MvZnyMj1maInvyOyKPo3xa1RVNOyE3EUTuJaByfKz%2F3NRl9VogcE2T31ZESVCNN7ZylOMNVbKwQfVl1ZsI12AytGX51ssnW%2FB3bM2AQ3Zg%2FG%2FHNPhRFOwDy08rBikpuIIgrjdk9lypQ7VycdlTMcuiWtOxp0i6wDyrfmeT1fzN4VGCGWsmbkZVul7n6QgAwTTibK3Lfw%2BwWakau5KkGQgsIqLMMa6w70GOqUBK%2FeB%2BCO39pwoKnEZVlaDmAHD6LRolkwrqcGz69K1dQBFQJWrBUph%2FPcRrf0NCZS5SYNyZeI40k0kb3XTFhHKBKYeXIdMfHbZ8NzTeE%2FaG%2BwwPZJpWNU6t4MZ7iuLfbwOXOb5NUC5VMk9r12UBYTkDoI68pi7J3EOHdfQUfbxkd2GyTwC8Em9pZp9RemMBxZnKEDSdPqC8bqzLprhA6XLSTCl96%2Fl&X-Amz-Signature=db7ffd27a3b3068d774bddff8b33ffe7993f0b20191afecb01c432700c153480&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
