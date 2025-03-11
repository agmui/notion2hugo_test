---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B63UIQO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFEl8uGhn%2B1PNKJ6NVFgH5bxx7g0EvBxxEFCWaCpSmIKAiEAjbSSnEBW7SjlYdedBdlCinqCF6HVR0CzfZvbsoSUeXQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0z76LYnhWoX7OFKyrcA09V02jvzXRuXnkprSAP0grzsS2xulgbhqHL%2BRkfu9YjYdNFivz%2FH8vgg7S5dFtg4ZN3x5yVq3QPfwT9QI0c3d4u8khpYYI0WuGP3QI7k1SowUukRSYSOHNfHMWlLiw2gDA5i%2FqIaqLlsCLoUy9jpIuSbNRCk7Wgex5IMMUQMJ4F%2BAeiv%2FTFKTV%2FOccKZ1U3F3SsNHYbTtYoeFenRlCWa0ga4kqJ%2FwudfNpCoGhmdVoDN7FkCGzjaOI9mL2Qi683H%2BtuZI5kPlNYGi1IOiiH0yzgpYRi%2FQ9yBqWJseUJovmGXVCxzrC%2BF8UKZIqSfFUesp6e3BBXdbuolLsxJlVqu5eFYoplQG8IJPr3EQgOaVJ%2FAFLpL5CxVj9LP9mJL3XiK1yAp0U4dMIBIxscZDGbt9Z4ilyLCYD3kZYG4Pbe2qhM0maXnNuEKRjrTga2oiZ1GOXjwKLgW4HdbkEmBAgO4ieNznDlEBIREY6OSd7LIbhXdzqLMbX89qLIc690csrlftVDELKh0V2lbuLoMU%2FMVNZdYeKTII%2FfzGwiGajjLJcSrR1zty1xMtgX1akQrWHcFEyF8Jt5N7vfepFJZa6LCiWtNUkIE5DSTlkO0gkBoLOembjQJVqAHhCAcRJVMN6xwr4GOqUBzH3VQcieTtnWn9X4lqTSH6Yzy%2F0ASuOJbyxPY%2BZjw%2Bwq2cYhy%2FcIfbpFqD%2FTiJqypflUvQBX4LobYXIG0rMZ4ZENs2KKTcwa2Qtl6pGDYd9V5m2%2BTpZr2%2Fkbt64nMHqknAK0SILKYgdEsIRH%2FqEtZDWpWY9uD1s%2BsyOe8P5qJSFUuij%2F7tq%2BQIDb4WuKeF3tFQZ9b91FYXbwRGdVD9g2S2DVkhcY&X-Amz-Signature=e44f78caa344c496c9106f3997055cd3e4d064ddfebc3f683fb7c030a36b7df6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B63UIQO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFEl8uGhn%2B1PNKJ6NVFgH5bxx7g0EvBxxEFCWaCpSmIKAiEAjbSSnEBW7SjlYdedBdlCinqCF6HVR0CzfZvbsoSUeXQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0z76LYnhWoX7OFKyrcA09V02jvzXRuXnkprSAP0grzsS2xulgbhqHL%2BRkfu9YjYdNFivz%2FH8vgg7S5dFtg4ZN3x5yVq3QPfwT9QI0c3d4u8khpYYI0WuGP3QI7k1SowUukRSYSOHNfHMWlLiw2gDA5i%2FqIaqLlsCLoUy9jpIuSbNRCk7Wgex5IMMUQMJ4F%2BAeiv%2FTFKTV%2FOccKZ1U3F3SsNHYbTtYoeFenRlCWa0ga4kqJ%2FwudfNpCoGhmdVoDN7FkCGzjaOI9mL2Qi683H%2BtuZI5kPlNYGi1IOiiH0yzgpYRi%2FQ9yBqWJseUJovmGXVCxzrC%2BF8UKZIqSfFUesp6e3BBXdbuolLsxJlVqu5eFYoplQG8IJPr3EQgOaVJ%2FAFLpL5CxVj9LP9mJL3XiK1yAp0U4dMIBIxscZDGbt9Z4ilyLCYD3kZYG4Pbe2qhM0maXnNuEKRjrTga2oiZ1GOXjwKLgW4HdbkEmBAgO4ieNznDlEBIREY6OSd7LIbhXdzqLMbX89qLIc690csrlftVDELKh0V2lbuLoMU%2FMVNZdYeKTII%2FfzGwiGajjLJcSrR1zty1xMtgX1akQrWHcFEyF8Jt5N7vfepFJZa6LCiWtNUkIE5DSTlkO0gkBoLOembjQJVqAHhCAcRJVMN6xwr4GOqUBzH3VQcieTtnWn9X4lqTSH6Yzy%2F0ASuOJbyxPY%2BZjw%2Bwq2cYhy%2FcIfbpFqD%2FTiJqypflUvQBX4LobYXIG0rMZ4ZENs2KKTcwa2Qtl6pGDYd9V5m2%2BTpZr2%2Fkbt64nMHqknAK0SILKYgdEsIRH%2FqEtZDWpWY9uD1s%2BsyOe8P5qJSFUuij%2F7tq%2BQIDb4WuKeF3tFQZ9b91FYXbwRGdVD9g2S2DVkhcY&X-Amz-Signature=8d44ac3ab1dc35f1aed2fbde7b38ae9036aca3d906d881e63134787e2f187feb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B63UIQO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFEl8uGhn%2B1PNKJ6NVFgH5bxx7g0EvBxxEFCWaCpSmIKAiEAjbSSnEBW7SjlYdedBdlCinqCF6HVR0CzfZvbsoSUeXQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0z76LYnhWoX7OFKyrcA09V02jvzXRuXnkprSAP0grzsS2xulgbhqHL%2BRkfu9YjYdNFivz%2FH8vgg7S5dFtg4ZN3x5yVq3QPfwT9QI0c3d4u8khpYYI0WuGP3QI7k1SowUukRSYSOHNfHMWlLiw2gDA5i%2FqIaqLlsCLoUy9jpIuSbNRCk7Wgex5IMMUQMJ4F%2BAeiv%2FTFKTV%2FOccKZ1U3F3SsNHYbTtYoeFenRlCWa0ga4kqJ%2FwudfNpCoGhmdVoDN7FkCGzjaOI9mL2Qi683H%2BtuZI5kPlNYGi1IOiiH0yzgpYRi%2FQ9yBqWJseUJovmGXVCxzrC%2BF8UKZIqSfFUesp6e3BBXdbuolLsxJlVqu5eFYoplQG8IJPr3EQgOaVJ%2FAFLpL5CxVj9LP9mJL3XiK1yAp0U4dMIBIxscZDGbt9Z4ilyLCYD3kZYG4Pbe2qhM0maXnNuEKRjrTga2oiZ1GOXjwKLgW4HdbkEmBAgO4ieNznDlEBIREY6OSd7LIbhXdzqLMbX89qLIc690csrlftVDELKh0V2lbuLoMU%2FMVNZdYeKTII%2FfzGwiGajjLJcSrR1zty1xMtgX1akQrWHcFEyF8Jt5N7vfepFJZa6LCiWtNUkIE5DSTlkO0gkBoLOembjQJVqAHhCAcRJVMN6xwr4GOqUBzH3VQcieTtnWn9X4lqTSH6Yzy%2F0ASuOJbyxPY%2BZjw%2Bwq2cYhy%2FcIfbpFqD%2FTiJqypflUvQBX4LobYXIG0rMZ4ZENs2KKTcwa2Qtl6pGDYd9V5m2%2BTpZr2%2Fkbt64nMHqknAK0SILKYgdEsIRH%2FqEtZDWpWY9uD1s%2BsyOe8P5qJSFUuij%2F7tq%2BQIDb4WuKeF3tFQZ9b91FYXbwRGdVD9g2S2DVkhcY&X-Amz-Signature=5cf044744f0e09925c537291a9628dbb3d38e1e48453c7e168d967398a500d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B63UIQO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFEl8uGhn%2B1PNKJ6NVFgH5bxx7g0EvBxxEFCWaCpSmIKAiEAjbSSnEBW7SjlYdedBdlCinqCF6HVR0CzfZvbsoSUeXQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0z76LYnhWoX7OFKyrcA09V02jvzXRuXnkprSAP0grzsS2xulgbhqHL%2BRkfu9YjYdNFivz%2FH8vgg7S5dFtg4ZN3x5yVq3QPfwT9QI0c3d4u8khpYYI0WuGP3QI7k1SowUukRSYSOHNfHMWlLiw2gDA5i%2FqIaqLlsCLoUy9jpIuSbNRCk7Wgex5IMMUQMJ4F%2BAeiv%2FTFKTV%2FOccKZ1U3F3SsNHYbTtYoeFenRlCWa0ga4kqJ%2FwudfNpCoGhmdVoDN7FkCGzjaOI9mL2Qi683H%2BtuZI5kPlNYGi1IOiiH0yzgpYRi%2FQ9yBqWJseUJovmGXVCxzrC%2BF8UKZIqSfFUesp6e3BBXdbuolLsxJlVqu5eFYoplQG8IJPr3EQgOaVJ%2FAFLpL5CxVj9LP9mJL3XiK1yAp0U4dMIBIxscZDGbt9Z4ilyLCYD3kZYG4Pbe2qhM0maXnNuEKRjrTga2oiZ1GOXjwKLgW4HdbkEmBAgO4ieNznDlEBIREY6OSd7LIbhXdzqLMbX89qLIc690csrlftVDELKh0V2lbuLoMU%2FMVNZdYeKTII%2FfzGwiGajjLJcSrR1zty1xMtgX1akQrWHcFEyF8Jt5N7vfepFJZa6LCiWtNUkIE5DSTlkO0gkBoLOembjQJVqAHhCAcRJVMN6xwr4GOqUBzH3VQcieTtnWn9X4lqTSH6Yzy%2F0ASuOJbyxPY%2BZjw%2Bwq2cYhy%2FcIfbpFqD%2FTiJqypflUvQBX4LobYXIG0rMZ4ZENs2KKTcwa2Qtl6pGDYd9V5m2%2BTpZr2%2Fkbt64nMHqknAK0SILKYgdEsIRH%2FqEtZDWpWY9uD1s%2BsyOe8P5qJSFUuij%2F7tq%2BQIDb4WuKeF3tFQZ9b91FYXbwRGdVD9g2S2DVkhcY&X-Amz-Signature=b5e5e1b0ae48e2e752ef86ea184ad9876ef5fbd25c810b04c36b30b882e1316f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B63UIQO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFEl8uGhn%2B1PNKJ6NVFgH5bxx7g0EvBxxEFCWaCpSmIKAiEAjbSSnEBW7SjlYdedBdlCinqCF6HVR0CzfZvbsoSUeXQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0z76LYnhWoX7OFKyrcA09V02jvzXRuXnkprSAP0grzsS2xulgbhqHL%2BRkfu9YjYdNFivz%2FH8vgg7S5dFtg4ZN3x5yVq3QPfwT9QI0c3d4u8khpYYI0WuGP3QI7k1SowUukRSYSOHNfHMWlLiw2gDA5i%2FqIaqLlsCLoUy9jpIuSbNRCk7Wgex5IMMUQMJ4F%2BAeiv%2FTFKTV%2FOccKZ1U3F3SsNHYbTtYoeFenRlCWa0ga4kqJ%2FwudfNpCoGhmdVoDN7FkCGzjaOI9mL2Qi683H%2BtuZI5kPlNYGi1IOiiH0yzgpYRi%2FQ9yBqWJseUJovmGXVCxzrC%2BF8UKZIqSfFUesp6e3BBXdbuolLsxJlVqu5eFYoplQG8IJPr3EQgOaVJ%2FAFLpL5CxVj9LP9mJL3XiK1yAp0U4dMIBIxscZDGbt9Z4ilyLCYD3kZYG4Pbe2qhM0maXnNuEKRjrTga2oiZ1GOXjwKLgW4HdbkEmBAgO4ieNznDlEBIREY6OSd7LIbhXdzqLMbX89qLIc690csrlftVDELKh0V2lbuLoMU%2FMVNZdYeKTII%2FfzGwiGajjLJcSrR1zty1xMtgX1akQrWHcFEyF8Jt5N7vfepFJZa6LCiWtNUkIE5DSTlkO0gkBoLOembjQJVqAHhCAcRJVMN6xwr4GOqUBzH3VQcieTtnWn9X4lqTSH6Yzy%2F0ASuOJbyxPY%2BZjw%2Bwq2cYhy%2FcIfbpFqD%2FTiJqypflUvQBX4LobYXIG0rMZ4ZENs2KKTcwa2Qtl6pGDYd9V5m2%2BTpZr2%2Fkbt64nMHqknAK0SILKYgdEsIRH%2FqEtZDWpWY9uD1s%2BsyOe8P5qJSFUuij%2F7tq%2BQIDb4WuKeF3tFQZ9b91FYXbwRGdVD9g2S2DVkhcY&X-Amz-Signature=4e3f20616b3aaaf1cd51fcbb728810f834c7e4072f628cb84154931940efa15c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
