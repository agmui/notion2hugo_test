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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CPLB5V%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIB0H4j8mgqVUn2tsT%2FG9AhpeGNcPPwinfdhYKmepEwLmAiEAhiEKuOsKrlDzxMbtzS7vGn5VAIvgLzvA5CI%2Bsu%2Bb1K0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHK9NecwBy8yBlLr8SrcA6%2B44vcsg0aagX4iNwkGpCK2lXTlccA%2B7LGXlo0QZGuWDP9BAcXrY1bMjZqDbwZ1qcU1GP6%2BbmKSQaYU%2F97Tgvt4QgrHNFwySsrNotPxsp1rWR0Bhlu8P%2FkBJgn%2BIggAfMgFpNpB1bR7%2Brn0nPZ0GHsrEtdEig70YyHf7fS6D8N3vLNe219YCXuY9BMeRrc9r7yGhfTeTjp177lfsF3zuAgY0NwBnmdq1mt9m9izH%2BynFECpVyafeTzd%2BdSuIe8hW56ut6jg%2BOb8QRU3UgRq8cV5c6D4%2BdW5CvZUMk%2BMcwBTHvph3gLTBAt120xbDo6D3T0h47r2%2FYOWbFggQSKDxK6a8H5lXrjfZiEPopqOu9ApZtq3G6I%2FPMTyf4mqQ07ZfIcZDXc3fq2kMDd1f8Z5Y9eq7Druk1weujgwQdzHMkhm1v4hcWeyIS3DaswsU2w2T16Lkj5w%2B1XZlHWBBvKwA7y6jXeIANcLpxU6IJHYgUERo45rul%2ByKS5FpaGZDtaBK%2F0ZsdmWojwE2eG0WJfMa12lyT%2BHuZHhBZu78JCP1cNzHQPbpIUqZeMYOn3xVhgxbB9gtQL0MDdmL1PMtFXS6CK8TNt8xERxJpJHMeGhdo1%2FEGAQgbtLkkPAaD5dMMHxjL0GOqUBth3uM1K9iiEvB8kvm6%2FfAZD47t26wRL5YkgkgUVXOVrN5NDHY6Fhp%2FO0OuJLVVnvViwahjdNzvvUlfBRu0v7VkcZjVBhfizL6hJ0v9SA4KVMDEmf036Fl7bjY7u1mdW1yIP3ECqRC%2B9bfX5zFjjaVnMCAEcHNgSmXSDdiv7cxrjBIjikqzZggmk9R1UVor%2BqJ2kh3LJpLmkhoSETkjSyrM8QRZtH&X-Amz-Signature=966bede1201bfa2bdd91d7f3f25ad032e62c69b3ea59d765c4dfadba73291414&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CPLB5V%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIB0H4j8mgqVUn2tsT%2FG9AhpeGNcPPwinfdhYKmepEwLmAiEAhiEKuOsKrlDzxMbtzS7vGn5VAIvgLzvA5CI%2Bsu%2Bb1K0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHK9NecwBy8yBlLr8SrcA6%2B44vcsg0aagX4iNwkGpCK2lXTlccA%2B7LGXlo0QZGuWDP9BAcXrY1bMjZqDbwZ1qcU1GP6%2BbmKSQaYU%2F97Tgvt4QgrHNFwySsrNotPxsp1rWR0Bhlu8P%2FkBJgn%2BIggAfMgFpNpB1bR7%2Brn0nPZ0GHsrEtdEig70YyHf7fS6D8N3vLNe219YCXuY9BMeRrc9r7yGhfTeTjp177lfsF3zuAgY0NwBnmdq1mt9m9izH%2BynFECpVyafeTzd%2BdSuIe8hW56ut6jg%2BOb8QRU3UgRq8cV5c6D4%2BdW5CvZUMk%2BMcwBTHvph3gLTBAt120xbDo6D3T0h47r2%2FYOWbFggQSKDxK6a8H5lXrjfZiEPopqOu9ApZtq3G6I%2FPMTyf4mqQ07ZfIcZDXc3fq2kMDd1f8Z5Y9eq7Druk1weujgwQdzHMkhm1v4hcWeyIS3DaswsU2w2T16Lkj5w%2B1XZlHWBBvKwA7y6jXeIANcLpxU6IJHYgUERo45rul%2ByKS5FpaGZDtaBK%2F0ZsdmWojwE2eG0WJfMa12lyT%2BHuZHhBZu78JCP1cNzHQPbpIUqZeMYOn3xVhgxbB9gtQL0MDdmL1PMtFXS6CK8TNt8xERxJpJHMeGhdo1%2FEGAQgbtLkkPAaD5dMMHxjL0GOqUBth3uM1K9iiEvB8kvm6%2FfAZD47t26wRL5YkgkgUVXOVrN5NDHY6Fhp%2FO0OuJLVVnvViwahjdNzvvUlfBRu0v7VkcZjVBhfizL6hJ0v9SA4KVMDEmf036Fl7bjY7u1mdW1yIP3ECqRC%2B9bfX5zFjjaVnMCAEcHNgSmXSDdiv7cxrjBIjikqzZggmk9R1UVor%2BqJ2kh3LJpLmkhoSETkjSyrM8QRZtH&X-Amz-Signature=f2de99b58cdf4c1b9aba893a8bff16cb143ab8945a43fed9a19b38d266cfdcfe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CPLB5V%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIB0H4j8mgqVUn2tsT%2FG9AhpeGNcPPwinfdhYKmepEwLmAiEAhiEKuOsKrlDzxMbtzS7vGn5VAIvgLzvA5CI%2Bsu%2Bb1K0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHK9NecwBy8yBlLr8SrcA6%2B44vcsg0aagX4iNwkGpCK2lXTlccA%2B7LGXlo0QZGuWDP9BAcXrY1bMjZqDbwZ1qcU1GP6%2BbmKSQaYU%2F97Tgvt4QgrHNFwySsrNotPxsp1rWR0Bhlu8P%2FkBJgn%2BIggAfMgFpNpB1bR7%2Brn0nPZ0GHsrEtdEig70YyHf7fS6D8N3vLNe219YCXuY9BMeRrc9r7yGhfTeTjp177lfsF3zuAgY0NwBnmdq1mt9m9izH%2BynFECpVyafeTzd%2BdSuIe8hW56ut6jg%2BOb8QRU3UgRq8cV5c6D4%2BdW5CvZUMk%2BMcwBTHvph3gLTBAt120xbDo6D3T0h47r2%2FYOWbFggQSKDxK6a8H5lXrjfZiEPopqOu9ApZtq3G6I%2FPMTyf4mqQ07ZfIcZDXc3fq2kMDd1f8Z5Y9eq7Druk1weujgwQdzHMkhm1v4hcWeyIS3DaswsU2w2T16Lkj5w%2B1XZlHWBBvKwA7y6jXeIANcLpxU6IJHYgUERo45rul%2ByKS5FpaGZDtaBK%2F0ZsdmWojwE2eG0WJfMa12lyT%2BHuZHhBZu78JCP1cNzHQPbpIUqZeMYOn3xVhgxbB9gtQL0MDdmL1PMtFXS6CK8TNt8xERxJpJHMeGhdo1%2FEGAQgbtLkkPAaD5dMMHxjL0GOqUBth3uM1K9iiEvB8kvm6%2FfAZD47t26wRL5YkgkgUVXOVrN5NDHY6Fhp%2FO0OuJLVVnvViwahjdNzvvUlfBRu0v7VkcZjVBhfizL6hJ0v9SA4KVMDEmf036Fl7bjY7u1mdW1yIP3ECqRC%2B9bfX5zFjjaVnMCAEcHNgSmXSDdiv7cxrjBIjikqzZggmk9R1UVor%2BqJ2kh3LJpLmkhoSETkjSyrM8QRZtH&X-Amz-Signature=ad308be5fcee6f6c389e1ff3307b78a7c9b13e364c256b9544579de4a3adc3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CPLB5V%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIB0H4j8mgqVUn2tsT%2FG9AhpeGNcPPwinfdhYKmepEwLmAiEAhiEKuOsKrlDzxMbtzS7vGn5VAIvgLzvA5CI%2Bsu%2Bb1K0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHK9NecwBy8yBlLr8SrcA6%2B44vcsg0aagX4iNwkGpCK2lXTlccA%2B7LGXlo0QZGuWDP9BAcXrY1bMjZqDbwZ1qcU1GP6%2BbmKSQaYU%2F97Tgvt4QgrHNFwySsrNotPxsp1rWR0Bhlu8P%2FkBJgn%2BIggAfMgFpNpB1bR7%2Brn0nPZ0GHsrEtdEig70YyHf7fS6D8N3vLNe219YCXuY9BMeRrc9r7yGhfTeTjp177lfsF3zuAgY0NwBnmdq1mt9m9izH%2BynFECpVyafeTzd%2BdSuIe8hW56ut6jg%2BOb8QRU3UgRq8cV5c6D4%2BdW5CvZUMk%2BMcwBTHvph3gLTBAt120xbDo6D3T0h47r2%2FYOWbFggQSKDxK6a8H5lXrjfZiEPopqOu9ApZtq3G6I%2FPMTyf4mqQ07ZfIcZDXc3fq2kMDd1f8Z5Y9eq7Druk1weujgwQdzHMkhm1v4hcWeyIS3DaswsU2w2T16Lkj5w%2B1XZlHWBBvKwA7y6jXeIANcLpxU6IJHYgUERo45rul%2ByKS5FpaGZDtaBK%2F0ZsdmWojwE2eG0WJfMa12lyT%2BHuZHhBZu78JCP1cNzHQPbpIUqZeMYOn3xVhgxbB9gtQL0MDdmL1PMtFXS6CK8TNt8xERxJpJHMeGhdo1%2FEGAQgbtLkkPAaD5dMMHxjL0GOqUBth3uM1K9iiEvB8kvm6%2FfAZD47t26wRL5YkgkgUVXOVrN5NDHY6Fhp%2FO0OuJLVVnvViwahjdNzvvUlfBRu0v7VkcZjVBhfizL6hJ0v9SA4KVMDEmf036Fl7bjY7u1mdW1yIP3ECqRC%2B9bfX5zFjjaVnMCAEcHNgSmXSDdiv7cxrjBIjikqzZggmk9R1UVor%2BqJ2kh3LJpLmkhoSETkjSyrM8QRZtH&X-Amz-Signature=2ea57cceaba6036adb72a9f3fc2e799a19532f8c4ae279a2bfdfa5affcad44da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CPLB5V%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIB0H4j8mgqVUn2tsT%2FG9AhpeGNcPPwinfdhYKmepEwLmAiEAhiEKuOsKrlDzxMbtzS7vGn5VAIvgLzvA5CI%2Bsu%2Bb1K0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHK9NecwBy8yBlLr8SrcA6%2B44vcsg0aagX4iNwkGpCK2lXTlccA%2B7LGXlo0QZGuWDP9BAcXrY1bMjZqDbwZ1qcU1GP6%2BbmKSQaYU%2F97Tgvt4QgrHNFwySsrNotPxsp1rWR0Bhlu8P%2FkBJgn%2BIggAfMgFpNpB1bR7%2Brn0nPZ0GHsrEtdEig70YyHf7fS6D8N3vLNe219YCXuY9BMeRrc9r7yGhfTeTjp177lfsF3zuAgY0NwBnmdq1mt9m9izH%2BynFECpVyafeTzd%2BdSuIe8hW56ut6jg%2BOb8QRU3UgRq8cV5c6D4%2BdW5CvZUMk%2BMcwBTHvph3gLTBAt120xbDo6D3T0h47r2%2FYOWbFggQSKDxK6a8H5lXrjfZiEPopqOu9ApZtq3G6I%2FPMTyf4mqQ07ZfIcZDXc3fq2kMDd1f8Z5Y9eq7Druk1weujgwQdzHMkhm1v4hcWeyIS3DaswsU2w2T16Lkj5w%2B1XZlHWBBvKwA7y6jXeIANcLpxU6IJHYgUERo45rul%2ByKS5FpaGZDtaBK%2F0ZsdmWojwE2eG0WJfMa12lyT%2BHuZHhBZu78JCP1cNzHQPbpIUqZeMYOn3xVhgxbB9gtQL0MDdmL1PMtFXS6CK8TNt8xERxJpJHMeGhdo1%2FEGAQgbtLkkPAaD5dMMHxjL0GOqUBth3uM1K9iiEvB8kvm6%2FfAZD47t26wRL5YkgkgUVXOVrN5NDHY6Fhp%2FO0OuJLVVnvViwahjdNzvvUlfBRu0v7VkcZjVBhfizL6hJ0v9SA4KVMDEmf036Fl7bjY7u1mdW1yIP3ECqRC%2B9bfX5zFjjaVnMCAEcHNgSmXSDdiv7cxrjBIjikqzZggmk9R1UVor%2BqJ2kh3LJpLmkhoSETkjSyrM8QRZtH&X-Amz-Signature=e673d78d43d9169e4dcb69a1c9fb1577aa96839dc965c64c5a93976606f0366e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
