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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSRTNL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOctJGWKiCNNixRM16kaw9REoJxfvtBuT2gYbYnm6CJAiEAxS3XppDPzgHb6bBt%2BAoZc40HVwQjAcjx1QFNVdBzaAEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdBYCT0ZsusGWm%2FGyrcA4ew5vaAOdXpE%2BT47%2B8yp5kRw43AUTS5a9K7HmsvqPHZNUFFsdS5AWHP2Yc%2BuvKQ5rbbdsltChGlV%2FI1isGzVwPp5jAr%2BLr70vd0e1ArRx0gdv64tO1YC4M48GD5Yn6bl7wH1tsxdtbQqf1W7cPHeDuX5KrrJ7gg8Msy%2FmJC0aqNc52TPQwd4cZA6QNuCpz07gtjrUFY3C8JiL5HN6rR7Q05asA6DlnIZCAdk9cBNIDzK4kIJkDfAL9rY%2Br9A2xIwj38LuSAp6UeL4Ul%2Fr9e8ZV56m6t9ivKNI3X3I4g1q%2FwM%2B%2B1gvdftWvUC8ZBUzFO5AcI8k%2BMHG05cMZtY5X970rIiqmvZleGJ5eAWZjhA9OgGjk%2B4rM8bxsWgFxwUrDnYFVkDyThgojbJH6etvOzwoEaQyiRWOtWq%2FGgVU8L5%2By9lpCUms6vm3BnWpX2rumB%2FQYzOgE47AGHxZaAueKmUzRmql1C9n1s%2By3qjqXiKFj4elbzmG%2BywCmsoRReSuO7Y94CUZV3vvzTJSdHtr8YK%2BRfqdqZyaSACAQaCvA2B0SLCsmk9LpSsVvx1ag%2BWz38Pu0YHlCbUijlcZx2Nlu09r%2Bjm0PA%2FaOjxtNCwilv4mg5Ev9Vh3FTotyVqOFSMIieksMGOqUBhu4aZHEGpozsrfjhHiLAC1ENbGJfAxqxDKlLdeKRD%2BKCRksV7RMJt6GCo1352paO2gePlXsjbZ1oK6kmxEcqJ2x9Dc9vYa4r7mqCgrhDPC9ATEwMEEJ1FnDS6pDNp%2BPAbWi%2BRuway8m80nPd9Os8F%2Bp2spcbCXpEd3jOh8BaedVNfOM7oBB3G%2Bel1HNt70wwcDtGXzcdnJtzUlufCm6ve5BeGMW1&X-Amz-Signature=0c3d05971f380b8de9b7329f4f0e42cee7e9c516103cf2c5dffdaf3f499da8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSRTNL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOctJGWKiCNNixRM16kaw9REoJxfvtBuT2gYbYnm6CJAiEAxS3XppDPzgHb6bBt%2BAoZc40HVwQjAcjx1QFNVdBzaAEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdBYCT0ZsusGWm%2FGyrcA4ew5vaAOdXpE%2BT47%2B8yp5kRw43AUTS5a9K7HmsvqPHZNUFFsdS5AWHP2Yc%2BuvKQ5rbbdsltChGlV%2FI1isGzVwPp5jAr%2BLr70vd0e1ArRx0gdv64tO1YC4M48GD5Yn6bl7wH1tsxdtbQqf1W7cPHeDuX5KrrJ7gg8Msy%2FmJC0aqNc52TPQwd4cZA6QNuCpz07gtjrUFY3C8JiL5HN6rR7Q05asA6DlnIZCAdk9cBNIDzK4kIJkDfAL9rY%2Br9A2xIwj38LuSAp6UeL4Ul%2Fr9e8ZV56m6t9ivKNI3X3I4g1q%2FwM%2B%2B1gvdftWvUC8ZBUzFO5AcI8k%2BMHG05cMZtY5X970rIiqmvZleGJ5eAWZjhA9OgGjk%2B4rM8bxsWgFxwUrDnYFVkDyThgojbJH6etvOzwoEaQyiRWOtWq%2FGgVU8L5%2By9lpCUms6vm3BnWpX2rumB%2FQYzOgE47AGHxZaAueKmUzRmql1C9n1s%2By3qjqXiKFj4elbzmG%2BywCmsoRReSuO7Y94CUZV3vvzTJSdHtr8YK%2BRfqdqZyaSACAQaCvA2B0SLCsmk9LpSsVvx1ag%2BWz38Pu0YHlCbUijlcZx2Nlu09r%2Bjm0PA%2FaOjxtNCwilv4mg5Ev9Vh3FTotyVqOFSMIieksMGOqUBhu4aZHEGpozsrfjhHiLAC1ENbGJfAxqxDKlLdeKRD%2BKCRksV7RMJt6GCo1352paO2gePlXsjbZ1oK6kmxEcqJ2x9Dc9vYa4r7mqCgrhDPC9ATEwMEEJ1FnDS6pDNp%2BPAbWi%2BRuway8m80nPd9Os8F%2Bp2spcbCXpEd3jOh8BaedVNfOM7oBB3G%2Bel1HNt70wwcDtGXzcdnJtzUlufCm6ve5BeGMW1&X-Amz-Signature=aac976ac851ce2bc9302f4cdab61caee349c1452fd0c1d012ef9cee76136b605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSRTNL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOctJGWKiCNNixRM16kaw9REoJxfvtBuT2gYbYnm6CJAiEAxS3XppDPzgHb6bBt%2BAoZc40HVwQjAcjx1QFNVdBzaAEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdBYCT0ZsusGWm%2FGyrcA4ew5vaAOdXpE%2BT47%2B8yp5kRw43AUTS5a9K7HmsvqPHZNUFFsdS5AWHP2Yc%2BuvKQ5rbbdsltChGlV%2FI1isGzVwPp5jAr%2BLr70vd0e1ArRx0gdv64tO1YC4M48GD5Yn6bl7wH1tsxdtbQqf1W7cPHeDuX5KrrJ7gg8Msy%2FmJC0aqNc52TPQwd4cZA6QNuCpz07gtjrUFY3C8JiL5HN6rR7Q05asA6DlnIZCAdk9cBNIDzK4kIJkDfAL9rY%2Br9A2xIwj38LuSAp6UeL4Ul%2Fr9e8ZV56m6t9ivKNI3X3I4g1q%2FwM%2B%2B1gvdftWvUC8ZBUzFO5AcI8k%2BMHG05cMZtY5X970rIiqmvZleGJ5eAWZjhA9OgGjk%2B4rM8bxsWgFxwUrDnYFVkDyThgojbJH6etvOzwoEaQyiRWOtWq%2FGgVU8L5%2By9lpCUms6vm3BnWpX2rumB%2FQYzOgE47AGHxZaAueKmUzRmql1C9n1s%2By3qjqXiKFj4elbzmG%2BywCmsoRReSuO7Y94CUZV3vvzTJSdHtr8YK%2BRfqdqZyaSACAQaCvA2B0SLCsmk9LpSsVvx1ag%2BWz38Pu0YHlCbUijlcZx2Nlu09r%2Bjm0PA%2FaOjxtNCwilv4mg5Ev9Vh3FTotyVqOFSMIieksMGOqUBhu4aZHEGpozsrfjhHiLAC1ENbGJfAxqxDKlLdeKRD%2BKCRksV7RMJt6GCo1352paO2gePlXsjbZ1oK6kmxEcqJ2x9Dc9vYa4r7mqCgrhDPC9ATEwMEEJ1FnDS6pDNp%2BPAbWi%2BRuway8m80nPd9Os8F%2Bp2spcbCXpEd3jOh8BaedVNfOM7oBB3G%2Bel1HNt70wwcDtGXzcdnJtzUlufCm6ve5BeGMW1&X-Amz-Signature=761329b59ff80c44c7347384db2f61804166f63b370343820efc64164378fb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSRTNL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOctJGWKiCNNixRM16kaw9REoJxfvtBuT2gYbYnm6CJAiEAxS3XppDPzgHb6bBt%2BAoZc40HVwQjAcjx1QFNVdBzaAEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdBYCT0ZsusGWm%2FGyrcA4ew5vaAOdXpE%2BT47%2B8yp5kRw43AUTS5a9K7HmsvqPHZNUFFsdS5AWHP2Yc%2BuvKQ5rbbdsltChGlV%2FI1isGzVwPp5jAr%2BLr70vd0e1ArRx0gdv64tO1YC4M48GD5Yn6bl7wH1tsxdtbQqf1W7cPHeDuX5KrrJ7gg8Msy%2FmJC0aqNc52TPQwd4cZA6QNuCpz07gtjrUFY3C8JiL5HN6rR7Q05asA6DlnIZCAdk9cBNIDzK4kIJkDfAL9rY%2Br9A2xIwj38LuSAp6UeL4Ul%2Fr9e8ZV56m6t9ivKNI3X3I4g1q%2FwM%2B%2B1gvdftWvUC8ZBUzFO5AcI8k%2BMHG05cMZtY5X970rIiqmvZleGJ5eAWZjhA9OgGjk%2B4rM8bxsWgFxwUrDnYFVkDyThgojbJH6etvOzwoEaQyiRWOtWq%2FGgVU8L5%2By9lpCUms6vm3BnWpX2rumB%2FQYzOgE47AGHxZaAueKmUzRmql1C9n1s%2By3qjqXiKFj4elbzmG%2BywCmsoRReSuO7Y94CUZV3vvzTJSdHtr8YK%2BRfqdqZyaSACAQaCvA2B0SLCsmk9LpSsVvx1ag%2BWz38Pu0YHlCbUijlcZx2Nlu09r%2Bjm0PA%2FaOjxtNCwilv4mg5Ev9Vh3FTotyVqOFSMIieksMGOqUBhu4aZHEGpozsrfjhHiLAC1ENbGJfAxqxDKlLdeKRD%2BKCRksV7RMJt6GCo1352paO2gePlXsjbZ1oK6kmxEcqJ2x9Dc9vYa4r7mqCgrhDPC9ATEwMEEJ1FnDS6pDNp%2BPAbWi%2BRuway8m80nPd9Os8F%2Bp2spcbCXpEd3jOh8BaedVNfOM7oBB3G%2Bel1HNt70wwcDtGXzcdnJtzUlufCm6ve5BeGMW1&X-Amz-Signature=dc0dcb8905f297b567c777260a47a80f937104a873edf0cd540fb8ed3e1143dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSRTNL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOctJGWKiCNNixRM16kaw9REoJxfvtBuT2gYbYnm6CJAiEAxS3XppDPzgHb6bBt%2BAoZc40HVwQjAcjx1QFNVdBzaAEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdBYCT0ZsusGWm%2FGyrcA4ew5vaAOdXpE%2BT47%2B8yp5kRw43AUTS5a9K7HmsvqPHZNUFFsdS5AWHP2Yc%2BuvKQ5rbbdsltChGlV%2FI1isGzVwPp5jAr%2BLr70vd0e1ArRx0gdv64tO1YC4M48GD5Yn6bl7wH1tsxdtbQqf1W7cPHeDuX5KrrJ7gg8Msy%2FmJC0aqNc52TPQwd4cZA6QNuCpz07gtjrUFY3C8JiL5HN6rR7Q05asA6DlnIZCAdk9cBNIDzK4kIJkDfAL9rY%2Br9A2xIwj38LuSAp6UeL4Ul%2Fr9e8ZV56m6t9ivKNI3X3I4g1q%2FwM%2B%2B1gvdftWvUC8ZBUzFO5AcI8k%2BMHG05cMZtY5X970rIiqmvZleGJ5eAWZjhA9OgGjk%2B4rM8bxsWgFxwUrDnYFVkDyThgojbJH6etvOzwoEaQyiRWOtWq%2FGgVU8L5%2By9lpCUms6vm3BnWpX2rumB%2FQYzOgE47AGHxZaAueKmUzRmql1C9n1s%2By3qjqXiKFj4elbzmG%2BywCmsoRReSuO7Y94CUZV3vvzTJSdHtr8YK%2BRfqdqZyaSACAQaCvA2B0SLCsmk9LpSsVvx1ag%2BWz38Pu0YHlCbUijlcZx2Nlu09r%2Bjm0PA%2FaOjxtNCwilv4mg5Ev9Vh3FTotyVqOFSMIieksMGOqUBhu4aZHEGpozsrfjhHiLAC1ENbGJfAxqxDKlLdeKRD%2BKCRksV7RMJt6GCo1352paO2gePlXsjbZ1oK6kmxEcqJ2x9Dc9vYa4r7mqCgrhDPC9ATEwMEEJ1FnDS6pDNp%2BPAbWi%2BRuway8m80nPd9Os8F%2Bp2spcbCXpEd3jOh8BaedVNfOM7oBB3G%2Bel1HNt70wwcDtGXzcdnJtzUlufCm6ve5BeGMW1&X-Amz-Signature=9bc5b37b7ed32747b60aadfe314abac1356a8bc6241b908ac3e74aee9015da37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
