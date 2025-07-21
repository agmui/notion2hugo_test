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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQSYGV2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO%2FSEH%2FL%2BzhOTuB%2FdgZ8JdmaN6KieRQ9vTyR%2BT4wQ1hAiACR5WXQjyZM9he0vH6%2FadEVpsDX72G6wBrb%2FfjG6odUyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIstAsDF4BTxY9zBuKtwDysVMC7ZJRuiDf7g%2FB%2FWUmgUjyuHtVu7um23B4zpkiemPElI5hNhXUlB4xKox%2F2QSZ83Sorc2D4iy5o%2BGTm0hd9uZGXXWPJvdz2mgtfiqiqD8e1Ktko6yZ%2B9RQ5YcZGf%2BGyCleRV3%2F3TSpsRWCv7KTZXom0yI0lXz613AzXNV9ESv3dq6YeHxHOoMFAa9EFwPGN91QR7IxoDZTXhHH7n7fxbjxpjJ7S3LBK1MnJXXankgi2hu8PVe4RB5hBevdj%2F98fyyppcnp6QM4KNz57jrtKWIabERDcZr9LV9hpn3m21VF9qDmzP8S3PjLcD2RRNEkRpUpAac3yaHaznUiMS4AUU2Qk6Y9rYCdZhC%2BxWl9tXwSWvc1o8XdoaovaUek%2FuHeflmbUDkXOvH1T%2FLZ4MSuLjdX8rJgNkuFpz6pK6EDr1%2FnP8NkaEhO5vEJTfQy9zjIITzfMepwNQZ28Wa2DpOhrg4VbpwAmVsiFKwyLjOHOVvam8x6%2Fu%2B4KHRRbH7hspiUq%2FjfMxbEoH6r2W%2Bn57LTBuLNR9lygWp%2FHVObjHyEmNK45PGk5sK4TYe00BKularjmGmGCwHAwL1vyB8NUTC7T2PqLpCpcCvW9SRgskQEj20cvJBGvgf4xUJebsw%2Btb6wwY6pgH%2BAl2ngnFdwUtzqWbv4c76%2FeS30R%2BF3SlIkVSQjUCp6dK4Wp64CZ0eTJ9ZInh8QBksf4REk9zAg3fetaEfdsZhYHiywXPxuBeIK25wNyR8QN4oeCvM%2Bw2YV9%2BmEhXoh7HSzSI7KSYl5416vaqYZTT1hVSihYA%2Figl%2BlrMi39CzFVnd3Ig6KPrI%2B18FN6xY6XWr%2BEb78jTJoXIY%2FF%2F2%2Bw4dqKYcWCqb&X-Amz-Signature=bfcc9dddd0e44dd072d0c5e7e40e551199c54510bd7d740b70d08fe0e32f66dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQSYGV2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO%2FSEH%2FL%2BzhOTuB%2FdgZ8JdmaN6KieRQ9vTyR%2BT4wQ1hAiACR5WXQjyZM9he0vH6%2FadEVpsDX72G6wBrb%2FfjG6odUyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIstAsDF4BTxY9zBuKtwDysVMC7ZJRuiDf7g%2FB%2FWUmgUjyuHtVu7um23B4zpkiemPElI5hNhXUlB4xKox%2F2QSZ83Sorc2D4iy5o%2BGTm0hd9uZGXXWPJvdz2mgtfiqiqD8e1Ktko6yZ%2B9RQ5YcZGf%2BGyCleRV3%2F3TSpsRWCv7KTZXom0yI0lXz613AzXNV9ESv3dq6YeHxHOoMFAa9EFwPGN91QR7IxoDZTXhHH7n7fxbjxpjJ7S3LBK1MnJXXankgi2hu8PVe4RB5hBevdj%2F98fyyppcnp6QM4KNz57jrtKWIabERDcZr9LV9hpn3m21VF9qDmzP8S3PjLcD2RRNEkRpUpAac3yaHaznUiMS4AUU2Qk6Y9rYCdZhC%2BxWl9tXwSWvc1o8XdoaovaUek%2FuHeflmbUDkXOvH1T%2FLZ4MSuLjdX8rJgNkuFpz6pK6EDr1%2FnP8NkaEhO5vEJTfQy9zjIITzfMepwNQZ28Wa2DpOhrg4VbpwAmVsiFKwyLjOHOVvam8x6%2Fu%2B4KHRRbH7hspiUq%2FjfMxbEoH6r2W%2Bn57LTBuLNR9lygWp%2FHVObjHyEmNK45PGk5sK4TYe00BKularjmGmGCwHAwL1vyB8NUTC7T2PqLpCpcCvW9SRgskQEj20cvJBGvgf4xUJebsw%2Btb6wwY6pgH%2BAl2ngnFdwUtzqWbv4c76%2FeS30R%2BF3SlIkVSQjUCp6dK4Wp64CZ0eTJ9ZInh8QBksf4REk9zAg3fetaEfdsZhYHiywXPxuBeIK25wNyR8QN4oeCvM%2Bw2YV9%2BmEhXoh7HSzSI7KSYl5416vaqYZTT1hVSihYA%2Figl%2BlrMi39CzFVnd3Ig6KPrI%2B18FN6xY6XWr%2BEb78jTJoXIY%2FF%2F2%2Bw4dqKYcWCqb&X-Amz-Signature=47f84d33cad0769267970872c1e20dde95fff17ab43246d850ebfebbb1d48178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQSYGV2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO%2FSEH%2FL%2BzhOTuB%2FdgZ8JdmaN6KieRQ9vTyR%2BT4wQ1hAiACR5WXQjyZM9he0vH6%2FadEVpsDX72G6wBrb%2FfjG6odUyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIstAsDF4BTxY9zBuKtwDysVMC7ZJRuiDf7g%2FB%2FWUmgUjyuHtVu7um23B4zpkiemPElI5hNhXUlB4xKox%2F2QSZ83Sorc2D4iy5o%2BGTm0hd9uZGXXWPJvdz2mgtfiqiqD8e1Ktko6yZ%2B9RQ5YcZGf%2BGyCleRV3%2F3TSpsRWCv7KTZXom0yI0lXz613AzXNV9ESv3dq6YeHxHOoMFAa9EFwPGN91QR7IxoDZTXhHH7n7fxbjxpjJ7S3LBK1MnJXXankgi2hu8PVe4RB5hBevdj%2F98fyyppcnp6QM4KNz57jrtKWIabERDcZr9LV9hpn3m21VF9qDmzP8S3PjLcD2RRNEkRpUpAac3yaHaznUiMS4AUU2Qk6Y9rYCdZhC%2BxWl9tXwSWvc1o8XdoaovaUek%2FuHeflmbUDkXOvH1T%2FLZ4MSuLjdX8rJgNkuFpz6pK6EDr1%2FnP8NkaEhO5vEJTfQy9zjIITzfMepwNQZ28Wa2DpOhrg4VbpwAmVsiFKwyLjOHOVvam8x6%2Fu%2B4KHRRbH7hspiUq%2FjfMxbEoH6r2W%2Bn57LTBuLNR9lygWp%2FHVObjHyEmNK45PGk5sK4TYe00BKularjmGmGCwHAwL1vyB8NUTC7T2PqLpCpcCvW9SRgskQEj20cvJBGvgf4xUJebsw%2Btb6wwY6pgH%2BAl2ngnFdwUtzqWbv4c76%2FeS30R%2BF3SlIkVSQjUCp6dK4Wp64CZ0eTJ9ZInh8QBksf4REk9zAg3fetaEfdsZhYHiywXPxuBeIK25wNyR8QN4oeCvM%2Bw2YV9%2BmEhXoh7HSzSI7KSYl5416vaqYZTT1hVSihYA%2Figl%2BlrMi39CzFVnd3Ig6KPrI%2B18FN6xY6XWr%2BEb78jTJoXIY%2FF%2F2%2Bw4dqKYcWCqb&X-Amz-Signature=cbb5d59f8bc9d5a2f1b89cb56e5f8807635c786f413805935ace08acd4365fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQSYGV2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO%2FSEH%2FL%2BzhOTuB%2FdgZ8JdmaN6KieRQ9vTyR%2BT4wQ1hAiACR5WXQjyZM9he0vH6%2FadEVpsDX72G6wBrb%2FfjG6odUyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIstAsDF4BTxY9zBuKtwDysVMC7ZJRuiDf7g%2FB%2FWUmgUjyuHtVu7um23B4zpkiemPElI5hNhXUlB4xKox%2F2QSZ83Sorc2D4iy5o%2BGTm0hd9uZGXXWPJvdz2mgtfiqiqD8e1Ktko6yZ%2B9RQ5YcZGf%2BGyCleRV3%2F3TSpsRWCv7KTZXom0yI0lXz613AzXNV9ESv3dq6YeHxHOoMFAa9EFwPGN91QR7IxoDZTXhHH7n7fxbjxpjJ7S3LBK1MnJXXankgi2hu8PVe4RB5hBevdj%2F98fyyppcnp6QM4KNz57jrtKWIabERDcZr9LV9hpn3m21VF9qDmzP8S3PjLcD2RRNEkRpUpAac3yaHaznUiMS4AUU2Qk6Y9rYCdZhC%2BxWl9tXwSWvc1o8XdoaovaUek%2FuHeflmbUDkXOvH1T%2FLZ4MSuLjdX8rJgNkuFpz6pK6EDr1%2FnP8NkaEhO5vEJTfQy9zjIITzfMepwNQZ28Wa2DpOhrg4VbpwAmVsiFKwyLjOHOVvam8x6%2Fu%2B4KHRRbH7hspiUq%2FjfMxbEoH6r2W%2Bn57LTBuLNR9lygWp%2FHVObjHyEmNK45PGk5sK4TYe00BKularjmGmGCwHAwL1vyB8NUTC7T2PqLpCpcCvW9SRgskQEj20cvJBGvgf4xUJebsw%2Btb6wwY6pgH%2BAl2ngnFdwUtzqWbv4c76%2FeS30R%2BF3SlIkVSQjUCp6dK4Wp64CZ0eTJ9ZInh8QBksf4REk9zAg3fetaEfdsZhYHiywXPxuBeIK25wNyR8QN4oeCvM%2Bw2YV9%2BmEhXoh7HSzSI7KSYl5416vaqYZTT1hVSihYA%2Figl%2BlrMi39CzFVnd3Ig6KPrI%2B18FN6xY6XWr%2BEb78jTJoXIY%2FF%2F2%2Bw4dqKYcWCqb&X-Amz-Signature=66c63eb1a03a00ffcd749f0c8ff3ed8140e6224e7e82208a1240dc39f43c3cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQSYGV2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO%2FSEH%2FL%2BzhOTuB%2FdgZ8JdmaN6KieRQ9vTyR%2BT4wQ1hAiACR5WXQjyZM9he0vH6%2FadEVpsDX72G6wBrb%2FfjG6odUyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIstAsDF4BTxY9zBuKtwDysVMC7ZJRuiDf7g%2FB%2FWUmgUjyuHtVu7um23B4zpkiemPElI5hNhXUlB4xKox%2F2QSZ83Sorc2D4iy5o%2BGTm0hd9uZGXXWPJvdz2mgtfiqiqD8e1Ktko6yZ%2B9RQ5YcZGf%2BGyCleRV3%2F3TSpsRWCv7KTZXom0yI0lXz613AzXNV9ESv3dq6YeHxHOoMFAa9EFwPGN91QR7IxoDZTXhHH7n7fxbjxpjJ7S3LBK1MnJXXankgi2hu8PVe4RB5hBevdj%2F98fyyppcnp6QM4KNz57jrtKWIabERDcZr9LV9hpn3m21VF9qDmzP8S3PjLcD2RRNEkRpUpAac3yaHaznUiMS4AUU2Qk6Y9rYCdZhC%2BxWl9tXwSWvc1o8XdoaovaUek%2FuHeflmbUDkXOvH1T%2FLZ4MSuLjdX8rJgNkuFpz6pK6EDr1%2FnP8NkaEhO5vEJTfQy9zjIITzfMepwNQZ28Wa2DpOhrg4VbpwAmVsiFKwyLjOHOVvam8x6%2Fu%2B4KHRRbH7hspiUq%2FjfMxbEoH6r2W%2Bn57LTBuLNR9lygWp%2FHVObjHyEmNK45PGk5sK4TYe00BKularjmGmGCwHAwL1vyB8NUTC7T2PqLpCpcCvW9SRgskQEj20cvJBGvgf4xUJebsw%2Btb6wwY6pgH%2BAl2ngnFdwUtzqWbv4c76%2FeS30R%2BF3SlIkVSQjUCp6dK4Wp64CZ0eTJ9ZInh8QBksf4REk9zAg3fetaEfdsZhYHiywXPxuBeIK25wNyR8QN4oeCvM%2Bw2YV9%2BmEhXoh7HSzSI7KSYl5416vaqYZTT1hVSihYA%2Figl%2BlrMi39CzFVnd3Ig6KPrI%2B18FN6xY6XWr%2BEb78jTJoXIY%2FF%2F2%2Bw4dqKYcWCqb&X-Amz-Signature=da65c42d1926d06e80b8410e7d60f843306202bb2691111e15bfe261e2ffdd32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
