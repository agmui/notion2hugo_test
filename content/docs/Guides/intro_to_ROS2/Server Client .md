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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUEJHQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp8Q3KsrTnZK3vYRBkupIHxVZg6UbPzds1d0gs8U1d9AiEAoqfrSznVIHY5k2g%2FIKlqT4MfsTUr2IuL90h8%2F6trYqoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOWWn%2F%2F%2F9C4pOE7bqircAztx3e7BDBJfsdxL9H5BTmZ%2BKXTI%2Fz6VBkoHXvYVQZs%2B69KuUJVS5GuedTtVB70PLuGP1jrMjkt7AIEo5osKQMRSN7USP3HpZxAhV9CYhjqhWZep6yVA8cLWPlFxR8yXljSvRgSuJX5DXKn9i7wzelaomPSnSNcYVVXGEC8DrNoDHgoBkRJxxDF99h%2FWauzmKKU88JzsU4G%2Bnq7h9SfRivq%2Bj7%2FD6L%2BYltkDC1BZkaVZ7eTEtSAFIdvDhUI9ON%2Bk1NfETGW%2Bwi9xHcXBrO8U1%2F2MEwT66DsToRFbHsvrAUPTMjB85eUm1OiaJJvrCZiSI6WoLlOJlLHkhFBB0oaPGPpukq9zL8mO9XGmYHOgo7G3uQx5wX4KFvQM15PDBnsuY0DNoUqjnVP6EzvB2fBAoSfWWQBK8vC%2Bx0Nfm2hYwrFM2KSQwC70aH9701xivWXRTEaD5f83Wzs%2FqYckgv4jueUtFeQtWW%2FdPeMEYn%2FbAVZbpB73%2FW7vx7gM4ulttPKk7PvQEjzObPSNFfwGakDJwtziH5cEJVs4yIGTF9fTsyUDbyAe1CNraMi%2F2cN3uvVj7KYSa7V1lwZHPP0EunBZqoyGA8MDmIsEBbOWSlpnAZP2gxvUiVxp6Kqggt9uMLHO374GOqUBL2yaws8KR1wCGXP52G10wNLZsZLYjXSInFe92v8I%2F4aZqAbgzxCzTA66AZ32B4Q2yiK0cDdiwiNdegXpBqKSAkyld8MCBl3gwVo4LHRS3WCB0EpOgGCvokCKQ2GL4roclxWA%2FbklrK5gjJm9SnG5jTZXhbExGRaPnBR5eKAIuqwjZNQSrXD5F2lPplz9MouT7G9FsipPXcCNiU54wNQLaiXdnJeO&X-Amz-Signature=299831949e0d04b8aab91d3ad590360471157bf157eb441658fa579ab54ec7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUEJHQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp8Q3KsrTnZK3vYRBkupIHxVZg6UbPzds1d0gs8U1d9AiEAoqfrSznVIHY5k2g%2FIKlqT4MfsTUr2IuL90h8%2F6trYqoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOWWn%2F%2F%2F9C4pOE7bqircAztx3e7BDBJfsdxL9H5BTmZ%2BKXTI%2Fz6VBkoHXvYVQZs%2B69KuUJVS5GuedTtVB70PLuGP1jrMjkt7AIEo5osKQMRSN7USP3HpZxAhV9CYhjqhWZep6yVA8cLWPlFxR8yXljSvRgSuJX5DXKn9i7wzelaomPSnSNcYVVXGEC8DrNoDHgoBkRJxxDF99h%2FWauzmKKU88JzsU4G%2Bnq7h9SfRivq%2Bj7%2FD6L%2BYltkDC1BZkaVZ7eTEtSAFIdvDhUI9ON%2Bk1NfETGW%2Bwi9xHcXBrO8U1%2F2MEwT66DsToRFbHsvrAUPTMjB85eUm1OiaJJvrCZiSI6WoLlOJlLHkhFBB0oaPGPpukq9zL8mO9XGmYHOgo7G3uQx5wX4KFvQM15PDBnsuY0DNoUqjnVP6EzvB2fBAoSfWWQBK8vC%2Bx0Nfm2hYwrFM2KSQwC70aH9701xivWXRTEaD5f83Wzs%2FqYckgv4jueUtFeQtWW%2FdPeMEYn%2FbAVZbpB73%2FW7vx7gM4ulttPKk7PvQEjzObPSNFfwGakDJwtziH5cEJVs4yIGTF9fTsyUDbyAe1CNraMi%2F2cN3uvVj7KYSa7V1lwZHPP0EunBZqoyGA8MDmIsEBbOWSlpnAZP2gxvUiVxp6Kqggt9uMLHO374GOqUBL2yaws8KR1wCGXP52G10wNLZsZLYjXSInFe92v8I%2F4aZqAbgzxCzTA66AZ32B4Q2yiK0cDdiwiNdegXpBqKSAkyld8MCBl3gwVo4LHRS3WCB0EpOgGCvokCKQ2GL4roclxWA%2FbklrK5gjJm9SnG5jTZXhbExGRaPnBR5eKAIuqwjZNQSrXD5F2lPplz9MouT7G9FsipPXcCNiU54wNQLaiXdnJeO&X-Amz-Signature=d2307a77491be6c9cec3da00425255e92df27c75f245fce5e54571f9ecfc0200&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUEJHQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp8Q3KsrTnZK3vYRBkupIHxVZg6UbPzds1d0gs8U1d9AiEAoqfrSznVIHY5k2g%2FIKlqT4MfsTUr2IuL90h8%2F6trYqoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOWWn%2F%2F%2F9C4pOE7bqircAztx3e7BDBJfsdxL9H5BTmZ%2BKXTI%2Fz6VBkoHXvYVQZs%2B69KuUJVS5GuedTtVB70PLuGP1jrMjkt7AIEo5osKQMRSN7USP3HpZxAhV9CYhjqhWZep6yVA8cLWPlFxR8yXljSvRgSuJX5DXKn9i7wzelaomPSnSNcYVVXGEC8DrNoDHgoBkRJxxDF99h%2FWauzmKKU88JzsU4G%2Bnq7h9SfRivq%2Bj7%2FD6L%2BYltkDC1BZkaVZ7eTEtSAFIdvDhUI9ON%2Bk1NfETGW%2Bwi9xHcXBrO8U1%2F2MEwT66DsToRFbHsvrAUPTMjB85eUm1OiaJJvrCZiSI6WoLlOJlLHkhFBB0oaPGPpukq9zL8mO9XGmYHOgo7G3uQx5wX4KFvQM15PDBnsuY0DNoUqjnVP6EzvB2fBAoSfWWQBK8vC%2Bx0Nfm2hYwrFM2KSQwC70aH9701xivWXRTEaD5f83Wzs%2FqYckgv4jueUtFeQtWW%2FdPeMEYn%2FbAVZbpB73%2FW7vx7gM4ulttPKk7PvQEjzObPSNFfwGakDJwtziH5cEJVs4yIGTF9fTsyUDbyAe1CNraMi%2F2cN3uvVj7KYSa7V1lwZHPP0EunBZqoyGA8MDmIsEBbOWSlpnAZP2gxvUiVxp6Kqggt9uMLHO374GOqUBL2yaws8KR1wCGXP52G10wNLZsZLYjXSInFe92v8I%2F4aZqAbgzxCzTA66AZ32B4Q2yiK0cDdiwiNdegXpBqKSAkyld8MCBl3gwVo4LHRS3WCB0EpOgGCvokCKQ2GL4roclxWA%2FbklrK5gjJm9SnG5jTZXhbExGRaPnBR5eKAIuqwjZNQSrXD5F2lPplz9MouT7G9FsipPXcCNiU54wNQLaiXdnJeO&X-Amz-Signature=1b2e7fc372c380fe748a5b725602a832bb28e55de349fbd6df13fa78bf1b525f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUEJHQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp8Q3KsrTnZK3vYRBkupIHxVZg6UbPzds1d0gs8U1d9AiEAoqfrSznVIHY5k2g%2FIKlqT4MfsTUr2IuL90h8%2F6trYqoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOWWn%2F%2F%2F9C4pOE7bqircAztx3e7BDBJfsdxL9H5BTmZ%2BKXTI%2Fz6VBkoHXvYVQZs%2B69KuUJVS5GuedTtVB70PLuGP1jrMjkt7AIEo5osKQMRSN7USP3HpZxAhV9CYhjqhWZep6yVA8cLWPlFxR8yXljSvRgSuJX5DXKn9i7wzelaomPSnSNcYVVXGEC8DrNoDHgoBkRJxxDF99h%2FWauzmKKU88JzsU4G%2Bnq7h9SfRivq%2Bj7%2FD6L%2BYltkDC1BZkaVZ7eTEtSAFIdvDhUI9ON%2Bk1NfETGW%2Bwi9xHcXBrO8U1%2F2MEwT66DsToRFbHsvrAUPTMjB85eUm1OiaJJvrCZiSI6WoLlOJlLHkhFBB0oaPGPpukq9zL8mO9XGmYHOgo7G3uQx5wX4KFvQM15PDBnsuY0DNoUqjnVP6EzvB2fBAoSfWWQBK8vC%2Bx0Nfm2hYwrFM2KSQwC70aH9701xivWXRTEaD5f83Wzs%2FqYckgv4jueUtFeQtWW%2FdPeMEYn%2FbAVZbpB73%2FW7vx7gM4ulttPKk7PvQEjzObPSNFfwGakDJwtziH5cEJVs4yIGTF9fTsyUDbyAe1CNraMi%2F2cN3uvVj7KYSa7V1lwZHPP0EunBZqoyGA8MDmIsEBbOWSlpnAZP2gxvUiVxp6Kqggt9uMLHO374GOqUBL2yaws8KR1wCGXP52G10wNLZsZLYjXSInFe92v8I%2F4aZqAbgzxCzTA66AZ32B4Q2yiK0cDdiwiNdegXpBqKSAkyld8MCBl3gwVo4LHRS3WCB0EpOgGCvokCKQ2GL4roclxWA%2FbklrK5gjJm9SnG5jTZXhbExGRaPnBR5eKAIuqwjZNQSrXD5F2lPplz9MouT7G9FsipPXcCNiU54wNQLaiXdnJeO&X-Amz-Signature=110157b436096c02421486592ff607c97e0fec4ab88a195cc117768eebc88f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUEJHQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp8Q3KsrTnZK3vYRBkupIHxVZg6UbPzds1d0gs8U1d9AiEAoqfrSznVIHY5k2g%2FIKlqT4MfsTUr2IuL90h8%2F6trYqoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOWWn%2F%2F%2F9C4pOE7bqircAztx3e7BDBJfsdxL9H5BTmZ%2BKXTI%2Fz6VBkoHXvYVQZs%2B69KuUJVS5GuedTtVB70PLuGP1jrMjkt7AIEo5osKQMRSN7USP3HpZxAhV9CYhjqhWZep6yVA8cLWPlFxR8yXljSvRgSuJX5DXKn9i7wzelaomPSnSNcYVVXGEC8DrNoDHgoBkRJxxDF99h%2FWauzmKKU88JzsU4G%2Bnq7h9SfRivq%2Bj7%2FD6L%2BYltkDC1BZkaVZ7eTEtSAFIdvDhUI9ON%2Bk1NfETGW%2Bwi9xHcXBrO8U1%2F2MEwT66DsToRFbHsvrAUPTMjB85eUm1OiaJJvrCZiSI6WoLlOJlLHkhFBB0oaPGPpukq9zL8mO9XGmYHOgo7G3uQx5wX4KFvQM15PDBnsuY0DNoUqjnVP6EzvB2fBAoSfWWQBK8vC%2Bx0Nfm2hYwrFM2KSQwC70aH9701xivWXRTEaD5f83Wzs%2FqYckgv4jueUtFeQtWW%2FdPeMEYn%2FbAVZbpB73%2FW7vx7gM4ulttPKk7PvQEjzObPSNFfwGakDJwtziH5cEJVs4yIGTF9fTsyUDbyAe1CNraMi%2F2cN3uvVj7KYSa7V1lwZHPP0EunBZqoyGA8MDmIsEBbOWSlpnAZP2gxvUiVxp6Kqggt9uMLHO374GOqUBL2yaws8KR1wCGXP52G10wNLZsZLYjXSInFe92v8I%2F4aZqAbgzxCzTA66AZ32B4Q2yiK0cDdiwiNdegXpBqKSAkyld8MCBl3gwVo4LHRS3WCB0EpOgGCvokCKQ2GL4roclxWA%2FbklrK5gjJm9SnG5jTZXhbExGRaPnBR5eKAIuqwjZNQSrXD5F2lPplz9MouT7G9FsipPXcCNiU54wNQLaiXdnJeO&X-Amz-Signature=a00f229891a3fb6f0237cfb90e742ecf88dcd1dc3559b3c6000c97661ee85acb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
