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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2Z4O4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDgRybAsbVhLgg2G1rs5FlTWmGFJ0%2FbvBJO%2B7yOAMr7MQIhAObDBG1Qo6bMsPRpiAtNC7u47MeT0qy%2FCnpwcmmeHxeVKv8DCD4QABoMNjM3NDIzMTgzODA1IgxBPTVnf%2FbJEv%2B%2F%2BUUq3AMIH0sK8wuLTIr4jO7Xvxs2XKuHhM%2Fi8ryG%2FFWiZPPAlbo8hxWyGkgD9WQPvs%2F1pvGuPiMJtofmo0gWdm%2BMOSJISmgmCBx7qKpC3vXa2Ttw46wEECtBw1hGVlu7IqAAPD6I6kuUim0ltTf%2F8FujPsuNZPsJGxfT0g9v5FHobkkVppY9nQkWSPdaucwWHlLxMG0JI3NOZqookaAhsYZFQ0a7zM1LdVnb2mIG%2BVEmE1tjVR0Trk%2F8dggm4sScbcpPll1xeRzUdCAxbvST%2Fw9kHhj2Z0XnS%2FyPaEW3uN0uYKec2m2KudCkeFWg20l0qXPQzymvBnUShEcbD7opFCaNmjiqdGc5RRBWKm8eFW1c7AWiOJ7hcqw%2FLTwrIII2YR8C4WRmRnwRpUmPleBmqCbixXrZ2ksIc3g6E6FJfDBZEGCKkPJqSQSzaRNhcLk9Cd5J9379L9KynC709CUQW%2BdcOt0dtJ%2BIw3ZHIvYlrx81hFpdMHAN05S2c97tvcdvRJbTxjZYKpQIKFkZ06DjPxSX41hr5C0vZtdxAQ8tEAxOjg4bVpOfeC1OG57AzcDSK%2BBl5KWBgsAkb8jeu0sLD9ju0SdighNGFoRGVTFat0jWmoUFfEsT7BraS5IbEzVaVjCRw4TCBjqkAc%2FC8EvuMiKP88ZjL3LILBGES2qk9NN%2FKQR0E4kJw8LJIX1Br%2Bn3w9nfuH3YKxNo3whBVVr9ngOSE36BghprKu2KR%2F6s47V%2BZR6Ubos5QuV5LRP4BFT4l2WnU5Ivb0hiZ%2BYV%2F4ykQNgaMnJ5xgrXGCOVro%2BJs0TmpQAVgzrVXknG7bOj5S02YKFE0MUAc6PxYJqagbNEb2a9NhC9GHLt3AlAHXYZ&X-Amz-Signature=b1121bff83329d5401b8a5f9054d3a5a3611c62662cdb7f24fb9c7bedc5f192a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2Z4O4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDgRybAsbVhLgg2G1rs5FlTWmGFJ0%2FbvBJO%2B7yOAMr7MQIhAObDBG1Qo6bMsPRpiAtNC7u47MeT0qy%2FCnpwcmmeHxeVKv8DCD4QABoMNjM3NDIzMTgzODA1IgxBPTVnf%2FbJEv%2B%2F%2BUUq3AMIH0sK8wuLTIr4jO7Xvxs2XKuHhM%2Fi8ryG%2FFWiZPPAlbo8hxWyGkgD9WQPvs%2F1pvGuPiMJtofmo0gWdm%2BMOSJISmgmCBx7qKpC3vXa2Ttw46wEECtBw1hGVlu7IqAAPD6I6kuUim0ltTf%2F8FujPsuNZPsJGxfT0g9v5FHobkkVppY9nQkWSPdaucwWHlLxMG0JI3NOZqookaAhsYZFQ0a7zM1LdVnb2mIG%2BVEmE1tjVR0Trk%2F8dggm4sScbcpPll1xeRzUdCAxbvST%2Fw9kHhj2Z0XnS%2FyPaEW3uN0uYKec2m2KudCkeFWg20l0qXPQzymvBnUShEcbD7opFCaNmjiqdGc5RRBWKm8eFW1c7AWiOJ7hcqw%2FLTwrIII2YR8C4WRmRnwRpUmPleBmqCbixXrZ2ksIc3g6E6FJfDBZEGCKkPJqSQSzaRNhcLk9Cd5J9379L9KynC709CUQW%2BdcOt0dtJ%2BIw3ZHIvYlrx81hFpdMHAN05S2c97tvcdvRJbTxjZYKpQIKFkZ06DjPxSX41hr5C0vZtdxAQ8tEAxOjg4bVpOfeC1OG57AzcDSK%2BBl5KWBgsAkb8jeu0sLD9ju0SdighNGFoRGVTFat0jWmoUFfEsT7BraS5IbEzVaVjCRw4TCBjqkAc%2FC8EvuMiKP88ZjL3LILBGES2qk9NN%2FKQR0E4kJw8LJIX1Br%2Bn3w9nfuH3YKxNo3whBVVr9ngOSE36BghprKu2KR%2F6s47V%2BZR6Ubos5QuV5LRP4BFT4l2WnU5Ivb0hiZ%2BYV%2F4ykQNgaMnJ5xgrXGCOVro%2BJs0TmpQAVgzrVXknG7bOj5S02YKFE0MUAc6PxYJqagbNEb2a9NhC9GHLt3AlAHXYZ&X-Amz-Signature=112f803852c954ef82f2262b9d8906ebd2a13487b365ee77ebc39f3f76a09bef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2Z4O4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDgRybAsbVhLgg2G1rs5FlTWmGFJ0%2FbvBJO%2B7yOAMr7MQIhAObDBG1Qo6bMsPRpiAtNC7u47MeT0qy%2FCnpwcmmeHxeVKv8DCD4QABoMNjM3NDIzMTgzODA1IgxBPTVnf%2FbJEv%2B%2F%2BUUq3AMIH0sK8wuLTIr4jO7Xvxs2XKuHhM%2Fi8ryG%2FFWiZPPAlbo8hxWyGkgD9WQPvs%2F1pvGuPiMJtofmo0gWdm%2BMOSJISmgmCBx7qKpC3vXa2Ttw46wEECtBw1hGVlu7IqAAPD6I6kuUim0ltTf%2F8FujPsuNZPsJGxfT0g9v5FHobkkVppY9nQkWSPdaucwWHlLxMG0JI3NOZqookaAhsYZFQ0a7zM1LdVnb2mIG%2BVEmE1tjVR0Trk%2F8dggm4sScbcpPll1xeRzUdCAxbvST%2Fw9kHhj2Z0XnS%2FyPaEW3uN0uYKec2m2KudCkeFWg20l0qXPQzymvBnUShEcbD7opFCaNmjiqdGc5RRBWKm8eFW1c7AWiOJ7hcqw%2FLTwrIII2YR8C4WRmRnwRpUmPleBmqCbixXrZ2ksIc3g6E6FJfDBZEGCKkPJqSQSzaRNhcLk9Cd5J9379L9KynC709CUQW%2BdcOt0dtJ%2BIw3ZHIvYlrx81hFpdMHAN05S2c97tvcdvRJbTxjZYKpQIKFkZ06DjPxSX41hr5C0vZtdxAQ8tEAxOjg4bVpOfeC1OG57AzcDSK%2BBl5KWBgsAkb8jeu0sLD9ju0SdighNGFoRGVTFat0jWmoUFfEsT7BraS5IbEzVaVjCRw4TCBjqkAc%2FC8EvuMiKP88ZjL3LILBGES2qk9NN%2FKQR0E4kJw8LJIX1Br%2Bn3w9nfuH3YKxNo3whBVVr9ngOSE36BghprKu2KR%2F6s47V%2BZR6Ubos5QuV5LRP4BFT4l2WnU5Ivb0hiZ%2BYV%2F4ykQNgaMnJ5xgrXGCOVro%2BJs0TmpQAVgzrVXknG7bOj5S02YKFE0MUAc6PxYJqagbNEb2a9NhC9GHLt3AlAHXYZ&X-Amz-Signature=022d6320fcbefa037e3b2ed9303893015861d60ea5b4acd98b7ad4eed467ebe0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2Z4O4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDgRybAsbVhLgg2G1rs5FlTWmGFJ0%2FbvBJO%2B7yOAMr7MQIhAObDBG1Qo6bMsPRpiAtNC7u47MeT0qy%2FCnpwcmmeHxeVKv8DCD4QABoMNjM3NDIzMTgzODA1IgxBPTVnf%2FbJEv%2B%2F%2BUUq3AMIH0sK8wuLTIr4jO7Xvxs2XKuHhM%2Fi8ryG%2FFWiZPPAlbo8hxWyGkgD9WQPvs%2F1pvGuPiMJtofmo0gWdm%2BMOSJISmgmCBx7qKpC3vXa2Ttw46wEECtBw1hGVlu7IqAAPD6I6kuUim0ltTf%2F8FujPsuNZPsJGxfT0g9v5FHobkkVppY9nQkWSPdaucwWHlLxMG0JI3NOZqookaAhsYZFQ0a7zM1LdVnb2mIG%2BVEmE1tjVR0Trk%2F8dggm4sScbcpPll1xeRzUdCAxbvST%2Fw9kHhj2Z0XnS%2FyPaEW3uN0uYKec2m2KudCkeFWg20l0qXPQzymvBnUShEcbD7opFCaNmjiqdGc5RRBWKm8eFW1c7AWiOJ7hcqw%2FLTwrIII2YR8C4WRmRnwRpUmPleBmqCbixXrZ2ksIc3g6E6FJfDBZEGCKkPJqSQSzaRNhcLk9Cd5J9379L9KynC709CUQW%2BdcOt0dtJ%2BIw3ZHIvYlrx81hFpdMHAN05S2c97tvcdvRJbTxjZYKpQIKFkZ06DjPxSX41hr5C0vZtdxAQ8tEAxOjg4bVpOfeC1OG57AzcDSK%2BBl5KWBgsAkb8jeu0sLD9ju0SdighNGFoRGVTFat0jWmoUFfEsT7BraS5IbEzVaVjCRw4TCBjqkAc%2FC8EvuMiKP88ZjL3LILBGES2qk9NN%2FKQR0E4kJw8LJIX1Br%2Bn3w9nfuH3YKxNo3whBVVr9ngOSE36BghprKu2KR%2F6s47V%2BZR6Ubos5QuV5LRP4BFT4l2WnU5Ivb0hiZ%2BYV%2F4ykQNgaMnJ5xgrXGCOVro%2BJs0TmpQAVgzrVXknG7bOj5S02YKFE0MUAc6PxYJqagbNEb2a9NhC9GHLt3AlAHXYZ&X-Amz-Signature=be9a7b3f5faa102340eded765b5b414ee28c5b41bd30ab594b4b3a0f6b73637f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2Z4O4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDgRybAsbVhLgg2G1rs5FlTWmGFJ0%2FbvBJO%2B7yOAMr7MQIhAObDBG1Qo6bMsPRpiAtNC7u47MeT0qy%2FCnpwcmmeHxeVKv8DCD4QABoMNjM3NDIzMTgzODA1IgxBPTVnf%2FbJEv%2B%2F%2BUUq3AMIH0sK8wuLTIr4jO7Xvxs2XKuHhM%2Fi8ryG%2FFWiZPPAlbo8hxWyGkgD9WQPvs%2F1pvGuPiMJtofmo0gWdm%2BMOSJISmgmCBx7qKpC3vXa2Ttw46wEECtBw1hGVlu7IqAAPD6I6kuUim0ltTf%2F8FujPsuNZPsJGxfT0g9v5FHobkkVppY9nQkWSPdaucwWHlLxMG0JI3NOZqookaAhsYZFQ0a7zM1LdVnb2mIG%2BVEmE1tjVR0Trk%2F8dggm4sScbcpPll1xeRzUdCAxbvST%2Fw9kHhj2Z0XnS%2FyPaEW3uN0uYKec2m2KudCkeFWg20l0qXPQzymvBnUShEcbD7opFCaNmjiqdGc5RRBWKm8eFW1c7AWiOJ7hcqw%2FLTwrIII2YR8C4WRmRnwRpUmPleBmqCbixXrZ2ksIc3g6E6FJfDBZEGCKkPJqSQSzaRNhcLk9Cd5J9379L9KynC709CUQW%2BdcOt0dtJ%2BIw3ZHIvYlrx81hFpdMHAN05S2c97tvcdvRJbTxjZYKpQIKFkZ06DjPxSX41hr5C0vZtdxAQ8tEAxOjg4bVpOfeC1OG57AzcDSK%2BBl5KWBgsAkb8jeu0sLD9ju0SdighNGFoRGVTFat0jWmoUFfEsT7BraS5IbEzVaVjCRw4TCBjqkAc%2FC8EvuMiKP88ZjL3LILBGES2qk9NN%2FKQR0E4kJw8LJIX1Br%2Bn3w9nfuH3YKxNo3whBVVr9ngOSE36BghprKu2KR%2F6s47V%2BZR6Ubos5QuV5LRP4BFT4l2WnU5Ivb0hiZ%2BYV%2F4ykQNgaMnJ5xgrXGCOVro%2BJs0TmpQAVgzrVXknG7bOj5S02YKFE0MUAc6PxYJqagbNEb2a9NhC9GHLt3AlAHXYZ&X-Amz-Signature=616220121adcc0ac2f935616644a4b313f1af69198a89d90f98958a9f22cfc86&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
