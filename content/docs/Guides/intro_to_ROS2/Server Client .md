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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AROPSJC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXLZXNXfRJhPEo9ad6Sv6ZjbLTKtRs1K5wh77%2B9QB5RAiApoq3pznPkEuVUIsEEV7JR%2FDaA%2F8SDFb2gI3Lms9Kz%2FSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7bnBz6mwe%2FgJRU1KtwD3gqEQ6n3jjHAHXA9%2FbZOgoHYTbIxWH4TgYM18UYsw5FQVoMfeImQ6wz8fSFDcKZXXO9bHQmjdxVImzdUVRs9l0fxe%2FvhqdSt0XfN51VE9dejEUdansojOK8bIe3vgEYa%2F2Kc8TPxeiKMVdRvL6ergyLhh1lkShV%2BrkAl5%2BVGfYr%2BWiWSCebPhvHalnkAVPAd9IuUt8w5ZnCE%2FFhh66bOS%2F9U6haBLYUusN4o%2BbeixIKBChT3z%2FKsRe%2BvjGS%2Fcs2FYPVfNKwu9BB5%2BM0HOGke627ZvqGht9tX%2BZbA7KsHM75Y1PtdTeLeBrSHHaCvnZ8lE3MuAM9FfYpijfpZr0D82mI1AhC6FxiGifgu7l22ugeM4ws7nIfq56pNKVbdUPrqnKORMHCNdK9zNFilBDqiDq07w%2B5XfqfnTUIw2%2FgAIN6OU5YAdh3%2BFmEL89Jiyr%2BtzYOItMwXxpw4sgLiNSid7ARx8j%2BiDOuZicti3TpzimMGMTcfBiTuK68VbUWUp74rjUomCCDfGIAkukWjIqNtakQBDStuf%2BcmdjJTkO%2B2CsnGQV9Lee6T%2ByrE%2BjycjFT4z53BESH76MaH0M09Aq1p6mmr9Ggji85X2au9neXEARX7e66%2FpaK%2FH%2Ba5AaAwwOTxvgY6pgFYJ4UKAm7IHCAxzU3RzLWYj9Zmgara02tRIHWOCarre%2FGGrzMPF%2FSePr3kRV6taqaMsWdzMtahUSGTzZbMKv%2FxaSU7CPx51N4TeX1jBWYwHh%2BqHH19AzcZMxkn6YSYPvY7WE3ojiCswp3ctJucXliEfjpx33fP3O2KP8vgXdSuKKfD6K2ZPq0%2FjprSV%2FIQ1kAEguaoa0bNBA5LpM7qo7lrKudqf%2BcC&X-Amz-Signature=f1c7e64b60214b493f8571660a87bdc9ba69da53af4349defd27aac578e762fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AROPSJC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXLZXNXfRJhPEo9ad6Sv6ZjbLTKtRs1K5wh77%2B9QB5RAiApoq3pznPkEuVUIsEEV7JR%2FDaA%2F8SDFb2gI3Lms9Kz%2FSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7bnBz6mwe%2FgJRU1KtwD3gqEQ6n3jjHAHXA9%2FbZOgoHYTbIxWH4TgYM18UYsw5FQVoMfeImQ6wz8fSFDcKZXXO9bHQmjdxVImzdUVRs9l0fxe%2FvhqdSt0XfN51VE9dejEUdansojOK8bIe3vgEYa%2F2Kc8TPxeiKMVdRvL6ergyLhh1lkShV%2BrkAl5%2BVGfYr%2BWiWSCebPhvHalnkAVPAd9IuUt8w5ZnCE%2FFhh66bOS%2F9U6haBLYUusN4o%2BbeixIKBChT3z%2FKsRe%2BvjGS%2Fcs2FYPVfNKwu9BB5%2BM0HOGke627ZvqGht9tX%2BZbA7KsHM75Y1PtdTeLeBrSHHaCvnZ8lE3MuAM9FfYpijfpZr0D82mI1AhC6FxiGifgu7l22ugeM4ws7nIfq56pNKVbdUPrqnKORMHCNdK9zNFilBDqiDq07w%2B5XfqfnTUIw2%2FgAIN6OU5YAdh3%2BFmEL89Jiyr%2BtzYOItMwXxpw4sgLiNSid7ARx8j%2BiDOuZicti3TpzimMGMTcfBiTuK68VbUWUp74rjUomCCDfGIAkukWjIqNtakQBDStuf%2BcmdjJTkO%2B2CsnGQV9Lee6T%2ByrE%2BjycjFT4z53BESH76MaH0M09Aq1p6mmr9Ggji85X2au9neXEARX7e66%2FpaK%2FH%2Ba5AaAwwOTxvgY6pgFYJ4UKAm7IHCAxzU3RzLWYj9Zmgara02tRIHWOCarre%2FGGrzMPF%2FSePr3kRV6taqaMsWdzMtahUSGTzZbMKv%2FxaSU7CPx51N4TeX1jBWYwHh%2BqHH19AzcZMxkn6YSYPvY7WE3ojiCswp3ctJucXliEfjpx33fP3O2KP8vgXdSuKKfD6K2ZPq0%2FjprSV%2FIQ1kAEguaoa0bNBA5LpM7qo7lrKudqf%2BcC&X-Amz-Signature=d54adb3350d2ddb92373ac6f7753f1b4788ebd341625b706bf66586fff74dabb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AROPSJC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXLZXNXfRJhPEo9ad6Sv6ZjbLTKtRs1K5wh77%2B9QB5RAiApoq3pznPkEuVUIsEEV7JR%2FDaA%2F8SDFb2gI3Lms9Kz%2FSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7bnBz6mwe%2FgJRU1KtwD3gqEQ6n3jjHAHXA9%2FbZOgoHYTbIxWH4TgYM18UYsw5FQVoMfeImQ6wz8fSFDcKZXXO9bHQmjdxVImzdUVRs9l0fxe%2FvhqdSt0XfN51VE9dejEUdansojOK8bIe3vgEYa%2F2Kc8TPxeiKMVdRvL6ergyLhh1lkShV%2BrkAl5%2BVGfYr%2BWiWSCebPhvHalnkAVPAd9IuUt8w5ZnCE%2FFhh66bOS%2F9U6haBLYUusN4o%2BbeixIKBChT3z%2FKsRe%2BvjGS%2Fcs2FYPVfNKwu9BB5%2BM0HOGke627ZvqGht9tX%2BZbA7KsHM75Y1PtdTeLeBrSHHaCvnZ8lE3MuAM9FfYpijfpZr0D82mI1AhC6FxiGifgu7l22ugeM4ws7nIfq56pNKVbdUPrqnKORMHCNdK9zNFilBDqiDq07w%2B5XfqfnTUIw2%2FgAIN6OU5YAdh3%2BFmEL89Jiyr%2BtzYOItMwXxpw4sgLiNSid7ARx8j%2BiDOuZicti3TpzimMGMTcfBiTuK68VbUWUp74rjUomCCDfGIAkukWjIqNtakQBDStuf%2BcmdjJTkO%2B2CsnGQV9Lee6T%2ByrE%2BjycjFT4z53BESH76MaH0M09Aq1p6mmr9Ggji85X2au9neXEARX7e66%2FpaK%2FH%2Ba5AaAwwOTxvgY6pgFYJ4UKAm7IHCAxzU3RzLWYj9Zmgara02tRIHWOCarre%2FGGrzMPF%2FSePr3kRV6taqaMsWdzMtahUSGTzZbMKv%2FxaSU7CPx51N4TeX1jBWYwHh%2BqHH19AzcZMxkn6YSYPvY7WE3ojiCswp3ctJucXliEfjpx33fP3O2KP8vgXdSuKKfD6K2ZPq0%2FjprSV%2FIQ1kAEguaoa0bNBA5LpM7qo7lrKudqf%2BcC&X-Amz-Signature=8c4cb7cd1c47944fb3e43bbb2e1f56e849b2badc2bf7e5e11ca4e65a6cdbcae5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AROPSJC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXLZXNXfRJhPEo9ad6Sv6ZjbLTKtRs1K5wh77%2B9QB5RAiApoq3pznPkEuVUIsEEV7JR%2FDaA%2F8SDFb2gI3Lms9Kz%2FSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7bnBz6mwe%2FgJRU1KtwD3gqEQ6n3jjHAHXA9%2FbZOgoHYTbIxWH4TgYM18UYsw5FQVoMfeImQ6wz8fSFDcKZXXO9bHQmjdxVImzdUVRs9l0fxe%2FvhqdSt0XfN51VE9dejEUdansojOK8bIe3vgEYa%2F2Kc8TPxeiKMVdRvL6ergyLhh1lkShV%2BrkAl5%2BVGfYr%2BWiWSCebPhvHalnkAVPAd9IuUt8w5ZnCE%2FFhh66bOS%2F9U6haBLYUusN4o%2BbeixIKBChT3z%2FKsRe%2BvjGS%2Fcs2FYPVfNKwu9BB5%2BM0HOGke627ZvqGht9tX%2BZbA7KsHM75Y1PtdTeLeBrSHHaCvnZ8lE3MuAM9FfYpijfpZr0D82mI1AhC6FxiGifgu7l22ugeM4ws7nIfq56pNKVbdUPrqnKORMHCNdK9zNFilBDqiDq07w%2B5XfqfnTUIw2%2FgAIN6OU5YAdh3%2BFmEL89Jiyr%2BtzYOItMwXxpw4sgLiNSid7ARx8j%2BiDOuZicti3TpzimMGMTcfBiTuK68VbUWUp74rjUomCCDfGIAkukWjIqNtakQBDStuf%2BcmdjJTkO%2B2CsnGQV9Lee6T%2ByrE%2BjycjFT4z53BESH76MaH0M09Aq1p6mmr9Ggji85X2au9neXEARX7e66%2FpaK%2FH%2Ba5AaAwwOTxvgY6pgFYJ4UKAm7IHCAxzU3RzLWYj9Zmgara02tRIHWOCarre%2FGGrzMPF%2FSePr3kRV6taqaMsWdzMtahUSGTzZbMKv%2FxaSU7CPx51N4TeX1jBWYwHh%2BqHH19AzcZMxkn6YSYPvY7WE3ojiCswp3ctJucXliEfjpx33fP3O2KP8vgXdSuKKfD6K2ZPq0%2FjprSV%2FIQ1kAEguaoa0bNBA5LpM7qo7lrKudqf%2BcC&X-Amz-Signature=aab0b35d5e039693037b6d7be56daab32ea847ec6b0d4fe0d31d480aeee71c29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AROPSJC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEXLZXNXfRJhPEo9ad6Sv6ZjbLTKtRs1K5wh77%2B9QB5RAiApoq3pznPkEuVUIsEEV7JR%2FDaA%2F8SDFb2gI3Lms9Kz%2FSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7bnBz6mwe%2FgJRU1KtwD3gqEQ6n3jjHAHXA9%2FbZOgoHYTbIxWH4TgYM18UYsw5FQVoMfeImQ6wz8fSFDcKZXXO9bHQmjdxVImzdUVRs9l0fxe%2FvhqdSt0XfN51VE9dejEUdansojOK8bIe3vgEYa%2F2Kc8TPxeiKMVdRvL6ergyLhh1lkShV%2BrkAl5%2BVGfYr%2BWiWSCebPhvHalnkAVPAd9IuUt8w5ZnCE%2FFhh66bOS%2F9U6haBLYUusN4o%2BbeixIKBChT3z%2FKsRe%2BvjGS%2Fcs2FYPVfNKwu9BB5%2BM0HOGke627ZvqGht9tX%2BZbA7KsHM75Y1PtdTeLeBrSHHaCvnZ8lE3MuAM9FfYpijfpZr0D82mI1AhC6FxiGifgu7l22ugeM4ws7nIfq56pNKVbdUPrqnKORMHCNdK9zNFilBDqiDq07w%2B5XfqfnTUIw2%2FgAIN6OU5YAdh3%2BFmEL89Jiyr%2BtzYOItMwXxpw4sgLiNSid7ARx8j%2BiDOuZicti3TpzimMGMTcfBiTuK68VbUWUp74rjUomCCDfGIAkukWjIqNtakQBDStuf%2BcmdjJTkO%2B2CsnGQV9Lee6T%2ByrE%2BjycjFT4z53BESH76MaH0M09Aq1p6mmr9Ggji85X2au9neXEARX7e66%2FpaK%2FH%2Ba5AaAwwOTxvgY6pgFYJ4UKAm7IHCAxzU3RzLWYj9Zmgara02tRIHWOCarre%2FGGrzMPF%2FSePr3kRV6taqaMsWdzMtahUSGTzZbMKv%2FxaSU7CPx51N4TeX1jBWYwHh%2BqHH19AzcZMxkn6YSYPvY7WE3ojiCswp3ctJucXliEfjpx33fP3O2KP8vgXdSuKKfD6K2ZPq0%2FjprSV%2FIQ1kAEguaoa0bNBA5LpM7qo7lrKudqf%2BcC&X-Amz-Signature=c310a2276248afa53d6ea410f16dd63b65904a7a08a99e33bde05cc9e4fb733a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
