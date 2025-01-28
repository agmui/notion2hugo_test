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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBC5UM35%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBw5luSHNBC95rHIauJvURqyTBx136rxGPWxqmURNI9DAiAdQ1rGKQ8z3s7pYyvfEKrpHLN8V8N7b0%2Bd0cQfFRXDAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXtqTN9uh0Cpmo3%2BqKtwDkIh37OSPoT4ydOJb%2B%2FFecbwykUw95L4YmBmoLaQ8bjyN2AbxYLfDoi1qpSScHcvPAGHEPv2JzujICJtrIe%2BQt1VOwJv%2BV1XMqIeTzrYE5r8WbNbbv9fHtF95E4RULZbEniEZI0CmF8tBk1yfbK8cNKS1BGuhUVFpTvpRA9tNKMg39%2Bh7viL7dFyX1V87fCyPjpLATkA%2B0Idv0DaO4hjed8977hnmnUkyVgn%2F3Y1lvlUQpu0D9DrcL5Uvv2DXkLe7DOsZ7xzL3jtW9UthSd3P3WfzbtyJFa2w7eSlxD5R1Ly3GjKsTYkKXGzM5YQmPPaU%2Fc47ISZyvUYjKEMlZCFK3sy%2Bds48vdnq1T06TT9tebkeXAnjc%2Fvyb4oRLeuGwlPtjV918PLoldeQm86p40aLjaKgJ3vRVE2Jhut82HCe1D00bw3tQmCkH%2F%2F8S%2BiDaQCzdtGg0%2BuBUAu%2FakfmqZCdytE2FLKO73%2FNBU5pRHDCE4AUNVt4AbUgSQX1oxJRYxl66GEXtjo6Qf8il7zTV89Swcgg7BotmtdPNuhSDyauTIH6dgrTfAvJLxKaX02kOGzTLp67FozbqJ9BEeaFEgykJhXs0iKmK8HdM2%2FiCMO%2FckPgvLqdQWFDGO9VG1kwounkvAY6pgFofnKFgQvJGSEGim%2FfYTT2t1YIelneKz61ir%2B1mD5%2FCkW3Kshth3dWdbMZ2VzvlHF%2FCIFdzrx8ziOwx7eJJ2yBal6TJLBHbyiHvWnlemOaCzZs%2FhFnR6Dgu6ikFx6qeKwfAGAvUIxuB8qXFxIeswav5DiwFhPjqDvLCe%2Fa8XCFpvVKg6IOPuGzUsxoXidDBVvOV1vxLP22Eti2pUKz8Tvywk1U7wmO&X-Amz-Signature=ae8cff7f4aa0db78203d6c3841e038fd30e01841af1e00e1c1064a7ca56782f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBC5UM35%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBw5luSHNBC95rHIauJvURqyTBx136rxGPWxqmURNI9DAiAdQ1rGKQ8z3s7pYyvfEKrpHLN8V8N7b0%2Bd0cQfFRXDAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXtqTN9uh0Cpmo3%2BqKtwDkIh37OSPoT4ydOJb%2B%2FFecbwykUw95L4YmBmoLaQ8bjyN2AbxYLfDoi1qpSScHcvPAGHEPv2JzujICJtrIe%2BQt1VOwJv%2BV1XMqIeTzrYE5r8WbNbbv9fHtF95E4RULZbEniEZI0CmF8tBk1yfbK8cNKS1BGuhUVFpTvpRA9tNKMg39%2Bh7viL7dFyX1V87fCyPjpLATkA%2B0Idv0DaO4hjed8977hnmnUkyVgn%2F3Y1lvlUQpu0D9DrcL5Uvv2DXkLe7DOsZ7xzL3jtW9UthSd3P3WfzbtyJFa2w7eSlxD5R1Ly3GjKsTYkKXGzM5YQmPPaU%2Fc47ISZyvUYjKEMlZCFK3sy%2Bds48vdnq1T06TT9tebkeXAnjc%2Fvyb4oRLeuGwlPtjV918PLoldeQm86p40aLjaKgJ3vRVE2Jhut82HCe1D00bw3tQmCkH%2F%2F8S%2BiDaQCzdtGg0%2BuBUAu%2FakfmqZCdytE2FLKO73%2FNBU5pRHDCE4AUNVt4AbUgSQX1oxJRYxl66GEXtjo6Qf8il7zTV89Swcgg7BotmtdPNuhSDyauTIH6dgrTfAvJLxKaX02kOGzTLp67FozbqJ9BEeaFEgykJhXs0iKmK8HdM2%2FiCMO%2FckPgvLqdQWFDGO9VG1kwounkvAY6pgFofnKFgQvJGSEGim%2FfYTT2t1YIelneKz61ir%2B1mD5%2FCkW3Kshth3dWdbMZ2VzvlHF%2FCIFdzrx8ziOwx7eJJ2yBal6TJLBHbyiHvWnlemOaCzZs%2FhFnR6Dgu6ikFx6qeKwfAGAvUIxuB8qXFxIeswav5DiwFhPjqDvLCe%2Fa8XCFpvVKg6IOPuGzUsxoXidDBVvOV1vxLP22Eti2pUKz8Tvywk1U7wmO&X-Amz-Signature=d9acec8991cb1e2faecf054f618cbf33d9dcb89253f4b35a0e90d5fa7fc36f89&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBC5UM35%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBw5luSHNBC95rHIauJvURqyTBx136rxGPWxqmURNI9DAiAdQ1rGKQ8z3s7pYyvfEKrpHLN8V8N7b0%2Bd0cQfFRXDAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXtqTN9uh0Cpmo3%2BqKtwDkIh37OSPoT4ydOJb%2B%2FFecbwykUw95L4YmBmoLaQ8bjyN2AbxYLfDoi1qpSScHcvPAGHEPv2JzujICJtrIe%2BQt1VOwJv%2BV1XMqIeTzrYE5r8WbNbbv9fHtF95E4RULZbEniEZI0CmF8tBk1yfbK8cNKS1BGuhUVFpTvpRA9tNKMg39%2Bh7viL7dFyX1V87fCyPjpLATkA%2B0Idv0DaO4hjed8977hnmnUkyVgn%2F3Y1lvlUQpu0D9DrcL5Uvv2DXkLe7DOsZ7xzL3jtW9UthSd3P3WfzbtyJFa2w7eSlxD5R1Ly3GjKsTYkKXGzM5YQmPPaU%2Fc47ISZyvUYjKEMlZCFK3sy%2Bds48vdnq1T06TT9tebkeXAnjc%2Fvyb4oRLeuGwlPtjV918PLoldeQm86p40aLjaKgJ3vRVE2Jhut82HCe1D00bw3tQmCkH%2F%2F8S%2BiDaQCzdtGg0%2BuBUAu%2FakfmqZCdytE2FLKO73%2FNBU5pRHDCE4AUNVt4AbUgSQX1oxJRYxl66GEXtjo6Qf8il7zTV89Swcgg7BotmtdPNuhSDyauTIH6dgrTfAvJLxKaX02kOGzTLp67FozbqJ9BEeaFEgykJhXs0iKmK8HdM2%2FiCMO%2FckPgvLqdQWFDGO9VG1kwounkvAY6pgFofnKFgQvJGSEGim%2FfYTT2t1YIelneKz61ir%2B1mD5%2FCkW3Kshth3dWdbMZ2VzvlHF%2FCIFdzrx8ziOwx7eJJ2yBal6TJLBHbyiHvWnlemOaCzZs%2FhFnR6Dgu6ikFx6qeKwfAGAvUIxuB8qXFxIeswav5DiwFhPjqDvLCe%2Fa8XCFpvVKg6IOPuGzUsxoXidDBVvOV1vxLP22Eti2pUKz8Tvywk1U7wmO&X-Amz-Signature=af5ad07e4a5c247bce2aa16bf5efc66a8b1f7d07d0413a3d2d3a407a3d7b0912&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBC5UM35%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBw5luSHNBC95rHIauJvURqyTBx136rxGPWxqmURNI9DAiAdQ1rGKQ8z3s7pYyvfEKrpHLN8V8N7b0%2Bd0cQfFRXDAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXtqTN9uh0Cpmo3%2BqKtwDkIh37OSPoT4ydOJb%2B%2FFecbwykUw95L4YmBmoLaQ8bjyN2AbxYLfDoi1qpSScHcvPAGHEPv2JzujICJtrIe%2BQt1VOwJv%2BV1XMqIeTzrYE5r8WbNbbv9fHtF95E4RULZbEniEZI0CmF8tBk1yfbK8cNKS1BGuhUVFpTvpRA9tNKMg39%2Bh7viL7dFyX1V87fCyPjpLATkA%2B0Idv0DaO4hjed8977hnmnUkyVgn%2F3Y1lvlUQpu0D9DrcL5Uvv2DXkLe7DOsZ7xzL3jtW9UthSd3P3WfzbtyJFa2w7eSlxD5R1Ly3GjKsTYkKXGzM5YQmPPaU%2Fc47ISZyvUYjKEMlZCFK3sy%2Bds48vdnq1T06TT9tebkeXAnjc%2Fvyb4oRLeuGwlPtjV918PLoldeQm86p40aLjaKgJ3vRVE2Jhut82HCe1D00bw3tQmCkH%2F%2F8S%2BiDaQCzdtGg0%2BuBUAu%2FakfmqZCdytE2FLKO73%2FNBU5pRHDCE4AUNVt4AbUgSQX1oxJRYxl66GEXtjo6Qf8il7zTV89Swcgg7BotmtdPNuhSDyauTIH6dgrTfAvJLxKaX02kOGzTLp67FozbqJ9BEeaFEgykJhXs0iKmK8HdM2%2FiCMO%2FckPgvLqdQWFDGO9VG1kwounkvAY6pgFofnKFgQvJGSEGim%2FfYTT2t1YIelneKz61ir%2B1mD5%2FCkW3Kshth3dWdbMZ2VzvlHF%2FCIFdzrx8ziOwx7eJJ2yBal6TJLBHbyiHvWnlemOaCzZs%2FhFnR6Dgu6ikFx6qeKwfAGAvUIxuB8qXFxIeswav5DiwFhPjqDvLCe%2Fa8XCFpvVKg6IOPuGzUsxoXidDBVvOV1vxLP22Eti2pUKz8Tvywk1U7wmO&X-Amz-Signature=da90013d2c908e388753d9c1f977c44d878f2169f2c7e5614eee3a19ecf35d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBC5UM35%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBw5luSHNBC95rHIauJvURqyTBx136rxGPWxqmURNI9DAiAdQ1rGKQ8z3s7pYyvfEKrpHLN8V8N7b0%2Bd0cQfFRXDAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXtqTN9uh0Cpmo3%2BqKtwDkIh37OSPoT4ydOJb%2B%2FFecbwykUw95L4YmBmoLaQ8bjyN2AbxYLfDoi1qpSScHcvPAGHEPv2JzujICJtrIe%2BQt1VOwJv%2BV1XMqIeTzrYE5r8WbNbbv9fHtF95E4RULZbEniEZI0CmF8tBk1yfbK8cNKS1BGuhUVFpTvpRA9tNKMg39%2Bh7viL7dFyX1V87fCyPjpLATkA%2B0Idv0DaO4hjed8977hnmnUkyVgn%2F3Y1lvlUQpu0D9DrcL5Uvv2DXkLe7DOsZ7xzL3jtW9UthSd3P3WfzbtyJFa2w7eSlxD5R1Ly3GjKsTYkKXGzM5YQmPPaU%2Fc47ISZyvUYjKEMlZCFK3sy%2Bds48vdnq1T06TT9tebkeXAnjc%2Fvyb4oRLeuGwlPtjV918PLoldeQm86p40aLjaKgJ3vRVE2Jhut82HCe1D00bw3tQmCkH%2F%2F8S%2BiDaQCzdtGg0%2BuBUAu%2FakfmqZCdytE2FLKO73%2FNBU5pRHDCE4AUNVt4AbUgSQX1oxJRYxl66GEXtjo6Qf8il7zTV89Swcgg7BotmtdPNuhSDyauTIH6dgrTfAvJLxKaX02kOGzTLp67FozbqJ9BEeaFEgykJhXs0iKmK8HdM2%2FiCMO%2FckPgvLqdQWFDGO9VG1kwounkvAY6pgFofnKFgQvJGSEGim%2FfYTT2t1YIelneKz61ir%2B1mD5%2FCkW3Kshth3dWdbMZ2VzvlHF%2FCIFdzrx8ziOwx7eJJ2yBal6TJLBHbyiHvWnlemOaCzZs%2FhFnR6Dgu6ikFx6qeKwfAGAvUIxuB8qXFxIeswav5DiwFhPjqDvLCe%2Fa8XCFpvVKg6IOPuGzUsxoXidDBVvOV1vxLP22Eti2pUKz8Tvywk1U7wmO&X-Amz-Signature=680fe048eb9a5c866468a3dff1080a33ebab10622df4437c67b8d495fa7efb16&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
