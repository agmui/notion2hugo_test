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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664763RVKR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BTu4vH3XjKnYnWSfBuYRPOTXrgBZWnwKgRxi7a3VjaAIhALQFPCC%2BheJxaa6Rjj2VxLkks3EbYd9iYu9auhEIqW4SKv8DCDUQABoMNjM3NDIzMTgzODA1Igz31lRraHoYlnPnu24q3AOJHJDWMuYcq%2BnxZABWFiNqkzXpJpFKwaErvAmwqDJjZTowY4MA70E4dDa9DNGix8yCjiWfDE%2BxIqit7ExY6DgOMnZWA0va55lPvRr8ZMmr88dI2wQehae%2BJLyRN8xRZS5M1Pmsfm7LKrPKAxPuUj7AjXiUApaCO9Bv8uNuILWBwLLRETqvP9cQdsEyCCo76YvXlOFdRoFyREyg0YzM1mb76v75iWo8NxNQLzIr%2Bk%2FapZNcO2iU7Gw2ZtyieZ7ogwM4qE1WIbI5Q%2BODIe0eluBPhin4D9DTIYvTsB5ZKZ4uj%2Baybtagxy%2BLQmYCCI6zLFEEBHYIM8Kr0uEUolFcj5jqbOJle59yCt4sl3awJc8ckK6vA7nWLWcBe8SSKW0%2Fps%2FfoLhAVZiF1ux1qRfzV5rYbhVlBaHnvPghUqHLfUhdKOLr3XCBYrzq74Q9z2iQTWt88gzFqLpyAHG%2FAu1xeCABKtlw4vLN9sC6zPa1pdKCNvBziLmu9M%2BYT3ZTmFVuzmjMDGavBkIf1hJdFB2WIEbrH2h%2B7Sa%2FeoRVZlvwTPVa6ecA5Q0m1cBQRHVBudIPFDea6IWwOUHkdm38OqNw4c2mopwHohFxKdg2v2EIiDGzERTfvoRXo2qsEmFlzTCC0q%2FABjqkAbltKl6Ds%2BeWYEYoe5LaM5bL9lD9cNezdxsj%2F8ZPsYSPnZSvZuAR4viURheiz5swz4xuK6Utz0el3Uxi7VveNd4ih9bdWo74qeME4NLoio3y7zPWoP3G0dyJZiaw%2F7i3k30Xoemk4LurNz5Zcugh0s%2BaPRvX5K3O8Xsjc6O2xTpAKRwRYt1ovvIZf7Feh9%2FMrYJOd2HPJ1%2BloTAyqFq3JwZYxC%2Bz&X-Amz-Signature=30ecc80e616e5eacf10dd813678cb4cbbd64aa4a8dd0df4cc9a38d886fe8b5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664763RVKR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BTu4vH3XjKnYnWSfBuYRPOTXrgBZWnwKgRxi7a3VjaAIhALQFPCC%2BheJxaa6Rjj2VxLkks3EbYd9iYu9auhEIqW4SKv8DCDUQABoMNjM3NDIzMTgzODA1Igz31lRraHoYlnPnu24q3AOJHJDWMuYcq%2BnxZABWFiNqkzXpJpFKwaErvAmwqDJjZTowY4MA70E4dDa9DNGix8yCjiWfDE%2BxIqit7ExY6DgOMnZWA0va55lPvRr8ZMmr88dI2wQehae%2BJLyRN8xRZS5M1Pmsfm7LKrPKAxPuUj7AjXiUApaCO9Bv8uNuILWBwLLRETqvP9cQdsEyCCo76YvXlOFdRoFyREyg0YzM1mb76v75iWo8NxNQLzIr%2Bk%2FapZNcO2iU7Gw2ZtyieZ7ogwM4qE1WIbI5Q%2BODIe0eluBPhin4D9DTIYvTsB5ZKZ4uj%2Baybtagxy%2BLQmYCCI6zLFEEBHYIM8Kr0uEUolFcj5jqbOJle59yCt4sl3awJc8ckK6vA7nWLWcBe8SSKW0%2Fps%2FfoLhAVZiF1ux1qRfzV5rYbhVlBaHnvPghUqHLfUhdKOLr3XCBYrzq74Q9z2iQTWt88gzFqLpyAHG%2FAu1xeCABKtlw4vLN9sC6zPa1pdKCNvBziLmu9M%2BYT3ZTmFVuzmjMDGavBkIf1hJdFB2WIEbrH2h%2B7Sa%2FeoRVZlvwTPVa6ecA5Q0m1cBQRHVBudIPFDea6IWwOUHkdm38OqNw4c2mopwHohFxKdg2v2EIiDGzERTfvoRXo2qsEmFlzTCC0q%2FABjqkAbltKl6Ds%2BeWYEYoe5LaM5bL9lD9cNezdxsj%2F8ZPsYSPnZSvZuAR4viURheiz5swz4xuK6Utz0el3Uxi7VveNd4ih9bdWo74qeME4NLoio3y7zPWoP3G0dyJZiaw%2F7i3k30Xoemk4LurNz5Zcugh0s%2BaPRvX5K3O8Xsjc6O2xTpAKRwRYt1ovvIZf7Feh9%2FMrYJOd2HPJ1%2BloTAyqFq3JwZYxC%2Bz&X-Amz-Signature=ebba6ad2bce1ee2414bdbf00efcd769aeb970dfd18f36afcd6dd1f66480e0132&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664763RVKR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BTu4vH3XjKnYnWSfBuYRPOTXrgBZWnwKgRxi7a3VjaAIhALQFPCC%2BheJxaa6Rjj2VxLkks3EbYd9iYu9auhEIqW4SKv8DCDUQABoMNjM3NDIzMTgzODA1Igz31lRraHoYlnPnu24q3AOJHJDWMuYcq%2BnxZABWFiNqkzXpJpFKwaErvAmwqDJjZTowY4MA70E4dDa9DNGix8yCjiWfDE%2BxIqit7ExY6DgOMnZWA0va55lPvRr8ZMmr88dI2wQehae%2BJLyRN8xRZS5M1Pmsfm7LKrPKAxPuUj7AjXiUApaCO9Bv8uNuILWBwLLRETqvP9cQdsEyCCo76YvXlOFdRoFyREyg0YzM1mb76v75iWo8NxNQLzIr%2Bk%2FapZNcO2iU7Gw2ZtyieZ7ogwM4qE1WIbI5Q%2BODIe0eluBPhin4D9DTIYvTsB5ZKZ4uj%2Baybtagxy%2BLQmYCCI6zLFEEBHYIM8Kr0uEUolFcj5jqbOJle59yCt4sl3awJc8ckK6vA7nWLWcBe8SSKW0%2Fps%2FfoLhAVZiF1ux1qRfzV5rYbhVlBaHnvPghUqHLfUhdKOLr3XCBYrzq74Q9z2iQTWt88gzFqLpyAHG%2FAu1xeCABKtlw4vLN9sC6zPa1pdKCNvBziLmu9M%2BYT3ZTmFVuzmjMDGavBkIf1hJdFB2WIEbrH2h%2B7Sa%2FeoRVZlvwTPVa6ecA5Q0m1cBQRHVBudIPFDea6IWwOUHkdm38OqNw4c2mopwHohFxKdg2v2EIiDGzERTfvoRXo2qsEmFlzTCC0q%2FABjqkAbltKl6Ds%2BeWYEYoe5LaM5bL9lD9cNezdxsj%2F8ZPsYSPnZSvZuAR4viURheiz5swz4xuK6Utz0el3Uxi7VveNd4ih9bdWo74qeME4NLoio3y7zPWoP3G0dyJZiaw%2F7i3k30Xoemk4LurNz5Zcugh0s%2BaPRvX5K3O8Xsjc6O2xTpAKRwRYt1ovvIZf7Feh9%2FMrYJOd2HPJ1%2BloTAyqFq3JwZYxC%2Bz&X-Amz-Signature=5f5020e2276933ec46aef20fc2f26a66c4b039c19f7fffd522772028d279b446&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664763RVKR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BTu4vH3XjKnYnWSfBuYRPOTXrgBZWnwKgRxi7a3VjaAIhALQFPCC%2BheJxaa6Rjj2VxLkks3EbYd9iYu9auhEIqW4SKv8DCDUQABoMNjM3NDIzMTgzODA1Igz31lRraHoYlnPnu24q3AOJHJDWMuYcq%2BnxZABWFiNqkzXpJpFKwaErvAmwqDJjZTowY4MA70E4dDa9DNGix8yCjiWfDE%2BxIqit7ExY6DgOMnZWA0va55lPvRr8ZMmr88dI2wQehae%2BJLyRN8xRZS5M1Pmsfm7LKrPKAxPuUj7AjXiUApaCO9Bv8uNuILWBwLLRETqvP9cQdsEyCCo76YvXlOFdRoFyREyg0YzM1mb76v75iWo8NxNQLzIr%2Bk%2FapZNcO2iU7Gw2ZtyieZ7ogwM4qE1WIbI5Q%2BODIe0eluBPhin4D9DTIYvTsB5ZKZ4uj%2Baybtagxy%2BLQmYCCI6zLFEEBHYIM8Kr0uEUolFcj5jqbOJle59yCt4sl3awJc8ckK6vA7nWLWcBe8SSKW0%2Fps%2FfoLhAVZiF1ux1qRfzV5rYbhVlBaHnvPghUqHLfUhdKOLr3XCBYrzq74Q9z2iQTWt88gzFqLpyAHG%2FAu1xeCABKtlw4vLN9sC6zPa1pdKCNvBziLmu9M%2BYT3ZTmFVuzmjMDGavBkIf1hJdFB2WIEbrH2h%2B7Sa%2FeoRVZlvwTPVa6ecA5Q0m1cBQRHVBudIPFDea6IWwOUHkdm38OqNw4c2mopwHohFxKdg2v2EIiDGzERTfvoRXo2qsEmFlzTCC0q%2FABjqkAbltKl6Ds%2BeWYEYoe5LaM5bL9lD9cNezdxsj%2F8ZPsYSPnZSvZuAR4viURheiz5swz4xuK6Utz0el3Uxi7VveNd4ih9bdWo74qeME4NLoio3y7zPWoP3G0dyJZiaw%2F7i3k30Xoemk4LurNz5Zcugh0s%2BaPRvX5K3O8Xsjc6O2xTpAKRwRYt1ovvIZf7Feh9%2FMrYJOd2HPJ1%2BloTAyqFq3JwZYxC%2Bz&X-Amz-Signature=8148f376046e403a813aa4286528c6a6cc6bb87924ea10022c11f6e6e226552b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664763RVKR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BTu4vH3XjKnYnWSfBuYRPOTXrgBZWnwKgRxi7a3VjaAIhALQFPCC%2BheJxaa6Rjj2VxLkks3EbYd9iYu9auhEIqW4SKv8DCDUQABoMNjM3NDIzMTgzODA1Igz31lRraHoYlnPnu24q3AOJHJDWMuYcq%2BnxZABWFiNqkzXpJpFKwaErvAmwqDJjZTowY4MA70E4dDa9DNGix8yCjiWfDE%2BxIqit7ExY6DgOMnZWA0va55lPvRr8ZMmr88dI2wQehae%2BJLyRN8xRZS5M1Pmsfm7LKrPKAxPuUj7AjXiUApaCO9Bv8uNuILWBwLLRETqvP9cQdsEyCCo76YvXlOFdRoFyREyg0YzM1mb76v75iWo8NxNQLzIr%2Bk%2FapZNcO2iU7Gw2ZtyieZ7ogwM4qE1WIbI5Q%2BODIe0eluBPhin4D9DTIYvTsB5ZKZ4uj%2Baybtagxy%2BLQmYCCI6zLFEEBHYIM8Kr0uEUolFcj5jqbOJle59yCt4sl3awJc8ckK6vA7nWLWcBe8SSKW0%2Fps%2FfoLhAVZiF1ux1qRfzV5rYbhVlBaHnvPghUqHLfUhdKOLr3XCBYrzq74Q9z2iQTWt88gzFqLpyAHG%2FAu1xeCABKtlw4vLN9sC6zPa1pdKCNvBziLmu9M%2BYT3ZTmFVuzmjMDGavBkIf1hJdFB2WIEbrH2h%2B7Sa%2FeoRVZlvwTPVa6ecA5Q0m1cBQRHVBudIPFDea6IWwOUHkdm38OqNw4c2mopwHohFxKdg2v2EIiDGzERTfvoRXo2qsEmFlzTCC0q%2FABjqkAbltKl6Ds%2BeWYEYoe5LaM5bL9lD9cNezdxsj%2F8ZPsYSPnZSvZuAR4viURheiz5swz4xuK6Utz0el3Uxi7VveNd4ih9bdWo74qeME4NLoio3y7zPWoP3G0dyJZiaw%2F7i3k30Xoemk4LurNz5Zcugh0s%2BaPRvX5K3O8Xsjc6O2xTpAKRwRYt1ovvIZf7Feh9%2FMrYJOd2HPJ1%2BloTAyqFq3JwZYxC%2Bz&X-Amz-Signature=af99f7c1abad0a416a8140a24665101591e7cf407e9d9b9aa5c66a190c32f22d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
