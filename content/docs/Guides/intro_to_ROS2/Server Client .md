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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETDMCTW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFpP1c%2FeFDPT3%2BviM6Vi76BFSf02%2FUZ0DjBkBdDWD0FAiEAmq2v6nDf2Qc4ExGbAvr4JEeXdDoDEMhf%2B9vsM1dIHGsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kA1o6OuW9i8w3wSrcA%2F7E1VCuEvZkbR8lxCep8CHwuLSmu7UBGbsoJf1WVySJqCCV5UTZp9hCJ3Q2pItUPn%2FVYezaiUGuzlLDI6FYp2PwWr50yzUKk930K2BU9KpZSx5LUyDRD1Gx9RIud318GC9u6MWcSK0UV4%2Fbmt4J%2B8PddK6iz%2FMs0JO3XpTCX9LiyTVtixSB8HgeDpCNXfobceswhM%2FxbCKoIgTVlwHPVE%2FcqWUceu07OfBBdsH6atddLPVEN8Z60bzoEdWxWAXbizh0IHiJNraxfMKzkLSuaCxn5ERjXzUPS8GohqbsfRfsA0ffIrx5CNeINt4dJ9wEOHAvkmuKpwPy5ziabFGUPkFUsKcAZuwWXKiRT54qIZCHJLbUCQaN4oJy8oX155sSkT9A9e1wkpg82QNRMmrwZIjDz%2Fq9S6Hk5AEKjamqqShpMBwi5gGPuQwsHkmnkPArZMQcPw0zraAd%2FcPKUFWvouIa%2F57gidV%2BxUUr3Q5qxrevNKqF9o2SqujIYdTApdiHHkAzFOjK9NXvt8cU9pFA3TDyZMJNbd9s1EyEJCapLz4TKTAxqHkAevC0gfPmG1%2BpT5IqxqYR7hYEzzFt998L13KJv5v72fzm2a8p5IgHIJ1kv4BvXXBKV%2FkJ%2FkbtMNf%2Bhb8GOqUBhrjokKs3xvGkF3lHiefL2sOcY4Ngps%2BFiK3vcFk31BjvhrY9af%2BuEzH79GTIVKe6uEZkFZO%2FQNTCeFuNF8MPGzAxlZ47%2F2glioHC7B4KZ9BMkiQGYi1dCelgDIvispQFsbI0nBADCavlJfojiH8Tu7pFXItZJISYD9b%2FlpwH7BP9fNOh2P4MlpOkD9Nf1bvf9TnmtmOsV6RdupcLtIMt5EbVsCed&X-Amz-Signature=59734b720771baa4d93f8d9167a5f0bf02c32cd89cc6f39e2ce4f93148064b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETDMCTW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFpP1c%2FeFDPT3%2BviM6Vi76BFSf02%2FUZ0DjBkBdDWD0FAiEAmq2v6nDf2Qc4ExGbAvr4JEeXdDoDEMhf%2B9vsM1dIHGsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kA1o6OuW9i8w3wSrcA%2F7E1VCuEvZkbR8lxCep8CHwuLSmu7UBGbsoJf1WVySJqCCV5UTZp9hCJ3Q2pItUPn%2FVYezaiUGuzlLDI6FYp2PwWr50yzUKk930K2BU9KpZSx5LUyDRD1Gx9RIud318GC9u6MWcSK0UV4%2Fbmt4J%2B8PddK6iz%2FMs0JO3XpTCX9LiyTVtixSB8HgeDpCNXfobceswhM%2FxbCKoIgTVlwHPVE%2FcqWUceu07OfBBdsH6atddLPVEN8Z60bzoEdWxWAXbizh0IHiJNraxfMKzkLSuaCxn5ERjXzUPS8GohqbsfRfsA0ffIrx5CNeINt4dJ9wEOHAvkmuKpwPy5ziabFGUPkFUsKcAZuwWXKiRT54qIZCHJLbUCQaN4oJy8oX155sSkT9A9e1wkpg82QNRMmrwZIjDz%2Fq9S6Hk5AEKjamqqShpMBwi5gGPuQwsHkmnkPArZMQcPw0zraAd%2FcPKUFWvouIa%2F57gidV%2BxUUr3Q5qxrevNKqF9o2SqujIYdTApdiHHkAzFOjK9NXvt8cU9pFA3TDyZMJNbd9s1EyEJCapLz4TKTAxqHkAevC0gfPmG1%2BpT5IqxqYR7hYEzzFt998L13KJv5v72fzm2a8p5IgHIJ1kv4BvXXBKV%2FkJ%2FkbtMNf%2Bhb8GOqUBhrjokKs3xvGkF3lHiefL2sOcY4Ngps%2BFiK3vcFk31BjvhrY9af%2BuEzH79GTIVKe6uEZkFZO%2FQNTCeFuNF8MPGzAxlZ47%2F2glioHC7B4KZ9BMkiQGYi1dCelgDIvispQFsbI0nBADCavlJfojiH8Tu7pFXItZJISYD9b%2FlpwH7BP9fNOh2P4MlpOkD9Nf1bvf9TnmtmOsV6RdupcLtIMt5EbVsCed&X-Amz-Signature=e147f6c148a9f90bb263fe3db8eacb8a849ab9edaf76542e640b5c3128dced3f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETDMCTW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFpP1c%2FeFDPT3%2BviM6Vi76BFSf02%2FUZ0DjBkBdDWD0FAiEAmq2v6nDf2Qc4ExGbAvr4JEeXdDoDEMhf%2B9vsM1dIHGsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kA1o6OuW9i8w3wSrcA%2F7E1VCuEvZkbR8lxCep8CHwuLSmu7UBGbsoJf1WVySJqCCV5UTZp9hCJ3Q2pItUPn%2FVYezaiUGuzlLDI6FYp2PwWr50yzUKk930K2BU9KpZSx5LUyDRD1Gx9RIud318GC9u6MWcSK0UV4%2Fbmt4J%2B8PddK6iz%2FMs0JO3XpTCX9LiyTVtixSB8HgeDpCNXfobceswhM%2FxbCKoIgTVlwHPVE%2FcqWUceu07OfBBdsH6atddLPVEN8Z60bzoEdWxWAXbizh0IHiJNraxfMKzkLSuaCxn5ERjXzUPS8GohqbsfRfsA0ffIrx5CNeINt4dJ9wEOHAvkmuKpwPy5ziabFGUPkFUsKcAZuwWXKiRT54qIZCHJLbUCQaN4oJy8oX155sSkT9A9e1wkpg82QNRMmrwZIjDz%2Fq9S6Hk5AEKjamqqShpMBwi5gGPuQwsHkmnkPArZMQcPw0zraAd%2FcPKUFWvouIa%2F57gidV%2BxUUr3Q5qxrevNKqF9o2SqujIYdTApdiHHkAzFOjK9NXvt8cU9pFA3TDyZMJNbd9s1EyEJCapLz4TKTAxqHkAevC0gfPmG1%2BpT5IqxqYR7hYEzzFt998L13KJv5v72fzm2a8p5IgHIJ1kv4BvXXBKV%2FkJ%2FkbtMNf%2Bhb8GOqUBhrjokKs3xvGkF3lHiefL2sOcY4Ngps%2BFiK3vcFk31BjvhrY9af%2BuEzH79GTIVKe6uEZkFZO%2FQNTCeFuNF8MPGzAxlZ47%2F2glioHC7B4KZ9BMkiQGYi1dCelgDIvispQFsbI0nBADCavlJfojiH8Tu7pFXItZJISYD9b%2FlpwH7BP9fNOh2P4MlpOkD9Nf1bvf9TnmtmOsV6RdupcLtIMt5EbVsCed&X-Amz-Signature=af0f55dc47e55408023d287ee46cd0ceeee64e630d40f1880bf8e49ebd7e36c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETDMCTW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFpP1c%2FeFDPT3%2BviM6Vi76BFSf02%2FUZ0DjBkBdDWD0FAiEAmq2v6nDf2Qc4ExGbAvr4JEeXdDoDEMhf%2B9vsM1dIHGsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kA1o6OuW9i8w3wSrcA%2F7E1VCuEvZkbR8lxCep8CHwuLSmu7UBGbsoJf1WVySJqCCV5UTZp9hCJ3Q2pItUPn%2FVYezaiUGuzlLDI6FYp2PwWr50yzUKk930K2BU9KpZSx5LUyDRD1Gx9RIud318GC9u6MWcSK0UV4%2Fbmt4J%2B8PddK6iz%2FMs0JO3XpTCX9LiyTVtixSB8HgeDpCNXfobceswhM%2FxbCKoIgTVlwHPVE%2FcqWUceu07OfBBdsH6atddLPVEN8Z60bzoEdWxWAXbizh0IHiJNraxfMKzkLSuaCxn5ERjXzUPS8GohqbsfRfsA0ffIrx5CNeINt4dJ9wEOHAvkmuKpwPy5ziabFGUPkFUsKcAZuwWXKiRT54qIZCHJLbUCQaN4oJy8oX155sSkT9A9e1wkpg82QNRMmrwZIjDz%2Fq9S6Hk5AEKjamqqShpMBwi5gGPuQwsHkmnkPArZMQcPw0zraAd%2FcPKUFWvouIa%2F57gidV%2BxUUr3Q5qxrevNKqF9o2SqujIYdTApdiHHkAzFOjK9NXvt8cU9pFA3TDyZMJNbd9s1EyEJCapLz4TKTAxqHkAevC0gfPmG1%2BpT5IqxqYR7hYEzzFt998L13KJv5v72fzm2a8p5IgHIJ1kv4BvXXBKV%2FkJ%2FkbtMNf%2Bhb8GOqUBhrjokKs3xvGkF3lHiefL2sOcY4Ngps%2BFiK3vcFk31BjvhrY9af%2BuEzH79GTIVKe6uEZkFZO%2FQNTCeFuNF8MPGzAxlZ47%2F2glioHC7B4KZ9BMkiQGYi1dCelgDIvispQFsbI0nBADCavlJfojiH8Tu7pFXItZJISYD9b%2FlpwH7BP9fNOh2P4MlpOkD9Nf1bvf9TnmtmOsV6RdupcLtIMt5EbVsCed&X-Amz-Signature=dc845cd9f30217c4e333461487537386e7cc78ecea6e394aa46171dfc4dd2d19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETDMCTW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFpP1c%2FeFDPT3%2BviM6Vi76BFSf02%2FUZ0DjBkBdDWD0FAiEAmq2v6nDf2Qc4ExGbAvr4JEeXdDoDEMhf%2B9vsM1dIHGsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kA1o6OuW9i8w3wSrcA%2F7E1VCuEvZkbR8lxCep8CHwuLSmu7UBGbsoJf1WVySJqCCV5UTZp9hCJ3Q2pItUPn%2FVYezaiUGuzlLDI6FYp2PwWr50yzUKk930K2BU9KpZSx5LUyDRD1Gx9RIud318GC9u6MWcSK0UV4%2Fbmt4J%2B8PddK6iz%2FMs0JO3XpTCX9LiyTVtixSB8HgeDpCNXfobceswhM%2FxbCKoIgTVlwHPVE%2FcqWUceu07OfBBdsH6atddLPVEN8Z60bzoEdWxWAXbizh0IHiJNraxfMKzkLSuaCxn5ERjXzUPS8GohqbsfRfsA0ffIrx5CNeINt4dJ9wEOHAvkmuKpwPy5ziabFGUPkFUsKcAZuwWXKiRT54qIZCHJLbUCQaN4oJy8oX155sSkT9A9e1wkpg82QNRMmrwZIjDz%2Fq9S6Hk5AEKjamqqShpMBwi5gGPuQwsHkmnkPArZMQcPw0zraAd%2FcPKUFWvouIa%2F57gidV%2BxUUr3Q5qxrevNKqF9o2SqujIYdTApdiHHkAzFOjK9NXvt8cU9pFA3TDyZMJNbd9s1EyEJCapLz4TKTAxqHkAevC0gfPmG1%2BpT5IqxqYR7hYEzzFt998L13KJv5v72fzm2a8p5IgHIJ1kv4BvXXBKV%2FkJ%2FkbtMNf%2Bhb8GOqUBhrjokKs3xvGkF3lHiefL2sOcY4Ngps%2BFiK3vcFk31BjvhrY9af%2BuEzH79GTIVKe6uEZkFZO%2FQNTCeFuNF8MPGzAxlZ47%2F2glioHC7B4KZ9BMkiQGYi1dCelgDIvispQFsbI0nBADCavlJfojiH8Tu7pFXItZJISYD9b%2FlpwH7BP9fNOh2P4MlpOkD9Nf1bvf9TnmtmOsV6RdupcLtIMt5EbVsCed&X-Amz-Signature=9dc85636488976c1649bf9f91ed07e58cea3df9f7deff07f1081b62c1688d72e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
