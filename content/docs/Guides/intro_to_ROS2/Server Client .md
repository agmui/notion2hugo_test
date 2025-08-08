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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL4VIOM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDIebR9N1EG%2B6e8IotV4UKpQF3pdmxHk%2B1AcxKVS%2FbWsQIhAIX2sSbFzJKqJ%2FyLAvntvMFNaAggGOJnKWoK00b5nAk8KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmwm%2BSBAgZj%2BjsBtYq3AOp%2BpI7NEDpl7AIr8QfXoYE6wwtPlHQ6iQSrJdh2RUUiLJnpY2qzxlYJGrPKWtDnsDHS3pHllQiGO8wtPjsogmg%2Bfla%2F3zHBHsxfOpyH0lkU5RMH5hqnQhGvQgwOaBbGvR039UICrDKG%2BJP98e%2F%2Bjc30S%2Bc3TJsFWG3gYmK127fhN7%2FXd8gJR4Gjc64BkejxsLVdSc1ac0SUFcynY%2BFyAfXrzM2uW9VxuAd1wrCgPHmCFKdxePPrw0HGmsbqetbUjq9v5JVy%2BF%2F4A6Zhk3tKVFNDGuiR1vaUuq%2FZfN4cN8HwMXTc2cu9o%2BwL2KEypgeBTivgc3zVR9M5YX91yAl7R9%2F8SpM%2FM8Tx4YOnnbQtDyomhSUi2fbiF2LaJq8CUg0lYOCpQjYxVnIIWmNv444tOH2pArN8%2BzXPkQoUIgBz4CSAayu88ghScvDihREUkrA0T6A%2Bsv9NOmcWpfNnz2EWvS8oPQrmeiNNgQ8ZJTXWTCcZxloAoXFhk0JE2jYKoAenIh8H9JsUQuJqsuERlvyW9tyJaxe9nJqgwT8li2%2BHsCiMApYSOukU28awTm5Z1lmi3t9Zj7lkvmt5FI6PgIqnN3MJycViMUBpk48TJGz5GiW0%2F%2FeACZqzWJYLATR2DDDktnEBjqkAcz7%2FE9hxnxHFara%2FFHFtMe3RpflNY%2FZOCnc9e9P69dS0j6USdZjQ8QgrRjtdWPr9H%2FDjSBHpZ%2Bqx3V%2Fq9%2FkfWU%2BNEvbMvgAGm1aCFUFfoKepp1I8lma%2BwqKKBVCUXOSSI1qzSI%2BYWck%2BJGuDoT0MPsqbEcK1ff1T4YQc4ZfaI%2Bc1Sb4spVH%2FtE%2FE%2FyEw29kP7f984t5IgYdeKqLe3c6v%2FWgYduI&X-Amz-Signature=aa6e69f832ed66f960be3d86e2a0a686f57b1f3daa32d79101c3c6cd35fc2f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL4VIOM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDIebR9N1EG%2B6e8IotV4UKpQF3pdmxHk%2B1AcxKVS%2FbWsQIhAIX2sSbFzJKqJ%2FyLAvntvMFNaAggGOJnKWoK00b5nAk8KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmwm%2BSBAgZj%2BjsBtYq3AOp%2BpI7NEDpl7AIr8QfXoYE6wwtPlHQ6iQSrJdh2RUUiLJnpY2qzxlYJGrPKWtDnsDHS3pHllQiGO8wtPjsogmg%2Bfla%2F3zHBHsxfOpyH0lkU5RMH5hqnQhGvQgwOaBbGvR039UICrDKG%2BJP98e%2F%2Bjc30S%2Bc3TJsFWG3gYmK127fhN7%2FXd8gJR4Gjc64BkejxsLVdSc1ac0SUFcynY%2BFyAfXrzM2uW9VxuAd1wrCgPHmCFKdxePPrw0HGmsbqetbUjq9v5JVy%2BF%2F4A6Zhk3tKVFNDGuiR1vaUuq%2FZfN4cN8HwMXTc2cu9o%2BwL2KEypgeBTivgc3zVR9M5YX91yAl7R9%2F8SpM%2FM8Tx4YOnnbQtDyomhSUi2fbiF2LaJq8CUg0lYOCpQjYxVnIIWmNv444tOH2pArN8%2BzXPkQoUIgBz4CSAayu88ghScvDihREUkrA0T6A%2Bsv9NOmcWpfNnz2EWvS8oPQrmeiNNgQ8ZJTXWTCcZxloAoXFhk0JE2jYKoAenIh8H9JsUQuJqsuERlvyW9tyJaxe9nJqgwT8li2%2BHsCiMApYSOukU28awTm5Z1lmi3t9Zj7lkvmt5FI6PgIqnN3MJycViMUBpk48TJGz5GiW0%2F%2FeACZqzWJYLATR2DDDktnEBjqkAcz7%2FE9hxnxHFara%2FFHFtMe3RpflNY%2FZOCnc9e9P69dS0j6USdZjQ8QgrRjtdWPr9H%2FDjSBHpZ%2Bqx3V%2Fq9%2FkfWU%2BNEvbMvgAGm1aCFUFfoKepp1I8lma%2BwqKKBVCUXOSSI1qzSI%2BYWck%2BJGuDoT0MPsqbEcK1ff1T4YQc4ZfaI%2Bc1Sb4spVH%2FtE%2FE%2FyEw29kP7f984t5IgYdeKqLe3c6v%2FWgYduI&X-Amz-Signature=6fee276526f52c2fa3b3026a49aa49e2622674a895119fd2c5c200047c908a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL4VIOM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDIebR9N1EG%2B6e8IotV4UKpQF3pdmxHk%2B1AcxKVS%2FbWsQIhAIX2sSbFzJKqJ%2FyLAvntvMFNaAggGOJnKWoK00b5nAk8KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmwm%2BSBAgZj%2BjsBtYq3AOp%2BpI7NEDpl7AIr8QfXoYE6wwtPlHQ6iQSrJdh2RUUiLJnpY2qzxlYJGrPKWtDnsDHS3pHllQiGO8wtPjsogmg%2Bfla%2F3zHBHsxfOpyH0lkU5RMH5hqnQhGvQgwOaBbGvR039UICrDKG%2BJP98e%2F%2Bjc30S%2Bc3TJsFWG3gYmK127fhN7%2FXd8gJR4Gjc64BkejxsLVdSc1ac0SUFcynY%2BFyAfXrzM2uW9VxuAd1wrCgPHmCFKdxePPrw0HGmsbqetbUjq9v5JVy%2BF%2F4A6Zhk3tKVFNDGuiR1vaUuq%2FZfN4cN8HwMXTc2cu9o%2BwL2KEypgeBTivgc3zVR9M5YX91yAl7R9%2F8SpM%2FM8Tx4YOnnbQtDyomhSUi2fbiF2LaJq8CUg0lYOCpQjYxVnIIWmNv444tOH2pArN8%2BzXPkQoUIgBz4CSAayu88ghScvDihREUkrA0T6A%2Bsv9NOmcWpfNnz2EWvS8oPQrmeiNNgQ8ZJTXWTCcZxloAoXFhk0JE2jYKoAenIh8H9JsUQuJqsuERlvyW9tyJaxe9nJqgwT8li2%2BHsCiMApYSOukU28awTm5Z1lmi3t9Zj7lkvmt5FI6PgIqnN3MJycViMUBpk48TJGz5GiW0%2F%2FeACZqzWJYLATR2DDDktnEBjqkAcz7%2FE9hxnxHFara%2FFHFtMe3RpflNY%2FZOCnc9e9P69dS0j6USdZjQ8QgrRjtdWPr9H%2FDjSBHpZ%2Bqx3V%2Fq9%2FkfWU%2BNEvbMvgAGm1aCFUFfoKepp1I8lma%2BwqKKBVCUXOSSI1qzSI%2BYWck%2BJGuDoT0MPsqbEcK1ff1T4YQc4ZfaI%2Bc1Sb4spVH%2FtE%2FE%2FyEw29kP7f984t5IgYdeKqLe3c6v%2FWgYduI&X-Amz-Signature=98fc914a2e886a879b03651152b2fff59f6a2386a34043e48553a6d346da2de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL4VIOM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDIebR9N1EG%2B6e8IotV4UKpQF3pdmxHk%2B1AcxKVS%2FbWsQIhAIX2sSbFzJKqJ%2FyLAvntvMFNaAggGOJnKWoK00b5nAk8KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmwm%2BSBAgZj%2BjsBtYq3AOp%2BpI7NEDpl7AIr8QfXoYE6wwtPlHQ6iQSrJdh2RUUiLJnpY2qzxlYJGrPKWtDnsDHS3pHllQiGO8wtPjsogmg%2Bfla%2F3zHBHsxfOpyH0lkU5RMH5hqnQhGvQgwOaBbGvR039UICrDKG%2BJP98e%2F%2Bjc30S%2Bc3TJsFWG3gYmK127fhN7%2FXd8gJR4Gjc64BkejxsLVdSc1ac0SUFcynY%2BFyAfXrzM2uW9VxuAd1wrCgPHmCFKdxePPrw0HGmsbqetbUjq9v5JVy%2BF%2F4A6Zhk3tKVFNDGuiR1vaUuq%2FZfN4cN8HwMXTc2cu9o%2BwL2KEypgeBTivgc3zVR9M5YX91yAl7R9%2F8SpM%2FM8Tx4YOnnbQtDyomhSUi2fbiF2LaJq8CUg0lYOCpQjYxVnIIWmNv444tOH2pArN8%2BzXPkQoUIgBz4CSAayu88ghScvDihREUkrA0T6A%2Bsv9NOmcWpfNnz2EWvS8oPQrmeiNNgQ8ZJTXWTCcZxloAoXFhk0JE2jYKoAenIh8H9JsUQuJqsuERlvyW9tyJaxe9nJqgwT8li2%2BHsCiMApYSOukU28awTm5Z1lmi3t9Zj7lkvmt5FI6PgIqnN3MJycViMUBpk48TJGz5GiW0%2F%2FeACZqzWJYLATR2DDDktnEBjqkAcz7%2FE9hxnxHFara%2FFHFtMe3RpflNY%2FZOCnc9e9P69dS0j6USdZjQ8QgrRjtdWPr9H%2FDjSBHpZ%2Bqx3V%2Fq9%2FkfWU%2BNEvbMvgAGm1aCFUFfoKepp1I8lma%2BwqKKBVCUXOSSI1qzSI%2BYWck%2BJGuDoT0MPsqbEcK1ff1T4YQc4ZfaI%2Bc1Sb4spVH%2FtE%2FE%2FyEw29kP7f984t5IgYdeKqLe3c6v%2FWgYduI&X-Amz-Signature=eb408ddfb5d4fb9fb3711af3362fb0c376391294e3a51a2e5054a051eebfbbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL4VIOM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDIebR9N1EG%2B6e8IotV4UKpQF3pdmxHk%2B1AcxKVS%2FbWsQIhAIX2sSbFzJKqJ%2FyLAvntvMFNaAggGOJnKWoK00b5nAk8KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmwm%2BSBAgZj%2BjsBtYq3AOp%2BpI7NEDpl7AIr8QfXoYE6wwtPlHQ6iQSrJdh2RUUiLJnpY2qzxlYJGrPKWtDnsDHS3pHllQiGO8wtPjsogmg%2Bfla%2F3zHBHsxfOpyH0lkU5RMH5hqnQhGvQgwOaBbGvR039UICrDKG%2BJP98e%2F%2Bjc30S%2Bc3TJsFWG3gYmK127fhN7%2FXd8gJR4Gjc64BkejxsLVdSc1ac0SUFcynY%2BFyAfXrzM2uW9VxuAd1wrCgPHmCFKdxePPrw0HGmsbqetbUjq9v5JVy%2BF%2F4A6Zhk3tKVFNDGuiR1vaUuq%2FZfN4cN8HwMXTc2cu9o%2BwL2KEypgeBTivgc3zVR9M5YX91yAl7R9%2F8SpM%2FM8Tx4YOnnbQtDyomhSUi2fbiF2LaJq8CUg0lYOCpQjYxVnIIWmNv444tOH2pArN8%2BzXPkQoUIgBz4CSAayu88ghScvDihREUkrA0T6A%2Bsv9NOmcWpfNnz2EWvS8oPQrmeiNNgQ8ZJTXWTCcZxloAoXFhk0JE2jYKoAenIh8H9JsUQuJqsuERlvyW9tyJaxe9nJqgwT8li2%2BHsCiMApYSOukU28awTm5Z1lmi3t9Zj7lkvmt5FI6PgIqnN3MJycViMUBpk48TJGz5GiW0%2F%2FeACZqzWJYLATR2DDDktnEBjqkAcz7%2FE9hxnxHFara%2FFHFtMe3RpflNY%2FZOCnc9e9P69dS0j6USdZjQ8QgrRjtdWPr9H%2FDjSBHpZ%2Bqx3V%2Fq9%2FkfWU%2BNEvbMvgAGm1aCFUFfoKepp1I8lma%2BwqKKBVCUXOSSI1qzSI%2BYWck%2BJGuDoT0MPsqbEcK1ff1T4YQc4ZfaI%2Bc1Sb4spVH%2FtE%2FE%2FyEw29kP7f984t5IgYdeKqLe3c6v%2FWgYduI&X-Amz-Signature=c1cbb23c40f4a36b6bdda57271eb75a0482f2a7ab82deb709dc9ae11489167e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
