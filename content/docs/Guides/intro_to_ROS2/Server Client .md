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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVZ27S4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCkfvny9MLKEpBaZl3DquXNXLOwMP3ZhZMnJRQp9OPlKwIhAJabAPXuwza8WsNm3VkIheO5TqwYbMECXyFRYKtzjVpdKv8DCGgQABoMNjM3NDIzMTgzODA1IgzT%2F79AX7yJN3VIwEYq3AOvkNzNT9hQC0NFzyqZlyGTwj9V%2BSpmaLQKUxsbgNOmTfRXw2Pk3pdkjgsfC%2FmFFgLPMEiH%2FD8RL01qOddEXxEQm8rw1WTUrCqj9DV5TAOk3FsF29hE2P45NECVeA9OdSfzG9yZ%2B%2FabUmCbTzkV6i03weQgj5n4IiMnm2aPVHjCCzLqsti2NlblB2Rcy8C9KXa2zCzq%2BLtd5YVkSw3Kyiqh0rgqGh3B2X9kaCT6Ux7mM7hl9g%2Bn%2BzJlw%2B4SFQ28mMGb1b3zLC%2BA9BAwWz9%2BR%2BWGVIi9uaa0jdQVJzjXGDvhhuUHyGeoXkC2qwGSMGZMjMhEWLsnMI4UxrCXTfvG1wsqFDihWJkOoCNlbY8kVEZAAjprRrf%2Fvf9sPl5UkhplbP%2BXVauJJ73uxqSzPXflYcHAP4DeiqjpEbqZgbzNVJdH%2BDxmr7z59ZBBEqB0Yn%2F6Rib1arhszHGa0xn%2B9TZ5DBpsDbjbalPR0%2BQSK1I3afB0o6T5Bi9TegGCkmQ0EwE%2F23kuoJlb4NyI%2F5SGkbpk6siuR%2BGxKCyVfI4IKWf42akwFb3%2BI%2B1hDp62LWwI71HSvSSFvenTw2y5m9KEniaQvIg8v%2B0actb5F%2BsGpcJTPrh%2FgJckq4kHmNSvPEwR2jDM0eDDBjqkAcfNCQKdjxYauk9oq0JzVKS7zI541ZUBM7sAW%2FA0lZjeIpIHg1xUeCLdsxugcY1VE3wMMw%2FwJQtOkRlCIMHnu5oOzw%2BApqD1lJltpEAwyJYj8NoCTpQpGFjQZ%2B%2BXTlkOiy932cXPNydKoOKWfe3oXqhrdjO6kWtkYf3XxaNy8UZT4Oxz3TzmdXYZraGWBfwKuTdcqJEJflx7GQJqfjr0dydH6KzI&X-Amz-Signature=c5b1edb051969ddb7eaa6e9e15e1cd2726c24ad3b02c2dfc81127ee713b8cf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVZ27S4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCkfvny9MLKEpBaZl3DquXNXLOwMP3ZhZMnJRQp9OPlKwIhAJabAPXuwza8WsNm3VkIheO5TqwYbMECXyFRYKtzjVpdKv8DCGgQABoMNjM3NDIzMTgzODA1IgzT%2F79AX7yJN3VIwEYq3AOvkNzNT9hQC0NFzyqZlyGTwj9V%2BSpmaLQKUxsbgNOmTfRXw2Pk3pdkjgsfC%2FmFFgLPMEiH%2FD8RL01qOddEXxEQm8rw1WTUrCqj9DV5TAOk3FsF29hE2P45NECVeA9OdSfzG9yZ%2B%2FabUmCbTzkV6i03weQgj5n4IiMnm2aPVHjCCzLqsti2NlblB2Rcy8C9KXa2zCzq%2BLtd5YVkSw3Kyiqh0rgqGh3B2X9kaCT6Ux7mM7hl9g%2Bn%2BzJlw%2B4SFQ28mMGb1b3zLC%2BA9BAwWz9%2BR%2BWGVIi9uaa0jdQVJzjXGDvhhuUHyGeoXkC2qwGSMGZMjMhEWLsnMI4UxrCXTfvG1wsqFDihWJkOoCNlbY8kVEZAAjprRrf%2Fvf9sPl5UkhplbP%2BXVauJJ73uxqSzPXflYcHAP4DeiqjpEbqZgbzNVJdH%2BDxmr7z59ZBBEqB0Yn%2F6Rib1arhszHGa0xn%2B9TZ5DBpsDbjbalPR0%2BQSK1I3afB0o6T5Bi9TegGCkmQ0EwE%2F23kuoJlb4NyI%2F5SGkbpk6siuR%2BGxKCyVfI4IKWf42akwFb3%2BI%2B1hDp62LWwI71HSvSSFvenTw2y5m9KEniaQvIg8v%2B0actb5F%2BsGpcJTPrh%2FgJckq4kHmNSvPEwR2jDM0eDDBjqkAcfNCQKdjxYauk9oq0JzVKS7zI541ZUBM7sAW%2FA0lZjeIpIHg1xUeCLdsxugcY1VE3wMMw%2FwJQtOkRlCIMHnu5oOzw%2BApqD1lJltpEAwyJYj8NoCTpQpGFjQZ%2B%2BXTlkOiy932cXPNydKoOKWfe3oXqhrdjO6kWtkYf3XxaNy8UZT4Oxz3TzmdXYZraGWBfwKuTdcqJEJflx7GQJqfjr0dydH6KzI&X-Amz-Signature=4b7992c79a8e4d0bb08b6dddc0f2110090994a4f0e5849131e980581b34ef924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVZ27S4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCkfvny9MLKEpBaZl3DquXNXLOwMP3ZhZMnJRQp9OPlKwIhAJabAPXuwza8WsNm3VkIheO5TqwYbMECXyFRYKtzjVpdKv8DCGgQABoMNjM3NDIzMTgzODA1IgzT%2F79AX7yJN3VIwEYq3AOvkNzNT9hQC0NFzyqZlyGTwj9V%2BSpmaLQKUxsbgNOmTfRXw2Pk3pdkjgsfC%2FmFFgLPMEiH%2FD8RL01qOddEXxEQm8rw1WTUrCqj9DV5TAOk3FsF29hE2P45NECVeA9OdSfzG9yZ%2B%2FabUmCbTzkV6i03weQgj5n4IiMnm2aPVHjCCzLqsti2NlblB2Rcy8C9KXa2zCzq%2BLtd5YVkSw3Kyiqh0rgqGh3B2X9kaCT6Ux7mM7hl9g%2Bn%2BzJlw%2B4SFQ28mMGb1b3zLC%2BA9BAwWz9%2BR%2BWGVIi9uaa0jdQVJzjXGDvhhuUHyGeoXkC2qwGSMGZMjMhEWLsnMI4UxrCXTfvG1wsqFDihWJkOoCNlbY8kVEZAAjprRrf%2Fvf9sPl5UkhplbP%2BXVauJJ73uxqSzPXflYcHAP4DeiqjpEbqZgbzNVJdH%2BDxmr7z59ZBBEqB0Yn%2F6Rib1arhszHGa0xn%2B9TZ5DBpsDbjbalPR0%2BQSK1I3afB0o6T5Bi9TegGCkmQ0EwE%2F23kuoJlb4NyI%2F5SGkbpk6siuR%2BGxKCyVfI4IKWf42akwFb3%2BI%2B1hDp62LWwI71HSvSSFvenTw2y5m9KEniaQvIg8v%2B0actb5F%2BsGpcJTPrh%2FgJckq4kHmNSvPEwR2jDM0eDDBjqkAcfNCQKdjxYauk9oq0JzVKS7zI541ZUBM7sAW%2FA0lZjeIpIHg1xUeCLdsxugcY1VE3wMMw%2FwJQtOkRlCIMHnu5oOzw%2BApqD1lJltpEAwyJYj8NoCTpQpGFjQZ%2B%2BXTlkOiy932cXPNydKoOKWfe3oXqhrdjO6kWtkYf3XxaNy8UZT4Oxz3TzmdXYZraGWBfwKuTdcqJEJflx7GQJqfjr0dydH6KzI&X-Amz-Signature=a6be0413b6e08c64b412fbc7ccb547ec3b3116a95a9d310d2ab5e8bcb1944e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVZ27S4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCkfvny9MLKEpBaZl3DquXNXLOwMP3ZhZMnJRQp9OPlKwIhAJabAPXuwza8WsNm3VkIheO5TqwYbMECXyFRYKtzjVpdKv8DCGgQABoMNjM3NDIzMTgzODA1IgzT%2F79AX7yJN3VIwEYq3AOvkNzNT9hQC0NFzyqZlyGTwj9V%2BSpmaLQKUxsbgNOmTfRXw2Pk3pdkjgsfC%2FmFFgLPMEiH%2FD8RL01qOddEXxEQm8rw1WTUrCqj9DV5TAOk3FsF29hE2P45NECVeA9OdSfzG9yZ%2B%2FabUmCbTzkV6i03weQgj5n4IiMnm2aPVHjCCzLqsti2NlblB2Rcy8C9KXa2zCzq%2BLtd5YVkSw3Kyiqh0rgqGh3B2X9kaCT6Ux7mM7hl9g%2Bn%2BzJlw%2B4SFQ28mMGb1b3zLC%2BA9BAwWz9%2BR%2BWGVIi9uaa0jdQVJzjXGDvhhuUHyGeoXkC2qwGSMGZMjMhEWLsnMI4UxrCXTfvG1wsqFDihWJkOoCNlbY8kVEZAAjprRrf%2Fvf9sPl5UkhplbP%2BXVauJJ73uxqSzPXflYcHAP4DeiqjpEbqZgbzNVJdH%2BDxmr7z59ZBBEqB0Yn%2F6Rib1arhszHGa0xn%2B9TZ5DBpsDbjbalPR0%2BQSK1I3afB0o6T5Bi9TegGCkmQ0EwE%2F23kuoJlb4NyI%2F5SGkbpk6siuR%2BGxKCyVfI4IKWf42akwFb3%2BI%2B1hDp62LWwI71HSvSSFvenTw2y5m9KEniaQvIg8v%2B0actb5F%2BsGpcJTPrh%2FgJckq4kHmNSvPEwR2jDM0eDDBjqkAcfNCQKdjxYauk9oq0JzVKS7zI541ZUBM7sAW%2FA0lZjeIpIHg1xUeCLdsxugcY1VE3wMMw%2FwJQtOkRlCIMHnu5oOzw%2BApqD1lJltpEAwyJYj8NoCTpQpGFjQZ%2B%2BXTlkOiy932cXPNydKoOKWfe3oXqhrdjO6kWtkYf3XxaNy8UZT4Oxz3TzmdXYZraGWBfwKuTdcqJEJflx7GQJqfjr0dydH6KzI&X-Amz-Signature=c36a8f4d0c2acea2c9f0230653dd2ae8fd0feb51a2342d8d1e066be6aeba9a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVZ27S4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCkfvny9MLKEpBaZl3DquXNXLOwMP3ZhZMnJRQp9OPlKwIhAJabAPXuwza8WsNm3VkIheO5TqwYbMECXyFRYKtzjVpdKv8DCGgQABoMNjM3NDIzMTgzODA1IgzT%2F79AX7yJN3VIwEYq3AOvkNzNT9hQC0NFzyqZlyGTwj9V%2BSpmaLQKUxsbgNOmTfRXw2Pk3pdkjgsfC%2FmFFgLPMEiH%2FD8RL01qOddEXxEQm8rw1WTUrCqj9DV5TAOk3FsF29hE2P45NECVeA9OdSfzG9yZ%2B%2FabUmCbTzkV6i03weQgj5n4IiMnm2aPVHjCCzLqsti2NlblB2Rcy8C9KXa2zCzq%2BLtd5YVkSw3Kyiqh0rgqGh3B2X9kaCT6Ux7mM7hl9g%2Bn%2BzJlw%2B4SFQ28mMGb1b3zLC%2BA9BAwWz9%2BR%2BWGVIi9uaa0jdQVJzjXGDvhhuUHyGeoXkC2qwGSMGZMjMhEWLsnMI4UxrCXTfvG1wsqFDihWJkOoCNlbY8kVEZAAjprRrf%2Fvf9sPl5UkhplbP%2BXVauJJ73uxqSzPXflYcHAP4DeiqjpEbqZgbzNVJdH%2BDxmr7z59ZBBEqB0Yn%2F6Rib1arhszHGa0xn%2B9TZ5DBpsDbjbalPR0%2BQSK1I3afB0o6T5Bi9TegGCkmQ0EwE%2F23kuoJlb4NyI%2F5SGkbpk6siuR%2BGxKCyVfI4IKWf42akwFb3%2BI%2B1hDp62LWwI71HSvSSFvenTw2y5m9KEniaQvIg8v%2B0actb5F%2BsGpcJTPrh%2FgJckq4kHmNSvPEwR2jDM0eDDBjqkAcfNCQKdjxYauk9oq0JzVKS7zI541ZUBM7sAW%2FA0lZjeIpIHg1xUeCLdsxugcY1VE3wMMw%2FwJQtOkRlCIMHnu5oOzw%2BApqD1lJltpEAwyJYj8NoCTpQpGFjQZ%2B%2BXTlkOiy932cXPNydKoOKWfe3oXqhrdjO6kWtkYf3XxaNy8UZT4Oxz3TzmdXYZraGWBfwKuTdcqJEJflx7GQJqfjr0dydH6KzI&X-Amz-Signature=a2c23f63295e420b7c5e6ef568d0a4c5174f20889cb275e4094eed53bd00c744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
