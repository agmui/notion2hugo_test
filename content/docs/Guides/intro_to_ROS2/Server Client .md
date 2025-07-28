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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBZDPC6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpZ5Np6Qi0APSE1gcSdsmkxYMIwKNhV7DQ9H83Y3S%2F2AiB2Wmod9JazTMNJ2qGuWqXGfNNPaNKDHTsUBwOAa%2FBZwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9SWI7tUhw5zaPDe5KtwD7NfmrO%2FcMJNtCuuyG3lrcrfXNU8bSr6PTA9jmbHy8ncM45xqcjViakEvnQLt38w6AyMRBgKAvT71UzDbVF2tKyJRpzF7nr8hLHwqaCl2DCNxOneF1wjS5SVFs2k2o3LPnhNDULHJJuiNItsLHv7EcY%2Byz9JWVq65533Nvl%2BFd7awwozPN8SP8y9Z6IzZAov56Axo0Boc29pMXgsGuw9Gx7JZhAjNbpn%2FeUSbHGaOGXFbVZPN%2BERozVXqCQTWo04aDcb0NoVXmIj%2BO3WYAFlg9Ub5OaAKHBZMG1GJNhyREcxVKGS5BIjpBegOEjkV%2FA3TKW3UnYNbjz7XSZrF%2BDuFsCODwBhDpvEv5qoaB5UTdVWJ9F6HDuaTKK55xKkeFz0NFh7yn2p5XMO7DAUQ3vB89TMIlAihdSl14ZzImZ%2BBgODbx1PFGuXA1MEy6hu1kvUQqW5OH5YcheFssCZ5SneSRnAJs7WWu%2BoytDVp4mqFZ8IjPqcWgkXirM6jjICSoJwjNnrvpDqfjwKFZ5KCGrwRsg1gNnceAzQ8Qg2PLQT5m6PdC4ptXPe1JiwdLaukp2%2BCz2TjnN99RzDU9YH2F194yEWau1%2FYMKCQXtQ4OdV0DJmcmI%2F3Sv%2B08uqWDDQwv42dxAY6pgGHUFiE59qs9eEx2%2BgQUYWCOCp%2Bjq%2FLrSj9OK0jydY%2FB6azn8XuaPoi0te4E%2BWoerva7ykNI9CmHXYGg8LcwfAZjJllR9LC6zim5wySN9AdWhaKc6kNeXPRqjXs6xfXbkiKX4fuIOxks2Wmf4piS0bEJwTNv881wLTI1mZtjzLRr0HfFuauG%2BfIhuVQr1BvH3yFZXn6vfhTXPvCh0NWpDwGlr%2FGnWJV&X-Amz-Signature=b4c6ddbe018c8a9b0088c7672ba7438171ad7ad186fb0cce7eaf9bfc60c56e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBZDPC6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpZ5Np6Qi0APSE1gcSdsmkxYMIwKNhV7DQ9H83Y3S%2F2AiB2Wmod9JazTMNJ2qGuWqXGfNNPaNKDHTsUBwOAa%2FBZwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9SWI7tUhw5zaPDe5KtwD7NfmrO%2FcMJNtCuuyG3lrcrfXNU8bSr6PTA9jmbHy8ncM45xqcjViakEvnQLt38w6AyMRBgKAvT71UzDbVF2tKyJRpzF7nr8hLHwqaCl2DCNxOneF1wjS5SVFs2k2o3LPnhNDULHJJuiNItsLHv7EcY%2Byz9JWVq65533Nvl%2BFd7awwozPN8SP8y9Z6IzZAov56Axo0Boc29pMXgsGuw9Gx7JZhAjNbpn%2FeUSbHGaOGXFbVZPN%2BERozVXqCQTWo04aDcb0NoVXmIj%2BO3WYAFlg9Ub5OaAKHBZMG1GJNhyREcxVKGS5BIjpBegOEjkV%2FA3TKW3UnYNbjz7XSZrF%2BDuFsCODwBhDpvEv5qoaB5UTdVWJ9F6HDuaTKK55xKkeFz0NFh7yn2p5XMO7DAUQ3vB89TMIlAihdSl14ZzImZ%2BBgODbx1PFGuXA1MEy6hu1kvUQqW5OH5YcheFssCZ5SneSRnAJs7WWu%2BoytDVp4mqFZ8IjPqcWgkXirM6jjICSoJwjNnrvpDqfjwKFZ5KCGrwRsg1gNnceAzQ8Qg2PLQT5m6PdC4ptXPe1JiwdLaukp2%2BCz2TjnN99RzDU9YH2F194yEWau1%2FYMKCQXtQ4OdV0DJmcmI%2F3Sv%2B08uqWDDQwv42dxAY6pgGHUFiE59qs9eEx2%2BgQUYWCOCp%2Bjq%2FLrSj9OK0jydY%2FB6azn8XuaPoi0te4E%2BWoerva7ykNI9CmHXYGg8LcwfAZjJllR9LC6zim5wySN9AdWhaKc6kNeXPRqjXs6xfXbkiKX4fuIOxks2Wmf4piS0bEJwTNv881wLTI1mZtjzLRr0HfFuauG%2BfIhuVQr1BvH3yFZXn6vfhTXPvCh0NWpDwGlr%2FGnWJV&X-Amz-Signature=ddf4a5c8dfd965b9d9d3d00f756950e9e983c2a3cf002c514c33d6904cfd56cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBZDPC6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpZ5Np6Qi0APSE1gcSdsmkxYMIwKNhV7DQ9H83Y3S%2F2AiB2Wmod9JazTMNJ2qGuWqXGfNNPaNKDHTsUBwOAa%2FBZwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9SWI7tUhw5zaPDe5KtwD7NfmrO%2FcMJNtCuuyG3lrcrfXNU8bSr6PTA9jmbHy8ncM45xqcjViakEvnQLt38w6AyMRBgKAvT71UzDbVF2tKyJRpzF7nr8hLHwqaCl2DCNxOneF1wjS5SVFs2k2o3LPnhNDULHJJuiNItsLHv7EcY%2Byz9JWVq65533Nvl%2BFd7awwozPN8SP8y9Z6IzZAov56Axo0Boc29pMXgsGuw9Gx7JZhAjNbpn%2FeUSbHGaOGXFbVZPN%2BERozVXqCQTWo04aDcb0NoVXmIj%2BO3WYAFlg9Ub5OaAKHBZMG1GJNhyREcxVKGS5BIjpBegOEjkV%2FA3TKW3UnYNbjz7XSZrF%2BDuFsCODwBhDpvEv5qoaB5UTdVWJ9F6HDuaTKK55xKkeFz0NFh7yn2p5XMO7DAUQ3vB89TMIlAihdSl14ZzImZ%2BBgODbx1PFGuXA1MEy6hu1kvUQqW5OH5YcheFssCZ5SneSRnAJs7WWu%2BoytDVp4mqFZ8IjPqcWgkXirM6jjICSoJwjNnrvpDqfjwKFZ5KCGrwRsg1gNnceAzQ8Qg2PLQT5m6PdC4ptXPe1JiwdLaukp2%2BCz2TjnN99RzDU9YH2F194yEWau1%2FYMKCQXtQ4OdV0DJmcmI%2F3Sv%2B08uqWDDQwv42dxAY6pgGHUFiE59qs9eEx2%2BgQUYWCOCp%2Bjq%2FLrSj9OK0jydY%2FB6azn8XuaPoi0te4E%2BWoerva7ykNI9CmHXYGg8LcwfAZjJllR9LC6zim5wySN9AdWhaKc6kNeXPRqjXs6xfXbkiKX4fuIOxks2Wmf4piS0bEJwTNv881wLTI1mZtjzLRr0HfFuauG%2BfIhuVQr1BvH3yFZXn6vfhTXPvCh0NWpDwGlr%2FGnWJV&X-Amz-Signature=d554686c4b1202fa23cae62fd473ba68a7961a716340af5fec0d7a17017d309c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBZDPC6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpZ5Np6Qi0APSE1gcSdsmkxYMIwKNhV7DQ9H83Y3S%2F2AiB2Wmod9JazTMNJ2qGuWqXGfNNPaNKDHTsUBwOAa%2FBZwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9SWI7tUhw5zaPDe5KtwD7NfmrO%2FcMJNtCuuyG3lrcrfXNU8bSr6PTA9jmbHy8ncM45xqcjViakEvnQLt38w6AyMRBgKAvT71UzDbVF2tKyJRpzF7nr8hLHwqaCl2DCNxOneF1wjS5SVFs2k2o3LPnhNDULHJJuiNItsLHv7EcY%2Byz9JWVq65533Nvl%2BFd7awwozPN8SP8y9Z6IzZAov56Axo0Boc29pMXgsGuw9Gx7JZhAjNbpn%2FeUSbHGaOGXFbVZPN%2BERozVXqCQTWo04aDcb0NoVXmIj%2BO3WYAFlg9Ub5OaAKHBZMG1GJNhyREcxVKGS5BIjpBegOEjkV%2FA3TKW3UnYNbjz7XSZrF%2BDuFsCODwBhDpvEv5qoaB5UTdVWJ9F6HDuaTKK55xKkeFz0NFh7yn2p5XMO7DAUQ3vB89TMIlAihdSl14ZzImZ%2BBgODbx1PFGuXA1MEy6hu1kvUQqW5OH5YcheFssCZ5SneSRnAJs7WWu%2BoytDVp4mqFZ8IjPqcWgkXirM6jjICSoJwjNnrvpDqfjwKFZ5KCGrwRsg1gNnceAzQ8Qg2PLQT5m6PdC4ptXPe1JiwdLaukp2%2BCz2TjnN99RzDU9YH2F194yEWau1%2FYMKCQXtQ4OdV0DJmcmI%2F3Sv%2B08uqWDDQwv42dxAY6pgGHUFiE59qs9eEx2%2BgQUYWCOCp%2Bjq%2FLrSj9OK0jydY%2FB6azn8XuaPoi0te4E%2BWoerva7ykNI9CmHXYGg8LcwfAZjJllR9LC6zim5wySN9AdWhaKc6kNeXPRqjXs6xfXbkiKX4fuIOxks2Wmf4piS0bEJwTNv881wLTI1mZtjzLRr0HfFuauG%2BfIhuVQr1BvH3yFZXn6vfhTXPvCh0NWpDwGlr%2FGnWJV&X-Amz-Signature=2138abbc09a7b97c8f5a3716070530250a2507d8cedcdd54a2d946ddf87cc462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBZDPC6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpZ5Np6Qi0APSE1gcSdsmkxYMIwKNhV7DQ9H83Y3S%2F2AiB2Wmod9JazTMNJ2qGuWqXGfNNPaNKDHTsUBwOAa%2FBZwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9SWI7tUhw5zaPDe5KtwD7NfmrO%2FcMJNtCuuyG3lrcrfXNU8bSr6PTA9jmbHy8ncM45xqcjViakEvnQLt38w6AyMRBgKAvT71UzDbVF2tKyJRpzF7nr8hLHwqaCl2DCNxOneF1wjS5SVFs2k2o3LPnhNDULHJJuiNItsLHv7EcY%2Byz9JWVq65533Nvl%2BFd7awwozPN8SP8y9Z6IzZAov56Axo0Boc29pMXgsGuw9Gx7JZhAjNbpn%2FeUSbHGaOGXFbVZPN%2BERozVXqCQTWo04aDcb0NoVXmIj%2BO3WYAFlg9Ub5OaAKHBZMG1GJNhyREcxVKGS5BIjpBegOEjkV%2FA3TKW3UnYNbjz7XSZrF%2BDuFsCODwBhDpvEv5qoaB5UTdVWJ9F6HDuaTKK55xKkeFz0NFh7yn2p5XMO7DAUQ3vB89TMIlAihdSl14ZzImZ%2BBgODbx1PFGuXA1MEy6hu1kvUQqW5OH5YcheFssCZ5SneSRnAJs7WWu%2BoytDVp4mqFZ8IjPqcWgkXirM6jjICSoJwjNnrvpDqfjwKFZ5KCGrwRsg1gNnceAzQ8Qg2PLQT5m6PdC4ptXPe1JiwdLaukp2%2BCz2TjnN99RzDU9YH2F194yEWau1%2FYMKCQXtQ4OdV0DJmcmI%2F3Sv%2B08uqWDDQwv42dxAY6pgGHUFiE59qs9eEx2%2BgQUYWCOCp%2Bjq%2FLrSj9OK0jydY%2FB6azn8XuaPoi0te4E%2BWoerva7ykNI9CmHXYGg8LcwfAZjJllR9LC6zim5wySN9AdWhaKc6kNeXPRqjXs6xfXbkiKX4fuIOxks2Wmf4piS0bEJwTNv881wLTI1mZtjzLRr0HfFuauG%2BfIhuVQr1BvH3yFZXn6vfhTXPvCh0NWpDwGlr%2FGnWJV&X-Amz-Signature=9bc93cbb5403d743b860232d2bd183766c6b692688621128d8480cf0c863bd5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
