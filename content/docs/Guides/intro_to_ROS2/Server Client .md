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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LCHIOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGv6Y9UXA491hn3K%2BXQIWfh0%2FJYf2rRBrVdKtI1Hdiq8AiBim1VRuJgaOH2AI1H0IGH%2FQBBJ0%2Bfszt8Htq6Ely0VSir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbpKGYHRR%2BeMlSBuOKtwDA7b1r1ILTRUTq7XWNtguhZvCpY3GZVGp%2Fu8X9BtgVRmCdIRICGdoXb8rf2XSnqRE%2Fay0a1vp8PWBCCkut1Y3%2BUDywX98lbh3AOgGJUj4z0edCgXs3cKguvKrz4N3wZtvAexUxeIzpwWQ1ireRuyubA0EIdajoeBRkoYsFLhvdfEMxSYGrBTqxsUsjuuqk9AfL77uBaXoMmBj696oDz91hLAr8Dr%2BxbiEYl1MWOObcd2mWPZV4821hE4UpEGbCuuzxSV3icP99VfJRvKmglsTLRW%2BdM7%2BJVZqkx9EQhsjiu%2B%2Bs3KqL8QRfUDnWn1ftKZPdfSbRBoUNj%2BvCPVeQYNCWr%2BagSLIR7pZXBh3SObGXQZFQxTIvKUHjx9JCr%2BlQBl5dxKFkmX87iv9QFhgDxC1jtZjp8f8w69ldXGUONSeo%2F4uNGy%2FOk3q2F7ULw9n25BlWQH4YD8FXrQzrvWOLkHnEg0cdF6cbMsa5fyhdO%2BNjz7XbZLt%2FhLhrm0ghLvZ%2FB7OvCYmGNpv8e4T%2FrUZ7uN1FEfB934XAOKp6yZcGvTmNiuU7ueecryP2FH%2BUrMFNx5U150DxkZQbpxQcy7%2Fl%2FqTsTQ2P6pqQrvygpXuRbTSnlOM0vGXD7FltDHYrYMw4eCvvgY6pgEzAUIWYQ2h4AXZ7QeBYBElSLFwkBzz6zTvxaN5anzCYtyqnaxXtfAm%2BqpX%2FYU3qpECEHBx6yu5Iuxbrak645AuiWT3KZCPdvYgMJSodSfz4klf2IFzHA17i4%2FS63TRDL4H1DQX3QZLqUQLB0eTEAxKLINLDfDBCr8ItK%2BIdEfjW5id80YmuEsHl%2Bcmgb38H%2FM4uu9UOeF0Gp%2FVxDjEmOpCKHy61GCI&X-Amz-Signature=862b002ae9a243e07b0159b3d56a4562453a1e5f72a17502886f4542b40a170d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LCHIOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGv6Y9UXA491hn3K%2BXQIWfh0%2FJYf2rRBrVdKtI1Hdiq8AiBim1VRuJgaOH2AI1H0IGH%2FQBBJ0%2Bfszt8Htq6Ely0VSir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbpKGYHRR%2BeMlSBuOKtwDA7b1r1ILTRUTq7XWNtguhZvCpY3GZVGp%2Fu8X9BtgVRmCdIRICGdoXb8rf2XSnqRE%2Fay0a1vp8PWBCCkut1Y3%2BUDywX98lbh3AOgGJUj4z0edCgXs3cKguvKrz4N3wZtvAexUxeIzpwWQ1ireRuyubA0EIdajoeBRkoYsFLhvdfEMxSYGrBTqxsUsjuuqk9AfL77uBaXoMmBj696oDz91hLAr8Dr%2BxbiEYl1MWOObcd2mWPZV4821hE4UpEGbCuuzxSV3icP99VfJRvKmglsTLRW%2BdM7%2BJVZqkx9EQhsjiu%2B%2Bs3KqL8QRfUDnWn1ftKZPdfSbRBoUNj%2BvCPVeQYNCWr%2BagSLIR7pZXBh3SObGXQZFQxTIvKUHjx9JCr%2BlQBl5dxKFkmX87iv9QFhgDxC1jtZjp8f8w69ldXGUONSeo%2F4uNGy%2FOk3q2F7ULw9n25BlWQH4YD8FXrQzrvWOLkHnEg0cdF6cbMsa5fyhdO%2BNjz7XbZLt%2FhLhrm0ghLvZ%2FB7OvCYmGNpv8e4T%2FrUZ7uN1FEfB934XAOKp6yZcGvTmNiuU7ueecryP2FH%2BUrMFNx5U150DxkZQbpxQcy7%2Fl%2FqTsTQ2P6pqQrvygpXuRbTSnlOM0vGXD7FltDHYrYMw4eCvvgY6pgEzAUIWYQ2h4AXZ7QeBYBElSLFwkBzz6zTvxaN5anzCYtyqnaxXtfAm%2BqpX%2FYU3qpECEHBx6yu5Iuxbrak645AuiWT3KZCPdvYgMJSodSfz4klf2IFzHA17i4%2FS63TRDL4H1DQX3QZLqUQLB0eTEAxKLINLDfDBCr8ItK%2BIdEfjW5id80YmuEsHl%2Bcmgb38H%2FM4uu9UOeF0Gp%2FVxDjEmOpCKHy61GCI&X-Amz-Signature=b0c8be6bef25588e6ab16ca39ebb78fb3349c2c2bfe78238bf670a43f81ca26c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LCHIOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGv6Y9UXA491hn3K%2BXQIWfh0%2FJYf2rRBrVdKtI1Hdiq8AiBim1VRuJgaOH2AI1H0IGH%2FQBBJ0%2Bfszt8Htq6Ely0VSir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbpKGYHRR%2BeMlSBuOKtwDA7b1r1ILTRUTq7XWNtguhZvCpY3GZVGp%2Fu8X9BtgVRmCdIRICGdoXb8rf2XSnqRE%2Fay0a1vp8PWBCCkut1Y3%2BUDywX98lbh3AOgGJUj4z0edCgXs3cKguvKrz4N3wZtvAexUxeIzpwWQ1ireRuyubA0EIdajoeBRkoYsFLhvdfEMxSYGrBTqxsUsjuuqk9AfL77uBaXoMmBj696oDz91hLAr8Dr%2BxbiEYl1MWOObcd2mWPZV4821hE4UpEGbCuuzxSV3icP99VfJRvKmglsTLRW%2BdM7%2BJVZqkx9EQhsjiu%2B%2Bs3KqL8QRfUDnWn1ftKZPdfSbRBoUNj%2BvCPVeQYNCWr%2BagSLIR7pZXBh3SObGXQZFQxTIvKUHjx9JCr%2BlQBl5dxKFkmX87iv9QFhgDxC1jtZjp8f8w69ldXGUONSeo%2F4uNGy%2FOk3q2F7ULw9n25BlWQH4YD8FXrQzrvWOLkHnEg0cdF6cbMsa5fyhdO%2BNjz7XbZLt%2FhLhrm0ghLvZ%2FB7OvCYmGNpv8e4T%2FrUZ7uN1FEfB934XAOKp6yZcGvTmNiuU7ueecryP2FH%2BUrMFNx5U150DxkZQbpxQcy7%2Fl%2FqTsTQ2P6pqQrvygpXuRbTSnlOM0vGXD7FltDHYrYMw4eCvvgY6pgEzAUIWYQ2h4AXZ7QeBYBElSLFwkBzz6zTvxaN5anzCYtyqnaxXtfAm%2BqpX%2FYU3qpECEHBx6yu5Iuxbrak645AuiWT3KZCPdvYgMJSodSfz4klf2IFzHA17i4%2FS63TRDL4H1DQX3QZLqUQLB0eTEAxKLINLDfDBCr8ItK%2BIdEfjW5id80YmuEsHl%2Bcmgb38H%2FM4uu9UOeF0Gp%2FVxDjEmOpCKHy61GCI&X-Amz-Signature=e240b12b4321ccbf9438de6c5ec1d7c71146ec9460961add3190a5e5fedfc325&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LCHIOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGv6Y9UXA491hn3K%2BXQIWfh0%2FJYf2rRBrVdKtI1Hdiq8AiBim1VRuJgaOH2AI1H0IGH%2FQBBJ0%2Bfszt8Htq6Ely0VSir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbpKGYHRR%2BeMlSBuOKtwDA7b1r1ILTRUTq7XWNtguhZvCpY3GZVGp%2Fu8X9BtgVRmCdIRICGdoXb8rf2XSnqRE%2Fay0a1vp8PWBCCkut1Y3%2BUDywX98lbh3AOgGJUj4z0edCgXs3cKguvKrz4N3wZtvAexUxeIzpwWQ1ireRuyubA0EIdajoeBRkoYsFLhvdfEMxSYGrBTqxsUsjuuqk9AfL77uBaXoMmBj696oDz91hLAr8Dr%2BxbiEYl1MWOObcd2mWPZV4821hE4UpEGbCuuzxSV3icP99VfJRvKmglsTLRW%2BdM7%2BJVZqkx9EQhsjiu%2B%2Bs3KqL8QRfUDnWn1ftKZPdfSbRBoUNj%2BvCPVeQYNCWr%2BagSLIR7pZXBh3SObGXQZFQxTIvKUHjx9JCr%2BlQBl5dxKFkmX87iv9QFhgDxC1jtZjp8f8w69ldXGUONSeo%2F4uNGy%2FOk3q2F7ULw9n25BlWQH4YD8FXrQzrvWOLkHnEg0cdF6cbMsa5fyhdO%2BNjz7XbZLt%2FhLhrm0ghLvZ%2FB7OvCYmGNpv8e4T%2FrUZ7uN1FEfB934XAOKp6yZcGvTmNiuU7ueecryP2FH%2BUrMFNx5U150DxkZQbpxQcy7%2Fl%2FqTsTQ2P6pqQrvygpXuRbTSnlOM0vGXD7FltDHYrYMw4eCvvgY6pgEzAUIWYQ2h4AXZ7QeBYBElSLFwkBzz6zTvxaN5anzCYtyqnaxXtfAm%2BqpX%2FYU3qpECEHBx6yu5Iuxbrak645AuiWT3KZCPdvYgMJSodSfz4klf2IFzHA17i4%2FS63TRDL4H1DQX3QZLqUQLB0eTEAxKLINLDfDBCr8ItK%2BIdEfjW5id80YmuEsHl%2Bcmgb38H%2FM4uu9UOeF0Gp%2FVxDjEmOpCKHy61GCI&X-Amz-Signature=b7dab8be6693e67fd2b38f9cb4f2d91f18245f76609b21a9b91be0bdb12fd068&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LCHIOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGv6Y9UXA491hn3K%2BXQIWfh0%2FJYf2rRBrVdKtI1Hdiq8AiBim1VRuJgaOH2AI1H0IGH%2FQBBJ0%2Bfszt8Htq6Ely0VSir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbpKGYHRR%2BeMlSBuOKtwDA7b1r1ILTRUTq7XWNtguhZvCpY3GZVGp%2Fu8X9BtgVRmCdIRICGdoXb8rf2XSnqRE%2Fay0a1vp8PWBCCkut1Y3%2BUDywX98lbh3AOgGJUj4z0edCgXs3cKguvKrz4N3wZtvAexUxeIzpwWQ1ireRuyubA0EIdajoeBRkoYsFLhvdfEMxSYGrBTqxsUsjuuqk9AfL77uBaXoMmBj696oDz91hLAr8Dr%2BxbiEYl1MWOObcd2mWPZV4821hE4UpEGbCuuzxSV3icP99VfJRvKmglsTLRW%2BdM7%2BJVZqkx9EQhsjiu%2B%2Bs3KqL8QRfUDnWn1ftKZPdfSbRBoUNj%2BvCPVeQYNCWr%2BagSLIR7pZXBh3SObGXQZFQxTIvKUHjx9JCr%2BlQBl5dxKFkmX87iv9QFhgDxC1jtZjp8f8w69ldXGUONSeo%2F4uNGy%2FOk3q2F7ULw9n25BlWQH4YD8FXrQzrvWOLkHnEg0cdF6cbMsa5fyhdO%2BNjz7XbZLt%2FhLhrm0ghLvZ%2FB7OvCYmGNpv8e4T%2FrUZ7uN1FEfB934XAOKp6yZcGvTmNiuU7ueecryP2FH%2BUrMFNx5U150DxkZQbpxQcy7%2Fl%2FqTsTQ2P6pqQrvygpXuRbTSnlOM0vGXD7FltDHYrYMw4eCvvgY6pgEzAUIWYQ2h4AXZ7QeBYBElSLFwkBzz6zTvxaN5anzCYtyqnaxXtfAm%2BqpX%2FYU3qpECEHBx6yu5Iuxbrak645AuiWT3KZCPdvYgMJSodSfz4klf2IFzHA17i4%2FS63TRDL4H1DQX3QZLqUQLB0eTEAxKLINLDfDBCr8ItK%2BIdEfjW5id80YmuEsHl%2Bcmgb38H%2FM4uu9UOeF0Gp%2FVxDjEmOpCKHy61GCI&X-Amz-Signature=bcdef0408a29c32c18b3b3180c7d641bc5f9754072fbdd7db283332c07407c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
