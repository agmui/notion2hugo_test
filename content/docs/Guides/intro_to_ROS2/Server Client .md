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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643M2JX7I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIE%2BoUPnyMa5g8b6Voxn9TXfeTi35zRhEdC6WDL7kzihKAiEAuoDSWMZNJm54iPY8J%2B9e4ftsGMJ9pGWgKFmq8HjXErQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFJAG4zZSrc%2FYTzanircA6PMH7bJoyBbUUFK%2F1Vd62VIyzGvSqUB1eFx74I6AvtJcYrX3VRRAlYLAq%2F658omliUDYMnIicAqtRnraoMG0QMOYKhza5IRkdEFWTs91Dy%2FBWxkWNdCR%2Bxhle9WvfuE8hBocCV6t%2B42Ob7C6njF%2BbYXHAyUlrHuQLC08ydWWGOkPxc1xG2K3cB3DA68UO2ia67QT7A8ALxot4YtcCGqJR46o%2FH60qtGhQJ7%2FySgWN%2B%2FtzWfyMGUiKkrt8%2B2DmenkY85jX7qAzQJne0mPdvhngeFxSitgPH2nKsy%2BlbWV9gfhtqmykItAyJW6i51VRKIzZ5mj6%2FNjh2yzCOvQRs1hCeJ96b2204RfnGCkEf4H6FPsWEvQVvQ88UbKDG1PoYfGLpx2bWFh8HK6U0YmT1dDo%2BPqo%2FhyJsip5meTUgW8gcCw6Ui7tTAeTZf8ioZd1yqA5E5L22g2zi2rP64P6w4qTFPds5ILpeX6%2BWg4v0QtpSqqv%2B52F%2FjnqJABAMDsNUhFqmEyuUyRgkQFZxdC0TzcyKRfKv6Z5bKtoz2KHcxHlnD%2BtiOeOPKHfelTdXV%2B%2FokW1yLfb1wol5lci1aTgnbspe9SQSy1Lij5cSIdOoNcq1yR61lMzkDKOVC96OtMJHU18MGOqUBwAC23OoRaAnAq23%2FL9e%2FucOcY9ZsB2khwrvlF7Wec4zw5GyHCbch1AAG6%2FMOOiYmoVckgckU4LWmxrHDk7Gwb0mBMKbFCqjMpEPGc%2FjE4LRbGUnKD6%2FHfoj%2BdbeyrSch1jT6Xf3Y3uM4UMuG%2B6xLUi4UeBYJDh%2FSAW3pNSa0nuRid5v0mRZ5MtMqccOx%2FJjypLctMx94Ym4kipmmqN35UJJ9l6P0&X-Amz-Signature=3a571bc1581efac0f27060014285365bdefc3a017f97df6c0756e37a483e7095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643M2JX7I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIE%2BoUPnyMa5g8b6Voxn9TXfeTi35zRhEdC6WDL7kzihKAiEAuoDSWMZNJm54iPY8J%2B9e4ftsGMJ9pGWgKFmq8HjXErQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFJAG4zZSrc%2FYTzanircA6PMH7bJoyBbUUFK%2F1Vd62VIyzGvSqUB1eFx74I6AvtJcYrX3VRRAlYLAq%2F658omliUDYMnIicAqtRnraoMG0QMOYKhza5IRkdEFWTs91Dy%2FBWxkWNdCR%2Bxhle9WvfuE8hBocCV6t%2B42Ob7C6njF%2BbYXHAyUlrHuQLC08ydWWGOkPxc1xG2K3cB3DA68UO2ia67QT7A8ALxot4YtcCGqJR46o%2FH60qtGhQJ7%2FySgWN%2B%2FtzWfyMGUiKkrt8%2B2DmenkY85jX7qAzQJne0mPdvhngeFxSitgPH2nKsy%2BlbWV9gfhtqmykItAyJW6i51VRKIzZ5mj6%2FNjh2yzCOvQRs1hCeJ96b2204RfnGCkEf4H6FPsWEvQVvQ88UbKDG1PoYfGLpx2bWFh8HK6U0YmT1dDo%2BPqo%2FhyJsip5meTUgW8gcCw6Ui7tTAeTZf8ioZd1yqA5E5L22g2zi2rP64P6w4qTFPds5ILpeX6%2BWg4v0QtpSqqv%2B52F%2FjnqJABAMDsNUhFqmEyuUyRgkQFZxdC0TzcyKRfKv6Z5bKtoz2KHcxHlnD%2BtiOeOPKHfelTdXV%2B%2FokW1yLfb1wol5lci1aTgnbspe9SQSy1Lij5cSIdOoNcq1yR61lMzkDKOVC96OtMJHU18MGOqUBwAC23OoRaAnAq23%2FL9e%2FucOcY9ZsB2khwrvlF7Wec4zw5GyHCbch1AAG6%2FMOOiYmoVckgckU4LWmxrHDk7Gwb0mBMKbFCqjMpEPGc%2FjE4LRbGUnKD6%2FHfoj%2BdbeyrSch1jT6Xf3Y3uM4UMuG%2B6xLUi4UeBYJDh%2FSAW3pNSa0nuRid5v0mRZ5MtMqccOx%2FJjypLctMx94Ym4kipmmqN35UJJ9l6P0&X-Amz-Signature=c190a68c588dcdd4ca5e01e10e746ea5f5c2bc98df2e6631958cc691ddf4a57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643M2JX7I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIE%2BoUPnyMa5g8b6Voxn9TXfeTi35zRhEdC6WDL7kzihKAiEAuoDSWMZNJm54iPY8J%2B9e4ftsGMJ9pGWgKFmq8HjXErQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFJAG4zZSrc%2FYTzanircA6PMH7bJoyBbUUFK%2F1Vd62VIyzGvSqUB1eFx74I6AvtJcYrX3VRRAlYLAq%2F658omliUDYMnIicAqtRnraoMG0QMOYKhza5IRkdEFWTs91Dy%2FBWxkWNdCR%2Bxhle9WvfuE8hBocCV6t%2B42Ob7C6njF%2BbYXHAyUlrHuQLC08ydWWGOkPxc1xG2K3cB3DA68UO2ia67QT7A8ALxot4YtcCGqJR46o%2FH60qtGhQJ7%2FySgWN%2B%2FtzWfyMGUiKkrt8%2B2DmenkY85jX7qAzQJne0mPdvhngeFxSitgPH2nKsy%2BlbWV9gfhtqmykItAyJW6i51VRKIzZ5mj6%2FNjh2yzCOvQRs1hCeJ96b2204RfnGCkEf4H6FPsWEvQVvQ88UbKDG1PoYfGLpx2bWFh8HK6U0YmT1dDo%2BPqo%2FhyJsip5meTUgW8gcCw6Ui7tTAeTZf8ioZd1yqA5E5L22g2zi2rP64P6w4qTFPds5ILpeX6%2BWg4v0QtpSqqv%2B52F%2FjnqJABAMDsNUhFqmEyuUyRgkQFZxdC0TzcyKRfKv6Z5bKtoz2KHcxHlnD%2BtiOeOPKHfelTdXV%2B%2FokW1yLfb1wol5lci1aTgnbspe9SQSy1Lij5cSIdOoNcq1yR61lMzkDKOVC96OtMJHU18MGOqUBwAC23OoRaAnAq23%2FL9e%2FucOcY9ZsB2khwrvlF7Wec4zw5GyHCbch1AAG6%2FMOOiYmoVckgckU4LWmxrHDk7Gwb0mBMKbFCqjMpEPGc%2FjE4LRbGUnKD6%2FHfoj%2BdbeyrSch1jT6Xf3Y3uM4UMuG%2B6xLUi4UeBYJDh%2FSAW3pNSa0nuRid5v0mRZ5MtMqccOx%2FJjypLctMx94Ym4kipmmqN35UJJ9l6P0&X-Amz-Signature=faac40dfa5475b86eb65aaf7c18fdeac462b637a7935886e8b10545a4e692e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643M2JX7I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIE%2BoUPnyMa5g8b6Voxn9TXfeTi35zRhEdC6WDL7kzihKAiEAuoDSWMZNJm54iPY8J%2B9e4ftsGMJ9pGWgKFmq8HjXErQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFJAG4zZSrc%2FYTzanircA6PMH7bJoyBbUUFK%2F1Vd62VIyzGvSqUB1eFx74I6AvtJcYrX3VRRAlYLAq%2F658omliUDYMnIicAqtRnraoMG0QMOYKhza5IRkdEFWTs91Dy%2FBWxkWNdCR%2Bxhle9WvfuE8hBocCV6t%2B42Ob7C6njF%2BbYXHAyUlrHuQLC08ydWWGOkPxc1xG2K3cB3DA68UO2ia67QT7A8ALxot4YtcCGqJR46o%2FH60qtGhQJ7%2FySgWN%2B%2FtzWfyMGUiKkrt8%2B2DmenkY85jX7qAzQJne0mPdvhngeFxSitgPH2nKsy%2BlbWV9gfhtqmykItAyJW6i51VRKIzZ5mj6%2FNjh2yzCOvQRs1hCeJ96b2204RfnGCkEf4H6FPsWEvQVvQ88UbKDG1PoYfGLpx2bWFh8HK6U0YmT1dDo%2BPqo%2FhyJsip5meTUgW8gcCw6Ui7tTAeTZf8ioZd1yqA5E5L22g2zi2rP64P6w4qTFPds5ILpeX6%2BWg4v0QtpSqqv%2B52F%2FjnqJABAMDsNUhFqmEyuUyRgkQFZxdC0TzcyKRfKv6Z5bKtoz2KHcxHlnD%2BtiOeOPKHfelTdXV%2B%2FokW1yLfb1wol5lci1aTgnbspe9SQSy1Lij5cSIdOoNcq1yR61lMzkDKOVC96OtMJHU18MGOqUBwAC23OoRaAnAq23%2FL9e%2FucOcY9ZsB2khwrvlF7Wec4zw5GyHCbch1AAG6%2FMOOiYmoVckgckU4LWmxrHDk7Gwb0mBMKbFCqjMpEPGc%2FjE4LRbGUnKD6%2FHfoj%2BdbeyrSch1jT6Xf3Y3uM4UMuG%2B6xLUi4UeBYJDh%2FSAW3pNSa0nuRid5v0mRZ5MtMqccOx%2FJjypLctMx94Ym4kipmmqN35UJJ9l6P0&X-Amz-Signature=0e15db7d9a5b41d8c47031c0a0d56b025c6c3128f1e7da65cc746ecb76804fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643M2JX7I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIE%2BoUPnyMa5g8b6Voxn9TXfeTi35zRhEdC6WDL7kzihKAiEAuoDSWMZNJm54iPY8J%2B9e4ftsGMJ9pGWgKFmq8HjXErQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFJAG4zZSrc%2FYTzanircA6PMH7bJoyBbUUFK%2F1Vd62VIyzGvSqUB1eFx74I6AvtJcYrX3VRRAlYLAq%2F658omliUDYMnIicAqtRnraoMG0QMOYKhza5IRkdEFWTs91Dy%2FBWxkWNdCR%2Bxhle9WvfuE8hBocCV6t%2B42Ob7C6njF%2BbYXHAyUlrHuQLC08ydWWGOkPxc1xG2K3cB3DA68UO2ia67QT7A8ALxot4YtcCGqJR46o%2FH60qtGhQJ7%2FySgWN%2B%2FtzWfyMGUiKkrt8%2B2DmenkY85jX7qAzQJne0mPdvhngeFxSitgPH2nKsy%2BlbWV9gfhtqmykItAyJW6i51VRKIzZ5mj6%2FNjh2yzCOvQRs1hCeJ96b2204RfnGCkEf4H6FPsWEvQVvQ88UbKDG1PoYfGLpx2bWFh8HK6U0YmT1dDo%2BPqo%2FhyJsip5meTUgW8gcCw6Ui7tTAeTZf8ioZd1yqA5E5L22g2zi2rP64P6w4qTFPds5ILpeX6%2BWg4v0QtpSqqv%2B52F%2FjnqJABAMDsNUhFqmEyuUyRgkQFZxdC0TzcyKRfKv6Z5bKtoz2KHcxHlnD%2BtiOeOPKHfelTdXV%2B%2FokW1yLfb1wol5lci1aTgnbspe9SQSy1Lij5cSIdOoNcq1yR61lMzkDKOVC96OtMJHU18MGOqUBwAC23OoRaAnAq23%2FL9e%2FucOcY9ZsB2khwrvlF7Wec4zw5GyHCbch1AAG6%2FMOOiYmoVckgckU4LWmxrHDk7Gwb0mBMKbFCqjMpEPGc%2FjE4LRbGUnKD6%2FHfoj%2BdbeyrSch1jT6Xf3Y3uM4UMuG%2B6xLUi4UeBYJDh%2FSAW3pNSa0nuRid5v0mRZ5MtMqccOx%2FJjypLctMx94Ym4kipmmqN35UJJ9l6P0&X-Amz-Signature=b1826efea50a27a5b78d008f2113b199761ceae0c431ea3a7edef7fe591ac105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
