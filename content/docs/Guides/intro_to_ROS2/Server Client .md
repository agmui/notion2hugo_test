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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNVBN4O%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm%2Fb6mqMkiZnX9n%2FaRuFX6X6VMNltxwLTsIH9SClK5UAiAWmCPqY8kSDXOTTJjEmpVYcriIbrr9tXQ%2FeVP1xnf77iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUUUqxdMk3ettNS3KtwDDV2qJMYaSe3t30y%2FbkzC0kNkfncn1x2L8%2BZAu2YE7Y5oiJb%2BBi1KKJ8SNVw3LD%2BcAmorj%2BLn3gl05SHbhs1%2FZhszRtz2wKfOxLQ7%2B4jPi5PerFvH1AQNzkdu2sI0WU76xlkgSpntwPw73Y4Pe8Yj8nODYtpsOuEwsML%2BjukRzdekS8jvz%2BqDTXhiSW4Q8pG3A9q6EMajlkDJXUOOZGncaxo8i4jpLmja4PEJxZFQuxU5lgYCp%2FzFJPL0OEaBI07iST7UXTLKSw1biUkhKFJl6z7vLZ73n%2FxdIjbMZTWWeBcQya%2B3GJ42iXXAiWJNHynKUM5kU874z50zKA3xfoOiSl1BU9tOkgKJgD0rMvhbzP6ocK8q%2FbFecjdKRDDy7uD7Q%2BqTUKbEq%2FfdKwVLBtd%2FOcTPbwuq%2Bu3p5ooiH5KnQ2SgHnFzoUCAcFcqvrNPYcMV8CeewquOAcZTNC2v1RidGQ3m8CcmX3v%2FFLUP1BxcG6qsuEM0BY9DlK%2FH02000tqe7W1UoDYoZI%2FkRQcUpRGM72TG1EkHryKF498PCxXN53zcNir03%2BWY3wM3984vob4XnZLVx0lYfxJO4MJy8zZ7Uf2aMKfIzWUu87DEn5KH%2BLeL2ae0yKsc94Ttcr8wkd7jwQY6pgHEcrb30Cu3zjgb7Xkh3O0LIfVE0%2B5%2B9pvmne%2Fmp4svU3am04VRsyFRFG2nw3LxFC3J055qwbuSUPDEd0Iqpt9iEL7UO80NoTn8FBjOyE5X6iKWdWfCu619hfPrPJmVPfK4UkEu8lBq%2Fv2sZ%2FjznU0%2FtkrSsWTLLRJQsI991KXZQYZeIw9GZcpJD7%2Fv8JW3pqDli4n6gUaVDiaex%2BcUlCVdSY38LJaz&X-Amz-Signature=e5b838d3a080e1e63d4ccc9a88961cd17f399664489d6721efabf0c4564cacf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNVBN4O%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm%2Fb6mqMkiZnX9n%2FaRuFX6X6VMNltxwLTsIH9SClK5UAiAWmCPqY8kSDXOTTJjEmpVYcriIbrr9tXQ%2FeVP1xnf77iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUUUqxdMk3ettNS3KtwDDV2qJMYaSe3t30y%2FbkzC0kNkfncn1x2L8%2BZAu2YE7Y5oiJb%2BBi1KKJ8SNVw3LD%2BcAmorj%2BLn3gl05SHbhs1%2FZhszRtz2wKfOxLQ7%2B4jPi5PerFvH1AQNzkdu2sI0WU76xlkgSpntwPw73Y4Pe8Yj8nODYtpsOuEwsML%2BjukRzdekS8jvz%2BqDTXhiSW4Q8pG3A9q6EMajlkDJXUOOZGncaxo8i4jpLmja4PEJxZFQuxU5lgYCp%2FzFJPL0OEaBI07iST7UXTLKSw1biUkhKFJl6z7vLZ73n%2FxdIjbMZTWWeBcQya%2B3GJ42iXXAiWJNHynKUM5kU874z50zKA3xfoOiSl1BU9tOkgKJgD0rMvhbzP6ocK8q%2FbFecjdKRDDy7uD7Q%2BqTUKbEq%2FfdKwVLBtd%2FOcTPbwuq%2Bu3p5ooiH5KnQ2SgHnFzoUCAcFcqvrNPYcMV8CeewquOAcZTNC2v1RidGQ3m8CcmX3v%2FFLUP1BxcG6qsuEM0BY9DlK%2FH02000tqe7W1UoDYoZI%2FkRQcUpRGM72TG1EkHryKF498PCxXN53zcNir03%2BWY3wM3984vob4XnZLVx0lYfxJO4MJy8zZ7Uf2aMKfIzWUu87DEn5KH%2BLeL2ae0yKsc94Ttcr8wkd7jwQY6pgHEcrb30Cu3zjgb7Xkh3O0LIfVE0%2B5%2B9pvmne%2Fmp4svU3am04VRsyFRFG2nw3LxFC3J055qwbuSUPDEd0Iqpt9iEL7UO80NoTn8FBjOyE5X6iKWdWfCu619hfPrPJmVPfK4UkEu8lBq%2Fv2sZ%2FjznU0%2FtkrSsWTLLRJQsI991KXZQYZeIw9GZcpJD7%2Fv8JW3pqDli4n6gUaVDiaex%2BcUlCVdSY38LJaz&X-Amz-Signature=cd539d4e7fe28d11af6e948146917c3640f43f2f378f7f94cf472079dc822d44&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNVBN4O%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm%2Fb6mqMkiZnX9n%2FaRuFX6X6VMNltxwLTsIH9SClK5UAiAWmCPqY8kSDXOTTJjEmpVYcriIbrr9tXQ%2FeVP1xnf77iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUUUqxdMk3ettNS3KtwDDV2qJMYaSe3t30y%2FbkzC0kNkfncn1x2L8%2BZAu2YE7Y5oiJb%2BBi1KKJ8SNVw3LD%2BcAmorj%2BLn3gl05SHbhs1%2FZhszRtz2wKfOxLQ7%2B4jPi5PerFvH1AQNzkdu2sI0WU76xlkgSpntwPw73Y4Pe8Yj8nODYtpsOuEwsML%2BjukRzdekS8jvz%2BqDTXhiSW4Q8pG3A9q6EMajlkDJXUOOZGncaxo8i4jpLmja4PEJxZFQuxU5lgYCp%2FzFJPL0OEaBI07iST7UXTLKSw1biUkhKFJl6z7vLZ73n%2FxdIjbMZTWWeBcQya%2B3GJ42iXXAiWJNHynKUM5kU874z50zKA3xfoOiSl1BU9tOkgKJgD0rMvhbzP6ocK8q%2FbFecjdKRDDy7uD7Q%2BqTUKbEq%2FfdKwVLBtd%2FOcTPbwuq%2Bu3p5ooiH5KnQ2SgHnFzoUCAcFcqvrNPYcMV8CeewquOAcZTNC2v1RidGQ3m8CcmX3v%2FFLUP1BxcG6qsuEM0BY9DlK%2FH02000tqe7W1UoDYoZI%2FkRQcUpRGM72TG1EkHryKF498PCxXN53zcNir03%2BWY3wM3984vob4XnZLVx0lYfxJO4MJy8zZ7Uf2aMKfIzWUu87DEn5KH%2BLeL2ae0yKsc94Ttcr8wkd7jwQY6pgHEcrb30Cu3zjgb7Xkh3O0LIfVE0%2B5%2B9pvmne%2Fmp4svU3am04VRsyFRFG2nw3LxFC3J055qwbuSUPDEd0Iqpt9iEL7UO80NoTn8FBjOyE5X6iKWdWfCu619hfPrPJmVPfK4UkEu8lBq%2Fv2sZ%2FjznU0%2FtkrSsWTLLRJQsI991KXZQYZeIw9GZcpJD7%2Fv8JW3pqDli4n6gUaVDiaex%2BcUlCVdSY38LJaz&X-Amz-Signature=961273009881a421734c30c9d1dcb177013fb658373659087fb110134d2acadc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNVBN4O%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm%2Fb6mqMkiZnX9n%2FaRuFX6X6VMNltxwLTsIH9SClK5UAiAWmCPqY8kSDXOTTJjEmpVYcriIbrr9tXQ%2FeVP1xnf77iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUUUqxdMk3ettNS3KtwDDV2qJMYaSe3t30y%2FbkzC0kNkfncn1x2L8%2BZAu2YE7Y5oiJb%2BBi1KKJ8SNVw3LD%2BcAmorj%2BLn3gl05SHbhs1%2FZhszRtz2wKfOxLQ7%2B4jPi5PerFvH1AQNzkdu2sI0WU76xlkgSpntwPw73Y4Pe8Yj8nODYtpsOuEwsML%2BjukRzdekS8jvz%2BqDTXhiSW4Q8pG3A9q6EMajlkDJXUOOZGncaxo8i4jpLmja4PEJxZFQuxU5lgYCp%2FzFJPL0OEaBI07iST7UXTLKSw1biUkhKFJl6z7vLZ73n%2FxdIjbMZTWWeBcQya%2B3GJ42iXXAiWJNHynKUM5kU874z50zKA3xfoOiSl1BU9tOkgKJgD0rMvhbzP6ocK8q%2FbFecjdKRDDy7uD7Q%2BqTUKbEq%2FfdKwVLBtd%2FOcTPbwuq%2Bu3p5ooiH5KnQ2SgHnFzoUCAcFcqvrNPYcMV8CeewquOAcZTNC2v1RidGQ3m8CcmX3v%2FFLUP1BxcG6qsuEM0BY9DlK%2FH02000tqe7W1UoDYoZI%2FkRQcUpRGM72TG1EkHryKF498PCxXN53zcNir03%2BWY3wM3984vob4XnZLVx0lYfxJO4MJy8zZ7Uf2aMKfIzWUu87DEn5KH%2BLeL2ae0yKsc94Ttcr8wkd7jwQY6pgHEcrb30Cu3zjgb7Xkh3O0LIfVE0%2B5%2B9pvmne%2Fmp4svU3am04VRsyFRFG2nw3LxFC3J055qwbuSUPDEd0Iqpt9iEL7UO80NoTn8FBjOyE5X6iKWdWfCu619hfPrPJmVPfK4UkEu8lBq%2Fv2sZ%2FjznU0%2FtkrSsWTLLRJQsI991KXZQYZeIw9GZcpJD7%2Fv8JW3pqDli4n6gUaVDiaex%2BcUlCVdSY38LJaz&X-Amz-Signature=a2fe535eba51178ab0e8e3197bda8a6eb3588b9d2ba731e5fb4ec7b3f351d3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNVBN4O%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm%2Fb6mqMkiZnX9n%2FaRuFX6X6VMNltxwLTsIH9SClK5UAiAWmCPqY8kSDXOTTJjEmpVYcriIbrr9tXQ%2FeVP1xnf77iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUUUqxdMk3ettNS3KtwDDV2qJMYaSe3t30y%2FbkzC0kNkfncn1x2L8%2BZAu2YE7Y5oiJb%2BBi1KKJ8SNVw3LD%2BcAmorj%2BLn3gl05SHbhs1%2FZhszRtz2wKfOxLQ7%2B4jPi5PerFvH1AQNzkdu2sI0WU76xlkgSpntwPw73Y4Pe8Yj8nODYtpsOuEwsML%2BjukRzdekS8jvz%2BqDTXhiSW4Q8pG3A9q6EMajlkDJXUOOZGncaxo8i4jpLmja4PEJxZFQuxU5lgYCp%2FzFJPL0OEaBI07iST7UXTLKSw1biUkhKFJl6z7vLZ73n%2FxdIjbMZTWWeBcQya%2B3GJ42iXXAiWJNHynKUM5kU874z50zKA3xfoOiSl1BU9tOkgKJgD0rMvhbzP6ocK8q%2FbFecjdKRDDy7uD7Q%2BqTUKbEq%2FfdKwVLBtd%2FOcTPbwuq%2Bu3p5ooiH5KnQ2SgHnFzoUCAcFcqvrNPYcMV8CeewquOAcZTNC2v1RidGQ3m8CcmX3v%2FFLUP1BxcG6qsuEM0BY9DlK%2FH02000tqe7W1UoDYoZI%2FkRQcUpRGM72TG1EkHryKF498PCxXN53zcNir03%2BWY3wM3984vob4XnZLVx0lYfxJO4MJy8zZ7Uf2aMKfIzWUu87DEn5KH%2BLeL2ae0yKsc94Ttcr8wkd7jwQY6pgHEcrb30Cu3zjgb7Xkh3O0LIfVE0%2B5%2B9pvmne%2Fmp4svU3am04VRsyFRFG2nw3LxFC3J055qwbuSUPDEd0Iqpt9iEL7UO80NoTn8FBjOyE5X6iKWdWfCu619hfPrPJmVPfK4UkEu8lBq%2Fv2sZ%2FjznU0%2FtkrSsWTLLRJQsI991KXZQYZeIw9GZcpJD7%2Fv8JW3pqDli4n6gUaVDiaex%2BcUlCVdSY38LJaz&X-Amz-Signature=47c23a12e5fe305b4d573ee2565c93aead7ba0d41bcee53a2b0d05fd8626708d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
