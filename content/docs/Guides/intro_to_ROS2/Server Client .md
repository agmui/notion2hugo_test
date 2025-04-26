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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZL56X6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcWdIah0M1C7Kascw%2BK3xZzsz7fr5%2F6y79T5MgOOL6ggIhAJ%2BUV560r783dcooJNY078lc925FMeMEkaiUZCTZPgE0Kv8DCD8QABoMNjM3NDIzMTgzODA1Igw5SGFU4hCgqaWMfyAq3AMKa1EcClclNHg31of8RAGQBjL4xMDmlAX%2Bn5XSfQNT2AkyZBPz9tV5nT7R53msxWsIb4bNVUbHw5%2FQSDgyeT9n2hszssBM2cJ33q51wdyhZHRyeJ2roW5pxwmo6mcu1C6X3ByZ9a7o81NZHXUFAaZ6zF3Qz1%2BbquUwme0YCt7VEOsP9GDYtPmutiB4ek9Cmb81eoGKkv28O2bwXJgW9zsERVKE0n1IY6nxxi6j0wrTfhqf3VBoLnGDUr0cHLXHRJEvtlLMPu%2FqNo841WLqDiMLm0JlXiegvce5hx6LplZH5AkdSKAFttKm49EMUnCPmvL5E3NLifzzd4g244xrjluE6E4iYEhd55Xg%2FPAf%2FT0qU5Wre2Up04Ur5rkiNK0vQhvomeyjzud2slmT6h4QE%2BtD37C6hoJW2ZJgV4%2BDzfZu6LVu%2BM9nkauYcPTbvqVVuWcsf39wG8mDCnXT%2Fteanx1RTMIm9pWLX2O8xxN%2Bgjz2TOOtcsApuNOyKb3GUXnG5ue1OE6toUCZN14%2BDUUsfSW9nzeOOXy9pRCDp4TXY655rXZKvXMB4cVQrJqH8qMrt3nnD7ByDB7ZTlkM8%2Fxi9RU%2BN8zt2ZtLpCQDWSXwhrzD0XPfFCK5d48RwlPV2zCI5LHABjqkAZr7Lzv3pEFGPVOQ2RGOETfl92tTDeV6dlmMzdNuMV02TTaGHRE%2FrDEenxqLXKG4In%2FfPVt9AkSMmOxUgqpLLdzCsbv6gTvU3yIZ0JqoYa43nFox1WzwI12xESoRLjxNk%2F5Xno%2BYNsgsuxQqphbF%2B3dmwDb7ma6oUnU%2Fzb0KgMi2Dx9HhMuQoMS5%2BalIbmr93UGcA2e1GlD8DcTMiov%2Bf6T76RJs&X-Amz-Signature=afa0543ac22f67be1c7d022e7644b0e0a0074434ded5d34f559a7c2d3a2355b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZL56X6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcWdIah0M1C7Kascw%2BK3xZzsz7fr5%2F6y79T5MgOOL6ggIhAJ%2BUV560r783dcooJNY078lc925FMeMEkaiUZCTZPgE0Kv8DCD8QABoMNjM3NDIzMTgzODA1Igw5SGFU4hCgqaWMfyAq3AMKa1EcClclNHg31of8RAGQBjL4xMDmlAX%2Bn5XSfQNT2AkyZBPz9tV5nT7R53msxWsIb4bNVUbHw5%2FQSDgyeT9n2hszssBM2cJ33q51wdyhZHRyeJ2roW5pxwmo6mcu1C6X3ByZ9a7o81NZHXUFAaZ6zF3Qz1%2BbquUwme0YCt7VEOsP9GDYtPmutiB4ek9Cmb81eoGKkv28O2bwXJgW9zsERVKE0n1IY6nxxi6j0wrTfhqf3VBoLnGDUr0cHLXHRJEvtlLMPu%2FqNo841WLqDiMLm0JlXiegvce5hx6LplZH5AkdSKAFttKm49EMUnCPmvL5E3NLifzzd4g244xrjluE6E4iYEhd55Xg%2FPAf%2FT0qU5Wre2Up04Ur5rkiNK0vQhvomeyjzud2slmT6h4QE%2BtD37C6hoJW2ZJgV4%2BDzfZu6LVu%2BM9nkauYcPTbvqVVuWcsf39wG8mDCnXT%2Fteanx1RTMIm9pWLX2O8xxN%2Bgjz2TOOtcsApuNOyKb3GUXnG5ue1OE6toUCZN14%2BDUUsfSW9nzeOOXy9pRCDp4TXY655rXZKvXMB4cVQrJqH8qMrt3nnD7ByDB7ZTlkM8%2Fxi9RU%2BN8zt2ZtLpCQDWSXwhrzD0XPfFCK5d48RwlPV2zCI5LHABjqkAZr7Lzv3pEFGPVOQ2RGOETfl92tTDeV6dlmMzdNuMV02TTaGHRE%2FrDEenxqLXKG4In%2FfPVt9AkSMmOxUgqpLLdzCsbv6gTvU3yIZ0JqoYa43nFox1WzwI12xESoRLjxNk%2F5Xno%2BYNsgsuxQqphbF%2B3dmwDb7ma6oUnU%2Fzb0KgMi2Dx9HhMuQoMS5%2BalIbmr93UGcA2e1GlD8DcTMiov%2Bf6T76RJs&X-Amz-Signature=c3de1c028330073dc64c70b2120112d8ab04cb376fc8324ce6ca0e88d1ced433&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZL56X6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcWdIah0M1C7Kascw%2BK3xZzsz7fr5%2F6y79T5MgOOL6ggIhAJ%2BUV560r783dcooJNY078lc925FMeMEkaiUZCTZPgE0Kv8DCD8QABoMNjM3NDIzMTgzODA1Igw5SGFU4hCgqaWMfyAq3AMKa1EcClclNHg31of8RAGQBjL4xMDmlAX%2Bn5XSfQNT2AkyZBPz9tV5nT7R53msxWsIb4bNVUbHw5%2FQSDgyeT9n2hszssBM2cJ33q51wdyhZHRyeJ2roW5pxwmo6mcu1C6X3ByZ9a7o81NZHXUFAaZ6zF3Qz1%2BbquUwme0YCt7VEOsP9GDYtPmutiB4ek9Cmb81eoGKkv28O2bwXJgW9zsERVKE0n1IY6nxxi6j0wrTfhqf3VBoLnGDUr0cHLXHRJEvtlLMPu%2FqNo841WLqDiMLm0JlXiegvce5hx6LplZH5AkdSKAFttKm49EMUnCPmvL5E3NLifzzd4g244xrjluE6E4iYEhd55Xg%2FPAf%2FT0qU5Wre2Up04Ur5rkiNK0vQhvomeyjzud2slmT6h4QE%2BtD37C6hoJW2ZJgV4%2BDzfZu6LVu%2BM9nkauYcPTbvqVVuWcsf39wG8mDCnXT%2Fteanx1RTMIm9pWLX2O8xxN%2Bgjz2TOOtcsApuNOyKb3GUXnG5ue1OE6toUCZN14%2BDUUsfSW9nzeOOXy9pRCDp4TXY655rXZKvXMB4cVQrJqH8qMrt3nnD7ByDB7ZTlkM8%2Fxi9RU%2BN8zt2ZtLpCQDWSXwhrzD0XPfFCK5d48RwlPV2zCI5LHABjqkAZr7Lzv3pEFGPVOQ2RGOETfl92tTDeV6dlmMzdNuMV02TTaGHRE%2FrDEenxqLXKG4In%2FfPVt9AkSMmOxUgqpLLdzCsbv6gTvU3yIZ0JqoYa43nFox1WzwI12xESoRLjxNk%2F5Xno%2BYNsgsuxQqphbF%2B3dmwDb7ma6oUnU%2Fzb0KgMi2Dx9HhMuQoMS5%2BalIbmr93UGcA2e1GlD8DcTMiov%2Bf6T76RJs&X-Amz-Signature=0ff13e5267736e56a9a0443016c0c12cbda3c4d927bca59748c004b3691933ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZL56X6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcWdIah0M1C7Kascw%2BK3xZzsz7fr5%2F6y79T5MgOOL6ggIhAJ%2BUV560r783dcooJNY078lc925FMeMEkaiUZCTZPgE0Kv8DCD8QABoMNjM3NDIzMTgzODA1Igw5SGFU4hCgqaWMfyAq3AMKa1EcClclNHg31of8RAGQBjL4xMDmlAX%2Bn5XSfQNT2AkyZBPz9tV5nT7R53msxWsIb4bNVUbHw5%2FQSDgyeT9n2hszssBM2cJ33q51wdyhZHRyeJ2roW5pxwmo6mcu1C6X3ByZ9a7o81NZHXUFAaZ6zF3Qz1%2BbquUwme0YCt7VEOsP9GDYtPmutiB4ek9Cmb81eoGKkv28O2bwXJgW9zsERVKE0n1IY6nxxi6j0wrTfhqf3VBoLnGDUr0cHLXHRJEvtlLMPu%2FqNo841WLqDiMLm0JlXiegvce5hx6LplZH5AkdSKAFttKm49EMUnCPmvL5E3NLifzzd4g244xrjluE6E4iYEhd55Xg%2FPAf%2FT0qU5Wre2Up04Ur5rkiNK0vQhvomeyjzud2slmT6h4QE%2BtD37C6hoJW2ZJgV4%2BDzfZu6LVu%2BM9nkauYcPTbvqVVuWcsf39wG8mDCnXT%2Fteanx1RTMIm9pWLX2O8xxN%2Bgjz2TOOtcsApuNOyKb3GUXnG5ue1OE6toUCZN14%2BDUUsfSW9nzeOOXy9pRCDp4TXY655rXZKvXMB4cVQrJqH8qMrt3nnD7ByDB7ZTlkM8%2Fxi9RU%2BN8zt2ZtLpCQDWSXwhrzD0XPfFCK5d48RwlPV2zCI5LHABjqkAZr7Lzv3pEFGPVOQ2RGOETfl92tTDeV6dlmMzdNuMV02TTaGHRE%2FrDEenxqLXKG4In%2FfPVt9AkSMmOxUgqpLLdzCsbv6gTvU3yIZ0JqoYa43nFox1WzwI12xESoRLjxNk%2F5Xno%2BYNsgsuxQqphbF%2B3dmwDb7ma6oUnU%2Fzb0KgMi2Dx9HhMuQoMS5%2BalIbmr93UGcA2e1GlD8DcTMiov%2Bf6T76RJs&X-Amz-Signature=0d8206dbaa40447140e686d8f03d7f0e275674d9c77670fe661718e53be5a040&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZL56X6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcWdIah0M1C7Kascw%2BK3xZzsz7fr5%2F6y79T5MgOOL6ggIhAJ%2BUV560r783dcooJNY078lc925FMeMEkaiUZCTZPgE0Kv8DCD8QABoMNjM3NDIzMTgzODA1Igw5SGFU4hCgqaWMfyAq3AMKa1EcClclNHg31of8RAGQBjL4xMDmlAX%2Bn5XSfQNT2AkyZBPz9tV5nT7R53msxWsIb4bNVUbHw5%2FQSDgyeT9n2hszssBM2cJ33q51wdyhZHRyeJ2roW5pxwmo6mcu1C6X3ByZ9a7o81NZHXUFAaZ6zF3Qz1%2BbquUwme0YCt7VEOsP9GDYtPmutiB4ek9Cmb81eoGKkv28O2bwXJgW9zsERVKE0n1IY6nxxi6j0wrTfhqf3VBoLnGDUr0cHLXHRJEvtlLMPu%2FqNo841WLqDiMLm0JlXiegvce5hx6LplZH5AkdSKAFttKm49EMUnCPmvL5E3NLifzzd4g244xrjluE6E4iYEhd55Xg%2FPAf%2FT0qU5Wre2Up04Ur5rkiNK0vQhvomeyjzud2slmT6h4QE%2BtD37C6hoJW2ZJgV4%2BDzfZu6LVu%2BM9nkauYcPTbvqVVuWcsf39wG8mDCnXT%2Fteanx1RTMIm9pWLX2O8xxN%2Bgjz2TOOtcsApuNOyKb3GUXnG5ue1OE6toUCZN14%2BDUUsfSW9nzeOOXy9pRCDp4TXY655rXZKvXMB4cVQrJqH8qMrt3nnD7ByDB7ZTlkM8%2Fxi9RU%2BN8zt2ZtLpCQDWSXwhrzD0XPfFCK5d48RwlPV2zCI5LHABjqkAZr7Lzv3pEFGPVOQ2RGOETfl92tTDeV6dlmMzdNuMV02TTaGHRE%2FrDEenxqLXKG4In%2FfPVt9AkSMmOxUgqpLLdzCsbv6gTvU3yIZ0JqoYa43nFox1WzwI12xESoRLjxNk%2F5Xno%2BYNsgsuxQqphbF%2B3dmwDb7ma6oUnU%2Fzb0KgMi2Dx9HhMuQoMS5%2BalIbmr93UGcA2e1GlD8DcTMiov%2Bf6T76RJs&X-Amz-Signature=3b960b4f0611c78c5f5bdb4aae09138394805a91773358a64d1ab725fe5d784b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
