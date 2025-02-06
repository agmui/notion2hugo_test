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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECTVJNY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDc8PAOTIYjWJ7FKILFLBmyrOrOQF2W1LnkK%2B5WO74ofAIhANifb5OcqTO1qTjrtlTDwnWl7cVgGdNqzbroanN8qN1tKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBj7HxzDzX3LsnfkYq3APZLcEjQeUIYEaqgGC1eH7Ud%2FizRGY3rxTjkwFaFkAOO9X3rm%2BmGJPjH4fqW61c37iNdo%2B8OK48ssX27AewlE9Xes%2Fp8k5%2BNkvyBe%2Fpafc6njuwPsJkqBWoG7c9mGgoTSPJ6iH3yiauhCZQrgGicVU9luLwQWK%2BdkJ5O4XEKCD1M8RbdAMaZ8V5onbIfHWHaoWYpVVrDAmgjGNmHyfQiFqItuwQp8%2B9cix%2B4c0cRm1EJYsWsWwA7SAVDGKVU1sHuWy%2FfwEEkw59BPR5nh%2FCLwkDKiOrcqD8FdrcqSzYa1QtFdBlF0fK6bTSCbevg1Ck4Mu25UjftiwlQZrGFUlnSRzha%2B1MB61ibzVGcuyLk1v8hc%2FUlsg8lTOUcStNbrCYJPfVaxmDWOCuLcksesHGKPcZYBm4upMnY1mR31wOmuNud3tYkioSg8gv220WHZ%2FpOIZ65ov5yZt38SwBffuvghb8I8VwXzA1Lqp50b3QHcRGfhy2KU68eU34nTrNRz37MFPVsZ0Vk9lcYNqCl%2BltC65Rmk0WTXt9TDqFhAh2jVyev94PUjNMZxxAHG5BZv1A5pR6bfEM5lWC9ac91b6cKVIiMBinGINPl%2FTKvhrJgBDc7IZsBMTnOPqyh73hjDDa1JG9BjqkASL5RdARlndV%2FIzh9SdB7TZc4kV%2FZ3sfTgl%2BDHBkEjQxiXfccX2x4wv%2Bi8G9q8q3f%2FxJ83U54pdFzaTpVXalgn0ny6doMkVI4ljoInq7Axeo5hdD2vBTICd12MSftLl4vXVBA6Edbs7pg9jvEsdgb%2B%2FaujALuJ6cc1bUMnjYucsVDD5t5DPrLVFgYZgUQgL5D%2B%2FGwLq3JzLdzkRn1CcyQDCrI%2Fmp&X-Amz-Signature=5a022dc7eae2ce6fa79fc5ff683eddfea1258a5514dd23ffe6bec39dd252c09f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECTVJNY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDc8PAOTIYjWJ7FKILFLBmyrOrOQF2W1LnkK%2B5WO74ofAIhANifb5OcqTO1qTjrtlTDwnWl7cVgGdNqzbroanN8qN1tKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBj7HxzDzX3LsnfkYq3APZLcEjQeUIYEaqgGC1eH7Ud%2FizRGY3rxTjkwFaFkAOO9X3rm%2BmGJPjH4fqW61c37iNdo%2B8OK48ssX27AewlE9Xes%2Fp8k5%2BNkvyBe%2Fpafc6njuwPsJkqBWoG7c9mGgoTSPJ6iH3yiauhCZQrgGicVU9luLwQWK%2BdkJ5O4XEKCD1M8RbdAMaZ8V5onbIfHWHaoWYpVVrDAmgjGNmHyfQiFqItuwQp8%2B9cix%2B4c0cRm1EJYsWsWwA7SAVDGKVU1sHuWy%2FfwEEkw59BPR5nh%2FCLwkDKiOrcqD8FdrcqSzYa1QtFdBlF0fK6bTSCbevg1Ck4Mu25UjftiwlQZrGFUlnSRzha%2B1MB61ibzVGcuyLk1v8hc%2FUlsg8lTOUcStNbrCYJPfVaxmDWOCuLcksesHGKPcZYBm4upMnY1mR31wOmuNud3tYkioSg8gv220WHZ%2FpOIZ65ov5yZt38SwBffuvghb8I8VwXzA1Lqp50b3QHcRGfhy2KU68eU34nTrNRz37MFPVsZ0Vk9lcYNqCl%2BltC65Rmk0WTXt9TDqFhAh2jVyev94PUjNMZxxAHG5BZv1A5pR6bfEM5lWC9ac91b6cKVIiMBinGINPl%2FTKvhrJgBDc7IZsBMTnOPqyh73hjDDa1JG9BjqkASL5RdARlndV%2FIzh9SdB7TZc4kV%2FZ3sfTgl%2BDHBkEjQxiXfccX2x4wv%2Bi8G9q8q3f%2FxJ83U54pdFzaTpVXalgn0ny6doMkVI4ljoInq7Axeo5hdD2vBTICd12MSftLl4vXVBA6Edbs7pg9jvEsdgb%2B%2FaujALuJ6cc1bUMnjYucsVDD5t5DPrLVFgYZgUQgL5D%2B%2FGwLq3JzLdzkRn1CcyQDCrI%2Fmp&X-Amz-Signature=d965e6ed7d6c34bc5c71a9ca89aabd632ab19fdf84d16ac14b45a19933209af1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECTVJNY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDc8PAOTIYjWJ7FKILFLBmyrOrOQF2W1LnkK%2B5WO74ofAIhANifb5OcqTO1qTjrtlTDwnWl7cVgGdNqzbroanN8qN1tKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBj7HxzDzX3LsnfkYq3APZLcEjQeUIYEaqgGC1eH7Ud%2FizRGY3rxTjkwFaFkAOO9X3rm%2BmGJPjH4fqW61c37iNdo%2B8OK48ssX27AewlE9Xes%2Fp8k5%2BNkvyBe%2Fpafc6njuwPsJkqBWoG7c9mGgoTSPJ6iH3yiauhCZQrgGicVU9luLwQWK%2BdkJ5O4XEKCD1M8RbdAMaZ8V5onbIfHWHaoWYpVVrDAmgjGNmHyfQiFqItuwQp8%2B9cix%2B4c0cRm1EJYsWsWwA7SAVDGKVU1sHuWy%2FfwEEkw59BPR5nh%2FCLwkDKiOrcqD8FdrcqSzYa1QtFdBlF0fK6bTSCbevg1Ck4Mu25UjftiwlQZrGFUlnSRzha%2B1MB61ibzVGcuyLk1v8hc%2FUlsg8lTOUcStNbrCYJPfVaxmDWOCuLcksesHGKPcZYBm4upMnY1mR31wOmuNud3tYkioSg8gv220WHZ%2FpOIZ65ov5yZt38SwBffuvghb8I8VwXzA1Lqp50b3QHcRGfhy2KU68eU34nTrNRz37MFPVsZ0Vk9lcYNqCl%2BltC65Rmk0WTXt9TDqFhAh2jVyev94PUjNMZxxAHG5BZv1A5pR6bfEM5lWC9ac91b6cKVIiMBinGINPl%2FTKvhrJgBDc7IZsBMTnOPqyh73hjDDa1JG9BjqkASL5RdARlndV%2FIzh9SdB7TZc4kV%2FZ3sfTgl%2BDHBkEjQxiXfccX2x4wv%2Bi8G9q8q3f%2FxJ83U54pdFzaTpVXalgn0ny6doMkVI4ljoInq7Axeo5hdD2vBTICd12MSftLl4vXVBA6Edbs7pg9jvEsdgb%2B%2FaujALuJ6cc1bUMnjYucsVDD5t5DPrLVFgYZgUQgL5D%2B%2FGwLq3JzLdzkRn1CcyQDCrI%2Fmp&X-Amz-Signature=e093381af9e94a6c4f23c1ad6a5c7be77742aeab42a16b67be5dbf46f8427918&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECTVJNY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDc8PAOTIYjWJ7FKILFLBmyrOrOQF2W1LnkK%2B5WO74ofAIhANifb5OcqTO1qTjrtlTDwnWl7cVgGdNqzbroanN8qN1tKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBj7HxzDzX3LsnfkYq3APZLcEjQeUIYEaqgGC1eH7Ud%2FizRGY3rxTjkwFaFkAOO9X3rm%2BmGJPjH4fqW61c37iNdo%2B8OK48ssX27AewlE9Xes%2Fp8k5%2BNkvyBe%2Fpafc6njuwPsJkqBWoG7c9mGgoTSPJ6iH3yiauhCZQrgGicVU9luLwQWK%2BdkJ5O4XEKCD1M8RbdAMaZ8V5onbIfHWHaoWYpVVrDAmgjGNmHyfQiFqItuwQp8%2B9cix%2B4c0cRm1EJYsWsWwA7SAVDGKVU1sHuWy%2FfwEEkw59BPR5nh%2FCLwkDKiOrcqD8FdrcqSzYa1QtFdBlF0fK6bTSCbevg1Ck4Mu25UjftiwlQZrGFUlnSRzha%2B1MB61ibzVGcuyLk1v8hc%2FUlsg8lTOUcStNbrCYJPfVaxmDWOCuLcksesHGKPcZYBm4upMnY1mR31wOmuNud3tYkioSg8gv220WHZ%2FpOIZ65ov5yZt38SwBffuvghb8I8VwXzA1Lqp50b3QHcRGfhy2KU68eU34nTrNRz37MFPVsZ0Vk9lcYNqCl%2BltC65Rmk0WTXt9TDqFhAh2jVyev94PUjNMZxxAHG5BZv1A5pR6bfEM5lWC9ac91b6cKVIiMBinGINPl%2FTKvhrJgBDc7IZsBMTnOPqyh73hjDDa1JG9BjqkASL5RdARlndV%2FIzh9SdB7TZc4kV%2FZ3sfTgl%2BDHBkEjQxiXfccX2x4wv%2Bi8G9q8q3f%2FxJ83U54pdFzaTpVXalgn0ny6doMkVI4ljoInq7Axeo5hdD2vBTICd12MSftLl4vXVBA6Edbs7pg9jvEsdgb%2B%2FaujALuJ6cc1bUMnjYucsVDD5t5DPrLVFgYZgUQgL5D%2B%2FGwLq3JzLdzkRn1CcyQDCrI%2Fmp&X-Amz-Signature=c4af30c3d8d361b3faef514f5951f47f23f50856c476fd9c0e5ebd548464cf3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECTVJNY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDc8PAOTIYjWJ7FKILFLBmyrOrOQF2W1LnkK%2B5WO74ofAIhANifb5OcqTO1qTjrtlTDwnWl7cVgGdNqzbroanN8qN1tKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBj7HxzDzX3LsnfkYq3APZLcEjQeUIYEaqgGC1eH7Ud%2FizRGY3rxTjkwFaFkAOO9X3rm%2BmGJPjH4fqW61c37iNdo%2B8OK48ssX27AewlE9Xes%2Fp8k5%2BNkvyBe%2Fpafc6njuwPsJkqBWoG7c9mGgoTSPJ6iH3yiauhCZQrgGicVU9luLwQWK%2BdkJ5O4XEKCD1M8RbdAMaZ8V5onbIfHWHaoWYpVVrDAmgjGNmHyfQiFqItuwQp8%2B9cix%2B4c0cRm1EJYsWsWwA7SAVDGKVU1sHuWy%2FfwEEkw59BPR5nh%2FCLwkDKiOrcqD8FdrcqSzYa1QtFdBlF0fK6bTSCbevg1Ck4Mu25UjftiwlQZrGFUlnSRzha%2B1MB61ibzVGcuyLk1v8hc%2FUlsg8lTOUcStNbrCYJPfVaxmDWOCuLcksesHGKPcZYBm4upMnY1mR31wOmuNud3tYkioSg8gv220WHZ%2FpOIZ65ov5yZt38SwBffuvghb8I8VwXzA1Lqp50b3QHcRGfhy2KU68eU34nTrNRz37MFPVsZ0Vk9lcYNqCl%2BltC65Rmk0WTXt9TDqFhAh2jVyev94PUjNMZxxAHG5BZv1A5pR6bfEM5lWC9ac91b6cKVIiMBinGINPl%2FTKvhrJgBDc7IZsBMTnOPqyh73hjDDa1JG9BjqkASL5RdARlndV%2FIzh9SdB7TZc4kV%2FZ3sfTgl%2BDHBkEjQxiXfccX2x4wv%2Bi8G9q8q3f%2FxJ83U54pdFzaTpVXalgn0ny6doMkVI4ljoInq7Axeo5hdD2vBTICd12MSftLl4vXVBA6Edbs7pg9jvEsdgb%2B%2FaujALuJ6cc1bUMnjYucsVDD5t5DPrLVFgYZgUQgL5D%2B%2FGwLq3JzLdzkRn1CcyQDCrI%2Fmp&X-Amz-Signature=835461f99cb2e680acd87466bc00668a05b0a922f634f6a1766587a491a43dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
