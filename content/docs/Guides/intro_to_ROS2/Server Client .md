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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6MPJZ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCQw%2F4mX03Vj3dZz8gVqYsrKlYqvpMB4VgdGP9%2FJUDTiAIhAKwxBd2IrQktLp8nNcAwlk1BTRLMm5s4p58juztVk9b5KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fp4yyTf9R0rAQCHAq3ANp5Ffg%2BDWlAiOHQdUMjGB8EI0SQy73T5tQRZJK51dixBz%2B2gdaEITlMEa6fAdWDyLRZ4%2FKZEktC2Ug7%2FB9GhfIigMk1SUWH30DEtl7c8WCkD7O8dXcgs4Bb49D20K8VBSpQcfiVQ%2BrByKQxDlTf08bNBL87wR%2BiMDME6wVEH1FDF4wH9ZddDDUKU8MJEFmx0ODPthlbrFkw%2BwrsXsQW9SOIXKlvJdmzHB0q4aaT2FtoKHKGYsW%2Bu7SpF3qpc1pkJBhKqlfkhhW0iSeN13AUAA1ujJY9BN7RV4hPlnUgWEyXHfb1vLen%2FeP9%2BS8rNMODdnVgmgkC5LICxaTtI2JAFsB%2B7PZhWBnAOSDkj5%2B7eSYPLn%2BaUdStdfF4YjTOZif%2BznvQgzYOrlkGguXitr0h8EjPCZ6k%2BjmiqxoCHUf56cbnyKKkqXb5NCx%2BqjoVuR3iXi7qIHgZuYq2GHZZjs8OA%2BuYQZPpmMLvU5D1n%2FCNV5X5ayxQ9%2F5ylJ2tvNYgRWIl%2BLrjCp7dR4xaLeI4VmejSatbZR734jRYlI7nGLR8mYfQCU0BAXtq7V3r2pjqjWYLk0oY4qeEt58nbto8xTEnVXtf2%2F77xPLpUFd0I6kToob57L2VO65tlbs36WuNzCb8tLABjqkATc5W9xFbFZE7tUB0jOIL6eSp6TELv4EuxC9UqPLld7N%2BSlUEeMGbjjE59PGj7JEROiC%2BJo7C%2Fc6g06REnLCOklON2FwqAYaylC83VvoEcHXckYoJeIFDJ0aEdLpZbg73GYkUYseahnvLKPgih%2BG%2FZbtrAZm6FyOI8Q%2BqAputkh%2F8%2FhQQVdgZww%2F%2BLtEdd3JCLlUUkEuD3dvWI1zWUeOU13eH%2BOZ&X-Amz-Signature=6bb669a6a7e0700c1e23170ed709c0ce7183785f55b5d9de6c3b90fe0c6854d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6MPJZ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCQw%2F4mX03Vj3dZz8gVqYsrKlYqvpMB4VgdGP9%2FJUDTiAIhAKwxBd2IrQktLp8nNcAwlk1BTRLMm5s4p58juztVk9b5KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fp4yyTf9R0rAQCHAq3ANp5Ffg%2BDWlAiOHQdUMjGB8EI0SQy73T5tQRZJK51dixBz%2B2gdaEITlMEa6fAdWDyLRZ4%2FKZEktC2Ug7%2FB9GhfIigMk1SUWH30DEtl7c8WCkD7O8dXcgs4Bb49D20K8VBSpQcfiVQ%2BrByKQxDlTf08bNBL87wR%2BiMDME6wVEH1FDF4wH9ZddDDUKU8MJEFmx0ODPthlbrFkw%2BwrsXsQW9SOIXKlvJdmzHB0q4aaT2FtoKHKGYsW%2Bu7SpF3qpc1pkJBhKqlfkhhW0iSeN13AUAA1ujJY9BN7RV4hPlnUgWEyXHfb1vLen%2FeP9%2BS8rNMODdnVgmgkC5LICxaTtI2JAFsB%2B7PZhWBnAOSDkj5%2B7eSYPLn%2BaUdStdfF4YjTOZif%2BznvQgzYOrlkGguXitr0h8EjPCZ6k%2BjmiqxoCHUf56cbnyKKkqXb5NCx%2BqjoVuR3iXi7qIHgZuYq2GHZZjs8OA%2BuYQZPpmMLvU5D1n%2FCNV5X5ayxQ9%2F5ylJ2tvNYgRWIl%2BLrjCp7dR4xaLeI4VmejSatbZR734jRYlI7nGLR8mYfQCU0BAXtq7V3r2pjqjWYLk0oY4qeEt58nbto8xTEnVXtf2%2F77xPLpUFd0I6kToob57L2VO65tlbs36WuNzCb8tLABjqkATc5W9xFbFZE7tUB0jOIL6eSp6TELv4EuxC9UqPLld7N%2BSlUEeMGbjjE59PGj7JEROiC%2BJo7C%2Fc6g06REnLCOklON2FwqAYaylC83VvoEcHXckYoJeIFDJ0aEdLpZbg73GYkUYseahnvLKPgih%2BG%2FZbtrAZm6FyOI8Q%2BqAputkh%2F8%2FhQQVdgZww%2F%2BLtEdd3JCLlUUkEuD3dvWI1zWUeOU13eH%2BOZ&X-Amz-Signature=0be0b18b3e7c10ca29d827a20b9ec51aaaef5fa685cc2cc066e3346b2ebc65f4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6MPJZ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCQw%2F4mX03Vj3dZz8gVqYsrKlYqvpMB4VgdGP9%2FJUDTiAIhAKwxBd2IrQktLp8nNcAwlk1BTRLMm5s4p58juztVk9b5KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fp4yyTf9R0rAQCHAq3ANp5Ffg%2BDWlAiOHQdUMjGB8EI0SQy73T5tQRZJK51dixBz%2B2gdaEITlMEa6fAdWDyLRZ4%2FKZEktC2Ug7%2FB9GhfIigMk1SUWH30DEtl7c8WCkD7O8dXcgs4Bb49D20K8VBSpQcfiVQ%2BrByKQxDlTf08bNBL87wR%2BiMDME6wVEH1FDF4wH9ZddDDUKU8MJEFmx0ODPthlbrFkw%2BwrsXsQW9SOIXKlvJdmzHB0q4aaT2FtoKHKGYsW%2Bu7SpF3qpc1pkJBhKqlfkhhW0iSeN13AUAA1ujJY9BN7RV4hPlnUgWEyXHfb1vLen%2FeP9%2BS8rNMODdnVgmgkC5LICxaTtI2JAFsB%2B7PZhWBnAOSDkj5%2B7eSYPLn%2BaUdStdfF4YjTOZif%2BznvQgzYOrlkGguXitr0h8EjPCZ6k%2BjmiqxoCHUf56cbnyKKkqXb5NCx%2BqjoVuR3iXi7qIHgZuYq2GHZZjs8OA%2BuYQZPpmMLvU5D1n%2FCNV5X5ayxQ9%2F5ylJ2tvNYgRWIl%2BLrjCp7dR4xaLeI4VmejSatbZR734jRYlI7nGLR8mYfQCU0BAXtq7V3r2pjqjWYLk0oY4qeEt58nbto8xTEnVXtf2%2F77xPLpUFd0I6kToob57L2VO65tlbs36WuNzCb8tLABjqkATc5W9xFbFZE7tUB0jOIL6eSp6TELv4EuxC9UqPLld7N%2BSlUEeMGbjjE59PGj7JEROiC%2BJo7C%2Fc6g06REnLCOklON2FwqAYaylC83VvoEcHXckYoJeIFDJ0aEdLpZbg73GYkUYseahnvLKPgih%2BG%2FZbtrAZm6FyOI8Q%2BqAputkh%2F8%2FhQQVdgZww%2F%2BLtEdd3JCLlUUkEuD3dvWI1zWUeOU13eH%2BOZ&X-Amz-Signature=ede03a23db36867ba05ed7319e204fd6700f47bdcf14c7856976bf1c864e55be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6MPJZ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCQw%2F4mX03Vj3dZz8gVqYsrKlYqvpMB4VgdGP9%2FJUDTiAIhAKwxBd2IrQktLp8nNcAwlk1BTRLMm5s4p58juztVk9b5KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fp4yyTf9R0rAQCHAq3ANp5Ffg%2BDWlAiOHQdUMjGB8EI0SQy73T5tQRZJK51dixBz%2B2gdaEITlMEa6fAdWDyLRZ4%2FKZEktC2Ug7%2FB9GhfIigMk1SUWH30DEtl7c8WCkD7O8dXcgs4Bb49D20K8VBSpQcfiVQ%2BrByKQxDlTf08bNBL87wR%2BiMDME6wVEH1FDF4wH9ZddDDUKU8MJEFmx0ODPthlbrFkw%2BwrsXsQW9SOIXKlvJdmzHB0q4aaT2FtoKHKGYsW%2Bu7SpF3qpc1pkJBhKqlfkhhW0iSeN13AUAA1ujJY9BN7RV4hPlnUgWEyXHfb1vLen%2FeP9%2BS8rNMODdnVgmgkC5LICxaTtI2JAFsB%2B7PZhWBnAOSDkj5%2B7eSYPLn%2BaUdStdfF4YjTOZif%2BznvQgzYOrlkGguXitr0h8EjPCZ6k%2BjmiqxoCHUf56cbnyKKkqXb5NCx%2BqjoVuR3iXi7qIHgZuYq2GHZZjs8OA%2BuYQZPpmMLvU5D1n%2FCNV5X5ayxQ9%2F5ylJ2tvNYgRWIl%2BLrjCp7dR4xaLeI4VmejSatbZR734jRYlI7nGLR8mYfQCU0BAXtq7V3r2pjqjWYLk0oY4qeEt58nbto8xTEnVXtf2%2F77xPLpUFd0I6kToob57L2VO65tlbs36WuNzCb8tLABjqkATc5W9xFbFZE7tUB0jOIL6eSp6TELv4EuxC9UqPLld7N%2BSlUEeMGbjjE59PGj7JEROiC%2BJo7C%2Fc6g06REnLCOklON2FwqAYaylC83VvoEcHXckYoJeIFDJ0aEdLpZbg73GYkUYseahnvLKPgih%2BG%2FZbtrAZm6FyOI8Q%2BqAputkh%2F8%2FhQQVdgZww%2F%2BLtEdd3JCLlUUkEuD3dvWI1zWUeOU13eH%2BOZ&X-Amz-Signature=d8465dbc29269abe4a9705401d1297dedfb47931e696bd35c03170cf078a329c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6MPJZ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCQw%2F4mX03Vj3dZz8gVqYsrKlYqvpMB4VgdGP9%2FJUDTiAIhAKwxBd2IrQktLp8nNcAwlk1BTRLMm5s4p58juztVk9b5KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fp4yyTf9R0rAQCHAq3ANp5Ffg%2BDWlAiOHQdUMjGB8EI0SQy73T5tQRZJK51dixBz%2B2gdaEITlMEa6fAdWDyLRZ4%2FKZEktC2Ug7%2FB9GhfIigMk1SUWH30DEtl7c8WCkD7O8dXcgs4Bb49D20K8VBSpQcfiVQ%2BrByKQxDlTf08bNBL87wR%2BiMDME6wVEH1FDF4wH9ZddDDUKU8MJEFmx0ODPthlbrFkw%2BwrsXsQW9SOIXKlvJdmzHB0q4aaT2FtoKHKGYsW%2Bu7SpF3qpc1pkJBhKqlfkhhW0iSeN13AUAA1ujJY9BN7RV4hPlnUgWEyXHfb1vLen%2FeP9%2BS8rNMODdnVgmgkC5LICxaTtI2JAFsB%2B7PZhWBnAOSDkj5%2B7eSYPLn%2BaUdStdfF4YjTOZif%2BznvQgzYOrlkGguXitr0h8EjPCZ6k%2BjmiqxoCHUf56cbnyKKkqXb5NCx%2BqjoVuR3iXi7qIHgZuYq2GHZZjs8OA%2BuYQZPpmMLvU5D1n%2FCNV5X5ayxQ9%2F5ylJ2tvNYgRWIl%2BLrjCp7dR4xaLeI4VmejSatbZR734jRYlI7nGLR8mYfQCU0BAXtq7V3r2pjqjWYLk0oY4qeEt58nbto8xTEnVXtf2%2F77xPLpUFd0I6kToob57L2VO65tlbs36WuNzCb8tLABjqkATc5W9xFbFZE7tUB0jOIL6eSp6TELv4EuxC9UqPLld7N%2BSlUEeMGbjjE59PGj7JEROiC%2BJo7C%2Fc6g06REnLCOklON2FwqAYaylC83VvoEcHXckYoJeIFDJ0aEdLpZbg73GYkUYseahnvLKPgih%2BG%2FZbtrAZm6FyOI8Q%2BqAputkh%2F8%2FhQQVdgZww%2F%2BLtEdd3JCLlUUkEuD3dvWI1zWUeOU13eH%2BOZ&X-Amz-Signature=b77b5e87434734b3f03b5dd10b91a621348296dc792d02c95500a3e9a3422d19&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
