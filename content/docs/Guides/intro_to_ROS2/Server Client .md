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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WMQ6KE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg4CCVpWr7lqtUbAmAZGH6MlEK0FE4yvCrCZoiLpewgIgM17Axj4SSkQrsyC0yzjZxaeU9VyCxVby%2B5EGVqUIoKIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsNbnTQGFJutstdWSrcA%2Bi0qiVP6O%2BSwC4Sqigl4esfOSSbDWSlYYkfsZg%2B%2FIZQJMyfDrHYxgMREMpyDfSC7MAT6qg4m8LfSTZwJTPpjwG6HlavbRmwUrikHvpcKqgkC9LxzkzLX2rhUH7chnQ0PwZzW5h3wd8cvAeTzVkPBn4%2BAqXQyAIL%2FJTWseFdoEbdwRqMlTmBiYjHJyp50xVuZHB77mH%2BlQiFDdhbmzwwG9RnISWBsKH5wtcZZ15BWampWzwjmKOQ3hbgmPQ93LXqF9WMcVUAug%2FcvzVux1gKrgLVHj0SnQqmTQm89VcFd20PAiymd8SaA1e2%2BQEP3X9QMUy6%2F5Qi70jq6X0qcI1QlYMctaIaFctNBt78NBx%2FgJRWXQmgvByEcs6vkRHtTK9grrgNq3QWXOW%2FkGwuI9%2FM3yXy91jReXMuFL94AEZzB5n0Rs56nqrwFzEyQRB4TlYdGCW4R9n9gEo0x8xEZR5%2Fr6fQ59X6M28F8qyJY8F8tXgHNqGcffYWJulsoO7XKZDgr5vzKooxgXGtFx3cRRL%2BdroIoYV8Iwrnn64aZUnU43xZ%2F8eCC4sShxEptvvd3HSEovKUdo4icvk1osuEG0z8PpyhiiCimIW8pMVK2hAEN4Jd6xKI3u15BGDIDp91MP74yr4GOqUBdb24JdQTiTZsXG0UfvdyEA4FTPEtSJg%2F7HkIkmDw9U%2BJOzGYXpdZiScMnq57%2BK2wQGkD9mGQq2f4GTDgrf6LCKEsDftJCmk7K994HF%2F9G%2F42O2RW0YWG7BS742G6mOFflzL1kbfiSfxnzOnFiY%2FKf0mwi2eHtTZqLM7NdaRK%2BZ3%2F95R3tbcQeG%2FL628ccsX0KWX0wxvavFjRTH5KWdteFsIUy%2FXT&X-Amz-Signature=1b403fc8b87ed23e9c26960db4525b1342983ebca04f6ff407296ece790e8b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WMQ6KE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg4CCVpWr7lqtUbAmAZGH6MlEK0FE4yvCrCZoiLpewgIgM17Axj4SSkQrsyC0yzjZxaeU9VyCxVby%2B5EGVqUIoKIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsNbnTQGFJutstdWSrcA%2Bi0qiVP6O%2BSwC4Sqigl4esfOSSbDWSlYYkfsZg%2B%2FIZQJMyfDrHYxgMREMpyDfSC7MAT6qg4m8LfSTZwJTPpjwG6HlavbRmwUrikHvpcKqgkC9LxzkzLX2rhUH7chnQ0PwZzW5h3wd8cvAeTzVkPBn4%2BAqXQyAIL%2FJTWseFdoEbdwRqMlTmBiYjHJyp50xVuZHB77mH%2BlQiFDdhbmzwwG9RnISWBsKH5wtcZZ15BWampWzwjmKOQ3hbgmPQ93LXqF9WMcVUAug%2FcvzVux1gKrgLVHj0SnQqmTQm89VcFd20PAiymd8SaA1e2%2BQEP3X9QMUy6%2F5Qi70jq6X0qcI1QlYMctaIaFctNBt78NBx%2FgJRWXQmgvByEcs6vkRHtTK9grrgNq3QWXOW%2FkGwuI9%2FM3yXy91jReXMuFL94AEZzB5n0Rs56nqrwFzEyQRB4TlYdGCW4R9n9gEo0x8xEZR5%2Fr6fQ59X6M28F8qyJY8F8tXgHNqGcffYWJulsoO7XKZDgr5vzKooxgXGtFx3cRRL%2BdroIoYV8Iwrnn64aZUnU43xZ%2F8eCC4sShxEptvvd3HSEovKUdo4icvk1osuEG0z8PpyhiiCimIW8pMVK2hAEN4Jd6xKI3u15BGDIDp91MP74yr4GOqUBdb24JdQTiTZsXG0UfvdyEA4FTPEtSJg%2F7HkIkmDw9U%2BJOzGYXpdZiScMnq57%2BK2wQGkD9mGQq2f4GTDgrf6LCKEsDftJCmk7K994HF%2F9G%2F42O2RW0YWG7BS742G6mOFflzL1kbfiSfxnzOnFiY%2FKf0mwi2eHtTZqLM7NdaRK%2BZ3%2F95R3tbcQeG%2FL628ccsX0KWX0wxvavFjRTH5KWdteFsIUy%2FXT&X-Amz-Signature=f75efbae1bba5017889c8539d1ce1dfce25ab0cab8479e90b9e187d20017d14a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WMQ6KE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg4CCVpWr7lqtUbAmAZGH6MlEK0FE4yvCrCZoiLpewgIgM17Axj4SSkQrsyC0yzjZxaeU9VyCxVby%2B5EGVqUIoKIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsNbnTQGFJutstdWSrcA%2Bi0qiVP6O%2BSwC4Sqigl4esfOSSbDWSlYYkfsZg%2B%2FIZQJMyfDrHYxgMREMpyDfSC7MAT6qg4m8LfSTZwJTPpjwG6HlavbRmwUrikHvpcKqgkC9LxzkzLX2rhUH7chnQ0PwZzW5h3wd8cvAeTzVkPBn4%2BAqXQyAIL%2FJTWseFdoEbdwRqMlTmBiYjHJyp50xVuZHB77mH%2BlQiFDdhbmzwwG9RnISWBsKH5wtcZZ15BWampWzwjmKOQ3hbgmPQ93LXqF9WMcVUAug%2FcvzVux1gKrgLVHj0SnQqmTQm89VcFd20PAiymd8SaA1e2%2BQEP3X9QMUy6%2F5Qi70jq6X0qcI1QlYMctaIaFctNBt78NBx%2FgJRWXQmgvByEcs6vkRHtTK9grrgNq3QWXOW%2FkGwuI9%2FM3yXy91jReXMuFL94AEZzB5n0Rs56nqrwFzEyQRB4TlYdGCW4R9n9gEo0x8xEZR5%2Fr6fQ59X6M28F8qyJY8F8tXgHNqGcffYWJulsoO7XKZDgr5vzKooxgXGtFx3cRRL%2BdroIoYV8Iwrnn64aZUnU43xZ%2F8eCC4sShxEptvvd3HSEovKUdo4icvk1osuEG0z8PpyhiiCimIW8pMVK2hAEN4Jd6xKI3u15BGDIDp91MP74yr4GOqUBdb24JdQTiTZsXG0UfvdyEA4FTPEtSJg%2F7HkIkmDw9U%2BJOzGYXpdZiScMnq57%2BK2wQGkD9mGQq2f4GTDgrf6LCKEsDftJCmk7K994HF%2F9G%2F42O2RW0YWG7BS742G6mOFflzL1kbfiSfxnzOnFiY%2FKf0mwi2eHtTZqLM7NdaRK%2BZ3%2F95R3tbcQeG%2FL628ccsX0KWX0wxvavFjRTH5KWdteFsIUy%2FXT&X-Amz-Signature=c78287783d23f722fc2d768219a4ca560bdebadc8b33bf35d1b9fa4e4724693c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WMQ6KE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg4CCVpWr7lqtUbAmAZGH6MlEK0FE4yvCrCZoiLpewgIgM17Axj4SSkQrsyC0yzjZxaeU9VyCxVby%2B5EGVqUIoKIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsNbnTQGFJutstdWSrcA%2Bi0qiVP6O%2BSwC4Sqigl4esfOSSbDWSlYYkfsZg%2B%2FIZQJMyfDrHYxgMREMpyDfSC7MAT6qg4m8LfSTZwJTPpjwG6HlavbRmwUrikHvpcKqgkC9LxzkzLX2rhUH7chnQ0PwZzW5h3wd8cvAeTzVkPBn4%2BAqXQyAIL%2FJTWseFdoEbdwRqMlTmBiYjHJyp50xVuZHB77mH%2BlQiFDdhbmzwwG9RnISWBsKH5wtcZZ15BWampWzwjmKOQ3hbgmPQ93LXqF9WMcVUAug%2FcvzVux1gKrgLVHj0SnQqmTQm89VcFd20PAiymd8SaA1e2%2BQEP3X9QMUy6%2F5Qi70jq6X0qcI1QlYMctaIaFctNBt78NBx%2FgJRWXQmgvByEcs6vkRHtTK9grrgNq3QWXOW%2FkGwuI9%2FM3yXy91jReXMuFL94AEZzB5n0Rs56nqrwFzEyQRB4TlYdGCW4R9n9gEo0x8xEZR5%2Fr6fQ59X6M28F8qyJY8F8tXgHNqGcffYWJulsoO7XKZDgr5vzKooxgXGtFx3cRRL%2BdroIoYV8Iwrnn64aZUnU43xZ%2F8eCC4sShxEptvvd3HSEovKUdo4icvk1osuEG0z8PpyhiiCimIW8pMVK2hAEN4Jd6xKI3u15BGDIDp91MP74yr4GOqUBdb24JdQTiTZsXG0UfvdyEA4FTPEtSJg%2F7HkIkmDw9U%2BJOzGYXpdZiScMnq57%2BK2wQGkD9mGQq2f4GTDgrf6LCKEsDftJCmk7K994HF%2F9G%2F42O2RW0YWG7BS742G6mOFflzL1kbfiSfxnzOnFiY%2FKf0mwi2eHtTZqLM7NdaRK%2BZ3%2F95R3tbcQeG%2FL628ccsX0KWX0wxvavFjRTH5KWdteFsIUy%2FXT&X-Amz-Signature=4fbae7e378d6dfbcbbb7b9cec701e311b03f5ec565c386b0e97ecd3f4fdce4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WMQ6KE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg4CCVpWr7lqtUbAmAZGH6MlEK0FE4yvCrCZoiLpewgIgM17Axj4SSkQrsyC0yzjZxaeU9VyCxVby%2B5EGVqUIoKIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsNbnTQGFJutstdWSrcA%2Bi0qiVP6O%2BSwC4Sqigl4esfOSSbDWSlYYkfsZg%2B%2FIZQJMyfDrHYxgMREMpyDfSC7MAT6qg4m8LfSTZwJTPpjwG6HlavbRmwUrikHvpcKqgkC9LxzkzLX2rhUH7chnQ0PwZzW5h3wd8cvAeTzVkPBn4%2BAqXQyAIL%2FJTWseFdoEbdwRqMlTmBiYjHJyp50xVuZHB77mH%2BlQiFDdhbmzwwG9RnISWBsKH5wtcZZ15BWampWzwjmKOQ3hbgmPQ93LXqF9WMcVUAug%2FcvzVux1gKrgLVHj0SnQqmTQm89VcFd20PAiymd8SaA1e2%2BQEP3X9QMUy6%2F5Qi70jq6X0qcI1QlYMctaIaFctNBt78NBx%2FgJRWXQmgvByEcs6vkRHtTK9grrgNq3QWXOW%2FkGwuI9%2FM3yXy91jReXMuFL94AEZzB5n0Rs56nqrwFzEyQRB4TlYdGCW4R9n9gEo0x8xEZR5%2Fr6fQ59X6M28F8qyJY8F8tXgHNqGcffYWJulsoO7XKZDgr5vzKooxgXGtFx3cRRL%2BdroIoYV8Iwrnn64aZUnU43xZ%2F8eCC4sShxEptvvd3HSEovKUdo4icvk1osuEG0z8PpyhiiCimIW8pMVK2hAEN4Jd6xKI3u15BGDIDp91MP74yr4GOqUBdb24JdQTiTZsXG0UfvdyEA4FTPEtSJg%2F7HkIkmDw9U%2BJOzGYXpdZiScMnq57%2BK2wQGkD9mGQq2f4GTDgrf6LCKEsDftJCmk7K994HF%2F9G%2F42O2RW0YWG7BS742G6mOFflzL1kbfiSfxnzOnFiY%2FKf0mwi2eHtTZqLM7NdaRK%2BZ3%2F95R3tbcQeG%2FL628ccsX0KWX0wxvavFjRTH5KWdteFsIUy%2FXT&X-Amz-Signature=4b5d0be1dee8d272b9ed284d96963d08c716c0c00cb7bc47caed880a5a37c837&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
