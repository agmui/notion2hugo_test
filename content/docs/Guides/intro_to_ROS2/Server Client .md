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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPPV36Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCBiIGEeeJwuqv9GS%2F31W1WAEiFFQ8oLUbNK%2FBVhZgTtAIgXYyUR8rAM6aKxaoZGn76h2y0dMFO9XztvulYySfgFmIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMESPoIVUToxIIGgUCrcA%2BqAZufMVqEcrBjN83yukidmkhboBOkfOuKd8HGNX2WYjIGsFFWxgmLJkLqE1Ntszfd19gax9rZUNQnigEdFoN4uwmF5Gy23ua4jPxkJNDpVgHy8aRUKLipXbA%2BB9xLaRi4yOXmanfj4KIwc49GaPwDi%2F8yt2cJcFm1bKyCQb68anqqC6AF5z6oL18aLuwdrrUpGk2Ssi5I3zTXPXDWABDoTpYt1hp%2FDYM5DxpqOdMlnoKVpl2kY%2FPURkODVY5KuKoaAMoNVC%2FeVUuK4nIV%2FfCLICmJHwpoJLyrrKCceOi8cW0JOfrS%2FUF7BDQEbP%2BAuDlc%2FpXMJLRMU79QfD%2FvyG3Cu2SxujzxmhL%2BsgpttZJ1tV3SHDmGtBO8CpJO%2FE7bSOJWqGzLAEdsZsenNBrM1GdSmrYxQzMEca8toF3aizdR2j3dgKLFVsZR5njHVtZvXaA0Is%2F0c4crw7ut4GMB8uNckVaxDW4v79HaGjP%2Fw7AJBpGoVNiQC08%2FoCfQJAIPE5NLKUfyQcy2Yjk6cLqbZwpdPBo5dgDvoaNZORw1uuNecHeqnm32nCHyEzM0Mp84LtHm6FygTn48Fh3BB4ki227iJ1O18f6TzYrAF9mAjpT8RRLoxdRrmzkjn3bVGMMi6tsIGOqUB4mmOgA73IlwUjcc0T%2BsHTiw%2FisuX5U4V6tUklPM9rSJH2H%2BvSlDExkMZOQ2BRmznx1OZD0dgOBjiuJLirYiY0W0OT5jwz6LGKYXNVOCIlt1E8HdsgD%2F6LNA%2Fk8LTkfhVKyZ0GeHJCxEVbymhVPO5KSmMYcXtx5VFcRpw2466La222Tjw1PgfuRdZpvyI7VEuvZoWnysEwhiG1YT4crYI2n7%2FybFL&X-Amz-Signature=e68a80c2bb2c3d31f23c9c5906ec68d82ecad944588550fba04401d0f6662a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPPV36Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCBiIGEeeJwuqv9GS%2F31W1WAEiFFQ8oLUbNK%2FBVhZgTtAIgXYyUR8rAM6aKxaoZGn76h2y0dMFO9XztvulYySfgFmIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMESPoIVUToxIIGgUCrcA%2BqAZufMVqEcrBjN83yukidmkhboBOkfOuKd8HGNX2WYjIGsFFWxgmLJkLqE1Ntszfd19gax9rZUNQnigEdFoN4uwmF5Gy23ua4jPxkJNDpVgHy8aRUKLipXbA%2BB9xLaRi4yOXmanfj4KIwc49GaPwDi%2F8yt2cJcFm1bKyCQb68anqqC6AF5z6oL18aLuwdrrUpGk2Ssi5I3zTXPXDWABDoTpYt1hp%2FDYM5DxpqOdMlnoKVpl2kY%2FPURkODVY5KuKoaAMoNVC%2FeVUuK4nIV%2FfCLICmJHwpoJLyrrKCceOi8cW0JOfrS%2FUF7BDQEbP%2BAuDlc%2FpXMJLRMU79QfD%2FvyG3Cu2SxujzxmhL%2BsgpttZJ1tV3SHDmGtBO8CpJO%2FE7bSOJWqGzLAEdsZsenNBrM1GdSmrYxQzMEca8toF3aizdR2j3dgKLFVsZR5njHVtZvXaA0Is%2F0c4crw7ut4GMB8uNckVaxDW4v79HaGjP%2Fw7AJBpGoVNiQC08%2FoCfQJAIPE5NLKUfyQcy2Yjk6cLqbZwpdPBo5dgDvoaNZORw1uuNecHeqnm32nCHyEzM0Mp84LtHm6FygTn48Fh3BB4ki227iJ1O18f6TzYrAF9mAjpT8RRLoxdRrmzkjn3bVGMMi6tsIGOqUB4mmOgA73IlwUjcc0T%2BsHTiw%2FisuX5U4V6tUklPM9rSJH2H%2BvSlDExkMZOQ2BRmznx1OZD0dgOBjiuJLirYiY0W0OT5jwz6LGKYXNVOCIlt1E8HdsgD%2F6LNA%2Fk8LTkfhVKyZ0GeHJCxEVbymhVPO5KSmMYcXtx5VFcRpw2466La222Tjw1PgfuRdZpvyI7VEuvZoWnysEwhiG1YT4crYI2n7%2FybFL&X-Amz-Signature=03becc7cec3d5bda7a0dad44ef051f92cc0800f8dc38af118835ca5a2597ae03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPPV36Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCBiIGEeeJwuqv9GS%2F31W1WAEiFFQ8oLUbNK%2FBVhZgTtAIgXYyUR8rAM6aKxaoZGn76h2y0dMFO9XztvulYySfgFmIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMESPoIVUToxIIGgUCrcA%2BqAZufMVqEcrBjN83yukidmkhboBOkfOuKd8HGNX2WYjIGsFFWxgmLJkLqE1Ntszfd19gax9rZUNQnigEdFoN4uwmF5Gy23ua4jPxkJNDpVgHy8aRUKLipXbA%2BB9xLaRi4yOXmanfj4KIwc49GaPwDi%2F8yt2cJcFm1bKyCQb68anqqC6AF5z6oL18aLuwdrrUpGk2Ssi5I3zTXPXDWABDoTpYt1hp%2FDYM5DxpqOdMlnoKVpl2kY%2FPURkODVY5KuKoaAMoNVC%2FeVUuK4nIV%2FfCLICmJHwpoJLyrrKCceOi8cW0JOfrS%2FUF7BDQEbP%2BAuDlc%2FpXMJLRMU79QfD%2FvyG3Cu2SxujzxmhL%2BsgpttZJ1tV3SHDmGtBO8CpJO%2FE7bSOJWqGzLAEdsZsenNBrM1GdSmrYxQzMEca8toF3aizdR2j3dgKLFVsZR5njHVtZvXaA0Is%2F0c4crw7ut4GMB8uNckVaxDW4v79HaGjP%2Fw7AJBpGoVNiQC08%2FoCfQJAIPE5NLKUfyQcy2Yjk6cLqbZwpdPBo5dgDvoaNZORw1uuNecHeqnm32nCHyEzM0Mp84LtHm6FygTn48Fh3BB4ki227iJ1O18f6TzYrAF9mAjpT8RRLoxdRrmzkjn3bVGMMi6tsIGOqUB4mmOgA73IlwUjcc0T%2BsHTiw%2FisuX5U4V6tUklPM9rSJH2H%2BvSlDExkMZOQ2BRmznx1OZD0dgOBjiuJLirYiY0W0OT5jwz6LGKYXNVOCIlt1E8HdsgD%2F6LNA%2Fk8LTkfhVKyZ0GeHJCxEVbymhVPO5KSmMYcXtx5VFcRpw2466La222Tjw1PgfuRdZpvyI7VEuvZoWnysEwhiG1YT4crYI2n7%2FybFL&X-Amz-Signature=4a456d42b706e9097de5f2a1c0f81680d43ca4fa80a971cde18ba6ffdf73d092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPPV36Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCBiIGEeeJwuqv9GS%2F31W1WAEiFFQ8oLUbNK%2FBVhZgTtAIgXYyUR8rAM6aKxaoZGn76h2y0dMFO9XztvulYySfgFmIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMESPoIVUToxIIGgUCrcA%2BqAZufMVqEcrBjN83yukidmkhboBOkfOuKd8HGNX2WYjIGsFFWxgmLJkLqE1Ntszfd19gax9rZUNQnigEdFoN4uwmF5Gy23ua4jPxkJNDpVgHy8aRUKLipXbA%2BB9xLaRi4yOXmanfj4KIwc49GaPwDi%2F8yt2cJcFm1bKyCQb68anqqC6AF5z6oL18aLuwdrrUpGk2Ssi5I3zTXPXDWABDoTpYt1hp%2FDYM5DxpqOdMlnoKVpl2kY%2FPURkODVY5KuKoaAMoNVC%2FeVUuK4nIV%2FfCLICmJHwpoJLyrrKCceOi8cW0JOfrS%2FUF7BDQEbP%2BAuDlc%2FpXMJLRMU79QfD%2FvyG3Cu2SxujzxmhL%2BsgpttZJ1tV3SHDmGtBO8CpJO%2FE7bSOJWqGzLAEdsZsenNBrM1GdSmrYxQzMEca8toF3aizdR2j3dgKLFVsZR5njHVtZvXaA0Is%2F0c4crw7ut4GMB8uNckVaxDW4v79HaGjP%2Fw7AJBpGoVNiQC08%2FoCfQJAIPE5NLKUfyQcy2Yjk6cLqbZwpdPBo5dgDvoaNZORw1uuNecHeqnm32nCHyEzM0Mp84LtHm6FygTn48Fh3BB4ki227iJ1O18f6TzYrAF9mAjpT8RRLoxdRrmzkjn3bVGMMi6tsIGOqUB4mmOgA73IlwUjcc0T%2BsHTiw%2FisuX5U4V6tUklPM9rSJH2H%2BvSlDExkMZOQ2BRmznx1OZD0dgOBjiuJLirYiY0W0OT5jwz6LGKYXNVOCIlt1E8HdsgD%2F6LNA%2Fk8LTkfhVKyZ0GeHJCxEVbymhVPO5KSmMYcXtx5VFcRpw2466La222Tjw1PgfuRdZpvyI7VEuvZoWnysEwhiG1YT4crYI2n7%2FybFL&X-Amz-Signature=825a9ae43d19c4489c53cd22ab0c4f54401bf0c47280cf001882a86998f8515b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPPV36Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCBiIGEeeJwuqv9GS%2F31W1WAEiFFQ8oLUbNK%2FBVhZgTtAIgXYyUR8rAM6aKxaoZGn76h2y0dMFO9XztvulYySfgFmIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMESPoIVUToxIIGgUCrcA%2BqAZufMVqEcrBjN83yukidmkhboBOkfOuKd8HGNX2WYjIGsFFWxgmLJkLqE1Ntszfd19gax9rZUNQnigEdFoN4uwmF5Gy23ua4jPxkJNDpVgHy8aRUKLipXbA%2BB9xLaRi4yOXmanfj4KIwc49GaPwDi%2F8yt2cJcFm1bKyCQb68anqqC6AF5z6oL18aLuwdrrUpGk2Ssi5I3zTXPXDWABDoTpYt1hp%2FDYM5DxpqOdMlnoKVpl2kY%2FPURkODVY5KuKoaAMoNVC%2FeVUuK4nIV%2FfCLICmJHwpoJLyrrKCceOi8cW0JOfrS%2FUF7BDQEbP%2BAuDlc%2FpXMJLRMU79QfD%2FvyG3Cu2SxujzxmhL%2BsgpttZJ1tV3SHDmGtBO8CpJO%2FE7bSOJWqGzLAEdsZsenNBrM1GdSmrYxQzMEca8toF3aizdR2j3dgKLFVsZR5njHVtZvXaA0Is%2F0c4crw7ut4GMB8uNckVaxDW4v79HaGjP%2Fw7AJBpGoVNiQC08%2FoCfQJAIPE5NLKUfyQcy2Yjk6cLqbZwpdPBo5dgDvoaNZORw1uuNecHeqnm32nCHyEzM0Mp84LtHm6FygTn48Fh3BB4ki227iJ1O18f6TzYrAF9mAjpT8RRLoxdRrmzkjn3bVGMMi6tsIGOqUB4mmOgA73IlwUjcc0T%2BsHTiw%2FisuX5U4V6tUklPM9rSJH2H%2BvSlDExkMZOQ2BRmznx1OZD0dgOBjiuJLirYiY0W0OT5jwz6LGKYXNVOCIlt1E8HdsgD%2F6LNA%2Fk8LTkfhVKyZ0GeHJCxEVbymhVPO5KSmMYcXtx5VFcRpw2466La222Tjw1PgfuRdZpvyI7VEuvZoWnysEwhiG1YT4crYI2n7%2FybFL&X-Amz-Signature=7a07303b141b77e2965c92e1d65a6fdd831f7f217c4324f4793b61fef4a87973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
