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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPLRN76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD5i4o6zG9eD9JhncYxi4ub3rhoB%2BY9BRBGo0H1adxRiAIhAJWwyfHbwTk39iyMOMRK4HmLNuW2%2B9oVNUCPJCuOZUSFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxbBp4GW1BoAZz%2B56oq3AO2xDcZfI1Gk5iD5QO%2FfCLSMGhPvRyFDeqr3LHcJPMOwK2HwbbSyuE3oO2hJJvNBxa2781cVdJBpeJELmIZp3YxuDo1Jh3XtJKJKi7sekY0Trr8jVTiX3RsY0A23gW3kCld27mAGb4bg5lPT6TlFy09cN%2F06O9CPUTNa9ijCAxJttGHUYjpsICC8a%2FmkSpklykX63ric3HbYPSx5%2Fe77nwnQKzTYsXupkqNsGvzg3aSTbZtF63b1O%2Fm5zDJt6m6oRuozVgTv8nMVAOUO2DatqXOn7zFEBOfKhrJIWaXvceeY%2BLO6lsrn2UzJvX%2FLZG%2F5Zh%2F%2BhTviwWu%2FM7aT25VSJlPZHuIFk7ijqagq1aenXpjO%2BOJXJJQDgU57wQumKpoU%2Bvl8CJp5FPs35RNVXwOiqDko%2Bb1Pi8tB8z0YZAmutGujoYgwcT7qV0cla%2F5D2zoaladnJD5MlhDJi%2BO%2Bqak3KBL2qH0G9iVtSikDgJ63LAkAmjrg4vcFHtVcw%2BS10YirvcBVsaB2jnImklh3i02CkRJaJ5cqAVebjfcopsiioMGRDXTZidNQ%2Bp9yGEwjCPegWLhWgV8DCDCr2uSmROyLcMJyW7bDPx6DpORcU%2FQ%2FrQJwJQjczi4mzDD4fj9vjCQzMjEBjqkAb7MQAUWE9JL5qG3oDdu3IzDTA53VXDv%2FLrCKRbi%2BymRbFrJenGg%2BqDcOnqsNfDFN8fuuiwtXTjNKpZ%2F5UjDXe4NCLb%2BtSH%2FrWoMdpSPaQk2ftuSLhEkzP3XFh8SbXsNnsDirgMRQpLvBOPzEE9pa5UelKA685ZUTPFY7An%2FKXrGtdtZe2%2FXFqWwATmF%2BfXRMtg3JfojCK5bM2JPkzxkuYtcJUNC&X-Amz-Signature=617fd47ea2301be148b4d5c7f87058b7a09f5ab477cabed3f3aff55200fcabff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPLRN76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD5i4o6zG9eD9JhncYxi4ub3rhoB%2BY9BRBGo0H1adxRiAIhAJWwyfHbwTk39iyMOMRK4HmLNuW2%2B9oVNUCPJCuOZUSFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxbBp4GW1BoAZz%2B56oq3AO2xDcZfI1Gk5iD5QO%2FfCLSMGhPvRyFDeqr3LHcJPMOwK2HwbbSyuE3oO2hJJvNBxa2781cVdJBpeJELmIZp3YxuDo1Jh3XtJKJKi7sekY0Trr8jVTiX3RsY0A23gW3kCld27mAGb4bg5lPT6TlFy09cN%2F06O9CPUTNa9ijCAxJttGHUYjpsICC8a%2FmkSpklykX63ric3HbYPSx5%2Fe77nwnQKzTYsXupkqNsGvzg3aSTbZtF63b1O%2Fm5zDJt6m6oRuozVgTv8nMVAOUO2DatqXOn7zFEBOfKhrJIWaXvceeY%2BLO6lsrn2UzJvX%2FLZG%2F5Zh%2F%2BhTviwWu%2FM7aT25VSJlPZHuIFk7ijqagq1aenXpjO%2BOJXJJQDgU57wQumKpoU%2Bvl8CJp5FPs35RNVXwOiqDko%2Bb1Pi8tB8z0YZAmutGujoYgwcT7qV0cla%2F5D2zoaladnJD5MlhDJi%2BO%2Bqak3KBL2qH0G9iVtSikDgJ63LAkAmjrg4vcFHtVcw%2BS10YirvcBVsaB2jnImklh3i02CkRJaJ5cqAVebjfcopsiioMGRDXTZidNQ%2Bp9yGEwjCPegWLhWgV8DCDCr2uSmROyLcMJyW7bDPx6DpORcU%2FQ%2FrQJwJQjczi4mzDD4fj9vjCQzMjEBjqkAb7MQAUWE9JL5qG3oDdu3IzDTA53VXDv%2FLrCKRbi%2BymRbFrJenGg%2BqDcOnqsNfDFN8fuuiwtXTjNKpZ%2F5UjDXe4NCLb%2BtSH%2FrWoMdpSPaQk2ftuSLhEkzP3XFh8SbXsNnsDirgMRQpLvBOPzEE9pa5UelKA685ZUTPFY7An%2FKXrGtdtZe2%2FXFqWwATmF%2BfXRMtg3JfojCK5bM2JPkzxkuYtcJUNC&X-Amz-Signature=264534104064296ca8bd68e5fc0d7bb5c21670a17b6f675647694ea9de6ab5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPLRN76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD5i4o6zG9eD9JhncYxi4ub3rhoB%2BY9BRBGo0H1adxRiAIhAJWwyfHbwTk39iyMOMRK4HmLNuW2%2B9oVNUCPJCuOZUSFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxbBp4GW1BoAZz%2B56oq3AO2xDcZfI1Gk5iD5QO%2FfCLSMGhPvRyFDeqr3LHcJPMOwK2HwbbSyuE3oO2hJJvNBxa2781cVdJBpeJELmIZp3YxuDo1Jh3XtJKJKi7sekY0Trr8jVTiX3RsY0A23gW3kCld27mAGb4bg5lPT6TlFy09cN%2F06O9CPUTNa9ijCAxJttGHUYjpsICC8a%2FmkSpklykX63ric3HbYPSx5%2Fe77nwnQKzTYsXupkqNsGvzg3aSTbZtF63b1O%2Fm5zDJt6m6oRuozVgTv8nMVAOUO2DatqXOn7zFEBOfKhrJIWaXvceeY%2BLO6lsrn2UzJvX%2FLZG%2F5Zh%2F%2BhTviwWu%2FM7aT25VSJlPZHuIFk7ijqagq1aenXpjO%2BOJXJJQDgU57wQumKpoU%2Bvl8CJp5FPs35RNVXwOiqDko%2Bb1Pi8tB8z0YZAmutGujoYgwcT7qV0cla%2F5D2zoaladnJD5MlhDJi%2BO%2Bqak3KBL2qH0G9iVtSikDgJ63LAkAmjrg4vcFHtVcw%2BS10YirvcBVsaB2jnImklh3i02CkRJaJ5cqAVebjfcopsiioMGRDXTZidNQ%2Bp9yGEwjCPegWLhWgV8DCDCr2uSmROyLcMJyW7bDPx6DpORcU%2FQ%2FrQJwJQjczi4mzDD4fj9vjCQzMjEBjqkAb7MQAUWE9JL5qG3oDdu3IzDTA53VXDv%2FLrCKRbi%2BymRbFrJenGg%2BqDcOnqsNfDFN8fuuiwtXTjNKpZ%2F5UjDXe4NCLb%2BtSH%2FrWoMdpSPaQk2ftuSLhEkzP3XFh8SbXsNnsDirgMRQpLvBOPzEE9pa5UelKA685ZUTPFY7An%2FKXrGtdtZe2%2FXFqWwATmF%2BfXRMtg3JfojCK5bM2JPkzxkuYtcJUNC&X-Amz-Signature=47c90364125bc0f479cdec64c67461f2b760c9fec6db880d16a37a7fcba53489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPLRN76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD5i4o6zG9eD9JhncYxi4ub3rhoB%2BY9BRBGo0H1adxRiAIhAJWwyfHbwTk39iyMOMRK4HmLNuW2%2B9oVNUCPJCuOZUSFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxbBp4GW1BoAZz%2B56oq3AO2xDcZfI1Gk5iD5QO%2FfCLSMGhPvRyFDeqr3LHcJPMOwK2HwbbSyuE3oO2hJJvNBxa2781cVdJBpeJELmIZp3YxuDo1Jh3XtJKJKi7sekY0Trr8jVTiX3RsY0A23gW3kCld27mAGb4bg5lPT6TlFy09cN%2F06O9CPUTNa9ijCAxJttGHUYjpsICC8a%2FmkSpklykX63ric3HbYPSx5%2Fe77nwnQKzTYsXupkqNsGvzg3aSTbZtF63b1O%2Fm5zDJt6m6oRuozVgTv8nMVAOUO2DatqXOn7zFEBOfKhrJIWaXvceeY%2BLO6lsrn2UzJvX%2FLZG%2F5Zh%2F%2BhTviwWu%2FM7aT25VSJlPZHuIFk7ijqagq1aenXpjO%2BOJXJJQDgU57wQumKpoU%2Bvl8CJp5FPs35RNVXwOiqDko%2Bb1Pi8tB8z0YZAmutGujoYgwcT7qV0cla%2F5D2zoaladnJD5MlhDJi%2BO%2Bqak3KBL2qH0G9iVtSikDgJ63LAkAmjrg4vcFHtVcw%2BS10YirvcBVsaB2jnImklh3i02CkRJaJ5cqAVebjfcopsiioMGRDXTZidNQ%2Bp9yGEwjCPegWLhWgV8DCDCr2uSmROyLcMJyW7bDPx6DpORcU%2FQ%2FrQJwJQjczi4mzDD4fj9vjCQzMjEBjqkAb7MQAUWE9JL5qG3oDdu3IzDTA53VXDv%2FLrCKRbi%2BymRbFrJenGg%2BqDcOnqsNfDFN8fuuiwtXTjNKpZ%2F5UjDXe4NCLb%2BtSH%2FrWoMdpSPaQk2ftuSLhEkzP3XFh8SbXsNnsDirgMRQpLvBOPzEE9pa5UelKA685ZUTPFY7An%2FKXrGtdtZe2%2FXFqWwATmF%2BfXRMtg3JfojCK5bM2JPkzxkuYtcJUNC&X-Amz-Signature=bcf637fe25e59cd8b06f4b9bd00db45c0c4dfbd7d4e1e8e7c7f86b029596fe94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPLRN76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD5i4o6zG9eD9JhncYxi4ub3rhoB%2BY9BRBGo0H1adxRiAIhAJWwyfHbwTk39iyMOMRK4HmLNuW2%2B9oVNUCPJCuOZUSFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxbBp4GW1BoAZz%2B56oq3AO2xDcZfI1Gk5iD5QO%2FfCLSMGhPvRyFDeqr3LHcJPMOwK2HwbbSyuE3oO2hJJvNBxa2781cVdJBpeJELmIZp3YxuDo1Jh3XtJKJKi7sekY0Trr8jVTiX3RsY0A23gW3kCld27mAGb4bg5lPT6TlFy09cN%2F06O9CPUTNa9ijCAxJttGHUYjpsICC8a%2FmkSpklykX63ric3HbYPSx5%2Fe77nwnQKzTYsXupkqNsGvzg3aSTbZtF63b1O%2Fm5zDJt6m6oRuozVgTv8nMVAOUO2DatqXOn7zFEBOfKhrJIWaXvceeY%2BLO6lsrn2UzJvX%2FLZG%2F5Zh%2F%2BhTviwWu%2FM7aT25VSJlPZHuIFk7ijqagq1aenXpjO%2BOJXJJQDgU57wQumKpoU%2Bvl8CJp5FPs35RNVXwOiqDko%2Bb1Pi8tB8z0YZAmutGujoYgwcT7qV0cla%2F5D2zoaladnJD5MlhDJi%2BO%2Bqak3KBL2qH0G9iVtSikDgJ63LAkAmjrg4vcFHtVcw%2BS10YirvcBVsaB2jnImklh3i02CkRJaJ5cqAVebjfcopsiioMGRDXTZidNQ%2Bp9yGEwjCPegWLhWgV8DCDCr2uSmROyLcMJyW7bDPx6DpORcU%2FQ%2FrQJwJQjczi4mzDD4fj9vjCQzMjEBjqkAb7MQAUWE9JL5qG3oDdu3IzDTA53VXDv%2FLrCKRbi%2BymRbFrJenGg%2BqDcOnqsNfDFN8fuuiwtXTjNKpZ%2F5UjDXe4NCLb%2BtSH%2FrWoMdpSPaQk2ftuSLhEkzP3XFh8SbXsNnsDirgMRQpLvBOPzEE9pa5UelKA685ZUTPFY7An%2FKXrGtdtZe2%2FXFqWwATmF%2BfXRMtg3JfojCK5bM2JPkzxkuYtcJUNC&X-Amz-Signature=fc2a2e8cf77c188fc04d13b9a323db60a176d937abcd7b4fa95b09338fe3f425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
