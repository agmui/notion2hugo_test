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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQZ2M3C%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCJomcNgme5YS7PTuNaXx1P4u84Flc7vFt%2F9kr9Ft1AjQIhAMEDsAZUcQ2ozhTDQCOqrJ%2BgL3QiRvgr1sXPnNLbqGmzKv8DCGEQABoMNjM3NDIzMTgzODA1Igz0zxMkdEdSpD6UzwIq3AP6t%2F9LGyRgBZIDnXlRR8adtbS9T3KAkcNMFothIo9x4GdHnAWdT7xH%2BmGvdPdCjy3MwF6hKJz36L3W7elDaWFJBBXHnBxRkANW0cE%2FOAQ92%2BjCNvs1Hk9KyA%2FAjUZ9cNty5pHJLFYLGoo19%2FUALvZOCkx7LZfnxE4sdQ5GmoZ6mFl8XX7jU6syCVmAzrk58SRB4jZzGuBdma%2BNJSY9jUvOR4Br1VQLBST6N4Aa%2F0oyycTsH%2FnkfQCjVs7edO%2FJGAGI%2BgGfvnqtlqWBZF1hggO14KKif%2B%2BpUYL9JyTHZI5%2F6o7wZjZnh1fBlPrYpYWSt4r5MMx62pwzT1ZSoYacMHBbcIOT6vGgwjY3rFaVKYTkkH%2BeR6qFdZxhNwioYPO%2B4%2Bq7BxFmKXekwzMDH51NxhiHWO%2FngH%2BUkPc5GsHE0XeJRiEdIj5MYp85QMNF5sjw9ftWd8jUYqKc2rpnHBP6jgTux%2F8RmJT7EzV2mlzJhwbU6SkfL%2B6Li9onoJ9sMSzhDvLxNX66cdLLBaHIvXhG1zTq0rhByCLxehkQHj%2FslVfkLYGBbSW0FbtCM1WmbbfMyfgcAnLTbaLoNUd6vZnLz8rMe6NfurFK8l1OCLBDURsspEO5mZZoKmPBj7YIvzDQtOa%2BBjqkAcp2z97URCiPudCLkEamUQLQE%2Ba9EmJbor7YbGf66s71R%2Bkc3bLx9RE8FPKkRJNixRIiKwA0mr41oBHv5DTXkiYX0vrU8hYGJ0UMUJn%2BX8n9060vw3wDY7Vmem%2BVLq4hyQrvKJNv%2FoU6myaw6PwYhOLEyERWcUO8pearUJgHHhuFRoU4Zzxkulaa7imjuM5fFwM1MbVTL3N4YtllbnmW0h1QsFVm&X-Amz-Signature=af67ccea70fad2c76eef6c0a9a289749eac9ef3655caa2d36288d2ba118ee1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQZ2M3C%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCJomcNgme5YS7PTuNaXx1P4u84Flc7vFt%2F9kr9Ft1AjQIhAMEDsAZUcQ2ozhTDQCOqrJ%2BgL3QiRvgr1sXPnNLbqGmzKv8DCGEQABoMNjM3NDIzMTgzODA1Igz0zxMkdEdSpD6UzwIq3AP6t%2F9LGyRgBZIDnXlRR8adtbS9T3KAkcNMFothIo9x4GdHnAWdT7xH%2BmGvdPdCjy3MwF6hKJz36L3W7elDaWFJBBXHnBxRkANW0cE%2FOAQ92%2BjCNvs1Hk9KyA%2FAjUZ9cNty5pHJLFYLGoo19%2FUALvZOCkx7LZfnxE4sdQ5GmoZ6mFl8XX7jU6syCVmAzrk58SRB4jZzGuBdma%2BNJSY9jUvOR4Br1VQLBST6N4Aa%2F0oyycTsH%2FnkfQCjVs7edO%2FJGAGI%2BgGfvnqtlqWBZF1hggO14KKif%2B%2BpUYL9JyTHZI5%2F6o7wZjZnh1fBlPrYpYWSt4r5MMx62pwzT1ZSoYacMHBbcIOT6vGgwjY3rFaVKYTkkH%2BeR6qFdZxhNwioYPO%2B4%2Bq7BxFmKXekwzMDH51NxhiHWO%2FngH%2BUkPc5GsHE0XeJRiEdIj5MYp85QMNF5sjw9ftWd8jUYqKc2rpnHBP6jgTux%2F8RmJT7EzV2mlzJhwbU6SkfL%2B6Li9onoJ9sMSzhDvLxNX66cdLLBaHIvXhG1zTq0rhByCLxehkQHj%2FslVfkLYGBbSW0FbtCM1WmbbfMyfgcAnLTbaLoNUd6vZnLz8rMe6NfurFK8l1OCLBDURsspEO5mZZoKmPBj7YIvzDQtOa%2BBjqkAcp2z97URCiPudCLkEamUQLQE%2Ba9EmJbor7YbGf66s71R%2Bkc3bLx9RE8FPKkRJNixRIiKwA0mr41oBHv5DTXkiYX0vrU8hYGJ0UMUJn%2BX8n9060vw3wDY7Vmem%2BVLq4hyQrvKJNv%2FoU6myaw6PwYhOLEyERWcUO8pearUJgHHhuFRoU4Zzxkulaa7imjuM5fFwM1MbVTL3N4YtllbnmW0h1QsFVm&X-Amz-Signature=b9dfba34c50216036f04896c1742752434de40fdcc6c71e0484d50991fbab7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQZ2M3C%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCJomcNgme5YS7PTuNaXx1P4u84Flc7vFt%2F9kr9Ft1AjQIhAMEDsAZUcQ2ozhTDQCOqrJ%2BgL3QiRvgr1sXPnNLbqGmzKv8DCGEQABoMNjM3NDIzMTgzODA1Igz0zxMkdEdSpD6UzwIq3AP6t%2F9LGyRgBZIDnXlRR8adtbS9T3KAkcNMFothIo9x4GdHnAWdT7xH%2BmGvdPdCjy3MwF6hKJz36L3W7elDaWFJBBXHnBxRkANW0cE%2FOAQ92%2BjCNvs1Hk9KyA%2FAjUZ9cNty5pHJLFYLGoo19%2FUALvZOCkx7LZfnxE4sdQ5GmoZ6mFl8XX7jU6syCVmAzrk58SRB4jZzGuBdma%2BNJSY9jUvOR4Br1VQLBST6N4Aa%2F0oyycTsH%2FnkfQCjVs7edO%2FJGAGI%2BgGfvnqtlqWBZF1hggO14KKif%2B%2BpUYL9JyTHZI5%2F6o7wZjZnh1fBlPrYpYWSt4r5MMx62pwzT1ZSoYacMHBbcIOT6vGgwjY3rFaVKYTkkH%2BeR6qFdZxhNwioYPO%2B4%2Bq7BxFmKXekwzMDH51NxhiHWO%2FngH%2BUkPc5GsHE0XeJRiEdIj5MYp85QMNF5sjw9ftWd8jUYqKc2rpnHBP6jgTux%2F8RmJT7EzV2mlzJhwbU6SkfL%2B6Li9onoJ9sMSzhDvLxNX66cdLLBaHIvXhG1zTq0rhByCLxehkQHj%2FslVfkLYGBbSW0FbtCM1WmbbfMyfgcAnLTbaLoNUd6vZnLz8rMe6NfurFK8l1OCLBDURsspEO5mZZoKmPBj7YIvzDQtOa%2BBjqkAcp2z97URCiPudCLkEamUQLQE%2Ba9EmJbor7YbGf66s71R%2Bkc3bLx9RE8FPKkRJNixRIiKwA0mr41oBHv5DTXkiYX0vrU8hYGJ0UMUJn%2BX8n9060vw3wDY7Vmem%2BVLq4hyQrvKJNv%2FoU6myaw6PwYhOLEyERWcUO8pearUJgHHhuFRoU4Zzxkulaa7imjuM5fFwM1MbVTL3N4YtllbnmW0h1QsFVm&X-Amz-Signature=2c5e3c65ebadc6993594c934fbb0c0446a414cd2e3963b86a90ea90e773743eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQZ2M3C%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCJomcNgme5YS7PTuNaXx1P4u84Flc7vFt%2F9kr9Ft1AjQIhAMEDsAZUcQ2ozhTDQCOqrJ%2BgL3QiRvgr1sXPnNLbqGmzKv8DCGEQABoMNjM3NDIzMTgzODA1Igz0zxMkdEdSpD6UzwIq3AP6t%2F9LGyRgBZIDnXlRR8adtbS9T3KAkcNMFothIo9x4GdHnAWdT7xH%2BmGvdPdCjy3MwF6hKJz36L3W7elDaWFJBBXHnBxRkANW0cE%2FOAQ92%2BjCNvs1Hk9KyA%2FAjUZ9cNty5pHJLFYLGoo19%2FUALvZOCkx7LZfnxE4sdQ5GmoZ6mFl8XX7jU6syCVmAzrk58SRB4jZzGuBdma%2BNJSY9jUvOR4Br1VQLBST6N4Aa%2F0oyycTsH%2FnkfQCjVs7edO%2FJGAGI%2BgGfvnqtlqWBZF1hggO14KKif%2B%2BpUYL9JyTHZI5%2F6o7wZjZnh1fBlPrYpYWSt4r5MMx62pwzT1ZSoYacMHBbcIOT6vGgwjY3rFaVKYTkkH%2BeR6qFdZxhNwioYPO%2B4%2Bq7BxFmKXekwzMDH51NxhiHWO%2FngH%2BUkPc5GsHE0XeJRiEdIj5MYp85QMNF5sjw9ftWd8jUYqKc2rpnHBP6jgTux%2F8RmJT7EzV2mlzJhwbU6SkfL%2B6Li9onoJ9sMSzhDvLxNX66cdLLBaHIvXhG1zTq0rhByCLxehkQHj%2FslVfkLYGBbSW0FbtCM1WmbbfMyfgcAnLTbaLoNUd6vZnLz8rMe6NfurFK8l1OCLBDURsspEO5mZZoKmPBj7YIvzDQtOa%2BBjqkAcp2z97URCiPudCLkEamUQLQE%2Ba9EmJbor7YbGf66s71R%2Bkc3bLx9RE8FPKkRJNixRIiKwA0mr41oBHv5DTXkiYX0vrU8hYGJ0UMUJn%2BX8n9060vw3wDY7Vmem%2BVLq4hyQrvKJNv%2FoU6myaw6PwYhOLEyERWcUO8pearUJgHHhuFRoU4Zzxkulaa7imjuM5fFwM1MbVTL3N4YtllbnmW0h1QsFVm&X-Amz-Signature=c7693537a60f690e5f6831178f13e92fedcc47d31724bc460feeb3b449f6b45e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQZ2M3C%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCJomcNgme5YS7PTuNaXx1P4u84Flc7vFt%2F9kr9Ft1AjQIhAMEDsAZUcQ2ozhTDQCOqrJ%2BgL3QiRvgr1sXPnNLbqGmzKv8DCGEQABoMNjM3NDIzMTgzODA1Igz0zxMkdEdSpD6UzwIq3AP6t%2F9LGyRgBZIDnXlRR8adtbS9T3KAkcNMFothIo9x4GdHnAWdT7xH%2BmGvdPdCjy3MwF6hKJz36L3W7elDaWFJBBXHnBxRkANW0cE%2FOAQ92%2BjCNvs1Hk9KyA%2FAjUZ9cNty5pHJLFYLGoo19%2FUALvZOCkx7LZfnxE4sdQ5GmoZ6mFl8XX7jU6syCVmAzrk58SRB4jZzGuBdma%2BNJSY9jUvOR4Br1VQLBST6N4Aa%2F0oyycTsH%2FnkfQCjVs7edO%2FJGAGI%2BgGfvnqtlqWBZF1hggO14KKif%2B%2BpUYL9JyTHZI5%2F6o7wZjZnh1fBlPrYpYWSt4r5MMx62pwzT1ZSoYacMHBbcIOT6vGgwjY3rFaVKYTkkH%2BeR6qFdZxhNwioYPO%2B4%2Bq7BxFmKXekwzMDH51NxhiHWO%2FngH%2BUkPc5GsHE0XeJRiEdIj5MYp85QMNF5sjw9ftWd8jUYqKc2rpnHBP6jgTux%2F8RmJT7EzV2mlzJhwbU6SkfL%2B6Li9onoJ9sMSzhDvLxNX66cdLLBaHIvXhG1zTq0rhByCLxehkQHj%2FslVfkLYGBbSW0FbtCM1WmbbfMyfgcAnLTbaLoNUd6vZnLz8rMe6NfurFK8l1OCLBDURsspEO5mZZoKmPBj7YIvzDQtOa%2BBjqkAcp2z97URCiPudCLkEamUQLQE%2Ba9EmJbor7YbGf66s71R%2Bkc3bLx9RE8FPKkRJNixRIiKwA0mr41oBHv5DTXkiYX0vrU8hYGJ0UMUJn%2BX8n9060vw3wDY7Vmem%2BVLq4hyQrvKJNv%2FoU6myaw6PwYhOLEyERWcUO8pearUJgHHhuFRoU4Zzxkulaa7imjuM5fFwM1MbVTL3N4YtllbnmW0h1QsFVm&X-Amz-Signature=3515145814cead2bef0d774ca9f557db6dc17d838bf3dfc19c7133ac0ade1417&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
