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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX4A4S5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjem4Vyz6Tw%2Fy4uABqE4unAPKuvBwlnqkv6pW18o7dswIgRQXjQBpsWMyiIIHaaH6Fs0gXz%2BoFuLehRdfFAYwTscQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlflDQJ5WOS34B0mSrcA64HeOEC959G4jtS7FcpNuWjJolzSz6yjeMzZBkuAoRShtn2OI4tdkHmZ4o9lxG20iUh5wKuIRJiZRS2v4SGvV974C%2BBdoMF8pOI4qLTRJZqElOBkT0GrD%2BO9Vtnl0s1UnGgsyaveL9hzPKzTGbKQ05n3nyTxd0lMs8s%2FD5bISvn8yzI5plRqxUkftn9iSIRf8ZxhZYUMmtlyUtp%2F%2B6lalk2WYbhtgcSkPBskNBBAXQXKicYzNt6dfBlnakiRKW7fa0npn9iUZS3Da6w84dxqQQ1h2qxN%2B3RXf9nND00FwGvSxvEc2G0AWUJH7I6%2BEid2vP1cgHiHnokF2T6NXC47jXjm4G4n8NIHI6Acz3HSuQaR9lXiLpy%2BZg7PP6n3gpohd%2Fnn1omGEIm6eSB%2Fsw2bdq1H8xgqT376xdj5O0FExeoWA7IFn2Ue8Vza%2F27i90TN1hDZi%2FKo0Tal7RDMY1QNFNoVSG3SySd4M59HNWJk%2BWbeHZ4g9Iwqi2OBy9x9qxmFbbrFzkBNYYyndS2Oyl%2BwS6e7kRtpBBTeSxDmB3DsmxsoQ4MX7helFjtAe1zfSBFTfZhVLKrwrP2335%2FHRo1q%2BNh%2Bz8XyMKl7XWYJZiRWWStSUGhZYbL5YCjQ1yeMNSPqsQGOqUBdBc8XsxoNw2EDpVRtvcfkIcX53fTWNqJN8quUfyxtqfx2C%2B%2FVhCNH0RUrFvNROCoOIofvKwBkn3K%2BGK3bxFVxi%2B4a7fmH8tshwpJUrFuFBxCqhIPv9Wo9W4NP03BuCVQPOd9zdRhzL%2F8ySk%2Bg75kyzGrNxGzLKlxhvvAu30HJcmZXO%2BBSudawipR2Meyu1hH1u2Ra7wVbw2RrXLq8JASHtSwPJs5&X-Amz-Signature=27900ef381bffa5cfc7aed700242a969c4fba56f4507a06471d90a3e16e11aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX4A4S5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjem4Vyz6Tw%2Fy4uABqE4unAPKuvBwlnqkv6pW18o7dswIgRQXjQBpsWMyiIIHaaH6Fs0gXz%2BoFuLehRdfFAYwTscQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlflDQJ5WOS34B0mSrcA64HeOEC959G4jtS7FcpNuWjJolzSz6yjeMzZBkuAoRShtn2OI4tdkHmZ4o9lxG20iUh5wKuIRJiZRS2v4SGvV974C%2BBdoMF8pOI4qLTRJZqElOBkT0GrD%2BO9Vtnl0s1UnGgsyaveL9hzPKzTGbKQ05n3nyTxd0lMs8s%2FD5bISvn8yzI5plRqxUkftn9iSIRf8ZxhZYUMmtlyUtp%2F%2B6lalk2WYbhtgcSkPBskNBBAXQXKicYzNt6dfBlnakiRKW7fa0npn9iUZS3Da6w84dxqQQ1h2qxN%2B3RXf9nND00FwGvSxvEc2G0AWUJH7I6%2BEid2vP1cgHiHnokF2T6NXC47jXjm4G4n8NIHI6Acz3HSuQaR9lXiLpy%2BZg7PP6n3gpohd%2Fnn1omGEIm6eSB%2Fsw2bdq1H8xgqT376xdj5O0FExeoWA7IFn2Ue8Vza%2F27i90TN1hDZi%2FKo0Tal7RDMY1QNFNoVSG3SySd4M59HNWJk%2BWbeHZ4g9Iwqi2OBy9x9qxmFbbrFzkBNYYyndS2Oyl%2BwS6e7kRtpBBTeSxDmB3DsmxsoQ4MX7helFjtAe1zfSBFTfZhVLKrwrP2335%2FHRo1q%2BNh%2Bz8XyMKl7XWYJZiRWWStSUGhZYbL5YCjQ1yeMNSPqsQGOqUBdBc8XsxoNw2EDpVRtvcfkIcX53fTWNqJN8quUfyxtqfx2C%2B%2FVhCNH0RUrFvNROCoOIofvKwBkn3K%2BGK3bxFVxi%2B4a7fmH8tshwpJUrFuFBxCqhIPv9Wo9W4NP03BuCVQPOd9zdRhzL%2F8ySk%2Bg75kyzGrNxGzLKlxhvvAu30HJcmZXO%2BBSudawipR2Meyu1hH1u2Ra7wVbw2RrXLq8JASHtSwPJs5&X-Amz-Signature=70bcb599018cbc4614dc1722c33b618bc7058b9540c556436d500f893a83eff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX4A4S5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjem4Vyz6Tw%2Fy4uABqE4unAPKuvBwlnqkv6pW18o7dswIgRQXjQBpsWMyiIIHaaH6Fs0gXz%2BoFuLehRdfFAYwTscQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlflDQJ5WOS34B0mSrcA64HeOEC959G4jtS7FcpNuWjJolzSz6yjeMzZBkuAoRShtn2OI4tdkHmZ4o9lxG20iUh5wKuIRJiZRS2v4SGvV974C%2BBdoMF8pOI4qLTRJZqElOBkT0GrD%2BO9Vtnl0s1UnGgsyaveL9hzPKzTGbKQ05n3nyTxd0lMs8s%2FD5bISvn8yzI5plRqxUkftn9iSIRf8ZxhZYUMmtlyUtp%2F%2B6lalk2WYbhtgcSkPBskNBBAXQXKicYzNt6dfBlnakiRKW7fa0npn9iUZS3Da6w84dxqQQ1h2qxN%2B3RXf9nND00FwGvSxvEc2G0AWUJH7I6%2BEid2vP1cgHiHnokF2T6NXC47jXjm4G4n8NIHI6Acz3HSuQaR9lXiLpy%2BZg7PP6n3gpohd%2Fnn1omGEIm6eSB%2Fsw2bdq1H8xgqT376xdj5O0FExeoWA7IFn2Ue8Vza%2F27i90TN1hDZi%2FKo0Tal7RDMY1QNFNoVSG3SySd4M59HNWJk%2BWbeHZ4g9Iwqi2OBy9x9qxmFbbrFzkBNYYyndS2Oyl%2BwS6e7kRtpBBTeSxDmB3DsmxsoQ4MX7helFjtAe1zfSBFTfZhVLKrwrP2335%2FHRo1q%2BNh%2Bz8XyMKl7XWYJZiRWWStSUGhZYbL5YCjQ1yeMNSPqsQGOqUBdBc8XsxoNw2EDpVRtvcfkIcX53fTWNqJN8quUfyxtqfx2C%2B%2FVhCNH0RUrFvNROCoOIofvKwBkn3K%2BGK3bxFVxi%2B4a7fmH8tshwpJUrFuFBxCqhIPv9Wo9W4NP03BuCVQPOd9zdRhzL%2F8ySk%2Bg75kyzGrNxGzLKlxhvvAu30HJcmZXO%2BBSudawipR2Meyu1hH1u2Ra7wVbw2RrXLq8JASHtSwPJs5&X-Amz-Signature=d215c4e05a447865f41b101a4e75dd365918643ac8ec1895506224865b56bf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX4A4S5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjem4Vyz6Tw%2Fy4uABqE4unAPKuvBwlnqkv6pW18o7dswIgRQXjQBpsWMyiIIHaaH6Fs0gXz%2BoFuLehRdfFAYwTscQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlflDQJ5WOS34B0mSrcA64HeOEC959G4jtS7FcpNuWjJolzSz6yjeMzZBkuAoRShtn2OI4tdkHmZ4o9lxG20iUh5wKuIRJiZRS2v4SGvV974C%2BBdoMF8pOI4qLTRJZqElOBkT0GrD%2BO9Vtnl0s1UnGgsyaveL9hzPKzTGbKQ05n3nyTxd0lMs8s%2FD5bISvn8yzI5plRqxUkftn9iSIRf8ZxhZYUMmtlyUtp%2F%2B6lalk2WYbhtgcSkPBskNBBAXQXKicYzNt6dfBlnakiRKW7fa0npn9iUZS3Da6w84dxqQQ1h2qxN%2B3RXf9nND00FwGvSxvEc2G0AWUJH7I6%2BEid2vP1cgHiHnokF2T6NXC47jXjm4G4n8NIHI6Acz3HSuQaR9lXiLpy%2BZg7PP6n3gpohd%2Fnn1omGEIm6eSB%2Fsw2bdq1H8xgqT376xdj5O0FExeoWA7IFn2Ue8Vza%2F27i90TN1hDZi%2FKo0Tal7RDMY1QNFNoVSG3SySd4M59HNWJk%2BWbeHZ4g9Iwqi2OBy9x9qxmFbbrFzkBNYYyndS2Oyl%2BwS6e7kRtpBBTeSxDmB3DsmxsoQ4MX7helFjtAe1zfSBFTfZhVLKrwrP2335%2FHRo1q%2BNh%2Bz8XyMKl7XWYJZiRWWStSUGhZYbL5YCjQ1yeMNSPqsQGOqUBdBc8XsxoNw2EDpVRtvcfkIcX53fTWNqJN8quUfyxtqfx2C%2B%2FVhCNH0RUrFvNROCoOIofvKwBkn3K%2BGK3bxFVxi%2B4a7fmH8tshwpJUrFuFBxCqhIPv9Wo9W4NP03BuCVQPOd9zdRhzL%2F8ySk%2Bg75kyzGrNxGzLKlxhvvAu30HJcmZXO%2BBSudawipR2Meyu1hH1u2Ra7wVbw2RrXLq8JASHtSwPJs5&X-Amz-Signature=5bac7fe82afc49a4c650be6f41ffb42065ede4576b9ede416bb5dd27731c165b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AX4A4S5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjem4Vyz6Tw%2Fy4uABqE4unAPKuvBwlnqkv6pW18o7dswIgRQXjQBpsWMyiIIHaaH6Fs0gXz%2BoFuLehRdfFAYwTscQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlflDQJ5WOS34B0mSrcA64HeOEC959G4jtS7FcpNuWjJolzSz6yjeMzZBkuAoRShtn2OI4tdkHmZ4o9lxG20iUh5wKuIRJiZRS2v4SGvV974C%2BBdoMF8pOI4qLTRJZqElOBkT0GrD%2BO9Vtnl0s1UnGgsyaveL9hzPKzTGbKQ05n3nyTxd0lMs8s%2FD5bISvn8yzI5plRqxUkftn9iSIRf8ZxhZYUMmtlyUtp%2F%2B6lalk2WYbhtgcSkPBskNBBAXQXKicYzNt6dfBlnakiRKW7fa0npn9iUZS3Da6w84dxqQQ1h2qxN%2B3RXf9nND00FwGvSxvEc2G0AWUJH7I6%2BEid2vP1cgHiHnokF2T6NXC47jXjm4G4n8NIHI6Acz3HSuQaR9lXiLpy%2BZg7PP6n3gpohd%2Fnn1omGEIm6eSB%2Fsw2bdq1H8xgqT376xdj5O0FExeoWA7IFn2Ue8Vza%2F27i90TN1hDZi%2FKo0Tal7RDMY1QNFNoVSG3SySd4M59HNWJk%2BWbeHZ4g9Iwqi2OBy9x9qxmFbbrFzkBNYYyndS2Oyl%2BwS6e7kRtpBBTeSxDmB3DsmxsoQ4MX7helFjtAe1zfSBFTfZhVLKrwrP2335%2FHRo1q%2BNh%2Bz8XyMKl7XWYJZiRWWStSUGhZYbL5YCjQ1yeMNSPqsQGOqUBdBc8XsxoNw2EDpVRtvcfkIcX53fTWNqJN8quUfyxtqfx2C%2B%2FVhCNH0RUrFvNROCoOIofvKwBkn3K%2BGK3bxFVxi%2B4a7fmH8tshwpJUrFuFBxCqhIPv9Wo9W4NP03BuCVQPOd9zdRhzL%2F8ySk%2Bg75kyzGrNxGzLKlxhvvAu30HJcmZXO%2BBSudawipR2Meyu1hH1u2Ra7wVbw2RrXLq8JASHtSwPJs5&X-Amz-Signature=b9e56c18089eb5a8111add1b8ddd8ab00d826b2820f1aba9de29dcab90cfa8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
