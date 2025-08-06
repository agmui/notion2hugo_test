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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRGV6FC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBRdUHbeL3VV%2FJJypnjNtFb1OC6dEyXUiEH9J%2FZLtudtAiAt%2Ba7JFfLtdoMMFELqMHknpHuow4TgpkdD9lwcmRVxBSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZEzFOn%2FhqiI9%2FyFKtwDe33jLyb8Z1y4s7lzIxXu0aOyNBFabkG5D0GUeilht6wUI4X95Sz%2Beih4wzhc6D08eIkSy3Vpr3NQadRETWMTYXoJkPvQC8qUk6EuwuTvhFCUyaRh3rrsCwNde9BDqOjvPEESzzZ5RhI4NyIbgvIQ32W5ScRU7FnVPREb%2BkzqQ%2FQ%2BCaz8SRLU4QQJyyR79kgd1g9ayTLxWFO3nj116IpsUVnnOlVYwfbJk8R86HHFpwe7MCdPIhILICWKXkrogIzr6Ywf7%2BeuRQqO%2Bpy2MxM2IeMK%2BcTNl9RJrs1YpxyFkJGdaJewdUxioP70tdwVfie3ALnlF3zbav6rfRW2a5OMnNkoWzzFwtVsi2KXIqbFp%2FiaJYMjMKs69mVFxUgTPzLhPnalAUnLu3lVsPA84VUi2jGH0H86FTRqNBBe4eBrqg9BJ%2FLaCTCi%2FyDV6H5%2BmJXS7sHZt9xVorDCKKstolQmY477H2VrdShn91DwVb6c%2FhXZ3i6xdvdq3pzWxcpYaj2ihMQcDKksKLTH4w4NY5L8y4TMcM0Ki2SDf6Txcmz9WAizaHA56reADIx%2B9ov62sFtYlSOQL3nKHvcbQiFs%2FcdAITzQ0LtyyT%2BUvD5dTd9HUNNDmhgoXpdlZZXCTYwoLPPxAY6pgFkPpperBDr%2B6w7SevAdTatVkwTjViqccMQC3LZ2bqWZzACwsGWbvLI2afAEWfv2knG2Jajyr8wJGUpvVjaLlYlVmKpCrvX8vJGLMNniVkZ3KRI9c2kGeuX9hF5%2BwTsa%2FkVkxY2Plvqq5yrbGyVR5Rx678A909lCHpLzAD4Adzu%2B7b%2F1efasTemOR%2B%2BL23DHkGJx964P6hhs3eHwXAjocgU0v4MJVJm&X-Amz-Signature=a375f3de9c226f7222d1c1e3e2fa1cfcf2154b38b4fa4bd0130d55885e3d6767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRGV6FC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBRdUHbeL3VV%2FJJypnjNtFb1OC6dEyXUiEH9J%2FZLtudtAiAt%2Ba7JFfLtdoMMFELqMHknpHuow4TgpkdD9lwcmRVxBSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZEzFOn%2FhqiI9%2FyFKtwDe33jLyb8Z1y4s7lzIxXu0aOyNBFabkG5D0GUeilht6wUI4X95Sz%2Beih4wzhc6D08eIkSy3Vpr3NQadRETWMTYXoJkPvQC8qUk6EuwuTvhFCUyaRh3rrsCwNde9BDqOjvPEESzzZ5RhI4NyIbgvIQ32W5ScRU7FnVPREb%2BkzqQ%2FQ%2BCaz8SRLU4QQJyyR79kgd1g9ayTLxWFO3nj116IpsUVnnOlVYwfbJk8R86HHFpwe7MCdPIhILICWKXkrogIzr6Ywf7%2BeuRQqO%2Bpy2MxM2IeMK%2BcTNl9RJrs1YpxyFkJGdaJewdUxioP70tdwVfie3ALnlF3zbav6rfRW2a5OMnNkoWzzFwtVsi2KXIqbFp%2FiaJYMjMKs69mVFxUgTPzLhPnalAUnLu3lVsPA84VUi2jGH0H86FTRqNBBe4eBrqg9BJ%2FLaCTCi%2FyDV6H5%2BmJXS7sHZt9xVorDCKKstolQmY477H2VrdShn91DwVb6c%2FhXZ3i6xdvdq3pzWxcpYaj2ihMQcDKksKLTH4w4NY5L8y4TMcM0Ki2SDf6Txcmz9WAizaHA56reADIx%2B9ov62sFtYlSOQL3nKHvcbQiFs%2FcdAITzQ0LtyyT%2BUvD5dTd9HUNNDmhgoXpdlZZXCTYwoLPPxAY6pgFkPpperBDr%2B6w7SevAdTatVkwTjViqccMQC3LZ2bqWZzACwsGWbvLI2afAEWfv2knG2Jajyr8wJGUpvVjaLlYlVmKpCrvX8vJGLMNniVkZ3KRI9c2kGeuX9hF5%2BwTsa%2FkVkxY2Plvqq5yrbGyVR5Rx678A909lCHpLzAD4Adzu%2B7b%2F1efasTemOR%2B%2BL23DHkGJx964P6hhs3eHwXAjocgU0v4MJVJm&X-Amz-Signature=8409b58cc77edd878a2d8c9ce12c4eb1f1d628970c42a73827917c9dd1ec88a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRGV6FC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBRdUHbeL3VV%2FJJypnjNtFb1OC6dEyXUiEH9J%2FZLtudtAiAt%2Ba7JFfLtdoMMFELqMHknpHuow4TgpkdD9lwcmRVxBSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZEzFOn%2FhqiI9%2FyFKtwDe33jLyb8Z1y4s7lzIxXu0aOyNBFabkG5D0GUeilht6wUI4X95Sz%2Beih4wzhc6D08eIkSy3Vpr3NQadRETWMTYXoJkPvQC8qUk6EuwuTvhFCUyaRh3rrsCwNde9BDqOjvPEESzzZ5RhI4NyIbgvIQ32W5ScRU7FnVPREb%2BkzqQ%2FQ%2BCaz8SRLU4QQJyyR79kgd1g9ayTLxWFO3nj116IpsUVnnOlVYwfbJk8R86HHFpwe7MCdPIhILICWKXkrogIzr6Ywf7%2BeuRQqO%2Bpy2MxM2IeMK%2BcTNl9RJrs1YpxyFkJGdaJewdUxioP70tdwVfie3ALnlF3zbav6rfRW2a5OMnNkoWzzFwtVsi2KXIqbFp%2FiaJYMjMKs69mVFxUgTPzLhPnalAUnLu3lVsPA84VUi2jGH0H86FTRqNBBe4eBrqg9BJ%2FLaCTCi%2FyDV6H5%2BmJXS7sHZt9xVorDCKKstolQmY477H2VrdShn91DwVb6c%2FhXZ3i6xdvdq3pzWxcpYaj2ihMQcDKksKLTH4w4NY5L8y4TMcM0Ki2SDf6Txcmz9WAizaHA56reADIx%2B9ov62sFtYlSOQL3nKHvcbQiFs%2FcdAITzQ0LtyyT%2BUvD5dTd9HUNNDmhgoXpdlZZXCTYwoLPPxAY6pgFkPpperBDr%2B6w7SevAdTatVkwTjViqccMQC3LZ2bqWZzACwsGWbvLI2afAEWfv2knG2Jajyr8wJGUpvVjaLlYlVmKpCrvX8vJGLMNniVkZ3KRI9c2kGeuX9hF5%2BwTsa%2FkVkxY2Plvqq5yrbGyVR5Rx678A909lCHpLzAD4Adzu%2B7b%2F1efasTemOR%2B%2BL23DHkGJx964P6hhs3eHwXAjocgU0v4MJVJm&X-Amz-Signature=fefc180536862a3d381c12a7ddfbab5606134ec7bd33f2cea9c43e4b120c81ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRGV6FC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBRdUHbeL3VV%2FJJypnjNtFb1OC6dEyXUiEH9J%2FZLtudtAiAt%2Ba7JFfLtdoMMFELqMHknpHuow4TgpkdD9lwcmRVxBSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZEzFOn%2FhqiI9%2FyFKtwDe33jLyb8Z1y4s7lzIxXu0aOyNBFabkG5D0GUeilht6wUI4X95Sz%2Beih4wzhc6D08eIkSy3Vpr3NQadRETWMTYXoJkPvQC8qUk6EuwuTvhFCUyaRh3rrsCwNde9BDqOjvPEESzzZ5RhI4NyIbgvIQ32W5ScRU7FnVPREb%2BkzqQ%2FQ%2BCaz8SRLU4QQJyyR79kgd1g9ayTLxWFO3nj116IpsUVnnOlVYwfbJk8R86HHFpwe7MCdPIhILICWKXkrogIzr6Ywf7%2BeuRQqO%2Bpy2MxM2IeMK%2BcTNl9RJrs1YpxyFkJGdaJewdUxioP70tdwVfie3ALnlF3zbav6rfRW2a5OMnNkoWzzFwtVsi2KXIqbFp%2FiaJYMjMKs69mVFxUgTPzLhPnalAUnLu3lVsPA84VUi2jGH0H86FTRqNBBe4eBrqg9BJ%2FLaCTCi%2FyDV6H5%2BmJXS7sHZt9xVorDCKKstolQmY477H2VrdShn91DwVb6c%2FhXZ3i6xdvdq3pzWxcpYaj2ihMQcDKksKLTH4w4NY5L8y4TMcM0Ki2SDf6Txcmz9WAizaHA56reADIx%2B9ov62sFtYlSOQL3nKHvcbQiFs%2FcdAITzQ0LtyyT%2BUvD5dTd9HUNNDmhgoXpdlZZXCTYwoLPPxAY6pgFkPpperBDr%2B6w7SevAdTatVkwTjViqccMQC3LZ2bqWZzACwsGWbvLI2afAEWfv2knG2Jajyr8wJGUpvVjaLlYlVmKpCrvX8vJGLMNniVkZ3KRI9c2kGeuX9hF5%2BwTsa%2FkVkxY2Plvqq5yrbGyVR5Rx678A909lCHpLzAD4Adzu%2B7b%2F1efasTemOR%2B%2BL23DHkGJx964P6hhs3eHwXAjocgU0v4MJVJm&X-Amz-Signature=ed0927a92976d59a6541222d78d03f0b41cd4560755649edbf55b23786191d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRGV6FC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBRdUHbeL3VV%2FJJypnjNtFb1OC6dEyXUiEH9J%2FZLtudtAiAt%2Ba7JFfLtdoMMFELqMHknpHuow4TgpkdD9lwcmRVxBSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZEzFOn%2FhqiI9%2FyFKtwDe33jLyb8Z1y4s7lzIxXu0aOyNBFabkG5D0GUeilht6wUI4X95Sz%2Beih4wzhc6D08eIkSy3Vpr3NQadRETWMTYXoJkPvQC8qUk6EuwuTvhFCUyaRh3rrsCwNde9BDqOjvPEESzzZ5RhI4NyIbgvIQ32W5ScRU7FnVPREb%2BkzqQ%2FQ%2BCaz8SRLU4QQJyyR79kgd1g9ayTLxWFO3nj116IpsUVnnOlVYwfbJk8R86HHFpwe7MCdPIhILICWKXkrogIzr6Ywf7%2BeuRQqO%2Bpy2MxM2IeMK%2BcTNl9RJrs1YpxyFkJGdaJewdUxioP70tdwVfie3ALnlF3zbav6rfRW2a5OMnNkoWzzFwtVsi2KXIqbFp%2FiaJYMjMKs69mVFxUgTPzLhPnalAUnLu3lVsPA84VUi2jGH0H86FTRqNBBe4eBrqg9BJ%2FLaCTCi%2FyDV6H5%2BmJXS7sHZt9xVorDCKKstolQmY477H2VrdShn91DwVb6c%2FhXZ3i6xdvdq3pzWxcpYaj2ihMQcDKksKLTH4w4NY5L8y4TMcM0Ki2SDf6Txcmz9WAizaHA56reADIx%2B9ov62sFtYlSOQL3nKHvcbQiFs%2FcdAITzQ0LtyyT%2BUvD5dTd9HUNNDmhgoXpdlZZXCTYwoLPPxAY6pgFkPpperBDr%2B6w7SevAdTatVkwTjViqccMQC3LZ2bqWZzACwsGWbvLI2afAEWfv2knG2Jajyr8wJGUpvVjaLlYlVmKpCrvX8vJGLMNniVkZ3KRI9c2kGeuX9hF5%2BwTsa%2FkVkxY2Plvqq5yrbGyVR5Rx678A909lCHpLzAD4Adzu%2B7b%2F1efasTemOR%2B%2BL23DHkGJx964P6hhs3eHwXAjocgU0v4MJVJm&X-Amz-Signature=79620bba537bcf924207446a4b13129a1e7acace257f231d8e0cc19a40512c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
