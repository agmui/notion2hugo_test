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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6F54EQ7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhPaFt46ZcndSRk1O0spInZnsXvF2PsSOYOVBUzFZhwgIhALbA%2FN3BRrtIqhh8wDwJ1SfBRf%2FcO7jm6%2FyTxBwomJ4KKv8DCCoQABoMNjM3NDIzMTgzODA1IgzNcEjEky%2Fknb3NC8Qq3AM%2BNGiheOO%2FnXtIV4Jog8XVPuZJ%2BOskxveLrcYzZXI%2B2dwLieKttIkj6uE2cAKddFkbzsSqtWVf8GoCI7Gpg6qwOFbnwItHq89tC%2B1NkXtOCCodqIjYk%2FJywAPKXb4W8r%2BTyiy0a%2BhoOhhbGp7vUCXnuf5rJvYHGuvHpi333BlSIK4lS37ngByucCco%2BSG6KCF%2Fy4UAvAh1eMGCMZaalp%2B%2Bhf9vv79ddMVQg9d5TPCbNBis7tZCUJD8uQrf9IxtWAj7gj9%2Fv%2BSiyjqc6Ns9vInxt3acu5weQx%2FEcdAT4VC79OubFlCX6BDHvM9AB2bnHDJkHPTNLGhjqhusX3MtBagq3%2BKUThnM8Vnv69jImEwytPZaTRb%2B85j6jUJFnKrI%2BtENLrmkBoX38KOWpoa%2BUMPFQHaRyRZQjWHEhlUTyOmM6xKilFp8Qw%2FSDxy1bd9HD8Q71VgF7b6qybS3og4LrH85404iU12w3Zp%2F8Hz00q6fNoPz7QKOKNoG7%2BpQTK6KTFyOwfMS3EYu3GTqSfvYY%2FdLl4ym4j0MRkHDZV7sgN0t0DuYXJCcOzx%2FV68bc7IxLpEUoRwMXOjyLzCyLzwORbrh394iTalMX0H5Dcf%2FRa7%2FSjPyLWrS5AWVsF2mkDCDidPDBjqkAaU%2FlpG%2BDY3n3CmGEGv0gvvJyDGkZegCUye91OIJmFZwZiK91zLvU%2Bl0ZYYTnVpbPkylPd4wei4J6VRfNfMok6c2gWd9G44lQbCSobGosJlzJ6i3OVmZ4R87ukRdg6Cojf3wMtWA46kjj%2BJXCHY%2BC0L%2BCQNAQRTXza7J774VDUOA10vvrrTQ0TsthrsKd%2FeyDjEjfTaUdQ6tf5mAIjCExUZUsk63&X-Amz-Signature=26f9cff29d84d04b5c6a2ba3b80f1e89ba72e3e19ae666273882b311d8f0b105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6F54EQ7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhPaFt46ZcndSRk1O0spInZnsXvF2PsSOYOVBUzFZhwgIhALbA%2FN3BRrtIqhh8wDwJ1SfBRf%2FcO7jm6%2FyTxBwomJ4KKv8DCCoQABoMNjM3NDIzMTgzODA1IgzNcEjEky%2Fknb3NC8Qq3AM%2BNGiheOO%2FnXtIV4Jog8XVPuZJ%2BOskxveLrcYzZXI%2B2dwLieKttIkj6uE2cAKddFkbzsSqtWVf8GoCI7Gpg6qwOFbnwItHq89tC%2B1NkXtOCCodqIjYk%2FJywAPKXb4W8r%2BTyiy0a%2BhoOhhbGp7vUCXnuf5rJvYHGuvHpi333BlSIK4lS37ngByucCco%2BSG6KCF%2Fy4UAvAh1eMGCMZaalp%2B%2Bhf9vv79ddMVQg9d5TPCbNBis7tZCUJD8uQrf9IxtWAj7gj9%2Fv%2BSiyjqc6Ns9vInxt3acu5weQx%2FEcdAT4VC79OubFlCX6BDHvM9AB2bnHDJkHPTNLGhjqhusX3MtBagq3%2BKUThnM8Vnv69jImEwytPZaTRb%2B85j6jUJFnKrI%2BtENLrmkBoX38KOWpoa%2BUMPFQHaRyRZQjWHEhlUTyOmM6xKilFp8Qw%2FSDxy1bd9HD8Q71VgF7b6qybS3og4LrH85404iU12w3Zp%2F8Hz00q6fNoPz7QKOKNoG7%2BpQTK6KTFyOwfMS3EYu3GTqSfvYY%2FdLl4ym4j0MRkHDZV7sgN0t0DuYXJCcOzx%2FV68bc7IxLpEUoRwMXOjyLzCyLzwORbrh394iTalMX0H5Dcf%2FRa7%2FSjPyLWrS5AWVsF2mkDCDidPDBjqkAaU%2FlpG%2BDY3n3CmGEGv0gvvJyDGkZegCUye91OIJmFZwZiK91zLvU%2Bl0ZYYTnVpbPkylPd4wei4J6VRfNfMok6c2gWd9G44lQbCSobGosJlzJ6i3OVmZ4R87ukRdg6Cojf3wMtWA46kjj%2BJXCHY%2BC0L%2BCQNAQRTXza7J774VDUOA10vvrrTQ0TsthrsKd%2FeyDjEjfTaUdQ6tf5mAIjCExUZUsk63&X-Amz-Signature=79bb30ed7bbf2812b848a36dd6352a8bab1516bc031ef3d6686c6f1ad5c2046d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6F54EQ7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhPaFt46ZcndSRk1O0spInZnsXvF2PsSOYOVBUzFZhwgIhALbA%2FN3BRrtIqhh8wDwJ1SfBRf%2FcO7jm6%2FyTxBwomJ4KKv8DCCoQABoMNjM3NDIzMTgzODA1IgzNcEjEky%2Fknb3NC8Qq3AM%2BNGiheOO%2FnXtIV4Jog8XVPuZJ%2BOskxveLrcYzZXI%2B2dwLieKttIkj6uE2cAKddFkbzsSqtWVf8GoCI7Gpg6qwOFbnwItHq89tC%2B1NkXtOCCodqIjYk%2FJywAPKXb4W8r%2BTyiy0a%2BhoOhhbGp7vUCXnuf5rJvYHGuvHpi333BlSIK4lS37ngByucCco%2BSG6KCF%2Fy4UAvAh1eMGCMZaalp%2B%2Bhf9vv79ddMVQg9d5TPCbNBis7tZCUJD8uQrf9IxtWAj7gj9%2Fv%2BSiyjqc6Ns9vInxt3acu5weQx%2FEcdAT4VC79OubFlCX6BDHvM9AB2bnHDJkHPTNLGhjqhusX3MtBagq3%2BKUThnM8Vnv69jImEwytPZaTRb%2B85j6jUJFnKrI%2BtENLrmkBoX38KOWpoa%2BUMPFQHaRyRZQjWHEhlUTyOmM6xKilFp8Qw%2FSDxy1bd9HD8Q71VgF7b6qybS3og4LrH85404iU12w3Zp%2F8Hz00q6fNoPz7QKOKNoG7%2BpQTK6KTFyOwfMS3EYu3GTqSfvYY%2FdLl4ym4j0MRkHDZV7sgN0t0DuYXJCcOzx%2FV68bc7IxLpEUoRwMXOjyLzCyLzwORbrh394iTalMX0H5Dcf%2FRa7%2FSjPyLWrS5AWVsF2mkDCDidPDBjqkAaU%2FlpG%2BDY3n3CmGEGv0gvvJyDGkZegCUye91OIJmFZwZiK91zLvU%2Bl0ZYYTnVpbPkylPd4wei4J6VRfNfMok6c2gWd9G44lQbCSobGosJlzJ6i3OVmZ4R87ukRdg6Cojf3wMtWA46kjj%2BJXCHY%2BC0L%2BCQNAQRTXza7J774VDUOA10vvrrTQ0TsthrsKd%2FeyDjEjfTaUdQ6tf5mAIjCExUZUsk63&X-Amz-Signature=010bd46b5dafdbfe536a87f244782671d2f4102c8e7912b95256fc7e1058d023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6F54EQ7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhPaFt46ZcndSRk1O0spInZnsXvF2PsSOYOVBUzFZhwgIhALbA%2FN3BRrtIqhh8wDwJ1SfBRf%2FcO7jm6%2FyTxBwomJ4KKv8DCCoQABoMNjM3NDIzMTgzODA1IgzNcEjEky%2Fknb3NC8Qq3AM%2BNGiheOO%2FnXtIV4Jog8XVPuZJ%2BOskxveLrcYzZXI%2B2dwLieKttIkj6uE2cAKddFkbzsSqtWVf8GoCI7Gpg6qwOFbnwItHq89tC%2B1NkXtOCCodqIjYk%2FJywAPKXb4W8r%2BTyiy0a%2BhoOhhbGp7vUCXnuf5rJvYHGuvHpi333BlSIK4lS37ngByucCco%2BSG6KCF%2Fy4UAvAh1eMGCMZaalp%2B%2Bhf9vv79ddMVQg9d5TPCbNBis7tZCUJD8uQrf9IxtWAj7gj9%2Fv%2BSiyjqc6Ns9vInxt3acu5weQx%2FEcdAT4VC79OubFlCX6BDHvM9AB2bnHDJkHPTNLGhjqhusX3MtBagq3%2BKUThnM8Vnv69jImEwytPZaTRb%2B85j6jUJFnKrI%2BtENLrmkBoX38KOWpoa%2BUMPFQHaRyRZQjWHEhlUTyOmM6xKilFp8Qw%2FSDxy1bd9HD8Q71VgF7b6qybS3og4LrH85404iU12w3Zp%2F8Hz00q6fNoPz7QKOKNoG7%2BpQTK6KTFyOwfMS3EYu3GTqSfvYY%2FdLl4ym4j0MRkHDZV7sgN0t0DuYXJCcOzx%2FV68bc7IxLpEUoRwMXOjyLzCyLzwORbrh394iTalMX0H5Dcf%2FRa7%2FSjPyLWrS5AWVsF2mkDCDidPDBjqkAaU%2FlpG%2BDY3n3CmGEGv0gvvJyDGkZegCUye91OIJmFZwZiK91zLvU%2Bl0ZYYTnVpbPkylPd4wei4J6VRfNfMok6c2gWd9G44lQbCSobGosJlzJ6i3OVmZ4R87ukRdg6Cojf3wMtWA46kjj%2BJXCHY%2BC0L%2BCQNAQRTXza7J774VDUOA10vvrrTQ0TsthrsKd%2FeyDjEjfTaUdQ6tf5mAIjCExUZUsk63&X-Amz-Signature=f07dea013fab73a31793812cd0186ba1adf2f56e3e1e2b5cb2fb83e403337623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6F54EQ7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhPaFt46ZcndSRk1O0spInZnsXvF2PsSOYOVBUzFZhwgIhALbA%2FN3BRrtIqhh8wDwJ1SfBRf%2FcO7jm6%2FyTxBwomJ4KKv8DCCoQABoMNjM3NDIzMTgzODA1IgzNcEjEky%2Fknb3NC8Qq3AM%2BNGiheOO%2FnXtIV4Jog8XVPuZJ%2BOskxveLrcYzZXI%2B2dwLieKttIkj6uE2cAKddFkbzsSqtWVf8GoCI7Gpg6qwOFbnwItHq89tC%2B1NkXtOCCodqIjYk%2FJywAPKXb4W8r%2BTyiy0a%2BhoOhhbGp7vUCXnuf5rJvYHGuvHpi333BlSIK4lS37ngByucCco%2BSG6KCF%2Fy4UAvAh1eMGCMZaalp%2B%2Bhf9vv79ddMVQg9d5TPCbNBis7tZCUJD8uQrf9IxtWAj7gj9%2Fv%2BSiyjqc6Ns9vInxt3acu5weQx%2FEcdAT4VC79OubFlCX6BDHvM9AB2bnHDJkHPTNLGhjqhusX3MtBagq3%2BKUThnM8Vnv69jImEwytPZaTRb%2B85j6jUJFnKrI%2BtENLrmkBoX38KOWpoa%2BUMPFQHaRyRZQjWHEhlUTyOmM6xKilFp8Qw%2FSDxy1bd9HD8Q71VgF7b6qybS3og4LrH85404iU12w3Zp%2F8Hz00q6fNoPz7QKOKNoG7%2BpQTK6KTFyOwfMS3EYu3GTqSfvYY%2FdLl4ym4j0MRkHDZV7sgN0t0DuYXJCcOzx%2FV68bc7IxLpEUoRwMXOjyLzCyLzwORbrh394iTalMX0H5Dcf%2FRa7%2FSjPyLWrS5AWVsF2mkDCDidPDBjqkAaU%2FlpG%2BDY3n3CmGEGv0gvvJyDGkZegCUye91OIJmFZwZiK91zLvU%2Bl0ZYYTnVpbPkylPd4wei4J6VRfNfMok6c2gWd9G44lQbCSobGosJlzJ6i3OVmZ4R87ukRdg6Cojf3wMtWA46kjj%2BJXCHY%2BC0L%2BCQNAQRTXza7J774VDUOA10vvrrTQ0TsthrsKd%2FeyDjEjfTaUdQ6tf5mAIjCExUZUsk63&X-Amz-Signature=733fc3feb901875700f8e869c162dae19f916c7492e31a291669427a96e97d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
