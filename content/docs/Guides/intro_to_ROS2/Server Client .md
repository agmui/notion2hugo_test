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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXNIPWJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAoUU%2Fjplnaty7GuUC9xpag6mSE2HEg2Q%2FQ2sQJij7roAiAhI09gubchfFMiPoqy292INgR53v3iBNnYhINe1J1WRCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnkLM7hH%2B3x6vHC2bKtwDQGseVPNj%2F9Qe4I7reH6UhWNY1oCgVi76FEg45u4J%2FOhduQltsoujBkJwWilE1F%2BL1SxlnzcCXMxx21kwWPq%2BL%2FA9XbJ69KkDuxM8UlxfNQAuV%2BuozZ8CptvupeoC4FuHqTdtZLte3W4AmSB4JwZEgdFExvDQI1hJy9wEGweW4Ce48ryadG875R0Q%2F7gB5w9YZ%2F3ot%2BO15gu9wlyUsTvZCjRPqTqSOV8z8ZlhmslB6J7%2F5jtxjfSo1wF1Sdt%2BI74rdl8ONoOtq0qtXVQjlPfSPtNHGZPygM%2BLUDwrmgFXYZrrnV5XQLokGHNHKSOjdWO%2FDcXuU6VVJpRrLtJnq6%2B2DAcJ8MWCP87B9PisUzuOVT5JBSO59iq6hweUYeenWBA48njXD%2F9jEUtvqN2bN1sNxFi%2FuC0V5MwwBMC9p1MKocLvO6a6N8HiLmQ6c8KWL5AtkDhjpQvb%2F%2FHqfQ82IEN5iMrUBAO7OUtBmoNAGdC2I6dtQ5HpM%2FMVZzaIrdRwgLBpiEnI4QSmlBLupR3dA7lsxrlGxPqrY7YvxzllpmkUR1JjZy%2FhpMab%2FiaG4t%2BoXPJoivmQiQXb4KffISQdkKDogi3j2%2Fcq6HpYlTj1%2FwPSflvk%2Bu8dvr1KegG%2FqhkwiOTzwgY6pgEKWAkhm3vTkbFpEV88BMxk%2FtbvvQBnxfBdK85cn7HTzefyS9qp%2FLLOK6OnxCi6k5HIC%2FVtOl%2BGVPzBuaKJZXFtP%2BwxtbH0N408jewQ2jenRVDWUB%2BsJbmwW64LxgUbeEfVge7raGyQjZIFiAeqtvzI6vNhXUPnM3YZISF0diN%2FVlIWC%2BGa0yvBAd%2BtzhyKq7BesYLM64CQljvLjRKQjcPeq101z6rm&X-Amz-Signature=8462a494a4f7274124a317caf72021bc5205065170f8508a302e9d01322f19b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXNIPWJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAoUU%2Fjplnaty7GuUC9xpag6mSE2HEg2Q%2FQ2sQJij7roAiAhI09gubchfFMiPoqy292INgR53v3iBNnYhINe1J1WRCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnkLM7hH%2B3x6vHC2bKtwDQGseVPNj%2F9Qe4I7reH6UhWNY1oCgVi76FEg45u4J%2FOhduQltsoujBkJwWilE1F%2BL1SxlnzcCXMxx21kwWPq%2BL%2FA9XbJ69KkDuxM8UlxfNQAuV%2BuozZ8CptvupeoC4FuHqTdtZLte3W4AmSB4JwZEgdFExvDQI1hJy9wEGweW4Ce48ryadG875R0Q%2F7gB5w9YZ%2F3ot%2BO15gu9wlyUsTvZCjRPqTqSOV8z8ZlhmslB6J7%2F5jtxjfSo1wF1Sdt%2BI74rdl8ONoOtq0qtXVQjlPfSPtNHGZPygM%2BLUDwrmgFXYZrrnV5XQLokGHNHKSOjdWO%2FDcXuU6VVJpRrLtJnq6%2B2DAcJ8MWCP87B9PisUzuOVT5JBSO59iq6hweUYeenWBA48njXD%2F9jEUtvqN2bN1sNxFi%2FuC0V5MwwBMC9p1MKocLvO6a6N8HiLmQ6c8KWL5AtkDhjpQvb%2F%2FHqfQ82IEN5iMrUBAO7OUtBmoNAGdC2I6dtQ5HpM%2FMVZzaIrdRwgLBpiEnI4QSmlBLupR3dA7lsxrlGxPqrY7YvxzllpmkUR1JjZy%2FhpMab%2FiaG4t%2BoXPJoivmQiQXb4KffISQdkKDogi3j2%2Fcq6HpYlTj1%2FwPSflvk%2Bu8dvr1KegG%2FqhkwiOTzwgY6pgEKWAkhm3vTkbFpEV88BMxk%2FtbvvQBnxfBdK85cn7HTzefyS9qp%2FLLOK6OnxCi6k5HIC%2FVtOl%2BGVPzBuaKJZXFtP%2BwxtbH0N408jewQ2jenRVDWUB%2BsJbmwW64LxgUbeEfVge7raGyQjZIFiAeqtvzI6vNhXUPnM3YZISF0diN%2FVlIWC%2BGa0yvBAd%2BtzhyKq7BesYLM64CQljvLjRKQjcPeq101z6rm&X-Amz-Signature=31a2ea84a2678170129381eb510fc6c3557deae115c4fdf9619f55d485dc4e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXNIPWJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAoUU%2Fjplnaty7GuUC9xpag6mSE2HEg2Q%2FQ2sQJij7roAiAhI09gubchfFMiPoqy292INgR53v3iBNnYhINe1J1WRCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnkLM7hH%2B3x6vHC2bKtwDQGseVPNj%2F9Qe4I7reH6UhWNY1oCgVi76FEg45u4J%2FOhduQltsoujBkJwWilE1F%2BL1SxlnzcCXMxx21kwWPq%2BL%2FA9XbJ69KkDuxM8UlxfNQAuV%2BuozZ8CptvupeoC4FuHqTdtZLte3W4AmSB4JwZEgdFExvDQI1hJy9wEGweW4Ce48ryadG875R0Q%2F7gB5w9YZ%2F3ot%2BO15gu9wlyUsTvZCjRPqTqSOV8z8ZlhmslB6J7%2F5jtxjfSo1wF1Sdt%2BI74rdl8ONoOtq0qtXVQjlPfSPtNHGZPygM%2BLUDwrmgFXYZrrnV5XQLokGHNHKSOjdWO%2FDcXuU6VVJpRrLtJnq6%2B2DAcJ8MWCP87B9PisUzuOVT5JBSO59iq6hweUYeenWBA48njXD%2F9jEUtvqN2bN1sNxFi%2FuC0V5MwwBMC9p1MKocLvO6a6N8HiLmQ6c8KWL5AtkDhjpQvb%2F%2FHqfQ82IEN5iMrUBAO7OUtBmoNAGdC2I6dtQ5HpM%2FMVZzaIrdRwgLBpiEnI4QSmlBLupR3dA7lsxrlGxPqrY7YvxzllpmkUR1JjZy%2FhpMab%2FiaG4t%2BoXPJoivmQiQXb4KffISQdkKDogi3j2%2Fcq6HpYlTj1%2FwPSflvk%2Bu8dvr1KegG%2FqhkwiOTzwgY6pgEKWAkhm3vTkbFpEV88BMxk%2FtbvvQBnxfBdK85cn7HTzefyS9qp%2FLLOK6OnxCi6k5HIC%2FVtOl%2BGVPzBuaKJZXFtP%2BwxtbH0N408jewQ2jenRVDWUB%2BsJbmwW64LxgUbeEfVge7raGyQjZIFiAeqtvzI6vNhXUPnM3YZISF0diN%2FVlIWC%2BGa0yvBAd%2BtzhyKq7BesYLM64CQljvLjRKQjcPeq101z6rm&X-Amz-Signature=bc72d8d5eda0126595cc6511cad33195e436a51264e2d6a8c9555f3d82a59c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXNIPWJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAoUU%2Fjplnaty7GuUC9xpag6mSE2HEg2Q%2FQ2sQJij7roAiAhI09gubchfFMiPoqy292INgR53v3iBNnYhINe1J1WRCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnkLM7hH%2B3x6vHC2bKtwDQGseVPNj%2F9Qe4I7reH6UhWNY1oCgVi76FEg45u4J%2FOhduQltsoujBkJwWilE1F%2BL1SxlnzcCXMxx21kwWPq%2BL%2FA9XbJ69KkDuxM8UlxfNQAuV%2BuozZ8CptvupeoC4FuHqTdtZLte3W4AmSB4JwZEgdFExvDQI1hJy9wEGweW4Ce48ryadG875R0Q%2F7gB5w9YZ%2F3ot%2BO15gu9wlyUsTvZCjRPqTqSOV8z8ZlhmslB6J7%2F5jtxjfSo1wF1Sdt%2BI74rdl8ONoOtq0qtXVQjlPfSPtNHGZPygM%2BLUDwrmgFXYZrrnV5XQLokGHNHKSOjdWO%2FDcXuU6VVJpRrLtJnq6%2B2DAcJ8MWCP87B9PisUzuOVT5JBSO59iq6hweUYeenWBA48njXD%2F9jEUtvqN2bN1sNxFi%2FuC0V5MwwBMC9p1MKocLvO6a6N8HiLmQ6c8KWL5AtkDhjpQvb%2F%2FHqfQ82IEN5iMrUBAO7OUtBmoNAGdC2I6dtQ5HpM%2FMVZzaIrdRwgLBpiEnI4QSmlBLupR3dA7lsxrlGxPqrY7YvxzllpmkUR1JjZy%2FhpMab%2FiaG4t%2BoXPJoivmQiQXb4KffISQdkKDogi3j2%2Fcq6HpYlTj1%2FwPSflvk%2Bu8dvr1KegG%2FqhkwiOTzwgY6pgEKWAkhm3vTkbFpEV88BMxk%2FtbvvQBnxfBdK85cn7HTzefyS9qp%2FLLOK6OnxCi6k5HIC%2FVtOl%2BGVPzBuaKJZXFtP%2BwxtbH0N408jewQ2jenRVDWUB%2BsJbmwW64LxgUbeEfVge7raGyQjZIFiAeqtvzI6vNhXUPnM3YZISF0diN%2FVlIWC%2BGa0yvBAd%2BtzhyKq7BesYLM64CQljvLjRKQjcPeq101z6rm&X-Amz-Signature=4c6cdfa7cf96ff705ed12cb2b4e40cc20c86601e9f2c2702b04b8721c53107b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXNIPWJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAoUU%2Fjplnaty7GuUC9xpag6mSE2HEg2Q%2FQ2sQJij7roAiAhI09gubchfFMiPoqy292INgR53v3iBNnYhINe1J1WRCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnkLM7hH%2B3x6vHC2bKtwDQGseVPNj%2F9Qe4I7reH6UhWNY1oCgVi76FEg45u4J%2FOhduQltsoujBkJwWilE1F%2BL1SxlnzcCXMxx21kwWPq%2BL%2FA9XbJ69KkDuxM8UlxfNQAuV%2BuozZ8CptvupeoC4FuHqTdtZLte3W4AmSB4JwZEgdFExvDQI1hJy9wEGweW4Ce48ryadG875R0Q%2F7gB5w9YZ%2F3ot%2BO15gu9wlyUsTvZCjRPqTqSOV8z8ZlhmslB6J7%2F5jtxjfSo1wF1Sdt%2BI74rdl8ONoOtq0qtXVQjlPfSPtNHGZPygM%2BLUDwrmgFXYZrrnV5XQLokGHNHKSOjdWO%2FDcXuU6VVJpRrLtJnq6%2B2DAcJ8MWCP87B9PisUzuOVT5JBSO59iq6hweUYeenWBA48njXD%2F9jEUtvqN2bN1sNxFi%2FuC0V5MwwBMC9p1MKocLvO6a6N8HiLmQ6c8KWL5AtkDhjpQvb%2F%2FHqfQ82IEN5iMrUBAO7OUtBmoNAGdC2I6dtQ5HpM%2FMVZzaIrdRwgLBpiEnI4QSmlBLupR3dA7lsxrlGxPqrY7YvxzllpmkUR1JjZy%2FhpMab%2FiaG4t%2BoXPJoivmQiQXb4KffISQdkKDogi3j2%2Fcq6HpYlTj1%2FwPSflvk%2Bu8dvr1KegG%2FqhkwiOTzwgY6pgEKWAkhm3vTkbFpEV88BMxk%2FtbvvQBnxfBdK85cn7HTzefyS9qp%2FLLOK6OnxCi6k5HIC%2FVtOl%2BGVPzBuaKJZXFtP%2BwxtbH0N408jewQ2jenRVDWUB%2BsJbmwW64LxgUbeEfVge7raGyQjZIFiAeqtvzI6vNhXUPnM3YZISF0diN%2FVlIWC%2BGa0yvBAd%2BtzhyKq7BesYLM64CQljvLjRKQjcPeq101z6rm&X-Amz-Signature=a1d05de32bb54ef15afd5003c06bd4377aae87ca1dda877fd43284d1c1833aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
