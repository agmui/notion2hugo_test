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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHTX6ZE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN52s4A%2Fite2Qo7aOyIK8irvl7MFIft2YqBvpn1EHgdAIhANoe9Ryd7CJTQYx8s6aR1Cd0COoYFo%2BqKihrNJfzFKAKKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPdLLaP7iBgmYyHHUq3AMGZTIK3vDSVuC8Lc%2FmmkI9RtedakYUeagFdLc%2BUB9Eli2LWxyNDYnSP5DPL4RwF%2FhXYIoir8sgNqU7upLVML7o5C%2BUW%2BwDaUMkUN177oYvUtG3LHsEFiv7DkIS7yfDvPGYVIUkDdZreGJzAd3C6cHUI2CANE5XODF0vgUhDgXmvpaK83xqwjlK1K%2BZkkVYLTzJh4EAG%2BuuYHuZNNkp0tM5xhhQ10xG6jyK880vsQs941jgXApcfgIYPZugwtoZEIOF2cBL%2FqOk62NUZTL283pprly9hh5uT5itv%2Fd0iCNixQLLc4znVdIIUTbv10KdrRUAHhaUYALFK0aWeq%2F1DEvz7ELPvNUTcBtzS2e3GRzA%2FXxPppUVXtgnKSPSMbg5PlwKFPyrVACIpJNBf2bXypwy1VOUTQWuXAUe%2FwYJFW%2BrUufxVElh3yrXIGKGJ349ySB%2BDovDBG%2BMI6MBBXHCIpEWOO1fvowURKaFslRwSy1tdFvcvtBrrXveN7gSJnw%2FQBOAf6XO4e%2BQHTD3NhP5TE78YcxcHdmUmTDnfFxUgeUwSPhrVv09U9vg5gSbo9JLitqn280RxRXYm3N1eE49v717qnxi8PHdsAhoNx27fYh7W%2FCDfomu6POiYPH5rTDazcDDBjqkAdMRSoW%2Fs48Dvq6aBFB8FGH8%2BDtsiUy%2BWd7aWfV4wfvJjC65lbjYOGgRrs9r64%2BjlkVs0HBlbaScaJgnmAB3NTnMzHAZZb6MCjHjlOhuxfcEeqFBhDI%2BwJoNvz0GpTDrrEf%2FzdDHpODGyt69hmqXIgJK%2FmEiGQT6GNW4LQNF12v0ZCUh3ZhVSIVU8P%2BbZtM%2F6gMVd8vaVg1M7OLHZ0fb8VMmb7qh&X-Amz-Signature=84a5933d2afda788d1cb1e3651517e10edb363a39a6f7bfcb2557037f8c4b45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHTX6ZE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN52s4A%2Fite2Qo7aOyIK8irvl7MFIft2YqBvpn1EHgdAIhANoe9Ryd7CJTQYx8s6aR1Cd0COoYFo%2BqKihrNJfzFKAKKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPdLLaP7iBgmYyHHUq3AMGZTIK3vDSVuC8Lc%2FmmkI9RtedakYUeagFdLc%2BUB9Eli2LWxyNDYnSP5DPL4RwF%2FhXYIoir8sgNqU7upLVML7o5C%2BUW%2BwDaUMkUN177oYvUtG3LHsEFiv7DkIS7yfDvPGYVIUkDdZreGJzAd3C6cHUI2CANE5XODF0vgUhDgXmvpaK83xqwjlK1K%2BZkkVYLTzJh4EAG%2BuuYHuZNNkp0tM5xhhQ10xG6jyK880vsQs941jgXApcfgIYPZugwtoZEIOF2cBL%2FqOk62NUZTL283pprly9hh5uT5itv%2Fd0iCNixQLLc4znVdIIUTbv10KdrRUAHhaUYALFK0aWeq%2F1DEvz7ELPvNUTcBtzS2e3GRzA%2FXxPppUVXtgnKSPSMbg5PlwKFPyrVACIpJNBf2bXypwy1VOUTQWuXAUe%2FwYJFW%2BrUufxVElh3yrXIGKGJ349ySB%2BDovDBG%2BMI6MBBXHCIpEWOO1fvowURKaFslRwSy1tdFvcvtBrrXveN7gSJnw%2FQBOAf6XO4e%2BQHTD3NhP5TE78YcxcHdmUmTDnfFxUgeUwSPhrVv09U9vg5gSbo9JLitqn280RxRXYm3N1eE49v717qnxi8PHdsAhoNx27fYh7W%2FCDfomu6POiYPH5rTDazcDDBjqkAdMRSoW%2Fs48Dvq6aBFB8FGH8%2BDtsiUy%2BWd7aWfV4wfvJjC65lbjYOGgRrs9r64%2BjlkVs0HBlbaScaJgnmAB3NTnMzHAZZb6MCjHjlOhuxfcEeqFBhDI%2BwJoNvz0GpTDrrEf%2FzdDHpODGyt69hmqXIgJK%2FmEiGQT6GNW4LQNF12v0ZCUh3ZhVSIVU8P%2BbZtM%2F6gMVd8vaVg1M7OLHZ0fb8VMmb7qh&X-Amz-Signature=d5c6ea19e83bc5fe67c4d0bcf0f00f9e45419be111717553565f061c20f7f262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHTX6ZE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN52s4A%2Fite2Qo7aOyIK8irvl7MFIft2YqBvpn1EHgdAIhANoe9Ryd7CJTQYx8s6aR1Cd0COoYFo%2BqKihrNJfzFKAKKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPdLLaP7iBgmYyHHUq3AMGZTIK3vDSVuC8Lc%2FmmkI9RtedakYUeagFdLc%2BUB9Eli2LWxyNDYnSP5DPL4RwF%2FhXYIoir8sgNqU7upLVML7o5C%2BUW%2BwDaUMkUN177oYvUtG3LHsEFiv7DkIS7yfDvPGYVIUkDdZreGJzAd3C6cHUI2CANE5XODF0vgUhDgXmvpaK83xqwjlK1K%2BZkkVYLTzJh4EAG%2BuuYHuZNNkp0tM5xhhQ10xG6jyK880vsQs941jgXApcfgIYPZugwtoZEIOF2cBL%2FqOk62NUZTL283pprly9hh5uT5itv%2Fd0iCNixQLLc4znVdIIUTbv10KdrRUAHhaUYALFK0aWeq%2F1DEvz7ELPvNUTcBtzS2e3GRzA%2FXxPppUVXtgnKSPSMbg5PlwKFPyrVACIpJNBf2bXypwy1VOUTQWuXAUe%2FwYJFW%2BrUufxVElh3yrXIGKGJ349ySB%2BDovDBG%2BMI6MBBXHCIpEWOO1fvowURKaFslRwSy1tdFvcvtBrrXveN7gSJnw%2FQBOAf6XO4e%2BQHTD3NhP5TE78YcxcHdmUmTDnfFxUgeUwSPhrVv09U9vg5gSbo9JLitqn280RxRXYm3N1eE49v717qnxi8PHdsAhoNx27fYh7W%2FCDfomu6POiYPH5rTDazcDDBjqkAdMRSoW%2Fs48Dvq6aBFB8FGH8%2BDtsiUy%2BWd7aWfV4wfvJjC65lbjYOGgRrs9r64%2BjlkVs0HBlbaScaJgnmAB3NTnMzHAZZb6MCjHjlOhuxfcEeqFBhDI%2BwJoNvz0GpTDrrEf%2FzdDHpODGyt69hmqXIgJK%2FmEiGQT6GNW4LQNF12v0ZCUh3ZhVSIVU8P%2BbZtM%2F6gMVd8vaVg1M7OLHZ0fb8VMmb7qh&X-Amz-Signature=19d677c46d816a0e678be32c2c2010a9e6f877bc35e60d291f8571712e32310f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHTX6ZE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN52s4A%2Fite2Qo7aOyIK8irvl7MFIft2YqBvpn1EHgdAIhANoe9Ryd7CJTQYx8s6aR1Cd0COoYFo%2BqKihrNJfzFKAKKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPdLLaP7iBgmYyHHUq3AMGZTIK3vDSVuC8Lc%2FmmkI9RtedakYUeagFdLc%2BUB9Eli2LWxyNDYnSP5DPL4RwF%2FhXYIoir8sgNqU7upLVML7o5C%2BUW%2BwDaUMkUN177oYvUtG3LHsEFiv7DkIS7yfDvPGYVIUkDdZreGJzAd3C6cHUI2CANE5XODF0vgUhDgXmvpaK83xqwjlK1K%2BZkkVYLTzJh4EAG%2BuuYHuZNNkp0tM5xhhQ10xG6jyK880vsQs941jgXApcfgIYPZugwtoZEIOF2cBL%2FqOk62NUZTL283pprly9hh5uT5itv%2Fd0iCNixQLLc4znVdIIUTbv10KdrRUAHhaUYALFK0aWeq%2F1DEvz7ELPvNUTcBtzS2e3GRzA%2FXxPppUVXtgnKSPSMbg5PlwKFPyrVACIpJNBf2bXypwy1VOUTQWuXAUe%2FwYJFW%2BrUufxVElh3yrXIGKGJ349ySB%2BDovDBG%2BMI6MBBXHCIpEWOO1fvowURKaFslRwSy1tdFvcvtBrrXveN7gSJnw%2FQBOAf6XO4e%2BQHTD3NhP5TE78YcxcHdmUmTDnfFxUgeUwSPhrVv09U9vg5gSbo9JLitqn280RxRXYm3N1eE49v717qnxi8PHdsAhoNx27fYh7W%2FCDfomu6POiYPH5rTDazcDDBjqkAdMRSoW%2Fs48Dvq6aBFB8FGH8%2BDtsiUy%2BWd7aWfV4wfvJjC65lbjYOGgRrs9r64%2BjlkVs0HBlbaScaJgnmAB3NTnMzHAZZb6MCjHjlOhuxfcEeqFBhDI%2BwJoNvz0GpTDrrEf%2FzdDHpODGyt69hmqXIgJK%2FmEiGQT6GNW4LQNF12v0ZCUh3ZhVSIVU8P%2BbZtM%2F6gMVd8vaVg1M7OLHZ0fb8VMmb7qh&X-Amz-Signature=bca2af96382b4f89732348b8a089a4ccb8f547b905694a1b93fd18286e6721a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHTX6ZE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN52s4A%2Fite2Qo7aOyIK8irvl7MFIft2YqBvpn1EHgdAIhANoe9Ryd7CJTQYx8s6aR1Cd0COoYFo%2BqKihrNJfzFKAKKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPdLLaP7iBgmYyHHUq3AMGZTIK3vDSVuC8Lc%2FmmkI9RtedakYUeagFdLc%2BUB9Eli2LWxyNDYnSP5DPL4RwF%2FhXYIoir8sgNqU7upLVML7o5C%2BUW%2BwDaUMkUN177oYvUtG3LHsEFiv7DkIS7yfDvPGYVIUkDdZreGJzAd3C6cHUI2CANE5XODF0vgUhDgXmvpaK83xqwjlK1K%2BZkkVYLTzJh4EAG%2BuuYHuZNNkp0tM5xhhQ10xG6jyK880vsQs941jgXApcfgIYPZugwtoZEIOF2cBL%2FqOk62NUZTL283pprly9hh5uT5itv%2Fd0iCNixQLLc4znVdIIUTbv10KdrRUAHhaUYALFK0aWeq%2F1DEvz7ELPvNUTcBtzS2e3GRzA%2FXxPppUVXtgnKSPSMbg5PlwKFPyrVACIpJNBf2bXypwy1VOUTQWuXAUe%2FwYJFW%2BrUufxVElh3yrXIGKGJ349ySB%2BDovDBG%2BMI6MBBXHCIpEWOO1fvowURKaFslRwSy1tdFvcvtBrrXveN7gSJnw%2FQBOAf6XO4e%2BQHTD3NhP5TE78YcxcHdmUmTDnfFxUgeUwSPhrVv09U9vg5gSbo9JLitqn280RxRXYm3N1eE49v717qnxi8PHdsAhoNx27fYh7W%2FCDfomu6POiYPH5rTDazcDDBjqkAdMRSoW%2Fs48Dvq6aBFB8FGH8%2BDtsiUy%2BWd7aWfV4wfvJjC65lbjYOGgRrs9r64%2BjlkVs0HBlbaScaJgnmAB3NTnMzHAZZb6MCjHjlOhuxfcEeqFBhDI%2BwJoNvz0GpTDrrEf%2FzdDHpODGyt69hmqXIgJK%2FmEiGQT6GNW4LQNF12v0ZCUh3ZhVSIVU8P%2BbZtM%2F6gMVd8vaVg1M7OLHZ0fb8VMmb7qh&X-Amz-Signature=9bb1a24d18a505b7867cee719b165e0e1f9ad34d921e667d0e78b6b75bdeec49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
