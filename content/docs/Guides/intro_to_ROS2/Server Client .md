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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNPM2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBFxRnTp00E3uuCjTLCEptE8vlI%2Bv5fI6U6QPo4jyBaBAiBYQqItAKl5UMfDkTAiEyZPI55jEog5Fdv78nXsaR0poyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7Rl8jkKxQG6uVbK1KtwDMzN1WQ009%2BSlSCqvLsrNMskrJ5Db3v9fr7EpVVlME6%2BooXl%2B0%2BiOsJasS1CNwwR3%2BAV17%2FplnWhdHzZsDDYYm%2Bm6CVMfdsUAJozIEZqERouXp6rh2bq%2BG3FVoAcIFSgg8AH8YlkWGNDC%2FcJK3cuL%2B4ZOlBUdmoFIwXWVO3N8a6CVn%2BGlvBAblph6hJhoJaTTOEnGH%2BkPlamykje%2Ba9LRWvtD0mXbf%2BYjhWNUW2JRdHwZuyv3ROtDsaYDPAxv%2FEbzNL57ygRY1Y%2FlAX9y6Bqv5ZoRcRNu4NQIurn8DgKzNsq%2FGzdPjUgKRuUCBnoiHoabFpv%2FejqveWVb%2FFwaB1OoGGHy9O6r7NH9%2BOALUdTkKmyCriAVQr0%2FbrlgohtBSD0wlMz831WkkSU4r3Io050KxnBxEbwTYa3zIm2FC1ir9%2F0VxjZezFo%2Be%2B8E2uQbnIMSvoHVlNXCfW%2FJHfA0nER0GRl%2Bvdc1X8%2BilB3L8JNwzYcf3zBn%2BV4cjk5oq9EKw3MWWZYPspV0HrN%2FUi2yH2SoEgFVT%2FO37x2NSuwpKrSXkYm%2BjbHzxCcffZHdUhgMxfQ4lJ8WUCs%2Bhcte20fxG7E74lKrLFQRU%2ByrMYlLpc6JzH5oI4dz9P9BKougXesw%2FduhvwY6pgExZLciBNuGXLExOyGnl%2B9ImTh3xIYLBi3E68BmU1ZqOm%2FL3IAhbfrXggp33Nk4pnbYUpJUMYssIwyiVbuMLkwrHXJHBc2UYZYkjlcufq7s4G2cuDvk9%2FuVoKVu46o9C2lluQiOUdfPTfcT4Ho%2FadnYUoLDO7xxcNcEljOmExJFBd%2FUtphlAQD%2FLAhumsL68gmlYaxq3ebybVWTdNVtx0oX29Neqzdk&X-Amz-Signature=2ab8e15a8d6964712e84d9b1eba2735fc664251d79d0bfbdfa945d238044e573&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNPM2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBFxRnTp00E3uuCjTLCEptE8vlI%2Bv5fI6U6QPo4jyBaBAiBYQqItAKl5UMfDkTAiEyZPI55jEog5Fdv78nXsaR0poyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7Rl8jkKxQG6uVbK1KtwDMzN1WQ009%2BSlSCqvLsrNMskrJ5Db3v9fr7EpVVlME6%2BooXl%2B0%2BiOsJasS1CNwwR3%2BAV17%2FplnWhdHzZsDDYYm%2Bm6CVMfdsUAJozIEZqERouXp6rh2bq%2BG3FVoAcIFSgg8AH8YlkWGNDC%2FcJK3cuL%2B4ZOlBUdmoFIwXWVO3N8a6CVn%2BGlvBAblph6hJhoJaTTOEnGH%2BkPlamykje%2Ba9LRWvtD0mXbf%2BYjhWNUW2JRdHwZuyv3ROtDsaYDPAxv%2FEbzNL57ygRY1Y%2FlAX9y6Bqv5ZoRcRNu4NQIurn8DgKzNsq%2FGzdPjUgKRuUCBnoiHoabFpv%2FejqveWVb%2FFwaB1OoGGHy9O6r7NH9%2BOALUdTkKmyCriAVQr0%2FbrlgohtBSD0wlMz831WkkSU4r3Io050KxnBxEbwTYa3zIm2FC1ir9%2F0VxjZezFo%2Be%2B8E2uQbnIMSvoHVlNXCfW%2FJHfA0nER0GRl%2Bvdc1X8%2BilB3L8JNwzYcf3zBn%2BV4cjk5oq9EKw3MWWZYPspV0HrN%2FUi2yH2SoEgFVT%2FO37x2NSuwpKrSXkYm%2BjbHzxCcffZHdUhgMxfQ4lJ8WUCs%2Bhcte20fxG7E74lKrLFQRU%2ByrMYlLpc6JzH5oI4dz9P9BKougXesw%2FduhvwY6pgExZLciBNuGXLExOyGnl%2B9ImTh3xIYLBi3E68BmU1ZqOm%2FL3IAhbfrXggp33Nk4pnbYUpJUMYssIwyiVbuMLkwrHXJHBc2UYZYkjlcufq7s4G2cuDvk9%2FuVoKVu46o9C2lluQiOUdfPTfcT4Ho%2FadnYUoLDO7xxcNcEljOmExJFBd%2FUtphlAQD%2FLAhumsL68gmlYaxq3ebybVWTdNVtx0oX29Neqzdk&X-Amz-Signature=372c74686d6a1a898e0538f5680020e369265222f72ca35ee3150e28c0ab355e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNPM2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBFxRnTp00E3uuCjTLCEptE8vlI%2Bv5fI6U6QPo4jyBaBAiBYQqItAKl5UMfDkTAiEyZPI55jEog5Fdv78nXsaR0poyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7Rl8jkKxQG6uVbK1KtwDMzN1WQ009%2BSlSCqvLsrNMskrJ5Db3v9fr7EpVVlME6%2BooXl%2B0%2BiOsJasS1CNwwR3%2BAV17%2FplnWhdHzZsDDYYm%2Bm6CVMfdsUAJozIEZqERouXp6rh2bq%2BG3FVoAcIFSgg8AH8YlkWGNDC%2FcJK3cuL%2B4ZOlBUdmoFIwXWVO3N8a6CVn%2BGlvBAblph6hJhoJaTTOEnGH%2BkPlamykje%2Ba9LRWvtD0mXbf%2BYjhWNUW2JRdHwZuyv3ROtDsaYDPAxv%2FEbzNL57ygRY1Y%2FlAX9y6Bqv5ZoRcRNu4NQIurn8DgKzNsq%2FGzdPjUgKRuUCBnoiHoabFpv%2FejqveWVb%2FFwaB1OoGGHy9O6r7NH9%2BOALUdTkKmyCriAVQr0%2FbrlgohtBSD0wlMz831WkkSU4r3Io050KxnBxEbwTYa3zIm2FC1ir9%2F0VxjZezFo%2Be%2B8E2uQbnIMSvoHVlNXCfW%2FJHfA0nER0GRl%2Bvdc1X8%2BilB3L8JNwzYcf3zBn%2BV4cjk5oq9EKw3MWWZYPspV0HrN%2FUi2yH2SoEgFVT%2FO37x2NSuwpKrSXkYm%2BjbHzxCcffZHdUhgMxfQ4lJ8WUCs%2Bhcte20fxG7E74lKrLFQRU%2ByrMYlLpc6JzH5oI4dz9P9BKougXesw%2FduhvwY6pgExZLciBNuGXLExOyGnl%2B9ImTh3xIYLBi3E68BmU1ZqOm%2FL3IAhbfrXggp33Nk4pnbYUpJUMYssIwyiVbuMLkwrHXJHBc2UYZYkjlcufq7s4G2cuDvk9%2FuVoKVu46o9C2lluQiOUdfPTfcT4Ho%2FadnYUoLDO7xxcNcEljOmExJFBd%2FUtphlAQD%2FLAhumsL68gmlYaxq3ebybVWTdNVtx0oX29Neqzdk&X-Amz-Signature=ce4385e9a2d56355670c167f2aad1b4adffdc005033f02ed3187c145e78b9ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNPM2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBFxRnTp00E3uuCjTLCEptE8vlI%2Bv5fI6U6QPo4jyBaBAiBYQqItAKl5UMfDkTAiEyZPI55jEog5Fdv78nXsaR0poyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7Rl8jkKxQG6uVbK1KtwDMzN1WQ009%2BSlSCqvLsrNMskrJ5Db3v9fr7EpVVlME6%2BooXl%2B0%2BiOsJasS1CNwwR3%2BAV17%2FplnWhdHzZsDDYYm%2Bm6CVMfdsUAJozIEZqERouXp6rh2bq%2BG3FVoAcIFSgg8AH8YlkWGNDC%2FcJK3cuL%2B4ZOlBUdmoFIwXWVO3N8a6CVn%2BGlvBAblph6hJhoJaTTOEnGH%2BkPlamykje%2Ba9LRWvtD0mXbf%2BYjhWNUW2JRdHwZuyv3ROtDsaYDPAxv%2FEbzNL57ygRY1Y%2FlAX9y6Bqv5ZoRcRNu4NQIurn8DgKzNsq%2FGzdPjUgKRuUCBnoiHoabFpv%2FejqveWVb%2FFwaB1OoGGHy9O6r7NH9%2BOALUdTkKmyCriAVQr0%2FbrlgohtBSD0wlMz831WkkSU4r3Io050KxnBxEbwTYa3zIm2FC1ir9%2F0VxjZezFo%2Be%2B8E2uQbnIMSvoHVlNXCfW%2FJHfA0nER0GRl%2Bvdc1X8%2BilB3L8JNwzYcf3zBn%2BV4cjk5oq9EKw3MWWZYPspV0HrN%2FUi2yH2SoEgFVT%2FO37x2NSuwpKrSXkYm%2BjbHzxCcffZHdUhgMxfQ4lJ8WUCs%2Bhcte20fxG7E74lKrLFQRU%2ByrMYlLpc6JzH5oI4dz9P9BKougXesw%2FduhvwY6pgExZLciBNuGXLExOyGnl%2B9ImTh3xIYLBi3E68BmU1ZqOm%2FL3IAhbfrXggp33Nk4pnbYUpJUMYssIwyiVbuMLkwrHXJHBc2UYZYkjlcufq7s4G2cuDvk9%2FuVoKVu46o9C2lluQiOUdfPTfcT4Ho%2FadnYUoLDO7xxcNcEljOmExJFBd%2FUtphlAQD%2FLAhumsL68gmlYaxq3ebybVWTdNVtx0oX29Neqzdk&X-Amz-Signature=f877ef36bc39d0ffd7dd5c26aca99b157b4ea34a8f996c33133c531370cc8581&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNPM2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBFxRnTp00E3uuCjTLCEptE8vlI%2Bv5fI6U6QPo4jyBaBAiBYQqItAKl5UMfDkTAiEyZPI55jEog5Fdv78nXsaR0poyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7Rl8jkKxQG6uVbK1KtwDMzN1WQ009%2BSlSCqvLsrNMskrJ5Db3v9fr7EpVVlME6%2BooXl%2B0%2BiOsJasS1CNwwR3%2BAV17%2FplnWhdHzZsDDYYm%2Bm6CVMfdsUAJozIEZqERouXp6rh2bq%2BG3FVoAcIFSgg8AH8YlkWGNDC%2FcJK3cuL%2B4ZOlBUdmoFIwXWVO3N8a6CVn%2BGlvBAblph6hJhoJaTTOEnGH%2BkPlamykje%2Ba9LRWvtD0mXbf%2BYjhWNUW2JRdHwZuyv3ROtDsaYDPAxv%2FEbzNL57ygRY1Y%2FlAX9y6Bqv5ZoRcRNu4NQIurn8DgKzNsq%2FGzdPjUgKRuUCBnoiHoabFpv%2FejqveWVb%2FFwaB1OoGGHy9O6r7NH9%2BOALUdTkKmyCriAVQr0%2FbrlgohtBSD0wlMz831WkkSU4r3Io050KxnBxEbwTYa3zIm2FC1ir9%2F0VxjZezFo%2Be%2B8E2uQbnIMSvoHVlNXCfW%2FJHfA0nER0GRl%2Bvdc1X8%2BilB3L8JNwzYcf3zBn%2BV4cjk5oq9EKw3MWWZYPspV0HrN%2FUi2yH2SoEgFVT%2FO37x2NSuwpKrSXkYm%2BjbHzxCcffZHdUhgMxfQ4lJ8WUCs%2Bhcte20fxG7E74lKrLFQRU%2ByrMYlLpc6JzH5oI4dz9P9BKougXesw%2FduhvwY6pgExZLciBNuGXLExOyGnl%2B9ImTh3xIYLBi3E68BmU1ZqOm%2FL3IAhbfrXggp33Nk4pnbYUpJUMYssIwyiVbuMLkwrHXJHBc2UYZYkjlcufq7s4G2cuDvk9%2FuVoKVu46o9C2lluQiOUdfPTfcT4Ho%2FadnYUoLDO7xxcNcEljOmExJFBd%2FUtphlAQD%2FLAhumsL68gmlYaxq3ebybVWTdNVtx0oX29Neqzdk&X-Amz-Signature=868c2dfeb3cb94acfe64288b27064767c03428f1bdaa5208a27e714513e55ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
