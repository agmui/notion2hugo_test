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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PH5UPAR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYOPaGl6T%2F9Y7YQgjI%2BH7Z5QONE3%2FBdqXy4cuY86sbqAiEA8FqkbxarduVoWpWV%2Ff16LJDmbeZ0KDshd5TLRrfzhCYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw6UFc%2FLkCjLqIJUyrcAziS8sEj0NWAwE0EL7PMc9WoTHCCXgJ7Z3Dn%2BF3yLEvd4ptTGupsJhiitiZEVr29aksqKVn2%2FkSpM8MsJH2GIlqMrp0LFl3fA%2FQ%2FhEEXauDUOrGVZOVEzI7gnORf8a7EYXQ2RRixSFX6RqY5E03j6UaakRjXQgypUdac%2Fq3dIhwcRMFEuJBQwcX8qR784OlTFbTCOJV%2Fa4%2FqMru6lxAy8i6tV3YRVoqciTlbwSxEKs2TWKYNGSKamebgAXzedbrBUeEcnN%2FXh6q4BcaQ5KFzTmeFwdU9XcKy762woEsCVzpkNy8CnuX8WJz6ivM%2BlqG1St10iDyXbz%2FJrEEtKuK2xKlIeNuatyaluyhbyLjvduv39NMLQSHiUGeyneDa9wd4D%2Bv80zW4jBOZTnkaXKwL1X2qubfUUwMW5hP3pxzVhoLuw7QErVFR5ynad6fTfNBxd%2FlG2E6NxvqKwwj%2BERPKGARBGgjm2Q9PsyreH4gZJgKstnZbqPBcxeMOl5pfAiAnAI7lBi%2BvcqJwe%2FsNVnSFoN25XqHi7mZ4zYxeMCWAeXQUQj7HIfxD9JGQHtmEfTD2OSQD%2B5zUQuy5D9Qq8f%2FdLdJS%2BsCzv4ZraV8Z%2BOBTKMv3FpGKVsRd0fIcz05HMNXO%2FcAGOqUB1zp9SgN4KJ%2BFD%2FpumwyIpHQt66oOxd7TgQSwrlsmy%2Bl%2BMa5eTDZ0N5BdSP3F5zDKVNaOZodryjBAP0XYFoeeJZU%2B67GyoCI7jTOUk8KCF5FmyFJ0Ou0sAKLE2Rw%2BlzpNaWsGcDUBDMNRwUMtBfjVvsGzEIiZ1tBJmqTyU9DKS8rLiEGiLq6mAGUYDO5cA7e0eet5ecxSN1iiXRvyMJiPIO%2BxnCOE&X-Amz-Signature=fc6dade4cdaf206d3aa21f0136c6b5ebf0193743fa23b822314d3312cd57234c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PH5UPAR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYOPaGl6T%2F9Y7YQgjI%2BH7Z5QONE3%2FBdqXy4cuY86sbqAiEA8FqkbxarduVoWpWV%2Ff16LJDmbeZ0KDshd5TLRrfzhCYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw6UFc%2FLkCjLqIJUyrcAziS8sEj0NWAwE0EL7PMc9WoTHCCXgJ7Z3Dn%2BF3yLEvd4ptTGupsJhiitiZEVr29aksqKVn2%2FkSpM8MsJH2GIlqMrp0LFl3fA%2FQ%2FhEEXauDUOrGVZOVEzI7gnORf8a7EYXQ2RRixSFX6RqY5E03j6UaakRjXQgypUdac%2Fq3dIhwcRMFEuJBQwcX8qR784OlTFbTCOJV%2Fa4%2FqMru6lxAy8i6tV3YRVoqciTlbwSxEKs2TWKYNGSKamebgAXzedbrBUeEcnN%2FXh6q4BcaQ5KFzTmeFwdU9XcKy762woEsCVzpkNy8CnuX8WJz6ivM%2BlqG1St10iDyXbz%2FJrEEtKuK2xKlIeNuatyaluyhbyLjvduv39NMLQSHiUGeyneDa9wd4D%2Bv80zW4jBOZTnkaXKwL1X2qubfUUwMW5hP3pxzVhoLuw7QErVFR5ynad6fTfNBxd%2FlG2E6NxvqKwwj%2BERPKGARBGgjm2Q9PsyreH4gZJgKstnZbqPBcxeMOl5pfAiAnAI7lBi%2BvcqJwe%2FsNVnSFoN25XqHi7mZ4zYxeMCWAeXQUQj7HIfxD9JGQHtmEfTD2OSQD%2B5zUQuy5D9Qq8f%2FdLdJS%2BsCzv4ZraV8Z%2BOBTKMv3FpGKVsRd0fIcz05HMNXO%2FcAGOqUB1zp9SgN4KJ%2BFD%2FpumwyIpHQt66oOxd7TgQSwrlsmy%2Bl%2BMa5eTDZ0N5BdSP3F5zDKVNaOZodryjBAP0XYFoeeJZU%2B67GyoCI7jTOUk8KCF5FmyFJ0Ou0sAKLE2Rw%2BlzpNaWsGcDUBDMNRwUMtBfjVvsGzEIiZ1tBJmqTyU9DKS8rLiEGiLq6mAGUYDO5cA7e0eet5ecxSN1iiXRvyMJiPIO%2BxnCOE&X-Amz-Signature=c8983b372dca19e0f5e4bcf289e1dce7500c776a44098cb81e745706f89a61b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PH5UPAR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYOPaGl6T%2F9Y7YQgjI%2BH7Z5QONE3%2FBdqXy4cuY86sbqAiEA8FqkbxarduVoWpWV%2Ff16LJDmbeZ0KDshd5TLRrfzhCYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw6UFc%2FLkCjLqIJUyrcAziS8sEj0NWAwE0EL7PMc9WoTHCCXgJ7Z3Dn%2BF3yLEvd4ptTGupsJhiitiZEVr29aksqKVn2%2FkSpM8MsJH2GIlqMrp0LFl3fA%2FQ%2FhEEXauDUOrGVZOVEzI7gnORf8a7EYXQ2RRixSFX6RqY5E03j6UaakRjXQgypUdac%2Fq3dIhwcRMFEuJBQwcX8qR784OlTFbTCOJV%2Fa4%2FqMru6lxAy8i6tV3YRVoqciTlbwSxEKs2TWKYNGSKamebgAXzedbrBUeEcnN%2FXh6q4BcaQ5KFzTmeFwdU9XcKy762woEsCVzpkNy8CnuX8WJz6ivM%2BlqG1St10iDyXbz%2FJrEEtKuK2xKlIeNuatyaluyhbyLjvduv39NMLQSHiUGeyneDa9wd4D%2Bv80zW4jBOZTnkaXKwL1X2qubfUUwMW5hP3pxzVhoLuw7QErVFR5ynad6fTfNBxd%2FlG2E6NxvqKwwj%2BERPKGARBGgjm2Q9PsyreH4gZJgKstnZbqPBcxeMOl5pfAiAnAI7lBi%2BvcqJwe%2FsNVnSFoN25XqHi7mZ4zYxeMCWAeXQUQj7HIfxD9JGQHtmEfTD2OSQD%2B5zUQuy5D9Qq8f%2FdLdJS%2BsCzv4ZraV8Z%2BOBTKMv3FpGKVsRd0fIcz05HMNXO%2FcAGOqUB1zp9SgN4KJ%2BFD%2FpumwyIpHQt66oOxd7TgQSwrlsmy%2Bl%2BMa5eTDZ0N5BdSP3F5zDKVNaOZodryjBAP0XYFoeeJZU%2B67GyoCI7jTOUk8KCF5FmyFJ0Ou0sAKLE2Rw%2BlzpNaWsGcDUBDMNRwUMtBfjVvsGzEIiZ1tBJmqTyU9DKS8rLiEGiLq6mAGUYDO5cA7e0eet5ecxSN1iiXRvyMJiPIO%2BxnCOE&X-Amz-Signature=8165700296d9559d1130eed996f0caf831b955d77db217d8f83e0e60a89116e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PH5UPAR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYOPaGl6T%2F9Y7YQgjI%2BH7Z5QONE3%2FBdqXy4cuY86sbqAiEA8FqkbxarduVoWpWV%2Ff16LJDmbeZ0KDshd5TLRrfzhCYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw6UFc%2FLkCjLqIJUyrcAziS8sEj0NWAwE0EL7PMc9WoTHCCXgJ7Z3Dn%2BF3yLEvd4ptTGupsJhiitiZEVr29aksqKVn2%2FkSpM8MsJH2GIlqMrp0LFl3fA%2FQ%2FhEEXauDUOrGVZOVEzI7gnORf8a7EYXQ2RRixSFX6RqY5E03j6UaakRjXQgypUdac%2Fq3dIhwcRMFEuJBQwcX8qR784OlTFbTCOJV%2Fa4%2FqMru6lxAy8i6tV3YRVoqciTlbwSxEKs2TWKYNGSKamebgAXzedbrBUeEcnN%2FXh6q4BcaQ5KFzTmeFwdU9XcKy762woEsCVzpkNy8CnuX8WJz6ivM%2BlqG1St10iDyXbz%2FJrEEtKuK2xKlIeNuatyaluyhbyLjvduv39NMLQSHiUGeyneDa9wd4D%2Bv80zW4jBOZTnkaXKwL1X2qubfUUwMW5hP3pxzVhoLuw7QErVFR5ynad6fTfNBxd%2FlG2E6NxvqKwwj%2BERPKGARBGgjm2Q9PsyreH4gZJgKstnZbqPBcxeMOl5pfAiAnAI7lBi%2BvcqJwe%2FsNVnSFoN25XqHi7mZ4zYxeMCWAeXQUQj7HIfxD9JGQHtmEfTD2OSQD%2B5zUQuy5D9Qq8f%2FdLdJS%2BsCzv4ZraV8Z%2BOBTKMv3FpGKVsRd0fIcz05HMNXO%2FcAGOqUB1zp9SgN4KJ%2BFD%2FpumwyIpHQt66oOxd7TgQSwrlsmy%2Bl%2BMa5eTDZ0N5BdSP3F5zDKVNaOZodryjBAP0XYFoeeJZU%2B67GyoCI7jTOUk8KCF5FmyFJ0Ou0sAKLE2Rw%2BlzpNaWsGcDUBDMNRwUMtBfjVvsGzEIiZ1tBJmqTyU9DKS8rLiEGiLq6mAGUYDO5cA7e0eet5ecxSN1iiXRvyMJiPIO%2BxnCOE&X-Amz-Signature=079c82f4fa98b112ce14025b36acad3a7c96979b1dfca2a1e3112ac84f8b7051&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PH5UPAR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYOPaGl6T%2F9Y7YQgjI%2BH7Z5QONE3%2FBdqXy4cuY86sbqAiEA8FqkbxarduVoWpWV%2Ff16LJDmbeZ0KDshd5TLRrfzhCYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw6UFc%2FLkCjLqIJUyrcAziS8sEj0NWAwE0EL7PMc9WoTHCCXgJ7Z3Dn%2BF3yLEvd4ptTGupsJhiitiZEVr29aksqKVn2%2FkSpM8MsJH2GIlqMrp0LFl3fA%2FQ%2FhEEXauDUOrGVZOVEzI7gnORf8a7EYXQ2RRixSFX6RqY5E03j6UaakRjXQgypUdac%2Fq3dIhwcRMFEuJBQwcX8qR784OlTFbTCOJV%2Fa4%2FqMru6lxAy8i6tV3YRVoqciTlbwSxEKs2TWKYNGSKamebgAXzedbrBUeEcnN%2FXh6q4BcaQ5KFzTmeFwdU9XcKy762woEsCVzpkNy8CnuX8WJz6ivM%2BlqG1St10iDyXbz%2FJrEEtKuK2xKlIeNuatyaluyhbyLjvduv39NMLQSHiUGeyneDa9wd4D%2Bv80zW4jBOZTnkaXKwL1X2qubfUUwMW5hP3pxzVhoLuw7QErVFR5ynad6fTfNBxd%2FlG2E6NxvqKwwj%2BERPKGARBGgjm2Q9PsyreH4gZJgKstnZbqPBcxeMOl5pfAiAnAI7lBi%2BvcqJwe%2FsNVnSFoN25XqHi7mZ4zYxeMCWAeXQUQj7HIfxD9JGQHtmEfTD2OSQD%2B5zUQuy5D9Qq8f%2FdLdJS%2BsCzv4ZraV8Z%2BOBTKMv3FpGKVsRd0fIcz05HMNXO%2FcAGOqUB1zp9SgN4KJ%2BFD%2FpumwyIpHQt66oOxd7TgQSwrlsmy%2Bl%2BMa5eTDZ0N5BdSP3F5zDKVNaOZodryjBAP0XYFoeeJZU%2B67GyoCI7jTOUk8KCF5FmyFJ0Ou0sAKLE2Rw%2BlzpNaWsGcDUBDMNRwUMtBfjVvsGzEIiZ1tBJmqTyU9DKS8rLiEGiLq6mAGUYDO5cA7e0eet5ecxSN1iiXRvyMJiPIO%2BxnCOE&X-Amz-Signature=6e0b6d8e420af5e264a628c8b7920798e1490a0319bf562d803a66483d625d74&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
