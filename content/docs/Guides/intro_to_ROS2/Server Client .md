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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOE6LBD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH1YEuisOoUZ5fIa39BWijGbiT7FdQw8d2k04qB1VLUSAiEA6DeeLYEGjQaqL9uWpPsp8TfhMEmU1fNfeWFCW2BsDbwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIufSLTDpjnkKg4FCrcAzKq0zMauUF1vzZBBWOpvhBkFxi72PRz%2FrVIe1fL%2Bu45dfQnkLs6gRTa3iscQY4di%2FvLGEQb7DkxP2uNWD%2B889uYv0t01TAtEOE%2FvLf1KIVdOMuc9sGimgwD9YQG%2FfPDmsRTKrlEiFuVVEdnf2zamFsVKgKr2Weh0Bs38Igl7p4opY%2B3tmYwzzvxNmzlvG8JnDCy9XxlgZl%2BKiN2uTRJftXYtmjzKuhMlWxJ5pG0w3LDam5S%2Bae1jyfgm8KkGzU3URoApUMSlVE%2F8WUMqoqKC8Gh9DYRe0SHnYVeZBcwqeoL4iLgH4bEhO69jzUK%2FyxY1aY6%2Bm1yUTUcbjyhmeEV5LkP2ECbqk7i64Sn4eoYZDya4sAL9VbEj3rcg%2B1oCPLAl7uotoBr1bboK8YMF5K%2BWRu6hgEHtOKr6ppI%2BJf8%2F5Ih0N6Zud1cSZ44xZr%2BckJwakzsKGXrSHDI8LknJhHO9rZHNlpZrBxBXyUOB5%2F8hAqQDr0PVU1ESI6Pn48vYXo9jF3nOhmZAOR2zdsqfhBmckltou6F%2FA6H%2BbGd%2B0lwHcZCzl5zdV%2BrBFNg2ZSjZvdNSbWYkUxFhdvCQa%2F1%2B5Lh8CxWiknoOALiEBqhIwbl3ji%2F5K0TauvXD8tP3GJCMPnw5b8GOqUB1QprMC59IqXPGCrRDlo5OrBne5tpUyO73mqIMP5zWD6mPFoK6drjojxvnbHPXMbnj6aG%2FUoTDb40Yi9EHgvYoCFBrTjDRsK4fUNRzI7K5toPNvYMmjSRxVb0GFfJjr1FgHxwj5Z4oGoQyqSWMGN0%2F3LLobPhYauUK9kkoNQMyooGQfQyf5u5%2FOsD8iDJlpywqOCMq2%2Bi%2FwsEoc6YDElb4ym6YoVb&X-Amz-Signature=0a52b3c110fe44162288a9fe37e36308bf795d7d5b0d8d9377c8a9cfb3c33ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOE6LBD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH1YEuisOoUZ5fIa39BWijGbiT7FdQw8d2k04qB1VLUSAiEA6DeeLYEGjQaqL9uWpPsp8TfhMEmU1fNfeWFCW2BsDbwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIufSLTDpjnkKg4FCrcAzKq0zMauUF1vzZBBWOpvhBkFxi72PRz%2FrVIe1fL%2Bu45dfQnkLs6gRTa3iscQY4di%2FvLGEQb7DkxP2uNWD%2B889uYv0t01TAtEOE%2FvLf1KIVdOMuc9sGimgwD9YQG%2FfPDmsRTKrlEiFuVVEdnf2zamFsVKgKr2Weh0Bs38Igl7p4opY%2B3tmYwzzvxNmzlvG8JnDCy9XxlgZl%2BKiN2uTRJftXYtmjzKuhMlWxJ5pG0w3LDam5S%2Bae1jyfgm8KkGzU3URoApUMSlVE%2F8WUMqoqKC8Gh9DYRe0SHnYVeZBcwqeoL4iLgH4bEhO69jzUK%2FyxY1aY6%2Bm1yUTUcbjyhmeEV5LkP2ECbqk7i64Sn4eoYZDya4sAL9VbEj3rcg%2B1oCPLAl7uotoBr1bboK8YMF5K%2BWRu6hgEHtOKr6ppI%2BJf8%2F5Ih0N6Zud1cSZ44xZr%2BckJwakzsKGXrSHDI8LknJhHO9rZHNlpZrBxBXyUOB5%2F8hAqQDr0PVU1ESI6Pn48vYXo9jF3nOhmZAOR2zdsqfhBmckltou6F%2FA6H%2BbGd%2B0lwHcZCzl5zdV%2BrBFNg2ZSjZvdNSbWYkUxFhdvCQa%2F1%2B5Lh8CxWiknoOALiEBqhIwbl3ji%2F5K0TauvXD8tP3GJCMPnw5b8GOqUB1QprMC59IqXPGCrRDlo5OrBne5tpUyO73mqIMP5zWD6mPFoK6drjojxvnbHPXMbnj6aG%2FUoTDb40Yi9EHgvYoCFBrTjDRsK4fUNRzI7K5toPNvYMmjSRxVb0GFfJjr1FgHxwj5Z4oGoQyqSWMGN0%2F3LLobPhYauUK9kkoNQMyooGQfQyf5u5%2FOsD8iDJlpywqOCMq2%2Bi%2FwsEoc6YDElb4ym6YoVb&X-Amz-Signature=8a0d764e326265fc7dd1dd235acb99df31cb3e996ee8bc63d82787489b8ba2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOE6LBD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH1YEuisOoUZ5fIa39BWijGbiT7FdQw8d2k04qB1VLUSAiEA6DeeLYEGjQaqL9uWpPsp8TfhMEmU1fNfeWFCW2BsDbwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIufSLTDpjnkKg4FCrcAzKq0zMauUF1vzZBBWOpvhBkFxi72PRz%2FrVIe1fL%2Bu45dfQnkLs6gRTa3iscQY4di%2FvLGEQb7DkxP2uNWD%2B889uYv0t01TAtEOE%2FvLf1KIVdOMuc9sGimgwD9YQG%2FfPDmsRTKrlEiFuVVEdnf2zamFsVKgKr2Weh0Bs38Igl7p4opY%2B3tmYwzzvxNmzlvG8JnDCy9XxlgZl%2BKiN2uTRJftXYtmjzKuhMlWxJ5pG0w3LDam5S%2Bae1jyfgm8KkGzU3URoApUMSlVE%2F8WUMqoqKC8Gh9DYRe0SHnYVeZBcwqeoL4iLgH4bEhO69jzUK%2FyxY1aY6%2Bm1yUTUcbjyhmeEV5LkP2ECbqk7i64Sn4eoYZDya4sAL9VbEj3rcg%2B1oCPLAl7uotoBr1bboK8YMF5K%2BWRu6hgEHtOKr6ppI%2BJf8%2F5Ih0N6Zud1cSZ44xZr%2BckJwakzsKGXrSHDI8LknJhHO9rZHNlpZrBxBXyUOB5%2F8hAqQDr0PVU1ESI6Pn48vYXo9jF3nOhmZAOR2zdsqfhBmckltou6F%2FA6H%2BbGd%2B0lwHcZCzl5zdV%2BrBFNg2ZSjZvdNSbWYkUxFhdvCQa%2F1%2B5Lh8CxWiknoOALiEBqhIwbl3ji%2F5K0TauvXD8tP3GJCMPnw5b8GOqUB1QprMC59IqXPGCrRDlo5OrBne5tpUyO73mqIMP5zWD6mPFoK6drjojxvnbHPXMbnj6aG%2FUoTDb40Yi9EHgvYoCFBrTjDRsK4fUNRzI7K5toPNvYMmjSRxVb0GFfJjr1FgHxwj5Z4oGoQyqSWMGN0%2F3LLobPhYauUK9kkoNQMyooGQfQyf5u5%2FOsD8iDJlpywqOCMq2%2Bi%2FwsEoc6YDElb4ym6YoVb&X-Amz-Signature=34ef7f9326c33ee5aa4a1fde3a03a7ca6141eff20e7da82b308aa39eecf1b356&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOE6LBD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH1YEuisOoUZ5fIa39BWijGbiT7FdQw8d2k04qB1VLUSAiEA6DeeLYEGjQaqL9uWpPsp8TfhMEmU1fNfeWFCW2BsDbwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIufSLTDpjnkKg4FCrcAzKq0zMauUF1vzZBBWOpvhBkFxi72PRz%2FrVIe1fL%2Bu45dfQnkLs6gRTa3iscQY4di%2FvLGEQb7DkxP2uNWD%2B889uYv0t01TAtEOE%2FvLf1KIVdOMuc9sGimgwD9YQG%2FfPDmsRTKrlEiFuVVEdnf2zamFsVKgKr2Weh0Bs38Igl7p4opY%2B3tmYwzzvxNmzlvG8JnDCy9XxlgZl%2BKiN2uTRJftXYtmjzKuhMlWxJ5pG0w3LDam5S%2Bae1jyfgm8KkGzU3URoApUMSlVE%2F8WUMqoqKC8Gh9DYRe0SHnYVeZBcwqeoL4iLgH4bEhO69jzUK%2FyxY1aY6%2Bm1yUTUcbjyhmeEV5LkP2ECbqk7i64Sn4eoYZDya4sAL9VbEj3rcg%2B1oCPLAl7uotoBr1bboK8YMF5K%2BWRu6hgEHtOKr6ppI%2BJf8%2F5Ih0N6Zud1cSZ44xZr%2BckJwakzsKGXrSHDI8LknJhHO9rZHNlpZrBxBXyUOB5%2F8hAqQDr0PVU1ESI6Pn48vYXo9jF3nOhmZAOR2zdsqfhBmckltou6F%2FA6H%2BbGd%2B0lwHcZCzl5zdV%2BrBFNg2ZSjZvdNSbWYkUxFhdvCQa%2F1%2B5Lh8CxWiknoOALiEBqhIwbl3ji%2F5K0TauvXD8tP3GJCMPnw5b8GOqUB1QprMC59IqXPGCrRDlo5OrBne5tpUyO73mqIMP5zWD6mPFoK6drjojxvnbHPXMbnj6aG%2FUoTDb40Yi9EHgvYoCFBrTjDRsK4fUNRzI7K5toPNvYMmjSRxVb0GFfJjr1FgHxwj5Z4oGoQyqSWMGN0%2F3LLobPhYauUK9kkoNQMyooGQfQyf5u5%2FOsD8iDJlpywqOCMq2%2Bi%2FwsEoc6YDElb4ym6YoVb&X-Amz-Signature=755f78b94be04be8d32789d948c3f4d488c2d458a09b3f82b6242b318a18c05f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOE6LBD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH1YEuisOoUZ5fIa39BWijGbiT7FdQw8d2k04qB1VLUSAiEA6DeeLYEGjQaqL9uWpPsp8TfhMEmU1fNfeWFCW2BsDbwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIufSLTDpjnkKg4FCrcAzKq0zMauUF1vzZBBWOpvhBkFxi72PRz%2FrVIe1fL%2Bu45dfQnkLs6gRTa3iscQY4di%2FvLGEQb7DkxP2uNWD%2B889uYv0t01TAtEOE%2FvLf1KIVdOMuc9sGimgwD9YQG%2FfPDmsRTKrlEiFuVVEdnf2zamFsVKgKr2Weh0Bs38Igl7p4opY%2B3tmYwzzvxNmzlvG8JnDCy9XxlgZl%2BKiN2uTRJftXYtmjzKuhMlWxJ5pG0w3LDam5S%2Bae1jyfgm8KkGzU3URoApUMSlVE%2F8WUMqoqKC8Gh9DYRe0SHnYVeZBcwqeoL4iLgH4bEhO69jzUK%2FyxY1aY6%2Bm1yUTUcbjyhmeEV5LkP2ECbqk7i64Sn4eoYZDya4sAL9VbEj3rcg%2B1oCPLAl7uotoBr1bboK8YMF5K%2BWRu6hgEHtOKr6ppI%2BJf8%2F5Ih0N6Zud1cSZ44xZr%2BckJwakzsKGXrSHDI8LknJhHO9rZHNlpZrBxBXyUOB5%2F8hAqQDr0PVU1ESI6Pn48vYXo9jF3nOhmZAOR2zdsqfhBmckltou6F%2FA6H%2BbGd%2B0lwHcZCzl5zdV%2BrBFNg2ZSjZvdNSbWYkUxFhdvCQa%2F1%2B5Lh8CxWiknoOALiEBqhIwbl3ji%2F5K0TauvXD8tP3GJCMPnw5b8GOqUB1QprMC59IqXPGCrRDlo5OrBne5tpUyO73mqIMP5zWD6mPFoK6drjojxvnbHPXMbnj6aG%2FUoTDb40Yi9EHgvYoCFBrTjDRsK4fUNRzI7K5toPNvYMmjSRxVb0GFfJjr1FgHxwj5Z4oGoQyqSWMGN0%2F3LLobPhYauUK9kkoNQMyooGQfQyf5u5%2FOsD8iDJlpywqOCMq2%2Bi%2FwsEoc6YDElb4ym6YoVb&X-Amz-Signature=1edbb509967e4ec024eeff2de96c7fae94e2c66055d1f4968e6b99c57bc57798&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
