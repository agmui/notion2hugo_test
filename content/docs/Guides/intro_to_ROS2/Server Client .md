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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEWQG6T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnK6m1QAxEY8zJY%2FVBivkER%2FYLZ6A0JFWYA6ga9x2olAIgecTjnmjiftmpM5G%2B9xO8hUVVl9KsebFCjvSEA1MEQN8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgGmyQVSsdRmuHF7SrcA%2BkIVTAce%2FCG%2Bq1B7Q9HcTYHymnib3hdCzn7JBE8v3uCj8ZzPSZMqt61fc5E126DlZ2wiYkUS50CWIiehoGzSe9t5t6watspOo8ZG8ybTgpUgxza7pBoNYMBGQ%2F8qqpguOHa3JL84aA%2BzptftPrgmsSIFxP1qzA4dbW4GWL1Xh1Q97gYQgXlS4cEaHu9JGFsjArYj4eFiCCPGvxlTT9cirdvmvP2uXwC%2BW9dgeKt5xsITrz%2FGaGZuDkivvO4NNOC5ACVhuc%2FwfZXTaZFKClZfU7PalfqblPWluFbDrOkMyPdFAKj0%2BbiYcT1eJsmPp4A09bEM%2F5aiQGjBrgOZCjumdCJTlnB4BC5Ut2rNsFn6irdDTypDwyxPjOdGg%2BB0upRROGxIU7xCbZqQD3XDsBX0epYSmOAIN9CVCQEyYXDvUMMSP09e%2BcT1%2F4RAomo%2BmK7ZWzDssFnGTNbiMe3LY6mMVWyClzhUZ1YVViIieae%2FQG7DKsMR%2Bs9dxT346Gm94xn2zHyJ3SbjBaEiG6YZyY9U7sldTGAoYKFveWS0UZC2btigENeCJwyAafxV3Cgrh17Yxdv1md9bVtbj6zMatRHylFg73QSKGTT4Vbevs5F%2BVgmsEIrSCIZkP4X%2FWVNMMiWkr4GOqUBjurU%2BgdRvi4TdfyXLuV5b13fHk3mmQRxxLSIrA0d3MDTj5wCReOZTzJSq4laVo%2FX9C5SXNyiBVozuIsSgbv3KTRKqKGfGY%2FNGckDAlnw61mYg61vGuuhZ1OXPkMA0mAly8CUT9dTsfqoPAihULhDy%2FA5sqnqDn5sINIs%2B6oYDwxaqA8T4e2nocZCsTcHChQ9gk%2BEP8%2FKOv5ajFyneCUwcCnrsgYA&X-Amz-Signature=8231497185cefd5cca9ed65ab70059b013027f6838be6030bbc2dfde9cd5c9fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEWQG6T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnK6m1QAxEY8zJY%2FVBivkER%2FYLZ6A0JFWYA6ga9x2olAIgecTjnmjiftmpM5G%2B9xO8hUVVl9KsebFCjvSEA1MEQN8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgGmyQVSsdRmuHF7SrcA%2BkIVTAce%2FCG%2Bq1B7Q9HcTYHymnib3hdCzn7JBE8v3uCj8ZzPSZMqt61fc5E126DlZ2wiYkUS50CWIiehoGzSe9t5t6watspOo8ZG8ybTgpUgxza7pBoNYMBGQ%2F8qqpguOHa3JL84aA%2BzptftPrgmsSIFxP1qzA4dbW4GWL1Xh1Q97gYQgXlS4cEaHu9JGFsjArYj4eFiCCPGvxlTT9cirdvmvP2uXwC%2BW9dgeKt5xsITrz%2FGaGZuDkivvO4NNOC5ACVhuc%2FwfZXTaZFKClZfU7PalfqblPWluFbDrOkMyPdFAKj0%2BbiYcT1eJsmPp4A09bEM%2F5aiQGjBrgOZCjumdCJTlnB4BC5Ut2rNsFn6irdDTypDwyxPjOdGg%2BB0upRROGxIU7xCbZqQD3XDsBX0epYSmOAIN9CVCQEyYXDvUMMSP09e%2BcT1%2F4RAomo%2BmK7ZWzDssFnGTNbiMe3LY6mMVWyClzhUZ1YVViIieae%2FQG7DKsMR%2Bs9dxT346Gm94xn2zHyJ3SbjBaEiG6YZyY9U7sldTGAoYKFveWS0UZC2btigENeCJwyAafxV3Cgrh17Yxdv1md9bVtbj6zMatRHylFg73QSKGTT4Vbevs5F%2BVgmsEIrSCIZkP4X%2FWVNMMiWkr4GOqUBjurU%2BgdRvi4TdfyXLuV5b13fHk3mmQRxxLSIrA0d3MDTj5wCReOZTzJSq4laVo%2FX9C5SXNyiBVozuIsSgbv3KTRKqKGfGY%2FNGckDAlnw61mYg61vGuuhZ1OXPkMA0mAly8CUT9dTsfqoPAihULhDy%2FA5sqnqDn5sINIs%2B6oYDwxaqA8T4e2nocZCsTcHChQ9gk%2BEP8%2FKOv5ajFyneCUwcCnrsgYA&X-Amz-Signature=ead65fec671166964b8eb795ad73e8c34fa99e8b8f9541f3220cceed486d64db&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEWQG6T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnK6m1QAxEY8zJY%2FVBivkER%2FYLZ6A0JFWYA6ga9x2olAIgecTjnmjiftmpM5G%2B9xO8hUVVl9KsebFCjvSEA1MEQN8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgGmyQVSsdRmuHF7SrcA%2BkIVTAce%2FCG%2Bq1B7Q9HcTYHymnib3hdCzn7JBE8v3uCj8ZzPSZMqt61fc5E126DlZ2wiYkUS50CWIiehoGzSe9t5t6watspOo8ZG8ybTgpUgxza7pBoNYMBGQ%2F8qqpguOHa3JL84aA%2BzptftPrgmsSIFxP1qzA4dbW4GWL1Xh1Q97gYQgXlS4cEaHu9JGFsjArYj4eFiCCPGvxlTT9cirdvmvP2uXwC%2BW9dgeKt5xsITrz%2FGaGZuDkivvO4NNOC5ACVhuc%2FwfZXTaZFKClZfU7PalfqblPWluFbDrOkMyPdFAKj0%2BbiYcT1eJsmPp4A09bEM%2F5aiQGjBrgOZCjumdCJTlnB4BC5Ut2rNsFn6irdDTypDwyxPjOdGg%2BB0upRROGxIU7xCbZqQD3XDsBX0epYSmOAIN9CVCQEyYXDvUMMSP09e%2BcT1%2F4RAomo%2BmK7ZWzDssFnGTNbiMe3LY6mMVWyClzhUZ1YVViIieae%2FQG7DKsMR%2Bs9dxT346Gm94xn2zHyJ3SbjBaEiG6YZyY9U7sldTGAoYKFveWS0UZC2btigENeCJwyAafxV3Cgrh17Yxdv1md9bVtbj6zMatRHylFg73QSKGTT4Vbevs5F%2BVgmsEIrSCIZkP4X%2FWVNMMiWkr4GOqUBjurU%2BgdRvi4TdfyXLuV5b13fHk3mmQRxxLSIrA0d3MDTj5wCReOZTzJSq4laVo%2FX9C5SXNyiBVozuIsSgbv3KTRKqKGfGY%2FNGckDAlnw61mYg61vGuuhZ1OXPkMA0mAly8CUT9dTsfqoPAihULhDy%2FA5sqnqDn5sINIs%2B6oYDwxaqA8T4e2nocZCsTcHChQ9gk%2BEP8%2FKOv5ajFyneCUwcCnrsgYA&X-Amz-Signature=20bc9a5dfd4bc1e1ec077b6de2eebad5c62a654980c877de72474de64898c37c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEWQG6T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnK6m1QAxEY8zJY%2FVBivkER%2FYLZ6A0JFWYA6ga9x2olAIgecTjnmjiftmpM5G%2B9xO8hUVVl9KsebFCjvSEA1MEQN8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgGmyQVSsdRmuHF7SrcA%2BkIVTAce%2FCG%2Bq1B7Q9HcTYHymnib3hdCzn7JBE8v3uCj8ZzPSZMqt61fc5E126DlZ2wiYkUS50CWIiehoGzSe9t5t6watspOo8ZG8ybTgpUgxza7pBoNYMBGQ%2F8qqpguOHa3JL84aA%2BzptftPrgmsSIFxP1qzA4dbW4GWL1Xh1Q97gYQgXlS4cEaHu9JGFsjArYj4eFiCCPGvxlTT9cirdvmvP2uXwC%2BW9dgeKt5xsITrz%2FGaGZuDkivvO4NNOC5ACVhuc%2FwfZXTaZFKClZfU7PalfqblPWluFbDrOkMyPdFAKj0%2BbiYcT1eJsmPp4A09bEM%2F5aiQGjBrgOZCjumdCJTlnB4BC5Ut2rNsFn6irdDTypDwyxPjOdGg%2BB0upRROGxIU7xCbZqQD3XDsBX0epYSmOAIN9CVCQEyYXDvUMMSP09e%2BcT1%2F4RAomo%2BmK7ZWzDssFnGTNbiMe3LY6mMVWyClzhUZ1YVViIieae%2FQG7DKsMR%2Bs9dxT346Gm94xn2zHyJ3SbjBaEiG6YZyY9U7sldTGAoYKFveWS0UZC2btigENeCJwyAafxV3Cgrh17Yxdv1md9bVtbj6zMatRHylFg73QSKGTT4Vbevs5F%2BVgmsEIrSCIZkP4X%2FWVNMMiWkr4GOqUBjurU%2BgdRvi4TdfyXLuV5b13fHk3mmQRxxLSIrA0d3MDTj5wCReOZTzJSq4laVo%2FX9C5SXNyiBVozuIsSgbv3KTRKqKGfGY%2FNGckDAlnw61mYg61vGuuhZ1OXPkMA0mAly8CUT9dTsfqoPAihULhDy%2FA5sqnqDn5sINIs%2B6oYDwxaqA8T4e2nocZCsTcHChQ9gk%2BEP8%2FKOv5ajFyneCUwcCnrsgYA&X-Amz-Signature=33c83867e91677ea900189e8fdf0bae21e5efd54e7c183d8f63a2f2861b6d85a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEWQG6T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnK6m1QAxEY8zJY%2FVBivkER%2FYLZ6A0JFWYA6ga9x2olAIgecTjnmjiftmpM5G%2B9xO8hUVVl9KsebFCjvSEA1MEQN8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgGmyQVSsdRmuHF7SrcA%2BkIVTAce%2FCG%2Bq1B7Q9HcTYHymnib3hdCzn7JBE8v3uCj8ZzPSZMqt61fc5E126DlZ2wiYkUS50CWIiehoGzSe9t5t6watspOo8ZG8ybTgpUgxza7pBoNYMBGQ%2F8qqpguOHa3JL84aA%2BzptftPrgmsSIFxP1qzA4dbW4GWL1Xh1Q97gYQgXlS4cEaHu9JGFsjArYj4eFiCCPGvxlTT9cirdvmvP2uXwC%2BW9dgeKt5xsITrz%2FGaGZuDkivvO4NNOC5ACVhuc%2FwfZXTaZFKClZfU7PalfqblPWluFbDrOkMyPdFAKj0%2BbiYcT1eJsmPp4A09bEM%2F5aiQGjBrgOZCjumdCJTlnB4BC5Ut2rNsFn6irdDTypDwyxPjOdGg%2BB0upRROGxIU7xCbZqQD3XDsBX0epYSmOAIN9CVCQEyYXDvUMMSP09e%2BcT1%2F4RAomo%2BmK7ZWzDssFnGTNbiMe3LY6mMVWyClzhUZ1YVViIieae%2FQG7DKsMR%2Bs9dxT346Gm94xn2zHyJ3SbjBaEiG6YZyY9U7sldTGAoYKFveWS0UZC2btigENeCJwyAafxV3Cgrh17Yxdv1md9bVtbj6zMatRHylFg73QSKGTT4Vbevs5F%2BVgmsEIrSCIZkP4X%2FWVNMMiWkr4GOqUBjurU%2BgdRvi4TdfyXLuV5b13fHk3mmQRxxLSIrA0d3MDTj5wCReOZTzJSq4laVo%2FX9C5SXNyiBVozuIsSgbv3KTRKqKGfGY%2FNGckDAlnw61mYg61vGuuhZ1OXPkMA0mAly8CUT9dTsfqoPAihULhDy%2FA5sqnqDn5sINIs%2B6oYDwxaqA8T4e2nocZCsTcHChQ9gk%2BEP8%2FKOv5ajFyneCUwcCnrsgYA&X-Amz-Signature=ec5e044cf6a44a7f24edda4b701ddf9e934bbbc2a44b3ce6d789459960c031ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
