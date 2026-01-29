---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TC7M2M%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMMOLIdnEK1kRhLz4zjP%2Ftxdv%2FdDzEoz53PcbQ%2BLehAAiEA95KIGtMFb%2FeRMciQNJD3jieyZqDgJcXSvs%2BjmPc9J4kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMxDilvk4355wgqzjCrcA25cBildVavU%2BVz2TluljUNfKq1fkiZ%2FKdX%2FlD8TNm7ZfN5RdwuWiRjlTRRIgfJp1mwhbL4YIIZ7xb%2B3jrji6qEYnWx4WNKiAW83X%2BXoJ%2FNtmfJBSx5e4G3J4yV5EufqNmNnM40LwIbA4%2BH4WgeuORjY9rqPpGGHRatKLMz9I9nJwqurl%2FiLn4JCF2py7J7qMipCiIHMDx40xyVZlaYkF3MA6%2FtDZKMyBySOxIkizVc87Q%2Bs5bkfNa4UkaZXo4jK9gSXV2JuCUPoY7nMuXLzH08GlsSGDnW8pyOC6xekckXR49qzWURvTe4TWlWOyMa1ZzTy1JH58O3y87TThhBv32Dtexz7iVl%2BhvARV4n7Vp6wHI%2BvVNwmKwBNmQaOfe9%2BYETJ8LVnqu7HqCnC97oyQR4bjIVTcno8vXvGMfPwJi3RCf066XziKH2yqQknYR7FGvC%2BO9Plq8C1aWUy3RasWdIS8CAOPQF3RBsbXfwOV0YI9q2d%2Bzpim2dRW1zB1QQ%2B0Inpj8nlpw4BwY4JQKfKquYAJHfOik1jT56EYUHEMpkLsOh0upmOZNwW%2BKA5SMSpTfyjznYs%2FOQ4iNiOn2ZGC9Pi8xNJ3DFtZ9C4RvE0GMmEbYvI9zZWUC5HfEd5MO726ssGOqUBef6u8duLPqC3YN%2BKg0j9BADkB3oTJEvNvWMT6ItZFv9Q20zpJ13fAtDo1kWSfxwG1ogIHWmzS2MCd7FcalzvHAMDdLP7IJ%2Fi6WD96i45QnHbkhpUy577JFZLnI14LV7Va7jTBtwOZsdsadIWabEQtAI7b47ghALxzggceNa2UMbUNlUJPT5A4uAhhMv8bZ5hUDDzCXEX6Okka1mAQflXoBsT%2FAbu&X-Amz-Signature=03f8eb423052c64a620a54dd8d4565a034fe26315e63d49f5041e62d8803f1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TC7M2M%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMMOLIdnEK1kRhLz4zjP%2Ftxdv%2FdDzEoz53PcbQ%2BLehAAiEA95KIGtMFb%2FeRMciQNJD3jieyZqDgJcXSvs%2BjmPc9J4kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMxDilvk4355wgqzjCrcA25cBildVavU%2BVz2TluljUNfKq1fkiZ%2FKdX%2FlD8TNm7ZfN5RdwuWiRjlTRRIgfJp1mwhbL4YIIZ7xb%2B3jrji6qEYnWx4WNKiAW83X%2BXoJ%2FNtmfJBSx5e4G3J4yV5EufqNmNnM40LwIbA4%2BH4WgeuORjY9rqPpGGHRatKLMz9I9nJwqurl%2FiLn4JCF2py7J7qMipCiIHMDx40xyVZlaYkF3MA6%2FtDZKMyBySOxIkizVc87Q%2Bs5bkfNa4UkaZXo4jK9gSXV2JuCUPoY7nMuXLzH08GlsSGDnW8pyOC6xekckXR49qzWURvTe4TWlWOyMa1ZzTy1JH58O3y87TThhBv32Dtexz7iVl%2BhvARV4n7Vp6wHI%2BvVNwmKwBNmQaOfe9%2BYETJ8LVnqu7HqCnC97oyQR4bjIVTcno8vXvGMfPwJi3RCf066XziKH2yqQknYR7FGvC%2BO9Plq8C1aWUy3RasWdIS8CAOPQF3RBsbXfwOV0YI9q2d%2Bzpim2dRW1zB1QQ%2B0Inpj8nlpw4BwY4JQKfKquYAJHfOik1jT56EYUHEMpkLsOh0upmOZNwW%2BKA5SMSpTfyjznYs%2FOQ4iNiOn2ZGC9Pi8xNJ3DFtZ9C4RvE0GMmEbYvI9zZWUC5HfEd5MO726ssGOqUBef6u8duLPqC3YN%2BKg0j9BADkB3oTJEvNvWMT6ItZFv9Q20zpJ13fAtDo1kWSfxwG1ogIHWmzS2MCd7FcalzvHAMDdLP7IJ%2Fi6WD96i45QnHbkhpUy577JFZLnI14LV7Va7jTBtwOZsdsadIWabEQtAI7b47ghALxzggceNa2UMbUNlUJPT5A4uAhhMv8bZ5hUDDzCXEX6Okka1mAQflXoBsT%2FAbu&X-Amz-Signature=23c107d0372b32cf44ea6b9411dd25c2c4288bd582d5e0f30f8be405c814d41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TC7M2M%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMMOLIdnEK1kRhLz4zjP%2Ftxdv%2FdDzEoz53PcbQ%2BLehAAiEA95KIGtMFb%2FeRMciQNJD3jieyZqDgJcXSvs%2BjmPc9J4kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMxDilvk4355wgqzjCrcA25cBildVavU%2BVz2TluljUNfKq1fkiZ%2FKdX%2FlD8TNm7ZfN5RdwuWiRjlTRRIgfJp1mwhbL4YIIZ7xb%2B3jrji6qEYnWx4WNKiAW83X%2BXoJ%2FNtmfJBSx5e4G3J4yV5EufqNmNnM40LwIbA4%2BH4WgeuORjY9rqPpGGHRatKLMz9I9nJwqurl%2FiLn4JCF2py7J7qMipCiIHMDx40xyVZlaYkF3MA6%2FtDZKMyBySOxIkizVc87Q%2Bs5bkfNa4UkaZXo4jK9gSXV2JuCUPoY7nMuXLzH08GlsSGDnW8pyOC6xekckXR49qzWURvTe4TWlWOyMa1ZzTy1JH58O3y87TThhBv32Dtexz7iVl%2BhvARV4n7Vp6wHI%2BvVNwmKwBNmQaOfe9%2BYETJ8LVnqu7HqCnC97oyQR4bjIVTcno8vXvGMfPwJi3RCf066XziKH2yqQknYR7FGvC%2BO9Plq8C1aWUy3RasWdIS8CAOPQF3RBsbXfwOV0YI9q2d%2Bzpim2dRW1zB1QQ%2B0Inpj8nlpw4BwY4JQKfKquYAJHfOik1jT56EYUHEMpkLsOh0upmOZNwW%2BKA5SMSpTfyjznYs%2FOQ4iNiOn2ZGC9Pi8xNJ3DFtZ9C4RvE0GMmEbYvI9zZWUC5HfEd5MO726ssGOqUBef6u8duLPqC3YN%2BKg0j9BADkB3oTJEvNvWMT6ItZFv9Q20zpJ13fAtDo1kWSfxwG1ogIHWmzS2MCd7FcalzvHAMDdLP7IJ%2Fi6WD96i45QnHbkhpUy577JFZLnI14LV7Va7jTBtwOZsdsadIWabEQtAI7b47ghALxzggceNa2UMbUNlUJPT5A4uAhhMv8bZ5hUDDzCXEX6Okka1mAQflXoBsT%2FAbu&X-Amz-Signature=e2c822ca4a3b535b49274ff6d5073390ca5028f267f275d6464d8cf0c426f118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TC7M2M%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMMOLIdnEK1kRhLz4zjP%2Ftxdv%2FdDzEoz53PcbQ%2BLehAAiEA95KIGtMFb%2FeRMciQNJD3jieyZqDgJcXSvs%2BjmPc9J4kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMxDilvk4355wgqzjCrcA25cBildVavU%2BVz2TluljUNfKq1fkiZ%2FKdX%2FlD8TNm7ZfN5RdwuWiRjlTRRIgfJp1mwhbL4YIIZ7xb%2B3jrji6qEYnWx4WNKiAW83X%2BXoJ%2FNtmfJBSx5e4G3J4yV5EufqNmNnM40LwIbA4%2BH4WgeuORjY9rqPpGGHRatKLMz9I9nJwqurl%2FiLn4JCF2py7J7qMipCiIHMDx40xyVZlaYkF3MA6%2FtDZKMyBySOxIkizVc87Q%2Bs5bkfNa4UkaZXo4jK9gSXV2JuCUPoY7nMuXLzH08GlsSGDnW8pyOC6xekckXR49qzWURvTe4TWlWOyMa1ZzTy1JH58O3y87TThhBv32Dtexz7iVl%2BhvARV4n7Vp6wHI%2BvVNwmKwBNmQaOfe9%2BYETJ8LVnqu7HqCnC97oyQR4bjIVTcno8vXvGMfPwJi3RCf066XziKH2yqQknYR7FGvC%2BO9Plq8C1aWUy3RasWdIS8CAOPQF3RBsbXfwOV0YI9q2d%2Bzpim2dRW1zB1QQ%2B0Inpj8nlpw4BwY4JQKfKquYAJHfOik1jT56EYUHEMpkLsOh0upmOZNwW%2BKA5SMSpTfyjznYs%2FOQ4iNiOn2ZGC9Pi8xNJ3DFtZ9C4RvE0GMmEbYvI9zZWUC5HfEd5MO726ssGOqUBef6u8duLPqC3YN%2BKg0j9BADkB3oTJEvNvWMT6ItZFv9Q20zpJ13fAtDo1kWSfxwG1ogIHWmzS2MCd7FcalzvHAMDdLP7IJ%2Fi6WD96i45QnHbkhpUy577JFZLnI14LV7Va7jTBtwOZsdsadIWabEQtAI7b47ghALxzggceNa2UMbUNlUJPT5A4uAhhMv8bZ5hUDDzCXEX6Okka1mAQflXoBsT%2FAbu&X-Amz-Signature=3d2632d9966072a48e375dda597a24ae2f1aba235443f4a01a5e18cc17533b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TC7M2M%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMMOLIdnEK1kRhLz4zjP%2Ftxdv%2FdDzEoz53PcbQ%2BLehAAiEA95KIGtMFb%2FeRMciQNJD3jieyZqDgJcXSvs%2BjmPc9J4kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMxDilvk4355wgqzjCrcA25cBildVavU%2BVz2TluljUNfKq1fkiZ%2FKdX%2FlD8TNm7ZfN5RdwuWiRjlTRRIgfJp1mwhbL4YIIZ7xb%2B3jrji6qEYnWx4WNKiAW83X%2BXoJ%2FNtmfJBSx5e4G3J4yV5EufqNmNnM40LwIbA4%2BH4WgeuORjY9rqPpGGHRatKLMz9I9nJwqurl%2FiLn4JCF2py7J7qMipCiIHMDx40xyVZlaYkF3MA6%2FtDZKMyBySOxIkizVc87Q%2Bs5bkfNa4UkaZXo4jK9gSXV2JuCUPoY7nMuXLzH08GlsSGDnW8pyOC6xekckXR49qzWURvTe4TWlWOyMa1ZzTy1JH58O3y87TThhBv32Dtexz7iVl%2BhvARV4n7Vp6wHI%2BvVNwmKwBNmQaOfe9%2BYETJ8LVnqu7HqCnC97oyQR4bjIVTcno8vXvGMfPwJi3RCf066XziKH2yqQknYR7FGvC%2BO9Plq8C1aWUy3RasWdIS8CAOPQF3RBsbXfwOV0YI9q2d%2Bzpim2dRW1zB1QQ%2B0Inpj8nlpw4BwY4JQKfKquYAJHfOik1jT56EYUHEMpkLsOh0upmOZNwW%2BKA5SMSpTfyjznYs%2FOQ4iNiOn2ZGC9Pi8xNJ3DFtZ9C4RvE0GMmEbYvI9zZWUC5HfEd5MO726ssGOqUBef6u8duLPqC3YN%2BKg0j9BADkB3oTJEvNvWMT6ItZFv9Q20zpJ13fAtDo1kWSfxwG1ogIHWmzS2MCd7FcalzvHAMDdLP7IJ%2Fi6WD96i45QnHbkhpUy577JFZLnI14LV7Va7jTBtwOZsdsadIWabEQtAI7b47ghALxzggceNa2UMbUNlUJPT5A4uAhhMv8bZ5hUDDzCXEX6Okka1mAQflXoBsT%2FAbu&X-Amz-Signature=06f075f1319584b8fdfc592e81bfc1e9cf4e94832c0fb7d3443228085d0fb205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
