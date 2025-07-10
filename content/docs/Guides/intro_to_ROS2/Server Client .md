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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP5M37H%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvWfuzaSqsG%2BfmHk0Cuco%2F7dKL6z7iudeUGUILZbrYAIgLF35R4JStO44HbETRvCeQ3cztUOb3k2pXMNhi0hasiUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwu3PE4Cz4MDnZYJCrcA0YpvK6ifTbmvgJ%2FYHJ%2F20yAe2jcj3TFpazNhuuFTtGu4qjDWWI9ylDRFUAncDJvZxWvh9Laq9GZP2B6kqAJNym6cymvGCvVnfPXP6Ta8j5DwMvqXnaHEoYXKJXpE3hlcqTshWUw383rPoWeAyTaAegvzE5gY2uTIu077bCGFf7Qwkzhc4vuc2%2BGcsWrz0GvwcabvB75T82EG6fE0nnDiSvgHFTA6TnsXS971Gi%2BrUx87RGQNf4L6DBiPjYLSytUyHHWUeJjt7eOHK7b%2BKSDAzXdKhgTZlh9ateLutlWPu2sfJnrBqMd7%2BEZx9QYF3T61QanLPTw8mFqTXxgidduav3VPC1QVzrCb7Cqif2TzusZmlWJJ3kPMMdob9N%2FNqO8vz3EyQuOc0FBHFl2nK3w%2B8mv0dOhZoVJLRnO5Apg03tSj4N1fFIoZtVtVik6YLrmwXhdIH4LSzr9r%2FnAZzqIDdTCBWTKVnDJJXLYUxGzrcGGwlXe60AftYFX1S38S0YDErkz04d0%2Buw1ICkDZqEX%2BikAZQxIRH5uDV5jipmAV2%2FaYKnFt%2Bv3eMv3myNYUzFJ8QXIfN4%2B%2BDpD98C4Ut%2BfmD6NXHzEwDO3DAo879042%2BhWWcOmeMEHGA%2FWmBmjMOXNwMMGOqUB%2F%2FblRWK%2BoieRCIuQXGiRWR9P0Qxh36muBqbWs48g3zGsuA%2B2ejK0pIrckEOOT0AQy8CEUktC9ZG3aRF8wQA9ciflbbHEQz0mmeTfFJISoKrVobEFM750ZEwtlfCxk91FhJ5qAqq0ZQ%2FHzPCBZoh4jhW8fFnKUT921EWqsWpBogi4w2lmtk0iLerfp8kLuhLFTmKKMurx%2BYRKTXMc9Tk9hx%2FTVNlc&X-Amz-Signature=68a553478348de33adbb065da363d319001c61aa0705c0979c66b4c45d0129d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP5M37H%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvWfuzaSqsG%2BfmHk0Cuco%2F7dKL6z7iudeUGUILZbrYAIgLF35R4JStO44HbETRvCeQ3cztUOb3k2pXMNhi0hasiUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwu3PE4Cz4MDnZYJCrcA0YpvK6ifTbmvgJ%2FYHJ%2F20yAe2jcj3TFpazNhuuFTtGu4qjDWWI9ylDRFUAncDJvZxWvh9Laq9GZP2B6kqAJNym6cymvGCvVnfPXP6Ta8j5DwMvqXnaHEoYXKJXpE3hlcqTshWUw383rPoWeAyTaAegvzE5gY2uTIu077bCGFf7Qwkzhc4vuc2%2BGcsWrz0GvwcabvB75T82EG6fE0nnDiSvgHFTA6TnsXS971Gi%2BrUx87RGQNf4L6DBiPjYLSytUyHHWUeJjt7eOHK7b%2BKSDAzXdKhgTZlh9ateLutlWPu2sfJnrBqMd7%2BEZx9QYF3T61QanLPTw8mFqTXxgidduav3VPC1QVzrCb7Cqif2TzusZmlWJJ3kPMMdob9N%2FNqO8vz3EyQuOc0FBHFl2nK3w%2B8mv0dOhZoVJLRnO5Apg03tSj4N1fFIoZtVtVik6YLrmwXhdIH4LSzr9r%2FnAZzqIDdTCBWTKVnDJJXLYUxGzrcGGwlXe60AftYFX1S38S0YDErkz04d0%2Buw1ICkDZqEX%2BikAZQxIRH5uDV5jipmAV2%2FaYKnFt%2Bv3eMv3myNYUzFJ8QXIfN4%2B%2BDpD98C4Ut%2BfmD6NXHzEwDO3DAo879042%2BhWWcOmeMEHGA%2FWmBmjMOXNwMMGOqUB%2F%2FblRWK%2BoieRCIuQXGiRWR9P0Qxh36muBqbWs48g3zGsuA%2B2ejK0pIrckEOOT0AQy8CEUktC9ZG3aRF8wQA9ciflbbHEQz0mmeTfFJISoKrVobEFM750ZEwtlfCxk91FhJ5qAqq0ZQ%2FHzPCBZoh4jhW8fFnKUT921EWqsWpBogi4w2lmtk0iLerfp8kLuhLFTmKKMurx%2BYRKTXMc9Tk9hx%2FTVNlc&X-Amz-Signature=784d10897212a677b2dac8b97eedd367d7d541ee444e9391b58dc05bbf9fa574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP5M37H%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvWfuzaSqsG%2BfmHk0Cuco%2F7dKL6z7iudeUGUILZbrYAIgLF35R4JStO44HbETRvCeQ3cztUOb3k2pXMNhi0hasiUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwu3PE4Cz4MDnZYJCrcA0YpvK6ifTbmvgJ%2FYHJ%2F20yAe2jcj3TFpazNhuuFTtGu4qjDWWI9ylDRFUAncDJvZxWvh9Laq9GZP2B6kqAJNym6cymvGCvVnfPXP6Ta8j5DwMvqXnaHEoYXKJXpE3hlcqTshWUw383rPoWeAyTaAegvzE5gY2uTIu077bCGFf7Qwkzhc4vuc2%2BGcsWrz0GvwcabvB75T82EG6fE0nnDiSvgHFTA6TnsXS971Gi%2BrUx87RGQNf4L6DBiPjYLSytUyHHWUeJjt7eOHK7b%2BKSDAzXdKhgTZlh9ateLutlWPu2sfJnrBqMd7%2BEZx9QYF3T61QanLPTw8mFqTXxgidduav3VPC1QVzrCb7Cqif2TzusZmlWJJ3kPMMdob9N%2FNqO8vz3EyQuOc0FBHFl2nK3w%2B8mv0dOhZoVJLRnO5Apg03tSj4N1fFIoZtVtVik6YLrmwXhdIH4LSzr9r%2FnAZzqIDdTCBWTKVnDJJXLYUxGzrcGGwlXe60AftYFX1S38S0YDErkz04d0%2Buw1ICkDZqEX%2BikAZQxIRH5uDV5jipmAV2%2FaYKnFt%2Bv3eMv3myNYUzFJ8QXIfN4%2B%2BDpD98C4Ut%2BfmD6NXHzEwDO3DAo879042%2BhWWcOmeMEHGA%2FWmBmjMOXNwMMGOqUB%2F%2FblRWK%2BoieRCIuQXGiRWR9P0Qxh36muBqbWs48g3zGsuA%2B2ejK0pIrckEOOT0AQy8CEUktC9ZG3aRF8wQA9ciflbbHEQz0mmeTfFJISoKrVobEFM750ZEwtlfCxk91FhJ5qAqq0ZQ%2FHzPCBZoh4jhW8fFnKUT921EWqsWpBogi4w2lmtk0iLerfp8kLuhLFTmKKMurx%2BYRKTXMc9Tk9hx%2FTVNlc&X-Amz-Signature=be0c7362045a0ea79b0f0b0db2330b2682b353e9ee3a23f1489221dd0d12dac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP5M37H%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvWfuzaSqsG%2BfmHk0Cuco%2F7dKL6z7iudeUGUILZbrYAIgLF35R4JStO44HbETRvCeQ3cztUOb3k2pXMNhi0hasiUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwu3PE4Cz4MDnZYJCrcA0YpvK6ifTbmvgJ%2FYHJ%2F20yAe2jcj3TFpazNhuuFTtGu4qjDWWI9ylDRFUAncDJvZxWvh9Laq9GZP2B6kqAJNym6cymvGCvVnfPXP6Ta8j5DwMvqXnaHEoYXKJXpE3hlcqTshWUw383rPoWeAyTaAegvzE5gY2uTIu077bCGFf7Qwkzhc4vuc2%2BGcsWrz0GvwcabvB75T82EG6fE0nnDiSvgHFTA6TnsXS971Gi%2BrUx87RGQNf4L6DBiPjYLSytUyHHWUeJjt7eOHK7b%2BKSDAzXdKhgTZlh9ateLutlWPu2sfJnrBqMd7%2BEZx9QYF3T61QanLPTw8mFqTXxgidduav3VPC1QVzrCb7Cqif2TzusZmlWJJ3kPMMdob9N%2FNqO8vz3EyQuOc0FBHFl2nK3w%2B8mv0dOhZoVJLRnO5Apg03tSj4N1fFIoZtVtVik6YLrmwXhdIH4LSzr9r%2FnAZzqIDdTCBWTKVnDJJXLYUxGzrcGGwlXe60AftYFX1S38S0YDErkz04d0%2Buw1ICkDZqEX%2BikAZQxIRH5uDV5jipmAV2%2FaYKnFt%2Bv3eMv3myNYUzFJ8QXIfN4%2B%2BDpD98C4Ut%2BfmD6NXHzEwDO3DAo879042%2BhWWcOmeMEHGA%2FWmBmjMOXNwMMGOqUB%2F%2FblRWK%2BoieRCIuQXGiRWR9P0Qxh36muBqbWs48g3zGsuA%2B2ejK0pIrckEOOT0AQy8CEUktC9ZG3aRF8wQA9ciflbbHEQz0mmeTfFJISoKrVobEFM750ZEwtlfCxk91FhJ5qAqq0ZQ%2FHzPCBZoh4jhW8fFnKUT921EWqsWpBogi4w2lmtk0iLerfp8kLuhLFTmKKMurx%2BYRKTXMc9Tk9hx%2FTVNlc&X-Amz-Signature=41c6e00dba37617c8d5cd3658498f890b8b6eb63b7711c73a731340f846a055f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP5M37H%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvWfuzaSqsG%2BfmHk0Cuco%2F7dKL6z7iudeUGUILZbrYAIgLF35R4JStO44HbETRvCeQ3cztUOb3k2pXMNhi0hasiUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwu3PE4Cz4MDnZYJCrcA0YpvK6ifTbmvgJ%2FYHJ%2F20yAe2jcj3TFpazNhuuFTtGu4qjDWWI9ylDRFUAncDJvZxWvh9Laq9GZP2B6kqAJNym6cymvGCvVnfPXP6Ta8j5DwMvqXnaHEoYXKJXpE3hlcqTshWUw383rPoWeAyTaAegvzE5gY2uTIu077bCGFf7Qwkzhc4vuc2%2BGcsWrz0GvwcabvB75T82EG6fE0nnDiSvgHFTA6TnsXS971Gi%2BrUx87RGQNf4L6DBiPjYLSytUyHHWUeJjt7eOHK7b%2BKSDAzXdKhgTZlh9ateLutlWPu2sfJnrBqMd7%2BEZx9QYF3T61QanLPTw8mFqTXxgidduav3VPC1QVzrCb7Cqif2TzusZmlWJJ3kPMMdob9N%2FNqO8vz3EyQuOc0FBHFl2nK3w%2B8mv0dOhZoVJLRnO5Apg03tSj4N1fFIoZtVtVik6YLrmwXhdIH4LSzr9r%2FnAZzqIDdTCBWTKVnDJJXLYUxGzrcGGwlXe60AftYFX1S38S0YDErkz04d0%2Buw1ICkDZqEX%2BikAZQxIRH5uDV5jipmAV2%2FaYKnFt%2Bv3eMv3myNYUzFJ8QXIfN4%2B%2BDpD98C4Ut%2BfmD6NXHzEwDO3DAo879042%2BhWWcOmeMEHGA%2FWmBmjMOXNwMMGOqUB%2F%2FblRWK%2BoieRCIuQXGiRWR9P0Qxh36muBqbWs48g3zGsuA%2B2ejK0pIrckEOOT0AQy8CEUktC9ZG3aRF8wQA9ciflbbHEQz0mmeTfFJISoKrVobEFM750ZEwtlfCxk91FhJ5qAqq0ZQ%2FHzPCBZoh4jhW8fFnKUT921EWqsWpBogi4w2lmtk0iLerfp8kLuhLFTmKKMurx%2BYRKTXMc9Tk9hx%2FTVNlc&X-Amz-Signature=9d13a1c3362ebe331f904aa16adcf8484ef3f0eefa64c557322a8959781455f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
