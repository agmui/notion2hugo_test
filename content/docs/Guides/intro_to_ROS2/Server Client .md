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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4HV6G3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxvP%2FlOc60YZml7QaeuuKYGJJrGi3VjGq0iqaEsjCzMwIhALYvV0Dzi7glg3LAIEUqxGet6c6txDF8iVdtfMiS6%2BYlKv8DCEcQABoMNjM3NDIzMTgzODA1IgxAi2S6OWrTIm6bAUYq3AOT9ZIunp1gJnViMA%2FxB%2B9NSQelT%2Ff7a%2F1IPr5IdtssFXLPZ3ogGQV7jZ8llRcjcJgm5Xr4GoLfUtZrlk%2BYCGqCyPnFBAULgnUi1JdZBA8UPPH3tE%2FJ%2BY9KLLMhAr3KfNP2gXhUkVTLgVosNufL64ik6lUSqhNbLMacDFi9YFTS7V9ojeLSbbPEhrMjvl0DbHiUaU02HYtXOWSIP5ryE4ASXlD6XXJO36%2BgzmugdkDvkVCELbLZfTo0kKXQNxAWJhedSFEkc23ApB85lQpV5R4%2FpgUkTMLiVxGbTjohmnWtpqVRYFkY2AW5PqOBLPpNzIm%2BekIzmosiXn4sHXK5JkspjAKKXVw601uox9FBEF1OcvcNkrCc8n4CDcXfyiUbVOJi4ifzMGfzmN%2FF0kvpqYshcJcbuYcEP1%2Bzjpd3%2FpsCO1uXeQZHwPeNDw1qekpO6f%2BAYsvebHi%2FHM%2FyQ2d24UxiSVNeDgZwjJBhy9Z6wUTb4xIug8FG3%2B5VHWiSWK%2FrVlrf9JF130c20Cc1bRB2Qfa2XB83a0%2FM8af8g0IBfPf5bMCC9B0j%2FDcJ74%2BfZWqPhEYzGo4FQKpivxIaWO3DSTYucxX4gyd5ukYF7DSC5ctxqldL0EMOUSpHWs5bcDCFr9nDBjqkAQrELroL6wRgIzLZNDn%2FiJTSgIcXeCfzFH2RZaS%2FKvM0u2jSWVzifdvJaLgxYjC70OpaLarR0rg9Qrwp03eNVdE5SzbA8WMXNsFbaDMz88BzkSSMWplc3cUUmd7ej0LZVe1kMx%2FDV%2FmXyTkPVU2CJY5qinE4PMKuMIE4zM0S2dgtj%2BSMJeD3Aob7zV42vUStQO1vJh2opnamDwEP79rzQ9Mr1Ohj&X-Amz-Signature=5e916b86c8371680cc5b8e59128ea4fdb188772c99c72341484a7c2e633f6d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4HV6G3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxvP%2FlOc60YZml7QaeuuKYGJJrGi3VjGq0iqaEsjCzMwIhALYvV0Dzi7glg3LAIEUqxGet6c6txDF8iVdtfMiS6%2BYlKv8DCEcQABoMNjM3NDIzMTgzODA1IgxAi2S6OWrTIm6bAUYq3AOT9ZIunp1gJnViMA%2FxB%2B9NSQelT%2Ff7a%2F1IPr5IdtssFXLPZ3ogGQV7jZ8llRcjcJgm5Xr4GoLfUtZrlk%2BYCGqCyPnFBAULgnUi1JdZBA8UPPH3tE%2FJ%2BY9KLLMhAr3KfNP2gXhUkVTLgVosNufL64ik6lUSqhNbLMacDFi9YFTS7V9ojeLSbbPEhrMjvl0DbHiUaU02HYtXOWSIP5ryE4ASXlD6XXJO36%2BgzmugdkDvkVCELbLZfTo0kKXQNxAWJhedSFEkc23ApB85lQpV5R4%2FpgUkTMLiVxGbTjohmnWtpqVRYFkY2AW5PqOBLPpNzIm%2BekIzmosiXn4sHXK5JkspjAKKXVw601uox9FBEF1OcvcNkrCc8n4CDcXfyiUbVOJi4ifzMGfzmN%2FF0kvpqYshcJcbuYcEP1%2Bzjpd3%2FpsCO1uXeQZHwPeNDw1qekpO6f%2BAYsvebHi%2FHM%2FyQ2d24UxiSVNeDgZwjJBhy9Z6wUTb4xIug8FG3%2B5VHWiSWK%2FrVlrf9JF130c20Cc1bRB2Qfa2XB83a0%2FM8af8g0IBfPf5bMCC9B0j%2FDcJ74%2BfZWqPhEYzGo4FQKpivxIaWO3DSTYucxX4gyd5ukYF7DSC5ctxqldL0EMOUSpHWs5bcDCFr9nDBjqkAQrELroL6wRgIzLZNDn%2FiJTSgIcXeCfzFH2RZaS%2FKvM0u2jSWVzifdvJaLgxYjC70OpaLarR0rg9Qrwp03eNVdE5SzbA8WMXNsFbaDMz88BzkSSMWplc3cUUmd7ej0LZVe1kMx%2FDV%2FmXyTkPVU2CJY5qinE4PMKuMIE4zM0S2dgtj%2BSMJeD3Aob7zV42vUStQO1vJh2opnamDwEP79rzQ9Mr1Ohj&X-Amz-Signature=9e0bf85f7402cf256f7c89dc4c122165277e0f233c1fd4327761bbd544e80076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4HV6G3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxvP%2FlOc60YZml7QaeuuKYGJJrGi3VjGq0iqaEsjCzMwIhALYvV0Dzi7glg3LAIEUqxGet6c6txDF8iVdtfMiS6%2BYlKv8DCEcQABoMNjM3NDIzMTgzODA1IgxAi2S6OWrTIm6bAUYq3AOT9ZIunp1gJnViMA%2FxB%2B9NSQelT%2Ff7a%2F1IPr5IdtssFXLPZ3ogGQV7jZ8llRcjcJgm5Xr4GoLfUtZrlk%2BYCGqCyPnFBAULgnUi1JdZBA8UPPH3tE%2FJ%2BY9KLLMhAr3KfNP2gXhUkVTLgVosNufL64ik6lUSqhNbLMacDFi9YFTS7V9ojeLSbbPEhrMjvl0DbHiUaU02HYtXOWSIP5ryE4ASXlD6XXJO36%2BgzmugdkDvkVCELbLZfTo0kKXQNxAWJhedSFEkc23ApB85lQpV5R4%2FpgUkTMLiVxGbTjohmnWtpqVRYFkY2AW5PqOBLPpNzIm%2BekIzmosiXn4sHXK5JkspjAKKXVw601uox9FBEF1OcvcNkrCc8n4CDcXfyiUbVOJi4ifzMGfzmN%2FF0kvpqYshcJcbuYcEP1%2Bzjpd3%2FpsCO1uXeQZHwPeNDw1qekpO6f%2BAYsvebHi%2FHM%2FyQ2d24UxiSVNeDgZwjJBhy9Z6wUTb4xIug8FG3%2B5VHWiSWK%2FrVlrf9JF130c20Cc1bRB2Qfa2XB83a0%2FM8af8g0IBfPf5bMCC9B0j%2FDcJ74%2BfZWqPhEYzGo4FQKpivxIaWO3DSTYucxX4gyd5ukYF7DSC5ctxqldL0EMOUSpHWs5bcDCFr9nDBjqkAQrELroL6wRgIzLZNDn%2FiJTSgIcXeCfzFH2RZaS%2FKvM0u2jSWVzifdvJaLgxYjC70OpaLarR0rg9Qrwp03eNVdE5SzbA8WMXNsFbaDMz88BzkSSMWplc3cUUmd7ej0LZVe1kMx%2FDV%2FmXyTkPVU2CJY5qinE4PMKuMIE4zM0S2dgtj%2BSMJeD3Aob7zV42vUStQO1vJh2opnamDwEP79rzQ9Mr1Ohj&X-Amz-Signature=5bff7f110434364656afe1dfb96d2b9c3f39403a8b09967bf9a84536efca5ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4HV6G3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxvP%2FlOc60YZml7QaeuuKYGJJrGi3VjGq0iqaEsjCzMwIhALYvV0Dzi7glg3LAIEUqxGet6c6txDF8iVdtfMiS6%2BYlKv8DCEcQABoMNjM3NDIzMTgzODA1IgxAi2S6OWrTIm6bAUYq3AOT9ZIunp1gJnViMA%2FxB%2B9NSQelT%2Ff7a%2F1IPr5IdtssFXLPZ3ogGQV7jZ8llRcjcJgm5Xr4GoLfUtZrlk%2BYCGqCyPnFBAULgnUi1JdZBA8UPPH3tE%2FJ%2BY9KLLMhAr3KfNP2gXhUkVTLgVosNufL64ik6lUSqhNbLMacDFi9YFTS7V9ojeLSbbPEhrMjvl0DbHiUaU02HYtXOWSIP5ryE4ASXlD6XXJO36%2BgzmugdkDvkVCELbLZfTo0kKXQNxAWJhedSFEkc23ApB85lQpV5R4%2FpgUkTMLiVxGbTjohmnWtpqVRYFkY2AW5PqOBLPpNzIm%2BekIzmosiXn4sHXK5JkspjAKKXVw601uox9FBEF1OcvcNkrCc8n4CDcXfyiUbVOJi4ifzMGfzmN%2FF0kvpqYshcJcbuYcEP1%2Bzjpd3%2FpsCO1uXeQZHwPeNDw1qekpO6f%2BAYsvebHi%2FHM%2FyQ2d24UxiSVNeDgZwjJBhy9Z6wUTb4xIug8FG3%2B5VHWiSWK%2FrVlrf9JF130c20Cc1bRB2Qfa2XB83a0%2FM8af8g0IBfPf5bMCC9B0j%2FDcJ74%2BfZWqPhEYzGo4FQKpivxIaWO3DSTYucxX4gyd5ukYF7DSC5ctxqldL0EMOUSpHWs5bcDCFr9nDBjqkAQrELroL6wRgIzLZNDn%2FiJTSgIcXeCfzFH2RZaS%2FKvM0u2jSWVzifdvJaLgxYjC70OpaLarR0rg9Qrwp03eNVdE5SzbA8WMXNsFbaDMz88BzkSSMWplc3cUUmd7ej0LZVe1kMx%2FDV%2FmXyTkPVU2CJY5qinE4PMKuMIE4zM0S2dgtj%2BSMJeD3Aob7zV42vUStQO1vJh2opnamDwEP79rzQ9Mr1Ohj&X-Amz-Signature=017883b2f276ca85967699ce36fc2c0a0d29602a9a903a7028ad5ee6de940f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4HV6G3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxvP%2FlOc60YZml7QaeuuKYGJJrGi3VjGq0iqaEsjCzMwIhALYvV0Dzi7glg3LAIEUqxGet6c6txDF8iVdtfMiS6%2BYlKv8DCEcQABoMNjM3NDIzMTgzODA1IgxAi2S6OWrTIm6bAUYq3AOT9ZIunp1gJnViMA%2FxB%2B9NSQelT%2Ff7a%2F1IPr5IdtssFXLPZ3ogGQV7jZ8llRcjcJgm5Xr4GoLfUtZrlk%2BYCGqCyPnFBAULgnUi1JdZBA8UPPH3tE%2FJ%2BY9KLLMhAr3KfNP2gXhUkVTLgVosNufL64ik6lUSqhNbLMacDFi9YFTS7V9ojeLSbbPEhrMjvl0DbHiUaU02HYtXOWSIP5ryE4ASXlD6XXJO36%2BgzmugdkDvkVCELbLZfTo0kKXQNxAWJhedSFEkc23ApB85lQpV5R4%2FpgUkTMLiVxGbTjohmnWtpqVRYFkY2AW5PqOBLPpNzIm%2BekIzmosiXn4sHXK5JkspjAKKXVw601uox9FBEF1OcvcNkrCc8n4CDcXfyiUbVOJi4ifzMGfzmN%2FF0kvpqYshcJcbuYcEP1%2Bzjpd3%2FpsCO1uXeQZHwPeNDw1qekpO6f%2BAYsvebHi%2FHM%2FyQ2d24UxiSVNeDgZwjJBhy9Z6wUTb4xIug8FG3%2B5VHWiSWK%2FrVlrf9JF130c20Cc1bRB2Qfa2XB83a0%2FM8af8g0IBfPf5bMCC9B0j%2FDcJ74%2BfZWqPhEYzGo4FQKpivxIaWO3DSTYucxX4gyd5ukYF7DSC5ctxqldL0EMOUSpHWs5bcDCFr9nDBjqkAQrELroL6wRgIzLZNDn%2FiJTSgIcXeCfzFH2RZaS%2FKvM0u2jSWVzifdvJaLgxYjC70OpaLarR0rg9Qrwp03eNVdE5SzbA8WMXNsFbaDMz88BzkSSMWplc3cUUmd7ej0LZVe1kMx%2FDV%2FmXyTkPVU2CJY5qinE4PMKuMIE4zM0S2dgtj%2BSMJeD3Aob7zV42vUStQO1vJh2opnamDwEP79rzQ9Mr1Ohj&X-Amz-Signature=9c332c188f5cfd86e4eb1b3e3b6d258692a7e7eaf9fe146d2b06bb718b9b721f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
