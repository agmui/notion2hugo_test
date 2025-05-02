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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPI2B2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBqdFI9%2FVG68QM%2F7GeTbSxwl8b7HoCORySCpLpB6MlxnAiEAog3Tb2q633YaZT4hsA8ERH%2FMlYV8jZvktkePUkUiAd0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxN7fvD6BG41VaLmircAxeVnXYNxZIPUJZtI4E%2BpqxCnF6VIRhmEgk4PRBu47pJMmwR68Ems1DDAhNZWffteyFzCK8%2FmRKtG%2FDi0RBHpylRfRQwnzZVcymg4Gf2zeh18kEcTX%2B72T77NxX95E9gEppsdeGhioDnYSZwT2B6FLAwCSPGd5n5l%2BCsSbmUZ8cBlAdcj8Yb6crWFB7vWbTk1uA%2BYGQYeOA5gqGhYxKEt5oGAZGi%2BDLkI9%2FbrrkF%2BEXbl9Qqt1DlcIGQWvXWdysxfMK4msGKXpjYgXa06i06yBKxrSCl9ut4%2FJkrLTFovfqUGYA1B%2FRI2Z13bpu9duGi6d%2B2nHmsIhRxW6YDBi%2B2ViFqebX3x%2Fa4jNCwQYRORgW5p2Qrl9SuvODXKTikloTjEHLzzLtzh%2BYzXyK7DBJeQpxp9%2FngwbVZze55qJCj7aL%2BBQw%2BjDgeKXwmHgw1jjcYim%2FT2t9z8BMfRqw%2BukeZdr12QxjzxV%2BxzstwG%2FyvrCKrN%2FmqeY%2FMCTSJjxbkw38ZKUylTwK78QlpNbTItob1lOpzONgwfA2uj6000FNXKpb1%2F%2FHvx9w9GESnq9yzdUemV7MhkL0PrmN%2FpJp7KJy7eKakjMBXxNQtj%2FYFmWtxybimbOBevasIo5UgHGtLMIat08AGOqUBXPw2sdp4Tag1NFTPF8ZRDLQjNOZVDSWtY5Xh0nZ1omVFpGRhxNnDln5Y%2BDXrFJrff2MhhrgaioLHO%2By8y7k8t%2Bk5OuTrGqJsGXA78K%2BDPGPyA3a6qkjCtzwsCXLE9UdnvatLBys%2BdeLrkYqbQtklnS68lgD6st%2F%2FXkCcmuAgQvXYJHyyH1hyBN8IlBUYvaipW05EIYA1mbjSiy8lQ9VWjnHmzDvp&X-Amz-Signature=c02e783584dccd9410c0b4eda65cc4897c4f0b5085de833b8c182f5ab3f38796&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPI2B2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBqdFI9%2FVG68QM%2F7GeTbSxwl8b7HoCORySCpLpB6MlxnAiEAog3Tb2q633YaZT4hsA8ERH%2FMlYV8jZvktkePUkUiAd0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxN7fvD6BG41VaLmircAxeVnXYNxZIPUJZtI4E%2BpqxCnF6VIRhmEgk4PRBu47pJMmwR68Ems1DDAhNZWffteyFzCK8%2FmRKtG%2FDi0RBHpylRfRQwnzZVcymg4Gf2zeh18kEcTX%2B72T77NxX95E9gEppsdeGhioDnYSZwT2B6FLAwCSPGd5n5l%2BCsSbmUZ8cBlAdcj8Yb6crWFB7vWbTk1uA%2BYGQYeOA5gqGhYxKEt5oGAZGi%2BDLkI9%2FbrrkF%2BEXbl9Qqt1DlcIGQWvXWdysxfMK4msGKXpjYgXa06i06yBKxrSCl9ut4%2FJkrLTFovfqUGYA1B%2FRI2Z13bpu9duGi6d%2B2nHmsIhRxW6YDBi%2B2ViFqebX3x%2Fa4jNCwQYRORgW5p2Qrl9SuvODXKTikloTjEHLzzLtzh%2BYzXyK7DBJeQpxp9%2FngwbVZze55qJCj7aL%2BBQw%2BjDgeKXwmHgw1jjcYim%2FT2t9z8BMfRqw%2BukeZdr12QxjzxV%2BxzstwG%2FyvrCKrN%2FmqeY%2FMCTSJjxbkw38ZKUylTwK78QlpNbTItob1lOpzONgwfA2uj6000FNXKpb1%2F%2FHvx9w9GESnq9yzdUemV7MhkL0PrmN%2FpJp7KJy7eKakjMBXxNQtj%2FYFmWtxybimbOBevasIo5UgHGtLMIat08AGOqUBXPw2sdp4Tag1NFTPF8ZRDLQjNOZVDSWtY5Xh0nZ1omVFpGRhxNnDln5Y%2BDXrFJrff2MhhrgaioLHO%2By8y7k8t%2Bk5OuTrGqJsGXA78K%2BDPGPyA3a6qkjCtzwsCXLE9UdnvatLBys%2BdeLrkYqbQtklnS68lgD6st%2F%2FXkCcmuAgQvXYJHyyH1hyBN8IlBUYvaipW05EIYA1mbjSiy8lQ9VWjnHmzDvp&X-Amz-Signature=e2a5303a4e8de0930e888fd099dc4e49a1abd538b0d44c07e1267c1843ae7b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPI2B2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBqdFI9%2FVG68QM%2F7GeTbSxwl8b7HoCORySCpLpB6MlxnAiEAog3Tb2q633YaZT4hsA8ERH%2FMlYV8jZvktkePUkUiAd0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxN7fvD6BG41VaLmircAxeVnXYNxZIPUJZtI4E%2BpqxCnF6VIRhmEgk4PRBu47pJMmwR68Ems1DDAhNZWffteyFzCK8%2FmRKtG%2FDi0RBHpylRfRQwnzZVcymg4Gf2zeh18kEcTX%2B72T77NxX95E9gEppsdeGhioDnYSZwT2B6FLAwCSPGd5n5l%2BCsSbmUZ8cBlAdcj8Yb6crWFB7vWbTk1uA%2BYGQYeOA5gqGhYxKEt5oGAZGi%2BDLkI9%2FbrrkF%2BEXbl9Qqt1DlcIGQWvXWdysxfMK4msGKXpjYgXa06i06yBKxrSCl9ut4%2FJkrLTFovfqUGYA1B%2FRI2Z13bpu9duGi6d%2B2nHmsIhRxW6YDBi%2B2ViFqebX3x%2Fa4jNCwQYRORgW5p2Qrl9SuvODXKTikloTjEHLzzLtzh%2BYzXyK7DBJeQpxp9%2FngwbVZze55qJCj7aL%2BBQw%2BjDgeKXwmHgw1jjcYim%2FT2t9z8BMfRqw%2BukeZdr12QxjzxV%2BxzstwG%2FyvrCKrN%2FmqeY%2FMCTSJjxbkw38ZKUylTwK78QlpNbTItob1lOpzONgwfA2uj6000FNXKpb1%2F%2FHvx9w9GESnq9yzdUemV7MhkL0PrmN%2FpJp7KJy7eKakjMBXxNQtj%2FYFmWtxybimbOBevasIo5UgHGtLMIat08AGOqUBXPw2sdp4Tag1NFTPF8ZRDLQjNOZVDSWtY5Xh0nZ1omVFpGRhxNnDln5Y%2BDXrFJrff2MhhrgaioLHO%2By8y7k8t%2Bk5OuTrGqJsGXA78K%2BDPGPyA3a6qkjCtzwsCXLE9UdnvatLBys%2BdeLrkYqbQtklnS68lgD6st%2F%2FXkCcmuAgQvXYJHyyH1hyBN8IlBUYvaipW05EIYA1mbjSiy8lQ9VWjnHmzDvp&X-Amz-Signature=9d0b44d806c33cfb1cf243b36d774a22b8531e1cc31ff0fe6a026eb424da4129&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPI2B2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBqdFI9%2FVG68QM%2F7GeTbSxwl8b7HoCORySCpLpB6MlxnAiEAog3Tb2q633YaZT4hsA8ERH%2FMlYV8jZvktkePUkUiAd0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxN7fvD6BG41VaLmircAxeVnXYNxZIPUJZtI4E%2BpqxCnF6VIRhmEgk4PRBu47pJMmwR68Ems1DDAhNZWffteyFzCK8%2FmRKtG%2FDi0RBHpylRfRQwnzZVcymg4Gf2zeh18kEcTX%2B72T77NxX95E9gEppsdeGhioDnYSZwT2B6FLAwCSPGd5n5l%2BCsSbmUZ8cBlAdcj8Yb6crWFB7vWbTk1uA%2BYGQYeOA5gqGhYxKEt5oGAZGi%2BDLkI9%2FbrrkF%2BEXbl9Qqt1DlcIGQWvXWdysxfMK4msGKXpjYgXa06i06yBKxrSCl9ut4%2FJkrLTFovfqUGYA1B%2FRI2Z13bpu9duGi6d%2B2nHmsIhRxW6YDBi%2B2ViFqebX3x%2Fa4jNCwQYRORgW5p2Qrl9SuvODXKTikloTjEHLzzLtzh%2BYzXyK7DBJeQpxp9%2FngwbVZze55qJCj7aL%2BBQw%2BjDgeKXwmHgw1jjcYim%2FT2t9z8BMfRqw%2BukeZdr12QxjzxV%2BxzstwG%2FyvrCKrN%2FmqeY%2FMCTSJjxbkw38ZKUylTwK78QlpNbTItob1lOpzONgwfA2uj6000FNXKpb1%2F%2FHvx9w9GESnq9yzdUemV7MhkL0PrmN%2FpJp7KJy7eKakjMBXxNQtj%2FYFmWtxybimbOBevasIo5UgHGtLMIat08AGOqUBXPw2sdp4Tag1NFTPF8ZRDLQjNOZVDSWtY5Xh0nZ1omVFpGRhxNnDln5Y%2BDXrFJrff2MhhrgaioLHO%2By8y7k8t%2Bk5OuTrGqJsGXA78K%2BDPGPyA3a6qkjCtzwsCXLE9UdnvatLBys%2BdeLrkYqbQtklnS68lgD6st%2F%2FXkCcmuAgQvXYJHyyH1hyBN8IlBUYvaipW05EIYA1mbjSiy8lQ9VWjnHmzDvp&X-Amz-Signature=a46729cc55be28b27697734bd08923b2df2d4bd316efd8b4f7cbd4ed43b53c14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPI2B2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBqdFI9%2FVG68QM%2F7GeTbSxwl8b7HoCORySCpLpB6MlxnAiEAog3Tb2q633YaZT4hsA8ERH%2FMlYV8jZvktkePUkUiAd0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxN7fvD6BG41VaLmircAxeVnXYNxZIPUJZtI4E%2BpqxCnF6VIRhmEgk4PRBu47pJMmwR68Ems1DDAhNZWffteyFzCK8%2FmRKtG%2FDi0RBHpylRfRQwnzZVcymg4Gf2zeh18kEcTX%2B72T77NxX95E9gEppsdeGhioDnYSZwT2B6FLAwCSPGd5n5l%2BCsSbmUZ8cBlAdcj8Yb6crWFB7vWbTk1uA%2BYGQYeOA5gqGhYxKEt5oGAZGi%2BDLkI9%2FbrrkF%2BEXbl9Qqt1DlcIGQWvXWdysxfMK4msGKXpjYgXa06i06yBKxrSCl9ut4%2FJkrLTFovfqUGYA1B%2FRI2Z13bpu9duGi6d%2B2nHmsIhRxW6YDBi%2B2ViFqebX3x%2Fa4jNCwQYRORgW5p2Qrl9SuvODXKTikloTjEHLzzLtzh%2BYzXyK7DBJeQpxp9%2FngwbVZze55qJCj7aL%2BBQw%2BjDgeKXwmHgw1jjcYim%2FT2t9z8BMfRqw%2BukeZdr12QxjzxV%2BxzstwG%2FyvrCKrN%2FmqeY%2FMCTSJjxbkw38ZKUylTwK78QlpNbTItob1lOpzONgwfA2uj6000FNXKpb1%2F%2FHvx9w9GESnq9yzdUemV7MhkL0PrmN%2FpJp7KJy7eKakjMBXxNQtj%2FYFmWtxybimbOBevasIo5UgHGtLMIat08AGOqUBXPw2sdp4Tag1NFTPF8ZRDLQjNOZVDSWtY5Xh0nZ1omVFpGRhxNnDln5Y%2BDXrFJrff2MhhrgaioLHO%2By8y7k8t%2Bk5OuTrGqJsGXA78K%2BDPGPyA3a6qkjCtzwsCXLE9UdnvatLBys%2BdeLrkYqbQtklnS68lgD6st%2F%2FXkCcmuAgQvXYJHyyH1hyBN8IlBUYvaipW05EIYA1mbjSiy8lQ9VWjnHmzDvp&X-Amz-Signature=efbfbd4c4671d1137f6524cda3a2febf459732c6cfa106fe83521725b61dc87a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
