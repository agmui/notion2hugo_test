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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKSV5IJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs%2FUtslkv0wNwPLxGiuAQvkMSq%2FiD1%2BG8wyGQlqQG7sAiB5%2Fd%2FU%2FlSq0mZSa5uQ8NLPy5iHfP0NHUUO6a9rzVxG8SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9s79cqFC5DeWVP0KtwDzD9gvOz7jbDK9cAQS6LJGTlM%2FMwHEg1PxH9FCEoODVP34K2uuB4olUuf7DS%2FPU686tCQYBLgVyhBxh2Sb%2FnCCMC626FHNTkWLeYMLm8BVIVfe3IJA%2Bb9%2FAmIn0O%2Fv%2BGa5LMzirQ9reMUwhgVu0s%2BoTHFjfJ1lw9VFiH%2BlVxvk2jwZy7c31%2BWPRpWhFmrbe5cd3TcGQ2YOAQ5MvJ1ey0Lk4T8KCzKnI4wfyl1Fg5AsqZdXwUJX0uxGeXTiG5Wm6LBQbJ1r2jeaARDm5nbEO11NLHWyw%2Bbz8AEk4wKSd7ml16NhpLnWYWOj1fkfX7H2jT%2Bu4uXaF17gnUrkjDkE4rbWZUH%2B3PDQ3AzFtIzUugN4EwuJk9gm8sr5uvF3w4bHGJhcsIsKQCVosojmd4sPDv51Im42Rg%2FES5q0AkVm36WH2rfnER9cdKNvBT6fQQIi7Q1%2FUJBGzYGo1aI44rbp%2BLeloeHbmMmo%2B7AxUaVzUAYfWM1aotkaPbi%2BhiqXwObfXk2tA96D0NO676CvTzTNEQpyY%2F8m6ygU%2FOdYSD9tLgPm9xrIDyxaq7t15fenRkP5vi1fIF0TPEJ0Ejzen3G4riNql5BcCh%2B9WFNya2jkHMXpMf3broI4asJIPwmG2swseCFwwY6pgFIRJOKiPKGDpZy95iVw42hW9rcjTjeAN0i%2B0Z1UXAinFU8t0dyUzHsHE8emWioqiXGPyQJeNcPjsRX4PMof97KUdp8Fuma5mYG5dz9SwlQ3Vy%2Fs2IvDEGjcquqZuibpwt1MUMe2HC8LVmnqJ7MSYNhddX9rONapcbSWeOWK%2BHCyqNH%2BseFd4G8oZ7fcURX7UVFI6A2VcA8pAsifxfXSfLWyt4xT27K&X-Amz-Signature=b7a18aa3668031371a1953c03e6f083e720fd18979841a2fa2fec454bea00714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKSV5IJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs%2FUtslkv0wNwPLxGiuAQvkMSq%2FiD1%2BG8wyGQlqQG7sAiB5%2Fd%2FU%2FlSq0mZSa5uQ8NLPy5iHfP0NHUUO6a9rzVxG8SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9s79cqFC5DeWVP0KtwDzD9gvOz7jbDK9cAQS6LJGTlM%2FMwHEg1PxH9FCEoODVP34K2uuB4olUuf7DS%2FPU686tCQYBLgVyhBxh2Sb%2FnCCMC626FHNTkWLeYMLm8BVIVfe3IJA%2Bb9%2FAmIn0O%2Fv%2BGa5LMzirQ9reMUwhgVu0s%2BoTHFjfJ1lw9VFiH%2BlVxvk2jwZy7c31%2BWPRpWhFmrbe5cd3TcGQ2YOAQ5MvJ1ey0Lk4T8KCzKnI4wfyl1Fg5AsqZdXwUJX0uxGeXTiG5Wm6LBQbJ1r2jeaARDm5nbEO11NLHWyw%2Bbz8AEk4wKSd7ml16NhpLnWYWOj1fkfX7H2jT%2Bu4uXaF17gnUrkjDkE4rbWZUH%2B3PDQ3AzFtIzUugN4EwuJk9gm8sr5uvF3w4bHGJhcsIsKQCVosojmd4sPDv51Im42Rg%2FES5q0AkVm36WH2rfnER9cdKNvBT6fQQIi7Q1%2FUJBGzYGo1aI44rbp%2BLeloeHbmMmo%2B7AxUaVzUAYfWM1aotkaPbi%2BhiqXwObfXk2tA96D0NO676CvTzTNEQpyY%2F8m6ygU%2FOdYSD9tLgPm9xrIDyxaq7t15fenRkP5vi1fIF0TPEJ0Ejzen3G4riNql5BcCh%2B9WFNya2jkHMXpMf3broI4asJIPwmG2swseCFwwY6pgFIRJOKiPKGDpZy95iVw42hW9rcjTjeAN0i%2B0Z1UXAinFU8t0dyUzHsHE8emWioqiXGPyQJeNcPjsRX4PMof97KUdp8Fuma5mYG5dz9SwlQ3Vy%2Fs2IvDEGjcquqZuibpwt1MUMe2HC8LVmnqJ7MSYNhddX9rONapcbSWeOWK%2BHCyqNH%2BseFd4G8oZ7fcURX7UVFI6A2VcA8pAsifxfXSfLWyt4xT27K&X-Amz-Signature=d3e0e8718f07f4bacd81ff85a2d5903f6210aac6f575b0b6fdab72612fa6c8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKSV5IJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs%2FUtslkv0wNwPLxGiuAQvkMSq%2FiD1%2BG8wyGQlqQG7sAiB5%2Fd%2FU%2FlSq0mZSa5uQ8NLPy5iHfP0NHUUO6a9rzVxG8SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9s79cqFC5DeWVP0KtwDzD9gvOz7jbDK9cAQS6LJGTlM%2FMwHEg1PxH9FCEoODVP34K2uuB4olUuf7DS%2FPU686tCQYBLgVyhBxh2Sb%2FnCCMC626FHNTkWLeYMLm8BVIVfe3IJA%2Bb9%2FAmIn0O%2Fv%2BGa5LMzirQ9reMUwhgVu0s%2BoTHFjfJ1lw9VFiH%2BlVxvk2jwZy7c31%2BWPRpWhFmrbe5cd3TcGQ2YOAQ5MvJ1ey0Lk4T8KCzKnI4wfyl1Fg5AsqZdXwUJX0uxGeXTiG5Wm6LBQbJ1r2jeaARDm5nbEO11NLHWyw%2Bbz8AEk4wKSd7ml16NhpLnWYWOj1fkfX7H2jT%2Bu4uXaF17gnUrkjDkE4rbWZUH%2B3PDQ3AzFtIzUugN4EwuJk9gm8sr5uvF3w4bHGJhcsIsKQCVosojmd4sPDv51Im42Rg%2FES5q0AkVm36WH2rfnER9cdKNvBT6fQQIi7Q1%2FUJBGzYGo1aI44rbp%2BLeloeHbmMmo%2B7AxUaVzUAYfWM1aotkaPbi%2BhiqXwObfXk2tA96D0NO676CvTzTNEQpyY%2F8m6ygU%2FOdYSD9tLgPm9xrIDyxaq7t15fenRkP5vi1fIF0TPEJ0Ejzen3G4riNql5BcCh%2B9WFNya2jkHMXpMf3broI4asJIPwmG2swseCFwwY6pgFIRJOKiPKGDpZy95iVw42hW9rcjTjeAN0i%2B0Z1UXAinFU8t0dyUzHsHE8emWioqiXGPyQJeNcPjsRX4PMof97KUdp8Fuma5mYG5dz9SwlQ3Vy%2Fs2IvDEGjcquqZuibpwt1MUMe2HC8LVmnqJ7MSYNhddX9rONapcbSWeOWK%2BHCyqNH%2BseFd4G8oZ7fcURX7UVFI6A2VcA8pAsifxfXSfLWyt4xT27K&X-Amz-Signature=cc2444cee590ee4129fbba9507df7ae940ed3cf9a8376182207c928426ccdd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKSV5IJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs%2FUtslkv0wNwPLxGiuAQvkMSq%2FiD1%2BG8wyGQlqQG7sAiB5%2Fd%2FU%2FlSq0mZSa5uQ8NLPy5iHfP0NHUUO6a9rzVxG8SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9s79cqFC5DeWVP0KtwDzD9gvOz7jbDK9cAQS6LJGTlM%2FMwHEg1PxH9FCEoODVP34K2uuB4olUuf7DS%2FPU686tCQYBLgVyhBxh2Sb%2FnCCMC626FHNTkWLeYMLm8BVIVfe3IJA%2Bb9%2FAmIn0O%2Fv%2BGa5LMzirQ9reMUwhgVu0s%2BoTHFjfJ1lw9VFiH%2BlVxvk2jwZy7c31%2BWPRpWhFmrbe5cd3TcGQ2YOAQ5MvJ1ey0Lk4T8KCzKnI4wfyl1Fg5AsqZdXwUJX0uxGeXTiG5Wm6LBQbJ1r2jeaARDm5nbEO11NLHWyw%2Bbz8AEk4wKSd7ml16NhpLnWYWOj1fkfX7H2jT%2Bu4uXaF17gnUrkjDkE4rbWZUH%2B3PDQ3AzFtIzUugN4EwuJk9gm8sr5uvF3w4bHGJhcsIsKQCVosojmd4sPDv51Im42Rg%2FES5q0AkVm36WH2rfnER9cdKNvBT6fQQIi7Q1%2FUJBGzYGo1aI44rbp%2BLeloeHbmMmo%2B7AxUaVzUAYfWM1aotkaPbi%2BhiqXwObfXk2tA96D0NO676CvTzTNEQpyY%2F8m6ygU%2FOdYSD9tLgPm9xrIDyxaq7t15fenRkP5vi1fIF0TPEJ0Ejzen3G4riNql5BcCh%2B9WFNya2jkHMXpMf3broI4asJIPwmG2swseCFwwY6pgFIRJOKiPKGDpZy95iVw42hW9rcjTjeAN0i%2B0Z1UXAinFU8t0dyUzHsHE8emWioqiXGPyQJeNcPjsRX4PMof97KUdp8Fuma5mYG5dz9SwlQ3Vy%2Fs2IvDEGjcquqZuibpwt1MUMe2HC8LVmnqJ7MSYNhddX9rONapcbSWeOWK%2BHCyqNH%2BseFd4G8oZ7fcURX7UVFI6A2VcA8pAsifxfXSfLWyt4xT27K&X-Amz-Signature=4931eea007056957b80fbe287781405d7cd2a76300e7c9feb7bb9f7fe1448143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKSV5IJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs%2FUtslkv0wNwPLxGiuAQvkMSq%2FiD1%2BG8wyGQlqQG7sAiB5%2Fd%2FU%2FlSq0mZSa5uQ8NLPy5iHfP0NHUUO6a9rzVxG8SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9s79cqFC5DeWVP0KtwDzD9gvOz7jbDK9cAQS6LJGTlM%2FMwHEg1PxH9FCEoODVP34K2uuB4olUuf7DS%2FPU686tCQYBLgVyhBxh2Sb%2FnCCMC626FHNTkWLeYMLm8BVIVfe3IJA%2Bb9%2FAmIn0O%2Fv%2BGa5LMzirQ9reMUwhgVu0s%2BoTHFjfJ1lw9VFiH%2BlVxvk2jwZy7c31%2BWPRpWhFmrbe5cd3TcGQ2YOAQ5MvJ1ey0Lk4T8KCzKnI4wfyl1Fg5AsqZdXwUJX0uxGeXTiG5Wm6LBQbJ1r2jeaARDm5nbEO11NLHWyw%2Bbz8AEk4wKSd7ml16NhpLnWYWOj1fkfX7H2jT%2Bu4uXaF17gnUrkjDkE4rbWZUH%2B3PDQ3AzFtIzUugN4EwuJk9gm8sr5uvF3w4bHGJhcsIsKQCVosojmd4sPDv51Im42Rg%2FES5q0AkVm36WH2rfnER9cdKNvBT6fQQIi7Q1%2FUJBGzYGo1aI44rbp%2BLeloeHbmMmo%2B7AxUaVzUAYfWM1aotkaPbi%2BhiqXwObfXk2tA96D0NO676CvTzTNEQpyY%2F8m6ygU%2FOdYSD9tLgPm9xrIDyxaq7t15fenRkP5vi1fIF0TPEJ0Ejzen3G4riNql5BcCh%2B9WFNya2jkHMXpMf3broI4asJIPwmG2swseCFwwY6pgFIRJOKiPKGDpZy95iVw42hW9rcjTjeAN0i%2B0Z1UXAinFU8t0dyUzHsHE8emWioqiXGPyQJeNcPjsRX4PMof97KUdp8Fuma5mYG5dz9SwlQ3Vy%2Fs2IvDEGjcquqZuibpwt1MUMe2HC8LVmnqJ7MSYNhddX9rONapcbSWeOWK%2BHCyqNH%2BseFd4G8oZ7fcURX7UVFI6A2VcA8pAsifxfXSfLWyt4xT27K&X-Amz-Signature=a39795dd49524b06e1b88a8c9360b63e4536ce831ed56d630dc4113c8801c799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
