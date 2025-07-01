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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZXWO2U%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDeHC4YO7oaSJ4ISlejIESoC56dSOuWHlOwYQ8Mx4pAIgXY2j14upoEi%2FJBovf8LyqUE0w4Nyw9VAlYY%2FRFxoQIEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4CIV%2FMxwxMZTAWCyrcA5TmeRyGItTp570e2ILQmyaL1lY9rY%2BYgN1FpIQ2QS9vkECRDkjG0S6PFR0WwHPI9Er%2FCEYuaiUkQ4e7F%2FDKvIDLfP4%2FKM%2BDgG3KtKHd682ztygmmMhkpKGvR9ye8UAPTnI7yOJ0jSDmiBiplqJF8ZiPEHXz9%2BF1xIotoOomwomRDgfcdclmnypyBqt9PcjvERYGbciZ03ZbiohHLfFyXufpd6dF89b5JvvQ8Lk2W3kMOXwUl00VVl7q3wBU8c5g2z%2BlKgESJqz3rbJGLho9pRiDRSTEbIQGuj8eL9uoLuMBUNoI9QAlTepH%2BWEPn5QGSz%2BIEVRv9hzdHvSjSgvnNHYfO4SHl5O6OHSArI9gkiRVHxSw5NM62sHUYLpSa4xmCGVh89SjdxsDnSDLjAvt%2BBvpe8X63rdIm7s9yo5Hxv8CwmN5gijVr70BpIxpNkYnBEZ4WmKcO0xd8431n%2F9JdrgABBTYlo8ILMkIGOJdkNGc%2ByFOEeiDms2g2DTR1cZvsKvGm0EpiG2%2BOxsUx4sApxYS4MSmP6sz%2FJQV99XKrjMvujanl4eGtLq2SNJb1%2BT372iASjsEHGROpqooy6%2B6YdYnTHkTMWzUdKPLb4qqT5q1T3LXXfs3pSeEWgPxMNPLjcMGOqUBNJlcPuGJDu2%2BcBTJla7d9H%2BYA6%2BWVc9AgpT3E6iERr4IgUHixsBJduE%2FytN01z%2F8jqaHi2NQDM9gttSAjM3hSzg7RgR5vUMVXeAD%2BkDFLxo4m7v4vgmIvgaDmxtJPoi0BYYbf1Ug39FnLWkAtuTcUN0i7Ssch3Nqpm9jiSzcX7B5n2I0tDEPPhOAQoZx31JGVTvE%2FG3okRfUdoyvSBl1unGOJpRV&X-Amz-Signature=e9dc4f31c86c87eae62c32ca9b6c3103c85b0be3d2c21e2223ad5f4200852f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZXWO2U%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDeHC4YO7oaSJ4ISlejIESoC56dSOuWHlOwYQ8Mx4pAIgXY2j14upoEi%2FJBovf8LyqUE0w4Nyw9VAlYY%2FRFxoQIEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4CIV%2FMxwxMZTAWCyrcA5TmeRyGItTp570e2ILQmyaL1lY9rY%2BYgN1FpIQ2QS9vkECRDkjG0S6PFR0WwHPI9Er%2FCEYuaiUkQ4e7F%2FDKvIDLfP4%2FKM%2BDgG3KtKHd682ztygmmMhkpKGvR9ye8UAPTnI7yOJ0jSDmiBiplqJF8ZiPEHXz9%2BF1xIotoOomwomRDgfcdclmnypyBqt9PcjvERYGbciZ03ZbiohHLfFyXufpd6dF89b5JvvQ8Lk2W3kMOXwUl00VVl7q3wBU8c5g2z%2BlKgESJqz3rbJGLho9pRiDRSTEbIQGuj8eL9uoLuMBUNoI9QAlTepH%2BWEPn5QGSz%2BIEVRv9hzdHvSjSgvnNHYfO4SHl5O6OHSArI9gkiRVHxSw5NM62sHUYLpSa4xmCGVh89SjdxsDnSDLjAvt%2BBvpe8X63rdIm7s9yo5Hxv8CwmN5gijVr70BpIxpNkYnBEZ4WmKcO0xd8431n%2F9JdrgABBTYlo8ILMkIGOJdkNGc%2ByFOEeiDms2g2DTR1cZvsKvGm0EpiG2%2BOxsUx4sApxYS4MSmP6sz%2FJQV99XKrjMvujanl4eGtLq2SNJb1%2BT372iASjsEHGROpqooy6%2B6YdYnTHkTMWzUdKPLb4qqT5q1T3LXXfs3pSeEWgPxMNPLjcMGOqUBNJlcPuGJDu2%2BcBTJla7d9H%2BYA6%2BWVc9AgpT3E6iERr4IgUHixsBJduE%2FytN01z%2F8jqaHi2NQDM9gttSAjM3hSzg7RgR5vUMVXeAD%2BkDFLxo4m7v4vgmIvgaDmxtJPoi0BYYbf1Ug39FnLWkAtuTcUN0i7Ssch3Nqpm9jiSzcX7B5n2I0tDEPPhOAQoZx31JGVTvE%2FG3okRfUdoyvSBl1unGOJpRV&X-Amz-Signature=1f027de011fe5dbd8578de923596fb7d3fa220d283cd9ccca79c142825c6c849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZXWO2U%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDeHC4YO7oaSJ4ISlejIESoC56dSOuWHlOwYQ8Mx4pAIgXY2j14upoEi%2FJBovf8LyqUE0w4Nyw9VAlYY%2FRFxoQIEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4CIV%2FMxwxMZTAWCyrcA5TmeRyGItTp570e2ILQmyaL1lY9rY%2BYgN1FpIQ2QS9vkECRDkjG0S6PFR0WwHPI9Er%2FCEYuaiUkQ4e7F%2FDKvIDLfP4%2FKM%2BDgG3KtKHd682ztygmmMhkpKGvR9ye8UAPTnI7yOJ0jSDmiBiplqJF8ZiPEHXz9%2BF1xIotoOomwomRDgfcdclmnypyBqt9PcjvERYGbciZ03ZbiohHLfFyXufpd6dF89b5JvvQ8Lk2W3kMOXwUl00VVl7q3wBU8c5g2z%2BlKgESJqz3rbJGLho9pRiDRSTEbIQGuj8eL9uoLuMBUNoI9QAlTepH%2BWEPn5QGSz%2BIEVRv9hzdHvSjSgvnNHYfO4SHl5O6OHSArI9gkiRVHxSw5NM62sHUYLpSa4xmCGVh89SjdxsDnSDLjAvt%2BBvpe8X63rdIm7s9yo5Hxv8CwmN5gijVr70BpIxpNkYnBEZ4WmKcO0xd8431n%2F9JdrgABBTYlo8ILMkIGOJdkNGc%2ByFOEeiDms2g2DTR1cZvsKvGm0EpiG2%2BOxsUx4sApxYS4MSmP6sz%2FJQV99XKrjMvujanl4eGtLq2SNJb1%2BT372iASjsEHGROpqooy6%2B6YdYnTHkTMWzUdKPLb4qqT5q1T3LXXfs3pSeEWgPxMNPLjcMGOqUBNJlcPuGJDu2%2BcBTJla7d9H%2BYA6%2BWVc9AgpT3E6iERr4IgUHixsBJduE%2FytN01z%2F8jqaHi2NQDM9gttSAjM3hSzg7RgR5vUMVXeAD%2BkDFLxo4m7v4vgmIvgaDmxtJPoi0BYYbf1Ug39FnLWkAtuTcUN0i7Ssch3Nqpm9jiSzcX7B5n2I0tDEPPhOAQoZx31JGVTvE%2FG3okRfUdoyvSBl1unGOJpRV&X-Amz-Signature=624d1fc95474f81ffd0583a89e6e9d44c0faa7299d16bf91b6d3661b2a75bdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZXWO2U%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDeHC4YO7oaSJ4ISlejIESoC56dSOuWHlOwYQ8Mx4pAIgXY2j14upoEi%2FJBovf8LyqUE0w4Nyw9VAlYY%2FRFxoQIEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4CIV%2FMxwxMZTAWCyrcA5TmeRyGItTp570e2ILQmyaL1lY9rY%2BYgN1FpIQ2QS9vkECRDkjG0S6PFR0WwHPI9Er%2FCEYuaiUkQ4e7F%2FDKvIDLfP4%2FKM%2BDgG3KtKHd682ztygmmMhkpKGvR9ye8UAPTnI7yOJ0jSDmiBiplqJF8ZiPEHXz9%2BF1xIotoOomwomRDgfcdclmnypyBqt9PcjvERYGbciZ03ZbiohHLfFyXufpd6dF89b5JvvQ8Lk2W3kMOXwUl00VVl7q3wBU8c5g2z%2BlKgESJqz3rbJGLho9pRiDRSTEbIQGuj8eL9uoLuMBUNoI9QAlTepH%2BWEPn5QGSz%2BIEVRv9hzdHvSjSgvnNHYfO4SHl5O6OHSArI9gkiRVHxSw5NM62sHUYLpSa4xmCGVh89SjdxsDnSDLjAvt%2BBvpe8X63rdIm7s9yo5Hxv8CwmN5gijVr70BpIxpNkYnBEZ4WmKcO0xd8431n%2F9JdrgABBTYlo8ILMkIGOJdkNGc%2ByFOEeiDms2g2DTR1cZvsKvGm0EpiG2%2BOxsUx4sApxYS4MSmP6sz%2FJQV99XKrjMvujanl4eGtLq2SNJb1%2BT372iASjsEHGROpqooy6%2B6YdYnTHkTMWzUdKPLb4qqT5q1T3LXXfs3pSeEWgPxMNPLjcMGOqUBNJlcPuGJDu2%2BcBTJla7d9H%2BYA6%2BWVc9AgpT3E6iERr4IgUHixsBJduE%2FytN01z%2F8jqaHi2NQDM9gttSAjM3hSzg7RgR5vUMVXeAD%2BkDFLxo4m7v4vgmIvgaDmxtJPoi0BYYbf1Ug39FnLWkAtuTcUN0i7Ssch3Nqpm9jiSzcX7B5n2I0tDEPPhOAQoZx31JGVTvE%2FG3okRfUdoyvSBl1unGOJpRV&X-Amz-Signature=1295b3c6f57b001ddcadd5569c15c73da91f81cb0d1ccb9f22087bd8c39a46bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZXWO2U%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDeHC4YO7oaSJ4ISlejIESoC56dSOuWHlOwYQ8Mx4pAIgXY2j14upoEi%2FJBovf8LyqUE0w4Nyw9VAlYY%2FRFxoQIEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4CIV%2FMxwxMZTAWCyrcA5TmeRyGItTp570e2ILQmyaL1lY9rY%2BYgN1FpIQ2QS9vkECRDkjG0S6PFR0WwHPI9Er%2FCEYuaiUkQ4e7F%2FDKvIDLfP4%2FKM%2BDgG3KtKHd682ztygmmMhkpKGvR9ye8UAPTnI7yOJ0jSDmiBiplqJF8ZiPEHXz9%2BF1xIotoOomwomRDgfcdclmnypyBqt9PcjvERYGbciZ03ZbiohHLfFyXufpd6dF89b5JvvQ8Lk2W3kMOXwUl00VVl7q3wBU8c5g2z%2BlKgESJqz3rbJGLho9pRiDRSTEbIQGuj8eL9uoLuMBUNoI9QAlTepH%2BWEPn5QGSz%2BIEVRv9hzdHvSjSgvnNHYfO4SHl5O6OHSArI9gkiRVHxSw5NM62sHUYLpSa4xmCGVh89SjdxsDnSDLjAvt%2BBvpe8X63rdIm7s9yo5Hxv8CwmN5gijVr70BpIxpNkYnBEZ4WmKcO0xd8431n%2F9JdrgABBTYlo8ILMkIGOJdkNGc%2ByFOEeiDms2g2DTR1cZvsKvGm0EpiG2%2BOxsUx4sApxYS4MSmP6sz%2FJQV99XKrjMvujanl4eGtLq2SNJb1%2BT372iASjsEHGROpqooy6%2B6YdYnTHkTMWzUdKPLb4qqT5q1T3LXXfs3pSeEWgPxMNPLjcMGOqUBNJlcPuGJDu2%2BcBTJla7d9H%2BYA6%2BWVc9AgpT3E6iERr4IgUHixsBJduE%2FytN01z%2F8jqaHi2NQDM9gttSAjM3hSzg7RgR5vUMVXeAD%2BkDFLxo4m7v4vgmIvgaDmxtJPoi0BYYbf1Ug39FnLWkAtuTcUN0i7Ssch3Nqpm9jiSzcX7B5n2I0tDEPPhOAQoZx31JGVTvE%2FG3okRfUdoyvSBl1unGOJpRV&X-Amz-Signature=9ce864f760f4b4f21f6c2d15bd71499f222ac7751f7d923920796f5a653fb52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
