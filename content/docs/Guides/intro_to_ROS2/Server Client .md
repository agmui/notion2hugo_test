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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG3AQP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDul2xaNaAe9vJEQPg20E4UIGQibuP7QhLqSzs0nX%2BaLwIgJfxOkibadg3SKPSxhPP7qmUmsuSGE9U8yqrfiIXzACoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGS150x%2FlBdnlZNn9SrcAxKfFkSuDzCmabMRfAD7wg9ZUI4cazjHGNbLbvLHjvxLzg%2FbjD0KV9MyjBcA8XynvI0MEjH2m%2FVmHqMEqXTqTI%2F3mYoAeyMlgdbsdL5GtG8Tsgxo177Ve4UxYZzkGMipmDL4WKl6QorZgXFr7HQ9KCeWTTN23RLgjwJOzqHXHq05WCirOgvQj7C5dI8hqnd6dam35owd7UvChakawLG9oytFG80Um00qxdfPNuyENPsGXSmsu%2FXy%2BESAqw3bG1avDwGYa8I55Xf%2B%2FJ3Uu9NWDT51kOCjsOeJtOn5JUL1a%2Finl5a8q%2BaT9cFgDW5ySCHPJ8Zh23YGAFN467H0tO2Le6Cjvcb%2FJxm2HSHuYuzZtiZxEN6eys63%2FOxWlQzpXUO4KlZLIYwMrT9LFCyr2XsEFJvMbpeYihjmaluvd4R6dELhDnQV36l5thW09jcRLfqcMaaA8KUv3E1whluBRGt50bILzZI%2F7J2XtSp6%2BFtXvFn9yARTMFoo%2B5w%2BcZ%2FFyLt7kbaBjFp2gmvVZHaPBF74snd36U5rrIx1CmQ46awTHJNydSYga3BPSZIcsd972TgA7noe7K1hseYSRioghsXCecnfw%2BQn3WFn47K%2FVfPhpsf9TDjmpQFg1raYaiT3MPnahL0GOqUBseFNF1%2Fh3z3eboRm2j7YjB4PjFwD2EssQrDmqheSd%2FbpUsNYpcLl2Zv26uLYFqBDG55mohgKc4eF5rcaTWf7zUs5tKjkKbXdem9%2FOEeI%2BPuPdiNqI3aSIWbnkEYYAPyrrT4r1agh5xA%2BZP79XtVM5jyOaXNwGDf3tbt4qtXU2GgQWBswrj4r53vqXKAxDnT3LJvf%2FkXFpQc9j6gBQsbvw2Th9qmc&X-Amz-Signature=c03d346e82c3dba38cfa4c3c91c516cdab05c46920a844d715f9ee1a63513322&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG3AQP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDul2xaNaAe9vJEQPg20E4UIGQibuP7QhLqSzs0nX%2BaLwIgJfxOkibadg3SKPSxhPP7qmUmsuSGE9U8yqrfiIXzACoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGS150x%2FlBdnlZNn9SrcAxKfFkSuDzCmabMRfAD7wg9ZUI4cazjHGNbLbvLHjvxLzg%2FbjD0KV9MyjBcA8XynvI0MEjH2m%2FVmHqMEqXTqTI%2F3mYoAeyMlgdbsdL5GtG8Tsgxo177Ve4UxYZzkGMipmDL4WKl6QorZgXFr7HQ9KCeWTTN23RLgjwJOzqHXHq05WCirOgvQj7C5dI8hqnd6dam35owd7UvChakawLG9oytFG80Um00qxdfPNuyENPsGXSmsu%2FXy%2BESAqw3bG1avDwGYa8I55Xf%2B%2FJ3Uu9NWDT51kOCjsOeJtOn5JUL1a%2Finl5a8q%2BaT9cFgDW5ySCHPJ8Zh23YGAFN467H0tO2Le6Cjvcb%2FJxm2HSHuYuzZtiZxEN6eys63%2FOxWlQzpXUO4KlZLIYwMrT9LFCyr2XsEFJvMbpeYihjmaluvd4R6dELhDnQV36l5thW09jcRLfqcMaaA8KUv3E1whluBRGt50bILzZI%2F7J2XtSp6%2BFtXvFn9yARTMFoo%2B5w%2BcZ%2FFyLt7kbaBjFp2gmvVZHaPBF74snd36U5rrIx1CmQ46awTHJNydSYga3BPSZIcsd972TgA7noe7K1hseYSRioghsXCecnfw%2BQn3WFn47K%2FVfPhpsf9TDjmpQFg1raYaiT3MPnahL0GOqUBseFNF1%2Fh3z3eboRm2j7YjB4PjFwD2EssQrDmqheSd%2FbpUsNYpcLl2Zv26uLYFqBDG55mohgKc4eF5rcaTWf7zUs5tKjkKbXdem9%2FOEeI%2BPuPdiNqI3aSIWbnkEYYAPyrrT4r1agh5xA%2BZP79XtVM5jyOaXNwGDf3tbt4qtXU2GgQWBswrj4r53vqXKAxDnT3LJvf%2FkXFpQc9j6gBQsbvw2Th9qmc&X-Amz-Signature=4c444563dfca0be91dccad32e8a1b14f01a0e48b3ce3bfe7a772820e674a2223&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG3AQP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDul2xaNaAe9vJEQPg20E4UIGQibuP7QhLqSzs0nX%2BaLwIgJfxOkibadg3SKPSxhPP7qmUmsuSGE9U8yqrfiIXzACoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGS150x%2FlBdnlZNn9SrcAxKfFkSuDzCmabMRfAD7wg9ZUI4cazjHGNbLbvLHjvxLzg%2FbjD0KV9MyjBcA8XynvI0MEjH2m%2FVmHqMEqXTqTI%2F3mYoAeyMlgdbsdL5GtG8Tsgxo177Ve4UxYZzkGMipmDL4WKl6QorZgXFr7HQ9KCeWTTN23RLgjwJOzqHXHq05WCirOgvQj7C5dI8hqnd6dam35owd7UvChakawLG9oytFG80Um00qxdfPNuyENPsGXSmsu%2FXy%2BESAqw3bG1avDwGYa8I55Xf%2B%2FJ3Uu9NWDT51kOCjsOeJtOn5JUL1a%2Finl5a8q%2BaT9cFgDW5ySCHPJ8Zh23YGAFN467H0tO2Le6Cjvcb%2FJxm2HSHuYuzZtiZxEN6eys63%2FOxWlQzpXUO4KlZLIYwMrT9LFCyr2XsEFJvMbpeYihjmaluvd4R6dELhDnQV36l5thW09jcRLfqcMaaA8KUv3E1whluBRGt50bILzZI%2F7J2XtSp6%2BFtXvFn9yARTMFoo%2B5w%2BcZ%2FFyLt7kbaBjFp2gmvVZHaPBF74snd36U5rrIx1CmQ46awTHJNydSYga3BPSZIcsd972TgA7noe7K1hseYSRioghsXCecnfw%2BQn3WFn47K%2FVfPhpsf9TDjmpQFg1raYaiT3MPnahL0GOqUBseFNF1%2Fh3z3eboRm2j7YjB4PjFwD2EssQrDmqheSd%2FbpUsNYpcLl2Zv26uLYFqBDG55mohgKc4eF5rcaTWf7zUs5tKjkKbXdem9%2FOEeI%2BPuPdiNqI3aSIWbnkEYYAPyrrT4r1agh5xA%2BZP79XtVM5jyOaXNwGDf3tbt4qtXU2GgQWBswrj4r53vqXKAxDnT3LJvf%2FkXFpQc9j6gBQsbvw2Th9qmc&X-Amz-Signature=6a6f2c0185cd6a880414f625a795e8ddf9fbfb435b23069cdb36b2fc3ac958a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG3AQP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDul2xaNaAe9vJEQPg20E4UIGQibuP7QhLqSzs0nX%2BaLwIgJfxOkibadg3SKPSxhPP7qmUmsuSGE9U8yqrfiIXzACoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGS150x%2FlBdnlZNn9SrcAxKfFkSuDzCmabMRfAD7wg9ZUI4cazjHGNbLbvLHjvxLzg%2FbjD0KV9MyjBcA8XynvI0MEjH2m%2FVmHqMEqXTqTI%2F3mYoAeyMlgdbsdL5GtG8Tsgxo177Ve4UxYZzkGMipmDL4WKl6QorZgXFr7HQ9KCeWTTN23RLgjwJOzqHXHq05WCirOgvQj7C5dI8hqnd6dam35owd7UvChakawLG9oytFG80Um00qxdfPNuyENPsGXSmsu%2FXy%2BESAqw3bG1avDwGYa8I55Xf%2B%2FJ3Uu9NWDT51kOCjsOeJtOn5JUL1a%2Finl5a8q%2BaT9cFgDW5ySCHPJ8Zh23YGAFN467H0tO2Le6Cjvcb%2FJxm2HSHuYuzZtiZxEN6eys63%2FOxWlQzpXUO4KlZLIYwMrT9LFCyr2XsEFJvMbpeYihjmaluvd4R6dELhDnQV36l5thW09jcRLfqcMaaA8KUv3E1whluBRGt50bILzZI%2F7J2XtSp6%2BFtXvFn9yARTMFoo%2B5w%2BcZ%2FFyLt7kbaBjFp2gmvVZHaPBF74snd36U5rrIx1CmQ46awTHJNydSYga3BPSZIcsd972TgA7noe7K1hseYSRioghsXCecnfw%2BQn3WFn47K%2FVfPhpsf9TDjmpQFg1raYaiT3MPnahL0GOqUBseFNF1%2Fh3z3eboRm2j7YjB4PjFwD2EssQrDmqheSd%2FbpUsNYpcLl2Zv26uLYFqBDG55mohgKc4eF5rcaTWf7zUs5tKjkKbXdem9%2FOEeI%2BPuPdiNqI3aSIWbnkEYYAPyrrT4r1agh5xA%2BZP79XtVM5jyOaXNwGDf3tbt4qtXU2GgQWBswrj4r53vqXKAxDnT3LJvf%2FkXFpQc9j6gBQsbvw2Th9qmc&X-Amz-Signature=b1a4c0f7eb25a2407d58f04dcc5cff2dadbde7e52bd75efc3a4cb1dfb26b55aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG3AQP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDul2xaNaAe9vJEQPg20E4UIGQibuP7QhLqSzs0nX%2BaLwIgJfxOkibadg3SKPSxhPP7qmUmsuSGE9U8yqrfiIXzACoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGS150x%2FlBdnlZNn9SrcAxKfFkSuDzCmabMRfAD7wg9ZUI4cazjHGNbLbvLHjvxLzg%2FbjD0KV9MyjBcA8XynvI0MEjH2m%2FVmHqMEqXTqTI%2F3mYoAeyMlgdbsdL5GtG8Tsgxo177Ve4UxYZzkGMipmDL4WKl6QorZgXFr7HQ9KCeWTTN23RLgjwJOzqHXHq05WCirOgvQj7C5dI8hqnd6dam35owd7UvChakawLG9oytFG80Um00qxdfPNuyENPsGXSmsu%2FXy%2BESAqw3bG1avDwGYa8I55Xf%2B%2FJ3Uu9NWDT51kOCjsOeJtOn5JUL1a%2Finl5a8q%2BaT9cFgDW5ySCHPJ8Zh23YGAFN467H0tO2Le6Cjvcb%2FJxm2HSHuYuzZtiZxEN6eys63%2FOxWlQzpXUO4KlZLIYwMrT9LFCyr2XsEFJvMbpeYihjmaluvd4R6dELhDnQV36l5thW09jcRLfqcMaaA8KUv3E1whluBRGt50bILzZI%2F7J2XtSp6%2BFtXvFn9yARTMFoo%2B5w%2BcZ%2FFyLt7kbaBjFp2gmvVZHaPBF74snd36U5rrIx1CmQ46awTHJNydSYga3BPSZIcsd972TgA7noe7K1hseYSRioghsXCecnfw%2BQn3WFn47K%2FVfPhpsf9TDjmpQFg1raYaiT3MPnahL0GOqUBseFNF1%2Fh3z3eboRm2j7YjB4PjFwD2EssQrDmqheSd%2FbpUsNYpcLl2Zv26uLYFqBDG55mohgKc4eF5rcaTWf7zUs5tKjkKbXdem9%2FOEeI%2BPuPdiNqI3aSIWbnkEYYAPyrrT4r1agh5xA%2BZP79XtVM5jyOaXNwGDf3tbt4qtXU2GgQWBswrj4r53vqXKAxDnT3LJvf%2FkXFpQc9j6gBQsbvw2Th9qmc&X-Amz-Signature=523d3656ea6df30c16e1c7598490fa19f669832d47bc4ecb6f2d85511416ce5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
