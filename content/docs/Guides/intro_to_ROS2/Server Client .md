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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVQOEPJX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvHaAXZpdqNWoWab0pwFBuZAUKhTe%2FHJMN3SBFTFDiJAiEA%2B1agxwiMS9%2F0f9AE9kgNwpj4dYsoWSQtGOqQioQW0ikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIpW0DVJrvlw%2Fbc0WCrcA4pDbjK7CrZOa5hm%2BuzEZQdDtDKTZcYeq0qFPyCRe8CAE%2FnU%2FUV4OIzDVCfwZ7okDRkQfcUFb0rwPtX7y7eWWPX4y%2B7SZdb9fsYXqywi%2FvOCAQ5gbU5cLBGVUZCJ7nIpjFAfvi99mTiQvvtnFyGWJxB%2FA3mNzAEsInrNIRNFa%2BFdVRs%2BZRK8beWiE%2FKN%2FQ0G%2BBBkfHc70EQzm5tVh86HUsxisi%2FJ8q9jTM42JoBfCcnSx7di06iPNbsghUiZBNVGnypthPqkNQgQgcYM7cjXNhj0niOhFAbVcFh5dcIjJERHKA2MesuHcu%2Fzmrk91E4PuXU8JFIo%2FULvyyZF318jR%2BS%2F8e8W0qCr%2FLn%2FLWnmsgXj9yKTP%2FwcYq7ABNw%2FBubski9sgZyzarUx9YzBtvAOjZ2Q6ZBewviY6kLJ0d56nkAJw88sIHk19QRmoFaxMFsjIVYU0zcyjYDmDp7f%2FdG5nbMX8lQFn6Pbyne4LrYz03eB9FTC5KDLWY793ka2M96N6E7WFn4RiV%2B3W6M7%2FOLMog6%2FG3UTc9Es1Z%2BQSQaoL6y%2B9zibBm2%2BnCMoYvgYG50zWnVuKMK0bUIg%2BvdlF5yFcswpISCBseCfWzok1iyv%2FHxjlgf9KPCOaWs1H7dwMLjHg8AGOqUBxqXK7oIbG%2FGGCPo8B%2FvxBh8QLYWPWL6%2FKl%2B4LuYDB9F%2BOy4KCXPQAUlqNwqs5x%2BS5%2FU4ZPKuEwmi70VZd5QRE%2FfX3AETtLdlSj0hOQZ9xOnEs3Nep6P13Mnf7nxUQdwqg98xX%2B0RsnX6d0aOxe%2FY4fPrBqd3PQrFDXzDg6TAipmEPTghFnQArKqrMzdqb4bI%2BgCDYN9i%2B%2FWY822hI3iTI6iSlxfB&X-Amz-Signature=e12dd6df05cbdecfc79be6b70d061771ef19b6cae4186a2390b261ddd67fad8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVQOEPJX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvHaAXZpdqNWoWab0pwFBuZAUKhTe%2FHJMN3SBFTFDiJAiEA%2B1agxwiMS9%2F0f9AE9kgNwpj4dYsoWSQtGOqQioQW0ikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIpW0DVJrvlw%2Fbc0WCrcA4pDbjK7CrZOa5hm%2BuzEZQdDtDKTZcYeq0qFPyCRe8CAE%2FnU%2FUV4OIzDVCfwZ7okDRkQfcUFb0rwPtX7y7eWWPX4y%2B7SZdb9fsYXqywi%2FvOCAQ5gbU5cLBGVUZCJ7nIpjFAfvi99mTiQvvtnFyGWJxB%2FA3mNzAEsInrNIRNFa%2BFdVRs%2BZRK8beWiE%2FKN%2FQ0G%2BBBkfHc70EQzm5tVh86HUsxisi%2FJ8q9jTM42JoBfCcnSx7di06iPNbsghUiZBNVGnypthPqkNQgQgcYM7cjXNhj0niOhFAbVcFh5dcIjJERHKA2MesuHcu%2Fzmrk91E4PuXU8JFIo%2FULvyyZF318jR%2BS%2F8e8W0qCr%2FLn%2FLWnmsgXj9yKTP%2FwcYq7ABNw%2FBubski9sgZyzarUx9YzBtvAOjZ2Q6ZBewviY6kLJ0d56nkAJw88sIHk19QRmoFaxMFsjIVYU0zcyjYDmDp7f%2FdG5nbMX8lQFn6Pbyne4LrYz03eB9FTC5KDLWY793ka2M96N6E7WFn4RiV%2B3W6M7%2FOLMog6%2FG3UTc9Es1Z%2BQSQaoL6y%2B9zibBm2%2BnCMoYvgYG50zWnVuKMK0bUIg%2BvdlF5yFcswpISCBseCfWzok1iyv%2FHxjlgf9KPCOaWs1H7dwMLjHg8AGOqUBxqXK7oIbG%2FGGCPo8B%2FvxBh8QLYWPWL6%2FKl%2B4LuYDB9F%2BOy4KCXPQAUlqNwqs5x%2BS5%2FU4ZPKuEwmi70VZd5QRE%2FfX3AETtLdlSj0hOQZ9xOnEs3Nep6P13Mnf7nxUQdwqg98xX%2B0RsnX6d0aOxe%2FY4fPrBqd3PQrFDXzDg6TAipmEPTghFnQArKqrMzdqb4bI%2BgCDYN9i%2B%2FWY822hI3iTI6iSlxfB&X-Amz-Signature=89ebc340ca3c7ba73570a38c166e636fa4c8604464412c2ed1fff1cd6bd199c8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVQOEPJX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvHaAXZpdqNWoWab0pwFBuZAUKhTe%2FHJMN3SBFTFDiJAiEA%2B1agxwiMS9%2F0f9AE9kgNwpj4dYsoWSQtGOqQioQW0ikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIpW0DVJrvlw%2Fbc0WCrcA4pDbjK7CrZOa5hm%2BuzEZQdDtDKTZcYeq0qFPyCRe8CAE%2FnU%2FUV4OIzDVCfwZ7okDRkQfcUFb0rwPtX7y7eWWPX4y%2B7SZdb9fsYXqywi%2FvOCAQ5gbU5cLBGVUZCJ7nIpjFAfvi99mTiQvvtnFyGWJxB%2FA3mNzAEsInrNIRNFa%2BFdVRs%2BZRK8beWiE%2FKN%2FQ0G%2BBBkfHc70EQzm5tVh86HUsxisi%2FJ8q9jTM42JoBfCcnSx7di06iPNbsghUiZBNVGnypthPqkNQgQgcYM7cjXNhj0niOhFAbVcFh5dcIjJERHKA2MesuHcu%2Fzmrk91E4PuXU8JFIo%2FULvyyZF318jR%2BS%2F8e8W0qCr%2FLn%2FLWnmsgXj9yKTP%2FwcYq7ABNw%2FBubski9sgZyzarUx9YzBtvAOjZ2Q6ZBewviY6kLJ0d56nkAJw88sIHk19QRmoFaxMFsjIVYU0zcyjYDmDp7f%2FdG5nbMX8lQFn6Pbyne4LrYz03eB9FTC5KDLWY793ka2M96N6E7WFn4RiV%2B3W6M7%2FOLMog6%2FG3UTc9Es1Z%2BQSQaoL6y%2B9zibBm2%2BnCMoYvgYG50zWnVuKMK0bUIg%2BvdlF5yFcswpISCBseCfWzok1iyv%2FHxjlgf9KPCOaWs1H7dwMLjHg8AGOqUBxqXK7oIbG%2FGGCPo8B%2FvxBh8QLYWPWL6%2FKl%2B4LuYDB9F%2BOy4KCXPQAUlqNwqs5x%2BS5%2FU4ZPKuEwmi70VZd5QRE%2FfX3AETtLdlSj0hOQZ9xOnEs3Nep6P13Mnf7nxUQdwqg98xX%2B0RsnX6d0aOxe%2FY4fPrBqd3PQrFDXzDg6TAipmEPTghFnQArKqrMzdqb4bI%2BgCDYN9i%2B%2FWY822hI3iTI6iSlxfB&X-Amz-Signature=be230105ca2bfe001b6617c83dcea72ecec1b503b737535724d27e1736977e51&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVQOEPJX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvHaAXZpdqNWoWab0pwFBuZAUKhTe%2FHJMN3SBFTFDiJAiEA%2B1agxwiMS9%2F0f9AE9kgNwpj4dYsoWSQtGOqQioQW0ikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIpW0DVJrvlw%2Fbc0WCrcA4pDbjK7CrZOa5hm%2BuzEZQdDtDKTZcYeq0qFPyCRe8CAE%2FnU%2FUV4OIzDVCfwZ7okDRkQfcUFb0rwPtX7y7eWWPX4y%2B7SZdb9fsYXqywi%2FvOCAQ5gbU5cLBGVUZCJ7nIpjFAfvi99mTiQvvtnFyGWJxB%2FA3mNzAEsInrNIRNFa%2BFdVRs%2BZRK8beWiE%2FKN%2FQ0G%2BBBkfHc70EQzm5tVh86HUsxisi%2FJ8q9jTM42JoBfCcnSx7di06iPNbsghUiZBNVGnypthPqkNQgQgcYM7cjXNhj0niOhFAbVcFh5dcIjJERHKA2MesuHcu%2Fzmrk91E4PuXU8JFIo%2FULvyyZF318jR%2BS%2F8e8W0qCr%2FLn%2FLWnmsgXj9yKTP%2FwcYq7ABNw%2FBubski9sgZyzarUx9YzBtvAOjZ2Q6ZBewviY6kLJ0d56nkAJw88sIHk19QRmoFaxMFsjIVYU0zcyjYDmDp7f%2FdG5nbMX8lQFn6Pbyne4LrYz03eB9FTC5KDLWY793ka2M96N6E7WFn4RiV%2B3W6M7%2FOLMog6%2FG3UTc9Es1Z%2BQSQaoL6y%2B9zibBm2%2BnCMoYvgYG50zWnVuKMK0bUIg%2BvdlF5yFcswpISCBseCfWzok1iyv%2FHxjlgf9KPCOaWs1H7dwMLjHg8AGOqUBxqXK7oIbG%2FGGCPo8B%2FvxBh8QLYWPWL6%2FKl%2B4LuYDB9F%2BOy4KCXPQAUlqNwqs5x%2BS5%2FU4ZPKuEwmi70VZd5QRE%2FfX3AETtLdlSj0hOQZ9xOnEs3Nep6P13Mnf7nxUQdwqg98xX%2B0RsnX6d0aOxe%2FY4fPrBqd3PQrFDXzDg6TAipmEPTghFnQArKqrMzdqb4bI%2BgCDYN9i%2B%2FWY822hI3iTI6iSlxfB&X-Amz-Signature=aa5df60b76f0066402639b14b75ed80a0573edf93d1243ebfefd91e6cd42e1be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVQOEPJX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvHaAXZpdqNWoWab0pwFBuZAUKhTe%2FHJMN3SBFTFDiJAiEA%2B1agxwiMS9%2F0f9AE9kgNwpj4dYsoWSQtGOqQioQW0ikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIpW0DVJrvlw%2Fbc0WCrcA4pDbjK7CrZOa5hm%2BuzEZQdDtDKTZcYeq0qFPyCRe8CAE%2FnU%2FUV4OIzDVCfwZ7okDRkQfcUFb0rwPtX7y7eWWPX4y%2B7SZdb9fsYXqywi%2FvOCAQ5gbU5cLBGVUZCJ7nIpjFAfvi99mTiQvvtnFyGWJxB%2FA3mNzAEsInrNIRNFa%2BFdVRs%2BZRK8beWiE%2FKN%2FQ0G%2BBBkfHc70EQzm5tVh86HUsxisi%2FJ8q9jTM42JoBfCcnSx7di06iPNbsghUiZBNVGnypthPqkNQgQgcYM7cjXNhj0niOhFAbVcFh5dcIjJERHKA2MesuHcu%2Fzmrk91E4PuXU8JFIo%2FULvyyZF318jR%2BS%2F8e8W0qCr%2FLn%2FLWnmsgXj9yKTP%2FwcYq7ABNw%2FBubski9sgZyzarUx9YzBtvAOjZ2Q6ZBewviY6kLJ0d56nkAJw88sIHk19QRmoFaxMFsjIVYU0zcyjYDmDp7f%2FdG5nbMX8lQFn6Pbyne4LrYz03eB9FTC5KDLWY793ka2M96N6E7WFn4RiV%2B3W6M7%2FOLMog6%2FG3UTc9Es1Z%2BQSQaoL6y%2B9zibBm2%2BnCMoYvgYG50zWnVuKMK0bUIg%2BvdlF5yFcswpISCBseCfWzok1iyv%2FHxjlgf9KPCOaWs1H7dwMLjHg8AGOqUBxqXK7oIbG%2FGGCPo8B%2FvxBh8QLYWPWL6%2FKl%2B4LuYDB9F%2BOy4KCXPQAUlqNwqs5x%2BS5%2FU4ZPKuEwmi70VZd5QRE%2FfX3AETtLdlSj0hOQZ9xOnEs3Nep6P13Mnf7nxUQdwqg98xX%2B0RsnX6d0aOxe%2FY4fPrBqd3PQrFDXzDg6TAipmEPTghFnQArKqrMzdqb4bI%2BgCDYN9i%2B%2FWY822hI3iTI6iSlxfB&X-Amz-Signature=5e629ce16b64177684e2f30d7a344f9599bbff5c5c7993675902b8a4d6e1153c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
