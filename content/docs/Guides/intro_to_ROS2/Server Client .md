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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLJCRZ3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFBJCCfyHsm%2BAMj0andfFw%2FMVmexzLJOqDJKnekLB7wsAiBdin4aAuNJkOoPWz93ofq956JmViBZRn4eHZxVlOpHYyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSDyaGHjsML6%2FSsXKtwDLzaJhk%2FWC%2FXYzLDGFtU5Ag8oADk8Ri7r%2FevNciQovzO3L%2BGRu5XUxTMpNyX3gNxV7LvxUJvJOKi3ay1DrnOXhF27WVXtIxBy71x47V9M2uWfwkBdmca5dsKjA2Tg1pZbw74K5Y6ww56E9u7Z3W7vMCDgGpnSGCkuafA3nQIub1pnjO6%2FU1Od4Q7IkQZgxtqya2TvLSS4aZtA9Y%2Bw6e37wd807Ye1ACjYPPPWfH%2FE0QFeum%2BPYESs2rLrgJQqj%2Bl3Cwyngu%2BKv1erkQiZEmC%2BX%2F47CrG%2BiQVlkcTkdUKoAvFtISfZjRzsLSVgAAQTfrGQsqkVj7LY96qcnX2eIgNJXtEQKN%2B%2FnEVZbHHvrA%2Fxs8%2BGduCwui%2FFjSi0gCpWhwgmtZ9qCwxRB92ncOSuurMu4hueQWAy3quAuvxLnZJ3ZxG3nP0wSERyh4%2BMuzcaCEA9cms28uPzxtUg9TbTh8dqxShQYukh4g%2FKaXnozd%2F%2BYRDX9eq8UP%2F7crvDckrTIMMrH0zx2YtcX4nxviQGJfGRgA%2Bk4EwljLi%2Bw3%2FXJqeoYy3NLAl5hEFE%2BKgw7%2F%2BVdlnoP2d4%2Blle7AcoNLTPDYKYE%2F9Cj3yAoP15c9JHHrH3rsC8xbPMKzPwjIUgQGIwqYqdwAY6pgGXeYBYkxeI7A%2B6IsvPL0Qs4oezXwlTJobOwzRPSaQSz5mhUwSO9%2BIjs7uVgoDuC%2FAtob8%2BmXVaUWfFE6clX3FPIJyXDyC6tGnDgi1a%2BHHR%2B21eK6ATEwGv1Uw81Y358arDyPzu2pepqVRF02hK5VG0bKd%2BZcTDMD14Sv9NA2XNKEFRglCsYRYr7gMTxcqZg9mi2OfBx0%2F%2BRH%2BdfwAcsiK4QT833cCN&X-Amz-Signature=de103ee78ca50488a2650a0d27154f5a3ac501d1721fd5a2745db94d24bff2a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLJCRZ3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFBJCCfyHsm%2BAMj0andfFw%2FMVmexzLJOqDJKnekLB7wsAiBdin4aAuNJkOoPWz93ofq956JmViBZRn4eHZxVlOpHYyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSDyaGHjsML6%2FSsXKtwDLzaJhk%2FWC%2FXYzLDGFtU5Ag8oADk8Ri7r%2FevNciQovzO3L%2BGRu5XUxTMpNyX3gNxV7LvxUJvJOKi3ay1DrnOXhF27WVXtIxBy71x47V9M2uWfwkBdmca5dsKjA2Tg1pZbw74K5Y6ww56E9u7Z3W7vMCDgGpnSGCkuafA3nQIub1pnjO6%2FU1Od4Q7IkQZgxtqya2TvLSS4aZtA9Y%2Bw6e37wd807Ye1ACjYPPPWfH%2FE0QFeum%2BPYESs2rLrgJQqj%2Bl3Cwyngu%2BKv1erkQiZEmC%2BX%2F47CrG%2BiQVlkcTkdUKoAvFtISfZjRzsLSVgAAQTfrGQsqkVj7LY96qcnX2eIgNJXtEQKN%2B%2FnEVZbHHvrA%2Fxs8%2BGduCwui%2FFjSi0gCpWhwgmtZ9qCwxRB92ncOSuurMu4hueQWAy3quAuvxLnZJ3ZxG3nP0wSERyh4%2BMuzcaCEA9cms28uPzxtUg9TbTh8dqxShQYukh4g%2FKaXnozd%2F%2BYRDX9eq8UP%2F7crvDckrTIMMrH0zx2YtcX4nxviQGJfGRgA%2Bk4EwljLi%2Bw3%2FXJqeoYy3NLAl5hEFE%2BKgw7%2F%2BVdlnoP2d4%2Blle7AcoNLTPDYKYE%2F9Cj3yAoP15c9JHHrH3rsC8xbPMKzPwjIUgQGIwqYqdwAY6pgGXeYBYkxeI7A%2B6IsvPL0Qs4oezXwlTJobOwzRPSaQSz5mhUwSO9%2BIjs7uVgoDuC%2FAtob8%2BmXVaUWfFE6clX3FPIJyXDyC6tGnDgi1a%2BHHR%2B21eK6ATEwGv1Uw81Y358arDyPzu2pepqVRF02hK5VG0bKd%2BZcTDMD14Sv9NA2XNKEFRglCsYRYr7gMTxcqZg9mi2OfBx0%2F%2BRH%2BdfwAcsiK4QT833cCN&X-Amz-Signature=7f5a5d7c5ed5e583824c4be057ebd5b046b5ec45fc0a4a066fde124a0a04236d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLJCRZ3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFBJCCfyHsm%2BAMj0andfFw%2FMVmexzLJOqDJKnekLB7wsAiBdin4aAuNJkOoPWz93ofq956JmViBZRn4eHZxVlOpHYyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSDyaGHjsML6%2FSsXKtwDLzaJhk%2FWC%2FXYzLDGFtU5Ag8oADk8Ri7r%2FevNciQovzO3L%2BGRu5XUxTMpNyX3gNxV7LvxUJvJOKi3ay1DrnOXhF27WVXtIxBy71x47V9M2uWfwkBdmca5dsKjA2Tg1pZbw74K5Y6ww56E9u7Z3W7vMCDgGpnSGCkuafA3nQIub1pnjO6%2FU1Od4Q7IkQZgxtqya2TvLSS4aZtA9Y%2Bw6e37wd807Ye1ACjYPPPWfH%2FE0QFeum%2BPYESs2rLrgJQqj%2Bl3Cwyngu%2BKv1erkQiZEmC%2BX%2F47CrG%2BiQVlkcTkdUKoAvFtISfZjRzsLSVgAAQTfrGQsqkVj7LY96qcnX2eIgNJXtEQKN%2B%2FnEVZbHHvrA%2Fxs8%2BGduCwui%2FFjSi0gCpWhwgmtZ9qCwxRB92ncOSuurMu4hueQWAy3quAuvxLnZJ3ZxG3nP0wSERyh4%2BMuzcaCEA9cms28uPzxtUg9TbTh8dqxShQYukh4g%2FKaXnozd%2F%2BYRDX9eq8UP%2F7crvDckrTIMMrH0zx2YtcX4nxviQGJfGRgA%2Bk4EwljLi%2Bw3%2FXJqeoYy3NLAl5hEFE%2BKgw7%2F%2BVdlnoP2d4%2Blle7AcoNLTPDYKYE%2F9Cj3yAoP15c9JHHrH3rsC8xbPMKzPwjIUgQGIwqYqdwAY6pgGXeYBYkxeI7A%2B6IsvPL0Qs4oezXwlTJobOwzRPSaQSz5mhUwSO9%2BIjs7uVgoDuC%2FAtob8%2BmXVaUWfFE6clX3FPIJyXDyC6tGnDgi1a%2BHHR%2B21eK6ATEwGv1Uw81Y358arDyPzu2pepqVRF02hK5VG0bKd%2BZcTDMD14Sv9NA2XNKEFRglCsYRYr7gMTxcqZg9mi2OfBx0%2F%2BRH%2BdfwAcsiK4QT833cCN&X-Amz-Signature=51f348a54b8754316fc475fbbec7d40c5168ed9fb0b35873a91b3f31b8e93cca&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLJCRZ3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFBJCCfyHsm%2BAMj0andfFw%2FMVmexzLJOqDJKnekLB7wsAiBdin4aAuNJkOoPWz93ofq956JmViBZRn4eHZxVlOpHYyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSDyaGHjsML6%2FSsXKtwDLzaJhk%2FWC%2FXYzLDGFtU5Ag8oADk8Ri7r%2FevNciQovzO3L%2BGRu5XUxTMpNyX3gNxV7LvxUJvJOKi3ay1DrnOXhF27WVXtIxBy71x47V9M2uWfwkBdmca5dsKjA2Tg1pZbw74K5Y6ww56E9u7Z3W7vMCDgGpnSGCkuafA3nQIub1pnjO6%2FU1Od4Q7IkQZgxtqya2TvLSS4aZtA9Y%2Bw6e37wd807Ye1ACjYPPPWfH%2FE0QFeum%2BPYESs2rLrgJQqj%2Bl3Cwyngu%2BKv1erkQiZEmC%2BX%2F47CrG%2BiQVlkcTkdUKoAvFtISfZjRzsLSVgAAQTfrGQsqkVj7LY96qcnX2eIgNJXtEQKN%2B%2FnEVZbHHvrA%2Fxs8%2BGduCwui%2FFjSi0gCpWhwgmtZ9qCwxRB92ncOSuurMu4hueQWAy3quAuvxLnZJ3ZxG3nP0wSERyh4%2BMuzcaCEA9cms28uPzxtUg9TbTh8dqxShQYukh4g%2FKaXnozd%2F%2BYRDX9eq8UP%2F7crvDckrTIMMrH0zx2YtcX4nxviQGJfGRgA%2Bk4EwljLi%2Bw3%2FXJqeoYy3NLAl5hEFE%2BKgw7%2F%2BVdlnoP2d4%2Blle7AcoNLTPDYKYE%2F9Cj3yAoP15c9JHHrH3rsC8xbPMKzPwjIUgQGIwqYqdwAY6pgGXeYBYkxeI7A%2B6IsvPL0Qs4oezXwlTJobOwzRPSaQSz5mhUwSO9%2BIjs7uVgoDuC%2FAtob8%2BmXVaUWfFE6clX3FPIJyXDyC6tGnDgi1a%2BHHR%2B21eK6ATEwGv1Uw81Y358arDyPzu2pepqVRF02hK5VG0bKd%2BZcTDMD14Sv9NA2XNKEFRglCsYRYr7gMTxcqZg9mi2OfBx0%2F%2BRH%2BdfwAcsiK4QT833cCN&X-Amz-Signature=114b14c09c87be43c9064cbbcb800250b44a66f931965aa8076d5e1a2c024dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLJCRZ3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFBJCCfyHsm%2BAMj0andfFw%2FMVmexzLJOqDJKnekLB7wsAiBdin4aAuNJkOoPWz93ofq956JmViBZRn4eHZxVlOpHYyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSDyaGHjsML6%2FSsXKtwDLzaJhk%2FWC%2FXYzLDGFtU5Ag8oADk8Ri7r%2FevNciQovzO3L%2BGRu5XUxTMpNyX3gNxV7LvxUJvJOKi3ay1DrnOXhF27WVXtIxBy71x47V9M2uWfwkBdmca5dsKjA2Tg1pZbw74K5Y6ww56E9u7Z3W7vMCDgGpnSGCkuafA3nQIub1pnjO6%2FU1Od4Q7IkQZgxtqya2TvLSS4aZtA9Y%2Bw6e37wd807Ye1ACjYPPPWfH%2FE0QFeum%2BPYESs2rLrgJQqj%2Bl3Cwyngu%2BKv1erkQiZEmC%2BX%2F47CrG%2BiQVlkcTkdUKoAvFtISfZjRzsLSVgAAQTfrGQsqkVj7LY96qcnX2eIgNJXtEQKN%2B%2FnEVZbHHvrA%2Fxs8%2BGduCwui%2FFjSi0gCpWhwgmtZ9qCwxRB92ncOSuurMu4hueQWAy3quAuvxLnZJ3ZxG3nP0wSERyh4%2BMuzcaCEA9cms28uPzxtUg9TbTh8dqxShQYukh4g%2FKaXnozd%2F%2BYRDX9eq8UP%2F7crvDckrTIMMrH0zx2YtcX4nxviQGJfGRgA%2Bk4EwljLi%2Bw3%2FXJqeoYy3NLAl5hEFE%2BKgw7%2F%2BVdlnoP2d4%2Blle7AcoNLTPDYKYE%2F9Cj3yAoP15c9JHHrH3rsC8xbPMKzPwjIUgQGIwqYqdwAY6pgGXeYBYkxeI7A%2B6IsvPL0Qs4oezXwlTJobOwzRPSaQSz5mhUwSO9%2BIjs7uVgoDuC%2FAtob8%2BmXVaUWfFE6clX3FPIJyXDyC6tGnDgi1a%2BHHR%2B21eK6ATEwGv1Uw81Y358arDyPzu2pepqVRF02hK5VG0bKd%2BZcTDMD14Sv9NA2XNKEFRglCsYRYr7gMTxcqZg9mi2OfBx0%2F%2BRH%2BdfwAcsiK4QT833cCN&X-Amz-Signature=eee185da33ebd5efcbd51ca3740bc2608449702b76ad3f973b5bb043d202303a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
