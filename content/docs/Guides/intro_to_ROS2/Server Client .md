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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466352XO3II%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIRen4uG6aUOlQ45Tc3ZaYGYXl5MwRUOHyfPBfjJsFAIhAP4ZgdRACoylsygyOB56ErjpxhesKeyv8DTHoMMhL9dJKv8DCFMQABoMNjM3NDIzMTgzODA1IgwUpMVf8vEGQI7M1pQq3APOMY2NLkwrvPb8CREeh%2BLk3ZNFf%2FNvhEWtjHbHCULUu%2F5jyBGG%2FDmOli3a0AODx3IbfdqfljmNgIw4OgKPnQ%2Fv36%2BSvmblEiVPGA8IXXpcSN%2FSmFqOY0cFux2zvwfaN9y%2BwYoV8ie7u5mpZHvI2NEAM4%2FJcCfjRJEOogkHpvo%2F%2Bjny4VJPxriiw1BIBxCcjPb4xFnWpeCbnxdzBXJYuy60YaMiVHYJ7w4CPCBp5NDrvEf0uDJFOxs0dzC5cVnrz2myFnBRD085mVvlC%2BohNAUm38b58NmB26x3847BNRV3zD73b8f2Qo5%2FDpAJEEvA8Lp26to%2F9pNuvFvRkFPkFHisyE%2BwU8WztRUo9vyTu%2BHQBkDhcSD%2BDGEJOCtQ0q5hOXhH5VixRmLjNRZsfbDH54qj8LEVr5W429Q5UvIB9RtTmqDTtIH4uENamfpApAHUQmTrZkwjtgfsdo%2FMWZaLauzI%2FnCiU%2BM4uA53fPE33vMbUIVPmw1ylx0bbWhNQZmcBzHUNJkfErVg6RO%2FfYkVuwNkGBTRi77%2FUwSgUPSg8%2B5LD%2FtjNXcQlSkapEWs8J%2BVRfD5E8G%2Bb7I0R4P4jBG9BNjJihBlzY7XRJahi8%2FvwwlAOEE4FN8YnkI7H%2BTKKDCe6cy%2FBjqkAWwGxRltBbz5SJWatPj5vB%2FJ%2BXkB9S6zyQVZuddZFOS%2FnX42g8QqEUHv7l1VEtAq3hz74iMqjeoqDMipjDEFdTAqINC%2Fj%2FOE1DGdnhEEtW8WVrrVxLCmpFOe23DMeD0Tf1XQJotr53543FqrKaMRB4VL9WsgFgBJLhNCbV7zSh9nxYT7MktruHd8d2yVgtCB96UbmhuLegJDHtUYCF8gxfo1l4s4&X-Amz-Signature=0ed7b46a4ab844639088b8d2a2c453a3b99316f515ccc7db6e08f438350c5da0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466352XO3II%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIRen4uG6aUOlQ45Tc3ZaYGYXl5MwRUOHyfPBfjJsFAIhAP4ZgdRACoylsygyOB56ErjpxhesKeyv8DTHoMMhL9dJKv8DCFMQABoMNjM3NDIzMTgzODA1IgwUpMVf8vEGQI7M1pQq3APOMY2NLkwrvPb8CREeh%2BLk3ZNFf%2FNvhEWtjHbHCULUu%2F5jyBGG%2FDmOli3a0AODx3IbfdqfljmNgIw4OgKPnQ%2Fv36%2BSvmblEiVPGA8IXXpcSN%2FSmFqOY0cFux2zvwfaN9y%2BwYoV8ie7u5mpZHvI2NEAM4%2FJcCfjRJEOogkHpvo%2F%2Bjny4VJPxriiw1BIBxCcjPb4xFnWpeCbnxdzBXJYuy60YaMiVHYJ7w4CPCBp5NDrvEf0uDJFOxs0dzC5cVnrz2myFnBRD085mVvlC%2BohNAUm38b58NmB26x3847BNRV3zD73b8f2Qo5%2FDpAJEEvA8Lp26to%2F9pNuvFvRkFPkFHisyE%2BwU8WztRUo9vyTu%2BHQBkDhcSD%2BDGEJOCtQ0q5hOXhH5VixRmLjNRZsfbDH54qj8LEVr5W429Q5UvIB9RtTmqDTtIH4uENamfpApAHUQmTrZkwjtgfsdo%2FMWZaLauzI%2FnCiU%2BM4uA53fPE33vMbUIVPmw1ylx0bbWhNQZmcBzHUNJkfErVg6RO%2FfYkVuwNkGBTRi77%2FUwSgUPSg8%2B5LD%2FtjNXcQlSkapEWs8J%2BVRfD5E8G%2Bb7I0R4P4jBG9BNjJihBlzY7XRJahi8%2FvwwlAOEE4FN8YnkI7H%2BTKKDCe6cy%2FBjqkAWwGxRltBbz5SJWatPj5vB%2FJ%2BXkB9S6zyQVZuddZFOS%2FnX42g8QqEUHv7l1VEtAq3hz74iMqjeoqDMipjDEFdTAqINC%2Fj%2FOE1DGdnhEEtW8WVrrVxLCmpFOe23DMeD0Tf1XQJotr53543FqrKaMRB4VL9WsgFgBJLhNCbV7zSh9nxYT7MktruHd8d2yVgtCB96UbmhuLegJDHtUYCF8gxfo1l4s4&X-Amz-Signature=e2f3b3689bfdc3781c62b21e7f7789cdf2c7e22b023c7d48085d8e0f3750b61a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466352XO3II%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIRen4uG6aUOlQ45Tc3ZaYGYXl5MwRUOHyfPBfjJsFAIhAP4ZgdRACoylsygyOB56ErjpxhesKeyv8DTHoMMhL9dJKv8DCFMQABoMNjM3NDIzMTgzODA1IgwUpMVf8vEGQI7M1pQq3APOMY2NLkwrvPb8CREeh%2BLk3ZNFf%2FNvhEWtjHbHCULUu%2F5jyBGG%2FDmOli3a0AODx3IbfdqfljmNgIw4OgKPnQ%2Fv36%2BSvmblEiVPGA8IXXpcSN%2FSmFqOY0cFux2zvwfaN9y%2BwYoV8ie7u5mpZHvI2NEAM4%2FJcCfjRJEOogkHpvo%2F%2Bjny4VJPxriiw1BIBxCcjPb4xFnWpeCbnxdzBXJYuy60YaMiVHYJ7w4CPCBp5NDrvEf0uDJFOxs0dzC5cVnrz2myFnBRD085mVvlC%2BohNAUm38b58NmB26x3847BNRV3zD73b8f2Qo5%2FDpAJEEvA8Lp26to%2F9pNuvFvRkFPkFHisyE%2BwU8WztRUo9vyTu%2BHQBkDhcSD%2BDGEJOCtQ0q5hOXhH5VixRmLjNRZsfbDH54qj8LEVr5W429Q5UvIB9RtTmqDTtIH4uENamfpApAHUQmTrZkwjtgfsdo%2FMWZaLauzI%2FnCiU%2BM4uA53fPE33vMbUIVPmw1ylx0bbWhNQZmcBzHUNJkfErVg6RO%2FfYkVuwNkGBTRi77%2FUwSgUPSg8%2B5LD%2FtjNXcQlSkapEWs8J%2BVRfD5E8G%2Bb7I0R4P4jBG9BNjJihBlzY7XRJahi8%2FvwwlAOEE4FN8YnkI7H%2BTKKDCe6cy%2FBjqkAWwGxRltBbz5SJWatPj5vB%2FJ%2BXkB9S6zyQVZuddZFOS%2FnX42g8QqEUHv7l1VEtAq3hz74iMqjeoqDMipjDEFdTAqINC%2Fj%2FOE1DGdnhEEtW8WVrrVxLCmpFOe23DMeD0Tf1XQJotr53543FqrKaMRB4VL9WsgFgBJLhNCbV7zSh9nxYT7MktruHd8d2yVgtCB96UbmhuLegJDHtUYCF8gxfo1l4s4&X-Amz-Signature=99f08991b34af44bb19d50b6db8c823200aa92ca370c6edb0d57f3fbbaf4deb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466352XO3II%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIRen4uG6aUOlQ45Tc3ZaYGYXl5MwRUOHyfPBfjJsFAIhAP4ZgdRACoylsygyOB56ErjpxhesKeyv8DTHoMMhL9dJKv8DCFMQABoMNjM3NDIzMTgzODA1IgwUpMVf8vEGQI7M1pQq3APOMY2NLkwrvPb8CREeh%2BLk3ZNFf%2FNvhEWtjHbHCULUu%2F5jyBGG%2FDmOli3a0AODx3IbfdqfljmNgIw4OgKPnQ%2Fv36%2BSvmblEiVPGA8IXXpcSN%2FSmFqOY0cFux2zvwfaN9y%2BwYoV8ie7u5mpZHvI2NEAM4%2FJcCfjRJEOogkHpvo%2F%2Bjny4VJPxriiw1BIBxCcjPb4xFnWpeCbnxdzBXJYuy60YaMiVHYJ7w4CPCBp5NDrvEf0uDJFOxs0dzC5cVnrz2myFnBRD085mVvlC%2BohNAUm38b58NmB26x3847BNRV3zD73b8f2Qo5%2FDpAJEEvA8Lp26to%2F9pNuvFvRkFPkFHisyE%2BwU8WztRUo9vyTu%2BHQBkDhcSD%2BDGEJOCtQ0q5hOXhH5VixRmLjNRZsfbDH54qj8LEVr5W429Q5UvIB9RtTmqDTtIH4uENamfpApAHUQmTrZkwjtgfsdo%2FMWZaLauzI%2FnCiU%2BM4uA53fPE33vMbUIVPmw1ylx0bbWhNQZmcBzHUNJkfErVg6RO%2FfYkVuwNkGBTRi77%2FUwSgUPSg8%2B5LD%2FtjNXcQlSkapEWs8J%2BVRfD5E8G%2Bb7I0R4P4jBG9BNjJihBlzY7XRJahi8%2FvwwlAOEE4FN8YnkI7H%2BTKKDCe6cy%2FBjqkAWwGxRltBbz5SJWatPj5vB%2FJ%2BXkB9S6zyQVZuddZFOS%2FnX42g8QqEUHv7l1VEtAq3hz74iMqjeoqDMipjDEFdTAqINC%2Fj%2FOE1DGdnhEEtW8WVrrVxLCmpFOe23DMeD0Tf1XQJotr53543FqrKaMRB4VL9WsgFgBJLhNCbV7zSh9nxYT7MktruHd8d2yVgtCB96UbmhuLegJDHtUYCF8gxfo1l4s4&X-Amz-Signature=67ec653b0b2a1910f2f734f5458be3ef78861522c9519af455ea3b63321521b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466352XO3II%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIRen4uG6aUOlQ45Tc3ZaYGYXl5MwRUOHyfPBfjJsFAIhAP4ZgdRACoylsygyOB56ErjpxhesKeyv8DTHoMMhL9dJKv8DCFMQABoMNjM3NDIzMTgzODA1IgwUpMVf8vEGQI7M1pQq3APOMY2NLkwrvPb8CREeh%2BLk3ZNFf%2FNvhEWtjHbHCULUu%2F5jyBGG%2FDmOli3a0AODx3IbfdqfljmNgIw4OgKPnQ%2Fv36%2BSvmblEiVPGA8IXXpcSN%2FSmFqOY0cFux2zvwfaN9y%2BwYoV8ie7u5mpZHvI2NEAM4%2FJcCfjRJEOogkHpvo%2F%2Bjny4VJPxriiw1BIBxCcjPb4xFnWpeCbnxdzBXJYuy60YaMiVHYJ7w4CPCBp5NDrvEf0uDJFOxs0dzC5cVnrz2myFnBRD085mVvlC%2BohNAUm38b58NmB26x3847BNRV3zD73b8f2Qo5%2FDpAJEEvA8Lp26to%2F9pNuvFvRkFPkFHisyE%2BwU8WztRUo9vyTu%2BHQBkDhcSD%2BDGEJOCtQ0q5hOXhH5VixRmLjNRZsfbDH54qj8LEVr5W429Q5UvIB9RtTmqDTtIH4uENamfpApAHUQmTrZkwjtgfsdo%2FMWZaLauzI%2FnCiU%2BM4uA53fPE33vMbUIVPmw1ylx0bbWhNQZmcBzHUNJkfErVg6RO%2FfYkVuwNkGBTRi77%2FUwSgUPSg8%2B5LD%2FtjNXcQlSkapEWs8J%2BVRfD5E8G%2Bb7I0R4P4jBG9BNjJihBlzY7XRJahi8%2FvwwlAOEE4FN8YnkI7H%2BTKKDCe6cy%2FBjqkAWwGxRltBbz5SJWatPj5vB%2FJ%2BXkB9S6zyQVZuddZFOS%2FnX42g8QqEUHv7l1VEtAq3hz74iMqjeoqDMipjDEFdTAqINC%2Fj%2FOE1DGdnhEEtW8WVrrVxLCmpFOe23DMeD0Tf1XQJotr53543FqrKaMRB4VL9WsgFgBJLhNCbV7zSh9nxYT7MktruHd8d2yVgtCB96UbmhuLegJDHtUYCF8gxfo1l4s4&X-Amz-Signature=1bdacff92c20b098edd94b799bc6fdae164f0be86b002ef044500f19730dd884&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
