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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I67MIUH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICdiBswGcXvnLYNYsJlxo%2FHbmrbUET1pQt6QV0Cu3tBkAiEAxExs1N3LDq2Vhlp1e1O%2F7wn5SZsbAg3PJ3mUmyfQdosq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMGJXOD4zv4Q6FVU2yrcA49DWxI3yE0UdDoEX3q90qjZ5sOZL4r7WmOJbU7ZM1Nn8YzUxDfDS4D62FLC%2BTykfdIyt68ewBLnAcU7darVJTMmCVkR0Tr70UEgd%2F3nE%2FhtVlkIYf8jzPM9li%2BmICiHvGUz0%2F8TfdQch99OeM4nxxrv%2FVnsbtss0n8OmmHKZsUJ%2FYbluFjOgd6Xhb0lmrIem0BxDZ1pV5DKtMUiJfqXhHsmt9bdsTMuq4mWBsdgtAQ6YAo8HW6mIbvlU58s8MbqmtcFpeZ77FfhMq8AMoZjN%2FWPAtFxj1AhO1FXu%2BcKtPSRIuAWM5Bb1LQ2kKQtKga9OgnWYg9mPvJJrrK7oZdNgynI1u2iQh3qyem5soMNGX6dFOBIuq78rVzrTQu%2BZdFHKl7gXKS4%2Bvvcyj2zLp84lcZdMzUWvgCuk1YBOJ%2FhQBzlmoTQeNyGfovc4HYlrzy11NRv0mE0qPvpW1qqKzL5tMydIFw%2F4VVOpC6PxLTc8EOmC51la9OHaJ7otny5mgNNOKLZzZzim3zoDvp7uVEA0i4zII2zYLim9mmr1xpGaOH3LaHIJNk2YzD4mPYME%2BCcs0w%2FIMJuD2Fry5B6BN1GrmzdDszTYX%2FOuvVLS%2Byp9eQ0yWffI78rDKt3mAC9MLPskcEGOqUBhrpkgaqUedGefnHwZIhshaPwizYBl7LWpQRWsCH3wQYpe%2FYxTq1SsvxL4rqKW3z9cVc8CbhFK7EBRDWg4xWgd46RJHTBOBuOJnDUW2xhWertjAC6JgiA8AVnFiEKE2yRUiT%2FGNL5JvaRKh6kv%2BQDvaQphQYiTUHZckdlbrJ7yor0duDlNTbYkVggJ0Z4vvOspqDtzYezEIHOzGeRf3MfuXUeqhmX&X-Amz-Signature=f901cfa344ac3e57e9143904e2edd38fade8122fc420a447477ff76b74611249&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I67MIUH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICdiBswGcXvnLYNYsJlxo%2FHbmrbUET1pQt6QV0Cu3tBkAiEAxExs1N3LDq2Vhlp1e1O%2F7wn5SZsbAg3PJ3mUmyfQdosq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMGJXOD4zv4Q6FVU2yrcA49DWxI3yE0UdDoEX3q90qjZ5sOZL4r7WmOJbU7ZM1Nn8YzUxDfDS4D62FLC%2BTykfdIyt68ewBLnAcU7darVJTMmCVkR0Tr70UEgd%2F3nE%2FhtVlkIYf8jzPM9li%2BmICiHvGUz0%2F8TfdQch99OeM4nxxrv%2FVnsbtss0n8OmmHKZsUJ%2FYbluFjOgd6Xhb0lmrIem0BxDZ1pV5DKtMUiJfqXhHsmt9bdsTMuq4mWBsdgtAQ6YAo8HW6mIbvlU58s8MbqmtcFpeZ77FfhMq8AMoZjN%2FWPAtFxj1AhO1FXu%2BcKtPSRIuAWM5Bb1LQ2kKQtKga9OgnWYg9mPvJJrrK7oZdNgynI1u2iQh3qyem5soMNGX6dFOBIuq78rVzrTQu%2BZdFHKl7gXKS4%2Bvvcyj2zLp84lcZdMzUWvgCuk1YBOJ%2FhQBzlmoTQeNyGfovc4HYlrzy11NRv0mE0qPvpW1qqKzL5tMydIFw%2F4VVOpC6PxLTc8EOmC51la9OHaJ7otny5mgNNOKLZzZzim3zoDvp7uVEA0i4zII2zYLim9mmr1xpGaOH3LaHIJNk2YzD4mPYME%2BCcs0w%2FIMJuD2Fry5B6BN1GrmzdDszTYX%2FOuvVLS%2Byp9eQ0yWffI78rDKt3mAC9MLPskcEGOqUBhrpkgaqUedGefnHwZIhshaPwizYBl7LWpQRWsCH3wQYpe%2FYxTq1SsvxL4rqKW3z9cVc8CbhFK7EBRDWg4xWgd46RJHTBOBuOJnDUW2xhWertjAC6JgiA8AVnFiEKE2yRUiT%2FGNL5JvaRKh6kv%2BQDvaQphQYiTUHZckdlbrJ7yor0duDlNTbYkVggJ0Z4vvOspqDtzYezEIHOzGeRf3MfuXUeqhmX&X-Amz-Signature=2f56e0158a76c943345f0d1ad1b199e49785e45ca699cdb15464e6efb64af422&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I67MIUH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICdiBswGcXvnLYNYsJlxo%2FHbmrbUET1pQt6QV0Cu3tBkAiEAxExs1N3LDq2Vhlp1e1O%2F7wn5SZsbAg3PJ3mUmyfQdosq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMGJXOD4zv4Q6FVU2yrcA49DWxI3yE0UdDoEX3q90qjZ5sOZL4r7WmOJbU7ZM1Nn8YzUxDfDS4D62FLC%2BTykfdIyt68ewBLnAcU7darVJTMmCVkR0Tr70UEgd%2F3nE%2FhtVlkIYf8jzPM9li%2BmICiHvGUz0%2F8TfdQch99OeM4nxxrv%2FVnsbtss0n8OmmHKZsUJ%2FYbluFjOgd6Xhb0lmrIem0BxDZ1pV5DKtMUiJfqXhHsmt9bdsTMuq4mWBsdgtAQ6YAo8HW6mIbvlU58s8MbqmtcFpeZ77FfhMq8AMoZjN%2FWPAtFxj1AhO1FXu%2BcKtPSRIuAWM5Bb1LQ2kKQtKga9OgnWYg9mPvJJrrK7oZdNgynI1u2iQh3qyem5soMNGX6dFOBIuq78rVzrTQu%2BZdFHKl7gXKS4%2Bvvcyj2zLp84lcZdMzUWvgCuk1YBOJ%2FhQBzlmoTQeNyGfovc4HYlrzy11NRv0mE0qPvpW1qqKzL5tMydIFw%2F4VVOpC6PxLTc8EOmC51la9OHaJ7otny5mgNNOKLZzZzim3zoDvp7uVEA0i4zII2zYLim9mmr1xpGaOH3LaHIJNk2YzD4mPYME%2BCcs0w%2FIMJuD2Fry5B6BN1GrmzdDszTYX%2FOuvVLS%2Byp9eQ0yWffI78rDKt3mAC9MLPskcEGOqUBhrpkgaqUedGefnHwZIhshaPwizYBl7LWpQRWsCH3wQYpe%2FYxTq1SsvxL4rqKW3z9cVc8CbhFK7EBRDWg4xWgd46RJHTBOBuOJnDUW2xhWertjAC6JgiA8AVnFiEKE2yRUiT%2FGNL5JvaRKh6kv%2BQDvaQphQYiTUHZckdlbrJ7yor0duDlNTbYkVggJ0Z4vvOspqDtzYezEIHOzGeRf3MfuXUeqhmX&X-Amz-Signature=b0e5d027dc5e0ca00b10e1ac62c553b8d39ab2a39e67d7700c8f86c241706666&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I67MIUH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICdiBswGcXvnLYNYsJlxo%2FHbmrbUET1pQt6QV0Cu3tBkAiEAxExs1N3LDq2Vhlp1e1O%2F7wn5SZsbAg3PJ3mUmyfQdosq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMGJXOD4zv4Q6FVU2yrcA49DWxI3yE0UdDoEX3q90qjZ5sOZL4r7WmOJbU7ZM1Nn8YzUxDfDS4D62FLC%2BTykfdIyt68ewBLnAcU7darVJTMmCVkR0Tr70UEgd%2F3nE%2FhtVlkIYf8jzPM9li%2BmICiHvGUz0%2F8TfdQch99OeM4nxxrv%2FVnsbtss0n8OmmHKZsUJ%2FYbluFjOgd6Xhb0lmrIem0BxDZ1pV5DKtMUiJfqXhHsmt9bdsTMuq4mWBsdgtAQ6YAo8HW6mIbvlU58s8MbqmtcFpeZ77FfhMq8AMoZjN%2FWPAtFxj1AhO1FXu%2BcKtPSRIuAWM5Bb1LQ2kKQtKga9OgnWYg9mPvJJrrK7oZdNgynI1u2iQh3qyem5soMNGX6dFOBIuq78rVzrTQu%2BZdFHKl7gXKS4%2Bvvcyj2zLp84lcZdMzUWvgCuk1YBOJ%2FhQBzlmoTQeNyGfovc4HYlrzy11NRv0mE0qPvpW1qqKzL5tMydIFw%2F4VVOpC6PxLTc8EOmC51la9OHaJ7otny5mgNNOKLZzZzim3zoDvp7uVEA0i4zII2zYLim9mmr1xpGaOH3LaHIJNk2YzD4mPYME%2BCcs0w%2FIMJuD2Fry5B6BN1GrmzdDszTYX%2FOuvVLS%2Byp9eQ0yWffI78rDKt3mAC9MLPskcEGOqUBhrpkgaqUedGefnHwZIhshaPwizYBl7LWpQRWsCH3wQYpe%2FYxTq1SsvxL4rqKW3z9cVc8CbhFK7EBRDWg4xWgd46RJHTBOBuOJnDUW2xhWertjAC6JgiA8AVnFiEKE2yRUiT%2FGNL5JvaRKh6kv%2BQDvaQphQYiTUHZckdlbrJ7yor0duDlNTbYkVggJ0Z4vvOspqDtzYezEIHOzGeRf3MfuXUeqhmX&X-Amz-Signature=45a3b4aa3471ef03f05c13cbdf54002e5a245223bcdac50270427f728e1dea21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I67MIUH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICdiBswGcXvnLYNYsJlxo%2FHbmrbUET1pQt6QV0Cu3tBkAiEAxExs1N3LDq2Vhlp1e1O%2F7wn5SZsbAg3PJ3mUmyfQdosq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMGJXOD4zv4Q6FVU2yrcA49DWxI3yE0UdDoEX3q90qjZ5sOZL4r7WmOJbU7ZM1Nn8YzUxDfDS4D62FLC%2BTykfdIyt68ewBLnAcU7darVJTMmCVkR0Tr70UEgd%2F3nE%2FhtVlkIYf8jzPM9li%2BmICiHvGUz0%2F8TfdQch99OeM4nxxrv%2FVnsbtss0n8OmmHKZsUJ%2FYbluFjOgd6Xhb0lmrIem0BxDZ1pV5DKtMUiJfqXhHsmt9bdsTMuq4mWBsdgtAQ6YAo8HW6mIbvlU58s8MbqmtcFpeZ77FfhMq8AMoZjN%2FWPAtFxj1AhO1FXu%2BcKtPSRIuAWM5Bb1LQ2kKQtKga9OgnWYg9mPvJJrrK7oZdNgynI1u2iQh3qyem5soMNGX6dFOBIuq78rVzrTQu%2BZdFHKl7gXKS4%2Bvvcyj2zLp84lcZdMzUWvgCuk1YBOJ%2FhQBzlmoTQeNyGfovc4HYlrzy11NRv0mE0qPvpW1qqKzL5tMydIFw%2F4VVOpC6PxLTc8EOmC51la9OHaJ7otny5mgNNOKLZzZzim3zoDvp7uVEA0i4zII2zYLim9mmr1xpGaOH3LaHIJNk2YzD4mPYME%2BCcs0w%2FIMJuD2Fry5B6BN1GrmzdDszTYX%2FOuvVLS%2Byp9eQ0yWffI78rDKt3mAC9MLPskcEGOqUBhrpkgaqUedGefnHwZIhshaPwizYBl7LWpQRWsCH3wQYpe%2FYxTq1SsvxL4rqKW3z9cVc8CbhFK7EBRDWg4xWgd46RJHTBOBuOJnDUW2xhWertjAC6JgiA8AVnFiEKE2yRUiT%2FGNL5JvaRKh6kv%2BQDvaQphQYiTUHZckdlbrJ7yor0duDlNTbYkVggJ0Z4vvOspqDtzYezEIHOzGeRf3MfuXUeqhmX&X-Amz-Signature=7ffa9799c3f674e716b8d48f82da6fce640b7a7499e72c16dad87ed1ff434edf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
