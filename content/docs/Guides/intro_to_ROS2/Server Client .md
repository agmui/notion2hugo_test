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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YH6N2F6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPM%2BlGPw1L6FZycPsrrYenwAXMEAs403TFItEyIl6zQIgJd5SkQbGzBpv3fILJfbTs3gBi5y4c19RG2gLpe70T9AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBmUXSk5FM5r3lcySrcA4lXAc2yHbPNvnvCBE5W4eKTdtqz8SNjhKIVt3kkMLOAfeP%2B26JRe31uyq2kj0z88VPTYDzzZHQqtN4whTyX1%2FFxAoIuYQdNAR73TegOpfZehcAF3RwmHyoL2ptwdm0h8MCgrMVWxhfJbn8lJBNGi4CWNvbnq5P0DwvoiGsR%2Bw1MOJrvzrHVldXhoDJDTmY%2FYyawCUEE5zX9mH2ThURfzjsTd1BUA8Y%2FOcEOwTgYTwCWnGomDAp%2FBcIN%2F2ngoyCqpGH3262RI3Mtr5EM7WzGXDRFnj9WSANLgGLfG%2B4ukDKpY0Yq53fQ8Juo6S%2FjIA9RKhPNwxo9CUIsL%2FCNN59gmieGgCAtcpB81AZtyRIUUieVI1ctIve5C5WbKcf9qu3E%2FzigQpyRRFDupIgI1WufheEtcx5mepB2R8NW4yhDGNsn2vaqrY0C4b%2BZG2eDWsJyyXbd%2Bc9w%2B9i%2BFcF4u1NrTXyJFJv4yL6Jb6qxpAj%2BjFwQPDDK9EVt0%2BXBYNY10Y6gUK6hRmzJoN1nwxJ8sYQpSNHba3H%2BBSlxZeNlp3za3BFRyWx%2BXZC1dSguo5RhXp9p0pdPxkfAmCVzExJbltMfCKBUbu3ecZI6Gz4MI3CzfJ529ajJnpHYRJwDxAHPMNzgpL0GOqUBsLbLEVqVM66TOFqLAL8ivF095OK2K5c0NanPVMSHwvm7M1iwUqDO7sJwPkMkimb6QGK0f8rbia3vLZn4pf%2FuekYdxLjGzSLP1P3vvF%2BVG2KZKoAo0IVreJWfUAMy2HX%2B1kjoqF9%2F3A4Br86Pn4uhM3kWh6FD6JFYBBEsnIMvIeJqMdP5jblPsPE%2BgNT0JDDq3TA1UHcMxNMGedbSfTZK%2Fl2aAHqY&X-Amz-Signature=3d47cb5d91f8208c4542703e9448493903d660d5a3eb0381f5ec2efb31828335&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YH6N2F6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPM%2BlGPw1L6FZycPsrrYenwAXMEAs403TFItEyIl6zQIgJd5SkQbGzBpv3fILJfbTs3gBi5y4c19RG2gLpe70T9AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBmUXSk5FM5r3lcySrcA4lXAc2yHbPNvnvCBE5W4eKTdtqz8SNjhKIVt3kkMLOAfeP%2B26JRe31uyq2kj0z88VPTYDzzZHQqtN4whTyX1%2FFxAoIuYQdNAR73TegOpfZehcAF3RwmHyoL2ptwdm0h8MCgrMVWxhfJbn8lJBNGi4CWNvbnq5P0DwvoiGsR%2Bw1MOJrvzrHVldXhoDJDTmY%2FYyawCUEE5zX9mH2ThURfzjsTd1BUA8Y%2FOcEOwTgYTwCWnGomDAp%2FBcIN%2F2ngoyCqpGH3262RI3Mtr5EM7WzGXDRFnj9WSANLgGLfG%2B4ukDKpY0Yq53fQ8Juo6S%2FjIA9RKhPNwxo9CUIsL%2FCNN59gmieGgCAtcpB81AZtyRIUUieVI1ctIve5C5WbKcf9qu3E%2FzigQpyRRFDupIgI1WufheEtcx5mepB2R8NW4yhDGNsn2vaqrY0C4b%2BZG2eDWsJyyXbd%2Bc9w%2B9i%2BFcF4u1NrTXyJFJv4yL6Jb6qxpAj%2BjFwQPDDK9EVt0%2BXBYNY10Y6gUK6hRmzJoN1nwxJ8sYQpSNHba3H%2BBSlxZeNlp3za3BFRyWx%2BXZC1dSguo5RhXp9p0pdPxkfAmCVzExJbltMfCKBUbu3ecZI6Gz4MI3CzfJ529ajJnpHYRJwDxAHPMNzgpL0GOqUBsLbLEVqVM66TOFqLAL8ivF095OK2K5c0NanPVMSHwvm7M1iwUqDO7sJwPkMkimb6QGK0f8rbia3vLZn4pf%2FuekYdxLjGzSLP1P3vvF%2BVG2KZKoAo0IVreJWfUAMy2HX%2B1kjoqF9%2F3A4Br86Pn4uhM3kWh6FD6JFYBBEsnIMvIeJqMdP5jblPsPE%2BgNT0JDDq3TA1UHcMxNMGedbSfTZK%2Fl2aAHqY&X-Amz-Signature=b1fc55a108ea345e25ae786b8a29473484b3f55cf0ce298d1d66211e11d7b0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YH6N2F6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPM%2BlGPw1L6FZycPsrrYenwAXMEAs403TFItEyIl6zQIgJd5SkQbGzBpv3fILJfbTs3gBi5y4c19RG2gLpe70T9AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBmUXSk5FM5r3lcySrcA4lXAc2yHbPNvnvCBE5W4eKTdtqz8SNjhKIVt3kkMLOAfeP%2B26JRe31uyq2kj0z88VPTYDzzZHQqtN4whTyX1%2FFxAoIuYQdNAR73TegOpfZehcAF3RwmHyoL2ptwdm0h8MCgrMVWxhfJbn8lJBNGi4CWNvbnq5P0DwvoiGsR%2Bw1MOJrvzrHVldXhoDJDTmY%2FYyawCUEE5zX9mH2ThURfzjsTd1BUA8Y%2FOcEOwTgYTwCWnGomDAp%2FBcIN%2F2ngoyCqpGH3262RI3Mtr5EM7WzGXDRFnj9WSANLgGLfG%2B4ukDKpY0Yq53fQ8Juo6S%2FjIA9RKhPNwxo9CUIsL%2FCNN59gmieGgCAtcpB81AZtyRIUUieVI1ctIve5C5WbKcf9qu3E%2FzigQpyRRFDupIgI1WufheEtcx5mepB2R8NW4yhDGNsn2vaqrY0C4b%2BZG2eDWsJyyXbd%2Bc9w%2B9i%2BFcF4u1NrTXyJFJv4yL6Jb6qxpAj%2BjFwQPDDK9EVt0%2BXBYNY10Y6gUK6hRmzJoN1nwxJ8sYQpSNHba3H%2BBSlxZeNlp3za3BFRyWx%2BXZC1dSguo5RhXp9p0pdPxkfAmCVzExJbltMfCKBUbu3ecZI6Gz4MI3CzfJ529ajJnpHYRJwDxAHPMNzgpL0GOqUBsLbLEVqVM66TOFqLAL8ivF095OK2K5c0NanPVMSHwvm7M1iwUqDO7sJwPkMkimb6QGK0f8rbia3vLZn4pf%2FuekYdxLjGzSLP1P3vvF%2BVG2KZKoAo0IVreJWfUAMy2HX%2B1kjoqF9%2F3A4Br86Pn4uhM3kWh6FD6JFYBBEsnIMvIeJqMdP5jblPsPE%2BgNT0JDDq3TA1UHcMxNMGedbSfTZK%2Fl2aAHqY&X-Amz-Signature=568c7a12ab462da843c635e3c2e1c3625d8d02ed80dae5cc2f68689b589db883&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YH6N2F6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPM%2BlGPw1L6FZycPsrrYenwAXMEAs403TFItEyIl6zQIgJd5SkQbGzBpv3fILJfbTs3gBi5y4c19RG2gLpe70T9AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBmUXSk5FM5r3lcySrcA4lXAc2yHbPNvnvCBE5W4eKTdtqz8SNjhKIVt3kkMLOAfeP%2B26JRe31uyq2kj0z88VPTYDzzZHQqtN4whTyX1%2FFxAoIuYQdNAR73TegOpfZehcAF3RwmHyoL2ptwdm0h8MCgrMVWxhfJbn8lJBNGi4CWNvbnq5P0DwvoiGsR%2Bw1MOJrvzrHVldXhoDJDTmY%2FYyawCUEE5zX9mH2ThURfzjsTd1BUA8Y%2FOcEOwTgYTwCWnGomDAp%2FBcIN%2F2ngoyCqpGH3262RI3Mtr5EM7WzGXDRFnj9WSANLgGLfG%2B4ukDKpY0Yq53fQ8Juo6S%2FjIA9RKhPNwxo9CUIsL%2FCNN59gmieGgCAtcpB81AZtyRIUUieVI1ctIve5C5WbKcf9qu3E%2FzigQpyRRFDupIgI1WufheEtcx5mepB2R8NW4yhDGNsn2vaqrY0C4b%2BZG2eDWsJyyXbd%2Bc9w%2B9i%2BFcF4u1NrTXyJFJv4yL6Jb6qxpAj%2BjFwQPDDK9EVt0%2BXBYNY10Y6gUK6hRmzJoN1nwxJ8sYQpSNHba3H%2BBSlxZeNlp3za3BFRyWx%2BXZC1dSguo5RhXp9p0pdPxkfAmCVzExJbltMfCKBUbu3ecZI6Gz4MI3CzfJ529ajJnpHYRJwDxAHPMNzgpL0GOqUBsLbLEVqVM66TOFqLAL8ivF095OK2K5c0NanPVMSHwvm7M1iwUqDO7sJwPkMkimb6QGK0f8rbia3vLZn4pf%2FuekYdxLjGzSLP1P3vvF%2BVG2KZKoAo0IVreJWfUAMy2HX%2B1kjoqF9%2F3A4Br86Pn4uhM3kWh6FD6JFYBBEsnIMvIeJqMdP5jblPsPE%2BgNT0JDDq3TA1UHcMxNMGedbSfTZK%2Fl2aAHqY&X-Amz-Signature=64011ebb7bb8a8f605051f862600749eb010612b15a960c4ed056635ed2ffe4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YH6N2F6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPM%2BlGPw1L6FZycPsrrYenwAXMEAs403TFItEyIl6zQIgJd5SkQbGzBpv3fILJfbTs3gBi5y4c19RG2gLpe70T9AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBmUXSk5FM5r3lcySrcA4lXAc2yHbPNvnvCBE5W4eKTdtqz8SNjhKIVt3kkMLOAfeP%2B26JRe31uyq2kj0z88VPTYDzzZHQqtN4whTyX1%2FFxAoIuYQdNAR73TegOpfZehcAF3RwmHyoL2ptwdm0h8MCgrMVWxhfJbn8lJBNGi4CWNvbnq5P0DwvoiGsR%2Bw1MOJrvzrHVldXhoDJDTmY%2FYyawCUEE5zX9mH2ThURfzjsTd1BUA8Y%2FOcEOwTgYTwCWnGomDAp%2FBcIN%2F2ngoyCqpGH3262RI3Mtr5EM7WzGXDRFnj9WSANLgGLfG%2B4ukDKpY0Yq53fQ8Juo6S%2FjIA9RKhPNwxo9CUIsL%2FCNN59gmieGgCAtcpB81AZtyRIUUieVI1ctIve5C5WbKcf9qu3E%2FzigQpyRRFDupIgI1WufheEtcx5mepB2R8NW4yhDGNsn2vaqrY0C4b%2BZG2eDWsJyyXbd%2Bc9w%2B9i%2BFcF4u1NrTXyJFJv4yL6Jb6qxpAj%2BjFwQPDDK9EVt0%2BXBYNY10Y6gUK6hRmzJoN1nwxJ8sYQpSNHba3H%2BBSlxZeNlp3za3BFRyWx%2BXZC1dSguo5RhXp9p0pdPxkfAmCVzExJbltMfCKBUbu3ecZI6Gz4MI3CzfJ529ajJnpHYRJwDxAHPMNzgpL0GOqUBsLbLEVqVM66TOFqLAL8ivF095OK2K5c0NanPVMSHwvm7M1iwUqDO7sJwPkMkimb6QGK0f8rbia3vLZn4pf%2FuekYdxLjGzSLP1P3vvF%2BVG2KZKoAo0IVreJWfUAMy2HX%2B1kjoqF9%2F3A4Br86Pn4uhM3kWh6FD6JFYBBEsnIMvIeJqMdP5jblPsPE%2BgNT0JDDq3TA1UHcMxNMGedbSfTZK%2Fl2aAHqY&X-Amz-Signature=15ea7d14e830b09e64e81197643257a3cc52e66fb38f624c03e2cc368370ddc2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
