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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=481b18be5cec63bea9904519c802d83593645e3f8add57957dbf2baeb67a9f58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=f739e74f7a85da733b9942e51af0482ef0f01a8cd52530f8943ef61510569fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=734c9683ec8f7b25dd60cc58f39f1600727a4ba52aafa4b98cf9e9cfb591d45e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=b67f64531db7e36d1cd80e1f1c67c4db027aac2fe5c2b08addab2341c4fc6701&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=8b7c98aaf08aa6b53c79b7503891a276afc6aec9bb9a86beb6e75234d197738b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
