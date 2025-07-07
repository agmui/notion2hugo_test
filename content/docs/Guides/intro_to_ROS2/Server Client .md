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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKPSYRP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDQypCQMM6O9E7fhN3BFdwQgqRmaxGAVp7vdv1V%2BrzdXwIgF9%2BcrLqcoFMDsf0nClg8XfEkuog6LTuJESjHjoU5%2Fykq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAbF42JU1LBQlpP1fyrcAwIQsdKqoz%2FXApLc6MGsKnFogl4tS0R6NUVB4cDDwr7ak%2BG5qQEad4L5uDONlr5%2Bc0hbtmVLIH%2FKJoppLYRWosFD9pywdJGspfNOQgYa%2FdFHVCv9LvKmivy8iVhIuxH3oQEQp%2Fr7k525rQrhP7%2F87hN4LP21yzg1i7A3FMyev3aN2kIcUcWGrU%2FqpzztevbrOmKt0W9yieN0UaErRMwbhrs3ELbGtAmbnksesyyQ1MCoWc6hT2fg%2Bw6Xjwwz7qjns8w35vy7DNFc4fZOdkGQngsvaf1vhiCf2DYQi5V51BOToCQl%2BpvMIbcn%2Bg7dPzuvsz3Fx8ba9heLoSn0r0tQpNaWEiW8eK7cBzsPoIpkjODL%2FkmHVg2IQt1ox5dxBAfMdwrxFBLDK1WdXVta46VGg9UJZ2pyH2qznf9whs7nYrwAuAYYoB0CF%2FM%2FTItJR0%2BAEg%2FO2I82uvJ9vrT6aAeqsdUb4IZPv3XaoSy7qLwqHtZjrIJ0FOmPhz4nEj0SpdNgNWUdXVXSq8elW2%2BqcbZ1nT5zyFKyld9ayJ2qPhVymC2nDC6Xm01%2FDSVUszAIpDBlmBHg9FWman%2Fo91qw0wDZMP9lZ%2Fx8YWVJ0S6HfSoIEtwtQR%2BfMCWuSnTvYAdPMIjqr8MGOqUB0%2Bm%2FFgOG7uX99r3rOSmQFGOVh4zZhYcXY46k6VDe7FAbPi40AeSZdrWjCybl0Jz3yfxTxSRW9LClvGX84UfOlh4f%2BblFN3AIbrM28YKkRT8x1P%2F8Xg9Nk2DUaowSC5EEJTdWccCQG%2FnuYLm8asKNvjoRUIpGFYquuIGPq0sVKw%2BgNkXURbnyPiUUVUptDkI5gpho4u9Ww0ol93Jyuk1cEKU%2FKWXV&X-Amz-Signature=d398a8c620e993ef5220b3614251d95c67af6deb94c8983877966bb942793a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKPSYRP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDQypCQMM6O9E7fhN3BFdwQgqRmaxGAVp7vdv1V%2BrzdXwIgF9%2BcrLqcoFMDsf0nClg8XfEkuog6LTuJESjHjoU5%2Fykq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAbF42JU1LBQlpP1fyrcAwIQsdKqoz%2FXApLc6MGsKnFogl4tS0R6NUVB4cDDwr7ak%2BG5qQEad4L5uDONlr5%2Bc0hbtmVLIH%2FKJoppLYRWosFD9pywdJGspfNOQgYa%2FdFHVCv9LvKmivy8iVhIuxH3oQEQp%2Fr7k525rQrhP7%2F87hN4LP21yzg1i7A3FMyev3aN2kIcUcWGrU%2FqpzztevbrOmKt0W9yieN0UaErRMwbhrs3ELbGtAmbnksesyyQ1MCoWc6hT2fg%2Bw6Xjwwz7qjns8w35vy7DNFc4fZOdkGQngsvaf1vhiCf2DYQi5V51BOToCQl%2BpvMIbcn%2Bg7dPzuvsz3Fx8ba9heLoSn0r0tQpNaWEiW8eK7cBzsPoIpkjODL%2FkmHVg2IQt1ox5dxBAfMdwrxFBLDK1WdXVta46VGg9UJZ2pyH2qznf9whs7nYrwAuAYYoB0CF%2FM%2FTItJR0%2BAEg%2FO2I82uvJ9vrT6aAeqsdUb4IZPv3XaoSy7qLwqHtZjrIJ0FOmPhz4nEj0SpdNgNWUdXVXSq8elW2%2BqcbZ1nT5zyFKyld9ayJ2qPhVymC2nDC6Xm01%2FDSVUszAIpDBlmBHg9FWman%2Fo91qw0wDZMP9lZ%2Fx8YWVJ0S6HfSoIEtwtQR%2BfMCWuSnTvYAdPMIjqr8MGOqUB0%2Bm%2FFgOG7uX99r3rOSmQFGOVh4zZhYcXY46k6VDe7FAbPi40AeSZdrWjCybl0Jz3yfxTxSRW9LClvGX84UfOlh4f%2BblFN3AIbrM28YKkRT8x1P%2F8Xg9Nk2DUaowSC5EEJTdWccCQG%2FnuYLm8asKNvjoRUIpGFYquuIGPq0sVKw%2BgNkXURbnyPiUUVUptDkI5gpho4u9Ww0ol93Jyuk1cEKU%2FKWXV&X-Amz-Signature=34cfa32f89bf41e7e52be4f53d435e58595067aab0943f1eba1064c987e0b6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKPSYRP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDQypCQMM6O9E7fhN3BFdwQgqRmaxGAVp7vdv1V%2BrzdXwIgF9%2BcrLqcoFMDsf0nClg8XfEkuog6LTuJESjHjoU5%2Fykq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAbF42JU1LBQlpP1fyrcAwIQsdKqoz%2FXApLc6MGsKnFogl4tS0R6NUVB4cDDwr7ak%2BG5qQEad4L5uDONlr5%2Bc0hbtmVLIH%2FKJoppLYRWosFD9pywdJGspfNOQgYa%2FdFHVCv9LvKmivy8iVhIuxH3oQEQp%2Fr7k525rQrhP7%2F87hN4LP21yzg1i7A3FMyev3aN2kIcUcWGrU%2FqpzztevbrOmKt0W9yieN0UaErRMwbhrs3ELbGtAmbnksesyyQ1MCoWc6hT2fg%2Bw6Xjwwz7qjns8w35vy7DNFc4fZOdkGQngsvaf1vhiCf2DYQi5V51BOToCQl%2BpvMIbcn%2Bg7dPzuvsz3Fx8ba9heLoSn0r0tQpNaWEiW8eK7cBzsPoIpkjODL%2FkmHVg2IQt1ox5dxBAfMdwrxFBLDK1WdXVta46VGg9UJZ2pyH2qznf9whs7nYrwAuAYYoB0CF%2FM%2FTItJR0%2BAEg%2FO2I82uvJ9vrT6aAeqsdUb4IZPv3XaoSy7qLwqHtZjrIJ0FOmPhz4nEj0SpdNgNWUdXVXSq8elW2%2BqcbZ1nT5zyFKyld9ayJ2qPhVymC2nDC6Xm01%2FDSVUszAIpDBlmBHg9FWman%2Fo91qw0wDZMP9lZ%2Fx8YWVJ0S6HfSoIEtwtQR%2BfMCWuSnTvYAdPMIjqr8MGOqUB0%2Bm%2FFgOG7uX99r3rOSmQFGOVh4zZhYcXY46k6VDe7FAbPi40AeSZdrWjCybl0Jz3yfxTxSRW9LClvGX84UfOlh4f%2BblFN3AIbrM28YKkRT8x1P%2F8Xg9Nk2DUaowSC5EEJTdWccCQG%2FnuYLm8asKNvjoRUIpGFYquuIGPq0sVKw%2BgNkXURbnyPiUUVUptDkI5gpho4u9Ww0ol93Jyuk1cEKU%2FKWXV&X-Amz-Signature=a43fb17c9d3e643516a7bd101b3a305b2546080cca5891f64e50d17540e63d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKPSYRP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDQypCQMM6O9E7fhN3BFdwQgqRmaxGAVp7vdv1V%2BrzdXwIgF9%2BcrLqcoFMDsf0nClg8XfEkuog6LTuJESjHjoU5%2Fykq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAbF42JU1LBQlpP1fyrcAwIQsdKqoz%2FXApLc6MGsKnFogl4tS0R6NUVB4cDDwr7ak%2BG5qQEad4L5uDONlr5%2Bc0hbtmVLIH%2FKJoppLYRWosFD9pywdJGspfNOQgYa%2FdFHVCv9LvKmivy8iVhIuxH3oQEQp%2Fr7k525rQrhP7%2F87hN4LP21yzg1i7A3FMyev3aN2kIcUcWGrU%2FqpzztevbrOmKt0W9yieN0UaErRMwbhrs3ELbGtAmbnksesyyQ1MCoWc6hT2fg%2Bw6Xjwwz7qjns8w35vy7DNFc4fZOdkGQngsvaf1vhiCf2DYQi5V51BOToCQl%2BpvMIbcn%2Bg7dPzuvsz3Fx8ba9heLoSn0r0tQpNaWEiW8eK7cBzsPoIpkjODL%2FkmHVg2IQt1ox5dxBAfMdwrxFBLDK1WdXVta46VGg9UJZ2pyH2qznf9whs7nYrwAuAYYoB0CF%2FM%2FTItJR0%2BAEg%2FO2I82uvJ9vrT6aAeqsdUb4IZPv3XaoSy7qLwqHtZjrIJ0FOmPhz4nEj0SpdNgNWUdXVXSq8elW2%2BqcbZ1nT5zyFKyld9ayJ2qPhVymC2nDC6Xm01%2FDSVUszAIpDBlmBHg9FWman%2Fo91qw0wDZMP9lZ%2Fx8YWVJ0S6HfSoIEtwtQR%2BfMCWuSnTvYAdPMIjqr8MGOqUB0%2Bm%2FFgOG7uX99r3rOSmQFGOVh4zZhYcXY46k6VDe7FAbPi40AeSZdrWjCybl0Jz3yfxTxSRW9LClvGX84UfOlh4f%2BblFN3AIbrM28YKkRT8x1P%2F8Xg9Nk2DUaowSC5EEJTdWccCQG%2FnuYLm8asKNvjoRUIpGFYquuIGPq0sVKw%2BgNkXURbnyPiUUVUptDkI5gpho4u9Ww0ol93Jyuk1cEKU%2FKWXV&X-Amz-Signature=e94db898f3e18c1c8d5458879a0b9a053f76ca3d1692f9402aa519dbefe7bdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKPSYRP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDQypCQMM6O9E7fhN3BFdwQgqRmaxGAVp7vdv1V%2BrzdXwIgF9%2BcrLqcoFMDsf0nClg8XfEkuog6LTuJESjHjoU5%2Fykq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAbF42JU1LBQlpP1fyrcAwIQsdKqoz%2FXApLc6MGsKnFogl4tS0R6NUVB4cDDwr7ak%2BG5qQEad4L5uDONlr5%2Bc0hbtmVLIH%2FKJoppLYRWosFD9pywdJGspfNOQgYa%2FdFHVCv9LvKmivy8iVhIuxH3oQEQp%2Fr7k525rQrhP7%2F87hN4LP21yzg1i7A3FMyev3aN2kIcUcWGrU%2FqpzztevbrOmKt0W9yieN0UaErRMwbhrs3ELbGtAmbnksesyyQ1MCoWc6hT2fg%2Bw6Xjwwz7qjns8w35vy7DNFc4fZOdkGQngsvaf1vhiCf2DYQi5V51BOToCQl%2BpvMIbcn%2Bg7dPzuvsz3Fx8ba9heLoSn0r0tQpNaWEiW8eK7cBzsPoIpkjODL%2FkmHVg2IQt1ox5dxBAfMdwrxFBLDK1WdXVta46VGg9UJZ2pyH2qznf9whs7nYrwAuAYYoB0CF%2FM%2FTItJR0%2BAEg%2FO2I82uvJ9vrT6aAeqsdUb4IZPv3XaoSy7qLwqHtZjrIJ0FOmPhz4nEj0SpdNgNWUdXVXSq8elW2%2BqcbZ1nT5zyFKyld9ayJ2qPhVymC2nDC6Xm01%2FDSVUszAIpDBlmBHg9FWman%2Fo91qw0wDZMP9lZ%2Fx8YWVJ0S6HfSoIEtwtQR%2BfMCWuSnTvYAdPMIjqr8MGOqUB0%2Bm%2FFgOG7uX99r3rOSmQFGOVh4zZhYcXY46k6VDe7FAbPi40AeSZdrWjCybl0Jz3yfxTxSRW9LClvGX84UfOlh4f%2BblFN3AIbrM28YKkRT8x1P%2F8Xg9Nk2DUaowSC5EEJTdWccCQG%2FnuYLm8asKNvjoRUIpGFYquuIGPq0sVKw%2BgNkXURbnyPiUUVUptDkI5gpho4u9Ww0ol93Jyuk1cEKU%2FKWXV&X-Amz-Signature=deaf7a3f8462a6397a7e82a5a2477d97586ab493519255fa77da0c0685fbd8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
