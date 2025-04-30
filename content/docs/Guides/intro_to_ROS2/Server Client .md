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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLJVDPG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAzT%2F2gEx81KujiXcbpx0yJhb74ZJwksY8pi%2BFvGtzMRAiAOYnsegbTHPo3uPKE3LerqLEAGZcgNmLO09zgvR%2FfSyyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTdHCQVh2C45mSskKtwD6qa0vRwStlosa0yr44bHCJlbmMGZL7Kb%2BCAIFCD%2Blox6Hu2s4oqDNBeabxswtacFxhOHDWvQCZ0Wiqr05okGe%2Bln%2FFRYbgUy2eBtfB3cJlLDu6J2hVLrLz8EbiLNmQptWPJNacETRZpcvpR%2B0L7S%2BHeYLmMiV%2BHIV6TZSwLGQa9s26c2gsUWixGC5LIBS%2BiH%2BzaqzMJ9E1mLOvwEml8Xbd9Hb5D4sjqkT9OrA%2B4OgNHzBaWBqyrEcXP7DKmM5gjgxNuRKQu8oapkUYcqg4siCgvjhKkwWsUjeYRSI1Y%2FGmix5iDkdT%2FLNJHpjNIFaMAyXvokFuza%2B%2F%2BS5Wt1zuhBxdwEzY4VyVGkpSMtjgYGGKzquUGF62HJYFn96ZyBpDgMjTJmuCNLYQV3r2CBR%2BmaAW%2BBd%2B6xw%2F0mJpMZ3en8SlrRobe5Vvb3pg8nXutauOZNbm%2F6JHa18EzUWjlQNYCmRnsVhbK3sKRXkqaCfSQLOfd5Dl%2FEyFGPVsJXHC%2FLx6u4sLh3Kmsyo2EA6cjoiWkXyWf9AiIHD85TZRQBrPaCHAwOs146tpUUHwabjT5QPE2ncfuo0%2B%2FhXfF3%2BsDStUjdMHS2miMLvAvQfLZYU6TSxlUVDxFgeMN52cNVusEwsfnGwAY6pgFu2ZzHk6Gh811bZ9JL%2B6QqPXqyfPcQU9SVX1Yn%2FguwNYVh2YufngQhIW6NeWKWe21dzDUViHaUn2db4Mk8V%2FI1cOjponv5iFAuTtYvJ6JmAar8oLCAimeEgYXO6ml%2B8MB7RBIyc%2FE79C6sx0GCyuVAMycPzjaVFvSFbNn3P0BNG%2BbOtw2p8fKItc7r8v8tEKVspAZ9M24Vuvi3LwJ1gOEEqD9laK%2Fw&X-Amz-Signature=c7c2b7b0b0494c85cc3615ffd2f50e1e75e2884a42043c01cdf1bdedc5373678&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLJVDPG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAzT%2F2gEx81KujiXcbpx0yJhb74ZJwksY8pi%2BFvGtzMRAiAOYnsegbTHPo3uPKE3LerqLEAGZcgNmLO09zgvR%2FfSyyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTdHCQVh2C45mSskKtwD6qa0vRwStlosa0yr44bHCJlbmMGZL7Kb%2BCAIFCD%2Blox6Hu2s4oqDNBeabxswtacFxhOHDWvQCZ0Wiqr05okGe%2Bln%2FFRYbgUy2eBtfB3cJlLDu6J2hVLrLz8EbiLNmQptWPJNacETRZpcvpR%2B0L7S%2BHeYLmMiV%2BHIV6TZSwLGQa9s26c2gsUWixGC5LIBS%2BiH%2BzaqzMJ9E1mLOvwEml8Xbd9Hb5D4sjqkT9OrA%2B4OgNHzBaWBqyrEcXP7DKmM5gjgxNuRKQu8oapkUYcqg4siCgvjhKkwWsUjeYRSI1Y%2FGmix5iDkdT%2FLNJHpjNIFaMAyXvokFuza%2B%2F%2BS5Wt1zuhBxdwEzY4VyVGkpSMtjgYGGKzquUGF62HJYFn96ZyBpDgMjTJmuCNLYQV3r2CBR%2BmaAW%2BBd%2B6xw%2F0mJpMZ3en8SlrRobe5Vvb3pg8nXutauOZNbm%2F6JHa18EzUWjlQNYCmRnsVhbK3sKRXkqaCfSQLOfd5Dl%2FEyFGPVsJXHC%2FLx6u4sLh3Kmsyo2EA6cjoiWkXyWf9AiIHD85TZRQBrPaCHAwOs146tpUUHwabjT5QPE2ncfuo0%2B%2FhXfF3%2BsDStUjdMHS2miMLvAvQfLZYU6TSxlUVDxFgeMN52cNVusEwsfnGwAY6pgFu2ZzHk6Gh811bZ9JL%2B6QqPXqyfPcQU9SVX1Yn%2FguwNYVh2YufngQhIW6NeWKWe21dzDUViHaUn2db4Mk8V%2FI1cOjponv5iFAuTtYvJ6JmAar8oLCAimeEgYXO6ml%2B8MB7RBIyc%2FE79C6sx0GCyuVAMycPzjaVFvSFbNn3P0BNG%2BbOtw2p8fKItc7r8v8tEKVspAZ9M24Vuvi3LwJ1gOEEqD9laK%2Fw&X-Amz-Signature=23145b5dee54a0ef323133cb58e8b5fe7b89eeaa4168de69c7de0f54c6f7d54b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLJVDPG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAzT%2F2gEx81KujiXcbpx0yJhb74ZJwksY8pi%2BFvGtzMRAiAOYnsegbTHPo3uPKE3LerqLEAGZcgNmLO09zgvR%2FfSyyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTdHCQVh2C45mSskKtwD6qa0vRwStlosa0yr44bHCJlbmMGZL7Kb%2BCAIFCD%2Blox6Hu2s4oqDNBeabxswtacFxhOHDWvQCZ0Wiqr05okGe%2Bln%2FFRYbgUy2eBtfB3cJlLDu6J2hVLrLz8EbiLNmQptWPJNacETRZpcvpR%2B0L7S%2BHeYLmMiV%2BHIV6TZSwLGQa9s26c2gsUWixGC5LIBS%2BiH%2BzaqzMJ9E1mLOvwEml8Xbd9Hb5D4sjqkT9OrA%2B4OgNHzBaWBqyrEcXP7DKmM5gjgxNuRKQu8oapkUYcqg4siCgvjhKkwWsUjeYRSI1Y%2FGmix5iDkdT%2FLNJHpjNIFaMAyXvokFuza%2B%2F%2BS5Wt1zuhBxdwEzY4VyVGkpSMtjgYGGKzquUGF62HJYFn96ZyBpDgMjTJmuCNLYQV3r2CBR%2BmaAW%2BBd%2B6xw%2F0mJpMZ3en8SlrRobe5Vvb3pg8nXutauOZNbm%2F6JHa18EzUWjlQNYCmRnsVhbK3sKRXkqaCfSQLOfd5Dl%2FEyFGPVsJXHC%2FLx6u4sLh3Kmsyo2EA6cjoiWkXyWf9AiIHD85TZRQBrPaCHAwOs146tpUUHwabjT5QPE2ncfuo0%2B%2FhXfF3%2BsDStUjdMHS2miMLvAvQfLZYU6TSxlUVDxFgeMN52cNVusEwsfnGwAY6pgFu2ZzHk6Gh811bZ9JL%2B6QqPXqyfPcQU9SVX1Yn%2FguwNYVh2YufngQhIW6NeWKWe21dzDUViHaUn2db4Mk8V%2FI1cOjponv5iFAuTtYvJ6JmAar8oLCAimeEgYXO6ml%2B8MB7RBIyc%2FE79C6sx0GCyuVAMycPzjaVFvSFbNn3P0BNG%2BbOtw2p8fKItc7r8v8tEKVspAZ9M24Vuvi3LwJ1gOEEqD9laK%2Fw&X-Amz-Signature=4de0e17b0c18289afc81779148b350e888e02d2244ebbc275027af6a0efba53e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLJVDPG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAzT%2F2gEx81KujiXcbpx0yJhb74ZJwksY8pi%2BFvGtzMRAiAOYnsegbTHPo3uPKE3LerqLEAGZcgNmLO09zgvR%2FfSyyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTdHCQVh2C45mSskKtwD6qa0vRwStlosa0yr44bHCJlbmMGZL7Kb%2BCAIFCD%2Blox6Hu2s4oqDNBeabxswtacFxhOHDWvQCZ0Wiqr05okGe%2Bln%2FFRYbgUy2eBtfB3cJlLDu6J2hVLrLz8EbiLNmQptWPJNacETRZpcvpR%2B0L7S%2BHeYLmMiV%2BHIV6TZSwLGQa9s26c2gsUWixGC5LIBS%2BiH%2BzaqzMJ9E1mLOvwEml8Xbd9Hb5D4sjqkT9OrA%2B4OgNHzBaWBqyrEcXP7DKmM5gjgxNuRKQu8oapkUYcqg4siCgvjhKkwWsUjeYRSI1Y%2FGmix5iDkdT%2FLNJHpjNIFaMAyXvokFuza%2B%2F%2BS5Wt1zuhBxdwEzY4VyVGkpSMtjgYGGKzquUGF62HJYFn96ZyBpDgMjTJmuCNLYQV3r2CBR%2BmaAW%2BBd%2B6xw%2F0mJpMZ3en8SlrRobe5Vvb3pg8nXutauOZNbm%2F6JHa18EzUWjlQNYCmRnsVhbK3sKRXkqaCfSQLOfd5Dl%2FEyFGPVsJXHC%2FLx6u4sLh3Kmsyo2EA6cjoiWkXyWf9AiIHD85TZRQBrPaCHAwOs146tpUUHwabjT5QPE2ncfuo0%2B%2FhXfF3%2BsDStUjdMHS2miMLvAvQfLZYU6TSxlUVDxFgeMN52cNVusEwsfnGwAY6pgFu2ZzHk6Gh811bZ9JL%2B6QqPXqyfPcQU9SVX1Yn%2FguwNYVh2YufngQhIW6NeWKWe21dzDUViHaUn2db4Mk8V%2FI1cOjponv5iFAuTtYvJ6JmAar8oLCAimeEgYXO6ml%2B8MB7RBIyc%2FE79C6sx0GCyuVAMycPzjaVFvSFbNn3P0BNG%2BbOtw2p8fKItc7r8v8tEKVspAZ9M24Vuvi3LwJ1gOEEqD9laK%2Fw&X-Amz-Signature=d0154466b2cf68f98ef6029e3a9fe01cd406401a8b7e2067903dc7cae62a8453&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLJVDPG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAzT%2F2gEx81KujiXcbpx0yJhb74ZJwksY8pi%2BFvGtzMRAiAOYnsegbTHPo3uPKE3LerqLEAGZcgNmLO09zgvR%2FfSyyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTdHCQVh2C45mSskKtwD6qa0vRwStlosa0yr44bHCJlbmMGZL7Kb%2BCAIFCD%2Blox6Hu2s4oqDNBeabxswtacFxhOHDWvQCZ0Wiqr05okGe%2Bln%2FFRYbgUy2eBtfB3cJlLDu6J2hVLrLz8EbiLNmQptWPJNacETRZpcvpR%2B0L7S%2BHeYLmMiV%2BHIV6TZSwLGQa9s26c2gsUWixGC5LIBS%2BiH%2BzaqzMJ9E1mLOvwEml8Xbd9Hb5D4sjqkT9OrA%2B4OgNHzBaWBqyrEcXP7DKmM5gjgxNuRKQu8oapkUYcqg4siCgvjhKkwWsUjeYRSI1Y%2FGmix5iDkdT%2FLNJHpjNIFaMAyXvokFuza%2B%2F%2BS5Wt1zuhBxdwEzY4VyVGkpSMtjgYGGKzquUGF62HJYFn96ZyBpDgMjTJmuCNLYQV3r2CBR%2BmaAW%2BBd%2B6xw%2F0mJpMZ3en8SlrRobe5Vvb3pg8nXutauOZNbm%2F6JHa18EzUWjlQNYCmRnsVhbK3sKRXkqaCfSQLOfd5Dl%2FEyFGPVsJXHC%2FLx6u4sLh3Kmsyo2EA6cjoiWkXyWf9AiIHD85TZRQBrPaCHAwOs146tpUUHwabjT5QPE2ncfuo0%2B%2FhXfF3%2BsDStUjdMHS2miMLvAvQfLZYU6TSxlUVDxFgeMN52cNVusEwsfnGwAY6pgFu2ZzHk6Gh811bZ9JL%2B6QqPXqyfPcQU9SVX1Yn%2FguwNYVh2YufngQhIW6NeWKWe21dzDUViHaUn2db4Mk8V%2FI1cOjponv5iFAuTtYvJ6JmAar8oLCAimeEgYXO6ml%2B8MB7RBIyc%2FE79C6sx0GCyuVAMycPzjaVFvSFbNn3P0BNG%2BbOtw2p8fKItc7r8v8tEKVspAZ9M24Vuvi3LwJ1gOEEqD9laK%2Fw&X-Amz-Signature=ed00a02577ee0e241b9d91c82d5017c884ca8772dc6170e12364de56d2ebb596&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
