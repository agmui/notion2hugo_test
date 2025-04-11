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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQGNDH3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD%2FieiNcWsC4DmB4DDnVr%2BP5n%2FitRgQub230Krnmr0iEwIgSy%2BoYp1QWkU%2FiDv9lrQFozdg7UcrwpBsziMCR5WZ4TgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5mZVyf%2BfYQapGsOyrcA77ppyOqzdWPQyw0xr9AnpijHi3kWgiP4W7fDkDnUBh%2BRrFgAHMNAklqJ2ihmbTN3dt4AhetWe77M6i3GDnjW8s2NNBc1OvCL51pSeQaTWgj165tzVAuYUEdHWuIU5MZYpKU5QDuafDKgJ12fu1PZOAoWg8iOCfh%2BiN%2B3SI0HO2RIGYgWeHs0mYh5Tr31G8h%2F1Zf5rZ%2BJ6r5NqXC%2BMamrtV6OJZv087GwDVUSowHas5M4hiTU27k%2BCfhUfK81F9ev2wwSTIdZ5giiHG8BzL4asP25do06hR8yWajdSOVxYVw9Pe99N59%2Bsh71iQnbgAnbMt8LD0YAT%2B9He0Y1%2BkGfN6i9k38O0rt5xRRjqOHpCfKdaFiIUf%2BF6zBQIVQ65ZCdLqMldZOtm%2FJo9VGm1FpWgUMJCyOWYK0rwgGSfufT41TztSmlRKpMv67E5qdp%2F%2BmAFyRTbil%2F5uRGRnTtoq8GId06b4BWOpy1PeckZwhkf77YcdBqpjB9jKcuxJH1F9r9f5AScPbDezd6hrqiPosKzU9KHPp9tOM%2FE8dMIsdmsmR11vBtYkDnJNV%2B9Q9lV7mvkS745%2B%2B4ca7EPkraeZTYx9V3gI93RRHVPtBBA7RqZFC9c%2FXJgI68nz3tOdIMN334r8GOqUBgfjk3C1G66YlXeUZVIIirFCcOWB5Q1bcnkGn59OkGGPIHNdkfgKIMh6baee8WRZC48FqgCur3knohO%2BCNcQNgH9epfaGsYa9yaNfgnA9DODCLQkMGpxc%2FhB9oGhsvLrzU7uj5UFGLOA6aqRoq620xoEcTt1mY5P5rW%2FbjfhfyCxcCOKKNz1J2eagqqBfHZGPRJTL2%2BFHZWJd5Y%2FmA%2B9KUnRGlAT9&X-Amz-Signature=291523eecd395dbe388b5ef22bfd153268a39a47e351a18c502a5a6c66ebd578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQGNDH3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD%2FieiNcWsC4DmB4DDnVr%2BP5n%2FitRgQub230Krnmr0iEwIgSy%2BoYp1QWkU%2FiDv9lrQFozdg7UcrwpBsziMCR5WZ4TgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5mZVyf%2BfYQapGsOyrcA77ppyOqzdWPQyw0xr9AnpijHi3kWgiP4W7fDkDnUBh%2BRrFgAHMNAklqJ2ihmbTN3dt4AhetWe77M6i3GDnjW8s2NNBc1OvCL51pSeQaTWgj165tzVAuYUEdHWuIU5MZYpKU5QDuafDKgJ12fu1PZOAoWg8iOCfh%2BiN%2B3SI0HO2RIGYgWeHs0mYh5Tr31G8h%2F1Zf5rZ%2BJ6r5NqXC%2BMamrtV6OJZv087GwDVUSowHas5M4hiTU27k%2BCfhUfK81F9ev2wwSTIdZ5giiHG8BzL4asP25do06hR8yWajdSOVxYVw9Pe99N59%2Bsh71iQnbgAnbMt8LD0YAT%2B9He0Y1%2BkGfN6i9k38O0rt5xRRjqOHpCfKdaFiIUf%2BF6zBQIVQ65ZCdLqMldZOtm%2FJo9VGm1FpWgUMJCyOWYK0rwgGSfufT41TztSmlRKpMv67E5qdp%2F%2BmAFyRTbil%2F5uRGRnTtoq8GId06b4BWOpy1PeckZwhkf77YcdBqpjB9jKcuxJH1F9r9f5AScPbDezd6hrqiPosKzU9KHPp9tOM%2FE8dMIsdmsmR11vBtYkDnJNV%2B9Q9lV7mvkS745%2B%2B4ca7EPkraeZTYx9V3gI93RRHVPtBBA7RqZFC9c%2FXJgI68nz3tOdIMN334r8GOqUBgfjk3C1G66YlXeUZVIIirFCcOWB5Q1bcnkGn59OkGGPIHNdkfgKIMh6baee8WRZC48FqgCur3knohO%2BCNcQNgH9epfaGsYa9yaNfgnA9DODCLQkMGpxc%2FhB9oGhsvLrzU7uj5UFGLOA6aqRoq620xoEcTt1mY5P5rW%2FbjfhfyCxcCOKKNz1J2eagqqBfHZGPRJTL2%2BFHZWJd5Y%2FmA%2B9KUnRGlAT9&X-Amz-Signature=968062fe2ccc0549c387f332b6a2342af82380557ed8a4f0a16c77deef987275&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQGNDH3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD%2FieiNcWsC4DmB4DDnVr%2BP5n%2FitRgQub230Krnmr0iEwIgSy%2BoYp1QWkU%2FiDv9lrQFozdg7UcrwpBsziMCR5WZ4TgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5mZVyf%2BfYQapGsOyrcA77ppyOqzdWPQyw0xr9AnpijHi3kWgiP4W7fDkDnUBh%2BRrFgAHMNAklqJ2ihmbTN3dt4AhetWe77M6i3GDnjW8s2NNBc1OvCL51pSeQaTWgj165tzVAuYUEdHWuIU5MZYpKU5QDuafDKgJ12fu1PZOAoWg8iOCfh%2BiN%2B3SI0HO2RIGYgWeHs0mYh5Tr31G8h%2F1Zf5rZ%2BJ6r5NqXC%2BMamrtV6OJZv087GwDVUSowHas5M4hiTU27k%2BCfhUfK81F9ev2wwSTIdZ5giiHG8BzL4asP25do06hR8yWajdSOVxYVw9Pe99N59%2Bsh71iQnbgAnbMt8LD0YAT%2B9He0Y1%2BkGfN6i9k38O0rt5xRRjqOHpCfKdaFiIUf%2BF6zBQIVQ65ZCdLqMldZOtm%2FJo9VGm1FpWgUMJCyOWYK0rwgGSfufT41TztSmlRKpMv67E5qdp%2F%2BmAFyRTbil%2F5uRGRnTtoq8GId06b4BWOpy1PeckZwhkf77YcdBqpjB9jKcuxJH1F9r9f5AScPbDezd6hrqiPosKzU9KHPp9tOM%2FE8dMIsdmsmR11vBtYkDnJNV%2B9Q9lV7mvkS745%2B%2B4ca7EPkraeZTYx9V3gI93RRHVPtBBA7RqZFC9c%2FXJgI68nz3tOdIMN334r8GOqUBgfjk3C1G66YlXeUZVIIirFCcOWB5Q1bcnkGn59OkGGPIHNdkfgKIMh6baee8WRZC48FqgCur3knohO%2BCNcQNgH9epfaGsYa9yaNfgnA9DODCLQkMGpxc%2FhB9oGhsvLrzU7uj5UFGLOA6aqRoq620xoEcTt1mY5P5rW%2FbjfhfyCxcCOKKNz1J2eagqqBfHZGPRJTL2%2BFHZWJd5Y%2FmA%2B9KUnRGlAT9&X-Amz-Signature=720a8a89aa0e802d185af84c2f08f460cb4a3f6ce2547bc7f2c61e8b71002f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQGNDH3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD%2FieiNcWsC4DmB4DDnVr%2BP5n%2FitRgQub230Krnmr0iEwIgSy%2BoYp1QWkU%2FiDv9lrQFozdg7UcrwpBsziMCR5WZ4TgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5mZVyf%2BfYQapGsOyrcA77ppyOqzdWPQyw0xr9AnpijHi3kWgiP4W7fDkDnUBh%2BRrFgAHMNAklqJ2ihmbTN3dt4AhetWe77M6i3GDnjW8s2NNBc1OvCL51pSeQaTWgj165tzVAuYUEdHWuIU5MZYpKU5QDuafDKgJ12fu1PZOAoWg8iOCfh%2BiN%2B3SI0HO2RIGYgWeHs0mYh5Tr31G8h%2F1Zf5rZ%2BJ6r5NqXC%2BMamrtV6OJZv087GwDVUSowHas5M4hiTU27k%2BCfhUfK81F9ev2wwSTIdZ5giiHG8BzL4asP25do06hR8yWajdSOVxYVw9Pe99N59%2Bsh71iQnbgAnbMt8LD0YAT%2B9He0Y1%2BkGfN6i9k38O0rt5xRRjqOHpCfKdaFiIUf%2BF6zBQIVQ65ZCdLqMldZOtm%2FJo9VGm1FpWgUMJCyOWYK0rwgGSfufT41TztSmlRKpMv67E5qdp%2F%2BmAFyRTbil%2F5uRGRnTtoq8GId06b4BWOpy1PeckZwhkf77YcdBqpjB9jKcuxJH1F9r9f5AScPbDezd6hrqiPosKzU9KHPp9tOM%2FE8dMIsdmsmR11vBtYkDnJNV%2B9Q9lV7mvkS745%2B%2B4ca7EPkraeZTYx9V3gI93RRHVPtBBA7RqZFC9c%2FXJgI68nz3tOdIMN334r8GOqUBgfjk3C1G66YlXeUZVIIirFCcOWB5Q1bcnkGn59OkGGPIHNdkfgKIMh6baee8WRZC48FqgCur3knohO%2BCNcQNgH9epfaGsYa9yaNfgnA9DODCLQkMGpxc%2FhB9oGhsvLrzU7uj5UFGLOA6aqRoq620xoEcTt1mY5P5rW%2FbjfhfyCxcCOKKNz1J2eagqqBfHZGPRJTL2%2BFHZWJd5Y%2FmA%2B9KUnRGlAT9&X-Amz-Signature=7057f73651a3980c00cf8083d7392c80cf851b4fbf0384d1fea4f692802f9f31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQGNDH3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD%2FieiNcWsC4DmB4DDnVr%2BP5n%2FitRgQub230Krnmr0iEwIgSy%2BoYp1QWkU%2FiDv9lrQFozdg7UcrwpBsziMCR5WZ4TgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5mZVyf%2BfYQapGsOyrcA77ppyOqzdWPQyw0xr9AnpijHi3kWgiP4W7fDkDnUBh%2BRrFgAHMNAklqJ2ihmbTN3dt4AhetWe77M6i3GDnjW8s2NNBc1OvCL51pSeQaTWgj165tzVAuYUEdHWuIU5MZYpKU5QDuafDKgJ12fu1PZOAoWg8iOCfh%2BiN%2B3SI0HO2RIGYgWeHs0mYh5Tr31G8h%2F1Zf5rZ%2BJ6r5NqXC%2BMamrtV6OJZv087GwDVUSowHas5M4hiTU27k%2BCfhUfK81F9ev2wwSTIdZ5giiHG8BzL4asP25do06hR8yWajdSOVxYVw9Pe99N59%2Bsh71iQnbgAnbMt8LD0YAT%2B9He0Y1%2BkGfN6i9k38O0rt5xRRjqOHpCfKdaFiIUf%2BF6zBQIVQ65ZCdLqMldZOtm%2FJo9VGm1FpWgUMJCyOWYK0rwgGSfufT41TztSmlRKpMv67E5qdp%2F%2BmAFyRTbil%2F5uRGRnTtoq8GId06b4BWOpy1PeckZwhkf77YcdBqpjB9jKcuxJH1F9r9f5AScPbDezd6hrqiPosKzU9KHPp9tOM%2FE8dMIsdmsmR11vBtYkDnJNV%2B9Q9lV7mvkS745%2B%2B4ca7EPkraeZTYx9V3gI93RRHVPtBBA7RqZFC9c%2FXJgI68nz3tOdIMN334r8GOqUBgfjk3C1G66YlXeUZVIIirFCcOWB5Q1bcnkGn59OkGGPIHNdkfgKIMh6baee8WRZC48FqgCur3knohO%2BCNcQNgH9epfaGsYa9yaNfgnA9DODCLQkMGpxc%2FhB9oGhsvLrzU7uj5UFGLOA6aqRoq620xoEcTt1mY5P5rW%2FbjfhfyCxcCOKKNz1J2eagqqBfHZGPRJTL2%2BFHZWJd5Y%2FmA%2B9KUnRGlAT9&X-Amz-Signature=dc0a98eadcb3de36652df7a936c9a78e1eaca089aabc0cc065fd7faf46d1d1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
