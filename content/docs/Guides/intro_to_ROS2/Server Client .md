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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGMZLMX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsDcB9oBWCK%2BUFhbbEFjWqwNUsvzpA33b7CDr%2BJtprpAIhAJ%2Fr24%2FMtFkVOJQH8EvfP9t0GSachM0%2B%2F5LENALBZIbOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyVdwvpzWFgjnODauQq3ANbNt1yzxULMnKUICRIKET0xDn1U%2B9XlMMGVomepo56mrR3i4F7uDXJZoYpU0zDooo7j49qNJUJ5H%2Fm4foKW6t8T8fpSoPXtlznJCub0TjbdcPPcoted3Zk%2Bqu5lIMvvE61AOJ8A%2FxqaGBslfwdXSE1yg2tw5khgPsGq8ZBWRIyxHyWMZlgYJbM6WdLoUczE6FxnhqwKCX7q7U21yRRHrSco2huPSuCBP3WiyLE2hD5NeOAieIoC0xEgrmEVMiKkvJdvnvxYpZN2%2BTU%2Bpd7nu4uzjflDTvF%2Bq6x3iq9dvl8M%2BXRCCgkmGGJH6WESSk5KR%2FbZYC%2FkeWktQe9JbZtVo3%2BNJQK5P0GgeeRcuZd202jheTnpePwCgYrb5W25cYYVi%2BgB5ZWyhFrlr6NYtP4Vl8VIcD6vfzdcPy7czbwjuUjYapxrvyjZWWhy80drBYK9T7ZSVjJgLMMfVzqA%2FxGHMFiG5lznAAQmhc08pp2cTVsai9Qul8TFydCRaPl5f8GlVNHexgnFNF%2BBxIBh%2FWBKgQghZygRoG7E1%2F7NTZ4SdGN97ofpmcMO5MgXFXDr%2F922iSvtwhONU2VnXc7Sp34m5MFTuFDbZmuWomt27qWeX9EmxIbo3U6xfu0A5MEGTCoiuTDBjqkARPwdkVTIwQkM%2Fy%2BW%2BaGUPhpGSToPqCcNUudqzzKZUOqIqD%2BA%2FPv9eqXS0JigSxisPfJrRm4INADo6Sp2A%2BxCRbRv%2BZI70FvTm824%2Fh8ZCWz3wPI8w5%2FCeBGgFDLjoak3YEMnfgsTZ3YxeO%2BlJXqXWEqa5GpiEU1tUyYHiWqpGZYXkQnw12dtctMxweuSOvzUPPlnMGN9Zj9Z3mfvAAOcyIkdFyZ&X-Amz-Signature=f7be553b2e0a26953cdbd4548749611dd57e61fbdd122ad8cdb28af73c496686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGMZLMX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsDcB9oBWCK%2BUFhbbEFjWqwNUsvzpA33b7CDr%2BJtprpAIhAJ%2Fr24%2FMtFkVOJQH8EvfP9t0GSachM0%2B%2F5LENALBZIbOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyVdwvpzWFgjnODauQq3ANbNt1yzxULMnKUICRIKET0xDn1U%2B9XlMMGVomepo56mrR3i4F7uDXJZoYpU0zDooo7j49qNJUJ5H%2Fm4foKW6t8T8fpSoPXtlznJCub0TjbdcPPcoted3Zk%2Bqu5lIMvvE61AOJ8A%2FxqaGBslfwdXSE1yg2tw5khgPsGq8ZBWRIyxHyWMZlgYJbM6WdLoUczE6FxnhqwKCX7q7U21yRRHrSco2huPSuCBP3WiyLE2hD5NeOAieIoC0xEgrmEVMiKkvJdvnvxYpZN2%2BTU%2Bpd7nu4uzjflDTvF%2Bq6x3iq9dvl8M%2BXRCCgkmGGJH6WESSk5KR%2FbZYC%2FkeWktQe9JbZtVo3%2BNJQK5P0GgeeRcuZd202jheTnpePwCgYrb5W25cYYVi%2BgB5ZWyhFrlr6NYtP4Vl8VIcD6vfzdcPy7czbwjuUjYapxrvyjZWWhy80drBYK9T7ZSVjJgLMMfVzqA%2FxGHMFiG5lznAAQmhc08pp2cTVsai9Qul8TFydCRaPl5f8GlVNHexgnFNF%2BBxIBh%2FWBKgQghZygRoG7E1%2F7NTZ4SdGN97ofpmcMO5MgXFXDr%2F922iSvtwhONU2VnXc7Sp34m5MFTuFDbZmuWomt27qWeX9EmxIbo3U6xfu0A5MEGTCoiuTDBjqkARPwdkVTIwQkM%2Fy%2BW%2BaGUPhpGSToPqCcNUudqzzKZUOqIqD%2BA%2FPv9eqXS0JigSxisPfJrRm4INADo6Sp2A%2BxCRbRv%2BZI70FvTm824%2Fh8ZCWz3wPI8w5%2FCeBGgFDLjoak3YEMnfgsTZ3YxeO%2BlJXqXWEqa5GpiEU1tUyYHiWqpGZYXkQnw12dtctMxweuSOvzUPPlnMGN9Zj9Z3mfvAAOcyIkdFyZ&X-Amz-Signature=5a40ad5934d78af15c837e974bedfdc67c766639cda61f73490ec702e1957201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGMZLMX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsDcB9oBWCK%2BUFhbbEFjWqwNUsvzpA33b7CDr%2BJtprpAIhAJ%2Fr24%2FMtFkVOJQH8EvfP9t0GSachM0%2B%2F5LENALBZIbOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyVdwvpzWFgjnODauQq3ANbNt1yzxULMnKUICRIKET0xDn1U%2B9XlMMGVomepo56mrR3i4F7uDXJZoYpU0zDooo7j49qNJUJ5H%2Fm4foKW6t8T8fpSoPXtlznJCub0TjbdcPPcoted3Zk%2Bqu5lIMvvE61AOJ8A%2FxqaGBslfwdXSE1yg2tw5khgPsGq8ZBWRIyxHyWMZlgYJbM6WdLoUczE6FxnhqwKCX7q7U21yRRHrSco2huPSuCBP3WiyLE2hD5NeOAieIoC0xEgrmEVMiKkvJdvnvxYpZN2%2BTU%2Bpd7nu4uzjflDTvF%2Bq6x3iq9dvl8M%2BXRCCgkmGGJH6WESSk5KR%2FbZYC%2FkeWktQe9JbZtVo3%2BNJQK5P0GgeeRcuZd202jheTnpePwCgYrb5W25cYYVi%2BgB5ZWyhFrlr6NYtP4Vl8VIcD6vfzdcPy7czbwjuUjYapxrvyjZWWhy80drBYK9T7ZSVjJgLMMfVzqA%2FxGHMFiG5lznAAQmhc08pp2cTVsai9Qul8TFydCRaPl5f8GlVNHexgnFNF%2BBxIBh%2FWBKgQghZygRoG7E1%2F7NTZ4SdGN97ofpmcMO5MgXFXDr%2F922iSvtwhONU2VnXc7Sp34m5MFTuFDbZmuWomt27qWeX9EmxIbo3U6xfu0A5MEGTCoiuTDBjqkARPwdkVTIwQkM%2Fy%2BW%2BaGUPhpGSToPqCcNUudqzzKZUOqIqD%2BA%2FPv9eqXS0JigSxisPfJrRm4INADo6Sp2A%2BxCRbRv%2BZI70FvTm824%2Fh8ZCWz3wPI8w5%2FCeBGgFDLjoak3YEMnfgsTZ3YxeO%2BlJXqXWEqa5GpiEU1tUyYHiWqpGZYXkQnw12dtctMxweuSOvzUPPlnMGN9Zj9Z3mfvAAOcyIkdFyZ&X-Amz-Signature=3d4f730ace4f3e2f83eaceafba2a211eabb01b44812d26781f73923b3f02a1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGMZLMX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsDcB9oBWCK%2BUFhbbEFjWqwNUsvzpA33b7CDr%2BJtprpAIhAJ%2Fr24%2FMtFkVOJQH8EvfP9t0GSachM0%2B%2F5LENALBZIbOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyVdwvpzWFgjnODauQq3ANbNt1yzxULMnKUICRIKET0xDn1U%2B9XlMMGVomepo56mrR3i4F7uDXJZoYpU0zDooo7j49qNJUJ5H%2Fm4foKW6t8T8fpSoPXtlznJCub0TjbdcPPcoted3Zk%2Bqu5lIMvvE61AOJ8A%2FxqaGBslfwdXSE1yg2tw5khgPsGq8ZBWRIyxHyWMZlgYJbM6WdLoUczE6FxnhqwKCX7q7U21yRRHrSco2huPSuCBP3WiyLE2hD5NeOAieIoC0xEgrmEVMiKkvJdvnvxYpZN2%2BTU%2Bpd7nu4uzjflDTvF%2Bq6x3iq9dvl8M%2BXRCCgkmGGJH6WESSk5KR%2FbZYC%2FkeWktQe9JbZtVo3%2BNJQK5P0GgeeRcuZd202jheTnpePwCgYrb5W25cYYVi%2BgB5ZWyhFrlr6NYtP4Vl8VIcD6vfzdcPy7czbwjuUjYapxrvyjZWWhy80drBYK9T7ZSVjJgLMMfVzqA%2FxGHMFiG5lznAAQmhc08pp2cTVsai9Qul8TFydCRaPl5f8GlVNHexgnFNF%2BBxIBh%2FWBKgQghZygRoG7E1%2F7NTZ4SdGN97ofpmcMO5MgXFXDr%2F922iSvtwhONU2VnXc7Sp34m5MFTuFDbZmuWomt27qWeX9EmxIbo3U6xfu0A5MEGTCoiuTDBjqkARPwdkVTIwQkM%2Fy%2BW%2BaGUPhpGSToPqCcNUudqzzKZUOqIqD%2BA%2FPv9eqXS0JigSxisPfJrRm4INADo6Sp2A%2BxCRbRv%2BZI70FvTm824%2Fh8ZCWz3wPI8w5%2FCeBGgFDLjoak3YEMnfgsTZ3YxeO%2BlJXqXWEqa5GpiEU1tUyYHiWqpGZYXkQnw12dtctMxweuSOvzUPPlnMGN9Zj9Z3mfvAAOcyIkdFyZ&X-Amz-Signature=12d12ea01506eb0cf9fc5b00d644f5a3ce54a9ec7f9a3bedee020b861b87d3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGMZLMX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsDcB9oBWCK%2BUFhbbEFjWqwNUsvzpA33b7CDr%2BJtprpAIhAJ%2Fr24%2FMtFkVOJQH8EvfP9t0GSachM0%2B%2F5LENALBZIbOKv8DCHcQABoMNjM3NDIzMTgzODA1IgyVdwvpzWFgjnODauQq3ANbNt1yzxULMnKUICRIKET0xDn1U%2B9XlMMGVomepo56mrR3i4F7uDXJZoYpU0zDooo7j49qNJUJ5H%2Fm4foKW6t8T8fpSoPXtlznJCub0TjbdcPPcoted3Zk%2Bqu5lIMvvE61AOJ8A%2FxqaGBslfwdXSE1yg2tw5khgPsGq8ZBWRIyxHyWMZlgYJbM6WdLoUczE6FxnhqwKCX7q7U21yRRHrSco2huPSuCBP3WiyLE2hD5NeOAieIoC0xEgrmEVMiKkvJdvnvxYpZN2%2BTU%2Bpd7nu4uzjflDTvF%2Bq6x3iq9dvl8M%2BXRCCgkmGGJH6WESSk5KR%2FbZYC%2FkeWktQe9JbZtVo3%2BNJQK5P0GgeeRcuZd202jheTnpePwCgYrb5W25cYYVi%2BgB5ZWyhFrlr6NYtP4Vl8VIcD6vfzdcPy7czbwjuUjYapxrvyjZWWhy80drBYK9T7ZSVjJgLMMfVzqA%2FxGHMFiG5lznAAQmhc08pp2cTVsai9Qul8TFydCRaPl5f8GlVNHexgnFNF%2BBxIBh%2FWBKgQghZygRoG7E1%2F7NTZ4SdGN97ofpmcMO5MgXFXDr%2F922iSvtwhONU2VnXc7Sp34m5MFTuFDbZmuWomt27qWeX9EmxIbo3U6xfu0A5MEGTCoiuTDBjqkARPwdkVTIwQkM%2Fy%2BW%2BaGUPhpGSToPqCcNUudqzzKZUOqIqD%2BA%2FPv9eqXS0JigSxisPfJrRm4INADo6Sp2A%2BxCRbRv%2BZI70FvTm824%2Fh8ZCWz3wPI8w5%2FCeBGgFDLjoak3YEMnfgsTZ3YxeO%2BlJXqXWEqa5GpiEU1tUyYHiWqpGZYXkQnw12dtctMxweuSOvzUPPlnMGN9Zj9Z3mfvAAOcyIkdFyZ&X-Amz-Signature=73a5b5551c525c8fa0d97aac4659057cbfaa2526b0df3e5ae2f9a22e188229f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
