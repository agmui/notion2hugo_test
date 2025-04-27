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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5LLBCM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqOhASTjCnFYpmdqeFNwC8G8kgloBBgY%2FrG4eRcy7swIhAJYvLPe4lpDJS0GMmZ3eak%2BTAHsYiTzK9ZeHLzRk4Dm7Kv8DCFYQABoMNjM3NDIzMTgzODA1Igwbi8%2Bu6ecSzjlEvsYq3AMUQBSfR0K7rSJJ7bctCdL%2BhBzwRLBpRSUUTvvPT0jsDFsYV4TpaTqABfvzABgWbvyDEZyeJ2PvtU6hqoNB1GuURpMPq57NcpFv23%2B2V6fPGeCuQm2DmJHP5gubnYYtaukV441wGDRW%2FsE18WSWHOPaziD%2BZVjbjnS%2BViFfI67gSJxMuQxSFr7W%2FEmbYIDalA0hTqSfO5RTMTAdbMyulN26aeslpDjoyxGGnGZIuA%2FQ8NDfqh3V0gzVdoF2YuJJp%2B5CuKgKgiDHrhKGdfG1L2IH%2Be%2FJLJaX10NXLhoMFboBbc0DjyWfg0MmceO1cveiV8VzkUxtn6%2FfyUvGHUvdjbiD1LLjcJNSyOybU2mOzXaWIfql8IY%2FFv9oipKP%2BmllMxIk5s9q7aljQO5nfZ644%2B8TZ1R2TjqK%2FTEEu8SE5VOY7UVP1rFs5PFyDKzpYIEdDeHkhq6LPdyI%2F8xwKihfVUoZLMh%2F3a9LQNEs89GW5JggypDMF%2FuOlgK7mRsDNkEKL2dCKtAnhIOZFlLe1YLZWAMPgHa1tNqx9XbHjN29BGCEtbvrjqSM8Us06WYMOoUbj5ALKhipwgo0t9EW4nVKReSq4qpvfVoy%2FlC3eSi7hBI809sMd5Z8jwvRgc6rdzD47LbABjqkAawUkXqE9tshRtD5Ui85v2%2FXMz8rUAf%2BTMLUDoeWwRgOi%2FqJVd4gzw%2BJdMWBORdAzuDMtS5qTLSeqNf2qE2uouJuZ4NbN4v4qsJbx4w91f%2BTO2tZTINzAjdOhbaEj2wjss1uzxLaoGOnzCdL59Ye3ALy5YIkPMlwoZ9NRJl8nw72yFnBAKN2%2B8wNuM5FyZ08UCgffkme5W2k%2Bwy%2FHQ4wAA0itigy&X-Amz-Signature=b2368b9c1867b4cc0a6a5d349f17bc452deb7550ab782289352b0d00ecaf9514&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5LLBCM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqOhASTjCnFYpmdqeFNwC8G8kgloBBgY%2FrG4eRcy7swIhAJYvLPe4lpDJS0GMmZ3eak%2BTAHsYiTzK9ZeHLzRk4Dm7Kv8DCFYQABoMNjM3NDIzMTgzODA1Igwbi8%2Bu6ecSzjlEvsYq3AMUQBSfR0K7rSJJ7bctCdL%2BhBzwRLBpRSUUTvvPT0jsDFsYV4TpaTqABfvzABgWbvyDEZyeJ2PvtU6hqoNB1GuURpMPq57NcpFv23%2B2V6fPGeCuQm2DmJHP5gubnYYtaukV441wGDRW%2FsE18WSWHOPaziD%2BZVjbjnS%2BViFfI67gSJxMuQxSFr7W%2FEmbYIDalA0hTqSfO5RTMTAdbMyulN26aeslpDjoyxGGnGZIuA%2FQ8NDfqh3V0gzVdoF2YuJJp%2B5CuKgKgiDHrhKGdfG1L2IH%2Be%2FJLJaX10NXLhoMFboBbc0DjyWfg0MmceO1cveiV8VzkUxtn6%2FfyUvGHUvdjbiD1LLjcJNSyOybU2mOzXaWIfql8IY%2FFv9oipKP%2BmllMxIk5s9q7aljQO5nfZ644%2B8TZ1R2TjqK%2FTEEu8SE5VOY7UVP1rFs5PFyDKzpYIEdDeHkhq6LPdyI%2F8xwKihfVUoZLMh%2F3a9LQNEs89GW5JggypDMF%2FuOlgK7mRsDNkEKL2dCKtAnhIOZFlLe1YLZWAMPgHa1tNqx9XbHjN29BGCEtbvrjqSM8Us06WYMOoUbj5ALKhipwgo0t9EW4nVKReSq4qpvfVoy%2FlC3eSi7hBI809sMd5Z8jwvRgc6rdzD47LbABjqkAawUkXqE9tshRtD5Ui85v2%2FXMz8rUAf%2BTMLUDoeWwRgOi%2FqJVd4gzw%2BJdMWBORdAzuDMtS5qTLSeqNf2qE2uouJuZ4NbN4v4qsJbx4w91f%2BTO2tZTINzAjdOhbaEj2wjss1uzxLaoGOnzCdL59Ye3ALy5YIkPMlwoZ9NRJl8nw72yFnBAKN2%2B8wNuM5FyZ08UCgffkme5W2k%2Bwy%2FHQ4wAA0itigy&X-Amz-Signature=8cdfc0dd850723e6b3da4d9965e6e7e3cdd62d69e9a56c8a7256c5cedc4a9e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5LLBCM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqOhASTjCnFYpmdqeFNwC8G8kgloBBgY%2FrG4eRcy7swIhAJYvLPe4lpDJS0GMmZ3eak%2BTAHsYiTzK9ZeHLzRk4Dm7Kv8DCFYQABoMNjM3NDIzMTgzODA1Igwbi8%2Bu6ecSzjlEvsYq3AMUQBSfR0K7rSJJ7bctCdL%2BhBzwRLBpRSUUTvvPT0jsDFsYV4TpaTqABfvzABgWbvyDEZyeJ2PvtU6hqoNB1GuURpMPq57NcpFv23%2B2V6fPGeCuQm2DmJHP5gubnYYtaukV441wGDRW%2FsE18WSWHOPaziD%2BZVjbjnS%2BViFfI67gSJxMuQxSFr7W%2FEmbYIDalA0hTqSfO5RTMTAdbMyulN26aeslpDjoyxGGnGZIuA%2FQ8NDfqh3V0gzVdoF2YuJJp%2B5CuKgKgiDHrhKGdfG1L2IH%2Be%2FJLJaX10NXLhoMFboBbc0DjyWfg0MmceO1cveiV8VzkUxtn6%2FfyUvGHUvdjbiD1LLjcJNSyOybU2mOzXaWIfql8IY%2FFv9oipKP%2BmllMxIk5s9q7aljQO5nfZ644%2B8TZ1R2TjqK%2FTEEu8SE5VOY7UVP1rFs5PFyDKzpYIEdDeHkhq6LPdyI%2F8xwKihfVUoZLMh%2F3a9LQNEs89GW5JggypDMF%2FuOlgK7mRsDNkEKL2dCKtAnhIOZFlLe1YLZWAMPgHa1tNqx9XbHjN29BGCEtbvrjqSM8Us06WYMOoUbj5ALKhipwgo0t9EW4nVKReSq4qpvfVoy%2FlC3eSi7hBI809sMd5Z8jwvRgc6rdzD47LbABjqkAawUkXqE9tshRtD5Ui85v2%2FXMz8rUAf%2BTMLUDoeWwRgOi%2FqJVd4gzw%2BJdMWBORdAzuDMtS5qTLSeqNf2qE2uouJuZ4NbN4v4qsJbx4w91f%2BTO2tZTINzAjdOhbaEj2wjss1uzxLaoGOnzCdL59Ye3ALy5YIkPMlwoZ9NRJl8nw72yFnBAKN2%2B8wNuM5FyZ08UCgffkme5W2k%2Bwy%2FHQ4wAA0itigy&X-Amz-Signature=7c5a874b56414859afa79555a57b5960f6efaee645c0ec66f0c10e3d5e4b3eed&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5LLBCM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqOhASTjCnFYpmdqeFNwC8G8kgloBBgY%2FrG4eRcy7swIhAJYvLPe4lpDJS0GMmZ3eak%2BTAHsYiTzK9ZeHLzRk4Dm7Kv8DCFYQABoMNjM3NDIzMTgzODA1Igwbi8%2Bu6ecSzjlEvsYq3AMUQBSfR0K7rSJJ7bctCdL%2BhBzwRLBpRSUUTvvPT0jsDFsYV4TpaTqABfvzABgWbvyDEZyeJ2PvtU6hqoNB1GuURpMPq57NcpFv23%2B2V6fPGeCuQm2DmJHP5gubnYYtaukV441wGDRW%2FsE18WSWHOPaziD%2BZVjbjnS%2BViFfI67gSJxMuQxSFr7W%2FEmbYIDalA0hTqSfO5RTMTAdbMyulN26aeslpDjoyxGGnGZIuA%2FQ8NDfqh3V0gzVdoF2YuJJp%2B5CuKgKgiDHrhKGdfG1L2IH%2Be%2FJLJaX10NXLhoMFboBbc0DjyWfg0MmceO1cveiV8VzkUxtn6%2FfyUvGHUvdjbiD1LLjcJNSyOybU2mOzXaWIfql8IY%2FFv9oipKP%2BmllMxIk5s9q7aljQO5nfZ644%2B8TZ1R2TjqK%2FTEEu8SE5VOY7UVP1rFs5PFyDKzpYIEdDeHkhq6LPdyI%2F8xwKihfVUoZLMh%2F3a9LQNEs89GW5JggypDMF%2FuOlgK7mRsDNkEKL2dCKtAnhIOZFlLe1YLZWAMPgHa1tNqx9XbHjN29BGCEtbvrjqSM8Us06WYMOoUbj5ALKhipwgo0t9EW4nVKReSq4qpvfVoy%2FlC3eSi7hBI809sMd5Z8jwvRgc6rdzD47LbABjqkAawUkXqE9tshRtD5Ui85v2%2FXMz8rUAf%2BTMLUDoeWwRgOi%2FqJVd4gzw%2BJdMWBORdAzuDMtS5qTLSeqNf2qE2uouJuZ4NbN4v4qsJbx4w91f%2BTO2tZTINzAjdOhbaEj2wjss1uzxLaoGOnzCdL59Ye3ALy5YIkPMlwoZ9NRJl8nw72yFnBAKN2%2B8wNuM5FyZ08UCgffkme5W2k%2Bwy%2FHQ4wAA0itigy&X-Amz-Signature=459be2b5b0dbf61890a27d1388976eb45367f2c8a8eddccbdf65246e40c14480&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5LLBCM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqOhASTjCnFYpmdqeFNwC8G8kgloBBgY%2FrG4eRcy7swIhAJYvLPe4lpDJS0GMmZ3eak%2BTAHsYiTzK9ZeHLzRk4Dm7Kv8DCFYQABoMNjM3NDIzMTgzODA1Igwbi8%2Bu6ecSzjlEvsYq3AMUQBSfR0K7rSJJ7bctCdL%2BhBzwRLBpRSUUTvvPT0jsDFsYV4TpaTqABfvzABgWbvyDEZyeJ2PvtU6hqoNB1GuURpMPq57NcpFv23%2B2V6fPGeCuQm2DmJHP5gubnYYtaukV441wGDRW%2FsE18WSWHOPaziD%2BZVjbjnS%2BViFfI67gSJxMuQxSFr7W%2FEmbYIDalA0hTqSfO5RTMTAdbMyulN26aeslpDjoyxGGnGZIuA%2FQ8NDfqh3V0gzVdoF2YuJJp%2B5CuKgKgiDHrhKGdfG1L2IH%2Be%2FJLJaX10NXLhoMFboBbc0DjyWfg0MmceO1cveiV8VzkUxtn6%2FfyUvGHUvdjbiD1LLjcJNSyOybU2mOzXaWIfql8IY%2FFv9oipKP%2BmllMxIk5s9q7aljQO5nfZ644%2B8TZ1R2TjqK%2FTEEu8SE5VOY7UVP1rFs5PFyDKzpYIEdDeHkhq6LPdyI%2F8xwKihfVUoZLMh%2F3a9LQNEs89GW5JggypDMF%2FuOlgK7mRsDNkEKL2dCKtAnhIOZFlLe1YLZWAMPgHa1tNqx9XbHjN29BGCEtbvrjqSM8Us06WYMOoUbj5ALKhipwgo0t9EW4nVKReSq4qpvfVoy%2FlC3eSi7hBI809sMd5Z8jwvRgc6rdzD47LbABjqkAawUkXqE9tshRtD5Ui85v2%2FXMz8rUAf%2BTMLUDoeWwRgOi%2FqJVd4gzw%2BJdMWBORdAzuDMtS5qTLSeqNf2qE2uouJuZ4NbN4v4qsJbx4w91f%2BTO2tZTINzAjdOhbaEj2wjss1uzxLaoGOnzCdL59Ye3ALy5YIkPMlwoZ9NRJl8nw72yFnBAKN2%2B8wNuM5FyZ08UCgffkme5W2k%2Bwy%2FHQ4wAA0itigy&X-Amz-Signature=0a4dbd6add981f7e41138eabde4a21aa0292c0deeb07323a56a3aaddd5aa8868&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
