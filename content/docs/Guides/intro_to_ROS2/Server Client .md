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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSZEQZ6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDWE6%2BaOzLzrjJ%2FN2eoA54OycPUvIuODcvauyt6yShRDgIgJ6JTligdBD3%2FdQ3olmarcQF1XDDa%2FRntYQ4O2DZpGYcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoXrnGaxMMLxVFvKyrcAxf%2Fq9HuOUG8ncjOhwLclOFFX6Ajsg1s0TgnjjldPNc0Ue6yOHUqzl9MYLv7%2BdqIPhNg6E12o5DJ4RBpS1p3hmf%2FWOUVSVRjQ2g5d8LzxyxLzF%2FGQFYkXFhkBjOeWvrJJkllV6BTSViDy4qkKuwVSIFp33Qlt9RvJeRm3efxx7mPy7VaBSEHd%2FoqZqS9ad6FVnDIunXerudD%2Bz7Ca6Ot1zp6swMmEg%2BfvIIinzY1IsjfdMlBrpYa0d%2FJjSZYnx8iqZAyX%2BDpUjO08%2BRbeuWEhJlyqcjrZlTWPO0Wl%2FCQddgX%2BckQS2%2B7Sa%2F12Xqsl5SqhhLaUh55ga8WCYSiRW%2BoBGTBbDVI66E243%2FEDyLuMpJVdGHvQE9fAfG5423wa3wKQKJilM4Ljp4UpqOpnDK7dmXdn%2FK%2B%2BfO3sDVDAD1THyYPbgItJA2WSFEoEIdnne6%2BY3re65EHHTbLyZzc7oek3DomyfHNQZYeUKtw3HtfMDDsCDxKX8dYwXiqn2Fg7ELt98ycMw7lcY3Jjlqd5lIPZdMDfTTlDjCGVkG52SZVu0y6HoLMJJVt1aZSqdRMQX5XFa2AxPwGlsCo37iYuEoKZIs0ZPhZZI4tTcJmUe2nlHWdAjWR5N687JhQButOMM6H0cAGOqUBCZihZxi%2Bp3awG7rGqjx3Tz%2FBcgaFRlvPYSPAc4kOLjTzSB9OhgccfvgdHpVq5RojkZ7l1WU5gVvIsL4S4AyPzWGht2%2Bqgxm0xMgVYypVKUtOICfCwUZXI0hg18%2Bzeeq3xgsik0xOjLY2FBMUOU3UEmQ1jJTqBTV3696TBwLI12qyrbH6gOHUr1WozgLC%2FlC968Rbt1a5An%2BkJ6LYqYIedfU4tybO&X-Amz-Signature=2388b240f4642542e4cf639ccfcce5901073e8c70733cf0c144986692b90616f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSZEQZ6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDWE6%2BaOzLzrjJ%2FN2eoA54OycPUvIuODcvauyt6yShRDgIgJ6JTligdBD3%2FdQ3olmarcQF1XDDa%2FRntYQ4O2DZpGYcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoXrnGaxMMLxVFvKyrcAxf%2Fq9HuOUG8ncjOhwLclOFFX6Ajsg1s0TgnjjldPNc0Ue6yOHUqzl9MYLv7%2BdqIPhNg6E12o5DJ4RBpS1p3hmf%2FWOUVSVRjQ2g5d8LzxyxLzF%2FGQFYkXFhkBjOeWvrJJkllV6BTSViDy4qkKuwVSIFp33Qlt9RvJeRm3efxx7mPy7VaBSEHd%2FoqZqS9ad6FVnDIunXerudD%2Bz7Ca6Ot1zp6swMmEg%2BfvIIinzY1IsjfdMlBrpYa0d%2FJjSZYnx8iqZAyX%2BDpUjO08%2BRbeuWEhJlyqcjrZlTWPO0Wl%2FCQddgX%2BckQS2%2B7Sa%2F12Xqsl5SqhhLaUh55ga8WCYSiRW%2BoBGTBbDVI66E243%2FEDyLuMpJVdGHvQE9fAfG5423wa3wKQKJilM4Ljp4UpqOpnDK7dmXdn%2FK%2B%2BfO3sDVDAD1THyYPbgItJA2WSFEoEIdnne6%2BY3re65EHHTbLyZzc7oek3DomyfHNQZYeUKtw3HtfMDDsCDxKX8dYwXiqn2Fg7ELt98ycMw7lcY3Jjlqd5lIPZdMDfTTlDjCGVkG52SZVu0y6HoLMJJVt1aZSqdRMQX5XFa2AxPwGlsCo37iYuEoKZIs0ZPhZZI4tTcJmUe2nlHWdAjWR5N687JhQButOMM6H0cAGOqUBCZihZxi%2Bp3awG7rGqjx3Tz%2FBcgaFRlvPYSPAc4kOLjTzSB9OhgccfvgdHpVq5RojkZ7l1WU5gVvIsL4S4AyPzWGht2%2Bqgxm0xMgVYypVKUtOICfCwUZXI0hg18%2Bzeeq3xgsik0xOjLY2FBMUOU3UEmQ1jJTqBTV3696TBwLI12qyrbH6gOHUr1WozgLC%2FlC968Rbt1a5An%2BkJ6LYqYIedfU4tybO&X-Amz-Signature=a0785c6756c6b183595fac5f77a193b2c558ea0b6d0692eee52513254d708324&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSZEQZ6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDWE6%2BaOzLzrjJ%2FN2eoA54OycPUvIuODcvauyt6yShRDgIgJ6JTligdBD3%2FdQ3olmarcQF1XDDa%2FRntYQ4O2DZpGYcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoXrnGaxMMLxVFvKyrcAxf%2Fq9HuOUG8ncjOhwLclOFFX6Ajsg1s0TgnjjldPNc0Ue6yOHUqzl9MYLv7%2BdqIPhNg6E12o5DJ4RBpS1p3hmf%2FWOUVSVRjQ2g5d8LzxyxLzF%2FGQFYkXFhkBjOeWvrJJkllV6BTSViDy4qkKuwVSIFp33Qlt9RvJeRm3efxx7mPy7VaBSEHd%2FoqZqS9ad6FVnDIunXerudD%2Bz7Ca6Ot1zp6swMmEg%2BfvIIinzY1IsjfdMlBrpYa0d%2FJjSZYnx8iqZAyX%2BDpUjO08%2BRbeuWEhJlyqcjrZlTWPO0Wl%2FCQddgX%2BckQS2%2B7Sa%2F12Xqsl5SqhhLaUh55ga8WCYSiRW%2BoBGTBbDVI66E243%2FEDyLuMpJVdGHvQE9fAfG5423wa3wKQKJilM4Ljp4UpqOpnDK7dmXdn%2FK%2B%2BfO3sDVDAD1THyYPbgItJA2WSFEoEIdnne6%2BY3re65EHHTbLyZzc7oek3DomyfHNQZYeUKtw3HtfMDDsCDxKX8dYwXiqn2Fg7ELt98ycMw7lcY3Jjlqd5lIPZdMDfTTlDjCGVkG52SZVu0y6HoLMJJVt1aZSqdRMQX5XFa2AxPwGlsCo37iYuEoKZIs0ZPhZZI4tTcJmUe2nlHWdAjWR5N687JhQButOMM6H0cAGOqUBCZihZxi%2Bp3awG7rGqjx3Tz%2FBcgaFRlvPYSPAc4kOLjTzSB9OhgccfvgdHpVq5RojkZ7l1WU5gVvIsL4S4AyPzWGht2%2Bqgxm0xMgVYypVKUtOICfCwUZXI0hg18%2Bzeeq3xgsik0xOjLY2FBMUOU3UEmQ1jJTqBTV3696TBwLI12qyrbH6gOHUr1WozgLC%2FlC968Rbt1a5An%2BkJ6LYqYIedfU4tybO&X-Amz-Signature=f3b492701ce4b003d0835b7da1804576ca29d29d4f9bce422ff7f97799519e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSZEQZ6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDWE6%2BaOzLzrjJ%2FN2eoA54OycPUvIuODcvauyt6yShRDgIgJ6JTligdBD3%2FdQ3olmarcQF1XDDa%2FRntYQ4O2DZpGYcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoXrnGaxMMLxVFvKyrcAxf%2Fq9HuOUG8ncjOhwLclOFFX6Ajsg1s0TgnjjldPNc0Ue6yOHUqzl9MYLv7%2BdqIPhNg6E12o5DJ4RBpS1p3hmf%2FWOUVSVRjQ2g5d8LzxyxLzF%2FGQFYkXFhkBjOeWvrJJkllV6BTSViDy4qkKuwVSIFp33Qlt9RvJeRm3efxx7mPy7VaBSEHd%2FoqZqS9ad6FVnDIunXerudD%2Bz7Ca6Ot1zp6swMmEg%2BfvIIinzY1IsjfdMlBrpYa0d%2FJjSZYnx8iqZAyX%2BDpUjO08%2BRbeuWEhJlyqcjrZlTWPO0Wl%2FCQddgX%2BckQS2%2B7Sa%2F12Xqsl5SqhhLaUh55ga8WCYSiRW%2BoBGTBbDVI66E243%2FEDyLuMpJVdGHvQE9fAfG5423wa3wKQKJilM4Ljp4UpqOpnDK7dmXdn%2FK%2B%2BfO3sDVDAD1THyYPbgItJA2WSFEoEIdnne6%2BY3re65EHHTbLyZzc7oek3DomyfHNQZYeUKtw3HtfMDDsCDxKX8dYwXiqn2Fg7ELt98ycMw7lcY3Jjlqd5lIPZdMDfTTlDjCGVkG52SZVu0y6HoLMJJVt1aZSqdRMQX5XFa2AxPwGlsCo37iYuEoKZIs0ZPhZZI4tTcJmUe2nlHWdAjWR5N687JhQButOMM6H0cAGOqUBCZihZxi%2Bp3awG7rGqjx3Tz%2FBcgaFRlvPYSPAc4kOLjTzSB9OhgccfvgdHpVq5RojkZ7l1WU5gVvIsL4S4AyPzWGht2%2Bqgxm0xMgVYypVKUtOICfCwUZXI0hg18%2Bzeeq3xgsik0xOjLY2FBMUOU3UEmQ1jJTqBTV3696TBwLI12qyrbH6gOHUr1WozgLC%2FlC968Rbt1a5An%2BkJ6LYqYIedfU4tybO&X-Amz-Signature=678ac2935740caa87c4cfc8724d64dd6f6306efb784f8293a2ee44fbfb4d9b30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSZEQZ6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDWE6%2BaOzLzrjJ%2FN2eoA54OycPUvIuODcvauyt6yShRDgIgJ6JTligdBD3%2FdQ3olmarcQF1XDDa%2FRntYQ4O2DZpGYcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoXrnGaxMMLxVFvKyrcAxf%2Fq9HuOUG8ncjOhwLclOFFX6Ajsg1s0TgnjjldPNc0Ue6yOHUqzl9MYLv7%2BdqIPhNg6E12o5DJ4RBpS1p3hmf%2FWOUVSVRjQ2g5d8LzxyxLzF%2FGQFYkXFhkBjOeWvrJJkllV6BTSViDy4qkKuwVSIFp33Qlt9RvJeRm3efxx7mPy7VaBSEHd%2FoqZqS9ad6FVnDIunXerudD%2Bz7Ca6Ot1zp6swMmEg%2BfvIIinzY1IsjfdMlBrpYa0d%2FJjSZYnx8iqZAyX%2BDpUjO08%2BRbeuWEhJlyqcjrZlTWPO0Wl%2FCQddgX%2BckQS2%2B7Sa%2F12Xqsl5SqhhLaUh55ga8WCYSiRW%2BoBGTBbDVI66E243%2FEDyLuMpJVdGHvQE9fAfG5423wa3wKQKJilM4Ljp4UpqOpnDK7dmXdn%2FK%2B%2BfO3sDVDAD1THyYPbgItJA2WSFEoEIdnne6%2BY3re65EHHTbLyZzc7oek3DomyfHNQZYeUKtw3HtfMDDsCDxKX8dYwXiqn2Fg7ELt98ycMw7lcY3Jjlqd5lIPZdMDfTTlDjCGVkG52SZVu0y6HoLMJJVt1aZSqdRMQX5XFa2AxPwGlsCo37iYuEoKZIs0ZPhZZI4tTcJmUe2nlHWdAjWR5N687JhQButOMM6H0cAGOqUBCZihZxi%2Bp3awG7rGqjx3Tz%2FBcgaFRlvPYSPAc4kOLjTzSB9OhgccfvgdHpVq5RojkZ7l1WU5gVvIsL4S4AyPzWGht2%2Bqgxm0xMgVYypVKUtOICfCwUZXI0hg18%2Bzeeq3xgsik0xOjLY2FBMUOU3UEmQ1jJTqBTV3696TBwLI12qyrbH6gOHUr1WozgLC%2FlC968Rbt1a5An%2BkJ6LYqYIedfU4tybO&X-Amz-Signature=0334edf371aca3bc4a029824e8923eeb8a061a4f3bafc812418eb969fb4f9d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
