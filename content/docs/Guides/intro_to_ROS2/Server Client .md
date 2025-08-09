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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUOO75%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSzs75MQybufbfRIbgiVcpubCn8e3rQF9XVy%2ByNT53TQIgbMsYsmUTE4HiBLVQtYInLvGEf%2BntOUQLNj6eZpSiuW8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5rIWkmGcMd7SiJlSrcA1IwMqjVgIsOWESUHvIkAaFti8wz4NeDqyNGhZZvSJi8qmnKyJGCmQ5zeuXD8Nu78PZL%2B384f5p0%2Fdq3gxgCj%2FK4bx55tSR0t%2BVbgyL63861oQ0IP%2FQL%2FtIw%2BcLJ0zxAFgzSJfek%2B5Z9daticdKiUWSkj4IKG8sqfwFHpkMHMu1JtPZaIn86horLi7TeDDeAbdsfwLb2NKyHDLJE4C2I0PQh0XYOqjBAmWbP0gRWYgT%2Bc2oGs3z6QT9CzkqafNXT%2BIt8rpeu5p8zm8W25VT7F3g3xa7XFrGzYxrIFkM0QFh82a5qW0kWB7r%2FfKWJ8k6nVh9Fx9u6NhBiFmskrhBVfGoudxLUMrOn%2BhE3Bl%2BJdYDvK%2BkiNA4qFxeQdRpFoxUhkFwOTvISirlmJ%2FhMVZ5n9Ta%2BzqSaaeQM8%2BYgvM0lK0l5gDczKG9%2F3Yx4NTubea%2Bp2s2Bl5qYEhO%2F%2F4aiZGWhpfEUp6V0ItG4RGpVANhRP2W85H0amrg8TQIAc1aezFhCLKMrkxldYiF8oZE6DZQXhqF2C%2BJLqcsOorpkb4KkOcq%2B9WmzPjBlJSHHFC%2FV5GT%2BnoMdRUtPSgNf48NlZedxfyVQOC48ek%2FGBi1s3kLcJogQurQEJKfA3L%2BoZq9OMMbE28QGOqUBObHEJY9vOYDyTPLZKfIXaTlL7SdLueLq%2F7GZ9Kau6koALLjVqBXw4G%2FoIfd5xLfSmWFfFrbP1pVWObbiPJNuXrSGLsm5gwDvDZpMXluvyUzSr%2BXj76qps3urEBU2Og44AP3%2B38d%2BtxcO0uSJ92sY8PcLc%2FxAQFEsdwndAV1AMl1JimbhjoPE%2Beo5dTOIAOOUsckh4fvVp4L7SvlPiQoZuU2AoB6V&X-Amz-Signature=1f6f77ffcd46d57e611d896dd65ff022bc7c99114072133b42e3ff85ecd17643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUOO75%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSzs75MQybufbfRIbgiVcpubCn8e3rQF9XVy%2ByNT53TQIgbMsYsmUTE4HiBLVQtYInLvGEf%2BntOUQLNj6eZpSiuW8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5rIWkmGcMd7SiJlSrcA1IwMqjVgIsOWESUHvIkAaFti8wz4NeDqyNGhZZvSJi8qmnKyJGCmQ5zeuXD8Nu78PZL%2B384f5p0%2Fdq3gxgCj%2FK4bx55tSR0t%2BVbgyL63861oQ0IP%2FQL%2FtIw%2BcLJ0zxAFgzSJfek%2B5Z9daticdKiUWSkj4IKG8sqfwFHpkMHMu1JtPZaIn86horLi7TeDDeAbdsfwLb2NKyHDLJE4C2I0PQh0XYOqjBAmWbP0gRWYgT%2Bc2oGs3z6QT9CzkqafNXT%2BIt8rpeu5p8zm8W25VT7F3g3xa7XFrGzYxrIFkM0QFh82a5qW0kWB7r%2FfKWJ8k6nVh9Fx9u6NhBiFmskrhBVfGoudxLUMrOn%2BhE3Bl%2BJdYDvK%2BkiNA4qFxeQdRpFoxUhkFwOTvISirlmJ%2FhMVZ5n9Ta%2BzqSaaeQM8%2BYgvM0lK0l5gDczKG9%2F3Yx4NTubea%2Bp2s2Bl5qYEhO%2F%2F4aiZGWhpfEUp6V0ItG4RGpVANhRP2W85H0amrg8TQIAc1aezFhCLKMrkxldYiF8oZE6DZQXhqF2C%2BJLqcsOorpkb4KkOcq%2B9WmzPjBlJSHHFC%2FV5GT%2BnoMdRUtPSgNf48NlZedxfyVQOC48ek%2FGBi1s3kLcJogQurQEJKfA3L%2BoZq9OMMbE28QGOqUBObHEJY9vOYDyTPLZKfIXaTlL7SdLueLq%2F7GZ9Kau6koALLjVqBXw4G%2FoIfd5xLfSmWFfFrbP1pVWObbiPJNuXrSGLsm5gwDvDZpMXluvyUzSr%2BXj76qps3urEBU2Og44AP3%2B38d%2BtxcO0uSJ92sY8PcLc%2FxAQFEsdwndAV1AMl1JimbhjoPE%2Beo5dTOIAOOUsckh4fvVp4L7SvlPiQoZuU2AoB6V&X-Amz-Signature=f4172f60c5943941eed8514a0505b9e0d7a7d450620097a6d1696d4d07fafe6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUOO75%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSzs75MQybufbfRIbgiVcpubCn8e3rQF9XVy%2ByNT53TQIgbMsYsmUTE4HiBLVQtYInLvGEf%2BntOUQLNj6eZpSiuW8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5rIWkmGcMd7SiJlSrcA1IwMqjVgIsOWESUHvIkAaFti8wz4NeDqyNGhZZvSJi8qmnKyJGCmQ5zeuXD8Nu78PZL%2B384f5p0%2Fdq3gxgCj%2FK4bx55tSR0t%2BVbgyL63861oQ0IP%2FQL%2FtIw%2BcLJ0zxAFgzSJfek%2B5Z9daticdKiUWSkj4IKG8sqfwFHpkMHMu1JtPZaIn86horLi7TeDDeAbdsfwLb2NKyHDLJE4C2I0PQh0XYOqjBAmWbP0gRWYgT%2Bc2oGs3z6QT9CzkqafNXT%2BIt8rpeu5p8zm8W25VT7F3g3xa7XFrGzYxrIFkM0QFh82a5qW0kWB7r%2FfKWJ8k6nVh9Fx9u6NhBiFmskrhBVfGoudxLUMrOn%2BhE3Bl%2BJdYDvK%2BkiNA4qFxeQdRpFoxUhkFwOTvISirlmJ%2FhMVZ5n9Ta%2BzqSaaeQM8%2BYgvM0lK0l5gDczKG9%2F3Yx4NTubea%2Bp2s2Bl5qYEhO%2F%2F4aiZGWhpfEUp6V0ItG4RGpVANhRP2W85H0amrg8TQIAc1aezFhCLKMrkxldYiF8oZE6DZQXhqF2C%2BJLqcsOorpkb4KkOcq%2B9WmzPjBlJSHHFC%2FV5GT%2BnoMdRUtPSgNf48NlZedxfyVQOC48ek%2FGBi1s3kLcJogQurQEJKfA3L%2BoZq9OMMbE28QGOqUBObHEJY9vOYDyTPLZKfIXaTlL7SdLueLq%2F7GZ9Kau6koALLjVqBXw4G%2FoIfd5xLfSmWFfFrbP1pVWObbiPJNuXrSGLsm5gwDvDZpMXluvyUzSr%2BXj76qps3urEBU2Og44AP3%2B38d%2BtxcO0uSJ92sY8PcLc%2FxAQFEsdwndAV1AMl1JimbhjoPE%2Beo5dTOIAOOUsckh4fvVp4L7SvlPiQoZuU2AoB6V&X-Amz-Signature=dfc47f3b8bd731a8cb0b00d981cfafc9393f119d876c8f9e8f8c48d5e3f02c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUOO75%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSzs75MQybufbfRIbgiVcpubCn8e3rQF9XVy%2ByNT53TQIgbMsYsmUTE4HiBLVQtYInLvGEf%2BntOUQLNj6eZpSiuW8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5rIWkmGcMd7SiJlSrcA1IwMqjVgIsOWESUHvIkAaFti8wz4NeDqyNGhZZvSJi8qmnKyJGCmQ5zeuXD8Nu78PZL%2B384f5p0%2Fdq3gxgCj%2FK4bx55tSR0t%2BVbgyL63861oQ0IP%2FQL%2FtIw%2BcLJ0zxAFgzSJfek%2B5Z9daticdKiUWSkj4IKG8sqfwFHpkMHMu1JtPZaIn86horLi7TeDDeAbdsfwLb2NKyHDLJE4C2I0PQh0XYOqjBAmWbP0gRWYgT%2Bc2oGs3z6QT9CzkqafNXT%2BIt8rpeu5p8zm8W25VT7F3g3xa7XFrGzYxrIFkM0QFh82a5qW0kWB7r%2FfKWJ8k6nVh9Fx9u6NhBiFmskrhBVfGoudxLUMrOn%2BhE3Bl%2BJdYDvK%2BkiNA4qFxeQdRpFoxUhkFwOTvISirlmJ%2FhMVZ5n9Ta%2BzqSaaeQM8%2BYgvM0lK0l5gDczKG9%2F3Yx4NTubea%2Bp2s2Bl5qYEhO%2F%2F4aiZGWhpfEUp6V0ItG4RGpVANhRP2W85H0amrg8TQIAc1aezFhCLKMrkxldYiF8oZE6DZQXhqF2C%2BJLqcsOorpkb4KkOcq%2B9WmzPjBlJSHHFC%2FV5GT%2BnoMdRUtPSgNf48NlZedxfyVQOC48ek%2FGBi1s3kLcJogQurQEJKfA3L%2BoZq9OMMbE28QGOqUBObHEJY9vOYDyTPLZKfIXaTlL7SdLueLq%2F7GZ9Kau6koALLjVqBXw4G%2FoIfd5xLfSmWFfFrbP1pVWObbiPJNuXrSGLsm5gwDvDZpMXluvyUzSr%2BXj76qps3urEBU2Og44AP3%2B38d%2BtxcO0uSJ92sY8PcLc%2FxAQFEsdwndAV1AMl1JimbhjoPE%2Beo5dTOIAOOUsckh4fvVp4L7SvlPiQoZuU2AoB6V&X-Amz-Signature=5916a5c751275f24c52740c114dea1b0d976e56847a031b070ccd78c6b4880df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUOO75%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSzs75MQybufbfRIbgiVcpubCn8e3rQF9XVy%2ByNT53TQIgbMsYsmUTE4HiBLVQtYInLvGEf%2BntOUQLNj6eZpSiuW8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5rIWkmGcMd7SiJlSrcA1IwMqjVgIsOWESUHvIkAaFti8wz4NeDqyNGhZZvSJi8qmnKyJGCmQ5zeuXD8Nu78PZL%2B384f5p0%2Fdq3gxgCj%2FK4bx55tSR0t%2BVbgyL63861oQ0IP%2FQL%2FtIw%2BcLJ0zxAFgzSJfek%2B5Z9daticdKiUWSkj4IKG8sqfwFHpkMHMu1JtPZaIn86horLi7TeDDeAbdsfwLb2NKyHDLJE4C2I0PQh0XYOqjBAmWbP0gRWYgT%2Bc2oGs3z6QT9CzkqafNXT%2BIt8rpeu5p8zm8W25VT7F3g3xa7XFrGzYxrIFkM0QFh82a5qW0kWB7r%2FfKWJ8k6nVh9Fx9u6NhBiFmskrhBVfGoudxLUMrOn%2BhE3Bl%2BJdYDvK%2BkiNA4qFxeQdRpFoxUhkFwOTvISirlmJ%2FhMVZ5n9Ta%2BzqSaaeQM8%2BYgvM0lK0l5gDczKG9%2F3Yx4NTubea%2Bp2s2Bl5qYEhO%2F%2F4aiZGWhpfEUp6V0ItG4RGpVANhRP2W85H0amrg8TQIAc1aezFhCLKMrkxldYiF8oZE6DZQXhqF2C%2BJLqcsOorpkb4KkOcq%2B9WmzPjBlJSHHFC%2FV5GT%2BnoMdRUtPSgNf48NlZedxfyVQOC48ek%2FGBi1s3kLcJogQurQEJKfA3L%2BoZq9OMMbE28QGOqUBObHEJY9vOYDyTPLZKfIXaTlL7SdLueLq%2F7GZ9Kau6koALLjVqBXw4G%2FoIfd5xLfSmWFfFrbP1pVWObbiPJNuXrSGLsm5gwDvDZpMXluvyUzSr%2BXj76qps3urEBU2Og44AP3%2B38d%2BtxcO0uSJ92sY8PcLc%2FxAQFEsdwndAV1AMl1JimbhjoPE%2Beo5dTOIAOOUsckh4fvVp4L7SvlPiQoZuU2AoB6V&X-Amz-Signature=b5690cc46659ae5f18b512e71afb5758ad09a03139e797440717abfc910b2819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
