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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOWLKAU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG8B1EqqpHF3altzZUnItWBz%2B8oDK8EXk%2BwLQkC2BcKQAiEA1COaneuv7WZAi0TGphxCuuKVtLY0SNmdA%2Fn2l%2BOExFAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm4tFFygbtID%2FvvFyrcAxvsYWfCII9acnWSM07HqaYlzz38CceBDtJYxDzpuj76KnsOIGeTQiB1ZMfxErD9wroZ7B5w%2BPXZAOIAYZYj5ZJRW2fbcFnU7E9IyqkTlQd6wyZjGo1edhUe0TrcgbmmTRDXE%2FsppUJck1G2gC2nMV1nHB9SU2Uzm3Jscgsikf%2F5%2BndUJQF9i4tGXZ6ayQbd1peEiHTcW8r%2F8pWu1qyiRHP%2BC7K3koo176IGhrFAXAtTH5SeTnuPhzH6VxM73MxFyRHUd2JCB8sUOhyixV5PheutDcT6ltvzJElNEOm8LPGJKQemmUpHYMoUoQfevuBJrDdL1tZwkGQ7flZvVJg3Pe%2BWArM%2BTGiaoMv5KQXhs4Oq%2FGartSf8CAoLXK7v5T0v5d%2Bej%2Fdnk%2BZKE7YYPbnsZXFW4NeJTzI8acHJ4Lq7SAirw4hyodl%2BV95Kl1%2Fb8es%2FC0LloaJ3QWmy7Rb2WRtuZSYtS58yixNqpNKsyEK63%2FFhfCDGUAXzhJue8WUDr2rRd9LmO169cZTmqWLfZ1OQo5A0o%2Fx3GpiGOeMfN6hM43NLaGUvRXTR37nddbqdWTNb5s%2B0su1VGxMpT4P9g8Op7RDTjSzCvPEluac9TfSRR66bRpldYAqwiSFLMMynMKvwm70GOqUBHA5x%2ByOjiKXAMPgkU072Ioxn16nfHbIqNKF%2FkYE%2BhYW6tAIiyYwcENFr1EtcTFRJbC%2FOMJXfg9fwgrkGuoXhs05s7Y9ih9RuAAp2%2BlsNSjM1rtjdJ4uHWuA4cqFhRG%2BVbzilaIZRQs%2FkNhBt1g9m2lvSZJWZ6p6Ef%2BlFuhTEUIWaupBWpdOiOGXFSDZlPWaqwTmDVB3f%2FYC%2BSFUrEl5LtgcazBcM&X-Amz-Signature=499932b53524462f97340bf6722efa2f0a7e162653c88e0b0aab23ad00f157e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOWLKAU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG8B1EqqpHF3altzZUnItWBz%2B8oDK8EXk%2BwLQkC2BcKQAiEA1COaneuv7WZAi0TGphxCuuKVtLY0SNmdA%2Fn2l%2BOExFAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm4tFFygbtID%2FvvFyrcAxvsYWfCII9acnWSM07HqaYlzz38CceBDtJYxDzpuj76KnsOIGeTQiB1ZMfxErD9wroZ7B5w%2BPXZAOIAYZYj5ZJRW2fbcFnU7E9IyqkTlQd6wyZjGo1edhUe0TrcgbmmTRDXE%2FsppUJck1G2gC2nMV1nHB9SU2Uzm3Jscgsikf%2F5%2BndUJQF9i4tGXZ6ayQbd1peEiHTcW8r%2F8pWu1qyiRHP%2BC7K3koo176IGhrFAXAtTH5SeTnuPhzH6VxM73MxFyRHUd2JCB8sUOhyixV5PheutDcT6ltvzJElNEOm8LPGJKQemmUpHYMoUoQfevuBJrDdL1tZwkGQ7flZvVJg3Pe%2BWArM%2BTGiaoMv5KQXhs4Oq%2FGartSf8CAoLXK7v5T0v5d%2Bej%2Fdnk%2BZKE7YYPbnsZXFW4NeJTzI8acHJ4Lq7SAirw4hyodl%2BV95Kl1%2Fb8es%2FC0LloaJ3QWmy7Rb2WRtuZSYtS58yixNqpNKsyEK63%2FFhfCDGUAXzhJue8WUDr2rRd9LmO169cZTmqWLfZ1OQo5A0o%2Fx3GpiGOeMfN6hM43NLaGUvRXTR37nddbqdWTNb5s%2B0su1VGxMpT4P9g8Op7RDTjSzCvPEluac9TfSRR66bRpldYAqwiSFLMMynMKvwm70GOqUBHA5x%2ByOjiKXAMPgkU072Ioxn16nfHbIqNKF%2FkYE%2BhYW6tAIiyYwcENFr1EtcTFRJbC%2FOMJXfg9fwgrkGuoXhs05s7Y9ih9RuAAp2%2BlsNSjM1rtjdJ4uHWuA4cqFhRG%2BVbzilaIZRQs%2FkNhBt1g9m2lvSZJWZ6p6Ef%2BlFuhTEUIWaupBWpdOiOGXFSDZlPWaqwTmDVB3f%2FYC%2BSFUrEl5LtgcazBcM&X-Amz-Signature=651cc4aa912e4c5e264630eea58ea6264412c4decc2940802c3275684074a522&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOWLKAU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG8B1EqqpHF3altzZUnItWBz%2B8oDK8EXk%2BwLQkC2BcKQAiEA1COaneuv7WZAi0TGphxCuuKVtLY0SNmdA%2Fn2l%2BOExFAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm4tFFygbtID%2FvvFyrcAxvsYWfCII9acnWSM07HqaYlzz38CceBDtJYxDzpuj76KnsOIGeTQiB1ZMfxErD9wroZ7B5w%2BPXZAOIAYZYj5ZJRW2fbcFnU7E9IyqkTlQd6wyZjGo1edhUe0TrcgbmmTRDXE%2FsppUJck1G2gC2nMV1nHB9SU2Uzm3Jscgsikf%2F5%2BndUJQF9i4tGXZ6ayQbd1peEiHTcW8r%2F8pWu1qyiRHP%2BC7K3koo176IGhrFAXAtTH5SeTnuPhzH6VxM73MxFyRHUd2JCB8sUOhyixV5PheutDcT6ltvzJElNEOm8LPGJKQemmUpHYMoUoQfevuBJrDdL1tZwkGQ7flZvVJg3Pe%2BWArM%2BTGiaoMv5KQXhs4Oq%2FGartSf8CAoLXK7v5T0v5d%2Bej%2Fdnk%2BZKE7YYPbnsZXFW4NeJTzI8acHJ4Lq7SAirw4hyodl%2BV95Kl1%2Fb8es%2FC0LloaJ3QWmy7Rb2WRtuZSYtS58yixNqpNKsyEK63%2FFhfCDGUAXzhJue8WUDr2rRd9LmO169cZTmqWLfZ1OQo5A0o%2Fx3GpiGOeMfN6hM43NLaGUvRXTR37nddbqdWTNb5s%2B0su1VGxMpT4P9g8Op7RDTjSzCvPEluac9TfSRR66bRpldYAqwiSFLMMynMKvwm70GOqUBHA5x%2ByOjiKXAMPgkU072Ioxn16nfHbIqNKF%2FkYE%2BhYW6tAIiyYwcENFr1EtcTFRJbC%2FOMJXfg9fwgrkGuoXhs05s7Y9ih9RuAAp2%2BlsNSjM1rtjdJ4uHWuA4cqFhRG%2BVbzilaIZRQs%2FkNhBt1g9m2lvSZJWZ6p6Ef%2BlFuhTEUIWaupBWpdOiOGXFSDZlPWaqwTmDVB3f%2FYC%2BSFUrEl5LtgcazBcM&X-Amz-Signature=c1a5ee11775254674d99a317553b571480caa428aa39886c56a6038002f32606&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOWLKAU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG8B1EqqpHF3altzZUnItWBz%2B8oDK8EXk%2BwLQkC2BcKQAiEA1COaneuv7WZAi0TGphxCuuKVtLY0SNmdA%2Fn2l%2BOExFAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm4tFFygbtID%2FvvFyrcAxvsYWfCII9acnWSM07HqaYlzz38CceBDtJYxDzpuj76KnsOIGeTQiB1ZMfxErD9wroZ7B5w%2BPXZAOIAYZYj5ZJRW2fbcFnU7E9IyqkTlQd6wyZjGo1edhUe0TrcgbmmTRDXE%2FsppUJck1G2gC2nMV1nHB9SU2Uzm3Jscgsikf%2F5%2BndUJQF9i4tGXZ6ayQbd1peEiHTcW8r%2F8pWu1qyiRHP%2BC7K3koo176IGhrFAXAtTH5SeTnuPhzH6VxM73MxFyRHUd2JCB8sUOhyixV5PheutDcT6ltvzJElNEOm8LPGJKQemmUpHYMoUoQfevuBJrDdL1tZwkGQ7flZvVJg3Pe%2BWArM%2BTGiaoMv5KQXhs4Oq%2FGartSf8CAoLXK7v5T0v5d%2Bej%2Fdnk%2BZKE7YYPbnsZXFW4NeJTzI8acHJ4Lq7SAirw4hyodl%2BV95Kl1%2Fb8es%2FC0LloaJ3QWmy7Rb2WRtuZSYtS58yixNqpNKsyEK63%2FFhfCDGUAXzhJue8WUDr2rRd9LmO169cZTmqWLfZ1OQo5A0o%2Fx3GpiGOeMfN6hM43NLaGUvRXTR37nddbqdWTNb5s%2B0su1VGxMpT4P9g8Op7RDTjSzCvPEluac9TfSRR66bRpldYAqwiSFLMMynMKvwm70GOqUBHA5x%2ByOjiKXAMPgkU072Ioxn16nfHbIqNKF%2FkYE%2BhYW6tAIiyYwcENFr1EtcTFRJbC%2FOMJXfg9fwgrkGuoXhs05s7Y9ih9RuAAp2%2BlsNSjM1rtjdJ4uHWuA4cqFhRG%2BVbzilaIZRQs%2FkNhBt1g9m2lvSZJWZ6p6Ef%2BlFuhTEUIWaupBWpdOiOGXFSDZlPWaqwTmDVB3f%2FYC%2BSFUrEl5LtgcazBcM&X-Amz-Signature=a731183dff0c89b54aea9887c07fe31751ed5cea7bc11bc059b8247132da5073&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOWLKAU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG8B1EqqpHF3altzZUnItWBz%2B8oDK8EXk%2BwLQkC2BcKQAiEA1COaneuv7WZAi0TGphxCuuKVtLY0SNmdA%2Fn2l%2BOExFAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm4tFFygbtID%2FvvFyrcAxvsYWfCII9acnWSM07HqaYlzz38CceBDtJYxDzpuj76KnsOIGeTQiB1ZMfxErD9wroZ7B5w%2BPXZAOIAYZYj5ZJRW2fbcFnU7E9IyqkTlQd6wyZjGo1edhUe0TrcgbmmTRDXE%2FsppUJck1G2gC2nMV1nHB9SU2Uzm3Jscgsikf%2F5%2BndUJQF9i4tGXZ6ayQbd1peEiHTcW8r%2F8pWu1qyiRHP%2BC7K3koo176IGhrFAXAtTH5SeTnuPhzH6VxM73MxFyRHUd2JCB8sUOhyixV5PheutDcT6ltvzJElNEOm8LPGJKQemmUpHYMoUoQfevuBJrDdL1tZwkGQ7flZvVJg3Pe%2BWArM%2BTGiaoMv5KQXhs4Oq%2FGartSf8CAoLXK7v5T0v5d%2Bej%2Fdnk%2BZKE7YYPbnsZXFW4NeJTzI8acHJ4Lq7SAirw4hyodl%2BV95Kl1%2Fb8es%2FC0LloaJ3QWmy7Rb2WRtuZSYtS58yixNqpNKsyEK63%2FFhfCDGUAXzhJue8WUDr2rRd9LmO169cZTmqWLfZ1OQo5A0o%2Fx3GpiGOeMfN6hM43NLaGUvRXTR37nddbqdWTNb5s%2B0su1VGxMpT4P9g8Op7RDTjSzCvPEluac9TfSRR66bRpldYAqwiSFLMMynMKvwm70GOqUBHA5x%2ByOjiKXAMPgkU072Ioxn16nfHbIqNKF%2FkYE%2BhYW6tAIiyYwcENFr1EtcTFRJbC%2FOMJXfg9fwgrkGuoXhs05s7Y9ih9RuAAp2%2BlsNSjM1rtjdJ4uHWuA4cqFhRG%2BVbzilaIZRQs%2FkNhBt1g9m2lvSZJWZ6p6Ef%2BlFuhTEUIWaupBWpdOiOGXFSDZlPWaqwTmDVB3f%2FYC%2BSFUrEl5LtgcazBcM&X-Amz-Signature=09b7818714ff583470a280eb0f8a048941b8b486710fc10dbd7dbb3077f44067&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
