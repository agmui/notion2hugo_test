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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEG5Q4%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAogoaQx7TjSMebl5k05hRVXf5pKtrUE6WThK6DvqBZiAiAIfuca5aFhf0OOCjyysfv%2BpcX4QZPVHVHr8DeHuh8i5yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjA6%2BVjFjiY4YZI3bKtwDEvaYgarWIQvl2apMxGZuVPpPA4WaVqcZivCPnSs6Dymnr9L9pEsgEcxcnIrQc2pdtab1LTgnvPPx7kGcihb836GB2oHq6jAo5tdNM6yrHNqF4a9ch2PbLWl%2BN5HDhiFcoPUxiQ1F9JXdnyLPvhzHquFVZlHpfLXK1fxwYs77uQkOd8l%2BX3bUY8CNPFu4CMbgQFjpzlM2EuhqDAKif75PFJog9Ri4w6%2F9qQTbyH4wQx9LgID3OwQCmHe4ERjt6H9IizEbvVSHcPFd%2FBYAvUByvPF8DQlnFaYw8Y7p7wi7wzEesR25O9krp4sGPvKV06o7Ac9bYyEkDL8PLPkS0bL7rA3barQkqckDpHS9ETrUoNMCbCFsalbQmTWcYAYGk8H4aDENv4wHmtaKSiD4cma0gX1rwHcb55ZRvIuLtQR46XXT%2B%2BkNzAM3RtdF13Zh5O3X4XobjOSTMdt2QleS1hpLleoAXXCZo%2Fv3zvcvnrKE3Mqc37HV4f2XpP3ydRefXkLydohYUftkbC1fd5ou0hCbRxZYxdi8oDrTJbkeioWZenIttGECHGWa9Tz87stXDlz3YDAbpD6sW8UV10h09B8KD%2BUXp09%2BISoHTJkB81gdXUFnDzPazMs7MUNUSD0wqfKvyAY6pgGCeL359ZnJ6w0xBkJOwjJnb9%2FR6qI97KPMwrgoAgMRkGhGhE0s%2FdYuhgy7CnHinKC4K8Du%2BY2autZ0%2By%2FMwg0SIdBrSAAPbXsGe%2Fqm9AA4jyS2RhTqyiL56DaFzV02zTJYvBu11tvZH0JP75gSIBbuOTsqXHc8PgR%2Bw7cSX2NhcEL2B0fGa6BN34q0LXPPTXDp8Arw7gTva3ub%2FdaQ02FYjCRFLDZr&X-Amz-Signature=9463484da0adead47c543aaa715e75fe4ae1ae35d941c142263198def01fb6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEG5Q4%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAogoaQx7TjSMebl5k05hRVXf5pKtrUE6WThK6DvqBZiAiAIfuca5aFhf0OOCjyysfv%2BpcX4QZPVHVHr8DeHuh8i5yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjA6%2BVjFjiY4YZI3bKtwDEvaYgarWIQvl2apMxGZuVPpPA4WaVqcZivCPnSs6Dymnr9L9pEsgEcxcnIrQc2pdtab1LTgnvPPx7kGcihb836GB2oHq6jAo5tdNM6yrHNqF4a9ch2PbLWl%2BN5HDhiFcoPUxiQ1F9JXdnyLPvhzHquFVZlHpfLXK1fxwYs77uQkOd8l%2BX3bUY8CNPFu4CMbgQFjpzlM2EuhqDAKif75PFJog9Ri4w6%2F9qQTbyH4wQx9LgID3OwQCmHe4ERjt6H9IizEbvVSHcPFd%2FBYAvUByvPF8DQlnFaYw8Y7p7wi7wzEesR25O9krp4sGPvKV06o7Ac9bYyEkDL8PLPkS0bL7rA3barQkqckDpHS9ETrUoNMCbCFsalbQmTWcYAYGk8H4aDENv4wHmtaKSiD4cma0gX1rwHcb55ZRvIuLtQR46XXT%2B%2BkNzAM3RtdF13Zh5O3X4XobjOSTMdt2QleS1hpLleoAXXCZo%2Fv3zvcvnrKE3Mqc37HV4f2XpP3ydRefXkLydohYUftkbC1fd5ou0hCbRxZYxdi8oDrTJbkeioWZenIttGECHGWa9Tz87stXDlz3YDAbpD6sW8UV10h09B8KD%2BUXp09%2BISoHTJkB81gdXUFnDzPazMs7MUNUSD0wqfKvyAY6pgGCeL359ZnJ6w0xBkJOwjJnb9%2FR6qI97KPMwrgoAgMRkGhGhE0s%2FdYuhgy7CnHinKC4K8Du%2BY2autZ0%2By%2FMwg0SIdBrSAAPbXsGe%2Fqm9AA4jyS2RhTqyiL56DaFzV02zTJYvBu11tvZH0JP75gSIBbuOTsqXHc8PgR%2Bw7cSX2NhcEL2B0fGa6BN34q0LXPPTXDp8Arw7gTva3ub%2FdaQ02FYjCRFLDZr&X-Amz-Signature=c1dddc58a20107400de0631b5dfcf5bbec2a823e6af70508f99fdb789b32ca0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEG5Q4%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAogoaQx7TjSMebl5k05hRVXf5pKtrUE6WThK6DvqBZiAiAIfuca5aFhf0OOCjyysfv%2BpcX4QZPVHVHr8DeHuh8i5yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjA6%2BVjFjiY4YZI3bKtwDEvaYgarWIQvl2apMxGZuVPpPA4WaVqcZivCPnSs6Dymnr9L9pEsgEcxcnIrQc2pdtab1LTgnvPPx7kGcihb836GB2oHq6jAo5tdNM6yrHNqF4a9ch2PbLWl%2BN5HDhiFcoPUxiQ1F9JXdnyLPvhzHquFVZlHpfLXK1fxwYs77uQkOd8l%2BX3bUY8CNPFu4CMbgQFjpzlM2EuhqDAKif75PFJog9Ri4w6%2F9qQTbyH4wQx9LgID3OwQCmHe4ERjt6H9IizEbvVSHcPFd%2FBYAvUByvPF8DQlnFaYw8Y7p7wi7wzEesR25O9krp4sGPvKV06o7Ac9bYyEkDL8PLPkS0bL7rA3barQkqckDpHS9ETrUoNMCbCFsalbQmTWcYAYGk8H4aDENv4wHmtaKSiD4cma0gX1rwHcb55ZRvIuLtQR46XXT%2B%2BkNzAM3RtdF13Zh5O3X4XobjOSTMdt2QleS1hpLleoAXXCZo%2Fv3zvcvnrKE3Mqc37HV4f2XpP3ydRefXkLydohYUftkbC1fd5ou0hCbRxZYxdi8oDrTJbkeioWZenIttGECHGWa9Tz87stXDlz3YDAbpD6sW8UV10h09B8KD%2BUXp09%2BISoHTJkB81gdXUFnDzPazMs7MUNUSD0wqfKvyAY6pgGCeL359ZnJ6w0xBkJOwjJnb9%2FR6qI97KPMwrgoAgMRkGhGhE0s%2FdYuhgy7CnHinKC4K8Du%2BY2autZ0%2By%2FMwg0SIdBrSAAPbXsGe%2Fqm9AA4jyS2RhTqyiL56DaFzV02zTJYvBu11tvZH0JP75gSIBbuOTsqXHc8PgR%2Bw7cSX2NhcEL2B0fGa6BN34q0LXPPTXDp8Arw7gTva3ub%2FdaQ02FYjCRFLDZr&X-Amz-Signature=59cdc9ae1837066b91e44eee7fd5f5a79660fe6c63aab4af20197415ceb0fd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEG5Q4%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAogoaQx7TjSMebl5k05hRVXf5pKtrUE6WThK6DvqBZiAiAIfuca5aFhf0OOCjyysfv%2BpcX4QZPVHVHr8DeHuh8i5yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjA6%2BVjFjiY4YZI3bKtwDEvaYgarWIQvl2apMxGZuVPpPA4WaVqcZivCPnSs6Dymnr9L9pEsgEcxcnIrQc2pdtab1LTgnvPPx7kGcihb836GB2oHq6jAo5tdNM6yrHNqF4a9ch2PbLWl%2BN5HDhiFcoPUxiQ1F9JXdnyLPvhzHquFVZlHpfLXK1fxwYs77uQkOd8l%2BX3bUY8CNPFu4CMbgQFjpzlM2EuhqDAKif75PFJog9Ri4w6%2F9qQTbyH4wQx9LgID3OwQCmHe4ERjt6H9IizEbvVSHcPFd%2FBYAvUByvPF8DQlnFaYw8Y7p7wi7wzEesR25O9krp4sGPvKV06o7Ac9bYyEkDL8PLPkS0bL7rA3barQkqckDpHS9ETrUoNMCbCFsalbQmTWcYAYGk8H4aDENv4wHmtaKSiD4cma0gX1rwHcb55ZRvIuLtQR46XXT%2B%2BkNzAM3RtdF13Zh5O3X4XobjOSTMdt2QleS1hpLleoAXXCZo%2Fv3zvcvnrKE3Mqc37HV4f2XpP3ydRefXkLydohYUftkbC1fd5ou0hCbRxZYxdi8oDrTJbkeioWZenIttGECHGWa9Tz87stXDlz3YDAbpD6sW8UV10h09B8KD%2BUXp09%2BISoHTJkB81gdXUFnDzPazMs7MUNUSD0wqfKvyAY6pgGCeL359ZnJ6w0xBkJOwjJnb9%2FR6qI97KPMwrgoAgMRkGhGhE0s%2FdYuhgy7CnHinKC4K8Du%2BY2autZ0%2By%2FMwg0SIdBrSAAPbXsGe%2Fqm9AA4jyS2RhTqyiL56DaFzV02zTJYvBu11tvZH0JP75gSIBbuOTsqXHc8PgR%2Bw7cSX2NhcEL2B0fGa6BN34q0LXPPTXDp8Arw7gTva3ub%2FdaQ02FYjCRFLDZr&X-Amz-Signature=36b7f037ec9270d38238f1ac7a3605a60de6fa9fa828ff0c4ce3a4d789b5cd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEG5Q4%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAogoaQx7TjSMebl5k05hRVXf5pKtrUE6WThK6DvqBZiAiAIfuca5aFhf0OOCjyysfv%2BpcX4QZPVHVHr8DeHuh8i5yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjA6%2BVjFjiY4YZI3bKtwDEvaYgarWIQvl2apMxGZuVPpPA4WaVqcZivCPnSs6Dymnr9L9pEsgEcxcnIrQc2pdtab1LTgnvPPx7kGcihb836GB2oHq6jAo5tdNM6yrHNqF4a9ch2PbLWl%2BN5HDhiFcoPUxiQ1F9JXdnyLPvhzHquFVZlHpfLXK1fxwYs77uQkOd8l%2BX3bUY8CNPFu4CMbgQFjpzlM2EuhqDAKif75PFJog9Ri4w6%2F9qQTbyH4wQx9LgID3OwQCmHe4ERjt6H9IizEbvVSHcPFd%2FBYAvUByvPF8DQlnFaYw8Y7p7wi7wzEesR25O9krp4sGPvKV06o7Ac9bYyEkDL8PLPkS0bL7rA3barQkqckDpHS9ETrUoNMCbCFsalbQmTWcYAYGk8H4aDENv4wHmtaKSiD4cma0gX1rwHcb55ZRvIuLtQR46XXT%2B%2BkNzAM3RtdF13Zh5O3X4XobjOSTMdt2QleS1hpLleoAXXCZo%2Fv3zvcvnrKE3Mqc37HV4f2XpP3ydRefXkLydohYUftkbC1fd5ou0hCbRxZYxdi8oDrTJbkeioWZenIttGECHGWa9Tz87stXDlz3YDAbpD6sW8UV10h09B8KD%2BUXp09%2BISoHTJkB81gdXUFnDzPazMs7MUNUSD0wqfKvyAY6pgGCeL359ZnJ6w0xBkJOwjJnb9%2FR6qI97KPMwrgoAgMRkGhGhE0s%2FdYuhgy7CnHinKC4K8Du%2BY2autZ0%2By%2FMwg0SIdBrSAAPbXsGe%2Fqm9AA4jyS2RhTqyiL56DaFzV02zTJYvBu11tvZH0JP75gSIBbuOTsqXHc8PgR%2Bw7cSX2NhcEL2B0fGa6BN34q0LXPPTXDp8Arw7gTva3ub%2FdaQ02FYjCRFLDZr&X-Amz-Signature=83bd0e45580798167bebcdb090abe3a93377eda613218d68bce54cd5fdfed081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
