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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ABF6GP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjJ1Z3cY0%2FwTwzHj%2BR7vjAICia%2Fy8aPqac7F60EsodAIgMcaE0pyvEyBKr%2FfiP4QF%2BoQUPCG%2BLllpPQ7G9wSan9sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDITo9b2ZC6vzNbEIayrcA7dXQQsofHKTvlyZFDP6nmn7IsBLDtI%2BrHUkhabgVhi8AUFt%2FGvp6wYe83Q2RwISB3%2FZLyED%2BMI1aJlyFOlbdzevVIM8w4TVr%2BVROCtTiQ28YW8w4DlHMp32rWNfoPD6Sjiv0wdIqvbLmUGVeEani02Ecta7xI5%2BB0qd2GEgs2g8RK0dKNV%2Bp4SBvtJz1js3sK6ByyIb5LT%2Fs2ZaMNa8zO4pYzxY2GobA10UJeCJ6p3HR5N6HtiGyRr1sXsjZ%2Bl1C9afkdFkjGejZDn1a%2BjmOkL4zA4xaAziah9A1Z8e3zp3yVaDmV%2BMYdcTjspqY4%2F1eqWejn1zVvs0O6HVQmncq%2BtVixbPNJHCbbkygbwrtZrg150Xcq12m6eDeBEgaBu6JWhwQm446pV%2FO2ggL1xfZwWsZ5DQO7ef%2FXc2xWj7f16tpXeBxMXTQE4ueYOHnZ26wcI1lQsMkU6rPBfM%2FgdNmqRvvHGmnX8yVSXb9xNZVyJ2npmmyP747uN0ZERMbgnycI%2FCJaic60kpqXnQpn9%2BXc9PiHpOTHQUOXV83Kd0cx8bBpJb8dXoI0v%2FcLOb8TOekKWvQfevB78PUvmvaQN5jip3%2BZPTsQXj642Y2J10CCbUEBQzM4ZKU2QpqDM9MKOI4b4GOqUB37KpVBwRjytNyfQV%2BzlosLtisPcFhNCfJYJApCCXr66j%2FhjRjgoL4hn7dHCrlt8P5qGiiLhLpmjit1EKXsxazrDOlJDAc%2BSvOZJhALg%2Byme7aJ7ExipNT8AM6F0%2BrsXaxLkT8tMEBTNk6w0%2Bb%2BHzyFlxEG18VnYVXuwAWxkd%2F%2B6rxqLa%2BBM%2BtmXIDlCh%2BmlA9vrnUNln8KrLV48Lba2h1%2BWtJ4kJ&X-Amz-Signature=6c1bea8408e3b02d7e8d342f8f06b22d252d5f51708ed9689225456b5e33d512&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ABF6GP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjJ1Z3cY0%2FwTwzHj%2BR7vjAICia%2Fy8aPqac7F60EsodAIgMcaE0pyvEyBKr%2FfiP4QF%2BoQUPCG%2BLllpPQ7G9wSan9sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDITo9b2ZC6vzNbEIayrcA7dXQQsofHKTvlyZFDP6nmn7IsBLDtI%2BrHUkhabgVhi8AUFt%2FGvp6wYe83Q2RwISB3%2FZLyED%2BMI1aJlyFOlbdzevVIM8w4TVr%2BVROCtTiQ28YW8w4DlHMp32rWNfoPD6Sjiv0wdIqvbLmUGVeEani02Ecta7xI5%2BB0qd2GEgs2g8RK0dKNV%2Bp4SBvtJz1js3sK6ByyIb5LT%2Fs2ZaMNa8zO4pYzxY2GobA10UJeCJ6p3HR5N6HtiGyRr1sXsjZ%2Bl1C9afkdFkjGejZDn1a%2BjmOkL4zA4xaAziah9A1Z8e3zp3yVaDmV%2BMYdcTjspqY4%2F1eqWejn1zVvs0O6HVQmncq%2BtVixbPNJHCbbkygbwrtZrg150Xcq12m6eDeBEgaBu6JWhwQm446pV%2FO2ggL1xfZwWsZ5DQO7ef%2FXc2xWj7f16tpXeBxMXTQE4ueYOHnZ26wcI1lQsMkU6rPBfM%2FgdNmqRvvHGmnX8yVSXb9xNZVyJ2npmmyP747uN0ZERMbgnycI%2FCJaic60kpqXnQpn9%2BXc9PiHpOTHQUOXV83Kd0cx8bBpJb8dXoI0v%2FcLOb8TOekKWvQfevB78PUvmvaQN5jip3%2BZPTsQXj642Y2J10CCbUEBQzM4ZKU2QpqDM9MKOI4b4GOqUB37KpVBwRjytNyfQV%2BzlosLtisPcFhNCfJYJApCCXr66j%2FhjRjgoL4hn7dHCrlt8P5qGiiLhLpmjit1EKXsxazrDOlJDAc%2BSvOZJhALg%2Byme7aJ7ExipNT8AM6F0%2BrsXaxLkT8tMEBTNk6w0%2Bb%2BHzyFlxEG18VnYVXuwAWxkd%2F%2B6rxqLa%2BBM%2BtmXIDlCh%2BmlA9vrnUNln8KrLV48Lba2h1%2BWtJ4kJ&X-Amz-Signature=f878a0f7e3f526cd430e10b36341df64dcbd9108f8bc5786ab7ed9180cde92b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ABF6GP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjJ1Z3cY0%2FwTwzHj%2BR7vjAICia%2Fy8aPqac7F60EsodAIgMcaE0pyvEyBKr%2FfiP4QF%2BoQUPCG%2BLllpPQ7G9wSan9sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDITo9b2ZC6vzNbEIayrcA7dXQQsofHKTvlyZFDP6nmn7IsBLDtI%2BrHUkhabgVhi8AUFt%2FGvp6wYe83Q2RwISB3%2FZLyED%2BMI1aJlyFOlbdzevVIM8w4TVr%2BVROCtTiQ28YW8w4DlHMp32rWNfoPD6Sjiv0wdIqvbLmUGVeEani02Ecta7xI5%2BB0qd2GEgs2g8RK0dKNV%2Bp4SBvtJz1js3sK6ByyIb5LT%2Fs2ZaMNa8zO4pYzxY2GobA10UJeCJ6p3HR5N6HtiGyRr1sXsjZ%2Bl1C9afkdFkjGejZDn1a%2BjmOkL4zA4xaAziah9A1Z8e3zp3yVaDmV%2BMYdcTjspqY4%2F1eqWejn1zVvs0O6HVQmncq%2BtVixbPNJHCbbkygbwrtZrg150Xcq12m6eDeBEgaBu6JWhwQm446pV%2FO2ggL1xfZwWsZ5DQO7ef%2FXc2xWj7f16tpXeBxMXTQE4ueYOHnZ26wcI1lQsMkU6rPBfM%2FgdNmqRvvHGmnX8yVSXb9xNZVyJ2npmmyP747uN0ZERMbgnycI%2FCJaic60kpqXnQpn9%2BXc9PiHpOTHQUOXV83Kd0cx8bBpJb8dXoI0v%2FcLOb8TOekKWvQfevB78PUvmvaQN5jip3%2BZPTsQXj642Y2J10CCbUEBQzM4ZKU2QpqDM9MKOI4b4GOqUB37KpVBwRjytNyfQV%2BzlosLtisPcFhNCfJYJApCCXr66j%2FhjRjgoL4hn7dHCrlt8P5qGiiLhLpmjit1EKXsxazrDOlJDAc%2BSvOZJhALg%2Byme7aJ7ExipNT8AM6F0%2BrsXaxLkT8tMEBTNk6w0%2Bb%2BHzyFlxEG18VnYVXuwAWxkd%2F%2B6rxqLa%2BBM%2BtmXIDlCh%2BmlA9vrnUNln8KrLV48Lba2h1%2BWtJ4kJ&X-Amz-Signature=cf3f23c37cb2a7b5188fef6485dff090884365d85bf9190a0f373a33dca561bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ABF6GP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjJ1Z3cY0%2FwTwzHj%2BR7vjAICia%2Fy8aPqac7F60EsodAIgMcaE0pyvEyBKr%2FfiP4QF%2BoQUPCG%2BLllpPQ7G9wSan9sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDITo9b2ZC6vzNbEIayrcA7dXQQsofHKTvlyZFDP6nmn7IsBLDtI%2BrHUkhabgVhi8AUFt%2FGvp6wYe83Q2RwISB3%2FZLyED%2BMI1aJlyFOlbdzevVIM8w4TVr%2BVROCtTiQ28YW8w4DlHMp32rWNfoPD6Sjiv0wdIqvbLmUGVeEani02Ecta7xI5%2BB0qd2GEgs2g8RK0dKNV%2Bp4SBvtJz1js3sK6ByyIb5LT%2Fs2ZaMNa8zO4pYzxY2GobA10UJeCJ6p3HR5N6HtiGyRr1sXsjZ%2Bl1C9afkdFkjGejZDn1a%2BjmOkL4zA4xaAziah9A1Z8e3zp3yVaDmV%2BMYdcTjspqY4%2F1eqWejn1zVvs0O6HVQmncq%2BtVixbPNJHCbbkygbwrtZrg150Xcq12m6eDeBEgaBu6JWhwQm446pV%2FO2ggL1xfZwWsZ5DQO7ef%2FXc2xWj7f16tpXeBxMXTQE4ueYOHnZ26wcI1lQsMkU6rPBfM%2FgdNmqRvvHGmnX8yVSXb9xNZVyJ2npmmyP747uN0ZERMbgnycI%2FCJaic60kpqXnQpn9%2BXc9PiHpOTHQUOXV83Kd0cx8bBpJb8dXoI0v%2FcLOb8TOekKWvQfevB78PUvmvaQN5jip3%2BZPTsQXj642Y2J10CCbUEBQzM4ZKU2QpqDM9MKOI4b4GOqUB37KpVBwRjytNyfQV%2BzlosLtisPcFhNCfJYJApCCXr66j%2FhjRjgoL4hn7dHCrlt8P5qGiiLhLpmjit1EKXsxazrDOlJDAc%2BSvOZJhALg%2Byme7aJ7ExipNT8AM6F0%2BrsXaxLkT8tMEBTNk6w0%2Bb%2BHzyFlxEG18VnYVXuwAWxkd%2F%2B6rxqLa%2BBM%2BtmXIDlCh%2BmlA9vrnUNln8KrLV48Lba2h1%2BWtJ4kJ&X-Amz-Signature=8a8b6199f5e8f5915f0bbe6581588ba05f6677f4b7805ed6a7f50de71fcdf9de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ABF6GP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjJ1Z3cY0%2FwTwzHj%2BR7vjAICia%2Fy8aPqac7F60EsodAIgMcaE0pyvEyBKr%2FfiP4QF%2BoQUPCG%2BLllpPQ7G9wSan9sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDITo9b2ZC6vzNbEIayrcA7dXQQsofHKTvlyZFDP6nmn7IsBLDtI%2BrHUkhabgVhi8AUFt%2FGvp6wYe83Q2RwISB3%2FZLyED%2BMI1aJlyFOlbdzevVIM8w4TVr%2BVROCtTiQ28YW8w4DlHMp32rWNfoPD6Sjiv0wdIqvbLmUGVeEani02Ecta7xI5%2BB0qd2GEgs2g8RK0dKNV%2Bp4SBvtJz1js3sK6ByyIb5LT%2Fs2ZaMNa8zO4pYzxY2GobA10UJeCJ6p3HR5N6HtiGyRr1sXsjZ%2Bl1C9afkdFkjGejZDn1a%2BjmOkL4zA4xaAziah9A1Z8e3zp3yVaDmV%2BMYdcTjspqY4%2F1eqWejn1zVvs0O6HVQmncq%2BtVixbPNJHCbbkygbwrtZrg150Xcq12m6eDeBEgaBu6JWhwQm446pV%2FO2ggL1xfZwWsZ5DQO7ef%2FXc2xWj7f16tpXeBxMXTQE4ueYOHnZ26wcI1lQsMkU6rPBfM%2FgdNmqRvvHGmnX8yVSXb9xNZVyJ2npmmyP747uN0ZERMbgnycI%2FCJaic60kpqXnQpn9%2BXc9PiHpOTHQUOXV83Kd0cx8bBpJb8dXoI0v%2FcLOb8TOekKWvQfevB78PUvmvaQN5jip3%2BZPTsQXj642Y2J10CCbUEBQzM4ZKU2QpqDM9MKOI4b4GOqUB37KpVBwRjytNyfQV%2BzlosLtisPcFhNCfJYJApCCXr66j%2FhjRjgoL4hn7dHCrlt8P5qGiiLhLpmjit1EKXsxazrDOlJDAc%2BSvOZJhALg%2Byme7aJ7ExipNT8AM6F0%2BrsXaxLkT8tMEBTNk6w0%2Bb%2BHzyFlxEG18VnYVXuwAWxkd%2F%2B6rxqLa%2BBM%2BtmXIDlCh%2BmlA9vrnUNln8KrLV48Lba2h1%2BWtJ4kJ&X-Amz-Signature=aaf48b2519e0abf6a8c0c690ad556989f62485888f139b8ed4e1ba72bb5d07e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
