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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGIU2LK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDoMZlzDLEdv8GeKa6NLLfpPX%2Ff5pSahS2dgzAg0loAIgd7R2O90Lhq6AkAcE6%2BV%2BzM97ICpArAzIuBIhLdLOcRMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJx3wRN0O7rCdsAxCrcA9jGNiYJZDXlUptpqhM5vQoTtixZ2xvWXo7NEeLmoTJ0Rs5Q%2FDkv5WvRs0H429pYAjGz6KRqgc1KfwsuxwVqCLyFfQ770I3L5bSqnFk9V2Q7NixlKNj%2BEOKw3z2jEr3xVy9e8VBdlGyPyjd6o6Peuq9JO0ge7%2B56818cntMrnDw%2B2bG8MaXYIyrnWJDujoKMOeddL%2FhOoDbIY5Ae8sLqzIs7dv5HJMpTcdUeWiA4HKKuvnJabbPKcG%2BFs37GzqlmGhTYXvdHxHw5zzHIewqpuvBzXLZrnp%2FQ9STp06ENyHn2KG7DwnUrXBT%2FrQwhpUqWwX2yqvnfXqBDlfl2sg1hBxThJ80NG6Usee3S43yDG0N4bBWxi1zWzAgUuOHgFgSYlI2BmwyHZ4KQSMfdxe0HEh0zSG7Bujf63Bj50cWQyGtC%2BNFUaPwwyX0hYJe7%2F1PLTJ1roF5qvjX1No3i1iZn83taRq10GqK6E0UmcKzrWWhNc3c4bAmMU2hqmQBdpy2EILhWCOXIB%2B3VSSaQgbDMJiQZoMVqz5xAMq0TnFy0Cx9GFA7DssjDP5f%2B1xrt1%2FmZhU5EE7je66SEUDrQcEJZ8kpcI0%2B%2FUou%2FkPEk%2FjbZsrAR0HM%2BN2UUx6N8AR2%2FMMiDqL0GOqUBCrFFWue%2BmmvoDR%2FoTtWzS7pnVJlzw%2BALj3JKsbPhRgRquNTPnJJU7AmjQR678XJI9qgaa6fz8p%2BYpWcCCVXkxmx56%2BzcfW7zmG%2BXF747KwW2GvjcPqwYRWeI8nw%2BxyUeXjtzpV%2FDVbQgX1m50bBL4ZCFa%2B2xIBiVUZ065B0RWuNGg8Bqz%2F7kya6vCb6QS8FsYeg2UG4Psoh193puTr2Fv2gVZ8WN&X-Amz-Signature=f742d615e0f4e4da3d82439c2995550f150cb59c99d80bea5a7d68697a051f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGIU2LK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDoMZlzDLEdv8GeKa6NLLfpPX%2Ff5pSahS2dgzAg0loAIgd7R2O90Lhq6AkAcE6%2BV%2BzM97ICpArAzIuBIhLdLOcRMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJx3wRN0O7rCdsAxCrcA9jGNiYJZDXlUptpqhM5vQoTtixZ2xvWXo7NEeLmoTJ0Rs5Q%2FDkv5WvRs0H429pYAjGz6KRqgc1KfwsuxwVqCLyFfQ770I3L5bSqnFk9V2Q7NixlKNj%2BEOKw3z2jEr3xVy9e8VBdlGyPyjd6o6Peuq9JO0ge7%2B56818cntMrnDw%2B2bG8MaXYIyrnWJDujoKMOeddL%2FhOoDbIY5Ae8sLqzIs7dv5HJMpTcdUeWiA4HKKuvnJabbPKcG%2BFs37GzqlmGhTYXvdHxHw5zzHIewqpuvBzXLZrnp%2FQ9STp06ENyHn2KG7DwnUrXBT%2FrQwhpUqWwX2yqvnfXqBDlfl2sg1hBxThJ80NG6Usee3S43yDG0N4bBWxi1zWzAgUuOHgFgSYlI2BmwyHZ4KQSMfdxe0HEh0zSG7Bujf63Bj50cWQyGtC%2BNFUaPwwyX0hYJe7%2F1PLTJ1roF5qvjX1No3i1iZn83taRq10GqK6E0UmcKzrWWhNc3c4bAmMU2hqmQBdpy2EILhWCOXIB%2B3VSSaQgbDMJiQZoMVqz5xAMq0TnFy0Cx9GFA7DssjDP5f%2B1xrt1%2FmZhU5EE7je66SEUDrQcEJZ8kpcI0%2B%2FUou%2FkPEk%2FjbZsrAR0HM%2BN2UUx6N8AR2%2FMMiDqL0GOqUBCrFFWue%2BmmvoDR%2FoTtWzS7pnVJlzw%2BALj3JKsbPhRgRquNTPnJJU7AmjQR678XJI9qgaa6fz8p%2BYpWcCCVXkxmx56%2BzcfW7zmG%2BXF747KwW2GvjcPqwYRWeI8nw%2BxyUeXjtzpV%2FDVbQgX1m50bBL4ZCFa%2B2xIBiVUZ065B0RWuNGg8Bqz%2F7kya6vCb6QS8FsYeg2UG4Psoh193puTr2Fv2gVZ8WN&X-Amz-Signature=762dbf1bd5b474b1075c7174b0453e084631719ea1f87b8013dc6e67db3f8829&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGIU2LK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDoMZlzDLEdv8GeKa6NLLfpPX%2Ff5pSahS2dgzAg0loAIgd7R2O90Lhq6AkAcE6%2BV%2BzM97ICpArAzIuBIhLdLOcRMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJx3wRN0O7rCdsAxCrcA9jGNiYJZDXlUptpqhM5vQoTtixZ2xvWXo7NEeLmoTJ0Rs5Q%2FDkv5WvRs0H429pYAjGz6KRqgc1KfwsuxwVqCLyFfQ770I3L5bSqnFk9V2Q7NixlKNj%2BEOKw3z2jEr3xVy9e8VBdlGyPyjd6o6Peuq9JO0ge7%2B56818cntMrnDw%2B2bG8MaXYIyrnWJDujoKMOeddL%2FhOoDbIY5Ae8sLqzIs7dv5HJMpTcdUeWiA4HKKuvnJabbPKcG%2BFs37GzqlmGhTYXvdHxHw5zzHIewqpuvBzXLZrnp%2FQ9STp06ENyHn2KG7DwnUrXBT%2FrQwhpUqWwX2yqvnfXqBDlfl2sg1hBxThJ80NG6Usee3S43yDG0N4bBWxi1zWzAgUuOHgFgSYlI2BmwyHZ4KQSMfdxe0HEh0zSG7Bujf63Bj50cWQyGtC%2BNFUaPwwyX0hYJe7%2F1PLTJ1roF5qvjX1No3i1iZn83taRq10GqK6E0UmcKzrWWhNc3c4bAmMU2hqmQBdpy2EILhWCOXIB%2B3VSSaQgbDMJiQZoMVqz5xAMq0TnFy0Cx9GFA7DssjDP5f%2B1xrt1%2FmZhU5EE7je66SEUDrQcEJZ8kpcI0%2B%2FUou%2FkPEk%2FjbZsrAR0HM%2BN2UUx6N8AR2%2FMMiDqL0GOqUBCrFFWue%2BmmvoDR%2FoTtWzS7pnVJlzw%2BALj3JKsbPhRgRquNTPnJJU7AmjQR678XJI9qgaa6fz8p%2BYpWcCCVXkxmx56%2BzcfW7zmG%2BXF747KwW2GvjcPqwYRWeI8nw%2BxyUeXjtzpV%2FDVbQgX1m50bBL4ZCFa%2B2xIBiVUZ065B0RWuNGg8Bqz%2F7kya6vCb6QS8FsYeg2UG4Psoh193puTr2Fv2gVZ8WN&X-Amz-Signature=dc8a03ba8193607ba31d3850a39b5d0c0fb471c015ca7293d18b1ccab9cd2d17&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGIU2LK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDoMZlzDLEdv8GeKa6NLLfpPX%2Ff5pSahS2dgzAg0loAIgd7R2O90Lhq6AkAcE6%2BV%2BzM97ICpArAzIuBIhLdLOcRMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJx3wRN0O7rCdsAxCrcA9jGNiYJZDXlUptpqhM5vQoTtixZ2xvWXo7NEeLmoTJ0Rs5Q%2FDkv5WvRs0H429pYAjGz6KRqgc1KfwsuxwVqCLyFfQ770I3L5bSqnFk9V2Q7NixlKNj%2BEOKw3z2jEr3xVy9e8VBdlGyPyjd6o6Peuq9JO0ge7%2B56818cntMrnDw%2B2bG8MaXYIyrnWJDujoKMOeddL%2FhOoDbIY5Ae8sLqzIs7dv5HJMpTcdUeWiA4HKKuvnJabbPKcG%2BFs37GzqlmGhTYXvdHxHw5zzHIewqpuvBzXLZrnp%2FQ9STp06ENyHn2KG7DwnUrXBT%2FrQwhpUqWwX2yqvnfXqBDlfl2sg1hBxThJ80NG6Usee3S43yDG0N4bBWxi1zWzAgUuOHgFgSYlI2BmwyHZ4KQSMfdxe0HEh0zSG7Bujf63Bj50cWQyGtC%2BNFUaPwwyX0hYJe7%2F1PLTJ1roF5qvjX1No3i1iZn83taRq10GqK6E0UmcKzrWWhNc3c4bAmMU2hqmQBdpy2EILhWCOXIB%2B3VSSaQgbDMJiQZoMVqz5xAMq0TnFy0Cx9GFA7DssjDP5f%2B1xrt1%2FmZhU5EE7je66SEUDrQcEJZ8kpcI0%2B%2FUou%2FkPEk%2FjbZsrAR0HM%2BN2UUx6N8AR2%2FMMiDqL0GOqUBCrFFWue%2BmmvoDR%2FoTtWzS7pnVJlzw%2BALj3JKsbPhRgRquNTPnJJU7AmjQR678XJI9qgaa6fz8p%2BYpWcCCVXkxmx56%2BzcfW7zmG%2BXF747KwW2GvjcPqwYRWeI8nw%2BxyUeXjtzpV%2FDVbQgX1m50bBL4ZCFa%2B2xIBiVUZ065B0RWuNGg8Bqz%2F7kya6vCb6QS8FsYeg2UG4Psoh193puTr2Fv2gVZ8WN&X-Amz-Signature=53c9290da18b2668cb9ce0c767c443422466ac86f61e22909a50da3b07b302a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGIU2LK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDoMZlzDLEdv8GeKa6NLLfpPX%2Ff5pSahS2dgzAg0loAIgd7R2O90Lhq6AkAcE6%2BV%2BzM97ICpArAzIuBIhLdLOcRMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJx3wRN0O7rCdsAxCrcA9jGNiYJZDXlUptpqhM5vQoTtixZ2xvWXo7NEeLmoTJ0Rs5Q%2FDkv5WvRs0H429pYAjGz6KRqgc1KfwsuxwVqCLyFfQ770I3L5bSqnFk9V2Q7NixlKNj%2BEOKw3z2jEr3xVy9e8VBdlGyPyjd6o6Peuq9JO0ge7%2B56818cntMrnDw%2B2bG8MaXYIyrnWJDujoKMOeddL%2FhOoDbIY5Ae8sLqzIs7dv5HJMpTcdUeWiA4HKKuvnJabbPKcG%2BFs37GzqlmGhTYXvdHxHw5zzHIewqpuvBzXLZrnp%2FQ9STp06ENyHn2KG7DwnUrXBT%2FrQwhpUqWwX2yqvnfXqBDlfl2sg1hBxThJ80NG6Usee3S43yDG0N4bBWxi1zWzAgUuOHgFgSYlI2BmwyHZ4KQSMfdxe0HEh0zSG7Bujf63Bj50cWQyGtC%2BNFUaPwwyX0hYJe7%2F1PLTJ1roF5qvjX1No3i1iZn83taRq10GqK6E0UmcKzrWWhNc3c4bAmMU2hqmQBdpy2EILhWCOXIB%2B3VSSaQgbDMJiQZoMVqz5xAMq0TnFy0Cx9GFA7DssjDP5f%2B1xrt1%2FmZhU5EE7je66SEUDrQcEJZ8kpcI0%2B%2FUou%2FkPEk%2FjbZsrAR0HM%2BN2UUx6N8AR2%2FMMiDqL0GOqUBCrFFWue%2BmmvoDR%2FoTtWzS7pnVJlzw%2BALj3JKsbPhRgRquNTPnJJU7AmjQR678XJI9qgaa6fz8p%2BYpWcCCVXkxmx56%2BzcfW7zmG%2BXF747KwW2GvjcPqwYRWeI8nw%2BxyUeXjtzpV%2FDVbQgX1m50bBL4ZCFa%2B2xIBiVUZ065B0RWuNGg8Bqz%2F7kya6vCb6QS8FsYeg2UG4Psoh193puTr2Fv2gVZ8WN&X-Amz-Signature=e937b109d939477f0f5bc3928ed0f91eb050e9e5cf357af6f2edf662bb64e437&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
