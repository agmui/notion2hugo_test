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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AG7CHSO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlZsH3xnOxcW%2FmTZAmPZaoTeIsoZlLoVUcQxjpnPIcyAiEAkLkXB3DNp5YBAm9OG2Jkaw89qDXBq2L3kTj%2FlqC5VWgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqe8qWYRjXMaZ4ZuSrcA%2BCI3JOnOtEu8s8TCpjiz9SzH%2FcUuri8jTo3HbB6%2BMZh3dD8198hYBDgxd4yCtsUxPG%2FZZMnEP3xAmYiWydIOTxuee7FIXqGQq3meLJr8HRP%2FEejmePb9eXrAP8a0vXYdoVMEDgdYevo11qzKTnMa%2Fz%2FmzJMowyUAbLTPfjsgSbdelYbJrte%2BBtuKfPp9zmSekxswWE2FwxaBMhMkioKfsuv%2FIFck4kyJG7MNujinK0ZdjPcj56n0%2FyDgeg6pz4xzkBX49Wcp5%2BQv6sQxgcedt6i2Zbbvm3br%2BuOt50SKf%2BIFlafn2AdSX5pEhKfwKkpmzhRXx7Id08ihreESrHGEJYqNnHvgRlE3sWvVI5OK6WHA0CAfntdUbvig0arYdM4OSykncS5TZRRhLOGvQUkLS3ImiGvu4dW1RkeFCYa%2BZHeIWQTHullDvpQ9h4EaI7IYRDKsVKZ2i%2FSLPmRSiKQnT%2FL6dNHsZV6ocMVYh2sVcx7hiFdtxRKsEjIO101mOBHjffA4tKkx57v9M80pbpNqHhnWmqYKxBdDuPyGaGdx9vRPU4HPPWzYU76%2FL6DvNuKEir31tejqSdyWOUZtlvSVXBwBggrxUv8bqV3lk7AgzmoG6Yxrd77hrLg4QvxMMLByr4GOqUBfwgd6J29hb4heLGpH8o7a7YyTbmXlKJHEL56YvLu8F8vPNAkQSIbUGRgSaDbSL6VnR87yiFckqiz6KoTPnF1iSdw3O8zXOYyiF%2FwO5fe7Hba83x6gjsi4jPVu1wPiv2%2FjJEjz7ts9%2BP6gwE9YaOkwjxnnNKhyBHbo%2BQUuRCRz1uwXIDbknhwBHzYSRTRKZq%2Fb5gc9qNSuGWQ4%2BHqR58U4piPse1x&X-Amz-Signature=de8bd90cf1d3b5eb3591d4dc38a63e40136fb34aa3704bed671b3c9577032b65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AG7CHSO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlZsH3xnOxcW%2FmTZAmPZaoTeIsoZlLoVUcQxjpnPIcyAiEAkLkXB3DNp5YBAm9OG2Jkaw89qDXBq2L3kTj%2FlqC5VWgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqe8qWYRjXMaZ4ZuSrcA%2BCI3JOnOtEu8s8TCpjiz9SzH%2FcUuri8jTo3HbB6%2BMZh3dD8198hYBDgxd4yCtsUxPG%2FZZMnEP3xAmYiWydIOTxuee7FIXqGQq3meLJr8HRP%2FEejmePb9eXrAP8a0vXYdoVMEDgdYevo11qzKTnMa%2Fz%2FmzJMowyUAbLTPfjsgSbdelYbJrte%2BBtuKfPp9zmSekxswWE2FwxaBMhMkioKfsuv%2FIFck4kyJG7MNujinK0ZdjPcj56n0%2FyDgeg6pz4xzkBX49Wcp5%2BQv6sQxgcedt6i2Zbbvm3br%2BuOt50SKf%2BIFlafn2AdSX5pEhKfwKkpmzhRXx7Id08ihreESrHGEJYqNnHvgRlE3sWvVI5OK6WHA0CAfntdUbvig0arYdM4OSykncS5TZRRhLOGvQUkLS3ImiGvu4dW1RkeFCYa%2BZHeIWQTHullDvpQ9h4EaI7IYRDKsVKZ2i%2FSLPmRSiKQnT%2FL6dNHsZV6ocMVYh2sVcx7hiFdtxRKsEjIO101mOBHjffA4tKkx57v9M80pbpNqHhnWmqYKxBdDuPyGaGdx9vRPU4HPPWzYU76%2FL6DvNuKEir31tejqSdyWOUZtlvSVXBwBggrxUv8bqV3lk7AgzmoG6Yxrd77hrLg4QvxMMLByr4GOqUBfwgd6J29hb4heLGpH8o7a7YyTbmXlKJHEL56YvLu8F8vPNAkQSIbUGRgSaDbSL6VnR87yiFckqiz6KoTPnF1iSdw3O8zXOYyiF%2FwO5fe7Hba83x6gjsi4jPVu1wPiv2%2FjJEjz7ts9%2BP6gwE9YaOkwjxnnNKhyBHbo%2BQUuRCRz1uwXIDbknhwBHzYSRTRKZq%2Fb5gc9qNSuGWQ4%2BHqR58U4piPse1x&X-Amz-Signature=bda5fa997cb8ccdb28eaacfc695a0c511b29fbf62884f76b70062f21643f9296&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AG7CHSO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlZsH3xnOxcW%2FmTZAmPZaoTeIsoZlLoVUcQxjpnPIcyAiEAkLkXB3DNp5YBAm9OG2Jkaw89qDXBq2L3kTj%2FlqC5VWgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqe8qWYRjXMaZ4ZuSrcA%2BCI3JOnOtEu8s8TCpjiz9SzH%2FcUuri8jTo3HbB6%2BMZh3dD8198hYBDgxd4yCtsUxPG%2FZZMnEP3xAmYiWydIOTxuee7FIXqGQq3meLJr8HRP%2FEejmePb9eXrAP8a0vXYdoVMEDgdYevo11qzKTnMa%2Fz%2FmzJMowyUAbLTPfjsgSbdelYbJrte%2BBtuKfPp9zmSekxswWE2FwxaBMhMkioKfsuv%2FIFck4kyJG7MNujinK0ZdjPcj56n0%2FyDgeg6pz4xzkBX49Wcp5%2BQv6sQxgcedt6i2Zbbvm3br%2BuOt50SKf%2BIFlafn2AdSX5pEhKfwKkpmzhRXx7Id08ihreESrHGEJYqNnHvgRlE3sWvVI5OK6WHA0CAfntdUbvig0arYdM4OSykncS5TZRRhLOGvQUkLS3ImiGvu4dW1RkeFCYa%2BZHeIWQTHullDvpQ9h4EaI7IYRDKsVKZ2i%2FSLPmRSiKQnT%2FL6dNHsZV6ocMVYh2sVcx7hiFdtxRKsEjIO101mOBHjffA4tKkx57v9M80pbpNqHhnWmqYKxBdDuPyGaGdx9vRPU4HPPWzYU76%2FL6DvNuKEir31tejqSdyWOUZtlvSVXBwBggrxUv8bqV3lk7AgzmoG6Yxrd77hrLg4QvxMMLByr4GOqUBfwgd6J29hb4heLGpH8o7a7YyTbmXlKJHEL56YvLu8F8vPNAkQSIbUGRgSaDbSL6VnR87yiFckqiz6KoTPnF1iSdw3O8zXOYyiF%2FwO5fe7Hba83x6gjsi4jPVu1wPiv2%2FjJEjz7ts9%2BP6gwE9YaOkwjxnnNKhyBHbo%2BQUuRCRz1uwXIDbknhwBHzYSRTRKZq%2Fb5gc9qNSuGWQ4%2BHqR58U4piPse1x&X-Amz-Signature=e20eca79d4562d82c57b6c0c8357fb1b21da68c78ccf3c8f61129d573284f6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AG7CHSO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlZsH3xnOxcW%2FmTZAmPZaoTeIsoZlLoVUcQxjpnPIcyAiEAkLkXB3DNp5YBAm9OG2Jkaw89qDXBq2L3kTj%2FlqC5VWgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqe8qWYRjXMaZ4ZuSrcA%2BCI3JOnOtEu8s8TCpjiz9SzH%2FcUuri8jTo3HbB6%2BMZh3dD8198hYBDgxd4yCtsUxPG%2FZZMnEP3xAmYiWydIOTxuee7FIXqGQq3meLJr8HRP%2FEejmePb9eXrAP8a0vXYdoVMEDgdYevo11qzKTnMa%2Fz%2FmzJMowyUAbLTPfjsgSbdelYbJrte%2BBtuKfPp9zmSekxswWE2FwxaBMhMkioKfsuv%2FIFck4kyJG7MNujinK0ZdjPcj56n0%2FyDgeg6pz4xzkBX49Wcp5%2BQv6sQxgcedt6i2Zbbvm3br%2BuOt50SKf%2BIFlafn2AdSX5pEhKfwKkpmzhRXx7Id08ihreESrHGEJYqNnHvgRlE3sWvVI5OK6WHA0CAfntdUbvig0arYdM4OSykncS5TZRRhLOGvQUkLS3ImiGvu4dW1RkeFCYa%2BZHeIWQTHullDvpQ9h4EaI7IYRDKsVKZ2i%2FSLPmRSiKQnT%2FL6dNHsZV6ocMVYh2sVcx7hiFdtxRKsEjIO101mOBHjffA4tKkx57v9M80pbpNqHhnWmqYKxBdDuPyGaGdx9vRPU4HPPWzYU76%2FL6DvNuKEir31tejqSdyWOUZtlvSVXBwBggrxUv8bqV3lk7AgzmoG6Yxrd77hrLg4QvxMMLByr4GOqUBfwgd6J29hb4heLGpH8o7a7YyTbmXlKJHEL56YvLu8F8vPNAkQSIbUGRgSaDbSL6VnR87yiFckqiz6KoTPnF1iSdw3O8zXOYyiF%2FwO5fe7Hba83x6gjsi4jPVu1wPiv2%2FjJEjz7ts9%2BP6gwE9YaOkwjxnnNKhyBHbo%2BQUuRCRz1uwXIDbknhwBHzYSRTRKZq%2Fb5gc9qNSuGWQ4%2BHqR58U4piPse1x&X-Amz-Signature=648ec9be4c80b7a0cfae14ce9ae72e8f361b8d0a1d4a47cbac5bb842fb4e6c51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AG7CHSO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlZsH3xnOxcW%2FmTZAmPZaoTeIsoZlLoVUcQxjpnPIcyAiEAkLkXB3DNp5YBAm9OG2Jkaw89qDXBq2L3kTj%2FlqC5VWgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqe8qWYRjXMaZ4ZuSrcA%2BCI3JOnOtEu8s8TCpjiz9SzH%2FcUuri8jTo3HbB6%2BMZh3dD8198hYBDgxd4yCtsUxPG%2FZZMnEP3xAmYiWydIOTxuee7FIXqGQq3meLJr8HRP%2FEejmePb9eXrAP8a0vXYdoVMEDgdYevo11qzKTnMa%2Fz%2FmzJMowyUAbLTPfjsgSbdelYbJrte%2BBtuKfPp9zmSekxswWE2FwxaBMhMkioKfsuv%2FIFck4kyJG7MNujinK0ZdjPcj56n0%2FyDgeg6pz4xzkBX49Wcp5%2BQv6sQxgcedt6i2Zbbvm3br%2BuOt50SKf%2BIFlafn2AdSX5pEhKfwKkpmzhRXx7Id08ihreESrHGEJYqNnHvgRlE3sWvVI5OK6WHA0CAfntdUbvig0arYdM4OSykncS5TZRRhLOGvQUkLS3ImiGvu4dW1RkeFCYa%2BZHeIWQTHullDvpQ9h4EaI7IYRDKsVKZ2i%2FSLPmRSiKQnT%2FL6dNHsZV6ocMVYh2sVcx7hiFdtxRKsEjIO101mOBHjffA4tKkx57v9M80pbpNqHhnWmqYKxBdDuPyGaGdx9vRPU4HPPWzYU76%2FL6DvNuKEir31tejqSdyWOUZtlvSVXBwBggrxUv8bqV3lk7AgzmoG6Yxrd77hrLg4QvxMMLByr4GOqUBfwgd6J29hb4heLGpH8o7a7YyTbmXlKJHEL56YvLu8F8vPNAkQSIbUGRgSaDbSL6VnR87yiFckqiz6KoTPnF1iSdw3O8zXOYyiF%2FwO5fe7Hba83x6gjsi4jPVu1wPiv2%2FjJEjz7ts9%2BP6gwE9YaOkwjxnnNKhyBHbo%2BQUuRCRz1uwXIDbknhwBHzYSRTRKZq%2Fb5gc9qNSuGWQ4%2BHqR58U4piPse1x&X-Amz-Signature=40ad1fc8773966a5c9775363faff34928767beb5746b4172988fdfadfc62b161&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
