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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ26I2NU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICZolvatuMDNZ2BcjTOl66nfWsW5SSdGgIJ4lY%2BIjlW3AiB6X0s53h0HehrJqzIdtq0Nf3trRL2osRk1qrCtruoVaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqradTInMmUdPfm%2FzKtwDpTTFoF%2BI35D%2BGg2Ml0kz1jtzCWWhltoSLt9w2bUb8hXmh4wrych%2FgDqpvbIS0oTt%2FYw1Z4o9Dr07nnWmW1hg8STyEyNbKZCyh0HrGz2YpKOeHChOs6Ji04sow5ntYpmQeRaubNC7Abe5EjRZWc4dU6MVOYY6eVuqMQAZWzBkGGxNU6Bjn4G%2BKH3MnYdKQWfAfWCOsYDRg81e3CvaiJQHpJDnpsnZoWsWSV%2F08yP%2BnFgxdjQNgg9zRmyW%2FebF%2FfPXZtYlW33Sz3DPOQut9356P6wNayU0oH%2FFqb1Nnp075b14Fave432Z8Iao20llNQwREX2Phs00tdq9%2B07cc1xeqvkJU7PwY0OPo2USjKcYwClv5wKTyWCRvan%2FS2%2Bwb%2BqcKtWbbcLCjzom%2FSPPTZY%2BeUrltuVxtQ1hNgLqkV%2BMbkQQPipLnpSlRC%2FCja0K%2BdWc9Gs1LNxWhxHS%2FBv7Kj7TqqV9RaM1YfJ45gsHtODVONsjJqDOsxgDqH6m2wj5bza%2B8SBAGss%2BtSDZz2bA8pu7F8VFv5Ak5WW%2Bju9yOzQQoyndrN1%2BJthEqSF8TldUW2qIGvMj%2BTWbBB3zQzgTFT8O2s%2B%2B32Q7UQUAyo1ZRB64WbRKK3aPJelnBOjWOPIwudqVwAY6pgEIkeP2bHYwU1Ng1MG5mMV90aCCHYh5CBsshZlGpW1rsrJrtn8xEiy6%2F4WhofbrjbNXwDlxinOCNOQfLjlumRFJQDXNunehyORp6vycdwLqZ8Vu3GCCmxqFemQq0CatKtqDb5mm9mAee5oKFQnSrUXfLcerSngISgtojq2K4M6KhqfyjEzEWfc42lXct2o6T%2BRxFdR2f2V16PwWOjVfHnnul7Bjcs3C&X-Amz-Signature=193df76223b1595140bed8464e052573fa71b8a6e19b46819a8138d59611049c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ26I2NU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICZolvatuMDNZ2BcjTOl66nfWsW5SSdGgIJ4lY%2BIjlW3AiB6X0s53h0HehrJqzIdtq0Nf3trRL2osRk1qrCtruoVaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqradTInMmUdPfm%2FzKtwDpTTFoF%2BI35D%2BGg2Ml0kz1jtzCWWhltoSLt9w2bUb8hXmh4wrych%2FgDqpvbIS0oTt%2FYw1Z4o9Dr07nnWmW1hg8STyEyNbKZCyh0HrGz2YpKOeHChOs6Ji04sow5ntYpmQeRaubNC7Abe5EjRZWc4dU6MVOYY6eVuqMQAZWzBkGGxNU6Bjn4G%2BKH3MnYdKQWfAfWCOsYDRg81e3CvaiJQHpJDnpsnZoWsWSV%2F08yP%2BnFgxdjQNgg9zRmyW%2FebF%2FfPXZtYlW33Sz3DPOQut9356P6wNayU0oH%2FFqb1Nnp075b14Fave432Z8Iao20llNQwREX2Phs00tdq9%2B07cc1xeqvkJU7PwY0OPo2USjKcYwClv5wKTyWCRvan%2FS2%2Bwb%2BqcKtWbbcLCjzom%2FSPPTZY%2BeUrltuVxtQ1hNgLqkV%2BMbkQQPipLnpSlRC%2FCja0K%2BdWc9Gs1LNxWhxHS%2FBv7Kj7TqqV9RaM1YfJ45gsHtODVONsjJqDOsxgDqH6m2wj5bza%2B8SBAGss%2BtSDZz2bA8pu7F8VFv5Ak5WW%2Bju9yOzQQoyndrN1%2BJthEqSF8TldUW2qIGvMj%2BTWbBB3zQzgTFT8O2s%2B%2B32Q7UQUAyo1ZRB64WbRKK3aPJelnBOjWOPIwudqVwAY6pgEIkeP2bHYwU1Ng1MG5mMV90aCCHYh5CBsshZlGpW1rsrJrtn8xEiy6%2F4WhofbrjbNXwDlxinOCNOQfLjlumRFJQDXNunehyORp6vycdwLqZ8Vu3GCCmxqFemQq0CatKtqDb5mm9mAee5oKFQnSrUXfLcerSngISgtojq2K4M6KhqfyjEzEWfc42lXct2o6T%2BRxFdR2f2V16PwWOjVfHnnul7Bjcs3C&X-Amz-Signature=0bf396a05a20b4d3b649c590da9989059c9a56167b9a1197aff9268ea0585d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ26I2NU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICZolvatuMDNZ2BcjTOl66nfWsW5SSdGgIJ4lY%2BIjlW3AiB6X0s53h0HehrJqzIdtq0Nf3trRL2osRk1qrCtruoVaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqradTInMmUdPfm%2FzKtwDpTTFoF%2BI35D%2BGg2Ml0kz1jtzCWWhltoSLt9w2bUb8hXmh4wrych%2FgDqpvbIS0oTt%2FYw1Z4o9Dr07nnWmW1hg8STyEyNbKZCyh0HrGz2YpKOeHChOs6Ji04sow5ntYpmQeRaubNC7Abe5EjRZWc4dU6MVOYY6eVuqMQAZWzBkGGxNU6Bjn4G%2BKH3MnYdKQWfAfWCOsYDRg81e3CvaiJQHpJDnpsnZoWsWSV%2F08yP%2BnFgxdjQNgg9zRmyW%2FebF%2FfPXZtYlW33Sz3DPOQut9356P6wNayU0oH%2FFqb1Nnp075b14Fave432Z8Iao20llNQwREX2Phs00tdq9%2B07cc1xeqvkJU7PwY0OPo2USjKcYwClv5wKTyWCRvan%2FS2%2Bwb%2BqcKtWbbcLCjzom%2FSPPTZY%2BeUrltuVxtQ1hNgLqkV%2BMbkQQPipLnpSlRC%2FCja0K%2BdWc9Gs1LNxWhxHS%2FBv7Kj7TqqV9RaM1YfJ45gsHtODVONsjJqDOsxgDqH6m2wj5bza%2B8SBAGss%2BtSDZz2bA8pu7F8VFv5Ak5WW%2Bju9yOzQQoyndrN1%2BJthEqSF8TldUW2qIGvMj%2BTWbBB3zQzgTFT8O2s%2B%2B32Q7UQUAyo1ZRB64WbRKK3aPJelnBOjWOPIwudqVwAY6pgEIkeP2bHYwU1Ng1MG5mMV90aCCHYh5CBsshZlGpW1rsrJrtn8xEiy6%2F4WhofbrjbNXwDlxinOCNOQfLjlumRFJQDXNunehyORp6vycdwLqZ8Vu3GCCmxqFemQq0CatKtqDb5mm9mAee5oKFQnSrUXfLcerSngISgtojq2K4M6KhqfyjEzEWfc42lXct2o6T%2BRxFdR2f2V16PwWOjVfHnnul7Bjcs3C&X-Amz-Signature=859a8ddb5dea94aba2e6d262b56ae8f1b1f46b3848e6baac7fee47649e27d690&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ26I2NU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICZolvatuMDNZ2BcjTOl66nfWsW5SSdGgIJ4lY%2BIjlW3AiB6X0s53h0HehrJqzIdtq0Nf3trRL2osRk1qrCtruoVaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqradTInMmUdPfm%2FzKtwDpTTFoF%2BI35D%2BGg2Ml0kz1jtzCWWhltoSLt9w2bUb8hXmh4wrych%2FgDqpvbIS0oTt%2FYw1Z4o9Dr07nnWmW1hg8STyEyNbKZCyh0HrGz2YpKOeHChOs6Ji04sow5ntYpmQeRaubNC7Abe5EjRZWc4dU6MVOYY6eVuqMQAZWzBkGGxNU6Bjn4G%2BKH3MnYdKQWfAfWCOsYDRg81e3CvaiJQHpJDnpsnZoWsWSV%2F08yP%2BnFgxdjQNgg9zRmyW%2FebF%2FfPXZtYlW33Sz3DPOQut9356P6wNayU0oH%2FFqb1Nnp075b14Fave432Z8Iao20llNQwREX2Phs00tdq9%2B07cc1xeqvkJU7PwY0OPo2USjKcYwClv5wKTyWCRvan%2FS2%2Bwb%2BqcKtWbbcLCjzom%2FSPPTZY%2BeUrltuVxtQ1hNgLqkV%2BMbkQQPipLnpSlRC%2FCja0K%2BdWc9Gs1LNxWhxHS%2FBv7Kj7TqqV9RaM1YfJ45gsHtODVONsjJqDOsxgDqH6m2wj5bza%2B8SBAGss%2BtSDZz2bA8pu7F8VFv5Ak5WW%2Bju9yOzQQoyndrN1%2BJthEqSF8TldUW2qIGvMj%2BTWbBB3zQzgTFT8O2s%2B%2B32Q7UQUAyo1ZRB64WbRKK3aPJelnBOjWOPIwudqVwAY6pgEIkeP2bHYwU1Ng1MG5mMV90aCCHYh5CBsshZlGpW1rsrJrtn8xEiy6%2F4WhofbrjbNXwDlxinOCNOQfLjlumRFJQDXNunehyORp6vycdwLqZ8Vu3GCCmxqFemQq0CatKtqDb5mm9mAee5oKFQnSrUXfLcerSngISgtojq2K4M6KhqfyjEzEWfc42lXct2o6T%2BRxFdR2f2V16PwWOjVfHnnul7Bjcs3C&X-Amz-Signature=d498359f53f637a5c1d241fb20bc57fea07fb869ad7915673d64833f1e5a2b87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ26I2NU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICZolvatuMDNZ2BcjTOl66nfWsW5SSdGgIJ4lY%2BIjlW3AiB6X0s53h0HehrJqzIdtq0Nf3trRL2osRk1qrCtruoVaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqradTInMmUdPfm%2FzKtwDpTTFoF%2BI35D%2BGg2Ml0kz1jtzCWWhltoSLt9w2bUb8hXmh4wrych%2FgDqpvbIS0oTt%2FYw1Z4o9Dr07nnWmW1hg8STyEyNbKZCyh0HrGz2YpKOeHChOs6Ji04sow5ntYpmQeRaubNC7Abe5EjRZWc4dU6MVOYY6eVuqMQAZWzBkGGxNU6Bjn4G%2BKH3MnYdKQWfAfWCOsYDRg81e3CvaiJQHpJDnpsnZoWsWSV%2F08yP%2BnFgxdjQNgg9zRmyW%2FebF%2FfPXZtYlW33Sz3DPOQut9356P6wNayU0oH%2FFqb1Nnp075b14Fave432Z8Iao20llNQwREX2Phs00tdq9%2B07cc1xeqvkJU7PwY0OPo2USjKcYwClv5wKTyWCRvan%2FS2%2Bwb%2BqcKtWbbcLCjzom%2FSPPTZY%2BeUrltuVxtQ1hNgLqkV%2BMbkQQPipLnpSlRC%2FCja0K%2BdWc9Gs1LNxWhxHS%2FBv7Kj7TqqV9RaM1YfJ45gsHtODVONsjJqDOsxgDqH6m2wj5bza%2B8SBAGss%2BtSDZz2bA8pu7F8VFv5Ak5WW%2Bju9yOzQQoyndrN1%2BJthEqSF8TldUW2qIGvMj%2BTWbBB3zQzgTFT8O2s%2B%2B32Q7UQUAyo1ZRB64WbRKK3aPJelnBOjWOPIwudqVwAY6pgEIkeP2bHYwU1Ng1MG5mMV90aCCHYh5CBsshZlGpW1rsrJrtn8xEiy6%2F4WhofbrjbNXwDlxinOCNOQfLjlumRFJQDXNunehyORp6vycdwLqZ8Vu3GCCmxqFemQq0CatKtqDb5mm9mAee5oKFQnSrUXfLcerSngISgtojq2K4M6KhqfyjEzEWfc42lXct2o6T%2BRxFdR2f2V16PwWOjVfHnnul7Bjcs3C&X-Amz-Signature=89d9bde771d92613efaec1a73b7c646e5f1fe34e1fffa06f51e090c67eddf2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
