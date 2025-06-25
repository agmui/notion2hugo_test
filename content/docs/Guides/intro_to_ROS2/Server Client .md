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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LZ5RBE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIELkhLJ2cYR26OU%2F2GAoEHBWT3jpWSNRvc%2BrskhKZEf8AiAdSX5wEwjLZu%2F7PVyxPzrzP4KsOtOAbL%2F7neBgRc2eQSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMgaBEisjLPkV%2BuxI8KtwDuMDjy6YG%2FU2jCm0aVH0Jo8%2BJp1DmdUQZ1kbcYLsXVbacftbdty3NlVrrrzMYKDLRujGU6nL4hwhbMvIPn%2FklDaVEoBzi%2BDp8Xlfq4nMeMD5xrew3ZqtytQyamQD1yam6htMSyuzul5qz%2FDAtlDi9dF7t%2BrxAQskXBtKjLkj9OH9oW7HGBJz0z2KhmVOXITm6dIp6HW0RzebNL%2BDu2F4iUH8tG7TAs70QWPH%2Bw9e5jSCc2KRxeTekESUNj4FEQ0sdV1zbTSQ0R1rkWUGmO61pecDX0Wh6DcZ%2FNNJQphYekzk%2B2fxhwGnbCNByLRxCMDeJWuu0XMz0pWezIeV8wX2BBNgVALBXJyf%2FyBjKOamykq4ISUZaLOXrUGxSPVBGidkHffDJXtdnS6HaVvNs4o0fL3be9rep590UUSpZtkF7alymlyyJ7lfYqqA9iFChSkCq0Fy2PIY1aQw%2BlDoszblHCqEcZa9EbspEKlLBEKXjTfYmurCj1lF0V36sz3e1wQCwQfmthI06UA6Tzc9OiX07oQ9DxzMJdR7EL90nK65ldsJa61sicd32zAPhPYQBNBu%2FKZG2Y9AdK8G7R82iFcf0MgI37xH7p13C4gF4dq7QnsTiWkTSXz6eMATTkdMwkcPtwgY6pgFOlqq4FLvW9%2FTt17tJTVevY%2BR4yehjaK4CsVJzeWe1ymR%2FLQK66bUTvk9VCcs3iWYwTF2OVZA6WNs477KUCo6pJ6FrtOWUYkJGvCyS922i9Nb%2Bfz6Jf50s43Xls8kO5%2F6dZ4Aks16yAtHPVWiAoy3OjXhwlP21Hxxq3QfU%2BIxPJySrY5ikjSDPmz7mDO%2B00Ux3Unu4oKzzE%2BTxhHxpB4e3ujWEYgHk&X-Amz-Signature=f76521ea1b918f705eb2381d9d66c8fc78198bddbbba8de71d15ca7ba40b7231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LZ5RBE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIELkhLJ2cYR26OU%2F2GAoEHBWT3jpWSNRvc%2BrskhKZEf8AiAdSX5wEwjLZu%2F7PVyxPzrzP4KsOtOAbL%2F7neBgRc2eQSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMgaBEisjLPkV%2BuxI8KtwDuMDjy6YG%2FU2jCm0aVH0Jo8%2BJp1DmdUQZ1kbcYLsXVbacftbdty3NlVrrrzMYKDLRujGU6nL4hwhbMvIPn%2FklDaVEoBzi%2BDp8Xlfq4nMeMD5xrew3ZqtytQyamQD1yam6htMSyuzul5qz%2FDAtlDi9dF7t%2BrxAQskXBtKjLkj9OH9oW7HGBJz0z2KhmVOXITm6dIp6HW0RzebNL%2BDu2F4iUH8tG7TAs70QWPH%2Bw9e5jSCc2KRxeTekESUNj4FEQ0sdV1zbTSQ0R1rkWUGmO61pecDX0Wh6DcZ%2FNNJQphYekzk%2B2fxhwGnbCNByLRxCMDeJWuu0XMz0pWezIeV8wX2BBNgVALBXJyf%2FyBjKOamykq4ISUZaLOXrUGxSPVBGidkHffDJXtdnS6HaVvNs4o0fL3be9rep590UUSpZtkF7alymlyyJ7lfYqqA9iFChSkCq0Fy2PIY1aQw%2BlDoszblHCqEcZa9EbspEKlLBEKXjTfYmurCj1lF0V36sz3e1wQCwQfmthI06UA6Tzc9OiX07oQ9DxzMJdR7EL90nK65ldsJa61sicd32zAPhPYQBNBu%2FKZG2Y9AdK8G7R82iFcf0MgI37xH7p13C4gF4dq7QnsTiWkTSXz6eMATTkdMwkcPtwgY6pgFOlqq4FLvW9%2FTt17tJTVevY%2BR4yehjaK4CsVJzeWe1ymR%2FLQK66bUTvk9VCcs3iWYwTF2OVZA6WNs477KUCo6pJ6FrtOWUYkJGvCyS922i9Nb%2Bfz6Jf50s43Xls8kO5%2F6dZ4Aks16yAtHPVWiAoy3OjXhwlP21Hxxq3QfU%2BIxPJySrY5ikjSDPmz7mDO%2B00Ux3Unu4oKzzE%2BTxhHxpB4e3ujWEYgHk&X-Amz-Signature=d5e866ba6ba57784f424384ef80cc3474a1380fbf2645e1a4dfe2789dabde1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LZ5RBE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIELkhLJ2cYR26OU%2F2GAoEHBWT3jpWSNRvc%2BrskhKZEf8AiAdSX5wEwjLZu%2F7PVyxPzrzP4KsOtOAbL%2F7neBgRc2eQSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMgaBEisjLPkV%2BuxI8KtwDuMDjy6YG%2FU2jCm0aVH0Jo8%2BJp1DmdUQZ1kbcYLsXVbacftbdty3NlVrrrzMYKDLRujGU6nL4hwhbMvIPn%2FklDaVEoBzi%2BDp8Xlfq4nMeMD5xrew3ZqtytQyamQD1yam6htMSyuzul5qz%2FDAtlDi9dF7t%2BrxAQskXBtKjLkj9OH9oW7HGBJz0z2KhmVOXITm6dIp6HW0RzebNL%2BDu2F4iUH8tG7TAs70QWPH%2Bw9e5jSCc2KRxeTekESUNj4FEQ0sdV1zbTSQ0R1rkWUGmO61pecDX0Wh6DcZ%2FNNJQphYekzk%2B2fxhwGnbCNByLRxCMDeJWuu0XMz0pWezIeV8wX2BBNgVALBXJyf%2FyBjKOamykq4ISUZaLOXrUGxSPVBGidkHffDJXtdnS6HaVvNs4o0fL3be9rep590UUSpZtkF7alymlyyJ7lfYqqA9iFChSkCq0Fy2PIY1aQw%2BlDoszblHCqEcZa9EbspEKlLBEKXjTfYmurCj1lF0V36sz3e1wQCwQfmthI06UA6Tzc9OiX07oQ9DxzMJdR7EL90nK65ldsJa61sicd32zAPhPYQBNBu%2FKZG2Y9AdK8G7R82iFcf0MgI37xH7p13C4gF4dq7QnsTiWkTSXz6eMATTkdMwkcPtwgY6pgFOlqq4FLvW9%2FTt17tJTVevY%2BR4yehjaK4CsVJzeWe1ymR%2FLQK66bUTvk9VCcs3iWYwTF2OVZA6WNs477KUCo6pJ6FrtOWUYkJGvCyS922i9Nb%2Bfz6Jf50s43Xls8kO5%2F6dZ4Aks16yAtHPVWiAoy3OjXhwlP21Hxxq3QfU%2BIxPJySrY5ikjSDPmz7mDO%2B00Ux3Unu4oKzzE%2BTxhHxpB4e3ujWEYgHk&X-Amz-Signature=4246a5b16755b85032e6dfcc442f6889d771f45ea066362695f53af0335ff7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LZ5RBE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIELkhLJ2cYR26OU%2F2GAoEHBWT3jpWSNRvc%2BrskhKZEf8AiAdSX5wEwjLZu%2F7PVyxPzrzP4KsOtOAbL%2F7neBgRc2eQSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMgaBEisjLPkV%2BuxI8KtwDuMDjy6YG%2FU2jCm0aVH0Jo8%2BJp1DmdUQZ1kbcYLsXVbacftbdty3NlVrrrzMYKDLRujGU6nL4hwhbMvIPn%2FklDaVEoBzi%2BDp8Xlfq4nMeMD5xrew3ZqtytQyamQD1yam6htMSyuzul5qz%2FDAtlDi9dF7t%2BrxAQskXBtKjLkj9OH9oW7HGBJz0z2KhmVOXITm6dIp6HW0RzebNL%2BDu2F4iUH8tG7TAs70QWPH%2Bw9e5jSCc2KRxeTekESUNj4FEQ0sdV1zbTSQ0R1rkWUGmO61pecDX0Wh6DcZ%2FNNJQphYekzk%2B2fxhwGnbCNByLRxCMDeJWuu0XMz0pWezIeV8wX2BBNgVALBXJyf%2FyBjKOamykq4ISUZaLOXrUGxSPVBGidkHffDJXtdnS6HaVvNs4o0fL3be9rep590UUSpZtkF7alymlyyJ7lfYqqA9iFChSkCq0Fy2PIY1aQw%2BlDoszblHCqEcZa9EbspEKlLBEKXjTfYmurCj1lF0V36sz3e1wQCwQfmthI06UA6Tzc9OiX07oQ9DxzMJdR7EL90nK65ldsJa61sicd32zAPhPYQBNBu%2FKZG2Y9AdK8G7R82iFcf0MgI37xH7p13C4gF4dq7QnsTiWkTSXz6eMATTkdMwkcPtwgY6pgFOlqq4FLvW9%2FTt17tJTVevY%2BR4yehjaK4CsVJzeWe1ymR%2FLQK66bUTvk9VCcs3iWYwTF2OVZA6WNs477KUCo6pJ6FrtOWUYkJGvCyS922i9Nb%2Bfz6Jf50s43Xls8kO5%2F6dZ4Aks16yAtHPVWiAoy3OjXhwlP21Hxxq3QfU%2BIxPJySrY5ikjSDPmz7mDO%2B00Ux3Unu4oKzzE%2BTxhHxpB4e3ujWEYgHk&X-Amz-Signature=0dd8c2acfdb2a655fb49e1e057edcbeabb77074b905963235220623980ff1f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LZ5RBE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIELkhLJ2cYR26OU%2F2GAoEHBWT3jpWSNRvc%2BrskhKZEf8AiAdSX5wEwjLZu%2F7PVyxPzrzP4KsOtOAbL%2F7neBgRc2eQSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMgaBEisjLPkV%2BuxI8KtwDuMDjy6YG%2FU2jCm0aVH0Jo8%2BJp1DmdUQZ1kbcYLsXVbacftbdty3NlVrrrzMYKDLRujGU6nL4hwhbMvIPn%2FklDaVEoBzi%2BDp8Xlfq4nMeMD5xrew3ZqtytQyamQD1yam6htMSyuzul5qz%2FDAtlDi9dF7t%2BrxAQskXBtKjLkj9OH9oW7HGBJz0z2KhmVOXITm6dIp6HW0RzebNL%2BDu2F4iUH8tG7TAs70QWPH%2Bw9e5jSCc2KRxeTekESUNj4FEQ0sdV1zbTSQ0R1rkWUGmO61pecDX0Wh6DcZ%2FNNJQphYekzk%2B2fxhwGnbCNByLRxCMDeJWuu0XMz0pWezIeV8wX2BBNgVALBXJyf%2FyBjKOamykq4ISUZaLOXrUGxSPVBGidkHffDJXtdnS6HaVvNs4o0fL3be9rep590UUSpZtkF7alymlyyJ7lfYqqA9iFChSkCq0Fy2PIY1aQw%2BlDoszblHCqEcZa9EbspEKlLBEKXjTfYmurCj1lF0V36sz3e1wQCwQfmthI06UA6Tzc9OiX07oQ9DxzMJdR7EL90nK65ldsJa61sicd32zAPhPYQBNBu%2FKZG2Y9AdK8G7R82iFcf0MgI37xH7p13C4gF4dq7QnsTiWkTSXz6eMATTkdMwkcPtwgY6pgFOlqq4FLvW9%2FTt17tJTVevY%2BR4yehjaK4CsVJzeWe1ymR%2FLQK66bUTvk9VCcs3iWYwTF2OVZA6WNs477KUCo6pJ6FrtOWUYkJGvCyS922i9Nb%2Bfz6Jf50s43Xls8kO5%2F6dZ4Aks16yAtHPVWiAoy3OjXhwlP21Hxxq3QfU%2BIxPJySrY5ikjSDPmz7mDO%2B00Ux3Unu4oKzzE%2BTxhHxpB4e3ujWEYgHk&X-Amz-Signature=171c2a7b6276147a74cb6b1354e1ef34b3d9c9c8fb4009d7010b6da9493003c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
