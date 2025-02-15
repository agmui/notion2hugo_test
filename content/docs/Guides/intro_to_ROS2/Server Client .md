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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSJL6PD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICkJtXcUBEPZztFMV6raN%2BUDLea7NEGK4DiJjsUpr1CdAiArq6x090x57sP8L1UnWv2p4sdWsSiogaqLTG4xihwWPSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMISNIMnbNXJ6tgJykKtwDbXSEN%2FP2XUjrJfTlpxtKUFz9VkUxk7Po%2FUzXCrLXrNt890AKVrAhBlqbJ3a0qdTfk%2BUV84qYU39wqf5XKso3UgmgSjZ%2FEaz6JSdZNgzk5XmRpqvcHHte8JcCVyjKT0Xf%2B57fDh57SDWgnS1di34H%2By5Ofo4i0aCFtzzbUATUFY7Z6hYE6Dp79yoHtHCv017yVJD%2FzGS8OWEM5CR3xGDju13zlY1%2F9ncOb9q8%2FcmW%2BqUVMdcHkVfdvEUjHgiFrm%2FVIaSitpy3iIvj3TBM4vggbmWc1GqrQS1oNuiOgDl7BEEqrciSw37kShx5rEkuYSPbkUzibi9jpE9cQOCYcRM27%2BsN7IEFXw8wLCjcRG3cnIEsXCdh4RvrZcWRWTOuVvuVYGOVDdAOqpo1mcMLcOOW%2BEHQCWnQWF50SFiT1c64nO%2BsMXkeK9evPKL79Dr3niFVwDvnOoelnkCvirXGe81psp05SAMEwE1ZfBuYJF0csZcY6I1m2TuC%2BsXNHKA5WghKIPjKbdtSRDo0Lk7IvMdtpL7%2Frf2mDlRwTW%2FoxT2KWyIc1zeYbb7tFmYJfvKidtoPfmmWUQ5apa7Mf2OPoPWOuJXSIT38ZIs4iwJKPqTnX5bje%2BcgsmWGrrYkF2Uwnq7EvQY6pgEIqkSxPhMWSzg40jTSpWrO1eDstRPrse0NrRJHpTbHkb15AGCmOD5QMzS1dbQzjB3ukJinP8zA8%2Fu1BOcAn6DSSAmkdzQOeNpN5E4W%2Fs0EQ%2FQu4ZZfGFul4ya2NYgpkxSJwYriDs7k6gjPNKDINqdZqQqRDwSt7iwkxf%2BIKgBtu7iZtZPTs3UWsJsIObX2F%2Fah9pBoZOJFqnGhTDm26H1pqlKuN1MI&X-Amz-Signature=67e80f459f3010e2538cb777864fc3fad977bf7aa08b446699c1c8e3fa73f948&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSJL6PD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICkJtXcUBEPZztFMV6raN%2BUDLea7NEGK4DiJjsUpr1CdAiArq6x090x57sP8L1UnWv2p4sdWsSiogaqLTG4xihwWPSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMISNIMnbNXJ6tgJykKtwDbXSEN%2FP2XUjrJfTlpxtKUFz9VkUxk7Po%2FUzXCrLXrNt890AKVrAhBlqbJ3a0qdTfk%2BUV84qYU39wqf5XKso3UgmgSjZ%2FEaz6JSdZNgzk5XmRpqvcHHte8JcCVyjKT0Xf%2B57fDh57SDWgnS1di34H%2By5Ofo4i0aCFtzzbUATUFY7Z6hYE6Dp79yoHtHCv017yVJD%2FzGS8OWEM5CR3xGDju13zlY1%2F9ncOb9q8%2FcmW%2BqUVMdcHkVfdvEUjHgiFrm%2FVIaSitpy3iIvj3TBM4vggbmWc1GqrQS1oNuiOgDl7BEEqrciSw37kShx5rEkuYSPbkUzibi9jpE9cQOCYcRM27%2BsN7IEFXw8wLCjcRG3cnIEsXCdh4RvrZcWRWTOuVvuVYGOVDdAOqpo1mcMLcOOW%2BEHQCWnQWF50SFiT1c64nO%2BsMXkeK9evPKL79Dr3niFVwDvnOoelnkCvirXGe81psp05SAMEwE1ZfBuYJF0csZcY6I1m2TuC%2BsXNHKA5WghKIPjKbdtSRDo0Lk7IvMdtpL7%2Frf2mDlRwTW%2FoxT2KWyIc1zeYbb7tFmYJfvKidtoPfmmWUQ5apa7Mf2OPoPWOuJXSIT38ZIs4iwJKPqTnX5bje%2BcgsmWGrrYkF2Uwnq7EvQY6pgEIqkSxPhMWSzg40jTSpWrO1eDstRPrse0NrRJHpTbHkb15AGCmOD5QMzS1dbQzjB3ukJinP8zA8%2Fu1BOcAn6DSSAmkdzQOeNpN5E4W%2Fs0EQ%2FQu4ZZfGFul4ya2NYgpkxSJwYriDs7k6gjPNKDINqdZqQqRDwSt7iwkxf%2BIKgBtu7iZtZPTs3UWsJsIObX2F%2Fah9pBoZOJFqnGhTDm26H1pqlKuN1MI&X-Amz-Signature=09f54621f17946a6b307f256757b2fa544b2809dc64c930b26b68447b2060bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSJL6PD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICkJtXcUBEPZztFMV6raN%2BUDLea7NEGK4DiJjsUpr1CdAiArq6x090x57sP8L1UnWv2p4sdWsSiogaqLTG4xihwWPSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMISNIMnbNXJ6tgJykKtwDbXSEN%2FP2XUjrJfTlpxtKUFz9VkUxk7Po%2FUzXCrLXrNt890AKVrAhBlqbJ3a0qdTfk%2BUV84qYU39wqf5XKso3UgmgSjZ%2FEaz6JSdZNgzk5XmRpqvcHHte8JcCVyjKT0Xf%2B57fDh57SDWgnS1di34H%2By5Ofo4i0aCFtzzbUATUFY7Z6hYE6Dp79yoHtHCv017yVJD%2FzGS8OWEM5CR3xGDju13zlY1%2F9ncOb9q8%2FcmW%2BqUVMdcHkVfdvEUjHgiFrm%2FVIaSitpy3iIvj3TBM4vggbmWc1GqrQS1oNuiOgDl7BEEqrciSw37kShx5rEkuYSPbkUzibi9jpE9cQOCYcRM27%2BsN7IEFXw8wLCjcRG3cnIEsXCdh4RvrZcWRWTOuVvuVYGOVDdAOqpo1mcMLcOOW%2BEHQCWnQWF50SFiT1c64nO%2BsMXkeK9evPKL79Dr3niFVwDvnOoelnkCvirXGe81psp05SAMEwE1ZfBuYJF0csZcY6I1m2TuC%2BsXNHKA5WghKIPjKbdtSRDo0Lk7IvMdtpL7%2Frf2mDlRwTW%2FoxT2KWyIc1zeYbb7tFmYJfvKidtoPfmmWUQ5apa7Mf2OPoPWOuJXSIT38ZIs4iwJKPqTnX5bje%2BcgsmWGrrYkF2Uwnq7EvQY6pgEIqkSxPhMWSzg40jTSpWrO1eDstRPrse0NrRJHpTbHkb15AGCmOD5QMzS1dbQzjB3ukJinP8zA8%2Fu1BOcAn6DSSAmkdzQOeNpN5E4W%2Fs0EQ%2FQu4ZZfGFul4ya2NYgpkxSJwYriDs7k6gjPNKDINqdZqQqRDwSt7iwkxf%2BIKgBtu7iZtZPTs3UWsJsIObX2F%2Fah9pBoZOJFqnGhTDm26H1pqlKuN1MI&X-Amz-Signature=df2e17cd23fd96c3c7e3a57ad6cf0fdf8262ef6d91e1592e7d8c5d3c01428406&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSJL6PD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICkJtXcUBEPZztFMV6raN%2BUDLea7NEGK4DiJjsUpr1CdAiArq6x090x57sP8L1UnWv2p4sdWsSiogaqLTG4xihwWPSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMISNIMnbNXJ6tgJykKtwDbXSEN%2FP2XUjrJfTlpxtKUFz9VkUxk7Po%2FUzXCrLXrNt890AKVrAhBlqbJ3a0qdTfk%2BUV84qYU39wqf5XKso3UgmgSjZ%2FEaz6JSdZNgzk5XmRpqvcHHte8JcCVyjKT0Xf%2B57fDh57SDWgnS1di34H%2By5Ofo4i0aCFtzzbUATUFY7Z6hYE6Dp79yoHtHCv017yVJD%2FzGS8OWEM5CR3xGDju13zlY1%2F9ncOb9q8%2FcmW%2BqUVMdcHkVfdvEUjHgiFrm%2FVIaSitpy3iIvj3TBM4vggbmWc1GqrQS1oNuiOgDl7BEEqrciSw37kShx5rEkuYSPbkUzibi9jpE9cQOCYcRM27%2BsN7IEFXw8wLCjcRG3cnIEsXCdh4RvrZcWRWTOuVvuVYGOVDdAOqpo1mcMLcOOW%2BEHQCWnQWF50SFiT1c64nO%2BsMXkeK9evPKL79Dr3niFVwDvnOoelnkCvirXGe81psp05SAMEwE1ZfBuYJF0csZcY6I1m2TuC%2BsXNHKA5WghKIPjKbdtSRDo0Lk7IvMdtpL7%2Frf2mDlRwTW%2FoxT2KWyIc1zeYbb7tFmYJfvKidtoPfmmWUQ5apa7Mf2OPoPWOuJXSIT38ZIs4iwJKPqTnX5bje%2BcgsmWGrrYkF2Uwnq7EvQY6pgEIqkSxPhMWSzg40jTSpWrO1eDstRPrse0NrRJHpTbHkb15AGCmOD5QMzS1dbQzjB3ukJinP8zA8%2Fu1BOcAn6DSSAmkdzQOeNpN5E4W%2Fs0EQ%2FQu4ZZfGFul4ya2NYgpkxSJwYriDs7k6gjPNKDINqdZqQqRDwSt7iwkxf%2BIKgBtu7iZtZPTs3UWsJsIObX2F%2Fah9pBoZOJFqnGhTDm26H1pqlKuN1MI&X-Amz-Signature=486bb44817108fa111c4992abae1e32c14c5ecf5ea00b2d713054ce3ef6d92d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSJL6PD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICkJtXcUBEPZztFMV6raN%2BUDLea7NEGK4DiJjsUpr1CdAiArq6x090x57sP8L1UnWv2p4sdWsSiogaqLTG4xihwWPSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMISNIMnbNXJ6tgJykKtwDbXSEN%2FP2XUjrJfTlpxtKUFz9VkUxk7Po%2FUzXCrLXrNt890AKVrAhBlqbJ3a0qdTfk%2BUV84qYU39wqf5XKso3UgmgSjZ%2FEaz6JSdZNgzk5XmRpqvcHHte8JcCVyjKT0Xf%2B57fDh57SDWgnS1di34H%2By5Ofo4i0aCFtzzbUATUFY7Z6hYE6Dp79yoHtHCv017yVJD%2FzGS8OWEM5CR3xGDju13zlY1%2F9ncOb9q8%2FcmW%2BqUVMdcHkVfdvEUjHgiFrm%2FVIaSitpy3iIvj3TBM4vggbmWc1GqrQS1oNuiOgDl7BEEqrciSw37kShx5rEkuYSPbkUzibi9jpE9cQOCYcRM27%2BsN7IEFXw8wLCjcRG3cnIEsXCdh4RvrZcWRWTOuVvuVYGOVDdAOqpo1mcMLcOOW%2BEHQCWnQWF50SFiT1c64nO%2BsMXkeK9evPKL79Dr3niFVwDvnOoelnkCvirXGe81psp05SAMEwE1ZfBuYJF0csZcY6I1m2TuC%2BsXNHKA5WghKIPjKbdtSRDo0Lk7IvMdtpL7%2Frf2mDlRwTW%2FoxT2KWyIc1zeYbb7tFmYJfvKidtoPfmmWUQ5apa7Mf2OPoPWOuJXSIT38ZIs4iwJKPqTnX5bje%2BcgsmWGrrYkF2Uwnq7EvQY6pgEIqkSxPhMWSzg40jTSpWrO1eDstRPrse0NrRJHpTbHkb15AGCmOD5QMzS1dbQzjB3ukJinP8zA8%2Fu1BOcAn6DSSAmkdzQOeNpN5E4W%2Fs0EQ%2FQu4ZZfGFul4ya2NYgpkxSJwYriDs7k6gjPNKDINqdZqQqRDwSt7iwkxf%2BIKgBtu7iZtZPTs3UWsJsIObX2F%2Fah9pBoZOJFqnGhTDm26H1pqlKuN1MI&X-Amz-Signature=242a7496ebcc5996881515518f193f030f73093e6e76d63eeebce4b0da5df12c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
