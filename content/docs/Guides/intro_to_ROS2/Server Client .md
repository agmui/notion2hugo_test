---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LLNFOX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH4%2BRoqGyL%2Fr1ldQ9SobatKW5qlD%2FB7qA6ottkRcMi7oAiBTj8l1KChDFxFWKeXWYqJ2cqHEj7LAfNYBCTmADoORXyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMn%2BZOHGu8CUa5ciXeKtwDBcrvM5pcUxHffGYcF3ZLLOTHXaGC86oSyoP8Bl8pAvvufnqSJzsIiNvIe6amFH3S%2BJ61%2BTa13N3hmKjiVnYsUwqOfMNhVbABvdrHwQ8RxSe3%2B0EWYcSTNT28H7aSaL1sTDX2gMK4nP8ojVvtPtEK26trPoiBB5zYU8uN4mFwLCHhNY%2Fx7XpP1kXzXTlIoIRpiw01N%2FHp3nreT9NUKxp9bd4KGKRm0he5kgEdf44h5xRmyKXFYNsk5m3pSsDej2dakmC6c4JoaRkAub8I%2BowbR9YNIs%2FoGeDAG8brTH%2FqZpUTWyDTWzeZYxfz2EVUza%2BaqMCLUJEJe8LFJXqHvtsmBRKjECry5D7YAWrw0Iv9ekPGjP0VHZZf8CequT%2BBXkncFvWLA0JLA5phMzoUm3US40%2FNRchv2%2Fjk7bGumfFpD40gHdliMHpvJq6GIaNrWo5EDS%2FNjSeGuBcUFM%2BJDhFkvcYE8VjilKIuKt2maaDQ01%2BsObtJzuW6G6Xr3SOS%2B0loB9JcP9zWS1SvRI7v2r0PGvNmR1m4xeaq2%2BaSmxWaTNx%2BN6OvOyqyjT7Bx0eB4QaTreASDqgM%2Ba7JPwnD2oEzYnEeWeOQWo1qKGceER2bs7Jbamat3pIK%2Bi1niWUwkY7PxAY6pgELXi5owlQjcqjIwX5AyX99WBgkDSsr3y6R5ezjmeRsiS2gLzMXVDsd3k%2BdbTnaK1QywvOH3nhJZQMdx1ogW7%2BgCH2EhLih0krQBweCqY3tKBxiTtALBub9WfPbmSc8%2B9SyCUDnObssuYzXpek0jzYB2%2F5ppcOhIm0IKQeaheKELUUTJZTX43dxxEoqQVgyT6lqFFtngMv%2FCgQciJya1ooRS4IsEjXj&X-Amz-Signature=3d57879454aa80739f0ecc6137f3159e098883283c9de65f613a919bce228a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LLNFOX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH4%2BRoqGyL%2Fr1ldQ9SobatKW5qlD%2FB7qA6ottkRcMi7oAiBTj8l1KChDFxFWKeXWYqJ2cqHEj7LAfNYBCTmADoORXyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMn%2BZOHGu8CUa5ciXeKtwDBcrvM5pcUxHffGYcF3ZLLOTHXaGC86oSyoP8Bl8pAvvufnqSJzsIiNvIe6amFH3S%2BJ61%2BTa13N3hmKjiVnYsUwqOfMNhVbABvdrHwQ8RxSe3%2B0EWYcSTNT28H7aSaL1sTDX2gMK4nP8ojVvtPtEK26trPoiBB5zYU8uN4mFwLCHhNY%2Fx7XpP1kXzXTlIoIRpiw01N%2FHp3nreT9NUKxp9bd4KGKRm0he5kgEdf44h5xRmyKXFYNsk5m3pSsDej2dakmC6c4JoaRkAub8I%2BowbR9YNIs%2FoGeDAG8brTH%2FqZpUTWyDTWzeZYxfz2EVUza%2BaqMCLUJEJe8LFJXqHvtsmBRKjECry5D7YAWrw0Iv9ekPGjP0VHZZf8CequT%2BBXkncFvWLA0JLA5phMzoUm3US40%2FNRchv2%2Fjk7bGumfFpD40gHdliMHpvJq6GIaNrWo5EDS%2FNjSeGuBcUFM%2BJDhFkvcYE8VjilKIuKt2maaDQ01%2BsObtJzuW6G6Xr3SOS%2B0loB9JcP9zWS1SvRI7v2r0PGvNmR1m4xeaq2%2BaSmxWaTNx%2BN6OvOyqyjT7Bx0eB4QaTreASDqgM%2Ba7JPwnD2oEzYnEeWeOQWo1qKGceER2bs7Jbamat3pIK%2Bi1niWUwkY7PxAY6pgELXi5owlQjcqjIwX5AyX99WBgkDSsr3y6R5ezjmeRsiS2gLzMXVDsd3k%2BdbTnaK1QywvOH3nhJZQMdx1ogW7%2BgCH2EhLih0krQBweCqY3tKBxiTtALBub9WfPbmSc8%2B9SyCUDnObssuYzXpek0jzYB2%2F5ppcOhIm0IKQeaheKELUUTJZTX43dxxEoqQVgyT6lqFFtngMv%2FCgQciJya1ooRS4IsEjXj&X-Amz-Signature=467261d840261a23cb921781006ce314d47b56d9eda6fc0b60f4f476d6a33826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LLNFOX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH4%2BRoqGyL%2Fr1ldQ9SobatKW5qlD%2FB7qA6ottkRcMi7oAiBTj8l1KChDFxFWKeXWYqJ2cqHEj7LAfNYBCTmADoORXyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMn%2BZOHGu8CUa5ciXeKtwDBcrvM5pcUxHffGYcF3ZLLOTHXaGC86oSyoP8Bl8pAvvufnqSJzsIiNvIe6amFH3S%2BJ61%2BTa13N3hmKjiVnYsUwqOfMNhVbABvdrHwQ8RxSe3%2B0EWYcSTNT28H7aSaL1sTDX2gMK4nP8ojVvtPtEK26trPoiBB5zYU8uN4mFwLCHhNY%2Fx7XpP1kXzXTlIoIRpiw01N%2FHp3nreT9NUKxp9bd4KGKRm0he5kgEdf44h5xRmyKXFYNsk5m3pSsDej2dakmC6c4JoaRkAub8I%2BowbR9YNIs%2FoGeDAG8brTH%2FqZpUTWyDTWzeZYxfz2EVUza%2BaqMCLUJEJe8LFJXqHvtsmBRKjECry5D7YAWrw0Iv9ekPGjP0VHZZf8CequT%2BBXkncFvWLA0JLA5phMzoUm3US40%2FNRchv2%2Fjk7bGumfFpD40gHdliMHpvJq6GIaNrWo5EDS%2FNjSeGuBcUFM%2BJDhFkvcYE8VjilKIuKt2maaDQ01%2BsObtJzuW6G6Xr3SOS%2B0loB9JcP9zWS1SvRI7v2r0PGvNmR1m4xeaq2%2BaSmxWaTNx%2BN6OvOyqyjT7Bx0eB4QaTreASDqgM%2Ba7JPwnD2oEzYnEeWeOQWo1qKGceER2bs7Jbamat3pIK%2Bi1niWUwkY7PxAY6pgELXi5owlQjcqjIwX5AyX99WBgkDSsr3y6R5ezjmeRsiS2gLzMXVDsd3k%2BdbTnaK1QywvOH3nhJZQMdx1ogW7%2BgCH2EhLih0krQBweCqY3tKBxiTtALBub9WfPbmSc8%2B9SyCUDnObssuYzXpek0jzYB2%2F5ppcOhIm0IKQeaheKELUUTJZTX43dxxEoqQVgyT6lqFFtngMv%2FCgQciJya1ooRS4IsEjXj&X-Amz-Signature=de67c48211a4806f1441fc39f6b317c2e7adbbb25976923101a84a969ac81333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LLNFOX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH4%2BRoqGyL%2Fr1ldQ9SobatKW5qlD%2FB7qA6ottkRcMi7oAiBTj8l1KChDFxFWKeXWYqJ2cqHEj7LAfNYBCTmADoORXyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMn%2BZOHGu8CUa5ciXeKtwDBcrvM5pcUxHffGYcF3ZLLOTHXaGC86oSyoP8Bl8pAvvufnqSJzsIiNvIe6amFH3S%2BJ61%2BTa13N3hmKjiVnYsUwqOfMNhVbABvdrHwQ8RxSe3%2B0EWYcSTNT28H7aSaL1sTDX2gMK4nP8ojVvtPtEK26trPoiBB5zYU8uN4mFwLCHhNY%2Fx7XpP1kXzXTlIoIRpiw01N%2FHp3nreT9NUKxp9bd4KGKRm0he5kgEdf44h5xRmyKXFYNsk5m3pSsDej2dakmC6c4JoaRkAub8I%2BowbR9YNIs%2FoGeDAG8brTH%2FqZpUTWyDTWzeZYxfz2EVUza%2BaqMCLUJEJe8LFJXqHvtsmBRKjECry5D7YAWrw0Iv9ekPGjP0VHZZf8CequT%2BBXkncFvWLA0JLA5phMzoUm3US40%2FNRchv2%2Fjk7bGumfFpD40gHdliMHpvJq6GIaNrWo5EDS%2FNjSeGuBcUFM%2BJDhFkvcYE8VjilKIuKt2maaDQ01%2BsObtJzuW6G6Xr3SOS%2B0loB9JcP9zWS1SvRI7v2r0PGvNmR1m4xeaq2%2BaSmxWaTNx%2BN6OvOyqyjT7Bx0eB4QaTreASDqgM%2Ba7JPwnD2oEzYnEeWeOQWo1qKGceER2bs7Jbamat3pIK%2Bi1niWUwkY7PxAY6pgELXi5owlQjcqjIwX5AyX99WBgkDSsr3y6R5ezjmeRsiS2gLzMXVDsd3k%2BdbTnaK1QywvOH3nhJZQMdx1ogW7%2BgCH2EhLih0krQBweCqY3tKBxiTtALBub9WfPbmSc8%2B9SyCUDnObssuYzXpek0jzYB2%2F5ppcOhIm0IKQeaheKELUUTJZTX43dxxEoqQVgyT6lqFFtngMv%2FCgQciJya1ooRS4IsEjXj&X-Amz-Signature=c293fc3b3c82a68dd87e175a110c9a8fd3b01c7fc8fa48bd22680dd4ffc3fb9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LLNFOX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH4%2BRoqGyL%2Fr1ldQ9SobatKW5qlD%2FB7qA6ottkRcMi7oAiBTj8l1KChDFxFWKeXWYqJ2cqHEj7LAfNYBCTmADoORXyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMn%2BZOHGu8CUa5ciXeKtwDBcrvM5pcUxHffGYcF3ZLLOTHXaGC86oSyoP8Bl8pAvvufnqSJzsIiNvIe6amFH3S%2BJ61%2BTa13N3hmKjiVnYsUwqOfMNhVbABvdrHwQ8RxSe3%2B0EWYcSTNT28H7aSaL1sTDX2gMK4nP8ojVvtPtEK26trPoiBB5zYU8uN4mFwLCHhNY%2Fx7XpP1kXzXTlIoIRpiw01N%2FHp3nreT9NUKxp9bd4KGKRm0he5kgEdf44h5xRmyKXFYNsk5m3pSsDej2dakmC6c4JoaRkAub8I%2BowbR9YNIs%2FoGeDAG8brTH%2FqZpUTWyDTWzeZYxfz2EVUza%2BaqMCLUJEJe8LFJXqHvtsmBRKjECry5D7YAWrw0Iv9ekPGjP0VHZZf8CequT%2BBXkncFvWLA0JLA5phMzoUm3US40%2FNRchv2%2Fjk7bGumfFpD40gHdliMHpvJq6GIaNrWo5EDS%2FNjSeGuBcUFM%2BJDhFkvcYE8VjilKIuKt2maaDQ01%2BsObtJzuW6G6Xr3SOS%2B0loB9JcP9zWS1SvRI7v2r0PGvNmR1m4xeaq2%2BaSmxWaTNx%2BN6OvOyqyjT7Bx0eB4QaTreASDqgM%2Ba7JPwnD2oEzYnEeWeOQWo1qKGceER2bs7Jbamat3pIK%2Bi1niWUwkY7PxAY6pgELXi5owlQjcqjIwX5AyX99WBgkDSsr3y6R5ezjmeRsiS2gLzMXVDsd3k%2BdbTnaK1QywvOH3nhJZQMdx1ogW7%2BgCH2EhLih0krQBweCqY3tKBxiTtALBub9WfPbmSc8%2B9SyCUDnObssuYzXpek0jzYB2%2F5ppcOhIm0IKQeaheKELUUTJZTX43dxxEoqQVgyT6lqFFtngMv%2FCgQciJya1ooRS4IsEjXj&X-Amz-Signature=b97a5f04a7e1c6687567372567ab63ceb125ca5c17755e49c150a6b776a15001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
