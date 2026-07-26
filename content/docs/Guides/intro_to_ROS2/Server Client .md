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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBDGZPT%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDl1FxntdDp8eg39vh34CZ1iTjLUumb6cpd6SezeGDBaAiB6gdxoCZCxId8g0%2F7SfyQO5kumlI%2BLMK%2BG47wBRa7WlCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMT%2Bl6xq45xPopbxVEKtwDn3tqTwFo0GQUnUNkpIaOiFhnoMVcejcSJgErBIlkee1A6OJVNFj8wRZse3ptroYj9Zerdw66%2B5OmopJrgwavWdw6FApe77i7fykXjiQ7lfKmIU7JAUFnNifXawYYRj%2FX%2FPJHACnCKbheTCOo06NPXlbtg664n%2BSgHG%2F7DSKIkd2QSgp4u%2BfeUqEdpDztnVJKW13vS%2B40reCSRVQN6Z2sd%2BzBvggXpcMxIqAigVH6iq0Z%2BG9h1c1C2SC1FWwtFD1tBDbz52ziIIi1lj1%2B7ssLYZ%2FhKh%2BLGXHUGoFz0jbuOx3RDIaiBb2oM43RthUyGDRRzQ7EzKh%2BfwCRaFwZGX1FRx6FfyU6hnpAlhIN61PnSKNZUasAV9jZKcqYf83w5bQvleAODHhNYsGAj2JTzCGTsMDbmLwPVPAoMihv14vKRLtAjAL1x2KHEnyGDMUtRURFyoS54kSxL6HdFNLsYTeR4u2dcGclOJaRp%2B16Y8kT9JZBhEiVu1kj0wxqjryJEfalvuGGNIvl6sBkT%2BYCkfrVZBO7BW21LEM%2BRtWarZ4vPX%2B7uzYXNFvnHaFJyA5vPVWBUzhlOEszz7TfQp27LkNBtJO09KwFT%2BLI6Ff3LFMbCT%2Bb7%2F1kYvkYpgoIQkEwuueV0wY6pgFUT%2BrCMbv3FwqZbJpz%2BsrhlydTTrX3R0im1QWWxegZTe9WBLqCcmEF7Zv%2FbCwdvsRLKmsSQPe27nKFIsjdQhFKNXKn%2FdkqJYTecLjlp4Nt8q5bfPS9KLrNWgZ0ORFwhodUJOuySkrcJnfshKmPBVDgYuKtEbOywqdVkLZsSWbkFIq8a%2B5MuVsmz%2BgL7zCFoEcw%2FouqGnMmbENaqbiKNy44c6Uk0glx&X-Amz-Signature=c5efee3667fc58a3da085790c7e35c1a6667664faf356d9f6da55a24dbaac0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBDGZPT%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDl1FxntdDp8eg39vh34CZ1iTjLUumb6cpd6SezeGDBaAiB6gdxoCZCxId8g0%2F7SfyQO5kumlI%2BLMK%2BG47wBRa7WlCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMT%2Bl6xq45xPopbxVEKtwDn3tqTwFo0GQUnUNkpIaOiFhnoMVcejcSJgErBIlkee1A6OJVNFj8wRZse3ptroYj9Zerdw66%2B5OmopJrgwavWdw6FApe77i7fykXjiQ7lfKmIU7JAUFnNifXawYYRj%2FX%2FPJHACnCKbheTCOo06NPXlbtg664n%2BSgHG%2F7DSKIkd2QSgp4u%2BfeUqEdpDztnVJKW13vS%2B40reCSRVQN6Z2sd%2BzBvggXpcMxIqAigVH6iq0Z%2BG9h1c1C2SC1FWwtFD1tBDbz52ziIIi1lj1%2B7ssLYZ%2FhKh%2BLGXHUGoFz0jbuOx3RDIaiBb2oM43RthUyGDRRzQ7EzKh%2BfwCRaFwZGX1FRx6FfyU6hnpAlhIN61PnSKNZUasAV9jZKcqYf83w5bQvleAODHhNYsGAj2JTzCGTsMDbmLwPVPAoMihv14vKRLtAjAL1x2KHEnyGDMUtRURFyoS54kSxL6HdFNLsYTeR4u2dcGclOJaRp%2B16Y8kT9JZBhEiVu1kj0wxqjryJEfalvuGGNIvl6sBkT%2BYCkfrVZBO7BW21LEM%2BRtWarZ4vPX%2B7uzYXNFvnHaFJyA5vPVWBUzhlOEszz7TfQp27LkNBtJO09KwFT%2BLI6Ff3LFMbCT%2Bb7%2F1kYvkYpgoIQkEwuueV0wY6pgFUT%2BrCMbv3FwqZbJpz%2BsrhlydTTrX3R0im1QWWxegZTe9WBLqCcmEF7Zv%2FbCwdvsRLKmsSQPe27nKFIsjdQhFKNXKn%2FdkqJYTecLjlp4Nt8q5bfPS9KLrNWgZ0ORFwhodUJOuySkrcJnfshKmPBVDgYuKtEbOywqdVkLZsSWbkFIq8a%2B5MuVsmz%2BgL7zCFoEcw%2FouqGnMmbENaqbiKNy44c6Uk0glx&X-Amz-Signature=6d4fa5fa338e7c0c9b9727c74d9995c0491c1fe91c48e369c1281b6e707a5e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBDGZPT%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDl1FxntdDp8eg39vh34CZ1iTjLUumb6cpd6SezeGDBaAiB6gdxoCZCxId8g0%2F7SfyQO5kumlI%2BLMK%2BG47wBRa7WlCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMT%2Bl6xq45xPopbxVEKtwDn3tqTwFo0GQUnUNkpIaOiFhnoMVcejcSJgErBIlkee1A6OJVNFj8wRZse3ptroYj9Zerdw66%2B5OmopJrgwavWdw6FApe77i7fykXjiQ7lfKmIU7JAUFnNifXawYYRj%2FX%2FPJHACnCKbheTCOo06NPXlbtg664n%2BSgHG%2F7DSKIkd2QSgp4u%2BfeUqEdpDztnVJKW13vS%2B40reCSRVQN6Z2sd%2BzBvggXpcMxIqAigVH6iq0Z%2BG9h1c1C2SC1FWwtFD1tBDbz52ziIIi1lj1%2B7ssLYZ%2FhKh%2BLGXHUGoFz0jbuOx3RDIaiBb2oM43RthUyGDRRzQ7EzKh%2BfwCRaFwZGX1FRx6FfyU6hnpAlhIN61PnSKNZUasAV9jZKcqYf83w5bQvleAODHhNYsGAj2JTzCGTsMDbmLwPVPAoMihv14vKRLtAjAL1x2KHEnyGDMUtRURFyoS54kSxL6HdFNLsYTeR4u2dcGclOJaRp%2B16Y8kT9JZBhEiVu1kj0wxqjryJEfalvuGGNIvl6sBkT%2BYCkfrVZBO7BW21LEM%2BRtWarZ4vPX%2B7uzYXNFvnHaFJyA5vPVWBUzhlOEszz7TfQp27LkNBtJO09KwFT%2BLI6Ff3LFMbCT%2Bb7%2F1kYvkYpgoIQkEwuueV0wY6pgFUT%2BrCMbv3FwqZbJpz%2BsrhlydTTrX3R0im1QWWxegZTe9WBLqCcmEF7Zv%2FbCwdvsRLKmsSQPe27nKFIsjdQhFKNXKn%2FdkqJYTecLjlp4Nt8q5bfPS9KLrNWgZ0ORFwhodUJOuySkrcJnfshKmPBVDgYuKtEbOywqdVkLZsSWbkFIq8a%2B5MuVsmz%2BgL7zCFoEcw%2FouqGnMmbENaqbiKNy44c6Uk0glx&X-Amz-Signature=5e019cebbeaab956c69719eda3606b4758dcd2eb68233f09db196a18abf90152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBDGZPT%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDl1FxntdDp8eg39vh34CZ1iTjLUumb6cpd6SezeGDBaAiB6gdxoCZCxId8g0%2F7SfyQO5kumlI%2BLMK%2BG47wBRa7WlCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMT%2Bl6xq45xPopbxVEKtwDn3tqTwFo0GQUnUNkpIaOiFhnoMVcejcSJgErBIlkee1A6OJVNFj8wRZse3ptroYj9Zerdw66%2B5OmopJrgwavWdw6FApe77i7fykXjiQ7lfKmIU7JAUFnNifXawYYRj%2FX%2FPJHACnCKbheTCOo06NPXlbtg664n%2BSgHG%2F7DSKIkd2QSgp4u%2BfeUqEdpDztnVJKW13vS%2B40reCSRVQN6Z2sd%2BzBvggXpcMxIqAigVH6iq0Z%2BG9h1c1C2SC1FWwtFD1tBDbz52ziIIi1lj1%2B7ssLYZ%2FhKh%2BLGXHUGoFz0jbuOx3RDIaiBb2oM43RthUyGDRRzQ7EzKh%2BfwCRaFwZGX1FRx6FfyU6hnpAlhIN61PnSKNZUasAV9jZKcqYf83w5bQvleAODHhNYsGAj2JTzCGTsMDbmLwPVPAoMihv14vKRLtAjAL1x2KHEnyGDMUtRURFyoS54kSxL6HdFNLsYTeR4u2dcGclOJaRp%2B16Y8kT9JZBhEiVu1kj0wxqjryJEfalvuGGNIvl6sBkT%2BYCkfrVZBO7BW21LEM%2BRtWarZ4vPX%2B7uzYXNFvnHaFJyA5vPVWBUzhlOEszz7TfQp27LkNBtJO09KwFT%2BLI6Ff3LFMbCT%2Bb7%2F1kYvkYpgoIQkEwuueV0wY6pgFUT%2BrCMbv3FwqZbJpz%2BsrhlydTTrX3R0im1QWWxegZTe9WBLqCcmEF7Zv%2FbCwdvsRLKmsSQPe27nKFIsjdQhFKNXKn%2FdkqJYTecLjlp4Nt8q5bfPS9KLrNWgZ0ORFwhodUJOuySkrcJnfshKmPBVDgYuKtEbOywqdVkLZsSWbkFIq8a%2B5MuVsmz%2BgL7zCFoEcw%2FouqGnMmbENaqbiKNy44c6Uk0glx&X-Amz-Signature=c5eb9d0292a5d39b6b7923b9b889a53b0e5d6052261b406f6f637a3930ba8c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBDGZPT%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDl1FxntdDp8eg39vh34CZ1iTjLUumb6cpd6SezeGDBaAiB6gdxoCZCxId8g0%2F7SfyQO5kumlI%2BLMK%2BG47wBRa7WlCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMT%2Bl6xq45xPopbxVEKtwDn3tqTwFo0GQUnUNkpIaOiFhnoMVcejcSJgErBIlkee1A6OJVNFj8wRZse3ptroYj9Zerdw66%2B5OmopJrgwavWdw6FApe77i7fykXjiQ7lfKmIU7JAUFnNifXawYYRj%2FX%2FPJHACnCKbheTCOo06NPXlbtg664n%2BSgHG%2F7DSKIkd2QSgp4u%2BfeUqEdpDztnVJKW13vS%2B40reCSRVQN6Z2sd%2BzBvggXpcMxIqAigVH6iq0Z%2BG9h1c1C2SC1FWwtFD1tBDbz52ziIIi1lj1%2B7ssLYZ%2FhKh%2BLGXHUGoFz0jbuOx3RDIaiBb2oM43RthUyGDRRzQ7EzKh%2BfwCRaFwZGX1FRx6FfyU6hnpAlhIN61PnSKNZUasAV9jZKcqYf83w5bQvleAODHhNYsGAj2JTzCGTsMDbmLwPVPAoMihv14vKRLtAjAL1x2KHEnyGDMUtRURFyoS54kSxL6HdFNLsYTeR4u2dcGclOJaRp%2B16Y8kT9JZBhEiVu1kj0wxqjryJEfalvuGGNIvl6sBkT%2BYCkfrVZBO7BW21LEM%2BRtWarZ4vPX%2B7uzYXNFvnHaFJyA5vPVWBUzhlOEszz7TfQp27LkNBtJO09KwFT%2BLI6Ff3LFMbCT%2Bb7%2F1kYvkYpgoIQkEwuueV0wY6pgFUT%2BrCMbv3FwqZbJpz%2BsrhlydTTrX3R0im1QWWxegZTe9WBLqCcmEF7Zv%2FbCwdvsRLKmsSQPe27nKFIsjdQhFKNXKn%2FdkqJYTecLjlp4Nt8q5bfPS9KLrNWgZ0ORFwhodUJOuySkrcJnfshKmPBVDgYuKtEbOywqdVkLZsSWbkFIq8a%2B5MuVsmz%2BgL7zCFoEcw%2FouqGnMmbENaqbiKNy44c6Uk0glx&X-Amz-Signature=da41ca8a37daac2cc96519a152faa85b3a400fa72299232c784301bd8193bfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
