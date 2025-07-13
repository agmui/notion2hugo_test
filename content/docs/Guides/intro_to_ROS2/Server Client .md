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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVJ6ECL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrZD6ffJ%2B5qK5gMD1q381HzSAFLJUvHPXKWPfOVf0ZwIhAMduQYF4VLla9nsPOd9hj3REslVSNkd9f8AX%2BhkC5Do0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXaLI1K7g9EEM30moq3APVEfngwEUNEhUCvJQkinHZNNQmn20PXV8MHHBFU2pnYh3onkr%2FXYU8J7WScMLT5Nln3kEiui%2F13jAVY1Dgx6N9pU3M9GC9Q2Fiw1S8mKafLFNmHr6XKCybJm5F20M%2FIgpQfoprCQ4AAhoG2pOVUNFex1BpGod6pqQNNz7iW1xr2Q1HjrlG7cbY%2BSd8AdHvgs9n3qbVSlL%2FiU3D2qwCq6hdXW9LAO9WvDMg96PVRQbiSRIyA8a%2BO0BjpVkcdEmd8yrVNMzNv%2Bg2d5G21tVOixiiO8J%2Fp%2B0ueVTjN9fsrEJtdIIr2BptaH7IojobNqGVdA97hiMVzf%2Bn0gdRttFHpqf5PVEl5SWBCCJOf3NbhGOtYy%2BsZi3RgWSxYwZSGttkyYa2I0%2BNSXcCbgDbvoS0iRzX4px7g6gLFagflHMKj36dZbwwHZbTH7iTe11CiIwWHdT3G5Ggpw8%2BZ1a3DMq0MK26D6KgBp%2BbZ5Fi4BmiFKSUu7EMaqPQmpnAoki9gnKMgwPOK09Mw5fyZXv6fnNr7%2B3crSZ%2BecUpsivJma5Sji5iDhtTvHoIf7bJz4fNxRRAs7N3PiyltBmTpvzJmNFtVBgLyLuvR5VRn%2Bs8s2MhhsV5hvw2717%2F9qAv5NrRjzDVgczDBjqkAd9IaF%2F513UGikqfnVzD1GOAmt%2FOss2WRlInHwPjxkznwI1fDgk6m4ge0uGoaTLbqfuBMw67Z2B2JGrMdu5l2j2%2Bb6ogD3xSdRYQ9VHi438U7i5MneO0r59chH%2Fb2SJi3IDHLLOJNz%2FXYZ4Nd0RJX5YCgldUYbJob2gfP9zBj%2BpTkynLbCFME84MV1%2FcQl%2F5MovWiGYLE16cGk9G%2FfhdQgabjgZW&X-Amz-Signature=25c703434d50bde910934aa338899ff193c74b6640599ab5c8c30b2cce1eb62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVJ6ECL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrZD6ffJ%2B5qK5gMD1q381HzSAFLJUvHPXKWPfOVf0ZwIhAMduQYF4VLla9nsPOd9hj3REslVSNkd9f8AX%2BhkC5Do0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXaLI1K7g9EEM30moq3APVEfngwEUNEhUCvJQkinHZNNQmn20PXV8MHHBFU2pnYh3onkr%2FXYU8J7WScMLT5Nln3kEiui%2F13jAVY1Dgx6N9pU3M9GC9Q2Fiw1S8mKafLFNmHr6XKCybJm5F20M%2FIgpQfoprCQ4AAhoG2pOVUNFex1BpGod6pqQNNz7iW1xr2Q1HjrlG7cbY%2BSd8AdHvgs9n3qbVSlL%2FiU3D2qwCq6hdXW9LAO9WvDMg96PVRQbiSRIyA8a%2BO0BjpVkcdEmd8yrVNMzNv%2Bg2d5G21tVOixiiO8J%2Fp%2B0ueVTjN9fsrEJtdIIr2BptaH7IojobNqGVdA97hiMVzf%2Bn0gdRttFHpqf5PVEl5SWBCCJOf3NbhGOtYy%2BsZi3RgWSxYwZSGttkyYa2I0%2BNSXcCbgDbvoS0iRzX4px7g6gLFagflHMKj36dZbwwHZbTH7iTe11CiIwWHdT3G5Ggpw8%2BZ1a3DMq0MK26D6KgBp%2BbZ5Fi4BmiFKSUu7EMaqPQmpnAoki9gnKMgwPOK09Mw5fyZXv6fnNr7%2B3crSZ%2BecUpsivJma5Sji5iDhtTvHoIf7bJz4fNxRRAs7N3PiyltBmTpvzJmNFtVBgLyLuvR5VRn%2Bs8s2MhhsV5hvw2717%2F9qAv5NrRjzDVgczDBjqkAd9IaF%2F513UGikqfnVzD1GOAmt%2FOss2WRlInHwPjxkznwI1fDgk6m4ge0uGoaTLbqfuBMw67Z2B2JGrMdu5l2j2%2Bb6ogD3xSdRYQ9VHi438U7i5MneO0r59chH%2Fb2SJi3IDHLLOJNz%2FXYZ4Nd0RJX5YCgldUYbJob2gfP9zBj%2BpTkynLbCFME84MV1%2FcQl%2F5MovWiGYLE16cGk9G%2FfhdQgabjgZW&X-Amz-Signature=a15b21d00ed306008a1283e3fc8483b16ae0097e01a2d2305f93451879b3acd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVJ6ECL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrZD6ffJ%2B5qK5gMD1q381HzSAFLJUvHPXKWPfOVf0ZwIhAMduQYF4VLla9nsPOd9hj3REslVSNkd9f8AX%2BhkC5Do0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXaLI1K7g9EEM30moq3APVEfngwEUNEhUCvJQkinHZNNQmn20PXV8MHHBFU2pnYh3onkr%2FXYU8J7WScMLT5Nln3kEiui%2F13jAVY1Dgx6N9pU3M9GC9Q2Fiw1S8mKafLFNmHr6XKCybJm5F20M%2FIgpQfoprCQ4AAhoG2pOVUNFex1BpGod6pqQNNz7iW1xr2Q1HjrlG7cbY%2BSd8AdHvgs9n3qbVSlL%2FiU3D2qwCq6hdXW9LAO9WvDMg96PVRQbiSRIyA8a%2BO0BjpVkcdEmd8yrVNMzNv%2Bg2d5G21tVOixiiO8J%2Fp%2B0ueVTjN9fsrEJtdIIr2BptaH7IojobNqGVdA97hiMVzf%2Bn0gdRttFHpqf5PVEl5SWBCCJOf3NbhGOtYy%2BsZi3RgWSxYwZSGttkyYa2I0%2BNSXcCbgDbvoS0iRzX4px7g6gLFagflHMKj36dZbwwHZbTH7iTe11CiIwWHdT3G5Ggpw8%2BZ1a3DMq0MK26D6KgBp%2BbZ5Fi4BmiFKSUu7EMaqPQmpnAoki9gnKMgwPOK09Mw5fyZXv6fnNr7%2B3crSZ%2BecUpsivJma5Sji5iDhtTvHoIf7bJz4fNxRRAs7N3PiyltBmTpvzJmNFtVBgLyLuvR5VRn%2Bs8s2MhhsV5hvw2717%2F9qAv5NrRjzDVgczDBjqkAd9IaF%2F513UGikqfnVzD1GOAmt%2FOss2WRlInHwPjxkznwI1fDgk6m4ge0uGoaTLbqfuBMw67Z2B2JGrMdu5l2j2%2Bb6ogD3xSdRYQ9VHi438U7i5MneO0r59chH%2Fb2SJi3IDHLLOJNz%2FXYZ4Nd0RJX5YCgldUYbJob2gfP9zBj%2BpTkynLbCFME84MV1%2FcQl%2F5MovWiGYLE16cGk9G%2FfhdQgabjgZW&X-Amz-Signature=890f4c549c1a1faee0b04324942f7b10fd5438c928b781cc232bd9b7d6a7c1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVJ6ECL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrZD6ffJ%2B5qK5gMD1q381HzSAFLJUvHPXKWPfOVf0ZwIhAMduQYF4VLla9nsPOd9hj3REslVSNkd9f8AX%2BhkC5Do0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXaLI1K7g9EEM30moq3APVEfngwEUNEhUCvJQkinHZNNQmn20PXV8MHHBFU2pnYh3onkr%2FXYU8J7WScMLT5Nln3kEiui%2F13jAVY1Dgx6N9pU3M9GC9Q2Fiw1S8mKafLFNmHr6XKCybJm5F20M%2FIgpQfoprCQ4AAhoG2pOVUNFex1BpGod6pqQNNz7iW1xr2Q1HjrlG7cbY%2BSd8AdHvgs9n3qbVSlL%2FiU3D2qwCq6hdXW9LAO9WvDMg96PVRQbiSRIyA8a%2BO0BjpVkcdEmd8yrVNMzNv%2Bg2d5G21tVOixiiO8J%2Fp%2B0ueVTjN9fsrEJtdIIr2BptaH7IojobNqGVdA97hiMVzf%2Bn0gdRttFHpqf5PVEl5SWBCCJOf3NbhGOtYy%2BsZi3RgWSxYwZSGttkyYa2I0%2BNSXcCbgDbvoS0iRzX4px7g6gLFagflHMKj36dZbwwHZbTH7iTe11CiIwWHdT3G5Ggpw8%2BZ1a3DMq0MK26D6KgBp%2BbZ5Fi4BmiFKSUu7EMaqPQmpnAoki9gnKMgwPOK09Mw5fyZXv6fnNr7%2B3crSZ%2BecUpsivJma5Sji5iDhtTvHoIf7bJz4fNxRRAs7N3PiyltBmTpvzJmNFtVBgLyLuvR5VRn%2Bs8s2MhhsV5hvw2717%2F9qAv5NrRjzDVgczDBjqkAd9IaF%2F513UGikqfnVzD1GOAmt%2FOss2WRlInHwPjxkznwI1fDgk6m4ge0uGoaTLbqfuBMw67Z2B2JGrMdu5l2j2%2Bb6ogD3xSdRYQ9VHi438U7i5MneO0r59chH%2Fb2SJi3IDHLLOJNz%2FXYZ4Nd0RJX5YCgldUYbJob2gfP9zBj%2BpTkynLbCFME84MV1%2FcQl%2F5MovWiGYLE16cGk9G%2FfhdQgabjgZW&X-Amz-Signature=cd6b1c5c991eb85f62cbab6c226d151de461cc558eefd4df37b02225a79702b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVJ6ECL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrZD6ffJ%2B5qK5gMD1q381HzSAFLJUvHPXKWPfOVf0ZwIhAMduQYF4VLla9nsPOd9hj3REslVSNkd9f8AX%2BhkC5Do0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXaLI1K7g9EEM30moq3APVEfngwEUNEhUCvJQkinHZNNQmn20PXV8MHHBFU2pnYh3onkr%2FXYU8J7WScMLT5Nln3kEiui%2F13jAVY1Dgx6N9pU3M9GC9Q2Fiw1S8mKafLFNmHr6XKCybJm5F20M%2FIgpQfoprCQ4AAhoG2pOVUNFex1BpGod6pqQNNz7iW1xr2Q1HjrlG7cbY%2BSd8AdHvgs9n3qbVSlL%2FiU3D2qwCq6hdXW9LAO9WvDMg96PVRQbiSRIyA8a%2BO0BjpVkcdEmd8yrVNMzNv%2Bg2d5G21tVOixiiO8J%2Fp%2B0ueVTjN9fsrEJtdIIr2BptaH7IojobNqGVdA97hiMVzf%2Bn0gdRttFHpqf5PVEl5SWBCCJOf3NbhGOtYy%2BsZi3RgWSxYwZSGttkyYa2I0%2BNSXcCbgDbvoS0iRzX4px7g6gLFagflHMKj36dZbwwHZbTH7iTe11CiIwWHdT3G5Ggpw8%2BZ1a3DMq0MK26D6KgBp%2BbZ5Fi4BmiFKSUu7EMaqPQmpnAoki9gnKMgwPOK09Mw5fyZXv6fnNr7%2B3crSZ%2BecUpsivJma5Sji5iDhtTvHoIf7bJz4fNxRRAs7N3PiyltBmTpvzJmNFtVBgLyLuvR5VRn%2Bs8s2MhhsV5hvw2717%2F9qAv5NrRjzDVgczDBjqkAd9IaF%2F513UGikqfnVzD1GOAmt%2FOss2WRlInHwPjxkznwI1fDgk6m4ge0uGoaTLbqfuBMw67Z2B2JGrMdu5l2j2%2Bb6ogD3xSdRYQ9VHi438U7i5MneO0r59chH%2Fb2SJi3IDHLLOJNz%2FXYZ4Nd0RJX5YCgldUYbJob2gfP9zBj%2BpTkynLbCFME84MV1%2FcQl%2F5MovWiGYLE16cGk9G%2FfhdQgabjgZW&X-Amz-Signature=903cfd19fd950214c090a503c55a4c4810de19be373ff23ff95f50efa2c66661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
