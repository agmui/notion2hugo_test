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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZWZDJF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC0RyLOqBmUNiDK5ePVOkFgr1UN7XtPlRJJpOdqpTAqlgIhALxbUHIo5QZ4tLjq9l9iFDa%2Bt63mO5RGXjCUJmpKtu5VKv8DCCQQABoMNjM3NDIzMTgzODA1IgyedFK%2FkQvoHBN%2Fg9gq3AP29o4lQatcGOfnGC%2BlpAWdp7BJYvcPJ4NJyBQn6pnMB1YmwdQPkGLWukg00PNvJZhYosiJogTnWtfOZ0WD8RO9HfVYPwPJwrCvrTkL4OLRfyMw8pRfW56MM2XNf6kRdCYbEGSD5%2FQX3JibOjc5Cd5Ujlq%2FHoXkmmjP%2FX8xh3nCacyghJIJPUEbBXQir8zBZi8S%2B2vx1MMIwOzg0qsliUGFoJe0kNME0Gw3IcPoYwktNy%2F2PLksZHf%2BiAffx3ZTySV6HKT0G7G1sQ0l1OvycOLmI3suMAWG4Bv8dCbPxYT3dE9FpgaF2PP9DFQ7C11MhcPxGQK3h7kILKW3wXzqjrVgFi0uyHlVKdk%2F3JLLkmUpNZjohdsHsDmSDqdqP6Rp7fbZjfuVl%2Bb4OApr8ijlJH3X99GdPh0%2B8hQm2kkXBlgzTYUVeRxoyATzOJ%2FTj4OIh6vq745UNyS3yLO5y9EdrNwMLvti63lECoHsMBEUGFjx58TasHWdu84%2BwjieENS98Ds6cixG8IXczdAa2glt8DlaqyfkSML9XIGR7v1d6wwMRelwkiv5LUOkGF3R6PLl6n%2BJvYllAGrr4Pfqec4jMRV9V%2FkSgeQ0Ppyrit8N443JYWwOCcREsaN7HX7yzDDgvbPCBjqkAXzs%2FEt097tRhAQe41oJOcy9TvIJN0lvX5zfk7Xh9aEop5tlFntk1hgXWjjMxbO8eYsN0B8RgkqfSfSs149yUoes3EkJYNwmSgGFrTrcjoUZj%2BYT4var6QlO4xodVc2PkdnPNjEeTkhLW1xXUcKbP3EooQcLhDgUIXcoRY2HkN1npILZuIaJt0vrRdKhTSwdUQZpLnwBj3iEHPIJiiTrlnYD2ZDs&X-Amz-Signature=84e7cd6201674d916204374bf137e2118ad3b3cd14f8c32e7886ee15f22f7ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZWZDJF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC0RyLOqBmUNiDK5ePVOkFgr1UN7XtPlRJJpOdqpTAqlgIhALxbUHIo5QZ4tLjq9l9iFDa%2Bt63mO5RGXjCUJmpKtu5VKv8DCCQQABoMNjM3NDIzMTgzODA1IgyedFK%2FkQvoHBN%2Fg9gq3AP29o4lQatcGOfnGC%2BlpAWdp7BJYvcPJ4NJyBQn6pnMB1YmwdQPkGLWukg00PNvJZhYosiJogTnWtfOZ0WD8RO9HfVYPwPJwrCvrTkL4OLRfyMw8pRfW56MM2XNf6kRdCYbEGSD5%2FQX3JibOjc5Cd5Ujlq%2FHoXkmmjP%2FX8xh3nCacyghJIJPUEbBXQir8zBZi8S%2B2vx1MMIwOzg0qsliUGFoJe0kNME0Gw3IcPoYwktNy%2F2PLksZHf%2BiAffx3ZTySV6HKT0G7G1sQ0l1OvycOLmI3suMAWG4Bv8dCbPxYT3dE9FpgaF2PP9DFQ7C11MhcPxGQK3h7kILKW3wXzqjrVgFi0uyHlVKdk%2F3JLLkmUpNZjohdsHsDmSDqdqP6Rp7fbZjfuVl%2Bb4OApr8ijlJH3X99GdPh0%2B8hQm2kkXBlgzTYUVeRxoyATzOJ%2FTj4OIh6vq745UNyS3yLO5y9EdrNwMLvti63lECoHsMBEUGFjx58TasHWdu84%2BwjieENS98Ds6cixG8IXczdAa2glt8DlaqyfkSML9XIGR7v1d6wwMRelwkiv5LUOkGF3R6PLl6n%2BJvYllAGrr4Pfqec4jMRV9V%2FkSgeQ0Ppyrit8N443JYWwOCcREsaN7HX7yzDDgvbPCBjqkAXzs%2FEt097tRhAQe41oJOcy9TvIJN0lvX5zfk7Xh9aEop5tlFntk1hgXWjjMxbO8eYsN0B8RgkqfSfSs149yUoes3EkJYNwmSgGFrTrcjoUZj%2BYT4var6QlO4xodVc2PkdnPNjEeTkhLW1xXUcKbP3EooQcLhDgUIXcoRY2HkN1npILZuIaJt0vrRdKhTSwdUQZpLnwBj3iEHPIJiiTrlnYD2ZDs&X-Amz-Signature=dc2826810b5f58f9b6ff07896cf820e0efeaa6dd80a72c453955ae6570ca2d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZWZDJF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC0RyLOqBmUNiDK5ePVOkFgr1UN7XtPlRJJpOdqpTAqlgIhALxbUHIo5QZ4tLjq9l9iFDa%2Bt63mO5RGXjCUJmpKtu5VKv8DCCQQABoMNjM3NDIzMTgzODA1IgyedFK%2FkQvoHBN%2Fg9gq3AP29o4lQatcGOfnGC%2BlpAWdp7BJYvcPJ4NJyBQn6pnMB1YmwdQPkGLWukg00PNvJZhYosiJogTnWtfOZ0WD8RO9HfVYPwPJwrCvrTkL4OLRfyMw8pRfW56MM2XNf6kRdCYbEGSD5%2FQX3JibOjc5Cd5Ujlq%2FHoXkmmjP%2FX8xh3nCacyghJIJPUEbBXQir8zBZi8S%2B2vx1MMIwOzg0qsliUGFoJe0kNME0Gw3IcPoYwktNy%2F2PLksZHf%2BiAffx3ZTySV6HKT0G7G1sQ0l1OvycOLmI3suMAWG4Bv8dCbPxYT3dE9FpgaF2PP9DFQ7C11MhcPxGQK3h7kILKW3wXzqjrVgFi0uyHlVKdk%2F3JLLkmUpNZjohdsHsDmSDqdqP6Rp7fbZjfuVl%2Bb4OApr8ijlJH3X99GdPh0%2B8hQm2kkXBlgzTYUVeRxoyATzOJ%2FTj4OIh6vq745UNyS3yLO5y9EdrNwMLvti63lECoHsMBEUGFjx58TasHWdu84%2BwjieENS98Ds6cixG8IXczdAa2glt8DlaqyfkSML9XIGR7v1d6wwMRelwkiv5LUOkGF3R6PLl6n%2BJvYllAGrr4Pfqec4jMRV9V%2FkSgeQ0Ppyrit8N443JYWwOCcREsaN7HX7yzDDgvbPCBjqkAXzs%2FEt097tRhAQe41oJOcy9TvIJN0lvX5zfk7Xh9aEop5tlFntk1hgXWjjMxbO8eYsN0B8RgkqfSfSs149yUoes3EkJYNwmSgGFrTrcjoUZj%2BYT4var6QlO4xodVc2PkdnPNjEeTkhLW1xXUcKbP3EooQcLhDgUIXcoRY2HkN1npILZuIaJt0vrRdKhTSwdUQZpLnwBj3iEHPIJiiTrlnYD2ZDs&X-Amz-Signature=42c999777d4aec66b5a3014c6462c0d07cd801cb35d90b0287309014d616c421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZWZDJF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC0RyLOqBmUNiDK5ePVOkFgr1UN7XtPlRJJpOdqpTAqlgIhALxbUHIo5QZ4tLjq9l9iFDa%2Bt63mO5RGXjCUJmpKtu5VKv8DCCQQABoMNjM3NDIzMTgzODA1IgyedFK%2FkQvoHBN%2Fg9gq3AP29o4lQatcGOfnGC%2BlpAWdp7BJYvcPJ4NJyBQn6pnMB1YmwdQPkGLWukg00PNvJZhYosiJogTnWtfOZ0WD8RO9HfVYPwPJwrCvrTkL4OLRfyMw8pRfW56MM2XNf6kRdCYbEGSD5%2FQX3JibOjc5Cd5Ujlq%2FHoXkmmjP%2FX8xh3nCacyghJIJPUEbBXQir8zBZi8S%2B2vx1MMIwOzg0qsliUGFoJe0kNME0Gw3IcPoYwktNy%2F2PLksZHf%2BiAffx3ZTySV6HKT0G7G1sQ0l1OvycOLmI3suMAWG4Bv8dCbPxYT3dE9FpgaF2PP9DFQ7C11MhcPxGQK3h7kILKW3wXzqjrVgFi0uyHlVKdk%2F3JLLkmUpNZjohdsHsDmSDqdqP6Rp7fbZjfuVl%2Bb4OApr8ijlJH3X99GdPh0%2B8hQm2kkXBlgzTYUVeRxoyATzOJ%2FTj4OIh6vq745UNyS3yLO5y9EdrNwMLvti63lECoHsMBEUGFjx58TasHWdu84%2BwjieENS98Ds6cixG8IXczdAa2glt8DlaqyfkSML9XIGR7v1d6wwMRelwkiv5LUOkGF3R6PLl6n%2BJvYllAGrr4Pfqec4jMRV9V%2FkSgeQ0Ppyrit8N443JYWwOCcREsaN7HX7yzDDgvbPCBjqkAXzs%2FEt097tRhAQe41oJOcy9TvIJN0lvX5zfk7Xh9aEop5tlFntk1hgXWjjMxbO8eYsN0B8RgkqfSfSs149yUoes3EkJYNwmSgGFrTrcjoUZj%2BYT4var6QlO4xodVc2PkdnPNjEeTkhLW1xXUcKbP3EooQcLhDgUIXcoRY2HkN1npILZuIaJt0vrRdKhTSwdUQZpLnwBj3iEHPIJiiTrlnYD2ZDs&X-Amz-Signature=2c181d1d1e84bc8c0c9da910527814939ba5bc5354a302314bf45737ce0fdc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZWZDJF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC0RyLOqBmUNiDK5ePVOkFgr1UN7XtPlRJJpOdqpTAqlgIhALxbUHIo5QZ4tLjq9l9iFDa%2Bt63mO5RGXjCUJmpKtu5VKv8DCCQQABoMNjM3NDIzMTgzODA1IgyedFK%2FkQvoHBN%2Fg9gq3AP29o4lQatcGOfnGC%2BlpAWdp7BJYvcPJ4NJyBQn6pnMB1YmwdQPkGLWukg00PNvJZhYosiJogTnWtfOZ0WD8RO9HfVYPwPJwrCvrTkL4OLRfyMw8pRfW56MM2XNf6kRdCYbEGSD5%2FQX3JibOjc5Cd5Ujlq%2FHoXkmmjP%2FX8xh3nCacyghJIJPUEbBXQir8zBZi8S%2B2vx1MMIwOzg0qsliUGFoJe0kNME0Gw3IcPoYwktNy%2F2PLksZHf%2BiAffx3ZTySV6HKT0G7G1sQ0l1OvycOLmI3suMAWG4Bv8dCbPxYT3dE9FpgaF2PP9DFQ7C11MhcPxGQK3h7kILKW3wXzqjrVgFi0uyHlVKdk%2F3JLLkmUpNZjohdsHsDmSDqdqP6Rp7fbZjfuVl%2Bb4OApr8ijlJH3X99GdPh0%2B8hQm2kkXBlgzTYUVeRxoyATzOJ%2FTj4OIh6vq745UNyS3yLO5y9EdrNwMLvti63lECoHsMBEUGFjx58TasHWdu84%2BwjieENS98Ds6cixG8IXczdAa2glt8DlaqyfkSML9XIGR7v1d6wwMRelwkiv5LUOkGF3R6PLl6n%2BJvYllAGrr4Pfqec4jMRV9V%2FkSgeQ0Ppyrit8N443JYWwOCcREsaN7HX7yzDDgvbPCBjqkAXzs%2FEt097tRhAQe41oJOcy9TvIJN0lvX5zfk7Xh9aEop5tlFntk1hgXWjjMxbO8eYsN0B8RgkqfSfSs149yUoes3EkJYNwmSgGFrTrcjoUZj%2BYT4var6QlO4xodVc2PkdnPNjEeTkhLW1xXUcKbP3EooQcLhDgUIXcoRY2HkN1npILZuIaJt0vrRdKhTSwdUQZpLnwBj3iEHPIJiiTrlnYD2ZDs&X-Amz-Signature=3919f07d96e2717f272bc294d68bde9189ddd6ae1efff6a974310d8cb1e62b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
