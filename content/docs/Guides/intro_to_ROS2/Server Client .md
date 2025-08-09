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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUSRVF7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdOfub%2BSB6bWeb4WPKiCH7GqcTa%2FoGINXQZ%2BorrZbL%2FwIhAJNYRpk6Hozj0E7xtHDGT9Gif65gRW8kap6V2hut55UEKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbl8W%2FA%2FzQf2I5Xg0q3ANFgjSmAd5CwCj83I4iCH2eSaepEKgnr1jUH6ggw5EWyNz376mH%2F0URny1QXTBDtXB1xMzIjeEEcUvjctnC1nW73jLuI5FCU%2FJBTiBYrIG9Ywro2tdM20k6vJMdcb4YrW6K07Khv0btAOt4YI4WjB8EVd4tdRKpkfbRBtk52z%2BLJcsSS5l3SzQE2sxSruX2zXhitbiL71zANqz2N1qb9abaughC9OmaiJ9AOrTw3NHiroSDRpbaGpzW5dBIP%2FMlGcLt9nygtQY3ytRq4L94cqoz7dlOyC0Xh%2BIvS2fptLwNGzqy8C%2FtDmqjWEr5r%2FR8tA%2FQZp9BLWwIe%2FhjMu5AgLlLh1iprcPXrj%2FiNLJC%2B%2BB5VTUM5AA4234mnzKO8RKwWORww87rit8R4AA9j2TpDf3qSxjdZZyDoMbVVj0eaqMI27v%2FCpgnqbYLsDlvN8NbTwc3zyhFIubGJZF0O0JG4nurkij4JD7Sr67oFJRJ%2FxOTaljb%2FKlUZVIJ6NIpq697gyWm1gED8IUX8DLghTvFF9dOZKt55rQ0j4eOuWpFM%2BXvgwWgW2DGGajkKmpJiym2H7YUEcyARhMsDIIxo6Ehain7MyaHVP2FtQTFbaodJgXxQqiz47oSSiGq5pV38DDU6NzEBjqkAWdJUwz7FVLJc%2F5v9Pvk9oVdt8sxbH%2FC3o3n9Gb%2Fz0rzJ69s2RbGAYCdK%2BOQrURXzYVC7kzUQ7RyD738BZfLGw3RyB%2Blg4J9CXNlZzx85AgSJzGnb25%2BhmA3HaqWEX6z4sFaTNmFkqetJZRXRurZYnI3FbUIpR7AdoftZKnbTj3JNGGgHmqH%2FRntymZzzJkj9m8Q5P4lO3fOcjAKMLqwNtyFY%2B3W&X-Amz-Signature=4643c1e62b803c4145495fd2188f85516ab67340788497af1c500f1a903c16f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUSRVF7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdOfub%2BSB6bWeb4WPKiCH7GqcTa%2FoGINXQZ%2BorrZbL%2FwIhAJNYRpk6Hozj0E7xtHDGT9Gif65gRW8kap6V2hut55UEKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbl8W%2FA%2FzQf2I5Xg0q3ANFgjSmAd5CwCj83I4iCH2eSaepEKgnr1jUH6ggw5EWyNz376mH%2F0URny1QXTBDtXB1xMzIjeEEcUvjctnC1nW73jLuI5FCU%2FJBTiBYrIG9Ywro2tdM20k6vJMdcb4YrW6K07Khv0btAOt4YI4WjB8EVd4tdRKpkfbRBtk52z%2BLJcsSS5l3SzQE2sxSruX2zXhitbiL71zANqz2N1qb9abaughC9OmaiJ9AOrTw3NHiroSDRpbaGpzW5dBIP%2FMlGcLt9nygtQY3ytRq4L94cqoz7dlOyC0Xh%2BIvS2fptLwNGzqy8C%2FtDmqjWEr5r%2FR8tA%2FQZp9BLWwIe%2FhjMu5AgLlLh1iprcPXrj%2FiNLJC%2B%2BB5VTUM5AA4234mnzKO8RKwWORww87rit8R4AA9j2TpDf3qSxjdZZyDoMbVVj0eaqMI27v%2FCpgnqbYLsDlvN8NbTwc3zyhFIubGJZF0O0JG4nurkij4JD7Sr67oFJRJ%2FxOTaljb%2FKlUZVIJ6NIpq697gyWm1gED8IUX8DLghTvFF9dOZKt55rQ0j4eOuWpFM%2BXvgwWgW2DGGajkKmpJiym2H7YUEcyARhMsDIIxo6Ehain7MyaHVP2FtQTFbaodJgXxQqiz47oSSiGq5pV38DDU6NzEBjqkAWdJUwz7FVLJc%2F5v9Pvk9oVdt8sxbH%2FC3o3n9Gb%2Fz0rzJ69s2RbGAYCdK%2BOQrURXzYVC7kzUQ7RyD738BZfLGw3RyB%2Blg4J9CXNlZzx85AgSJzGnb25%2BhmA3HaqWEX6z4sFaTNmFkqetJZRXRurZYnI3FbUIpR7AdoftZKnbTj3JNGGgHmqH%2FRntymZzzJkj9m8Q5P4lO3fOcjAKMLqwNtyFY%2B3W&X-Amz-Signature=3469d854ff1e9d15e20130b6cc1e2993293e429862e67f57ec13cfb38cb0239e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUSRVF7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdOfub%2BSB6bWeb4WPKiCH7GqcTa%2FoGINXQZ%2BorrZbL%2FwIhAJNYRpk6Hozj0E7xtHDGT9Gif65gRW8kap6V2hut55UEKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbl8W%2FA%2FzQf2I5Xg0q3ANFgjSmAd5CwCj83I4iCH2eSaepEKgnr1jUH6ggw5EWyNz376mH%2F0URny1QXTBDtXB1xMzIjeEEcUvjctnC1nW73jLuI5FCU%2FJBTiBYrIG9Ywro2tdM20k6vJMdcb4YrW6K07Khv0btAOt4YI4WjB8EVd4tdRKpkfbRBtk52z%2BLJcsSS5l3SzQE2sxSruX2zXhitbiL71zANqz2N1qb9abaughC9OmaiJ9AOrTw3NHiroSDRpbaGpzW5dBIP%2FMlGcLt9nygtQY3ytRq4L94cqoz7dlOyC0Xh%2BIvS2fptLwNGzqy8C%2FtDmqjWEr5r%2FR8tA%2FQZp9BLWwIe%2FhjMu5AgLlLh1iprcPXrj%2FiNLJC%2B%2BB5VTUM5AA4234mnzKO8RKwWORww87rit8R4AA9j2TpDf3qSxjdZZyDoMbVVj0eaqMI27v%2FCpgnqbYLsDlvN8NbTwc3zyhFIubGJZF0O0JG4nurkij4JD7Sr67oFJRJ%2FxOTaljb%2FKlUZVIJ6NIpq697gyWm1gED8IUX8DLghTvFF9dOZKt55rQ0j4eOuWpFM%2BXvgwWgW2DGGajkKmpJiym2H7YUEcyARhMsDIIxo6Ehain7MyaHVP2FtQTFbaodJgXxQqiz47oSSiGq5pV38DDU6NzEBjqkAWdJUwz7FVLJc%2F5v9Pvk9oVdt8sxbH%2FC3o3n9Gb%2Fz0rzJ69s2RbGAYCdK%2BOQrURXzYVC7kzUQ7RyD738BZfLGw3RyB%2Blg4J9CXNlZzx85AgSJzGnb25%2BhmA3HaqWEX6z4sFaTNmFkqetJZRXRurZYnI3FbUIpR7AdoftZKnbTj3JNGGgHmqH%2FRntymZzzJkj9m8Q5P4lO3fOcjAKMLqwNtyFY%2B3W&X-Amz-Signature=146a55b4bc58cc35d544c863a55bb4cc08433a8e2db82752010168e7a6e08182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUSRVF7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdOfub%2BSB6bWeb4WPKiCH7GqcTa%2FoGINXQZ%2BorrZbL%2FwIhAJNYRpk6Hozj0E7xtHDGT9Gif65gRW8kap6V2hut55UEKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbl8W%2FA%2FzQf2I5Xg0q3ANFgjSmAd5CwCj83I4iCH2eSaepEKgnr1jUH6ggw5EWyNz376mH%2F0URny1QXTBDtXB1xMzIjeEEcUvjctnC1nW73jLuI5FCU%2FJBTiBYrIG9Ywro2tdM20k6vJMdcb4YrW6K07Khv0btAOt4YI4WjB8EVd4tdRKpkfbRBtk52z%2BLJcsSS5l3SzQE2sxSruX2zXhitbiL71zANqz2N1qb9abaughC9OmaiJ9AOrTw3NHiroSDRpbaGpzW5dBIP%2FMlGcLt9nygtQY3ytRq4L94cqoz7dlOyC0Xh%2BIvS2fptLwNGzqy8C%2FtDmqjWEr5r%2FR8tA%2FQZp9BLWwIe%2FhjMu5AgLlLh1iprcPXrj%2FiNLJC%2B%2BB5VTUM5AA4234mnzKO8RKwWORww87rit8R4AA9j2TpDf3qSxjdZZyDoMbVVj0eaqMI27v%2FCpgnqbYLsDlvN8NbTwc3zyhFIubGJZF0O0JG4nurkij4JD7Sr67oFJRJ%2FxOTaljb%2FKlUZVIJ6NIpq697gyWm1gED8IUX8DLghTvFF9dOZKt55rQ0j4eOuWpFM%2BXvgwWgW2DGGajkKmpJiym2H7YUEcyARhMsDIIxo6Ehain7MyaHVP2FtQTFbaodJgXxQqiz47oSSiGq5pV38DDU6NzEBjqkAWdJUwz7FVLJc%2F5v9Pvk9oVdt8sxbH%2FC3o3n9Gb%2Fz0rzJ69s2RbGAYCdK%2BOQrURXzYVC7kzUQ7RyD738BZfLGw3RyB%2Blg4J9CXNlZzx85AgSJzGnb25%2BhmA3HaqWEX6z4sFaTNmFkqetJZRXRurZYnI3FbUIpR7AdoftZKnbTj3JNGGgHmqH%2FRntymZzzJkj9m8Q5P4lO3fOcjAKMLqwNtyFY%2B3W&X-Amz-Signature=64e151a9ac3ecf61bcd931d5fb8f741eb28d26f7f2e6e1111c706e82a6c06002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUSRVF7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdOfub%2BSB6bWeb4WPKiCH7GqcTa%2FoGINXQZ%2BorrZbL%2FwIhAJNYRpk6Hozj0E7xtHDGT9Gif65gRW8kap6V2hut55UEKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbl8W%2FA%2FzQf2I5Xg0q3ANFgjSmAd5CwCj83I4iCH2eSaepEKgnr1jUH6ggw5EWyNz376mH%2F0URny1QXTBDtXB1xMzIjeEEcUvjctnC1nW73jLuI5FCU%2FJBTiBYrIG9Ywro2tdM20k6vJMdcb4YrW6K07Khv0btAOt4YI4WjB8EVd4tdRKpkfbRBtk52z%2BLJcsSS5l3SzQE2sxSruX2zXhitbiL71zANqz2N1qb9abaughC9OmaiJ9AOrTw3NHiroSDRpbaGpzW5dBIP%2FMlGcLt9nygtQY3ytRq4L94cqoz7dlOyC0Xh%2BIvS2fptLwNGzqy8C%2FtDmqjWEr5r%2FR8tA%2FQZp9BLWwIe%2FhjMu5AgLlLh1iprcPXrj%2FiNLJC%2B%2BB5VTUM5AA4234mnzKO8RKwWORww87rit8R4AA9j2TpDf3qSxjdZZyDoMbVVj0eaqMI27v%2FCpgnqbYLsDlvN8NbTwc3zyhFIubGJZF0O0JG4nurkij4JD7Sr67oFJRJ%2FxOTaljb%2FKlUZVIJ6NIpq697gyWm1gED8IUX8DLghTvFF9dOZKt55rQ0j4eOuWpFM%2BXvgwWgW2DGGajkKmpJiym2H7YUEcyARhMsDIIxo6Ehain7MyaHVP2FtQTFbaodJgXxQqiz47oSSiGq5pV38DDU6NzEBjqkAWdJUwz7FVLJc%2F5v9Pvk9oVdt8sxbH%2FC3o3n9Gb%2Fz0rzJ69s2RbGAYCdK%2BOQrURXzYVC7kzUQ7RyD738BZfLGw3RyB%2Blg4J9CXNlZzx85AgSJzGnb25%2BhmA3HaqWEX6z4sFaTNmFkqetJZRXRurZYnI3FbUIpR7AdoftZKnbTj3JNGGgHmqH%2FRntymZzzJkj9m8Q5P4lO3fOcjAKMLqwNtyFY%2B3W&X-Amz-Signature=48cb4772bae32b6054d526aaede918fb26a660836121cc123e73a9c8c69bf106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
