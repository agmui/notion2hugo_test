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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7CZQZ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDh4yob8Q2tBZc663j1lp2Z2TN97uyE66cRH5QZsoD8GAiA%2BFLXDM8k2cANgULKNp7Vgz0K2Zx%2FgRyjhn4Rx8IO4lCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMtU87IBkD%2FoHfJiYqKtwDYtrfmR4YAUKGbDX3hC%2FO88HYe8Sp0amQ%2FKzugXrmNY4Or2hw8KKdP2R7X36Ct%2B5Yycj%2B3LSBCSLmSko75QTM2fqBy5JnvxUcG8yFYbdC6ziTGD5%2FUYwpKFQW1tkPto0UNfMPPLdXO6CJ5TRAdVxMOc%2BGAzUqjJS9eAEnSfkVXJ3dnhbHsM3pGL3an9VOpzljZdDQvUhqH%2FOkj%2BGkdWHJS83eS%2F6aWhPLRrhdaC30hyAAAgwnXYH%2BD0L%2BgcSm2Gxg%2Fg6ikjLPkNni8os8DJetcq8usPghuR0n5oZaSt1B7bEw5q8oyrfD07waV1fKgF1bTFLP1jpR61ZfZl%2BDXyYdbZHez%2FwO5xf5okysExKniO7L8uXVh5cWo0moesriUsW%2BmRMAYuUwiyVbGEcjc%2FVVSaSLtBFCPvC0NFdAfzYCmhmypxaQFtIRniczrAFiOtDoA8a2xaWWvUccOCu5bu7pusTyLMITlF0TOqFRnjlp06hHHIZHmFaaS%2BJSFKKFoc96LelfOQwuRPIqlhAELWAWSzQ1FBtNS0jhTFZh0B5TLBGcu4KbeKAqs2k3MxChMeW7SZGG6ZhE0tVj84nsERwsxSPYfJG%2FYyRbAMYyp0vWdtuLEwJHPn9He1kD8qwwlPmYxAY6pgEwRLXNPyYjZ7xbbH5iFschgveWz2Ma5E%2BUYJuQ6UOyjz%2FeNHfvaFJyTIkutunA4a9YXkHXKlcsMEBc0Rhfz80A1r1y4RQneW0Tf7qiIN7WvD7QdENokxxbEzS839rZPPnckTTYZJKuvtGSqHNZHCjvJ973U2Y%2FmLMGQoMbhC6iKjg5Qix5FuMKw%2F7GZkKrKqFBfVyezH5wbdNtGT61iZKiDHAxUbmM&X-Amz-Signature=cc38af7eae39ffc26e902cf88347c7d62a71df0cd85050134d7c92338620baa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7CZQZ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDh4yob8Q2tBZc663j1lp2Z2TN97uyE66cRH5QZsoD8GAiA%2BFLXDM8k2cANgULKNp7Vgz0K2Zx%2FgRyjhn4Rx8IO4lCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMtU87IBkD%2FoHfJiYqKtwDYtrfmR4YAUKGbDX3hC%2FO88HYe8Sp0amQ%2FKzugXrmNY4Or2hw8KKdP2R7X36Ct%2B5Yycj%2B3LSBCSLmSko75QTM2fqBy5JnvxUcG8yFYbdC6ziTGD5%2FUYwpKFQW1tkPto0UNfMPPLdXO6CJ5TRAdVxMOc%2BGAzUqjJS9eAEnSfkVXJ3dnhbHsM3pGL3an9VOpzljZdDQvUhqH%2FOkj%2BGkdWHJS83eS%2F6aWhPLRrhdaC30hyAAAgwnXYH%2BD0L%2BgcSm2Gxg%2Fg6ikjLPkNni8os8DJetcq8usPghuR0n5oZaSt1B7bEw5q8oyrfD07waV1fKgF1bTFLP1jpR61ZfZl%2BDXyYdbZHez%2FwO5xf5okysExKniO7L8uXVh5cWo0moesriUsW%2BmRMAYuUwiyVbGEcjc%2FVVSaSLtBFCPvC0NFdAfzYCmhmypxaQFtIRniczrAFiOtDoA8a2xaWWvUccOCu5bu7pusTyLMITlF0TOqFRnjlp06hHHIZHmFaaS%2BJSFKKFoc96LelfOQwuRPIqlhAELWAWSzQ1FBtNS0jhTFZh0B5TLBGcu4KbeKAqs2k3MxChMeW7SZGG6ZhE0tVj84nsERwsxSPYfJG%2FYyRbAMYyp0vWdtuLEwJHPn9He1kD8qwwlPmYxAY6pgEwRLXNPyYjZ7xbbH5iFschgveWz2Ma5E%2BUYJuQ6UOyjz%2FeNHfvaFJyTIkutunA4a9YXkHXKlcsMEBc0Rhfz80A1r1y4RQneW0Tf7qiIN7WvD7QdENokxxbEzS839rZPPnckTTYZJKuvtGSqHNZHCjvJ973U2Y%2FmLMGQoMbhC6iKjg5Qix5FuMKw%2F7GZkKrKqFBfVyezH5wbdNtGT61iZKiDHAxUbmM&X-Amz-Signature=55a46a7853e95fb7a9a6434c56f0ec0c347445e78eff6433aa87dcbef635f402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7CZQZ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDh4yob8Q2tBZc663j1lp2Z2TN97uyE66cRH5QZsoD8GAiA%2BFLXDM8k2cANgULKNp7Vgz0K2Zx%2FgRyjhn4Rx8IO4lCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMtU87IBkD%2FoHfJiYqKtwDYtrfmR4YAUKGbDX3hC%2FO88HYe8Sp0amQ%2FKzugXrmNY4Or2hw8KKdP2R7X36Ct%2B5Yycj%2B3LSBCSLmSko75QTM2fqBy5JnvxUcG8yFYbdC6ziTGD5%2FUYwpKFQW1tkPto0UNfMPPLdXO6CJ5TRAdVxMOc%2BGAzUqjJS9eAEnSfkVXJ3dnhbHsM3pGL3an9VOpzljZdDQvUhqH%2FOkj%2BGkdWHJS83eS%2F6aWhPLRrhdaC30hyAAAgwnXYH%2BD0L%2BgcSm2Gxg%2Fg6ikjLPkNni8os8DJetcq8usPghuR0n5oZaSt1B7bEw5q8oyrfD07waV1fKgF1bTFLP1jpR61ZfZl%2BDXyYdbZHez%2FwO5xf5okysExKniO7L8uXVh5cWo0moesriUsW%2BmRMAYuUwiyVbGEcjc%2FVVSaSLtBFCPvC0NFdAfzYCmhmypxaQFtIRniczrAFiOtDoA8a2xaWWvUccOCu5bu7pusTyLMITlF0TOqFRnjlp06hHHIZHmFaaS%2BJSFKKFoc96LelfOQwuRPIqlhAELWAWSzQ1FBtNS0jhTFZh0B5TLBGcu4KbeKAqs2k3MxChMeW7SZGG6ZhE0tVj84nsERwsxSPYfJG%2FYyRbAMYyp0vWdtuLEwJHPn9He1kD8qwwlPmYxAY6pgEwRLXNPyYjZ7xbbH5iFschgveWz2Ma5E%2BUYJuQ6UOyjz%2FeNHfvaFJyTIkutunA4a9YXkHXKlcsMEBc0Rhfz80A1r1y4RQneW0Tf7qiIN7WvD7QdENokxxbEzS839rZPPnckTTYZJKuvtGSqHNZHCjvJ973U2Y%2FmLMGQoMbhC6iKjg5Qix5FuMKw%2F7GZkKrKqFBfVyezH5wbdNtGT61iZKiDHAxUbmM&X-Amz-Signature=41fb1a68ed8fa72148f706c4308ad5f09704bbd0f882f0741c418c848d5d5c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7CZQZ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDh4yob8Q2tBZc663j1lp2Z2TN97uyE66cRH5QZsoD8GAiA%2BFLXDM8k2cANgULKNp7Vgz0K2Zx%2FgRyjhn4Rx8IO4lCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMtU87IBkD%2FoHfJiYqKtwDYtrfmR4YAUKGbDX3hC%2FO88HYe8Sp0amQ%2FKzugXrmNY4Or2hw8KKdP2R7X36Ct%2B5Yycj%2B3LSBCSLmSko75QTM2fqBy5JnvxUcG8yFYbdC6ziTGD5%2FUYwpKFQW1tkPto0UNfMPPLdXO6CJ5TRAdVxMOc%2BGAzUqjJS9eAEnSfkVXJ3dnhbHsM3pGL3an9VOpzljZdDQvUhqH%2FOkj%2BGkdWHJS83eS%2F6aWhPLRrhdaC30hyAAAgwnXYH%2BD0L%2BgcSm2Gxg%2Fg6ikjLPkNni8os8DJetcq8usPghuR0n5oZaSt1B7bEw5q8oyrfD07waV1fKgF1bTFLP1jpR61ZfZl%2BDXyYdbZHez%2FwO5xf5okysExKniO7L8uXVh5cWo0moesriUsW%2BmRMAYuUwiyVbGEcjc%2FVVSaSLtBFCPvC0NFdAfzYCmhmypxaQFtIRniczrAFiOtDoA8a2xaWWvUccOCu5bu7pusTyLMITlF0TOqFRnjlp06hHHIZHmFaaS%2BJSFKKFoc96LelfOQwuRPIqlhAELWAWSzQ1FBtNS0jhTFZh0B5TLBGcu4KbeKAqs2k3MxChMeW7SZGG6ZhE0tVj84nsERwsxSPYfJG%2FYyRbAMYyp0vWdtuLEwJHPn9He1kD8qwwlPmYxAY6pgEwRLXNPyYjZ7xbbH5iFschgveWz2Ma5E%2BUYJuQ6UOyjz%2FeNHfvaFJyTIkutunA4a9YXkHXKlcsMEBc0Rhfz80A1r1y4RQneW0Tf7qiIN7WvD7QdENokxxbEzS839rZPPnckTTYZJKuvtGSqHNZHCjvJ973U2Y%2FmLMGQoMbhC6iKjg5Qix5FuMKw%2F7GZkKrKqFBfVyezH5wbdNtGT61iZKiDHAxUbmM&X-Amz-Signature=32801ee434446825efccce2399a27eb08e82504275705d1c35c6428e13cdc978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7CZQZ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDh4yob8Q2tBZc663j1lp2Z2TN97uyE66cRH5QZsoD8GAiA%2BFLXDM8k2cANgULKNp7Vgz0K2Zx%2FgRyjhn4Rx8IO4lCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMtU87IBkD%2FoHfJiYqKtwDYtrfmR4YAUKGbDX3hC%2FO88HYe8Sp0amQ%2FKzugXrmNY4Or2hw8KKdP2R7X36Ct%2B5Yycj%2B3LSBCSLmSko75QTM2fqBy5JnvxUcG8yFYbdC6ziTGD5%2FUYwpKFQW1tkPto0UNfMPPLdXO6CJ5TRAdVxMOc%2BGAzUqjJS9eAEnSfkVXJ3dnhbHsM3pGL3an9VOpzljZdDQvUhqH%2FOkj%2BGkdWHJS83eS%2F6aWhPLRrhdaC30hyAAAgwnXYH%2BD0L%2BgcSm2Gxg%2Fg6ikjLPkNni8os8DJetcq8usPghuR0n5oZaSt1B7bEw5q8oyrfD07waV1fKgF1bTFLP1jpR61ZfZl%2BDXyYdbZHez%2FwO5xf5okysExKniO7L8uXVh5cWo0moesriUsW%2BmRMAYuUwiyVbGEcjc%2FVVSaSLtBFCPvC0NFdAfzYCmhmypxaQFtIRniczrAFiOtDoA8a2xaWWvUccOCu5bu7pusTyLMITlF0TOqFRnjlp06hHHIZHmFaaS%2BJSFKKFoc96LelfOQwuRPIqlhAELWAWSzQ1FBtNS0jhTFZh0B5TLBGcu4KbeKAqs2k3MxChMeW7SZGG6ZhE0tVj84nsERwsxSPYfJG%2FYyRbAMYyp0vWdtuLEwJHPn9He1kD8qwwlPmYxAY6pgEwRLXNPyYjZ7xbbH5iFschgveWz2Ma5E%2BUYJuQ6UOyjz%2FeNHfvaFJyTIkutunA4a9YXkHXKlcsMEBc0Rhfz80A1r1y4RQneW0Tf7qiIN7WvD7QdENokxxbEzS839rZPPnckTTYZJKuvtGSqHNZHCjvJ973U2Y%2FmLMGQoMbhC6iKjg5Qix5FuMKw%2F7GZkKrKqFBfVyezH5wbdNtGT61iZKiDHAxUbmM&X-Amz-Signature=f7046b7b72d0d83a9c39077b191b4eccd7215c652e17b1749423a6123fadd45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
