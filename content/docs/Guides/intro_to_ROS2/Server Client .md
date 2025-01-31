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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVBAOQF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClO1QMCDuKWUwJ6114ylyqRiRHX2aLyiFIKz97Tt405AIgIHH2hlynV2bavs7MMjIAFtyYtoLm238UjlxuH%2FPaulYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg4G1dSDpevsI6ESCrcA2breimx9vAzKcofsNioCGsxKlOtyl%2FljUZkCI18nsgZMaEi5tOjqsZ8hIBE9gz%2FzfUQeNuCAB%2F4nVejNejo5BOf%2FrWvlhfAUvi0AvEXu8QdqpaW%2B0DnktzRmpDJjfx%2BcK%2B85lfxtIJWvK%2Bcc33qM89dbbDGbSBszJHIggfdkEpOde0hseqouHhT54vTISNuS6D6QTMxoG3I79teNy%2Firbd8SBNFOKc2X1%2Bii%2BGN6VNTDFZ1%2FKXm5mBTD%2BTYerdIKnk2bTwiFRdYqLJr2UQTUErKKeabA4PsExSSmaw0MbLF%2FL8qEUxIq%2BOe9hXzyL1sS6f3l4BFDRQkY0kfPyma7wJgbRrlsw75fUNDfgnb%2F5Z3TmNegwvK%2BS6dxCvC5e7FDCbtUFsoMao1sYIos5oVbI3E8GG3YCF1ja1AoGE8pVXxGZgGABEVYxbDz2%2BPQhkA87Rs5dViBvkgvk%2B2BNmwMw9NwDdn33UHaZC5xl%2Fb%2FZO9BJI3WJGpitgYc%2FpHiRX5AJlPu5qbNLlS9bp8sFUCgc%2FncGPbWLrdBCv%2FqfmBCgWrcMcT%2FArGWf%2BnXdPvpxUjjFoyXa6FTy9VUJceQtF7cpEoaEH3cDiyA%2BAvUPEA609be%2FesiaCpO20tlT0cMNXB9LwGOqUBG%2B26x%2FGmtLAKPHuzGM6QSVJFxFQwHYjScUc%2Bjvwfi%2BjZK%2F1nFykN6jQnesYAs5wufRjuEGTXR%2FSjf99ccC1GxCghYV0xRpY2uR8sxiqwkwXkAzY683wn0pVl%2FQ9Ke4ArvNy5HI9dBCsefNnvCHa0h%2BRhgCK6LtT%2F3yLkJWYnOceVldRFXP8qRv3YLiEaH1sDC4XJVsFGtqvUHmpLHpK9cJMcJ8h7&X-Amz-Signature=6091e062f73937e0940dbbf62d80bb19b0bbabb44313c06fc99bfbf569b8b724&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVBAOQF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClO1QMCDuKWUwJ6114ylyqRiRHX2aLyiFIKz97Tt405AIgIHH2hlynV2bavs7MMjIAFtyYtoLm238UjlxuH%2FPaulYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg4G1dSDpevsI6ESCrcA2breimx9vAzKcofsNioCGsxKlOtyl%2FljUZkCI18nsgZMaEi5tOjqsZ8hIBE9gz%2FzfUQeNuCAB%2F4nVejNejo5BOf%2FrWvlhfAUvi0AvEXu8QdqpaW%2B0DnktzRmpDJjfx%2BcK%2B85lfxtIJWvK%2Bcc33qM89dbbDGbSBszJHIggfdkEpOde0hseqouHhT54vTISNuS6D6QTMxoG3I79teNy%2Firbd8SBNFOKc2X1%2Bii%2BGN6VNTDFZ1%2FKXm5mBTD%2BTYerdIKnk2bTwiFRdYqLJr2UQTUErKKeabA4PsExSSmaw0MbLF%2FL8qEUxIq%2BOe9hXzyL1sS6f3l4BFDRQkY0kfPyma7wJgbRrlsw75fUNDfgnb%2F5Z3TmNegwvK%2BS6dxCvC5e7FDCbtUFsoMao1sYIos5oVbI3E8GG3YCF1ja1AoGE8pVXxGZgGABEVYxbDz2%2BPQhkA87Rs5dViBvkgvk%2B2BNmwMw9NwDdn33UHaZC5xl%2Fb%2FZO9BJI3WJGpitgYc%2FpHiRX5AJlPu5qbNLlS9bp8sFUCgc%2FncGPbWLrdBCv%2FqfmBCgWrcMcT%2FArGWf%2BnXdPvpxUjjFoyXa6FTy9VUJceQtF7cpEoaEH3cDiyA%2BAvUPEA609be%2FesiaCpO20tlT0cMNXB9LwGOqUBG%2B26x%2FGmtLAKPHuzGM6QSVJFxFQwHYjScUc%2Bjvwfi%2BjZK%2F1nFykN6jQnesYAs5wufRjuEGTXR%2FSjf99ccC1GxCghYV0xRpY2uR8sxiqwkwXkAzY683wn0pVl%2FQ9Ke4ArvNy5HI9dBCsefNnvCHa0h%2BRhgCK6LtT%2F3yLkJWYnOceVldRFXP8qRv3YLiEaH1sDC4XJVsFGtqvUHmpLHpK9cJMcJ8h7&X-Amz-Signature=d31287fcc4647c01206a1e1d999f7bce3a1119de6a21ce0271bfa3859f142bac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVBAOQF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClO1QMCDuKWUwJ6114ylyqRiRHX2aLyiFIKz97Tt405AIgIHH2hlynV2bavs7MMjIAFtyYtoLm238UjlxuH%2FPaulYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg4G1dSDpevsI6ESCrcA2breimx9vAzKcofsNioCGsxKlOtyl%2FljUZkCI18nsgZMaEi5tOjqsZ8hIBE9gz%2FzfUQeNuCAB%2F4nVejNejo5BOf%2FrWvlhfAUvi0AvEXu8QdqpaW%2B0DnktzRmpDJjfx%2BcK%2B85lfxtIJWvK%2Bcc33qM89dbbDGbSBszJHIggfdkEpOde0hseqouHhT54vTISNuS6D6QTMxoG3I79teNy%2Firbd8SBNFOKc2X1%2Bii%2BGN6VNTDFZ1%2FKXm5mBTD%2BTYerdIKnk2bTwiFRdYqLJr2UQTUErKKeabA4PsExSSmaw0MbLF%2FL8qEUxIq%2BOe9hXzyL1sS6f3l4BFDRQkY0kfPyma7wJgbRrlsw75fUNDfgnb%2F5Z3TmNegwvK%2BS6dxCvC5e7FDCbtUFsoMao1sYIos5oVbI3E8GG3YCF1ja1AoGE8pVXxGZgGABEVYxbDz2%2BPQhkA87Rs5dViBvkgvk%2B2BNmwMw9NwDdn33UHaZC5xl%2Fb%2FZO9BJI3WJGpitgYc%2FpHiRX5AJlPu5qbNLlS9bp8sFUCgc%2FncGPbWLrdBCv%2FqfmBCgWrcMcT%2FArGWf%2BnXdPvpxUjjFoyXa6FTy9VUJceQtF7cpEoaEH3cDiyA%2BAvUPEA609be%2FesiaCpO20tlT0cMNXB9LwGOqUBG%2B26x%2FGmtLAKPHuzGM6QSVJFxFQwHYjScUc%2Bjvwfi%2BjZK%2F1nFykN6jQnesYAs5wufRjuEGTXR%2FSjf99ccC1GxCghYV0xRpY2uR8sxiqwkwXkAzY683wn0pVl%2FQ9Ke4ArvNy5HI9dBCsefNnvCHa0h%2BRhgCK6LtT%2F3yLkJWYnOceVldRFXP8qRv3YLiEaH1sDC4XJVsFGtqvUHmpLHpK9cJMcJ8h7&X-Amz-Signature=b59e409eba2e4cca04f686182b60fbd45493a0122a2ff797fb824fb1c2510ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVBAOQF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClO1QMCDuKWUwJ6114ylyqRiRHX2aLyiFIKz97Tt405AIgIHH2hlynV2bavs7MMjIAFtyYtoLm238UjlxuH%2FPaulYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg4G1dSDpevsI6ESCrcA2breimx9vAzKcofsNioCGsxKlOtyl%2FljUZkCI18nsgZMaEi5tOjqsZ8hIBE9gz%2FzfUQeNuCAB%2F4nVejNejo5BOf%2FrWvlhfAUvi0AvEXu8QdqpaW%2B0DnktzRmpDJjfx%2BcK%2B85lfxtIJWvK%2Bcc33qM89dbbDGbSBszJHIggfdkEpOde0hseqouHhT54vTISNuS6D6QTMxoG3I79teNy%2Firbd8SBNFOKc2X1%2Bii%2BGN6VNTDFZ1%2FKXm5mBTD%2BTYerdIKnk2bTwiFRdYqLJr2UQTUErKKeabA4PsExSSmaw0MbLF%2FL8qEUxIq%2BOe9hXzyL1sS6f3l4BFDRQkY0kfPyma7wJgbRrlsw75fUNDfgnb%2F5Z3TmNegwvK%2BS6dxCvC5e7FDCbtUFsoMao1sYIos5oVbI3E8GG3YCF1ja1AoGE8pVXxGZgGABEVYxbDz2%2BPQhkA87Rs5dViBvkgvk%2B2BNmwMw9NwDdn33UHaZC5xl%2Fb%2FZO9BJI3WJGpitgYc%2FpHiRX5AJlPu5qbNLlS9bp8sFUCgc%2FncGPbWLrdBCv%2FqfmBCgWrcMcT%2FArGWf%2BnXdPvpxUjjFoyXa6FTy9VUJceQtF7cpEoaEH3cDiyA%2BAvUPEA609be%2FesiaCpO20tlT0cMNXB9LwGOqUBG%2B26x%2FGmtLAKPHuzGM6QSVJFxFQwHYjScUc%2Bjvwfi%2BjZK%2F1nFykN6jQnesYAs5wufRjuEGTXR%2FSjf99ccC1GxCghYV0xRpY2uR8sxiqwkwXkAzY683wn0pVl%2FQ9Ke4ArvNy5HI9dBCsefNnvCHa0h%2BRhgCK6LtT%2F3yLkJWYnOceVldRFXP8qRv3YLiEaH1sDC4XJVsFGtqvUHmpLHpK9cJMcJ8h7&X-Amz-Signature=36f8e365918f75d63373eb81b239a2030d30a616f21a02706faaf602fbd690e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVBAOQF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClO1QMCDuKWUwJ6114ylyqRiRHX2aLyiFIKz97Tt405AIgIHH2hlynV2bavs7MMjIAFtyYtoLm238UjlxuH%2FPaulYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg4G1dSDpevsI6ESCrcA2breimx9vAzKcofsNioCGsxKlOtyl%2FljUZkCI18nsgZMaEi5tOjqsZ8hIBE9gz%2FzfUQeNuCAB%2F4nVejNejo5BOf%2FrWvlhfAUvi0AvEXu8QdqpaW%2B0DnktzRmpDJjfx%2BcK%2B85lfxtIJWvK%2Bcc33qM89dbbDGbSBszJHIggfdkEpOde0hseqouHhT54vTISNuS6D6QTMxoG3I79teNy%2Firbd8SBNFOKc2X1%2Bii%2BGN6VNTDFZ1%2FKXm5mBTD%2BTYerdIKnk2bTwiFRdYqLJr2UQTUErKKeabA4PsExSSmaw0MbLF%2FL8qEUxIq%2BOe9hXzyL1sS6f3l4BFDRQkY0kfPyma7wJgbRrlsw75fUNDfgnb%2F5Z3TmNegwvK%2BS6dxCvC5e7FDCbtUFsoMao1sYIos5oVbI3E8GG3YCF1ja1AoGE8pVXxGZgGABEVYxbDz2%2BPQhkA87Rs5dViBvkgvk%2B2BNmwMw9NwDdn33UHaZC5xl%2Fb%2FZO9BJI3WJGpitgYc%2FpHiRX5AJlPu5qbNLlS9bp8sFUCgc%2FncGPbWLrdBCv%2FqfmBCgWrcMcT%2FArGWf%2BnXdPvpxUjjFoyXa6FTy9VUJceQtF7cpEoaEH3cDiyA%2BAvUPEA609be%2FesiaCpO20tlT0cMNXB9LwGOqUBG%2B26x%2FGmtLAKPHuzGM6QSVJFxFQwHYjScUc%2Bjvwfi%2BjZK%2F1nFykN6jQnesYAs5wufRjuEGTXR%2FSjf99ccC1GxCghYV0xRpY2uR8sxiqwkwXkAzY683wn0pVl%2FQ9Ke4ArvNy5HI9dBCsefNnvCHa0h%2BRhgCK6LtT%2F3yLkJWYnOceVldRFXP8qRv3YLiEaH1sDC4XJVsFGtqvUHmpLHpK9cJMcJ8h7&X-Amz-Signature=9ed677c0077f682f1d1ce78bbe24ab057bbef24bccd8332b187d6a782b59e023&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
