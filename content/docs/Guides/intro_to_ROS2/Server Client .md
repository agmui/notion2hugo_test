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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNL6YBY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAdCKaH9JmYWsXfTGy4JisXcpgVXpLkz%2BxgNXqthkSCWAiEAt7wGv1FGsk3BLuG57EFj5M1%2Fmva4GvV19oDH49DMgjYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAON%2FkCGYWIuWpGnKCrcAzHTNde%2FiZrENVNEBaw3gxt4H2jP1OgwX8kA5oypeZTUKA7hlTjaDzxuUJIcKhdz9Wu936GupM7bBEG7rt9lXCjzWd7jiy7hl19pfEnJr9PqbdEX4lCdk1cXTnTNIB3bR03PuWS1dpnghwhTF0dTeI8T7UnR3ZpziaNC%2FyxqzHUzTaKxYMZrgl2M9L53u26YY9B5aGPz3G%2FlzYmvTGecxlRnwRAIkRjzQ4VuwqDKPFEeFoEs14a4Xvckgy2ORpXzLQnmBG218D5Zt20wVVRexB7t0PA0bi5iAdeG3g03pxMXrOjRhx6qlI7pQAEUiFXcnPRwXalRstE%2Bving1tR7vxxDx5I65ShD8IM2iPqmpS0eqPNKQ0nvDAbIW%2FIQ12g1SrPlO4UvNc8fES7tlnH4js9fF6pmLP16L4RU4NZ2A6qHGe1HaO%2BDdg%2FCTVIgKUSPEBuDxm6uN7Il9IF3JF3A0LdTzn45kK7%2F3qyyY%2BOjaiwmPz%2BvWU11%2FIMseH9BqIxajOsLoqc%2Bo6i9rRFzrGx9HNLquktHiBZnDtjUCL2BKvi3DoDdLUKOFoYA6ZMKWgWpsje83zJ6TPWQLwnCcpyaizs9FWAyFNSA90N9%2FYN75OvgIlAkjBpwyogzck6kMMO8qMAGOqUBI6nlSuGtt%2F8g3FLWr1i4ckYedSCO5jnZe%2FHVe4MIaj3uy0fpJfpW5T%2FsCy0PdJv6UXfCTuhYaqVWtiFpdY1CqloxQY%2BVM74LdKT1E4DHDDkoe4W9GFZkxAUZy%2F8yk9m9L7odZdmXRTYX5opje62kEvzyDl22M9QouSNTPKsC0g8sFa92rlRXHnNiy4bNvlhL0AE%2BDCwxn%2BWlpRCtKpmrVsJmcrO9&X-Amz-Signature=57948e60a50141905198a74f7795ebb7dbdf4828076a72bf84cf0452cfc26156&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNL6YBY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAdCKaH9JmYWsXfTGy4JisXcpgVXpLkz%2BxgNXqthkSCWAiEAt7wGv1FGsk3BLuG57EFj5M1%2Fmva4GvV19oDH49DMgjYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAON%2FkCGYWIuWpGnKCrcAzHTNde%2FiZrENVNEBaw3gxt4H2jP1OgwX8kA5oypeZTUKA7hlTjaDzxuUJIcKhdz9Wu936GupM7bBEG7rt9lXCjzWd7jiy7hl19pfEnJr9PqbdEX4lCdk1cXTnTNIB3bR03PuWS1dpnghwhTF0dTeI8T7UnR3ZpziaNC%2FyxqzHUzTaKxYMZrgl2M9L53u26YY9B5aGPz3G%2FlzYmvTGecxlRnwRAIkRjzQ4VuwqDKPFEeFoEs14a4Xvckgy2ORpXzLQnmBG218D5Zt20wVVRexB7t0PA0bi5iAdeG3g03pxMXrOjRhx6qlI7pQAEUiFXcnPRwXalRstE%2Bving1tR7vxxDx5I65ShD8IM2iPqmpS0eqPNKQ0nvDAbIW%2FIQ12g1SrPlO4UvNc8fES7tlnH4js9fF6pmLP16L4RU4NZ2A6qHGe1HaO%2BDdg%2FCTVIgKUSPEBuDxm6uN7Il9IF3JF3A0LdTzn45kK7%2F3qyyY%2BOjaiwmPz%2BvWU11%2FIMseH9BqIxajOsLoqc%2Bo6i9rRFzrGx9HNLquktHiBZnDtjUCL2BKvi3DoDdLUKOFoYA6ZMKWgWpsje83zJ6TPWQLwnCcpyaizs9FWAyFNSA90N9%2FYN75OvgIlAkjBpwyogzck6kMMO8qMAGOqUBI6nlSuGtt%2F8g3FLWr1i4ckYedSCO5jnZe%2FHVe4MIaj3uy0fpJfpW5T%2FsCy0PdJv6UXfCTuhYaqVWtiFpdY1CqloxQY%2BVM74LdKT1E4DHDDkoe4W9GFZkxAUZy%2F8yk9m9L7odZdmXRTYX5opje62kEvzyDl22M9QouSNTPKsC0g8sFa92rlRXHnNiy4bNvlhL0AE%2BDCwxn%2BWlpRCtKpmrVsJmcrO9&X-Amz-Signature=7d0711ff0a82827ece66824168aa787911ef670cd54248d615bcf1cc6fed5463&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNL6YBY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAdCKaH9JmYWsXfTGy4JisXcpgVXpLkz%2BxgNXqthkSCWAiEAt7wGv1FGsk3BLuG57EFj5M1%2Fmva4GvV19oDH49DMgjYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAON%2FkCGYWIuWpGnKCrcAzHTNde%2FiZrENVNEBaw3gxt4H2jP1OgwX8kA5oypeZTUKA7hlTjaDzxuUJIcKhdz9Wu936GupM7bBEG7rt9lXCjzWd7jiy7hl19pfEnJr9PqbdEX4lCdk1cXTnTNIB3bR03PuWS1dpnghwhTF0dTeI8T7UnR3ZpziaNC%2FyxqzHUzTaKxYMZrgl2M9L53u26YY9B5aGPz3G%2FlzYmvTGecxlRnwRAIkRjzQ4VuwqDKPFEeFoEs14a4Xvckgy2ORpXzLQnmBG218D5Zt20wVVRexB7t0PA0bi5iAdeG3g03pxMXrOjRhx6qlI7pQAEUiFXcnPRwXalRstE%2Bving1tR7vxxDx5I65ShD8IM2iPqmpS0eqPNKQ0nvDAbIW%2FIQ12g1SrPlO4UvNc8fES7tlnH4js9fF6pmLP16L4RU4NZ2A6qHGe1HaO%2BDdg%2FCTVIgKUSPEBuDxm6uN7Il9IF3JF3A0LdTzn45kK7%2F3qyyY%2BOjaiwmPz%2BvWU11%2FIMseH9BqIxajOsLoqc%2Bo6i9rRFzrGx9HNLquktHiBZnDtjUCL2BKvi3DoDdLUKOFoYA6ZMKWgWpsje83zJ6TPWQLwnCcpyaizs9FWAyFNSA90N9%2FYN75OvgIlAkjBpwyogzck6kMMO8qMAGOqUBI6nlSuGtt%2F8g3FLWr1i4ckYedSCO5jnZe%2FHVe4MIaj3uy0fpJfpW5T%2FsCy0PdJv6UXfCTuhYaqVWtiFpdY1CqloxQY%2BVM74LdKT1E4DHDDkoe4W9GFZkxAUZy%2F8yk9m9L7odZdmXRTYX5opje62kEvzyDl22M9QouSNTPKsC0g8sFa92rlRXHnNiy4bNvlhL0AE%2BDCwxn%2BWlpRCtKpmrVsJmcrO9&X-Amz-Signature=1c868a717a3a0f43cf77890b4628e2d6481d65552446784523d26d2d5cc6cd99&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNL6YBY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAdCKaH9JmYWsXfTGy4JisXcpgVXpLkz%2BxgNXqthkSCWAiEAt7wGv1FGsk3BLuG57EFj5M1%2Fmva4GvV19oDH49DMgjYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAON%2FkCGYWIuWpGnKCrcAzHTNde%2FiZrENVNEBaw3gxt4H2jP1OgwX8kA5oypeZTUKA7hlTjaDzxuUJIcKhdz9Wu936GupM7bBEG7rt9lXCjzWd7jiy7hl19pfEnJr9PqbdEX4lCdk1cXTnTNIB3bR03PuWS1dpnghwhTF0dTeI8T7UnR3ZpziaNC%2FyxqzHUzTaKxYMZrgl2M9L53u26YY9B5aGPz3G%2FlzYmvTGecxlRnwRAIkRjzQ4VuwqDKPFEeFoEs14a4Xvckgy2ORpXzLQnmBG218D5Zt20wVVRexB7t0PA0bi5iAdeG3g03pxMXrOjRhx6qlI7pQAEUiFXcnPRwXalRstE%2Bving1tR7vxxDx5I65ShD8IM2iPqmpS0eqPNKQ0nvDAbIW%2FIQ12g1SrPlO4UvNc8fES7tlnH4js9fF6pmLP16L4RU4NZ2A6qHGe1HaO%2BDdg%2FCTVIgKUSPEBuDxm6uN7Il9IF3JF3A0LdTzn45kK7%2F3qyyY%2BOjaiwmPz%2BvWU11%2FIMseH9BqIxajOsLoqc%2Bo6i9rRFzrGx9HNLquktHiBZnDtjUCL2BKvi3DoDdLUKOFoYA6ZMKWgWpsje83zJ6TPWQLwnCcpyaizs9FWAyFNSA90N9%2FYN75OvgIlAkjBpwyogzck6kMMO8qMAGOqUBI6nlSuGtt%2F8g3FLWr1i4ckYedSCO5jnZe%2FHVe4MIaj3uy0fpJfpW5T%2FsCy0PdJv6UXfCTuhYaqVWtiFpdY1CqloxQY%2BVM74LdKT1E4DHDDkoe4W9GFZkxAUZy%2F8yk9m9L7odZdmXRTYX5opje62kEvzyDl22M9QouSNTPKsC0g8sFa92rlRXHnNiy4bNvlhL0AE%2BDCwxn%2BWlpRCtKpmrVsJmcrO9&X-Amz-Signature=ee342267029d6dd15b4861f20c39adb4fcd1f88ac02338034923ddf2bec5f341&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNL6YBY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAdCKaH9JmYWsXfTGy4JisXcpgVXpLkz%2BxgNXqthkSCWAiEAt7wGv1FGsk3BLuG57EFj5M1%2Fmva4GvV19oDH49DMgjYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAON%2FkCGYWIuWpGnKCrcAzHTNde%2FiZrENVNEBaw3gxt4H2jP1OgwX8kA5oypeZTUKA7hlTjaDzxuUJIcKhdz9Wu936GupM7bBEG7rt9lXCjzWd7jiy7hl19pfEnJr9PqbdEX4lCdk1cXTnTNIB3bR03PuWS1dpnghwhTF0dTeI8T7UnR3ZpziaNC%2FyxqzHUzTaKxYMZrgl2M9L53u26YY9B5aGPz3G%2FlzYmvTGecxlRnwRAIkRjzQ4VuwqDKPFEeFoEs14a4Xvckgy2ORpXzLQnmBG218D5Zt20wVVRexB7t0PA0bi5iAdeG3g03pxMXrOjRhx6qlI7pQAEUiFXcnPRwXalRstE%2Bving1tR7vxxDx5I65ShD8IM2iPqmpS0eqPNKQ0nvDAbIW%2FIQ12g1SrPlO4UvNc8fES7tlnH4js9fF6pmLP16L4RU4NZ2A6qHGe1HaO%2BDdg%2FCTVIgKUSPEBuDxm6uN7Il9IF3JF3A0LdTzn45kK7%2F3qyyY%2BOjaiwmPz%2BvWU11%2FIMseH9BqIxajOsLoqc%2Bo6i9rRFzrGx9HNLquktHiBZnDtjUCL2BKvi3DoDdLUKOFoYA6ZMKWgWpsje83zJ6TPWQLwnCcpyaizs9FWAyFNSA90N9%2FYN75OvgIlAkjBpwyogzck6kMMO8qMAGOqUBI6nlSuGtt%2F8g3FLWr1i4ckYedSCO5jnZe%2FHVe4MIaj3uy0fpJfpW5T%2FsCy0PdJv6UXfCTuhYaqVWtiFpdY1CqloxQY%2BVM74LdKT1E4DHDDkoe4W9GFZkxAUZy%2F8yk9m9L7odZdmXRTYX5opje62kEvzyDl22M9QouSNTPKsC0g8sFa92rlRXHnNiy4bNvlhL0AE%2BDCwxn%2BWlpRCtKpmrVsJmcrO9&X-Amz-Signature=ee19db65dfc18ad15a6cac58f193d2a65e552a30e5c0298c64395f672dbda91d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
