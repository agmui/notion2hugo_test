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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5G67E3M%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolAG9YVf6uCBsuqekvtZsurjUu5XqTRjqcez72SFDzAIgLe9wv%2FhYiuPe%2F9b9PhX32BuGsS%2Bt%2BABM1tGUCk5juJQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAKObhFd9U0VqTqaircA2bZJSsFBJeY0GyuffpIyon2hApiOsltrRx%2BH7dkxRcztGbhG6kvNUy2REryYNmwwC6%2FlQhbczZqdJy%2F%2B%2BxFtDJuIDKvN2k0TJR8bO47jvAO1fLj0mKSFeQJpcrNnMWT0iZ3ciDODGg%2BkQwDqa9tMb8%2FT44W%2BRqzvZxUpHYXk%2FfNrGHyliK8uQX9YP7UMozXyrt4sw0eDBKJQm%2BYFQoPT991nDBjW2JxVxHK8P1lI9%2BkgGuhJvyS2Y8Ha5li0qLdd4LTLKa%2Fj2sERgkmaRb84aJxxYkgCCUmxRD90DL5asWODY0JTSkIAFCKwpq5p5EthfvTcZ7ju13FfzWbtqQ3KJLOpECxOj6H97T87ZwdcJn64pWC76T2qy7OxqS3TCOPea38zVs8KH2BrHv32tcmPEs89a1jHzO5Z4riy%2FraxrVOtHht4soNVO5vLg6Wj6swPy3PNbblKLTdeMMkNRo75L6k0pN%2B44uBjVtn2IoQn3AKhYKJwj6BClcXlvub0iXrAZsDrajXX%2B5loqlqoDnAWbRX6vPSIpjWCgU3u3u6dZ3706k9XXh7H6kHkryGoXAjOzcOs5IV6FbzFYFPwfoU1R8wQABavSwlUh0TuzvWJTzsjWi2eFc7YwhSsKKGMImR87wGOqUBaC9VsamF30Ryxi9PLJukgHkdPGn1Zxk5pyZk6Gqi24i7y4U6wyXReL2jES45lX1YijJeYiIxQjG8bW1Yt%2F1gkxfB761q39Bj7Y3ee7TdKlAv0EeDJYRQZuAGI3LDMkHJFyhRTvI2ddEuMG4zkMJVlRQY3u%2B8m84G3znOqXvwRhHH%2F2YJNo6XPLWOvjuaW%2Bmrger7b8sp7YMaBofEkcQecdONk5t8&X-Amz-Signature=28c313438c299e989042e3b480ea3adc286ead869b683951f994692daa786703&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5G67E3M%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolAG9YVf6uCBsuqekvtZsurjUu5XqTRjqcez72SFDzAIgLe9wv%2FhYiuPe%2F9b9PhX32BuGsS%2Bt%2BABM1tGUCk5juJQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAKObhFd9U0VqTqaircA2bZJSsFBJeY0GyuffpIyon2hApiOsltrRx%2BH7dkxRcztGbhG6kvNUy2REryYNmwwC6%2FlQhbczZqdJy%2F%2B%2BxFtDJuIDKvN2k0TJR8bO47jvAO1fLj0mKSFeQJpcrNnMWT0iZ3ciDODGg%2BkQwDqa9tMb8%2FT44W%2BRqzvZxUpHYXk%2FfNrGHyliK8uQX9YP7UMozXyrt4sw0eDBKJQm%2BYFQoPT991nDBjW2JxVxHK8P1lI9%2BkgGuhJvyS2Y8Ha5li0qLdd4LTLKa%2Fj2sERgkmaRb84aJxxYkgCCUmxRD90DL5asWODY0JTSkIAFCKwpq5p5EthfvTcZ7ju13FfzWbtqQ3KJLOpECxOj6H97T87ZwdcJn64pWC76T2qy7OxqS3TCOPea38zVs8KH2BrHv32tcmPEs89a1jHzO5Z4riy%2FraxrVOtHht4soNVO5vLg6Wj6swPy3PNbblKLTdeMMkNRo75L6k0pN%2B44uBjVtn2IoQn3AKhYKJwj6BClcXlvub0iXrAZsDrajXX%2B5loqlqoDnAWbRX6vPSIpjWCgU3u3u6dZ3706k9XXh7H6kHkryGoXAjOzcOs5IV6FbzFYFPwfoU1R8wQABavSwlUh0TuzvWJTzsjWi2eFc7YwhSsKKGMImR87wGOqUBaC9VsamF30Ryxi9PLJukgHkdPGn1Zxk5pyZk6Gqi24i7y4U6wyXReL2jES45lX1YijJeYiIxQjG8bW1Yt%2F1gkxfB761q39Bj7Y3ee7TdKlAv0EeDJYRQZuAGI3LDMkHJFyhRTvI2ddEuMG4zkMJVlRQY3u%2B8m84G3znOqXvwRhHH%2F2YJNo6XPLWOvjuaW%2Bmrger7b8sp7YMaBofEkcQecdONk5t8&X-Amz-Signature=f94e3d6530c45afbd4d26bb5f5e3acab51bcf79825ac07a6788046fd80f17127&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5G67E3M%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolAG9YVf6uCBsuqekvtZsurjUu5XqTRjqcez72SFDzAIgLe9wv%2FhYiuPe%2F9b9PhX32BuGsS%2Bt%2BABM1tGUCk5juJQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAKObhFd9U0VqTqaircA2bZJSsFBJeY0GyuffpIyon2hApiOsltrRx%2BH7dkxRcztGbhG6kvNUy2REryYNmwwC6%2FlQhbczZqdJy%2F%2B%2BxFtDJuIDKvN2k0TJR8bO47jvAO1fLj0mKSFeQJpcrNnMWT0iZ3ciDODGg%2BkQwDqa9tMb8%2FT44W%2BRqzvZxUpHYXk%2FfNrGHyliK8uQX9YP7UMozXyrt4sw0eDBKJQm%2BYFQoPT991nDBjW2JxVxHK8P1lI9%2BkgGuhJvyS2Y8Ha5li0qLdd4LTLKa%2Fj2sERgkmaRb84aJxxYkgCCUmxRD90DL5asWODY0JTSkIAFCKwpq5p5EthfvTcZ7ju13FfzWbtqQ3KJLOpECxOj6H97T87ZwdcJn64pWC76T2qy7OxqS3TCOPea38zVs8KH2BrHv32tcmPEs89a1jHzO5Z4riy%2FraxrVOtHht4soNVO5vLg6Wj6swPy3PNbblKLTdeMMkNRo75L6k0pN%2B44uBjVtn2IoQn3AKhYKJwj6BClcXlvub0iXrAZsDrajXX%2B5loqlqoDnAWbRX6vPSIpjWCgU3u3u6dZ3706k9XXh7H6kHkryGoXAjOzcOs5IV6FbzFYFPwfoU1R8wQABavSwlUh0TuzvWJTzsjWi2eFc7YwhSsKKGMImR87wGOqUBaC9VsamF30Ryxi9PLJukgHkdPGn1Zxk5pyZk6Gqi24i7y4U6wyXReL2jES45lX1YijJeYiIxQjG8bW1Yt%2F1gkxfB761q39Bj7Y3ee7TdKlAv0EeDJYRQZuAGI3LDMkHJFyhRTvI2ddEuMG4zkMJVlRQY3u%2B8m84G3znOqXvwRhHH%2F2YJNo6XPLWOvjuaW%2Bmrger7b8sp7YMaBofEkcQecdONk5t8&X-Amz-Signature=700ceebe873b9dc875778f60c23f030310b7c55c2bc980774fe3494a5de5bee6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5G67E3M%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolAG9YVf6uCBsuqekvtZsurjUu5XqTRjqcez72SFDzAIgLe9wv%2FhYiuPe%2F9b9PhX32BuGsS%2Bt%2BABM1tGUCk5juJQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAKObhFd9U0VqTqaircA2bZJSsFBJeY0GyuffpIyon2hApiOsltrRx%2BH7dkxRcztGbhG6kvNUy2REryYNmwwC6%2FlQhbczZqdJy%2F%2B%2BxFtDJuIDKvN2k0TJR8bO47jvAO1fLj0mKSFeQJpcrNnMWT0iZ3ciDODGg%2BkQwDqa9tMb8%2FT44W%2BRqzvZxUpHYXk%2FfNrGHyliK8uQX9YP7UMozXyrt4sw0eDBKJQm%2BYFQoPT991nDBjW2JxVxHK8P1lI9%2BkgGuhJvyS2Y8Ha5li0qLdd4LTLKa%2Fj2sERgkmaRb84aJxxYkgCCUmxRD90DL5asWODY0JTSkIAFCKwpq5p5EthfvTcZ7ju13FfzWbtqQ3KJLOpECxOj6H97T87ZwdcJn64pWC76T2qy7OxqS3TCOPea38zVs8KH2BrHv32tcmPEs89a1jHzO5Z4riy%2FraxrVOtHht4soNVO5vLg6Wj6swPy3PNbblKLTdeMMkNRo75L6k0pN%2B44uBjVtn2IoQn3AKhYKJwj6BClcXlvub0iXrAZsDrajXX%2B5loqlqoDnAWbRX6vPSIpjWCgU3u3u6dZ3706k9XXh7H6kHkryGoXAjOzcOs5IV6FbzFYFPwfoU1R8wQABavSwlUh0TuzvWJTzsjWi2eFc7YwhSsKKGMImR87wGOqUBaC9VsamF30Ryxi9PLJukgHkdPGn1Zxk5pyZk6Gqi24i7y4U6wyXReL2jES45lX1YijJeYiIxQjG8bW1Yt%2F1gkxfB761q39Bj7Y3ee7TdKlAv0EeDJYRQZuAGI3LDMkHJFyhRTvI2ddEuMG4zkMJVlRQY3u%2B8m84G3znOqXvwRhHH%2F2YJNo6XPLWOvjuaW%2Bmrger7b8sp7YMaBofEkcQecdONk5t8&X-Amz-Signature=9d11e39af6ff757dcdb03185b13693e982e7029e90bfe401208be3fe6ff0e894&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5G67E3M%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolAG9YVf6uCBsuqekvtZsurjUu5XqTRjqcez72SFDzAIgLe9wv%2FhYiuPe%2F9b9PhX32BuGsS%2Bt%2BABM1tGUCk5juJQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAKObhFd9U0VqTqaircA2bZJSsFBJeY0GyuffpIyon2hApiOsltrRx%2BH7dkxRcztGbhG6kvNUy2REryYNmwwC6%2FlQhbczZqdJy%2F%2B%2BxFtDJuIDKvN2k0TJR8bO47jvAO1fLj0mKSFeQJpcrNnMWT0iZ3ciDODGg%2BkQwDqa9tMb8%2FT44W%2BRqzvZxUpHYXk%2FfNrGHyliK8uQX9YP7UMozXyrt4sw0eDBKJQm%2BYFQoPT991nDBjW2JxVxHK8P1lI9%2BkgGuhJvyS2Y8Ha5li0qLdd4LTLKa%2Fj2sERgkmaRb84aJxxYkgCCUmxRD90DL5asWODY0JTSkIAFCKwpq5p5EthfvTcZ7ju13FfzWbtqQ3KJLOpECxOj6H97T87ZwdcJn64pWC76T2qy7OxqS3TCOPea38zVs8KH2BrHv32tcmPEs89a1jHzO5Z4riy%2FraxrVOtHht4soNVO5vLg6Wj6swPy3PNbblKLTdeMMkNRo75L6k0pN%2B44uBjVtn2IoQn3AKhYKJwj6BClcXlvub0iXrAZsDrajXX%2B5loqlqoDnAWbRX6vPSIpjWCgU3u3u6dZ3706k9XXh7H6kHkryGoXAjOzcOs5IV6FbzFYFPwfoU1R8wQABavSwlUh0TuzvWJTzsjWi2eFc7YwhSsKKGMImR87wGOqUBaC9VsamF30Ryxi9PLJukgHkdPGn1Zxk5pyZk6Gqi24i7y4U6wyXReL2jES45lX1YijJeYiIxQjG8bW1Yt%2F1gkxfB761q39Bj7Y3ee7TdKlAv0EeDJYRQZuAGI3LDMkHJFyhRTvI2ddEuMG4zkMJVlRQY3u%2B8m84G3znOqXvwRhHH%2F2YJNo6XPLWOvjuaW%2Bmrger7b8sp7YMaBofEkcQecdONk5t8&X-Amz-Signature=b781c35508c56e8f568d2552debe13c632bafa4706bd5dc21b70b6e7838e4ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
