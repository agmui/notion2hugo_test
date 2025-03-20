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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6JUJ2C%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDxDZlMLZcYAKdLvJMSVhSWERSYdp%2FgDZiUKHqk91VKlgIgYh5TT8e%2FvsU9aDj5ffayDVgrYuEYvKziyMgK0FY2vpwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORBeAAS5maFqZM4DCrcAxjWAF2fOzkdIkVQP7%2FF4j%2B75z4dnNKQKNIKx4wyNpY28Fr%2BaVMGtzGg6Bw6EUvFUjG0QcZhsm%2BVArzGyzSkW0KTg0BDR1hOqak3MBb7a6cDU5kDwfZTbRWlMbB3jxsYVCuh8Ed7uRyhB3TYtbY9xMevSX8K903lE2zppVkmQ9nGk8oZ8eRqSh92FsbRsP8r5wkIaKULnD45f2uPBmW4oRMe03UfdahItoE4Mm%2Bbc87I6dRuYcNIlgBtjeWKsrzKtqVj7hXfJmHZ7kGWpQpD9nd1pC0rHKQp%2B%2FyLvqcgzwZzC7DsmSxg%2Fz1aIOnT%2F8KRcLUBYhexIP00VxJ%2B5XpMafJIt0JLrWBv6rDT2oIVwcb4JXALjMX21KZAGwZVIqLqztIEqqG0ZvMTzNX3N5vclrMItXZZnFAhf2%2FIezeE2UdvvwNs7Ghr0ImOM2vloCrtgGh1fW8YJici%2BAMa7tQ6Lb54PiJm4DCf73gaCeE%2Bht0FIVPaUT0gWMGQ4hHo2qKr1bUePdc5%2BRI8xcMW%2BjNgBGxW3Qvu1tCWEPwFQvqCTt0i8HrrP7RH0x36WLNgKjLcOj7d11rXhojpkcwKX1xVam1k48KjiOkLoL13eZDC3zS0vNrE854JqEP5L5iFMIPq7b4GOqUBlLdu360BOvDv%2F1DJ0pyVUs7h2du6sRLBvYnaa%2FsMTfl%2FPOh5sdvF%2Bqt4S%2Fj5%2FUn1%2Fwpui1ukGnRfRb6Wxl5KMAFW5iWD8MnkLMF%2FrmBpKW3UJVuYMCubmyCgxnE4BxIcaJXcmudortDuv0Lg%2FRPCnHOtiq8KRN4qZeI4hyYZ8lrFiitAw%2BBSG8aM5HcxC8UiMdLF%2FqcRfzrCufGXbgpvL8NhIDHc&X-Amz-Signature=32bcf81c394862cde8a85d01cc507b51edffd6a00db246b883b3c97afb58988d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6JUJ2C%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDxDZlMLZcYAKdLvJMSVhSWERSYdp%2FgDZiUKHqk91VKlgIgYh5TT8e%2FvsU9aDj5ffayDVgrYuEYvKziyMgK0FY2vpwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORBeAAS5maFqZM4DCrcAxjWAF2fOzkdIkVQP7%2FF4j%2B75z4dnNKQKNIKx4wyNpY28Fr%2BaVMGtzGg6Bw6EUvFUjG0QcZhsm%2BVArzGyzSkW0KTg0BDR1hOqak3MBb7a6cDU5kDwfZTbRWlMbB3jxsYVCuh8Ed7uRyhB3TYtbY9xMevSX8K903lE2zppVkmQ9nGk8oZ8eRqSh92FsbRsP8r5wkIaKULnD45f2uPBmW4oRMe03UfdahItoE4Mm%2Bbc87I6dRuYcNIlgBtjeWKsrzKtqVj7hXfJmHZ7kGWpQpD9nd1pC0rHKQp%2B%2FyLvqcgzwZzC7DsmSxg%2Fz1aIOnT%2F8KRcLUBYhexIP00VxJ%2B5XpMafJIt0JLrWBv6rDT2oIVwcb4JXALjMX21KZAGwZVIqLqztIEqqG0ZvMTzNX3N5vclrMItXZZnFAhf2%2FIezeE2UdvvwNs7Ghr0ImOM2vloCrtgGh1fW8YJici%2BAMa7tQ6Lb54PiJm4DCf73gaCeE%2Bht0FIVPaUT0gWMGQ4hHo2qKr1bUePdc5%2BRI8xcMW%2BjNgBGxW3Qvu1tCWEPwFQvqCTt0i8HrrP7RH0x36WLNgKjLcOj7d11rXhojpkcwKX1xVam1k48KjiOkLoL13eZDC3zS0vNrE854JqEP5L5iFMIPq7b4GOqUBlLdu360BOvDv%2F1DJ0pyVUs7h2du6sRLBvYnaa%2FsMTfl%2FPOh5sdvF%2Bqt4S%2Fj5%2FUn1%2Fwpui1ukGnRfRb6Wxl5KMAFW5iWD8MnkLMF%2FrmBpKW3UJVuYMCubmyCgxnE4BxIcaJXcmudortDuv0Lg%2FRPCnHOtiq8KRN4qZeI4hyYZ8lrFiitAw%2BBSG8aM5HcxC8UiMdLF%2FqcRfzrCufGXbgpvL8NhIDHc&X-Amz-Signature=62dd256fd60016fa22b9a87b5e90e5ce243fb29d32c298b371e4665803abdd41&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6JUJ2C%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDxDZlMLZcYAKdLvJMSVhSWERSYdp%2FgDZiUKHqk91VKlgIgYh5TT8e%2FvsU9aDj5ffayDVgrYuEYvKziyMgK0FY2vpwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORBeAAS5maFqZM4DCrcAxjWAF2fOzkdIkVQP7%2FF4j%2B75z4dnNKQKNIKx4wyNpY28Fr%2BaVMGtzGg6Bw6EUvFUjG0QcZhsm%2BVArzGyzSkW0KTg0BDR1hOqak3MBb7a6cDU5kDwfZTbRWlMbB3jxsYVCuh8Ed7uRyhB3TYtbY9xMevSX8K903lE2zppVkmQ9nGk8oZ8eRqSh92FsbRsP8r5wkIaKULnD45f2uPBmW4oRMe03UfdahItoE4Mm%2Bbc87I6dRuYcNIlgBtjeWKsrzKtqVj7hXfJmHZ7kGWpQpD9nd1pC0rHKQp%2B%2FyLvqcgzwZzC7DsmSxg%2Fz1aIOnT%2F8KRcLUBYhexIP00VxJ%2B5XpMafJIt0JLrWBv6rDT2oIVwcb4JXALjMX21KZAGwZVIqLqztIEqqG0ZvMTzNX3N5vclrMItXZZnFAhf2%2FIezeE2UdvvwNs7Ghr0ImOM2vloCrtgGh1fW8YJici%2BAMa7tQ6Lb54PiJm4DCf73gaCeE%2Bht0FIVPaUT0gWMGQ4hHo2qKr1bUePdc5%2BRI8xcMW%2BjNgBGxW3Qvu1tCWEPwFQvqCTt0i8HrrP7RH0x36WLNgKjLcOj7d11rXhojpkcwKX1xVam1k48KjiOkLoL13eZDC3zS0vNrE854JqEP5L5iFMIPq7b4GOqUBlLdu360BOvDv%2F1DJ0pyVUs7h2du6sRLBvYnaa%2FsMTfl%2FPOh5sdvF%2Bqt4S%2Fj5%2FUn1%2Fwpui1ukGnRfRb6Wxl5KMAFW5iWD8MnkLMF%2FrmBpKW3UJVuYMCubmyCgxnE4BxIcaJXcmudortDuv0Lg%2FRPCnHOtiq8KRN4qZeI4hyYZ8lrFiitAw%2BBSG8aM5HcxC8UiMdLF%2FqcRfzrCufGXbgpvL8NhIDHc&X-Amz-Signature=1dd0165d1a1ff2649d2f316d8edc7d0a86811dcc3affee9c6b8bbef5796d4a49&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6JUJ2C%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDxDZlMLZcYAKdLvJMSVhSWERSYdp%2FgDZiUKHqk91VKlgIgYh5TT8e%2FvsU9aDj5ffayDVgrYuEYvKziyMgK0FY2vpwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORBeAAS5maFqZM4DCrcAxjWAF2fOzkdIkVQP7%2FF4j%2B75z4dnNKQKNIKx4wyNpY28Fr%2BaVMGtzGg6Bw6EUvFUjG0QcZhsm%2BVArzGyzSkW0KTg0BDR1hOqak3MBb7a6cDU5kDwfZTbRWlMbB3jxsYVCuh8Ed7uRyhB3TYtbY9xMevSX8K903lE2zppVkmQ9nGk8oZ8eRqSh92FsbRsP8r5wkIaKULnD45f2uPBmW4oRMe03UfdahItoE4Mm%2Bbc87I6dRuYcNIlgBtjeWKsrzKtqVj7hXfJmHZ7kGWpQpD9nd1pC0rHKQp%2B%2FyLvqcgzwZzC7DsmSxg%2Fz1aIOnT%2F8KRcLUBYhexIP00VxJ%2B5XpMafJIt0JLrWBv6rDT2oIVwcb4JXALjMX21KZAGwZVIqLqztIEqqG0ZvMTzNX3N5vclrMItXZZnFAhf2%2FIezeE2UdvvwNs7Ghr0ImOM2vloCrtgGh1fW8YJici%2BAMa7tQ6Lb54PiJm4DCf73gaCeE%2Bht0FIVPaUT0gWMGQ4hHo2qKr1bUePdc5%2BRI8xcMW%2BjNgBGxW3Qvu1tCWEPwFQvqCTt0i8HrrP7RH0x36WLNgKjLcOj7d11rXhojpkcwKX1xVam1k48KjiOkLoL13eZDC3zS0vNrE854JqEP5L5iFMIPq7b4GOqUBlLdu360BOvDv%2F1DJ0pyVUs7h2du6sRLBvYnaa%2FsMTfl%2FPOh5sdvF%2Bqt4S%2Fj5%2FUn1%2Fwpui1ukGnRfRb6Wxl5KMAFW5iWD8MnkLMF%2FrmBpKW3UJVuYMCubmyCgxnE4BxIcaJXcmudortDuv0Lg%2FRPCnHOtiq8KRN4qZeI4hyYZ8lrFiitAw%2BBSG8aM5HcxC8UiMdLF%2FqcRfzrCufGXbgpvL8NhIDHc&X-Amz-Signature=d3e122cd970afab2fa65e362946af19b7b797ec2547046f43a36acb1de1cd863&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6JUJ2C%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDxDZlMLZcYAKdLvJMSVhSWERSYdp%2FgDZiUKHqk91VKlgIgYh5TT8e%2FvsU9aDj5ffayDVgrYuEYvKziyMgK0FY2vpwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORBeAAS5maFqZM4DCrcAxjWAF2fOzkdIkVQP7%2FF4j%2B75z4dnNKQKNIKx4wyNpY28Fr%2BaVMGtzGg6Bw6EUvFUjG0QcZhsm%2BVArzGyzSkW0KTg0BDR1hOqak3MBb7a6cDU5kDwfZTbRWlMbB3jxsYVCuh8Ed7uRyhB3TYtbY9xMevSX8K903lE2zppVkmQ9nGk8oZ8eRqSh92FsbRsP8r5wkIaKULnD45f2uPBmW4oRMe03UfdahItoE4Mm%2Bbc87I6dRuYcNIlgBtjeWKsrzKtqVj7hXfJmHZ7kGWpQpD9nd1pC0rHKQp%2B%2FyLvqcgzwZzC7DsmSxg%2Fz1aIOnT%2F8KRcLUBYhexIP00VxJ%2B5XpMafJIt0JLrWBv6rDT2oIVwcb4JXALjMX21KZAGwZVIqLqztIEqqG0ZvMTzNX3N5vclrMItXZZnFAhf2%2FIezeE2UdvvwNs7Ghr0ImOM2vloCrtgGh1fW8YJici%2BAMa7tQ6Lb54PiJm4DCf73gaCeE%2Bht0FIVPaUT0gWMGQ4hHo2qKr1bUePdc5%2BRI8xcMW%2BjNgBGxW3Qvu1tCWEPwFQvqCTt0i8HrrP7RH0x36WLNgKjLcOj7d11rXhojpkcwKX1xVam1k48KjiOkLoL13eZDC3zS0vNrE854JqEP5L5iFMIPq7b4GOqUBlLdu360BOvDv%2F1DJ0pyVUs7h2du6sRLBvYnaa%2FsMTfl%2FPOh5sdvF%2Bqt4S%2Fj5%2FUn1%2Fwpui1ukGnRfRb6Wxl5KMAFW5iWD8MnkLMF%2FrmBpKW3UJVuYMCubmyCgxnE4BxIcaJXcmudortDuv0Lg%2FRPCnHOtiq8KRN4qZeI4hyYZ8lrFiitAw%2BBSG8aM5HcxC8UiMdLF%2FqcRfzrCufGXbgpvL8NhIDHc&X-Amz-Signature=2c36e92b711a0f5679a21beb7d0bfa9680224048dad73a02c51a5083bd988d46&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
