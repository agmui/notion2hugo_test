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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLF6NFOI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCx8jLWCCinIAPQCWUv2c5I4H2018W2qi89ApyOmrpbXwIhAKEdIphMryvHjuSE7TanYFtGD911IRlFd5Ol6y0Kb46jKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIvXQBYGHWnP3%2B1gq3AM%2BCyXuU3ht2b6xKumSgMNkYX7K7C3K%2BOsQ2vrPd8D2oBrLcACsqMHQlhWvPlAhoNK7NBj8YaC%2Bm%2BmYHk945pjPY5oC2M6dF6Ps7PmmMNN021ms2N50hXNMtwEOK4Pa%2FLQnYOK4Ef4s0pzVVGHP2%2BajhbhJzOnD3j5cMahyozhDzTayPDpELvR9rSfzBmFh4eLYyXnZG1%2B5giTTeYd46bLk9lFV5ZqlODEmgJ%2F%2FntzsY7RSnC2nHJNib8pdPKQxakh7mKu%2FsMCkjG5y6YAZbvgOUtluAZ64pOBr%2FsOYl8zNyruRtH%2B5mBtataSZzkQInsv7SNN3aU6ncCnnRz%2F8BucjXKeGFwpkfYOoqTXItCKCOwlU5TbGY8N0E2ctS1d38%2BwEMCOU8k6cumDm%2BvBQ0lIlNCVM6gOKgkF9dPgirh7pCkFFYqBVHPp%2BRVLylFPgQsZSlkcSkdywaUHvBEnNfEgKNsxcHZQnDpfXZTTGU4DGCDrl9KLnPz95ljqcDFk886UDKItlPZAt24dTJyHj6CT8yBK8Qy4AOKIBZkGtda9fP8F9t%2BBHbiG6yEBcCW2LF2m2rT4J0dLFjR%2BQEMebzzMBqAXg5kp01PzhA%2Bx59wouX%2BS608EXPLAj6nEtXjDYuI6%2BBjqkAfj2bg%2FSyQmY8xqpNafWDhfVS6ZNl0VCymF6owmzgbSNcECQE1KdFywKAx%2BKIHOy5RPf7hamKUAm1cRUcLJ3%2FaEKiWu1wOWk1b0x26epWNrYgcoMJJJ1rLofqGbvjq8C%2FLGPrSGF3IXNqXGZCONsprSyD%2BstuZLc8Y5U6PiyV4daRp1ZlgKaKwU%2B0i8TFphAagtuIo4aA%2BIS2ATYKw1ZW7rwuEIe&X-Amz-Signature=09f1853982d6898fa2e7ca100a38a1c718e40457f3f033d2c7126da509ef15b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLF6NFOI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCx8jLWCCinIAPQCWUv2c5I4H2018W2qi89ApyOmrpbXwIhAKEdIphMryvHjuSE7TanYFtGD911IRlFd5Ol6y0Kb46jKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIvXQBYGHWnP3%2B1gq3AM%2BCyXuU3ht2b6xKumSgMNkYX7K7C3K%2BOsQ2vrPd8D2oBrLcACsqMHQlhWvPlAhoNK7NBj8YaC%2Bm%2BmYHk945pjPY5oC2M6dF6Ps7PmmMNN021ms2N50hXNMtwEOK4Pa%2FLQnYOK4Ef4s0pzVVGHP2%2BajhbhJzOnD3j5cMahyozhDzTayPDpELvR9rSfzBmFh4eLYyXnZG1%2B5giTTeYd46bLk9lFV5ZqlODEmgJ%2F%2FntzsY7RSnC2nHJNib8pdPKQxakh7mKu%2FsMCkjG5y6YAZbvgOUtluAZ64pOBr%2FsOYl8zNyruRtH%2B5mBtataSZzkQInsv7SNN3aU6ncCnnRz%2F8BucjXKeGFwpkfYOoqTXItCKCOwlU5TbGY8N0E2ctS1d38%2BwEMCOU8k6cumDm%2BvBQ0lIlNCVM6gOKgkF9dPgirh7pCkFFYqBVHPp%2BRVLylFPgQsZSlkcSkdywaUHvBEnNfEgKNsxcHZQnDpfXZTTGU4DGCDrl9KLnPz95ljqcDFk886UDKItlPZAt24dTJyHj6CT8yBK8Qy4AOKIBZkGtda9fP8F9t%2BBHbiG6yEBcCW2LF2m2rT4J0dLFjR%2BQEMebzzMBqAXg5kp01PzhA%2Bx59wouX%2BS608EXPLAj6nEtXjDYuI6%2BBjqkAfj2bg%2FSyQmY8xqpNafWDhfVS6ZNl0VCymF6owmzgbSNcECQE1KdFywKAx%2BKIHOy5RPf7hamKUAm1cRUcLJ3%2FaEKiWu1wOWk1b0x26epWNrYgcoMJJJ1rLofqGbvjq8C%2FLGPrSGF3IXNqXGZCONsprSyD%2BstuZLc8Y5U6PiyV4daRp1ZlgKaKwU%2B0i8TFphAagtuIo4aA%2BIS2ATYKw1ZW7rwuEIe&X-Amz-Signature=40f493153752110b5cd73b26380c9d29833b4988b8e98a6f9b09fe60fac3dfe1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLF6NFOI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCx8jLWCCinIAPQCWUv2c5I4H2018W2qi89ApyOmrpbXwIhAKEdIphMryvHjuSE7TanYFtGD911IRlFd5Ol6y0Kb46jKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIvXQBYGHWnP3%2B1gq3AM%2BCyXuU3ht2b6xKumSgMNkYX7K7C3K%2BOsQ2vrPd8D2oBrLcACsqMHQlhWvPlAhoNK7NBj8YaC%2Bm%2BmYHk945pjPY5oC2M6dF6Ps7PmmMNN021ms2N50hXNMtwEOK4Pa%2FLQnYOK4Ef4s0pzVVGHP2%2BajhbhJzOnD3j5cMahyozhDzTayPDpELvR9rSfzBmFh4eLYyXnZG1%2B5giTTeYd46bLk9lFV5ZqlODEmgJ%2F%2FntzsY7RSnC2nHJNib8pdPKQxakh7mKu%2FsMCkjG5y6YAZbvgOUtluAZ64pOBr%2FsOYl8zNyruRtH%2B5mBtataSZzkQInsv7SNN3aU6ncCnnRz%2F8BucjXKeGFwpkfYOoqTXItCKCOwlU5TbGY8N0E2ctS1d38%2BwEMCOU8k6cumDm%2BvBQ0lIlNCVM6gOKgkF9dPgirh7pCkFFYqBVHPp%2BRVLylFPgQsZSlkcSkdywaUHvBEnNfEgKNsxcHZQnDpfXZTTGU4DGCDrl9KLnPz95ljqcDFk886UDKItlPZAt24dTJyHj6CT8yBK8Qy4AOKIBZkGtda9fP8F9t%2BBHbiG6yEBcCW2LF2m2rT4J0dLFjR%2BQEMebzzMBqAXg5kp01PzhA%2Bx59wouX%2BS608EXPLAj6nEtXjDYuI6%2BBjqkAfj2bg%2FSyQmY8xqpNafWDhfVS6ZNl0VCymF6owmzgbSNcECQE1KdFywKAx%2BKIHOy5RPf7hamKUAm1cRUcLJ3%2FaEKiWu1wOWk1b0x26epWNrYgcoMJJJ1rLofqGbvjq8C%2FLGPrSGF3IXNqXGZCONsprSyD%2BstuZLc8Y5U6PiyV4daRp1ZlgKaKwU%2B0i8TFphAagtuIo4aA%2BIS2ATYKw1ZW7rwuEIe&X-Amz-Signature=eb8cdab087b69e7800c287599a04e762dd12a31c1e8f058f38a9085e83786df2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLF6NFOI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCx8jLWCCinIAPQCWUv2c5I4H2018W2qi89ApyOmrpbXwIhAKEdIphMryvHjuSE7TanYFtGD911IRlFd5Ol6y0Kb46jKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIvXQBYGHWnP3%2B1gq3AM%2BCyXuU3ht2b6xKumSgMNkYX7K7C3K%2BOsQ2vrPd8D2oBrLcACsqMHQlhWvPlAhoNK7NBj8YaC%2Bm%2BmYHk945pjPY5oC2M6dF6Ps7PmmMNN021ms2N50hXNMtwEOK4Pa%2FLQnYOK4Ef4s0pzVVGHP2%2BajhbhJzOnD3j5cMahyozhDzTayPDpELvR9rSfzBmFh4eLYyXnZG1%2B5giTTeYd46bLk9lFV5ZqlODEmgJ%2F%2FntzsY7RSnC2nHJNib8pdPKQxakh7mKu%2FsMCkjG5y6YAZbvgOUtluAZ64pOBr%2FsOYl8zNyruRtH%2B5mBtataSZzkQInsv7SNN3aU6ncCnnRz%2F8BucjXKeGFwpkfYOoqTXItCKCOwlU5TbGY8N0E2ctS1d38%2BwEMCOU8k6cumDm%2BvBQ0lIlNCVM6gOKgkF9dPgirh7pCkFFYqBVHPp%2BRVLylFPgQsZSlkcSkdywaUHvBEnNfEgKNsxcHZQnDpfXZTTGU4DGCDrl9KLnPz95ljqcDFk886UDKItlPZAt24dTJyHj6CT8yBK8Qy4AOKIBZkGtda9fP8F9t%2BBHbiG6yEBcCW2LF2m2rT4J0dLFjR%2BQEMebzzMBqAXg5kp01PzhA%2Bx59wouX%2BS608EXPLAj6nEtXjDYuI6%2BBjqkAfj2bg%2FSyQmY8xqpNafWDhfVS6ZNl0VCymF6owmzgbSNcECQE1KdFywKAx%2BKIHOy5RPf7hamKUAm1cRUcLJ3%2FaEKiWu1wOWk1b0x26epWNrYgcoMJJJ1rLofqGbvjq8C%2FLGPrSGF3IXNqXGZCONsprSyD%2BstuZLc8Y5U6PiyV4daRp1ZlgKaKwU%2B0i8TFphAagtuIo4aA%2BIS2ATYKw1ZW7rwuEIe&X-Amz-Signature=acad2457d548abd0ba3315278f3a480a973208054fb8b63f2326bbed73050408&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLF6NFOI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCx8jLWCCinIAPQCWUv2c5I4H2018W2qi89ApyOmrpbXwIhAKEdIphMryvHjuSE7TanYFtGD911IRlFd5Ol6y0Kb46jKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIvXQBYGHWnP3%2B1gq3AM%2BCyXuU3ht2b6xKumSgMNkYX7K7C3K%2BOsQ2vrPd8D2oBrLcACsqMHQlhWvPlAhoNK7NBj8YaC%2Bm%2BmYHk945pjPY5oC2M6dF6Ps7PmmMNN021ms2N50hXNMtwEOK4Pa%2FLQnYOK4Ef4s0pzVVGHP2%2BajhbhJzOnD3j5cMahyozhDzTayPDpELvR9rSfzBmFh4eLYyXnZG1%2B5giTTeYd46bLk9lFV5ZqlODEmgJ%2F%2FntzsY7RSnC2nHJNib8pdPKQxakh7mKu%2FsMCkjG5y6YAZbvgOUtluAZ64pOBr%2FsOYl8zNyruRtH%2B5mBtataSZzkQInsv7SNN3aU6ncCnnRz%2F8BucjXKeGFwpkfYOoqTXItCKCOwlU5TbGY8N0E2ctS1d38%2BwEMCOU8k6cumDm%2BvBQ0lIlNCVM6gOKgkF9dPgirh7pCkFFYqBVHPp%2BRVLylFPgQsZSlkcSkdywaUHvBEnNfEgKNsxcHZQnDpfXZTTGU4DGCDrl9KLnPz95ljqcDFk886UDKItlPZAt24dTJyHj6CT8yBK8Qy4AOKIBZkGtda9fP8F9t%2BBHbiG6yEBcCW2LF2m2rT4J0dLFjR%2BQEMebzzMBqAXg5kp01PzhA%2Bx59wouX%2BS608EXPLAj6nEtXjDYuI6%2BBjqkAfj2bg%2FSyQmY8xqpNafWDhfVS6ZNl0VCymF6owmzgbSNcECQE1KdFywKAx%2BKIHOy5RPf7hamKUAm1cRUcLJ3%2FaEKiWu1wOWk1b0x26epWNrYgcoMJJJ1rLofqGbvjq8C%2FLGPrSGF3IXNqXGZCONsprSyD%2BstuZLc8Y5U6PiyV4daRp1ZlgKaKwU%2B0i8TFphAagtuIo4aA%2BIS2ATYKw1ZW7rwuEIe&X-Amz-Signature=aba5b7aec17289f2bfd1cf2c610322b2daa688f696f99a83b80d2ffe7a6dbbba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
