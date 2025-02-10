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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFL53E3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyYV2snQ1YeJfUUm4aVMGtRdXHNPgv75WYj7u8eclAgIhAJabPAB2RX3Rj8tHIEn%2Beg1dZnPFRBqHN8P4%2FFpVMiMnKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbivYWmE4mNIreXgq3AOOX1xl5BQdPZiwwINSqyjlPjuvWAg7Q8lyq7uQmn7JPkyCtP2orpWiDHeHj7t%2FhweaZWa8w4isZcBu%2BOcCpQj%2FLJw%2B5Avxoq0X132AZW0ezlClq%2Bruuyneibp%2FHoGtQGTcYAgNYDLiXyYpAlHxal%2BJglJ2%2Fkf0VKCxzz8TSxQaVxB%2FPbwUKkV1XAwVoy1S1mu1q7hfoZ4Qc29M5elx0b3Y8reu5mPtvvuEDAR10ogBLOb%2BEuIZ3M3zRymgkhAqYQs5ncOyCyJ5UUi4JHjvkuma19VM5DADadJ%2FSXtTcpZPUpUIzWcvVJ%2BSyNQlkslRqp18rh4TncpMjRzJ2vC0lkp30Q09i7agWbdt5EXsvo9FW%2FzMzml5qnmvAhxmlYUBle7U9jNnFwDESs6jRwsVXUAf5fzwpdNth26L7pap128qqmuQWAA0BhHlKuxWPZ6K753gpWYU3igGdmbJRU5V7%2BAjY6%2B%2BmjQ5jbxOxv8ahu4dmZXNYyits3N2b%2FVbuv2zL5TxCBWIeMZTWj5FnnhyADvqfo4bWD2vzwvDg8598rM6%2FLzAJHwF4oYXgX7i1ES9IUf7ZlG85SSluXCVwcviQw8v9GMzuDgI1d8wKSgV0kv1%2BL3734HCBQMerxbPtDDMkqe9BjqkAdYdBs%2FRvUPwsYfqDST%2Bsg%2FNakmG7Apmb2rEO8d3fJuVPyCxbfWxA8zfEeETO6AwRToLd%2FmxgVoTOgp8Yh43TWP3OzgenJtLRxEgStjn7fR5ygssYEMebp377f2K6iIwjuW9KFgWM3qaDsGYPSul0UnjGp0eGZ1iTmRJNoPpE1aMlDqCI6XyOVfGx87zqP8mMWF%2FlF1n%2BaBycWHBO4d16gviCfVV&X-Amz-Signature=801de7435edfa051ad08fe31029377ea03b2fa13bcb83f7f1c4cf5d8d3020bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFL53E3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyYV2snQ1YeJfUUm4aVMGtRdXHNPgv75WYj7u8eclAgIhAJabPAB2RX3Rj8tHIEn%2Beg1dZnPFRBqHN8P4%2FFpVMiMnKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbivYWmE4mNIreXgq3AOOX1xl5BQdPZiwwINSqyjlPjuvWAg7Q8lyq7uQmn7JPkyCtP2orpWiDHeHj7t%2FhweaZWa8w4isZcBu%2BOcCpQj%2FLJw%2B5Avxoq0X132AZW0ezlClq%2Bruuyneibp%2FHoGtQGTcYAgNYDLiXyYpAlHxal%2BJglJ2%2Fkf0VKCxzz8TSxQaVxB%2FPbwUKkV1XAwVoy1S1mu1q7hfoZ4Qc29M5elx0b3Y8reu5mPtvvuEDAR10ogBLOb%2BEuIZ3M3zRymgkhAqYQs5ncOyCyJ5UUi4JHjvkuma19VM5DADadJ%2FSXtTcpZPUpUIzWcvVJ%2BSyNQlkslRqp18rh4TncpMjRzJ2vC0lkp30Q09i7agWbdt5EXsvo9FW%2FzMzml5qnmvAhxmlYUBle7U9jNnFwDESs6jRwsVXUAf5fzwpdNth26L7pap128qqmuQWAA0BhHlKuxWPZ6K753gpWYU3igGdmbJRU5V7%2BAjY6%2B%2BmjQ5jbxOxv8ahu4dmZXNYyits3N2b%2FVbuv2zL5TxCBWIeMZTWj5FnnhyADvqfo4bWD2vzwvDg8598rM6%2FLzAJHwF4oYXgX7i1ES9IUf7ZlG85SSluXCVwcviQw8v9GMzuDgI1d8wKSgV0kv1%2BL3734HCBQMerxbPtDDMkqe9BjqkAdYdBs%2FRvUPwsYfqDST%2Bsg%2FNakmG7Apmb2rEO8d3fJuVPyCxbfWxA8zfEeETO6AwRToLd%2FmxgVoTOgp8Yh43TWP3OzgenJtLRxEgStjn7fR5ygssYEMebp377f2K6iIwjuW9KFgWM3qaDsGYPSul0UnjGp0eGZ1iTmRJNoPpE1aMlDqCI6XyOVfGx87zqP8mMWF%2FlF1n%2BaBycWHBO4d16gviCfVV&X-Amz-Signature=6428854843089cfbf8c1aa0be13053f0c03b3b3a8b1214d8ebd9a0d7f00d4177&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFL53E3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyYV2snQ1YeJfUUm4aVMGtRdXHNPgv75WYj7u8eclAgIhAJabPAB2RX3Rj8tHIEn%2Beg1dZnPFRBqHN8P4%2FFpVMiMnKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbivYWmE4mNIreXgq3AOOX1xl5BQdPZiwwINSqyjlPjuvWAg7Q8lyq7uQmn7JPkyCtP2orpWiDHeHj7t%2FhweaZWa8w4isZcBu%2BOcCpQj%2FLJw%2B5Avxoq0X132AZW0ezlClq%2Bruuyneibp%2FHoGtQGTcYAgNYDLiXyYpAlHxal%2BJglJ2%2Fkf0VKCxzz8TSxQaVxB%2FPbwUKkV1XAwVoy1S1mu1q7hfoZ4Qc29M5elx0b3Y8reu5mPtvvuEDAR10ogBLOb%2BEuIZ3M3zRymgkhAqYQs5ncOyCyJ5UUi4JHjvkuma19VM5DADadJ%2FSXtTcpZPUpUIzWcvVJ%2BSyNQlkslRqp18rh4TncpMjRzJ2vC0lkp30Q09i7agWbdt5EXsvo9FW%2FzMzml5qnmvAhxmlYUBle7U9jNnFwDESs6jRwsVXUAf5fzwpdNth26L7pap128qqmuQWAA0BhHlKuxWPZ6K753gpWYU3igGdmbJRU5V7%2BAjY6%2B%2BmjQ5jbxOxv8ahu4dmZXNYyits3N2b%2FVbuv2zL5TxCBWIeMZTWj5FnnhyADvqfo4bWD2vzwvDg8598rM6%2FLzAJHwF4oYXgX7i1ES9IUf7ZlG85SSluXCVwcviQw8v9GMzuDgI1d8wKSgV0kv1%2BL3734HCBQMerxbPtDDMkqe9BjqkAdYdBs%2FRvUPwsYfqDST%2Bsg%2FNakmG7Apmb2rEO8d3fJuVPyCxbfWxA8zfEeETO6AwRToLd%2FmxgVoTOgp8Yh43TWP3OzgenJtLRxEgStjn7fR5ygssYEMebp377f2K6iIwjuW9KFgWM3qaDsGYPSul0UnjGp0eGZ1iTmRJNoPpE1aMlDqCI6XyOVfGx87zqP8mMWF%2FlF1n%2BaBycWHBO4d16gviCfVV&X-Amz-Signature=5a139315cc8cff3f5e972ca02e9f4e7a3d1044323dbe7a59cd12093486914654&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFL53E3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyYV2snQ1YeJfUUm4aVMGtRdXHNPgv75WYj7u8eclAgIhAJabPAB2RX3Rj8tHIEn%2Beg1dZnPFRBqHN8P4%2FFpVMiMnKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbivYWmE4mNIreXgq3AOOX1xl5BQdPZiwwINSqyjlPjuvWAg7Q8lyq7uQmn7JPkyCtP2orpWiDHeHj7t%2FhweaZWa8w4isZcBu%2BOcCpQj%2FLJw%2B5Avxoq0X132AZW0ezlClq%2Bruuyneibp%2FHoGtQGTcYAgNYDLiXyYpAlHxal%2BJglJ2%2Fkf0VKCxzz8TSxQaVxB%2FPbwUKkV1XAwVoy1S1mu1q7hfoZ4Qc29M5elx0b3Y8reu5mPtvvuEDAR10ogBLOb%2BEuIZ3M3zRymgkhAqYQs5ncOyCyJ5UUi4JHjvkuma19VM5DADadJ%2FSXtTcpZPUpUIzWcvVJ%2BSyNQlkslRqp18rh4TncpMjRzJ2vC0lkp30Q09i7agWbdt5EXsvo9FW%2FzMzml5qnmvAhxmlYUBle7U9jNnFwDESs6jRwsVXUAf5fzwpdNth26L7pap128qqmuQWAA0BhHlKuxWPZ6K753gpWYU3igGdmbJRU5V7%2BAjY6%2B%2BmjQ5jbxOxv8ahu4dmZXNYyits3N2b%2FVbuv2zL5TxCBWIeMZTWj5FnnhyADvqfo4bWD2vzwvDg8598rM6%2FLzAJHwF4oYXgX7i1ES9IUf7ZlG85SSluXCVwcviQw8v9GMzuDgI1d8wKSgV0kv1%2BL3734HCBQMerxbPtDDMkqe9BjqkAdYdBs%2FRvUPwsYfqDST%2Bsg%2FNakmG7Apmb2rEO8d3fJuVPyCxbfWxA8zfEeETO6AwRToLd%2FmxgVoTOgp8Yh43TWP3OzgenJtLRxEgStjn7fR5ygssYEMebp377f2K6iIwjuW9KFgWM3qaDsGYPSul0UnjGp0eGZ1iTmRJNoPpE1aMlDqCI6XyOVfGx87zqP8mMWF%2FlF1n%2BaBycWHBO4d16gviCfVV&X-Amz-Signature=5ecfa812e5c1e4fa2ad3a1754c22c3c3f08f92950441b64b657729b722bf35be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFL53E3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyYV2snQ1YeJfUUm4aVMGtRdXHNPgv75WYj7u8eclAgIhAJabPAB2RX3Rj8tHIEn%2Beg1dZnPFRBqHN8P4%2FFpVMiMnKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbivYWmE4mNIreXgq3AOOX1xl5BQdPZiwwINSqyjlPjuvWAg7Q8lyq7uQmn7JPkyCtP2orpWiDHeHj7t%2FhweaZWa8w4isZcBu%2BOcCpQj%2FLJw%2B5Avxoq0X132AZW0ezlClq%2Bruuyneibp%2FHoGtQGTcYAgNYDLiXyYpAlHxal%2BJglJ2%2Fkf0VKCxzz8TSxQaVxB%2FPbwUKkV1XAwVoy1S1mu1q7hfoZ4Qc29M5elx0b3Y8reu5mPtvvuEDAR10ogBLOb%2BEuIZ3M3zRymgkhAqYQs5ncOyCyJ5UUi4JHjvkuma19VM5DADadJ%2FSXtTcpZPUpUIzWcvVJ%2BSyNQlkslRqp18rh4TncpMjRzJ2vC0lkp30Q09i7agWbdt5EXsvo9FW%2FzMzml5qnmvAhxmlYUBle7U9jNnFwDESs6jRwsVXUAf5fzwpdNth26L7pap128qqmuQWAA0BhHlKuxWPZ6K753gpWYU3igGdmbJRU5V7%2BAjY6%2B%2BmjQ5jbxOxv8ahu4dmZXNYyits3N2b%2FVbuv2zL5TxCBWIeMZTWj5FnnhyADvqfo4bWD2vzwvDg8598rM6%2FLzAJHwF4oYXgX7i1ES9IUf7ZlG85SSluXCVwcviQw8v9GMzuDgI1d8wKSgV0kv1%2BL3734HCBQMerxbPtDDMkqe9BjqkAdYdBs%2FRvUPwsYfqDST%2Bsg%2FNakmG7Apmb2rEO8d3fJuVPyCxbfWxA8zfEeETO6AwRToLd%2FmxgVoTOgp8Yh43TWP3OzgenJtLRxEgStjn7fR5ygssYEMebp377f2K6iIwjuW9KFgWM3qaDsGYPSul0UnjGp0eGZ1iTmRJNoPpE1aMlDqCI6XyOVfGx87zqP8mMWF%2FlF1n%2BaBycWHBO4d16gviCfVV&X-Amz-Signature=eb8d9832d8b1886eb0eea78987991cdb18699493ae406fc92ffc4f3b494b7e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
