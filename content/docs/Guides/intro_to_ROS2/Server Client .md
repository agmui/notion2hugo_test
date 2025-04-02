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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYD2GAF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCID3dGKwvCQcXEnYBoOHo%2BXzHZo%2Fw2%2BykglTI6kVj%2BgQIAiA93fkKTGs%2FWLUBPDmO%2BhIzV%2Bx%2BdluM2ysluL%2FmULcqhSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVTmlAe2423nsobbKtwDboTtygF9bmmVWRHimKKMWqPXpVyo2LsRV9iRpoofh1WYBGA%2BOKVyP7hB23aILBKP1wtIbsTw5e7LyGDGy2UfPOIfvCDkSKQJ6O6%2FnosMTXQ6LsvOoQbQACXN3oT6xphFwJPIE6krF1ti68qyBNc0a4%2FPIbWmS7BI084P3UFSvnMA%2B5GrDgxPV2F1l8P8t2sQdzAC6FPJCvFJAUv%2Bbpkfd8n6SmoRN11iiihFJfehSa7HbBXlZPNtE0AEi5%2BIhyhb3yn6HjfMtUkniuP9difwM7oTeUm%2BiECmlyN923SWHAkKm9aZea%2F2Uylou8a71MMaUaPjBHq%2F5dEauAVBlA4zod4uvdTfOrOmN9OH9zi1akqygS1d6Rc7FQSA3gAHJI76StxSaeQxMpnq93e6rFp8G6u1aLQkdUSgECL1cMzM%2BzDDQl40iXOWTaMvC95n80AEfOaHZCTCa1hjMtRc8z9clJinKjEk0E9BeRVPjNFoIaF1Nlg8dVuB3wfez6U8M4C4Ylg5jGjLYcBFpuLQdjxFmMAg6tLytKRon2vj9t%2Bnusa6gfK1T2QXA0SPPevaARrwIrQ12yWh3%2BKpHhRlL57Xr6J2XNFnJWzj0FU%2BAcH94mjutwL3XsAszydrizUw49CzvwY6pgH8n2udYTau%2FWg749BKkfizaeFIfGDbu4Xjk6G3NB1tJlK9jFYUxTe7rNrtNh04nD3xj%2BHnZpN0QXVmJhmy0BrmJAGDgHjlZxF6DQOZ2MOKrZDoNq4XrMP5NktAG5pg8EwLWmokbfs39OBt3OkiZkQuRlzI7KVj7z37yX89bgsQedPIdftXc4fTcwffJf5hxfSxdndBv1X4FjH%2FnZDKUCSHsjSFIMFx&X-Amz-Signature=f12e7f4e86acafc55afe7e80e17e3d13c949b39e3d7f4715786a178ef589eb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYD2GAF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCID3dGKwvCQcXEnYBoOHo%2BXzHZo%2Fw2%2BykglTI6kVj%2BgQIAiA93fkKTGs%2FWLUBPDmO%2BhIzV%2Bx%2BdluM2ysluL%2FmULcqhSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVTmlAe2423nsobbKtwDboTtygF9bmmVWRHimKKMWqPXpVyo2LsRV9iRpoofh1WYBGA%2BOKVyP7hB23aILBKP1wtIbsTw5e7LyGDGy2UfPOIfvCDkSKQJ6O6%2FnosMTXQ6LsvOoQbQACXN3oT6xphFwJPIE6krF1ti68qyBNc0a4%2FPIbWmS7BI084P3UFSvnMA%2B5GrDgxPV2F1l8P8t2sQdzAC6FPJCvFJAUv%2Bbpkfd8n6SmoRN11iiihFJfehSa7HbBXlZPNtE0AEi5%2BIhyhb3yn6HjfMtUkniuP9difwM7oTeUm%2BiECmlyN923SWHAkKm9aZea%2F2Uylou8a71MMaUaPjBHq%2F5dEauAVBlA4zod4uvdTfOrOmN9OH9zi1akqygS1d6Rc7FQSA3gAHJI76StxSaeQxMpnq93e6rFp8G6u1aLQkdUSgECL1cMzM%2BzDDQl40iXOWTaMvC95n80AEfOaHZCTCa1hjMtRc8z9clJinKjEk0E9BeRVPjNFoIaF1Nlg8dVuB3wfez6U8M4C4Ylg5jGjLYcBFpuLQdjxFmMAg6tLytKRon2vj9t%2Bnusa6gfK1T2QXA0SPPevaARrwIrQ12yWh3%2BKpHhRlL57Xr6J2XNFnJWzj0FU%2BAcH94mjutwL3XsAszydrizUw49CzvwY6pgH8n2udYTau%2FWg749BKkfizaeFIfGDbu4Xjk6G3NB1tJlK9jFYUxTe7rNrtNh04nD3xj%2BHnZpN0QXVmJhmy0BrmJAGDgHjlZxF6DQOZ2MOKrZDoNq4XrMP5NktAG5pg8EwLWmokbfs39OBt3OkiZkQuRlzI7KVj7z37yX89bgsQedPIdftXc4fTcwffJf5hxfSxdndBv1X4FjH%2FnZDKUCSHsjSFIMFx&X-Amz-Signature=222c6a654fbadc9ac788d9486dbec91d2b1f63b7bf91185bfcdac15c9ac854fb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYD2GAF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCID3dGKwvCQcXEnYBoOHo%2BXzHZo%2Fw2%2BykglTI6kVj%2BgQIAiA93fkKTGs%2FWLUBPDmO%2BhIzV%2Bx%2BdluM2ysluL%2FmULcqhSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVTmlAe2423nsobbKtwDboTtygF9bmmVWRHimKKMWqPXpVyo2LsRV9iRpoofh1WYBGA%2BOKVyP7hB23aILBKP1wtIbsTw5e7LyGDGy2UfPOIfvCDkSKQJ6O6%2FnosMTXQ6LsvOoQbQACXN3oT6xphFwJPIE6krF1ti68qyBNc0a4%2FPIbWmS7BI084P3UFSvnMA%2B5GrDgxPV2F1l8P8t2sQdzAC6FPJCvFJAUv%2Bbpkfd8n6SmoRN11iiihFJfehSa7HbBXlZPNtE0AEi5%2BIhyhb3yn6HjfMtUkniuP9difwM7oTeUm%2BiECmlyN923SWHAkKm9aZea%2F2Uylou8a71MMaUaPjBHq%2F5dEauAVBlA4zod4uvdTfOrOmN9OH9zi1akqygS1d6Rc7FQSA3gAHJI76StxSaeQxMpnq93e6rFp8G6u1aLQkdUSgECL1cMzM%2BzDDQl40iXOWTaMvC95n80AEfOaHZCTCa1hjMtRc8z9clJinKjEk0E9BeRVPjNFoIaF1Nlg8dVuB3wfez6U8M4C4Ylg5jGjLYcBFpuLQdjxFmMAg6tLytKRon2vj9t%2Bnusa6gfK1T2QXA0SPPevaARrwIrQ12yWh3%2BKpHhRlL57Xr6J2XNFnJWzj0FU%2BAcH94mjutwL3XsAszydrizUw49CzvwY6pgH8n2udYTau%2FWg749BKkfizaeFIfGDbu4Xjk6G3NB1tJlK9jFYUxTe7rNrtNh04nD3xj%2BHnZpN0QXVmJhmy0BrmJAGDgHjlZxF6DQOZ2MOKrZDoNq4XrMP5NktAG5pg8EwLWmokbfs39OBt3OkiZkQuRlzI7KVj7z37yX89bgsQedPIdftXc4fTcwffJf5hxfSxdndBv1X4FjH%2FnZDKUCSHsjSFIMFx&X-Amz-Signature=3d5f1897e9b9f43a0bb6988b3349c12c9a43d7aa91364605a7324ea53173a765&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYD2GAF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCID3dGKwvCQcXEnYBoOHo%2BXzHZo%2Fw2%2BykglTI6kVj%2BgQIAiA93fkKTGs%2FWLUBPDmO%2BhIzV%2Bx%2BdluM2ysluL%2FmULcqhSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVTmlAe2423nsobbKtwDboTtygF9bmmVWRHimKKMWqPXpVyo2LsRV9iRpoofh1WYBGA%2BOKVyP7hB23aILBKP1wtIbsTw5e7LyGDGy2UfPOIfvCDkSKQJ6O6%2FnosMTXQ6LsvOoQbQACXN3oT6xphFwJPIE6krF1ti68qyBNc0a4%2FPIbWmS7BI084P3UFSvnMA%2B5GrDgxPV2F1l8P8t2sQdzAC6FPJCvFJAUv%2Bbpkfd8n6SmoRN11iiihFJfehSa7HbBXlZPNtE0AEi5%2BIhyhb3yn6HjfMtUkniuP9difwM7oTeUm%2BiECmlyN923SWHAkKm9aZea%2F2Uylou8a71MMaUaPjBHq%2F5dEauAVBlA4zod4uvdTfOrOmN9OH9zi1akqygS1d6Rc7FQSA3gAHJI76StxSaeQxMpnq93e6rFp8G6u1aLQkdUSgECL1cMzM%2BzDDQl40iXOWTaMvC95n80AEfOaHZCTCa1hjMtRc8z9clJinKjEk0E9BeRVPjNFoIaF1Nlg8dVuB3wfez6U8M4C4Ylg5jGjLYcBFpuLQdjxFmMAg6tLytKRon2vj9t%2Bnusa6gfK1T2QXA0SPPevaARrwIrQ12yWh3%2BKpHhRlL57Xr6J2XNFnJWzj0FU%2BAcH94mjutwL3XsAszydrizUw49CzvwY6pgH8n2udYTau%2FWg749BKkfizaeFIfGDbu4Xjk6G3NB1tJlK9jFYUxTe7rNrtNh04nD3xj%2BHnZpN0QXVmJhmy0BrmJAGDgHjlZxF6DQOZ2MOKrZDoNq4XrMP5NktAG5pg8EwLWmokbfs39OBt3OkiZkQuRlzI7KVj7z37yX89bgsQedPIdftXc4fTcwffJf5hxfSxdndBv1X4FjH%2FnZDKUCSHsjSFIMFx&X-Amz-Signature=4bc4da5f65c1d35c4c449d61cc018ad2af7e38aeb808e58524fbb13fe7175bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYD2GAF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCID3dGKwvCQcXEnYBoOHo%2BXzHZo%2Fw2%2BykglTI6kVj%2BgQIAiA93fkKTGs%2FWLUBPDmO%2BhIzV%2Bx%2BdluM2ysluL%2FmULcqhSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVTmlAe2423nsobbKtwDboTtygF9bmmVWRHimKKMWqPXpVyo2LsRV9iRpoofh1WYBGA%2BOKVyP7hB23aILBKP1wtIbsTw5e7LyGDGy2UfPOIfvCDkSKQJ6O6%2FnosMTXQ6LsvOoQbQACXN3oT6xphFwJPIE6krF1ti68qyBNc0a4%2FPIbWmS7BI084P3UFSvnMA%2B5GrDgxPV2F1l8P8t2sQdzAC6FPJCvFJAUv%2Bbpkfd8n6SmoRN11iiihFJfehSa7HbBXlZPNtE0AEi5%2BIhyhb3yn6HjfMtUkniuP9difwM7oTeUm%2BiECmlyN923SWHAkKm9aZea%2F2Uylou8a71MMaUaPjBHq%2F5dEauAVBlA4zod4uvdTfOrOmN9OH9zi1akqygS1d6Rc7FQSA3gAHJI76StxSaeQxMpnq93e6rFp8G6u1aLQkdUSgECL1cMzM%2BzDDQl40iXOWTaMvC95n80AEfOaHZCTCa1hjMtRc8z9clJinKjEk0E9BeRVPjNFoIaF1Nlg8dVuB3wfez6U8M4C4Ylg5jGjLYcBFpuLQdjxFmMAg6tLytKRon2vj9t%2Bnusa6gfK1T2QXA0SPPevaARrwIrQ12yWh3%2BKpHhRlL57Xr6J2XNFnJWzj0FU%2BAcH94mjutwL3XsAszydrizUw49CzvwY6pgH8n2udYTau%2FWg749BKkfizaeFIfGDbu4Xjk6G3NB1tJlK9jFYUxTe7rNrtNh04nD3xj%2BHnZpN0QXVmJhmy0BrmJAGDgHjlZxF6DQOZ2MOKrZDoNq4XrMP5NktAG5pg8EwLWmokbfs39OBt3OkiZkQuRlzI7KVj7z37yX89bgsQedPIdftXc4fTcwffJf5hxfSxdndBv1X4FjH%2FnZDKUCSHsjSFIMFx&X-Amz-Signature=f805b85408c873162c4bf02d92c09b9e960d107fd55dd6cc4e852d4402c71248&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
