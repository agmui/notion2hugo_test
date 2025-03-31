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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKAG2GE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHZYH%2BEb95h0uXrPA1QZg10LGu5JucccydZ%2FIv4aOj6uAiEApCc50kxE6X2%2FiURfIzVu2mmrsCnfncq6VYpN9Bl%2BSYgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyrbx1FtoRJDMFuTCrcA5VWPNtXIZqK%2BGUjzl19leqdjNTAB5cn5XH%2BoLFRQy%2BQPe0T%2FmrXBbT7CNrh5zhs5TEhi5pGOmV17ZHjmUY6Vk26UbBQNAl1GGtlJsk6fzb9XV6qtIPDC1DgN%2FwJ9VglTASdXle8wQhO4XzBQX%2BXPHMDBDys7sTeI4twxcEhVd46cYjb7KhV9dCuPf7b%2FoWbJwGEfl2Ij%2BCEahE24cLygaV43XVo9HTTAwMIHXIO8GURnw1naHhX70qSLokKSFeaf0waCu4mNBYXf8u34a8VCcbR1ILzuX6ryoCpENr1IguRTPXzvGjki0i9khx25l3ct4l2z6HVZFLyZTHWzgnuGLmn8bM5LK3xHOeHOzgKBmKOeINbCNJAK1xeePkgTOlbN%2BjewLgY8XAGQ6XvU2anHS03KvKtcFqmMIjUyZbpSWGXA7xxs4mfhMn0pzlPF09bcDMrUx%2BQuFZuU%2FzuqbTLX%2FiDwybwxu5svFG1DW1f%2B3feR23x5Y%2BY2t7cJZosPAqj%2Bld3bAuyYGeNXNZl0Ri0iFrLNrFYivovHvKoNASxSsvf3oEwQnpf3KUnfB0SnAOYQasShs3ImmAYL4triejye8Pah26Yc547N%2FmhCTFZttVPGvJ27F4D5yPSNcdoMPO7p78GOqUBubDKX9N6gMolvN40%2BQV3rGrTYbcu%2BILxtdacC7%2BfiEutwQD2DnvqNUqZhd7dUKmwEM43pTgpsTwv4PlFW%2FzcEjboV0D5nKXIwuXEIwBXVXaNPbRdVmmsAIO8h0RfPXkqShZtgSsGL73B8CDUzpy7TmUk7QGykC6civ37uw95DJbVnI30%2F8xodsrLyohUKux3gez%2F0XAzALaifWed%2FIrjKeyGZNZt&X-Amz-Signature=bd181687b60e2676109ea2d4c86658b0af0ce189f165c358b2316153561f9d26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKAG2GE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHZYH%2BEb95h0uXrPA1QZg10LGu5JucccydZ%2FIv4aOj6uAiEApCc50kxE6X2%2FiURfIzVu2mmrsCnfncq6VYpN9Bl%2BSYgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyrbx1FtoRJDMFuTCrcA5VWPNtXIZqK%2BGUjzl19leqdjNTAB5cn5XH%2BoLFRQy%2BQPe0T%2FmrXBbT7CNrh5zhs5TEhi5pGOmV17ZHjmUY6Vk26UbBQNAl1GGtlJsk6fzb9XV6qtIPDC1DgN%2FwJ9VglTASdXle8wQhO4XzBQX%2BXPHMDBDys7sTeI4twxcEhVd46cYjb7KhV9dCuPf7b%2FoWbJwGEfl2Ij%2BCEahE24cLygaV43XVo9HTTAwMIHXIO8GURnw1naHhX70qSLokKSFeaf0waCu4mNBYXf8u34a8VCcbR1ILzuX6ryoCpENr1IguRTPXzvGjki0i9khx25l3ct4l2z6HVZFLyZTHWzgnuGLmn8bM5LK3xHOeHOzgKBmKOeINbCNJAK1xeePkgTOlbN%2BjewLgY8XAGQ6XvU2anHS03KvKtcFqmMIjUyZbpSWGXA7xxs4mfhMn0pzlPF09bcDMrUx%2BQuFZuU%2FzuqbTLX%2FiDwybwxu5svFG1DW1f%2B3feR23x5Y%2BY2t7cJZosPAqj%2Bld3bAuyYGeNXNZl0Ri0iFrLNrFYivovHvKoNASxSsvf3oEwQnpf3KUnfB0SnAOYQasShs3ImmAYL4triejye8Pah26Yc547N%2FmhCTFZttVPGvJ27F4D5yPSNcdoMPO7p78GOqUBubDKX9N6gMolvN40%2BQV3rGrTYbcu%2BILxtdacC7%2BfiEutwQD2DnvqNUqZhd7dUKmwEM43pTgpsTwv4PlFW%2FzcEjboV0D5nKXIwuXEIwBXVXaNPbRdVmmsAIO8h0RfPXkqShZtgSsGL73B8CDUzpy7TmUk7QGykC6civ37uw95DJbVnI30%2F8xodsrLyohUKux3gez%2F0XAzALaifWed%2FIrjKeyGZNZt&X-Amz-Signature=36bf7763ae39e85614e89e62bda2877ae6ca4c4752b4e5854db02a89cb8d6c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKAG2GE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHZYH%2BEb95h0uXrPA1QZg10LGu5JucccydZ%2FIv4aOj6uAiEApCc50kxE6X2%2FiURfIzVu2mmrsCnfncq6VYpN9Bl%2BSYgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyrbx1FtoRJDMFuTCrcA5VWPNtXIZqK%2BGUjzl19leqdjNTAB5cn5XH%2BoLFRQy%2BQPe0T%2FmrXBbT7CNrh5zhs5TEhi5pGOmV17ZHjmUY6Vk26UbBQNAl1GGtlJsk6fzb9XV6qtIPDC1DgN%2FwJ9VglTASdXle8wQhO4XzBQX%2BXPHMDBDys7sTeI4twxcEhVd46cYjb7KhV9dCuPf7b%2FoWbJwGEfl2Ij%2BCEahE24cLygaV43XVo9HTTAwMIHXIO8GURnw1naHhX70qSLokKSFeaf0waCu4mNBYXf8u34a8VCcbR1ILzuX6ryoCpENr1IguRTPXzvGjki0i9khx25l3ct4l2z6HVZFLyZTHWzgnuGLmn8bM5LK3xHOeHOzgKBmKOeINbCNJAK1xeePkgTOlbN%2BjewLgY8XAGQ6XvU2anHS03KvKtcFqmMIjUyZbpSWGXA7xxs4mfhMn0pzlPF09bcDMrUx%2BQuFZuU%2FzuqbTLX%2FiDwybwxu5svFG1DW1f%2B3feR23x5Y%2BY2t7cJZosPAqj%2Bld3bAuyYGeNXNZl0Ri0iFrLNrFYivovHvKoNASxSsvf3oEwQnpf3KUnfB0SnAOYQasShs3ImmAYL4triejye8Pah26Yc547N%2FmhCTFZttVPGvJ27F4D5yPSNcdoMPO7p78GOqUBubDKX9N6gMolvN40%2BQV3rGrTYbcu%2BILxtdacC7%2BfiEutwQD2DnvqNUqZhd7dUKmwEM43pTgpsTwv4PlFW%2FzcEjboV0D5nKXIwuXEIwBXVXaNPbRdVmmsAIO8h0RfPXkqShZtgSsGL73B8CDUzpy7TmUk7QGykC6civ37uw95DJbVnI30%2F8xodsrLyohUKux3gez%2F0XAzALaifWed%2FIrjKeyGZNZt&X-Amz-Signature=d8efe5bb217b70e8cfb4e54dd4a6492e4d37293ac7ec83097d40034c248a04c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKAG2GE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHZYH%2BEb95h0uXrPA1QZg10LGu5JucccydZ%2FIv4aOj6uAiEApCc50kxE6X2%2FiURfIzVu2mmrsCnfncq6VYpN9Bl%2BSYgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyrbx1FtoRJDMFuTCrcA5VWPNtXIZqK%2BGUjzl19leqdjNTAB5cn5XH%2BoLFRQy%2BQPe0T%2FmrXBbT7CNrh5zhs5TEhi5pGOmV17ZHjmUY6Vk26UbBQNAl1GGtlJsk6fzb9XV6qtIPDC1DgN%2FwJ9VglTASdXle8wQhO4XzBQX%2BXPHMDBDys7sTeI4twxcEhVd46cYjb7KhV9dCuPf7b%2FoWbJwGEfl2Ij%2BCEahE24cLygaV43XVo9HTTAwMIHXIO8GURnw1naHhX70qSLokKSFeaf0waCu4mNBYXf8u34a8VCcbR1ILzuX6ryoCpENr1IguRTPXzvGjki0i9khx25l3ct4l2z6HVZFLyZTHWzgnuGLmn8bM5LK3xHOeHOzgKBmKOeINbCNJAK1xeePkgTOlbN%2BjewLgY8XAGQ6XvU2anHS03KvKtcFqmMIjUyZbpSWGXA7xxs4mfhMn0pzlPF09bcDMrUx%2BQuFZuU%2FzuqbTLX%2FiDwybwxu5svFG1DW1f%2B3feR23x5Y%2BY2t7cJZosPAqj%2Bld3bAuyYGeNXNZl0Ri0iFrLNrFYivovHvKoNASxSsvf3oEwQnpf3KUnfB0SnAOYQasShs3ImmAYL4triejye8Pah26Yc547N%2FmhCTFZttVPGvJ27F4D5yPSNcdoMPO7p78GOqUBubDKX9N6gMolvN40%2BQV3rGrTYbcu%2BILxtdacC7%2BfiEutwQD2DnvqNUqZhd7dUKmwEM43pTgpsTwv4PlFW%2FzcEjboV0D5nKXIwuXEIwBXVXaNPbRdVmmsAIO8h0RfPXkqShZtgSsGL73B8CDUzpy7TmUk7QGykC6civ37uw95DJbVnI30%2F8xodsrLyohUKux3gez%2F0XAzALaifWed%2FIrjKeyGZNZt&X-Amz-Signature=3e3c4ecad542fb6d70b260b56117a90a9edb12e22a8be4c50930240f2b612d87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKAG2GE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHZYH%2BEb95h0uXrPA1QZg10LGu5JucccydZ%2FIv4aOj6uAiEApCc50kxE6X2%2FiURfIzVu2mmrsCnfncq6VYpN9Bl%2BSYgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyrbx1FtoRJDMFuTCrcA5VWPNtXIZqK%2BGUjzl19leqdjNTAB5cn5XH%2BoLFRQy%2BQPe0T%2FmrXBbT7CNrh5zhs5TEhi5pGOmV17ZHjmUY6Vk26UbBQNAl1GGtlJsk6fzb9XV6qtIPDC1DgN%2FwJ9VglTASdXle8wQhO4XzBQX%2BXPHMDBDys7sTeI4twxcEhVd46cYjb7KhV9dCuPf7b%2FoWbJwGEfl2Ij%2BCEahE24cLygaV43XVo9HTTAwMIHXIO8GURnw1naHhX70qSLokKSFeaf0waCu4mNBYXf8u34a8VCcbR1ILzuX6ryoCpENr1IguRTPXzvGjki0i9khx25l3ct4l2z6HVZFLyZTHWzgnuGLmn8bM5LK3xHOeHOzgKBmKOeINbCNJAK1xeePkgTOlbN%2BjewLgY8XAGQ6XvU2anHS03KvKtcFqmMIjUyZbpSWGXA7xxs4mfhMn0pzlPF09bcDMrUx%2BQuFZuU%2FzuqbTLX%2FiDwybwxu5svFG1DW1f%2B3feR23x5Y%2BY2t7cJZosPAqj%2Bld3bAuyYGeNXNZl0Ri0iFrLNrFYivovHvKoNASxSsvf3oEwQnpf3KUnfB0SnAOYQasShs3ImmAYL4triejye8Pah26Yc547N%2FmhCTFZttVPGvJ27F4D5yPSNcdoMPO7p78GOqUBubDKX9N6gMolvN40%2BQV3rGrTYbcu%2BILxtdacC7%2BfiEutwQD2DnvqNUqZhd7dUKmwEM43pTgpsTwv4PlFW%2FzcEjboV0D5nKXIwuXEIwBXVXaNPbRdVmmsAIO8h0RfPXkqShZtgSsGL73B8CDUzpy7TmUk7QGykC6civ37uw95DJbVnI30%2F8xodsrLyohUKux3gez%2F0XAzALaifWed%2FIrjKeyGZNZt&X-Amz-Signature=d26b44fdf43cca470e43b128791d42b564b45da80190668c9274e284fe3551fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
