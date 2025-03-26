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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYNYJTH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjpUSorwELHOngmOZDBdqp8j1UF1AZl5mdMb3p%2BzUspAiBukEW0UzQnWw8lloxniOTUAGbJkYfMf%2BTwFcQ6k8DFZCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMK29v1YUjnC%2FkmTF0KtwDkEUi3zqNlF7f26AEW%2FMfls9y6CMeHaprE%2BmS9hU6Gy3o2FcX9WMe3pmyHDrFGRn%2BVCou1JRgzV5eiDaL6jKO68mweTI0DVgMhLgpdrQDoHs0NAFD27pO%2B2QsiR0A%2B27HzoT1ggL9WIhmA7ZwGV%2FK17pJGYRoUJ6e6IBzR9Or3lZmXNg2hIUx3qoTgU%2BsT6syFCArDizK29NycVlE%2BT%2BoLlTVBNqFGhOWbIEAIPeRe7ICR8JUmeM2yXKJyGnGZKDLvxeO5APlXft%2BIIZIt1jaHqyz%2FhODYRGoiKsJedIJs0jllu9cc%2FnzswZYKNiFM%2FRRiLfFbNJ1EJ2I2Xv2bbDvwEXsxJlGrss%2F4nwA3He9fhD%2BFABAoP2qYzxkqIC2PpvNma0eSyVeX2Cc2xnmBzdmaVezRteigtZJ7M37YTZc1swtL08TOk8LiWwVvJM4Dfa7tcV0vfQRFrEksLTtQWVFx8hcHhFDVGrPVtwwfXIkJ%2F3zX%2Bd0jU2Hf2zWHUklDEtfiPytp50Wg%2BiVQrA2yXM%2FPwhYXzntxEh0%2FX1zBKLl0PikL6dcmc6T4QDw77gu0PzhBrgPKykmmnJEdbJ7F%2BMocYYMuw0MrWqRiP82Wz034aLPuYBltvqqcJ91Dw4w49qPvwY6pgFo98oSOvfWwoKdyv%2F1FnrJ%2Bqn5ONNxHxRj%2B8jKZhQqKbyeERmaI3xL%2Fo0iXEA6dlerueBq9uZoAyt3%2B2Rmooz166EyH2JvmtNmQ%2BDWR7DToDqgUke9KDVh7k8%2BGP8VINhTPeSKHYl%2FWiBIQ1IWVr%2BCRC3BEgpjL5QsdreDjpFahvP11LS9of1iXgPkf7BIHNhyHQC%2BpuZXOlyx%2FHJ163gw7qEzSKtf&X-Amz-Signature=60a17339eac81738704df14d84522eb0da9c82a51afc99288bea2b12f907ec9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYNYJTH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjpUSorwELHOngmOZDBdqp8j1UF1AZl5mdMb3p%2BzUspAiBukEW0UzQnWw8lloxniOTUAGbJkYfMf%2BTwFcQ6k8DFZCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMK29v1YUjnC%2FkmTF0KtwDkEUi3zqNlF7f26AEW%2FMfls9y6CMeHaprE%2BmS9hU6Gy3o2FcX9WMe3pmyHDrFGRn%2BVCou1JRgzV5eiDaL6jKO68mweTI0DVgMhLgpdrQDoHs0NAFD27pO%2B2QsiR0A%2B27HzoT1ggL9WIhmA7ZwGV%2FK17pJGYRoUJ6e6IBzR9Or3lZmXNg2hIUx3qoTgU%2BsT6syFCArDizK29NycVlE%2BT%2BoLlTVBNqFGhOWbIEAIPeRe7ICR8JUmeM2yXKJyGnGZKDLvxeO5APlXft%2BIIZIt1jaHqyz%2FhODYRGoiKsJedIJs0jllu9cc%2FnzswZYKNiFM%2FRRiLfFbNJ1EJ2I2Xv2bbDvwEXsxJlGrss%2F4nwA3He9fhD%2BFABAoP2qYzxkqIC2PpvNma0eSyVeX2Cc2xnmBzdmaVezRteigtZJ7M37YTZc1swtL08TOk8LiWwVvJM4Dfa7tcV0vfQRFrEksLTtQWVFx8hcHhFDVGrPVtwwfXIkJ%2F3zX%2Bd0jU2Hf2zWHUklDEtfiPytp50Wg%2BiVQrA2yXM%2FPwhYXzntxEh0%2FX1zBKLl0PikL6dcmc6T4QDw77gu0PzhBrgPKykmmnJEdbJ7F%2BMocYYMuw0MrWqRiP82Wz034aLPuYBltvqqcJ91Dw4w49qPvwY6pgFo98oSOvfWwoKdyv%2F1FnrJ%2Bqn5ONNxHxRj%2B8jKZhQqKbyeERmaI3xL%2Fo0iXEA6dlerueBq9uZoAyt3%2B2Rmooz166EyH2JvmtNmQ%2BDWR7DToDqgUke9KDVh7k8%2BGP8VINhTPeSKHYl%2FWiBIQ1IWVr%2BCRC3BEgpjL5QsdreDjpFahvP11LS9of1iXgPkf7BIHNhyHQC%2BpuZXOlyx%2FHJ163gw7qEzSKtf&X-Amz-Signature=8fe4b9c6712360f26a1552ce4d8645bf291a3148a3e4eca0e495fd1c95c7f300&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYNYJTH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjpUSorwELHOngmOZDBdqp8j1UF1AZl5mdMb3p%2BzUspAiBukEW0UzQnWw8lloxniOTUAGbJkYfMf%2BTwFcQ6k8DFZCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMK29v1YUjnC%2FkmTF0KtwDkEUi3zqNlF7f26AEW%2FMfls9y6CMeHaprE%2BmS9hU6Gy3o2FcX9WMe3pmyHDrFGRn%2BVCou1JRgzV5eiDaL6jKO68mweTI0DVgMhLgpdrQDoHs0NAFD27pO%2B2QsiR0A%2B27HzoT1ggL9WIhmA7ZwGV%2FK17pJGYRoUJ6e6IBzR9Or3lZmXNg2hIUx3qoTgU%2BsT6syFCArDizK29NycVlE%2BT%2BoLlTVBNqFGhOWbIEAIPeRe7ICR8JUmeM2yXKJyGnGZKDLvxeO5APlXft%2BIIZIt1jaHqyz%2FhODYRGoiKsJedIJs0jllu9cc%2FnzswZYKNiFM%2FRRiLfFbNJ1EJ2I2Xv2bbDvwEXsxJlGrss%2F4nwA3He9fhD%2BFABAoP2qYzxkqIC2PpvNma0eSyVeX2Cc2xnmBzdmaVezRteigtZJ7M37YTZc1swtL08TOk8LiWwVvJM4Dfa7tcV0vfQRFrEksLTtQWVFx8hcHhFDVGrPVtwwfXIkJ%2F3zX%2Bd0jU2Hf2zWHUklDEtfiPytp50Wg%2BiVQrA2yXM%2FPwhYXzntxEh0%2FX1zBKLl0PikL6dcmc6T4QDw77gu0PzhBrgPKykmmnJEdbJ7F%2BMocYYMuw0MrWqRiP82Wz034aLPuYBltvqqcJ91Dw4w49qPvwY6pgFo98oSOvfWwoKdyv%2F1FnrJ%2Bqn5ONNxHxRj%2B8jKZhQqKbyeERmaI3xL%2Fo0iXEA6dlerueBq9uZoAyt3%2B2Rmooz166EyH2JvmtNmQ%2BDWR7DToDqgUke9KDVh7k8%2BGP8VINhTPeSKHYl%2FWiBIQ1IWVr%2BCRC3BEgpjL5QsdreDjpFahvP11LS9of1iXgPkf7BIHNhyHQC%2BpuZXOlyx%2FHJ163gw7qEzSKtf&X-Amz-Signature=832e0603bf03859aa51bf18af470761d35cc1ee737631325baabd47f77bf4a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYNYJTH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjpUSorwELHOngmOZDBdqp8j1UF1AZl5mdMb3p%2BzUspAiBukEW0UzQnWw8lloxniOTUAGbJkYfMf%2BTwFcQ6k8DFZCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMK29v1YUjnC%2FkmTF0KtwDkEUi3zqNlF7f26AEW%2FMfls9y6CMeHaprE%2BmS9hU6Gy3o2FcX9WMe3pmyHDrFGRn%2BVCou1JRgzV5eiDaL6jKO68mweTI0DVgMhLgpdrQDoHs0NAFD27pO%2B2QsiR0A%2B27HzoT1ggL9WIhmA7ZwGV%2FK17pJGYRoUJ6e6IBzR9Or3lZmXNg2hIUx3qoTgU%2BsT6syFCArDizK29NycVlE%2BT%2BoLlTVBNqFGhOWbIEAIPeRe7ICR8JUmeM2yXKJyGnGZKDLvxeO5APlXft%2BIIZIt1jaHqyz%2FhODYRGoiKsJedIJs0jllu9cc%2FnzswZYKNiFM%2FRRiLfFbNJ1EJ2I2Xv2bbDvwEXsxJlGrss%2F4nwA3He9fhD%2BFABAoP2qYzxkqIC2PpvNma0eSyVeX2Cc2xnmBzdmaVezRteigtZJ7M37YTZc1swtL08TOk8LiWwVvJM4Dfa7tcV0vfQRFrEksLTtQWVFx8hcHhFDVGrPVtwwfXIkJ%2F3zX%2Bd0jU2Hf2zWHUklDEtfiPytp50Wg%2BiVQrA2yXM%2FPwhYXzntxEh0%2FX1zBKLl0PikL6dcmc6T4QDw77gu0PzhBrgPKykmmnJEdbJ7F%2BMocYYMuw0MrWqRiP82Wz034aLPuYBltvqqcJ91Dw4w49qPvwY6pgFo98oSOvfWwoKdyv%2F1FnrJ%2Bqn5ONNxHxRj%2B8jKZhQqKbyeERmaI3xL%2Fo0iXEA6dlerueBq9uZoAyt3%2B2Rmooz166EyH2JvmtNmQ%2BDWR7DToDqgUke9KDVh7k8%2BGP8VINhTPeSKHYl%2FWiBIQ1IWVr%2BCRC3BEgpjL5QsdreDjpFahvP11LS9of1iXgPkf7BIHNhyHQC%2BpuZXOlyx%2FHJ163gw7qEzSKtf&X-Amz-Signature=c12b857b3ad7b28e6e39adec3a43012ca7d64cebadb938bc6e9e00510a42cfe2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYNYJTH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjpUSorwELHOngmOZDBdqp8j1UF1AZl5mdMb3p%2BzUspAiBukEW0UzQnWw8lloxniOTUAGbJkYfMf%2BTwFcQ6k8DFZCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMK29v1YUjnC%2FkmTF0KtwDkEUi3zqNlF7f26AEW%2FMfls9y6CMeHaprE%2BmS9hU6Gy3o2FcX9WMe3pmyHDrFGRn%2BVCou1JRgzV5eiDaL6jKO68mweTI0DVgMhLgpdrQDoHs0NAFD27pO%2B2QsiR0A%2B27HzoT1ggL9WIhmA7ZwGV%2FK17pJGYRoUJ6e6IBzR9Or3lZmXNg2hIUx3qoTgU%2BsT6syFCArDizK29NycVlE%2BT%2BoLlTVBNqFGhOWbIEAIPeRe7ICR8JUmeM2yXKJyGnGZKDLvxeO5APlXft%2BIIZIt1jaHqyz%2FhODYRGoiKsJedIJs0jllu9cc%2FnzswZYKNiFM%2FRRiLfFbNJ1EJ2I2Xv2bbDvwEXsxJlGrss%2F4nwA3He9fhD%2BFABAoP2qYzxkqIC2PpvNma0eSyVeX2Cc2xnmBzdmaVezRteigtZJ7M37YTZc1swtL08TOk8LiWwVvJM4Dfa7tcV0vfQRFrEksLTtQWVFx8hcHhFDVGrPVtwwfXIkJ%2F3zX%2Bd0jU2Hf2zWHUklDEtfiPytp50Wg%2BiVQrA2yXM%2FPwhYXzntxEh0%2FX1zBKLl0PikL6dcmc6T4QDw77gu0PzhBrgPKykmmnJEdbJ7F%2BMocYYMuw0MrWqRiP82Wz034aLPuYBltvqqcJ91Dw4w49qPvwY6pgFo98oSOvfWwoKdyv%2F1FnrJ%2Bqn5ONNxHxRj%2B8jKZhQqKbyeERmaI3xL%2Fo0iXEA6dlerueBq9uZoAyt3%2B2Rmooz166EyH2JvmtNmQ%2BDWR7DToDqgUke9KDVh7k8%2BGP8VINhTPeSKHYl%2FWiBIQ1IWVr%2BCRC3BEgpjL5QsdreDjpFahvP11LS9of1iXgPkf7BIHNhyHQC%2BpuZXOlyx%2FHJ163gw7qEzSKtf&X-Amz-Signature=0bef0fed7b4b8ae4f41ad80f1357d477af51867d6b0c6a1d51cb85a5b1c181e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
