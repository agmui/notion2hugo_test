---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3JYAOF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCOYHgMTidYJWtmAJ0flEwL2a0eqJbxwjRQtgPi0IBDkwIhANX9p4h0N2UJuOubwFMJOTPlce2e5rWfvxQjKiHbi8LyKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqX16cf%2F2RutyXGvAq3ANw%2FhfqwlPv9MxUkX3ox4SYkW1iq7nL838XgYryK9nsEfhDa63w0y5vNzmaMFaDiHuG2oz3Wewoq5%2FeWSP07ejmPRLWygpLdGo%2For9HB%2FTK43qCnBwVhcZpIUIFfTCBMdIfc9QqnQX5Y4nFd3XrNVFu%2BcH9MBjDOnUMWPdckTzTWV07VkTPwEu0PNcODVWKc6gIDX5NkHDqpC%2BI3PRCT83vDx%2B3lvfWU%2FgFu3jIiqwh7Y8VpJHAR%2Fv8F6RDY%2BPNjEm5yhHeQiFhxg4ZX1LUa0XeS8NBaDSugxrzDgOyIxrYp3z82ZALIReWxOiovNo098XFjyAVpQVuDiYkzY%2F0YNqt%2F4jzr6mo%2FYN8d3EcFfn7cl7oGTvOFfvGexMBpkIQxQP3aDHWG5ajZ80rfKW5aRWgIRhd%2BjLM45uR7X8vTWWyY2xKxlEr3zxJkohJLLcxRNw7thIILNkojQl4kA%2BVPuOdP1%2FUVaQzANcLQPp0UpagVG3aiWocZU7VUkklMVr3NVRHlr4zuKjiXh0wfHYU1AlieTqzA9KNUj0ARVFPjJ1S1dkDka9El5J%2BXH4ikKr%2FVOIZq2pKdoDh36WvWa6g5AvE6mmSDoHT9sZo1EqoHSXA7AK4CZLAfCm2UVn5hDDZpunQBjqkASFpBn926mbm8Fd5UBq4opiBa5mi33YbG4GAmFzgFXMvgQgmWJmbV6pNgNTvZPiEzbUt4nPbGyCP8HtR3RSNCl%2FUMQOlIpMjvSF3bKsnSoDTWovHFjaPZgDYn5RnqfN3z7G%2FZeggepMbhFwFCR%2BVubbTd9opMiBNRXJ%2BT%2FA6N5W8g59YIong%2F%2Foxqmqb628v4QLx1BvSoF9DJCuw26W0k8HKxE%2Fc&X-Amz-Signature=a5ac578fe40a940ad91a1af0fb82130281412f4f9c102af47521ef7cb0dcb8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3JYAOF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCOYHgMTidYJWtmAJ0flEwL2a0eqJbxwjRQtgPi0IBDkwIhANX9p4h0N2UJuOubwFMJOTPlce2e5rWfvxQjKiHbi8LyKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqX16cf%2F2RutyXGvAq3ANw%2FhfqwlPv9MxUkX3ox4SYkW1iq7nL838XgYryK9nsEfhDa63w0y5vNzmaMFaDiHuG2oz3Wewoq5%2FeWSP07ejmPRLWygpLdGo%2For9HB%2FTK43qCnBwVhcZpIUIFfTCBMdIfc9QqnQX5Y4nFd3XrNVFu%2BcH9MBjDOnUMWPdckTzTWV07VkTPwEu0PNcODVWKc6gIDX5NkHDqpC%2BI3PRCT83vDx%2B3lvfWU%2FgFu3jIiqwh7Y8VpJHAR%2Fv8F6RDY%2BPNjEm5yhHeQiFhxg4ZX1LUa0XeS8NBaDSugxrzDgOyIxrYp3z82ZALIReWxOiovNo098XFjyAVpQVuDiYkzY%2F0YNqt%2F4jzr6mo%2FYN8d3EcFfn7cl7oGTvOFfvGexMBpkIQxQP3aDHWG5ajZ80rfKW5aRWgIRhd%2BjLM45uR7X8vTWWyY2xKxlEr3zxJkohJLLcxRNw7thIILNkojQl4kA%2BVPuOdP1%2FUVaQzANcLQPp0UpagVG3aiWocZU7VUkklMVr3NVRHlr4zuKjiXh0wfHYU1AlieTqzA9KNUj0ARVFPjJ1S1dkDka9El5J%2BXH4ikKr%2FVOIZq2pKdoDh36WvWa6g5AvE6mmSDoHT9sZo1EqoHSXA7AK4CZLAfCm2UVn5hDDZpunQBjqkASFpBn926mbm8Fd5UBq4opiBa5mi33YbG4GAmFzgFXMvgQgmWJmbV6pNgNTvZPiEzbUt4nPbGyCP8HtR3RSNCl%2FUMQOlIpMjvSF3bKsnSoDTWovHFjaPZgDYn5RnqfN3z7G%2FZeggepMbhFwFCR%2BVubbTd9opMiBNRXJ%2BT%2FA6N5W8g59YIong%2F%2Foxqmqb628v4QLx1BvSoF9DJCuw26W0k8HKxE%2Fc&X-Amz-Signature=7d21d04bb8ddeb311f2b2ef6287b24181c4da2563eb184071f26061a9d907c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3JYAOF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCOYHgMTidYJWtmAJ0flEwL2a0eqJbxwjRQtgPi0IBDkwIhANX9p4h0N2UJuOubwFMJOTPlce2e5rWfvxQjKiHbi8LyKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqX16cf%2F2RutyXGvAq3ANw%2FhfqwlPv9MxUkX3ox4SYkW1iq7nL838XgYryK9nsEfhDa63w0y5vNzmaMFaDiHuG2oz3Wewoq5%2FeWSP07ejmPRLWygpLdGo%2For9HB%2FTK43qCnBwVhcZpIUIFfTCBMdIfc9QqnQX5Y4nFd3XrNVFu%2BcH9MBjDOnUMWPdckTzTWV07VkTPwEu0PNcODVWKc6gIDX5NkHDqpC%2BI3PRCT83vDx%2B3lvfWU%2FgFu3jIiqwh7Y8VpJHAR%2Fv8F6RDY%2BPNjEm5yhHeQiFhxg4ZX1LUa0XeS8NBaDSugxrzDgOyIxrYp3z82ZALIReWxOiovNo098XFjyAVpQVuDiYkzY%2F0YNqt%2F4jzr6mo%2FYN8d3EcFfn7cl7oGTvOFfvGexMBpkIQxQP3aDHWG5ajZ80rfKW5aRWgIRhd%2BjLM45uR7X8vTWWyY2xKxlEr3zxJkohJLLcxRNw7thIILNkojQl4kA%2BVPuOdP1%2FUVaQzANcLQPp0UpagVG3aiWocZU7VUkklMVr3NVRHlr4zuKjiXh0wfHYU1AlieTqzA9KNUj0ARVFPjJ1S1dkDka9El5J%2BXH4ikKr%2FVOIZq2pKdoDh36WvWa6g5AvE6mmSDoHT9sZo1EqoHSXA7AK4CZLAfCm2UVn5hDDZpunQBjqkASFpBn926mbm8Fd5UBq4opiBa5mi33YbG4GAmFzgFXMvgQgmWJmbV6pNgNTvZPiEzbUt4nPbGyCP8HtR3RSNCl%2FUMQOlIpMjvSF3bKsnSoDTWovHFjaPZgDYn5RnqfN3z7G%2FZeggepMbhFwFCR%2BVubbTd9opMiBNRXJ%2BT%2FA6N5W8g59YIong%2F%2Foxqmqb628v4QLx1BvSoF9DJCuw26W0k8HKxE%2Fc&X-Amz-Signature=a1d5a7afcafdb49828f3620351eaa0251523e370a09e7ca866332ad57c977268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3JYAOF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCOYHgMTidYJWtmAJ0flEwL2a0eqJbxwjRQtgPi0IBDkwIhANX9p4h0N2UJuOubwFMJOTPlce2e5rWfvxQjKiHbi8LyKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqX16cf%2F2RutyXGvAq3ANw%2FhfqwlPv9MxUkX3ox4SYkW1iq7nL838XgYryK9nsEfhDa63w0y5vNzmaMFaDiHuG2oz3Wewoq5%2FeWSP07ejmPRLWygpLdGo%2For9HB%2FTK43qCnBwVhcZpIUIFfTCBMdIfc9QqnQX5Y4nFd3XrNVFu%2BcH9MBjDOnUMWPdckTzTWV07VkTPwEu0PNcODVWKc6gIDX5NkHDqpC%2BI3PRCT83vDx%2B3lvfWU%2FgFu3jIiqwh7Y8VpJHAR%2Fv8F6RDY%2BPNjEm5yhHeQiFhxg4ZX1LUa0XeS8NBaDSugxrzDgOyIxrYp3z82ZALIReWxOiovNo098XFjyAVpQVuDiYkzY%2F0YNqt%2F4jzr6mo%2FYN8d3EcFfn7cl7oGTvOFfvGexMBpkIQxQP3aDHWG5ajZ80rfKW5aRWgIRhd%2BjLM45uR7X8vTWWyY2xKxlEr3zxJkohJLLcxRNw7thIILNkojQl4kA%2BVPuOdP1%2FUVaQzANcLQPp0UpagVG3aiWocZU7VUkklMVr3NVRHlr4zuKjiXh0wfHYU1AlieTqzA9KNUj0ARVFPjJ1S1dkDka9El5J%2BXH4ikKr%2FVOIZq2pKdoDh36WvWa6g5AvE6mmSDoHT9sZo1EqoHSXA7AK4CZLAfCm2UVn5hDDZpunQBjqkASFpBn926mbm8Fd5UBq4opiBa5mi33YbG4GAmFzgFXMvgQgmWJmbV6pNgNTvZPiEzbUt4nPbGyCP8HtR3RSNCl%2FUMQOlIpMjvSF3bKsnSoDTWovHFjaPZgDYn5RnqfN3z7G%2FZeggepMbhFwFCR%2BVubbTd9opMiBNRXJ%2BT%2FA6N5W8g59YIong%2F%2Foxqmqb628v4QLx1BvSoF9DJCuw26W0k8HKxE%2Fc&X-Amz-Signature=c81bbe13b282e361d5db9bef077cc5331365a87d89edb8595b86bdeeeb44b342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3JYAOF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCOYHgMTidYJWtmAJ0flEwL2a0eqJbxwjRQtgPi0IBDkwIhANX9p4h0N2UJuOubwFMJOTPlce2e5rWfvxQjKiHbi8LyKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqX16cf%2F2RutyXGvAq3ANw%2FhfqwlPv9MxUkX3ox4SYkW1iq7nL838XgYryK9nsEfhDa63w0y5vNzmaMFaDiHuG2oz3Wewoq5%2FeWSP07ejmPRLWygpLdGo%2For9HB%2FTK43qCnBwVhcZpIUIFfTCBMdIfc9QqnQX5Y4nFd3XrNVFu%2BcH9MBjDOnUMWPdckTzTWV07VkTPwEu0PNcODVWKc6gIDX5NkHDqpC%2BI3PRCT83vDx%2B3lvfWU%2FgFu3jIiqwh7Y8VpJHAR%2Fv8F6RDY%2BPNjEm5yhHeQiFhxg4ZX1LUa0XeS8NBaDSugxrzDgOyIxrYp3z82ZALIReWxOiovNo098XFjyAVpQVuDiYkzY%2F0YNqt%2F4jzr6mo%2FYN8d3EcFfn7cl7oGTvOFfvGexMBpkIQxQP3aDHWG5ajZ80rfKW5aRWgIRhd%2BjLM45uR7X8vTWWyY2xKxlEr3zxJkohJLLcxRNw7thIILNkojQl4kA%2BVPuOdP1%2FUVaQzANcLQPp0UpagVG3aiWocZU7VUkklMVr3NVRHlr4zuKjiXh0wfHYU1AlieTqzA9KNUj0ARVFPjJ1S1dkDka9El5J%2BXH4ikKr%2FVOIZq2pKdoDh36WvWa6g5AvE6mmSDoHT9sZo1EqoHSXA7AK4CZLAfCm2UVn5hDDZpunQBjqkASFpBn926mbm8Fd5UBq4opiBa5mi33YbG4GAmFzgFXMvgQgmWJmbV6pNgNTvZPiEzbUt4nPbGyCP8HtR3RSNCl%2FUMQOlIpMjvSF3bKsnSoDTWovHFjaPZgDYn5RnqfN3z7G%2FZeggepMbhFwFCR%2BVubbTd9opMiBNRXJ%2BT%2FA6N5W8g59YIong%2F%2Foxqmqb628v4QLx1BvSoF9DJCuw26W0k8HKxE%2Fc&X-Amz-Signature=d0bc1f6842e4dbf001024ed9e4fb26f8acd34ce369ac0c22ac0befb071905871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
