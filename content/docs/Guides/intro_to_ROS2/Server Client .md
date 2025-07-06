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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVPLQ3H%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCEsvowi62lQon6h9GEDpxHNTjwt5kYOA95EjIsgLk%2FmAIhANfxOI0Q1fEVRlVuck%2Bg%2BZvhpwAGS1NOaPQK%2FypzhdCUKv8DCFgQABoMNjM3NDIzMTgzODA1IgwEJmoSE8B1lqBRmlMq3AMieeobRycxBo2tgmiFNAPeLmrID%2BB6ctDL1D78wkzzmOyQguMuq3TDS7%2FlnzMOkf7Xfnu%2FeQ6ldIk1OEc5WKRawWTrWKWQRnIZ6xNpnivh7Fv1tSKEaXMGzcNiX%2BOrHBsR8XiNjVVZkGqB2CjRwwECLFz7QYwjwN2uIR3Rl95sDcE8dHwOIoaIA6S%2FQTK5AUr6OL6p0q17dZSX9L2M09g77OIxn2HsNelMRREWQkS3ICHM59W%2FGAUDDpE14C3aC3geCN00GYVqVmKEeXyC5u6tRMxz9IKIyoCkuSUE7PS8vzeUJ1WgAOg8upkzBuYwdRjl0bJI7JSOR%2Fz4D3qOBLv%2Fa5zc8BuJTKMJSrSYb2SkqSs0AtpPkNb5x2k3WtQCsoFEHZ8IjsTyICPdgF03U5JziPBtL5LmXJJe146h6hhnDBLPzjiDmxQzdIKL8OLyR2LIspx5bU1YhZTKNrerdmI9n0aaXazyeCnA%2BM%2BQAcoQqZ7Y%2BofwkF7LuX6d39gVkqlNX%2F9O2SmweNaYvhooysr7V0Ze%2BxoxlCX0zEusUOrt7KvKasLuRsIzN0CRK153kA2Vne77%2BnVN5YENRlcLiz3JYq4Mlvz%2FMrdjvPNsiF7H37gJblM7hnJTRgtiJzCls6jDBjqkAcsR%2Bkfk2QIUO84DvHWB57YHbiyP0PA5Q39LaYi8DiC4FVUHdHnCU2YzMBbhc8AE7ABON9vMqvVx1sSegkLP2glcraXyefCpicsQ3nogkqCnBf1exfCMMjqppiN5sPK%2Fl0aTfin8dUs1oyXeQxEGlm5UgNjdSvyhA7vFJunr39MkWS%2Fqk3PCgxQCujWIf93UWijSI1Z%2B6TrtharT7Uh%2FqfIvWso%2F&X-Amz-Signature=8d1b2576b1dcdb63b4c9e98af13771ac479523a78526089355db7510eba0ccaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVPLQ3H%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCEsvowi62lQon6h9GEDpxHNTjwt5kYOA95EjIsgLk%2FmAIhANfxOI0Q1fEVRlVuck%2Bg%2BZvhpwAGS1NOaPQK%2FypzhdCUKv8DCFgQABoMNjM3NDIzMTgzODA1IgwEJmoSE8B1lqBRmlMq3AMieeobRycxBo2tgmiFNAPeLmrID%2BB6ctDL1D78wkzzmOyQguMuq3TDS7%2FlnzMOkf7Xfnu%2FeQ6ldIk1OEc5WKRawWTrWKWQRnIZ6xNpnivh7Fv1tSKEaXMGzcNiX%2BOrHBsR8XiNjVVZkGqB2CjRwwECLFz7QYwjwN2uIR3Rl95sDcE8dHwOIoaIA6S%2FQTK5AUr6OL6p0q17dZSX9L2M09g77OIxn2HsNelMRREWQkS3ICHM59W%2FGAUDDpE14C3aC3geCN00GYVqVmKEeXyC5u6tRMxz9IKIyoCkuSUE7PS8vzeUJ1WgAOg8upkzBuYwdRjl0bJI7JSOR%2Fz4D3qOBLv%2Fa5zc8BuJTKMJSrSYb2SkqSs0AtpPkNb5x2k3WtQCsoFEHZ8IjsTyICPdgF03U5JziPBtL5LmXJJe146h6hhnDBLPzjiDmxQzdIKL8OLyR2LIspx5bU1YhZTKNrerdmI9n0aaXazyeCnA%2BM%2BQAcoQqZ7Y%2BofwkF7LuX6d39gVkqlNX%2F9O2SmweNaYvhooysr7V0Ze%2BxoxlCX0zEusUOrt7KvKasLuRsIzN0CRK153kA2Vne77%2BnVN5YENRlcLiz3JYq4Mlvz%2FMrdjvPNsiF7H37gJblM7hnJTRgtiJzCls6jDBjqkAcsR%2Bkfk2QIUO84DvHWB57YHbiyP0PA5Q39LaYi8DiC4FVUHdHnCU2YzMBbhc8AE7ABON9vMqvVx1sSegkLP2glcraXyefCpicsQ3nogkqCnBf1exfCMMjqppiN5sPK%2Fl0aTfin8dUs1oyXeQxEGlm5UgNjdSvyhA7vFJunr39MkWS%2Fqk3PCgxQCujWIf93UWijSI1Z%2B6TrtharT7Uh%2FqfIvWso%2F&X-Amz-Signature=149d399cb2205081b3a534d06c5325d8ed8fe32e52fc0d4ded6a95f835e10b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVPLQ3H%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCEsvowi62lQon6h9GEDpxHNTjwt5kYOA95EjIsgLk%2FmAIhANfxOI0Q1fEVRlVuck%2Bg%2BZvhpwAGS1NOaPQK%2FypzhdCUKv8DCFgQABoMNjM3NDIzMTgzODA1IgwEJmoSE8B1lqBRmlMq3AMieeobRycxBo2tgmiFNAPeLmrID%2BB6ctDL1D78wkzzmOyQguMuq3TDS7%2FlnzMOkf7Xfnu%2FeQ6ldIk1OEc5WKRawWTrWKWQRnIZ6xNpnivh7Fv1tSKEaXMGzcNiX%2BOrHBsR8XiNjVVZkGqB2CjRwwECLFz7QYwjwN2uIR3Rl95sDcE8dHwOIoaIA6S%2FQTK5AUr6OL6p0q17dZSX9L2M09g77OIxn2HsNelMRREWQkS3ICHM59W%2FGAUDDpE14C3aC3geCN00GYVqVmKEeXyC5u6tRMxz9IKIyoCkuSUE7PS8vzeUJ1WgAOg8upkzBuYwdRjl0bJI7JSOR%2Fz4D3qOBLv%2Fa5zc8BuJTKMJSrSYb2SkqSs0AtpPkNb5x2k3WtQCsoFEHZ8IjsTyICPdgF03U5JziPBtL5LmXJJe146h6hhnDBLPzjiDmxQzdIKL8OLyR2LIspx5bU1YhZTKNrerdmI9n0aaXazyeCnA%2BM%2BQAcoQqZ7Y%2BofwkF7LuX6d39gVkqlNX%2F9O2SmweNaYvhooysr7V0Ze%2BxoxlCX0zEusUOrt7KvKasLuRsIzN0CRK153kA2Vne77%2BnVN5YENRlcLiz3JYq4Mlvz%2FMrdjvPNsiF7H37gJblM7hnJTRgtiJzCls6jDBjqkAcsR%2Bkfk2QIUO84DvHWB57YHbiyP0PA5Q39LaYi8DiC4FVUHdHnCU2YzMBbhc8AE7ABON9vMqvVx1sSegkLP2glcraXyefCpicsQ3nogkqCnBf1exfCMMjqppiN5sPK%2Fl0aTfin8dUs1oyXeQxEGlm5UgNjdSvyhA7vFJunr39MkWS%2Fqk3PCgxQCujWIf93UWijSI1Z%2B6TrtharT7Uh%2FqfIvWso%2F&X-Amz-Signature=12358ef8a88aeccd7114ecd79b3b007a4712fb1a9a4ab617cab423d7c07ab6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVPLQ3H%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCEsvowi62lQon6h9GEDpxHNTjwt5kYOA95EjIsgLk%2FmAIhANfxOI0Q1fEVRlVuck%2Bg%2BZvhpwAGS1NOaPQK%2FypzhdCUKv8DCFgQABoMNjM3NDIzMTgzODA1IgwEJmoSE8B1lqBRmlMq3AMieeobRycxBo2tgmiFNAPeLmrID%2BB6ctDL1D78wkzzmOyQguMuq3TDS7%2FlnzMOkf7Xfnu%2FeQ6ldIk1OEc5WKRawWTrWKWQRnIZ6xNpnivh7Fv1tSKEaXMGzcNiX%2BOrHBsR8XiNjVVZkGqB2CjRwwECLFz7QYwjwN2uIR3Rl95sDcE8dHwOIoaIA6S%2FQTK5AUr6OL6p0q17dZSX9L2M09g77OIxn2HsNelMRREWQkS3ICHM59W%2FGAUDDpE14C3aC3geCN00GYVqVmKEeXyC5u6tRMxz9IKIyoCkuSUE7PS8vzeUJ1WgAOg8upkzBuYwdRjl0bJI7JSOR%2Fz4D3qOBLv%2Fa5zc8BuJTKMJSrSYb2SkqSs0AtpPkNb5x2k3WtQCsoFEHZ8IjsTyICPdgF03U5JziPBtL5LmXJJe146h6hhnDBLPzjiDmxQzdIKL8OLyR2LIspx5bU1YhZTKNrerdmI9n0aaXazyeCnA%2BM%2BQAcoQqZ7Y%2BofwkF7LuX6d39gVkqlNX%2F9O2SmweNaYvhooysr7V0Ze%2BxoxlCX0zEusUOrt7KvKasLuRsIzN0CRK153kA2Vne77%2BnVN5YENRlcLiz3JYq4Mlvz%2FMrdjvPNsiF7H37gJblM7hnJTRgtiJzCls6jDBjqkAcsR%2Bkfk2QIUO84DvHWB57YHbiyP0PA5Q39LaYi8DiC4FVUHdHnCU2YzMBbhc8AE7ABON9vMqvVx1sSegkLP2glcraXyefCpicsQ3nogkqCnBf1exfCMMjqppiN5sPK%2Fl0aTfin8dUs1oyXeQxEGlm5UgNjdSvyhA7vFJunr39MkWS%2Fqk3PCgxQCujWIf93UWijSI1Z%2B6TrtharT7Uh%2FqfIvWso%2F&X-Amz-Signature=2742035c6fe94b13ad8cda5346ca209976de382b8da94108ab59c55b97d34fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVPLQ3H%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCEsvowi62lQon6h9GEDpxHNTjwt5kYOA95EjIsgLk%2FmAIhANfxOI0Q1fEVRlVuck%2Bg%2BZvhpwAGS1NOaPQK%2FypzhdCUKv8DCFgQABoMNjM3NDIzMTgzODA1IgwEJmoSE8B1lqBRmlMq3AMieeobRycxBo2tgmiFNAPeLmrID%2BB6ctDL1D78wkzzmOyQguMuq3TDS7%2FlnzMOkf7Xfnu%2FeQ6ldIk1OEc5WKRawWTrWKWQRnIZ6xNpnivh7Fv1tSKEaXMGzcNiX%2BOrHBsR8XiNjVVZkGqB2CjRwwECLFz7QYwjwN2uIR3Rl95sDcE8dHwOIoaIA6S%2FQTK5AUr6OL6p0q17dZSX9L2M09g77OIxn2HsNelMRREWQkS3ICHM59W%2FGAUDDpE14C3aC3geCN00GYVqVmKEeXyC5u6tRMxz9IKIyoCkuSUE7PS8vzeUJ1WgAOg8upkzBuYwdRjl0bJI7JSOR%2Fz4D3qOBLv%2Fa5zc8BuJTKMJSrSYb2SkqSs0AtpPkNb5x2k3WtQCsoFEHZ8IjsTyICPdgF03U5JziPBtL5LmXJJe146h6hhnDBLPzjiDmxQzdIKL8OLyR2LIspx5bU1YhZTKNrerdmI9n0aaXazyeCnA%2BM%2BQAcoQqZ7Y%2BofwkF7LuX6d39gVkqlNX%2F9O2SmweNaYvhooysr7V0Ze%2BxoxlCX0zEusUOrt7KvKasLuRsIzN0CRK153kA2Vne77%2BnVN5YENRlcLiz3JYq4Mlvz%2FMrdjvPNsiF7H37gJblM7hnJTRgtiJzCls6jDBjqkAcsR%2Bkfk2QIUO84DvHWB57YHbiyP0PA5Q39LaYi8DiC4FVUHdHnCU2YzMBbhc8AE7ABON9vMqvVx1sSegkLP2glcraXyefCpicsQ3nogkqCnBf1exfCMMjqppiN5sPK%2Fl0aTfin8dUs1oyXeQxEGlm5UgNjdSvyhA7vFJunr39MkWS%2Fqk3PCgxQCujWIf93UWijSI1Z%2B6TrtharT7Uh%2FqfIvWso%2F&X-Amz-Signature=bd4cabd8af2642944205db3ca93bebe54505376e2a418f212feb3bcec659ea42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
