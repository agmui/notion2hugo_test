---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWAU5BX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2B%2BXcw9mxSViske3Aa2OmKe1OXSue0lRD20dBADdL7AiEAv1OJQgqBihzJNlKRkqS2I%2F%2Fys1r4h8eMtCWyusAh1Kcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDN%2Fuazjhus2REe5mZircAwj7RkzKapYaazbVYaeARLepzlvdj0hkqC53Oqh7e5CzVhvfDINe0f2ge4nbgPbQRY18FAYqAv%2Bdgy0WCNKEWRmnUhRy6hnJUPEInkhLoWlpb1XDFT7Oa7R%2Be1rTBOybkiSuvgzccLljZP%2BJnDjb6lxGpa%2Bu2JE6kK1rZfUDyKA1yJmBFxMPrG%2FX9vdNfpIFuf9hTQTk9UJm42HdTLA1x4sKMvwpLOc2oDWD8yOFhU9TkxIJmv1Lon3%2FmZ2Z8vk62v8pfkmkazE8hSj10fRcJmCQXGQqbKDHMTjzn5jg1TWfkGylwe1WJ7GZFuxHef4aiAk88CMRvCv%2FLT1eD2pN9j7gcARM6ndKYGu2K%2F5iw5yiRbU3NopviNjpmPHRmZhnwXwfh3DkdJ9gjFSjsGOFJnVJrop26jMPlGfcx0XWXkGZ0f2q93xcUYrXYyCDnEStDnAC8RG2Qsyhk4TMfyz1f%2FM9cLZguxfqYxQDahw%2B%2Br6XuHFFtAPEt4Lmhoa8hIgZUtU0IFMJOHRA150Syzv3R5VSIw5hw00dE7FdWB2A6lAv51U2xrEiZuCliV7cbfzX8f7lSflR93pQ82%2BZw8QN2XnKzsMrmVorgIZqKCpCce2l0LU0N1vkQh5ydF9WMPvq88QGOqUB1qbaN5OKzK0AthGkqGmqW1aiM8r8xLEeD9iZF0hVRl%2FvMYjA2vdkqnuo2BggbvEI5NqJfuUniX3%2Bu4s2Y3wF6SqmHbQH7wb07jFDBbI6UDxM9McCGG7Kd1xhCbpglUE%2F%2BgvAoSToAb2M54wd5m%2FtGNttYxDvBR6vMjph2w1RhC9Jxo0QfLXljX7qirquxCmiRYwtfRzmxirY6v8b8ReNFspjw2SN&X-Amz-Signature=71df02984af1143de49d62d3df8a40eeb8b1c1bac16d07b3debea1568ada90d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWAU5BX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2B%2BXcw9mxSViske3Aa2OmKe1OXSue0lRD20dBADdL7AiEAv1OJQgqBihzJNlKRkqS2I%2F%2Fys1r4h8eMtCWyusAh1Kcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDN%2Fuazjhus2REe5mZircAwj7RkzKapYaazbVYaeARLepzlvdj0hkqC53Oqh7e5CzVhvfDINe0f2ge4nbgPbQRY18FAYqAv%2Bdgy0WCNKEWRmnUhRy6hnJUPEInkhLoWlpb1XDFT7Oa7R%2Be1rTBOybkiSuvgzccLljZP%2BJnDjb6lxGpa%2Bu2JE6kK1rZfUDyKA1yJmBFxMPrG%2FX9vdNfpIFuf9hTQTk9UJm42HdTLA1x4sKMvwpLOc2oDWD8yOFhU9TkxIJmv1Lon3%2FmZ2Z8vk62v8pfkmkazE8hSj10fRcJmCQXGQqbKDHMTjzn5jg1TWfkGylwe1WJ7GZFuxHef4aiAk88CMRvCv%2FLT1eD2pN9j7gcARM6ndKYGu2K%2F5iw5yiRbU3NopviNjpmPHRmZhnwXwfh3DkdJ9gjFSjsGOFJnVJrop26jMPlGfcx0XWXkGZ0f2q93xcUYrXYyCDnEStDnAC8RG2Qsyhk4TMfyz1f%2FM9cLZguxfqYxQDahw%2B%2Br6XuHFFtAPEt4Lmhoa8hIgZUtU0IFMJOHRA150Syzv3R5VSIw5hw00dE7FdWB2A6lAv51U2xrEiZuCliV7cbfzX8f7lSflR93pQ82%2BZw8QN2XnKzsMrmVorgIZqKCpCce2l0LU0N1vkQh5ydF9WMPvq88QGOqUB1qbaN5OKzK0AthGkqGmqW1aiM8r8xLEeD9iZF0hVRl%2FvMYjA2vdkqnuo2BggbvEI5NqJfuUniX3%2Bu4s2Y3wF6SqmHbQH7wb07jFDBbI6UDxM9McCGG7Kd1xhCbpglUE%2F%2BgvAoSToAb2M54wd5m%2FtGNttYxDvBR6vMjph2w1RhC9Jxo0QfLXljX7qirquxCmiRYwtfRzmxirY6v8b8ReNFspjw2SN&X-Amz-Signature=32512d9b9ae6b837bcbf2ab215ebebf3a310ecc6c6120960b2e6fcf7f9dde665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWAU5BX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2B%2BXcw9mxSViske3Aa2OmKe1OXSue0lRD20dBADdL7AiEAv1OJQgqBihzJNlKRkqS2I%2F%2Fys1r4h8eMtCWyusAh1Kcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDN%2Fuazjhus2REe5mZircAwj7RkzKapYaazbVYaeARLepzlvdj0hkqC53Oqh7e5CzVhvfDINe0f2ge4nbgPbQRY18FAYqAv%2Bdgy0WCNKEWRmnUhRy6hnJUPEInkhLoWlpb1XDFT7Oa7R%2Be1rTBOybkiSuvgzccLljZP%2BJnDjb6lxGpa%2Bu2JE6kK1rZfUDyKA1yJmBFxMPrG%2FX9vdNfpIFuf9hTQTk9UJm42HdTLA1x4sKMvwpLOc2oDWD8yOFhU9TkxIJmv1Lon3%2FmZ2Z8vk62v8pfkmkazE8hSj10fRcJmCQXGQqbKDHMTjzn5jg1TWfkGylwe1WJ7GZFuxHef4aiAk88CMRvCv%2FLT1eD2pN9j7gcARM6ndKYGu2K%2F5iw5yiRbU3NopviNjpmPHRmZhnwXwfh3DkdJ9gjFSjsGOFJnVJrop26jMPlGfcx0XWXkGZ0f2q93xcUYrXYyCDnEStDnAC8RG2Qsyhk4TMfyz1f%2FM9cLZguxfqYxQDahw%2B%2Br6XuHFFtAPEt4Lmhoa8hIgZUtU0IFMJOHRA150Syzv3R5VSIw5hw00dE7FdWB2A6lAv51U2xrEiZuCliV7cbfzX8f7lSflR93pQ82%2BZw8QN2XnKzsMrmVorgIZqKCpCce2l0LU0N1vkQh5ydF9WMPvq88QGOqUB1qbaN5OKzK0AthGkqGmqW1aiM8r8xLEeD9iZF0hVRl%2FvMYjA2vdkqnuo2BggbvEI5NqJfuUniX3%2Bu4s2Y3wF6SqmHbQH7wb07jFDBbI6UDxM9McCGG7Kd1xhCbpglUE%2F%2BgvAoSToAb2M54wd5m%2FtGNttYxDvBR6vMjph2w1RhC9Jxo0QfLXljX7qirquxCmiRYwtfRzmxirY6v8b8ReNFspjw2SN&X-Amz-Signature=8d7179e8d3624222a29f00222325bba555c495b08ed597182518916a9c5d7fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWAU5BX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2B%2BXcw9mxSViske3Aa2OmKe1OXSue0lRD20dBADdL7AiEAv1OJQgqBihzJNlKRkqS2I%2F%2Fys1r4h8eMtCWyusAh1Kcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDN%2Fuazjhus2REe5mZircAwj7RkzKapYaazbVYaeARLepzlvdj0hkqC53Oqh7e5CzVhvfDINe0f2ge4nbgPbQRY18FAYqAv%2Bdgy0WCNKEWRmnUhRy6hnJUPEInkhLoWlpb1XDFT7Oa7R%2Be1rTBOybkiSuvgzccLljZP%2BJnDjb6lxGpa%2Bu2JE6kK1rZfUDyKA1yJmBFxMPrG%2FX9vdNfpIFuf9hTQTk9UJm42HdTLA1x4sKMvwpLOc2oDWD8yOFhU9TkxIJmv1Lon3%2FmZ2Z8vk62v8pfkmkazE8hSj10fRcJmCQXGQqbKDHMTjzn5jg1TWfkGylwe1WJ7GZFuxHef4aiAk88CMRvCv%2FLT1eD2pN9j7gcARM6ndKYGu2K%2F5iw5yiRbU3NopviNjpmPHRmZhnwXwfh3DkdJ9gjFSjsGOFJnVJrop26jMPlGfcx0XWXkGZ0f2q93xcUYrXYyCDnEStDnAC8RG2Qsyhk4TMfyz1f%2FM9cLZguxfqYxQDahw%2B%2Br6XuHFFtAPEt4Lmhoa8hIgZUtU0IFMJOHRA150Syzv3R5VSIw5hw00dE7FdWB2A6lAv51U2xrEiZuCliV7cbfzX8f7lSflR93pQ82%2BZw8QN2XnKzsMrmVorgIZqKCpCce2l0LU0N1vkQh5ydF9WMPvq88QGOqUB1qbaN5OKzK0AthGkqGmqW1aiM8r8xLEeD9iZF0hVRl%2FvMYjA2vdkqnuo2BggbvEI5NqJfuUniX3%2Bu4s2Y3wF6SqmHbQH7wb07jFDBbI6UDxM9McCGG7Kd1xhCbpglUE%2F%2BgvAoSToAb2M54wd5m%2FtGNttYxDvBR6vMjph2w1RhC9Jxo0QfLXljX7qirquxCmiRYwtfRzmxirY6v8b8ReNFspjw2SN&X-Amz-Signature=3d9f493b2b4a9877416672616c6283055212027bf1b64113507f5f04b22e549d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWAU5BX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT%2B%2BXcw9mxSViske3Aa2OmKe1OXSue0lRD20dBADdL7AiEAv1OJQgqBihzJNlKRkqS2I%2F%2Fys1r4h8eMtCWyusAh1Kcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDN%2Fuazjhus2REe5mZircAwj7RkzKapYaazbVYaeARLepzlvdj0hkqC53Oqh7e5CzVhvfDINe0f2ge4nbgPbQRY18FAYqAv%2Bdgy0WCNKEWRmnUhRy6hnJUPEInkhLoWlpb1XDFT7Oa7R%2Be1rTBOybkiSuvgzccLljZP%2BJnDjb6lxGpa%2Bu2JE6kK1rZfUDyKA1yJmBFxMPrG%2FX9vdNfpIFuf9hTQTk9UJm42HdTLA1x4sKMvwpLOc2oDWD8yOFhU9TkxIJmv1Lon3%2FmZ2Z8vk62v8pfkmkazE8hSj10fRcJmCQXGQqbKDHMTjzn5jg1TWfkGylwe1WJ7GZFuxHef4aiAk88CMRvCv%2FLT1eD2pN9j7gcARM6ndKYGu2K%2F5iw5yiRbU3NopviNjpmPHRmZhnwXwfh3DkdJ9gjFSjsGOFJnVJrop26jMPlGfcx0XWXkGZ0f2q93xcUYrXYyCDnEStDnAC8RG2Qsyhk4TMfyz1f%2FM9cLZguxfqYxQDahw%2B%2Br6XuHFFtAPEt4Lmhoa8hIgZUtU0IFMJOHRA150Syzv3R5VSIw5hw00dE7FdWB2A6lAv51U2xrEiZuCliV7cbfzX8f7lSflR93pQ82%2BZw8QN2XnKzsMrmVorgIZqKCpCce2l0LU0N1vkQh5ydF9WMPvq88QGOqUB1qbaN5OKzK0AthGkqGmqW1aiM8r8xLEeD9iZF0hVRl%2FvMYjA2vdkqnuo2BggbvEI5NqJfuUniX3%2Bu4s2Y3wF6SqmHbQH7wb07jFDBbI6UDxM9McCGG7Kd1xhCbpglUE%2F%2BgvAoSToAb2M54wd5m%2FtGNttYxDvBR6vMjph2w1RhC9Jxo0QfLXljX7qirquxCmiRYwtfRzmxirY6v8b8ReNFspjw2SN&X-Amz-Signature=021ce71ced6e9fee9676d353c6b30fb270250ea9e432a0fb9adff0b0c4a1151d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
