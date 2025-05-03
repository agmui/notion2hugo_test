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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUH5BNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFVhiyXZ%2BlWvDPIpFCp0yqOLFO4yNx45Ys9Ex3T33rdWAiAst0S7s2puQHYjslyG9DsMn%2FtVcu4gAqQJqFMQt6T%2FXyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofRl9olHB5%2Bnw9YdKtwD2llHEfYNcmo49o2eRDce2n4EOxk2ICWjPoQ0F433rgyaIzG9GF3A2jVGImnMDE2%2F07uAG%2BVbVfUxhn9tYCpuBArURcI0jq6wqiDKztxAqVS8a%2FFdnln2OoM2RSAjsi9Kjj2H0kFuIJWY%2B07cylFvCt0d7wAe2JQGSmxDsB%2BCpU7SFbvJIRHAmOBHLHv19yyBCuYMyJ9G2WX1Lv%2FHQK%2BZL8hNKt9oB2SsaeIuskyygeKXknYOW58naY38qdJNX6zmD0mPaMKAJ2SSga%2FM0%2Bo7KXMzoHAOHetAQjwt3SM5UeRs2UgaY3SlmjtCm8ZL1Qj2SZVHWZtRe7zOs0vEpoZkWX1olRJ%2BCQae04NpU84OqSyqgdYZq%2BxmGJ99GcpWLVD7JBrurleHqfC6mVC1eg0VXCQKgVTOtVRaXEL8n2WvuvEBGFrR9zWJum1SOOBmEK9MZKEWdBrqALvnzoL8uAzGFXPJBvcT3ZNCQ83sKRxIDxTfivBbstDEN5fu8ayGbdqFtwiXRQmWHIqyQXsZIR3VDB%2FirJlJzVIEyW0tShYOz%2FtvJCV2AQM%2BF2nB%2FHu5wwsWlHJUmV2%2FTlE5C%2FSWBHTdVJMfUsWLNDO0pqjtCTVmskBlZA4pa%2B%2FKd%2B%2BcdUkwxKDXwAY6pgG5TMHiqJIXZY8%2BfuToO5IcWa0WLrzF0VtlQ20rWxIQRmuoIrFnw%2FSUz2LwltMxtvDc37IS1JMSl1qcoiWzb4xLTmbQPGLl%2FaOKU9x5Rfw9NrILIHGpoWEvo1Mk9vCCD%2FGKEvqlJ5qQr7t2Co87%2BHYOwYMxIe%2BiElihOnu0ZryPfCqP9pf3BiZaVkpfK2jC1PyeDqhbr8ZBJ2A5kVfM1aJ125b%2BS2W%2B&X-Amz-Signature=e481ad50c8839210886e435c22d87dee727e431df763fa73d7cb956a5450cbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUH5BNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFVhiyXZ%2BlWvDPIpFCp0yqOLFO4yNx45Ys9Ex3T33rdWAiAst0S7s2puQHYjslyG9DsMn%2FtVcu4gAqQJqFMQt6T%2FXyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofRl9olHB5%2Bnw9YdKtwD2llHEfYNcmo49o2eRDce2n4EOxk2ICWjPoQ0F433rgyaIzG9GF3A2jVGImnMDE2%2F07uAG%2BVbVfUxhn9tYCpuBArURcI0jq6wqiDKztxAqVS8a%2FFdnln2OoM2RSAjsi9Kjj2H0kFuIJWY%2B07cylFvCt0d7wAe2JQGSmxDsB%2BCpU7SFbvJIRHAmOBHLHv19yyBCuYMyJ9G2WX1Lv%2FHQK%2BZL8hNKt9oB2SsaeIuskyygeKXknYOW58naY38qdJNX6zmD0mPaMKAJ2SSga%2FM0%2Bo7KXMzoHAOHetAQjwt3SM5UeRs2UgaY3SlmjtCm8ZL1Qj2SZVHWZtRe7zOs0vEpoZkWX1olRJ%2BCQae04NpU84OqSyqgdYZq%2BxmGJ99GcpWLVD7JBrurleHqfC6mVC1eg0VXCQKgVTOtVRaXEL8n2WvuvEBGFrR9zWJum1SOOBmEK9MZKEWdBrqALvnzoL8uAzGFXPJBvcT3ZNCQ83sKRxIDxTfivBbstDEN5fu8ayGbdqFtwiXRQmWHIqyQXsZIR3VDB%2FirJlJzVIEyW0tShYOz%2FtvJCV2AQM%2BF2nB%2FHu5wwsWlHJUmV2%2FTlE5C%2FSWBHTdVJMfUsWLNDO0pqjtCTVmskBlZA4pa%2B%2FKd%2B%2BcdUkwxKDXwAY6pgG5TMHiqJIXZY8%2BfuToO5IcWa0WLrzF0VtlQ20rWxIQRmuoIrFnw%2FSUz2LwltMxtvDc37IS1JMSl1qcoiWzb4xLTmbQPGLl%2FaOKU9x5Rfw9NrILIHGpoWEvo1Mk9vCCD%2FGKEvqlJ5qQr7t2Co87%2BHYOwYMxIe%2BiElihOnu0ZryPfCqP9pf3BiZaVkpfK2jC1PyeDqhbr8ZBJ2A5kVfM1aJ125b%2BS2W%2B&X-Amz-Signature=6795423566920359d1215a5e758d288ad07ef9928a9311c7e8e788bf3fb54c75&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUH5BNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFVhiyXZ%2BlWvDPIpFCp0yqOLFO4yNx45Ys9Ex3T33rdWAiAst0S7s2puQHYjslyG9DsMn%2FtVcu4gAqQJqFMQt6T%2FXyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofRl9olHB5%2Bnw9YdKtwD2llHEfYNcmo49o2eRDce2n4EOxk2ICWjPoQ0F433rgyaIzG9GF3A2jVGImnMDE2%2F07uAG%2BVbVfUxhn9tYCpuBArURcI0jq6wqiDKztxAqVS8a%2FFdnln2OoM2RSAjsi9Kjj2H0kFuIJWY%2B07cylFvCt0d7wAe2JQGSmxDsB%2BCpU7SFbvJIRHAmOBHLHv19yyBCuYMyJ9G2WX1Lv%2FHQK%2BZL8hNKt9oB2SsaeIuskyygeKXknYOW58naY38qdJNX6zmD0mPaMKAJ2SSga%2FM0%2Bo7KXMzoHAOHetAQjwt3SM5UeRs2UgaY3SlmjtCm8ZL1Qj2SZVHWZtRe7zOs0vEpoZkWX1olRJ%2BCQae04NpU84OqSyqgdYZq%2BxmGJ99GcpWLVD7JBrurleHqfC6mVC1eg0VXCQKgVTOtVRaXEL8n2WvuvEBGFrR9zWJum1SOOBmEK9MZKEWdBrqALvnzoL8uAzGFXPJBvcT3ZNCQ83sKRxIDxTfivBbstDEN5fu8ayGbdqFtwiXRQmWHIqyQXsZIR3VDB%2FirJlJzVIEyW0tShYOz%2FtvJCV2AQM%2BF2nB%2FHu5wwsWlHJUmV2%2FTlE5C%2FSWBHTdVJMfUsWLNDO0pqjtCTVmskBlZA4pa%2B%2FKd%2B%2BcdUkwxKDXwAY6pgG5TMHiqJIXZY8%2BfuToO5IcWa0WLrzF0VtlQ20rWxIQRmuoIrFnw%2FSUz2LwltMxtvDc37IS1JMSl1qcoiWzb4xLTmbQPGLl%2FaOKU9x5Rfw9NrILIHGpoWEvo1Mk9vCCD%2FGKEvqlJ5qQr7t2Co87%2BHYOwYMxIe%2BiElihOnu0ZryPfCqP9pf3BiZaVkpfK2jC1PyeDqhbr8ZBJ2A5kVfM1aJ125b%2BS2W%2B&X-Amz-Signature=5d62ad7be9f11b7be069d31010798f0dd91b198f6074536bcc0898aa3d1df08b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUH5BNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFVhiyXZ%2BlWvDPIpFCp0yqOLFO4yNx45Ys9Ex3T33rdWAiAst0S7s2puQHYjslyG9DsMn%2FtVcu4gAqQJqFMQt6T%2FXyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofRl9olHB5%2Bnw9YdKtwD2llHEfYNcmo49o2eRDce2n4EOxk2ICWjPoQ0F433rgyaIzG9GF3A2jVGImnMDE2%2F07uAG%2BVbVfUxhn9tYCpuBArURcI0jq6wqiDKztxAqVS8a%2FFdnln2OoM2RSAjsi9Kjj2H0kFuIJWY%2B07cylFvCt0d7wAe2JQGSmxDsB%2BCpU7SFbvJIRHAmOBHLHv19yyBCuYMyJ9G2WX1Lv%2FHQK%2BZL8hNKt9oB2SsaeIuskyygeKXknYOW58naY38qdJNX6zmD0mPaMKAJ2SSga%2FM0%2Bo7KXMzoHAOHetAQjwt3SM5UeRs2UgaY3SlmjtCm8ZL1Qj2SZVHWZtRe7zOs0vEpoZkWX1olRJ%2BCQae04NpU84OqSyqgdYZq%2BxmGJ99GcpWLVD7JBrurleHqfC6mVC1eg0VXCQKgVTOtVRaXEL8n2WvuvEBGFrR9zWJum1SOOBmEK9MZKEWdBrqALvnzoL8uAzGFXPJBvcT3ZNCQ83sKRxIDxTfivBbstDEN5fu8ayGbdqFtwiXRQmWHIqyQXsZIR3VDB%2FirJlJzVIEyW0tShYOz%2FtvJCV2AQM%2BF2nB%2FHu5wwsWlHJUmV2%2FTlE5C%2FSWBHTdVJMfUsWLNDO0pqjtCTVmskBlZA4pa%2B%2FKd%2B%2BcdUkwxKDXwAY6pgG5TMHiqJIXZY8%2BfuToO5IcWa0WLrzF0VtlQ20rWxIQRmuoIrFnw%2FSUz2LwltMxtvDc37IS1JMSl1qcoiWzb4xLTmbQPGLl%2FaOKU9x5Rfw9NrILIHGpoWEvo1Mk9vCCD%2FGKEvqlJ5qQr7t2Co87%2BHYOwYMxIe%2BiElihOnu0ZryPfCqP9pf3BiZaVkpfK2jC1PyeDqhbr8ZBJ2A5kVfM1aJ125b%2BS2W%2B&X-Amz-Signature=6177fb996179ad3887754876a3c509896d9575940a35e648f25dde74329d0022&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUH5BNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFVhiyXZ%2BlWvDPIpFCp0yqOLFO4yNx45Ys9Ex3T33rdWAiAst0S7s2puQHYjslyG9DsMn%2FtVcu4gAqQJqFMQt6T%2FXyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofRl9olHB5%2Bnw9YdKtwD2llHEfYNcmo49o2eRDce2n4EOxk2ICWjPoQ0F433rgyaIzG9GF3A2jVGImnMDE2%2F07uAG%2BVbVfUxhn9tYCpuBArURcI0jq6wqiDKztxAqVS8a%2FFdnln2OoM2RSAjsi9Kjj2H0kFuIJWY%2B07cylFvCt0d7wAe2JQGSmxDsB%2BCpU7SFbvJIRHAmOBHLHv19yyBCuYMyJ9G2WX1Lv%2FHQK%2BZL8hNKt9oB2SsaeIuskyygeKXknYOW58naY38qdJNX6zmD0mPaMKAJ2SSga%2FM0%2Bo7KXMzoHAOHetAQjwt3SM5UeRs2UgaY3SlmjtCm8ZL1Qj2SZVHWZtRe7zOs0vEpoZkWX1olRJ%2BCQae04NpU84OqSyqgdYZq%2BxmGJ99GcpWLVD7JBrurleHqfC6mVC1eg0VXCQKgVTOtVRaXEL8n2WvuvEBGFrR9zWJum1SOOBmEK9MZKEWdBrqALvnzoL8uAzGFXPJBvcT3ZNCQ83sKRxIDxTfivBbstDEN5fu8ayGbdqFtwiXRQmWHIqyQXsZIR3VDB%2FirJlJzVIEyW0tShYOz%2FtvJCV2AQM%2BF2nB%2FHu5wwsWlHJUmV2%2FTlE5C%2FSWBHTdVJMfUsWLNDO0pqjtCTVmskBlZA4pa%2B%2FKd%2B%2BcdUkwxKDXwAY6pgG5TMHiqJIXZY8%2BfuToO5IcWa0WLrzF0VtlQ20rWxIQRmuoIrFnw%2FSUz2LwltMxtvDc37IS1JMSl1qcoiWzb4xLTmbQPGLl%2FaOKU9x5Rfw9NrILIHGpoWEvo1Mk9vCCD%2FGKEvqlJ5qQr7t2Co87%2BHYOwYMxIe%2BiElihOnu0ZryPfCqP9pf3BiZaVkpfK2jC1PyeDqhbr8ZBJ2A5kVfM1aJ125b%2BS2W%2B&X-Amz-Signature=ec96938af96f6d292ce1a9969de6e786010319938696ed9b8b56c4bd03d81d59&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
