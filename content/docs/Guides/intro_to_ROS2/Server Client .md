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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGRF2PY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICdaGykicODsojlaUlrJz8WcF7SR02rP%2BldfRW4EzYWKAiBOUE%2BZYSP3Wbnwxwqx00ZT7TBXPKMdP1lpx7GyUV1S4yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqayvgj8vmksaqrXzKtwDt0FPiFr51XJprBvWApVGMdi%2BpB3ijJpBjsXsFUpiadNB3RNeIn3%2FKHo6J9aXDlwDqy8tSmPJnsoEgNvXUhGozI%2Bin1VJwEBfz6743vnCxx5pmC1YitZL3f%2BROd3GxpF6jEVEqINIEaEI0KZ18wLGd3p19OTkz5cpCZAY%2BT3ULTwtWeDTfZ1kmm%2B593ohxIpKp8HPXMEg5qb2FONHqsC1732WrFzUEFYUlr%2B9mWucfvzAYe6L%2BIad0rof%2FzbHiyqD3t67jP5zi8o0mMA7YMb%2BCJhkHK1zaL2MSPnn2t7bLK3y4lBKwpDndkXn847WqCPkF3z6lesSiZDndvHFIGgxAfXNFq3hCZ1uq8OAZExcb5Hj7NiXoy8BpvxARNK6NQLynZ6U4KAtQipWvk8Tf8CGUrEBf7l%2BSlMCzeeQG8AhmDrijhPRTdd%2BSuSnj9BRhheST7zsPE8SbB7xoNLQS2%2B%2FiY%2BT%2FtTCwmOtsa11KbZAtBapofq988LqvjIdVeJIef8L%2Fabhmyi791wLN%2F4AvdQlcPRUxbDPzF5ZfT1MbEXH%2B9PWhgwcxOWyAPMOaFsep6nYg29DM9xqhJluTSYTogaqLK004wfYBXTVPJdW2gGP8AfGKngVtwA01OqOrUwwrsvIwAY6pgEUgQjkS3FHbqtOfxrsuUtLQel8tUE2RLrU09hMkvzgP4F8%2BiJe%2Bj8dnK1cvupvM3m6wuJOhbOdl4F76utn3u5Ls1BiTvdgENwtS8FUGfBD2hb2utvvcc5yUHRuR6kQ9fwrlNnMukng92qo%2FWR2%2FP7hhqSqlNgg1FyQVUETf6vJAwCYUiX0Q7rHAlSZalk39hGJDrW%2F8sCgguR7IE0Bag0iXvGlc0pO&X-Amz-Signature=3284430410a05feb76c9e82a8149fc4a923bc67dded6b173cc92800a7d2f8f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGRF2PY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICdaGykicODsojlaUlrJz8WcF7SR02rP%2BldfRW4EzYWKAiBOUE%2BZYSP3Wbnwxwqx00ZT7TBXPKMdP1lpx7GyUV1S4yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqayvgj8vmksaqrXzKtwDt0FPiFr51XJprBvWApVGMdi%2BpB3ijJpBjsXsFUpiadNB3RNeIn3%2FKHo6J9aXDlwDqy8tSmPJnsoEgNvXUhGozI%2Bin1VJwEBfz6743vnCxx5pmC1YitZL3f%2BROd3GxpF6jEVEqINIEaEI0KZ18wLGd3p19OTkz5cpCZAY%2BT3ULTwtWeDTfZ1kmm%2B593ohxIpKp8HPXMEg5qb2FONHqsC1732WrFzUEFYUlr%2B9mWucfvzAYe6L%2BIad0rof%2FzbHiyqD3t67jP5zi8o0mMA7YMb%2BCJhkHK1zaL2MSPnn2t7bLK3y4lBKwpDndkXn847WqCPkF3z6lesSiZDndvHFIGgxAfXNFq3hCZ1uq8OAZExcb5Hj7NiXoy8BpvxARNK6NQLynZ6U4KAtQipWvk8Tf8CGUrEBf7l%2BSlMCzeeQG8AhmDrijhPRTdd%2BSuSnj9BRhheST7zsPE8SbB7xoNLQS2%2B%2FiY%2BT%2FtTCwmOtsa11KbZAtBapofq988LqvjIdVeJIef8L%2Fabhmyi791wLN%2F4AvdQlcPRUxbDPzF5ZfT1MbEXH%2B9PWhgwcxOWyAPMOaFsep6nYg29DM9xqhJluTSYTogaqLK004wfYBXTVPJdW2gGP8AfGKngVtwA01OqOrUwwrsvIwAY6pgEUgQjkS3FHbqtOfxrsuUtLQel8tUE2RLrU09hMkvzgP4F8%2BiJe%2Bj8dnK1cvupvM3m6wuJOhbOdl4F76utn3u5Ls1BiTvdgENwtS8FUGfBD2hb2utvvcc5yUHRuR6kQ9fwrlNnMukng92qo%2FWR2%2FP7hhqSqlNgg1FyQVUETf6vJAwCYUiX0Q7rHAlSZalk39hGJDrW%2F8sCgguR7IE0Bag0iXvGlc0pO&X-Amz-Signature=12cf9404a190b622ab60568dbd501a053b9e6c73575e4785450df7cc9b48d4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGRF2PY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICdaGykicODsojlaUlrJz8WcF7SR02rP%2BldfRW4EzYWKAiBOUE%2BZYSP3Wbnwxwqx00ZT7TBXPKMdP1lpx7GyUV1S4yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqayvgj8vmksaqrXzKtwDt0FPiFr51XJprBvWApVGMdi%2BpB3ijJpBjsXsFUpiadNB3RNeIn3%2FKHo6J9aXDlwDqy8tSmPJnsoEgNvXUhGozI%2Bin1VJwEBfz6743vnCxx5pmC1YitZL3f%2BROd3GxpF6jEVEqINIEaEI0KZ18wLGd3p19OTkz5cpCZAY%2BT3ULTwtWeDTfZ1kmm%2B593ohxIpKp8HPXMEg5qb2FONHqsC1732WrFzUEFYUlr%2B9mWucfvzAYe6L%2BIad0rof%2FzbHiyqD3t67jP5zi8o0mMA7YMb%2BCJhkHK1zaL2MSPnn2t7bLK3y4lBKwpDndkXn847WqCPkF3z6lesSiZDndvHFIGgxAfXNFq3hCZ1uq8OAZExcb5Hj7NiXoy8BpvxARNK6NQLynZ6U4KAtQipWvk8Tf8CGUrEBf7l%2BSlMCzeeQG8AhmDrijhPRTdd%2BSuSnj9BRhheST7zsPE8SbB7xoNLQS2%2B%2FiY%2BT%2FtTCwmOtsa11KbZAtBapofq988LqvjIdVeJIef8L%2Fabhmyi791wLN%2F4AvdQlcPRUxbDPzF5ZfT1MbEXH%2B9PWhgwcxOWyAPMOaFsep6nYg29DM9xqhJluTSYTogaqLK004wfYBXTVPJdW2gGP8AfGKngVtwA01OqOrUwwrsvIwAY6pgEUgQjkS3FHbqtOfxrsuUtLQel8tUE2RLrU09hMkvzgP4F8%2BiJe%2Bj8dnK1cvupvM3m6wuJOhbOdl4F76utn3u5Ls1BiTvdgENwtS8FUGfBD2hb2utvvcc5yUHRuR6kQ9fwrlNnMukng92qo%2FWR2%2FP7hhqSqlNgg1FyQVUETf6vJAwCYUiX0Q7rHAlSZalk39hGJDrW%2F8sCgguR7IE0Bag0iXvGlc0pO&X-Amz-Signature=a1984614017f80b949ac89a5d6a2c9a79c476cd6aa1eaf6d42c6c62251a09f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGRF2PY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICdaGykicODsojlaUlrJz8WcF7SR02rP%2BldfRW4EzYWKAiBOUE%2BZYSP3Wbnwxwqx00ZT7TBXPKMdP1lpx7GyUV1S4yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqayvgj8vmksaqrXzKtwDt0FPiFr51XJprBvWApVGMdi%2BpB3ijJpBjsXsFUpiadNB3RNeIn3%2FKHo6J9aXDlwDqy8tSmPJnsoEgNvXUhGozI%2Bin1VJwEBfz6743vnCxx5pmC1YitZL3f%2BROd3GxpF6jEVEqINIEaEI0KZ18wLGd3p19OTkz5cpCZAY%2BT3ULTwtWeDTfZ1kmm%2B593ohxIpKp8HPXMEg5qb2FONHqsC1732WrFzUEFYUlr%2B9mWucfvzAYe6L%2BIad0rof%2FzbHiyqD3t67jP5zi8o0mMA7YMb%2BCJhkHK1zaL2MSPnn2t7bLK3y4lBKwpDndkXn847WqCPkF3z6lesSiZDndvHFIGgxAfXNFq3hCZ1uq8OAZExcb5Hj7NiXoy8BpvxARNK6NQLynZ6U4KAtQipWvk8Tf8CGUrEBf7l%2BSlMCzeeQG8AhmDrijhPRTdd%2BSuSnj9BRhheST7zsPE8SbB7xoNLQS2%2B%2FiY%2BT%2FtTCwmOtsa11KbZAtBapofq988LqvjIdVeJIef8L%2Fabhmyi791wLN%2F4AvdQlcPRUxbDPzF5ZfT1MbEXH%2B9PWhgwcxOWyAPMOaFsep6nYg29DM9xqhJluTSYTogaqLK004wfYBXTVPJdW2gGP8AfGKngVtwA01OqOrUwwrsvIwAY6pgEUgQjkS3FHbqtOfxrsuUtLQel8tUE2RLrU09hMkvzgP4F8%2BiJe%2Bj8dnK1cvupvM3m6wuJOhbOdl4F76utn3u5Ls1BiTvdgENwtS8FUGfBD2hb2utvvcc5yUHRuR6kQ9fwrlNnMukng92qo%2FWR2%2FP7hhqSqlNgg1FyQVUETf6vJAwCYUiX0Q7rHAlSZalk39hGJDrW%2F8sCgguR7IE0Bag0iXvGlc0pO&X-Amz-Signature=d47e35afc22e3de145e7717d3d608e2c318778beae9193854a340597fba435d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGRF2PY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICdaGykicODsojlaUlrJz8WcF7SR02rP%2BldfRW4EzYWKAiBOUE%2BZYSP3Wbnwxwqx00ZT7TBXPKMdP1lpx7GyUV1S4yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqayvgj8vmksaqrXzKtwDt0FPiFr51XJprBvWApVGMdi%2BpB3ijJpBjsXsFUpiadNB3RNeIn3%2FKHo6J9aXDlwDqy8tSmPJnsoEgNvXUhGozI%2Bin1VJwEBfz6743vnCxx5pmC1YitZL3f%2BROd3GxpF6jEVEqINIEaEI0KZ18wLGd3p19OTkz5cpCZAY%2BT3ULTwtWeDTfZ1kmm%2B593ohxIpKp8HPXMEg5qb2FONHqsC1732WrFzUEFYUlr%2B9mWucfvzAYe6L%2BIad0rof%2FzbHiyqD3t67jP5zi8o0mMA7YMb%2BCJhkHK1zaL2MSPnn2t7bLK3y4lBKwpDndkXn847WqCPkF3z6lesSiZDndvHFIGgxAfXNFq3hCZ1uq8OAZExcb5Hj7NiXoy8BpvxARNK6NQLynZ6U4KAtQipWvk8Tf8CGUrEBf7l%2BSlMCzeeQG8AhmDrijhPRTdd%2BSuSnj9BRhheST7zsPE8SbB7xoNLQS2%2B%2FiY%2BT%2FtTCwmOtsa11KbZAtBapofq988LqvjIdVeJIef8L%2Fabhmyi791wLN%2F4AvdQlcPRUxbDPzF5ZfT1MbEXH%2B9PWhgwcxOWyAPMOaFsep6nYg29DM9xqhJluTSYTogaqLK004wfYBXTVPJdW2gGP8AfGKngVtwA01OqOrUwwrsvIwAY6pgEUgQjkS3FHbqtOfxrsuUtLQel8tUE2RLrU09hMkvzgP4F8%2BiJe%2Bj8dnK1cvupvM3m6wuJOhbOdl4F76utn3u5Ls1BiTvdgENwtS8FUGfBD2hb2utvvcc5yUHRuR6kQ9fwrlNnMukng92qo%2FWR2%2FP7hhqSqlNgg1FyQVUETf6vJAwCYUiX0Q7rHAlSZalk39hGJDrW%2F8sCgguR7IE0Bag0iXvGlc0pO&X-Amz-Signature=8280fe763727b81106e52404b3946114e4aec1815a08142e8aee31165a25e013&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
