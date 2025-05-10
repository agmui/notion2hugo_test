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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQQNVRV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDqh%2BIsqgOb0JA2lYnpioZi0oF81ncUUwrWi52JiXdd4gIhALx6r%2BZqeF7pkq4S1AAEfBwMKBnFE4fROOSCmcLm2YeXKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKFRCU0oN%2BP9tPcB4q3ANZbUAZTZzGxkGwjR4CvVKt6ABKnNww8a4OvMChs1S8uohx17NXHU0SmyPpHKnMBwTcLQ4SCp%2BKaaNz4%2BrWjD06ZQEJ%2B2uy6ijF50ZdSqqcFMMt6NW7fPK7rct4H5KGEa4DGx0fTG4De58MN4HI40jnyieshwwcLXJZcIK0AIX%2FNseXE%2BS1J3iG6Y5GHWlRVvFa9BAsuby9LfYVFo6NxZd8TAp2YD7xZ1eEDBrdcoJZHyqP2Vlj%2Fr3J8d4jb%2BU3rR5mU0TJrtE0S3HDNiyDZq1q0JB8Os75G0vBjDWm6GUJHqA5ebmw22%2FHzm8PAVszAYBK5afgu1fXqXxzoZY%2FMQEn84L6dtBM6DpH14SYHzO9wxJskL6xAZ5PinlmgNWV5hisdsUGF7VSJZaJ2LGPJ89bgMQKiHsPaqJy9fyqquy9zicxs%2Bjaj55O3ZI0LBqfexxK0xVVnhyX5UTT7ZQNqMNgq5HL%2Bj0PRBRwsTPuIkVIwtUOTWAgydb4YOUH3AflRsSqpJqX8aM%2BUi7FvtFr8%2FCgYGxiC1V70%2BHA%2BuLqzL%2BDxgZvf81UhqGiUjxF3%2F3JnW7BowHgeBsCub0whVgLepS8LBlhXr7sFPaETdqXTcBdTYykxJ93nW5YTUR7AzDKoP7ABjqkAVz1wJSIo0%2BCoJ1INm8PexzALmh9NlAdXl1d8p%2F5%2F7aG9pD2nyw6L8OJJYfZBeqcdgtfiGnGb0JsIp0lmfA2ZgOPfqR9A7SJal%2FjVcwPs4i4XWkitlrRW%2Bl58bUrkco5x%2FZuJvTNoN%2FdCuThEMESsF5DNC8DwN8jlKpCakartzlG%2Fq3h8E29JbtMJ4%2FhAaW1nYCF5yg6CXXffsxIzNJIk8VTHtis&X-Amz-Signature=28d8dc62b24c9df2416cf320569e88e67ed774bfcd655b9fed15fa1275f5127e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQQNVRV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDqh%2BIsqgOb0JA2lYnpioZi0oF81ncUUwrWi52JiXdd4gIhALx6r%2BZqeF7pkq4S1AAEfBwMKBnFE4fROOSCmcLm2YeXKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKFRCU0oN%2BP9tPcB4q3ANZbUAZTZzGxkGwjR4CvVKt6ABKnNww8a4OvMChs1S8uohx17NXHU0SmyPpHKnMBwTcLQ4SCp%2BKaaNz4%2BrWjD06ZQEJ%2B2uy6ijF50ZdSqqcFMMt6NW7fPK7rct4H5KGEa4DGx0fTG4De58MN4HI40jnyieshwwcLXJZcIK0AIX%2FNseXE%2BS1J3iG6Y5GHWlRVvFa9BAsuby9LfYVFo6NxZd8TAp2YD7xZ1eEDBrdcoJZHyqP2Vlj%2Fr3J8d4jb%2BU3rR5mU0TJrtE0S3HDNiyDZq1q0JB8Os75G0vBjDWm6GUJHqA5ebmw22%2FHzm8PAVszAYBK5afgu1fXqXxzoZY%2FMQEn84L6dtBM6DpH14SYHzO9wxJskL6xAZ5PinlmgNWV5hisdsUGF7VSJZaJ2LGPJ89bgMQKiHsPaqJy9fyqquy9zicxs%2Bjaj55O3ZI0LBqfexxK0xVVnhyX5UTT7ZQNqMNgq5HL%2Bj0PRBRwsTPuIkVIwtUOTWAgydb4YOUH3AflRsSqpJqX8aM%2BUi7FvtFr8%2FCgYGxiC1V70%2BHA%2BuLqzL%2BDxgZvf81UhqGiUjxF3%2F3JnW7BowHgeBsCub0whVgLepS8LBlhXr7sFPaETdqXTcBdTYykxJ93nW5YTUR7AzDKoP7ABjqkAVz1wJSIo0%2BCoJ1INm8PexzALmh9NlAdXl1d8p%2F5%2F7aG9pD2nyw6L8OJJYfZBeqcdgtfiGnGb0JsIp0lmfA2ZgOPfqR9A7SJal%2FjVcwPs4i4XWkitlrRW%2Bl58bUrkco5x%2FZuJvTNoN%2FdCuThEMESsF5DNC8DwN8jlKpCakartzlG%2Fq3h8E29JbtMJ4%2FhAaW1nYCF5yg6CXXffsxIzNJIk8VTHtis&X-Amz-Signature=de4025968c25da4a98a58f51b154fb38ff8f026da0b7dd2b464b2c11cdd1c5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQQNVRV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDqh%2BIsqgOb0JA2lYnpioZi0oF81ncUUwrWi52JiXdd4gIhALx6r%2BZqeF7pkq4S1AAEfBwMKBnFE4fROOSCmcLm2YeXKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKFRCU0oN%2BP9tPcB4q3ANZbUAZTZzGxkGwjR4CvVKt6ABKnNww8a4OvMChs1S8uohx17NXHU0SmyPpHKnMBwTcLQ4SCp%2BKaaNz4%2BrWjD06ZQEJ%2B2uy6ijF50ZdSqqcFMMt6NW7fPK7rct4H5KGEa4DGx0fTG4De58MN4HI40jnyieshwwcLXJZcIK0AIX%2FNseXE%2BS1J3iG6Y5GHWlRVvFa9BAsuby9LfYVFo6NxZd8TAp2YD7xZ1eEDBrdcoJZHyqP2Vlj%2Fr3J8d4jb%2BU3rR5mU0TJrtE0S3HDNiyDZq1q0JB8Os75G0vBjDWm6GUJHqA5ebmw22%2FHzm8PAVszAYBK5afgu1fXqXxzoZY%2FMQEn84L6dtBM6DpH14SYHzO9wxJskL6xAZ5PinlmgNWV5hisdsUGF7VSJZaJ2LGPJ89bgMQKiHsPaqJy9fyqquy9zicxs%2Bjaj55O3ZI0LBqfexxK0xVVnhyX5UTT7ZQNqMNgq5HL%2Bj0PRBRwsTPuIkVIwtUOTWAgydb4YOUH3AflRsSqpJqX8aM%2BUi7FvtFr8%2FCgYGxiC1V70%2BHA%2BuLqzL%2BDxgZvf81UhqGiUjxF3%2F3JnW7BowHgeBsCub0whVgLepS8LBlhXr7sFPaETdqXTcBdTYykxJ93nW5YTUR7AzDKoP7ABjqkAVz1wJSIo0%2BCoJ1INm8PexzALmh9NlAdXl1d8p%2F5%2F7aG9pD2nyw6L8OJJYfZBeqcdgtfiGnGb0JsIp0lmfA2ZgOPfqR9A7SJal%2FjVcwPs4i4XWkitlrRW%2Bl58bUrkco5x%2FZuJvTNoN%2FdCuThEMESsF5DNC8DwN8jlKpCakartzlG%2Fq3h8E29JbtMJ4%2FhAaW1nYCF5yg6CXXffsxIzNJIk8VTHtis&X-Amz-Signature=d0e41d6131976a005b46ecc4c51ae341cb1e9110248fa24cc7b6cb76fce42179&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQQNVRV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDqh%2BIsqgOb0JA2lYnpioZi0oF81ncUUwrWi52JiXdd4gIhALx6r%2BZqeF7pkq4S1AAEfBwMKBnFE4fROOSCmcLm2YeXKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKFRCU0oN%2BP9tPcB4q3ANZbUAZTZzGxkGwjR4CvVKt6ABKnNww8a4OvMChs1S8uohx17NXHU0SmyPpHKnMBwTcLQ4SCp%2BKaaNz4%2BrWjD06ZQEJ%2B2uy6ijF50ZdSqqcFMMt6NW7fPK7rct4H5KGEa4DGx0fTG4De58MN4HI40jnyieshwwcLXJZcIK0AIX%2FNseXE%2BS1J3iG6Y5GHWlRVvFa9BAsuby9LfYVFo6NxZd8TAp2YD7xZ1eEDBrdcoJZHyqP2Vlj%2Fr3J8d4jb%2BU3rR5mU0TJrtE0S3HDNiyDZq1q0JB8Os75G0vBjDWm6GUJHqA5ebmw22%2FHzm8PAVszAYBK5afgu1fXqXxzoZY%2FMQEn84L6dtBM6DpH14SYHzO9wxJskL6xAZ5PinlmgNWV5hisdsUGF7VSJZaJ2LGPJ89bgMQKiHsPaqJy9fyqquy9zicxs%2Bjaj55O3ZI0LBqfexxK0xVVnhyX5UTT7ZQNqMNgq5HL%2Bj0PRBRwsTPuIkVIwtUOTWAgydb4YOUH3AflRsSqpJqX8aM%2BUi7FvtFr8%2FCgYGxiC1V70%2BHA%2BuLqzL%2BDxgZvf81UhqGiUjxF3%2F3JnW7BowHgeBsCub0whVgLepS8LBlhXr7sFPaETdqXTcBdTYykxJ93nW5YTUR7AzDKoP7ABjqkAVz1wJSIo0%2BCoJ1INm8PexzALmh9NlAdXl1d8p%2F5%2F7aG9pD2nyw6L8OJJYfZBeqcdgtfiGnGb0JsIp0lmfA2ZgOPfqR9A7SJal%2FjVcwPs4i4XWkitlrRW%2Bl58bUrkco5x%2FZuJvTNoN%2FdCuThEMESsF5DNC8DwN8jlKpCakartzlG%2Fq3h8E29JbtMJ4%2FhAaW1nYCF5yg6CXXffsxIzNJIk8VTHtis&X-Amz-Signature=1e99c94a35bfab71002d3c72866a279213b76facb4cf2abf5f274254319578c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQQNVRV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDqh%2BIsqgOb0JA2lYnpioZi0oF81ncUUwrWi52JiXdd4gIhALx6r%2BZqeF7pkq4S1AAEfBwMKBnFE4fROOSCmcLm2YeXKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKFRCU0oN%2BP9tPcB4q3ANZbUAZTZzGxkGwjR4CvVKt6ABKnNww8a4OvMChs1S8uohx17NXHU0SmyPpHKnMBwTcLQ4SCp%2BKaaNz4%2BrWjD06ZQEJ%2B2uy6ijF50ZdSqqcFMMt6NW7fPK7rct4H5KGEa4DGx0fTG4De58MN4HI40jnyieshwwcLXJZcIK0AIX%2FNseXE%2BS1J3iG6Y5GHWlRVvFa9BAsuby9LfYVFo6NxZd8TAp2YD7xZ1eEDBrdcoJZHyqP2Vlj%2Fr3J8d4jb%2BU3rR5mU0TJrtE0S3HDNiyDZq1q0JB8Os75G0vBjDWm6GUJHqA5ebmw22%2FHzm8PAVszAYBK5afgu1fXqXxzoZY%2FMQEn84L6dtBM6DpH14SYHzO9wxJskL6xAZ5PinlmgNWV5hisdsUGF7VSJZaJ2LGPJ89bgMQKiHsPaqJy9fyqquy9zicxs%2Bjaj55O3ZI0LBqfexxK0xVVnhyX5UTT7ZQNqMNgq5HL%2Bj0PRBRwsTPuIkVIwtUOTWAgydb4YOUH3AflRsSqpJqX8aM%2BUi7FvtFr8%2FCgYGxiC1V70%2BHA%2BuLqzL%2BDxgZvf81UhqGiUjxF3%2F3JnW7BowHgeBsCub0whVgLepS8LBlhXr7sFPaETdqXTcBdTYykxJ93nW5YTUR7AzDKoP7ABjqkAVz1wJSIo0%2BCoJ1INm8PexzALmh9NlAdXl1d8p%2F5%2F7aG9pD2nyw6L8OJJYfZBeqcdgtfiGnGb0JsIp0lmfA2ZgOPfqR9A7SJal%2FjVcwPs4i4XWkitlrRW%2Bl58bUrkco5x%2FZuJvTNoN%2FdCuThEMESsF5DNC8DwN8jlKpCakartzlG%2Fq3h8E29JbtMJ4%2FhAaW1nYCF5yg6CXXffsxIzNJIk8VTHtis&X-Amz-Signature=968d0a78779b19fe86e9af08e9d656c0341a013807ba0fe7f48a671769e088d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
