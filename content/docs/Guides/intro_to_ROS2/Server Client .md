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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MFBLAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7cxJhCSVQpVyeFd85LslpYUvQN%2Bu5vG%2F33N2o%2FKwv9AiAM9vy3Rw3PmG6y7FmzTEdW%2BmGP4DM26ChrfkkpCywqBSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F3vxzPutM5qni4dKtwD7KeRjmBpYuGs08w3uvpu0BA6qZwEH6i7DeDyLpS4HrbQskwEqYlwMk3MJOz7Gnp21uCxzvEpWb%2B1%2BoBdWQTsNRNDouxQPxO%2BFpL9aWI8qfkugKJsfeKyBdoqTZuTetJhlPHRckdGmBGQW8EwB1TOmOSbaay9nmqICwoZLTxbm5%2FkpXkmbueVJHALWmLhb9y029kXMneS%2B7tmVgBflEAsrUUT4MuSnvZOPYQ%2Fs2iaKX2fzwFWhjam93Pm1xzAZMFiY56mlhOX59kz%2F9d59xaT86TpURgC1ufJyJeBy9NprY44xTjf%2F8dxDZYJf5Ur%2BLVKTT8lo52%2BrQyTfMFqiONFKimd%2BkInhfDeEiAHs51iaxElchgBNXp1D8TBQ2yY1mZuR1LnotYjRhNfG1oYIphRqfBGLAD0TUmQSoPhFYekyKr8DI%2BU%2B0cGBIgHKBGaujf4IFQ1lBUas3LkwE2I9uhwt1XxrtSzc%2BChBgKL9yp05ATKTqZuRISXW2vSZ3efX3Bhcy0rNab7QaT6LTEHL%2F0iou2P6BnJtmQcPWU0Kl%2B2f0gA34kkApeYC4qGevzSRbuY1ApLfR039XLaYEAR3pc3AtWbFvV63DDPvHVhEvTrHhA3kllPtk6cPaepLGsw2KD7wAY6pgFBegk14ris93yVbHlbsEp5xtJGnmykyK3yj%2F5YH3TOkNvKVYMFQXjLn0twugAbACPdf22uelmIl6Brp%2ByCV6jcCI8mLsisvMGaWc7sU9hsM3QTQTBD9wavVK3jZ8d2%2FBTsZzDXYPpp%2FlxTHDCS7MFHf9L0wEUXR%2FvH%2FaLT9vn7BNQWFpV8VIpMCEbt8H2qwS3sEMo1f4AydvuOo3Tf3%2FxNWBM94Gjr&X-Amz-Signature=825e72db80e9ba5cd5aec6693cfedb03545c2c5262974dd1694ec3854fb709ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MFBLAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7cxJhCSVQpVyeFd85LslpYUvQN%2Bu5vG%2F33N2o%2FKwv9AiAM9vy3Rw3PmG6y7FmzTEdW%2BmGP4DM26ChrfkkpCywqBSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F3vxzPutM5qni4dKtwD7KeRjmBpYuGs08w3uvpu0BA6qZwEH6i7DeDyLpS4HrbQskwEqYlwMk3MJOz7Gnp21uCxzvEpWb%2B1%2BoBdWQTsNRNDouxQPxO%2BFpL9aWI8qfkugKJsfeKyBdoqTZuTetJhlPHRckdGmBGQW8EwB1TOmOSbaay9nmqICwoZLTxbm5%2FkpXkmbueVJHALWmLhb9y029kXMneS%2B7tmVgBflEAsrUUT4MuSnvZOPYQ%2Fs2iaKX2fzwFWhjam93Pm1xzAZMFiY56mlhOX59kz%2F9d59xaT86TpURgC1ufJyJeBy9NprY44xTjf%2F8dxDZYJf5Ur%2BLVKTT8lo52%2BrQyTfMFqiONFKimd%2BkInhfDeEiAHs51iaxElchgBNXp1D8TBQ2yY1mZuR1LnotYjRhNfG1oYIphRqfBGLAD0TUmQSoPhFYekyKr8DI%2BU%2B0cGBIgHKBGaujf4IFQ1lBUas3LkwE2I9uhwt1XxrtSzc%2BChBgKL9yp05ATKTqZuRISXW2vSZ3efX3Bhcy0rNab7QaT6LTEHL%2F0iou2P6BnJtmQcPWU0Kl%2B2f0gA34kkApeYC4qGevzSRbuY1ApLfR039XLaYEAR3pc3AtWbFvV63DDPvHVhEvTrHhA3kllPtk6cPaepLGsw2KD7wAY6pgFBegk14ris93yVbHlbsEp5xtJGnmykyK3yj%2F5YH3TOkNvKVYMFQXjLn0twugAbACPdf22uelmIl6Brp%2ByCV6jcCI8mLsisvMGaWc7sU9hsM3QTQTBD9wavVK3jZ8d2%2FBTsZzDXYPpp%2FlxTHDCS7MFHf9L0wEUXR%2FvH%2FaLT9vn7BNQWFpV8VIpMCEbt8H2qwS3sEMo1f4AydvuOo3Tf3%2FxNWBM94Gjr&X-Amz-Signature=e6668fd392d3a38ebeff56a455125068cb734051f4de1941e94b4d9e0039b16a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MFBLAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7cxJhCSVQpVyeFd85LslpYUvQN%2Bu5vG%2F33N2o%2FKwv9AiAM9vy3Rw3PmG6y7FmzTEdW%2BmGP4DM26ChrfkkpCywqBSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F3vxzPutM5qni4dKtwD7KeRjmBpYuGs08w3uvpu0BA6qZwEH6i7DeDyLpS4HrbQskwEqYlwMk3MJOz7Gnp21uCxzvEpWb%2B1%2BoBdWQTsNRNDouxQPxO%2BFpL9aWI8qfkugKJsfeKyBdoqTZuTetJhlPHRckdGmBGQW8EwB1TOmOSbaay9nmqICwoZLTxbm5%2FkpXkmbueVJHALWmLhb9y029kXMneS%2B7tmVgBflEAsrUUT4MuSnvZOPYQ%2Fs2iaKX2fzwFWhjam93Pm1xzAZMFiY56mlhOX59kz%2F9d59xaT86TpURgC1ufJyJeBy9NprY44xTjf%2F8dxDZYJf5Ur%2BLVKTT8lo52%2BrQyTfMFqiONFKimd%2BkInhfDeEiAHs51iaxElchgBNXp1D8TBQ2yY1mZuR1LnotYjRhNfG1oYIphRqfBGLAD0TUmQSoPhFYekyKr8DI%2BU%2B0cGBIgHKBGaujf4IFQ1lBUas3LkwE2I9uhwt1XxrtSzc%2BChBgKL9yp05ATKTqZuRISXW2vSZ3efX3Bhcy0rNab7QaT6LTEHL%2F0iou2P6BnJtmQcPWU0Kl%2B2f0gA34kkApeYC4qGevzSRbuY1ApLfR039XLaYEAR3pc3AtWbFvV63DDPvHVhEvTrHhA3kllPtk6cPaepLGsw2KD7wAY6pgFBegk14ris93yVbHlbsEp5xtJGnmykyK3yj%2F5YH3TOkNvKVYMFQXjLn0twugAbACPdf22uelmIl6Brp%2ByCV6jcCI8mLsisvMGaWc7sU9hsM3QTQTBD9wavVK3jZ8d2%2FBTsZzDXYPpp%2FlxTHDCS7MFHf9L0wEUXR%2FvH%2FaLT9vn7BNQWFpV8VIpMCEbt8H2qwS3sEMo1f4AydvuOo3Tf3%2FxNWBM94Gjr&X-Amz-Signature=4e77589dadd963275410cc16860eb81cd94603d6b72d428bcb2ce193c59f8240&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MFBLAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7cxJhCSVQpVyeFd85LslpYUvQN%2Bu5vG%2F33N2o%2FKwv9AiAM9vy3Rw3PmG6y7FmzTEdW%2BmGP4DM26ChrfkkpCywqBSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F3vxzPutM5qni4dKtwD7KeRjmBpYuGs08w3uvpu0BA6qZwEH6i7DeDyLpS4HrbQskwEqYlwMk3MJOz7Gnp21uCxzvEpWb%2B1%2BoBdWQTsNRNDouxQPxO%2BFpL9aWI8qfkugKJsfeKyBdoqTZuTetJhlPHRckdGmBGQW8EwB1TOmOSbaay9nmqICwoZLTxbm5%2FkpXkmbueVJHALWmLhb9y029kXMneS%2B7tmVgBflEAsrUUT4MuSnvZOPYQ%2Fs2iaKX2fzwFWhjam93Pm1xzAZMFiY56mlhOX59kz%2F9d59xaT86TpURgC1ufJyJeBy9NprY44xTjf%2F8dxDZYJf5Ur%2BLVKTT8lo52%2BrQyTfMFqiONFKimd%2BkInhfDeEiAHs51iaxElchgBNXp1D8TBQ2yY1mZuR1LnotYjRhNfG1oYIphRqfBGLAD0TUmQSoPhFYekyKr8DI%2BU%2B0cGBIgHKBGaujf4IFQ1lBUas3LkwE2I9uhwt1XxrtSzc%2BChBgKL9yp05ATKTqZuRISXW2vSZ3efX3Bhcy0rNab7QaT6LTEHL%2F0iou2P6BnJtmQcPWU0Kl%2B2f0gA34kkApeYC4qGevzSRbuY1ApLfR039XLaYEAR3pc3AtWbFvV63DDPvHVhEvTrHhA3kllPtk6cPaepLGsw2KD7wAY6pgFBegk14ris93yVbHlbsEp5xtJGnmykyK3yj%2F5YH3TOkNvKVYMFQXjLn0twugAbACPdf22uelmIl6Brp%2ByCV6jcCI8mLsisvMGaWc7sU9hsM3QTQTBD9wavVK3jZ8d2%2FBTsZzDXYPpp%2FlxTHDCS7MFHf9L0wEUXR%2FvH%2FaLT9vn7BNQWFpV8VIpMCEbt8H2qwS3sEMo1f4AydvuOo3Tf3%2FxNWBM94Gjr&X-Amz-Signature=7400458d850f6e2b758926512a2d287ed9ce7d0d4d842c582d2c82e0f86aa3af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MFBLAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7cxJhCSVQpVyeFd85LslpYUvQN%2Bu5vG%2F33N2o%2FKwv9AiAM9vy3Rw3PmG6y7FmzTEdW%2BmGP4DM26ChrfkkpCywqBSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F3vxzPutM5qni4dKtwD7KeRjmBpYuGs08w3uvpu0BA6qZwEH6i7DeDyLpS4HrbQskwEqYlwMk3MJOz7Gnp21uCxzvEpWb%2B1%2BoBdWQTsNRNDouxQPxO%2BFpL9aWI8qfkugKJsfeKyBdoqTZuTetJhlPHRckdGmBGQW8EwB1TOmOSbaay9nmqICwoZLTxbm5%2FkpXkmbueVJHALWmLhb9y029kXMneS%2B7tmVgBflEAsrUUT4MuSnvZOPYQ%2Fs2iaKX2fzwFWhjam93Pm1xzAZMFiY56mlhOX59kz%2F9d59xaT86TpURgC1ufJyJeBy9NprY44xTjf%2F8dxDZYJf5Ur%2BLVKTT8lo52%2BrQyTfMFqiONFKimd%2BkInhfDeEiAHs51iaxElchgBNXp1D8TBQ2yY1mZuR1LnotYjRhNfG1oYIphRqfBGLAD0TUmQSoPhFYekyKr8DI%2BU%2B0cGBIgHKBGaujf4IFQ1lBUas3LkwE2I9uhwt1XxrtSzc%2BChBgKL9yp05ATKTqZuRISXW2vSZ3efX3Bhcy0rNab7QaT6LTEHL%2F0iou2P6BnJtmQcPWU0Kl%2B2f0gA34kkApeYC4qGevzSRbuY1ApLfR039XLaYEAR3pc3AtWbFvV63DDPvHVhEvTrHhA3kllPtk6cPaepLGsw2KD7wAY6pgFBegk14ris93yVbHlbsEp5xtJGnmykyK3yj%2F5YH3TOkNvKVYMFQXjLn0twugAbACPdf22uelmIl6Brp%2ByCV6jcCI8mLsisvMGaWc7sU9hsM3QTQTBD9wavVK3jZ8d2%2FBTsZzDXYPpp%2FlxTHDCS7MFHf9L0wEUXR%2FvH%2FaLT9vn7BNQWFpV8VIpMCEbt8H2qwS3sEMo1f4AydvuOo3Tf3%2FxNWBM94Gjr&X-Amz-Signature=0ece8640364be18ae7465d50ad5d42e8bfc77dc93ca8377b06b9a0aaa140c7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
