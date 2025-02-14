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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRVP7QX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2FNq57idkCfbfQcRGq2Nz65YV%2BBMCUWzMOfvz2NtNzwIhAPkBEBfKgvuB1198vcC9nHpHlPyqw0nXasU62HlEVvcPKv8DCCMQABoMNjM3NDIzMTgzODA1IgzMd3e%2BXojnqgFQvEkq3AMx40WL5mw%2FS6Dge64J%2BBIuoGrAR9GqytXKdqPeRYKU%2F%2F2PK5hWwUCTQq5WiS8Lp83f16z%2FcYQA0k4xExUDKCABcuTu9Dqcxqt51pN1Pb%2BUnJMMwG%2BLPjPF3IZkPwLgblXagLHYd1Pmm0l9EXhpYMYrC9PnEmeMJs66P6giSF5vGU2S5rjOTOh88kUF6Jo0vxfVm6D%2FmmMbYxPmJ1%2Bv7K4Qlm31KCY9%2BD2NWQnOempcGsBe5ftSNXVqz67emXsrVGC%2BoV1kfYnvccNeBI5zwFlLwJf73WD72LpEF5qfFkCYDrLZ6y9rmoyTBLekBBc6BqnDSDID8sLTzuO7ENMutld0B5FDF8kPwfZnZYiHQ22LkS%2FOb8aGUbgbbPjbi%2BLbFgK5iXeqWGaXFc67pXiPuAcfB4qZbFOMQTtMDGyvRzpzJdFBZ%2FCi6TJvCobF0dsJM3EVRh3FoD5IPlk6sQsmmcoEq8pxWC4LfHIOWyK96KDxDHUGGnaEiJZDIeHTF4SHacR6oijv2NjomfBAFVjttRWZfz1y7CjFfOtsFoczSytPHD5tNjWFzdIXQWDBxNtuR9F1iZk9gCFl6qhPCtAYGtp5z%2Fj4lrkRaQMa5YfnTbEzK0N2hQAhGRBbh9uS5DDe0bq9BjqkAVIzyiYRkUqkkEnaASh99Og45kU4tdLYwAVZ3IxrdHVnTOUO6Fc1eN%2BcOxxsdeURyXZgnj3oeIqyCsjjlVk5aUj3tv%2F%2BjXPJXuv3D8HQuj%2Fu%2BqCE8Lj7%2BqE2RIPlXSoM4K6T0z9BUfS%2BOh3B03PQobnq%2BrRUQhUuEiA7pHbQU39xiDcbW8hR3qaZRR6G3DdnVwrm4QYRBGrvikRRb5dgVwZoILgu&X-Amz-Signature=5615846e5e8a810d28eb79c00ff26665cac35158b84cde78a0a9d86c1da3a303&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRVP7QX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2FNq57idkCfbfQcRGq2Nz65YV%2BBMCUWzMOfvz2NtNzwIhAPkBEBfKgvuB1198vcC9nHpHlPyqw0nXasU62HlEVvcPKv8DCCMQABoMNjM3NDIzMTgzODA1IgzMd3e%2BXojnqgFQvEkq3AMx40WL5mw%2FS6Dge64J%2BBIuoGrAR9GqytXKdqPeRYKU%2F%2F2PK5hWwUCTQq5WiS8Lp83f16z%2FcYQA0k4xExUDKCABcuTu9Dqcxqt51pN1Pb%2BUnJMMwG%2BLPjPF3IZkPwLgblXagLHYd1Pmm0l9EXhpYMYrC9PnEmeMJs66P6giSF5vGU2S5rjOTOh88kUF6Jo0vxfVm6D%2FmmMbYxPmJ1%2Bv7K4Qlm31KCY9%2BD2NWQnOempcGsBe5ftSNXVqz67emXsrVGC%2BoV1kfYnvccNeBI5zwFlLwJf73WD72LpEF5qfFkCYDrLZ6y9rmoyTBLekBBc6BqnDSDID8sLTzuO7ENMutld0B5FDF8kPwfZnZYiHQ22LkS%2FOb8aGUbgbbPjbi%2BLbFgK5iXeqWGaXFc67pXiPuAcfB4qZbFOMQTtMDGyvRzpzJdFBZ%2FCi6TJvCobF0dsJM3EVRh3FoD5IPlk6sQsmmcoEq8pxWC4LfHIOWyK96KDxDHUGGnaEiJZDIeHTF4SHacR6oijv2NjomfBAFVjttRWZfz1y7CjFfOtsFoczSytPHD5tNjWFzdIXQWDBxNtuR9F1iZk9gCFl6qhPCtAYGtp5z%2Fj4lrkRaQMa5YfnTbEzK0N2hQAhGRBbh9uS5DDe0bq9BjqkAVIzyiYRkUqkkEnaASh99Og45kU4tdLYwAVZ3IxrdHVnTOUO6Fc1eN%2BcOxxsdeURyXZgnj3oeIqyCsjjlVk5aUj3tv%2F%2BjXPJXuv3D8HQuj%2Fu%2BqCE8Lj7%2BqE2RIPlXSoM4K6T0z9BUfS%2BOh3B03PQobnq%2BrRUQhUuEiA7pHbQU39xiDcbW8hR3qaZRR6G3DdnVwrm4QYRBGrvikRRb5dgVwZoILgu&X-Amz-Signature=4ff9c06095159ff8b9aacde5ab74ce0780d9880937426c093cef0f5d14adaf1d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRVP7QX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2FNq57idkCfbfQcRGq2Nz65YV%2BBMCUWzMOfvz2NtNzwIhAPkBEBfKgvuB1198vcC9nHpHlPyqw0nXasU62HlEVvcPKv8DCCMQABoMNjM3NDIzMTgzODA1IgzMd3e%2BXojnqgFQvEkq3AMx40WL5mw%2FS6Dge64J%2BBIuoGrAR9GqytXKdqPeRYKU%2F%2F2PK5hWwUCTQq5WiS8Lp83f16z%2FcYQA0k4xExUDKCABcuTu9Dqcxqt51pN1Pb%2BUnJMMwG%2BLPjPF3IZkPwLgblXagLHYd1Pmm0l9EXhpYMYrC9PnEmeMJs66P6giSF5vGU2S5rjOTOh88kUF6Jo0vxfVm6D%2FmmMbYxPmJ1%2Bv7K4Qlm31KCY9%2BD2NWQnOempcGsBe5ftSNXVqz67emXsrVGC%2BoV1kfYnvccNeBI5zwFlLwJf73WD72LpEF5qfFkCYDrLZ6y9rmoyTBLekBBc6BqnDSDID8sLTzuO7ENMutld0B5FDF8kPwfZnZYiHQ22LkS%2FOb8aGUbgbbPjbi%2BLbFgK5iXeqWGaXFc67pXiPuAcfB4qZbFOMQTtMDGyvRzpzJdFBZ%2FCi6TJvCobF0dsJM3EVRh3FoD5IPlk6sQsmmcoEq8pxWC4LfHIOWyK96KDxDHUGGnaEiJZDIeHTF4SHacR6oijv2NjomfBAFVjttRWZfz1y7CjFfOtsFoczSytPHD5tNjWFzdIXQWDBxNtuR9F1iZk9gCFl6qhPCtAYGtp5z%2Fj4lrkRaQMa5YfnTbEzK0N2hQAhGRBbh9uS5DDe0bq9BjqkAVIzyiYRkUqkkEnaASh99Og45kU4tdLYwAVZ3IxrdHVnTOUO6Fc1eN%2BcOxxsdeURyXZgnj3oeIqyCsjjlVk5aUj3tv%2F%2BjXPJXuv3D8HQuj%2Fu%2BqCE8Lj7%2BqE2RIPlXSoM4K6T0z9BUfS%2BOh3B03PQobnq%2BrRUQhUuEiA7pHbQU39xiDcbW8hR3qaZRR6G3DdnVwrm4QYRBGrvikRRb5dgVwZoILgu&X-Amz-Signature=9f851869f23be34370258a941e419a95f7fdb4a5f5600a772f31f4d90df4e242&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRVP7QX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2FNq57idkCfbfQcRGq2Nz65YV%2BBMCUWzMOfvz2NtNzwIhAPkBEBfKgvuB1198vcC9nHpHlPyqw0nXasU62HlEVvcPKv8DCCMQABoMNjM3NDIzMTgzODA1IgzMd3e%2BXojnqgFQvEkq3AMx40WL5mw%2FS6Dge64J%2BBIuoGrAR9GqytXKdqPeRYKU%2F%2F2PK5hWwUCTQq5WiS8Lp83f16z%2FcYQA0k4xExUDKCABcuTu9Dqcxqt51pN1Pb%2BUnJMMwG%2BLPjPF3IZkPwLgblXagLHYd1Pmm0l9EXhpYMYrC9PnEmeMJs66P6giSF5vGU2S5rjOTOh88kUF6Jo0vxfVm6D%2FmmMbYxPmJ1%2Bv7K4Qlm31KCY9%2BD2NWQnOempcGsBe5ftSNXVqz67emXsrVGC%2BoV1kfYnvccNeBI5zwFlLwJf73WD72LpEF5qfFkCYDrLZ6y9rmoyTBLekBBc6BqnDSDID8sLTzuO7ENMutld0B5FDF8kPwfZnZYiHQ22LkS%2FOb8aGUbgbbPjbi%2BLbFgK5iXeqWGaXFc67pXiPuAcfB4qZbFOMQTtMDGyvRzpzJdFBZ%2FCi6TJvCobF0dsJM3EVRh3FoD5IPlk6sQsmmcoEq8pxWC4LfHIOWyK96KDxDHUGGnaEiJZDIeHTF4SHacR6oijv2NjomfBAFVjttRWZfz1y7CjFfOtsFoczSytPHD5tNjWFzdIXQWDBxNtuR9F1iZk9gCFl6qhPCtAYGtp5z%2Fj4lrkRaQMa5YfnTbEzK0N2hQAhGRBbh9uS5DDe0bq9BjqkAVIzyiYRkUqkkEnaASh99Og45kU4tdLYwAVZ3IxrdHVnTOUO6Fc1eN%2BcOxxsdeURyXZgnj3oeIqyCsjjlVk5aUj3tv%2F%2BjXPJXuv3D8HQuj%2Fu%2BqCE8Lj7%2BqE2RIPlXSoM4K6T0z9BUfS%2BOh3B03PQobnq%2BrRUQhUuEiA7pHbQU39xiDcbW8hR3qaZRR6G3DdnVwrm4QYRBGrvikRRb5dgVwZoILgu&X-Amz-Signature=ba911043d10976d8fc4e08ff9dd9677e685e9f17fa4f28422bd178e681a417d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRVP7QX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2FNq57idkCfbfQcRGq2Nz65YV%2BBMCUWzMOfvz2NtNzwIhAPkBEBfKgvuB1198vcC9nHpHlPyqw0nXasU62HlEVvcPKv8DCCMQABoMNjM3NDIzMTgzODA1IgzMd3e%2BXojnqgFQvEkq3AMx40WL5mw%2FS6Dge64J%2BBIuoGrAR9GqytXKdqPeRYKU%2F%2F2PK5hWwUCTQq5WiS8Lp83f16z%2FcYQA0k4xExUDKCABcuTu9Dqcxqt51pN1Pb%2BUnJMMwG%2BLPjPF3IZkPwLgblXagLHYd1Pmm0l9EXhpYMYrC9PnEmeMJs66P6giSF5vGU2S5rjOTOh88kUF6Jo0vxfVm6D%2FmmMbYxPmJ1%2Bv7K4Qlm31KCY9%2BD2NWQnOempcGsBe5ftSNXVqz67emXsrVGC%2BoV1kfYnvccNeBI5zwFlLwJf73WD72LpEF5qfFkCYDrLZ6y9rmoyTBLekBBc6BqnDSDID8sLTzuO7ENMutld0B5FDF8kPwfZnZYiHQ22LkS%2FOb8aGUbgbbPjbi%2BLbFgK5iXeqWGaXFc67pXiPuAcfB4qZbFOMQTtMDGyvRzpzJdFBZ%2FCi6TJvCobF0dsJM3EVRh3FoD5IPlk6sQsmmcoEq8pxWC4LfHIOWyK96KDxDHUGGnaEiJZDIeHTF4SHacR6oijv2NjomfBAFVjttRWZfz1y7CjFfOtsFoczSytPHD5tNjWFzdIXQWDBxNtuR9F1iZk9gCFl6qhPCtAYGtp5z%2Fj4lrkRaQMa5YfnTbEzK0N2hQAhGRBbh9uS5DDe0bq9BjqkAVIzyiYRkUqkkEnaASh99Og45kU4tdLYwAVZ3IxrdHVnTOUO6Fc1eN%2BcOxxsdeURyXZgnj3oeIqyCsjjlVk5aUj3tv%2F%2BjXPJXuv3D8HQuj%2Fu%2BqCE8Lj7%2BqE2RIPlXSoM4K6T0z9BUfS%2BOh3B03PQobnq%2BrRUQhUuEiA7pHbQU39xiDcbW8hR3qaZRR6G3DdnVwrm4QYRBGrvikRRb5dgVwZoILgu&X-Amz-Signature=6ce6483a80069abeee694b1ecdcc471298b8d5fa18feae7a6e5936dc9a2d2c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
