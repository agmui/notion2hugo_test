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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5EQNRO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eh6KzlGOAki2q%2FlLpTHc5TaJciHHLRpEtcKqUomO%2FAiEA0%2FBzzxJ347ueVquYsJQLjsMiCC4Cw28hJV1OliGbiggqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22cbpLwafZCNge8SrcAxzkJSQLtjlvhaeb4v%2FEZl69yECY%2BSUU6TbHjonhwi8wSGZkxsDWpyL8T2%2FyUsptgmtzBFY2MWwk5OwDartk3T8taUS6qNIC9cAf1oNp99P1KqZtYuFWtVpDqL2R5sGfzTu%2Bvywz2VuoW4ZDzpmO32a10rmIULUtbcFZFeuUsl5uvma%2BvKid2m40iMzhh3T%2FZ%2B5gN7wz4TnjIYiV4Z8glHThtuWXSJ2VRUIU5I8FgTKyDIyG4mcDX8fS2H75Kkb8W%2Fxan8cxndxLE8DynSoNRN8VZ8QJVTKjJMJmXaXWXovq9wx6PxLM%2BdOC6tgNulPc4BZU9VajhDjB78Ouv5NYqwt4V4g8Bg0MZnM6vDNecY8FbGHvFTsc8bekExhHKm5hlWYBAjgp%2B0M9x8ri9ux097OvoBhdrEPsPmKuHSXBAubndeItD%2FmdDoaTqujx3EATT8fqoDN2Zhc9gHr7w4E3AV0HQ6a94ImWB4xsseVgKhKFJMz%2FMsbSfUmqmMtY8kI2kfVA413Uvt0z8yBohY62qMiE3dp95GxtwIr1TcvW18znKlKVM4oWo84Au8h9l4vIXqg3P55zYY02qe9s8YVPzWpS9wGrhvgE42lDo2BM0X%2FOn4TEdYgFribfzLlZMOrkob0GOqUBX6Fl5rtp%2FcCZ2vCPjbsYeDOQXikyKAi%2FGY6sbRaXTln%2FMUeZhrDElWIusgm4tfOYvvhZmvlkAUHpARQYzOXde1NRIO5m%2F51jPkd7lqAaNXNcbM5zSBfV0W3d6A4bhXhvJEkM7jTsfKjAdhRxmTgs2uQdIothJ%2F%2BWneJ6DpyF8C6jLVcwPvtLVC%2B3dM8LeLpxX0tlzrb6CyIFUtghVoZBR3sJPqjr&X-Amz-Signature=b7ce512f137228e874b8b5a6530f886bb8676581e486cf86df8b5c5e35ed1263&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5EQNRO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eh6KzlGOAki2q%2FlLpTHc5TaJciHHLRpEtcKqUomO%2FAiEA0%2FBzzxJ347ueVquYsJQLjsMiCC4Cw28hJV1OliGbiggqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22cbpLwafZCNge8SrcAxzkJSQLtjlvhaeb4v%2FEZl69yECY%2BSUU6TbHjonhwi8wSGZkxsDWpyL8T2%2FyUsptgmtzBFY2MWwk5OwDartk3T8taUS6qNIC9cAf1oNp99P1KqZtYuFWtVpDqL2R5sGfzTu%2Bvywz2VuoW4ZDzpmO32a10rmIULUtbcFZFeuUsl5uvma%2BvKid2m40iMzhh3T%2FZ%2B5gN7wz4TnjIYiV4Z8glHThtuWXSJ2VRUIU5I8FgTKyDIyG4mcDX8fS2H75Kkb8W%2Fxan8cxndxLE8DynSoNRN8VZ8QJVTKjJMJmXaXWXovq9wx6PxLM%2BdOC6tgNulPc4BZU9VajhDjB78Ouv5NYqwt4V4g8Bg0MZnM6vDNecY8FbGHvFTsc8bekExhHKm5hlWYBAjgp%2B0M9x8ri9ux097OvoBhdrEPsPmKuHSXBAubndeItD%2FmdDoaTqujx3EATT8fqoDN2Zhc9gHr7w4E3AV0HQ6a94ImWB4xsseVgKhKFJMz%2FMsbSfUmqmMtY8kI2kfVA413Uvt0z8yBohY62qMiE3dp95GxtwIr1TcvW18znKlKVM4oWo84Au8h9l4vIXqg3P55zYY02qe9s8YVPzWpS9wGrhvgE42lDo2BM0X%2FOn4TEdYgFribfzLlZMOrkob0GOqUBX6Fl5rtp%2FcCZ2vCPjbsYeDOQXikyKAi%2FGY6sbRaXTln%2FMUeZhrDElWIusgm4tfOYvvhZmvlkAUHpARQYzOXde1NRIO5m%2F51jPkd7lqAaNXNcbM5zSBfV0W3d6A4bhXhvJEkM7jTsfKjAdhRxmTgs2uQdIothJ%2F%2BWneJ6DpyF8C6jLVcwPvtLVC%2B3dM8LeLpxX0tlzrb6CyIFUtghVoZBR3sJPqjr&X-Amz-Signature=c3468a5dd7e33cf7c5741c4dae8ccb33e0a17e9dd81709345a7b6d4fecfeef6a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5EQNRO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eh6KzlGOAki2q%2FlLpTHc5TaJciHHLRpEtcKqUomO%2FAiEA0%2FBzzxJ347ueVquYsJQLjsMiCC4Cw28hJV1OliGbiggqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22cbpLwafZCNge8SrcAxzkJSQLtjlvhaeb4v%2FEZl69yECY%2BSUU6TbHjonhwi8wSGZkxsDWpyL8T2%2FyUsptgmtzBFY2MWwk5OwDartk3T8taUS6qNIC9cAf1oNp99P1KqZtYuFWtVpDqL2R5sGfzTu%2Bvywz2VuoW4ZDzpmO32a10rmIULUtbcFZFeuUsl5uvma%2BvKid2m40iMzhh3T%2FZ%2B5gN7wz4TnjIYiV4Z8glHThtuWXSJ2VRUIU5I8FgTKyDIyG4mcDX8fS2H75Kkb8W%2Fxan8cxndxLE8DynSoNRN8VZ8QJVTKjJMJmXaXWXovq9wx6PxLM%2BdOC6tgNulPc4BZU9VajhDjB78Ouv5NYqwt4V4g8Bg0MZnM6vDNecY8FbGHvFTsc8bekExhHKm5hlWYBAjgp%2B0M9x8ri9ux097OvoBhdrEPsPmKuHSXBAubndeItD%2FmdDoaTqujx3EATT8fqoDN2Zhc9gHr7w4E3AV0HQ6a94ImWB4xsseVgKhKFJMz%2FMsbSfUmqmMtY8kI2kfVA413Uvt0z8yBohY62qMiE3dp95GxtwIr1TcvW18znKlKVM4oWo84Au8h9l4vIXqg3P55zYY02qe9s8YVPzWpS9wGrhvgE42lDo2BM0X%2FOn4TEdYgFribfzLlZMOrkob0GOqUBX6Fl5rtp%2FcCZ2vCPjbsYeDOQXikyKAi%2FGY6sbRaXTln%2FMUeZhrDElWIusgm4tfOYvvhZmvlkAUHpARQYzOXde1NRIO5m%2F51jPkd7lqAaNXNcbM5zSBfV0W3d6A4bhXhvJEkM7jTsfKjAdhRxmTgs2uQdIothJ%2F%2BWneJ6DpyF8C6jLVcwPvtLVC%2B3dM8LeLpxX0tlzrb6CyIFUtghVoZBR3sJPqjr&X-Amz-Signature=436917622ef5f41167d43e60467ea9f3579d878fe3ed0702b5c65d3e9a6b7ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5EQNRO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eh6KzlGOAki2q%2FlLpTHc5TaJciHHLRpEtcKqUomO%2FAiEA0%2FBzzxJ347ueVquYsJQLjsMiCC4Cw28hJV1OliGbiggqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22cbpLwafZCNge8SrcAxzkJSQLtjlvhaeb4v%2FEZl69yECY%2BSUU6TbHjonhwi8wSGZkxsDWpyL8T2%2FyUsptgmtzBFY2MWwk5OwDartk3T8taUS6qNIC9cAf1oNp99P1KqZtYuFWtVpDqL2R5sGfzTu%2Bvywz2VuoW4ZDzpmO32a10rmIULUtbcFZFeuUsl5uvma%2BvKid2m40iMzhh3T%2FZ%2B5gN7wz4TnjIYiV4Z8glHThtuWXSJ2VRUIU5I8FgTKyDIyG4mcDX8fS2H75Kkb8W%2Fxan8cxndxLE8DynSoNRN8VZ8QJVTKjJMJmXaXWXovq9wx6PxLM%2BdOC6tgNulPc4BZU9VajhDjB78Ouv5NYqwt4V4g8Bg0MZnM6vDNecY8FbGHvFTsc8bekExhHKm5hlWYBAjgp%2B0M9x8ri9ux097OvoBhdrEPsPmKuHSXBAubndeItD%2FmdDoaTqujx3EATT8fqoDN2Zhc9gHr7w4E3AV0HQ6a94ImWB4xsseVgKhKFJMz%2FMsbSfUmqmMtY8kI2kfVA413Uvt0z8yBohY62qMiE3dp95GxtwIr1TcvW18znKlKVM4oWo84Au8h9l4vIXqg3P55zYY02qe9s8YVPzWpS9wGrhvgE42lDo2BM0X%2FOn4TEdYgFribfzLlZMOrkob0GOqUBX6Fl5rtp%2FcCZ2vCPjbsYeDOQXikyKAi%2FGY6sbRaXTln%2FMUeZhrDElWIusgm4tfOYvvhZmvlkAUHpARQYzOXde1NRIO5m%2F51jPkd7lqAaNXNcbM5zSBfV0W3d6A4bhXhvJEkM7jTsfKjAdhRxmTgs2uQdIothJ%2F%2BWneJ6DpyF8C6jLVcwPvtLVC%2B3dM8LeLpxX0tlzrb6CyIFUtghVoZBR3sJPqjr&X-Amz-Signature=d86048f479b68de66d4e5b76364bb0d3b093f21fe88c05ddc1964bbfeaba75c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5EQNRO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eh6KzlGOAki2q%2FlLpTHc5TaJciHHLRpEtcKqUomO%2FAiEA0%2FBzzxJ347ueVquYsJQLjsMiCC4Cw28hJV1OliGbiggqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22cbpLwafZCNge8SrcAxzkJSQLtjlvhaeb4v%2FEZl69yECY%2BSUU6TbHjonhwi8wSGZkxsDWpyL8T2%2FyUsptgmtzBFY2MWwk5OwDartk3T8taUS6qNIC9cAf1oNp99P1KqZtYuFWtVpDqL2R5sGfzTu%2Bvywz2VuoW4ZDzpmO32a10rmIULUtbcFZFeuUsl5uvma%2BvKid2m40iMzhh3T%2FZ%2B5gN7wz4TnjIYiV4Z8glHThtuWXSJ2VRUIU5I8FgTKyDIyG4mcDX8fS2H75Kkb8W%2Fxan8cxndxLE8DynSoNRN8VZ8QJVTKjJMJmXaXWXovq9wx6PxLM%2BdOC6tgNulPc4BZU9VajhDjB78Ouv5NYqwt4V4g8Bg0MZnM6vDNecY8FbGHvFTsc8bekExhHKm5hlWYBAjgp%2B0M9x8ri9ux097OvoBhdrEPsPmKuHSXBAubndeItD%2FmdDoaTqujx3EATT8fqoDN2Zhc9gHr7w4E3AV0HQ6a94ImWB4xsseVgKhKFJMz%2FMsbSfUmqmMtY8kI2kfVA413Uvt0z8yBohY62qMiE3dp95GxtwIr1TcvW18znKlKVM4oWo84Au8h9l4vIXqg3P55zYY02qe9s8YVPzWpS9wGrhvgE42lDo2BM0X%2FOn4TEdYgFribfzLlZMOrkob0GOqUBX6Fl5rtp%2FcCZ2vCPjbsYeDOQXikyKAi%2FGY6sbRaXTln%2FMUeZhrDElWIusgm4tfOYvvhZmvlkAUHpARQYzOXde1NRIO5m%2F51jPkd7lqAaNXNcbM5zSBfV0W3d6A4bhXhvJEkM7jTsfKjAdhRxmTgs2uQdIothJ%2F%2BWneJ6DpyF8C6jLVcwPvtLVC%2B3dM8LeLpxX0tlzrb6CyIFUtghVoZBR3sJPqjr&X-Amz-Signature=9dea33ea0aac783ec19f6af217017bc9772ed58d4fba2bd16335894def97293e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
