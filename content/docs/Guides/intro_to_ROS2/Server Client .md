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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463DIDKW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDKVzTkOm8HHlE1KwRwtyHQrdayu2hyebDxFNmm4q9kuQIgIQPsELZNhFZZkbMLT5CoSluYeJm1FYP9LNmfa6vFpfYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEyE597leZWUWWVuCrcA%2FDJMV4Gs4rLudoGsX4QwJyAylwTZWDOYjay7MqebWqyYY2CYrOJ042hNzBHASDkJlv4GJVEd2x4R2k0I0h7IyrLI%2BLtraSZJqcWW4yCPa1NRqCKbWEMXEuLtMosDmQQxMub7jONolTTlAbgsbvYFNsuSOVXBYfRbymMDGGxH2EuCq%2FUxkrrJcpo2xsAi7nA5FzA4YPl3rOQ548Oil45Y3sPBw93UbLhb5XiDcf4p6YY%2F0DDJCIx0p9EO9lBw7pDAEclPXwaxiLZBBrLIxrgHVwVXJsY%2BgvPm9i11wtmrQK1TkXo9Puw2V6%2FvHX5onSY11dbCtwyn25UQokgu9oOTJCNRfyQgEzUmHWFVVtORFZtNvP9A42CRrwicv66Oj2bDhybiaBAvrov4KOL%2F2hdqvw11pkThbrV562gWRoR6XgAwr8HA9w3pMF25R6sL24kAe3BPz8SUq3%2BisY7qp8JsswEALlvloDplpqgxW3AT0FQ%2BlCYvWllKl7nQfYaz3rxIKzdI6n6J0BeniHZyrL8DPWDERyp9TNwq0wHHVQCbIh2O1%2FmpJqQZpo3jfurKYaibhwkGVO7uGbOUZaGe%2F0JbB%2FH4egW%2F88kqEGz1izJ4LO4ikklXn2zswYWxvqgMMSS4cIGOqUBN7F7cZHXgeuy9c8KvrvLe%2F4rgGk40bE7VS9QpkjPv2bgOOETbUzRGwlsH%2FuOTGdAH%2Fb6yYIqPHeQWAq6zr6TvrlermLhIDEiWG1koWjXTRGkdwEgcvqw62mRWwaY3jOFU0ggxPKsb8G3tejgYUtc0on2%2FbOCTsUio%2FAYA94Jjcmp7KcwMev82lpDLfI8YGyGpYG28CVwyVhBX9jFMGaG3I%2BHV8%2Bc&X-Amz-Signature=b91b2589eecf824c90c51a464de767572d3afd26f82c902de3a4b23bca6c36ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463DIDKW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDKVzTkOm8HHlE1KwRwtyHQrdayu2hyebDxFNmm4q9kuQIgIQPsELZNhFZZkbMLT5CoSluYeJm1FYP9LNmfa6vFpfYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEyE597leZWUWWVuCrcA%2FDJMV4Gs4rLudoGsX4QwJyAylwTZWDOYjay7MqebWqyYY2CYrOJ042hNzBHASDkJlv4GJVEd2x4R2k0I0h7IyrLI%2BLtraSZJqcWW4yCPa1NRqCKbWEMXEuLtMosDmQQxMub7jONolTTlAbgsbvYFNsuSOVXBYfRbymMDGGxH2EuCq%2FUxkrrJcpo2xsAi7nA5FzA4YPl3rOQ548Oil45Y3sPBw93UbLhb5XiDcf4p6YY%2F0DDJCIx0p9EO9lBw7pDAEclPXwaxiLZBBrLIxrgHVwVXJsY%2BgvPm9i11wtmrQK1TkXo9Puw2V6%2FvHX5onSY11dbCtwyn25UQokgu9oOTJCNRfyQgEzUmHWFVVtORFZtNvP9A42CRrwicv66Oj2bDhybiaBAvrov4KOL%2F2hdqvw11pkThbrV562gWRoR6XgAwr8HA9w3pMF25R6sL24kAe3BPz8SUq3%2BisY7qp8JsswEALlvloDplpqgxW3AT0FQ%2BlCYvWllKl7nQfYaz3rxIKzdI6n6J0BeniHZyrL8DPWDERyp9TNwq0wHHVQCbIh2O1%2FmpJqQZpo3jfurKYaibhwkGVO7uGbOUZaGe%2F0JbB%2FH4egW%2F88kqEGz1izJ4LO4ikklXn2zswYWxvqgMMSS4cIGOqUBN7F7cZHXgeuy9c8KvrvLe%2F4rgGk40bE7VS9QpkjPv2bgOOETbUzRGwlsH%2FuOTGdAH%2Fb6yYIqPHeQWAq6zr6TvrlermLhIDEiWG1koWjXTRGkdwEgcvqw62mRWwaY3jOFU0ggxPKsb8G3tejgYUtc0on2%2FbOCTsUio%2FAYA94Jjcmp7KcwMev82lpDLfI8YGyGpYG28CVwyVhBX9jFMGaG3I%2BHV8%2Bc&X-Amz-Signature=89a13de889770ceb253fb1729127082b3598dc79be5458a7a158bd867a451919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463DIDKW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDKVzTkOm8HHlE1KwRwtyHQrdayu2hyebDxFNmm4q9kuQIgIQPsELZNhFZZkbMLT5CoSluYeJm1FYP9LNmfa6vFpfYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEyE597leZWUWWVuCrcA%2FDJMV4Gs4rLudoGsX4QwJyAylwTZWDOYjay7MqebWqyYY2CYrOJ042hNzBHASDkJlv4GJVEd2x4R2k0I0h7IyrLI%2BLtraSZJqcWW4yCPa1NRqCKbWEMXEuLtMosDmQQxMub7jONolTTlAbgsbvYFNsuSOVXBYfRbymMDGGxH2EuCq%2FUxkrrJcpo2xsAi7nA5FzA4YPl3rOQ548Oil45Y3sPBw93UbLhb5XiDcf4p6YY%2F0DDJCIx0p9EO9lBw7pDAEclPXwaxiLZBBrLIxrgHVwVXJsY%2BgvPm9i11wtmrQK1TkXo9Puw2V6%2FvHX5onSY11dbCtwyn25UQokgu9oOTJCNRfyQgEzUmHWFVVtORFZtNvP9A42CRrwicv66Oj2bDhybiaBAvrov4KOL%2F2hdqvw11pkThbrV562gWRoR6XgAwr8HA9w3pMF25R6sL24kAe3BPz8SUq3%2BisY7qp8JsswEALlvloDplpqgxW3AT0FQ%2BlCYvWllKl7nQfYaz3rxIKzdI6n6J0BeniHZyrL8DPWDERyp9TNwq0wHHVQCbIh2O1%2FmpJqQZpo3jfurKYaibhwkGVO7uGbOUZaGe%2F0JbB%2FH4egW%2F88kqEGz1izJ4LO4ikklXn2zswYWxvqgMMSS4cIGOqUBN7F7cZHXgeuy9c8KvrvLe%2F4rgGk40bE7VS9QpkjPv2bgOOETbUzRGwlsH%2FuOTGdAH%2Fb6yYIqPHeQWAq6zr6TvrlermLhIDEiWG1koWjXTRGkdwEgcvqw62mRWwaY3jOFU0ggxPKsb8G3tejgYUtc0on2%2FbOCTsUio%2FAYA94Jjcmp7KcwMev82lpDLfI8YGyGpYG28CVwyVhBX9jFMGaG3I%2BHV8%2Bc&X-Amz-Signature=c692dc14ebcca2cce6f3da2915c2dc0a704d5ff3aefb64dd8214f634b9e6b04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463DIDKW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDKVzTkOm8HHlE1KwRwtyHQrdayu2hyebDxFNmm4q9kuQIgIQPsELZNhFZZkbMLT5CoSluYeJm1FYP9LNmfa6vFpfYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEyE597leZWUWWVuCrcA%2FDJMV4Gs4rLudoGsX4QwJyAylwTZWDOYjay7MqebWqyYY2CYrOJ042hNzBHASDkJlv4GJVEd2x4R2k0I0h7IyrLI%2BLtraSZJqcWW4yCPa1NRqCKbWEMXEuLtMosDmQQxMub7jONolTTlAbgsbvYFNsuSOVXBYfRbymMDGGxH2EuCq%2FUxkrrJcpo2xsAi7nA5FzA4YPl3rOQ548Oil45Y3sPBw93UbLhb5XiDcf4p6YY%2F0DDJCIx0p9EO9lBw7pDAEclPXwaxiLZBBrLIxrgHVwVXJsY%2BgvPm9i11wtmrQK1TkXo9Puw2V6%2FvHX5onSY11dbCtwyn25UQokgu9oOTJCNRfyQgEzUmHWFVVtORFZtNvP9A42CRrwicv66Oj2bDhybiaBAvrov4KOL%2F2hdqvw11pkThbrV562gWRoR6XgAwr8HA9w3pMF25R6sL24kAe3BPz8SUq3%2BisY7qp8JsswEALlvloDplpqgxW3AT0FQ%2BlCYvWllKl7nQfYaz3rxIKzdI6n6J0BeniHZyrL8DPWDERyp9TNwq0wHHVQCbIh2O1%2FmpJqQZpo3jfurKYaibhwkGVO7uGbOUZaGe%2F0JbB%2FH4egW%2F88kqEGz1izJ4LO4ikklXn2zswYWxvqgMMSS4cIGOqUBN7F7cZHXgeuy9c8KvrvLe%2F4rgGk40bE7VS9QpkjPv2bgOOETbUzRGwlsH%2FuOTGdAH%2Fb6yYIqPHeQWAq6zr6TvrlermLhIDEiWG1koWjXTRGkdwEgcvqw62mRWwaY3jOFU0ggxPKsb8G3tejgYUtc0on2%2FbOCTsUio%2FAYA94Jjcmp7KcwMev82lpDLfI8YGyGpYG28CVwyVhBX9jFMGaG3I%2BHV8%2Bc&X-Amz-Signature=df2ca77ad2dd0aac3a3f65a5112a13d5eebda1f9f1039fc5739fbc34412d6f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463DIDKW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDKVzTkOm8HHlE1KwRwtyHQrdayu2hyebDxFNmm4q9kuQIgIQPsELZNhFZZkbMLT5CoSluYeJm1FYP9LNmfa6vFpfYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEyE597leZWUWWVuCrcA%2FDJMV4Gs4rLudoGsX4QwJyAylwTZWDOYjay7MqebWqyYY2CYrOJ042hNzBHASDkJlv4GJVEd2x4R2k0I0h7IyrLI%2BLtraSZJqcWW4yCPa1NRqCKbWEMXEuLtMosDmQQxMub7jONolTTlAbgsbvYFNsuSOVXBYfRbymMDGGxH2EuCq%2FUxkrrJcpo2xsAi7nA5FzA4YPl3rOQ548Oil45Y3sPBw93UbLhb5XiDcf4p6YY%2F0DDJCIx0p9EO9lBw7pDAEclPXwaxiLZBBrLIxrgHVwVXJsY%2BgvPm9i11wtmrQK1TkXo9Puw2V6%2FvHX5onSY11dbCtwyn25UQokgu9oOTJCNRfyQgEzUmHWFVVtORFZtNvP9A42CRrwicv66Oj2bDhybiaBAvrov4KOL%2F2hdqvw11pkThbrV562gWRoR6XgAwr8HA9w3pMF25R6sL24kAe3BPz8SUq3%2BisY7qp8JsswEALlvloDplpqgxW3AT0FQ%2BlCYvWllKl7nQfYaz3rxIKzdI6n6J0BeniHZyrL8DPWDERyp9TNwq0wHHVQCbIh2O1%2FmpJqQZpo3jfurKYaibhwkGVO7uGbOUZaGe%2F0JbB%2FH4egW%2F88kqEGz1izJ4LO4ikklXn2zswYWxvqgMMSS4cIGOqUBN7F7cZHXgeuy9c8KvrvLe%2F4rgGk40bE7VS9QpkjPv2bgOOETbUzRGwlsH%2FuOTGdAH%2Fb6yYIqPHeQWAq6zr6TvrlermLhIDEiWG1koWjXTRGkdwEgcvqw62mRWwaY3jOFU0ggxPKsb8G3tejgYUtc0on2%2FbOCTsUio%2FAYA94Jjcmp7KcwMev82lpDLfI8YGyGpYG28CVwyVhBX9jFMGaG3I%2BHV8%2Bc&X-Amz-Signature=b39195968143ae3e17ed6e1dd676265c10940fdd6aa7c3a359ba14a70746db2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
