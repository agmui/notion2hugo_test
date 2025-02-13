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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXNRXMVK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8AAMhk7IMRK0RH%2FCUPheW%2B1ta02mOIvtHuON%2Br3aIAIgF%2FciHkpVHDeNq90y9bnSiM%2FTr%2BjZtJO%2FMfdGiLu6rkUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPGyYd%2FaBAaN0HDF3CrcA8SijN6Ky%2Fwn1mYY%2Bn0YdFWuZ1I8s7X56Xq%2BKl4%2B%2BwlakYUS9MVYFFkgBSyY5QqzRtdiEbp%2BbFpLX%2FHKFhHRMrgnG60Yayw%2FcKxteNfRbDSd7lbVIc1CDP%2BDmvOURqRN9lUwreamo46ugsybpQdFmWDEeYa8lWUa3JjgVVL8OMbLaPqLYcfW6pGWUvivhmC1d05HlcEwD4TD7D9n%2BnYuLwVPpslKPRHyx8eO6Bj9b8hNcv08BWMvDI5QhMupApv0X7K1ZBSFu85cxOID%2FAqFxypzn5KgcRdwvF%2B1P8VlmcLiFKb7b9abLPa7Wobk1Lab%2F5UlRb3ZwtfYGbCVAN1P%2FU82B4WhUEyVdhHm6TbPnmIiCre4g3z9DMpvJbKGH1kbnXvV2P2qp3kb%2FJYeaLHwxFWVaHExmw7AQGuk7%2F1c9I47yhmv8XLWaRSs7XbdqFL9qVsvhM9JT%2FVjBQglZboHVlN0R%2F1T1OluYPfvWPELjE%2FdiLCtGvTXOoAslaM6DzzPXyEKRjb%2Fi95aiEZKNd0IwufvjaMW6XQhPaxIMNr%2BEw4AMoWL4BVD5aYiMVBojPitBgbvTRUleZd1JGtQaFUPW9t5gyR8r%2BTCdRovGAQ4mzg1z%2F0Vs56ba1%2By0n6BML6sub0GOqUBqUxb4rFtM6BcwM5FdyYGZkolPpSAbIWsimrj%2B12fYOQQPoaMu75iliHnCYnWpMohGBuOaLgwv3djAkx5yE2PVOXhk4xAFZnKVV%2F8DywPYzDmkwAKZ3HV2uGFjC4L%2Fx8iY6BgxRC2lapHOUHsTcGNpNXDhQESLxVpCaQifNpQEpV4kDfsTn%2Fqdw6uDwzpvbnNgxKcvTTGf2nlP23LOduXn7GGa%2B11&X-Amz-Signature=abd3f928e583015571e9e71bbf6192453746dd1a3ad2fa590a1f86c04eb94dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXNRXMVK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8AAMhk7IMRK0RH%2FCUPheW%2B1ta02mOIvtHuON%2Br3aIAIgF%2FciHkpVHDeNq90y9bnSiM%2FTr%2BjZtJO%2FMfdGiLu6rkUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPGyYd%2FaBAaN0HDF3CrcA8SijN6Ky%2Fwn1mYY%2Bn0YdFWuZ1I8s7X56Xq%2BKl4%2B%2BwlakYUS9MVYFFkgBSyY5QqzRtdiEbp%2BbFpLX%2FHKFhHRMrgnG60Yayw%2FcKxteNfRbDSd7lbVIc1CDP%2BDmvOURqRN9lUwreamo46ugsybpQdFmWDEeYa8lWUa3JjgVVL8OMbLaPqLYcfW6pGWUvivhmC1d05HlcEwD4TD7D9n%2BnYuLwVPpslKPRHyx8eO6Bj9b8hNcv08BWMvDI5QhMupApv0X7K1ZBSFu85cxOID%2FAqFxypzn5KgcRdwvF%2B1P8VlmcLiFKb7b9abLPa7Wobk1Lab%2F5UlRb3ZwtfYGbCVAN1P%2FU82B4WhUEyVdhHm6TbPnmIiCre4g3z9DMpvJbKGH1kbnXvV2P2qp3kb%2FJYeaLHwxFWVaHExmw7AQGuk7%2F1c9I47yhmv8XLWaRSs7XbdqFL9qVsvhM9JT%2FVjBQglZboHVlN0R%2F1T1OluYPfvWPELjE%2FdiLCtGvTXOoAslaM6DzzPXyEKRjb%2Fi95aiEZKNd0IwufvjaMW6XQhPaxIMNr%2BEw4AMoWL4BVD5aYiMVBojPitBgbvTRUleZd1JGtQaFUPW9t5gyR8r%2BTCdRovGAQ4mzg1z%2F0Vs56ba1%2By0n6BML6sub0GOqUBqUxb4rFtM6BcwM5FdyYGZkolPpSAbIWsimrj%2B12fYOQQPoaMu75iliHnCYnWpMohGBuOaLgwv3djAkx5yE2PVOXhk4xAFZnKVV%2F8DywPYzDmkwAKZ3HV2uGFjC4L%2Fx8iY6BgxRC2lapHOUHsTcGNpNXDhQESLxVpCaQifNpQEpV4kDfsTn%2Fqdw6uDwzpvbnNgxKcvTTGf2nlP23LOduXn7GGa%2B11&X-Amz-Signature=15c95c1072ea791f82f76ea9a94cfb17cf1bf43aa4303ffad64dd1528df56701&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXNRXMVK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8AAMhk7IMRK0RH%2FCUPheW%2B1ta02mOIvtHuON%2Br3aIAIgF%2FciHkpVHDeNq90y9bnSiM%2FTr%2BjZtJO%2FMfdGiLu6rkUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPGyYd%2FaBAaN0HDF3CrcA8SijN6Ky%2Fwn1mYY%2Bn0YdFWuZ1I8s7X56Xq%2BKl4%2B%2BwlakYUS9MVYFFkgBSyY5QqzRtdiEbp%2BbFpLX%2FHKFhHRMrgnG60Yayw%2FcKxteNfRbDSd7lbVIc1CDP%2BDmvOURqRN9lUwreamo46ugsybpQdFmWDEeYa8lWUa3JjgVVL8OMbLaPqLYcfW6pGWUvivhmC1d05HlcEwD4TD7D9n%2BnYuLwVPpslKPRHyx8eO6Bj9b8hNcv08BWMvDI5QhMupApv0X7K1ZBSFu85cxOID%2FAqFxypzn5KgcRdwvF%2B1P8VlmcLiFKb7b9abLPa7Wobk1Lab%2F5UlRb3ZwtfYGbCVAN1P%2FU82B4WhUEyVdhHm6TbPnmIiCre4g3z9DMpvJbKGH1kbnXvV2P2qp3kb%2FJYeaLHwxFWVaHExmw7AQGuk7%2F1c9I47yhmv8XLWaRSs7XbdqFL9qVsvhM9JT%2FVjBQglZboHVlN0R%2F1T1OluYPfvWPELjE%2FdiLCtGvTXOoAslaM6DzzPXyEKRjb%2Fi95aiEZKNd0IwufvjaMW6XQhPaxIMNr%2BEw4AMoWL4BVD5aYiMVBojPitBgbvTRUleZd1JGtQaFUPW9t5gyR8r%2BTCdRovGAQ4mzg1z%2F0Vs56ba1%2By0n6BML6sub0GOqUBqUxb4rFtM6BcwM5FdyYGZkolPpSAbIWsimrj%2B12fYOQQPoaMu75iliHnCYnWpMohGBuOaLgwv3djAkx5yE2PVOXhk4xAFZnKVV%2F8DywPYzDmkwAKZ3HV2uGFjC4L%2Fx8iY6BgxRC2lapHOUHsTcGNpNXDhQESLxVpCaQifNpQEpV4kDfsTn%2Fqdw6uDwzpvbnNgxKcvTTGf2nlP23LOduXn7GGa%2B11&X-Amz-Signature=142cbddf303f898703130a7d83b7a6c906557dda4cc2a137bf888a1f4b53bb73&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXNRXMVK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8AAMhk7IMRK0RH%2FCUPheW%2B1ta02mOIvtHuON%2Br3aIAIgF%2FciHkpVHDeNq90y9bnSiM%2FTr%2BjZtJO%2FMfdGiLu6rkUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPGyYd%2FaBAaN0HDF3CrcA8SijN6Ky%2Fwn1mYY%2Bn0YdFWuZ1I8s7X56Xq%2BKl4%2B%2BwlakYUS9MVYFFkgBSyY5QqzRtdiEbp%2BbFpLX%2FHKFhHRMrgnG60Yayw%2FcKxteNfRbDSd7lbVIc1CDP%2BDmvOURqRN9lUwreamo46ugsybpQdFmWDEeYa8lWUa3JjgVVL8OMbLaPqLYcfW6pGWUvivhmC1d05HlcEwD4TD7D9n%2BnYuLwVPpslKPRHyx8eO6Bj9b8hNcv08BWMvDI5QhMupApv0X7K1ZBSFu85cxOID%2FAqFxypzn5KgcRdwvF%2B1P8VlmcLiFKb7b9abLPa7Wobk1Lab%2F5UlRb3ZwtfYGbCVAN1P%2FU82B4WhUEyVdhHm6TbPnmIiCre4g3z9DMpvJbKGH1kbnXvV2P2qp3kb%2FJYeaLHwxFWVaHExmw7AQGuk7%2F1c9I47yhmv8XLWaRSs7XbdqFL9qVsvhM9JT%2FVjBQglZboHVlN0R%2F1T1OluYPfvWPELjE%2FdiLCtGvTXOoAslaM6DzzPXyEKRjb%2Fi95aiEZKNd0IwufvjaMW6XQhPaxIMNr%2BEw4AMoWL4BVD5aYiMVBojPitBgbvTRUleZd1JGtQaFUPW9t5gyR8r%2BTCdRovGAQ4mzg1z%2F0Vs56ba1%2By0n6BML6sub0GOqUBqUxb4rFtM6BcwM5FdyYGZkolPpSAbIWsimrj%2B12fYOQQPoaMu75iliHnCYnWpMohGBuOaLgwv3djAkx5yE2PVOXhk4xAFZnKVV%2F8DywPYzDmkwAKZ3HV2uGFjC4L%2Fx8iY6BgxRC2lapHOUHsTcGNpNXDhQESLxVpCaQifNpQEpV4kDfsTn%2Fqdw6uDwzpvbnNgxKcvTTGf2nlP23LOduXn7GGa%2B11&X-Amz-Signature=d44d84bd347fb452d78e238ecfbb4e970a178cff49d2f503b3dc2a9e6cb33453&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXNRXMVK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8AAMhk7IMRK0RH%2FCUPheW%2B1ta02mOIvtHuON%2Br3aIAIgF%2FciHkpVHDeNq90y9bnSiM%2FTr%2BjZtJO%2FMfdGiLu6rkUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPGyYd%2FaBAaN0HDF3CrcA8SijN6Ky%2Fwn1mYY%2Bn0YdFWuZ1I8s7X56Xq%2BKl4%2B%2BwlakYUS9MVYFFkgBSyY5QqzRtdiEbp%2BbFpLX%2FHKFhHRMrgnG60Yayw%2FcKxteNfRbDSd7lbVIc1CDP%2BDmvOURqRN9lUwreamo46ugsybpQdFmWDEeYa8lWUa3JjgVVL8OMbLaPqLYcfW6pGWUvivhmC1d05HlcEwD4TD7D9n%2BnYuLwVPpslKPRHyx8eO6Bj9b8hNcv08BWMvDI5QhMupApv0X7K1ZBSFu85cxOID%2FAqFxypzn5KgcRdwvF%2B1P8VlmcLiFKb7b9abLPa7Wobk1Lab%2F5UlRb3ZwtfYGbCVAN1P%2FU82B4WhUEyVdhHm6TbPnmIiCre4g3z9DMpvJbKGH1kbnXvV2P2qp3kb%2FJYeaLHwxFWVaHExmw7AQGuk7%2F1c9I47yhmv8XLWaRSs7XbdqFL9qVsvhM9JT%2FVjBQglZboHVlN0R%2F1T1OluYPfvWPELjE%2FdiLCtGvTXOoAslaM6DzzPXyEKRjb%2Fi95aiEZKNd0IwufvjaMW6XQhPaxIMNr%2BEw4AMoWL4BVD5aYiMVBojPitBgbvTRUleZd1JGtQaFUPW9t5gyR8r%2BTCdRovGAQ4mzg1z%2F0Vs56ba1%2By0n6BML6sub0GOqUBqUxb4rFtM6BcwM5FdyYGZkolPpSAbIWsimrj%2B12fYOQQPoaMu75iliHnCYnWpMohGBuOaLgwv3djAkx5yE2PVOXhk4xAFZnKVV%2F8DywPYzDmkwAKZ3HV2uGFjC4L%2Fx8iY6BgxRC2lapHOUHsTcGNpNXDhQESLxVpCaQifNpQEpV4kDfsTn%2Fqdw6uDwzpvbnNgxKcvTTGf2nlP23LOduXn7GGa%2B11&X-Amz-Signature=4f71f87df2fbb68907d00e5563c753a100936df0de413f92baaf162fb5eb339e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
