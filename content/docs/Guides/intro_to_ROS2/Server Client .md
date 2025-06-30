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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4HIORA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQDxIUc5hBgl%2FqZ5H2Y%2FvrdvabAJevPIw9ulH16sF7wIgOiJhtsggCnymn3%2BuxwvIS4zOXCVRfwOw7R15CqXmnx4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdWVHvzZIDvaOFjYyrcA2QQotq3VSxhqV0Q8BC2M8YkQAAUDga7UQXbCu9kwluxhbBO35jbaC%2BwUZAmakRqPR2XD4ConrmY0jnsPxrkv3UKcbns5h7FjJQktjY%2BQlm9n%2BWLYmeI2qCg39BgnfTGkDJhTmF2tqOACMAkP%2B5gs7jpQwGTktK8ci8ajHZqYlFeuJg2P5MlYCdaTVF7iaUUibaAplkOXAP7diD9DJyot%2Fh0EtktfyRjJTxtIHYHtHQ2cFq%2FgNlRUaH4K32%2BAZlktm5SUzqu5ltc0WZrt5N2xsjp3YYxneuQBWRESper6CMGAnT3BbVq%2FJVu0tYy2%2BEg%2FZuOkEaR0oA%2BPkdFaHdmHeaQGwqm2RPQXJE8ekdduHJJNmqBvXBfWGRlg9QKrtu1NCA2s5pVZb7Ntm%2FbUR4BxOu2QGnDdW4jMZwWUSAUEJ8%2FjgmVVukyZquY7qpOQCBZifaJaWTh8II4urIUVBHezsgcLV9nd5YHnDFSPqo928yz7c8ZrNXxjt5z4N9BXUmKsLaRP4yWWc8fBjVGp0Tsbk6YWVgA0a1V8%2Fy7aEXkcxT4C8iD8pNn8emcKJ7nnXLZlqZ0cwSbL%2BxN7V5HG6nBtmvrdMf46dSA1yDwcIYiHBY3L8fj7IHL%2BGMPL49CMICjicMGOqUB%2FFf5k2RjDOcDXxn1IWYOD%2FvStVQdvzK%2B%2Bx2FhwdzGZ1ASd7VEfJ2q82%2BxC5jgoxdmIUsdU150z%2BngLLiZenUa9kBxfZwFJQThfsfQ4osqjZ3e%2FfD9bt6cjL0J0GK0b5IKF%2BwK0o%2Fl24pWkOGvwaD6mt%2Fu7PbOXZdQF%2BXErXVgj77oeswMxigthr6MHOhjmeT9%2BHSWfRvor9TBZHEkVRu1LulOXrF&X-Amz-Signature=08cc876278db3af25dcab6b0fcf075543c640c45b8520017299e42ddb80bc498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4HIORA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQDxIUc5hBgl%2FqZ5H2Y%2FvrdvabAJevPIw9ulH16sF7wIgOiJhtsggCnymn3%2BuxwvIS4zOXCVRfwOw7R15CqXmnx4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdWVHvzZIDvaOFjYyrcA2QQotq3VSxhqV0Q8BC2M8YkQAAUDga7UQXbCu9kwluxhbBO35jbaC%2BwUZAmakRqPR2XD4ConrmY0jnsPxrkv3UKcbns5h7FjJQktjY%2BQlm9n%2BWLYmeI2qCg39BgnfTGkDJhTmF2tqOACMAkP%2B5gs7jpQwGTktK8ci8ajHZqYlFeuJg2P5MlYCdaTVF7iaUUibaAplkOXAP7diD9DJyot%2Fh0EtktfyRjJTxtIHYHtHQ2cFq%2FgNlRUaH4K32%2BAZlktm5SUzqu5ltc0WZrt5N2xsjp3YYxneuQBWRESper6CMGAnT3BbVq%2FJVu0tYy2%2BEg%2FZuOkEaR0oA%2BPkdFaHdmHeaQGwqm2RPQXJE8ekdduHJJNmqBvXBfWGRlg9QKrtu1NCA2s5pVZb7Ntm%2FbUR4BxOu2QGnDdW4jMZwWUSAUEJ8%2FjgmVVukyZquY7qpOQCBZifaJaWTh8II4urIUVBHezsgcLV9nd5YHnDFSPqo928yz7c8ZrNXxjt5z4N9BXUmKsLaRP4yWWc8fBjVGp0Tsbk6YWVgA0a1V8%2Fy7aEXkcxT4C8iD8pNn8emcKJ7nnXLZlqZ0cwSbL%2BxN7V5HG6nBtmvrdMf46dSA1yDwcIYiHBY3L8fj7IHL%2BGMPL49CMICjicMGOqUB%2FFf5k2RjDOcDXxn1IWYOD%2FvStVQdvzK%2B%2Bx2FhwdzGZ1ASd7VEfJ2q82%2BxC5jgoxdmIUsdU150z%2BngLLiZenUa9kBxfZwFJQThfsfQ4osqjZ3e%2FfD9bt6cjL0J0GK0b5IKF%2BwK0o%2Fl24pWkOGvwaD6mt%2Fu7PbOXZdQF%2BXErXVgj77oeswMxigthr6MHOhjmeT9%2BHSWfRvor9TBZHEkVRu1LulOXrF&X-Amz-Signature=232be3c1ae0b72b9a2d10ae992300e679382a7cadb3163816c8441b9b56c5c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4HIORA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQDxIUc5hBgl%2FqZ5H2Y%2FvrdvabAJevPIw9ulH16sF7wIgOiJhtsggCnymn3%2BuxwvIS4zOXCVRfwOw7R15CqXmnx4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdWVHvzZIDvaOFjYyrcA2QQotq3VSxhqV0Q8BC2M8YkQAAUDga7UQXbCu9kwluxhbBO35jbaC%2BwUZAmakRqPR2XD4ConrmY0jnsPxrkv3UKcbns5h7FjJQktjY%2BQlm9n%2BWLYmeI2qCg39BgnfTGkDJhTmF2tqOACMAkP%2B5gs7jpQwGTktK8ci8ajHZqYlFeuJg2P5MlYCdaTVF7iaUUibaAplkOXAP7diD9DJyot%2Fh0EtktfyRjJTxtIHYHtHQ2cFq%2FgNlRUaH4K32%2BAZlktm5SUzqu5ltc0WZrt5N2xsjp3YYxneuQBWRESper6CMGAnT3BbVq%2FJVu0tYy2%2BEg%2FZuOkEaR0oA%2BPkdFaHdmHeaQGwqm2RPQXJE8ekdduHJJNmqBvXBfWGRlg9QKrtu1NCA2s5pVZb7Ntm%2FbUR4BxOu2QGnDdW4jMZwWUSAUEJ8%2FjgmVVukyZquY7qpOQCBZifaJaWTh8II4urIUVBHezsgcLV9nd5YHnDFSPqo928yz7c8ZrNXxjt5z4N9BXUmKsLaRP4yWWc8fBjVGp0Tsbk6YWVgA0a1V8%2Fy7aEXkcxT4C8iD8pNn8emcKJ7nnXLZlqZ0cwSbL%2BxN7V5HG6nBtmvrdMf46dSA1yDwcIYiHBY3L8fj7IHL%2BGMPL49CMICjicMGOqUB%2FFf5k2RjDOcDXxn1IWYOD%2FvStVQdvzK%2B%2Bx2FhwdzGZ1ASd7VEfJ2q82%2BxC5jgoxdmIUsdU150z%2BngLLiZenUa9kBxfZwFJQThfsfQ4osqjZ3e%2FfD9bt6cjL0J0GK0b5IKF%2BwK0o%2Fl24pWkOGvwaD6mt%2Fu7PbOXZdQF%2BXErXVgj77oeswMxigthr6MHOhjmeT9%2BHSWfRvor9TBZHEkVRu1LulOXrF&X-Amz-Signature=5f3c0ae3e2fffcd5d7426150596bc54fa50dc4568843696e6f1c88b78abd2940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4HIORA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQDxIUc5hBgl%2FqZ5H2Y%2FvrdvabAJevPIw9ulH16sF7wIgOiJhtsggCnymn3%2BuxwvIS4zOXCVRfwOw7R15CqXmnx4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdWVHvzZIDvaOFjYyrcA2QQotq3VSxhqV0Q8BC2M8YkQAAUDga7UQXbCu9kwluxhbBO35jbaC%2BwUZAmakRqPR2XD4ConrmY0jnsPxrkv3UKcbns5h7FjJQktjY%2BQlm9n%2BWLYmeI2qCg39BgnfTGkDJhTmF2tqOACMAkP%2B5gs7jpQwGTktK8ci8ajHZqYlFeuJg2P5MlYCdaTVF7iaUUibaAplkOXAP7diD9DJyot%2Fh0EtktfyRjJTxtIHYHtHQ2cFq%2FgNlRUaH4K32%2BAZlktm5SUzqu5ltc0WZrt5N2xsjp3YYxneuQBWRESper6CMGAnT3BbVq%2FJVu0tYy2%2BEg%2FZuOkEaR0oA%2BPkdFaHdmHeaQGwqm2RPQXJE8ekdduHJJNmqBvXBfWGRlg9QKrtu1NCA2s5pVZb7Ntm%2FbUR4BxOu2QGnDdW4jMZwWUSAUEJ8%2FjgmVVukyZquY7qpOQCBZifaJaWTh8II4urIUVBHezsgcLV9nd5YHnDFSPqo928yz7c8ZrNXxjt5z4N9BXUmKsLaRP4yWWc8fBjVGp0Tsbk6YWVgA0a1V8%2Fy7aEXkcxT4C8iD8pNn8emcKJ7nnXLZlqZ0cwSbL%2BxN7V5HG6nBtmvrdMf46dSA1yDwcIYiHBY3L8fj7IHL%2BGMPL49CMICjicMGOqUB%2FFf5k2RjDOcDXxn1IWYOD%2FvStVQdvzK%2B%2Bx2FhwdzGZ1ASd7VEfJ2q82%2BxC5jgoxdmIUsdU150z%2BngLLiZenUa9kBxfZwFJQThfsfQ4osqjZ3e%2FfD9bt6cjL0J0GK0b5IKF%2BwK0o%2Fl24pWkOGvwaD6mt%2Fu7PbOXZdQF%2BXErXVgj77oeswMxigthr6MHOhjmeT9%2BHSWfRvor9TBZHEkVRu1LulOXrF&X-Amz-Signature=c594b01cda5522b3aa2088610a49b3e2b37bda974990d8e723a428538e17977d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4HIORA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQDxIUc5hBgl%2FqZ5H2Y%2FvrdvabAJevPIw9ulH16sF7wIgOiJhtsggCnymn3%2BuxwvIS4zOXCVRfwOw7R15CqXmnx4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdWVHvzZIDvaOFjYyrcA2QQotq3VSxhqV0Q8BC2M8YkQAAUDga7UQXbCu9kwluxhbBO35jbaC%2BwUZAmakRqPR2XD4ConrmY0jnsPxrkv3UKcbns5h7FjJQktjY%2BQlm9n%2BWLYmeI2qCg39BgnfTGkDJhTmF2tqOACMAkP%2B5gs7jpQwGTktK8ci8ajHZqYlFeuJg2P5MlYCdaTVF7iaUUibaAplkOXAP7diD9DJyot%2Fh0EtktfyRjJTxtIHYHtHQ2cFq%2FgNlRUaH4K32%2BAZlktm5SUzqu5ltc0WZrt5N2xsjp3YYxneuQBWRESper6CMGAnT3BbVq%2FJVu0tYy2%2BEg%2FZuOkEaR0oA%2BPkdFaHdmHeaQGwqm2RPQXJE8ekdduHJJNmqBvXBfWGRlg9QKrtu1NCA2s5pVZb7Ntm%2FbUR4BxOu2QGnDdW4jMZwWUSAUEJ8%2FjgmVVukyZquY7qpOQCBZifaJaWTh8II4urIUVBHezsgcLV9nd5YHnDFSPqo928yz7c8ZrNXxjt5z4N9BXUmKsLaRP4yWWc8fBjVGp0Tsbk6YWVgA0a1V8%2Fy7aEXkcxT4C8iD8pNn8emcKJ7nnXLZlqZ0cwSbL%2BxN7V5HG6nBtmvrdMf46dSA1yDwcIYiHBY3L8fj7IHL%2BGMPL49CMICjicMGOqUB%2FFf5k2RjDOcDXxn1IWYOD%2FvStVQdvzK%2B%2Bx2FhwdzGZ1ASd7VEfJ2q82%2BxC5jgoxdmIUsdU150z%2BngLLiZenUa9kBxfZwFJQThfsfQ4osqjZ3e%2FfD9bt6cjL0J0GK0b5IKF%2BwK0o%2Fl24pWkOGvwaD6mt%2Fu7PbOXZdQF%2BXErXVgj77oeswMxigthr6MHOhjmeT9%2BHSWfRvor9TBZHEkVRu1LulOXrF&X-Amz-Signature=272da86675ce01ce20cfb18b98021424e92c6c30d76b51815072f442ca3aade1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
