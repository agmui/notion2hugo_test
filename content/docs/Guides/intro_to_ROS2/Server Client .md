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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAAYQ7CO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDRlqkWSqjF3k8zwvyCCgIAxVtMypOO28wjdUUdRwhAiEAwI8Qgy%2FZnFyoAY96pzoZMcIdc%2F%2BETJT05Bq0I%2BOiTHkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHmF0i7lY9msfzGtAircA%2BG571URSrywZyTeY8EZgwWB3Bc0lrKddESBl%2Fpw6q0Bl7ZnmcaYvP%2FJvRFfzuQiWk7IjG%2BtW6s4CTryO8bA1fLh%2Bqja92G%2BqLpxmCq1nUkM1VkZQ5bxdeZ%2F7CP8In0qxMzNwd84VxmzAKV%2FQlduPfeyeJ690uOorqz1rByxy615ydMptVe5pvjbXV1zcxBxVSAuGcEOUrI%2Bz6Nqw%2Bvdi3EOpXwRSiVD3vZe%2BV%2Fz1BLEOP%2FaCFfK8We4M1y8Z%2FcLRxG2KHLdQXvUvZuAPK3vpq%2B6VMQEt9s%2BcG%2F3fbDUDdK7rj4mhnv4DdJI7q9xrwQoobAt9NC%2Fbxs2G%2BcrXxfF9Jv%2FvI5DeBYcNpqCj0yq96F13h%2FyEauMImtMVFCP%2F%2BQw8jHYL%2FTNAVLQ5HfvbXgfdVqvJq8aviDtZwbXhlGMv8Iu9diWuTntSLINQquZ857YilbPcZ4jMdLlpWuIeqLBnbRVLBwYmG5XSOA7r%2Br%2B55WUPKqcrH6Ii%2BIWt%2BsvYvogam7eDhzl1X0DAYLyVIP6c2nB26A2DrXG%2FiiS5RZAwdfgN8WdH8dmMqsRx5uAxjJyYffD8ljvSVG6PHoCmL9F1FXqp5kvlDdCvjKeVu4mxeeLdMVD7GDUoMfgdmllMKqRjcIGOqUBJVevVRS3ZBdnlkKqjJqmgV%2BgL%2BzdlB848RtGG%2BiLw6V3VbTpaYYZxmrbRB817hH1oc82s2AhO9%2Fj4MWr0Gff8Eqq1NBjOOzMIKoQQ6VIURth8Tw7QABr6WNsGGJ4AE6LlkbyNKPkerUF7trhS3%2F7JwA4ISPIE7iu2xbRMZObG7r96i0CLd4cAucrrCZgWv0ng7G1jNGj%2BHemkiPh5zTxLMpPLQVA&X-Amz-Signature=32e62916dde3c83849768d9472b7e29469f2f0717c62bfdc125eec94a288da7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAAYQ7CO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDRlqkWSqjF3k8zwvyCCgIAxVtMypOO28wjdUUdRwhAiEAwI8Qgy%2FZnFyoAY96pzoZMcIdc%2F%2BETJT05Bq0I%2BOiTHkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHmF0i7lY9msfzGtAircA%2BG571URSrywZyTeY8EZgwWB3Bc0lrKddESBl%2Fpw6q0Bl7ZnmcaYvP%2FJvRFfzuQiWk7IjG%2BtW6s4CTryO8bA1fLh%2Bqja92G%2BqLpxmCq1nUkM1VkZQ5bxdeZ%2F7CP8In0qxMzNwd84VxmzAKV%2FQlduPfeyeJ690uOorqz1rByxy615ydMptVe5pvjbXV1zcxBxVSAuGcEOUrI%2Bz6Nqw%2Bvdi3EOpXwRSiVD3vZe%2BV%2Fz1BLEOP%2FaCFfK8We4M1y8Z%2FcLRxG2KHLdQXvUvZuAPK3vpq%2B6VMQEt9s%2BcG%2F3fbDUDdK7rj4mhnv4DdJI7q9xrwQoobAt9NC%2Fbxs2G%2BcrXxfF9Jv%2FvI5DeBYcNpqCj0yq96F13h%2FyEauMImtMVFCP%2F%2BQw8jHYL%2FTNAVLQ5HfvbXgfdVqvJq8aviDtZwbXhlGMv8Iu9diWuTntSLINQquZ857YilbPcZ4jMdLlpWuIeqLBnbRVLBwYmG5XSOA7r%2Br%2B55WUPKqcrH6Ii%2BIWt%2BsvYvogam7eDhzl1X0DAYLyVIP6c2nB26A2DrXG%2FiiS5RZAwdfgN8WdH8dmMqsRx5uAxjJyYffD8ljvSVG6PHoCmL9F1FXqp5kvlDdCvjKeVu4mxeeLdMVD7GDUoMfgdmllMKqRjcIGOqUBJVevVRS3ZBdnlkKqjJqmgV%2BgL%2BzdlB848RtGG%2BiLw6V3VbTpaYYZxmrbRB817hH1oc82s2AhO9%2Fj4MWr0Gff8Eqq1NBjOOzMIKoQQ6VIURth8Tw7QABr6WNsGGJ4AE6LlkbyNKPkerUF7trhS3%2F7JwA4ISPIE7iu2xbRMZObG7r96i0CLd4cAucrrCZgWv0ng7G1jNGj%2BHemkiPh5zTxLMpPLQVA&X-Amz-Signature=76b40fdb8673b4a63ef81ca783703b15e18506b238563779f419f0ba04a4f09c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAAYQ7CO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDRlqkWSqjF3k8zwvyCCgIAxVtMypOO28wjdUUdRwhAiEAwI8Qgy%2FZnFyoAY96pzoZMcIdc%2F%2BETJT05Bq0I%2BOiTHkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHmF0i7lY9msfzGtAircA%2BG571URSrywZyTeY8EZgwWB3Bc0lrKddESBl%2Fpw6q0Bl7ZnmcaYvP%2FJvRFfzuQiWk7IjG%2BtW6s4CTryO8bA1fLh%2Bqja92G%2BqLpxmCq1nUkM1VkZQ5bxdeZ%2F7CP8In0qxMzNwd84VxmzAKV%2FQlduPfeyeJ690uOorqz1rByxy615ydMptVe5pvjbXV1zcxBxVSAuGcEOUrI%2Bz6Nqw%2Bvdi3EOpXwRSiVD3vZe%2BV%2Fz1BLEOP%2FaCFfK8We4M1y8Z%2FcLRxG2KHLdQXvUvZuAPK3vpq%2B6VMQEt9s%2BcG%2F3fbDUDdK7rj4mhnv4DdJI7q9xrwQoobAt9NC%2Fbxs2G%2BcrXxfF9Jv%2FvI5DeBYcNpqCj0yq96F13h%2FyEauMImtMVFCP%2F%2BQw8jHYL%2FTNAVLQ5HfvbXgfdVqvJq8aviDtZwbXhlGMv8Iu9diWuTntSLINQquZ857YilbPcZ4jMdLlpWuIeqLBnbRVLBwYmG5XSOA7r%2Br%2B55WUPKqcrH6Ii%2BIWt%2BsvYvogam7eDhzl1X0DAYLyVIP6c2nB26A2DrXG%2FiiS5RZAwdfgN8WdH8dmMqsRx5uAxjJyYffD8ljvSVG6PHoCmL9F1FXqp5kvlDdCvjKeVu4mxeeLdMVD7GDUoMfgdmllMKqRjcIGOqUBJVevVRS3ZBdnlkKqjJqmgV%2BgL%2BzdlB848RtGG%2BiLw6V3VbTpaYYZxmrbRB817hH1oc82s2AhO9%2Fj4MWr0Gff8Eqq1NBjOOzMIKoQQ6VIURth8Tw7QABr6WNsGGJ4AE6LlkbyNKPkerUF7trhS3%2F7JwA4ISPIE7iu2xbRMZObG7r96i0CLd4cAucrrCZgWv0ng7G1jNGj%2BHemkiPh5zTxLMpPLQVA&X-Amz-Signature=2c5061713b17e21c98aadeafd22a7cbe0051828eb845915251c9afd20293f11c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAAYQ7CO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDRlqkWSqjF3k8zwvyCCgIAxVtMypOO28wjdUUdRwhAiEAwI8Qgy%2FZnFyoAY96pzoZMcIdc%2F%2BETJT05Bq0I%2BOiTHkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHmF0i7lY9msfzGtAircA%2BG571URSrywZyTeY8EZgwWB3Bc0lrKddESBl%2Fpw6q0Bl7ZnmcaYvP%2FJvRFfzuQiWk7IjG%2BtW6s4CTryO8bA1fLh%2Bqja92G%2BqLpxmCq1nUkM1VkZQ5bxdeZ%2F7CP8In0qxMzNwd84VxmzAKV%2FQlduPfeyeJ690uOorqz1rByxy615ydMptVe5pvjbXV1zcxBxVSAuGcEOUrI%2Bz6Nqw%2Bvdi3EOpXwRSiVD3vZe%2BV%2Fz1BLEOP%2FaCFfK8We4M1y8Z%2FcLRxG2KHLdQXvUvZuAPK3vpq%2B6VMQEt9s%2BcG%2F3fbDUDdK7rj4mhnv4DdJI7q9xrwQoobAt9NC%2Fbxs2G%2BcrXxfF9Jv%2FvI5DeBYcNpqCj0yq96F13h%2FyEauMImtMVFCP%2F%2BQw8jHYL%2FTNAVLQ5HfvbXgfdVqvJq8aviDtZwbXhlGMv8Iu9diWuTntSLINQquZ857YilbPcZ4jMdLlpWuIeqLBnbRVLBwYmG5XSOA7r%2Br%2B55WUPKqcrH6Ii%2BIWt%2BsvYvogam7eDhzl1X0DAYLyVIP6c2nB26A2DrXG%2FiiS5RZAwdfgN8WdH8dmMqsRx5uAxjJyYffD8ljvSVG6PHoCmL9F1FXqp5kvlDdCvjKeVu4mxeeLdMVD7GDUoMfgdmllMKqRjcIGOqUBJVevVRS3ZBdnlkKqjJqmgV%2BgL%2BzdlB848RtGG%2BiLw6V3VbTpaYYZxmrbRB817hH1oc82s2AhO9%2Fj4MWr0Gff8Eqq1NBjOOzMIKoQQ6VIURth8Tw7QABr6WNsGGJ4AE6LlkbyNKPkerUF7trhS3%2F7JwA4ISPIE7iu2xbRMZObG7r96i0CLd4cAucrrCZgWv0ng7G1jNGj%2BHemkiPh5zTxLMpPLQVA&X-Amz-Signature=78dab6f3b1c1ba37b45652aea73de50766d2d5750004b525e632c4041b5bc2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAAYQ7CO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDRlqkWSqjF3k8zwvyCCgIAxVtMypOO28wjdUUdRwhAiEAwI8Qgy%2FZnFyoAY96pzoZMcIdc%2F%2BETJT05Bq0I%2BOiTHkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHmF0i7lY9msfzGtAircA%2BG571URSrywZyTeY8EZgwWB3Bc0lrKddESBl%2Fpw6q0Bl7ZnmcaYvP%2FJvRFfzuQiWk7IjG%2BtW6s4CTryO8bA1fLh%2Bqja92G%2BqLpxmCq1nUkM1VkZQ5bxdeZ%2F7CP8In0qxMzNwd84VxmzAKV%2FQlduPfeyeJ690uOorqz1rByxy615ydMptVe5pvjbXV1zcxBxVSAuGcEOUrI%2Bz6Nqw%2Bvdi3EOpXwRSiVD3vZe%2BV%2Fz1BLEOP%2FaCFfK8We4M1y8Z%2FcLRxG2KHLdQXvUvZuAPK3vpq%2B6VMQEt9s%2BcG%2F3fbDUDdK7rj4mhnv4DdJI7q9xrwQoobAt9NC%2Fbxs2G%2BcrXxfF9Jv%2FvI5DeBYcNpqCj0yq96F13h%2FyEauMImtMVFCP%2F%2BQw8jHYL%2FTNAVLQ5HfvbXgfdVqvJq8aviDtZwbXhlGMv8Iu9diWuTntSLINQquZ857YilbPcZ4jMdLlpWuIeqLBnbRVLBwYmG5XSOA7r%2Br%2B55WUPKqcrH6Ii%2BIWt%2BsvYvogam7eDhzl1X0DAYLyVIP6c2nB26A2DrXG%2FiiS5RZAwdfgN8WdH8dmMqsRx5uAxjJyYffD8ljvSVG6PHoCmL9F1FXqp5kvlDdCvjKeVu4mxeeLdMVD7GDUoMfgdmllMKqRjcIGOqUBJVevVRS3ZBdnlkKqjJqmgV%2BgL%2BzdlB848RtGG%2BiLw6V3VbTpaYYZxmrbRB817hH1oc82s2AhO9%2Fj4MWr0Gff8Eqq1NBjOOzMIKoQQ6VIURth8Tw7QABr6WNsGGJ4AE6LlkbyNKPkerUF7trhS3%2F7JwA4ISPIE7iu2xbRMZObG7r96i0CLd4cAucrrCZgWv0ng7G1jNGj%2BHemkiPh5zTxLMpPLQVA&X-Amz-Signature=b120712096ee830fd0d996e00c045398517ce74560242e6fb8efd46be306af71&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
