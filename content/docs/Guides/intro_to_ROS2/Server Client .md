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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKF7ADL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAETdZcPzzgczNb7AkwIraanDCmKKVhWu%2Ftt8p%2BYZSuUAiEAoXuI5QscAb1Imqle5An69nnx2%2BhQqDDza6oaswMCbfMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2uv3RvhzRiXOQ3nircA75HSDQpvAd3CaqMlAEcuCvKj4QTTzGhcM6HKYv7acmsGC65DKddShPZ7AKGzN0lTsZnJmnmDDYOXSH4iZxBAydekmiWMTMpM9zcD1jCvLoOI8qt83QjTNzZmnKjQDvsy80IQWO4ukTEg%2FPEE3st%2FpYLWt7CvYgaJ%2BK1kjgUGuF7zigRlLuzVAjiaLNrwmFHQOQ9fdXneisENA0d8F6JLcnXPjyXF%2FUkmJm5YMAgZvzxZ4MAsEt99wjXHGxWDYRG7RC7kh3jc9SkMURgktn5DhAv5zJeMMvKjweYMkVZ9dHPpV72FXuO9HXuWkYntk%2BcNXtKkEgouJ%2Bt0PEq76URMy9NGRYg3zwT%2FQQElkeR30ufRuQO6H96WES0lrm4qrxZBQ9UVGtbCWo4zjTckuTMR96clEiRjuz6Ne1A%2Bk%2BCiqvk43gsYLoTmgE96ZlS6tUKk1dYvtVKo8xXs6tbdc6y5DL%2FkA65oHX17LJjtXp16nsqXoopwQJvXLuZQteZFfnAzsJYQ%2FUUychrmD2k05yowI4XnZUj8GDHxcaNPFKX778ZxwTOwYJKJ2%2F6WVBp0OS1Uf5uCptPaKp6o3uL%2Bx5xTXOBuravsEa18TOdIJrIn%2FpnXYIKO9LnoOk3NlL4MNy1xsMGOqUBnBsmxlqQVAfGrieT2Qglfr6rUoN%2BfOO3ccQtmc%2FOgPKUBsM3fNq%2Fipqn90w4nx9YZx1rHWYaX194FnDialyCVHUQEIpDsqRepb4bJmG0BnwDrw7kAbRjAtqsx%2Bg1XH3dWWq6RxRTbPdYSPy5Ct3AoeUsuSYKJ9RChN1l%2FqG0Wabbcqae0LUrBcv7GzC5XZzkwikS9DjeVXFmf%2BUGcnRQJCB9gbyD&X-Amz-Signature=8bb1a4ff706cfa2f1143cefb373ec5b9d66b54caba28b7aa6d9e3e615eccd06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKF7ADL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAETdZcPzzgczNb7AkwIraanDCmKKVhWu%2Ftt8p%2BYZSuUAiEAoXuI5QscAb1Imqle5An69nnx2%2BhQqDDza6oaswMCbfMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2uv3RvhzRiXOQ3nircA75HSDQpvAd3CaqMlAEcuCvKj4QTTzGhcM6HKYv7acmsGC65DKddShPZ7AKGzN0lTsZnJmnmDDYOXSH4iZxBAydekmiWMTMpM9zcD1jCvLoOI8qt83QjTNzZmnKjQDvsy80IQWO4ukTEg%2FPEE3st%2FpYLWt7CvYgaJ%2BK1kjgUGuF7zigRlLuzVAjiaLNrwmFHQOQ9fdXneisENA0d8F6JLcnXPjyXF%2FUkmJm5YMAgZvzxZ4MAsEt99wjXHGxWDYRG7RC7kh3jc9SkMURgktn5DhAv5zJeMMvKjweYMkVZ9dHPpV72FXuO9HXuWkYntk%2BcNXtKkEgouJ%2Bt0PEq76URMy9NGRYg3zwT%2FQQElkeR30ufRuQO6H96WES0lrm4qrxZBQ9UVGtbCWo4zjTckuTMR96clEiRjuz6Ne1A%2Bk%2BCiqvk43gsYLoTmgE96ZlS6tUKk1dYvtVKo8xXs6tbdc6y5DL%2FkA65oHX17LJjtXp16nsqXoopwQJvXLuZQteZFfnAzsJYQ%2FUUychrmD2k05yowI4XnZUj8GDHxcaNPFKX778ZxwTOwYJKJ2%2F6WVBp0OS1Uf5uCptPaKp6o3uL%2Bx5xTXOBuravsEa18TOdIJrIn%2FpnXYIKO9LnoOk3NlL4MNy1xsMGOqUBnBsmxlqQVAfGrieT2Qglfr6rUoN%2BfOO3ccQtmc%2FOgPKUBsM3fNq%2Fipqn90w4nx9YZx1rHWYaX194FnDialyCVHUQEIpDsqRepb4bJmG0BnwDrw7kAbRjAtqsx%2Bg1XH3dWWq6RxRTbPdYSPy5Ct3AoeUsuSYKJ9RChN1l%2FqG0Wabbcqae0LUrBcv7GzC5XZzkwikS9DjeVXFmf%2BUGcnRQJCB9gbyD&X-Amz-Signature=5122a5c53ad7cddd7a1dce45a24b325af7940d7e879b0a06631f64b61860b506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKF7ADL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAETdZcPzzgczNb7AkwIraanDCmKKVhWu%2Ftt8p%2BYZSuUAiEAoXuI5QscAb1Imqle5An69nnx2%2BhQqDDza6oaswMCbfMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2uv3RvhzRiXOQ3nircA75HSDQpvAd3CaqMlAEcuCvKj4QTTzGhcM6HKYv7acmsGC65DKddShPZ7AKGzN0lTsZnJmnmDDYOXSH4iZxBAydekmiWMTMpM9zcD1jCvLoOI8qt83QjTNzZmnKjQDvsy80IQWO4ukTEg%2FPEE3st%2FpYLWt7CvYgaJ%2BK1kjgUGuF7zigRlLuzVAjiaLNrwmFHQOQ9fdXneisENA0d8F6JLcnXPjyXF%2FUkmJm5YMAgZvzxZ4MAsEt99wjXHGxWDYRG7RC7kh3jc9SkMURgktn5DhAv5zJeMMvKjweYMkVZ9dHPpV72FXuO9HXuWkYntk%2BcNXtKkEgouJ%2Bt0PEq76URMy9NGRYg3zwT%2FQQElkeR30ufRuQO6H96WES0lrm4qrxZBQ9UVGtbCWo4zjTckuTMR96clEiRjuz6Ne1A%2Bk%2BCiqvk43gsYLoTmgE96ZlS6tUKk1dYvtVKo8xXs6tbdc6y5DL%2FkA65oHX17LJjtXp16nsqXoopwQJvXLuZQteZFfnAzsJYQ%2FUUychrmD2k05yowI4XnZUj8GDHxcaNPFKX778ZxwTOwYJKJ2%2F6WVBp0OS1Uf5uCptPaKp6o3uL%2Bx5xTXOBuravsEa18TOdIJrIn%2FpnXYIKO9LnoOk3NlL4MNy1xsMGOqUBnBsmxlqQVAfGrieT2Qglfr6rUoN%2BfOO3ccQtmc%2FOgPKUBsM3fNq%2Fipqn90w4nx9YZx1rHWYaX194FnDialyCVHUQEIpDsqRepb4bJmG0BnwDrw7kAbRjAtqsx%2Bg1XH3dWWq6RxRTbPdYSPy5Ct3AoeUsuSYKJ9RChN1l%2FqG0Wabbcqae0LUrBcv7GzC5XZzkwikS9DjeVXFmf%2BUGcnRQJCB9gbyD&X-Amz-Signature=b516e9f6dfb8b73e13f8d1988492150ad0ee8371f831e84e9277630b5ca9adec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKF7ADL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAETdZcPzzgczNb7AkwIraanDCmKKVhWu%2Ftt8p%2BYZSuUAiEAoXuI5QscAb1Imqle5An69nnx2%2BhQqDDza6oaswMCbfMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2uv3RvhzRiXOQ3nircA75HSDQpvAd3CaqMlAEcuCvKj4QTTzGhcM6HKYv7acmsGC65DKddShPZ7AKGzN0lTsZnJmnmDDYOXSH4iZxBAydekmiWMTMpM9zcD1jCvLoOI8qt83QjTNzZmnKjQDvsy80IQWO4ukTEg%2FPEE3st%2FpYLWt7CvYgaJ%2BK1kjgUGuF7zigRlLuzVAjiaLNrwmFHQOQ9fdXneisENA0d8F6JLcnXPjyXF%2FUkmJm5YMAgZvzxZ4MAsEt99wjXHGxWDYRG7RC7kh3jc9SkMURgktn5DhAv5zJeMMvKjweYMkVZ9dHPpV72FXuO9HXuWkYntk%2BcNXtKkEgouJ%2Bt0PEq76URMy9NGRYg3zwT%2FQQElkeR30ufRuQO6H96WES0lrm4qrxZBQ9UVGtbCWo4zjTckuTMR96clEiRjuz6Ne1A%2Bk%2BCiqvk43gsYLoTmgE96ZlS6tUKk1dYvtVKo8xXs6tbdc6y5DL%2FkA65oHX17LJjtXp16nsqXoopwQJvXLuZQteZFfnAzsJYQ%2FUUychrmD2k05yowI4XnZUj8GDHxcaNPFKX778ZxwTOwYJKJ2%2F6WVBp0OS1Uf5uCptPaKp6o3uL%2Bx5xTXOBuravsEa18TOdIJrIn%2FpnXYIKO9LnoOk3NlL4MNy1xsMGOqUBnBsmxlqQVAfGrieT2Qglfr6rUoN%2BfOO3ccQtmc%2FOgPKUBsM3fNq%2Fipqn90w4nx9YZx1rHWYaX194FnDialyCVHUQEIpDsqRepb4bJmG0BnwDrw7kAbRjAtqsx%2Bg1XH3dWWq6RxRTbPdYSPy5Ct3AoeUsuSYKJ9RChN1l%2FqG0Wabbcqae0LUrBcv7GzC5XZzkwikS9DjeVXFmf%2BUGcnRQJCB9gbyD&X-Amz-Signature=1759035b8100ccbf62ef3165f9d3df644172d4be5af651d9560ac8730b4f6883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKF7ADL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAETdZcPzzgczNb7AkwIraanDCmKKVhWu%2Ftt8p%2BYZSuUAiEAoXuI5QscAb1Imqle5An69nnx2%2BhQqDDza6oaswMCbfMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2uv3RvhzRiXOQ3nircA75HSDQpvAd3CaqMlAEcuCvKj4QTTzGhcM6HKYv7acmsGC65DKddShPZ7AKGzN0lTsZnJmnmDDYOXSH4iZxBAydekmiWMTMpM9zcD1jCvLoOI8qt83QjTNzZmnKjQDvsy80IQWO4ukTEg%2FPEE3st%2FpYLWt7CvYgaJ%2BK1kjgUGuF7zigRlLuzVAjiaLNrwmFHQOQ9fdXneisENA0d8F6JLcnXPjyXF%2FUkmJm5YMAgZvzxZ4MAsEt99wjXHGxWDYRG7RC7kh3jc9SkMURgktn5DhAv5zJeMMvKjweYMkVZ9dHPpV72FXuO9HXuWkYntk%2BcNXtKkEgouJ%2Bt0PEq76URMy9NGRYg3zwT%2FQQElkeR30ufRuQO6H96WES0lrm4qrxZBQ9UVGtbCWo4zjTckuTMR96clEiRjuz6Ne1A%2Bk%2BCiqvk43gsYLoTmgE96ZlS6tUKk1dYvtVKo8xXs6tbdc6y5DL%2FkA65oHX17LJjtXp16nsqXoopwQJvXLuZQteZFfnAzsJYQ%2FUUychrmD2k05yowI4XnZUj8GDHxcaNPFKX778ZxwTOwYJKJ2%2F6WVBp0OS1Uf5uCptPaKp6o3uL%2Bx5xTXOBuravsEa18TOdIJrIn%2FpnXYIKO9LnoOk3NlL4MNy1xsMGOqUBnBsmxlqQVAfGrieT2Qglfr6rUoN%2BfOO3ccQtmc%2FOgPKUBsM3fNq%2Fipqn90w4nx9YZx1rHWYaX194FnDialyCVHUQEIpDsqRepb4bJmG0BnwDrw7kAbRjAtqsx%2Bg1XH3dWWq6RxRTbPdYSPy5Ct3AoeUsuSYKJ9RChN1l%2FqG0Wabbcqae0LUrBcv7GzC5XZzkwikS9DjeVXFmf%2BUGcnRQJCB9gbyD&X-Amz-Signature=1344b0f5dc6f0a622234d2da99f9d82a190b688c187d438a889037b59fb061d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
