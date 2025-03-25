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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCNQGFSW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYdjq177s4WwKhZLPevt%2FGYDQNc86nWYt6F1m826LmXAIgaoQCkmaGpEGu2ikV%2Fxsy92CsDKGgRM0y4HzaW%2BIVbhIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEw%2BoWl0jkGIk9GLyrcA8rNq7AR8xKhp2ejvPfpsgSuDu2Hnhkx49ndAksHh%2BtQwPJN%2FGzsl7XKU%2BX2H9XF%2FMutmnDg51lzbO52EbGY1bMBSobUQ9l2FOIk6YdCcVE%2Fv6XZF6kirHG9sxtMmJd5qfP40PndVWbzjqFJgmOkw4a0m8I8dIkfFOEMD%2FzyVfBAZHA6SE8GZoCraKNaj42DujgEEvUW4nz3jblxihbUPsOPkAYd3Iaj6j2S0PZgZhJ%2BCmdNIZOW4QxKgPp3ZW3V8awCsOF7zeI3km2nwSsByfRaF1rbfd3VVoge3zlogjYrAeR21N2gEjoynPPZTz6gcn0KKAeZgZkh6D8maa162UQmijgYYUMbHpXEEzcb%2Ft7Y3G3w0TfY0vIuOQl5rAwoycEYfL73QNrzkYJNmct5qsNDR1%2BYpoPj%2FihKJhReFN62ShEnOKrk0Tc%2Fv6iT%2FguapN0iI8CHhdKM03%2F5e%2Bwo368emJKjVvFfjqHcKlVR5CJCtltDRVgcDxdD%2F%2FQs2l%2BcgukDgrKeba1UaslIoXaUgYCHEeuGqMD0Z4L3IMeAln%2FbxG%2B9%2Bh13Md7TNkKCX8tNqjLozdKFNAZy0Pxxs3pnBjgWEm21Gw6X7FUJZ%2BgyXgDOUUq3sdTezAa7uXvGMJyziL8GOqUBInHxriUxSTpFqtbca0qJ10D4OTkRydQvqjbbE84SFmq7XO4UiiqIh1LzMoSfI3Zu8jJyers7jNsIq0DYfXTtHR5pbPsr4pot3lK8wNMMwFVLGqRZKNPp35sFEY5ow0RnzVFuV1xsMZhWyRjHExGXwqGH9hyJUaNPRlhclib%2FL79ja%2FvBPyK9qmr1Mmf0o6hQZRNtb3Hjz%2F5sb5jUpjixbhS4DSVE&X-Amz-Signature=28750b96b17119638b0ceacf2baa17dd5ac953099a5a4a15abe187eeb2af0c35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCNQGFSW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYdjq177s4WwKhZLPevt%2FGYDQNc86nWYt6F1m826LmXAIgaoQCkmaGpEGu2ikV%2Fxsy92CsDKGgRM0y4HzaW%2BIVbhIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEw%2BoWl0jkGIk9GLyrcA8rNq7AR8xKhp2ejvPfpsgSuDu2Hnhkx49ndAksHh%2BtQwPJN%2FGzsl7XKU%2BX2H9XF%2FMutmnDg51lzbO52EbGY1bMBSobUQ9l2FOIk6YdCcVE%2Fv6XZF6kirHG9sxtMmJd5qfP40PndVWbzjqFJgmOkw4a0m8I8dIkfFOEMD%2FzyVfBAZHA6SE8GZoCraKNaj42DujgEEvUW4nz3jblxihbUPsOPkAYd3Iaj6j2S0PZgZhJ%2BCmdNIZOW4QxKgPp3ZW3V8awCsOF7zeI3km2nwSsByfRaF1rbfd3VVoge3zlogjYrAeR21N2gEjoynPPZTz6gcn0KKAeZgZkh6D8maa162UQmijgYYUMbHpXEEzcb%2Ft7Y3G3w0TfY0vIuOQl5rAwoycEYfL73QNrzkYJNmct5qsNDR1%2BYpoPj%2FihKJhReFN62ShEnOKrk0Tc%2Fv6iT%2FguapN0iI8CHhdKM03%2F5e%2Bwo368emJKjVvFfjqHcKlVR5CJCtltDRVgcDxdD%2F%2FQs2l%2BcgukDgrKeba1UaslIoXaUgYCHEeuGqMD0Z4L3IMeAln%2FbxG%2B9%2Bh13Md7TNkKCX8tNqjLozdKFNAZy0Pxxs3pnBjgWEm21Gw6X7FUJZ%2BgyXgDOUUq3sdTezAa7uXvGMJyziL8GOqUBInHxriUxSTpFqtbca0qJ10D4OTkRydQvqjbbE84SFmq7XO4UiiqIh1LzMoSfI3Zu8jJyers7jNsIq0DYfXTtHR5pbPsr4pot3lK8wNMMwFVLGqRZKNPp35sFEY5ow0RnzVFuV1xsMZhWyRjHExGXwqGH9hyJUaNPRlhclib%2FL79ja%2FvBPyK9qmr1Mmf0o6hQZRNtb3Hjz%2F5sb5jUpjixbhS4DSVE&X-Amz-Signature=f375ee0c871fd610e5234bcbc2414541ea3b93df5a5bcca4484a33cdad2c5cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCNQGFSW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYdjq177s4WwKhZLPevt%2FGYDQNc86nWYt6F1m826LmXAIgaoQCkmaGpEGu2ikV%2Fxsy92CsDKGgRM0y4HzaW%2BIVbhIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEw%2BoWl0jkGIk9GLyrcA8rNq7AR8xKhp2ejvPfpsgSuDu2Hnhkx49ndAksHh%2BtQwPJN%2FGzsl7XKU%2BX2H9XF%2FMutmnDg51lzbO52EbGY1bMBSobUQ9l2FOIk6YdCcVE%2Fv6XZF6kirHG9sxtMmJd5qfP40PndVWbzjqFJgmOkw4a0m8I8dIkfFOEMD%2FzyVfBAZHA6SE8GZoCraKNaj42DujgEEvUW4nz3jblxihbUPsOPkAYd3Iaj6j2S0PZgZhJ%2BCmdNIZOW4QxKgPp3ZW3V8awCsOF7zeI3km2nwSsByfRaF1rbfd3VVoge3zlogjYrAeR21N2gEjoynPPZTz6gcn0KKAeZgZkh6D8maa162UQmijgYYUMbHpXEEzcb%2Ft7Y3G3w0TfY0vIuOQl5rAwoycEYfL73QNrzkYJNmct5qsNDR1%2BYpoPj%2FihKJhReFN62ShEnOKrk0Tc%2Fv6iT%2FguapN0iI8CHhdKM03%2F5e%2Bwo368emJKjVvFfjqHcKlVR5CJCtltDRVgcDxdD%2F%2FQs2l%2BcgukDgrKeba1UaslIoXaUgYCHEeuGqMD0Z4L3IMeAln%2FbxG%2B9%2Bh13Md7TNkKCX8tNqjLozdKFNAZy0Pxxs3pnBjgWEm21Gw6X7FUJZ%2BgyXgDOUUq3sdTezAa7uXvGMJyziL8GOqUBInHxriUxSTpFqtbca0qJ10D4OTkRydQvqjbbE84SFmq7XO4UiiqIh1LzMoSfI3Zu8jJyers7jNsIq0DYfXTtHR5pbPsr4pot3lK8wNMMwFVLGqRZKNPp35sFEY5ow0RnzVFuV1xsMZhWyRjHExGXwqGH9hyJUaNPRlhclib%2FL79ja%2FvBPyK9qmr1Mmf0o6hQZRNtb3Hjz%2F5sb5jUpjixbhS4DSVE&X-Amz-Signature=a51b709a3354be6dd92812b80132f04d52b894117381ddd29d1c9d720fb079cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCNQGFSW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYdjq177s4WwKhZLPevt%2FGYDQNc86nWYt6F1m826LmXAIgaoQCkmaGpEGu2ikV%2Fxsy92CsDKGgRM0y4HzaW%2BIVbhIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEw%2BoWl0jkGIk9GLyrcA8rNq7AR8xKhp2ejvPfpsgSuDu2Hnhkx49ndAksHh%2BtQwPJN%2FGzsl7XKU%2BX2H9XF%2FMutmnDg51lzbO52EbGY1bMBSobUQ9l2FOIk6YdCcVE%2Fv6XZF6kirHG9sxtMmJd5qfP40PndVWbzjqFJgmOkw4a0m8I8dIkfFOEMD%2FzyVfBAZHA6SE8GZoCraKNaj42DujgEEvUW4nz3jblxihbUPsOPkAYd3Iaj6j2S0PZgZhJ%2BCmdNIZOW4QxKgPp3ZW3V8awCsOF7zeI3km2nwSsByfRaF1rbfd3VVoge3zlogjYrAeR21N2gEjoynPPZTz6gcn0KKAeZgZkh6D8maa162UQmijgYYUMbHpXEEzcb%2Ft7Y3G3w0TfY0vIuOQl5rAwoycEYfL73QNrzkYJNmct5qsNDR1%2BYpoPj%2FihKJhReFN62ShEnOKrk0Tc%2Fv6iT%2FguapN0iI8CHhdKM03%2F5e%2Bwo368emJKjVvFfjqHcKlVR5CJCtltDRVgcDxdD%2F%2FQs2l%2BcgukDgrKeba1UaslIoXaUgYCHEeuGqMD0Z4L3IMeAln%2FbxG%2B9%2Bh13Md7TNkKCX8tNqjLozdKFNAZy0Pxxs3pnBjgWEm21Gw6X7FUJZ%2BgyXgDOUUq3sdTezAa7uXvGMJyziL8GOqUBInHxriUxSTpFqtbca0qJ10D4OTkRydQvqjbbE84SFmq7XO4UiiqIh1LzMoSfI3Zu8jJyers7jNsIq0DYfXTtHR5pbPsr4pot3lK8wNMMwFVLGqRZKNPp35sFEY5ow0RnzVFuV1xsMZhWyRjHExGXwqGH9hyJUaNPRlhclib%2FL79ja%2FvBPyK9qmr1Mmf0o6hQZRNtb3Hjz%2F5sb5jUpjixbhS4DSVE&X-Amz-Signature=66c58da2eff688e782de394d11362b55319828cd11eece7b4263bae2ed377da9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCNQGFSW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYdjq177s4WwKhZLPevt%2FGYDQNc86nWYt6F1m826LmXAIgaoQCkmaGpEGu2ikV%2Fxsy92CsDKGgRM0y4HzaW%2BIVbhIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEw%2BoWl0jkGIk9GLyrcA8rNq7AR8xKhp2ejvPfpsgSuDu2Hnhkx49ndAksHh%2BtQwPJN%2FGzsl7XKU%2BX2H9XF%2FMutmnDg51lzbO52EbGY1bMBSobUQ9l2FOIk6YdCcVE%2Fv6XZF6kirHG9sxtMmJd5qfP40PndVWbzjqFJgmOkw4a0m8I8dIkfFOEMD%2FzyVfBAZHA6SE8GZoCraKNaj42DujgEEvUW4nz3jblxihbUPsOPkAYd3Iaj6j2S0PZgZhJ%2BCmdNIZOW4QxKgPp3ZW3V8awCsOF7zeI3km2nwSsByfRaF1rbfd3VVoge3zlogjYrAeR21N2gEjoynPPZTz6gcn0KKAeZgZkh6D8maa162UQmijgYYUMbHpXEEzcb%2Ft7Y3G3w0TfY0vIuOQl5rAwoycEYfL73QNrzkYJNmct5qsNDR1%2BYpoPj%2FihKJhReFN62ShEnOKrk0Tc%2Fv6iT%2FguapN0iI8CHhdKM03%2F5e%2Bwo368emJKjVvFfjqHcKlVR5CJCtltDRVgcDxdD%2F%2FQs2l%2BcgukDgrKeba1UaslIoXaUgYCHEeuGqMD0Z4L3IMeAln%2FbxG%2B9%2Bh13Md7TNkKCX8tNqjLozdKFNAZy0Pxxs3pnBjgWEm21Gw6X7FUJZ%2BgyXgDOUUq3sdTezAa7uXvGMJyziL8GOqUBInHxriUxSTpFqtbca0qJ10D4OTkRydQvqjbbE84SFmq7XO4UiiqIh1LzMoSfI3Zu8jJyers7jNsIq0DYfXTtHR5pbPsr4pot3lK8wNMMwFVLGqRZKNPp35sFEY5ow0RnzVFuV1xsMZhWyRjHExGXwqGH9hyJUaNPRlhclib%2FL79ja%2FvBPyK9qmr1Mmf0o6hQZRNtb3Hjz%2F5sb5jUpjixbhS4DSVE&X-Amz-Signature=1037834bc6964a45f19d229bb82bd27bbf5abeaefc10953bb0621cf29afff169&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
