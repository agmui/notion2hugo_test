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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZOSWD3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDcgoMX5MjNvGWCjaf2fAtMw2kB4yarqvKndgfHH1gZpgIhALvQGc%2FSDaiyuvtptxF%2BYBzC33mmb95JPji%2FAUqtxpxdKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaAOHU75QXXecDsOoq3AMCTP3ONQTWZBkM39LqxgFOFmGJwRKbdQNpICFFy6mNEpbyRa2bPQs8A80LmlOi1HLKmpcaQmqJr7hRhgeliOllPyEFi7xmIy7IYJrrPQCNUZUUoRCWyGDls4RHmE40iPJEk0%2F0O63KkffQmzpq39KJIYcyVvJE19mt41okSglC41Mrl1TnpXGa7rQ7Jo5kSF19rzmB8NSIy5CZCElu4NIqIdNrsuEHFuOKkm4%2BvojDc6%2Bq4Qc9H1Mr54VU6KHGorPFzbX%2FmiBghFplBhl7a7s9oi4Hs%2BfImSHDLVfg3ca5Bp97%2FhDibJeiqKASADiZPNZlyay9B1Ft3csVg5HTpW4vvlyIJBMx6BZIrnRYPre6KssHY8RQxTmDMvJ44hoi1F94CyhoEybw%2FH2dScqgfZGNFShTnkI9UJ%2B1EzjGQ66E7mxU%2BNJZBXL06njnwR9qMfxAETAgfgPyWJJNVsLXrExJX%2BksmcDMP%2BQ8NV1zbAiZYax5JwjSvBqnq5BuohqlLXYsWDRvf%2BSbJ%2BLDVpinvSamKGtZ5l3lJqXQ2xN9r%2B9f3%2FXlz0wCD9M5XIr2ARPN40J5Rp84ERqEgbUUvdE0Qho%2F3abdECYAklFUv3oxmb7kXQnKmi5uzHrUzSGxnzDHhv7ABjqkAX5M5YEcmlAWHAu%2FjkObAUTwCGarLrQRXyyRkhZUCjBwE%2FYkAHfJ775FTLcnJjT75M97L3CL7%2B%2FQ1aV2Ftjmn5vaY%2FL0nAhhEuNyy8Tv6ahysp2%2BXhXPrK6WKGteff75dSE2PE%2B1i9LF9%2FQr4PQwlxGezzwCdczjFQHZe%2BKzIXm%2BVvvRNaaCa%2BQ%2BSRV1x8MvRVWFgkGT28vg4LchSObb2EiK2%2Bur&X-Amz-Signature=daa240dfca8a9846a4826f3c907b6e29c91e282e429389f176c4e40fe30990b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZOSWD3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDcgoMX5MjNvGWCjaf2fAtMw2kB4yarqvKndgfHH1gZpgIhALvQGc%2FSDaiyuvtptxF%2BYBzC33mmb95JPji%2FAUqtxpxdKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaAOHU75QXXecDsOoq3AMCTP3ONQTWZBkM39LqxgFOFmGJwRKbdQNpICFFy6mNEpbyRa2bPQs8A80LmlOi1HLKmpcaQmqJr7hRhgeliOllPyEFi7xmIy7IYJrrPQCNUZUUoRCWyGDls4RHmE40iPJEk0%2F0O63KkffQmzpq39KJIYcyVvJE19mt41okSglC41Mrl1TnpXGa7rQ7Jo5kSF19rzmB8NSIy5CZCElu4NIqIdNrsuEHFuOKkm4%2BvojDc6%2Bq4Qc9H1Mr54VU6KHGorPFzbX%2FmiBghFplBhl7a7s9oi4Hs%2BfImSHDLVfg3ca5Bp97%2FhDibJeiqKASADiZPNZlyay9B1Ft3csVg5HTpW4vvlyIJBMx6BZIrnRYPre6KssHY8RQxTmDMvJ44hoi1F94CyhoEybw%2FH2dScqgfZGNFShTnkI9UJ%2B1EzjGQ66E7mxU%2BNJZBXL06njnwR9qMfxAETAgfgPyWJJNVsLXrExJX%2BksmcDMP%2BQ8NV1zbAiZYax5JwjSvBqnq5BuohqlLXYsWDRvf%2BSbJ%2BLDVpinvSamKGtZ5l3lJqXQ2xN9r%2B9f3%2FXlz0wCD9M5XIr2ARPN40J5Rp84ERqEgbUUvdE0Qho%2F3abdECYAklFUv3oxmb7kXQnKmi5uzHrUzSGxnzDHhv7ABjqkAX5M5YEcmlAWHAu%2FjkObAUTwCGarLrQRXyyRkhZUCjBwE%2FYkAHfJ775FTLcnJjT75M97L3CL7%2B%2FQ1aV2Ftjmn5vaY%2FL0nAhhEuNyy8Tv6ahysp2%2BXhXPrK6WKGteff75dSE2PE%2B1i9LF9%2FQr4PQwlxGezzwCdczjFQHZe%2BKzIXm%2BVvvRNaaCa%2BQ%2BSRV1x8MvRVWFgkGT28vg4LchSObb2EiK2%2Bur&X-Amz-Signature=2e1ec73d86d65a3078cc43cd172a2665ea938c1bfb822765169b3dbba450059f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZOSWD3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDcgoMX5MjNvGWCjaf2fAtMw2kB4yarqvKndgfHH1gZpgIhALvQGc%2FSDaiyuvtptxF%2BYBzC33mmb95JPji%2FAUqtxpxdKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaAOHU75QXXecDsOoq3AMCTP3ONQTWZBkM39LqxgFOFmGJwRKbdQNpICFFy6mNEpbyRa2bPQs8A80LmlOi1HLKmpcaQmqJr7hRhgeliOllPyEFi7xmIy7IYJrrPQCNUZUUoRCWyGDls4RHmE40iPJEk0%2F0O63KkffQmzpq39KJIYcyVvJE19mt41okSglC41Mrl1TnpXGa7rQ7Jo5kSF19rzmB8NSIy5CZCElu4NIqIdNrsuEHFuOKkm4%2BvojDc6%2Bq4Qc9H1Mr54VU6KHGorPFzbX%2FmiBghFplBhl7a7s9oi4Hs%2BfImSHDLVfg3ca5Bp97%2FhDibJeiqKASADiZPNZlyay9B1Ft3csVg5HTpW4vvlyIJBMx6BZIrnRYPre6KssHY8RQxTmDMvJ44hoi1F94CyhoEybw%2FH2dScqgfZGNFShTnkI9UJ%2B1EzjGQ66E7mxU%2BNJZBXL06njnwR9qMfxAETAgfgPyWJJNVsLXrExJX%2BksmcDMP%2BQ8NV1zbAiZYax5JwjSvBqnq5BuohqlLXYsWDRvf%2BSbJ%2BLDVpinvSamKGtZ5l3lJqXQ2xN9r%2B9f3%2FXlz0wCD9M5XIr2ARPN40J5Rp84ERqEgbUUvdE0Qho%2F3abdECYAklFUv3oxmb7kXQnKmi5uzHrUzSGxnzDHhv7ABjqkAX5M5YEcmlAWHAu%2FjkObAUTwCGarLrQRXyyRkhZUCjBwE%2FYkAHfJ775FTLcnJjT75M97L3CL7%2B%2FQ1aV2Ftjmn5vaY%2FL0nAhhEuNyy8Tv6ahysp2%2BXhXPrK6WKGteff75dSE2PE%2B1i9LF9%2FQr4PQwlxGezzwCdczjFQHZe%2BKzIXm%2BVvvRNaaCa%2BQ%2BSRV1x8MvRVWFgkGT28vg4LchSObb2EiK2%2Bur&X-Amz-Signature=a7532cfc4c551a12f4f3b6d8b3f7d1e1f1f3ae1a0f6cc35a049b8c57c1983a65&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZOSWD3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDcgoMX5MjNvGWCjaf2fAtMw2kB4yarqvKndgfHH1gZpgIhALvQGc%2FSDaiyuvtptxF%2BYBzC33mmb95JPji%2FAUqtxpxdKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaAOHU75QXXecDsOoq3AMCTP3ONQTWZBkM39LqxgFOFmGJwRKbdQNpICFFy6mNEpbyRa2bPQs8A80LmlOi1HLKmpcaQmqJr7hRhgeliOllPyEFi7xmIy7IYJrrPQCNUZUUoRCWyGDls4RHmE40iPJEk0%2F0O63KkffQmzpq39KJIYcyVvJE19mt41okSglC41Mrl1TnpXGa7rQ7Jo5kSF19rzmB8NSIy5CZCElu4NIqIdNrsuEHFuOKkm4%2BvojDc6%2Bq4Qc9H1Mr54VU6KHGorPFzbX%2FmiBghFplBhl7a7s9oi4Hs%2BfImSHDLVfg3ca5Bp97%2FhDibJeiqKASADiZPNZlyay9B1Ft3csVg5HTpW4vvlyIJBMx6BZIrnRYPre6KssHY8RQxTmDMvJ44hoi1F94CyhoEybw%2FH2dScqgfZGNFShTnkI9UJ%2B1EzjGQ66E7mxU%2BNJZBXL06njnwR9qMfxAETAgfgPyWJJNVsLXrExJX%2BksmcDMP%2BQ8NV1zbAiZYax5JwjSvBqnq5BuohqlLXYsWDRvf%2BSbJ%2BLDVpinvSamKGtZ5l3lJqXQ2xN9r%2B9f3%2FXlz0wCD9M5XIr2ARPN40J5Rp84ERqEgbUUvdE0Qho%2F3abdECYAklFUv3oxmb7kXQnKmi5uzHrUzSGxnzDHhv7ABjqkAX5M5YEcmlAWHAu%2FjkObAUTwCGarLrQRXyyRkhZUCjBwE%2FYkAHfJ775FTLcnJjT75M97L3CL7%2B%2FQ1aV2Ftjmn5vaY%2FL0nAhhEuNyy8Tv6ahysp2%2BXhXPrK6WKGteff75dSE2PE%2B1i9LF9%2FQr4PQwlxGezzwCdczjFQHZe%2BKzIXm%2BVvvRNaaCa%2BQ%2BSRV1x8MvRVWFgkGT28vg4LchSObb2EiK2%2Bur&X-Amz-Signature=0eac5276aeaa13571db11cf3f5997b098250c28ded59ef38d1b6ac928ba52cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZOSWD3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDcgoMX5MjNvGWCjaf2fAtMw2kB4yarqvKndgfHH1gZpgIhALvQGc%2FSDaiyuvtptxF%2BYBzC33mmb95JPji%2FAUqtxpxdKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaAOHU75QXXecDsOoq3AMCTP3ONQTWZBkM39LqxgFOFmGJwRKbdQNpICFFy6mNEpbyRa2bPQs8A80LmlOi1HLKmpcaQmqJr7hRhgeliOllPyEFi7xmIy7IYJrrPQCNUZUUoRCWyGDls4RHmE40iPJEk0%2F0O63KkffQmzpq39KJIYcyVvJE19mt41okSglC41Mrl1TnpXGa7rQ7Jo5kSF19rzmB8NSIy5CZCElu4NIqIdNrsuEHFuOKkm4%2BvojDc6%2Bq4Qc9H1Mr54VU6KHGorPFzbX%2FmiBghFplBhl7a7s9oi4Hs%2BfImSHDLVfg3ca5Bp97%2FhDibJeiqKASADiZPNZlyay9B1Ft3csVg5HTpW4vvlyIJBMx6BZIrnRYPre6KssHY8RQxTmDMvJ44hoi1F94CyhoEybw%2FH2dScqgfZGNFShTnkI9UJ%2B1EzjGQ66E7mxU%2BNJZBXL06njnwR9qMfxAETAgfgPyWJJNVsLXrExJX%2BksmcDMP%2BQ8NV1zbAiZYax5JwjSvBqnq5BuohqlLXYsWDRvf%2BSbJ%2BLDVpinvSamKGtZ5l3lJqXQ2xN9r%2B9f3%2FXlz0wCD9M5XIr2ARPN40J5Rp84ERqEgbUUvdE0Qho%2F3abdECYAklFUv3oxmb7kXQnKmi5uzHrUzSGxnzDHhv7ABjqkAX5M5YEcmlAWHAu%2FjkObAUTwCGarLrQRXyyRkhZUCjBwE%2FYkAHfJ775FTLcnJjT75M97L3CL7%2B%2FQ1aV2Ftjmn5vaY%2FL0nAhhEuNyy8Tv6ahysp2%2BXhXPrK6WKGteff75dSE2PE%2B1i9LF9%2FQr4PQwlxGezzwCdczjFQHZe%2BKzIXm%2BVvvRNaaCa%2BQ%2BSRV1x8MvRVWFgkGT28vg4LchSObb2EiK2%2Bur&X-Amz-Signature=7729fc80b157506985fba0efe292172a05ea453713a9398589f1aa36d660e09c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
