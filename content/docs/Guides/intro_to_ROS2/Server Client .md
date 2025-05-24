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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5RW66L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFrSqrI0%2F%2FYHrx91jpXgyQJGvIytq1wIYsDhqLFvTj3sAiAUiHZAH8CmoP%2BpRiaEzucoR3PPciCUoZnWiCQ5jPMjuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMNU0cCYe0jZ82Nj8dKtwDcX1y%2F%2F8Q7DtT7t6g0S1ZXqiX8ahXADuLeI3Dh9QkkLo8VG5CGu9hmz7RTccQQqN9ByVql%2FRwEgLDAUQYnfjUQsT%2B3IRUFbdIBxG6DO2XiiBL9XosKsWp3uX1oSgEE78I8UaCreoxhhLK52FJDs%2BtJgZ8BPQhSpsvC8BGJnXWH7hjEnhUjNNtmaemgqc2Hu66mlmY1%2FyZ0tjE8lkvNZO0XBkHdNIgyy9vKHSblHfChomYIJSJDO8bLFInrvA%2FshCJVCq3wFbo%2F704P0%2B3nldG7sWiLY5wcZtNnAo%2Bb5rfy0dJKjEllC4LxpoKgI47NKvGgbQrbpYgn42xuWksyFPsnrOXqBfVJX4IHOr%2Bmakd03gBoCihxChWCKfN8AT60keKlMq3T7DLirD8lK6LAR7YkKmZwWTah4DFKhYhb7Od9GQ%2BxYGmvMb7jbuBfsS27DTQ5I4c96sqCqJFVt%2B38Lgny0FDo9%2FzIYEGGM%2FaLRjad1nObxn%2FEwdT%2B8%2FQDD33eIsWrtWFnAralb08JQytacDrNLBoWeMuVDuJVlEcx87irgMI0Ff37hdWR2o4N8YHh5EDqmjbQ86H%2F1eEvaW4a35MPv1omfmJ6CLYAdfm4vpiXwJz3Ccw8adP7ydGqO8wqJbIwQY6pgExBSC1kglw71X1nuF3kOHp2wvwams2%2B9tFfmmeqxQk8P%2FCAy1M6loXzds28upZ9wjaVjlJwFczg6JTxMt9AvsaWOfnGJ0ckgmYkJEFYrBJX4c1iUkVJC0K7MXQ5Ure4JSCDD0za%2BpEvO%2Br8wSERD6bKyppPQFn6NJwdtgjgqLMyUMlcuXrmDqVp6w%2Bc7lzwDJiZqi9z0TjJHlK5wSZQHla02VWKVIk&X-Amz-Signature=9e52b138bb38349762602c52329952aec55c16a595f0ee82c60612d81a490a87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5RW66L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFrSqrI0%2F%2FYHrx91jpXgyQJGvIytq1wIYsDhqLFvTj3sAiAUiHZAH8CmoP%2BpRiaEzucoR3PPciCUoZnWiCQ5jPMjuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMNU0cCYe0jZ82Nj8dKtwDcX1y%2F%2F8Q7DtT7t6g0S1ZXqiX8ahXADuLeI3Dh9QkkLo8VG5CGu9hmz7RTccQQqN9ByVql%2FRwEgLDAUQYnfjUQsT%2B3IRUFbdIBxG6DO2XiiBL9XosKsWp3uX1oSgEE78I8UaCreoxhhLK52FJDs%2BtJgZ8BPQhSpsvC8BGJnXWH7hjEnhUjNNtmaemgqc2Hu66mlmY1%2FyZ0tjE8lkvNZO0XBkHdNIgyy9vKHSblHfChomYIJSJDO8bLFInrvA%2FshCJVCq3wFbo%2F704P0%2B3nldG7sWiLY5wcZtNnAo%2Bb5rfy0dJKjEllC4LxpoKgI47NKvGgbQrbpYgn42xuWksyFPsnrOXqBfVJX4IHOr%2Bmakd03gBoCihxChWCKfN8AT60keKlMq3T7DLirD8lK6LAR7YkKmZwWTah4DFKhYhb7Od9GQ%2BxYGmvMb7jbuBfsS27DTQ5I4c96sqCqJFVt%2B38Lgny0FDo9%2FzIYEGGM%2FaLRjad1nObxn%2FEwdT%2B8%2FQDD33eIsWrtWFnAralb08JQytacDrNLBoWeMuVDuJVlEcx87irgMI0Ff37hdWR2o4N8YHh5EDqmjbQ86H%2F1eEvaW4a35MPv1omfmJ6CLYAdfm4vpiXwJz3Ccw8adP7ydGqO8wqJbIwQY6pgExBSC1kglw71X1nuF3kOHp2wvwams2%2B9tFfmmeqxQk8P%2FCAy1M6loXzds28upZ9wjaVjlJwFczg6JTxMt9AvsaWOfnGJ0ckgmYkJEFYrBJX4c1iUkVJC0K7MXQ5Ure4JSCDD0za%2BpEvO%2Br8wSERD6bKyppPQFn6NJwdtgjgqLMyUMlcuXrmDqVp6w%2Bc7lzwDJiZqi9z0TjJHlK5wSZQHla02VWKVIk&X-Amz-Signature=d8b474d9109b5e253d11614958254f7fc4c436f43bd3384089ad87b2936a6a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5RW66L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFrSqrI0%2F%2FYHrx91jpXgyQJGvIytq1wIYsDhqLFvTj3sAiAUiHZAH8CmoP%2BpRiaEzucoR3PPciCUoZnWiCQ5jPMjuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMNU0cCYe0jZ82Nj8dKtwDcX1y%2F%2F8Q7DtT7t6g0S1ZXqiX8ahXADuLeI3Dh9QkkLo8VG5CGu9hmz7RTccQQqN9ByVql%2FRwEgLDAUQYnfjUQsT%2B3IRUFbdIBxG6DO2XiiBL9XosKsWp3uX1oSgEE78I8UaCreoxhhLK52FJDs%2BtJgZ8BPQhSpsvC8BGJnXWH7hjEnhUjNNtmaemgqc2Hu66mlmY1%2FyZ0tjE8lkvNZO0XBkHdNIgyy9vKHSblHfChomYIJSJDO8bLFInrvA%2FshCJVCq3wFbo%2F704P0%2B3nldG7sWiLY5wcZtNnAo%2Bb5rfy0dJKjEllC4LxpoKgI47NKvGgbQrbpYgn42xuWksyFPsnrOXqBfVJX4IHOr%2Bmakd03gBoCihxChWCKfN8AT60keKlMq3T7DLirD8lK6LAR7YkKmZwWTah4DFKhYhb7Od9GQ%2BxYGmvMb7jbuBfsS27DTQ5I4c96sqCqJFVt%2B38Lgny0FDo9%2FzIYEGGM%2FaLRjad1nObxn%2FEwdT%2B8%2FQDD33eIsWrtWFnAralb08JQytacDrNLBoWeMuVDuJVlEcx87irgMI0Ff37hdWR2o4N8YHh5EDqmjbQ86H%2F1eEvaW4a35MPv1omfmJ6CLYAdfm4vpiXwJz3Ccw8adP7ydGqO8wqJbIwQY6pgExBSC1kglw71X1nuF3kOHp2wvwams2%2B9tFfmmeqxQk8P%2FCAy1M6loXzds28upZ9wjaVjlJwFczg6JTxMt9AvsaWOfnGJ0ckgmYkJEFYrBJX4c1iUkVJC0K7MXQ5Ure4JSCDD0za%2BpEvO%2Br8wSERD6bKyppPQFn6NJwdtgjgqLMyUMlcuXrmDqVp6w%2Bc7lzwDJiZqi9z0TjJHlK5wSZQHla02VWKVIk&X-Amz-Signature=e1231ccf009ddb83725a6a775c2a070d7949e113286f273ff67c8f8f3ed8ae1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5RW66L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFrSqrI0%2F%2FYHrx91jpXgyQJGvIytq1wIYsDhqLFvTj3sAiAUiHZAH8CmoP%2BpRiaEzucoR3PPciCUoZnWiCQ5jPMjuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMNU0cCYe0jZ82Nj8dKtwDcX1y%2F%2F8Q7DtT7t6g0S1ZXqiX8ahXADuLeI3Dh9QkkLo8VG5CGu9hmz7RTccQQqN9ByVql%2FRwEgLDAUQYnfjUQsT%2B3IRUFbdIBxG6DO2XiiBL9XosKsWp3uX1oSgEE78I8UaCreoxhhLK52FJDs%2BtJgZ8BPQhSpsvC8BGJnXWH7hjEnhUjNNtmaemgqc2Hu66mlmY1%2FyZ0tjE8lkvNZO0XBkHdNIgyy9vKHSblHfChomYIJSJDO8bLFInrvA%2FshCJVCq3wFbo%2F704P0%2B3nldG7sWiLY5wcZtNnAo%2Bb5rfy0dJKjEllC4LxpoKgI47NKvGgbQrbpYgn42xuWksyFPsnrOXqBfVJX4IHOr%2Bmakd03gBoCihxChWCKfN8AT60keKlMq3T7DLirD8lK6LAR7YkKmZwWTah4DFKhYhb7Od9GQ%2BxYGmvMb7jbuBfsS27DTQ5I4c96sqCqJFVt%2B38Lgny0FDo9%2FzIYEGGM%2FaLRjad1nObxn%2FEwdT%2B8%2FQDD33eIsWrtWFnAralb08JQytacDrNLBoWeMuVDuJVlEcx87irgMI0Ff37hdWR2o4N8YHh5EDqmjbQ86H%2F1eEvaW4a35MPv1omfmJ6CLYAdfm4vpiXwJz3Ccw8adP7ydGqO8wqJbIwQY6pgExBSC1kglw71X1nuF3kOHp2wvwams2%2B9tFfmmeqxQk8P%2FCAy1M6loXzds28upZ9wjaVjlJwFczg6JTxMt9AvsaWOfnGJ0ckgmYkJEFYrBJX4c1iUkVJC0K7MXQ5Ure4JSCDD0za%2BpEvO%2Br8wSERD6bKyppPQFn6NJwdtgjgqLMyUMlcuXrmDqVp6w%2Bc7lzwDJiZqi9z0TjJHlK5wSZQHla02VWKVIk&X-Amz-Signature=26dd2be5712f61544026f25acd72c7f07c5ed489bf3758b5667d92cf13503813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5RW66L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFrSqrI0%2F%2FYHrx91jpXgyQJGvIytq1wIYsDhqLFvTj3sAiAUiHZAH8CmoP%2BpRiaEzucoR3PPciCUoZnWiCQ5jPMjuCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMNU0cCYe0jZ82Nj8dKtwDcX1y%2F%2F8Q7DtT7t6g0S1ZXqiX8ahXADuLeI3Dh9QkkLo8VG5CGu9hmz7RTccQQqN9ByVql%2FRwEgLDAUQYnfjUQsT%2B3IRUFbdIBxG6DO2XiiBL9XosKsWp3uX1oSgEE78I8UaCreoxhhLK52FJDs%2BtJgZ8BPQhSpsvC8BGJnXWH7hjEnhUjNNtmaemgqc2Hu66mlmY1%2FyZ0tjE8lkvNZO0XBkHdNIgyy9vKHSblHfChomYIJSJDO8bLFInrvA%2FshCJVCq3wFbo%2F704P0%2B3nldG7sWiLY5wcZtNnAo%2Bb5rfy0dJKjEllC4LxpoKgI47NKvGgbQrbpYgn42xuWksyFPsnrOXqBfVJX4IHOr%2Bmakd03gBoCihxChWCKfN8AT60keKlMq3T7DLirD8lK6LAR7YkKmZwWTah4DFKhYhb7Od9GQ%2BxYGmvMb7jbuBfsS27DTQ5I4c96sqCqJFVt%2B38Lgny0FDo9%2FzIYEGGM%2FaLRjad1nObxn%2FEwdT%2B8%2FQDD33eIsWrtWFnAralb08JQytacDrNLBoWeMuVDuJVlEcx87irgMI0Ff37hdWR2o4N8YHh5EDqmjbQ86H%2F1eEvaW4a35MPv1omfmJ6CLYAdfm4vpiXwJz3Ccw8adP7ydGqO8wqJbIwQY6pgExBSC1kglw71X1nuF3kOHp2wvwams2%2B9tFfmmeqxQk8P%2FCAy1M6loXzds28upZ9wjaVjlJwFczg6JTxMt9AvsaWOfnGJ0ckgmYkJEFYrBJX4c1iUkVJC0K7MXQ5Ure4JSCDD0za%2BpEvO%2Br8wSERD6bKyppPQFn6NJwdtgjgqLMyUMlcuXrmDqVp6w%2Bc7lzwDJiZqi9z0TjJHlK5wSZQHla02VWKVIk&X-Amz-Signature=376670a652171d516be17ab14b1d51fc6ecbf3b2d6d724bbe482bc907c8c339e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
