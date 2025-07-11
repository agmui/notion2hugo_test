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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6UAYKT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSScUA2n%2B9L7yM2ksVTt2AEO%2Ff8PgmwQQk4UR0wCaN2gIhALH7y%2FhIRAdgJchAp5C1k6ZX9sio%2BkY7lit6EDWCSrv4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKSO1U%2F43qifeqVfgq3AMkMe9FqjSu4WExctOvzC8SEfJA%2BQtJDwjNbICmaVq%2FS8iy6RaZIl1vYGQr4Wn2ZV6yDZSTjrdNO3IVsBIgAeg3t9ypwY4tGIGHObumNWHcDJ6oGtco8wSpAtgjwrDSvTRCUxAIoR%2B%2FVhcCCCKPab995VJN4x6rhJ3cGYQyxYTLuTOUdrNbYOc4PSSuBkA14DWpgmi%2BfX%2FBiCdbJ0xUxa3%2BBksNt%2B1gslVhsTE%2BO8gdZZGG6fxSEqZu83q0OJ57NXiieMi%2BI9rpWr%2Fw8%2F6ij40zHrqNjwkfzQAEE4SAH20EqbjWHE3%2BYQscrlpFYzAzvV88BQY7Sf9rXg6Nki7fPJdbxjXx%2BmYjNvLfbN1WohTcJg3oFC2vtJUiGCi3EPY5VGI5Mj2RZO8MQvQ7mgk7bHkXq5tH9Znp1d6ca6DH6gxct3M0DWk%2Bs5jpEgZGp%2B6AqOj2Z830ahK7w3dyaJcaiqZLJWAiev4bgIPed%2FrVmylwxjnBjc3Kjkybi%2BCYDFiszEoXtp34RFDurwYaqxqtQcpD4eZjx0i3XLcxTWhwu2OeJzQLodHtxzytrEyAJA24fUiU1USscVl2qYfKakuSDwYvV2KBUxLYIPdKuv0Xxd1Og5cdZBC1fmkSOxquBTDP%2FMHDBjqkAV0QxpJTj2ZR8WftFWyZ7SSwpLZoFgnhsQeDf6SsSynP5B1rzLevis61VxYjDZe%2BIe6uNC83TeWp93rsbwUWZ4QRDMn7XirSRJ%2BP5PHDoMmzmv9ER%2FUh7i7hPrhGxfcl94J7eGRnXwyOiPl%2B%2FDtF%2FoAXwx1ZxPXGwipR2h1spGCUeiOV38nHytxUgTHFYYqPw2EdOpooiqSnPAduBecR2l7MUCig&X-Amz-Signature=1e9edbd241ebdf23f4476556039d4104d50346f3eeabec081c56d50a62ea010c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6UAYKT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSScUA2n%2B9L7yM2ksVTt2AEO%2Ff8PgmwQQk4UR0wCaN2gIhALH7y%2FhIRAdgJchAp5C1k6ZX9sio%2BkY7lit6EDWCSrv4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKSO1U%2F43qifeqVfgq3AMkMe9FqjSu4WExctOvzC8SEfJA%2BQtJDwjNbICmaVq%2FS8iy6RaZIl1vYGQr4Wn2ZV6yDZSTjrdNO3IVsBIgAeg3t9ypwY4tGIGHObumNWHcDJ6oGtco8wSpAtgjwrDSvTRCUxAIoR%2B%2FVhcCCCKPab995VJN4x6rhJ3cGYQyxYTLuTOUdrNbYOc4PSSuBkA14DWpgmi%2BfX%2FBiCdbJ0xUxa3%2BBksNt%2B1gslVhsTE%2BO8gdZZGG6fxSEqZu83q0OJ57NXiieMi%2BI9rpWr%2Fw8%2F6ij40zHrqNjwkfzQAEE4SAH20EqbjWHE3%2BYQscrlpFYzAzvV88BQY7Sf9rXg6Nki7fPJdbxjXx%2BmYjNvLfbN1WohTcJg3oFC2vtJUiGCi3EPY5VGI5Mj2RZO8MQvQ7mgk7bHkXq5tH9Znp1d6ca6DH6gxct3M0DWk%2Bs5jpEgZGp%2B6AqOj2Z830ahK7w3dyaJcaiqZLJWAiev4bgIPed%2FrVmylwxjnBjc3Kjkybi%2BCYDFiszEoXtp34RFDurwYaqxqtQcpD4eZjx0i3XLcxTWhwu2OeJzQLodHtxzytrEyAJA24fUiU1USscVl2qYfKakuSDwYvV2KBUxLYIPdKuv0Xxd1Og5cdZBC1fmkSOxquBTDP%2FMHDBjqkAV0QxpJTj2ZR8WftFWyZ7SSwpLZoFgnhsQeDf6SsSynP5B1rzLevis61VxYjDZe%2BIe6uNC83TeWp93rsbwUWZ4QRDMn7XirSRJ%2BP5PHDoMmzmv9ER%2FUh7i7hPrhGxfcl94J7eGRnXwyOiPl%2B%2FDtF%2FoAXwx1ZxPXGwipR2h1spGCUeiOV38nHytxUgTHFYYqPw2EdOpooiqSnPAduBecR2l7MUCig&X-Amz-Signature=61354bf6c0866816b09b4ce5d00f28b9f0a9b179df41fa416347a45a71f98425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6UAYKT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSScUA2n%2B9L7yM2ksVTt2AEO%2Ff8PgmwQQk4UR0wCaN2gIhALH7y%2FhIRAdgJchAp5C1k6ZX9sio%2BkY7lit6EDWCSrv4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKSO1U%2F43qifeqVfgq3AMkMe9FqjSu4WExctOvzC8SEfJA%2BQtJDwjNbICmaVq%2FS8iy6RaZIl1vYGQr4Wn2ZV6yDZSTjrdNO3IVsBIgAeg3t9ypwY4tGIGHObumNWHcDJ6oGtco8wSpAtgjwrDSvTRCUxAIoR%2B%2FVhcCCCKPab995VJN4x6rhJ3cGYQyxYTLuTOUdrNbYOc4PSSuBkA14DWpgmi%2BfX%2FBiCdbJ0xUxa3%2BBksNt%2B1gslVhsTE%2BO8gdZZGG6fxSEqZu83q0OJ57NXiieMi%2BI9rpWr%2Fw8%2F6ij40zHrqNjwkfzQAEE4SAH20EqbjWHE3%2BYQscrlpFYzAzvV88BQY7Sf9rXg6Nki7fPJdbxjXx%2BmYjNvLfbN1WohTcJg3oFC2vtJUiGCi3EPY5VGI5Mj2RZO8MQvQ7mgk7bHkXq5tH9Znp1d6ca6DH6gxct3M0DWk%2Bs5jpEgZGp%2B6AqOj2Z830ahK7w3dyaJcaiqZLJWAiev4bgIPed%2FrVmylwxjnBjc3Kjkybi%2BCYDFiszEoXtp34RFDurwYaqxqtQcpD4eZjx0i3XLcxTWhwu2OeJzQLodHtxzytrEyAJA24fUiU1USscVl2qYfKakuSDwYvV2KBUxLYIPdKuv0Xxd1Og5cdZBC1fmkSOxquBTDP%2FMHDBjqkAV0QxpJTj2ZR8WftFWyZ7SSwpLZoFgnhsQeDf6SsSynP5B1rzLevis61VxYjDZe%2BIe6uNC83TeWp93rsbwUWZ4QRDMn7XirSRJ%2BP5PHDoMmzmv9ER%2FUh7i7hPrhGxfcl94J7eGRnXwyOiPl%2B%2FDtF%2FoAXwx1ZxPXGwipR2h1spGCUeiOV38nHytxUgTHFYYqPw2EdOpooiqSnPAduBecR2l7MUCig&X-Amz-Signature=6eb8f846a1ad029854bc44a7a9bc274002a729f368836b8faf0e292cd5e43b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6UAYKT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSScUA2n%2B9L7yM2ksVTt2AEO%2Ff8PgmwQQk4UR0wCaN2gIhALH7y%2FhIRAdgJchAp5C1k6ZX9sio%2BkY7lit6EDWCSrv4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKSO1U%2F43qifeqVfgq3AMkMe9FqjSu4WExctOvzC8SEfJA%2BQtJDwjNbICmaVq%2FS8iy6RaZIl1vYGQr4Wn2ZV6yDZSTjrdNO3IVsBIgAeg3t9ypwY4tGIGHObumNWHcDJ6oGtco8wSpAtgjwrDSvTRCUxAIoR%2B%2FVhcCCCKPab995VJN4x6rhJ3cGYQyxYTLuTOUdrNbYOc4PSSuBkA14DWpgmi%2BfX%2FBiCdbJ0xUxa3%2BBksNt%2B1gslVhsTE%2BO8gdZZGG6fxSEqZu83q0OJ57NXiieMi%2BI9rpWr%2Fw8%2F6ij40zHrqNjwkfzQAEE4SAH20EqbjWHE3%2BYQscrlpFYzAzvV88BQY7Sf9rXg6Nki7fPJdbxjXx%2BmYjNvLfbN1WohTcJg3oFC2vtJUiGCi3EPY5VGI5Mj2RZO8MQvQ7mgk7bHkXq5tH9Znp1d6ca6DH6gxct3M0DWk%2Bs5jpEgZGp%2B6AqOj2Z830ahK7w3dyaJcaiqZLJWAiev4bgIPed%2FrVmylwxjnBjc3Kjkybi%2BCYDFiszEoXtp34RFDurwYaqxqtQcpD4eZjx0i3XLcxTWhwu2OeJzQLodHtxzytrEyAJA24fUiU1USscVl2qYfKakuSDwYvV2KBUxLYIPdKuv0Xxd1Og5cdZBC1fmkSOxquBTDP%2FMHDBjqkAV0QxpJTj2ZR8WftFWyZ7SSwpLZoFgnhsQeDf6SsSynP5B1rzLevis61VxYjDZe%2BIe6uNC83TeWp93rsbwUWZ4QRDMn7XirSRJ%2BP5PHDoMmzmv9ER%2FUh7i7hPrhGxfcl94J7eGRnXwyOiPl%2B%2FDtF%2FoAXwx1ZxPXGwipR2h1spGCUeiOV38nHytxUgTHFYYqPw2EdOpooiqSnPAduBecR2l7MUCig&X-Amz-Signature=bfd906dfdf74cf87af8e9981eba596312e9b488dd520cdda81238e750668cab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6UAYKT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSScUA2n%2B9L7yM2ksVTt2AEO%2Ff8PgmwQQk4UR0wCaN2gIhALH7y%2FhIRAdgJchAp5C1k6ZX9sio%2BkY7lit6EDWCSrv4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKSO1U%2F43qifeqVfgq3AMkMe9FqjSu4WExctOvzC8SEfJA%2BQtJDwjNbICmaVq%2FS8iy6RaZIl1vYGQr4Wn2ZV6yDZSTjrdNO3IVsBIgAeg3t9ypwY4tGIGHObumNWHcDJ6oGtco8wSpAtgjwrDSvTRCUxAIoR%2B%2FVhcCCCKPab995VJN4x6rhJ3cGYQyxYTLuTOUdrNbYOc4PSSuBkA14DWpgmi%2BfX%2FBiCdbJ0xUxa3%2BBksNt%2B1gslVhsTE%2BO8gdZZGG6fxSEqZu83q0OJ57NXiieMi%2BI9rpWr%2Fw8%2F6ij40zHrqNjwkfzQAEE4SAH20EqbjWHE3%2BYQscrlpFYzAzvV88BQY7Sf9rXg6Nki7fPJdbxjXx%2BmYjNvLfbN1WohTcJg3oFC2vtJUiGCi3EPY5VGI5Mj2RZO8MQvQ7mgk7bHkXq5tH9Znp1d6ca6DH6gxct3M0DWk%2Bs5jpEgZGp%2B6AqOj2Z830ahK7w3dyaJcaiqZLJWAiev4bgIPed%2FrVmylwxjnBjc3Kjkybi%2BCYDFiszEoXtp34RFDurwYaqxqtQcpD4eZjx0i3XLcxTWhwu2OeJzQLodHtxzytrEyAJA24fUiU1USscVl2qYfKakuSDwYvV2KBUxLYIPdKuv0Xxd1Og5cdZBC1fmkSOxquBTDP%2FMHDBjqkAV0QxpJTj2ZR8WftFWyZ7SSwpLZoFgnhsQeDf6SsSynP5B1rzLevis61VxYjDZe%2BIe6uNC83TeWp93rsbwUWZ4QRDMn7XirSRJ%2BP5PHDoMmzmv9ER%2FUh7i7hPrhGxfcl94J7eGRnXwyOiPl%2B%2FDtF%2FoAXwx1ZxPXGwipR2h1spGCUeiOV38nHytxUgTHFYYqPw2EdOpooiqSnPAduBecR2l7MUCig&X-Amz-Signature=8263d7f66f64ba2c8e36a9d6745879b05dd0468b0662aa6ac7ee488b52135c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
