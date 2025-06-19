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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM5BDOVQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPiaq%2FrDqSEwP1s%2FLoqJaeruS93Li%2BZ1myTkgElevgFAiEAlSK4wBfhUeljQyjuz9q0eAni3QotD4CGK0GkVg0qgksqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iR1ICIaggMA41hyrcAxcbZUtz%2B3hElX%2F9a1tpeGXJ%2FlrptvGejXIfXL5AFBXRT4Bp%2BeTlGsQNaEt5zom8glOpZuJnkJ4GBPBoPKzhGsMizmiR3T5390hy5uIp2K%2BdLmlWvBWOCovFu3v7v0jH5a53HBypKEB5HTycKWFv5fUfq5FnTbwNj%2Bo1%2FN5zwppGUPSeP0u1mCXl2vNmGOoBRx21mgwzETsUk6nDtju9dDOdSrROvKGZ%2FkXq4no6JQ7vfhzJGizcLyjvDU5gzniDaiG62NVo2bbCcn2oZiwKzdZPN26KgQMSsbC2bmwHRCm%2B5vh7baG%2Byw1zGgPx1OYBcBS6ggPi7lmPQ%2BZ6rFZxj90WIZi0oa%2F7qXO4NREggpUGK1rSBXChbqwqfR%2B%2Byfz65YSm%2BH7nhmAM7XiV0sb0AjiBXFErSz8HXtsoIY6E4chDjR7WhXTbefr4xX3IG6t6w7w%2Bw39FOBDv0oQ16Qdffl9GcVPDtxXFKtqBXsT0Ho7V4deqAgMynaNs%2FhZkEx4%2Bo5LH3LY1QG9lig0fs75oGdczqyP0CwAvo2XZV0QDoy1gvFeEncli8qeuCk24lX5rJtNseC3LhKKTzA0Mv1Be00DX9ZOWmakBNBqqHeogAhCtuG6CVoxow%2B6gWjT1MPbe0MIGOqUBRPCoi9Vk%2ByKiDA%2FllZsDtdBwSDq%2FN2d%2F68q8ii%2BRtM80V%2FEnElgmvcDdZf74TBXhIYqQX2C%2F%2F6anwa336PbDKn4vs8mUFnbHWz9wu8NDCYPoWWquoimVa%2BgrUl7HKqCIvWSA4U9IgikvyJgWJZTr0FXsDE4jweCBMb0aQOs7%2FbiSSqCYgpbE8sTQ8LikKTrtEBWGGJJWYDwIv6MpHug1TQ8khI28&X-Amz-Signature=1cb36915a4f5ec23d566456840a6b47e7c1f7d42494759d47c19b88f94795071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM5BDOVQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPiaq%2FrDqSEwP1s%2FLoqJaeruS93Li%2BZ1myTkgElevgFAiEAlSK4wBfhUeljQyjuz9q0eAni3QotD4CGK0GkVg0qgksqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iR1ICIaggMA41hyrcAxcbZUtz%2B3hElX%2F9a1tpeGXJ%2FlrptvGejXIfXL5AFBXRT4Bp%2BeTlGsQNaEt5zom8glOpZuJnkJ4GBPBoPKzhGsMizmiR3T5390hy5uIp2K%2BdLmlWvBWOCovFu3v7v0jH5a53HBypKEB5HTycKWFv5fUfq5FnTbwNj%2Bo1%2FN5zwppGUPSeP0u1mCXl2vNmGOoBRx21mgwzETsUk6nDtju9dDOdSrROvKGZ%2FkXq4no6JQ7vfhzJGizcLyjvDU5gzniDaiG62NVo2bbCcn2oZiwKzdZPN26KgQMSsbC2bmwHRCm%2B5vh7baG%2Byw1zGgPx1OYBcBS6ggPi7lmPQ%2BZ6rFZxj90WIZi0oa%2F7qXO4NREggpUGK1rSBXChbqwqfR%2B%2Byfz65YSm%2BH7nhmAM7XiV0sb0AjiBXFErSz8HXtsoIY6E4chDjR7WhXTbefr4xX3IG6t6w7w%2Bw39FOBDv0oQ16Qdffl9GcVPDtxXFKtqBXsT0Ho7V4deqAgMynaNs%2FhZkEx4%2Bo5LH3LY1QG9lig0fs75oGdczqyP0CwAvo2XZV0QDoy1gvFeEncli8qeuCk24lX5rJtNseC3LhKKTzA0Mv1Be00DX9ZOWmakBNBqqHeogAhCtuG6CVoxow%2B6gWjT1MPbe0MIGOqUBRPCoi9Vk%2ByKiDA%2FllZsDtdBwSDq%2FN2d%2F68q8ii%2BRtM80V%2FEnElgmvcDdZf74TBXhIYqQX2C%2F%2F6anwa336PbDKn4vs8mUFnbHWz9wu8NDCYPoWWquoimVa%2BgrUl7HKqCIvWSA4U9IgikvyJgWJZTr0FXsDE4jweCBMb0aQOs7%2FbiSSqCYgpbE8sTQ8LikKTrtEBWGGJJWYDwIv6MpHug1TQ8khI28&X-Amz-Signature=5a5df70acf8183a9c999352e798d9f81e430960ee85348b7bf68529f9aca8418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM5BDOVQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPiaq%2FrDqSEwP1s%2FLoqJaeruS93Li%2BZ1myTkgElevgFAiEAlSK4wBfhUeljQyjuz9q0eAni3QotD4CGK0GkVg0qgksqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iR1ICIaggMA41hyrcAxcbZUtz%2B3hElX%2F9a1tpeGXJ%2FlrptvGejXIfXL5AFBXRT4Bp%2BeTlGsQNaEt5zom8glOpZuJnkJ4GBPBoPKzhGsMizmiR3T5390hy5uIp2K%2BdLmlWvBWOCovFu3v7v0jH5a53HBypKEB5HTycKWFv5fUfq5FnTbwNj%2Bo1%2FN5zwppGUPSeP0u1mCXl2vNmGOoBRx21mgwzETsUk6nDtju9dDOdSrROvKGZ%2FkXq4no6JQ7vfhzJGizcLyjvDU5gzniDaiG62NVo2bbCcn2oZiwKzdZPN26KgQMSsbC2bmwHRCm%2B5vh7baG%2Byw1zGgPx1OYBcBS6ggPi7lmPQ%2BZ6rFZxj90WIZi0oa%2F7qXO4NREggpUGK1rSBXChbqwqfR%2B%2Byfz65YSm%2BH7nhmAM7XiV0sb0AjiBXFErSz8HXtsoIY6E4chDjR7WhXTbefr4xX3IG6t6w7w%2Bw39FOBDv0oQ16Qdffl9GcVPDtxXFKtqBXsT0Ho7V4deqAgMynaNs%2FhZkEx4%2Bo5LH3LY1QG9lig0fs75oGdczqyP0CwAvo2XZV0QDoy1gvFeEncli8qeuCk24lX5rJtNseC3LhKKTzA0Mv1Be00DX9ZOWmakBNBqqHeogAhCtuG6CVoxow%2B6gWjT1MPbe0MIGOqUBRPCoi9Vk%2ByKiDA%2FllZsDtdBwSDq%2FN2d%2F68q8ii%2BRtM80V%2FEnElgmvcDdZf74TBXhIYqQX2C%2F%2F6anwa336PbDKn4vs8mUFnbHWz9wu8NDCYPoWWquoimVa%2BgrUl7HKqCIvWSA4U9IgikvyJgWJZTr0FXsDE4jweCBMb0aQOs7%2FbiSSqCYgpbE8sTQ8LikKTrtEBWGGJJWYDwIv6MpHug1TQ8khI28&X-Amz-Signature=e5b55d55adb73e7ada2b249b36dd2214774ad767fd27a6d60b82c200c089c3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM5BDOVQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPiaq%2FrDqSEwP1s%2FLoqJaeruS93Li%2BZ1myTkgElevgFAiEAlSK4wBfhUeljQyjuz9q0eAni3QotD4CGK0GkVg0qgksqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iR1ICIaggMA41hyrcAxcbZUtz%2B3hElX%2F9a1tpeGXJ%2FlrptvGejXIfXL5AFBXRT4Bp%2BeTlGsQNaEt5zom8glOpZuJnkJ4GBPBoPKzhGsMizmiR3T5390hy5uIp2K%2BdLmlWvBWOCovFu3v7v0jH5a53HBypKEB5HTycKWFv5fUfq5FnTbwNj%2Bo1%2FN5zwppGUPSeP0u1mCXl2vNmGOoBRx21mgwzETsUk6nDtju9dDOdSrROvKGZ%2FkXq4no6JQ7vfhzJGizcLyjvDU5gzniDaiG62NVo2bbCcn2oZiwKzdZPN26KgQMSsbC2bmwHRCm%2B5vh7baG%2Byw1zGgPx1OYBcBS6ggPi7lmPQ%2BZ6rFZxj90WIZi0oa%2F7qXO4NREggpUGK1rSBXChbqwqfR%2B%2Byfz65YSm%2BH7nhmAM7XiV0sb0AjiBXFErSz8HXtsoIY6E4chDjR7WhXTbefr4xX3IG6t6w7w%2Bw39FOBDv0oQ16Qdffl9GcVPDtxXFKtqBXsT0Ho7V4deqAgMynaNs%2FhZkEx4%2Bo5LH3LY1QG9lig0fs75oGdczqyP0CwAvo2XZV0QDoy1gvFeEncli8qeuCk24lX5rJtNseC3LhKKTzA0Mv1Be00DX9ZOWmakBNBqqHeogAhCtuG6CVoxow%2B6gWjT1MPbe0MIGOqUBRPCoi9Vk%2ByKiDA%2FllZsDtdBwSDq%2FN2d%2F68q8ii%2BRtM80V%2FEnElgmvcDdZf74TBXhIYqQX2C%2F%2F6anwa336PbDKn4vs8mUFnbHWz9wu8NDCYPoWWquoimVa%2BgrUl7HKqCIvWSA4U9IgikvyJgWJZTr0FXsDE4jweCBMb0aQOs7%2FbiSSqCYgpbE8sTQ8LikKTrtEBWGGJJWYDwIv6MpHug1TQ8khI28&X-Amz-Signature=abce875f0b8a19992ecd63c16f748f9bdea40c90d3713880b580a25aa3492d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM5BDOVQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPiaq%2FrDqSEwP1s%2FLoqJaeruS93Li%2BZ1myTkgElevgFAiEAlSK4wBfhUeljQyjuz9q0eAni3QotD4CGK0GkVg0qgksqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iR1ICIaggMA41hyrcAxcbZUtz%2B3hElX%2F9a1tpeGXJ%2FlrptvGejXIfXL5AFBXRT4Bp%2BeTlGsQNaEt5zom8glOpZuJnkJ4GBPBoPKzhGsMizmiR3T5390hy5uIp2K%2BdLmlWvBWOCovFu3v7v0jH5a53HBypKEB5HTycKWFv5fUfq5FnTbwNj%2Bo1%2FN5zwppGUPSeP0u1mCXl2vNmGOoBRx21mgwzETsUk6nDtju9dDOdSrROvKGZ%2FkXq4no6JQ7vfhzJGizcLyjvDU5gzniDaiG62NVo2bbCcn2oZiwKzdZPN26KgQMSsbC2bmwHRCm%2B5vh7baG%2Byw1zGgPx1OYBcBS6ggPi7lmPQ%2BZ6rFZxj90WIZi0oa%2F7qXO4NREggpUGK1rSBXChbqwqfR%2B%2Byfz65YSm%2BH7nhmAM7XiV0sb0AjiBXFErSz8HXtsoIY6E4chDjR7WhXTbefr4xX3IG6t6w7w%2Bw39FOBDv0oQ16Qdffl9GcVPDtxXFKtqBXsT0Ho7V4deqAgMynaNs%2FhZkEx4%2Bo5LH3LY1QG9lig0fs75oGdczqyP0CwAvo2XZV0QDoy1gvFeEncli8qeuCk24lX5rJtNseC3LhKKTzA0Mv1Be00DX9ZOWmakBNBqqHeogAhCtuG6CVoxow%2B6gWjT1MPbe0MIGOqUBRPCoi9Vk%2ByKiDA%2FllZsDtdBwSDq%2FN2d%2F68q8ii%2BRtM80V%2FEnElgmvcDdZf74TBXhIYqQX2C%2F%2F6anwa336PbDKn4vs8mUFnbHWz9wu8NDCYPoWWquoimVa%2BgrUl7HKqCIvWSA4U9IgikvyJgWJZTr0FXsDE4jweCBMb0aQOs7%2FbiSSqCYgpbE8sTQ8LikKTrtEBWGGJJWYDwIv6MpHug1TQ8khI28&X-Amz-Signature=596d722fae8a25bf8d177f094f79a33d849a725c9436e16037edab365d5bd419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
