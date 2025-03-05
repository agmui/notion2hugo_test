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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NTRAB4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kl5P%2B9uzya%2BLI5flgVtZ%2FM2o6xM%2Bx2Ium1MRp1SSvAIhAJJEE0oLSaMfPJNi%2Fu73StnpLgIqdB1GTsZq1sqm%2F3iSKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQrhjnkjszg33%2BuI4q3AMjgsH7zFdeQ9SvJHu8LLwfXXq%2B31JQ2YhfZkWxACuHTneJzCLsIJRf3csL3BmtuvowQNWr%2ByNXegYLhRtVbWwo6QDFVwnJd%2FHrZq38qNvM2r6YAkSIQ%2BIeu8EqouS0cljGpcIhqIGQl2rwViqqnZqpj1%2Fq5GXlWIruPGFTvPehFaorqneGOgSxXAlHU%2FiB8aJkaCuyrObNZbrNSvqZ%2Fxebc%2F49SJx6q66qubGQSHP8TzPl%2FbW8pD2bWQPq6y7xQzotPPhuyA%2BdYKyx2%2FCt2hmptlzC5UvlmPPp3uPjqjzAVEM%2F61bnElPiIqPCL6hyD%2F6wMTYir3QelfLL5qmLexUXzfIMaoosw%2BxatLOdT1tY16LlL1StU7zEKRvgdDhg1RaL1rAE96A4O59wD17itbVBPeiVTu4OJMYHVwENFwGF5nm5XVT7R3qeOhkffvh9%2FeG56ABq6owhSgFxao%2FVKZ3hdt5V2%2FAzSe%2FxYrpCUcxC4mRBqU4VB24kbo5E98sR9JLfkndcgJ4KijWhzAQXdrr8apyM5IlQbvH1i%2F7%2Fxi5KjMYzCFdes%2Fg568MW82wUtrNoMn4WIzwn%2FY5MFW2osciNMxgY7AVKhTraMniP50wawUafKFr%2Fe0xOOOftETDkw56%2BBjqkAXIAAPGtTqlmgWNBnvrJMa3wIuoyJTjYG2g1koME3klev8RAsYRTz%2Bqjn86%2FiXmcDTlTW%2FjMZHknNkjTVGXGXGIPZdQWk3UWp6awxR%2F%2FGTrHMAyNZ3FSN4kl%2FwFqn8msfiIPn4bdy9%2FM8NlUS9yHfJzp%2FJhp7%2BQChqcn%2B%2BilQRvU8K7CAufQ9TsopYS8eE6Z7dQgwpGhzaRY1dKeZSVR6g8aVurT&X-Amz-Signature=8589f4a7e4ea259b1352ef30278b8128d038de360e77f3589b4dea19ca1bafaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NTRAB4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kl5P%2B9uzya%2BLI5flgVtZ%2FM2o6xM%2Bx2Ium1MRp1SSvAIhAJJEE0oLSaMfPJNi%2Fu73StnpLgIqdB1GTsZq1sqm%2F3iSKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQrhjnkjszg33%2BuI4q3AMjgsH7zFdeQ9SvJHu8LLwfXXq%2B31JQ2YhfZkWxACuHTneJzCLsIJRf3csL3BmtuvowQNWr%2ByNXegYLhRtVbWwo6QDFVwnJd%2FHrZq38qNvM2r6YAkSIQ%2BIeu8EqouS0cljGpcIhqIGQl2rwViqqnZqpj1%2Fq5GXlWIruPGFTvPehFaorqneGOgSxXAlHU%2FiB8aJkaCuyrObNZbrNSvqZ%2Fxebc%2F49SJx6q66qubGQSHP8TzPl%2FbW8pD2bWQPq6y7xQzotPPhuyA%2BdYKyx2%2FCt2hmptlzC5UvlmPPp3uPjqjzAVEM%2F61bnElPiIqPCL6hyD%2F6wMTYir3QelfLL5qmLexUXzfIMaoosw%2BxatLOdT1tY16LlL1StU7zEKRvgdDhg1RaL1rAE96A4O59wD17itbVBPeiVTu4OJMYHVwENFwGF5nm5XVT7R3qeOhkffvh9%2FeG56ABq6owhSgFxao%2FVKZ3hdt5V2%2FAzSe%2FxYrpCUcxC4mRBqU4VB24kbo5E98sR9JLfkndcgJ4KijWhzAQXdrr8apyM5IlQbvH1i%2F7%2Fxi5KjMYzCFdes%2Fg568MW82wUtrNoMn4WIzwn%2FY5MFW2osciNMxgY7AVKhTraMniP50wawUafKFr%2Fe0xOOOftETDkw56%2BBjqkAXIAAPGtTqlmgWNBnvrJMa3wIuoyJTjYG2g1koME3klev8RAsYRTz%2Bqjn86%2FiXmcDTlTW%2FjMZHknNkjTVGXGXGIPZdQWk3UWp6awxR%2F%2FGTrHMAyNZ3FSN4kl%2FwFqn8msfiIPn4bdy9%2FM8NlUS9yHfJzp%2FJhp7%2BQChqcn%2B%2BilQRvU8K7CAufQ9TsopYS8eE6Z7dQgwpGhzaRY1dKeZSVR6g8aVurT&X-Amz-Signature=bf02aabfd8d5b285e6de3791761d240d0612c55dd0833373ec4a3adb8593af66&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NTRAB4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kl5P%2B9uzya%2BLI5flgVtZ%2FM2o6xM%2Bx2Ium1MRp1SSvAIhAJJEE0oLSaMfPJNi%2Fu73StnpLgIqdB1GTsZq1sqm%2F3iSKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQrhjnkjszg33%2BuI4q3AMjgsH7zFdeQ9SvJHu8LLwfXXq%2B31JQ2YhfZkWxACuHTneJzCLsIJRf3csL3BmtuvowQNWr%2ByNXegYLhRtVbWwo6QDFVwnJd%2FHrZq38qNvM2r6YAkSIQ%2BIeu8EqouS0cljGpcIhqIGQl2rwViqqnZqpj1%2Fq5GXlWIruPGFTvPehFaorqneGOgSxXAlHU%2FiB8aJkaCuyrObNZbrNSvqZ%2Fxebc%2F49SJx6q66qubGQSHP8TzPl%2FbW8pD2bWQPq6y7xQzotPPhuyA%2BdYKyx2%2FCt2hmptlzC5UvlmPPp3uPjqjzAVEM%2F61bnElPiIqPCL6hyD%2F6wMTYir3QelfLL5qmLexUXzfIMaoosw%2BxatLOdT1tY16LlL1StU7zEKRvgdDhg1RaL1rAE96A4O59wD17itbVBPeiVTu4OJMYHVwENFwGF5nm5XVT7R3qeOhkffvh9%2FeG56ABq6owhSgFxao%2FVKZ3hdt5V2%2FAzSe%2FxYrpCUcxC4mRBqU4VB24kbo5E98sR9JLfkndcgJ4KijWhzAQXdrr8apyM5IlQbvH1i%2F7%2Fxi5KjMYzCFdes%2Fg568MW82wUtrNoMn4WIzwn%2FY5MFW2osciNMxgY7AVKhTraMniP50wawUafKFr%2Fe0xOOOftETDkw56%2BBjqkAXIAAPGtTqlmgWNBnvrJMa3wIuoyJTjYG2g1koME3klev8RAsYRTz%2Bqjn86%2FiXmcDTlTW%2FjMZHknNkjTVGXGXGIPZdQWk3UWp6awxR%2F%2FGTrHMAyNZ3FSN4kl%2FwFqn8msfiIPn4bdy9%2FM8NlUS9yHfJzp%2FJhp7%2BQChqcn%2B%2BilQRvU8K7CAufQ9TsopYS8eE6Z7dQgwpGhzaRY1dKeZSVR6g8aVurT&X-Amz-Signature=0a5c6db2c0963961f7a019b169a59fc67a3e19b2d5903a70f8a9a5ab67e6f922&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NTRAB4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kl5P%2B9uzya%2BLI5flgVtZ%2FM2o6xM%2Bx2Ium1MRp1SSvAIhAJJEE0oLSaMfPJNi%2Fu73StnpLgIqdB1GTsZq1sqm%2F3iSKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQrhjnkjszg33%2BuI4q3AMjgsH7zFdeQ9SvJHu8LLwfXXq%2B31JQ2YhfZkWxACuHTneJzCLsIJRf3csL3BmtuvowQNWr%2ByNXegYLhRtVbWwo6QDFVwnJd%2FHrZq38qNvM2r6YAkSIQ%2BIeu8EqouS0cljGpcIhqIGQl2rwViqqnZqpj1%2Fq5GXlWIruPGFTvPehFaorqneGOgSxXAlHU%2FiB8aJkaCuyrObNZbrNSvqZ%2Fxebc%2F49SJx6q66qubGQSHP8TzPl%2FbW8pD2bWQPq6y7xQzotPPhuyA%2BdYKyx2%2FCt2hmptlzC5UvlmPPp3uPjqjzAVEM%2F61bnElPiIqPCL6hyD%2F6wMTYir3QelfLL5qmLexUXzfIMaoosw%2BxatLOdT1tY16LlL1StU7zEKRvgdDhg1RaL1rAE96A4O59wD17itbVBPeiVTu4OJMYHVwENFwGF5nm5XVT7R3qeOhkffvh9%2FeG56ABq6owhSgFxao%2FVKZ3hdt5V2%2FAzSe%2FxYrpCUcxC4mRBqU4VB24kbo5E98sR9JLfkndcgJ4KijWhzAQXdrr8apyM5IlQbvH1i%2F7%2Fxi5KjMYzCFdes%2Fg568MW82wUtrNoMn4WIzwn%2FY5MFW2osciNMxgY7AVKhTraMniP50wawUafKFr%2Fe0xOOOftETDkw56%2BBjqkAXIAAPGtTqlmgWNBnvrJMa3wIuoyJTjYG2g1koME3klev8RAsYRTz%2Bqjn86%2FiXmcDTlTW%2FjMZHknNkjTVGXGXGIPZdQWk3UWp6awxR%2F%2FGTrHMAyNZ3FSN4kl%2FwFqn8msfiIPn4bdy9%2FM8NlUS9yHfJzp%2FJhp7%2BQChqcn%2B%2BilQRvU8K7CAufQ9TsopYS8eE6Z7dQgwpGhzaRY1dKeZSVR6g8aVurT&X-Amz-Signature=d62997dfba2fe42715a3539688b54805fddcef3817d5686d63324525f17d5c64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NTRAB4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kl5P%2B9uzya%2BLI5flgVtZ%2FM2o6xM%2Bx2Ium1MRp1SSvAIhAJJEE0oLSaMfPJNi%2Fu73StnpLgIqdB1GTsZq1sqm%2F3iSKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQrhjnkjszg33%2BuI4q3AMjgsH7zFdeQ9SvJHu8LLwfXXq%2B31JQ2YhfZkWxACuHTneJzCLsIJRf3csL3BmtuvowQNWr%2ByNXegYLhRtVbWwo6QDFVwnJd%2FHrZq38qNvM2r6YAkSIQ%2BIeu8EqouS0cljGpcIhqIGQl2rwViqqnZqpj1%2Fq5GXlWIruPGFTvPehFaorqneGOgSxXAlHU%2FiB8aJkaCuyrObNZbrNSvqZ%2Fxebc%2F49SJx6q66qubGQSHP8TzPl%2FbW8pD2bWQPq6y7xQzotPPhuyA%2BdYKyx2%2FCt2hmptlzC5UvlmPPp3uPjqjzAVEM%2F61bnElPiIqPCL6hyD%2F6wMTYir3QelfLL5qmLexUXzfIMaoosw%2BxatLOdT1tY16LlL1StU7zEKRvgdDhg1RaL1rAE96A4O59wD17itbVBPeiVTu4OJMYHVwENFwGF5nm5XVT7R3qeOhkffvh9%2FeG56ABq6owhSgFxao%2FVKZ3hdt5V2%2FAzSe%2FxYrpCUcxC4mRBqU4VB24kbo5E98sR9JLfkndcgJ4KijWhzAQXdrr8apyM5IlQbvH1i%2F7%2Fxi5KjMYzCFdes%2Fg568MW82wUtrNoMn4WIzwn%2FY5MFW2osciNMxgY7AVKhTraMniP50wawUafKFr%2Fe0xOOOftETDkw56%2BBjqkAXIAAPGtTqlmgWNBnvrJMa3wIuoyJTjYG2g1koME3klev8RAsYRTz%2Bqjn86%2FiXmcDTlTW%2FjMZHknNkjTVGXGXGIPZdQWk3UWp6awxR%2F%2FGTrHMAyNZ3FSN4kl%2FwFqn8msfiIPn4bdy9%2FM8NlUS9yHfJzp%2FJhp7%2BQChqcn%2B%2BilQRvU8K7CAufQ9TsopYS8eE6Z7dQgwpGhzaRY1dKeZSVR6g8aVurT&X-Amz-Signature=72b38caa000bd644adaf372509c364592d9be4b36fa28909b2c0c2f6ab2da7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
