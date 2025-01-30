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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBAKUZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfexYlEjOKpNDYkisKG%2BVrkoDhLs7GuI8JulAuZHWqQwIhAOMcskKZo15ffaBc8ddQnHy0NXC2X1XSA7jo4oh68et2KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYnIuoE9W6ch6LCWcq3APNSxfebeB1fgzElTIL5Jq2TghZD11X5SUG4vFbv8JmHYi0VUzN1o%2BAT5TgANQiG%2B1zY%2F9Ovq%2B2o8SzcivswZn6ctR%2FxNWiuWFOkEQ6yqqmOjt1OZqu8KGtfC89vNH7G9%2BMj0jtEGBbAgFFsASUMCYvhJXWoNSGiMGLmXq86Mo7CsT1Qk%2FSg2kp2mgAartaGFzFSCDEuPzW51anQ2sE8z7TD2QEX%2BlAkUfFnKzLvDvTPyUyG0QZCx8C%2FvW2oC0OT16VLKvcTZJ5cjW0QWa0fvPdrSX3m5rI2KdTlM69nLqF1f%2FrpGBkHu8PmWROeWHWh7LRDAOUkOM2isYkGjGszZCajxIuG%2FTQPHxTyms8CzI0SsVOEUeZ5og7PqILw%2FfhXzhgQxFiJj0JoyZK8kdbU%2Bapto8zaXutDJN07jq0YfrMS8K3IxK%2FfNhAxHswesuJ9qglSmFhSljx7mvnvyzom3pPGkowdsydrEUKQ3tUCOesIHqbVovV9OGkb2yFz3UMbm9ezjhxXynJRyuD642guao7X5MHcQSPy6LpRpcy8ANZI6gG4u8dh3Ph4Rf4AcKk7Z%2FSOQa3ydz5B2D3UeBmSiKOapcx0epRYch%2BcUNR2SnmL7LdUnDJ%2Faox%2FWTF0DC04u%2B8BjqkAcDV90ZJWj9haPBpMCKwZhizlUqrgQ6a3YjnqMNgVBR5L7cHrGA7dDl03ao%2BQMpLKkPCw8RVUcPaMCMMN5iUJnjpiYVgjexR%2BTb3XUV6XS3qRRvR6dK0Nh6cFeRKPgbk%2BTKzNS83euHD%2FyfQcDI0rPBARke%2FIABMj9QCFrTeOcFQOUPj2qtZ5XoU5%2Fbj%2Fu8gW8FeyLQ%2Bc2C%2BY%2BRzv06sGllL8%2FXd&X-Amz-Signature=d1d097502871d102ae25ae419f2c30a2e7ae6d02403c27f36a14364d69506dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBAKUZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfexYlEjOKpNDYkisKG%2BVrkoDhLs7GuI8JulAuZHWqQwIhAOMcskKZo15ffaBc8ddQnHy0NXC2X1XSA7jo4oh68et2KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYnIuoE9W6ch6LCWcq3APNSxfebeB1fgzElTIL5Jq2TghZD11X5SUG4vFbv8JmHYi0VUzN1o%2BAT5TgANQiG%2B1zY%2F9Ovq%2B2o8SzcivswZn6ctR%2FxNWiuWFOkEQ6yqqmOjt1OZqu8KGtfC89vNH7G9%2BMj0jtEGBbAgFFsASUMCYvhJXWoNSGiMGLmXq86Mo7CsT1Qk%2FSg2kp2mgAartaGFzFSCDEuPzW51anQ2sE8z7TD2QEX%2BlAkUfFnKzLvDvTPyUyG0QZCx8C%2FvW2oC0OT16VLKvcTZJ5cjW0QWa0fvPdrSX3m5rI2KdTlM69nLqF1f%2FrpGBkHu8PmWROeWHWh7LRDAOUkOM2isYkGjGszZCajxIuG%2FTQPHxTyms8CzI0SsVOEUeZ5og7PqILw%2FfhXzhgQxFiJj0JoyZK8kdbU%2Bapto8zaXutDJN07jq0YfrMS8K3IxK%2FfNhAxHswesuJ9qglSmFhSljx7mvnvyzom3pPGkowdsydrEUKQ3tUCOesIHqbVovV9OGkb2yFz3UMbm9ezjhxXynJRyuD642guao7X5MHcQSPy6LpRpcy8ANZI6gG4u8dh3Ph4Rf4AcKk7Z%2FSOQa3ydz5B2D3UeBmSiKOapcx0epRYch%2BcUNR2SnmL7LdUnDJ%2Faox%2FWTF0DC04u%2B8BjqkAcDV90ZJWj9haPBpMCKwZhizlUqrgQ6a3YjnqMNgVBR5L7cHrGA7dDl03ao%2BQMpLKkPCw8RVUcPaMCMMN5iUJnjpiYVgjexR%2BTb3XUV6XS3qRRvR6dK0Nh6cFeRKPgbk%2BTKzNS83euHD%2FyfQcDI0rPBARke%2FIABMj9QCFrTeOcFQOUPj2qtZ5XoU5%2Fbj%2Fu8gW8FeyLQ%2Bc2C%2BY%2BRzv06sGllL8%2FXd&X-Amz-Signature=f296bdc53cef1667f33b8415d594669e7f21561542b3ea49605440ba8877737c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBAKUZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfexYlEjOKpNDYkisKG%2BVrkoDhLs7GuI8JulAuZHWqQwIhAOMcskKZo15ffaBc8ddQnHy0NXC2X1XSA7jo4oh68et2KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYnIuoE9W6ch6LCWcq3APNSxfebeB1fgzElTIL5Jq2TghZD11X5SUG4vFbv8JmHYi0VUzN1o%2BAT5TgANQiG%2B1zY%2F9Ovq%2B2o8SzcivswZn6ctR%2FxNWiuWFOkEQ6yqqmOjt1OZqu8KGtfC89vNH7G9%2BMj0jtEGBbAgFFsASUMCYvhJXWoNSGiMGLmXq86Mo7CsT1Qk%2FSg2kp2mgAartaGFzFSCDEuPzW51anQ2sE8z7TD2QEX%2BlAkUfFnKzLvDvTPyUyG0QZCx8C%2FvW2oC0OT16VLKvcTZJ5cjW0QWa0fvPdrSX3m5rI2KdTlM69nLqF1f%2FrpGBkHu8PmWROeWHWh7LRDAOUkOM2isYkGjGszZCajxIuG%2FTQPHxTyms8CzI0SsVOEUeZ5og7PqILw%2FfhXzhgQxFiJj0JoyZK8kdbU%2Bapto8zaXutDJN07jq0YfrMS8K3IxK%2FfNhAxHswesuJ9qglSmFhSljx7mvnvyzom3pPGkowdsydrEUKQ3tUCOesIHqbVovV9OGkb2yFz3UMbm9ezjhxXynJRyuD642guao7X5MHcQSPy6LpRpcy8ANZI6gG4u8dh3Ph4Rf4AcKk7Z%2FSOQa3ydz5B2D3UeBmSiKOapcx0epRYch%2BcUNR2SnmL7LdUnDJ%2Faox%2FWTF0DC04u%2B8BjqkAcDV90ZJWj9haPBpMCKwZhizlUqrgQ6a3YjnqMNgVBR5L7cHrGA7dDl03ao%2BQMpLKkPCw8RVUcPaMCMMN5iUJnjpiYVgjexR%2BTb3XUV6XS3qRRvR6dK0Nh6cFeRKPgbk%2BTKzNS83euHD%2FyfQcDI0rPBARke%2FIABMj9QCFrTeOcFQOUPj2qtZ5XoU5%2Fbj%2Fu8gW8FeyLQ%2Bc2C%2BY%2BRzv06sGllL8%2FXd&X-Amz-Signature=b0a98ca921c26ac79b61e6ae8fe61c81c7cebcd6e8a9754aae8a9cf609289157&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBAKUZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfexYlEjOKpNDYkisKG%2BVrkoDhLs7GuI8JulAuZHWqQwIhAOMcskKZo15ffaBc8ddQnHy0NXC2X1XSA7jo4oh68et2KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYnIuoE9W6ch6LCWcq3APNSxfebeB1fgzElTIL5Jq2TghZD11X5SUG4vFbv8JmHYi0VUzN1o%2BAT5TgANQiG%2B1zY%2F9Ovq%2B2o8SzcivswZn6ctR%2FxNWiuWFOkEQ6yqqmOjt1OZqu8KGtfC89vNH7G9%2BMj0jtEGBbAgFFsASUMCYvhJXWoNSGiMGLmXq86Mo7CsT1Qk%2FSg2kp2mgAartaGFzFSCDEuPzW51anQ2sE8z7TD2QEX%2BlAkUfFnKzLvDvTPyUyG0QZCx8C%2FvW2oC0OT16VLKvcTZJ5cjW0QWa0fvPdrSX3m5rI2KdTlM69nLqF1f%2FrpGBkHu8PmWROeWHWh7LRDAOUkOM2isYkGjGszZCajxIuG%2FTQPHxTyms8CzI0SsVOEUeZ5og7PqILw%2FfhXzhgQxFiJj0JoyZK8kdbU%2Bapto8zaXutDJN07jq0YfrMS8K3IxK%2FfNhAxHswesuJ9qglSmFhSljx7mvnvyzom3pPGkowdsydrEUKQ3tUCOesIHqbVovV9OGkb2yFz3UMbm9ezjhxXynJRyuD642guao7X5MHcQSPy6LpRpcy8ANZI6gG4u8dh3Ph4Rf4AcKk7Z%2FSOQa3ydz5B2D3UeBmSiKOapcx0epRYch%2BcUNR2SnmL7LdUnDJ%2Faox%2FWTF0DC04u%2B8BjqkAcDV90ZJWj9haPBpMCKwZhizlUqrgQ6a3YjnqMNgVBR5L7cHrGA7dDl03ao%2BQMpLKkPCw8RVUcPaMCMMN5iUJnjpiYVgjexR%2BTb3XUV6XS3qRRvR6dK0Nh6cFeRKPgbk%2BTKzNS83euHD%2FyfQcDI0rPBARke%2FIABMj9QCFrTeOcFQOUPj2qtZ5XoU5%2Fbj%2Fu8gW8FeyLQ%2Bc2C%2BY%2BRzv06sGllL8%2FXd&X-Amz-Signature=141de2cc876cdda7d4debe5966b828b39920088b3bc3becf72122dfbc50355b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBAKUZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfexYlEjOKpNDYkisKG%2BVrkoDhLs7GuI8JulAuZHWqQwIhAOMcskKZo15ffaBc8ddQnHy0NXC2X1XSA7jo4oh68et2KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYnIuoE9W6ch6LCWcq3APNSxfebeB1fgzElTIL5Jq2TghZD11X5SUG4vFbv8JmHYi0VUzN1o%2BAT5TgANQiG%2B1zY%2F9Ovq%2B2o8SzcivswZn6ctR%2FxNWiuWFOkEQ6yqqmOjt1OZqu8KGtfC89vNH7G9%2BMj0jtEGBbAgFFsASUMCYvhJXWoNSGiMGLmXq86Mo7CsT1Qk%2FSg2kp2mgAartaGFzFSCDEuPzW51anQ2sE8z7TD2QEX%2BlAkUfFnKzLvDvTPyUyG0QZCx8C%2FvW2oC0OT16VLKvcTZJ5cjW0QWa0fvPdrSX3m5rI2KdTlM69nLqF1f%2FrpGBkHu8PmWROeWHWh7LRDAOUkOM2isYkGjGszZCajxIuG%2FTQPHxTyms8CzI0SsVOEUeZ5og7PqILw%2FfhXzhgQxFiJj0JoyZK8kdbU%2Bapto8zaXutDJN07jq0YfrMS8K3IxK%2FfNhAxHswesuJ9qglSmFhSljx7mvnvyzom3pPGkowdsydrEUKQ3tUCOesIHqbVovV9OGkb2yFz3UMbm9ezjhxXynJRyuD642guao7X5MHcQSPy6LpRpcy8ANZI6gG4u8dh3Ph4Rf4AcKk7Z%2FSOQa3ydz5B2D3UeBmSiKOapcx0epRYch%2BcUNR2SnmL7LdUnDJ%2Faox%2FWTF0DC04u%2B8BjqkAcDV90ZJWj9haPBpMCKwZhizlUqrgQ6a3YjnqMNgVBR5L7cHrGA7dDl03ao%2BQMpLKkPCw8RVUcPaMCMMN5iUJnjpiYVgjexR%2BTb3XUV6XS3qRRvR6dK0Nh6cFeRKPgbk%2BTKzNS83euHD%2FyfQcDI0rPBARke%2FIABMj9QCFrTeOcFQOUPj2qtZ5XoU5%2Fbj%2Fu8gW8FeyLQ%2Bc2C%2BY%2BRzv06sGllL8%2FXd&X-Amz-Signature=29fa3921cd5e99186147eb2016d70fafb5a1e19ad68b3c3ae083652f2c41eeb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
