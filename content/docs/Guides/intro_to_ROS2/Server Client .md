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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ55JG6V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDVjYHlwX3jQDuv20ik4Nf%2F2QFB6LV9HhpBbGE4rJqWYAiBJTqaHZi0gSFCgOyD4yKkTsxA8J%2Fk9FkhsyKAMoZyhlSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HaMFCLfoiN4jHTNKtwDRocBCUo7dDgoUKoVn%2B%2BgHJ90FZXHlD6bpDxYFNqGRxHo7Aeymu9uOHThYf0rIvfC%2BjEzwtflPpTKo8t3mrzS87TaVs8eHD%2FmuvQh%2BKjaAKvyzPmMzlMx3cgMWd1XwiedbUeQg6U9JyDPPyqsz7MZk2ncDuMfEqembtHlZw%2BsYV%2FVsaJ%2BqxG9p0vHzzQjVxSkBHEyEPmG1KUNhCvx%2ByX7dZetBOfLceOTF3X4EPHlOhtPhVi%2FTO9ST6wgwOukoOXwO%2BQtOLgUKo2OCwDUHr3NXb36FvaJ4DLrrqbv29Jns5873bZAR1e71V7o62Ys%2FI9emOGLvYks56qFt0IgESOah9fxkG5ovY07MrYwPnIUgWoruTHV2epbxa544VLjtpLKzNGaNxpbQdPJJe8Yt2zt6XyF%2BD40zjFxzvCkXVHS3u4jsyZ%2F75pH1s3kdyLF8rUmW3sPQoMerat%2BIKyeabO4s%2BhmeQogpxZCIX%2B1fcy4vvECgEkIkrp37P2cCoo2zwWDzNpR0C7WUM05bgn6yKvWqvP5kXAHvuwr5GG6IDNdWZEXoBf9y7cCOXpajfpCRccBfItb9kYQt3FLPRIKPApvqoCTJ5sB1Gv0j7z9%2BIYn9rmvpJ0VSkVsAyF4ocswrdzWvQY6pgESeQqu7bWubkP1LieHSrIN5UPePqgiukR5P5zlHqvnaH8%2BKw1yTnK%2ByBhdXriDU9RujEkLOuKx%2F3hdBfsWhLOOcNaKNdCMrh8Ry%2BCuh%2Fieu0Xu09E7ltejB1EYny48%2B3c9nk2azc79ARwejAjfhA3QKOoj3BNfWonbmZf0oHMZrMHhd3j67a1EF25K1qBTKfx8FENgESU8Ku7RUUcoVCXPGp7yYyZi&X-Amz-Signature=e6bb742530bd4fbc81b4b37f8089a7e7566fc85fe106a3742c14bcba1b9a2828&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ55JG6V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDVjYHlwX3jQDuv20ik4Nf%2F2QFB6LV9HhpBbGE4rJqWYAiBJTqaHZi0gSFCgOyD4yKkTsxA8J%2Fk9FkhsyKAMoZyhlSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HaMFCLfoiN4jHTNKtwDRocBCUo7dDgoUKoVn%2B%2BgHJ90FZXHlD6bpDxYFNqGRxHo7Aeymu9uOHThYf0rIvfC%2BjEzwtflPpTKo8t3mrzS87TaVs8eHD%2FmuvQh%2BKjaAKvyzPmMzlMx3cgMWd1XwiedbUeQg6U9JyDPPyqsz7MZk2ncDuMfEqembtHlZw%2BsYV%2FVsaJ%2BqxG9p0vHzzQjVxSkBHEyEPmG1KUNhCvx%2ByX7dZetBOfLceOTF3X4EPHlOhtPhVi%2FTO9ST6wgwOukoOXwO%2BQtOLgUKo2OCwDUHr3NXb36FvaJ4DLrrqbv29Jns5873bZAR1e71V7o62Ys%2FI9emOGLvYks56qFt0IgESOah9fxkG5ovY07MrYwPnIUgWoruTHV2epbxa544VLjtpLKzNGaNxpbQdPJJe8Yt2zt6XyF%2BD40zjFxzvCkXVHS3u4jsyZ%2F75pH1s3kdyLF8rUmW3sPQoMerat%2BIKyeabO4s%2BhmeQogpxZCIX%2B1fcy4vvECgEkIkrp37P2cCoo2zwWDzNpR0C7WUM05bgn6yKvWqvP5kXAHvuwr5GG6IDNdWZEXoBf9y7cCOXpajfpCRccBfItb9kYQt3FLPRIKPApvqoCTJ5sB1Gv0j7z9%2BIYn9rmvpJ0VSkVsAyF4ocswrdzWvQY6pgESeQqu7bWubkP1LieHSrIN5UPePqgiukR5P5zlHqvnaH8%2BKw1yTnK%2ByBhdXriDU9RujEkLOuKx%2F3hdBfsWhLOOcNaKNdCMrh8Ry%2BCuh%2Fieu0Xu09E7ltejB1EYny48%2B3c9nk2azc79ARwejAjfhA3QKOoj3BNfWonbmZf0oHMZrMHhd3j67a1EF25K1qBTKfx8FENgESU8Ku7RUUcoVCXPGp7yYyZi&X-Amz-Signature=39518295afb822b136c5b946f8d3c59dc7b8f83d672332d6684a160eb9e18f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ55JG6V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDVjYHlwX3jQDuv20ik4Nf%2F2QFB6LV9HhpBbGE4rJqWYAiBJTqaHZi0gSFCgOyD4yKkTsxA8J%2Fk9FkhsyKAMoZyhlSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HaMFCLfoiN4jHTNKtwDRocBCUo7dDgoUKoVn%2B%2BgHJ90FZXHlD6bpDxYFNqGRxHo7Aeymu9uOHThYf0rIvfC%2BjEzwtflPpTKo8t3mrzS87TaVs8eHD%2FmuvQh%2BKjaAKvyzPmMzlMx3cgMWd1XwiedbUeQg6U9JyDPPyqsz7MZk2ncDuMfEqembtHlZw%2BsYV%2FVsaJ%2BqxG9p0vHzzQjVxSkBHEyEPmG1KUNhCvx%2ByX7dZetBOfLceOTF3X4EPHlOhtPhVi%2FTO9ST6wgwOukoOXwO%2BQtOLgUKo2OCwDUHr3NXb36FvaJ4DLrrqbv29Jns5873bZAR1e71V7o62Ys%2FI9emOGLvYks56qFt0IgESOah9fxkG5ovY07MrYwPnIUgWoruTHV2epbxa544VLjtpLKzNGaNxpbQdPJJe8Yt2zt6XyF%2BD40zjFxzvCkXVHS3u4jsyZ%2F75pH1s3kdyLF8rUmW3sPQoMerat%2BIKyeabO4s%2BhmeQogpxZCIX%2B1fcy4vvECgEkIkrp37P2cCoo2zwWDzNpR0C7WUM05bgn6yKvWqvP5kXAHvuwr5GG6IDNdWZEXoBf9y7cCOXpajfpCRccBfItb9kYQt3FLPRIKPApvqoCTJ5sB1Gv0j7z9%2BIYn9rmvpJ0VSkVsAyF4ocswrdzWvQY6pgESeQqu7bWubkP1LieHSrIN5UPePqgiukR5P5zlHqvnaH8%2BKw1yTnK%2ByBhdXriDU9RujEkLOuKx%2F3hdBfsWhLOOcNaKNdCMrh8Ry%2BCuh%2Fieu0Xu09E7ltejB1EYny48%2B3c9nk2azc79ARwejAjfhA3QKOoj3BNfWonbmZf0oHMZrMHhd3j67a1EF25K1qBTKfx8FENgESU8Ku7RUUcoVCXPGp7yYyZi&X-Amz-Signature=b5d4ff0c41bc996e23fd073e24db963e30226120d350cd75dd4c209eb571b542&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ55JG6V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDVjYHlwX3jQDuv20ik4Nf%2F2QFB6LV9HhpBbGE4rJqWYAiBJTqaHZi0gSFCgOyD4yKkTsxA8J%2Fk9FkhsyKAMoZyhlSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HaMFCLfoiN4jHTNKtwDRocBCUo7dDgoUKoVn%2B%2BgHJ90FZXHlD6bpDxYFNqGRxHo7Aeymu9uOHThYf0rIvfC%2BjEzwtflPpTKo8t3mrzS87TaVs8eHD%2FmuvQh%2BKjaAKvyzPmMzlMx3cgMWd1XwiedbUeQg6U9JyDPPyqsz7MZk2ncDuMfEqembtHlZw%2BsYV%2FVsaJ%2BqxG9p0vHzzQjVxSkBHEyEPmG1KUNhCvx%2ByX7dZetBOfLceOTF3X4EPHlOhtPhVi%2FTO9ST6wgwOukoOXwO%2BQtOLgUKo2OCwDUHr3NXb36FvaJ4DLrrqbv29Jns5873bZAR1e71V7o62Ys%2FI9emOGLvYks56qFt0IgESOah9fxkG5ovY07MrYwPnIUgWoruTHV2epbxa544VLjtpLKzNGaNxpbQdPJJe8Yt2zt6XyF%2BD40zjFxzvCkXVHS3u4jsyZ%2F75pH1s3kdyLF8rUmW3sPQoMerat%2BIKyeabO4s%2BhmeQogpxZCIX%2B1fcy4vvECgEkIkrp37P2cCoo2zwWDzNpR0C7WUM05bgn6yKvWqvP5kXAHvuwr5GG6IDNdWZEXoBf9y7cCOXpajfpCRccBfItb9kYQt3FLPRIKPApvqoCTJ5sB1Gv0j7z9%2BIYn9rmvpJ0VSkVsAyF4ocswrdzWvQY6pgESeQqu7bWubkP1LieHSrIN5UPePqgiukR5P5zlHqvnaH8%2BKw1yTnK%2ByBhdXriDU9RujEkLOuKx%2F3hdBfsWhLOOcNaKNdCMrh8Ry%2BCuh%2Fieu0Xu09E7ltejB1EYny48%2B3c9nk2azc79ARwejAjfhA3QKOoj3BNfWonbmZf0oHMZrMHhd3j67a1EF25K1qBTKfx8FENgESU8Ku7RUUcoVCXPGp7yYyZi&X-Amz-Signature=34b7c49e025852345f2e073cfa02f89a4cb6c2cb2929d032efc24563ba2e2b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ55JG6V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDVjYHlwX3jQDuv20ik4Nf%2F2QFB6LV9HhpBbGE4rJqWYAiBJTqaHZi0gSFCgOyD4yKkTsxA8J%2Fk9FkhsyKAMoZyhlSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HaMFCLfoiN4jHTNKtwDRocBCUo7dDgoUKoVn%2B%2BgHJ90FZXHlD6bpDxYFNqGRxHo7Aeymu9uOHThYf0rIvfC%2BjEzwtflPpTKo8t3mrzS87TaVs8eHD%2FmuvQh%2BKjaAKvyzPmMzlMx3cgMWd1XwiedbUeQg6U9JyDPPyqsz7MZk2ncDuMfEqembtHlZw%2BsYV%2FVsaJ%2BqxG9p0vHzzQjVxSkBHEyEPmG1KUNhCvx%2ByX7dZetBOfLceOTF3X4EPHlOhtPhVi%2FTO9ST6wgwOukoOXwO%2BQtOLgUKo2OCwDUHr3NXb36FvaJ4DLrrqbv29Jns5873bZAR1e71V7o62Ys%2FI9emOGLvYks56qFt0IgESOah9fxkG5ovY07MrYwPnIUgWoruTHV2epbxa544VLjtpLKzNGaNxpbQdPJJe8Yt2zt6XyF%2BD40zjFxzvCkXVHS3u4jsyZ%2F75pH1s3kdyLF8rUmW3sPQoMerat%2BIKyeabO4s%2BhmeQogpxZCIX%2B1fcy4vvECgEkIkrp37P2cCoo2zwWDzNpR0C7WUM05bgn6yKvWqvP5kXAHvuwr5GG6IDNdWZEXoBf9y7cCOXpajfpCRccBfItb9kYQt3FLPRIKPApvqoCTJ5sB1Gv0j7z9%2BIYn9rmvpJ0VSkVsAyF4ocswrdzWvQY6pgESeQqu7bWubkP1LieHSrIN5UPePqgiukR5P5zlHqvnaH8%2BKw1yTnK%2ByBhdXriDU9RujEkLOuKx%2F3hdBfsWhLOOcNaKNdCMrh8Ry%2BCuh%2Fieu0Xu09E7ltejB1EYny48%2B3c9nk2azc79ARwejAjfhA3QKOoj3BNfWonbmZf0oHMZrMHhd3j67a1EF25K1qBTKfx8FENgESU8Ku7RUUcoVCXPGp7yYyZi&X-Amz-Signature=f736965d446a92f3489b92ad155e27088efdb69fab6a380728f5dd1508f97448&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
