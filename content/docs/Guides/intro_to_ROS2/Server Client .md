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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAFXDYE%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnfHvE1aWqhQCv5elFr%2Fme28MnLnelhcQAwdgt8JlCwIhAO0IXkh%2B00kSOAZZA%2F3mjkt9qOD8dh4yZWQ8EpYiBqb%2FKv8DCGkQABoMNjM3NDIzMTgzODA1Igz%2Fjt41qxBvKDnQAAMq3AMkoW81ySYp1ije68veAt9daHXyDb%2BF70OD6G6XQSixFgzWxaYFQ0IEXr5d6Vaxa29r3WEDk5NeLteyy0OD1pNiZiDf1HoSvZ9he0R4hpaWLE7wHundztbAPguT9LRVUnh%2BETSt2aENJtgLL8nDVcnCZSQiRQGWUz1T7QcQqcK15Q3TshdLWcLoDgKkk%2FfbD1jpVTjEXhzzToYodYM6Oec%2Fay7AdMfxJlStWLe7Lsa73%2FEBOUesaVbt0V19cBIy%2FPmrtiGLbe2xou9elyHg8lV7ZqKtbByNlcR0RUcrhoYWf05rW3%2FUSN7rArZT5IZd43x8Xs9rIMBctPEhdLHpanu2UtTgaiBufNkPxCFtjjWw0hkN%2BuehqYQ9lNPxwO0NNwMjVeSs4KZ%2BXb%2FGIvm39PhYfNjbp45ym7Rk9cb6WWvMXaTukLZiy%2FPMTSTpihaQMNx5x%2FMn0vk%2BoasGrgJFjEbJab64LGeMz5PNFnXwasgS9XAv3HSBoLSD2y3KckcBHBDmHHcQhti08JdbB5VEYuBSDqOBdcwh9TvNQfgN%2F5B2QqpiB8BOn%2FhvM0pn6t7w3SQwuXm8or529AjmYvGtRljddqDJGvXA3uEeJyqeV3b0t%2FOtpmqRdqotNkHOxTCy9YbHBjqkAXurUKmJ8WF5%2B3he5gDHRA23cpFOXqvi2RSz2xPGt9fTShMaYgpbmn2r4ekWxSnuBmuQ8%2FOxt8rcF6EQX1i%2BJQOwr67DJiTRe8JUvu4EwD4j%2B2CuxNwslm2%2B5e8ILWfN0Ne2mc3ZdFMi3ooZf3NYY0KtvMDGsq7zX0rtBJiaQY94yUkmVREQKD669lm%2BiNuhoakOeE7RiYdjVIgXA3r2zASjHPWZ&X-Amz-Signature=817803f470fb96e41d8ee6e18e43f2222d3b6ed52d5f4e7a9fb0a078ade92850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAFXDYE%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnfHvE1aWqhQCv5elFr%2Fme28MnLnelhcQAwdgt8JlCwIhAO0IXkh%2B00kSOAZZA%2F3mjkt9qOD8dh4yZWQ8EpYiBqb%2FKv8DCGkQABoMNjM3NDIzMTgzODA1Igz%2Fjt41qxBvKDnQAAMq3AMkoW81ySYp1ije68veAt9daHXyDb%2BF70OD6G6XQSixFgzWxaYFQ0IEXr5d6Vaxa29r3WEDk5NeLteyy0OD1pNiZiDf1HoSvZ9he0R4hpaWLE7wHundztbAPguT9LRVUnh%2BETSt2aENJtgLL8nDVcnCZSQiRQGWUz1T7QcQqcK15Q3TshdLWcLoDgKkk%2FfbD1jpVTjEXhzzToYodYM6Oec%2Fay7AdMfxJlStWLe7Lsa73%2FEBOUesaVbt0V19cBIy%2FPmrtiGLbe2xou9elyHg8lV7ZqKtbByNlcR0RUcrhoYWf05rW3%2FUSN7rArZT5IZd43x8Xs9rIMBctPEhdLHpanu2UtTgaiBufNkPxCFtjjWw0hkN%2BuehqYQ9lNPxwO0NNwMjVeSs4KZ%2BXb%2FGIvm39PhYfNjbp45ym7Rk9cb6WWvMXaTukLZiy%2FPMTSTpihaQMNx5x%2FMn0vk%2BoasGrgJFjEbJab64LGeMz5PNFnXwasgS9XAv3HSBoLSD2y3KckcBHBDmHHcQhti08JdbB5VEYuBSDqOBdcwh9TvNQfgN%2F5B2QqpiB8BOn%2FhvM0pn6t7w3SQwuXm8or529AjmYvGtRljddqDJGvXA3uEeJyqeV3b0t%2FOtpmqRdqotNkHOxTCy9YbHBjqkAXurUKmJ8WF5%2B3he5gDHRA23cpFOXqvi2RSz2xPGt9fTShMaYgpbmn2r4ekWxSnuBmuQ8%2FOxt8rcF6EQX1i%2BJQOwr67DJiTRe8JUvu4EwD4j%2B2CuxNwslm2%2B5e8ILWfN0Ne2mc3ZdFMi3ooZf3NYY0KtvMDGsq7zX0rtBJiaQY94yUkmVREQKD669lm%2BiNuhoakOeE7RiYdjVIgXA3r2zASjHPWZ&X-Amz-Signature=8dfc66f0d9df8aeea6fb174cf83076e5a485c91d11485b1a4933780553866908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAFXDYE%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnfHvE1aWqhQCv5elFr%2Fme28MnLnelhcQAwdgt8JlCwIhAO0IXkh%2B00kSOAZZA%2F3mjkt9qOD8dh4yZWQ8EpYiBqb%2FKv8DCGkQABoMNjM3NDIzMTgzODA1Igz%2Fjt41qxBvKDnQAAMq3AMkoW81ySYp1ije68veAt9daHXyDb%2BF70OD6G6XQSixFgzWxaYFQ0IEXr5d6Vaxa29r3WEDk5NeLteyy0OD1pNiZiDf1HoSvZ9he0R4hpaWLE7wHundztbAPguT9LRVUnh%2BETSt2aENJtgLL8nDVcnCZSQiRQGWUz1T7QcQqcK15Q3TshdLWcLoDgKkk%2FfbD1jpVTjEXhzzToYodYM6Oec%2Fay7AdMfxJlStWLe7Lsa73%2FEBOUesaVbt0V19cBIy%2FPmrtiGLbe2xou9elyHg8lV7ZqKtbByNlcR0RUcrhoYWf05rW3%2FUSN7rArZT5IZd43x8Xs9rIMBctPEhdLHpanu2UtTgaiBufNkPxCFtjjWw0hkN%2BuehqYQ9lNPxwO0NNwMjVeSs4KZ%2BXb%2FGIvm39PhYfNjbp45ym7Rk9cb6WWvMXaTukLZiy%2FPMTSTpihaQMNx5x%2FMn0vk%2BoasGrgJFjEbJab64LGeMz5PNFnXwasgS9XAv3HSBoLSD2y3KckcBHBDmHHcQhti08JdbB5VEYuBSDqOBdcwh9TvNQfgN%2F5B2QqpiB8BOn%2FhvM0pn6t7w3SQwuXm8or529AjmYvGtRljddqDJGvXA3uEeJyqeV3b0t%2FOtpmqRdqotNkHOxTCy9YbHBjqkAXurUKmJ8WF5%2B3he5gDHRA23cpFOXqvi2RSz2xPGt9fTShMaYgpbmn2r4ekWxSnuBmuQ8%2FOxt8rcF6EQX1i%2BJQOwr67DJiTRe8JUvu4EwD4j%2B2CuxNwslm2%2B5e8ILWfN0Ne2mc3ZdFMi3ooZf3NYY0KtvMDGsq7zX0rtBJiaQY94yUkmVREQKD669lm%2BiNuhoakOeE7RiYdjVIgXA3r2zASjHPWZ&X-Amz-Signature=a9bd49a116c457c4646f4914c499c64a55ce4eb90edacbcf549591709f4df2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAFXDYE%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnfHvE1aWqhQCv5elFr%2Fme28MnLnelhcQAwdgt8JlCwIhAO0IXkh%2B00kSOAZZA%2F3mjkt9qOD8dh4yZWQ8EpYiBqb%2FKv8DCGkQABoMNjM3NDIzMTgzODA1Igz%2Fjt41qxBvKDnQAAMq3AMkoW81ySYp1ije68veAt9daHXyDb%2BF70OD6G6XQSixFgzWxaYFQ0IEXr5d6Vaxa29r3WEDk5NeLteyy0OD1pNiZiDf1HoSvZ9he0R4hpaWLE7wHundztbAPguT9LRVUnh%2BETSt2aENJtgLL8nDVcnCZSQiRQGWUz1T7QcQqcK15Q3TshdLWcLoDgKkk%2FfbD1jpVTjEXhzzToYodYM6Oec%2Fay7AdMfxJlStWLe7Lsa73%2FEBOUesaVbt0V19cBIy%2FPmrtiGLbe2xou9elyHg8lV7ZqKtbByNlcR0RUcrhoYWf05rW3%2FUSN7rArZT5IZd43x8Xs9rIMBctPEhdLHpanu2UtTgaiBufNkPxCFtjjWw0hkN%2BuehqYQ9lNPxwO0NNwMjVeSs4KZ%2BXb%2FGIvm39PhYfNjbp45ym7Rk9cb6WWvMXaTukLZiy%2FPMTSTpihaQMNx5x%2FMn0vk%2BoasGrgJFjEbJab64LGeMz5PNFnXwasgS9XAv3HSBoLSD2y3KckcBHBDmHHcQhti08JdbB5VEYuBSDqOBdcwh9TvNQfgN%2F5B2QqpiB8BOn%2FhvM0pn6t7w3SQwuXm8or529AjmYvGtRljddqDJGvXA3uEeJyqeV3b0t%2FOtpmqRdqotNkHOxTCy9YbHBjqkAXurUKmJ8WF5%2B3he5gDHRA23cpFOXqvi2RSz2xPGt9fTShMaYgpbmn2r4ekWxSnuBmuQ8%2FOxt8rcF6EQX1i%2BJQOwr67DJiTRe8JUvu4EwD4j%2B2CuxNwslm2%2B5e8ILWfN0Ne2mc3ZdFMi3ooZf3NYY0KtvMDGsq7zX0rtBJiaQY94yUkmVREQKD669lm%2BiNuhoakOeE7RiYdjVIgXA3r2zASjHPWZ&X-Amz-Signature=e4722d1ea29524168d799f9463eb9e793a7d28436e18d7c8ff7fdb94118f49f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAFXDYE%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnfHvE1aWqhQCv5elFr%2Fme28MnLnelhcQAwdgt8JlCwIhAO0IXkh%2B00kSOAZZA%2F3mjkt9qOD8dh4yZWQ8EpYiBqb%2FKv8DCGkQABoMNjM3NDIzMTgzODA1Igz%2Fjt41qxBvKDnQAAMq3AMkoW81ySYp1ije68veAt9daHXyDb%2BF70OD6G6XQSixFgzWxaYFQ0IEXr5d6Vaxa29r3WEDk5NeLteyy0OD1pNiZiDf1HoSvZ9he0R4hpaWLE7wHundztbAPguT9LRVUnh%2BETSt2aENJtgLL8nDVcnCZSQiRQGWUz1T7QcQqcK15Q3TshdLWcLoDgKkk%2FfbD1jpVTjEXhzzToYodYM6Oec%2Fay7AdMfxJlStWLe7Lsa73%2FEBOUesaVbt0V19cBIy%2FPmrtiGLbe2xou9elyHg8lV7ZqKtbByNlcR0RUcrhoYWf05rW3%2FUSN7rArZT5IZd43x8Xs9rIMBctPEhdLHpanu2UtTgaiBufNkPxCFtjjWw0hkN%2BuehqYQ9lNPxwO0NNwMjVeSs4KZ%2BXb%2FGIvm39PhYfNjbp45ym7Rk9cb6WWvMXaTukLZiy%2FPMTSTpihaQMNx5x%2FMn0vk%2BoasGrgJFjEbJab64LGeMz5PNFnXwasgS9XAv3HSBoLSD2y3KckcBHBDmHHcQhti08JdbB5VEYuBSDqOBdcwh9TvNQfgN%2F5B2QqpiB8BOn%2FhvM0pn6t7w3SQwuXm8or529AjmYvGtRljddqDJGvXA3uEeJyqeV3b0t%2FOtpmqRdqotNkHOxTCy9YbHBjqkAXurUKmJ8WF5%2B3he5gDHRA23cpFOXqvi2RSz2xPGt9fTShMaYgpbmn2r4ekWxSnuBmuQ8%2FOxt8rcF6EQX1i%2BJQOwr67DJiTRe8JUvu4EwD4j%2B2CuxNwslm2%2B5e8ILWfN0Ne2mc3ZdFMi3ooZf3NYY0KtvMDGsq7zX0rtBJiaQY94yUkmVREQKD669lm%2BiNuhoakOeE7RiYdjVIgXA3r2zASjHPWZ&X-Amz-Signature=6283ae185d32fb47405f8fd67e8ec52b4811450079b309bb3eb7b8bac8690bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
