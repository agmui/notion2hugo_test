---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=a59f211eeff47965385a10f813094b1c8f9f37aea80ca4b12479578647e46b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=5f13c8d4480d3875fba5a3d4b51bd1fd7582a50007d392dbd67cacdb6925fdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=9d0e37725d451b2ca42a3227021d8b867fe4865cd172abaecb5de653d3d542bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=13a8c1ed342dbae5128be280d1f422a7f01649831b5783d514201737c0e675bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=36a68ced13926b48f297946783953ec44bff16ed6fafacb56d6b3d36aa37c546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
