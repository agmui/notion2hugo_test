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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKJ62M4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzp3oGavmyp8KDzj%2BK694d6tjvlT8IeFNJBsfl1ye5uAiEA8bcVTHyoYM%2FFFEkGBGqlz6KHOtk7mlfhdOEMmSkujMUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxET5LgWMVC06U53ircA9AqpcFWu8ssxNAwfffocWVKYI07CH1C3MpRne87gD%2FbpcdpTU9%2FLaWDTD4W2mfNjxPflvyQ2TdSM8hGiO6TmFH4l2YIQUmOsCn6UdPQQ5369kbLIBvavzjtObXkACJ%2FxbuuPaotYRenuPYdoIcVZwFmKUC5eLM3oif919lA8DvYiKPh8Wm3mBfKVcufZBg%2F7%2FROwpRdIu9NN72fIGH6j0FiYgiyYCWRb%2BPTMRbGjI2ghVMdETtXpOAYxA0Y8jaYKfUz1ZnjMP9iCSrHcWeGyRKHeY%2FGyxwcXNPee3tbsF1VdCz7uxqcUFnm2yMEAEMD1YIDio2Mb5OcGuFY8e60RUsNpdx9QqF%2FbZLaTJLH6YwTkn0bFpEGHE%2BOCKhdmLENZljO3Dx1BEdmC9F3w58w1Om91YsIHRjkVBRhbj3AVL%2BMfwtvWDwRvMNVAobcmuefrjl3XaekWL9crxF0D0no4eyWBHLpXJAC7ywLcphTEdm8JI1crU4K5OpooiW%2B36uZDDuvgwGNAC8%2BwTHKuhTDtQx6AamtR9EItGg%2B5zUXf%2FXRafioi6BZXYmZAqOQW6aeHmE7eekawKwL03itCMGXC1GnFs1qhYWfGvCiFQimfqr7ll46r7TBt6za%2BSOdMJCJ18IGOqUBVQfB3Bd5bXT%2BHwCpIsILQ2jB0RmYhCL5DukMgnr5mizPd1BKIVP4NaYMo9J4nnksq0pxOcUHAWsPNIe7zUyU%2FVSgdUjbEAff2AASB0yxPP%2BEQ9RSnKBzReGw4hCnpvt%2BhpYyHWRMQKM6ELORBTKJaB9nx9qhepeqKIFX%2Bl2OparWDu8oGA2kitlDBnJuUCyBkgi4%2F74ESj1cluTgs90HpZS%2BGQJE&X-Amz-Signature=a6a7a4feabce19d1a88d938463e314932be4db1b7a48ca2703759d78c8693100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKJ62M4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzp3oGavmyp8KDzj%2BK694d6tjvlT8IeFNJBsfl1ye5uAiEA8bcVTHyoYM%2FFFEkGBGqlz6KHOtk7mlfhdOEMmSkujMUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxET5LgWMVC06U53ircA9AqpcFWu8ssxNAwfffocWVKYI07CH1C3MpRne87gD%2FbpcdpTU9%2FLaWDTD4W2mfNjxPflvyQ2TdSM8hGiO6TmFH4l2YIQUmOsCn6UdPQQ5369kbLIBvavzjtObXkACJ%2FxbuuPaotYRenuPYdoIcVZwFmKUC5eLM3oif919lA8DvYiKPh8Wm3mBfKVcufZBg%2F7%2FROwpRdIu9NN72fIGH6j0FiYgiyYCWRb%2BPTMRbGjI2ghVMdETtXpOAYxA0Y8jaYKfUz1ZnjMP9iCSrHcWeGyRKHeY%2FGyxwcXNPee3tbsF1VdCz7uxqcUFnm2yMEAEMD1YIDio2Mb5OcGuFY8e60RUsNpdx9QqF%2FbZLaTJLH6YwTkn0bFpEGHE%2BOCKhdmLENZljO3Dx1BEdmC9F3w58w1Om91YsIHRjkVBRhbj3AVL%2BMfwtvWDwRvMNVAobcmuefrjl3XaekWL9crxF0D0no4eyWBHLpXJAC7ywLcphTEdm8JI1crU4K5OpooiW%2B36uZDDuvgwGNAC8%2BwTHKuhTDtQx6AamtR9EItGg%2B5zUXf%2FXRafioi6BZXYmZAqOQW6aeHmE7eekawKwL03itCMGXC1GnFs1qhYWfGvCiFQimfqr7ll46r7TBt6za%2BSOdMJCJ18IGOqUBVQfB3Bd5bXT%2BHwCpIsILQ2jB0RmYhCL5DukMgnr5mizPd1BKIVP4NaYMo9J4nnksq0pxOcUHAWsPNIe7zUyU%2FVSgdUjbEAff2AASB0yxPP%2BEQ9RSnKBzReGw4hCnpvt%2BhpYyHWRMQKM6ELORBTKJaB9nx9qhepeqKIFX%2Bl2OparWDu8oGA2kitlDBnJuUCyBkgi4%2F74ESj1cluTgs90HpZS%2BGQJE&X-Amz-Signature=98d8d93dfa934d76b8cdcc3cb9322f6fe25a7fbc4ca935123cebbe6f0faa0b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKJ62M4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzp3oGavmyp8KDzj%2BK694d6tjvlT8IeFNJBsfl1ye5uAiEA8bcVTHyoYM%2FFFEkGBGqlz6KHOtk7mlfhdOEMmSkujMUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxET5LgWMVC06U53ircA9AqpcFWu8ssxNAwfffocWVKYI07CH1C3MpRne87gD%2FbpcdpTU9%2FLaWDTD4W2mfNjxPflvyQ2TdSM8hGiO6TmFH4l2YIQUmOsCn6UdPQQ5369kbLIBvavzjtObXkACJ%2FxbuuPaotYRenuPYdoIcVZwFmKUC5eLM3oif919lA8DvYiKPh8Wm3mBfKVcufZBg%2F7%2FROwpRdIu9NN72fIGH6j0FiYgiyYCWRb%2BPTMRbGjI2ghVMdETtXpOAYxA0Y8jaYKfUz1ZnjMP9iCSrHcWeGyRKHeY%2FGyxwcXNPee3tbsF1VdCz7uxqcUFnm2yMEAEMD1YIDio2Mb5OcGuFY8e60RUsNpdx9QqF%2FbZLaTJLH6YwTkn0bFpEGHE%2BOCKhdmLENZljO3Dx1BEdmC9F3w58w1Om91YsIHRjkVBRhbj3AVL%2BMfwtvWDwRvMNVAobcmuefrjl3XaekWL9crxF0D0no4eyWBHLpXJAC7ywLcphTEdm8JI1crU4K5OpooiW%2B36uZDDuvgwGNAC8%2BwTHKuhTDtQx6AamtR9EItGg%2B5zUXf%2FXRafioi6BZXYmZAqOQW6aeHmE7eekawKwL03itCMGXC1GnFs1qhYWfGvCiFQimfqr7ll46r7TBt6za%2BSOdMJCJ18IGOqUBVQfB3Bd5bXT%2BHwCpIsILQ2jB0RmYhCL5DukMgnr5mizPd1BKIVP4NaYMo9J4nnksq0pxOcUHAWsPNIe7zUyU%2FVSgdUjbEAff2AASB0yxPP%2BEQ9RSnKBzReGw4hCnpvt%2BhpYyHWRMQKM6ELORBTKJaB9nx9qhepeqKIFX%2Bl2OparWDu8oGA2kitlDBnJuUCyBkgi4%2F74ESj1cluTgs90HpZS%2BGQJE&X-Amz-Signature=5d14b6a5b3b084eda33c63f59a0a1a59aa2dd484289252e241130535b85937bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKJ62M4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzp3oGavmyp8KDzj%2BK694d6tjvlT8IeFNJBsfl1ye5uAiEA8bcVTHyoYM%2FFFEkGBGqlz6KHOtk7mlfhdOEMmSkujMUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxET5LgWMVC06U53ircA9AqpcFWu8ssxNAwfffocWVKYI07CH1C3MpRne87gD%2FbpcdpTU9%2FLaWDTD4W2mfNjxPflvyQ2TdSM8hGiO6TmFH4l2YIQUmOsCn6UdPQQ5369kbLIBvavzjtObXkACJ%2FxbuuPaotYRenuPYdoIcVZwFmKUC5eLM3oif919lA8DvYiKPh8Wm3mBfKVcufZBg%2F7%2FROwpRdIu9NN72fIGH6j0FiYgiyYCWRb%2BPTMRbGjI2ghVMdETtXpOAYxA0Y8jaYKfUz1ZnjMP9iCSrHcWeGyRKHeY%2FGyxwcXNPee3tbsF1VdCz7uxqcUFnm2yMEAEMD1YIDio2Mb5OcGuFY8e60RUsNpdx9QqF%2FbZLaTJLH6YwTkn0bFpEGHE%2BOCKhdmLENZljO3Dx1BEdmC9F3w58w1Om91YsIHRjkVBRhbj3AVL%2BMfwtvWDwRvMNVAobcmuefrjl3XaekWL9crxF0D0no4eyWBHLpXJAC7ywLcphTEdm8JI1crU4K5OpooiW%2B36uZDDuvgwGNAC8%2BwTHKuhTDtQx6AamtR9EItGg%2B5zUXf%2FXRafioi6BZXYmZAqOQW6aeHmE7eekawKwL03itCMGXC1GnFs1qhYWfGvCiFQimfqr7ll46r7TBt6za%2BSOdMJCJ18IGOqUBVQfB3Bd5bXT%2BHwCpIsILQ2jB0RmYhCL5DukMgnr5mizPd1BKIVP4NaYMo9J4nnksq0pxOcUHAWsPNIe7zUyU%2FVSgdUjbEAff2AASB0yxPP%2BEQ9RSnKBzReGw4hCnpvt%2BhpYyHWRMQKM6ELORBTKJaB9nx9qhepeqKIFX%2Bl2OparWDu8oGA2kitlDBnJuUCyBkgi4%2F74ESj1cluTgs90HpZS%2BGQJE&X-Amz-Signature=8db4c346ee5ada3981dfd1051c1916d996b2cef3f56182d33b3a3b36fe2a6156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKJ62M4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzp3oGavmyp8KDzj%2BK694d6tjvlT8IeFNJBsfl1ye5uAiEA8bcVTHyoYM%2FFFEkGBGqlz6KHOtk7mlfhdOEMmSkujMUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxET5LgWMVC06U53ircA9AqpcFWu8ssxNAwfffocWVKYI07CH1C3MpRne87gD%2FbpcdpTU9%2FLaWDTD4W2mfNjxPflvyQ2TdSM8hGiO6TmFH4l2YIQUmOsCn6UdPQQ5369kbLIBvavzjtObXkACJ%2FxbuuPaotYRenuPYdoIcVZwFmKUC5eLM3oif919lA8DvYiKPh8Wm3mBfKVcufZBg%2F7%2FROwpRdIu9NN72fIGH6j0FiYgiyYCWRb%2BPTMRbGjI2ghVMdETtXpOAYxA0Y8jaYKfUz1ZnjMP9iCSrHcWeGyRKHeY%2FGyxwcXNPee3tbsF1VdCz7uxqcUFnm2yMEAEMD1YIDio2Mb5OcGuFY8e60RUsNpdx9QqF%2FbZLaTJLH6YwTkn0bFpEGHE%2BOCKhdmLENZljO3Dx1BEdmC9F3w58w1Om91YsIHRjkVBRhbj3AVL%2BMfwtvWDwRvMNVAobcmuefrjl3XaekWL9crxF0D0no4eyWBHLpXJAC7ywLcphTEdm8JI1crU4K5OpooiW%2B36uZDDuvgwGNAC8%2BwTHKuhTDtQx6AamtR9EItGg%2B5zUXf%2FXRafioi6BZXYmZAqOQW6aeHmE7eekawKwL03itCMGXC1GnFs1qhYWfGvCiFQimfqr7ll46r7TBt6za%2BSOdMJCJ18IGOqUBVQfB3Bd5bXT%2BHwCpIsILQ2jB0RmYhCL5DukMgnr5mizPd1BKIVP4NaYMo9J4nnksq0pxOcUHAWsPNIe7zUyU%2FVSgdUjbEAff2AASB0yxPP%2BEQ9RSnKBzReGw4hCnpvt%2BhpYyHWRMQKM6ELORBTKJaB9nx9qhepeqKIFX%2Bl2OparWDu8oGA2kitlDBnJuUCyBkgi4%2F74ESj1cluTgs90HpZS%2BGQJE&X-Amz-Signature=7a670c74d775f76d7bd9d6044196cc34159d7e0a4f2f7226201d1c8b98a54c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
