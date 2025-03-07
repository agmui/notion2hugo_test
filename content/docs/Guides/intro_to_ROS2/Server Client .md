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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JNF4KY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEzGwKjBad60dPLNVCFfMKjFv0cEN%2BuCeNS6hcZyK7PaAiBR%2BtkishnVYE4FAFVmedzHFC51F%2Fkj9q7qokORitfuKCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0yxZ2HQc4c8%2FD3GVKtwDioMJtDGnY%2B%2FYoIxvaoRWEhOoATrJzlpjXiVbkTqSN1wEfoJSISgf6onfOGsrOSixHu5L3U8CjXiiZOl5%2BA1dCIOuuQ5%2BVzuU2U%2Fe7RdtPAQJ%2BbLGBtnJ0KkkDdtD58lLwxVXh4Fiw3kwrxaZv4ocpNgFyV1JAKCbXHY5tXW1nFeJlajXIuafmYXFL9pF5v%2FeQ6rfk%2Bpi4Ms5FJQGvzeXEboQKoM0JNYIpA4VLNdZnQX%2BRJQAGi994Mo99zorPBtlq4oqSHqKNpIz6XdZnNA6sH5QmhxRVdBdtL%2BgL9XsS%2F3ayIdMuSJooT9CFmM3KfPi6%2Fno8AwHu66SFaLqTopcKxKYVo%2FTAdOBN4tAboUpeTlACVgbqrE7Sw47khtCN934mFka45KbfhEnjYkBtrBpOOmaz4BF1hTPDN8muzhIKa%2B8dA0SlurCvHFecB81xMV73KnkIgk131%2BnVFhNCgVGjvBQsl5vFjHt6%2FGpie0WJlVaTwBI%2F5PPA39Z8ROnPzdPBY6IoAEmC8zpxjLr2ZmEZs1u34%2BN8wjAi7k%2BgHOiVLDqVeTFbLnE5n9EVpIPLejV2HYzjwteTPFgrX7nq%2BAnNKtTCif8MR4YAhSSmSNGaXRSI85JQxr%2FR8mY%2BhYw%2FN2tvgY6pgFmwDfTrrybl9gzZ%2BZ43wsV5NPlDrJJMVZD3yDR7C0VIT%2Biwm8tTW1OZGC4Rm%2F5uImOz5JSFuqf3%2FMygHdbJ3rF75TlBbzWBaOCJ7S4OEBqUN5aqDmOYe2LsJLO8PSIyW%2BLs0qs2aBo4w8kq6RT67llzjpuXvQC%2BqLsj5trEfr%2FSsVOWgZ3sOxp1DM2HJt2eXTPhgsf1lkpYNw%2BsFjof1L947R1kcy6&X-Amz-Signature=40af673fc3e1f53eefcb89f25c541aed0ac84a3288590cf3ea0849dc4afaa9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JNF4KY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEzGwKjBad60dPLNVCFfMKjFv0cEN%2BuCeNS6hcZyK7PaAiBR%2BtkishnVYE4FAFVmedzHFC51F%2Fkj9q7qokORitfuKCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0yxZ2HQc4c8%2FD3GVKtwDioMJtDGnY%2B%2FYoIxvaoRWEhOoATrJzlpjXiVbkTqSN1wEfoJSISgf6onfOGsrOSixHu5L3U8CjXiiZOl5%2BA1dCIOuuQ5%2BVzuU2U%2Fe7RdtPAQJ%2BbLGBtnJ0KkkDdtD58lLwxVXh4Fiw3kwrxaZv4ocpNgFyV1JAKCbXHY5tXW1nFeJlajXIuafmYXFL9pF5v%2FeQ6rfk%2Bpi4Ms5FJQGvzeXEboQKoM0JNYIpA4VLNdZnQX%2BRJQAGi994Mo99zorPBtlq4oqSHqKNpIz6XdZnNA6sH5QmhxRVdBdtL%2BgL9XsS%2F3ayIdMuSJooT9CFmM3KfPi6%2Fno8AwHu66SFaLqTopcKxKYVo%2FTAdOBN4tAboUpeTlACVgbqrE7Sw47khtCN934mFka45KbfhEnjYkBtrBpOOmaz4BF1hTPDN8muzhIKa%2B8dA0SlurCvHFecB81xMV73KnkIgk131%2BnVFhNCgVGjvBQsl5vFjHt6%2FGpie0WJlVaTwBI%2F5PPA39Z8ROnPzdPBY6IoAEmC8zpxjLr2ZmEZs1u34%2BN8wjAi7k%2BgHOiVLDqVeTFbLnE5n9EVpIPLejV2HYzjwteTPFgrX7nq%2BAnNKtTCif8MR4YAhSSmSNGaXRSI85JQxr%2FR8mY%2BhYw%2FN2tvgY6pgFmwDfTrrybl9gzZ%2BZ43wsV5NPlDrJJMVZD3yDR7C0VIT%2Biwm8tTW1OZGC4Rm%2F5uImOz5JSFuqf3%2FMygHdbJ3rF75TlBbzWBaOCJ7S4OEBqUN5aqDmOYe2LsJLO8PSIyW%2BLs0qs2aBo4w8kq6RT67llzjpuXvQC%2BqLsj5trEfr%2FSsVOWgZ3sOxp1DM2HJt2eXTPhgsf1lkpYNw%2BsFjof1L947R1kcy6&X-Amz-Signature=c46bb6ee1c6f67044bf86c5f5bd288f428d997fa815963c9751782c48912bf34&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JNF4KY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEzGwKjBad60dPLNVCFfMKjFv0cEN%2BuCeNS6hcZyK7PaAiBR%2BtkishnVYE4FAFVmedzHFC51F%2Fkj9q7qokORitfuKCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0yxZ2HQc4c8%2FD3GVKtwDioMJtDGnY%2B%2FYoIxvaoRWEhOoATrJzlpjXiVbkTqSN1wEfoJSISgf6onfOGsrOSixHu5L3U8CjXiiZOl5%2BA1dCIOuuQ5%2BVzuU2U%2Fe7RdtPAQJ%2BbLGBtnJ0KkkDdtD58lLwxVXh4Fiw3kwrxaZv4ocpNgFyV1JAKCbXHY5tXW1nFeJlajXIuafmYXFL9pF5v%2FeQ6rfk%2Bpi4Ms5FJQGvzeXEboQKoM0JNYIpA4VLNdZnQX%2BRJQAGi994Mo99zorPBtlq4oqSHqKNpIz6XdZnNA6sH5QmhxRVdBdtL%2BgL9XsS%2F3ayIdMuSJooT9CFmM3KfPi6%2Fno8AwHu66SFaLqTopcKxKYVo%2FTAdOBN4tAboUpeTlACVgbqrE7Sw47khtCN934mFka45KbfhEnjYkBtrBpOOmaz4BF1hTPDN8muzhIKa%2B8dA0SlurCvHFecB81xMV73KnkIgk131%2BnVFhNCgVGjvBQsl5vFjHt6%2FGpie0WJlVaTwBI%2F5PPA39Z8ROnPzdPBY6IoAEmC8zpxjLr2ZmEZs1u34%2BN8wjAi7k%2BgHOiVLDqVeTFbLnE5n9EVpIPLejV2HYzjwteTPFgrX7nq%2BAnNKtTCif8MR4YAhSSmSNGaXRSI85JQxr%2FR8mY%2BhYw%2FN2tvgY6pgFmwDfTrrybl9gzZ%2BZ43wsV5NPlDrJJMVZD3yDR7C0VIT%2Biwm8tTW1OZGC4Rm%2F5uImOz5JSFuqf3%2FMygHdbJ3rF75TlBbzWBaOCJ7S4OEBqUN5aqDmOYe2LsJLO8PSIyW%2BLs0qs2aBo4w8kq6RT67llzjpuXvQC%2BqLsj5trEfr%2FSsVOWgZ3sOxp1DM2HJt2eXTPhgsf1lkpYNw%2BsFjof1L947R1kcy6&X-Amz-Signature=9b6611108bca7cc3c4790e051d9c82fd539ec3c5b2c05c56c8666d523c16ad02&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JNF4KY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEzGwKjBad60dPLNVCFfMKjFv0cEN%2BuCeNS6hcZyK7PaAiBR%2BtkishnVYE4FAFVmedzHFC51F%2Fkj9q7qokORitfuKCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0yxZ2HQc4c8%2FD3GVKtwDioMJtDGnY%2B%2FYoIxvaoRWEhOoATrJzlpjXiVbkTqSN1wEfoJSISgf6onfOGsrOSixHu5L3U8CjXiiZOl5%2BA1dCIOuuQ5%2BVzuU2U%2Fe7RdtPAQJ%2BbLGBtnJ0KkkDdtD58lLwxVXh4Fiw3kwrxaZv4ocpNgFyV1JAKCbXHY5tXW1nFeJlajXIuafmYXFL9pF5v%2FeQ6rfk%2Bpi4Ms5FJQGvzeXEboQKoM0JNYIpA4VLNdZnQX%2BRJQAGi994Mo99zorPBtlq4oqSHqKNpIz6XdZnNA6sH5QmhxRVdBdtL%2BgL9XsS%2F3ayIdMuSJooT9CFmM3KfPi6%2Fno8AwHu66SFaLqTopcKxKYVo%2FTAdOBN4tAboUpeTlACVgbqrE7Sw47khtCN934mFka45KbfhEnjYkBtrBpOOmaz4BF1hTPDN8muzhIKa%2B8dA0SlurCvHFecB81xMV73KnkIgk131%2BnVFhNCgVGjvBQsl5vFjHt6%2FGpie0WJlVaTwBI%2F5PPA39Z8ROnPzdPBY6IoAEmC8zpxjLr2ZmEZs1u34%2BN8wjAi7k%2BgHOiVLDqVeTFbLnE5n9EVpIPLejV2HYzjwteTPFgrX7nq%2BAnNKtTCif8MR4YAhSSmSNGaXRSI85JQxr%2FR8mY%2BhYw%2FN2tvgY6pgFmwDfTrrybl9gzZ%2BZ43wsV5NPlDrJJMVZD3yDR7C0VIT%2Biwm8tTW1OZGC4Rm%2F5uImOz5JSFuqf3%2FMygHdbJ3rF75TlBbzWBaOCJ7S4OEBqUN5aqDmOYe2LsJLO8PSIyW%2BLs0qs2aBo4w8kq6RT67llzjpuXvQC%2BqLsj5trEfr%2FSsVOWgZ3sOxp1DM2HJt2eXTPhgsf1lkpYNw%2BsFjof1L947R1kcy6&X-Amz-Signature=558898619ef331a7a5b34dc3cd1125fcd8fbb4a32190488519ee51176a3914ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JNF4KY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEzGwKjBad60dPLNVCFfMKjFv0cEN%2BuCeNS6hcZyK7PaAiBR%2BtkishnVYE4FAFVmedzHFC51F%2Fkj9q7qokORitfuKCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0yxZ2HQc4c8%2FD3GVKtwDioMJtDGnY%2B%2FYoIxvaoRWEhOoATrJzlpjXiVbkTqSN1wEfoJSISgf6onfOGsrOSixHu5L3U8CjXiiZOl5%2BA1dCIOuuQ5%2BVzuU2U%2Fe7RdtPAQJ%2BbLGBtnJ0KkkDdtD58lLwxVXh4Fiw3kwrxaZv4ocpNgFyV1JAKCbXHY5tXW1nFeJlajXIuafmYXFL9pF5v%2FeQ6rfk%2Bpi4Ms5FJQGvzeXEboQKoM0JNYIpA4VLNdZnQX%2BRJQAGi994Mo99zorPBtlq4oqSHqKNpIz6XdZnNA6sH5QmhxRVdBdtL%2BgL9XsS%2F3ayIdMuSJooT9CFmM3KfPi6%2Fno8AwHu66SFaLqTopcKxKYVo%2FTAdOBN4tAboUpeTlACVgbqrE7Sw47khtCN934mFka45KbfhEnjYkBtrBpOOmaz4BF1hTPDN8muzhIKa%2B8dA0SlurCvHFecB81xMV73KnkIgk131%2BnVFhNCgVGjvBQsl5vFjHt6%2FGpie0WJlVaTwBI%2F5PPA39Z8ROnPzdPBY6IoAEmC8zpxjLr2ZmEZs1u34%2BN8wjAi7k%2BgHOiVLDqVeTFbLnE5n9EVpIPLejV2HYzjwteTPFgrX7nq%2BAnNKtTCif8MR4YAhSSmSNGaXRSI85JQxr%2FR8mY%2BhYw%2FN2tvgY6pgFmwDfTrrybl9gzZ%2BZ43wsV5NPlDrJJMVZD3yDR7C0VIT%2Biwm8tTW1OZGC4Rm%2F5uImOz5JSFuqf3%2FMygHdbJ3rF75TlBbzWBaOCJ7S4OEBqUN5aqDmOYe2LsJLO8PSIyW%2BLs0qs2aBo4w8kq6RT67llzjpuXvQC%2BqLsj5trEfr%2FSsVOWgZ3sOxp1DM2HJt2eXTPhgsf1lkpYNw%2BsFjof1L947R1kcy6&X-Amz-Signature=7ec80b68137ce7e309ba94d04d55a9ea8f3c31c99eed5e9fd5445370f35024ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
