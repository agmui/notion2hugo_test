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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEBB2AI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA81F2K69nxAkEJTE5V6BXCJ1JB%2Fz1UEK4sYpuHMuSnfAiEAqkzpqVH4qtjmh0PIdwSCaQfOdeWkWn0CDa%2BIfT8rRu8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrtMytwu2PZT43UQCrcA20s5t5Rjwqid9nt3SWF%2F6DyKY6Rn9lsDLPpMwYfC1Jt32YvKgs2NWn74ln%2B2qh5BOC06mrBMzGSGjPncbSNf1qQxxrDvfguGbr1e%2BKUK2hMzraOukStG%2Fb5XOMLdF3G96SE6WEY08VByEKrcBLW9NbPoHUkkNUqfwZZZGf%2BhyevoJqvMAnpy%2BlRI%2FfVtC4EmobskSgQt84bLL%2FSMa2pK8Psu2vsQDR1VxH6ZqBYlkV2dLrThZ8t3syfBllE%2Bo24zW2bJuswJprbuIshA%2FozbyFMEuQVcYlT83fe55Yvm%2FITPX6tsO9dC12TTysUOhnOuoeArK4GlQAEXxeuPcBlyVtJUURPDwDitTrjnza%2BAbRurpq7leXZ%2Fd69H%2Fh%2BBPTPOveP3ZOW62KPsboF94Sm1bf%2BffQBXOMsowvFq8RaKVGcAfx9rxQVFCyXmWghWLq8XXItrNrvMEyUK9X5T5r6%2B8i0SBHJ9xkRebno4Wwv3cUMuQQ9dLTGRqAbGgUYCQHgtbqDVXs%2BkWYQzVOAjrnqSkeNQSoJLRKGqIJp9m3UiHCK79hexY4V6KBxvWdjpn03OA1sW%2FZU43mR8tWEMo%2BBMHI2jHBf7OEZ0mrs86KIDqifuh7bteLpEs5P51XjMN6T0r4GOqUBmj%2F56uA7vFUspp%2FQQXGhiezZzaNz5tgNJxlewIixmbzoBnK49hXhY5qyuaVZUnPWu%2BHworVZKaUkY7%2Fm6M4C4CbddqpUHYu4gzIsMkf9bMXMw908gUv5NzTTHwLtm%2BsLS657YpVVKPnTgifUwWzzoHk9pvsFjJn8Y2jZ%2BukB8QSsYKYCZ6PC8OMctm1y6vRWzcpjodlEilJ27%2FODVH6uh80anZ3w&X-Amz-Signature=ca8a0d1b417ba51c7b88f0d31fcac13645f57a01467da6e116ec942ea546d499&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEBB2AI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA81F2K69nxAkEJTE5V6BXCJ1JB%2Fz1UEK4sYpuHMuSnfAiEAqkzpqVH4qtjmh0PIdwSCaQfOdeWkWn0CDa%2BIfT8rRu8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrtMytwu2PZT43UQCrcA20s5t5Rjwqid9nt3SWF%2F6DyKY6Rn9lsDLPpMwYfC1Jt32YvKgs2NWn74ln%2B2qh5BOC06mrBMzGSGjPncbSNf1qQxxrDvfguGbr1e%2BKUK2hMzraOukStG%2Fb5XOMLdF3G96SE6WEY08VByEKrcBLW9NbPoHUkkNUqfwZZZGf%2BhyevoJqvMAnpy%2BlRI%2FfVtC4EmobskSgQt84bLL%2FSMa2pK8Psu2vsQDR1VxH6ZqBYlkV2dLrThZ8t3syfBllE%2Bo24zW2bJuswJprbuIshA%2FozbyFMEuQVcYlT83fe55Yvm%2FITPX6tsO9dC12TTysUOhnOuoeArK4GlQAEXxeuPcBlyVtJUURPDwDitTrjnza%2BAbRurpq7leXZ%2Fd69H%2Fh%2BBPTPOveP3ZOW62KPsboF94Sm1bf%2BffQBXOMsowvFq8RaKVGcAfx9rxQVFCyXmWghWLq8XXItrNrvMEyUK9X5T5r6%2B8i0SBHJ9xkRebno4Wwv3cUMuQQ9dLTGRqAbGgUYCQHgtbqDVXs%2BkWYQzVOAjrnqSkeNQSoJLRKGqIJp9m3UiHCK79hexY4V6KBxvWdjpn03OA1sW%2FZU43mR8tWEMo%2BBMHI2jHBf7OEZ0mrs86KIDqifuh7bteLpEs5P51XjMN6T0r4GOqUBmj%2F56uA7vFUspp%2FQQXGhiezZzaNz5tgNJxlewIixmbzoBnK49hXhY5qyuaVZUnPWu%2BHworVZKaUkY7%2Fm6M4C4CbddqpUHYu4gzIsMkf9bMXMw908gUv5NzTTHwLtm%2BsLS657YpVVKPnTgifUwWzzoHk9pvsFjJn8Y2jZ%2BukB8QSsYKYCZ6PC8OMctm1y6vRWzcpjodlEilJ27%2FODVH6uh80anZ3w&X-Amz-Signature=559ca368e3c0ded04623cb6b89b29f03376bff368ddb62ae289a6220853d82c2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEBB2AI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA81F2K69nxAkEJTE5V6BXCJ1JB%2Fz1UEK4sYpuHMuSnfAiEAqkzpqVH4qtjmh0PIdwSCaQfOdeWkWn0CDa%2BIfT8rRu8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrtMytwu2PZT43UQCrcA20s5t5Rjwqid9nt3SWF%2F6DyKY6Rn9lsDLPpMwYfC1Jt32YvKgs2NWn74ln%2B2qh5BOC06mrBMzGSGjPncbSNf1qQxxrDvfguGbr1e%2BKUK2hMzraOukStG%2Fb5XOMLdF3G96SE6WEY08VByEKrcBLW9NbPoHUkkNUqfwZZZGf%2BhyevoJqvMAnpy%2BlRI%2FfVtC4EmobskSgQt84bLL%2FSMa2pK8Psu2vsQDR1VxH6ZqBYlkV2dLrThZ8t3syfBllE%2Bo24zW2bJuswJprbuIshA%2FozbyFMEuQVcYlT83fe55Yvm%2FITPX6tsO9dC12TTysUOhnOuoeArK4GlQAEXxeuPcBlyVtJUURPDwDitTrjnza%2BAbRurpq7leXZ%2Fd69H%2Fh%2BBPTPOveP3ZOW62KPsboF94Sm1bf%2BffQBXOMsowvFq8RaKVGcAfx9rxQVFCyXmWghWLq8XXItrNrvMEyUK9X5T5r6%2B8i0SBHJ9xkRebno4Wwv3cUMuQQ9dLTGRqAbGgUYCQHgtbqDVXs%2BkWYQzVOAjrnqSkeNQSoJLRKGqIJp9m3UiHCK79hexY4V6KBxvWdjpn03OA1sW%2FZU43mR8tWEMo%2BBMHI2jHBf7OEZ0mrs86KIDqifuh7bteLpEs5P51XjMN6T0r4GOqUBmj%2F56uA7vFUspp%2FQQXGhiezZzaNz5tgNJxlewIixmbzoBnK49hXhY5qyuaVZUnPWu%2BHworVZKaUkY7%2Fm6M4C4CbddqpUHYu4gzIsMkf9bMXMw908gUv5NzTTHwLtm%2BsLS657YpVVKPnTgifUwWzzoHk9pvsFjJn8Y2jZ%2BukB8QSsYKYCZ6PC8OMctm1y6vRWzcpjodlEilJ27%2FODVH6uh80anZ3w&X-Amz-Signature=d867c60009fd299daab0fd6b6f58ac96dcba09c1eb081d8e166cb0c493c2ff1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEBB2AI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA81F2K69nxAkEJTE5V6BXCJ1JB%2Fz1UEK4sYpuHMuSnfAiEAqkzpqVH4qtjmh0PIdwSCaQfOdeWkWn0CDa%2BIfT8rRu8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrtMytwu2PZT43UQCrcA20s5t5Rjwqid9nt3SWF%2F6DyKY6Rn9lsDLPpMwYfC1Jt32YvKgs2NWn74ln%2B2qh5BOC06mrBMzGSGjPncbSNf1qQxxrDvfguGbr1e%2BKUK2hMzraOukStG%2Fb5XOMLdF3G96SE6WEY08VByEKrcBLW9NbPoHUkkNUqfwZZZGf%2BhyevoJqvMAnpy%2BlRI%2FfVtC4EmobskSgQt84bLL%2FSMa2pK8Psu2vsQDR1VxH6ZqBYlkV2dLrThZ8t3syfBllE%2Bo24zW2bJuswJprbuIshA%2FozbyFMEuQVcYlT83fe55Yvm%2FITPX6tsO9dC12TTysUOhnOuoeArK4GlQAEXxeuPcBlyVtJUURPDwDitTrjnza%2BAbRurpq7leXZ%2Fd69H%2Fh%2BBPTPOveP3ZOW62KPsboF94Sm1bf%2BffQBXOMsowvFq8RaKVGcAfx9rxQVFCyXmWghWLq8XXItrNrvMEyUK9X5T5r6%2B8i0SBHJ9xkRebno4Wwv3cUMuQQ9dLTGRqAbGgUYCQHgtbqDVXs%2BkWYQzVOAjrnqSkeNQSoJLRKGqIJp9m3UiHCK79hexY4V6KBxvWdjpn03OA1sW%2FZU43mR8tWEMo%2BBMHI2jHBf7OEZ0mrs86KIDqifuh7bteLpEs5P51XjMN6T0r4GOqUBmj%2F56uA7vFUspp%2FQQXGhiezZzaNz5tgNJxlewIixmbzoBnK49hXhY5qyuaVZUnPWu%2BHworVZKaUkY7%2Fm6M4C4CbddqpUHYu4gzIsMkf9bMXMw908gUv5NzTTHwLtm%2BsLS657YpVVKPnTgifUwWzzoHk9pvsFjJn8Y2jZ%2BukB8QSsYKYCZ6PC8OMctm1y6vRWzcpjodlEilJ27%2FODVH6uh80anZ3w&X-Amz-Signature=bfdd29d51d8a6ce653057dc3804acc0f3f3e6ffa1ccb22fa797929134cfe9154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEBB2AI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA81F2K69nxAkEJTE5V6BXCJ1JB%2Fz1UEK4sYpuHMuSnfAiEAqkzpqVH4qtjmh0PIdwSCaQfOdeWkWn0CDa%2BIfT8rRu8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrtMytwu2PZT43UQCrcA20s5t5Rjwqid9nt3SWF%2F6DyKY6Rn9lsDLPpMwYfC1Jt32YvKgs2NWn74ln%2B2qh5BOC06mrBMzGSGjPncbSNf1qQxxrDvfguGbr1e%2BKUK2hMzraOukStG%2Fb5XOMLdF3G96SE6WEY08VByEKrcBLW9NbPoHUkkNUqfwZZZGf%2BhyevoJqvMAnpy%2BlRI%2FfVtC4EmobskSgQt84bLL%2FSMa2pK8Psu2vsQDR1VxH6ZqBYlkV2dLrThZ8t3syfBllE%2Bo24zW2bJuswJprbuIshA%2FozbyFMEuQVcYlT83fe55Yvm%2FITPX6tsO9dC12TTysUOhnOuoeArK4GlQAEXxeuPcBlyVtJUURPDwDitTrjnza%2BAbRurpq7leXZ%2Fd69H%2Fh%2BBPTPOveP3ZOW62KPsboF94Sm1bf%2BffQBXOMsowvFq8RaKVGcAfx9rxQVFCyXmWghWLq8XXItrNrvMEyUK9X5T5r6%2B8i0SBHJ9xkRebno4Wwv3cUMuQQ9dLTGRqAbGgUYCQHgtbqDVXs%2BkWYQzVOAjrnqSkeNQSoJLRKGqIJp9m3UiHCK79hexY4V6KBxvWdjpn03OA1sW%2FZU43mR8tWEMo%2BBMHI2jHBf7OEZ0mrs86KIDqifuh7bteLpEs5P51XjMN6T0r4GOqUBmj%2F56uA7vFUspp%2FQQXGhiezZzaNz5tgNJxlewIixmbzoBnK49hXhY5qyuaVZUnPWu%2BHworVZKaUkY7%2Fm6M4C4CbddqpUHYu4gzIsMkf9bMXMw908gUv5NzTTHwLtm%2BsLS657YpVVKPnTgifUwWzzoHk9pvsFjJn8Y2jZ%2BukB8QSsYKYCZ6PC8OMctm1y6vRWzcpjodlEilJ27%2FODVH6uh80anZ3w&X-Amz-Signature=5c82f0b5661ae3f240a142bbd319d6556be9d8c41024d0da0c664e87525a551a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
