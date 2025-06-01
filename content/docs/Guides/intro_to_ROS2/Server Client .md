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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUVKPHKF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCkNae59QjVb8naHJRnSiCX892Wi6Vsufxrxyt7eC2s7wIgEOMY3CUrvK%2BlDRvyqp63W%2F5wxCwUOJdnBqmyz57eHhcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkLP6vltaIpFMkEMircA6fbZJVkkuGP9xfjFyfdQWiVvONgJON9s%2BE1H%2BvMBF7XXLsfIOF3IbB%2BBYejdW8CVEojb3xVCOG6aBb0hkJrN8CbhlCSkKGxPQykqk0oIhOqKYwFjY34flMUXrTYWlHHUIOk9KFmWdkWmx%2BgOuRUrMZvMyxjO1RWgShnzWKZLeMvwDNc2pSCzIOGSAXkYYxNyR8%2FbmWQH1bYLF6UG4LbkzBDbzumC%2FuXb3iHiN%2FAmBsEr%2FwvMrXDcxURXhgdYTp3PmJPGU61B8odm1fbnjznxQmpYqC%2Be6BG7gmEuU8wi4165%2FqbGYUsd9iEIr7Dnnr%2FPT%2FkSrYpTXaCdbdj19f7hvqh3Q1mFpRvWXZpO%2BTDIbRAytfFeqc1llNLDpcqF4a8XJf4RABVV3FP94C%2F7mgOksSkOss969Je7T%2F3CljgCNw9WCuD8goDH7jGvTBoGSXUbcq002QnPbXlUTITyFh8GHNhD4gTji4ALGpzTCykkDDqdFY%2F1B%2B6Tgl6YBRtpD5e3CjMvW%2F0LDyCyKTws7C0MvivGpNXMujk%2F%2FEOrB8xHKh48HtkL2WQQyGRWrb6Flq%2B7hs9RIan%2B5n%2BsyvQb58M5c7nQCzoVgwjKJwbxEwej52Zxxv7pB7E3Mf2VLKDMJDf8MEGOqUBce2gZo6Rmm5zjnfxPl%2BWV%2FcWip%2Fx8jY9NbHmzJrMymPWiMGTNAqBvNI%2Fsa%2FvlpUzLkLU6vC23yrxR3jZuQvnrKhdV43ytRB9zgrUdHAqQ838fkVQ3DoPGvjMDnmAco6t6lOuIL%2FTn0ujfodvst%2BDRSLG98PzLs4HQi9Sa0jjLpYrwtZtrE1iNIHX%2BRFmG4lnePeQ%2B6xmgZbha3Ggg%2B4OfXN5ZfoB&X-Amz-Signature=aae95f04ff4c8dd272a2fac447b381b3bdaf8d84809219f456d50044de51efdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUVKPHKF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCkNae59QjVb8naHJRnSiCX892Wi6Vsufxrxyt7eC2s7wIgEOMY3CUrvK%2BlDRvyqp63W%2F5wxCwUOJdnBqmyz57eHhcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkLP6vltaIpFMkEMircA6fbZJVkkuGP9xfjFyfdQWiVvONgJON9s%2BE1H%2BvMBF7XXLsfIOF3IbB%2BBYejdW8CVEojb3xVCOG6aBb0hkJrN8CbhlCSkKGxPQykqk0oIhOqKYwFjY34flMUXrTYWlHHUIOk9KFmWdkWmx%2BgOuRUrMZvMyxjO1RWgShnzWKZLeMvwDNc2pSCzIOGSAXkYYxNyR8%2FbmWQH1bYLF6UG4LbkzBDbzumC%2FuXb3iHiN%2FAmBsEr%2FwvMrXDcxURXhgdYTp3PmJPGU61B8odm1fbnjznxQmpYqC%2Be6BG7gmEuU8wi4165%2FqbGYUsd9iEIr7Dnnr%2FPT%2FkSrYpTXaCdbdj19f7hvqh3Q1mFpRvWXZpO%2BTDIbRAytfFeqc1llNLDpcqF4a8XJf4RABVV3FP94C%2F7mgOksSkOss969Je7T%2F3CljgCNw9WCuD8goDH7jGvTBoGSXUbcq002QnPbXlUTITyFh8GHNhD4gTji4ALGpzTCykkDDqdFY%2F1B%2B6Tgl6YBRtpD5e3CjMvW%2F0LDyCyKTws7C0MvivGpNXMujk%2F%2FEOrB8xHKh48HtkL2WQQyGRWrb6Flq%2B7hs9RIan%2B5n%2BsyvQb58M5c7nQCzoVgwjKJwbxEwej52Zxxv7pB7E3Mf2VLKDMJDf8MEGOqUBce2gZo6Rmm5zjnfxPl%2BWV%2FcWip%2Fx8jY9NbHmzJrMymPWiMGTNAqBvNI%2Fsa%2FvlpUzLkLU6vC23yrxR3jZuQvnrKhdV43ytRB9zgrUdHAqQ838fkVQ3DoPGvjMDnmAco6t6lOuIL%2FTn0ujfodvst%2BDRSLG98PzLs4HQi9Sa0jjLpYrwtZtrE1iNIHX%2BRFmG4lnePeQ%2B6xmgZbha3Ggg%2B4OfXN5ZfoB&X-Amz-Signature=8a6679fcc70c7bc47fe30c0228c4bf8a960acee0dc8fe4d53764b3e150bb5de3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUVKPHKF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCkNae59QjVb8naHJRnSiCX892Wi6Vsufxrxyt7eC2s7wIgEOMY3CUrvK%2BlDRvyqp63W%2F5wxCwUOJdnBqmyz57eHhcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkLP6vltaIpFMkEMircA6fbZJVkkuGP9xfjFyfdQWiVvONgJON9s%2BE1H%2BvMBF7XXLsfIOF3IbB%2BBYejdW8CVEojb3xVCOG6aBb0hkJrN8CbhlCSkKGxPQykqk0oIhOqKYwFjY34flMUXrTYWlHHUIOk9KFmWdkWmx%2BgOuRUrMZvMyxjO1RWgShnzWKZLeMvwDNc2pSCzIOGSAXkYYxNyR8%2FbmWQH1bYLF6UG4LbkzBDbzumC%2FuXb3iHiN%2FAmBsEr%2FwvMrXDcxURXhgdYTp3PmJPGU61B8odm1fbnjznxQmpYqC%2Be6BG7gmEuU8wi4165%2FqbGYUsd9iEIr7Dnnr%2FPT%2FkSrYpTXaCdbdj19f7hvqh3Q1mFpRvWXZpO%2BTDIbRAytfFeqc1llNLDpcqF4a8XJf4RABVV3FP94C%2F7mgOksSkOss969Je7T%2F3CljgCNw9WCuD8goDH7jGvTBoGSXUbcq002QnPbXlUTITyFh8GHNhD4gTji4ALGpzTCykkDDqdFY%2F1B%2B6Tgl6YBRtpD5e3CjMvW%2F0LDyCyKTws7C0MvivGpNXMujk%2F%2FEOrB8xHKh48HtkL2WQQyGRWrb6Flq%2B7hs9RIan%2B5n%2BsyvQb58M5c7nQCzoVgwjKJwbxEwej52Zxxv7pB7E3Mf2VLKDMJDf8MEGOqUBce2gZo6Rmm5zjnfxPl%2BWV%2FcWip%2Fx8jY9NbHmzJrMymPWiMGTNAqBvNI%2Fsa%2FvlpUzLkLU6vC23yrxR3jZuQvnrKhdV43ytRB9zgrUdHAqQ838fkVQ3DoPGvjMDnmAco6t6lOuIL%2FTn0ujfodvst%2BDRSLG98PzLs4HQi9Sa0jjLpYrwtZtrE1iNIHX%2BRFmG4lnePeQ%2B6xmgZbha3Ggg%2B4OfXN5ZfoB&X-Amz-Signature=97f1a5f7963533fc224e6757d7915553a45d6ef61f5b2076e3ad6a810ae3c359&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUVKPHKF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCkNae59QjVb8naHJRnSiCX892Wi6Vsufxrxyt7eC2s7wIgEOMY3CUrvK%2BlDRvyqp63W%2F5wxCwUOJdnBqmyz57eHhcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkLP6vltaIpFMkEMircA6fbZJVkkuGP9xfjFyfdQWiVvONgJON9s%2BE1H%2BvMBF7XXLsfIOF3IbB%2BBYejdW8CVEojb3xVCOG6aBb0hkJrN8CbhlCSkKGxPQykqk0oIhOqKYwFjY34flMUXrTYWlHHUIOk9KFmWdkWmx%2BgOuRUrMZvMyxjO1RWgShnzWKZLeMvwDNc2pSCzIOGSAXkYYxNyR8%2FbmWQH1bYLF6UG4LbkzBDbzumC%2FuXb3iHiN%2FAmBsEr%2FwvMrXDcxURXhgdYTp3PmJPGU61B8odm1fbnjznxQmpYqC%2Be6BG7gmEuU8wi4165%2FqbGYUsd9iEIr7Dnnr%2FPT%2FkSrYpTXaCdbdj19f7hvqh3Q1mFpRvWXZpO%2BTDIbRAytfFeqc1llNLDpcqF4a8XJf4RABVV3FP94C%2F7mgOksSkOss969Je7T%2F3CljgCNw9WCuD8goDH7jGvTBoGSXUbcq002QnPbXlUTITyFh8GHNhD4gTji4ALGpzTCykkDDqdFY%2F1B%2B6Tgl6YBRtpD5e3CjMvW%2F0LDyCyKTws7C0MvivGpNXMujk%2F%2FEOrB8xHKh48HtkL2WQQyGRWrb6Flq%2B7hs9RIan%2B5n%2BsyvQb58M5c7nQCzoVgwjKJwbxEwej52Zxxv7pB7E3Mf2VLKDMJDf8MEGOqUBce2gZo6Rmm5zjnfxPl%2BWV%2FcWip%2Fx8jY9NbHmzJrMymPWiMGTNAqBvNI%2Fsa%2FvlpUzLkLU6vC23yrxR3jZuQvnrKhdV43ytRB9zgrUdHAqQ838fkVQ3DoPGvjMDnmAco6t6lOuIL%2FTn0ujfodvst%2BDRSLG98PzLs4HQi9Sa0jjLpYrwtZtrE1iNIHX%2BRFmG4lnePeQ%2B6xmgZbha3Ggg%2B4OfXN5ZfoB&X-Amz-Signature=e8ce12826db4e7cc80a943dab2bd83a380810de97630094eaeff96565d9f4252&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUVKPHKF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCkNae59QjVb8naHJRnSiCX892Wi6Vsufxrxyt7eC2s7wIgEOMY3CUrvK%2BlDRvyqp63W%2F5wxCwUOJdnBqmyz57eHhcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkLP6vltaIpFMkEMircA6fbZJVkkuGP9xfjFyfdQWiVvONgJON9s%2BE1H%2BvMBF7XXLsfIOF3IbB%2BBYejdW8CVEojb3xVCOG6aBb0hkJrN8CbhlCSkKGxPQykqk0oIhOqKYwFjY34flMUXrTYWlHHUIOk9KFmWdkWmx%2BgOuRUrMZvMyxjO1RWgShnzWKZLeMvwDNc2pSCzIOGSAXkYYxNyR8%2FbmWQH1bYLF6UG4LbkzBDbzumC%2FuXb3iHiN%2FAmBsEr%2FwvMrXDcxURXhgdYTp3PmJPGU61B8odm1fbnjznxQmpYqC%2Be6BG7gmEuU8wi4165%2FqbGYUsd9iEIr7Dnnr%2FPT%2FkSrYpTXaCdbdj19f7hvqh3Q1mFpRvWXZpO%2BTDIbRAytfFeqc1llNLDpcqF4a8XJf4RABVV3FP94C%2F7mgOksSkOss969Je7T%2F3CljgCNw9WCuD8goDH7jGvTBoGSXUbcq002QnPbXlUTITyFh8GHNhD4gTji4ALGpzTCykkDDqdFY%2F1B%2B6Tgl6YBRtpD5e3CjMvW%2F0LDyCyKTws7C0MvivGpNXMujk%2F%2FEOrB8xHKh48HtkL2WQQyGRWrb6Flq%2B7hs9RIan%2B5n%2BsyvQb58M5c7nQCzoVgwjKJwbxEwej52Zxxv7pB7E3Mf2VLKDMJDf8MEGOqUBce2gZo6Rmm5zjnfxPl%2BWV%2FcWip%2Fx8jY9NbHmzJrMymPWiMGTNAqBvNI%2Fsa%2FvlpUzLkLU6vC23yrxR3jZuQvnrKhdV43ytRB9zgrUdHAqQ838fkVQ3DoPGvjMDnmAco6t6lOuIL%2FTn0ujfodvst%2BDRSLG98PzLs4HQi9Sa0jjLpYrwtZtrE1iNIHX%2BRFmG4lnePeQ%2B6xmgZbha3Ggg%2B4OfXN5ZfoB&X-Amz-Signature=48a7ea8a0dc73197f4f8771c88f9f2a7771082813bbc875a2348cc2cf3360f50&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
