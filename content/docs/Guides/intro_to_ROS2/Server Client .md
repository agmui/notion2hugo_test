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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBA2EKP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuPnLSrKY99W%2FOnn17K8efOKXvE%2FehrDErNTuyEZhIGAiEA3gvm8WAWGjn7ZKojJ1KeMfe%2BbOgZTjAh7n2AOKcnmowqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRELbjI9mxfF1huOyrcA58X4u1RiwTxa3LXZOSFnN6okktxWoXN19Iy2qL4vlbuMve%2FMkE%2BMvjq0QCFfv9VX6i6R8ra1GMlEa4Wo9ZoO1yEIfvZAl0uaz3%2FbQrOvduexmpEvsgeFt7BkxES4VF2keU4T72q94fxVyPoPkFdv%2FA3t7kUb%2BnrR5aEApgGDzIar5XUEFraDDhmwwMGI4TD5QF%2B3hI3lWlT1N%2BSbZAWWKmS1rjnYuZtqlOLkWsCp5ZH6IhU1c%2B5R2G5vSGbZ50BupJFpBPJjrayrCaVKLf1H4Ph8XwD9bzldqjaxaq4g%2Fb3RUDGOthBst%2FuoKDV9ERb9Z3aT3%2F%2Bh%2BRwWzuJIHvfB900W5s6fx0QRfBxID6wHayPuhXPNkjvPlhXvYKikEf8fndWqbl7dOkQBQjRlt7%2Bioahg5BDNnwBYugWIiA6uPaK0PBAkY1tQYEfOpWT6HNtjFYsnynhBGg%2BhmUzvw4jVVrWVCzFkXwwTQuBrLVItHsoa6SDTzru0VaKMtro4J5ffTphBw5P5yRh9AuhxpJ%2FITTeGJECLvNZPoE%2B%2BsEoLJQfuXcjABDzIjNJEE1fVIk42J4yK7C0qwEGMkxh05QZLJPzFsUxXjF2NOeO%2Fw99kZK2L2Zl57W7MtF7nvCOMOnH%2BLwGOqUBTKosZoS%2By%2F2ff3K%2BCYORVvnOEYjxQoNEn1ZwNx6%2FDjmTzxb7q7A%2BRm7qTU3kyCV12xNShNwpfEWy3Wmj8tUm%2F2EHOQLzBC8%2FhOBw43I9GnWF4k00sCpykMFPKetUIdJzhG0FiMyAYZbjBzo1mcqz1lyhcP1CqxV85eP61%2B%2BCxgE9pdL7KHmedbpWGC%2BZHJO%2F5Z5yE%2FRqgfvqudiU8m76Q5XHGnP9&X-Amz-Signature=aad7c36b8a1e8d6899a356fefb2eaa6c4b50325d17012dc802d25f002967b0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBA2EKP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuPnLSrKY99W%2FOnn17K8efOKXvE%2FehrDErNTuyEZhIGAiEA3gvm8WAWGjn7ZKojJ1KeMfe%2BbOgZTjAh7n2AOKcnmowqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRELbjI9mxfF1huOyrcA58X4u1RiwTxa3LXZOSFnN6okktxWoXN19Iy2qL4vlbuMve%2FMkE%2BMvjq0QCFfv9VX6i6R8ra1GMlEa4Wo9ZoO1yEIfvZAl0uaz3%2FbQrOvduexmpEvsgeFt7BkxES4VF2keU4T72q94fxVyPoPkFdv%2FA3t7kUb%2BnrR5aEApgGDzIar5XUEFraDDhmwwMGI4TD5QF%2B3hI3lWlT1N%2BSbZAWWKmS1rjnYuZtqlOLkWsCp5ZH6IhU1c%2B5R2G5vSGbZ50BupJFpBPJjrayrCaVKLf1H4Ph8XwD9bzldqjaxaq4g%2Fb3RUDGOthBst%2FuoKDV9ERb9Z3aT3%2F%2Bh%2BRwWzuJIHvfB900W5s6fx0QRfBxID6wHayPuhXPNkjvPlhXvYKikEf8fndWqbl7dOkQBQjRlt7%2Bioahg5BDNnwBYugWIiA6uPaK0PBAkY1tQYEfOpWT6HNtjFYsnynhBGg%2BhmUzvw4jVVrWVCzFkXwwTQuBrLVItHsoa6SDTzru0VaKMtro4J5ffTphBw5P5yRh9AuhxpJ%2FITTeGJECLvNZPoE%2B%2BsEoLJQfuXcjABDzIjNJEE1fVIk42J4yK7C0qwEGMkxh05QZLJPzFsUxXjF2NOeO%2Fw99kZK2L2Zl57W7MtF7nvCOMOnH%2BLwGOqUBTKosZoS%2By%2F2ff3K%2BCYORVvnOEYjxQoNEn1ZwNx6%2FDjmTzxb7q7A%2BRm7qTU3kyCV12xNShNwpfEWy3Wmj8tUm%2F2EHOQLzBC8%2FhOBw43I9GnWF4k00sCpykMFPKetUIdJzhG0FiMyAYZbjBzo1mcqz1lyhcP1CqxV85eP61%2B%2BCxgE9pdL7KHmedbpWGC%2BZHJO%2F5Z5yE%2FRqgfvqudiU8m76Q5XHGnP9&X-Amz-Signature=f1529bb3e5d46781f4e3942df1e7427b4cb48d58cbe894ed5039c3bfb7a7c9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBA2EKP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuPnLSrKY99W%2FOnn17K8efOKXvE%2FehrDErNTuyEZhIGAiEA3gvm8WAWGjn7ZKojJ1KeMfe%2BbOgZTjAh7n2AOKcnmowqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRELbjI9mxfF1huOyrcA58X4u1RiwTxa3LXZOSFnN6okktxWoXN19Iy2qL4vlbuMve%2FMkE%2BMvjq0QCFfv9VX6i6R8ra1GMlEa4Wo9ZoO1yEIfvZAl0uaz3%2FbQrOvduexmpEvsgeFt7BkxES4VF2keU4T72q94fxVyPoPkFdv%2FA3t7kUb%2BnrR5aEApgGDzIar5XUEFraDDhmwwMGI4TD5QF%2B3hI3lWlT1N%2BSbZAWWKmS1rjnYuZtqlOLkWsCp5ZH6IhU1c%2B5R2G5vSGbZ50BupJFpBPJjrayrCaVKLf1H4Ph8XwD9bzldqjaxaq4g%2Fb3RUDGOthBst%2FuoKDV9ERb9Z3aT3%2F%2Bh%2BRwWzuJIHvfB900W5s6fx0QRfBxID6wHayPuhXPNkjvPlhXvYKikEf8fndWqbl7dOkQBQjRlt7%2Bioahg5BDNnwBYugWIiA6uPaK0PBAkY1tQYEfOpWT6HNtjFYsnynhBGg%2BhmUzvw4jVVrWVCzFkXwwTQuBrLVItHsoa6SDTzru0VaKMtro4J5ffTphBw5P5yRh9AuhxpJ%2FITTeGJECLvNZPoE%2B%2BsEoLJQfuXcjABDzIjNJEE1fVIk42J4yK7C0qwEGMkxh05QZLJPzFsUxXjF2NOeO%2Fw99kZK2L2Zl57W7MtF7nvCOMOnH%2BLwGOqUBTKosZoS%2By%2F2ff3K%2BCYORVvnOEYjxQoNEn1ZwNx6%2FDjmTzxb7q7A%2BRm7qTU3kyCV12xNShNwpfEWy3Wmj8tUm%2F2EHOQLzBC8%2FhOBw43I9GnWF4k00sCpykMFPKetUIdJzhG0FiMyAYZbjBzo1mcqz1lyhcP1CqxV85eP61%2B%2BCxgE9pdL7KHmedbpWGC%2BZHJO%2F5Z5yE%2FRqgfvqudiU8m76Q5XHGnP9&X-Amz-Signature=50b671237e09ee2f3e460e8c61a05208a02bbf0efab05d0008678ef77a11dfc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBA2EKP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuPnLSrKY99W%2FOnn17K8efOKXvE%2FehrDErNTuyEZhIGAiEA3gvm8WAWGjn7ZKojJ1KeMfe%2BbOgZTjAh7n2AOKcnmowqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRELbjI9mxfF1huOyrcA58X4u1RiwTxa3LXZOSFnN6okktxWoXN19Iy2qL4vlbuMve%2FMkE%2BMvjq0QCFfv9VX6i6R8ra1GMlEa4Wo9ZoO1yEIfvZAl0uaz3%2FbQrOvduexmpEvsgeFt7BkxES4VF2keU4T72q94fxVyPoPkFdv%2FA3t7kUb%2BnrR5aEApgGDzIar5XUEFraDDhmwwMGI4TD5QF%2B3hI3lWlT1N%2BSbZAWWKmS1rjnYuZtqlOLkWsCp5ZH6IhU1c%2B5R2G5vSGbZ50BupJFpBPJjrayrCaVKLf1H4Ph8XwD9bzldqjaxaq4g%2Fb3RUDGOthBst%2FuoKDV9ERb9Z3aT3%2F%2Bh%2BRwWzuJIHvfB900W5s6fx0QRfBxID6wHayPuhXPNkjvPlhXvYKikEf8fndWqbl7dOkQBQjRlt7%2Bioahg5BDNnwBYugWIiA6uPaK0PBAkY1tQYEfOpWT6HNtjFYsnynhBGg%2BhmUzvw4jVVrWVCzFkXwwTQuBrLVItHsoa6SDTzru0VaKMtro4J5ffTphBw5P5yRh9AuhxpJ%2FITTeGJECLvNZPoE%2B%2BsEoLJQfuXcjABDzIjNJEE1fVIk42J4yK7C0qwEGMkxh05QZLJPzFsUxXjF2NOeO%2Fw99kZK2L2Zl57W7MtF7nvCOMOnH%2BLwGOqUBTKosZoS%2By%2F2ff3K%2BCYORVvnOEYjxQoNEn1ZwNx6%2FDjmTzxb7q7A%2BRm7qTU3kyCV12xNShNwpfEWy3Wmj8tUm%2F2EHOQLzBC8%2FhOBw43I9GnWF4k00sCpykMFPKetUIdJzhG0FiMyAYZbjBzo1mcqz1lyhcP1CqxV85eP61%2B%2BCxgE9pdL7KHmedbpWGC%2BZHJO%2F5Z5yE%2FRqgfvqudiU8m76Q5XHGnP9&X-Amz-Signature=0727de4c0509fb0dd3b1cfa08a39c5d5e168b820271081ed7478fd8444c4cb74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBA2EKP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuPnLSrKY99W%2FOnn17K8efOKXvE%2FehrDErNTuyEZhIGAiEA3gvm8WAWGjn7ZKojJ1KeMfe%2BbOgZTjAh7n2AOKcnmowqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRELbjI9mxfF1huOyrcA58X4u1RiwTxa3LXZOSFnN6okktxWoXN19Iy2qL4vlbuMve%2FMkE%2BMvjq0QCFfv9VX6i6R8ra1GMlEa4Wo9ZoO1yEIfvZAl0uaz3%2FbQrOvduexmpEvsgeFt7BkxES4VF2keU4T72q94fxVyPoPkFdv%2FA3t7kUb%2BnrR5aEApgGDzIar5XUEFraDDhmwwMGI4TD5QF%2B3hI3lWlT1N%2BSbZAWWKmS1rjnYuZtqlOLkWsCp5ZH6IhU1c%2B5R2G5vSGbZ50BupJFpBPJjrayrCaVKLf1H4Ph8XwD9bzldqjaxaq4g%2Fb3RUDGOthBst%2FuoKDV9ERb9Z3aT3%2F%2Bh%2BRwWzuJIHvfB900W5s6fx0QRfBxID6wHayPuhXPNkjvPlhXvYKikEf8fndWqbl7dOkQBQjRlt7%2Bioahg5BDNnwBYugWIiA6uPaK0PBAkY1tQYEfOpWT6HNtjFYsnynhBGg%2BhmUzvw4jVVrWVCzFkXwwTQuBrLVItHsoa6SDTzru0VaKMtro4J5ffTphBw5P5yRh9AuhxpJ%2FITTeGJECLvNZPoE%2B%2BsEoLJQfuXcjABDzIjNJEE1fVIk42J4yK7C0qwEGMkxh05QZLJPzFsUxXjF2NOeO%2Fw99kZK2L2Zl57W7MtF7nvCOMOnH%2BLwGOqUBTKosZoS%2By%2F2ff3K%2BCYORVvnOEYjxQoNEn1ZwNx6%2FDjmTzxb7q7A%2BRm7qTU3kyCV12xNShNwpfEWy3Wmj8tUm%2F2EHOQLzBC8%2FhOBw43I9GnWF4k00sCpykMFPKetUIdJzhG0FiMyAYZbjBzo1mcqz1lyhcP1CqxV85eP61%2B%2BCxgE9pdL7KHmedbpWGC%2BZHJO%2F5Z5yE%2FRqgfvqudiU8m76Q5XHGnP9&X-Amz-Signature=4bd490b845543dc1417382952f9e0ccdac04e77132423db2f0ac9eba165e6648&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
