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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=73f419f54b1ab94aa9374923442c298a92177bf9777b6e1057476bf029ce3058&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=2b68e94ebfc5cda3985c249df7e2aa5acde8e3508ff921c9cdb01419a81ef217&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=19013ace21bcefedd888e1ddffeff993fa8ace73f448b2d2abe02c6a47bc5066&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=897e8a388c789d87d3914baf1c85b6a4fd6442d9e92c1d9d88f4a1debdc25258&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=400b1924f0667082a69cf4989fbd72903268309bf1216fe8f1831db5ef97e30a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
