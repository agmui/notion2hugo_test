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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645B2O2XG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0NkPsVs4Kc46v8Ipbj9jOWhmATzP7BAKRuEluinVXAAiAEJNmvuKLI0qkvwAoN7nUABLPcGjqfLiFi5kfYPjwOViqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSasdJhVyKE2kGWOnKtwDwiLVvBmM1A306rqIqWPlf%2FcSoWzufd7kGTslngufbxzZCs0ZG4G7Pgt7UaOYbMdA1tSYYe36OMnxdvmA0ncBI0lJE4l6XQM17bTl2eppYWJCnQnIjPUxTefqbr%2Fp2LM4zVJtOFvRdlZEM5m3jAZxtehc7CgeOiMmfakjPC3c%2Bh8slvmJXOftlCv0%2B04vboVIhg%2FRfS0TFCyokbLSfC7rfRHx7zmXyTP6tpP%2Fl4j6c6mC4F%2FiugHf%2F6Molmq%2Bz6LXgTnnvLQ0t88MN6E8lt01P0Lc5qogoVEIqFnF817Y%2FQN%2BSiNHFb6cCgVR2246mjNoaMJdv0Z8AJCtDq3%2BdHMPX%2BNHMVPkboenzYnV6CK52%2FOh%2B2cjxyEKTISZ0aUCaOWWRhLqvFuN2ndFCLZnAHa1lJs2ngBEYAnHSXKM5ywrvWaSr1LQCvqJrd8yeLic3CDHmP8WdpShU3pra30syVw557nHo7x0v0iJBNzCsX6k3DEkFgpCvNlAR6EimuG3kydLwW7PK2zesNZEpBy0LLcVnbCByzzQRpsC0Csqi6vKalyj0xpXNXNkvBJFNjzQQkUpF1%2FGg%2FKaPU4V4Z8oryFF0C6uBUV%2FsTOkOTEqFwhjatIMFE7qp1iFklG9pUkw0JakwgY6pgENvqvQKG84%2FHqInFRf%2BXtmyDxnkSy8LSkVdR%2B0%2Fc8TQahlt%2FSueaduz4y7VL5FwUyyTWeOmh8XFgg2Q3CuVF40pED%2FdA%2BNABGm4mRKxifOHuR%2FbKW3dtrCs3hqiXXQIFoxpHA90S%2Fua5hJomL12aYGMTfIudYOETYO0ycOOG%2FdNlZNzg%2BH2DMjK8RiHlrs2A0sJpu2gxjsL3AahDLkDtSK3wSgtWOC&X-Amz-Signature=59d09b38bb5d7479b0338ec69678c431497e81acd3d057e08aa17fb6630c3e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645B2O2XG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0NkPsVs4Kc46v8Ipbj9jOWhmATzP7BAKRuEluinVXAAiAEJNmvuKLI0qkvwAoN7nUABLPcGjqfLiFi5kfYPjwOViqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSasdJhVyKE2kGWOnKtwDwiLVvBmM1A306rqIqWPlf%2FcSoWzufd7kGTslngufbxzZCs0ZG4G7Pgt7UaOYbMdA1tSYYe36OMnxdvmA0ncBI0lJE4l6XQM17bTl2eppYWJCnQnIjPUxTefqbr%2Fp2LM4zVJtOFvRdlZEM5m3jAZxtehc7CgeOiMmfakjPC3c%2Bh8slvmJXOftlCv0%2B04vboVIhg%2FRfS0TFCyokbLSfC7rfRHx7zmXyTP6tpP%2Fl4j6c6mC4F%2FiugHf%2F6Molmq%2Bz6LXgTnnvLQ0t88MN6E8lt01P0Lc5qogoVEIqFnF817Y%2FQN%2BSiNHFb6cCgVR2246mjNoaMJdv0Z8AJCtDq3%2BdHMPX%2BNHMVPkboenzYnV6CK52%2FOh%2B2cjxyEKTISZ0aUCaOWWRhLqvFuN2ndFCLZnAHa1lJs2ngBEYAnHSXKM5ywrvWaSr1LQCvqJrd8yeLic3CDHmP8WdpShU3pra30syVw557nHo7x0v0iJBNzCsX6k3DEkFgpCvNlAR6EimuG3kydLwW7PK2zesNZEpBy0LLcVnbCByzzQRpsC0Csqi6vKalyj0xpXNXNkvBJFNjzQQkUpF1%2FGg%2FKaPU4V4Z8oryFF0C6uBUV%2FsTOkOTEqFwhjatIMFE7qp1iFklG9pUkw0JakwgY6pgENvqvQKG84%2FHqInFRf%2BXtmyDxnkSy8LSkVdR%2B0%2Fc8TQahlt%2FSueaduz4y7VL5FwUyyTWeOmh8XFgg2Q3CuVF40pED%2FdA%2BNABGm4mRKxifOHuR%2FbKW3dtrCs3hqiXXQIFoxpHA90S%2Fua5hJomL12aYGMTfIudYOETYO0ycOOG%2FdNlZNzg%2BH2DMjK8RiHlrs2A0sJpu2gxjsL3AahDLkDtSK3wSgtWOC&X-Amz-Signature=6947c105ebac5306117393daea913d1178dde8743ba1ba040ddf39f83a5b6cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645B2O2XG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0NkPsVs4Kc46v8Ipbj9jOWhmATzP7BAKRuEluinVXAAiAEJNmvuKLI0qkvwAoN7nUABLPcGjqfLiFi5kfYPjwOViqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSasdJhVyKE2kGWOnKtwDwiLVvBmM1A306rqIqWPlf%2FcSoWzufd7kGTslngufbxzZCs0ZG4G7Pgt7UaOYbMdA1tSYYe36OMnxdvmA0ncBI0lJE4l6XQM17bTl2eppYWJCnQnIjPUxTefqbr%2Fp2LM4zVJtOFvRdlZEM5m3jAZxtehc7CgeOiMmfakjPC3c%2Bh8slvmJXOftlCv0%2B04vboVIhg%2FRfS0TFCyokbLSfC7rfRHx7zmXyTP6tpP%2Fl4j6c6mC4F%2FiugHf%2F6Molmq%2Bz6LXgTnnvLQ0t88MN6E8lt01P0Lc5qogoVEIqFnF817Y%2FQN%2BSiNHFb6cCgVR2246mjNoaMJdv0Z8AJCtDq3%2BdHMPX%2BNHMVPkboenzYnV6CK52%2FOh%2B2cjxyEKTISZ0aUCaOWWRhLqvFuN2ndFCLZnAHa1lJs2ngBEYAnHSXKM5ywrvWaSr1LQCvqJrd8yeLic3CDHmP8WdpShU3pra30syVw557nHo7x0v0iJBNzCsX6k3DEkFgpCvNlAR6EimuG3kydLwW7PK2zesNZEpBy0LLcVnbCByzzQRpsC0Csqi6vKalyj0xpXNXNkvBJFNjzQQkUpF1%2FGg%2FKaPU4V4Z8oryFF0C6uBUV%2FsTOkOTEqFwhjatIMFE7qp1iFklG9pUkw0JakwgY6pgENvqvQKG84%2FHqInFRf%2BXtmyDxnkSy8LSkVdR%2B0%2Fc8TQahlt%2FSueaduz4y7VL5FwUyyTWeOmh8XFgg2Q3CuVF40pED%2FdA%2BNABGm4mRKxifOHuR%2FbKW3dtrCs3hqiXXQIFoxpHA90S%2Fua5hJomL12aYGMTfIudYOETYO0ycOOG%2FdNlZNzg%2BH2DMjK8RiHlrs2A0sJpu2gxjsL3AahDLkDtSK3wSgtWOC&X-Amz-Signature=57a780dca2496565ee604a495fc92d9696d7df0bf5da255e4e389a5231f4149b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645B2O2XG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0NkPsVs4Kc46v8Ipbj9jOWhmATzP7BAKRuEluinVXAAiAEJNmvuKLI0qkvwAoN7nUABLPcGjqfLiFi5kfYPjwOViqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSasdJhVyKE2kGWOnKtwDwiLVvBmM1A306rqIqWPlf%2FcSoWzufd7kGTslngufbxzZCs0ZG4G7Pgt7UaOYbMdA1tSYYe36OMnxdvmA0ncBI0lJE4l6XQM17bTl2eppYWJCnQnIjPUxTefqbr%2Fp2LM4zVJtOFvRdlZEM5m3jAZxtehc7CgeOiMmfakjPC3c%2Bh8slvmJXOftlCv0%2B04vboVIhg%2FRfS0TFCyokbLSfC7rfRHx7zmXyTP6tpP%2Fl4j6c6mC4F%2FiugHf%2F6Molmq%2Bz6LXgTnnvLQ0t88MN6E8lt01P0Lc5qogoVEIqFnF817Y%2FQN%2BSiNHFb6cCgVR2246mjNoaMJdv0Z8AJCtDq3%2BdHMPX%2BNHMVPkboenzYnV6CK52%2FOh%2B2cjxyEKTISZ0aUCaOWWRhLqvFuN2ndFCLZnAHa1lJs2ngBEYAnHSXKM5ywrvWaSr1LQCvqJrd8yeLic3CDHmP8WdpShU3pra30syVw557nHo7x0v0iJBNzCsX6k3DEkFgpCvNlAR6EimuG3kydLwW7PK2zesNZEpBy0LLcVnbCByzzQRpsC0Csqi6vKalyj0xpXNXNkvBJFNjzQQkUpF1%2FGg%2FKaPU4V4Z8oryFF0C6uBUV%2FsTOkOTEqFwhjatIMFE7qp1iFklG9pUkw0JakwgY6pgENvqvQKG84%2FHqInFRf%2BXtmyDxnkSy8LSkVdR%2B0%2Fc8TQahlt%2FSueaduz4y7VL5FwUyyTWeOmh8XFgg2Q3CuVF40pED%2FdA%2BNABGm4mRKxifOHuR%2FbKW3dtrCs3hqiXXQIFoxpHA90S%2Fua5hJomL12aYGMTfIudYOETYO0ycOOG%2FdNlZNzg%2BH2DMjK8RiHlrs2A0sJpu2gxjsL3AahDLkDtSK3wSgtWOC&X-Amz-Signature=a2a6dd39282688823db87e10c670abcac0e9bb6b6b59617a334f01fc8e35d15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645B2O2XG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0NkPsVs4Kc46v8Ipbj9jOWhmATzP7BAKRuEluinVXAAiAEJNmvuKLI0qkvwAoN7nUABLPcGjqfLiFi5kfYPjwOViqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSasdJhVyKE2kGWOnKtwDwiLVvBmM1A306rqIqWPlf%2FcSoWzufd7kGTslngufbxzZCs0ZG4G7Pgt7UaOYbMdA1tSYYe36OMnxdvmA0ncBI0lJE4l6XQM17bTl2eppYWJCnQnIjPUxTefqbr%2Fp2LM4zVJtOFvRdlZEM5m3jAZxtehc7CgeOiMmfakjPC3c%2Bh8slvmJXOftlCv0%2B04vboVIhg%2FRfS0TFCyokbLSfC7rfRHx7zmXyTP6tpP%2Fl4j6c6mC4F%2FiugHf%2F6Molmq%2Bz6LXgTnnvLQ0t88MN6E8lt01P0Lc5qogoVEIqFnF817Y%2FQN%2BSiNHFb6cCgVR2246mjNoaMJdv0Z8AJCtDq3%2BdHMPX%2BNHMVPkboenzYnV6CK52%2FOh%2B2cjxyEKTISZ0aUCaOWWRhLqvFuN2ndFCLZnAHa1lJs2ngBEYAnHSXKM5ywrvWaSr1LQCvqJrd8yeLic3CDHmP8WdpShU3pra30syVw557nHo7x0v0iJBNzCsX6k3DEkFgpCvNlAR6EimuG3kydLwW7PK2zesNZEpBy0LLcVnbCByzzQRpsC0Csqi6vKalyj0xpXNXNkvBJFNjzQQkUpF1%2FGg%2FKaPU4V4Z8oryFF0C6uBUV%2FsTOkOTEqFwhjatIMFE7qp1iFklG9pUkw0JakwgY6pgENvqvQKG84%2FHqInFRf%2BXtmyDxnkSy8LSkVdR%2B0%2Fc8TQahlt%2FSueaduz4y7VL5FwUyyTWeOmh8XFgg2Q3CuVF40pED%2FdA%2BNABGm4mRKxifOHuR%2FbKW3dtrCs3hqiXXQIFoxpHA90S%2Fua5hJomL12aYGMTfIudYOETYO0ycOOG%2FdNlZNzg%2BH2DMjK8RiHlrs2A0sJpu2gxjsL3AahDLkDtSK3wSgtWOC&X-Amz-Signature=45638e94e3fa61a80a5325285e1bdeb27588a3f59e20feaa7700b7034a7a85f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
