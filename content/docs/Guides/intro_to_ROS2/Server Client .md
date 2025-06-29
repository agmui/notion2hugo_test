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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JWG4WN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtE8%2B0Vc1l9KnYnzJ1Us%2BDZzR44Lx5Y1qf7Gw93m0w%2FwIgHPiAbx2L4n%2BqBOJ%2BEaxZhR8JsDaI2BlbVYtFYLCpiKIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBOB4nh5A806HbcAyrcA34zQE%2BlNW4VmsArmSDkz2ETFjlhoC5SrvBFMVYpk2hVkkKEJJjqRwrC5lyXxA13aJlthQ8G8P%2Byqt1Pq7U1CyjiqF18e%2FcEUvS8BYh9RS7saL%2B4Hn%2BMGWnogJ6Cj5%2F6Ljn5MmppR7%2BtYyjI%2FF2urkvaXkm94YMhI2TVJpLHXLgyq0fX1scXN4v2j17OHDOkYg9SLHawktdqg3Ebv%2FeKMc8mTibZrsEhWe3J3IMp4fIH9M0j%2F85w4u3cUYvELf7QzRwqgynjU99mv96tOQdGF2stcj4tkSX%2BUbJF5OELXrtjNLdzYYp5TO%2FGegUfC%2FIK%2BkFi2CNgdkIeh8jtED%2BDe%2BdUVqmLxeSc%2BjQlZBGZEe0Lo6xDoaJ3eB3Ma%2FdnbVK9FyxVCBMxJGbh2gGVMcJ%2BrWD3NT%2Bl6Fk5ljoCDE4F2s8GYl5dIv9K5RZD8aoT0lc5PXpyTxIPw%2BS0W%2Bz7JKZssYRcIiT2czhgxDvmgf8SYN8Y8Ugy2twqczjrj9whJPq4ZgRhspOx9omkHuAWTtLYcee4uBUZsvqHTFukgKOkcB1ECjbf127RPQ%2Bh8OjNOM0MOTlpZTosUodE%2FQGjFpsN9%2B2NUeLJhTffJRJPp1bwhaNW46hmPmeAeSwVOg7rMPOEhsMGOqUBreE%2Fwv%2B2VQxSGW3anV5Nveko1UTir65vsCLqpqFMTG839cPwD%2BQMptR2EpMcAF7BQ1vWVyeR1ajBQw5pihWK2UIcuvlNbzbJMcIuFf0IVjIB4ofsHz4ZYxPr5AcCyocHJBBctt50Rc4N%2BtBEd%2FD7iUibzBqn3Zh%2BD9%2BBlB%2FfUsYDVaZVJnK7FtuRCbToATQNiGoRpBETUeqeVIoGonYMvPUjjO32&X-Amz-Signature=06fc102ff6f82c3d50466b180affb7df0fb71380f97a6a60440f61a4115d291d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JWG4WN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtE8%2B0Vc1l9KnYnzJ1Us%2BDZzR44Lx5Y1qf7Gw93m0w%2FwIgHPiAbx2L4n%2BqBOJ%2BEaxZhR8JsDaI2BlbVYtFYLCpiKIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBOB4nh5A806HbcAyrcA34zQE%2BlNW4VmsArmSDkz2ETFjlhoC5SrvBFMVYpk2hVkkKEJJjqRwrC5lyXxA13aJlthQ8G8P%2Byqt1Pq7U1CyjiqF18e%2FcEUvS8BYh9RS7saL%2B4Hn%2BMGWnogJ6Cj5%2F6Ljn5MmppR7%2BtYyjI%2FF2urkvaXkm94YMhI2TVJpLHXLgyq0fX1scXN4v2j17OHDOkYg9SLHawktdqg3Ebv%2FeKMc8mTibZrsEhWe3J3IMp4fIH9M0j%2F85w4u3cUYvELf7QzRwqgynjU99mv96tOQdGF2stcj4tkSX%2BUbJF5OELXrtjNLdzYYp5TO%2FGegUfC%2FIK%2BkFi2CNgdkIeh8jtED%2BDe%2BdUVqmLxeSc%2BjQlZBGZEe0Lo6xDoaJ3eB3Ma%2FdnbVK9FyxVCBMxJGbh2gGVMcJ%2BrWD3NT%2Bl6Fk5ljoCDE4F2s8GYl5dIv9K5RZD8aoT0lc5PXpyTxIPw%2BS0W%2Bz7JKZssYRcIiT2czhgxDvmgf8SYN8Y8Ugy2twqczjrj9whJPq4ZgRhspOx9omkHuAWTtLYcee4uBUZsvqHTFukgKOkcB1ECjbf127RPQ%2Bh8OjNOM0MOTlpZTosUodE%2FQGjFpsN9%2B2NUeLJhTffJRJPp1bwhaNW46hmPmeAeSwVOg7rMPOEhsMGOqUBreE%2Fwv%2B2VQxSGW3anV5Nveko1UTir65vsCLqpqFMTG839cPwD%2BQMptR2EpMcAF7BQ1vWVyeR1ajBQw5pihWK2UIcuvlNbzbJMcIuFf0IVjIB4ofsHz4ZYxPr5AcCyocHJBBctt50Rc4N%2BtBEd%2FD7iUibzBqn3Zh%2BD9%2BBlB%2FfUsYDVaZVJnK7FtuRCbToATQNiGoRpBETUeqeVIoGonYMvPUjjO32&X-Amz-Signature=269db4f18e858f6a1ffe4dcb04a18ec64f74c87bfc4c2482d2138af3dd7d9d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JWG4WN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtE8%2B0Vc1l9KnYnzJ1Us%2BDZzR44Lx5Y1qf7Gw93m0w%2FwIgHPiAbx2L4n%2BqBOJ%2BEaxZhR8JsDaI2BlbVYtFYLCpiKIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBOB4nh5A806HbcAyrcA34zQE%2BlNW4VmsArmSDkz2ETFjlhoC5SrvBFMVYpk2hVkkKEJJjqRwrC5lyXxA13aJlthQ8G8P%2Byqt1Pq7U1CyjiqF18e%2FcEUvS8BYh9RS7saL%2B4Hn%2BMGWnogJ6Cj5%2F6Ljn5MmppR7%2BtYyjI%2FF2urkvaXkm94YMhI2TVJpLHXLgyq0fX1scXN4v2j17OHDOkYg9SLHawktdqg3Ebv%2FeKMc8mTibZrsEhWe3J3IMp4fIH9M0j%2F85w4u3cUYvELf7QzRwqgynjU99mv96tOQdGF2stcj4tkSX%2BUbJF5OELXrtjNLdzYYp5TO%2FGegUfC%2FIK%2BkFi2CNgdkIeh8jtED%2BDe%2BdUVqmLxeSc%2BjQlZBGZEe0Lo6xDoaJ3eB3Ma%2FdnbVK9FyxVCBMxJGbh2gGVMcJ%2BrWD3NT%2Bl6Fk5ljoCDE4F2s8GYl5dIv9K5RZD8aoT0lc5PXpyTxIPw%2BS0W%2Bz7JKZssYRcIiT2czhgxDvmgf8SYN8Y8Ugy2twqczjrj9whJPq4ZgRhspOx9omkHuAWTtLYcee4uBUZsvqHTFukgKOkcB1ECjbf127RPQ%2Bh8OjNOM0MOTlpZTosUodE%2FQGjFpsN9%2B2NUeLJhTffJRJPp1bwhaNW46hmPmeAeSwVOg7rMPOEhsMGOqUBreE%2Fwv%2B2VQxSGW3anV5Nveko1UTir65vsCLqpqFMTG839cPwD%2BQMptR2EpMcAF7BQ1vWVyeR1ajBQw5pihWK2UIcuvlNbzbJMcIuFf0IVjIB4ofsHz4ZYxPr5AcCyocHJBBctt50Rc4N%2BtBEd%2FD7iUibzBqn3Zh%2BD9%2BBlB%2FfUsYDVaZVJnK7FtuRCbToATQNiGoRpBETUeqeVIoGonYMvPUjjO32&X-Amz-Signature=d5ebf6fa6c5a34d159781c8866480e0b9c371e2a63a4e9d6d3d8623e919cc762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JWG4WN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtE8%2B0Vc1l9KnYnzJ1Us%2BDZzR44Lx5Y1qf7Gw93m0w%2FwIgHPiAbx2L4n%2BqBOJ%2BEaxZhR8JsDaI2BlbVYtFYLCpiKIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBOB4nh5A806HbcAyrcA34zQE%2BlNW4VmsArmSDkz2ETFjlhoC5SrvBFMVYpk2hVkkKEJJjqRwrC5lyXxA13aJlthQ8G8P%2Byqt1Pq7U1CyjiqF18e%2FcEUvS8BYh9RS7saL%2B4Hn%2BMGWnogJ6Cj5%2F6Ljn5MmppR7%2BtYyjI%2FF2urkvaXkm94YMhI2TVJpLHXLgyq0fX1scXN4v2j17OHDOkYg9SLHawktdqg3Ebv%2FeKMc8mTibZrsEhWe3J3IMp4fIH9M0j%2F85w4u3cUYvELf7QzRwqgynjU99mv96tOQdGF2stcj4tkSX%2BUbJF5OELXrtjNLdzYYp5TO%2FGegUfC%2FIK%2BkFi2CNgdkIeh8jtED%2BDe%2BdUVqmLxeSc%2BjQlZBGZEe0Lo6xDoaJ3eB3Ma%2FdnbVK9FyxVCBMxJGbh2gGVMcJ%2BrWD3NT%2Bl6Fk5ljoCDE4F2s8GYl5dIv9K5RZD8aoT0lc5PXpyTxIPw%2BS0W%2Bz7JKZssYRcIiT2czhgxDvmgf8SYN8Y8Ugy2twqczjrj9whJPq4ZgRhspOx9omkHuAWTtLYcee4uBUZsvqHTFukgKOkcB1ECjbf127RPQ%2Bh8OjNOM0MOTlpZTosUodE%2FQGjFpsN9%2B2NUeLJhTffJRJPp1bwhaNW46hmPmeAeSwVOg7rMPOEhsMGOqUBreE%2Fwv%2B2VQxSGW3anV5Nveko1UTir65vsCLqpqFMTG839cPwD%2BQMptR2EpMcAF7BQ1vWVyeR1ajBQw5pihWK2UIcuvlNbzbJMcIuFf0IVjIB4ofsHz4ZYxPr5AcCyocHJBBctt50Rc4N%2BtBEd%2FD7iUibzBqn3Zh%2BD9%2BBlB%2FfUsYDVaZVJnK7FtuRCbToATQNiGoRpBETUeqeVIoGonYMvPUjjO32&X-Amz-Signature=6e42a3718410bc5b2d8bf7d6fdc0af6031e2f66cecc6e685bfa2ad1e973c4d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JWG4WN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtE8%2B0Vc1l9KnYnzJ1Us%2BDZzR44Lx5Y1qf7Gw93m0w%2FwIgHPiAbx2L4n%2BqBOJ%2BEaxZhR8JsDaI2BlbVYtFYLCpiKIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBOB4nh5A806HbcAyrcA34zQE%2BlNW4VmsArmSDkz2ETFjlhoC5SrvBFMVYpk2hVkkKEJJjqRwrC5lyXxA13aJlthQ8G8P%2Byqt1Pq7U1CyjiqF18e%2FcEUvS8BYh9RS7saL%2B4Hn%2BMGWnogJ6Cj5%2F6Ljn5MmppR7%2BtYyjI%2FF2urkvaXkm94YMhI2TVJpLHXLgyq0fX1scXN4v2j17OHDOkYg9SLHawktdqg3Ebv%2FeKMc8mTibZrsEhWe3J3IMp4fIH9M0j%2F85w4u3cUYvELf7QzRwqgynjU99mv96tOQdGF2stcj4tkSX%2BUbJF5OELXrtjNLdzYYp5TO%2FGegUfC%2FIK%2BkFi2CNgdkIeh8jtED%2BDe%2BdUVqmLxeSc%2BjQlZBGZEe0Lo6xDoaJ3eB3Ma%2FdnbVK9FyxVCBMxJGbh2gGVMcJ%2BrWD3NT%2Bl6Fk5ljoCDE4F2s8GYl5dIv9K5RZD8aoT0lc5PXpyTxIPw%2BS0W%2Bz7JKZssYRcIiT2czhgxDvmgf8SYN8Y8Ugy2twqczjrj9whJPq4ZgRhspOx9omkHuAWTtLYcee4uBUZsvqHTFukgKOkcB1ECjbf127RPQ%2Bh8OjNOM0MOTlpZTosUodE%2FQGjFpsN9%2B2NUeLJhTffJRJPp1bwhaNW46hmPmeAeSwVOg7rMPOEhsMGOqUBreE%2Fwv%2B2VQxSGW3anV5Nveko1UTir65vsCLqpqFMTG839cPwD%2BQMptR2EpMcAF7BQ1vWVyeR1ajBQw5pihWK2UIcuvlNbzbJMcIuFf0IVjIB4ofsHz4ZYxPr5AcCyocHJBBctt50Rc4N%2BtBEd%2FD7iUibzBqn3Zh%2BD9%2BBlB%2FfUsYDVaZVJnK7FtuRCbToATQNiGoRpBETUeqeVIoGonYMvPUjjO32&X-Amz-Signature=52ed0a397e9563f4c22c56e210d5750c1990b44133db70b4910f27d3f8ddef50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
