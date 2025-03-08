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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SPG4SH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDl6UahqnZShzP%2B5MRWplurJnsw3I7ikzUaT6Ih2t3k4wIhAKbkQK%2BoxIOYs5TPwICJw2m%2FGJjb6YH4ltmgIzjDqHSDKv8DCFYQABoMNjM3NDIzMTgzODA1IgwSJ8mcoct30XQ90Mcq3AOmlMjYQyMvLuNBtQYPX5NjXyVR5GIdHTEwAPSs2Cyf5Es8%2FXbFGbsE4rpoXHisGtYlUsT54hYvAKLn5RwQhKgk4H7K6%2Fol9pN%2FAqCP%2BFbWzcf9DMPwu6Z%2FBuvAoXa%2Fjhy3M0HCCSXcQSszyZn9cne4%2Ftns76cl5vnCAJHwLpy1LPU2kWFIHgAtYp5GyfOQgZyD%2BMFtUJvfn4pTAmJVyjeoWxTBq65UR%2FhoK%2B%2F4iS07D93pKdbIZ%2BFybhw%2BLpSs0f2UfHJa%2B0Qf0mHyD2cBXpsVNkJarcvRnMSbsFRf18dVyV1PAOLjVOkNR7WNMgbxAjchuJ0uIhG6Fh9p00iUrFPyYC4MfKC170Wq9Fuxlf1Irbi0%2FOrOLHAKQSF9V3X4Ly11IMLgAP52sxGYC2p8hk2gWn6sWG7ErdDawgdgL0iiMpJvzfV437tDPWtCC6umLPNC6XSdjO2Gdac%2BpB0keio585r3HsoXhBVZ0m98WeAN6HFqUlRm72YdnjcEoDruxBv7drrHUTYQAondEoBJSiKVybIDAohoCNIV0VHM70%2FKxzARvsX3%2F%2FRVlyArtiAF6ERkY6pT%2Fr387c%2B0HW3X3sA%2FQyGPf%2FU2i9UcFKLxCzGN7E4bhZrgDxVVB0r%2BOzCQnq%2B%2BBjqkAVoUs4FldBo9KK2Q%2FtJK2R1M6p5vGzIRAtl18kvLfz9AXqqO6gujgko0IaqlHt4exjf3DDHAJrymslNkg9OzYBynZi1LFCE5l7T2UjQuPwmpcl6PC5K%2Bdw4I%2F0k6gdeTiNfRltRWXHF%2FGLoJDU8bNWQt11%2B0jjXn3vqCP6P7dxlq9OpfhZigges0ahKQax%2BigDFFd7H5ZlW%2BHT0DGbilcsB7jHuA&X-Amz-Signature=4abad312891b38dd44537d290c3b62ff32f188ee76fa2c82de8475951bec4634&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SPG4SH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDl6UahqnZShzP%2B5MRWplurJnsw3I7ikzUaT6Ih2t3k4wIhAKbkQK%2BoxIOYs5TPwICJw2m%2FGJjb6YH4ltmgIzjDqHSDKv8DCFYQABoMNjM3NDIzMTgzODA1IgwSJ8mcoct30XQ90Mcq3AOmlMjYQyMvLuNBtQYPX5NjXyVR5GIdHTEwAPSs2Cyf5Es8%2FXbFGbsE4rpoXHisGtYlUsT54hYvAKLn5RwQhKgk4H7K6%2Fol9pN%2FAqCP%2BFbWzcf9DMPwu6Z%2FBuvAoXa%2Fjhy3M0HCCSXcQSszyZn9cne4%2Ftns76cl5vnCAJHwLpy1LPU2kWFIHgAtYp5GyfOQgZyD%2BMFtUJvfn4pTAmJVyjeoWxTBq65UR%2FhoK%2B%2F4iS07D93pKdbIZ%2BFybhw%2BLpSs0f2UfHJa%2B0Qf0mHyD2cBXpsVNkJarcvRnMSbsFRf18dVyV1PAOLjVOkNR7WNMgbxAjchuJ0uIhG6Fh9p00iUrFPyYC4MfKC170Wq9Fuxlf1Irbi0%2FOrOLHAKQSF9V3X4Ly11IMLgAP52sxGYC2p8hk2gWn6sWG7ErdDawgdgL0iiMpJvzfV437tDPWtCC6umLPNC6XSdjO2Gdac%2BpB0keio585r3HsoXhBVZ0m98WeAN6HFqUlRm72YdnjcEoDruxBv7drrHUTYQAondEoBJSiKVybIDAohoCNIV0VHM70%2FKxzARvsX3%2F%2FRVlyArtiAF6ERkY6pT%2Fr387c%2B0HW3X3sA%2FQyGPf%2FU2i9UcFKLxCzGN7E4bhZrgDxVVB0r%2BOzCQnq%2B%2BBjqkAVoUs4FldBo9KK2Q%2FtJK2R1M6p5vGzIRAtl18kvLfz9AXqqO6gujgko0IaqlHt4exjf3DDHAJrymslNkg9OzYBynZi1LFCE5l7T2UjQuPwmpcl6PC5K%2Bdw4I%2F0k6gdeTiNfRltRWXHF%2FGLoJDU8bNWQt11%2B0jjXn3vqCP6P7dxlq9OpfhZigges0ahKQax%2BigDFFd7H5ZlW%2BHT0DGbilcsB7jHuA&X-Amz-Signature=0788b00b49b8d4c6ccc61a29bc2c3bda2915b829e2c7e3536f0772741656fc66&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SPG4SH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDl6UahqnZShzP%2B5MRWplurJnsw3I7ikzUaT6Ih2t3k4wIhAKbkQK%2BoxIOYs5TPwICJw2m%2FGJjb6YH4ltmgIzjDqHSDKv8DCFYQABoMNjM3NDIzMTgzODA1IgwSJ8mcoct30XQ90Mcq3AOmlMjYQyMvLuNBtQYPX5NjXyVR5GIdHTEwAPSs2Cyf5Es8%2FXbFGbsE4rpoXHisGtYlUsT54hYvAKLn5RwQhKgk4H7K6%2Fol9pN%2FAqCP%2BFbWzcf9DMPwu6Z%2FBuvAoXa%2Fjhy3M0HCCSXcQSszyZn9cne4%2Ftns76cl5vnCAJHwLpy1LPU2kWFIHgAtYp5GyfOQgZyD%2BMFtUJvfn4pTAmJVyjeoWxTBq65UR%2FhoK%2B%2F4iS07D93pKdbIZ%2BFybhw%2BLpSs0f2UfHJa%2B0Qf0mHyD2cBXpsVNkJarcvRnMSbsFRf18dVyV1PAOLjVOkNR7WNMgbxAjchuJ0uIhG6Fh9p00iUrFPyYC4MfKC170Wq9Fuxlf1Irbi0%2FOrOLHAKQSF9V3X4Ly11IMLgAP52sxGYC2p8hk2gWn6sWG7ErdDawgdgL0iiMpJvzfV437tDPWtCC6umLPNC6XSdjO2Gdac%2BpB0keio585r3HsoXhBVZ0m98WeAN6HFqUlRm72YdnjcEoDruxBv7drrHUTYQAondEoBJSiKVybIDAohoCNIV0VHM70%2FKxzARvsX3%2F%2FRVlyArtiAF6ERkY6pT%2Fr387c%2B0HW3X3sA%2FQyGPf%2FU2i9UcFKLxCzGN7E4bhZrgDxVVB0r%2BOzCQnq%2B%2BBjqkAVoUs4FldBo9KK2Q%2FtJK2R1M6p5vGzIRAtl18kvLfz9AXqqO6gujgko0IaqlHt4exjf3DDHAJrymslNkg9OzYBynZi1LFCE5l7T2UjQuPwmpcl6PC5K%2Bdw4I%2F0k6gdeTiNfRltRWXHF%2FGLoJDU8bNWQt11%2B0jjXn3vqCP6P7dxlq9OpfhZigges0ahKQax%2BigDFFd7H5ZlW%2BHT0DGbilcsB7jHuA&X-Amz-Signature=3e4ea2ef8056c7419cc90a04937f0217cb9ebd553e2f07b884e772082b5d2e38&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SPG4SH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDl6UahqnZShzP%2B5MRWplurJnsw3I7ikzUaT6Ih2t3k4wIhAKbkQK%2BoxIOYs5TPwICJw2m%2FGJjb6YH4ltmgIzjDqHSDKv8DCFYQABoMNjM3NDIzMTgzODA1IgwSJ8mcoct30XQ90Mcq3AOmlMjYQyMvLuNBtQYPX5NjXyVR5GIdHTEwAPSs2Cyf5Es8%2FXbFGbsE4rpoXHisGtYlUsT54hYvAKLn5RwQhKgk4H7K6%2Fol9pN%2FAqCP%2BFbWzcf9DMPwu6Z%2FBuvAoXa%2Fjhy3M0HCCSXcQSszyZn9cne4%2Ftns76cl5vnCAJHwLpy1LPU2kWFIHgAtYp5GyfOQgZyD%2BMFtUJvfn4pTAmJVyjeoWxTBq65UR%2FhoK%2B%2F4iS07D93pKdbIZ%2BFybhw%2BLpSs0f2UfHJa%2B0Qf0mHyD2cBXpsVNkJarcvRnMSbsFRf18dVyV1PAOLjVOkNR7WNMgbxAjchuJ0uIhG6Fh9p00iUrFPyYC4MfKC170Wq9Fuxlf1Irbi0%2FOrOLHAKQSF9V3X4Ly11IMLgAP52sxGYC2p8hk2gWn6sWG7ErdDawgdgL0iiMpJvzfV437tDPWtCC6umLPNC6XSdjO2Gdac%2BpB0keio585r3HsoXhBVZ0m98WeAN6HFqUlRm72YdnjcEoDruxBv7drrHUTYQAondEoBJSiKVybIDAohoCNIV0VHM70%2FKxzARvsX3%2F%2FRVlyArtiAF6ERkY6pT%2Fr387c%2B0HW3X3sA%2FQyGPf%2FU2i9UcFKLxCzGN7E4bhZrgDxVVB0r%2BOzCQnq%2B%2BBjqkAVoUs4FldBo9KK2Q%2FtJK2R1M6p5vGzIRAtl18kvLfz9AXqqO6gujgko0IaqlHt4exjf3DDHAJrymslNkg9OzYBynZi1LFCE5l7T2UjQuPwmpcl6PC5K%2Bdw4I%2F0k6gdeTiNfRltRWXHF%2FGLoJDU8bNWQt11%2B0jjXn3vqCP6P7dxlq9OpfhZigges0ahKQax%2BigDFFd7H5ZlW%2BHT0DGbilcsB7jHuA&X-Amz-Signature=b6353bb60b8eed264eac4a07cecc7ba65655849fffe2d3971779d0f3256a0b32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SPG4SH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDl6UahqnZShzP%2B5MRWplurJnsw3I7ikzUaT6Ih2t3k4wIhAKbkQK%2BoxIOYs5TPwICJw2m%2FGJjb6YH4ltmgIzjDqHSDKv8DCFYQABoMNjM3NDIzMTgzODA1IgwSJ8mcoct30XQ90Mcq3AOmlMjYQyMvLuNBtQYPX5NjXyVR5GIdHTEwAPSs2Cyf5Es8%2FXbFGbsE4rpoXHisGtYlUsT54hYvAKLn5RwQhKgk4H7K6%2Fol9pN%2FAqCP%2BFbWzcf9DMPwu6Z%2FBuvAoXa%2Fjhy3M0HCCSXcQSszyZn9cne4%2Ftns76cl5vnCAJHwLpy1LPU2kWFIHgAtYp5GyfOQgZyD%2BMFtUJvfn4pTAmJVyjeoWxTBq65UR%2FhoK%2B%2F4iS07D93pKdbIZ%2BFybhw%2BLpSs0f2UfHJa%2B0Qf0mHyD2cBXpsVNkJarcvRnMSbsFRf18dVyV1PAOLjVOkNR7WNMgbxAjchuJ0uIhG6Fh9p00iUrFPyYC4MfKC170Wq9Fuxlf1Irbi0%2FOrOLHAKQSF9V3X4Ly11IMLgAP52sxGYC2p8hk2gWn6sWG7ErdDawgdgL0iiMpJvzfV437tDPWtCC6umLPNC6XSdjO2Gdac%2BpB0keio585r3HsoXhBVZ0m98WeAN6HFqUlRm72YdnjcEoDruxBv7drrHUTYQAondEoBJSiKVybIDAohoCNIV0VHM70%2FKxzARvsX3%2F%2FRVlyArtiAF6ERkY6pT%2Fr387c%2B0HW3X3sA%2FQyGPf%2FU2i9UcFKLxCzGN7E4bhZrgDxVVB0r%2BOzCQnq%2B%2BBjqkAVoUs4FldBo9KK2Q%2FtJK2R1M6p5vGzIRAtl18kvLfz9AXqqO6gujgko0IaqlHt4exjf3DDHAJrymslNkg9OzYBynZi1LFCE5l7T2UjQuPwmpcl6PC5K%2Bdw4I%2F0k6gdeTiNfRltRWXHF%2FGLoJDU8bNWQt11%2B0jjXn3vqCP6P7dxlq9OpfhZigges0ahKQax%2BigDFFd7H5ZlW%2BHT0DGbilcsB7jHuA&X-Amz-Signature=f21a01dba60e265acadc090dea96a72321248458ae40ba0c80b42a284e345317&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
