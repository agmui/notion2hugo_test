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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKWYLVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHudjg1apwozjNjkMLoBolfyRKUR%2BuoVoaHDgQ565tpyAiBrc%2F0B0jc9DXOFffpOv%2F5ZOU0mfRkehR9TqokUMsLgdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEnGgUQyHHdAuOPf9KtwDiR9yW6tlXWMO1AFbUBJNjuzERwafjTetSYkdnGOVSRVj92QFpLj0tVu5PXVS2wa0t4ivYMvLU6gcubBWlPWQ7UnKX0WD%2Fo%2BpjYjnYzZHrdx9W3aca67RDkn9VLQ4K5wEwOJlzmo%2BvlZyVxVrMWdI6NRUB404Ntcymp9feSImzguX4egYrgpJxkGeS2QSY7w5eIXvVdLh1MT97Nf%2BVb66yvQqSrJiPJZ3GQrhE%2Bi%2BfpSh7gfUgKWG46HQGnGoVErqB0cqpu3w1jzRNPvyL9MoVF%2Bl3XlPr%2FKHGiePNC7qNnx%2BTDrcAVvt%2FRwKLOusB26Wu%2FsXRuf5ubtGAHdzPFvZ3SZICDzW3Mc3dyWwx9244HeILuoMWA2Q0Rc6YJnSRy25xwc70rQhnqVXFMbiO%2BeXWWQ%2FQDZxM2iw4MspreUACN8OBjdiOiWB9KcAJwaxG06n2Fm3R1Vlm%2F2d%2FFrcdUh%2F1N4TbySTUk98UfsG8jt8x3dmsgKDXvNi96p8yI7uG1BQfviRrSL2YxcOcgHXwNxWAuaFixwAxiYtHkHkpguLjlneseOwINL5sxcRCdpmhEEHKDG%2B5HuWW%2FMjoPbZjWK8D0Md4CRkLoyHWKskCjNzxn3vCg7IOluNUKzrIRgw6ZXjxAY6pgH%2BR3qbjgYnr7nX4fpLIrTOSiMo2dzbexJcNxWKIAEJuCOBV7ZqHYrwDbMnKYM6EsuPIeStA2udd4KiiZiegYSFOAChq5dm7dZT5vDwYR6d4bhg45f6Jbvm3ei3%2BDGlX1eGYJnFTt9F4swWTbpMSL4n1ZQNM%2Fg%2FtfchgzzqD8bxnpDETGcWhg%2Bz9bzbY%2BlIjnQj7q1w5%2B69OBcwtGUQGNXFdraDy6kQ&X-Amz-Signature=11dac99ce6592f4779dc944bf9578bb16c3de92ec0ac07990ae163821d6621a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKWYLVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHudjg1apwozjNjkMLoBolfyRKUR%2BuoVoaHDgQ565tpyAiBrc%2F0B0jc9DXOFffpOv%2F5ZOU0mfRkehR9TqokUMsLgdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEnGgUQyHHdAuOPf9KtwDiR9yW6tlXWMO1AFbUBJNjuzERwafjTetSYkdnGOVSRVj92QFpLj0tVu5PXVS2wa0t4ivYMvLU6gcubBWlPWQ7UnKX0WD%2Fo%2BpjYjnYzZHrdx9W3aca67RDkn9VLQ4K5wEwOJlzmo%2BvlZyVxVrMWdI6NRUB404Ntcymp9feSImzguX4egYrgpJxkGeS2QSY7w5eIXvVdLh1MT97Nf%2BVb66yvQqSrJiPJZ3GQrhE%2Bi%2BfpSh7gfUgKWG46HQGnGoVErqB0cqpu3w1jzRNPvyL9MoVF%2Bl3XlPr%2FKHGiePNC7qNnx%2BTDrcAVvt%2FRwKLOusB26Wu%2FsXRuf5ubtGAHdzPFvZ3SZICDzW3Mc3dyWwx9244HeILuoMWA2Q0Rc6YJnSRy25xwc70rQhnqVXFMbiO%2BeXWWQ%2FQDZxM2iw4MspreUACN8OBjdiOiWB9KcAJwaxG06n2Fm3R1Vlm%2F2d%2FFrcdUh%2F1N4TbySTUk98UfsG8jt8x3dmsgKDXvNi96p8yI7uG1BQfviRrSL2YxcOcgHXwNxWAuaFixwAxiYtHkHkpguLjlneseOwINL5sxcRCdpmhEEHKDG%2B5HuWW%2FMjoPbZjWK8D0Md4CRkLoyHWKskCjNzxn3vCg7IOluNUKzrIRgw6ZXjxAY6pgH%2BR3qbjgYnr7nX4fpLIrTOSiMo2dzbexJcNxWKIAEJuCOBV7ZqHYrwDbMnKYM6EsuPIeStA2udd4KiiZiegYSFOAChq5dm7dZT5vDwYR6d4bhg45f6Jbvm3ei3%2BDGlX1eGYJnFTt9F4swWTbpMSL4n1ZQNM%2Fg%2FtfchgzzqD8bxnpDETGcWhg%2Bz9bzbY%2BlIjnQj7q1w5%2B69OBcwtGUQGNXFdraDy6kQ&X-Amz-Signature=200877cd8adab4df6a69085914849a2d349bc396de38409391420f3aaaf51d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKWYLVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHudjg1apwozjNjkMLoBolfyRKUR%2BuoVoaHDgQ565tpyAiBrc%2F0B0jc9DXOFffpOv%2F5ZOU0mfRkehR9TqokUMsLgdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEnGgUQyHHdAuOPf9KtwDiR9yW6tlXWMO1AFbUBJNjuzERwafjTetSYkdnGOVSRVj92QFpLj0tVu5PXVS2wa0t4ivYMvLU6gcubBWlPWQ7UnKX0WD%2Fo%2BpjYjnYzZHrdx9W3aca67RDkn9VLQ4K5wEwOJlzmo%2BvlZyVxVrMWdI6NRUB404Ntcymp9feSImzguX4egYrgpJxkGeS2QSY7w5eIXvVdLh1MT97Nf%2BVb66yvQqSrJiPJZ3GQrhE%2Bi%2BfpSh7gfUgKWG46HQGnGoVErqB0cqpu3w1jzRNPvyL9MoVF%2Bl3XlPr%2FKHGiePNC7qNnx%2BTDrcAVvt%2FRwKLOusB26Wu%2FsXRuf5ubtGAHdzPFvZ3SZICDzW3Mc3dyWwx9244HeILuoMWA2Q0Rc6YJnSRy25xwc70rQhnqVXFMbiO%2BeXWWQ%2FQDZxM2iw4MspreUACN8OBjdiOiWB9KcAJwaxG06n2Fm3R1Vlm%2F2d%2FFrcdUh%2F1N4TbySTUk98UfsG8jt8x3dmsgKDXvNi96p8yI7uG1BQfviRrSL2YxcOcgHXwNxWAuaFixwAxiYtHkHkpguLjlneseOwINL5sxcRCdpmhEEHKDG%2B5HuWW%2FMjoPbZjWK8D0Md4CRkLoyHWKskCjNzxn3vCg7IOluNUKzrIRgw6ZXjxAY6pgH%2BR3qbjgYnr7nX4fpLIrTOSiMo2dzbexJcNxWKIAEJuCOBV7ZqHYrwDbMnKYM6EsuPIeStA2udd4KiiZiegYSFOAChq5dm7dZT5vDwYR6d4bhg45f6Jbvm3ei3%2BDGlX1eGYJnFTt9F4swWTbpMSL4n1ZQNM%2Fg%2FtfchgzzqD8bxnpDETGcWhg%2Bz9bzbY%2BlIjnQj7q1w5%2B69OBcwtGUQGNXFdraDy6kQ&X-Amz-Signature=c900a01a745c64390a499c327a87e5c7640e7af70f47bba776ba8b65bafb959f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKWYLVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHudjg1apwozjNjkMLoBolfyRKUR%2BuoVoaHDgQ565tpyAiBrc%2F0B0jc9DXOFffpOv%2F5ZOU0mfRkehR9TqokUMsLgdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEnGgUQyHHdAuOPf9KtwDiR9yW6tlXWMO1AFbUBJNjuzERwafjTetSYkdnGOVSRVj92QFpLj0tVu5PXVS2wa0t4ivYMvLU6gcubBWlPWQ7UnKX0WD%2Fo%2BpjYjnYzZHrdx9W3aca67RDkn9VLQ4K5wEwOJlzmo%2BvlZyVxVrMWdI6NRUB404Ntcymp9feSImzguX4egYrgpJxkGeS2QSY7w5eIXvVdLh1MT97Nf%2BVb66yvQqSrJiPJZ3GQrhE%2Bi%2BfpSh7gfUgKWG46HQGnGoVErqB0cqpu3w1jzRNPvyL9MoVF%2Bl3XlPr%2FKHGiePNC7qNnx%2BTDrcAVvt%2FRwKLOusB26Wu%2FsXRuf5ubtGAHdzPFvZ3SZICDzW3Mc3dyWwx9244HeILuoMWA2Q0Rc6YJnSRy25xwc70rQhnqVXFMbiO%2BeXWWQ%2FQDZxM2iw4MspreUACN8OBjdiOiWB9KcAJwaxG06n2Fm3R1Vlm%2F2d%2FFrcdUh%2F1N4TbySTUk98UfsG8jt8x3dmsgKDXvNi96p8yI7uG1BQfviRrSL2YxcOcgHXwNxWAuaFixwAxiYtHkHkpguLjlneseOwINL5sxcRCdpmhEEHKDG%2B5HuWW%2FMjoPbZjWK8D0Md4CRkLoyHWKskCjNzxn3vCg7IOluNUKzrIRgw6ZXjxAY6pgH%2BR3qbjgYnr7nX4fpLIrTOSiMo2dzbexJcNxWKIAEJuCOBV7ZqHYrwDbMnKYM6EsuPIeStA2udd4KiiZiegYSFOAChq5dm7dZT5vDwYR6d4bhg45f6Jbvm3ei3%2BDGlX1eGYJnFTt9F4swWTbpMSL4n1ZQNM%2Fg%2FtfchgzzqD8bxnpDETGcWhg%2Bz9bzbY%2BlIjnQj7q1w5%2B69OBcwtGUQGNXFdraDy6kQ&X-Amz-Signature=be8175669f478b8bdc3c4ba33e75587fe260c216587e8a3eb5ef1bf1a36af243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKWYLVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHudjg1apwozjNjkMLoBolfyRKUR%2BuoVoaHDgQ565tpyAiBrc%2F0B0jc9DXOFffpOv%2F5ZOU0mfRkehR9TqokUMsLgdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEnGgUQyHHdAuOPf9KtwDiR9yW6tlXWMO1AFbUBJNjuzERwafjTetSYkdnGOVSRVj92QFpLj0tVu5PXVS2wa0t4ivYMvLU6gcubBWlPWQ7UnKX0WD%2Fo%2BpjYjnYzZHrdx9W3aca67RDkn9VLQ4K5wEwOJlzmo%2BvlZyVxVrMWdI6NRUB404Ntcymp9feSImzguX4egYrgpJxkGeS2QSY7w5eIXvVdLh1MT97Nf%2BVb66yvQqSrJiPJZ3GQrhE%2Bi%2BfpSh7gfUgKWG46HQGnGoVErqB0cqpu3w1jzRNPvyL9MoVF%2Bl3XlPr%2FKHGiePNC7qNnx%2BTDrcAVvt%2FRwKLOusB26Wu%2FsXRuf5ubtGAHdzPFvZ3SZICDzW3Mc3dyWwx9244HeILuoMWA2Q0Rc6YJnSRy25xwc70rQhnqVXFMbiO%2BeXWWQ%2FQDZxM2iw4MspreUACN8OBjdiOiWB9KcAJwaxG06n2Fm3R1Vlm%2F2d%2FFrcdUh%2F1N4TbySTUk98UfsG8jt8x3dmsgKDXvNi96p8yI7uG1BQfviRrSL2YxcOcgHXwNxWAuaFixwAxiYtHkHkpguLjlneseOwINL5sxcRCdpmhEEHKDG%2B5HuWW%2FMjoPbZjWK8D0Md4CRkLoyHWKskCjNzxn3vCg7IOluNUKzrIRgw6ZXjxAY6pgH%2BR3qbjgYnr7nX4fpLIrTOSiMo2dzbexJcNxWKIAEJuCOBV7ZqHYrwDbMnKYM6EsuPIeStA2udd4KiiZiegYSFOAChq5dm7dZT5vDwYR6d4bhg45f6Jbvm3ei3%2BDGlX1eGYJnFTt9F4swWTbpMSL4n1ZQNM%2Fg%2FtfchgzzqD8bxnpDETGcWhg%2Bz9bzbY%2BlIjnQj7q1w5%2B69OBcwtGUQGNXFdraDy6kQ&X-Amz-Signature=99c656c8e18ed2d941b5e4166286464792d7a003a7c2cb3ca8a71851bfcc9e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
