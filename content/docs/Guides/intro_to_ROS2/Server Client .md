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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FQHTJJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG%2FbdP5noTWlJvWqJReEOaZvmDHDtInTYPaj6veG5rdgAiEAwL4GvzMWWjZiALQOTjnIratS46PSf%2FYvhzzkEDTH%2F9EqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoXB0mkpf5lX23sgircA74WDwdBIIkGjzPyYVbxqE37Nnwo%2B05V%2FtEBh5QZjfO%2Feitp5KgBNmyu4WPF0C2ZfBEPtCyZKWuac4GEHimNaY9WNDVsEH7n6jAWCAhdpC8sn0MPGNaTFkcIGe3XLX6qdfUHmARWTtyVdqKNiptXLmmnNbNbJQyzl%2BVnI57x%2BdSgQCFbLxnbxZFN0x4edgY9xQ%2FqwT0mKS0l1VQll678z6%2FFhxbe104zabnDqB1pYvCSy5tQDFx6D6c3EzjpDt%2FW2pXFUlMqIDYVMrbipIlY%2FoY2elCRbXgHujwchY6lFK01mqZNUOR%2Bghz4%2FnFHvWPfLa99jMd1dDIB3B2CzLKEjmLBfS18N5ZP8R4OQ4ucmGb3Qzs4H89qSAXLAcQsSWfqMhFHfnUqQ%2Bu5J7rmjQ9O8%2BzC3%2FEl%2BC7kT7us2Jkj3uw2%2BxGWTLHX5EbUJGAplI65TyifkNUxmg6Fh8nZXdg5mDkCWYbZDLfsjQlsjB5cJxiLFEJEk58SNfZ64wSPycuNIzYAG689BVV8Payi1ippMy4KBSkIfhXlDsI3sfeDoVOXK%2BdDEsRN23t%2Bq9kEEbsrj5OUVy6uHXKjvdiIBO9sxAzuO1%2FjWrH4PPg2nVLjaD5vYGnYYYx6cRsQJ7TBMLSpsb8GOqUBtXL%2FyAX7F%2BwXEiQHyS86cCrGvhjVzbCUJ0FuIn7xJUiFwpfgMUo8FNdSvMB8d8JlQ%2B7PMvs9gf%2B1F0CTm2Em%2FXF8AQEKK19qpzChiWbTxDqyUlzDC4WyGIliK69gifu28XtU820bwhXo2%2BSFw%2BWNMpaQri%2FRhOmjntnkxF%2BSH%2F40nzW39bMoYJouMDr2QNcdyi3kW9faw2ExHj10wyk0Z2mazEmf&X-Amz-Signature=2276157acc88acedcbd29a63b7f8f06dee8c31af979204b518a02859399651fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FQHTJJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG%2FbdP5noTWlJvWqJReEOaZvmDHDtInTYPaj6veG5rdgAiEAwL4GvzMWWjZiALQOTjnIratS46PSf%2FYvhzzkEDTH%2F9EqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoXB0mkpf5lX23sgircA74WDwdBIIkGjzPyYVbxqE37Nnwo%2B05V%2FtEBh5QZjfO%2Feitp5KgBNmyu4WPF0C2ZfBEPtCyZKWuac4GEHimNaY9WNDVsEH7n6jAWCAhdpC8sn0MPGNaTFkcIGe3XLX6qdfUHmARWTtyVdqKNiptXLmmnNbNbJQyzl%2BVnI57x%2BdSgQCFbLxnbxZFN0x4edgY9xQ%2FqwT0mKS0l1VQll678z6%2FFhxbe104zabnDqB1pYvCSy5tQDFx6D6c3EzjpDt%2FW2pXFUlMqIDYVMrbipIlY%2FoY2elCRbXgHujwchY6lFK01mqZNUOR%2Bghz4%2FnFHvWPfLa99jMd1dDIB3B2CzLKEjmLBfS18N5ZP8R4OQ4ucmGb3Qzs4H89qSAXLAcQsSWfqMhFHfnUqQ%2Bu5J7rmjQ9O8%2BzC3%2FEl%2BC7kT7us2Jkj3uw2%2BxGWTLHX5EbUJGAplI65TyifkNUxmg6Fh8nZXdg5mDkCWYbZDLfsjQlsjB5cJxiLFEJEk58SNfZ64wSPycuNIzYAG689BVV8Payi1ippMy4KBSkIfhXlDsI3sfeDoVOXK%2BdDEsRN23t%2Bq9kEEbsrj5OUVy6uHXKjvdiIBO9sxAzuO1%2FjWrH4PPg2nVLjaD5vYGnYYYx6cRsQJ7TBMLSpsb8GOqUBtXL%2FyAX7F%2BwXEiQHyS86cCrGvhjVzbCUJ0FuIn7xJUiFwpfgMUo8FNdSvMB8d8JlQ%2B7PMvs9gf%2B1F0CTm2Em%2FXF8AQEKK19qpzChiWbTxDqyUlzDC4WyGIliK69gifu28XtU820bwhXo2%2BSFw%2BWNMpaQri%2FRhOmjntnkxF%2BSH%2F40nzW39bMoYJouMDr2QNcdyi3kW9faw2ExHj10wyk0Z2mazEmf&X-Amz-Signature=36e4625dc159b19b205d31c611f438a20819051b99c06812dd68a91b6674ee1e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FQHTJJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG%2FbdP5noTWlJvWqJReEOaZvmDHDtInTYPaj6veG5rdgAiEAwL4GvzMWWjZiALQOTjnIratS46PSf%2FYvhzzkEDTH%2F9EqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoXB0mkpf5lX23sgircA74WDwdBIIkGjzPyYVbxqE37Nnwo%2B05V%2FtEBh5QZjfO%2Feitp5KgBNmyu4WPF0C2ZfBEPtCyZKWuac4GEHimNaY9WNDVsEH7n6jAWCAhdpC8sn0MPGNaTFkcIGe3XLX6qdfUHmARWTtyVdqKNiptXLmmnNbNbJQyzl%2BVnI57x%2BdSgQCFbLxnbxZFN0x4edgY9xQ%2FqwT0mKS0l1VQll678z6%2FFhxbe104zabnDqB1pYvCSy5tQDFx6D6c3EzjpDt%2FW2pXFUlMqIDYVMrbipIlY%2FoY2elCRbXgHujwchY6lFK01mqZNUOR%2Bghz4%2FnFHvWPfLa99jMd1dDIB3B2CzLKEjmLBfS18N5ZP8R4OQ4ucmGb3Qzs4H89qSAXLAcQsSWfqMhFHfnUqQ%2Bu5J7rmjQ9O8%2BzC3%2FEl%2BC7kT7us2Jkj3uw2%2BxGWTLHX5EbUJGAplI65TyifkNUxmg6Fh8nZXdg5mDkCWYbZDLfsjQlsjB5cJxiLFEJEk58SNfZ64wSPycuNIzYAG689BVV8Payi1ippMy4KBSkIfhXlDsI3sfeDoVOXK%2BdDEsRN23t%2Bq9kEEbsrj5OUVy6uHXKjvdiIBO9sxAzuO1%2FjWrH4PPg2nVLjaD5vYGnYYYx6cRsQJ7TBMLSpsb8GOqUBtXL%2FyAX7F%2BwXEiQHyS86cCrGvhjVzbCUJ0FuIn7xJUiFwpfgMUo8FNdSvMB8d8JlQ%2B7PMvs9gf%2B1F0CTm2Em%2FXF8AQEKK19qpzChiWbTxDqyUlzDC4WyGIliK69gifu28XtU820bwhXo2%2BSFw%2BWNMpaQri%2FRhOmjntnkxF%2BSH%2F40nzW39bMoYJouMDr2QNcdyi3kW9faw2ExHj10wyk0Z2mazEmf&X-Amz-Signature=7874ba4575aca98af5020b6abde24cc166e5cf1058fda2c591bd61f538875e62&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FQHTJJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG%2FbdP5noTWlJvWqJReEOaZvmDHDtInTYPaj6veG5rdgAiEAwL4GvzMWWjZiALQOTjnIratS46PSf%2FYvhzzkEDTH%2F9EqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoXB0mkpf5lX23sgircA74WDwdBIIkGjzPyYVbxqE37Nnwo%2B05V%2FtEBh5QZjfO%2Feitp5KgBNmyu4WPF0C2ZfBEPtCyZKWuac4GEHimNaY9WNDVsEH7n6jAWCAhdpC8sn0MPGNaTFkcIGe3XLX6qdfUHmARWTtyVdqKNiptXLmmnNbNbJQyzl%2BVnI57x%2BdSgQCFbLxnbxZFN0x4edgY9xQ%2FqwT0mKS0l1VQll678z6%2FFhxbe104zabnDqB1pYvCSy5tQDFx6D6c3EzjpDt%2FW2pXFUlMqIDYVMrbipIlY%2FoY2elCRbXgHujwchY6lFK01mqZNUOR%2Bghz4%2FnFHvWPfLa99jMd1dDIB3B2CzLKEjmLBfS18N5ZP8R4OQ4ucmGb3Qzs4H89qSAXLAcQsSWfqMhFHfnUqQ%2Bu5J7rmjQ9O8%2BzC3%2FEl%2BC7kT7us2Jkj3uw2%2BxGWTLHX5EbUJGAplI65TyifkNUxmg6Fh8nZXdg5mDkCWYbZDLfsjQlsjB5cJxiLFEJEk58SNfZ64wSPycuNIzYAG689BVV8Payi1ippMy4KBSkIfhXlDsI3sfeDoVOXK%2BdDEsRN23t%2Bq9kEEbsrj5OUVy6uHXKjvdiIBO9sxAzuO1%2FjWrH4PPg2nVLjaD5vYGnYYYx6cRsQJ7TBMLSpsb8GOqUBtXL%2FyAX7F%2BwXEiQHyS86cCrGvhjVzbCUJ0FuIn7xJUiFwpfgMUo8FNdSvMB8d8JlQ%2B7PMvs9gf%2B1F0CTm2Em%2FXF8AQEKK19qpzChiWbTxDqyUlzDC4WyGIliK69gifu28XtU820bwhXo2%2BSFw%2BWNMpaQri%2FRhOmjntnkxF%2BSH%2F40nzW39bMoYJouMDr2QNcdyi3kW9faw2ExHj10wyk0Z2mazEmf&X-Amz-Signature=15b3b4687c047276c5776485092d0533e886d8eb4d89d84436beba661c51018e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FQHTJJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG%2FbdP5noTWlJvWqJReEOaZvmDHDtInTYPaj6veG5rdgAiEAwL4GvzMWWjZiALQOTjnIratS46PSf%2FYvhzzkEDTH%2F9EqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoXB0mkpf5lX23sgircA74WDwdBIIkGjzPyYVbxqE37Nnwo%2B05V%2FtEBh5QZjfO%2Feitp5KgBNmyu4WPF0C2ZfBEPtCyZKWuac4GEHimNaY9WNDVsEH7n6jAWCAhdpC8sn0MPGNaTFkcIGe3XLX6qdfUHmARWTtyVdqKNiptXLmmnNbNbJQyzl%2BVnI57x%2BdSgQCFbLxnbxZFN0x4edgY9xQ%2FqwT0mKS0l1VQll678z6%2FFhxbe104zabnDqB1pYvCSy5tQDFx6D6c3EzjpDt%2FW2pXFUlMqIDYVMrbipIlY%2FoY2elCRbXgHujwchY6lFK01mqZNUOR%2Bghz4%2FnFHvWPfLa99jMd1dDIB3B2CzLKEjmLBfS18N5ZP8R4OQ4ucmGb3Qzs4H89qSAXLAcQsSWfqMhFHfnUqQ%2Bu5J7rmjQ9O8%2BzC3%2FEl%2BC7kT7us2Jkj3uw2%2BxGWTLHX5EbUJGAplI65TyifkNUxmg6Fh8nZXdg5mDkCWYbZDLfsjQlsjB5cJxiLFEJEk58SNfZ64wSPycuNIzYAG689BVV8Payi1ippMy4KBSkIfhXlDsI3sfeDoVOXK%2BdDEsRN23t%2Bq9kEEbsrj5OUVy6uHXKjvdiIBO9sxAzuO1%2FjWrH4PPg2nVLjaD5vYGnYYYx6cRsQJ7TBMLSpsb8GOqUBtXL%2FyAX7F%2BwXEiQHyS86cCrGvhjVzbCUJ0FuIn7xJUiFwpfgMUo8FNdSvMB8d8JlQ%2B7PMvs9gf%2B1F0CTm2Em%2FXF8AQEKK19qpzChiWbTxDqyUlzDC4WyGIliK69gifu28XtU820bwhXo2%2BSFw%2BWNMpaQri%2FRhOmjntnkxF%2BSH%2F40nzW39bMoYJouMDr2QNcdyi3kW9faw2ExHj10wyk0Z2mazEmf&X-Amz-Signature=6656a62fde2955e833306752c8d04e63f07e7b702241bb7bbad2160899437bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
