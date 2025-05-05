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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIK4S7PT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEuQ84%2FoGkomvA6Hh9tOa2h%2B98rgroVhv096gT7xEXaAiEAjmPusc6fljJkgg81DlN9U7QeDfm%2F9EL8ZWpSP4nHzmcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMHt%2B2ATKrqKmTkLWyrcAxzrgwvz1bseLT7yokUb59OindQw%2F6%2Bolv87ka8x53Hdws%2FQcjYOtXpRdR0CIJk0JsAJ%2BkHrTB%2F0nkr5sRG5oQit8yNZXT8zd7hxhRcHFblU3wu92xwNx%2BLuyCFPs9cH0f8qkwxm4krff292cppobBaTPFwMn1t2gvyG8IOPl77h4z1Pbw9aLwYWsSH3BD%2FlSoQejyCFB1fHgGNUckpLB%2BbgRZMeguIvJgUZPTKKQVnwuDoFJqXTuQPG%2FrXWdZMjVvcysRspkeg4lg7EH0kiparaieDVymiiDhC1c763aVezUgvOIcMA9XcJepuIdQYCmyRnwMjUy2H7T8mpXvSTf3cBFxJ7L728l8NsHlGyrUIcp7bpGYQ1VXR0VDIKO0QMNWe%2FqxXbXS51idwzyUvdPtO81WB5Nvr4%2B%2BI7QMUPCM9VHdK6KmjjFTiC5phmXohhA%2BqXwV1iGZduowB6WuLv%2FpZJ8wCVEf8yoJ8wcKML9x6FodMEk3xy16%2F6RU7rLAo7teRJDkE70W5TsDLPe%2BV%2FQkAxVH4F6x0L1yn%2BxP4of4yfCHDJA9d1X2fCxPVN7uSR9C988Lmn97XRhg5KcvZHiwBd90Io0%2FRyOI2Mq%2B3HA4ECu3R2v2pl5w6VGZfBMOyu4sAGOqUB%2BHa6Qt3erHGqpcVkpvG0G74IXiaOmQN%2BS3fF3gV%2BVvecEzfmTEAr2whD05NkaWhyZz%2BIFrM6Dz3%2F7dFjTqDbSAQSdvaydYg4J8I1%2FvduJx6auBlmQ3RGKa%2Fh%2BFzfmwYQhh8Oa4wxP5lT5kDrsEqU30oMBNo73H9HjQUYbV6j4VxuhDTbI%2BtwutDxoJEE2d2muDY2fpyqzYheiTe31gYKbeotTV9R&X-Amz-Signature=c2c1358636c131a8423cdf3015324531c778c5c3858812524a75ef4dd7a05b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIK4S7PT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEuQ84%2FoGkomvA6Hh9tOa2h%2B98rgroVhv096gT7xEXaAiEAjmPusc6fljJkgg81DlN9U7QeDfm%2F9EL8ZWpSP4nHzmcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMHt%2B2ATKrqKmTkLWyrcAxzrgwvz1bseLT7yokUb59OindQw%2F6%2Bolv87ka8x53Hdws%2FQcjYOtXpRdR0CIJk0JsAJ%2BkHrTB%2F0nkr5sRG5oQit8yNZXT8zd7hxhRcHFblU3wu92xwNx%2BLuyCFPs9cH0f8qkwxm4krff292cppobBaTPFwMn1t2gvyG8IOPl77h4z1Pbw9aLwYWsSH3BD%2FlSoQejyCFB1fHgGNUckpLB%2BbgRZMeguIvJgUZPTKKQVnwuDoFJqXTuQPG%2FrXWdZMjVvcysRspkeg4lg7EH0kiparaieDVymiiDhC1c763aVezUgvOIcMA9XcJepuIdQYCmyRnwMjUy2H7T8mpXvSTf3cBFxJ7L728l8NsHlGyrUIcp7bpGYQ1VXR0VDIKO0QMNWe%2FqxXbXS51idwzyUvdPtO81WB5Nvr4%2B%2BI7QMUPCM9VHdK6KmjjFTiC5phmXohhA%2BqXwV1iGZduowB6WuLv%2FpZJ8wCVEf8yoJ8wcKML9x6FodMEk3xy16%2F6RU7rLAo7teRJDkE70W5TsDLPe%2BV%2FQkAxVH4F6x0L1yn%2BxP4of4yfCHDJA9d1X2fCxPVN7uSR9C988Lmn97XRhg5KcvZHiwBd90Io0%2FRyOI2Mq%2B3HA4ECu3R2v2pl5w6VGZfBMOyu4sAGOqUB%2BHa6Qt3erHGqpcVkpvG0G74IXiaOmQN%2BS3fF3gV%2BVvecEzfmTEAr2whD05NkaWhyZz%2BIFrM6Dz3%2F7dFjTqDbSAQSdvaydYg4J8I1%2FvduJx6auBlmQ3RGKa%2Fh%2BFzfmwYQhh8Oa4wxP5lT5kDrsEqU30oMBNo73H9HjQUYbV6j4VxuhDTbI%2BtwutDxoJEE2d2muDY2fpyqzYheiTe31gYKbeotTV9R&X-Amz-Signature=307ca9f094995e76cfb8d35e5075a4587b39f9c711c0d933f61cf7a7173cf80c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIK4S7PT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEuQ84%2FoGkomvA6Hh9tOa2h%2B98rgroVhv096gT7xEXaAiEAjmPusc6fljJkgg81DlN9U7QeDfm%2F9EL8ZWpSP4nHzmcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMHt%2B2ATKrqKmTkLWyrcAxzrgwvz1bseLT7yokUb59OindQw%2F6%2Bolv87ka8x53Hdws%2FQcjYOtXpRdR0CIJk0JsAJ%2BkHrTB%2F0nkr5sRG5oQit8yNZXT8zd7hxhRcHFblU3wu92xwNx%2BLuyCFPs9cH0f8qkwxm4krff292cppobBaTPFwMn1t2gvyG8IOPl77h4z1Pbw9aLwYWsSH3BD%2FlSoQejyCFB1fHgGNUckpLB%2BbgRZMeguIvJgUZPTKKQVnwuDoFJqXTuQPG%2FrXWdZMjVvcysRspkeg4lg7EH0kiparaieDVymiiDhC1c763aVezUgvOIcMA9XcJepuIdQYCmyRnwMjUy2H7T8mpXvSTf3cBFxJ7L728l8NsHlGyrUIcp7bpGYQ1VXR0VDIKO0QMNWe%2FqxXbXS51idwzyUvdPtO81WB5Nvr4%2B%2BI7QMUPCM9VHdK6KmjjFTiC5phmXohhA%2BqXwV1iGZduowB6WuLv%2FpZJ8wCVEf8yoJ8wcKML9x6FodMEk3xy16%2F6RU7rLAo7teRJDkE70W5TsDLPe%2BV%2FQkAxVH4F6x0L1yn%2BxP4of4yfCHDJA9d1X2fCxPVN7uSR9C988Lmn97XRhg5KcvZHiwBd90Io0%2FRyOI2Mq%2B3HA4ECu3R2v2pl5w6VGZfBMOyu4sAGOqUB%2BHa6Qt3erHGqpcVkpvG0G74IXiaOmQN%2BS3fF3gV%2BVvecEzfmTEAr2whD05NkaWhyZz%2BIFrM6Dz3%2F7dFjTqDbSAQSdvaydYg4J8I1%2FvduJx6auBlmQ3RGKa%2Fh%2BFzfmwYQhh8Oa4wxP5lT5kDrsEqU30oMBNo73H9HjQUYbV6j4VxuhDTbI%2BtwutDxoJEE2d2muDY2fpyqzYheiTe31gYKbeotTV9R&X-Amz-Signature=6013b610c92ca0d274a990506d4f0fcffb2cf6fb582a4fe277c005cda44af491&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIK4S7PT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEuQ84%2FoGkomvA6Hh9tOa2h%2B98rgroVhv096gT7xEXaAiEAjmPusc6fljJkgg81DlN9U7QeDfm%2F9EL8ZWpSP4nHzmcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMHt%2B2ATKrqKmTkLWyrcAxzrgwvz1bseLT7yokUb59OindQw%2F6%2Bolv87ka8x53Hdws%2FQcjYOtXpRdR0CIJk0JsAJ%2BkHrTB%2F0nkr5sRG5oQit8yNZXT8zd7hxhRcHFblU3wu92xwNx%2BLuyCFPs9cH0f8qkwxm4krff292cppobBaTPFwMn1t2gvyG8IOPl77h4z1Pbw9aLwYWsSH3BD%2FlSoQejyCFB1fHgGNUckpLB%2BbgRZMeguIvJgUZPTKKQVnwuDoFJqXTuQPG%2FrXWdZMjVvcysRspkeg4lg7EH0kiparaieDVymiiDhC1c763aVezUgvOIcMA9XcJepuIdQYCmyRnwMjUy2H7T8mpXvSTf3cBFxJ7L728l8NsHlGyrUIcp7bpGYQ1VXR0VDIKO0QMNWe%2FqxXbXS51idwzyUvdPtO81WB5Nvr4%2B%2BI7QMUPCM9VHdK6KmjjFTiC5phmXohhA%2BqXwV1iGZduowB6WuLv%2FpZJ8wCVEf8yoJ8wcKML9x6FodMEk3xy16%2F6RU7rLAo7teRJDkE70W5TsDLPe%2BV%2FQkAxVH4F6x0L1yn%2BxP4of4yfCHDJA9d1X2fCxPVN7uSR9C988Lmn97XRhg5KcvZHiwBd90Io0%2FRyOI2Mq%2B3HA4ECu3R2v2pl5w6VGZfBMOyu4sAGOqUB%2BHa6Qt3erHGqpcVkpvG0G74IXiaOmQN%2BS3fF3gV%2BVvecEzfmTEAr2whD05NkaWhyZz%2BIFrM6Dz3%2F7dFjTqDbSAQSdvaydYg4J8I1%2FvduJx6auBlmQ3RGKa%2Fh%2BFzfmwYQhh8Oa4wxP5lT5kDrsEqU30oMBNo73H9HjQUYbV6j4VxuhDTbI%2BtwutDxoJEE2d2muDY2fpyqzYheiTe31gYKbeotTV9R&X-Amz-Signature=a953d810cc85fe0a307746f4d6b2e05e26d736a81fe6b668616ef840f7a30af6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIK4S7PT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEuQ84%2FoGkomvA6Hh9tOa2h%2B98rgroVhv096gT7xEXaAiEAjmPusc6fljJkgg81DlN9U7QeDfm%2F9EL8ZWpSP4nHzmcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMHt%2B2ATKrqKmTkLWyrcAxzrgwvz1bseLT7yokUb59OindQw%2F6%2Bolv87ka8x53Hdws%2FQcjYOtXpRdR0CIJk0JsAJ%2BkHrTB%2F0nkr5sRG5oQit8yNZXT8zd7hxhRcHFblU3wu92xwNx%2BLuyCFPs9cH0f8qkwxm4krff292cppobBaTPFwMn1t2gvyG8IOPl77h4z1Pbw9aLwYWsSH3BD%2FlSoQejyCFB1fHgGNUckpLB%2BbgRZMeguIvJgUZPTKKQVnwuDoFJqXTuQPG%2FrXWdZMjVvcysRspkeg4lg7EH0kiparaieDVymiiDhC1c763aVezUgvOIcMA9XcJepuIdQYCmyRnwMjUy2H7T8mpXvSTf3cBFxJ7L728l8NsHlGyrUIcp7bpGYQ1VXR0VDIKO0QMNWe%2FqxXbXS51idwzyUvdPtO81WB5Nvr4%2B%2BI7QMUPCM9VHdK6KmjjFTiC5phmXohhA%2BqXwV1iGZduowB6WuLv%2FpZJ8wCVEf8yoJ8wcKML9x6FodMEk3xy16%2F6RU7rLAo7teRJDkE70W5TsDLPe%2BV%2FQkAxVH4F6x0L1yn%2BxP4of4yfCHDJA9d1X2fCxPVN7uSR9C988Lmn97XRhg5KcvZHiwBd90Io0%2FRyOI2Mq%2B3HA4ECu3R2v2pl5w6VGZfBMOyu4sAGOqUB%2BHa6Qt3erHGqpcVkpvG0G74IXiaOmQN%2BS3fF3gV%2BVvecEzfmTEAr2whD05NkaWhyZz%2BIFrM6Dz3%2F7dFjTqDbSAQSdvaydYg4J8I1%2FvduJx6auBlmQ3RGKa%2Fh%2BFzfmwYQhh8Oa4wxP5lT5kDrsEqU30oMBNo73H9HjQUYbV6j4VxuhDTbI%2BtwutDxoJEE2d2muDY2fpyqzYheiTe31gYKbeotTV9R&X-Amz-Signature=2c2634c225ade4e15efc1f94377a4625c2e59f7e25070dd31ef41e8579c51cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
