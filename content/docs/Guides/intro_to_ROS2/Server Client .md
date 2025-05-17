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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNDQDY3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfXFe%2BXqe6glnz3G8osap20m18om0sLHj%2FuwuRsWfFAIgaoegdTpvGERxR6GvTG8ts7EJzoiiNel9mzSks%2BC0%2BQgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBrmT6ZJfqsAYHKiqircA1gXm%2BRl57ctDdrlH7n5svkEzE9uLvC%2FDEVXfmSZBbOKTgUe%2Bq4aJCwKpRpPWzgIFY%2FINLfoPQsKIjgtgLp9oG88mDCgHlaWUEZ%2BpGcYpdFoHA2kQwpIhHEh9WMRAgbHqU2PwiEV9FOUiD9DnSuFbTM0IkazqA3ZMLx2aWHrm7ar0yd1hx8rFFxH01NlHwsFw4RpWUVSubo9ZR%2BaNertPYDPjeibpO884tABjFF%2BaIB45kTLcXU96bcUEz7Q7kltQlpvagbGEGXZJWd1n%2FmIPX0eQ2tw%2BauBzlSzu9uEpVtSrWVaas8T8pEJqJf8T7PVY0FoZguX8pIArBqfQHJzk5Byb13Snd8GqscTizS6Cqn9RI6f40Nq%2B%2BY6GN%2FEm7dURd0lplsTu0tW%2BXZWjv6nQYaqQfGdaUevNuSxsLfLR1Wd4pocf7Dew4RL%2FSLVEQ1yX5UYVxnExhwwqYmPGHBpQhbOOph8KIg5H6OdOh5pA0Sv7ldmSTmVJ1pFuxo2%2FxywPyuzQf2brlgCgYdPPgpscg0idxFJz5VWmyKSXxiYHofn5g%2B1yCwXQajKLASHkPC35JGAKQyHh2gARKTnDYvESbtSkE3VUpxtRtlbsE56WCs1njvIdyJPWfX%2BxorqMIbhoMEGOqUBvxJy9eS9obJNHNTtclEYpBS0DU5YOGkUIkp0aTKNvozdYGFdGwM0T6coMp%2Fb5%2BNPYhFu2ulPs%2BTt5wbTo3mBUNym2ChIvQqazD0EvqWgMDAVW0uo87HoIcrHaBcG%2BUkYEnSGwrA%2F%2BQMKh9wnvZR2n4DMVWMhHugL%2BoMRWla5mV%2F5aYR%2Fw%2FfresZLsNsTnc1kqcwUqC6N4KwhMa%2FZO4saTDuCSKmP&X-Amz-Signature=6f63153a59b8f6fff35ad4a758c5c886eb92f18ec174a7fc296c5d9ed667c574&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNDQDY3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfXFe%2BXqe6glnz3G8osap20m18om0sLHj%2FuwuRsWfFAIgaoegdTpvGERxR6GvTG8ts7EJzoiiNel9mzSks%2BC0%2BQgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBrmT6ZJfqsAYHKiqircA1gXm%2BRl57ctDdrlH7n5svkEzE9uLvC%2FDEVXfmSZBbOKTgUe%2Bq4aJCwKpRpPWzgIFY%2FINLfoPQsKIjgtgLp9oG88mDCgHlaWUEZ%2BpGcYpdFoHA2kQwpIhHEh9WMRAgbHqU2PwiEV9FOUiD9DnSuFbTM0IkazqA3ZMLx2aWHrm7ar0yd1hx8rFFxH01NlHwsFw4RpWUVSubo9ZR%2BaNertPYDPjeibpO884tABjFF%2BaIB45kTLcXU96bcUEz7Q7kltQlpvagbGEGXZJWd1n%2FmIPX0eQ2tw%2BauBzlSzu9uEpVtSrWVaas8T8pEJqJf8T7PVY0FoZguX8pIArBqfQHJzk5Byb13Snd8GqscTizS6Cqn9RI6f40Nq%2B%2BY6GN%2FEm7dURd0lplsTu0tW%2BXZWjv6nQYaqQfGdaUevNuSxsLfLR1Wd4pocf7Dew4RL%2FSLVEQ1yX5UYVxnExhwwqYmPGHBpQhbOOph8KIg5H6OdOh5pA0Sv7ldmSTmVJ1pFuxo2%2FxywPyuzQf2brlgCgYdPPgpscg0idxFJz5VWmyKSXxiYHofn5g%2B1yCwXQajKLASHkPC35JGAKQyHh2gARKTnDYvESbtSkE3VUpxtRtlbsE56WCs1njvIdyJPWfX%2BxorqMIbhoMEGOqUBvxJy9eS9obJNHNTtclEYpBS0DU5YOGkUIkp0aTKNvozdYGFdGwM0T6coMp%2Fb5%2BNPYhFu2ulPs%2BTt5wbTo3mBUNym2ChIvQqazD0EvqWgMDAVW0uo87HoIcrHaBcG%2BUkYEnSGwrA%2F%2BQMKh9wnvZR2n4DMVWMhHugL%2BoMRWla5mV%2F5aYR%2Fw%2FfresZLsNsTnc1kqcwUqC6N4KwhMa%2FZO4saTDuCSKmP&X-Amz-Signature=89b23cb3fb97dfa72c2cef155983d7b7dfd16edbf960e0aafde83d5f39ceb7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNDQDY3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfXFe%2BXqe6glnz3G8osap20m18om0sLHj%2FuwuRsWfFAIgaoegdTpvGERxR6GvTG8ts7EJzoiiNel9mzSks%2BC0%2BQgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBrmT6ZJfqsAYHKiqircA1gXm%2BRl57ctDdrlH7n5svkEzE9uLvC%2FDEVXfmSZBbOKTgUe%2Bq4aJCwKpRpPWzgIFY%2FINLfoPQsKIjgtgLp9oG88mDCgHlaWUEZ%2BpGcYpdFoHA2kQwpIhHEh9WMRAgbHqU2PwiEV9FOUiD9DnSuFbTM0IkazqA3ZMLx2aWHrm7ar0yd1hx8rFFxH01NlHwsFw4RpWUVSubo9ZR%2BaNertPYDPjeibpO884tABjFF%2BaIB45kTLcXU96bcUEz7Q7kltQlpvagbGEGXZJWd1n%2FmIPX0eQ2tw%2BauBzlSzu9uEpVtSrWVaas8T8pEJqJf8T7PVY0FoZguX8pIArBqfQHJzk5Byb13Snd8GqscTizS6Cqn9RI6f40Nq%2B%2BY6GN%2FEm7dURd0lplsTu0tW%2BXZWjv6nQYaqQfGdaUevNuSxsLfLR1Wd4pocf7Dew4RL%2FSLVEQ1yX5UYVxnExhwwqYmPGHBpQhbOOph8KIg5H6OdOh5pA0Sv7ldmSTmVJ1pFuxo2%2FxywPyuzQf2brlgCgYdPPgpscg0idxFJz5VWmyKSXxiYHofn5g%2B1yCwXQajKLASHkPC35JGAKQyHh2gARKTnDYvESbtSkE3VUpxtRtlbsE56WCs1njvIdyJPWfX%2BxorqMIbhoMEGOqUBvxJy9eS9obJNHNTtclEYpBS0DU5YOGkUIkp0aTKNvozdYGFdGwM0T6coMp%2Fb5%2BNPYhFu2ulPs%2BTt5wbTo3mBUNym2ChIvQqazD0EvqWgMDAVW0uo87HoIcrHaBcG%2BUkYEnSGwrA%2F%2BQMKh9wnvZR2n4DMVWMhHugL%2BoMRWla5mV%2F5aYR%2Fw%2FfresZLsNsTnc1kqcwUqC6N4KwhMa%2FZO4saTDuCSKmP&X-Amz-Signature=b587e9376ede2e09e1d88913d82f11b34cf15615d8aa7766bf729b02260fff7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNDQDY3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfXFe%2BXqe6glnz3G8osap20m18om0sLHj%2FuwuRsWfFAIgaoegdTpvGERxR6GvTG8ts7EJzoiiNel9mzSks%2BC0%2BQgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBrmT6ZJfqsAYHKiqircA1gXm%2BRl57ctDdrlH7n5svkEzE9uLvC%2FDEVXfmSZBbOKTgUe%2Bq4aJCwKpRpPWzgIFY%2FINLfoPQsKIjgtgLp9oG88mDCgHlaWUEZ%2BpGcYpdFoHA2kQwpIhHEh9WMRAgbHqU2PwiEV9FOUiD9DnSuFbTM0IkazqA3ZMLx2aWHrm7ar0yd1hx8rFFxH01NlHwsFw4RpWUVSubo9ZR%2BaNertPYDPjeibpO884tABjFF%2BaIB45kTLcXU96bcUEz7Q7kltQlpvagbGEGXZJWd1n%2FmIPX0eQ2tw%2BauBzlSzu9uEpVtSrWVaas8T8pEJqJf8T7PVY0FoZguX8pIArBqfQHJzk5Byb13Snd8GqscTizS6Cqn9RI6f40Nq%2B%2BY6GN%2FEm7dURd0lplsTu0tW%2BXZWjv6nQYaqQfGdaUevNuSxsLfLR1Wd4pocf7Dew4RL%2FSLVEQ1yX5UYVxnExhwwqYmPGHBpQhbOOph8KIg5H6OdOh5pA0Sv7ldmSTmVJ1pFuxo2%2FxywPyuzQf2brlgCgYdPPgpscg0idxFJz5VWmyKSXxiYHofn5g%2B1yCwXQajKLASHkPC35JGAKQyHh2gARKTnDYvESbtSkE3VUpxtRtlbsE56WCs1njvIdyJPWfX%2BxorqMIbhoMEGOqUBvxJy9eS9obJNHNTtclEYpBS0DU5YOGkUIkp0aTKNvozdYGFdGwM0T6coMp%2Fb5%2BNPYhFu2ulPs%2BTt5wbTo3mBUNym2ChIvQqazD0EvqWgMDAVW0uo87HoIcrHaBcG%2BUkYEnSGwrA%2F%2BQMKh9wnvZR2n4DMVWMhHugL%2BoMRWla5mV%2F5aYR%2Fw%2FfresZLsNsTnc1kqcwUqC6N4KwhMa%2FZO4saTDuCSKmP&X-Amz-Signature=9133c5e8cb670abaafd7503e238773add5ff5ef429687f93fe94c16ad7438444&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNDQDY3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfXFe%2BXqe6glnz3G8osap20m18om0sLHj%2FuwuRsWfFAIgaoegdTpvGERxR6GvTG8ts7EJzoiiNel9mzSks%2BC0%2BQgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBrmT6ZJfqsAYHKiqircA1gXm%2BRl57ctDdrlH7n5svkEzE9uLvC%2FDEVXfmSZBbOKTgUe%2Bq4aJCwKpRpPWzgIFY%2FINLfoPQsKIjgtgLp9oG88mDCgHlaWUEZ%2BpGcYpdFoHA2kQwpIhHEh9WMRAgbHqU2PwiEV9FOUiD9DnSuFbTM0IkazqA3ZMLx2aWHrm7ar0yd1hx8rFFxH01NlHwsFw4RpWUVSubo9ZR%2BaNertPYDPjeibpO884tABjFF%2BaIB45kTLcXU96bcUEz7Q7kltQlpvagbGEGXZJWd1n%2FmIPX0eQ2tw%2BauBzlSzu9uEpVtSrWVaas8T8pEJqJf8T7PVY0FoZguX8pIArBqfQHJzk5Byb13Snd8GqscTizS6Cqn9RI6f40Nq%2B%2BY6GN%2FEm7dURd0lplsTu0tW%2BXZWjv6nQYaqQfGdaUevNuSxsLfLR1Wd4pocf7Dew4RL%2FSLVEQ1yX5UYVxnExhwwqYmPGHBpQhbOOph8KIg5H6OdOh5pA0Sv7ldmSTmVJ1pFuxo2%2FxywPyuzQf2brlgCgYdPPgpscg0idxFJz5VWmyKSXxiYHofn5g%2B1yCwXQajKLASHkPC35JGAKQyHh2gARKTnDYvESbtSkE3VUpxtRtlbsE56WCs1njvIdyJPWfX%2BxorqMIbhoMEGOqUBvxJy9eS9obJNHNTtclEYpBS0DU5YOGkUIkp0aTKNvozdYGFdGwM0T6coMp%2Fb5%2BNPYhFu2ulPs%2BTt5wbTo3mBUNym2ChIvQqazD0EvqWgMDAVW0uo87HoIcrHaBcG%2BUkYEnSGwrA%2F%2BQMKh9wnvZR2n4DMVWMhHugL%2BoMRWla5mV%2F5aYR%2Fw%2FfresZLsNsTnc1kqcwUqC6N4KwhMa%2FZO4saTDuCSKmP&X-Amz-Signature=b57622c9d6b85a9735a4a33e02050e94269d3f4b3a35e1847b97e9c487ce9ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
