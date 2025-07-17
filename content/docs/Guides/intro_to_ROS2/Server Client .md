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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTFUNGI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC3NtRYcbYKYN4iow9x6lLs8lWV7qGCSda3lQ%2FQ83m0bgIgesiy%2BhYe4%2FfRZebVz5F2rPmthS%2Fvl0TLgDwg1PLeDF0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGbwgXz74%2B1FyxoNOyrcA1EocweWW9PV811ZewcHJYK7S%2BhlQxGYBnHduNKK8GIe4KHEheV5Q0tNAFc93ljHDTJ9nG7JstUm09ZH1rwgM%2Fwb96leBBARF1UUFqpMeE22YGTDUb3qVvg5FITSPGP9GXtk8vj9B80Nl9R%2BkG1R568apv4fIY%2F3QrzsqR9OBXVQ2X7J5SDix8sw59CXAcVZHVqEvVk4lMZZtJKOEMS7rYayQoDRmYNkMXK4bBeiz%2FTcQVe3Uji960jFbs3hazOBDb%2Fuyk5%2FW3vI1eMsM4Qty4cw91RnAJ4ze%2BwgoSlQJaUj88C29WjWNW2ZySzF0LbbyQIWsm4ahX3bv2hcVXQfpeVC79MmeH1B8K04wv1vklCoO8Yc%2FE%2BOofa5dcG%2FS8XLzU0vq5%2BAPuaRHn77kif4%2FuTCyH3EA2NiIRKYAyl2Bnqr3ktkx%2BfzSpT87svejQCMLOFOoYct55GYd7iLdasvHBkXu5FigBJQTR%2BYOKrjKp6rNU3WxejA6VEALwQa%2BHf4bPF9LH1UgGM68cUuNo8BmWT3oee%2Ffe%2F0V5aHV0aEfmVKbrzAAFalFRSMoxwP%2FLg24un9jekv5l9RnaU%2B3T%2B3HOrE%2F7y8rh3zdmXS%2BnJQX7pHGAM9Blhp7oJMFlyEMJf54MMGOqUB8imlVNmXamcfLLD3x6KoEcdYI4l%2FcWl%2FTK7T8e1SBBZQKzH0xvkK9v803YMNxENQoq%2BGFK6D5J5Id%2FH5%2Basb6lfDx4rUtpIPKk0g%2FQnEaWPaLZDgXlUxvjlPlinmmmED9iInQJqcrEFlX6wP%2B06r2GKbM1iWrNVhlapRg6B8MF%2B5N2r4ZG3sCVmdX7bFOtMQIadL%2B8qltcDvkBz2XlfRZmbbfx2i&X-Amz-Signature=a8a100cab49bde3922d0e3c24815387e443a31603f8af8e43c3d3e932de442bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTFUNGI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC3NtRYcbYKYN4iow9x6lLs8lWV7qGCSda3lQ%2FQ83m0bgIgesiy%2BhYe4%2FfRZebVz5F2rPmthS%2Fvl0TLgDwg1PLeDF0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGbwgXz74%2B1FyxoNOyrcA1EocweWW9PV811ZewcHJYK7S%2BhlQxGYBnHduNKK8GIe4KHEheV5Q0tNAFc93ljHDTJ9nG7JstUm09ZH1rwgM%2Fwb96leBBARF1UUFqpMeE22YGTDUb3qVvg5FITSPGP9GXtk8vj9B80Nl9R%2BkG1R568apv4fIY%2F3QrzsqR9OBXVQ2X7J5SDix8sw59CXAcVZHVqEvVk4lMZZtJKOEMS7rYayQoDRmYNkMXK4bBeiz%2FTcQVe3Uji960jFbs3hazOBDb%2Fuyk5%2FW3vI1eMsM4Qty4cw91RnAJ4ze%2BwgoSlQJaUj88C29WjWNW2ZySzF0LbbyQIWsm4ahX3bv2hcVXQfpeVC79MmeH1B8K04wv1vklCoO8Yc%2FE%2BOofa5dcG%2FS8XLzU0vq5%2BAPuaRHn77kif4%2FuTCyH3EA2NiIRKYAyl2Bnqr3ktkx%2BfzSpT87svejQCMLOFOoYct55GYd7iLdasvHBkXu5FigBJQTR%2BYOKrjKp6rNU3WxejA6VEALwQa%2BHf4bPF9LH1UgGM68cUuNo8BmWT3oee%2Ffe%2F0V5aHV0aEfmVKbrzAAFalFRSMoxwP%2FLg24un9jekv5l9RnaU%2B3T%2B3HOrE%2F7y8rh3zdmXS%2BnJQX7pHGAM9Blhp7oJMFlyEMJf54MMGOqUB8imlVNmXamcfLLD3x6KoEcdYI4l%2FcWl%2FTK7T8e1SBBZQKzH0xvkK9v803YMNxENQoq%2BGFK6D5J5Id%2FH5%2Basb6lfDx4rUtpIPKk0g%2FQnEaWPaLZDgXlUxvjlPlinmmmED9iInQJqcrEFlX6wP%2B06r2GKbM1iWrNVhlapRg6B8MF%2B5N2r4ZG3sCVmdX7bFOtMQIadL%2B8qltcDvkBz2XlfRZmbbfx2i&X-Amz-Signature=5cf8a31805612e677cb380efd2af7d3227c3164e226a1438f6d49517ea18eb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTFUNGI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC3NtRYcbYKYN4iow9x6lLs8lWV7qGCSda3lQ%2FQ83m0bgIgesiy%2BhYe4%2FfRZebVz5F2rPmthS%2Fvl0TLgDwg1PLeDF0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGbwgXz74%2B1FyxoNOyrcA1EocweWW9PV811ZewcHJYK7S%2BhlQxGYBnHduNKK8GIe4KHEheV5Q0tNAFc93ljHDTJ9nG7JstUm09ZH1rwgM%2Fwb96leBBARF1UUFqpMeE22YGTDUb3qVvg5FITSPGP9GXtk8vj9B80Nl9R%2BkG1R568apv4fIY%2F3QrzsqR9OBXVQ2X7J5SDix8sw59CXAcVZHVqEvVk4lMZZtJKOEMS7rYayQoDRmYNkMXK4bBeiz%2FTcQVe3Uji960jFbs3hazOBDb%2Fuyk5%2FW3vI1eMsM4Qty4cw91RnAJ4ze%2BwgoSlQJaUj88C29WjWNW2ZySzF0LbbyQIWsm4ahX3bv2hcVXQfpeVC79MmeH1B8K04wv1vklCoO8Yc%2FE%2BOofa5dcG%2FS8XLzU0vq5%2BAPuaRHn77kif4%2FuTCyH3EA2NiIRKYAyl2Bnqr3ktkx%2BfzSpT87svejQCMLOFOoYct55GYd7iLdasvHBkXu5FigBJQTR%2BYOKrjKp6rNU3WxejA6VEALwQa%2BHf4bPF9LH1UgGM68cUuNo8BmWT3oee%2Ffe%2F0V5aHV0aEfmVKbrzAAFalFRSMoxwP%2FLg24un9jekv5l9RnaU%2B3T%2B3HOrE%2F7y8rh3zdmXS%2BnJQX7pHGAM9Blhp7oJMFlyEMJf54MMGOqUB8imlVNmXamcfLLD3x6KoEcdYI4l%2FcWl%2FTK7T8e1SBBZQKzH0xvkK9v803YMNxENQoq%2BGFK6D5J5Id%2FH5%2Basb6lfDx4rUtpIPKk0g%2FQnEaWPaLZDgXlUxvjlPlinmmmED9iInQJqcrEFlX6wP%2B06r2GKbM1iWrNVhlapRg6B8MF%2B5N2r4ZG3sCVmdX7bFOtMQIadL%2B8qltcDvkBz2XlfRZmbbfx2i&X-Amz-Signature=8f5a4398138f9cf9050ff2e86c0756ef303080f771fd7ad500991e4d6b5c7cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTFUNGI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC3NtRYcbYKYN4iow9x6lLs8lWV7qGCSda3lQ%2FQ83m0bgIgesiy%2BhYe4%2FfRZebVz5F2rPmthS%2Fvl0TLgDwg1PLeDF0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGbwgXz74%2B1FyxoNOyrcA1EocweWW9PV811ZewcHJYK7S%2BhlQxGYBnHduNKK8GIe4KHEheV5Q0tNAFc93ljHDTJ9nG7JstUm09ZH1rwgM%2Fwb96leBBARF1UUFqpMeE22YGTDUb3qVvg5FITSPGP9GXtk8vj9B80Nl9R%2BkG1R568apv4fIY%2F3QrzsqR9OBXVQ2X7J5SDix8sw59CXAcVZHVqEvVk4lMZZtJKOEMS7rYayQoDRmYNkMXK4bBeiz%2FTcQVe3Uji960jFbs3hazOBDb%2Fuyk5%2FW3vI1eMsM4Qty4cw91RnAJ4ze%2BwgoSlQJaUj88C29WjWNW2ZySzF0LbbyQIWsm4ahX3bv2hcVXQfpeVC79MmeH1B8K04wv1vklCoO8Yc%2FE%2BOofa5dcG%2FS8XLzU0vq5%2BAPuaRHn77kif4%2FuTCyH3EA2NiIRKYAyl2Bnqr3ktkx%2BfzSpT87svejQCMLOFOoYct55GYd7iLdasvHBkXu5FigBJQTR%2BYOKrjKp6rNU3WxejA6VEALwQa%2BHf4bPF9LH1UgGM68cUuNo8BmWT3oee%2Ffe%2F0V5aHV0aEfmVKbrzAAFalFRSMoxwP%2FLg24un9jekv5l9RnaU%2B3T%2B3HOrE%2F7y8rh3zdmXS%2BnJQX7pHGAM9Blhp7oJMFlyEMJf54MMGOqUB8imlVNmXamcfLLD3x6KoEcdYI4l%2FcWl%2FTK7T8e1SBBZQKzH0xvkK9v803YMNxENQoq%2BGFK6D5J5Id%2FH5%2Basb6lfDx4rUtpIPKk0g%2FQnEaWPaLZDgXlUxvjlPlinmmmED9iInQJqcrEFlX6wP%2B06r2GKbM1iWrNVhlapRg6B8MF%2B5N2r4ZG3sCVmdX7bFOtMQIadL%2B8qltcDvkBz2XlfRZmbbfx2i&X-Amz-Signature=0d59681f695e2f003a2ec3ebbe0dd9b1d1f5102c831cf62aa3757db4244b5eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTFUNGI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC3NtRYcbYKYN4iow9x6lLs8lWV7qGCSda3lQ%2FQ83m0bgIgesiy%2BhYe4%2FfRZebVz5F2rPmthS%2Fvl0TLgDwg1PLeDF0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGbwgXz74%2B1FyxoNOyrcA1EocweWW9PV811ZewcHJYK7S%2BhlQxGYBnHduNKK8GIe4KHEheV5Q0tNAFc93ljHDTJ9nG7JstUm09ZH1rwgM%2Fwb96leBBARF1UUFqpMeE22YGTDUb3qVvg5FITSPGP9GXtk8vj9B80Nl9R%2BkG1R568apv4fIY%2F3QrzsqR9OBXVQ2X7J5SDix8sw59CXAcVZHVqEvVk4lMZZtJKOEMS7rYayQoDRmYNkMXK4bBeiz%2FTcQVe3Uji960jFbs3hazOBDb%2Fuyk5%2FW3vI1eMsM4Qty4cw91RnAJ4ze%2BwgoSlQJaUj88C29WjWNW2ZySzF0LbbyQIWsm4ahX3bv2hcVXQfpeVC79MmeH1B8K04wv1vklCoO8Yc%2FE%2BOofa5dcG%2FS8XLzU0vq5%2BAPuaRHn77kif4%2FuTCyH3EA2NiIRKYAyl2Bnqr3ktkx%2BfzSpT87svejQCMLOFOoYct55GYd7iLdasvHBkXu5FigBJQTR%2BYOKrjKp6rNU3WxejA6VEALwQa%2BHf4bPF9LH1UgGM68cUuNo8BmWT3oee%2Ffe%2F0V5aHV0aEfmVKbrzAAFalFRSMoxwP%2FLg24un9jekv5l9RnaU%2B3T%2B3HOrE%2F7y8rh3zdmXS%2BnJQX7pHGAM9Blhp7oJMFlyEMJf54MMGOqUB8imlVNmXamcfLLD3x6KoEcdYI4l%2FcWl%2FTK7T8e1SBBZQKzH0xvkK9v803YMNxENQoq%2BGFK6D5J5Id%2FH5%2Basb6lfDx4rUtpIPKk0g%2FQnEaWPaLZDgXlUxvjlPlinmmmED9iInQJqcrEFlX6wP%2B06r2GKbM1iWrNVhlapRg6B8MF%2B5N2r4ZG3sCVmdX7bFOtMQIadL%2B8qltcDvkBz2XlfRZmbbfx2i&X-Amz-Signature=27d1f3511ffc7a5ff569984117e28cba90f5711876e26dbf1f8b50fef3934e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
