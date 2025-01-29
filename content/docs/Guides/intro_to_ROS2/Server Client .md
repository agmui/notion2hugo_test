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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AXMLC4X%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCynm0xegw8X7k%2BXAZ1qAf1qadpnKdf%2B54f6WiG6KmE2QIgfhQQgoc8XSRv1TE5gA%2FuuNOT294fCXe6bnPKHlEu8GoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBscvDJ0%2BnVjJCJv6CrcAx%2BuuDxo5CVeymQjmSg4fVmt5%2FHtKYkG348Uufz6CsouAwE2xqWzzDJdAHj3KKwjy1uOXcTALJbM10UNLgJfzIHx6J676JXFoqpvPSnsVaq4bIwk0MlPNcrYJkJrYYZZfkkNcHr3YBhYfxJZrOyZpVd0XHW9k8zTriZvQ4tMbnU%2FfAvOqVv%2Bl2UKXjB802x%2FrwoWDPz0GSRyVhEZKTuq%2Ftpd%2FSuXvoUJWzqkJypeyQ2XbE7%2FgbZ2WD%2Fv1rD9n3bW0aDJxR%2BOBabNP7sEDt4SgJVsP8t391RBzj1vov91QqCrLovBF4fgndeCbmYEvDcatqZsoUGkuHb1FSlOW51wWOV620SxmNcESUwVJaDs9lXLkjxliKkbGjHhTIkmKVD9kPeC1L2yt1%2FLkPMeOF1lcqfVv7NimbeFuuHlF1eLK9OZQCjUqd7XoBqH3ejSO9wPmj8%2FJOhpjRUq3VOdKKSxagmnsfeQVhq6ZuQFx37APnNnR%2B0TVznFCLdRdAvdZ0bUbwvGy4JsS75KcvaExtDOyhxVwdTrmB%2BnaJo6wefwZJ238YHZev6y0mT32ApiZSyetNeqDgZk8TxenBQDEdF93MFOJgkypEek3z41N4Mu8e2eNyOe%2FybD7cX2p7A1MNWw6LwGOqUB7o%2B6sSntoPYWB%2FO0NCobBApiGog%2Bfq8erfht5FEQleDQgZhWunY%2BZSEReeV0OWRbpkhI0mhlqkd%2B0InkYjlh61H1sNNXsAallKyIcO6iHOvvr4PoJXVJiCbYH1U234LjbUzRRj4SpRD8CbnkMT0TMmbTtpaO8vZ9K6lobC6Z7CEuAuYTaV%2BwTgbNAqzq3Ja7gxI08yiIDuuX4AhcEcLD15TYmohP&X-Amz-Signature=761df668723c131d81b97a26574922eb113d1684611e2285f9924bbc09f6c169&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AXMLC4X%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCynm0xegw8X7k%2BXAZ1qAf1qadpnKdf%2B54f6WiG6KmE2QIgfhQQgoc8XSRv1TE5gA%2FuuNOT294fCXe6bnPKHlEu8GoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBscvDJ0%2BnVjJCJv6CrcAx%2BuuDxo5CVeymQjmSg4fVmt5%2FHtKYkG348Uufz6CsouAwE2xqWzzDJdAHj3KKwjy1uOXcTALJbM10UNLgJfzIHx6J676JXFoqpvPSnsVaq4bIwk0MlPNcrYJkJrYYZZfkkNcHr3YBhYfxJZrOyZpVd0XHW9k8zTriZvQ4tMbnU%2FfAvOqVv%2Bl2UKXjB802x%2FrwoWDPz0GSRyVhEZKTuq%2Ftpd%2FSuXvoUJWzqkJypeyQ2XbE7%2FgbZ2WD%2Fv1rD9n3bW0aDJxR%2BOBabNP7sEDt4SgJVsP8t391RBzj1vov91QqCrLovBF4fgndeCbmYEvDcatqZsoUGkuHb1FSlOW51wWOV620SxmNcESUwVJaDs9lXLkjxliKkbGjHhTIkmKVD9kPeC1L2yt1%2FLkPMeOF1lcqfVv7NimbeFuuHlF1eLK9OZQCjUqd7XoBqH3ejSO9wPmj8%2FJOhpjRUq3VOdKKSxagmnsfeQVhq6ZuQFx37APnNnR%2B0TVznFCLdRdAvdZ0bUbwvGy4JsS75KcvaExtDOyhxVwdTrmB%2BnaJo6wefwZJ238YHZev6y0mT32ApiZSyetNeqDgZk8TxenBQDEdF93MFOJgkypEek3z41N4Mu8e2eNyOe%2FybD7cX2p7A1MNWw6LwGOqUB7o%2B6sSntoPYWB%2FO0NCobBApiGog%2Bfq8erfht5FEQleDQgZhWunY%2BZSEReeV0OWRbpkhI0mhlqkd%2B0InkYjlh61H1sNNXsAallKyIcO6iHOvvr4PoJXVJiCbYH1U234LjbUzRRj4SpRD8CbnkMT0TMmbTtpaO8vZ9K6lobC6Z7CEuAuYTaV%2BwTgbNAqzq3Ja7gxI08yiIDuuX4AhcEcLD15TYmohP&X-Amz-Signature=d01d05f28f134f45bf391c4c256f64003bbe24081b5e5d550b930fe24392f838&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AXMLC4X%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCynm0xegw8X7k%2BXAZ1qAf1qadpnKdf%2B54f6WiG6KmE2QIgfhQQgoc8XSRv1TE5gA%2FuuNOT294fCXe6bnPKHlEu8GoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBscvDJ0%2BnVjJCJv6CrcAx%2BuuDxo5CVeymQjmSg4fVmt5%2FHtKYkG348Uufz6CsouAwE2xqWzzDJdAHj3KKwjy1uOXcTALJbM10UNLgJfzIHx6J676JXFoqpvPSnsVaq4bIwk0MlPNcrYJkJrYYZZfkkNcHr3YBhYfxJZrOyZpVd0XHW9k8zTriZvQ4tMbnU%2FfAvOqVv%2Bl2UKXjB802x%2FrwoWDPz0GSRyVhEZKTuq%2Ftpd%2FSuXvoUJWzqkJypeyQ2XbE7%2FgbZ2WD%2Fv1rD9n3bW0aDJxR%2BOBabNP7sEDt4SgJVsP8t391RBzj1vov91QqCrLovBF4fgndeCbmYEvDcatqZsoUGkuHb1FSlOW51wWOV620SxmNcESUwVJaDs9lXLkjxliKkbGjHhTIkmKVD9kPeC1L2yt1%2FLkPMeOF1lcqfVv7NimbeFuuHlF1eLK9OZQCjUqd7XoBqH3ejSO9wPmj8%2FJOhpjRUq3VOdKKSxagmnsfeQVhq6ZuQFx37APnNnR%2B0TVznFCLdRdAvdZ0bUbwvGy4JsS75KcvaExtDOyhxVwdTrmB%2BnaJo6wefwZJ238YHZev6y0mT32ApiZSyetNeqDgZk8TxenBQDEdF93MFOJgkypEek3z41N4Mu8e2eNyOe%2FybD7cX2p7A1MNWw6LwGOqUB7o%2B6sSntoPYWB%2FO0NCobBApiGog%2Bfq8erfht5FEQleDQgZhWunY%2BZSEReeV0OWRbpkhI0mhlqkd%2B0InkYjlh61H1sNNXsAallKyIcO6iHOvvr4PoJXVJiCbYH1U234LjbUzRRj4SpRD8CbnkMT0TMmbTtpaO8vZ9K6lobC6Z7CEuAuYTaV%2BwTgbNAqzq3Ja7gxI08yiIDuuX4AhcEcLD15TYmohP&X-Amz-Signature=2588cdc96675e0416820c7f03efaee416ed350a4a0a8e2e0386f8641c29193cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AXMLC4X%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCynm0xegw8X7k%2BXAZ1qAf1qadpnKdf%2B54f6WiG6KmE2QIgfhQQgoc8XSRv1TE5gA%2FuuNOT294fCXe6bnPKHlEu8GoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBscvDJ0%2BnVjJCJv6CrcAx%2BuuDxo5CVeymQjmSg4fVmt5%2FHtKYkG348Uufz6CsouAwE2xqWzzDJdAHj3KKwjy1uOXcTALJbM10UNLgJfzIHx6J676JXFoqpvPSnsVaq4bIwk0MlPNcrYJkJrYYZZfkkNcHr3YBhYfxJZrOyZpVd0XHW9k8zTriZvQ4tMbnU%2FfAvOqVv%2Bl2UKXjB802x%2FrwoWDPz0GSRyVhEZKTuq%2Ftpd%2FSuXvoUJWzqkJypeyQ2XbE7%2FgbZ2WD%2Fv1rD9n3bW0aDJxR%2BOBabNP7sEDt4SgJVsP8t391RBzj1vov91QqCrLovBF4fgndeCbmYEvDcatqZsoUGkuHb1FSlOW51wWOV620SxmNcESUwVJaDs9lXLkjxliKkbGjHhTIkmKVD9kPeC1L2yt1%2FLkPMeOF1lcqfVv7NimbeFuuHlF1eLK9OZQCjUqd7XoBqH3ejSO9wPmj8%2FJOhpjRUq3VOdKKSxagmnsfeQVhq6ZuQFx37APnNnR%2B0TVznFCLdRdAvdZ0bUbwvGy4JsS75KcvaExtDOyhxVwdTrmB%2BnaJo6wefwZJ238YHZev6y0mT32ApiZSyetNeqDgZk8TxenBQDEdF93MFOJgkypEek3z41N4Mu8e2eNyOe%2FybD7cX2p7A1MNWw6LwGOqUB7o%2B6sSntoPYWB%2FO0NCobBApiGog%2Bfq8erfht5FEQleDQgZhWunY%2BZSEReeV0OWRbpkhI0mhlqkd%2B0InkYjlh61H1sNNXsAallKyIcO6iHOvvr4PoJXVJiCbYH1U234LjbUzRRj4SpRD8CbnkMT0TMmbTtpaO8vZ9K6lobC6Z7CEuAuYTaV%2BwTgbNAqzq3Ja7gxI08yiIDuuX4AhcEcLD15TYmohP&X-Amz-Signature=4990fa7446bca3015a98a038985ab12ca46842f20539a89085ef461f39195a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AXMLC4X%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCynm0xegw8X7k%2BXAZ1qAf1qadpnKdf%2B54f6WiG6KmE2QIgfhQQgoc8XSRv1TE5gA%2FuuNOT294fCXe6bnPKHlEu8GoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBscvDJ0%2BnVjJCJv6CrcAx%2BuuDxo5CVeymQjmSg4fVmt5%2FHtKYkG348Uufz6CsouAwE2xqWzzDJdAHj3KKwjy1uOXcTALJbM10UNLgJfzIHx6J676JXFoqpvPSnsVaq4bIwk0MlPNcrYJkJrYYZZfkkNcHr3YBhYfxJZrOyZpVd0XHW9k8zTriZvQ4tMbnU%2FfAvOqVv%2Bl2UKXjB802x%2FrwoWDPz0GSRyVhEZKTuq%2Ftpd%2FSuXvoUJWzqkJypeyQ2XbE7%2FgbZ2WD%2Fv1rD9n3bW0aDJxR%2BOBabNP7sEDt4SgJVsP8t391RBzj1vov91QqCrLovBF4fgndeCbmYEvDcatqZsoUGkuHb1FSlOW51wWOV620SxmNcESUwVJaDs9lXLkjxliKkbGjHhTIkmKVD9kPeC1L2yt1%2FLkPMeOF1lcqfVv7NimbeFuuHlF1eLK9OZQCjUqd7XoBqH3ejSO9wPmj8%2FJOhpjRUq3VOdKKSxagmnsfeQVhq6ZuQFx37APnNnR%2B0TVznFCLdRdAvdZ0bUbwvGy4JsS75KcvaExtDOyhxVwdTrmB%2BnaJo6wefwZJ238YHZev6y0mT32ApiZSyetNeqDgZk8TxenBQDEdF93MFOJgkypEek3z41N4Mu8e2eNyOe%2FybD7cX2p7A1MNWw6LwGOqUB7o%2B6sSntoPYWB%2FO0NCobBApiGog%2Bfq8erfht5FEQleDQgZhWunY%2BZSEReeV0OWRbpkhI0mhlqkd%2B0InkYjlh61H1sNNXsAallKyIcO6iHOvvr4PoJXVJiCbYH1U234LjbUzRRj4SpRD8CbnkMT0TMmbTtpaO8vZ9K6lobC6Z7CEuAuYTaV%2BwTgbNAqzq3Ja7gxI08yiIDuuX4AhcEcLD15TYmohP&X-Amz-Signature=d89de2aa40a3ef450edb2b02b9431462af8f25bba6abf4cf8caac81b5e56e19e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
