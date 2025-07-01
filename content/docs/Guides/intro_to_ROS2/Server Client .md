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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGTQACI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcq4rUvWvibtuaNrQn90oNz3L5FYgjwUB6xkD%2F5oK%2B4AiEAr8Mdg7p7JZ1ZN6134fTACn68sjhsgVSYqCQMccqK40UqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYnzmOcnJGbJsP3MircA%2BJF%2Fjt7qZm6Vn4ylLI90k%2FJ4SCB6QiquPG%2FqINIAO4j%2F9ipFY3GwhZCJ0nVKs1a5%2FxjaRSe527F0o6gqC78yX6xNNRYKRxh4qLzt360rAJi1qi4VHY5tyR4060bxX7wCOOIhkYTCxqgAx2paV82N5xWL4AK9JSlsEwsKOOur4GTlKEr1Qpu4tkoRlVdNRC0BYNOMHRCkjy6savnMo3KWHPto2xW3mKQV4jQWL8Km8lMSrhLi2fVGilez%2BGLu2h5OpbKSlwD3CkJ3JAwvC%2FRjpC4ccD1JIAHkWq8E5f4e0lUm%2F8xlbl2GNrWKYAAC4NGq9xB8%2ByV%2FoKVaOvPbwO0%2BKjHRyHak%2BwcTSOFxGN4ru3DlBP%2FKTmkSvVrjo24e8M6KuK3oZ1eN0gIUoW6e8W0oYjpOnZxRKteD3ZGfDCW8Bqd22Bz%2F7K7Ppf6qUpfTIogChl%2BdvgyeagzRZIt20oJv3%2BA9TWFNHZ6XMqEkYSAAFXv8Yt8GXbwuNo%2BiYhONnFO%2B9PP50q5eYstd%2FYuX91OvfVMMg6hbEFbfVl%2BIeKVhGodlJKaUptFywqJrya%2BFPTVPI8oqQcpolvo37UmuptloEk%2BrSIO4YWnqKfZxa4viFaFCUN1pCKRk%2BOmZH9LMLmHkMMGOqUB2OFr4VDKi59udQ6WEMPB4si%2F8feCzv%2FJ%2Bfui07KxRh8wvSQwlh9PxqDv9tkfiM6jpNVkVQayN9tyj6kUEVyO7FBlbyN7MvKHHR6Q09qFsZZWai%2BJdYvo8uHn%2FNO%2F20xM%2FNxHTOsVMKNU%2F%2FgQioDN8HRY74wP3kysP7cUyytJNMJpJiud83KYYLGjMbdzTpOUdxPEVT80SlALxzi5sdKyJS3hE5tg&X-Amz-Signature=d286e935eddfe627f494076a8c0ec36951e644944998ae553be807cdf7c35b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGTQACI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcq4rUvWvibtuaNrQn90oNz3L5FYgjwUB6xkD%2F5oK%2B4AiEAr8Mdg7p7JZ1ZN6134fTACn68sjhsgVSYqCQMccqK40UqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYnzmOcnJGbJsP3MircA%2BJF%2Fjt7qZm6Vn4ylLI90k%2FJ4SCB6QiquPG%2FqINIAO4j%2F9ipFY3GwhZCJ0nVKs1a5%2FxjaRSe527F0o6gqC78yX6xNNRYKRxh4qLzt360rAJi1qi4VHY5tyR4060bxX7wCOOIhkYTCxqgAx2paV82N5xWL4AK9JSlsEwsKOOur4GTlKEr1Qpu4tkoRlVdNRC0BYNOMHRCkjy6savnMo3KWHPto2xW3mKQV4jQWL8Km8lMSrhLi2fVGilez%2BGLu2h5OpbKSlwD3CkJ3JAwvC%2FRjpC4ccD1JIAHkWq8E5f4e0lUm%2F8xlbl2GNrWKYAAC4NGq9xB8%2ByV%2FoKVaOvPbwO0%2BKjHRyHak%2BwcTSOFxGN4ru3DlBP%2FKTmkSvVrjo24e8M6KuK3oZ1eN0gIUoW6e8W0oYjpOnZxRKteD3ZGfDCW8Bqd22Bz%2F7K7Ppf6qUpfTIogChl%2BdvgyeagzRZIt20oJv3%2BA9TWFNHZ6XMqEkYSAAFXv8Yt8GXbwuNo%2BiYhONnFO%2B9PP50q5eYstd%2FYuX91OvfVMMg6hbEFbfVl%2BIeKVhGodlJKaUptFywqJrya%2BFPTVPI8oqQcpolvo37UmuptloEk%2BrSIO4YWnqKfZxa4viFaFCUN1pCKRk%2BOmZH9LMLmHkMMGOqUB2OFr4VDKi59udQ6WEMPB4si%2F8feCzv%2FJ%2Bfui07KxRh8wvSQwlh9PxqDv9tkfiM6jpNVkVQayN9tyj6kUEVyO7FBlbyN7MvKHHR6Q09qFsZZWai%2BJdYvo8uHn%2FNO%2F20xM%2FNxHTOsVMKNU%2F%2FgQioDN8HRY74wP3kysP7cUyytJNMJpJiud83KYYLGjMbdzTpOUdxPEVT80SlALxzi5sdKyJS3hE5tg&X-Amz-Signature=c0a3a9ec7b3ffa6e185e41cf2f4dfeb1cbf798af6937abf4a019e078c8913b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGTQACI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcq4rUvWvibtuaNrQn90oNz3L5FYgjwUB6xkD%2F5oK%2B4AiEAr8Mdg7p7JZ1ZN6134fTACn68sjhsgVSYqCQMccqK40UqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYnzmOcnJGbJsP3MircA%2BJF%2Fjt7qZm6Vn4ylLI90k%2FJ4SCB6QiquPG%2FqINIAO4j%2F9ipFY3GwhZCJ0nVKs1a5%2FxjaRSe527F0o6gqC78yX6xNNRYKRxh4qLzt360rAJi1qi4VHY5tyR4060bxX7wCOOIhkYTCxqgAx2paV82N5xWL4AK9JSlsEwsKOOur4GTlKEr1Qpu4tkoRlVdNRC0BYNOMHRCkjy6savnMo3KWHPto2xW3mKQV4jQWL8Km8lMSrhLi2fVGilez%2BGLu2h5OpbKSlwD3CkJ3JAwvC%2FRjpC4ccD1JIAHkWq8E5f4e0lUm%2F8xlbl2GNrWKYAAC4NGq9xB8%2ByV%2FoKVaOvPbwO0%2BKjHRyHak%2BwcTSOFxGN4ru3DlBP%2FKTmkSvVrjo24e8M6KuK3oZ1eN0gIUoW6e8W0oYjpOnZxRKteD3ZGfDCW8Bqd22Bz%2F7K7Ppf6qUpfTIogChl%2BdvgyeagzRZIt20oJv3%2BA9TWFNHZ6XMqEkYSAAFXv8Yt8GXbwuNo%2BiYhONnFO%2B9PP50q5eYstd%2FYuX91OvfVMMg6hbEFbfVl%2BIeKVhGodlJKaUptFywqJrya%2BFPTVPI8oqQcpolvo37UmuptloEk%2BrSIO4YWnqKfZxa4viFaFCUN1pCKRk%2BOmZH9LMLmHkMMGOqUB2OFr4VDKi59udQ6WEMPB4si%2F8feCzv%2FJ%2Bfui07KxRh8wvSQwlh9PxqDv9tkfiM6jpNVkVQayN9tyj6kUEVyO7FBlbyN7MvKHHR6Q09qFsZZWai%2BJdYvo8uHn%2FNO%2F20xM%2FNxHTOsVMKNU%2F%2FgQioDN8HRY74wP3kysP7cUyytJNMJpJiud83KYYLGjMbdzTpOUdxPEVT80SlALxzi5sdKyJS3hE5tg&X-Amz-Signature=45a7cab6d2f426f0b95b96d7052ac8908b364dc8de1e3f2b6b2529ce2364e3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGTQACI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcq4rUvWvibtuaNrQn90oNz3L5FYgjwUB6xkD%2F5oK%2B4AiEAr8Mdg7p7JZ1ZN6134fTACn68sjhsgVSYqCQMccqK40UqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYnzmOcnJGbJsP3MircA%2BJF%2Fjt7qZm6Vn4ylLI90k%2FJ4SCB6QiquPG%2FqINIAO4j%2F9ipFY3GwhZCJ0nVKs1a5%2FxjaRSe527F0o6gqC78yX6xNNRYKRxh4qLzt360rAJi1qi4VHY5tyR4060bxX7wCOOIhkYTCxqgAx2paV82N5xWL4AK9JSlsEwsKOOur4GTlKEr1Qpu4tkoRlVdNRC0BYNOMHRCkjy6savnMo3KWHPto2xW3mKQV4jQWL8Km8lMSrhLi2fVGilez%2BGLu2h5OpbKSlwD3CkJ3JAwvC%2FRjpC4ccD1JIAHkWq8E5f4e0lUm%2F8xlbl2GNrWKYAAC4NGq9xB8%2ByV%2FoKVaOvPbwO0%2BKjHRyHak%2BwcTSOFxGN4ru3DlBP%2FKTmkSvVrjo24e8M6KuK3oZ1eN0gIUoW6e8W0oYjpOnZxRKteD3ZGfDCW8Bqd22Bz%2F7K7Ppf6qUpfTIogChl%2BdvgyeagzRZIt20oJv3%2BA9TWFNHZ6XMqEkYSAAFXv8Yt8GXbwuNo%2BiYhONnFO%2B9PP50q5eYstd%2FYuX91OvfVMMg6hbEFbfVl%2BIeKVhGodlJKaUptFywqJrya%2BFPTVPI8oqQcpolvo37UmuptloEk%2BrSIO4YWnqKfZxa4viFaFCUN1pCKRk%2BOmZH9LMLmHkMMGOqUB2OFr4VDKi59udQ6WEMPB4si%2F8feCzv%2FJ%2Bfui07KxRh8wvSQwlh9PxqDv9tkfiM6jpNVkVQayN9tyj6kUEVyO7FBlbyN7MvKHHR6Q09qFsZZWai%2BJdYvo8uHn%2FNO%2F20xM%2FNxHTOsVMKNU%2F%2FgQioDN8HRY74wP3kysP7cUyytJNMJpJiud83KYYLGjMbdzTpOUdxPEVT80SlALxzi5sdKyJS3hE5tg&X-Amz-Signature=6cc8b3d5c110f37a4a7ce42f34a6e9bd5ea3f27923353a66278243bce6b5c924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGTQACI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcq4rUvWvibtuaNrQn90oNz3L5FYgjwUB6xkD%2F5oK%2B4AiEAr8Mdg7p7JZ1ZN6134fTACn68sjhsgVSYqCQMccqK40UqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYnzmOcnJGbJsP3MircA%2BJF%2Fjt7qZm6Vn4ylLI90k%2FJ4SCB6QiquPG%2FqINIAO4j%2F9ipFY3GwhZCJ0nVKs1a5%2FxjaRSe527F0o6gqC78yX6xNNRYKRxh4qLzt360rAJi1qi4VHY5tyR4060bxX7wCOOIhkYTCxqgAx2paV82N5xWL4AK9JSlsEwsKOOur4GTlKEr1Qpu4tkoRlVdNRC0BYNOMHRCkjy6savnMo3KWHPto2xW3mKQV4jQWL8Km8lMSrhLi2fVGilez%2BGLu2h5OpbKSlwD3CkJ3JAwvC%2FRjpC4ccD1JIAHkWq8E5f4e0lUm%2F8xlbl2GNrWKYAAC4NGq9xB8%2ByV%2FoKVaOvPbwO0%2BKjHRyHak%2BwcTSOFxGN4ru3DlBP%2FKTmkSvVrjo24e8M6KuK3oZ1eN0gIUoW6e8W0oYjpOnZxRKteD3ZGfDCW8Bqd22Bz%2F7K7Ppf6qUpfTIogChl%2BdvgyeagzRZIt20oJv3%2BA9TWFNHZ6XMqEkYSAAFXv8Yt8GXbwuNo%2BiYhONnFO%2B9PP50q5eYstd%2FYuX91OvfVMMg6hbEFbfVl%2BIeKVhGodlJKaUptFywqJrya%2BFPTVPI8oqQcpolvo37UmuptloEk%2BrSIO4YWnqKfZxa4viFaFCUN1pCKRk%2BOmZH9LMLmHkMMGOqUB2OFr4VDKi59udQ6WEMPB4si%2F8feCzv%2FJ%2Bfui07KxRh8wvSQwlh9PxqDv9tkfiM6jpNVkVQayN9tyj6kUEVyO7FBlbyN7MvKHHR6Q09qFsZZWai%2BJdYvo8uHn%2FNO%2F20xM%2FNxHTOsVMKNU%2F%2FgQioDN8HRY74wP3kysP7cUyytJNMJpJiud83KYYLGjMbdzTpOUdxPEVT80SlALxzi5sdKyJS3hE5tg&X-Amz-Signature=b2f0ae2891fbeedb6f4986a619c503efadf8c434c8bb4fbd403d53219ea82118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
