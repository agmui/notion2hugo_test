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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZMCWEC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEcCFE74%2FIJQRebfsZBVrBwtVjKUlOakUT9hNAH2UFiAiAuFL7HPgv%2FFMQrUbJ%2BaNaC%2FmnLrA40cT3fOcK8jOrovir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8%2FsqClLIoJMsUQGbKtwDgcK6b8TkjEJ6jWLyIOX%2BoqIQp%2FiKzzCi03Ieon9ojWbE%2FICiftspLmXQOhtP5NbXUm8ntmltH4YI%2BhoriIkg17tJwT%2BE6FTvVvB3p8ngRl7YAmrM0VJeN07CierRomESBUT2zGWedm5LkgHvEarLzV0tiYkYDpKbP9UXUp0Q0BvCJwfQIr1BxGr5U3ujix2E6lNP8pOehfcJ7Bpc52trOM%2BsI3CTWhirOwcpWX5DiOIIOAWxBgU1U6d%2B2qunNbNyb1dtufT8f%2FvTqzCLCui%2FCsU9xbqJoH3X8jBkkHTaXweb3eqF6yDcRqVMIv%2Fu3SfLj8RopOqBDAAZthrnESGjpyUTzwa77lOUCBxn1dQGf4%2BeJCpyj%2FYKrWbb2aDT810yTY%2BrogQfAiZ9dJ6zjjkfktmuu3ZCX7CLY5KM6x9H1TCUA%2BtAuWZclkN6O9Mb9chTaydvHgTRzCxqxWLPxvXYeLy0IKeRyxNkLfzIUkebg6zl8PFxb9R11sDeC%2BhbyON1g29tNmYVmK9%2FluO0mHf5q542fooHBoUwPNwbmznmhoOLRalnb4BEehD8Lsjx4xHYOUDKM41dxOzmcnOHSZzgfpEc7NIijQ8%2Fr4Hpvrwk2G3xCnWMViH7ERMWKW8wyrHUwQY6pgEJ0eS40Exam4o3NvolTPH27Osj7PnERfZfXt55bUnSA6b2G%2BmQufxGe7rSEEoFx3lLsFpY3Ha8xRAnWe%2FJLbjqSmIT%2BIzTxtfQx4fIcqSaMjhPm%2FsWGI1pA63j4ScQkjRzM%2Fq%2FpUehuE8Up4fvlHFiTIQiX7JELOOwZZAQ4VdGI8pCfXzsXm8Jo7TqkDibqJOEKfAn7w18eAfwkHYPibFAqFpkYNb1&X-Amz-Signature=bbb0a7960b3b0e5de51de64eac6f188f764bc23d9c1d79c363b1b8c5aeb66c10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZMCWEC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEcCFE74%2FIJQRebfsZBVrBwtVjKUlOakUT9hNAH2UFiAiAuFL7HPgv%2FFMQrUbJ%2BaNaC%2FmnLrA40cT3fOcK8jOrovir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8%2FsqClLIoJMsUQGbKtwDgcK6b8TkjEJ6jWLyIOX%2BoqIQp%2FiKzzCi03Ieon9ojWbE%2FICiftspLmXQOhtP5NbXUm8ntmltH4YI%2BhoriIkg17tJwT%2BE6FTvVvB3p8ngRl7YAmrM0VJeN07CierRomESBUT2zGWedm5LkgHvEarLzV0tiYkYDpKbP9UXUp0Q0BvCJwfQIr1BxGr5U3ujix2E6lNP8pOehfcJ7Bpc52trOM%2BsI3CTWhirOwcpWX5DiOIIOAWxBgU1U6d%2B2qunNbNyb1dtufT8f%2FvTqzCLCui%2FCsU9xbqJoH3X8jBkkHTaXweb3eqF6yDcRqVMIv%2Fu3SfLj8RopOqBDAAZthrnESGjpyUTzwa77lOUCBxn1dQGf4%2BeJCpyj%2FYKrWbb2aDT810yTY%2BrogQfAiZ9dJ6zjjkfktmuu3ZCX7CLY5KM6x9H1TCUA%2BtAuWZclkN6O9Mb9chTaydvHgTRzCxqxWLPxvXYeLy0IKeRyxNkLfzIUkebg6zl8PFxb9R11sDeC%2BhbyON1g29tNmYVmK9%2FluO0mHf5q542fooHBoUwPNwbmznmhoOLRalnb4BEehD8Lsjx4xHYOUDKM41dxOzmcnOHSZzgfpEc7NIijQ8%2Fr4Hpvrwk2G3xCnWMViH7ERMWKW8wyrHUwQY6pgEJ0eS40Exam4o3NvolTPH27Osj7PnERfZfXt55bUnSA6b2G%2BmQufxGe7rSEEoFx3lLsFpY3Ha8xRAnWe%2FJLbjqSmIT%2BIzTxtfQx4fIcqSaMjhPm%2FsWGI1pA63j4ScQkjRzM%2Fq%2FpUehuE8Up4fvlHFiTIQiX7JELOOwZZAQ4VdGI8pCfXzsXm8Jo7TqkDibqJOEKfAn7w18eAfwkHYPibFAqFpkYNb1&X-Amz-Signature=772abe6e41266fa08833883aff04626c9e1c87fb25e9b9c62328957cc82cf19d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZMCWEC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEcCFE74%2FIJQRebfsZBVrBwtVjKUlOakUT9hNAH2UFiAiAuFL7HPgv%2FFMQrUbJ%2BaNaC%2FmnLrA40cT3fOcK8jOrovir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8%2FsqClLIoJMsUQGbKtwDgcK6b8TkjEJ6jWLyIOX%2BoqIQp%2FiKzzCi03Ieon9ojWbE%2FICiftspLmXQOhtP5NbXUm8ntmltH4YI%2BhoriIkg17tJwT%2BE6FTvVvB3p8ngRl7YAmrM0VJeN07CierRomESBUT2zGWedm5LkgHvEarLzV0tiYkYDpKbP9UXUp0Q0BvCJwfQIr1BxGr5U3ujix2E6lNP8pOehfcJ7Bpc52trOM%2BsI3CTWhirOwcpWX5DiOIIOAWxBgU1U6d%2B2qunNbNyb1dtufT8f%2FvTqzCLCui%2FCsU9xbqJoH3X8jBkkHTaXweb3eqF6yDcRqVMIv%2Fu3SfLj8RopOqBDAAZthrnESGjpyUTzwa77lOUCBxn1dQGf4%2BeJCpyj%2FYKrWbb2aDT810yTY%2BrogQfAiZ9dJ6zjjkfktmuu3ZCX7CLY5KM6x9H1TCUA%2BtAuWZclkN6O9Mb9chTaydvHgTRzCxqxWLPxvXYeLy0IKeRyxNkLfzIUkebg6zl8PFxb9R11sDeC%2BhbyON1g29tNmYVmK9%2FluO0mHf5q542fooHBoUwPNwbmznmhoOLRalnb4BEehD8Lsjx4xHYOUDKM41dxOzmcnOHSZzgfpEc7NIijQ8%2Fr4Hpvrwk2G3xCnWMViH7ERMWKW8wyrHUwQY6pgEJ0eS40Exam4o3NvolTPH27Osj7PnERfZfXt55bUnSA6b2G%2BmQufxGe7rSEEoFx3lLsFpY3Ha8xRAnWe%2FJLbjqSmIT%2BIzTxtfQx4fIcqSaMjhPm%2FsWGI1pA63j4ScQkjRzM%2Fq%2FpUehuE8Up4fvlHFiTIQiX7JELOOwZZAQ4VdGI8pCfXzsXm8Jo7TqkDibqJOEKfAn7w18eAfwkHYPibFAqFpkYNb1&X-Amz-Signature=3ab466feb3c1d5c9aecb5d1efb9375fb28072f738c26e034b5d8049367415e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZMCWEC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEcCFE74%2FIJQRebfsZBVrBwtVjKUlOakUT9hNAH2UFiAiAuFL7HPgv%2FFMQrUbJ%2BaNaC%2FmnLrA40cT3fOcK8jOrovir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8%2FsqClLIoJMsUQGbKtwDgcK6b8TkjEJ6jWLyIOX%2BoqIQp%2FiKzzCi03Ieon9ojWbE%2FICiftspLmXQOhtP5NbXUm8ntmltH4YI%2BhoriIkg17tJwT%2BE6FTvVvB3p8ngRl7YAmrM0VJeN07CierRomESBUT2zGWedm5LkgHvEarLzV0tiYkYDpKbP9UXUp0Q0BvCJwfQIr1BxGr5U3ujix2E6lNP8pOehfcJ7Bpc52trOM%2BsI3CTWhirOwcpWX5DiOIIOAWxBgU1U6d%2B2qunNbNyb1dtufT8f%2FvTqzCLCui%2FCsU9xbqJoH3X8jBkkHTaXweb3eqF6yDcRqVMIv%2Fu3SfLj8RopOqBDAAZthrnESGjpyUTzwa77lOUCBxn1dQGf4%2BeJCpyj%2FYKrWbb2aDT810yTY%2BrogQfAiZ9dJ6zjjkfktmuu3ZCX7CLY5KM6x9H1TCUA%2BtAuWZclkN6O9Mb9chTaydvHgTRzCxqxWLPxvXYeLy0IKeRyxNkLfzIUkebg6zl8PFxb9R11sDeC%2BhbyON1g29tNmYVmK9%2FluO0mHf5q542fooHBoUwPNwbmznmhoOLRalnb4BEehD8Lsjx4xHYOUDKM41dxOzmcnOHSZzgfpEc7NIijQ8%2Fr4Hpvrwk2G3xCnWMViH7ERMWKW8wyrHUwQY6pgEJ0eS40Exam4o3NvolTPH27Osj7PnERfZfXt55bUnSA6b2G%2BmQufxGe7rSEEoFx3lLsFpY3Ha8xRAnWe%2FJLbjqSmIT%2BIzTxtfQx4fIcqSaMjhPm%2FsWGI1pA63j4ScQkjRzM%2Fq%2FpUehuE8Up4fvlHFiTIQiX7JELOOwZZAQ4VdGI8pCfXzsXm8Jo7TqkDibqJOEKfAn7w18eAfwkHYPibFAqFpkYNb1&X-Amz-Signature=7643329f428f93ef1559e90306e31d704b00d4907847550fda6a2328d50f06d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZMCWEC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEcCFE74%2FIJQRebfsZBVrBwtVjKUlOakUT9hNAH2UFiAiAuFL7HPgv%2FFMQrUbJ%2BaNaC%2FmnLrA40cT3fOcK8jOrovir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8%2FsqClLIoJMsUQGbKtwDgcK6b8TkjEJ6jWLyIOX%2BoqIQp%2FiKzzCi03Ieon9ojWbE%2FICiftspLmXQOhtP5NbXUm8ntmltH4YI%2BhoriIkg17tJwT%2BE6FTvVvB3p8ngRl7YAmrM0VJeN07CierRomESBUT2zGWedm5LkgHvEarLzV0tiYkYDpKbP9UXUp0Q0BvCJwfQIr1BxGr5U3ujix2E6lNP8pOehfcJ7Bpc52trOM%2BsI3CTWhirOwcpWX5DiOIIOAWxBgU1U6d%2B2qunNbNyb1dtufT8f%2FvTqzCLCui%2FCsU9xbqJoH3X8jBkkHTaXweb3eqF6yDcRqVMIv%2Fu3SfLj8RopOqBDAAZthrnESGjpyUTzwa77lOUCBxn1dQGf4%2BeJCpyj%2FYKrWbb2aDT810yTY%2BrogQfAiZ9dJ6zjjkfktmuu3ZCX7CLY5KM6x9H1TCUA%2BtAuWZclkN6O9Mb9chTaydvHgTRzCxqxWLPxvXYeLy0IKeRyxNkLfzIUkebg6zl8PFxb9R11sDeC%2BhbyON1g29tNmYVmK9%2FluO0mHf5q542fooHBoUwPNwbmznmhoOLRalnb4BEehD8Lsjx4xHYOUDKM41dxOzmcnOHSZzgfpEc7NIijQ8%2Fr4Hpvrwk2G3xCnWMViH7ERMWKW8wyrHUwQY6pgEJ0eS40Exam4o3NvolTPH27Osj7PnERfZfXt55bUnSA6b2G%2BmQufxGe7rSEEoFx3lLsFpY3Ha8xRAnWe%2FJLbjqSmIT%2BIzTxtfQx4fIcqSaMjhPm%2FsWGI1pA63j4ScQkjRzM%2Fq%2FpUehuE8Up4fvlHFiTIQiX7JELOOwZZAQ4VdGI8pCfXzsXm8Jo7TqkDibqJOEKfAn7w18eAfwkHYPibFAqFpkYNb1&X-Amz-Signature=a7f948382c347d813bf9c3bb3e700917dd2c594892d27050ea5c63d5e7ab4303&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
