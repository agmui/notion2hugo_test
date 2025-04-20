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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QETKCJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCazBbQvlQNyx2rNcrfPLXKEI9G97dg2e7IaEKIHXpLrgIhANfN%2BjoGtJYoXJFMLm7qW%2F%2FCgy4fmb5STvNGSR9SlZxaKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1alnrG3%2BoH8uAd5sq3AOqotylP8jClEas%2Bk3AyVB67RQyRhXzhXICozVkbolksLryvux6o1Bv4AQeBv5cxlbAMzeFRPkQc86Rm7StuCDYRAKPW2DR2s2Ae49ycrNiD8hamH8Gj3Lh4TxFmpKERNqnaAlcMwYZ79FGQF%2FPiHO3x%2F4F%2FVL7yqLv5MDtECWPRPyfkd1MTfQm6WSd6LQ5TJTsZvFEFP30D47tBgnzc8BUbdXkuu%2F8GBYYw85IkMdBcyyyqkSNd2Yd3Liv0cr54ZkugpEb6mwjQl7%2F6FoKWHnMC%2B8l3y1rC6YS8o%2BFjCbj3GYghRJ8iUxEvcoBttxmsDb2HnPS4ApWHr5CsWnqaLJUSnhViqWLz5NpHSj7m9Jd%2FUw5ZT7xJi1ipNf%2F6JaWaIOt5XNT362PUeloYjhvkiK6FB1OAB7tdPZpTWNaKsTzZjtQwt%2Bw2dKlFwMVLd0xG1P5YXnUGyQBZ5%2BR2khjNRDTfQGNEo%2BGkz3luhv38eV0OIMZGjrZBaEVtfpGb9nqQDOgdLdQZ%2FN%2BZM4S4fmAF7Fzt6o%2BFWJWqA8qePKpfkMFcLuVvj4IUnEIGbMCh4VBIiZU81CdFThh0wsVYKYe1nEdgv9kES0SQ97SohPy%2B7uQENfuPlrNDB14CqO3HjCErZHABjqkAbIeZ9DpS1SSlT1HoYmJuayK1k23ZnIAyugqIieCRUwVb2mFKFrgQ1OGctCwJqAPEX1Mree35bBP1mlsK7WEVu8VE9OxKpeEbsh1XZtTGxGYCIEM98HS6Vpsr2xg751G%2Fxae9S4GaN3SWQTx8HghYYUOGf1IzoKh31rigqwWT7mEsWElWtfyZMi8VdEjsLRbgXmZyF86J3x0jcOR9yuu5GvMsRuX&X-Amz-Signature=3f59819e677b7d9fa81d4a9705afef76cce81cfe69351b9eba60bec2104c93c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QETKCJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCazBbQvlQNyx2rNcrfPLXKEI9G97dg2e7IaEKIHXpLrgIhANfN%2BjoGtJYoXJFMLm7qW%2F%2FCgy4fmb5STvNGSR9SlZxaKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1alnrG3%2BoH8uAd5sq3AOqotylP8jClEas%2Bk3AyVB67RQyRhXzhXICozVkbolksLryvux6o1Bv4AQeBv5cxlbAMzeFRPkQc86Rm7StuCDYRAKPW2DR2s2Ae49ycrNiD8hamH8Gj3Lh4TxFmpKERNqnaAlcMwYZ79FGQF%2FPiHO3x%2F4F%2FVL7yqLv5MDtECWPRPyfkd1MTfQm6WSd6LQ5TJTsZvFEFP30D47tBgnzc8BUbdXkuu%2F8GBYYw85IkMdBcyyyqkSNd2Yd3Liv0cr54ZkugpEb6mwjQl7%2F6FoKWHnMC%2B8l3y1rC6YS8o%2BFjCbj3GYghRJ8iUxEvcoBttxmsDb2HnPS4ApWHr5CsWnqaLJUSnhViqWLz5NpHSj7m9Jd%2FUw5ZT7xJi1ipNf%2F6JaWaIOt5XNT362PUeloYjhvkiK6FB1OAB7tdPZpTWNaKsTzZjtQwt%2Bw2dKlFwMVLd0xG1P5YXnUGyQBZ5%2BR2khjNRDTfQGNEo%2BGkz3luhv38eV0OIMZGjrZBaEVtfpGb9nqQDOgdLdQZ%2FN%2BZM4S4fmAF7Fzt6o%2BFWJWqA8qePKpfkMFcLuVvj4IUnEIGbMCh4VBIiZU81CdFThh0wsVYKYe1nEdgv9kES0SQ97SohPy%2B7uQENfuPlrNDB14CqO3HjCErZHABjqkAbIeZ9DpS1SSlT1HoYmJuayK1k23ZnIAyugqIieCRUwVb2mFKFrgQ1OGctCwJqAPEX1Mree35bBP1mlsK7WEVu8VE9OxKpeEbsh1XZtTGxGYCIEM98HS6Vpsr2xg751G%2Fxae9S4GaN3SWQTx8HghYYUOGf1IzoKh31rigqwWT7mEsWElWtfyZMi8VdEjsLRbgXmZyF86J3x0jcOR9yuu5GvMsRuX&X-Amz-Signature=d44cfa8edcbe5a8060f037ce4ff0b735a445d4af36b41fff144b27ee528007cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QETKCJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCazBbQvlQNyx2rNcrfPLXKEI9G97dg2e7IaEKIHXpLrgIhANfN%2BjoGtJYoXJFMLm7qW%2F%2FCgy4fmb5STvNGSR9SlZxaKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1alnrG3%2BoH8uAd5sq3AOqotylP8jClEas%2Bk3AyVB67RQyRhXzhXICozVkbolksLryvux6o1Bv4AQeBv5cxlbAMzeFRPkQc86Rm7StuCDYRAKPW2DR2s2Ae49ycrNiD8hamH8Gj3Lh4TxFmpKERNqnaAlcMwYZ79FGQF%2FPiHO3x%2F4F%2FVL7yqLv5MDtECWPRPyfkd1MTfQm6WSd6LQ5TJTsZvFEFP30D47tBgnzc8BUbdXkuu%2F8GBYYw85IkMdBcyyyqkSNd2Yd3Liv0cr54ZkugpEb6mwjQl7%2F6FoKWHnMC%2B8l3y1rC6YS8o%2BFjCbj3GYghRJ8iUxEvcoBttxmsDb2HnPS4ApWHr5CsWnqaLJUSnhViqWLz5NpHSj7m9Jd%2FUw5ZT7xJi1ipNf%2F6JaWaIOt5XNT362PUeloYjhvkiK6FB1OAB7tdPZpTWNaKsTzZjtQwt%2Bw2dKlFwMVLd0xG1P5YXnUGyQBZ5%2BR2khjNRDTfQGNEo%2BGkz3luhv38eV0OIMZGjrZBaEVtfpGb9nqQDOgdLdQZ%2FN%2BZM4S4fmAF7Fzt6o%2BFWJWqA8qePKpfkMFcLuVvj4IUnEIGbMCh4VBIiZU81CdFThh0wsVYKYe1nEdgv9kES0SQ97SohPy%2B7uQENfuPlrNDB14CqO3HjCErZHABjqkAbIeZ9DpS1SSlT1HoYmJuayK1k23ZnIAyugqIieCRUwVb2mFKFrgQ1OGctCwJqAPEX1Mree35bBP1mlsK7WEVu8VE9OxKpeEbsh1XZtTGxGYCIEM98HS6Vpsr2xg751G%2Fxae9S4GaN3SWQTx8HghYYUOGf1IzoKh31rigqwWT7mEsWElWtfyZMi8VdEjsLRbgXmZyF86J3x0jcOR9yuu5GvMsRuX&X-Amz-Signature=e43e854f399ab41d588c4a18967df4ea8db364da02def558e5fec652b7b3bcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QETKCJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCazBbQvlQNyx2rNcrfPLXKEI9G97dg2e7IaEKIHXpLrgIhANfN%2BjoGtJYoXJFMLm7qW%2F%2FCgy4fmb5STvNGSR9SlZxaKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1alnrG3%2BoH8uAd5sq3AOqotylP8jClEas%2Bk3AyVB67RQyRhXzhXICozVkbolksLryvux6o1Bv4AQeBv5cxlbAMzeFRPkQc86Rm7StuCDYRAKPW2DR2s2Ae49ycrNiD8hamH8Gj3Lh4TxFmpKERNqnaAlcMwYZ79FGQF%2FPiHO3x%2F4F%2FVL7yqLv5MDtECWPRPyfkd1MTfQm6WSd6LQ5TJTsZvFEFP30D47tBgnzc8BUbdXkuu%2F8GBYYw85IkMdBcyyyqkSNd2Yd3Liv0cr54ZkugpEb6mwjQl7%2F6FoKWHnMC%2B8l3y1rC6YS8o%2BFjCbj3GYghRJ8iUxEvcoBttxmsDb2HnPS4ApWHr5CsWnqaLJUSnhViqWLz5NpHSj7m9Jd%2FUw5ZT7xJi1ipNf%2F6JaWaIOt5XNT362PUeloYjhvkiK6FB1OAB7tdPZpTWNaKsTzZjtQwt%2Bw2dKlFwMVLd0xG1P5YXnUGyQBZ5%2BR2khjNRDTfQGNEo%2BGkz3luhv38eV0OIMZGjrZBaEVtfpGb9nqQDOgdLdQZ%2FN%2BZM4S4fmAF7Fzt6o%2BFWJWqA8qePKpfkMFcLuVvj4IUnEIGbMCh4VBIiZU81CdFThh0wsVYKYe1nEdgv9kES0SQ97SohPy%2B7uQENfuPlrNDB14CqO3HjCErZHABjqkAbIeZ9DpS1SSlT1HoYmJuayK1k23ZnIAyugqIieCRUwVb2mFKFrgQ1OGctCwJqAPEX1Mree35bBP1mlsK7WEVu8VE9OxKpeEbsh1XZtTGxGYCIEM98HS6Vpsr2xg751G%2Fxae9S4GaN3SWQTx8HghYYUOGf1IzoKh31rigqwWT7mEsWElWtfyZMi8VdEjsLRbgXmZyF86J3x0jcOR9yuu5GvMsRuX&X-Amz-Signature=4f4d719f75d3bf7002d0d6a54d8590dd5e518709adf86749998230ac6e1497c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QETKCJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCazBbQvlQNyx2rNcrfPLXKEI9G97dg2e7IaEKIHXpLrgIhANfN%2BjoGtJYoXJFMLm7qW%2F%2FCgy4fmb5STvNGSR9SlZxaKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1alnrG3%2BoH8uAd5sq3AOqotylP8jClEas%2Bk3AyVB67RQyRhXzhXICozVkbolksLryvux6o1Bv4AQeBv5cxlbAMzeFRPkQc86Rm7StuCDYRAKPW2DR2s2Ae49ycrNiD8hamH8Gj3Lh4TxFmpKERNqnaAlcMwYZ79FGQF%2FPiHO3x%2F4F%2FVL7yqLv5MDtECWPRPyfkd1MTfQm6WSd6LQ5TJTsZvFEFP30D47tBgnzc8BUbdXkuu%2F8GBYYw85IkMdBcyyyqkSNd2Yd3Liv0cr54ZkugpEb6mwjQl7%2F6FoKWHnMC%2B8l3y1rC6YS8o%2BFjCbj3GYghRJ8iUxEvcoBttxmsDb2HnPS4ApWHr5CsWnqaLJUSnhViqWLz5NpHSj7m9Jd%2FUw5ZT7xJi1ipNf%2F6JaWaIOt5XNT362PUeloYjhvkiK6FB1OAB7tdPZpTWNaKsTzZjtQwt%2Bw2dKlFwMVLd0xG1P5YXnUGyQBZ5%2BR2khjNRDTfQGNEo%2BGkz3luhv38eV0OIMZGjrZBaEVtfpGb9nqQDOgdLdQZ%2FN%2BZM4S4fmAF7Fzt6o%2BFWJWqA8qePKpfkMFcLuVvj4IUnEIGbMCh4VBIiZU81CdFThh0wsVYKYe1nEdgv9kES0SQ97SohPy%2B7uQENfuPlrNDB14CqO3HjCErZHABjqkAbIeZ9DpS1SSlT1HoYmJuayK1k23ZnIAyugqIieCRUwVb2mFKFrgQ1OGctCwJqAPEX1Mree35bBP1mlsK7WEVu8VE9OxKpeEbsh1XZtTGxGYCIEM98HS6Vpsr2xg751G%2Fxae9S4GaN3SWQTx8HghYYUOGf1IzoKh31rigqwWT7mEsWElWtfyZMi8VdEjsLRbgXmZyF86J3x0jcOR9yuu5GvMsRuX&X-Amz-Signature=6dbcdd5228e1bb762057620fbf968945f906fa85e8d9705cc463e0e52acfe805&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
