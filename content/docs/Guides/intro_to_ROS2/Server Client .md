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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBURRRT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizFMM4OvcQouc3bco11HNrw6ci6GNkSG3iF6ISSjoBQIhANDkUeilwC3Jisptovu5sbaWbz2qWtFy9%2FrQ%2FPMal%2B7bKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgE25y8IfI6nIT608q3AMmfW1Ijv5Xea8vBESfqx97mmG9UoVEhfQgLeE4ocvPU8aboc1PwwP4EljolUGfGgtEVPKRFB%2BcuWba%2B27e%2BbaQHOBc39HWP1J9rbVEgO4Qxe3x8A%2FJO3RgSSc8g%2BRuHDyDpTBWZtwb5QgCNzcxrryE5Y3gRK%2BsbijFGbPGIB1gYZKENshRL5AVRArHddotIyWkb3dgkntY926y1QEjalAZQPW3O7oYsEbItyRIhzrRfW6HOyEDvy2XWDZKdwx0MMiOHY7Cwz4FTc1EH273Jg96y%2F6Oc8EZFVvaoB8yejjotoFNWbO%2F6TAIdrFpYw%2Fx8yLFremiX1%2FFkpWwCKE5Yh0d6njnrsRxLRxivQG0hPvIxSW88h9G%2B8YmQ6IoE94LIZxlxpU2UZzLE7h412Woiw3eG1LMWttkGYqxZ5%2FkvdqZDfscwxr3dqIjloGjaR3XQRVtu1dVKy68YCVcDIshX6d1rphjS2Jcv4Q4MspuN86Id6TJ9rUpccEDL5odcAHb9lzWDkJD1knMNw1qe2tbbOgQ46FmmAjTW7Cd1YAy%2FfXtD9T0t21N8pBesrpMFUbLJPJzeqZAHin7GGQNlzIkrzWhEZC0%2BtFKzFXUNriNamde%2FNcLhYg07vga%2FwAlqDCixJDDBjqkARyKXOEl7z4lAc0IiR%2BTvAHyIuxxdeKIcBivncwQ0T8VmRNJ42hJHekLm4sS909n3HUUJApjsw2DPiAycd%2BUg4dtf1G7Dmf76KcPJnu87tWOryuIKQJY1pQziAP%2FTRL1SMI3kjwHPmTsoOwHm9j8kUf%2BaZHLBlV6W90c8WyQGlo70buQUIiaPRHqRidOzowfJaYAGKmbSztDEqz%2FxrWZRtKKq3px&X-Amz-Signature=19ea2825cf8f90803e50454bf11dc583c8110973b478be5eba1166268e3bab0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBURRRT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizFMM4OvcQouc3bco11HNrw6ci6GNkSG3iF6ISSjoBQIhANDkUeilwC3Jisptovu5sbaWbz2qWtFy9%2FrQ%2FPMal%2B7bKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgE25y8IfI6nIT608q3AMmfW1Ijv5Xea8vBESfqx97mmG9UoVEhfQgLeE4ocvPU8aboc1PwwP4EljolUGfGgtEVPKRFB%2BcuWba%2B27e%2BbaQHOBc39HWP1J9rbVEgO4Qxe3x8A%2FJO3RgSSc8g%2BRuHDyDpTBWZtwb5QgCNzcxrryE5Y3gRK%2BsbijFGbPGIB1gYZKENshRL5AVRArHddotIyWkb3dgkntY926y1QEjalAZQPW3O7oYsEbItyRIhzrRfW6HOyEDvy2XWDZKdwx0MMiOHY7Cwz4FTc1EH273Jg96y%2F6Oc8EZFVvaoB8yejjotoFNWbO%2F6TAIdrFpYw%2Fx8yLFremiX1%2FFkpWwCKE5Yh0d6njnrsRxLRxivQG0hPvIxSW88h9G%2B8YmQ6IoE94LIZxlxpU2UZzLE7h412Woiw3eG1LMWttkGYqxZ5%2FkvdqZDfscwxr3dqIjloGjaR3XQRVtu1dVKy68YCVcDIshX6d1rphjS2Jcv4Q4MspuN86Id6TJ9rUpccEDL5odcAHb9lzWDkJD1knMNw1qe2tbbOgQ46FmmAjTW7Cd1YAy%2FfXtD9T0t21N8pBesrpMFUbLJPJzeqZAHin7GGQNlzIkrzWhEZC0%2BtFKzFXUNriNamde%2FNcLhYg07vga%2FwAlqDCixJDDBjqkARyKXOEl7z4lAc0IiR%2BTvAHyIuxxdeKIcBivncwQ0T8VmRNJ42hJHekLm4sS909n3HUUJApjsw2DPiAycd%2BUg4dtf1G7Dmf76KcPJnu87tWOryuIKQJY1pQziAP%2FTRL1SMI3kjwHPmTsoOwHm9j8kUf%2BaZHLBlV6W90c8WyQGlo70buQUIiaPRHqRidOzowfJaYAGKmbSztDEqz%2FxrWZRtKKq3px&X-Amz-Signature=18dd2bc42eba1c38107f28d67a2a0e5101d410e0ac667e21d2a7c7e5626288e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBURRRT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizFMM4OvcQouc3bco11HNrw6ci6GNkSG3iF6ISSjoBQIhANDkUeilwC3Jisptovu5sbaWbz2qWtFy9%2FrQ%2FPMal%2B7bKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgE25y8IfI6nIT608q3AMmfW1Ijv5Xea8vBESfqx97mmG9UoVEhfQgLeE4ocvPU8aboc1PwwP4EljolUGfGgtEVPKRFB%2BcuWba%2B27e%2BbaQHOBc39HWP1J9rbVEgO4Qxe3x8A%2FJO3RgSSc8g%2BRuHDyDpTBWZtwb5QgCNzcxrryE5Y3gRK%2BsbijFGbPGIB1gYZKENshRL5AVRArHddotIyWkb3dgkntY926y1QEjalAZQPW3O7oYsEbItyRIhzrRfW6HOyEDvy2XWDZKdwx0MMiOHY7Cwz4FTc1EH273Jg96y%2F6Oc8EZFVvaoB8yejjotoFNWbO%2F6TAIdrFpYw%2Fx8yLFremiX1%2FFkpWwCKE5Yh0d6njnrsRxLRxivQG0hPvIxSW88h9G%2B8YmQ6IoE94LIZxlxpU2UZzLE7h412Woiw3eG1LMWttkGYqxZ5%2FkvdqZDfscwxr3dqIjloGjaR3XQRVtu1dVKy68YCVcDIshX6d1rphjS2Jcv4Q4MspuN86Id6TJ9rUpccEDL5odcAHb9lzWDkJD1knMNw1qe2tbbOgQ46FmmAjTW7Cd1YAy%2FfXtD9T0t21N8pBesrpMFUbLJPJzeqZAHin7GGQNlzIkrzWhEZC0%2BtFKzFXUNriNamde%2FNcLhYg07vga%2FwAlqDCixJDDBjqkARyKXOEl7z4lAc0IiR%2BTvAHyIuxxdeKIcBivncwQ0T8VmRNJ42hJHekLm4sS909n3HUUJApjsw2DPiAycd%2BUg4dtf1G7Dmf76KcPJnu87tWOryuIKQJY1pQziAP%2FTRL1SMI3kjwHPmTsoOwHm9j8kUf%2BaZHLBlV6W90c8WyQGlo70buQUIiaPRHqRidOzowfJaYAGKmbSztDEqz%2FxrWZRtKKq3px&X-Amz-Signature=6e9947bb80bf67e16ac8911286df0f5850af684ec1b7fe888f77dd153eb8abc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBURRRT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizFMM4OvcQouc3bco11HNrw6ci6GNkSG3iF6ISSjoBQIhANDkUeilwC3Jisptovu5sbaWbz2qWtFy9%2FrQ%2FPMal%2B7bKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgE25y8IfI6nIT608q3AMmfW1Ijv5Xea8vBESfqx97mmG9UoVEhfQgLeE4ocvPU8aboc1PwwP4EljolUGfGgtEVPKRFB%2BcuWba%2B27e%2BbaQHOBc39HWP1J9rbVEgO4Qxe3x8A%2FJO3RgSSc8g%2BRuHDyDpTBWZtwb5QgCNzcxrryE5Y3gRK%2BsbijFGbPGIB1gYZKENshRL5AVRArHddotIyWkb3dgkntY926y1QEjalAZQPW3O7oYsEbItyRIhzrRfW6HOyEDvy2XWDZKdwx0MMiOHY7Cwz4FTc1EH273Jg96y%2F6Oc8EZFVvaoB8yejjotoFNWbO%2F6TAIdrFpYw%2Fx8yLFremiX1%2FFkpWwCKE5Yh0d6njnrsRxLRxivQG0hPvIxSW88h9G%2B8YmQ6IoE94LIZxlxpU2UZzLE7h412Woiw3eG1LMWttkGYqxZ5%2FkvdqZDfscwxr3dqIjloGjaR3XQRVtu1dVKy68YCVcDIshX6d1rphjS2Jcv4Q4MspuN86Id6TJ9rUpccEDL5odcAHb9lzWDkJD1knMNw1qe2tbbOgQ46FmmAjTW7Cd1YAy%2FfXtD9T0t21N8pBesrpMFUbLJPJzeqZAHin7GGQNlzIkrzWhEZC0%2BtFKzFXUNriNamde%2FNcLhYg07vga%2FwAlqDCixJDDBjqkARyKXOEl7z4lAc0IiR%2BTvAHyIuxxdeKIcBivncwQ0T8VmRNJ42hJHekLm4sS909n3HUUJApjsw2DPiAycd%2BUg4dtf1G7Dmf76KcPJnu87tWOryuIKQJY1pQziAP%2FTRL1SMI3kjwHPmTsoOwHm9j8kUf%2BaZHLBlV6W90c8WyQGlo70buQUIiaPRHqRidOzowfJaYAGKmbSztDEqz%2FxrWZRtKKq3px&X-Amz-Signature=b64713aea4480b2fc092a2c9bacf26c22629a78e710bb96b3156717c04ad3184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBURRRT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizFMM4OvcQouc3bco11HNrw6ci6GNkSG3iF6ISSjoBQIhANDkUeilwC3Jisptovu5sbaWbz2qWtFy9%2FrQ%2FPMal%2B7bKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgE25y8IfI6nIT608q3AMmfW1Ijv5Xea8vBESfqx97mmG9UoVEhfQgLeE4ocvPU8aboc1PwwP4EljolUGfGgtEVPKRFB%2BcuWba%2B27e%2BbaQHOBc39HWP1J9rbVEgO4Qxe3x8A%2FJO3RgSSc8g%2BRuHDyDpTBWZtwb5QgCNzcxrryE5Y3gRK%2BsbijFGbPGIB1gYZKENshRL5AVRArHddotIyWkb3dgkntY926y1QEjalAZQPW3O7oYsEbItyRIhzrRfW6HOyEDvy2XWDZKdwx0MMiOHY7Cwz4FTc1EH273Jg96y%2F6Oc8EZFVvaoB8yejjotoFNWbO%2F6TAIdrFpYw%2Fx8yLFremiX1%2FFkpWwCKE5Yh0d6njnrsRxLRxivQG0hPvIxSW88h9G%2B8YmQ6IoE94LIZxlxpU2UZzLE7h412Woiw3eG1LMWttkGYqxZ5%2FkvdqZDfscwxr3dqIjloGjaR3XQRVtu1dVKy68YCVcDIshX6d1rphjS2Jcv4Q4MspuN86Id6TJ9rUpccEDL5odcAHb9lzWDkJD1knMNw1qe2tbbOgQ46FmmAjTW7Cd1YAy%2FfXtD9T0t21N8pBesrpMFUbLJPJzeqZAHin7GGQNlzIkrzWhEZC0%2BtFKzFXUNriNamde%2FNcLhYg07vga%2FwAlqDCixJDDBjqkARyKXOEl7z4lAc0IiR%2BTvAHyIuxxdeKIcBivncwQ0T8VmRNJ42hJHekLm4sS909n3HUUJApjsw2DPiAycd%2BUg4dtf1G7Dmf76KcPJnu87tWOryuIKQJY1pQziAP%2FTRL1SMI3kjwHPmTsoOwHm9j8kUf%2BaZHLBlV6W90c8WyQGlo70buQUIiaPRHqRidOzowfJaYAGKmbSztDEqz%2FxrWZRtKKq3px&X-Amz-Signature=add03abe5f27d9478a5e297ce3392e16e72b71fddd7f8b0f29e9e518116e74c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
