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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOLC3PS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB45nxmcleR0Uxo%2FJPBkuf%2B6L%2BXDJi19075bXJKV9%2FkVAiEAiE5cIav27czpCGi51F6oS4VnHZqm%2Bz5zhrjktyutNqcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKywadPtwLsM010pircA4b6Zcx%2FhZ%2BS%2F24ZTR0%2B16pAkYTe17O1GpoQhpEXC0eJ3PQ0p2fq1wLY6yqrymvQLFbSsApG6cwKbS2LFcC6QdV8as4UJil%2BDp6rQyCHVEI%2F4Ny5zXdWHTyO1PvfW2zf3nT8o4gk2ayJDciReviN%2BIGnj5tIpZmfEOwDfB8dtOkWzFhsFbuuIfHnqNs3fPtjxcHcW%2B240G7PoxDKy610sq1njcGofLZY68wafPuQ9qoy3MHWsps%2FMbHUhi%2F%2FKAED22H7Uoi%2FU2CTXwPlKo%2FbJsuz8tEazbkLr0pACOZRV8LNnHa5iJzdeiUgnZyCMWvm3QT%2FEYmnrCsi7XgWIo5bUONSMpQ7XVJnFiCRy7rIdegPOlBs7XVEq6TOnN2z1ZWqlydLcOydr28oE6LW9nWQxorxvHtnPaIZq9bHoXxW29%2FqUxNKKXIjXN%2Buw%2F9Dnbtbyldsy%2B%2F8wjdFRUgEmaY%2FFDP6BLjj%2FQMhPqKRVtyjWXBoq9vBYyDb%2BUX95AQ0WRfveNCfmbvs5a7p1udqJ5ueUCj%2F%2BNygjhpMcfkh34%2F%2B9BlVrClrRgIy5gO8b7kNoOqkzB5YZmiKrFjI7HXT1WVnJLJE4Gl4ge97BOjxjWdxt8Mm3MNzHc6eRwhUyrBvMNuv9MEGOqUBD4sBlixJcQcT8cGK5gCMnFcUTjmpl0MuX3ymqais4qeT0cwx6Jmow9tcwzQgSdj11PYfKdMI%2BnJEBcxdOLqCn6wyL6522F0YEbpKbM8eYOFwd%2F94EGs%2Be6xqEBJgGjoaP89xsbevlYsZ5MHlYnaRd5zaz7ps1tR5PUxs62t1Y8H3sLWdscikud25lXZVB9lDkJY5Avun13QzFygClyhervDqQoiQ&X-Amz-Signature=b2261980e560f7dc67fd0858ea6728e0dc3d1d5e77ef74a6536994c98ef02edb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOLC3PS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB45nxmcleR0Uxo%2FJPBkuf%2B6L%2BXDJi19075bXJKV9%2FkVAiEAiE5cIav27czpCGi51F6oS4VnHZqm%2Bz5zhrjktyutNqcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKywadPtwLsM010pircA4b6Zcx%2FhZ%2BS%2F24ZTR0%2B16pAkYTe17O1GpoQhpEXC0eJ3PQ0p2fq1wLY6yqrymvQLFbSsApG6cwKbS2LFcC6QdV8as4UJil%2BDp6rQyCHVEI%2F4Ny5zXdWHTyO1PvfW2zf3nT8o4gk2ayJDciReviN%2BIGnj5tIpZmfEOwDfB8dtOkWzFhsFbuuIfHnqNs3fPtjxcHcW%2B240G7PoxDKy610sq1njcGofLZY68wafPuQ9qoy3MHWsps%2FMbHUhi%2F%2FKAED22H7Uoi%2FU2CTXwPlKo%2FbJsuz8tEazbkLr0pACOZRV8LNnHa5iJzdeiUgnZyCMWvm3QT%2FEYmnrCsi7XgWIo5bUONSMpQ7XVJnFiCRy7rIdegPOlBs7XVEq6TOnN2z1ZWqlydLcOydr28oE6LW9nWQxorxvHtnPaIZq9bHoXxW29%2FqUxNKKXIjXN%2Buw%2F9Dnbtbyldsy%2B%2F8wjdFRUgEmaY%2FFDP6BLjj%2FQMhPqKRVtyjWXBoq9vBYyDb%2BUX95AQ0WRfveNCfmbvs5a7p1udqJ5ueUCj%2F%2BNygjhpMcfkh34%2F%2B9BlVrClrRgIy5gO8b7kNoOqkzB5YZmiKrFjI7HXT1WVnJLJE4Gl4ge97BOjxjWdxt8Mm3MNzHc6eRwhUyrBvMNuv9MEGOqUBD4sBlixJcQcT8cGK5gCMnFcUTjmpl0MuX3ymqais4qeT0cwx6Jmow9tcwzQgSdj11PYfKdMI%2BnJEBcxdOLqCn6wyL6522F0YEbpKbM8eYOFwd%2F94EGs%2Be6xqEBJgGjoaP89xsbevlYsZ5MHlYnaRd5zaz7ps1tR5PUxs62t1Y8H3sLWdscikud25lXZVB9lDkJY5Avun13QzFygClyhervDqQoiQ&X-Amz-Signature=8475cfd4f536c94a873f77a6b8f854fa7e54b52a39d4c6d21373f206f3542b72&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOLC3PS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB45nxmcleR0Uxo%2FJPBkuf%2B6L%2BXDJi19075bXJKV9%2FkVAiEAiE5cIav27czpCGi51F6oS4VnHZqm%2Bz5zhrjktyutNqcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKywadPtwLsM010pircA4b6Zcx%2FhZ%2BS%2F24ZTR0%2B16pAkYTe17O1GpoQhpEXC0eJ3PQ0p2fq1wLY6yqrymvQLFbSsApG6cwKbS2LFcC6QdV8as4UJil%2BDp6rQyCHVEI%2F4Ny5zXdWHTyO1PvfW2zf3nT8o4gk2ayJDciReviN%2BIGnj5tIpZmfEOwDfB8dtOkWzFhsFbuuIfHnqNs3fPtjxcHcW%2B240G7PoxDKy610sq1njcGofLZY68wafPuQ9qoy3MHWsps%2FMbHUhi%2F%2FKAED22H7Uoi%2FU2CTXwPlKo%2FbJsuz8tEazbkLr0pACOZRV8LNnHa5iJzdeiUgnZyCMWvm3QT%2FEYmnrCsi7XgWIo5bUONSMpQ7XVJnFiCRy7rIdegPOlBs7XVEq6TOnN2z1ZWqlydLcOydr28oE6LW9nWQxorxvHtnPaIZq9bHoXxW29%2FqUxNKKXIjXN%2Buw%2F9Dnbtbyldsy%2B%2F8wjdFRUgEmaY%2FFDP6BLjj%2FQMhPqKRVtyjWXBoq9vBYyDb%2BUX95AQ0WRfveNCfmbvs5a7p1udqJ5ueUCj%2F%2BNygjhpMcfkh34%2F%2B9BlVrClrRgIy5gO8b7kNoOqkzB5YZmiKrFjI7HXT1WVnJLJE4Gl4ge97BOjxjWdxt8Mm3MNzHc6eRwhUyrBvMNuv9MEGOqUBD4sBlixJcQcT8cGK5gCMnFcUTjmpl0MuX3ymqais4qeT0cwx6Jmow9tcwzQgSdj11PYfKdMI%2BnJEBcxdOLqCn6wyL6522F0YEbpKbM8eYOFwd%2F94EGs%2Be6xqEBJgGjoaP89xsbevlYsZ5MHlYnaRd5zaz7ps1tR5PUxs62t1Y8H3sLWdscikud25lXZVB9lDkJY5Avun13QzFygClyhervDqQoiQ&X-Amz-Signature=ed0e8dc304aeb0063cc949120b835d8609196db3176466d86ea6bb9d41b8db2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOLC3PS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB45nxmcleR0Uxo%2FJPBkuf%2B6L%2BXDJi19075bXJKV9%2FkVAiEAiE5cIav27czpCGi51F6oS4VnHZqm%2Bz5zhrjktyutNqcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKywadPtwLsM010pircA4b6Zcx%2FhZ%2BS%2F24ZTR0%2B16pAkYTe17O1GpoQhpEXC0eJ3PQ0p2fq1wLY6yqrymvQLFbSsApG6cwKbS2LFcC6QdV8as4UJil%2BDp6rQyCHVEI%2F4Ny5zXdWHTyO1PvfW2zf3nT8o4gk2ayJDciReviN%2BIGnj5tIpZmfEOwDfB8dtOkWzFhsFbuuIfHnqNs3fPtjxcHcW%2B240G7PoxDKy610sq1njcGofLZY68wafPuQ9qoy3MHWsps%2FMbHUhi%2F%2FKAED22H7Uoi%2FU2CTXwPlKo%2FbJsuz8tEazbkLr0pACOZRV8LNnHa5iJzdeiUgnZyCMWvm3QT%2FEYmnrCsi7XgWIo5bUONSMpQ7XVJnFiCRy7rIdegPOlBs7XVEq6TOnN2z1ZWqlydLcOydr28oE6LW9nWQxorxvHtnPaIZq9bHoXxW29%2FqUxNKKXIjXN%2Buw%2F9Dnbtbyldsy%2B%2F8wjdFRUgEmaY%2FFDP6BLjj%2FQMhPqKRVtyjWXBoq9vBYyDb%2BUX95AQ0WRfveNCfmbvs5a7p1udqJ5ueUCj%2F%2BNygjhpMcfkh34%2F%2B9BlVrClrRgIy5gO8b7kNoOqkzB5YZmiKrFjI7HXT1WVnJLJE4Gl4ge97BOjxjWdxt8Mm3MNzHc6eRwhUyrBvMNuv9MEGOqUBD4sBlixJcQcT8cGK5gCMnFcUTjmpl0MuX3ymqais4qeT0cwx6Jmow9tcwzQgSdj11PYfKdMI%2BnJEBcxdOLqCn6wyL6522F0YEbpKbM8eYOFwd%2F94EGs%2Be6xqEBJgGjoaP89xsbevlYsZ5MHlYnaRd5zaz7ps1tR5PUxs62t1Y8H3sLWdscikud25lXZVB9lDkJY5Avun13QzFygClyhervDqQoiQ&X-Amz-Signature=955f191cd3a80adb34cc8dc86734ab8752d4ecbe6df9bb26f63fb3ec0b6a345a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOLC3PS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB45nxmcleR0Uxo%2FJPBkuf%2B6L%2BXDJi19075bXJKV9%2FkVAiEAiE5cIav27czpCGi51F6oS4VnHZqm%2Bz5zhrjktyutNqcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKywadPtwLsM010pircA4b6Zcx%2FhZ%2BS%2F24ZTR0%2B16pAkYTe17O1GpoQhpEXC0eJ3PQ0p2fq1wLY6yqrymvQLFbSsApG6cwKbS2LFcC6QdV8as4UJil%2BDp6rQyCHVEI%2F4Ny5zXdWHTyO1PvfW2zf3nT8o4gk2ayJDciReviN%2BIGnj5tIpZmfEOwDfB8dtOkWzFhsFbuuIfHnqNs3fPtjxcHcW%2B240G7PoxDKy610sq1njcGofLZY68wafPuQ9qoy3MHWsps%2FMbHUhi%2F%2FKAED22H7Uoi%2FU2CTXwPlKo%2FbJsuz8tEazbkLr0pACOZRV8LNnHa5iJzdeiUgnZyCMWvm3QT%2FEYmnrCsi7XgWIo5bUONSMpQ7XVJnFiCRy7rIdegPOlBs7XVEq6TOnN2z1ZWqlydLcOydr28oE6LW9nWQxorxvHtnPaIZq9bHoXxW29%2FqUxNKKXIjXN%2Buw%2F9Dnbtbyldsy%2B%2F8wjdFRUgEmaY%2FFDP6BLjj%2FQMhPqKRVtyjWXBoq9vBYyDb%2BUX95AQ0WRfveNCfmbvs5a7p1udqJ5ueUCj%2F%2BNygjhpMcfkh34%2F%2B9BlVrClrRgIy5gO8b7kNoOqkzB5YZmiKrFjI7HXT1WVnJLJE4Gl4ge97BOjxjWdxt8Mm3MNzHc6eRwhUyrBvMNuv9MEGOqUBD4sBlixJcQcT8cGK5gCMnFcUTjmpl0MuX3ymqais4qeT0cwx6Jmow9tcwzQgSdj11PYfKdMI%2BnJEBcxdOLqCn6wyL6522F0YEbpKbM8eYOFwd%2F94EGs%2Be6xqEBJgGjoaP89xsbevlYsZ5MHlYnaRd5zaz7ps1tR5PUxs62t1Y8H3sLWdscikud25lXZVB9lDkJY5Avun13QzFygClyhervDqQoiQ&X-Amz-Signature=5b96ba1f5baf164813b0e3c36f41eff6396ecc83728d9fffae56529dcd8865fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
