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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7TAKMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF9i80XjEi7%2BPxisIJODTxyK74E9YP%2FaTl1pbN50O1KVAiEAynfbsnBL9E46IE1D4cmqyddEJDGK1H1b3lX4PFU4bVoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGyJ4nceO0bNiIpZASrcA1VtASwOgbkubdTQGytyfRysfVR5fLZ7rJRsMEz1El2aeO8b5cV07mMJEeyzWsD907aHzqMDPGeDXcvMPKIXUxnKrq%2BKoE8xqDiXOsnZxGwKMRK86NLjQmjR2jNXt0dECzlCYaBuPXl23PLfHgmps5vHlPWPXb9%2FE6HFJNIrknkp5WaEig%2BRdUGcja%2B20Zd95%2BH5z4Jq7LalLQqt5l0CXiy%2BDkJAFk16QIyWTf0%2BhqhOZ737JIatcGyRwwSrjuq0FPhK%2Bbx2jKlG6aUqbJHbgnlNbinUOAkRy5Gjo%2Fj%2BpyNtOg%2FSU8PqoBr3JAlgBZRPOvEKnZljZDufdcmdSOO37aXmmRQBVBk9GrQR2UIblHC7B90sCaszM6eEvTF7maIW%2BoCTy2XVts30vRoI99y%2FICU7Kha7ypPRZYZ7mDT0J7R0v1tAn3GguFQA4lThc8ptKZbQhVt4VBQqGH4lokBcMmA9JU%2FSOMiYnkIFzYV6P0Zh3QWXfUjYc4SU%2BbMFXbU4J38uwjArxXFlKu0HmjL%2FDaNGBNbLZj%2BfXZqlDaO1VyfkUs14mkmjWtvCwmh6JeB6n%2Fz2gD9JPtj6bdr05Ad%2F79p1phlpe41RLyz7JyBArLZ9lOl3QIBKi38xXS5aMK2Q68IGOqUBqFgygNp1T1MatVhplO%2FETxiIA1Won1rxm1%2BxlPcwtxqD2hY7AI%2FlR84%2FBRylvkbRw5tt7WW54%2FKA%2BmWUgeMwAgG46PqOKABuOYkNG5N1mtw1xNqWrsBYEZSrgLSi8jR5QTSSmzAFUyVbN4AZXmjoeKOczr4D5VAQK5jqF%2F7TpkwHPTUuCj53Hxp62vExKU0TW8JsbKPvDtL6pslgHBpBQqA1C5F9&X-Amz-Signature=9afe1efeb8cec708d52383b37bcef882811ad1b258867ca8b956f0c8358ab908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7TAKMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF9i80XjEi7%2BPxisIJODTxyK74E9YP%2FaTl1pbN50O1KVAiEAynfbsnBL9E46IE1D4cmqyddEJDGK1H1b3lX4PFU4bVoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGyJ4nceO0bNiIpZASrcA1VtASwOgbkubdTQGytyfRysfVR5fLZ7rJRsMEz1El2aeO8b5cV07mMJEeyzWsD907aHzqMDPGeDXcvMPKIXUxnKrq%2BKoE8xqDiXOsnZxGwKMRK86NLjQmjR2jNXt0dECzlCYaBuPXl23PLfHgmps5vHlPWPXb9%2FE6HFJNIrknkp5WaEig%2BRdUGcja%2B20Zd95%2BH5z4Jq7LalLQqt5l0CXiy%2BDkJAFk16QIyWTf0%2BhqhOZ737JIatcGyRwwSrjuq0FPhK%2Bbx2jKlG6aUqbJHbgnlNbinUOAkRy5Gjo%2Fj%2BpyNtOg%2FSU8PqoBr3JAlgBZRPOvEKnZljZDufdcmdSOO37aXmmRQBVBk9GrQR2UIblHC7B90sCaszM6eEvTF7maIW%2BoCTy2XVts30vRoI99y%2FICU7Kha7ypPRZYZ7mDT0J7R0v1tAn3GguFQA4lThc8ptKZbQhVt4VBQqGH4lokBcMmA9JU%2FSOMiYnkIFzYV6P0Zh3QWXfUjYc4SU%2BbMFXbU4J38uwjArxXFlKu0HmjL%2FDaNGBNbLZj%2BfXZqlDaO1VyfkUs14mkmjWtvCwmh6JeB6n%2Fz2gD9JPtj6bdr05Ad%2F79p1phlpe41RLyz7JyBArLZ9lOl3QIBKi38xXS5aMK2Q68IGOqUBqFgygNp1T1MatVhplO%2FETxiIA1Won1rxm1%2BxlPcwtxqD2hY7AI%2FlR84%2FBRylvkbRw5tt7WW54%2FKA%2BmWUgeMwAgG46PqOKABuOYkNG5N1mtw1xNqWrsBYEZSrgLSi8jR5QTSSmzAFUyVbN4AZXmjoeKOczr4D5VAQK5jqF%2F7TpkwHPTUuCj53Hxp62vExKU0TW8JsbKPvDtL6pslgHBpBQqA1C5F9&X-Amz-Signature=9c8b926de62663bfa7b8a269f709121dda5ecbebf831718d863441f6492a789b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7TAKMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF9i80XjEi7%2BPxisIJODTxyK74E9YP%2FaTl1pbN50O1KVAiEAynfbsnBL9E46IE1D4cmqyddEJDGK1H1b3lX4PFU4bVoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGyJ4nceO0bNiIpZASrcA1VtASwOgbkubdTQGytyfRysfVR5fLZ7rJRsMEz1El2aeO8b5cV07mMJEeyzWsD907aHzqMDPGeDXcvMPKIXUxnKrq%2BKoE8xqDiXOsnZxGwKMRK86NLjQmjR2jNXt0dECzlCYaBuPXl23PLfHgmps5vHlPWPXb9%2FE6HFJNIrknkp5WaEig%2BRdUGcja%2B20Zd95%2BH5z4Jq7LalLQqt5l0CXiy%2BDkJAFk16QIyWTf0%2BhqhOZ737JIatcGyRwwSrjuq0FPhK%2Bbx2jKlG6aUqbJHbgnlNbinUOAkRy5Gjo%2Fj%2BpyNtOg%2FSU8PqoBr3JAlgBZRPOvEKnZljZDufdcmdSOO37aXmmRQBVBk9GrQR2UIblHC7B90sCaszM6eEvTF7maIW%2BoCTy2XVts30vRoI99y%2FICU7Kha7ypPRZYZ7mDT0J7R0v1tAn3GguFQA4lThc8ptKZbQhVt4VBQqGH4lokBcMmA9JU%2FSOMiYnkIFzYV6P0Zh3QWXfUjYc4SU%2BbMFXbU4J38uwjArxXFlKu0HmjL%2FDaNGBNbLZj%2BfXZqlDaO1VyfkUs14mkmjWtvCwmh6JeB6n%2Fz2gD9JPtj6bdr05Ad%2F79p1phlpe41RLyz7JyBArLZ9lOl3QIBKi38xXS5aMK2Q68IGOqUBqFgygNp1T1MatVhplO%2FETxiIA1Won1rxm1%2BxlPcwtxqD2hY7AI%2FlR84%2FBRylvkbRw5tt7WW54%2FKA%2BmWUgeMwAgG46PqOKABuOYkNG5N1mtw1xNqWrsBYEZSrgLSi8jR5QTSSmzAFUyVbN4AZXmjoeKOczr4D5VAQK5jqF%2F7TpkwHPTUuCj53Hxp62vExKU0TW8JsbKPvDtL6pslgHBpBQqA1C5F9&X-Amz-Signature=a1789a05ed1f1a878138754645d9304445b4830547719d2f697542ec77207005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7TAKMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF9i80XjEi7%2BPxisIJODTxyK74E9YP%2FaTl1pbN50O1KVAiEAynfbsnBL9E46IE1D4cmqyddEJDGK1H1b3lX4PFU4bVoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGyJ4nceO0bNiIpZASrcA1VtASwOgbkubdTQGytyfRysfVR5fLZ7rJRsMEz1El2aeO8b5cV07mMJEeyzWsD907aHzqMDPGeDXcvMPKIXUxnKrq%2BKoE8xqDiXOsnZxGwKMRK86NLjQmjR2jNXt0dECzlCYaBuPXl23PLfHgmps5vHlPWPXb9%2FE6HFJNIrknkp5WaEig%2BRdUGcja%2B20Zd95%2BH5z4Jq7LalLQqt5l0CXiy%2BDkJAFk16QIyWTf0%2BhqhOZ737JIatcGyRwwSrjuq0FPhK%2Bbx2jKlG6aUqbJHbgnlNbinUOAkRy5Gjo%2Fj%2BpyNtOg%2FSU8PqoBr3JAlgBZRPOvEKnZljZDufdcmdSOO37aXmmRQBVBk9GrQR2UIblHC7B90sCaszM6eEvTF7maIW%2BoCTy2XVts30vRoI99y%2FICU7Kha7ypPRZYZ7mDT0J7R0v1tAn3GguFQA4lThc8ptKZbQhVt4VBQqGH4lokBcMmA9JU%2FSOMiYnkIFzYV6P0Zh3QWXfUjYc4SU%2BbMFXbU4J38uwjArxXFlKu0HmjL%2FDaNGBNbLZj%2BfXZqlDaO1VyfkUs14mkmjWtvCwmh6JeB6n%2Fz2gD9JPtj6bdr05Ad%2F79p1phlpe41RLyz7JyBArLZ9lOl3QIBKi38xXS5aMK2Q68IGOqUBqFgygNp1T1MatVhplO%2FETxiIA1Won1rxm1%2BxlPcwtxqD2hY7AI%2FlR84%2FBRylvkbRw5tt7WW54%2FKA%2BmWUgeMwAgG46PqOKABuOYkNG5N1mtw1xNqWrsBYEZSrgLSi8jR5QTSSmzAFUyVbN4AZXmjoeKOczr4D5VAQK5jqF%2F7TpkwHPTUuCj53Hxp62vExKU0TW8JsbKPvDtL6pslgHBpBQqA1C5F9&X-Amz-Signature=42a2339b5a655fef6060e9bf2eadbb1f979d84668fa2176da7e1a07cec391d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7TAKMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF9i80XjEi7%2BPxisIJODTxyK74E9YP%2FaTl1pbN50O1KVAiEAynfbsnBL9E46IE1D4cmqyddEJDGK1H1b3lX4PFU4bVoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGyJ4nceO0bNiIpZASrcA1VtASwOgbkubdTQGytyfRysfVR5fLZ7rJRsMEz1El2aeO8b5cV07mMJEeyzWsD907aHzqMDPGeDXcvMPKIXUxnKrq%2BKoE8xqDiXOsnZxGwKMRK86NLjQmjR2jNXt0dECzlCYaBuPXl23PLfHgmps5vHlPWPXb9%2FE6HFJNIrknkp5WaEig%2BRdUGcja%2B20Zd95%2BH5z4Jq7LalLQqt5l0CXiy%2BDkJAFk16QIyWTf0%2BhqhOZ737JIatcGyRwwSrjuq0FPhK%2Bbx2jKlG6aUqbJHbgnlNbinUOAkRy5Gjo%2Fj%2BpyNtOg%2FSU8PqoBr3JAlgBZRPOvEKnZljZDufdcmdSOO37aXmmRQBVBk9GrQR2UIblHC7B90sCaszM6eEvTF7maIW%2BoCTy2XVts30vRoI99y%2FICU7Kha7ypPRZYZ7mDT0J7R0v1tAn3GguFQA4lThc8ptKZbQhVt4VBQqGH4lokBcMmA9JU%2FSOMiYnkIFzYV6P0Zh3QWXfUjYc4SU%2BbMFXbU4J38uwjArxXFlKu0HmjL%2FDaNGBNbLZj%2BfXZqlDaO1VyfkUs14mkmjWtvCwmh6JeB6n%2Fz2gD9JPtj6bdr05Ad%2F79p1phlpe41RLyz7JyBArLZ9lOl3QIBKi38xXS5aMK2Q68IGOqUBqFgygNp1T1MatVhplO%2FETxiIA1Won1rxm1%2BxlPcwtxqD2hY7AI%2FlR84%2FBRylvkbRw5tt7WW54%2FKA%2BmWUgeMwAgG46PqOKABuOYkNG5N1mtw1xNqWrsBYEZSrgLSi8jR5QTSSmzAFUyVbN4AZXmjoeKOczr4D5VAQK5jqF%2F7TpkwHPTUuCj53Hxp62vExKU0TW8JsbKPvDtL6pslgHBpBQqA1C5F9&X-Amz-Signature=435dc93e34968cdc912eb64b5f674a77dd9f0ba42213a223f71eeba925063c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
