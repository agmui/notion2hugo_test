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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=a93d4c7bd75e643bb6c506d6a7038c58041fe2b390e26f0c1011728c51d974fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=73267d9fb94814bf567bcefc06847a8a4b2f728b17785bb329010999db4c4616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=b4132fa2418c1cff301d994eaf300fe2a7b5a55224be16b5807498b1e1d19cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=4bcee72a2620873cb09b4d2d89775cc7855a791409c50ee62e4be04e21c22aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=85c2ffff1cb97150a5ee494be86724d63b639cb12a07c854a6e50e268e78428f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
