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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKDF2F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdmlPjfGIFvDq7%2FtSEYSdKOip%2Bzj0pJ4xT17Zyn0%2FNwIhAOJfpetfB65CLe%2Bp6NN%2BPkZzhYQef9AVPQaADqhjS13RKv8DCFQQABoMNjM3NDIzMTgzODA1Igx0V5SVFNawvw28YpYq3AMVM1jaTbziJXGblIM5Ih55QVaXXmLJ15zujGKXJvmFPGxZ0%2F3hKTDG6i8v1YRcieW7zARvwQTmILn5NFuWEqrEmcvZ4nk6%2Fft9bRb%2Fvgbdykzf1jGbfgMdam7DW9s%2FMHqVo7PX%2F339Q0isMzcdnctd0qSJrYlEKJdmb0Y3yAsCK03bqMvUi821Tc6pbgwIIYI2%2BMTjm0JxpXUEE%2BaL%2B%2FGmzIdvYCMCS6lR899LeTQBMRmujOTXNUUitHN1oIwpApq%2FoTfWIAzpK%2F0aTP0qAtgZp6VI0tL6x%2FUAAbCbvHK9WtU%2FTG60hVHXg2XSRA1l%2Fhw6jFcX%2FH4RbOwlmoZOu8r%2BWpswSM%2FBL7PGj%2FO3bkLR66xcOSsrDPS7hCgl0Q4gMSkMf5sVySfChfkcGt3VsF5%2BBhjVICyQymiJ%2FdTupuAfeyES8jN7WM5AbYjvUQn8J6pHDPHBUQimNgYy8SFOCKlRyptYacKNYWSRBVoGfMU9wgsBL5bNnNIvvesNcZKJsmQXpw4F2BELgc8rs5eD%2BpMgD6eo4de4F%2BzGJTCqvHJUHyntOY8S4Id9MQObXqVtkv66%2BBgFyxOD08Sgp4PC757oGV9RL%2BEQ0%2BNPT8E%2B5IyABGkXU10aDPeoxIJHtzCWyuO%2BBjqkAdkP8tOmu2QP4kbfwCju9bs2KtBPjOoqyi1ON5JtRY3RI6pmXFYejj7lzFB4ubL%2Bls3%2BAj%2ByX8CsZZy6xECefpw9DIZUd8RkPqysncKPrkXlZl3Fp0%2FtGAs6phbNkbCbeTPi5S4lqDOfMljXKGJWHXJLq%2FDPH9lvgpWDnX47lRohAYrZ6P%2FxmpAFacqhreSSv9%2BOTwc6MQ1mUgsEUGyw8hLbMKlM&X-Amz-Signature=243f3934d496bf156b533965f27d1ad96b8f5f919da4560ddde39d54ce18cecc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKDF2F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdmlPjfGIFvDq7%2FtSEYSdKOip%2Bzj0pJ4xT17Zyn0%2FNwIhAOJfpetfB65CLe%2Bp6NN%2BPkZzhYQef9AVPQaADqhjS13RKv8DCFQQABoMNjM3NDIzMTgzODA1Igx0V5SVFNawvw28YpYq3AMVM1jaTbziJXGblIM5Ih55QVaXXmLJ15zujGKXJvmFPGxZ0%2F3hKTDG6i8v1YRcieW7zARvwQTmILn5NFuWEqrEmcvZ4nk6%2Fft9bRb%2Fvgbdykzf1jGbfgMdam7DW9s%2FMHqVo7PX%2F339Q0isMzcdnctd0qSJrYlEKJdmb0Y3yAsCK03bqMvUi821Tc6pbgwIIYI2%2BMTjm0JxpXUEE%2BaL%2B%2FGmzIdvYCMCS6lR899LeTQBMRmujOTXNUUitHN1oIwpApq%2FoTfWIAzpK%2F0aTP0qAtgZp6VI0tL6x%2FUAAbCbvHK9WtU%2FTG60hVHXg2XSRA1l%2Fhw6jFcX%2FH4RbOwlmoZOu8r%2BWpswSM%2FBL7PGj%2FO3bkLR66xcOSsrDPS7hCgl0Q4gMSkMf5sVySfChfkcGt3VsF5%2BBhjVICyQymiJ%2FdTupuAfeyES8jN7WM5AbYjvUQn8J6pHDPHBUQimNgYy8SFOCKlRyptYacKNYWSRBVoGfMU9wgsBL5bNnNIvvesNcZKJsmQXpw4F2BELgc8rs5eD%2BpMgD6eo4de4F%2BzGJTCqvHJUHyntOY8S4Id9MQObXqVtkv66%2BBgFyxOD08Sgp4PC757oGV9RL%2BEQ0%2BNPT8E%2B5IyABGkXU10aDPeoxIJHtzCWyuO%2BBjqkAdkP8tOmu2QP4kbfwCju9bs2KtBPjOoqyi1ON5JtRY3RI6pmXFYejj7lzFB4ubL%2Bls3%2BAj%2ByX8CsZZy6xECefpw9DIZUd8RkPqysncKPrkXlZl3Fp0%2FtGAs6phbNkbCbeTPi5S4lqDOfMljXKGJWHXJLq%2FDPH9lvgpWDnX47lRohAYrZ6P%2FxmpAFacqhreSSv9%2BOTwc6MQ1mUgsEUGyw8hLbMKlM&X-Amz-Signature=0e418cd0ad4bd544ee2a369cc022d82d5642f0ab63e930def00ea0a4a707859e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKDF2F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdmlPjfGIFvDq7%2FtSEYSdKOip%2Bzj0pJ4xT17Zyn0%2FNwIhAOJfpetfB65CLe%2Bp6NN%2BPkZzhYQef9AVPQaADqhjS13RKv8DCFQQABoMNjM3NDIzMTgzODA1Igx0V5SVFNawvw28YpYq3AMVM1jaTbziJXGblIM5Ih55QVaXXmLJ15zujGKXJvmFPGxZ0%2F3hKTDG6i8v1YRcieW7zARvwQTmILn5NFuWEqrEmcvZ4nk6%2Fft9bRb%2Fvgbdykzf1jGbfgMdam7DW9s%2FMHqVo7PX%2F339Q0isMzcdnctd0qSJrYlEKJdmb0Y3yAsCK03bqMvUi821Tc6pbgwIIYI2%2BMTjm0JxpXUEE%2BaL%2B%2FGmzIdvYCMCS6lR899LeTQBMRmujOTXNUUitHN1oIwpApq%2FoTfWIAzpK%2F0aTP0qAtgZp6VI0tL6x%2FUAAbCbvHK9WtU%2FTG60hVHXg2XSRA1l%2Fhw6jFcX%2FH4RbOwlmoZOu8r%2BWpswSM%2FBL7PGj%2FO3bkLR66xcOSsrDPS7hCgl0Q4gMSkMf5sVySfChfkcGt3VsF5%2BBhjVICyQymiJ%2FdTupuAfeyES8jN7WM5AbYjvUQn8J6pHDPHBUQimNgYy8SFOCKlRyptYacKNYWSRBVoGfMU9wgsBL5bNnNIvvesNcZKJsmQXpw4F2BELgc8rs5eD%2BpMgD6eo4de4F%2BzGJTCqvHJUHyntOY8S4Id9MQObXqVtkv66%2BBgFyxOD08Sgp4PC757oGV9RL%2BEQ0%2BNPT8E%2B5IyABGkXU10aDPeoxIJHtzCWyuO%2BBjqkAdkP8tOmu2QP4kbfwCju9bs2KtBPjOoqyi1ON5JtRY3RI6pmXFYejj7lzFB4ubL%2Bls3%2BAj%2ByX8CsZZy6xECefpw9DIZUd8RkPqysncKPrkXlZl3Fp0%2FtGAs6phbNkbCbeTPi5S4lqDOfMljXKGJWHXJLq%2FDPH9lvgpWDnX47lRohAYrZ6P%2FxmpAFacqhreSSv9%2BOTwc6MQ1mUgsEUGyw8hLbMKlM&X-Amz-Signature=0e3f875b795018f5a5a01c4efb13e6a00a318c36f8ef624ec22bb2ad6302fbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKDF2F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdmlPjfGIFvDq7%2FtSEYSdKOip%2Bzj0pJ4xT17Zyn0%2FNwIhAOJfpetfB65CLe%2Bp6NN%2BPkZzhYQef9AVPQaADqhjS13RKv8DCFQQABoMNjM3NDIzMTgzODA1Igx0V5SVFNawvw28YpYq3AMVM1jaTbziJXGblIM5Ih55QVaXXmLJ15zujGKXJvmFPGxZ0%2F3hKTDG6i8v1YRcieW7zARvwQTmILn5NFuWEqrEmcvZ4nk6%2Fft9bRb%2Fvgbdykzf1jGbfgMdam7DW9s%2FMHqVo7PX%2F339Q0isMzcdnctd0qSJrYlEKJdmb0Y3yAsCK03bqMvUi821Tc6pbgwIIYI2%2BMTjm0JxpXUEE%2BaL%2B%2FGmzIdvYCMCS6lR899LeTQBMRmujOTXNUUitHN1oIwpApq%2FoTfWIAzpK%2F0aTP0qAtgZp6VI0tL6x%2FUAAbCbvHK9WtU%2FTG60hVHXg2XSRA1l%2Fhw6jFcX%2FH4RbOwlmoZOu8r%2BWpswSM%2FBL7PGj%2FO3bkLR66xcOSsrDPS7hCgl0Q4gMSkMf5sVySfChfkcGt3VsF5%2BBhjVICyQymiJ%2FdTupuAfeyES8jN7WM5AbYjvUQn8J6pHDPHBUQimNgYy8SFOCKlRyptYacKNYWSRBVoGfMU9wgsBL5bNnNIvvesNcZKJsmQXpw4F2BELgc8rs5eD%2BpMgD6eo4de4F%2BzGJTCqvHJUHyntOY8S4Id9MQObXqVtkv66%2BBgFyxOD08Sgp4PC757oGV9RL%2BEQ0%2BNPT8E%2B5IyABGkXU10aDPeoxIJHtzCWyuO%2BBjqkAdkP8tOmu2QP4kbfwCju9bs2KtBPjOoqyi1ON5JtRY3RI6pmXFYejj7lzFB4ubL%2Bls3%2BAj%2ByX8CsZZy6xECefpw9DIZUd8RkPqysncKPrkXlZl3Fp0%2FtGAs6phbNkbCbeTPi5S4lqDOfMljXKGJWHXJLq%2FDPH9lvgpWDnX47lRohAYrZ6P%2FxmpAFacqhreSSv9%2BOTwc6MQ1mUgsEUGyw8hLbMKlM&X-Amz-Signature=9d4bef24a0e995d1cd4b22d1f5cbb0b8119a948d994860671e02084a85561654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKDF2F%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdmlPjfGIFvDq7%2FtSEYSdKOip%2Bzj0pJ4xT17Zyn0%2FNwIhAOJfpetfB65CLe%2Bp6NN%2BPkZzhYQef9AVPQaADqhjS13RKv8DCFQQABoMNjM3NDIzMTgzODA1Igx0V5SVFNawvw28YpYq3AMVM1jaTbziJXGblIM5Ih55QVaXXmLJ15zujGKXJvmFPGxZ0%2F3hKTDG6i8v1YRcieW7zARvwQTmILn5NFuWEqrEmcvZ4nk6%2Fft9bRb%2Fvgbdykzf1jGbfgMdam7DW9s%2FMHqVo7PX%2F339Q0isMzcdnctd0qSJrYlEKJdmb0Y3yAsCK03bqMvUi821Tc6pbgwIIYI2%2BMTjm0JxpXUEE%2BaL%2B%2FGmzIdvYCMCS6lR899LeTQBMRmujOTXNUUitHN1oIwpApq%2FoTfWIAzpK%2F0aTP0qAtgZp6VI0tL6x%2FUAAbCbvHK9WtU%2FTG60hVHXg2XSRA1l%2Fhw6jFcX%2FH4RbOwlmoZOu8r%2BWpswSM%2FBL7PGj%2FO3bkLR66xcOSsrDPS7hCgl0Q4gMSkMf5sVySfChfkcGt3VsF5%2BBhjVICyQymiJ%2FdTupuAfeyES8jN7WM5AbYjvUQn8J6pHDPHBUQimNgYy8SFOCKlRyptYacKNYWSRBVoGfMU9wgsBL5bNnNIvvesNcZKJsmQXpw4F2BELgc8rs5eD%2BpMgD6eo4de4F%2BzGJTCqvHJUHyntOY8S4Id9MQObXqVtkv66%2BBgFyxOD08Sgp4PC757oGV9RL%2BEQ0%2BNPT8E%2B5IyABGkXU10aDPeoxIJHtzCWyuO%2BBjqkAdkP8tOmu2QP4kbfwCju9bs2KtBPjOoqyi1ON5JtRY3RI6pmXFYejj7lzFB4ubL%2Bls3%2BAj%2ByX8CsZZy6xECefpw9DIZUd8RkPqysncKPrkXlZl3Fp0%2FtGAs6phbNkbCbeTPi5S4lqDOfMljXKGJWHXJLq%2FDPH9lvgpWDnX47lRohAYrZ6P%2FxmpAFacqhreSSv9%2BOTwc6MQ1mUgsEUGyw8hLbMKlM&X-Amz-Signature=7d5d0d35e075f4b032baf9c59e1910b7675594a466b0b20e3d01d22e7277a4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
