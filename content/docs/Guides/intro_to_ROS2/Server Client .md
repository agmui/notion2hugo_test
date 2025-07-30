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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAECBHT4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FP6fuDjvS6miKNT%2BjawiB6Z0c89y8TWuzHNNPnkX%2BDQIgRE1BxMUJRB3hHZNUI00qYr3PnPYmN5Gxzks7ba8iNlYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyV8bsNg8dFuKnIQyrcA9pZF7VkrjtNqVIz7aT%2BZGavWSYtDngIUqjndooMCyzjK7%2Be9gJifGzPzeXjQiEQzTXcBEbgkwUtoUutR77t%2B%2F4eLmPjMuCeUgeieUpfP7FybBHxtYljV0vngSQc2rlbAE9158zNejz3s3GIRHCWCMyTqdCV2PCQH%2BYLAh0eSeX%2FM%2BgMENcOKP0D7Djmk5hPXWXA7AFNT12t8KV7RijnbCs4OoRP918QwVnS8Gvs1Hj0WVYItEzYszKnpSmwnZoc4TqvA1c6EtsQ%2B9nOdEedj6nGrHMCviotKVPuL90B23D51HHolgAWOaaGcGcmNfHt93pCsJa34um27GVf8YhaHWtn3F0v45t5Q9TwUvXIfd3%2FbneKlQ0KmV6%2FnVpiBl7f93ZnIsxfwS%2Bt26nyDFa0epw1pZGcnQEt%2Bagx8Tr4WwEtHP7etsM%2FOlatcjxKYEqqgzCoqtG5d33Xq0kDaj8wRRHA3rh1odK4PXSdFRUgeXXDVG1DuDcJ3Nr8P4scc3ZGVBW4Y6N3oUrDo%2B1u%2FMRHBGtLsjzVtl8cLJThv8ssLAwhCn0UjAe1iYzaAhPAp%2Bw368tq790dHWyX%2FmC3KSmDvFgkPC6OilZ1uU3UoNChiDW850za54DEeRtwFZ54MK%2FypcQGOqUBpufgh00JN%2BgSa6CypPsPVQP21g7Zo28Wk1TDLbgEK8CYrqa0o6wqKFdZk9nqpAf1UkCRsbk%2B4%2Fh4LI8BPOlUeu%2Bc%2BH4xdgwpEJ4%2FnG1BBmFwyIGGMhUkyP2u3XzU3dW30XhXTh87I5enzHuOA3R6WxoBcwKRuk5Xe5kecqc6AaF%2FsQGTAcNnnpSZDAQR4WvzQslp9fn6XxFblyP39dq8gd8%2B9Nff&X-Amz-Signature=3d9f3afab6048b3c3db0e98e5f0ad3d8ef37cf42dca2da57b688cee9dc9aed6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAECBHT4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FP6fuDjvS6miKNT%2BjawiB6Z0c89y8TWuzHNNPnkX%2BDQIgRE1BxMUJRB3hHZNUI00qYr3PnPYmN5Gxzks7ba8iNlYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyV8bsNg8dFuKnIQyrcA9pZF7VkrjtNqVIz7aT%2BZGavWSYtDngIUqjndooMCyzjK7%2Be9gJifGzPzeXjQiEQzTXcBEbgkwUtoUutR77t%2B%2F4eLmPjMuCeUgeieUpfP7FybBHxtYljV0vngSQc2rlbAE9158zNejz3s3GIRHCWCMyTqdCV2PCQH%2BYLAh0eSeX%2FM%2BgMENcOKP0D7Djmk5hPXWXA7AFNT12t8KV7RijnbCs4OoRP918QwVnS8Gvs1Hj0WVYItEzYszKnpSmwnZoc4TqvA1c6EtsQ%2B9nOdEedj6nGrHMCviotKVPuL90B23D51HHolgAWOaaGcGcmNfHt93pCsJa34um27GVf8YhaHWtn3F0v45t5Q9TwUvXIfd3%2FbneKlQ0KmV6%2FnVpiBl7f93ZnIsxfwS%2Bt26nyDFa0epw1pZGcnQEt%2Bagx8Tr4WwEtHP7etsM%2FOlatcjxKYEqqgzCoqtG5d33Xq0kDaj8wRRHA3rh1odK4PXSdFRUgeXXDVG1DuDcJ3Nr8P4scc3ZGVBW4Y6N3oUrDo%2B1u%2FMRHBGtLsjzVtl8cLJThv8ssLAwhCn0UjAe1iYzaAhPAp%2Bw368tq790dHWyX%2FmC3KSmDvFgkPC6OilZ1uU3UoNChiDW850za54DEeRtwFZ54MK%2FypcQGOqUBpufgh00JN%2BgSa6CypPsPVQP21g7Zo28Wk1TDLbgEK8CYrqa0o6wqKFdZk9nqpAf1UkCRsbk%2B4%2Fh4LI8BPOlUeu%2Bc%2BH4xdgwpEJ4%2FnG1BBmFwyIGGMhUkyP2u3XzU3dW30XhXTh87I5enzHuOA3R6WxoBcwKRuk5Xe5kecqc6AaF%2FsQGTAcNnnpSZDAQR4WvzQslp9fn6XxFblyP39dq8gd8%2B9Nff&X-Amz-Signature=8a95d9a3d0bba23ce46e8ce9085c44cc7bb5d71ede9839a8b7c0174b38d4616a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAECBHT4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FP6fuDjvS6miKNT%2BjawiB6Z0c89y8TWuzHNNPnkX%2BDQIgRE1BxMUJRB3hHZNUI00qYr3PnPYmN5Gxzks7ba8iNlYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyV8bsNg8dFuKnIQyrcA9pZF7VkrjtNqVIz7aT%2BZGavWSYtDngIUqjndooMCyzjK7%2Be9gJifGzPzeXjQiEQzTXcBEbgkwUtoUutR77t%2B%2F4eLmPjMuCeUgeieUpfP7FybBHxtYljV0vngSQc2rlbAE9158zNejz3s3GIRHCWCMyTqdCV2PCQH%2BYLAh0eSeX%2FM%2BgMENcOKP0D7Djmk5hPXWXA7AFNT12t8KV7RijnbCs4OoRP918QwVnS8Gvs1Hj0WVYItEzYszKnpSmwnZoc4TqvA1c6EtsQ%2B9nOdEedj6nGrHMCviotKVPuL90B23D51HHolgAWOaaGcGcmNfHt93pCsJa34um27GVf8YhaHWtn3F0v45t5Q9TwUvXIfd3%2FbneKlQ0KmV6%2FnVpiBl7f93ZnIsxfwS%2Bt26nyDFa0epw1pZGcnQEt%2Bagx8Tr4WwEtHP7etsM%2FOlatcjxKYEqqgzCoqtG5d33Xq0kDaj8wRRHA3rh1odK4PXSdFRUgeXXDVG1DuDcJ3Nr8P4scc3ZGVBW4Y6N3oUrDo%2B1u%2FMRHBGtLsjzVtl8cLJThv8ssLAwhCn0UjAe1iYzaAhPAp%2Bw368tq790dHWyX%2FmC3KSmDvFgkPC6OilZ1uU3UoNChiDW850za54DEeRtwFZ54MK%2FypcQGOqUBpufgh00JN%2BgSa6CypPsPVQP21g7Zo28Wk1TDLbgEK8CYrqa0o6wqKFdZk9nqpAf1UkCRsbk%2B4%2Fh4LI8BPOlUeu%2Bc%2BH4xdgwpEJ4%2FnG1BBmFwyIGGMhUkyP2u3XzU3dW30XhXTh87I5enzHuOA3R6WxoBcwKRuk5Xe5kecqc6AaF%2FsQGTAcNnnpSZDAQR4WvzQslp9fn6XxFblyP39dq8gd8%2B9Nff&X-Amz-Signature=e318cee1d07b5707ca77ee834254a6c0c41110f86b9cd40941029ba3f8e14321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAECBHT4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FP6fuDjvS6miKNT%2BjawiB6Z0c89y8TWuzHNNPnkX%2BDQIgRE1BxMUJRB3hHZNUI00qYr3PnPYmN5Gxzks7ba8iNlYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyV8bsNg8dFuKnIQyrcA9pZF7VkrjtNqVIz7aT%2BZGavWSYtDngIUqjndooMCyzjK7%2Be9gJifGzPzeXjQiEQzTXcBEbgkwUtoUutR77t%2B%2F4eLmPjMuCeUgeieUpfP7FybBHxtYljV0vngSQc2rlbAE9158zNejz3s3GIRHCWCMyTqdCV2PCQH%2BYLAh0eSeX%2FM%2BgMENcOKP0D7Djmk5hPXWXA7AFNT12t8KV7RijnbCs4OoRP918QwVnS8Gvs1Hj0WVYItEzYszKnpSmwnZoc4TqvA1c6EtsQ%2B9nOdEedj6nGrHMCviotKVPuL90B23D51HHolgAWOaaGcGcmNfHt93pCsJa34um27GVf8YhaHWtn3F0v45t5Q9TwUvXIfd3%2FbneKlQ0KmV6%2FnVpiBl7f93ZnIsxfwS%2Bt26nyDFa0epw1pZGcnQEt%2Bagx8Tr4WwEtHP7etsM%2FOlatcjxKYEqqgzCoqtG5d33Xq0kDaj8wRRHA3rh1odK4PXSdFRUgeXXDVG1DuDcJ3Nr8P4scc3ZGVBW4Y6N3oUrDo%2B1u%2FMRHBGtLsjzVtl8cLJThv8ssLAwhCn0UjAe1iYzaAhPAp%2Bw368tq790dHWyX%2FmC3KSmDvFgkPC6OilZ1uU3UoNChiDW850za54DEeRtwFZ54MK%2FypcQGOqUBpufgh00JN%2BgSa6CypPsPVQP21g7Zo28Wk1TDLbgEK8CYrqa0o6wqKFdZk9nqpAf1UkCRsbk%2B4%2Fh4LI8BPOlUeu%2Bc%2BH4xdgwpEJ4%2FnG1BBmFwyIGGMhUkyP2u3XzU3dW30XhXTh87I5enzHuOA3R6WxoBcwKRuk5Xe5kecqc6AaF%2FsQGTAcNnnpSZDAQR4WvzQslp9fn6XxFblyP39dq8gd8%2B9Nff&X-Amz-Signature=6dbb1b5d556833e82d9c70fd1b17fca1889151a2fbc6bc4e08769587267633ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAECBHT4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FP6fuDjvS6miKNT%2BjawiB6Z0c89y8TWuzHNNPnkX%2BDQIgRE1BxMUJRB3hHZNUI00qYr3PnPYmN5Gxzks7ba8iNlYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyV8bsNg8dFuKnIQyrcA9pZF7VkrjtNqVIz7aT%2BZGavWSYtDngIUqjndooMCyzjK7%2Be9gJifGzPzeXjQiEQzTXcBEbgkwUtoUutR77t%2B%2F4eLmPjMuCeUgeieUpfP7FybBHxtYljV0vngSQc2rlbAE9158zNejz3s3GIRHCWCMyTqdCV2PCQH%2BYLAh0eSeX%2FM%2BgMENcOKP0D7Djmk5hPXWXA7AFNT12t8KV7RijnbCs4OoRP918QwVnS8Gvs1Hj0WVYItEzYszKnpSmwnZoc4TqvA1c6EtsQ%2B9nOdEedj6nGrHMCviotKVPuL90B23D51HHolgAWOaaGcGcmNfHt93pCsJa34um27GVf8YhaHWtn3F0v45t5Q9TwUvXIfd3%2FbneKlQ0KmV6%2FnVpiBl7f93ZnIsxfwS%2Bt26nyDFa0epw1pZGcnQEt%2Bagx8Tr4WwEtHP7etsM%2FOlatcjxKYEqqgzCoqtG5d33Xq0kDaj8wRRHA3rh1odK4PXSdFRUgeXXDVG1DuDcJ3Nr8P4scc3ZGVBW4Y6N3oUrDo%2B1u%2FMRHBGtLsjzVtl8cLJThv8ssLAwhCn0UjAe1iYzaAhPAp%2Bw368tq790dHWyX%2FmC3KSmDvFgkPC6OilZ1uU3UoNChiDW850za54DEeRtwFZ54MK%2FypcQGOqUBpufgh00JN%2BgSa6CypPsPVQP21g7Zo28Wk1TDLbgEK8CYrqa0o6wqKFdZk9nqpAf1UkCRsbk%2B4%2Fh4LI8BPOlUeu%2Bc%2BH4xdgwpEJ4%2FnG1BBmFwyIGGMhUkyP2u3XzU3dW30XhXTh87I5enzHuOA3R6WxoBcwKRuk5Xe5kecqc6AaF%2FsQGTAcNnnpSZDAQR4WvzQslp9fn6XxFblyP39dq8gd8%2B9Nff&X-Amz-Signature=adb72a03386ad4e0d19daea9d4ca43ae1c1f9eb5b2e7fb43929f3701b5e01f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
