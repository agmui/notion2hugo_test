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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHA6DY6%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXwcpkaVwhU1LmQd7omIFBtFwpzSRdjdvEsouW1BSZdAiAZKxumLKK7pKmjboTNOozHYrufcj1UPpiwxT%2BKrEyVZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMvsk6VTn9mxQ17eJKtwDILlGUh7PqFZKxQbmcbUfHYxuexXPbL51HdqVKe7J22ufQ3dAa3Q0c9gm9ryn8EyzCr9MYA8eFtwzd%2F52GDTOcVcPMA%2FB3HksiuIaL%2F2v%2BrorwuED34yA%2Fha%2FeXsK3h5TFjIYZ%2BWIOZX1zamtjGJxCZgbctSdsrA4zO0tOvmsufRDf3tPUOPtLjmo5Y3FTUIALQeBL2MbXFFpQF5C6WA24BXIS%2F4maA9PoKnj%2FaBu7VuKxvrcj%2F0StuHI8s2FQAqYfpudBCbPLQC28qbqupfy%2ByuXf9LTAG5k4ktvQFDp6upVMOg9W9cDigHYoUpJAjikg2IhNpb6lxC6nkQak9BWX%2FB%2BUOzb9fEu2NsJrgtvl0XVkHytk3GEVUMe09Ak7dm2X4fue5w2Enajl90qGKLfu87Tshv%2BTJ%2Bzr4AGBAHwcXIDEEJyghfWrL%2BWzOOMaRZAvHNlATfHsGY3QOyReF4yJfLQaWCIBN1cofrdMchh6LEVU3uH1E8Vm49TvaxzLILc%2Bcq7qPGlvxupnH8XwFdvQoSbqZ6%2BOzFKz%2B%2FcU0kWrrDpGh7ZRBEk8rz%2Bw%2FlIMng7Vw2h9bxJH6jbSh%2F5tSGO%2FkKHTGMh0XV1O7hK4Eq9HQ%2BO7uwXFQNmMVzXCOowgqblzwY6pgE2P%2B56obqNsUh9dque6IwXoRUM%2BxK8WtBWXq4686rHq66xW3bEPQibrgvZ8KyIMZfoYzoqN3Lr5e%2F1d6mLMHCpaCuZpsVfv1UfFIcqDfYQjJHtQqpGVa32aaNhzdwkYiBASGaQM3hQOP11HknsKPpXTzoMjII0ebkNHmQoiptQjaoQdc546OCO%2FnyN0rFOvDu1GeZkH%2F0WPk5OssGgxeuSgafr4%2FDQ&X-Amz-Signature=51c2577d798419ad4a414910f336b95a106ab589e78e375593da1c94b02e70f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHA6DY6%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXwcpkaVwhU1LmQd7omIFBtFwpzSRdjdvEsouW1BSZdAiAZKxumLKK7pKmjboTNOozHYrufcj1UPpiwxT%2BKrEyVZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMvsk6VTn9mxQ17eJKtwDILlGUh7PqFZKxQbmcbUfHYxuexXPbL51HdqVKe7J22ufQ3dAa3Q0c9gm9ryn8EyzCr9MYA8eFtwzd%2F52GDTOcVcPMA%2FB3HksiuIaL%2F2v%2BrorwuED34yA%2Fha%2FeXsK3h5TFjIYZ%2BWIOZX1zamtjGJxCZgbctSdsrA4zO0tOvmsufRDf3tPUOPtLjmo5Y3FTUIALQeBL2MbXFFpQF5C6WA24BXIS%2F4maA9PoKnj%2FaBu7VuKxvrcj%2F0StuHI8s2FQAqYfpudBCbPLQC28qbqupfy%2ByuXf9LTAG5k4ktvQFDp6upVMOg9W9cDigHYoUpJAjikg2IhNpb6lxC6nkQak9BWX%2FB%2BUOzb9fEu2NsJrgtvl0XVkHytk3GEVUMe09Ak7dm2X4fue5w2Enajl90qGKLfu87Tshv%2BTJ%2Bzr4AGBAHwcXIDEEJyghfWrL%2BWzOOMaRZAvHNlATfHsGY3QOyReF4yJfLQaWCIBN1cofrdMchh6LEVU3uH1E8Vm49TvaxzLILc%2Bcq7qPGlvxupnH8XwFdvQoSbqZ6%2BOzFKz%2B%2FcU0kWrrDpGh7ZRBEk8rz%2Bw%2FlIMng7Vw2h9bxJH6jbSh%2F5tSGO%2FkKHTGMh0XV1O7hK4Eq9HQ%2BO7uwXFQNmMVzXCOowgqblzwY6pgE2P%2B56obqNsUh9dque6IwXoRUM%2BxK8WtBWXq4686rHq66xW3bEPQibrgvZ8KyIMZfoYzoqN3Lr5e%2F1d6mLMHCpaCuZpsVfv1UfFIcqDfYQjJHtQqpGVa32aaNhzdwkYiBASGaQM3hQOP11HknsKPpXTzoMjII0ebkNHmQoiptQjaoQdc546OCO%2FnyN0rFOvDu1GeZkH%2F0WPk5OssGgxeuSgafr4%2FDQ&X-Amz-Signature=f1ec27f72d74a08e2cc8a7fffd7cd80fe10319eb52631ca8eaa1803d7fabb91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHA6DY6%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXwcpkaVwhU1LmQd7omIFBtFwpzSRdjdvEsouW1BSZdAiAZKxumLKK7pKmjboTNOozHYrufcj1UPpiwxT%2BKrEyVZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMvsk6VTn9mxQ17eJKtwDILlGUh7PqFZKxQbmcbUfHYxuexXPbL51HdqVKe7J22ufQ3dAa3Q0c9gm9ryn8EyzCr9MYA8eFtwzd%2F52GDTOcVcPMA%2FB3HksiuIaL%2F2v%2BrorwuED34yA%2Fha%2FeXsK3h5TFjIYZ%2BWIOZX1zamtjGJxCZgbctSdsrA4zO0tOvmsufRDf3tPUOPtLjmo5Y3FTUIALQeBL2MbXFFpQF5C6WA24BXIS%2F4maA9PoKnj%2FaBu7VuKxvrcj%2F0StuHI8s2FQAqYfpudBCbPLQC28qbqupfy%2ByuXf9LTAG5k4ktvQFDp6upVMOg9W9cDigHYoUpJAjikg2IhNpb6lxC6nkQak9BWX%2FB%2BUOzb9fEu2NsJrgtvl0XVkHytk3GEVUMe09Ak7dm2X4fue5w2Enajl90qGKLfu87Tshv%2BTJ%2Bzr4AGBAHwcXIDEEJyghfWrL%2BWzOOMaRZAvHNlATfHsGY3QOyReF4yJfLQaWCIBN1cofrdMchh6LEVU3uH1E8Vm49TvaxzLILc%2Bcq7qPGlvxupnH8XwFdvQoSbqZ6%2BOzFKz%2B%2FcU0kWrrDpGh7ZRBEk8rz%2Bw%2FlIMng7Vw2h9bxJH6jbSh%2F5tSGO%2FkKHTGMh0XV1O7hK4Eq9HQ%2BO7uwXFQNmMVzXCOowgqblzwY6pgE2P%2B56obqNsUh9dque6IwXoRUM%2BxK8WtBWXq4686rHq66xW3bEPQibrgvZ8KyIMZfoYzoqN3Lr5e%2F1d6mLMHCpaCuZpsVfv1UfFIcqDfYQjJHtQqpGVa32aaNhzdwkYiBASGaQM3hQOP11HknsKPpXTzoMjII0ebkNHmQoiptQjaoQdc546OCO%2FnyN0rFOvDu1GeZkH%2F0WPk5OssGgxeuSgafr4%2FDQ&X-Amz-Signature=e5db84fc6cf0aaf28d20ec93c67b89b0ae473b5466d4a5826c221d9b08d03cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHA6DY6%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXwcpkaVwhU1LmQd7omIFBtFwpzSRdjdvEsouW1BSZdAiAZKxumLKK7pKmjboTNOozHYrufcj1UPpiwxT%2BKrEyVZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMvsk6VTn9mxQ17eJKtwDILlGUh7PqFZKxQbmcbUfHYxuexXPbL51HdqVKe7J22ufQ3dAa3Q0c9gm9ryn8EyzCr9MYA8eFtwzd%2F52GDTOcVcPMA%2FB3HksiuIaL%2F2v%2BrorwuED34yA%2Fha%2FeXsK3h5TFjIYZ%2BWIOZX1zamtjGJxCZgbctSdsrA4zO0tOvmsufRDf3tPUOPtLjmo5Y3FTUIALQeBL2MbXFFpQF5C6WA24BXIS%2F4maA9PoKnj%2FaBu7VuKxvrcj%2F0StuHI8s2FQAqYfpudBCbPLQC28qbqupfy%2ByuXf9LTAG5k4ktvQFDp6upVMOg9W9cDigHYoUpJAjikg2IhNpb6lxC6nkQak9BWX%2FB%2BUOzb9fEu2NsJrgtvl0XVkHytk3GEVUMe09Ak7dm2X4fue5w2Enajl90qGKLfu87Tshv%2BTJ%2Bzr4AGBAHwcXIDEEJyghfWrL%2BWzOOMaRZAvHNlATfHsGY3QOyReF4yJfLQaWCIBN1cofrdMchh6LEVU3uH1E8Vm49TvaxzLILc%2Bcq7qPGlvxupnH8XwFdvQoSbqZ6%2BOzFKz%2B%2FcU0kWrrDpGh7ZRBEk8rz%2Bw%2FlIMng7Vw2h9bxJH6jbSh%2F5tSGO%2FkKHTGMh0XV1O7hK4Eq9HQ%2BO7uwXFQNmMVzXCOowgqblzwY6pgE2P%2B56obqNsUh9dque6IwXoRUM%2BxK8WtBWXq4686rHq66xW3bEPQibrgvZ8KyIMZfoYzoqN3Lr5e%2F1d6mLMHCpaCuZpsVfv1UfFIcqDfYQjJHtQqpGVa32aaNhzdwkYiBASGaQM3hQOP11HknsKPpXTzoMjII0ebkNHmQoiptQjaoQdc546OCO%2FnyN0rFOvDu1GeZkH%2F0WPk5OssGgxeuSgafr4%2FDQ&X-Amz-Signature=12ad8d9ec5bf271a67a62983d6c8389cd51273cea2c99fa76717910f7721e8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHA6DY6%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXwcpkaVwhU1LmQd7omIFBtFwpzSRdjdvEsouW1BSZdAiAZKxumLKK7pKmjboTNOozHYrufcj1UPpiwxT%2BKrEyVZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMvsk6VTn9mxQ17eJKtwDILlGUh7PqFZKxQbmcbUfHYxuexXPbL51HdqVKe7J22ufQ3dAa3Q0c9gm9ryn8EyzCr9MYA8eFtwzd%2F52GDTOcVcPMA%2FB3HksiuIaL%2F2v%2BrorwuED34yA%2Fha%2FeXsK3h5TFjIYZ%2BWIOZX1zamtjGJxCZgbctSdsrA4zO0tOvmsufRDf3tPUOPtLjmo5Y3FTUIALQeBL2MbXFFpQF5C6WA24BXIS%2F4maA9PoKnj%2FaBu7VuKxvrcj%2F0StuHI8s2FQAqYfpudBCbPLQC28qbqupfy%2ByuXf9LTAG5k4ktvQFDp6upVMOg9W9cDigHYoUpJAjikg2IhNpb6lxC6nkQak9BWX%2FB%2BUOzb9fEu2NsJrgtvl0XVkHytk3GEVUMe09Ak7dm2X4fue5w2Enajl90qGKLfu87Tshv%2BTJ%2Bzr4AGBAHwcXIDEEJyghfWrL%2BWzOOMaRZAvHNlATfHsGY3QOyReF4yJfLQaWCIBN1cofrdMchh6LEVU3uH1E8Vm49TvaxzLILc%2Bcq7qPGlvxupnH8XwFdvQoSbqZ6%2BOzFKz%2B%2FcU0kWrrDpGh7ZRBEk8rz%2Bw%2FlIMng7Vw2h9bxJH6jbSh%2F5tSGO%2FkKHTGMh0XV1O7hK4Eq9HQ%2BO7uwXFQNmMVzXCOowgqblzwY6pgE2P%2B56obqNsUh9dque6IwXoRUM%2BxK8WtBWXq4686rHq66xW3bEPQibrgvZ8KyIMZfoYzoqN3Lr5e%2F1d6mLMHCpaCuZpsVfv1UfFIcqDfYQjJHtQqpGVa32aaNhzdwkYiBASGaQM3hQOP11HknsKPpXTzoMjII0ebkNHmQoiptQjaoQdc546OCO%2FnyN0rFOvDu1GeZkH%2F0WPk5OssGgxeuSgafr4%2FDQ&X-Amz-Signature=c054d9bd7d64045f3943ecd6985e49ad4b9f1121d096ba63ca0509a4d30ae9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
