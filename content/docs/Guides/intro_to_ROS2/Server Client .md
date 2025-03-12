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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCKTVSQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIQCyCzS5yxuVcdajauRsdEC1Vzw5TEFT7gf%2FlaZtqh6mQAIffVQybXkx%2FTPfVlTcxyCiqWGNz4YUuLaLqP4YLEMMayqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3KrW8nNXf1Vh2xKtwDHSs4SImHu6t4ct1WOJgJO%2BwdvFZQeTL%2F2GsPmrcppZnSBFKozSWzAhd4CBAvcmNv5oD19exbxhGTZjAhb7%2FzjkoyG%2FBGekbLPW9iSxjtB2p5%2BtDQq9LOX9HNju3Q7Vfu9h80WzHr42WwxWORU0v6639hwzbEFIBwJFE2w4eZ8P0mRhTPmNBjZEe0ZymMZ0Tnm7ibpm%2BjG4VAGhmhrc8Mbn5YYIgPr8%2BHKpxVBIhvlsGxZfcnfrz04MA6kQdedJ7SqWXdZ4ihhiguY%2F0F5v4uUHEbdTKRsha7aeU0NvelYx2DGloJMA6oPjzyLcf3LNP76hiAH8Nd66%2F0495Oanc2hIDLOn6cyCVMzTwlIl9i9LrAQgDAQdCs1DdGtz6LAfZn8C9FTRVYlZDyInVTwyWS9W4ZG%2BhupyxOtBrO3sGomJ%2FzDVX%2FFIgRzn2n8gCdamO38exf9YYB68tdLxPXE0Bg58oX0M0YhJ5Wz7WXpIC1TQzQDkPwvQrhDNhDHCR4mJfSQhWoWNseTNuWrlJH2O0CEyLyS4m7MZdcWtqBPPUp0NCYIHI3ThqR2IuUXGdeFO1f2nv0x7FIK2FGIjv2bvp0KENmDT6uiupNVTjGbw%2FDOtU19Pv87a%2BTtwF%2FS5swrf%2FFvgY6pgFdBMH13GPqEq59bZjmfbBF4LWJi3nDy3%2BY4dxQ5iOTirocE9Yh2xyFTM7HYGH0nu9sA7vsuzJ%2BHZLHtJE3zO9zju62feZ%2FvYuLh4Ia4dcWVb2q8bnbjQ0qeUBok%2BHNMTa9dtcfZUKfGBlbR4hEsc6DpSpUDKX%2BJ7ctu66tMapqfDYW1geWHbPbqMbIg1kvs27PuxoX14aophk1ugij1CS8OIsXHH1O&X-Amz-Signature=572f25463c9fccf57f98d12cf5a5733a85e4e55abb69daf757c40218307a1af5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCKTVSQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIQCyCzS5yxuVcdajauRsdEC1Vzw5TEFT7gf%2FlaZtqh6mQAIffVQybXkx%2FTPfVlTcxyCiqWGNz4YUuLaLqP4YLEMMayqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3KrW8nNXf1Vh2xKtwDHSs4SImHu6t4ct1WOJgJO%2BwdvFZQeTL%2F2GsPmrcppZnSBFKozSWzAhd4CBAvcmNv5oD19exbxhGTZjAhb7%2FzjkoyG%2FBGekbLPW9iSxjtB2p5%2BtDQq9LOX9HNju3Q7Vfu9h80WzHr42WwxWORU0v6639hwzbEFIBwJFE2w4eZ8P0mRhTPmNBjZEe0ZymMZ0Tnm7ibpm%2BjG4VAGhmhrc8Mbn5YYIgPr8%2BHKpxVBIhvlsGxZfcnfrz04MA6kQdedJ7SqWXdZ4ihhiguY%2F0F5v4uUHEbdTKRsha7aeU0NvelYx2DGloJMA6oPjzyLcf3LNP76hiAH8Nd66%2F0495Oanc2hIDLOn6cyCVMzTwlIl9i9LrAQgDAQdCs1DdGtz6LAfZn8C9FTRVYlZDyInVTwyWS9W4ZG%2BhupyxOtBrO3sGomJ%2FzDVX%2FFIgRzn2n8gCdamO38exf9YYB68tdLxPXE0Bg58oX0M0YhJ5Wz7WXpIC1TQzQDkPwvQrhDNhDHCR4mJfSQhWoWNseTNuWrlJH2O0CEyLyS4m7MZdcWtqBPPUp0NCYIHI3ThqR2IuUXGdeFO1f2nv0x7FIK2FGIjv2bvp0KENmDT6uiupNVTjGbw%2FDOtU19Pv87a%2BTtwF%2FS5swrf%2FFvgY6pgFdBMH13GPqEq59bZjmfbBF4LWJi3nDy3%2BY4dxQ5iOTirocE9Yh2xyFTM7HYGH0nu9sA7vsuzJ%2BHZLHtJE3zO9zju62feZ%2FvYuLh4Ia4dcWVb2q8bnbjQ0qeUBok%2BHNMTa9dtcfZUKfGBlbR4hEsc6DpSpUDKX%2BJ7ctu66tMapqfDYW1geWHbPbqMbIg1kvs27PuxoX14aophk1ugij1CS8OIsXHH1O&X-Amz-Signature=a745cadf86daeb9b80152e8e0010e0535ffccefdcaac5f93982057023d163cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCKTVSQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIQCyCzS5yxuVcdajauRsdEC1Vzw5TEFT7gf%2FlaZtqh6mQAIffVQybXkx%2FTPfVlTcxyCiqWGNz4YUuLaLqP4YLEMMayqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3KrW8nNXf1Vh2xKtwDHSs4SImHu6t4ct1WOJgJO%2BwdvFZQeTL%2F2GsPmrcppZnSBFKozSWzAhd4CBAvcmNv5oD19exbxhGTZjAhb7%2FzjkoyG%2FBGekbLPW9iSxjtB2p5%2BtDQq9LOX9HNju3Q7Vfu9h80WzHr42WwxWORU0v6639hwzbEFIBwJFE2w4eZ8P0mRhTPmNBjZEe0ZymMZ0Tnm7ibpm%2BjG4VAGhmhrc8Mbn5YYIgPr8%2BHKpxVBIhvlsGxZfcnfrz04MA6kQdedJ7SqWXdZ4ihhiguY%2F0F5v4uUHEbdTKRsha7aeU0NvelYx2DGloJMA6oPjzyLcf3LNP76hiAH8Nd66%2F0495Oanc2hIDLOn6cyCVMzTwlIl9i9LrAQgDAQdCs1DdGtz6LAfZn8C9FTRVYlZDyInVTwyWS9W4ZG%2BhupyxOtBrO3sGomJ%2FzDVX%2FFIgRzn2n8gCdamO38exf9YYB68tdLxPXE0Bg58oX0M0YhJ5Wz7WXpIC1TQzQDkPwvQrhDNhDHCR4mJfSQhWoWNseTNuWrlJH2O0CEyLyS4m7MZdcWtqBPPUp0NCYIHI3ThqR2IuUXGdeFO1f2nv0x7FIK2FGIjv2bvp0KENmDT6uiupNVTjGbw%2FDOtU19Pv87a%2BTtwF%2FS5swrf%2FFvgY6pgFdBMH13GPqEq59bZjmfbBF4LWJi3nDy3%2BY4dxQ5iOTirocE9Yh2xyFTM7HYGH0nu9sA7vsuzJ%2BHZLHtJE3zO9zju62feZ%2FvYuLh4Ia4dcWVb2q8bnbjQ0qeUBok%2BHNMTa9dtcfZUKfGBlbR4hEsc6DpSpUDKX%2BJ7ctu66tMapqfDYW1geWHbPbqMbIg1kvs27PuxoX14aophk1ugij1CS8OIsXHH1O&X-Amz-Signature=c7e62b7c676cbad52fc56732085493a58f7ee35dd3c2795a8b8c64f116a29a87&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCKTVSQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIQCyCzS5yxuVcdajauRsdEC1Vzw5TEFT7gf%2FlaZtqh6mQAIffVQybXkx%2FTPfVlTcxyCiqWGNz4YUuLaLqP4YLEMMayqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3KrW8nNXf1Vh2xKtwDHSs4SImHu6t4ct1WOJgJO%2BwdvFZQeTL%2F2GsPmrcppZnSBFKozSWzAhd4CBAvcmNv5oD19exbxhGTZjAhb7%2FzjkoyG%2FBGekbLPW9iSxjtB2p5%2BtDQq9LOX9HNju3Q7Vfu9h80WzHr42WwxWORU0v6639hwzbEFIBwJFE2w4eZ8P0mRhTPmNBjZEe0ZymMZ0Tnm7ibpm%2BjG4VAGhmhrc8Mbn5YYIgPr8%2BHKpxVBIhvlsGxZfcnfrz04MA6kQdedJ7SqWXdZ4ihhiguY%2F0F5v4uUHEbdTKRsha7aeU0NvelYx2DGloJMA6oPjzyLcf3LNP76hiAH8Nd66%2F0495Oanc2hIDLOn6cyCVMzTwlIl9i9LrAQgDAQdCs1DdGtz6LAfZn8C9FTRVYlZDyInVTwyWS9W4ZG%2BhupyxOtBrO3sGomJ%2FzDVX%2FFIgRzn2n8gCdamO38exf9YYB68tdLxPXE0Bg58oX0M0YhJ5Wz7WXpIC1TQzQDkPwvQrhDNhDHCR4mJfSQhWoWNseTNuWrlJH2O0CEyLyS4m7MZdcWtqBPPUp0NCYIHI3ThqR2IuUXGdeFO1f2nv0x7FIK2FGIjv2bvp0KENmDT6uiupNVTjGbw%2FDOtU19Pv87a%2BTtwF%2FS5swrf%2FFvgY6pgFdBMH13GPqEq59bZjmfbBF4LWJi3nDy3%2BY4dxQ5iOTirocE9Yh2xyFTM7HYGH0nu9sA7vsuzJ%2BHZLHtJE3zO9zju62feZ%2FvYuLh4Ia4dcWVb2q8bnbjQ0qeUBok%2BHNMTa9dtcfZUKfGBlbR4hEsc6DpSpUDKX%2BJ7ctu66tMapqfDYW1geWHbPbqMbIg1kvs27PuxoX14aophk1ugij1CS8OIsXHH1O&X-Amz-Signature=dd575326cf16c519947d7696bd736fc23cb69e0822c9ad79794b9bb1d16b7d40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCKTVSQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIQCyCzS5yxuVcdajauRsdEC1Vzw5TEFT7gf%2FlaZtqh6mQAIffVQybXkx%2FTPfVlTcxyCiqWGNz4YUuLaLqP4YLEMMayqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3KrW8nNXf1Vh2xKtwDHSs4SImHu6t4ct1WOJgJO%2BwdvFZQeTL%2F2GsPmrcppZnSBFKozSWzAhd4CBAvcmNv5oD19exbxhGTZjAhb7%2FzjkoyG%2FBGekbLPW9iSxjtB2p5%2BtDQq9LOX9HNju3Q7Vfu9h80WzHr42WwxWORU0v6639hwzbEFIBwJFE2w4eZ8P0mRhTPmNBjZEe0ZymMZ0Tnm7ibpm%2BjG4VAGhmhrc8Mbn5YYIgPr8%2BHKpxVBIhvlsGxZfcnfrz04MA6kQdedJ7SqWXdZ4ihhiguY%2F0F5v4uUHEbdTKRsha7aeU0NvelYx2DGloJMA6oPjzyLcf3LNP76hiAH8Nd66%2F0495Oanc2hIDLOn6cyCVMzTwlIl9i9LrAQgDAQdCs1DdGtz6LAfZn8C9FTRVYlZDyInVTwyWS9W4ZG%2BhupyxOtBrO3sGomJ%2FzDVX%2FFIgRzn2n8gCdamO38exf9YYB68tdLxPXE0Bg58oX0M0YhJ5Wz7WXpIC1TQzQDkPwvQrhDNhDHCR4mJfSQhWoWNseTNuWrlJH2O0CEyLyS4m7MZdcWtqBPPUp0NCYIHI3ThqR2IuUXGdeFO1f2nv0x7FIK2FGIjv2bvp0KENmDT6uiupNVTjGbw%2FDOtU19Pv87a%2BTtwF%2FS5swrf%2FFvgY6pgFdBMH13GPqEq59bZjmfbBF4LWJi3nDy3%2BY4dxQ5iOTirocE9Yh2xyFTM7HYGH0nu9sA7vsuzJ%2BHZLHtJE3zO9zju62feZ%2FvYuLh4Ia4dcWVb2q8bnbjQ0qeUBok%2BHNMTa9dtcfZUKfGBlbR4hEsc6DpSpUDKX%2BJ7ctu66tMapqfDYW1geWHbPbqMbIg1kvs27PuxoX14aophk1ugij1CS8OIsXHH1O&X-Amz-Signature=5d5da198574138191b27ead0092b670b29b939e7dcca51b4cd5a20414408712a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
