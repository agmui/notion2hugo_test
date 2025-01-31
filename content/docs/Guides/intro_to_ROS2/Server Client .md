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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TYZ43H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkFE7aAENZedFV%2FsgsJlQMe%2B1DBmH9gTet%2Bm2I%2B0SGBAIgYVgD9f%2FJqoXXq%2FxTdgQrESeckhNi9LPpZ8Hifke2eJ4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlazRgn9UW06fwKbircA8fF1LAmqnR5ffYPO4%2FqxKkURWQZQxiH3uJcHNAaQ%2B0IlzX89IH8rEbS3Wc6%2FdT3EaztU%2B%2FBEcahcF%2Bz%2FxlyHAZtu2Khv9z6%2B0ECwRQUk6lNFIYJqEPTub5kklffBSfbqSEjbFjgJBXq4x6yIfvG6sBz%2F8mrOi6fDf0mQTEINNq3xKCpvvBIQXxZmEZ3uKXE71gDuxHlxdXljI3hKbWfrF6TFxINnPkATauwkm6t0w6ErG5jzjH%2BbSPxIapYF9bjXBftr%2FWR%2BODcASw%2FO8cwGJPyhbGQx4uLt4KhxaT9yqSgrg3jBDrWNuU2FC5i23vUavdnrB7mSvd9ZX6nbJ7d6rW9u67KkBj7jSm6mGDKanyQdTmrp7hRzxmdWqTN3nilGy6t0y5BRqZvHbPKDt9hYljB343rQfUvIH56v9PiJUZm6qWy3ovbmuz3qxluoUbjU9cZrP1LakIlWjvQekPZ0LovkIyzuYK02FjDmM5CWv6%2FRFkC5fhuhjfCSkLC%2Bc%2B3LPq4D3bfW%2FCnZVRlmmBXK1mnYVDCuIXXJRNMVUhOM0Zm42OqePLy2o8agSDSCENiGw8M8Pzg4ldPWfaJ9BMO1dEyMAKR4plwl5YrUJTNC%2ByShk19GvcblaG7ajagMJLj8bwGOqUBZvDdq55czVqtDj044pCfsBKmrkCDcYeRnwd7UajFYdyXzSXsHY2nQj9YMuu45YsintJ7bAGJpmjNuq1YJtJm9oZUIg1eCXfEFtgzF5uFSC4exNbn0gigO4V3rEGBc%2FcWv3KNK3vNWXUznVoEk%2BmIf3IiayKAqddRSjEF8uyHH1aYHPigY0MvpBuXtHgGt8hKMERQSXKx6VWHxxLwXYVIDxuFre2m&X-Amz-Signature=318bc7ca3aa6d542cad23e6ebfe4d647f300ee0615fcd3ac3452660fd2dbf42d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TYZ43H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkFE7aAENZedFV%2FsgsJlQMe%2B1DBmH9gTet%2Bm2I%2B0SGBAIgYVgD9f%2FJqoXXq%2FxTdgQrESeckhNi9LPpZ8Hifke2eJ4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlazRgn9UW06fwKbircA8fF1LAmqnR5ffYPO4%2FqxKkURWQZQxiH3uJcHNAaQ%2B0IlzX89IH8rEbS3Wc6%2FdT3EaztU%2B%2FBEcahcF%2Bz%2FxlyHAZtu2Khv9z6%2B0ECwRQUk6lNFIYJqEPTub5kklffBSfbqSEjbFjgJBXq4x6yIfvG6sBz%2F8mrOi6fDf0mQTEINNq3xKCpvvBIQXxZmEZ3uKXE71gDuxHlxdXljI3hKbWfrF6TFxINnPkATauwkm6t0w6ErG5jzjH%2BbSPxIapYF9bjXBftr%2FWR%2BODcASw%2FO8cwGJPyhbGQx4uLt4KhxaT9yqSgrg3jBDrWNuU2FC5i23vUavdnrB7mSvd9ZX6nbJ7d6rW9u67KkBj7jSm6mGDKanyQdTmrp7hRzxmdWqTN3nilGy6t0y5BRqZvHbPKDt9hYljB343rQfUvIH56v9PiJUZm6qWy3ovbmuz3qxluoUbjU9cZrP1LakIlWjvQekPZ0LovkIyzuYK02FjDmM5CWv6%2FRFkC5fhuhjfCSkLC%2Bc%2B3LPq4D3bfW%2FCnZVRlmmBXK1mnYVDCuIXXJRNMVUhOM0Zm42OqePLy2o8agSDSCENiGw8M8Pzg4ldPWfaJ9BMO1dEyMAKR4plwl5YrUJTNC%2ByShk19GvcblaG7ajagMJLj8bwGOqUBZvDdq55czVqtDj044pCfsBKmrkCDcYeRnwd7UajFYdyXzSXsHY2nQj9YMuu45YsintJ7bAGJpmjNuq1YJtJm9oZUIg1eCXfEFtgzF5uFSC4exNbn0gigO4V3rEGBc%2FcWv3KNK3vNWXUznVoEk%2BmIf3IiayKAqddRSjEF8uyHH1aYHPigY0MvpBuXtHgGt8hKMERQSXKx6VWHxxLwXYVIDxuFre2m&X-Amz-Signature=3ec1b43d5a12b64547abb52344a0ea3cf9333e4687d0fc92ae09b854c29a9392&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TYZ43H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkFE7aAENZedFV%2FsgsJlQMe%2B1DBmH9gTet%2Bm2I%2B0SGBAIgYVgD9f%2FJqoXXq%2FxTdgQrESeckhNi9LPpZ8Hifke2eJ4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlazRgn9UW06fwKbircA8fF1LAmqnR5ffYPO4%2FqxKkURWQZQxiH3uJcHNAaQ%2B0IlzX89IH8rEbS3Wc6%2FdT3EaztU%2B%2FBEcahcF%2Bz%2FxlyHAZtu2Khv9z6%2B0ECwRQUk6lNFIYJqEPTub5kklffBSfbqSEjbFjgJBXq4x6yIfvG6sBz%2F8mrOi6fDf0mQTEINNq3xKCpvvBIQXxZmEZ3uKXE71gDuxHlxdXljI3hKbWfrF6TFxINnPkATauwkm6t0w6ErG5jzjH%2BbSPxIapYF9bjXBftr%2FWR%2BODcASw%2FO8cwGJPyhbGQx4uLt4KhxaT9yqSgrg3jBDrWNuU2FC5i23vUavdnrB7mSvd9ZX6nbJ7d6rW9u67KkBj7jSm6mGDKanyQdTmrp7hRzxmdWqTN3nilGy6t0y5BRqZvHbPKDt9hYljB343rQfUvIH56v9PiJUZm6qWy3ovbmuz3qxluoUbjU9cZrP1LakIlWjvQekPZ0LovkIyzuYK02FjDmM5CWv6%2FRFkC5fhuhjfCSkLC%2Bc%2B3LPq4D3bfW%2FCnZVRlmmBXK1mnYVDCuIXXJRNMVUhOM0Zm42OqePLy2o8agSDSCENiGw8M8Pzg4ldPWfaJ9BMO1dEyMAKR4plwl5YrUJTNC%2ByShk19GvcblaG7ajagMJLj8bwGOqUBZvDdq55czVqtDj044pCfsBKmrkCDcYeRnwd7UajFYdyXzSXsHY2nQj9YMuu45YsintJ7bAGJpmjNuq1YJtJm9oZUIg1eCXfEFtgzF5uFSC4exNbn0gigO4V3rEGBc%2FcWv3KNK3vNWXUznVoEk%2BmIf3IiayKAqddRSjEF8uyHH1aYHPigY0MvpBuXtHgGt8hKMERQSXKx6VWHxxLwXYVIDxuFre2m&X-Amz-Signature=34a93c3e7065ef2a8cf21f04739220c60ca3e436c9393fbb16d0767a7d74d03c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TYZ43H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkFE7aAENZedFV%2FsgsJlQMe%2B1DBmH9gTet%2Bm2I%2B0SGBAIgYVgD9f%2FJqoXXq%2FxTdgQrESeckhNi9LPpZ8Hifke2eJ4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlazRgn9UW06fwKbircA8fF1LAmqnR5ffYPO4%2FqxKkURWQZQxiH3uJcHNAaQ%2B0IlzX89IH8rEbS3Wc6%2FdT3EaztU%2B%2FBEcahcF%2Bz%2FxlyHAZtu2Khv9z6%2B0ECwRQUk6lNFIYJqEPTub5kklffBSfbqSEjbFjgJBXq4x6yIfvG6sBz%2F8mrOi6fDf0mQTEINNq3xKCpvvBIQXxZmEZ3uKXE71gDuxHlxdXljI3hKbWfrF6TFxINnPkATauwkm6t0w6ErG5jzjH%2BbSPxIapYF9bjXBftr%2FWR%2BODcASw%2FO8cwGJPyhbGQx4uLt4KhxaT9yqSgrg3jBDrWNuU2FC5i23vUavdnrB7mSvd9ZX6nbJ7d6rW9u67KkBj7jSm6mGDKanyQdTmrp7hRzxmdWqTN3nilGy6t0y5BRqZvHbPKDt9hYljB343rQfUvIH56v9PiJUZm6qWy3ovbmuz3qxluoUbjU9cZrP1LakIlWjvQekPZ0LovkIyzuYK02FjDmM5CWv6%2FRFkC5fhuhjfCSkLC%2Bc%2B3LPq4D3bfW%2FCnZVRlmmBXK1mnYVDCuIXXJRNMVUhOM0Zm42OqePLy2o8agSDSCENiGw8M8Pzg4ldPWfaJ9BMO1dEyMAKR4plwl5YrUJTNC%2ByShk19GvcblaG7ajagMJLj8bwGOqUBZvDdq55czVqtDj044pCfsBKmrkCDcYeRnwd7UajFYdyXzSXsHY2nQj9YMuu45YsintJ7bAGJpmjNuq1YJtJm9oZUIg1eCXfEFtgzF5uFSC4exNbn0gigO4V3rEGBc%2FcWv3KNK3vNWXUznVoEk%2BmIf3IiayKAqddRSjEF8uyHH1aYHPigY0MvpBuXtHgGt8hKMERQSXKx6VWHxxLwXYVIDxuFre2m&X-Amz-Signature=340619693114bd9878dad240594bc7f8eece422735d39d71f5e7b2307c4cdf4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TYZ43H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkFE7aAENZedFV%2FsgsJlQMe%2B1DBmH9gTet%2Bm2I%2B0SGBAIgYVgD9f%2FJqoXXq%2FxTdgQrESeckhNi9LPpZ8Hifke2eJ4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlazRgn9UW06fwKbircA8fF1LAmqnR5ffYPO4%2FqxKkURWQZQxiH3uJcHNAaQ%2B0IlzX89IH8rEbS3Wc6%2FdT3EaztU%2B%2FBEcahcF%2Bz%2FxlyHAZtu2Khv9z6%2B0ECwRQUk6lNFIYJqEPTub5kklffBSfbqSEjbFjgJBXq4x6yIfvG6sBz%2F8mrOi6fDf0mQTEINNq3xKCpvvBIQXxZmEZ3uKXE71gDuxHlxdXljI3hKbWfrF6TFxINnPkATauwkm6t0w6ErG5jzjH%2BbSPxIapYF9bjXBftr%2FWR%2BODcASw%2FO8cwGJPyhbGQx4uLt4KhxaT9yqSgrg3jBDrWNuU2FC5i23vUavdnrB7mSvd9ZX6nbJ7d6rW9u67KkBj7jSm6mGDKanyQdTmrp7hRzxmdWqTN3nilGy6t0y5BRqZvHbPKDt9hYljB343rQfUvIH56v9PiJUZm6qWy3ovbmuz3qxluoUbjU9cZrP1LakIlWjvQekPZ0LovkIyzuYK02FjDmM5CWv6%2FRFkC5fhuhjfCSkLC%2Bc%2B3LPq4D3bfW%2FCnZVRlmmBXK1mnYVDCuIXXJRNMVUhOM0Zm42OqePLy2o8agSDSCENiGw8M8Pzg4ldPWfaJ9BMO1dEyMAKR4plwl5YrUJTNC%2ByShk19GvcblaG7ajagMJLj8bwGOqUBZvDdq55czVqtDj044pCfsBKmrkCDcYeRnwd7UajFYdyXzSXsHY2nQj9YMuu45YsintJ7bAGJpmjNuq1YJtJm9oZUIg1eCXfEFtgzF5uFSC4exNbn0gigO4V3rEGBc%2FcWv3KNK3vNWXUznVoEk%2BmIf3IiayKAqddRSjEF8uyHH1aYHPigY0MvpBuXtHgGt8hKMERQSXKx6VWHxxLwXYVIDxuFre2m&X-Amz-Signature=6db86ca7c9e1070e90ec74af190df29a03ceedaaa65597d34c05d7ac9e7ad57c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
