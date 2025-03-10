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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PYIEN7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC2HIEsfZsDqXi5OVkZDBwE9GkN8ZjHemnKzbY7G3wr4QIhALaE3zHN%2FFyESbq6GY4mkk0986Py4PbS1mAr%2FI5UReU2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5krNYykSG3GVGxGkq3ANZOVER0BrwbLjai16ApwnE65HH9sD1RsLp73mY7OEsIsDCiWKqprCzhWIwTVORLbWcBKu8DMG%2BbxcYUeJBkjLxi5DvAaSUwHFsTnjsa99wJezNb9L5h4q%2FDXtkSTFj2ncr4Viafd2AMGzUz%2BKI3DoO9dvhGc49cG0FBG4xAUCW6HHzifrDxz4k3e6VRyguDzGxjj2vYZDEpcRoJ2iCQVaXnKaFYhgkkN%2FRTKmZkTgL7nQssM1C5K4CBeGhfYdfdCLkGoArYfslXtmYRrg0bI8GAbv10duC9%2FArMUPr6f7lcvSGS9LyKitytDJz3HNm90IbkrLemPvDA%2Bul16Ce5YnQkQqpx0oYAxbCOBUku1FerDXqSXyNxsT%2Bbt0eP2wE%2FrDsAVb4YHtm3c%2Bt9SrsNaAV0rcmbQ7ddCce2d9tsjXNVx0QgaYcsIs5x6mLiC9DnecKWRFGSLm%2Fi8iyaM9oHVXCiRGbCskj8ySrV3s7lZSTmbGzS8QJYuotkr57yTMzRrDbg%2BI%2FhMCZNWMssZvxVkXckob7bhmE7u546AsdX0ZGumXe%2F9PLJyZ%2BVxzFBzFF1uv6l6PuOb%2F%2Bgb8xBN7IjyDJpJ4V8XtJxqVaeU1pJA3WNuDKFHNXF1orYb0pcjCS3bi%2BBjqkAU5reiR%2F9QSzUQxTrWEfYoXNOtoMMT%2BuWlHjVEJVz1%2BpzPkdNP1c0VDqlFCsCa7oBO4w6CnaQUk2uuf5aCvjtxajwEU6RxSO0sRJSDCuf134vFgBPgDmFubgu3dLmkT0gI%2BrNsJYyre8GpbsJRpI4JDCiU0eQJCDRE3Ck24J1GU43NAmnF%2FVzoZKvrLPNTT8bWOxeOIYDGhD7dT2WtNhXx1jFffw&X-Amz-Signature=669276bfcaf1e274697636e9e3921df9ca7a408b7d2728056d9ee5b6e751c2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PYIEN7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC2HIEsfZsDqXi5OVkZDBwE9GkN8ZjHemnKzbY7G3wr4QIhALaE3zHN%2FFyESbq6GY4mkk0986Py4PbS1mAr%2FI5UReU2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5krNYykSG3GVGxGkq3ANZOVER0BrwbLjai16ApwnE65HH9sD1RsLp73mY7OEsIsDCiWKqprCzhWIwTVORLbWcBKu8DMG%2BbxcYUeJBkjLxi5DvAaSUwHFsTnjsa99wJezNb9L5h4q%2FDXtkSTFj2ncr4Viafd2AMGzUz%2BKI3DoO9dvhGc49cG0FBG4xAUCW6HHzifrDxz4k3e6VRyguDzGxjj2vYZDEpcRoJ2iCQVaXnKaFYhgkkN%2FRTKmZkTgL7nQssM1C5K4CBeGhfYdfdCLkGoArYfslXtmYRrg0bI8GAbv10duC9%2FArMUPr6f7lcvSGS9LyKitytDJz3HNm90IbkrLemPvDA%2Bul16Ce5YnQkQqpx0oYAxbCOBUku1FerDXqSXyNxsT%2Bbt0eP2wE%2FrDsAVb4YHtm3c%2Bt9SrsNaAV0rcmbQ7ddCce2d9tsjXNVx0QgaYcsIs5x6mLiC9DnecKWRFGSLm%2Fi8iyaM9oHVXCiRGbCskj8ySrV3s7lZSTmbGzS8QJYuotkr57yTMzRrDbg%2BI%2FhMCZNWMssZvxVkXckob7bhmE7u546AsdX0ZGumXe%2F9PLJyZ%2BVxzFBzFF1uv6l6PuOb%2F%2Bgb8xBN7IjyDJpJ4V8XtJxqVaeU1pJA3WNuDKFHNXF1orYb0pcjCS3bi%2BBjqkAU5reiR%2F9QSzUQxTrWEfYoXNOtoMMT%2BuWlHjVEJVz1%2BpzPkdNP1c0VDqlFCsCa7oBO4w6CnaQUk2uuf5aCvjtxajwEU6RxSO0sRJSDCuf134vFgBPgDmFubgu3dLmkT0gI%2BrNsJYyre8GpbsJRpI4JDCiU0eQJCDRE3Ck24J1GU43NAmnF%2FVzoZKvrLPNTT8bWOxeOIYDGhD7dT2WtNhXx1jFffw&X-Amz-Signature=5d75b123964e144313a9bbb0514564ef9c54f087656c12ceee947ae9490493bf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PYIEN7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC2HIEsfZsDqXi5OVkZDBwE9GkN8ZjHemnKzbY7G3wr4QIhALaE3zHN%2FFyESbq6GY4mkk0986Py4PbS1mAr%2FI5UReU2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5krNYykSG3GVGxGkq3ANZOVER0BrwbLjai16ApwnE65HH9sD1RsLp73mY7OEsIsDCiWKqprCzhWIwTVORLbWcBKu8DMG%2BbxcYUeJBkjLxi5DvAaSUwHFsTnjsa99wJezNb9L5h4q%2FDXtkSTFj2ncr4Viafd2AMGzUz%2BKI3DoO9dvhGc49cG0FBG4xAUCW6HHzifrDxz4k3e6VRyguDzGxjj2vYZDEpcRoJ2iCQVaXnKaFYhgkkN%2FRTKmZkTgL7nQssM1C5K4CBeGhfYdfdCLkGoArYfslXtmYRrg0bI8GAbv10duC9%2FArMUPr6f7lcvSGS9LyKitytDJz3HNm90IbkrLemPvDA%2Bul16Ce5YnQkQqpx0oYAxbCOBUku1FerDXqSXyNxsT%2Bbt0eP2wE%2FrDsAVb4YHtm3c%2Bt9SrsNaAV0rcmbQ7ddCce2d9tsjXNVx0QgaYcsIs5x6mLiC9DnecKWRFGSLm%2Fi8iyaM9oHVXCiRGbCskj8ySrV3s7lZSTmbGzS8QJYuotkr57yTMzRrDbg%2BI%2FhMCZNWMssZvxVkXckob7bhmE7u546AsdX0ZGumXe%2F9PLJyZ%2BVxzFBzFF1uv6l6PuOb%2F%2Bgb8xBN7IjyDJpJ4V8XtJxqVaeU1pJA3WNuDKFHNXF1orYb0pcjCS3bi%2BBjqkAU5reiR%2F9QSzUQxTrWEfYoXNOtoMMT%2BuWlHjVEJVz1%2BpzPkdNP1c0VDqlFCsCa7oBO4w6CnaQUk2uuf5aCvjtxajwEU6RxSO0sRJSDCuf134vFgBPgDmFubgu3dLmkT0gI%2BrNsJYyre8GpbsJRpI4JDCiU0eQJCDRE3Ck24J1GU43NAmnF%2FVzoZKvrLPNTT8bWOxeOIYDGhD7dT2WtNhXx1jFffw&X-Amz-Signature=abc405b51f217189167078b9e7dc27949bd4dc23d9444d9d1a666c16f4bf40a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PYIEN7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC2HIEsfZsDqXi5OVkZDBwE9GkN8ZjHemnKzbY7G3wr4QIhALaE3zHN%2FFyESbq6GY4mkk0986Py4PbS1mAr%2FI5UReU2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5krNYykSG3GVGxGkq3ANZOVER0BrwbLjai16ApwnE65HH9sD1RsLp73mY7OEsIsDCiWKqprCzhWIwTVORLbWcBKu8DMG%2BbxcYUeJBkjLxi5DvAaSUwHFsTnjsa99wJezNb9L5h4q%2FDXtkSTFj2ncr4Viafd2AMGzUz%2BKI3DoO9dvhGc49cG0FBG4xAUCW6HHzifrDxz4k3e6VRyguDzGxjj2vYZDEpcRoJ2iCQVaXnKaFYhgkkN%2FRTKmZkTgL7nQssM1C5K4CBeGhfYdfdCLkGoArYfslXtmYRrg0bI8GAbv10duC9%2FArMUPr6f7lcvSGS9LyKitytDJz3HNm90IbkrLemPvDA%2Bul16Ce5YnQkQqpx0oYAxbCOBUku1FerDXqSXyNxsT%2Bbt0eP2wE%2FrDsAVb4YHtm3c%2Bt9SrsNaAV0rcmbQ7ddCce2d9tsjXNVx0QgaYcsIs5x6mLiC9DnecKWRFGSLm%2Fi8iyaM9oHVXCiRGbCskj8ySrV3s7lZSTmbGzS8QJYuotkr57yTMzRrDbg%2BI%2FhMCZNWMssZvxVkXckob7bhmE7u546AsdX0ZGumXe%2F9PLJyZ%2BVxzFBzFF1uv6l6PuOb%2F%2Bgb8xBN7IjyDJpJ4V8XtJxqVaeU1pJA3WNuDKFHNXF1orYb0pcjCS3bi%2BBjqkAU5reiR%2F9QSzUQxTrWEfYoXNOtoMMT%2BuWlHjVEJVz1%2BpzPkdNP1c0VDqlFCsCa7oBO4w6CnaQUk2uuf5aCvjtxajwEU6RxSO0sRJSDCuf134vFgBPgDmFubgu3dLmkT0gI%2BrNsJYyre8GpbsJRpI4JDCiU0eQJCDRE3Ck24J1GU43NAmnF%2FVzoZKvrLPNTT8bWOxeOIYDGhD7dT2WtNhXx1jFffw&X-Amz-Signature=b3f9d9635564798760f92c0fd54a62eeaae284873de972d409a588f5754d4aac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PYIEN7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC2HIEsfZsDqXi5OVkZDBwE9GkN8ZjHemnKzbY7G3wr4QIhALaE3zHN%2FFyESbq6GY4mkk0986Py4PbS1mAr%2FI5UReU2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5krNYykSG3GVGxGkq3ANZOVER0BrwbLjai16ApwnE65HH9sD1RsLp73mY7OEsIsDCiWKqprCzhWIwTVORLbWcBKu8DMG%2BbxcYUeJBkjLxi5DvAaSUwHFsTnjsa99wJezNb9L5h4q%2FDXtkSTFj2ncr4Viafd2AMGzUz%2BKI3DoO9dvhGc49cG0FBG4xAUCW6HHzifrDxz4k3e6VRyguDzGxjj2vYZDEpcRoJ2iCQVaXnKaFYhgkkN%2FRTKmZkTgL7nQssM1C5K4CBeGhfYdfdCLkGoArYfslXtmYRrg0bI8GAbv10duC9%2FArMUPr6f7lcvSGS9LyKitytDJz3HNm90IbkrLemPvDA%2Bul16Ce5YnQkQqpx0oYAxbCOBUku1FerDXqSXyNxsT%2Bbt0eP2wE%2FrDsAVb4YHtm3c%2Bt9SrsNaAV0rcmbQ7ddCce2d9tsjXNVx0QgaYcsIs5x6mLiC9DnecKWRFGSLm%2Fi8iyaM9oHVXCiRGbCskj8ySrV3s7lZSTmbGzS8QJYuotkr57yTMzRrDbg%2BI%2FhMCZNWMssZvxVkXckob7bhmE7u546AsdX0ZGumXe%2F9PLJyZ%2BVxzFBzFF1uv6l6PuOb%2F%2Bgb8xBN7IjyDJpJ4V8XtJxqVaeU1pJA3WNuDKFHNXF1orYb0pcjCS3bi%2BBjqkAU5reiR%2F9QSzUQxTrWEfYoXNOtoMMT%2BuWlHjVEJVz1%2BpzPkdNP1c0VDqlFCsCa7oBO4w6CnaQUk2uuf5aCvjtxajwEU6RxSO0sRJSDCuf134vFgBPgDmFubgu3dLmkT0gI%2BrNsJYyre8GpbsJRpI4JDCiU0eQJCDRE3Ck24J1GU43NAmnF%2FVzoZKvrLPNTT8bWOxeOIYDGhD7dT2WtNhXx1jFffw&X-Amz-Signature=fcdd96c0ffa0ad92246661cf3d9c0f17f33f3fe5f4923b4746c9237ef7cdffb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
