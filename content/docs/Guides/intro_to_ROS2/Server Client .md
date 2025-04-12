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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNRR32Q%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD3Wz6fbwk%2BTtedZNlIEu3AbbC2v0WjdjIa2hwEITBEEQIgAcTfNq7Yg9RHh1%2FAw6lxtWc8o7K559UwW8hzX6TU2%2BUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEctrIdUvrb3M5otjircAwfehGu0CXrrTVbdVQcxmzEvDUmY6UJ%2BvuFOZLSdM3KXIWv4O2322hbimYv9S3iE%2BRZAFRtQEVwZ0cx7Ut9olTcm5n8WKOTXRVwJ8vpM%2B%2F8DIcZnFupaCjghm9kMvveJJnD1vkYEpvNSojNmEVA8YV8woSATchifJJHrDeVLlAHcpdHqx%2Fa8BLunzKzGJ2nIusmM4%2BRmb%2BxrE2wG7oVPxybbN62%2FpCbX0WF9Xo1nhtmiAJagEhkKFk%2BJypCRaw3BQMkASIAX8%2BeeOuHVwcz%2FtiPNGuzas4bk7XnIfQe3secJi0wBiy3wq%2BRLzCSUfCyuQluBq7MyfA6IdnJ1C5Es%2BplFipgNLiqtXhSyUjll8QZy7eqCIYaP1%2BuOlLkBZYak%2Fv%2B9GAsDozoyOZ192EnEf0lNcVtSUFYT2RWUOxjxJBedSHL1Q1vojN4QqEQDIIlKEEMhBBIj3N%2FCXs%2FMk7oeHzuwI3HNh2IgFw9LJYMsp0phW4j0VSUbHUwqLSH8EN6JIRsaft8RozHBsf0dSjJsaKNWsreHRHsXYMTcPWQtkYiq8uRGxFigbtC7n3qT9nmt2B9uJU3C15R05DMgxsAUHQZOLcU0mHKnrQQ1xiStlsupH6qmfIRjRgrU0Sx4MLTV5r8GOqUB4USGJ6ZLxtWyqBsVmAwKZC1stKG7dIcTjEikdshPe1NsmGvZZqEX0KeaFvIdp8ja6Oh8JqAdZnRdK67q%2BW6JqSs2TePazjiekqUnntfC9KWVfCpzPyMeizzTXf8ZgwCFSFWXPpGjPjFmarz6DLfSDCPDSrwpd2EhQ2ziZ1C9yPfXA8BmG2zcgM%2BHWJK4jwZloFHjHlCC%2FX%2BeRKbvq3fZ3TLEQb82&X-Amz-Signature=222b0e69729b46192fd71f582a5b48ce5ba1073a3f27b8b0668e50918096ec04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNRR32Q%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD3Wz6fbwk%2BTtedZNlIEu3AbbC2v0WjdjIa2hwEITBEEQIgAcTfNq7Yg9RHh1%2FAw6lxtWc8o7K559UwW8hzX6TU2%2BUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEctrIdUvrb3M5otjircAwfehGu0CXrrTVbdVQcxmzEvDUmY6UJ%2BvuFOZLSdM3KXIWv4O2322hbimYv9S3iE%2BRZAFRtQEVwZ0cx7Ut9olTcm5n8WKOTXRVwJ8vpM%2B%2F8DIcZnFupaCjghm9kMvveJJnD1vkYEpvNSojNmEVA8YV8woSATchifJJHrDeVLlAHcpdHqx%2Fa8BLunzKzGJ2nIusmM4%2BRmb%2BxrE2wG7oVPxybbN62%2FpCbX0WF9Xo1nhtmiAJagEhkKFk%2BJypCRaw3BQMkASIAX8%2BeeOuHVwcz%2FtiPNGuzas4bk7XnIfQe3secJi0wBiy3wq%2BRLzCSUfCyuQluBq7MyfA6IdnJ1C5Es%2BplFipgNLiqtXhSyUjll8QZy7eqCIYaP1%2BuOlLkBZYak%2Fv%2B9GAsDozoyOZ192EnEf0lNcVtSUFYT2RWUOxjxJBedSHL1Q1vojN4QqEQDIIlKEEMhBBIj3N%2FCXs%2FMk7oeHzuwI3HNh2IgFw9LJYMsp0phW4j0VSUbHUwqLSH8EN6JIRsaft8RozHBsf0dSjJsaKNWsreHRHsXYMTcPWQtkYiq8uRGxFigbtC7n3qT9nmt2B9uJU3C15R05DMgxsAUHQZOLcU0mHKnrQQ1xiStlsupH6qmfIRjRgrU0Sx4MLTV5r8GOqUB4USGJ6ZLxtWyqBsVmAwKZC1stKG7dIcTjEikdshPe1NsmGvZZqEX0KeaFvIdp8ja6Oh8JqAdZnRdK67q%2BW6JqSs2TePazjiekqUnntfC9KWVfCpzPyMeizzTXf8ZgwCFSFWXPpGjPjFmarz6DLfSDCPDSrwpd2EhQ2ziZ1C9yPfXA8BmG2zcgM%2BHWJK4jwZloFHjHlCC%2FX%2BeRKbvq3fZ3TLEQb82&X-Amz-Signature=ae238ccdb9ab772b23b2391a810981849839bb5a5d824264fd08cf7a7fb5bf1b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNRR32Q%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD3Wz6fbwk%2BTtedZNlIEu3AbbC2v0WjdjIa2hwEITBEEQIgAcTfNq7Yg9RHh1%2FAw6lxtWc8o7K559UwW8hzX6TU2%2BUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEctrIdUvrb3M5otjircAwfehGu0CXrrTVbdVQcxmzEvDUmY6UJ%2BvuFOZLSdM3KXIWv4O2322hbimYv9S3iE%2BRZAFRtQEVwZ0cx7Ut9olTcm5n8WKOTXRVwJ8vpM%2B%2F8DIcZnFupaCjghm9kMvveJJnD1vkYEpvNSojNmEVA8YV8woSATchifJJHrDeVLlAHcpdHqx%2Fa8BLunzKzGJ2nIusmM4%2BRmb%2BxrE2wG7oVPxybbN62%2FpCbX0WF9Xo1nhtmiAJagEhkKFk%2BJypCRaw3BQMkASIAX8%2BeeOuHVwcz%2FtiPNGuzas4bk7XnIfQe3secJi0wBiy3wq%2BRLzCSUfCyuQluBq7MyfA6IdnJ1C5Es%2BplFipgNLiqtXhSyUjll8QZy7eqCIYaP1%2BuOlLkBZYak%2Fv%2B9GAsDozoyOZ192EnEf0lNcVtSUFYT2RWUOxjxJBedSHL1Q1vojN4QqEQDIIlKEEMhBBIj3N%2FCXs%2FMk7oeHzuwI3HNh2IgFw9LJYMsp0phW4j0VSUbHUwqLSH8EN6JIRsaft8RozHBsf0dSjJsaKNWsreHRHsXYMTcPWQtkYiq8uRGxFigbtC7n3qT9nmt2B9uJU3C15R05DMgxsAUHQZOLcU0mHKnrQQ1xiStlsupH6qmfIRjRgrU0Sx4MLTV5r8GOqUB4USGJ6ZLxtWyqBsVmAwKZC1stKG7dIcTjEikdshPe1NsmGvZZqEX0KeaFvIdp8ja6Oh8JqAdZnRdK67q%2BW6JqSs2TePazjiekqUnntfC9KWVfCpzPyMeizzTXf8ZgwCFSFWXPpGjPjFmarz6DLfSDCPDSrwpd2EhQ2ziZ1C9yPfXA8BmG2zcgM%2BHWJK4jwZloFHjHlCC%2FX%2BeRKbvq3fZ3TLEQb82&X-Amz-Signature=2c1ed7d75b36b67c2b8d972844fcc81fbdd03e74f43063fbafe897935d835cad&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNRR32Q%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD3Wz6fbwk%2BTtedZNlIEu3AbbC2v0WjdjIa2hwEITBEEQIgAcTfNq7Yg9RHh1%2FAw6lxtWc8o7K559UwW8hzX6TU2%2BUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEctrIdUvrb3M5otjircAwfehGu0CXrrTVbdVQcxmzEvDUmY6UJ%2BvuFOZLSdM3KXIWv4O2322hbimYv9S3iE%2BRZAFRtQEVwZ0cx7Ut9olTcm5n8WKOTXRVwJ8vpM%2B%2F8DIcZnFupaCjghm9kMvveJJnD1vkYEpvNSojNmEVA8YV8woSATchifJJHrDeVLlAHcpdHqx%2Fa8BLunzKzGJ2nIusmM4%2BRmb%2BxrE2wG7oVPxybbN62%2FpCbX0WF9Xo1nhtmiAJagEhkKFk%2BJypCRaw3BQMkASIAX8%2BeeOuHVwcz%2FtiPNGuzas4bk7XnIfQe3secJi0wBiy3wq%2BRLzCSUfCyuQluBq7MyfA6IdnJ1C5Es%2BplFipgNLiqtXhSyUjll8QZy7eqCIYaP1%2BuOlLkBZYak%2Fv%2B9GAsDozoyOZ192EnEf0lNcVtSUFYT2RWUOxjxJBedSHL1Q1vojN4QqEQDIIlKEEMhBBIj3N%2FCXs%2FMk7oeHzuwI3HNh2IgFw9LJYMsp0phW4j0VSUbHUwqLSH8EN6JIRsaft8RozHBsf0dSjJsaKNWsreHRHsXYMTcPWQtkYiq8uRGxFigbtC7n3qT9nmt2B9uJU3C15R05DMgxsAUHQZOLcU0mHKnrQQ1xiStlsupH6qmfIRjRgrU0Sx4MLTV5r8GOqUB4USGJ6ZLxtWyqBsVmAwKZC1stKG7dIcTjEikdshPe1NsmGvZZqEX0KeaFvIdp8ja6Oh8JqAdZnRdK67q%2BW6JqSs2TePazjiekqUnntfC9KWVfCpzPyMeizzTXf8ZgwCFSFWXPpGjPjFmarz6DLfSDCPDSrwpd2EhQ2ziZ1C9yPfXA8BmG2zcgM%2BHWJK4jwZloFHjHlCC%2FX%2BeRKbvq3fZ3TLEQb82&X-Amz-Signature=39c3defe2858fb1a8f86e6661aa1e4a18b4f430f21d383b06079f8a7827e0516&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNRR32Q%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD3Wz6fbwk%2BTtedZNlIEu3AbbC2v0WjdjIa2hwEITBEEQIgAcTfNq7Yg9RHh1%2FAw6lxtWc8o7K559UwW8hzX6TU2%2BUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEctrIdUvrb3M5otjircAwfehGu0CXrrTVbdVQcxmzEvDUmY6UJ%2BvuFOZLSdM3KXIWv4O2322hbimYv9S3iE%2BRZAFRtQEVwZ0cx7Ut9olTcm5n8WKOTXRVwJ8vpM%2B%2F8DIcZnFupaCjghm9kMvveJJnD1vkYEpvNSojNmEVA8YV8woSATchifJJHrDeVLlAHcpdHqx%2Fa8BLunzKzGJ2nIusmM4%2BRmb%2BxrE2wG7oVPxybbN62%2FpCbX0WF9Xo1nhtmiAJagEhkKFk%2BJypCRaw3BQMkASIAX8%2BeeOuHVwcz%2FtiPNGuzas4bk7XnIfQe3secJi0wBiy3wq%2BRLzCSUfCyuQluBq7MyfA6IdnJ1C5Es%2BplFipgNLiqtXhSyUjll8QZy7eqCIYaP1%2BuOlLkBZYak%2Fv%2B9GAsDozoyOZ192EnEf0lNcVtSUFYT2RWUOxjxJBedSHL1Q1vojN4QqEQDIIlKEEMhBBIj3N%2FCXs%2FMk7oeHzuwI3HNh2IgFw9LJYMsp0phW4j0VSUbHUwqLSH8EN6JIRsaft8RozHBsf0dSjJsaKNWsreHRHsXYMTcPWQtkYiq8uRGxFigbtC7n3qT9nmt2B9uJU3C15R05DMgxsAUHQZOLcU0mHKnrQQ1xiStlsupH6qmfIRjRgrU0Sx4MLTV5r8GOqUB4USGJ6ZLxtWyqBsVmAwKZC1stKG7dIcTjEikdshPe1NsmGvZZqEX0KeaFvIdp8ja6Oh8JqAdZnRdK67q%2BW6JqSs2TePazjiekqUnntfC9KWVfCpzPyMeizzTXf8ZgwCFSFWXPpGjPjFmarz6DLfSDCPDSrwpd2EhQ2ziZ1C9yPfXA8BmG2zcgM%2BHWJK4jwZloFHjHlCC%2FX%2BeRKbvq3fZ3TLEQb82&X-Amz-Signature=b67cc6088ea3cdf90f691989df39ba401384e72c9480a3a0be6cf9e2f642cc79&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
