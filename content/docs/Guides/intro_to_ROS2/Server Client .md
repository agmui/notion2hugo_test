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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWT2S5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIU%2F9CYEcuii8rkJGXIXKbA5CfQSdycYpNzGJrqpRW%2BwIgew6D9ef6%2FX8EQOEIHP7HCGTZjudISSChtLWjQgBQkvcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMW8CJ1KGpOW26PGoCrcA9tZyStODg7Fid9QY%2FJcUgn2UzH79olOsEOM6W%2BGk4u4kYMKAsGwEBiSzrzypxajn9jnejmfzyCvptu7j8zkxY9oSECe17YIzwEX3q92ypfsEh0uLsVKVcksBylgUi0W%2FYj%2BlELDM%2FiFfXdtY0QIUuBAZZGQT01QoZQQ92HsINFYoQs8JzXQninXhX%2BVWLBsqOhjUTFVxxCm1PfQ0CX3gKOfKSqS6KUnbgXCvK8NDis9WIRJX2dlutxbhTsV8ysjlkvcWLcqF4vZ1lUfQUt3Ggfls2D08YEg9HPk0MdU3cO89zlYJm%2BJY2BXOmfUu1na1qXDGo3cOOSeKbaJIhNe%2FnGWrmg1bzbpfY1ojAIQDLSs9ua0SnQ1HeiWvvFTAh8cSsfEFeoikgG75QoLMmJMwHbQqgFUWK%2BFBwcYKeKoXDSxMPbQI%2FQqeWWMpDmudpXyTNdMxu6S2ICfi1j4vToWcs65sqFTwSoHCVLF21enlptQtn549KHzK5psSOr2kNHaZpEG61sa2U%2BZqUv05cRuMFCO9Cv2yKZxnI67MrucrrKD0SLLzlJ4fVyw3m1sm2u9jfmW6HqDYJkeiXANAXjD%2BJ8cT9zuKMHPb0EXCG%2Fj%2BzDVmkw3bfkPLy6zTPo4MMyF1MMGOqUBXtenAIqACuRUa6wZKIpwVqYWWkf1DIQHNSHpk7BbgcXuCP5LkDz6oNzowdE7rcWYaPVIzPDhe14j8FjXh0pO48qKRr8%2FNP2dTpWWU6dBY0k1kyvfLd2ZZNTGjYIn965lj%2FFtak6iAr3A%2FCJmTFtxTnf46ZKrDv2lk5NXvHZhGc0JAQEt2NW48zLwowxrDSgl2hgCNBlHiNI%2FvExXglwCNV75T8ny&X-Amz-Signature=49540d2130b4880726f52fbf0ec88c3d35c6f5ab5234349c772b9425bdbc5757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWT2S5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIU%2F9CYEcuii8rkJGXIXKbA5CfQSdycYpNzGJrqpRW%2BwIgew6D9ef6%2FX8EQOEIHP7HCGTZjudISSChtLWjQgBQkvcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMW8CJ1KGpOW26PGoCrcA9tZyStODg7Fid9QY%2FJcUgn2UzH79olOsEOM6W%2BGk4u4kYMKAsGwEBiSzrzypxajn9jnejmfzyCvptu7j8zkxY9oSECe17YIzwEX3q92ypfsEh0uLsVKVcksBylgUi0W%2FYj%2BlELDM%2FiFfXdtY0QIUuBAZZGQT01QoZQQ92HsINFYoQs8JzXQninXhX%2BVWLBsqOhjUTFVxxCm1PfQ0CX3gKOfKSqS6KUnbgXCvK8NDis9WIRJX2dlutxbhTsV8ysjlkvcWLcqF4vZ1lUfQUt3Ggfls2D08YEg9HPk0MdU3cO89zlYJm%2BJY2BXOmfUu1na1qXDGo3cOOSeKbaJIhNe%2FnGWrmg1bzbpfY1ojAIQDLSs9ua0SnQ1HeiWvvFTAh8cSsfEFeoikgG75QoLMmJMwHbQqgFUWK%2BFBwcYKeKoXDSxMPbQI%2FQqeWWMpDmudpXyTNdMxu6S2ICfi1j4vToWcs65sqFTwSoHCVLF21enlptQtn549KHzK5psSOr2kNHaZpEG61sa2U%2BZqUv05cRuMFCO9Cv2yKZxnI67MrucrrKD0SLLzlJ4fVyw3m1sm2u9jfmW6HqDYJkeiXANAXjD%2BJ8cT9zuKMHPb0EXCG%2Fj%2BzDVmkw3bfkPLy6zTPo4MMyF1MMGOqUBXtenAIqACuRUa6wZKIpwVqYWWkf1DIQHNSHpk7BbgcXuCP5LkDz6oNzowdE7rcWYaPVIzPDhe14j8FjXh0pO48qKRr8%2FNP2dTpWWU6dBY0k1kyvfLd2ZZNTGjYIn965lj%2FFtak6iAr3A%2FCJmTFtxTnf46ZKrDv2lk5NXvHZhGc0JAQEt2NW48zLwowxrDSgl2hgCNBlHiNI%2FvExXglwCNV75T8ny&X-Amz-Signature=221ae9d34c44b78fe5b31401335a5717dd801fcebf5e6c4ce542169a9e1ccda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWT2S5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIU%2F9CYEcuii8rkJGXIXKbA5CfQSdycYpNzGJrqpRW%2BwIgew6D9ef6%2FX8EQOEIHP7HCGTZjudISSChtLWjQgBQkvcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMW8CJ1KGpOW26PGoCrcA9tZyStODg7Fid9QY%2FJcUgn2UzH79olOsEOM6W%2BGk4u4kYMKAsGwEBiSzrzypxajn9jnejmfzyCvptu7j8zkxY9oSECe17YIzwEX3q92ypfsEh0uLsVKVcksBylgUi0W%2FYj%2BlELDM%2FiFfXdtY0QIUuBAZZGQT01QoZQQ92HsINFYoQs8JzXQninXhX%2BVWLBsqOhjUTFVxxCm1PfQ0CX3gKOfKSqS6KUnbgXCvK8NDis9WIRJX2dlutxbhTsV8ysjlkvcWLcqF4vZ1lUfQUt3Ggfls2D08YEg9HPk0MdU3cO89zlYJm%2BJY2BXOmfUu1na1qXDGo3cOOSeKbaJIhNe%2FnGWrmg1bzbpfY1ojAIQDLSs9ua0SnQ1HeiWvvFTAh8cSsfEFeoikgG75QoLMmJMwHbQqgFUWK%2BFBwcYKeKoXDSxMPbQI%2FQqeWWMpDmudpXyTNdMxu6S2ICfi1j4vToWcs65sqFTwSoHCVLF21enlptQtn549KHzK5psSOr2kNHaZpEG61sa2U%2BZqUv05cRuMFCO9Cv2yKZxnI67MrucrrKD0SLLzlJ4fVyw3m1sm2u9jfmW6HqDYJkeiXANAXjD%2BJ8cT9zuKMHPb0EXCG%2Fj%2BzDVmkw3bfkPLy6zTPo4MMyF1MMGOqUBXtenAIqACuRUa6wZKIpwVqYWWkf1DIQHNSHpk7BbgcXuCP5LkDz6oNzowdE7rcWYaPVIzPDhe14j8FjXh0pO48qKRr8%2FNP2dTpWWU6dBY0k1kyvfLd2ZZNTGjYIn965lj%2FFtak6iAr3A%2FCJmTFtxTnf46ZKrDv2lk5NXvHZhGc0JAQEt2NW48zLwowxrDSgl2hgCNBlHiNI%2FvExXglwCNV75T8ny&X-Amz-Signature=f49f062328f516868b5958267aa9a327a2eee7dacaae94b57b3f4aef9fe370dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWT2S5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIU%2F9CYEcuii8rkJGXIXKbA5CfQSdycYpNzGJrqpRW%2BwIgew6D9ef6%2FX8EQOEIHP7HCGTZjudISSChtLWjQgBQkvcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMW8CJ1KGpOW26PGoCrcA9tZyStODg7Fid9QY%2FJcUgn2UzH79olOsEOM6W%2BGk4u4kYMKAsGwEBiSzrzypxajn9jnejmfzyCvptu7j8zkxY9oSECe17YIzwEX3q92ypfsEh0uLsVKVcksBylgUi0W%2FYj%2BlELDM%2FiFfXdtY0QIUuBAZZGQT01QoZQQ92HsINFYoQs8JzXQninXhX%2BVWLBsqOhjUTFVxxCm1PfQ0CX3gKOfKSqS6KUnbgXCvK8NDis9WIRJX2dlutxbhTsV8ysjlkvcWLcqF4vZ1lUfQUt3Ggfls2D08YEg9HPk0MdU3cO89zlYJm%2BJY2BXOmfUu1na1qXDGo3cOOSeKbaJIhNe%2FnGWrmg1bzbpfY1ojAIQDLSs9ua0SnQ1HeiWvvFTAh8cSsfEFeoikgG75QoLMmJMwHbQqgFUWK%2BFBwcYKeKoXDSxMPbQI%2FQqeWWMpDmudpXyTNdMxu6S2ICfi1j4vToWcs65sqFTwSoHCVLF21enlptQtn549KHzK5psSOr2kNHaZpEG61sa2U%2BZqUv05cRuMFCO9Cv2yKZxnI67MrucrrKD0SLLzlJ4fVyw3m1sm2u9jfmW6HqDYJkeiXANAXjD%2BJ8cT9zuKMHPb0EXCG%2Fj%2BzDVmkw3bfkPLy6zTPo4MMyF1MMGOqUBXtenAIqACuRUa6wZKIpwVqYWWkf1DIQHNSHpk7BbgcXuCP5LkDz6oNzowdE7rcWYaPVIzPDhe14j8FjXh0pO48qKRr8%2FNP2dTpWWU6dBY0k1kyvfLd2ZZNTGjYIn965lj%2FFtak6iAr3A%2FCJmTFtxTnf46ZKrDv2lk5NXvHZhGc0JAQEt2NW48zLwowxrDSgl2hgCNBlHiNI%2FvExXglwCNV75T8ny&X-Amz-Signature=fd039871e9d1e38d9585bca3b8b6f9c0535cf7da9d93c747913134c818f74921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWT2S5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIU%2F9CYEcuii8rkJGXIXKbA5CfQSdycYpNzGJrqpRW%2BwIgew6D9ef6%2FX8EQOEIHP7HCGTZjudISSChtLWjQgBQkvcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMW8CJ1KGpOW26PGoCrcA9tZyStODg7Fid9QY%2FJcUgn2UzH79olOsEOM6W%2BGk4u4kYMKAsGwEBiSzrzypxajn9jnejmfzyCvptu7j8zkxY9oSECe17YIzwEX3q92ypfsEh0uLsVKVcksBylgUi0W%2FYj%2BlELDM%2FiFfXdtY0QIUuBAZZGQT01QoZQQ92HsINFYoQs8JzXQninXhX%2BVWLBsqOhjUTFVxxCm1PfQ0CX3gKOfKSqS6KUnbgXCvK8NDis9WIRJX2dlutxbhTsV8ysjlkvcWLcqF4vZ1lUfQUt3Ggfls2D08YEg9HPk0MdU3cO89zlYJm%2BJY2BXOmfUu1na1qXDGo3cOOSeKbaJIhNe%2FnGWrmg1bzbpfY1ojAIQDLSs9ua0SnQ1HeiWvvFTAh8cSsfEFeoikgG75QoLMmJMwHbQqgFUWK%2BFBwcYKeKoXDSxMPbQI%2FQqeWWMpDmudpXyTNdMxu6S2ICfi1j4vToWcs65sqFTwSoHCVLF21enlptQtn549KHzK5psSOr2kNHaZpEG61sa2U%2BZqUv05cRuMFCO9Cv2yKZxnI67MrucrrKD0SLLzlJ4fVyw3m1sm2u9jfmW6HqDYJkeiXANAXjD%2BJ8cT9zuKMHPb0EXCG%2Fj%2BzDVmkw3bfkPLy6zTPo4MMyF1MMGOqUBXtenAIqACuRUa6wZKIpwVqYWWkf1DIQHNSHpk7BbgcXuCP5LkDz6oNzowdE7rcWYaPVIzPDhe14j8FjXh0pO48qKRr8%2FNP2dTpWWU6dBY0k1kyvfLd2ZZNTGjYIn965lj%2FFtak6iAr3A%2FCJmTFtxTnf46ZKrDv2lk5NXvHZhGc0JAQEt2NW48zLwowxrDSgl2hgCNBlHiNI%2FvExXglwCNV75T8ny&X-Amz-Signature=1386fb9c5ffb9053b17790e1a24ec261053c606452728647154f053217b747b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
