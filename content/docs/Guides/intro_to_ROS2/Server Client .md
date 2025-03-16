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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YTFTAA4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGpVELQ36j7YB9QCyGlZKI2xrzpXbiwmPYdFMuN38VvAiAzYxOcmRYzknvkIkgqbTNGxX%2FpFciUp4n77UQc5AdfHyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOupg1047fSdoXPnzKtwDdj46yd8ESdxHdZXFR1vTSPByKvoa8XvP2VDjzQwbF0d9eRGn0wYfiVQkL%2B3HT2zW4lSF7OB%2B70B8fdNCPEiCXUYm%2Bu1timJd%2FFoo08jjz7tp1MpJl%2B1mu8Dq7HdT57AnWiuCZcmgzZtDeQRGKk%2FBEIHfM8Zr3zG11xlxeEBThap6QRo9DFh6A9Sof5iblfBSf7UMw8Uvp7OgcHfZeiCv3oZnRDPEHV4Ww9Vo9xKWIWBn7267mVa8vpzGB13lKSeTWIJzgDCA2oQH1F8gLFKD5BvLptFdCyE6YcsziCpR7knzCYwHPCj9fXPr6UMRjjgehcBGxj9fTpXAslxgGep07%2BA6QrLBoEJNQ9x4gWGb8MCHIfYlJ51WILqXAnGubFBVwhgEyqxl%2BTOH29k2GbnTqCG7E8W6ASpaRkuOP28A83csm6zlVyC4Lnba2obN1qe2LXkJRCVYrNqKKY%2FQEQW74P9uWRT3e%2FjEH5RxgTIy%2BdO22RjUOqq0%2FILvYdu5wQ6wKJm6sPSLVxaT6q19Gaz3GsUAZLPMBL7TneNnUtgD4AJDEZwhT7P99ER9Gr7EJazog8qGRAHS%2Bhuoec0Fl3JQ5hjJgLjlcrGRLO1LWiHP2WDSuBBZ1heacpanpZMwwJPavgY6pgE9jKzxW5367Cixrvr0UFwhr4XMn%2F4O8PFjYEICdRUwrQ6YwVwVoyODHTLgh5Gt6Qki%2BIXkp7T6ASnTGD3FEwqZC4ZLzzHRq8tZ79wp2FsnAmvfFcrFnvQYHc9wIz66u0QtYx21m43chwQmYAkO7w%2F7ckK57j%2FOj8Vv1IzVFiI%2FnWeHw00AWUA1odCMzROA0VlmwluB1JmarRYJ4YhPRARd6%2B5O5apV&X-Amz-Signature=25cfcc42fddc71402c6f134f23e4043f9b17a033b3e958318b98c2179676f35f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YTFTAA4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGpVELQ36j7YB9QCyGlZKI2xrzpXbiwmPYdFMuN38VvAiAzYxOcmRYzknvkIkgqbTNGxX%2FpFciUp4n77UQc5AdfHyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOupg1047fSdoXPnzKtwDdj46yd8ESdxHdZXFR1vTSPByKvoa8XvP2VDjzQwbF0d9eRGn0wYfiVQkL%2B3HT2zW4lSF7OB%2B70B8fdNCPEiCXUYm%2Bu1timJd%2FFoo08jjz7tp1MpJl%2B1mu8Dq7HdT57AnWiuCZcmgzZtDeQRGKk%2FBEIHfM8Zr3zG11xlxeEBThap6QRo9DFh6A9Sof5iblfBSf7UMw8Uvp7OgcHfZeiCv3oZnRDPEHV4Ww9Vo9xKWIWBn7267mVa8vpzGB13lKSeTWIJzgDCA2oQH1F8gLFKD5BvLptFdCyE6YcsziCpR7knzCYwHPCj9fXPr6UMRjjgehcBGxj9fTpXAslxgGep07%2BA6QrLBoEJNQ9x4gWGb8MCHIfYlJ51WILqXAnGubFBVwhgEyqxl%2BTOH29k2GbnTqCG7E8W6ASpaRkuOP28A83csm6zlVyC4Lnba2obN1qe2LXkJRCVYrNqKKY%2FQEQW74P9uWRT3e%2FjEH5RxgTIy%2BdO22RjUOqq0%2FILvYdu5wQ6wKJm6sPSLVxaT6q19Gaz3GsUAZLPMBL7TneNnUtgD4AJDEZwhT7P99ER9Gr7EJazog8qGRAHS%2Bhuoec0Fl3JQ5hjJgLjlcrGRLO1LWiHP2WDSuBBZ1heacpanpZMwwJPavgY6pgE9jKzxW5367Cixrvr0UFwhr4XMn%2F4O8PFjYEICdRUwrQ6YwVwVoyODHTLgh5Gt6Qki%2BIXkp7T6ASnTGD3FEwqZC4ZLzzHRq8tZ79wp2FsnAmvfFcrFnvQYHc9wIz66u0QtYx21m43chwQmYAkO7w%2F7ckK57j%2FOj8Vv1IzVFiI%2FnWeHw00AWUA1odCMzROA0VlmwluB1JmarRYJ4YhPRARd6%2B5O5apV&X-Amz-Signature=7f1d6d0600cc5e967a438b9964a2cdb5ebb6df3cf1c6865d398c160a0e70c57f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YTFTAA4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGpVELQ36j7YB9QCyGlZKI2xrzpXbiwmPYdFMuN38VvAiAzYxOcmRYzknvkIkgqbTNGxX%2FpFciUp4n77UQc5AdfHyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOupg1047fSdoXPnzKtwDdj46yd8ESdxHdZXFR1vTSPByKvoa8XvP2VDjzQwbF0d9eRGn0wYfiVQkL%2B3HT2zW4lSF7OB%2B70B8fdNCPEiCXUYm%2Bu1timJd%2FFoo08jjz7tp1MpJl%2B1mu8Dq7HdT57AnWiuCZcmgzZtDeQRGKk%2FBEIHfM8Zr3zG11xlxeEBThap6QRo9DFh6A9Sof5iblfBSf7UMw8Uvp7OgcHfZeiCv3oZnRDPEHV4Ww9Vo9xKWIWBn7267mVa8vpzGB13lKSeTWIJzgDCA2oQH1F8gLFKD5BvLptFdCyE6YcsziCpR7knzCYwHPCj9fXPr6UMRjjgehcBGxj9fTpXAslxgGep07%2BA6QrLBoEJNQ9x4gWGb8MCHIfYlJ51WILqXAnGubFBVwhgEyqxl%2BTOH29k2GbnTqCG7E8W6ASpaRkuOP28A83csm6zlVyC4Lnba2obN1qe2LXkJRCVYrNqKKY%2FQEQW74P9uWRT3e%2FjEH5RxgTIy%2BdO22RjUOqq0%2FILvYdu5wQ6wKJm6sPSLVxaT6q19Gaz3GsUAZLPMBL7TneNnUtgD4AJDEZwhT7P99ER9Gr7EJazog8qGRAHS%2Bhuoec0Fl3JQ5hjJgLjlcrGRLO1LWiHP2WDSuBBZ1heacpanpZMwwJPavgY6pgE9jKzxW5367Cixrvr0UFwhr4XMn%2F4O8PFjYEICdRUwrQ6YwVwVoyODHTLgh5Gt6Qki%2BIXkp7T6ASnTGD3FEwqZC4ZLzzHRq8tZ79wp2FsnAmvfFcrFnvQYHc9wIz66u0QtYx21m43chwQmYAkO7w%2F7ckK57j%2FOj8Vv1IzVFiI%2FnWeHw00AWUA1odCMzROA0VlmwluB1JmarRYJ4YhPRARd6%2B5O5apV&X-Amz-Signature=6d41eeb5d135833c8d4b267bff0f3eb55f21b6330b48d75974b63d7fd91aee66&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YTFTAA4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGpVELQ36j7YB9QCyGlZKI2xrzpXbiwmPYdFMuN38VvAiAzYxOcmRYzknvkIkgqbTNGxX%2FpFciUp4n77UQc5AdfHyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOupg1047fSdoXPnzKtwDdj46yd8ESdxHdZXFR1vTSPByKvoa8XvP2VDjzQwbF0d9eRGn0wYfiVQkL%2B3HT2zW4lSF7OB%2B70B8fdNCPEiCXUYm%2Bu1timJd%2FFoo08jjz7tp1MpJl%2B1mu8Dq7HdT57AnWiuCZcmgzZtDeQRGKk%2FBEIHfM8Zr3zG11xlxeEBThap6QRo9DFh6A9Sof5iblfBSf7UMw8Uvp7OgcHfZeiCv3oZnRDPEHV4Ww9Vo9xKWIWBn7267mVa8vpzGB13lKSeTWIJzgDCA2oQH1F8gLFKD5BvLptFdCyE6YcsziCpR7knzCYwHPCj9fXPr6UMRjjgehcBGxj9fTpXAslxgGep07%2BA6QrLBoEJNQ9x4gWGb8MCHIfYlJ51WILqXAnGubFBVwhgEyqxl%2BTOH29k2GbnTqCG7E8W6ASpaRkuOP28A83csm6zlVyC4Lnba2obN1qe2LXkJRCVYrNqKKY%2FQEQW74P9uWRT3e%2FjEH5RxgTIy%2BdO22RjUOqq0%2FILvYdu5wQ6wKJm6sPSLVxaT6q19Gaz3GsUAZLPMBL7TneNnUtgD4AJDEZwhT7P99ER9Gr7EJazog8qGRAHS%2Bhuoec0Fl3JQ5hjJgLjlcrGRLO1LWiHP2WDSuBBZ1heacpanpZMwwJPavgY6pgE9jKzxW5367Cixrvr0UFwhr4XMn%2F4O8PFjYEICdRUwrQ6YwVwVoyODHTLgh5Gt6Qki%2BIXkp7T6ASnTGD3FEwqZC4ZLzzHRq8tZ79wp2FsnAmvfFcrFnvQYHc9wIz66u0QtYx21m43chwQmYAkO7w%2F7ckK57j%2FOj8Vv1IzVFiI%2FnWeHw00AWUA1odCMzROA0VlmwluB1JmarRYJ4YhPRARd6%2B5O5apV&X-Amz-Signature=0504d01099955c7e80a5241381cf5bd33e69c2d63f0f52c81558f064a2519171&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YTFTAA4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGpVELQ36j7YB9QCyGlZKI2xrzpXbiwmPYdFMuN38VvAiAzYxOcmRYzknvkIkgqbTNGxX%2FpFciUp4n77UQc5AdfHyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOupg1047fSdoXPnzKtwDdj46yd8ESdxHdZXFR1vTSPByKvoa8XvP2VDjzQwbF0d9eRGn0wYfiVQkL%2B3HT2zW4lSF7OB%2B70B8fdNCPEiCXUYm%2Bu1timJd%2FFoo08jjz7tp1MpJl%2B1mu8Dq7HdT57AnWiuCZcmgzZtDeQRGKk%2FBEIHfM8Zr3zG11xlxeEBThap6QRo9DFh6A9Sof5iblfBSf7UMw8Uvp7OgcHfZeiCv3oZnRDPEHV4Ww9Vo9xKWIWBn7267mVa8vpzGB13lKSeTWIJzgDCA2oQH1F8gLFKD5BvLptFdCyE6YcsziCpR7knzCYwHPCj9fXPr6UMRjjgehcBGxj9fTpXAslxgGep07%2BA6QrLBoEJNQ9x4gWGb8MCHIfYlJ51WILqXAnGubFBVwhgEyqxl%2BTOH29k2GbnTqCG7E8W6ASpaRkuOP28A83csm6zlVyC4Lnba2obN1qe2LXkJRCVYrNqKKY%2FQEQW74P9uWRT3e%2FjEH5RxgTIy%2BdO22RjUOqq0%2FILvYdu5wQ6wKJm6sPSLVxaT6q19Gaz3GsUAZLPMBL7TneNnUtgD4AJDEZwhT7P99ER9Gr7EJazog8qGRAHS%2Bhuoec0Fl3JQ5hjJgLjlcrGRLO1LWiHP2WDSuBBZ1heacpanpZMwwJPavgY6pgE9jKzxW5367Cixrvr0UFwhr4XMn%2F4O8PFjYEICdRUwrQ6YwVwVoyODHTLgh5Gt6Qki%2BIXkp7T6ASnTGD3FEwqZC4ZLzzHRq8tZ79wp2FsnAmvfFcrFnvQYHc9wIz66u0QtYx21m43chwQmYAkO7w%2F7ckK57j%2FOj8Vv1IzVFiI%2FnWeHw00AWUA1odCMzROA0VlmwluB1JmarRYJ4YhPRARd6%2B5O5apV&X-Amz-Signature=32fd6e5a03327f92508202490af5c8cddb2a59ba5cb8386dea82e08ebc6cbbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
