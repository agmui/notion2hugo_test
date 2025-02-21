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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO7YRNXT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDun1Ce7vZvLPbRO98hQ305vAHi8KjndPWKRyl7aHianAiB5uvAf%2Ft%2BeYPIeUoRras9cyXlril4uMGG9%2BBU8nPehtyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRbjGcsvQxBKmsThKtwD5RIUNOmHRbZcqBkW2Ob%2F8CBSKavqFE6ZnmJfVgs0lQI7CU4o7IoXeeMdmOYOgAlqpAmLwT0X%2Bl3mxxLaqy%2Fg1Xfn7CIeIapXWOEOND2srj66HvL71mveShSdPndMFTxTiuen1Ux7tERcmfyD4VacUpiht90nI%2BzMh5Hwh40944F3aeYzqxZZeD95u%2Fk%2F7xGljwEKP%2Frkwm6e3kiWqUKilfdKZ4pNCidfBYrO4QRsTMNjP6M1ew81d%2BaxOi62nJoPFr30bcz4SAJpl3VaZOV3ThCKGLNkyihoHUQB5SN0pBTPb3oNfNXoo07%2BI3psJsbP1vspCJJGU78xw5OcRl8ZlyPTQULQXbRbAvE9TD0oisPPzyuhhuterGZ3YmrYY5RxgamCrJO%2Bv%2FNmoxCxVStOW5CRCNr42DNPCF7gavTtxhV2aW%2BlTWs7tKvPRyuhGdBP8n3IBrSslUofg%2BJIFchezCHdO3T4fsffj%2BtSmhoBWs%2FoibRA61jTt5kTVod%2FKyE3UBRKdHQYhCXBcbjAqRN%2B29bvbRJcq29WOnSGs%2FXmLuEs7mdY3ZkT4TY85Bqp17exhjqI%2Ba74N6SRZtoSSvst0f78TrDo8FtVrqQqdD%2BSss9Qkt2p%2Fy8GZt0d0Ygw57vjvQY6pgG%2FvV%2B6Eviymuk%2Fb2hvU3qHzqSvqMT9U5OS%2FmoyLhF0wvhNMSAYtGCfklrop%2BFKQ%2FfdOQFfxry3G8feTwCRp49WHH92yC6yQlwH%2B6wBDpff3XGUm29OFGtJjyptpWqux%2BFeNUC3NXS%2FrAAJG4pGrgp3peZWqMCC9pZscmDoE%2FLYKCPEP%2FIdnHsErV2xwya%2BE1NRfUtBXxCtdnQG8INN%2BYztPCmEtuZh&X-Amz-Signature=5c5ee57aed0936e6c52dc39f9ef98a536f227ffb7ca4f4fcf70f8a05b90abc9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO7YRNXT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDun1Ce7vZvLPbRO98hQ305vAHi8KjndPWKRyl7aHianAiB5uvAf%2Ft%2BeYPIeUoRras9cyXlril4uMGG9%2BBU8nPehtyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRbjGcsvQxBKmsThKtwD5RIUNOmHRbZcqBkW2Ob%2F8CBSKavqFE6ZnmJfVgs0lQI7CU4o7IoXeeMdmOYOgAlqpAmLwT0X%2Bl3mxxLaqy%2Fg1Xfn7CIeIapXWOEOND2srj66HvL71mveShSdPndMFTxTiuen1Ux7tERcmfyD4VacUpiht90nI%2BzMh5Hwh40944F3aeYzqxZZeD95u%2Fk%2F7xGljwEKP%2Frkwm6e3kiWqUKilfdKZ4pNCidfBYrO4QRsTMNjP6M1ew81d%2BaxOi62nJoPFr30bcz4SAJpl3VaZOV3ThCKGLNkyihoHUQB5SN0pBTPb3oNfNXoo07%2BI3psJsbP1vspCJJGU78xw5OcRl8ZlyPTQULQXbRbAvE9TD0oisPPzyuhhuterGZ3YmrYY5RxgamCrJO%2Bv%2FNmoxCxVStOW5CRCNr42DNPCF7gavTtxhV2aW%2BlTWs7tKvPRyuhGdBP8n3IBrSslUofg%2BJIFchezCHdO3T4fsffj%2BtSmhoBWs%2FoibRA61jTt5kTVod%2FKyE3UBRKdHQYhCXBcbjAqRN%2B29bvbRJcq29WOnSGs%2FXmLuEs7mdY3ZkT4TY85Bqp17exhjqI%2Ba74N6SRZtoSSvst0f78TrDo8FtVrqQqdD%2BSss9Qkt2p%2Fy8GZt0d0Ygw57vjvQY6pgG%2FvV%2B6Eviymuk%2Fb2hvU3qHzqSvqMT9U5OS%2FmoyLhF0wvhNMSAYtGCfklrop%2BFKQ%2FfdOQFfxry3G8feTwCRp49WHH92yC6yQlwH%2B6wBDpff3XGUm29OFGtJjyptpWqux%2BFeNUC3NXS%2FrAAJG4pGrgp3peZWqMCC9pZscmDoE%2FLYKCPEP%2FIdnHsErV2xwya%2BE1NRfUtBXxCtdnQG8INN%2BYztPCmEtuZh&X-Amz-Signature=4cb2edb88597b4273fe0a4d6c9bff2245512f2d306decdb1d212c8226a72bf89&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO7YRNXT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDun1Ce7vZvLPbRO98hQ305vAHi8KjndPWKRyl7aHianAiB5uvAf%2Ft%2BeYPIeUoRras9cyXlril4uMGG9%2BBU8nPehtyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRbjGcsvQxBKmsThKtwD5RIUNOmHRbZcqBkW2Ob%2F8CBSKavqFE6ZnmJfVgs0lQI7CU4o7IoXeeMdmOYOgAlqpAmLwT0X%2Bl3mxxLaqy%2Fg1Xfn7CIeIapXWOEOND2srj66HvL71mveShSdPndMFTxTiuen1Ux7tERcmfyD4VacUpiht90nI%2BzMh5Hwh40944F3aeYzqxZZeD95u%2Fk%2F7xGljwEKP%2Frkwm6e3kiWqUKilfdKZ4pNCidfBYrO4QRsTMNjP6M1ew81d%2BaxOi62nJoPFr30bcz4SAJpl3VaZOV3ThCKGLNkyihoHUQB5SN0pBTPb3oNfNXoo07%2BI3psJsbP1vspCJJGU78xw5OcRl8ZlyPTQULQXbRbAvE9TD0oisPPzyuhhuterGZ3YmrYY5RxgamCrJO%2Bv%2FNmoxCxVStOW5CRCNr42DNPCF7gavTtxhV2aW%2BlTWs7tKvPRyuhGdBP8n3IBrSslUofg%2BJIFchezCHdO3T4fsffj%2BtSmhoBWs%2FoibRA61jTt5kTVod%2FKyE3UBRKdHQYhCXBcbjAqRN%2B29bvbRJcq29WOnSGs%2FXmLuEs7mdY3ZkT4TY85Bqp17exhjqI%2Ba74N6SRZtoSSvst0f78TrDo8FtVrqQqdD%2BSss9Qkt2p%2Fy8GZt0d0Ygw57vjvQY6pgG%2FvV%2B6Eviymuk%2Fb2hvU3qHzqSvqMT9U5OS%2FmoyLhF0wvhNMSAYtGCfklrop%2BFKQ%2FfdOQFfxry3G8feTwCRp49WHH92yC6yQlwH%2B6wBDpff3XGUm29OFGtJjyptpWqux%2BFeNUC3NXS%2FrAAJG4pGrgp3peZWqMCC9pZscmDoE%2FLYKCPEP%2FIdnHsErV2xwya%2BE1NRfUtBXxCtdnQG8INN%2BYztPCmEtuZh&X-Amz-Signature=a003bdf57f146305b2f993d71a961a50f5b1f90108d8dec5433b87b2d305cf53&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO7YRNXT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDun1Ce7vZvLPbRO98hQ305vAHi8KjndPWKRyl7aHianAiB5uvAf%2Ft%2BeYPIeUoRras9cyXlril4uMGG9%2BBU8nPehtyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRbjGcsvQxBKmsThKtwD5RIUNOmHRbZcqBkW2Ob%2F8CBSKavqFE6ZnmJfVgs0lQI7CU4o7IoXeeMdmOYOgAlqpAmLwT0X%2Bl3mxxLaqy%2Fg1Xfn7CIeIapXWOEOND2srj66HvL71mveShSdPndMFTxTiuen1Ux7tERcmfyD4VacUpiht90nI%2BzMh5Hwh40944F3aeYzqxZZeD95u%2Fk%2F7xGljwEKP%2Frkwm6e3kiWqUKilfdKZ4pNCidfBYrO4QRsTMNjP6M1ew81d%2BaxOi62nJoPFr30bcz4SAJpl3VaZOV3ThCKGLNkyihoHUQB5SN0pBTPb3oNfNXoo07%2BI3psJsbP1vspCJJGU78xw5OcRl8ZlyPTQULQXbRbAvE9TD0oisPPzyuhhuterGZ3YmrYY5RxgamCrJO%2Bv%2FNmoxCxVStOW5CRCNr42DNPCF7gavTtxhV2aW%2BlTWs7tKvPRyuhGdBP8n3IBrSslUofg%2BJIFchezCHdO3T4fsffj%2BtSmhoBWs%2FoibRA61jTt5kTVod%2FKyE3UBRKdHQYhCXBcbjAqRN%2B29bvbRJcq29WOnSGs%2FXmLuEs7mdY3ZkT4TY85Bqp17exhjqI%2Ba74N6SRZtoSSvst0f78TrDo8FtVrqQqdD%2BSss9Qkt2p%2Fy8GZt0d0Ygw57vjvQY6pgG%2FvV%2B6Eviymuk%2Fb2hvU3qHzqSvqMT9U5OS%2FmoyLhF0wvhNMSAYtGCfklrop%2BFKQ%2FfdOQFfxry3G8feTwCRp49WHH92yC6yQlwH%2B6wBDpff3XGUm29OFGtJjyptpWqux%2BFeNUC3NXS%2FrAAJG4pGrgp3peZWqMCC9pZscmDoE%2FLYKCPEP%2FIdnHsErV2xwya%2BE1NRfUtBXxCtdnQG8INN%2BYztPCmEtuZh&X-Amz-Signature=3bd235c6e289f123c118d929f33f671ffe748bb0a257c216ca486d0e3d337737&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO7YRNXT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDun1Ce7vZvLPbRO98hQ305vAHi8KjndPWKRyl7aHianAiB5uvAf%2Ft%2BeYPIeUoRras9cyXlril4uMGG9%2BBU8nPehtyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRbjGcsvQxBKmsThKtwD5RIUNOmHRbZcqBkW2Ob%2F8CBSKavqFE6ZnmJfVgs0lQI7CU4o7IoXeeMdmOYOgAlqpAmLwT0X%2Bl3mxxLaqy%2Fg1Xfn7CIeIapXWOEOND2srj66HvL71mveShSdPndMFTxTiuen1Ux7tERcmfyD4VacUpiht90nI%2BzMh5Hwh40944F3aeYzqxZZeD95u%2Fk%2F7xGljwEKP%2Frkwm6e3kiWqUKilfdKZ4pNCidfBYrO4QRsTMNjP6M1ew81d%2BaxOi62nJoPFr30bcz4SAJpl3VaZOV3ThCKGLNkyihoHUQB5SN0pBTPb3oNfNXoo07%2BI3psJsbP1vspCJJGU78xw5OcRl8ZlyPTQULQXbRbAvE9TD0oisPPzyuhhuterGZ3YmrYY5RxgamCrJO%2Bv%2FNmoxCxVStOW5CRCNr42DNPCF7gavTtxhV2aW%2BlTWs7tKvPRyuhGdBP8n3IBrSslUofg%2BJIFchezCHdO3T4fsffj%2BtSmhoBWs%2FoibRA61jTt5kTVod%2FKyE3UBRKdHQYhCXBcbjAqRN%2B29bvbRJcq29WOnSGs%2FXmLuEs7mdY3ZkT4TY85Bqp17exhjqI%2Ba74N6SRZtoSSvst0f78TrDo8FtVrqQqdD%2BSss9Qkt2p%2Fy8GZt0d0Ygw57vjvQY6pgG%2FvV%2B6Eviymuk%2Fb2hvU3qHzqSvqMT9U5OS%2FmoyLhF0wvhNMSAYtGCfklrop%2BFKQ%2FfdOQFfxry3G8feTwCRp49WHH92yC6yQlwH%2B6wBDpff3XGUm29OFGtJjyptpWqux%2BFeNUC3NXS%2FrAAJG4pGrgp3peZWqMCC9pZscmDoE%2FLYKCPEP%2FIdnHsErV2xwya%2BE1NRfUtBXxCtdnQG8INN%2BYztPCmEtuZh&X-Amz-Signature=6c666bba1db3ace2d4e719377201c5fc55a185fbe6906df699e7b99076cde04a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
