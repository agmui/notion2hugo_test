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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPQNUWTW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBdSLlmMjIqvIjwMbnd4uFYW8FNIGvZ%2BPWMP0GMfxm4iAiA6UXy4Xu2%2Bb4fLg0n%2Ft%2BFqjAWiYCSpmCt%2FuIHzPSx5UyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrIFccUGzGsyoz3TKtwDgNfRkNYFO1F1s6pbGocq6qMLQdTbFNWhelyfhlDew7d677DVISoJN5PGYzEcT8mLDEet847wEb5bNFXR%2BnTJ%2FSgXvN6IhqqrkPkMpNlq9tnuIG7bKtcJ8E6ahk4vN7rUG%2BHye1jMf2qN4Fsfp7JqZPaB8bnXX4JcDyUf2o1c0DxyaM150XSKsR6WGZlhPCJvGAHmBjemkq1FdC8oCfI2HPUPgdbr%2BXND3Iv1snYYkRmVgNN2kyEdhJ%2BDChZvYayz7HgAY3oSt83nrmFaBY4HQlsQlOf%2FM6hkkW%2B%2B3i5k24DlGdIWpHsCPtVWpiZiuqq5jaesxXMsQ3VfmOkR1x%2FlqppN7zVrAmAWlBsKPuE2aLPOI3aokPE6khPanJL2BEW8vfiuNYtPOgzdTOG8%2FPcCVU3MsQPjd%2BL88WMh%2FzM8ZmmTFTat%2FbLe3cmA9sZnR9OMf3YUfIRSw64fm1bLYfPIfvtZW5JNL2af7C9H5LeQuu90%2Fx7cSjTGJGkLIXDtUWsh6Jr9ir9zKMRO8olMkgEwy9AyIvvrYAtNZIl40RpzeE8RagWi0KTTUp3aBq4FZz1pfTUIW1r0y%2BQXebUrpbq%2BkjjU5n8zuJeyixTncTc4EK0%2F4cyhIOMkDLzNmogwv6TevwY6pgGAllzRscYnGoBrAZEB1t7sG2GjMspQEBe%2FE08kebTFWHHCseeJAKGmQSq0CrqGO7kniYNMwhJIYxBkt97nRujmQ3KdIUK7Onzi7z8iFuiwgIKrQcYYvamUN9M0fnuGhygxmMuvoWYxisyU3wQba6nGOsZQ1him6PsUSokHgr02ja6EV6XUq9HjyFTfoIRMgFJdgPkLgDPQs6xCMV7NwqHZHUiQAUOA&X-Amz-Signature=9536d918a383b58ee3dca40cd2631721aecf50ef99cd76ae8500a88fcfa41e09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPQNUWTW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBdSLlmMjIqvIjwMbnd4uFYW8FNIGvZ%2BPWMP0GMfxm4iAiA6UXy4Xu2%2Bb4fLg0n%2Ft%2BFqjAWiYCSpmCt%2FuIHzPSx5UyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrIFccUGzGsyoz3TKtwDgNfRkNYFO1F1s6pbGocq6qMLQdTbFNWhelyfhlDew7d677DVISoJN5PGYzEcT8mLDEet847wEb5bNFXR%2BnTJ%2FSgXvN6IhqqrkPkMpNlq9tnuIG7bKtcJ8E6ahk4vN7rUG%2BHye1jMf2qN4Fsfp7JqZPaB8bnXX4JcDyUf2o1c0DxyaM150XSKsR6WGZlhPCJvGAHmBjemkq1FdC8oCfI2HPUPgdbr%2BXND3Iv1snYYkRmVgNN2kyEdhJ%2BDChZvYayz7HgAY3oSt83nrmFaBY4HQlsQlOf%2FM6hkkW%2B%2B3i5k24DlGdIWpHsCPtVWpiZiuqq5jaesxXMsQ3VfmOkR1x%2FlqppN7zVrAmAWlBsKPuE2aLPOI3aokPE6khPanJL2BEW8vfiuNYtPOgzdTOG8%2FPcCVU3MsQPjd%2BL88WMh%2FzM8ZmmTFTat%2FbLe3cmA9sZnR9OMf3YUfIRSw64fm1bLYfPIfvtZW5JNL2af7C9H5LeQuu90%2Fx7cSjTGJGkLIXDtUWsh6Jr9ir9zKMRO8olMkgEwy9AyIvvrYAtNZIl40RpzeE8RagWi0KTTUp3aBq4FZz1pfTUIW1r0y%2BQXebUrpbq%2BkjjU5n8zuJeyixTncTc4EK0%2F4cyhIOMkDLzNmogwv6TevwY6pgGAllzRscYnGoBrAZEB1t7sG2GjMspQEBe%2FE08kebTFWHHCseeJAKGmQSq0CrqGO7kniYNMwhJIYxBkt97nRujmQ3KdIUK7Onzi7z8iFuiwgIKrQcYYvamUN9M0fnuGhygxmMuvoWYxisyU3wQba6nGOsZQ1him6PsUSokHgr02ja6EV6XUq9HjyFTfoIRMgFJdgPkLgDPQs6xCMV7NwqHZHUiQAUOA&X-Amz-Signature=cf5df8a4dec35215803748b003e6c3f5419b9d6ae634bdbbbf84cadfee3ebc3a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPQNUWTW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBdSLlmMjIqvIjwMbnd4uFYW8FNIGvZ%2BPWMP0GMfxm4iAiA6UXy4Xu2%2Bb4fLg0n%2Ft%2BFqjAWiYCSpmCt%2FuIHzPSx5UyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrIFccUGzGsyoz3TKtwDgNfRkNYFO1F1s6pbGocq6qMLQdTbFNWhelyfhlDew7d677DVISoJN5PGYzEcT8mLDEet847wEb5bNFXR%2BnTJ%2FSgXvN6IhqqrkPkMpNlq9tnuIG7bKtcJ8E6ahk4vN7rUG%2BHye1jMf2qN4Fsfp7JqZPaB8bnXX4JcDyUf2o1c0DxyaM150XSKsR6WGZlhPCJvGAHmBjemkq1FdC8oCfI2HPUPgdbr%2BXND3Iv1snYYkRmVgNN2kyEdhJ%2BDChZvYayz7HgAY3oSt83nrmFaBY4HQlsQlOf%2FM6hkkW%2B%2B3i5k24DlGdIWpHsCPtVWpiZiuqq5jaesxXMsQ3VfmOkR1x%2FlqppN7zVrAmAWlBsKPuE2aLPOI3aokPE6khPanJL2BEW8vfiuNYtPOgzdTOG8%2FPcCVU3MsQPjd%2BL88WMh%2FzM8ZmmTFTat%2FbLe3cmA9sZnR9OMf3YUfIRSw64fm1bLYfPIfvtZW5JNL2af7C9H5LeQuu90%2Fx7cSjTGJGkLIXDtUWsh6Jr9ir9zKMRO8olMkgEwy9AyIvvrYAtNZIl40RpzeE8RagWi0KTTUp3aBq4FZz1pfTUIW1r0y%2BQXebUrpbq%2BkjjU5n8zuJeyixTncTc4EK0%2F4cyhIOMkDLzNmogwv6TevwY6pgGAllzRscYnGoBrAZEB1t7sG2GjMspQEBe%2FE08kebTFWHHCseeJAKGmQSq0CrqGO7kniYNMwhJIYxBkt97nRujmQ3KdIUK7Onzi7z8iFuiwgIKrQcYYvamUN9M0fnuGhygxmMuvoWYxisyU3wQba6nGOsZQ1him6PsUSokHgr02ja6EV6XUq9HjyFTfoIRMgFJdgPkLgDPQs6xCMV7NwqHZHUiQAUOA&X-Amz-Signature=7215d03c908a568a9d8c06a034028409ca5289fe2d05b1f99ae645f6ed7ad6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPQNUWTW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBdSLlmMjIqvIjwMbnd4uFYW8FNIGvZ%2BPWMP0GMfxm4iAiA6UXy4Xu2%2Bb4fLg0n%2Ft%2BFqjAWiYCSpmCt%2FuIHzPSx5UyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrIFccUGzGsyoz3TKtwDgNfRkNYFO1F1s6pbGocq6qMLQdTbFNWhelyfhlDew7d677DVISoJN5PGYzEcT8mLDEet847wEb5bNFXR%2BnTJ%2FSgXvN6IhqqrkPkMpNlq9tnuIG7bKtcJ8E6ahk4vN7rUG%2BHye1jMf2qN4Fsfp7JqZPaB8bnXX4JcDyUf2o1c0DxyaM150XSKsR6WGZlhPCJvGAHmBjemkq1FdC8oCfI2HPUPgdbr%2BXND3Iv1snYYkRmVgNN2kyEdhJ%2BDChZvYayz7HgAY3oSt83nrmFaBY4HQlsQlOf%2FM6hkkW%2B%2B3i5k24DlGdIWpHsCPtVWpiZiuqq5jaesxXMsQ3VfmOkR1x%2FlqppN7zVrAmAWlBsKPuE2aLPOI3aokPE6khPanJL2BEW8vfiuNYtPOgzdTOG8%2FPcCVU3MsQPjd%2BL88WMh%2FzM8ZmmTFTat%2FbLe3cmA9sZnR9OMf3YUfIRSw64fm1bLYfPIfvtZW5JNL2af7C9H5LeQuu90%2Fx7cSjTGJGkLIXDtUWsh6Jr9ir9zKMRO8olMkgEwy9AyIvvrYAtNZIl40RpzeE8RagWi0KTTUp3aBq4FZz1pfTUIW1r0y%2BQXebUrpbq%2BkjjU5n8zuJeyixTncTc4EK0%2F4cyhIOMkDLzNmogwv6TevwY6pgGAllzRscYnGoBrAZEB1t7sG2GjMspQEBe%2FE08kebTFWHHCseeJAKGmQSq0CrqGO7kniYNMwhJIYxBkt97nRujmQ3KdIUK7Onzi7z8iFuiwgIKrQcYYvamUN9M0fnuGhygxmMuvoWYxisyU3wQba6nGOsZQ1him6PsUSokHgr02ja6EV6XUq9HjyFTfoIRMgFJdgPkLgDPQs6xCMV7NwqHZHUiQAUOA&X-Amz-Signature=36b0a4589afb8f8d088829d0d9df66cb1e77f31b2b2024aeba5d5bff547d8cab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPQNUWTW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBdSLlmMjIqvIjwMbnd4uFYW8FNIGvZ%2BPWMP0GMfxm4iAiA6UXy4Xu2%2Bb4fLg0n%2Ft%2BFqjAWiYCSpmCt%2FuIHzPSx5UyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrIFccUGzGsyoz3TKtwDgNfRkNYFO1F1s6pbGocq6qMLQdTbFNWhelyfhlDew7d677DVISoJN5PGYzEcT8mLDEet847wEb5bNFXR%2BnTJ%2FSgXvN6IhqqrkPkMpNlq9tnuIG7bKtcJ8E6ahk4vN7rUG%2BHye1jMf2qN4Fsfp7JqZPaB8bnXX4JcDyUf2o1c0DxyaM150XSKsR6WGZlhPCJvGAHmBjemkq1FdC8oCfI2HPUPgdbr%2BXND3Iv1snYYkRmVgNN2kyEdhJ%2BDChZvYayz7HgAY3oSt83nrmFaBY4HQlsQlOf%2FM6hkkW%2B%2B3i5k24DlGdIWpHsCPtVWpiZiuqq5jaesxXMsQ3VfmOkR1x%2FlqppN7zVrAmAWlBsKPuE2aLPOI3aokPE6khPanJL2BEW8vfiuNYtPOgzdTOG8%2FPcCVU3MsQPjd%2BL88WMh%2FzM8ZmmTFTat%2FbLe3cmA9sZnR9OMf3YUfIRSw64fm1bLYfPIfvtZW5JNL2af7C9H5LeQuu90%2Fx7cSjTGJGkLIXDtUWsh6Jr9ir9zKMRO8olMkgEwy9AyIvvrYAtNZIl40RpzeE8RagWi0KTTUp3aBq4FZz1pfTUIW1r0y%2BQXebUrpbq%2BkjjU5n8zuJeyixTncTc4EK0%2F4cyhIOMkDLzNmogwv6TevwY6pgGAllzRscYnGoBrAZEB1t7sG2GjMspQEBe%2FE08kebTFWHHCseeJAKGmQSq0CrqGO7kniYNMwhJIYxBkt97nRujmQ3KdIUK7Onzi7z8iFuiwgIKrQcYYvamUN9M0fnuGhygxmMuvoWYxisyU3wQba6nGOsZQ1him6PsUSokHgr02ja6EV6XUq9HjyFTfoIRMgFJdgPkLgDPQs6xCMV7NwqHZHUiQAUOA&X-Amz-Signature=9da3a9d6554575e1d636130f9d728f4ed312ab4bea5d971c0b3db712a3477930&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
