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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSPDM7O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI5UPwtW8RtxJt9%2FyzWNbmidRwsB9CuiRMhpjZV77zHAiANs9BsFBfv3qdfFY%2Fbyj8scjarIvTFdNiEeb4U5ymCKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3p1N0PCuou%2B0GqiKtwDgJ07W6zNSIQaQdVRd8Ssbhux8mr4Yk20eoeX6gUMVHd9QpxXZUhMBcX3Hikc%2BlXIbEPmYptlEtluDutKI%2BUeUnEWxSVR%2BmBLWoEdPAmkq00ek%2Bc6%2F%2BPX2UH5wfd%2BiUCD8S7y59WHmn%2F2ztiDQUnrYxq5ntXNtyJFL%2FYYf9irMHMtNArk09mOv8b4RWfXjudTgmLgd1A2krOeoxBJSSAv%2FxBK6NzNtaBSAKCBdfDorIeQCsRDKD6kTlvtpTBmiCsOa2KRBzRqR6jwj30Yt6Ae6BlviL3CdjBad95gykhTF8w5uJjs6m1ZDY4fSEwOIZRARKeU%2By0vcHUrLlwv98m8nlj24jXApju8MAbuxMacKAetrRnRZCnM9Zxr5BjS1vGwrLQNc0gndUkO3JymiNZ%2BLH5Y70mAYC1m%2FYS2PrhvUk0f5pe9BK84Jhhbc2VtBAucbFrRIhBuvmeSjnxtzhVPgIxxUbUwmyzqc4gewg5Q%2BN6%2Fbe0n27MfCXIIAnKswWrnFDOM33bAKuRA%2BsjaALRItxx%2FzSEPkHFBCWFJAr2JNScSZuWqreBw1PE9Oteo6mloN6H8%2FM1OqenTMSZ0ZN5ZPR5T6z%2BtzkGXxNpDjTwvDTJrJogaFcmZzePP0uUwvoqAwwY6pgHnXiuw1yak1ClpTmJUBug12YoWDbdSQnRfXc2OIIfwGeOae1wKjwgk0PM5znBeOxKRQAME5lGCLqcKqLM7pYTbZwlRw8XzQf1MMUUAJSgG0laBcGFhivpL%2FMZDgbSdll6JgLJ5DW00ZWbR51VOWNcLbzwiQkMhpLClSmTMZaybMB90UUbGk0FURabHRp5IqX09xoDEZ5fgpNL978klwm0sykGnO4yL&X-Amz-Signature=503157e585d0d0abf6e637d79dce36d1b0edc2812a707ea7443b16319bf25a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSPDM7O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI5UPwtW8RtxJt9%2FyzWNbmidRwsB9CuiRMhpjZV77zHAiANs9BsFBfv3qdfFY%2Fbyj8scjarIvTFdNiEeb4U5ymCKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3p1N0PCuou%2B0GqiKtwDgJ07W6zNSIQaQdVRd8Ssbhux8mr4Yk20eoeX6gUMVHd9QpxXZUhMBcX3Hikc%2BlXIbEPmYptlEtluDutKI%2BUeUnEWxSVR%2BmBLWoEdPAmkq00ek%2Bc6%2F%2BPX2UH5wfd%2BiUCD8S7y59WHmn%2F2ztiDQUnrYxq5ntXNtyJFL%2FYYf9irMHMtNArk09mOv8b4RWfXjudTgmLgd1A2krOeoxBJSSAv%2FxBK6NzNtaBSAKCBdfDorIeQCsRDKD6kTlvtpTBmiCsOa2KRBzRqR6jwj30Yt6Ae6BlviL3CdjBad95gykhTF8w5uJjs6m1ZDY4fSEwOIZRARKeU%2By0vcHUrLlwv98m8nlj24jXApju8MAbuxMacKAetrRnRZCnM9Zxr5BjS1vGwrLQNc0gndUkO3JymiNZ%2BLH5Y70mAYC1m%2FYS2PrhvUk0f5pe9BK84Jhhbc2VtBAucbFrRIhBuvmeSjnxtzhVPgIxxUbUwmyzqc4gewg5Q%2BN6%2Fbe0n27MfCXIIAnKswWrnFDOM33bAKuRA%2BsjaALRItxx%2FzSEPkHFBCWFJAr2JNScSZuWqreBw1PE9Oteo6mloN6H8%2FM1OqenTMSZ0ZN5ZPR5T6z%2BtzkGXxNpDjTwvDTJrJogaFcmZzePP0uUwvoqAwwY6pgHnXiuw1yak1ClpTmJUBug12YoWDbdSQnRfXc2OIIfwGeOae1wKjwgk0PM5znBeOxKRQAME5lGCLqcKqLM7pYTbZwlRw8XzQf1MMUUAJSgG0laBcGFhivpL%2FMZDgbSdll6JgLJ5DW00ZWbR51VOWNcLbzwiQkMhpLClSmTMZaybMB90UUbGk0FURabHRp5IqX09xoDEZ5fgpNL978klwm0sykGnO4yL&X-Amz-Signature=67db53c55982b4b6f173e0f5f2cd2f5244247a6c11091b54935952138df279f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSPDM7O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI5UPwtW8RtxJt9%2FyzWNbmidRwsB9CuiRMhpjZV77zHAiANs9BsFBfv3qdfFY%2Fbyj8scjarIvTFdNiEeb4U5ymCKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3p1N0PCuou%2B0GqiKtwDgJ07W6zNSIQaQdVRd8Ssbhux8mr4Yk20eoeX6gUMVHd9QpxXZUhMBcX3Hikc%2BlXIbEPmYptlEtluDutKI%2BUeUnEWxSVR%2BmBLWoEdPAmkq00ek%2Bc6%2F%2BPX2UH5wfd%2BiUCD8S7y59WHmn%2F2ztiDQUnrYxq5ntXNtyJFL%2FYYf9irMHMtNArk09mOv8b4RWfXjudTgmLgd1A2krOeoxBJSSAv%2FxBK6NzNtaBSAKCBdfDorIeQCsRDKD6kTlvtpTBmiCsOa2KRBzRqR6jwj30Yt6Ae6BlviL3CdjBad95gykhTF8w5uJjs6m1ZDY4fSEwOIZRARKeU%2By0vcHUrLlwv98m8nlj24jXApju8MAbuxMacKAetrRnRZCnM9Zxr5BjS1vGwrLQNc0gndUkO3JymiNZ%2BLH5Y70mAYC1m%2FYS2PrhvUk0f5pe9BK84Jhhbc2VtBAucbFrRIhBuvmeSjnxtzhVPgIxxUbUwmyzqc4gewg5Q%2BN6%2Fbe0n27MfCXIIAnKswWrnFDOM33bAKuRA%2BsjaALRItxx%2FzSEPkHFBCWFJAr2JNScSZuWqreBw1PE9Oteo6mloN6H8%2FM1OqenTMSZ0ZN5ZPR5T6z%2BtzkGXxNpDjTwvDTJrJogaFcmZzePP0uUwvoqAwwY6pgHnXiuw1yak1ClpTmJUBug12YoWDbdSQnRfXc2OIIfwGeOae1wKjwgk0PM5znBeOxKRQAME5lGCLqcKqLM7pYTbZwlRw8XzQf1MMUUAJSgG0laBcGFhivpL%2FMZDgbSdll6JgLJ5DW00ZWbR51VOWNcLbzwiQkMhpLClSmTMZaybMB90UUbGk0FURabHRp5IqX09xoDEZ5fgpNL978klwm0sykGnO4yL&X-Amz-Signature=894484dbfcc99eca29221e48206b0b9d37aab67d8bebdb3f7cc8c7cc43d5101c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSPDM7O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI5UPwtW8RtxJt9%2FyzWNbmidRwsB9CuiRMhpjZV77zHAiANs9BsFBfv3qdfFY%2Fbyj8scjarIvTFdNiEeb4U5ymCKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3p1N0PCuou%2B0GqiKtwDgJ07W6zNSIQaQdVRd8Ssbhux8mr4Yk20eoeX6gUMVHd9QpxXZUhMBcX3Hikc%2BlXIbEPmYptlEtluDutKI%2BUeUnEWxSVR%2BmBLWoEdPAmkq00ek%2Bc6%2F%2BPX2UH5wfd%2BiUCD8S7y59WHmn%2F2ztiDQUnrYxq5ntXNtyJFL%2FYYf9irMHMtNArk09mOv8b4RWfXjudTgmLgd1A2krOeoxBJSSAv%2FxBK6NzNtaBSAKCBdfDorIeQCsRDKD6kTlvtpTBmiCsOa2KRBzRqR6jwj30Yt6Ae6BlviL3CdjBad95gykhTF8w5uJjs6m1ZDY4fSEwOIZRARKeU%2By0vcHUrLlwv98m8nlj24jXApju8MAbuxMacKAetrRnRZCnM9Zxr5BjS1vGwrLQNc0gndUkO3JymiNZ%2BLH5Y70mAYC1m%2FYS2PrhvUk0f5pe9BK84Jhhbc2VtBAucbFrRIhBuvmeSjnxtzhVPgIxxUbUwmyzqc4gewg5Q%2BN6%2Fbe0n27MfCXIIAnKswWrnFDOM33bAKuRA%2BsjaALRItxx%2FzSEPkHFBCWFJAr2JNScSZuWqreBw1PE9Oteo6mloN6H8%2FM1OqenTMSZ0ZN5ZPR5T6z%2BtzkGXxNpDjTwvDTJrJogaFcmZzePP0uUwvoqAwwY6pgHnXiuw1yak1ClpTmJUBug12YoWDbdSQnRfXc2OIIfwGeOae1wKjwgk0PM5znBeOxKRQAME5lGCLqcKqLM7pYTbZwlRw8XzQf1MMUUAJSgG0laBcGFhivpL%2FMZDgbSdll6JgLJ5DW00ZWbR51VOWNcLbzwiQkMhpLClSmTMZaybMB90UUbGk0FURabHRp5IqX09xoDEZ5fgpNL978klwm0sykGnO4yL&X-Amz-Signature=f54b71e3202718978c49db735baa2c0d28b2c40ae70fb34997299d7961fef881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSPDM7O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI5UPwtW8RtxJt9%2FyzWNbmidRwsB9CuiRMhpjZV77zHAiANs9BsFBfv3qdfFY%2Fbyj8scjarIvTFdNiEeb4U5ymCKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3p1N0PCuou%2B0GqiKtwDgJ07W6zNSIQaQdVRd8Ssbhux8mr4Yk20eoeX6gUMVHd9QpxXZUhMBcX3Hikc%2BlXIbEPmYptlEtluDutKI%2BUeUnEWxSVR%2BmBLWoEdPAmkq00ek%2Bc6%2F%2BPX2UH5wfd%2BiUCD8S7y59WHmn%2F2ztiDQUnrYxq5ntXNtyJFL%2FYYf9irMHMtNArk09mOv8b4RWfXjudTgmLgd1A2krOeoxBJSSAv%2FxBK6NzNtaBSAKCBdfDorIeQCsRDKD6kTlvtpTBmiCsOa2KRBzRqR6jwj30Yt6Ae6BlviL3CdjBad95gykhTF8w5uJjs6m1ZDY4fSEwOIZRARKeU%2By0vcHUrLlwv98m8nlj24jXApju8MAbuxMacKAetrRnRZCnM9Zxr5BjS1vGwrLQNc0gndUkO3JymiNZ%2BLH5Y70mAYC1m%2FYS2PrhvUk0f5pe9BK84Jhhbc2VtBAucbFrRIhBuvmeSjnxtzhVPgIxxUbUwmyzqc4gewg5Q%2BN6%2Fbe0n27MfCXIIAnKswWrnFDOM33bAKuRA%2BsjaALRItxx%2FzSEPkHFBCWFJAr2JNScSZuWqreBw1PE9Oteo6mloN6H8%2FM1OqenTMSZ0ZN5ZPR5T6z%2BtzkGXxNpDjTwvDTJrJogaFcmZzePP0uUwvoqAwwY6pgHnXiuw1yak1ClpTmJUBug12YoWDbdSQnRfXc2OIIfwGeOae1wKjwgk0PM5znBeOxKRQAME5lGCLqcKqLM7pYTbZwlRw8XzQf1MMUUAJSgG0laBcGFhivpL%2FMZDgbSdll6JgLJ5DW00ZWbR51VOWNcLbzwiQkMhpLClSmTMZaybMB90UUbGk0FURabHRp5IqX09xoDEZ5fgpNL978klwm0sykGnO4yL&X-Amz-Signature=28fbf973887a60defab1b65e4c113e711ee79f45c9c2b0cc71d5e9ffa2d6c0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
