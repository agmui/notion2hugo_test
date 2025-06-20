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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNEGGF2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoxa0XLPboCPoEKYcwv83RcHHy88djom0JoT66aA0vYAiEA901eT1JUJa5zO2GSI9MNS6qTSfjDgwXMVS1%2F35It1ekqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH84Q6o67J6Kf1WniSrcA8qUwVffxKmq5jlBxvwjtdwuvqVTwEqTl4iAb68EW3LxF4IIJvo3Np0LKLzZ%2F9bQlqZevq3ZEp7fgN32%2FbGQ0XG%2BPInZbQnMrrAS8HKfhgd%2BjCev82K9Awhf%2FKKdkpY0xcoHvJI6MUdPR1P44fsO1ENdbtJcKZYAV4bNS8Sh35oFm%2BDqDbuv3ecfIg1BnI09XAKJJgD6obV5K02wgeajCH9yEhSWXJLxDi%2Bj%2Fp3lhxJIByHOz0RideTcrYiVDZ6kVhFYkU%2BatEbDjiFjT3FtOjNxQtoS5ApzWeUyiKmbjXzlAKn3fSkXDPa4UzZvGABUrVU%2F7%2Bro64jg%2FdpXze8ZfFwgkWJY2ee1ioHQ1olv6SbBHngyPK6uzhvmgCJBzHlHakFXH3QCzgy9ETN4VwBuoitpYda%2F0MJfWYadHx%2BRfymSdYt5v91WaZleVqlnubfo9zKqQ5h9wu08rVveE1lJfU%2FN1WUQboXvhA0X3q1ibmZL52M%2F4ZfS5canhYuRiMsvm%2F2fZimZDx1zeTylkrUUsPTDh5TtqZQNJmbShc%2F8vrfjBDW3PN2MDqAZEpHGzYViyN%2B6yLGEt1jOUvO0IyJIFLlj0zbo6AmcYXeRZInONzw400vP7YZVpkijRE6%2FMLWO08IGOqUB%2FuLrJAioAfU%2FOA9jEtTxdKdYGrbwvuX3Bmd9JoJM6sCOEb0aUGydXvNuGPkTT3syoMnc%2Fh8uyVfPIJxNEZHEpzvAmydBEm96U7J4aKCE1kNdMvLxlDuY1bOiWh0UZ3gDcgjMbB1zYy34qPmxcTCP0u5qgAcdUUFd%2BXFqgCLD2wL1BDWDQLRf7y9rfewlTPI61wxuPeQd%2B5vYj5bXoocbyO6KA9lc&X-Amz-Signature=30bee91c7826dd577688fdbe3caec87dacbd2422d797329bd0f1e188f1e8b7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNEGGF2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoxa0XLPboCPoEKYcwv83RcHHy88djom0JoT66aA0vYAiEA901eT1JUJa5zO2GSI9MNS6qTSfjDgwXMVS1%2F35It1ekqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH84Q6o67J6Kf1WniSrcA8qUwVffxKmq5jlBxvwjtdwuvqVTwEqTl4iAb68EW3LxF4IIJvo3Np0LKLzZ%2F9bQlqZevq3ZEp7fgN32%2FbGQ0XG%2BPInZbQnMrrAS8HKfhgd%2BjCev82K9Awhf%2FKKdkpY0xcoHvJI6MUdPR1P44fsO1ENdbtJcKZYAV4bNS8Sh35oFm%2BDqDbuv3ecfIg1BnI09XAKJJgD6obV5K02wgeajCH9yEhSWXJLxDi%2Bj%2Fp3lhxJIByHOz0RideTcrYiVDZ6kVhFYkU%2BatEbDjiFjT3FtOjNxQtoS5ApzWeUyiKmbjXzlAKn3fSkXDPa4UzZvGABUrVU%2F7%2Bro64jg%2FdpXze8ZfFwgkWJY2ee1ioHQ1olv6SbBHngyPK6uzhvmgCJBzHlHakFXH3QCzgy9ETN4VwBuoitpYda%2F0MJfWYadHx%2BRfymSdYt5v91WaZleVqlnubfo9zKqQ5h9wu08rVveE1lJfU%2FN1WUQboXvhA0X3q1ibmZL52M%2F4ZfS5canhYuRiMsvm%2F2fZimZDx1zeTylkrUUsPTDh5TtqZQNJmbShc%2F8vrfjBDW3PN2MDqAZEpHGzYViyN%2B6yLGEt1jOUvO0IyJIFLlj0zbo6AmcYXeRZInONzw400vP7YZVpkijRE6%2FMLWO08IGOqUB%2FuLrJAioAfU%2FOA9jEtTxdKdYGrbwvuX3Bmd9JoJM6sCOEb0aUGydXvNuGPkTT3syoMnc%2Fh8uyVfPIJxNEZHEpzvAmydBEm96U7J4aKCE1kNdMvLxlDuY1bOiWh0UZ3gDcgjMbB1zYy34qPmxcTCP0u5qgAcdUUFd%2BXFqgCLD2wL1BDWDQLRf7y9rfewlTPI61wxuPeQd%2B5vYj5bXoocbyO6KA9lc&X-Amz-Signature=a83aef945e8a543b4f355e72982267912a62ca53632f89ed3730b00f369c7719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNEGGF2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoxa0XLPboCPoEKYcwv83RcHHy88djom0JoT66aA0vYAiEA901eT1JUJa5zO2GSI9MNS6qTSfjDgwXMVS1%2F35It1ekqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH84Q6o67J6Kf1WniSrcA8qUwVffxKmq5jlBxvwjtdwuvqVTwEqTl4iAb68EW3LxF4IIJvo3Np0LKLzZ%2F9bQlqZevq3ZEp7fgN32%2FbGQ0XG%2BPInZbQnMrrAS8HKfhgd%2BjCev82K9Awhf%2FKKdkpY0xcoHvJI6MUdPR1P44fsO1ENdbtJcKZYAV4bNS8Sh35oFm%2BDqDbuv3ecfIg1BnI09XAKJJgD6obV5K02wgeajCH9yEhSWXJLxDi%2Bj%2Fp3lhxJIByHOz0RideTcrYiVDZ6kVhFYkU%2BatEbDjiFjT3FtOjNxQtoS5ApzWeUyiKmbjXzlAKn3fSkXDPa4UzZvGABUrVU%2F7%2Bro64jg%2FdpXze8ZfFwgkWJY2ee1ioHQ1olv6SbBHngyPK6uzhvmgCJBzHlHakFXH3QCzgy9ETN4VwBuoitpYda%2F0MJfWYadHx%2BRfymSdYt5v91WaZleVqlnubfo9zKqQ5h9wu08rVveE1lJfU%2FN1WUQboXvhA0X3q1ibmZL52M%2F4ZfS5canhYuRiMsvm%2F2fZimZDx1zeTylkrUUsPTDh5TtqZQNJmbShc%2F8vrfjBDW3PN2MDqAZEpHGzYViyN%2B6yLGEt1jOUvO0IyJIFLlj0zbo6AmcYXeRZInONzw400vP7YZVpkijRE6%2FMLWO08IGOqUB%2FuLrJAioAfU%2FOA9jEtTxdKdYGrbwvuX3Bmd9JoJM6sCOEb0aUGydXvNuGPkTT3syoMnc%2Fh8uyVfPIJxNEZHEpzvAmydBEm96U7J4aKCE1kNdMvLxlDuY1bOiWh0UZ3gDcgjMbB1zYy34qPmxcTCP0u5qgAcdUUFd%2BXFqgCLD2wL1BDWDQLRf7y9rfewlTPI61wxuPeQd%2B5vYj5bXoocbyO6KA9lc&X-Amz-Signature=17a44b359c035c186a0459ae462db07d3f399611e6389cb20c7b5052e56af17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNEGGF2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoxa0XLPboCPoEKYcwv83RcHHy88djom0JoT66aA0vYAiEA901eT1JUJa5zO2GSI9MNS6qTSfjDgwXMVS1%2F35It1ekqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH84Q6o67J6Kf1WniSrcA8qUwVffxKmq5jlBxvwjtdwuvqVTwEqTl4iAb68EW3LxF4IIJvo3Np0LKLzZ%2F9bQlqZevq3ZEp7fgN32%2FbGQ0XG%2BPInZbQnMrrAS8HKfhgd%2BjCev82K9Awhf%2FKKdkpY0xcoHvJI6MUdPR1P44fsO1ENdbtJcKZYAV4bNS8Sh35oFm%2BDqDbuv3ecfIg1BnI09XAKJJgD6obV5K02wgeajCH9yEhSWXJLxDi%2Bj%2Fp3lhxJIByHOz0RideTcrYiVDZ6kVhFYkU%2BatEbDjiFjT3FtOjNxQtoS5ApzWeUyiKmbjXzlAKn3fSkXDPa4UzZvGABUrVU%2F7%2Bro64jg%2FdpXze8ZfFwgkWJY2ee1ioHQ1olv6SbBHngyPK6uzhvmgCJBzHlHakFXH3QCzgy9ETN4VwBuoitpYda%2F0MJfWYadHx%2BRfymSdYt5v91WaZleVqlnubfo9zKqQ5h9wu08rVveE1lJfU%2FN1WUQboXvhA0X3q1ibmZL52M%2F4ZfS5canhYuRiMsvm%2F2fZimZDx1zeTylkrUUsPTDh5TtqZQNJmbShc%2F8vrfjBDW3PN2MDqAZEpHGzYViyN%2B6yLGEt1jOUvO0IyJIFLlj0zbo6AmcYXeRZInONzw400vP7YZVpkijRE6%2FMLWO08IGOqUB%2FuLrJAioAfU%2FOA9jEtTxdKdYGrbwvuX3Bmd9JoJM6sCOEb0aUGydXvNuGPkTT3syoMnc%2Fh8uyVfPIJxNEZHEpzvAmydBEm96U7J4aKCE1kNdMvLxlDuY1bOiWh0UZ3gDcgjMbB1zYy34qPmxcTCP0u5qgAcdUUFd%2BXFqgCLD2wL1BDWDQLRf7y9rfewlTPI61wxuPeQd%2B5vYj5bXoocbyO6KA9lc&X-Amz-Signature=c09cc38cc24425801c0a3f3dee94b134070facf783e7c3060132c9db01b057ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNEGGF2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoxa0XLPboCPoEKYcwv83RcHHy88djom0JoT66aA0vYAiEA901eT1JUJa5zO2GSI9MNS6qTSfjDgwXMVS1%2F35It1ekqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH84Q6o67J6Kf1WniSrcA8qUwVffxKmq5jlBxvwjtdwuvqVTwEqTl4iAb68EW3LxF4IIJvo3Np0LKLzZ%2F9bQlqZevq3ZEp7fgN32%2FbGQ0XG%2BPInZbQnMrrAS8HKfhgd%2BjCev82K9Awhf%2FKKdkpY0xcoHvJI6MUdPR1P44fsO1ENdbtJcKZYAV4bNS8Sh35oFm%2BDqDbuv3ecfIg1BnI09XAKJJgD6obV5K02wgeajCH9yEhSWXJLxDi%2Bj%2Fp3lhxJIByHOz0RideTcrYiVDZ6kVhFYkU%2BatEbDjiFjT3FtOjNxQtoS5ApzWeUyiKmbjXzlAKn3fSkXDPa4UzZvGABUrVU%2F7%2Bro64jg%2FdpXze8ZfFwgkWJY2ee1ioHQ1olv6SbBHngyPK6uzhvmgCJBzHlHakFXH3QCzgy9ETN4VwBuoitpYda%2F0MJfWYadHx%2BRfymSdYt5v91WaZleVqlnubfo9zKqQ5h9wu08rVveE1lJfU%2FN1WUQboXvhA0X3q1ibmZL52M%2F4ZfS5canhYuRiMsvm%2F2fZimZDx1zeTylkrUUsPTDh5TtqZQNJmbShc%2F8vrfjBDW3PN2MDqAZEpHGzYViyN%2B6yLGEt1jOUvO0IyJIFLlj0zbo6AmcYXeRZInONzw400vP7YZVpkijRE6%2FMLWO08IGOqUB%2FuLrJAioAfU%2FOA9jEtTxdKdYGrbwvuX3Bmd9JoJM6sCOEb0aUGydXvNuGPkTT3syoMnc%2Fh8uyVfPIJxNEZHEpzvAmydBEm96U7J4aKCE1kNdMvLxlDuY1bOiWh0UZ3gDcgjMbB1zYy34qPmxcTCP0u5qgAcdUUFd%2BXFqgCLD2wL1BDWDQLRf7y9rfewlTPI61wxuPeQd%2B5vYj5bXoocbyO6KA9lc&X-Amz-Signature=5806306c2d69a0feb703d21ab174e7be7a9e80a88c2f8e1a8dcfc68d6fec4e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
