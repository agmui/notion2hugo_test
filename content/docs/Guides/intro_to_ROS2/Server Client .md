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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ2N6DF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsMB5teHyWjnmG9oGZfWmsMl2IXHU5jOKjhs6aSpu7QIhAO16sf41fbI2T4ek%2BS007wi2OFPVKgc5WVS7uDoRkdDtKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq8s3qum308uV%2BVToq3AOB1yRgN2UD808BVazEv4PW%2F%2FGpWnbxspm6T090E3V55SF4YebempWrkLD2gJ5srupSZ948bhpnkRPrO7jkfH5ybbsKxeXY06qUZr%2Be%2B3f1e9nE2WCKGWPbi1ycxLU7cI8lNOfs2av0nlfV8Pf9zOSLL1jvqSn8VymnovlGdPq7FCMFQjqSXfGuPvQd7RuiNT1X510iahWAAG4GpZXB%2BSRwo5sAL3tptDBQBnIj63zK5NFDk0Zli4qHtrWjlKwZU3ZTHZs7adjx%2B57ahZaGRhK2l8EkRlNTgMwa6u9DXQ1xWjAGtTkgglHw7ZRk8lXZO5vn2iR6MgVW3YqeusZLgJ9HXGwxwQTXpU3tcF%2BfNYC4hDJV702yoFMP5m%2FUmltWNbvBOAbAgf33Oy6xfxkW5I2dVomP64WjRQt80j7cgVeDU%2BZvOQ%2BC2ekFm2J5xmJjWiiAJaKvEyjzF%2BqxA8218T%2B1uQAjBTTyEZ9n9q2jbS6Rv8OQtLphiOdB7L31iuUfB%2BZHXtlqT0TsCOEQn%2F%2BHKn1fT%2FCGNm4DShAgRk6UMz77JdzeMxLOaKpBcvHk%2B4bdu0BuD%2BroFrhQMabyop4EQ2d8kMI9cL58mHV%2BERSB0I4P1Os1OX2YXMYxG9ydnTDngOO9BjqkAQtJjWFnT0D3uHrccEcdOfhf%2BwV1L0TSuHnLImzTnXFwWn1y530%2BG6fWFh%2FqTVnYvSTApzK1tPSwUi3d2yJm51zhXsF0PuVId6rNy%2Fsr87hRZ4FR2%2FoMoxTZzSnsAEi%2BTq72RKHmY1j38nwFtoGi%2FDUIqP%2B7vszW02wTF7BMx6EWhjR2rZazDsNqC9NcVONziDXJJ1KXIWGUzsqA%2BuS2N5idSe1D&X-Amz-Signature=7f8e9e3bbd1325425df1459c4c8289c1cfa0e4ec9302746962afb80e6ee74c12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ2N6DF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsMB5teHyWjnmG9oGZfWmsMl2IXHU5jOKjhs6aSpu7QIhAO16sf41fbI2T4ek%2BS007wi2OFPVKgc5WVS7uDoRkdDtKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq8s3qum308uV%2BVToq3AOB1yRgN2UD808BVazEv4PW%2F%2FGpWnbxspm6T090E3V55SF4YebempWrkLD2gJ5srupSZ948bhpnkRPrO7jkfH5ybbsKxeXY06qUZr%2Be%2B3f1e9nE2WCKGWPbi1ycxLU7cI8lNOfs2av0nlfV8Pf9zOSLL1jvqSn8VymnovlGdPq7FCMFQjqSXfGuPvQd7RuiNT1X510iahWAAG4GpZXB%2BSRwo5sAL3tptDBQBnIj63zK5NFDk0Zli4qHtrWjlKwZU3ZTHZs7adjx%2B57ahZaGRhK2l8EkRlNTgMwa6u9DXQ1xWjAGtTkgglHw7ZRk8lXZO5vn2iR6MgVW3YqeusZLgJ9HXGwxwQTXpU3tcF%2BfNYC4hDJV702yoFMP5m%2FUmltWNbvBOAbAgf33Oy6xfxkW5I2dVomP64WjRQt80j7cgVeDU%2BZvOQ%2BC2ekFm2J5xmJjWiiAJaKvEyjzF%2BqxA8218T%2B1uQAjBTTyEZ9n9q2jbS6Rv8OQtLphiOdB7L31iuUfB%2BZHXtlqT0TsCOEQn%2F%2BHKn1fT%2FCGNm4DShAgRk6UMz77JdzeMxLOaKpBcvHk%2B4bdu0BuD%2BroFrhQMabyop4EQ2d8kMI9cL58mHV%2BERSB0I4P1Os1OX2YXMYxG9ydnTDngOO9BjqkAQtJjWFnT0D3uHrccEcdOfhf%2BwV1L0TSuHnLImzTnXFwWn1y530%2BG6fWFh%2FqTVnYvSTApzK1tPSwUi3d2yJm51zhXsF0PuVId6rNy%2Fsr87hRZ4FR2%2FoMoxTZzSnsAEi%2BTq72RKHmY1j38nwFtoGi%2FDUIqP%2B7vszW02wTF7BMx6EWhjR2rZazDsNqC9NcVONziDXJJ1KXIWGUzsqA%2BuS2N5idSe1D&X-Amz-Signature=b217eabf0372502b19aac81a02ade2cf7841f202d3af436bf37757f764ba457c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ2N6DF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsMB5teHyWjnmG9oGZfWmsMl2IXHU5jOKjhs6aSpu7QIhAO16sf41fbI2T4ek%2BS007wi2OFPVKgc5WVS7uDoRkdDtKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq8s3qum308uV%2BVToq3AOB1yRgN2UD808BVazEv4PW%2F%2FGpWnbxspm6T090E3V55SF4YebempWrkLD2gJ5srupSZ948bhpnkRPrO7jkfH5ybbsKxeXY06qUZr%2Be%2B3f1e9nE2WCKGWPbi1ycxLU7cI8lNOfs2av0nlfV8Pf9zOSLL1jvqSn8VymnovlGdPq7FCMFQjqSXfGuPvQd7RuiNT1X510iahWAAG4GpZXB%2BSRwo5sAL3tptDBQBnIj63zK5NFDk0Zli4qHtrWjlKwZU3ZTHZs7adjx%2B57ahZaGRhK2l8EkRlNTgMwa6u9DXQ1xWjAGtTkgglHw7ZRk8lXZO5vn2iR6MgVW3YqeusZLgJ9HXGwxwQTXpU3tcF%2BfNYC4hDJV702yoFMP5m%2FUmltWNbvBOAbAgf33Oy6xfxkW5I2dVomP64WjRQt80j7cgVeDU%2BZvOQ%2BC2ekFm2J5xmJjWiiAJaKvEyjzF%2BqxA8218T%2B1uQAjBTTyEZ9n9q2jbS6Rv8OQtLphiOdB7L31iuUfB%2BZHXtlqT0TsCOEQn%2F%2BHKn1fT%2FCGNm4DShAgRk6UMz77JdzeMxLOaKpBcvHk%2B4bdu0BuD%2BroFrhQMabyop4EQ2d8kMI9cL58mHV%2BERSB0I4P1Os1OX2YXMYxG9ydnTDngOO9BjqkAQtJjWFnT0D3uHrccEcdOfhf%2BwV1L0TSuHnLImzTnXFwWn1y530%2BG6fWFh%2FqTVnYvSTApzK1tPSwUi3d2yJm51zhXsF0PuVId6rNy%2Fsr87hRZ4FR2%2FoMoxTZzSnsAEi%2BTq72RKHmY1j38nwFtoGi%2FDUIqP%2B7vszW02wTF7BMx6EWhjR2rZazDsNqC9NcVONziDXJJ1KXIWGUzsqA%2BuS2N5idSe1D&X-Amz-Signature=ae1d6bb26c44c7767366a746bef1a9ea0b83ff5bdf6295823ef99dfdd80b2dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ2N6DF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsMB5teHyWjnmG9oGZfWmsMl2IXHU5jOKjhs6aSpu7QIhAO16sf41fbI2T4ek%2BS007wi2OFPVKgc5WVS7uDoRkdDtKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq8s3qum308uV%2BVToq3AOB1yRgN2UD808BVazEv4PW%2F%2FGpWnbxspm6T090E3V55SF4YebempWrkLD2gJ5srupSZ948bhpnkRPrO7jkfH5ybbsKxeXY06qUZr%2Be%2B3f1e9nE2WCKGWPbi1ycxLU7cI8lNOfs2av0nlfV8Pf9zOSLL1jvqSn8VymnovlGdPq7FCMFQjqSXfGuPvQd7RuiNT1X510iahWAAG4GpZXB%2BSRwo5sAL3tptDBQBnIj63zK5NFDk0Zli4qHtrWjlKwZU3ZTHZs7adjx%2B57ahZaGRhK2l8EkRlNTgMwa6u9DXQ1xWjAGtTkgglHw7ZRk8lXZO5vn2iR6MgVW3YqeusZLgJ9HXGwxwQTXpU3tcF%2BfNYC4hDJV702yoFMP5m%2FUmltWNbvBOAbAgf33Oy6xfxkW5I2dVomP64WjRQt80j7cgVeDU%2BZvOQ%2BC2ekFm2J5xmJjWiiAJaKvEyjzF%2BqxA8218T%2B1uQAjBTTyEZ9n9q2jbS6Rv8OQtLphiOdB7L31iuUfB%2BZHXtlqT0TsCOEQn%2F%2BHKn1fT%2FCGNm4DShAgRk6UMz77JdzeMxLOaKpBcvHk%2B4bdu0BuD%2BroFrhQMabyop4EQ2d8kMI9cL58mHV%2BERSB0I4P1Os1OX2YXMYxG9ydnTDngOO9BjqkAQtJjWFnT0D3uHrccEcdOfhf%2BwV1L0TSuHnLImzTnXFwWn1y530%2BG6fWFh%2FqTVnYvSTApzK1tPSwUi3d2yJm51zhXsF0PuVId6rNy%2Fsr87hRZ4FR2%2FoMoxTZzSnsAEi%2BTq72RKHmY1j38nwFtoGi%2FDUIqP%2B7vszW02wTF7BMx6EWhjR2rZazDsNqC9NcVONziDXJJ1KXIWGUzsqA%2BuS2N5idSe1D&X-Amz-Signature=fc455d496bc21ce671cd02c05d4313223d2d895a571c3a4411764a8518947509&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ2N6DF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsMB5teHyWjnmG9oGZfWmsMl2IXHU5jOKjhs6aSpu7QIhAO16sf41fbI2T4ek%2BS007wi2OFPVKgc5WVS7uDoRkdDtKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq8s3qum308uV%2BVToq3AOB1yRgN2UD808BVazEv4PW%2F%2FGpWnbxspm6T090E3V55SF4YebempWrkLD2gJ5srupSZ948bhpnkRPrO7jkfH5ybbsKxeXY06qUZr%2Be%2B3f1e9nE2WCKGWPbi1ycxLU7cI8lNOfs2av0nlfV8Pf9zOSLL1jvqSn8VymnovlGdPq7FCMFQjqSXfGuPvQd7RuiNT1X510iahWAAG4GpZXB%2BSRwo5sAL3tptDBQBnIj63zK5NFDk0Zli4qHtrWjlKwZU3ZTHZs7adjx%2B57ahZaGRhK2l8EkRlNTgMwa6u9DXQ1xWjAGtTkgglHw7ZRk8lXZO5vn2iR6MgVW3YqeusZLgJ9HXGwxwQTXpU3tcF%2BfNYC4hDJV702yoFMP5m%2FUmltWNbvBOAbAgf33Oy6xfxkW5I2dVomP64WjRQt80j7cgVeDU%2BZvOQ%2BC2ekFm2J5xmJjWiiAJaKvEyjzF%2BqxA8218T%2B1uQAjBTTyEZ9n9q2jbS6Rv8OQtLphiOdB7L31iuUfB%2BZHXtlqT0TsCOEQn%2F%2BHKn1fT%2FCGNm4DShAgRk6UMz77JdzeMxLOaKpBcvHk%2B4bdu0BuD%2BroFrhQMabyop4EQ2d8kMI9cL58mHV%2BERSB0I4P1Os1OX2YXMYxG9ydnTDngOO9BjqkAQtJjWFnT0D3uHrccEcdOfhf%2BwV1L0TSuHnLImzTnXFwWn1y530%2BG6fWFh%2FqTVnYvSTApzK1tPSwUi3d2yJm51zhXsF0PuVId6rNy%2Fsr87hRZ4FR2%2FoMoxTZzSnsAEi%2BTq72RKHmY1j38nwFtoGi%2FDUIqP%2B7vszW02wTF7BMx6EWhjR2rZazDsNqC9NcVONziDXJJ1KXIWGUzsqA%2BuS2N5idSe1D&X-Amz-Signature=4e4e08cc6ac0a2a0494deb01880c98009e8aab72a8e0d62147c6f393d5666b42&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
