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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDFSVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnYiBQ9Lx0G6x1PoyEWFc9o7EDhsyvkjpqEchVkgi4bQIgNpENiTggaAydCglvvugojIaTdn%2BA244wSABahzyrepMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5BwkFrlJE%2BWHbqzCrcA9k%2BWuFUO%2B%2FxEF9En7kzxmVz3mtopU4DSdEikUson5%2FY5N6TgjElia6GZ%2BfbBycVRSHLGurrKqtLqrb4%2Bh%2BjfTqRv93QizpBsXa%2FLxPKJnjkWYRdYDY5iKOy7akvWxgjQuGvNsJq33OuumxA%2FkVI0idqgS%2BKxMfQR2aJu2p0r2j77826nz4CzOjeXeSpZOVI%2BknVOjt0xlvYtoh%2FBBBBoQsaAlgcYCMmkLr2ZXDRox8BvEP1F5WLdO3ykPpUMgW0PybaToCWFQLhDPSLe6PhHwvDUfT%2FlBAYwyPvmId%2BrhlLBqceEOaQPiH7HNf6KTo0SoScEM0xeMX3TIQU%2Bs%2B4XqnTCv7aJYx%2BnD4bq08kyg1l0fy86CY%2FMfFHr4OnJpa7rBD7gIXiiYonz95hJb2FQdf8fndQnC58mTqJFiuWzAAioVfIAl8ibpLaKlCyPxMAY9d6VU5OHH67tlxJMVPf1EmJDia%2FAOfyerLM3Xh4PQdnkgVHh3fxHJl66n5cSuwV%2BvlrlVDbGIiWz%2BF3jlEb94Z7ln5GSgfQ7vhZDh7k8iDUfzm%2B9uecbJ2JPeoL4acQa7SW5GiPYMBmejZ39wO5Tn%2F8SeoRmt%2FBNyx%2BxuknnUpkNBqVnBYNKzfHc98VMMD1v8EGOqUBKgJ9vD4EFbS8dk8vL77Nzj0QDOs%2B%2BeslO8eNFwsCCwECVkYaoN0A1UozaYf8%2B6ToneSV71k%2B%2BMK6zHOEiYbiUhwa9Lgh2NPi5P1mjchayQA1qLQygTgGZ4gGreo680%2Fl6ctwqVj1kNhcrVath3K%2FAEPhercYY8EZCGED27yyesgUaWlcWxnlUuOf%2FKmMNCOO1o4weoN9KhNFC7niLqeZecTWXKPA&X-Amz-Signature=039c9b9505a2f020906a1fa774b0dd36e4c5bb0012d72098db720028a9874928&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDFSVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnYiBQ9Lx0G6x1PoyEWFc9o7EDhsyvkjpqEchVkgi4bQIgNpENiTggaAydCglvvugojIaTdn%2BA244wSABahzyrepMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5BwkFrlJE%2BWHbqzCrcA9k%2BWuFUO%2B%2FxEF9En7kzxmVz3mtopU4DSdEikUson5%2FY5N6TgjElia6GZ%2BfbBycVRSHLGurrKqtLqrb4%2Bh%2BjfTqRv93QizpBsXa%2FLxPKJnjkWYRdYDY5iKOy7akvWxgjQuGvNsJq33OuumxA%2FkVI0idqgS%2BKxMfQR2aJu2p0r2j77826nz4CzOjeXeSpZOVI%2BknVOjt0xlvYtoh%2FBBBBoQsaAlgcYCMmkLr2ZXDRox8BvEP1F5WLdO3ykPpUMgW0PybaToCWFQLhDPSLe6PhHwvDUfT%2FlBAYwyPvmId%2BrhlLBqceEOaQPiH7HNf6KTo0SoScEM0xeMX3TIQU%2Bs%2B4XqnTCv7aJYx%2BnD4bq08kyg1l0fy86CY%2FMfFHr4OnJpa7rBD7gIXiiYonz95hJb2FQdf8fndQnC58mTqJFiuWzAAioVfIAl8ibpLaKlCyPxMAY9d6VU5OHH67tlxJMVPf1EmJDia%2FAOfyerLM3Xh4PQdnkgVHh3fxHJl66n5cSuwV%2BvlrlVDbGIiWz%2BF3jlEb94Z7ln5GSgfQ7vhZDh7k8iDUfzm%2B9uecbJ2JPeoL4acQa7SW5GiPYMBmejZ39wO5Tn%2F8SeoRmt%2FBNyx%2BxuknnUpkNBqVnBYNKzfHc98VMMD1v8EGOqUBKgJ9vD4EFbS8dk8vL77Nzj0QDOs%2B%2BeslO8eNFwsCCwECVkYaoN0A1UozaYf8%2B6ToneSV71k%2B%2BMK6zHOEiYbiUhwa9Lgh2NPi5P1mjchayQA1qLQygTgGZ4gGreo680%2Fl6ctwqVj1kNhcrVath3K%2FAEPhercYY8EZCGED27yyesgUaWlcWxnlUuOf%2FKmMNCOO1o4weoN9KhNFC7niLqeZecTWXKPA&X-Amz-Signature=093d8b348435e4ccacec36afe8835043d244d8e64ff1b84468d329b5936af208&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDFSVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnYiBQ9Lx0G6x1PoyEWFc9o7EDhsyvkjpqEchVkgi4bQIgNpENiTggaAydCglvvugojIaTdn%2BA244wSABahzyrepMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5BwkFrlJE%2BWHbqzCrcA9k%2BWuFUO%2B%2FxEF9En7kzxmVz3mtopU4DSdEikUson5%2FY5N6TgjElia6GZ%2BfbBycVRSHLGurrKqtLqrb4%2Bh%2BjfTqRv93QizpBsXa%2FLxPKJnjkWYRdYDY5iKOy7akvWxgjQuGvNsJq33OuumxA%2FkVI0idqgS%2BKxMfQR2aJu2p0r2j77826nz4CzOjeXeSpZOVI%2BknVOjt0xlvYtoh%2FBBBBoQsaAlgcYCMmkLr2ZXDRox8BvEP1F5WLdO3ykPpUMgW0PybaToCWFQLhDPSLe6PhHwvDUfT%2FlBAYwyPvmId%2BrhlLBqceEOaQPiH7HNf6KTo0SoScEM0xeMX3TIQU%2Bs%2B4XqnTCv7aJYx%2BnD4bq08kyg1l0fy86CY%2FMfFHr4OnJpa7rBD7gIXiiYonz95hJb2FQdf8fndQnC58mTqJFiuWzAAioVfIAl8ibpLaKlCyPxMAY9d6VU5OHH67tlxJMVPf1EmJDia%2FAOfyerLM3Xh4PQdnkgVHh3fxHJl66n5cSuwV%2BvlrlVDbGIiWz%2BF3jlEb94Z7ln5GSgfQ7vhZDh7k8iDUfzm%2B9uecbJ2JPeoL4acQa7SW5GiPYMBmejZ39wO5Tn%2F8SeoRmt%2FBNyx%2BxuknnUpkNBqVnBYNKzfHc98VMMD1v8EGOqUBKgJ9vD4EFbS8dk8vL77Nzj0QDOs%2B%2BeslO8eNFwsCCwECVkYaoN0A1UozaYf8%2B6ToneSV71k%2B%2BMK6zHOEiYbiUhwa9Lgh2NPi5P1mjchayQA1qLQygTgGZ4gGreo680%2Fl6ctwqVj1kNhcrVath3K%2FAEPhercYY8EZCGED27yyesgUaWlcWxnlUuOf%2FKmMNCOO1o4weoN9KhNFC7niLqeZecTWXKPA&X-Amz-Signature=63ef4d82e2f86361112b6c06d7184ce71722df705c4e48788e8f8ff9846e0198&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDFSVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnYiBQ9Lx0G6x1PoyEWFc9o7EDhsyvkjpqEchVkgi4bQIgNpENiTggaAydCglvvugojIaTdn%2BA244wSABahzyrepMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5BwkFrlJE%2BWHbqzCrcA9k%2BWuFUO%2B%2FxEF9En7kzxmVz3mtopU4DSdEikUson5%2FY5N6TgjElia6GZ%2BfbBycVRSHLGurrKqtLqrb4%2Bh%2BjfTqRv93QizpBsXa%2FLxPKJnjkWYRdYDY5iKOy7akvWxgjQuGvNsJq33OuumxA%2FkVI0idqgS%2BKxMfQR2aJu2p0r2j77826nz4CzOjeXeSpZOVI%2BknVOjt0xlvYtoh%2FBBBBoQsaAlgcYCMmkLr2ZXDRox8BvEP1F5WLdO3ykPpUMgW0PybaToCWFQLhDPSLe6PhHwvDUfT%2FlBAYwyPvmId%2BrhlLBqceEOaQPiH7HNf6KTo0SoScEM0xeMX3TIQU%2Bs%2B4XqnTCv7aJYx%2BnD4bq08kyg1l0fy86CY%2FMfFHr4OnJpa7rBD7gIXiiYonz95hJb2FQdf8fndQnC58mTqJFiuWzAAioVfIAl8ibpLaKlCyPxMAY9d6VU5OHH67tlxJMVPf1EmJDia%2FAOfyerLM3Xh4PQdnkgVHh3fxHJl66n5cSuwV%2BvlrlVDbGIiWz%2BF3jlEb94Z7ln5GSgfQ7vhZDh7k8iDUfzm%2B9uecbJ2JPeoL4acQa7SW5GiPYMBmejZ39wO5Tn%2F8SeoRmt%2FBNyx%2BxuknnUpkNBqVnBYNKzfHc98VMMD1v8EGOqUBKgJ9vD4EFbS8dk8vL77Nzj0QDOs%2B%2BeslO8eNFwsCCwECVkYaoN0A1UozaYf8%2B6ToneSV71k%2B%2BMK6zHOEiYbiUhwa9Lgh2NPi5P1mjchayQA1qLQygTgGZ4gGreo680%2Fl6ctwqVj1kNhcrVath3K%2FAEPhercYY8EZCGED27yyesgUaWlcWxnlUuOf%2FKmMNCOO1o4weoN9KhNFC7niLqeZecTWXKPA&X-Amz-Signature=ae3a0b4838ebc06fd715095eda4f659d845623c1dbf270e337b377ac98734c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDFSVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnYiBQ9Lx0G6x1PoyEWFc9o7EDhsyvkjpqEchVkgi4bQIgNpENiTggaAydCglvvugojIaTdn%2BA244wSABahzyrepMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5BwkFrlJE%2BWHbqzCrcA9k%2BWuFUO%2B%2FxEF9En7kzxmVz3mtopU4DSdEikUson5%2FY5N6TgjElia6GZ%2BfbBycVRSHLGurrKqtLqrb4%2Bh%2BjfTqRv93QizpBsXa%2FLxPKJnjkWYRdYDY5iKOy7akvWxgjQuGvNsJq33OuumxA%2FkVI0idqgS%2BKxMfQR2aJu2p0r2j77826nz4CzOjeXeSpZOVI%2BknVOjt0xlvYtoh%2FBBBBoQsaAlgcYCMmkLr2ZXDRox8BvEP1F5WLdO3ykPpUMgW0PybaToCWFQLhDPSLe6PhHwvDUfT%2FlBAYwyPvmId%2BrhlLBqceEOaQPiH7HNf6KTo0SoScEM0xeMX3TIQU%2Bs%2B4XqnTCv7aJYx%2BnD4bq08kyg1l0fy86CY%2FMfFHr4OnJpa7rBD7gIXiiYonz95hJb2FQdf8fndQnC58mTqJFiuWzAAioVfIAl8ibpLaKlCyPxMAY9d6VU5OHH67tlxJMVPf1EmJDia%2FAOfyerLM3Xh4PQdnkgVHh3fxHJl66n5cSuwV%2BvlrlVDbGIiWz%2BF3jlEb94Z7ln5GSgfQ7vhZDh7k8iDUfzm%2B9uecbJ2JPeoL4acQa7SW5GiPYMBmejZ39wO5Tn%2F8SeoRmt%2FBNyx%2BxuknnUpkNBqVnBYNKzfHc98VMMD1v8EGOqUBKgJ9vD4EFbS8dk8vL77Nzj0QDOs%2B%2BeslO8eNFwsCCwECVkYaoN0A1UozaYf8%2B6ToneSV71k%2B%2BMK6zHOEiYbiUhwa9Lgh2NPi5P1mjchayQA1qLQygTgGZ4gGreo680%2Fl6ctwqVj1kNhcrVath3K%2FAEPhercYY8EZCGED27yyesgUaWlcWxnlUuOf%2FKmMNCOO1o4weoN9KhNFC7niLqeZecTWXKPA&X-Amz-Signature=e14c3bf687904f2e310966f8bbae0fe8196e2feea334a860e0330d2bf200b595&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
