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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWN5XH3Z%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuYgrilZQnARMcqtwIoTul6l8CKSszxKdPh21PiZB64QIhAPlt1rSfyasxorvsezeYru%2BalKG%2BI2F1IoUTFipLWhvDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWz55%2BZaXAAdKDQ50q3AOvc8y3VAWqJuAvk5E4Z5C8JEFkMQ7s2%2BMDzOr3j%2F2fi31xfnAoWOmvyQ2ywYvNszbakN15ttug7Mhyq7jowIbAtz6zXNu%2BLpV89BUsXaLndD5608QWayVKyfj5ynJypEKFLhVLkF%2FJVHB9vB8%2F5Ixi8DaRnvFEhv00VQig%2BZsecPRmdL4iTlG2FxrxsJGGUbpmLCnwB1NdoWX%2BpBoGgvJ0Z%2BTGJAoF1mJZYKqsCLx%2B5vesk35RDlAvEvTTJAccE1Ihipo8Ea7IUQVRxzJOaCJZKMotbn9iEd2mnhkSxDu%2Ft6povWhlglBZTKy60ndkJxd1a53aCWt%2FKZ3oxnYCVOawJN0d6E1ofHFRboGaYkNVKeKyTV12Eq4vvPuhFpgnt8jLF7R%2BZH8rEsZ%2FTJaGp6%2FAhEqOY4zvuzV7N2MLrFgVQmfWwBqov2FqBYssu3xIPDyv4ZPcMwqahXH0sP3Ng7AUE7bIZ8y65SFk7%2B9EAdsWq1VIZ9xIOC%2BoK25%2FEd5AgnWCtM210eCcOb6S8rgVLy3rYkR1zwShqzqiZwAln2sxFe3HziyJkzfWzofkG2OFVZcsgxs%2BlIdjUzNzivM6ksT%2FE2sbSMZpBN8%2BvKxYkC5nAXxQN1QcvdVazVnLZTDAy%2BjBBjqkAdSnultqgJV1UMMIX%2FIPXb20wiQkHFnoJWChxVRKj3imuEw%2B5HIl2ZQSxYh2NplMLgkg1PIu%2BcaSobVVN9ZjQ2uMUsPNjpiQ%2Fihgoqz40tYyL%2FT7nKhlqfC64VZrVgGvCY%2B1S%2FrEuGZehKId9BpVQN%2BSv3D3roFcogRn%2Fv9aXW4ktMJxOasjmzSEM5vtOI11ITMGyd1TLteLn465yH6SQjuLJMOJ&X-Amz-Signature=c14eed3c9ca2818f1ec1162888109b770c89a4d077df861ad4b26cf5c782b5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWN5XH3Z%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuYgrilZQnARMcqtwIoTul6l8CKSszxKdPh21PiZB64QIhAPlt1rSfyasxorvsezeYru%2BalKG%2BI2F1IoUTFipLWhvDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWz55%2BZaXAAdKDQ50q3AOvc8y3VAWqJuAvk5E4Z5C8JEFkMQ7s2%2BMDzOr3j%2F2fi31xfnAoWOmvyQ2ywYvNszbakN15ttug7Mhyq7jowIbAtz6zXNu%2BLpV89BUsXaLndD5608QWayVKyfj5ynJypEKFLhVLkF%2FJVHB9vB8%2F5Ixi8DaRnvFEhv00VQig%2BZsecPRmdL4iTlG2FxrxsJGGUbpmLCnwB1NdoWX%2BpBoGgvJ0Z%2BTGJAoF1mJZYKqsCLx%2B5vesk35RDlAvEvTTJAccE1Ihipo8Ea7IUQVRxzJOaCJZKMotbn9iEd2mnhkSxDu%2Ft6povWhlglBZTKy60ndkJxd1a53aCWt%2FKZ3oxnYCVOawJN0d6E1ofHFRboGaYkNVKeKyTV12Eq4vvPuhFpgnt8jLF7R%2BZH8rEsZ%2FTJaGp6%2FAhEqOY4zvuzV7N2MLrFgVQmfWwBqov2FqBYssu3xIPDyv4ZPcMwqahXH0sP3Ng7AUE7bIZ8y65SFk7%2B9EAdsWq1VIZ9xIOC%2BoK25%2FEd5AgnWCtM210eCcOb6S8rgVLy3rYkR1zwShqzqiZwAln2sxFe3HziyJkzfWzofkG2OFVZcsgxs%2BlIdjUzNzivM6ksT%2FE2sbSMZpBN8%2BvKxYkC5nAXxQN1QcvdVazVnLZTDAy%2BjBBjqkAdSnultqgJV1UMMIX%2FIPXb20wiQkHFnoJWChxVRKj3imuEw%2B5HIl2ZQSxYh2NplMLgkg1PIu%2BcaSobVVN9ZjQ2uMUsPNjpiQ%2Fihgoqz40tYyL%2FT7nKhlqfC64VZrVgGvCY%2B1S%2FrEuGZehKId9BpVQN%2BSv3D3roFcogRn%2Fv9aXW4ktMJxOasjmzSEM5vtOI11ITMGyd1TLteLn465yH6SQjuLJMOJ&X-Amz-Signature=d713ea9c9712130f39cbcb7f850ffa5e87ee20d7c8d9d52129214e8e9721f2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWN5XH3Z%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuYgrilZQnARMcqtwIoTul6l8CKSszxKdPh21PiZB64QIhAPlt1rSfyasxorvsezeYru%2BalKG%2BI2F1IoUTFipLWhvDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWz55%2BZaXAAdKDQ50q3AOvc8y3VAWqJuAvk5E4Z5C8JEFkMQ7s2%2BMDzOr3j%2F2fi31xfnAoWOmvyQ2ywYvNszbakN15ttug7Mhyq7jowIbAtz6zXNu%2BLpV89BUsXaLndD5608QWayVKyfj5ynJypEKFLhVLkF%2FJVHB9vB8%2F5Ixi8DaRnvFEhv00VQig%2BZsecPRmdL4iTlG2FxrxsJGGUbpmLCnwB1NdoWX%2BpBoGgvJ0Z%2BTGJAoF1mJZYKqsCLx%2B5vesk35RDlAvEvTTJAccE1Ihipo8Ea7IUQVRxzJOaCJZKMotbn9iEd2mnhkSxDu%2Ft6povWhlglBZTKy60ndkJxd1a53aCWt%2FKZ3oxnYCVOawJN0d6E1ofHFRboGaYkNVKeKyTV12Eq4vvPuhFpgnt8jLF7R%2BZH8rEsZ%2FTJaGp6%2FAhEqOY4zvuzV7N2MLrFgVQmfWwBqov2FqBYssu3xIPDyv4ZPcMwqahXH0sP3Ng7AUE7bIZ8y65SFk7%2B9EAdsWq1VIZ9xIOC%2BoK25%2FEd5AgnWCtM210eCcOb6S8rgVLy3rYkR1zwShqzqiZwAln2sxFe3HziyJkzfWzofkG2OFVZcsgxs%2BlIdjUzNzivM6ksT%2FE2sbSMZpBN8%2BvKxYkC5nAXxQN1QcvdVazVnLZTDAy%2BjBBjqkAdSnultqgJV1UMMIX%2FIPXb20wiQkHFnoJWChxVRKj3imuEw%2B5HIl2ZQSxYh2NplMLgkg1PIu%2BcaSobVVN9ZjQ2uMUsPNjpiQ%2Fihgoqz40tYyL%2FT7nKhlqfC64VZrVgGvCY%2B1S%2FrEuGZehKId9BpVQN%2BSv3D3roFcogRn%2Fv9aXW4ktMJxOasjmzSEM5vtOI11ITMGyd1TLteLn465yH6SQjuLJMOJ&X-Amz-Signature=86197317d5513372564eac7e700fa8271491fd781b7b3d574d35cf0ee953a7da&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWN5XH3Z%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuYgrilZQnARMcqtwIoTul6l8CKSszxKdPh21PiZB64QIhAPlt1rSfyasxorvsezeYru%2BalKG%2BI2F1IoUTFipLWhvDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWz55%2BZaXAAdKDQ50q3AOvc8y3VAWqJuAvk5E4Z5C8JEFkMQ7s2%2BMDzOr3j%2F2fi31xfnAoWOmvyQ2ywYvNszbakN15ttug7Mhyq7jowIbAtz6zXNu%2BLpV89BUsXaLndD5608QWayVKyfj5ynJypEKFLhVLkF%2FJVHB9vB8%2F5Ixi8DaRnvFEhv00VQig%2BZsecPRmdL4iTlG2FxrxsJGGUbpmLCnwB1NdoWX%2BpBoGgvJ0Z%2BTGJAoF1mJZYKqsCLx%2B5vesk35RDlAvEvTTJAccE1Ihipo8Ea7IUQVRxzJOaCJZKMotbn9iEd2mnhkSxDu%2Ft6povWhlglBZTKy60ndkJxd1a53aCWt%2FKZ3oxnYCVOawJN0d6E1ofHFRboGaYkNVKeKyTV12Eq4vvPuhFpgnt8jLF7R%2BZH8rEsZ%2FTJaGp6%2FAhEqOY4zvuzV7N2MLrFgVQmfWwBqov2FqBYssu3xIPDyv4ZPcMwqahXH0sP3Ng7AUE7bIZ8y65SFk7%2B9EAdsWq1VIZ9xIOC%2BoK25%2FEd5AgnWCtM210eCcOb6S8rgVLy3rYkR1zwShqzqiZwAln2sxFe3HziyJkzfWzofkG2OFVZcsgxs%2BlIdjUzNzivM6ksT%2FE2sbSMZpBN8%2BvKxYkC5nAXxQN1QcvdVazVnLZTDAy%2BjBBjqkAdSnultqgJV1UMMIX%2FIPXb20wiQkHFnoJWChxVRKj3imuEw%2B5HIl2ZQSxYh2NplMLgkg1PIu%2BcaSobVVN9ZjQ2uMUsPNjpiQ%2Fihgoqz40tYyL%2FT7nKhlqfC64VZrVgGvCY%2B1S%2FrEuGZehKId9BpVQN%2BSv3D3roFcogRn%2Fv9aXW4ktMJxOasjmzSEM5vtOI11ITMGyd1TLteLn465yH6SQjuLJMOJ&X-Amz-Signature=3fa52c5adae76db7cca81a9b484bfb3f3f8d351f0abc6df1efc1cc8b363b4c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWN5XH3Z%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuYgrilZQnARMcqtwIoTul6l8CKSszxKdPh21PiZB64QIhAPlt1rSfyasxorvsezeYru%2BalKG%2BI2F1IoUTFipLWhvDKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWz55%2BZaXAAdKDQ50q3AOvc8y3VAWqJuAvk5E4Z5C8JEFkMQ7s2%2BMDzOr3j%2F2fi31xfnAoWOmvyQ2ywYvNszbakN15ttug7Mhyq7jowIbAtz6zXNu%2BLpV89BUsXaLndD5608QWayVKyfj5ynJypEKFLhVLkF%2FJVHB9vB8%2F5Ixi8DaRnvFEhv00VQig%2BZsecPRmdL4iTlG2FxrxsJGGUbpmLCnwB1NdoWX%2BpBoGgvJ0Z%2BTGJAoF1mJZYKqsCLx%2B5vesk35RDlAvEvTTJAccE1Ihipo8Ea7IUQVRxzJOaCJZKMotbn9iEd2mnhkSxDu%2Ft6povWhlglBZTKy60ndkJxd1a53aCWt%2FKZ3oxnYCVOawJN0d6E1ofHFRboGaYkNVKeKyTV12Eq4vvPuhFpgnt8jLF7R%2BZH8rEsZ%2FTJaGp6%2FAhEqOY4zvuzV7N2MLrFgVQmfWwBqov2FqBYssu3xIPDyv4ZPcMwqahXH0sP3Ng7AUE7bIZ8y65SFk7%2B9EAdsWq1VIZ9xIOC%2BoK25%2FEd5AgnWCtM210eCcOb6S8rgVLy3rYkR1zwShqzqiZwAln2sxFe3HziyJkzfWzofkG2OFVZcsgxs%2BlIdjUzNzivM6ksT%2FE2sbSMZpBN8%2BvKxYkC5nAXxQN1QcvdVazVnLZTDAy%2BjBBjqkAdSnultqgJV1UMMIX%2FIPXb20wiQkHFnoJWChxVRKj3imuEw%2B5HIl2ZQSxYh2NplMLgkg1PIu%2BcaSobVVN9ZjQ2uMUsPNjpiQ%2Fihgoqz40tYyL%2FT7nKhlqfC64VZrVgGvCY%2B1S%2FrEuGZehKId9BpVQN%2BSv3D3roFcogRn%2Fv9aXW4ktMJxOasjmzSEM5vtOI11ITMGyd1TLteLn465yH6SQjuLJMOJ&X-Amz-Signature=afdf6ca7271f90519f9d230697d704229ac0477e590cdf3f087a85bb81ce1561&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
