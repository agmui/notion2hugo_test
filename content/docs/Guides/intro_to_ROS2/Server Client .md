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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUDIODT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDqsTay%2FTJjoBR3CatCdqQonObAwxJ%2B8Z072V0e6mvKdAIhAK%2Bq6G2szvLRiVa6U9MIeXh2Lz7OlLDT8WAtWJk5viixKv8DCGMQABoMNjM3NDIzMTgzODA1IgxaojDYZ6RPI88yj2Yq3ANAFCiEa6tWVGHp1b3L1%2FDMrXiweCf3U3P%2Fw9%2BRhBmge7UGVcRzlVvyS%2BsjxZ6ORXN3nTpYTKjQVmTWloUq8i6h9BYxKwumbTigJ5jRD4LZ%2FKJgs8CVkhWaHgE%2FYTGuNeKGha%2FMNsFlUApj3V38o8xknH4tuhoNDj1Fopjt%2BCRcKqSuV%2FZQVhNo69HcK9%2BsRXY8oj3d9uz1ByJP5hm%2FXOpWdkLPKsovZsm8OXodEoj63Rz5jRVqH7zMsXvOsELDsTAmynIDR%2FaeqiaTvKjHq47EpdrwfSJlvx%2BjGuoR3avb9TfhpofOijSlqgh9jAIH%2B%2BuFAEekQ349ryNmvxY%2BrJQoGuivMoYACYOuieXXxymxJr4VulBjlCy1ledBeSyQpDDotiMurMe2gHMUw3CQfQbcGFRf6QKh3i%2BCZGZWpQfczeVyPGfvQFDiJ%2F%2BraxAjh0zGBtMw9PA91KQYaQBUVZMuHT%2F4FmO5Q8H3QYJXXn8pu25IwyoHqwqecjbOeRewfYA4kKtvd4FkBpVzygSaiisgyR8FMrqr%2Bqyb3PRKCP6Cidtiwiu7EBSlTKph0lEDRPM4wFiL93mbYMtzhu5lNBXnduGJCscZo4E5jWXYeEeNU2Ls33WcuFpGzUK2HzDCgrK%2BBjqkAaJNFoaTh22Srjw0zO8iYy09DrwYD3w5ClcRqfPnA7IAN6JAgyv3YgQSMLoaMSwk8Ym9l72DSFtlgdFwwm41x1DsEMdYkxe9TdJ1LlEyZX8P3UW4Deijg%2Fw%2BLTJa3kWkIvBlTJP9hlVKrx2RRB7WWeknOTavIfOPqS0IHuDDb%2FkAOVeBKPBuzMp%2B7onDGbjY64yiKooBGnhw36mMDCikXxcFSrGL&X-Amz-Signature=484e3a684112d22893342743e3cd408d2d6dacc4b22eaf9f2397eb0a4b803085&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUDIODT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDqsTay%2FTJjoBR3CatCdqQonObAwxJ%2B8Z072V0e6mvKdAIhAK%2Bq6G2szvLRiVa6U9MIeXh2Lz7OlLDT8WAtWJk5viixKv8DCGMQABoMNjM3NDIzMTgzODA1IgxaojDYZ6RPI88yj2Yq3ANAFCiEa6tWVGHp1b3L1%2FDMrXiweCf3U3P%2Fw9%2BRhBmge7UGVcRzlVvyS%2BsjxZ6ORXN3nTpYTKjQVmTWloUq8i6h9BYxKwumbTigJ5jRD4LZ%2FKJgs8CVkhWaHgE%2FYTGuNeKGha%2FMNsFlUApj3V38o8xknH4tuhoNDj1Fopjt%2BCRcKqSuV%2FZQVhNo69HcK9%2BsRXY8oj3d9uz1ByJP5hm%2FXOpWdkLPKsovZsm8OXodEoj63Rz5jRVqH7zMsXvOsELDsTAmynIDR%2FaeqiaTvKjHq47EpdrwfSJlvx%2BjGuoR3avb9TfhpofOijSlqgh9jAIH%2B%2BuFAEekQ349ryNmvxY%2BrJQoGuivMoYACYOuieXXxymxJr4VulBjlCy1ledBeSyQpDDotiMurMe2gHMUw3CQfQbcGFRf6QKh3i%2BCZGZWpQfczeVyPGfvQFDiJ%2F%2BraxAjh0zGBtMw9PA91KQYaQBUVZMuHT%2F4FmO5Q8H3QYJXXn8pu25IwyoHqwqecjbOeRewfYA4kKtvd4FkBpVzygSaiisgyR8FMrqr%2Bqyb3PRKCP6Cidtiwiu7EBSlTKph0lEDRPM4wFiL93mbYMtzhu5lNBXnduGJCscZo4E5jWXYeEeNU2Ls33WcuFpGzUK2HzDCgrK%2BBjqkAaJNFoaTh22Srjw0zO8iYy09DrwYD3w5ClcRqfPnA7IAN6JAgyv3YgQSMLoaMSwk8Ym9l72DSFtlgdFwwm41x1DsEMdYkxe9TdJ1LlEyZX8P3UW4Deijg%2Fw%2BLTJa3kWkIvBlTJP9hlVKrx2RRB7WWeknOTavIfOPqS0IHuDDb%2FkAOVeBKPBuzMp%2B7onDGbjY64yiKooBGnhw36mMDCikXxcFSrGL&X-Amz-Signature=6774da84431c318e5bbebe2f34dab44f63d409be11fe091c28e83a64f5f263be&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUDIODT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDqsTay%2FTJjoBR3CatCdqQonObAwxJ%2B8Z072V0e6mvKdAIhAK%2Bq6G2szvLRiVa6U9MIeXh2Lz7OlLDT8WAtWJk5viixKv8DCGMQABoMNjM3NDIzMTgzODA1IgxaojDYZ6RPI88yj2Yq3ANAFCiEa6tWVGHp1b3L1%2FDMrXiweCf3U3P%2Fw9%2BRhBmge7UGVcRzlVvyS%2BsjxZ6ORXN3nTpYTKjQVmTWloUq8i6h9BYxKwumbTigJ5jRD4LZ%2FKJgs8CVkhWaHgE%2FYTGuNeKGha%2FMNsFlUApj3V38o8xknH4tuhoNDj1Fopjt%2BCRcKqSuV%2FZQVhNo69HcK9%2BsRXY8oj3d9uz1ByJP5hm%2FXOpWdkLPKsovZsm8OXodEoj63Rz5jRVqH7zMsXvOsELDsTAmynIDR%2FaeqiaTvKjHq47EpdrwfSJlvx%2BjGuoR3avb9TfhpofOijSlqgh9jAIH%2B%2BuFAEekQ349ryNmvxY%2BrJQoGuivMoYACYOuieXXxymxJr4VulBjlCy1ledBeSyQpDDotiMurMe2gHMUw3CQfQbcGFRf6QKh3i%2BCZGZWpQfczeVyPGfvQFDiJ%2F%2BraxAjh0zGBtMw9PA91KQYaQBUVZMuHT%2F4FmO5Q8H3QYJXXn8pu25IwyoHqwqecjbOeRewfYA4kKtvd4FkBpVzygSaiisgyR8FMrqr%2Bqyb3PRKCP6Cidtiwiu7EBSlTKph0lEDRPM4wFiL93mbYMtzhu5lNBXnduGJCscZo4E5jWXYeEeNU2Ls33WcuFpGzUK2HzDCgrK%2BBjqkAaJNFoaTh22Srjw0zO8iYy09DrwYD3w5ClcRqfPnA7IAN6JAgyv3YgQSMLoaMSwk8Ym9l72DSFtlgdFwwm41x1DsEMdYkxe9TdJ1LlEyZX8P3UW4Deijg%2Fw%2BLTJa3kWkIvBlTJP9hlVKrx2RRB7WWeknOTavIfOPqS0IHuDDb%2FkAOVeBKPBuzMp%2B7onDGbjY64yiKooBGnhw36mMDCikXxcFSrGL&X-Amz-Signature=102c3d9b5e634d7001366bf1f09161362fff15ed6afa40b92402f6495af2f6d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUDIODT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDqsTay%2FTJjoBR3CatCdqQonObAwxJ%2B8Z072V0e6mvKdAIhAK%2Bq6G2szvLRiVa6U9MIeXh2Lz7OlLDT8WAtWJk5viixKv8DCGMQABoMNjM3NDIzMTgzODA1IgxaojDYZ6RPI88yj2Yq3ANAFCiEa6tWVGHp1b3L1%2FDMrXiweCf3U3P%2Fw9%2BRhBmge7UGVcRzlVvyS%2BsjxZ6ORXN3nTpYTKjQVmTWloUq8i6h9BYxKwumbTigJ5jRD4LZ%2FKJgs8CVkhWaHgE%2FYTGuNeKGha%2FMNsFlUApj3V38o8xknH4tuhoNDj1Fopjt%2BCRcKqSuV%2FZQVhNo69HcK9%2BsRXY8oj3d9uz1ByJP5hm%2FXOpWdkLPKsovZsm8OXodEoj63Rz5jRVqH7zMsXvOsELDsTAmynIDR%2FaeqiaTvKjHq47EpdrwfSJlvx%2BjGuoR3avb9TfhpofOijSlqgh9jAIH%2B%2BuFAEekQ349ryNmvxY%2BrJQoGuivMoYACYOuieXXxymxJr4VulBjlCy1ledBeSyQpDDotiMurMe2gHMUw3CQfQbcGFRf6QKh3i%2BCZGZWpQfczeVyPGfvQFDiJ%2F%2BraxAjh0zGBtMw9PA91KQYaQBUVZMuHT%2F4FmO5Q8H3QYJXXn8pu25IwyoHqwqecjbOeRewfYA4kKtvd4FkBpVzygSaiisgyR8FMrqr%2Bqyb3PRKCP6Cidtiwiu7EBSlTKph0lEDRPM4wFiL93mbYMtzhu5lNBXnduGJCscZo4E5jWXYeEeNU2Ls33WcuFpGzUK2HzDCgrK%2BBjqkAaJNFoaTh22Srjw0zO8iYy09DrwYD3w5ClcRqfPnA7IAN6JAgyv3YgQSMLoaMSwk8Ym9l72DSFtlgdFwwm41x1DsEMdYkxe9TdJ1LlEyZX8P3UW4Deijg%2Fw%2BLTJa3kWkIvBlTJP9hlVKrx2RRB7WWeknOTavIfOPqS0IHuDDb%2FkAOVeBKPBuzMp%2B7onDGbjY64yiKooBGnhw36mMDCikXxcFSrGL&X-Amz-Signature=e48372af2f655f9d6f236f4f9c216fa1b8c080cffca4ffbe5e1ea684c84bc5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUDIODT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDqsTay%2FTJjoBR3CatCdqQonObAwxJ%2B8Z072V0e6mvKdAIhAK%2Bq6G2szvLRiVa6U9MIeXh2Lz7OlLDT8WAtWJk5viixKv8DCGMQABoMNjM3NDIzMTgzODA1IgxaojDYZ6RPI88yj2Yq3ANAFCiEa6tWVGHp1b3L1%2FDMrXiweCf3U3P%2Fw9%2BRhBmge7UGVcRzlVvyS%2BsjxZ6ORXN3nTpYTKjQVmTWloUq8i6h9BYxKwumbTigJ5jRD4LZ%2FKJgs8CVkhWaHgE%2FYTGuNeKGha%2FMNsFlUApj3V38o8xknH4tuhoNDj1Fopjt%2BCRcKqSuV%2FZQVhNo69HcK9%2BsRXY8oj3d9uz1ByJP5hm%2FXOpWdkLPKsovZsm8OXodEoj63Rz5jRVqH7zMsXvOsELDsTAmynIDR%2FaeqiaTvKjHq47EpdrwfSJlvx%2BjGuoR3avb9TfhpofOijSlqgh9jAIH%2B%2BuFAEekQ349ryNmvxY%2BrJQoGuivMoYACYOuieXXxymxJr4VulBjlCy1ledBeSyQpDDotiMurMe2gHMUw3CQfQbcGFRf6QKh3i%2BCZGZWpQfczeVyPGfvQFDiJ%2F%2BraxAjh0zGBtMw9PA91KQYaQBUVZMuHT%2F4FmO5Q8H3QYJXXn8pu25IwyoHqwqecjbOeRewfYA4kKtvd4FkBpVzygSaiisgyR8FMrqr%2Bqyb3PRKCP6Cidtiwiu7EBSlTKph0lEDRPM4wFiL93mbYMtzhu5lNBXnduGJCscZo4E5jWXYeEeNU2Ls33WcuFpGzUK2HzDCgrK%2BBjqkAaJNFoaTh22Srjw0zO8iYy09DrwYD3w5ClcRqfPnA7IAN6JAgyv3YgQSMLoaMSwk8Ym9l72DSFtlgdFwwm41x1DsEMdYkxe9TdJ1LlEyZX8P3UW4Deijg%2Fw%2BLTJa3kWkIvBlTJP9hlVKrx2RRB7WWeknOTavIfOPqS0IHuDDb%2FkAOVeBKPBuzMp%2B7onDGbjY64yiKooBGnhw36mMDCikXxcFSrGL&X-Amz-Signature=0a6d5f42be96e0318bbc1282d4c7b5dce41f38ebfa7833e9b1927f57d1582bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
