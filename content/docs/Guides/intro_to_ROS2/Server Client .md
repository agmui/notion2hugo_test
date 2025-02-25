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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZOKJFK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDjK8A13ppbGeNEBtMPAnYLVUBvWQbN6bMaKN6GWEwKfwIgHVQiAfNVitgVQdxChx9YFSsO2aBcYKOSBlD2U7VTn0Mq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCyhCy2PELvnYQuYwCrcA2fPvRS2bnac39Zk5Lx%2B3zAAEZDz30ggBSzVLY9RS4fZbnjFn168UrKsK9j3DZzrO2UTCBpR3ECL02P7k0PhtvDrIkLWwy6GxhJCSI3Z%2FzFf67eFPTS2odA%2By2aII5kmgU0ffn%2BhZmJS8drmYwXJF1Gys4%2FJRoOPEwDDvkxt57jA2CyNRhdYdvptUlmCFnNd456%2F9KnfQy6SCfCo5FSLmlRSBIPOJceJRkcC2P8JTdoHJwwsHpKJEbl7voYqApvRFFV4Vo1jCY2h5Fgn5EMJXX6HUuOWGN2W5jFYSDBtrmSDEVhGLhzvqgk1EnROyR9Ro4%2FY32O0bdEy3p8hcaNGiaQ%2FsL24rud4Uj8aUPUMEdczkxOZUWG2AekNjBi0b7fwq5iFX614%2FbRwkQNjLKnGFqxUvSCshMt0O8PRsxXBkJ%2B7rSRU%2BswAIcRSXIqd6kJAKXhAFMe1SstJMvMxtNbKJqJJ%2FfiSoa%2FZyKqxypgO426v0KZra5Z4oGlhqW4fd4VmAIwinmQBZGNdFeVKok6u0P8kq9qYz%2BoXF4K5wmd23wHeT3dUt0zelCk3RYZ8jeiGbLoEt2TB%2B%2FI9bCEw1N%2BeqKepjwMiKy8Rl%2BYGLJFudJ6oLcNDqNOW5pGpeDpiMIDp9b0GOqUBrSW2q6piMfB2e42zDUrfKwQChdn42TsBfIJQkcg84duvETZqryu3ZL0p%2BXdGlQxx5hakArBINXpIng1H00KD2ejAsclC7MuacahwAeI06piG%2BdE6EjEFT23AqRVvqqUEBmpKlbncq4GaIsRc3nzfx5tI0Xo%2Bw2uYYWBD%2FdPhxCHcQKbtD8fMCtEGADONMY3dkp4KALl0ulAzQCvp62LJCfDyj7iS&X-Amz-Signature=aac098a25316227a87718dc490e1a03727008eaec4e9f8f5741794e6bf207ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZOKJFK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDjK8A13ppbGeNEBtMPAnYLVUBvWQbN6bMaKN6GWEwKfwIgHVQiAfNVitgVQdxChx9YFSsO2aBcYKOSBlD2U7VTn0Mq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCyhCy2PELvnYQuYwCrcA2fPvRS2bnac39Zk5Lx%2B3zAAEZDz30ggBSzVLY9RS4fZbnjFn168UrKsK9j3DZzrO2UTCBpR3ECL02P7k0PhtvDrIkLWwy6GxhJCSI3Z%2FzFf67eFPTS2odA%2By2aII5kmgU0ffn%2BhZmJS8drmYwXJF1Gys4%2FJRoOPEwDDvkxt57jA2CyNRhdYdvptUlmCFnNd456%2F9KnfQy6SCfCo5FSLmlRSBIPOJceJRkcC2P8JTdoHJwwsHpKJEbl7voYqApvRFFV4Vo1jCY2h5Fgn5EMJXX6HUuOWGN2W5jFYSDBtrmSDEVhGLhzvqgk1EnROyR9Ro4%2FY32O0bdEy3p8hcaNGiaQ%2FsL24rud4Uj8aUPUMEdczkxOZUWG2AekNjBi0b7fwq5iFX614%2FbRwkQNjLKnGFqxUvSCshMt0O8PRsxXBkJ%2B7rSRU%2BswAIcRSXIqd6kJAKXhAFMe1SstJMvMxtNbKJqJJ%2FfiSoa%2FZyKqxypgO426v0KZra5Z4oGlhqW4fd4VmAIwinmQBZGNdFeVKok6u0P8kq9qYz%2BoXF4K5wmd23wHeT3dUt0zelCk3RYZ8jeiGbLoEt2TB%2B%2FI9bCEw1N%2BeqKepjwMiKy8Rl%2BYGLJFudJ6oLcNDqNOW5pGpeDpiMIDp9b0GOqUBrSW2q6piMfB2e42zDUrfKwQChdn42TsBfIJQkcg84duvETZqryu3ZL0p%2BXdGlQxx5hakArBINXpIng1H00KD2ejAsclC7MuacahwAeI06piG%2BdE6EjEFT23AqRVvqqUEBmpKlbncq4GaIsRc3nzfx5tI0Xo%2Bw2uYYWBD%2FdPhxCHcQKbtD8fMCtEGADONMY3dkp4KALl0ulAzQCvp62LJCfDyj7iS&X-Amz-Signature=d6a4a80716a21a54bd7c135ac745588d9802f6bacd487a0f184faba5afe849c8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZOKJFK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDjK8A13ppbGeNEBtMPAnYLVUBvWQbN6bMaKN6GWEwKfwIgHVQiAfNVitgVQdxChx9YFSsO2aBcYKOSBlD2U7VTn0Mq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCyhCy2PELvnYQuYwCrcA2fPvRS2bnac39Zk5Lx%2B3zAAEZDz30ggBSzVLY9RS4fZbnjFn168UrKsK9j3DZzrO2UTCBpR3ECL02P7k0PhtvDrIkLWwy6GxhJCSI3Z%2FzFf67eFPTS2odA%2By2aII5kmgU0ffn%2BhZmJS8drmYwXJF1Gys4%2FJRoOPEwDDvkxt57jA2CyNRhdYdvptUlmCFnNd456%2F9KnfQy6SCfCo5FSLmlRSBIPOJceJRkcC2P8JTdoHJwwsHpKJEbl7voYqApvRFFV4Vo1jCY2h5Fgn5EMJXX6HUuOWGN2W5jFYSDBtrmSDEVhGLhzvqgk1EnROyR9Ro4%2FY32O0bdEy3p8hcaNGiaQ%2FsL24rud4Uj8aUPUMEdczkxOZUWG2AekNjBi0b7fwq5iFX614%2FbRwkQNjLKnGFqxUvSCshMt0O8PRsxXBkJ%2B7rSRU%2BswAIcRSXIqd6kJAKXhAFMe1SstJMvMxtNbKJqJJ%2FfiSoa%2FZyKqxypgO426v0KZra5Z4oGlhqW4fd4VmAIwinmQBZGNdFeVKok6u0P8kq9qYz%2BoXF4K5wmd23wHeT3dUt0zelCk3RYZ8jeiGbLoEt2TB%2B%2FI9bCEw1N%2BeqKepjwMiKy8Rl%2BYGLJFudJ6oLcNDqNOW5pGpeDpiMIDp9b0GOqUBrSW2q6piMfB2e42zDUrfKwQChdn42TsBfIJQkcg84duvETZqryu3ZL0p%2BXdGlQxx5hakArBINXpIng1H00KD2ejAsclC7MuacahwAeI06piG%2BdE6EjEFT23AqRVvqqUEBmpKlbncq4GaIsRc3nzfx5tI0Xo%2Bw2uYYWBD%2FdPhxCHcQKbtD8fMCtEGADONMY3dkp4KALl0ulAzQCvp62LJCfDyj7iS&X-Amz-Signature=166ea4ce463d7d8d3928741a75df35c1799d48136729aff601251d938e70d86c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZOKJFK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDjK8A13ppbGeNEBtMPAnYLVUBvWQbN6bMaKN6GWEwKfwIgHVQiAfNVitgVQdxChx9YFSsO2aBcYKOSBlD2U7VTn0Mq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCyhCy2PELvnYQuYwCrcA2fPvRS2bnac39Zk5Lx%2B3zAAEZDz30ggBSzVLY9RS4fZbnjFn168UrKsK9j3DZzrO2UTCBpR3ECL02P7k0PhtvDrIkLWwy6GxhJCSI3Z%2FzFf67eFPTS2odA%2By2aII5kmgU0ffn%2BhZmJS8drmYwXJF1Gys4%2FJRoOPEwDDvkxt57jA2CyNRhdYdvptUlmCFnNd456%2F9KnfQy6SCfCo5FSLmlRSBIPOJceJRkcC2P8JTdoHJwwsHpKJEbl7voYqApvRFFV4Vo1jCY2h5Fgn5EMJXX6HUuOWGN2W5jFYSDBtrmSDEVhGLhzvqgk1EnROyR9Ro4%2FY32O0bdEy3p8hcaNGiaQ%2FsL24rud4Uj8aUPUMEdczkxOZUWG2AekNjBi0b7fwq5iFX614%2FbRwkQNjLKnGFqxUvSCshMt0O8PRsxXBkJ%2B7rSRU%2BswAIcRSXIqd6kJAKXhAFMe1SstJMvMxtNbKJqJJ%2FfiSoa%2FZyKqxypgO426v0KZra5Z4oGlhqW4fd4VmAIwinmQBZGNdFeVKok6u0P8kq9qYz%2BoXF4K5wmd23wHeT3dUt0zelCk3RYZ8jeiGbLoEt2TB%2B%2FI9bCEw1N%2BeqKepjwMiKy8Rl%2BYGLJFudJ6oLcNDqNOW5pGpeDpiMIDp9b0GOqUBrSW2q6piMfB2e42zDUrfKwQChdn42TsBfIJQkcg84duvETZqryu3ZL0p%2BXdGlQxx5hakArBINXpIng1H00KD2ejAsclC7MuacahwAeI06piG%2BdE6EjEFT23AqRVvqqUEBmpKlbncq4GaIsRc3nzfx5tI0Xo%2Bw2uYYWBD%2FdPhxCHcQKbtD8fMCtEGADONMY3dkp4KALl0ulAzQCvp62LJCfDyj7iS&X-Amz-Signature=b1e1e3322db819d5ac57cc5780a73bd282a4c2dcb7d753d9bcfc9421cd8f4d53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZOKJFK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDjK8A13ppbGeNEBtMPAnYLVUBvWQbN6bMaKN6GWEwKfwIgHVQiAfNVitgVQdxChx9YFSsO2aBcYKOSBlD2U7VTn0Mq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCyhCy2PELvnYQuYwCrcA2fPvRS2bnac39Zk5Lx%2B3zAAEZDz30ggBSzVLY9RS4fZbnjFn168UrKsK9j3DZzrO2UTCBpR3ECL02P7k0PhtvDrIkLWwy6GxhJCSI3Z%2FzFf67eFPTS2odA%2By2aII5kmgU0ffn%2BhZmJS8drmYwXJF1Gys4%2FJRoOPEwDDvkxt57jA2CyNRhdYdvptUlmCFnNd456%2F9KnfQy6SCfCo5FSLmlRSBIPOJceJRkcC2P8JTdoHJwwsHpKJEbl7voYqApvRFFV4Vo1jCY2h5Fgn5EMJXX6HUuOWGN2W5jFYSDBtrmSDEVhGLhzvqgk1EnROyR9Ro4%2FY32O0bdEy3p8hcaNGiaQ%2FsL24rud4Uj8aUPUMEdczkxOZUWG2AekNjBi0b7fwq5iFX614%2FbRwkQNjLKnGFqxUvSCshMt0O8PRsxXBkJ%2B7rSRU%2BswAIcRSXIqd6kJAKXhAFMe1SstJMvMxtNbKJqJJ%2FfiSoa%2FZyKqxypgO426v0KZra5Z4oGlhqW4fd4VmAIwinmQBZGNdFeVKok6u0P8kq9qYz%2BoXF4K5wmd23wHeT3dUt0zelCk3RYZ8jeiGbLoEt2TB%2B%2FI9bCEw1N%2BeqKepjwMiKy8Rl%2BYGLJFudJ6oLcNDqNOW5pGpeDpiMIDp9b0GOqUBrSW2q6piMfB2e42zDUrfKwQChdn42TsBfIJQkcg84duvETZqryu3ZL0p%2BXdGlQxx5hakArBINXpIng1H00KD2ejAsclC7MuacahwAeI06piG%2BdE6EjEFT23AqRVvqqUEBmpKlbncq4GaIsRc3nzfx5tI0Xo%2Bw2uYYWBD%2FdPhxCHcQKbtD8fMCtEGADONMY3dkp4KALl0ulAzQCvp62LJCfDyj7iS&X-Amz-Signature=e19c549a662a0481c145f08f873769c5483f96bc5775229d3ac450c2759bcaec&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
