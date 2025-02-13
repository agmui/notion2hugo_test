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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNPYQXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjnJJ9gauDRWijGjww%2FGPcR%2F3Qk0MhlVhIXKg3FNV2QIhALanVAfDC6GIyZXXZjFP3EAtzfVq%2FCB%2BK%2BMjYoc69lo9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igys7U0I2gog6ww7p1wq3AOCUc9uoXdbwYViqJF261OrStKjbTwDcDYTnJsdlnooX0M4Mfp7uFycyR3aHyD04QHHcRfg6A1eIGQUI%2Feuv5DKQchvyXCmIAfP%2FA1LZwjO1lCqn0T0f6kBPN4aFbEi7NyNLH9EFcIaMFhFDZvl36tLt7g1BFDebAsDNMQUx7%2BV6c9qME4pYT0muWQ4lWmatd7p4TXtwH5NmNdzmOYm64kTdXsPw1p8v94WtOma27L%2Ff7wZT1ZpeTKlVbNPliZ68dknB2dda5%2Bobuy3iuKUqMOITfYCpMewCJfT9PDOOpePlw8P9BUwhQmdhWBuh8GZAvUZSOuFyoYcpqyIDguW7DRFCKlyCSDCwC8gdoId1q9y0%2FY2OKjpKtXXud0597ZNUO5nsG81Te2zE8%2BYx89h7%2BtwxtiLUtTwEnJ0X2RxvOvhAIEiitQukl3ejTrvH9POvSt%2BHrn62BA%2BNONKKehr92BsmT2%2FXwbQGpUH8tBwGtMeLB0jhv1SAg4eyvtVS0ZBFZPdnx79VkE5Y6ZJdVwVN0Jp%2FF2EDKe6xC6xnimb81CJlOsFJHBKK1U4437XsHrKgsGHNKndAWG1GIn46gQhxvhBHxULZGMYq96DKqEZMU6qQyzCVbgAq1yZjbjQojDuhre9BjqkAbdLEAhqLyOE8%2F3aNHZE8Y0FgLdlw7bCzWzGJXP7R2NqHU5fngZ1%2FFylOawrBk%2BVm2YlwmHzjWVOWKo59mxV2wSo0IIuFxwGEmz%2Fb6cWjUmlL6vGgbrMsKW0kZUMaG0uuKgmiyAGAMSPsmmgrZHXUap3xDgxZJlow085x5OcraB1G15vXTIzxIW4IOipEGIk1NBFdcWcCF1%2BxnQz2yfG8wVSk%2BUZ&X-Amz-Signature=c85557a0f23b283735d31fd1d4894ed2b4770925a097cc6c27c6ede9247bf2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNPYQXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjnJJ9gauDRWijGjww%2FGPcR%2F3Qk0MhlVhIXKg3FNV2QIhALanVAfDC6GIyZXXZjFP3EAtzfVq%2FCB%2BK%2BMjYoc69lo9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igys7U0I2gog6ww7p1wq3AOCUc9uoXdbwYViqJF261OrStKjbTwDcDYTnJsdlnooX0M4Mfp7uFycyR3aHyD04QHHcRfg6A1eIGQUI%2Feuv5DKQchvyXCmIAfP%2FA1LZwjO1lCqn0T0f6kBPN4aFbEi7NyNLH9EFcIaMFhFDZvl36tLt7g1BFDebAsDNMQUx7%2BV6c9qME4pYT0muWQ4lWmatd7p4TXtwH5NmNdzmOYm64kTdXsPw1p8v94WtOma27L%2Ff7wZT1ZpeTKlVbNPliZ68dknB2dda5%2Bobuy3iuKUqMOITfYCpMewCJfT9PDOOpePlw8P9BUwhQmdhWBuh8GZAvUZSOuFyoYcpqyIDguW7DRFCKlyCSDCwC8gdoId1q9y0%2FY2OKjpKtXXud0597ZNUO5nsG81Te2zE8%2BYx89h7%2BtwxtiLUtTwEnJ0X2RxvOvhAIEiitQukl3ejTrvH9POvSt%2BHrn62BA%2BNONKKehr92BsmT2%2FXwbQGpUH8tBwGtMeLB0jhv1SAg4eyvtVS0ZBFZPdnx79VkE5Y6ZJdVwVN0Jp%2FF2EDKe6xC6xnimb81CJlOsFJHBKK1U4437XsHrKgsGHNKndAWG1GIn46gQhxvhBHxULZGMYq96DKqEZMU6qQyzCVbgAq1yZjbjQojDuhre9BjqkAbdLEAhqLyOE8%2F3aNHZE8Y0FgLdlw7bCzWzGJXP7R2NqHU5fngZ1%2FFylOawrBk%2BVm2YlwmHzjWVOWKo59mxV2wSo0IIuFxwGEmz%2Fb6cWjUmlL6vGgbrMsKW0kZUMaG0uuKgmiyAGAMSPsmmgrZHXUap3xDgxZJlow085x5OcraB1G15vXTIzxIW4IOipEGIk1NBFdcWcCF1%2BxnQz2yfG8wVSk%2BUZ&X-Amz-Signature=b4247ca08b3212fc3f5e053bb1d555822d79b991e732cf83b49e0a136d1d1e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNPYQXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjnJJ9gauDRWijGjww%2FGPcR%2F3Qk0MhlVhIXKg3FNV2QIhALanVAfDC6GIyZXXZjFP3EAtzfVq%2FCB%2BK%2BMjYoc69lo9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igys7U0I2gog6ww7p1wq3AOCUc9uoXdbwYViqJF261OrStKjbTwDcDYTnJsdlnooX0M4Mfp7uFycyR3aHyD04QHHcRfg6A1eIGQUI%2Feuv5DKQchvyXCmIAfP%2FA1LZwjO1lCqn0T0f6kBPN4aFbEi7NyNLH9EFcIaMFhFDZvl36tLt7g1BFDebAsDNMQUx7%2BV6c9qME4pYT0muWQ4lWmatd7p4TXtwH5NmNdzmOYm64kTdXsPw1p8v94WtOma27L%2Ff7wZT1ZpeTKlVbNPliZ68dknB2dda5%2Bobuy3iuKUqMOITfYCpMewCJfT9PDOOpePlw8P9BUwhQmdhWBuh8GZAvUZSOuFyoYcpqyIDguW7DRFCKlyCSDCwC8gdoId1q9y0%2FY2OKjpKtXXud0597ZNUO5nsG81Te2zE8%2BYx89h7%2BtwxtiLUtTwEnJ0X2RxvOvhAIEiitQukl3ejTrvH9POvSt%2BHrn62BA%2BNONKKehr92BsmT2%2FXwbQGpUH8tBwGtMeLB0jhv1SAg4eyvtVS0ZBFZPdnx79VkE5Y6ZJdVwVN0Jp%2FF2EDKe6xC6xnimb81CJlOsFJHBKK1U4437XsHrKgsGHNKndAWG1GIn46gQhxvhBHxULZGMYq96DKqEZMU6qQyzCVbgAq1yZjbjQojDuhre9BjqkAbdLEAhqLyOE8%2F3aNHZE8Y0FgLdlw7bCzWzGJXP7R2NqHU5fngZ1%2FFylOawrBk%2BVm2YlwmHzjWVOWKo59mxV2wSo0IIuFxwGEmz%2Fb6cWjUmlL6vGgbrMsKW0kZUMaG0uuKgmiyAGAMSPsmmgrZHXUap3xDgxZJlow085x5OcraB1G15vXTIzxIW4IOipEGIk1NBFdcWcCF1%2BxnQz2yfG8wVSk%2BUZ&X-Amz-Signature=6410e51eb5c5a7cd96ba4cdd6b858c55b2a169e87468b09b2a3a0a07968f916d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNPYQXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjnJJ9gauDRWijGjww%2FGPcR%2F3Qk0MhlVhIXKg3FNV2QIhALanVAfDC6GIyZXXZjFP3EAtzfVq%2FCB%2BK%2BMjYoc69lo9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igys7U0I2gog6ww7p1wq3AOCUc9uoXdbwYViqJF261OrStKjbTwDcDYTnJsdlnooX0M4Mfp7uFycyR3aHyD04QHHcRfg6A1eIGQUI%2Feuv5DKQchvyXCmIAfP%2FA1LZwjO1lCqn0T0f6kBPN4aFbEi7NyNLH9EFcIaMFhFDZvl36tLt7g1BFDebAsDNMQUx7%2BV6c9qME4pYT0muWQ4lWmatd7p4TXtwH5NmNdzmOYm64kTdXsPw1p8v94WtOma27L%2Ff7wZT1ZpeTKlVbNPliZ68dknB2dda5%2Bobuy3iuKUqMOITfYCpMewCJfT9PDOOpePlw8P9BUwhQmdhWBuh8GZAvUZSOuFyoYcpqyIDguW7DRFCKlyCSDCwC8gdoId1q9y0%2FY2OKjpKtXXud0597ZNUO5nsG81Te2zE8%2BYx89h7%2BtwxtiLUtTwEnJ0X2RxvOvhAIEiitQukl3ejTrvH9POvSt%2BHrn62BA%2BNONKKehr92BsmT2%2FXwbQGpUH8tBwGtMeLB0jhv1SAg4eyvtVS0ZBFZPdnx79VkE5Y6ZJdVwVN0Jp%2FF2EDKe6xC6xnimb81CJlOsFJHBKK1U4437XsHrKgsGHNKndAWG1GIn46gQhxvhBHxULZGMYq96DKqEZMU6qQyzCVbgAq1yZjbjQojDuhre9BjqkAbdLEAhqLyOE8%2F3aNHZE8Y0FgLdlw7bCzWzGJXP7R2NqHU5fngZ1%2FFylOawrBk%2BVm2YlwmHzjWVOWKo59mxV2wSo0IIuFxwGEmz%2Fb6cWjUmlL6vGgbrMsKW0kZUMaG0uuKgmiyAGAMSPsmmgrZHXUap3xDgxZJlow085x5OcraB1G15vXTIzxIW4IOipEGIk1NBFdcWcCF1%2BxnQz2yfG8wVSk%2BUZ&X-Amz-Signature=ffd63b966c124ef87e45a077e0ec77ba0abb57023ed3ff01a3ec02defd716c00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNPYQXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjnJJ9gauDRWijGjww%2FGPcR%2F3Qk0MhlVhIXKg3FNV2QIhALanVAfDC6GIyZXXZjFP3EAtzfVq%2FCB%2BK%2BMjYoc69lo9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igys7U0I2gog6ww7p1wq3AOCUc9uoXdbwYViqJF261OrStKjbTwDcDYTnJsdlnooX0M4Mfp7uFycyR3aHyD04QHHcRfg6A1eIGQUI%2Feuv5DKQchvyXCmIAfP%2FA1LZwjO1lCqn0T0f6kBPN4aFbEi7NyNLH9EFcIaMFhFDZvl36tLt7g1BFDebAsDNMQUx7%2BV6c9qME4pYT0muWQ4lWmatd7p4TXtwH5NmNdzmOYm64kTdXsPw1p8v94WtOma27L%2Ff7wZT1ZpeTKlVbNPliZ68dknB2dda5%2Bobuy3iuKUqMOITfYCpMewCJfT9PDOOpePlw8P9BUwhQmdhWBuh8GZAvUZSOuFyoYcpqyIDguW7DRFCKlyCSDCwC8gdoId1q9y0%2FY2OKjpKtXXud0597ZNUO5nsG81Te2zE8%2BYx89h7%2BtwxtiLUtTwEnJ0X2RxvOvhAIEiitQukl3ejTrvH9POvSt%2BHrn62BA%2BNONKKehr92BsmT2%2FXwbQGpUH8tBwGtMeLB0jhv1SAg4eyvtVS0ZBFZPdnx79VkE5Y6ZJdVwVN0Jp%2FF2EDKe6xC6xnimb81CJlOsFJHBKK1U4437XsHrKgsGHNKndAWG1GIn46gQhxvhBHxULZGMYq96DKqEZMU6qQyzCVbgAq1yZjbjQojDuhre9BjqkAbdLEAhqLyOE8%2F3aNHZE8Y0FgLdlw7bCzWzGJXP7R2NqHU5fngZ1%2FFylOawrBk%2BVm2YlwmHzjWVOWKo59mxV2wSo0IIuFxwGEmz%2Fb6cWjUmlL6vGgbrMsKW0kZUMaG0uuKgmiyAGAMSPsmmgrZHXUap3xDgxZJlow085x5OcraB1G15vXTIzxIW4IOipEGIk1NBFdcWcCF1%2BxnQz2yfG8wVSk%2BUZ&X-Amz-Signature=5f5f258b9b9c4c428084524261980e6e39621574665d97f765a767b6c6634f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
