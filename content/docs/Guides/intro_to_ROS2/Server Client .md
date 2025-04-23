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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGFPKBU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC4yVhpFevXPfsdvUQarfihTQSY%2BHN%2B9VoC5jiYoSvLEwIgIA%2BSg8THYlxuQNm1QSHj6f7E3YoKuZI8nBoVMKm4mzEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2BF9TXrJO2mz4mJircA3zbvLw8nR9f5cjoYqh5ddFlIChaylpTTP%2Bo9uAYdbTUYVqNL3dp3fHX1mcu2hh7fIGY3CZiRL5q1ipoptZd70t2IrksPO3c5ORL%2Bjivq%2BTG1k7jkbjSTzrMFnswtQp6d6Uo%2BPx3Tjhyn3z9d%2FTis3RPH8uVy%2BEBdUtXMoZSFWKdLrymcCBWmhqsVlGoeVQRbSfHAMB7G3FAavoqrYmeQ2XZ075Cin%2BzaJxevRI6APdNiU6XdmCeOofC4kXo2e%2F7WkH66q7ERJq15EpWcWU7YdroWz6i1PhbtUXavs52valHO4Di7xE40XH1lS8PSrToMo89HDG3mEZIPC1%2FopmIXzTs%2F9lMljqk48UU%2BoqF8IK1Sfaf8TtdkwJZYcBRFsQIFvSQERXxcouFa6gIU6GP3Of1iS6h3gAt5gg2ahGDD5EtLZIernh%2FN08LNwJ6IglsX2jgrk7JYEJMjO5MZqRLlx%2FwdZiLsw1X61QBZHwQSCEyWX9xERtqQT4uq3JPiVNlhHjiYRWkQ6AR1p0gDhRzlJ1YBS07FYJk6IF7wMYSTHxAcNGIRuYUPPafk9tqe4u0UzAF9ry2euF94dr6mp8sOivxhUmmbdSSEqNGE13ont1WGUCzOi2Th8FsB9h%2FMKWHpMAGOqUBVxQfXUxjZd38pf1El9HX58cIlSwFO32nxrGgqQJenf8X7Km%2FFKVTybCcnK5hAoQFK5enGZ2zjhmZVbw5GI9mk0awB%2F1FhC96dU5QN9ak606rEfFuRoMfIMdnt1Up52ebJ32mB4dpFvEN7tPdv%2FXg9BN6BMYwphln98E9ZY0MKEvulUBSfPR1CxmZqHVejLQFrr0xIPupcYjX30QU4Rcypu0DqNd8&X-Amz-Signature=4a9ae1dd8ddd1d42d303bb57fff38acf540e95a2cd495b3702e2df4606b64c54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGFPKBU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC4yVhpFevXPfsdvUQarfihTQSY%2BHN%2B9VoC5jiYoSvLEwIgIA%2BSg8THYlxuQNm1QSHj6f7E3YoKuZI8nBoVMKm4mzEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2BF9TXrJO2mz4mJircA3zbvLw8nR9f5cjoYqh5ddFlIChaylpTTP%2Bo9uAYdbTUYVqNL3dp3fHX1mcu2hh7fIGY3CZiRL5q1ipoptZd70t2IrksPO3c5ORL%2Bjivq%2BTG1k7jkbjSTzrMFnswtQp6d6Uo%2BPx3Tjhyn3z9d%2FTis3RPH8uVy%2BEBdUtXMoZSFWKdLrymcCBWmhqsVlGoeVQRbSfHAMB7G3FAavoqrYmeQ2XZ075Cin%2BzaJxevRI6APdNiU6XdmCeOofC4kXo2e%2F7WkH66q7ERJq15EpWcWU7YdroWz6i1PhbtUXavs52valHO4Di7xE40XH1lS8PSrToMo89HDG3mEZIPC1%2FopmIXzTs%2F9lMljqk48UU%2BoqF8IK1Sfaf8TtdkwJZYcBRFsQIFvSQERXxcouFa6gIU6GP3Of1iS6h3gAt5gg2ahGDD5EtLZIernh%2FN08LNwJ6IglsX2jgrk7JYEJMjO5MZqRLlx%2FwdZiLsw1X61QBZHwQSCEyWX9xERtqQT4uq3JPiVNlhHjiYRWkQ6AR1p0gDhRzlJ1YBS07FYJk6IF7wMYSTHxAcNGIRuYUPPafk9tqe4u0UzAF9ry2euF94dr6mp8sOivxhUmmbdSSEqNGE13ont1WGUCzOi2Th8FsB9h%2FMKWHpMAGOqUBVxQfXUxjZd38pf1El9HX58cIlSwFO32nxrGgqQJenf8X7Km%2FFKVTybCcnK5hAoQFK5enGZ2zjhmZVbw5GI9mk0awB%2F1FhC96dU5QN9ak606rEfFuRoMfIMdnt1Up52ebJ32mB4dpFvEN7tPdv%2FXg9BN6BMYwphln98E9ZY0MKEvulUBSfPR1CxmZqHVejLQFrr0xIPupcYjX30QU4Rcypu0DqNd8&X-Amz-Signature=674cb4020ccf1aea978ea034c141566097f3d0b9bb1bea6d8af01e8f55c0e816&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGFPKBU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC4yVhpFevXPfsdvUQarfihTQSY%2BHN%2B9VoC5jiYoSvLEwIgIA%2BSg8THYlxuQNm1QSHj6f7E3YoKuZI8nBoVMKm4mzEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2BF9TXrJO2mz4mJircA3zbvLw8nR9f5cjoYqh5ddFlIChaylpTTP%2Bo9uAYdbTUYVqNL3dp3fHX1mcu2hh7fIGY3CZiRL5q1ipoptZd70t2IrksPO3c5ORL%2Bjivq%2BTG1k7jkbjSTzrMFnswtQp6d6Uo%2BPx3Tjhyn3z9d%2FTis3RPH8uVy%2BEBdUtXMoZSFWKdLrymcCBWmhqsVlGoeVQRbSfHAMB7G3FAavoqrYmeQ2XZ075Cin%2BzaJxevRI6APdNiU6XdmCeOofC4kXo2e%2F7WkH66q7ERJq15EpWcWU7YdroWz6i1PhbtUXavs52valHO4Di7xE40XH1lS8PSrToMo89HDG3mEZIPC1%2FopmIXzTs%2F9lMljqk48UU%2BoqF8IK1Sfaf8TtdkwJZYcBRFsQIFvSQERXxcouFa6gIU6GP3Of1iS6h3gAt5gg2ahGDD5EtLZIernh%2FN08LNwJ6IglsX2jgrk7JYEJMjO5MZqRLlx%2FwdZiLsw1X61QBZHwQSCEyWX9xERtqQT4uq3JPiVNlhHjiYRWkQ6AR1p0gDhRzlJ1YBS07FYJk6IF7wMYSTHxAcNGIRuYUPPafk9tqe4u0UzAF9ry2euF94dr6mp8sOivxhUmmbdSSEqNGE13ont1WGUCzOi2Th8FsB9h%2FMKWHpMAGOqUBVxQfXUxjZd38pf1El9HX58cIlSwFO32nxrGgqQJenf8X7Km%2FFKVTybCcnK5hAoQFK5enGZ2zjhmZVbw5GI9mk0awB%2F1FhC96dU5QN9ak606rEfFuRoMfIMdnt1Up52ebJ32mB4dpFvEN7tPdv%2FXg9BN6BMYwphln98E9ZY0MKEvulUBSfPR1CxmZqHVejLQFrr0xIPupcYjX30QU4Rcypu0DqNd8&X-Amz-Signature=00f0d981ac686d2973d58e94af67fb974744499dc658069608580d424c931bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGFPKBU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC4yVhpFevXPfsdvUQarfihTQSY%2BHN%2B9VoC5jiYoSvLEwIgIA%2BSg8THYlxuQNm1QSHj6f7E3YoKuZI8nBoVMKm4mzEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2BF9TXrJO2mz4mJircA3zbvLw8nR9f5cjoYqh5ddFlIChaylpTTP%2Bo9uAYdbTUYVqNL3dp3fHX1mcu2hh7fIGY3CZiRL5q1ipoptZd70t2IrksPO3c5ORL%2Bjivq%2BTG1k7jkbjSTzrMFnswtQp6d6Uo%2BPx3Tjhyn3z9d%2FTis3RPH8uVy%2BEBdUtXMoZSFWKdLrymcCBWmhqsVlGoeVQRbSfHAMB7G3FAavoqrYmeQ2XZ075Cin%2BzaJxevRI6APdNiU6XdmCeOofC4kXo2e%2F7WkH66q7ERJq15EpWcWU7YdroWz6i1PhbtUXavs52valHO4Di7xE40XH1lS8PSrToMo89HDG3mEZIPC1%2FopmIXzTs%2F9lMljqk48UU%2BoqF8IK1Sfaf8TtdkwJZYcBRFsQIFvSQERXxcouFa6gIU6GP3Of1iS6h3gAt5gg2ahGDD5EtLZIernh%2FN08LNwJ6IglsX2jgrk7JYEJMjO5MZqRLlx%2FwdZiLsw1X61QBZHwQSCEyWX9xERtqQT4uq3JPiVNlhHjiYRWkQ6AR1p0gDhRzlJ1YBS07FYJk6IF7wMYSTHxAcNGIRuYUPPafk9tqe4u0UzAF9ry2euF94dr6mp8sOivxhUmmbdSSEqNGE13ont1WGUCzOi2Th8FsB9h%2FMKWHpMAGOqUBVxQfXUxjZd38pf1El9HX58cIlSwFO32nxrGgqQJenf8X7Km%2FFKVTybCcnK5hAoQFK5enGZ2zjhmZVbw5GI9mk0awB%2F1FhC96dU5QN9ak606rEfFuRoMfIMdnt1Up52ebJ32mB4dpFvEN7tPdv%2FXg9BN6BMYwphln98E9ZY0MKEvulUBSfPR1CxmZqHVejLQFrr0xIPupcYjX30QU4Rcypu0DqNd8&X-Amz-Signature=696382fff1c66556cc2a34d01619c26fc1a15bf7743ce392f45b13292c002be3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGFPKBU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC4yVhpFevXPfsdvUQarfihTQSY%2BHN%2B9VoC5jiYoSvLEwIgIA%2BSg8THYlxuQNm1QSHj6f7E3YoKuZI8nBoVMKm4mzEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2BF9TXrJO2mz4mJircA3zbvLw8nR9f5cjoYqh5ddFlIChaylpTTP%2Bo9uAYdbTUYVqNL3dp3fHX1mcu2hh7fIGY3CZiRL5q1ipoptZd70t2IrksPO3c5ORL%2Bjivq%2BTG1k7jkbjSTzrMFnswtQp6d6Uo%2BPx3Tjhyn3z9d%2FTis3RPH8uVy%2BEBdUtXMoZSFWKdLrymcCBWmhqsVlGoeVQRbSfHAMB7G3FAavoqrYmeQ2XZ075Cin%2BzaJxevRI6APdNiU6XdmCeOofC4kXo2e%2F7WkH66q7ERJq15EpWcWU7YdroWz6i1PhbtUXavs52valHO4Di7xE40XH1lS8PSrToMo89HDG3mEZIPC1%2FopmIXzTs%2F9lMljqk48UU%2BoqF8IK1Sfaf8TtdkwJZYcBRFsQIFvSQERXxcouFa6gIU6GP3Of1iS6h3gAt5gg2ahGDD5EtLZIernh%2FN08LNwJ6IglsX2jgrk7JYEJMjO5MZqRLlx%2FwdZiLsw1X61QBZHwQSCEyWX9xERtqQT4uq3JPiVNlhHjiYRWkQ6AR1p0gDhRzlJ1YBS07FYJk6IF7wMYSTHxAcNGIRuYUPPafk9tqe4u0UzAF9ry2euF94dr6mp8sOivxhUmmbdSSEqNGE13ont1WGUCzOi2Th8FsB9h%2FMKWHpMAGOqUBVxQfXUxjZd38pf1El9HX58cIlSwFO32nxrGgqQJenf8X7Km%2FFKVTybCcnK5hAoQFK5enGZ2zjhmZVbw5GI9mk0awB%2F1FhC96dU5QN9ak606rEfFuRoMfIMdnt1Up52ebJ32mB4dpFvEN7tPdv%2FXg9BN6BMYwphln98E9ZY0MKEvulUBSfPR1CxmZqHVejLQFrr0xIPupcYjX30QU4Rcypu0DqNd8&X-Amz-Signature=3add17fe64a881347dedf7b11c205c7a3011ce3beba3173f90a5cf5aa2f72720&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
