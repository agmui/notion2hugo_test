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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XN3A37O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0mqj9dOgxqC6iC%2Bmm5RlLQlEH0nksuw8JaQVbDgW0QIhAJjHtax8uiX9CFfSGIhz8NoxgnDpZ%2BDEznuviMLh1fX%2BKv8DCB4QABoMNjM3NDIzMTgzODA1Igx%2FpBDBrunSg9uUlf4q3APdTGe8sklWnb72LBKYJMyevKOoNSohn10ycva4jN8vBUZLG%2B1J3Tnu3%2B%2FuHp8NRh92YkQ4rI8SJxdYKZw3Upnb54Pqw9Yh2nfZL1ZZNPRaxG3KgvjAc6sBrHyu1ApKqwRcRWiteKO%2BftZ1skhK4TNY8y5SZfTSh%2BUwgMWCv0pGZBYcLnNv%2Bjlc33ya7Bp4YqtcVTGqt%2BW3QoQY1WwZaTloV3dYJDT23hw4jMVOeLFqfmXpa33E0j704Mmk96Z7FRBCNk1A7wQGDj0WMTxPCIUeyMpITSzX4uVwKgp5P3iZw1Uj58dxu2S69m0b6e4dWX8n3xt%2Bx3xbXWOmztLSs13mYpj1YueZMErT6N7K13rXiWzRrsYZ9iV%2BicvbeQ%2FisWsAfP60Me4prYOBrQQxzu1CS7CybXFZS1cwenYBga8SEhdcYwZX5hr2aLYgjjOaE6AR7qb%2Fs9SybnAq3NgpnVVc5c18ZmpyOpFXBxYf9m6KIjFHfJ8VYIxeiYmQC1Y0qEALsl8ow7qE6CMjcF2cCqmWBIVVYEJIflALikQal2Qumz5UmNNw5a6ZgIESIgewn5%2BeblKZNI9wtNPtjTJga6ySTtWSXZEwbo%2B%2BWYPyeQQfDNQIdF4asntqBZl2%2FzDCgLrEBjqkAfBr2VvTZ8%2BkbkHMGfGO8DgRAtUAexXG%2BN%2F0GG%2BLmQAn2ikHODBQytHc3qRVCBGXIW%2FBsN4TH7x4OqfppZGUSn054%2BxB2ilaL2Zy7dW1E8ErtSDTyNj%2FCw%2F%2FX%2Bphsp8l3lvAyrxN79n8w8ltdRFnul%2Bu7r6JldTxvAMWUbY4pZgDtgzkmSC6REHn7JDEiPZXdVadj9gGG89ZZzeP6vPJte%2BdSIzk&X-Amz-Signature=2a596075444a5af5154ede5493bb296dbf20d55eba6a724bca9f107b180dff7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XN3A37O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0mqj9dOgxqC6iC%2Bmm5RlLQlEH0nksuw8JaQVbDgW0QIhAJjHtax8uiX9CFfSGIhz8NoxgnDpZ%2BDEznuviMLh1fX%2BKv8DCB4QABoMNjM3NDIzMTgzODA1Igx%2FpBDBrunSg9uUlf4q3APdTGe8sklWnb72LBKYJMyevKOoNSohn10ycva4jN8vBUZLG%2B1J3Tnu3%2B%2FuHp8NRh92YkQ4rI8SJxdYKZw3Upnb54Pqw9Yh2nfZL1ZZNPRaxG3KgvjAc6sBrHyu1ApKqwRcRWiteKO%2BftZ1skhK4TNY8y5SZfTSh%2BUwgMWCv0pGZBYcLnNv%2Bjlc33ya7Bp4YqtcVTGqt%2BW3QoQY1WwZaTloV3dYJDT23hw4jMVOeLFqfmXpa33E0j704Mmk96Z7FRBCNk1A7wQGDj0WMTxPCIUeyMpITSzX4uVwKgp5P3iZw1Uj58dxu2S69m0b6e4dWX8n3xt%2Bx3xbXWOmztLSs13mYpj1YueZMErT6N7K13rXiWzRrsYZ9iV%2BicvbeQ%2FisWsAfP60Me4prYOBrQQxzu1CS7CybXFZS1cwenYBga8SEhdcYwZX5hr2aLYgjjOaE6AR7qb%2Fs9SybnAq3NgpnVVc5c18ZmpyOpFXBxYf9m6KIjFHfJ8VYIxeiYmQC1Y0qEALsl8ow7qE6CMjcF2cCqmWBIVVYEJIflALikQal2Qumz5UmNNw5a6ZgIESIgewn5%2BeblKZNI9wtNPtjTJga6ySTtWSXZEwbo%2B%2BWYPyeQQfDNQIdF4asntqBZl2%2FzDCgLrEBjqkAfBr2VvTZ8%2BkbkHMGfGO8DgRAtUAexXG%2BN%2F0GG%2BLmQAn2ikHODBQytHc3qRVCBGXIW%2FBsN4TH7x4OqfppZGUSn054%2BxB2ilaL2Zy7dW1E8ErtSDTyNj%2FCw%2F%2FX%2Bphsp8l3lvAyrxN79n8w8ltdRFnul%2Bu7r6JldTxvAMWUbY4pZgDtgzkmSC6REHn7JDEiPZXdVadj9gGG89ZZzeP6vPJte%2BdSIzk&X-Amz-Signature=612da017d71042a925baa0a313c261119965bba3964ef177caf169e2748496a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XN3A37O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0mqj9dOgxqC6iC%2Bmm5RlLQlEH0nksuw8JaQVbDgW0QIhAJjHtax8uiX9CFfSGIhz8NoxgnDpZ%2BDEznuviMLh1fX%2BKv8DCB4QABoMNjM3NDIzMTgzODA1Igx%2FpBDBrunSg9uUlf4q3APdTGe8sklWnb72LBKYJMyevKOoNSohn10ycva4jN8vBUZLG%2B1J3Tnu3%2B%2FuHp8NRh92YkQ4rI8SJxdYKZw3Upnb54Pqw9Yh2nfZL1ZZNPRaxG3KgvjAc6sBrHyu1ApKqwRcRWiteKO%2BftZ1skhK4TNY8y5SZfTSh%2BUwgMWCv0pGZBYcLnNv%2Bjlc33ya7Bp4YqtcVTGqt%2BW3QoQY1WwZaTloV3dYJDT23hw4jMVOeLFqfmXpa33E0j704Mmk96Z7FRBCNk1A7wQGDj0WMTxPCIUeyMpITSzX4uVwKgp5P3iZw1Uj58dxu2S69m0b6e4dWX8n3xt%2Bx3xbXWOmztLSs13mYpj1YueZMErT6N7K13rXiWzRrsYZ9iV%2BicvbeQ%2FisWsAfP60Me4prYOBrQQxzu1CS7CybXFZS1cwenYBga8SEhdcYwZX5hr2aLYgjjOaE6AR7qb%2Fs9SybnAq3NgpnVVc5c18ZmpyOpFXBxYf9m6KIjFHfJ8VYIxeiYmQC1Y0qEALsl8ow7qE6CMjcF2cCqmWBIVVYEJIflALikQal2Qumz5UmNNw5a6ZgIESIgewn5%2BeblKZNI9wtNPtjTJga6ySTtWSXZEwbo%2B%2BWYPyeQQfDNQIdF4asntqBZl2%2FzDCgLrEBjqkAfBr2VvTZ8%2BkbkHMGfGO8DgRAtUAexXG%2BN%2F0GG%2BLmQAn2ikHODBQytHc3qRVCBGXIW%2FBsN4TH7x4OqfppZGUSn054%2BxB2ilaL2Zy7dW1E8ErtSDTyNj%2FCw%2F%2FX%2Bphsp8l3lvAyrxN79n8w8ltdRFnul%2Bu7r6JldTxvAMWUbY4pZgDtgzkmSC6REHn7JDEiPZXdVadj9gGG89ZZzeP6vPJte%2BdSIzk&X-Amz-Signature=598b2da9797364550f28c3751041560302e9475405da5b3899119ede3b215efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XN3A37O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0mqj9dOgxqC6iC%2Bmm5RlLQlEH0nksuw8JaQVbDgW0QIhAJjHtax8uiX9CFfSGIhz8NoxgnDpZ%2BDEznuviMLh1fX%2BKv8DCB4QABoMNjM3NDIzMTgzODA1Igx%2FpBDBrunSg9uUlf4q3APdTGe8sklWnb72LBKYJMyevKOoNSohn10ycva4jN8vBUZLG%2B1J3Tnu3%2B%2FuHp8NRh92YkQ4rI8SJxdYKZw3Upnb54Pqw9Yh2nfZL1ZZNPRaxG3KgvjAc6sBrHyu1ApKqwRcRWiteKO%2BftZ1skhK4TNY8y5SZfTSh%2BUwgMWCv0pGZBYcLnNv%2Bjlc33ya7Bp4YqtcVTGqt%2BW3QoQY1WwZaTloV3dYJDT23hw4jMVOeLFqfmXpa33E0j704Mmk96Z7FRBCNk1A7wQGDj0WMTxPCIUeyMpITSzX4uVwKgp5P3iZw1Uj58dxu2S69m0b6e4dWX8n3xt%2Bx3xbXWOmztLSs13mYpj1YueZMErT6N7K13rXiWzRrsYZ9iV%2BicvbeQ%2FisWsAfP60Me4prYOBrQQxzu1CS7CybXFZS1cwenYBga8SEhdcYwZX5hr2aLYgjjOaE6AR7qb%2Fs9SybnAq3NgpnVVc5c18ZmpyOpFXBxYf9m6KIjFHfJ8VYIxeiYmQC1Y0qEALsl8ow7qE6CMjcF2cCqmWBIVVYEJIflALikQal2Qumz5UmNNw5a6ZgIESIgewn5%2BeblKZNI9wtNPtjTJga6ySTtWSXZEwbo%2B%2BWYPyeQQfDNQIdF4asntqBZl2%2FzDCgLrEBjqkAfBr2VvTZ8%2BkbkHMGfGO8DgRAtUAexXG%2BN%2F0GG%2BLmQAn2ikHODBQytHc3qRVCBGXIW%2FBsN4TH7x4OqfppZGUSn054%2BxB2ilaL2Zy7dW1E8ErtSDTyNj%2FCw%2F%2FX%2Bphsp8l3lvAyrxN79n8w8ltdRFnul%2Bu7r6JldTxvAMWUbY4pZgDtgzkmSC6REHn7JDEiPZXdVadj9gGG89ZZzeP6vPJte%2BdSIzk&X-Amz-Signature=38ad21c35ecdc8f4f30f47df4fe9000d350fdf2a2884d419eb949cc3460de3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XN3A37O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0mqj9dOgxqC6iC%2Bmm5RlLQlEH0nksuw8JaQVbDgW0QIhAJjHtax8uiX9CFfSGIhz8NoxgnDpZ%2BDEznuviMLh1fX%2BKv8DCB4QABoMNjM3NDIzMTgzODA1Igx%2FpBDBrunSg9uUlf4q3APdTGe8sklWnb72LBKYJMyevKOoNSohn10ycva4jN8vBUZLG%2B1J3Tnu3%2B%2FuHp8NRh92YkQ4rI8SJxdYKZw3Upnb54Pqw9Yh2nfZL1ZZNPRaxG3KgvjAc6sBrHyu1ApKqwRcRWiteKO%2BftZ1skhK4TNY8y5SZfTSh%2BUwgMWCv0pGZBYcLnNv%2Bjlc33ya7Bp4YqtcVTGqt%2BW3QoQY1WwZaTloV3dYJDT23hw4jMVOeLFqfmXpa33E0j704Mmk96Z7FRBCNk1A7wQGDj0WMTxPCIUeyMpITSzX4uVwKgp5P3iZw1Uj58dxu2S69m0b6e4dWX8n3xt%2Bx3xbXWOmztLSs13mYpj1YueZMErT6N7K13rXiWzRrsYZ9iV%2BicvbeQ%2FisWsAfP60Me4prYOBrQQxzu1CS7CybXFZS1cwenYBga8SEhdcYwZX5hr2aLYgjjOaE6AR7qb%2Fs9SybnAq3NgpnVVc5c18ZmpyOpFXBxYf9m6KIjFHfJ8VYIxeiYmQC1Y0qEALsl8ow7qE6CMjcF2cCqmWBIVVYEJIflALikQal2Qumz5UmNNw5a6ZgIESIgewn5%2BeblKZNI9wtNPtjTJga6ySTtWSXZEwbo%2B%2BWYPyeQQfDNQIdF4asntqBZl2%2FzDCgLrEBjqkAfBr2VvTZ8%2BkbkHMGfGO8DgRAtUAexXG%2BN%2F0GG%2BLmQAn2ikHODBQytHc3qRVCBGXIW%2FBsN4TH7x4OqfppZGUSn054%2BxB2ilaL2Zy7dW1E8ErtSDTyNj%2FCw%2F%2FX%2Bphsp8l3lvAyrxN79n8w8ltdRFnul%2Bu7r6JldTxvAMWUbY4pZgDtgzkmSC6REHn7JDEiPZXdVadj9gGG89ZZzeP6vPJte%2BdSIzk&X-Amz-Signature=83d0ccb13ecb0809a7e318ce03eca543718750a4c5fbf511f10848f2b2a1dc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
