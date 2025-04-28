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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDZSORP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0wEOVoyH2NmAnkFaC7%2FevCL0W19uWym49GvTFQI%2FHgIhAJvL0bP4cWh%2F9hzodLr2nquJBxt13UcRZO%2FzkwdTkqT1Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxUT2UJxX67PlhiUTEq3AOw1MvSTOPkYJnLwj8brpBr33%2FTxWF7scIMQVIJ3MYNQ%2FeiYuvHBKKKQIJKMsLz0%2Fc19qiTvbbumb8U7yKVAPjBHOmIXzzs9%2Bs%2BomRECuHeCOsNfQmp%2BcqCpCHpZN0nLwBTY3Ik%2BRTmoBD1l4JtjjUqcLfitRu7iWgrXyEt5AONkV0akCF5CZ%2F61WlvHoKVzMvaClpQBCRWMiv7KICxNbFWz7UDYkPcXGnCu7SxsVbpTJUhRermgPfNYHxAwmUxmuWWFmq7zJ8mZ0HpUjGiki%2FwS7lX8PLzw13TqXpmwommcsCkkNQDf9sgzDw%2BWLkGMUycy4ZUQQw6dJlJBDB6%2BB0r8lxY1wdQOKXflreSvz%2FkUv8QYgpO80Yi0qQDWqvlKtV3gUUnnjiqab%2BwqlBsfBTYJOk0DkOocX1e%2BpAn7ReZrUZYfUS0hs9Sdp6x8dOzXd%2BQFDBmTEzWU26yNnw%2FbeJEDk93PGv3N2jAKD0nfFkfIDyKVDwo4i%2BWhM3ghQ6pjWbdt%2FTkHZ6N5s1Aj0hGbNaZpKifQZh3u45qEbq2XFiD8Xz2wRUnn4eJbjX03mNVQnHbeSw1uWxveFMomvlftCwESWKSccXhfpKpaniauvzGx%2BfM1kYZWdxAWCQvcDDi9L7ABjqkAVVLDQSKdS%2F254eSH%2FgI8ANuqGPENtZrG%2BbMoNXuN0iplEtQS3zwNzj8iFNi0gfuCQxgaxWcINvYoBPz7SpZrP%2FRfP7sUpCiUtNT8IveE%2Bm6fuLIPjMqstfwYV2CYgMnBfMW7WWMn9xlP%2B438RYbeRxZeBKNSUN9KirzyMHNK6xlbt9TNXzWPhuoPNpgrJu9Xq0zUSLvvTDQBK6WYi18BDLZjz%2B1&X-Amz-Signature=f14df782facacaf806a941b01f4f3ecacf43d2046452e2ceb848f74c54a08048&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDZSORP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0wEOVoyH2NmAnkFaC7%2FevCL0W19uWym49GvTFQI%2FHgIhAJvL0bP4cWh%2F9hzodLr2nquJBxt13UcRZO%2FzkwdTkqT1Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxUT2UJxX67PlhiUTEq3AOw1MvSTOPkYJnLwj8brpBr33%2FTxWF7scIMQVIJ3MYNQ%2FeiYuvHBKKKQIJKMsLz0%2Fc19qiTvbbumb8U7yKVAPjBHOmIXzzs9%2Bs%2BomRECuHeCOsNfQmp%2BcqCpCHpZN0nLwBTY3Ik%2BRTmoBD1l4JtjjUqcLfitRu7iWgrXyEt5AONkV0akCF5CZ%2F61WlvHoKVzMvaClpQBCRWMiv7KICxNbFWz7UDYkPcXGnCu7SxsVbpTJUhRermgPfNYHxAwmUxmuWWFmq7zJ8mZ0HpUjGiki%2FwS7lX8PLzw13TqXpmwommcsCkkNQDf9sgzDw%2BWLkGMUycy4ZUQQw6dJlJBDB6%2BB0r8lxY1wdQOKXflreSvz%2FkUv8QYgpO80Yi0qQDWqvlKtV3gUUnnjiqab%2BwqlBsfBTYJOk0DkOocX1e%2BpAn7ReZrUZYfUS0hs9Sdp6x8dOzXd%2BQFDBmTEzWU26yNnw%2FbeJEDk93PGv3N2jAKD0nfFkfIDyKVDwo4i%2BWhM3ghQ6pjWbdt%2FTkHZ6N5s1Aj0hGbNaZpKifQZh3u45qEbq2XFiD8Xz2wRUnn4eJbjX03mNVQnHbeSw1uWxveFMomvlftCwESWKSccXhfpKpaniauvzGx%2BfM1kYZWdxAWCQvcDDi9L7ABjqkAVVLDQSKdS%2F254eSH%2FgI8ANuqGPENtZrG%2BbMoNXuN0iplEtQS3zwNzj8iFNi0gfuCQxgaxWcINvYoBPz7SpZrP%2FRfP7sUpCiUtNT8IveE%2Bm6fuLIPjMqstfwYV2CYgMnBfMW7WWMn9xlP%2B438RYbeRxZeBKNSUN9KirzyMHNK6xlbt9TNXzWPhuoPNpgrJu9Xq0zUSLvvTDQBK6WYi18BDLZjz%2B1&X-Amz-Signature=70c6c3d84ad6de3a53eb813eaa4f856111a5ac6719b83b0a0f23175cba8a7fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDZSORP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0wEOVoyH2NmAnkFaC7%2FevCL0W19uWym49GvTFQI%2FHgIhAJvL0bP4cWh%2F9hzodLr2nquJBxt13UcRZO%2FzkwdTkqT1Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxUT2UJxX67PlhiUTEq3AOw1MvSTOPkYJnLwj8brpBr33%2FTxWF7scIMQVIJ3MYNQ%2FeiYuvHBKKKQIJKMsLz0%2Fc19qiTvbbumb8U7yKVAPjBHOmIXzzs9%2Bs%2BomRECuHeCOsNfQmp%2BcqCpCHpZN0nLwBTY3Ik%2BRTmoBD1l4JtjjUqcLfitRu7iWgrXyEt5AONkV0akCF5CZ%2F61WlvHoKVzMvaClpQBCRWMiv7KICxNbFWz7UDYkPcXGnCu7SxsVbpTJUhRermgPfNYHxAwmUxmuWWFmq7zJ8mZ0HpUjGiki%2FwS7lX8PLzw13TqXpmwommcsCkkNQDf9sgzDw%2BWLkGMUycy4ZUQQw6dJlJBDB6%2BB0r8lxY1wdQOKXflreSvz%2FkUv8QYgpO80Yi0qQDWqvlKtV3gUUnnjiqab%2BwqlBsfBTYJOk0DkOocX1e%2BpAn7ReZrUZYfUS0hs9Sdp6x8dOzXd%2BQFDBmTEzWU26yNnw%2FbeJEDk93PGv3N2jAKD0nfFkfIDyKVDwo4i%2BWhM3ghQ6pjWbdt%2FTkHZ6N5s1Aj0hGbNaZpKifQZh3u45qEbq2XFiD8Xz2wRUnn4eJbjX03mNVQnHbeSw1uWxveFMomvlftCwESWKSccXhfpKpaniauvzGx%2BfM1kYZWdxAWCQvcDDi9L7ABjqkAVVLDQSKdS%2F254eSH%2FgI8ANuqGPENtZrG%2BbMoNXuN0iplEtQS3zwNzj8iFNi0gfuCQxgaxWcINvYoBPz7SpZrP%2FRfP7sUpCiUtNT8IveE%2Bm6fuLIPjMqstfwYV2CYgMnBfMW7WWMn9xlP%2B438RYbeRxZeBKNSUN9KirzyMHNK6xlbt9TNXzWPhuoPNpgrJu9Xq0zUSLvvTDQBK6WYi18BDLZjz%2B1&X-Amz-Signature=e61245ae32de770c2abb8b062be61ead8bde54b295f03c16ba5855f263e96a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDZSORP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0wEOVoyH2NmAnkFaC7%2FevCL0W19uWym49GvTFQI%2FHgIhAJvL0bP4cWh%2F9hzodLr2nquJBxt13UcRZO%2FzkwdTkqT1Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxUT2UJxX67PlhiUTEq3AOw1MvSTOPkYJnLwj8brpBr33%2FTxWF7scIMQVIJ3MYNQ%2FeiYuvHBKKKQIJKMsLz0%2Fc19qiTvbbumb8U7yKVAPjBHOmIXzzs9%2Bs%2BomRECuHeCOsNfQmp%2BcqCpCHpZN0nLwBTY3Ik%2BRTmoBD1l4JtjjUqcLfitRu7iWgrXyEt5AONkV0akCF5CZ%2F61WlvHoKVzMvaClpQBCRWMiv7KICxNbFWz7UDYkPcXGnCu7SxsVbpTJUhRermgPfNYHxAwmUxmuWWFmq7zJ8mZ0HpUjGiki%2FwS7lX8PLzw13TqXpmwommcsCkkNQDf9sgzDw%2BWLkGMUycy4ZUQQw6dJlJBDB6%2BB0r8lxY1wdQOKXflreSvz%2FkUv8QYgpO80Yi0qQDWqvlKtV3gUUnnjiqab%2BwqlBsfBTYJOk0DkOocX1e%2BpAn7ReZrUZYfUS0hs9Sdp6x8dOzXd%2BQFDBmTEzWU26yNnw%2FbeJEDk93PGv3N2jAKD0nfFkfIDyKVDwo4i%2BWhM3ghQ6pjWbdt%2FTkHZ6N5s1Aj0hGbNaZpKifQZh3u45qEbq2XFiD8Xz2wRUnn4eJbjX03mNVQnHbeSw1uWxveFMomvlftCwESWKSccXhfpKpaniauvzGx%2BfM1kYZWdxAWCQvcDDi9L7ABjqkAVVLDQSKdS%2F254eSH%2FgI8ANuqGPENtZrG%2BbMoNXuN0iplEtQS3zwNzj8iFNi0gfuCQxgaxWcINvYoBPz7SpZrP%2FRfP7sUpCiUtNT8IveE%2Bm6fuLIPjMqstfwYV2CYgMnBfMW7WWMn9xlP%2B438RYbeRxZeBKNSUN9KirzyMHNK6xlbt9TNXzWPhuoPNpgrJu9Xq0zUSLvvTDQBK6WYi18BDLZjz%2B1&X-Amz-Signature=83b62c879a683302e2a085074afbaad6c0ddbec12cc115e0eeaacba351ecaade&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDZSORP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0wEOVoyH2NmAnkFaC7%2FevCL0W19uWym49GvTFQI%2FHgIhAJvL0bP4cWh%2F9hzodLr2nquJBxt13UcRZO%2FzkwdTkqT1Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxUT2UJxX67PlhiUTEq3AOw1MvSTOPkYJnLwj8brpBr33%2FTxWF7scIMQVIJ3MYNQ%2FeiYuvHBKKKQIJKMsLz0%2Fc19qiTvbbumb8U7yKVAPjBHOmIXzzs9%2Bs%2BomRECuHeCOsNfQmp%2BcqCpCHpZN0nLwBTY3Ik%2BRTmoBD1l4JtjjUqcLfitRu7iWgrXyEt5AONkV0akCF5CZ%2F61WlvHoKVzMvaClpQBCRWMiv7KICxNbFWz7UDYkPcXGnCu7SxsVbpTJUhRermgPfNYHxAwmUxmuWWFmq7zJ8mZ0HpUjGiki%2FwS7lX8PLzw13TqXpmwommcsCkkNQDf9sgzDw%2BWLkGMUycy4ZUQQw6dJlJBDB6%2BB0r8lxY1wdQOKXflreSvz%2FkUv8QYgpO80Yi0qQDWqvlKtV3gUUnnjiqab%2BwqlBsfBTYJOk0DkOocX1e%2BpAn7ReZrUZYfUS0hs9Sdp6x8dOzXd%2BQFDBmTEzWU26yNnw%2FbeJEDk93PGv3N2jAKD0nfFkfIDyKVDwo4i%2BWhM3ghQ6pjWbdt%2FTkHZ6N5s1Aj0hGbNaZpKifQZh3u45qEbq2XFiD8Xz2wRUnn4eJbjX03mNVQnHbeSw1uWxveFMomvlftCwESWKSccXhfpKpaniauvzGx%2BfM1kYZWdxAWCQvcDDi9L7ABjqkAVVLDQSKdS%2F254eSH%2FgI8ANuqGPENtZrG%2BbMoNXuN0iplEtQS3zwNzj8iFNi0gfuCQxgaxWcINvYoBPz7SpZrP%2FRfP7sUpCiUtNT8IveE%2Bm6fuLIPjMqstfwYV2CYgMnBfMW7WWMn9xlP%2B438RYbeRxZeBKNSUN9KirzyMHNK6xlbt9TNXzWPhuoPNpgrJu9Xq0zUSLvvTDQBK6WYi18BDLZjz%2B1&X-Amz-Signature=c9ac503bc5728e670ffcc848b226bde84aeaaaea25bf7b2dd91e723725ecd809&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
