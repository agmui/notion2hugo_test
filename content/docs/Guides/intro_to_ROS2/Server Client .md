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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5QVMA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo%2BxGkvFsV8Ij8%2BX7MvZnWDIQ9wSolWuXGnb1ajjBXtAiEAo5Biy37jZkJJfNcIa3Y9IP9momtxPmqJl5HdZ2mkQHEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETubBUw%2BYAQkJ%2FRaircAzmvlRYFM0IludHG3hYqV3O5%2F9WkYsaYUJ%2B2HuRi6289M2M0xrMCN5fJuYQgEDf51rNKtgmWkbsvszR54IdW1yvWuTOWvjBcMRH3v88Pv2IRVWoZvE2LnGOvpTQM8v7he2Cljr4el%2FjmSOlVBwq7gKxjoHvmMW3U1aMwLZlggnUU6P289Xqxik7xnaspvUOVkpxUltk7lm4UThylSC3FIFDupiHQCP5%2FzJt9GXVGCMk1mPFw3zhzIsSHRf0wAdh6emkVQZ7ksn5A8SLXDmmfYckKqtEb%2BEUo3kVCec6MEIFc3OwpkcwJNoovEnbcOwos8C7U0lAJ4AtVvJB1130uTKrTsx9HYCRwoUad7i0W%2FcQLxTNGhgYDTtA%2BFsASrbmi5u5q52jy4BQ7iQoVQbzR%2BtLtPCZNTdLlve8X9hBUe7J02DAl%2BGNemc4k7eeR3wbJKrw8j8nYmgumPXvcWiD1ftTDPZd7bdeA6J5hFhpatTl4ve7Xdlgk4YWU8wh2IFp0TTDkyPDBWA82VrVsp5wT0L4TpcNsDy%2B8Z5kEgldhpiH%2B8a0ldK0hyBSVuujj0FeaV0FZ84a1Rr8bbALGrJBN4z1d%2B1SN6gomRE7%2FfRDzA5dxfCBqkjbpoplzas85MPej%2FL8GOqUBoGn8xnLYc0%2BCBCJghF3T%2FzWDkQVV8Q3H%2FniYk83dJsBqWjqA%2F8fmXwv%2FliyRG0CRYgnTyp0mhjhsirDVGoCkhNee%2B40tMZQX1XP2we8yBFv4TZG9GrEulOahjD2dsRx8vTjKloHRxyOrVn7V%2Fd1IostPe7RQPpbtXCclutFBpuM1hACPwAcpUKHFFmbQn53Clj%2F0DS6HZGBgV3wp2vlq%2BMSWX9MN&X-Amz-Signature=7f6b71f35626f8a60870ebe267598bb29500cd7ec7bbfc8673c376077820bc05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5QVMA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo%2BxGkvFsV8Ij8%2BX7MvZnWDIQ9wSolWuXGnb1ajjBXtAiEAo5Biy37jZkJJfNcIa3Y9IP9momtxPmqJl5HdZ2mkQHEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETubBUw%2BYAQkJ%2FRaircAzmvlRYFM0IludHG3hYqV3O5%2F9WkYsaYUJ%2B2HuRi6289M2M0xrMCN5fJuYQgEDf51rNKtgmWkbsvszR54IdW1yvWuTOWvjBcMRH3v88Pv2IRVWoZvE2LnGOvpTQM8v7he2Cljr4el%2FjmSOlVBwq7gKxjoHvmMW3U1aMwLZlggnUU6P289Xqxik7xnaspvUOVkpxUltk7lm4UThylSC3FIFDupiHQCP5%2FzJt9GXVGCMk1mPFw3zhzIsSHRf0wAdh6emkVQZ7ksn5A8SLXDmmfYckKqtEb%2BEUo3kVCec6MEIFc3OwpkcwJNoovEnbcOwos8C7U0lAJ4AtVvJB1130uTKrTsx9HYCRwoUad7i0W%2FcQLxTNGhgYDTtA%2BFsASrbmi5u5q52jy4BQ7iQoVQbzR%2BtLtPCZNTdLlve8X9hBUe7J02DAl%2BGNemc4k7eeR3wbJKrw8j8nYmgumPXvcWiD1ftTDPZd7bdeA6J5hFhpatTl4ve7Xdlgk4YWU8wh2IFp0TTDkyPDBWA82VrVsp5wT0L4TpcNsDy%2B8Z5kEgldhpiH%2B8a0ldK0hyBSVuujj0FeaV0FZ84a1Rr8bbALGrJBN4z1d%2B1SN6gomRE7%2FfRDzA5dxfCBqkjbpoplzas85MPej%2FL8GOqUBoGn8xnLYc0%2BCBCJghF3T%2FzWDkQVV8Q3H%2FniYk83dJsBqWjqA%2F8fmXwv%2FliyRG0CRYgnTyp0mhjhsirDVGoCkhNee%2B40tMZQX1XP2we8yBFv4TZG9GrEulOahjD2dsRx8vTjKloHRxyOrVn7V%2Fd1IostPe7RQPpbtXCclutFBpuM1hACPwAcpUKHFFmbQn53Clj%2F0DS6HZGBgV3wp2vlq%2BMSWX9MN&X-Amz-Signature=7295421cfebcc36167f0878fac44774c05427b2cc241482cafb03482a16ab44c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5QVMA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo%2BxGkvFsV8Ij8%2BX7MvZnWDIQ9wSolWuXGnb1ajjBXtAiEAo5Biy37jZkJJfNcIa3Y9IP9momtxPmqJl5HdZ2mkQHEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETubBUw%2BYAQkJ%2FRaircAzmvlRYFM0IludHG3hYqV3O5%2F9WkYsaYUJ%2B2HuRi6289M2M0xrMCN5fJuYQgEDf51rNKtgmWkbsvszR54IdW1yvWuTOWvjBcMRH3v88Pv2IRVWoZvE2LnGOvpTQM8v7he2Cljr4el%2FjmSOlVBwq7gKxjoHvmMW3U1aMwLZlggnUU6P289Xqxik7xnaspvUOVkpxUltk7lm4UThylSC3FIFDupiHQCP5%2FzJt9GXVGCMk1mPFw3zhzIsSHRf0wAdh6emkVQZ7ksn5A8SLXDmmfYckKqtEb%2BEUo3kVCec6MEIFc3OwpkcwJNoovEnbcOwos8C7U0lAJ4AtVvJB1130uTKrTsx9HYCRwoUad7i0W%2FcQLxTNGhgYDTtA%2BFsASrbmi5u5q52jy4BQ7iQoVQbzR%2BtLtPCZNTdLlve8X9hBUe7J02DAl%2BGNemc4k7eeR3wbJKrw8j8nYmgumPXvcWiD1ftTDPZd7bdeA6J5hFhpatTl4ve7Xdlgk4YWU8wh2IFp0TTDkyPDBWA82VrVsp5wT0L4TpcNsDy%2B8Z5kEgldhpiH%2B8a0ldK0hyBSVuujj0FeaV0FZ84a1Rr8bbALGrJBN4z1d%2B1SN6gomRE7%2FfRDzA5dxfCBqkjbpoplzas85MPej%2FL8GOqUBoGn8xnLYc0%2BCBCJghF3T%2FzWDkQVV8Q3H%2FniYk83dJsBqWjqA%2F8fmXwv%2FliyRG0CRYgnTyp0mhjhsirDVGoCkhNee%2B40tMZQX1XP2we8yBFv4TZG9GrEulOahjD2dsRx8vTjKloHRxyOrVn7V%2Fd1IostPe7RQPpbtXCclutFBpuM1hACPwAcpUKHFFmbQn53Clj%2F0DS6HZGBgV3wp2vlq%2BMSWX9MN&X-Amz-Signature=994a652015664329927a4a47fe32d87807e504e0c897fc7b8496c62846c380e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5QVMA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo%2BxGkvFsV8Ij8%2BX7MvZnWDIQ9wSolWuXGnb1ajjBXtAiEAo5Biy37jZkJJfNcIa3Y9IP9momtxPmqJl5HdZ2mkQHEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETubBUw%2BYAQkJ%2FRaircAzmvlRYFM0IludHG3hYqV3O5%2F9WkYsaYUJ%2B2HuRi6289M2M0xrMCN5fJuYQgEDf51rNKtgmWkbsvszR54IdW1yvWuTOWvjBcMRH3v88Pv2IRVWoZvE2LnGOvpTQM8v7he2Cljr4el%2FjmSOlVBwq7gKxjoHvmMW3U1aMwLZlggnUU6P289Xqxik7xnaspvUOVkpxUltk7lm4UThylSC3FIFDupiHQCP5%2FzJt9GXVGCMk1mPFw3zhzIsSHRf0wAdh6emkVQZ7ksn5A8SLXDmmfYckKqtEb%2BEUo3kVCec6MEIFc3OwpkcwJNoovEnbcOwos8C7U0lAJ4AtVvJB1130uTKrTsx9HYCRwoUad7i0W%2FcQLxTNGhgYDTtA%2BFsASrbmi5u5q52jy4BQ7iQoVQbzR%2BtLtPCZNTdLlve8X9hBUe7J02DAl%2BGNemc4k7eeR3wbJKrw8j8nYmgumPXvcWiD1ftTDPZd7bdeA6J5hFhpatTl4ve7Xdlgk4YWU8wh2IFp0TTDkyPDBWA82VrVsp5wT0L4TpcNsDy%2B8Z5kEgldhpiH%2B8a0ldK0hyBSVuujj0FeaV0FZ84a1Rr8bbALGrJBN4z1d%2B1SN6gomRE7%2FfRDzA5dxfCBqkjbpoplzas85MPej%2FL8GOqUBoGn8xnLYc0%2BCBCJghF3T%2FzWDkQVV8Q3H%2FniYk83dJsBqWjqA%2F8fmXwv%2FliyRG0CRYgnTyp0mhjhsirDVGoCkhNee%2B40tMZQX1XP2we8yBFv4TZG9GrEulOahjD2dsRx8vTjKloHRxyOrVn7V%2Fd1IostPe7RQPpbtXCclutFBpuM1hACPwAcpUKHFFmbQn53Clj%2F0DS6HZGBgV3wp2vlq%2BMSWX9MN&X-Amz-Signature=30e70df110f3a1f69f03ad4bf4b460bb1d79e4ea8aff7071c09be41e628c7b56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5QVMA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo%2BxGkvFsV8Ij8%2BX7MvZnWDIQ9wSolWuXGnb1ajjBXtAiEAo5Biy37jZkJJfNcIa3Y9IP9momtxPmqJl5HdZ2mkQHEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETubBUw%2BYAQkJ%2FRaircAzmvlRYFM0IludHG3hYqV3O5%2F9WkYsaYUJ%2B2HuRi6289M2M0xrMCN5fJuYQgEDf51rNKtgmWkbsvszR54IdW1yvWuTOWvjBcMRH3v88Pv2IRVWoZvE2LnGOvpTQM8v7he2Cljr4el%2FjmSOlVBwq7gKxjoHvmMW3U1aMwLZlggnUU6P289Xqxik7xnaspvUOVkpxUltk7lm4UThylSC3FIFDupiHQCP5%2FzJt9GXVGCMk1mPFw3zhzIsSHRf0wAdh6emkVQZ7ksn5A8SLXDmmfYckKqtEb%2BEUo3kVCec6MEIFc3OwpkcwJNoovEnbcOwos8C7U0lAJ4AtVvJB1130uTKrTsx9HYCRwoUad7i0W%2FcQLxTNGhgYDTtA%2BFsASrbmi5u5q52jy4BQ7iQoVQbzR%2BtLtPCZNTdLlve8X9hBUe7J02DAl%2BGNemc4k7eeR3wbJKrw8j8nYmgumPXvcWiD1ftTDPZd7bdeA6J5hFhpatTl4ve7Xdlgk4YWU8wh2IFp0TTDkyPDBWA82VrVsp5wT0L4TpcNsDy%2B8Z5kEgldhpiH%2B8a0ldK0hyBSVuujj0FeaV0FZ84a1Rr8bbALGrJBN4z1d%2B1SN6gomRE7%2FfRDzA5dxfCBqkjbpoplzas85MPej%2FL8GOqUBoGn8xnLYc0%2BCBCJghF3T%2FzWDkQVV8Q3H%2FniYk83dJsBqWjqA%2F8fmXwv%2FliyRG0CRYgnTyp0mhjhsirDVGoCkhNee%2B40tMZQX1XP2we8yBFv4TZG9GrEulOahjD2dsRx8vTjKloHRxyOrVn7V%2Fd1IostPe7RQPpbtXCclutFBpuM1hACPwAcpUKHFFmbQn53Clj%2F0DS6HZGBgV3wp2vlq%2BMSWX9MN&X-Amz-Signature=650d7e958d010d2feb70c95a513fc92854840cdc193ca94a0d7c4799853f741b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
