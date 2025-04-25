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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXISS32M%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX42jlQSfhjPArt4yMHV1AFdgRNToxfFlLEX2yJZ3BzgIgbZRbKVmuD4R%2B%2FllminQ9zyf1WmrfiFFDu789GTxyakoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMHRr%2F4QioaqKCImXyrcA2nl05CPumJrreZC5L4IqRyzA%2FwcZhOgnXotqY3wxCgLkRjoQWDn5BFYRSs8e7K8ut5K5%2BeZfzW5lXrn16ig3aIiR2UpUhw7woxEfGKsQiPL%2BRtvRS8E2Pony0eFHWGoLF5z9lMB6rDODTNzo4BrAJgA4uN2Aq9aHDBzMDA%2FqhXBMRUs2AI4J41LzGSgXi2VAvBaJo6VWNmeG0vSNRlkZ2zAZ3Wxi6%2FvN8MxgN1zSwDUPPTmSA41VQkRdsMgLutLSysWv9PbkRfEDviEcoMewlzZB%2BqkynlnxV0rf43VjjpoBlL1eW88t859zOfMF8ELlkpSA%2BqnjIHYq1ZSz97WCTE24%2BW4hcjuAChQ3fhTk3bs0ofU7Gvy5LgLMfFWn3XWV6QqtyHMqLNN2fLCTKjFw%2BURrKkzxchiDE6%2BCbhSZrSsHfbazbqzVVPjixUu2H%2FGcyfwfrORCsJbT2T%2FkZ0iba3UxJeBlRCThYwWldATCPnA7MbVD8xt4M4S9TxL4q12BmcjCi%2Bv2YeVM5RN2IuAuQwqFNANKYrP3hkHUep3JVkg0lP3pjax3WMZOkTx%2BLP7RejYuubxKMY2IWM92YsX8CgTLZ7eYo0GtMlca4OPLqYDwrRIwobbI6HH6Qr%2BMLaqq8AGOqUB3%2BWpzV6neRCU6TPSiDEEMex4sk3M%2B2Bc%2B%2FqhojKSUz2mVhd2DADTk0RTvvt0yq5q0lgwBwz3VymEKDa7Os2BAhay5nvdhxG8JPFF6dkW3MejUJ%2FZXwoJtqNlxAWfcNVXE8bRCCKQxbEN2eVIgcrasQB5pEFDUk2C702CgNiLe9y06Y%2F71Ej7r%2BaN3bawRQq5x8EKucxDL3ctfV1%2FyDjrLpoveyKI&X-Amz-Signature=35305796885a5949f4ff71039fee7482bc191c77c83d771505d0f781e8d83992&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXISS32M%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX42jlQSfhjPArt4yMHV1AFdgRNToxfFlLEX2yJZ3BzgIgbZRbKVmuD4R%2B%2FllminQ9zyf1WmrfiFFDu789GTxyakoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMHRr%2F4QioaqKCImXyrcA2nl05CPumJrreZC5L4IqRyzA%2FwcZhOgnXotqY3wxCgLkRjoQWDn5BFYRSs8e7K8ut5K5%2BeZfzW5lXrn16ig3aIiR2UpUhw7woxEfGKsQiPL%2BRtvRS8E2Pony0eFHWGoLF5z9lMB6rDODTNzo4BrAJgA4uN2Aq9aHDBzMDA%2FqhXBMRUs2AI4J41LzGSgXi2VAvBaJo6VWNmeG0vSNRlkZ2zAZ3Wxi6%2FvN8MxgN1zSwDUPPTmSA41VQkRdsMgLutLSysWv9PbkRfEDviEcoMewlzZB%2BqkynlnxV0rf43VjjpoBlL1eW88t859zOfMF8ELlkpSA%2BqnjIHYq1ZSz97WCTE24%2BW4hcjuAChQ3fhTk3bs0ofU7Gvy5LgLMfFWn3XWV6QqtyHMqLNN2fLCTKjFw%2BURrKkzxchiDE6%2BCbhSZrSsHfbazbqzVVPjixUu2H%2FGcyfwfrORCsJbT2T%2FkZ0iba3UxJeBlRCThYwWldATCPnA7MbVD8xt4M4S9TxL4q12BmcjCi%2Bv2YeVM5RN2IuAuQwqFNANKYrP3hkHUep3JVkg0lP3pjax3WMZOkTx%2BLP7RejYuubxKMY2IWM92YsX8CgTLZ7eYo0GtMlca4OPLqYDwrRIwobbI6HH6Qr%2BMLaqq8AGOqUB3%2BWpzV6neRCU6TPSiDEEMex4sk3M%2B2Bc%2B%2FqhojKSUz2mVhd2DADTk0RTvvt0yq5q0lgwBwz3VymEKDa7Os2BAhay5nvdhxG8JPFF6dkW3MejUJ%2FZXwoJtqNlxAWfcNVXE8bRCCKQxbEN2eVIgcrasQB5pEFDUk2C702CgNiLe9y06Y%2F71Ej7r%2BaN3bawRQq5x8EKucxDL3ctfV1%2FyDjrLpoveyKI&X-Amz-Signature=771d3932bf440fdc849aaf83d5c1eb792edb8d97642537edb853d0a50c230f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXISS32M%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX42jlQSfhjPArt4yMHV1AFdgRNToxfFlLEX2yJZ3BzgIgbZRbKVmuD4R%2B%2FllminQ9zyf1WmrfiFFDu789GTxyakoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMHRr%2F4QioaqKCImXyrcA2nl05CPumJrreZC5L4IqRyzA%2FwcZhOgnXotqY3wxCgLkRjoQWDn5BFYRSs8e7K8ut5K5%2BeZfzW5lXrn16ig3aIiR2UpUhw7woxEfGKsQiPL%2BRtvRS8E2Pony0eFHWGoLF5z9lMB6rDODTNzo4BrAJgA4uN2Aq9aHDBzMDA%2FqhXBMRUs2AI4J41LzGSgXi2VAvBaJo6VWNmeG0vSNRlkZ2zAZ3Wxi6%2FvN8MxgN1zSwDUPPTmSA41VQkRdsMgLutLSysWv9PbkRfEDviEcoMewlzZB%2BqkynlnxV0rf43VjjpoBlL1eW88t859zOfMF8ELlkpSA%2BqnjIHYq1ZSz97WCTE24%2BW4hcjuAChQ3fhTk3bs0ofU7Gvy5LgLMfFWn3XWV6QqtyHMqLNN2fLCTKjFw%2BURrKkzxchiDE6%2BCbhSZrSsHfbazbqzVVPjixUu2H%2FGcyfwfrORCsJbT2T%2FkZ0iba3UxJeBlRCThYwWldATCPnA7MbVD8xt4M4S9TxL4q12BmcjCi%2Bv2YeVM5RN2IuAuQwqFNANKYrP3hkHUep3JVkg0lP3pjax3WMZOkTx%2BLP7RejYuubxKMY2IWM92YsX8CgTLZ7eYo0GtMlca4OPLqYDwrRIwobbI6HH6Qr%2BMLaqq8AGOqUB3%2BWpzV6neRCU6TPSiDEEMex4sk3M%2B2Bc%2B%2FqhojKSUz2mVhd2DADTk0RTvvt0yq5q0lgwBwz3VymEKDa7Os2BAhay5nvdhxG8JPFF6dkW3MejUJ%2FZXwoJtqNlxAWfcNVXE8bRCCKQxbEN2eVIgcrasQB5pEFDUk2C702CgNiLe9y06Y%2F71Ej7r%2BaN3bawRQq5x8EKucxDL3ctfV1%2FyDjrLpoveyKI&X-Amz-Signature=c2eef27a376cd561a51e1f6efbe59dbbd9a9169158718dd0fddc65fe36a5a094&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXISS32M%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX42jlQSfhjPArt4yMHV1AFdgRNToxfFlLEX2yJZ3BzgIgbZRbKVmuD4R%2B%2FllminQ9zyf1WmrfiFFDu789GTxyakoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMHRr%2F4QioaqKCImXyrcA2nl05CPumJrreZC5L4IqRyzA%2FwcZhOgnXotqY3wxCgLkRjoQWDn5BFYRSs8e7K8ut5K5%2BeZfzW5lXrn16ig3aIiR2UpUhw7woxEfGKsQiPL%2BRtvRS8E2Pony0eFHWGoLF5z9lMB6rDODTNzo4BrAJgA4uN2Aq9aHDBzMDA%2FqhXBMRUs2AI4J41LzGSgXi2VAvBaJo6VWNmeG0vSNRlkZ2zAZ3Wxi6%2FvN8MxgN1zSwDUPPTmSA41VQkRdsMgLutLSysWv9PbkRfEDviEcoMewlzZB%2BqkynlnxV0rf43VjjpoBlL1eW88t859zOfMF8ELlkpSA%2BqnjIHYq1ZSz97WCTE24%2BW4hcjuAChQ3fhTk3bs0ofU7Gvy5LgLMfFWn3XWV6QqtyHMqLNN2fLCTKjFw%2BURrKkzxchiDE6%2BCbhSZrSsHfbazbqzVVPjixUu2H%2FGcyfwfrORCsJbT2T%2FkZ0iba3UxJeBlRCThYwWldATCPnA7MbVD8xt4M4S9TxL4q12BmcjCi%2Bv2YeVM5RN2IuAuQwqFNANKYrP3hkHUep3JVkg0lP3pjax3WMZOkTx%2BLP7RejYuubxKMY2IWM92YsX8CgTLZ7eYo0GtMlca4OPLqYDwrRIwobbI6HH6Qr%2BMLaqq8AGOqUB3%2BWpzV6neRCU6TPSiDEEMex4sk3M%2B2Bc%2B%2FqhojKSUz2mVhd2DADTk0RTvvt0yq5q0lgwBwz3VymEKDa7Os2BAhay5nvdhxG8JPFF6dkW3MejUJ%2FZXwoJtqNlxAWfcNVXE8bRCCKQxbEN2eVIgcrasQB5pEFDUk2C702CgNiLe9y06Y%2F71Ej7r%2BaN3bawRQq5x8EKucxDL3ctfV1%2FyDjrLpoveyKI&X-Amz-Signature=fa2aa51cba2f64151272fac37f51fda179d1c7463f6f1e39686895940789e121&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXISS32M%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX42jlQSfhjPArt4yMHV1AFdgRNToxfFlLEX2yJZ3BzgIgbZRbKVmuD4R%2B%2FllminQ9zyf1WmrfiFFDu789GTxyakoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMHRr%2F4QioaqKCImXyrcA2nl05CPumJrreZC5L4IqRyzA%2FwcZhOgnXotqY3wxCgLkRjoQWDn5BFYRSs8e7K8ut5K5%2BeZfzW5lXrn16ig3aIiR2UpUhw7woxEfGKsQiPL%2BRtvRS8E2Pony0eFHWGoLF5z9lMB6rDODTNzo4BrAJgA4uN2Aq9aHDBzMDA%2FqhXBMRUs2AI4J41LzGSgXi2VAvBaJo6VWNmeG0vSNRlkZ2zAZ3Wxi6%2FvN8MxgN1zSwDUPPTmSA41VQkRdsMgLutLSysWv9PbkRfEDviEcoMewlzZB%2BqkynlnxV0rf43VjjpoBlL1eW88t859zOfMF8ELlkpSA%2BqnjIHYq1ZSz97WCTE24%2BW4hcjuAChQ3fhTk3bs0ofU7Gvy5LgLMfFWn3XWV6QqtyHMqLNN2fLCTKjFw%2BURrKkzxchiDE6%2BCbhSZrSsHfbazbqzVVPjixUu2H%2FGcyfwfrORCsJbT2T%2FkZ0iba3UxJeBlRCThYwWldATCPnA7MbVD8xt4M4S9TxL4q12BmcjCi%2Bv2YeVM5RN2IuAuQwqFNANKYrP3hkHUep3JVkg0lP3pjax3WMZOkTx%2BLP7RejYuubxKMY2IWM92YsX8CgTLZ7eYo0GtMlca4OPLqYDwrRIwobbI6HH6Qr%2BMLaqq8AGOqUB3%2BWpzV6neRCU6TPSiDEEMex4sk3M%2B2Bc%2B%2FqhojKSUz2mVhd2DADTk0RTvvt0yq5q0lgwBwz3VymEKDa7Os2BAhay5nvdhxG8JPFF6dkW3MejUJ%2FZXwoJtqNlxAWfcNVXE8bRCCKQxbEN2eVIgcrasQB5pEFDUk2C702CgNiLe9y06Y%2F71Ej7r%2BaN3bawRQq5x8EKucxDL3ctfV1%2FyDjrLpoveyKI&X-Amz-Signature=ba91c1908216b7eb95c0071cf4fe01b97ed3a4cc7bdca069e212fad0acec8a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
