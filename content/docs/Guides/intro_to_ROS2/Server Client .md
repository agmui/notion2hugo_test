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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMBXAMD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAXcRdhyxj04sZ9GavjvsgmDZlkRILDDUGXvQ8t%2BGdlwIga7I907ALW%2FVOPpD6ivf6EVEq5VaioRuAnEIAtqmyv24qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv6OhV2FOOq7RBYFSrcAyv%2FkEuvVe0dRYIV%2BDQHjUa7jOhZOmkX5NV8kTHlvpYkyv%2Bq0sITKcK2vXGJ8MRmZfHG6elNQK9Y1QM2u3YfEEgHxeS8zyOL59neDJW8tPMsH6Ovmm1Elbu6JtAcXaBiet6YOeNq5oIosYWX4L7FTN4jW1kBGY8vU2WLjwJlXmjd7eeM0cu3OFbpd8x31OgrWIY8Ap3iFfsMn1cGx8zaswQuqbqzLsscHdcPoALpto%2BQ48zB8xdK2%2B%2B%2BGydM%2BGULR3gzM9hJxQtTXPEYhumlU%2FYXpYY9C51cV6yCYmSjaA1r4fx1nZJehuFnhT7%2Bz5T6yAjwxsZRfuAS1EQQ1wHYGSj%2Fkq9JF%2FplrAzRxeyPP%2FhGgIsLKcoiZKuPqxIhCwx4pyt7QxCPw6JfCm5OZH8k2NC7RinxpVjxXb0qrByh7kyHTf2MklMm9XbdEn6Ldn4BUxG7Qeb8vg9ge2d91yuxfTqppB4OqSU9ZCh932PX3gTA%2FEZN6vKUWmBBfyJzt9BTorzJWMXPQDmKiDtQXsLDhyawiZQ0otInUUlLY3El20T7dcAmb6RTQYzpqdYFor%2B%2BJhkW%2Bdlp7t8DPf%2FKVhqJUELnvu3GODIAzi1QTXpscOhJxgQNch5JW8O0PLk9MNep0L0GOqUBBqbMcb106jhz93mrhf7X6cU0JAnbaBL4NZSsvNASxJxPmy8zBoQMrHTbEqoQoLP3aB4mmgkzR6rgoLR9KNHduQKPJSN32d9wVAkPLZN0JMMTJ2pEzhXws85y4kYse3rJ0kk%2BBzwB4lS%2BcvT9xb0DtUOcxVGcALvV6FWrNSv2eJi9AyzTCnuYsv4OPaJ%2BcaChz6%2BEPlyo2z1F5nm7wcIw0dT2xD1o&X-Amz-Signature=34e948804a49cbb8f6ec9b6348ec138f3582202c28334b988b9080aaeeb04808&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMBXAMD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAXcRdhyxj04sZ9GavjvsgmDZlkRILDDUGXvQ8t%2BGdlwIga7I907ALW%2FVOPpD6ivf6EVEq5VaioRuAnEIAtqmyv24qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv6OhV2FOOq7RBYFSrcAyv%2FkEuvVe0dRYIV%2BDQHjUa7jOhZOmkX5NV8kTHlvpYkyv%2Bq0sITKcK2vXGJ8MRmZfHG6elNQK9Y1QM2u3YfEEgHxeS8zyOL59neDJW8tPMsH6Ovmm1Elbu6JtAcXaBiet6YOeNq5oIosYWX4L7FTN4jW1kBGY8vU2WLjwJlXmjd7eeM0cu3OFbpd8x31OgrWIY8Ap3iFfsMn1cGx8zaswQuqbqzLsscHdcPoALpto%2BQ48zB8xdK2%2B%2B%2BGydM%2BGULR3gzM9hJxQtTXPEYhumlU%2FYXpYY9C51cV6yCYmSjaA1r4fx1nZJehuFnhT7%2Bz5T6yAjwxsZRfuAS1EQQ1wHYGSj%2Fkq9JF%2FplrAzRxeyPP%2FhGgIsLKcoiZKuPqxIhCwx4pyt7QxCPw6JfCm5OZH8k2NC7RinxpVjxXb0qrByh7kyHTf2MklMm9XbdEn6Ldn4BUxG7Qeb8vg9ge2d91yuxfTqppB4OqSU9ZCh932PX3gTA%2FEZN6vKUWmBBfyJzt9BTorzJWMXPQDmKiDtQXsLDhyawiZQ0otInUUlLY3El20T7dcAmb6RTQYzpqdYFor%2B%2BJhkW%2Bdlp7t8DPf%2FKVhqJUELnvu3GODIAzi1QTXpscOhJxgQNch5JW8O0PLk9MNep0L0GOqUBBqbMcb106jhz93mrhf7X6cU0JAnbaBL4NZSsvNASxJxPmy8zBoQMrHTbEqoQoLP3aB4mmgkzR6rgoLR9KNHduQKPJSN32d9wVAkPLZN0JMMTJ2pEzhXws85y4kYse3rJ0kk%2BBzwB4lS%2BcvT9xb0DtUOcxVGcALvV6FWrNSv2eJi9AyzTCnuYsv4OPaJ%2BcaChz6%2BEPlyo2z1F5nm7wcIw0dT2xD1o&X-Amz-Signature=2861f4fd049b26d2948195065435f2b1693671e72854314a55e4807beae4091c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMBXAMD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAXcRdhyxj04sZ9GavjvsgmDZlkRILDDUGXvQ8t%2BGdlwIga7I907ALW%2FVOPpD6ivf6EVEq5VaioRuAnEIAtqmyv24qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv6OhV2FOOq7RBYFSrcAyv%2FkEuvVe0dRYIV%2BDQHjUa7jOhZOmkX5NV8kTHlvpYkyv%2Bq0sITKcK2vXGJ8MRmZfHG6elNQK9Y1QM2u3YfEEgHxeS8zyOL59neDJW8tPMsH6Ovmm1Elbu6JtAcXaBiet6YOeNq5oIosYWX4L7FTN4jW1kBGY8vU2WLjwJlXmjd7eeM0cu3OFbpd8x31OgrWIY8Ap3iFfsMn1cGx8zaswQuqbqzLsscHdcPoALpto%2BQ48zB8xdK2%2B%2B%2BGydM%2BGULR3gzM9hJxQtTXPEYhumlU%2FYXpYY9C51cV6yCYmSjaA1r4fx1nZJehuFnhT7%2Bz5T6yAjwxsZRfuAS1EQQ1wHYGSj%2Fkq9JF%2FplrAzRxeyPP%2FhGgIsLKcoiZKuPqxIhCwx4pyt7QxCPw6JfCm5OZH8k2NC7RinxpVjxXb0qrByh7kyHTf2MklMm9XbdEn6Ldn4BUxG7Qeb8vg9ge2d91yuxfTqppB4OqSU9ZCh932PX3gTA%2FEZN6vKUWmBBfyJzt9BTorzJWMXPQDmKiDtQXsLDhyawiZQ0otInUUlLY3El20T7dcAmb6RTQYzpqdYFor%2B%2BJhkW%2Bdlp7t8DPf%2FKVhqJUELnvu3GODIAzi1QTXpscOhJxgQNch5JW8O0PLk9MNep0L0GOqUBBqbMcb106jhz93mrhf7X6cU0JAnbaBL4NZSsvNASxJxPmy8zBoQMrHTbEqoQoLP3aB4mmgkzR6rgoLR9KNHduQKPJSN32d9wVAkPLZN0JMMTJ2pEzhXws85y4kYse3rJ0kk%2BBzwB4lS%2BcvT9xb0DtUOcxVGcALvV6FWrNSv2eJi9AyzTCnuYsv4OPaJ%2BcaChz6%2BEPlyo2z1F5nm7wcIw0dT2xD1o&X-Amz-Signature=aead1f2ac2aa7a21ded8458c610f926af04d5c35072fe971d486194cc817b189&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMBXAMD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAXcRdhyxj04sZ9GavjvsgmDZlkRILDDUGXvQ8t%2BGdlwIga7I907ALW%2FVOPpD6ivf6EVEq5VaioRuAnEIAtqmyv24qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv6OhV2FOOq7RBYFSrcAyv%2FkEuvVe0dRYIV%2BDQHjUa7jOhZOmkX5NV8kTHlvpYkyv%2Bq0sITKcK2vXGJ8MRmZfHG6elNQK9Y1QM2u3YfEEgHxeS8zyOL59neDJW8tPMsH6Ovmm1Elbu6JtAcXaBiet6YOeNq5oIosYWX4L7FTN4jW1kBGY8vU2WLjwJlXmjd7eeM0cu3OFbpd8x31OgrWIY8Ap3iFfsMn1cGx8zaswQuqbqzLsscHdcPoALpto%2BQ48zB8xdK2%2B%2B%2BGydM%2BGULR3gzM9hJxQtTXPEYhumlU%2FYXpYY9C51cV6yCYmSjaA1r4fx1nZJehuFnhT7%2Bz5T6yAjwxsZRfuAS1EQQ1wHYGSj%2Fkq9JF%2FplrAzRxeyPP%2FhGgIsLKcoiZKuPqxIhCwx4pyt7QxCPw6JfCm5OZH8k2NC7RinxpVjxXb0qrByh7kyHTf2MklMm9XbdEn6Ldn4BUxG7Qeb8vg9ge2d91yuxfTqppB4OqSU9ZCh932PX3gTA%2FEZN6vKUWmBBfyJzt9BTorzJWMXPQDmKiDtQXsLDhyawiZQ0otInUUlLY3El20T7dcAmb6RTQYzpqdYFor%2B%2BJhkW%2Bdlp7t8DPf%2FKVhqJUELnvu3GODIAzi1QTXpscOhJxgQNch5JW8O0PLk9MNep0L0GOqUBBqbMcb106jhz93mrhf7X6cU0JAnbaBL4NZSsvNASxJxPmy8zBoQMrHTbEqoQoLP3aB4mmgkzR6rgoLR9KNHduQKPJSN32d9wVAkPLZN0JMMTJ2pEzhXws85y4kYse3rJ0kk%2BBzwB4lS%2BcvT9xb0DtUOcxVGcALvV6FWrNSv2eJi9AyzTCnuYsv4OPaJ%2BcaChz6%2BEPlyo2z1F5nm7wcIw0dT2xD1o&X-Amz-Signature=7555f17135b09826583eef6f1593529a973f20646fc6c32238426006a60a6a72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMBXAMD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAXcRdhyxj04sZ9GavjvsgmDZlkRILDDUGXvQ8t%2BGdlwIga7I907ALW%2FVOPpD6ivf6EVEq5VaioRuAnEIAtqmyv24qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv6OhV2FOOq7RBYFSrcAyv%2FkEuvVe0dRYIV%2BDQHjUa7jOhZOmkX5NV8kTHlvpYkyv%2Bq0sITKcK2vXGJ8MRmZfHG6elNQK9Y1QM2u3YfEEgHxeS8zyOL59neDJW8tPMsH6Ovmm1Elbu6JtAcXaBiet6YOeNq5oIosYWX4L7FTN4jW1kBGY8vU2WLjwJlXmjd7eeM0cu3OFbpd8x31OgrWIY8Ap3iFfsMn1cGx8zaswQuqbqzLsscHdcPoALpto%2BQ48zB8xdK2%2B%2B%2BGydM%2BGULR3gzM9hJxQtTXPEYhumlU%2FYXpYY9C51cV6yCYmSjaA1r4fx1nZJehuFnhT7%2Bz5T6yAjwxsZRfuAS1EQQ1wHYGSj%2Fkq9JF%2FplrAzRxeyPP%2FhGgIsLKcoiZKuPqxIhCwx4pyt7QxCPw6JfCm5OZH8k2NC7RinxpVjxXb0qrByh7kyHTf2MklMm9XbdEn6Ldn4BUxG7Qeb8vg9ge2d91yuxfTqppB4OqSU9ZCh932PX3gTA%2FEZN6vKUWmBBfyJzt9BTorzJWMXPQDmKiDtQXsLDhyawiZQ0otInUUlLY3El20T7dcAmb6RTQYzpqdYFor%2B%2BJhkW%2Bdlp7t8DPf%2FKVhqJUELnvu3GODIAzi1QTXpscOhJxgQNch5JW8O0PLk9MNep0L0GOqUBBqbMcb106jhz93mrhf7X6cU0JAnbaBL4NZSsvNASxJxPmy8zBoQMrHTbEqoQoLP3aB4mmgkzR6rgoLR9KNHduQKPJSN32d9wVAkPLZN0JMMTJ2pEzhXws85y4kYse3rJ0kk%2BBzwB4lS%2BcvT9xb0DtUOcxVGcALvV6FWrNSv2eJi9AyzTCnuYsv4OPaJ%2BcaChz6%2BEPlyo2z1F5nm7wcIw0dT2xD1o&X-Amz-Signature=55cd95f949fd5f1d1f285afc63324223d89efe42be78aab4830919e9443e07c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
