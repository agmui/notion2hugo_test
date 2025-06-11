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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQP6DGQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8N%2FUR30CFOq2ALqYJQ7qzXk0jS3C05zan52QuVD%2FBWAiEApC9oM%2F7jNnZGaeALMJWUxE%2FdavycdbtXpErbPrQ10%2FQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjpdoryfkUWdf3lyrcAwktA1zmCnFx3YHdSUGGcKSV%2BYZsNY1mzc7WpUVtkYXUkL6tUC5ORPeM779fjDLJ1zF30CgmM6%2B1Clk6nVgXgX%2FBH%2BjJrcgkPAl5agFEaNmj0pc8UoXLipzkNrrsg%2FB2pu%2F%2FsL00lS2yrc9bB5UWp9Ohy9YVMeEKEFCvqbDRj2dyUm2e%2FEOyJ7bVj%2BdqNN%2FkPZIZmItsnQdzA%2FNW%2B%2FOJQYuiowhmeJjbXgDD50L2%2FBbuhBJW2ls0DICxKsVZ2A10zJZbjwudzQEoQl%2FpaedgLsqZWNhbalslUIh023aRwf9nY2om8oGi7yRGWWqqpfI1CU9xAt%2BwpTGuwQSVOdRzyzyKn%2BYHCHp1v8eq%2Fikj4dG%2BY0N94MaaX16mqbOcfY%2BXLNdSMvIKwCGVjCi730NyuVPl4IC2ipZfRAhhmyvFiOOTlL4OIRkPi4RzsieOSu98w20Zml7xjIPlHFbND3O7NWfS3O5uYT3tb0iwUqwZ6JLLng%2BT3OR6Ut%2FqFRaZa1Jt%2BTG4E4rt%2B0xxh50KuK%2FfLT%2BsUOHtBI%2BhUAYOpqXn%2BpWtH6Pw2uRI%2F4G6p4qR4vPN2vjtxmVOHp7apxoAlH7Gtf0Nn7H8PqYrkYvPqXK2xO5u2uq3eE%2BlGWRqEvN4MMm6psIGOqUBQmjz3vbyKr9LL6gmACZqMtXKDn28C90IuQ7t02OdIvD%2F7dai6Gbo7sDpmk2UhH9%2BGeL41sHaJUT%2FJNPPbHw5t58Vjj%2FvtaIHSWgQ9ljD6Lweb%2FDu4jO1JMlA1yBpBer8cu9zi7B9yieW7FD7Hk516W5CQBzmOWb%2FB733aip%2FbbkOdxosa7YvN3MFJFkwouKa9nRpG%2FQM1jtP%2BrphmVDvZyoGVEhj&X-Amz-Signature=95a08c0fd136436b6e1964539f0a74d4e7638e4467f3910058dd09e4e0bdb909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQP6DGQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8N%2FUR30CFOq2ALqYJQ7qzXk0jS3C05zan52QuVD%2FBWAiEApC9oM%2F7jNnZGaeALMJWUxE%2FdavycdbtXpErbPrQ10%2FQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjpdoryfkUWdf3lyrcAwktA1zmCnFx3YHdSUGGcKSV%2BYZsNY1mzc7WpUVtkYXUkL6tUC5ORPeM779fjDLJ1zF30CgmM6%2B1Clk6nVgXgX%2FBH%2BjJrcgkPAl5agFEaNmj0pc8UoXLipzkNrrsg%2FB2pu%2F%2FsL00lS2yrc9bB5UWp9Ohy9YVMeEKEFCvqbDRj2dyUm2e%2FEOyJ7bVj%2BdqNN%2FkPZIZmItsnQdzA%2FNW%2B%2FOJQYuiowhmeJjbXgDD50L2%2FBbuhBJW2ls0DICxKsVZ2A10zJZbjwudzQEoQl%2FpaedgLsqZWNhbalslUIh023aRwf9nY2om8oGi7yRGWWqqpfI1CU9xAt%2BwpTGuwQSVOdRzyzyKn%2BYHCHp1v8eq%2Fikj4dG%2BY0N94MaaX16mqbOcfY%2BXLNdSMvIKwCGVjCi730NyuVPl4IC2ipZfRAhhmyvFiOOTlL4OIRkPi4RzsieOSu98w20Zml7xjIPlHFbND3O7NWfS3O5uYT3tb0iwUqwZ6JLLng%2BT3OR6Ut%2FqFRaZa1Jt%2BTG4E4rt%2B0xxh50KuK%2FfLT%2BsUOHtBI%2BhUAYOpqXn%2BpWtH6Pw2uRI%2F4G6p4qR4vPN2vjtxmVOHp7apxoAlH7Gtf0Nn7H8PqYrkYvPqXK2xO5u2uq3eE%2BlGWRqEvN4MMm6psIGOqUBQmjz3vbyKr9LL6gmACZqMtXKDn28C90IuQ7t02OdIvD%2F7dai6Gbo7sDpmk2UhH9%2BGeL41sHaJUT%2FJNPPbHw5t58Vjj%2FvtaIHSWgQ9ljD6Lweb%2FDu4jO1JMlA1yBpBer8cu9zi7B9yieW7FD7Hk516W5CQBzmOWb%2FB733aip%2FbbkOdxosa7YvN3MFJFkwouKa9nRpG%2FQM1jtP%2BrphmVDvZyoGVEhj&X-Amz-Signature=7081698fd42f91eeb62d8378c288d4d73ac6c71bbab5f577420a5ef9caa446f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQP6DGQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8N%2FUR30CFOq2ALqYJQ7qzXk0jS3C05zan52QuVD%2FBWAiEApC9oM%2F7jNnZGaeALMJWUxE%2FdavycdbtXpErbPrQ10%2FQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjpdoryfkUWdf3lyrcAwktA1zmCnFx3YHdSUGGcKSV%2BYZsNY1mzc7WpUVtkYXUkL6tUC5ORPeM779fjDLJ1zF30CgmM6%2B1Clk6nVgXgX%2FBH%2BjJrcgkPAl5agFEaNmj0pc8UoXLipzkNrrsg%2FB2pu%2F%2FsL00lS2yrc9bB5UWp9Ohy9YVMeEKEFCvqbDRj2dyUm2e%2FEOyJ7bVj%2BdqNN%2FkPZIZmItsnQdzA%2FNW%2B%2FOJQYuiowhmeJjbXgDD50L2%2FBbuhBJW2ls0DICxKsVZ2A10zJZbjwudzQEoQl%2FpaedgLsqZWNhbalslUIh023aRwf9nY2om8oGi7yRGWWqqpfI1CU9xAt%2BwpTGuwQSVOdRzyzyKn%2BYHCHp1v8eq%2Fikj4dG%2BY0N94MaaX16mqbOcfY%2BXLNdSMvIKwCGVjCi730NyuVPl4IC2ipZfRAhhmyvFiOOTlL4OIRkPi4RzsieOSu98w20Zml7xjIPlHFbND3O7NWfS3O5uYT3tb0iwUqwZ6JLLng%2BT3OR6Ut%2FqFRaZa1Jt%2BTG4E4rt%2B0xxh50KuK%2FfLT%2BsUOHtBI%2BhUAYOpqXn%2BpWtH6Pw2uRI%2F4G6p4qR4vPN2vjtxmVOHp7apxoAlH7Gtf0Nn7H8PqYrkYvPqXK2xO5u2uq3eE%2BlGWRqEvN4MMm6psIGOqUBQmjz3vbyKr9LL6gmACZqMtXKDn28C90IuQ7t02OdIvD%2F7dai6Gbo7sDpmk2UhH9%2BGeL41sHaJUT%2FJNPPbHw5t58Vjj%2FvtaIHSWgQ9ljD6Lweb%2FDu4jO1JMlA1yBpBer8cu9zi7B9yieW7FD7Hk516W5CQBzmOWb%2FB733aip%2FbbkOdxosa7YvN3MFJFkwouKa9nRpG%2FQM1jtP%2BrphmVDvZyoGVEhj&X-Amz-Signature=98bb2d562946660d8affc4df350ded9d17bc1517bb643c0c23591e55fb62dda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQP6DGQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8N%2FUR30CFOq2ALqYJQ7qzXk0jS3C05zan52QuVD%2FBWAiEApC9oM%2F7jNnZGaeALMJWUxE%2FdavycdbtXpErbPrQ10%2FQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjpdoryfkUWdf3lyrcAwktA1zmCnFx3YHdSUGGcKSV%2BYZsNY1mzc7WpUVtkYXUkL6tUC5ORPeM779fjDLJ1zF30CgmM6%2B1Clk6nVgXgX%2FBH%2BjJrcgkPAl5agFEaNmj0pc8UoXLipzkNrrsg%2FB2pu%2F%2FsL00lS2yrc9bB5UWp9Ohy9YVMeEKEFCvqbDRj2dyUm2e%2FEOyJ7bVj%2BdqNN%2FkPZIZmItsnQdzA%2FNW%2B%2FOJQYuiowhmeJjbXgDD50L2%2FBbuhBJW2ls0DICxKsVZ2A10zJZbjwudzQEoQl%2FpaedgLsqZWNhbalslUIh023aRwf9nY2om8oGi7yRGWWqqpfI1CU9xAt%2BwpTGuwQSVOdRzyzyKn%2BYHCHp1v8eq%2Fikj4dG%2BY0N94MaaX16mqbOcfY%2BXLNdSMvIKwCGVjCi730NyuVPl4IC2ipZfRAhhmyvFiOOTlL4OIRkPi4RzsieOSu98w20Zml7xjIPlHFbND3O7NWfS3O5uYT3tb0iwUqwZ6JLLng%2BT3OR6Ut%2FqFRaZa1Jt%2BTG4E4rt%2B0xxh50KuK%2FfLT%2BsUOHtBI%2BhUAYOpqXn%2BpWtH6Pw2uRI%2F4G6p4qR4vPN2vjtxmVOHp7apxoAlH7Gtf0Nn7H8PqYrkYvPqXK2xO5u2uq3eE%2BlGWRqEvN4MMm6psIGOqUBQmjz3vbyKr9LL6gmACZqMtXKDn28C90IuQ7t02OdIvD%2F7dai6Gbo7sDpmk2UhH9%2BGeL41sHaJUT%2FJNPPbHw5t58Vjj%2FvtaIHSWgQ9ljD6Lweb%2FDu4jO1JMlA1yBpBer8cu9zi7B9yieW7FD7Hk516W5CQBzmOWb%2FB733aip%2FbbkOdxosa7YvN3MFJFkwouKa9nRpG%2FQM1jtP%2BrphmVDvZyoGVEhj&X-Amz-Signature=cab0cabffd4bd5ed6b08d6d35fac4d77cb745d32485185004ab423dbe6992c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQP6DGQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8N%2FUR30CFOq2ALqYJQ7qzXk0jS3C05zan52QuVD%2FBWAiEApC9oM%2F7jNnZGaeALMJWUxE%2FdavycdbtXpErbPrQ10%2FQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjpdoryfkUWdf3lyrcAwktA1zmCnFx3YHdSUGGcKSV%2BYZsNY1mzc7WpUVtkYXUkL6tUC5ORPeM779fjDLJ1zF30CgmM6%2B1Clk6nVgXgX%2FBH%2BjJrcgkPAl5agFEaNmj0pc8UoXLipzkNrrsg%2FB2pu%2F%2FsL00lS2yrc9bB5UWp9Ohy9YVMeEKEFCvqbDRj2dyUm2e%2FEOyJ7bVj%2BdqNN%2FkPZIZmItsnQdzA%2FNW%2B%2FOJQYuiowhmeJjbXgDD50L2%2FBbuhBJW2ls0DICxKsVZ2A10zJZbjwudzQEoQl%2FpaedgLsqZWNhbalslUIh023aRwf9nY2om8oGi7yRGWWqqpfI1CU9xAt%2BwpTGuwQSVOdRzyzyKn%2BYHCHp1v8eq%2Fikj4dG%2BY0N94MaaX16mqbOcfY%2BXLNdSMvIKwCGVjCi730NyuVPl4IC2ipZfRAhhmyvFiOOTlL4OIRkPi4RzsieOSu98w20Zml7xjIPlHFbND3O7NWfS3O5uYT3tb0iwUqwZ6JLLng%2BT3OR6Ut%2FqFRaZa1Jt%2BTG4E4rt%2B0xxh50KuK%2FfLT%2BsUOHtBI%2BhUAYOpqXn%2BpWtH6Pw2uRI%2F4G6p4qR4vPN2vjtxmVOHp7apxoAlH7Gtf0Nn7H8PqYrkYvPqXK2xO5u2uq3eE%2BlGWRqEvN4MMm6psIGOqUBQmjz3vbyKr9LL6gmACZqMtXKDn28C90IuQ7t02OdIvD%2F7dai6Gbo7sDpmk2UhH9%2BGeL41sHaJUT%2FJNPPbHw5t58Vjj%2FvtaIHSWgQ9ljD6Lweb%2FDu4jO1JMlA1yBpBer8cu9zi7B9yieW7FD7Hk516W5CQBzmOWb%2FB733aip%2FbbkOdxosa7YvN3MFJFkwouKa9nRpG%2FQM1jtP%2BrphmVDvZyoGVEhj&X-Amz-Signature=fe6d071593e7853f7b2b72c0dfff3d744aabdc1bbfe33fa380f906c053e40673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
