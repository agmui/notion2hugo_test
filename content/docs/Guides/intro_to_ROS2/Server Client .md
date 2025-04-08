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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSUYD47%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDm41BOa3pIX%2FrpfCHafxrSC0sGumKMlzfR0zEAFu6cwIhAJiSSPbnP2%2FYPbuJYqsZwo4jmMAG2be0mxtYfKJ1ymVrKv8DCHoQABoMNjM3NDIzMTgzODA1IgzWRnXS4FpuKRH%2Bt0gq3AMRj1ZyWRtv07vQE8kPkguhf3Wd%2F2Je3yH1Zy42hK4k5rS6Rws%2B6NIBlyaP7%2B%2BAMe3kOuBYy9hCbUHIt1hmXFbhzoebDjqban%2FkdFivQS2RE5MszRuF%2B44O%2BkihHGOY5YFnz39w%2B5Xg7eGLDqb723jXKgzWeDshYpcnkytu5S0%2FUlN4KR3rV0ehWDSHS7JG%2Bip3yp6nWA%2BDnI8xHZRpsZz6xDL3n%2BK7Bd3DKUK8RqzGU2CvU9S0ATxDQPmW1uMMH65pgSOcXvM%2BXSCRmmTtLPrPSadExBnpWLqBIySgxMhE8YWok5GHnp28%2BXM1B1Ye2lJJxPuPmodDD2oEmqtIZPbNCK4xPLDM%2F0iWPTmet1ZnhpppFLvFDezol1%2B4bjxf8NLwIOkHa3NRIfKYs6fFylAFMucD4FmlqI4Lv9uD0FB%2BEQWNhUNhDTzNjZTZxCAFtN%2BqC0Yjc6pObEDF248uAFLkZ%2FblUUU2MLYoObwXjoH0%2BBawjsdLNEnz%2F%2FlOMmrM2xHoJpOxbyOKtl0y%2B8wT4tBWW%2FcgDktMepDW0Ro5TAENp59GnR9Jl6iDT3BFGChStGb0i8a0VeAtd9pCCHo303MNOD6L4va9H5hLisQxL1v47IUjFIwLKXAwuXFn6zCOodW%2FBjqkAeZFPTTrpp4%2FZ1JNznECt2kW0A4CWKG0Z7yfJVq7PTGISyxyMzexrXVJX0cFd5tZk4rm18ZkpRxz5XB97XtYYJLwyKvmJwFX%2BvySKdlZurFVafyslQe4Zk7MzNTPsTXS%2BsKJ5xXQxXMBIGkHs9uIUOfLo6O1%2F2qUeu%2B3piHy1vtO%2Bf%2BgJOT%2Bq8V0StLUhl6vxF8eBqWJ1ZOPAxdcHtI0lab5I%2Fa8&X-Amz-Signature=8e86de7b1286846a6ab4034226baa10bae41786e8012bdf413f932788f3fc679&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSUYD47%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDm41BOa3pIX%2FrpfCHafxrSC0sGumKMlzfR0zEAFu6cwIhAJiSSPbnP2%2FYPbuJYqsZwo4jmMAG2be0mxtYfKJ1ymVrKv8DCHoQABoMNjM3NDIzMTgzODA1IgzWRnXS4FpuKRH%2Bt0gq3AMRj1ZyWRtv07vQE8kPkguhf3Wd%2F2Je3yH1Zy42hK4k5rS6Rws%2B6NIBlyaP7%2B%2BAMe3kOuBYy9hCbUHIt1hmXFbhzoebDjqban%2FkdFivQS2RE5MszRuF%2B44O%2BkihHGOY5YFnz39w%2B5Xg7eGLDqb723jXKgzWeDshYpcnkytu5S0%2FUlN4KR3rV0ehWDSHS7JG%2Bip3yp6nWA%2BDnI8xHZRpsZz6xDL3n%2BK7Bd3DKUK8RqzGU2CvU9S0ATxDQPmW1uMMH65pgSOcXvM%2BXSCRmmTtLPrPSadExBnpWLqBIySgxMhE8YWok5GHnp28%2BXM1B1Ye2lJJxPuPmodDD2oEmqtIZPbNCK4xPLDM%2F0iWPTmet1ZnhpppFLvFDezol1%2B4bjxf8NLwIOkHa3NRIfKYs6fFylAFMucD4FmlqI4Lv9uD0FB%2BEQWNhUNhDTzNjZTZxCAFtN%2BqC0Yjc6pObEDF248uAFLkZ%2FblUUU2MLYoObwXjoH0%2BBawjsdLNEnz%2F%2FlOMmrM2xHoJpOxbyOKtl0y%2B8wT4tBWW%2FcgDktMepDW0Ro5TAENp59GnR9Jl6iDT3BFGChStGb0i8a0VeAtd9pCCHo303MNOD6L4va9H5hLisQxL1v47IUjFIwLKXAwuXFn6zCOodW%2FBjqkAeZFPTTrpp4%2FZ1JNznECt2kW0A4CWKG0Z7yfJVq7PTGISyxyMzexrXVJX0cFd5tZk4rm18ZkpRxz5XB97XtYYJLwyKvmJwFX%2BvySKdlZurFVafyslQe4Zk7MzNTPsTXS%2BsKJ5xXQxXMBIGkHs9uIUOfLo6O1%2F2qUeu%2B3piHy1vtO%2Bf%2BgJOT%2Bq8V0StLUhl6vxF8eBqWJ1ZOPAxdcHtI0lab5I%2Fa8&X-Amz-Signature=b0507e975dcf002e1175d5b79af59b791c600aa4b80c4c0854328622fbfb08e2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSUYD47%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDm41BOa3pIX%2FrpfCHafxrSC0sGumKMlzfR0zEAFu6cwIhAJiSSPbnP2%2FYPbuJYqsZwo4jmMAG2be0mxtYfKJ1ymVrKv8DCHoQABoMNjM3NDIzMTgzODA1IgzWRnXS4FpuKRH%2Bt0gq3AMRj1ZyWRtv07vQE8kPkguhf3Wd%2F2Je3yH1Zy42hK4k5rS6Rws%2B6NIBlyaP7%2B%2BAMe3kOuBYy9hCbUHIt1hmXFbhzoebDjqban%2FkdFivQS2RE5MszRuF%2B44O%2BkihHGOY5YFnz39w%2B5Xg7eGLDqb723jXKgzWeDshYpcnkytu5S0%2FUlN4KR3rV0ehWDSHS7JG%2Bip3yp6nWA%2BDnI8xHZRpsZz6xDL3n%2BK7Bd3DKUK8RqzGU2CvU9S0ATxDQPmW1uMMH65pgSOcXvM%2BXSCRmmTtLPrPSadExBnpWLqBIySgxMhE8YWok5GHnp28%2BXM1B1Ye2lJJxPuPmodDD2oEmqtIZPbNCK4xPLDM%2F0iWPTmet1ZnhpppFLvFDezol1%2B4bjxf8NLwIOkHa3NRIfKYs6fFylAFMucD4FmlqI4Lv9uD0FB%2BEQWNhUNhDTzNjZTZxCAFtN%2BqC0Yjc6pObEDF248uAFLkZ%2FblUUU2MLYoObwXjoH0%2BBawjsdLNEnz%2F%2FlOMmrM2xHoJpOxbyOKtl0y%2B8wT4tBWW%2FcgDktMepDW0Ro5TAENp59GnR9Jl6iDT3BFGChStGb0i8a0VeAtd9pCCHo303MNOD6L4va9H5hLisQxL1v47IUjFIwLKXAwuXFn6zCOodW%2FBjqkAeZFPTTrpp4%2FZ1JNznECt2kW0A4CWKG0Z7yfJVq7PTGISyxyMzexrXVJX0cFd5tZk4rm18ZkpRxz5XB97XtYYJLwyKvmJwFX%2BvySKdlZurFVafyslQe4Zk7MzNTPsTXS%2BsKJ5xXQxXMBIGkHs9uIUOfLo6O1%2F2qUeu%2B3piHy1vtO%2Bf%2BgJOT%2Bq8V0StLUhl6vxF8eBqWJ1ZOPAxdcHtI0lab5I%2Fa8&X-Amz-Signature=d6397cc7f8c290273a6aec79da3d58a87f7cad8e97f774cf9c5f838cc2dd873e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSUYD47%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDm41BOa3pIX%2FrpfCHafxrSC0sGumKMlzfR0zEAFu6cwIhAJiSSPbnP2%2FYPbuJYqsZwo4jmMAG2be0mxtYfKJ1ymVrKv8DCHoQABoMNjM3NDIzMTgzODA1IgzWRnXS4FpuKRH%2Bt0gq3AMRj1ZyWRtv07vQE8kPkguhf3Wd%2F2Je3yH1Zy42hK4k5rS6Rws%2B6NIBlyaP7%2B%2BAMe3kOuBYy9hCbUHIt1hmXFbhzoebDjqban%2FkdFivQS2RE5MszRuF%2B44O%2BkihHGOY5YFnz39w%2B5Xg7eGLDqb723jXKgzWeDshYpcnkytu5S0%2FUlN4KR3rV0ehWDSHS7JG%2Bip3yp6nWA%2BDnI8xHZRpsZz6xDL3n%2BK7Bd3DKUK8RqzGU2CvU9S0ATxDQPmW1uMMH65pgSOcXvM%2BXSCRmmTtLPrPSadExBnpWLqBIySgxMhE8YWok5GHnp28%2BXM1B1Ye2lJJxPuPmodDD2oEmqtIZPbNCK4xPLDM%2F0iWPTmet1ZnhpppFLvFDezol1%2B4bjxf8NLwIOkHa3NRIfKYs6fFylAFMucD4FmlqI4Lv9uD0FB%2BEQWNhUNhDTzNjZTZxCAFtN%2BqC0Yjc6pObEDF248uAFLkZ%2FblUUU2MLYoObwXjoH0%2BBawjsdLNEnz%2F%2FlOMmrM2xHoJpOxbyOKtl0y%2B8wT4tBWW%2FcgDktMepDW0Ro5TAENp59GnR9Jl6iDT3BFGChStGb0i8a0VeAtd9pCCHo303MNOD6L4va9H5hLisQxL1v47IUjFIwLKXAwuXFn6zCOodW%2FBjqkAeZFPTTrpp4%2FZ1JNznECt2kW0A4CWKG0Z7yfJVq7PTGISyxyMzexrXVJX0cFd5tZk4rm18ZkpRxz5XB97XtYYJLwyKvmJwFX%2BvySKdlZurFVafyslQe4Zk7MzNTPsTXS%2BsKJ5xXQxXMBIGkHs9uIUOfLo6O1%2F2qUeu%2B3piHy1vtO%2Bf%2BgJOT%2Bq8V0StLUhl6vxF8eBqWJ1ZOPAxdcHtI0lab5I%2Fa8&X-Amz-Signature=5877e45114a0ba23f53cdd964947ed810a6f253f81791296e0ae48e11221048c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSUYD47%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDm41BOa3pIX%2FrpfCHafxrSC0sGumKMlzfR0zEAFu6cwIhAJiSSPbnP2%2FYPbuJYqsZwo4jmMAG2be0mxtYfKJ1ymVrKv8DCHoQABoMNjM3NDIzMTgzODA1IgzWRnXS4FpuKRH%2Bt0gq3AMRj1ZyWRtv07vQE8kPkguhf3Wd%2F2Je3yH1Zy42hK4k5rS6Rws%2B6NIBlyaP7%2B%2BAMe3kOuBYy9hCbUHIt1hmXFbhzoebDjqban%2FkdFivQS2RE5MszRuF%2B44O%2BkihHGOY5YFnz39w%2B5Xg7eGLDqb723jXKgzWeDshYpcnkytu5S0%2FUlN4KR3rV0ehWDSHS7JG%2Bip3yp6nWA%2BDnI8xHZRpsZz6xDL3n%2BK7Bd3DKUK8RqzGU2CvU9S0ATxDQPmW1uMMH65pgSOcXvM%2BXSCRmmTtLPrPSadExBnpWLqBIySgxMhE8YWok5GHnp28%2BXM1B1Ye2lJJxPuPmodDD2oEmqtIZPbNCK4xPLDM%2F0iWPTmet1ZnhpppFLvFDezol1%2B4bjxf8NLwIOkHa3NRIfKYs6fFylAFMucD4FmlqI4Lv9uD0FB%2BEQWNhUNhDTzNjZTZxCAFtN%2BqC0Yjc6pObEDF248uAFLkZ%2FblUUU2MLYoObwXjoH0%2BBawjsdLNEnz%2F%2FlOMmrM2xHoJpOxbyOKtl0y%2B8wT4tBWW%2FcgDktMepDW0Ro5TAENp59GnR9Jl6iDT3BFGChStGb0i8a0VeAtd9pCCHo303MNOD6L4va9H5hLisQxL1v47IUjFIwLKXAwuXFn6zCOodW%2FBjqkAeZFPTTrpp4%2FZ1JNznECt2kW0A4CWKG0Z7yfJVq7PTGISyxyMzexrXVJX0cFd5tZk4rm18ZkpRxz5XB97XtYYJLwyKvmJwFX%2BvySKdlZurFVafyslQe4Zk7MzNTPsTXS%2BsKJ5xXQxXMBIGkHs9uIUOfLo6O1%2F2qUeu%2B3piHy1vtO%2Bf%2BgJOT%2Bq8V0StLUhl6vxF8eBqWJ1ZOPAxdcHtI0lab5I%2Fa8&X-Amz-Signature=b326c5b2a9fc57e77cc91931c0c435bab01dd2c86bed73c5a31d1e1283c6cc13&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
