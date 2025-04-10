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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNMK5BB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDepzpECHe4bDXUo3wrW4soIeEVaX3tNSRXrQRFcZyWAwIgO8k19aWXUCZ9cGdsjI8aHiiXdivTNxpiAyV9jGro7wQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1syvW0JaMo8VNKySrcA1%2B2WPNhimC15ytCpYdDmT%2FIKzSnfLkfAbwKQsYjHsHZUpQMtvucr8MvlGFOMZy9woIRMEYXXpd0S%2FgKYx9x7QyOdE2IBp2zihOfB7wnUANTEVPEnOvJ0POCdiBKHiapvN3zOH0cqgMawNfSuj68aNrzofyXKG31ZgiLo0XqPpcI2Amf5XjHIOA0dJpDCuxtDV8vvYE5lur0ST1rRsT0sj%2BJGYCTA6IadjtFH1qwoveQKbeCnPgyX1SdR9OuxoADp8Fj%2Fm0NzITVsDuSfBag9g0KpaTmEUfFDH7u7D%2BhYrK9segRMSNR6a%2FSvw7vgoEoha4jiDdNyV%2BuzJb7C0f%2BKhtHeQ6W%2FToLf1xvKTEECnyhfavd2n1sKO948EpJDw6Q5nyPS7X68JE%2B4e5eZveoHtK1mXHEzKyFJ5dPlBf2B79AlIzH5%2FZi8zoHIJcGi8MQenqp0YD%2Fy9o4Py13Hee%2BhE%2BkNqKFfMjyRpEE9jthbH28BUXkq4ltzfga7FlD%2BR8nE3olKGmviu%2FoqHwH3Sbsn51yj0AaX%2B9BzRNSNal3S%2F%2Fvz5ZxdbzK%2FKLzmWCW%2F%2BQeeaRhbESXK0kQBKGLwAAQucLBTfOoEc6S8H%2BfpumSFWyVBN5OssPkXYbOvwAhMLWP3b8GOqUBQ1ffX7QXWsXOHcf8wanRYKgUZGtkyqx9m7eEiq2XQMzKK5sefQ%2BBkzJBDBwsDVD5kJN88EMfm%2F2dvLilp%2BNjXe%2FfyDwX%2FfDFpmU8Gw6RS6wmN7EdD7evlljmlsi3Qfi6OL6e3ZDogMCmC8BFukOZJCn%2Bd%2BuRTtfFjwNx2S3UGRDXdEvoOg5qA%2Ft1N6hW6NulLwmPMkF5J4n%2Ba7HNVY%2FUyfmd3rYo&X-Amz-Signature=bfeefe30ef9dafba929c4857609b290eec9ec04a7256e6e22843064ed91ceaab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNMK5BB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDepzpECHe4bDXUo3wrW4soIeEVaX3tNSRXrQRFcZyWAwIgO8k19aWXUCZ9cGdsjI8aHiiXdivTNxpiAyV9jGro7wQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1syvW0JaMo8VNKySrcA1%2B2WPNhimC15ytCpYdDmT%2FIKzSnfLkfAbwKQsYjHsHZUpQMtvucr8MvlGFOMZy9woIRMEYXXpd0S%2FgKYx9x7QyOdE2IBp2zihOfB7wnUANTEVPEnOvJ0POCdiBKHiapvN3zOH0cqgMawNfSuj68aNrzofyXKG31ZgiLo0XqPpcI2Amf5XjHIOA0dJpDCuxtDV8vvYE5lur0ST1rRsT0sj%2BJGYCTA6IadjtFH1qwoveQKbeCnPgyX1SdR9OuxoADp8Fj%2Fm0NzITVsDuSfBag9g0KpaTmEUfFDH7u7D%2BhYrK9segRMSNR6a%2FSvw7vgoEoha4jiDdNyV%2BuzJb7C0f%2BKhtHeQ6W%2FToLf1xvKTEECnyhfavd2n1sKO948EpJDw6Q5nyPS7X68JE%2B4e5eZveoHtK1mXHEzKyFJ5dPlBf2B79AlIzH5%2FZi8zoHIJcGi8MQenqp0YD%2Fy9o4Py13Hee%2BhE%2BkNqKFfMjyRpEE9jthbH28BUXkq4ltzfga7FlD%2BR8nE3olKGmviu%2FoqHwH3Sbsn51yj0AaX%2B9BzRNSNal3S%2F%2Fvz5ZxdbzK%2FKLzmWCW%2F%2BQeeaRhbESXK0kQBKGLwAAQucLBTfOoEc6S8H%2BfpumSFWyVBN5OssPkXYbOvwAhMLWP3b8GOqUBQ1ffX7QXWsXOHcf8wanRYKgUZGtkyqx9m7eEiq2XQMzKK5sefQ%2BBkzJBDBwsDVD5kJN88EMfm%2F2dvLilp%2BNjXe%2FfyDwX%2FfDFpmU8Gw6RS6wmN7EdD7evlljmlsi3Qfi6OL6e3ZDogMCmC8BFukOZJCn%2Bd%2BuRTtfFjwNx2S3UGRDXdEvoOg5qA%2Ft1N6hW6NulLwmPMkF5J4n%2Ba7HNVY%2FUyfmd3rYo&X-Amz-Signature=aa3814dcd5afc32e667cb1c0c95d38ae288fd4fbde0ba16cb99793ee20e475e0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNMK5BB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDepzpECHe4bDXUo3wrW4soIeEVaX3tNSRXrQRFcZyWAwIgO8k19aWXUCZ9cGdsjI8aHiiXdivTNxpiAyV9jGro7wQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1syvW0JaMo8VNKySrcA1%2B2WPNhimC15ytCpYdDmT%2FIKzSnfLkfAbwKQsYjHsHZUpQMtvucr8MvlGFOMZy9woIRMEYXXpd0S%2FgKYx9x7QyOdE2IBp2zihOfB7wnUANTEVPEnOvJ0POCdiBKHiapvN3zOH0cqgMawNfSuj68aNrzofyXKG31ZgiLo0XqPpcI2Amf5XjHIOA0dJpDCuxtDV8vvYE5lur0ST1rRsT0sj%2BJGYCTA6IadjtFH1qwoveQKbeCnPgyX1SdR9OuxoADp8Fj%2Fm0NzITVsDuSfBag9g0KpaTmEUfFDH7u7D%2BhYrK9segRMSNR6a%2FSvw7vgoEoha4jiDdNyV%2BuzJb7C0f%2BKhtHeQ6W%2FToLf1xvKTEECnyhfavd2n1sKO948EpJDw6Q5nyPS7X68JE%2B4e5eZveoHtK1mXHEzKyFJ5dPlBf2B79AlIzH5%2FZi8zoHIJcGi8MQenqp0YD%2Fy9o4Py13Hee%2BhE%2BkNqKFfMjyRpEE9jthbH28BUXkq4ltzfga7FlD%2BR8nE3olKGmviu%2FoqHwH3Sbsn51yj0AaX%2B9BzRNSNal3S%2F%2Fvz5ZxdbzK%2FKLzmWCW%2F%2BQeeaRhbESXK0kQBKGLwAAQucLBTfOoEc6S8H%2BfpumSFWyVBN5OssPkXYbOvwAhMLWP3b8GOqUBQ1ffX7QXWsXOHcf8wanRYKgUZGtkyqx9m7eEiq2XQMzKK5sefQ%2BBkzJBDBwsDVD5kJN88EMfm%2F2dvLilp%2BNjXe%2FfyDwX%2FfDFpmU8Gw6RS6wmN7EdD7evlljmlsi3Qfi6OL6e3ZDogMCmC8BFukOZJCn%2Bd%2BuRTtfFjwNx2S3UGRDXdEvoOg5qA%2Ft1N6hW6NulLwmPMkF5J4n%2Ba7HNVY%2FUyfmd3rYo&X-Amz-Signature=3105edd960f1f1e06fae35990e422698a515e0ef5a081cdda151dde950c312c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNMK5BB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDepzpECHe4bDXUo3wrW4soIeEVaX3tNSRXrQRFcZyWAwIgO8k19aWXUCZ9cGdsjI8aHiiXdivTNxpiAyV9jGro7wQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1syvW0JaMo8VNKySrcA1%2B2WPNhimC15ytCpYdDmT%2FIKzSnfLkfAbwKQsYjHsHZUpQMtvucr8MvlGFOMZy9woIRMEYXXpd0S%2FgKYx9x7QyOdE2IBp2zihOfB7wnUANTEVPEnOvJ0POCdiBKHiapvN3zOH0cqgMawNfSuj68aNrzofyXKG31ZgiLo0XqPpcI2Amf5XjHIOA0dJpDCuxtDV8vvYE5lur0ST1rRsT0sj%2BJGYCTA6IadjtFH1qwoveQKbeCnPgyX1SdR9OuxoADp8Fj%2Fm0NzITVsDuSfBag9g0KpaTmEUfFDH7u7D%2BhYrK9segRMSNR6a%2FSvw7vgoEoha4jiDdNyV%2BuzJb7C0f%2BKhtHeQ6W%2FToLf1xvKTEECnyhfavd2n1sKO948EpJDw6Q5nyPS7X68JE%2B4e5eZveoHtK1mXHEzKyFJ5dPlBf2B79AlIzH5%2FZi8zoHIJcGi8MQenqp0YD%2Fy9o4Py13Hee%2BhE%2BkNqKFfMjyRpEE9jthbH28BUXkq4ltzfga7FlD%2BR8nE3olKGmviu%2FoqHwH3Sbsn51yj0AaX%2B9BzRNSNal3S%2F%2Fvz5ZxdbzK%2FKLzmWCW%2F%2BQeeaRhbESXK0kQBKGLwAAQucLBTfOoEc6S8H%2BfpumSFWyVBN5OssPkXYbOvwAhMLWP3b8GOqUBQ1ffX7QXWsXOHcf8wanRYKgUZGtkyqx9m7eEiq2XQMzKK5sefQ%2BBkzJBDBwsDVD5kJN88EMfm%2F2dvLilp%2BNjXe%2FfyDwX%2FfDFpmU8Gw6RS6wmN7EdD7evlljmlsi3Qfi6OL6e3ZDogMCmC8BFukOZJCn%2Bd%2BuRTtfFjwNx2S3UGRDXdEvoOg5qA%2Ft1N6hW6NulLwmPMkF5J4n%2Ba7HNVY%2FUyfmd3rYo&X-Amz-Signature=b84e195be6ac213ad59c2f54c2c9f810a84e518493ed60246b9dcb1107d38e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNMK5BB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDepzpECHe4bDXUo3wrW4soIeEVaX3tNSRXrQRFcZyWAwIgO8k19aWXUCZ9cGdsjI8aHiiXdivTNxpiAyV9jGro7wQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1syvW0JaMo8VNKySrcA1%2B2WPNhimC15ytCpYdDmT%2FIKzSnfLkfAbwKQsYjHsHZUpQMtvucr8MvlGFOMZy9woIRMEYXXpd0S%2FgKYx9x7QyOdE2IBp2zihOfB7wnUANTEVPEnOvJ0POCdiBKHiapvN3zOH0cqgMawNfSuj68aNrzofyXKG31ZgiLo0XqPpcI2Amf5XjHIOA0dJpDCuxtDV8vvYE5lur0ST1rRsT0sj%2BJGYCTA6IadjtFH1qwoveQKbeCnPgyX1SdR9OuxoADp8Fj%2Fm0NzITVsDuSfBag9g0KpaTmEUfFDH7u7D%2BhYrK9segRMSNR6a%2FSvw7vgoEoha4jiDdNyV%2BuzJb7C0f%2BKhtHeQ6W%2FToLf1xvKTEECnyhfavd2n1sKO948EpJDw6Q5nyPS7X68JE%2B4e5eZveoHtK1mXHEzKyFJ5dPlBf2B79AlIzH5%2FZi8zoHIJcGi8MQenqp0YD%2Fy9o4Py13Hee%2BhE%2BkNqKFfMjyRpEE9jthbH28BUXkq4ltzfga7FlD%2BR8nE3olKGmviu%2FoqHwH3Sbsn51yj0AaX%2B9BzRNSNal3S%2F%2Fvz5ZxdbzK%2FKLzmWCW%2F%2BQeeaRhbESXK0kQBKGLwAAQucLBTfOoEc6S8H%2BfpumSFWyVBN5OssPkXYbOvwAhMLWP3b8GOqUBQ1ffX7QXWsXOHcf8wanRYKgUZGtkyqx9m7eEiq2XQMzKK5sefQ%2BBkzJBDBwsDVD5kJN88EMfm%2F2dvLilp%2BNjXe%2FfyDwX%2FfDFpmU8Gw6RS6wmN7EdD7evlljmlsi3Qfi6OL6e3ZDogMCmC8BFukOZJCn%2Bd%2BuRTtfFjwNx2S3UGRDXdEvoOg5qA%2Ft1N6hW6NulLwmPMkF5J4n%2Ba7HNVY%2FUyfmd3rYo&X-Amz-Signature=8cb6af54713bbe761a2bd10751a8b60e97263814f0bf569a6785f95016fa11ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
