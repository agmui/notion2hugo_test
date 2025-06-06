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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWUPOOC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBbz30FHtckYX61XIb9gUh1Aj97cuqNBx%2FxR8E6BdoHEAiAHbcGZXXwkiQfbC7keOPazx%2FA8fDE8suq%2BjueldfVfeyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMn7Zif1gQsdqujm3jKtwDH4wODdfzrsA18lQSViTsPjq3jrem7UkipppDiRsMYMjp3lI4eGuIbFJcHyhcDK3dkuhslu23JDs95AYLEXJVUUqlI6JhoxF%2F1hsiod4Z%2FhaVPEI4bxpegEcAH%2F3vq3vvik85bVQOwATKgTgDO5uFB80SOGaEkipObl8npRvxGJNx6JLLG8%2FqKIRdap8kO3MHc84Zh88SevYNf2DXR6lfRfcMHwdcZ58JLTMOENs2eeUuLYx7N0BeEZPLltoluq48%2BcREEww021A7TXTG3RyXkU0FefOJ%2BYeAlzUZbTOglUDHfUBVTZOMFeaWZT44%2BOa0r10dVqPSLMrpxV%2BZyk8uJPadNzAPBK8gBqbe3U54Du3SghEEpSChWWxw94IGYma3cxRzYE7RoOVSgFB95Y9%2Bvv2E8CmGs94m%2Feq8IoDAgy4H9L2Gl6g5rcRTlyAFBYU6uXmNHteRTRZzkUsSDgvvxrbxUPBcIGCEnUfTrAkzkwS7K4Lw%2BhxB2%2BC96VwbPuk0r3gZLu3F7JQ%2B3ULajy0dVM%2FhBt7RAXmxi4ZRVuZMG2Dre9ZL3zFPWoyw8UYUep1gOeZR3m21fpvjopycTXPR1jyxqa6tL7dd9fQ8bdA4gogtnEAX3kkurViyTFwwwpeKwgY6pgGlAviZSwxg0t4foURJe3wTKv8n0yx1seEXmJ5Xw2RtyhIlV6uLa17nhdUXhlfEMfhLSq0MprxfkUF%2BCx2ZPruz6q%2B6tE4HelCoTf76ZEAycBA82JB0O8rQr%2BIcFrAz06IkA1HBonY%2FKt6lOXrENX1TAJzPslJ6YAebvlO3U0SBnT%2B4HnCVWyxahpkfiu%2BqlQKMZ3g4qf0QvTQyZkkblbS%2BC5L7IyiO&X-Amz-Signature=64bd1a698fede7fa3fd01874df688978802440fd9980fdb42fd6abb6cb93b1b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWUPOOC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBbz30FHtckYX61XIb9gUh1Aj97cuqNBx%2FxR8E6BdoHEAiAHbcGZXXwkiQfbC7keOPazx%2FA8fDE8suq%2BjueldfVfeyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMn7Zif1gQsdqujm3jKtwDH4wODdfzrsA18lQSViTsPjq3jrem7UkipppDiRsMYMjp3lI4eGuIbFJcHyhcDK3dkuhslu23JDs95AYLEXJVUUqlI6JhoxF%2F1hsiod4Z%2FhaVPEI4bxpegEcAH%2F3vq3vvik85bVQOwATKgTgDO5uFB80SOGaEkipObl8npRvxGJNx6JLLG8%2FqKIRdap8kO3MHc84Zh88SevYNf2DXR6lfRfcMHwdcZ58JLTMOENs2eeUuLYx7N0BeEZPLltoluq48%2BcREEww021A7TXTG3RyXkU0FefOJ%2BYeAlzUZbTOglUDHfUBVTZOMFeaWZT44%2BOa0r10dVqPSLMrpxV%2BZyk8uJPadNzAPBK8gBqbe3U54Du3SghEEpSChWWxw94IGYma3cxRzYE7RoOVSgFB95Y9%2Bvv2E8CmGs94m%2Feq8IoDAgy4H9L2Gl6g5rcRTlyAFBYU6uXmNHteRTRZzkUsSDgvvxrbxUPBcIGCEnUfTrAkzkwS7K4Lw%2BhxB2%2BC96VwbPuk0r3gZLu3F7JQ%2B3ULajy0dVM%2FhBt7RAXmxi4ZRVuZMG2Dre9ZL3zFPWoyw8UYUep1gOeZR3m21fpvjopycTXPR1jyxqa6tL7dd9fQ8bdA4gogtnEAX3kkurViyTFwwwpeKwgY6pgGlAviZSwxg0t4foURJe3wTKv8n0yx1seEXmJ5Xw2RtyhIlV6uLa17nhdUXhlfEMfhLSq0MprxfkUF%2BCx2ZPruz6q%2B6tE4HelCoTf76ZEAycBA82JB0O8rQr%2BIcFrAz06IkA1HBonY%2FKt6lOXrENX1TAJzPslJ6YAebvlO3U0SBnT%2B4HnCVWyxahpkfiu%2BqlQKMZ3g4qf0QvTQyZkkblbS%2BC5L7IyiO&X-Amz-Signature=28a627727ca477825f23ef915eb82c2d9a8987ed9e62b051e88a66f52ed4d86f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWUPOOC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBbz30FHtckYX61XIb9gUh1Aj97cuqNBx%2FxR8E6BdoHEAiAHbcGZXXwkiQfbC7keOPazx%2FA8fDE8suq%2BjueldfVfeyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMn7Zif1gQsdqujm3jKtwDH4wODdfzrsA18lQSViTsPjq3jrem7UkipppDiRsMYMjp3lI4eGuIbFJcHyhcDK3dkuhslu23JDs95AYLEXJVUUqlI6JhoxF%2F1hsiod4Z%2FhaVPEI4bxpegEcAH%2F3vq3vvik85bVQOwATKgTgDO5uFB80SOGaEkipObl8npRvxGJNx6JLLG8%2FqKIRdap8kO3MHc84Zh88SevYNf2DXR6lfRfcMHwdcZ58JLTMOENs2eeUuLYx7N0BeEZPLltoluq48%2BcREEww021A7TXTG3RyXkU0FefOJ%2BYeAlzUZbTOglUDHfUBVTZOMFeaWZT44%2BOa0r10dVqPSLMrpxV%2BZyk8uJPadNzAPBK8gBqbe3U54Du3SghEEpSChWWxw94IGYma3cxRzYE7RoOVSgFB95Y9%2Bvv2E8CmGs94m%2Feq8IoDAgy4H9L2Gl6g5rcRTlyAFBYU6uXmNHteRTRZzkUsSDgvvxrbxUPBcIGCEnUfTrAkzkwS7K4Lw%2BhxB2%2BC96VwbPuk0r3gZLu3F7JQ%2B3ULajy0dVM%2FhBt7RAXmxi4ZRVuZMG2Dre9ZL3zFPWoyw8UYUep1gOeZR3m21fpvjopycTXPR1jyxqa6tL7dd9fQ8bdA4gogtnEAX3kkurViyTFwwwpeKwgY6pgGlAviZSwxg0t4foURJe3wTKv8n0yx1seEXmJ5Xw2RtyhIlV6uLa17nhdUXhlfEMfhLSq0MprxfkUF%2BCx2ZPruz6q%2B6tE4HelCoTf76ZEAycBA82JB0O8rQr%2BIcFrAz06IkA1HBonY%2FKt6lOXrENX1TAJzPslJ6YAebvlO3U0SBnT%2B4HnCVWyxahpkfiu%2BqlQKMZ3g4qf0QvTQyZkkblbS%2BC5L7IyiO&X-Amz-Signature=bbfb0743933b87f4e015fb4e576432fe6d56cac2ead9cb0d95bce977ec412a32&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWUPOOC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBbz30FHtckYX61XIb9gUh1Aj97cuqNBx%2FxR8E6BdoHEAiAHbcGZXXwkiQfbC7keOPazx%2FA8fDE8suq%2BjueldfVfeyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMn7Zif1gQsdqujm3jKtwDH4wODdfzrsA18lQSViTsPjq3jrem7UkipppDiRsMYMjp3lI4eGuIbFJcHyhcDK3dkuhslu23JDs95AYLEXJVUUqlI6JhoxF%2F1hsiod4Z%2FhaVPEI4bxpegEcAH%2F3vq3vvik85bVQOwATKgTgDO5uFB80SOGaEkipObl8npRvxGJNx6JLLG8%2FqKIRdap8kO3MHc84Zh88SevYNf2DXR6lfRfcMHwdcZ58JLTMOENs2eeUuLYx7N0BeEZPLltoluq48%2BcREEww021A7TXTG3RyXkU0FefOJ%2BYeAlzUZbTOglUDHfUBVTZOMFeaWZT44%2BOa0r10dVqPSLMrpxV%2BZyk8uJPadNzAPBK8gBqbe3U54Du3SghEEpSChWWxw94IGYma3cxRzYE7RoOVSgFB95Y9%2Bvv2E8CmGs94m%2Feq8IoDAgy4H9L2Gl6g5rcRTlyAFBYU6uXmNHteRTRZzkUsSDgvvxrbxUPBcIGCEnUfTrAkzkwS7K4Lw%2BhxB2%2BC96VwbPuk0r3gZLu3F7JQ%2B3ULajy0dVM%2FhBt7RAXmxi4ZRVuZMG2Dre9ZL3zFPWoyw8UYUep1gOeZR3m21fpvjopycTXPR1jyxqa6tL7dd9fQ8bdA4gogtnEAX3kkurViyTFwwwpeKwgY6pgGlAviZSwxg0t4foURJe3wTKv8n0yx1seEXmJ5Xw2RtyhIlV6uLa17nhdUXhlfEMfhLSq0MprxfkUF%2BCx2ZPruz6q%2B6tE4HelCoTf76ZEAycBA82JB0O8rQr%2BIcFrAz06IkA1HBonY%2FKt6lOXrENX1TAJzPslJ6YAebvlO3U0SBnT%2B4HnCVWyxahpkfiu%2BqlQKMZ3g4qf0QvTQyZkkblbS%2BC5L7IyiO&X-Amz-Signature=36d86a5cbbb66859bc8517f996b7de8a80d9e8a953d9441c5ae9ff61f143d190&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWUPOOC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBbz30FHtckYX61XIb9gUh1Aj97cuqNBx%2FxR8E6BdoHEAiAHbcGZXXwkiQfbC7keOPazx%2FA8fDE8suq%2BjueldfVfeyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMn7Zif1gQsdqujm3jKtwDH4wODdfzrsA18lQSViTsPjq3jrem7UkipppDiRsMYMjp3lI4eGuIbFJcHyhcDK3dkuhslu23JDs95AYLEXJVUUqlI6JhoxF%2F1hsiod4Z%2FhaVPEI4bxpegEcAH%2F3vq3vvik85bVQOwATKgTgDO5uFB80SOGaEkipObl8npRvxGJNx6JLLG8%2FqKIRdap8kO3MHc84Zh88SevYNf2DXR6lfRfcMHwdcZ58JLTMOENs2eeUuLYx7N0BeEZPLltoluq48%2BcREEww021A7TXTG3RyXkU0FefOJ%2BYeAlzUZbTOglUDHfUBVTZOMFeaWZT44%2BOa0r10dVqPSLMrpxV%2BZyk8uJPadNzAPBK8gBqbe3U54Du3SghEEpSChWWxw94IGYma3cxRzYE7RoOVSgFB95Y9%2Bvv2E8CmGs94m%2Feq8IoDAgy4H9L2Gl6g5rcRTlyAFBYU6uXmNHteRTRZzkUsSDgvvxrbxUPBcIGCEnUfTrAkzkwS7K4Lw%2BhxB2%2BC96VwbPuk0r3gZLu3F7JQ%2B3ULajy0dVM%2FhBt7RAXmxi4ZRVuZMG2Dre9ZL3zFPWoyw8UYUep1gOeZR3m21fpvjopycTXPR1jyxqa6tL7dd9fQ8bdA4gogtnEAX3kkurViyTFwwwpeKwgY6pgGlAviZSwxg0t4foURJe3wTKv8n0yx1seEXmJ5Xw2RtyhIlV6uLa17nhdUXhlfEMfhLSq0MprxfkUF%2BCx2ZPruz6q%2B6tE4HelCoTf76ZEAycBA82JB0O8rQr%2BIcFrAz06IkA1HBonY%2FKt6lOXrENX1TAJzPslJ6YAebvlO3U0SBnT%2B4HnCVWyxahpkfiu%2BqlQKMZ3g4qf0QvTQyZkkblbS%2BC5L7IyiO&X-Amz-Signature=d1263506f1271ea26abe60ccbce0bd1a524170d0a0988a59930affd063555d17&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
