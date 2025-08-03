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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KUJ5XW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1e35dyzww7ZFuJHhYSC1gecd3OrNE7r8rViARjUpLrgIgBrXisrwX%2FA6Kk%2FiXhK%2BcG0lvcBWVm4et3XujTG1OwAoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF7Uy%2FJn1IPd6tiZgyrcA%2B%2BnHsgejzg1%2BYfsQnYMAPv7AUCv0F1HegD%2FuAaoHgnES46qFSmQzr7FsmGlGJEoC3YyrBdZengMihaRyeI8eHGbfK96GIwqVBnp6mHwrvJfBt2OGIysetXVOExVDCOUmIV1luIo2j%2B%2FJ6tbebIBlji3xYXa%2BIVH4RHWAwZCwj7SMDOOg8ay8H8IWL1iMszoKwQeuYbHx7XHHzLxkhbKH1a72KQFGvaJsShuj%2Fb2UjhYrm37UQTl7OqFHWZwGbUIOvsUbwbuP93KMSmqdFPKGcE%2B5WYVT64oQ3NnUwTnvJApycfnzH48CiCPciIuXK573GJOMM5J7XG5yCNTBYRbxuP1xaj6mkSEwO8WtEWWF26APOGtvI%2FNNWsX%2Fhxlqy2izGx99vOCX7nN1PrQdftLGJH6r8dRS9XSDKoWBpIpB6g9vqnmEhJGhIZfpofpiqcXudTGpJ0EZSb6o8rKLHyrSd2W6X6WBcR3eGZ8%2FRjmxlwTFsNby%2FtSjq4cKpcaMJEC6aRCwxAmxqCvOaTC1q%2Ba69cp%2FFLxgr5N%2BUFfGeIO9xsD678Q8CIQQdscqHKf8O9VkqjdEw5kKIiRKTlUAVEaxHrA6kQidoozvcKMxguLCksBfIOFwuu%2BkIZ%2FEaujMKTSvcQGOqUBBs7Z8Pv6MGt%2By0vsAJ2ylc%2FBIdwLXWmk6t6x55oPy1eON4QueROxdbXATgjzLfvNLa4QgCCRVIzF7GNbViHAcglpYBKl5Ac9WkL02F5MFnRf3ahOT0n26Ia7ZqEcGAIlK449RpycPGeBhuu2smiVb4lTedFN4Mxm%2BTYuFP4JBIqaA3xLEAuhoPGRsv6OKoJ3ANW1ykRFik2%2FcIoV3bLGJTOfBLIS&X-Amz-Signature=9b575d9fb22c143627eb6e3790b3f3218b7023ed863c2e2340a250213b964101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KUJ5XW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1e35dyzww7ZFuJHhYSC1gecd3OrNE7r8rViARjUpLrgIgBrXisrwX%2FA6Kk%2FiXhK%2BcG0lvcBWVm4et3XujTG1OwAoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF7Uy%2FJn1IPd6tiZgyrcA%2B%2BnHsgejzg1%2BYfsQnYMAPv7AUCv0F1HegD%2FuAaoHgnES46qFSmQzr7FsmGlGJEoC3YyrBdZengMihaRyeI8eHGbfK96GIwqVBnp6mHwrvJfBt2OGIysetXVOExVDCOUmIV1luIo2j%2B%2FJ6tbebIBlji3xYXa%2BIVH4RHWAwZCwj7SMDOOg8ay8H8IWL1iMszoKwQeuYbHx7XHHzLxkhbKH1a72KQFGvaJsShuj%2Fb2UjhYrm37UQTl7OqFHWZwGbUIOvsUbwbuP93KMSmqdFPKGcE%2B5WYVT64oQ3NnUwTnvJApycfnzH48CiCPciIuXK573GJOMM5J7XG5yCNTBYRbxuP1xaj6mkSEwO8WtEWWF26APOGtvI%2FNNWsX%2Fhxlqy2izGx99vOCX7nN1PrQdftLGJH6r8dRS9XSDKoWBpIpB6g9vqnmEhJGhIZfpofpiqcXudTGpJ0EZSb6o8rKLHyrSd2W6X6WBcR3eGZ8%2FRjmxlwTFsNby%2FtSjq4cKpcaMJEC6aRCwxAmxqCvOaTC1q%2Ba69cp%2FFLxgr5N%2BUFfGeIO9xsD678Q8CIQQdscqHKf8O9VkqjdEw5kKIiRKTlUAVEaxHrA6kQidoozvcKMxguLCksBfIOFwuu%2BkIZ%2FEaujMKTSvcQGOqUBBs7Z8Pv6MGt%2By0vsAJ2ylc%2FBIdwLXWmk6t6x55oPy1eON4QueROxdbXATgjzLfvNLa4QgCCRVIzF7GNbViHAcglpYBKl5Ac9WkL02F5MFnRf3ahOT0n26Ia7ZqEcGAIlK449RpycPGeBhuu2smiVb4lTedFN4Mxm%2BTYuFP4JBIqaA3xLEAuhoPGRsv6OKoJ3ANW1ykRFik2%2FcIoV3bLGJTOfBLIS&X-Amz-Signature=5c0b56c54906f031cc270e939360bbd7915ca2fe15a753f7cdb309143a476a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KUJ5XW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1e35dyzww7ZFuJHhYSC1gecd3OrNE7r8rViARjUpLrgIgBrXisrwX%2FA6Kk%2FiXhK%2BcG0lvcBWVm4et3XujTG1OwAoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF7Uy%2FJn1IPd6tiZgyrcA%2B%2BnHsgejzg1%2BYfsQnYMAPv7AUCv0F1HegD%2FuAaoHgnES46qFSmQzr7FsmGlGJEoC3YyrBdZengMihaRyeI8eHGbfK96GIwqVBnp6mHwrvJfBt2OGIysetXVOExVDCOUmIV1luIo2j%2B%2FJ6tbebIBlji3xYXa%2BIVH4RHWAwZCwj7SMDOOg8ay8H8IWL1iMszoKwQeuYbHx7XHHzLxkhbKH1a72KQFGvaJsShuj%2Fb2UjhYrm37UQTl7OqFHWZwGbUIOvsUbwbuP93KMSmqdFPKGcE%2B5WYVT64oQ3NnUwTnvJApycfnzH48CiCPciIuXK573GJOMM5J7XG5yCNTBYRbxuP1xaj6mkSEwO8WtEWWF26APOGtvI%2FNNWsX%2Fhxlqy2izGx99vOCX7nN1PrQdftLGJH6r8dRS9XSDKoWBpIpB6g9vqnmEhJGhIZfpofpiqcXudTGpJ0EZSb6o8rKLHyrSd2W6X6WBcR3eGZ8%2FRjmxlwTFsNby%2FtSjq4cKpcaMJEC6aRCwxAmxqCvOaTC1q%2Ba69cp%2FFLxgr5N%2BUFfGeIO9xsD678Q8CIQQdscqHKf8O9VkqjdEw5kKIiRKTlUAVEaxHrA6kQidoozvcKMxguLCksBfIOFwuu%2BkIZ%2FEaujMKTSvcQGOqUBBs7Z8Pv6MGt%2By0vsAJ2ylc%2FBIdwLXWmk6t6x55oPy1eON4QueROxdbXATgjzLfvNLa4QgCCRVIzF7GNbViHAcglpYBKl5Ac9WkL02F5MFnRf3ahOT0n26Ia7ZqEcGAIlK449RpycPGeBhuu2smiVb4lTedFN4Mxm%2BTYuFP4JBIqaA3xLEAuhoPGRsv6OKoJ3ANW1ykRFik2%2FcIoV3bLGJTOfBLIS&X-Amz-Signature=4ab9b68e5b0dd732f73d95202ebeb14da1fe48b644e5351dc9f39d37765a05dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KUJ5XW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1e35dyzww7ZFuJHhYSC1gecd3OrNE7r8rViARjUpLrgIgBrXisrwX%2FA6Kk%2FiXhK%2BcG0lvcBWVm4et3XujTG1OwAoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF7Uy%2FJn1IPd6tiZgyrcA%2B%2BnHsgejzg1%2BYfsQnYMAPv7AUCv0F1HegD%2FuAaoHgnES46qFSmQzr7FsmGlGJEoC3YyrBdZengMihaRyeI8eHGbfK96GIwqVBnp6mHwrvJfBt2OGIysetXVOExVDCOUmIV1luIo2j%2B%2FJ6tbebIBlji3xYXa%2BIVH4RHWAwZCwj7SMDOOg8ay8H8IWL1iMszoKwQeuYbHx7XHHzLxkhbKH1a72KQFGvaJsShuj%2Fb2UjhYrm37UQTl7OqFHWZwGbUIOvsUbwbuP93KMSmqdFPKGcE%2B5WYVT64oQ3NnUwTnvJApycfnzH48CiCPciIuXK573GJOMM5J7XG5yCNTBYRbxuP1xaj6mkSEwO8WtEWWF26APOGtvI%2FNNWsX%2Fhxlqy2izGx99vOCX7nN1PrQdftLGJH6r8dRS9XSDKoWBpIpB6g9vqnmEhJGhIZfpofpiqcXudTGpJ0EZSb6o8rKLHyrSd2W6X6WBcR3eGZ8%2FRjmxlwTFsNby%2FtSjq4cKpcaMJEC6aRCwxAmxqCvOaTC1q%2Ba69cp%2FFLxgr5N%2BUFfGeIO9xsD678Q8CIQQdscqHKf8O9VkqjdEw5kKIiRKTlUAVEaxHrA6kQidoozvcKMxguLCksBfIOFwuu%2BkIZ%2FEaujMKTSvcQGOqUBBs7Z8Pv6MGt%2By0vsAJ2ylc%2FBIdwLXWmk6t6x55oPy1eON4QueROxdbXATgjzLfvNLa4QgCCRVIzF7GNbViHAcglpYBKl5Ac9WkL02F5MFnRf3ahOT0n26Ia7ZqEcGAIlK449RpycPGeBhuu2smiVb4lTedFN4Mxm%2BTYuFP4JBIqaA3xLEAuhoPGRsv6OKoJ3ANW1ykRFik2%2FcIoV3bLGJTOfBLIS&X-Amz-Signature=ee5247ae10c95e56a2e007ff59d0caaa9ab4410d3e0d21cca44c9828dbd41eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KUJ5XW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1e35dyzww7ZFuJHhYSC1gecd3OrNE7r8rViARjUpLrgIgBrXisrwX%2FA6Kk%2FiXhK%2BcG0lvcBWVm4et3XujTG1OwAoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF7Uy%2FJn1IPd6tiZgyrcA%2B%2BnHsgejzg1%2BYfsQnYMAPv7AUCv0F1HegD%2FuAaoHgnES46qFSmQzr7FsmGlGJEoC3YyrBdZengMihaRyeI8eHGbfK96GIwqVBnp6mHwrvJfBt2OGIysetXVOExVDCOUmIV1luIo2j%2B%2FJ6tbebIBlji3xYXa%2BIVH4RHWAwZCwj7SMDOOg8ay8H8IWL1iMszoKwQeuYbHx7XHHzLxkhbKH1a72KQFGvaJsShuj%2Fb2UjhYrm37UQTl7OqFHWZwGbUIOvsUbwbuP93KMSmqdFPKGcE%2B5WYVT64oQ3NnUwTnvJApycfnzH48CiCPciIuXK573GJOMM5J7XG5yCNTBYRbxuP1xaj6mkSEwO8WtEWWF26APOGtvI%2FNNWsX%2Fhxlqy2izGx99vOCX7nN1PrQdftLGJH6r8dRS9XSDKoWBpIpB6g9vqnmEhJGhIZfpofpiqcXudTGpJ0EZSb6o8rKLHyrSd2W6X6WBcR3eGZ8%2FRjmxlwTFsNby%2FtSjq4cKpcaMJEC6aRCwxAmxqCvOaTC1q%2Ba69cp%2FFLxgr5N%2BUFfGeIO9xsD678Q8CIQQdscqHKf8O9VkqjdEw5kKIiRKTlUAVEaxHrA6kQidoozvcKMxguLCksBfIOFwuu%2BkIZ%2FEaujMKTSvcQGOqUBBs7Z8Pv6MGt%2By0vsAJ2ylc%2FBIdwLXWmk6t6x55oPy1eON4QueROxdbXATgjzLfvNLa4QgCCRVIzF7GNbViHAcglpYBKl5Ac9WkL02F5MFnRf3ahOT0n26Ia7ZqEcGAIlK449RpycPGeBhuu2smiVb4lTedFN4Mxm%2BTYuFP4JBIqaA3xLEAuhoPGRsv6OKoJ3ANW1ykRFik2%2FcIoV3bLGJTOfBLIS&X-Amz-Signature=eade578b83671ffb395353f44ab72b560ecc1ec394e39ed559a712ec4c66000e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
