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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7D6D5S%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpeYWt%2F%2BYOOId4z1wqji%2F3y%2BBcL5Z6V8ffRZqJpLZVBgIgBMDJFigD7jlUdFM6wGdc3X553iC7UKJVnk1Lv%2B%2BP8HYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcu%2BNBpLetKvD3RiyrcA73B0JroiwNSeNZ0HmrlAxDUwDdbrPzgykDLjoHEyVUmuz2%2F%2BNTndx60GSWVnQB0ZJkK6XP%2FCVqd2X%2FfCV%2BJHfQ3tCdaDyH0YLOrXXmSmnWLOYQ1asUKwJHdlb5Q8Y6R2mVC8b6jQ1xhpH5wnEeXE22JzTSPiGTUK6o%2FcwO03K%2FsGbZ1Why38a6F%2B49G0ppSZ21DZOCXP%2BLnEmNFfpum9mPRsYCZgPSLrlM4d3qT77N2xq36KfU4nLG6fu5IKlS0bAWRo5ehZYASbKwA3cKqVs3Mf30pCJqiOxtiOtph6ZuywEs8AglOfWr2ALJTtoFHHv%2BuBwuIkCOmOv%2F9o8OrRNv6J30ss4OgqQSli%2FRjL38kUDVSh2uZ7wdMjOrQQ0QxexBUYYapHopueU1nBlFEed18BD0Cy8NGmp0QxrdtuT0BFrs9M6ttoRPnMbEnCBSxAY92cy7BXdbrwYpD13g5wr2%2FLJeEWdYwNzMBFp5ujMxSFFSi8NW5880GSvLcbEHDoNob84GmlNDGXU7jS7tAHdnf55gq6DR22T7rTSHGcTCanP8lL%2FSuRAFYvB7BSV6YUpPN7X0eRymAQz3kcpIfoCMqp0Qr27BMCPB1dY%2Fl3Z7YM9Lyh0nds69OLzY8MPK%2BwMAGOqUB4KaF0JHzvm8TkKawPFCl2%2F4eutLVslpTv6OjGgFAhKjfHkPmxCvbWG363fuP0myx3v%2FrRFRx%2BrOzyOnDOEZ9Ar%2B0k%2Fg68LoYetm9vt3%2ByF9WUPa6Ju46rE%2Fy6g7WOthfAwCmRMXJ%2BWWppeWuahv%2B%2B9Z%2FjyZi8V%2Fa0Sw7zOITrtKmrU%2BS82Grw20i7fSJQenVzAwCPkzhcHoJbkleHIs1rX7P32bv&X-Amz-Signature=2945f21fc8721a332788f024289a9cdb99ed7bdf9af7bc9f45e8e45cd732c20d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7D6D5S%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpeYWt%2F%2BYOOId4z1wqji%2F3y%2BBcL5Z6V8ffRZqJpLZVBgIgBMDJFigD7jlUdFM6wGdc3X553iC7UKJVnk1Lv%2B%2BP8HYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcu%2BNBpLetKvD3RiyrcA73B0JroiwNSeNZ0HmrlAxDUwDdbrPzgykDLjoHEyVUmuz2%2F%2BNTndx60GSWVnQB0ZJkK6XP%2FCVqd2X%2FfCV%2BJHfQ3tCdaDyH0YLOrXXmSmnWLOYQ1asUKwJHdlb5Q8Y6R2mVC8b6jQ1xhpH5wnEeXE22JzTSPiGTUK6o%2FcwO03K%2FsGbZ1Why38a6F%2B49G0ppSZ21DZOCXP%2BLnEmNFfpum9mPRsYCZgPSLrlM4d3qT77N2xq36KfU4nLG6fu5IKlS0bAWRo5ehZYASbKwA3cKqVs3Mf30pCJqiOxtiOtph6ZuywEs8AglOfWr2ALJTtoFHHv%2BuBwuIkCOmOv%2F9o8OrRNv6J30ss4OgqQSli%2FRjL38kUDVSh2uZ7wdMjOrQQ0QxexBUYYapHopueU1nBlFEed18BD0Cy8NGmp0QxrdtuT0BFrs9M6ttoRPnMbEnCBSxAY92cy7BXdbrwYpD13g5wr2%2FLJeEWdYwNzMBFp5ujMxSFFSi8NW5880GSvLcbEHDoNob84GmlNDGXU7jS7tAHdnf55gq6DR22T7rTSHGcTCanP8lL%2FSuRAFYvB7BSV6YUpPN7X0eRymAQz3kcpIfoCMqp0Qr27BMCPB1dY%2Fl3Z7YM9Lyh0nds69OLzY8MPK%2BwMAGOqUB4KaF0JHzvm8TkKawPFCl2%2F4eutLVslpTv6OjGgFAhKjfHkPmxCvbWG363fuP0myx3v%2FrRFRx%2BrOzyOnDOEZ9Ar%2B0k%2Fg68LoYetm9vt3%2ByF9WUPa6Ju46rE%2Fy6g7WOthfAwCmRMXJ%2BWWppeWuahv%2B%2B9Z%2FjyZi8V%2Fa0Sw7zOITrtKmrU%2BS82Grw20i7fSJQenVzAwCPkzhcHoJbkleHIs1rX7P32bv&X-Amz-Signature=e8f4d9ae84571d299b628b7b1120b5dd5bdfe42a2dfb13eabc06cc142842799f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7D6D5S%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpeYWt%2F%2BYOOId4z1wqji%2F3y%2BBcL5Z6V8ffRZqJpLZVBgIgBMDJFigD7jlUdFM6wGdc3X553iC7UKJVnk1Lv%2B%2BP8HYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcu%2BNBpLetKvD3RiyrcA73B0JroiwNSeNZ0HmrlAxDUwDdbrPzgykDLjoHEyVUmuz2%2F%2BNTndx60GSWVnQB0ZJkK6XP%2FCVqd2X%2FfCV%2BJHfQ3tCdaDyH0YLOrXXmSmnWLOYQ1asUKwJHdlb5Q8Y6R2mVC8b6jQ1xhpH5wnEeXE22JzTSPiGTUK6o%2FcwO03K%2FsGbZ1Why38a6F%2B49G0ppSZ21DZOCXP%2BLnEmNFfpum9mPRsYCZgPSLrlM4d3qT77N2xq36KfU4nLG6fu5IKlS0bAWRo5ehZYASbKwA3cKqVs3Mf30pCJqiOxtiOtph6ZuywEs8AglOfWr2ALJTtoFHHv%2BuBwuIkCOmOv%2F9o8OrRNv6J30ss4OgqQSli%2FRjL38kUDVSh2uZ7wdMjOrQQ0QxexBUYYapHopueU1nBlFEed18BD0Cy8NGmp0QxrdtuT0BFrs9M6ttoRPnMbEnCBSxAY92cy7BXdbrwYpD13g5wr2%2FLJeEWdYwNzMBFp5ujMxSFFSi8NW5880GSvLcbEHDoNob84GmlNDGXU7jS7tAHdnf55gq6DR22T7rTSHGcTCanP8lL%2FSuRAFYvB7BSV6YUpPN7X0eRymAQz3kcpIfoCMqp0Qr27BMCPB1dY%2Fl3Z7YM9Lyh0nds69OLzY8MPK%2BwMAGOqUB4KaF0JHzvm8TkKawPFCl2%2F4eutLVslpTv6OjGgFAhKjfHkPmxCvbWG363fuP0myx3v%2FrRFRx%2BrOzyOnDOEZ9Ar%2B0k%2Fg68LoYetm9vt3%2ByF9WUPa6Ju46rE%2Fy6g7WOthfAwCmRMXJ%2BWWppeWuahv%2B%2B9Z%2FjyZi8V%2Fa0Sw7zOITrtKmrU%2BS82Grw20i7fSJQenVzAwCPkzhcHoJbkleHIs1rX7P32bv&X-Amz-Signature=1c7ca462239578c7e57aa3f640a003533e21b38e3c088e6452e824749faf6df4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7D6D5S%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpeYWt%2F%2BYOOId4z1wqji%2F3y%2BBcL5Z6V8ffRZqJpLZVBgIgBMDJFigD7jlUdFM6wGdc3X553iC7UKJVnk1Lv%2B%2BP8HYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcu%2BNBpLetKvD3RiyrcA73B0JroiwNSeNZ0HmrlAxDUwDdbrPzgykDLjoHEyVUmuz2%2F%2BNTndx60GSWVnQB0ZJkK6XP%2FCVqd2X%2FfCV%2BJHfQ3tCdaDyH0YLOrXXmSmnWLOYQ1asUKwJHdlb5Q8Y6R2mVC8b6jQ1xhpH5wnEeXE22JzTSPiGTUK6o%2FcwO03K%2FsGbZ1Why38a6F%2B49G0ppSZ21DZOCXP%2BLnEmNFfpum9mPRsYCZgPSLrlM4d3qT77N2xq36KfU4nLG6fu5IKlS0bAWRo5ehZYASbKwA3cKqVs3Mf30pCJqiOxtiOtph6ZuywEs8AglOfWr2ALJTtoFHHv%2BuBwuIkCOmOv%2F9o8OrRNv6J30ss4OgqQSli%2FRjL38kUDVSh2uZ7wdMjOrQQ0QxexBUYYapHopueU1nBlFEed18BD0Cy8NGmp0QxrdtuT0BFrs9M6ttoRPnMbEnCBSxAY92cy7BXdbrwYpD13g5wr2%2FLJeEWdYwNzMBFp5ujMxSFFSi8NW5880GSvLcbEHDoNob84GmlNDGXU7jS7tAHdnf55gq6DR22T7rTSHGcTCanP8lL%2FSuRAFYvB7BSV6YUpPN7X0eRymAQz3kcpIfoCMqp0Qr27BMCPB1dY%2Fl3Z7YM9Lyh0nds69OLzY8MPK%2BwMAGOqUB4KaF0JHzvm8TkKawPFCl2%2F4eutLVslpTv6OjGgFAhKjfHkPmxCvbWG363fuP0myx3v%2FrRFRx%2BrOzyOnDOEZ9Ar%2B0k%2Fg68LoYetm9vt3%2ByF9WUPa6Ju46rE%2Fy6g7WOthfAwCmRMXJ%2BWWppeWuahv%2B%2B9Z%2FjyZi8V%2Fa0Sw7zOITrtKmrU%2BS82Grw20i7fSJQenVzAwCPkzhcHoJbkleHIs1rX7P32bv&X-Amz-Signature=40cf31c87eb5a2e5bd691e9737125ea6cac42346cce151a8f1a69e27c3d00968&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7D6D5S%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpeYWt%2F%2BYOOId4z1wqji%2F3y%2BBcL5Z6V8ffRZqJpLZVBgIgBMDJFigD7jlUdFM6wGdc3X553iC7UKJVnk1Lv%2B%2BP8HYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcu%2BNBpLetKvD3RiyrcA73B0JroiwNSeNZ0HmrlAxDUwDdbrPzgykDLjoHEyVUmuz2%2F%2BNTndx60GSWVnQB0ZJkK6XP%2FCVqd2X%2FfCV%2BJHfQ3tCdaDyH0YLOrXXmSmnWLOYQ1asUKwJHdlb5Q8Y6R2mVC8b6jQ1xhpH5wnEeXE22JzTSPiGTUK6o%2FcwO03K%2FsGbZ1Why38a6F%2B49G0ppSZ21DZOCXP%2BLnEmNFfpum9mPRsYCZgPSLrlM4d3qT77N2xq36KfU4nLG6fu5IKlS0bAWRo5ehZYASbKwA3cKqVs3Mf30pCJqiOxtiOtph6ZuywEs8AglOfWr2ALJTtoFHHv%2BuBwuIkCOmOv%2F9o8OrRNv6J30ss4OgqQSli%2FRjL38kUDVSh2uZ7wdMjOrQQ0QxexBUYYapHopueU1nBlFEed18BD0Cy8NGmp0QxrdtuT0BFrs9M6ttoRPnMbEnCBSxAY92cy7BXdbrwYpD13g5wr2%2FLJeEWdYwNzMBFp5ujMxSFFSi8NW5880GSvLcbEHDoNob84GmlNDGXU7jS7tAHdnf55gq6DR22T7rTSHGcTCanP8lL%2FSuRAFYvB7BSV6YUpPN7X0eRymAQz3kcpIfoCMqp0Qr27BMCPB1dY%2Fl3Z7YM9Lyh0nds69OLzY8MPK%2BwMAGOqUB4KaF0JHzvm8TkKawPFCl2%2F4eutLVslpTv6OjGgFAhKjfHkPmxCvbWG363fuP0myx3v%2FrRFRx%2BrOzyOnDOEZ9Ar%2B0k%2Fg68LoYetm9vt3%2ByF9WUPa6Ju46rE%2Fy6g7WOthfAwCmRMXJ%2BWWppeWuahv%2B%2B9Z%2FjyZi8V%2Fa0Sw7zOITrtKmrU%2BS82Grw20i7fSJQenVzAwCPkzhcHoJbkleHIs1rX7P32bv&X-Amz-Signature=13703a9a0548539e4341e52f56e1323cffefa71b3da48d3846fee2d15645068b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
