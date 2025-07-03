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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6YBJFK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCCovOACNoMSUJNNUSROlg3j%2BXsle%2BVwkTcamfs%2Bnhp1QIgZzyr294WrF3C1UsmBv73OqjrUk%2B%2BQCOp%2FiZjIKFYuJQq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMS8l17iT3Ss3%2BmYnCrcA82lmu0EvJ5UY3tErflhzq2e3u9oJwU2C6lBz%2BoSJafTqcqFxRiE1a7lViKQbu8d0t%2F76a4iX2u%2FePgL0a1LrQoxm3kg2Xz6ChnE6d5Ob8MGdIwTCXu1N3BXT2JvNmpaoauYYSP1208omG4Dkgu6RtCq7j89w7I2veqPwsdsV7vZIEm2LWQK7a9AjQfnJBd9klcBf4bMNmCWpggwdkyeHL%2B%2BFfWtn%2F0K1pAGfxmfJoLOU0p39PjICN7iWGMgb8Mj24Yi9s8yx2g9hw441iIL0KGl38Cf6yXq3i9afS%2F2eRTUqLGr%2BIa3kIe%2FoumEGnfpb9LdRTiO0MewSStR0RSjKw7EO2jH21fVkxebpR3jib8kEsLyKacdryzzFQH54pAjUcMElouBhbUANft5Jk7kW5P%2FOxLbqdEakdMaD%2BYzc0V%2FfYdpBmyloX3d9d%2FEwt4cbRhVLSOUPFNTHIifRkYc6S0ZHCDsYk1TS3A%2FuqUttPE9EXg%2F37l%2FAx7ZAfrX3aN1RHGRCQ6WATbSTUyzPBRrL738q4w8WXs665aXiOjsByi6p17uN36txFedLMNXhkmXO0z%2BDE57XOiKuCryeoLonLKBnQS7AR94ICx%2BbgfEbxS0HA1GJK7rf%2F1UL9noMNe7m8MGOqUBJteHwTTvIRO8zwnqB%2Fs0DX4ntC4l0mZHeq35Mw1QENxcNZQ1icAp1ewSGbxyCtOfSU0Z9TBdHVpa6nQy4g%2F9kx6TgQ3lBOlM6sfq8P1ONG4kDxdDAeFMLgMFhIwOHwvZIvvVmLAG6RacSaR8sM5SIVHzuYwkghMeCIFIE0dhjM4L0dmTzJ8TCm%2Fy6blrg99tkmRlJs2hpvBoimdrvXeWWrmyE88y&X-Amz-Signature=71313d61f0f1e45af030e9740d321ce410edb86c4b3722d17562417a3d268d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6YBJFK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCCovOACNoMSUJNNUSROlg3j%2BXsle%2BVwkTcamfs%2Bnhp1QIgZzyr294WrF3C1UsmBv73OqjrUk%2B%2BQCOp%2FiZjIKFYuJQq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMS8l17iT3Ss3%2BmYnCrcA82lmu0EvJ5UY3tErflhzq2e3u9oJwU2C6lBz%2BoSJafTqcqFxRiE1a7lViKQbu8d0t%2F76a4iX2u%2FePgL0a1LrQoxm3kg2Xz6ChnE6d5Ob8MGdIwTCXu1N3BXT2JvNmpaoauYYSP1208omG4Dkgu6RtCq7j89w7I2veqPwsdsV7vZIEm2LWQK7a9AjQfnJBd9klcBf4bMNmCWpggwdkyeHL%2B%2BFfWtn%2F0K1pAGfxmfJoLOU0p39PjICN7iWGMgb8Mj24Yi9s8yx2g9hw441iIL0KGl38Cf6yXq3i9afS%2F2eRTUqLGr%2BIa3kIe%2FoumEGnfpb9LdRTiO0MewSStR0RSjKw7EO2jH21fVkxebpR3jib8kEsLyKacdryzzFQH54pAjUcMElouBhbUANft5Jk7kW5P%2FOxLbqdEakdMaD%2BYzc0V%2FfYdpBmyloX3d9d%2FEwt4cbRhVLSOUPFNTHIifRkYc6S0ZHCDsYk1TS3A%2FuqUttPE9EXg%2F37l%2FAx7ZAfrX3aN1RHGRCQ6WATbSTUyzPBRrL738q4w8WXs665aXiOjsByi6p17uN36txFedLMNXhkmXO0z%2BDE57XOiKuCryeoLonLKBnQS7AR94ICx%2BbgfEbxS0HA1GJK7rf%2F1UL9noMNe7m8MGOqUBJteHwTTvIRO8zwnqB%2Fs0DX4ntC4l0mZHeq35Mw1QENxcNZQ1icAp1ewSGbxyCtOfSU0Z9TBdHVpa6nQy4g%2F9kx6TgQ3lBOlM6sfq8P1ONG4kDxdDAeFMLgMFhIwOHwvZIvvVmLAG6RacSaR8sM5SIVHzuYwkghMeCIFIE0dhjM4L0dmTzJ8TCm%2Fy6blrg99tkmRlJs2hpvBoimdrvXeWWrmyE88y&X-Amz-Signature=68f19ad9573e0e3eb292ec906b1d1c493548db3a493c380b376b652fa6a76eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6YBJFK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCCovOACNoMSUJNNUSROlg3j%2BXsle%2BVwkTcamfs%2Bnhp1QIgZzyr294WrF3C1UsmBv73OqjrUk%2B%2BQCOp%2FiZjIKFYuJQq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMS8l17iT3Ss3%2BmYnCrcA82lmu0EvJ5UY3tErflhzq2e3u9oJwU2C6lBz%2BoSJafTqcqFxRiE1a7lViKQbu8d0t%2F76a4iX2u%2FePgL0a1LrQoxm3kg2Xz6ChnE6d5Ob8MGdIwTCXu1N3BXT2JvNmpaoauYYSP1208omG4Dkgu6RtCq7j89w7I2veqPwsdsV7vZIEm2LWQK7a9AjQfnJBd9klcBf4bMNmCWpggwdkyeHL%2B%2BFfWtn%2F0K1pAGfxmfJoLOU0p39PjICN7iWGMgb8Mj24Yi9s8yx2g9hw441iIL0KGl38Cf6yXq3i9afS%2F2eRTUqLGr%2BIa3kIe%2FoumEGnfpb9LdRTiO0MewSStR0RSjKw7EO2jH21fVkxebpR3jib8kEsLyKacdryzzFQH54pAjUcMElouBhbUANft5Jk7kW5P%2FOxLbqdEakdMaD%2BYzc0V%2FfYdpBmyloX3d9d%2FEwt4cbRhVLSOUPFNTHIifRkYc6S0ZHCDsYk1TS3A%2FuqUttPE9EXg%2F37l%2FAx7ZAfrX3aN1RHGRCQ6WATbSTUyzPBRrL738q4w8WXs665aXiOjsByi6p17uN36txFedLMNXhkmXO0z%2BDE57XOiKuCryeoLonLKBnQS7AR94ICx%2BbgfEbxS0HA1GJK7rf%2F1UL9noMNe7m8MGOqUBJteHwTTvIRO8zwnqB%2Fs0DX4ntC4l0mZHeq35Mw1QENxcNZQ1icAp1ewSGbxyCtOfSU0Z9TBdHVpa6nQy4g%2F9kx6TgQ3lBOlM6sfq8P1ONG4kDxdDAeFMLgMFhIwOHwvZIvvVmLAG6RacSaR8sM5SIVHzuYwkghMeCIFIE0dhjM4L0dmTzJ8TCm%2Fy6blrg99tkmRlJs2hpvBoimdrvXeWWrmyE88y&X-Amz-Signature=e69526141a6c54d5ac21c179af9b59ff9d40a92058a73343fec3862e92579ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6YBJFK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCCovOACNoMSUJNNUSROlg3j%2BXsle%2BVwkTcamfs%2Bnhp1QIgZzyr294WrF3C1UsmBv73OqjrUk%2B%2BQCOp%2FiZjIKFYuJQq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMS8l17iT3Ss3%2BmYnCrcA82lmu0EvJ5UY3tErflhzq2e3u9oJwU2C6lBz%2BoSJafTqcqFxRiE1a7lViKQbu8d0t%2F76a4iX2u%2FePgL0a1LrQoxm3kg2Xz6ChnE6d5Ob8MGdIwTCXu1N3BXT2JvNmpaoauYYSP1208omG4Dkgu6RtCq7j89w7I2veqPwsdsV7vZIEm2LWQK7a9AjQfnJBd9klcBf4bMNmCWpggwdkyeHL%2B%2BFfWtn%2F0K1pAGfxmfJoLOU0p39PjICN7iWGMgb8Mj24Yi9s8yx2g9hw441iIL0KGl38Cf6yXq3i9afS%2F2eRTUqLGr%2BIa3kIe%2FoumEGnfpb9LdRTiO0MewSStR0RSjKw7EO2jH21fVkxebpR3jib8kEsLyKacdryzzFQH54pAjUcMElouBhbUANft5Jk7kW5P%2FOxLbqdEakdMaD%2BYzc0V%2FfYdpBmyloX3d9d%2FEwt4cbRhVLSOUPFNTHIifRkYc6S0ZHCDsYk1TS3A%2FuqUttPE9EXg%2F37l%2FAx7ZAfrX3aN1RHGRCQ6WATbSTUyzPBRrL738q4w8WXs665aXiOjsByi6p17uN36txFedLMNXhkmXO0z%2BDE57XOiKuCryeoLonLKBnQS7AR94ICx%2BbgfEbxS0HA1GJK7rf%2F1UL9noMNe7m8MGOqUBJteHwTTvIRO8zwnqB%2Fs0DX4ntC4l0mZHeq35Mw1QENxcNZQ1icAp1ewSGbxyCtOfSU0Z9TBdHVpa6nQy4g%2F9kx6TgQ3lBOlM6sfq8P1ONG4kDxdDAeFMLgMFhIwOHwvZIvvVmLAG6RacSaR8sM5SIVHzuYwkghMeCIFIE0dhjM4L0dmTzJ8TCm%2Fy6blrg99tkmRlJs2hpvBoimdrvXeWWrmyE88y&X-Amz-Signature=c99cd07da9522d8584fe6582910245fe4cf31a94e1b630d12b13474b24edaed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6YBJFK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCCovOACNoMSUJNNUSROlg3j%2BXsle%2BVwkTcamfs%2Bnhp1QIgZzyr294WrF3C1UsmBv73OqjrUk%2B%2BQCOp%2FiZjIKFYuJQq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMS8l17iT3Ss3%2BmYnCrcA82lmu0EvJ5UY3tErflhzq2e3u9oJwU2C6lBz%2BoSJafTqcqFxRiE1a7lViKQbu8d0t%2F76a4iX2u%2FePgL0a1LrQoxm3kg2Xz6ChnE6d5Ob8MGdIwTCXu1N3BXT2JvNmpaoauYYSP1208omG4Dkgu6RtCq7j89w7I2veqPwsdsV7vZIEm2LWQK7a9AjQfnJBd9klcBf4bMNmCWpggwdkyeHL%2B%2BFfWtn%2F0K1pAGfxmfJoLOU0p39PjICN7iWGMgb8Mj24Yi9s8yx2g9hw441iIL0KGl38Cf6yXq3i9afS%2F2eRTUqLGr%2BIa3kIe%2FoumEGnfpb9LdRTiO0MewSStR0RSjKw7EO2jH21fVkxebpR3jib8kEsLyKacdryzzFQH54pAjUcMElouBhbUANft5Jk7kW5P%2FOxLbqdEakdMaD%2BYzc0V%2FfYdpBmyloX3d9d%2FEwt4cbRhVLSOUPFNTHIifRkYc6S0ZHCDsYk1TS3A%2FuqUttPE9EXg%2F37l%2FAx7ZAfrX3aN1RHGRCQ6WATbSTUyzPBRrL738q4w8WXs665aXiOjsByi6p17uN36txFedLMNXhkmXO0z%2BDE57XOiKuCryeoLonLKBnQS7AR94ICx%2BbgfEbxS0HA1GJK7rf%2F1UL9noMNe7m8MGOqUBJteHwTTvIRO8zwnqB%2Fs0DX4ntC4l0mZHeq35Mw1QENxcNZQ1icAp1ewSGbxyCtOfSU0Z9TBdHVpa6nQy4g%2F9kx6TgQ3lBOlM6sfq8P1ONG4kDxdDAeFMLgMFhIwOHwvZIvvVmLAG6RacSaR8sM5SIVHzuYwkghMeCIFIE0dhjM4L0dmTzJ8TCm%2Fy6blrg99tkmRlJs2hpvBoimdrvXeWWrmyE88y&X-Amz-Signature=ed6fc839513d75d8c870c8b59ec1eec44aeeaed480051987a9353f2bd35e6b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
