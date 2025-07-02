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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE746D2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdCY0RMUzaONWPBsBECXNmJwx57rdPwKMCTnTBwiREAIhAPzzlVc%2FGA98b82JV0coV0ZsexOnuv2ZgmYoW7mFRzV6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIRijbwsfC9Dd1wbYq3AOrXW0OlHO24gGcL4yGwBWdsvi%2F%2BzjwG3TSjroJ5qFgLMoGPWU9JlUFeUijL8DrX%2BAlwV5HBHtKxXrGLXRwzYtf4AXtB75HBQJamWZWzpL1hi%2BKDvIawDh4U4QyOxVpQ5uJ%2Fjno85y3kFP2Shfpf0cLJbWbbD1hZqBeeLGD7k1G36%2BOeKCaHVcd%2FY7CFSGd7fHy%2BxUOPonuO%2BafDAYkdQCV8%2Bi7K5TN9dlLBQPrYnVFUDonV%2FvDVVdKKt9RUbcccd80FDxys5ElYOUf9dbZI8%2FOXNN%2FhzpPyjwXAeUl8u%2Bz3VaAZM3vVBlM3Zzt86x7EamuQgDHmzoV8UEjgyQ8xSeBnheR4QOc3tBcjPU7i%2FMS5llouAPkpTx5lTi9I%2B3WnbHshyuQCOtjU8ZjCm8zh0TVJ%2FqkYcmFjr%2B1Eu24zNCv29y%2BGA4rLnqVJq5v0HP1QW8ITUhG2ZkvEAb8wGJiNHfLzRAz3iLmKuQmcLngH6FwczF1zgpIzq852j8lxN71Dqq0284ApfNuVn%2BebU%2FkwU6LCabMiQA21Hlx0QYhjsZyXZ1x8EMzq1MMCg8PFFGoa2dsfMxX8Ur%2FE3SbUlhbzmG%2BHLaI0nEXkhO4h1%2BiJY6aVrvpTSNTgIQaUsbfWDDjwZXDBjqkAYZwbDzNzPkf6ulJFxlAEqBy7%2BnIkWTy6YGtaZmr7%2Bs84%2F%2FFAKMegDX7Ag6XBk58%2BREHrcsjenIOroKPDkyw5%2BXVN61pfnddX%2FsuGk4Pb1nzAb6pwLpo83zgUM2dlF%2BpwndUHXIv5DZhjnW3LmLxoBdJhXnK0llGYHUUS0LPxCJU2FyDvXY8o8QciuV%2FZ6aTRK7vSvOoe9og%2BESM%2BALol7yXF18%2B&X-Amz-Signature=e714b189919122311156c2603fc6db9387435fd0ecd41b52453e7aae6da26093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE746D2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdCY0RMUzaONWPBsBECXNmJwx57rdPwKMCTnTBwiREAIhAPzzlVc%2FGA98b82JV0coV0ZsexOnuv2ZgmYoW7mFRzV6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIRijbwsfC9Dd1wbYq3AOrXW0OlHO24gGcL4yGwBWdsvi%2F%2BzjwG3TSjroJ5qFgLMoGPWU9JlUFeUijL8DrX%2BAlwV5HBHtKxXrGLXRwzYtf4AXtB75HBQJamWZWzpL1hi%2BKDvIawDh4U4QyOxVpQ5uJ%2Fjno85y3kFP2Shfpf0cLJbWbbD1hZqBeeLGD7k1G36%2BOeKCaHVcd%2FY7CFSGd7fHy%2BxUOPonuO%2BafDAYkdQCV8%2Bi7K5TN9dlLBQPrYnVFUDonV%2FvDVVdKKt9RUbcccd80FDxys5ElYOUf9dbZI8%2FOXNN%2FhzpPyjwXAeUl8u%2Bz3VaAZM3vVBlM3Zzt86x7EamuQgDHmzoV8UEjgyQ8xSeBnheR4QOc3tBcjPU7i%2FMS5llouAPkpTx5lTi9I%2B3WnbHshyuQCOtjU8ZjCm8zh0TVJ%2FqkYcmFjr%2B1Eu24zNCv29y%2BGA4rLnqVJq5v0HP1QW8ITUhG2ZkvEAb8wGJiNHfLzRAz3iLmKuQmcLngH6FwczF1zgpIzq852j8lxN71Dqq0284ApfNuVn%2BebU%2FkwU6LCabMiQA21Hlx0QYhjsZyXZ1x8EMzq1MMCg8PFFGoa2dsfMxX8Ur%2FE3SbUlhbzmG%2BHLaI0nEXkhO4h1%2BiJY6aVrvpTSNTgIQaUsbfWDDjwZXDBjqkAYZwbDzNzPkf6ulJFxlAEqBy7%2BnIkWTy6YGtaZmr7%2Bs84%2F%2FFAKMegDX7Ag6XBk58%2BREHrcsjenIOroKPDkyw5%2BXVN61pfnddX%2FsuGk4Pb1nzAb6pwLpo83zgUM2dlF%2BpwndUHXIv5DZhjnW3LmLxoBdJhXnK0llGYHUUS0LPxCJU2FyDvXY8o8QciuV%2FZ6aTRK7vSvOoe9og%2BESM%2BALol7yXF18%2B&X-Amz-Signature=37b30ed16a17a676a3d6ab443747fac9311bc3c7ec01aed1aad6976227fa43cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE746D2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdCY0RMUzaONWPBsBECXNmJwx57rdPwKMCTnTBwiREAIhAPzzlVc%2FGA98b82JV0coV0ZsexOnuv2ZgmYoW7mFRzV6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIRijbwsfC9Dd1wbYq3AOrXW0OlHO24gGcL4yGwBWdsvi%2F%2BzjwG3TSjroJ5qFgLMoGPWU9JlUFeUijL8DrX%2BAlwV5HBHtKxXrGLXRwzYtf4AXtB75HBQJamWZWzpL1hi%2BKDvIawDh4U4QyOxVpQ5uJ%2Fjno85y3kFP2Shfpf0cLJbWbbD1hZqBeeLGD7k1G36%2BOeKCaHVcd%2FY7CFSGd7fHy%2BxUOPonuO%2BafDAYkdQCV8%2Bi7K5TN9dlLBQPrYnVFUDonV%2FvDVVdKKt9RUbcccd80FDxys5ElYOUf9dbZI8%2FOXNN%2FhzpPyjwXAeUl8u%2Bz3VaAZM3vVBlM3Zzt86x7EamuQgDHmzoV8UEjgyQ8xSeBnheR4QOc3tBcjPU7i%2FMS5llouAPkpTx5lTi9I%2B3WnbHshyuQCOtjU8ZjCm8zh0TVJ%2FqkYcmFjr%2B1Eu24zNCv29y%2BGA4rLnqVJq5v0HP1QW8ITUhG2ZkvEAb8wGJiNHfLzRAz3iLmKuQmcLngH6FwczF1zgpIzq852j8lxN71Dqq0284ApfNuVn%2BebU%2FkwU6LCabMiQA21Hlx0QYhjsZyXZ1x8EMzq1MMCg8PFFGoa2dsfMxX8Ur%2FE3SbUlhbzmG%2BHLaI0nEXkhO4h1%2BiJY6aVrvpTSNTgIQaUsbfWDDjwZXDBjqkAYZwbDzNzPkf6ulJFxlAEqBy7%2BnIkWTy6YGtaZmr7%2Bs84%2F%2FFAKMegDX7Ag6XBk58%2BREHrcsjenIOroKPDkyw5%2BXVN61pfnddX%2FsuGk4Pb1nzAb6pwLpo83zgUM2dlF%2BpwndUHXIv5DZhjnW3LmLxoBdJhXnK0llGYHUUS0LPxCJU2FyDvXY8o8QciuV%2FZ6aTRK7vSvOoe9og%2BESM%2BALol7yXF18%2B&X-Amz-Signature=d0ac22ee8f9a92ac93f87046de9588681241340100000cb6df12622de0a21c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE746D2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdCY0RMUzaONWPBsBECXNmJwx57rdPwKMCTnTBwiREAIhAPzzlVc%2FGA98b82JV0coV0ZsexOnuv2ZgmYoW7mFRzV6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIRijbwsfC9Dd1wbYq3AOrXW0OlHO24gGcL4yGwBWdsvi%2F%2BzjwG3TSjroJ5qFgLMoGPWU9JlUFeUijL8DrX%2BAlwV5HBHtKxXrGLXRwzYtf4AXtB75HBQJamWZWzpL1hi%2BKDvIawDh4U4QyOxVpQ5uJ%2Fjno85y3kFP2Shfpf0cLJbWbbD1hZqBeeLGD7k1G36%2BOeKCaHVcd%2FY7CFSGd7fHy%2BxUOPonuO%2BafDAYkdQCV8%2Bi7K5TN9dlLBQPrYnVFUDonV%2FvDVVdKKt9RUbcccd80FDxys5ElYOUf9dbZI8%2FOXNN%2FhzpPyjwXAeUl8u%2Bz3VaAZM3vVBlM3Zzt86x7EamuQgDHmzoV8UEjgyQ8xSeBnheR4QOc3tBcjPU7i%2FMS5llouAPkpTx5lTi9I%2B3WnbHshyuQCOtjU8ZjCm8zh0TVJ%2FqkYcmFjr%2B1Eu24zNCv29y%2BGA4rLnqVJq5v0HP1QW8ITUhG2ZkvEAb8wGJiNHfLzRAz3iLmKuQmcLngH6FwczF1zgpIzq852j8lxN71Dqq0284ApfNuVn%2BebU%2FkwU6LCabMiQA21Hlx0QYhjsZyXZ1x8EMzq1MMCg8PFFGoa2dsfMxX8Ur%2FE3SbUlhbzmG%2BHLaI0nEXkhO4h1%2BiJY6aVrvpTSNTgIQaUsbfWDDjwZXDBjqkAYZwbDzNzPkf6ulJFxlAEqBy7%2BnIkWTy6YGtaZmr7%2Bs84%2F%2FFAKMegDX7Ag6XBk58%2BREHrcsjenIOroKPDkyw5%2BXVN61pfnddX%2FsuGk4Pb1nzAb6pwLpo83zgUM2dlF%2BpwndUHXIv5DZhjnW3LmLxoBdJhXnK0llGYHUUS0LPxCJU2FyDvXY8o8QciuV%2FZ6aTRK7vSvOoe9og%2BESM%2BALol7yXF18%2B&X-Amz-Signature=97b8af1411de6204ec147041ca8fa101b5e3c38528562f854bf46151901ac9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE746D2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdCY0RMUzaONWPBsBECXNmJwx57rdPwKMCTnTBwiREAIhAPzzlVc%2FGA98b82JV0coV0ZsexOnuv2ZgmYoW7mFRzV6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIRijbwsfC9Dd1wbYq3AOrXW0OlHO24gGcL4yGwBWdsvi%2F%2BzjwG3TSjroJ5qFgLMoGPWU9JlUFeUijL8DrX%2BAlwV5HBHtKxXrGLXRwzYtf4AXtB75HBQJamWZWzpL1hi%2BKDvIawDh4U4QyOxVpQ5uJ%2Fjno85y3kFP2Shfpf0cLJbWbbD1hZqBeeLGD7k1G36%2BOeKCaHVcd%2FY7CFSGd7fHy%2BxUOPonuO%2BafDAYkdQCV8%2Bi7K5TN9dlLBQPrYnVFUDonV%2FvDVVdKKt9RUbcccd80FDxys5ElYOUf9dbZI8%2FOXNN%2FhzpPyjwXAeUl8u%2Bz3VaAZM3vVBlM3Zzt86x7EamuQgDHmzoV8UEjgyQ8xSeBnheR4QOc3tBcjPU7i%2FMS5llouAPkpTx5lTi9I%2B3WnbHshyuQCOtjU8ZjCm8zh0TVJ%2FqkYcmFjr%2B1Eu24zNCv29y%2BGA4rLnqVJq5v0HP1QW8ITUhG2ZkvEAb8wGJiNHfLzRAz3iLmKuQmcLngH6FwczF1zgpIzq852j8lxN71Dqq0284ApfNuVn%2BebU%2FkwU6LCabMiQA21Hlx0QYhjsZyXZ1x8EMzq1MMCg8PFFGoa2dsfMxX8Ur%2FE3SbUlhbzmG%2BHLaI0nEXkhO4h1%2BiJY6aVrvpTSNTgIQaUsbfWDDjwZXDBjqkAYZwbDzNzPkf6ulJFxlAEqBy7%2BnIkWTy6YGtaZmr7%2Bs84%2F%2FFAKMegDX7Ag6XBk58%2BREHrcsjenIOroKPDkyw5%2BXVN61pfnddX%2FsuGk4Pb1nzAb6pwLpo83zgUM2dlF%2BpwndUHXIv5DZhjnW3LmLxoBdJhXnK0llGYHUUS0LPxCJU2FyDvXY8o8QciuV%2FZ6aTRK7vSvOoe9og%2BESM%2BALol7yXF18%2B&X-Amz-Signature=fb57cf62b8b04abf0490cb9060a3be6cd8f9641cb2ecb77599e728787c9a002f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
