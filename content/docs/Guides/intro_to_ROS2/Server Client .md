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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WQDM3I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeFDWMM38xVTzrmgdKjcL%2FnNJiLhmoV%2Bq7UcXQftnN1QIhANAyPXv8Lei0%2FvVGPdoOAOptovwPEoQwY6VqILBz0FEwKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjQf3G6fBAA8guAy0q3ANuV0nzWqGdBJbai3n4C0k3zAWTBur0Dl3iqR0yPL%2FLc6V3m96lvJJCPi0NhzFAK2ntcfGBAgk%2BdI8phpWSW%2BDd36NkUh9H2ytoXo7ZCKWJrXiVLkQy%2Fw61jFaEQpjnHG%2FX%2FYc6Kc70AD9zehI%2Bu2r6U26e0re0i3iwnT1h1uwKZSR2g%2F6j0SB4NNuFDd79XfN1he2EQRS7prf6sr%2B%2FvcevT4HL2jkE0XtGmEoCnpU7B2AxO75NPT6Z1kpf%2BLvvLHgGbUvBTaPmvUh4fZKn%2BuS3mIPSpbuUv44dcW%2BKXFZC1YbULmRUPmTS4Zev4hmx1fXcJDQj6GlHDCjUhxK%2BbInQuUMAKf0WHW8VODDG9637idDN90A03Nv4qIsYPiH59cUujfzeIcEaOmygUcnWgzhOMH5R%2Barstwvn5jyAYvGEtYTZUFeZVWxoZ7bgLpCbHnSUqcdxBC%2FgGPJUNd2Gpc9flR6ZudHF4mwlgv2rxRROeEzkw6voTRyS1HfdRI2kOhV6X4WrNOUWueealhlAcNHoq2FtGtfJgzp0JBFNIXyaWX%2B1OHfvY%2BqxyuvAjiWFMQl0nNcpE%2FGaqaF1M3pntA6pHaDInBtvSI0BU5dClodF80JMRRXc9WIlK7ag8DCOhPXDBjqkAX5o5azV7Xc%2Fzc0RaUfGLfSsE6BpiVtdzevTEDLLapVVDEV%2FXgR8RkBCok3AH692Gxsqxclqi22njnDNANKsN10uaMSiVfamchfBECwmYKuneZ2HAdn0flrf9mKNyjCl%2BA3WA797w7EeT%2FDdIghk35j%2B5l0hux5o%2FSMO9VeG7RQbrbTN%2Fms0E%2BT%2FKBOF0hQEr%2FymGgSFjhMbGHsscKI45QwzMom1&X-Amz-Signature=1b476fbc494828fba03d475e4aad8bbd25208c0097f37e5c00e7d430a15fb90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WQDM3I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeFDWMM38xVTzrmgdKjcL%2FnNJiLhmoV%2Bq7UcXQftnN1QIhANAyPXv8Lei0%2FvVGPdoOAOptovwPEoQwY6VqILBz0FEwKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjQf3G6fBAA8guAy0q3ANuV0nzWqGdBJbai3n4C0k3zAWTBur0Dl3iqR0yPL%2FLc6V3m96lvJJCPi0NhzFAK2ntcfGBAgk%2BdI8phpWSW%2BDd36NkUh9H2ytoXo7ZCKWJrXiVLkQy%2Fw61jFaEQpjnHG%2FX%2FYc6Kc70AD9zehI%2Bu2r6U26e0re0i3iwnT1h1uwKZSR2g%2F6j0SB4NNuFDd79XfN1he2EQRS7prf6sr%2B%2FvcevT4HL2jkE0XtGmEoCnpU7B2AxO75NPT6Z1kpf%2BLvvLHgGbUvBTaPmvUh4fZKn%2BuS3mIPSpbuUv44dcW%2BKXFZC1YbULmRUPmTS4Zev4hmx1fXcJDQj6GlHDCjUhxK%2BbInQuUMAKf0WHW8VODDG9637idDN90A03Nv4qIsYPiH59cUujfzeIcEaOmygUcnWgzhOMH5R%2Barstwvn5jyAYvGEtYTZUFeZVWxoZ7bgLpCbHnSUqcdxBC%2FgGPJUNd2Gpc9flR6ZudHF4mwlgv2rxRROeEzkw6voTRyS1HfdRI2kOhV6X4WrNOUWueealhlAcNHoq2FtGtfJgzp0JBFNIXyaWX%2B1OHfvY%2BqxyuvAjiWFMQl0nNcpE%2FGaqaF1M3pntA6pHaDInBtvSI0BU5dClodF80JMRRXc9WIlK7ag8DCOhPXDBjqkAX5o5azV7Xc%2Fzc0RaUfGLfSsE6BpiVtdzevTEDLLapVVDEV%2FXgR8RkBCok3AH692Gxsqxclqi22njnDNANKsN10uaMSiVfamchfBECwmYKuneZ2HAdn0flrf9mKNyjCl%2BA3WA797w7EeT%2FDdIghk35j%2B5l0hux5o%2FSMO9VeG7RQbrbTN%2Fms0E%2BT%2FKBOF0hQEr%2FymGgSFjhMbGHsscKI45QwzMom1&X-Amz-Signature=b8df0de0b4fbae14c5cae33ed87b4c6a8b77686826b3858fba0cf2933e064f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WQDM3I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeFDWMM38xVTzrmgdKjcL%2FnNJiLhmoV%2Bq7UcXQftnN1QIhANAyPXv8Lei0%2FvVGPdoOAOptovwPEoQwY6VqILBz0FEwKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjQf3G6fBAA8guAy0q3ANuV0nzWqGdBJbai3n4C0k3zAWTBur0Dl3iqR0yPL%2FLc6V3m96lvJJCPi0NhzFAK2ntcfGBAgk%2BdI8phpWSW%2BDd36NkUh9H2ytoXo7ZCKWJrXiVLkQy%2Fw61jFaEQpjnHG%2FX%2FYc6Kc70AD9zehI%2Bu2r6U26e0re0i3iwnT1h1uwKZSR2g%2F6j0SB4NNuFDd79XfN1he2EQRS7prf6sr%2B%2FvcevT4HL2jkE0XtGmEoCnpU7B2AxO75NPT6Z1kpf%2BLvvLHgGbUvBTaPmvUh4fZKn%2BuS3mIPSpbuUv44dcW%2BKXFZC1YbULmRUPmTS4Zev4hmx1fXcJDQj6GlHDCjUhxK%2BbInQuUMAKf0WHW8VODDG9637idDN90A03Nv4qIsYPiH59cUujfzeIcEaOmygUcnWgzhOMH5R%2Barstwvn5jyAYvGEtYTZUFeZVWxoZ7bgLpCbHnSUqcdxBC%2FgGPJUNd2Gpc9flR6ZudHF4mwlgv2rxRROeEzkw6voTRyS1HfdRI2kOhV6X4WrNOUWueealhlAcNHoq2FtGtfJgzp0JBFNIXyaWX%2B1OHfvY%2BqxyuvAjiWFMQl0nNcpE%2FGaqaF1M3pntA6pHaDInBtvSI0BU5dClodF80JMRRXc9WIlK7ag8DCOhPXDBjqkAX5o5azV7Xc%2Fzc0RaUfGLfSsE6BpiVtdzevTEDLLapVVDEV%2FXgR8RkBCok3AH692Gxsqxclqi22njnDNANKsN10uaMSiVfamchfBECwmYKuneZ2HAdn0flrf9mKNyjCl%2BA3WA797w7EeT%2FDdIghk35j%2B5l0hux5o%2FSMO9VeG7RQbrbTN%2Fms0E%2BT%2FKBOF0hQEr%2FymGgSFjhMbGHsscKI45QwzMom1&X-Amz-Signature=a95fb7ae6bf817fbfd321281868765bc345184f9d633d4c1e16f00158ce2a946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WQDM3I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeFDWMM38xVTzrmgdKjcL%2FnNJiLhmoV%2Bq7UcXQftnN1QIhANAyPXv8Lei0%2FvVGPdoOAOptovwPEoQwY6VqILBz0FEwKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjQf3G6fBAA8guAy0q3ANuV0nzWqGdBJbai3n4C0k3zAWTBur0Dl3iqR0yPL%2FLc6V3m96lvJJCPi0NhzFAK2ntcfGBAgk%2BdI8phpWSW%2BDd36NkUh9H2ytoXo7ZCKWJrXiVLkQy%2Fw61jFaEQpjnHG%2FX%2FYc6Kc70AD9zehI%2Bu2r6U26e0re0i3iwnT1h1uwKZSR2g%2F6j0SB4NNuFDd79XfN1he2EQRS7prf6sr%2B%2FvcevT4HL2jkE0XtGmEoCnpU7B2AxO75NPT6Z1kpf%2BLvvLHgGbUvBTaPmvUh4fZKn%2BuS3mIPSpbuUv44dcW%2BKXFZC1YbULmRUPmTS4Zev4hmx1fXcJDQj6GlHDCjUhxK%2BbInQuUMAKf0WHW8VODDG9637idDN90A03Nv4qIsYPiH59cUujfzeIcEaOmygUcnWgzhOMH5R%2Barstwvn5jyAYvGEtYTZUFeZVWxoZ7bgLpCbHnSUqcdxBC%2FgGPJUNd2Gpc9flR6ZudHF4mwlgv2rxRROeEzkw6voTRyS1HfdRI2kOhV6X4WrNOUWueealhlAcNHoq2FtGtfJgzp0JBFNIXyaWX%2B1OHfvY%2BqxyuvAjiWFMQl0nNcpE%2FGaqaF1M3pntA6pHaDInBtvSI0BU5dClodF80JMRRXc9WIlK7ag8DCOhPXDBjqkAX5o5azV7Xc%2Fzc0RaUfGLfSsE6BpiVtdzevTEDLLapVVDEV%2FXgR8RkBCok3AH692Gxsqxclqi22njnDNANKsN10uaMSiVfamchfBECwmYKuneZ2HAdn0flrf9mKNyjCl%2BA3WA797w7EeT%2FDdIghk35j%2B5l0hux5o%2FSMO9VeG7RQbrbTN%2Fms0E%2BT%2FKBOF0hQEr%2FymGgSFjhMbGHsscKI45QwzMom1&X-Amz-Signature=b2f883d6de617a3af846ec6766d0a575f6c07e1da7202fdb62b11db1793668d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WQDM3I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeFDWMM38xVTzrmgdKjcL%2FnNJiLhmoV%2Bq7UcXQftnN1QIhANAyPXv8Lei0%2FvVGPdoOAOptovwPEoQwY6VqILBz0FEwKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjQf3G6fBAA8guAy0q3ANuV0nzWqGdBJbai3n4C0k3zAWTBur0Dl3iqR0yPL%2FLc6V3m96lvJJCPi0NhzFAK2ntcfGBAgk%2BdI8phpWSW%2BDd36NkUh9H2ytoXo7ZCKWJrXiVLkQy%2Fw61jFaEQpjnHG%2FX%2FYc6Kc70AD9zehI%2Bu2r6U26e0re0i3iwnT1h1uwKZSR2g%2F6j0SB4NNuFDd79XfN1he2EQRS7prf6sr%2B%2FvcevT4HL2jkE0XtGmEoCnpU7B2AxO75NPT6Z1kpf%2BLvvLHgGbUvBTaPmvUh4fZKn%2BuS3mIPSpbuUv44dcW%2BKXFZC1YbULmRUPmTS4Zev4hmx1fXcJDQj6GlHDCjUhxK%2BbInQuUMAKf0WHW8VODDG9637idDN90A03Nv4qIsYPiH59cUujfzeIcEaOmygUcnWgzhOMH5R%2Barstwvn5jyAYvGEtYTZUFeZVWxoZ7bgLpCbHnSUqcdxBC%2FgGPJUNd2Gpc9flR6ZudHF4mwlgv2rxRROeEzkw6voTRyS1HfdRI2kOhV6X4WrNOUWueealhlAcNHoq2FtGtfJgzp0JBFNIXyaWX%2B1OHfvY%2BqxyuvAjiWFMQl0nNcpE%2FGaqaF1M3pntA6pHaDInBtvSI0BU5dClodF80JMRRXc9WIlK7ag8DCOhPXDBjqkAX5o5azV7Xc%2Fzc0RaUfGLfSsE6BpiVtdzevTEDLLapVVDEV%2FXgR8RkBCok3AH692Gxsqxclqi22njnDNANKsN10uaMSiVfamchfBECwmYKuneZ2HAdn0flrf9mKNyjCl%2BA3WA797w7EeT%2FDdIghk35j%2B5l0hux5o%2FSMO9VeG7RQbrbTN%2Fms0E%2BT%2FKBOF0hQEr%2FymGgSFjhMbGHsscKI45QwzMom1&X-Amz-Signature=42fddfa9d3c313a3d7aa161ff5989ed674b184465f97ab21720c2e71d6deba8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
