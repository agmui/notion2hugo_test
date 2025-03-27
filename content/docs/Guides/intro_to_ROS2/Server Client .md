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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3X6F64%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2RpHqy3mELeV4O4w5xHOPaIkGMNkSMEpb5wu8xFaoQAiATmyca%2BnFyO%2FBSHXAsFIFUUpxv%2FZ1Rj%2BJ4KyQ4wx9EMir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrFMtiDrh7zpA7tkHKtwDFUtDjHlmhTmzT%2B4J0AjnZ04EIBvco4GcTm8ywI1sEYrjjDbiXT1Uo18OH1NsWR9QHjwEdhuGCTh7LrMBGhSPzVPEIcdqgBUnfLkBUJZo5tYxJCqpAmZtEdFaoJKOddThTwyxUCFoqyKfu4ov4X1WELDZ8zyzd%2BJIphwUx5yD7MfagLrPX3DvjQZ4MM0xgOOKHW0qJY%2BWGQEac2rg3kkSPXrBXpW5lbaZUGHLVPe5a9JJnth7OZXcsQXlEhVkevm%2BgX0OZ5P7gsYJmL1wJVtHwRyuOx1uAALRTR%2B1A2032%2FsQ4SGq2kzbbs66OKevtL2KkWXFBmauBByR0LDI2RafBP3O23zTi0YPiutwpB8Fo0eQgOMvJuMsxxVikHPh3U2S4lD45HZzKFmh7zDIzoiKeSOuyutqQEJtvyXDLMkFPeMC06qhIz478CmXJNpyHbHoVTZEL5ZrFNRnrCBQkFeicc8mmBCZvZmH0u%2FGQRB8PQndaLJAphF7BmXS0iG6u3aQPKZ%2B3yeVWBfpTbVN4Fw%2FHQlVGQhoSxonejP29VUNw21tb%2BZzS4RwUbsYuveiTU86xfmPqCBgHtrizon86gcuLX6AC%2F7Xdb9uIUL0kFgC10ak%2FUbfG2hyq0pE4vEwqo2SvwY6pgELfLzXLPWfzGnlu9WYoGtStuhBPQ9naiW1Cp11qv4p1OE3AfIcOVLFTweQEuMm9WkbXIvRo4szOzjpDUpnWTCFBL9EF35rYfLHg0gumqrQrnTmQ3Trswo0sg8PFrFJ7Tx6yxsF0lbhoAVEbpaNDPSUATw1%2FRL57ctu9K89%2B%2FR%2Bx%2B6D7QmwJqT7ibfaBCiqYVDCArIpOS6ZA7L4y2StoMcFyFmaavqh&X-Amz-Signature=d39c1e7f4a264c780c51040f8ddcd42283f0ca94d18b11eb676e4e1df3432298&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3X6F64%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2RpHqy3mELeV4O4w5xHOPaIkGMNkSMEpb5wu8xFaoQAiATmyca%2BnFyO%2FBSHXAsFIFUUpxv%2FZ1Rj%2BJ4KyQ4wx9EMir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrFMtiDrh7zpA7tkHKtwDFUtDjHlmhTmzT%2B4J0AjnZ04EIBvco4GcTm8ywI1sEYrjjDbiXT1Uo18OH1NsWR9QHjwEdhuGCTh7LrMBGhSPzVPEIcdqgBUnfLkBUJZo5tYxJCqpAmZtEdFaoJKOddThTwyxUCFoqyKfu4ov4X1WELDZ8zyzd%2BJIphwUx5yD7MfagLrPX3DvjQZ4MM0xgOOKHW0qJY%2BWGQEac2rg3kkSPXrBXpW5lbaZUGHLVPe5a9JJnth7OZXcsQXlEhVkevm%2BgX0OZ5P7gsYJmL1wJVtHwRyuOx1uAALRTR%2B1A2032%2FsQ4SGq2kzbbs66OKevtL2KkWXFBmauBByR0LDI2RafBP3O23zTi0YPiutwpB8Fo0eQgOMvJuMsxxVikHPh3U2S4lD45HZzKFmh7zDIzoiKeSOuyutqQEJtvyXDLMkFPeMC06qhIz478CmXJNpyHbHoVTZEL5ZrFNRnrCBQkFeicc8mmBCZvZmH0u%2FGQRB8PQndaLJAphF7BmXS0iG6u3aQPKZ%2B3yeVWBfpTbVN4Fw%2FHQlVGQhoSxonejP29VUNw21tb%2BZzS4RwUbsYuveiTU86xfmPqCBgHtrizon86gcuLX6AC%2F7Xdb9uIUL0kFgC10ak%2FUbfG2hyq0pE4vEwqo2SvwY6pgELfLzXLPWfzGnlu9WYoGtStuhBPQ9naiW1Cp11qv4p1OE3AfIcOVLFTweQEuMm9WkbXIvRo4szOzjpDUpnWTCFBL9EF35rYfLHg0gumqrQrnTmQ3Trswo0sg8PFrFJ7Tx6yxsF0lbhoAVEbpaNDPSUATw1%2FRL57ctu9K89%2B%2FR%2Bx%2B6D7QmwJqT7ibfaBCiqYVDCArIpOS6ZA7L4y2StoMcFyFmaavqh&X-Amz-Signature=30e289c5392becfe77649ac6599fa87c58363e5dd9c85a81ae397d19d2a94333&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3X6F64%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2RpHqy3mELeV4O4w5xHOPaIkGMNkSMEpb5wu8xFaoQAiATmyca%2BnFyO%2FBSHXAsFIFUUpxv%2FZ1Rj%2BJ4KyQ4wx9EMir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrFMtiDrh7zpA7tkHKtwDFUtDjHlmhTmzT%2B4J0AjnZ04EIBvco4GcTm8ywI1sEYrjjDbiXT1Uo18OH1NsWR9QHjwEdhuGCTh7LrMBGhSPzVPEIcdqgBUnfLkBUJZo5tYxJCqpAmZtEdFaoJKOddThTwyxUCFoqyKfu4ov4X1WELDZ8zyzd%2BJIphwUx5yD7MfagLrPX3DvjQZ4MM0xgOOKHW0qJY%2BWGQEac2rg3kkSPXrBXpW5lbaZUGHLVPe5a9JJnth7OZXcsQXlEhVkevm%2BgX0OZ5P7gsYJmL1wJVtHwRyuOx1uAALRTR%2B1A2032%2FsQ4SGq2kzbbs66OKevtL2KkWXFBmauBByR0LDI2RafBP3O23zTi0YPiutwpB8Fo0eQgOMvJuMsxxVikHPh3U2S4lD45HZzKFmh7zDIzoiKeSOuyutqQEJtvyXDLMkFPeMC06qhIz478CmXJNpyHbHoVTZEL5ZrFNRnrCBQkFeicc8mmBCZvZmH0u%2FGQRB8PQndaLJAphF7BmXS0iG6u3aQPKZ%2B3yeVWBfpTbVN4Fw%2FHQlVGQhoSxonejP29VUNw21tb%2BZzS4RwUbsYuveiTU86xfmPqCBgHtrizon86gcuLX6AC%2F7Xdb9uIUL0kFgC10ak%2FUbfG2hyq0pE4vEwqo2SvwY6pgELfLzXLPWfzGnlu9WYoGtStuhBPQ9naiW1Cp11qv4p1OE3AfIcOVLFTweQEuMm9WkbXIvRo4szOzjpDUpnWTCFBL9EF35rYfLHg0gumqrQrnTmQ3Trswo0sg8PFrFJ7Tx6yxsF0lbhoAVEbpaNDPSUATw1%2FRL57ctu9K89%2B%2FR%2Bx%2B6D7QmwJqT7ibfaBCiqYVDCArIpOS6ZA7L4y2StoMcFyFmaavqh&X-Amz-Signature=5230cef5b7785c7db62c1b93739c9393ef1ff9def5e2d126454d0f0f97a0b519&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3X6F64%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2RpHqy3mELeV4O4w5xHOPaIkGMNkSMEpb5wu8xFaoQAiATmyca%2BnFyO%2FBSHXAsFIFUUpxv%2FZ1Rj%2BJ4KyQ4wx9EMir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrFMtiDrh7zpA7tkHKtwDFUtDjHlmhTmzT%2B4J0AjnZ04EIBvco4GcTm8ywI1sEYrjjDbiXT1Uo18OH1NsWR9QHjwEdhuGCTh7LrMBGhSPzVPEIcdqgBUnfLkBUJZo5tYxJCqpAmZtEdFaoJKOddThTwyxUCFoqyKfu4ov4X1WELDZ8zyzd%2BJIphwUx5yD7MfagLrPX3DvjQZ4MM0xgOOKHW0qJY%2BWGQEac2rg3kkSPXrBXpW5lbaZUGHLVPe5a9JJnth7OZXcsQXlEhVkevm%2BgX0OZ5P7gsYJmL1wJVtHwRyuOx1uAALRTR%2B1A2032%2FsQ4SGq2kzbbs66OKevtL2KkWXFBmauBByR0LDI2RafBP3O23zTi0YPiutwpB8Fo0eQgOMvJuMsxxVikHPh3U2S4lD45HZzKFmh7zDIzoiKeSOuyutqQEJtvyXDLMkFPeMC06qhIz478CmXJNpyHbHoVTZEL5ZrFNRnrCBQkFeicc8mmBCZvZmH0u%2FGQRB8PQndaLJAphF7BmXS0iG6u3aQPKZ%2B3yeVWBfpTbVN4Fw%2FHQlVGQhoSxonejP29VUNw21tb%2BZzS4RwUbsYuveiTU86xfmPqCBgHtrizon86gcuLX6AC%2F7Xdb9uIUL0kFgC10ak%2FUbfG2hyq0pE4vEwqo2SvwY6pgELfLzXLPWfzGnlu9WYoGtStuhBPQ9naiW1Cp11qv4p1OE3AfIcOVLFTweQEuMm9WkbXIvRo4szOzjpDUpnWTCFBL9EF35rYfLHg0gumqrQrnTmQ3Trswo0sg8PFrFJ7Tx6yxsF0lbhoAVEbpaNDPSUATw1%2FRL57ctu9K89%2B%2FR%2Bx%2B6D7QmwJqT7ibfaBCiqYVDCArIpOS6ZA7L4y2StoMcFyFmaavqh&X-Amz-Signature=e3a1f2bf2156ecfe38ba80f6ca7380ad23e465f49530785f6765f92e2836b281&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3X6F64%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2RpHqy3mELeV4O4w5xHOPaIkGMNkSMEpb5wu8xFaoQAiATmyca%2BnFyO%2FBSHXAsFIFUUpxv%2FZ1Rj%2BJ4KyQ4wx9EMir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrFMtiDrh7zpA7tkHKtwDFUtDjHlmhTmzT%2B4J0AjnZ04EIBvco4GcTm8ywI1sEYrjjDbiXT1Uo18OH1NsWR9QHjwEdhuGCTh7LrMBGhSPzVPEIcdqgBUnfLkBUJZo5tYxJCqpAmZtEdFaoJKOddThTwyxUCFoqyKfu4ov4X1WELDZ8zyzd%2BJIphwUx5yD7MfagLrPX3DvjQZ4MM0xgOOKHW0qJY%2BWGQEac2rg3kkSPXrBXpW5lbaZUGHLVPe5a9JJnth7OZXcsQXlEhVkevm%2BgX0OZ5P7gsYJmL1wJVtHwRyuOx1uAALRTR%2B1A2032%2FsQ4SGq2kzbbs66OKevtL2KkWXFBmauBByR0LDI2RafBP3O23zTi0YPiutwpB8Fo0eQgOMvJuMsxxVikHPh3U2S4lD45HZzKFmh7zDIzoiKeSOuyutqQEJtvyXDLMkFPeMC06qhIz478CmXJNpyHbHoVTZEL5ZrFNRnrCBQkFeicc8mmBCZvZmH0u%2FGQRB8PQndaLJAphF7BmXS0iG6u3aQPKZ%2B3yeVWBfpTbVN4Fw%2FHQlVGQhoSxonejP29VUNw21tb%2BZzS4RwUbsYuveiTU86xfmPqCBgHtrizon86gcuLX6AC%2F7Xdb9uIUL0kFgC10ak%2FUbfG2hyq0pE4vEwqo2SvwY6pgELfLzXLPWfzGnlu9WYoGtStuhBPQ9naiW1Cp11qv4p1OE3AfIcOVLFTweQEuMm9WkbXIvRo4szOzjpDUpnWTCFBL9EF35rYfLHg0gumqrQrnTmQ3Trswo0sg8PFrFJ7Tx6yxsF0lbhoAVEbpaNDPSUATw1%2FRL57ctu9K89%2B%2FR%2Bx%2B6D7QmwJqT7ibfaBCiqYVDCArIpOS6ZA7L4y2StoMcFyFmaavqh&X-Amz-Signature=52ef07130fa216be8ae404a23d5c7d3ecb7d74b70e43480f98626a5c99f2b57a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
