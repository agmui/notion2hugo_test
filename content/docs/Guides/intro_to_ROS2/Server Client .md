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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WLAPA5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsO85KO0P8auegt27nPj1iNZ6D0hnwKCncTa%2Bk7oUEwIhAL23xWWS%2BaW202YYyxGtoTXAWPG2w5h5n2nw9QFuiv%2FxKv8DCGwQABoMNjM3NDIzMTgzODA1IgwfB0eWsoLOono%2FY5oq3AOXP66K6%2FQF%2Fs1UGmNkAaPv4ZbEqrXhqNCA6LQUXvfyRn%2BRxbQuWoOR8jczBh48D9dduO6pIw2TuNXZ71O%2FFOB1s1FbUtQ%2Bo1gb4X5heXfjMeZrGvKhYz55tt65kctD7LgSRVzPMZ5c8tnvYKdw8zx33NJqdGW8UoZDes1HbDzlpVE7tUxPNAney0cSKZG1cfKO9MPjaf8xjNMZbocX99kU8IIY61V9PoTq4i%2FP4QBAMPDa1bkhA2eqYaZsJC8ThxQw%2Fb1q9LlSm%2F8iNKTRrLGlGE5R6FCjhozSpRjIPGiADZ044Zel%2Btoot0c1KMP3YfOayvV1jRLt%2Fd0X0AGNPSIorsybqRrg0yqHSlyQI4Fk%2FYE0Wau4Y0BwBnSJ8szKt2om9s%2FFj2Y4sxvZwCdgSI%2BAmqdULl%2FrxX2iCV4b4cEE%2FwT5kV7X2B%2BCL3V0u5pH0mePH%2BPpWezqMUe93Z62WULKn6npGyIOc6lS%2FTN4tDs5HrtfVUnui1n3SHwo7aeGZrmto%2FBzFiC%2BfClSTtvF90cslSP3OfL79zFECl5eOqhEmHeyyEdzhxiKqDlT3CsINg5hDX3lhcjlahYCaMWrOr47EvkSnyYZl4rsU9eCQsVFx%2FZvOf1pfewiL7AjKDCMn9K%2FBjqkAewpdRBaX%2Bw2wnb92Qw2SwPpFaK6J5KRVRO487pkXoiiWhEdAngdpn4yQgSaKQ9KUKnSckXcn3%2B%2BSSmkHrUifcZDxzNKYlJnciegsMceK8iCqulTjClqU1JpRms9cu6Nu3clSza85DiKnhhEVT91DIH0Ik0%2B4sz50avyFnR7pEX%2FNQtD%2FZsBKHGpHDj6AZw3NG%2FQj1nRzGDX4nKBvuWM2tf6tYTm&X-Amz-Signature=15eee8cf9b5ca62bf8d98e62bb7c75491bbc49a0fb93fa910ba5986e433dc4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WLAPA5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsO85KO0P8auegt27nPj1iNZ6D0hnwKCncTa%2Bk7oUEwIhAL23xWWS%2BaW202YYyxGtoTXAWPG2w5h5n2nw9QFuiv%2FxKv8DCGwQABoMNjM3NDIzMTgzODA1IgwfB0eWsoLOono%2FY5oq3AOXP66K6%2FQF%2Fs1UGmNkAaPv4ZbEqrXhqNCA6LQUXvfyRn%2BRxbQuWoOR8jczBh48D9dduO6pIw2TuNXZ71O%2FFOB1s1FbUtQ%2Bo1gb4X5heXfjMeZrGvKhYz55tt65kctD7LgSRVzPMZ5c8tnvYKdw8zx33NJqdGW8UoZDes1HbDzlpVE7tUxPNAney0cSKZG1cfKO9MPjaf8xjNMZbocX99kU8IIY61V9PoTq4i%2FP4QBAMPDa1bkhA2eqYaZsJC8ThxQw%2Fb1q9LlSm%2F8iNKTRrLGlGE5R6FCjhozSpRjIPGiADZ044Zel%2Btoot0c1KMP3YfOayvV1jRLt%2Fd0X0AGNPSIorsybqRrg0yqHSlyQI4Fk%2FYE0Wau4Y0BwBnSJ8szKt2om9s%2FFj2Y4sxvZwCdgSI%2BAmqdULl%2FrxX2iCV4b4cEE%2FwT5kV7X2B%2BCL3V0u5pH0mePH%2BPpWezqMUe93Z62WULKn6npGyIOc6lS%2FTN4tDs5HrtfVUnui1n3SHwo7aeGZrmto%2FBzFiC%2BfClSTtvF90cslSP3OfL79zFECl5eOqhEmHeyyEdzhxiKqDlT3CsINg5hDX3lhcjlahYCaMWrOr47EvkSnyYZl4rsU9eCQsVFx%2FZvOf1pfewiL7AjKDCMn9K%2FBjqkAewpdRBaX%2Bw2wnb92Qw2SwPpFaK6J5KRVRO487pkXoiiWhEdAngdpn4yQgSaKQ9KUKnSckXcn3%2B%2BSSmkHrUifcZDxzNKYlJnciegsMceK8iCqulTjClqU1JpRms9cu6Nu3clSza85DiKnhhEVT91DIH0Ik0%2B4sz50avyFnR7pEX%2FNQtD%2FZsBKHGpHDj6AZw3NG%2FQj1nRzGDX4nKBvuWM2tf6tYTm&X-Amz-Signature=51dd3c4be5cd03fe88f693f794859dd5448566e46d565f7d75441dce9606842f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WLAPA5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsO85KO0P8auegt27nPj1iNZ6D0hnwKCncTa%2Bk7oUEwIhAL23xWWS%2BaW202YYyxGtoTXAWPG2w5h5n2nw9QFuiv%2FxKv8DCGwQABoMNjM3NDIzMTgzODA1IgwfB0eWsoLOono%2FY5oq3AOXP66K6%2FQF%2Fs1UGmNkAaPv4ZbEqrXhqNCA6LQUXvfyRn%2BRxbQuWoOR8jczBh48D9dduO6pIw2TuNXZ71O%2FFOB1s1FbUtQ%2Bo1gb4X5heXfjMeZrGvKhYz55tt65kctD7LgSRVzPMZ5c8tnvYKdw8zx33NJqdGW8UoZDes1HbDzlpVE7tUxPNAney0cSKZG1cfKO9MPjaf8xjNMZbocX99kU8IIY61V9PoTq4i%2FP4QBAMPDa1bkhA2eqYaZsJC8ThxQw%2Fb1q9LlSm%2F8iNKTRrLGlGE5R6FCjhozSpRjIPGiADZ044Zel%2Btoot0c1KMP3YfOayvV1jRLt%2Fd0X0AGNPSIorsybqRrg0yqHSlyQI4Fk%2FYE0Wau4Y0BwBnSJ8szKt2om9s%2FFj2Y4sxvZwCdgSI%2BAmqdULl%2FrxX2iCV4b4cEE%2FwT5kV7X2B%2BCL3V0u5pH0mePH%2BPpWezqMUe93Z62WULKn6npGyIOc6lS%2FTN4tDs5HrtfVUnui1n3SHwo7aeGZrmto%2FBzFiC%2BfClSTtvF90cslSP3OfL79zFECl5eOqhEmHeyyEdzhxiKqDlT3CsINg5hDX3lhcjlahYCaMWrOr47EvkSnyYZl4rsU9eCQsVFx%2FZvOf1pfewiL7AjKDCMn9K%2FBjqkAewpdRBaX%2Bw2wnb92Qw2SwPpFaK6J5KRVRO487pkXoiiWhEdAngdpn4yQgSaKQ9KUKnSckXcn3%2B%2BSSmkHrUifcZDxzNKYlJnciegsMceK8iCqulTjClqU1JpRms9cu6Nu3clSza85DiKnhhEVT91DIH0Ik0%2B4sz50avyFnR7pEX%2FNQtD%2FZsBKHGpHDj6AZw3NG%2FQj1nRzGDX4nKBvuWM2tf6tYTm&X-Amz-Signature=8587cad77b991ce3cfde440f2cd588f907e3e35ab1b12f2046d6bd44e2d8cce2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WLAPA5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsO85KO0P8auegt27nPj1iNZ6D0hnwKCncTa%2Bk7oUEwIhAL23xWWS%2BaW202YYyxGtoTXAWPG2w5h5n2nw9QFuiv%2FxKv8DCGwQABoMNjM3NDIzMTgzODA1IgwfB0eWsoLOono%2FY5oq3AOXP66K6%2FQF%2Fs1UGmNkAaPv4ZbEqrXhqNCA6LQUXvfyRn%2BRxbQuWoOR8jczBh48D9dduO6pIw2TuNXZ71O%2FFOB1s1FbUtQ%2Bo1gb4X5heXfjMeZrGvKhYz55tt65kctD7LgSRVzPMZ5c8tnvYKdw8zx33NJqdGW8UoZDes1HbDzlpVE7tUxPNAney0cSKZG1cfKO9MPjaf8xjNMZbocX99kU8IIY61V9PoTq4i%2FP4QBAMPDa1bkhA2eqYaZsJC8ThxQw%2Fb1q9LlSm%2F8iNKTRrLGlGE5R6FCjhozSpRjIPGiADZ044Zel%2Btoot0c1KMP3YfOayvV1jRLt%2Fd0X0AGNPSIorsybqRrg0yqHSlyQI4Fk%2FYE0Wau4Y0BwBnSJ8szKt2om9s%2FFj2Y4sxvZwCdgSI%2BAmqdULl%2FrxX2iCV4b4cEE%2FwT5kV7X2B%2BCL3V0u5pH0mePH%2BPpWezqMUe93Z62WULKn6npGyIOc6lS%2FTN4tDs5HrtfVUnui1n3SHwo7aeGZrmto%2FBzFiC%2BfClSTtvF90cslSP3OfL79zFECl5eOqhEmHeyyEdzhxiKqDlT3CsINg5hDX3lhcjlahYCaMWrOr47EvkSnyYZl4rsU9eCQsVFx%2FZvOf1pfewiL7AjKDCMn9K%2FBjqkAewpdRBaX%2Bw2wnb92Qw2SwPpFaK6J5KRVRO487pkXoiiWhEdAngdpn4yQgSaKQ9KUKnSckXcn3%2B%2BSSmkHrUifcZDxzNKYlJnciegsMceK8iCqulTjClqU1JpRms9cu6Nu3clSza85DiKnhhEVT91DIH0Ik0%2B4sz50avyFnR7pEX%2FNQtD%2FZsBKHGpHDj6AZw3NG%2FQj1nRzGDX4nKBvuWM2tf6tYTm&X-Amz-Signature=55736eba3d01981e85d6a6c6a08d9482cb681d486977d59854fe9e3d85e819d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WLAPA5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsO85KO0P8auegt27nPj1iNZ6D0hnwKCncTa%2Bk7oUEwIhAL23xWWS%2BaW202YYyxGtoTXAWPG2w5h5n2nw9QFuiv%2FxKv8DCGwQABoMNjM3NDIzMTgzODA1IgwfB0eWsoLOono%2FY5oq3AOXP66K6%2FQF%2Fs1UGmNkAaPv4ZbEqrXhqNCA6LQUXvfyRn%2BRxbQuWoOR8jczBh48D9dduO6pIw2TuNXZ71O%2FFOB1s1FbUtQ%2Bo1gb4X5heXfjMeZrGvKhYz55tt65kctD7LgSRVzPMZ5c8tnvYKdw8zx33NJqdGW8UoZDes1HbDzlpVE7tUxPNAney0cSKZG1cfKO9MPjaf8xjNMZbocX99kU8IIY61V9PoTq4i%2FP4QBAMPDa1bkhA2eqYaZsJC8ThxQw%2Fb1q9LlSm%2F8iNKTRrLGlGE5R6FCjhozSpRjIPGiADZ044Zel%2Btoot0c1KMP3YfOayvV1jRLt%2Fd0X0AGNPSIorsybqRrg0yqHSlyQI4Fk%2FYE0Wau4Y0BwBnSJ8szKt2om9s%2FFj2Y4sxvZwCdgSI%2BAmqdULl%2FrxX2iCV4b4cEE%2FwT5kV7X2B%2BCL3V0u5pH0mePH%2BPpWezqMUe93Z62WULKn6npGyIOc6lS%2FTN4tDs5HrtfVUnui1n3SHwo7aeGZrmto%2FBzFiC%2BfClSTtvF90cslSP3OfL79zFECl5eOqhEmHeyyEdzhxiKqDlT3CsINg5hDX3lhcjlahYCaMWrOr47EvkSnyYZl4rsU9eCQsVFx%2FZvOf1pfewiL7AjKDCMn9K%2FBjqkAewpdRBaX%2Bw2wnb92Qw2SwPpFaK6J5KRVRO487pkXoiiWhEdAngdpn4yQgSaKQ9KUKnSckXcn3%2B%2BSSmkHrUifcZDxzNKYlJnciegsMceK8iCqulTjClqU1JpRms9cu6Nu3clSza85DiKnhhEVT91DIH0Ik0%2B4sz50avyFnR7pEX%2FNQtD%2FZsBKHGpHDj6AZw3NG%2FQj1nRzGDX4nKBvuWM2tf6tYTm&X-Amz-Signature=fd2d97d5e39a46a2727907c796b6cd956540b51f3ad55f8b68a52fb0f7da4096&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
