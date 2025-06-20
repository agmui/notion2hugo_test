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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT42XA5F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKC2Pc5bqanv7rSW8OoZHy6yb2hoVOU7Hl7NeohndyQIgUgQIgmpMf7X23EY8K2lXNZOlAmgY7oPOd1IIoRhlMR4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyinbBw1GVNgRe83ircA6T3KL0vk5NRFyW%2Fqo6v68Hx5AGF%2Bl0wcfxcGocWl0Dl6oe5VFL%2Ff4MdUXp4iKC43nspQvIum8uWQg%2F7VvqwfXQ0QPPBPbsq2iKscPasQpiZFz35kzBivCTAxuMNPFV0aVOm5Qlb5fUOFb0TViBDJbvZ%2B4aPrHSIC%2Bab37pbk1F%2BCGciXyE0nZZt996%2Fr8sx84anck1EMO7nwLef60kz9FnvigbY7cYt03xSqApKZBsrsnigBFzqnEDxhZLknSICnBwOBkgno4vAvWnAX7S2YEfdkRmmfS9kNVqFccUDJ%2FBIBjb1jWp385KRv7wyhe3XsHQSyI4EAsOztxI9SUbna0PzYqOWkOCggCxAV6qBSptIQgajaaQ2sF8o6%2BbK15FFR0xJ75Pg4%2B4rpbDS8KeaxEZZIZ8QSzAwuii0%2BlAE6NDPl5JgAOpbyeaOxMgAVuc5guodQpy8AG4rPeMkrs0gLZbXcOSKqCg3DPDfGnVA14R0ZKnBhbie2XCj9xAUuNZlAF5B2Sg3V8I1xUZJCsAqHg%2B52uOz53blYxYEEj0nntRN7Qxg5ybcGrDGs%2BLTJnNFws1tMq3pkW78cqcbaCQY7SM8EaAAnR7Nt5B3MkWXG664Hq%2FK2p5CBWSlSps7MIqk1cIGOqUBLtbdR2iIkW5h83FfUMJGq4PwLjQrg2v91IoPa70Ycp2loxKYG7xEJbuocyQUtws052bZieqf4pel6WadHtIrqaqrp6%2FVIXSuMe%2FbGcMKEDCw0iqNxkd3eKfqL3Xbez6e4vPZVQ%2BO1AGBempqWAH012Pf7WbYFoQmCkj3K7dMgDwceWjsLmWdjRW%2Bxt85UEnjZ8IFI8Hr1G8knRJQwwE8jLqLf2Kn&X-Amz-Signature=c3050001dbcbaced6201bda603a8ba1d0e71c902e2600ab52dffdc95d6f8c46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT42XA5F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKC2Pc5bqanv7rSW8OoZHy6yb2hoVOU7Hl7NeohndyQIgUgQIgmpMf7X23EY8K2lXNZOlAmgY7oPOd1IIoRhlMR4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyinbBw1GVNgRe83ircA6T3KL0vk5NRFyW%2Fqo6v68Hx5AGF%2Bl0wcfxcGocWl0Dl6oe5VFL%2Ff4MdUXp4iKC43nspQvIum8uWQg%2F7VvqwfXQ0QPPBPbsq2iKscPasQpiZFz35kzBivCTAxuMNPFV0aVOm5Qlb5fUOFb0TViBDJbvZ%2B4aPrHSIC%2Bab37pbk1F%2BCGciXyE0nZZt996%2Fr8sx84anck1EMO7nwLef60kz9FnvigbY7cYt03xSqApKZBsrsnigBFzqnEDxhZLknSICnBwOBkgno4vAvWnAX7S2YEfdkRmmfS9kNVqFccUDJ%2FBIBjb1jWp385KRv7wyhe3XsHQSyI4EAsOztxI9SUbna0PzYqOWkOCggCxAV6qBSptIQgajaaQ2sF8o6%2BbK15FFR0xJ75Pg4%2B4rpbDS8KeaxEZZIZ8QSzAwuii0%2BlAE6NDPl5JgAOpbyeaOxMgAVuc5guodQpy8AG4rPeMkrs0gLZbXcOSKqCg3DPDfGnVA14R0ZKnBhbie2XCj9xAUuNZlAF5B2Sg3V8I1xUZJCsAqHg%2B52uOz53blYxYEEj0nntRN7Qxg5ybcGrDGs%2BLTJnNFws1tMq3pkW78cqcbaCQY7SM8EaAAnR7Nt5B3MkWXG664Hq%2FK2p5CBWSlSps7MIqk1cIGOqUBLtbdR2iIkW5h83FfUMJGq4PwLjQrg2v91IoPa70Ycp2loxKYG7xEJbuocyQUtws052bZieqf4pel6WadHtIrqaqrp6%2FVIXSuMe%2FbGcMKEDCw0iqNxkd3eKfqL3Xbez6e4vPZVQ%2BO1AGBempqWAH012Pf7WbYFoQmCkj3K7dMgDwceWjsLmWdjRW%2Bxt85UEnjZ8IFI8Hr1G8knRJQwwE8jLqLf2Kn&X-Amz-Signature=ae6d5cc76917722a419cc5a52bca338d730826d0ff745820af3f34d577d049b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT42XA5F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKC2Pc5bqanv7rSW8OoZHy6yb2hoVOU7Hl7NeohndyQIgUgQIgmpMf7X23EY8K2lXNZOlAmgY7oPOd1IIoRhlMR4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyinbBw1GVNgRe83ircA6T3KL0vk5NRFyW%2Fqo6v68Hx5AGF%2Bl0wcfxcGocWl0Dl6oe5VFL%2Ff4MdUXp4iKC43nspQvIum8uWQg%2F7VvqwfXQ0QPPBPbsq2iKscPasQpiZFz35kzBivCTAxuMNPFV0aVOm5Qlb5fUOFb0TViBDJbvZ%2B4aPrHSIC%2Bab37pbk1F%2BCGciXyE0nZZt996%2Fr8sx84anck1EMO7nwLef60kz9FnvigbY7cYt03xSqApKZBsrsnigBFzqnEDxhZLknSICnBwOBkgno4vAvWnAX7S2YEfdkRmmfS9kNVqFccUDJ%2FBIBjb1jWp385KRv7wyhe3XsHQSyI4EAsOztxI9SUbna0PzYqOWkOCggCxAV6qBSptIQgajaaQ2sF8o6%2BbK15FFR0xJ75Pg4%2B4rpbDS8KeaxEZZIZ8QSzAwuii0%2BlAE6NDPl5JgAOpbyeaOxMgAVuc5guodQpy8AG4rPeMkrs0gLZbXcOSKqCg3DPDfGnVA14R0ZKnBhbie2XCj9xAUuNZlAF5B2Sg3V8I1xUZJCsAqHg%2B52uOz53blYxYEEj0nntRN7Qxg5ybcGrDGs%2BLTJnNFws1tMq3pkW78cqcbaCQY7SM8EaAAnR7Nt5B3MkWXG664Hq%2FK2p5CBWSlSps7MIqk1cIGOqUBLtbdR2iIkW5h83FfUMJGq4PwLjQrg2v91IoPa70Ycp2loxKYG7xEJbuocyQUtws052bZieqf4pel6WadHtIrqaqrp6%2FVIXSuMe%2FbGcMKEDCw0iqNxkd3eKfqL3Xbez6e4vPZVQ%2BO1AGBempqWAH012Pf7WbYFoQmCkj3K7dMgDwceWjsLmWdjRW%2Bxt85UEnjZ8IFI8Hr1G8knRJQwwE8jLqLf2Kn&X-Amz-Signature=8063a5386f49e34bc26215b7561d67808a7a01295c9b7fd85921c3e298f099d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT42XA5F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKC2Pc5bqanv7rSW8OoZHy6yb2hoVOU7Hl7NeohndyQIgUgQIgmpMf7X23EY8K2lXNZOlAmgY7oPOd1IIoRhlMR4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyinbBw1GVNgRe83ircA6T3KL0vk5NRFyW%2Fqo6v68Hx5AGF%2Bl0wcfxcGocWl0Dl6oe5VFL%2Ff4MdUXp4iKC43nspQvIum8uWQg%2F7VvqwfXQ0QPPBPbsq2iKscPasQpiZFz35kzBivCTAxuMNPFV0aVOm5Qlb5fUOFb0TViBDJbvZ%2B4aPrHSIC%2Bab37pbk1F%2BCGciXyE0nZZt996%2Fr8sx84anck1EMO7nwLef60kz9FnvigbY7cYt03xSqApKZBsrsnigBFzqnEDxhZLknSICnBwOBkgno4vAvWnAX7S2YEfdkRmmfS9kNVqFccUDJ%2FBIBjb1jWp385KRv7wyhe3XsHQSyI4EAsOztxI9SUbna0PzYqOWkOCggCxAV6qBSptIQgajaaQ2sF8o6%2BbK15FFR0xJ75Pg4%2B4rpbDS8KeaxEZZIZ8QSzAwuii0%2BlAE6NDPl5JgAOpbyeaOxMgAVuc5guodQpy8AG4rPeMkrs0gLZbXcOSKqCg3DPDfGnVA14R0ZKnBhbie2XCj9xAUuNZlAF5B2Sg3V8I1xUZJCsAqHg%2B52uOz53blYxYEEj0nntRN7Qxg5ybcGrDGs%2BLTJnNFws1tMq3pkW78cqcbaCQY7SM8EaAAnR7Nt5B3MkWXG664Hq%2FK2p5CBWSlSps7MIqk1cIGOqUBLtbdR2iIkW5h83FfUMJGq4PwLjQrg2v91IoPa70Ycp2loxKYG7xEJbuocyQUtws052bZieqf4pel6WadHtIrqaqrp6%2FVIXSuMe%2FbGcMKEDCw0iqNxkd3eKfqL3Xbez6e4vPZVQ%2BO1AGBempqWAH012Pf7WbYFoQmCkj3K7dMgDwceWjsLmWdjRW%2Bxt85UEnjZ8IFI8Hr1G8knRJQwwE8jLqLf2Kn&X-Amz-Signature=9da1d189e6b1fff696ef6701acfc0f165d46e8a77ed421ae13b9d3e901aa029b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT42XA5F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKC2Pc5bqanv7rSW8OoZHy6yb2hoVOU7Hl7NeohndyQIgUgQIgmpMf7X23EY8K2lXNZOlAmgY7oPOd1IIoRhlMR4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyinbBw1GVNgRe83ircA6T3KL0vk5NRFyW%2Fqo6v68Hx5AGF%2Bl0wcfxcGocWl0Dl6oe5VFL%2Ff4MdUXp4iKC43nspQvIum8uWQg%2F7VvqwfXQ0QPPBPbsq2iKscPasQpiZFz35kzBivCTAxuMNPFV0aVOm5Qlb5fUOFb0TViBDJbvZ%2B4aPrHSIC%2Bab37pbk1F%2BCGciXyE0nZZt996%2Fr8sx84anck1EMO7nwLef60kz9FnvigbY7cYt03xSqApKZBsrsnigBFzqnEDxhZLknSICnBwOBkgno4vAvWnAX7S2YEfdkRmmfS9kNVqFccUDJ%2FBIBjb1jWp385KRv7wyhe3XsHQSyI4EAsOztxI9SUbna0PzYqOWkOCggCxAV6qBSptIQgajaaQ2sF8o6%2BbK15FFR0xJ75Pg4%2B4rpbDS8KeaxEZZIZ8QSzAwuii0%2BlAE6NDPl5JgAOpbyeaOxMgAVuc5guodQpy8AG4rPeMkrs0gLZbXcOSKqCg3DPDfGnVA14R0ZKnBhbie2XCj9xAUuNZlAF5B2Sg3V8I1xUZJCsAqHg%2B52uOz53blYxYEEj0nntRN7Qxg5ybcGrDGs%2BLTJnNFws1tMq3pkW78cqcbaCQY7SM8EaAAnR7Nt5B3MkWXG664Hq%2FK2p5CBWSlSps7MIqk1cIGOqUBLtbdR2iIkW5h83FfUMJGq4PwLjQrg2v91IoPa70Ycp2loxKYG7xEJbuocyQUtws052bZieqf4pel6WadHtIrqaqrp6%2FVIXSuMe%2FbGcMKEDCw0iqNxkd3eKfqL3Xbez6e4vPZVQ%2BO1AGBempqWAH012Pf7WbYFoQmCkj3K7dMgDwceWjsLmWdjRW%2Bxt85UEnjZ8IFI8Hr1G8knRJQwwE8jLqLf2Kn&X-Amz-Signature=3fa9918e156f2dc3f2e0a62042876d1068cbb5cb1fc0b558cf135ca23446e4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
