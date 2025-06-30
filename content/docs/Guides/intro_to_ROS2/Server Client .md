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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3OOHOP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwz8muc%2F67BDjCLp6j4E9dPUMolKaU26bHu%2BBh7CJYzAiEAkJtNgS1w23PMhXe%2BW4QMvOrBNi7QhtSzF%2Bb121bVfIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkqEAmGIvsxduRUSyrcAyCwl5j%2Ffr8YkIeBN%2BI9TkE2SVW8x5mDmljw3YI5F9z9o5e2r43%2BoFLaea81KN45u9ZWvYjN1bxxXry%2BK3qJf44mP%2Bob1p2h0oKrHkDHrQEk3X9uNuazsjlV6l9TEQhDfXAKwQcIwVIxBuXQbLZ6LEZbSu6okkNajftTXuitCwgIeQPMYRzTH8qU4AwnINCUd3OsoRMJjeLGRIGdqZIzpvNsvhKrpyBal27g5KxRkkRyBQLe%2Bi%2FcDFEPP%2FNtqLH5L8RsIas8EePA9fQpBjBN5oT14uWaM7EY0zgYn8HuSI4OywJRhlPbRNadGWMTgu8e3n074SoLHmJLbJkY5YOT%2Fre2b%2BB99IFw2K5paV467MMQLYimVFHgbx%2FGvTxCwXAvt%2BtS8E7Nwc2GK5MjSjEbpt6j%2FWW5kyOtqtflLcag%2BC5alHDtm6QOrayOkkn9k%2FSmky24na42%2Bk0EgqzkNafFP3GUOMIzc%2FnrVrUMERBsK7upNzPYpx%2FFkRSuoI6e827KhyXJx7qtATfrmZT0ms4L1iRAAc18%2B9XHlcQyAHrtpJQEFp7ACCRsp9KIkDBNIbGoXFUyOGQDTTkMW0HafAylgfcakc3l38OHLh2QcuQHndsNf7AxpVnHHNEMeMUHMJXOi8MGOqUBhP%2FmyodMMoSOUwSrzinaW%2BXPNxvE17smCN66ijzeIFHVto2bL%2BfslQxbmw39GLWVXewissHQvxULo1pJH6vTgi3NWSuBOfI3PPttNNzW%2B32lxBacpFhO%2FRLpAOe3zB3xTAVbEpbkfUzSj9Ncg2wJyYmlG8K5ubnx0JvDN4zdGelx1BgPtDb2phVlEZi6T1V1a2W8O8LPwsQlmN2zP9p2iF6NlNAE&X-Amz-Signature=4ae4d5bfee35d20111076d65b5f7199aa566b383c5a4dcdc83d7152cf03fe2ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3OOHOP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwz8muc%2F67BDjCLp6j4E9dPUMolKaU26bHu%2BBh7CJYzAiEAkJtNgS1w23PMhXe%2BW4QMvOrBNi7QhtSzF%2Bb121bVfIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkqEAmGIvsxduRUSyrcAyCwl5j%2Ffr8YkIeBN%2BI9TkE2SVW8x5mDmljw3YI5F9z9o5e2r43%2BoFLaea81KN45u9ZWvYjN1bxxXry%2BK3qJf44mP%2Bob1p2h0oKrHkDHrQEk3X9uNuazsjlV6l9TEQhDfXAKwQcIwVIxBuXQbLZ6LEZbSu6okkNajftTXuitCwgIeQPMYRzTH8qU4AwnINCUd3OsoRMJjeLGRIGdqZIzpvNsvhKrpyBal27g5KxRkkRyBQLe%2Bi%2FcDFEPP%2FNtqLH5L8RsIas8EePA9fQpBjBN5oT14uWaM7EY0zgYn8HuSI4OywJRhlPbRNadGWMTgu8e3n074SoLHmJLbJkY5YOT%2Fre2b%2BB99IFw2K5paV467MMQLYimVFHgbx%2FGvTxCwXAvt%2BtS8E7Nwc2GK5MjSjEbpt6j%2FWW5kyOtqtflLcag%2BC5alHDtm6QOrayOkkn9k%2FSmky24na42%2Bk0EgqzkNafFP3GUOMIzc%2FnrVrUMERBsK7upNzPYpx%2FFkRSuoI6e827KhyXJx7qtATfrmZT0ms4L1iRAAc18%2B9XHlcQyAHrtpJQEFp7ACCRsp9KIkDBNIbGoXFUyOGQDTTkMW0HafAylgfcakc3l38OHLh2QcuQHndsNf7AxpVnHHNEMeMUHMJXOi8MGOqUBhP%2FmyodMMoSOUwSrzinaW%2BXPNxvE17smCN66ijzeIFHVto2bL%2BfslQxbmw39GLWVXewissHQvxULo1pJH6vTgi3NWSuBOfI3PPttNNzW%2B32lxBacpFhO%2FRLpAOe3zB3xTAVbEpbkfUzSj9Ncg2wJyYmlG8K5ubnx0JvDN4zdGelx1BgPtDb2phVlEZi6T1V1a2W8O8LPwsQlmN2zP9p2iF6NlNAE&X-Amz-Signature=f00f00d819ff438e291da7ad1be94116125da02644b63087a785c1e928fcfdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3OOHOP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwz8muc%2F67BDjCLp6j4E9dPUMolKaU26bHu%2BBh7CJYzAiEAkJtNgS1w23PMhXe%2BW4QMvOrBNi7QhtSzF%2Bb121bVfIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkqEAmGIvsxduRUSyrcAyCwl5j%2Ffr8YkIeBN%2BI9TkE2SVW8x5mDmljw3YI5F9z9o5e2r43%2BoFLaea81KN45u9ZWvYjN1bxxXry%2BK3qJf44mP%2Bob1p2h0oKrHkDHrQEk3X9uNuazsjlV6l9TEQhDfXAKwQcIwVIxBuXQbLZ6LEZbSu6okkNajftTXuitCwgIeQPMYRzTH8qU4AwnINCUd3OsoRMJjeLGRIGdqZIzpvNsvhKrpyBal27g5KxRkkRyBQLe%2Bi%2FcDFEPP%2FNtqLH5L8RsIas8EePA9fQpBjBN5oT14uWaM7EY0zgYn8HuSI4OywJRhlPbRNadGWMTgu8e3n074SoLHmJLbJkY5YOT%2Fre2b%2BB99IFw2K5paV467MMQLYimVFHgbx%2FGvTxCwXAvt%2BtS8E7Nwc2GK5MjSjEbpt6j%2FWW5kyOtqtflLcag%2BC5alHDtm6QOrayOkkn9k%2FSmky24na42%2Bk0EgqzkNafFP3GUOMIzc%2FnrVrUMERBsK7upNzPYpx%2FFkRSuoI6e827KhyXJx7qtATfrmZT0ms4L1iRAAc18%2B9XHlcQyAHrtpJQEFp7ACCRsp9KIkDBNIbGoXFUyOGQDTTkMW0HafAylgfcakc3l38OHLh2QcuQHndsNf7AxpVnHHNEMeMUHMJXOi8MGOqUBhP%2FmyodMMoSOUwSrzinaW%2BXPNxvE17smCN66ijzeIFHVto2bL%2BfslQxbmw39GLWVXewissHQvxULo1pJH6vTgi3NWSuBOfI3PPttNNzW%2B32lxBacpFhO%2FRLpAOe3zB3xTAVbEpbkfUzSj9Ncg2wJyYmlG8K5ubnx0JvDN4zdGelx1BgPtDb2phVlEZi6T1V1a2W8O8LPwsQlmN2zP9p2iF6NlNAE&X-Amz-Signature=bfc67dc73de9c9c7bec30cc5912fb930dc33b2152ff0d0f9a0065715a4757452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3OOHOP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwz8muc%2F67BDjCLp6j4E9dPUMolKaU26bHu%2BBh7CJYzAiEAkJtNgS1w23PMhXe%2BW4QMvOrBNi7QhtSzF%2Bb121bVfIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkqEAmGIvsxduRUSyrcAyCwl5j%2Ffr8YkIeBN%2BI9TkE2SVW8x5mDmljw3YI5F9z9o5e2r43%2BoFLaea81KN45u9ZWvYjN1bxxXry%2BK3qJf44mP%2Bob1p2h0oKrHkDHrQEk3X9uNuazsjlV6l9TEQhDfXAKwQcIwVIxBuXQbLZ6LEZbSu6okkNajftTXuitCwgIeQPMYRzTH8qU4AwnINCUd3OsoRMJjeLGRIGdqZIzpvNsvhKrpyBal27g5KxRkkRyBQLe%2Bi%2FcDFEPP%2FNtqLH5L8RsIas8EePA9fQpBjBN5oT14uWaM7EY0zgYn8HuSI4OywJRhlPbRNadGWMTgu8e3n074SoLHmJLbJkY5YOT%2Fre2b%2BB99IFw2K5paV467MMQLYimVFHgbx%2FGvTxCwXAvt%2BtS8E7Nwc2GK5MjSjEbpt6j%2FWW5kyOtqtflLcag%2BC5alHDtm6QOrayOkkn9k%2FSmky24na42%2Bk0EgqzkNafFP3GUOMIzc%2FnrVrUMERBsK7upNzPYpx%2FFkRSuoI6e827KhyXJx7qtATfrmZT0ms4L1iRAAc18%2B9XHlcQyAHrtpJQEFp7ACCRsp9KIkDBNIbGoXFUyOGQDTTkMW0HafAylgfcakc3l38OHLh2QcuQHndsNf7AxpVnHHNEMeMUHMJXOi8MGOqUBhP%2FmyodMMoSOUwSrzinaW%2BXPNxvE17smCN66ijzeIFHVto2bL%2BfslQxbmw39GLWVXewissHQvxULo1pJH6vTgi3NWSuBOfI3PPttNNzW%2B32lxBacpFhO%2FRLpAOe3zB3xTAVbEpbkfUzSj9Ncg2wJyYmlG8K5ubnx0JvDN4zdGelx1BgPtDb2phVlEZi6T1V1a2W8O8LPwsQlmN2zP9p2iF6NlNAE&X-Amz-Signature=cde19f3001a4f08807ea38ac2330a0130180fde899b153232648a532ceee371c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3OOHOP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwz8muc%2F67BDjCLp6j4E9dPUMolKaU26bHu%2BBh7CJYzAiEAkJtNgS1w23PMhXe%2BW4QMvOrBNi7QhtSzF%2Bb121bVfIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkqEAmGIvsxduRUSyrcAyCwl5j%2Ffr8YkIeBN%2BI9TkE2SVW8x5mDmljw3YI5F9z9o5e2r43%2BoFLaea81KN45u9ZWvYjN1bxxXry%2BK3qJf44mP%2Bob1p2h0oKrHkDHrQEk3X9uNuazsjlV6l9TEQhDfXAKwQcIwVIxBuXQbLZ6LEZbSu6okkNajftTXuitCwgIeQPMYRzTH8qU4AwnINCUd3OsoRMJjeLGRIGdqZIzpvNsvhKrpyBal27g5KxRkkRyBQLe%2Bi%2FcDFEPP%2FNtqLH5L8RsIas8EePA9fQpBjBN5oT14uWaM7EY0zgYn8HuSI4OywJRhlPbRNadGWMTgu8e3n074SoLHmJLbJkY5YOT%2Fre2b%2BB99IFw2K5paV467MMQLYimVFHgbx%2FGvTxCwXAvt%2BtS8E7Nwc2GK5MjSjEbpt6j%2FWW5kyOtqtflLcag%2BC5alHDtm6QOrayOkkn9k%2FSmky24na42%2Bk0EgqzkNafFP3GUOMIzc%2FnrVrUMERBsK7upNzPYpx%2FFkRSuoI6e827KhyXJx7qtATfrmZT0ms4L1iRAAc18%2B9XHlcQyAHrtpJQEFp7ACCRsp9KIkDBNIbGoXFUyOGQDTTkMW0HafAylgfcakc3l38OHLh2QcuQHndsNf7AxpVnHHNEMeMUHMJXOi8MGOqUBhP%2FmyodMMoSOUwSrzinaW%2BXPNxvE17smCN66ijzeIFHVto2bL%2BfslQxbmw39GLWVXewissHQvxULo1pJH6vTgi3NWSuBOfI3PPttNNzW%2B32lxBacpFhO%2FRLpAOe3zB3xTAVbEpbkfUzSj9Ncg2wJyYmlG8K5ubnx0JvDN4zdGelx1BgPtDb2phVlEZi6T1V1a2W8O8LPwsQlmN2zP9p2iF6NlNAE&X-Amz-Signature=447a0d022914a2034673cc8ca208a474aee52c8fe0063b1732277a5eedcf70c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
