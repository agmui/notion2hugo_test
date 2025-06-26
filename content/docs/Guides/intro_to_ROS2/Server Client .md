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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5MODQ3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC5fX1atBRmGpa3rU%2Bhwqh7UOyXYCYPPeE8SEpEFkk5PgIhAIOVeZ3V8MVp4r00tLeG%2FTF0CJ7scL4ieBTkZbQAec3jKv8DCFYQABoMNjM3NDIzMTgzODA1Igye%2B7JHggiqNyt%2FidAq3AORLRFgDjdlQL5oOmS5EtZSYlhAn2mS6Qpl8z0XIsxw0tNBleLcI64jUY2kuOc6WXfUgzahi%2F6vzEpqk1IULfKnFhfO%2BB9klFAxRYb9BZ738IGNl0RqXwwKqEJeByAAkzAdQrShWms3NbvOjX%2BpxtusPd9mPW1YaAuidTveYVesHOBR88v37snsU4MdhLz1mcxDrffzaoRGF%2Bw10Fq4S5i89hZjK9ZlaD2U4FWT%2BHJ5hSkBLbXsO2uRAwCbm4Qu1q%2Fj6ENRlw846a2z1%2FaAJQrgdQZBuEF2slTB9m0bwSOUuNMIqCVaHDumy5x%2FVbDZEAKPvQpJ9DD0SncFoNOhP3t8wTrjDSdREB1N732%2FIGRUz4hIfhBBM98GUE3maf4hFAMNw8KQRxSmZyyOVIi8g3wup%2F%2FxsiYGeqgLFIDz4AX9JOhPtTPYnip96Ea7F9J3xgy8A83cNJwtMI7WBGfAjgQWYHleR3U%2Fbd8Z7bhTVqZaF2HeGm6iSHSGhoS0HjjC9sl3a8H0XC%2FVYqNortQuX2UfoebIzBCQWsyJ1yxUkJIv89WEG0425f7LHZJTKrEwadDqGVWrDjYvgi9A%2BlOke0IVVe1EQccjIXLKOq6dX7u0y7p8GSCbLGtf2MpUYjC9sfPCBjqkAQIVKNBfUvHJTZwEydN4Pf%2Fd%2F9ZQJBcjkdAar%2B%2Fj%2BHVvAAP7wFg93Fjd31iLq8MROWz7Xx2GWkkyqlIsDlJldqZTZbNGb%2FucvSHdgN1HRHlYRdbKkhVqcpjBZY0ZLCGZY6s%2FfTGuqZFg28NzW7svHv36vgLkYJVr5ZPdXEE7DLhmA%2B6UijvfrPqQ93NoHRtN1xtza%2BXm6xsM%2Bfbvffk%2BHFxP7RkD&X-Amz-Signature=846e6e6e92e40c87d335c1d643b24492debae4ce3044922090f40f351abe253d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5MODQ3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC5fX1atBRmGpa3rU%2Bhwqh7UOyXYCYPPeE8SEpEFkk5PgIhAIOVeZ3V8MVp4r00tLeG%2FTF0CJ7scL4ieBTkZbQAec3jKv8DCFYQABoMNjM3NDIzMTgzODA1Igye%2B7JHggiqNyt%2FidAq3AORLRFgDjdlQL5oOmS5EtZSYlhAn2mS6Qpl8z0XIsxw0tNBleLcI64jUY2kuOc6WXfUgzahi%2F6vzEpqk1IULfKnFhfO%2BB9klFAxRYb9BZ738IGNl0RqXwwKqEJeByAAkzAdQrShWms3NbvOjX%2BpxtusPd9mPW1YaAuidTveYVesHOBR88v37snsU4MdhLz1mcxDrffzaoRGF%2Bw10Fq4S5i89hZjK9ZlaD2U4FWT%2BHJ5hSkBLbXsO2uRAwCbm4Qu1q%2Fj6ENRlw846a2z1%2FaAJQrgdQZBuEF2slTB9m0bwSOUuNMIqCVaHDumy5x%2FVbDZEAKPvQpJ9DD0SncFoNOhP3t8wTrjDSdREB1N732%2FIGRUz4hIfhBBM98GUE3maf4hFAMNw8KQRxSmZyyOVIi8g3wup%2F%2FxsiYGeqgLFIDz4AX9JOhPtTPYnip96Ea7F9J3xgy8A83cNJwtMI7WBGfAjgQWYHleR3U%2Fbd8Z7bhTVqZaF2HeGm6iSHSGhoS0HjjC9sl3a8H0XC%2FVYqNortQuX2UfoebIzBCQWsyJ1yxUkJIv89WEG0425f7LHZJTKrEwadDqGVWrDjYvgi9A%2BlOke0IVVe1EQccjIXLKOq6dX7u0y7p8GSCbLGtf2MpUYjC9sfPCBjqkAQIVKNBfUvHJTZwEydN4Pf%2Fd%2F9ZQJBcjkdAar%2B%2Fj%2BHVvAAP7wFg93Fjd31iLq8MROWz7Xx2GWkkyqlIsDlJldqZTZbNGb%2FucvSHdgN1HRHlYRdbKkhVqcpjBZY0ZLCGZY6s%2FfTGuqZFg28NzW7svHv36vgLkYJVr5ZPdXEE7DLhmA%2B6UijvfrPqQ93NoHRtN1xtza%2BXm6xsM%2Bfbvffk%2BHFxP7RkD&X-Amz-Signature=cb85ac173d4aee2e7fc3b626b6207dbfba080f3ce993a9410325a067b292bd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5MODQ3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC5fX1atBRmGpa3rU%2Bhwqh7UOyXYCYPPeE8SEpEFkk5PgIhAIOVeZ3V8MVp4r00tLeG%2FTF0CJ7scL4ieBTkZbQAec3jKv8DCFYQABoMNjM3NDIzMTgzODA1Igye%2B7JHggiqNyt%2FidAq3AORLRFgDjdlQL5oOmS5EtZSYlhAn2mS6Qpl8z0XIsxw0tNBleLcI64jUY2kuOc6WXfUgzahi%2F6vzEpqk1IULfKnFhfO%2BB9klFAxRYb9BZ738IGNl0RqXwwKqEJeByAAkzAdQrShWms3NbvOjX%2BpxtusPd9mPW1YaAuidTveYVesHOBR88v37snsU4MdhLz1mcxDrffzaoRGF%2Bw10Fq4S5i89hZjK9ZlaD2U4FWT%2BHJ5hSkBLbXsO2uRAwCbm4Qu1q%2Fj6ENRlw846a2z1%2FaAJQrgdQZBuEF2slTB9m0bwSOUuNMIqCVaHDumy5x%2FVbDZEAKPvQpJ9DD0SncFoNOhP3t8wTrjDSdREB1N732%2FIGRUz4hIfhBBM98GUE3maf4hFAMNw8KQRxSmZyyOVIi8g3wup%2F%2FxsiYGeqgLFIDz4AX9JOhPtTPYnip96Ea7F9J3xgy8A83cNJwtMI7WBGfAjgQWYHleR3U%2Fbd8Z7bhTVqZaF2HeGm6iSHSGhoS0HjjC9sl3a8H0XC%2FVYqNortQuX2UfoebIzBCQWsyJ1yxUkJIv89WEG0425f7LHZJTKrEwadDqGVWrDjYvgi9A%2BlOke0IVVe1EQccjIXLKOq6dX7u0y7p8GSCbLGtf2MpUYjC9sfPCBjqkAQIVKNBfUvHJTZwEydN4Pf%2Fd%2F9ZQJBcjkdAar%2B%2Fj%2BHVvAAP7wFg93Fjd31iLq8MROWz7Xx2GWkkyqlIsDlJldqZTZbNGb%2FucvSHdgN1HRHlYRdbKkhVqcpjBZY0ZLCGZY6s%2FfTGuqZFg28NzW7svHv36vgLkYJVr5ZPdXEE7DLhmA%2B6UijvfrPqQ93NoHRtN1xtza%2BXm6xsM%2Bfbvffk%2BHFxP7RkD&X-Amz-Signature=c7214726c9b57cc06864659d3a73c9e4429f97e763661d30bb309c08e9d7c095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5MODQ3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC5fX1atBRmGpa3rU%2Bhwqh7UOyXYCYPPeE8SEpEFkk5PgIhAIOVeZ3V8MVp4r00tLeG%2FTF0CJ7scL4ieBTkZbQAec3jKv8DCFYQABoMNjM3NDIzMTgzODA1Igye%2B7JHggiqNyt%2FidAq3AORLRFgDjdlQL5oOmS5EtZSYlhAn2mS6Qpl8z0XIsxw0tNBleLcI64jUY2kuOc6WXfUgzahi%2F6vzEpqk1IULfKnFhfO%2BB9klFAxRYb9BZ738IGNl0RqXwwKqEJeByAAkzAdQrShWms3NbvOjX%2BpxtusPd9mPW1YaAuidTveYVesHOBR88v37snsU4MdhLz1mcxDrffzaoRGF%2Bw10Fq4S5i89hZjK9ZlaD2U4FWT%2BHJ5hSkBLbXsO2uRAwCbm4Qu1q%2Fj6ENRlw846a2z1%2FaAJQrgdQZBuEF2slTB9m0bwSOUuNMIqCVaHDumy5x%2FVbDZEAKPvQpJ9DD0SncFoNOhP3t8wTrjDSdREB1N732%2FIGRUz4hIfhBBM98GUE3maf4hFAMNw8KQRxSmZyyOVIi8g3wup%2F%2FxsiYGeqgLFIDz4AX9JOhPtTPYnip96Ea7F9J3xgy8A83cNJwtMI7WBGfAjgQWYHleR3U%2Fbd8Z7bhTVqZaF2HeGm6iSHSGhoS0HjjC9sl3a8H0XC%2FVYqNortQuX2UfoebIzBCQWsyJ1yxUkJIv89WEG0425f7LHZJTKrEwadDqGVWrDjYvgi9A%2BlOke0IVVe1EQccjIXLKOq6dX7u0y7p8GSCbLGtf2MpUYjC9sfPCBjqkAQIVKNBfUvHJTZwEydN4Pf%2Fd%2F9ZQJBcjkdAar%2B%2Fj%2BHVvAAP7wFg93Fjd31iLq8MROWz7Xx2GWkkyqlIsDlJldqZTZbNGb%2FucvSHdgN1HRHlYRdbKkhVqcpjBZY0ZLCGZY6s%2FfTGuqZFg28NzW7svHv36vgLkYJVr5ZPdXEE7DLhmA%2B6UijvfrPqQ93NoHRtN1xtza%2BXm6xsM%2Bfbvffk%2BHFxP7RkD&X-Amz-Signature=8dd24d6b4a5f67f00dc21dc9359126363e2b9780b6f58313db1fad7c1b7b0ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5MODQ3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC5fX1atBRmGpa3rU%2Bhwqh7UOyXYCYPPeE8SEpEFkk5PgIhAIOVeZ3V8MVp4r00tLeG%2FTF0CJ7scL4ieBTkZbQAec3jKv8DCFYQABoMNjM3NDIzMTgzODA1Igye%2B7JHggiqNyt%2FidAq3AORLRFgDjdlQL5oOmS5EtZSYlhAn2mS6Qpl8z0XIsxw0tNBleLcI64jUY2kuOc6WXfUgzahi%2F6vzEpqk1IULfKnFhfO%2BB9klFAxRYb9BZ738IGNl0RqXwwKqEJeByAAkzAdQrShWms3NbvOjX%2BpxtusPd9mPW1YaAuidTveYVesHOBR88v37snsU4MdhLz1mcxDrffzaoRGF%2Bw10Fq4S5i89hZjK9ZlaD2U4FWT%2BHJ5hSkBLbXsO2uRAwCbm4Qu1q%2Fj6ENRlw846a2z1%2FaAJQrgdQZBuEF2slTB9m0bwSOUuNMIqCVaHDumy5x%2FVbDZEAKPvQpJ9DD0SncFoNOhP3t8wTrjDSdREB1N732%2FIGRUz4hIfhBBM98GUE3maf4hFAMNw8KQRxSmZyyOVIi8g3wup%2F%2FxsiYGeqgLFIDz4AX9JOhPtTPYnip96Ea7F9J3xgy8A83cNJwtMI7WBGfAjgQWYHleR3U%2Fbd8Z7bhTVqZaF2HeGm6iSHSGhoS0HjjC9sl3a8H0XC%2FVYqNortQuX2UfoebIzBCQWsyJ1yxUkJIv89WEG0425f7LHZJTKrEwadDqGVWrDjYvgi9A%2BlOke0IVVe1EQccjIXLKOq6dX7u0y7p8GSCbLGtf2MpUYjC9sfPCBjqkAQIVKNBfUvHJTZwEydN4Pf%2Fd%2F9ZQJBcjkdAar%2B%2Fj%2BHVvAAP7wFg93Fjd31iLq8MROWz7Xx2GWkkyqlIsDlJldqZTZbNGb%2FucvSHdgN1HRHlYRdbKkhVqcpjBZY0ZLCGZY6s%2FfTGuqZFg28NzW7svHv36vgLkYJVr5ZPdXEE7DLhmA%2B6UijvfrPqQ93NoHRtN1xtza%2BXm6xsM%2Bfbvffk%2BHFxP7RkD&X-Amz-Signature=16ca4ae35ae7755ddea62bdaf3da81e308087f7111666141e3542d349a22ce6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
