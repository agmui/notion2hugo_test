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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PFZFJF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDWKZG5hoOYjSzFbYd0mtcUJCc0GfTtXgRAyytHr6SJWgIgH%2B%2FSSK5zgvlimtRQbiJqOJZqfSOCxHUihL6H2ZLvAAsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKloIO6J7zYXYqj1sircA8MCjhksqIGxVuQK2ekWPdqudJVH1k6kSqmSNXgmZ7pZo4szIfaeB0JD8eRwlqM8COKXtTXYXs7f0T%2BKlFW5uW9cmqCiPwvlSa2Tfw0JQxMf6spxS4flfIold0BJuPRHstwPKnzPozCFfZ9%2F%2FxmAjHuS5SEmpBSWjnM7VmXZYZQeCGkKOud5Bd55Rcmul2sgQvJZmfJsFuR4NiN0KZd06MY4Gph5vTbcempN6Ffsvrna7JI89cFW39XfopcuwPpX8Zu%2Fpg7eJXmIBVI%2B6y%2FKNfzHQMxR8hCULWSff893RpNu0agpsfk69Wsw7IBjwxA9McU9ouUBM9EKNVYK8RBTw6vvvm6q5IPXhYkRw9lqlvGAaicHzleOQXdiU%2FwE8Yg0FSLxZRpuImpclH5X2mhV%2F577oDHRrAm%2BecxcwMvYLFSaS9DqBlAgqrsOcs1dNzpxTHnP%2B7jfRWu9DmYmu52mCALnNj5Z8YUrhmL7RGcRDXOijCc25jy6Sk1s71cF4HR9v0hZrVUcFMKcOgGumSGGsdNUNA026cLuKWvlaP2r63iJbswWSZP2CSfbma7zA3HHQa5bvMKacgBoUxw6Pm%2BXt7zU8NcpCGunVNSnlMdfGyOjV8H5rGDmPwVVEa92MI7W0MEGOqUBRrE3e6Mw513YgGtg2bLXPeJFyz2EvF8HOT4bOtF%2FGqZL6zY6m4vpJxGaI%2F56mSYNE9wCT8nH5Q4cA%2Bwt8g%2BWxaAFXsUV4NT7ll%2BpmF%2BJ5QVjGewDHgQNlTv3SxLZcIM1T6qRjyggzPgfDz0zutScgt78kDJjRMX9n2Sx8Pk%2BNKfUWtVKAQ3I%2FD0kzvVWnAKLLZqoBRVvwcYvdT%2Ffb72DAe60vc6R&X-Amz-Signature=4b6e69fb70e5de0f9c9d28bbbe1b9722d6fb1c3bcb63790e5793af41aa23c810&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PFZFJF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDWKZG5hoOYjSzFbYd0mtcUJCc0GfTtXgRAyytHr6SJWgIgH%2B%2FSSK5zgvlimtRQbiJqOJZqfSOCxHUihL6H2ZLvAAsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKloIO6J7zYXYqj1sircA8MCjhksqIGxVuQK2ekWPdqudJVH1k6kSqmSNXgmZ7pZo4szIfaeB0JD8eRwlqM8COKXtTXYXs7f0T%2BKlFW5uW9cmqCiPwvlSa2Tfw0JQxMf6spxS4flfIold0BJuPRHstwPKnzPozCFfZ9%2F%2FxmAjHuS5SEmpBSWjnM7VmXZYZQeCGkKOud5Bd55Rcmul2sgQvJZmfJsFuR4NiN0KZd06MY4Gph5vTbcempN6Ffsvrna7JI89cFW39XfopcuwPpX8Zu%2Fpg7eJXmIBVI%2B6y%2FKNfzHQMxR8hCULWSff893RpNu0agpsfk69Wsw7IBjwxA9McU9ouUBM9EKNVYK8RBTw6vvvm6q5IPXhYkRw9lqlvGAaicHzleOQXdiU%2FwE8Yg0FSLxZRpuImpclH5X2mhV%2F577oDHRrAm%2BecxcwMvYLFSaS9DqBlAgqrsOcs1dNzpxTHnP%2B7jfRWu9DmYmu52mCALnNj5Z8YUrhmL7RGcRDXOijCc25jy6Sk1s71cF4HR9v0hZrVUcFMKcOgGumSGGsdNUNA026cLuKWvlaP2r63iJbswWSZP2CSfbma7zA3HHQa5bvMKacgBoUxw6Pm%2BXt7zU8NcpCGunVNSnlMdfGyOjV8H5rGDmPwVVEa92MI7W0MEGOqUBRrE3e6Mw513YgGtg2bLXPeJFyz2EvF8HOT4bOtF%2FGqZL6zY6m4vpJxGaI%2F56mSYNE9wCT8nH5Q4cA%2Bwt8g%2BWxaAFXsUV4NT7ll%2BpmF%2BJ5QVjGewDHgQNlTv3SxLZcIM1T6qRjyggzPgfDz0zutScgt78kDJjRMX9n2Sx8Pk%2BNKfUWtVKAQ3I%2FD0kzvVWnAKLLZqoBRVvwcYvdT%2Ffb72DAe60vc6R&X-Amz-Signature=47bb73bcfcf33197278e7b1be2cd3540e72b1e38ebe078353b497ee819424453&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PFZFJF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDWKZG5hoOYjSzFbYd0mtcUJCc0GfTtXgRAyytHr6SJWgIgH%2B%2FSSK5zgvlimtRQbiJqOJZqfSOCxHUihL6H2ZLvAAsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKloIO6J7zYXYqj1sircA8MCjhksqIGxVuQK2ekWPdqudJVH1k6kSqmSNXgmZ7pZo4szIfaeB0JD8eRwlqM8COKXtTXYXs7f0T%2BKlFW5uW9cmqCiPwvlSa2Tfw0JQxMf6spxS4flfIold0BJuPRHstwPKnzPozCFfZ9%2F%2FxmAjHuS5SEmpBSWjnM7VmXZYZQeCGkKOud5Bd55Rcmul2sgQvJZmfJsFuR4NiN0KZd06MY4Gph5vTbcempN6Ffsvrna7JI89cFW39XfopcuwPpX8Zu%2Fpg7eJXmIBVI%2B6y%2FKNfzHQMxR8hCULWSff893RpNu0agpsfk69Wsw7IBjwxA9McU9ouUBM9EKNVYK8RBTw6vvvm6q5IPXhYkRw9lqlvGAaicHzleOQXdiU%2FwE8Yg0FSLxZRpuImpclH5X2mhV%2F577oDHRrAm%2BecxcwMvYLFSaS9DqBlAgqrsOcs1dNzpxTHnP%2B7jfRWu9DmYmu52mCALnNj5Z8YUrhmL7RGcRDXOijCc25jy6Sk1s71cF4HR9v0hZrVUcFMKcOgGumSGGsdNUNA026cLuKWvlaP2r63iJbswWSZP2CSfbma7zA3HHQa5bvMKacgBoUxw6Pm%2BXt7zU8NcpCGunVNSnlMdfGyOjV8H5rGDmPwVVEa92MI7W0MEGOqUBRrE3e6Mw513YgGtg2bLXPeJFyz2EvF8HOT4bOtF%2FGqZL6zY6m4vpJxGaI%2F56mSYNE9wCT8nH5Q4cA%2Bwt8g%2BWxaAFXsUV4NT7ll%2BpmF%2BJ5QVjGewDHgQNlTv3SxLZcIM1T6qRjyggzPgfDz0zutScgt78kDJjRMX9n2Sx8Pk%2BNKfUWtVKAQ3I%2FD0kzvVWnAKLLZqoBRVvwcYvdT%2Ffb72DAe60vc6R&X-Amz-Signature=91eafebbc6c4a191c812697081fba0022d24fa3666dbbe1b73059b297a4c2e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PFZFJF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDWKZG5hoOYjSzFbYd0mtcUJCc0GfTtXgRAyytHr6SJWgIgH%2B%2FSSK5zgvlimtRQbiJqOJZqfSOCxHUihL6H2ZLvAAsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKloIO6J7zYXYqj1sircA8MCjhksqIGxVuQK2ekWPdqudJVH1k6kSqmSNXgmZ7pZo4szIfaeB0JD8eRwlqM8COKXtTXYXs7f0T%2BKlFW5uW9cmqCiPwvlSa2Tfw0JQxMf6spxS4flfIold0BJuPRHstwPKnzPozCFfZ9%2F%2FxmAjHuS5SEmpBSWjnM7VmXZYZQeCGkKOud5Bd55Rcmul2sgQvJZmfJsFuR4NiN0KZd06MY4Gph5vTbcempN6Ffsvrna7JI89cFW39XfopcuwPpX8Zu%2Fpg7eJXmIBVI%2B6y%2FKNfzHQMxR8hCULWSff893RpNu0agpsfk69Wsw7IBjwxA9McU9ouUBM9EKNVYK8RBTw6vvvm6q5IPXhYkRw9lqlvGAaicHzleOQXdiU%2FwE8Yg0FSLxZRpuImpclH5X2mhV%2F577oDHRrAm%2BecxcwMvYLFSaS9DqBlAgqrsOcs1dNzpxTHnP%2B7jfRWu9DmYmu52mCALnNj5Z8YUrhmL7RGcRDXOijCc25jy6Sk1s71cF4HR9v0hZrVUcFMKcOgGumSGGsdNUNA026cLuKWvlaP2r63iJbswWSZP2CSfbma7zA3HHQa5bvMKacgBoUxw6Pm%2BXt7zU8NcpCGunVNSnlMdfGyOjV8H5rGDmPwVVEa92MI7W0MEGOqUBRrE3e6Mw513YgGtg2bLXPeJFyz2EvF8HOT4bOtF%2FGqZL6zY6m4vpJxGaI%2F56mSYNE9wCT8nH5Q4cA%2Bwt8g%2BWxaAFXsUV4NT7ll%2BpmF%2BJ5QVjGewDHgQNlTv3SxLZcIM1T6qRjyggzPgfDz0zutScgt78kDJjRMX9n2Sx8Pk%2BNKfUWtVKAQ3I%2FD0kzvVWnAKLLZqoBRVvwcYvdT%2Ffb72DAe60vc6R&X-Amz-Signature=20f81850efae4e3701cebde762208484d21c236a0bfbc719e96fb5fc9028c114&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4PFZFJF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDWKZG5hoOYjSzFbYd0mtcUJCc0GfTtXgRAyytHr6SJWgIgH%2B%2FSSK5zgvlimtRQbiJqOJZqfSOCxHUihL6H2ZLvAAsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKloIO6J7zYXYqj1sircA8MCjhksqIGxVuQK2ekWPdqudJVH1k6kSqmSNXgmZ7pZo4szIfaeB0JD8eRwlqM8COKXtTXYXs7f0T%2BKlFW5uW9cmqCiPwvlSa2Tfw0JQxMf6spxS4flfIold0BJuPRHstwPKnzPozCFfZ9%2F%2FxmAjHuS5SEmpBSWjnM7VmXZYZQeCGkKOud5Bd55Rcmul2sgQvJZmfJsFuR4NiN0KZd06MY4Gph5vTbcempN6Ffsvrna7JI89cFW39XfopcuwPpX8Zu%2Fpg7eJXmIBVI%2B6y%2FKNfzHQMxR8hCULWSff893RpNu0agpsfk69Wsw7IBjwxA9McU9ouUBM9EKNVYK8RBTw6vvvm6q5IPXhYkRw9lqlvGAaicHzleOQXdiU%2FwE8Yg0FSLxZRpuImpclH5X2mhV%2F577oDHRrAm%2BecxcwMvYLFSaS9DqBlAgqrsOcs1dNzpxTHnP%2B7jfRWu9DmYmu52mCALnNj5Z8YUrhmL7RGcRDXOijCc25jy6Sk1s71cF4HR9v0hZrVUcFMKcOgGumSGGsdNUNA026cLuKWvlaP2r63iJbswWSZP2CSfbma7zA3HHQa5bvMKacgBoUxw6Pm%2BXt7zU8NcpCGunVNSnlMdfGyOjV8H5rGDmPwVVEa92MI7W0MEGOqUBRrE3e6Mw513YgGtg2bLXPeJFyz2EvF8HOT4bOtF%2FGqZL6zY6m4vpJxGaI%2F56mSYNE9wCT8nH5Q4cA%2Bwt8g%2BWxaAFXsUV4NT7ll%2BpmF%2BJ5QVjGewDHgQNlTv3SxLZcIM1T6qRjyggzPgfDz0zutScgt78kDJjRMX9n2Sx8Pk%2BNKfUWtVKAQ3I%2FD0kzvVWnAKLLZqoBRVvwcYvdT%2Ffb72DAe60vc6R&X-Amz-Signature=041ad1b86fb0b14be49a8df64d6e1175318f11aeacedd7cc5801cb09889f73f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
