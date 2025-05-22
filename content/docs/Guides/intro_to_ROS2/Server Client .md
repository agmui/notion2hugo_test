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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMER7SIT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCAHqynzSjr%2BSg5FX%2Bnd9eUNnn82mtdy3BLUecLaJkgRQIhAO3i0XJKlrQi8tdE%2Bx6Gnno15C9icfHhO8OKUoZGKOSYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5W%2FMc0eu%2FsOdEa0Uq3ANx6PdA%2Fdq%2FONd27D8Q0Wukkcm0vJaf93ouooAci0GCDK8e60g4oF%2BiK0smcnaw4xaJ%2FEYobVXQVq40u0%2BRJx9SNqAiFXgfprAgh7CkWRHzq6TLclmAzHm7n3QayuzsejJRODD3CEcEqF%2FGbssM52JHKR19Aiz4oWpsyv7PW5YxtqxqvQx736wHmRmePLEJw9OgDPLwYDbLN6bTydyu2l%2F6K22RWQzoQmN%2Bt%2FCytcAXqyAa4X1vkGh7cLRhN%2BC3Ih1xzEDkwqH4qt2RutUOhZw4311tgpMvVaPqHAZF04oASNU4UKz7I0b4iCeW1DS2NH%2Fmzp1dp11sULnVpYOCzZQm2uuv0ouCdL%2BFoBi2BHgg2Lbo3tGUQn7sA85U4k0pPj93eZFWRCGhHIdF0EenJdma6aCtGw%2BDLB0iWfp%2FCEi5HT7SBHspHpBy1ZpTv1mwoBa57nxP0rKLB%2BE2Gvzx5Wp2yAAYI1CBHjwSSs3Or2sZ6bumXdG5QhBfRBnYCxohYtQ2p7NXrHBmUyigX3hPLJhR%2BbHwcKOGlrqq%2FdzJkGIlCdOBTFncuOGuIsCXshU%2F1NvJ6BL2ILZyAJ9EsBOamiabkreWcb28QO1X46f71fzewPMNVuUX%2BskyxZHtWDCQhL7BBjqkAdPBtWlmnJlN8z5vzGgWZN%2BI9bjvZAIkGLMfPa%2BbROGADEya52lpCRhiuJsLvKIugyr0vn7hNrfU2O95Bb9a5k8ZZ9XwW2lFitf9AHwU%2FIQt7QrL2Y7TeWL19OokX%2FjIlJonUH7uUxRCmWyFBuQRcxrfx88vhT%2B%2BjOyWNDVlxK0bGKFE0Eu%2BdwjXe%2FwbLzl9J2Cw2A1vcWoLT6mBTEbn7PuTyMvF&X-Amz-Signature=4d5ace13a458e073bc99ca75ed0f65ef09d0a34090ccdc071da8e899c3493830&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMER7SIT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCAHqynzSjr%2BSg5FX%2Bnd9eUNnn82mtdy3BLUecLaJkgRQIhAO3i0XJKlrQi8tdE%2Bx6Gnno15C9icfHhO8OKUoZGKOSYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5W%2FMc0eu%2FsOdEa0Uq3ANx6PdA%2Fdq%2FONd27D8Q0Wukkcm0vJaf93ouooAci0GCDK8e60g4oF%2BiK0smcnaw4xaJ%2FEYobVXQVq40u0%2BRJx9SNqAiFXgfprAgh7CkWRHzq6TLclmAzHm7n3QayuzsejJRODD3CEcEqF%2FGbssM52JHKR19Aiz4oWpsyv7PW5YxtqxqvQx736wHmRmePLEJw9OgDPLwYDbLN6bTydyu2l%2F6K22RWQzoQmN%2Bt%2FCytcAXqyAa4X1vkGh7cLRhN%2BC3Ih1xzEDkwqH4qt2RutUOhZw4311tgpMvVaPqHAZF04oASNU4UKz7I0b4iCeW1DS2NH%2Fmzp1dp11sULnVpYOCzZQm2uuv0ouCdL%2BFoBi2BHgg2Lbo3tGUQn7sA85U4k0pPj93eZFWRCGhHIdF0EenJdma6aCtGw%2BDLB0iWfp%2FCEi5HT7SBHspHpBy1ZpTv1mwoBa57nxP0rKLB%2BE2Gvzx5Wp2yAAYI1CBHjwSSs3Or2sZ6bumXdG5QhBfRBnYCxohYtQ2p7NXrHBmUyigX3hPLJhR%2BbHwcKOGlrqq%2FdzJkGIlCdOBTFncuOGuIsCXshU%2F1NvJ6BL2ILZyAJ9EsBOamiabkreWcb28QO1X46f71fzewPMNVuUX%2BskyxZHtWDCQhL7BBjqkAdPBtWlmnJlN8z5vzGgWZN%2BI9bjvZAIkGLMfPa%2BbROGADEya52lpCRhiuJsLvKIugyr0vn7hNrfU2O95Bb9a5k8ZZ9XwW2lFitf9AHwU%2FIQt7QrL2Y7TeWL19OokX%2FjIlJonUH7uUxRCmWyFBuQRcxrfx88vhT%2B%2BjOyWNDVlxK0bGKFE0Eu%2BdwjXe%2FwbLzl9J2Cw2A1vcWoLT6mBTEbn7PuTyMvF&X-Amz-Signature=9bcd94d7243b3c5fb80f845ef8122fb6c85264c7f403a704925625df432cdd2c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMER7SIT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCAHqynzSjr%2BSg5FX%2Bnd9eUNnn82mtdy3BLUecLaJkgRQIhAO3i0XJKlrQi8tdE%2Bx6Gnno15C9icfHhO8OKUoZGKOSYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5W%2FMc0eu%2FsOdEa0Uq3ANx6PdA%2Fdq%2FONd27D8Q0Wukkcm0vJaf93ouooAci0GCDK8e60g4oF%2BiK0smcnaw4xaJ%2FEYobVXQVq40u0%2BRJx9SNqAiFXgfprAgh7CkWRHzq6TLclmAzHm7n3QayuzsejJRODD3CEcEqF%2FGbssM52JHKR19Aiz4oWpsyv7PW5YxtqxqvQx736wHmRmePLEJw9OgDPLwYDbLN6bTydyu2l%2F6K22RWQzoQmN%2Bt%2FCytcAXqyAa4X1vkGh7cLRhN%2BC3Ih1xzEDkwqH4qt2RutUOhZw4311tgpMvVaPqHAZF04oASNU4UKz7I0b4iCeW1DS2NH%2Fmzp1dp11sULnVpYOCzZQm2uuv0ouCdL%2BFoBi2BHgg2Lbo3tGUQn7sA85U4k0pPj93eZFWRCGhHIdF0EenJdma6aCtGw%2BDLB0iWfp%2FCEi5HT7SBHspHpBy1ZpTv1mwoBa57nxP0rKLB%2BE2Gvzx5Wp2yAAYI1CBHjwSSs3Or2sZ6bumXdG5QhBfRBnYCxohYtQ2p7NXrHBmUyigX3hPLJhR%2BbHwcKOGlrqq%2FdzJkGIlCdOBTFncuOGuIsCXshU%2F1NvJ6BL2ILZyAJ9EsBOamiabkreWcb28QO1X46f71fzewPMNVuUX%2BskyxZHtWDCQhL7BBjqkAdPBtWlmnJlN8z5vzGgWZN%2BI9bjvZAIkGLMfPa%2BbROGADEya52lpCRhiuJsLvKIugyr0vn7hNrfU2O95Bb9a5k8ZZ9XwW2lFitf9AHwU%2FIQt7QrL2Y7TeWL19OokX%2FjIlJonUH7uUxRCmWyFBuQRcxrfx88vhT%2B%2BjOyWNDVlxK0bGKFE0Eu%2BdwjXe%2FwbLzl9J2Cw2A1vcWoLT6mBTEbn7PuTyMvF&X-Amz-Signature=40403dfcc46a5d150beb2c6ad4b77ad5eeb33a5b3fd9ae637803a4d65b0c127c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMER7SIT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCAHqynzSjr%2BSg5FX%2Bnd9eUNnn82mtdy3BLUecLaJkgRQIhAO3i0XJKlrQi8tdE%2Bx6Gnno15C9icfHhO8OKUoZGKOSYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5W%2FMc0eu%2FsOdEa0Uq3ANx6PdA%2Fdq%2FONd27D8Q0Wukkcm0vJaf93ouooAci0GCDK8e60g4oF%2BiK0smcnaw4xaJ%2FEYobVXQVq40u0%2BRJx9SNqAiFXgfprAgh7CkWRHzq6TLclmAzHm7n3QayuzsejJRODD3CEcEqF%2FGbssM52JHKR19Aiz4oWpsyv7PW5YxtqxqvQx736wHmRmePLEJw9OgDPLwYDbLN6bTydyu2l%2F6K22RWQzoQmN%2Bt%2FCytcAXqyAa4X1vkGh7cLRhN%2BC3Ih1xzEDkwqH4qt2RutUOhZw4311tgpMvVaPqHAZF04oASNU4UKz7I0b4iCeW1DS2NH%2Fmzp1dp11sULnVpYOCzZQm2uuv0ouCdL%2BFoBi2BHgg2Lbo3tGUQn7sA85U4k0pPj93eZFWRCGhHIdF0EenJdma6aCtGw%2BDLB0iWfp%2FCEi5HT7SBHspHpBy1ZpTv1mwoBa57nxP0rKLB%2BE2Gvzx5Wp2yAAYI1CBHjwSSs3Or2sZ6bumXdG5QhBfRBnYCxohYtQ2p7NXrHBmUyigX3hPLJhR%2BbHwcKOGlrqq%2FdzJkGIlCdOBTFncuOGuIsCXshU%2F1NvJ6BL2ILZyAJ9EsBOamiabkreWcb28QO1X46f71fzewPMNVuUX%2BskyxZHtWDCQhL7BBjqkAdPBtWlmnJlN8z5vzGgWZN%2BI9bjvZAIkGLMfPa%2BbROGADEya52lpCRhiuJsLvKIugyr0vn7hNrfU2O95Bb9a5k8ZZ9XwW2lFitf9AHwU%2FIQt7QrL2Y7TeWL19OokX%2FjIlJonUH7uUxRCmWyFBuQRcxrfx88vhT%2B%2BjOyWNDVlxK0bGKFE0Eu%2BdwjXe%2FwbLzl9J2Cw2A1vcWoLT6mBTEbn7PuTyMvF&X-Amz-Signature=7a0a6533c71b9d9a035a9b2da04796539c17d79ae36fe1f8e97978fdfd042129&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMER7SIT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCAHqynzSjr%2BSg5FX%2Bnd9eUNnn82mtdy3BLUecLaJkgRQIhAO3i0XJKlrQi8tdE%2Bx6Gnno15C9icfHhO8OKUoZGKOSYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5W%2FMc0eu%2FsOdEa0Uq3ANx6PdA%2Fdq%2FONd27D8Q0Wukkcm0vJaf93ouooAci0GCDK8e60g4oF%2BiK0smcnaw4xaJ%2FEYobVXQVq40u0%2BRJx9SNqAiFXgfprAgh7CkWRHzq6TLclmAzHm7n3QayuzsejJRODD3CEcEqF%2FGbssM52JHKR19Aiz4oWpsyv7PW5YxtqxqvQx736wHmRmePLEJw9OgDPLwYDbLN6bTydyu2l%2F6K22RWQzoQmN%2Bt%2FCytcAXqyAa4X1vkGh7cLRhN%2BC3Ih1xzEDkwqH4qt2RutUOhZw4311tgpMvVaPqHAZF04oASNU4UKz7I0b4iCeW1DS2NH%2Fmzp1dp11sULnVpYOCzZQm2uuv0ouCdL%2BFoBi2BHgg2Lbo3tGUQn7sA85U4k0pPj93eZFWRCGhHIdF0EenJdma6aCtGw%2BDLB0iWfp%2FCEi5HT7SBHspHpBy1ZpTv1mwoBa57nxP0rKLB%2BE2Gvzx5Wp2yAAYI1CBHjwSSs3Or2sZ6bumXdG5QhBfRBnYCxohYtQ2p7NXrHBmUyigX3hPLJhR%2BbHwcKOGlrqq%2FdzJkGIlCdOBTFncuOGuIsCXshU%2F1NvJ6BL2ILZyAJ9EsBOamiabkreWcb28QO1X46f71fzewPMNVuUX%2BskyxZHtWDCQhL7BBjqkAdPBtWlmnJlN8z5vzGgWZN%2BI9bjvZAIkGLMfPa%2BbROGADEya52lpCRhiuJsLvKIugyr0vn7hNrfU2O95Bb9a5k8ZZ9XwW2lFitf9AHwU%2FIQt7QrL2Y7TeWL19OokX%2FjIlJonUH7uUxRCmWyFBuQRcxrfx88vhT%2B%2BjOyWNDVlxK0bGKFE0Eu%2BdwjXe%2FwbLzl9J2Cw2A1vcWoLT6mBTEbn7PuTyMvF&X-Amz-Signature=0b80ca30a95b6a2a4023228822a09a6eb8273cecc6347188a14b978dd703cbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
