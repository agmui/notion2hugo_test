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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFUADRF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICa01jMkqnUVAg2iQlRiEB%2BWzcxfupLxYd%2BeKAc6qZjTAiEA0g6j2HNWeH4VRU3zhXjQVI8ifJQp6hkp7Mcs%2BVti8bcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ7iWKMsg4l0PrU6ircAwmXXYoW8Xna0pQuRcidm0jGEX%2BBcPcJU6lNbaN0%2FtMJsT%2FRXX0cewWnSRpNAztCj3jfrM6PV2UbJHr1UH1Yy3U6JS9zposCOHymbYNN3Kk6fDRTXN7pRiYqY3d3ExxKudiGrr7IcunRdhqbErTyns5ysr5Ese4Wcpwi%2FcmW9K2yxijqjJwIpuYxwJUUpvu7r%2BkjxA2UyAEVd9ml%2BzR96zvhDUKqAHgm%2Fn0mWA4Vpp2DGQLVVAB4OgIF7Bd8caFbQCeTstMLB7BIgmJ0lo6YKLHlx24s0PVlJ7eAJT51B4YHfjVUmaqSbGed9w5bsU8LEVSmKOU0NDIhib2Bg9PYcL8ea4DoujSKSmMalHSfTLzQBHsSfkGkOUqWExs%2BqVb6blIF5viaIO14Kg%2F9mQwsSt75zl03PvNOFbwVgavlw7qfoV9TX4EAyvzfoh8gW4%2F4i0ENHQWfCAzJfbATqwQZw0lBGICdoytzQA0ITfj1JfphZmC0USLshDrZGXbRbCkZ2s8IOTqvJ5gDm%2FisAXzgFf62a%2FKRVQNIve8oGGd2JjuIqnDSGSa6lHYKMmmNm%2Frjyp7eyYZ37ILYfNequrrUy4n7zQxiXUA5iKAg%2FW3KpSzLM6caPMDtVYXlC4X7MKOOwsEGOqUB%2BGdo5ulbHZln08h4jHONuVOH%2Fms7UdYjFQ51uw59X5ZKUpcVxWSILF2BVX2W%2FVMlDR4Vf5QjFZQdGiuIr%2B%2B%2FxRMGPSum3n%2FrMu%2FEZKO7D9XHQCKORQhZ7MH8c0bioUOFjMBorRhgM%2FVL5vKG5p5H8tNfcKCHCUarnitRtRt3RtOhaYrxasQSrLZgZqzaE0hMMfTo7LSs0pi60nH6Nzl8XrZYucuC&X-Amz-Signature=bd5f817ba4c45cfd30c1b74d6a5e7c3c5b19a6daf47c1cd285e155c766df7f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFUADRF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICa01jMkqnUVAg2iQlRiEB%2BWzcxfupLxYd%2BeKAc6qZjTAiEA0g6j2HNWeH4VRU3zhXjQVI8ifJQp6hkp7Mcs%2BVti8bcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ7iWKMsg4l0PrU6ircAwmXXYoW8Xna0pQuRcidm0jGEX%2BBcPcJU6lNbaN0%2FtMJsT%2FRXX0cewWnSRpNAztCj3jfrM6PV2UbJHr1UH1Yy3U6JS9zposCOHymbYNN3Kk6fDRTXN7pRiYqY3d3ExxKudiGrr7IcunRdhqbErTyns5ysr5Ese4Wcpwi%2FcmW9K2yxijqjJwIpuYxwJUUpvu7r%2BkjxA2UyAEVd9ml%2BzR96zvhDUKqAHgm%2Fn0mWA4Vpp2DGQLVVAB4OgIF7Bd8caFbQCeTstMLB7BIgmJ0lo6YKLHlx24s0PVlJ7eAJT51B4YHfjVUmaqSbGed9w5bsU8LEVSmKOU0NDIhib2Bg9PYcL8ea4DoujSKSmMalHSfTLzQBHsSfkGkOUqWExs%2BqVb6blIF5viaIO14Kg%2F9mQwsSt75zl03PvNOFbwVgavlw7qfoV9TX4EAyvzfoh8gW4%2F4i0ENHQWfCAzJfbATqwQZw0lBGICdoytzQA0ITfj1JfphZmC0USLshDrZGXbRbCkZ2s8IOTqvJ5gDm%2FisAXzgFf62a%2FKRVQNIve8oGGd2JjuIqnDSGSa6lHYKMmmNm%2Frjyp7eyYZ37ILYfNequrrUy4n7zQxiXUA5iKAg%2FW3KpSzLM6caPMDtVYXlC4X7MKOOwsEGOqUB%2BGdo5ulbHZln08h4jHONuVOH%2Fms7UdYjFQ51uw59X5ZKUpcVxWSILF2BVX2W%2FVMlDR4Vf5QjFZQdGiuIr%2B%2B%2FxRMGPSum3n%2FrMu%2FEZKO7D9XHQCKORQhZ7MH8c0bioUOFjMBorRhgM%2FVL5vKG5p5H8tNfcKCHCUarnitRtRt3RtOhaYrxasQSrLZgZqzaE0hMMfTo7LSs0pi60nH6Nzl8XrZYucuC&X-Amz-Signature=235d6898b0fc83160c2f83b42beb3d6b2e6527556beeeafa79054e9e0fc18d22&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFUADRF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICa01jMkqnUVAg2iQlRiEB%2BWzcxfupLxYd%2BeKAc6qZjTAiEA0g6j2HNWeH4VRU3zhXjQVI8ifJQp6hkp7Mcs%2BVti8bcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ7iWKMsg4l0PrU6ircAwmXXYoW8Xna0pQuRcidm0jGEX%2BBcPcJU6lNbaN0%2FtMJsT%2FRXX0cewWnSRpNAztCj3jfrM6PV2UbJHr1UH1Yy3U6JS9zposCOHymbYNN3Kk6fDRTXN7pRiYqY3d3ExxKudiGrr7IcunRdhqbErTyns5ysr5Ese4Wcpwi%2FcmW9K2yxijqjJwIpuYxwJUUpvu7r%2BkjxA2UyAEVd9ml%2BzR96zvhDUKqAHgm%2Fn0mWA4Vpp2DGQLVVAB4OgIF7Bd8caFbQCeTstMLB7BIgmJ0lo6YKLHlx24s0PVlJ7eAJT51B4YHfjVUmaqSbGed9w5bsU8LEVSmKOU0NDIhib2Bg9PYcL8ea4DoujSKSmMalHSfTLzQBHsSfkGkOUqWExs%2BqVb6blIF5viaIO14Kg%2F9mQwsSt75zl03PvNOFbwVgavlw7qfoV9TX4EAyvzfoh8gW4%2F4i0ENHQWfCAzJfbATqwQZw0lBGICdoytzQA0ITfj1JfphZmC0USLshDrZGXbRbCkZ2s8IOTqvJ5gDm%2FisAXzgFf62a%2FKRVQNIve8oGGd2JjuIqnDSGSa6lHYKMmmNm%2Frjyp7eyYZ37ILYfNequrrUy4n7zQxiXUA5iKAg%2FW3KpSzLM6caPMDtVYXlC4X7MKOOwsEGOqUB%2BGdo5ulbHZln08h4jHONuVOH%2Fms7UdYjFQ51uw59X5ZKUpcVxWSILF2BVX2W%2FVMlDR4Vf5QjFZQdGiuIr%2B%2B%2FxRMGPSum3n%2FrMu%2FEZKO7D9XHQCKORQhZ7MH8c0bioUOFjMBorRhgM%2FVL5vKG5p5H8tNfcKCHCUarnitRtRt3RtOhaYrxasQSrLZgZqzaE0hMMfTo7LSs0pi60nH6Nzl8XrZYucuC&X-Amz-Signature=f277407843d4addb53b7f76d5ee8c282f53cb8d20aea74b96387f294ab254f01&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFUADRF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICa01jMkqnUVAg2iQlRiEB%2BWzcxfupLxYd%2BeKAc6qZjTAiEA0g6j2HNWeH4VRU3zhXjQVI8ifJQp6hkp7Mcs%2BVti8bcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ7iWKMsg4l0PrU6ircAwmXXYoW8Xna0pQuRcidm0jGEX%2BBcPcJU6lNbaN0%2FtMJsT%2FRXX0cewWnSRpNAztCj3jfrM6PV2UbJHr1UH1Yy3U6JS9zposCOHymbYNN3Kk6fDRTXN7pRiYqY3d3ExxKudiGrr7IcunRdhqbErTyns5ysr5Ese4Wcpwi%2FcmW9K2yxijqjJwIpuYxwJUUpvu7r%2BkjxA2UyAEVd9ml%2BzR96zvhDUKqAHgm%2Fn0mWA4Vpp2DGQLVVAB4OgIF7Bd8caFbQCeTstMLB7BIgmJ0lo6YKLHlx24s0PVlJ7eAJT51B4YHfjVUmaqSbGed9w5bsU8LEVSmKOU0NDIhib2Bg9PYcL8ea4DoujSKSmMalHSfTLzQBHsSfkGkOUqWExs%2BqVb6blIF5viaIO14Kg%2F9mQwsSt75zl03PvNOFbwVgavlw7qfoV9TX4EAyvzfoh8gW4%2F4i0ENHQWfCAzJfbATqwQZw0lBGICdoytzQA0ITfj1JfphZmC0USLshDrZGXbRbCkZ2s8IOTqvJ5gDm%2FisAXzgFf62a%2FKRVQNIve8oGGd2JjuIqnDSGSa6lHYKMmmNm%2Frjyp7eyYZ37ILYfNequrrUy4n7zQxiXUA5iKAg%2FW3KpSzLM6caPMDtVYXlC4X7MKOOwsEGOqUB%2BGdo5ulbHZln08h4jHONuVOH%2Fms7UdYjFQ51uw59X5ZKUpcVxWSILF2BVX2W%2FVMlDR4Vf5QjFZQdGiuIr%2B%2B%2FxRMGPSum3n%2FrMu%2FEZKO7D9XHQCKORQhZ7MH8c0bioUOFjMBorRhgM%2FVL5vKG5p5H8tNfcKCHCUarnitRtRt3RtOhaYrxasQSrLZgZqzaE0hMMfTo7LSs0pi60nH6Nzl8XrZYucuC&X-Amz-Signature=340a83383b51047edc1741114eb1e57fbe47e40ada5143bcc52dc5edb0a4d426&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFUADRF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICa01jMkqnUVAg2iQlRiEB%2BWzcxfupLxYd%2BeKAc6qZjTAiEA0g6j2HNWeH4VRU3zhXjQVI8ifJQp6hkp7Mcs%2BVti8bcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ7iWKMsg4l0PrU6ircAwmXXYoW8Xna0pQuRcidm0jGEX%2BBcPcJU6lNbaN0%2FtMJsT%2FRXX0cewWnSRpNAztCj3jfrM6PV2UbJHr1UH1Yy3U6JS9zposCOHymbYNN3Kk6fDRTXN7pRiYqY3d3ExxKudiGrr7IcunRdhqbErTyns5ysr5Ese4Wcpwi%2FcmW9K2yxijqjJwIpuYxwJUUpvu7r%2BkjxA2UyAEVd9ml%2BzR96zvhDUKqAHgm%2Fn0mWA4Vpp2DGQLVVAB4OgIF7Bd8caFbQCeTstMLB7BIgmJ0lo6YKLHlx24s0PVlJ7eAJT51B4YHfjVUmaqSbGed9w5bsU8LEVSmKOU0NDIhib2Bg9PYcL8ea4DoujSKSmMalHSfTLzQBHsSfkGkOUqWExs%2BqVb6blIF5viaIO14Kg%2F9mQwsSt75zl03PvNOFbwVgavlw7qfoV9TX4EAyvzfoh8gW4%2F4i0ENHQWfCAzJfbATqwQZw0lBGICdoytzQA0ITfj1JfphZmC0USLshDrZGXbRbCkZ2s8IOTqvJ5gDm%2FisAXzgFf62a%2FKRVQNIve8oGGd2JjuIqnDSGSa6lHYKMmmNm%2Frjyp7eyYZ37ILYfNequrrUy4n7zQxiXUA5iKAg%2FW3KpSzLM6caPMDtVYXlC4X7MKOOwsEGOqUB%2BGdo5ulbHZln08h4jHONuVOH%2Fms7UdYjFQ51uw59X5ZKUpcVxWSILF2BVX2W%2FVMlDR4Vf5QjFZQdGiuIr%2B%2B%2FxRMGPSum3n%2FrMu%2FEZKO7D9XHQCKORQhZ7MH8c0bioUOFjMBorRhgM%2FVL5vKG5p5H8tNfcKCHCUarnitRtRt3RtOhaYrxasQSrLZgZqzaE0hMMfTo7LSs0pi60nH6Nzl8XrZYucuC&X-Amz-Signature=d517cbfcf9c4c90eaccd1c6cae047ff7e1bcf3841aefedff38903e8a43fa90a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
