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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEU36CA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCi6cvZvCnUL3huJP2jCUuCov%2FtZvI7owNFdB4SUD3zdwIhAMl2586anEKlYhe%2FqlPN%2BPwCNLsl%2BoyDQ%2F9C6vfj8TiFKv8DCGcQABoMNjM3NDIzMTgzODA1IgySPJ0OkQSNV6pzU6gq3APGdvPqRQQCaggiVQZ2J6XNeGOxa8IjOiCr15EoyEuvP47B0HgTQWr%2Bk6QB0fyIBpQfZjX2uKzydYmmV1%2BuqtAFdsXOz8Kyy3PtuXJzyALy49M1dliXkajuOJ%2B%2F7VmX2dx0XN4QV8JffG6NRJHKhy8wQMcNo%2BP8Bf0YDyiYjqaESf1ZXJaDAnmM%2FfBhCSCanWF5JuD%2Fap0crdw0HOUwu7aYi0JkMh3DKCJteaef9W8N7wg3HzjBWoHHUYdkRtqpi7twk5tfcy8FA4BT1bzXdDHLUovsCoiBk6pncHG%2BMa5odHILgT5geIlLcAFFhT9RSxnov%2BoWbPI9Fmrwzo7PNXHD4aCxpDk%2FLLU3jMhy96OJfcZMF2kdVO2oMRVA2nv%2FBcE%2BU2wIRKBuNYob%2FkyJMbjYzmYTBfe5Xl9FSZEFVpX5GkGbNoGZuKZKBa6J8I6fW%2F07YkI5J1g382P9tYIgtWsWA6ucsm54TXLV2Lq%2FqcjCA2ram5JRS8mKPA8%2Bf4Uqt%2F1lC06CtRWf%2BoQbvJf8sAy3KyhJCqPxWiAJvKCsN64SJZFZ0AJctj8Jx3zRLPJkP1BU3dhneAC7dUcDKO8uPktky4k2rl9%2B%2BLoArbbfKAfl8YTF4f73Njjn%2BCGCZDCfn%2F69BjqkAeRRlM7IpHRe3SKWlIiIpHVVfN5XBHvSbeliXg%2B3EpjOI1tYNLnvFx8f5Esqi9dvInEz0O7nZTlDKY32kGzdXNOvMC6mZRL5aDfHD72e4jV4Sa5l6p6uE0CkC%2B031jg5h%2FBXsOhTEVYjlxvjd2VPfKrrvcsurUeB%2B4Bt5%2Fh10ddelN0Jk8m6copLaYFm22NQKwWkqPmjG3jJHvdogIljdYSHXogz&X-Amz-Signature=add382efea09c647eac2047141062327f9ee592eda29fc9a3f3bceeb0ad90baa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEU36CA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCi6cvZvCnUL3huJP2jCUuCov%2FtZvI7owNFdB4SUD3zdwIhAMl2586anEKlYhe%2FqlPN%2BPwCNLsl%2BoyDQ%2F9C6vfj8TiFKv8DCGcQABoMNjM3NDIzMTgzODA1IgySPJ0OkQSNV6pzU6gq3APGdvPqRQQCaggiVQZ2J6XNeGOxa8IjOiCr15EoyEuvP47B0HgTQWr%2Bk6QB0fyIBpQfZjX2uKzydYmmV1%2BuqtAFdsXOz8Kyy3PtuXJzyALy49M1dliXkajuOJ%2B%2F7VmX2dx0XN4QV8JffG6NRJHKhy8wQMcNo%2BP8Bf0YDyiYjqaESf1ZXJaDAnmM%2FfBhCSCanWF5JuD%2Fap0crdw0HOUwu7aYi0JkMh3DKCJteaef9W8N7wg3HzjBWoHHUYdkRtqpi7twk5tfcy8FA4BT1bzXdDHLUovsCoiBk6pncHG%2BMa5odHILgT5geIlLcAFFhT9RSxnov%2BoWbPI9Fmrwzo7PNXHD4aCxpDk%2FLLU3jMhy96OJfcZMF2kdVO2oMRVA2nv%2FBcE%2BU2wIRKBuNYob%2FkyJMbjYzmYTBfe5Xl9FSZEFVpX5GkGbNoGZuKZKBa6J8I6fW%2F07YkI5J1g382P9tYIgtWsWA6ucsm54TXLV2Lq%2FqcjCA2ram5JRS8mKPA8%2Bf4Uqt%2F1lC06CtRWf%2BoQbvJf8sAy3KyhJCqPxWiAJvKCsN64SJZFZ0AJctj8Jx3zRLPJkP1BU3dhneAC7dUcDKO8uPktky4k2rl9%2B%2BLoArbbfKAfl8YTF4f73Njjn%2BCGCZDCfn%2F69BjqkAeRRlM7IpHRe3SKWlIiIpHVVfN5XBHvSbeliXg%2B3EpjOI1tYNLnvFx8f5Esqi9dvInEz0O7nZTlDKY32kGzdXNOvMC6mZRL5aDfHD72e4jV4Sa5l6p6uE0CkC%2B031jg5h%2FBXsOhTEVYjlxvjd2VPfKrrvcsurUeB%2B4Bt5%2Fh10ddelN0Jk8m6copLaYFm22NQKwWkqPmjG3jJHvdogIljdYSHXogz&X-Amz-Signature=9ce319dbff80756c6751bc2097b6f21647cccc5bc8ff4aa93660180f4fff810d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEU36CA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCi6cvZvCnUL3huJP2jCUuCov%2FtZvI7owNFdB4SUD3zdwIhAMl2586anEKlYhe%2FqlPN%2BPwCNLsl%2BoyDQ%2F9C6vfj8TiFKv8DCGcQABoMNjM3NDIzMTgzODA1IgySPJ0OkQSNV6pzU6gq3APGdvPqRQQCaggiVQZ2J6XNeGOxa8IjOiCr15EoyEuvP47B0HgTQWr%2Bk6QB0fyIBpQfZjX2uKzydYmmV1%2BuqtAFdsXOz8Kyy3PtuXJzyALy49M1dliXkajuOJ%2B%2F7VmX2dx0XN4QV8JffG6NRJHKhy8wQMcNo%2BP8Bf0YDyiYjqaESf1ZXJaDAnmM%2FfBhCSCanWF5JuD%2Fap0crdw0HOUwu7aYi0JkMh3DKCJteaef9W8N7wg3HzjBWoHHUYdkRtqpi7twk5tfcy8FA4BT1bzXdDHLUovsCoiBk6pncHG%2BMa5odHILgT5geIlLcAFFhT9RSxnov%2BoWbPI9Fmrwzo7PNXHD4aCxpDk%2FLLU3jMhy96OJfcZMF2kdVO2oMRVA2nv%2FBcE%2BU2wIRKBuNYob%2FkyJMbjYzmYTBfe5Xl9FSZEFVpX5GkGbNoGZuKZKBa6J8I6fW%2F07YkI5J1g382P9tYIgtWsWA6ucsm54TXLV2Lq%2FqcjCA2ram5JRS8mKPA8%2Bf4Uqt%2F1lC06CtRWf%2BoQbvJf8sAy3KyhJCqPxWiAJvKCsN64SJZFZ0AJctj8Jx3zRLPJkP1BU3dhneAC7dUcDKO8uPktky4k2rl9%2B%2BLoArbbfKAfl8YTF4f73Njjn%2BCGCZDCfn%2F69BjqkAeRRlM7IpHRe3SKWlIiIpHVVfN5XBHvSbeliXg%2B3EpjOI1tYNLnvFx8f5Esqi9dvInEz0O7nZTlDKY32kGzdXNOvMC6mZRL5aDfHD72e4jV4Sa5l6p6uE0CkC%2B031jg5h%2FBXsOhTEVYjlxvjd2VPfKrrvcsurUeB%2B4Bt5%2Fh10ddelN0Jk8m6copLaYFm22NQKwWkqPmjG3jJHvdogIljdYSHXogz&X-Amz-Signature=4e35a6c842d97caa940348db33863e650f2388c0dc8a4696f260f0ecdb6212af&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEU36CA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCi6cvZvCnUL3huJP2jCUuCov%2FtZvI7owNFdB4SUD3zdwIhAMl2586anEKlYhe%2FqlPN%2BPwCNLsl%2BoyDQ%2F9C6vfj8TiFKv8DCGcQABoMNjM3NDIzMTgzODA1IgySPJ0OkQSNV6pzU6gq3APGdvPqRQQCaggiVQZ2J6XNeGOxa8IjOiCr15EoyEuvP47B0HgTQWr%2Bk6QB0fyIBpQfZjX2uKzydYmmV1%2BuqtAFdsXOz8Kyy3PtuXJzyALy49M1dliXkajuOJ%2B%2F7VmX2dx0XN4QV8JffG6NRJHKhy8wQMcNo%2BP8Bf0YDyiYjqaESf1ZXJaDAnmM%2FfBhCSCanWF5JuD%2Fap0crdw0HOUwu7aYi0JkMh3DKCJteaef9W8N7wg3HzjBWoHHUYdkRtqpi7twk5tfcy8FA4BT1bzXdDHLUovsCoiBk6pncHG%2BMa5odHILgT5geIlLcAFFhT9RSxnov%2BoWbPI9Fmrwzo7PNXHD4aCxpDk%2FLLU3jMhy96OJfcZMF2kdVO2oMRVA2nv%2FBcE%2BU2wIRKBuNYob%2FkyJMbjYzmYTBfe5Xl9FSZEFVpX5GkGbNoGZuKZKBa6J8I6fW%2F07YkI5J1g382P9tYIgtWsWA6ucsm54TXLV2Lq%2FqcjCA2ram5JRS8mKPA8%2Bf4Uqt%2F1lC06CtRWf%2BoQbvJf8sAy3KyhJCqPxWiAJvKCsN64SJZFZ0AJctj8Jx3zRLPJkP1BU3dhneAC7dUcDKO8uPktky4k2rl9%2B%2BLoArbbfKAfl8YTF4f73Njjn%2BCGCZDCfn%2F69BjqkAeRRlM7IpHRe3SKWlIiIpHVVfN5XBHvSbeliXg%2B3EpjOI1tYNLnvFx8f5Esqi9dvInEz0O7nZTlDKY32kGzdXNOvMC6mZRL5aDfHD72e4jV4Sa5l6p6uE0CkC%2B031jg5h%2FBXsOhTEVYjlxvjd2VPfKrrvcsurUeB%2B4Bt5%2Fh10ddelN0Jk8m6copLaYFm22NQKwWkqPmjG3jJHvdogIljdYSHXogz&X-Amz-Signature=3b42f611997664c8c99dfa822c1695b746a305ea9f1464acf230a22b43b2517b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEU36CA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCi6cvZvCnUL3huJP2jCUuCov%2FtZvI7owNFdB4SUD3zdwIhAMl2586anEKlYhe%2FqlPN%2BPwCNLsl%2BoyDQ%2F9C6vfj8TiFKv8DCGcQABoMNjM3NDIzMTgzODA1IgySPJ0OkQSNV6pzU6gq3APGdvPqRQQCaggiVQZ2J6XNeGOxa8IjOiCr15EoyEuvP47B0HgTQWr%2Bk6QB0fyIBpQfZjX2uKzydYmmV1%2BuqtAFdsXOz8Kyy3PtuXJzyALy49M1dliXkajuOJ%2B%2F7VmX2dx0XN4QV8JffG6NRJHKhy8wQMcNo%2BP8Bf0YDyiYjqaESf1ZXJaDAnmM%2FfBhCSCanWF5JuD%2Fap0crdw0HOUwu7aYi0JkMh3DKCJteaef9W8N7wg3HzjBWoHHUYdkRtqpi7twk5tfcy8FA4BT1bzXdDHLUovsCoiBk6pncHG%2BMa5odHILgT5geIlLcAFFhT9RSxnov%2BoWbPI9Fmrwzo7PNXHD4aCxpDk%2FLLU3jMhy96OJfcZMF2kdVO2oMRVA2nv%2FBcE%2BU2wIRKBuNYob%2FkyJMbjYzmYTBfe5Xl9FSZEFVpX5GkGbNoGZuKZKBa6J8I6fW%2F07YkI5J1g382P9tYIgtWsWA6ucsm54TXLV2Lq%2FqcjCA2ram5JRS8mKPA8%2Bf4Uqt%2F1lC06CtRWf%2BoQbvJf8sAy3KyhJCqPxWiAJvKCsN64SJZFZ0AJctj8Jx3zRLPJkP1BU3dhneAC7dUcDKO8uPktky4k2rl9%2B%2BLoArbbfKAfl8YTF4f73Njjn%2BCGCZDCfn%2F69BjqkAeRRlM7IpHRe3SKWlIiIpHVVfN5XBHvSbeliXg%2B3EpjOI1tYNLnvFx8f5Esqi9dvInEz0O7nZTlDKY32kGzdXNOvMC6mZRL5aDfHD72e4jV4Sa5l6p6uE0CkC%2B031jg5h%2FBXsOhTEVYjlxvjd2VPfKrrvcsurUeB%2B4Bt5%2Fh10ddelN0Jk8m6copLaYFm22NQKwWkqPmjG3jJHvdogIljdYSHXogz&X-Amz-Signature=08bee8338793ee8f13d72b8d1ffea4b9a80ed0ac997bce5737a96757b60196d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
